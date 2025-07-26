export default {
  name: '正規表現テストツール',
  description: 'リアルタイムハイライトと解説付きで正規表現をテスト・デバッグ',

  actions: {
    test: 'テスト',
    clear: 'クリア',
    showExamples: '例を表示',
    hideExamples: '例を非表示',
    copy: 'コピー'
  },

  sections: {
    examples: 'よく使われる正規表現の例',
    pattern: '正規表現パターン',
    input: 'テスト文字列',
    results: 'マッチ結果',
    flags: 'フラグ'
  },

  flags: {
    g: 'グローバルマッチ (g)',
    i: '大文字小文字無視 (i)',
    m: 'マルチラインモード (m)',
    s: 'ドット全文字マッチ (s)',
    u: 'Unicodeモード (u)',
    y: '先頭固定マッチ (y)'
  },

  errors: {
    emptyRegex: '正規表現を入力してください',
    emptyTestString: 'テストするテキストを入力してください',
    invalidRegex: '無効な正規表現'
  },

  messages: {
    matchesFound: '{count} 件のマッチが見つかりました',
    noMatches: 'マッチする結果はありません',
    copied: 'クリップボードにコピーしました！'
  },

  placeholders: {
    pattern: '正規表現パターンを入力',
    testString: 'テストするテキストを入力'
  },

  options: {
    flags: 'フラグ',
    global: 'グローバルマッチ (g)',
    caseInsensitive: '大文字小文字無視 (i)',
    multiline: 'マルチラインモード (m)',
    dotAll: 'ドット全文字マッチ (s)',
    unicode: 'Unicodeモード (u)',
    sticky: '先頭固定マッチ (y)'
  },

  labels: {
    pattern: '正規表現',
    testString: 'テスト文字列',
    matches: 'マッチ結果',
    groups: 'グループ',
    noMatches: 'マッチする結果はありません'
  },

  tips: {
    title: '使用上のヒント',
    pattern: '正規表現パターンを入力する際、前後のスラッシュは不要です。',
    flags: 'フラグを使用してマッチ動作を変更できます（g：グローバル、i：大文字小文字無視、m：マルチライン）。',
    examples: '「例を表示」をクリックしてよく使われる正規表現パターンを確認・利用できます。',
    testing: 'パターンとテスト文字列を入力後、「テスト」をクリックしてマッチ結果を確認します。'
  },

  match: 'マッチ',
  position: '位置',
  group: 'グループ',
  resultsWillAppearHere: '正規表現のマッチ結果がここに表示されます...',
  regexError: '正規表現エラー: {message}',
  emailAddress: 'メールアドレス',
  phoneNumber: '電話番号(中国)',
  ipAddress: 'IPアドレス',
  dateFormat: '日付(yyyy-mm-dd)',
  chineseCharacters: '中国語文字',
  phoneNumberExample: '連絡先：13912345678\nWeChat同番号：18887654321\n固定電話：010-12345678',
  urlExample: 'アクセス https://example.com\nまたは http://www.domain.org/path?query=value',
  ipAddressExample: 'サーバーアドレス：192.168.1.1\nDNS：8.8.8.8, 114.114.114.114',
  dateFormatExample: '開始日：2023-01-15\n終了日：2023-02-28\n無効な日付：2023-13-45',
  chineseCharactersExample: 'Hello世界！你好，World!'
};