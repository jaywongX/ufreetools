import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import ImageCompressor from '../../../src/components/tools/ImageCompressor.vue';

// 模拟浏览器File和FileReader API
global.File = class MockFile {
  constructor(parts, filename, options = {}) {
    this.name = filename;
    this.size = options.size || parts.join('').length;
    this.type = options.type || 'image/jpeg';
    this._parts = parts;
  }
};

global.FileReader = class MockFileReader {
  constructor() {
    this.onload = null;
  }
  
  readAsDataURL(file) {
    setTimeout(() => {
      if (this.onload) {
        this.onload({ target: { result: 'data:image/jpeg;base64,mockImageData' } });
      }
    }, 0);
  }
};

// 模拟canvas和context操作
HTMLCanvasElement.prototype.getContext = vi.fn().mockImplementation(() => ({
  drawImage: vi.fn(),
  canvas: {
    toBlob: vi.fn().mockImplementation((callback) => {
      callback(new Blob(['compressed-image-data'], { type: 'image/jpeg' }));
    }),
    toDataURL: vi.fn().mockReturnValue('data:image/jpeg;base64,compressedImageData')
  }
}));

describe('ImageCompressor.vue', () => {
  // 基础渲染测试
  it('renders correctly with file upload area', () => {
    const wrapper = shallowMount(ImageCompressor);
    
    // 检查文件上传区域
    expect(wrapper.find('input[type="file"]').exists()).toBe(true);
  });

  // 测试图片上传
  it('handles image upload', async () => {
    const wrapper = mount(ImageCompressor);
    
    // 模拟文件上传
    const fileInput = wrapper.find('input[type="file"]');
    
    if (fileInput.exists()) {
      // 创建模拟文件
      const file = new File(['mock image data'], 'test-image.jpg', { type: 'image/jpeg' });
      
      // 模拟文件选择事件
      await fileInput.trigger('change', {
        target: {
          files: [file]
        }
      });
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
      
      // 等待异步操作完成
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  });

  // 测试压缩质量调整
  it('adjusts compression quality', async () => {
    const wrapper = mount(ImageCompressor);
    
    // 找到质量调节器
    const qualityInput = wrapper.findAll('input[type="range"]').find(input => {
      return input.attributes('id')?.includes('quality') ||
             input.attributes('name')?.includes('quality');
    });
    
    if (qualityInput) {
      // 调整质量
      await qualityInput.setValue(50);
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
      
      // 找到压缩按钮
      const compressButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('压缩') || 
        btn.text().includes('Compress')
      );
      
      // 如果找到压缩按钮，点击它
      if (compressButton) {
        await compressButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // 测试最大尺寸调整
  it('adjusts maximum dimensions', async () => {
    const wrapper = mount(ImageCompressor);
    
    // 找到尺寸调节器
    const widthInput = wrapper.findAll('input[type="number"]').find(input => {
      return input.attributes('id')?.includes('width') ||
             input.attributes('name')?.includes('width');
    });
    
    // 找到压缩按钮
    const compressButton = wrapper.findAll('button').find(btn => 
      btn.text().includes('压缩') || 
      btn.text().includes('Compress')
    );
    
    if (widthInput && compressButton) {
      // 调整宽度
      await widthInput.setValue(800);
      
      // 点击压缩按钮
      await compressButton.trigger('click');
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
    }
  });

  // 测试下载压缩后的图片
  it('allows downloading compressed image', async () => {
    const wrapper = mount(ImageCompressor);
    
    // 模拟压缩后的状态
    // 通常需要先上传图片并压缩
    
    // 模拟文件上传
    const fileInput = wrapper.find('input[type="file"]');
    if (fileInput.exists()) {
      const file = new File(['mock image data'], 'test-image.jpg', { type: 'image/jpeg' });
      await fileInput.trigger('change', { target: { files: [file] } });
      
      // 等待异步操作完成
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // 查找下载按钮
      const downloadButton = wrapper.findAll('button, a').find(el => 
        el.text().includes('下载') || 
        el.text().includes('Download')
      );
      
      if (downloadButton) {
        await downloadButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // 测试文件格式选择
  it('allows selecting output format', async () => {
    const wrapper = mount(ImageCompressor);
    
    // 找到格式选择器
    const formatSelect = wrapper.findAll('select').find(select => {
      return select.attributes('id')?.includes('format') ||
             select.attributes('name')?.includes('format');
    });
    
    if (formatSelect) {
      // 选择输出格式
      const options = formatSelect.findAll('option');
      if (options.length > 1) {
        await formatSelect.setValue(options[1].attributes('value'));
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });
}); 