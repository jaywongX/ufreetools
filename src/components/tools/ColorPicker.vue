<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <!-- 工具标题栏 -->
    <div class="flex flex-wrap items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <div class="flex space-x-2 mb-2 sm:mb-0">
        <button 
          @click="copyColorValue" 
          class="btn-sm bg-primary hover:bg-primary-dark text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          {{ $t('tools.color-picker.actions.copyColor') }}
        </button>
        <button 
          @click="resetColor" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {{ $t('tools.color-picker.actions.reset') }}
        </button>
      </div>
      <div class="flex space-x-2">
        <button 
          v-for="format in ['HEX', 'RGB', 'HSL']" 
          :key="format"
          @click="colorFormat = format"
          class="btn-sm"
          :class="{
            'bg-primary text-white': colorFormat === format,
            'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200': colorFormat !== format
          }"
        >
          {{ $t(`tools.color-picker.formats.${format.toLowerCase()}`) }}
        </button>
      </div>
    </div>
    
    <!-- 状态消息 -->
    <div 
      v-if="message" 
      class="p-3 text-sm" 
      :class="{ 
        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': messageType === 'success',
        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': messageType === 'error',
      }"
    >
      {{ message }}
    </div>
    
    <div class="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- 左侧：颜色选择区域 -->
      <div class="md:col-span-2 space-y-6">
        <!-- 饱和度/明度选择区域 -->
        <div class="relative w-full" style="height: 240px;">
          <!-- 饱和度/明度背景 -->
          <div 
            ref="saturationValueBox"
            class="absolute inset-0 rounded-md cursor-pointer"
            :style="{
              backgroundColor: `hsl(${currentHSL.h}, 100%, 50%)`
            }"
            @mousedown="startSaturationValueDrag"
            @touchstart="startSaturationValueDrag"
          >
            <!-- 白色渐变 (从左到右) -->
            <div class="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
            <!-- 黑色渐变 (从下到上) -->
            <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            
            <!-- 选择指示器 -->
            <div 
              class="absolute w-4 h-4 rounded-full border-2 border-white transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              :style="{
                left: `${currentHSL.s}%`,
                top: `${100 - currentHSL.l}%`,
                boxShadow: '0 0 0 1px rgba(0,0,0,0.3)'
              }"
            ></div>
          </div>
        </div>
        
        <!-- 色相滑块 -->
        <div class="relative w-full h-8">
          <!-- 色相背景 -->
          <div 
            ref="hueSlider"
            class="absolute inset-0 rounded-md cursor-pointer hue-slider"
            @mousedown="startHueDrag"
            @touchstart="startHueDrag"
          ></div>
          
          <!-- 选择指示器 -->
          <div 
            class="absolute top-0 bottom-0 w-1 bg-white rounded-full transform -translate-x-1/2 pointer-events-none"
            :style="{
              left: `${(currentHSL.h / 360) * 100}%`,
              boxShadow: '0 0 0 1px rgba(0,0,0,0.3)'
            }"
          ></div>
        </div>
        
        <!-- Alpha滑块 -->
        <div class="relative w-full h-8">
          <!-- Alpha背景 (棋盘格) -->
          <div class="absolute inset-0 rounded-md bg-checkerboard"></div>
          
          <!-- Alpha渐变 -->
          <div 
            ref="alphaSlider"
            class="absolute inset-0 rounded-md cursor-pointer"
            :style="{
              background: `linear-gradient(to right, transparent, ${getRGBColor()})`
            }"
            @mousedown="startAlphaDrag"
            @touchstart="startAlphaDrag"
          ></div>
          
          <!-- 选择指示器 -->
          <div 
            class="absolute top-0 bottom-0 w-1 bg-white rounded-full transform -translate-x-1/2 pointer-events-none"
            :style="{
              left: `${alpha * 100}%`,
              boxShadow: '0 0 0 1px rgba(0,0,0,0.3)'
            }"
          ></div>
        </div>
      </div>
      
      <!-- 右侧：颜色预览和输入 -->
      <div class="space-y-6">
        <!-- 颜色预览 -->
        <div class="space-y-2">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">
          {{ $t('tools.color-picker.messages.preview') }}
          </div>
          <div class="relative h-24 rounded-md bg-checkerboard">
            <div 
              class="absolute inset-0 rounded-md"
              :style="{
                backgroundColor: getColorWithAlpha()
              }"
            ></div>
          </div>
        </div>
        
        <!-- 颜色值输入 -->
        <div class="space-y-4">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ $t('tools.color-picker.messages.colorValue') }}
          </div>
          
          <!-- HEX输入 -->
          <div v-if="colorFormat === 'HEX'" class="space-y-1">
            <label class="text-xs text-gray-500 dark:text-gray-400">HEX</label>
            <div class="flex">
              <input
                type="text"
                v-model="hexValue"
                @change="handleHexInput"
                class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                maxlength="7"
                placeholder="#RRGGBB"
              />
            </div>
          </div>
          
          <!-- RGB输入 -->
          <div v-if="colorFormat === 'RGB'" class="space-y-1">
            <label class="text-xs text-gray-500 dark:text-gray-400">RGB</label>
            <div class="grid grid-cols-3 gap-2">
              <div>
                <input
                  type="number"
                  v-model.number="currentRGB.r"
                  @change="handleRGBInput"
                  min="0"
                  max="255"
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <div class="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">R</div>
              </div>
              <div>
                <input
                  type="number"
                  v-model.number="currentRGB.g"
                  @change="handleRGBInput"
                  min="0"
                  max="255"
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <div class="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">G</div>
              </div>
              <div>
                <input
                  type="number"
                  v-model.number="currentRGB.b"
                  @change="handleRGBInput"
                  min="0"
                  max="255"
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <div class="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">B</div>
              </div>
            </div>
          </div>
          
          <!-- HSL输入 -->
          <div v-if="colorFormat === 'HSL'" class="space-y-1">
            <label class="text-xs text-gray-500 dark:text-gray-400">HSL</label>
            <div class="grid grid-cols-3 gap-2">
              <div>
                <input
                  type="number"
                  v-model.number="currentHSL.h"
                  @change="handleHSLInput"
                  min="0"
                  max="360"
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <div class="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">H</div>
              </div>
              <div>
                <input
                  type="number"
                  v-model.number="currentHSL.s"
                  @change="handleHSLInput"
                  min="0"
                  max="100"
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <div class="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">S%</div>
              </div>
              <div>
                <input
                  type="number"
                  v-model.number="currentHSL.l"
                  @change="handleHSLInput"
                  min="0"
                  max="100"
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <div class="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">L%</div>
              </div>
            </div>
          </div>
          
          <!-- Alpha输入 -->
          <div class="space-y-1">
            <div class="flex justify-between">
              <label class="text-xs text-gray-500 dark:text-gray-400">
                {{ $t('tools.color-picker.colorAdjust.alpha') }}
              </label>
              <span class="text-xs text-gray-500 dark:text-gray-400">{{ Math.round(alpha * 100) }}%</span>
            </div>
            <input
              type="range"
              v-model="alpha"
              min="0"
              max="1"
              step="0.01"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
        </div>
        
        <!-- 颜色历史 -->
        <div class="space-y-2">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ $t('tools.color-picker.history.title') }}
          </div>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="(color, index) in colorHistory" 
              :key="index"
              @click="applyHistoryColor(color)"
              class="w-6 h-6 rounded bg-checkerboard border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div 
                class="w-full h-full rounded" 
                :style="{ backgroundColor: color.hex }"
              ></div>
            </button>
            <button 
              v-if="colorHistory.length > 0"
              @click="clearHistory"
              class="w-6 h-6 rounded border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-500"
              :title="$t('tools.color-picker.history.clear')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 颜色方案建议 -->
    <div class="mt-6 p-4 border-t border-gray-200 dark:border-gray-700">
      <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
        {{ $t('tools.color-picker.colorSchemes.title') }}
      </div>
      
      <div class="space-y-3">
        <!-- 颜色方案类型 -->
        <div class="flex space-x-2 overflow-x-auto pb-1">
          <button 
            v-for="scheme in [
              $t('tools.color-picker.colorSchemes.complementary'), 
              $t('tools.color-picker.colorSchemes.triadic'), 
              $t('tools.color-picker.colorSchemes.analogous'), 
              $t('tools.color-picker.colorSchemes.monochromatic'), 
            ]" 
            :key="scheme"
            class="px-3 py-1 text-xs rounded-full whitespace-nowrap"
            :class="{
              'bg-primary text-white': currentScheme === scheme,
              'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300': currentScheme !== scheme
            }"
            @click="currentScheme = scheme"
          >
            {{ scheme }}
          </button>
        </div>
        
        <!-- 颜色方案预览 -->
        <div class="grid grid-cols-5 gap-2">
          <div 
            v-for="(color, index) in colorScheme" 
            :key="index"
            class="relative group"
          >
            <div 
              class="h-10 rounded-md cursor-pointer bg-checkerboard"
              @click="applySchemeColor(color)"
            >
              <div 
                class="absolute inset-0 rounded-md" 
                :style="{ backgroundColor: color }"
              ></div>
            </div>
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center bg-black bg-opacity-30 rounded-md transition-opacity">
              <button 
                class="bg-white text-gray-800 p-1 rounded-full"
                @click="applySchemeColor(color)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch, onUnmounted } from 'vue'

