export default {
  name: 'Base64转换器',
  description: '编码和解码Base64文本和文件',
  options: {
    mode: '模式',
    outputFormat: '输出格式',
    lineBreaks: '换行',
    urlSafe: 'URL安全Base64'
  },
  modes: {
    encode: '编码',
    decode: '解码',
    fileEncode: '编码文件',
    fileDecode: '解码为文件'
  },
  formats: {
    text: '文本',
    hex: '十六进制',
    binary: '二进制'
  },
  actions: {
    convert: '转换',
    swap: '交换输入/输出',
    copy: '复制结果',
    clear: '清除',
    download: '下载结果',
    upload: '上传文件'
  },
  messages: {
    copied: '已复制到剪贴板！',
    encodeSuccess: '成功编码为Base64',
    decodeSuccess: '成功从Base64解码',
    invalidBase64: '无效的Base64输入',
    fileEncoded: '文件编码成功',
    fileDecoded: '文件解码成功'
  }
} 