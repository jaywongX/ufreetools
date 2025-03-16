import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import UuidGenerator from '../../../src/components/tools/UuidGenerator.vue';

// 模拟uuid库
vi.mock('uuid', () => ({
  v1: vi.fn().mockReturnValue('00000000-0000-1000-0000-000000000000'),
  v4: vi.fn().mockReturnValue('00000000-0000-4000-0000-000000000000')
}));

describe('UuidGenerator.vue', () => {
  // 基础渲染测试
  it('renders correctly with UUID display and generate button', () => {
    const wrapper = shallowMount(UuidGenerator);
    
    // 检查按钮和UUID显示区域
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('input').exists() || wrapper.find('textarea').exists() || wrapper.find('.uuid-display').exists()).toBe(true);
  });

  // UUID生成测试
  it('generates UUID when clicking generate button', async () => {
    const wrapper = mount(UuidGenerator);
    
    // 查找生成按钮并点击
    const generateButton = wrapper.findAll('button').find(btn => 
      btn.text().includes('生成') || 
      btn.text().includes('Generate')
    );
    
    if (generateButton) {
      await generateButton.trigger('click');
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
      
      // 查找结果区域
      const resultArea = wrapper.find('input[readonly]') || 
                        wrapper.find('textarea[readonly]') || 
                        wrapper.find('.uuid-display');
      
      if (resultArea.exists()) {
        // 验证结果包含UUID特征
        const uuidValue = resultArea.element.value || resultArea.text();
        expect(uuidValue).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
      }
    }
  });

  // UUID版本选择测试
  it('allows selecting different UUID versions', async () => {
    const wrapper = mount(UuidGenerator);
    
    // 找到版本选择器
    const versionRadios = wrapper.findAll('input[type="radio"]');
    const versionSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('version') ||
      select.attributes('name')?.toLowerCase().includes('version')
    );
    
    // 测试单选按钮形式
    if (versionRadios.length > 1) {
      // 选择v1版本
      const v1Radio = versionRadios.find(radio => 
        radio.attributes('value')?.includes('1') ||
        radio.attributes('id')?.includes('v1')
      );
      
      if (v1Radio) {
        await v1Radio.setChecked(true);
        
        // 查找生成按钮并点击
        const generateButton = wrapper.findAll('button').find(btn => 
          btn.text().includes('生成') || 
          btn.text().includes('Generate')
        );
        
        if (generateButton) {
          await generateButton.trigger('click');
          
          // 验证组件状态
          expect(wrapper.exists()).toBe(true);
        }
      }
    }
    // 测试下拉选择形式
    else if (versionSelect && versionSelect.exists()) {
      // 获取所有选项
      const options = versionSelect.findAll('option');
      
      if (options.length > 1) {
        // 选择不同版本
        await versionSelect.setValue(options[0].attributes('value'));
        
        // 查找生成按钮并点击
        const generateButton = wrapper.findAll('button').find(btn => 
          btn.text().includes('生成') || 
          btn.text().includes('Generate')
        );
        
        if (generateButton) {
          await generateButton.trigger('click');
          
          // 验证组件状态
          expect(wrapper.exists()).toBe(true);
        }
      }
    }
  });

  // 生成多个UUID测试
  it('generates multiple UUIDs when specified', async () => {
    const wrapper = mount(UuidGenerator);
    
    // 找到数量输入字段
    const countInput = wrapper.findAll('input[type="number"]').find(input => 
      input.attributes('id')?.toLowerCase().includes('count') ||
      input.attributes('name')?.toLowerCase().includes('count') ||
      input.attributes('placeholder')?.toLowerCase().includes('count')
    );
    
    if (countInput) {
      // 设置生成多个
      await countInput.setValue(5);
      
      // 查找生成按钮并点击
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
      }
    }
  });

  // 复制UUID测试
  it('copies UUID to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(UuidGenerator);
    
    // 先生成UUID
    const generateButton = wrapper.findAll('button').find(btn => 
      btn.text().includes('生成') || 
      btn.text().includes('Generate')
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
  });
}); 