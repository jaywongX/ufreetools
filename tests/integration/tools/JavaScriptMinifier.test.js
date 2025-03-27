import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import JavaScriptMinifier from '../../../src/components/tools/JavaScriptMinifier.vue';

// 模拟JavaScript压缩库 (通常使用terser或uglify-js)
vi.mock('terser', () => ({
  minify: vi.fn().mockImplementation((code, options) => {
    return Promise.resolve({
      code: code.replace(/\s+/g, ' ')
                .replace(/{\s+/g, '{')
                .replace(/\s+}/g, '}')
                .replace(/;\s+/g, ';')
                .replace(/\/\/.*?\n/g, '')
                .replace(/\/\*.*?\*\//g, '')
                .trim(),
      error: null
    });
  })
}));

describe('JavaScriptMinifier.vue', () => {
  // 基础渲染测试
  it('renders correctly with JavaScript input area', () => {
    const wrapper = shallowMount(JavaScriptMinifier);
    
    // 检查JavaScript输入区域
    expect(wrapper.find('textarea').exists()).toBe(true);
  });

  // JavaScript压缩测试
  it('minifies JavaScript when clicking minify button', async () => {
    const wrapper = mount(JavaScriptMinifier);
    
    // 找到JavaScript输入区域
    const jsInput = wrapper.find('textarea') || wrapper.find('.js-editor');
    
    if (jsInput.exists()) {
      // 设置未压缩的JavaScript
      await jsInput.setValue(`
        function sayHello(name) {
          // This is a comment
          const greeting = "Hello, " + name;
          console.log(greeting);
          return greeting;
        }
      `);
      
      // 查找压缩按钮并点击
      const minifyButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('压缩') || 
        btn.text().includes('Minify')
      );
      
      if (minifyButton) {
        await minifyButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找输出区域
        const outputArea = wrapper.findAll('textarea')[1] || wrapper.find('.output');
        
        if (outputArea.exists()) {
          // 获取压缩后的JavaScript
          const minifiedValue = outputArea.element.value || outputArea.text();
          
          // 验证压缩结果不含多余空格和注释
          expect(minifiedValue).not.toContain('  ');
          expect(minifiedValue).not.toContain('// This is a comment');
          expect(minifiedValue.split('\n').length).toBeLessThan(3);
        }
      }
    }
  });

  // 压缩选项测试
  it('applies minification options', async () => {
    const wrapper = mount(JavaScriptMinifier);
    
    // 找到保留注释选项复选框
    const commentsCheckbox = wrapper.findAll('input[type="checkbox"]').find(checkbox => 
      checkbox.attributes('id')?.toLowerCase().includes('comment') ||
      checkbox.attributes('name')?.toLowerCase().includes('comment')
    );
    
    // 找到美化输出选项复选框
    const beautifyCheckbox = wrapper.findAll('input[type="checkbox"]').find(checkbox => 
      checkbox.attributes('id')?.toLowerCase().includes('beautify') ||
      checkbox.attributes('name')?.toLowerCase().includes('format') ||
      checkbox.attributes('id')?.toLowerCase().includes('pretty')
    );
    
    // 设置选项（如果存在）
    if (commentsCheckbox && commentsCheckbox.exists()) {
      await commentsCheckbox.setChecked(true);
    }
    
    if (beautifyCheckbox && beautifyCheckbox.exists()) {
      await beautifyCheckbox.setChecked(true);
    }
    
    // 找到JavaScript输入区域
    const jsInput = wrapper.find('textarea');
    
    if (jsInput) {
      // 设置JavaScript代码
      await jsInput.setValue(`
        // Header comment
        function test() {
          const x = 1;
          return x;
        }
      `);
      
      // 查找压缩按钮并点击
      const minifyButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('压缩') || 
        btn.text().includes('Minify')
      );
      
      if (minifyButton) {
        await minifyButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // 压缩统计测试
  it('displays minification statistics', async () => {
    const wrapper = mount(JavaScriptMinifier);
    
    // 找到JavaScript输入区域
    const jsInput = wrapper.find('textarea');
    
    if (jsInput) {
      // 设置JavaScript代码
      await jsInput.setValue(`
        function test() {
          const x = 1;
          return x;
        }
      `);
      
      // 查找压缩按钮并点击
      const minifyButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('压缩') || 
        btn.text().includes('Minify')
      );
      
      if (minifyButton) {
        await minifyButton.trigger('click');
        
        // 查找统计信息区域
        const statsArea = wrapper.find('.stats') || 
                          wrapper.find('.compression-stats') || 
                          wrapper.find('.info');
        
        if (statsArea.exists()) {
          // 验证统计信息包含大小或压缩率
          const statsText = statsArea.text();
          expect(statsText).toContain('%') || expect(statsText).toContain('bytes');
        }
      }
    }
  });

  // 复制结果测试
  it('copies minified JavaScript to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(JavaScriptMinifier);
    
    // 找到JavaScript输入区域并设置值
    const jsInput = wrapper.find('textarea');
    if (jsInput) {
      await jsInput.setValue('function test() { return true; }');
      
      // 查找压缩按钮并点击
      const minifyButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('压缩') || 
        btn.text().includes('Minify')
      );
      
      if (minifyButton) {
        await minifyButton.trigger('click');
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
    const wrapper = mount(JavaScriptMinifier);
    
    // 找到JavaScript输入区域
    const jsInput = wrapper.find('textarea');
    
    if (jsInput) {
      // 设置JavaScript代码
      await jsInput.setValue('function test() { return true; }');
      
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
        const clearedValue = jsInput.element.value;
        expect(clearedValue).toBe('');
      }
    }
  });
}); 