<template>
  <div>
    <!-- 面包屑导航 -->
    <div class="mb-6 text-sm">
      <router-link to="/" class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
        首页
      </router-link>
      <span class="mx-2 text-gray-400">/</span>
      <router-link 
        :to="`/category/${tool.categoryId}`" 
        class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light"
      >
        {{ tool.category }}
      </router-link>
      <span class="mx-2 text-gray-400">/</span>
      <span class="text-gray-700 dark:text-gray-300">{{ tool.name }}</span>
    </div>
    
    <!-- 工具标题和描述 -->
    <div class="mb-8">
      <div class="flex items-center mb-3">
        <div class="w-12 h-12 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="tool.icon" />
          </svg>
        </div>
        <h1 class="text-2xl md:text-3xl font-bold">{{ tool.name }}</h1>
      </div>
      <p class="text-gray-600 dark:text-gray-300">{{ tool.description }}</p>
    </div>
    
    <!-- 工具主体区域 -->
    <div class="mb-8">
      <!-- JSON格式化工具 -->
      <JSONFormatter v-if="tool.id === 1" />
      
      <!-- 正则表达式测试工具 -->
      <RegexTester v-else-if="tool.id === 5" />
      
      <!-- 颜色选择器工具 -->
      <ColorPicker v-else-if="tool.id === 2" />
      
      <!-- CSS渐变生成器 -->
      <GradientGenerator v-else-if="tool.id === 6" />
      
      <!-- Markdown编辑器 -->
      <MarkdownEditor v-else-if="tool.id === 3" />
      
      <!-- 二维码生成器 -->
      <QRCodeGenerator v-else-if="tool.id === 7" />
      
      <!-- 代码美化/压缩工具 -->
      <CodeFormatter v-else-if="tool.id === 9" />
      
      <!-- 代码差异比较工具 -->
      <CodeDiff v-else-if="tool.id === 10" />
      
      <!-- Base64编解码工具 -->
      <Base64Converter v-else-if="tool.id === 11" />
      
      <!-- 时间戳转换工具 -->
      <TimestampConverter v-else-if="tool.id === 12" />
      
      <!-- SQL格式化工具 -->
      <SQLFormatter v-else-if="tool.id === 13" />
      
      <!-- Mock API生成器 -->
      <MockAPIGenerator v-else-if="tool.id === 14" />
      
      <!-- HTTP状态码查询 -->
      <HttpStatusCodeLookup v-else-if="tool.id === 15" />
      
      <!-- 用户代理解析 -->
      <UserAgentParser v-else-if="tool.id === 16" />
      
      <!-- 代码高亮工具 -->
      <CodeHighlighter v-else-if="tool.id === 17" />
      
      <!-- URL编码/解码工具 -->
      <URLEncoder v-else-if="tool.id === 18" />
      
      <!-- HTML实体编码工具 -->
      <HtmlEntityEncoder v-else-if="tool.id === 19" />
      
      <!-- XML解析/格式化工具 -->
      <XmlFormatter v-else-if="tool.id === 20" />
      
      <!-- CSS压缩/美化工具 -->
      <CssFormatter v-else-if="tool.id === 22" />
      
      <!-- WebSocket测试工具 -->
      <WebSocketTester v-else-if="tool.id === 23" />
      
      <!-- YAML/JSON转换工具 -->
      <XmlJsonConverter v-else-if="tool.id === 24" />
      
      <!-- Markdown转HTML工具 -->
      <MarkdownToHtml v-else-if="tool.id === 25" />
      
      <!-- JavaScript压缩/混淆工具 -->
      <JavaScriptFormatter v-else-if="tool.id === 26" />
      
      <!-- 密码生成器工具 -->
      <PasswordGenerator v-else-if="tool.id === 27" />
      
      <!-- 密码强度检测工具 -->
      <PasswordStrengthChecker v-else-if="tool.id === 28" />
      
      <!-- 哈希运算工具 -->
      <HashCalculator v-else-if="tool.id === 29" />
      
      <!-- RSA算法工具 -->
      <RsaCrypto v-else-if="tool.id === 30" />
      
      <!-- SM2算法工具 -->
      <Sm2Crypto v-else-if="tool.id === 31" />
      
      <!-- 图片压缩工具 -->
      <ImageCompressor v-else-if="tool.id === 4" />
      
      <!-- SVG优化器 -->
      <SvgOptimizer v-else-if="tool.id === 8" />
      
      <!-- CORS配置生成器 -->
      <CorsGenerator v-else-if="tool.id === 33" />
      
      <!-- MQTT消息测试工具 -->
      <MqttTester v-else-if="tool.id === 34" />
      
      <!-- cURL转代码工具 -->
      <CurlConverter v-else-if="tool.id === 35" />
      
      <!-- gRPC在线调试器 -->
      <GrpcDebugger v-else-if="tool.id === 36" />
      
      <!-- 对称加密算法工具 -->
      <SymmetricCrypto v-else-if="tool.id === 37" />
      
      <!-- 代码混淆工具 -->
      <CodeObfuscator v-else-if="tool.id === 38" />
      
      <!-- OpenAPI生成器工具 -->
      <OpenApiGenerator v-else-if="tool.id === 39" />
      
      <!-- 代码复杂度分析工具 -->
      <CodeComplexity v-else-if="tool.id === 40" />
      
      <!-- Git冲突解决模拟器 -->
      <GitConflictResolver v-else-if="tool.id === 41" />
      
      <!-- 代码片段管理器 -->
      <CodeSnippetManager v-else-if="tool.id === 42" />
      
      <!-- 敏感词过滤工具 -->
      <SensitiveWordFilter v-else-if="tool.id === 43" />
      
      <!-- CSV/JSON转换工具 -->
      <CsvJsonConverter v-else-if="tool.id === 44" />
      
      <!-- 进制转换工具 -->
      <BaseNumberConverter v-else-if="tool.id === 45" />
      
      <!-- User-Agent生成器 -->
      <UserAgentGenerator v-else-if="tool.id === 46" />
      
      <!-- URL参数解析器 -->
      <UrlParamsParser v-else-if="tool.id === 48" />
      
      <!-- 前端代理检测器 -->
      <ProxyDetector v-else-if="tool.id === 49" />
      
      <!-- JWT调试工具 -->
      <JwtDebugger v-else-if="tool.id === 100" />
      
      <!-- 如果没有找到匹配的工具 -->
      <div v-else class="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
        <p class="text-gray-600 dark:text-gray-400">该工具正在开发中，敬请期待...</p>
      </div>
    </div>
    
    <!-- 相关工具推荐 -->
    <div>
      <h2 class="text-xl font-bold mb-4">相关工具</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div 
          v-for="relatedTool in relatedTools" 
          :key="relatedTool.id"
          class="tool-card"
        >
          <div class="flex items-start mb-2">
            <div class="w-8 h-8 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="relatedTool.icon" />
              </svg>
            </div>
            <div>
              <h3 class="font-medium">{{ relatedTool.name }}</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ relatedTool.category }}</p>
            </div>
          </div>
          <router-link :to="`/tool/${relatedTool.id}`" class="text-sm text-primary dark:text-primary-light hover:underline">
            使用工具
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import JSONFormatter from '../components/tools/JSONFormatter.vue'
import RegexTester from '../components/tools/RegexTester.vue'
import ColorPicker from '../components/tools/ColorPicker.vue'
import GradientGenerator from '../components/tools/GradientGenerator.vue'
import MarkdownEditor from '../components/tools/MarkdownEditor.vue'
import QRCodeGenerator from '../components/tools/QRCodeGenerator.vue'
import CodeFormatter from '../components/tools/CodeFormatter.vue'
import CodeDiff from '../components/tools/CodeDiff.vue'
import Base64Converter from '../components/tools/Base64Converter.vue'
import TimestampConverter from '../components/tools/TimestampConverter.vue'
import SQLFormatter from '../components/tools/SQLFormatter.vue'
import MockAPIGenerator from '../components/tools/MockAPIGenerator.vue'
import HttpStatusCodeLookup from '../components/tools/HttpStatusCodeLookup.vue'
import UserAgentParser from '../components/tools/UserAgentParser.vue'
import CodeHighlighter from '../components/tools/CodeHighlighter.vue'
import URLEncoder from '../components/tools/URLEncoder.vue'
import HtmlEntityEncoder from '../components/tools/HtmlEntityEncoder.vue'
import XmlFormatter from '../components/tools/XmlFormatter.vue'
import CssFormatter from '../components/tools/CssFormatter.vue'
import WebSocketTester from '../components/tools/WebSocketTester.vue'
import YamlJsonConverter from '../components/tools/YamlJsonConverter.vue'
import MarkdownToHtml from '../components/tools/MarkdownToHtml.vue'
import JavaScriptFormatter from '../components/tools/JavaScriptFormatter.vue'
import PasswordGenerator from '../components/tools/PasswordGenerator.vue'
import PasswordStrengthChecker from '../components/tools/PasswordStrengthChecker.vue'
import HashCalculator from '../components/tools/HashCalculator.vue'
import RsaCrypto from '../components/tools/RsaCrypto.vue'
import Sm2Crypto from '../components/tools/Sm2Crypto.vue'
import ImageCompressor from '../components/tools/ImageCompressor.vue'
import SvgOptimizer from '../components/tools/SvgOptimizer.vue'
import CorsGenerator from '../components/tools/CorsGenerator.vue'
import MqttTester from '../components/tools/MqttTester.vue'
import CurlConverter from '../components/tools/CurlConverter.vue'
import GrpcDebugger from '../components/tools/GrpcDebugger.vue'
import SymmetricCrypto from '../components/tools/SymmetricCrypto.vue'
import CodeObfuscator from '../components/tools/CodeObfuscator.vue'
import OpenApiGenerator from '../components/tools/OpenApiGenerator.vue'
import CodeComplexity from '../components/tools/CodeComplexity.vue'
import GitConflictResolver from '../components/tools/GitConflictResolver.vue'
import CodeSnippetManager from '../components/tools/CodeSnippetManager.vue'
import SensitiveWordFilter from '../components/tools/SensitiveWordFilter.vue'
import XmlJsonConverter from '../components/tools/XmlJsonConverter.vue'
import CsvJsonConverter from '../components/tools/CsvJsonConverter.vue'
import BaseNumberConverter from '../components/tools/BaseNumberConverter.vue'
import UserAgentGenerator from '../components/tools/UserAgentGenerator.vue'
import UrlParamsParser from '../components/tools/UrlParamsParser.vue'
import ProxyDetector from '../components/tools/ProxyDetector.vue'
import JwtDebugger from '../components/tools/JwtDebugger.vue'

