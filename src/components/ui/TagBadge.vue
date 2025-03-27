<template>
  <span 
    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
    :class="tagClasses"
  >
    {{ translatedTagName }}
  </span>
</template>

<script setup>
import { computed, inject } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  tagId: {
    type: String,
    required: true
  }
})

const { t } = useI18n()
const allTags = inject('allTags')

const tag = computed(() => {
  return allTags.value.find(t => t.id === props.tagId) || { id: props.tagId, name: props.tagId, color: 'gray' }
})

// 国际化标签名称：优先使用i18n翻译，如果没有对应翻译则使用原始名称
const translatedTagName = computed(() => {
  // 检查i18n中是否存在该标签的翻译
  const i18nKey = `tags.${props.tagId}`
  const hasTranslation = t(i18nKey) !== i18nKey // 当没有翻译时，vue-i18n会返回key本身
  
  // 如果有翻译则使用翻译，否则回退到原始标签名
  return hasTranslation ? t(i18nKey) : tag.value.name
})

const tagClasses = computed(() => {
  const colorMap = {
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
    gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    teal: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300',
    orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
    cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300',
    amber: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
    lime: 'bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300',
    emerald: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300',
    rose: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300'
  }
  
  return colorMap[tag.value.color] || colorMap.gray
})
</script> 