import { vi } from 'vitest';
import { config } from '@vue/test-utils';
import { createPinia } from 'pinia';

// 模拟 Vue 组件
const stubs = {
  'router-link': true,
  'font-awesome-icon': true,
  'monaco-editor': true,
  // 可能需要添加其他组件依赖
};

// 设置全局组件模拟
config.global.stubs = stubs;

// 设置全局 mocks
config.global.mocks = {
  $route: {
    params: {},
    query: {}
  },
  $router: {
    push: vi.fn(),
    replace: vi.fn()
  }
};

// 创建测试用的 Pinia 实例
export function getTestPinia() {
  return createPinia();
}

// 配置通用模拟数据
export function getMockData() {
  return {
    tools: [
      {
        id: 'json-formatter',
        name: 'JSON 格式化',
        description: '美化和验证 JSON 数据',
        tags: ['format', 'dev'],
        icon: 'code'
      }
    ],
    tags: [
      { id: 'format', name: '格式化' },
      { id: 'dev', name: '开发' }
    ],
    categories: [
      { id: 'dev', name: '开发工具' }
    ]
  };
} 