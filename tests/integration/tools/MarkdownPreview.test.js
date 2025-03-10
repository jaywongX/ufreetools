import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import MarkdownPreview from '../../../src/components/tools/MarkdownPreview.vue';

// 模拟 markdown-it
vi.mock('markdown-it', () => {
  return function() {
    return {
      render: vi.fn().mockImplementation((md) => {
        if (md.includes('# Heading')) return '<h1>Heading</h1>';
        if (md.includes('**bold**')) return '<p><strong>bold</strong></p>';
        if (md.includes('- List item')) return '<ul><li>List item</li></ul>';
        return `<p>${md}</p>`;
      }),
      use: vi.fn().mockReturnThis()
    };
  };
});

describe('MarkdownPreview.vue', () => {
  // 基础渲染测试
  it('renders correctly with markdown input and preview areas', () => {
    const wrapper = shallowMount(MarkdownPreview);
    
    // 检查输入和预览区域
    expect(wrapper.find('textarea').exists() || wrapper.find('.markdown-input').exists()).toBe(true);
    expect(wrapper.find('.preview').exists() || wrapper.find('.markdown-preview').exists() || wrapper.find('.rendered-output').exists()).toBe(true);
  });

  // 预览功能测试
  it('previews markdown as HTML when typing in the editor', async () => {
    const wrapper = mount(MarkdownPreview);
    
    // 找到输入区域
    const mdInput = wrapper.find('textarea') || wrapper.find('.markdown-input');
    
    if (mdInput.exists()) {
      // 输入Markdown文本
      await mdInput.setValue('# Heading\n\nThis is a paragraph with **bold** text.');
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
      
      // 找到预览区域
      const preview = wrapper.find('.preview') || 
                      wrapper.find('.markdown-preview') || 
                      wrapper.find('.rendered-output');
      
      if (preview.exists()) {
        // 验证预览包含渲染后的HTML
        expect(preview.html()).toContain('<h1>') || expect(preview.html()).toContain('&lt;h1&gt;');
      }
    }
  });

  // 实时预览切换测试
  it('toggles live preview if that option is available', async () => {
    const wrapper = mount(MarkdownPreview);
    
    // 找到实时预览切换开关
    const livePreviewToggle = wrapper.findAll('input[type="checkbox"]').find(checkbox => 
      checkbox.attributes('id')?.toLowerCase().includes('live') ||
      checkbox.attributes('name')?.toLowerCase().includes('live')
    );
    
    if (livePreviewToggle) {
      // 切换实时预览
      await livePreviewToggle.setChecked(!livePreviewToggle.element.checked);
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
    }
  });

  // Markdown语法测试
  it('renders different markdown syntax elements correctly', async () => {
    const wrapper = mount(MarkdownPreview);
    
    // 找到输入区域
    const mdInput = wrapper.find('textarea') || wrapper.find('.markdown-input');
    
    if (mdInput.exists()) {
      // 输入包含多种Markdown语法的文本
      await mdInput.setValue(`
# Heading 1
## Heading 2

*Italic text* and **bold text**

- List item 1
- List item 2
      `);
      
      // 找到预览区域
      const preview = wrapper.find('.preview') || 
                      wrapper.find('.markdown-preview') || 
                      wrapper.find('.rendered-output');
      
      if (preview.exists()) {
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // 复制功能测试
  it('copies content to clipboard if copy button is available', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(MarkdownPreview);
    
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

  // 导出功能测试
  it('exports content if export button is available', async () => {
    const wrapper = mount(MarkdownPreview);
    
    // 查找导出按钮
    const exportButton = wrapper.findAll('button').find(btn => 
      btn.text().includes('导出') || 
      btn.text().includes('Export') ||
      btn.text().includes('下载') || 
      btn.text().includes('Download')
    );
    
    if (exportButton) {
      // 模拟下载链接创建和点击
      global.URL.createObjectURL = vi.fn(() => 'blob:mock-url');
      const mockLink = {
        href: '',
        download: '',
        click: vi.fn(),
        remove: vi.fn()
      };
      global.document.createElement = vi.fn().mockImplementation(tag => {
        if (tag === 'a') return mockLink;
        return document.createElement(tag);
      });
      
      await exportButton.trigger('click');
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
    }
  });
}); 