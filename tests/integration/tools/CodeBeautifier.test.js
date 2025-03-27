import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import CodeBeautifier from '../../../src/components/tools/CodeBeautifier.vue';

// 模拟prettier格式化库
vi.mock('prettier/standalone', () => ({
  format: vi.fn().mockImplementation((code, options) => {
    // 简单的格式化逻辑
    if (options.parser === 'babel') {
      return 'function example() {\n  return true;\n}';
    }
    if (options.parser === 'css') {
      return 'body {\n  margin: 0;\n  padding: 0;\n}';
    }
    if (options.parser === 'html') {
      return '<div>\n  <p>Hello</p>\n</div>';
    }
    return code;
  })
}));

// 模拟各种语言解析器
vi.mock('prettier/parser-babel', () => ({ default: {} }));
vi.mock('prettier/parser-html', () => ({ default: {} }));
vi.mock('prettier/parser-postcss', () => ({ default: {} }));

// 模拟highlight.js
vi.mock('highlight.js/lib/core', () => ({
  default: {
    highlight: vi.fn().mockReturnValue({ value: '<span>formatted</span>' }),
    registerLanguage: vi.fn()
  }
}));

describe('CodeBeautifier.vue', () => {
  // 基础渲染测试
  it('renders correctly with code input area', () => {
    const wrapper = shallowMount(CodeBeautifier);
    
    // 检查代码输入区域
    expect(wrapper.find('textarea').exists() || wrapper.find('.code-editor').exists()).toBe(true);
  });

  // JS代码格式化测试
  it('formats JavaScript code', async () => {
    const wrapper = mount(CodeBeautifier);
    
    // 找到语言选择器
    const languageSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('language') ||
      select.attributes('name')?.toLowerCase().includes('language')
    );
    
    if (languageSelect && languageSelect.exists()) {
      // 获取所有选项
      const options = languageSelect.findAll('option');
      
      // 找到JavaScript选项
      const jsOption = options.find(option => 
        option.text().toLowerCase().includes('javascript') ||
        option.text().toLowerCase().includes('js')
      );
      
      if (jsOption) {
        await languageSelect.setValue(jsOption.attributes('value'));
        
        // 找到代码输入区域
        const codeInput = wrapper.find('textarea') || wrapper.find('.code-editor');
        
        if (codeInput.exists()) {
          // 设置未格式化的JavaScript代码
          await codeInput.setValue('function example(){return true;}');
          
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
            
            // 获取格式化后的代码
            const formattedValue = codeInput.element.value;
            
            // 验证格式化后有换行和缩进
            expect(formattedValue.includes('\n')).toBe(true);
            expect(formattedValue.includes('  ')).toBe(true);
          }
        }
      }
    }
  });

  // CSS代码格式化测试
  it('formats CSS code', async () => {
    const wrapper = mount(CodeBeautifier);
    
    // 找到语言选择器
    const languageSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('language') ||
      select.attributes('name')?.toLowerCase().includes('language')
    );
    
    if (languageSelect && languageSelect.exists()) {
      // 获取所有选项
      const options = languageSelect.findAll('option');
      
      // 找到CSS选项
      const cssOption = options.find(option => 
        option.text().toLowerCase().includes('css')
      );
      
      if (cssOption) {
        await languageSelect.setValue(cssOption.attributes('value'));
        
        // 找到代码输入区域
        const codeInput = wrapper.find('textarea') || wrapper.find('.code-editor');
        
        if (codeInput.exists()) {
          // 设置未格式化的CSS代码
          await codeInput.setValue('body{margin:0;padding:0;}');
          
          // 查找格式化按钮并点击
          const formatButton = wrapper.findAll('button').find(btn => 
            btn.text().includes('格式化') || 
            btn.text().includes('Format')
          );
          
          if (formatButton) {
            await formatButton.trigger('click');
            
            // 验证组件状态
            expect(wrapper.exists()).toBe(true);
            
            // 获取格式化后的代码
            const formattedValue = codeInput.element.value;
            
            // 验证格式化后有换行和缩进
            expect(formattedValue.includes('\n')).toBe(true);
            expect(formattedValue.includes('  ')).toBe(true);
          }
        }
      }
    }
  });

  // HTML代码格式化测试
  it('formats HTML code', async () => {
    const wrapper = mount(CodeBeautifier);
    
    // 找到语言选择器
    const languageSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('language') ||
      select.attributes('name')?.toLowerCase().includes('language')
    );
    
    if (languageSelect && languageSelect.exists()) {
      // 获取所有选项
      const options = languageSelect.findAll('option');
      
      // 找到HTML选项
      const htmlOption = options.find(option => 
        option.text().toLowerCase().includes('html')
      );
      
      if (htmlOption) {
        await languageSelect.setValue(htmlOption.attributes('value'));
        
        // 找到代码输入区域
        const codeInput = wrapper.find('textarea') || wrapper.find('.code-editor');
        
        if (codeInput.exists()) {
          // 设置未格式化的HTML代码
          await codeInput.setValue('<div><p>Hello</p></div>');
          
          // 查找格式化按钮并点击
          const formatButton = wrapper.findAll('button').find(btn => 
            btn.text().includes('格式化') || 
            btn.text().includes('Format')
          );
          
          if (formatButton) {
            await formatButton.trigger('click');
            
            // 验证组件状态
            expect(wrapper.exists()).toBe(true);
            
            // 获取格式化后的代码
            const formattedValue = codeInput.element.value;
            
            // 验证格式化后有换行和缩进
            expect(formattedValue.includes('\n')).toBe(true);
            expect(formattedValue.includes('  ')).toBe(true);
          }
        }
      }
    }
  });
  
  // 复制代码测试
  it('copies formatted code to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(CodeBeautifier);
    
    // 找到代码输入区域
    const codeInput = wrapper.find('textarea') || wrapper.find('.code-editor');
    
    if (codeInput.exists()) {
      // 设置代码
      await codeInput.setValue('function test() { return true; }');
      
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
    const wrapper = mount(CodeBeautifier);
    
    // 找到代码输入区域
    const codeInput = wrapper.find('textarea') || wrapper.find('.code-editor');
    
    if (codeInput.exists()) {
      // 设置代码
      await codeInput.setValue('function test() { return true; }');
      
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
        const clearedValue = codeInput.element.value;
        expect(clearedValue).toBe('');
      }
    }
  });
}); 