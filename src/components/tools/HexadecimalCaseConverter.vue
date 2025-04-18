<template>
  <div class="w-full">
    <!-- 标题和描述 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.hexadecimal-case-converter.name') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.hexadecimal-case-converter.description') }}
      </p>
    </div>

    <!-- 主要功能区 -->
    <div class="grid grid-cols-1 gap-6">
      <!-- 输入区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <div class="mb-4">
          <div class="flex justify-between items-center mb-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ $t('tools.hexadecimal-case-converter.input.title') }}
            </label>
            <div class="flex space-x-2">
              <button
                @click="clearInput"
                class="text-sm px-2 py-1 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                :title="$t('tools.hexadecimal-case-converter.actions.clear')"
              >
                <i class="fas fa-times-circle"></i> {{ $t('tools.hexadecimal-case-converter.actions.clear') }}
              </button>
              <button
                v-if="inputValue.trim()"
                @click="copyInputToClipboard"
                class="text-sm px-2 py-1 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                :title="$t('tools.hexadecimal-case-converter.actions.copy')"
              >
                <i class="fas fa-copy"></i> {{ $t('tools.hexadecimal-case-converter.actions.copy') }}
              </button>
            </div>
          </div>
          <textarea
            v-model="inputValue"
            class="w-full h-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm resize-y"
            :placeholder="$t('tools.hexadecimal-case-converter.input.placeholder')"
            @input="processInput"
          ></textarea>
        </div>
        
        <!-- 前缀选项 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.hexadecimal-case-converter.prefix.title') }}
          </label>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="prefix in prefixOptions" 
              :key="prefix.value"
              @click="selectedPrefix = prefix.value"
              class="px-3 py-1.5 text-sm rounded-md"
              :class="selectedPrefix === prefix.value 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
            >
              {{ prefix.label }}
            </button>
          </div>
        </div>
        
        <!-- 格式选项 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.hexadecimal-case-converter.format.title') }}
          </label>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="format in formatOptions" 
              :key="format.value"
              @click="selectedFormat = format.value"
              class="px-3 py-1.5 text-sm rounded-md"
              :class="selectedFormat === format.value 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
            >
              {{ format.label }}
            </button>
          </div>
        </div>
        
        <!-- 分隔符选项 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.hexadecimal-case-converter.separator.title') }}
          </label>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="separator in separatorOptions" 
              :key="separator.value"
              @click="selectedSeparator = separator.value"
              class="px-3 py-1.5 text-sm rounded-md"
              :class="selectedSeparator === separator.value 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
            >
              {{ separator.label }}
            </button>
          </div>
        </div>
        
        <!-- 分组选项 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.hexadecimal-case-converter.grouping.title') }}
          </label>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="group in groupingOptions" 
              :key="group.value"
              @click="selectedGrouping = group.value"
              class="px-3 py-1.5 text-sm rounded-md"
              :class="selectedGrouping === group.value 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
            >
              {{ group.label }}
            </button>
          </div>
        </div>
      </div>
      
      <!-- 转换结果 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <div class="mb-2 flex justify-between items-center">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ $t('tools.hexadecimal-case-converter.output.title') }}
          </label>
          <div class="flex space-x-2">
            <button
              v-if="outputValue.trim()"
              @click="copyOutputToClipboard"
              class="text-sm px-2 py-1 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              :title="$t('tools.hexadecimal-case-converter.actions.copy')"
            >
              <i class="fas fa-copy"></i> {{ $t('tools.hexadecimal-case-converter.actions.copy') }}
            </button>
          </div>
        </div>
        <textarea
          v-model="outputValue"
          readonly
          class="w-full h-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-mono text-sm resize-y"
          :placeholder="$t('tools.hexadecimal-case-converter.output.placeholder')"
        ></textarea>
      </div>
      
      <!-- 示例区 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-base font-medium text-gray-800 dark:text-gray-200 mb-3">
          {{ $t('tools.hexadecimal-case-converter.examples.title') }}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            v-for="(example, index) in exampleData" 
            :key="index" 
            class="p-3 bg-gray-50 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
            @click="loadExample(example)"
          >
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ example.title }}</h4>
            <p class="text-xs text-gray-500 dark:text-gray-400 font-mono">{{ example.value }}</p>
          </div>
        </div>
      </div>

      <!-- 使用说明和提示 -->
      <div class="bg-blue-50 dark:bg-blue-900/20 rounded-md p-4">
        <h3 class="text-base font-medium text-blue-800 dark:text-blue-400 mb-2">
          {{ $t('tools.hexadecimal-case-converter.tips.title') }}
        </h3>
        <ul class="list-disc pl-5 text-sm text-blue-700 dark:text-blue-300 space-y-1">
          <li>{{ $t('tools.hexadecimal-case-converter.tips.tip1') }}</li>
          <li>{{ $t('tools.hexadecimal-case-converter.tips.tip2') }}</li>
          <li>{{ $t('tools.hexadecimal-case-converter.tips.tip3') }}</li>
          <li>{{ $t('tools.hexadecimal-case-converter.tips.tip4') }}</li>
        </ul>
      </div>
    </div>

    <!-- 使用说明和提示 -->
    <HexadecimalCaseConverterArticle />
  </div>
</template>

