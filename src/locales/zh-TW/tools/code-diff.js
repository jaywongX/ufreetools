export default {
  name: "代碼差異比較",
  description: "比較兩段代碼並高亮顯示差異",

  options: {
    title: "選項",
    ignoreCase: "忽略大小寫",
    ignoreWhitespace: "忽略空格",
    trimWhitespace: "修剪空格",
    diffMode: "差異模式",
    diffModes: {
      chars: "字符",
      words: "單詞",
      lines: "行",
      sentences: "句子",
      json: "JSON"
    },
    diffStyle: "顯示樣式",
    diffStyles: {
      split: "分欄視圖",
      inline: "內聯視圖"
    },
    context: "上下文行數",
    wrap: "自動換行",
    languages: {
      plaintext: "純文本",
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
      json: "JSON"
    }
  },

  inputs: {
    original: "原始代碼",
    modified: "修改後代碼",
    placeholderOriginal: "在此輸入原始代碼...",
    placeholderModified: "在此輸入修改後代碼..."
  },

  actions: {
    compare: "比較",
    clear: "清除",
    swap: "交換",
    copy: "複製差異",
    download: "下載差異",
    upload: "上傳文件"
  },

  results: {
    title: "差異結果",
    changes: "變更",
    additions: "新增",
    deletions: "刪除",
    unchanged: "未變更",
    noChanges: "未找到差異 - 兩段文本完全相同",
    loading: "正在生成差異..."
  },

  upload: {
    originalFile: "原始文件",
    modifiedFile: "修改後文件",
    dropOriginal: "拖拽原始文件到此處或點擊瀏覽",
    dropModified: "拖拽修改後文件到此處或點擊瀏覽"
  },

  messages: {
    copied: "已複製到剪貼板！",
    inputRequired: "請在兩個輸入框中都輸入文本",
    diffGenerated: "差異生成成功",
    error: "生成差異時出錯",
    fileError: "讀取文件時出錯"
  },

  tips: {
    title: "使用提示",
    compareOptions: "調整比較選項以滿足您的需求 - 忽略空格對於代碼比較很有幫助。",
    diffModes: "不同的差異模式提供不同級別的比較細節。",
    largeFiles: "對於大文件，基於行的比較更高效。",
    jsonMode: "使用JSON模式比較結構化數據 - 它將標準化並比較對象結構。"
  }
};