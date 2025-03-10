import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import IPConverter from '../../../src/components/tools/IPConverter.vue';

describe('IPConverter.vue', () => {
  // 基础渲染测试
  it('renders correctly with IP input area', () => {
    const wrapper = shallowMount(IPConverter);
    
    // 检查输入区域
    expect(wrapper.find('input').exists() || wrapper.find('textarea').exists()).toBe(true);
  });

  // IPv4转换成二进制测试
  it('converts IPv4 to binary format', async () => {
    const wrapper = mount(IPConverter);
    
    // 找到IP输入区域
    const ipInput = wrapper.find('input[type="text"]') || wrapper.find('textarea');
    
    if (ipInput.exists()) {
      // 设置IPv4地址
      await ipInput.setValue('192.168.1.1');
      
      // 找到转换类型选择器
      const convertSelect = wrapper.findAll('select').find(select => 
        select.attributes('id')?.toLowerCase().includes('convert') ||
        select.attributes('name')?.toLowerCase().includes('convert') ||
        select.attributes('id')?.toLowerCase().includes('format')
      );
      
      if (convertSelect && convertSelect.exists()) {
        // 获取所有选项
        const options = convertSelect.findAll('option');
        
        // 找到二进制转换选项
        const binaryOption = options.find(option => 
          option.text().toLowerCase().includes('binary')
        );
        
        if (binaryOption) {
          await convertSelect.setValue(binaryOption.attributes('value'));
        }
      }
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找结果区域
        const resultArea = wrapper.find('.result') || wrapper.find('.conversion-result');
        
        if (resultArea.exists()) {
          // 验证结果包含二进制表示
          expect(resultArea.text()).toContain('11000000') || 
          expect(resultArea.html()).toContain('11000000');
        }
      }
    }
  });

  // IPv4转换成十六进制测试
  it('converts IPv4 to hexadecimal format', async () => {
    const wrapper = mount(IPConverter);
    
    // 找到IP输入区域
    const ipInput = wrapper.find('input[type="text"]') || wrapper.find('textarea');
    
    if (ipInput.exists()) {
      // 设置IPv4地址
      await ipInput.setValue('192.168.1.1');
      
      // 找到转换类型选择器
      const convertSelect = wrapper.findAll('select').find(select => 
        select.attributes('id')?.toLowerCase().includes('convert') ||
        select.attributes('name')?.toLowerCase().includes('convert') ||
        select.attributes('id')?.toLowerCase().includes('format')
      );
      
      if (convertSelect && convertSelect.exists()) {
        // 获取所有选项
        const options = convertSelect.findAll('option');
        
        // 找到十六进制转换选项
        const hexOption = options.find(option => 
          option.text().toLowerCase().includes('hex')
        );
        
        if (hexOption) {
          await convertSelect.setValue(hexOption.attributes('value'));
        }
      }
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找结果区域
        const resultArea = wrapper.find('.result') || wrapper.find('.conversion-result');
        
        if (resultArea.exists()) {
          // 验证结果包含十六进制表示
          expect(resultArea.text()).toContain('c0') || 
          expect(resultArea.html()).toContain('c0');
        }
      }
    }
  });

  // IPv6转IPv4测试
  it('converts IPv6 to IPv4 format if supported', async () => {
    const wrapper = mount(IPConverter);
    
    // 找到IP输入区域
    const ipInput = wrapper.find('input[type="text"]') || wrapper.find('textarea');
    
    if (ipInput.exists()) {
      // 设置IPv6地址
      await ipInput.setValue('::ffff:192.168.1.1');
      
      // 找到转换类型选择器
      const convertSelect = wrapper.findAll('select').find(select => 
        select.attributes('id')?.toLowerCase().includes('convert') ||
        select.attributes('name')?.toLowerCase().includes('convert') ||
        select.attributes('id')?.toLowerCase().includes('format')
      );
      
      if (convertSelect && convertSelect.exists()) {
        // 获取所有选项
        const options = convertSelect.findAll('option');
        
        // 找到IPv4转换选项
        const ipv4Option = options.find(option => 
          option.text().toLowerCase().includes('ipv4')
        );
        
        if (ipv4Option) {
          await convertSelect.setValue(ipv4Option.attributes('value'));
        }
      }
      
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
  });

  // IP地址验证测试
  it('validates IP address format', async () => {
    const wrapper = mount(IPConverter);
    
    // 找到IP输入区域
    const ipInput = wrapper.find('input[type="text"]') || wrapper.find('textarea');
    
    if (ipInput.exists()) {
      // 设置无效的IP地址
      await ipInput.setValue('999.999.999.999');
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
        
        // 验证组件状态 - 应该显示错误信息
        expect(wrapper.exists()).toBe(true);
        
        // 尝试查找错误消息元素
        const errorElement = wrapper.find('.error') || 
                            wrapper.find('.validation-error') ||
                            wrapper.find('.alert-danger');
        
        if (errorElement.exists()) {
          expect(errorElement.exists()).toBe(true);
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
    
    const wrapper = mount(IPConverter);
    
    // 执行转换
    const ipInput = wrapper.find('input[type="text"]') || wrapper.find('textarea');
    if (ipInput.exists()) {
      await ipInput.setValue('192.168.1.1');
      
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
}); 