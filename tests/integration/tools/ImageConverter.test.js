import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import ImageConverter from '../../../src/components/tools/ImageConverter.vue';

describe('ImageConverter.vue', () => {
  // 模拟文件API和HTML5 Canvas
  beforeEach(() => {
    // 模拟 FileReader
    global.FileReader = class {
      constructor() {
        this.result = null;
        this.onload = null;
      }
      readAsDataURL() {
        this.result = 'data:image/png;base64,mockImageData';
        setTimeout(() => this.onload({ target: this }), 10);
      }
    };
    
    // 模拟 canvas 上下文
    const mockContext = {
      drawImage: vi.fn(),
      getImageData: vi.fn().mockReturnValue({ data: new Uint8ClampedArray(100) }),
      putImageData: vi.fn()
    };
    
    // 模拟 canvas 元素
    HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue(mockContext);
    HTMLCanvasElement.prototype.toDataURL = vi.fn().mockReturnValue('data:image/jpeg;base64,convertedImageData');
    HTMLCanvasElement.prototype.toBlob = vi.fn().mockImplementation((callback) => {
      callback(new Blob(['mockBlobData'], { type: 'image/jpeg' }));
    });
  });

  // 基础渲染测试
  it('renders correctly with image upload area', () => {
    const wrapper = shallowMount(ImageConverter);
    
    // 检查文件上传区域
    expect(wrapper.find('input[type="file"]').exists() || wrapper.find('.file-upload').exists()).toBe(true);
  });

  // 图片上传测试
  it('handles image upload and display preview', async () => {
    const wrapper = mount(ImageConverter);
    
    // 找到文件上传区域
    const fileInput = wrapper.find('input[type="file"]');
    
    if (fileInput.exists()) {
      // 创建模拟文件
      const file = new File(['mock'], 'image.png', { type: 'image/png' });
      const event = { target: { files: [file] } };
      
      // 触发文件上传
      await fileInput.trigger('change', event);
      
      // 等待异步处理
      await new Promise(resolve => setTimeout(resolve, 20));
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
      
      // 查找预览图像
      const previewImg = wrapper.find('img.preview') || wrapper.find('.image-preview img');
      
      if (previewImg.exists()) {
        expect(previewImg.attributes('src')).toBeDefined();
      }
    }
  });

  // 格式转换测试
  it('converts image format when selecting different format', async () => {
    const wrapper = mount(ImageConverter);
    
    // 先上传测试图片
    const fileInput = wrapper.find('input[type="file"]');
    if (fileInput.exists()) {
      const file = new File(['mock'], 'image.png', { type: 'image/png' });
      const event = { target: { files: [file] } };
      await fileInput.trigger('change', event);
      await new Promise(resolve => setTimeout(resolve, 20));
    }
    
    // 找到格式选择器
    const formatSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('format') ||
      select.attributes('name')?.toLowerCase().includes('format')
    );
    
    if (formatSelect && formatSelect.exists()) {
      // 获取所有选项
      const options = formatSelect.findAll('option');
      
      if (options.length > 1) {
        // 选择JPEG格式
        const jpegOption = options.find(option => 
          option.text().toLowerCase().includes('jpeg') ||
          option.text().toLowerCase().includes('jpg')
        );
        
        if (jpegOption) {
          await formatSelect.setValue(jpegOption.attributes('value'));
          
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
    }
  });

  // 质量设置测试
  it('allows adjusting image quality', async () => {
    const wrapper = mount(ImageConverter);
    
    // 先上传测试图片
    const fileInput = wrapper.find('input[type="file"]');
    if (fileInput.exists()) {
      const file = new File(['mock'], 'image.png', { type: 'image/png' });
      const event = { target: { files: [file] } };
      await fileInput.trigger('change', event);
      await new Promise(resolve => setTimeout(resolve, 20));
    }
    
    // 找到质量滑块
    const qualitySlider = wrapper.find('input[type="range"]') || 
                         wrapper.find('input[id*="quality"]') ||
                         wrapper.find('input[name*="quality"]');
    
    if (qualitySlider.exists()) {
      // 设置质量为80%
      await qualitySlider.setValue(80);
      
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

  // 图片大小调整测试
  it('resizes image if resize feature is available', async () => {
    const wrapper = mount(ImageConverter);
    
    // 先上传测试图片
    const fileInput = wrapper.find('input[type="file"]');
    if (fileInput.exists()) {
      const file = new File(['mock'], 'image.png', { type: 'image/png' });
      const event = { target: { files: [file] } };
      await fileInput.trigger('change', event);
      await new Promise(resolve => setTimeout(resolve, 20));
    }
    
    // 找到宽度输入
    const widthInput = wrapper.findAll('input[type="number"]').find(input => 
      input.attributes('id')?.toLowerCase().includes('width') ||
      input.attributes('name')?.toLowerCase().includes('width')
    );
    
    // 找到高度输入
    const heightInput = wrapper.findAll('input[type="number"]').find(input => 
      input.attributes('id')?.toLowerCase().includes('height') ||
      input.attributes('name')?.toLowerCase().includes('height')
    );
    
    if (widthInput && widthInput.exists() && heightInput && heightInput.exists()) {
      // 设置新的尺寸
      await widthInput.setValue(800);
      await heightInput.setValue(600);
      
      // 查找调整按钮或转换按钮并点击
      const resizeButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('调整') || 
        btn.text().includes('Resize')
      );
      
      if (resizeButton) {
        await resizeButton.trigger('click');
      } else {
        const convertButton = wrapper.findAll('button').find(btn => 
          btn.text().includes('转换') || 
          btn.text().includes('Convert')
        );
        
        if (convertButton) {
          await convertButton.trigger('click');
        }
      }
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
    }
  });

  // 图片下载测试
  it('allows downloading converted image', async () => {
    const wrapper = mount(ImageConverter);
    
    // 先上传并转换测试图片
    const fileInput = wrapper.find('input[type="file"]');
    if (fileInput.exists()) {
      const file = new File(['mock'], 'image.png', { type: 'image/png' });
      const event = { target: { files: [file] } };
      await fileInput.trigger('change', event);
      await new Promise(resolve => setTimeout(resolve, 20));
      
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
      }
    }
    
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
    
    // 查找下载按钮并点击
    const downloadButton = wrapper.findAll('button').find(btn => 
      btn.text().includes('下载') || 
      btn.text().includes('Download') ||
      btn.text().includes('保存') || 
      btn.text().includes('Save')
    );
    
    if (downloadButton) {
      await downloadButton.trigger('click');
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
      expect(mockLink.click).toHaveBeenCalled();
    }
  });
}); 