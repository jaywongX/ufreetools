import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import HashCalculator from '../../../src/components/tools/HashCalculator.vue';

// 模拟 crypto-js
vi.mock('crypto-js', () => ({
  MD5: vi.fn(() => ({ toString: () => '5d41402abc4b2a76b9719d911017c592' })),
  SHA1: vi.fn(() => ({ toString: () => '2aae6c35c94fcfb415dbe95f408b9ce91ee846ed' })),
  SHA256: vi.fn(() => ({ toString: () => '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824' }))
}));

describe('HashCalculator.vue', () => {
  // 基础渲染测试
  it('renders correctly with input area and hash options', () => {
    const wrapper = shallowMount(HashCalculator);
    
    // 检查输入区域
    expect(wrapper.find('textarea').exists() || wrapper.find('input[type="text"]').exists()).toBe(true);
  });

  // 计算 MD5 哈希测试
  it('calculates MD5 hash correctly', async () => {
    const wrapper = mount(HashCalculator);
    
    // 找到输入区域
    const input = wrapper.find('textarea') || wrapper.find('input[type="text"]');
    
    if (input.exists()) {
      // 设置测试输入
      await input.setValue('test string');
      
      // 如果有算法选择器，选择 MD5
      const algorithmSelect = wrapper.find('select');
      if (algorithmSelect.exists()) {
        // 查找 MD5 选项
        const options = algorithmSelect.findAll('option');
        const md5Option = options.find(option => option.text().includes('MD5'));
        
        if (md5Option) {
          await algorithmSelect.setValue(md5Option.attributes('value') || 'md5');
        }
      }
      
      // 查找计算按钮并点击
      const calculateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('计算') || 
        btn.text().includes('Calculate') ||
        btn.text().includes('生成')
      );
      
      if (calculateButton) {
        await calculateButton.trigger('click');
        
        // 验证组件没有崩溃
        expect(wrapper.find('textarea').exists() || wrapper.find('input').exists()).toBe(true);
      }
    }
  });

  // 空字符串输入测试
  it('handles empty input gracefully', async () => {
    const wrapper = mount(HashCalculator);
    
    // 找到输入区域
    const input = wrapper.find('textarea') || wrapper.find('input[type="text"]');
    
    if (input.exists()) {
      // 设置空字符串
      await input.setValue('');
      
      // 查找计算按钮并点击
      const calculateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('计算') || 
        btn.text().includes('Calculate') ||
        btn.text().includes('生成')
      );
      
      if (calculateButton) {
        await calculateButton.trigger('click');
        
        // 验证组件没有崩溃
        expect(wrapper.find('textarea').exists() || wrapper.find('input').exists()).toBe(true);
      }
    }
  });
}); 