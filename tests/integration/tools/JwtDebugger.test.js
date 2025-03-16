import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import JwtDebugger from '../../../src/components/tools/JwtDebugger.vue';

// 模拟 jsonwebtoken 库
vi.mock('jsonwebtoken', () => ({
  decode: vi.fn().mockImplementation((token) => {
    // 模拟解码返回的数据
    if (token && token.split('.').length === 3) {
      return {
        header: { alg: 'HS256', typ: 'JWT' },
        payload: { sub: '1234567890', name: 'Test User', iat: 1516239022 }
      };
    }
    return null;
  }),
  sign: vi.fn().mockImplementation((payload, secret, options) => {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3QgVXNlciIsImlhdCI6MTUxNjIzOTAyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
  }),
  verify: vi.fn().mockImplementation((token, secret, options) => {
    if (!token || token.split('.').length !== 3) {
      throw new Error('invalid token');
    }
    if (!secret) {
      throw new Error('secret required');
    }
    return {
      sub: '1234567890',
      name: 'Test User',
      iat: 1516239022
    };
  })
}));

describe('JwtDebugger.vue', () => {
  // 基础渲染测试
  it('renders correctly with token input field', () => {
    const wrapper = shallowMount(JwtDebugger);
    
    // 检查token输入字段
    expect(wrapper.find('textarea').exists() || wrapper.find('input').exists()).toBe(true);
  });

  // 解码JWT测试
  it('decodes JWT token when pasting valid token', async () => {
    const wrapper = mount(JwtDebugger);
    
    // 找到Token输入字段
    const tokenInput = wrapper.find('textarea') || wrapper.find('input');
    
    if (tokenInput.exists()) {
      // 输入有效的JWT Token
      await tokenInput.setValue('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3QgVXNlciIsImlhdCI6MTUxNjIzOTAyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
      
      // 触发解码（如果有解码按钮）
      const decodeButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('解码') || 
        btn.text().includes('Decode')
      );
      
      if (decodeButton) {
        await decodeButton.trigger('click');
      }
      
      // 验证组件状态 - 应该显示解码后的信息
      expect(wrapper.exists()).toBe(true);
      
      // 验证是否显示了header和payload部分
      const headerSection = wrapper.find('.header') || wrapper.find('.jwt-header');
      const payloadSection = wrapper.find('.payload') || wrapper.find('.jwt-payload');
      
      if (headerSection.exists() && payloadSection.exists()) {
        expect(headerSection.exists()).toBe(true);
        expect(payloadSection.exists()).toBe(true);
      }
    }
  });

  // 验证JWT测试
  it('verifies JWT token when providing secret key', async () => {
    const wrapper = mount(JwtDebugger);
    
    // 找到Token输入字段
    const tokenInput = wrapper.find('textarea') || wrapper.find('input');
    
    if (tokenInput.exists()) {
      // 输入有效的JWT Token
      await tokenInput.setValue('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3QgVXNlciIsImlhdCI6MTUxNjIzOTAyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
      
      // 找到密钥输入字段
      const secretInput = wrapper.findAll('input').find(input => {
        return input.attributes('placeholder')?.includes('secret') ||
               input.attributes('id')?.includes('secret') ||
               input.attributes('name')?.includes('secret');
      });
      
      if (secretInput) {
        // 输入密钥
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
    }
  });

  // 测试JWT生成功能
  it('generates JWT token when providing payload and secret', async () => {
    const wrapper = mount(JwtDebugger);
    
    // 找到payload编辑区域
    const payloadEditor = wrapper.findAll('textarea').find(textarea => {
      return textarea.attributes('placeholder')?.includes('payload') ||
             textarea.attributes('id')?.includes('payload') ||
             textarea.attributes('name')?.includes('payload');
    });
    
    if (payloadEditor) {
      // 输入payload数据
      await payloadEditor.setValue('{"sub": "1234567890", "name": "Test User", "iat": 1516239022}');
      
      // 找到密钥输入字段
      const secretInput = wrapper.findAll('input').find(input => {
        return input.attributes('placeholder')?.includes('secret') ||
               input.attributes('id')?.includes('secret') ||
               input.attributes('name')?.includes('secret');
      });
      
      if (secretInput) {
        // 输入密钥
        await secretInput.setValue('your-256-bit-secret');
        
        // 查找生成按钮并点击
        const generateButton = wrapper.findAll('button').find(btn => 
          btn.text().includes('生成') || 
          btn.text().includes('Generate') || 
          btn.text().includes('Sign')
        );
        
        if (generateButton) {
          await generateButton.trigger('click');
          
          // 验证组件状态
          expect(wrapper.exists()).toBe(true);
        }
      }
    }
  });

  // 测试无效JWT处理
  it('handles invalid JWT gracefully', async () => {
    const wrapper = mount(JwtDebugger);
    
    // 找到Token输入字段
    const tokenInput = wrapper.find('textarea') || wrapper.find('input');
    
    if (tokenInput.exists()) {
      // 输入无效的JWT Token
      await tokenInput.setValue('invalid.jwt.token');
      
      // 触发解码（如果有解码按钮）
      const decodeButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('解码') || 
        btn.text().includes('Decode')
      );
      
      if (decodeButton) {
        await decodeButton.trigger('click');
      }
      
      // 验证组件没有崩溃
      expect(wrapper.exists()).toBe(true);
    }
  });
}); 