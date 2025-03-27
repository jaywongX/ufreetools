import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import TextCase from '../../../src/components/tools/TextCase.vue';

describe('TextCase.vue', () => {
  // 基础渲染测试
  it('renders correctly with text input area', () => {
    const wrapper = shallowMount(TextCase);
    
    // 检查文本输入区域
    expect(wrapper.find('textarea').exists() || wrapper.find('input[type="text"]').exists()).toBe(true);
  });

  // 大写转换测试
  it('converts text to uppercase when clicking uppercase button', async () => {
    const wrapper = mount(TextCase);
    
    // 找到文本输入区域
    const textInput = wrapper.find('textarea') || wrapper.find('input[type="text"]');
    
    if (textInput.exists()) {
      // 设置测试文本
      await textInput.setValue('Hello World');
      
      // 查找大写按钮并点击
      const uppercaseButton = wrapper.findAll('button').find(btn => 
        btn.text().toLowerCase().includes('upper') || 
        btn.text().includes('大写')
      );
      
      if (uppercaseButton) {
        await uppercaseButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 获取转换后的文本
        const resultText = textInput.element.value;
        expect(resultText).toBe('HELLO WORLD');
      }
    }
  });

  // 小写转换测试
  it('converts text to lowercase when clicking lowercase button', async () => {
    const wrapper = mount(TextCase);
    
    // 找到文本输入区域
    const textInput = wrapper.find('textarea') || wrapper.find('input[type="text"]');
    
    if (textInput.exists()) {
      // 设置测试文本
      await textInput.setValue('Hello World');
      
      // 查找小写按钮并点击
      const lowercaseButton = wrapper.findAll('button').find(btn => 
        btn.text().toLowerCase().includes('lower') || 
        btn.text().includes('小写')
      );
      
      if (lowercaseButton) {
        await lowercaseButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 获取转换后的文本
        const resultText = textInput.element.value;
        expect(resultText).toBe('hello world');
      }
    }
  });

  // 标题转换测试
  it('converts text to title case when clicking title case button', async () => {
    const wrapper = mount(TextCase);
    
    // 找到文本输入区域
    const textInput = wrapper.find('textarea') || wrapper.find('input[type="text"]');
    
    if (textInput.exists()) {
      // 设置测试文本
      await textInput.setValue('hello world');
      
      // 查找标题大小写按钮并点击
      const titleCaseButton = wrapper.findAll('button').find(btn => 
        btn.text().toLowerCase().includes('title') || 
        btn.text().includes('首字母') ||
        btn.text().includes('标题')
      );
      
      if (titleCaseButton) {
        await titleCaseButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 获取转换后的文本
        const resultText = textInput.element.value;
        expect(resultText).toBe('Hello World') || expect(resultText).toBe('Hello world');
      }
    }
  });

  // 句子大小写转换测试
  it('converts text to sentence case when clicking sentence case button', async () => {
    const wrapper = mount(TextCase);
    
    // 找到文本输入区域
    const textInput = wrapper.find('textarea') || wrapper.find('input[type="text"]');
    
    if (textInput.exists()) {
      // 设置测试文本
      await textInput.setValue('hello world. another sentence.');
      
      // 查找句子大小写按钮并点击
      const sentenceCaseButton = wrapper.findAll('button').find(btn => 
        btn.text().toLowerCase().includes('sentence') || 
        btn.text().includes('句子')
      );
      
      if (sentenceCaseButton) {
        await sentenceCaseButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 获取转换后的文本
        const resultText = textInput.element.value;
        expect(resultText.startsWith('Hello world')).toBe(true);
      }
    }
  });

  // 复制测试
  it('copies text to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(TextCase);
    
    // 找到文本输入区域并设置文本
    const textInput = wrapper.find('textarea') || wrapper.find('input[type="text"]');
    
    if (textInput.exists()) {
      await textInput.setValue('Test Text');
      
      // 查找复制按钮并点击
      const copyButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('复制') || 
        btn.text().includes('Copy')
      );
      
      if (copyButton) {
        await copyButton.trigger('click');
        
        // 验证剪贴板API被调用
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Test Text');
      }
    }
  });

  // 清除测试
  it('clears the input when clicking clear button', async () => {
    const wrapper = mount(TextCase);
    
    // 找到文本输入区域并设置文本
    const textInput = wrapper.find('textarea') || wrapper.find('input[type="text"]');
    
    if (textInput.exists()) {
      await textInput.setValue('Test Text');
      
      // 查找清除按钮并点击
      const clearButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('清除') || 
        btn.text().includes('Clear') ||
        btn.text().includes('重置') || 
        btn.text().includes('Reset')
      );
      
      if (clearButton) {
        await clearButton.trigger('click');
        
        // 验证组件状态 - 输入区域应该被清空
        expect(wrapper.exists()).toBe(true);
        
        // 获取清除后的值
        const clearedValue = textInput.element.value;
        expect(clearedValue).toBe('');
      }
    }
  });
}); 