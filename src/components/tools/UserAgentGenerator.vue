<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.user-agent-generator.name') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.user-agent-generator.description') }}
      </p>
      
      <!-- 过滤选项 -->
      <div class="mb-4">
        <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.user-agent-generator.filters.title') }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- 浏览器选择 -->
          <div>
            <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">{{ $t('tools.user-agent-generator.filters.browser') }}</label>
            <select 
              v-model="filters.browser" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              <option value="">{{ $t('tools.user-agent-generator.browsers.all') }}</option>
              <option value="chrome">{{ $t('tools.user-agent-generator.browsers.chrome') }}</option>
              <option value="firefox">{{ $t('tools.user-agent-generator.browsers.firefox') }}</option>
              <option value="safari">{{ $t('tools.user-agent-generator.browsers.safari') }}</option>
              <option value="opera">{{ $t('tools.user-agent-generator.browsers.opera') }}</option>
              <option value="edge">{{ $t('tools.user-agent-generator.browsers.edge') }}</option>
              <option value="ie">{{ $t('tools.user-agent-generator.browsers.ie') }}</option>
            </select>
          </div>
          
          <!-- 操作系统选择 -->
          <div>
            <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">{{ $t('tools.user-agent-generator.filters.os') }}</label>
            <select 
              v-model="filters.os" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              <option value="">{{ $t('tools.user-agent-generator.operatingSystems.all') }}</option>
              <option value="windows">{{ $t('tools.user-agent-generator.operatingSystems.windows') }}</option>
              <option value="macos">{{ $t('tools.user-agent-generator.operatingSystems.macos') }}</option>
              <option value="linux">{{ $t('tools.user-agent-generator.operatingSystems.linux') }}</option>
              <option value="android">{{ $t('tools.user-agent-generator.operatingSystems.android') }}</option>
              <option value="ios">{{ $t('tools.user-agent-generator.operatingSystems.ios') }}</option>
            </select>
          </div>
          
          <!-- 设备类型选择 -->
          <div>
            <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">{{ $t('tools.user-agent-generator.filters.deviceType') }}</label>
            <select 
              v-model="filters.deviceType" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              <option value="">{{ $t('tools.user-agent-generator.deviceTypes.all') }}</option>
              <option value="desktop">{{ $t('tools.user-agent-generator.deviceTypes.desktop') }}</option>
              <option value="mobile">{{ $t('tools.user-agent-generator.deviceTypes.mobile') }}</option>
              <option value="tablet">{{ $t('tools.user-agent-generator.deviceTypes.tablet') }}</option>
            </select>
          </div>
        </div>
      </div>
      
      <!-- 生成数量和操作按钮 -->
      <div class="flex flex-col sm:flex-row gap-4 mb-4">
        <div class="w-full sm:w-1/3">
          <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">{{ $t('tools.user-agent-generator.generation.quantity') }}</label>
          <input 
            v-model.number="generateCount" 
            type="number" 
            min="1" 
            max="100"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
        </div>
        <div class="flex gap-2 items-end flex-1">
          <button 
            @click="generateRandomUserAgents" 
            class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark flex-1"
          >
            {{ $t('tools.user-agent-generator.generation.generateRandom') }}
          </button>
          <button 
            @click="clearResults" 
            class="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md"
          >
            {{ $t('tools.user-agent-generator.generation.clearResults') }}
          </button>
        </div>
      </div>
    </div>
    
    <!-- 结果展示区域 -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">{{ $t('tools.user-agent-generator.results.title') }}</h3>
        <button 
          v-if="userAgents.length > 0"
          @click="copyAllUserAgents" 
          class="px-3 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-md flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          {{ $t('tools.user-agent-generator.results.copyAll') }}
        </button>
      </div>
      
      <div v-if="userAgents.length === 0" class="text-center py-8 text-gray-500 dark:text-gray-400">
        {{ $t('tools.user-agent-generator.results.empty') }}
      </div>
      
      <div v-else class="space-y-3">
        <div 
          v-for="(ua, index) in userAgents" 
          :key="index"
          class="bg-gray-50 dark:bg-gray-750 p-3 rounded-md border border-gray-200 dark:border-gray-700"
        >
          <div class="flex justify-between items-start mb-2">
            <div class="text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ getBrowserIconAndName(ua) }}
              <span class="px-2 py-0.5 ml-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-xs">
                {{ getOSName(ua) }}
              </span>
              <span v-if="getDeviceType(ua)" class="px-2 py-0.5 ml-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded text-xs">
                {{ getDeviceType(ua) }}
              </span>
            </div>
            <button 
              @click="copyUserAgent(ua)" 
              class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              :title="$t('tools.user-agent-generator.messages.copied')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </button>
          </div>
          <div class="text-xs font-mono text-gray-600 dark:text-gray-400 break-all">
            {{ ua }}
          </div>
        </div>
      </div>
    </div>
    
    <!-- 常用 User-Agent 说明 -->
    <div class="mt-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">{{ $t('tools.user-agent-generator.info.formatTitle') }}</h3>
      
      <div class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
        <p>{{ $t('tools.user-agent-generator.info.formatDescription') }}</p>
        <pre class="bg-gray-50 dark:bg-gray-750 p-3 rounded-md border border-gray-200 dark:border-gray-700 text-xs font-mono overflow-x-auto">{{ $t('tools.user-agent-generator.info.formatExample') }}</pre>
        
        <h4 class="font-medium text-gray-700 dark:text-gray-300 mt-4">{{ $t('tools.user-agent-generator.info.examplesTitle') }}</h4>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>{{ $t('tools.user-agent-generator.info.chromeWindows') }}</strong> <span class="text-xs font-mono">Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36</span></li>
          <li><strong>{{ $t('tools.user-agent-generator.info.firefoxMac') }}</strong> <span class="text-xs font-mono">Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:89.0) Gecko/20100101 Firefox/89.0</span></li>
          <li><strong>{{ $t('tools.user-agent-generator.info.safariIOS') }}</strong> <span class="text-xs font-mono">Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1</span></li>
        </ul>
        
        <h4 class="font-medium text-gray-700 dark:text-gray-300 mt-4">{{ $t('tools.user-agent-generator.info.useCasesTitle') }}</h4>
        <ul class="list-disc pl-5 space-y-1">
          <li>{{ $t('tools.user-agent-generator.info.useCases[0]') }}</li>
          <li>{{ $t('tools.user-agent-generator.info.useCases[1]') }}</li>
          <li>{{ $t('tools.user-agent-generator.info.useCases[2]') }}</li>
          <li>{{ $t('tools.user-agent-generator.info.useCases[3]') }}</li>
          <li>{{ $t('tools.user-agent-generator.info.useCases[4]') }}</li>
        </ul>
      </div>
    </div>
    
    <!-- 添加文章组件 -->
    <UserAgentGeneratorArticle />
  </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive } from 'vue'