// 颜色格式
const colorFormat = ref('HEX'); // HEX, RGB, HSL

// 颜色值
const hexValue = ref('#3182CE'); // 默认颜色
const alpha = ref(1); // 透明度 (0-1)

// HSL值
const currentHSL = reactive({
  h: 0, // 色相 (0-360)
  s: 0, // 饱和度 (0-100)
  l: 0  // 亮度 (0-100)
});

// 用于显示信息
const message = ref('');
const messageType = ref('success');

// 用于颜色历史记录
const colorHistory = ref([]);
const currentHistoryIndex = ref(-1);

// DOM引用
const hueSlider = ref(null);
const saturationValueBox = ref(null);
const alphaSlider = ref(null);

// 拖动状态
let isDraggingHue = false;
let isDraggingSV = false;
let isDraggingAlpha = false;

// RGB颜色计算
const currentRGB = computed(() => {
  return hslToRgb(currentHSL.h, currentHSL.s, currentHSL.l);
});

// HSL转RGB
function hslToRgb(h, s, l) {
  // 转换为0-1范围
  h = h / 360;
  s = s / 100;
  l = l / 100;
  
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // 灰度
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  // 转换为0-255范围
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}

// RGB转HSL
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // 灰度
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

// RGB转HEX
function rgbToHex({ r, g, b }) {
  const toHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// HEX转RGB
function hexToRgb(hex) {
  // 删除 # 如果存在
  hex = hex.replace(/^#/, '');
  
  // 处理缩写形式 (#RGB)
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return { r, g, b };
}

// 验证HEX值
function isValidHex(hex) {
  return /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i.test(hex);
}

// 获取RGB颜色字符串
function getRGBColor() {
  const { r, g, b } = currentRGB.value;
  return `rgb(${r}, ${g}, ${b})`;
}

// 获取带透明度的颜色
function getColorWithAlpha() {
  const { r, g, b } = currentRGB.value;
  return `rgba(${r}, ${g}, ${b}, ${alpha.value})`;
}

// 获取RGB字符串（带透明度）
function getRGBAString() {
  const { r, g, b } = currentRGB.value;
  return `rgba(${r}, ${g}, ${b}, ${alpha.value})`;
}

// 获取HSL字符串（带透明度）
function getHSLAString() {
  return `hsla(${currentHSL.h}, ${currentHSL.s}%, ${currentHSL.l}%, ${alpha.value})`;
}

// 根据当前格式获取颜色值
function getCurrentColorValue() {
  switch (colorFormat.value) {
    case 'HEX':
      if (alpha.value < 1) {
        return getRGBAString();
      }
      return hexValue.value;
    case 'RGB':
      if (alpha.value < 1) {
        return getRGBAString();
      }
      return `rgb(${currentRGB.value.r}, ${currentRGB.value.g}, ${currentRGB.value.b})`;
    case 'HSL':
      if (alpha.value < 1) {
        return getHSLAString();
      }
      return `hsl(${currentHSL.h}, ${currentHSL.s}%, ${currentHSL.l}%)`;
    default:
      return hexValue.value;
  }
}

// 复制颜色值
async function copyColorValue() {
  const colorValue = getCurrentColorValue();
  
  try {
    await navigator.clipboard.writeText(colorValue);
    showMessage(`已复制: ${colorValue}`, 'success');
  } catch (error) {
    showMessage('复制失败，请手动复制', 'error');
  }
}

// 重置为默认颜色
function resetColor() {
  hexValue.value = '#3182CE';
  updateColorFromHex();
  alpha.value = 1;
  addToHistory();
}

// 添加到历史记录
function addToHistory() {
  // 只保留当前位置之前的历史记录，丢弃之后的（当用户前进后返回再编辑的情况）
  if (currentHistoryIndex.value >= 0 && currentHistoryIndex.value < colorHistory.value.length - 1) {
    colorHistory.value = colorHistory.value.slice(0, currentHistoryIndex.value + 1);
  }
  
  // 添加当前颜色到历史记录
  colorHistory.value.push({
    hex: hexValue.value,
    hsl: { ...currentHSL },
    alpha: alpha.value
  });
  
  // 只保留最近的20条历史记录
  if (colorHistory.value.length > 20) {
    colorHistory.value.shift();
  }
  
  // 更新当前位置
  currentHistoryIndex.value = colorHistory.value.length - 1;
}

// 撤销操作
function undo() {
  if (currentHistoryIndex.value > 0) {
    currentHistoryIndex.value--;
    const historyItem = colorHistory.value[currentHistoryIndex.value];
    hexValue.value = historyItem.hex;
    
    // 更新HSL
    currentHSL.h = historyItem.hsl.h;
    currentHSL.s = historyItem.hsl.s;
    currentHSL.l = historyItem.hsl.l;
    
    alpha.value = historyItem.alpha;
  }
}

// 重做操作
function redo() {
  if (currentHistoryIndex.value < colorHistory.value.length - 1) {
    currentHistoryIndex.value++;
    const historyItem = colorHistory.value[currentHistoryIndex.value];
    hexValue.value = historyItem.hex;
    
    // 更新HSL
    currentHSL.h = historyItem.hsl.h;
    currentHSL.s = historyItem.hsl.s;
    currentHSL.l = historyItem.hsl.l;
    
    alpha.value = historyItem.alpha;
  }
}

// 更新HEX输入
function handleHexInput() {
  if (isValidHex(hexValue.value)) {
    updateColorFromHex();
    addToHistory();
  }
}

// 根据HEX值更新其他颜色值
function updateColorFromHex() {
  // 确保HEX格式正确
  if (!hexValue.value.startsWith('#')) {
    hexValue.value = '#' + hexValue.value;
  }
  
  // 将HEX转换为RGB
  const rgb = hexToRgb(hexValue.value);
  
  // 将RGB转换为HSL
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  
  // 更新HSL值
  currentHSL.h = hsl.h;
  currentHSL.s = hsl.s;
  currentHSL.l = hsl.l;
}

// 更新RGB输入
function handleRGBInput() {
  // 确保RGB值在有效范围内
  currentRGB.value.r = Math.min(255, Math.max(0, currentRGB.value.r));
  currentRGB.value.g = Math.min(255, Math.max(0, currentRGB.value.g));
  currentRGB.value.b = Math.min(255, Math.max(0, currentRGB.value.b));
  
  // 更新HEX值
  hexValue.value = rgbToHex(currentRGB.value);
  
  // 更新HSL值
  const hsl = rgbToHsl(currentRGB.value.r, currentRGB.value.g, currentRGB.value.b);
  currentHSL.h = hsl.h;
  currentHSL.s = hsl.s;
  currentHSL.l = hsl.l;
  
  addToHistory();
}

// 更新HSL输入
function handleHSLInput() {
  // 确保HSL值在有效范围内
  currentHSL.h = Math.min(360, Math.max(0, currentHSL.h));
  currentHSL.s = Math.min(100, Math.max(0, currentHSL.s));
  currentHSL.l = Math.min(100, Math.max(0, currentHSL.l));
  
  // 更新HEX值
  hexValue.value = rgbToHex(currentRGB.value);
  
  addToHistory();
}

// 显示消息
function showMessage(msg, type = 'success') {
  message.value = msg;
  messageType.value = type;
  
  // 3秒后自动清除消息
  setTimeout(() => {
    message.value = '';
  }, 3000);
}

// 开始拖动色相
function startHueDrag(event) {
  if (event.type === 'touchstart') {
    event.preventDefault();
    handleHueDrag(event.touches[0]);
  } else {
    handleHueDrag(event);
  }
  
  isDraggingHue = true;
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('touchmove', handleTouchMove, { passive: false });
  document.addEventListener('mouseup', handleMouseUp);
  document.addEventListener('touchend', handleMouseUp);
}

// 开始拖动饱和度/明度
function startSaturationValueDrag(event) {
  if (event.type === 'touchstart') {
    event.preventDefault();
    handleSVDrag(event.touches[0]);
  } else {
    handleSVDrag(event);
  }
  
  isDraggingSV = true;
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('touchmove', handleTouchMove, { passive: false });
  document.addEventListener('mouseup', handleMouseUp);
  document.addEventListener('touchend', handleMouseUp);
}

// 开始拖动透明度
function startAlphaDrag(event) {
  if (event.type === 'touchstart') {
    event.preventDefault();
    handleAlphaDrag(event.touches[0]);
  } else {
    handleAlphaDrag(event);
  }
  
  isDraggingAlpha = true;
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('touchmove', handleTouchMove, { passive: false });
  document.addEventListener('mouseup', handleMouseUp);
  document.addEventListener('touchend', handleMouseUp);
}

// 鼠标移动处理
function handleMouseMove(event) {
  if (isDraggingHue) handleHueDrag(event);
  if (isDraggingSV) handleSVDrag(event);
  if (isDraggingAlpha) handleAlphaDrag(event);
}

// 触摸移动处理
function handleTouchMove(event) {
  if (isDraggingHue || isDraggingSV || isDraggingAlpha) {
    event.preventDefault();
    const touch = event.touches[0];
    if (isDraggingHue) handleHueDrag(touch);
    if (isDraggingSV) handleSVDrag(touch);
    if (isDraggingAlpha) handleAlphaDrag(touch);
  }
}

// 停止拖动
function handleMouseUp() {
  if (isDraggingHue || isDraggingSV || isDraggingAlpha) {
    addToHistory();
  }
  isDraggingHue = false;
  isDraggingSV = false;
  isDraggingAlpha = false;
  
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('touchmove', handleTouchMove);
  document.removeEventListener('mouseup', handleMouseUp);
  document.removeEventListener('touchend', handleMouseUp);
}

// 处理色相拖动
function handleHueDrag(event) {
  const rect = hueSlider.value.getBoundingClientRect();
  const width = rect.width;
  let x = event.clientX - rect.left;
  
  // 限制在范围内
  x = Math.max(0, Math.min(x, width));
  
  // 更新色相 (0-360)
  currentHSL.h = Math.round((x / width) * 360);
  
  // 更新HEX值
  hexValue.value = rgbToHex(currentRGB.value);
}

// 处理饱和度/明度拖动
function handleSVDrag(event) {
  const rect = saturationValueBox.value.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  
  // 限制在范围内
  x = Math.max(0, Math.min(x, width));
  y = Math.max(0, Math.min(y, height));
  
  // 计算饱和度 (0-100) 和亮度 (0-100)
  const s = Math.round((x / width) * 100);
  const l = Math.round(100 - (y / height) * 100);
  
  currentHSL.s = s;
  currentHSL.l = l;
  
  // 更新HEX值
  hexValue.value = rgbToHex(currentRGB.value);
}

// 处理Alpha拖动
function handleAlphaDrag(event) {
  const rect = alphaSlider.value.getBoundingClientRect();
  const width = rect.width;
  let x = event.clientX - rect.left;
  
  // 限制在范围内
  x = Math.max(0, Math.min(x, width));
  
  // 更新alpha值 (0-1)
  alpha.value = parseFloat((x / width).toFixed(2));
}

// 监听HSL变化，更新HEX值
watch(currentHSL, () => {
  hexValue.value = rgbToHex(currentRGB.value);
}, { deep: true });

// 初始化时设置默认颜色
onMounted(() => {
  resetColor();
  
  // 监听按键
  window.addEventListener('keydown', (e) => {
    // Ctrl+Z 撤销
    if (e.ctrlKey && e.key === 'z') {
      e.preventDefault();
      undo();
    }
    // Ctrl+Y 重做
    if (e.ctrlKey && e.key === 'y') {
      e.preventDefault();
      redo();
    }
  });
});

// 组件卸载时清理事件监听器
onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('touchmove', handleTouchMove);
  document.removeEventListener('mouseup', handleMouseUp);
  document.removeEventListener('touchend', handleMouseUp);
  
  window.removeEventListener('keydown', null);
});

