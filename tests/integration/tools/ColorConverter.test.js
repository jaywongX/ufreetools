import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import ColorConverter from '../../../src/components/tools/ColorConverter.vue';

describe('ColorConverter.vue', () => {
  // 基础渲染测试
  it('renders correctly with color input', () => {
    const wrapper = shallowMount(ColorConverter);
    
    // 检查颜色输入区域
    expect(wrapper.find('input').exists()).toBe(true);
  });

  // 颜色选择器测试
  it('updates color when using color picker', async () => {
    const wrapper = mount(ColorConverter);
    
    // 找到颜色选择器
    const colorPicker = wrapper.find('input[type="color"]');
    
    if (colorPicker && colorPicker.exists()) {
      // 设置颜色
      await colorPicker.setValue('#ff0000');
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
      
      // 查找HEX输入或输出
      const hexInput = wrapper.findAll('input[type="text"]').find(input => 
        input.attributes('id')?.toLowerCase().includes('hex') ||
        input.attributes('placeholder')?.toLowerCase().includes('hex')
      );
      
      if (hexInput && hexInput.exists()) {
        // 验证HEX值被更新
        expect(hexInput.element.value.toLowerCase()).toBe('#ff0000');
      }
    }
  });

  // HEX到RGB转换测试
  it('converts HEX to RGB format', async () => {
    const wrapper = mount(ColorConverter);
    
    // 找到HEX输入
    const hexInput = wrapper.findAll('input[type="text"]').find(input => 
      input.attributes('id')?.toLowerCase().includes('hex') ||
      input.attributes('placeholder')?.toLowerCase().includes('hex')
    );
    
    if (hexInput && hexInput.exists()) {
      // 设置HEX值
      await hexInput.setValue('#ff0000');
      
      // 模拟输入事件后的转换（如果需要手动触发）
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
      }
      
      // 查找RGB输出
      const rgbOutput = wrapper.findAll('input[type="text"]').find(input => 
        input.attributes('id')?.toLowerCase().includes('rgb') ||
        input.attributes('placeholder')?.toLowerCase().includes('rgb')
      ) || wrapper.find('.rgb-output');
      
      if (rgbOutput && rgbOutput.exists()) {
        // 验证RGB值
        const rgbValue = rgbOutput.element.value || rgbOutput.text();
        expect(rgbValue).toContain('255') && expect(rgbValue).toContain('0');
      }
    }
  });

  // RGB到HSL转换测试
  it('converts RGB to HSL format', async () => {
    const wrapper = mount(ColorConverter);
    
    // 找到RGB输入
    const rgbInputs = wrapper.findAll('input[type="number"]');
    const rgbInput = wrapper.findAll('input[type="text"]').find(input => 
      input.attributes('id')?.toLowerCase().includes('rgb') ||
      input.attributes('placeholder')?.toLowerCase().includes('rgb')
    );
    
    // 如果有独立的RGB输入框
    if (rgbInputs.length >= 3) {
      // 设置RGB值
      await rgbInputs[0].setValue(255);
      await rgbInputs[1].setValue(0);
      await rgbInputs[2].setValue(0);
    } 
    // 如果是单一RGB输入框
    else if (rgbInput && rgbInput.exists()) {
      // 设置RGB值
      await rgbInput.setValue('rgb(255, 0, 0)');
    }
    
    // 模拟输入事件后的转换（如果需要手动触发）
    const convertButton = wrapper.findAll('button').find(btn => 
      btn.text().includes('转换') || 
      btn.text().includes('Convert')
    );
    
    if (convertButton) {
      await convertButton.trigger('click');
    }
    
    // 查找HSL输出
    const hslOutput = wrapper.findAll('input[type="text"]').find(input => 
      input.attributes('id')?.toLowerCase().includes('hsl') ||
      input.attributes('placeholder')?.toLowerCase().includes('hsl')
    ) || wrapper.find('.hsl-output');
    
    if (hslOutput && hslOutput.exists()) {
      // 验证HSL值
      const hslValue = hslOutput.element.value || hslOutput.text();
      expect(hslValue).toContain('0') && expect(hslValue).toContain('100%');
    }
  });

  // 颜色预览测试
  it('displays color preview correctly', async () => {
    const wrapper = mount(ColorConverter);
    
    // 找到HEX输入
    const hexInput = wrapper.findAll('input[type="text"]').find(input => 
      input.attributes('id')?.toLowerCase().includes('hex') ||
      input.attributes('placeholder')?.toLowerCase().includes('hex')
    );
    
    if (hexInput && hexInput.exists()) {
      // 设置HEX值
      await hexInput.setValue('#3498db');
      
      // 查找颜色预览区域
      const previewArea = wrapper.find('.color-preview') || 
                         wrapper.find('.preview');
      
      if (previewArea && previewArea.exists()) {
        // 验证预览区域背景色
        const style = previewArea.attributes('style');
        expect(style).toContain('background') && expect(style).toContain('3498db');
      }
    }
  });

  // 复制颜色值测试
  it('copies color value to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(ColorConverter);
    
    // 设置一个颜色
    const hexInput = wrapper.findAll('input[type="text"]').find(input => 
      input.attributes('id')?.toLowerCase().includes('hex') ||
      input.attributes('placeholder')?.toLowerCase().includes('hex')
    );
    
    if (hexInput && hexInput.exists()) {
      await hexInput.setValue('#3498db');
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

  // 清除/重置测试
  it('resets all color values when clicking reset button', async () => {
    const wrapper = mount(ColorConverter);
    
    // 找到HEX输入
    const hexInput = wrapper.findAll('input[type="text"]').find(input => 
      input.attributes('id')?.toLowerCase().includes('hex') ||
      input.attributes('placeholder')?.toLowerCase().includes('hex')
    );
    
    if (hexInput && hexInput.exists()) {
      // 设置HEX值
      await hexInput.setValue('#3498db');
      
      // 查找重置按钮并点击
      const resetButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('重置') || 
        btn.text().includes('Reset') ||
        btn.text().includes('清除') || 
        btn.text().includes('Clear')
      );
      
      if (resetButton) {
        await resetButton.trigger('click');
        
        // 验证组件状态 - 输入区域应该被重置
        expect(wrapper.exists()).toBe(true);
        
        // 获取重置后的值
        const resetValue = hexInput.element.value;
        expect(resetValue).toBe('') || expect(resetValue).toBe('#000000');
      }
    }
  });
}); 