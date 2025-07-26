export default {
  name: 'Base64 編碼解碼器',
  description: '在文本和Base64編碼之間快速轉換數據',

  mode: {
    title: '模式',
    encode: '編碼',
    decode: '解碼'
  },

  input: {
    title: '輸入',
    placeholder: '輸入要處理的文本...',
    clear: '清除',
    copy: '複製',
    paste: '粘貼',
    upload: '上傳文件',
    dragDrop: '拖放文件到此處或點擊上傳',
    textOption: '文本',
    fileOption: '文件',
    hexOption: 'Hex',
    selectFile: '選中文件',
  },

  output: {
    title: '輸出',
    placeholder: '結果將顯示在這裡...',
    copy: '複製',
    download: '下載',
    empty: '暫無輸出'
  },

  options: {
    title: '選項',
    encoding: '字符編碼',
    encodings: {
      utf8: 'UTF-8',
      ascii: 'ASCII',
      iso88591: 'ISO-8859-1',
      windows1252: 'Windows-1252'
    },
    urlSafe: '使用URL安全編碼',
    autoDecode: '自動檢測並解碼',
    includeDataURI: '包含Data URI前綴',
    trimWhitespace: '去除空白字符',
    preserveLineBreaks: '保留換行符',
    addImageHeader:'添加圖片 Base64 頭',
  },

  dataUri: {
    title: 'Data URI',
    mimeType: 'MIME類型',
    common: '常用類型',
    custom: '自定義'
  },

  messages: {
    copied: '已複製到剪貼板',
    copyFailed: '複製失敗',
    pasteFailed: '粘貼失敗',
    uploadSuccess: '文件上傳成功',
    uploadFailed: '文件上傳失敗',
    readFailed: '文件讀取失敗',
    invalidBase64: '無效的Base64編碼',
    invalidHex: '無效的Hex編碼',
    fileTooLarge: '文件過大，請直接下載查看',
    processError: '處理過程中發生錯誤',
    encodeSuccess: '編碼成功',
    decodeSuccess: '解碼成功',
    processing: '處理中...'
  },

  mimeTypes: {
    'text/plain': '文本',
    'application/json': 'JSON',
    'text/html': 'HTML',
    'text/css': 'CSS',
    'text/javascript': 'JavaScript',
    'application/xml': 'XML',
    'image/jpeg': 'JPEG圖像',
    'image/png': 'PNG圖像',
    'image/gif': 'GIF圖像',
    'image/svg+xml': 'SVG圖像',
    'application/pdf': 'PDF文檔'
  },

  tips: {
    title: '使用提示',
    tip1: 'Base64編碼可以將任何二進制數據轉換為純文本格式',
    tip2: '使用URL安全選項可去除標準Base64中的"+"和"/"字符',
    tip3: '使用Data URI前綴可直接在HTML的img和其他標籤中使用編碼後的數據',
    tip4: '大型文件編碼會消耗更多資源，建議限制在2MB以內',
    tip5: '某些特殊字符可能需要使用特定的字符編碼才能正確處理'
  },

  about: {
    title: '關於Base64編解碼',
    description: 'Base64是一種基於64個可打印字符來表示二進制數據的表示方法，常用於在處理文本的場合，表示、傳輸、存儲一些二進制數據。'
  },

  features: {
    title: '功能說明',
    multiInput: '支持文本、Hex、文件三種輸入方式',
    charsetSupport: '支持UTF-8和GBK字符集解碼',
    imagePreview: '支持圖片預覽（小於1MB的圖片文件）',
    fileDownload: '支持多種格式文件下載（默認PDF格式）',
    chunkProcessing: '大文件分塊處理，實時顯示處理進度',
    autoDetect: '自動識別和預覽圖片類型'
  },

  notes: {
    title: '注意事項',
    sizeIncrease: 'Base64編碼會使數據量增加約33%',
    chunkProcessing: '大文件處理採用分塊處理，進度條分兩階段顯示',
    largeFiles: '10MB以上文件僅支持下載查看，不顯示文本內容',
    fileInput: '建議大文件使用文件方式輸入，避免在文本框中粘貼'
  },

  fileTypeLabel: {
    pdf: 'PDF文檔',
    txt: '文本文件',
    jpg: 'JPG圖片', 
    png: 'PNG圖片', 
    zip: 'ZIP壓縮包',
    bin: '二進制文件',
  }
};