import { describe, it, expect, beforeEach } from 'vitest';
import { addToHistory, getHistory, clearHistory } from '../../../src/services/historyService';

describe('historyService', () => {
  // 每次测试前重置localStorage
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return empty array when no history exists', () => {
    const history = getHistory();
    expect(history).toEqual([]);
  });

  it('should add a tool to history', () => {
    const testTool = {
      id: 'test-tool',
      name: '测试工具',
      description: '测试描述',
      icon: 'icon-test',
      categoryId: 'test',
      tags: ['test'],
      component: 'TestComponent'
    };

    addToHistory(testTool);
    const history = getHistory();

    expect(history.length).toBe(1);
    expect(history[0].id).toBe('test-tool');
    expect(history[0].name).toBe('测试工具');
  });

  it('should move existing tool to front when added again', () => {
    // 添加两个工具
    const tool1 = { id: 'tool1', name: 'Tool 1' };
    const tool2 = { id: 'tool2', name: 'Tool 2' };
    
    addToHistory(tool1);
    addToHistory(tool2);
    
    // 再次添加第一个工具
    addToHistory(tool1);
    
    const history = getHistory();
    expect(history.length).toBe(2);
    expect(history[0].id).toBe('tool1'); // 应该移到最前面
  });

  it('should limit history to maximum items', () => {
    // 添加超过最大限制的工具
    for (let i = 1; i <= 10; i++) {
      addToHistory({ id: `tool${i}`, name: `Tool ${i}` });
    }
    
    const history = getHistory();
    expect(history.length).toBe(6); // 最大数量是6
    expect(history[0].id).toBe('tool10'); // 最新添加的应该在前面
  });

  it('should clear history', () => {
    addToHistory({ id: 'test', name: 'Test' });
    clearHistory();
    const history = getHistory();
    expect(history).toEqual([]);
  });
});
