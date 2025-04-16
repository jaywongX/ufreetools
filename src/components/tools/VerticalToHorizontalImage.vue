<template>
  <div class="w-full mx-auto p-0 sm:p-2">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-3">
      <!-- 上传区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 md:p-6">
        <h2 class="text-xl font-bold mb-4">{{ $t('tools.vertical-to-horizontal-image.upload.title') }}</h2>
        
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
            <p class="mt-4 text-gray-600 dark:text-gray-400">{{ $t('tools.vertical-to-horizontal-image.upload.dropzone') }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-500 mt-2">{{ $t('tools.vertical-to-horizontal-image.upload.maxSize') }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-500 mt-1">{{ $t('tools.vertical-to-horizontal-image.upload.supportedFormats') }}</p>
            <button 
              @click="triggerFileInput" 
              class="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
            >
              {{ $t('tools.vertical-to-horizontal-image.actions.selectImage') }}
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
          <h3 class="font-bold mb-3">{{ $t('tools.vertical-to-horizontal-image.settings.title') }}</h3>
          
          <!-- 预设选项 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ $t('tools.vertical-to-horizontal-image.settings.presets') }}
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
                {{ $t('tools.vertical-to-horizontal-image.settings.conversionMode') }}
              </label>
              <select 
                v-model="settings.mode" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                <option value="rotate">{{ $t('tools.vertical-to-horizontal-image.settings.modes.rotate') }}</option>
                <option value="fill">{{ $t('tools.vertical-to-horizontal-image.settings.modes.fill') }}</option>
                <option value="blur">{{ $t('tools.vertical-to-horizontal-image.settings.modes.blur') }}</option>
                <option value="stretch">{{ $t('tools.vertical-to-horizontal-image.settings.modes.stretch') }}</option>
                <option value="dual-color">{{ $t('tools.vertical-to-horizontal-image.settings.modes.dualColor') }}</option>
              </select>
            </div>
            
            <!-- 模式特定设置 -->
            <div v-if="settings.mode === 'rotate'">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.vertical-to-horizontal-image.settings.rotationAngle') }}
              </label>
              <input 
                v-model="settings.rotationAngle" 
                type="range" 
                min="-90" 
                max="90" 
                step="1"
                class="w-full"
              />
              <div class="text-center text-sm">{{ settings.rotationAngle }}°</div>
            </div>
            
            <div v-if="settings.mode === 'fill'">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.vertical-to-horizontal-image.settings.fillColor') }}
              </label>
              <input 
                v-model="settings.fillColor" 
                type="color" 
                class="w-full h-10 p-0 border-0"
              />
            </div>
            
            <div v-if="settings.mode === 'blur'">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.vertical-to-horizontal-image.settings.blurRadius') }}
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
                {{ $t('tools.vertical-to-horizontal-image.settings.stretchEdges') }}
              </label>
              <input 
                v-model="settings.stretchAmount" 
                type="range" 
                min="0" 
                max="50" 
                step="1"
                class="w-full"
              />
              <div class="text-center text-sm">{{ settings.stretchAmount }}px</div>
            </div>
            
            <div v-if="settings.mode === 'dual-color'">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.vertical-to-horizontal-image.settings.leftColor') }}
                </label>
                <input 
                  v-model="settings.leftColor" 
                  type="color" 
                  class="w-full h-8 p-0 border-0 mb-2"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.vertical-to-horizontal-image.settings.rightColor') }}
                </label>
                <input 
                  v-model="settings.rightColor" 
                  type="color" 
                  class="w-full h-8 p-0 border-0"
                />
              </div>
            </div>
            
            <!-- 尺寸设置类型 -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.vertical-to-horizontal-image.settings.sizeOption') }}
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button 
                  @click="settings.sizeMode = 'auto'"
                  class="px-3 py-2 rounded border" 
                  :class="settings.sizeMode === 'auto' ? 'bg-primary text-white' : 'border-gray-300 dark:border-gray-600'"
                >
                  {{ $t('tools.vertical-to-horizontal-image.settings.sizeModes.auto') }}
                </button>
                <button 
                  @click="settings.sizeMode = 'preset'"
                  class="px-3 py-2 rounded border" 
                  :class="settings.sizeMode === 'preset' ? 'bg-primary text-white' : 'border-gray-300 dark:border-gray-600'"
                >
                  {{ $t('tools.vertical-to-horizontal-image.settings.sizeModes.preset') }}
                </button>
                <button 
                  @click="settings.sizeMode = 'custom'"
                  class="px-3 py-2 rounded border" 
                  :class="settings.sizeMode === 'custom' ? 'bg-primary text-white' : 'border-gray-300 dark:border-gray-600'"
                >
                  {{ $t('tools.vertical-to-horizontal-image.settings.sizeModes.custom') }}
                </button>
              </div>
            </div>
            
            <!-- 尺寸预设选择 -->
            <div v-if="settings.sizeMode === 'preset'">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.vertical-to-horizontal-image.settings.sizePresets') }}
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
                {{ $t('tools.vertical-to-horizontal-image.settings.outputSize') }}
              </label>
              <div class="flex space-x-2">
                <input 
                  v-model="settings.width" 
                  type="number" 
                  :placeholder="$t('tools.vertical-to-horizontal-image.settings.width')"
                  class="w-1/2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                <input 
                  v-model="settings.height" 
                  type="number" 
                  :placeholder="$t('tools.vertical-to-horizontal-image.settings.height')"
                  class="w-1/2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {{ $t('tools.vertical-to-horizontal-image.settings.dimensionsHint') }}
              </div>
            </div>
            
            <!-- 输出格式 -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.vertical-to-horizontal-image.settings.outputFormat') }}
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
                {{ $t('tools.vertical-to-horizontal-image.settings.quality') }}
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
                {{ $t('tools.vertical-to-horizontal-image.settings.advancedOptions') }}
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
                    {{ $t('tools.vertical-to-horizontal-image.settings.preserveRatio') }}
                  </label>
                </div>
                
                <!-- 锐化选项 -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {{ $t('tools.vertical-to-horizontal-image.settings.sharpen') }}
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
                    {{ $t('tools.vertical-to-horizontal-image.settings.addWatermark') }}
                  </label>
                </div>
                
                <!-- 水印设置 -->
                <div v-if="settings.addWatermark" class="pl-4 border-l border-gray-300 dark:border-gray-600 space-y-2">
                  <input 
                    v-model="settings.watermarkText" 
                    type="text" 
                    :placeholder="$t('tools.vertical-to-horizontal-image.settings.watermarkPlaceholder')"
                    class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                  <div>
                    <label class="block text-xs text-gray-700 dark:text-gray-300 mb-1">
                      {{ $t('tools.vertical-to-horizontal-image.settings.watermarkColor') }}
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
              {{ $t('tools.vertical-to-horizontal-image.messages.processing') }}
            </span>
            <span v-else>{{ $t('tools.vertical-to-horizontal-image.actions.convert') }}</span>
          </button>
        </div>
      </div>
      
      <!-- 结果区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 md:p-6">
        <h2 class="text-xl font-bold mb-4">{{ $t('tools.vertical-to-horizontal-image.output.preview') }}</h2>
        
        <div v-if="!outputImage && !processing" class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center min-h-[200px] flex items-center justify-center">
          <p class="text-gray-500 dark:text-gray-400">{{ $t('tools.vertical-to-horizontal-image.messages.convertPrompt') }}</p>
        </div>
        
        <div v-else-if="processing" class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center min-h-[200px] flex flex-col items-center justify-center">
          <svg class="animate-spin h-10 w-10 text-primary mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.vertical-to-horizontal-image.messages.processing') }}</p>
        </div>
        
        <div v-else-if="outputImage" class="text-center">
          <div v-if="showBeforeAfter" class="grid grid-cols-2 gap-2 mb-4 relative">
            <div class="flex flex-col items-center">
              <span class="text-xs text-gray-500 mb-1">{{ $t('tools.vertical-to-horizontal-image.output.before') }}</span>
              <img :src="previewImage" class="max-w-full max-h-[150px] rounded" />
            </div>
            <div class="flex flex-col items-center">
              <span class="text-xs text-gray-500 mb-1">{{ $t('tools.vertical-to-horizontal-image.output.after') }}</span>
              <img :src="outputImage" class="w-full max-h-[70vh] object-contain mx-auto rounded" />
            </div>
            <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition bg-black/20 rounded">
              <button @click="showBeforeAfter = false" class="px-2 py-1 bg-white text-gray-800 rounded text-xs">
                {{ $t('tools.vertical-to-horizontal-image.actions.hideSideBySide') }}
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
              {{ $t('tools.vertical-to-horizontal-image.actions.download') }}
            </button>
            <button 
              v-if="!showBeforeAfter"
              @click="showBeforeAfter = true" 
              class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              {{ $t('tools.vertical-to-horizontal-image.actions.showSideBySide') }}
            </button>
            <button
              v-else
              @click="showBeforeAfter = false"
              class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              {{ $t('tools.vertical-to-horizontal-image.actions.hideComparison') }}
            </button>
          </div>
          
          <div class="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>{{ $t('tools.vertical-to-horizontal-image.output.dimensions') }}: {{ settings.width }}×{{ settings.height }}</p>
          </div>
        </div>
        
        <!-- 实用提示和用法示例 -->
        <div v-if="!outputImage && !processing" class="mt-8">
          <h3 class="font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.vertical-to-horizontal-image.examples.title') }}</h3>
          <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:shadow-md transition">
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ $t('tools.vertical-to-horizontal-image.examples.social') }}</p>
              <div class="flex items-center text-xs text-gray-500 dark:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ $t('tools.vertical-to-horizontal-image.examples.socialTip') }}
              </div>
            </div>
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:shadow-md transition">
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ $t('tools.vertical-to-horizontal-image.examples.website') }}</p>
              <div class="flex items-center text-xs text-gray-500 dark:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ $t('tools.vertical-to-horizontal-image.examples.websiteTip') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 引入文章组件 -->
    <VerticalToHorizontalImageArticle />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import VerticalToHorizontalImageArticle from './VerticalToHorizontalImageArticle.vue';

