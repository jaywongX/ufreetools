<template>
    <Transition name="toast">
        <div v-if="visible"
             class="fixed z-50 px-4 py-3 rounded-lg shadow-lg text-white text-sm font-medium bg-gray-800 dark:bg-gray-700 opacity-90 backdrop-blur-sm"
             style="min-width: 200px;"
             :class="positionClass">
            {{ message }}
        </div>
    </Transition>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    duration: {
        type: Number,
        default: 1500
    },
    position: {
        type: String,
        default: 'top-right',
        validator(value) {
            return ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'].includes(value)
        }
    }
})

const visible = ref(false)
const message = ref('')
let timer = null

const positionClass = computed(() => {
    switch (props.position) {
        case 'top-left': return 'top-4 left-4'
        case 'top-center': return 'top-4 left-1/2 -translate-x-1/2'
        case 'top-right': return 'top-4 right-4'
        case 'bottom-left': return 'bottom-4 left-4'
        case 'bottom-center': return 'bottom-4 left-1/2 -translate-x-1/2'
        case 'bottom-right': return 'bottom-4 right-4'
        default: return 'top-4 right-4'
    }
})

const show = (msg) => {
    if (timer) {
        clearTimeout(timer)
    }

    message.value = msg
    visible.value = true

    timer = setTimeout(() => {
        visible.value = false
    }, props.duration)
}

defineExpose({ show })
</script>

<style scoped>
/* Toast 过渡动画 */
.toast-enter-active {
    transition: all 0.3s ease-out;
}

.toast-leave-active {
    transition: all 0.3s ease-in;
}

.toast-enter-from {
    opacity: 0;
    transform: translateX(30px);
}

.toast-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
