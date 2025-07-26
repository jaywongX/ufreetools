export default {
  name: 'IPアドレス検索ツール',
  description: '位置情報やネットワーク詳細を含むIPアドレスの詳細情報を取得',

  input: {
    title: 'IPアドレス検索',
    ipAddress: 'IPアドレス',
    ipPlaceholder: 'IPアドレスを入力（例：8.8.8.8）',
    hostname: 'ホスト名',
    hostnamePlaceholder: 'またはホスト名を入力（例：google.com）',
    options: '検索オプション',
    includeGeolocation: '位置情報を含める',
    includeASN: 'ASN情報を含める',
    includeDomains: '関連ドメインを含める',
    includeAbuse: '不正使用連絡先を含める',
    myIP: '自分のIPアドレスを使用'
  },

  actions: {
    lookup: 'IP検索',
    clear: '結果をクリア',
    copyIP: 'IPをコピー',
    copyAll: 'すべての情報をコピー',
    export: '結果をエクスポート'
  },

  results: {
    title: 'IP情報',
    noResults: '表示する情報がありません',
    error: 'エラー：{message}',
    unknown: '不明',
    queryTime: '検索時間',
    dataSource: 'データソース',
    general: {
      title: '基本情報',
      ipAddress: 'IPアドレス',
      hostname: 'ホスト名',
      type: 'タイプ',
      ipv4: 'IPv4',
      ipv6: 'IPv6',
      isPublic: 'パブリックIP',
      yes: 'はい',
      no: 'いいえ',
      reverse: 'リバースDNS'
    },
    location: {
      title: '位置情報',
      country: '国',
      region: '地域',
      city: '都市',
      postalCode: '郵便番号',
      timezone: 'タイムゾーン',
      coordinates: '座標',
      latitude: '緯度',
      longitude: '経度'
    },
    network: {
      title: 'ネットワーク',
      asn: 'ASN',
      organization: '組織',
      isp: 'インターネットサービスプロバイダ',
      usage: '使用タイプ',
      domain: 'ドメイン',
      route: 'ルート',
      subnet: 'サブネット',
      netmask: 'ネットマスク',
      cidr: 'CIDR表記'
    },
    security: {
      title: 'セキュリティ情報',
      threat: '脅威検出',
      isTor: 'Tor出口ノード',
      isProxy: 'プロキシ',
      isVpn: 'VPN',
      isAttacker: '既知の攻撃者',
      isAbuser: '既知の悪用者',
      threatLevel: '脅威レベル',
      confidenceScore: '信頼度スコア',
      abuseReports: '不正使用レポート',
      lastReported: '最終報告時間'
    },
    additional: {
      title: '追加情報',
      mobile: 'モバイルネットワーク',
      hosting: 'ホスティングプロバイダ',
      associated: '関連ドメイン',
      abuseContact: '不正使用連絡先'
    }
  },

  map: {
    title: '位置マップ',
    noLocation: '利用可能な位置データがありません',
    viewLarger: '大きいマップを表示'
  },

  messages: {
    lookingUp: '{query}の情報を検索中...',
    copied: 'クリップボードにコピーしました',
    exported: '結果のエクスポートに成功しました',
    invalidIP: '無効なIPアドレス',
    invalidHostname: '無効なホスト名',
    publicIPOnly: 'このツールはパブリックIPアドレスのみに対応しています',
    rateLimited: 'レート制限を超えました。後でもう一度お試しください。',
    historyCleared: '履歴がクリアされました'
  },

  history: {
    title: '検索履歴',
    clear: '履歴をクリア'
  }
};