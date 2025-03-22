import codeFormatter from './tools/code-formatter.js';
import jsonFormatter from './tools/json-formatter.js';
import regexTester from './tools/regex-tester.js';
import sqlFormatter from './tools/sql-formatter.js';
import gitConflictResolver from './tools/git-conflict-resolver.js';
import javascriptFormatter from './tools/javascript-formatter.js';
import htmlEntityEncoder from './tools/html-entity-encoder.js';
import jwtDebugger from './tools/jwt-debugger.js';
import codeBeautifier from './tools/code-beautifier.js';
import openApiGenerator from './tools/openapi-generator.js';
import mockApiGenerator from './tools/mock-api-generator.js';
import codeMinifier from './tools/code-minifier.js';
import htmlFormatter from './tools/html-formatter.js';
import cssFormatter from './tools/css-formatter.js';
import rsaCrypto from './tools/rsa-crypto.js';
import codeComplexityAnalyzer from './tools/code-complexity-analyzer.js';
import yamlFormatter from './tools/yaml-formatter.js';
import csvViewer from './tools/csv-viewer.js';
import base64EncoderDecoder from './tools/base64-encoder-decoder.js';
import timestampConverter from './tools/timestamp-converter.js';
import urlEncodeDecode from './tools/url-encode-decode.js';
import xmlFormatter from './tools/xml-formatter.js';
import markdownEditor from './tools/markdown-editor.js';
import jwtDecoder from './tools/jwt-decoder.js';
import colorPicker from './tools/color-picker.js';
import diffViewer from './tools/diff-viewer.js';
import htmlToPdf from './tools/html-to-pdf.js';
import qrCodeGenerator from './tools/qr-code-generator.js';
import jsonYamlConverter from './tools/json-yaml-converter.js';
import sqlDatabaseDesigner from './tools/sql-database-designer.js';
import cronExpressionGenerator from './tools/cron-expression-generator.js';
import imageCompressor from './tools/image-compressor.js';
import uuidGenerator from './tools/uuid-generator.js';
import passwordGenerator from './tools/password-generator.js';
import textCaseConverter from './tools/text-case-converter.js';
import loremIpsumGenerator from './tools/lorem-ipsum-generator.js';
import cssFlexboxGenerator from './tools/css-flexbox-generator.js';
import apiRequestTool from './tools/api-request-tool.js';
import jsonValidator from './tools/json-validator.js';
import urlParser from './tools/url-parser.js';
import hexColorPicker from './tools/hex-color-picker.js';
import csvJsonConverter from './tools/csv-json-converter.js';
import xmlJsonConverter from './tools/xml-json-converter.js';
import jwtValidator from './tools/jwt-validator.js';
import jsonSchemaValidator from './tools/json-schema-validator.js';
import CssGradientGenerator from './tools/css-gradient-generator.js';
import fontConverter from './tools/font-converter.js';
import imageColorExtractor from './tools/image-color-extractor.js';
import regexGenerator from './tools/regex-generator.js';
import javascriptObfuscator from './tools/javascript-obfuscator.js';
import flowchartGenerator from './tools/flowchart-generator.js';
import diagramExamples from './tools/diagram-examples.js';
import markdownToHtml from './tools/markdown-to-html.js';
import sensitiveWordFilter from './tools/sensitive-word-filter.js';
import imageBatchResizer from './tools/image-batch-resizer.js';
import codeDiff from './tools/code-diff.js';
import codeObfuscator from './tools/code-obfuscator.js';
import userAgentGenerator from './tools/user-agent-generator.js';
import numberConverter from './tools/number-converter.js';
import yamlJsonConverter from './tools/yaml-json-converter.js';
import colorSchemeGenerator from './tools/color-scheme-generator.js';
import idPhotoMaker from './tools/id-photo-maker.js';
import imageWatermark from './tools/image-watermark.js';
import imageCropper from './tools/image-cropper.js';
import gifFrameExtractor from './tools/gif-frame-extractor.js';
import svgOptimizer from './tools/svg-optimizer.js';
import imageFilters from './tools/image-filters.js';
import imageExifViewer from './tools/image-exif-viewer.js';
import imageToAscii from './tools/image-to-ascii.js';
import portScanner from './tools/port-scanner.js';
import pingTool from './tools/ping-tool.js';
import networkSpeedTest from './tools/network-speed-test.js';
import httpRequestTool from './tools/http-request-tool.js';
import imageMosaicGenerator from './tools/image-mosaic-generator.js';
import imagePixelator from './tools/image-pixelator.js';
import dnsLookup from './tools/dns-lookup.js';
import ipLookup from './tools/ip-lookup.js';
import httpHeaderSecurityChecker from './tools/http-header-security-checker.js';
import requestHeaderEditor from './tools/request-header-editor.js';
import corsGenerator from './tools/cors-generator.js';
import curlConverter from './tools/curl-converter.js';
import grpcDebugger from './tools/grpc-debugger.js';
import httpProxyDetector from './tools/http-proxy-detector.js';
import urlParamsParser from './tools/url-params-parser.js';
import httpStatusCodeLookup from './tools/http-status-code-lookup.js';
import mqttTester from './tools/mqtt-tester.js';
import websocketTester from './tools/websocket-tester.js';
import passwordStrengthChecker from './tools/password-strength-checker.js';
import hashCalculator from './tools/hash-calculator.js';
import hmacCalculator from './tools/hmac-calculator.js';
import sm2Crypto from './tools/sm2-crypto.js';
import symmetricCrypto from './tools/symmetric-crypto.js';
import pageRedirectChecker from './tools/page-redirect-checker.js';
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
  'code-beautifier': codeBeautifier,
  'openapi-generator': openApiGenerator,
  'mock-api-generator': mockApiGenerator,
  'code-minifier': codeMinifier,
  'html-formatter': htmlFormatter,
  'css-formatter': cssFormatter,
  'rsa-crypto': rsaCrypto,
  'code-complexity-analyzer': codeComplexityAnalyzer,
  'yaml-formatter': yamlFormatter,
  'csv-viewer': csvViewer,
  'base64-encoder-decoder': base64EncoderDecoder,
  'timestamp-converter': timestampConverter,
  'url-encode-decode': urlEncodeDecode,
  'xml-formatter': xmlFormatter,
  'markdown-editor': markdownEditor,
  'jwt-decoder': jwtDecoder,
  'color-picker': colorPicker,
  'diff-viewer': diffViewer,
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
  'api-request-tool': apiRequestTool,
  'json-validator': jsonValidator,
  'url-parser': urlParser,
  'hex-color-picker': hexColorPicker,
  'csv-json-converter': csvJsonConverter,
  'xml-json-converter': xmlJsonConverter,
  'jwt-validator': jwtValidator,
  'json-schema-validator': jsonSchemaValidator,
  'css-gradient-generator': CssGradientGenerator,
  'font-converter': fontConverter,
  'image-color-extractor': imageColorExtractor,
  'regex-generator': regexGenerator,
  'javascript-obfuscator': javascriptObfuscator,
  'flowchart-generator': flowchartGenerator,
  'diagram-examples': diagramExamples,
  'markdown-to-html': markdownToHtml,
  'sensitive-word-filter': sensitiveWordFilter,
  'image-batch-resizer': imageBatchResizer,
  'code-diff':codeDiff,
  'code-obfuscator':codeObfuscator,
  'user-agent-generator':userAgentGenerator,
  'number-converter':numberConverter,
  'yaml-json-converter':yamlJsonConverter,
  'color-scheme-generator':colorSchemeGenerator,
  'id-photo-maker': idPhotoMaker,
  'image-watermark': imageWatermark,
  'image-cropper': imageCropper,
  'gif-frame-extractor': gifFrameExtractor,
  'svg-optimizer': svgOptimizer,
  'image-filters': imageFilters,
  'image-exif-viewer': imageExifViewer,
  'image-to-ascii': imageToAscii,
  'port-scanner': portScanner,
  'ping-tool': pingTool,
  'network-speed-test': networkSpeedTest,
  'http-request-tool': httpRequestTool,
  'image-mosaic-generator': imageMosaicGenerator,
  'image-pixelator': imagePixelator,
  'dns-lookup': dnsLookup,
  'ip-lookup': ipLookup,
  'http-header-security-checker': httpHeaderSecurityChecker,
  'request-header-editor': requestHeaderEditor,
  'cors-generator': corsGenerator,
  'curl-converter': curlConverter,
  'grpc-debugger': grpcDebugger,
  'http-proxy-detector': httpProxyDetector,
  'url-params-parser': urlParamsParser,
  'http-status-code-lookup': httpStatusCodeLookup,
  'mqtt-tester': mqttTester,
  'websocket-tester': websocketTester,
  'password-strength-checker': passwordStrengthChecker,
  'hash-calculator': hashCalculator,
  'hmac-calculator': hmacCalculator,
  'sm2-crypto': sm2Crypto,
  'symmetric-crypto': symmetricCrypto,
  'page-redirect-checker': pageRedirectChecker
}; 