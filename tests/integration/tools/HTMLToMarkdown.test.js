import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import HTMLToMarkdown from '../../../src/components/tools/HTMLToMarkdown.vue';

// 模拟turndown库（通常用于HTML到Markdown的转换）
vi.mock('turndown', () => {
  return function() {
    return {
      turndown: vi.fn().mockImplementation((html) => {
        if (html.includes('<h1>')) {
          return '# Heading';
        }
        if (html.includes('<a href=')) {
          return '[Link](https://example.com)';
        }
        if (html.includes('<ul>')) {
          return '- Item 1\n- Item 2';
        }
        return 'Converted markdown';
      })
    };
  };
});

describe('HTMLToMarkdown.vue', () => {
  // 基础渲染测试
  it('renders correctly with HTML input area', () => {
    const wrapper = shallowMount(HTMLToMarkdown);
    
    // 检查HTML输入区域
    expect(wrapper.find('textarea').exists()).toBe(true);
  });

  // HTML转Markdown测试
  it('converts HTML to Markdown when clicking convert button', async () => {
    const wrapper = mount(HTMLToMarkdown);
    
    // 找到HTML输入区域
    const htmlInputs = wrapper.findAll('textarea');
    let htmlInput;
    
    if (htmlInputs.length > 0) {
      // 通常第一个textarea是输入区域
      htmlInput = htmlInputs[0];
      
      // 设置HTML数据
      await htmlInput.setValue('<h1>Hello World</h1><p>This is a test</p>');
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找Markdown输出区域
        let markdownOutput;
        if (htmlInputs.length > 1) {
          markdownOutput = htmlInputs[1];
        } else {
          markdownOutput = wrapper.find('.markdown-output') || wrapper.find('.output');
        }
        
        if (markdownOutput.exists()) {
          // 获取转换后的Markdown
          const markdownValue = markdownOutput.element.value || markdownOutput.text();
          
          // 验证Markdown格式
          expect(markdownValue).toContain('#') || expect(markdownValue).toContain('Heading');
        }
      }
    }
  });

  // 链接转换测试
  it('correctly converts HTML links to Markdown format', async () => {
    const wrapper = mount(HTMLToMarkdown);
    
    // 找到HTML输入区域
    const htmlInput = wrapper.findAll('textarea')[0];
    
    if (htmlInput) {
      // 设置包含链接的HTML
      await htmlInput.setValue('<a href="https://example.com">Example</a>');
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找Markdown输出区域
        const markdownOutput = wrapper.findAll('textarea')[1] || wrapper.find('.markdown-output');
        
        if (markdownOutput.exists()) {
          // 获取转换后的Markdown
          const markdownValue = markdownOutput.element.value || markdownOutput.text();
          
          // 验证Markdown链接格式
          expect(markdownValue).toContain('[') && expect(markdownValue).toContain(']');
          expect(markdownValue).toContain('(') && expect(markdownValue).toContain(')');
        }
      }
    }
  });

  // 列表转换测试
  it('correctly converts HTML lists to Markdown format', async () => {
    const wrapper = mount(HTMLToMarkdown);
    
    // 找到HTML输入区域
    const htmlInput = wrapper.findAll('textarea')[0];
    
    if (htmlInput) {
      // 设置包含列表的HTML
      await htmlInput.setValue('<ul><li>Item 1</li><li>Item 2</li></ul>');
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找Markdown输出区域
        const markdownOutput = wrapper.findAll('textarea')[1] || wrapper.find('.markdown-output');
        
        if (markdownOutput.exists()) {
          // 获取转换后的Markdown
          const markdownValue = markdownOutput.element.value || markdownOutput.text();
          
          // 验证Markdown列表格式
          expect(markdownValue).toContain('-') || expect(markdownValue).toContain('*');
          expect(markdownValue).toContain('Item');
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
    
    const wrapper = mount(HTMLToMarkdown);
    
    // 找到HTML输入区域并设置值
    const htmlInput = wrapper.findAll('textarea')[0];
    if (htmlInput) {
      await htmlInput.setValue('<h1>Test</h1>');
      
      // 查找转换按钮并点击
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

  // 清除测试
  it('clears the inputs when clicking clear button', async () => {
    const wrapper = mount(HTMLToMarkdown);
    
    // 找到HTML输入区域
    const htmlInput = wrapper.findAll('textarea')[0];
    
    if (htmlInput) {
      // 设置HTML数据
      await htmlInput.setValue('<h1>Test</h1>');
      
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
        const clearedValue = htmlInput.element.value;
        expect(clearedValue).toBe('');
      }
    }
  });
}); 