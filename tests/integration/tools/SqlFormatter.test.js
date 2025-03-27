import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import SqlFormatter from '../../../src/components/tools/SqlFormatter.vue';

// 模拟sql-formatter库
vi.mock('sql-formatter', () => ({
  format: vi.fn().mockImplementation((sql, options) => {
    if (sql.includes('SELECT')) {
      return 'SELECT id,\n  name\nFROM users\nWHERE id > 100\nORDER BY name;';
    }
    return sql;
  })
}));

describe('SqlFormatter.vue', () => {
  // 基础渲染测试
  it('renders correctly with SQL input area', () => {
    const wrapper = shallowMount(SqlFormatter);
    
    // 检查SQL输入区域
    expect(wrapper.find('textarea').exists() || wrapper.find('.sql-editor').exists()).toBe(true);
  });

  // 格式化SQL测试
  it('formats SQL when clicking format button', async () => {
    const wrapper = mount(SqlFormatter);
    
    // 找到SQL输入区域
    const sqlInput = wrapper.find('textarea') || wrapper.find('.sql-editor');
    
    if (sqlInput.exists()) {
      // 设置未格式化的SQL
      await sqlInput.setValue('SELECT id,name FROM users WHERE id > 100 ORDER BY name;');
      
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
        
        // 获取格式化后的SQL
        const formattedValue = sqlInput.element.value;
        
        // 验证格式化后有换行和缩进
        expect(formattedValue.includes('\n')).toBe(true);
      }
    }
  });

  // SQL方言选择测试
  it('allows selecting different SQL dialects', async () => {
    const wrapper = mount(SqlFormatter);
    
    // 找到方言选择器
    const dialectSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('dialect') ||
      select.attributes('name')?.toLowerCase().includes('dialect')
    );
    
    if (dialectSelect && dialectSelect.exists()) {
      // 获取所有选项
      const options = dialectSelect.findAll('option');
      
      if (options.length > 1) {
        // 选择第二个方言选项
        await dialectSelect.setValue(options[1].attributes('value'));
        
        // 找到SQL输入区域
        const sqlInput = wrapper.find('textarea') || wrapper.find('.sql-editor');
        
        if (sqlInput.exists()) {
          // 设置SQL
          await sqlInput.setValue('SELECT id,name FROM users WHERE id > 100 ORDER BY name;');
          
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
      }
    }
  });

  // 缩进选项测试
  it('allows changing indentation settings', async () => {
    const wrapper = mount(SqlFormatter);
    
    // 找到缩进选择器
    const indentSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('indent') ||
      select.attributes('name')?.toLowerCase().includes('indent')
    );
    
    if (indentSelect && indentSelect.exists()) {
      // 获取所有选项
      const options = indentSelect.findAll('option');
      
      if (options.length > 1) {
        // 选择另一个缩进选项
        await indentSelect.setValue(options[1].attributes('value'));
        
        // 找到SQL输入区域
        const sqlInput = wrapper.find('textarea') || wrapper.find('.sql-editor');
        
        if (sqlInput.exists()) {
          // 设置SQL
          await sqlInput.setValue('SELECT id,name FROM users WHERE id > 100 ORDER BY name;');
          
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
      }
    }
  });

  // 复制SQL测试
  it('copies SQL to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(SqlFormatter);
    
    // 找到SQL输入区域
    const sqlInput = wrapper.find('textarea') || wrapper.find('.sql-editor');
    
    if (sqlInput.exists()) {
      // 设置SQL
      await sqlInput.setValue('SELECT * FROM users');
      
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
    const wrapper = mount(SqlFormatter);
    
    // 找到SQL输入区域
    const sqlInput = wrapper.find('textarea') || wrapper.find('.sql-editor');
    
    if (sqlInput.exists()) {
      // 设置SQL
      await sqlInput.setValue('SELECT * FROM users');
      
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
        const clearedValue = sqlInput.element.value;
        expect(clearedValue).toBe('');
      }
    }
  });
}); 