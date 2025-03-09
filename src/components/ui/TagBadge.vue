<template>
  <span 
    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
    :class="tagClasses"
  >
    {{ tagName }}
  </span>
</template>

<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  tagId: {
    type: String,
    required: true
  }
})

const allTags = inject('allTags')

const tag = computed(() => {
  return allTags.value.find(t => t.id === props.tagId) || { id: props.tagId, name: props.tagId, color: 'gray' }
})

const tagName = computed(() => tag.value.name)

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