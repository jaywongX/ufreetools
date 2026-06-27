// Polyfill Node.js core modules in Vite
import { Buffer } from 'buffer'
import process from 'process'
import * as browserOs from 'os-browserify/browser'

window.Buffer = Buffer
window.process = process
window.os = browserOs
window.global = window

import { createApp, markRaw } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import './assets/css/tailwind.css'
import { inject } from '@vercel/analytics'
import { loadLocaleMessages, defaultLocale, i18n } from './composables/useLazyLocales'
import { loadToolArticle } from './composables/useLazyArticle'

// 导入路由和路由守卫设置函数
import { router, setupLanguageGuard } from './router'

// 切换语言时动态加载
export async function setLanguage(locale, toolId) {
  // if (!i18n.global.availableLocales.includes(locale)) {
    const messages = await loadLocaleMessages(locale)
    
    // 如果有 toolId，加载对应的 article
    if (toolId) {
      const article = await loadToolArticle(locale, toolId)
      if (article) {
        // 确保 tools 对象存在
        if (!messages.tools) {
          messages.tools = {}
        }
        if (!messages.tools[toolId]) {
          messages.tools[toolId] = {}
        }
        messages.tools[toolId].article = article
      }
    }

    i18n.global.setLocaleMessage(locale, messages)
  // }
  localStorage.setItem('userLanguage', locale);
  i18n.global.locale.value = locale
  return Promise.resolve()
}

// 设置路由守卫处理语言
setupLanguageGuard(i18n)

