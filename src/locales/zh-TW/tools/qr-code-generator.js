export default {
  name: 'QR碼生成器',
  description: '為URL、文字等生成可自訂的QR碼',

  options: {
    content: 'QR碼內容',
    contentType: '內容類型',
    errorCorrectionLevel: '錯誤校正級別',
    size: '尺寸',
    margin: '邊距',
    foregroundColor: '前景色',
    backgroundColor: '背景色',
    logo: '添加Logo',
    logoSize: 'Logo尺寸',
    cornerRadius: '圓角'
  },

  contentTypes: {
    url: '網址',
    text: '純文字',
    email: '電子郵件',
    phone: '電話號碼',
    sms: '簡訊',
    wifi: 'WiFi網路',
    vcard: '電子名片(vCard)',
    mecard: '電子名片(MeCard)'
  },

  errorLevels: {
    L: '低 (7%)',
    M: '中 (15%)',
    Q: '高 (25%)',
    H: '最高 (30%)'
  },

  actions: {
    generate: '生成QR碼',
    download: '下載',
    downloadSVG: '下載SVG',
    downloadPNG: '下載PNG',
    copy: '複製圖像',
    clear: '重置',
    uploadLogo: '上傳Logo'
  },

  templates: {
    title: '快速模板',
    confirmReplace: '確定要替換當前內容嗎？',
    confirm: '確認',
    cancel: '取消',
    url: {
      name: '網址連結'
    },
    email: {
      name: '電子郵件地址'
    },
    phone: {
      name: '電話號碼'
    },
    sms: {
      name: '簡訊'
    },
    wifi: {
      name: 'Wi-Fi設定',
      example: {
        ssid: '網路名稱',
        password: '密碼'
      }
    },
    geo: {
      name: '地理位置'
    }
  },

  appearance: {
    title: '外觀設定'
  },

  preview: {
    title: '預覽',
    generating: '生成中...',
    clickGenerateButton: '點擊"生成QR碼"按鈕',
    clickToDownload: '點擊下載QR碼'
  },

  tips: {
    title: '提示',
    saveToPrint: '生成的QR碼可以保存為圖片，用於列印或分享。',
    errorCorrection: '錯誤校正級別表示QR碼被部分遮擋或損壞時的可讀性。L級別容錯率最低，H級別最高但會使QR碼更複雜。'
  },

  wifi: {
    ssid: '網路名稱(SSID)',
    password: '密碼',
    encryption: '加密方式',
    hidden: '隱藏網路'
  },

  placeholders: {
    content: '輸入文字、連結或其他內容...'
  },

  characters: '個字元',
  maxChars: '建議不超過300字元',

  messages: {
    copied: '已複製到剪貼簿！',
    generated: 'QR碼生成成功',
    contentRequired: '請輸入QR碼內容',
    downloaded: 'QR碼已下載',
    confirmReplace: '點擊確認替換當前內容',
    contentUpdated: '內容已更新',
    changesCancelled: '已取消變更',
    invalidUrl: '請輸入有效的URL',
    invalidEmail: '請輸入有效的電子郵件地址',
    invalidPhone: '請輸入有效的電話號碼',
    logoTooBig: 'Logo檔案太大，最大檔案大小為1MB'
  },

  errors: {
    canvasNotReady: 'Canvas元素尚未準備好',
    generationError: '生成QR碼出錯',
    generationErrorWithMessage: '生成QR碼時出錯: {message}',
    downloadError: '下載QR碼時出錯: {message}'
  }
};