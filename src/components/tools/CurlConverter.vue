<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.curl-converter.name') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.curl-converter.description') }}
      </p>
      
      <!-- cURL输入区域 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {{ $t('tools.curl-converter.input.title') }}
        </label>
        <div class="relative">
          <textarea 
            v-model="curlCommand" 
            class="w-full h-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            :placeholder="$t('tools.curl-converter.input.placeholder')"
          ></textarea>
          <button 
            v-if="curlCommand" 
            @click="curlCommand = ''" 
            class="absolute top-2 right-2 p-1 text-gray-500 hover:text-red-500"
            :title="$t('tools.curl-converter.input.clear')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- 示例命令 -->
      <div class="mb-4">
        <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.curl-converter.input.examples') }}</h3>
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="(example, index) in examples" 
            :key="index"
            @click="selectExample(example)"
            class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {{ $t(`tools.curl-converter.examples.exampleCommands.${example.name}`) }}
          </button>
        </div>
      </div>
      
      <!-- 目标语言选择 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {{ $t('tools.curl-converter.output.language') }}
        </label>
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="lang in languages" 
            :key="lang.id"
            @click="selectedLanguage = lang.id"
            class="px-3 py-1.5 rounded-md text-sm"
            :class="selectedLanguage === lang.id 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
          >
            {{ lang.name }}
          </button>
        </div>
      </div>
      
      <!-- 转换按钮 -->
      <div class="flex justify-center">
        <button 
          @click="convertCurl" 
          class="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          :disabled="converting || !curlCommand.trim()"
        >
          <span v-if="converting">{{ $t('tools.curl-converter.actions.converting') }}</span>
          <span v-else>{{ $t('tools.curl-converter.actions.convert') }}</span>
        </button>
      </div>
    </div>
    
    <!-- 转换结果 -->
    <div v-if="convertedCode || conversionError" class="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div class="flex justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
        <h3 class="font-medium text-gray-800 dark:text-gray-200">
          {{ conversionError ? $t('tools.curl-converter.output.errorTitle') : $t('tools.curl-converter.output.codeTitle', { language: getSelectedLanguageName() }) }}
        </h3>
        <div class="flex space-x-2">
          <button 
            v-if="convertedCode"
            @click="copyCode" 
            class="px-3 py-1 text-sm text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
            :title="$t('tools.curl-converter.output.copyTooltip')"
          >
            {{ $t('tools.curl-converter.output.copy') }}
          </button>
        </div>
      </div>
      
      <div class="p-4">
        <!-- 错误信息 -->
        <div v-if="conversionError" class="text-red-500 mb-2">
          {{ conversionError }}
        </div>
        
        <!-- 转换后的代码 -->
        <pre v-else class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md overflow-x-auto text-sm font-mono">{{ convertedCode }}</pre>
      </div>
    </div>
  </div>
  
  <!-- 添加文章部分 -->
  <CurlConverterArticle />
</template>

<script setup>
import { ref, computed } from 'vue'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import CurlConverterArticle from './CurlConverterArticle.vue'

const { t } = useI18n()

// 当前输入的cURL命令
const curlCommand = ref('')

// 选中的目标语言
const selectedLanguage = ref('python')

// 转换状态
const converting = ref(false)

// 转换后的代码
const convertedCode = ref('')

// 转换错误
const conversionError = ref('')

// 支持的语言列表
const languages = [
  { id: 'python', name: 'Python (Requests)' },
  { id: 'javascript', name: 'JavaScript (Fetch)' },
  { id: 'node', name: 'Node.js (Axios)' },
  { id: 'go', name: 'Go' },
  { id: 'php', name: 'PHP' },
  { id: 'java', name: 'Java' },
  { id: 'csharp', name: 'C#' },
  { id: 'ruby', name: 'Ruby' }
]

// 示例cURL命令
const examples = [
  { 
    name: 'getRequest', 
    command: 'curl https://api.example.com/users'
  },
  { 
    name: 'postJson', 
    command: 'curl -X POST https://api.example.com/users -H "Content-Type: application/json" -d \'{"name":"John Doe","email":"john@example.com"}\''
  },
  { 
    name: 'postForm', 
    command: 'curl -X POST https://api.example.com/form -d "name=John&age=25"'
  },
  { 
    name: 'withAuth', 
    command: 'curl -u username:password https://api.example.com/auth'
  },
  { 
    name: 'uploadFile', 
    command: 'curl -F "file=@/path/to/file.jpg" https://api.example.com/upload'
  }
]

