<template>
  <div class="pomodoro-timer">
    <!-- 主要内容区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- 左侧：设置面板 -->
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">{{ t('tools.pomodoro-timer.settingsTitle') }}</h2>
        
        <!-- 工作时间设置 -->
        <div class="mb-4">
          <label class="block mb-2">{{ t('tools.pomodoro-timer.workDuration') }}</label>
          <div class="flex items-center">
            <input 
              v-model="settings.workDuration" 
              type="range" 
              min="1" 
              max="60" 
              class="w-full mr-2"
            />
            <span class="w-16 text-right">{{ settings.workDuration }} {{ t('tools.pomodoro-timer.minutes') }}</span>
          </div>
        </div>
        
        <!-- 短休息设置 -->
        <div class="mb-4">
          <label class="block mb-2">{{ t('tools.pomodoro-timer.shortBreakDuration') }}</label>
          <div class="flex items-center">
            <input 
              v-model="settings.shortBreakDuration" 
              type="range" 
              min="1" 
              max="30" 
              class="w-full mr-2"
            />
            <span class="w-16 text-right">{{ settings.shortBreakDuration }} {{ t('tools.pomodoro-timer.minutes') }}</span>
          </div>
        </div>
        
        <!-- 长休息设置 -->
        <div class="mb-4">
          <label class="block mb-2">{{ t('tools.pomodoro-timer.longBreakDuration') }}</label>
          <div class="flex items-center">
            <input 
              v-model="settings.longBreakDuration" 
              type="range" 
              min="5" 
              max="60" 
              class="w-full mr-2"
            />
            <span class="w-16 text-right">{{ settings.longBreakDuration }} {{ t('tools.pomodoro-timer.minutes') }}</span>
          </div>
        </div>
        
        <!-- 工作周期设置 -->
        <div class="mb-4">
          <label class="block mb-2">{{ t('tools.pomodoro-timer.cyclesBeforeLongBreak') }}</label>
          <div class="flex items-center">
            <input 
              v-model="settings.cyclesBeforeLongBreak" 
              type="range" 
              min="1" 
              max="10" 
              class="w-full mr-2"
            />
            <span class="w-10 text-right">{{ settings.cyclesBeforeLongBreak }}</span>
          </div>
        </div>
        
        <!-- 额外选项 -->
        <div class="space-y-3 mb-6">
          <div class="flex items-center">
            <input 
              id="enableSound" 
              v-model="settings.enableSound" 
              type="checkbox" 
              class="mr-2 h-4 w-4"
            />
            <label for="enableSound">{{ t('tools.pomodoro-timer.enableSound') }}</label>
          </div>
          
          <div class="flex items-center">
            <input 
              id="autoStartBreaks" 
              v-model="settings.autoStartBreaks" 
              type="checkbox" 
              class="mr-2 h-4 w-4"
            />
            <label for="autoStartBreaks">{{ t('tools.pomodoro-timer.autoStartBreaks') }}</label>
          </div>
          
          <div class="flex items-center">
            <input 
              id="autoStartWork" 
              v-model="settings.autoStartWork" 
              type="checkbox" 
              class="mr-2 h-4 w-4"
            />
            <label for="autoStartWork">{{ t('tools.pomodoro-timer.autoStartWork') }}</label>
          </div>
        </div>
        
        <!-- 保存按钮 -->
        <div class="flex space-x-2">
          <button 
            @click="saveSettings" 
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {{ t('tools.pomodoro-timer.saveSettings') }}
          </button>
          <button 
            @click="resetToDefaults" 
            class="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {{ t('tools.pomodoro-timer.resetDefaults') }}
          </button>
        </div>
      </div>
      
      <!-- 中间：计时器显示 -->
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
        <!-- 模式指示器 -->
        <div class="mb-4 flex space-x-2">
          <button 
            @click="() => changeMode('work')" 
            class="px-3 py-1 rounded-full text-sm" 
            :class="timerMode === 'work' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'"
          >
            {{ t('tools.pomodoro-timer.work') }}
          </button>
          <button 
            @click="() => changeMode('shortBreak')" 
            class="px-3 py-1 rounded-full text-sm" 
            :class="timerMode === 'shortBreak' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'"
          >
            {{ t('tools.pomodoro-timer.shortBreak') }}
          </button>
          <button 
            @click="() => changeMode('longBreak')" 
            class="px-3 py-1 rounded-full text-sm" 
            :class="timerMode === 'longBreak' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'"
          >
            {{ t('tools.pomodoro-timer.longBreak') }}
          </button>
        </div>
        
        <!-- 计时器显示 -->
        <div 
          class="clock-display mb-6 text-8xl font-bold"
          :class="{
            'text-red-600 dark:text-red-400': timerMode === 'work',
            'text-green-600 dark:text-green-400': timerMode === 'shortBreak',
            'text-blue-600 dark:text-blue-400': timerMode === 'longBreak'
          }"
        >
          {{ formattedTime }}
        </div>
        
        <!-- 控制按钮 -->
        <div class="flex space-x-3">
          <button 
            v-if="!isRunning" 
            @click="startTimer" 
            class="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            {{ t('tools.pomodoro-timer.start') }}
          </button>
          <button 
            v-else 
            @click="pauseTimer" 
            class="px-5 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
          >
            {{ t('tools.pomodoro-timer.pause') }}
          </button>
          <button 
            @click="resetTimer" 
            class="px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            {{ t('tools.pomodoro-timer.reset') }}
          </button>
          <button 
            @click="skipToNext" 
            class="px-5 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            {{ t('tools.pomodoro-timer.skip') }}
          </button>
        </div>
        
        <!-- 状态消息 -->
        <div 
          v-if="statusMessage" 
          class="mt-4 py-2 px-4 rounded-md text-center" 
          :class="statusMessageClass"
        >
          {{ statusMessage }}
        </div>
        
        <!-- 循环计数 -->
        <div class="mt-4 flex items-center">
          <div 
            v-for="(_, index) in Array(settings.cyclesBeforeLongBreak)" 
            :key="index" 
            class="h-3 w-3 rounded-full mx-1" 
            :class="index < completedCycles ? 'bg-red-500' : 'bg-gray-300 dark:bg-gray-600'"
          ></div>
        </div>
      </div>
      
      <!-- 右侧：统计信息 -->
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">{{ t('tools.pomodoro-timer.statsTitle') }}</h2>
        
        <div class="space-y-4">
          <div class="flex justify-between items-center border-b pb-2 dark:border-gray-700">
            <span>{{ t('tools.pomodoro-timer.completedPomodoros') }}:</span>
            <span class="font-semibold">{{ stats.completedPomodoros }}</span>
          </div>
          
          <div class="flex justify-between items-center border-b pb-2 dark:border-gray-700">
            <span>{{ t('tools.pomodoro-timer.totalWorkTime') }}:</span>
            <span class="font-semibold">{{ formatWorkTime(stats.totalWorkMinutes) }}</span>
          </div>
          
          <div class="flex justify-between items-center border-b pb-2 dark:border-gray-700">
            <span>{{ t('tools.pomodoro-timer.averageDailyPomodoros') }}:</span>
            <span class="font-semibold">{{ calculateAveragePomodoros() }}</span>
          </div>
          
          <div class="flex justify-between items-center border-b pb-2 dark:border-gray-700">
            <span>{{ t('tools.pomodoro-timer.currentStreak') }}:</span>
            <span class="font-semibold">{{ stats.currentStreak }} {{ stats.currentStreak === 1 ? 'day' : 'days' }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 工具介绍部分 -->
    <div class="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">{{ t('tools.pomodoro-timer.aboutTitle') }}</h2>
      <p class="mb-6">{{ t('tools.pomodoro-timer.aboutDescription') }}</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 如何使用 -->
        <div>
          <h3 class="text-xl font-semibold mb-3">{{ t('tools.pomodoro-timer.howToUseTitle') }}</h3>
          <ul class="space-y-2">
            <li>{{ t('tools.pomodoro-timer.howToUseStep1') }}</li>
            <li>{{ t('tools.pomodoro-timer.howToUseStep2') }}</li>
            <li>{{ t('tools.pomodoro-timer.howToUseStep3') }}</li>
            <li>{{ t('tools.pomodoro-timer.howToUseStep4') }}</li>
            <li>{{ t('tools.pomodoro-timer.howToUseStep5') }}</li>
          </ul>
        </div>
        
        <!-- 好处 -->
        <div>
          <h3 class="text-xl font-semibold mb-3">{{ t('tools.pomodoro-timer.benefitsTitle') }}</h3>
          <ul class="space-y-2">
            <li>{{ t('tools.pomodoro-timer.benefit1') }}</li>
            <li>{{ t('tools.pomodoro-timer.benefit2') }}</li>
            <li>{{ t('tools.pomodoro-timer.benefit3') }}</li>
            <li>{{ t('tools.pomodoro-timer.benefit4') }}</li>
            <li>{{ t('tools.pomodoro-timer.benefit5') }}</li>
          </ul>
        </div>
        
        <!-- 使用技巧 -->
        <div>
          <h3 class="text-xl font-semibold mb-3">{{ t('tools.pomodoro-timer.tipsTitle') }}</h3>
          <ul class="space-y-2">
            <li>{{ t('tools.pomodoro-timer.tip1') }}</li>
            <li>{{ t('tools.pomodoro-timer.tip2') }}</li>
            <li>{{ t('tools.pomodoro-timer.tip3') }}</li>
            <li>{{ t('tools.pomodoro-timer.tip4') }}</li>
            <li>{{ t('tools.pomodoro-timer.tip5') }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// 默认设置
const defaultSettings = {
  workDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  cyclesBeforeLongBreak: 4,
  enableSound: true,
  autoStartBreaks: true,
  autoStartWork: true
};

// 状态变量
const settings = ref({ ...defaultSettings });
const timerMode = ref('work'); // 'work', 'shortBreak', 'longBreak'
const timeLeft = ref(settings.value.workDuration * 60); // 秒数
const isRunning = ref(false);
const timerInterval = ref(null);
const completedCycles = ref(0);
const statusMessage = ref('');
const statusMessageClass = ref('');

// 统计数据
const stats = ref({
  completedPomodoros: 0,
  totalWorkMinutes: 0,
  workDays: 1,
  currentStreak: 0
});

// 计算属性 - 格式化时间
const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60);
  const seconds = timeLeft.value % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});

