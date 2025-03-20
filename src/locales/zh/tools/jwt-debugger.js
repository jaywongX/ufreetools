export default {
  name: 'JWT调试工具',
  description: '解析、验证和调试JWT令牌的在线工具',
  sections: {
    encoded: '编码的JWT',
    decoded: '解码的JWT',
    header: '头部',
    payload: '载荷',
    signature: '签名',
    verification: '验证'
  },
  actions: {
    decode: '解码',
    verify: '验证签名',
    copy: '复制',
    share: '分享令牌'
  },
  messages: {
    invalidToken: '无效的JWT格式',
    copied: '已复制到剪贴板！',
    verificationSuccess: '签名验证成功',
    verificationFailed: '签名验证失败'
  }
} 