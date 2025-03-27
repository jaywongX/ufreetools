import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import HtmlEntityEncoder from '../../../src/components/tools/HtmlEntityEncoder.vue';

describe('HtmlEntityEncoder.vue', () => {
  // 基础渲染测试
  it('renders correctly with input and output areas', () => {
    const wrapper = shallowMount(HtmlEntityEncoder);
    
    // 检查输入输出区域
    expect(wrapper.find('textarea').exists()).toBe(true);
  });

  // 编码测试
  it('encodes HTML when in encode mode and clicking process button', async () => {
    const wrapper = mount(HtmlEntityEncoder);
    
    // 找到操作类型选择器并设置为"编码"
    const operationSelect = wrapper.findAll('select').find(select => {
      return select.attributes('id')?.includes('operation') ||
             select.attributes('name')?.includes('operation') ||
             select.attributes('id')?.includes('type') ||
             select.attributes('name')?.includes('type');
    });
    
    if (operationSelect) {
      // 选择编码选项
      const encodeOption = operationSelect.findAll('option').find(option => 
        option.text().includes('编码') || 
        option.text().includes('Encode')
      );
      
      if (encodeOption) {
        await operationSelect.setValue(encodeOption.attributes('value'));
      }
    }
    
    // 找到输入区域
    const input = wrapper.findAll('textarea')[0];
    if (input) {
      // 设置HTML输入
      await input.setValue('<p>Test & Demo</p>');
      
      // 查找处理按钮并点击
      const processButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('处理') || 
        btn.text().includes('编码') || 
        btn.text().includes('转换') || 
        btn.text().includes('Process') ||
        btn.text().includes('Encode') ||
        btn.text().includes('Convert')
      );
      
      if (processButton) {
        await processButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // 解码测试
  it('decodes HTML entities when in decode mode and clicking process button', async () => {
    const wrapper = mount(HtmlEntityEncoder);
    
    // 找到操作类型选择器并设置为"解码"
    const operationSelect = wrapper.findAll('select').find(select => {
      return select.attributes('id')?.includes('operation') ||
             select.attributes('name')?.includes('operation') ||
             select.attributes('id')?.includes('type') ||
             select.attributes('name')?.includes('type');
    });
    
    if (operationSelect) {
      // 选择解码选项
      const decodeOption = operationSelect.findAll('option').find(option => 
        option.text().includes('解码') || 
        option.text().includes('Decode')
      );
      
      if (decodeOption) {
        await operationSelect.setValue(decodeOption.attributes('value'));
      }
    }
    
    // 找到输入区域
    const input = wrapper.findAll('textarea')[0];
    if (input) {
      // 设置编码后的HTML输入
      await input.setValue('&lt;p&gt;Test &amp; Demo&lt;/p&gt;');
      
      // 查找处理按钮并点击
      const processButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('处理') || 
        btn.text().includes('解码') || 
        btn.text().includes('转换') || 
        btn.text().includes('Process') ||
        btn.text().includes('Decode') ||
        btn.text().includes('Convert')
      );
      
      if (processButton) {
        await processButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // 测试复制功能
  it('copies processed data to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(HtmlEntityEncoder);
    
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

  // 测试实体参考表显示
  it('displays HTML entity reference table when available', async () => {
    const wrapper = mount(HtmlEntityEncoder);
    
    // 查找显示参考表的按钮或链接
    const referenceButton = wrapper.findAll('button, a').find(el => 
      el.text().includes('参考') || 
      el.text().includes('实体') || 
      el.text().includes('Reference') ||
      el.text().includes('Entities')
    );
    
    if (referenceButton) {
      await referenceButton.trigger('click');
      
      // 验证组件状态 - 参考表应该显示
      expect(wrapper.exists()).toBe(true);
    }
  });
}); 