// 生命周期钩子
onMounted(() => {
  loadSettings();
  loadStats();
  resetTimer();
  
  // 设置当前模式的初始时间
  updateTimeLeftForCurrentMode();
});

onUnmounted(() => {
  clearInterval(timerInterval.value);
});

// 监听设置变化，更新当前时间
watch(timerMode, () => {
  updateTimeLeftForCurrentMode();
});

// 方法
function startTimer() {
  if (isRunning.value) return;
  
  // 根据当前模式显示状态消息
  if (timerMode.value === 'work') {
    showStatusMessage(t('tools.pomodoro-timer.workStarted'), 'success');
  } else if (timerMode.value === 'shortBreak') {
    showStatusMessage(t('tools.pomodoro-timer.shortBreakStarted'), 'info');
  } else {
    showStatusMessage(t('tools.pomodoro-timer.longBreakStarted'), 'info');
  }
  
  isRunning.value = true;
  
  timerInterval.value = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      // 时间结束
      clearInterval(timerInterval.value);
      playAlarmSound();
      
      if (timerMode.value === 'work') {
        completeWorkSession();
      } else {
        completeBreakSession();
      }
    }
  }, 1000);
}

function pauseTimer() {
  if (!isRunning.value) return;
  
  clearInterval(timerInterval.value);
  isRunning.value = false;
  showStatusMessage(t('tools.pomodoro-timer.pausedMessage'), 'warning');
}

