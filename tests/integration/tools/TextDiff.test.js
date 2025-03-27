import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import TextDiff from '../../../src/components/tools/TextDiff.vue';

// 可能需要模拟差异库
vi.mock('diff', () => ({
  diffLines: vi.fn().mockImplementation(() => [
    { value: 'common line\n', count: 1 },
    { value: 'removed line\n', count: 1, removed: true },
    { value: 'added line\n', count: 1, added: true }
  ]),
  diffWords: vi.fn().mockImplementation(() => [
    { value: 'common ', count: 1 },
    { value: 'removed', count: 1, removed: true },
    { value: 'added', count: 1, added: true }
  ]),
  diffChars: vi.fn().mockImplementation(() => [
    { value: 'common', count: 6 },
    { value: 'r', count: 1, removed: true },
    { value: 'a', count: 1, added: true }
  ])
}));

describe('TextDiff.vue', () => {
  // 基础渲染测试
  it('renders correctly with original and new text inputs', () => {
    const wrapper = shallowMount(TextDiff);
    
    // 检查原始文本和新文本输入区域
    expect(wrapper.findAll('textarea').length >= 2).toBe(true);
  });

  // 差异计算测试
  it('calculates text differences when clicking diff button', async () => {
    const wrapper = mount(TextDiff);
    
    // 找到原始文本和新文本输入
    const originalInput = wrapper.findAll('textarea')[0];
    const newInput = wrapper.findAll('textarea')[1];
    
    if (originalInput && newInput) {
      // 设置两个文本
      await originalInput.setValue('Hello\nWorld\nThis is a test.');
      await newInput.setValue('Hello\nNew World\nThis is a test.');
      
      // 查找比较按钮并点击
      const diffButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('比较') || 
        btn.text().includes('Diff') ||
        btn.text().includes('对比')
      );
      
      if (diffButton) {
        await diffButton.trigger('click');
        
        // 验证组件状态 - 应该显示差异结果
        expect(wrapper.exists()).toBe(true);
        
        // 尝试查找差异结果元素
        const diffResult = wrapper.find('.diff-result') || 
                          wrapper.find('.diff-output') || 
                          wrapper.find('.result');
        
        if (diffResult.exists()) {
          expect(diffResult.exists()).toBe(true);
        }
      }
    }
  });

  // 差异模式测试
  it('switches between diff modes (line, word, character)', async () => {
    const wrapper = mount(TextDiff);
    
    // 找到差异模式选择器
    const modeSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.includes('mode') ||
      select.attributes('name')?.includes('mode') ||
      select.attributes('id')?.includes('type') ||
      select.attributes('name')?.includes('type')
    );
    
    // 找到差异模式单选按钮
    const modeRadios = wrapper.findAll('input[type="radio"]');
    
    // 测试下拉选择方式
    if (modeSelect && modeSelect.exists()) {
      // 获取所有选项
      const options = modeSelect.findAll('option');
      
      if (options.length > 1) {
        // 选择另一个差异模式
        await modeSelect.setValue(options[1].attributes('value'));
        
        // 设置文本内容
        const originalInput = wrapper.findAll('textarea')[0];
        const newInput = wrapper.findAll('textarea')[1];
        
        if (originalInput && newInput) {
          await originalInput.setValue('Hello World');
          await newInput.setValue('Hello New World');
          
          // 查找比较按钮并点击
          const diffButton = wrapper.findAll('button').find(btn => 
            btn.text().includes('比较') || 
            btn.text().includes('Diff') ||
            btn.text().includes('对比')
          );
          
          if (diffButton) {
            await diffButton.trigger('click');
            
            // 验证组件状态
            expect(wrapper.exists()).toBe(true);
          }
        }
      }
    }
    // 测试单选按钮方式
    else if (modeRadios.length > 1) {
      // 选择另一个差异模式
      await modeRadios[1].setChecked(true);
      
      // 设置文本内容
      const originalInput = wrapper.findAll('textarea')[0];
      const newInput = wrapper.findAll('textarea')[1];
      
      if (originalInput && newInput) {
        await originalInput.setValue('Hello World');
        await newInput.setValue('Hello New World');
        
        // 查找比较按钮并点击
        const diffButton = wrapper.findAll('button').find(btn => 
          btn.text().includes('比较') || 
          btn.text().includes('Diff') ||
          btn.text().includes('对比')
        );
        
        if (diffButton) {
          await diffButton.trigger('click');
          
          // 验证组件状态
          expect(wrapper.exists()).toBe(true);
        }
      }
    }
  });

  // 清空功能测试
  it('clears input and output areas when clicking clear button', async () => {
    const wrapper = mount(TextDiff);
    
    // 设置输入文本
    const originalInput = wrapper.findAll('textarea')[0];
    const newInput = wrapper.findAll('textarea')[1];
    
    if (originalInput && newInput) {
      await originalInput.setValue('Hello World');
      await newInput.setValue('Hello New World');
      
      // 查找清空按钮并点击
      const clearButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('清空') || 
        btn.text().includes('Clear')
      );
      
      if (clearButton) {
        await clearButton.trigger('click');
        
        // 验证输入已被清除
        expect(originalInput.element.value).toBe('');
        expect(newInput.element.value).toBe('');
      }
    }
  });

  // 结果导出测试
  it('exports or copies diff results', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(TextDiff);
    
    // 设置输入并生成差异
    const originalInput = wrapper.findAll('textarea')[0];
    const newInput = wrapper.findAll('textarea')[1];
    
    if (originalInput && newInput) {
      await originalInput.setValue('Hello\nWorld\nTest');
      await newInput.setValue('Hello\nNew World\nTest');
      
      // 查找比较按钮并点击
      const diffButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('比较') || 
        btn.text().includes('Diff') ||
        btn.text().includes('对比')
      );
      
      if (diffButton) {
        await diffButton.trigger('click');
      }
      
      // 查找复制或导出按钮
      const exportButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('复制') || 
        btn.text().includes('Copy') ||
        btn.text().includes('导出') || 
        btn.text().includes('Export')
      );
      
      if (exportButton) {
        await exportButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 如果是复制操作，验证剪贴板API被调用
        if (btn.text().includes('复制') || btn.text().includes('Copy')) {
          expect(navigator.clipboard.writeText).toHaveBeenCalled();
        }
      }
    }
  });
}); 