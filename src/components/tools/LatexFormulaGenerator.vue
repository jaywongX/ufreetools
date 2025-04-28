<template>
  <div class="latex-formula-generator">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 左侧：输入区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h2 class="text-xl font-bold mb-4">{{ t('tools.latex-formula-generator.input') }}</h2>
        <textarea
          v-model="latexInput"
          class="w-full h-64 p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          @input="debouncedRender"
          placeholder="\frac{-b \pm \sqrt{b^2-4ac}}{2a}"
        ></textarea>
        
        <div class="flex space-x-2 mt-4">
          <button 
            @click="renderFormula" 
            class="btn-primary"
          >{{ t('tools.latex-formula-generator.renderButton') }}</button>
          <button 
            @click="exportImage" 
            class="btn-secondary" 
            :disabled="!renderSuccess"
          >{{ t('tools.latex-formula-generator.exportButton') }}</button>
          <button 
            @click="copyLatex" 
            class="btn-outline"
          >{{ t('tools.latex-formula-generator.copyButton') }}</button>
        </div>
        
        <!-- 设置面板 -->
        <div class="mt-6">
          <h3 class="font-semibold mb-2">{{ t('tools.latex-formula-generator.settings.title') }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm mb-1">{{ t('tools.latex-formula-generator.settings.fontSize') }}</label>
              <input 
                v-model="fontSize" 
                type="number" 
                min="1" 
                max="5" 
                step="0.1"
                class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                @change="renderFormula"
              >
            </div>
            <div>
              <label class="block text-sm mb-1">{{ t('tools.latex-formula-generator.settings.textColor') }}</label>
              <input 
                v-model="textColor" 
                type="color"
                class="w-full p-1 h-10 border rounded dark:bg-gray-700 dark:border-gray-600"
                @change="renderFormula"
              >
            </div>
            <div>
              <label class="block text-sm mb-1">{{ t('tools.latex-formula-generator.settings.backgroundColor') }}</label>
              <input 
                v-model="backgroundColor" 
                type="color"
                class="w-full p-1 h-10 border rounded dark:bg-gray-700 dark:border-gray-600"
                @change="renderFormula"
              >
            </div>
            <div>
              <label class="block text-sm mb-1">{{ t('tools.latex-formula-generator.settings.displayMode') }}</label>
              <select 
                v-model="displayMode" 
                class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                @change="renderFormula"
              >
                <option :value="false">{{ t('tools.latex-formula-generator.settings.displayModeInline') }}</option>
                <option :value="true">{{ t('tools.latex-formula-generator.settings.displayModeBlock') }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 右侧：预览区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h2 class="text-xl font-bold mb-4">{{ t('tools.latex-formula-generator.output') }}</h2>
        <div 
          ref="previewContainer"
          class="preview-container border rounded-md p-6 min-h-64 flex items-center justify-center"
          :style="{ backgroundColor: backgroundColor }"
        >
          <div 
            ref="formulaOutput" 
            :style="{ color: textColor, display: renderSuccess ? 'block' : 'none' }"
          ></div>
          
          <div 
            v-if="renderError" 
            class="text-red-500 dark:text-red-400"
          >
            <h3 class="font-bold">{{ t('tools.latex-formula-generator.errorTitle') }}</h3>
            <p>{{ t('tools.latex-formula-generator.errorMessage') }}</p>
            <pre class="mt-2 text-xs bg-red-50 dark:bg-red-900 p-2 rounded">{{ renderError }}</pre>
          </div>
        </div>
        
        <!-- 示例区域 -->
        <div class="mt-6">
          <h3 class="font-semibold mb-2">{{ t('tools.latex-formula-generator.examples.title') }}</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
            <button 
              @click="setExample('\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}')"
              class="p-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >{{ t('tools.latex-formula-generator.examples.basic') }}</button>
            <button 
              @click="setExample('\\frac{\\partial^2 f}{\\partial x^2}')"
              class="p-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >{{ t('tools.latex-formula-generator.examples.fraction') }}</button>
            <button 
              @click="setExample('e^{i\\pi} + 1 = 0')"
              class="p-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >{{ t('tools.latex-formula-generator.examples.superscript') }}</button>
            <button 
              @click="setExample('\\int_{a}^{b} f(x) \\, dx')"
              class="p-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >{{ t('tools.latex-formula-generator.examples.integral') }}</button>
            <button 
              @click="setExample('\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}')"
              class="p-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >{{ t('tools.latex-formula-generator.examples.matrix') }}</button>
            <button 
              @click="showMoreExamples = !showMoreExamples"
              class="p-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >{{ t('tools.latex-formula-generator.examples.more') }}</button>
          </div>
          
          <!-- 更多示例 -->
          <div v-if="showMoreExamples" class="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <div 
              v-for="(example, index) in moreExamples" 
              :key="index"
              @click="setExample(example.formula)"
              class="p-2 border rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div class="font-bold mb-1">{{ example.name }}</div>
              <div class="text-gray-600 dark:text-gray-400 font-mono">{{ example.formula }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LaTeXFormulaGeneratorArticle />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import debounce from 'lodash/debounce';
import LaTeXFormulaGeneratorArticle from './LaTeXFormulaGeneratorArticle.vue'

const { t } = useI18n();

// 状态
const latexInput = ref('\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}');
const fontSize = ref(2);
const textColor = ref('#000000');
const backgroundColor = ref('#ffffff');
const displayMode = ref(true);
const renderSuccess = ref(false);
const renderError = ref(null);
const showMoreExamples = ref(false);

// DOM引用
const formulaOutput = ref(null);
const previewContainer = ref(null);

// 更多示例
const moreExamples = [
  { name: '极限', formula: '\\lim_{x \\to \\infty} \\frac{1}{x} = 0' },
  { name: '累加', formula: '\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}' },
  { name: '累乘', formula: '\\prod_{i=1}^{n} i = n!' },
  { name: '开方', formula: '\\sqrt[n]{x^n + y^n} \\geq \\sqrt[n]{x^n} + \\sqrt[n]{y^n}' },
  { name: '集合', formula: 'A \\cap B = \\{x \\in U : x \\in A \\text{ and } x \\in B\\}' },
  { name: '极坐标', formula: 'r = 2a\\cos\\theta' },
  { name: '傅里叶变换', formula: 'f(x) = \\int_{-\\infty}^{\\infty}\\hat{f}(\\xi)e^{2\\pi i \\xi x}d\\xi' },
  { name: '拉普拉斯算子', formula: '\\Delta f = \\frac{\\partial^2 f}{\\partial x^2} + \\frac{\\partial^2 f}{\\partial y^2}' }
];

// 初始化KaTeX
let katex;
onMounted(async () => {
  // 动态导入KaTeX库
  const katexModule = await import('katex');
  katex = katexModule.default;
  
  // 加载KaTeX CSS
  if (!document.getElementById('katex-css')) {
    const link = document.createElement('link');
    link.id = 'katex-css';
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css';
    document.head.appendChild(link);
  }
  
  renderFormula();
});

// 渲染公式
const renderFormula = () => {
  if (!katex || !formulaOutput.value) return;
  
  try {
    katex.render(latexInput.value, formulaOutput.value, {
      displayMode: displayMode.value,
      throwOnError: true,
      errorColor: '#cc0000',
      fontSize: `${fontSize.value}em`
    });
    renderSuccess.value = true;
    renderError.value = null;
  } catch (error) {
    renderSuccess.value = false;
    renderError.value = error.message;
    console.error('LaTeX渲染错误:', error);
  }
};

// 防抖处理以避免频繁渲染
const debouncedRender = debounce(renderFormula, 500);

// 导出图片
const exportImage = async () => {
  if (!renderSuccess.value || !previewContainer.value) return;
  
  try {
    const html2canvas = (await import('html2canvas')).default;
    const canvas = await html2canvas(previewContainer.value, {
      backgroundColor: backgroundColor.value,
      scale: 2, // 高分辨率
      logging: false,
      useCORS: true
    });

    // 将Canvas转为图片并下载
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'latex-formula.png';
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('导出图片失败:', error);
  }
};

// 复制LaTeX代码
const copyLatex = () => {
  navigator.clipboard.writeText(latexInput.value).then(() => {
    // 这里可以添加复制成功的提示
    alert(t('tools.latex-formula-generator.copied'));
  });
};

// 设置示例
const setExample = (example) => {
  latexInput.value = example;
  renderFormula();
};

// 监听输入变化
watch([fontSize, textColor, backgroundColor, displayMode], renderFormula);
</script>

<style scoped>
.btn-primary {
  @apply px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors;
}

.btn-secondary {
  @apply px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-outline {
  @apply px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors;
}

.preview-container {
  transition: background-color 0.3s ease;
}

@media (max-width: 768px) {
  .grid-cols-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style> 