import { useI18n } from 'vue-i18n'
const { t } = useI18n();
// 颜色方案
const currentScheme = ref(t('tools.color-picker.colorSchemes.complementary'));

// 根据当前颜色生成方案
const colorScheme = computed(() => {
  const { h, s, l } = currentHSL;
  const baseColor = `hsl(${h}, ${s}%, ${l}%)`;
  
  switch (currentScheme.value) {
    case t('tools.color-picker.colorSchemes.complementary'):
      return [
        baseColor,
        `hsl(${(h + 180) % 360}, ${s}%, ${l}%)`
      ];
    case t('tools.color-picker.colorSchemes.triadic'):
      return [
        baseColor,
        `hsl(${(h + 120) % 360}, ${s}%, ${l}%)`,
        `hsl(${(h + 240) % 360}, ${s}%, ${l}%)`
      ];
    case t('tools.color-picker.colorSchemes.analogous'):
      return [
        baseColor,
        `hsl(${(h + 30) % 360}, ${s}%, ${l}%)`,
        `hsl(${(h + 60) % 360}, ${s}%, ${l}%)`,
        `hsl(${(h - 30 + 360) % 360}, ${s}%, ${l}%)`,
        `hsl(${(h - 60 + 360) % 360}, ${s}%, ${l}%)`
      ];
    case t('tools.color-picker.colorSchemes.monochromatic'):
      return [
        baseColor,
        `hsl(${h}, ${s}%, ${Math.min(100, l + 20)}%)`,
        `hsl(${h}, ${s}%, ${Math.max(0, l - 20)}%)`,
        `hsl(${h}, ${Math.min(100, s + 20)}%, ${l}%)`,
        `hsl(${h}, ${Math.max(0, s - 20)}%, ${l}%)`
      ];
    default:
      return [baseColor];
  }
});

