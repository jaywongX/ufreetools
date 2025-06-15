<template>
  <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
    <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.diagram-examples.title') }}</h3>

    <div class="space-y-6">
      <!-- Software Development Example -->
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <div
          class="bg-gray-50 dark:bg-gray-750 p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h4 class="font-medium text-gray-700 dark:text-gray-300">{{
            $t('tools.diagram-examples.examples.softwareDevelopment') }}</h4>
          <button @click="copyExample('softwareDevelopment')"
            class="text-primary dark:text-primary-light hover:underline text-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            {{ $t('tools.diagram-examples.actions.copyCode') }}
          </button>
        </div>
        <div class="p-4">
          <div id="softwareDiagram" class="bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm text-gray-800 dark:text-gray-200 overflow-x-auto" v-html="renderedDiagrams.software"></div>
        </div>
      </div>

      <!-- Project Management Example -->
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <div
          class="bg-gray-50 dark:bg-gray-750 p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h4 class="font-medium text-gray-700 dark:text-gray-300">{{
            $t('tools.diagram-examples.examples.projectManagement') }}</h4>
          <button @click="copyExample('projectManagement')"
            class="text-primary dark:text-primary-light hover:underline text-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            {{ $t('tools.diagram-examples.actions.copyCode') }}
          </button>
        </div>
        <div class="p-4">
          <div id="projectDiagram" class="bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm text-gray-800 dark:text-gray-200 overflow-x-auto" v-html="renderedDiagrams.project"></div>
        </div>
      </div>

      <!-- User Registration Example -->
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <div
          class="bg-gray-50 dark:bg-gray-750 p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h4 class="font-medium text-gray-700 dark:text-gray-300">{{
            $t('tools.diagram-examples.examples.userRegistration') }}</h4>
          <button @click="copyExample('userRegistration')"
            class="text-primary dark:text-primary-light hover:underline text-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            {{ $t('tools.diagram-examples.actions.copyCode') }}
          </button>
        </div>
        <div class="p-4">
          <div id="userDiagram" class="bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm text-gray-800 dark:text-gray-200 overflow-x-auto" v-html="renderedDiagrams.user"></div>
        </div>
      </div>
    </div>

    <!-- 文章部分 -->
    <div class="mt-10 pt-6 border-t dark:border-gray-700">
      <DiagramExamplesArticle />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import DiagramExamplesArticle from './DiagramExamplesArticle.vue'
import mermaid from 'mermaid'

const { t } = useI18n()

// 存储渲染后的图表HTML
const renderedDiagrams = ref({
  software: '',
  project: '',
  user: ''
})

// 初始化Mermaid并渲染图表
onMounted(async () => {
  // 配置Mermaid
  mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    securityLevel: 'loose',
    fontFamily: 'sans-serif'
  })

  try {
    // 渲染软件开发流程图
    const softwareCode = t('tools.diagram-examples.exampleCodes.softwareDevelopment')
    const { svg: softwareSvg } = await mermaid.render('software-diagram', softwareCode)
    renderedDiagrams.value.software = softwareSvg

    // 渲染项目管理甘特图
    const projectCode = t('tools.diagram-examples.exampleCodes.projectManagement')
    const { svg: projectSvg } = await mermaid.render('project-diagram', projectCode)
    renderedDiagrams.value.project = projectSvg

    // 渲染用户注册流程图
    const userCode = t('tools.diagram-examples.exampleCodes.userRegistration')
    const { svg: userSvg } = await mermaid.render('user-diagram', userCode)
    renderedDiagrams.value.user = userSvg
  } catch (error) {
    console.error('Mermaid渲染错误:', error)
  }
})

// 复制示例代码到剪贴板
async function copyExample(exampleKey) {
  try {
    const code = t(`tools.diagram-examples.exampleCodes.${exampleKey}`)
    await navigator.clipboard.writeText(code)
    alert(t('tools.diagram-examples.messages.copied'))
  } catch (error) {
    console.error('复制失败:', error)
    alert(t('tools.diagram-examples.messages.copyFailed'))
  }
}
</script>