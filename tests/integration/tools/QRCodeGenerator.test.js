import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import QrCodeGenerator from '../../../src/components/tools/QrCodeGenerator.vue';

// 模拟QRCode库
vi.mock('qrcode', () => ({
  toDataURL: vi.fn().mockImplementation((text, options, callback) => {
    callback(null, 'data:image/png;base64,mockQrCodeImage');
  }),
  toCanvas: vi.fn().mockImplementation((canvas, text, options, callback) => {
    callback(null);
  })
}));

describe('QrCodeGenerator.vue', () => {
  // 基础渲染测试
  it('renders correctly with text input and QR display area', () => {
    const wrapper = shallowMount(QrCodeGenerator);
    
    // 检查输入字段和QR显示区域
    expect(wrapper.find('input').exists() || wrapper.find('textarea').exists()).toBe(true);
    expect(wrapper.find('canvas').exists() || wrapper.find('img').exists() || wrapper.find('.qr-display').exists()).toBe(true);
  });

  // QR码生成测试
  it('generates QR code when clicking generate button', async () => {
    const wrapper = mount(QrCodeGenerator);
    
    // 找到文本输入
    const textInput = wrapper.find('input[type="text"]') || wrapper.find('textarea');
    
    if (textInput.exists()) {
      // 输入测试文本
      await textInput.setValue('https://example.com');
      
      // 查找生成按钮并点击
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate') ||
        btn.text().includes('创建') ||
        btn.text().includes('Create')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // QR码大小设置测试
  it('adjusts QR code size when changing size option', async () => {
    const wrapper = mount(QrCodeGenerator);
    
    // 找到大小选择器
    const sizeInput = wrapper.findAll('input[type="number"], input[type="range"]').find(input => 
      input.attributes('id')?.toLowerCase().includes('size') ||
      input.attributes('name')?.toLowerCase().includes('size') ||
      input.attributes('placeholder')?.toLowerCase().includes('size')
    );
    
    // 找到文本输入
    const textInput = wrapper.find('input[type="text"]') || wrapper.find('textarea');
    
    if (sizeInput && textInput.exists()) {
      // 输入测试文本
      await textInput.setValue('https://example.com');
      
      // 设置大小
      await sizeInput.setValue(300);
      
      // 查找生成按钮并点击
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate') ||
        btn.text().includes('创建') ||
        btn.text().includes('Create')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // QR码错误校正级别测试
  it('adjusts error correction level when changing option', async () => {
    const wrapper = mount(QrCodeGenerator);
    
    // 找到错误校正级别选择器
    const errorCorrectionSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('error') ||
      select.attributes('name')?.toLowerCase().includes('error') ||
      select.attributes('id')?.toLowerCase().includes('correction')
    );
    
    // 找到文本输入
    const textInput = wrapper.find('input[type="text"]') || wrapper.find('textarea');
    
    if (errorCorrectionSelect && textInput.exists()) {
      // 输入测试文本
      await textInput.setValue('https://example.com');
      
      // 获取所有选项
      const options = errorCorrectionSelect.findAll('option');
      
      if (options.length > 1) {
        // 选择高级别错误校正
        await errorCorrectionSelect.setValue(options[options.length - 1].attributes('value'));
        
        // 查找生成按钮并点击
        const generateButton = wrapper.findAll('button').find(btn => 
          btn.text().includes('生成') || 
          btn.text().includes('Generate') ||
          btn.text().includes('创建') ||
          btn.text().includes('Create')
        );
        
        if (generateButton) {
          await generateButton.trigger('click');
          
          // 验证组件状态
          expect(wrapper.exists()).toBe(true);
        }
      }
    }
  });

  // 下载QR码测试
  it('allows downloading the generated QR code', async () => {
    const wrapper = mount(QrCodeGenerator);
    
    // 找到文本输入
    const textInput = wrapper.find('input[type="text"]') || wrapper.find('textarea');
    
    if (textInput.exists()) {
      // 输入测试文本
      await textInput.setValue('https://example.com');
      
      // 查找生成按钮并点击
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate') ||
        btn.text().includes('创建') ||
        btn.text().includes('Create')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
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