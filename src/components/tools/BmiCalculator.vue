<template>
  <div class="bmi-calculator w-full max-w-none">
    <!-- 输入表单和结果显示区域 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <!-- 左侧：输入表单 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-6">{{ t('tools.bmi-calculator.name') }}</h2>
        
        <!-- 单位系统选择 -->
        <div class="mb-6">
          <label class="block mb-2 font-medium">{{ t('tools.bmi-calculator.unitSystem') }}</label>
          <div class="flex space-x-4">
            <label class="inline-flex items-center">
              <input type="radio" v-model="unitSystem" value="metric" class="mr-2">
              {{ t('tools.bmi-calculator.metric') }}
            </label>
            <label class="inline-flex items-center">
              <input type="radio" v-model="unitSystem" value="imperial" class="mr-2">
              {{ t('tools.bmi-calculator.imperial') }}
            </label>
          </div>
        </div>
        
        <!-- 身高输入 -->
        <div class="mb-6">
          <label class="block mb-2 font-medium">{{ t('tools.bmi-calculator.height') }}</label>
          
          <!-- 公制身高输入 -->
          <div v-if="unitSystem === 'metric'" class="flex items-center">
            <input 
              v-model.number="heightCm" 
              type="number" 
              class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" 
              min="1"
              max="300"
            >
            <span class="ml-2 w-20">{{ t('tools.bmi-calculator.cm') }}</span>
          </div>
          
          <!-- 英制身高输入 -->
          <div v-else class="flex flex-wrap gap-4">
            <div class="flex items-center">
              <input 
                v-model.number="heightFt" 
                type="number" 
                class="block w-20 p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                min="0"
                max="8"
              >
              <span class="ml-2 w-14">{{ t('tools.bmi-calculator.ft') }}</span>
            </div>
            <div class="flex items-center">
              <input 
                v-model.number="heightIn" 
                type="number" 
                class="block w-20 p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                min="0"
                max="11.99"
                step="0.01"
              >
              <span class="ml-2 w-14">{{ t('tools.bmi-calculator.in') }}</span>
            </div>
          </div>
        </div>
        
        <!-- 体重输入 -->
        <div class="mb-6">
          <label class="block mb-2 font-medium">{{ t('tools.bmi-calculator.weight') }}</label>
          
          <!-- 公制体重输入 -->
          <div v-if="unitSystem === 'metric'" class="flex items-center">
            <input 
              v-model.number="weightKg" 
              type="number" 
              class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              min="1"
              max="500"
            >
            <span class="ml-2 w-20">{{ t('tools.bmi-calculator.kg') }}</span>
          </div>
          
          <!-- 英制体重输入 -->
          <div v-else class="flex items-center">
            <input 
              v-model.number="weightLbs" 
              type="number" 
              class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              min="1"
              max="1000"
            >
            <span class="ml-2 w-20">{{ t('tools.bmi-calculator.lbs') }}</span>
          </div>
        </div>
        
        <!-- 操作按钮 -->
        <div class="flex space-x-4">
          <button 
            @click="calculateBMI" 
            class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {{ t('tools.bmi-calculator.calculate') }}
          </button>
          <button 
            @click="resetForm" 
            class="px-6 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500"
          >
            {{ t('tools.bmi-calculator.reset') }}
          </button>
        </div>
      </div>
      
      <!-- 右侧：结果显示 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-6">{{ t('tools.bmi-calculator.yourBmi') }}</h2>
        
        <!-- BMI结果显示 -->
        <div v-if="bmiResult > 0" class="mb-8">
          <div class="text-center">
            <div class="text-5xl font-bold mb-2">{{ bmiResult.toFixed(1) }}</div>
            <div class="text-xl">
              {{ t('tools.bmi-calculator.resultPrefix') }} <strong>{{ bmiResult.toFixed(1) }}</strong> {{ t('tools.bmi-calculator.resultSuffix') }} 
              <span :class="getBmiCategoryColor()">{{ getBmiCategory() }}</span>
            </div>
          </div>
          
          <!-- BMI范围可视化 -->
          <div class="mt-8">
            <div class="relative h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <!-- BMI范围区域 -->
              <div class="absolute inset-y-0 left-0 w-1/5 bg-blue-200 dark:bg-blue-900"></div>
              <div class="absolute inset-y-0 left-1/5 w-1/5 bg-green-200 dark:bg-green-900"></div>
              <div class="absolute inset-y-0 left-2/5 w-1/5 bg-yellow-200 dark:bg-yellow-800"></div>
              <div class="absolute inset-y-0 left-3/5 w-1/5 bg-orange-200 dark:bg-orange-800"></div>
              <div class="absolute inset-y-0 left-4/5 w-1/5 bg-red-200 dark:bg-red-900"></div>
              
              <!-- BMI指示器 -->
              <div 
                class="absolute top-0 w-1 h-8 bg-black dark:bg-white" 
                :style="{ left: `${getBmiPositionPercentage()}%` }"
              ></div>
            </div>
            
            <!-- BMI范围标签 -->
            <div class="flex text-xs text-center mt-1">
              <div class="w-1/5 text-blue-600 dark:text-blue-400">{{ t('tools.bmi-calculator.underweight') }}</div>
              <div class="w-1/5 text-green-600 dark:text-green-400">{{ t('tools.bmi-calculator.normalWeight') }}</div>
              <div class="w-1/5 text-yellow-600 dark:text-yellow-400">{{ t('tools.bmi-calculator.overweight') }}</div>
              <div class="w-1/5 text-orange-600 dark:text-orange-400">{{ t('tools.bmi-calculator.obesity') }}</div>
              <div class="w-1/5 text-red-600 dark:text-red-400">{{ t('tools.bmi-calculator.severeObesity') }}</div>
            </div>
          </div>
        </div>
        
        <!-- 未计算时的提示 -->
        <div v-else class="flex flex-col items-center justify-center h-64 text-gray-500 dark:text-gray-400">
          <svg class="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <div class="text-center">输入您的身高和体重，然后点击"计算BMI"按钮</div>
        </div>
        
        <!-- BMI分类表 -->
        <div class="mt-6">
          <h3 class="font-bold mb-2">{{ t('tools.bmi-calculator.bmiCategory') }}</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th class="px-4 py-2 text-left">{{ t('tools.bmi-calculator.bmiCategory') }}</th>
                  <th class="px-4 py-2 text-left">BMI</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr :class="{ 'bg-blue-100 dark:bg-blue-900': bmiCategory === 'underweight' }">
                  <td class="px-4 py-2">{{ t('tools.bmi-calculator.underweight') }}</td>
                  <td class="px-4 py-2">{{ t('tools.bmi-calculator.underweightDesc') }}</td>
                </tr>
                <tr :class="{ 'bg-green-100 dark:bg-green-900': bmiCategory === 'normal' }">
                  <td class="px-4 py-2">{{ t('tools.bmi-calculator.normalWeight') }}</td>
                  <td class="px-4 py-2">{{ t('tools.bmi-calculator.normalWeightDesc') }}</td>
                </tr>
                <tr :class="{ 'bg-yellow-100 dark:bg-yellow-900': bmiCategory === 'overweight' }">
                  <td class="px-4 py-2">{{ t('tools.bmi-calculator.overweight') }}</td>
                  <td class="px-4 py-2">{{ t('tools.bmi-calculator.overweightDesc') }}</td>
                </tr>
                <tr :class="{ 'bg-orange-100 dark:bg-orange-900': bmiCategory === 'obesity' }">
                  <td class="px-4 py-2">{{ t('tools.bmi-calculator.obesity') }}</td>
                  <td class="px-4 py-2">{{ t('tools.bmi-calculator.obesityDesc') }}</td>
                </tr>
                <tr :class="{ 'bg-red-100 dark:bg-red-900': bmiCategory === 'severeObesity' }">
                  <td class="px-4 py-2">{{ t('tools.bmi-calculator.severeObesity') }}</td>
                  <td class="px-4 py-2">{{ t('tools.bmi-calculator.severeObesityDesc') }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 工具介绍部分 -->
    <div class="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-bold mb-6">{{ t('tools.bmi-calculator.aboutTitle') }}</h2>
      <p class="mb-6">{{ t('tools.bmi-calculator.aboutDescription') }}</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="text-xl font-bold mb-4">{{ t('tools.bmi-calculator.whatIsTitle') }}</h3>
          <p class="mb-4">{{ t('tools.bmi-calculator.whatIsDescription') }}</p>
          
          <h3 class="text-xl font-bold mb-4">{{ t('tools.bmi-calculator.howToCalculateTitle') }}</h3>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li>{{ t('tools.bmi-calculator.metricFormula') }}</li>
            <li>{{ t('tools.bmi-calculator.imperialFormula') }}</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">{{ t('tools.bmi-calculator.limitationsTitle') }}</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6">
            <li>{{ t('tools.bmi-calculator.limitation1') }}</li>
            <li>{{ t('tools.bmi-calculator.limitation2') }}</li>
            <li>{{ t('tools.bmi-calculator.limitation3') }}</li>
            <li>{{ t('tools.bmi-calculator.limitation4') }}</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-4">{{ t('tools.bmi-calculator.tipsTitle') }}</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>{{ t('tools.bmi-calculator.tip1') }}</li>
            <li>{{ t('tools.bmi-calculator.tip2') }}</li>
            <li>{{ t('tools.bmi-calculator.tip3') }}</li>
            <li>{{ t('tools.bmi-calculator.tip4') }}</li>
            <li>{{ t('tools.bmi-calculator.tip5') }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

// 表单状态
const unitSystem = ref('metric');
const heightCm = ref(170);
const heightFt = ref(5);
const heightIn = ref(7);
const weightKg = ref(70);
const weightLbs = ref(154);
const bmiResult = ref(0);
const bmiCategory = ref('');

// 计算身高（米）
const heightInMeters = computed(() => {
  if (unitSystem.value === 'metric') {
    return heightCm.value / 100;
  } else {
    // 将英尺和英寸转换为厘米，再转为米
    const totalInches = (heightFt.value * 12) + heightIn.value;
    return (totalInches * 2.54) / 100;
  }
});

// 计算体重（千克）
const weightInKg = computed(() => {
  if (unitSystem.value === 'metric') {
    return weightKg.value;
  } else {
    // 将磅转换为千克
    return weightLbs.value * 0.453592;
  }
});

// 单位系统切换时的换算
watch(unitSystem, (newSystem) => {
  if (newSystem === 'metric') {
    // 从英制转为公制
    const totalInches = (heightFt.value * 12) + heightIn.value;
    heightCm.value = Math.round(totalInches * 2.54);
    weightKg.value = Math.round(weightLbs.value * 0.453592);
  } else {
    // 从公制转为英制
    const totalInches = heightCm.value / 2.54;
    heightFt.value = Math.floor(totalInches / 12);
    heightIn.value = parseFloat((totalInches % 12).toFixed(1));
    weightLbs.value = Math.round(weightKg.value / 0.453592);
  }
});

// 计算BMI
function calculateBMI() {
  if (heightInMeters.value <= 0 || weightInKg.value <= 0) {
    alert('请输入有效的身高和体重');
    return;
  }
  
  // BMI = 体重(kg) / 身高(m)²
  bmiResult.value = weightInKg.value / (heightInMeters.value * heightInMeters.value);
  
  // 设置BMI分类
  if (bmiResult.value < 18.5) {
    bmiCategory.value = 'underweight';
  } else if (bmiResult.value < 25) {
    bmiCategory.value = 'normal';
  } else if (bmiResult.value < 30) {
    bmiCategory.value = 'overweight';
  } else if (bmiResult.value < 35) {
    bmiCategory.value = 'obesity';
  } else {
    bmiCategory.value = 'severeObesity';
  }
}

// 重置表单
function resetForm() {
  if (unitSystem.value === 'metric') {
    heightCm.value = 170;
    weightKg.value = 70;
  } else {
    heightFt.value = 5;
    heightIn.value = 7;
    weightLbs.value = 154;
  }
  
  bmiResult.value = 0;
  bmiCategory.value = '';
}

// 获取BMI类别文本
function getBmiCategory() {
  if (!bmiCategory.value) return '';
  
  const categories = {
    underweight: t('tools.bmi-calculator.underweight'),
    normal: t('tools.bmi-calculator.normalWeight'),
    overweight: t('tools.bmi-calculator.overweight'),
    obesity: t('tools.bmi-calculator.obesity'),
    severeObesity: t('tools.bmi-calculator.severeObesity')
  };
  
  return categories[bmiCategory.value] || '';
}

// 获取BMI类别颜色
function getBmiCategoryColor() {
  const colors = {
    underweight: 'text-blue-600 dark:text-blue-400',
    normal: 'text-green-600 dark:text-green-400',
    overweight: 'text-yellow-600 dark:text-yellow-400',
    obesity: 'text-orange-600 dark:text-orange-400',
    severeObesity: 'text-red-600 dark:text-red-400'
  };
  
  return colors[bmiCategory.value] || '';
}

// 获取BMI在图表中的位置百分比
function getBmiPositionPercentage() {
  if (bmiResult.value <= 0) return 0;
  
  // 将BMI映射到0-100的范围
  // 假设BMI范围从15到40
  let position = ((bmiResult.value - 15) / 25) * 100;
  
  // 限制在0-100范围内
  position = Math.max(0, Math.min(100, position));
  
  return position;
}
</script>

<style scoped>
.bmi-calculator {
  max-width: 100%;
}
</style> 