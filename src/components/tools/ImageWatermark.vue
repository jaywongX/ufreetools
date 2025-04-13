<template>
  <div class="flex flex-col h-full">
    <!-- 工具栏 -->
    <div
      class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center flex-wrap gap-2"
    >
      <div class="flex space-x-2">
        <label
          class="btn bg-primary hover:bg-primary-dark text-white cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {{ $t('tools.image-watermark.upload.title') }}
          <input
            type="file"
            accept="image/*"
            @change="loadImage"
            class="hidden"
          />
        </label>

        <button
          @click="resetCanvas"
          class="btn bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="!hasImage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          {{ $t('tools.image-watermark.actions.reset') }}
        </button>
      </div>
    </div>

    <!-- 主内容区域 -->
    <div class="flex-grow overflow-auto p-4 bg-gray-100 dark:bg-gray-900">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <!-- 左侧控制面板 -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
          :class="{ 'opacity-50': !hasImage }"
        >
          <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">
            {{ $t('tools.image-watermark.watermarkType.title') }}
          </h3>

          <!-- 水印类型选择 -->
          <div class="mb-4">
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >{{ $t('tools.image-watermark.watermarkType.title') }}</label
            >
            <div class="flex space-x-2">
              <button
                @click="watermarkType = 'text'"
                class="px-3 py-1.5 rounded text-sm"
                :class="
                  watermarkType === 'text'
                    ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                "
                :disabled="!hasImage"
              >
                {{ $t('tools.image-watermark.watermarkType.text') }}
              </button>
              <button
                @click="watermarkType = 'image'"
                class="px-3 py-1.5 rounded text-sm"
                :class="
                  watermarkType === 'image'
                    ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                "
                :disabled="!hasImage"
              >
                {{ $t('tools.image-watermark.watermarkType.image') }}
              </button>
            </div>
          </div>

          <!-- 文字水印设置 -->
          <div v-if="watermarkType === 'text'" class="mb-4">
            <div class="mb-3">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >{{ $t('tools.image-watermark.textWatermark.text') }}</label
              >
              <input
                type="text"
                v-model="textOptions.text"
                :placeholder="$t('tools.image-watermark.textWatermark.text')"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                :disabled="!hasImage"
              />
            </div>

            <div class="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >{{ $t('tools.image-watermark.textWatermark.font') }}</label
                >
                <select
                  v-model="textOptions.fontFamily"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  :disabled="!hasImage"
                >
                  <option v-for="font in fontFamilies" :key="font.value" :value="font.value">
                    {{ font.label }}
                  </option>
                </select>
              </div>

              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >{{ $t('tools.image-watermark.textWatermark.size') }}</label
                >
                <input
                  type="number"
                  v-model="textOptions.fontSize"
                  min="10"
                  max="200"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  :disabled="!hasImage"
                />
              </div>
            </div>

            <div class="mb-3">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >{{ $t('tools.image-watermark.textWatermark.color') }}</label
              >
              <input
                type="color"
                v-model="textOptions.fill"
                class="w-full h-10 p-1 rounded border border-gray-300 dark:border-gray-600"
                :disabled="!hasImage"
              />
            </div>

            <div class="mb-3">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >{{ $t('tools.image-watermark.textWatermark.opacity') }}: {{ textOptions.opacity }}</label
              >
              <input
                type="range"
                v-model="textOptions.opacity"
                min="0.1"
                max="1"
                step="0.1"
                class="w-full"
                :disabled="!hasImage"
              />
            </div>

            <div class="mb-3">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >{{ $t('tools.image-watermark.textWatermark.rotation') }}: {{ watermarkRotation }}°</label
              >
              <input
                type="range"
                v-model="watermarkRotation"
                min="-180"
                max="180"
                class="w-full"
                :disabled="!hasImage"
              />
            </div>
          </div>

          <!-- 图片水印设置 -->
          <div v-if="watermarkType === 'image'" class="mb-4">
            <div class="mb-3">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >{{ $t('tools.image-watermark.imageWatermark.upload') }}</label
              >
              <label
                class="block w-full p-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md text-center cursor-pointer hover:border-gray-400 dark:hover:border-gray-500"
              >
                <span
                  v-if="!watermarkImageSrc"
                  class="text-gray-500 dark:text-gray-400"
                  >{{ $t('tools.image-watermark.imageWatermark.selectLogo') }}</span
                >
                <img v-else :src="watermarkImageSrc" class="max-h-20 mx-auto" />
                <input
                  type="file"
                  accept="image/*"
                  @change="loadWatermarkImage"
                  class="hidden"
                />
              </label>
            </div>

            <div class="mb-3">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >{{ $t('tools.image-watermark.imageWatermark.size') }}: {{ imageOptions.scale }}</label
              >
              <input
                type="range"
                v-model="imageOptions.scale"
                min="0.1"
                max="1"
                step="0.1"
                class="w-full"
                :disabled="!hasImage || !watermarkImageSrc"
              />
            </div>

            <div class="mb-3">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >{{ $t('tools.image-watermark.imageWatermark.opacity') }}: {{ imageOptions.opacity }}</label
              >
              <input
                type="range"
                v-model="imageOptions.opacity"
                min="0.1"
                max="1"
                step="0.1"
                class="w-full"
                :disabled="!hasImage || !watermarkImageSrc"
              />
            </div>

            <div class="mb-3">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >{{ $t('tools.image-watermark.imageWatermark.rotation') }}: {{ watermarkRotation }}°</label
              >
              <input
                type="range"
                v-model="watermarkRotation"
                min="-180"
                max="180"
                class="w-full"
                :disabled="!hasImage || !watermarkImageSrc"
              />
            </div>
          </div>

          <!-- 通用水印设置 -->
          <div class="mb-4">
            <label
              class="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              <input
                type="checkbox"
                v-model="tileWatermark"
                class="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700"
                :disabled="!hasImage"
                @change="onTileWatermarkChange"
              />
              {{ $t('tools.image-watermark.positioning.tiled') }}
            </label>
          </div>

          <div class="mb-4" v-if="!tileWatermark">
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >{{ $t('tools.image-watermark.positioning.position') }}</label
            >
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="position in [
                  'top-left',
                  'top-center',
                  'top-right',
                  'middle-left',
                  'middle-center',
                  'middle-right',
                  'bottom-left',
                  'bottom-center',
                  'bottom-right',
                ]"
                :key="position"
                @click="watermarkPosition = position"
                class="p-2 border rounded-md text-center"
                :class="
                  watermarkPosition === position
                    ? 'border-primary bg-primary-50 dark:bg-primary-900/30 text-primary dark:text-primary-300'
                    : 'border-gray-300 dark:border-gray-600'
                "
                :disabled="!hasImage"
              >
                <div class="w-full h-5 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5h14M5 12h14M5 19h14"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <div v-else class="mb-4">
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >{{ $t('tools.image-watermark.positioning.margin') }}: {{ watermarkSpacing }}px</label
            >
            <input
              type="range"
              v-model="watermarkSpacing"
              min="50"
              max="500"
              class="w-full"
              :disabled="!hasImage"
            />
          </div>

          <button
            @click="applyWatermark"
            class="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-md font-medium"
            :disabled="!canApplyWatermark"
          >
            {{ $t('tools.image-watermark.actions.apply') }}
          </button>
        </div>

        <!-- 右侧预览区域 -->
        <div class="lg:col-span-2">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 h-full flex flex-col">
            <div class="flex items-center gap-4 mb-4">
              <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">{{ $t('tools.image-watermark.output.preview') }}</h3>
              <button 
                @click="downloadImage" 
                :disabled="!hasImage"
                class="text-primary hover:text-primary-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ $t('tools.image-watermark.output.downloadIndividual') }}
              </button>
            </div>

            <div 
              class="flex-grow relative flex items-center justify-center cursor-pointer" 
              @click="hasImage && downloadImage()"
              :class="{ 'cursor-not-allowed': !hasImage }"
            >
              <canvas id="watermark-canvas" class="max-w-full max-h-full shadow-sm"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 通知提示 -->
    <div
      v-if="notification.show"
      class="fixed bottom-4 right-4 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white text-sm rounded-md shadow-lg transition-opacity duration-300"
      :class="{
        'opacity-0': notification.fadeOut,
        'opacity-100': !notification.fadeOut,
      }"
    >
      {{ notification.message }}
    </div>

    <!-- 在底部添加文章部分 -->
    <ImageWatermarkArticle />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch } from "vue";
