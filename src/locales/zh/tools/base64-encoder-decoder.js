export default {
  name: 'Base64编解码器',
  description: '将文本和文件编码/解码为Base64格式',
  actions: {
    encode: '编码',
    decode: '解码',
    clear: '清除',
    copy: '复制',
    upload: '上传文件',
    download: '下载'
  },
  options: {
    title: '选项',
    mode: '模式',
    textMode: '文本',
    fileMode: '文件',
    urlSafe: 'URL安全编码',
    lineBreaks: '每76个字符添加换行',
    autoDetect: '自动检测Base64输入'
  },
  input: {
    title: '输入',
    placeholder: '输入要编码或解码的文本',
    dragDrop: '拖放文件到此处或点击选择',
    fileInfo: '文件: {name}, 大小: {size}'
  },
  output: {
    title: '结果',
    placeholder: '结果将显示在这里',
    info: '长度: {length} 字符, 大小: {size}'
  },
  messages: {
    copied: '已复制到剪贴板！',
    encodeSuccess: '文本编码成功',
    decodeSuccess: '文本解码成功',
    encodeError: '编码文本时出错',
    decodeError: '解码Base64时出错',
    invalidBase64: '无效的Base64输入',
    emptyInput: '请输入要编码/解码的文本',
    fileTooLarge: '文件过大（最大{max}MB）',
    fileEncoded: '文件编码成功',
    fileDecoded: '文件解码成功'
  },
  tips: {
    title: '使用提示',
    encoding: 'Base64编码会使数据大小增加约33%。',
    urlSafe: 'URL安全的Base64将"+"替换为"-"，"/"替换为"_"，以便在URL中使用。',
    binary: '编码二进制文件时，建议下载结果而不是复制。',
    decoding: '并非所有文本都是有效的Base64。检查是否有正确的填充（以=或==结尾）。'
  }
} 