const route = useRoute()

// 获取工具ID
const toolId = computed(() => parseInt(route.params.id))

// 示例工具数据
const allTools = ref([
  { id: 1, name: 'JSON格式化', category: '开发工具', description: '在线JSON格式化与验证工具，支持压缩和美化', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 5, name: '正则表达式测试', category: '开发工具', description: '在线正则表达式测试与调试工具', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 2, name: '颜色选择器', category: '设计工具', description: '强大的颜色选择与调色板生成工具', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01', categoryId: 'design' },
  { id: 3, name: 'Markdown编辑器', category: '文本工具', description: '简洁易用的Markdown编辑与预览工具', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', categoryId: 'text' },
  { id: 4, name: '图片压缩', category: '图像与多媒体工具', description: '高效无损的图片压缩工具', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', categoryId: 'image' },
  { id: 6, name: 'CSS渐变生成器', category: '设计工具', description: '简单易用的CSS渐变背景生成工具', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01', categoryId: 'design' },
  { id: 7, name: '二维码生成器', category: '通用工具', description: '自定义生成清晰的二维码图片', icon: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z', categoryId: 'convert' },
  { id: 8, name: 'SVG优化器', category: '图像与多媒体工具', description: '优化SVG文件大小，提升加载性能', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', categoryId: 'image' },
  { id: 9, name: '代码美化/压缩', category: '开发工具', description: '支持多种语言的代码格式化与压缩工具', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 10, name: '代码差异比较', category: '开发工具', description: '可视化展示两段代码的差异', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 11, name: 'Base64编解码', category: '开发工具', description: '在线Base64编码与解码工具', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 12, name: '时间戳转换', category: '开发工具', description: 'Unix时间戳与日期时间的相互转换工具', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 13, name: 'SQL格式化', category: '开发工具', description: 'SQL查询语句格式化与压缩工具', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 14, name: 'Mock API生成器', category: '开发工具', description: '快速生成模拟API响应数据', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 15, name: 'HTTP状态码查询', category: '开发工具', description: '查询HTTP状态码的含义和用法', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 16, name: '用户代理(UA)解析', category: '开发工具', description: '解析浏览器UA信息，识别浏览器、操作系统和设备', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 17, name: '代码高亮', category: '开发工具', description: '为多种编程语言代码添加语法高亮', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 18, name: 'URL编码/解码', category: '开发工具', description: '对URL进行编码或解码操作', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 19, name: 'HTML实体编码', category: '开发工具', description: '将HTML特殊字符转换为实体', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 20, name: 'XML解析/格式化', category: '开发工具', description: 'XML文档解析、格式化与压缩工具', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 22, name: 'CSS压缩/美化', category: '开发工具', description: 'CSS代码格式化与压缩工具', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 23, name: 'WebSocket测试', category: '开发工具', description: '连接、调试和测试WebSocket服务', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 24, name: 'XML/JSON转换', category: '转换工具', description: 'XML与JSON格式互相转换工具，支持自定义选项和格式化', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', categoryId: 'convert' },
  { id: 25, name: 'Markdown转HTML', category: '转换工具', description: 'Markdown实时预览与HTML转换工具', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', categoryId: 'convert' },
  { id: 26, name: 'JavaScript压缩/混淆', category: '开发工具', description: 'JavaScript代码格式化、压缩与混淆工具', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 27, name: '密码生成器', category: '数据与加密工具', description: '生成安全、随机的密码', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', categoryId: 'crypto' },
  { id: 28, name: '密码强度检测', category: '数据与加密工具', description: '评估密码强度并提供改进建议', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', categoryId: 'crypto' },
  { id: 29, name: '哈希运算', category: '数据与加密工具', description: '计算文本或文件的哈希值，支持多种算法', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', categoryId: 'crypto' },
  { id: 30, name: 'RSA算法', category: '数据与加密工具', description: 'RSA非对称加密算法工具，支持密钥生成、加密解密和数字签名', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', categoryId: 'crypto' },
  { id: 31, name: 'SM2算法', category: '数据与加密工具', description: '国密SM2非对称加密算法工具，支持密钥生成、加密解密和数字签名', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', categoryId: 'crypto' },
  { id: 33, name: 'CORS配置生成器', category: '网络与协议工具', description: '快速创建跨域资源共享(CORS)配置，支持多种服务器环境', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9', categoryId: 'network' },
  { id: 34, name: 'MQTT消息测试', category: '网络与协议工具', description: 'MQTT协议消息发布、订阅与测试工具', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9', categoryId: 'network' },
  { id: 35, name: 'cURL转代码', category: '网络与协议工具', description: '将cURL命令转换为Python、JavaScript等多种编程语言代码', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9', categoryId: 'network' },
  { id: 36, name: 'gRPC调试器', category: '网络与协议工具', description: '在线调试gRPC服务，支持proto文件解析和请求构建', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9', categoryId: 'network' },
  { id: 37, name: '对称加密算法', category: '数据与加密工具', description: '多种对称加密算法工具，支持AES、DES、3DES和国密SM4', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', categoryId: 'crypto' },
  { id: 38, name: '代码混淆', category: '代码处理工具', description: '对JavaScript和CSS代码进行混淆处理，提高代码安全性和保护知识产权', icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', categoryId: 'codeproc' },
  { id: 39, name: 'OpenAPI→TS客户端', category: '代码处理工具', description: '根据OpenAPI规范自动生成TypeScript接口和API客户端代码', icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', categoryId: 'codeproc' },
  { id: 40, name: '代码复杂度分析', category: '代码处理工具', description: '分析JavaScript代码的圈复杂度、Halstead度量和维护指数', icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', categoryId: 'codeproc' },
  { id: 41, name: 'Git冲突解决模拟器', category: '代码处理工具', description: '模拟Git合并冲突场景，练习解决代码冲突，提高版本控制技能', icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', categoryId: 'codeproc' },
  { id: 42, name: '代码片段管理器', category: '代码处理工具', description: '保存和管理常用代码片段，提高开发效率', icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', categoryId: 'codeproc' },
  { id: 43, name: '敏感词过滤', category: '代码处理工具', description: '检测和过滤文本中的敏感词汇，支持自定义敏感词库和多种过滤方式', icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', categoryId: 'codeproc' },
  { id: 44, name: 'CSV/JSON转换', category: '转换工具', description: 'CSV与JSON格式互相转换工具，支持自定义分隔符和多种格式选项', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', categoryId: 'convert' },
  { id: 45, name: '进制转换工具', category: '转换工具', description: '在二进制、八进制、十进制和十六进制等多种进制间转换，支持大数字', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', categoryId: 'convert' },
  { id: 46, name: 'User-Agent生成器', category: '网络与协议工具', description: '生成各种浏览器和设备的User-Agent字符串，用于网站测试、爬虫和开发', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9', categoryId: 'network' },
  { id: 48, name: 'URL参数解析器', category: '网络与协议工具', description: '解析和查看URL查询参数，支持多种格式转换和导出选项', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9', categoryId: 'network' },
  { id: 49, name: '前端代理检测器', category: '网络与协议工具', description: '检测您的连接是否使用了HTTP代理，分析X-Forwarded-For等代理相关的头信息', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9', categoryId: 'network' },
  { id: 100, name: 'JWT调试工具', category: '开发工具', description: '解析、验证和调试JWT令牌的在线工具', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', categoryId: 'dev' }
])

// 当前工具信息
const tool = computed(() => {
  return allTools.value.find(item => item.id === toolId.value) || {
    name: '未找到工具',
    category: '',
    description: '您请求的工具不存在',
    icon: 'M6 18L18 6M6 6l12 12',
    categoryId: ''
  }
})

// 相关工具推荐（同类别的其他工具）
const relatedTools = computed(() => {
  if (!tool.value.categoryId) return []
  
  return allTools.value
    .filter(item => item.categoryId === tool.value.categoryId && item.id !== toolId.value)
    .slice(0, 4) // 最多显示4个相关工具
})
</script> 