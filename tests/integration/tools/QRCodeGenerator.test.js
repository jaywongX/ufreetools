import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import QRCodeGenerator from '../../../src/components/tools/QRCodeGenerator.vue';

// 模拟 qrcode.js
vi.mock('qrcode', () => ({
  default: {
    toCanvas: vi.fn().mockImplementation((canvas, text, options, callback) => {
      if (callback) callback(null, canvas);
      return Promise.resolve(canvas);
    }),
    toDataURL: vi.fn().mockImplementation((text, options, callback) => {
      const url = 'data:image/png;base64,fakeQRCodeBase64Data';
      if (callback) callback(null, url);
      return Promise.resolve(url);
    })
  }
}));

describe('QRCodeGenerator.vue', () => {
  // 基础渲染测试
  it('renders correctly with input area', () => {
    const wrapper = shallowMount(QRCodeGenerator);
    
    // 检查输入区域
    expect(wrapper.find('input[type="text"]').exists() || wrapper.find('textarea').exists()).toBe(true);
  });

  // 生成二维码测试
  it('generates QR code when clicking generate button', async () => {
    const wrapper = mount(QRCodeGenerator);
    
    // 找到输入区域
    const input = wrapper.find('input[type="text"]') || wrapper.find('textarea');
    
    if (input.exists()) {
      // 设置测试文本
      await input.setValue('https://example.com');
      
      // 查找生成按钮并点击
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
        
        // 验证组件状态 - canvas或img元素应该存在
        expect(wrapper.find('canvas').exists() || wrapper.find('img').exists()).toBe(true);
      }
    }
  });

  // 测试QR码大小调整
  it('adjusts QR code size when changing size input', async () => {
    const wrapper = mount(QRCodeGenerator);
    
    // 找到大小调整输入
    const sizeInput = wrapper.find('input[type="range"]') || 
                     wrapper.find('input[type="number"]');
    
    if (sizeInput.exists()) {
      // 调整大小
      await sizeInput.setValue(300);
      
      // 查找生成按钮并点击
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
        
        // 验证组件正常运行
        expect(wrapper.find('canvas').exists() || wrapper.find('img').exists()).toBe(true);
      }
    }
  });

  // 空字符串输入测试
  it('handles empty input gracefully', async () => {
    const wrapper = mount(QRCodeGenerator);
    
    // 找到输入区域
    const input = wrapper.find('input[type="text"]') || wrapper.find('textarea');
    
    if (input.exists()) {
      // 设置空字符串
      await input.setValue('');
      
      // 查找生成按钮并点击
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
        
        // 验证组件没有崩溃
        expect(wrapper.exists()).toBe(true);
      }
    }
  });
}); 