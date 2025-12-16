<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
                <h1 class="text-2xl font-bold mb-1">{{ $t('tools.what-to-eat.name') }}</h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.what-to-eat.dragTip') }}</p>

                <!-- 表单行 1 -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.what-to-eat.mealTime') }}
                        </label>
                        <select v-model="form.mealTime" class="w-full form-select">
                            <option :value="'breakfast'">{{ $t('tools.what-to-eat.mealBreakfast') }}</option>
                            <option :value="'lunch'">{{ $t('tools.what-to-eat.mealLunch') }}</option>
                            <option :value="'dinner'">{{ $t('tools.what-to-eat.mealDinner') }}</option>
                            <option :value="'latenight'">{{ $t('tools.what-to-eat.mealLateNight') }}</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.what-to-eat.budget') }}
                        </label>
                        <select v-model="form.budget" class="w-full form-select">
                            <option :value="'saver'">{{ $t('tools.what-to-eat.budgetSaver') }}</option>
                            <option :value="'standard'">{{ $t('tools.what-to-eat.budgetStandard') }}</option>
                            <option :value="'premium'">{{ $t('tools.what-to-eat.budgetPremium') }}</option>
                        </select>
                    </div>
                </div>

                <!-- 表单行 2 -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.what-to-eat.spice') }}
                        </label>
                        <select v-model="form.spice" class="w-full form-select">
                            <option :value="'mild'">{{ $t('tools.what-to-eat.spiceMild') }}</option>
                            <option :value="'medium'">{{ $t('tools.what-to-eat.spiceMedium') }}</option>
                            <option :value="'hot'">{{ $t('tools.what-to-eat.spiceHot') }}</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.what-to-eat.diet') }}
                        </label>
                        <select v-model="form.diet" class="w-full form-select">
                            <option :value="'omni'">{{ $t('tools.what-to-eat.dietOmni') }}</option>
                            <option :value="'veg'">{{ $t('tools.what-to-eat.dietVeg') }}</option>
                            <option :value="'vegan'">{{ $t('tools.what-to-eat.dietVegan') }}</option>
                            <option :value="'halal'">{{ $t('tools.what-to-eat.dietHalal') }}</option>
                        </select>
                    </div>
                </div>

                <!-- 表单行 3 -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.what-to-eat.weather') }}
                        </label>
                        <select v-model="form.weather" class="w-full form-select">
                            <option :value="'hot'">{{ $t('tools.what-to-eat.weatherHot') }}</option>
                            <option :value="'cool'">{{ $t('tools.what-to-eat.weatherCool') }}</option>
                            <option :value="'rainy'">{{ $t('tools.what-to-eat.weatherRainy') }}</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.what-to-eat.scene') }}
                        </label>
                        <select v-model="form.scene" class="w-full form-select">
                            <option :value="'solo'">{{ $t('tools.what-to-eat.sceneSolo') }}</option>
                            <option :value="'date'">{{ $t('tools.what-to-eat.sceneDate') }}</option>
                            <option :value="'family'">{{ $t('tools.what-to-eat.sceneFamily') }}</option>
                            <option :value="'overtime'">{{ $t('tools.what-to-eat.sceneOvertime') }}</option>
                        </select>
                    </div>
                </div>

                <!-- 表单行 4 -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.what-to-eat.protein') }}
                        </label>
                        <select v-model="form.protein" class="w-full form-select">
                            <option :value="'normal'">{{ $t('tools.what-to-eat.proteinLight') }}</option>
                            <option :value="'high'">{{ $t('tools.what-to-eat.proteinHigh') }}</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.what-to-eat.carbs') }}
                        </label>
                        <select v-model="form.carbs" class="w-full form-select">
                            <option :value="'balanced'">{{ $t('tools.what-to-eat.carbsNormal') }}</option>
                            <option :value="'low'">{{ $t('tools.what-to-eat.carbsLight') }}</option>
                        </select>
                    </div>
                </div>

                <!-- 按钮 -->
                <div class="flex flex-col sm:flex-row gap-3">
                    <button class="btn btn-primary flex-1" @click="generate" :disabled="loading">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ loading ? $t('tools.what-to-eat.processing') : $t('tools.what-to-eat.spinBtn') }}
                    </button>
                    <button class="btn btn-secondary flex-1" @click="refresh" :disabled="loading">
                        {{ $t('tools.what-to-eat.refreshBtn') }}
                    </button>
                    <button class="btn btn-secondary flex-1" @click="resetAll" :disabled="loading">
                        {{ $t('tools.what-to-eat.clearAll') }}
                    </button>
                </div>

                <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                    <h3 class="font-semibold text-blue-700 dark:text-blue-200 mb-1">{{ $t('tools.what-to-eat.tipHeadline')
                        }}</h3>
                    <p class="text-sm text-blue-600 dark:text-blue-200">{{ $t('tools.what-to-eat.tipContent') }}</p>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl font-bold">{{ $t('tools.what-to-eat.outputTitle') }}</h2>
                </div>

                <div v-if="recommendations.length" class="space-y-4">
                    <!-- 推荐 1 -->
                    <div class="border rounded-lg p-4">
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="text-lg font-semibold">{{ $t('tools.what-to-eat.rec1') }}</h3>
                            <span class="text-sm text-gray-500">{{ formatEnergy(0) }}</span>
                        </div>
                        <p class="text-base font-bold">{{ recommendations[0]?.name || '' }}</p>
                        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">{{ rationale(0) }}</p>
                        <div class="mt-2 text-xs text-blue-600 dark:text-blue-300">{{ $t('tools.what-to-eat.tags') }}：
                            {{ tagLine(0) }}</div>
                    </div>

                    <!-- 推荐 2 -->
                    <div class="border rounded-lg p-4">
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="text-lg font-semibold">{{ $t('tools.what-to-eat.rec2') }}</h3>
                            <span class="text-sm text-gray-500">{{ formatEnergy(1) }}</span>
                        </div>
                        <p class="text-base font-bold">{{ recommendations[1]?.name || '' }}</p>
                        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">{{ rationale(1) }}</p>
                        <div class="mt-2 text-xs text-blue-600 dark:text-blue-300">{{ $t('tools.what-to-eat.tags') }}：
                            {{ tagLine(1) }}</div>
                    </div>

                    <!-- 推荐 3 -->
                    <div class="border rounded-lg p-4">
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="text-lg font-semibold">{{ $t('tools.what-to-eat.rec3') }}</h3>
                            <span class="text-sm text-gray-500">{{ formatEnergy(2) }}</span>
                        </div>
                        <p class="text-base font-bold">{{ recommendations[2]?.name || '' }}</p>
                        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">{{ rationale(2) }}</p>
                        <div class="mt-2 text-xs text-blue-600 dark:text-blue-300">{{ $t('tools.what-to-eat.tags') }}：
                            {{ tagLine(2) }}</div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.what-to-eat.noResult') }}</p>
                </div>

                <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.what-to-eat.selectionNote') }}</p>

                <!-- 菜单管理按钮 -->
                <button class="btn btn-secondary w-full mt-4" @click="showMenuManager = true">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    {{ $t('tools.what-to-eat.manageMenu') }}
                </button>
            </div>
        </div>

        <!-- 菜单管理模态框 -->
        <div v-if="showMenuManager" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            @click.self="showMenuManager = false">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div class="flex justify-between items-center">
                        <h2 class="text-2xl font-bold">{{ $t('tools.what-to-eat.manageMenu') }}</h2>
                        <button @click="showMenuManager = false" class="text-gray-500 hover:text-gray-700">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="flex-1 overflow-y-auto p-6">
                    <!-- 添加新菜品表单 -->
                    <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <h3 class="text-lg font-semibold mb-4">{{ editingDish ? $t('tools.what-to-eat.editDish') : $t('tools.what-to-eat.addDish') }}</h3>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    {{ $t('tools.what-to-eat.dishName') }}
                                </label>
                                <input v-model="newDish.name" type="text" :placeholder="$t('tools.what-to-eat.dishNamePlaceholder')"
                                    class="w-full form-input" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    {{ $t('tools.what-to-eat.dishKcal') }}
                                </label>
                                <input v-model.number="newDish.kcal" type="number" :placeholder="$t('tools.what-to-eat.dishKcalPlaceholder')"
                                    class="w-full form-input" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    {{ $t('tools.what-to-eat.dishTags') }}
                                </label>
                                <div class="flex flex-wrap gap-2">
                                    <label v-for="tag in allTags" :key="tag" class="flex items-center">
                                        <input type="checkbox" :value="tag" v-model="newDish.tags" class="form-checkbox mr-1" />
                                        <span class="text-sm">{{ getTagLabel(tag) }}</span>
                                    </label>
                                </div>
                            </div>
                            <div class="flex gap-2">
                                <button class="btn btn-primary" @click="saveDish">
                                    {{ $t('tools.what-to-eat.saveDish') }}
                                </button>
                                <button v-if="editingDish" class="btn btn-secondary" @click="cancelEdit">
                                    {{ $t('tools.what-to-eat.cancel') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 菜品列表 -->
                    <div class="space-y-2">
                        <h3 class="text-lg font-semibold mb-4">{{ $t('tools.what-to-eat.customMenu') }}</h3>
                        <div v-if="customMenuItems.length === 0" class="text-center py-8 text-gray-500">
                            {{ $t('tools.what-to-eat.menuEmpty') }}
                        </div>
                        <div v-for="(dish, idx) in customMenuItems" :key="'custom-' + idx"
                            class="p-4 border rounded-lg flex justify-between items-center">
                            <div class="flex-1">
                                <p class="font-semibold">{{ dish.name }}</p>
                                <p class="text-sm text-gray-500">{{ dish.kcal }} kcal</p>
                                <p class="text-xs text-gray-400 mt-1">{{ dish.tags.join(', ') }}</p>
                            </div>
                            <div class="flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="editCustomDish(idx)">
                                    {{ $t('tools.what-to-eat.editDish') }}
                                </button>
                                <button class="btn btn-sm btn-secondary" @click="deleteCustomDish(idx)">
                                    {{ $t('tools.what-to-eat.deleteDish') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <WhatToEatArticle />
    </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import WhatToEatArticle from './WhatToEatArticle.vue'

const { t } = useI18n()

const loading = ref(false)
const showMenuManager = ref(false)
const editingDish = ref(null)
const newDish = reactive({
    name: '',
    kcal: 0,
    tags: []
})

const form = reactive({
    mealTime: 'lunch',
    budget: 'standard',
    spice: 'mild',
    diet: 'omni',
    weather: 'hot',
    scene: 'solo',
    protein: 'normal',
    carbs: 'balanced'
})

// 默认菜单数据（使用key而不是中文）
const defaultMenuData = [
    { key: 'dish0', tags: ['breakfast', 'saver', 'mild', 'omni', 'hot', 'solo', 'balanced'], kcal: 380 },
    { key: 'dish1', tags: ['lunch', 'dinner', 'standard', 'mild', 'omni', 'rainy', 'family', 'balanced'], kcal: 620 },
    { key: 'dish2', tags: ['lunch', 'dinner', 'standard', 'hot', 'omni', 'family', 'balanced'], kcal: 540 },
    { key: 'dish3', tags: ['lunch', 'dinner', 'standard', 'mild', 'halal', 'family', 'balanced'], kcal: 680 },
    { key: 'dish4', tags: ['breakfast', 'lunch', 'standard', 'mild', 'halal', 'rainy', 'balanced'], kcal: 520 },
    { key: 'dish5', tags: ['lunch', 'dinner', 'premium', 'mild', 'vegan', 'hot', 'date', 'low'], kcal: 320 },
    { key: 'dish6', tags: ['lunch', 'dinner', 'standard', 'medium', 'veg', 'hot', 'date', 'low'], kcal: 430 },
    { key: 'dish7', tags: ['lunch', 'dinner', 'standard', 'medium', 'veg', 'family', 'balanced'], kcal: 580 },
    { key: 'dish8', tags: ['lunch', 'dinner', 'premium', 'mild', 'omni', 'cool', 'date', 'balanced'], kcal: 610 },
    { key: 'dish9', tags: ['breakfast', 'lunch', 'standard', 'mild', 'halal', 'hot', 'solo', 'balanced'], kcal: 480 },
    { key: 'dish10', tags: ['lunch', 'dinner', 'saver', 'medium', 'omni', 'solo', 'balanced'], kcal: 560 },
    { key: 'dish11', tags: ['lunch', 'dinner', 'standard', 'mild', 'omni', 'family', 'balanced'], kcal: 820 },
    { key: 'dish12', tags: ['dinner', 'latenight', 'standard', 'hot', 'omni', 'hot', 'date', 'balanced'], kcal: 520 },
    { key: 'dish13', tags: ['lunch', 'dinner', 'saver', 'medium', 'omni', 'rainy', 'solo', 'balanced'], kcal: 580 },
    { key: 'dish14', tags: ['breakfast', 'lunch', 'standard', 'mild', 'omni', 'solo', 'balanced'], kcal: 430 },
    { key: 'dish15', tags: ['breakfast', 'saver', 'mild', 'omni', 'rainy', 'solo', 'balanced'], kcal: 360 },
    { key: 'dish16', tags: ['lunch', 'dinner', 'premium', 'mild', 'omni', 'cool', 'date', 'low'], kcal: 410 },
    { key: 'dish17', tags: ['lunch', 'dinner', 'saver', 'mild', 'vegan', 'family', 'balanced'], kcal: 480 },
    { key: 'dish18', tags: ['lunch', 'dinner', 'saver', 'mild', 'veg', 'rainy', 'solo', 'balanced'], kcal: 520 },
    { key: 'dish19', tags: ['lunch', 'dinner', 'premium', 'mild', 'omni', 'cool', 'date', 'low'], kcal: 520 },
    { key: 'dish20', tags: ['lunch', 'dinner', 'standard', 'medium', 'omni', 'family', 'balanced'], kcal: 640 },
    { key: 'dish21', tags: ['lunch', 'dinner', 'saver', 'mild', 'veg', 'rainy', 'family', 'balanced'], kcal: 450 },
    { key: 'dish22', tags: ['lunch', 'dinner', 'saver', 'hot', 'omni', 'hot', 'solo', 'balanced'], kcal: 590 },
    { key: 'dish23', tags: ['lunch', 'dinner', 'standard', 'mild', 'omni', 'rainy', 'solo', 'balanced'], kcal: 700 },
    { key: 'dish24', tags: ['lunch', 'dinner', 'standard', 'mild', 'halal', 'date', 'low'], kcal: 430 },
    { key: 'dish25', tags: ['breakfast', 'standard', 'mild', 'veg', 'cool', 'solo', 'balanced'], kcal: 380 },
    { key: 'dish26', tags: ['lunch', 'dinner', 'standard', 'medium', 'vegan', 'family', 'balanced'], kcal: 610 },
    { key: 'dish27', tags: ['lunch', 'dinner', 'premium', 'hot', 'halal', 'rainy', 'family', 'balanced'], kcal: 550 },
    { key: 'dish28', tags: ['lunch', 'dinner', 'premium', 'mild', 'omni', 'cool', 'family', 'balanced'], kcal: 560 },
    { key: 'dish29', tags: ['lunch', 'dinner', 'saver', 'hot', 'omni', 'hot', 'solo', 'low'], kcal: 480 },
    { key: 'dish30', tags: ['breakfast', 'saver', 'mild', 'omni', 'hot', 'solo', 'balanced'], kcal: 430 },
    { key: 'dish31', tags: ['dinner', 'premium', 'mild', 'omni', 'date', 'balanced'], kcal: 650 },
    { key: 'dish32', tags: ['dinner', 'premium', 'mild', 'vegan', 'cool', 'date', 'low'], kcal: 420 },
    { key: 'dish33', tags: ['lunch', 'dinner', 'saver', 'medium', 'veg', 'hot', 'solo', 'low'], kcal: 520 },
    { key: 'dish34', tags: ['dinner', 'premium', 'hot', 'halal', 'rainy', 'family', 'balanced'], kcal: 780 },
    { key: 'dish35', tags: ['lunch', 'dinner', 'standard', 'mild', 'omni', 'cool', 'date', 'low'], kcal: 420 },
    { key: 'dish36', tags: ['lunch', 'dinner', 'standard', 'mild', 'halal', 'rainy', 'family', 'balanced'], kcal: 520 },
    { key: 'dish37', tags: ['dinner', 'standard', 'mild', 'omni', 'rainy', 'family', 'balanced'], kcal: 640 },
    { key: 'dish38', tags: ['lunch', 'dinner', 'standard', 'hot', 'omni', 'rainy', 'family', 'balanced'], kcal: 560 },
    { key: 'dish39', tags: ['lunch', 'dinner', 'standard', 'mild', 'halal', 'rainy', 'family', 'balanced'], kcal: 520 },
    { key: 'dish40', tags: ['breakfast', 'lunch', 'saver', 'mild', 'omni', 'hot', 'solo', 'balanced'], kcal: 420 },
    { key: 'dish41', tags: ['lunch', 'dinner', 'standard', 'hot', 'omni', 'family', 'balanced'], kcal: 510 },
    { key: 'dish42', tags: ['lunch', 'dinner', 'standard', 'mild', 'omni', 'rainy', 'family', 'balanced'], kcal: 580 },
    { key: 'dish43', tags: ['lunch', 'saver', 'mild', 'omni', 'solo', 'balanced'], kcal: 450 },
    { key: 'dish44', tags: ['lunch', 'dinner', 'standard', 'mild', 'omni', 'solo', 'balanced'], kcal: 520 },
    { key: 'dish45', tags: ['lunch', 'dinner', 'saver', 'medium', 'veg', 'hot', 'solo', 'low'], kcal: 480 },
    { key: 'dish46', tags: ['lunch', 'dinner', 'standard', 'mild', 'omni', 'family', 'balanced'], kcal: 650 },
    { key: 'dish47', tags: ['dinner', 'standard', 'mild', 'omni', 'family', 'balanced'], kcal: 640 },
    { key: 'dish48', tags: ['dinner', 'standard', 'mild', 'omni', 'family', 'balanced'], kcal: 700 },
    { key: 'dish49', tags: ['dinner', 'standard', 'mild', 'omni', 'family', 'balanced'], kcal: 600 },
    { key: 'dish50', tags: ['lunch', 'dinner', 'standard', 'medium', 'omni', 'family', 'balanced'], kcal: 650 },
    { key: 'dish51', tags: ['dinner', 'premium', 'mild', 'omni', 'cool', 'date', 'balanced'], kcal: 520 },
    { key: 'dish52', tags: ['lunch', 'dinner', 'standard', 'mild', 'halal', 'rainy', 'family', 'balanced'], kcal: 680 },
    { key: 'dish53', tags: ['lunch', 'dinner', 'standard', 'mild', 'omni', 'family', 'balanced'], kcal: 720 },
    { key: 'dish54', tags: ['lunch', 'dinner', 'standard', 'mild', 'omni', 'cool', 'date', 'low'], kcal: 360 },
    { key: 'dish55', tags: ['lunch', 'dinner', 'standard', 'mild', 'omni', 'solo', 'balanced'], kcal: 620 },
    { key: 'dish56', tags: ['lunch', 'dinner', 'standard', 'mild', 'veg', 'family', 'balanced'], kcal: 640 },
    { key: 'dish57', tags: ['lunch', 'dinner', 'standard', 'mild', 'veg', 'rainy', 'family', 'balanced'], kcal: 520 },
    { key: 'dish58', tags: ['dinner', 'standard', 'mild', 'veg', 'family', 'balanced'], kcal: 430 },
    { key: 'dish59', tags: ['lunch', 'standard', 'mild', 'omni', 'date', 'balanced'], kcal: 480 },
    { key: 'dish60', tags: ['lunch', 'dinner', 'premium', 'mild', 'omni', 'cool', 'date', 'low'], kcal: 420 },
    { key: 'dish61', tags: ['lunch', 'dinner', 'premium', 'mild', 'vegan', 'cool', 'date', 'low'], kcal: 440 },
    { key: 'dish62', tags: ['lunch', 'dinner', 'standard', 'mild', 'vegan', 'cool', 'date', 'low'], kcal: 430 },
    { key: 'dish63', tags: ['dinner', 'premium', 'mild', 'omni', 'family', 'balanced'], kcal: 720 },
    { key: 'dish64', tags: ['lunch', 'dinner', 'premium', 'mild', 'veg', 'cool', 'date', 'low'], kcal: 360 },
    { key: 'dish65', tags: ['lunch', 'dinner', 'standard', 'mild', 'veg', 'date', 'balanced'], kcal: 610 },
    { key: 'dish66', tags: ['lunch', 'dinner', 'standard', 'mild', 'veg', 'family', 'balanced'], kcal: 620 },
    { key: 'dish67', tags: ['lunch', 'dinner', 'saver', 'mild', 'veg', 'date', 'low'], kcal: 520 },
    { key: 'dish68', tags: ['lunch', 'dinner', 'standard', 'mild', 'vegan', 'date', 'low'], kcal: 440 },
    { key: 'dish69', tags: ['lunch', 'dinner', 'premium', 'mild', 'omni', 'family', 'balanced'], kcal: 690 },
    { key: 'dish70', tags: ['dinner', 'standard', 'mild', 'vegan', 'date', 'low'], kcal: 260 },
    { key: 'dish71', tags: ['lunch', 'dinner', 'standard', 'mild', 'omni', 'cool', 'date', 'balanced'], kcal: 350 },
    { key: 'dish72', tags: ['lunch', 'dinner', 'standard', 'medium', 'omni', 'date', 'balanced'], kcal: 480 },
    { key: 'dish73', tags: ['dinner', 'standard', 'mild', 'omni', 'family', 'balanced'], kcal: 460 },
    { key: 'dish74', tags: ['dinner', 'standard', 'mild', 'omni', 'rainy', 'family', 'balanced'], kcal: 520 },
    { key: 'dish75', tags: ['lunch', 'dinner', 'standard', 'medium', 'omni', 'family', 'balanced'], kcal: 600 },
    { key: 'dish76', tags: ['lunch', 'dinner', 'standard', 'mild', 'omni', 'date', 'low'], kcal: 360 },
    { key: 'dish77', tags: ['dinner', 'standard', 'medium', 'omni', 'family', 'balanced'], kcal: 650 },
    { key: 'dish78', tags: ['lunch', 'dinner', 'saver', 'medium', 'omni', 'solo', 'balanced'], kcal: 620 },
    { key: 'dish79', tags: ['lunch', 'dinner', 'standard', 'medium', 'omni', 'family', 'balanced'], kcal: 580 },
    { key: 'dish80', tags: ['dinner', 'standard', 'mild', 'vegan', 'family', 'balanced'], kcal: 420 },
    { key: 'dish81', tags: ['lunch', 'dinner', 'standard', 'mild', 'veg', 'date', 'low'], kcal: 380 },
    { key: 'dish82', tags: ['dinner', 'standard', 'mild', 'vegan', 'date', 'low'], kcal: 360 },
    { key: 'dish83', tags: ['breakfast', 'standard', 'mild', 'veg', 'cool', 'solo', 'balanced'], kcal: 320 },
    { key: 'dish84', tags: ['breakfast', 'standard', 'mild', 'veg', 'cool', 'solo', 'balanced'], kcal: 360 },
    { key: 'dish85', tags: ['breakfast', 'standard', 'mild', 'vegan', 'cool', 'solo', 'balanced'], kcal: 280 },
    { key: 'dish86', tags: ['dessert', 'premium', 'mild', 'veg', 'cool', 'date', 'balanced'], kcal: 320 },
    { key: 'dish87', tags: ['breakfast', 'standard', 'mild', 'veg', 'cool', 'solo', 'balanced'], kcal: 300 },
    { key: 'dish88', tags: ['breakfast', 'lunch', 'standard', 'mild', 'omni', 'cool', 'solo', 'balanced'], kcal: 420 },
    { key: 'dish89', tags: ['breakfast', 'standard', 'mild', 'omni', 'cool', 'solo', 'balanced'], kcal: 360 },
    { key: 'dish90', tags: ['lunch', 'dinner', 'saver', 'mild', 'vegan', 'family', 'balanced'], kcal: 430 },
    { key: 'dish91', tags: ['lunch', 'dinner', 'standard', 'mild', 'omni', 'family', 'balanced'], kcal: 680 },
    { key: 'dish92', tags: ['dinner', 'standard', 'mild', 'omni', 'date', 'balanced'], kcal: 520 },
    { key: 'dish93', tags: ['dinner', 'standard', 'mild', 'omni', 'family', 'balanced'], kcal: 540 },
    { key: 'dish94', tags: ['dinner', 'standard', 'mild', 'veg', 'family', 'balanced'], kcal: 480 },
    { key: 'dish95', tags: ['lunch', 'dinner', 'standard', 'mild', 'omni', 'rainy', 'family', 'balanced'], kcal: 420 },
    { key: 'dish96', tags: ['lunch', 'dinner', 'standard', 'mild', 'omni', 'cool', 'date', 'balanced'], kcal: 520 },
    { key: 'dish97', tags: ['dinner', 'premium', 'mild', 'omni', 'date', 'low'], kcal: 480 },
    { key: 'dish98', tags: ['dinner', 'premium', 'mild', 'omni', 'family', 'balanced'], kcal: 520 },
    { key: 'dish99', tags: ['dinner', 'standard', 'medium', 'omni', 'family', 'balanced'], kcal: 450 }
]

// 从localStorage加载自定义菜单
const customMenuItems = reactive([])

// 合并后的菜单（默认+自定义）
const menu = computed(() => {
    const defaultMenu = defaultMenuData.map(item => ({
        ...item,
        name: t(`tools.what-to-eat.${item.key}`)
    }))
    return [...defaultMenu, ...customMenuItems]
})

// 所有可用标签
const allTags = ['breakfast', 'lunch', 'dinner', 'latenight', 'saver', 'standard', 'premium', 'mild', 'medium', 'hot', 'omni', 'veg', 'vegan', 'halal', 'hot', 'cool', 'rainy', 'solo', 'date', 'family', 'overtime', 'balanced', 'low']

// 加载自定义菜单
function loadCustomMenu() {
    const saved = localStorage.getItem('what-to-eat-custom-menu')
    if (saved) {
        try {
            const items = JSON.parse(saved)
            customMenuItems.splice(0, customMenuItems.length, ...items)
        } catch (e) {
            console.error('Failed to load custom menu:', e)
        }
    }
}

// 保存自定义菜单
function saveCustomMenu() {
    localStorage.setItem('what-to-eat-custom-menu', JSON.stringify(customMenuItems))
}

// 添加/编辑菜品
function saveDish() {
    if (!newDish.name || !newDish.kcal || newDish.tags.length === 0) {
        return
    }
    
    if (editingDish.value !== null) {
        // 编辑模式
        const idx = editingDish.value
        customMenuItems[idx] = { ...newDish }
        editingDish.value = null
    } else {
        // 添加模式
        customMenuItems.push({ ...newDish })
    }
    
    saveCustomMenu()
    resetNewDish()
}

// 编辑自定义菜品
function editCustomDish(idx) {
    const dish = customMenuItems[idx]
    newDish.name = dish.name
    newDish.kcal = dish.kcal
    newDish.tags = [...dish.tags]
    editingDish.value = idx
}

// 删除自定义菜品
function deleteCustomDish(idx) {
    if (confirm(t('tools.what-to-eat.deleteConfirmText'))) {
        customMenuItems.splice(idx, 1)
        saveCustomMenu()
    }
}

// 取消编辑
function cancelEdit() {
    editingDish.value = null
    resetNewDish()
}

// 重置新菜品表单
function resetNewDish() {
    newDish.name = ''
    newDish.kcal = 0
    newDish.tags = []
}

// 获取标签显示文本
function getTagLabel(tag) {
    const tagMap = {
        'breakfast': t('tools.what-to-eat.mealBreakfast'),
        'lunch': t('tools.what-to-eat.mealLunch'),
        'dinner': t('tools.what-to-eat.mealDinner'),
        'latenight': t('tools.what-to-eat.mealLateNight'),
        'saver': t('tools.what-to-eat.budgetSaver'),
        'standard': t('tools.what-to-eat.budgetStandard'),
        'premium': t('tools.what-to-eat.budgetPremium'),
        'mild': t('tools.what-to-eat.spiceMild'),
        'medium': t('tools.what-to-eat.spiceMedium'),
        'hot': t('tools.what-to-eat.spiceHot'),
        'omni': t('tools.what-to-eat.dietOmni'),
        'veg': t('tools.what-to-eat.dietVeg'),
        'vegan': t('tools.what-to-eat.dietVegan'),
        'halal': t('tools.what-to-eat.dietHalal'),
        'cool': t('tools.what-to-eat.weatherCool'),
        'rainy': t('tools.what-to-eat.weatherRainy'),
        'solo': t('tools.what-to-eat.sceneSolo'),
        'date': t('tools.what-to-eat.sceneDate'),
        'family': t('tools.what-to-eat.sceneFamily'),
        'overtime': t('tools.what-to-eat.sceneOvertime'),
        'balanced': t('tools.what-to-eat.carbsNormal'),
        'low': t('tools.what-to-eat.carbsLight')
    }
    return tagMap[tag] || tag
}

onMounted(() => {
    loadCustomMenu()
})

const recommendations = reactive([])

function scoreDish(dish) {
    let score = 0
    const addIf = (cond, weight) => { if (cond) score += weight }

    addIf(dish.tags.includes(form.mealTime), 3)
    addIf(dish.tags.includes(form.budget), 2)
    addIf(dish.tags.includes(form.spice === 'hot' ? 'hot' : form.spice === 'medium' ? 'medium' : 'mild'), 2)
    addIf(dish.tags.includes(form.diet === 'omni' ? 'omni' : form.diet), 3)
    addIf(dish.tags.includes(form.weather), 2)
    addIf(dish.tags.includes(form.scene), 1.5)
    addIf(form.protein === 'high' && dish.kcal >= 450, 1.5)
    addIf(form.carbs === 'low' && dish.tags.includes('low'), 2)
    addIf(form.carbs === 'balanced' && dish.tags.includes('balanced'), 1)

    // 随机微扰，避免每次相同
    score += Math.random() * 1.2
    return score
}

function pickTop() {
    const scored = menu.value
        .map(item => ({ ...item, score: scoreDish(item) }))
        .sort((a, b) => b.score - a.score)
    recommendations.splice(0)
    recommendations.push(scored[0], scored[1], scored[2])
}

function generate() {
    loading.value = true
    setTimeout(() => {
        pickTop()
        loading.value = false
    }, 50)
}

function refresh() {
    if (!recommendations.length) {
        generate()
        return
    }
    generate()
}

function resetAll() {
    form.mealTime = 'lunch'
    form.budget = 'standard'
    form.spice = 'mild'
    form.diet = 'omni'
    form.weather = 'hot'
    form.scene = 'solo'
    form.protein = 'normal'
    form.carbs = 'balanced'
    recommendations.splice(0)
}

function rationale(idx) {
    const dish = recommendations[idx]
    if (!dish) return ''
    const parts = []
    if (dish.tags.includes(form.mealTime)) parts.push(t('tools.what-to-eat.mealTime'))
    if (dish.tags.includes(form.budget)) parts.push(t('tools.what-to-eat.budget'))
    if (dish.tags.includes(form.spice === 'hot' ? 'hot' : form.spice === 'medium' ? 'medium' : 'mild')) parts.push(t('tools.what-to-eat.spice'))
    if (dish.tags.includes(form.weather)) parts.push(t('tools.what-to-eat.weather'))
    if (dish.tags.includes(form.scene)) parts.push(t('tools.what-to-eat.scene'))
    return `${t('tools.what-to-eat.rationale')}${t('tools.what-to-eat.rationalePrefix')}${parts.join(t('tools.what-to-eat.rationaleSeparator'))}`
}

function tagLine(idx) {
    const dish = recommendations[idx]
    if (!dish) return ''
    return dish.tags.join(t('tools.what-to-eat.tagSeparator'))
}

function formatEnergy(idx) {
    const dish = recommendations[idx]
    if (!dish) return ''
    return `${t('tools.what-to-eat.kcalHint')} ${dish.kcal} kcal`
}
</script>

<style scoped>
.btn {
    @apply px-4 py-2 rounded font-semibold shadow transition-colors duration-200 flex items-center justify-center;
}

.btn-sm {
    @apply px-3 py-1 text-sm;
}

.btn-success {
    @apply bg-green-600 hover:bg-green-700 text-white;
}

.btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-secondary {
    @apply bg-gray-600 hover:bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}

.form-select {
    @apply mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500;
}

.form-input {
    @apply mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2;
}

.form-checkbox {
    @apply rounded border-gray-300 text-blue-600 focus:ring-blue-500;
}

@media (max-width: 768px) {
    .btn {
        @apply px-3 py-1.5 text-sm;
    }

    .btn-sm {
        @apply px-2 py-1 text-xs;
    }
}
</style>