// 转换cURL命令
async function convertCurl() {
  if (!curlCommand.value.trim()) return
  
  converting.value = true
  convertedCode.value = ''
  conversionError.value = ''
  
  try {
    // 这里模拟与curlconverter库的交互
    // 实际应用中，需要导入curlconverter库并调用相应的转换函数
    
    // 检查命令是否以curl开头
    if (!curlCommand.value.trim().toLowerCase().startsWith('curl ')) {
      throw new Error(t('tools.curl-converter.messages.curlRequired'))
    }
    
    // 根据选择的语言生成代码
    await new Promise(resolve => setTimeout(resolve, 500)) // 模拟处理延迟
    
    let code = ''
    
    switch (selectedLanguage.value) {
      case 'python':
        code = generatePythonCode(curlCommand.value)
        break
      case 'javascript':
        code = generateJavaScriptCode(curlCommand.value)
        break
      case 'node':
        code = generateNodeCode(curlCommand.value)
        break
      case 'php':
        code = generatePhpCode(curlCommand.value)
        break
      case 'go':
        code = generateGoCode(curlCommand.value)
        break
      case 'java':
        code = generateJavaCode(curlCommand.value)
        break
      case 'csharp':
        code = generateCsharpCode(curlCommand.value)
        break
      case 'ruby':
        code = generateRubyCode(curlCommand.value)
        break
      default:
        code = generatePythonCode(curlCommand.value)
    }
    
    convertedCode.value = code
  } catch (error) {
    console.error('转换失败:', error)
    conversionError.value = t('tools.curl-converter.messages.parseFailed', { error: error.message })
  } finally {
    converting.value = false
  }
}

// 获取当前选择的语言名称
function getSelectedLanguageName() {
  const lang = languages.find(l => l.id === selectedLanguage.value)
  return lang ? lang.name : ''
}

// 选择示例命令
function selectExample(example) {
  curlCommand.value = example.command
}

// 复制代码到剪贴板
function copyCode() {
  if (!convertedCode.value) return
  
  navigator.clipboard.writeText(convertedCode.value).then(() => {
    alert(t('tools.curl-converter.messages.copied'))
  }).catch(err => {
    console.error('复制失败:', err)
    alert(t('tools.curl-converter.messages.copyFailed'))
  })
}

// 根据cURL命令生成Python代码
function generatePythonCode(curl) {
  // 实际应用中，这里应该使用curlconverter库
  // 这里提供一个简单的示例实现
  
  // 简单解析cURL命令
  const url = extractUrl(curl)
  const method = extractMethod(curl)
  const headers = extractHeaders(curl)
  const data = extractData(curl)
  
  let code = 'import requests\n\n'
  
  // 添加URL
  code += `url = "${url}"\n`
  
  // 添加Headers
  if (Object.keys(headers).length > 0) {
    code += '\nheaders = {\n'
    for (const [key, value] of Object.entries(headers)) {
      code += `    "${key}": "${value}",\n`
    }
    code += '}\n'
  }
  
  // 添加Data
  if (data) {
    if (headers['Content-Type'] === 'application/json') {
      code += '\ndata = ' + JSON.stringify(JSON.parse(data), null, 4) + '\n'
    } else {
      code += `\ndata = "${data}"\n`
    }
  }
  
  // 构建请求
  code += '\nresponse = requests.'
  
  switch (method.toLowerCase()) {
    case 'post':
      code += `post(url${Object.keys(headers).length > 0 ? ', headers=headers' : ''}${data ? ', json=data' + (headers['Content-Type'] === 'application/json' ? '' : ', data=data') : ''})\n`
      break
    case 'put':
      code += `put(url${Object.keys(headers).length > 0 ? ', headers=headers' : ''}${data ? ', json=data' + (headers['Content-Type'] === 'application/json' ? '' : ', data=data') : ''})\n`
      break
    case 'delete':
      code += `delete(url${Object.keys(headers).length > 0 ? ', headers=headers' : ''}${data ? ', json=data' + (headers['Content-Type'] === 'application/json' ? '' : ', data=data') : ''})\n`
      break
    case 'patch':
      code += `patch(url${Object.keys(headers).length > 0 ? ', headers=headers' : ''}${data ? ', json=data' + (headers['Content-Type'] === 'application/json' ? '' : ', data=data') : ''})\n`
      break
    default:
      code += `get(url${Object.keys(headers).length > 0 ? ', headers=headers' : ''})\n`
  }
  
  // 输出结果
  code += '\nprint(response.status_code)\nprint(response.text)'
  
  return code
}

