export default {
  name: 'Base64 编码解码器',
  description: '在文本和Base64编码之间快速转换数据',

  mode: {
    title: '模式',
    encode: '编码',
    decode: '解码'
  },

  input: {
    title: '输入',
    placeholder: '输入要处理的文本...',
    clear: '清除',
    copy: '复制',
    paste: '粘贴',
    upload: '上传文件',
    dragDrop: '拖放文件到此处或点击上传',
    textOption: '文本',
    fileOption: '文件',
    hexOption: 'Hex',
    selectFile: '选中文件',
  },

  output: {
    title: '输出',
    placeholder: '结果将显示在这里...',
    copy: '复制',
    download: '下载',
    empty: '暂无输出'
  },

  options: {
    title: '选项',
    encoding: '字符编码',
    encodings: {
      utf8: 'UTF-8',
      ascii: 'ASCII',
      iso88591: 'ISO-8859-1',
      windows1252: 'Windows-1252'
    },
    urlSafe: '使用URL安全编码',
    autoDecode: '自动检测并解码',
    includeDataURI: '包含Data URI前缀',
    trimWhitespace: '去除空白字符',
    preserveLineBreaks: '保留换行符',
    addImageHeader:'添加图片 Base64 头',
  },

  dataUri: {
    title: 'Data URI',
    mimeType: 'MIME类型',
    common: '常用类型',
    custom: '自定义'
  },

  messages: {
    copied: '已复制到剪贴板',
    copyFailed: '复制失败',
    pasteFailed: '粘贴失败',
    uploadSuccess: '文件上传成功',
    uploadFailed: '文件上传失败',
    readFailed: '文件读取失败',
    invalidBase64: '无效的Base64编码',
    invalidHex: '无效的Hex编码',
    fileTooLarge: '文件过大，请直接下载查看',
    processError: '处理过程中发生错误',
    encodeSuccess: '编码成功',
    decodeSuccess: '解码成功',
    processing: '处理中...'
  },

  mimeTypes: {
    'text/plain': '文本',
    'application/json': 'JSON',
    'text/html': 'HTML',
    'text/css': 'CSS',
    'text/javascript': 'JavaScript',
    'application/xml': 'XML',
    'image/jpeg': 'JPEG图像',
    'image/png': 'PNG图像',
    'image/gif': 'GIF图像',
    'image/svg+xml': 'SVG图像',
    'application/pdf': 'PDF文档'
  },

  tips: {
    title: '使用提示',
    tip1: 'Base64编码可以将任何二进制数据转换为纯文本格式',
    tip2: '使用URL安全选项可去除标准Base64中的"+"和"/"字符',
    tip3: '使用Data URI前缀可直接在HTML的img和其他标签中使用编码后的数据',
    tip4: '大型文件编码会消耗更多资源，建议限制在2MB以内',
    tip5: '某些特殊字符可能需要使用特定的字符编码才能正确处理'
  },

  about: {
    title: '关于Base64编解码',
    description: 'Base64是一种基于64个可打印字符来表示二进制数据的表示方法，常用于在处理文本的场合，表示、传输、存储一些二进制数据。'
  },

  features: {
    title: '功能说明',
    multiInput: '支持文本、Hex、文件三种输入方式',
    charsetSupport: '支持UTF-8和GBK字符集解码',
    imagePreview: '支持图片预览（小于1MB的图片文件）',
    fileDownload: '支持多种格式文件下载（默认PDF格式）',
    chunkProcessing: '大文件分块处理，实时显示处理进度',
    autoDetect: '自动识别和预览图片类型'
  },

  notes: {
    title: '注意事项',
    sizeIncrease: 'Base64编码会使数据量增加约33%',
    chunkProcessing: '大文件处理采用分块处理，进度条分两阶段显示',
    largeFiles: '10MB以上文件仅支持下载查看，不显示文本内容',
    fileInput: '建议大文件使用文件方式输入，避免在文本框中粘贴'
  },

  fileTypeLabel: {
    pdf: 'PDF文档',
    txt: '文本文件',
    jpg: 'JPG图片', 
    png: 'PNG图片', 
    zip: 'ZIP压缩包',
    bin: '二进制文件',
  }
}; 