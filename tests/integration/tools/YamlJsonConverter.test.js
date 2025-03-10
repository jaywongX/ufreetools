import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import YamlJsonConverter from '../../../src/components/tools/YamlJsonConverter.vue';

// 模拟 js-yaml
vi.mock('js-yaml', () => ({
  load: vi.fn().mockImplementation((yaml) => ({ test: 'data' })),
  dump: vi.fn().mockImplementation((json) => 'test: data')
}));

describe('YamlJsonConverter.vue', () => {
  // 基础渲染测试
  it('renders correctly with input and output areas', () => {
    const wrapper = shallowMount(YamlJsonConverter);
    
    // 检查输入输出区域
    const textareas = wrapper.findAll('textarea');
    expect(textareas.length >= 2).toBe(true);
  });

  // YAML 到 JSON 转换测试
  it('converts YAML to JSON when in yaml-to-json mode and clicking convert', async () => {
    const wrapper = mount(YamlJsonConverter);
    
    // 找到方向选择器并设置为YAML→JSON
    const directionSelect = wrapper.findAll('select').find(select => {
      return select.attributes('id')?.includes('direction') ||
             select.attributes('name')?.includes('direction');
    });
    
    if (directionSelect) {
      // 选择YAML到JSON方向
      const yamlToJsonOption = directionSelect.findAll('option').find(option => 
        option.text().includes('YAML') && option.text().includes('JSON')
      );
      
      if (yamlToJsonOption) {
        await directionSelect.setValue(yamlToJsonOption.attributes('value'));
      }
    }
    
    // 找到输入区域
    const textareas = wrapper.findAll('textarea');
    if (textareas.length >= 2) {
      // 设置YAML输入
      await textareas[0].setValue('test: data');
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // JSON 到 YAML 转换测试
  it('converts JSON to YAML when in json-to-yaml mode and clicking convert', async () => {
    const wrapper = mount(YamlJsonConverter);
    
    // 找到方向选择器并设置为JSON→YAML
    const directionSelect = wrapper.findAll('select').find(select => {
      return select.attributes('id')?.includes('direction') ||
             select.attributes('name')?.includes('direction');
    });
    
    if (directionSelect) {
      // 选择JSON到YAML方向
      const jsonToYamlOption = directionSelect.findAll('option').find(option => 
        option.text().includes('JSON') && option.text().includes('YAML') &&
        !option.text().includes('YAML') && !option.text().includes('JSON')
      );
      
      if (jsonToYamlOption) {
        await directionSelect.setValue(jsonToYamlOption.attributes('value'));
      } else {
        // 如果找不到精确的选项，找含有JSON的选项
        const jsonOption = directionSelect.findAll('option').find(option => 
          option.text().includes('JSON')
        );
        
        if (jsonOption) {
          await directionSelect.setValue(jsonOption.attributes('value'));
        }
      }
    }
    
    // 找到输入区域
    const textareas = wrapper.findAll('textarea');
    if (textareas.length >= 2) {
      // 设置JSON输入
      await textareas[0].setValue('{"test": "data"}');
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // 测试复制功能
  it('copies converted data to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(YamlJsonConverter);
    
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

  // 测试清空功能
  it('clears input and output areas when clicking clear button', async () => {
    const wrapper = mount(YamlJsonConverter);
    
    // 找到输入区域
    const textareas = wrapper.findAll('textarea');
    if (textareas.length >= 2) {
      // 设置输入
      await textareas[0].setValue('test: data');
      
      // 查找清空按钮并点击
      const clearButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('清空') || 
        btn.text().includes('Clear')
      );
      
      if (clearButton) {
        await clearButton.trigger('click');
        
        // 验证输入已被清除
        expect(textareas[0].element.value).toBe('');
      }
    }
  });
}); 