<template>
  <div class="holiday-calendar w-full max-w-none">
    <!-- 工具控制区域 -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- 年份选择 -->
        <div>
          <label class="block mb-2 font-medium">{{ t('tools.holiday-calendar.year') }}</label>
          <select 
            v-model="selectedYear" 
            class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          >
            <option v-for="year in availableYears" :key="year" :value="year">{{ year }}</option>
          </select>
        </div>
        
        <!-- 月份选择 -->
        <div>
          <label class="block mb-2 font-medium">{{ t('tools.holiday-calendar.month') }}</label>
          <select 
            v-model="selectedMonth" 
            class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          >
            <option v-for="monthNum in 12" :key="monthNum" :value="monthNum">
              {{ t(`tools.holiday-calendar.months.${monthNum}`) }}
            </option>
          </select>
        </div>
        
        <!-- 国家选择 -->
        <div>
          <label class="block mb-2 font-medium">{{ t('tools.holiday-calendar.country') }}</label>
          <select 
            v-model="selectedCountry" 
            class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          >
            <option v-for="countryCode in countryList" :key="countryCode" :value="countryCode">
              {{ t(`tools.holiday-calendar.countries.${countryCode}`) }}
            </option>
          </select>
        </div>
        
        <!-- 假日类型选择 -->
        <div>
          <label class="block mb-2 font-medium">{{ t('tools.holiday-calendar.holidayType') }}</label>
          <select 
            v-model="selectedHolidayType" 
            class="block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          >
            <option v-for="typeCode in holidayTypeList" :key="typeCode" :value="typeCode">
              {{ t(`tools.holiday-calendar.holidayTypes.${typeCode}`) }}
            </option>
          </select>
        </div>
      </div>
      
      <!-- 操作按钮 -->
      <div class="flex flex-wrap gap-3 mt-4">
        <button 
          @click="searchHolidays" 
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          {{ t('tools.holiday-calendar.search') }}
        </button>
        <button 
          @click="resetFilter" 
          class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {{ t('tools.holiday-calendar.reset') }}
        </button>
        <button 
          @click="goToToday" 
          class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          {{ t('tools.holiday-calendar.today') }}
        </button>
      </div>
    </div>
    
    <!-- 日历显示区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- 左侧日历 -->
      <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div class="mb-4 flex justify-between items-center">
          <h2 class="text-xl font-bold">{{ t(`tools.holiday-calendar.months.${selectedMonth}`) }} {{ selectedYear }}</h2>
          <div class="flex space-x-2">
            <button 
              @click="previousMonth" 
              class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              @click="nextMonth" 
              class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- 日历表格 -->
        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead>
              <tr>
                <th v-for="day in 7" :key="day - 1" class="text-center p-2">
                  {{ t(`tools.holiday-calendar.weekdays.${day % 7}`) }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="week in calendarWeeks" :key="week">
                <td v-for="day in 7" :key="day" class="border p-1 h-24 sm:h-32">
                  <!-- 日历单元格内容 -->
                  <div 
                    class="h-full min-w-[80px] p-1 cursor-pointer"
                    @click="selectDate(getDateForCell(week, day))"
                  >
                    <!-- 日期数字 -->
                    <div class="flex justify-between items-center mb-1">
                      <span 
                        class="inline-block h-7 w-7 leading-7 text-center rounded-full"
                        :class="{
                          'text-gray-400 dark:text-gray-500': !isCurrentMonth(week, day),
                          'bg-blue-500 text-white': isToday(getDateForCell(week, day)),
                          'bg-indigo-100 dark:bg-indigo-900': selectedDate === getDateForCell(week, day) && !isToday(getDateForCell(week, day))
                        }"
                      >
                        {{ getDateForCell(week, day) }}
                      </span>
                      
                      <!-- 节假日指示点 -->
                      <span 
                        v-if="hasHoliday(getDateForCell(week, day))" 
                        class="w-2 h-2 rounded-full bg-red-500"
                      ></span>
                    </div>
                    
                    <!-- 节假日名称 -->
                    <div class="overflow-y-auto max-h-16">
                      <p 
                        v-for="(holiday, index) in getHolidaysForDay(getDateForCell(week, day))" 
                        :key="index" 
                        class="text-xs truncate" 
                        :class="getHolidayTypeClass(holiday.type)"
                      >
                        {{ holiday.name }}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- 右侧：节假日详情 - 修改为显示全年节假日 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-4">{{ t('tools.holiday-calendar.holidayDetails') }}</h2>
        
        <!-- 显示全年节假日 -->
        <div v-if="yearlyHolidays.length > 0" class="space-y-4">
          <div v-for="(holidayGroup, monthIndex) in groupedYearlyHolidays" :key="monthIndex">
            <h3 class="text-lg font-semibold mb-2">
              {{ t(`tools.holiday-calendar.months.${monthIndex}`) }}
            </h3>
            
            <div v-for="holiday in holidayGroup" :key="holiday.date" 
                class="mb-3 p-3 rounded-md" :class="getHolidayTypeClass(holiday.type)">
              
              <div class="flex justify-between">
                <h4 class="font-bold">{{ holiday.name }}</h4>
                <span class="text-sm">{{ formatDateDay(holiday.date) }}</span>
              </div>
              
              <div class="text-sm mt-1">
                <span class="inline-block px-2 py-0.5 rounded-full text-xs mb-1"
                      :class="getHolidayTypeBadgeClass(holiday.type)">
                  {{ getHolidayTypeName(holiday.type) }}
                </span>
                <p class="mt-1">{{ holiday.description }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 无节假日信息 -->
        <div v-else class="text-center text-gray-500 dark:text-gray-400 py-8">
          {{ t('tools.holiday-calendar.noHolidays') }}
        </div>
      </div>
    </div>
    
    <!-- 工具介绍 -->
    <div class="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-bold mb-4">{{ t('tools.holiday-calendar.aboutTitle') }}</h2>
      <p class="mb-6">{{ t('tools.holiday-calendar.aboutDescription') }}</p>
      
      <!-- 如何使用 -->
      <div class="mb-6">
        <h3 class="text-xl font-bold mb-3">{{ t('tools.holiday-calendar.howToUseTitle') }}</h3>
        <ul class="space-y-2 list-disc list-inside">
          <li>{{ t('tools.holiday-calendar.howToUseStep1') }}</li>
          <li>{{ t('tools.holiday-calendar.howToUseStep2') }}</li>
          <li>{{ t('tools.holiday-calendar.howToUseStep3') }}</li>
          <li>{{ t('tools.holiday-calendar.howToUseStep4') }}</li>
        </ul>
      </div>
      
      <!-- 功能特点 -->
      <div class="mb-6">
        <h3 class="text-xl font-bold mb-3">{{ t('tools.holiday-calendar.featuresTitle') }}</h3>
        <ul class="space-y-2 list-disc list-inside">
          <li>{{ t('tools.holiday-calendar.feature1') }}</li>
          <li>{{ t('tools.holiday-calendar.feature2') }}</li>
          <li>{{ t('tools.holiday-calendar.feature3') }}</li>
          <li>{{ t('tools.holiday-calendar.feature4') }}</li>
          <li>{{ t('tools.holiday-calendar.feature5') }}</li>
        </ul>
      </div>
      
      <!-- 数据来源 -->
      <div class="mb-6">
        <h3 class="text-xl font-bold mb-3">{{ t('tools.holiday-calendar.dataSourceTitle') }}</h3>
        <p>{{ t('tools.holiday-calendar.dataSourceDescription') }}</p>
      </div>
      
      <!-- 小贴士 -->
      <div>
        <h3 class="text-xl font-bold mb-3">{{ t('tools.holiday-calendar.tipsTitle') }}</h3>
        <ul class="space-y-2 list-disc list-inside">
          <li>{{ t('tools.holiday-calendar.tip1') }}</li>
          <li>{{ t('tools.holiday-calendar.tip2') }}</li>
          <li>{{ t('tools.holiday-calendar.tip3') }}</li>
          <li>{{ t('tools.holiday-calendar.tip4') }}</li>
          <li>{{ t('tools.holiday-calendar.tip5') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

// 当前日期
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1; // JavaScript的月份是0-11
const currentDay = today.getDate();

// 可选年份范围
const availableYears = computed(() => {
  return [currentYear - 2, currentYear - 1, currentYear, currentYear + 1, currentYear + 2];
});

// 用户选择的日期
const selectedYear = ref(currentYear);
const selectedMonth = ref(currentMonth);
const selectedDate = ref(currentDay);
const selectedCountry = ref('CN');
const selectedHolidayType = ref('all');

// 国家列表和假日类型列表
const countryList = ['CN', 'US', 'UK', 'JP', 'KR', 'SG', 'DE', 'FR', 'IT', 'CA', 'AU', 'NZ', 'RU', 'IN', 'BR'];
const holidayTypeList = ['all', 'public', 'observance', 'optional', 'traditional'];

// 全部节假日和当前可见的节假日
const allHolidays = ref([]);
const visibleHolidays = computed(() => {
  if (selectedHolidayType.value === 'all') {
    return allHolidays.value.filter(holiday => {
      const holidayMonth = parseInt(holiday.date.split('-')[1]);
      return holidayMonth === selectedMonth.value;
    });
  } else {
    return allHolidays.value.filter(holiday => {
      const holidayMonth = parseInt(holiday.date.split('-')[1]);
      return holidayMonth === selectedMonth.value && holiday.type === selectedHolidayType.value;
    });
  }
});

// 全年节假日（不过滤月份）
const yearlyHolidays = computed(() => {
  if (selectedHolidayType.value === 'all') {
    return allHolidays.value;
  } else {
    return allHolidays.value.filter(holiday => holiday.type === selectedHolidayType.value);
  }
});

// 按月份分组的全年节假日
const groupedYearlyHolidays = computed(() => {
  const grouped = {};
  
  // 遍历所有符合条件的节假日
  yearlyHolidays.value.forEach(holiday => {
    const month = parseInt(holiday.date.split('-')[1]);
    
    // 如果该月份还没有数组，则创建一个
    if (!grouped[month]) {
      grouped[month] = [];
    }
    
    // 将节假日添加到对应月份的数组中
    grouped[month].push(holiday);
  });
  
  // 对每个月份内的节假日按日期排序
  for (const month in grouped) {
    grouped[month].sort((a, b) => {
      const dayA = parseInt(a.date.split('-')[2]);
      const dayB = parseInt(b.date.split('-')[2]);
      return dayA - dayB;
    });
  }
  
  return grouped;
});

// 日历周数
const calendarWeeks = computed(() => {
  return [0, 1, 2, 3, 4, 5]; // 显示6周
});

// 组件挂载时，加载节假日数据
onMounted(() => {
  searchHolidays();
});

// 搜索节假日
function searchHolidays() {
  // 模拟从API获取节假日数据
  allHolidays.value = getMockHolidays(selectedYear.value, selectedCountry.value);
}

// 获取指定单元格的日期
function getDateForCell(week, weekday) {
  const firstDayOfMonth = new Date(selectedYear.value, selectedMonth.value - 1, 1);
  const firstDayWeekday = firstDayOfMonth.getDay(); // 0 = 周日, 1 = 周一, ...
  
  const dayOffset = (week * 7) + weekday - firstDayWeekday;
  const targetDate = new Date(firstDayOfMonth);
  targetDate.setDate(targetDate.getDate() + dayOffset);
  
  return targetDate.getDate();
}

// 检查指定日期是否属于当前月
function isCurrentMonth(week, weekday) {
  const firstDayOfMonth = new Date(selectedYear.value, selectedMonth.value - 1, 1);
  const lastDayOfMonth = new Date(selectedYear.value, selectedMonth.value, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  
  const firstDayWeekday = firstDayOfMonth.getDay();
  const dayOffset = (week * 7) + weekday - firstDayWeekday;
  
  return dayOffset >= 0 && dayOffset < daysInMonth;
}

// 模拟获取节假日数据
function getMockHolidays(year, country) {
  // 中国节假日示例数据（已提供）
  const chinaHolidays = [
    { name: '元旦', date: `${year}-01-01`, type: 'public', description: '中华人民共和国法定节日，庆祝新年的开始。' },
    { name: '春节', date: `${year}-02-10`, type: 'public', description: '中国最重要的传统节日，农历新年。' },
    { name: '清明节', date: `${year}-04-05`, type: 'public', description: '传统节日，扫墓祭祖的日子。' },
    { name: '劳动节', date: `${year}-05-01`, type: 'public', description: '国际劳动节，纪念劳动者的贡献。' },
    { name: '端午节', date: `${year}-06-10`, type: 'public', description: '传统节日，纪念屈原，吃粽子，赛龙舟。' },
    { name: '中秋节', date: `${year}-09-15`, type: 'public', description: '传统节日，家人团聚，赏月，吃月饼。' },
    { name: '国庆节', date: `${year}-10-01`, type: 'public', description: '庆祝中华人民共和国成立的纪念日。' },
    { name: '妇女节', date: `${year}-03-08`, type: 'observance', description: '国际妇女节，致敬女性贡献。' },
    { name: '植树节', date: `${year}-03-12`, type: 'observance', description: '提倡全民义务植树，保护环境。' }
  ];

  // 美国节假日示例数据（已提供）
  const usaHolidays = [
    { name: "New Year's Day", date: `${year}-01-01`, type: 'public', description: 'Federal holiday celebrating the beginning of the new year.' },
    { name: "Martin Luther King Jr. Day", date: `${year}-01-15`, type: 'public', description: 'Honors Martin Luther King Jr., who fought for civil rights.' },
    { name: "Valentine's Day", date: `${year}-02-14`, type: 'observance', description: 'A celebration of love and affection.' },
    { name: "Presidents' Day", date: `${year}-02-19`, type: 'public', description: 'Honors presidents of the United States, especially Washington and Lincoln.' },
    { name: "Memorial Day", date: `${year}-05-29`, type: 'public', description: 'Honors those who died while serving in the U.S. military.' },
    { name: "Independence Day", date: `${year}-07-04`, type: 'public', description: 'Celebrates the Declaration of Independence from Great Britain in 1776.' },
    { name: "Labor Day", date: `${year}-09-04`, type: 'public', description: 'Honors the American labor movement.' },
    { name: "Veterans Day", date: `${year}-11-11`, type: 'public', description: 'Honors military veterans who served in the United States Armed Forces.' },
    { name: "Thanksgiving Day", date: `${year}-11-23`, type: 'public', description: 'A day of giving thanks for the blessing of the harvest.' },
    { name: "Christmas Day", date: `${year}-12-25`, type: 'public', description: 'Christian festival celebrating the birth of Jesus Christ.' }
  ];

  // 英国节假日数据
  const ukHolidays = [
    { name: "New Year's Day", date: `${year}-01-01`, type: 'public', description: 'Start of the new year.' },
    { name: "Good Friday", date: `${year}-04-07`, type: 'public', description: 'Friday before Easter Sunday.' },
    { name: "Easter Monday", date: `${year}-04-10`, type: 'public', description: 'Monday after Easter Sunday.' },
    { name: "Early May Bank Holiday", date: `${year}-05-01`, type: 'public', description: 'Spring bank holiday.' },
    { name: "Spring Bank Holiday", date: `${year}-05-29`, type: 'public', description: 'Late May bank holiday.' },
    { name: "Summer Bank Holiday", date: `${year}-08-28`, type: 'public', description: 'End of summer bank holiday.' },
    { name: "Christmas Day", date: `${year}-12-25`, type: 'public', description: 'Christian festival celebrating the birth of Jesus Christ.' },
    { name: "Boxing Day", date: `${year}-12-26`, type: 'public', description: 'Day after Christmas Day.' }
  ];

  // 日本节假日数据
  const japanHolidays = [
    { name: "元日", date: `${year}-01-01`, type: 'public', description: 'New Year’s Day.' },
    { name: "成人の日", date: `${year}-01-08`, type: 'public', description: 'Coming of Age Day.' },
    { name: "建国記念の日", date: `${year}-02-11`, type: 'public', description: 'National Foundation Day.' },
    { name: "春分の日", date: `${year}-03-20`, type: 'public', description: 'Vernal Equinox Day.' },
    { name: "昭和の日", date: `${year}-04-29`, type: 'public', description: 'Showa Day.' },
    { name: "憲法記念日", date: `${year}-05-03`, type: 'public', description: 'Constitution Memorial Day.' },
    { name: "みどりの日", date: `${year}-05-04`, type: 'public', description: 'Greenery Day.' },
    { name: "こどもの日", date: `${year}-05-05`, type: 'public', description: 'Children’s Day.' },
    { name: "海の日", date: `${year}-07-17`, type: 'public', description: 'Marine Day.' },
    { name: "山の日", date: `${year}-08-11`, type: 'public', description: 'Mountain Day.' },
    { name: "敬老の日", date: `${year}-09-18`, type: 'public', description: 'Respect for the Aged Day.' },
    { name: "秋分の日", date: `${year}-09-23`, type: 'public', description: 'Autumnal Equinox Day.' },
    { name: "文化の日", date: `${year}-11-03`, type: 'public', description: 'Culture Day.' },
    { name: "勤労感謝の日", date: `${year}-11-23`, type: 'public', description: 'Labor Thanksgiving Day.' },
    { name: "天皇誕生日", date: `${year}-12-23`, type: 'public', description: 'Emperor’s Birthday.' }
  ];

  // 韩国节假日数据
  const koreaHolidays = [
    { name: "신정", date: `${year}-01-01`, type: 'public', description: 'New Year’s Day.' },
    { name: "설날", date: `${year}-02-10`, type: 'public', description: 'Lunar New Year.' },
    { name: "삼일절", date: `${year}-03-01`, type: 'public', description: 'Independence Movement Day.' },
    { name: "어린이날", date: `${year}-05-05`, type: 'public', description: 'Children’s Day.' },
    { name: "현충일", date: `${year}-06-06`, type: 'public', description: 'Memorial Day.' },
    { name: "광복절", date: `${year}-08-15`, type: 'public', description: 'Liberation Day.' },
    { name: "추석", date: `${year}-09-29`, type: 'public', description: 'Chuseok (Korean Thanksgiving).' },
    { name: "개천절", date: `${year}-10-03`, type: 'public', description: 'National Foundation Day.' },
    { name: "한글날", date: `${year}-10-09`, type: 'public', description: 'Hangul Day.' },
    { name: "크리스마스", date: `${year}-12-25`, type: 'public', description: 'Christmas Day.' }
  ];

  // 新加坡节假日数据
  const singaporeHolidays = [
    { name: "New Year's Day", date: `${year}-01-01`, type: 'public', description: 'Start of the new year.' },
    { name: "Chinese New Year", date: `${year}-02-10`, type: 'public', description: 'Lunar New Year.' },
    { name: "Good Friday", date: `${year}-04-07`, type: 'public', description: 'Friday before Easter Sunday.' },
    { name: "Labour Day", date: `${year}-05-01`, type: 'public', description: 'International Workers’ Day.' },
    { name: "Vesak Day", date: `${year}-05-27`, type: 'public', description: 'Buddha’s Birthday.' },
    { name: "Hari Raya Puasa", date: `${year}-06-29`, type: 'public', description: 'End of Ramadan.' },
    { name: "National Day", date: `${year}-08-09`, type: 'public', description: 'Singapore’s Independence Day.' },
    { name: "Hari Raya Haji", date: `${year}-08-31`, type: 'public', description: 'Festival of Sacrifice.' },
    { name: "Deepavali", date: `${year}-11-12`, type: 'public', description: 'Festival of Lights.' },
    { name: "Christmas Day", date: `${year}-12-25`, type: 'public', description: 'Christian festival celebrating the birth of Jesus Christ.' }
  ];

  // 德国节假日数据
  const germanyHolidays = [
    { name: "Neujahr", date: `${year}-01-01`, type: 'public', description: 'New Year’s Day.' },
    { name: "Karfreitag", date: `${year}-04-07`, type: 'public', description: 'Good Friday.' },
    { name: "Ostermontag", date: `${year}-04-10`, type: 'public', description: 'Easter Monday.' },
    { name: "Tag der Arbeit", date: `${year}-05-01`, type: 'public', description: 'Labor Day.' },
    { name: "Christi Himmelfahrt", date: `${year}-05-18`, type: 'public', description: 'Ascension Day.' },
    { name: "Pfingstmontag", date: `${year}-05-29`, type: 'public', description: 'Whit Monday.' },
    { name: "Deutsche Einheit", date: `${year}-10-03`, type: 'public', description: 'German Unity Day.' },
    { name: "Weihnachtstag", date: `${year}-12-25`, type: 'public', description: 'Christmas Day.' },
    { name: "Zweiter Weihnachtsfeiertag", date: `${year}-12-26`, type: 'public', description: 'Second Day of Christmas.' }
  ];

  // 法国节假日数据
  const franceHolidays = [
    { name: "Jour de l'an", date: `${year}-01-01`, type: 'public', description: 'New Year’s Day.' },
    { name: "Lundi de Pâques", date: `${year}-04-10`, type: 'public', description: 'Easter Monday.' },
    { name: "Fête du Travail", date: `${year}-05-01`, type: 'public', description: 'Labor Day.' },
    { name: "Victoire 1945", date: `${year}-05-08`, type: 'public', description: 'Victory in Europe Day.' },
    { name: "Ascension", date: `${year}-05-18`, type: 'public', description: 'Ascension Day.' },
    { name: "Lundi de Pentecôte", date: `${year}-05-29`, type: 'public', description: 'Whit Monday.' },
    { name: "Fête Nationale", date: `${year}-07-14`, type: 'public', description: 'Bastille Day.' },
    { name: "Assomption", date: `${year}-08-15`, type: 'public', description: 'Assumption of Mary.' },
    { name: "Toussaint", date: `${year}-11-01`, type: 'public', description: 'All Saints’ Day.' },
    { name: "Armistice 1918", date: `${year}-11-11`, type: 'public', description: 'Armistice Day.' },
    { name: "Noël", date: `${year}-12-25`, type: 'public', description: 'Christmas Day.' }
  ];

  // 意大利节假日数据
  const italyHolidays = [
    { name: "Capodanno", date: `${year}-01-01`, type: 'public', description: 'New Year’s Day.' },
    { name: "Epifania", date: `${year}-01-06`, type: 'public', description: 'Epiphany.' },
    { name: "Pasqua", date: `${year}-04-09`, type: 'public', description: 'Easter Sunday.' },
    { name: "Lunedì dell'Angelo", date: `${year}-04-10`, type: 'public', description: 'Easter Monday.' },
    { name: "Festa della Liberazione", date: `${year}-04-25`, type: 'public', description: 'Liberation Day.' },
    { name: "Festa dei Lavoratori", date: `${year}-05-01`, type: 'public', description: 'Labor Day.' },
    { name: "Festa della Repubblica", date: `${year}-06-02`, type: 'public', description: 'Republic Day.' },
    { name: "Assunzione di Maria", date: `${year}-08-15`, type: 'public', description: 'Assumption of Mary.' },
    { name: "Ognissanti", date: `${year}-11-01`, type: 'public', description: 'All Saints’ Day.' },
    { name: "Immacolata Concezione", date: `${year}-12-08`, type: 'public', description: 'Immaculate Conception.' },
    { name: "Natale", date: `${year}-12-25`, type: 'public', description: 'Christmas Day.' },
    { name: "Santo Stefano", date: `${year}-12-26`, type: 'public', description: 'St. Stephen’s Day.' }
  ];

  // 加拿大节假日数据
  const canadaHolidays = [
    { name: "New Year's Day", date: `${year}-01-01`, type: 'public', description: 'Start of the new year.' },
    { name: "Good Friday", date: `${year}-04-07`, type: 'public', description: 'Friday before Easter Sunday.' },
    { name: "Easter Monday", date: `${year}-04-10`, type: 'public', description: 'Monday after Easter Sunday.' },
    { name: "Victoria Day", date: `${year}-05-22`, type: 'public', description: 'Queen Victoria’s birthday.' },
    { name: "Canada Day", date: `${year}-07-01`, type: 'public', description: 'Canada’s national day.' },
    { name: "Labour Day", date: `${year}-09-04`, type: 'public', description: 'Labor Day.' },
    { name: "Thanksgiving Day", date: `${year}-10-09`, type: 'public', description: 'Thanksgiving Day.' },
    { name: "Remembrance Day", date: `${year}-11-11`, type: 'public', description: 'Commemorates war veterans.' },
    { name: "Christmas Day", date: `${year}-12-25`, type: 'public', description: 'Christian festival celebrating the birth of Jesus Christ.' }
  ];

  // 澳大利亚节假日数据
  const australiaHolidays = [
    { name: "New Year's Day", date: `${year}-01-01`, type: 'public', description: 'Start of the new year.' },
    { name: "Australia Day", date: `${year}-01-26`, type: 'public', description: 'Australia’s national day.' },
    { name: "Good Friday", date: `${year}-04-07`, type: 'public', description: 'Friday before Easter Sunday.' },
    { name: "Easter Monday", date: `${year}-04-10`, type: 'public', description: 'Monday after Easter Sunday.' },
    { name: "Anzac Day", date: `${year}-04-25`, type: 'public', description: 'Commemorates Australian and New Zealand Army Corps.' },
    { name: "Christmas Day", date: `${year}-12-25`, type: 'public', description: 'Christian festival celebrating the birth of Jesus Christ.' },
    { name: "Boxing Day", date: `${year}-12-26`, type: 'public', description: 'Day after Christmas Day.' }
  ];

  // 新西兰节假日数据
  const newZealandHolidays = [
    { name: "New Year's Day", date: `${year}-01-01`, type: 'public', description: 'Start of the new year.' },
    { name: "Day after New Year's Day", date: `${year}-01-02`, type: 'public', description: 'Day after New Year’s Day.' },
    { name: "Waitangi Day", date: `${year}-02-06`, type: 'public', description: 'New Zealand’s national day.' },
    { name: "Good Friday", date: `${year}-04-07`, type: 'public', description: 'Friday before Easter Sunday.' },
    { name: "Easter Monday", date: `${year}-04-10`, type: 'public', description: 'Monday after Easter Sunday.' },
    { name: "Anzac Day", date: `${year}-04-25`, type: 'public', description: 'Commemorates Australian and New Zealand Army Corps.' },
    { name: "Christmas Day", date: `${year}-12-25`, type: 'public', description: 'Christian festival celebrating the birth of Jesus Christ.' },
    { name: "Boxing Day", date: `${year}-12-26`, type: 'public', description: 'Day after Christmas Day.' }
  ];

  // 俄罗斯节假日数据
  const russiaHolidays = [
    { name: "Новый год", date: `${year}-01-01`, type: 'public', description: 'New Year’s Day.' },
    { name: "Рождество Христово", date: `${year}-01-07`, type: 'public', description: 'Orthodox Christmas.' },
    { name: "День защитника Отечества", date: `${year}-02-23`, type: 'public', description: 'Defender of the Fatherland Day.' },
    { name: "Международный женский день", date: `${year}-03-08`, type: 'public', description: 'International Women’s Day.' },
    { name: "Праздник Весны и Труда", date: `${year}-05-01`, type: 'public', description: 'Spring and Labor Day.' },
    { name: "День Победы", date: `${year}-05-09`, type: 'public', description: 'Victory Day.' },
    { name: "День России", date: `${year}-06-12`, type: 'public', description: 'Russia Day.' },
    { name: "День народного единства", date: `${year}-11-04`, type: 'public', description: 'Unity Day.' }
  ];

  // 印度节假日数据
  const indiaHolidays = [
    { name: "Republic Day", date: `${year}-01-26`, type: 'public', description: 'India’s Republic Day.' },
    { name: "Holi", date: `${year}-03-29`, type: 'public', description: 'Festival of Colors.' },
    { name: "Rama Navami", date: `${year}-04-10`, type: 'public', description: 'Birth of Lord Rama.' },
    { name: "Mahavir Jayanti", date: `${year}-04-17`, type: 'public', description: 'Birth of Mahavira.' },
    { name: "Good Friday", date: `${year}-04-07`, type: 'public', description: 'Friday before Easter Sunday.' },
    { name: "Independence Day", date: `${year}-08-15`, type: 'public', description: 'India’s Independence Day.' },
    { name: "Gandhi Jayanti", date: `${year}-10-02`, type: 'public', description: 'Birth anniversary of Mahatma Gandhi.' },
    { name: "Diwali", date: `${year}-11-12`, type: 'public', description: 'Festival of Lights.' },
    { name: "Christmas Day", date: `${year}-12-25`, type: 'public', description: 'Christian festival celebrating the birth of Jesus Christ.' }
  ];

  // 巴西节假日数据
  const brazilHolidays = [
    { name: "Ano Novo", date: `${year}-01-01`, type: 'public', description: 'New Year’s Day.' },
    { name: "Carnaval", date: `${year}-02-21`, type: 'public', description: 'Carnival.' },
    { name: "Paixão de Cristo", date: `${year}-04-07`, type: 'public', description: 'Good Friday.' },
    { name: "Tiradentes", date: `${year}-04-21`, type: 'public', description: 'Tiradentes Day.' },
    { name: "Dia do Trabalho", date: `${year}-05-01`, type: 'public', description: 'Labor Day.' },
    { name: "Corpus Christi", date: `${year}-06-08`, type: 'public', description: 'Corpus Christi.' },
    { name: "Independência do Brasil", date: `${year}-09-07`, type: 'public', description: 'Brazilian Independence Day.' },
    { name: "Nossa Senhora Aparecida", date: `${year}-10-12`, type: 'public', description: 'Our Lady of Aparecida Day.' },
    { name: "Finados", date: `${year}-11-02`, type: 'public', description: 'All Souls’ Day.' },
    { name: "Proclamação da República", date: `${year}-11-15`, type: 'public', description: 'Proclamation of the Republic.' },
    { name: "Natal", date: `${year}-12-25`, type: 'public', description: 'Christmas Day.' }
  ];

  // 根据国家返回对应的节假日数据
  switch (country) {
    case 'CN': return chinaHolidays;
    case 'US': return usaHolidays;
    case 'UK': return ukHolidays;
    case 'JP': return japanHolidays;
    case 'KR': return koreaHolidays;
    case 'SG': return singaporeHolidays;
    case 'DE': return germanyHolidays;
    case 'FR': return franceHolidays;
    case 'IT': return italyHolidays;
    case 'CA': return canadaHolidays;
    case 'AU': return australiaHolidays;
    case 'NZ': return newZealandHolidays;
    case 'RU': return russiaHolidays;
    case 'IN': return indiaHolidays;
    case 'BR': return brazilHolidays;
    default: return chinaHolidays; // 默认返回中国节假日数据
  }
}

// 检查指定日期是否为今天
function isToday(day) {
  return currentYear === selectedYear.value && 
         currentMonth === selectedMonth.value && 
         currentDay === day;
}

// 检查指定日期是否有节假日
function hasHoliday(day) {
  if (!isCurrentMonth(0, day)) return false;
  
  const formattedDate = `${selectedYear.value}-${String(selectedMonth.value).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  return visibleHolidays.value.some(holiday => holiday.date === formattedDate);
}

// 获取指定日期的节假日
function getHolidaysForDay(day) {
  if (!day || !isCurrentMonth(0, day)) return [];
  
  const formattedDate = `${selectedYear.value}-${String(selectedMonth.value).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  return visibleHolidays.value.filter(holiday => holiday.date === formattedDate);
}

// 根据节假日类型获取CSS类
function getHolidayTypeClass(type) {
  switch(type) {
    case 'public':
      return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300';
    case 'observance':
      return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300';
    case 'traditional':
      return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300';
    case 'optional':
      return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300';
    default:
      return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
  }
}

// 获取节假日类型的徽章样式
function getHolidayTypeBadgeClass(type) {
  switch(type) {
    case 'public':
      return 'bg-red-500 text-white';
    case 'observance':
      return 'bg-blue-500 text-white';
    case 'traditional':
      return 'bg-yellow-500 text-white';
    case 'optional':
      return 'bg-green-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
}

// 获取节假日类型的本地化名称
function getHolidayTypeName(type) {
  return t(`tools.holiday-calendar.holidayTypes.${type}`);
}

// 格式化日期（完整格式）
function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale.value, { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }).format(date);
}

// 格式化日期（仅显示日）
function formatDateDay(dateString) {
  const day = dateString.split('-')[2];
  return parseInt(day) + '日';
}

// 选择日期
function selectDate(day) {
  if (isCurrentMonth(0, day)) {
    selectedDate.value = day;
  }
}

// 上个月
function previousMonth() {
  if (selectedMonth.value === 1) {
    selectedMonth.value = 12;
    selectedYear.value--;
  } else {
    selectedMonth.value--;
  }
  selectedDate.value = null;
  searchHolidays();
}

// 下个月
function nextMonth() {
  if (selectedMonth.value === 12) {
    selectedMonth.value = 1;
    selectedYear.value++;
  } else {
    selectedMonth.value++;
  }
  selectedDate.value = null;
  searchHolidays();
}

// 跳转到今天
function goToToday() {
  selectedYear.value = currentYear;
  selectedMonth.value = currentMonth;
  selectedDate.value = currentDay;
  searchHolidays();
}

// 重置筛选条件
function resetFilter() {
  selectedYear.value = currentYear;
  selectedMonth.value = currentMonth;
  selectedCountry.value = 'CN';
  selectedHolidayType.value = 'all';
  selectedDate.value = null;
  searchHolidays();
}
</script>

<style scoped>
.holiday-calendar {
  max-width: 100%;
}

/* 日历表格样式 */
th {
  font-weight: 600;
}

/* 暗色模式下的额外样式 */
:deep(.dark) .dark\:bg-gray-750 {
  background-color: rgba(31, 41, 55, 0.75);
}

:deep(.dark) .dark\:bg-gray-850 {
  background-color: rgba(22, 30, 46, 0.95);
}
</style> 