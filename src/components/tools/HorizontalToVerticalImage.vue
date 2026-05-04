<template>
  <div class="w-full mx-auto p-0 sm:p-2">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-3">
      <!-- 上传区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 md:p-6">
        <h2 class="text-xl font-bold mb-4">{{ $t('tools.horizontal-to-vertical-image.upload.title') }}</h2>
        
        <div 
          @dragover.prevent="onDragover" 
          @dragleave.prevent="isDragging = false"
          @drop.prevent="onFileDrop"
          :class="[
            'border-2 border-dashed rounded-lg p-6 text-center transition-all',
            isDragging ? 'border-primary bg-primary/5' : 'border-gray-300 dark:border-gray-600',
            'hover:border-primary hover:bg-primary/5'
          ]"
        >
          <div v-if="!previewImage">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p class="mt-4 text-gray-600 dark:text-gray-400">{{ $t('tools.horizontal-to-vertical-image.upload.dropzone') }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-500 mt-2">{{ $t('tools.horizontal-to-vertical-image.upload.maxSize') }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-500 mt-1">{{ $t('tools.horizontal-to-vertical-image.upload.supportedFormats') }}</p>
            <button 
              @click="triggerFileInput" 
              class="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
            >
              {{ $t('tools.horizontal-to-vertical-image.actions.selectImage') }}
            </button>
            <input 
              ref="fileInput" 
              type="file" 
              class="hidden" 
              accept="image/jpeg,image/png,image/webp,image/gif"
              @change="onFileSelected" 
            />
          </div>
          <div v-else class="relative">
            <img :src="previewImage" class="max-w-full mx-auto max-h-72 rounded" />
            <button 
              @click="resetImage" 
              class="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- 转换设置 -->
        <div v-if="previewImage" class="mt-6">
          <h3 class="font-bold mb-3">{{ $t('tools.horizontal-to-vertical-image.settings.title') }}</h3>
          
          <!-- 预设选项 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ $t('tools.horizontal-to-vertical-image.settings.presets') }}
            </label>
            <div class="grid grid-cols-3 gap-2">
              <button 
                v-for="preset in presets" 
                :key="preset.name"
                @click="applyPreset(preset)"
                class="px-2 py-1 text-xs rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {{ preset.name }}
              </button>
            </div>
          </div>
          
          <div class="space-y-4">
            <!-- 转换模式 -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.horizontal-to-vertical-image.settings.conversionMode') }}
              </label>
              <select 
                v-model="settings.mode" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                <option value="crop">{{ $t('tools.horizontal-to-vertical-image.settings.modes.crop') }}</option>
                <option value="fill">{{ $t('tools.horizontal-to-vertical-image.settings.modes.fill') }}</option>
                <option value="blur">{{ $t('tools.horizontal-to-vertical-image.settings.modes.blur') }}</option>
                <option value="stretch">{{ $t('tools.horizontal-to-vertical-image.settings.modes.stretch') }}</option>
                <option value="dual-color">{{ $t('tools.horizontal-to-vertical-image.settings.modes.dualColor') }}</option>
              </select>
            </div>
            
            <!-- 模式特定设置 -->
            <div v-if="settings.mode === 'crop'">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.horizontal-to-vertical-image.settings.cropPosition') }}
              </label>
              <div class="grid grid-cols-3 gap-2">
                <button 
                  @click="settings.cropPosition = 'left'"
                  class="px-3 py-2 rounded border" 
                  :class="settings.cropPosition === 'left' ? 'bg-primary text-white' : 'border-gray-300 dark:border-gray-600'"
                >
                  {{ $t('tools.horizontal-to-vertical-image.settings.positions.left') }}
                </button>
                <button 
                  @click="settings.cropPosition = 'center'"
                  class="px-3 py-2 rounded border" 
                  :class="settings.cropPosition === 'center' ? 'bg-primary text-white' : 'border-gray-300 dark:border-gray-600'"
                >
                  {{ $t('tools.horizontal-to-vertical-image.settings.positions.center') }}
                </button>
                <button 
                  @click="settings.cropPosition = 'right'"
                  class="px-3 py-2 rounded border" 
                  :class="settings.cropPosition === 'right' ? 'bg-primary text-white' : 'border-gray-300 dark:border-gray-600'"
                >
                  {{ $t('tools.horizontal-to-vertical-image.settings.positions.right') }}
                </button>
              </div>
            </div>
            
            <div v-if="settings.mode === 'fill'">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.horizontal-to-vertical-image.settings.fillColor') }}
              </label>
              <input 
                v-model="settings.fillColor" 
                type="color" 
                class="w-full h-10 p-0 border-0"
              />
            </div>
            
            <div v-if="settings.mode === 'blur'">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.horizontal-to-vertical-image.settings.blurRadius') }}
              </label>
              <input 
                v-model="settings.blurRadius" 
                type="range" 
                min="0" 
                max="20" 
                step="0.5"
                class="w-full"
              />
              <div class="text-center text-sm">{{ settings.blurRadius }}px</div>
            </div>
            
            <div v-if="settings.mode === 'stretch'">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.horizontal-to-vertical-image.settings.stretchFactor') }}
              </label>
              <input 
                v-model="settings.stretchAmount" 
                type="range" 
                min="0" 
                max="50" 
                step="1"
                class="w-full"
              />
              <div class="text-center text-sm">{{ settings.stretchAmount }}%</div>
            </div>
            
            <div v-if="settings.mode === 'dual-color'">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.horizontal-to-vertical-image.settings.topColor') }}
                </label>
                <input 
                  v-model="settings.topColor" 
                  type="color" 
                  class="w-full h-8 p-0 border-0 mb-2"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.horizontal-to-vertical-image.settings.bottomColor') }}
                </label>
                <input 
                  v-model="settings.bottomColor" 
                  type="color" 
                  class="w-full h-8 p-0 border-0"
                />
              </div>
            </div>
            
            <!-- 尺寸设置类型 -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.horizontal-to-vertical-image.settings.sizeOption') }}
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button 
                  @click="settings.sizeMode = 'auto'"
                  class="px-3 py-2 rounded border" 
                  :class="settings.sizeMode === 'auto' ? 'bg-primary text-white' : 'border-gray-300 dark:border-gray-600'"
                >
                  {{ $t('tools.horizontal-to-vertical-image.settings.sizeModes.auto') }}
                </button>
                <button 
                  @click="settings.sizeMode = 'preset'"
                  class="px-3 py-2 rounded border" 
                  :class="settings.sizeMode === 'preset' ? 'bg-primary text-white' : 'border-gray-300 dark:border-gray-600'"
                >
                  {{ $t('tools.horizontal-to-vertical-image.settings.sizeModes.preset') }}
                </button>
                <button 
                  @click="settings.sizeMode = 'custom'"
                  class="px-3 py-2 rounded border" 
                  :class="settings.sizeMode === 'custom' ? 'bg-primary text-white' : 'border-gray-300 dark:border-gray-600'"
                >
                  {{ $t('tools.horizontal-to-vertical-image.settings.sizeModes.custom') }}
                </button>
              </div>
            </div>
            
            <!-- 尺寸预设选择 -->
            <div v-if="settings.sizeMode === 'preset'">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.horizontal-to-vertical-image.settings.sizePresets') }}
              </label>
              <select 
                v-model="selectedSizePreset" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                @change="applySizePreset"
              >
                <option v-for="preset in sizePresets" :key="preset.name" :value="preset.id">
                  {{ preset.name }} ({{ preset.width }}×{{ preset.height }})
                </option>
              </select>
            </div>
            
            <!-- 自定义尺寸 -->
            <div v-if="settings.sizeMode === 'custom'">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.horizontal-to-vertical-image.settings.outputSize') }}
              </label>
              <div class="flex space-x-2">
                <input 
                  v-model="settings.width" 
                  type="number" 
                  :placeholder="$t('tools.horizontal-to-vertical-image.settings.width')"
                  class="w-1/2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                <input 
                  v-model="settings.height" 
                  type="number" 
                  :placeholder="$t('tools.horizontal-to-vertical-image.settings.height')"
                  class="w-1/2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {{ $t('tools.horizontal-to-vertical-image.settings.dimensionsHint') }}
              </div>
            </div>
            
            <!-- 输出格式 -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.horizontal-to-vertical-image.settings.outputFormat') }}
              </label>
              <select 
                v-model="settings.format" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                <option value="jpeg">JPEG</option>
                <option value="png">PNG</option>
                <option value="webp">WEBP</option>
              </select>
            </div>
            
            <!-- 质量设置 (只对JPEG和WEBP有效) -->
            <div v-if="settings.format !== 'png'">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.horizontal-to-vertical-image.settings.quality') }}
              </label>
              <input 
                v-model="settings.quality" 
                type="range" 
                min="0" 
                max="100" 
                step="1"
                class="w-full"
              />
              <div class="text-center text-sm">{{ settings.quality }}%</div>
            </div>
            
            <!-- 高级选项 -->
            <div>
              <button 
                @click="showAdvanced = !showAdvanced" 
                class="flex items-center text-sm text-gray-700 dark:text-gray-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-4 w-4 mr-1 transition-transform" 
                  :class="{ 'rotate-90': showAdvanced }"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                {{ $t('tools.horizontal-to-vertical-image.settings.advancedOptions') }}
              </button>
              
              <div v-if="showAdvanced" class="mt-3 pl-4 border-l-2 border-gray-300 dark:border-gray-600 space-y-3">
                <!-- 保持图像比例选项 -->
                <div class="flex items-center">
                  <input 
                    v-model="settings.preserveRatio" 
                    type="checkbox" 
                    id="preserveRatio" 
                    class="mr-2"
                  />
                  <label for="preserveRatio" class="text-sm text-gray-700 dark:text-gray-300">
                    {{ $t('tools.horizontal-to-vertical-image.settings.preserveRatio') }}
                  </label>
                </div>
                
                <!-- 锐化选项 -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {{ $t('tools.horizontal-to-vertical-image.settings.sharpen') }}
                  </label>
                  <input 
                    v-model="settings.sharpen" 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="1"
                    class="w-full"
                  />
                  <div class="text-center text-sm">{{ settings.sharpen }}%</div>
                </div>
                
                <!-- 添加水印选项 -->
                <div class="flex items-center">
                  <input 
                    v-model="settings.addWatermark" 
                    type="checkbox" 
                    id="addWatermark" 
                    class="mr-2"
                  />
                  <label for="addWatermark" class="text-sm text-gray-700 dark:text-gray-300">
                    {{ $t('tools.horizontal-to-vertical-image.settings.addWatermark') }}
                  </label>
                </div>
                
                <!-- 水印设置 -->
                <div v-if="settings.addWatermark" class="pl-4 border-l border-gray-300 dark:border-gray-600 space-y-2">
                  <input 
                    v-model="settings.watermarkText" 
                    type="text" 
                    :placeholder="$t('tools.horizontal-to-vertical-image.settings.watermarkPlaceholder')"
                    class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                  <div>
                    <label class="block text-xs text-gray-700 dark:text-gray-300 mb-1">
                      {{ $t('tools.horizontal-to-vertical-image.settings.watermarkColor') }}
                    </label>
                    <input 
                      v-model="settings.watermarkColor" 
                      type="color" 
                      class="w-full h-8 p-0 border-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div v-if="previewImage" class="mt-6">
          <button 
            @click="convertImage" 
            class="w-full px-4 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition"
            :disabled="processing"
          >
            <span v-if="processing">
              <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ $t('tools.horizontal-to-vertical-image.messages.processing') }}
            </span>
            <span v-else>{{ $t('tools.horizontal-to-vertical-image.actions.convert') }}</span>
          </button>
        </div>
      </div>
      
      <!-- 结果区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 md:p-6">
        <h2 class="text-xl font-bold mb-4">{{ $t('tools.horizontal-to-vertical-image.output.preview') }}</h2>
        
        <div v-if="!outputImage && !processing" class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center min-h-[200px] flex items-center justify-center">
          <p class="text-gray-500 dark:text-gray-400">{{ $t('tools.horizontal-to-vertical-image.messages.convertPrompt') }}</p>
        </div>
        
        <div v-else-if="processing" class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center min-h-[200px] flex flex-col items-center justify-center">
          <svg class="animate-spin h-10 w-10 text-primary mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.horizontal-to-vertical-image.messages.processing') }}</p>
        </div>
        
        <div v-else-if="outputImage" class="text-center">
          <div v-if="showBeforeAfter" class="grid grid-cols-2 gap-2 mb-4 relative">
            <div class="flex flex-col items-center">
              <span class="text-xs text-gray-500 mb-1">{{ $t('tools.horizontal-to-vertical-image.output.before') }}</span>
              <img :src="previewImage" class="max-w-full max-h-[150px] rounded" />
            </div>
            <div class="flex flex-col items-center">
              <span class="text-xs text-gray-500 mb-1">{{ $t('tools.horizontal-to-vertical-image.output.after') }}</span>
              <img :src="outputImage" class="w-full max-h-[70vh] object-contain mx-auto rounded" />
            </div>
            <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition bg-black/20 rounded">
              <button @click="showBeforeAfter = false" class="px-2 py-1 bg-white text-gray-800 rounded text-xs">
                {{ $t('tools.horizontal-to-vertical-image.actions.hideSideBySide') }}
              </button>
            </div>
          </div>
          
          <div v-else>
            <img :src="outputImage" class="w-full max-h-[70vh] object-contain mx-auto rounded" />
          </div>
          
          <div class="mt-4 grid grid-cols-2 gap-2">
            <button 
              @click="downloadImage" 
              class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
            >
              {{ $t('tools.horizontal-to-vertical-image.actions.download') }}
            </button>
            <button 
              v-if="!showBeforeAfter"
              @click="showBeforeAfter = true" 
              class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              {{ $t('tools.horizontal-to-vertical-image.actions.showSideBySide') }}
            </button>
            <button
              v-else
              @click="showBeforeAfter = false"
              class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              {{ $t('tools.horizontal-to-vertical-image.actions.hideComparison') }}
            </button>
          </div>
          
          <div class="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>{{ $t('tools.horizontal-to-vertical-image.output.dimensions') }}: {{ settings.width }}×{{ settings.height }}</p>
          </div>
        </div>
        
        <!-- 实用提示和用法示例 -->
        <div v-if="!outputImage && !processing" class="mt-8">
          <h3 class="font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.horizontal-to-vertical-image.examples.title') }}</h3>
          <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:shadow-md transition">
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ $t('tools.horizontal-to-vertical-image.examples.social') }}</p>
              <div class="flex items-center text-xs text-gray-500 dark:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ $t('tools.horizontal-to-vertical-image.examples.socialTip') }}
              </div>
            </div>
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:shadow-md transition">
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ $t('tools.horizontal-to-vertical-image.examples.mobile') }}</p>
              <div class="flex items-center text-xs text-gray-500 dark:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ $t('tools.horizontal-to-vertical-image.examples.mobileTip') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 可选: 添加文章组件 -->
    <HorizontalToVerticalImageArticle />
  </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import HorizontalToVerticalImageArticle from './HorizontalToVerticalImageArticle.vue';