function resetTimer() {
  clearInterval(timerInterval.value);
  isRunning.value = false;
  updateTimeLeftForCurrentMode();
  showStatusMessage(t('tools.pomodoro-timer.resetMessage'), 'warning');
}

function skipToNext() {
  if (timerMode.value === 'work') {
    if (completedCycles.value >= settings.value.cyclesBeforeLongBreak - 1) {
      timerMode.value = 'longBreak';
    } else {
      timerMode.value = 'shortBreak';
    }
  } else {
    timerMode.value = 'work';
  }
  
  resetTimer();
}

function changeMode(mode) {
  if (timerMode.value === mode) return;
  
  timerMode.value = mode;
  resetTimer();
}

function updateTimeLeftForCurrentMode() {
  if (timerMode.value === 'work') {
    timeLeft.value = settings.value.workDuration * 60;
  } else if (timerMode.value === 'shortBreak') {
    timeLeft.value = settings.value.shortBreakDuration * 60;
  } else {
    timeLeft.value = settings.value.longBreakDuration * 60;
  }
}

function playAlarmSound() {
  if (!settings.value.enableSound) return;
  
  try {
    const audio = new Audio();
    audio.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0AfQB9AH0A';
    audio.play();
  } catch (e) {
    console.error('Error playing sound:', e);
  }
}