// 使用动态导入替代静态导入
// 定义工具组件映射 - 使用懒加载
const lazyComponentMap = {
  // 开发工具
  'CodeObfuscator': () => import('./components/tools/CodeObfuscator.vue'),
  'CodeDiff': () => import('./components/tools/CodeDiff.vue'),
  'CodeFormatter': () => import('./components/tools/CodeFormatter.vue'),
  'CodeComplexity': () => import('./components/tools/CodeComplexity.vue'),
  'CodeBeautifier': () => import('./components/tools/CodeBeautifier.vue'),
  'GitConflictResolver': () => import('./components/tools/GitConflictResolver.vue'),
  'HtmlEntityEncoder': () => import('./components/tools/HtmlEntityEncoder.vue'),
  'HtmlFormatter': () => import('./components/tools/HtmlFormatter.vue'),
  'JSONFormatter': () => import('./components/tools/JSONFormatter.vue'),
  'JavaScriptFormatter': () => import('./components/tools/JavaScriptFormatter.vue'),
  'JwtDebugger': () => import('./components/tools/JwtDebugger.vue'),
  'MockAPIGenerator': () => import('./components/tools/MockAPIGenerator.vue'),
  'OpenApiGenerator': () => import('./components/tools/OpenApiGenerator.vue'),
  'RegexTester': () => import('./components/tools/RegexTester.vue'),
  'SQLFormatter': () => import('./components/tools/SQLFormatter.vue'),
  'UserAgentGenerator': () => import('./components/tools/UserAgentGenerator.vue'),
  'JsonDiffChecker': () => import('./components/tools/JsonDiffChecker.vue'),
  
  // 设计工具
  'CssGradientGenerator': () => import('./components/tools/CssGradientGenerator.vue'),
  'ColorPicker': () => import('./components/tools/ColorPicker.vue'),
  'ColorSchemeGenerator': () => import('./components/tools/ColorSchemeGenerator.vue'),
  'DiagramExamples': () => import('./components/tools/DiagramExamples.vue'),
  'FlowchartGenerator': () => import('./components/tools/FlowchartGenerator.vue'),
  'QRCodeGenerator': () => import('./components/tools/QRCodeGenerator.vue'),
  'SvgOptimizer': () => import('./components/tools/SvgOptimizer.vue'),
  
  // 文本与编辑
  'MarkdownEditor': () => import('./components/tools/MarkdownEditor.vue'),
  'MarkdownToHtml': () => import('./components/tools/MarkdownToHtml.vue'),
  'SensitiveWordFilter': () => import('./components/tools/SensitiveWordFilter.vue'),
  'WordShuffler': () => import('./components/tools/WordShuffler.vue'),
  'Asn1StructureParser': () => import('./components/tools/Asn1StructureParser.vue'),
  'RemoveDuplicatesExcel': () => import('./components/tools/RemoveDuplicatesExcel.vue'),
  
  // 转换工具
  'Base64EncoderDecoder': () => import('./components/tools/Base64EncoderDecoder.vue'),
  'CsvJsonConverter': () => import('./components/tools/CsvJsonConverter.vue'),
  'NumberConverter': () => import('./components/tools/NumberConverter.vue'),
  'TimestampConverter': () => import('./components/tools/TimestampConverter.vue'),
  'UrlEncodeDecode': () => import('./components/tools/UrlEncodeDecode.vue'),
  'XmlJsonConverter': () => import('./components/tools/XmlJsonConverter.vue'),
  'XmlFormatter': () => import('./components/tools/XmlFormatter.vue'),
  'YamlJsonConverter': () => import('./components/tools/YamlJsonConverter.vue'),
  'TimezoneConverter': () => import('./components/tools/TimezoneConverter.vue'),
  'HexAndCalculator': () => import('./components/tools/HexAndCalculator.vue'),
  'HexadecimalCaseConverter': () => import('./components/tools/HexadecimalCaseConverter.vue'),
  'Base64HexConverter': () => import('./components/tools/Base64HexConverter.vue'),
  'CodeToImageConverter': () => import('./components/tools/CodeToImageConverter.vue'),
  'TextToImageConverter': () => import('./components/tools/TextToImageConverter.vue'),
  'TextToHandwritingConverter': () => import('./components/tools/TextToHandwritingConverter.vue'),
  'NumbersToWordsConverter': () => import('./components/tools/NumbersToWordsConverter.vue'),
  'BionicReadingConverter': () => import('./components/tools/BionicReadingConverter.vue'),
  'ExcelToCsvConverter': () => import('./components/tools/ExcelToCsvConverter.vue'),
  'CsvToExcelConverter': () => import('./components/tools/CsvToExcelConverter.vue'),

  // 图像与多媒体
  'IdPhotoMaker': () => import('./components/tools/IdPhotoMaker.vue'),
  'ImageBatchResizer': () => import('./components/tools/ImageBatchResizer.vue'),
  'ImageColorExtractor': () => import('./components/tools/ImageColorExtractor.vue'),
  'ImageCompressor': () => import('./components/tools/ImageCompressor.vue'),
  'ImageCropper': () => import('./components/tools/ImageCropper.vue'),
  'ImageExifViewer': () => import('./components/tools/ImageExifViewer.vue'),
  'ImageFilters': () => import('./components/tools/ImageFilters.vue'),
  'ImageMosaicGenerator': () => import('./components/tools/ImageMosaicGenerator.vue'),
  'ImagePixelator': () => import('./components/tools/ImagePixelator.vue'),
  'ImageToAscii': () => import('./components/tools/ImageToAscii.vue'),
  'ImageWatermark': () => import('./components/tools/ImageWatermark.vue'),
  'GifFrameExtractor': () => import('./components/tools/GifFrameExtractor.vue'),
  'VerticalToHorizontalImage': () => import('./components/tools/VerticalToHorizontalImage.vue'),
  'HorizontalToVerticalImage': () => import('./components/tools/HorizontalToVerticalImage.vue'),
  'InstagramPostGenerator': () => import('./components/tools/InstagramPostGenerator.vue'),
  'JfifJpgConverter': () => import('./components/tools/JfifJpgConverter.vue'),
  'JpgJfifConverter': () => import('./components/tools/JpgJfifConverter.vue'),
  'SealGenerator': () => import('./components/tools/SealGenerator.vue'),
  'InvertImageColors': () => import('./components/tools/InvertImageColors.vue'),
  'ResizeTo1024x576Image': () => import('./components/tools/ResizeTo1024x576Image.vue'),
  'ReduceImageSizeInKbMb': () => import('./components/tools/ReduceImageSizeInKbMb.vue'),
  'RoundCornersImage': () => import('./components/tools/RoundCornersImage.vue'),
  'AddTextToGIF': () => import('./components/tools/AddTextToGIF.vue'),
  'BlurImageBackground': () => import('./components/tools/BlurImageBackground.vue'),
  'ImageToSvg': () => import('./components/tools/ImageToSvg.vue'),
  'ExifViewer': () => import('./components/tools/ExifViewer.vue'),
  'ExifRemover': () => import('./components/tools/ExifRemover.vue'),
  'ImageBase64Converter': () => import('./components/tools/ImageBase64Converter.vue'),
  'ImageToIco': () => import('./components/tools/ImageToIco.vue'),
  'ImageToJpg': () => import('./components/tools/ImageToJpg.vue'),
  'ImageToPng': () => import('./components/tools/ImageToPng.vue'),
  'ImageToWebp': () => import('./components/tools/ImageToWebp.vue'),
  'GifCompressor': () => import('./components/tools/GifCompressor.vue'),
  'ImageToTextConverter': () => import('./components/tools/ImageToTextConverter.vue'),

  // 网络与协议
  'ApiRequestTool': () => import('./components/tools/ApiRequestTool.vue'),
  'CorsGenerator': () => import('./components/tools/CorsGenerator.vue'),
  'CurlConverter': () => import('./components/tools/CurlConverter.vue'),
  'GrpcDebugger': () => import('./components/tools/GrpcDebugger.vue'),
  'HttpHeaderSecurityChecker': () => import('./components/tools/HttpHeaderSecurityChecker.vue'),
  'RequestHeaderEditor': () => import('./components/tools/RequestHeaderEditor.vue'),
  'HttpStatusCodeLookup': () => import('./components/tools/HttpStatusCodeLookup.vue'),
  'IpLookup': () => import('./components/tools/IpLookup.vue'),
  'MqttTester': () => import('./components/tools/MqttTester.vue'),
  'NetworkSpeedTest': () => import('./components/tools/NetworkSpeedTest.vue'),
  'HttpProxyDetector': () => import('./components/tools/HttpProxyDetector.vue'),
  'PageRedirectChecker': () => import('./components/tools/PageRedirectChecker.vue'),
  'UserAgentParser': () => import('./components/tools/UserAgentParser.vue'),
  'UrlParamsParser': () => import('./components/tools/UrlParamsParser.vue'),
  'WebSocketTester': () => import('./components/tools/WebSocketTester.vue'),
  'CookieManager': () => import('./components/tools/CookieManager.vue'),
  
  // 密码安全
  'PasswordGenerator': () => import('./components/tools/PasswordGenerator.vue'),
  'PasswordStrengthChecker': () => import('./components/tools/PasswordStrengthChecker.vue'),
  'HashCalculator': () => import('./components/tools/HashCalculator.vue'),
  'RsaCrypto': () => import('./components/tools/RsaCrypto.vue'),
  'Sm2Crypto': () => import('./components/tools/Sm2Crypto.vue'),
  'SymmetricCrypto': () => import('./components/tools/SymmetricCrypto.vue'),
  'HmacCalculator': () => import('./components/tools/HmacCalculator.vue'),
  'X509CertificateDecoder': () => import('./components/tools/X509CertificateDecoder.vue'),
  'RsaEncryptDecrypt': () => import('./components/tools/RsaEncryptDecrypt.vue'),
  'Sm2EncryptDecrypt': () => import('./components/tools/Sm2EncryptDecrypt.vue'),
  'RsaKeyPairGenerator': () => import('./components/tools/RsaKeyPairGenerator.vue'),
  'Sm2KeyPairGenerator': () => import('./components/tools/Sm2KeyPairGenerator.vue'),
  'RsaSignatureVerifier': () => import('./components/tools/RsaSignatureVerifier.vue'),
  'Sm2SignatureVerifier': () => import('./components/tools/Sm2SignatureVerifier.vue'),
  
  // 实用效率
  'UuidGenerator': () => import('./components/tools/UuidGenerator.vue'),
  'LatexFormulaGenerator': () => import('./components/tools/LatexFormulaGenerator.vue'),
  'CountdownGenerator': () => import('./components/tools/CountdownGenerator.vue'),
  'PomodoroTimer': () => import('./components/tools/PomodoroTimer.vue'),
  'LoanCalculator': () => import('./components/tools/LoanCalculator.vue'),
  'IncomeTaxCalculator': () => import('./components/tools/IncomeTaxCalculator.vue'),
  'BmiCalculator': () => import('./components/tools/BmiCalculator.vue'),
  'HolidayCalendar': () => import('./components/tools/HolidayCalendar.vue'),
  'TodoList': () => import('./components/tools/TodoList.vue'),
  'CurrencyConverter': () => import('./components/tools/CurrencyConverter.vue'),
  'DrawingBoard': () => import('./components/tools/DrawingBoard.vue'),
  'NameGenerator': () => import('./components/tools/NameGenerator.vue'),
  'TravelBudgetPlanner': () => import('./components/tools/TravelBudgetPlanner.vue'),
  'PersonalAccountBook': () => import('./components/tools/PersonalAccountBook.vue'),
  'CashAppFeeCalculator': () => import('./components/tools/CashAppFeeCalculator.vue'),
  'IdNumberGenerator': () => import('./components/tools/IdNumberGenerator.vue'),
  'UnifiedCreditCodeGenerator': () => import('./components/tools/UnifiedCreditCodeGenerator.vue'),
  'ComparingFractionsCalculator': () => import('./components/tools/ComparingFractionsCalculator.vue'),
  'WhatToEat': () => import('./components/tools/WhatToEat.vue'),
  
  // 测绘
  'CoordinateConverter': () => import('./components/tools/CoordinateConverter.vue'),
  'GpsTrackReplay': () => import('./components/tools/GpsTrackReplay.vue'),
  'GaussianProjection': () => import('./components/tools/GaussianProjection.vue'),
  'LidarPointCloudViewer': () => import('./components/tools/LidarPointCloudViewer.vue'),
  'CoordinatePickerAndLatitudeLongitudeQueryTool': () => import('./components/tools/CoordinatePickerAndLatitudeLongitudeQueryTool.vue'),
  'GeodeticMeasurementCalculator': () => import('./components/tools/GeodeticMeasurementCalculator.vue'),
  'ElevationContourGenerator': () => import('./components/tools/ElevationContourGenerator.vue'),
  'SheetDividerCalculator': () => import('./components/tools/SheetDividerCalculator.vue'),
  'GnssTimeConverter': () => import('./components/tools/GnssTimeConverter.vue'),
  'BaselineCalculator': () => import('./components/tools/BaselineCalculator.vue'),
  'AreaPerimeterCalculator': () => import('./components/tools/AreaPerimeterCalculator.vue'),
  'CoordinateFormatConverter': () => import('./components/tools/CoordinateFormatConverter.vue'),
  'ProjectionZoneFinder': () => import('./components/tools/ProjectionZoneFinder.vue'),
  'CoordinateTrajectoryComparator': () => import('./components/tools/CoordinateTrajectoryComparator.vue'),
  'SevenParameterTransformer': () => import('./components/tools/SevenParameterTransformer.vue'),
  'FourParameterTransformer': () => import('./components/tools/FourParameterTransformer.vue'),
  
  // AI
  'ImglyRemoveImageBackground': () => import('./components/tools/ImglyRemoveImageBackground.vue'),
  'AIProfilePhotoAnalyzer': () => import('./components/tools/AIProfilePhotoAnalyzer.vue'),
  'AIAgeGenderEstimator': () => import('./components/tools/AIAgeGenderEstimator.vue'),
  'AIMultiFaceTagger': () => import('./components/tools/AIMultiFaceTagger.vue'),
  'AIFaceLandmarkPainter': () => import('./components/tools/AIFaceLandmarkPainter.vue'),
  'AIFaceMorphBlend': () => import('./components/tools/AIFaceMorphBlend.vue'),
  'AIFacialHeatmapVisualizer': () => import('./components/tools/AIFacialHeatmapVisualizer.vue'),
  'AIFacialFocusZoomer': () => import('./components/tools/AIFacialFocusZoomer.vue'),

  // PDF
  'PDFToWordConverter': () => import('./components/tools/PDFToWordConverter.vue'),
  'PDFToExcelConverter': () => import('./components/tools/PDFToExcelConverter.vue'),
  'PDFToPPTConverter': () => import('./components/tools/PDFToPPTConverter.vue'),
  'PDFToImageConverter': () => import('./components/tools/PDFToImageConverter.vue'),
  'ImageToPdfConverter': () => import('./components/tools/ImageToPDFConverter.vue'),
  'MergePdfOnline': () => import('./components/tools/MergePdfOnline.vue'),
  'PDFSplitter': () => import('./components/tools/PDFSplitter.vue'),
  'PDFWatermark': () => import('./components/tools/PDFWatermark.vue'),
  'PdfEncrypt': () => import('./components/tools/PdfEncrypt.vue'),
  'PdfDecrypt': () => import('./components/tools/PdfDecrypt.vue'),
  'PdfCompressor': () => import('./components/tools/PdfCompressor.vue'),
  'PdfRotator': () => import('./components/tools/PdfRotator.vue'),
  
  // 音频工具
  'AudioToMp3': () => import('./components/tools/AudioToMp3.vue'),
  'AudioToM4a': () => import('./components/tools/AudioToM4a.vue'),
  'AudioToWav': () => import('./components/tools/AudioToWav.vue'),
  'AudioToPcm': () => import('./components/tools/AudioToPcm.vue'),
  'AudioToMidi': () => import('./components/tools/AudioToMidi.vue'),
  'AudioVisualEditor': () => import('./components/tools/AudioVisualEditor.vue'),
  'AudioToAnimate': () => import('./components/tools/AudioToAnimate.vue'),
  'AudioVolumeEditor': () => import('./components/tools/AudioVolumeEditor.vue'),
  'AudioJoiner': () => import('./components/tools/AudioJoiner.vue'),
  'AudioToSrt': () => import('./components/tools/AudioToSrt.vue'),
  'AudioToFlac': () => import('./components/tools/AudioToFlac.vue'),
  'AudioToAac': () => import('./components/tools/AudioToAac.vue'),
  'AudioToOpus': () => import('./components/tools/AudioToOpus.vue'),
  'AudioToAc3': () => import('./components/tools/AudioToAc3.vue'),
  'AudioToText': () => import('./components/tools/AudioToText.vue'),
  'AudioReverse': () => import('./components/tools/AudioReverse.vue'),
  'AudioToOgg': () => import('./components/tools/AudioToOgg.vue'),
  'AudioSpeed': () => import('./components/tools/AudioSpeed.vue'),
  'AudioLoop': () => import('./components/tools/AudioLoop.vue'),
  'AuAddressGenerator': () => import('./components/tools/AuAddressGenerator.vue'),
  'NgAddressGenerator': () => import('./components/tools/NgAddressGenerator.vue'),
  'DeAddressGenerator': () => import('./components/tools/DeAddressGenerator.vue'),
  'RandomIpGenerator': () => import('./components/tools/RandomIpGenerator.vue'),

  // 3D打印
  'StlTo3mfConverter': () => import('./components/tools/StlTo3mfConverter.vue'),
  'StlToObjConverter': () => import('./components/tools/StlToObjConverter.vue'),
  'Stl3mfModelViewer': () => import('./components/tools/Stl3mfModelViewer.vue'),
  'GCodeViewer': () => import('./components/tools/GCodeViewer.vue'),
  'ObjToStlConverter': () => import('./components/tools/ObjToStlConverter.vue'),
  'ThreeMfToStlConverter': () => import('./components/tools/ThreeMfToStlConverter.vue'),
  'StlToGlbConverter': () => import('./components/tools/StlToGlbConverter.vue'),
  'GlbToStlConverter': () => import('./components/tools/GlbToStlConverter.vue'),
  'ObjToThreeMfConverter': () => import('./components/tools/ObjToThreeMfConverter.vue'),

  // 地址生成器
  'UsAddressGenerator': () => import('./components/tools/UsAddressGenerator.vue'),
  'HkAddressGenerator': () => import('./components/tools/HkAddressGenerator.vue'),
  'TurkeyAddressGenerator': () => import('./components/tools/TurkeyAddressGenerator.vue'),
  'FranceAddressGenerator': () => import('./components/tools/FranceAddressGenerator.vue'),
  'FinlandAddressGenerator': () => import('./components/tools/FinlandAddressGenerator.vue'),
  'VietnamAddressGenerator': () => import('./components/tools/VietnamAddressGenerator.vue'),
  'NetherlandsAddressGenerator': () => import('./components/tools/NetherlandsAddressGenerator.vue'),
  'MalaysiaAddressGenerator': () => import('./components/tools/MalaysiaAddressGenerator.vue'),
  'ThailandAddressGenerator': () => import('./components/tools/ThailandAddressGenerator.vue'),
  'IndiaAddressGenerator': () => import('./components/tools/IndiaAddressGenerator.vue'),
  'PakistanAddressGenerator': () => import('./components/tools/PakistanAddressGenerator.vue'),
  'ItalyAddressGenerator': () => import('./components/tools/ItalyAddressGenerator.vue'),
  'SpainAddressGenerator': () => import('./components/tools/SpainAddressGenerator.vue'),
  'RussiaAddressGenerator': () => import('./components/tools/RussiaAddressGenerator.vue'),
  'KazakhstanAddressGenerator': () => import('./components/tools/KazakhstanAddressGenerator.vue'),
  'TaiwanAddressGenerator': () => import('./components/tools/TaiwanAddressGenerator.vue'),
  'JpAddressGenerator': () => import('./components/tools/JpAddressGenerator.vue'),
  'CaAddressGenerator': () => import('./components/tools/CaAddressGenerator.vue'),
  'MacAddressGenerator': () => import('./components/tools/MacAddressGenerator.vue'),
  'CnAddressGenerator': () => import('./components/tools/CnAddressGenerator.vue'),
  'SgAddressGenerator': () => import('./components/tools/SgAddressGenerator.vue'),
  'UkAddressGenerator': () => import('./components/tools/UkAddressGenerator.vue'),
  'KrAddressGenerator': () => import('./components/tools/KrAddressGenerator.vue'),
  'MexicoAddressGenerator': () => import('./components/tools/MexicoAddressGenerator.vue'),
  'WorldAddressGenerator': () => import('./components/tools/WorldAddressGenerator.vue'),
  'PhilippinesAddressGenerator': () => import('./components/tools/PhilippinesAddressGenerator.vue'),
  'IndonesiaAddressGenerator': () => import('./components/tools/IndonesiaAddressGenerator.vue'),
  'BangladeshAddressGenerator': () => import('./components/tools/BangladeshAddressGenerator.vue'),
  'SaudiArabiaAddressGenerator': () => import('./components/tools/SaudiArabiaAddressGenerator.vue'),
  'UaeAddressGenerator': () => import('./components/tools/UaeAddressGenerator.vue'),
  'IsraelAddressGenerator': () => import('./components/tools/IsraelAddressGenerator.vue'),
  'QatarAddressGenerator': () => import('./components/tools/QatarAddressGenerator.vue'),
  'PortugalAddressGenerator': () => import('./components/tools/PortugalAddressGenerator.vue'),
  'PolandAddressGenerator': () => import('./components/tools/PolandAddressGenerator.vue'),
  'SwedenAddressGenerator': () => import('./components/tools/SwedenAddressGenerator.vue'),
  'SwitzerlandAddressGenerator': () => import('./components/tools/SwitzerlandAddressGenerator.vue'),
  'BelgiumAddressGenerator': () => import('./components/tools/BelgiumAddressGenerator.vue'),
  'AustriaAddressGenerator': () => import('./components/tools/AustriaAddressGenerator.vue'),
  'IrelandAddressGenerator': () => import('./components/tools/IrelandAddressGenerator.vue'),
  'DenmarkAddressGenerator': () => import('./components/tools/DenmarkAddressGenerator.vue'),
  'NorwayAddressGenerator': () => import('./components/tools/NorwayAddressGenerator.vue'),
  'GreeceAddressGenerator': () => import('./components/tools/GreeceAddressGenerator.vue'),
  'AlbaniaAddressGenerator': () => import('./components/tools/AlbaniaAddressGenerator.vue'),
  'AndorraAddressGenerator': () => import('./components/tools/AndorraAddressGenerator.vue'),
  'BelarusAddressGenerator': () => import('./components/tools/BelarusAddressGenerator.vue'),
  'BosniaAndHerzegovinaAddressGenerator': () => import('./components/tools/BosniaAndHerzegovinaAddressGenerator.vue'),
  'BulgariaAddressGenerator': () => import('./components/tools/BulgariaAddressGenerator.vue'),
  'CroatiaAddressGenerator': () => import('./components/tools/CroatiaAddressGenerator.vue'),
  'CzechiaAddressGenerator': () => import('./components/tools/CzechiaAddressGenerator.vue'),
  'EstoniaAddressGenerator': () => import('./components/tools/EstoniaAddressGenerator.vue'),
  'HolySeeVaticanAddressGenerator': () => import('./components/tools/HolySeeVaticanAddressGenerator.vue'),
  'HungaryAddressGenerator': () => import('./components/tools/HungaryAddressGenerator.vue'),
  'IcelandAddressGenerator': () => import('./components/tools/IcelandAddressGenerator.vue'),
  'LatviaAddressGenerator': () => import('./components/tools/LatviaAddressGenerator.vue'),
  'LiechtensteinAddressGenerator': () => import('./components/tools/LiechtensteinAddressGenerator.vue'),
  'LithuaniaAddressGenerator': () => import('./components/tools/LithuaniaAddressGenerator.vue'),
  'LuxembourgAddressGenerator': () => import('./components/tools/LuxembourgAddressGenerator.vue'),
  'MoldovaAddressGenerator': () => import('./components/tools/MoldovaAddressGenerator.vue'),
  'MonacoAddressGenerator': () => import('./components/tools/MonacoAddressGenerator.vue'),
  'MontenegroAddressGenerator': () => import('./components/tools/MontenegroAddressGenerator.vue'),
  'NorthMacedoniaAddressGenerator': () => import('./components/tools/NorthMacedoniaAddressGenerator.vue'),
  'RomaniaAddressGenerator': () => import('./components/tools/RomaniaAddressGenerator.vue'),
  'SanMarinoAddressGenerator': () => import('./components/tools/SanMarinoAddressGenerator.vue'),
  'SerbiaAddressGenerator': () => import('./components/tools/SerbiaAddressGenerator.vue'),
  'SlovakiaAddressGenerator': () => import('./components/tools/SlovakiaAddressGenerator.vue'),
  'SloveniaAddressGenerator': () => import('./components/tools/SloveniaAddressGenerator.vue'),
  'UkraineAddressGenerator': () => import('./components/tools/UkraineAddressGenerator.vue'),
  'AfghanistanAddressGenerator': () => import('./components/tools/AfghanistanAddressGenerator.vue'),
  'ArmeniaAddressGenerator': () => import('./components/tools/ArmeniaAddressGenerator.vue'),
  'AzerbaijanAddressGenerator': () => import('./components/tools/AzerbaijanAddressGenerator.vue'),
  'BahrainAddressGenerator': () => import('./components/tools/BahrainAddressGenerator.vue'),
  'BhutanAddressGenerator': () => import('./components/tools/BhutanAddressGenerator.vue'),
  'BruneiAddressGenerator': () => import('./components/tools/BruneiAddressGenerator.vue'),
  'CambodiaAddressGenerator': () => import('./components/tools/CambodiaAddressGenerator.vue'),
  'CyprusAddressGenerator': () => import('./components/tools/CyprusAddressGenerator.vue'),
  'GeorgiaAddressGenerator': () => import('./components/tools/GeorgiaAddressGenerator.vue'),
  'IranAddressGenerator': () => import('./components/tools/IranAddressGenerator.vue'),
  'IraqAddressGenerator': () => import('./components/tools/IraqAddressGenerator.vue'),
  'JordanAddressGenerator': () => import('./components/tools/JordanAddressGenerator.vue'),
  'KuwaitAddressGenerator': () => import('./components/tools/KuwaitAddressGenerator.vue'),
  'KyrgyzstanAddressGenerator': () => import('./components/tools/KyrgyzstanAddressGenerator.vue'),
  'LaosAddressGenerator': () => import('./components/tools/LaosAddressGenerator.vue'),
  'LebanonAddressGenerator': () => import('./components/tools/LebanonAddressGenerator.vue'),
  'MaldivesAddressGenerator': () => import('./components/tools/MaldivesAddressGenerator.vue'),
  'MongoliaAddressGenerator': () => import('./components/tools/MongoliaAddressGenerator.vue'),
  'MyanmarAddressGenerator': () => import('./components/tools/MyanmarAddressGenerator.vue'),
  'NepalAddressGenerator': () => import('./components/tools/NepalAddressGenerator.vue'),
  'NorthKoreaAddressGenerator': () => import('./components/tools/NorthKoreaAddressGenerator.vue'),
  'OmanAddressGenerator': () => import('./components/tools/OmanAddressGenerator.vue'),
  'PalestineAddressGenerator': () => import('./components/tools/PalestineAddressGenerator.vue'),
  'SriLankaAddressGenerator': () => import('./components/tools/SriLankaAddressGenerator.vue'),
  'SyriaAddressGenerator': () => import('./components/tools/SyriaAddressGenerator.vue'),
  'TajikistanAddressGenerator': () => import('./components/tools/TajikistanAddressGenerator.vue'),
  'TimorLesteAddressGenerator': () => import('./components/tools/TimorLesteAddressGenerator.vue'),
  'TurkmenistanAddressGenerator': () => import('./components/tools/TurkmenistanAddressGenerator.vue'),
  'UzbekistanAddressGenerator': () => import('./components/tools/UzbekistanAddressGenerator.vue'),
  'YemenAddressGenerator': () => import('./components/tools/YemenAddressGenerator.vue'),
  'AntiguaAndBarbudaAddressGenerator': () => import('./components/tools/AntiguaAndBarbudaAddressGenerator.vue'),
  'ArgentinaAddressGenerator': () => import('./components/tools/ArgentinaAddressGenerator.vue'),
  'BahamasAddressGenerator': () => import('./components/tools/BahamasAddressGenerator.vue'),
  'BarbadosAddressGenerator': () => import('./components/tools/BarbadosAddressGenerator.vue'),
  'BelizeAddressGenerator': () => import('./components/tools/BelizeAddressGenerator.vue'),
  'BoliviaAddressGenerator': () => import('./components/tools/BoliviaAddressGenerator.vue'),
  'BrazilAddressGenerator': () => import('./components/tools/BrazilAddressGenerator.vue'),
  'ChileAddressGenerator': () => import('./components/tools/ChileAddressGenerator.vue'),
  'ColombiaAddressGenerator': () => import('./components/tools/ColombiaAddressGenerator.vue'),
  'CostaRicaAddressGenerator': () => import('./components/tools/CostaRicaAddressGenerator.vue'),
  'CubaAddressGenerator': () => import('./components/tools/CubaAddressGenerator.vue'),
  'DominicaAddressGenerator': () => import('./components/tools/DominicaAddressGenerator.vue'),
  'DominicanRepublicAddressGenerator': () => import('./components/tools/DominicanRepublicAddressGenerator.vue'),
  'EcuadorAddressGenerator': () => import('./components/tools/EcuadorAddressGenerator.vue'),
  'ElSalvadorAddressGenerator': () => import('./components/tools/ElSalvadorAddressGenerator.vue'),
  'GrenadaAddressGenerator': () => import('./components/tools/GrenadaAddressGenerator.vue'),
  'GuatemalaAddressGenerator': () => import('./components/tools/GuatemalaAddressGenerator.vue'),
  'GuyanaAddressGenerator': () => import('./components/tools/GuyanaAddressGenerator.vue'),
  'HaitiAddressGenerator': () => import('./components/tools/HaitiAddressGenerator.vue'),
  'HondurasAddressGenerator': () => import('./components/tools/HondurasAddressGenerator.vue'),
  'JamaicaAddressGenerator': () => import('./components/tools/JamaicaAddressGenerator.vue'),
  'NicaraguaAddressGenerator': () => import('./components/tools/NicaraguaAddressGenerator.vue'),
  'PanamaAddressGenerator': () => import('./components/tools/PanamaAddressGenerator.vue'),
  'ParaguayAddressGenerator': () => import('./components/tools/ParaguayAddressGenerator.vue'),
  'PeruAddressGenerator': () => import('./components/tools/PeruAddressGenerator.vue'),
  'SaintKittsAndNevisAddressGenerator': () => import('./components/tools/SaintKittsAndNevisAddressGenerator.vue'),
  'SaintLuciaAddressGenerator': () => import('./components/tools/SaintLuciaAddressGenerator.vue'),
  'SaintVincentAndTheGrenadinesAddressGenerator': () => import('./components/tools/SaintVincentAndTheGrenadinesAddressGenerator.vue'),
  'SurinameAddressGenerator': () => import('./components/tools/SurinameAddressGenerator.vue'),
  'TrinidadAndTobagoAddressGenerator': () => import('./components/tools/TrinidadAndTobagoAddressGenerator.vue'),
  'UruguayAddressGenerator': () => import('./components/tools/UruguayAddressGenerator.vue'),
  'VenezuelaAddressGenerator': () => import('./components/tools/VenezuelaAddressGenerator.vue'),
  'AlgeriaAddressGenerator': () => import('./components/tools/AlgeriaAddressGenerator.vue'),
  'AngolaAddressGenerator': () => import('./components/tools/AngolaAddressGenerator.vue'),
  'BeninAddressGenerator': () => import('./components/tools/BeninAddressGenerator.vue'),
  'BotswanaAddressGenerator': () => import('./components/tools/BotswanaAddressGenerator.vue'),
  'BurkinaFasoAddressGenerator': () => import('./components/tools/BurkinaFasoAddressGenerator.vue'),
  'BurundiAddressGenerator': () => import('./components/tools/BurundiAddressGenerator.vue'),
  'CaboVerdeAddressGenerator': () => import('./components/tools/CaboVerdeAddressGenerator.vue'),
  'CameroonAddressGenerator': () => import('./components/tools/CameroonAddressGenerator.vue'),
  'CentralAfricanRepublicAddressGenerator': () => import('./components/tools/CentralAfricanRepublicAddressGenerator.vue'),
  'ChadAddressGenerator': () => import('./components/tools/ChadAddressGenerator.vue'),
  'ComorosAddressGenerator': () => import('./components/tools/ComorosAddressGenerator.vue'),
  'RepublicOfTheCongoAddressGenerator': () => import('./components/tools/RepublicOfTheCongoAddressGenerator.vue'),
  'DemocraticRepublicOfTheCongoAddressGenerator': () => import('./components/tools/DemocraticRepublicOfTheCongoAddressGenerator.vue'),
  'DjiboutiAddressGenerator': () => import('./components/tools/DjiboutiAddressGenerator.vue'),
  'EgyptAddressGenerator': () => import('./components/tools/EgyptAddressGenerator.vue'),
  'EquatorialGuineaAddressGenerator': () => import('./components/tools/EquatorialGuineaAddressGenerator.vue'),
  'EritreaAddressGenerator': () => import('./components/tools/EritreaAddressGenerator.vue'),
  'EswatiniAddressGenerator': () => import('./components/tools/EswatiniAddressGenerator.vue'),
  'EthiopiaAddressGenerator': () => import('./components/tools/EthiopiaAddressGenerator.vue'),
  'GabonAddressGenerator': () => import('./components/tools/GabonAddressGenerator.vue'),
  'GambiaAddressGenerator': () => import('./components/tools/GambiaAddressGenerator.vue'),
  'GhanaAddressGenerator': () => import('./components/tools/GhanaAddressGenerator.vue'),
  'GuineaAddressGenerator': () => import('./components/tools/GuineaAddressGenerator.vue'),
  'GuineaBissauAddressGenerator': () => import('./components/tools/GuineaBissauAddressGenerator.vue'),
  'CoteDIvoireAddressGenerator': () => import('./components/tools/CoteDIvoireAddressGenerator.vue'),
  'KenyaAddressGenerator': () => import('./components/tools/KenyaAddressGenerator.vue'),
  'LesothoAddressGenerator': () => import('./components/tools/LesothoAddressGenerator.vue'),
  'LiberiaAddressGenerator': () => import('./components/tools/LiberiaAddressGenerator.vue'),
  'LibyaAddressGenerator': () => import('./components/tools/LibyaAddressGenerator.vue'),
  'MadagascarAddressGenerator': () => import('./components/tools/MadagascarAddressGenerator.vue'),
  'MalawiAddressGenerator': () => import('./components/tools/MalawiAddressGenerator.vue'),
  'MaliAddressGenerator': () => import('./components/tools/MaliAddressGenerator.vue'),
  'MauritaniaAddressGenerator': () => import('./components/tools/MauritaniaAddressGenerator.vue'),
  'MauritiusAddressGenerator': () => import('./components/tools/MauritiusAddressGenerator.vue'),
  'MoroccoAddressGenerator': () => import('./components/tools/MoroccoAddressGenerator.vue'),
  'MozambiqueAddressGenerator': () => import('./components/tools/MozambiqueAddressGenerator.vue'),
  'NamibiaAddressGenerator': () => import('./components/tools/NamibiaAddressGenerator.vue'),
  'NigerAddressGenerator': () => import('./components/tools/NigerAddressGenerator.vue'),
  'RwandaAddressGenerator': () => import('./components/tools/RwandaAddressGenerator.vue'),
  'SaoTomeAndPrincipeAddressGenerator': () => import('./components/tools/SaoTomeAndPrincipeAddressGenerator.vue'),
  'SenegalAddressGenerator': () => import('./components/tools/SenegalAddressGenerator.vue'),
  'SeychellesAddressGenerator': () => import('./components/tools/SeychellesAddressGenerator.vue'),
  'SierraLeoneAddressGenerator': () => import('./components/tools/SierraLeoneAddressGenerator.vue'),
  'SomaliaAddressGenerator': () => import('./components/tools/SomaliaAddressGenerator.vue'),
  'SouthAfricaAddressGenerator': () => import('./components/tools/SouthAfricaAddressGenerator.vue'),
  'SouthSudanAddressGenerator': () => import('./components/tools/SouthSudanAddressGenerator.vue'),
  'SudanAddressGenerator': () => import('./components/tools/SudanAddressGenerator.vue'),
  'TanzaniaAddressGenerator': () => import('./components/tools/TanzaniaAddressGenerator.vue'),
  'TogoAddressGenerator': () => import('./components/tools/TogoAddressGenerator.vue'),
  'TunisiaAddressGenerator': () => import('./components/tools/TunisiaAddressGenerator.vue'),
  'UgandaAddressGenerator': () => import('./components/tools/UgandaAddressGenerator.vue'),
  'ZambiaAddressGenerator': () => import('./components/tools/ZambiaAddressGenerator.vue'),
  'ZimbabweAddressGenerator': () => import('./components/tools/ZimbabweAddressGenerator.vue'),
  'FijiAddressGenerator': () => import('./components/tools/FijiAddressGenerator.vue'),
  'KiribatiAddressGenerator': () => import('./components/tools/KiribatiAddressGenerator.vue'),
  'MarshallIslandsAddressGenerator': () => import('./components/tools/MarshallIslandsAddressGenerator.vue'),
  'MicronesiaAddressGenerator': () => import('./components/tools/MicronesiaAddressGenerator.vue'),
  'NauruAddressGenerator': () => import('./components/tools/NauruAddressGenerator.vue'),
  'NewZealandAddressGenerator': () => import('./components/tools/NewZealandAddressGenerator.vue'),
  'PalauAddressGenerator': () => import('./components/tools/PalauAddressGenerator.vue'),
  'PapuaNewGuineaAddressGenerator': () => import('./components/tools/PapuaNewGuineaAddressGenerator.vue'),
  'SamoaAddressGenerator': () => import('./components/tools/SamoaAddressGenerator.vue'),
  'SolomonIslandsAddressGenerator': () => import('./components/tools/SolomonIslandsAddressGenerator.vue'),
  'TongaAddressGenerator': () => import('./components/tools/TongaAddressGenerator.vue'),
  'TuvaluAddressGenerator': () => import('./components/tools/TuvaluAddressGenerator.vue'),
  'VanuatuAddressGenerator': () => import('./components/tools/VanuatuAddressGenerator.vue'),
  'KosovoAddressGenerator': () => import('./components/tools/KosovoAddressGenerator.vue'),
  'MaltaAddressGenerator': () => import('./components/tools/MaltaAddressGenerator.vue'),
}