// 根据cURL命令生成JavaScript代码
function generateJavaScriptCode(curl) {
  // 实际应用中，这里应该使用curlconverter库
  // 这里提供一个简单的示例实现
  
  // 简单解析cURL命令
  const url = extractUrl(curl)
  const method = extractMethod(curl)
  const headers = extractHeaders(curl)
  const data = extractData(curl)
  
  let code = ''
  
  // 添加Headers
  if (Object.keys(headers).length > 0) {
    code += 'const headers = {\n'
    for (const [key, value] of Object.entries(headers)) {
      code += `    "${key}": "${value}",\n`
    }
    code += '};\n\n'
  }
  
  // 构建Fetch请求选项
  code += 'const options = {\n'
  code += `    method: "${method.toUpperCase()}",\n`
  
  if (Object.keys(headers).length > 0) {
    code += '    headers: headers,\n'
  }
  
  if (data) {
    if (headers['Content-Type'] === 'application/json') {
      code += '    body: JSON.stringify(' + JSON.stringify(JSON.parse(data), null, 4) + '),\n'
    } else {
      code += `    body: "${data}",\n`
    }
  }
  
  code += '};\n\n'
  
  // 添加fetch调用
  code += `fetch("${url}", options)\n`
  code += '    .then(response => {\n'
  code += '        console.log("Status:", response.status);\n'
  code += '        return response.text();\n'
  code += '    })\n'
  code += '    .then(data => console.log("Response:", data))\n'
  code += '    .catch(error => console.error("Error:", error));'
  
  return code
}

// 根据cURL命令生成Node.js代码
function generateNodeCode(curl) {
  // 简单解析cURL命令
  const url = extractUrl(curl)
  const method = extractMethod(curl)
  const headers = extractHeaders(curl)
  const data = extractData(curl)
  
  let code = 'const axios = require("axios");\n\n'
  
  // 构建请求配置
  code += 'const config = {\n'
  code += `    method: "${method.toLowerCase()}",\n`
  code += `    url: "${url}",\n`
  
  if (Object.keys(headers).length > 0) {
    code += '    headers: {\n'
    for (const [key, value] of Object.entries(headers)) {
      code += `        "${key}": "${value}",\n`
    }
    code += '    },\n'
  }
  
  if (data) {
    if (headers['Content-Type'] === 'application/json') {
      code += '    data: ' + JSON.stringify(JSON.parse(data), null, 4) + ',\n'
    } else {
      code += `    data: "${data}",\n`
    }
  }
  
  code += '};\n\n'
  
  // 添加axios调用
  code += 'axios(config)\n'
  code += '    .then(response => {\n'
  code += '        console.log(JSON.stringify(response.data));\n'
  code += '    })\n'
  code += '    .catch(error => {\n'
  code += '        console.error(error);\n'
  code += '    });'
  
  return code
}

// 生成其他语言的代码（示例）
function generatePhpCode(curl) {
  const url = extractUrl(curl)
  const method = extractMethod(curl)
  const headers = extractHeaders(curl)
  const data = extractData(curl)
  
  let code = "<?php\n\n"
  
  code += "$curl = curl_init();\n\n"
  
  // CURL选项
  code += "curl_setopt_array($curl, [\n"
  code += `    CURLOPT_URL => "${url}",\n`
  code += "    CURLOPT_RETURNTRANSFER => true,\n"
  code += "    CURLOPT_FOLLOWLOCATION => true,\n"
  code += `    CURLOPT_CUSTOMREQUEST => "${method.toUpperCase()}",\n`
  
  if (data) {
    code += `    CURLOPT_POSTFIELDS => '${data}',\n`
  }
  
  if (Object.keys(headers).length > 0) {
    code += "    CURLOPT_HTTPHEADER => [\n"
    for (const [key, value] of Object.entries(headers)) {
      code += `        "${key}: ${value}",\n`
    }
    code += "    ],\n"
  }
  
  code += "]);\n\n"
  
  code += "$response = curl_exec($curl);\n"
  code += "$err = curl_error($curl);\n\n"
  
  code += "curl_close($curl);\n\n"
  
  code += "if ($err) {\n"
  code += "    echo \"cURL Error: \" . $err;\n"
  code += "} else {\n"
  code += "    echo $response;\n"
  code += "}\n"
  
  return code
}

