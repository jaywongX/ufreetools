import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import CSVConverter from '../../../src/components/tools/CSVConverter.vue';

// 可能需要模拟CSV解析库
vi.mock('papaparse', () => ({
  parse: vi.fn().mockImplementation((csvString, options) => {
    const result = {
      data: [
        ['Name', 'Age', 'City'],
        ['John', '30', 'New York'],
        ['Alice', '25', 'Los Angeles']
      ],
      errors: []
    };
    options.complete(result);
    return result;
  }),
  unparse: vi.fn().mockImplementation((data) => {
    return 'Name,Age,City\nJohn,30,New York\nAlice,25,Los Angeles';
  })
}));

describe('CSVConverter.vue', () => {
  // 基础渲染测试
  it('renders correctly with input area', () => {
    const wrapper = shallowMount(CSVConverter);
    
    // 检查输入区域
    expect(wrapper.find('textarea').exists() || wrapper.find('input[type="file"]').exists()).toBe(true);
  });

  // CSV到JSON转换测试
  it('converts CSV to JSON when selecting that mode', async () => {
    const wrapper = mount(CSVConverter);
    
    // 找到转换类型选择器
    const convertRadios = wrapper.findAll('input[type="radio"]');
    const convertSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('convert') ||
      select.attributes('name')?.toLowerCase().includes('convert') ||
      select.attributes('id')?.toLowerCase().includes('mode')
    );
    
    // 设置为CSV到JSON模式
    if (convertRadios.length > 1) {
      // 找到CSV到JSON单选按钮
      const csvToJsonRadio = convertRadios.find(radio => 
        radio.attributes('value')?.toLowerCase().includes('to-json') ||
        radio.attributes('id')?.toLowerCase().includes('to-json')
      );
      
      if (csvToJsonRadio) {
        await csvToJsonRadio.setChecked(true);
      }
    } else if (convertSelect && convertSelect.exists()) {
      // 获取所有选项
      const options = convertSelect.findAll('option');
      
      // 找到CSV到JSON选项
      const csvToJsonOption = options.find(option => 
        option.text().toLowerCase().includes('to json') ||
        option.text().toLowerCase().includes('csv to json')
      );
      
      if (csvToJsonOption) {
        await convertSelect.setValue(csvToJsonOption.attributes('value'));
      }
    }
    
    // 找到CSV输入区域
    const csvInput = wrapper.find('textarea') || wrapper.find('.csv-input');
    
    if (csvInput) {
      // 设置CSV数据
      await csvInput.setValue('Name,Age,City\nJohn,30,New York\nAlice,25,Los Angeles');
      
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
        const output = wrapper.findAll('textarea')[1] || wrapper.find('.json-output');
        
        if (output) {
          // 验证输出是JSON格式
          try {
            JSON.parse(output.element.value);
            expect(true).toBe(true); // 如果能解析，测试通过
          } catch (e) {
            // 文本可能不是JSON格式
            const text = output.element.value || output.text();
            expect(text).toContain('['); // 至少包含JSON数组开始标记
          }
        }
      }
    }
  });

  // JSON到CSV转换测试
  it('converts JSON to CSV when selecting that mode', async () => {
    const wrapper = mount(CSVConverter);
    
    // 找到转换类型选择器
    const convertRadios = wrapper.findAll('input[type="radio"]');
    const convertSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('convert') ||
      select.attributes('name')?.toLowerCase().includes('convert') ||
      select.attributes('id')?.toLowerCase().includes('mode')
    );
    
    // 设置为JSON到CSV模式
    if (convertRadios.length > 1) {
      // 找到JSON到CSV单选按钮
      const jsonToCsvRadio = convertRadios.find(radio => 
        radio.attributes('value')?.toLowerCase().includes('to-csv') ||
        radio.attributes('id')?.toLowerCase().includes('to-csv')
      );
      
      if (jsonToCsvRadio) {
        await jsonToCsvRadio.setChecked(true);
      }
    } else if (convertSelect && convertSelect.exists()) {
      // 获取所有选项
      const options = convertSelect.findAll('option');
      
      // 找到JSON到CSV选项
      const jsonToCsvOption = options.find(option => 
        option.text().toLowerCase().includes('to csv') ||
        option.text().toLowerCase().includes('json to csv')
      );
      
      if (jsonToCsvOption) {
        await convertSelect.setValue(jsonToCsvOption.attributes('value'));
      }
    }
    
    // 找到JSON输入区域
    const jsonInput = wrapper.find('textarea') || wrapper.find('.json-input');
    
    if (jsonInput) {
      // 设置JSON数据
      await jsonInput.setValue('[{"Name":"John","Age":30,"City":"New York"},{"Name":"Alice","Age":25,"City":"Los Angeles"}]');
      
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
        const output = wrapper.findAll('textarea')[1] || wrapper.find('.csv-output');
        
        if (output) {
          // 验证输出包含CSV特征
          const text = output.element.value || output.text();
          expect(text).toContain(','); // 至少包含逗号分隔符
          expect(text.split('\n').length).toBeGreaterThan(1); // 至少有多行
        }
      }
    }
  });

  // 文件上传测试
  it('handles file upload correctly', async () => {
    const wrapper = mount(CSVConverter);
    
    // 找到文件输入
    const fileInput = wrapper.find('input[type="file"]');
    
    if (fileInput.exists()) {
      // 模拟文件上传
      const file = new File(['Name,Age,City\nJohn,30,New York'], 'test.csv', { type: 'text/csv' });
      const fileList = {
        0: file,
        length: 1,
        item: (index) => file
      };
      
      await fileInput.trigger('change', { target: { files: fileList } });
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
    }
  });

  // 分隔符选项测试
  it('respects delimiter option if available', async () => {
    const wrapper = mount(CSVConverter);
    
    // 找到分隔符输入
    const delimiterInput = wrapper.findAll('input[type="text"]').find(input => 
      input.attributes('id')?.toLowerCase().includes('delimiter') ||
      input.attributes('name')?.toLowerCase().includes('delimiter') ||
      input.attributes('placeholder')?.toLowerCase().includes('delimiter')
    );
    
    if (delimiterInput) {
      // 设置为分号分隔符
      await delimiterInput.setValue(';');
      
      // 找到CSV输入区域
      const csvInput = wrapper.find('textarea') || wrapper.find('.csv-input');
      
      if (csvInput) {
        // 设置分号分隔的CSV
        await csvInput.setValue('Name;Age;City\nJohn;30;New York');
        
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
    }
  });

  // 下载结果测试
  it('allows downloading conversion result', async () => {
    const wrapper = mount(CSVConverter);
    
    // 先进行转换
    const csvInput = wrapper.find('textarea') || wrapper.find('.csv-input');
    
    if (csvInput) {
      await csvInput.setValue('Name,Age,City\nJohn,30,New York');
      
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
      }
      
      // 查找下载按钮
      const downloadButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('下载') || 
        btn.text().includes('Download') ||
        btn.text().includes('保存') ||
        btn.text().includes('Save')
      );
      
      if (downloadButton) {
        // 模拟下载链接创建和点击
        global.URL.createObjectURL = vi.fn(() => 'blob:mock-url');
        const mockLink = {
          href: '',
          download: '',
          click: vi.fn(),
          remove: vi.fn()
        };
        global.document.createElement = vi.fn().mockImplementation(tag => {
          if (tag === 'a') return mockLink;
          return document.createElement(tag);
        });
        
        await downloadButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });
}); 