import { fabric } from "fabric";
import { useI18n } from 'vue-i18n';
import ImageWatermarkArticle from './ImageWatermarkArticle.vue'

// 初始化国际化
const { t, locale } = useI18n();

// 画布和状态变量
const canvas = ref(null);
const fabricCanvas = ref(null);
const hasImage = ref(false);
const backgroundImage = ref(null);
const watermarkObject = ref(null);
const notification = ref({
  show: false,
  message: "",
  fadeOut: false,
});

// 水印配置
const watermarkType = ref("text");
const watermarkPosition = ref("bottom-right");
const watermarkRotation = ref(0);
const tileWatermark = ref(false);
const watermarkImageSrc = ref(null);

// 字体选项
const fontFamilies = computed(() => {
  if (locale.value === 'zh') {
    return [
      { label: '微软雅黑', value: 'Microsoft YaHei' },
      { label: '宋体', value: 'SimSun' },
      { label: '黑体', value: 'SimHei' },
      { label: '楷体', value: 'KaiTi' },
      { label: '仿宋', value: 'FangSong' },
      { label: 'Arial', value: 'Arial' },
      { label: 'Times New Roman', value: 'Times New Roman' },
      { label: 'Helvetica', value: 'Helvetica' }
    ]
  } else {
    return [
      { label: 'Arial', value: 'Arial' },
      { label: 'Times New Roman', value: 'Times New Roman' },
      { label: 'Helvetica', value: 'Helvetica' },
      { label: 'Microsoft YaHei', value: 'Microsoft YaHei' },
      { label: 'SimSun', value: 'SimSun' },
      { label: 'SimHei', value: 'SimHei' },
      { label: 'KaiTi', value: 'KaiTi' },
      { label: 'FangSong', value: 'FangSong' }
    ]
  }
});

