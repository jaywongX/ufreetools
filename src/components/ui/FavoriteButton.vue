<template>
  <button 
    @click.prevent.stop="toggleFavorite" 
    @mousedown.prevent.stop
    @touchstart.prevent.stop
    :class="[
      'favorite-button',
      'transition-colors',
      'focus:outline-none',
      isFavorited ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
    ]"
    :title="isFavorited ? $t('common.favorites.remove') : $t('common.favorites.add')"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" :fill="isFavorited ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { addToFavorites, removeFromFavorites, isToolFavorited } from '../../services/favoritesService';

const props = defineProps({
  tool: {
    type: Object,
    required: true
  }
});

const isFavorited = ref(false);

const checkFavoriteStatus = () => {
  isFavorited.value = isToolFavorited(props.tool.id);
};

const toggleFavorite = () => {
  if (isFavorited.value) {
    removeFromFavorites(props.tool.id);
  } else {
    const simplifiedTool = {
      id: props.tool.id,
      name: props.tool.name,
      description: props.tool.description,
      tags: [...props.tool.tags]
    };
    addToFavorites(simplifiedTool);
  }
  checkFavoriteStatus();
};

onMounted(() => {
  checkFavoriteStatus();
});
</script>

<style scoped>
.favorite-button {
  animation: pop 0.3s ease-out;
}

@keyframes pop {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style> 