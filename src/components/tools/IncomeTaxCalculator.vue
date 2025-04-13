<template>
  <div class="income-tax-calculator w-full max-w-none">
    <!-- 输入表单区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- 左侧：基本信息 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-4">{{ t('tools.income-tax-calculator.taxSystem') }}</h2>
        <div class="mb-4">
          <div class="flex flex-wrap gap-2">
            <button 
              @click="taxSystem = 'china'" 
              :class="[
                'px-4 py-2 rounded-md',
                taxSystem === 'china' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500'
              ]"
            >
              {{ t('tools.income-tax-calculator.china') }}
            </button>
            <!-- <button 
              disabled
              :class="[
                'px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              ]"
            >
              {{ t('tools.income-tax-calculator.usa') }} ({{ t('common.comingSoon') }})
            </button>
            <button 
              disabled
              :class="[
                'px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              ]"
            >
              {{ t('tools.income-tax-calculator.uk') }} ({{ t('common.comingSoon') }})
            </button> -->
          </div>
        </div>
        
        <!-- 收入输入 -->
        <div class="mb-6">
          <label class="block mb-2 font-medium">{{ t('tools.income-tax-calculator.monthlyIncome') }}</label>
          <input 
            v-model.number="monthlyIncome" 
            type="number" 
            class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            @input="updateAnnualIncome"
          >
        </div>
        
        <div class="mb-6">
          <label class="block mb-2 font-medium">{{ t('tools.income-tax-calculator.annualIncome') }}</label>
          <input 
            v-model.number="annualIncome" 
            type="number" 
            class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            @input="updateMonthlyIncome"
          >
        </div>
        
        <!-- 社保公积金 -->
        <div class="mb-6">
          <div class="flex justify-between mb-2">
            <label class="font-medium">{{ t('tools.income-tax-calculator.socialSecurity') }}</label>
            <div class="flex items-center">
              <span class="mr-2 text-sm">{{ t('tools.income-tax-calculator.socialSecurityPercent') }}</span>
              <input 
                v-model="usePercentage"
                type="checkbox" 
                class="form-checkbox h-4 w-4 text-blue-600"
              >
            </div>
          </div>
          
          <template v-if="usePercentage">
            <div class="mb-2">
              <label class="block mb-1 text-sm">{{ t('tools.income-tax-calculator.socialSecurityBase') }}</label>
              <input 
                v-model.number="socialSecurityBase" 
                type="number" 
                class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
            </div>
            <div>
              <label class="block mb-1 text-sm">{{ t('tools.income-tax-calculator.socialSecurityPercent') }}</label>
              <div class="flex items-center">
                <input 
                  v-model.number="socialSecurityPercent" 
                  type="number" 
                  class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                >
                <span class="ml-2">%</span>
              </div>
            </div>
          </template>
          
          <template v-else>
            <div>
              <label class="block mb-1 text-sm">{{ t('tools.income-tax-calculator.socialSecurityAmount') }}</label>
              <input 
                v-model.number="socialSecurityAmount" 
                type="number" 
                class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
            </div>
          </template>
        </div>
        
        <!-- 操作按钮 -->
        <div class="flex space-x-4">
          <button 
            @click="calculateTax" 
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {{ t('tools.income-tax-calculator.calculate') }}
          </button>
          <button 
            @click="resetForm" 
            class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500"
          >
            {{ t('tools.income-tax-calculator.reset') }}
          </button>
        </div>
      </div>
      
      <!-- 中间：附加扣除 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-4">{{ t('tools.income-tax-calculator.deductions') }}</h2>
        
        <!-- 城市选择 -->
        <div class="mb-4">
          <label class="block mb-2 font-medium">{{ t('tools.income-tax-calculator.city') }}</label>
          <div class="flex flex-wrap gap-2">
            <button 
              @click="cityType = 'first'" 
              :class="[
                'px-4 py-2 rounded-md',
                cityType === 'first' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500'
              ]"
            >
              {{ t('tools.income-tax-calculator.firstTier') }}
            </button>
            <button 
              @click="cityType = 'second'" 
              :class="[
                'px-4 py-2 rounded-md',
                cityType === 'second' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500'
              ]"
            >
              {{ t('tools.income-tax-calculator.secondTier') }}
            </button>
            <button 
              @click="cityType = 'other'" 
              :class="[
                'px-4 py-2 rounded-md',
                cityType === 'other' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500'
              ]"
            >
              {{ t('tools.income-tax-calculator.otherCity') }}
            </button>
          </div>
        </div>
        
        <!-- 专项附加扣除 -->
        <div class="grid grid-cols-1 gap-4">
          <div>
            <label class="block mb-1 text-sm">{{ t('tools.income-tax-calculator.childrenEducation') }}</label>
            <input 
              v-model.number="childrenEducation" 
              type="number" 
              class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
          </div>
          
          <div>
            <label class="block mb-1 text-sm">{{ t('tools.income-tax-calculator.continuingEducation') }}</label>
            <input 
              v-model.number="continuingEducation" 
              type="number" 
              class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
          </div>
          
          <div>
            <label class="block mb-1 text-sm">{{ t('tools.income-tax-calculator.housingLoanInterest') }}</label>
            <input 
              v-model.number="housingLoanInterest" 
              type="number" 
              class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
          </div>
          
          <div>
            <label class="block mb-1 text-sm">{{ t('tools.income-tax-calculator.housingRent') }}</label>
            <input 
              v-model.number="housingRent" 
              type="number" 
              class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
          </div>
          
          <div>
            <label class="block mb-1 text-sm">{{ t('tools.income-tax-calculator.elderlySupport') }}</label>
            <input 
              v-model.number="elderlySupport" 
              type="number" 
              class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
          </div>
          
          <div>
            <label class="block mb-1 text-sm">{{ t('tools.income-tax-calculator.medicalTreatment') }}</label>
            <input 
              v-model.number="medicalTreatment" 
              type="number" 
              class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
          </div>
          
          <div>
            <label class="block mb-1 text-sm">{{ t('tools.income-tax-calculator.otherDeductions') }}</label>
            <input 
              v-model.number="otherDeductions" 
              type="number" 
              class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
          </div>
        </div>
      </div>
      
      <!-- 右侧：计算结果 -->
      <div v-if="hasCalculated" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-4">{{ t('tools.income-tax-calculator.results') }}</h2>
        
        <div class="space-y-4">
          <div class="flex justify-between border-b pb-2">
            <span>{{ t('tools.income-tax-calculator.taxableIncome') }}</span>
            <span class="font-semibold">{{ formatCurrency(taxableIncome) }}</span>
          </div>
          
          <div class="flex justify-between border-b pb-2">
            <span>{{ t('tools.income-tax-calculator.taxRate') }}</span>
            <span class="font-semibold">{{ currentRate }}%</span>
          </div>
          
          <div class="flex justify-between border-b pb-2">
            <span>{{ t('tools.income-tax-calculator.quickDeduction') }}</span>
            <span class="font-semibold">{{ formatCurrency(quickDeduction) }}</span>
          </div>
          
          <div class="flex justify-between border-b pb-2">
            <span>{{ t('tools.income-tax-calculator.taxPayable') }}</span>
            <span class="font-semibold text-red-500">{{ formatCurrency(taxPayable) }}</span>
          </div>
          
          <div class="flex justify-between border-b pb-2">
            <span>{{ t('tools.income-tax-calculator.afterTaxIncome') }}</span>
            <span class="font-semibold text-green-500">{{ formatCurrency(afterTaxIncome) }}</span>
          </div>
          
          <div class="flex justify-between">
            <span>{{ t('tools.income-tax-calculator.effectiveTaxRate') }}</span>
            <span class="font-semibold">{{ effectiveTaxRate }}%</span>
          </div>
        </div>
        
        <!-- 可视化图表 -->
        <div class="mt-6">
          <h3 class="font-medium mb-2">{{ t('tools.income-tax-calculator.incomeDistribution') }}</h3>
          <div class="h-8 bg-gray-200 rounded-md overflow-hidden flex">
            <div 
              class="h-full bg-blue-500" 
              :style="`width: ${Math.round((afterTaxIncome / monthlyIncome) * 100)}%`"
            ></div>
            <div 
              class="h-full bg-red-500" 
              :style="`width: ${Math.round((taxPayable / monthlyIncome) * 100)}%`"
            ></div>
          </div>
          <div class="flex justify-between mt-2 text-sm">
            <div class="flex items-center">
              <div class="w-3 h-3 bg-blue-500 rounded-sm mr-1"></div>
              <span>{{ t('tools.income-tax-calculator.takeHome') }}</span>
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 bg-red-500 rounded-sm mr-1"></div>
              <span>{{ t('tools.income-tax-calculator.tax') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 税率表 -->
    <div v-if="taxSystem === 'china'" class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 class="text-xl font-bold mb-4">{{ t('tools.income-tax-calculator.taxBrackets') }}</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{{ t('tools.income-tax-calculator.bracketRange') }}</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{{ t('tools.income-tax-calculator.rate') }} (%)</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{{ t('tools.income-tax-calculator.quickDeduction') }}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="bracket in chinaTaxBrackets" :key="bracket.order" :class="{ 'bg-blue-100 dark:bg-blue-900': bracket.order === currentBracket }">
              <td class="px-6 py-4 whitespace-nowrap">{{ bracket.range }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ bracket.rate }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ bracket.quickDeduction }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- 月度明细 -->
    <div v-if="hasCalculated && monthlyBreakdown.length > 0" class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 class="text-xl font-bold mb-4">{{ t('tools.income-tax-calculator.monthlyBreakdown') }}</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{{ t('tools.income-tax-calculator.month') }}</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{{ t('tools.income-tax-calculator.cumulativeIncome') }}</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{{ t('tools.income-tax-calculator.cumulativeDeduction') }}</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{{ t('tools.income-tax-calculator.cumulativeTaxable') }}</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{{ t('tools.income-tax-calculator.cumulativeTax') }}</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{{ t('tools.income-tax-calculator.currentMonthTax') }}</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{{ t('tools.income-tax-calculator.afterTaxIncome') }}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="(month, index) in monthlyBreakdown" :key="index">
              <td class="px-4 py-3 whitespace-nowrap">{{ index + 1 }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ formatCurrency(month.cumulativeIncome) }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ formatCurrency(month.cumulativeDeduction) }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ formatCurrency(month.cumulativeTaxable) }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ formatCurrency(month.cumulativeTax) }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ formatCurrency(month.currentMonthTax) }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ formatCurrency(month.afterTaxIncome) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- 工具介绍区域 -->
    <div class="mt-10 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-bold mb-6">{{ t('tools.income-tax-calculator.aboutTitle') }}</h2>
      <p class="mb-4">{{ t('tools.income-tax-calculator.aboutDescription') }}</p>
      
      <h3 class="text-xl font-bold mt-6 mb-4">{{ t('tools.income-tax-calculator.howToUseTitle') }}</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li>{{ t('tools.income-tax-calculator.howToUseStep1') }}</li>
        <li>{{ t('tools.income-tax-calculator.howToUseStep2') }}</li>
        <li>{{ t('tools.income-tax-calculator.howToUseStep3') }}</li>
        <li>{{ t('tools.income-tax-calculator.howToUseStep4') }}</li>
        <li>{{ t('tools.income-tax-calculator.howToUseStep5') }}</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-4">{{ t('tools.income-tax-calculator.chinaTaxRulesTitle') }}</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li>{{ t('tools.income-tax-calculator.chinaTaxRule1') }}</li>
        <li>{{ t('tools.income-tax-calculator.chinaTaxRule2') }}</li>
        <li>{{ t('tools.income-tax-calculator.chinaTaxRule3') }}</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-4">{{ t('tools.income-tax-calculator.deductionExplainTitle') }}</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li>{{ t('tools.income-tax-calculator.childrenEducationExplain') }}</li>
        <li>{{ t('tools.income-tax-calculator.continuingEducationExplain') }}</li>
        <li>{{ t('tools.income-tax-calculator.housingLoanExplain') }}</li>
        <li>{{ t('tools.income-tax-calculator.housingRentExplain') }}</li>
        <li>{{ t('tools.income-tax-calculator.elderlyExplain') }}</li>
        <li>{{ t('tools.income-tax-calculator.medicalExplain') }}</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-4">{{ t('tools.income-tax-calculator.taxTipsTitle') }}</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li>{{ t('tools.income-tax-calculator.taxTip1') }}</li>
        <li>{{ t('tools.income-tax-calculator.taxTip2') }}</li>
        <li>{{ t('tools.income-tax-calculator.taxTip3') }}</li>
        <li>{{ t('tools.income-tax-calculator.taxTip4') }}</li>
        <li>{{ t('tools.income-tax-calculator.taxTip5') }}</li>
      </ul>
    </div>

    <!-- 添加文章部分 -->
    <IncomeTaxCalculatorArticle />
  </div>