// 应用方案中的颜色
function applySchemeColor(color) {
  // 从HSL字符串解析颜色
  const match = color.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
  if (match) {
    currentHSL.h = parseInt(match[1]);
    currentHSL.s = parseInt(match[2]);
    currentHSL.l = parseInt(match[3]);
    
    // 更新HEX值
    hexValue.value = rgbToHex(currentRGB.value);
    addToHistory();
  }
}

// 应用历史颜色
function applyHistoryColor(color) {
  // 解析颜色格式，可能是hex, rgb, hsl等
  if (color.hex.startsWith('#')) {
    // 是HEX格式
    hexValue.value = color.hex;
    const rgb = hexToRgb(color.hex);
    if (rgb) {
      currentRGB.value = rgb;
      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      currentHSL.h = hsl.h;
      currentHSL.s = hsl.s;
      currentHSL.l = hsl.l;
    }
  } else if (color.rgb.startsWith('rgb')) {
    // 是RGB格式
    const match = color.rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (match) {
      const r = parseInt(match[1]);
      const g = parseInt(match[2]);
      const b = parseInt(match[3]);
      const a = match[4] ? parseFloat(match[4]) : 1;
      
      currentRGB.value = { r, g, b };
      const hsl = rgbToHsl(r, g, b);
      currentHSL.h = hsl.h;
      currentHSL.s = hsl.s;
      currentHSL.l = hsl.l;
      alpha = a;
      hexValue.value = rgbToHex({ r, g, b });
    }
  } else if (color.hsl.startsWith('hsl')) {
    // 是HSL格式
    const match = color.hsl.match(/hsla?\((\d+),\s*(\d+)%,\s*(\d+)%(?:,\s*([\d.]+))?\)/);
    if (match) {
      const h = parseInt(match[1]);
      const s = parseInt(match[2]);
      const l = parseInt(match[3]);
      const a = match[4] ? parseFloat(match[4]) : 1;
      
      currentHSL.h = h;
      currentHSL.s = s;
      currentHSL.l = l;
      alpha = a;
      const rgb = hslToRgb(h/360, s/100, l/100);
      currentRGB.value = rgb;
      hexValue.value = rgbToHex(rgb);
    }
  }
}

