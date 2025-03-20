export default {
  name: 'RSA加密解密',
  description: '使用RSA公钥加密技术加密和解密数据',
  keyOptions: {
    generateKey: '生成密钥对',
    keySize: '密钥大小',
    keyFormat: '密钥格式',
    publicKey: '公钥',
    privateKey: '私钥',
    importKey: '导入密钥'
  },
  encryptOptions: {
    padding: '填充方案',
    encoding: '输出编码'
  },
  actions: {
    encrypt: '加密',
    decrypt: '解密',
    clear: '清除',
    copy: '复制',
    download: '下载密钥',
    upload: '上传密钥'
  },
  messages: {
    copied: '已复制到剪贴板！',
    encryptSuccess: '数据加密成功',
    decryptSuccess: '数据解密成功',
    encryptError: '加密数据时出错',
    decryptError: '解密数据时出错',
    invalidKey: '无效的密钥格式',
    keyGenerated: 'RSA密钥对生成成功'
  }
} 