// 文本水印选项
const textOptions = ref({
  text: locale.value === 'zh' ? "© 2024 版权所有" : "© 2024 All Rights Reserved",
  fontFamily: locale.value === 'zh' ? "Microsoft YaHei" : "Arial",
  fontSize: 24,
  fill: "#000000",
  opacity: 0.5,
  rotation: 0,
  shadow: false,
  shadowColor: "#000000",
  shadowBlur: 3,
  shadowOffsetX: 2,
  shadowOffsetY: 2,
  background: false,
  backgroundColor: "#ffffff",
  backgroundOpacity: 0.5,
  padding: 10,
  border: false,
  borderColor: "#000000",
  borderWidth: 1,
  letterSpacing: 0
});

// 监听语言变化，更新默认文本和字体
watch(locale, (newLocale) => {
  textOptions.value.text = newLocale === 'zh' ? "© 2024 版权所有" : "© 2024 All Rights Reserved"
  textOptions.value.fontFamily = newLocale === 'zh' ? "Microsoft YaHei" : "Arial"
});

// 图片水印选项
const imageOptions = ref({
  scale: 0.5,
  opacity: 0.7,
});

// 水印图片对象
const watermarkImage = ref(null);

// 水印间隔配置
const watermarkSpacing = ref(200);

// 计算属性 - 是否可以应用水印
const canApplyWatermark = computed(() => {
  if (!hasImage.value) return false;

  if (watermarkType.value === "text") {
    return textOptions.value.text.trim() !== "";
  } else {
    return watermarkImageSrc.value !== null;
  }
});

// 监听配置变化
watch([
  watermarkType,
  watermarkPosition,
  watermarkRotation,
  tileWatermark,
  watermarkSpacing,
  textOptions,
  imageOptions,
  watermarkImage
], () => {
  if (hasImage.value && canApplyWatermark.value) {
    applyWatermark();
  }
}, { deep: true });

