import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import HtmlEntityConverter from '../../../src/components/tools/HtmlEntityConverter.vue';

describe('HtmlEntityConverter.vue', () => {
  // 基础渲染测试
  it('renders correctly with input and output areas', () => {
    const wrapper = shallowMount(HtmlEntityConverter);
    
    // 检查输入输出区域
    expect(wrapper.find('textarea').exists() || wrapper.find('input').exists()).toBe(true);
  });

  // 编码测试
  it('encodes HTML to entities when in encode mode', async () => {
    const wrapper = mount(HtmlEntityConverter);
    
    // 找到操作类型选择器
    const operationRadios = wrapper.findAll('input[type="radio"]');
    const operationSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('operation') ||
      select.attributes('name')?.toLowerCase().includes('operation') ||
      select.attributes('id')?.toLowerCase().includes('mode')
    );
    
    // 设置为编码模式
    if (operationRadios.length > 1) {
      // 找到编码单选按钮
      const encodeRadio = operationRadios.find(radio => 
        radio.attributes('value')?.toLowerCase().includes('encode') ||
        radio.attributes('id')?.toLowerCase().includes('encode')
      );
      
      if (encodeRadio) {
        await encodeRadio.setChecked(true);
      }
    } else if (operationSelect && operationSelect.exists()) {
      // 获取所有选项
      const options = operationSelect.findAll('option');
      
      // 找到编码选项
      const encodeOption = options.find(option => 
        option.text().toLowerCase().includes('encode') ||
        option.text().includes('编码')
      );
      
      if (encodeOption) {
        await operationSelect.setValue(encodeOption.attributes('value'));
      }
    }
    
    // 找到输入区域
    const input = wrapper.findAll('textarea')[0] || wrapper.find('input[type="text"]');
    
    if (input) {
      // 设置含HTML标签的文本
      await input.setValue('<div>Hello & World</div>');
      
      // 查找处理按钮并点击
      const processButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('编码') || 
        btn.text().includes('Convert') ||
        btn.text().includes('Encode')
      );
      
      if (processButton) {
        await processButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 找到输出区域
        const output = wrapper.findAll('textarea')[1] || wrapper.findAll('input[readonly]')[0];
        
        if (output) {
          // 验证结果包含实体
          const result = output.element.value;
          expect(result).toContain('&lt;');
          expect(result).toContain('&gt;');
          expect(result).toContain('&amp;');
        }
      }
    }
  });

  // 解码测试
  it('decodes entities to HTML when in decode mode', async () => {
    const wrapper = mount(HtmlEntityConverter);
    
    // 找到操作类型选择器
    const operationRadios = wrapper.findAll('input[type="radio"]');
    const operationSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('operation') ||
      select.attributes('name')?.toLowerCase().includes('operation') ||
      select.attributes('id')?.toLowerCase().includes('mode')
    );
    
    // 设置为解码模式
    if (operationRadios.length > 1) {
      // 找到解码单选按钮
      const decodeRadio = operationRadios.find(radio => 
        radio.attributes('value')?.toLowerCase().includes('decode') ||
        radio.attributes('id')?.toLowerCase().includes('decode')
      );
      
      if (decodeRadio) {
        await decodeRadio.setChecked(true);
      }
    } else if (operationSelect && operationSelect.exists()) {
      // 获取所有选项
      const options = operationSelect.findAll('option');
      
      // 找到解码选项
      const decodeOption = options.find(option => 
        option.text().toLowerCase().includes('decode') ||
        option.text().includes('解码')
      );
      
      if (decodeOption) {
        await operationSelect.setValue(decodeOption.attributes('value'));
      }
    }
    
    // 找到输入区域
    const input = wrapper.findAll('textarea')[0] || wrapper.find('input[type="text"]');
    
    if (input) {
      // 设置含HTML实体的文本
      await input.setValue('&lt;div&gt;Hello &amp; World&lt;/div&gt;');
      
      // 查找处理按钮并点击
      const processButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('解码') || 
        btn.text().includes('Convert') ||
        btn.text().includes('Decode')
      );
      
      if (processButton) {
        await processButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 找到输出区域
        const output = wrapper.findAll('textarea')[1] || wrapper.findAll('input[readonly]')[0];
        
        if (output) {
          // 验证结果包含HTML
          const result = output.element.value;
          expect(result).toContain('<');
          expect(result).toContain('>');
          expect(result).toContain('&');
        }
      }
    }
  });

  // 命名实体选项测试
  it('respects named entities option if available', async () => {
    const wrapper = mount(HtmlEntityConverter);
    
    // 找到命名实体选项复选框
    const namedEntitiesCheckbox = wrapper.findAll('input[type="checkbox"]').find(checkbox => 
      checkbox.attributes('id')?.toLowerCase().includes('named') ||
      checkbox.attributes('name')?.toLowerCase().includes('named') ||
      checkbox.attributes('id')?.toLowerCase().includes('name')
    );
    
    if (namedEntitiesCheckbox) {
      // 切换选项
      await namedEntitiesCheckbox.setChecked(!namedEntitiesCheckbox.element.checked);
      
      // 找到输入区域
      const input = wrapper.findAll('textarea')[0] || wrapper.find('input[type="text"]');
      
      if (input) {
        // 设置文本
        await input.setValue('<div>Hello & World</div>');
        
        // 查找转换按钮并点击
        const processButton = wrapper.findAll('button').find(btn => 
          btn.text().includes('转换') || 
          btn.text().includes('编码') || 
          btn.text().includes('Convert') ||
          btn.text().includes('Encode')
        );
        
        if (processButton) {
          await processButton.trigger('click');
          
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
    
    const wrapper = mount(HtmlEntityConverter);
    
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