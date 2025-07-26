export default {
  name: 'IP位址查詢工具',
  description: '獲取IP位址的詳細資訊，包括位置和網路詳情',

  input: {
    title: 'IP位址查詢',
    ipAddress: 'IP位址',
    ipPlaceholder: '輸入IP位址（例如：8.8.8.8）',
    hostname: '主機名稱',
    hostnamePlaceholder: '或輸入主機名稱（例如：google.com）',
    options: '查詢選項',
    includeGeolocation: '包含地理位置',
    includeASN: '包含ASN資訊',
    includeDomains: '包含關聯網域',
    includeAbuse: '包含濫用聯絡人',
    myIP: '使用我的IP位址'
  },

  actions: {
    lookup: '查詢IP',
    clear: '清除結果',
    copyIP: '複製IP',
    copyAll: '複製所有資訊',
    export: '匯出結果'
  },

  results: {
    title: 'IP資訊',
    noResults: '沒有可顯示的資訊',
    error: '錯誤：{message}',
    unknown: '未知',
    queryTime: '查詢時間',
    dataSource: '資料來源',
    general: {
      title: '基本資訊',
      ipAddress: 'IP位址',
      hostname: '主機名稱',
      type: '類型',
      ipv4: 'IPv4',
      ipv6: 'IPv6',
      isPublic: '公共IP',
      yes: '是',
      no: '否',
      reverse: '反向DNS'
    },
    location: {
      title: '位置',
      country: '國家',
      region: '地區',
      city: '城市',
      postalCode: '郵遞區號',
      timezone: '時區',
      coordinates: '座標',
      latitude: '緯度',
      longitude: '經度'
    },
    network: {
      title: '網路',
      asn: 'ASN',
      organization: '組織',
      isp: '網際網路服務供應商',
      usage: '使用類型',
      domain: '網域',
      route: '路由',
      subnet: '子網路',
      netmask: '網路遮罩',
      cidr: 'CIDR表示法'
    },
    security: {
      title: '安全資訊',
      threat: '威脅檢測',
      isTor: 'Tor出口節點',
      isProxy: '代理',
      isVpn: 'VPN',
      isAttacker: '已知攻擊者',
      isAbuser: '已知濫用者',
      threatLevel: '威脅等級',
      confidenceScore: '置信度分數',
      abuseReports: '濫用報告',
      lastReported: '最後報告時間'
    },
    additional: {
      title: '附加資訊',
      mobile: '行動網路',
      hosting: '託管供應商',
      associated: '關聯網域',
      abuseContact: '濫用聯絡人'
    }
  },

  map: {
    title: '位置地圖',
    noLocation: '沒有可用的位置資料',
    viewLarger: '查看更大的地圖'
  },

  messages: {
    lookingUp: '正在查找{query}的資訊...',
    copied: '已複製到剪貼簿',
    exported: '結果匯出成功',
    invalidIP: '無效的IP位址',
    invalidHostname: '無效的主機名稱',
    publicIPOnly: '此工具僅適用於公共IP位址',
    rateLimited: '超出速率限制。請稍後再試。',
    historyCleared: '歷史記錄已清除'
  },

  history: {
    title: '搜尋歷史',
    clear: '清除歷史'
  }
};