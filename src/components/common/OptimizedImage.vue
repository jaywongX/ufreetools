<template>
  <picture v-if="responsive">
    <!-- 移动端 -->
    <source
      v-if="mobileSrc"
      media="(max-width: 768px)"
      :srcset="mobileSrc"
      :type="getImageType(mobileSrc)"
    />
    <!-- 平板 -->
    <source
      v-if="tabletSrc"
      media="(max-width: 1023px)"
      :srcset="tabletSrc"
      :type="getImageType(tabletSrc)"
    />
    <!-- 桌面 -->
    <source
      :srcset="src"
      :type="getImageType(src)"
    />
    <!-- 回退图片 -->
    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      :fetchpriority="fetchpriority"
      :decoding="decoding"
      :class="imgClass"
      :style="imgStyle"
      @load="$emit('load', $event)"
      @error="$emit('error', $event)"
    />
  </picture>
  <img
    v-else
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="loading"
    :fetchpriority="fetchpriority"
    :decoding="decoding"
    :class="imgClass"
    :style="imgStyle"
    @load="$emit('load', $event)"
    @error="$emit('error', $event)"
  />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 必需属性
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },

  // 尺寸属性（防止 CLS）
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  },

  // 加载属性
  loading: {
    type: String,
    default: 'lazy',  // 默认懒加载
    validator: (value) => ['lazy', 'eager'].includes(value)
  },
  fetchpriority: {
    type: String,
    default: undefined,
    validator: (value) => ['high', 'low', 'auto'].includes(value)
  },
  decoding: {
    type: String,
    default: 'async',
    validator: (value) => ['sync', 'async', 'auto'].includes(value)
  },

  // 响应式图片
  responsive: {
    type: Boolean,
    default: false
  },
  mobileSrc: {
    type: String,
    default: undefined
  },
  tabletSrc: {
    type: String,
    default: undefined
  },

  // 样式
  imgClass: {
    type: [String, Object, Array],
    default: undefined
  },
  imgStyle: {
    type: [String, Object],
    default: undefined
  }
})

defineEmits(['load', 'error'])

// 根据文件扩展名获取 MIME 类型
const getImageType = (src) => {
  if (!src) return undefined

  const ext = src.split('.').pop().toLowerCase()
  const types = {
    'webp': 'image/webp',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'avif': 'image/avif'
  }

  return types[ext] || undefined
}
</script>

<style scoped>
/* 确保图片响应式 */
img {
  max-width: 100%;
  height: auto;
}
</style>
