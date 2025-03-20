export default {
  name: '哈希生成器',
  description: '使用各种算法从文本或文件生成哈希值',
  options: {
    algorithm: '算法',
    encoding: '输出编码',
    uppercase: '大写输出',
    includeLength: '包含输入长度'
  },
  algorithms: {
    md5: 'MD5',
    sha1: 'SHA-1',
    sha256: 'SHA-256',
    sha384: 'SHA-384',
    sha512: 'SHA-512',
    ripemd160: 'RIPEMD-160',
    sha3: 'SHA-3',
    blake2b: 'BLAKE2b',
    blake2s: 'BLAKE2s'
  },
  encodings: {
    hex: '十六进制',
    base64: 'Base64',
    base64url: 'Base64URL',
    binary: '二进制'
  },
  actions: {
    generate: '生成哈希',
    generateAll: '生成所有哈希',
    copy: '复制哈希',
    copyAll: '复制所有哈希',
    clear: '清除',
    upload: '上传文件'
  },
  messages: {
    copied: '已复制到剪贴板！',
    hashGenerated: '哈希生成成功',
    fileProcessed: '文件哈希生成成功',
    inputRequired: '请输入文本或上传文件',
    inputLength: '输入长度: {bytes}字节',
    tableCopied: '所有哈希值已复制到剪贴板'
  }
} 