<script>
import HexadecimalCaseConverterArticle from './HexadecimalCaseConverterArticle.vue';
export default {
  name: 'HexadecimalCaseConverter',
  components: {
    HexadecimalCaseConverterArticle
  },
  data() {
    return {
      inputValue: '',
      outputValue: '',
      selectedPrefix: 'none',
      selectedFormat: 'uppercase',
      selectedSeparator: 'none',
      selectedGrouping: '0',
      lastValidInput: '',
      prefixOptions: [
        { value: 'none', label: this.$t('tools.hexadecimal-case-converter.prefix.none') },
        { value: '0x', label: '0x' },
        { value: '#', label: '#' },
        { value: '\\x', label: '\\x' },
        { value: 'h', label: 'h' }
      ],
      formatOptions: [
        { value: 'uppercase', label: this.$t('tools.hexadecimal-case-converter.format.uppercase') },
        { value: 'lowercase', label: this.$t('tools.hexadecimal-case-converter.format.lowercase') }
      ],
      separatorOptions: [
        { value: 'none', label: this.$t('tools.hexadecimal-case-converter.separator.none') },
        { value: 'space', label: this.$t('tools.hexadecimal-case-converter.separator.space') },
        { value: 'comma', label: this.$t('tools.hexadecimal-case-converter.separator.comma') },
        { value: 'colon', label: this.$t('tools.hexadecimal-case-converter.separator.colon') },
        { value: 'semicolon', label: this.$t('tools.hexadecimal-case-converter.separator.semicolon') }
      ],
      groupingOptions: [
        { value: '0', label: this.$t('tools.hexadecimal-case-converter.grouping.none') },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '4', label: '4' },
        { value: '8', label: '8' }
      ],
      exampleData: [
        { 
          title: this.$t('tools.hexadecimal-case-converter.examples.example1.title'),
          value: '48656c6c6f20576f726c64',
          format: 'lowercase',
          prefix: 'none',
          separator: 'none',
          grouping: '0'
        },
        { 
          title: this.$t('tools.hexadecimal-case-converter.examples.example2.title'),
          value: '0x48 0x65 0x6C 0x6C 0x6F',
          format: 'uppercase',
          prefix: '0x',
          separator: 'space',
          grouping: '1'
        },
        { 
          title: this.$t('tools.hexadecimal-case-converter.examples.example3.title'),
          value: 'DEADBEEF',
          format: 'uppercase',
          prefix: 'none',
          separator: 'none',
          grouping: '0'
        },
        { 
          title: this.$t('tools.hexadecimal-case-converter.examples.example4.title'),
          value: '01:02:03:04:05:06',
          format: 'lowercase',
          prefix: 'none',
          separator: 'colon',
          grouping: '1'
        }
      ]
    }
  },
  watch: {
    selectedPrefix() {
      this.updateOutput()
    },
    selectedFormat() {
      this.updateOutput()
    },
    selectedSeparator() {
      this.updateOutput()
    },
    selectedGrouping() {
      this.updateOutput()
    }
  },
  methods: {
    clearInput() {
      this.inputValue = ''
      this.outputValue = ''
      this.lastValidInput = ''
    },
    
    copyInputToClipboard() {
      navigator.clipboard.writeText(this.inputValue)
        .then(() => {
          this.$toast.success(this.$t('tools.hexadecimal-case-converter.messages.copied'))
        })
        .catch(err => {
          console.error('Failed to copy text: ', err)
          this.$toast.error(this.$t('tools.hexadecimal-case-converter.messages.copyFailed'))
        })
    },
    
    copyOutputToClipboard() {
      navigator.clipboard.writeText(this.outputValue)
        .then(() => {
          this.$toast.success(this.$t('tools.hexadecimal-case-converter.messages.copied'))
        })
        .catch(err => {
          console.error('Failed to copy text: ', err)
          this.$toast.error(this.$t('tools.hexadecimal-case-converter.messages.copyFailed'))
        })
    },
    
    loadExample(example) {
      this.inputValue = example.value
      this.selectedFormat = example.format
      this.selectedPrefix = example.prefix
      this.selectedSeparator = example.separator
      this.selectedGrouping = example.grouping
      this.processInput()
    },
    
    processInput() {
      const hexRegex = /^[0-9A-Fa-f\s:#\\xh,;]*$/
      if (hexRegex.test(this.inputValue)) {
        this.lastValidInput = this.inputValue
        this.updateOutput()
      } else {
        // Revert to last valid input if the current input is invalid
        this.inputValue = this.lastValidInput
      }
    },

    updateOutput() {
      // Clean the input: remove all non-hex characters
      let cleanInput = this.inputValue.replace(/[^0-9A-Fa-f]/g, '')
      
      // Apply formatting
      if (this.selectedFormat === 'uppercase') {
        cleanInput = cleanInput.toUpperCase()
      } else {
        cleanInput = cleanInput.toLowerCase()
      }
      
      // Apply grouping
      let groupedChars = []
      const groupSize = parseInt(this.selectedGrouping)
      
      if (groupSize > 0) {
        for (let i = 0; i < cleanInput.length; i += groupSize) {
          groupedChars.push(cleanInput.substr(i, groupSize))
        }
      } else {
        groupedChars = [cleanInput]
      }
      
      // Apply prefix and separator
      let separator = ''
      switch (this.selectedSeparator) {
        case 'space': separator = ' '; break
        case 'comma': separator = ','; break
        case 'colon': separator = ':'; break
        case 'semicolon': separator = ';'; break
        default: separator = ''
      }
      
      let prefix = ''
      switch (this.selectedPrefix) {
        case '0x': prefix = '0x'; break
        case '#': prefix = '#'; break
        case '\\x': prefix = '\\x'; break
        case 'h': prefix = ''; break
        default: prefix = ''
      }
      
      let result = ''
      if (groupSize > 0) {
        result = groupedChars.map(chunk => {
          if (this.selectedPrefix === 'h') {
            return chunk + 'h'
          } else {
            return prefix + chunk
          }
        }).join(separator)
      } else {
        result = this.selectedPrefix === 'h' 
          ? cleanInput + 'h'
          : prefix + cleanInput
      }
      
      this.outputValue = result
    }
  }
}
</script>