// 初始化画布函数
const initCanvas = async () => {
  try {
    console.log("开始初始化 Canvas");
    // 等待下一个 DOM 更新周期
    await nextTick();

    // 使用原生方式获取 Canvas 元素
    const canvasElement = document.getElementById("watermark-canvas");
    if (!canvasElement) {
      throw new Error("Canvas 元素不存在");
    }
    canvas.value = canvasElement;

    // 初始化Fabric.js画布
    fabricCanvas.value = new fabric.Canvas(canvasElement, {
      width: 800,
      height: 600,
      backgroundColor: "#f5f5f5",
    });

    if (!fabricCanvas.value) {
      throw new Error("Fabric Canvas 初始化失败");
    }
    console.log("Canvas 初始化成功");

    // 监听窗口大小变化
    window.addEventListener("resize", () => {
      if (fabricCanvas.value && backgroundImage.value) {
        console.log("窗口大小改变，调整 Canvas 尺寸");
        fabricCanvas.value.setDimensions({
          width: backgroundImage.value.width,
          height: backgroundImage.value.height,
        });
        fabricCanvas.value.renderAll();
      }
    });
  } catch (error) {
    console.error("Canvas 初始化失败:", error);
    showNotification(t('tools.image-watermark.messages.canvasInitError'));
  }
};

onMounted(async () => {
  await initCanvas();
});

// 加载主图片
async function loadImage(event) {
  const file = event.target.files[0];
  if (!file) {
    console.error("没有选择文件");
    showNotification(t('tools.image-watermark.messages.imageLoadError'));
    return;
  }

  console.log("开始加载图片:", file.name);

  // 确保 Canvas 已初始化
  if (!fabricCanvas.value) {
    await initCanvas();
  }

  let imageUrl = null;

  // 重置画布
  try {
    if (fabricCanvas.value) {
      fabricCanvas.value.clear();
    }

    // 从文件创建图片URL
    imageUrl = URL.createObjectURL(file);
    console.log("创建图片URL:", imageUrl);

    // 创建fabric图片对象
    await new Promise((resolve, reject) => {
      fabric.Image.fromURL(
        imageUrl,
        (img) => {
          if (!img) {
            console.error("图片对象创建失败");
            showNotification(t('tools.image-watermark.messages.imageLoadError'));
            reject(new Error("图片对象创建失败"));
            return;
          }

          console.log("图片加载成功，原始尺寸:", img.width, "x", img.height);

          // 调整画布大小以适应图片
          const maxWidth = 1200;
          const maxHeight = 800;

          let width = img.width;
          let height = img.height;

          // 如果图片太大，按比例缩小
          if (width > maxWidth || height > maxHeight) {
            const ratio = Math.min(maxWidth / width, maxHeight / height);
            width *= ratio;
            height *= ratio;
            console.log("调整后的尺寸:", width, "x", height);
          }

          // 调整画布大小
          fabricCanvas.value.setWidth(width);
          fabricCanvas.value.setHeight(height);

          // 设置背景图片
          img.selectable = false;
          fabricCanvas.value.setBackgroundImage(img, () => {
            // 保存图片引用
            backgroundImage.value = img;
            hasImage.value = true;

            console.log("图片设置完成");
            showNotification(t('tools.image-watermark.messages.imageLoaded'));

            // 图片完全加载后自动应用水印
            if (canApplyWatermark.value) {
              applyWatermark();
            }

            // 图片完全加载后再清理URL
            if (imageUrl) {
              URL.revokeObjectURL(imageUrl);
            }

            resolve();
          });
        },
        (err) => {
          console.error("加载图片时发生错误:", err);
          showNotification(t('tools.image-watermark.messages.imageLoadError'));
          // 发生错误时也要清理URL
          if (imageUrl) {
            URL.revokeObjectURL(imageUrl);
          }
          reject(err);
        }
      );
    });
  } catch (error) {
    console.error("处理图片时发生错误:", error);
    showNotification(t('tools.image-watermark.messages.imageLoadError'));
    // 发生错误时也要清理URL
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }
  }
}

