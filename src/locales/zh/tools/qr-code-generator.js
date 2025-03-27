export default {
  name: '二维码生成器',
  description: '为URL、文本等生成可自定义的二维码',
  options: {
    content: '二维码内容',
    contentType: '内容类型',
    errorCorrectionLevel: '错误校正级别',
    size: '尺寸',
    margin: '边距',
    foregroundColor: '前景色',
    backgroundColor: '背景色',
    logo: '添加Logo',
    logoSize: 'Logo尺寸',
    cornerRadius: '圆角'
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
    Q: '高 (25%)',
    H: '最高 (30%)'
  },
  actions: {
    generate: '生成二维码',
    download: '下载',
    downloadSVG: '下载SVG',
    downloadPNG: '下载PNG',
    copy: '复制图像',
    clear: '重置',
    uploadLogo: '上传Logo'
  },
  templates: {
    title: '快速模板',
    confirmReplace: '确定要替换当前内容吗？',
    confirm: '确认',
    cancel: '取消',
    url: {
      name: '网址链接'
    },
    email: {
      name: '邮箱地址'
    },
    phone: {
      name: '电话号码'
    },
    sms: {
      name: '短信'
    },
    wifi: {
      name: 'Wi-Fi配置',
      example: {
        ssid: '网络名',
        password: '密码'
      }
    },
    geo: {
      name: '地理位置'
    }
  },
  appearance: {
    title: '外观设置'
  },
  preview: {
    title: '预览',
    generating: '生成中...',
    clickGenerateButton: '点击"生成二维码"按钮',
    clickToDownload: '点击下载二维码'
  },
  tips: {
    title: '提示',
    saveToPrint: '生成的二维码可以保存为图片，用于打印或分享。',
    errorCorrection: '错误校正级别表示二维码被部分遮挡或损坏时的可读性。L级别容错率最低，H级别最高但会使二维码更复杂。'
  },
  wifi: {
    ssid: '网络名称(SSID)',
    password: '密码',
    encryption: '加密方式',
    hidden: '隐藏网络'
  },
  placeholders: {
    content: '输入文本、链接或其他内容...'
  },
  characters: '个字符',
  maxChars: '建议不超过300字符',
  messages: {
    copied: '已复制到剪贴板！',
    generated: '二维码生成成功',
    contentRequired: '请输入二维码内容',
    downloaded: '二维码已下载',
    confirmReplace: '点击确认替换当前内容',
    contentUpdated: '内容已更新',
    changesCancelled: '已取消更改',
    invalidUrl: '请输入有效的URL',
    invalidEmail: '请输入有效的电子邮件地址',
    invalidPhone: '请输入有效的电话号码',
    logoTooBig: 'Logo文件太大，最大文件大小为1MB'
  },
  errors: {
    canvasNotReady: 'Canvas元素尚未准备好',
    generationError: '生成二维码出错',
    generationErrorWithMessage: '生成二维码时出错: {message}',
    downloadError: '下载二维码时出错: {message}'
  }
} 