import randomUseragent from 'random-useragent'
import { useI18n } from 'vue-i18n'
import UserAgentGeneratorArticle from './UserAgentGeneratorArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 过滤条件
const filters = reactive({
  browser: '',
  os: '',
  deviceType: ''
})

// 生成数量
const generateCount = ref(5)

// 存储生成的UA列表
const userAgents = ref([])

// 生成随机User-Agent
function generateRandomUserAgents() {
  userAgents.value = []
  
  // 清除现有结果并生成新的
  const count = Math.min(Math.max(generateCount.value, 1), 100) // 限制数量在1-100之间
  
  for (let i = 0; i < count; i++) {
    let ua = null
    
    // 根据过滤条件获取UA
    if (filters.browser || filters.os || filters.deviceType) {
      // 构建过滤条件
      const filterOptions = {}
      
      if (filters.browser) {
        filterOptions.browserName = filters.browser
      }
      
      if (filters.os) {
        filterOptions.osName = filters.os
      }
      
      if (filters.deviceType) {
        filterOptions.deviceType = filters.deviceType
      }
      
      // 尝试获取匹配的UA，最多尝试10次
      for (let attempt = 0; attempt < 10; attempt++) {
        ua = randomUseragent.getRandom(function(agent) {
          let match = true
          
          if (filterOptions.browserName && !agent.browserName.toLowerCase().includes(filterOptions.browserName.toLowerCase())) {
            match = false
          }
          
          if (filterOptions.osName && !agent.osName.toLowerCase().includes(filterOptions.osName.toLowerCase())) {
            match = false
          }
          
          if (filterOptions.deviceType && agent.deviceType !== filterOptions.deviceType) {
            match = false
          }
          
          return match
        })
        
        if (ua) break
      }
      
      // 如果无法找到匹配的UA，使用完全随机的
      if (!ua) {
        ua = randomUseragent.getRandom()
      }
    } else {
      // 没有过滤条件，直接随机获取
      ua = randomUseragent.getRandom()
    }
    
    // 添加到结果列表
    if (ua && !userAgents.value.includes(ua)) {
      userAgents.value.push(ua)
    } else {
      // 如果重复或为空，尝试再次获取
      i--
    }
  }
}

// 清空结果
function clearResults() {
  userAgents.value = []
}