// 加载水印图片
function loadWatermarkImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    fabric.Image.fromURL(e.target.result, (img) => {
      if (!img) {
        console.error("水印图片加载失败");
        showNotification(t('tools.image-watermark.messages.watermarkImageLoadError'));
        return;
      }

      // 保存图片引用
      watermarkImage.value = img;
      
      // 创建一个新的Image对象来保存图片源
      const imgElement = new Image();
      imgElement.src = e.target.result;
      imgElement.onload = () => {
        // 图片加载完成后，更新水印图片的源
        img._element = imgElement;
        
        // 水印图片加载完成后自动应用
        if (hasImage.value && canApplyWatermark.value) {
          applyWatermark();
        }
        
        // 图片完全加载后再清理URL
        URL.revokeObjectURL(e.target.result);
      };
      
      imgElement.onerror = () => {
        console.error("水印图片加载失败");
        showNotification(t('tools.image-watermark.messages.watermarkImageLoadError'));
        URL.revokeObjectURL(e.target.result);
      };
    });
  };
  reader.onerror = () => {
    showNotification(t('tools.image-watermark.messages.watermarkImageLoadError'));
  };
  reader.readAsDataURL(file);
}

// 应用水印
async function applyWatermark() {
  if (!fabricCanvas.value || !hasImage.value) {
    showNotification(t('tools.image-watermark.messages.noImages'));
    return;
  }

  // 移除已有的水印
  if (watermarkObject.value) {
    fabricCanvas.value.remove(watermarkObject.value);
    watermarkObject.value = null;
  }

  try {
    // 根据设置创建水印
    if (tileWatermark.value) {
      await createTiledWatermark();
    } else {
      if (watermarkType.value === "text") {
        addTextWatermark();
      } else {
        addImageWatermark();
      }
    }

    showNotification(t('tools.image-watermark.messages.watermarkApplied'));
  } catch (error) {
    console.error("应用水印失败:", error);
    showNotification(t('tools.image-watermark.messages.error', { error: error.message }));
  }
}

// 添加文字水印
function addTextWatermark() {
  if (!fabricCanvas.value) return;

  // 创建文本水印
  const text = new fabric.Text(textOptions.value.text, {
    fontFamily: textOptions.value.fontFamily || 'Arial',
    fontSize: textOptions.value.fontSize,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fill: textOptions.value.fill,
    opacity: textOptions.value.opacity,
    angle: watermarkRotation.value,
  });

  // 定位水印
  positionWatermark(text);

  // 添加到画布并保存引用
  fabricCanvas.value.add(text);
  watermarkObject.value = text;
  fabricCanvas.value.renderAll();
}

// 添加图片水印
function addImageWatermark() {
  if (!fabricCanvas.value || !watermarkImage.value) return;

  // 克隆图片对象避免修改原始对象
  const img = fabric.util.object.clone(watermarkImage.value);

  // 应用设置
  const canvasWidth = fabricCanvas.value.width;
  const scale = imageOptions.value.scale * (canvasWidth / img.width) * 0.3;

  img.set({
    scaleX: scale,
    scaleY: scale,
    opacity: imageOptions.value.opacity,
    angle: watermarkRotation.value,
  });

  // 定位水印
  positionWatermark(img);

  // 添加到画布并保存引用
  fabricCanvas.value.add(img);
  watermarkObject.value = img;
  fabricCanvas.value.renderAll();
}

// 定位水印
function positionWatermark(obj) {
  if (!fabricCanvas.value) return;

  const canvasWidth = fabricCanvas.value.width;
  const canvasHeight = fabricCanvas.value.height;
  
  // 获取原始尺寸
  const objWidth = obj.getScaledWidth();
  const objHeight = obj.getScaledHeight();
  
  // 计算旋转后的边界框
  const angleRad = (watermarkRotation.value * Math.PI) / 180;
  const cos = Math.abs(Math.cos(angleRad));
  const sin = Math.abs(Math.sin(angleRad));
  
  // 计算旋转后的边界框尺寸
  const rotatedWidth = objWidth * cos + objHeight * sin;
  const rotatedHeight = objWidth * sin + objHeight * cos;
  
  // 计算旋转导致的额外空间
  const widthDiff = rotatedWidth - objWidth;
  const heightDiff = rotatedHeight - objHeight;
  
  const padding = 20;
  
  // 设置旋转中心点
  obj.set({
    originX: 'center',
    originY: 'center',
    angle: watermarkRotation.value
  });
  
  // 根据选定位置设置坐标（考虑中心点定位）
  let left, top;
  
  switch (watermarkPosition.value) {
    case "top-left":
      left = padding + objWidth/2 + widthDiff/2;
      top = padding + objHeight/2 + heightDiff/2;
      break;
    case "top-center":
      left = canvasWidth/2;
      top = padding + objHeight/2 + heightDiff/2;
      break;
    case "top-right":
      left = canvasWidth - padding - objWidth/2 - widthDiff/2;
      top = padding + objHeight/2 + heightDiff/2;
      break;
    case "middle-left":
      left = padding + objWidth/2 + widthDiff/2;
      top = canvasHeight/2;
      break;
    case "middle-center":
      left = canvasWidth/2;
      top = canvasHeight/2;
      break;
    case "middle-right":
      left = canvasWidth - padding - objWidth/2 - widthDiff/2;
      top = canvasHeight/2;
      break;
    case "bottom-left":
      left = padding + objWidth/2 + widthDiff/2;
      top = canvasHeight - padding - objHeight/2 - heightDiff/2;
      break;
    case "bottom-center":
      left = canvasWidth/2;
      top = canvasHeight - padding - objHeight/2 - heightDiff/2;
      break;
    case "bottom-right":
      left = canvasWidth - padding - objWidth/2 - widthDiff/2;
      top = canvasHeight - padding - objHeight/2 - heightDiff/2;
      break;
  }

  // 设置对象位置
  obj.set({
    left: left,
    top: top
  });
}

