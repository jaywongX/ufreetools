<template>
  <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
    <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">高级流程图示例</h3>
    
    <div class="space-y-6">
      <div v-for="(example, index) in examples" :key="index" class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <div class="bg-gray-50 dark:bg-gray-750 p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h4 class="font-medium text-gray-700 dark:text-gray-300">{{ example.title }}</h4>
          <button 
            @click="copyExample(example.code)"
            class="text-primary dark:text-primary-light hover:underline text-sm flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            复制代码
          </button>
        </div>
        <div class="p-4">
          <pre class="bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">{{ example.code }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const examples = ref([
  {
    title: '软件开发流程图',
    code: `graph TD
    A[需求分析] --> B[系统设计]
    B --> C[编码实现]
    C --> D[单元测试]
    D --> E{测试通过?}
    E -->|否| C
    E -->|是| F[系统集成]
    F --> G[系统测试]
    G --> H{测试通过?}
    H -->|否| F
    H -->|是| I[部署上线]
    I --> J[维护更新]
    
    style A fill:#f9d5e5,stroke:#333,stroke-width:2px
    style E fill:#e3f0f7,stroke:#333,stroke-width:2px
    style H fill:#e3f0f7,stroke:#333,stroke-width:2px
    style I fill:#d5f5e3,stroke:#333,stroke-width:2px
    style J fill:#d5f5e3,stroke:#333,stroke-width:2px`
  },
  {
    title: '项目管理甘特图',
    code: `gantt
    title 产品开发项目计划
    dateFormat  YYYY-MM-DD
    axisFormat  %m-%d
    
    section 规划
    市场调研           :a1, 2023-01-01, 15d
    需求分析           :a2, after a1, 10d
    产品规划           :a3, after a2, 5d
    
    section 设计
    原型设计           :b1, after a3, 15d
    UI设计             :b2, after b1, 10d
    用户测试           :b3, after b2, 5d
    
    section 开发
    后端架构           :c1, after b1, 20d
    前端开发           :c2, after b2, 15d
    API集成            :c3, after c1, 10d
    
    section 测试
    单元测试           :d1, after c2, 8d
    集成测试           :d2, after c3, 7d
    性能测试           :d3, after d2, 5d
    
    section 发布
    内部审核           :e1, after d3, 5d
    部署准备           :e2, after e1, 2d
    正式发布           :milestone, after e2, 0d`
  },
  {
    title: '用户注册流程',
    code: `sequenceDiagram
    participant 用户
    participant 前端
    participant 后端
    participant 数据库
    participant 邮件服务
    
    用户->>前端: 填写注册表单
    前端->>前端: 表单验证
    前端->>后端: 提交注册信息
    后端->>后端: 验证用户数据
    后端->>数据库: 检查用户是否存在
    数据库-->>后端: 返回检查结果
    
    alt 用户已存在
        后端-->>前端: 返回用户已存在错误
        前端-->>用户: 显示错误信息
    else 用户不存在
        后端->>数据库: 创建新用户记录
        后端->>邮件服务: 发送验证邮件
        邮件服务-->>用户: 发送包含验证链接的邮件
        后端-->>前端: 返回注册成功
        前端-->>用户: 显示注册成功消息
    end
    
    用户->>邮件服务: 点击验证链接
    邮件服务->>后端: 验证请求
    后端->>数据库: 更新用户状态为已验证
    后端-->>用户: 重定向到登录页面`
  }
])

// 复制示例代码到剪贴板
async function copyExample(code) {
  try {
    await navigator.clipboard.writeText(code)
    alert('代码已复制到剪贴板')
  } catch (error) {
    console.error('复制失败:', error)
    alert('复制失败，请手动复制')
  }
}
</script> 