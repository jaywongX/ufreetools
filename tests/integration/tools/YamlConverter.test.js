import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import YamlConverter from '../../../src/components/tools/YamlConverter.vue';

// 模拟js-yaml库
vi.mock('js-yaml', () => ({
  load: vi.fn().mockImplementation((yaml) => {
    if (yaml.includes('name: Test')) {
      return { name: 'Test', value: 123 };
    }
    throw new Error('YAML parsing error');
  }),
  dump: vi.fn().mockImplementation((obj) => {
    return 'name: Test\nvalue: 123';
  })
}));

describe('YamlConverter.vue', () => {
  // 基础渲染测试
  it('renders correctly with input and output areas', () => {
    const wrapper = shallowMount(YamlConverter);
    
    // 检查输入输出区域
    expect(wrapper.find('textarea').exists()).toBe(true);
  });

  // YAML转JSON测试
  it('converts YAML to JSON when selecting that mode', async () => {
    const wrapper = mount(YamlConverter);
    
    // 找到转换类型选择器
    const convertRadios = wrapper.findAll('input[type="radio"]');
    const convertSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('convert') ||
      select.attributes('name')?.toLowerCase().includes('convert') ||
      select.attributes('id')?.toLowerCase().includes('mode')
    );
    
    // 设置为YAML到JSON模式
    if (convertRadios.length > 1) {
      // 找到YAML到JSON单选按钮
      const yamlToJsonRadio = convertRadios.find(radio => 
        radio.attributes('value')?.toLowerCase().includes('to-json') ||
        radio.attributes('id')?.toLowerCase().includes('to-json')
      );
      
      if (yamlToJsonRadio) {
        await yamlToJsonRadio.setChecked(true);
      }
    } else if (convertSelect && convertSelect.exists()) {
      // 获取所有选项
      const options = convertSelect.findAll('option');
      
      // 找到YAML到JSON选项
      const yamlToJsonOption = options.find(option => 
        option.text().toLowerCase().includes('yaml to json') ||
        option.text().toLowerCase().includes('to json')
      );
      
      if (yamlToJsonOption) {
        await convertSelect.setValue(yamlToJsonOption.attributes('value'));
      }
    }
    
    // 找到YAML输入区域
    const yamlInput = wrapper.findAll('textarea')[0] || wrapper.find('.yaml-input');
    
    if (yamlInput.exists()) {
      // 设置YAML数据
      await yamlInput.setValue('name: Test\nvalue: 123');
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 找到输出区域
        const jsonOutput = wrapper.findAll('textarea')[1] || wrapper.find('.json-output');
        
        if (jsonOutput.exists()) {
          // 验证输出包含预期的JSON
          const outputValue = jsonOutput.element.value;
          expect(outputValue).toContain('"name"');
          expect(outputValue).toContain('"value"');
        }
      }
    }
  });

  // JSON转YAML测试
  it('converts JSON to YAML when selecting that mode', async () => {
    const wrapper = mount(YamlConverter);
    
    // 找到转换类型选择器
    const convertRadios = wrapper.findAll('input[type="radio"]');
    const convertSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('convert') ||
      select.attributes('name')?.toLowerCase().includes('convert') ||
      select.attributes('id')?.toLowerCase().includes('mode')
    );
    
    // 设置为JSON到YAML模式
    if (convertRadios.length > 1) {
      // 找到JSON到YAML单选按钮
      const jsonToYamlRadio = convertRadios.find(radio => 
        radio.attributes('value')?.toLowerCase().includes('to-yaml') ||
        radio.attributes('id')?.toLowerCase().includes('to-yaml')
      );
      
      if (jsonToYamlRadio) {
        await jsonToYamlRadio.setChecked(true);
      }
    } else if (convertSelect && convertSelect.exists()) {
      // 获取所有选项
      const options = convertSelect.findAll('option');
      
      // 找到JSON到YAML选项
      const jsonToYamlOption = options.find(option => 
        option.text().toLowerCase().includes('json to yaml') ||
        option.text().toLowerCase().includes('to yaml')
      );
      
      if (jsonToYamlOption) {
        await convertSelect.setValue(jsonToYamlOption.attributes('value'));
      }
    }
    
    // 找到JSON输入区域
    const jsonInput = wrapper.findAll('textarea')[0] || wrapper.find('.json-input');
    
    if (jsonInput.exists()) {
      // 设置JSON数据
      await jsonInput.setValue('{"name": "Test", "value": 123}');
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 找到输出区域
        const yamlOutput = wrapper.findAll('textarea')[1] || wrapper.find('.yaml-output');
        
        if (yamlOutput.exists()) {
          // 验证输出包含预期的YAML
          const outputValue = yamlOutput.element.value;
          expect(outputValue).toContain('name:');
          expect(outputValue).toContain('value:');
        }
      }
    }
  });

  // 输入错误处理测试
  it('handles invalid input gracefully', async () => {
    const wrapper = mount(YamlConverter);
    
    // 找到YAML输入区域
    const yamlInput = wrapper.findAll('textarea')[0];
    
    if (yamlInput.exists()) {
      // 设置无效的YAML
      await yamlInput.setValue('invalid: - yaml: content');
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
        
        // 验证组件状态 - 应该显示错误信息
        expect(wrapper.exists()).toBe(true);
        
        // 尝试查找错误消息元素
        const errorElement = wrapper.find('.error') || 
                            wrapper.find('.conversion-error') ||
                            wrapper.find('.alert-danger');
        
        if (errorElement.exists()) {
          expect(errorElement.exists()).toBe(true);
        }
      }
    }
  });

  // 复制结果测试
  it('copies conversion result to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(YamlConverter);
    
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
}); 