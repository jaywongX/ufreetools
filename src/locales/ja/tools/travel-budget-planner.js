export default {
  name: '旅行予算プランナー',
  description: '旅行予算を計画し計算、旅行費用を簡単に管理',
  
  // 主要界面元素
  planYourTrip: '旅行を計画する',
  destination: '目的地',
  startDate: '開始日',
  endDate: '終了日',
  travelers: '旅行者数',
  currency: '表示通貨',
  tripDuration: '旅行日数',
  totalBudget: '総予算',
  perPersonBudget: '一人あたりの予算',
  perDayBudget: '一日あたりの予算',
  
  // 按钮和操作
  calculate: '予算を計算',
  reset: 'リセット',
  addExpense: '支出項目を追加',
  removeExpense: '削除',
  saveAsPDF: 'PDFとして保存',
  
  // 分类标题
  categories: {
    transport: '交通',
    accommodation: '宿泊',
    food: '食事',
    activities: 'アクティビティと観光',
    shopping: 'ショッピング',
    misc: 'その他の費用',
    emergency: '緊急予備金'
  },
  
  // 交通选项
  transport: {
    title: '交通費',
    flight: '航空券',
    train: '電車',
    bus: 'バス',
    car: 'レンタカー/燃料',
    taxi: 'タクシー/配車サービス',
    publicTransport: '公共交通機関',
    other: 'その他の交通'
  },
  
  // 住宿选项
  accommodation: {
    title: '宿泊費',
    hotel: 'ホテル',
    hostel: 'ホステル',
    apartment: '民泊/アパートメント',
    camping: 'キャンプ',
    other: 'その他の宿泊'
  },
  
  // 餐饮选项
  food: {
    title: '食費',
    restaurants: 'レストラン',
    streetFood: '屋台/軽食',
    groceries: '食材購入',
    drinks: '飲料/酒',
    other: 'その他の食事'
  },
  
  // 活动选项
  activities: {
    title: 'アクティビティと観光',
    attractions: '観光地入場料',
    tours: 'ガイド/ツアー',
    entertainment: 'エンターテイメント',
    other: 'その他のアクティビティ'
  },
  
  // 其他费用
  misc: {
    title: 'その他の費用',
    insurance: '旅行保険',
    visa: 'ビザ費用',
    souvenirs: 'お土産',
    internet: 'インターネット費用',
    tips: 'チップ',
    other: 'その他の雑費'
  },
  
  // 表格标题
  table: {
    category: 'カテゴリ',
    description: '説明',
    amount: '金額',
    actions: '操作'
  },
  
  // 统计和分析
  analysis: {
    title: '予算分析',
    summary: '予算概要',
    breakdown: '費用内訳',
    distribution: '予算分布',
    dailyAverage: '一日平均',
    suggestions: '予算提案'
  },
  
  // 货币
  currencies: {
    CNY: '人民元 (¥)',
    USD: '米ドル ($)',
    EUR: 'ユーロ (€)',
    JPY: '日本円 (¥)',
    GBP: 'ポンド (£)',
    KRW: '韓国ウォン (₩)',
    AUD: 'オーストラリアドル ($)',
    CAD: 'カナダドル ($)',
    THB: 'タイバーツ (฿)',
    SGD: 'シンガポールドル ($)'
  },
  
  // 常见目的地
  destinations: {
    domestic: '国内目的地',
    international: '海外目的地',
    popularCities: '人気都市',
    beijing: '北京',
    shanghai: '上海',
    guangzhou: '広州',
    shenzhen: '深セン',
    hangzhou: '杭州',
    chengdu: '成都',
    xian: '西安',
    sanya: '三亜',
    tokyo: '東京',
    osaka: '大阪',
    seoul: 'ソウル',
    bangkok: 'バンコク',
    singapore: 'シンガポール',
    paris: 'パリ',
    london: 'ロンドン',
    newyork: 'ニューヨーク',
    sydney: 'シドニー',
    custom: 'カスタム目的地'
  },
  
  // 提示和建议
  tips: {
    general: '一般的なアドバイス',
    saveMoney: '予算節約のヒント',
    localCurrency: '現地通貨のヒント',
    emergencyFund: '総予算の10-15%を緊急予備金として確保することをお勧めします',
    transport: '航空券を事前に予約すると通常費用を節約できます',
    accommodation: 'キッチン付きの宿泊施設を選ぶと食費を減らせます',
    food: '国際チェーンレストランより地元の手頃な価格の料理を試す方が経済的です',
    planning: '詳細な毎日の計画を立てると予算管理に役立ちます',
    extraCosts: 'チップ、インターネット、交通カードなどの小額費用も忘れずに考慮しましょう'
  },
  
  // 提示信息
  messages: {
    success: '予算が正常に計算されました',
    error: 'すべての必須項目を入力してください',
    dateError: '終了日は開始日より後である必要があります',
    saved: '予算プランが保存されました',
    deleted: '予算プランが削除されました',
    highBudget: 'あなたの予算はこの目的地の平均レベルより高いようです',
    lowBudget: '予算が低すぎる可能性があります。すべての必要な支出をカバーしていることを確認してください'
  },
  
  // 页脚介绍信息
  about: {
    title: '旅行予算プランナーについて',
    description: '旅行予算プランナーは、旅行費用の管理を支援するツールで、旅行を楽しく経済的にします。各支出を詳細に計画することで、旅行中の資金的なプレッシャーを避け、旅行体験を最大限に楽しむことができます。',
    
    featuresTitle: '主な機能',
    feature1: '旅行先、期間、人数に基づいた合理的な予算の作成',
    feature2: '交通、宿泊、食事、アクティビティなど各種旅行支出の詳細分類',
    feature3: '予算分析とビジュアル表示の提供',
    feature4: '複数通貨の表示と変換のサポート',
    feature5: '旅行費用を節約するための実用的なアドバイスの提供',
    feature6: '予算プランのエクスポートと保存が可能',
    
    benefitsTitle: '使用メリット',
    benefit1: '旅行中の予算オーバーを回避',
    benefit2: '異なる旅行要素に資金を合理的に配分',
    benefit3: '旅行の財政的プレッシャーを軽減',
    benefit4: '旅行計画の効率を向上',
    benefit5: '異なる旅行スタイルと予算ニーズに対応',
    
    tipsTitle: '予算計画のヒント',
    tip1: '旅行先の物価水準に応じて予算を調整する',
    tip2: '予期せぬ状況のために10-15%の資金を確保する',
    tip3: 'オフシーズンの旅行は宿泊費と交通費を大幅に節約できる',
    tip4: 'クレジットカードを使用する際は海外手数料に注意する',
    tip5: '万が一の緊急事態に備えて旅行保険の購入を検討する'
  }
}; 