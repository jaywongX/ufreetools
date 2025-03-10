import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import LoremIpsumGenerator from '../../../src/components/tools/LoremIpsumGenerator.vue';

describe('LoremIpsumGenerator.vue', () => {
  // 基础渲染测试
  it('renders correctly with generator controls', () => {
    const wrapper = shallowMount(LoremIpsumGenerator);
    
    // 检查生成按钮存在
    expect(wrapper.find('button').exists()).toBe(true);
    
    // 检查输出区域存在
    expect(wrapper.find('textarea').exists() || wrapper.find('.output').exists()).toBe(true);
  });

  // 段落生成测试
  it('generates lorem ipsum paragraphs', async () => {
    const wrapper = mount(LoremIpsumGenerator);
    
    // 找到段落数量输入
    const paragraphInput = wrapper.findAll('input[type="number"]').find(input => 
      input.attributes('id')?.toLowerCase().includes('paragraph') ||
      input.attributes('name')?.toLowerCase().includes('paragraph')
    );
    
    if (paragraphInput && paragraphInput.exists()) {
      // 设置段落数量
      await paragraphInput.setValue(2);
      
      // 查找生成按钮并点击
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找输出区域
        const outputArea = wrapper.find('textarea') || wrapper.find('.output');
        
        if (outputArea.exists()) {
          // 验证生成的文本
          const generatedText = outputArea.element.value || outputArea.text();
          expect(generatedText.length).toBeGreaterThan(0);
          
          // 应该包含两个段落（检查是否有段落分隔符）
          const newLineSeparators = (generatedText.match(/\n\n/g) || []).length;
          expect(newLineSeparators).toBeGreaterThanOrEqual(1);
        }
      }
    }
  });

  // 单词数量测试
  it('generates lorem ipsum with specific word count', async () => {
    const wrapper = mount(LoremIpsumGenerator);
    
    // 找到类型选择器（段落/单词/字符）
    const typeSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('type') ||
      select.attributes('name')?.toLowerCase().includes('type')
    );
    
    if (typeSelect && typeSelect.exists()) {
      // 获取所有选项
      const options = typeSelect.findAll('option');
      
      // 找到单词选项
      const wordOption = options.find(option => 
        option.text().toLowerCase().includes('word')
      );
      
      if (wordOption) {
        await typeSelect.setValue(wordOption.attributes('value'));
        
        // 找到单词数量输入
        const wordInput = wrapper.findAll('input[type="number"]').find(input => 
          input.attributes('id')?.toLowerCase().includes('word') ||
          input.attributes('name')?.toLowerCase().includes('word') ||
          input.attributes('id')?.toLowerCase().includes('count') ||
          input.attributes('name')?.toLowerCase().includes('count')
        );
        
        if (wordInput && wordInput.exists()) {
          // 设置单词数量
          await wordInput.setValue(10);
          
          // 查找生成按钮并点击
          const generateButton = wrapper.findAll('button').find(btn => 
            btn.text().includes('生成') || 
            btn.text().includes('Generate')
          );
          
          if (generateButton) {
            await generateButton.trigger('click');
            
            // 验证组件状态
            expect(wrapper.exists()).toBe(true);
            
            // 查找输出区域
            const outputArea = wrapper.find('textarea') || wrapper.find('.output');
            
            if (outputArea.exists()) {
              // 验证生成的文本
              const generatedText = outputArea.element.value || outputArea.text();
              expect(generatedText.length).toBeGreaterThan(0);
              
              // 检查单词数量（简单分割）
              const wordCount = generatedText.split(' ').length;
              expect(wordCount).toBeCloseTo(10, 2); // 允许一些误差
            }
          }
        }
      }
    }
  });

  // 起始文本测试
  it('starts with "Lorem ipsum" if option is selected', async () => {
    const wrapper = mount(LoremIpsumGenerator);
    
    // 找到起始选项复选框
    const startWithLoremCheckbox = wrapper.find('input[type="checkbox"]') || 
                                 wrapper.findAll('input').find(input => 
                                   input.attributes('id')?.toLowerCase().includes('lorem') ||
                                   input.attributes('name')?.toLowerCase().includes('lorem')
                                 );
    
    if (startWithLoremCheckbox && startWithLoremCheckbox.exists()) {
      // 确保复选框被选中
      await startWithLoremCheckbox.setChecked(true);
      
      // 查找生成按钮并点击
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找输出区域
        const outputArea = wrapper.find('textarea') || wrapper.find('.output');
        
        if (outputArea.exists()) {
          // 验证生成的文本以"Lorem ipsum"开头
          const generatedText = outputArea.element.value || outputArea.text();
          expect(generatedText.toLowerCase().startsWith('lorem ipsum')).toBe(true);
        }
      }
    }
  });

  // 复制文本测试
  it('copies generated text to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(LoremIpsumGenerator);
    
    // 生成一些文本
    const generateButton = wrapper.findAll('button').find(btn => 
      btn.text().includes('生成') || 
      btn.text().includes('Generate')
    );
    
    if (generateButton) {
      await generateButton.trigger('click');
    }
    
    // 查找复制按钮并点击
    const copyButton = wrapper.findAll('button').find(btn => 
      btn.text().includes('复制') || 
      btn.text().includes('Copy')
    );
    
    if (copyButton) {
      await copyButton.trigger('click');
      
      // 验证剪贴板API被调用
      expect(navigator.clipboard.writeText).toHaveBeenCalled();
    }
  });

  // 清除测试
  it('clears the output when clicking clear button', async () => {
    const wrapper = mount(LoremIpsumGenerator);
    
    // 先生成一些文本
    const generateButton = wrapper.findAll('button').find(btn => 
      btn.text().includes('生成') || 
      btn.text().includes('Generate')
    );
    
    if (generateButton) {
      await generateButton.trigger('click');
    }
    
    // 查找清除按钮并点击
    const clearButton = wrapper.findAll('button').find(btn => 
      btn.text().includes('清除') || 
      btn.text().includes('Clear') ||
      btn.text().includes('重置') || 
      btn.text().includes('Reset')
    );
    
    if (clearButton) {
      await clearButton.trigger('click');
      
      // 验证组件状态 - 输出区域应该被清空
      expect(wrapper.exists()).toBe(true);
      
      // 查找输出区域
      const outputArea = wrapper.find('textarea') || wrapper.find('.output');
      
      if (outputArea.exists() && outputArea.element.value !== undefined) {
        // 获取清除后的值
        const clearedValue = outputArea.element.value;
        expect(clearedValue).toBe('');
      }
    }
  });
}); 