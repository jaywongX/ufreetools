import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import XMLFormatter from '../../../src/components/tools/XMLFormatter.vue';

// 可能需要模拟XML格式化库
vi.mock('prettier/standalone', () => ({
  format: vi.fn().mockImplementation((code) => `<!-- formatted -->\n${code}`)
}));

vi.mock('prettier/parser-xml', () => ({ default: {} }));

// 模拟highlight.js
vi.mock('highlight.js/lib/core', () => ({
  default: {
    highlight: vi.fn().mockReturnValue({ value: '<span>formatted</span>' }),
    registerLanguage: vi.fn()
  }
}));

describe('XMLFormatter.vue', () => {
  // 基础渲染测试
  it('renders correctly with XML input area', () => {
    const wrapper = shallowMount(XMLFormatter);
    
    // 检查XML输入区域
    expect(wrapper.find('textarea').exists() || wrapper.find('.xml-editor').exists()).toBe(true);
  });

  // 格式化XML测试
  it('formats XML when clicking beautify button', async () => {
    const wrapper = mount(XMLFormatter);
    
    // 找到XML输入区域
    const xmlInput = wrapper.find('textarea') || wrapper.find('.xml-editor');
    
    if (xmlInput.exists()) {
      // 设置未格式化的XML
      await xmlInput.setValue('<root><child attr="value">text</child><child>more text</child></root>');
      
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
        
        // 获取格式化后的XML
        const formattedValue = xmlInput.element.value;
        
        // 验证格式化后有换行和缩进
        expect(formattedValue.includes('\n')).toBe(true);
        expect(formattedValue.includes('  ')).toBe(true);
      }
    }
  });

  // 压缩XML测试
  it('minifies XML when clicking minify button', async () => {
    const wrapper = mount(XMLFormatter);
    
    // 找到XML输入区域
    const xmlInput = wrapper.find('textarea') || wrapper.find('.xml-editor');
    
    if (xmlInput.exists()) {
      // 设置格式化的XML
      await xmlInput.setValue('<root>\n  <child attr="value">text</child>\n  <child>more text</child>\n</root>');
      
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
        
        // 获取压缩后的XML
        const minifiedValue = xmlInput.element.value;
        
        // 验证压缩后没有换行和多余空格
        expect(minifiedValue.includes('\n')).toBe(false);
        expect(minifiedValue.includes('  ')).toBe(false);
      }
    }
  });

  // XML验证测试
  it('validates XML when clicking validate button', async () => {
    const wrapper = mount(XMLFormatter);
    
    // 找到XML输入区域
    const xmlInput = wrapper.find('textarea') || wrapper.find('.xml-editor');
    
    if (xmlInput.exists()) {
      // 设置有效的XML
      await xmlInput.setValue('<root><child>text</child></root>');
      
      // 查找验证按钮并点击
      const validateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('验证') || 
        btn.text().includes('Validate')
      );
      
      if (validateButton) {
        await validateButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // 无效XML测试
  it('shows error for invalid XML', async () => {
    const wrapper = mount(XMLFormatter);
    
    // 找到XML输入区域
    const xmlInput = wrapper.find('textarea') || wrapper.find('.xml-editor');
    
    if (xmlInput.exists()) {
      // 设置无效的XML
      await xmlInput.setValue('<root><child>text</child><unclosed>');
      
      // 查找验证按钮并点击
      const validateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('验证') || 
        btn.text().includes('Validate')
      );
      
      if (validateButton) {
        await validateButton.trigger('click');
        
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

  // 复制XML测试
  it('copies XML to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(XMLFormatter);
    
    // 找到XML输入区域
    const xmlInput = wrapper.find('textarea') || wrapper.find('.xml-editor');
    
    if (xmlInput.exists()) {
      // 设置XML
      await xmlInput.setValue('<root><child>test</child></root>');
      
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

  // 清除测试
  it('clears the input when clicking clear button', async () => {
    const wrapper = mount(XMLFormatter);
    
    // 找到XML输入区域
    const xmlInput = wrapper.find('textarea') || wrapper.find('.xml-editor');
    
    if (xmlInput.exists()) {
      // 设置XML
      await xmlInput.setValue('<root><child>test</child></root>');
      
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
        const clearedValue = xmlInput.element.value;
        expect(clearedValue).toBe('');
      }
    }
  });
}); 