<template>
  <div>
    <!-- 工具输入区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          用户代理 (User-Agent) 字符串
        </label>
        <div class="flex">
          <textarea 
            v-model="userAgent" 
            class="flex-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            rows="3"
            placeholder="输入或粘贴用户代理字符串..."
          ></textarea>
          <button 
            @click="parseUA" 
            class="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark"
          >
            解析
          </button>
        </div>
        <div class="flex mt-2 space-x-2">
          <button 
            @click="detectCurrentUA" 
            class="text-sm text-primary dark:text-primary-light hover:underline flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            检测当前浏览器
          </button>
          <button 
            @click="clearInput" 
            class="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            清空
          </button>
        </div>
        <div v-if="parsingError" class="mt-2 text-sm text-red-500">
          {{ parsingError }}
        </div>
      </div>
      
      <div class="text-sm text-gray-600 dark:text-gray-400">
        <p>用户代理(User-Agent)是浏览器发送给服务器的标识字符串，包含浏览器、操作系统和设备等信息。</p>
        <p class="mt-1">常用于网站分析、浏览器兼容性处理和设备适配等场景。</p>
      </div>
    </div>
    
    <!-- 解析结果区域 -->
    <div v-if="parsedResult" class="bg-white dark:bg-gray-800 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700">
      <div class="border-b border-gray-200 dark:border-gray-700 px-4 py-3">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">解析结果</h3>
      </div>
      
      <!-- 摘要视图 -->
      <div class="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
        <div class="flex flex-wrap gap-4">
          <div class="bg-white dark:bg-gray-800 rounded-md p-3 border border-gray-200 dark:border-gray-600 flex-1 min-w-[200px]">
            <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">浏览器</div>
            <div class="flex items-center">
              <span 
                class="w-8 h-8 rounded flex items-center justify-center mr-2"
                :class="getBrowserIconClass(parsedResult.browser.name)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <div>
                <div class="font-medium text-gray-800 dark:text-gray-200">{{ parsedResult.browser.name }}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">版本 {{ parsedResult.browser.version }}</div>
              </div>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-md p-3 border border-gray-200 dark:border-gray-600 flex-1 min-w-[200px]">
            <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">操作系统</div>
            <div class="flex items-center">
              <span 
                class="w-8 h-8 rounded flex items-center justify-center mr-2"
                :class="getOSIconClass(parsedResult.os.name)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <div>
                <div class="font-medium text-gray-800 dark:text-gray-200">{{ parsedResult.os.name }}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">版本 {{ parsedResult.os.version || '未知' }}</div>
              </div>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-md p-3 border border-gray-200 dark:border-gray-600 flex-1 min-w-[200px]">
            <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">设备</div>
            <div class="flex items-center">
              <span 
                class="w-8 h-8 rounded flex items-center justify-center mr-2"
                :class="getDeviceIconClass(parsedResult.device.type)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>
              <div>
                <div class="font-medium text-gray-800 dark:text-gray-200">{{ getDeviceTypeName(parsedResult.device.type) }}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">{{ parsedResult.device.vendor || '' }} {{ parsedResult.device.model || '' }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 详细信息 -->
      <div class="p-4">
        <!-- 原始UA -->
        <div class="mb-4">
          <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">原始用户代理字符串</h4>
          <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-md text-sm font-mono text-gray-600 dark:text-gray-300 overflow-x-auto">
            {{ parsedResult.ua }}
          </div>
        </div>
        
        <!-- 详细信息表格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- 浏览器信息 -->
          <div>
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">浏览器信息</h4>
            <table class="w-full text-sm">
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-2 pr-4 text-gray-500 dark:text-gray-400 w-1/3">名称</td>
                  <td class="py-2 font-medium text-gray-800 dark:text-gray-200">{{ parsedResult.browser.name }}</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-2 pr-4 text-gray-500 dark:text-gray-400">版本</td>
                  <td class="py-2 font-medium text-gray-800 dark:text-gray-200">{{ parsedResult.browser.version }}</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-2 pr-4 text-gray-500 dark:text-gray-400">引擎</td>
                  <td class="py-2 font-medium text-gray-800 dark:text-gray-200">
                    {{ parsedResult.engine.name || '未知' }} {{ parsedResult.engine.version || '' }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <!-- 操作系统信息 -->
          <div>
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">操作系统信息</h4>
            <table class="w-full text-sm">
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-2 pr-4 text-gray-500 dark:text-gray-400 w-1/3">名称</td>
                  <td class="py-2 font-medium text-gray-800 dark:text-gray-200">{{ parsedResult.os.name }}</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-2 pr-4 text-gray-500 dark:text-gray-400">版本</td>
                  <td class="py-2 font-medium text-gray-800 dark:text-gray-200">{{ parsedResult.os.version || '未知' }}</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-2 pr-4 text-gray-500 dark:text-gray-400">平台</td>
                  <td class="py-2 font-medium text-gray-800 dark:text-gray-200">{{ parsedResult.cpu.architecture || '未知' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <!-- 设备信息 -->
          <div>
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">设备信息</h4>
            <table class="w-full text-sm">
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-2 pr-4 text-gray-500 dark:text-gray-400 w-1/3">类型</td>
                  <td class="py-2 font-medium text-gray-800 dark:text-gray-200">{{ getDeviceTypeName(parsedResult.device.type) }}</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-2 pr-4 text-gray-500 dark:text-gray-400">品牌</td>
                  <td class="py-2 font-medium text-gray-800 dark:text-gray-200">{{ parsedResult.device.vendor || '未知' }}</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-2 pr-4 text-gray-500 dark:text-gray-400">型号</td>
                  <td class="py-2 font-medium text-gray-800 dark:text-gray-200">{{ parsedResult.device.model || '未知' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <!-- 其他信息 -->
          <div>
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">其他信息</h4>
            <table class="w-full text-sm">
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-2 pr-4 text-gray-500 dark:text-gray-400 w-1/3">移动设备</td>
                  <td class="py-2 font-medium text-gray-800 dark:text-gray-200">{{ parsedResult.device.type === 'mobile' ? '是' : '否' }}</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-2 pr-4 text-gray-500 dark:text-gray-400">平板电脑</td>
                  <td class="py-2 font-medium text-gray-800 dark:text-gray-200">{{ parsedResult.device.type === 'tablet' ? '是' : '否' }}</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-2 pr-4 text-gray-500 dark:text-gray-400">桌面设备</td>
                  <td class="py-2 font-medium text-gray-800 dark:text-gray-200">{{ parsedResult.device.type === 'desktop' ? '是' : '否' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 结果为空提示 -->
    <div
      v-else
      class="bg-white dark:bg-gray-800 rounded-md p-8 text-center border border-gray-200 dark:border-gray-700"
    >
      <p class="text-gray-600 dark:text-gray-400">输入用户代理字符串并点击"解析"来查看详细信息</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 状态变量
const userAgent = ref('')
const parsedResult = ref(null)
const parsingError = ref('')

// 在组件挂载时自动检测当前浏览器
onMounted(() => {
  detectCurrentUA()
})

// 解析用户代理字符串
function parseUA() {
  if (!userAgent.value.trim()) {
    parsingError.value = '请输入用户代理字符串'
    return
  }
  
  try {
    parsingError.value = ''
    parsedResult.value = parseUserAgent(userAgent.value)
  } catch (error) {
    parsingError.value = '解析用户代理字符串时出错: ' + error.message
    console.error('UA解析错误:', error)
  }
}

// 检测当前浏览器的UA
function detectCurrentUA() {
  userAgent.value = navigator.userAgent
  parseUA()
}

// 清空输入和结果
function clearInput() {
  userAgent.value = ''
  parsedResult.value = null
  parsingError.value = ''
}

// 用户代理解析函数
function parseUserAgent(uaString) {
  // 基本解析结果结构
  const result = {
    ua: uaString,
    browser: {
      name: '未知',
      version: '未知'
    },
    engine: {
      name: '未知',
      version: '未知'
    },
    os: {
      name: '未知',
      version: '未知'
    },
    device: {
      model: '未知',
      type: '未知',
      vendor: '未知'
    },
    cpu: {
      architecture: '未知'
    }
  }

  // 浏览器检测
  if (uaString.includes('Firefox/')) {
    result.browser.name = 'Firefox'
    result.browser.version = getVersion(uaString, 'Firefox/')
  } else if (uaString.includes('Edg/')) {
    result.browser.name = 'Edge'
    result.browser.version = getVersion(uaString, 'Edg/')
  } else if (uaString.includes('Chrome/')) {
    result.browser.name = 'Chrome'
    result.browser.version = getVersion(uaString, 'Chrome/')
  } else if (uaString.includes('Safari/') && !uaString.includes('Chrome/')) {
    result.browser.name = 'Safari'
    result.browser.version = getVersion(uaString, 'Version/')
  } else if (uaString.includes('MSIE')) {
    result.browser.name = 'Internet Explorer'
    result.browser.version = getVersion(uaString, 'MSIE ')
  } else if (uaString.includes('Trident/') && uaString.includes('rv:')) {
    result.browser.name = 'Internet Explorer'
    result.browser.version = getIE11Version(uaString)
  } else if (uaString.includes('OPR/') || uaString.includes('Opera/')) {
    result.browser.name = 'Opera'
    result.browser.version = uaString.includes('OPR/') ? getVersion(uaString, 'OPR/') : getVersion(uaString, 'Opera/')
  }

  // 引擎检测
  if (uaString.includes('Gecko/')) {
    result.engine.name = 'Gecko'
    result.engine.version = getVersion(uaString, 'rv:')
  } else if (uaString.includes('WebKit/')) {
    result.engine.name = 'WebKit'
    result.engine.version = getVersion(uaString, 'WebKit/')
  } else if (uaString.includes('Trident/')) {
    result.engine.name = 'Trident'
    result.engine.version = getVersion(uaString, 'Trident/')
  } else if (uaString.includes('Presto/')) {
    result.engine.name = 'Presto'
    result.engine.version = getVersion(uaString, 'Presto/')
  }

  // 操作系统检测
  if (uaString.includes('Windows')) {
    result.os.name = 'Windows'
    result.os.version = getWindowsVersion(uaString)
  } else if (uaString.includes('Macintosh') || uaString.includes('Mac OS X')) {
    result.os.name = 'macOS'
    result.os.version = getMacOSVersion(uaString)
  } else if (uaString.includes('Linux')) {
    result.os.name = 'Linux'
  } else if (uaString.includes('Android')) {
    result.os.name = 'Android'
    result.os.version = getVersion(uaString, 'Android ')
  } else if (uaString.includes('iOS') || uaString.includes('iPhone OS')) {
    result.os.name = 'iOS'
    result.os.version = getIOSVersion(uaString)
  }

  // 设备类型检测
  if (uaString.includes('Mobile')) {
    result.device.type = 'mobile'
  } else if (uaString.includes('Tablet') || uaString.includes('iPad')) {
    result.device.type = 'tablet'
  } else {
    result.device.type = 'desktop'
  }

  // 设备品牌和型号检测
  if (uaString.includes('iPhone')) {
    result.device.vendor = 'Apple'
    result.device.model = 'iPhone'
  } else if (uaString.includes('iPad')) {
    result.device.vendor = 'Apple'
    result.device.model = 'iPad'
  } else if (uaString.includes('Macintosh')) {
    result.device.vendor = 'Apple'
    result.device.model = 'Mac'
  } else if (uaString.includes('SM-')) {
    result.device.vendor = 'Samsung'
    result.device.model = getSamsungModel(uaString)
  } else if (uaString.includes('Pixel')) {
    result.device.vendor = 'Google'
    result.device.model = getGooglePixelModel(uaString)
  }

  // CPU架构检测
  if (uaString.includes('x86_64') || uaString.includes('x64') || uaString.includes('Win64')) {
    result.cpu.architecture = 'x64'
  } else if (uaString.includes('x86') || uaString.includes('WOW64')) {
    result.cpu.architecture = 'x86'
  } else if (uaString.includes('arm')) {
    result.cpu.architecture = 'ARM'
  }

  return result
}

// 获取版本号（通用方法）
function getVersion(uaString, versionMarker) {
  const versionIndex = uaString.indexOf(versionMarker)
  if (versionIndex === -1) return '未知'
  
  const versionStart = versionIndex + versionMarker.length
  const versionEnd = uaString.indexOf(' ', versionStart)
  
  if (versionEnd === -1) {
    return uaString.substring(versionStart)
  }
  
  return uaString.substring(versionStart, versionEnd).replace(';', '')
}

// 获取IE11版本号
function getIE11Version(uaString) {
  const matches = uaString.match(/rv:(\d+\.\d+)/)
  return matches ? matches[1] : '未知'
}

// 获取Windows版本
function getWindowsVersion(uaString) {
  if (uaString.includes('Windows NT 10.0')) return '10'
  if (uaString.includes('Windows NT 6.3')) return '8.1'
  if (uaString.includes('Windows NT 6.2')) return '8'
  if (uaString.includes('Windows NT 6.1')) return '7'
  if (uaString.includes('Windows NT 6.0')) return 'Vista'
  if (uaString.includes('Windows NT 5.1')) return 'XP'
  if (uaString.includes('Windows NT 5.0')) return '2000'
  return '未知'
}

// 获取macOS版本
function getMacOSVersion(uaString) {
  const matches = uaString.match(/Mac OS X (\d+[._]\d+[._]?\d*)/)
  if (matches) {
    return matches[1].replace(/_/g, '.')
  }
  return '未知'
}

// 获取iOS版本
function getIOSVersion(uaString) {
  const matches = uaString.match(/OS (\d+[._]\d+[._]?\d*)/)
  if (matches) {
    return matches[1].replace(/_/g, '.')
  }
  return '未知'
}

// 获取三星设备型号
function getSamsungModel(uaString) {
  const matches = uaString.match(/SM-[A-Z0-9]+/i)
  return matches ? matches[0] : '未知三星设备'
}

// 获取Google Pixel型号
function getGooglePixelModel(uaString) {
  const matches = uaString.match(/Pixel [0-9]+/i)
  return matches ? matches[0] : '未知Pixel设备'
}

// 获取设备类型名称
function getDeviceTypeName(type) {
  switch (type) {
    case 'mobile': return '移动设备'
    case 'tablet': return '平板电脑'
    case 'desktop': return '桌面设备'
    default: return '未知设备'
  }
}

// 获取浏览器图标样式
function getBrowserIconClass(browser) {
  switch (browser.toLowerCase()) {
    case 'chrome': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
    case 'firefox': return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
    case 'safari': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
    case 'edge': return 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300'
    case 'internet explorer': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
    case 'opera': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
    default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
  }
}

// 获取操作系统图标样式
function getOSIconClass(os) {
  switch (os.toLowerCase()) {
    case 'windows': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
    case 'macos': return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
    case 'linux': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
    case 'android': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
    case 'ios': return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
    default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
  }
}

// 获取设备类型图标样式
function getDeviceIconClass(type) {
  switch (type) {
    case 'mobile': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
    case 'tablet': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
    case 'desktop': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
    default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
  }
}
</script> 