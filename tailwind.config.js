/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 支持暗色模式
  theme: {
    extend: {
      colors: {
        // 定义我们的主色调
        primary: {
          DEFAULT: '#3182CE',
          light: '#63B3ED',
          dark: '#2C5282',
        },
        secondary: {
          DEFAULT: '#4A5568',
          light: '#A0AEC0',
          dark: '#2D3748',
        },
        // 增加分类颜色
        category: {
          dev: '#48BB78',     // 开发工具
          design: '#ED8936',  // 设计工具
          text: '#9F7AEA',    // 文本工具
          image: '#4299E1',   // 图像与多媒体工具
          convert: '#38B2AC', // 转换工具
        },
      },
      fontFamily: {
        sans: [
          'Inter', 
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
}