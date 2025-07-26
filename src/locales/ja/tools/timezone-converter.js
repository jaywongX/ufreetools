export default {
  name: 'タイムゾーンコンバーター',
  description: '世界中のタイムゾーンを比較・変換するツール。異なる国や地域の現在時刻を簡単に確認できます',

  // 主要機能タブ
  currentTime: '現在時刻',

  addTimezone: 'タイムゾーンを追加',
  removeTimezone: 'タイムゾーンを削除',
  convertTime: '時間を変換',
  compareTimezones: 'タイムゾーンを比較',

  // 設定とオプション
  settings: {
    date: '日付',
    time: '時間',
    format: 'フォーマット',
    select24Hour: '24時間表示',
    select12Hour: '12時間表示',
    showSeconds: '秒を表示',
    hideSeconds: '秒を非表示',
    showDate: '日付を表示',
    hideDate: '日付を非表示',
  },

  // タイムゾーン関連
  timezone: {
    title: 'タイムゾーン',
    search: 'タイムゾーンまたは都市を検索...',
    yourLocal: 'あなたのローカルタイムゾーン',
    popular: '主要タイムゾーン',
    allTimezones: 'すべてのタイムゾーン',
    utc: 'UTC(協定世界時)',
    gmt: 'GMT(グリニッジ標準時)',
    est: 'アメリカ東部時間',
    cst: '中国標準時',
    jst: '日本標準時',
    ist: 'インド標準時',
    cet: '中央ヨーロッパ時間',
    bst: '英国夏時間',
    aest: 'オーストラリア東部標準時',
    nzst: 'ニュージーランド標準時',
    custom: 'カスタムタイムゾーン'
  },

  // 地域と大陸グループ
  regions: {
    africa: 'アフリカ',
    america: 'アメリカ',
    asia: 'アジア',
    atlantic: '大西洋',
    australia: 'オーストラリア',
    europe: 'ヨーロッパ',
    indian: 'インド洋',
    pacific: '太平洋'
  },

  // 変換関連
  conversion: {
    from: '変換元',
    to: '変換先',
    convert: '変換',
    result: '変換結果',
    timeIn: '時刻（'
  },

  // UI要素
  ui: {
    now: '現在',
    refresh: '更新',
    copy: 'コピー',
    copied: 'コピーしました',
    share: '共有',
    reset: 'リセット',
    empty: '結果なし',
    offset: '時差',
    add: '追加'
  },

  // メッセージ
  messages: {
    invalid: '無効な時間',
    copied: 'クリップボードにコピーしました',
    removed: 'タイムゾーンを削除しました',
    added: 'タイムゾーンを追加しました',
    maxTimezones: '最大10個のタイムゾーンまで追加できます',
    selectTimezone: 'タイムゾーンを選択してください'
  },

  // ツール紹介
  aboutTitle: 'タイムゾーンコンバーターについて',

  aboutDescription: 'タイムゾーンコンバーターは、異なる地域の時間を簡単に確認・比較できる便利なツールです。国際的なコミュニケーション、旅行計画、国際会議のスケジュール調整などに最適です。',
  featuresTitle: '主な機能',
  feature1: '世界の主要都市とタイムゾーンの現在時刻をリアルタイム表示',
  feature2: '複数のタイムゾーン間の時間差を簡単に比較',
  feature3: '任意のタイムゾーンの時間を別のタイムゾーンに変換',
  feature4: '24時間表示と12時間表示に対応',
  feature5: '業務時間の重なりを一目で確認',
  feature6: '都市や国名で検索して対応するタイムゾーンを探せる',
  useCasesTitle: '使用シナリオ',
  useCase1: '国際的なビジネス会議や電話会議のスケジュール調整',
  useCase2: '国際旅行やフライト時間の計画',
  useCase3: '海外の友人や家族との連絡時間調整',
  useCase4: '重要な国際イベントの現地時間の追跡',
  useCase5: 'リモートワークチームの協業時間調整',
  howToUseTitle: '使い方',
  howToUse1: '複数のタイムゾーンを追加して異なる地域の現在時刻を同時表示',
  howToUse2: '変換機能を使って特定の時間を別のタイムゾーンに変換',
  howToUse3: '日付と時間の表示フォーマットをカスタマイズ',
  howToUse4: '結果をコピーまたはリンクを生成して共有'
};