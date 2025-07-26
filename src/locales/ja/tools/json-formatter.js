export default {
  name: 'JSON整形ツール',
  description: 'オンラインJSON整形と検証ツール、圧縮と美化に対応',

  options: {
    indent: 'インデント',
    sort: 'キーを並べ替え',
    compress: '圧縮',
    beautify: '美化'
  },

  actions: {
    format: 'JSONを整形',
    compress:'圧縮',
    clear: 'クリア',
    copy: 'コピー',
    download: 'ダウンロード',
    transferMeaning: 'エスケープ',
    contraposition: 'アンエスケープ'
  },

  messages: {
    invalidJson: 'JSON構文が無効です',
    copied: 'クリップボードにコピーしました！',
    empty: 'JSONコンテンツを入力してください',
    formatTip: 'JSONを整形または圧縮すると、プロパティリストが表示されます',
    formatSuccess: 'JSONの整形に成功しました',
    compressSuccess: 'JSONの圧縮に成功しました',
    escapeSuccess: 'JSONのエスケープに成功しました',
    unescapeSuccess: 'JSONのアンエスケープに成功しました',
    copyFailed: 'コピーに失敗しました。手動でコピーしてください'
  },

  labels: {
    jsonData: 'JSONデータ',
    propertyList: 'プロパティリスト',
    clickToCopy: '(値をクリックしてコピー)'
  },

  placeholders: {
    jsonInput: 'JSONデータを貼り付けてください...'
  }
};