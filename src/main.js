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
  'TextToHandwritingConverter': () => import('./components/tools/TextToHandwritingConverter.vue'),
  'NumbersToWordsConverter': () => import('./components/tools/NumbersToWordsConverter.vue'),
  'BionicReadingConverter': () => import('./components/tools/BionicReadingConverter.vue'),
  
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
}

// 用异步 IIFE 启动应用
;(async () => {
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