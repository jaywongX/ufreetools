export default {
  name: 'JWT解码器',
  description: '解码和验证JSON Web令牌',
  sections: {
    input: 'JWT令牌',
    header: '头部',
    payload: '载荷',
    signature: '签名',
    verification: '验证'
  },
  options: {
    displayFormat: '显示格式',
    verifySignature: '验证签名',
    algorithm: '算法',
    secretKey: '密钥',
    publicKey: '公钥'
  },
  formats: {
    prettify: '美化JSON',
    raw: '原始JSON',
    decoded: '解码值'
  },
  actions: {
    decode: '解码',
    verify: '验证',
    copy: '复制',
    clear: '清除'
  },
  claims: {
    iss: '颁发者',
    sub: '主题',
    aud: '受众',
    exp: '过期时间',
    nbf: '生效时间',
    iat: '颁发时间',
    jti: 'JWT ID'
  },
  messages: {
    copied: '已复制到剪贴板！',
    decodeSuccess: 'JWT解码成功',
    decodeError: '解码JWT时出错',
    invalidJwt: '无效的JWT格式',
    verified: '签名已验证',
    notVerified: '签名验证失败',
    expired: '令牌已过期',
    notActive: '令牌尚未生效'
  }
} 