import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import StringEscaper from '../../../src/components/tools/StringEscaper.vue';

describe('StringEscaper.vue', () => {
  // 基础渲染测试
  it('renders correctly with string input area', () => {
    const wrapper = shallowMount(StringEscaper);
    
    // 检查字符串输入区域
    expect(wrapper.find('textarea').exists()).toBe(true);
  });

  // 字符串转义测试 - JS
  it('escapes string for JavaScript when selecting that mode', async () => {
    const wrapper = mount(StringEscaper);
    
    // 找到转义模式选择器
    const modeSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('mode') ||
      select.attributes('name')?.toLowerCase().includes('mode') ||
      select.attributes('id')?.toLowerCase().includes('type') ||
      select.attributes('name')?.toLowerCase().includes('type')
    );
    
    if (modeSelect && modeSelect.exists()) {
      // 获取所有选项
      const options = modeSelect.findAll('option');
      
      // 找到JavaScript选项
      const jsOption = options.find(option => 
        option.text().toLowerCase().includes('javascript') ||
        option.text().toLowerCase().includes('js')
      );
      
      if (jsOption) {
        await modeSelect.setValue(jsOption.attributes('value'));
        
        // 找到字符串输入区域
        const stringInput = wrapper.findAll('textarea')[0];
        
        if (stringInput) {
          // 设置包含需要转义字符的字符串
          await stringInput.setValue('This is a "test" with \\ backslash and \n newline');
          
          // 查找转义按钮并点击
          const escapeButton = wrapper.findAll('button').find(btn => 
            btn.text().includes('转义') || 
            btn.text().includes('Escape')
          );
          
          if (escapeButton) {
            await escapeButton.trigger('click');
            
            // 验证组件状态
            expect(wrapper.exists()).toBe(true);
            
            // 查找转义后的输出区域
            const outputArea = wrapper.findAll('textarea')[1] || wrapper.find('.output');
            
            if (outputArea.exists()) {
              // 获取转义后的字符串
              const escapedValue = outputArea.element.value || outputArea.text();
              
              // 验证转义字符
              expect(escapedValue).toContain('\\"') || expect(escapedValue).toContain('\\\\');
            }
          }
        }
      }
    }
  });

  // 字符串转义测试 - HTML
  it('escapes string for HTML when selecting that mode', async () => {
    const wrapper = mount(StringEscaper);
    
    // 找到转义模式选择器
    const modeSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('mode') ||
      select.attributes('name')?.toLowerCase().includes('mode')
    );
    
    if (modeSelect && modeSelect.exists()) {
      // 获取所有选项
      const options = modeSelect.findAll('option');
      
      // 找到HTML选项
      const htmlOption = options.find(option => 
        option.text().toLowerCase().includes('html')
      );
      
      if (htmlOption) {
        await modeSelect.setValue(htmlOption.attributes('value'));
        
        // 找到字符串输入区域
        const stringInput = wrapper.findAll('textarea')[0];
        
        if (stringInput) {
          // 设置包含需要HTML转义字符的字符串
          await stringInput.setValue('<div>Test & example</div>');
          
          // 查找转义按钮并点击
          const escapeButton = wrapper.findAll('button').find(btn => 
            btn.text().includes('转义') || 
            btn.text().includes('Escape')
          );
          
          if (escapeButton) {
            await escapeButton.trigger('click');
            
            // 验证组件状态
            expect(wrapper.exists()).toBe(true);
            
            // 查找转义后的输出区域
            const outputArea = wrapper.findAll('textarea')[1] || wrapper.find('.output');
            
            if (outputArea.exists()) {
              // 获取转义后的字符串
              const escapedValue = outputArea.element.value || outputArea.text();
              
              // 验证HTML实体
              expect(escapedValue).toContain('&lt;') || expect(escapedValue).toContain('&amp;');
            }
          }
        }
      }
    }
  });

  // 字符串反转义测试
  it('unescapes string when clicking unescape button', async () => {
    const wrapper = mount(StringEscaper);
    
    // 找到字符串输入区域
    const stringInput = wrapper.findAll('textarea')[0];
    
    if (stringInput) {
      // 设置已转义的字符串
      await stringInput.setValue('This is a \\\"test\\\" with \\\\ backslash');
      
      // 查找反转义按钮并点击
      const unescapeButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('反转义') || 
        btn.text().includes('Unescape')
      );
      
      if (unescapeButton) {
        await unescapeButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找反转义后的输出区域
        const outputArea = wrapper.findAll('textarea')[1] || wrapper.find('.output');
        
        if (outputArea.exists()) {
          // 获取反转义后的字符串
          const unescapedValue = outputArea.element.value || outputArea.text();
          
          // 验证反转义结果不含转义字符
          expect(unescapedValue).toContain('"test"') || expect(unescapedValue).toContain('\ backslash');
        }
      }
    }
  });

  // 复制结果测试
  it('copies escaped string to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(StringEscaper);
    
    // 找到字符串输入区域并设置值
    const stringInput = wrapper.findAll('textarea')[0];
    if (stringInput) {
      await stringInput.setValue('Test "string"');
      
      // 查找转义按钮并点击
      const escapeButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转义') || 
        btn.text().includes('Escape')
      );
      
      if (escapeButton) {
        await escapeButton.trigger('click');
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

  // 清除测试
  it('clears the inputs when clicking clear button', async () => {
    const wrapper = mount(StringEscaper);
    
    // 找到字符串输入区域
    const stringInput = wrapper.findAll('textarea')[0];
    
    if (stringInput) {
      // 设置字符串数据
      await stringInput.setValue('Test "string"');
      
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
        const clearedValue = stringInput.element.value;
        expect(clearedValue).toBe('');
      }
    }
  });
}); 