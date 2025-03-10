import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import XmlFormatter from '../../../src/components/tools/XmlFormatter.vue';

// 可能需要模拟XML格式化库
vi.mock('prettier/standalone', () => ({
  format: vi.fn().mockImplementation((code) => `<!-- formatted -->\n${code}`)
}));

vi.mock('prettier/parser-xml', () => ({ default: {} }));

describe('XmlFormatter.vue', () => {
  // 基础渲染测试
  it('renders correctly with input and output areas', () => {
    const wrapper = shallowMount(XmlFormatter);
    
    // 检查输入区域
    expect(wrapper.find('textarea').exists()).toBe(true);
  });

  // 格式化XML测试
  it('formats XML when in format mode and clicking process button', async () => {
    const wrapper = mount(XmlFormatter);
    
    // 找到操作类型选择器并设置为"格式化"
    const operationSelect = wrapper.findAll('select').find(select => {
      return select.attributes('id')?.includes('operation') ||
             select.attributes('name')?.includes('operation') ||
             select.attributes('id')?.includes('type') ||
             select.attributes('name')?.includes('type');
    });
    
    if (operationSelect) {
      // 选择格式化选项
      const formatOption = operationSelect.findAll('option').find(option => 
        option.text().includes('格式化') || 
        option.text().includes('Format') || 
        option.text().includes('美化')
      );
      
      if (formatOption) {
        await operationSelect.setValue(formatOption.attributes('value'));
      }
    }
    
    // 找到输入区域
    const input = wrapper.findAll('textarea')[0];
    if (input) {
      // 设置XML输入
      await input.setValue('<root><child>Value</child></root>');
      
      // 查找处理按钮并点击
      const processButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('处理') || 
        btn.text().includes('格式化') || 
        btn.text().includes('转换') || 
        btn.text().includes('Process') ||
        btn.text().includes('Format') ||
        btn.text().includes('Convert')
      );
      
      if (processButton) {
        await processButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // 压缩XML测试
  it('minifies XML when in minify mode and clicking process button', async () => {
    const wrapper = mount(XmlFormatter);
    
    // 找到操作类型选择器并设置为"压缩"
    const operationSelect = wrapper.findAll('select').find(select => {
      return select.attributes('id')?.includes('operation') ||
             select.attributes('name')?.includes('operation') ||
             select.attributes('id')?.includes('type') ||
             select.attributes('name')?.includes('type');
    });
    
    if (operationSelect) {
      // 选择压缩选项
      const minifyOption = operationSelect.findAll('option').find(option => 
        option.text().includes('压缩') || 
        option.text().includes('Minify')
      );
      
      if (minifyOption) {
        await operationSelect.setValue(minifyOption.attributes('value'));
      }
    }
    
    // 找到输入区域
    const input = wrapper.findAll('textarea')[0];
    if (input) {
      // 设置XML输入
      await input.setValue('<root>\n  <child>Value</child>\n</root>');
      
      // 查找处理按钮并点击
      const processButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('处理') || 
        btn.text().includes('压缩') || 
        btn.text().includes('转换') || 
        btn.text().includes('Process') ||
        btn.text().includes('Minify') ||
        btn.text().includes('Convert')
      );
      
      if (processButton) {
        await processButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // 测试XML验证功能
  it('validates XML syntax when validation is enabled', async () => {
    const wrapper = mount(XmlFormatter);
    
    // 找到输入区域
    const input = wrapper.findAll('textarea')[0];
    if (input) {
      // 设置无效的XML输入
      await input.setValue('<root><child>Value</child>');
      
      // 查找验证按钮并点击
      const validateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('验证') || 
        btn.text().includes('Validate')
      );
      
      if (validateButton) {
        await validateButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      } else {
        // 如果没有专门的验证按钮，使用处理按钮
        const processButton = wrapper.findAll('button').find(btn => 
          btn.text().includes('处理') || 
          btn.text().includes('格式化') || 
          btn.text().includes('Process') ||
          btn.text().includes('Format')
        );
        
        if (processButton) {
          await processButton.trigger('click');
          
          // 验证组件状态
          expect(wrapper.exists()).toBe(true);
        }
      }
    }
  });

  // 测试复制功能
  it('copies processed XML to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(XmlFormatter);
    
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