</template>

<script setup>
import { ref, computed, reactive, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import IncomeTaxCalculatorArticle from './IncomeTaxCalculatorArticle.vue';

const { t, locale } = useI18n();

// 表单数据
const taxSystem = ref('china');
const monthlyIncome = ref(10000);
const annualIncome = ref(120000);
const usePercentage = ref(true);
const socialSecurityAmount = ref(2000);
const socialSecurityPercent = ref(20);
const socialSecurityBase = ref(10000);
const childrenEducation = ref(0);
const continuingEducation = ref(0);
const housingLoanInterest = ref(0);
const housingRent = ref(0);
const elderlySupport = ref(0);
const medicalTreatment = ref(0);
const otherDeductions = ref(0);
const cityType = ref('first');
const hasCalculated = ref(false);

// 计算结果
const taxableIncome = ref(0);
const currentRate = ref(0);
const quickDeduction = ref(0);
const taxPayable = ref(0);
const afterTaxIncome = ref(0);
const effectiveTaxRate = ref('0.0');
const currentBracket = ref(0);
const monthlyBreakdown = ref([]);

// 中国个税税率表
const chinaTaxBrackets = [
  { order: 1, range: '0 - 36,000', rate: 3, quickDeduction: 0, min: 0, max: 36000 },
  { order: 2, range: '36,000 - 144,000', rate: 10, quickDeduction: 2520, min: 36000, max: 144000 },
  { order: 3, range: '144,000 - 300,000', rate: 20, quickDeduction: 16920, min: 144000, max: 300000 },
  { order: 4, range: '300,000 - 420,000', rate: 25, quickDeduction: 31920, min: 300000, max: 420000 },
  { order: 5, range: '420,000 - 660,000', rate: 30, quickDeduction: 52920, min: 420000, max: 660000 },
  { order: 6, range: '660,000 - 960,000', rate: 35, quickDeduction: 85920, min: 660000, max: 960000 },
  { order: 7, range: '> 960,000', rate: 45, quickDeduction: 181920, min: 960000, max: Infinity }
];

// 城市租金扣除标准
const housingRentDeduction = {
  first: 1500,  // 一线城市
  second: 1100, // 二线城市
  other: 800    // 其他城市
};

// 监听城市变化，自动设置对应的租金扣除
watch(cityType, (newValue) => {
  if (housingRent.value === 0 || 
      housingRent.value === housingRentDeduction.first || 
      housingRent.value === housingRentDeduction.second || 
      housingRent.value === housingRentDeduction.other) {
    housingRent.value = housingRentDeduction[newValue];
  }
});

// 计算社保公积金
const socialSecurity = computed(() => {
  if (usePercentage.value) {
    return (socialSecurityBase.value * socialSecurityPercent.value) / 100;
  } else {
    return socialSecurityAmount.value;
  }
});

// 计算总扣除额
const totalDeduction = computed(() => {
  return childrenEducation.value + 
         continuingEducation.value + 
         housingLoanInterest.value + 
         housingRent.value + 
         elderlySupport.value + 
         (medicalTreatment.value / 12) + // 大病医疗按年计算，转为月均
         otherDeductions.value;
});

// 收入互相转换
function updateAnnualIncome() {
  annualIncome.value = monthlyIncome.value * 12;
}

function updateMonthlyIncome() {
  monthlyIncome.value = annualIncome.value / 12;
}

// 格式化货币
function formatCurrency(value) {
  const formatter = new Intl.NumberFormat(locale.value === 'zh' ? 'zh-CN' : 'en-US', {
    style: 'currency',
    currency: 'CNY',
    minimumFractionDigits: 2
  });
  return formatter.format(value);
}

// 根据年收入确定税率
function getTaxBracket(annualAmount) {
  for (const bracket of chinaTaxBrackets) {
    if (annualAmount > bracket.min && annualAmount <= bracket.max) {
      return bracket;
    }
  }
  return chinaTaxBrackets[0]; // 默认返回第一档
}

// 计算税金
function calculateTax() {
  if (taxSystem.value === 'china') {
    // 月应纳税所得额
    const monthlyTaxableIncome = monthlyIncome.value - socialSecurity.value - totalDeduction.value - 5000; // 起征点5000
    
    // 年应纳税所得额
    const annualTaxableIncome = monthlyTaxableIncome * 12;
    
    taxableIncome.value = annualTaxableIncome;
    
    // 确定税率和速算扣除数
    const bracket = getTaxBracket(annualTaxableIncome);
    currentBracket.value = bracket.order;
    currentRate.value = bracket.rate;
    quickDeduction.value = bracket.quickDeduction;
    
    // 计算年税金
    const annualTax = (annualTaxableIncome * bracket.rate / 100) - bracket.quickDeduction;
    taxPayable.value = Math.max(0, annualTax);
    
    // 税后收入
    afterTaxIncome.value = annualIncome.value - socialSecurity.value * 12 - taxPayable.value;
    
    // 实际税率
    effectiveTaxRate.value = (taxPayable.value / annualIncome.value * 100).toFixed(2);
    
    // 生成月度明细
    generateMonthlyBreakdown();
    
    hasCalculated.value = true;
  }
}

// 生成月度明细
function generateMonthlyBreakdown() {
  monthlyBreakdown.value = [];
  
  let previousTax = 0;
  for (let month = 1; month <= 12; month++) {
    // 当月累计收入
    const cumulativeIncome = monthlyIncome.value * month;
    
    // 当月累计扣除
    const cumulativeDeduction = (socialSecurity.value + totalDeduction.value + 5000) * month;
    
    // 当月累计应纳税所得额
    const cumulativeTaxable = cumulativeIncome - cumulativeDeduction;
    
    // 当月累计应纳税额
    let cumulativeTax = 0;
    if (cumulativeTaxable > 0) {
      const bracket = getTaxBracket(cumulativeTaxable);
      cumulativeTax = (cumulativeTaxable * bracket.rate / 100) - bracket.quickDeduction;
    }
    
    // 当月应缴税额
    const currentMonthTax = Math.max(0, cumulativeTax - previousTax);
    previousTax = cumulativeTax;
    
    // 当月税后收入
    const afterTaxIncome = monthlyIncome.value - socialSecurity.value - currentMonthTax;
    
    monthlyBreakdown.value.push({
      month,
      cumulativeIncome,
      cumulativeDeduction,
      cumulativeTaxable: Math.max(0, cumulativeTaxable),
      cumulativeTax: Math.max(0, cumulativeTax),
      currentMonthTax,
      afterTaxIncome
    });
  }
}

// 重置表单
function resetForm() {
  monthlyIncome.value = 10000;
  annualIncome.value = 120000;
  usePercentage.value = true;
  socialSecurityAmount.value = 2000;
  socialSecurityPercent.value = 20;
  socialSecurityBase.value = 10000;
  childrenEducation.value = 0;
  continuingEducation.value = 0;
  housingLoanInterest.value = 0;
  housingRent.value = housingRentDeduction[cityType.value];
  elderlySupport.value = 0;
  medicalTreatment.value = 0;
  otherDeductions.value = 0;
  
  hasCalculated.value = false;
  taxableIncome.value = 0;
  currentRate.value = 0;
  quickDeduction.value = 0;
  taxPayable.value = 0;
  afterTaxIncome.value = 0;
  effectiveTaxRate.value = '0.0';
  monthlyBreakdown.value = [];
}

// 初始化
watch(cityType, (newValue) => {
  housingRent.value = housingRentDeduction[newValue];
}, { immediate: true });
</script>

<style scoped>
.income-tax-calculator {
  max-width: 100%;
}

/* 确保数据表格在小屏幕上可滚动 */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  white-space: nowrap;
}
</style> 