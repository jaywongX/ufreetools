export default {
  name: "代碼混淆器",
  description: "對JavaScript和CSS代碼進行混淆處理，提高代碼安全性和保護知識產權",

  languages: {
    title: "選擇語言",
    javascript: "JavaScript",
    css: "CSS"
  },

  options: {
    title: "混淆選項",
    javascript: {
      compact: "緊湊輸出 (移除空白)",
      controlFlowFlattening: "控制流扁平化",
      deadCodeInjection: "注入無效代碼",
      debugProtection: "調試保護",
      selfDefending: "自我保護 (防止格式化)",
      stringArray: "字符串轉數組",
      renameGlobals: "重命名全局變量",
      renameProperties: "重命名屬性",
      mangle: "變量名混淆",
      stringArrayEncoding: "字符串數組編碼",
      stringArrayThreshold: "字符串數組閾值",
      unicodeEscapeSequence: "Unicode轉義序列"
    },
    css: {
      compact: "緊湊輸出",
      renameSelectors: "重命名選擇器",
      preserveImportant: "保留!important",
      restructure: "重組規則",
      keepVendorPrefixes: "保留瀏覽器前綴",
      removeComments: "移除註釋"
    }
  },

  input: {
    title: "輸入代碼",
    placeholder: "在此輸入要混淆的代碼...",
    clear: "清空",
    paste: "粘貼",
    upload: "上傳文件",
    inputObfuscatorCode: "請輸入要混淆的代碼"
  },

  output: {
    title: "混淆結果",
    placeholder: "混淆後的代碼將顯示在這裡...",
    copy: "複製",
    download: "下載",
    stats: {
      original: "原始大小",
      obfuscated: "混淆後大小",
      ratio: "壓縮率"
    },
    increase: "增加",
    decrease: "減少"
  },

  actions: {
    obfuscate: "混淆",
    clear: "清除"
  },

  messages: {
    copied: "已複製到剪貼板",
    copyFailed: "複製失敗，請手動複製",
    processing: "正在處理...",
    error: "混淆過程出錯",
    invalidInput: "無效的輸入代碼",
    uploadError: "文件上傳失敗",
    fileTooLarge: "文件過大（最大2MB）"
  },

  tips: {
    title: "使用提示",
    tip1: "代碼混淆可以增加逆向工程的難度，但不能完全防止代碼被破解",
    tip2: "啟用更多混淆選項會增加代碼體積和運行開銷",
    tip3: "某些混淆選項可能會影響代碼的可調試性",
    tip4: "建議在混淆前先備份原始代碼",
    tip5: "對於大型項目，建議使用專業的混淆工具"
  },

  demo: {
    title: "示例",
    function: "函數示例",
    class: "類示例",
    simple: "簡單樣式",
    animation: "動畫效果"
  }
};