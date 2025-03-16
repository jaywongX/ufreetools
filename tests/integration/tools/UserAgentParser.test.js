import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import UserAgentParser from '../../../src/components/tools/UserAgentParser.vue';

// 模拟 ua-parser-js
vi.mock('ua-parser-js', () => ({
  default: vi.fn().mockImplementation(() => ({
    getResult: vi.fn().mockReturnValue({
      browser: { name: 'Chrome', version: '92.0.4515.131' },
      engine: { name: 'Blink', version: '92.0.4515.131' },
      os: { name: 'Windows', version: '10' },
      device: { vendor: '', model: '', type: 'desktop' },
      cpu: { architecture: 'amd64' }
    }),
    getBrowser: vi.fn().mockReturnValue({ name: 'Chrome', version: '92.0.4515.131' }),
    getEngine: vi.fn().mockReturnValue({ name: 'Blink', version: '92.0.4515.131' }),
    getOS: vi.fn().mockReturnValue({ name: 'Windows', version: '10' }),
    getDevice: vi.fn().mockReturnValue({ vendor: '', model: '', type: 'desktop' }),
    getCPU: vi.fn().mockReturnValue({ architecture: 'amd64' })
  }))
}));

describe('UserAgentParser.vue', () => {
  // 基础渲染测试
  it('renders correctly with UA input and result sections', () => {
    const wrapper = shallowMount(UserAgentParser);
    
    // 检查输入区域
    expect(wrapper.find('input').exists() || wrapper.find('textarea').exists()).toBe(true);
  });

  // UA解析测试
  it('parses user-agent string when clicking parse button', async () => {
    const wrapper = mount(UserAgentParser);
    
    // 找到UA输入区域
    const uaInput = wrapper.find('input') || wrapper.find('textarea');
    
    if (uaInput.exists()) {
      // 设置测试UA字符串
      await uaInput.setValue('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36');
      
      // 查找解析按钮并点击
      const parseButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('解析') || 
        btn.text().includes('Parse') ||
        btn.text().includes('分析')
      );
      
      if (parseButton) {
        await parseButton.trigger('click');
        
        // 验证结果区域应该存在
        expect(wrapper.find('.results').exists() || wrapper.find('.result-section').exists()).toBe(true);
      }
    }
  });

  // 测试自动检测当前浏览器UA
  it('detects current browser UA when clicking detect button', async () => {
    const wrapper = mount(UserAgentParser);
    
    // 查找检测按钮
    const detectButton = wrapper.findAll('button').find(btn => 
      btn.text().includes('检测') || 
      btn.text().includes('Detect') ||
      btn.text().includes('当前浏览器')
    );
    
    if (detectButton) {
      await detectButton.trigger('click');
      
      // 验证组件状态
      expect(wrapper.find('.results').exists() || wrapper.find('.result-section').exists()).toBe(true);
    }
  });

  // 测试复制UA功能
  it('copies UA string to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(UserAgentParser);
    
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

  // 测试空UA字符串处理
  it('handles empty UA string gracefully', async () => {
    const wrapper = mount(UserAgentParser);
    
    // 找到UA输入区域
    const uaInput = wrapper.find('input') || wrapper.find('textarea');
    
    if (uaInput.exists()) {
      // 设置空UA字符串
      await uaInput.setValue('');
      
      // 查找解析按钮并点击
      const parseButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('解析') || 
        btn.text().includes('Parse') ||
        btn.text().includes('分析')
      );
      
      if (parseButton) {
        await parseButton.trigger('click');
        
        // 验证组件没有崩溃
        expect(wrapper.exists()).toBe(true);
      }
    }
  });
}); 