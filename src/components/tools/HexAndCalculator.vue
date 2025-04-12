<template>
  <div class="hex-calculator">
    
    <!-- 示例按钮区域 -->
    <div class="examples-section">
      <span class="section-label">{{ $t('tools.hex-and-calculator.quickExamples') }}:</span>
      <div class="examples-buttons">
        <button v-for="example in examples" :key="example.id" 
                @click="loadExample(example)" class="example-button">
          {{ example.name }}
        </button>
      </div>
    </div>
    
    <!-- 主操作区域 - 左右布局 -->
    <div class="main-layout">
      <!-- 左侧：输入部分 -->
      <div class="left-panel">
        <div class="calculator-container">
          <div class="section-header">
            <i class="fas fa-keyboard"></i>
            {{ $t('tools.hex-and-calculator.inputNumbers') }}
          </div>
          
          <!-- 动态输入字段 -->
          <div class="input-list">
            <div v-for="(input, index) in inputs" :key="index" class="input-row">
              <div class="row-number">{{ index + 1 }}</div>
              <div class="hex-input-wrapper">
                <div class="hex-input">
                  <span class="prefix">0x</span>
                  <input 
                    :id="`input${index}`" 
                    v-model="input.value" 
                    type="text" 
                    @input="validateHexInput(index)"
                    :placeholder="$t('tools.hex-and-calculator.enterHex')"
                  />
                </div>
                <div v-if="input.error" class="error-message">
                  <i class="fas fa-exclamation-circle"></i>
                  {{ $t('tools.hex-and-calculator.invalidHex') }}
                </div>
              </div>
              
              <!-- 删除按钮 - 更明显 -->
              <button 
                v-if="inputs.length > 2" 
                @click="removeInput(index)" 
                class="remove-button" 
                :title="$t('tools.hex-and-calculator.removeButton')">
                <i class="fas fa-trash"></i> {{ $t('tools.hex-and-calculator.remove') }}
              </button>
            </div>
          </div>
          
          <!-- 添加输入按钮 -->
          <div class="button-container">
            <button @click="addInput" class="action-button add-button">
              <i class="fas fa-plus"></i>
              {{ $t('tools.hex-and-calculator.addNumber') }}
            </button>
          </div>
          
          <!-- 输入工具栏 -->
          <div class="button-grid">
            <button @click="importFromFile" class="action-button import-button" :title="$t('tools.hex-and-calculator.importTitle')">
              <i class="fas fa-file-import"></i> {{ $t('tools.hex-and-calculator.import') }}
            </button>
            <button @click="saveInputsToFile" class="action-button save-button" :title="$t('tools.hex-and-calculator.saveTitle')">
              <i class="fas fa-file-download"></i> {{ $t('tools.hex-and-calculator.save') }}
            </button>
            <button @click="copyAllInputs" class="action-button copy-button" :title="$t('tools.hex-and-calculator.copyTitle')">
              <i class="fas fa-copy"></i> {{ $t('tools.hex-and-calculator.copy') }}
            </button>
            <button @click="pasteToInputs" class="action-button paste-button" :title="$t('tools.hex-and-calculator.pasteTitle')">
              <i class="fas fa-paste"></i> {{ $t('tools.hex-and-calculator.paste') }}
            </button>
          </div>
          
          <!-- 计算按钮 -->
          <div class="button-container">
            <button @click="calculate" :disabled="!canCalculate" class="action-button calculate-button">
              <i class="fas fa-calculator"></i>
              {{ $t('tools.hex-and-calculator.calculate') }}
            </button>
          </div>
        </div>
      </div>
      
      <!-- 右侧：结果部分 -->
      <div class="right-panel">
        <div class="calculator-container">
          <div class="section-header">
            <i class="fas fa-equals"></i>
            {{ $t('tools.hex-and-calculator.result') }}
          </div>
          
          <div v-if="result" class="result-content">
            <!-- 结果详情 -->
            <div class="result-card hex-result">
              <div class="result-label">Hex:</div>
              <div class="result-value">0x{{ result.hex }}</div>
              <button class="copy-button" @click="copyToClipboard(result.hex, 'hex')" :title="$t('tools.hex-and-calculator.copyAction')">
                <i class="fas fa-copy"></i> {{ $t('tools.hex-and-calculator.copyAction') }}
              </button>
              <span v-if="copied === 'hex'" class="copied-indicator">{{ $t('tools.hex-and-calculator.copied') }}</span>
            </div>
            
            <div class="result-card decimal-result">
              <div class="result-label">{{ $t('tools.hex-and-calculator.decimal') }}:</div>
              <div class="result-value">{{ result.decimal }}</div>
              <button class="copy-button" @click="copyToClipboard(result.decimal, 'decimal')" :title="$t('tools.hex-and-calculator.copyAction')">
                <i class="fas fa-copy"></i> {{ $t('tools.hex-and-calculator.copyAction') }}
              </button>
              <span v-if="copied === 'decimal'" class="copied-indicator">{{ $t('tools.hex-and-calculator.copied') }}</span>
            </div>
            
            <div class="result-card binary-result">
              <div class="result-label">{{ $t('tools.hex-and-calculator.binary') }}:</div>
              <div class="result-value">{{ result.binary }}</div>
              <button class="copy-button" @click="copyToClipboard(result.binary, 'binary')" :title="$t('tools.hex-and-calculator.copyAction')">
                <i class="fas fa-copy"></i> {{ $t('tools.hex-and-calculator.copyAction') }}
              </button>
              <span v-if="copied === 'binary'" class="copied-indicator">{{ $t('tools.hex-and-calculator.copied') }}</span>
            </div>
            
            <!-- 结果工具栏 -->
            <div class="result-toolbar">
              <button @click="saveResultToFile" class="action-button save-button" :title="$t('tools.hex-and-calculator.saveResultTitle')">
                <i class="fas fa-file-download"></i> {{ $t('tools.hex-and-calculator.saveResult') }}
              </button>
              <button @click="copyAllResults" class="action-button copy-button" :title="$t('tools.hex-and-calculator.copyResultTitle')">
                <i class="fas fa-copy"></i> {{ $t('tools.hex-and-calculator.copyResult') }}
              </button>
            </div>
            
            <!-- 位可视化 -->
            <div class="bit-visualization">
              <div class="vis-header">
                <i class="fas fa-microchip"></i>
                {{ $t('tools.hex-and-calculator.bitVisualization') }}
              </div>
              <div class="bit-diagram scrollable">
                <!-- 输入位显示 -->
                <div v-for="(input, index) in visualBits.inputs" :key="`input-${index}`" class="bit-row">
                  <div class="bit-label">{{ $t('tools.hex-and-calculator.number') }} {{ index + 1 }}:</div>
                  <div class="bit-cells">
                    <span v-for="(bit, bitIndex) in input" :key="`input-${index}-bit-${bitIndex}`" 
                          :class="['bit-cell', bit === '1' ? 'bit-one' : 'bit-zero']">
                      {{ bit }}
                    </span>
                  </div>
                </div>
                
                <!-- 结果位显示 -->
                <div class="bit-row result-bits">
                  <div class="bit-label">{{ $t('tools.hex-and-calculator.result') }}:</div>
                  <div class="bit-cells">
                    <span v-for="(bit, index) in visualBits.result" :key="`result-${index}`" 
                          :class="['bit-cell', bit === '1' ? 'bit-one' : 'bit-zero']">
                      {{ bit }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 无结果提示 -->
          <div v-else class="no-result">
            <i class="fas fa-info-circle"></i>
            <span>{{ $t('tools.hex-and-calculator.noResult') }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 解释区域 -->
    <div class="explanation-section">
      <div class="section-header">
        <i class="fas fa-book"></i>
        {{ $t('tools.hex-and-calculator.explanation.title') }}
      </div>
      <div class="explanation-content">
        <p>{{ $t('tools.hex-and-calculator.explanation.content') }}</p>
        <div v-if="operationExplanation" class="operation-code">
          <h4>{{ $t('tools.hex-and-calculator.explanation.example') }}</h4>
          <pre>{{ operationExplanation }}</pre>
        </div>
      </div>
    </div>
    
    <!-- 在解释区域后添加工具文章部分 -->
    <div class="tool-article">
      <div class="section-header">
        <i class="fas fa-book-open"></i>
        {{ $t('tools.hex-and-calculator.article.title') }}
      </div>
      
      <!-- 功能介绍及应用场景 -->
      <div class="article-section">
        <h3>{{ $t('tools.hex-and-calculator.article.introduction.title') }}</h3>
        <div class="article-content">
          <p>{{ $t('tools.hex-and-calculator.article.introduction.content[0]') }}</p>
          <p>{{ $t('tools.hex-and-calculator.article.introduction.content[1]') }}</p>
          <p>{{ $t('tools.hex-and-calculator.article.introduction.content[2]') }}</p>
        </div>
        
        <!-- 应用场景列表 -->
        <div class="use-cases">
          <h4>{{ $t('tools.hex-and-calculator.article.useCases.title') }}</h4>
          <ul>
            <li>
              <strong>{{ $t('tools.hex-and-calculator.article.useCases.cases[0].title') }}</strong>: 
              {{ $t('tools.hex-and-calculator.article.useCases.cases[0].description') }}
            </li>
            <li>
              <strong>{{ $t('tools.hex-and-calculator.article.useCases.cases[1].title') }}</strong>: 
              {{ $t('tools.hex-and-calculator.article.useCases.cases[1].description') }}
            </li>
            <li>
              <strong>{{ $t('tools.hex-and-calculator.article.useCases.cases[2].title') }}</strong>: 
              {{ $t('tools.hex-and-calculator.article.useCases.cases[2].description') }}
            </li>
            <li>
              <strong>{{ $t('tools.hex-and-calculator.article.useCases.cases[3].title') }}</strong>: 
              {{ $t('tools.hex-and-calculator.article.useCases.cases[3].description') }}
            </li>
            <li>
              <strong>{{ $t('tools.hex-and-calculator.article.useCases.cases[4].title') }}</strong>: 
              {{ $t('tools.hex-and-calculator.article.useCases.cases[4].description') }}
            </li>
          </ul>
        </div>
      </div>
      
      <!-- 常见问题解答 -->
      <div class="article-section faq-section">
        <h3>{{ $t('tools.hex-and-calculator.article.faq.title') }}</h3>
        <div class="faq-list">
          <div class="faq-item">
            <div class="faq-question">
              <i class="fas fa-question-circle"></i>
              <h4>{{ $t('tools.hex-and-calculator.article.faq.questions[0].question') }}</h4>
            </div>
            <div class="faq-answer">
              <p>{{ $t('tools.hex-and-calculator.article.faq.questions[0].answer') }}</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-question">
              <i class="fas fa-question-circle"></i>
              <h4>{{ $t('tools.hex-and-calculator.article.faq.questions[1].question') }}</h4>
            </div>
            <div class="faq-answer">
              <p>{{ $t('tools.hex-and-calculator.article.faq.questions[1].answer') }}</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-question">
              <i class="fas fa-question-circle"></i>
              <h4>{{ $t('tools.hex-and-calculator.article.faq.questions[2].question') }}</h4>
            </div>
            <div class="faq-answer">
              <p>{{ $t('tools.hex-and-calculator.article.faq.questions[2].answer') }}</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-question">
              <i class="fas fa-question-circle"></i>
              <h4>{{ $t('tools.hex-and-calculator.article.faq.questions[3].question') }}</h4>
            </div>
            <div class="faq-answer">
              <p>{{ $t('tools.hex-and-calculator.article.faq.questions[3].answer') }}</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-question">
              <i class="fas fa-question-circle"></i>
              <h4>{{ $t('tools.hex-and-calculator.article.faq.questions[4].question') }}</h4>
            </div>
            <div class="faq-answer">
              <p>{{ $t('tools.hex-and-calculator.article.faq.questions[4].answer') }}</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-question">
              <i class="fas fa-question-circle"></i>
              <h4>{{ $t('tools.hex-and-calculator.article.faq.questions[5].question') }}</h4>
            </div>
            <div class="faq-answer">
              <p>{{ $t('tools.hex-and-calculator.article.faq.questions[5].answer') }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 操作指南 -->
      <div class="article-section">
        <h3>{{ $t('tools.hex-and-calculator.article.tutorial.title') }}</h3>
        <div class="tutorial-steps">
          <div class="tutorial-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>{{ $t('tools.hex-and-calculator.article.tutorial.steps[0].title') }}</h4>
              <p>{{ $t('tools.hex-and-calculator.article.tutorial.steps[0].description') }}</p>
            </div>
          </div>
          <div class="tutorial-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>{{ $t('tools.hex-and-calculator.article.tutorial.steps[1].title') }}</h4>
              <p>{{ $t('tools.hex-and-calculator.article.tutorial.steps[1].description') }}</p>
            </div>
          </div>
          <div class="tutorial-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>{{ $t('tools.hex-and-calculator.article.tutorial.steps[2].title') }}</h4>
              <p>{{ $t('tools.hex-and-calculator.article.tutorial.steps[2].description') }}</p>
            </div>
          </div>
          <div class="tutorial-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>{{ $t('tools.hex-and-calculator.article.tutorial.steps[3].title') }}</h4>
              <p>{{ $t('tools.hex-and-calculator.article.tutorial.steps[3].description') }}</p>
            </div>
          </div>
          <div class="tutorial-step">
            <div class="step-number">5</div>
            <div class="step-content">
              <h4>{{ $t('tools.hex-and-calculator.article.tutorial.steps[4].title') }}</h4>
              <p>{{ $t('tools.hex-and-calculator.article.tutorial.steps[4].description') }}</p>
            </div>
          </div>
          <div class="tutorial-step">
            <div class="step-number">6</div>
            <div class="step-content">
              <h4>{{ $t('tools.hex-and-calculator.article.tutorial.steps[5].title') }}</h4>
              <p>{{ $t('tools.hex-and-calculator.article.tutorial.steps[5].description') }}</p>
            </div>
          </div>
        </div>
        
        <!-- 高级技巧 -->
        <div class="advanced-tips">
          <h4>{{ $t('tools.hex-and-calculator.article.tutorial.advancedTips.title') }}</h4>
          <ul>
            <li>{{ $t('tools.hex-and-calculator.article.tutorial.advancedTips.tips[0]') }}</li>
            <li>{{ $t('tools.hex-and-calculator.article.tutorial.advancedTips.tips[1]') }}</li>
            <li>{{ $t('tools.hex-and-calculator.article.tutorial.advancedTips.tips[2]') }}</li>
            <li>{{ $t('tools.hex-and-calculator.article.tutorial.advancedTips.tips[3]') }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HexAndCalculator',
  data() {
    return {
      inputs: [
        { value: '', error: false },
        { value: '', error: false }
      ],
      result: null,
      operationExplanation: '',
      copied: null,
      examples: [
        { id: 1, name: '0xFF & 0x0F' },
        { id: 2, name: '0xA5 & 0x80' },
        { id: 3, name: '0xFFFF & 0xFF00' },
        { id: 4, name: '0x42 & 0x01' }
      ],
      visualBits: {
        inputs: [],
        result: []
      }
    };
  },
  computed: {
    canCalculate() {
      // 检查是否所有输入都有值且没有错误
      return this.inputs.every(input => input.value && !input.error);
    }
  },
  methods: {
    validateHexInput(index) {
      const hexRegex = /^[0-9A-Fa-f]+$/;
      this.inputs[index].error = this.inputs[index].value && !hexRegex.test(this.inputs[index].value);
    },
    addInput() {
      this.inputs.push({ value: '', error: false });
    },
    removeInput(index) {
      if (this.inputs.length > 2) {
        this.inputs.splice(index, 1);
      }
    },
    calculate() {
      if (!this.canCalculate) return;
      
      // 将所有十六进制输入转换为整数
      const numbers = this.inputs.map(input => parseInt(input.value, 16));
      
      // 执行AND运算（从第一个值开始，与后续所有值进行AND操作）
      let andResult = numbers[0];
      for (let i = 1; i < numbers.length; i++) {
        andResult &= numbers[i];
      }
      
      // 计算最大位长度以便对齐
      const maxBits = Math.max(...numbers.map(n => n.toString(2).length));
      
      // 转换结果为不同格式
      this.result = {
        hex: andResult.toString(16).toUpperCase(),
        decimal: andResult.toString(10),
        binary: andResult.toString(2).padStart(maxBits, '0')
      };
      
      // 生成解释文本
      this.generateExplanation(numbers, andResult, maxBits);
      
      // 更新位可视化
      this.updateBitVisualization(numbers, andResult, maxBits);
    },
    generateExplanation(numbers, result, maxBits) {
      const hexInputs = this.inputs.map(input => input.value.toUpperCase());
      const binaryInputs = numbers.map(n => n.toString(2).padStart(maxBits, '0'));
      
      let explanation = '';
      
      // 构建解释文本，包括所有输入值
      for (let i = 0; i < hexInputs.length; i++) {
        if (i > 0) {
          explanation += '& ';
        }
        explanation += `0x${hexInputs[i]} (${binaryInputs[i]})\n`;
      }
      
      // 添加结果
      explanation += `= 0x${this.result.hex} (${this.result.binary})`;
      
      this.operationExplanation = explanation;
    },
    updateBitVisualization(numbers, result, maxBits) {
      // 准备所有输入的二进制表示
      const binaryInputs = numbers.map(n => n.toString(2).padStart(maxBits, '0').split(''));
      
      // 准备结果的二进制表示
      const binaryResult = result.toString(2).padStart(maxBits, '0').split('');
      
      this.visualBits = {
        inputs: binaryInputs,
        result: binaryResult
      };
    },
    copyToClipboard(text, type) {
      navigator.clipboard.writeText(text).then(() => {
        this.copied = type;
        setTimeout(() => {
          this.copied = null;
        }, 2000);
      });
    },
    loadExample(example) {
      // 解析示例名字以获取值
      const parts = example.name.split(' & ');
      if (parts.length >= 2) {
        // 确保我们有足够的输入字段
        while (this.inputs.length < parts.length) {
          this.addInput();
        }
        
        // 填充输入字段
        for (let i = 0; i < parts.length; i++) {
          this.inputs[i].value = parts[i].replace(/0x/i, '');
          this.validateHexInput(i);
        }
        
        // 如果有多余的输入字段，将它们清空
        for (let i = parts.length; i < this.inputs.length; i++) {
          this.inputs[i].value = '';
        }
        
        if (this.canCalculate) {
          this.calculate();
        }
      }
    },
    // Input file operations
    importFromFile() {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '.txt,.json';
      fileInput.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            try {
              const content = e.target.result;
              // Try to parse as JSON first
              try {
                const jsonData = JSON.parse(content);
                if (Array.isArray(jsonData)) {
                  this.inputs = jsonData.map(val => ({
                    value: typeof val === 'object' && val.value ? val.value : String(val).replace(/^0x/i, ''),
                    error: false
                  }));
                } else if (jsonData.inputs && Array.isArray(jsonData.inputs)) {
                  this.inputs = jsonData.inputs.map(val => ({
                    value: typeof val === 'object' && val.value ? val.value : String(val).replace(/^0x/i, ''),
                    error: false
                  }));
                }
              } catch {
                // If not JSON, treat as text with one hex number per line
                const lines = content.split(/[\r\n]+/).filter(line => line.trim());
                if (lines.length > 0) {
                  this.inputs = lines.map(line => ({
                    value: line.trim().replace(/^0x/i, ''),
                    error: false
                  }));
                }
              }
              
              // Validate all inputs
              this.inputs.forEach((input, idx) => this.validateHexInput(idx));
            } catch (error) {
              console.error('Error importing file:', error);
              alert(this.$t('tools.hex-and-calculator.importError'));
            }
          };
          reader.readAsText(file);
        }
      };
      fileInput.click();
    },
    
    saveInputsToFile() {
      const data = JSON.stringify({
        inputs: this.inputs.map(input => ({ value: input.value })),
        timestamp: new Date().toISOString()
      }, null, 2);
      
      this.saveToFile(data, 'hex-calculator-inputs.json');
    },
    
    copyAllInputs() {
      const text = this.inputs.map((input, idx) => `${idx + 1}: 0x${input.value}`).join('\n');
      navigator.clipboard.writeText(text).then(() => {
        alert(this.$t('tools.hex-and-calculator.inputsCopied'));
      });
    },
    
    pasteToInputs() {
      navigator.clipboard.readText().then(text => {
        const lines = text.split(/[\r\n]+/).filter(line => line.trim());
        if (lines.length > 0) {
          // Try to extract hex values, ignoring any prefix or labels
          const hexValues = lines.map(line => {
            const hexMatch = line.match(/(?:0x)?([0-9A-Fa-f]+)/);
            return hexMatch ? hexMatch[1] : '';
          }).filter(val => val);
          
          if (hexValues.length > 0) {
            this.inputs = hexValues.map(val => ({ value: val, error: false }));
            // Validate all inputs
            this.inputs.forEach((input, idx) => this.validateHexInput(idx));
          }
        }
      });
    },
    
    // Result file operations
    saveResultToFile() {
      if (!this.result) return;
      
      const data = JSON.stringify({
        inputs: this.inputs.map(input => ({ value: input.value })),
        result: this.result,
        timestamp: new Date().toISOString()
      }, null, 2);
      
      this.saveToFile(data, 'hex-calculator-result.json');
    },
    
    copyAllResults() {
      if (!this.result) return;
      
      const text = `${this.$t('tools.hex-and-calculator.inputs')}:\n${this.inputs.map(input => `0x${input.value}`).join(' & ')}\n\n` +
        `${this.$t('tools.hex-and-calculator.result')}:\n${this.$t('tools.hex-and-calculator.hex')}: 0x${this.result.hex}\n` +
        `${this.$t('tools.hex-and-calculator.decimal')}: ${this.result.decimal}\n` +
        `${this.$t('tools.hex-and-calculator.binary')}: ${this.result.binary}`;
        
      navigator.clipboard.writeText(text).then(() => {
        alert(this.$t('tools.hex-and-calculator.resultsCopied'));
      });
    },
    
    // Utility method for file saving
    saveToFile(data, filename) {
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  }
};
</script>

<style scoped>
.hex-calculator {
  max-width: 100%;
  padding: 16px;
  font-family: var(--font-family-sans-serif);
}

h1 {
  margin-bottom: 12px;
}

/* 描述文本 */
.description {
  margin-bottom: 20px;
  color: var(--color-text-light);
  line-height: 1.5;
}

/* 示例按钮区域 */
.examples-section {
  margin-bottom: 20px;
}

.section-label {
  font-weight: 500;
  margin-right: 10px;
}

.examples-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.example-button {
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
}

.example-button:hover {
  border-color: var(--color-primary);
  background-color: rgba(var(--color-primary-rgb), 0.1);
}

/* 左右布局容器 */
.main-layout {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.left-panel, .right-panel {
  width: 50%;
}

/* 主容器样式 */
.calculator-container {
  background: var(--color-background-soft);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* 区块标题样式 */
.section-header {
  background: var(--color-primary);
  color: white;
  padding: 10px 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
}

.section-header i {
  margin-right: 8px;
}

/* 输入区域样式 */
.input-list {
  padding: 16px 16px 0 16px;
}

.input-row {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  position: relative;
}

.row-number {
  width: 24px;
  height: 24px;
  background: var(--color-background-mute);
  color: var(--color-text-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-right: 8px;
  margin-top: 8px;
  flex-shrink: 0;
}

.hex-input-wrapper {
  flex-grow: 1;
}

.hex-input {
  display: flex;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  overflow: hidden;
}

.hex-input .prefix {
  background: var(--color-background-mute);
  padding: 8px;
  color: var(--color-text-light);
  border-right: 1px solid var(--color-border);
  font-family: monospace;
  font-size: 14px;
}

.hex-input input {
  flex-grow: 1;
  border: none;
  padding: 8px;
  font-family: monospace;
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: 14px;
  outline: none;
}

.error-message {
  color: #e74c3c;
  font-size: 12px;
  margin-top: 4px;
  display: flex;
  align-items: center;
}

.error-message i {
  margin-right: 4px;
  font-size: 12px;
}

/* 删除按钮 */
.remove-button {
  background-color: #ff4d4f;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  padding: 6px 12px;
  height: 36px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  align-self: center;
  transition: all 0.2s;
}

.remove-button:hover {
  background-color: #ff7875;
  box-shadow: 0 2px 4px rgba(255, 77, 79, 0.2);
}

.input-actions {
  padding: 0 16px;
  margin-bottom: 12px;
}

.add-button {
  background: transparent;
  border: 1px dashed var(--color-border);
  color: var(--color-primary);
  padding: 8px 16px;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.add-button i {
  margin-right: 6px;
}

.add-button:hover {
  background: rgba(var(--color-primary-rgb), 0.05);
  border-color: var(--color-primary);
}

/* 输入工具栏样式 */
.input-toolbar {
  display: flex;
  justify-content: space-between;
  padding: 0 16px 16px;
  flex-wrap: wrap;
  gap: 8px;
}

.tool-button {
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  flex: 1;
  min-width: calc(50% - 4px);
}

.tool-button i {
  margin-right: 6px;
}

.tool-button:hover {
  background-color: var(--color-background-soft);
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.calculate-wrapper {
  padding: 16px;
  text-align: center;
  margin-top: auto;
}

.calculate-button {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s;
}

.calculate-button i {
  margin-right: 8px;
}

.calculate-button:hover {
  background: var(--color-primary-dark, #3a8ee6);
  transform: translateY(-1px);
}

.calculate-button:disabled {
  background: #ccc;
  cursor: not-allowed;
  transform: none;
}

/* 结果区域样式 */
.result-content {
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.result-card {
  display: flex;
  align-items: center;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  position: relative;
}

.result-label {
  width: 70px;
  font-weight: 500;
  color: var(--color-primary);
  flex-shrink: 0;
}

.result-value {
  flex-grow: 1;
  font-family: monospace;
  padding: 2px 8px;
  background: var(--color-background-mute);
  border-radius: 2px;
  overflow-x: auto;
  white-space: nowrap;
}

.copy-button {
  background: transparent;
  border: none;
  color: var(--color-text-light);
  padding: 5px;
  margin-left: 4px;
  cursor: pointer;
  transition: color 0.2s;
}

.copy-button:hover {
  color: var(--color-primary);
}

.copied-indicator {
  color: var(--color-success, #42b983);
  font-size: 12px;
  margin-left: 4px;
}

.no-result {
  padding: 30px;
  text-align: center;
  color: var(--color-text-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  font-style: italic;
}

.no-result i {
  font-size: 24px;
  margin-bottom: 10px;
}

/* 位可视化样式 */
.bit-visualization {
  margin-top: auto;
  border-top: 1px solid var(--color-border);
  padding-top: 16px;
}

.vis-header {
  font-weight: 500;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.vis-header i {
  margin-right: 6px;
}

.bit-diagram {
  font-family: monospace;
}

.scrollable {
  overflow-x: auto;
}

.bit-row {
  display: flex;
  margin-bottom: 8px;
  align-items: center;
}

.bit-label {
  width: 100px;
  text-align: right;
  padding-right: 10px;
  font-weight: 500;
  flex-shrink: 0;
}

.bit-cells {
  display: flex;
  flex-wrap: nowrap;
}

.bit-cell {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2px;
  border-radius: 2px;
  flex-shrink: 0;
  font-size: 12px;
}

.bit-one {
  background: rgba(var(--color-primary-rgb), 0.15);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}

.bit-zero {
  background: var(--color-background-mute);
  color: var(--color-text-light);
  border: 1px solid var(--color-border);
}

.result-bits {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed var(--color-border);
}

/* 解释区域样式 */
.explanation-section {
  background: var(--color-background-soft);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.explanation-content {
  padding: 16px;
}

.explanation-content p {
  margin-top: 0;
  line-height: 1.5;
}

.operation-code {
  margin-top: 16px;
}

.operation-code h4 {
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 16px;
  color: var(--color-primary);
}

.operation-code pre {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 12px;
  overflow-x: auto;
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-layout {
    flex-direction: column;
  }
  
  .left-panel, .right-panel {
    width: 100%;
  }
  
  .section-header {
    padding: 8px 12px;
  }
  
  .input-list, .result-content, .explanation-content {
    padding: 12px;
  }
  
  .bit-cell {
    width: 20px;
    height: 20px;
    font-size: 11px;
  }
  
  .bit-label {
    width: 80px;
    font-size: 12px;
  }
}

/* 工具文章样式 */
.tool-article {
  margin-top: 30px;
  background: var(--color-background-soft);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.article-section {
  padding: 20px;
  border-bottom: 1px solid var(--color-border);
}

.article-section:last-child {
  border-bottom: none;
}

.article-section h3 {
  margin-top: 0;
  margin-bottom: 16px;
  color: var(--color-primary);
  font-size: 18px;
}

.article-content p {
  margin-bottom: 16px;
  line-height: 1.6;
}

.use-cases h4, .advanced-tips h4 {
  margin-top: 20px;
  margin-bottom: 12px;
  font-size: 16px;
  color: var(--color-text);
}

.use-cases ul, .advanced-tips ul {
  padding-left: 20px;
  margin-bottom: 0;
}

.use-cases li, .advanced-tips li {
  margin-bottom: 12px;
  line-height: 1.5;
}

/* FAQ样式 */
.faq-section {
  background-color: var(--color-background);
}

.faq-item {
  margin-bottom: 20px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  overflow: hidden;
}

.faq-question {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: var(--color-background-mute);
  cursor: pointer;
}

.faq-question i {
  color: var(--color-primary);
  margin-right: 10px;
  font-size: 16px;
}

.faq-question h4 {
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  flex-grow: 1;
}

.faq-answer {
  padding: 16px;
  background-color: var(--color-background);
  border-top: 1px solid var(--color-border);
}

.faq-answer p {
  margin: 0;
  line-height: 1.5;
}

/* 操作指南样式 */
.tutorial-steps {
  counter-reset: step-counter;
}

.tutorial-step {
  display: flex;
  margin-bottom: 20px;
}

.step-number {
  width: 30px;
  height: 30px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  flex-shrink: 0;
  margin-right: 15px;
  margin-top: 2px;
}

.step-content {
  flex-grow: 1;
}

.step-content h4 {
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 16px;
}

.step-content p {
  margin: 0;
  line-height: 1.5;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .article-section {
    padding: 16px;
  }
  
  .faq-question {
    padding: 10px 12px;
  }
  
  .faq-answer {
    padding: 12px;
  }
}

/* 结果工具栏样式 */
.result-toolbar {
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.result-toolbar button {
  background: transparent;
  border: none;
  color: var(--color-text-light);
  padding: 8px 16px;
  cursor: pointer;
  transition: color 0.2s;
}

.result-toolbar button:hover {
  color: var(--color-primary);
}

/* 按钮容器 */
.button-container {
  padding: 8px 16px;
  display: flex;
  justify-content: center;
}

/* 网格按钮布局 */
.button-grid {
  padding: 8px 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

/* 通用按钮样式 */
.action-button {
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.action-button i {
  margin-right: 8px;
}

.action-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.action-button:active {
  transform: translateY(0);
}

/* 删除按钮样式 */
.remove-button {
  background-color: #ff4d4f;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  padding: 6px 12px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  align-self: center;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(255, 77, 79, 0.2);
}

.remove-button:hover {
  background-color: #ff7875;
  box-shadow: 0 4px 8px rgba(255, 77, 79, 0.3);
  transform: translateY(-2px);
}

/* 添加按钮样式 */
.add-button {
  background-color: #1890ff;
  color: white;
  width: 100%;
  margin-bottom: 8px;
}

.add-button:hover {
  background-color: #40a9ff;
}

/* 导入/导出按钮样式 */
.import-button {
  background-color: #52c41a;
  color: white;
}

.import-button:hover {
  background-color: #73d13d;
}

.save-button {
  background-color: #722ed1;
  color: white;
}

.save-button:hover {
  background-color: #9254de;
}

.copy-button {
  background-color: #faad14;
  color: white;
}

.copy-button:hover {
  background-color: #ffc53d;
}

.paste-button {
  background-color: #13c2c2;
  color: white;
}

.paste-button:hover {
  background-color: #36cfc9;
}

/* 计算按钮样式 */
.calculate-button {
  background-color: #2f54eb;
  color: white;
  width: 100%;
  font-size: 16px;
  padding: 12px 24px;
  margin-top: 8px;
}

.calculate-button:hover {
  background-color: #597ef7;
}

.calculate-button:disabled {
  background-color: #d9d9d9;
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}

/* 结果区域按钮样式 */
.result-toolbar {
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.result-toolbar .action-button {
  background-color: #2f54eb;
  color: white;
}

.result-toolbar .action-button:hover {
  background-color: #597ef7;
}
</style> 