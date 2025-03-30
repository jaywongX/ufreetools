<template>
  <div class="todo-list w-full max-w-none">
    <!-- 顶部控制区域 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <!-- 任务统计 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-4">{{ t('tools.todo-list.statistics') }}</h2>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
            <div class="text-sm text-gray-500 dark:text-gray-400">{{ t('tools.todo-list.totalTasks') }}</div>
            <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">{{ tasks.length }}</div>
          </div>
          <div class="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
            <div class="text-sm text-gray-500 dark:text-gray-400">{{ t('tools.todo-list.completedTasks') }}</div>
            <div class="text-2xl font-bold text-green-600 dark:text-green-400">{{ completedTasksCount }}</div>
          </div>
          <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg">
            <div class="text-sm text-gray-500 dark:text-gray-400">{{ t('tools.todo-list.pendingTasks') }}</div>
            <div class="text-2xl font-bold text-amber-600 dark:text-amber-400">{{ pendingTasksCount }}</div>
          </div>
          <div class="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg">
            <div class="text-sm text-gray-500 dark:text-gray-400">{{ t('tools.todo-list.completionRate') }}</div>
            <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">{{ completionRate }}%</div>
          </div>
        </div>
      </div>
      
      <!-- 筛选排序 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-4">{{ t('tools.todo-list.filter') }}</h2>
        <div class="space-y-4">
          <div>
            <label class="block mb-1 text-sm font-medium">{{ t('tools.todo-list.status') }}</label>
            <select v-model="filters.status" class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
              <option value="all">{{ t('tools.todo-list.statuses.all') }}</option>
              <option value="pending">{{ t('tools.todo-list.statuses.pending') }}</option>
              <option value="completed">{{ t('tools.todo-list.statuses.completed') }}</option>
            </select>
          </div>
          <div>
            <label class="block mb-1 text-sm font-medium">{{ t('tools.todo-list.category') }}</label>
            <select v-model="filters.category" class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
              <option value="">{{ t('tools.todo-list.statuses.all') }}</option>
              <option value="work">{{ t('tools.todo-list.categories.work') }}</option>
              <option value="personal">{{ t('tools.todo-list.categories.personal') }}</option>
              <option value="shopping">{{ t('tools.todo-list.categories.shopping') }}</option>
              <option value="health">{{ t('tools.todo-list.categories.health') }}</option>
              <option value="finance">{{ t('tools.todo-list.categories.finance') }}</option>
              <option value="other">{{ t('tools.todo-list.categories.other') }}</option>
            </select>
          </div>
          <div>
            <label class="block mb-1 text-sm font-medium">{{ t('tools.todo-list.priority') }}</label>
            <select v-model="filters.priority" class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
              <option value="">{{ t('tools.todo-list.statuses.all') }}</option>
              <option value="high">{{ t('tools.todo-list.priorities.high') }}</option>
              <option value="medium">{{ t('tools.todo-list.priorities.medium') }}</option>
              <option value="low">{{ t('tools.todo-list.priorities.low') }}</option>
            </select>
          </div>
        </div>
      </div>
      
      <!-- 排序和搜索 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-4">{{ t('tools.todo-list.sortBy') }}</h2>
        <div class="space-y-4">
          <div>
            <select v-model="sortOption" class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
              <option value="dateCreatedDesc">{{ t('tools.todo-list.sortOptions.dateCreatedDesc') }}</option>
              <option value="dateCreatedAsc">{{ t('tools.todo-list.sortOptions.dateCreatedAsc') }}</option>
              <option value="dueDateAsc">{{ t('tools.todo-list.sortOptions.dueDateAsc') }}</option>
              <option value="dueDateDesc">{{ t('tools.todo-list.sortOptions.dueDateDesc') }}</option>
              <option value="priorityAsc">{{ t('tools.todo-list.sortOptions.priorityAsc') }}</option>
              <option value="priorityDesc">{{ t('tools.todo-list.sortOptions.priorityDesc') }}</option>
              <option value="titleAsc">{{ t('tools.todo-list.sortOptions.titleAsc') }}</option>
              <option value="titleDesc">{{ t('tools.todo-list.sortOptions.titleDesc') }}</option>
            </select>
          </div>
          <div>
            <input 
              v-model="searchQuery"
              type="text"
              class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              :placeholder="t('tools.todo-list.search')"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- 任务列表区域 -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">{{ t('tools.todo-list.tasks') }}</h2>
        <div class="flex space-x-2">
          <button 
            @click="isEditMode = true; currentTask = defaultTask()"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {{ t('tools.todo-list.newTask') }}
          </button>
          <button 
            @click="clearCompletedTasks"
            class="px-3 py-1 text-sm bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 rounded-md"
          >
            {{ t('tools.todo-list.clear') }}
          </button>
          <button 
            @click="clearAllTasks"
            class="px-3 py-1 text-sm bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded-md"
          >
            {{ t('tools.todo-list.clearAll') }}
          </button>
        </div>
      </div>
      
      <!-- 任务列表 -->
      <div v-if="filteredTasks.length === 0" class="text-center py-8 text-gray-500 dark:text-gray-400">
        {{ searchQuery || filters.status !== 'all' || filters.category || filters.priority 
          ? t('tools.todo-list.noFilteredTasks') 
          : t('tools.todo-list.noTasks') }}
      </div>
      
      <div v-else class="divide-y dark:divide-gray-700">
        <div v-for="task in filteredTasks" :key="task.id" class="py-4">
          <div class="flex items-start justify-between">
            <div class="flex items-start space-x-3 flex-1">
              <input 
                type="checkbox" 
                :checked="task.completed" 
                @change="toggleTaskStatus(task)"
                class="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              >
              <div class="flex-1">
                <h3 class="text-lg font-medium" :class="{ 'line-through text-gray-500': task.completed }">
                  {{ task.title }}
                </h3>
                <p class="text-gray-500 dark:text-gray-400 mt-1">{{ task.description }}</p>
                <div class="mt-2 flex flex-wrap gap-2">
                  <span v-if="task.dueDate" class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    <svg class="mr-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                    </svg>
                    {{ formatDate(task.dueDate) }}
                  </span>
                  <span :class="getPriorityClass(task.priority)" class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium">
                    {{ t(`tools.todo-list.priorities.${task.priority}`) }}
                  </span>
                  <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                    {{ t(`tools.todo-list.categories.${task.category}`) }}
                  </span>
                </div>
              </div>
              <div class="flex space-x-2">
                <button 
                  @click="editTask(task)" 
                  class="p-1 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </button>
                <button 
                  @click="deleteTask(task)" 
                  class="p-1 text-gray-500 hover:text-red-600 dark:hover:text-red-400"
                >
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 任务编辑对话框 -->
    <div v-if="isEditMode" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full p-6">
        <h3 class="text-xl font-bold mb-4">
          {{ currentTask.id ? t('tools.todo-list.edit') : t('tools.todo-list.newTask') }}
        </h3>
        <form @submit.prevent="saveTask">
          <div class="space-y-4">
            <!-- 任务标题 -->
            <div>
              <label class="block mb-1 text-sm font-medium">{{ t('tools.todo-list.taskTitle') }} *</label>
              <input 
                v-model="currentTask.title"
                type="text"
                class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                :class="{'border-red-500': errors.title}"
              >
              <p v-if="errors.title" class="mt-1 text-sm text-red-600">{{ errors.title }}</p>
            </div>
            
            <!-- 任务描述 -->
            <div>
              <label class="block mb-1 text-sm font-medium">{{ t('tools.todo-list.description') }}</label>
              <textarea 
                v-model="currentTask.description"
                class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                rows="3"
              ></textarea>
            </div>
            
            <!-- 截止日期 -->
            <div>
              <label class="block mb-1 text-sm font-medium">{{ t('tools.todo-list.dueDate') }}</label>
              <input 
                v-model="currentTask.dueDate"
                type="date"
                class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
            </div>
            
            <!-- 优先级 -->
            <div>
              <label class="block mb-1 text-sm font-medium">{{ t('tools.todo-list.priority') }}</label>
              <select 
                v-model="currentTask.priority"
                class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="high">{{ t('tools.todo-list.priorities.high') }}</option>
                <option value="medium">{{ t('tools.todo-list.priorities.medium') }}</option>
                <option value="low">{{ t('tools.todo-list.priorities.low') }}</option>
              </select>
            </div>
            
            <!-- 分类 -->
            <div>
              <label class="block mb-1 text-sm font-medium">{{ t('tools.todo-list.category') }}</label>
              <select 
                v-model="currentTask.category"
                class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="work">{{ t('tools.todo-list.categories.work') }}</option>
                <option value="personal">{{ t('tools.todo-list.categories.personal') }}</option>
                <option value="shopping">{{ t('tools.todo-list.categories.shopping') }}</option>
                <option value="health">{{ t('tools.todo-list.categories.health') }}</option>
                <option value="finance">{{ t('tools.todo-list.categories.finance') }}</option>
                <option value="other">{{ t('tools.todo-list.categories.other') }}</option>
              </select>
            </div>
          </div>
          
          <!-- 操作按钮 -->
          <div class="flex justify-end space-x-2 mt-6">
            <button 
              type="button"
              @click="cancelEdit"
              class="px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600"
            >
              {{ t('tools.todo-list.cancel') }}
            </button>
            <button 
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {{ t('tools.todo-list.save') }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- 工具介绍区 -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 class="text-xl font-bold mb-4">{{ t('tools.todo-list.aboutTitle') }}</h2>
      <p class="mb-6 text-gray-600 dark:text-gray-300">{{ t('tools.todo-list.aboutDescription') }}</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 主要功能 -->
        <div>
          <h3 class="text-lg font-semibold mb-3">{{ t('tools.todo-list.featuresTitle') }}</h3>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start">
              <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {{ t('tools.todo-list.feature1') }}
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {{ t('tools.todo-list.feature2') }}
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {{ t('tools.todo-list.feature3') }}
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {{ t('tools.todo-list.feature4') }}
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {{ t('tools.todo-list.feature5') }}
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {{ t('tools.todo-list.feature6') }}
            </li>
          </ul>
        </div>
        
        <!-- 使用方法 -->
        <div>
          <h3 class="text-lg font-semibold mb-3">{{ t('tools.todo-list.howToUseTitle') }}</h3>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li>{{ t('tools.todo-list.howToUseStep1') }}</li>
            <li>{{ t('tools.todo-list.howToUseStep2') }}</li>
            <li>{{ t('tools.todo-list.howToUseStep3') }}</li>
            <li>{{ t('tools.todo-list.howToUseStep4') }}</li>
            <li>{{ t('tools.todo-list.howToUseStep5') }}</li>
          </ul>
          
          <h3 class="text-lg font-semibold mb-3 mt-6">{{ t('tools.todo-list.tipsTitle') }}</h3>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start">
              <svg class="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {{ t('tools.todo-list.tip1') }}
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {{ t('tools.todo-list.tip2') }}
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {{ t('tools.todo-list.tip3') }}
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {{ t('tools.todo-list.tip4') }}
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {{ t('tools.todo-list.tip5') }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

// 待办事项列表
const tasks = ref([]);

// 筛选和排序
const filters = ref({
  status: 'all',
  category: '',
  priority: ''
});
const sortOption = ref('dateCreatedDesc');
const searchQuery = ref('');

// 任务编辑状态
const isEditMode = ref(false);
const currentTask = ref({
  id: '',
  title: '',
  description: '',
  dueDate: '',
  priority: 'medium',
  category: 'other',
  completed: false,
  createdAt: null
});
const errors = ref({ title: '' });

// 默认任务模板
function defaultTask() {
  return {
    id: '',
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium',
    category: 'other',
    completed: false,
    createdAt: null
  };
}

// 计算属性：已完成任务数量
const completedTasksCount = computed(() => {
  return tasks.value.filter(task => task.completed).length;
});

// 计算属性：待完成任务数量
const pendingTasksCount = computed(() => {
  return tasks.value.filter(task => !task.completed).length;
});

// 计算属性：过滤后的任务列表
const filteredTasks = computed(() => {
  let result = [...tasks.value];
  
  // 按状态筛选
  if (filters.value.status === 'completed') {
    result = result.filter(task => task.completed);
  } else if (filters.value.status === 'pending') {
    result = result.filter(task => !task.completed);
  }
  
  // 按分类筛选
  if (filters.value.category) {
    result = result.filter(task => task.category === filters.value.category);
  }
  
  // 按优先级筛选
  if (filters.value.priority) {
    result = result.filter(task => task.priority === filters.value.priority);
  }
  
  // 搜索
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(task => 
      task.title.toLowerCase().includes(query) || 
      task.description.toLowerCase().includes(query)
    );
  }
  
  // 排序
  switch (sortOption.value) {
    case 'dateCreatedAsc':
      result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      break;
    case 'dateCreatedDesc':
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      break;
    case 'dueDateAsc':
      result.sort((a, b) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
      break;
    case 'dueDateDesc':
      result.sort((a, b) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(b.dueDate) - new Date(a.dueDate);
      });
      break;
    case 'priorityAsc':
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      result.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
      break;
    case 'priorityDesc':
      const priorityOrderDesc = { high: 3, medium: 2, low: 1 };
      result.sort((a, b) => priorityOrderDesc[b.priority] - priorityOrderDesc[a.priority]);
      break;
    case 'titleAsc':
      result.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'titleDesc':
      result.sort((a, b) => b.title.localeCompare(a.title));
      break;
  }
  
  return result;
});

// 计算属性：完成率
const completionRate = computed(() => {
  if (tasks.value.length === 0) return 0;
  return Math.round((completedTasksCount.value / tasks.value.length) * 100);
});

// 编辑任务
function editTask(task) {
  isEditMode.value = true;
  currentTask.value = { ...task };
  errors.value = { title: '' };
}

// 保存任务
function saveTask() {
  // 验证标题
  if (!currentTask.value.title.trim()) {
    errors.value.title = t('tools.todo-list.titleRequired');
    return;
  }
  
  if (currentTask.value.id) {
    // 更新现有任务
    const index = tasks.value.findIndex(t => t.id === currentTask.value.id);
    if (index !== -1) {
      tasks.value[index] = { ...currentTask.value };
    }
  } else {
    // 添加新任务
    currentTask.value.id = Date.now().toString();
    currentTask.value.createdAt = new Date().toISOString();
    tasks.value.push({...currentTask.value});
  }
  
  saveTasks();
  cancelEdit();
}

// 取消编辑
function cancelEdit() {
  isEditMode.value = false;
  currentTask.value = defaultTask();
  errors.value = { title: '' };
}

// 切换任务状态
function toggleTaskStatus(task) {
  const index = tasks.value.findIndex(t => t.id === task.id);
  if (index !== -1) {
    tasks.value[index].completed = !tasks.value[index].completed;
    saveTasks();
  }
}

// 删除任务
function deleteTask(task) {
  if (confirm(t('tools.todo-list.confirmDelete'))) {
    tasks.value = tasks.value.filter(t => t.id !== task.id);
    saveTasks();
  }
}

// 保存任务到本地存储
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks.value));
}

// 加载任务
function loadTasks() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks.value = JSON.parse(storedTasks);
  }
}

// 删除所有已完成任务
function clearCompletedTasks() {
  if (confirm(t('tools.todo-list.confirmDeleteAll'))) {
    tasks.value = tasks.value.filter(task => !task.completed);
    saveTasks();
  }
}

// 清除所有任务
function clearAllTasks() {
  if (confirm(t('tools.todo-list.confirmClearAll'))) {
    tasks.value = [];
    saveTasks();
  }
}

// 获取优先级的样式类
function getPriorityClass(priority) {
  switch (priority) {
    case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }
}

// 格式化日期
function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale.value).format(date);
}

// 初始化
onMounted(() => {
  loadTasks();
});
</script>

<style scoped>
.todo-list {
  max-width: 100%;
}
</style>