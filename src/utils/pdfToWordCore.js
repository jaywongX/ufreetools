/**
 * PDF 转 Word 核心模块
 * 支持：文本型、扫描型、混合型 PDF
 * 转换模式：可编辑优先、版式优先、OCR 识别
 */

import * as pdfjsLib from 'pdfjs-dist';
import { createWorker } from 'tesseract.js';

// 配置 PDF.js worker
if (typeof window !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.mjs`;
}

// PDF 类型枚举
export const PDFType = {
    TEXT: 'text',      // 文本型 PDF
    SCANNED: 'scanned', // 扫描型 PDF
    MIXED: 'mixed'      // 混合型 PDF
};

// 转换模式枚举
export const ConversionMode = {
    EDITABLE: 'editable',   // 可编辑优先
    LAYOUT: 'layout',       // 版式优先
    OCR: 'ocr'             // OCR 识别
};

/**
 * 检测 PDF 类型
 * @param {ArrayBuffer} pdfData - PDF 文件数据
 * @returns {Promise<{type: string, confidence: number, textCoverage: number}>}
 */
export async function detectPDFType(pdfData) {
    try {
        const loadingTask = pdfjsLib.getDocument({ data: pdfData });
        const pdf = await loadingTask.promise;

        const numPages = pdf.numPages;
        const sampleSize = Math.min(3, numPages); // 抽样前3页

        let totalTextLength = 0;
        let totalArea = 0;

        for (let i = 1; i <= sampleSize; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const viewport = page.getViewport({ scale: 1 });

            totalArea += viewport.width * viewport.height;

            // 统计文本长度
            textContent.items.forEach(item => {
                if (item.str && item.str.trim()) {
                    totalTextLength += item.str.length;
                }
            });
        }

        // 计算文本覆盖率（基于字符数和页面面积的比例）
        const textCoverage = totalArea > 0 ? (totalTextLength / (totalArea / 1000)) : 0;

        let type, confidence;

        if (textCoverage > 5) {
            type = PDFType.TEXT;
            confidence = Math.min(0.95, 0.6 + textCoverage / 100);
        } else if (textCoverage < 1) {
            type = PDFType.SCANNED;
            confidence = Math.min(0.95, 0.6 + (1 - textCoverage));
        } else {
            type = PDFType.MIXED;
            confidence = 0.7;
        }

        return {
            type,
            confidence,
            textCoverage,
            numPages
        };
    } catch (error) {
        console.error('PDF type detection failed:', error);
        throw error;
    }
}

/**
 * 提取 PDF 文本内容（可编辑优先模式）
 * @param {ArrayBuffer} pdfData - PDF 文件数据
 * @param {Function} progressCallback - 进度回调 (pageNum, totalPages)
 * @returns {Promise<Array>} - 页面文本数组
 */
export async function extractTextContent(pdfData, progressCallback) {
    const loadingTask = pdfjsLib.getDocument({ data: pdfData });
    const pdf = await loadingTask.promise;
    const numPages = pdf.numPages;
    const pages = [];

    for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();

        // 按行组织文本
        const lines = [];
        let currentLine = { text: '', y: null };

        textContent.items.forEach(item => {
            if (!item.str || !item.str.trim()) return;

            const y = item.transform[5];

            // 判断是否换行（Y坐标变化）
            if (currentLine.y === null || Math.abs(y - currentLine.y) > 2) {
                if (currentLine.text) {
                    lines.push(currentLine.text);
                }
                currentLine = { text: item.str, y };
            } else {
                currentLine.text += ' ' + item.str;
            }
        });

        if (currentLine.text) {
            lines.push(currentLine.text);
        }

        pages.push({
            pageNum: i,
            lines,
            text: lines.join('\n')
        });

        if (progressCallback) {
            progressCallback(i, numPages);
        }
    }

    return pages;
}

/**
 * 提取 PDF 布局内容（版式优先模式）
 * @param {ArrayBuffer} pdfData - PDF 文件数据
 * @param {Function} progressCallback - 进度回调
 * @returns {Promise<Array>} - 页面布局数据
 */
export async function extractLayoutContent(pdfData, progressCallback) {
    const loadingTask = pdfjsLib.getDocument({ data: pdfData });
    const pdf = await loadingTask.promise;
    const numPages = pdf.numPages;
    const pages = [];

    for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const viewport = page.getViewport({ scale: 1 });

        // 保留位置信息的文本块
        const textBlocks = textContent.items.map(item => {
            if (!item.str || !item.str.trim()) return null;

            return {
                text: item.str,
                x: item.transform[4],
                y: viewport.height - item.transform[5], // 转换为从顶部开始的坐标
                width: item.width,
                height: item.height,
                fontSize: Math.sqrt(item.transform[0] * item.transform[0] + item.transform[1] * item.transform[1])
            };
        }).filter(Boolean);

        // 按 Y 坐标分组（检测列）
        const rows = groupByRows(textBlocks, 5); // 5像素容差

        pages.push({
            pageNum: i,
            width: viewport.width,
            height: viewport.height,
            rows,
            textBlocks
        });

        if (progressCallback) {
            progressCallback(i, numPages);
        }
    }

    return pages;
}

/**
 * OCR 识别 PDF 页面
 * @param {ArrayBuffer} pdfData - PDF 文件数据
 * @param {Function} progressCallback - 进度回调
 * @param {AbortSignal} abortSignal - 取消信号
 * @returns {Promise<Array>} - OCR 结果
 */
export async function ocrPDFPages(pdfData, progressCallback, abortSignal) {
    const loadingTask = pdfjsLib.getDocument({ data: pdfData });
    const pdf = await loadingTask.promise;
    const numPages = pdf.numPages;
    const pages = [];

    // 创建 Tesseract worker
    const worker = await createWorker('eng+chi_sim', 1, {
        errorHandler: (err) => console.error('OCR Error:', err)
    });

    try {
        for (let i = 1; i <= numPages; i++) {
            if (abortSignal?.aborted) {
                throw new Error('OCR cancelled');
            }

            const page = await pdf.getPage(i);
            const viewport = page.getViewport({ scale: 2 }); // 提高分辨率

            // 渲染到 Canvas
            const canvas = document.createElement('canvas');
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            const context = canvas.getContext('2d');

            await page.render({
                canvasContext: context,
                viewport: viewport
            }).promise;

            // OCR 识别
            const { data } = await worker.recognize(canvas);

            // 提取文本行，处理可能的 undefined
            let lines = [];
            if (data.text) {
                // 如果没有 lines 数组，就按换行符分割文本
                if (data.lines && Array.isArray(data.lines)) {
                    lines = data.lines.map(line => line.text || '');
                } else {
                    lines = data.text.split('\n').filter(line => line.trim());
                }
            }

            pages.push({
                pageNum: i,
                text: data.text || '',
                confidence: data.confidence || 0,
                lines: lines
            });

            if (progressCallback) {
                progressCallback(i, numPages);
            }
        }
    } finally {
        await worker.terminate();
    }

    return pages;
}

/**
 * 将提取的内容转换为 DOCX
 * @param {Array} pages - 页面内容
 * @param {string} mode - 转换模式
 * @returns {Object} - docx Document 对象（未打包）
 */
export function convertToDocx(pages, mode) {
    const children = [];

    pages.forEach((page, index) => {
        // 添加页码标记（除第一页外）
        if (index > 0) {
            children.push({
                type: 'paragraph',
                text: '',
                pageBreakBefore: true
            });
        }

        if (mode === ConversionMode.EDITABLE || mode === ConversionMode.OCR || mode === 'editable' || mode === 'ocr') {
            // 可编辑优先 / OCR 模式：按行添加段落
            if (page.lines && page.lines.length > 0) {
                page.lines.forEach(line => {
                    if (line && line.trim()) {
                        children.push({
                            type: 'paragraph',
                            text: line
                        });
                    }
                });
            }
        } else if (mode === ConversionMode.LAYOUT || mode === 'layout') {
            // 版式优先：按行添加段落
            if (page.rows && page.rows.length > 0) {
                page.rows.forEach(row => {
                    const rowTexts = row.map(block => block.text).join(' ');
                    if (rowTexts.trim()) {
                        children.push({
                            type: 'paragraph',
                            text: rowTexts
                        });
                    }
                });
            }
        }
    });

    // 返回简单的文档结构，稍后在组件中生成真正的 docx
    return {
        pages: children
    };
}

/**
 * 按行分组文本块（辅助函数）
 */
function groupByRows(textBlocks, tolerance = 5) {
    if (!textBlocks.length) return [];

    // 按 Y 坐标排序
    const sorted = [...textBlocks].sort((a, b) => a.y - b.y);

    const rows = [];
    let currentRow = [sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
        const block = sorted[i];
        const prevBlock = sorted[i - 1];

        if (Math.abs(block.y - prevBlock.y) <= tolerance) {
            currentRow.push(block);
        } else {
            // 按 X 坐标排序当前行
            currentRow.sort((a, b) => a.x - b.x);
            rows.push(currentRow);
            currentRow = [block];
        }
    }

    if (currentRow.length > 0) {
        currentRow.sort((a, b) => a.x - b.x);
        rows.push(currentRow);
    }

    return rows;
}

/**
 * 推荐转换模式
 * @param {Object} detection - PDF 类型检测结果
 * @returns {string} - 推荐的转换模式
 */
export function recommendMode(detection) {
    if (detection.type === PDFType.TEXT && detection.textCoverage > 10) {
        return ConversionMode.EDITABLE;
    } else if (detection.type === PDFType.SCANNED) {
        return ConversionMode.OCR;
    } else {
        return ConversionMode.LAYOUT;
    }
}

/**
 * 完整的转换流程
 * @param {File} file - PDF 文件
 * @param {string} mode - 转换模式
 * @param {Function} progressCallback - 进度回调
 * @param {AbortSignal} abortSignal - 取消信号
 * @returns {Promise<{docData: Object, pages: Array}>}
 */
export async function convertPDFToWord(file, mode, progressCallback, abortSignal) {
    const arrayBuffer = await file.arrayBuffer();

    let pages;

    switch (mode) {
        case ConversionMode.EDITABLE:
        case 'editable':
            pages = await extractTextContent(arrayBuffer, progressCallback);
            break;
        case ConversionMode.LAYOUT:
        case 'layout':
            pages = await extractLayoutContent(arrayBuffer, progressCallback);
            break;
        case ConversionMode.OCR:
        case 'ocr':
            pages = await ocrPDFPages(arrayBuffer, progressCallback, abortSignal);
            break;
        default:
            throw new Error('Invalid conversion mode');
    }

    const docData = convertToDocx(pages, mode);

    return { docData, pages };
}
