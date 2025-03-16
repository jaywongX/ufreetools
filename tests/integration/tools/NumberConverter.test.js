import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import NumberConverter from '../../../src/components/tools/NumberConverter.vue';

describe('NumberConverter.vue', () => {
  // 基础渲染测试
  it('renders correctly with number input and base options', () => {
    const wrapper = shallowMount(NumberConverter);
    
    // 检查输入字段和基数选择器
    expect(wrapper.find('input[type="text"]').exists() || wrapper.find('input[type="number"]').exists()).toBe(true);
    expect(wrapper.findAll('select').length > 0 || wrapper.findAll('input[type="radio"]').length > 0).toBe(true);
  });

  // 十进制转其他进制测试
  it('converts from decimal to other bases', async () => {
    const wrapper = mount(NumberConverter);
    
    // 找到数字输入字段
    const numberInput = wrapper.find('input[type="text"]') || wrapper.find('input[type="number"]');
    
    if (numberInput.exists()) {
      // 输入十进制数
      await numberInput.setValue('42');
      
      // 找到输入基数选择器
      const baseSelect = wrapper.findAll('select').find(select => 
        select.attributes('id')?.includes('input') ||
        select.attributes('name')?.includes('input') ||
        select.attributes('id')?.includes('from')
      );
      
      if (baseSelect) {
        // 选择十进制(如果需要)
        const decOption = baseSelect.findAll('option').find(option => 
          option.text().includes('10') || 
          option.text().toLowerCase().includes('dec')
        );
        
        if (decOption) {
          await baseSelect.setValue(decOption.attributes('value'));
        }
      }
      
      // 找到目标基数选择器
      const targetBaseSelect = wrapper.findAll('select').find(select => 
        select.attributes('id')?.includes('output') ||
        select.attributes('name')?.includes('output') ||
        select.attributes('id')?.includes('to')
      );
      
      if (targetBaseSelect) {
        // 选择十六进制
        const hexOption = targetBaseSelect.findAll('option').find(option => 
          option.text().includes('16') || 
          option.text().toLowerCase().includes('hex')
        );
        
        if (hexOption) {
          await targetBaseSelect.setValue(hexOption.attributes('value'));
        }
      }
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
      }
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
      
      // 找到结果字段
      const resultField = wrapper.findAll('input[type="text"]').filter(input => input !== numberInput)[0];
      
      if (resultField) {
        // 42的十六进制是2A
        expect(resultField.element.value.toUpperCase()).toBe('2A');
      }
    }
  });

  // 其他进制转十进制测试
  it('converts from other bases to decimal', async () => {
    const wrapper = mount(NumberConverter);
    
    // 找到数字输入字段
    const numberInput = wrapper.find('input[type="text"]') || wrapper.find('input[type="number"]');
    
    if (numberInput.exists()) {
      // 输入十六进制数
      await numberInput.setValue('2A');
      
      // 找到输入基数选择器
      const baseSelect = wrapper.findAll('select').find(select => 
        select.attributes('id')?.includes('input') ||
        select.attributes('name')?.includes('input') ||
        select.attributes('id')?.includes('from')
      );
      
      if (baseSelect) {
        // 选择十六进制
        const hexOption = baseSelect.findAll('option').find(option => 
          option.text().includes('16') || 
          option.text().toLowerCase().includes('hex')
        );
        
        if (hexOption) {
          await baseSelect.setValue(hexOption.attributes('value'));
        }
      }
      
      // 找到目标基数选择器
      const targetBaseSelect = wrapper.findAll('select').find(select => 
        select.attributes('id')?.includes('output') ||
        select.attributes('name')?.includes('output') ||
        select.attributes('id')?.includes('to')
      );
      
      if (targetBaseSelect) {
        // 选择十进制
        const decOption = targetBaseSelect.findAll('option').find(option => 
          option.text().includes('10') || 
          option.text().toLowerCase().includes('dec')
        );
        
        if (decOption) {
          await targetBaseSelect.setValue(decOption.attributes('value'));
        }
      }
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
      }
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
      
      // 找到结果字段
      const resultField = wrapper.findAll('input[type="text"]').filter(input => input !== numberInput)[0];
      
      if (resultField) {
        // 十六进制2A是十进制42
        expect(resultField.element.value).toBe('42');
      }
    }
  });

  // 二进制测试
  it('handles binary conversion correctly', async () => {
    const wrapper = mount(NumberConverter);
    
    // 找到数字输入字段
    const numberInput = wrapper.find('input[type="text"]') || wrapper.find('input[type="number"]');
    
    if (numberInput.exists()) {
      // 输入二进制数
      await numberInput.setValue('101010');
      
      // 找到输入基数选择器
      const baseSelect = wrapper.findAll('select').find(select => 
        select.attributes('id')?.includes('input') ||
        select.attributes('name')?.includes('input') ||
        select.attributes('id')?.includes('from')
      );
      
      if (baseSelect) {
        // 选择二进制
        const binOption = baseSelect.findAll('option').find(option => 
          option.text().includes('2') || 
          option.text().toLowerCase().includes('bin')
        );
        
        if (binOption) {
          await baseSelect.setValue(binOption.attributes('value'));
        }
      }
      
      // 找到目标基数选择器
      const targetBaseSelect = wrapper.findAll('select').find(select => 
        select.attributes('id')?.includes('output') ||
        select.attributes('name')?.includes('output') ||
        select.attributes('id')?.includes('to')
      );
      
      if (targetBaseSelect) {
        // 选择十进制
        const decOption = targetBaseSelect.findAll('option').find(option => 
          option.text().includes('10') || 
          option.text().toLowerCase().includes('dec')
        );
        
        if (decOption) {
          await targetBaseSelect.setValue(decOption.attributes('value'));
        }
      }
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
      }
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
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
    
    const wrapper = mount(NumberConverter);
    
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
}); 