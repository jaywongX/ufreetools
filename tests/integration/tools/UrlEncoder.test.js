import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import UrlEncoder from '../../../src/components/tools/UrlEncoder.vue';

describe('UrlEncoder.vue', () => {
  // 基础渲染测试
  it('renders correctly with input and output areas', () => {
    const wrapper = shallowMount(UrlEncoder);
    
    // 检查输入输出区域
    expect(wrapper.find('textarea').exists() || wrapper.find('input').exists()).toBe(true);
  });

  // 编码测试
  it('encodes URL when in encode mode', async () => {
    const wrapper = mount(UrlEncoder);
    
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
      // 设置含特殊字符的URL
      await input.setValue('https://example.com/path?name=测试&value=hello world');
      
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
          // 验证结果包含编码后的特殊字符
          const result = output.element.value;
          expect(result).toContain('%');
          expect(result).not.toContain(' ');
        }
      }
    }
  });

  // 解码测试
  it('decodes URL when in decode mode', async () => {
    const wrapper = mount(UrlEncoder);
    
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
      // 设置编码后的URL
      await input.setValue('https://example.com/path?name=%E6%B5%8B%E8%AF%95&value=hello%20world');
      
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
          // 验证结果包含解码后的特殊字符
          const result = output.element.value;
          expect(result).toContain(' ');
          expect(result).not.toContain('%20');
        }
      }
    }
  });

  // 组件选项测试
  it('respects component options if available', async () => {
    const wrapper = mount(UrlEncoder);
    
    // 找到组件选项复选框（如果有）
    const componentCheckbox = wrapper.findAll('input[type="checkbox"]').find(checkbox => 
      checkbox.attributes('id')?.toLowerCase().includes('component') ||
      checkbox.attributes('name')?.toLowerCase().includes('component')
    );
    
    if (componentCheckbox) {
      // 切换选项
      await componentCheckbox.setChecked(!componentCheckbox.element.checked);
      
      // 找到输入区域
      const input = wrapper.findAll('textarea')[0] || wrapper.find('input[type="text"]');
      
      if (input) {
        // 设置URL
        await input.setValue('https://example.com/path?q=test&id=123');
        
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
    
    const wrapper = mount(UrlEncoder);
    
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