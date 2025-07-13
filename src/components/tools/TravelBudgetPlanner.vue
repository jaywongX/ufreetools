<template>
    <div class="travel-budget-planner w-full max-w-none">      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <!-- 左侧：旅行基本信息 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4">{{ t('tools.travel-budget-planner.planYourTrip') }}</h2>
          
          <!-- 目的地选择 -->
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1">{{ t('tools.travel-budget-planner.destination') }}</label>
            <select 
              v-model="destination" 
              class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
              <optgroup :label="t('tools.travel-budget-planner.destinations.domestic')">
                <option value="beijing">{{ t('tools.travel-budget-planner.destinations.beijing') }}</option>
                <option value="shanghai">{{ t('tools.travel-budget-planner.destinations.shanghai') }}</option>
                <option value="guangzhou">{{ t('tools.travel-budget-planner.destinations.guangzhou') }}</option>
                <option value="shenzhen">{{ t('tools.travel-budget-planner.destinations.shenzhen') }}</option>
                <option value="hangzhou">{{ t('tools.travel-budget-planner.destinations.hangzhou') }}</option>
                <option value="chengdu">{{ t('tools.travel-budget-planner.destinations.chengdu') }}</option>
                <option value="xian">{{ t('tools.travel-budget-planner.destinations.xian') }}</option>
                <option value="sanya">{{ t('tools.travel-budget-planner.destinations.sanya') }}</option>
              </optgroup>
              <optgroup :label="t('tools.travel-budget-planner.destinations.international')">
                <option value="tokyo">{{ t('tools.travel-budget-planner.destinations.tokyo') }}</option>
                <option value="osaka">{{ t('tools.travel-budget-planner.destinations.osaka') }}</option>
                <option value="seoul">{{ t('tools.travel-budget-planner.destinations.seoul') }}</option>
                <option value="bangkok">{{ t('tools.travel-budget-planner.destinations.bangkok') }}</option>
                <option value="singapore">{{ t('tools.travel-budget-planner.destinations.singapore') }}</option>
                <option value="paris">{{ t('tools.travel-budget-planner.destinations.paris') }}</option>
                <option value="london">{{ t('tools.travel-budget-planner.destinations.london') }}</option>
                <option value="newyork">{{ t('tools.travel-budget-planner.destinations.newyork') }}</option>
                <option value="sydney">{{ t('tools.travel-budget-planner.destinations.sydney') }}</option>
              </optgroup>
              <option value="custom">{{ t('tools.travel-budget-planner.destinations.custom') }}</option>
            </select>
          </div>
          
          <!-- 自定义目的地（如果选择了"自定义"） -->
          <div class="mb-4" v-if="destination === 'custom'">
            <label class="block text-sm font-medium mb-1">{{ t('tools.travel-budget-planner.destinations.custom') }}</label>
            <input 
              type="text" 
              v-model="customDestination" 
              class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              :placeholder="t('tools.travel-budget-planner.destinations.custom')"
            >
          </div>
          
          <!-- 日期选择 -->
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-sm font-medium mb-1">{{ t('tools.travel-budget-planner.startDate') }}</label>
              <input 
                type="date" 
                v-model="startDate" 
                class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">{{ t('tools.travel-budget-planner.endDate') }}</label>
              <input 
                type="date" 
                v-model="endDate" 
                class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
            </div>
          </div>
          
          <!-- 旅行人数和货币选择 -->
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-sm font-medium mb-1">{{ t('tools.travel-budget-planner.travelers') }}</label>
              <input 
                type="number" 
                v-model.number="travelers" 
                min="1" 
                max="50" 
                class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">{{ t('tools.travel-budget-planner.currency') }}</label>
              <select 
                v-model="currency" 
                class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="CNY">{{ t('tools.travel-budget-planner.currencies.CNY') }}</option>
                <option value="USD">{{ t('tools.travel-budget-planner.currencies.USD') }}</option>
                <option value="EUR">{{ t('tools.travel-budget-planner.currencies.EUR') }}</option>
                <option value="JPY">{{ t('tools.travel-budget-planner.currencies.JPY') }}</option>
                <option value="GBP">{{ t('tools.travel-budget-planner.currencies.GBP') }}</option>
                <option value="KRW">{{ t('tools.travel-budget-planner.currencies.KRW') }}</option>
                <option value="AUD">{{ t('tools.travel-budget-planner.currencies.AUD') }}</option>
                <option value="CAD">{{ t('tools.travel-budget-planner.currencies.CAD') }}</option>
                <option value="THB">{{ t('tools.travel-budget-planner.currencies.THB') }}</option>
                <option value="SGD">{{ t('tools.travel-budget-planner.currencies.SGD') }}</option>
              </select>
            </div>
          </div>
          
          <!-- 计算/重置按钮 -->
          <div class="flex space-x-2 mb-4">
            <button 
              @click="calculateBudget"
              class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            >
              {{ t('tools.travel-budget-planner.calculate') }}
            </button>
            <button 
              @click="resetForm"
              class="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md"
            >
              {{ t('tools.travel-budget-planner.reset') }}
            </button>
          </div>
          
          <!-- 旅行提示信息 -->
          <div class="mt-6 bg-blue-50 dark:bg-blue-900 p-3 rounded-md">
            <h3 class="font-bold text-blue-800 dark:text-blue-300 mb-2">{{ t('tools.travel-budget-planner.tips.general') }}</h3>
            <ul class="text-sm text-blue-700 dark:text-blue-200 space-y-1">
              <li>{{ t('tools.travel-budget-planner.tips.emergencyFund') }}</li>
              <li>{{ t('tools.travel-budget-planner.tips.transport') }}</li>
              <li>{{ t('tools.travel-budget-planner.tips.accommodation') }}</li>
            </ul>
          </div>
        </div>
        
        <!-- 中间：预算明细输入 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4">{{ t('tools.travel-budget-planner.categories.transport') }}</h2>
          
          <!-- 交通费用 -->
          <div class="mb-4">
            <div class="grid grid-cols-2 gap-4 mb-2" v-for="(item, index) in transportItems" :key="'transport-'+index">
              <div>
                <select 
                  v-model="item.type" 
                  class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                >
                  <option value="flight">{{ t('tools.travel-budget-planner.transport.flight') }}</option>
                  <option value="train">{{ t('tools.travel-budget-planner.transport.train') }}</option>
                  <option value="bus">{{ t('tools.travel-budget-planner.transport.bus') }}</option>
                  <option value="car">{{ t('tools.travel-budget-planner.transport.car') }}</option>
                  <option value="taxi">{{ t('tools.travel-budget-planner.transport.taxi') }}</option>
                  <option value="publicTransport">{{ t('tools.travel-budget-planner.transport.publicTransport') }}</option>
                  <option value="other">{{ t('tools.travel-budget-planner.transport.other') }}</option>
                </select>
              </div>
              <div class="flex">
                <input 
                  type="number" 
                  v-model.number="item.amount" 
                  min="0" 
                  class="w-full p-2 border rounded-l-md dark:bg-gray-700 dark:border-gray-600"
                  :placeholder="t('tools.travel-budget-planner.table.amount')"
                >
                <button 
                  @click="removeItem('transport', index)"
                  class="bg-red-500 hover:bg-red-600 text-white p-2 rounded-r-md"
                  v-if="transportItems.length > 1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <button 
              @click="addItem('transport')"
              class="mt-2 text-blue-600 dark:text-blue-400 text-sm flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
              {{ t('tools.travel-budget-planner.addExpense') }}
            </button>
          </div>
          
          <h2 class="text-xl font-bold mb-4">{{ t('tools.travel-budget-planner.categories.accommodation') }}</h2>
          
          <!-- 住宿费用 -->
          <div class="mb-4">
            <div class="grid grid-cols-2 gap-4 mb-2" v-for="(item, index) in accommodationItems" :key="'accommodation-'+index">
              <div>
                <select 
                  v-model="item.type" 
                  class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                >
                  <option value="hotel">{{ t('tools.travel-budget-planner.accommodation.hotel') }}</option>
                  <option value="hostel">{{ t('tools.travel-budget-planner.accommodation.hostel') }}</option>
                  <option value="apartment">{{ t('tools.travel-budget-planner.accommodation.apartment') }}</option>
                  <option value="camping">{{ t('tools.travel-budget-planner.accommodation.camping') }}</option>
                  <option value="other">{{ t('tools.travel-budget-planner.accommodation.other') }}</option>
                </select>
              </div>
              <div class="flex">
                <input 
                  type="number" 
                  v-model.number="item.amount" 
                  min="0" 
                  class="w-full p-2 border rounded-l-md dark:bg-gray-700 dark:border-gray-600"
                  :placeholder="t('tools.travel-budget-planner.table.amount')"
                >
                <button 
                  @click="removeItem('accommodation', index)"
                  class="bg-red-500 hover:bg-red-600 text-white p-2 rounded-r-md"
                  v-if="accommodationItems.length > 1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <button 
              @click="addItem('accommodation')"
              class="mt-2 text-blue-600 dark:text-blue-400 text-sm flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
              {{ t('tools.travel-budget-planner.addExpense') }}
            </button>
          </div>
          
          <div class="grid grid-cols-2 gap-6">
            <!-- 餐饮费用 -->
            <div>
              <h2 class="text-lg font-bold mb-2">{{ t('tools.travel-budget-planner.categories.food') }}</h2>
              <input 
                type="number" 
                v-model.number="foodBudget" 
                min="0" 
                class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 mb-4"
                :placeholder="t('tools.travel-budget-planner.table.amount')"
              >
            </div>
            
            <!-- 活动费用 -->
            <div>
              <h2 class="text-lg font-bold mb-2">{{ t('tools.travel-budget-planner.categories.activities') }}</h2>
              <input 
                type="number" 
                v-model.number="activitiesBudget" 
                min="0" 
                class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 mb-4"
                :placeholder="t('tools.travel-budget-planner.table.amount')"
              >
            </div>
            
            <!-- 购物费用 -->
            <div>
              <h2 class="text-lg font-bold mb-2">{{ t('tools.travel-budget-planner.categories.shopping') }}</h2>
              <input 
                type="number" 
                v-model.number="shoppingBudget" 
                min="0" 
                class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 mb-4"
                :placeholder="t('tools.travel-budget-planner.table.amount')"
              >
            </div>
            
            <!-- 其他费用 -->
            <div>
              <h2 class="text-lg font-bold mb-2">{{ t('tools.travel-budget-planner.categories.misc') }}</h2>
              <input 
                type="number" 
                v-model.number="miscBudget" 
                min="0" 
                class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 mb-4"
                :placeholder="t('tools.travel-budget-planner.table.amount')"
              >
            </div>
          </div>
          
          <!-- 紧急备用金 -->
          <div>
            <h2 class="text-lg font-bold mb-2">{{ t('tools.travel-budget-planner.categories.emergency') }}</h2>
            <div class="mb-4">
              <div class="flex items-center space-x-2">
                <input 
                  type="range" 
                  v-model.number="emergencyPercent" 
                  min="0" 
                  max="20" 
                  step="1"
                  class="flex-grow"
                >
                <span class="text-sm font-medium">{{ emergencyPercent }}%</span>
              </div>
              <div class="text-xs text-gray-500 mt-1">
                {{ t('tools.travel-budget-planner.tips.emergencyFund') }}
              </div>
            </div>
          </div>
        </div>
        
        <!-- 右侧：预算结果展示 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4">{{ t('tools.travel-budget-planner.analysis.title') }}</h2>
          
          <!-- 总预算 -->
          <div class="mb-6">
            <div class="flex justify-between items-center mb-1">
              <span class="text-lg font-medium">{{ t('tools.travel-budget-planner.totalBudget') }}</span>
              <span class="text-xl font-bold text-blue-600 dark:text-blue-400">{{ formatCurrency(totalBudget) }}</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
              <div class="bg-blue-600 h-1.5 rounded-full" style="width: 100%"></div>
            </div>
          </div>
          
          <!-- 每人预算 -->
          <div class="mb-6">
            <div class="flex justify-between items-center mb-1">
              <span class="text-lg font-medium">{{ t('tools.travel-budget-planner.perPersonBudget') }}</span>
              <span class="text-xl font-bold text-green-600 dark:text-green-400">{{ formatCurrency(perPersonBudget) }}</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
              <div class="bg-green-600 h-1.5 rounded-full" :style="{width: '100%'}"></div>
            </div>
          </div>
          
          <!-- 每日预算 -->
          <div class="mb-6">
            <div class="flex justify-between items-center mb-1">
              <span class="text-lg font-medium">{{ t('tools.travel-budget-planner.perDayBudget') }}</span>
              <span class="text-xl font-bold text-purple-600 dark:text-purple-400">{{ formatCurrency(perDayBudget) }}</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
              <div class="bg-purple-600 h-1.5 rounded-full" :style="{width: '100%'}"></div>
            </div>
          </div>
          
          <!-- 预算细分 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-bold mb-4">{{ t('tools.travel-budget-planner.analysis.breakdown') }}</h2>
            
            <!-- 交通预算 -->
            <div class="flex justify-between items-center mb-1">
              <span class="text-sm">{{ t('tools.travel-budget-planner.categories.transport') }}</span>
              <span class="font-medium">{{ formatCurrency(transportTotal) }}</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-3">
              <div class="bg-red-600 h-1.5 rounded-full" :style="{width: getPercentage(transportTotal, totalBudget) + '%'}"></div>
            </div>
            
            <!-- 住宿预算 -->
            <div class="flex justify-between items-center mb-1">
              <span class="text-sm">{{ t('tools.travel-budget-planner.categories.accommodation') }}</span>
              <span class="font-medium">{{ formatCurrency(accommodationTotal) }}</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-3">
              <div class="bg-blue-600 h-1.5 rounded-full" :style="{width: getPercentage(accommodationTotal, totalBudget) + '%'}"></div>
            </div>
            
            <!-- 餐饮预算 -->
            <div class="flex justify-between items-center mb-1">
              <span class="text-sm">{{ t('tools.travel-budget-planner.categories.food') }}</span>
              <span class="font-medium">{{ formatCurrency(foodBudget) }}</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-3">
              <div class="bg-green-600 h-1.5 rounded-full" :style="{width: getPercentage(foodBudget, totalBudget) + '%'}"></div>
            </div>
            
            <!-- 活动预算 -->
            <div class="flex justify-between items-center mb-1">
              <span class="text-sm">{{ t('tools.travel-budget-planner.categories.activities') }}</span>
              <span class="font-medium">{{ formatCurrency(activitiesBudget) }}</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-3">
              <div class="bg-yellow-600 h-1.5 rounded-full" :style="{width: getPercentage(activitiesBudget, totalBudget) + '%'}"></div>
            </div>
            
            <!-- 购物预算 -->
            <div class="flex justify-between items-center mb-1">
              <span class="text-sm">{{ t('tools.travel-budget-planner.categories.shopping') }}</span>
              <span class="font-medium">{{ formatCurrency(shoppingBudget) }}</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-3">
              <div class="bg-purple-600 h-1.5 rounded-full" :style="{width: getPercentage(shoppingBudget, totalBudget) + '%'}"></div>
            </div>
            
            <!-- 其他预算 -->
            <div class="flex justify-between items-center mb-1">
              <span class="text-sm">{{ t('tools.travel-budget-planner.categories.misc') }}</span>
              <span class="font-medium">{{ formatCurrency(miscBudget) }}</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-3">
              <div class="bg-gray-600 h-1.5 rounded-full" :style="{width: getPercentage(miscBudget, totalBudget) + '%'}"></div>
            </div>
            
            <!-- 紧急备用金 -->
            <div class="flex justify-between items-center mb-1">
              <span class="text-sm">{{ t('tools.travel-budget-planner.categories.emergency') }}</span>
              <span class="font-medium">{{ formatCurrency(emergencyBudget) }}</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-3">
              <div class="bg-orange-600 h-1.5 rounded-full" :style="{width: getPercentage(emergencyBudget, totalBudget) + '%'}"></div>
            </div>
            
            <!-- 在这里添加图表容器 -->
            <div class="mt-6">
              <h3 class="text-lg font-semibold mb-4">{{ t('tools.travel-budget-planner.analysis.distribution') }}</h3>
              <div class="canvas-container">
                <canvas ref="budgetChartRef"></canvas>
              </div>
            </div>
          </div>
          
          <!-- 保存为PDF按钮 -->
          <button 
            @click="saveAsPDF"
            class="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 8.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            {{ t('tools.travel-budget-planner.saveAsPDF') }}
          </button>
        </div>
      </div>
      
      <!-- 工具介绍信息 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-6">
        <h2 class="text-xl font-bold mb-4">{{ t('tools.travel-budget-planner.about.title') }}</h2>
        <p class="mb-6">{{ t('tools.travel-budget-planner.about.description') }}</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 class="text-lg font-bold mb-3">{{ t('tools.travel-budget-planner.about.featuresTitle') }}</h3>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {{ t('tools.travel-budget-planner.about.feature1') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {{ t('tools.travel-budget-planner.about.feature2') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {{ t('tools.travel-budget-planner.about.feature3') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {{ t('tools.travel-budget-planner.about.feature4') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {{ t('tools.travel-budget-planner.about.feature5') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {{ t('tools.travel-budget-planner.about.feature6') }}
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-bold mb-3">{{ t('tools.travel-budget-planner.about.benefitsTitle') }}</h3>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                {{ t('tools.travel-budget-planner.about.benefit1') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                {{ t('tools.travel-budget-planner.about.benefit2') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                {{ t('tools.travel-budget-planner.about.benefit3') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                {{ t('tools.travel-budget-planner.about.benefit4') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                {{ t('tools.travel-budget-planner.about.benefit5') }}
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-bold mb-3">{{ t('tools.travel-budget-planner.about.tipsTitle') }}</h3>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
                {{ t('tools.travel-budget-planner.about.tip1') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
                {{ t('tools.travel-budget-planner.about.tip2') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
                {{ t('tools.travel-budget-planner.about.tip3') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
                {{ t('tools.travel-budget-planner.about.tip4') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
                {{ t('tools.travel-budget-planner.about.tip5') }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, nextTick, watch } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { Chart, registerables } from 'chart.js'
  import html2pdf from 'html2pdf.js'
  
  // 注册 Chart.js 组件
  Chart.register(...registerables)
  
  const { t } = useI18n()
  
  // 基本信息
  const destination = ref('beijing')
  const customDestination = ref('')
  const startDate = ref('')
  const endDate = ref('')
  const travelers = ref(2)
  const currency = ref('CNY')
  
  // 预算项目
  const transportItems = ref([
    { type: 'flight', amount: 0 }
  ])
  
  const accommodationItems = ref([
    { type: 'hotel', amount: 0 }
  ])
  
  const foodBudget = ref(0)
  const activitiesBudget = ref(0)
  const shoppingBudget = ref(0)
  const miscBudget = ref(0)
  const emergencyBudget = ref(0)
  
  // 结果
  const tripDuration = ref(0)
  const totalBudget = ref(0)
  const perPersonBudget = ref(0)
  const perDayBudget = ref(0)
  const showResults = ref(false)
  
  // 图表引用
  const budgetChartRef = ref(null)
  const budgetChart = ref(null)
  
  // 币种符号
  const currencySymbols = {
    CNY: '¥',
    USD: '$',
    EUR: '€',
    JPY: '¥',
    GBP: '£',
    KRW: '₩',
    AUD: '$',
    CAD: '$',
    THB: '฿',
    SGD: '$'
  }
  
  // 获取当前货币符号
  const currencySymbol = computed(() => {
    return currencySymbols[currency.value] || currency.value
  })
  
  // 添加 formatCurrency 函数来格式化货币金额
  const formatCurrency = (amount) => {
    if (amount === null || isNaN(amount)) return `${currencySymbol.value}0`;
    return `${currencySymbol.value}${amount.toLocaleString()}`;
  }
  
  // 添加 getPercentage 函数来计算百分比
  const getPercentage = (amount) => {
    if (!totalBudget.value || amount === 0) return '0%';
    const percentage = (amount / totalBudget.value) * 100;
    return `${percentage.toFixed(1)}%`;
  }
  
  // 计算旅行天数
  const calculateDuration = () => {
    if (!startDate.value || !endDate.value) return 0
    
    const start = new Date(startDate.value)
    const end = new Date(endDate.value)
    
    // 检查日期是否有效
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return 0
    
    // 计算天数差异
    const timeDiff = end.getTime() - start.getTime()
    return Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1
  }
  
  // 计算所有交通费用
  const calculateTransportTotal = () => {
    let total = 0;
    transportItems.value.forEach(item => {
      // 使用Number而非parseFloat以处理更多输入情况
      const amount = Number(item.amount);
      if (!isNaN(amount)) {
        total += amount;
      }
    });
    return total;
  }
  
  // 计算所有住宿费用
  const calculateAccommodationTotal = () => {
    let total = 0;
    accommodationItems.value.forEach(item => {
      // 使用Number而非parseFloat以处理更多输入情况
      const amount = Number(item.amount);
      if (!isNaN(amount)) {
        total += amount;
      }
    });
    return total;
  }
  
  // 添加紧急备用金百分比变量
  const emergencyPercent = ref(10) // 默认10%
  
  // 计算不包含紧急备用金的总预算
  const calculateTotalWithoutEmergency = () => {
    const transport = calculateTransportTotal()
    const accommodation = calculateAccommodationTotal()
    const food = Number(foodBudget.value) || 0
    const activities = Number(activitiesBudget.value) || 0
    const shopping = Number(shoppingBudget.value) || 0
    const misc = Number(miscBudget.value) || 0
    
    return transport + accommodation + food + activities + shopping + misc
  }
  
  // 监听总预算变化，更新紧急备用金
  watch([() => calculateTotalWithoutEmergency(), emergencyPercent], () => {
    const baseTotal = calculateTotalWithoutEmergency()
    emergencyBudget.value = Math.round(baseTotal * (emergencyPercent.value / 100))
  })
  
  // 计算总预算
  const calculateTotalBudget = () => {
    const baseTotal = calculateTotalWithoutEmergency()
    const emergency = Number(emergencyBudget.value) || 0
    
    return baseTotal + emergency
  }
  
  // 添加预算项目
  const addItem = (category) => {
    if (category === 'transport') {
      transportItems.value.push({ type: 'flight', amount: 0 })
    } else if (category === 'accommodation') {
      accommodationItems.value.push({ type: 'hotel', amount: 0 })
    }
  }
  
  // 移除预算项目
  const removeItem = (category, index) => {
    if (category === 'transport') {
      transportItems.value.splice(index, 1)
    } else if (category === 'accommodation') {
      accommodationItems.value.splice(index, 1)
    }
  }
  
  // 计算预算
  const calculateBudget = () => {
    // 计算旅行天数
    tripDuration.value = calculateDuration()
    
    // 检查必填项
    if (!destination.value || !startDate.value || !endDate.value || !travelers.value || tripDuration.value <= 0) {
      alert(t('tools.travel-budget-planner.messages.error'))
      return
    }
    
    // 检查日期有效性
    if (tripDuration.value <= 0) {
      alert(t('tools.travel-budget-planner.messages.dateError'))
      return
    }
    
    // 确保所有预算项目的金额都是数字
    transportItems.value.forEach(item => {
      item.amount = Number(item.amount) || 0
    })
    
    accommodationItems.value.forEach(item => {
      item.amount = Number(item.amount) || 0
    })
    
    foodBudget.value = Number(foodBudget.value) || 0
    activitiesBudget.value = Number(activitiesBudget.value) || 0
    shoppingBudget.value = Number(shoppingBudget.value) || 0
    miscBudget.value = Number(miscBudget.value) || 0
    
    // 先计算基础预算总和
    const baseTotal = calculateTotalWithoutEmergency()
    
    // 然后根据百分比计算紧急备用金
    emergencyBudget.value = Math.round(baseTotal * (emergencyPercent.value / 100))
    
    // 最后计算总预算
    totalBudget.value = calculateTotalBudget()
    
    // 计算每人预算
    perPersonBudget.value = travelers.value > 0 ? totalBudget.value / travelers.value : 0
    
    // 计算每日预算
    perDayBudget.value = tripDuration.value > 0 ? totalBudget.value / tripDuration.value : 0
    
    // 显示结果
    showResults.value = true
    
    // 生成预算图表
    generateBudgetChart()
  }
  
  // 重置表单
  const resetForm = () => {
    destination.value = 'beijing'
    customDestination.value = ''
    startDate.value = ''
    endDate.value = ''
    travelers.value = 2
    currency.value = 'CNY'
    
    transportItems.value = [{ type: 'flight', amount: 0 }]
    accommodationItems.value = [{ type: 'hotel', amount: 0 }]
    
    foodBudget.value = 0
    activitiesBudget.value = 0
    shoppingBudget.value = 0
    miscBudget.value = 0
    emergencyPercent.value = 10 // 重置为默认10%
    emergencyBudget.value = 0
    
    tripDuration.value = 0
    totalBudget.value = 0
    perPersonBudget.value = 0
    perDayBudget.value = 0
    
    showResults.value = false
    
    // 清除图表
    if (budgetChart.value) {
      budgetChart.value.destroy()
      budgetChart.value = null
    }
  }
  
  // 添加计算属性，用于在模板中访问
  const transportTotal = computed(() => calculateTransportTotal())
  const accommodationTotal = computed(() => calculateAccommodationTotal())
  
  // 生成预算图表
  const generateBudgetChart = async () => {
    // 确保DOM已更新，图表元素已存在
    await nextTick()
    
    // 检查图表引用是否存在
    if (!budgetChartRef.value) {
      console.error('图表容器未找到')
      return
    }
    
    // 如果已有图表，先销毁
    if (budgetChart.value) {
      budgetChart.value.destroy()
    }
    
    // 准备图表数据
    const transport = calculateTransportTotal()
    const accommodation = calculateAccommodationTotal()
    const food = Number(foodBudget.value) || 0
    const activities = Number(activitiesBudget.value) || 0
    const shopping = Number(shoppingBudget.value) || 0
    const misc = Number(miscBudget.value) || 0
    const emergency = Number(emergencyBudget.value) || 0
    
    try {
    const ctx = budgetChartRef.value.getContext('2d')
      if (!ctx) {
        console.error('无法获取图表上下文')
        return
      }
    
    budgetChart.value = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          t('tools.travel-budget-planner.categories.transport'),
          t('tools.travel-budget-planner.categories.accommodation'),
          t('tools.travel-budget-planner.categories.food'),
          t('tools.travel-budget-planner.categories.activities'),
          t('tools.travel-budget-planner.categories.shopping'),
          t('tools.travel-budget-planner.categories.misc'),
          t('tools.travel-budget-planner.categories.emergency')
        ],
        datasets: [{
          data: [transport, accommodation, food, activities, shopping, misc, emergency],
          backgroundColor: [
            '#4299e1', // 蓝色 - 交通
            '#f6ad55', // 橙色 - 住宿
            '#48bb78', // 绿色 - 餐饮
            '#f56565', // 红色 - 活动
            '#9f7aea', // 紫色 - 购物
            '#ed8936', // 深橙色 - 其他
            '#ecc94b'  // 黄色 - 紧急
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    })
    } catch (error) {
      console.error('创建图表时出错:', error)
    }
  }
  
  // 改进保存为PDF功能
  const saveAsPDF = async () => {
    // 确保结果已显示
    if (!showResults.value) {
      alert(t('tools.travel-budget-planner.messages.error'))
      return
    }
    
    // 先更新预算图表以确保它是最新的
    await generateBudgetChart()
    
    // 等待图表数据渲染完成，使用更长的延迟确保渲染完毕
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // 捕获当前日期作为文件名一部分
    const dateStr = new Date().toISOString().slice(0, 10)
    const fileName = `travel-budget-${dateStr}.pdf`
    
    // 获取图表的图像数据，使用更高的质量设置
    let chartImageData = ''
    if (budgetChartRef.value) {
      try {
        // 使用更高质量选项获取图表图像
        chartImageData = budgetChartRef.value.toDataURL('image/png', 1.0)
      } catch (e) {
        console.error('无法获取图表图像:', e)
      }
    }
    
    // 在HTML模板中修改图表图像的样式
    const chartHTML = chartImageData ? `
      <div style="margin-top: 20px;">
        <h3 style="margin-bottom: 15px;">${t('tools.travel-budget-planner.analysis.distribution')}</h3>
        <div style="text-align: center; page-break-inside: avoid;">
          <img 
            src="${chartImageData}" 
            style="width: 80%; height: auto; border-radius: 4px; display: inline-block;"
          />
        </div>
      </div>
    ` : '';
    
    // 创建要导出的内容元素
    const element = document.createElement('div')
    element.className = 'pdf-export'
    
    // 添加标题和基本信息
    element.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1 style="color: #2b6cb0; text-align: center; margin-bottom: 20px;">${t('tools.travel-budget-planner.name')}</h1>
        <div style="margin-bottom: 20px; padding: 15px; background-color: #f0f9ff; border-radius: 8px;">
          <h2 style="margin-bottom: 10px;">${t('tools.travel-budget-planner.planYourTrip')}</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; width: 40%;"><strong>${t('tools.travel-budget-planner.destination')}:</strong></td>
              <td style="padding: 8px 0;">${destination.value === 'custom' ? customDestination.value : t(`tools.travel-budget-planner.destinations.${destination.value}`)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>${t('tools.travel-budget-planner.startDate')}:</strong></td>
              <td style="padding: 8px 0;">${startDate.value}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>${t('tools.travel-budget-planner.endDate')}:</strong></td>
              <td style="padding: 8px 0;">${endDate.value}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>${t('tools.travel-budget-planner.tripDuration')}:</strong></td>
              <td style="padding: 8px 0;">${tripDuration.value} ${days.value}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>${t('tools.travel-budget-planner.travelers')}:</strong></td>
              <td style="padding: 8px 0;">${travelers.value}</td>
            </tr>
          </table>
        </div>
        
        <div style="margin-bottom: 20px; padding: 15px; background-color: #f0fff4; border-radius: 8px;">
          <h2 style="margin-bottom: 10px;">${t('tools.travel-budget-planner.analysis.summary')}</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; width: 40%;"><strong>${t('tools.travel-budget-planner.totalBudget')}:</strong></td>
              <td style="padding: 8px 0; font-size: 18px; font-weight: bold;">${formatCurrency(totalBudget.value)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>${t('tools.travel-budget-planner.perPersonBudget')}:</strong></td>
              <td style="padding: 8px 0;">${formatCurrency(perPersonBudget.value)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>${t('tools.travel-budget-planner.perDayBudget')}:</strong></td>
              <td style="padding: 8px 0;">${formatCurrency(perDayBudget.value)}</td>
            </tr>
          </table>
        </div>
        
        <div style="margin-bottom: 20px; padding: 15px; background-color: #fff5f5; border-radius: 8px;">
          <h2 style="margin-bottom: 10px;">${t('tools.travel-budget-planner.analysis.breakdown')}</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; width: 40%;"><strong>${t('tools.travel-budget-planner.categories.transport')}:</strong></td>
              <td style="padding: 8px 0;">${formatCurrency(calculateTransportTotal())}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>${t('tools.travel-budget-planner.categories.accommodation')}:</strong></td>
              <td style="padding: 8px 0;">${formatCurrency(calculateAccommodationTotal())}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>${t('tools.travel-budget-planner.categories.food')}:</strong></td>
              <td style="padding: 8px 0;">${formatCurrency(foodBudget.value)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>${t('tools.travel-budget-planner.categories.activities')}:</strong></td>
              <td style="padding: 8px 0;">${formatCurrency(activitiesBudget.value)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>${t('tools.travel-budget-planner.categories.shopping')}:</strong></td>
              <td style="padding: 8px 0;">${formatCurrency(shoppingBudget.value)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>${t('tools.travel-budget-planner.categories.misc')}:</strong></td>
              <td style="padding: 8px 0;">${formatCurrency(miscBudget.value)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>${t('tools.travel-budget-planner.categories.emergency')}:</strong></td>
              <td style="padding: 8px 0;">${formatCurrency(emergencyBudget.value)}</td>
            </tr>
          </table>
          
          ${chartHTML}
        </div>
        
        <div style="font-size: 12px; color: #666; text-align: center; margin-top: 30px;">
          ${t('tools.travel-budget-planner.about.title')} - ${new Date().toLocaleDateString()}
        </div>
      </div>
    `
    
    // 配置PDF选项
    const opt = {
      margin: 10,
      filename: fileName,
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: { 
        scale: 2,
        logging: true,
        letterRendering: true,
        useCORS: true
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }
    
    try {
      // 生成PDF
      await html2pdf().from(element).set(opt).save()
      
      // 显示成功消息
    alert(t('tools.travel-budget-planner.messages.saved'))
    } catch (error) {
      console.error('PDF生成错误:', error)
      alert('PDF生成失败: ' + error.message)
    }
  }
  
  // 当组件挂载时设置默认日期
  onMounted(() => {
    const today = new Date()
    const nextWeek = new Date()
    nextWeek.setDate(today.getDate() + 7)
    
    startDate.value = today.toISOString().split('T')[0]
    endDate.value = nextWeek.toISOString().split('T')[0]
  })
  
  // 在 calculateDuration 函数上方添加一个days国际化文本属性
  // 这会在PDF中用到
  
  // 后面可以将此添加到本地化文件中:
  // src/locales/zh/tools/travel-budget-planner.js 添加: days: '天',
  // src/locales/en/tools/travel-budget-planner.js 添加: days: 'days',
  
  // 临时方案，在组件中添加这个属性
  const days = computed(() => {
    return locale.value === 'zh' ? '天' : 'days'
  })
  
  // 如果locale未定义，添加这个
  const locale = computed(() => {
    return document.documentElement.lang || 'zh'
  })
  </script>
  
  <style scoped>
  .travel-budget-planner {
    max-width: 100%;
  }
  
  .canvas-container {
    height: 300px;
    position: relative;
  }
  
  /* 自定义输入框样式 */
  input[type="number"],
  input[type="text"],
  input[type="date"],
  select {
    transition: border 0.2s ease;
  }
  
  input[type="number"]:focus,
  input[type="text"]:focus,
  input[type="date"]:focus,
  select:focus {
    border-color: #4299e1;
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
  }
  
  @media print {
    .no-print {
      display: none;
    }
  }
  </style>
  