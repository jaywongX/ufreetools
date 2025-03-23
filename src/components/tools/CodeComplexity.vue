<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.code-complexity-analyzer.title') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.code-complexity-analyzer.subtitle') }}
      </p>
      
      <!-- 代码输入区域 -->
      <div class="mb-6">
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ $t('tools.code-complexity-analyzer.input.title') }}
          </label>
          <div class="flex gap-2">
            <button 
              @click="loadExample" 
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ $t('tools.code-complexity-analyzer.input.loadExample') }}
            </button>
            <button 
              @click="clearInput" 
              class="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {{ $t('tools.code-complexity-analyzer.input.clear') }}
            </button>
          </div>
        </div>
        <textarea 
          v-model="sourceCode" 
          :placeholder="$t('tools.code-complexity-analyzer.input.placeholder')"
          class="w-full h-64 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
        ></textarea>
      </div>
      
      <!-- 分析选项 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('tools.code-complexity-analyzer.options.title') }}
        </label>
        <div class="space-y-3">
          <div class="flex items-center">
            <input type="checkbox" id="cyclomaticComplexity" v-model="options.cyclomaticComplexity" class="mr-2">
            <label for="cyclomaticComplexity" class="text-sm text-gray-700 dark:text-gray-300">
              {{ $t('tools.code-complexity-analyzer.options.cyclomaticComplexity') }}
            </label>
          </div>
          
          <div class="flex items-center">
            <input type="checkbox" id="halsteadMetrics" v-model="options.halsteadMetrics" class="mr-2">
            <label for="halsteadMetrics" class="text-sm text-gray-700 dark:text-gray-300">
              {{ $t('tools.code-complexity-analyzer.options.halsteadMetrics') }}
            </label>
          </div>
          
          <div class="flex items-center">
            <input type="checkbox" id="maintainabilityIndex" v-model="options.maintainabilityIndex" class="mr-2">
            <label for="maintainabilityIndex" class="text-sm text-gray-700 dark:text-gray-300">
              {{ $t('tools.code-complexity-analyzer.options.maintainabilityIndex') }}
            </label>
          </div>
          
          <div class="flex items-center">
            <input type="checkbox" id="functionDetails" v-model="options.functionDetails" class="mr-2">
            <label for="functionDetails" class="text-sm text-gray-700 dark:text-gray-300">
              {{ $t('tools.code-complexity-analyzer.options.functionDetails') }}
            </label>
          </div>
        </div>
      </div>
      
      <!-- 操作按钮 -->
      <div class="flex justify-center mt-6">
        <button 
          @click="analyzeCode" 
          class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark disabled:bg-gray-400 disabled:cursor-not-allowed"
          :disabled="!sourceCode || analyzing"
        >
          <span v-if="analyzing">{{ $t('tools.code-complexity-analyzer.actions.analyzing') }}</span>
          <span v-else>{{ $t('tools.code-complexity-analyzer.actions.analyze') }}</span>
        </button>
      </div>
    </div>
    
    <!-- 分析结果区域 -->
    <div v-if="result" class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">{{ $t('tools.code-complexity-analyzer.results.title') }}</h3>
      
      <!-- 整体摘要 -->
      <div class="mb-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
        <h4 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.code-complexity-analyzer.results.summary') }}</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="text-center p-3 bg-white dark:bg-gray-600 rounded-md shadow-sm">
            <div class="text-3xl font-bold" :class="getComplexityClass(result.summary.cyclomaticComplexity)">
              {{ result.summary.cyclomaticComplexity }}
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-300">
              {{ $t('tools.code-complexity-analyzer.results.avgCyclomaticComplexity') }}
            </div>
          </div>
          
          <div class="text-center p-3 bg-white dark:bg-gray-600 rounded-md shadow-sm">
            <div class="text-3xl font-bold" :class="getMaintainabilityClass(result.summary.maintainabilityIndex)">
              {{ result.summary.maintainabilityIndex }}
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-300">
              {{ $t('tools.code-complexity-analyzer.results.maintainabilityIndex') }}
            </div>
          </div>
          
          <div class="text-center p-3 bg-white dark:bg-gray-600 rounded-md shadow-sm">
            <div class="text-3xl font-bold text-gray-800 dark:text-gray-100">
              {{ result.summary.loc }}
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-300">
              {{ $t('tools.code-complexity-analyzer.results.linesOfCode') }}
            </div>
          </div>
        </div>
        
        <!-- Halstead度量 -->
        <div v-if="options.halsteadMetrics" class="mt-4">
          <h5 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.code-complexity-analyzer.metrics.halstead.title') }}</h5>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div class="p-2 bg-white dark:bg-gray-600 rounded-md">
              <div class="text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.code-complexity-analyzer.metrics.halstead.length') }}</div>
              <div class="font-medium">{{ result.summary.halstead.length }}</div>
            </div>
            <div class="p-2 bg-white dark:bg-gray-600 rounded-md">
              <div class="text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.code-complexity-analyzer.metrics.halstead.vocabulary') }}</div>
              <div class="font-medium">{{ result.summary.halstead.vocabulary }}</div>
            </div>
            <div class="p-2 bg-white dark:bg-gray-600 rounded-md">
              <div class="text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.code-complexity-analyzer.metrics.halstead.volume') }}</div>
              <div class="font-medium">{{ result.summary.halstead.volume.toFixed(2) }}</div>
            </div>
            <div class="p-2 bg-white dark:bg-gray-600 rounded-md">
              <div class="text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.code-complexity-analyzer.metrics.halstead.difficulty') }}</div>
              <div class="font-medium">{{ result.summary.halstead.difficulty.toFixed(2) }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 函数级别分析 -->
      <div v-if="options.functionDetails && result.functions.length > 0">
        <h4 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.code-complexity-analyzer.results.functionDetails') }}</h4>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  {{ $t('tools.code-complexity-analyzer.results.functionName') }}
                </th>
                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  {{ $t('tools.code-complexity-analyzer.results.loc') }}
                </th>
                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  {{ $t('tools.code-complexity-analyzer.metrics.cyclomaticComplexity') }}
                </th>
                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  {{ $t('tools.code-complexity-analyzer.results.parameters') }}
                </th>
                <th v-if="options.maintainabilityIndex" scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  {{ $t('tools.code-complexity-analyzer.metrics.maintainabilityIndex') }}
                </th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr v-for="(func, index) in result.functions" :key="index">
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                  {{ func.name || $t('tools.code-complexity-analyzer.results.anonymousFunction') }}
                </td>
                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  {{ func.loc }}
                </td>
                <td class="px-4 py-3 text-sm">
                  <span class="px-2 py-1 rounded-full text-xs" :class="getComplexityClass(func.cyclomaticComplexity, true)">
                    {{ func.cyclomaticComplexity }}
                  </span>
                </td>
                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  {{ func.params }}
                </td>
                <td v-if="options.maintainabilityIndex" class="px-4 py-3 text-sm">
                  <span class="px-2 py-1 rounded-full text-xs" :class="getMaintainabilityClass(func.maintainabilityIndex, true)">
                    {{ func.maintainabilityIndex }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- 复杂度阈值说明 -->
      <div class="mt-6 text-sm text-gray-600 dark:text-gray-400">
        <p class="mb-2 font-medium">{{ $t('tools.code-complexity-analyzer.complexity.title') }}</p>
        <ul class="list-disc list-inside space-y-1">
          <li><span class="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span> {{ $t('tools.code-complexity-analyzer.complexity.low') }}</li>
          <li><span class="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-1"></span> {{ $t('tools.code-complexity-analyzer.complexity.medium') }}</li>
          <li><span class="inline-block w-3 h-3 bg-red-500 rounded-full mr-1"></span> {{ $t('tools.code-complexity-analyzer.complexity.high') }}</li>
        </ul>
      </div>
      
      <!-- 导出选项 -->
      <div class="mt-6 flex justify-end">
        <button 
          @click="exportReport" 
          class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 text-sm"
        >
          {{ $t('tools.code-complexity-analyzer.actions.export') }}
        </button>
      </div>
    </div>
    
    <!-- 错误提示 -->
    <div v-if="error" class="mt-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-md p-4 text-red-800 dark:text-red-300">
      <div class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        <div>
          <p class="font-medium">{{ $t('tools.code-complexity-analyzer.messages.errorTitle') }}</p>
          <p class="text-sm">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import * as esprima from 'esprima'
import * as estraverse from 'estraverse'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 分析选项
const options = reactive({
  cyclomaticComplexity: true,
  halsteadMetrics: true,
  maintainabilityIndex: true,
  functionDetails: true
})

// 状态变量
const sourceCode = ref('')
const analyzing = ref(false)
const result = ref(null)
const error = ref(null)

// 示例代码
const exampleCode = `
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function calculateComplexity(inputArray) {
  let result = 0;
  
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > 10) {
      result += inputArray[i] * 2;
    } else if (inputArray[i] > 5) {
      result += inputArray[i];
    } else {
      result += 1;
    }
  }
  
  switch (result % 4) {
    case 0:
      result += 10;
      break;
    case 1:
      result += 5;
      break;
    case 2:
      result += 3;
      break;
    default:
      result += 1;
  }
  
  return result;
}

const deeplyNested = (a, b, c) => {
  if (a > 0) {
    if (b > 0) {
      if (c > 0) {
        return a + b + c;
      } else {
        return a + b;
      }
    } else {
      if (c > 0) {
        return a + c;
      } else {
        return a;
      }
    }
  } else {
    return 0;
  }
};
`

// 加载示例代码
function loadExample() {
  sourceCode.value = exampleCode.trim()
}

// 清空输入
function clearInput() {
  sourceCode.value = ''
  result.value = null
  error.value = null
}

// 分析代码
async function analyzeCode() {
  if (!sourceCode.value) return
  
  analyzing.value = true
  error.value = null
  result.value = null
  
  try {
    // 解析JavaScript代码
    const ast = esprima.parseScript(sourceCode.value, { loc: true })
    
    // 分析结果
    const analysis = {
      summary: {
        loc: countLines(sourceCode.value),
        cyclomaticComplexity: 0,
        maintainabilityIndex: 0,
        halstead: calculateHalstead(ast)
      },
      functions: []
    }
    
    // 查找函数声明和表达式
    const functions = []
    estraverse.traverse(ast, {
      enter: function(node) {
        if (node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression' || node.type === 'ArrowFunctionExpression') {
          functions.push(node)
        }
      }
    })
    
    // 分析每个函数
    for (const func of functions) {
      const funcCode = sourceCode.value.substring(
        func.loc.start.offset,
        func.loc.end.offset
      )
      
      const funcLoc = countLines(funcCode)
      const funcName = func.id ? func.id.name : t('tools.code-complexity-analyzer.results.anonymousFunction')
      const paramCount = func.params.length
      
      const complexity = calculateCyclomaticComplexity(func)
      const halstead = calculateHalstead(func)
      const maintainability = calculateMaintainabilityIndex(funcLoc, complexity, halstead.volume)
      
      analysis.functions.push({
        name: funcName,
        loc: funcLoc,
        params: paramCount,
        cyclomaticComplexity: complexity,
        maintainabilityIndex: maintainability
      })
    }
    
    // 计算整体复杂度（平均值）
    if (analysis.functions.length > 0) {
      analysis.summary.cyclomaticComplexity = Math.round(
        analysis.functions.reduce((acc, func) => acc + func.cyclomaticComplexity, 0) / 
        analysis.functions.length
      )
      
      analysis.summary.maintainabilityIndex = Math.round(
        analysis.functions.reduce((acc, func) => acc + func.maintainabilityIndex, 0) / 
        analysis.functions.length
      )
    }
    
    result.value = analysis
  } catch (err) {
    console.error('代码分析错误:', err)
    error.value = t('tools.code-complexity-analyzer.messages.analysisFailure', { error: err.message })
  } finally {
    analyzing.value = false
  }
}

// 计算圈复杂度
function calculateCyclomaticComplexity(ast) {
  let complexity = 1 // 基础复杂度为1
  
  estraverse.traverse(ast, {
    enter: function(node) {
      // 增加分支复杂度
      switch(node.type) {
        case 'IfStatement':
        case 'ConditionalExpression':
        case 'SwitchCase':
        case 'ForStatement':
        case 'ForInStatement':
        case 'ForOfStatement':
        case 'WhileStatement':
        case 'DoWhileStatement':
          complexity++
          break
        // 逻辑操作符也增加复杂度
        case 'LogicalExpression':
          if (node.operator === '&&' || node.operator === '||') {
            complexity++
          }
          break
        // catch 子句增加复杂度
        case 'CatchClause':
          complexity++
          break
      }
    }
  })
  
  return complexity
}

// 计算Halstead度量
function calculateHalstead(ast) {
  const operators = new Set()
  const operands = new Set()
  
  let totalOperators = 0
  let totalOperands = 0
  
  estraverse.traverse(ast, {
    enter: function(node) {
      switch(node.type) {
        // 操作符
        case 'BinaryExpression':
        case 'AssignmentExpression':
        case 'LogicalExpression':
          operators.add(node.operator)
          totalOperators++
          break
        case 'UnaryExpression':
          operators.add(node.operator)
          totalOperators++
          break
        // 操作数
        case 'Identifier':
          operands.add(node.name)
          totalOperands++
          break
        case 'Literal':
          operands.add(JSON.stringify(node.value))
          totalOperands++
          break
      }
    }
  })
  
  const n1 = operators.size // 去重后的操作符数量
  const n2 = operands.size  // 去重后的操作数数量
  const N1 = totalOperators // 操作符总数
  const N2 = totalOperands  // 操作数总数
  
  // 防止除以零
  if (n1 === 0 || n2 === 0) {
    return { 
      length: N1 + N2, 
      vocabulary: n1 + n2,
      volume: 0,
      difficulty: 0
    }
  }
  
  // 计算Halstead度量
  const length = N1 + N2
  const vocabulary = n1 + n2
  const volume = length * Math.log2(vocabulary)
  const difficulty = (n1 / 2) * (N2 / n2)
  
  return {
    length,
    vocabulary,
    volume,
    difficulty
  }
}

// 计算维护指数 (Maintainability Index)
function calculateMaintainabilityIndex(loc, complexity, volume) {
  if (!volume) return 100 // 如果没有volume，返回最高分
  
  // MI = 171 - 5.2 * ln(V) - 0.23 * G - 16.2 * ln(LOC)
  const maintainabilityIndex = 171 - 
    5.2 * Math.log(volume) - 
    0.23 * complexity - 
    16.2 * Math.log(loc)
  
  // 标准化到0-100
  return Math.max(0, Math.min(100, Math.round(maintainabilityIndex)))
}

// 计算代码行数
function countLines(code) {
  return code.split('\n').filter(line => line.trim().length > 0).length
}

// 根据复杂度获取显示样式
function getComplexityClass(value, isBadge = false) {
  // 圈复杂度
  // 1-5: 简单, 6-10: 适中, 11+: 复杂
  const baseClass = isBadge ? 'text-white ' : 'text-gray-800 dark:text-gray-100 '
  
  if (value <= 5) {
    return baseClass + (isBadge ? 'bg-green-500' : 'text-green-500')
  } else if (value <= 10) {
    return baseClass + (isBadge ? 'bg-yellow-500' : 'text-yellow-500')
  } else {
    return baseClass + (isBadge ? 'bg-red-500' : 'text-red-500')
  }
}

// 根据维护指数获取显示样式
function getMaintainabilityClass(value, isBadge = false) {
  // 维护指数
  // 71-100: 好, 21-70: 适中, 0-20: 差
  const baseClass = isBadge ? 'text-white ' : 'text-gray-800 dark:text-gray-100 '
  
  if (value >= 71) {
    return baseClass + (isBadge ? 'bg-green-500' : 'text-green-500')
  } else if (value >= 21) {
    return baseClass + (isBadge ? 'bg-yellow-500' : 'text-yellow-500')
  } else {
    return baseClass + (isBadge ? 'bg-red-500' : 'text-red-500')
  }
}

// 导出分析报告
function exportReport() {
  if (!result.value) return
  
  const blob = new Blob([JSON.stringify(result.value, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'complexity-report.json'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
</script> 