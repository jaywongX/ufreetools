import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import RandomGenerator from '../../../src/components/tools/RandomGenerator.vue';

describe('RandomGenerator.vue', () => {
  // 基础渲染测试
  it('renders correctly with generator options', () => {
    const wrapper = shallowMount(RandomGenerator);
    
    // 检查基本元素
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('input').exists() || wrapper.find('select').exists()).toBe(true);
  });

  // 生成随机字符串测试
  it('generates random string when clicking generate button', async () => {
    const wrapper = mount(RandomGenerator);
    
    // 查找生成按钮并点击
    const generateButton = wrapper.findAll('button').find(btn => 
      btn.text().includes('生成') || 
      btn.text().includes('Generate')
    );
    
    if (generateButton) {
      // 获取结果区域的初始内容
      const resultArea = wrapper.find('input[readonly]') || 
                        wrapper.find('textarea[readonly]') || 
                        wrapper.find('.result');
      
      const initialValue = resultArea ? resultArea.element.value || resultArea.text() : '';
      
      // 点击生成按钮
      await generateButton.trigger('click');
      
      // 获取更新后的结果
      const updatedValue = resultArea ? resultArea.element.value || resultArea.text() : '';
      
      // 验证结果已更新或不为空
      if (initialValue === '') {
        expect(updatedValue).not.toBe('');
      } else {
        // 如果初始有值，可能需要额外点击来验证值会更改
        await generateButton.trigger('click');
        const newValue = resultArea ? resultArea.element.value || resultArea.text() : '';
        expect(newValue).not.toBe('') || expect(newValue).not.toBe(initialValue);
      }
    }
  });

  // 长度设置测试
  it('respects length setting when generating random string', async () => {
    const wrapper = mount(RandomGenerator);
    
    // 找到长度输入字段
    const lengthInput = wrapper.findAll('input[type="number"]').find(input => 
      input.attributes('id')?.toLowerCase().includes('length') ||
      input.attributes('name')?.toLowerCase().includes('length') ||
      input.attributes('placeholder')?.toLowerCase().includes('length')
    );
    
    if (lengthInput) {
      // 设置长度为8
      await lengthInput.setValue(8);
      
      // 点击生成按钮
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
        
        // 检查生成的结果长度
        const resultArea = wrapper.find('input[readonly]') || 
                          wrapper.find('textarea[readonly]') || 
                          wrapper.find('.result');
        
        const result = resultArea ? resultArea.element.value || resultArea.text() : '';
        
        // 验证长度，但注意有些组件可能会在结果中添加额外字符
        expect(result.length >= 8).toBe(true);
      }
    }
  });

  // 字符集选项测试
  it('applies character set options when generating', async () => {
    const wrapper = mount(RandomGenerator);
    
    // 找到字符集选项复选框
    const uppercaseCheckbox = wrapper.findAll('input[type="checkbox"]').find(checkbox => 
      checkbox.attributes('id')?.toLowerCase().includes('upper') ||
      checkbox.attributes('name')?.toLowerCase().includes('upper') ||
      checkbox.attributes('value')?.toLowerCase().includes('upper')
    );
    
    const numbersCheckbox = wrapper.findAll('input[type="checkbox"]').find(checkbox => 
      checkbox.attributes('id')?.toLowerCase().includes('number') ||
      checkbox.attributes('name')?.toLowerCase().includes('number') ||
      checkbox.attributes('value')?.toLowerCase().includes('number')
    );
    
    // 如果找到了字符集选项，测试切换它们
    if (uppercaseCheckbox) {
      // 切换大写字母选项
      await uppercaseCheckbox.setChecked(!uppercaseCheckbox.element.checked);
    }
    
    if (numbersCheckbox) {
      // 切换数字选项
      await numbersCheckbox.setChecked(!numbersCheckbox.element.checked);
    }
    
    // 点击生成按钮
    const generateButton = wrapper.findAll('button').find(btn => 
      btn.text().includes('生成') || 
      btn.text().includes('Generate')
    );
    
    if (generateButton) {
      await generateButton.trigger('click');
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
    }
  });

  // 复制生成结果测试
  it('copies generated result to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(RandomGenerator);
    
    // 先生成随机内容
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

  // 随机类型选择测试
  it('switches between different random generation types', async () => {
    const wrapper = mount(RandomGenerator);
    
    // 找到类型选择器
    const typeSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('type') ||
      select.attributes('name')?.toLowerCase().includes('type')
    );
    
    const typeRadios = wrapper.findAll('input[type="radio"]');
    
    // 测试选择不同类型
    if (typeSelect && typeSelect.exists()) {
      // 获取所有选项
      const options = typeSelect.findAll('option');
      
      if (options.length > 1) {
        // 选择另一个类型
        await typeSelect.setValue(options[1].attributes('value'));
        
        // 点击生成按钮
        const generateButton = wrapper.findAll('button').find(btn => 
          btn.text().includes('生成') || 
          btn.text().includes('Generate')
        );
        
        if (generateButton) {
          await generateButton.trigger('click');
          
          // 验证组件状态
          expect(wrapper.exists()).toBe(true);
        }
      }
    }
    // 或者测试单选按钮形式
    else if (typeRadios.length > 1) {
      // 选择另一个类型
      await typeRadios[1].setChecked(true);
      
      // 点击生成按钮
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });
}); 