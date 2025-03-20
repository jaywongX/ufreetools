export default {
  name: '二维码生成器',
  description: '为URL、文本等生成可自定义的二维码',
  options: {
    content: '内容',
    contentType: '内容类型',
    errorCorrectionLevel: '纠错级别',
    size: '尺寸',
    margin: '边距',
    foregroundColor: '前景色',
    backgroundColor: '背景色',
    logo: '添加Logo',
    logoSize: 'Logo尺寸'
  },
  contentTypes: {
    url: '网址',
    text: '纯文本',
    email: '电子邮件',
    phone: '电话号码',
    sms: '短信',
    wifi: 'WiFi网络',
    vcard: '电子名片(vCard)',
    mecard: '电子名片(MeCard)'
  },
  errorLevels: {
    L: '低 (7%)',
    M: '中 (15%)',
    Q: '四分位 (25%)',
    H: '高 (30%)'
  },
  actions: {
    generate: '生成二维码',
    download: '下载',
    downloadSVG: '下载SVG',
    downloadPNG: '下载PNG',
    copy: '复制图像',
    clear: '清除',
    uploadLogo: '上传Logo'
  },
  wifi: {
    ssid: '网络名称(SSID)',
    password: '密码',
    encryption: '加密方式',
    hidden: '隐藏网络'
  },
  messages: {
    copied: '已复制到剪贴板！',
    generated: '二维码已生成',
    contentRequired: '请输入二维码内容',
    invalidUrl: '请输入有效的URL',
    invalidEmail: '请输入有效的电子邮件地址',
    invalidPhone: '请输入有效的电话号码',
    logoTooBig: 'Logo文件太大，最大文件大小为1MB'
  }
} 