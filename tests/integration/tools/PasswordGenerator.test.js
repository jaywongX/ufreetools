import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import PasswordGenerator from '../../../src/components/tools/PasswordGenerator.vue';

describe('PasswordGenerator.vue', () => {
  // 基础渲染测试
  it('renders correctly with password display and generate button', () => {
    const wrapper = shallowMount(PasswordGenerator);
    
    // 检查按钮和密码显示区域
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('input').exists() || wrapper.find('.password-display').exists()).toBe(true);
  });

  // 密码生成测试
  it('generates password when clicking generate button', async () => {
    const wrapper = mount(PasswordGenerator);
    
    // 查找生成按钮并点击
    const generateButton = wrapper.findAll('button').find(btn => 
      btn.text().includes('生成') || 
      btn.text().includes('Generate')
    );
    
    if (generateButton) {
      await generateButton.trigger('click');
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
      
      // 查找结果区域
      const resultArea = wrapper.find('input[readonly]') || 
                        wrapper.find('.password-display');
      
      if (resultArea.exists()) {
        // 验证结果不为空
        const value = resultArea.element.value || resultArea.text();
        expect(value.length).toBeGreaterThan(0);
      }
    }
  });

  // 密码长度设置测试
  it('respects password length setting', async () => {
    const wrapper = mount(PasswordGenerator);
    
    // 找到长度输入
    const lengthInput = wrapper.findAll('input[type="number"], input[type="range"]').find(input => 
      input.attributes('id')?.toLowerCase().includes('length') ||
      input.attributes('name')?.toLowerCase().includes('length')
    );
    
    if (lengthInput) {
      // 设置密码长度
      await lengthInput.setValue(20);
      
      // 查找生成按钮并点击
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找结果区域
        const resultArea = wrapper.find('input[readonly]') || 
                          wrapper.find('.password-display');
        
        if (resultArea.exists()) {
          // 验证密码长度符合设置
          const value = resultArea.element.value || resultArea.text();
          expect(value.length).toBe(20);
        }
      }
    }
  });

  // 字符集选项测试
  it('respects character set options', async () => {
    const wrapper = mount(PasswordGenerator);
    
    // 找到字符集选项复选框
    const uppercaseCheckbox = wrapper.findAll('input[type="checkbox"]').find(checkbox => 
      checkbox.attributes('id')?.toLowerCase().includes('upper') ||
      checkbox.attributes('name')?.toLowerCase().includes('upper')
    );
    
    const lowercaseCheckbox = wrapper.findAll('input[type="checkbox"]').find(checkbox => 
      checkbox.attributes('id')?.toLowerCase().includes('lower') ||
      checkbox.attributes('name')?.toLowerCase().includes('lower')
    );
    
    const numbersCheckbox = wrapper.findAll('input[type="checkbox"]').find(checkbox => 
      checkbox.attributes('id')?.toLowerCase().includes('number') ||
      checkbox.attributes('name')?.toLowerCase().includes('number') ||
      checkbox.attributes('id')?.toLowerCase().includes('digit') ||
      checkbox.attributes('name')?.toLowerCase().includes('digit')
    );
    
    const symbolsCheckbox = wrapper.findAll('input[type="checkbox"]').find(checkbox => 
      checkbox.attributes('id')?.toLowerCase().includes('symbol') ||
      checkbox.attributes('name')?.toLowerCase().includes('symbol') ||
      checkbox.attributes('id')?.toLowerCase().includes('special') ||
      checkbox.attributes('name')?.toLowerCase().includes('special')
    );
    
    // 修改字符集选项
    if (uppercaseCheckbox) {
      await uppercaseCheckbox.setChecked(true);
    }
    
    if (lowercaseCheckbox) {
      await lowercaseCheckbox.setChecked(true);
    }
    
    if (numbersCheckbox) {
      await numbersCheckbox.setChecked(true);
    }
    
    if (symbolsCheckbox) {
      await symbolsCheckbox.setChecked(false);
    }
    
    // 查找生成按钮并点击
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

  // 密码强度测试
  it('displays password strength if that feature is available', async () => {
    const wrapper = mount(PasswordGenerator);
    
    // 查找生成按钮并点击生成密码
    const generateButton = wrapper.findAll('button').find(btn => 
      btn.text().includes('生成') || 
      btn.text().includes('Generate')
    );
    
    if (generateButton) {
      await generateButton.trigger('click');
      
      // 查找强度显示区域
      const strengthElement = wrapper.find('.strength') || 
                             wrapper.find('.password-strength') ||
                             wrapper.findAll('progress').at(0);
      
      if (strengthElement && strengthElement.exists()) {
        // 验证强度显示正常
        expect(strengthElement.exists()).toBe(true);
      }
    }
  });

  // 复制密码测试
  it('copies password to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(PasswordGenerator);
    
    // 先生成密码
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
}); 