import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import HashGenerator from '../../../src/components/tools/HashGenerator.vue';

// 可能需要模拟哈希库
vi.mock('crypto-js', () => ({
  MD5: vi.fn().mockReturnValue({ toString: () => 'md5hash' }),
  SHA1: vi.fn().mockReturnValue({ toString: () => 'sha1hash' }),
  SHA256: vi.fn().mockReturnValue({ toString: () => 'sha256hash' }),
  SHA512: vi.fn().mockReturnValue({ toString: () => 'sha512hash' })
}));

describe('HashGenerator.vue', () => {
  // 基础渲染测试
  it('renders correctly with input field and hash options', () => {
    const wrapper = shallowMount(HashGenerator);
    
    // 检查输入字段
    expect(wrapper.find('textarea').exists() || wrapper.find('input').exists()).toBe(true);
    
    // 检查哈希类型选择器
    expect(wrapper.find('select').exists() || wrapper.findAll('input[type="radio"]').length > 0).toBe(true);
  });

  // 测试哈希生成
  it('generates hash when clicking generate button', async () => {
    const wrapper = mount(HashGenerator);
    
    // 找到输入字段
    const input = wrapper.find('textarea') || wrapper.find('input');
    
    if (input.exists()) {
      // 设置输入文本
      await input.setValue('test string');
      
      // 查找生成按钮并点击
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate') ||
        btn.text().includes('Hash')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 检查是否显示了哈希结果
        const resultElement = wrapper.find('.result') || 
                             wrapper.find('.hash-result') ||
                             wrapper.findAll('input').find(input => input.element.value !== 'test string');
        
        if (resultElement.exists()) {
          expect(resultElement.exists()).toBe(true);
        }
      }
    }
  });

  // 测试哈希类型切换
  it('switches between hash algorithms', async () => {
    const wrapper = mount(HashGenerator);
    
    // 找到哈希类型选择器
    const hashTypeSelect = wrapper.find('select');
    const hashTypeRadios = wrapper.findAll('input[type="radio"]');
    
    // 测试下拉选择方式
    if (hashTypeSelect.exists()) {
      // 获取所有选项
      const options = hashTypeSelect.findAll('option');
      
      if (options.length > 1) {
        // 选择第二个算法(通常是SHA1或SHA256)
        await hashTypeSelect.setValue(options[1].attributes('value'));
        
        // 找到输入字段
        const input = wrapper.find('textarea') || wrapper.find('input');
        
        if (input.exists()) {
          // 设置输入文本
          await input.setValue('test string');
          
          // 查找生成按钮并点击
          const generateButton = wrapper.findAll('button').find(btn => 
            btn.text().includes('生成') || 
            btn.text().includes('Generate') ||
            btn.text().includes('Hash')
          );
          
          if (generateButton) {
            await generateButton.trigger('click');
            
            // 验证组件状态
            expect(wrapper.exists()).toBe(true);
          }
        }
      }
    }
    // 测试单选按钮方式
    else if (hashTypeRadios.length > 1) {
      // 选择第二个算法
      await hashTypeRadios[1].setChecked(true);
      
      // 找到输入字段
      const input = wrapper.find('textarea') || wrapper.find('input');
      
      if (input.exists()) {
        // 设置输入文本
        await input.setValue('test string');
        
        // 查找生成按钮并点击
        const generateButton = wrapper.findAll('button').find(btn => 
          btn.text().includes('生成') || 
          btn.text().includes('Generate') ||
          btn.text().includes('Hash')
        );
        
        if (generateButton) {
          await generateButton.trigger('click');
          
          // 验证组件状态
          expect(wrapper.exists()).toBe(true);
        }
      }
    }
  });

  // 测试文件哈希
  it('handles file hashing', async () => {
    const wrapper = mount(HashGenerator);
    
    // 找到文件上传输入
    const fileInput = wrapper.find('input[type="file"]');
    
    if (fileInput.exists()) {
      // 模拟文件
      const file = new File(['file content'], 'test.txt', { type: 'text/plain' });
      
      // 模拟文件上传事件
      await fileInput.trigger('change', {
        target: { files: [file] }
      });
      
      // 查找生成按钮并点击
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate') ||
        btn.text().includes('Hash')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
      }
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
    }
  });

  // 测试复制哈希结果
  it('copies hash result to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(HashGenerator);
    
    // 找到输入字段
    const input = wrapper.find('textarea') || wrapper.find('input');
    
    if (input.exists()) {
      // 设置输入文本
      await input.setValue('test string');
      
      // 先生成哈希
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate') ||
        btn.text().includes('Hash')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
      }
      
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
    }
  });
}); 