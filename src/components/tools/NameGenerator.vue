<template>
    <div class="flex flex-col h-full">
      <!-- 工具主体内容 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <!-- 左侧面板：设置 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4">{{ t('tools.name-generator.settings.title') }}</h2>
          
          <!-- 数量选择 -->
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1">{{ t('tools.name-generator.settings.quantity') }}</label>
            <div class="flex items-center">
              <input
                type="range"
                v-model.number="quantity"
                min="1"
                max="50"
                class="w-full mr-2"
              />
              <span class="text-sm font-medium w-8 text-center">{{ quantity }}</span>
            </div>
          </div>
          
          <!-- 名字类型 -->
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1">{{ t('tools.name-generator.settings.type') }}</label>
            <select 
              v-model="nameType" 
              class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
              <option v-for="(value, key) in nameTypes" :key="key" :value="key">
                {{ value }}
              </option>
            </select>
          </div>
          
          <!-- 性别选择 -->
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1">{{ t('tools.name-generator.settings.gender') }}</label>
            <select 
              v-model="gender" 
              class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
              <option v-for="(value, key) in genderOptions" :key="key" :value="key">
                {{ value }}
              </option>
            </select>
          </div>
          
          <!-- 文化背景 -->
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1">{{ t('tools.name-generator.settings.culture') }}</label>
            <select 
              v-model="culture" 
              class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
              <option v-for="(value, key) in cultureOptions" :key="key" :value="key">
                {{ value }}
              </option>
            </select>
          </div>
          
          <!-- 名字风格 -->
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1">{{ t('tools.name-generator.settings.style') }}</label>
            <select 
              v-model="style" 
              class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
              <option v-for="(value, key) in styleOptions" :key="key" :value="key">
                {{ value }}
              </option>
            </select>
          </div>
          
          <!-- 高级选项切换按钮 -->
          <div class="mb-4">
            <button 
              @click="showAdvanced = !showAdvanced"
              class="text-sm text-blue-600 dark:text-blue-400 flex items-center"
            >
              <span>{{ t('tools.name-generator.settings.advancedOptions') }}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-4 w-4 ml-1" 
                :class="showAdvanced ? 'transform rotate-180' : ''" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            
            <!-- 高级选项内容 -->
            <div v-if="showAdvanced" class="mt-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-md space-y-4">
              <!-- 名字长度设置 -->
              <div>
                <label class="block text-sm font-medium mb-1">{{ t('tools.name-generator.settings.minLength') }}</label>
                <input 
                  type="number" 
                  v-model.number="minLength" 
                  min="1" 
                  max="20" 
                  class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                >
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-1">{{ t('tools.name-generator.settings.maxLength') }}</label>
                <input 
                  type="number" 
                  v-model.number="maxLength" 
                  min="1" 
                  max="30" 
                  class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                >
              </div>
              
              <!-- 首尾字母设置 -->
              <div>
                <label class="block text-sm font-medium mb-1">{{ t('tools.name-generator.settings.startsWith') }}</label>
                <input 
                  type="text" 
                  v-model="startsWith" 
                  maxlength="2"
                  class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                >
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-1">{{ t('tools.name-generator.settings.endsWith') }}</label>
                <input 
                  type="text" 
                  v-model="endsWith" 
                  maxlength="2"
                  class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                >
              </div>
              
              <!-- 中间名和姓氏选项 -->
              <div class="space-y-2">
                <div class="flex items-center">
                  <input 
                    type="checkbox" 
                    id="includeMiddleName" 
                    v-model="includeMiddleName"
                    class="mr-2"
                  />
                  <label for="includeMiddleName" class="text-sm">
                    {{ t('tools.name-generator.settings.includeMiddleName') }}
                  </label>
                </div>
                
                <div class="flex items-center">
                  <input 
                    type="checkbox" 
                    id="includeSurname" 
                    v-model="includeSurname"
                    class="mr-2"
                  />
                  <label for="includeSurname" class="text-sm">
                    {{ t('tools.name-generator.settings.includeSurname') }}
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 按钮区域 -->
          <div class="flex gap-2">
            <button 
              @click="generateNames" 
              class="flex-grow py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex justify-center items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
              {{ t('tools.name-generator.generateNames') }}
            </button>
            
            <button 
              @click="resetSettings" 
              class="px-3 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- 中间面板：生成结果 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 lg:col-span-2">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">{{ t('tools.name-generator.results.title') }}</h2>
            <div class="flex space-x-2">
              <button 
                @click="generateNames" 
                class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
              >
                {{ t('tools.name-generator.generateNames') }}
              </button>
              <button 
                @click="regenerateNames" 
                class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
              >
                {{ t('tools.name-generator.regenerate') }}
              </button>
              <button 
                @click="resetSettings" 
                class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md"
              >
                {{ t('tools.name-generator.reset') }}
              </button>
            </div>
          </div>
          
          <!-- 结果计数 -->
          <div class="text-sm text-gray-500 dark:text-gray-400 mb-4" v-if="generatedNames.length > 0">
            {{ t('tools.name-generator.results.count', { count: generatedNames.length }) }}
            </div>
            
          <!-- 名字列表 -->
          <div v-if="generatedNames.length > 0" class="mb-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div 
                v-for="(name, index) in generatedNames" 
                :key="index"
                class="p-3 bg-gray-50 dark:bg-gray-700 rounded-md flex justify-between items-center"
              >
                <span class="font-medium">{{ name }}</span>
              <button 
                @click="copyName(name)" 
                  class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                title="复制"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
              </button>
            </div>
          </div>
          
            <!-- 复制全部按钮 -->
            <div class="mt-4 flex justify-end">
              <button 
                @click="copyAllNames"
                class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                  <path d="M3 8a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                {{ t('tools.name-generator.copyAll') }}
              </button>
            </div>
          </div>
          
          <!-- 没有结果时显示提示 -->
          <div v-else class="text-center py-10 text-gray-500 dark:text-gray-400">
            {{ t('tools.name-generator.results.empty') }}
          </div>
        </div>
      </div>
      
      <!-- 工具介绍部分 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <!-- 关于工具 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-4">{{ t('tools.name-generator.aboutTitle') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('tools.name-generator.aboutDescription') }}
          </p>
          
          <h3 class="text-lg font-bold mb-2">{{ t('tools.name-generator.featuresTitle') }}</h3>
          <ul class="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
            <li>{{ t('tools.name-generator.feature1') }}</li>
            <li>{{ t('tools.name-generator.feature2') }}</li>
            <li>{{ t('tools.name-generator.feature3') }}</li>
            <li>{{ t('tools.name-generator.feature4') }}</li>
            <li>{{ t('tools.name-generator.feature5') }}</li>
            <li>{{ t('tools.name-generator.feature6') }}</li>
            </ul>
        </div>
        
        <!-- 使用场景 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4">{{ t('tools.name-generator.useCasesTitle') }}</h2>
          <ul class="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-2">
            <li>{{ t('tools.name-generator.useCase1') }}</li>
            <li>{{ t('tools.name-generator.useCase2') }}</li>
            <li>{{ t('tools.name-generator.useCase3') }}</li>
            <li>{{ t('tools.name-generator.useCase4') }}</li>
            <li>{{ t('tools.name-generator.useCase5') }}</li>
            </ul>
          </div>
          
          <!-- 使用提示 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4">{{ t('tools.name-generator.tipsTitle') }}</h2>
          <div class="space-y-4 text-gray-600 dark:text-gray-300">
              <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <p class="text-blue-800 dark:text-blue-200">{{ t('tools.name-generator.tip1') }}</p>
              </div>
              <div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <p class="text-green-800 dark:text-green-200">{{ t('tools.name-generator.tip2') }}</p>
              </div>
            <div class="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
              <p class="text-yellow-800 dark:text-yellow-200">{{ t('tools.name-generator.tip3') }}</p>
            </div>
              <div class="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
              <p class="text-purple-800 dark:text-purple-200">{{ t('tools.name-generator.tip4') }}</p>
              </div>
              <div class="bg-pink-50 dark:bg-pink-900/30 p-4 rounded-lg">
                <p class="text-pink-800 dark:text-pink-200">{{ t('tools.name-generator.tip5') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// 参数设置
const quantity = ref(10)
const nameType = ref('fullName')
const gender = ref('any')
const culture = ref('any')
const style = ref('classic')
const startsWith = ref('')
const endsWith = ref('')
const minLength = ref(3)
const maxLength = ref(15)
const includeMiddleName = ref(false)
const includeSurname = ref(true)
const generatedNames = ref([])
const showAdvanced = ref(false)

// 计算属性：获取国际化后的名字类型选项
const nameTypes = computed(() => {
  return {
    fullName: t('tools.name-generator.types.fullName'),
    firstName: t('tools.name-generator.types.firstName'),
    lastName: t('tools.name-generator.types.lastName'),
    nickname: t('tools.name-generator.types.nickname'),
    fantasy: t('tools.name-generator.types.fantasy'),
    scifi: t('tools.name-generator.types.scifi'),
    ancient: t('tools.name-generator.types.ancient'),
    modern: t('tools.name-generator.types.modern'),
    custom: t('tools.name-generator.types.custom')
  }
})

// 计算属性：获取国际化后的性别选项
const genderOptions = computed(() => {
  return {
    any: t('tools.name-generator.genders.any'),
    male: t('tools.name-generator.genders.male'),
    female: t('tools.name-generator.genders.female'),
    neutral: t('tools.name-generator.genders.neutral')
  }
})

// 计算属性：获取国际化后的文化背景选项
const cultureOptions = computed(() => {
  return {
    any: t('tools.name-generator.cultures.any'),
    chinese: t('tools.name-generator.cultures.chinese'),
    japanese: t('tools.name-generator.cultures.japanese'),
    korean: t('tools.name-generator.cultures.korean'),
    english: t('tools.name-generator.cultures.english'),
    spanish: t('tools.name-generator.cultures.spanish'),
    french: t('tools.name-generator.cultures.french'),
    german: t('tools.name-generator.cultures.german'),
    nordic: t('tools.name-generator.cultures.nordic'),
    arabic: t('tools.name-generator.cultures.arabic'),
    indian: t('tools.name-generator.cultures.indian'),
    russian: t('tools.name-generator.cultures.russian'),
    italian: t('tools.name-generator.cultures.italian'),
    greek: t('tools.name-generator.cultures.greek'),
    fantasy: t('tools.name-generator.cultures.fantasy'),
    scifi: t('tools.name-generator.cultures.scifi')
  }
})

// 计算属性：获取国际化后的风格选项
const styleOptions = computed(() => {
  return {
    classic: t('tools.name-generator.styles.classic'),
    modern: t('tools.name-generator.styles.modern'),
    unique: t('tools.name-generator.styles.unique'),
    popular: t('tools.name-generator.styles.popular'),
    traditional: t('tools.name-generator.styles.traditional'),
    literary: t('tools.name-generator.styles.literary'),
    historical: t('tools.name-generator.styles.historical')
  }
})

// 重置设置
function resetSettings() {
  quantity.value = 10
  nameType.value = 'fullName'
  gender.value = 'any'
  culture.value = 'any'
  style.value = 'classic'
  startsWith.value = ''
  endsWith.value = ''
  minLength.value = 3
  maxLength.value = 15
  includeMiddleName.value = false
  includeSurname.value = true
  generatedNames.value = []
}

// 复制单个名字
function copyName(name) {
  navigator.clipboard.writeText(name).then(() => {
    alert(t('tools.name-generator.copied'))
  })
}

// 复制所有名字
function copyAllNames() {
  const text = generatedNames.value.join('\n')
  navigator.clipboard.writeText(text).then(() => {
    alert(t('tools.name-generator.copied'))
  })
}

// 重新生成名字
function regenerateNames() {
  generateNames()
}

// 名字数据库
const nameData = {
  // 英文名
  english: {
    firstName: {
      male: ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua', 'Kenneth', 'Kevin', 'Brian', 'George', 'Timothy', 'Ronald', 'Edward', 'Jason', 'Jeffrey', 'Ryan', 'Jacob', 'Gary', 'Nicholas', 'Eric', 'Jonathan', 'Stephen', 'Larry', 'Justin', 'Scott', 'Brandon', 'Benjamin', 'Samuel', 'Gregory', 'Alexander', 'Patrick', 'Frank', 'Raymond', 'Jack', 'Dennis', 'Jerry', 'Tyler', 'Aaron', 'Jose', 'Adam', 'Nathan', 'Henry', 'Zachary', 'Douglas', 'Peter', 'Kyle', 'Noah', 'Ethan'],
      female: ['Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen', 'Lisa', 'Nancy', 'Betty', 'Sandra', 'Margaret', 'Ashley', 'Kimberly', 'Emily', 'Donna', 'Michelle', 'Carol', 'Amanda', 'Dorothy', 'Melissa', 'Deborah', 'Stephanie', 'Rebecca', 'Sharon', 'Laura', 'Cynthia', 'Kathleen', 'Amy', 'Angela', 'Shirley', 'Anna', 'Ruth', 'Brenda', 'Pamela', 'Nicole', 'Katherine', 'Samantha', 'Christine', 'Catherine', 'Virginia', 'Debra', 'Rachel', 'Janet', 'Emma', 'Carolyn', 'Maria', 'Heather', 'Diane', 'Julie', 'Joyce', 'Evelyn', 'Victoria', 'Kelly', 'Christina', 'Lauren', 'Joan', 'Olivia'],
      neutral: ['Taylor', 'Jordan', 'Riley', 'Casey', 'Jamie', 'Quinn', 'Avery', 'Dakota', 'Skyler', 'Kendall', 'Hayden', 'Alexis', 'Morgan', 'Reese', 'Charlie', 'Blake', 'Finley', 'Sidney', 'Rowan', 'River', 'Emerson', 'Phoenix', 'Kai', 'Sage', 'Dallas', 'Elliot', 'Harper', 'Remy', 'Drew', 'Devon', 'Jaden', 'Arin', 'Angel', 'Sam', 'Jackie', 'Skylar', 'Alex', 'Cameron', 'Frankie', 'Tatum', 'Corey', 'Marlo', 'Robin', 'Ryan', 'Parker', 'Jesse', 'Terry', 'Shannon', 'Marley', 'Justice']
    },
    lastName: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson', 'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White', 'Lopez', 'Lee', 'Gonzalez', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Perez', 'Hall', 'Young', 'Allen', 'Sanchez', 'Wright', 'King', 'Scott', 'Green', 'Baker', 'Adams', 'Nelson', 'Hill', 'Ramirez', 'Campbell', 'Mitchell', 'Roberts', 'Carter', 'Phillips', 'Evans', 'Turner', 'Torres', 'Parker', 'Collins', 'Edwards', 'Stewart', 'Flores', 'Morris', 'Nguyen', 'Murphy', 'Rivera', 'Cook', 'Rogers', 'Morgan', 'Peterson', 'Cooper', 'Reed', 'Bailey', 'Bell', 'Gomez', 'Kelly', 'Howard', 'Ward', 'Cox', 'Diaz', 'Richardson', 'Wood', 'Watson', 'Brooks', 'Bennett', 'Gray', 'James', 'Reyes', 'Cruz', 'Hughes', 'Price', 'Myers', 'Long', 'Foster', 'Sanders', 'Ross', 'Morales', 'Powell', 'Sullivan', 'Russell', 'Ortiz', 'Jenkins', 'Gutierrez', 'Perry', 'Butler', 'Barnes', 'Fisher'],
    middleName: ['Lee', 'Ann', 'Marie', 'Lynn', 'Jean', 'Mae', 'Rose', 'Elizabeth', 'Jo', 'Ray', 'Grace', 'Jane', 'Allen', 'Louise', 'Nicole', 'Michael', 'Joseph', 'Edward', 'Thomas', 'James', 'Claire', 'Leigh', 'Faith', 'Hope', 'Joy', 'May', 'Scott', 'Belle', 'Jay', 'Kay', 'Rae', 'Faye']
  },
  
  // 中文名
  chinese: {
    firstName: {
      male: ['伟', '强', '磊', '华', '建国', '建军', '建华', '文', '明', '涛', '杰', '鹏', '宇', '浩', '东', '鑫', '博', '天', '志强', '军', '雷', '超', '刚', '勇', '毅', '俊杰', '勇军', '鸿', '振华', '荣', '健', '育', '民', '永', '元', '晨', '辰', '龙', '宁', '耀', '亮', '永健', '昊', '坤', '哲', '云', '锋', '宏', '卫国', '嘉', '志', '广'],
      female: ['芳', '娜', '敏', '静', '秀英', '丽', '婷', '洁', '燕', '娟', '艳', '丹', '萍', '红', '玲', '芬', '华', '莹', '梅', '琴', '雪', '倩', '云', '桂英', '玉', '慧', '艺', '霞', '兰', '莉', '璐', '娅', '琪', '瑶', '梦', '婉', '媛', '怡', '月', '雅', '岚', '欣', '妍', '瑾', '琳', '佳', '茹', '涵', '秋', '珊'],
      neutral: ['晓', '辰', '宁', '昊', '瑞', '轩', '雨', '泽', '昱', '辰', '瑾', '奕', '晗', '煜', '涵', '晨', '曦', '瑶', '睿', '宸', '萱', '珏', '玄', '柠', '诺', '尔', '悠', '熙', '宜', '清', '亦']
    },
    lastName: ['李', '王', '张', '刘', '陈', '杨', '赵', '黄', '周', '吴', '徐', '孙', '朱', '马', '胡', '郭', '林', '何', '高', '梁', '郑', '罗', '宋', '谢', '唐', '韩', '曹', '许', '邓', '萧', '冯', '曾', '程', '蔡', '彭', '潘', '袁', '于', '董', '余', '苏', '叶', '吕', '魏', '蒋', '田', '任', '姚', '沈', '钟', '姜', '崔', '谭', '陆', '汪', '范', '金', '石', '廖', '贾', '夏', '韦', '付', '方', '邹', '熊', '孟', '秦', '白', '江', '闫', '邱'],
    middleName: []
  },
  
  // 日本名
  japanese: {
    firstName: {
      male: ['哲也', '健一', '直樹', '剛', '大輔', '誠', '拓也', '健太郎', '浩', '雄太', '隆', '康弘', '大介', '洋介', '亮', '英樹', '崇', '浩二', '亮太', '悟', '仁', '徹', '達也', '学', '淳', '賢一', '和也', '清', '智也', '昭夫', '隆雄', '真一', '幸治', '勉', '修', '竜太', '康', '幸男', '征二', '広', '和之', '智', '亨', '武', '寿', '洋平'],
      female: ['恵美', '久美子', '真由美', '絵美', '美香', '由美子', '陽子', '直美', '裕子', '明美', '優子', '和子', '純子', '佐知子', '理恵', '由美', '智子', '真美', '恵', '香織', '美穂', '真理子', '彩', '舞', '夏美', '悠子', '千尋', '麻衣', '千鶴', '千代', '香', '加奈子', '裕美', '彩子', '佳子', '綾香', '菜々子', '直子', '弥生', '早苗', '美紀'],
      neutral: ['明', '拓海', '遼', '蓮', '一', '翔', '陽', '太郎', '大和', '樹', '悠真', '悠', '優', '翼', '優斗', '海', '颯太', '翔太', '輝', '航', '奏', '匠', '春', '空', '咲']
    },
    lastName: ['佐藤', '鈴木', '高橋', '田中', '伊藤', '渡辺', '山本', '中村', '小林', '加藤', '吉田', '山田', '佐々木', '山口', '松本', '井上', '木村', '斎藤', '清水', '山崎', '森', '池田', '橋本', '阿部', '藤田', '岡田', '後藤', '近藤', '石川', '前田', '中川', '小川', '藤井', '福田', '三浦', '西村', '藤原', '太田', '松田', '原田', '岡本', '中島', '宮崎', '長谷川', '石井', '大野', '小島', '渡部', '高木', '安藤'],
    middleName: []
  },
  
  // 韩国名
  korean: {
    firstName: {
      male: ['지훈', '현우', '민준', '성민', '영호', '재현', '도현', '승우', '지민', '준호', '민수', '현준', '재영', '우진', '선우', '태양', '준영', '은호', '수현', '재원', '지우', '영민', '재호', '현석', '민우', '정우', '동현', '태호', '지원', '민호', '준혁', '성진', '영준', '지현', '승민', '동욱', '성훈', '주원', '성현', '민기', '도윤', '성준', '예준', '지후', '시우'],
      female: ['지영', '수진', '현주', '미영', '혜진', '은정', '지원', '유진', '민지', '서연', '지현', '수빈', '예은', '민주', '현정', '지혜', '은지', '예진', '소영', '지은', '수민', '지민', '서현', '은경', '가은', '수연', '지우', '소연', '예지', '민영', '유정', '지연', '수현', '보람', '은영', '유나', '민경', '소희', '수정', '지아', '혜원', '은주', '서영', '하은', '주희'],
      neutral: ['준', '민', '현', '지', '윤', '서', '하', '은', '유', '인', '주', '예', '강', '동', '우', '수', '태', '정', '희', '진', '재', '가', '성', '영', '선']
    },
    lastName: ['김', '이', '박', '최', '정', '강', '조', '윤', '장', '임', '한', '오', '서', '신', '권', '황', '안', '송', '류', '전', '홍', '고', '문', '양', '손', '배', '백', '허', '유', '남', '심', '노', '하', '곽', '성', '차', '주', '우', '구', '민', '나', '라', '지', '채', '원', '천', '방', '공', '현', '함', '변'],
    middleName: []
  },
  
  // 印度名
  indian: {
    firstName: {
      male: ['Raj', 'Rahul', 'Amit', 'Vikram', 'Vijay', 'Sunil', 'Rohit', 'Ravi', 'Sanjay', 'Ajay', 'Rajiv', 'Deepak', 'Anil', 'Rajesh', 'Manoj', 'Shashi', 'Arun', 'Ramesh', 'Vivek', 'Dinesh', 'Krishna', 'Prakash', 'Arjun', 'Ashok', 'Vinod', 'Anand', 'Mohan', 'Rakesh', 'Suresh', 'Gopal'],
      female: ['Priya', 'Anjali', 'Pooja', 'Neha', 'Meera', 'Kavita', 'Sunita', 'Kiran', 'Asha', 'Lata', 'Geeta', 'Anita', 'Radha', 'Sita', 'Lakshmi', 'Sarika', 'Deepika', 'Jyoti', 'Rekha', 'Shanti', 'Savita', 'Poonam', 'Usha', 'Swati', 'Manisha', 'Nirmala', 'Sheela', 'Suman', 'Vimala', 'Bharti'],
      neutral: ['Kiran', 'Akshay', 'Ananya', 'Dev', 'Rohan', 'Nisha', 'Jay', 'Anand', 'Divya', 'Surya', 'Jyoti', 'Indra', 'Arya', 'Shashi', 'Chandra', 'Mani']
    },
    lastName: ['Sharma', 'Patel', 'Singh', 'Kumar', 'Gupta', 'Shah', 'Verma', 'Rao', 'Mishra', 'Bhat', 'Das', 'Sharma', 'Desai', 'Choudhury', 'Joshi', 'Mehta', 'Chopra', 'Banerjee', 'Agarwal', 'Trivedi', 'Reddy', 'Saxena', 'Iyer', 'Patil', 'Chandra', 'Kapoor', 'Nair', 'Murthy', 'Lal', 'Bhatt', 'Rajan', 'Khanna', 'Arora', 'Menon', 'Malhotra'],
    middleName: ['Kumar', 'Prasad', 'Chandra', 'Devi', 'Lal', 'Raj', 'Nath', 'Bhai', 'Kant', 'Priya']
  },
  
  // 奇幻名字
  fantasy: {
    firstName: {
      male: ['Aric', 'Brom', 'Caldor', 'Dorn', 'Evendur', 'Firell', 'Garreth', 'Havilar', 'Jareth', 'Korum', 'Lucan', 'Mavrek', 'Naeris', 'Orin', 'Paelias', 'Quarion', 'Riardon', 'Soveliss', 'Tharivol', 'Umbero', 'Varis', 'Wulgar', 'Xavros', 'Yorin', 'Zandros'],
      female: ['Althaea', 'Brielle', 'Candra', 'Drusilia', 'Elora', 'Faeriel', 'Gaelira', 'Hycorax', 'Iseult', 'Jessalyn', 'Keryth', 'Lilith', 'Moiraine', 'Nymeria', 'Olara', 'Phaedra', 'Quara', 'Ravenna', 'Seraphina', 'Thalia', 'Umara', 'Vanora', 'Wynter', 'Xantara', 'Yvaine', 'Zenobia'],
      neutral: ['Ash', 'Bryn', 'Cael', 'Dael', 'Eirian', 'Faelan', 'Glyn', 'Hael', 'Idris', 'Jael', 'Kai', 'Llyn', 'Maelis', 'Nyx', 'Oryn', 'Pax', 'Quinn', 'Ryn', 'Syl', 'Thorn', 'Uri', 'Vale', 'Wynn', 'Xan', 'Yael', 'Zephyr']
    },
    lastName: ['Blackwood', 'Crowshade', 'Dawnbringer', 'Emberheart', 'Frostfell', 'Glimmerdawn', 'Hollowbrook', 'Ironshield', 'Jorasco', 'Kessell', 'Lightbringer', 'Moonshadow', 'Nightwalker', 'Oakenheel', 'Phoenixdown', 'Quickarrow', 'Ravencrest', 'Silverblade', 'Thorngage', 'Umbermoon', 'Voidward', 'Windrider', 'Xilthorn', 'Yewhelm', 'Zenithstar'],
    middleName: ['of', 'the', 'from', 'son of', 'daughter of', 'born of']
  },
  
  // 科幻名字
  scifi: {
    firstName: {
      male: ['Ajax', 'Blaize', 'Crius', 'Dex', 'Epsilon', 'Fuse', 'Galen', 'Helix', 'Ion', 'Jet', 'Knox', 'Lumen', 'Maddox', 'Neo', 'Orion', 'Proton', 'Quantum', 'Rexus', 'Sigma', 'Titus', 'Ultron', 'Vex', 'Warp', 'Xenon', 'Yukon', 'Zenith'],
      female: ['Astra', 'Borealis', 'Cassini', 'Delta', 'Eclipse', 'Flux', 'Genesis', 'Halley', 'Isis', 'Juno', 'Karina', 'Luna', 'Minerva', 'Nova', 'Omega', 'Proxima', 'Quasar', 'Rhea', 'Stella', 'Terra', 'Ursa', 'Vega', 'Willow', 'Xena', 'Yuri', 'Zara'],
      neutral: ['Aeon', 'Binary', 'Cosmo', 'Data', 'Echo', 'Fusion', 'Gravity', 'Halo', 'Isotope', 'Jericho', 'Kelvin', 'Light', 'Matrix', 'Nebula', 'Orbit', 'Pulse', 'Quark', 'Rogue', 'Sol', 'Trax', 'Umbra', 'Void', 'Wave', 'Xeno', 'Yaml', 'Zero']
    },
    lastName: ['Andromeda', 'Blackhole', 'Centauri', 'Darkstar', 'Equinox', 'Fission', 'Galactic', 'Helios', 'Infinitum', 'Jupiter', 'Kuiper', 'Lightspeed', 'Mechano', 'Neutron', 'Orbitron', 'Particle', 'Quasar', 'Replicant', 'Stardust', 'Tesseract', 'Ultraviolet', 'Voyager', 'Wormhole', 'XJ-12', 'Y-Axis', 'Z-Matter'],
    middleName: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  }
}

// 随机选择数组中的项目
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// 生成随机名字
function generateRandomName() {
  let selectedCulture = culture.value
  
  // 如果是随机文化背景，随机选择一个文化
  if (selectedCulture === 'any') {
    const cultures = Object.keys(nameData)
    selectedCulture = randomChoice(cultures)
  }
  
  // 如果数据库中没有此文化，使用英文
  if (!nameData[selectedCulture]) {
    selectedCulture = 'english'
  }
  
  // 选择性别
  let selectedGender = gender.value
  if (selectedGender === 'any') {
    selectedGender = randomChoice(['male', 'female', 'neutral'])
  }
  
  // 如果首选性别的名字不存在，使用其他性别
  const cultureData = nameData[selectedCulture]
  if (!cultureData.firstName[selectedGender] || cultureData.firstName[selectedGender].length === 0) {
    const availableGenders = Object.keys(cultureData.firstName).filter(g => 
      cultureData.firstName[g] && cultureData.firstName[g].length > 0
    )
    if (availableGenders.length > 0) {
      selectedGender = randomChoice(availableGenders)
    } else {
      // 如果没有任何名字，返回错误
      return '(未找到名字数据)'
    }
  }
  
  let result = ''
  
  // 根据名字类型生成
  switch (nameType.value) {
    case 'firstName':
      // 只生成名字
      result = generateFirstName(selectedCulture, selectedGender)
      break
    case 'lastName':
      // 只生成姓氏
      result = generateLastName(selectedCulture)
      break
    case 'fullName':
      // 生成完整名字 (包括姓和名)
      if (includeSurname.value) {
        // 不同文化可能有不同的姓名顺序
        if (['chinese', 'japanese', 'korean'].includes(selectedCulture)) {
          result = `${generateLastName(selectedCulture)}${generateFirstName(selectedCulture, selectedGender)}`
        } else {
          result = `${generateFirstName(selectedCulture, selectedGender)} ${includeMiddleName.value && cultureData.middleName.length > 0 ? generateMiddleName(selectedCulture) + ' ' : ''}${generateLastName(selectedCulture)}`
        }
      } else {
        result = generateFirstName(selectedCulture, selectedGender)
      }
      break
    case 'nickname':
      // 生成昵称 (通常是名字的变形或缩写)
      result = generateNickname(selectedCulture, selectedGender)
      break
    case 'fantasy':
      // 生成奇幻风格名字
      result = generateFantasyName(selectedGender)
      break
    case 'scifi':
      // 生成科幻风格名字
      result = generateScifiName(selectedGender)
      break
    default:
      result = generateFullName(selectedCulture, selectedGender)
  }
  
  // 应用名字长度过滤器
  if (result.length < minLength.value || result.length > maxLength.value) {
    // 尝试重新生成，最多5次
    for (let i = 0; i < 5; i++) {
      const newResult = generateRandomName()
      if (newResult.length >= minLength.value && newResult.length <= maxLength.value) {
        result = newResult
        break
      }
    }
  }
  
  // 应用首字母和尾字母过滤器
  if (startsWith.value && !result.toLowerCase().startsWith(startsWith.value.toLowerCase())) {
    // 不符合首字母要求，可能需要特殊处理或返回说明
    return result + `*` // 添加标记表示不完全符合条件
  }
  
  if (endsWith.value && !result.toLowerCase().endsWith(endsWith.value.toLowerCase())) {
    // 不符合尾字母要求
    return result + `*` // 添加标记表示不完全符合条件
  }
  
  return result
}

// 生成名字
function generateFirstName(culture, gender) {
  try {
    return randomChoice(nameData[culture].firstName[gender])
  } catch (e) {
    return randomChoice(nameData.english.firstName.neutral)
  }
}

// 生成姓氏
function generateLastName(culture) {
  try {
    return randomChoice(nameData[culture].lastName)
  } catch (e) {
    return randomChoice(nameData.english.lastName)
  }
}

// 生成中间名
function generateMiddleName(culture) {
  try {
    if (nameData[culture].middleName && nameData[culture].middleName.length > 0) {
      return randomChoice(nameData[culture].middleName)
    }
    return randomChoice(nameData.english.middleName)
  } catch (e) {
    return randomChoice(nameData.english.middleName)
  }
}

// 生成昵称
function generateNickname(culture, gender) {
  // 昵称通常是名字的某种变形
  const firstName = generateFirstName(culture, gender)
  
  // 简单处理：如果名字长度 > 3，随机截取部分作为昵称
  if (firstName.length > 3) {
    // 50%几率返回前半部分，50%几率返回特殊形式
    if (Math.random() > 0.5) {
      return firstName.substring(0, Math.ceil(firstName.length / 2))
    } else {
      // 添加常见昵称后缀
      const suffixes = ['y', 'ie', 'ey', 'ers', 'o', 'ster', 'z', 's']
      const prefix = firstName.substring(0, Math.min(3, firstName.length))
      return prefix + randomChoice(suffixes)
    }
  }
  return firstName
}

// 生成奇幻风格名字
function generateFantasyName(gender) {
  const firstName = generateFirstName('fantasy', gender)
  const lastName = generateLastName('fantasy')
  
  // 有时添加一些特殊中间词
  if (Math.random() > 0.7 && nameData.fantasy.middleName.length > 0) {
    const middleName = generateMiddleName('fantasy')
    return `${firstName} ${middleName} ${lastName}`
  }
  
  return `${firstName} ${lastName}`
}

// 生成科幻风格名字
function generateScifiName(gender) {
  const firstName = generateFirstName('scifi', gender)
  
  // 科幻名字有时只有代号
  if (Math.random() > 0.3) {
    const lastName = generateLastName('scifi')
    
    // 有时添加数字代码
    if (Math.random() > 0.5) {
      const middleName = generateMiddleName('scifi')
      return `${firstName} ${middleName}-${lastName}`
    }
    
    return `${firstName} ${lastName}`
  }
  
  // 只返回单个名字加数字
  return `${firstName}-${Math.floor(Math.random() * 999)}`
}

// 生成完整名字
function generateFullName(culture, gender) {
  if (['chinese', 'japanese', 'korean'].includes(culture)) {
    return `${generateLastName(culture)}${generateFirstName(culture, gender)}`
  } else {
    return `${generateFirstName(culture, gender)} ${includeMiddleName.value ? generateMiddleName(culture) + ' ' : ''}${generateLastName(culture)}`
  }
}

// 主生成函数
function generateNames() {
  generatedNames.value = []
  
  // 生成指定数量的名字
  for (let i = 0; i < quantity.value; i++) {
    generatedNames.value.push(generateRandomName())
  }
}

// 初始化页面时自动生成一些示例名字
generateNames()
</script>

<style scoped>

@media (min-width: 1280px) {
  .name-generator {
    max-width: 1280px;
    margin: 0 auto;
  }
}

/* 自定义范围滑块样式 */
input[type=range] {
  -webkit-appearance: none;
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  background: #4f46e5;
  border-radius: 50%;
  cursor: pointer;
}

.dark input[type=range] {
  background: #374151;
}

.dark select, .dark input {
  color: #fff;
}
</style>