// 状态变量
import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const fileInput = ref(null);
const isDragging = ref(false);
const previewImage = ref(null);
const outputImage = ref(null);
const processing = ref(false);
const originalImage = ref(null);

// 显示高级选项
const showAdvanced = ref(false);
// 显示前后对比
const showBeforeAfter = ref(false);

// 转换设置
const settings = reactive({
  mode: 'blur',
  cropPosition: 'center',
  fillColor: '#000000',
  blurRadius: 5,
  width: 1080,
  height: 1920,
  format: 'jpeg',
  quality: 90,
  sizeMode: 'auto',
  stretchAmount: 20,
  topColor: '#000000',
  bottomColor: '#ffffff',
  preserveRatio: true,
  sharpen: 0,
  addWatermark: false,
  watermarkText: '',
  watermarkColor: '#ffffff'
});

// 预设选项
const presets = [
  { name: 'Instagram Story', mode: 'blur', width: 1080, height: 1920, blurRadius: 5 },
  { name: 'TikTok', mode: 'crop', width: 1080, height: 1920, cropPosition: 'center' },
  { name: 'Pinterest', mode: 'dual-color', width: 1000, height: 1500, topColor: '#dd2a7b', bottomColor: '#8134af' },
  { name: 'Story', mode: 'blur', width: 1080, height: 1920, blurRadius: 8 },
  { name: 'Mobile Wallpaper', mode: 'fill', width: 1440, height: 2560, fillColor: '#0077b5' },
  { name: 'Weibo', mode: 'stretch', width: 900, height: 1600, stretchAmount: 20 }
];

