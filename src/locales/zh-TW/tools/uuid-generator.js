export default {
  name: "UUID生成器",
  description: "生成隨機UUID和GUID，帶有可自訂選項，適用於資料庫主鍵、臨時檔案名等場景",

  options: {
    version: "UUID版本",
    quantity: "數量",
    format: "格式選項",
    includeDash: "包含連字符 (-)",
    generateCount: "生成數量"
  },

  versions: {
    v1: "版本1（基於時間）",
    v4: "版本4（隨機）",
    v5: "版本5（命名空間）",
    custom: "自訂"
  },

  quantities: {
    single: "單個",
    five: "5個",
    ten: "10個",
    twenty: "20個"
  },

  formats: {
    default: "預設",
    base64: "Base64",
    binary: "二進制",
    hex: "十六進制",
    noDash: "無連字符"
  },

  actions: {
    generate: "生成UUID",
    copy: "複製",
    copyAll: "複製全部",
    clear: "清空結果",
    download: "下載為TXT"
  },

  messages: {
    copied: "已複製到剪貼簿！",
    generated: "UUID生成成功",
    tooMany: "最大允許數量為1000",
    invalidVersion: "無效的UUID版本",
    invalidNamespace: "無效的命名空間UUID",
    copyFailed: "複製失敗"
  }
};