// 创建平铺水印
async function createTiledWatermark() {
  if (!fabricCanvas.value) return;

  // 移除已有的水印对象
  if (watermarkObject.value) {
    fabricCanvas.value.remove(watermarkObject.value);
  }

  try {
    // 创建平铺图案
    const patternSource = await (watermarkType.value === "text"
      ? createTextPatternSource()
      : createImagePatternSource());

    if (patternSource) {
      // 创建覆盖整个画布的水印图案
      const patternRect = new fabric.Rect({
        left: 0,
        top: 0,
        width: fabricCanvas.value.width,
        height: fabricCanvas.value.height,
        fill: new fabric.Pattern({
          source: patternSource,
          repeat: "repeat",
        }),
        selectable: false,
      });

      fabricCanvas.value.add(patternRect);
      watermarkObject.value = patternRect;
      fabricCanvas.value.renderAll();
    }
  } catch (error) {
    console.error("创建平铺水印失败:", error);
    showNotification(t('tools.image-watermark.messages.tiledWatermarkError'));
  }
}

// 创建文字水印的模式源
function createTextPatternSource() {
  return new Promise((resolve) => {
    // 创建一个临时画布
    const tempCanvas = document.createElement("canvas");
    const tempContext = tempCanvas.getContext("2d");

    // 设置临时画布大小为水印间隔大小
    tempCanvas.width = watermarkSpacing.value;
    tempCanvas.height = watermarkSpacing.value;

    // 绘制文字
    tempContext.font = `${textOptions.value.fontStyle} ${textOptions.value.fontWeight} ${textOptions.value.fontSize}px ${textOptions.value.fontFamily}`;
    tempContext.fillStyle = textOptions.value.fill;
    tempContext.globalAlpha = textOptions.value.opacity;

    // 添加阴影
    tempContext.shadowColor = "rgba(0,0,0,0.5)";
    tempContext.shadowBlur = 3;
    tempContext.shadowOffsetX = 2;
    tempContext.shadowOffsetY = 2;

    // 旋转
    tempContext.translate(tempCanvas.width / 2, tempCanvas.height / 2);
    tempContext.rotate((watermarkRotation.value * Math.PI) / 180);

    // 测量文本宽度
    const textWidth = tempContext.measureText(textOptions.value.text).width;

    // 绘制文本
    tempContext.fillText(textOptions.value.text, -textWidth / 2, 0);

    // 重置变换
    tempContext.resetTransform();

    resolve(tempCanvas);
  });
}