// 尺寸预设
const sizePresets = [
  { id: 'instagram-story', name: 'Instagram Story', width: 1080, height: 1920 },
  { id: 'tiktok', name: 'TikTok', width: 1080, height: 1920 },
  { id: 'pinterest', name: 'Pinterest', width: 1000, height: 1500 },
  { id: 'wallpaper-hd', name: 'Mobile HD', width: 1440, height: 2560 },
  { id: 'wallpaper-fhd', name: 'Mobile FHD', width: 1080, height: 1920 },
  { id: 'portrait-4k', name: 'Portrait 4K', width: 2160, height: 3840 },
  { id: 'story-general', name: 'Social Story', width: 1080, height: 1920 }
];

// 尺寸预设选择
const selectedSizePreset = ref('instagram-story');

// 应用预设
function applyPreset(preset) {
  settings.mode = preset.mode;
  settings.width = preset.width;
  settings.height = preset.height;
  
  // 应用特定模式的设置
  if (preset.mode === 'blur') {
    settings.blurRadius = preset.blurRadius;
  } else if (preset.mode === 'fill') {
    settings.fillColor = preset.fillColor;
  } else if (preset.mode === 'dual-color') {
    settings.topColor = preset.topColor;
    settings.bottomColor = preset.bottomColor;
  } else if (preset.mode === 'stretch') {
    settings.stretchAmount = preset.stretchAmount;
  } else if (preset.mode === 'crop') {
    settings.cropPosition = preset.cropPosition;
  }
  
  settings.sizeMode = 'custom'; // 切换到自定义尺寸模式
}

