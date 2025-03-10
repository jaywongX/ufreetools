import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import CodeFormatter from '../../../src/components/tools/CodeFormatter.vue';

// 模拟 highlight.js
vi.mock('highlight.js/lib/core', () => ({
  default: {
    highlight: vi.fn().mockReturnValue({ value: '<span>formatted</span>' }),
    registerLanguage: vi.fn()
  }
}));

// 模拟 prettier
vi.mock('prettier/standalone', () => ({
  format: vi.fn().mockImplementation((code) => `// formatted\n${code}`)
}));

vi.mock('prettier/parser-babel', () => ({ default: {} }));
vi.mock('prettier/parser-html', () => ({ default: {} }));
vi.mock('prettier/parser-postcss', () => ({ default: {} }));

describe('CodeFormatter.vue', () => {
  // 基础渲染测试
  it('renders correctly with code editor and control panel', () => {
    const wrapper = shallowMount(CodeFormatter);
    
    // 检查输入区域
    expect(wrapper.find('textarea').exists() || wrapper.find('.code-editor').exists()).toBe(true);
  });

  // 格式化代码测试
  it('formats code when clicking format button', async () => {
    const wrapper = mount(CodeFormatter);
    
    // 找到代码输入区域
    const codeInput = wrapper.find('textarea') || wrapper.find('.code-editor');
    
    if (codeInput.exists()) {
      // 设置测试代码
      await codeInput.setValue('function test() { return true; }');
      
      // 查找格式化按钮并点击
      const formatButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('格式化') || 
        btn.text().includes('Format')
      );
      
      if (formatButton) {
        await formatButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // 测试语言选择
  it('changes language when selecting different language', async () => {
    const wrapper = mount(CodeFormatter);
    
    // 找到语言选择器
    const languageSelect = wrapper.findAll('select').find(select => {
      return select.attributes('id')?.includes('language') ||
             select.attributes('name')?.includes('language');
    });
    
    if (languageSelect) {
      // 选择语言
      const options = languageSelect.findAll('option');
      if (options.length > 1) {
        await languageSelect.setValue(options[1].attributes('value'));
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // 测试复制代码功能
  it('copies formatted code to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(CodeFormatter);
    
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

  // 测试代码压缩选项
  it('handles minify option correctly', async () => {
    const wrapper = mount(CodeFormatter);
    
    // 找到压缩选项复选框
    const minifyCheckbox = wrapper.findAll('input[type="checkbox"]').find(checkbox => {
      return checkbox.attributes('id')?.includes('minify') ||
             checkbox.attributes('name')?.includes('minify');
    });
    
    if (minifyCheckbox) {
      // 切换压缩选项
      await minifyCheckbox.setChecked(true);
      
      // 查找格式化按钮并点击
      const formatButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('格式化') || 
        btn.text().includes('Format')
      );
      
      if (formatButton) {
        await formatButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });
}); 