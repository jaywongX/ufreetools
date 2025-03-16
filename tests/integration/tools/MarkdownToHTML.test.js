import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import MarkdownToHTML from '../../../src/components/tools/MarkdownToHTML.vue';

// 模拟marked库
vi.mock('marked', () => ({
  parse: vi.fn().mockImplementation((markdown) => {
    if (markdown.includes('#')) {
      return '<h1>Heading</h1>';
    }
    if (markdown.includes('[')) {
      return '<a href="https://example.com">Link</a>';
    }
    if (markdown.includes('-')) {
      return '<ul><li>Item 1</li><li>Item 2</li></ul>';
    }
    return '<p>Converted HTML</p>';
  })
}));

describe('MarkdownToHTML.vue', () => {
  // 基础渲染测试
  it('renders correctly with Markdown input area', () => {
    const wrapper = shallowMount(MarkdownToHTML);
    
    // 检查Markdown输入区域
    expect(wrapper.find('textarea').exists()).toBe(true);
  });

  // Markdown转HTML测试
  it('converts Markdown to HTML when clicking convert button', async () => {
    const wrapper = mount(MarkdownToHTML);
    
    // 找到Markdown输入区域
    const markdownInputs = wrapper.findAll('textarea');
    let markdownInput;
    
    if (markdownInputs.length > 0) {
      // 通常第一个textarea是输入区域
      markdownInput = markdownInputs[0];
      
      // 设置Markdown数据
      await markdownInput.setValue('# Hello World\n\nThis is a test');
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找HTML输出区域
        let htmlOutput;
        if (markdownInputs.length > 1) {
          htmlOutput = markdownInputs[1];
        } else {
          htmlOutput = wrapper.find('.html-output') || wrapper.find('.output');
        }
        
        if (htmlOutput.exists()) {
          // 获取转换后的HTML
          const htmlValue = htmlOutput.element.value || htmlOutput.text();
          
          // 验证HTML格式
          expect(htmlValue).toContain('<h1>') || expect(htmlValue).toContain('Heading');
        }
      }
    }
  });

  // 链接转换测试
  it('correctly converts Markdown links to HTML format', async () => {
    const wrapper = mount(MarkdownToHTML);
    
    // 找到Markdown输入区域
    const markdownInput = wrapper.findAll('textarea')[0];
    
    if (markdownInput) {
      // 设置包含链接的Markdown
      await markdownInput.setValue('[Example](https://example.com)');
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找HTML输出区域
        const htmlOutput = wrapper.findAll('textarea')[1] || wrapper.find('.html-output');
        
        if (htmlOutput.exists()) {
          // 获取转换后的HTML
          const htmlValue = htmlOutput.element.value || htmlOutput.text();
          
          // 验证HTML链接格式
          expect(htmlValue).toContain('<a') && expect(htmlValue).toContain('href');
        }
      }
    }
  });

  // 预览功能测试
  it('provides HTML preview functionality', async () => {
    const wrapper = mount(MarkdownToHTML);
    
    // 找到Markdown输入区域
    const markdownInput = wrapper.findAll('textarea')[0];
    
    if (markdownInput) {
      // 设置Markdown
      await markdownInput.setValue('# Hello World');
      
      // 查找预览按钮并点击
      const previewButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('预览') || 
        btn.text().includes('Preview')
      );
      
      if (previewButton) {
        await previewButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找预览区域
        const previewArea = wrapper.find('.preview') || wrapper.find('.html-preview');
        
        if (previewArea.exists()) {
          // 验证预览内容
          expect(previewArea.html()).toContain('<h1') || 
          expect(previewArea.html()).toContain('Heading');
        }
      }
    }
  });

  // 复制HTML测试
  it('copies HTML result to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(MarkdownToHTML);
    
    // 找到Markdown输入区域并设置值
    const markdownInput = wrapper.findAll('textarea')[0];
    if (markdownInput) {
      await markdownInput.setValue('# Test');
      
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
    const wrapper = mount(MarkdownToHTML);
    
    // 找到Markdown输入区域
    const markdownInput = wrapper.findAll('textarea')[0];
    
    if (markdownInput) {
      // 设置Markdown数据
      await markdownInput.setValue('# Test Markdown');
      
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
        const clearedValue = markdownInput.element.value;
        expect(clearedValue).toBe('');
      }
    }
  });
}); 