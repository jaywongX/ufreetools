export default {
  "name": "代碼格式化",
  "description": "格式化和美化多種語言的代碼",
  "languages": {
    "title": "語言",
    "html": "HTML",
    "css": "CSS",
    "javascript": "JavaScript",
    "typescript": "TypeScript",
    "json": "JSON",
    "sql": "SQL",
    "xml": "XML",
    "markdown": "Markdown"
  },
  "options": {
    "title": "選項",
    "indent": "縮排",
    "tabSize": "製表符大小",
    "insertSpaces": "插入空格",
    "formatSelection": "格式化選擇",
    "formatOnType": "輸入時格式化",
    "removeComments": "移除註釋",
    "mangle": "變量名混淆",
    "lineBreak": "換行符風格"
  },
  "actions": {
    "beautify": "美化",
    "minify": "壓縮",
    "format": "格式化",
    "copy": "複製結果",
    "clear": "清空",
    "download": "下載",
    "paste": "從剪貼板貼上",
    "loadSample": "載入示例代碼"
  },
  "messages": {
    "formatSuccess": "代碼格式化成功",
    "formatError": "格式化代碼時出錯",
    "copied": "已複製到剪貼板！",
    "languageChangeWarning": "更改語言將重置您的代碼。繼續？"
  },
  "errors": {
    "emptyCode": "請輸入要格式化的代碼",
    "invalidJson": "無效的JSON",
    "jsCompressionError": "JavaScript壓縮錯誤"
  },
  "input": "輸入",
  "output": "輸出",
  "placeholders": {
    "input": "在此貼上您的代碼...",
    "output": "格式化後的代碼將顯示在這裡..."
  },
  "characters": "字符",
  "space": "空格",
  "spaces": "空格",
  "auto": "自動",
  "tips": {
    "title": "使用提示",
    "selectLanguage": "為了獲得最佳的格式化結果，請選擇適合您代碼的語言。",
    "beautifyMinify": "使用\"美化\"功能使代碼可讀性更強，使用\"壓縮\"功能減小文件大小。",
    "customizeOptions": "使用下方的設置面板自定義格式化選項。",
    "keyboard": "在編輯器中按Tab鍵插入縮排。"
  }
}