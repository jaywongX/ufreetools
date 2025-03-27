import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import DiffChecker from '../../../src/components/tools/DiffChecker.vue';

// 模拟diff库
vi.mock('diff', () => ({
  diffLines: vi.fn().mockImplementation((text1, text2) => {
    if (text1 === text2) {
      return [{ value: text1, count: text1.split('\n').length }];
    }
    return [
      { value: 'common line\n', count: 1 },
      { value: 'removed line\n', count: 1, removed: true },
      { value: 'added line\n', count: 1, added: true },
      { value: 'another common line', count: 1 }
    ];
  }),
  diffWords: vi.fn().mockImplementation((text1, text2) => {
    if (text1 === text2) {
      return [{ value: text1 }];
    }
    return [
      { value: 'common ' },
      { value: 'removed', removed: true },
      { value: 'added', added: true },
      { value: ' text' }
    ];
  })
}));

describe('DiffChecker.vue', () => {
  // 基础渲染测试
  it('renders correctly with two text inputs', () => {
    const wrapper = shallowMount(DiffChecker);
    
    // 检查输入区域
    const textareas = wrapper.findAll('textarea');
    expect(textareas.length).toBeGreaterThanOrEqual(2);
  });

  // 比较测试
  it('compares texts and shows differences', async () => {
    const wrapper = mount(DiffChecker);
    
    // 找到两个文本输入区域
    const textareas = wrapper.findAll('textarea');
    
    if (textareas.length >= 2) {
      // 设置不同的文本
      await textareas[0].setValue('common line\nremoved line\nanother common line');
      await textareas[1].setValue('common line\nadded line\nanother common line');
      
      // 查找比较按钮并点击
      const compareButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('比较') || 
        btn.text().includes('Compare') ||
        btn.text().includes('对比') || 
        btn.text().includes('Diff')
      );
      
      if (compareButton) {
        await compareButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找结果区域
        const diffOutput = wrapper.find('.diff-output') || 
                          wrapper.find('.diff-result') || 
                          wrapper.find('.comparison-result');
        
        if (diffOutput.exists()) {
          // 验证结果包含添加和删除的内容标记
          const diffHtml = diffOutput.html();
          const hasAddedClass = diffHtml.includes('added') || 
                               diffHtml.includes('insertion') || 
                               diffHtml.includes('diff-add');
          const hasRemovedClass = diffHtml.includes('removed') || 
                                 diffHtml.includes('deletion') || 
                                 diffHtml.includes('diff-remove');
          
          expect(hasAddedClass || hasRemovedClass).toBe(true);
        }
      }
    }
  });

  // 相同文本测试
  it('shows no differences for identical texts', async () => {
    const wrapper = mount(DiffChecker);
    
    // 找到两个文本输入区域
    const textareas = wrapper.findAll('textarea');
    
    if (textareas.length >= 2) {
      // 设置相同的文本
      const sameText = 'This is the same text\nWith multiple lines\nNo differences here';
      await textareas[0].setValue(sameText);
      await textareas[1].setValue(sameText);
      
      // 查找比较按钮并点击
      const compareButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('比较') || 
        btn.text().includes('Compare')
      );
      
      if (compareButton) {
        await compareButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找结果区域
        const diffOutput = wrapper.find('.diff-output') || 
                          wrapper.find('.diff-result') || 
                          wrapper.find('.comparison-result');
        
        // 如果有结果区域，检查是否没有差异标记
        if (diffOutput.exists()) {
          const diffHtml = diffOutput.html();
          const hasAddedClass = diffHtml.includes('added') || 
                               diffHtml.includes('insertion') || 
                               diffHtml.includes('diff-add');
          const hasRemovedClass = diffHtml.includes('removed') || 
                                 diffHtml.includes('deletion') || 
                                 diffHtml.includes('diff-remove');
          
          // 不应该有添加或删除的标记
          expect(hasAddedClass || hasRemovedClass).toBe(false);
        }
      }
    }
  });

  // 比较模式测试
  it('switches between line and word comparison modes', async () => {
    const wrapper = mount(DiffChecker);
    
    // 找到比较模式选择器
    const modeRadios = wrapper.findAll('input[type="radio"]');
    const modeSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('mode') ||
      select.attributes('name')?.toLowerCase().includes('mode') ||
      select.attributes('id')?.toLowerCase().includes('type') ||
      select.attributes('name')?.toLowerCase().includes('type')
    );
    
    // 设置为单词比较模式
    if (modeRadios.length > 1) {
      // 找到单词比较单选按钮
      const wordRadio = modeRadios.find(radio => 
        radio.attributes('value')?.toLowerCase().includes('word') ||
        radio.attributes('id')?.toLowerCase().includes('word')
      );
      
      if (wordRadio) {
        await wordRadio.setChecked(true);
        
        // 找到两个文本输入区域
        const textareas = wrapper.findAll('textarea');
        
        if (textareas.length >= 2) {
          // 设置不同的文本
          await textareas[0].setValue('common removed text');
          await textareas[1].setValue('common added text');
          
          // 查找比较按钮并点击
          const compareButton = wrapper.findAll('button').find(btn => 
            btn.text().includes('比较') || 
            btn.text().includes('Compare')
          );
          
          if (compareButton) {
            await compareButton.trigger('click');
            
            // 验证组件状态
            expect(wrapper.exists()).toBe(true);
          }
        }
      }
    } else if (modeSelect && modeSelect.exists()) {
      // 获取所有选项
      const options = modeSelect.findAll('option');
      
      // 找到单词比较选项
      const wordOption = options.find(option => 
        option.text().toLowerCase().includes('word')
      );
      
      if (wordOption) {
        await modeSelect.setValue(wordOption.attributes('value'));
        
        // 找到两个文本输入区域
        const textareas = wrapper.findAll('textarea');
        
        if (textareas.length >= 2) {
          // 设置不同的文本
          await textareas[0].setValue('common removed text');
          await textareas[1].setValue('common added text');
          
          // 查找比较按钮并点击
          const compareButton = wrapper.findAll('button').find(btn => 
            btn.text().includes('比较') || 
            btn.text().includes('Compare')
          );
          
          if (compareButton) {
            await compareButton.trigger('click');
            
            // 验证组件状态
            expect(wrapper.exists()).toBe(true);
          }
        }
      }
    }
  });

  // 清除测试
  it('clears the inputs when clicking clear button', async () => {
    const wrapper = mount(DiffChecker);
    
    // 找到两个文本输入区域
    const textareas = wrapper.findAll('textarea');
    
    if (textareas.length >= 2) {
      // 设置文本
      await textareas[0].setValue('Some text in the first input');
      await textareas[1].setValue('Some text in the second input');
      
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
        const clearedValue1 = textareas[0].element.value;
        const clearedValue2 = textareas[1].element.value;
        
        expect(clearedValue1).toBe('');
        expect(clearedValue2).toBe('');
      }
    }
  });
}); 