// 状态变量
const fileInput = ref(null);
const isDragging = ref(false);
const previewImage = ref(null);
const outputImage = ref(null);
const processing = ref(false);
const originalImage = ref(null);

// 转换设置
const settings = reactive({
  mode: 'blur',
  rotationAngle: 0,
  fillColor: '#000000',
  blurRadius: 5,
  width: 1200,
  height: 630,
  autoSize: true,
  format: 'jpeg',
  quality: 90
});

// 显示高级选项
const showAdvanced = ref(false);
// 显示前后对比
const showBeforeAfter = ref(false);

// 预设选项
const presets = [
  { name: 'Instagram', mode: 'blur', width: 1080, height: 566, blurRadius: 5 },
  { name: 'Facebook', mode: 'dual-color', width: 1200, height: 630, leftColor: '#3b5998', rightColor: '#8b9dc3' },
  { name: 'Twitter', mode: 'fill', width: 1200, height: 675, fillColor: '#1da1f2' },
  { name: 'YouTube', mode: 'blur', width: 1280, height: 720, blurRadius: 8 },
  { name: 'LinkedIn', mode: 'fill', width: 1104, height: 736, fillColor: '#0077b5' },
  { name: 'Pinterest', mode: 'stretch', width: 1000, height: 1500, stretchAmount: 20 }
];

