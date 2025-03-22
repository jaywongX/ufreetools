export default {
  name: 'JWT令牌验证器',
  description: '验证、解码和检查JSON Web Token (JWT)',
  tokenInput: {
    title: '输入JWT令牌',
    placeholder: '在此粘贴您的JWT令牌',
    validate: '验证',
    clear: '清除',
    sample: '加载示例令牌'
  },
  secretInput: {
    title: '验证密钥（可选）',
    placeholder: '输入密钥验证签名',
    keyType: '密钥类型',
    algorithm: '算法'
  },
  decoded: {
    title: '解码的令牌',
    header: '头部',
    payload: '负载',
    signature: '签名',
    raw: '原始数据'
  },
  keyTypes: {
    secret: '共享密钥',
    publicKey: '公钥',
    certificate: '证书',
    jwk: 'JWK'
  },
  fields: {
    issuer: '发行者 (iss)',
    subject: '主题 (sub)',
    audience: '受众 (aud)',
    expiration: '过期时间 (exp)',
    notBefore: '生效时间 (nbf)',
    issuedAt: '签发时间 (iat)',
    jwtId: 'JWT ID (jti)',
    type: '类型 (typ)',
    algorithm: '算法 (alg)'
  },
  validation: {
    valid: '令牌有效',
    invalid: '令牌无效',
    expired: '令牌已过期',
    notActive: '令牌尚未生效',
    signatureValid: '签名有效',
    signatureInvalid: '签名无效',
    signatureNotVerified: '签名未验证（未提供密钥）',
    invalidFormat: '无效的JWT格式'
  },
  tokenAnalysis: {
    title: '令牌分析',
    status: '状态',
    expiresIn: '过期时间',
    expired: '已过期',
    validFor: '有效期',
    issuedAgo: '签发于',
    expiry: '过期',
    age: '年龄',
    scope: '范围',
    permissions: '权限'
  },
  actions: {
    verify: '验证签名',
    copy: '复制',
    view: '查看JSON',
    download: '下载',
    share: '分享',
    timestamp: '转换时间戳'
  },
  messages: {
    copied: '已复制到剪贴板',
    invalidToken: '无效的JWT格式',
    errorDecoding: '解码令牌错误: {error}'
  }
} 