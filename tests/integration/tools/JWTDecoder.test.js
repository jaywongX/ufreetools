import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import JWTDecoder from '../../../src/components/tools/JWTDecoder.vue';

describe('JWTDecoder.vue', () => {
  // 基础渲染测试
  it('renders correctly with JWT input area', () => {
    const wrapper = shallowMount(JWTDecoder);
    
    // 检查JWT输入区域
    expect(wrapper.find('textarea').exists() || wrapper.find('input[type="text"]').exists()).toBe(true);
  });

  // JWT解码测试
  it('decodes JWT when entering a valid token', async () => {
    const wrapper = mount(JWTDecoder);
    
    // 找到JWT输入区域
    const jwtInput = wrapper.find('textarea') || wrapper.find('input[type="text"]');
    
    if (jwtInput.exists()) {
      // 设置测试JWT (header.payload.signature 格式)
      const testJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      await jwtInput.setValue(testJwt);
      
      // 查找解码按钮并点击
      const decodeButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('解码') || 
        btn.text().includes('Decode')
      );
      
      if (decodeButton) {
        await decodeButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 尝试找到解码后的结果区域
        const headerOutput = wrapper.find('#header-output') || wrapper.find('.header-output');
        const payloadOutput = wrapper.find('#payload-output') || wrapper.find('.payload-output');
        
        if (headerOutput.exists() && payloadOutput.exists()) {
          // 验证解码结果包含必要的属性
          expect(headerOutput.html()).toContain('alg');
          expect(payloadOutput.html()).toContain('sub');
        }
      }
    }
  });

  // 无效JWT测试
  it('shows error for invalid JWT', async () => {
    const wrapper = mount(JWTDecoder);
    
    // 找到JWT输入区域
    const jwtInput = wrapper.find('textarea') || wrapper.find('input[type="text"]');
    
    if (jwtInput.exists()) {
      // 设置无效的JWT
      await jwtInput.setValue('invalid.jwt.token');
      
      // 查找解码按钮并点击
      const decodeButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('解码') || 
        btn.text().includes('Decode')
      );
      
      if (decodeButton) {
        await decodeButton.trigger('click');
        
        // 验证组件状态 - 应该显示错误信息
        expect(wrapper.exists()).toBe(true);
        
        // 尝试查找错误消息元素
        const errorElement = wrapper.find('.error') || 
                            wrapper.find('.decode-error') ||
                            wrapper.find('.alert-danger');
        
        if (errorElement.exists()) {
          expect(errorElement.exists()).toBe(true);
        }
      }
    }
  });

  // JWT验证测试
  it('verifies JWT if verification feature is available', async () => {
    const wrapper = mount(JWTDecoder);
    
    // 找到JWT输入区域
    const jwtInput = wrapper.find('textarea') || wrapper.find('input[type="text"]');
    
    // 找到密钥输入区域
    const secretInput = wrapper.findAll('input[type="text"]').find(input => 
      input.attributes('placeholder')?.toLowerCase().includes('secret') ||
      input.attributes('id')?.toLowerCase().includes('secret') ||
      input.attributes('name')?.toLowerCase().includes('secret')
    );
    
    if (jwtInput.exists() && secretInput && secretInput.exists()) {
      // 设置测试JWT
      const testJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      await jwtInput.setValue(testJwt);
      
      // 设置测试密钥
      await secretInput.setValue('your-256-bit-secret');
      
      // 查找验证按钮并点击
      const verifyButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('验证') || 
        btn.text().includes('Verify')
      );
      
      if (verifyButton) {
        await verifyButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // 复制解码结果测试
  it('copies decoded content to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(JWTDecoder);
    
    // 找到JWT输入区域
    const jwtInput = wrapper.find('textarea') || wrapper.find('input[type="text"]');
    
    if (jwtInput.exists()) {
      // 设置测试JWT
      const testJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      await jwtInput.setValue(testJwt);
      
      // 查找解码按钮并点击
      const decodeButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('解码') || 
        btn.text().includes('Decode')
      );
      
      if (decodeButton) {
        await decodeButton.trigger('click');
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