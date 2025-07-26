export default {
  name: 'Markdown編輯器',
  description: '編輯和即時預覽Markdown文檔',

  options: {
    mode: '模式',
    syntaxHighlighting: '語法高亮',
    autoSave: '自動儲存',
    lineNumbers: '行號',
    spellCheck: '拼寫檢查',
    wordWrap: '自動換行'
  },

  modes: {
    split: '分屏視圖',
    edit: '僅編輯',
    preview: '僅預覽'
  },

  actions: {
    bold: '粗體',
    italic: '斜體',
    strikethrough: '刪除線',
    heading: '標題',
    link: '連結',
    image: '圖片',
    list: '列表',
    quote: '引用',
    code: '程式碼',
    table: '表格',
    hr: '水平分隔線',
    preview: '預覽',
    copy: '複製',
    clear: '清除',
    download: '下載Markdown',
    downloadHTML: '下載HTML',
    upload: '上傳Markdown'
  },

  messages: {
    copied: 'Markdown內容已複製到剪貼簿！',
    copyError: '複製失敗，請手動複製',
    clearConfirm: '確定要清空編輯器內容嗎？',
    templateConfirm: '應用模板將替換當前內容，確定繼續嗎？',
    templateApplied: '已應用"{name}"模板',
    saved: '文檔已儲存',
    uploadSuccess: '文檔上傳成功',
    uploadError: '上傳文檔時出錯',
    wordCount: '{count}個單詞',
    charCount: '{count}個字符'
  },

  placeholder: '在這裡輸入Markdown內容...',

  placeholders: {
    linkText: '連結文字',
    imageAlt: '圖片描述'
  },

  templates: {
    title: '快速模板',
    apply: '應用模板',
    confirm: '確認應用',
    simple: {
      name: '簡單文檔',
      description: '包含標題、列表、引用等',
      content: `# 文檔標題

## 簡介
這是一個簡單的Markdown文檔範例。

## 特性
- 支援標題和段落
- 支援**粗體**和*斜體*
- 支援有序和無序列表

> 這是一個引用塊，用於引用他人的觀點。

## 結論
Markdown是一種簡單易用的標記語言。`
    },
    readme: {
      name: '專案README',
      description: '專案文檔標準結構',
      content: `# 專案名稱

## 專案簡介
簡短描述專案的主要功能和用途。

## 功能特點
- 主要功能點1
- 主要功能點2
- 主要功能點3

## 安裝說明
\`\`\`
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev
\`\`\`

## 使用範例
\`\`\`
// 範例程式碼
const example = new Example();
example.init();
\`\`\`

## 文檔
更多詳細文檔請參考文檔連結。

## 貢獻指南
歡迎貢獻程式碼，請參閱貢獻指南。

## 許可證
本專案基於MIT許可證發布，詳細資訊請參閱LICENSE文件。`
    },
    resume: {
      name: '個人履歷',
      description: '個人履歷模板',
      content: `# 個人履歷

## 個人資訊
- 姓名：張三
- 電話：138xxxx1234
- 郵箱：zhangsan123@example.com
- 求職意向：前端開發工程師

## 教育背景
大學名稱，電腦科學與技術，2016年9月至2020年6月

## 工作經歷
### 科技公司，前端開發工程師，2020年7月至今
- 負責公司核心產品的前端開發與維護
- 使用Vue.js開發企業管理系統，提升用戶體驗
- 優化前端性能，減少頁面載入時間30%

### 科技公司，前端開發實習生，2019年7月至2020年6月
- 參與公司官網改版專案
- 協助團隊進行程式碼重構與優化

## 技術技能
- 前端開發：HTML, CSS, JavaScript, Vue.js, React
- 後端開發：Node.js, Express
- 其他工具：Git, Webpack, Docker

## 專案經驗
### 企業管理系統
- 使用Vue.js開發的企業內部管理系統
- 實現了資料視覺化、權限管理等功能
- 優化了系統響應速度，提升用戶體驗

## 語言能力
- 英語（熟練）
- 日語（基礎）`
    },
    meeting: {
      name: '會議記錄',
      description: '會議記錄模板',
      content: `# 會議記錄

## 會議資訊
- 主題：專案進度討論
- 日期：2023年5月15日
- 時間：14:00至16:00
- 地點：公司會議室A
- 主持人：張經理
- 記錄人：李助理

## 參會人員
- 張經理（產品部）
- 王工程師（研發部）
- 李設計師（設計部）
- 趙測試（測試部）

## 議程
1. 回顧上週工作完成情況
2. 討論本週工作計劃
3. 解決專案中存在的問題
4. 確定下一步工作方向

## 討論內容
### 1. 上週工作回顧
- 產品需求文檔已完成
- 設計稿已完成60%
- 前端開發已完成基礎框架搭建

### 2. 本週工作計劃
- 設計部完成剩餘設計稿
- 研發部開始核心功能開發
- 測試部準備測試用例

### 3. 問題與解決方案
- 問題：資料介面設計不合理
- 解決方案：由王工程師重新設計介面，並在週三前提交

## 下次會議
- 日期：2023年5月22日
- 時間：14:00至15:00`
    }
  },

  dialogs: {
    clear: {
      title: '清空編輯器',
      message: '確定要清空編輯器內容嗎？'
    },
    template: {
      title: '應用模板',
      message: '應用模板將替換當前內容，確定繼續嗎？'
    }
  },

  defaultContent: `# 歡迎使用Markdown編輯器

這是一個簡單的Markdown編輯器，支援即時預覽和語法高亮。

## 基本語法

### 標題
使用 # 符號表示標題，例如：
# 一級標題
## 二級標題
### 三級標題

### 強調
**粗體** 或 __粗體__
*斜體* 或 _斜體_
~~刪除線~~

### 列表
無序列表:
- 項目1
- 項目2
- 項目3

有序列表:
1. 第一項
2. 第二項
3. 第三項

### 連結和圖片
[連結文字](https://example.com)


### 程式碼
行內程式碼: \`var example = "hello";\`

### 引用
> 這是一個引用段落。

### 表格
| 表頭1 | 表頭2 | 表頭3 |
|-------|-------|-------|
| 儲存格1 | 儲存格2 | 儲存格3 |
| 儲存格4 | 儲存格5 | 儲存格6 |

### 水平線
---

開始編輯吧！你可以使用上方的工具欄快速插入各種Markdown元素。`
};