// 创建图片水印的模式源
function createImagePatternSource() {
  return new Promise((resolve, reject) => {
    if (!watermarkImage.value || !watermarkImage.value._element) {
      reject(new Error(t('tools.image-watermark.messages.watermarkImageLoadError')));
      return;
    }

    // 创建临时画布
    const tempCanvas = document.createElement("canvas");
    const tempContext = tempCanvas.getContext("2d");

    // 设置临时画布大小为水印间隔大小
    tempCanvas.width = watermarkSpacing.value;
    tempCanvas.height = watermarkSpacing.value;

    // 计算图片大小
    const tileSize = watermarkImage.value.width * imageOptions.value.scale;

    // 使用已加载的图片元素
    const img = watermarkImage.value._element;

    // 确保图片已完全加载
    if (img.complete) {
      // 绘制图片
      tempContext.globalAlpha = imageOptions.value.opacity;
      tempContext.translate(tempCanvas.width / 2, tempCanvas.height / 2);
      tempContext.rotate((watermarkRotation.value * Math.PI) / 180);
      tempContext.drawImage(
        img,
        -tileSize / 2,
        -tileSize / 2,
        tileSize,
        tileSize * (img.height / img.width)
      );
      resolve(tempCanvas);
    } else {
      img.onload = () => {
        // 绘制图片
        tempContext.globalAlpha = imageOptions.value.opacity;
        tempContext.translate(tempCanvas.width / 2, tempCanvas.height / 2);
        tempContext.rotate((watermarkRotation.value * Math.PI) / 180);
        tempContext.drawImage(
          img,
          -tileSize / 2,
          -tileSize / 2,
          tileSize,
          tileSize * (img.height / img.width)
        );
        resolve(tempCanvas);
      };
      img.onerror = () => {
        reject(new Error(t('tools.image-watermark.messages.watermarkImageLoadError')));
      };
    }
  });
}

// 重置画布
function resetCanvas() {
  if (!fabricCanvas.value || !backgroundImage.value) return;

  // 移除所有对象
  fabricCanvas.value.clear();

  // 重新设置背景图
  fabricCanvas.value.setBackgroundImage(
    backgroundImage.value,
    fabricCanvas.value.renderAll.bind(fabricCanvas.value)
  );

  // 重置水印状态
  watermarkObject.value = null;
  tileWatermark.value = false;
  watermarkType.value = "text";
  watermarkImageSrc.value = null;
  watermarkImage.value = null;

  // 重置文字选项
  textOptions.value = {
    text: locale.value === 'zh' ? "© 2024 版权所有" : "© 2024 All Rights Reserved",
    fontFamily: locale.value === 'zh' ? "Microsoft YaHei" : "Arial",
    fontSize: 24,
    fill: "#000000",
    opacity: 0.5,
    rotation: 0,
    shadow: false,
    shadowColor: "#000000",
    shadowBlur: 3,
    shadowOffsetX: 2,
    shadowOffsetY: 2,
    background: false,
    backgroundColor: "#ffffff",
    backgroundOpacity: 0.5,
    padding: 10,
    border: false,
    borderColor: "#000000",
    borderWidth: 1,
    letterSpacing: 0
  };

  // 重置图片选项
  imageOptions.value = {
    scale: 0.5,
    opacity: 0.7,
  };

  watermarkPosition.value = "bottom-right";
  watermarkRotation.value = 0;
  watermarkSpacing.value = 200;

  showNotification(t('tools.image-watermark.messages.resetSuccess'));
}

// 下载图片
function downloadImage() {
  if (!fabricCanvas.value) return;

  try {
    // 导出画布为数据URL
    const dataUrl = fabricCanvas.value.toDataURL({
      format: "png",
      quality: 0.8,
    });

    // 创建下载链接
    const link = document.createElement("a");
    link.download = `watermarked-image-${new Date().getTime()}.png`;
    link.href = dataUrl;
    link.click();

    showNotification(t('tools.image-watermark.messages.downloadStarted'));
  } catch (error) {
    console.error('下载失败:', error);
    showNotification(t('tools.image-watermark.messages.downloadError'));
  }
}

// 显示通知
function showNotification(message) {
  notification.value = {
    show: true,
    message,
    fadeOut: false,
  };

  // 3秒后开始淡出
  setTimeout(() => {
    notification.value.fadeOut = true;

    // 淡出后隐藏
    setTimeout(() => {
      notification.value.show = false;
    }, 300);
  }, 3000);
}

// 处理平铺水印变化
function onTileWatermarkChange(e) {
  if (e.target.checked) {
    watermarkRotation.value = -30;
  } else {
    watermarkRotation.value = 0;
  }
}
</script>

<style scoped>
.btn {
  @apply px-4 py-2 rounded-md flex items-center transition-colors duration-200 font-medium;
}
</style> 