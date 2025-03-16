import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import HomePage from '../../../src/pages/HomePage.vue';
import { addToHistory } from '../../../src/services/historyService';
import { ref } from 'vue';

// 模拟路由
vi.mock('vue-router', () => ({
  useRoute: () => ({
    query: {}
  }),
  useRouter: () => ({
    replace: vi.fn()
  })
}));

describe('HomePage.vue', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should display recent tools section when history exists', async () => {
    // 添加一些历史记录
    const testTool = {
      id: 'test-tool',
      name: '测试工具',
      description: '测试工具描述',
      tags: ['test']
    };
    addToHistory(testTool);
    
    const wrapper = mount(HomePage, {
      global: {
        provide: {
          // 使用 ref 包装数据
          allTools: ref([testTool]),
          allTags: ref([{ id: 'test', name: '测试' }]),
          categories: [{ id: 'test', name: '测试分类' }],
          toolsByTag: { test: [testTool] }
        },
        stubs: {
          'router-link': true,
          'ToolCard': true,
          'TagFilter': true
        }
      }
    });
    
    // 检查"最近使用"部分是否存在
    expect(wrapper.html()).toContain('最近使用');
  });
});
