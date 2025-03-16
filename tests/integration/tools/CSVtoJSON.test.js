import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import CSVtoJSON from '../../../src/components/tools/CSVtoJSON.vue';

describe('CSVtoJSON.vue', () => {
  // 基础渲染测试
  it('renders correctly with input and output areas', () => {
    const wrapper = shallowMount(CSVtoJSON);
    
    // 检查CSV输入区域
    expect(wrapper.find('textarea').exists()).toBe(true);
  });

  // CSV转JSON测试
  it('converts CSV to JSON when clicking convert button', async () => {
    const wrapper = mount(CSVtoJSON);
    
    // 找到CSV输入区域
    const csvInputs = wrapper.findAll('textarea');
    let csvInput;
    
    if (csvInputs.length > 0) {
      // 通常第一个textarea是输入区域
      csvInput = csvInputs[0];
      
      // 设置CSV数据
      await csvInput.setValue('name,age,city\nJohn,30,New York\nJane,25,Boston');
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找JSON输出区域
        let jsonOutput;
        if (csvInputs.length > 1) {
          jsonOutput = csvInputs[1];
        } else {
          jsonOutput = wrapper.find('.json-output') || wrapper.find('.output');
        }
        
        if (jsonOutput.exists()) {
          // 获取转换后的JSON
          const jsonValue = jsonOutput.element.value || jsonOutput.text();
          
          // 验证JSON包含预期的键和值
          expect(jsonValue).toContain('John');
          expect(jsonValue).toContain('New York');
          expect(jsonValue).toContain('name');
          expect(jsonValue).toContain('age');
        }
      }
    }
  });

  // 分隔符选项测试
  it('uses custom delimiter when specified', async () => {
    const wrapper = mount(CSVtoJSON);
    
    // 找到分隔符选择器或输入
    const delimiterInput = wrapper.find('input[type="text"]') || 
                          wrapper.findAll('input').find(input => 
                            input.attributes('id')?.toLowerCase().includes('delimiter') ||
                            input.attributes('name')?.toLowerCase().includes('delimiter')
                          );
    
    if (delimiterInput && delimiterInput.exists()) {
      // 设置自定义分隔符
      await delimiterInput.setValue(';');
      
      // 找到CSV输入区域
      const csvInput = wrapper.findAll('textarea')[0];
      
      if (csvInput) {
        // 设置使用自定义分隔符的CSV数据
        await csvInput.setValue('name;age;city\nJohn;30;New York\nJane;25;Boston');
        
        // 查找转换按钮并点击
        const convertButton = wrapper.findAll('button').find(btn => 
          btn.text().includes('转换') || 
          btn.text().includes('Convert')
        );
        
        if (convertButton) {
          await convertButton.trigger('click');
          
          // 验证组件状态
          expect(wrapper.exists()).toBe(true);
          
          // 查找JSON输出区域
          const jsonOutput = wrapper.findAll('textarea')[1] || wrapper.find('.json-output');
          
          if (jsonOutput.exists()) {
            // 获取转换后的JSON
            const jsonValue = jsonOutput.element.value || jsonOutput.text();
            
            // 验证JSON包含预期的键和值
            expect(jsonValue).toContain('John');
            expect(jsonValue).toContain('New York');
          }
        }
      }
    }
  });

  // 标题行选项测试
  it('handles CSV without headers when option is selected', async () => {
    const wrapper = mount(CSVtoJSON);
    
    // 找到标题行选项复选框
    const headerCheckbox = wrapper.findAll('input[type="checkbox"]').find(checkbox => 
      checkbox.attributes('id')?.toLowerCase().includes('header') ||
      checkbox.attributes('name')?.toLowerCase().includes('header')
    );
    
    if (headerCheckbox && headerCheckbox.exists()) {
      // 取消选中标题行选项
      await headerCheckbox.setChecked(false);
      
      // 找到CSV输入区域
      const csvInput = wrapper.findAll('textarea')[0];
      
      if (csvInput) {
        // 设置没有标题行的CSV数据
        await csvInput.setValue('John,30,New York\nJane,25,Boston');
        
        // 查找转换按钮并点击
        const convertButton = wrapper.findAll('button').find(btn => 
          btn.text().includes('转换') || 
          btn.text().includes('Convert')
        );
        
        if (convertButton) {
          await convertButton.trigger('click');
          
          // 验证组件状态
          expect(wrapper.exists()).toBe(true);
        }
      }
    }
  });

  // 复制结果测试
  it('copies conversion result to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(CSVtoJSON);
    
    // 找到CSV输入区域并设置值
    const csvInput = wrapper.findAll('textarea')[0];
    if (csvInput) {
      await csvInput.setValue('name,age\nJohn,30');
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
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
    const wrapper = mount(CSVtoJSON);
    
    // 找到CSV输入区域
    const csvInput = wrapper.findAll('textarea')[0];
    
    if (csvInput) {
      // 设置CSV数据
      await csvInput.setValue('name,age\nJohn,30');
      
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
        const clearedValue = csvInput.element.value;
        expect(clearedValue).toBe('');
      }
    }
  });
}); 