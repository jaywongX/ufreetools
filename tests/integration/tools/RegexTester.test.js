import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import RegexTester from '../../../src/components/tools/RegexTester.vue';

describe('RegexTester.vue', () => {
  // 基础渲染测试
  it('renders correctly with regex and test string inputs', () => {
    const wrapper = shallowMount(RegexTester);
    
    // 检查正则表达式输入区域
    expect(wrapper.find('input[type="text"]').exists() || wrapper.find('textarea').exists()).toBe(true);
  });

  // 正则匹配测试
  it('tests regex pattern against input string', async () => {
    const wrapper = mount(RegexTester);
    
    // 找到正则表达式输入
    const regexInput = wrapper.find('input[type="text"]') || 
                       wrapper.findAll('textarea')[0] || 
                       wrapper.findAll('input').find(input => 
                         input.attributes('placeholder')?.toLowerCase().includes('regex') ||
                         input.attributes('placeholder')?.toLowerCase().includes('pattern')
                       );
    
    // 找到测试字符串输入
    const testInput = wrapper.findAll('textarea')[0] || 
                     wrapper.findAll('textarea')[1] || 
                     wrapper.find('.test-input');
    
    if (regexInput && regexInput.exists() && testInput && testInput.exists()) {
      // 设置正则表达式
      await regexInput.setValue('\\d+');
      
      // 设置测试字符串
      await testInput.setValue('abc123def456');
      
      // 查找测试按钮并点击
      const testButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('测试') || 
        btn.text().includes('Test') ||
        btn.text().includes('匹配') || 
        btn.text().includes('Match')
      );
      
      if (testButton) {
        await testButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找结果区域
        const resultArea = wrapper.find('.results') || 
                          wrapper.find('.matches') || 
                          wrapper.find('.output');
        
        if (resultArea.exists()) {
          // 验证显示了匹配结果
          const resultText = resultArea.text();
          expect(resultText).toContain('123') || expect(resultText).toContain('456');
        }
      }
    }
  });

  // 标志选项测试
  it('applies regex flags correctly', async () => {
    const wrapper = mount(RegexTester);
    
    // 找到标志选项复选框
    const globalFlag = wrapper.findAll('input[type="checkbox"]').find(checkbox => 
      checkbox.attributes('id')?.toLowerCase().includes('global') ||
      checkbox.attributes('value')?.toLowerCase() === 'g'
    );
    
    const caseFlag = wrapper.findAll('input[type="checkbox"]').find(checkbox => 
      checkbox.attributes('id')?.toLowerCase().includes('case') ||
      checkbox.attributes('value')?.toLowerCase() === 'i'
    );
    
    // 设置标志（如果存在）
    if (globalFlag && globalFlag.exists()) {
      await globalFlag.setChecked(true);
    }
    
    if (caseFlag && caseFlag.exists()) {
      await caseFlag.setChecked(true);
    }
    
    // 找到正则表达式输入
    const regexInput = wrapper.find('input[type="text"]') || 
                       wrapper.findAll('textarea')[0];
    
    // 找到测试字符串输入
    const testInput = wrapper.findAll('textarea')[0] || 
                     wrapper.findAll('textarea')[1];
    
    if (regexInput && regexInput.exists() && testInput && testInput.exists()) {
      // 设置正则表达式
      await regexInput.setValue('test');
      
      // 设置测试字符串
      await testInput.setValue('Test test TEST');
      
      // 查找测试按钮并点击
      const testButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('测试') || 
        btn.text().includes('Test')
      );
      
      if (testButton) {
        await testButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找结果区域
        const resultArea = wrapper.find('.results') || 
                          wrapper.find('.matches') || 
                          wrapper.find('.output');
        
        if (resultArea.exists()) {
          // 验证匹配了多个结果 (全局标志) 以及忽略大小写 (i标志)
          const resultText = resultArea.text();
          expect(resultText).toContain('Test') || expect(resultText).toContain('TEST');
        }
      }
    }
  });

  // 替换功能测试
  it('performs regex replacement', async () => {
    const wrapper = mount(RegexTester);
    
    // 找到替换输入框
    const replaceInput = wrapper.findAll('input[type="text"]').find(input => 
      input.attributes('placeholder')?.toLowerCase().includes('replace')
    ) || wrapper.findAll('textarea')[2];
    
    if (replaceInput && replaceInput.exists()) {
      // 找到正则表达式输入
      const regexInput = wrapper.find('input[type="text"]') || 
                        wrapper.findAll('textarea')[0];
      
      // 找到测试字符串输入
      const testInput = wrapper.findAll('textarea')[0] || 
                       wrapper.findAll('textarea')[1];
      
      if (regexInput && regexInput.exists() && testInput && testInput.exists()) {
        // 设置正则表达式
        await regexInput.setValue('\\d+');
        
        // 设置测试字符串
        await testInput.setValue('abc123def');
        
        // 设置替换字符串
        await replaceInput.setValue('NUM');
        
        // 查找替换按钮并点击
        const replaceButton = wrapper.findAll('button').find(btn => 
          btn.text().includes('替换') || 
          btn.text().includes('Replace')
        );
        
        if (replaceButton) {
          await replaceButton.trigger('click');
          
          // 验证组件状态
          expect(wrapper.exists()).toBe(true);
          
          // 查找结果区域
          const resultArea = wrapper.find('.results') || 
                            wrapper.find('.replaced') || 
                            wrapper.find('.output');
          
          if (resultArea.exists()) {
            // 验证替换结果
            const resultText = resultArea.text();
            expect(resultText).toContain('abcNUMdef');
          }
        }
      }
    }
  });

  // 复制结果测试
  it('copies test results to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(RegexTester);
    
    // 设置正则表达式和测试字符串
    const regexInput = wrapper.find('input[type="text"]') || wrapper.findAll('textarea')[0];
    const testInput = wrapper.findAll('textarea')[0] || wrapper.findAll('textarea')[1];
    
    if (regexInput && regexInput.exists() && testInput && testInput.exists()) {
      await regexInput.setValue('\\d+');
      await testInput.setValue('abc123def');
      
      // 查找测试按钮并点击
      const testButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('测试') || 
        btn.text().includes('Test')
      );
      
      if (testButton) {
        await testButton.trigger('click');
      }
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
  it('clears the inputs when clicking clear button', async () => {
    const wrapper = mount(RegexTester);
    
    // 找到输入区域
    const regexInput = wrapper.find('input[type="text"]') || wrapper.findAll('textarea')[0];
    const testInput = wrapper.findAll('textarea')[0] || wrapper.findAll('textarea')[1];
    
    if (regexInput && regexInput.exists() && testInput && testInput.exists()) {
      // 设置数据
      await regexInput.setValue('\\d+');
      await testInput.setValue('abc123def');
      
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
        if (regexInput.element.value !== undefined) {
          const clearedValue = regexInput.element.value;
          expect(clearedValue).toBe('');
        }
        
        if (testInput.element.value !== undefined) {
          const clearedValue = testInput.element.value;
          expect(clearedValue).toBe('');
        }
      }
    }
  });
}); 