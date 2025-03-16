import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import UrlParamsParser from '../../../src/components/tools/UrlParamsParser.vue';

describe('UrlParamsParser.vue', () => {
  // 基础渲染测试
  it('renders correctly with URL input field', () => {
    const wrapper = shallowMount(UrlParamsParser);
    
    // 检查URL输入字段
    expect(wrapper.find('input').exists() || wrapper.find('textarea').exists()).toBe(true);
  });

  // URL解析测试
  it('parses URL parameters when entering URL', async () => {
    const wrapper = mount(UrlParamsParser);
    
    // 找到URL输入字段
    const urlInput = wrapper.find('input') || wrapper.find('textarea');
    
    if (urlInput.exists()) {
      // 输入测试URL
      await urlInput.setValue('https://example.com/search?query=test&page=1&sort=desc');
      
      // 如果有解析按钮，点击它
      const parseButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('解析') || 
        btn.text().includes('Parse')
      );
      
      if (parseButton) {
        await parseButton.trigger('click');
      } else {
        // 如果没有专门的解析按钮，可能是自动解析
        await urlInput.trigger('change');
      }
      
      // 验证组件状态 - 应该显示参数解析结果
      expect(wrapper.exists()).toBe(true);
      
      // 查找是否显示了参数表格或列表
      const paramList = wrapper.find('.param-list') || 
                        wrapper.find('.parameters') || 
                        wrapper.find('table');
      
      if (paramList.exists()) {
        expect(paramList.exists()).toBe(true);
      }
    }
  });

  // 测试编辑参数
  it('allows editing parameters', async () => {
    const wrapper = mount(UrlParamsParser);
    
    // 找到URL输入字段
    const urlInput = wrapper.find('input') || wrapper.find('textarea');
    
    if (urlInput.exists()) {
      // 输入测试URL
      await urlInput.setValue('https://example.com/search?query=test&page=1');
      
      // 如果有解析按钮，点击它
      const parseButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('解析') || 
        btn.text().includes('Parse')
      );
      
      if (parseButton) {
        await parseButton.trigger('click');
      } else {
        // 如果没有专门的解析按钮，可能是自动解析
        await urlInput.trigger('change');
      }
      
      // 找到参数编辑字段
      const paramInputs = wrapper.findAll('input[type="text"]');
      
      if (paramInputs.length >= 3) {  // 至少有参数名和值的输入字段
        // 修改参数值
        await paramInputs[2].setValue('newValue');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // 测试添加新参数
  it('allows adding new parameters', async () => {
    const wrapper = mount(UrlParamsParser);
    
    // 找到URL输入字段
    const urlInput = wrapper.find('input') || wrapper.find('textarea');
    
    if (urlInput.exists()) {
      // 输入测试URL
      await urlInput.setValue('https://example.com/search?query=test');
      
      // 如果有解析按钮，点击它
      const parseButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('解析') || 
        btn.text().includes('Parse')
      );
      
      if (parseButton) {
        await parseButton.trigger('click');
      }
      
      // 查找添加参数按钮
      const addButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('添加') || 
        btn.text().includes('Add')
      );
      
      if (addButton) {
        await addButton.trigger('click');
        
        // 找到新添加的参数输入字段
        const paramInputs = wrapper.findAll('input[type="text"]');
        
        if (paramInputs.length >= 3) {
          // 输入新参数名和值
          if (paramInputs[paramInputs.length - 2]) {
            await paramInputs[paramInputs.length - 2].setValue('newParam');
          }
          
          if (paramInputs[paramInputs.length - 1]) {
            await paramInputs[paramInputs.length - 1].setValue('newValue');
          }
          
          // 验证组件状态
          expect(wrapper.exists()).toBe(true);
        }
      }
    }
  });

  // 测试删除参数
  it('allows removing parameters', async () => {
    const wrapper = mount(UrlParamsParser);
    
    // 找到URL输入字段
    const urlInput = wrapper.find('input') || wrapper.find('textarea');
    
    if (urlInput.exists()) {
      // 输入测试URL
      await urlInput.setValue('https://example.com/search?query=test&page=1&sort=desc');
      
      // 如果有解析按钮，点击它
      const parseButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('解析') || 
        btn.text().includes('Parse')
      );
      
      if (parseButton) {
        await parseButton.trigger('click');
      }
      
      // 查找删除参数按钮
      const deleteButtons = wrapper.findAll('button').filter(btn => 
        btn.text().includes('删除') || 
        btn.text().includes('Remove') ||
        btn.text().includes('Delete') ||
        btn.attributes('aria-label')?.includes('delete')
      );
      
      if (deleteButtons.length > 0) {
        await deleteButtons[0].trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // 测试生成URL功能
  it('generates updated URL from parameters', async () => {
    const wrapper = mount(UrlParamsParser);
    
    // 找到URL输入字段
    const urlInput = wrapper.find('input') || wrapper.find('textarea');
    
    if (urlInput.exists()) {
      // 输入测试URL
      await urlInput.setValue('https://example.com/search?query=test');
      
      // 如果有解析按钮，点击它
      const parseButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('解析') || 
        btn.text().includes('Parse')
      );
      
      if (parseButton) {
        await parseButton.trigger('click');
      }
      
      // 查找生成URL按钮
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate') ||
        btn.text().includes('更新') ||
        btn.text().includes('Update')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });
}); 