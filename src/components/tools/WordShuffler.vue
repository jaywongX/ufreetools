<template>
  <div class="word-shuffler w-full">

    <!-- 主要内容区域 - 左右两栏布局 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <!-- 左栏：输入区 -->
      <div class="flex flex-col h-full">
        <div class="flex justify-between items-center mb-2">
          <label class="text-sm font-medium">{{ $t('tools.word-shuffler.inputLabel') }}</label>
          <div class="text-xs text-gray-500">
            <span v-if="getWordCount(inputText) > 0">{{ getWordCount(inputText) }} {{ $t('tools.word-shuffler.wordCount') }}</span>
          </div>
        </div>
        <textarea
          v-model="inputText"
          class="flex-grow w-full p-3 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-700 min-h-[250px]"
          :placeholder="$t('tools.word-shuffler.inputPlaceholder')"
        ></textarea>
        <div class="flex flex-wrap gap-2 mt-2">
          <button @click="importFromFile" class="text-sm px-3 py-1.5 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
            {{ $t('tools.word-shuffler.importButton') }}
          </button>
          <button @click="clearInput" class="text-sm px-3 py-1.5 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
            {{ $t('tools.word-shuffler.clearInputButton') }}
          </button>
          <button @click="pasteExampleText" class="text-sm px-3 py-1.5 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
            {{ $t('tools.word-shuffler.useExampleButton') }}
          </button>
        </div>
      </div>

      <!-- 右栏：输出区 -->
      <div class="flex flex-col h-full">
        <div class="flex justify-between items-center mb-2">
          <label class="text-sm font-medium">{{ $t('tools.word-shuffler.outputLabel') }}</label>
          <div class="text-xs text-gray-500">
            <span v-if="getWordCount(outputText) > 0">{{ getWordCount(outputText) }} {{ $t('tools.word-shuffler.wordCount') }}</span>
          </div>
        </div>
        <div 
          class="flex-grow w-full p-3 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-700 min-h-[250px] whitespace-pre-wrap overflow-auto"
        >{{ outputText }}</div>
        <div class="flex flex-wrap gap-2 mt-2">
          <button @click="copyResult" class="text-sm px-3 py-1.5 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600" :disabled="!outputText">
            {{ $t('tools.word-shuffler.copyButton') }}
          </button>
          <button @click="downloadResult" class="text-sm px-3 py-1.5 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600" :disabled="!outputText">
            {{ $t('tools.word-shuffler.downloadButton') }}
          </button>
          <button @click="clearOutput" class="text-sm px-3 py-1.5 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600" :disabled="!outputText">
            {{ $t('tools.word-shuffler.clearOutputButton') }}
          </button>
        </div>
        <div v-if="copied" class="mt-2 text-green-600 dark:text-green-400 text-sm">
          {{ $t('tools.word-shuffler.copiedMessage') }}
        </div>
      </div>
    </div>

    <!-- 按钮区域 -->
    <div class="mb-6">
      <button 
        @click="shuffleText" 
        class="w-full px-4 py-3 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 dark:bg-primary-dark dark:hover:bg-primary font-medium"
      >
        {{ $t('tools.word-shuffler.shuffleButton') }}
      </button>
    </div>

    <!-- 折叠选项面板 -->
    <div class="mb-6 border rounded-md dark:border-gray-700 overflow-hidden">
      <div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800">
        <h3 class="font-medium">{{ $t('tools.word-shuffler.advancedOptions') }}</h3>
      </div>
      
      <div class="p-4 bg-white dark:bg-gray-900 divide-y dark:divide-gray-700">
        <!-- 洗牌模式 -->
        <div class="py-3">
          <h4 class="font-medium mb-2">{{ $t('tools.word-shuffler.shuffleMode') }}</h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <label class="flex items-center">
              <input type="radio" v-model="shuffleMode" value="word" class="form-radio text-primary">
              <span class="ml-2">{{ $t('tools.word-shuffler.modes.word') }}</span>
            </label>
            <label class="flex items-center">
              <input type="radio" v-model="shuffleMode" value="sentence" class="form-radio text-primary">
              <span class="ml-2">{{ $t('tools.word-shuffler.modes.sentence') }}</span>
            </label>
            <label class="flex items-center">
              <input type="radio" v-model="shuffleMode" value="line" class="form-radio text-primary">
              <span class="ml-2">{{ $t('tools.word-shuffler.modes.line') }}</span>
            </label>
            <label class="flex items-center">
              <input type="radio" v-model="shuffleMode" value="character" class="form-radio text-primary">
              <span class="ml-2">{{ $t('tools.word-shuffler.modes.character') }}</span>
            </label>
            <label class="flex items-center">
              <input type="radio" v-model="shuffleMode" value="paragraph" class="form-radio text-primary">
              <span class="ml-2">{{ $t('tools.word-shuffler.modes.paragraph') }}</span>
            </label>
          </div>
        </div>
        
        <!-- 分隔符设置 -->
        <div class="py-3">
          <h4 class="font-medium mb-2">{{ $t('tools.word-shuffler.delimiterOptions') }}</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm mb-1">{{ $t('tools.word-shuffler.wordDelimiters') }}</label>
              <input type="text" v-model="wordDelimiters" class="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-700">
              <p class="text-xs text-gray-500 mt-1">{{ $t('tools.word-shuffler.wordDelimitersHint') }}</p>
            </div>
            <div>
              <label class="block text-sm mb-1">{{ $t('tools.word-shuffler.sentenceDelimiters') }}</label>
              <input type="text" v-model="sentenceDelimiters" class="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-700">
              <p class="text-xs text-gray-500 mt-1">{{ $t('tools.word-shuffler.sentenceDelimitersHint') }}</p>
            </div>
          </div>
        </div>
        
        <!-- 保留选项 -->
        <div class="py-3">
          <h4 class="font-medium mb-2">{{ $t('tools.word-shuffler.preserveOptions') }}</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <label class="flex items-center">
              <input type="checkbox" v-model="preserveCapitalization" class="form-checkbox text-primary">
              <span class="ml-2">{{ $t('tools.word-shuffler.preserveCapitalization') }}</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" v-model="preservePunctuation" class="form-checkbox text-primary">
              <span class="ml-2">{{ $t('tools.word-shuffler.preservePunctuation') }}</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" v-model="removeRepeatedWords" class="form-checkbox text-primary">
              <span class="ml-2">{{ $t('tools.word-shuffler.removeRepeatedWords') }}</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" v-model="preserveSpacing" class="form-checkbox text-primary">
              <span class="ml-2">{{ $t('tools.word-shuffler.preserveSpacing') }}</span>
            </label>
          </div>
        </div>
        
        <!-- 高级设置 -->
        <div class="py-3">
          <h4 class="font-medium mb-2">{{ $t('tools.word-shuffler.additionalOptions') }}</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm mb-1">{{ $t('tools.word-shuffler.repeatCount') }}</label>
              <input type="number" v-model.number="repeatCount" min="1" max="10" class="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-700">
              <p class="text-xs text-gray-500 mt-1">{{ $t('tools.word-shuffler.repeatCountHint') }}</p>
            </div>
            <div>
              <label class="block text-sm mb-1">{{ $t('tools.word-shuffler.shuffleGroup') }}</label>
              <input type="number" v-model.number="shuffleGroup" min="1" max="10" class="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-700">
              <p class="text-xs text-gray-500 mt-1">{{ $t('tools.word-shuffler.shuffleGroupHint') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 示例展示区 -->
    <div class="mb-6 border rounded-md dark:border-gray-700 overflow-hidden">
      <div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800">
        <h3 class="font-medium">{{ $t('tools.word-shuffler.examplesTitle') }}</h3>
      </div>
      
      <div class="p-4 bg-white dark:bg-gray-900">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="border rounded-md p-3 dark:border-gray-700">
            <h4 class="font-medium mb-2">{{ examples[0].title }}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ examples[0].description }}</p>
            <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded mb-2 overflow-auto max-h-24">{{ examples[0].input }}</pre>
            <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded mb-2 overflow-auto max-h-24">{{ examples[0].output }}</pre>
            <button @click="loadExample(examples[0])" class="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
              {{ $t('tools.word-shuffler.useThisExample') }}
            </button>
          </div>
          <div class="border rounded-md p-3 dark:border-gray-700">
            <h4 class="font-medium mb-2">{{ examples[1].title }}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ examples[1].description }}</p>
            <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded mb-2 overflow-auto max-h-24">{{ examples[1].input }}</pre>
            <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded mb-2 overflow-auto max-h-24">{{ examples[1].output }}</pre>
            <button @click="loadExample(examples[1])" class="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
              {{ $t('tools.word-shuffler.useThisExample') }}
            </button>
          </div>
          <div class="border rounded-md p-3 dark:border-gray-700">
            <h4 class="font-medium mb-2">{{ examples[2].title }}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ examples[2].description }}</p>
            <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded mb-2 overflow-auto max-h-24">{{ examples[2].input }}</pre>
            <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded mb-2 overflow-auto max-h-24">{{ examples[2].output }}</pre>
            <button @click="loadExample(examples[2])" class="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
              {{ $t('tools.word-shuffler.useThisExample') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 帮助和信息部分 -->
    <div class="border rounded-md dark:border-gray-700 overflow-hidden">
      <div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800">
        <h3 class="font-medium">{{ $t('tools.word-shuffler.helpTitle') }}</h3>
      </div>
      
      <div class="p-4 bg-white dark:bg-gray-900">
        <h4 class="font-medium mb-2">{{ $t('tools.word-shuffler.whatIsTitle') }}</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4" v-html="$t('tools.word-shuffler.whatIsDescription')"></p>
        
        <h4 class="font-medium mb-2">{{ $t('tools.word-shuffler.howToUseTitle') }}</h4>
        <ol class="list-decimal pl-5 mb-4 text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <li><span class="font-medium">{{ $t('tools.word-shuffler.stepLabel') }} 1:</span> {{ $t(`tools.word-shuffler.howToUseSteps.0`) }}</li>
          <li><span class="font-medium">{{ $t('tools.word-shuffler.stepLabel') }} 2:</span> {{ $t(`tools.word-shuffler.howToUseSteps.1`) }}</li>
          <li><span class="font-medium">{{ $t('tools.word-shuffler.stepLabel') }} 3:</span> {{ $t(`tools.word-shuffler.howToUseSteps.2`) }}</li>
          <li><span class="font-medium">{{ $t('tools.word-shuffler.stepLabel') }} 4:</span> {{ $t(`tools.word-shuffler.howToUseSteps.3`) }}</li>
          <li><span class="font-medium">{{ $t('tools.word-shuffler.stepLabel') }} 5:</span> {{ $t(`tools.word-shuffler.howToUseSteps.4`) }}</li>
        </ol>
        
        <h4 class="font-medium mb-2">{{ $t('tools.word-shuffler.tipsTitle') }}</h4>
        <ul class="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <li>{{ $t(`tools.word-shuffler.tips.0`) }}</li>
          <li>{{ $t(`tools.word-shuffler.tips.1`) }}</li>
          <li>{{ $t(`tools.word-shuffler.tips.2`) }}</li>
          <li>{{ $t(`tools.word-shuffler.tips.3`) }}</li>
          <li>{{ $t(`tools.word-shuffler.tips.4`) }}</li>
        </ul>
      </div>
    </div>

    <!-- 添加文章部分 -->
    <div class="mt-10 pt-6 border-t dark:border-gray-700">
      <WordShufflerArticle />
    </div>

    <!-- 隐藏的文件输入 -->
    <input 
      ref="fileInput" 
      type="file" 
      accept=".txt" 
      class="hidden" 
      @change="handleFileUpload"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import WordShufflerArticle from './WordShufflerArticle.vue';

const { t } = useI18n();

// 基本状态
const inputText = ref('');
const outputText = ref('');
const copied = ref(false);
const fileInput = ref(null);

// UI控制
const showOptions = ref(true);
const showExamples = ref(true);
const showHelp = ref(true);

// 洗牌选项
const shuffleMode = ref('word');
const preserveCapitalization = ref(true);
const preservePunctuation = ref(true);
const removeRepeatedWords = ref(false);
const preserveSpacing = ref(true);
const wordDelimiters = ref(' .,!?;:()[]{}"\'-_');
const sentenceDelimiters = ref('.!?');
const repeatCount = ref(1);
const shuffleGroup = ref(1);

// 示例数据
const examples = computed(() => [
  {
    title: t('tools.word-shuffler.examples.basic.title'),
    description: t('tools.word-shuffler.examples.basic.description'),
    input: t('tools.word-shuffler.examples.basic.input'),
    output: t('tools.word-shuffler.examples.basic.output'),
    options: {
      mode: 'word',
      preserveCapitalization: true,
      preservePunctuation: true
    }
  },
  {
    title: t('tools.word-shuffler.examples.sentence.title'),
    description: t('tools.word-shuffler.examples.sentence.description'),
    input: t('tools.word-shuffler.examples.sentence.input'),
    output: t('tools.word-shuffler.examples.sentence.output'),
    options: {
      mode: 'sentence',
      preserveCapitalization: true,
      preservePunctuation: true
    }
  },
  {
    title: t('tools.word-shuffler.examples.creative.title'),
    description: t('tools.word-shuffler.examples.creative.description'),
    input: t('tools.word-shuffler.examples.creative.input'),
    output: t('tools.word-shuffler.examples.creative.output'),
    options: {
      mode: 'word',
      preserveCapitalization: false,
      preservePunctuation: false
    }
  }
]);

// 助手函数
function getWordCount(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

function shuffleArray(array) {
  // Fisher-Yates shuffle algorithm
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// 清除重复单词
function removeRepeats(words) {
  if (!removeRepeatedWords.value) return words;
  
  const uniqueWords = [];
  const seen = new Set();
  
  for (const word of words) {
    const lowerWord = word.toLowerCase();
    if (!seen.has(lowerWord)) {
      seen.add(lowerWord);
      uniqueWords.push(word);
    }
  }
  
  return uniqueWords;
}

// 核心洗牌函数
function shuffleText() {
  if (!inputText.value.trim()) return;
  
  let result = '';
  
  // 根据不同模式进行洗牌
  switch (shuffleMode.value) {
    case 'word':
      result = shuffleWords();
      break;
    case 'sentence':
      result = shuffleSentences();
      break;
    case 'line':
      result = shuffleLines();
      break;
    case 'character':
      result = shuffleCharacters();
      break;
    case 'paragraph':
      result = shuffleParagraphs();
      break;
  }
  
  // 如果设置了重复次数，重复生成多个结果
  if (repeatCount.value > 1) {
    let repeatedResult = result;
    for (let i = 1; i < repeatCount.value; i++) {
      if (shuffleMode.value === 'word') {
        repeatedResult += '\n\n' + shuffleWords();
      } else if (shuffleMode.value === 'sentence') {
        repeatedResult += '\n\n' + shuffleSentences();
      } else if (shuffleMode.value === 'line') {
        repeatedResult += '\n\n' + shuffleLines();
      } else if (shuffleMode.value === 'character') {
        repeatedResult += '\n\n' + shuffleCharacters();
      } else if (shuffleMode.value === 'paragraph') {
        repeatedResult += '\n\n' + shuffleParagraphs();
      }
    }
    result = repeatedResult;
  }
  
  outputText.value = result;
}

// 单词洗牌
function shuffleWords() {
  if (!inputText.value.trim()) return '';

  let result = '';
  
  // 检测是否包含中文
  const hasChinese = /[\u4e00-\u9fa5]/.test(inputText.value);
  
  try {
    if (hasChinese) {
      // 中文文本处理 - 按字符分割并保留标点
      const pattern = new RegExp(`([${wordDelimiters.value}]|\\s+)`, 'g');
      let parts;
      try {
        parts = inputText.value.split(pattern).filter(Boolean);
      } catch(e) {
        // 如果正则表达式有问题，使用更简单的分割方法
        parts = [];
        let currentWord = '';
        for (let i = 0; i < inputText.value.length; i++) {
          const char = inputText.value[i];
          if (/\s/.test(char) || wordDelimiters.value.includes(char)) {
            if (currentWord) {
              parts.push(currentWord);
              currentWord = '';
            }
            parts.push(char);
          } else {
            currentWord += char;
          }
        }
        if (currentWord) parts.push(currentWord);
      }
      
      // 分离文字和标点/空格
      const words = parts.filter((p, i) => i % 2 === 0 || !/[^\s]/.test(p));
      const punctuation = parts.filter((p, i) => i % 2 === 1 && /[^\s]/.test(p));
      
      // 洗牌中文字符
      const shuffledWords = shuffleArray([...words]);
      
      // 重建文本
      result = '';
      for (let i = 0; i < shuffledWords.length; i++) {
        result += shuffledWords[i];
        if (i < punctuation.length) {
          result += punctuation[i];
        }
      }
    } else {
      // 英文处理保持不变
      // ... 原有英文处理代码 ...
      if (preservePunctuation.value) {
        // 使用自定义的分隔符
        const delimiters = wordDelimiters.value.split('').map(d => 
          d === '.' || d === '?' || d === '!' || d === '*' || d === '+' ? '\\' + d : d
        ).join('');
        const regex = new RegExp(`([${delimiters}]|\\s+)`, 'g');
        const parts = inputText.value.split(regex);
        
        const words = parts.filter((part, index) => index % 2 === 0);
        const punctuation = parts.filter((part, index) => index % 2 !== 0);
        
        // 跟踪大小写
        let capitalization = [];
        if (preserveCapitalization.value) {
          capitalization = words.map(word => word.length > 0 && word.charAt(0) === word.charAt(0).toUpperCase());
        }
        
        // 移除重复单词
        let shuffledWords = [...words];
        if (removeRepeatedWords.value) {
          shuffledWords = removeRepeats(shuffledWords);
        }
        
        // 打乱单词
        shuffledWords = shuffleArray(shuffledWords);
        
        // 重新应用大小写
        if (preserveCapitalization.value) {
          shuffledWords.forEach((word, i) => {
            if (capitalization[i] && word.length > 0) {
              shuffledWords[i] = word.charAt(0).toUpperCase() + word.slice(1);
            }
          });
        }
        
        // 重建文本与标点
        result = '';
        for (let i = 0; i < shuffledWords.length; i++) {
          result += shuffledWords[i];
          if (i < punctuation.length) {
            result += punctuation[i];
          }
        }
      } else {
        // 不保留标点的处理
        let words = inputText.value.split(/\s+/);
        words = shuffleArray([...words]);
        result = words.join(' ');
      }
    }
  } catch(e) {
    console.error(t('tools.word-shuffler.errorMessages.shuffleError'), e);
    return inputText.value;
  }
  
  return result;
}

// 句子洗牌
function shuffleSentences() {
  if (!inputText.value.trim()) return '';

  try {
    // 检测是否包含中文
    const hasChinese = /[\u4e00-\u9fa5]/.test(inputText.value);
    
    // 分隔符包含中英文标点
    const allDelimiters = (sentenceDelimiters.value + '。！？').split('');
    const uniqueDelimiters = [...new Set(allDelimiters)].join('');
    
    // 使用更简单的分割方式
    const sentencePattern = new RegExp(`([${uniqueDelimiters}][\\s]*)`, 'g');
    
    // 分割文本为句子和标点
    let parts = [];
    let lastIndex = 0;
    let match;
    
    // 手动分割文本，确保中文和英文句子都能正确处理
    while ((match = sentencePattern.exec(inputText.value)) !== null) {
      if (match.index > lastIndex) {
        // 添加句子内容
        parts.push(inputText.value.substring(lastIndex, match.index));
      }
      // 添加句子结束标点
      parts.push(match[0]);
      lastIndex = match.index + match[0].length;
    }
    
    // 添加最后一部分（如果有）
    if (lastIndex < inputText.value.length) {
      parts.push(inputText.value.substring(lastIndex));
    }
    
    // 分离句子和标点
    const sentences = [];
    const punctuations = [];
    
    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        sentences.push(parts[i]);
      } else {
        punctuations.push(parts[i]);
      }
    }
    
    // 确保至少有一个句子
    if (sentences.length === 0) return inputText.value;
    
    // 打乱句子顺序
    const shuffledSentences = shuffleArray([...sentences]);
    
    // 重建文本
    let result = '';
    for (let i = 0; i < shuffledSentences.length; i++) {
      result += shuffledSentences[i];
      if (i < punctuations.length) {
        result += punctuations[i];
      } else if (preservePunctuation.value && i < shuffledSentences.length - 1) {
        // 根据语言环境添加适当的句号
        result += hasChinese ? '。 ' : '. ';
      }
    }
    
    return result;
  } catch(e) {
    console.error(t('tools.word-shuffler.errorMessages.sentenceError'), e);
    return inputText.value; // 出错时返回原文本
  }
}

// 行洗牌
function shuffleLines() {
  // 分割行并打乱
  const lines = inputText.value.split(/\r?\n/).filter(l => l.trim());
  return shuffleArray([...lines]).join('\n');
}

// 字符洗牌
function shuffleCharacters() {
  // 分割字符并打乱
  const chars = inputText.value.split('');
  return shuffleArray([...chars]).join('');
}

// 段落洗牌
function shuffleParagraphs() {
  // 分割段落并打乱
  const paragraphs = inputText.value.split(/\r?\n\r?\n/).filter(p => p.trim());
  return shuffleArray([...paragraphs]).join('\n\n');
}

// UI功能实现
function copyResult() {
  if (!outputText.value) return;
  
  navigator.clipboard.writeText(outputText.value)
    .then(() => {
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2000);
    })
    .catch(err => {
      console.error(t('tools.word-shuffler.errorMessages.copyError'), err);
    });
}

function clearInput() {
  inputText.value = '';
}

function clearOutput() {
  outputText.value = '';
}

function clearAll() {
  inputText.value = '';
  outputText.value = '';
}

function importFromFile() {
  if (fileInput.value) {
    fileInput.value.click();
  }
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (e) => {
    inputText.value = e.target.result;
  };
  reader.readAsText(file);
}

function downloadResult() {
  if (!outputText.value) return;
  
  const blob = new Blob([outputText.value], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = t('tools.word-shuffler.downloadFileName');
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function loadExample(example) {
  inputText.value = example.input;
  shuffleMode.value = example.options.mode;
  preserveCapitalization.value = example.options.preserveCapitalization;
  preservePunctuation.value = example.options.preservePunctuation;
  // 展开选项面板
  showOptions.value = true;
}

function pasteExampleText() {
  // 使用第一个示例的文本
  inputText.value = examples.value[0].input;
}

onMounted(() => {
  // 任何初始化可以在此处理
});
</script>
