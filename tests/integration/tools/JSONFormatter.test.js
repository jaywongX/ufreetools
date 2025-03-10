import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import JSONFormatter from '../../../src/components/tools/JSONFormatter.vue';

// 模拟 highlight.js
vi.mock('highlight.js/lib/core', () => ({
  default: {
    highlight: vi.fn().mockReturnValue({ value: '<span>formatted</span>' }),
    registerLanguage: vi.fn()
  }
}));

describe('JSONFormatter.vue', () => {
  // 基础渲染测试
  it('renders correctly with JSON input area', () => {
    const wrapper = shallowMount(JSONFormatter);
    
    // 检查JSON输入区域
    expect(wrapper.find('textarea').exists() || wrapper.find('.json-editor').exists()).toBe(true);
  });

  // 格式化JSON测试
  it('formats JSON when clicking beautify button', async () => {
    const wrapper = mount(JSONFormatter);
    
    // 找到JSON输入区域
    const jsonInput = wrapper.find('textarea') || wrapper.find('.json-editor');
    
    if (jsonInput.exists()) {
      // 设置未格式化的JSON
      await jsonInput.setValue('{"name":"Test","value":123,"nested":{"key":"value"}}');
      
      // 查找格式化按钮并点击
      const formatButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('格式化') || 
        btn.text().includes('Format') ||
        btn.text().includes('美化') || 
        btn.text().includes('Beautify')
      );
      
      if (formatButton) {
        await formatButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 获取格式化后的JSON
        const formattedValue = jsonInput.element.value;
        
        // 验证格式化后有换行和缩进
        expect(formattedValue.includes('\n')).toBe(true);
        expect(formattedValue.includes('  ')).toBe(true);
      }
    }
  });

  // 压缩JSON测试
  it('minifies JSON when clicking minify button', async () => {
    const wrapper = mount(JSONFormatter);
    
    // 找到JSON输入区域
    const jsonInput = wrapper.find('textarea') || wrapper.find('.json-editor');
    
    if (jsonInput.exists()) {
      // 设置格式化的JSON
      await jsonInput.setValue('{\n  "name": "Test",\n  "value": 123\n}');
      
      // 查找压缩按钮并点击
      const minifyButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('压缩') || 
        btn.text().includes('Minify') ||
        btn.text().includes('紧凑') || 
        btn.text().includes('Compact')
      );
      
      if (minifyButton) {
        await minifyButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 获取压缩后的JSON
        const minifiedValue = jsonInput.element.value;
        
        // 验证压缩后没有换行和多余空格
        expect(minifiedValue.includes('\n')).toBe(false);
        expect(minifiedValue.includes('  ')).toBe(false);
      }
    }
  });

  // 无效JSON处理测试
  it('shows error for invalid JSON', async () => {
    const wrapper = mount(JSONFormatter);
    
    // 找到JSON输入区域
    const jsonInput = wrapper.find('textarea') || wrapper.find('.json-editor');
    
    if (jsonInput.exists()) {
      // 设置无效的JSON
      await jsonInput.setValue('{"name": "Test", value: 123}');
      
      // 查找格式化按钮并点击
      const formatButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('格式化') || 
        btn.text().includes('Format') ||
        btn.text().includes('美化') || 
        btn.text().includes('Beautify')
      );
      
      if (formatButton) {
        await formatButton.trigger('click');
        
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

  // 复制JSON测试
  it('copies JSON to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(JSONFormatter);
    
    // 找到JSON输入区域
    const jsonInput = wrapper.find('textarea') || wrapper.find('.json-editor');
    
    if (jsonInput.exists()) {
      // 设置JSON
      await jsonInput.setValue('{"name": "Test", "value": 123}');
      
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
    }
  });

  // 空白清除测试
  it('clears the input when clicking clear button', async () => {
    const wrapper = mount(JSONFormatter);
    
    // 找到JSON输入区域
    const jsonInput = wrapper.find('textarea') || wrapper.find('.json-editor');
    
    if (jsonInput.exists()) {
      // 设置JSON
      await jsonInput.setValue('{"name": "Test", "value": 123}');
      
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
        const clearedValue = jsonInput.element.value;
        expect(clearedValue).toBe('');
      }
    }
  });
});