// 清空历史记录
function clearHistory() {
  colorHistory.value = [];
  // 保存到localStorage
  localStorage.setItem('colorHistory', JSON.stringify(colorHistory.value));
}

// 获取当前颜色的HEX表示
function getCurrentColorAsHex() {
  return hexValue.value;
}
</script>

<style scoped>
.hue-slider {
  background: linear-gradient(
    to right,
    #ff0000,
    #ffff00,
    #00ff00,
    #00ffff,
    #0000ff,
    #ff00ff,
    #ff0000
  );
}

.bg-hue-slider {
  background: linear-gradient(
    to right,
    #ff0000,
    #ffff00,
    #00ff00,
    #00ffff,
    #0000ff,
    #ff00ff,
    #ff0000
  );
}

.bg-checkerboard {
  background-image: 
    linear-gradient(45deg, #ccc 25%, transparent 25%), 
    linear-gradient(-45deg, #ccc 25%, transparent 25%), 
    linear-gradient(45deg, transparent 75%, #ccc 75%), 
    linear-gradient(-45deg, transparent 75%, #ccc 75%);
  background-size: 10px 10px;
  background-position: 0 0, 0 5px, 5px -5px, -5px 0px;
}

/* 优化滑块样式 */
input[type=range] {
  -webkit-appearance: none;
  height: 8px;
  border-radius: 4px;
  outline: none;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

input[type=range]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
</style> 