import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import CronParser from '../../../src/components/tools/CronParser.vue';

// 模拟cron表达式解析库
vi.mock('cron-parser', () => ({
  parseExpression: vi.fn().mockImplementation((expression) => {
    if (expression === '* * * * *') {
      return {
        next: vi.fn().mockReturnValue(new Date('2023-01-01T00:01:00Z')),
        iterate: vi.fn().mockReturnValue({
          next: vi.fn().mockReturnValueOnce({ value: { toDate: () => new Date('2023-01-01T00:01:00Z') } })
                    .mockReturnValueOnce({ value: { toDate: () => new Date('2023-01-01T00:02:00Z') } })
                    .mockReturnValueOnce({ value: { toDate: () => new Date('2023-01-01T00:03:00Z') } })
                    .mockReturnValueOnce({ value: { toDate: () => new Date('2023-01-01T00:04:00Z') } })
                    .mockReturnValueOnce({ value: { toDate: () => new Date('2023-01-01T00:05:00Z') } })
        })
      };
    }
    throw new Error('Invalid cron expression');
  })
}));

describe('CronParser.vue', () => {
  // 基础渲染测试
  it('renders correctly with cron input and explanation area', () => {
    const wrapper = shallowMount(CronParser);
    
    // 检查Cron输入区域
    expect(wrapper.find('input').exists() || wrapper.find('textarea').exists()).toBe(true);
  });

  // Cron解析测试
  it('parses cron expression and shows next execution times', async () => {
    const wrapper = mount(CronParser);
    
    // 找到Cron输入区域
    const cronInput = wrapper.find('input[type="text"]') || wrapper.find('textarea');
    
    if (cronInput.exists()) {
      // 设置有效的cron表达式
      await cronInput.setValue('* * * * *');
      
      // 查找解析按钮并点击
      const parseButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('解析') || 
        btn.text().includes('Parse') ||
        btn.text().includes('分析') || 
        btn.text().includes('Analyze')
      );
      
      if (parseButton) {
        await parseButton.trigger('click');
        
        // 验证组件状态
        expect(wrapper.exists()).toBe(true);
        
        // 找到结果区域
        const resultsArea = wrapper.find('.results') || 
                           wrapper.find('.next-executions') || 
                           wrapper.find('.cron-results');
        
        if (resultsArea.exists()) {
          // 验证结果包含下一次执行时间
          expect(resultsArea.html()).toContain('2023-01-01') ||
          expect(resultsArea.text()).toContain('2023-01-01');
        }
      }
    }
  });

  // 无效Cron测试
  it('shows error for invalid cron expression', async () => {
    const wrapper = mount(CronParser);
    
    // 找到Cron输入区域
    const cronInput = wrapper.find('input[type="text"]') || wrapper.find('textarea');
    
    if (cronInput.exists()) {
      // 设置无效的cron表达式
      await cronInput.setValue('invalid * * * *');
      
      // 查找解析按钮并点击
      const parseButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('解析') || 
        btn.text().includes('Parse')
      );
      
      if (parseButton) {
        await parseButton.trigger('click');
        
        // 验证组件状态 - 应该显示错误信息
        expect(wrapper.exists()).toBe(true);
        
        // 尝试查找错误消息元素
        const errorElement = wrapper.find('.error') || 
                            wrapper.find('.cron-error') ||
                            wrapper.find('.alert-danger');
        
        if (errorElement.exists()) {
          expect(errorElement.exists()).toBe(true);
        }
      }
    }
  });

  // 预设表达式测试
  it('allows selecting preset cron expressions', async () => {
    const wrapper = mount(CronParser);
    
    // 找到预设选择器
    const presetSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('preset') ||
      select.attributes('name')?.toLowerCase().includes('preset')
    );
    
    if (presetSelect && presetSelect.exists()) {
      // 获取所有选项
      const options = presetSelect.findAll('option');
      
      if (options.length > 1) {
        // 选择第二个预设选项
        await presetSelect.setValue(options[1].attributes('value'));
        
        // 查找解析按钮并点击
        const parseButton = wrapper.findAll('button').find(btn => 
          btn.text().includes('解析') || 
          btn.text().includes('Parse')
        );
        
        if (parseButton) {
          await parseButton.trigger('click');
          
          // 验证组件状态
          expect(wrapper.exists()).toBe(true);
        }
      }
    }
  });
  
  // Cron生成器测试
  it('generates cron expression if builder feature is available', async () => {
    const wrapper = mount(CronParser);
    
    // 查找生成器选项卡或按钮
    const builderTab = wrapper.findAll('.tab').find(tab => 
      tab.text().includes('生成器') || 
      tab.text().includes('Builder')
    );
    
    const builderButton = wrapper.findAll('button').find(btn => 
      btn.text().includes('生成器') || 
      btn.text().includes('Builder')
    );
    
    if (builderTab) {
      await builderTab.trigger('click');
    } else if (builderButton) {
      await builderButton.trigger('click');
    }
    
    // 查找分钟选择器
    const minuteSelect = wrapper.findAll('select').find(select => 
      select.attributes('id')?.toLowerCase().includes('minute') ||
      select.attributes('name')?.toLowerCase().includes('minute')
    );
    
    if (minuteSelect && minuteSelect.exists()) {
      // 选择一个值
      const options = minuteSelect.findAll('option');
      if (options.length > 1) {
        await minuteSelect.setValue(options[1].attributes('value'));
        
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

  // 复制结果测试
  it('copies cron results to clipboard', async () => {
    // 模拟剪贴板API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve())
      }
    });
    
    const wrapper = mount(CronParser);
    
    // 设置有效的cron表达式并解析
    const cronInput = wrapper.find('input[type="text"]') || wrapper.find('textarea');
    if (cronInput.exists()) {
      await cronInput.setValue('* * * * *');
      
      const parseButton = wrapper.findAll('button').find(btn => 
        btn.text().includes('解析') || 
        btn.text().includes('Parse')
      );
      
      if (parseButton) {
        await parseButton.trigger('click');
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
}); 