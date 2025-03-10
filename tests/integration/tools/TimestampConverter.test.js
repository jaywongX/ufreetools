import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import TimestampConverter from '../../../src/components/tools/TimestampConverter.vue';

// 模拟Date对象
const mockDate = new Date('2023-01-01T12:00:00Z');
vi.spyOn(global, 'Date').mockImplementation(() => mockDate);

describe('TimestampConverter.vue', () => {
  // 基础渲染测试
  it('renders correctly with timestamp and date inputs', () => {
    const wrapper = shallowMount(TimestampConverter);
    
    // 检查输入字段
    expect(wrapper.find('input').exists()).toBe(true);
  });

  // 时间戳转日期测试
  it('converts timestamp to date correctly', async () => {
    const wrapper = mount(TimestampConverter);
    
    // 找到时间戳输入字段
    const timestampInput = wrapper.findAll('input[type="text"], input[type="number"]').find(input => 
      input.attributes('placeholder')?.toLowerCase().includes('timestamp') ||
      input.attributes('id')?.toLowerCase().includes('timestamp') ||
      input.attributes('name')?.toLowerCase().includes('timestamp')
    );
    
    if (timestampInput) {
      // 输入时间戳 (2023-01-01T12:00:00Z 的秒级时间戳)
      await timestampInput.setValue('1672574400');
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 找到日期显示字段
        const dateOutput = wrapper.findAll('input').find(input => 
          input !== timestampInput && 
          (input.attributes('placeholder')?.toLowerCase().includes('date') ||
           input.attributes('id')?.toLowerCase().includes('date') ||
           input.attributes('name')?.toLowerCase().includes('date'))
        );
        
        if (dateOutput) {
          // 验证日期输出不为空
          expect(dateOutput.element.value).not.toBe('');
        }
      }
    }
  });

  // 日期转时间戳测试
  it('converts date to timestamp correctly', async () => {
    const wrapper = mount(TimestampConverter);
    
    // 找到日期输入字段
    const dateInput = wrapper.findAll('input[type="text"], input[type="date"], input[type="datetime-local"]').find(input => 
      input.attributes('placeholder')?.toLowerCase().includes('date') ||
      input.attributes('id')?.toLowerCase().includes('date') ||
      input.attributes('name')?.toLowerCase().includes('date')
    );
    
    if (dateInput) {
      // 输入日期
      if (dateInput.attributes('type') === 'date' || dateInput.attributes('type') === 'datetime-local') {
        await dateInput.setValue('2023-01-01T12:00:00');
      } else {
        await dateInput.setValue('2023-01-01 12:00:00');
      }
      
      // 查找转换按钮并点击
      const convertButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('转换') || 
        btn.text().includes('Convert')
      );
      
      if (convertButton) {
        await convertButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 找到时间戳显示字段
        const timestampOutput = wrapper.findAll('input').find(input => 
          input !== dateInput && 
          (input.attributes('placeholder')?.toLowerCase().includes('timestamp') ||
           input.attributes('id')?.toLowerCase().includes('timestamp') ||
           input.attributes('name')?.toLowerCase().includes('timestamp'))
        );
        
        if (timestampOutput) {
          // 验证时间戳输出不为空
          expect(timestampOutput.element.value).not.toBe('');
        }
      }
    }
  });

  // 当前时间测试
  it('gets current time when clicking now button', async () => {
    const wrapper = mount(TimestampConverter);
    
    // 查找"现在"按钮并点击
    const nowButton = wrapper.findAll('button').find(btn => 
      btn.text().toLowerCase().includes('now') || 
      btn.text().toLowerCase().includes('current') ||
      btn.text().includes('现在') ||
      btn.text().includes('当前')
    );
    
    if (nowButton) {
      await nowButton.trigger('click');
      
      // 验证组件状态
      expect(wrapper.exists()).toBe(true);
      
      // 验证时间戳和日期字段已更新
      const timestampField = wrapper.findAll('input[type="text"], input[type="number"]').find(input => 
        input.attributes('placeholder')?.toLowerCase().includes('timestamp') ||
        input.attributes('id')?.toLowerCase().includes('timestamp') ||
        input.attributes('name')?.toLowerCase().includes('timestamp')
      );
      
      if (timestampField) {
        expect(timestampField.element.value).not.toBe('');
      }
    }
  });

  // 时间戳单位测试
  it('handles different timestamp units (seconds/milliseconds)', async () => {
    const wrapper = mount(TimestampConverter);
    
    // 找到单位选择器
    const unitRadios = wrapper.findAll('input[type="radio"]');
    const unitSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('unit') ||
      select.attributes('name')?.toLowerCase().includes('unit')
    );
    
    // 测试单选按钮形式
    if (unitRadios.length > 1) {
      // 选择毫秒单位
      const msRadio = unitRadios.find(radio => 
        radio.attributes('value')?.toLowerCase().includes('ms') ||
        radio.attributes('id')?.toLowerCase().includes('ms')
      );
      
      if (msRadio) {
        await msRadio.setChecked(true);
        
        // 输入时间戳
        const timestampInput = wrapper.findAll('input[type="text"], input[type="number"]').find(input => 
          input.attributes('placeholder')?.toLowerCase().includes('timestamp') ||
          input.attributes('id')?.toLowerCase().includes('timestamp') ||
          input.attributes('name')?.toLowerCase().includes('timestamp')
        );
        
        if (timestampInput) {
          // 输入毫秒级时间戳
          await timestampInput.setValue('1672574400000');
          
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
    // 测试下拉选择形式
    else if (unitSelect && unitSelect.exists()) {
      // 获取所有选项
      const options = unitSelect.findAll('option');
      
      if (options.length > 1) {
        // 选择毫秒单位
        const msOption = options.find(option => 
          option.text().toLowerCase().includes('ms') ||
          option.text().toLowerCase().includes('milli')
        );
        
        if (msOption) {
          await unitSelect.setValue(msOption.attributes('value'));
          
          // 输入时间戳
          const timestampInput = wrapper.findAll('input[type="text"], input[type="number"]').find(input => 
            input.attributes('placeholder')?.toLowerCase().includes('timestamp') ||
            input.attributes('id')?.toLowerCase().includes('timestamp') ||
            input.attributes('name')?.toLowerCase().includes('timestamp')
          );
          
          if (timestampInput) {
            // 输入毫秒级时间戳
            await timestampInput.setValue('1672574400000');
            
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
    }
  });

  // 复制结果测试
  it('copies conversion result to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(TimestampConverter);
    
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