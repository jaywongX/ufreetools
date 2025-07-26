export default {
  name: 'Markdown编辑器',
  description: '编辑和实时预览Markdown文档',

  options: {
    mode: '模式',
    syntaxHighlighting: '语法高亮',
    autoSave: '自动保存',
    lineNumbers: '行号',
    spellCheck: '拼写检查',
    wordWrap: '自动换行'
  },

  modes: {
    split: '分屏视图',
    edit: '仅编辑',
    preview: '仅预览'
  },

  actions: {
    bold: '粗体',
    italic: '斜体',
    strikethrough: '删除线',
    heading: '标题',
    link: '链接',
    image: '图片',
    list: '列表',
    quote: '引用',
    code: '代码',
    table: '表格',
    hr: '水平分割线',
    preview: '预览',
    copy: '复制',
    clear: '清除',
    download: '下载Markdown',
    downloadHTML: '下载HTML',
    upload: '上传Markdown'
  },

  messages: {
    copied: 'Markdown内容已复制到剪贴板！',
    copyError: '复制失败，请手动复制',
    clearConfirm: '确定要清空编辑器内容吗？',
    templateConfirm: '应用模板将替换当前内容，确定继续吗？',
    templateApplied: '已应用"{name}"模板',
    saved: '文档已保存',
    uploadSuccess: '文档上传成功',
    uploadError: '上传文档时出错',
    wordCount: '{count}个单词',
    charCount: '{count}个字符'
  },

  placeholder: '在这里输入Markdown内容...',

  placeholders: {
    linkText: '链接文字',
    imageAlt: '图片描述'
  },

  templates: {
    title: '快速模板',
    apply: '应用模板',
    confirm: '确认应用',
    simple: {
      name: '简单文档',
      description: '包含标题、列表、引用等',
      content: `# 文档标题

## 简介
这是一个简单的Markdown文档示例。

## 特性
- 支持标题和段落
- 支持**粗体**和*斜体*
- 支持有序和无序列表

> 这是一个引用块，用于引用他人的观点。

## 结论
Markdown是一种简单易用的标记语言。`
    },
    readme: {
      name: '项目README',
      description: '项目文档标准结构',
      content: `# 项目名称

## 项目简介
简短描述项目的主要功能和用途。

## 功能特点
- 主要功能点1
- 主要功能点2
- 主要功能点3

## 安装说明
\`\`\`
# 安装依赖
npm install

# 启动开发服务器
npm run dev
\`\`\`

## 使用示例
\`\`\`
// 示例代码
const example = new Example();
example.init();
\`\`\`

## 文档
更多详细文档请参考文档链接。

## 贡献指南
欢迎贡献代码，请参阅贡献指南。

## 许可证
本项目基于MIT许可证发布，详细信息请参阅LICENSE文件。`
    },
    resume: {
      name: '个人简历',
      description: '个人简历模板',
      content: `# 个人简历

## 个人信息
- 姓名：张三
- 电话：138xxxx1234
- 邮箱：zhangsan123@example.com
- 求职意向：前端开发工程师

## 教育背景
大学名称，计算机科学与技术，2016年9月至2020年6月

## 工作经历
### 科技公司，前端开发工程师，2020年7月至今
- 负责公司核心产品的前端开发与维护
- 使用Vue.js开发企业管理系统，提升用户体验
- 优化前端性能，减少页面加载时间30%

### 科技公司，前端开发实习生，2019年7月至2020年6月
- 参与公司官网改版项目
- 协助团队进行代码重构与优化

## 技术技能
- 前端开发：HTML, CSS, JavaScript, Vue.js, React
- 后端开发：Node.js, Express
- 其他工具：Git, Webpack, Docker

## 项目经验
### 企业管理系统
- 使用Vue.js开发的企业内部管理系统
- 实现了数据可视化、权限管理等功能
- 优化了系统响应速度，提升用户体验

## 语言能力
- 英语（熟练）
- 日语（基础）`
    },
    meeting: {
      name: '会议记录',
      description: '会议记录模板',
      content: `# 会议记录

## 会议信息
- 主题：项目进度讨论
- 日期：2023年5月15日
- 时间：14:00至16:00
- 地点：公司会议室A
- 主持人：张经理
- 记录人：李助理

## 参会人员
- 张经理（产品部）
- 王工程师（研发部）
- 李设计师（设计部）
- 赵测试（测试部）

## 议程
1. 回顾上周工作完成情况
2. 讨论本周工作计划
3. 解决项目中存在的问题
4. 确定下一步工作方向

## 讨论内容
### 1. 上周工作回顾
- 产品需求文档已完成
- 设计稿已完成60%
- 前端开发已完成基础框架搭建

### 2. 本周工作计划
- 设计部完成剩余设计稿
- 研发部开始核心功能开发
- 测试部准备测试用例

### 3. 问题与解决方案
- 问题：数据接口设计不合理
- 解决方案：由王工程师重新设计接口，并在周三前提交

## 下次会议
- 日期：2023年5月22日
- 时间：14:00至15:00`
    }
  },

  dialogs: {
    clear: {
      title: '清空编辑器',
      message: '确定要清空编辑器内容吗？'
    },
    template: {
      title: '应用模板',
      message: '应用模板将替换当前内容，确定继续吗？'
    }
  },

  defaultContent: `# 欢迎使用Markdown编辑器

这是一个简单的Markdown编辑器，支持实时预览和语法高亮。

## 基本语法

### 标题
使用 # 符号表示标题，例如：
# 一级标题
## 二级标题
### 三级标题

### 强调
**粗体** 或 __粗体__
*斜体* 或 _斜体_
~~删除线~~

### 列表
无序列表:
- 项目1
- 项目2
- 项目3

有序列表:
1. 第一项
2. 第二项
3. 第三项

### 链接和图片
[链接文本](https://example.com)
![图片描述](https://example.com/image.jpg)

### 代码
行内代码: \`var example = "hello";\`

### 引用
> 这是一个引用段落。

### 表格
| 表头1 | 表头2 | 表头3 |
|-------|-------|-------|
| 单元格1 | 单元格2 | 单元格3 |
| 单元格4 | 单元格5 | 单元格6 |

### 水平线
---

开始编辑吧！你可以使用上方的工具栏快速插入各种Markdown元素。`
}; 