function generateGoCode(curl) {
  const url = extractUrl(curl)
  const method = extractMethod(curl)
  const headers = extractHeaders(curl)
  const data = extractData(curl)
  
  let code = "package main\n\n"
  code += "import (\n"
  code += '    "fmt"\n'
  code += '    "io/ioutil"\n'
  code += '    "net/http"\n'
  code += '    "strings"\n'
  code += ")\n\n"
  
  code += "func main() {\n"
  
  // 创建请求体
  if (data) {
    code += `    payload := strings.NewReader(\`${data}\`)\n\n`
  }
  
  // 创建请求
  if (data) {
    code += `    req, _ := http.NewRequest("${method.toUpperCase()}", "${url}", payload)\n\n`
  } else {
    code += `    req, _ := http.NewRequest("${method.toUpperCase()}", "${url}", nil)\n\n`
  }
  
  // 添加请求头
  if (Object.keys(headers).length > 0) {
    for (const [key, value] of Object.entries(headers)) {
      code += `    req.Header.Add("${key}", "${value}")\n`
    }
    code += "\n"
  }
  
  // 发送请求
  code += "    res, _ := http.DefaultClient.Do(req)\n\n"
  code += "    defer res.Body.Close()\n"
  code += "    body, _ := ioutil.ReadAll(res.Body)\n\n"
  
  code += '    fmt.Println(res.Status)\n'
  code += '    fmt.Println(string(body))\n'
  code += "}"
  
  return code
}

function generateJavaCode(curl) {
  // 示例Java代码生成
  return `import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;

public class Main {
    public static void main(String[] args) throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("${extractUrl(curl)}"))
            .method("${extractMethod(curl).toUpperCase()}", HttpRequest.BodyPublishers.ofString("${extractData(curl) || ''}"))
            .build();
        
        HttpResponse<String> response = HttpClient.newHttpClient()
            .send(request, HttpResponse.BodyHandlers.ofString());
        
        System.out.println(response.statusCode());
        System.out.println(response.body());
    }
}`
}

function generateCsharpCode(curl) {
  // 示例C#代码生成
  return `using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        var client = new HttpClient();
        var request = new HttpRequestMessage(new HttpMethod("${extractMethod(curl).toUpperCase()}"), "${extractUrl(curl)}");
        
        var response = await client.SendAsync(request);
        response.EnsureSuccessStatusCode();
        
        var body = await response.Content.ReadAsStringAsync();
        Console.WriteLine(body);
    }
}`
}

function generateRubyCode(curl) {
  // 示例Ruby代码生成
  const method = extractMethod(curl);
  // Capitalize the method (first letter uppercase, rest lowercase)
  const capitalizedMethod = method.charAt(0).toUpperCase() + method.slice(1).toLowerCase();
  
  return `require 'uri'
require 'net/http'
require 'openssl'

url = URI("${extractUrl(curl)}")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = (url.scheme == 'https')

request = Net::HTTP::${capitalizedMethod}.new(url)
${Object.entries(extractHeaders(curl)).map(([k, v]) => `request["${k}"] = "${v}"`).join('\n')}

response = http.request(request)
puts response.read_body`
}

// 辅助函数：从cURL命令中提取URL
function extractUrl(curl) {
  const urlMatch = curl.match(/curl\s+(['"]?)([^"'\s]+)\1/i)
  if (urlMatch && urlMatch[2]) {
    return urlMatch[2]
  }
  
  // 尝试匹配-X方法后的URL
  const methodUrlMatch = curl.match(/-X\s+\w+\s+(['"]?)([^"'\s]+)\1/i)
  if (methodUrlMatch && methodUrlMatch[2]) {
    return methodUrlMatch[2]
  }
  
  return 'https://example.com'
}

// 辅助函数：从cURL命令中提取HTTP方法
function extractMethod(curl) {
  const methodMatch = curl.match(/-X\s+([A-Z]+)/i)
  return methodMatch ? methodMatch[1] : 'GET'
}

// 辅助函数：从cURL命令中提取请求头
function extractHeaders(curl) {
  const headers = {}
  const headerMatches = curl.matchAll(/-H\s+(['"]?)([^'"]+)\1/gi)
  
  for (const match of headerMatches) {
    if (match[2]) {
      const [name, value] = match[2].split(': ');
      if (name && value) {
        headers[name.trim()] = value.trim();
      }
    }
  }
  
  return headers
}

// 辅助函数：从cURL命令中提取请求数据
function extractData(curl) {
  const dataMatch = curl.match(/-d\s+(['"]?)([^'"]+)\1/i)
  return dataMatch ? dataMatch[2] : null
}

// 组件加载时的初始化
onMounted(() => {
  // 初始化操作，例如加载curlconverter库
  console.log('cURL转代码工具已加载')
})
</script> 