function showStatusMessage(message, type) {
  statusMessage.value = message;
  
  // 设置样式类
  if (type === 'success') {
    statusMessageClass.value = 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
  } else if (type === 'warning') {
    statusMessageClass.value = 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
  } else if (type === 'error') {
    statusMessageClass.value = 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
  } else {
    statusMessageClass.value = 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
  }
  
  // 3秒后清除消息
  setTimeout(() => {
    statusMessage.value = '';
  }, 3000);
}

function completeWorkSession() {
  stats.value.completedPomodoros++;
  stats.value.totalWorkMinutes += settings.value.workDuration;
  saveStats();
  
  showStatusMessage(t('tools.pomodoro-timer.workCompleted'), 'success');
  
  // 更新循环计数
  completedCycles.value++;
  if (completedCycles.value >= settings.value.cyclesBeforeLongBreak) {
    timerMode.value = 'longBreak';
    completedCycles.value = 0;
  } else {
    timerMode.value = 'shortBreak';
  }
  
  // 重置计时器
  updateTimeLeftForCurrentMode();
  
  // 自动开始休息
  if (settings.value.autoStartBreaks) {
    startTimer();
  }
}

function completeBreakSession() {
  showStatusMessage(t('tools.pomodoro-timer.breakCompleted'), 'info');
  
  timerMode.value = 'work';
  updateTimeLeftForCurrentMode();
  
  // 自动开始工作
  if (settings.value.autoStartWork) {
    startTimer();
  }
}

// 设置相关函数
function saveSettings() {
  // 保存到本地存储
  localStorage.setItem('pomodoroSettings', JSON.stringify(settings.value));
  
  // 根据当前模式更新剩余时间
  updateTimeLeftForCurrentMode();
  
  showStatusMessage(t('tools.pomodoro-timer.saveSettings'), 'success');
}

function loadSettings() {
  const savedSettings = localStorage.getItem('pomodoroSettings');
  if (savedSettings) {
    try {
      const parsedSettings = JSON.parse(savedSettings);
      Object.assign(settings.value, parsedSettings);
    } catch (e) {
      console.error('Error parsing settings:', e);
    }
  }
}

function resetToDefaults() {
  Object.assign(settings.value, defaultSettings);
  saveSettings();
}

// 统计相关函数
function loadStats() {
  const savedStats = localStorage.getItem('pomodoroStats');
  if (savedStats) {
    try {
      const parsedStats = JSON.parse(savedStats);
      Object.assign(stats.value, parsedStats);
    } catch (e) {
      console.error('Error parsing stats:', e);
    }
  }
  
  // 检查是否为新的一天，更新连续工作日计数
  checkDayStreak();
}

function saveStats() {
  // 保存到本地存储
  localStorage.setItem('pomodoroStats', JSON.stringify(stats.value));
  
  // 检查今天是否已经记录为工作日
  const today = new Date().toDateString();
  const lastWorkDay = localStorage.getItem('lastPomodoroWorkDay');
  
  if (lastWorkDay !== today) {
    localStorage.setItem('lastPomodoroWorkDay', today);
    // 如果昨天也工作了，增加连续天数
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toDateString();
    
    if (lastWorkDay === yesterdayString) {
      stats.value.currentStreak++;
    } else if (!lastWorkDay) {
      // 首次使用
      stats.value.currentStreak = 1;
    } else {
      // 中断了连续记录
      stats.value.currentStreak = 1;
    }
    
    localStorage.setItem('pomodoroStats', JSON.stringify(stats.value));
  }
}

function checkDayStreak() {
  const today = new Date().toDateString();
  const lastWorkDay = localStorage.getItem('lastPomodoroWorkDay');
  
  // 如果今天尚未记录工作，但不是昨天，重置连续记录
  if (lastWorkDay && lastWorkDay !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toDateString();
    
    if (lastWorkDay !== yesterdayString) {
      stats.value.currentStreak = 0;
      localStorage.setItem('pomodoroStats', JSON.stringify(stats.value));
    }
  }
}

function formatWorkTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins}m`;
}

function calculateAveragePomodoros() {
  if (!stats.value.workDays || stats.value.workDays < 1) return '0';
  return (stats.value.completedPomodoros / stats.value.workDays).toFixed(1);
}
</script>

<style scoped>
.pomodoro-timer {
  max-width: 1200px;
  margin: 0 auto;
}

.clock-display {
  font-family: 'Courier New', monospace;
  font-variant-numeric: tabular-nums;
  text-align: center;
}
</style> 