// 应用尺寸预设
function applySizePreset() {
  const preset = sizePresets.find(p => p.id === selectedSizePreset.value);
  if (preset) {
    settings.width = preset.width;
    settings.height = preset.height;
  }
}

// 触发文件选择
function triggerFileInput() {
  fileInput.value.click();
}

// 文件拖拽处理
function onDragover(e) {
  isDragging.value = true;
}

// 文件拖放处理
function onFileDrop(e) {
  isDragging.value = false;
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    processFile(files[0]);
  }
}

// 文件选择处理
function onFileSelected(e) {
  const files = e.target.files;
  if (files.length > 0) {
    processFile(files[0]);
  }
}

// 处理文件
function processFile(file) {
  if (!file.type.match('image.*')) {
    toastRef.value.show($t('tools.horizontal-to-vertical-image.messages.imageOnly'));
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    previewImage.value = e.target.result;
    // 预加载图像以获取原始尺寸
    const img = new Image();
    img.onload = () => {
      originalImage.value = {
        width: img.width,
        height: img.height,
        aspectRatio: img.width / img.height,
        element: img
      };
      
      // 如果是自动尺寸，计算合适的输出尺寸
      if (settings.sizeMode === 'auto') {
        calculateOutputSize();
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// 计算输出尺寸
function calculateOutputSize() {
  if (!originalImage.value) return;
  
  // 如果是横向图像，计算适合的竖向尺寸
  if (originalImage.value.aspectRatio > 1) {
    // 转为9:16的竖图
    const targetRatio = 9/16;
    const width = Math.min(originalImage.value.width, 1080); // 限制最大宽度
    const height = Math.round(width / targetRatio);
    
    settings.width = width;
    settings.height = height;
  } else { // 已经是竖图
    settings.width = originalImage.value.width;
    settings.height = originalImage.value.height;
  }
}

// 转换图像
function convertImage() {
  if (!previewImage.value || !originalImage.value) return;
  
  processing.value = true;
  
  // 使用setTimeout允许UI更新显示加载状态
  setTimeout(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // 设置画布尺寸
    canvas.width = settings.width;
    canvas.height = settings.height;
    
    // 根据不同模式处理图像
    switch (settings.mode) {
      case 'crop':
        processCropMode(canvas, ctx);
        break;
      case 'fill':
        processFillMode(canvas, ctx);
        break;
      case 'blur':
        processBlurMode(canvas, ctx);
        break;
      case 'stretch':
        processStretchMode(canvas, ctx);
        break;
      case 'dual-color':
        processDualColorMode(canvas, ctx);
        break;
    }
    
    // 应用水印
    if (settings.addWatermark && settings.watermarkText) {
      applyWatermark(canvas, ctx);
    }
    
    // 应用锐化
    if (settings.sharpen > 0) {
      applySharpen(canvas, ctx);
    }
    
    // 生成输出图像
    outputImage.value = canvas.toDataURL(`image/${settings.format}`, settings.quality / 100);
    processing.value = false;
  }, 100);
}

// 裁剪模式处理
function processCropMode(canvas, ctx) {
  const img = originalImage.value.element;
  
  // 清除画布
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // 计算裁剪区域
  const aspectRatio = canvas.height / canvas.width;
  let sx, sy, sWidth, sHeight;
  
  // 确定源图像上的裁剪区域
  if (img.height / img.width > aspectRatio) {
    // 源图像已经是竖直方向占优势，裁剪顶部和底部
    sWidth = img.width;
    sHeight = img.width * aspectRatio;
    sx = 0;
    sy = (img.height - sHeight) / 2;
  } else {
    // 源图像是横向占优势，裁剪左右两侧
    sHeight = img.height;
    sWidth = img.height / aspectRatio;
    sy = 0;
    
    // 根据裁剪位置决定从哪里裁剪
    if (settings.cropPosition === 'left') {
      sx = 0;
    } else if (settings.cropPosition === 'right') {
      sx = img.width - sWidth;
    } else { // center
      sx = (img.width - sWidth) / 2;
    }
  }
  
  // 绘制裁剪后的图像
  ctx.drawImage(
    img,
    sx, sy, sWidth, sHeight, // 源图像的裁剪区域
    0, 0, canvas.width, canvas.height // 目标区域（整个画布）
  );
}

// 填充模式处理
function processFillMode(canvas, ctx) {
  const img = originalImage.value.element;
  
  // 填充背景颜色
  ctx.fillStyle = settings.fillColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // 计算图像适合的尺寸
  const imgAspectRatio = img.width / img.height;
  const canvasAspectRatio = canvas.width / canvas.height;
  
  let drawWidth, drawHeight;
  
  if (imgAspectRatio > canvasAspectRatio) {
    // 图像比画布更宽，基于高度适配
    drawHeight = canvas.height * 0.8; // 预留一些边距
    drawWidth = drawHeight * imgAspectRatio;
  } else {
    // 图像比画布更高或相等，基于宽度适配
    drawWidth = canvas.width * 0.8; // 预留一些边距
    drawHeight = drawWidth / imgAspectRatio;
  }
  
  // 计算居中位置
  const x = (canvas.width - drawWidth) / 2;
  const y = (canvas.height - drawHeight) / 2;
  
  // 绘制图像
  ctx.drawImage(img, x, y, drawWidth, drawHeight);
}

// 模糊背景模式处理
function processBlurMode(canvas, ctx) {
  const img = originalImage.value.element;
  
  // 先绘制填充整个画布的图像（会被拉伸）
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  
  // 应用模糊滤镜
  ctx.filter = `blur(${settings.blurRadius}px)`;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  
  // 重置滤镜
  ctx.filter = 'none';
  
  // 计算居中的图像尺寸
  const imgAspectRatio = img.width / img.height;
  const canvasAspectRatio = canvas.width / canvas.height;
  
  let drawWidth, drawHeight;
  
  if (imgAspectRatio > canvasAspectRatio) {
    // 横向图像，基于高度适配
    drawWidth = canvas.width * 0.8; // 使用80%的画布宽度
    drawHeight = drawWidth / imgAspectRatio;
  } else {
    // 竖向图像，基于宽度适配
    drawHeight = canvas.height * 0.8; // 使用80%的画布高度
    drawWidth = drawHeight * imgAspectRatio;
  }
  
  // 计算居中位置
  const x = (canvas.width - drawWidth) / 2;
  const y = (canvas.height - drawHeight) / 2;
  
  // 在模糊的背景上绘制清晰的原始图像
  ctx.drawImage(img, x, y, drawWidth, drawHeight);
}

// 拉伸模式处理
function processStretchMode(canvas, ctx) {
  const img = originalImage.value.element;
  
  // 清除画布
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // 计算中心区域大小（保持一定的纵横比）
  const centerWidth = canvas.width * (1 - settings.stretchAmount / 100);
  const centerHeight = canvas.height;
  
  // 绘制顶部和底部拉伸区域（如果需要）
  if (settings.stretchAmount > 0) {
    // 绘制左右两侧拉伸区域
    const stretchWidth = (canvas.width - centerWidth) / 2;
    
    // 左侧拉伸
    ctx.drawImage(
      img,
      0, 0, 1, img.height, // 源图像最左边1像素
      0, 0, stretchWidth, canvas.height // 目标位置左侧
    );
    
    // 右侧拉伸
    ctx.drawImage(
      img,
      img.width - 1, 0, 1, img.height, // 源图像最右边1像素
      canvas.width - stretchWidth, 0, stretchWidth, canvas.height // 目标位置右侧
    );
  }
  
  // 绘制中央未拉伸区域
  ctx.drawImage(
    img,
    0, 0, img.width, img.height, // 整个源图像
    (canvas.width - centerWidth) / 2, 0, centerWidth, centerHeight // 目标位置居中
  );
}

// 双色模式处理
function processDualColorMode(canvas, ctx) {
  const img = originalImage.value.element;
  
  // 创建垂直渐变
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, settings.topColor);
  gradient.addColorStop(1, settings.bottomColor);
  
  // 填充背景
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // 计算图像尺寸以保持原始纵横比
  const imgAspectRatio = img.width / img.height;
  const canvasAspectRatio = canvas.width / canvas.height;
  
  let drawWidth, drawHeight;
  
  if (imgAspectRatio > canvasAspectRatio) {
    // 横向图像，基于高度适配
    drawWidth = canvas.width * 0.8; // 使用80%的画布宽度
    drawHeight = drawWidth / imgAspectRatio;
  } else {
    // 竖向图像，基于宽度适配
    drawHeight = canvas.height * 0.8; // 使用80%的画布高度
    drawWidth = drawHeight * imgAspectRatio;
  }
  
  // 计算居中位置
  const x = (canvas.width - drawWidth) / 2;
  const y = (canvas.height - drawHeight) / 2;
  
  // 绘制图像
  ctx.drawImage(img, x, y, drawWidth, drawHeight);
}

// 应用水印
function applyWatermark(canvas, ctx) {
  const text = settings.watermarkText;
  const fontSize = Math.max(12, canvas.width * 0.02); // 根据画布大小自适应
  
  ctx.font = `${fontSize}px Arial`;
  ctx.fillStyle = settings.watermarkColor;
  ctx.globalAlpha = 0.7; // 半透明
  
  // 测量文本宽度
  const textWidth = ctx.measureText(text).width;
  
  // 在底部中央绘制文本
  ctx.fillText(text, (canvas.width - textWidth) / 2, canvas.height - 20);
  
  // 重置透明度
  ctx.globalAlpha = 1.0;
}

// 应用锐化效果
function applySharpen(canvas, ctx) {
  // 简单的锐化实现，实际上可以使用更复杂的卷积滤镜
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  const amount = settings.sharpen / 100 * 0.5; // 将百分比转换为合理的强度值
  
  // 创建一个临时的副本图像
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  const tempCtx = tempCanvas.getContext('2d');
  tempCtx.putImageData(imageData, 0, 0);
  
  // 在主画布上绘制一个半透明的锐化版本
  ctx.globalAlpha = amount;
  ctx.filter = 'contrast(150%)';
  ctx.drawImage(tempCanvas, 0, 0);
  ctx.globalAlpha = 1.0;
  ctx.filter = 'none';
}

// 重置图像
function resetImage() {
  previewImage.value = null;
  outputImage.value = null;
  processing.value = false;
}

// 下载图像
function downloadImage() {
  if (!outputImage.value) return;
  
  const link = document.createElement('a');
  link.href = outputImage.value;
  link.download = 'converted_image.jpg';
  link.click();
}
</script>
