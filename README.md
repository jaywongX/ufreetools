# uFreeTools - 在线工具集合平台

uFreeTools 是一个全面的在线工具集合平台，提供超过 50 种免费实用工具，涵盖开发、设计、媒体处理、文本编辑等多个领域。所有工具在浏览器中运行，无需下载安装，注重用户隐私和数据安全。

![uFreeTools 平台截图](./public/screenshot.png)

## 🚀 功能特点

- **完全在线，零安装**：所有工具在浏览器中运行，无需下载、安装或注册
- **隐私保护**：数据处理在本地完成，文件不会上传至服务器
- **丰富多样的工具集**：涵盖 8 大类别，满足不同用户的需求
- **响应式设计**：适配桌面和移动设备，随时随地使用
- **暗色模式**：支持明亮和暗黑主题切换，保护眼睛
- **高性能**：工具经过优化，快速加载，即时响应

## 🛠️ 工具分类

平台提供八大类工具：

- **开发工具**：代码格式化、正则表达式测试、JSON格式化等
- **设计工具**：渐变生成器、调色板生成、SVG优化器等
- **文本处理**：Markdown编辑器、XML格式化、CSS格式化等
- **图像多媒体**：图片压缩、裁剪、滤镜、水印添加等
- **转换工具**：Base64编解码、CSV转JSON、进制转换等
- **网络协议**：API请求工具、HTTP状态码查询、IP地址查询等
- **密码安全**：密码生成器、密码强度检测、加密解密工具等
- **实用效率**：二维码生成、计算器、日期计算等

## 🔧 技术栈

- **前端框架**：Vue 3.5+ + Vue Router 4
- **UI/样式**：Tailwind CSS
- **构建工具**：Vite 6.2+
- **依赖管理**：npm

## 📂 项目结构

```
src/
├── assets/         # 静态资源（图片、CSS等）
├── components/     # Vue组件
│   ├── layout/     # 布局组件
│   ├── tools/      # 工具组件
│   └── ui/         # UI组件
├── pages/          # 页面组件
├── App.vue         # 应用主组件
└── main.js         # 入口文件
```

## 🚀 安装与部署

### 环境要求

- Node.js 16.x 或更高版本
- npm 7.x 或更高版本

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/yourusername/ufreetools.git

# 进入项目目录
cd ufreetools

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

开发服务器启动后，访问 http://localhost:5173 即可查看应用。

### 生产构建

```bash
# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

构建完成后，生产文件将生成在 `dist` 目录中。

## 🌐 部署到 Vercel

### 方法一：使用 Vercel CLI（推荐开发者使用）

1. **安装 Vercel CLI**

```bash
npm install -g vercel
```

2. **登录 Vercel 账户**

```bash
vercel login
```

3. **部署项目**

在项目根目录下执行：

```bash
vercel
```

首次部署时，CLI 会引导你完成项目配置：
- 确认项目设置
- 选择团队或个人账户
- 设置项目名称和部署环境

4. **生产环境部署**

```bash
vercel --prod
```

### 方法二：通过 GitHub 仓库部署（推荐团队使用）

1. **将项目推送到 GitHub**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **在 Vercel 中导入项目**

- 访问 [Vercel 仪表板](https://vercel.com/dashboard)
- 点击 "New Project"
- 选择 "Import Git Repository"
- 选择你的 GitHub 仓库
- 点击 "Import"

3. **配置项目设置**

- **框架预设**: 选择 "Vue.js"
- **构建命令**: `npm run build`
- **输出目录**: `dist`
- **环境变量**: 如需要，添加环境变量

4. **部署项目**

点击 "Deploy"，Vercel 会自动构建和部署你的项目。

### Vercel 部署优势

- **全球 CDN**: 自动分发到全球边缘网络
- **HTTPS**: 自动为自定义域名配置 SSL
- **CI/CD**: 与 Git 集成，自动部署
- **预览部署**: 每个 PR 都有独立的预览环境
- **零配置**: 自动检测 Vue.js 项目并优化部署

### 自定义域名配置

1. 在 Vercel 仪表板中，选择你的项目
2. 进入 "Settings" > "Domains"
3. 点击 "Add" 添加你的域名
4. 按照说明配置 DNS 记录

## 🤝 贡献指南

1. Fork 此仓库
2. 创建你的功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的修改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建一个 Pull Request

## 📝 开发新工具

如要开发新工具，请遵循以下步骤：

1. 在 `src/components/tools/` 目录下创建
