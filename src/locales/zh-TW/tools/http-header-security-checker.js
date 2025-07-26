export default {
  name: 'HTTP頭部安全檢查器',
  description: '分析和評估HTTP響應頭的安全性',
  title: 'HTTP頭部安全檢測工具',
  intro: '分析網站的HTTP響應頭，檢測CSP、HSTS等安全配置，並提供改進建議',

  input: {
    title: '輸入URL或頭部',
    url: 'URL',
    urlPlaceholder: '輸入要檢查的URL（例如：https://example.com）',
    headers: '或直接貼上HTTP頭部',
    headersPlaceholder: '在此貼上原始HTTP頭部...',
    options: '掃描選項',
    followRedirects: '跟隨重定向',
    includeSubresources: '檢查子資源（CSS、JS等）',
    timeout: '超時（秒）',
    checkButton: '檢查頭部',
    analyzing: '分析中...'
  },

  results: {
    title: '安全頭部分析',
    overview: '概述',
    score: '安全得分',
    totalScore: '總分100',
    scanned: '掃描的URL',
    date: '掃描日期',
    headers: {
      title: '發現的頭部',
      name: '頭部',
      value: '值',
      status: '狀態'
    },
    allHeaders: {
      title: '所有響應頭',
      name: '名稱',
      value: '值',
      noData: '無響應頭數據'
    },
    missing: {
      title: '缺失的安全頭部',
      description: '未找到這些推薦的安全頭部：'
    },
    issues: {
      title: '安全問題',
      critical: '嚴重',
      high: '高',
      medium: '中',
      low: '低',
      info: '信息'
    },
    recommendations: {
      title: '建議',
      description: '考慮添加以下頭部以提高安全性：',
      example: '示例配置'
    },
    rating: {
      unknown: '未知',
      excellent: '優秀',
      good: '良好',
      fair: '一般',
      poor: '較差',
      high_risk: '風險高',
      descriptions: {
        unknown: '無法獲取網站的安全頭信息',
        excellent: '網站實施了所有主要的安全頭部',
        good: '網站實施了大多數重要的安全頭部',
        fair: '網站缺少一些重要的安全頭部',
        poor: '網站缺少多個關鍵的安全頭部',
        high_risk: '網站幾乎沒有實施安全頭保護措施'
      }
    }
  },

  headers: {
    strictTransportSecurity: {
      name: 'Strict-Transport-Security',
      description: '強制使用HTTPS連接而非HTTP',
      recommendation: '添加"Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"',
      status: {
        good: '已正確配置',
        bad: '未配置',
        warning: '配置可改進'
      },
      recommendationConfigured: '現有配置已實施，確保包含足夠長的max-age和includeSubDomains',
      recommendationMissing: '建議啟用HSTS以確保所有通信都通過HTTPS進行'
    },
    xContentTypeOptions: {
      name: 'X-Content-Type-Options',
      description: '防止MIME類型嗅探',
      recommendation: '添加"X-Content-Type-Options: nosniff"',
      status: {
        good: '已正確配置',
        bad: '未配置或配置不正確'
      },
      recommendationConfigured: '配置正確，保持當前設置',
      recommendationMissing: '建議將此頭設置為"nosniff"值'
    },
    xFrameOptions: {
      name: 'X-Frame-Options',
      description: '防止網站在iframe中被嵌入，從而防止點擊劫持攻擊',
      recommendation: '添加"X-Frame-Options: DENY"或"SAMEORIGIN"',
      status: {
        good: '已配置',
        bad: '未配置'
      },
      recommendationConfigured: '現有配置已實施，建議使用DENY或SAMEORIGIN',
      recommendationMissing: '建議配置此頭為DENY或SAMEORIGIN以防止點擊劫持'
    },
    contentSecurityPolicy: {
      name: 'Content-Security-Policy',
      description: '控制用戶代理允許加載的資源',
      recommendation: '添加帶有適當指令的Content-Security-Policy頭部',
      status: {
        good: '已正確配置',
        bad: '未配置',
        warning: '配置可改進'
      },
      recommendationConfigured: '現有配置已實施，確保定期審核和更新策略',
      recommendationMissing: '建議配置CSP以限制可加載的資源來源，從而提高防禦XSS攻擊的能力'
    },
    xXssProtection: {
      name: 'X-XSS-Protection',
      description: '此頭在舊版瀏覽器中啟用XSS過濾。在現代瀏覽器中，建議使用CSP代替。',
      recommendation: '雖然此頭在現代瀏覽器中已被CSP替代，但仍建議設置為"1; mode=block"以兼容舊版瀏覽器',
      status: {
        enabled: '已啟用',
        disabled: '已禁用',
        notConfigured: '未配置（現代瀏覽器建議使用CSP替代）'
      }
    },
    referrerPolicy: {
      name: 'Referrer-Policy',
      description: '控制Referer頭部中包含的信息',
      recommendation: '添加"Referrer-Policy: no-referrer-when-downgrade"或更嚴格的策略',
      status: {
        good: '已配置',
        bad: '未配置'
      },
      recommendationConfigured: '現有配置已實施，建議使用strict-origin或strict-origin-when-cross-origin',
      recommendationMissing: '建議配置此頭以控制引用來源信息的傳遞'
    },
    permissionsPolicy: {
      name: 'Permissions-Policy',
      description: '控制可以使用哪些瀏覽器功能和API',
      recommendation: '添加帶有適當限制的Permissions-Policy頭部',
      status: {
        good: '已配置',
        bad: '未配置'
      },
      recommendationConfigured: '現有配置已實施，確保限制不必要的功能',
      recommendationMissing: '建議配置此頭以限制網站可以使用的瀏覽器功能'
    }
  },

  status: {
    good: '良好',
    warning: '警告',
    bad: '不良',
    info: '信息',
    notApplicable: '不適用'
  },

  actions: {
    export: '導出報告',
    copyHeaders: '複製頭部',
    copyRecommendations: '複製建議',
    scan: '新掃描',
    share: '分享結果',
    analyze: '分析頭信息'
  },

  emptyState: {
    line1: '輸入網站URL，分析HTTP響應頭的安全配置',
    line2: '獲取關於CSP、HSTS等安全頭的詳細評估與建議'
  },

  messages: {
    scanning: '正在掃描{url}...',
    completed: '掃描完成',
    error: '錯誤：{message}',
    timeout: '請求超時',
    invalidUrl: '無效的URL',
    invalidUrlFormat: '請輸入有效的URL，以http://或https://開頭',
    copied: '已複製到剪貼板',
    exportComplete: '報告導出成功',
    httpWarning: '警告：使用HTTP可能不安全',
    noHeaders: '未找到任何頭部信息',
    fetchError: '無法獲取頭信息: {error}'
  }
};