// 复制单个User-Agent
function copyUserAgent(ua) {
  navigator.clipboard.writeText(ua)
    .then(() => {
      toastRef.value.show(t('tools.user-agent-generator.messages.copied'))
    })
    .catch(err => {
      console.error('复制失败:', err)
      toastRef.value.show(t('tools.user-agent-generator.messages.copyFailed'))
    })
}

// 复制所有User-Agent
function copyAllUserAgents() {
  if (userAgents.value.length === 0) return
  
  const text = userAgents.value.join('\n\n')
  
  navigator.clipboard.writeText(text)
    .then(() => {
      toastRef.value.show(t('tools.user-agent-generator.messages.allCopied'))
    })
    .catch(err => {
      console.error('复制失败:', err)
      toastRef.value.show(t('tools.user-agent-generator.messages.copyFailed'))
    })
}

// 获取浏览器图标和名称
function getBrowserIconAndName(ua) {
  try {
    // 使用自定义解析函数
    const info = parseUserAgent(ua)
    if (!info || !info.browser.name) return t('tools.user-agent-generator.browsers.unknown')
    
    const browserName = info.browser.name
    const version = info.browser.version ? ` ${info.browser.version}` : ''
    
    return `${browserName}${version}`
  } catch (err) {
    console.error('解析浏览器信息失败:', err)
    return t('tools.user-agent-generator.browsers.unknown')
  }
}

// 获取操作系统名称
function getOSName(ua) {
  try {
    // 使用自定义解析函数
    const info = parseUserAgent(ua)
    if (!info || !info.os.name) return t('tools.user-agent-generator.operatingSystems.unknown')
    
    return info.os.name
  } catch (err) {
    console.error('解析操作系统信息失败:', err)
    return t('tools.user-agent-generator.operatingSystems.unknown')
  }
}

// 获取设备类型
function getDeviceType(ua) {
  try {
    // 使用自定义解析函数
    const info = parseUserAgent(ua)
    if (!info || !info.device.type) return null
    
    const deviceTypeMap = {
      'mobile': t('tools.user-agent-generator.deviceTypes.mobile'),
      'desktop': t('tools.user-agent-generator.deviceTypes.desktop'),
      'tablet': t('tools.user-agent-generator.deviceTypes.tablet')
    }
    
    return deviceTypeMap[info.device.type] || info.device.type
  } catch (err) {
    console.error('解析设备类型失败:', err)
    return null
  }
}

// 用户代理解析函数
function parseUserAgent(uaString) {
  // 基本解析结果结构
  const result = {
    ua: uaString,
    browser: {
      name: t('tools.user-agent-generator.browsers.unknown'),
      version: t('tools.user-agent-generator.operatingSystems.unknown')
    },
    engine: {
      name: t('tools.user-agent-generator.operatingSystems.unknown'),
      version: t('tools.user-agent-generator.operatingSystems.unknown')
    },
    os: {
      name: t('tools.user-agent-generator.operatingSystems.unknown'),
      version: t('tools.user-agent-generator.operatingSystems.unknown')
    },
    device: {
      model: t('tools.user-agent-generator.deviceTypes.unknown'),
      type: t('tools.user-agent-generator.deviceTypes.unknown'),
      vendor: t('tools.user-agent-generator.deviceTypes.unknown')
    },
    cpu: {
      architecture: t('tools.user-agent-generator.operatingSystems.unknown')
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
  if (versionIndex === -1) return t('tools.user-agent-generator.operatingSystems.unknown')
  
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
  return matches ? matches[1] : t('tools.user-agent-generator.operatingSystems.unknown')
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
  return t('tools.user-agent-generator.operatingSystems.unknown')
}

// 获取macOS版本
function getMacOSVersion(uaString) {
  const matches = uaString.match(/Mac OS X (\d+[._]\d+[._]?\d*)/)
  if (matches) {
    return matches[1].replace(/_/g, '.')
  }
  return t('tools.user-agent-generator.operatingSystems.unknown')
}

// 获取iOS版本
function getIOSVersion(uaString) {
  const matches = uaString.match(/OS (\d+[._]\d+[._]?\d*)/)
  if (matches) {
    return matches[1].replace(/_/g, '.')
  }
  return t('tools.user-agent-generator.operatingSystems.unknown')
}

// 获取三星设备型号
function getSamsungModel(uaString) {
  const matches = uaString.match(/SM-[A-Z0-9]+/i)
  return matches ? matches[0] : t('tools.user-agent-generator.deviceTypes.unknown')
}

// 获取Google Pixel型号
function getGooglePixelModel(uaString) {
  const matches = uaString.match(/Pixel [0-9]+/i)
  return matches ? matches[0] : t('tools.user-agent-generator.deviceTypes.unknown')
}
</script> 