// 用异步 IIFE 启动应用（仅在浏览器环境中执行）
;(async () => {
  // SSR 守卫：在 Node.js 预渲染环境中跳过挂载
  if (typeof document === 'undefined') return;

  // 先加载默认语言包
  const messages = await loadLocaleMessages(defaultLocale)
  i18n.global.setLocaleMessage(defaultLocale, messages)

  // 初始化Vercel Analytics
  inject()

  // 创建应用
  const app = createApp(App)
  const head = createHead()

  app.use(router)
  app.use(i18n)
  app.use(head)

  app.config.globalProperties.lazyComponentMap = lazyComponentMap
  app.config.globalProperties.componentCache = {}

  app.config.globalProperties.getComponent = async function(componentName) {
    if (this.componentCache[componentName]) {
      return this.componentCache[componentName]
    }
    const lazyComponent = this.lazyComponentMap[componentName]
    if (!lazyComponent) {
      console.error(`组件 "${componentName}" 未在懒加载映射中定义`)
      return null
    }
    try {
      const module = await lazyComponent()
      this.componentCache[componentName] = markRaw(module.default)
      return this.componentCache[componentName]
    } catch (error) {
      console.error(`加载组件 "${componentName}" 失败:`, error)
      return null
    }
  }

  app.mount('#app')
  window.app = app
})()