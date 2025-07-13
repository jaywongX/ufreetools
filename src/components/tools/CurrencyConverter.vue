<template>
  <div class="currency-converter w-full max-w-none">
    <!-- 主要转换区域 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <!-- 转换表单 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h1 class="text-xl font-bold mb-4">{{ t('tools.currency-converter.name') }}</h1>
        
        <!-- 金额输入 -->
        <div class="mb-4">
          <label class="block mb-2 font-medium">{{ t('tools.currency-converter.amount') }}</label>
          <div class="relative">
            <input 
              v-model="amount" 
              type="number" 
              step="0.01"
              min="0"
              class="block w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              :placeholder="t('tools.currency-converter.amount')"
              @input="validateAmount"
            >
            <span v-if="errorMessage" class="text-red-500 text-sm mt-1 block">{{ errorMessage }}</span>
          </div>
        </div>
        
        <!-- 货币选择 -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block mb-2 font-medium">{{ t('tools.currency-converter.from') }}</label>
            <select 
              v-model="fromCurrency" 
              class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="USD">USD - {{ t('tools.currency-converter.currencies.USD') }}</option>
              <option value="EUR">EUR - {{ t('tools.currency-converter.currencies.EUR') }}</option>
              <option value="JPY">JPY - {{ t('tools.currency-converter.currencies.JPY') }}</option>
              <option value="GBP">GBP - {{ t('tools.currency-converter.currencies.GBP') }}</option>
              <option value="AUD">AUD - {{ t('tools.currency-converter.currencies.AUD') }}</option>
              <option value="CAD">CAD - {{ t('tools.currency-converter.currencies.CAD') }}</option>
              <option value="CHF">CHF - {{ t('tools.currency-converter.currencies.CHF') }}</option>
              <option value="CNY">CNY - {{ t('tools.currency-converter.currencies.CNY') }}</option>
              <option value="HKD">HKD - {{ t('tools.currency-converter.currencies.HKD') }}</option>
              <option value="NZD">NZD - {{ t('tools.currency-converter.currencies.NZD') }}</option>
              <option value="SEK">SEK - {{ t('tools.currency-converter.currencies.SEK') }}</option>
              <option value="KRW">KRW - {{ t('tools.currency-converter.currencies.KRW') }}</option>
              <option value="SGD">SGD - {{ t('tools.currency-converter.currencies.SGD') }}</option>
              <option value="NOK">NOK - {{ t('tools.currency-converter.currencies.NOK') }}</option>
              <option value="MXN">MXN - {{ t('tools.currency-converter.currencies.MXN') }}</option>
              <option value="INR">INR - {{ t('tools.currency-converter.currencies.INR') }}</option>
              <option value="RUB">RUB - {{ t('tools.currency-converter.currencies.RUB') }}</option>
              <option value="ZAR">ZAR - {{ t('tools.currency-converter.currencies.ZAR') }}</option>
              <option value="TRY">TRY - {{ t('tools.currency-converter.currencies.TRY') }}</option>
              <option value="BRL">BRL - {{ t('tools.currency-converter.currencies.BRL') }}</option>
              <option value="TWD">TWD - {{ t('tools.currency-converter.currencies.TWD') }}</option>
            </select>
          </div>
          
          <div>
            <label class="block mb-2 font-medium">{{ t('tools.currency-converter.to') }}</label>
            <select 
              v-model="toCurrency" 
              class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="USD">USD - {{ t('tools.currency-converter.currencies.USD') }}</option>
              <option value="EUR">EUR - {{ t('tools.currency-converter.currencies.EUR') }}</option>
              <option value="JPY">JPY - {{ t('tools.currency-converter.currencies.JPY') }}</option>
              <option value="GBP">GBP - {{ t('tools.currency-converter.currencies.GBP') }}</option>
              <option value="AUD">AUD - {{ t('tools.currency-converter.currencies.AUD') }}</option>
              <option value="CAD">CAD - {{ t('tools.currency-converter.currencies.CAD') }}</option>
              <option value="CHF">CHF - {{ t('tools.currency-converter.currencies.CHF') }}</option>
              <option value="CNY">CNY - {{ t('tools.currency-converter.currencies.CNY') }}</option>
              <option value="HKD">HKD - {{ t('tools.currency-converter.currencies.HKD') }}</option>
              <option value="NZD">NZD - {{ t('tools.currency-converter.currencies.NZD') }}</option>
              <option value="SEK">SEK - {{ t('tools.currency-converter.currencies.SEK') }}</option>
              <option value="KRW">KRW - {{ t('tools.currency-converter.currencies.KRW') }}</option>
              <option value="SGD">SGD - {{ t('tools.currency-converter.currencies.SGD') }}</option>
              <option value="NOK">NOK - {{ t('tools.currency-converter.currencies.NOK') }}</option>
              <option value="MXN">MXN - {{ t('tools.currency-converter.currencies.MXN') }}</option>
              <option value="INR">INR - {{ t('tools.currency-converter.currencies.INR') }}</option>
              <option value="RUB">RUB - {{ t('tools.currency-converter.currencies.RUB') }}</option>
              <option value="ZAR">ZAR - {{ t('tools.currency-converter.currencies.ZAR') }}</option>
              <option value="TRY">TRY - {{ t('tools.currency-converter.currencies.TRY') }}</option>
              <option value="BRL">BRL - {{ t('tools.currency-converter.currencies.BRL') }}</option>
              <option value="TWD">TWD - {{ t('tools.currency-converter.currencies.TWD') }}</option>
            </select>
          </div>
        </div>
        
        <!-- 交换按钮 -->
        <div class="flex justify-center mb-4">
          <button 
            @click="swapCurrencies" 
            class="inline-flex items-center p-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
            <span class="ml-2">{{ t('tools.currency-converter.swap') }}</span>
          </button>
        </div>
        
        <!-- 转换按钮 -->
        <button 
          @click="convertCurrency" 
          class="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          :disabled="!isValidAmount || fromCurrency === toCurrency"
        >
          {{ t('tools.currency-converter.convert') }}
        </button>
        
        <!-- 汇率信息 -->
        <div v-if="currentRate" class="mt-4 text-sm text-gray-600 dark:text-gray-400">
          <div>{{ t('tools.currency-converter.rate') }}: 1 {{ fromCurrency }} = {{ formatNumber(currentRate) }} {{ toCurrency }}</div>
          <div>{{ t('tools.currency-converter.lastUpdated') }}: {{ formatDateTime(lastUpdated) }}</div>
        </div>
      </div>
      
      <!-- 转换结果和历史记录 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <!-- 转换结果 -->
        <div v-if="conversionResult" class="mb-6">
          <h2 class="text-xl font-bold mb-4">{{ t('tools.currency-converter.result') }}</h2>
          <div class="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
            <div class="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">
              {{ formatNumber(conversionResult.value) }} {{ conversionResult.to }}
            </div>
            <div class="text-gray-600 dark:text-gray-400">
              {{ formatNumber(conversionResult.amount) }} {{ conversionResult.from }} =
              {{ formatNumber(conversionResult.value) }} {{ conversionResult.to }}
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-500 mt-2">
              {{ t('tools.currency-converter.rate') }}: 1 {{ conversionResult.from }} = 
              {{ formatNumber(conversionResult.rate) }} {{ conversionResult.to }}
            </div>
          </div>
        </div>
        
        <!-- 历史记录 -->
        <div>
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">{{ t('tools.currency-converter.history') }}</h2>
            <button 
              v-if="conversionHistory.length > 0"
              @click="clearHistory"
              class="text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
            >
              {{ t('tools.currency-converter.clearHistory') }}
            </button>
          </div>
          
          <div v-if="conversionHistory.length === 0" class="text-center py-8 text-gray-500 dark:text-gray-400">
            {{ t('tools.currency-converter.noHistory') }}
          </div>
          
          <div v-else class="space-y-3">
            <div 
              v-for="(item, index) in conversionHistory" 
              :key="index"
              class="p-3 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 cursor-pointer"
              @click="loadFromHistory(item)"
            >
              <div class="font-medium">
                {{ formatNumber(item.amount) }} {{ item.from }} = 
                {{ formatNumber(item.value) }} {{ item.to }}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ formatDateTime(item.date) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 历史汇率图表 -->
    <div v-if="showHistoricalChart" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <h2 class="text-xl font-bold mb-4">{{ t('tools.currency-converter.historicalRates') }}</h2>
      
      <!-- 日期范围选择 -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <button 
          v-for="(period, key) in ['from7days', 'from30days', 'from90days', 'customRange']" 
          :key="key"
          @click="selectDateRange(period)"
          class="py-2 px-4 border rounded-md text-center"
          :class="selectedDateRange === period ? 'bg-blue-100 border-blue-500 text-blue-700 dark:bg-blue-900 dark:border-blue-400 dark:text-blue-300' : 'hover:bg-gray-50 dark:hover:bg-gray-750'"
        >
          {{ t(`tools.currency-converter.${period}`) }}
        </button>
      </div>
      
      <!-- 自定义日期范围 -->
      <div v-if="selectedDateRange === 'customRange'" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label class="block mb-2 font-medium">{{ t('tools.currency-converter.startDate') }}</label>
          <input 
            v-model="startDate" 
            type="date" 
            class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            :max="endDate || today"
          >
        </div>
        <div>
          <label class="block mb-2 font-medium">{{ t('tools.currency-converter.endDate') }}</label>
          <input 
            v-model="endDate" 
            type="date" 
            class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            :min="startDate"
            :max="today"
          >
        </div>
      </div>
      
      <!-- 图表区域 -->
      <div class="h-80 w-full">
        <!-- 这里会添加图表组件，但由于是纯前端实现，我们可以使用模拟数据 -->
        <div v-if="!historicalRates.length" class="flex justify-center items-center h-full text-gray-500">
          {{ t('tools.currency-converter.tips.refreshing') }}
        </div>
        <div v-else class="h-full relative" id="chart-container">
          <!-- 简化版图表实现 -->
          <div class="flex items-end justify-between h-64 mt-4">
            <div 
              v-for="(rate, index) in historicalRates" 
              :key="index" 
              class="bg-blue-500 dark:bg-blue-600 rounded-t-sm" 
              :style="{ height: `${(rate.value / maxRate) * 100}%`, width: '10px', marginRight: '5px' }"
              :title="`${formatDate(rate.date)}: ${formatNumber(rate.value)}`"
            ></div>
          </div>
          <!-- 日期标签 -->
          <div class="flex justify-between text-xs text-gray-500 mt-2">
            <span>{{ formatDate(historicalRates[0]?.date) }}</span>
            <span>{{ formatDate(historicalRates[historicalRates.length - 1]?.date) }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 工具介绍 -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <h2 class="text-xl font-bold mb-4">{{ t('tools.currency-converter.aboutTitle') }}</h2>
      <p class="mb-4">{{ t('tools.currency-converter.aboutDescription') }}</p>
      
      <h3 class="text-lg font-bold mt-6 mb-3">{{ t('tools.currency-converter.featuresTitle') }}</h3>
      <ul class="list-disc pl-5 space-y-1">
        <li>{{ t('tools.currency-converter.feature1') }}</li>
        <li>{{ t('tools.currency-converter.feature2') }}</li>
        <li>{{ t('tools.currency-converter.feature3') }}</li>
        <li>{{ t('tools.currency-converter.feature4') }}</li>
        <li>{{ t('tools.currency-converter.feature5') }}</li>
        <li>{{ t('tools.currency-converter.feature6') }}</li>
      </ul>
      
      <h3 class="text-lg font-bold mt-6 mb-3">{{ t('tools.currency-converter.howToUseTitle') }}</h3>
      <ul class="space-y-1">
        <li>{{ t('tools.currency-converter.howToUseStep1') }}</li>
        <li>{{ t('tools.currency-converter.howToUseStep2') }}</li>
        <li>{{ t('tools.currency-converter.howToUseStep3') }}</li>
        <li>{{ t('tools.currency-converter.howToUseStep4') }}</li>
        <li>{{ t('tools.currency-converter.howToUseStep5') }}</li>
      </ul>
      
      <h3 class="text-lg font-bold mt-6 mb-3">{{ t('tools.currency-converter.tipsTitle') }}</h3>
      <ul class="list-disc pl-5 space-y-1">
        <li>{{ t('tools.currency-converter.tip1') }}</li>
        <li>{{ t('tools.currency-converter.tip2') }}</li>
        <li>{{ t('tools.currency-converter.tip3') }}</li>
        <li>{{ t('tools.currency-converter.tip4') }}</li>
        <li>{{ t('tools.currency-converter.tip5') }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

// 状态变量
const amount = ref('1');
const fromCurrency = ref('USD');
const toCurrency = ref('EUR');
const currentRate = ref(null);
const lastUpdated = ref(null);
const conversionResult = ref(null);
const conversionHistory = ref([]);
const errorMessage = ref('');
const isValidAmount = ref(true);

// 历史汇率相关
const showHistoricalChart = ref(true);
const selectedDateRange = ref('from7days');
const startDate = ref('');
const endDate = ref('');
const historicalRates = ref([]);

// 计算属性
const today = computed(() => {
  const now = new Date();
  return now.toISOString().split('T')[0];
});

const maxRate = computed(() => {
  if (!historicalRates.value.length) return 1;
  return Math.max(...historicalRates.value.map(rate => rate.value)) * 1.1;
});

// 模拟汇率数据 (实际应用中应使用API)
const exchangeRates = {
  USD: 1,
  EUR: 0.91,
  JPY: 151.64,
  GBP: 0.78,
  AUD: 1.52,
  CAD: 1.37,
  CHF: 0.89,
  CNY: 7.23,
  HKD: 7.81,
  NZD: 1.64,
  SEK: 10.24,
  KRW: 1355.89,
  SGD: 1.34,
  NOK: 10.57,
  MXN: 16.75,
  INR: 83.38,
  RUB: 89.87,
  ZAR: 18.43,
  TRY: 32.08,
  BRL: 5.09,
  TWD: 32.04,
  DKK: 6.79,
  PLN: 3.91,
  THB: 36.35,
  IDR: 15684.05,
  MYR: 4.68,
  PHP: 57.06
};

// 方法
function validateAmount() {
  const numAmount = parseFloat(amount.value);
  if (isNaN(numAmount) || numAmount <= 0) {
    errorMessage.value = t('tools.currency-converter.errors.invalidAmount');
    isValidAmount.value = false;
  } else {
    errorMessage.value = '';
    isValidAmount.value = true;
  }
}

function swapCurrencies() {
  [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
  if (conversionResult.value) {
    convertCurrency();
  }
}

function convertCurrency() {
  if (!isValidAmount.value) return;
  
  if (fromCurrency.value === toCurrency.value) {
    errorMessage.value = t('tools.currency-converter.errors.samecurrencies');
    return;
  }
  
  // 使用模拟数据计算汇率 (实际应用中应使用API)
  const rate = calculateRate(fromCurrency.value, toCurrency.value);
  const numAmount = parseFloat(amount.value);
  const converted = numAmount * rate;
  
  // 更新结果
  lastUpdated.value = new Date();
  currentRate.value = rate;
  conversionResult.value = {
    amount: numAmount,
    from: fromCurrency.value,
    to: toCurrency.value,
    rate: rate,
    value: converted,
    date: new Date()
  };
  
  // 添加到历史
  conversionHistory.value.unshift({...conversionResult.value});
  if (conversionHistory.value.length > 10) {
    conversionHistory.value.pop();
  }
  
  // 保存到本地存储
  saveHistory();
  
  // 更新历史汇率
  if (showHistoricalChart.value) {
    loadHistoricalRates();
  }
}

function calculateRate(from, to) {
  // 通过基准货币USD间接计算汇率
  const fromRate = exchangeRates[from];
  const toRate = exchangeRates[to];
  return toRate / fromRate;
}

function loadFromHistory(item) {
  amount.value = item.amount.toString();
  fromCurrency.value = item.from;
  toCurrency.value = item.to;
  convertCurrency();
}

function clearHistory() {
  conversionHistory.value = [];
  localStorage.removeItem('currencyHistory');
}

function saveHistory() {
  localStorage.setItem('currencyHistory', JSON.stringify(conversionHistory.value));
}

function loadHistory() {
  const saved = localStorage.getItem('currencyHistory');
  if (saved) {
    conversionHistory.value = JSON.parse(saved);
  }
}

function selectDateRange(range) {
  selectedDateRange.value = range;
  
  const today = new Date();
  let start = new Date();
  
  switch(range) {
    case 'from7days':
      start.setDate(today.getDate() - 7);
      break;
    case 'from30days':
      start.setDate(today.getDate() - 30);
      break;
    case 'from90days':
      start.setDate(today.getDate() - 90);
      break;
    case 'customRange':
      // 使用自定义日期
      return;
  }
  
  startDate.value = start.toISOString().split('T')[0];
  endDate.value = today.toISOString().split('T')[0];
  
  loadHistoricalRates();
}

function loadHistoricalRates() {
  // 在实际应用中，这里应该调用历史汇率API
  // 我们使用模拟数据生成一些随机变化的历史汇率
  
  const start = new Date(startDate.value);
  const end = new Date(endDate.value);
  const days = Math.round((end - start) / (24 * 60 * 60 * 1000)) + 1;
  
  // 生成模拟数据
  const baseRate = calculateRate(fromCurrency.value, toCurrency.value);
  const variation = baseRate * 0.1; // 波动范围为基准汇率的10%
  
  historicalRates.value = [];
  
  for (let i = 0; i < days; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    
    // 生成-5%到+5%的随机波动
    const randomVariation = (Math.random() - 0.5) * 2 * variation;
    const rateValue = baseRate + randomVariation;
    
    historicalRates.value.push({
      date: date.toISOString(),
      value: rateValue
    });
  }
}

// 格式化函数
function formatNumber(value) {
  return new Intl.NumberFormat(locale.value, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6
  }).format(value);
}

function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale.value, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
}

function formatDateTime(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale.value, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}

// 监听器
watch([fromCurrency, toCurrency], () => {
  if (fromCurrency.value === toCurrency.value) {
    errorMessage.value = t('tools.currency-converter.errors.samecurrencies');
  } else {
    errorMessage.value = '';
  }
});

// 初始化
onMounted(() => {
  // 加载保存的历史记录
  loadHistory();
  
  // 设置默认日期范围
  selectDateRange('from7days');
  
  // 初始化汇率数据
  lastUpdated.value = new Date();
  currentRate.value = calculateRate(fromCurrency.value, toCurrency.value);
  
  // 执行初始转换
  convertCurrency();
});
</script>

<style scoped>
.currency-converter {
  max-width: 100%;
}
</style> 