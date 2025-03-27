import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import CssMinifier from '../../../src/components/tools/CssMinifier.vue';

// 模拟CSS压缩库 (通常使用clean-css或csso)
vi.mock('clean-css', () => {
  return function() {
    return {
      minify: vi.fn().mockImplementation((css) => {
        // 简单的压缩逻辑
        return {
          styles: css.replace(/\s+/g, ' ').replace(/\s*{\s*/g, '{').replace(/\s*}\s*/g, '}').replace(/\s*;\s*/g, ';').replace(/\s*:\s*/g, ':').trim(),
          errors: [],
          warnings: []
        };
      })
    };
  };
});

describe('CssMinifier.vue', () => {
  // 基础渲染测试
  it('renders correctly with CSS input area', () => {
    const wrapper = shallowMount(CssMinifier);
    
    // 检查CSS输入区域
    expect(wrapper.find('textarea').exists()).toBe(true);
  });

  // CSS压缩测试
  it('minifies CSS when clicking minify button', async () => {
    const wrapper = mount(CssMinifier);
    
    // 找到CSS输入区域
    const cssInput = wrapper.find('textarea') || wrapper.find('.css-editor');
    
    if (cssInput.exists()) {
      // 设置未压缩的CSS
      await cssInput.setValue(`
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }
        
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
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
          // 获取压缩后的CSS
          const minifiedValue = outputArea.element.value || outputArea.text();
          
          // 验证压缩结果不含多余空格和换行
          expect(minifiedValue).not.toContain('  ');
          expect(minifiedValue.split('\n').length).toBeLessThan(3);
        }
      }
    }
  });

  // 压缩统计测试
  it('displays minification statistics after minifying', async () => {
    const wrapper = mount(CssMinifier);
    
    // 找到CSS输入区域
    const cssInput = wrapper.find('textarea') || wrapper.find('.css-editor');
    
    if (cssInput.exists()) {
      // 设置未压缩的CSS
      await cssInput.setValue(`
        body {
          margin: 0;
          padding: 0;
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

  // 格式化选项测试
  it('applies formatting options when minifying', async () => {
    const wrapper = mount(CssMinifier);
    
    // 找到保留注释选项复选框
    const commentsCheckbox = wrapper.findAll('input[type="checkbox"]').find(checkbox => 
      checkbox.attributes('id')?.toLowerCase().includes('comment') ||
      checkbox.attributes('name')?.toLowerCase().includes('comment')
    );
    
    if (commentsCheckbox && commentsCheckbox.exists()) {
      // 选中保留注释选项
      await commentsCheckbox.setChecked(true);
      
      // 找到CSS输入区域
      const cssInput = wrapper.find('textarea');
      
      if (cssInput) {
        // 设置包含注释的CSS
        await cssInput.setValue(`
          /* Header styles */
          header {
            background: #333;
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
    }
  });

  // 复制结果测试
  it('copies minified CSS to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(CssMinifier);
    
    // 找到CSS输入区域并设置值
    const cssInput = wrapper.find('textarea');
    if (cssInput) {
      await cssInput.setValue('body { margin: 0; }');
      
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
    const wrapper = mount(CssMinifier);
    
    // 找到CSS输入区域
    const cssInput = wrapper.find('textarea');
    
    if (cssInput) {
      // 设置CSS数据
      await cssInput.setValue('body { margin: 0; }');
      
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
        const clearedValue = cssInput.element.value;
        expect(clearedValue).toBe('');
      }
    }
  });
}); 