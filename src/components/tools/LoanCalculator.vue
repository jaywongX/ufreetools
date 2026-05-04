<template>
  <div class="flex flex-col h-full">
    <!-- 输入区域 -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 贷款类型 -->
        <div>
          <label class="block mb-2 font-medium">{{ t('tools.loan-calculator.loanType') }}</label>
          <div class="flex space-x-4">
            <label class="inline-flex items-center">
              <input type="radio" v-model="loanType" value="housing" class="mr-2">
              {{ t('tools.loan-calculator.housingLoan') }}
            </label>
            <label class="inline-flex items-center">
              <input type="radio" v-model="loanType" value="car" class="mr-2">
              {{ t('tools.loan-calculator.carLoan') }}
            </label>
            <label class="inline-flex items-center">
              <input type="radio" v-model="loanType" value="personal" class="mr-2">
              {{ t('tools.loan-calculator.personalLoan') }}
            </label>
          </div>
        </div>
        
        <!-- 货币选择 -->
        <div>
          <label class="block mb-2 font-medium">{{ t('tools.loan-calculator.currency') }}</label>
          <select v-model="currency" class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
            <option value="CNY">{{ t('tools.loan-calculator.CNY') }}</option>
            <option value="USD">{{ t('tools.loan-calculator.USD') }}</option>
            <option value="EUR">{{ t('tools.loan-calculator.EUR') }}</option>
            <option value="JPY">{{ t('tools.loan-calculator.JPY') }}</option>
            <option value="GBP">{{ t('tools.loan-calculator.GBP') }}</option>
          </select>
        </div>
        
        <!-- 还款方式 -->
        <div>
          <label class="block mb-2 font-medium">{{ t('tools.loan-calculator.paymentMethod') }}</label>
          <div class="flex space-x-4">
            <label class="inline-flex items-center">
              <input type="radio" v-model="paymentMethod" value="equalPayment" class="mr-2">
              {{ t('tools.loan-calculator.equalPrincipalAndInterest') }}
            </label>
            <label class="inline-flex items-center">
              <input type="radio" v-model="paymentMethod" value="equalPrincipal" class="mr-2">
              {{ t('tools.loan-calculator.equalPrincipal') }}
            </label>
          </div>
        </div>
        
        <!-- 贷款金额 -->
        <div>
          <label class="block mb-2 font-medium">{{ t('tools.loan-calculator.loanAmount') }}</label>
          <div class="flex">
            <input type="number" v-model.number="loanAmount" class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
          </div>
        </div>
        
        <!-- 贷款期限 -->
        <div>
          <label class="block mb-2 font-medium">{{ t('tools.loan-calculator.loanTerm') }}</label>
          <div class="flex">
            <input type="number" v-model.number="loanTerm" class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
            <select v-model="termUnit" class="ml-2 p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
              <option value="years">{{ t('tools.loan-calculator.years') }}</option>
              <option value="months">{{ t('tools.loan-calculator.months') }}</option>
            </select>
          </div>
        </div>
        
        <!-- 年利率 -->
        <div>
          <label class="block mb-2 font-medium">{{ t('tools.loan-calculator.interestRate') }}</label>
          <div class="flex items-center">
            <input type="number" v-model.number="interestRate" step="0.01" class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
            <span class="ml-2">%</span>
          </div>
        </div>
      </div>
      
      <!-- 按钮区域 -->
      <div class="mt-6 flex justify-center space-x-4">
        <button @click="calculate" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
          {{ t('tools.loan-calculator.calculate') }}
        </button>
        <button @click="resetForm" class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md">
          {{ t('tools.loan-calculator.reset') }}
        </button>
      </div>
      
      <!-- 错误提示 -->
      <div v-if="error" class="mt-4 text-red-500 text-center">
        {{ error }}
      </div>
    </div>

    <!-- 结果区域 - 只在有结果时显示 -->
    <div v-if="hasResults" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <h2 class="text-xl font-bold mb-4">{{ t('tools.loan-calculator.results') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 月供/首月还款 -->
        <div v-if="paymentMethod === 'equalPayment'">
          <label class="block mb-2 font-medium">{{ t('tools.loan-calculator.monthlyPayment') }}</label>
          <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
            {{ formatCurrency(monthlyPayment) }}
          </div>
        </div>
        <div v-else>
          <label class="block mb-2 font-medium">{{ t('tools.loan-calculator.firstMonthPayment') }}</label>
          <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
            {{ formatCurrency(firstMonthPayment) }}
          </div>
        </div>
        
        <!-- 末月还款 - 仅等额本金显示 -->
        <div v-if="paymentMethod === 'equalPrincipal'">
          <label class="block mb-2 font-medium">{{ t('tools.loan-calculator.lastMonthPayment') }}</label>
          <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
            {{ formatCurrency(lastMonthPayment) }}
          </div>
        </div>
        
        <!-- 总利息 -->
        <div>
          <label class="block mb-2 font-medium">{{ t('tools.loan-calculator.totalInterest') }}</label>
          <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
            {{ formatCurrency(totalInterest) }}
          </div>
        </div>
        
        <!-- 总还款额 -->
        <div>
          <label class="block mb-2 font-medium">{{ t('tools.loan-calculator.totalPayment') }}</label>
          <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
            {{ formatCurrency(totalPayment) }}
          </div>
        </div>
        
        <!-- 利息占比 -->
        <div>
          <label class="block mb-2 font-medium">{{ t('tools.loan-calculator.interestRatio') }}</label>
          <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
            {{ interestRatio }}%
          </div>
        </div>
      </div>
    </div>

    <!-- 还款计划 - 只在有结果时显示 -->
    <div v-if="hasResults && paymentSchedule.length > 0" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">{{ t('tools.loan-calculator.paymentSchedule') }}</h2>
        <button @click="exportToExcel" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
          {{ t('tools.loan-calculator.downloadExcel') }}
        </button>
      </div>
      
      <!-- 表格容器，添加滚动条 -->
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr>
              <th class="border-b border-gray-200 dark:border-gray-700 p-4 text-left">{{ t('tools.loan-calculator.paymentNo') }}</th>
              <th class="border-b border-gray-200 dark:border-gray-700 p-4 text-left">{{ t('tools.loan-calculator.paymentDate') }}</th>
              <th class="border-b border-gray-200 dark:border-gray-700 p-4 text-left">{{ t('tools.loan-calculator.principal') }}</th>
              <th class="border-b border-gray-200 dark:border-gray-700 p-4 text-left">{{ t('tools.loan-calculator.interest') }}</th>
              <th class="border-b border-gray-200 dark:border-gray-700 p-4 text-left">{{ t('tools.loan-calculator.payment') }}</th>
              <th class="border-b border-gray-200 dark:border-gray-700 p-4 text-left">{{ t('tools.loan-calculator.remainingPrincipal') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="payment in displayedSchedule" :key="payment.no">
              <td class="border-b border-gray-200 dark:border-gray-700 p-4">{{ payment.no }}</td>
              <td class="border-b border-gray-200 dark:border-gray-700 p-4">{{ payment.date }}</td>
              <td class="border-b border-gray-200 dark:border-gray-700 p-4">{{ formatCurrency(payment.principal) }}</td>
              <td class="border-b border-gray-200 dark:border-gray-700 p-4">{{ formatCurrency(payment.interest) }}</td>
              <td class="border-b border-gray-200 dark:border-gray-700 p-4">{{ formatCurrency(payment.payment) }}</td>
              <td class="border-b border-gray-200 dark:border-gray-700 p-4">{{ formatCurrency(payment.remainingPrincipal) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- 分页控件 -->
      <div v-if="paymentSchedule.length > pageSize" class="mt-4 flex justify-center">
        <button @click="prevPage" :disabled="currentPage === 1" class="px-4 py-2 mr-2 bg-gray-200 dark:bg-gray-700 rounded-md">
          &laquo; 上一页
        </button>
        <span class="px-4 py-2">{{ currentPage }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 ml-2 bg-gray-200 dark:bg-gray-700 rounded-md">
          下一页 &raquo;
        </button>
      </div>
    </div>

    <!-- 工具介绍区域 -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <h2 class="text-2xl font-bold mb-4">{{ t('tools.loan-calculator.aboutTitle') }}</h2>
      <p class="mb-6">{{ t('tools.loan-calculator.aboutDescription') }}</p>
      
      <!-- 主要功能 -->
      <h3 class="text-xl font-semibold mb-3">{{ t('tools.loan-calculator.featuresTitle') }}</h3>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">{{ t('tools.loan-calculator.feature1') }}</li>
        <li class="mb-2">{{ t('tools.loan-calculator.feature2') }}</li>
        <li class="mb-2">{{ t('tools.loan-calculator.feature3') }}</li>
        <li class="mb-2">{{ t('tools.loan-calculator.feature4') }}</li>
        <li class="mb-2">{{ t('tools.loan-calculator.feature5') }}</li>
      </ul>
      
      <!-- 使用说明 -->
      <h3 class="text-xl font-semibold mb-3">{{ t('tools.loan-calculator.usageTitle') }}</h3>
      <ol class="list-decimal pl-6 mb-6">
        <li class="mb-2">{{ t('tools.loan-calculator.usageStep1') }}</li>
        <li class="mb-2">{{ t('tools.loan-calculator.usageStep2') }}</li>
        <li class="mb-2">{{ t('tools.loan-calculator.usageStep3') }}</li>
        <li class="mb-2">{{ t('tools.loan-calculator.usageStep4') }}</li>
        <li class="mb-2">{{ t('tools.loan-calculator.usageStep5') }}</li>
      </ol>
      
      <!-- 还款方式说明 -->
      <h3 class="text-xl font-semibold mb-3">{{ t('tools.loan-calculator.explanationTitle') }}</h3>
      <div class="mb-6">
        <div class="mb-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
          <p><strong>{{ t('tools.loan-calculator.equalPrincipalAndInterest') }}:</strong> {{ t('tools.loan-calculator.explanationEqualPayment') }}</p>
        </div>
        <div class="p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
          <p><strong>{{ t('tools.loan-calculator.equalPrincipal') }}:</strong> {{ t('tools.loan-calculator.explanationEqualPrincipal') }}</p>
        </div>
      </div>
      
      <!-- 使用技巧 -->
      <h3 class="text-xl font-semibold mb-3">{{ t('tools.loan-calculator.tipsTitle') }}</h3>
      <ul class="list-disc pl-6">
        <li class="mb-2">{{ t('tools.loan-calculator.tip1') }}</li>
        <li class="mb-2">{{ t('tools.loan-calculator.tip2') }}</li>
        <li class="mb-2">{{ t('tools.loan-calculator.tip3') }}</li>
        <li class="mb-2">{{ t('tools.loan-calculator.tip4') }}</li>
      </ul>
    </div>
    
    <!-- 添加文章组件 -->
    <LoanCalculatorArticle />
  </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, computed, reactive, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import * as XLSX from 'xlsx';
import LoanCalculatorArticle from './LoanCalculatorArticle.vue';

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t, locale } = useI18n();

// 表单数据
const loanType = ref('housing');
const currency = ref('CNY');
const paymentMethod = ref('equalPayment');
const loanAmount = ref(500000);
const loanTerm = ref(30);
const termUnit = ref('years');
const interestRate = ref(4.1);
const error = ref('');

// 结果数据
const monthlyPayment = ref(0);
const firstMonthPayment = ref(0);
const lastMonthPayment = ref(0);
const totalInterest = ref(0);
const totalPayment = ref(0);
const interestRatio = ref(0);
const paymentSchedule = ref([]);
const hasResults = ref(false);

// 分页控制
const pageSize = 12;
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(paymentSchedule.value.length / pageSize));
const displayedSchedule = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return paymentSchedule.value.slice(start, end);
});

// 分页导航
function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

// 计算总月数
const totalMonths = computed(() => {
  if (termUnit.value === 'years') {
    return loanTerm.value * 12;
  }
  return loanTerm.value;
});

// 计算月利率（年利率除以12，转换为小数）
const monthlyRate = computed(() => interestRate.value / 100 / 12);

// 重置表单
function resetForm() {
  loanType.value = 'housing';
  currency.value = 'CNY';
  paymentMethod.value = 'equalPayment';
  loanAmount.value = 500000;
  loanTerm.value = 30;
  termUnit.value = 'years';
  interestRate.value = 4.1;
  error.value = '';
  
  // 清除结果
  monthlyPayment.value = 0;
  firstMonthPayment.value = 0;
  lastMonthPayment.value = 0;
  totalInterest.value = 0;
  totalPayment.value = 0;
  interestRatio.value = 0;
  paymentSchedule.value = [];
  hasResults.value = false;
  currentPage.value = 1;
}

// 验证表单
function validateForm() {
  if (!loanType.value) {
    error.value = '请选择贷款类型';
    return false;
  }
  
  if (!loanAmount.value || loanAmount.value <= 0) {
    error.value = '请输入有效的贷款金额';
    return false;
  }
  
  if (!loanTerm.value || loanTerm.value <= 0) {
    error.value = '请输入有效的贷款期限';
    return false;
  }
  
  if (!interestRate.value || interestRate.value <= 0) {
    error.value = '请输入有效的利率';
    return false;
  }
  
  error.value = '';
  return true;
}

// 主计算函数
function calculate() {
  if (!validateForm()) {
    hasResults.value = false;
    return;
  }
  
  // 根据还款方式选择不同的计算方法
  if (paymentMethod.value === 'equalPayment') {
    calculateEqualPayment();
  } else {
    calculateEqualPrincipal();
  }
  
  hasResults.value = true;
  currentPage.value = 1; // 重置到第一页
}

// 计算等额本息
function calculateEqualPayment() {
  // 使用等额本息公式计算月供
  // 公式：月供 = 贷款本金 × 月利率 × (1 + 月利率)^还款月数 / ((1 + 月利率)^还款月数 - 1)
  const principal = loanAmount.value;
  const rate = monthlyRate.value;
  const months = totalMonths.value;
  
  // 月供计算
  const monthly = principal * rate * Math.pow(1 + rate, months) / (Math.pow(1 + rate, months) - 1);
  monthlyPayment.value = monthly;
  firstMonthPayment.value = monthly;
  lastMonthPayment.value = monthly;
  
  // 总还款额
  totalPayment.value = monthly * months;
  
  // 总利息
  totalInterest.value = totalPayment.value - principal;
  
  // 利息占比
  interestRatio.value = (totalInterest.value / totalPayment.value * 100).toFixed(2);
  
  // 生成还款计划
  generateEqualPaymentSchedule();
}

// 计算等额本金
function calculateEqualPrincipal() {
  const principal = loanAmount.value;
  const rate = monthlyRate.value;
  const months = totalMonths.value;
  
  // 每月还款本金
  const monthlyPrincipal = principal / months;
  
  // 首月利息 = 本金 × 月利率
  const firstMonthInterest = principal * rate;
  
  // 首月还款 = 每月还款本金 + 首月利息
  firstMonthPayment.value = monthlyPrincipal + firstMonthInterest;
  
  // 末月利息 = 每月还款本金 × 月利率
  const lastMonthInterest = monthlyPrincipal * rate;
  
  // 末月还款 = 每月还款本金 + 末月利息
  lastMonthPayment.value = monthlyPrincipal + lastMonthInterest;
  
  // 计算总利息 (等差数列求和)
  totalInterest.value = (principal * rate * (months + 1)) / 2;
  
  // 总还款额
  totalPayment.value = principal + totalInterest.value;
  
  // 月供是变化的，不设置monthlyPayment
  monthlyPayment.value = 0;
  
  // 利息占比
  interestRatio.value = (totalInterest.value / totalPayment.value * 100).toFixed(2);
  
  // 生成还款计划
  generateEqualPrincipalSchedule();
}

// 生成等额本息还款计划
function generateEqualPaymentSchedule() {
  const schedule = [];
  const principal = loanAmount.value;
  const rate = monthlyRate.value;
  const months = totalMonths.value;
  const monthly = monthlyPayment.value;
  
  let remainingPrincipal = principal;
  
  for (let i = 1; i <= months; i++) {
    // 每月利息 = 剩余本金 × 月利率
    const monthlyInterest = remainingPrincipal * rate;
    
    // 每月还款本金 = 月供 - 每月利息
    const monthlyPrincipalPayment = monthly - monthlyInterest;
    
    // 添加到还款计划
    schedule.push({
      no: i,
      date: getPaymentDate(i),
      principal: monthlyPrincipalPayment,
      interest: monthlyInterest,
      payment: monthly,
      remainingPrincipal: remainingPrincipal - monthlyPrincipalPayment
    });
    
    // 更新剩余本金
    remainingPrincipal -= monthlyPrincipalPayment;
  }
  
  paymentSchedule.value = schedule;
}

// 生成等额本金还款计划
function generateEqualPrincipalSchedule() {
  const schedule = [];
  const principal = loanAmount.value;
  const rate = monthlyRate.value;
  const months = totalMonths.value;
  
  // 每月还款本金
  const monthlyPrincipal = principal / months;
  let remainingPrincipal = principal;
  
  for (let i = 1; i <= months; i++) {
    // 每月利息 = 剩余本金 × 月利率
    const monthlyInterest = remainingPrincipal * rate;
    
    // 月供 = 每月还款本金 + 每月利息
    const payment = monthlyPrincipal + monthlyInterest;
    
    // 添加到还款计划
    schedule.push({
      no: i,
      date: getPaymentDate(i),
      principal: monthlyPrincipal,
      interest: monthlyInterest,
      payment: payment,
      remainingPrincipal: remainingPrincipal - monthlyPrincipal
    });
    
    // 更新剩余本金
    remainingPrincipal -= monthlyPrincipal;
  }
  
  paymentSchedule.value = schedule;
}

// 获取还款日期
function getPaymentDate(monthIndex) {
  const date = new Date();
  date.setMonth(date.getMonth() + monthIndex);
  return date.toLocaleDateString(locale.value === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}

// 格式化货币
function formatCurrency(amount) {
  if (amount === undefined || amount === null) return '';
  
  const formatter = new Intl.NumberFormat(locale.value === 'zh' ? 'zh-CN' : 'en-US', {
    style: 'currency',
    currency: currency.value,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return formatter.format(amount);
}

// 导出Excel
function exportToExcel() {
  // 如果没有还款计划数据，提示用户
  if (!paymentSchedule.value || paymentSchedule.value.length === 0) {
    toastRef.value.show(t('tools.loan-calculator.calculate') + ' - ' + t('tools.loan-calculator.tip'));
    return;
  }
  
  // 创建工作簿对象
  const wb = XLSX.utils.book_new();
  
  // 准备要导出的数据
  const exportData = paymentSchedule.value.map(item => {
    return {
      [t('tools.loan-calculator.paymentNo')]: item.no,
      [t('tools.loan-calculator.paymentDate')]: item.date,
      [t('tools.loan-calculator.principal')]: +item.principal.toFixed(2),
      [t('tools.loan-calculator.interest')]: +item.interest.toFixed(2),
      [t('tools.loan-calculator.payment')]: +item.payment.toFixed(2),
      [t('tools.loan-calculator.remainingPrincipal')]: +item.remainingPrincipal.toFixed(2)
    };
  });
  
  // 添加贷款信息摘要行
  const summary = [
    {
      [t('tools.loan-calculator.paymentNo')]: t('tools.loan-calculator.loanType'),
      [t('tools.loan-calculator.paymentDate')]: getLoanTypeName(),
      [t('tools.loan-calculator.principal')]: t('tools.loan-calculator.loanAmount'),
      [t('tools.loan-calculator.interest')]: formatCurrency(loanAmount.value).replace(/[^\d\.]/g, ''),
      [t('tools.loan-calculator.payment')]: t('tools.loan-calculator.interestRate'),
      [t('tools.loan-calculator.remainingPrincipal')]: interestRate.value + '%'
    },
    {
      [t('tools.loan-calculator.paymentNo')]: t('tools.loan-calculator.paymentMethod'),
      [t('tools.loan-calculator.paymentDate')]: getPaymentMethodName(),
      [t('tools.loan-calculator.principal')]: t('tools.loan-calculator.totalInterest'),
      [t('tools.loan-calculator.interest')]: totalInterest.value.toFixed(2),
      [t('tools.loan-calculator.payment')]: t('tools.loan-calculator.totalPayment'),
      [t('tools.loan-calculator.remainingPrincipal')]: totalPayment.value.toFixed(2)
    },
    {} // 空行分隔
  ];
  
  // 合并摘要和详细数据
  const allData = [...summary, ...exportData];
  
  // 创建工作表
  const ws = XLSX.utils.json_to_sheet(allData);
  
  // 设置列宽
  const colWidths = [
    { wch: 10 },  // 期数
    { wch: 15 },  // 还款日期
    { wch: 15 },  // 本金
    { wch: 15 },  // 利息
    { wch: 15 },  // 还款额
    { wch: 15 }   // 剩余本金
  ];
  ws['!cols'] = colWidths;
  
  // 将工作表添加到工作簿
  XLSX.utils.book_append_sheet(wb, ws, t('tools.loan-calculator.paymentSchedule'));
  
  // 生成文件名
  const fileName = `${getLoanTypeName()}_${getPaymentMethodName()}_${new Date().toISOString().split('T')[0]}.xlsx`;
  
  // 导出Excel文件
  XLSX.writeFile(wb, fileName);
}

// 获取贷款类型名称
function getLoanTypeName() {
  const typeMap = {
    'housing': t('tools.loan-calculator.housingLoan'),
    'car': t('tools.loan-calculator.carLoan'),
    'personal': t('tools.loan-calculator.personalLoan')
  };
  return typeMap[loanType.value] || '';
}

// 获取还款方式名称
function getPaymentMethodName() {
  const methodMap = {
    'equalPayment': t('tools.loan-calculator.equalPrincipalAndInterest'),
    'equalPrincipal': t('tools.loan-calculator.equalPrincipal')
  };
  return methodMap[paymentMethod.value] || '';
}
</script>

<style scoped>

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.chart-container {
  height: 300px;
}
</style> 