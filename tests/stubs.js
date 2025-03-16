// 常用组件模拟
export const componentStubs = {
  'router-link': {
    template: '<a><slot /></a>',
    props: ['to']
  },
  'ToolCard': {
    template: '<div class="tool-card-stub"><slot /></div>',
    props: ['tool']
  },
  'TagBadge': {
    template: '<span class="tag-badge-stub"><slot /></span>',
    props: ['tag']
  },
  'TagFilter': {
    template: '<div class="tag-filter-stub"></div>'
  }
};

// 创建一个全局模拟
export function createGlobalMocks() {
  return {
    provide: {
      allTools: { value: [] },
      allTags: { value: [] },
      categories: [],
      toolsByTag: {}
    },
    stubs: componentStubs
  };
} 