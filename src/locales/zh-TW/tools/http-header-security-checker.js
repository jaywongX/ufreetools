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
  },
  article: {
    title: "HTTP頭部安全檢查器：增強您網站的安全狀態",
    features: {
      title: "了解HTTP頭部安全",
      description: "<strong>HTTP頭部安全檢查器</strong>是一個專門設計用來分析和評估任何網站<strong>安全頭部</strong>的工具。<strong>安全頭部</strong>是服務器可以設置的特殊HTTP響應頭，通過幫助防禦跨站腳本攻擊（XSS）、點擊劫持和其他代碼注入攻擊等常見Web漏洞，提供額外的<strong>安全</strong>層。<br><br>我們的工具會掃描關鍵<strong>安全頭部</strong>，包括內容安全策略（CSP）、嚴格傳輸安全（HSTS）、X-Content-Type-Options、X-Frame-Options等。它評估現有的<strong>頭部配置</strong>，識別缺失的<strong>安全頭部</strong>，並提供全面的<strong>安全得分</strong>和可行的建議，以改善您網站的<strong>安全狀態</strong>。",
      useCases: {
        title: "HTTP頭部安全檢查器的常見應用場景",
        items: [
          "Web開發人員在部署前對新開發的網站進行安全審計",
          "安全專業人員執行滲透測試和漏洞評估",
          "系統管理員驗證跨多個域的服務器安全配置",
          "DevOps團隊在CI/CD流程中實施持續安全監控",
          "網站所有者在實施推薦的頭部後驗證其安全狀態",
          "安全顧問向客戶展示改進安全措施的必要性",
          "合規官員確保網站符合行業安全標準和法規"
        ]
      }
    },
    faq: {
      title: "關於HTTP頭部安全的常見問題",
      items: [
        {
          question: "什麼是HTTP安全頭部，為什麼它們很重要？",
          answer: "HTTP安全頭部是從服務器發送到瀏覽器的特殊指令，用於控制瀏覽器在處理您網站內容時應該如何行為。它們非常重要，因為它們提供了額外的安全層，可以防禦XSS、CSRF、點擊劫持和代碼注入攻擊等常見Web漏洞。正確配置的安全頭部可以以最小的努力顯著增強您網站的安全狀態。"
        },
        {
          question: "每個網站應該實施哪些安全頭部？",
          answer: "至少，每個現代網站都應該實施：內容安全策略（CSP）以防止XSS攻擊，嚴格傳輸安全（HSTS）以強制使用HTTPS，X-Content-Type-Options以防止MIME類型嗅探，X-Frame-Options以防止點擊劫持，以及Referrer-Policy以控制引用頭中的信息。我們的安全頭部檢查器會自動評估這些必要的頭部及更多。"
        },
        {
          question: "安全得分是如何計算的？",
          answer: "安全得分是基於關鍵安全頭部的存在和正確配置計算的。主要安全頭部如內容安全策略和HSTS各貢獻最多20點，而X-Content-Type-Options和X-Frame-Options等其他頭部各貢獻10-15點。我們還評估實施的質量，而不僅僅是頭部的存在，最高分為100分。"
        },
        {
          question: "我可以使用這個工具檢查我不擁有的網站嗎？",
          answer: "是的，您可以使用HTTP頭部安全檢查器分析任何公開可訪問的網站。該工具只檢查HTTP響應頭，這是Web服務器發送的公開可用信息。但是，我們建議主要在您擁有或有權測試的網站上使用它。"
        },
        {
          question: "如何實施此工具推薦的安全頭部？",
          answer: "實施取決於您的Web服務器或平台。對於Apache，您可以在.htaccess文件中添加頭部。對於Nginx，您可以在服務器配置中添加它們。許多內容管理系統都有安全頭部插件。HTTP頭部安全檢查器提供了示例配置，您可以根據特定環境進行調整。"
        }
      ]
    },
    guide: {
      title: "如何使用HTTP頭部安全檢查器",
      steps: [
        "在URL輸入字段中輸入您要檢查的網站的完整URL（必須包含http://或https://）",
        "對於高級檢查，如果網站使用重定向，請考慮啟用'跟隨重定向'等選項",
        "點擊'檢查頭部'按鈕開始安全分析",
        "查看結果部分頂部的安全得分和總體評級",
        "檢查檢測到的安全頭部的詳細分析，每個都標有狀態指示符（良好、警告或不良）",
        "點擊任何安全頭部以展開並查看詳細信息，包括其當前值、用途和具體建議",
        "在'所有響應頭'部分查看服務器返回的所有HTTP響應頭的完整列表",
        "根據提供的建議在您的Web服務器上實施推薦的安全頭部，然後再次運行檢查器以驗證改進"
      ]
    },
    conclusion: "定期檢查和更新您網站的安全頭部是Web安全維護中的基本實踐。使用HTTP頭部安全檢查器，您可以輕鬆識別當前配置中的弱點，並實施必要的改進以增強對常見Web攻擊的防禦。請記住，安全頭部只是全面安全策略的一個方面，但它們以相對較小的實施努力提供了顯著的保護。"
  }
}