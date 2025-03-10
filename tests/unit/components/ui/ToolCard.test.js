import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import ToolCard from '../../../../src/components/ui/ToolCard.vue';

// 模拟 Vue Router
vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: vi.fn()
  })
}));

describe('ToolCard.vue', () => {
  it('renders tool information correctly', () => {
    const tool = {
      id: 'json-formatter',
      name: 'JSON 格式化',
      description: '美化、压缩和验证 JSON 数据',
      icon: 'code',
      tags: ['format', 'dev']
    };
    
    const wrapper = mount(ToolCard, {
      props: { tool },
      global: {
        // 提供更完整的模拟
        stubs: {
          'router-link': {
            template: '<a><slot /></a>'
          }
        }
      }
    });
    
    expect(wrapper.text()).toContain('JSON 格式化');
    expect(wrapper.text()).toContain('美化、压缩和验证 JSON 数据');
  });

  it('emits tag-click event when a tag is clicked', async () => {
    const tool = {
      id: 'json-formatter',
      name: 'JSON 格式化',
      tags: ['format', 'dev']
    };
    
    const wrapper = mount(ToolCard, {
      props: { tool },
      global: {
        stubs: ['router-link']
      }
    });
    
    const tagElement = wrapper.find('.tag-badge');
    await tagElement.trigger('click');
    
    expect(wrapper.emitted('tag-click')).toBeTruthy();
    expect(wrapper.emitted('tag-click')[0]).toEqual(['format']);
  });
});
