<template>
  <div class="countdown-generator">
    <!-- 创建倒计时表单区域 -->
    <div class="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 左侧：事件设置 -->
        <div>
          <h3 class="text-lg font-medium mb-4">{{ t('tools.countdown-generator.eventName') }}</h3>
          <div class="mb-4">
            <input
              v-model="eventName"
              type="text"
              class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              :placeholder="t('tools.countdown-generator.eventName')"
            />
          </div>
          
          <h3 class="text-lg font-medium mb-4">{{ t('tools.countdown-generator.eventDate') }}</h3>
          <div class="mb-4">
            <input
              v-model="eventDate"
              type="date"
              class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          
          <h3 class="text-lg font-medium mb-4">{{ t('tools.countdown-generator.eventTime') }}</h3>
          <div class="mb-6">
            <input
              v-model="eventTime"
              type="time"
              class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          
          <div class="flex space-x-3">
            <button
              @click="generateCountdown"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {{ t('tools.countdown-generator.generateCountdown') }}
            </button>
            <button
              @click="resetForm"
              class="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {{ t('tools.countdown-generator.resetForm') }}
            </button>
          </div>
        </div>
        
        <!-- 右侧：样式设置 -->
        <div>
          <h3 class="text-lg font-medium mb-4">{{ t('tools.countdown-generator.customStyle') }}</h3>
          
          <!-- 主题选择 -->
          <div class="mb-4">
            <label class="block mb-2">{{ t('tools.countdown-generator.theme') }}</label>
            <select
              v-model="theme"
              class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="light">{{ t('tools.countdown-generator.themeLight') }}</option>
              <option value="dark">{{ t('tools.countdown-generator.themeDark') }}</option>
              <option value="colorful">{{ t('tools.countdown-generator.themeColorful') }}</option>
              <option value="minimal">{{ t('tools.countdown-generator.themeMinimal') }}</option>
            </select>
          </div>
          
          <!-- 尺寸选择 -->
          <div class="mb-4">
            <label class="block mb-2">{{ t('tools.countdown-generator.size') }}</label>
            <select
              v-model="size"
              class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="small">{{ t('tools.countdown-generator.sizeSmall') }}</option>
              <option value="medium">{{ t('tools.countdown-generator.sizeMedium') }}</option>
              <option value="large">{{ t('tools.countdown-generator.sizeLarge') }}</option>
            </select>
          </div>
          
          <!-- 颜色设置 -->
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block mb-2">{{ t('tools.countdown-generator.textColor') }}</label>
              <input
                v-model="textColor"
                type="color"
                class="w-full p-1 h-10 border rounded-md"
              />
            </div>
            <div>
              <label class="block mb-2">{{ t('tools.countdown-generator.backgroundColor') }}</label>
              <input
                v-model="backgroundColor"
                type="color"
                class="w-full p-1 h-10 border rounded-md"
              />
            </div>
          </div>
          
          <!-- 显示选项 -->
          <div class="flex space-x-6 mb-4">
            <div class="flex items-center">
              <input
                v-model="showLabels"
                type="checkbox"
                id="showLabels"
                class="mr-2"
              />
              <label for="showLabels">{{ t('tools.countdown-generator.showLabels') }}</label>
            </div>
            <div class="flex items-center">
              <input
                v-model="showSeconds"
                type="checkbox"
                id="showSeconds"
                class="mr-2"
              />
              <label for="showSeconds">{{ t('tools.countdown-generator.showSeconds') }}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 倒计时预览区域 -->
    <div v-if="countdownActive" class="mb-8">
      <div 
        ref="countdownDisplay"
        class="p-6 rounded-lg shadow-md transition-all"
        :class="getContainerClasses()"
        :style="getContainerStyles()"
      >
        <h2 class="text-center text-xl mb-4" :style="{ color: textColor }">{{ eventName }}</h2>
        
        <div v-if="timeRemaining > 0" class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div class="countdown-item">
            <div class="text-3xl font-bold" :class="getValueClasses()" :style="{ color: textColor }">{{ days }}</div>
            <div v-if="showLabels" class="text-sm mt-1" :style="{ color: textColor }">{{ t('tools.countdown-generator.days') }}</div>
          </div>
          <div class="countdown-item">
            <div class="text-3xl font-bold" :class="getValueClasses()" :style="{ color: textColor }">{{ hours }}</div>
            <div v-if="showLabels" class="text-sm mt-1" :style="{ color: textColor }">{{ t('tools.countdown-generator.hours') }}</div>
          </div>
          <div class="countdown-item">
            <div class="text-3xl font-bold" :class="getValueClasses()" :style="{ color: textColor }">{{ minutes }}</div>
            <div v-if="showLabels" class="text-sm mt-1" :style="{ color: textColor }">{{ t('tools.countdown-generator.minutes') }}</div>
          </div>
          <div v-if="showSeconds" class="countdown-item">
            <div class="text-3xl font-bold" :class="getValueClasses()" :style="{ color: textColor }">{{ seconds }}</div>
            <div v-if="showLabels" class="text-sm mt-1" :style="{ color: textColor }">{{ t('tools.countdown-generator.seconds') }}</div>
          </div>
        </div>
        
        <div v-else class="text-center text-xl" :style="{ color: textColor }">
          {{ t('tools.countdown-generator.eventComplete') }}
        </div>
      </div>
      
      <!-- 导出选项 -->
      <div class="mt-6 flex flex-wrap gap-3">
        <button
          @click="copyLink"
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          {{ t('tools.countdown-generator.copyLink') }}
        </button>
        <button
          @click="copyEmbed"
          class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          {{ t('tools.countdown-generator.copyEmbed') }}
        </button>
        <button
          @click="downloadImage"
          class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          {{ t('tools.countdown-generator.downloadImage') }}
        </button>
      </div>
    </div>
    
    <!-- 工具介绍区域 -->
    <div class="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">{{ t('tools.countdown-generator.name') }}</h2>
      <p class="mb-6">{{ t('tools.countdown-generator.toolDescription') }}</p>
      
      <!-- 使用方法 -->
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-3">{{ t('tools.countdown-generator.toolUsage') }}</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>{{ t('tools.countdown-generator.toolUsageStep1') }}</li>
          <li>{{ t('tools.countdown-generator.toolUsageStep2') }}</li>
          <li>{{ t('tools.countdown-generator.toolUsageStep3') }}</li>
          <li>{{ t('tools.countdown-generator.toolUsageStep4') }}</li>
          <li>{{ t('tools.countdown-generator.toolUsageStep5') }}</li>
        </ul>
      </div>
      
      <!-- 主要功能 -->
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-3">{{ t('tools.countdown-generator.toolFeatures') }}</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>{{ t('tools.countdown-generator.toolFeature1') }}</li>
          <li>{{ t('tools.countdown-generator.toolFeature2') }}</li>
          <li>{{ t('tools.countdown-generator.toolFeature3') }}</li>
          <li>{{ t('tools.countdown-generator.toolFeature4') }}</li>
          <li>{{ t('tools.countdown-generator.toolFeature5') }}</li>
        </ul>
      </div>
      
      <!-- 应用场景 -->
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-3">{{ t('tools.countdown-generator.toolUseCases') }}</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>{{ t('tools.countdown-generator.toolUseCase1') }}</li>
          <li>{{ t('tools.countdown-generator.toolUseCase2') }}</li>
          <li>{{ t('tools.countdown-generator.toolUseCase3') }}</li>
          <li>{{ t('tools.countdown-generator.toolUseCase4') }}</li>
        </ul>
      </div>
      
      <!-- 使用技巧 -->
      <div>
        <h3 class="text-xl font-semibold mb-3">{{ t('tools.countdown-generator.toolTips') }}</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>{{ t('tools.countdown-generator.toolTip1') }}</li>
          <li>{{ t('tools.countdown-generator.toolTip2') }}</li>
          <li>{{ t('tools.countdown-generator.toolTip3') }}</li>
        </ul>
      </div>
    </div>
    
    <!-- 通知提示 -->
    <div
      v-if="notification"
      class="fixed bottom-4 right-4 p-4 rounded-md bg-blue-500 text-white transition-opacity shadow-lg"
      :class="{ 'opacity-0': notificationFading }"
    >
      {{ notification }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import html2canvas from 'html2canvas';

const { t } = useI18n();

// 表单数据
const eventName = ref('');
const eventDate = ref('');
const eventTime = ref('');
const targetDate = ref(null);

// 样式设置
const theme = ref('light');
const size = ref('medium');
const textColor = ref('#000000');
const backgroundColor = ref('#ffffff');
const showLabels = ref(true);
const showSeconds = ref(true);

// 状态
const countdownActive = ref(false);
const timeRemaining = ref(0);
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const notification = ref('');
const notificationFading = ref(false);
const countdownInterval = ref(null);
const countdownDisplay = ref(null);

// 计算默认表单日期时间
onMounted(() => {
  // 设置默认日期为明天
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const day = String(tomorrow.getDate()).padStart(2, '0');
  
  eventDate.value = `${year}-${month}-${day}`;
  eventTime.value = '12:00';
});

// 组件销毁前清除计时器
onBeforeUnmount(() => {
  if (countdownInterval.value) {
    clearInterval(countdownInterval.value);
  }
});

// 生成倒计时
function generateCountdown() {
  // 验证表单
  if (!eventName.value.trim()) {
    showNotification(t('tools.countdown-generator.errorEventName'));
    return;
  }
  
  if (!eventDate.value) {
    showNotification(t('tools.countdown-generator.errorDateMissing'));
    return;
  }
  
  // 解析目标日期时间
  const dateTimeStr = `${eventDate.value}T${eventTime.value || '00:00'}`;
  const newTargetDate = new Date(dateTimeStr);
  
  // 验证日期是否有效
  if (isNaN(newTargetDate.getTime())) {
    showNotification(t('tools.countdown-generator.errorDateMissing'));
    return;
  }
  
  // 检查是否为过去的日期
  if (newTargetDate <= new Date()) {
    showNotification(t('tools.countdown-generator.errorDatePast'));
    return;
  }
  
  // 设置目标日期并启动倒计时
  targetDate.value = newTargetDate;
  countdownActive.value = true;
  
  // 清除旧的计时器并启动新的计时器
  if (countdownInterval.value) {
    clearInterval(countdownInterval.value);
  }
  
  // 立即更新一次
  updateCountdown();
  
  // 如果显示秒数，则每秒更新；否则每分钟更新
  const intervalTime = showSeconds.value ? 1000 : 60000;
  countdownInterval.value = setInterval(updateCountdown, intervalTime);
}

// 更新倒计时数值
function updateCountdown() {
  if (!targetDate.value) return;
  
  const now = new Date();
  const diff = targetDate.value - now;
  
  if (diff <= 0) {
    // 倒计时结束
    timeRemaining.value = 0;
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    
    // 清除计时器
    if (countdownInterval.value) {
      clearInterval(countdownInterval.value);
      countdownInterval.value = null;
    }
  } else {
    // 计算剩余时间
    timeRemaining.value = diff;
    days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((diff % (1000 * 60)) / 1000);
  }
}

// 重置表单
function resetForm() {
  eventName.value = '';
  
  // 设置默认日期为明天
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const day = String(tomorrow.getDate()).padStart(2, '0');
  
  eventDate.value = `${year}-${month}-${day}`;
  eventTime.value = '12:00';
  
  // 重置样式
  theme.value = 'light';
  size.value = 'medium';
  textColor.value = '#000000';
  backgroundColor.value = '#ffffff';
  showLabels.value = true;
  showSeconds.value = true;
  
  // 停止倒计时
  countdownActive.value = false;
  if (countdownInterval.value) {
    clearInterval(countdownInterval.value);
    countdownInterval.value = null;
  }
}

// 复制链接
function copyLink() {
  // 创建包含当前倒计时参数的URL
  const params = new URLSearchParams();
  params.append('name', eventName.value);
  params.append('date', targetDate.value.toISOString());
  params.append('theme', theme.value);
  params.append('size', size.value);
  params.append('textColor', textColor.value);
  params.append('bgColor', backgroundColor.value);
  params.append('showLabels', showLabels.value ? '1' : '0');
  params.append('showSeconds', showSeconds.value ? '1' : '0');
  
  const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
  
  navigator.clipboard.writeText(url).then(() => {
    showNotification(t('tools.countdown-generator.linkCopied'));
  });
}

// 复制嵌入代码
function copyEmbed() {
  // 创建嵌入代码
  const params = new URLSearchParams();
  params.append('name', eventName.value);
  params.append('date', targetDate.value.toISOString());
  params.append('theme', theme.value);
  params.append('size', size.value);
  params.append('textColor', textColor.value);
  params.append('bgColor', backgroundColor.value);
  params.append('showLabels', showLabels.value ? '1' : '0');
  params.append('showSeconds', showSeconds.value ? '1' : '0');
  
  const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
  const embedCode = `<iframe src="${url}" style="width:100%;height:200px;border:none;"></iframe>`;
  
  navigator.clipboard.writeText(embedCode).then(() => {
    showNotification(t('tools.countdown-generator.embedCopied'));
  });
}

// 下载为图片
async function downloadImage() {
  if (!countdownDisplay.value) return;
  
  try {
    const canvas = await html2canvas(countdownDisplay.value, {
      backgroundColor: backgroundColor.value,
      scale: 2, // 高分辨率
      logging: false,
      useCORS: true
    });
    
    // 将Canvas转为图片并下载
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `countdown-${eventName.value.replace(/\s+/g, '-')}.png`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('导出图片失败:', error);
  }
}

// 显示通知
function showNotification(message) {
  notification.value = message;
  notificationFading.value = false;
  
  // 3秒后淡出
  setTimeout(() => {
    notificationFading.value = true;
    
    // 动画结束后移除
    setTimeout(() => {
      notification.value = '';
      notificationFading.value = false;
    }, 500);
  }, 3000);
}

// 样式计算
function getContainerClasses() {
  let classes = '';
  
  // 主题样式
  switch (theme.value) {
    case 'dark':
      classes += 'bg-gray-800 text-white ';
      break;
    case 'colorful':
      classes += 'bg-gradient-to-r from-blue-500 to-purple-500 text-white ';
      break;
    case 'minimal':
      classes += 'bg-gray-100 text-gray-800 ';
      break;
    default:
      classes += 'bg-white text-gray-900 ';
  }
  
  return classes;
}

function getContainerStyles() {
  return {
    backgroundColor: backgroundColor.value
  };
}

function getValueClasses() {
  // 尺寸样式
  switch (size.value) {
    case 'small':
      return 'text-xl';
    case 'large':
      return 'text-5xl';
    default:
      return 'text-3xl';
  }
}
</script>

<style scoped>
.countdown-generator {
  max-width: 1200px;
  margin: 0 auto;
}

.countdown-item {
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.notification {
  transition: opacity 0.5s ease;
}
</style> 