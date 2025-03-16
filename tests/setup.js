import { vi } from 'vitest';

// 创建全局 localStorage 模拟
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
  key: vi.fn()
};

// 为每个测试设置新的 localStorage
beforeEach(() => {
  global.localStorage = {
    ...localStorageMock,
    getItem: vi.fn(key => {
      return null;
    }),
    setItem: vi.fn((key, value) => {
      return undefined;
    })
  };
}); 