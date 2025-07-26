export default {
  name: 'Cookieマネージャー',
  description: '現在のウェブサイトのCookieを表示、作成、編集および削除',

  // 主要機能タブ
  currentCookies: '現在のCookie',

  createCookie: 'Cookieを作成',
  importExport: 'インポート／エクスポート',

  // Cookie一覧
  noCookies: '現在、このウェブサイトにはCookieがありません',

  cookieName: '名前',
  cookieValue: '値',
  cookieDomain: 'ドメイン',
  cookiePath: 'パス',
  cookieExpires: '有効期限',
  cookieSecure: 'セキュア(Secure)',
  cookieHttpOnly: 'HttpOnly',
  cookieSameSite: 'SameSite',
  actions: '操作',
  edit: '編集',
  delete: '削除',
  save: '保存',
  cancel: 'キャンセル',
  refresh: '更新',

  // 作成・編集フォーム
  addCookie: 'Cookieを追加',

  editCookie: 'Cookieを編集',
  required: '必須項目',
  optional: 'オプション項目',
  days: '日',
  hours: '時間',
  minutes: '分',
  cookieCreated: 'Cookieを作成しました',
  cookieUpdated: 'Cookieを更新しました',
  cookieDeleted: 'Cookieを削除しました',
  createError: 'Cookie作成中にエラーが発生しました',
  updateError: 'Cookie更新中にエラーが発生しました',
  deleteError: 'Cookie削除中にエラーが発生しました',

  // インポート・エクスポート
  export: 'Cookieをエクスポート',

  import: 'Cookieをインポート',
  exportAs: 'エクスポート形式',
  exportSuccess: 'Cookieをエクスポートしました',
  importSuccess: '{count}個のCookieをインポートしました',
  importError: 'Cookieのインポート中にエラーが発生しました',

  // セキュリティオプション
  none: 'なし',

  strict: '厳格',
  lax: '緩やか',

  // ヒントと説明
  domainNote: '空欄にすると現在のドメインを使用します',

  pathNote: 'デフォルトはルートパス"/"です',
  expiresNote: '設定しない場合はセッションCookieになります',
  secureNote: 'HTTPS経由でのみ送信されます',
  httpOnlyNote: 'JavaScriptからのアクセス不可',
  sameSiteNote: 'クロスサイト要求制御',

  // インポート形式
  importFormat: 'インポート例:\nname=value; expires=date; path=/; domain=example.com; secure; httpOnly; sameSite=strict',

  jsonFormat: 'JSON形式',
  textFormat: 'テキスト形式',
  invalidFormat: '無効な形式です'
};