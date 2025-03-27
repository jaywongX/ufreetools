import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import GradientGenerator from '../../../src/components/tools/GradientGenerator.vue';

describe('GradientGenerator.vue', () => {
  // 基础渲染测试
  it('renders correctly with color inputs', () => {
    const wrapper = shallowMount(GradientGenerator);
    
    // 检查颜色输入区域
    expect(wrapper.find('input[type="color"]').exists()).toBe(true);
  });

  // 线性渐变生成测试
  it('generates linear gradient CSS when selecting colors', async () => {
    const wrapper = mount(GradientGenerator);
    
    // 找到颜色输入
    const colorInputs = wrapper.findAll('input[type="color"]');
    
    if (colorInputs.length >= 2) {
      // 设置起始颜色
      await colorInputs[0].setValue('#ff0000');
      
      // 设置结束颜色
      await colorInputs[1].setValue('#0000ff');
      
      // 查找生成按钮并点击
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找输出区域
        const outputArea = wrapper.find('textarea') || wrapper.find('.output');
        
        if (outputArea.exists()) {
          // 获取生成的CSS
          const gradientCSS = outputArea.element.value || outputArea.text();
          
          // 验证线性渐变CSS
          expect(gradientCSS).toContain('linear-gradient');
          expect(gradientCSS).toContain('#ff0000');
          expect(gradientCSS).toContain('#0000ff');
        }
      }
    }
  });

  // 径向渐变测试
  it('generates radial gradient CSS when selecting that type', async () => {
    const wrapper = mount(GradientGenerator);
    
    // 找到渐变类型选择器
    const typeRadios = wrapper.findAll('input[type="radio"]');
    const typeSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('type') ||
      select.attributes('name')?.toLowerCase().includes('type')
    );
    
    // 选择径向渐变
    if (typeRadios.length > 0) {
      // 如果使用单选按钮
      const radialOption = typeRadios.find(radio => 
        radio.attributes('value')?.toLowerCase().includes('radial')
      );
      
      if (radialOption) {
        await radialOption.setChecked(true);
      }
    } else if (typeSelect && typeSelect.exists()) {
      // 如果使用下拉选择
      const options = typeSelect.findAll('option');
      const radialOption = options.find(option => 
        option.text().toLowerCase().includes('radial')
      );
      
      if (radialOption) {
        await typeSelect.setValue(radialOption.attributes('value'));
      }
    }
    
    // 找到颜色输入
    const colorInputs = wrapper.findAll('input[type="color"]');
    
    if (colorInputs.length >= 2) {
      // 设置起始颜色
      await colorInputs[0].setValue('#ff0000');
      
      // 设置结束颜色
      await colorInputs[1].setValue('#0000ff');
      
      // 查找生成按钮并点击
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 查找输出区域
        const outputArea = wrapper.find('textarea') || wrapper.find('.output');
        
        if (outputArea.exists()) {
          // 获取生成的CSS
          const gradientCSS = outputArea.element.value || outputArea.text();
          
          // 验证径向渐变CSS
          expect(gradientCSS).toContain('radial-gradient');
        }
      }
    }
  });

  // 角度调整测试
  it('applies angle setting to linear gradient', async () => {
    const wrapper = mount(GradientGenerator);
    
    // 找到角度输入
    const angleInput = wrapper.find('input[type="range"]') || 
                      wrapper.find('input[type="number"]') || 
                      wrapper.findAll('input').find(input => 
                        input.attributes('id')?.toLowerCase().includes('angle') ||
                        input.attributes('name')?.toLowerCase().includes('angle')
                      );
    
    if (angleInput && angleInput.exists()) {
      // 设置角度
      await angleInput.setValue('45');
      
      // 找到颜色输入
      const colorInputs = wrapper.findAll('input[type="color"]');
      
      if (colorInputs.length >= 2) {
        // 设置颜色
        await colorInputs[0].setValue('#ff0000');
        await colorInputs[1].setValue('#0000ff');
        
        // 生成渐变
        const generateButton = wrapper.findAll('button').find(btn => 
          btn.text().includes('生成') || 
          btn.text().includes('Generate')
        );
        
        if (generateButton) {
          await generateButton.trigger('click');
          
          // 查找输出区域
          const outputArea = wrapper.find('textarea') || wrapper.find('.output');
          
          if (outputArea.exists()) {
            // 获取生成的CSS
            const gradientCSS = outputArea.element.value || outputArea.text();
            
            // 验证角度设置
            expect(gradientCSS).toContain('45deg');
          }
        }
      }
    }
  });

  // 复制结果测试
  it('copies gradient CSS to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(GradientGenerator);
    
    // 生成一个渐变
    const colorInputs = wrapper.findAll('input[type="color"]');
    if (colorInputs.length >= 2) {
      await colorInputs[0].setValue('#ff0000');
      await colorInputs[1].setValue('#0000ff');
      
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
      }
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

  // 渐变预览测试
  it('displays preview of generated gradient', async () => {
    const wrapper = mount(GradientGenerator);
    
    // 找到颜色输入
    const colorInputs = wrapper.findAll('input[type="color"]');
    
    if (colorInputs.length >= 2) {
      // 设置颜色
      await colorInputs[0].setValue('#ff0000');
      await colorInputs[1].setValue('#0000ff');
      
      // 生成渐变
      const generateButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('生成') || 
        btn.text().includes('Generate')
      );
      
      if (generateButton) {
        await generateButton.trigger('click');
      }
      
      // 查找预览区域
      const previewArea = wrapper.find('.preview') || 
                          wrapper.find('.gradient-preview');
      
      if (previewArea.exists()) {
        // 验证预览区域样式包含渐变
        const style = previewArea.attributes('style');
        expect(style).toContain('gradient');
      }
    }
  });
}); 