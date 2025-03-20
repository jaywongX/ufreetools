import codeFormatter from './tools/code-formatter.js';
import jsonFormatter from './tools/json-formatter.js';
import regexTester from './tools/regex-tester.js';
import sqlFormatter from './tools/sql-formatter.js';
import gitConflictResolver from './tools/git-conflict-resolver.js';
import javascriptFormatter from './tools/javascript-formatter.js';
import htmlEntityEncoder from './tools/html-entity-encoder.js';
import jwtDebugger from './tools/jwt-debugger.js';
import codeHighlighter from './tools/code-highlighter.js';
import openApiTsClient from './tools/openapi-ts-client.js';
import mockApiGenerator from './tools/mock-api-generator.js';
import codeMinifier from './tools/code-minifier.js';
import htmlFormatter from './tools/html-formatter.js';
import cssFormatter from './tools/css-formatter.js';
import rsaCrypto from './tools/rsa-crypto.js';
import codeComplexityAnalyzer from './tools/code-complexity-analyzer.js';
import yamlFormatter from './tools/yaml-formatter.js';
import csvViewer from './tools/csv-viewer.js';
import base64Converter from './tools/base64-converter.js';
import timestampConverter from './tools/timestamp-converter.js';
import urlEncoder from './tools/url-encoder.js';
import xmlFormatter from './tools/xml-formatter.js';
import markdownEditor from './tools/markdown-editor.js';
import jwtDecoder from './tools/jwt-decoder.js';
import colorPicker from './tools/color-picker.js';
import diffViewer from './tools/diff-viewer.js';
import hashGenerator from './tools/hash-generator.js';
import htmlToPdf from './tools/html-to-pdf.js';
import qrCodeGenerator from './tools/qr-code-generator.js';
import jsonYamlConverter from './tools/json-yaml-converter.js';
import sqlDatabaseDesigner from './tools/sql-database-designer.js';
import cronExpressionGenerator from './tools/cron-expression-generator.js';
import codeBeautifier from './tools/code-beautifier.js';
import imageCompressor from './tools/image-compressor.js';
import uuidGenerator from './tools/uuid-generator.js';
import passwordGenerator from './tools/password-generator.js';
import textCaseConverter from './tools/text-case-converter.js';
import loremIpsumGenerator from './tools/lorem-ipsum-generator.js';
import cssFlexboxGenerator from './tools/css-flexbox-generator.js';
import apiTestingClient from './tools/api-testing-client.js';
import jsonValidator from './tools/json-validator.js';
import urlParser from './tools/url-parser.js';
import hexColorPicker from './tools/hex-color-picker.js';
import csvToJson from './tools/csv-to-json.js';
import xmlToJson from './tools/xml-to-json.js';
import jwtValidator from './tools/jwt-validator.js';
import jsonSchemaValidator from './tools/json-schema-validator.js';
import cssGridGenerator from './tools/css-grid-generator.js';
import fontConverter from './tools/font-converter.js';
import imageColorExtractor from './tools/image-color-extractor.js';
import regexGenerator from './tools/regex-generator.js';
import javascriptObfuscator from './tools/javascript-obfuscator.js';
// 导入其他工具...

export default {
  // 工具通用文本
  common: {
    tryNow: '立即使用',
    relatedTools: '相关工具',
    popularTools: '热门工具',
    backToHome: '返回首页',
    copyLink: '复制链接',
    share: '分享',
    linkCopied: '链接已复制!',
    runTool: '运行工具',
    processing: '处理中',
    download: '下载',
    upload: '上传',
    dragAndDrop: '拖拽文件到此处',
    or: '或',
    browseFiles: '浏览文件',
    clearFile: '清除文件',
    fileSelected: '已选择文件',
    filesSelected: '已选择多个文件',
    noFileSelected: '未选择文件',
    fileTooBig: '文件过大',
    unsupportedFormat: '不支持的文件格式',
    preview: '预览',
    resetTool: '重置工具',
    settings: '设置',
    saveSettings: '保存设置',
    restoreDefaults: '恢复默认设置',
    history: '历史记录',
    clearHistory: '清除历史',
    noHistory: '无历史记录'
  },
  'json-formatter': jsonFormatter,
  'regex-tester': regexTester,
  'code-formatter': codeFormatter,
  'sql-formatter': sqlFormatter,
  'git-conflict-resolver': gitConflictResolver,
  'javascript-formatter': javascriptFormatter,
  'html-entity-encoder': htmlEntityEncoder,
  'jwt-debugger': jwtDebugger,
  'code-highlighter': codeHighlighter,
  'openapi-ts-client': openApiTsClient,
  'mock-api-generator': mockApiGenerator,
  'code-minifier': codeMinifier,
  'html-formatter': htmlFormatter,
  'css-formatter': cssFormatter,
  'rsa-crypto': rsaCrypto,
  'code-complexity-analyzer': codeComplexityAnalyzer,
  'yaml-formatter': yamlFormatter,
  'csv-viewer': csvViewer,
  'base64-converter': base64Converter,
  'timestamp-converter': timestampConverter,
  'url-encoder': urlEncoder,
  'xml-formatter': xmlFormatter,
  'markdown-editor': markdownEditor,
  'jwt-decoder': jwtDecoder,
  'color-picker': colorPicker,
  'diff-viewer': diffViewer,
  'hash-generator': hashGenerator,
  'html-to-pdf': htmlToPdf,
  'qr-code-generator': qrCodeGenerator,
  'json-yaml-converter': jsonYamlConverter,
  'sql-database-designer': sqlDatabaseDesigner,
  'cron-expression-generator': cronExpressionGenerator,
  'code-beautifier': codeBeautifier,
  'image-compressor': imageCompressor,
  'uuid-generator': uuidGenerator,
  'password-generator': passwordGenerator,
  'text-case-converter': textCaseConverter,
  'lorem-ipsum-generator': loremIpsumGenerator,
  'css-flexbox-generator': cssFlexboxGenerator,
  'api-testing-client': apiTestingClient,
  'json-validator': jsonValidator,
  'url-parser': urlParser,
  'hex-color-picker': hexColorPicker,
  'csv-to-json': csvToJson,
  'xml-to-json': xmlToJson,
  'jwt-validator': jwtValidator,
  'json-schema-validator': jsonSchemaValidator,
  'css-grid-generator': cssGridGenerator,
  'font-converter': fontConverter,
  'image-color-extractor': imageColorExtractor,
  'regex-generator': regexGenerator,
  'javascript-obfuscator': javascriptObfuscator,
}; 