// 尺寸预设
const sizePresets = [
  { id: 'instagram', name: 'Instagram', width: 1080, height: 566 },
  { id: 'facebook', name: 'Facebook', width: 1200, height: 630 },
  { id: 'twitter', name: 'Twitter', width: 1200, height: 675 },
  { id: 'youtube', name: 'YouTube', width: 1280, height: 720 },
  { id: 'linkedin', name: 'LinkedIn', width: 1104, height: 736 },
  { id: 'widescreen', name: 'Widescreen 16:9', width: 1920, height: 1080 },
  { id: 'hd', name: 'HD', width: 1280, height: 720 }
];

// 尺寸预设选择
const selectedSizePreset = ref('instagram');

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
    settings.leftColor = preset.leftColor;
    settings.rightColor = preset.rightColor;
  } else if (preset.mode === 'stretch') {
    settings.stretchAmount = preset.stretchAmount;
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

// 扩展设置
Object.assign(settings, {
  sizeMode: 'auto',
  stretchAmount: 20,
  leftColor: '#000000',
  rightColor: '#ffffff',
  preserveRatio: true,
  sharpen: 0,
  addWatermark: false,
  watermarkText: '',
  watermarkColor: '#ffffff'
});

// 拉伸模式处理
function processStretchMode(canvas, ctx) {
  const img = originalImage.value.element;
  
  // 清除画布
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // 计算中心区域大小（保持原有纵横比）
  const centerHeight = canvas.height;
  const centerWidth = img.width * (centerHeight / img.height);
  
  // 计算拉伸边缘的宽度
  const stretchWidth = (canvas.width - centerWidth) / 2;
  
  // 如果不需要拉伸（宽度已经足够），直接居中绘制
  if (stretchWidth <= 0) {
    const scale = centerHeight / img.height;
    ctx.drawImage(
      img,
      (canvas.width - img.width * scale) / 2,
      0,
      img.width * scale,
      centerHeight
    );
    return;
  }
  
  // 绘制左侧拉伸边缘
  ctx.drawImage(
    img,
    0, 0, 1, img.height, // 源图像最左边1像素
    0, 0, stretchWidth, canvas.height // 目标位置拉伸
  );
  
  // 绘制中心原始内容
  ctx.drawImage(
    img,
    0, 0, img.width, img.height, // 整个源图像
    stretchWidth, 0, centerWidth, centerHeight // 目标位置居中
  );
  
  // 绘制右侧拉伸边缘
  ctx.drawImage(
    img,
    img.width - 1, 0, 1, img.height, // 源图像最右边1像素
    stretchWidth + centerWidth, 0, stretchWidth, canvas.height // 目标位置拉伸
  );
}

// 双色填充模式处理
function processDualColorMode(canvas, ctx) {
  const img = originalImage.value.element;
  
  // 创建左右渐变
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, settings.leftColor);
  gradient.addColorStop(1, settings.rightColor);
  
  // 填充背景
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // 计算图像尺寸以保持原始纵横比
  const imgHeight = canvas.height * 0.8;
  const imgWidth = img.width * (imgHeight / img.height);
  
  // 绘制图像在中心
  ctx.drawImage(
    img, 
    (canvas.width - imgWidth) / 2, 
    (canvas.height - imgHeight) / 2,
    imgWidth,
    imgHeight
  );
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
    alert('Please select an image file.');
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
      if (settings.autoSize) {
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
  
  // 基于常见的社交媒体横向比例 (16:9 或 2:1)
  if (originalImage.value.aspectRatio < 1) { // 竖图
    // 转为16:9的横图
    const targetRatio = 16/9;
    const height = Math.min(originalImage.value.height, 720); // 限制最大高度
    const width = Math.round(height * targetRatio);
    
    settings.width = width;
    settings.height = height;
  } else { // 已经是横图
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
      case 'rotate':
        processRotateMode(canvas, ctx);
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

// 旋转模式处理
function processRotateMode(canvas, ctx) {
  const img = originalImage.value.element;
  
  // 清除画布
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // 移动到画布中心
  ctx.translate(canvas.width / 2, canvas.height / 2);
  
  // 旋转
  ctx.rotate(settings.rotationAngle * Math.PI / 180);
  
  // 计算缩放因子以适应画布
  const widthRatio = canvas.width / img.width;
  const heightRatio = canvas.height / img.height;
  const scale = Math.min(widthRatio, heightRatio);
  
  // 绘制图像
  ctx.drawImage(
    img, 
    -img.width * scale / 2, 
    -img.height * scale / 2,
    img.width * scale,
    img.height * scale
  );
}

// 填充模式处理
function processFillMode(canvas, ctx) {
  const img = originalImage.value.element;
  
  // 填充背景
  ctx.fillStyle = settings.fillColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // 计算图像尺寸以保持原始纵横比
  const imgHeight = canvas.height * 0.8; // 预留一些边距
  const imgWidth = img.width * (imgHeight / img.height);
  
  // 绘制图像在中心
  ctx.drawImage(
    img, 
    (canvas.width - imgWidth) / 2, 
    (canvas.height - imgHeight) / 2,
    imgWidth,
    imgHeight
  );
}

// 模糊背景模式处理
function processBlurMode(canvas, ctx) {
  const img = originalImage.value.element;
  
  // 先绘制完整图像并填充整个画布（会拉伸）
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  
  // 应用模糊效果
  ctx.filter = `blur(${settings.blurRadius}px)`;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  
  // 重置滤镜
  ctx.filter = 'none';
  
  // 计算居中的图像尺寸
  const imgHeight = canvas.height * 0.8;
  const imgWidth = img.width * (imgHeight / img.height);
  
  // 绘制原始图像在中心
  ctx.drawImage(
    img, 
    (canvas.width - imgWidth) / 2, 
    (canvas.height - imgHeight) / 2,
    imgWidth,
    imgHeight
  );
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
  
  // 在右下角绘制文本
  ctx.fillText(text, canvas.width - textWidth - 20, canvas.height - 20);
  
  // 重置透明度
  ctx.globalAlpha = 1.0;
}

// 应用锐化效果（简单版本）
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

// 下载图像
function downloadImage() {
  if (!outputImage.value) return;
  
  const link = document.createElement('a');
  const filename = `vertical-to-horizontal.${settings.format}`;
  
  link.download = filename;
  link.href = outputImage.value;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 重置图像
function resetImage() {
  previewImage.value = null;
  outputImage.value = null;
  originalImage.value = null;
  fileInput.value.value = '';
  processing.value = false;
}
</script>

<style scoped>
/* 填充全屏的样式调整 */
.p-0 { padding: 0; }
.gap-2 { gap: 0.5rem; }
@media (min-width: 768px) {
  .md\:gap-3 { gap: 0.75rem; }
}
/* 确保内容区域最大化 */
.max-w-none {
  max-width: none !important;
}
/* 移动端优化 */
@media (max-width: 640px) {
  .prose-sm {
    font-size: 0.875rem;
  }
}
</style>
