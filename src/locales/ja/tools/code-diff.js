export default {
  name: 'コード差分比較',
  description: '2つのコードを比較して差分をハイライト表示',

  options: {
    title: 'オプション',
    ignoreCase: '大文字小文字を無視',
    ignoreWhitespace: '空白を無視',
    trimWhitespace: '空白をトリミング',
    diffMode: '差分モード',
    diffModes: {
      chars: '文字単位',
      words: '単語単位',
      lines: '行単位',
      sentences: '文単位',
      json: 'JSON'
    },
    diffStyle: '表示スタイル',
    diffStyles: {
      split: '分割ビュー',
      inline: 'インラインビュー'
    },
    context: 'コンテキスト行数',
    wrap: '自動折り返し',
    languages: {
      plaintext: 'プレーンテキスト',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      json: 'JSON'
    }
  },

  inputs: {
    original: '元のコード',
    modified: '変更後のコード',
    placeholderOriginal: '元のコードを入力...',
    placeholderModified: '変更後のコードを入力...'
  },

  actions: {
    compare: '比較',
    clear: 'クリア',
    swap: '入れ替え',
    copy: '差分をコピー',
    download: '差分をダウンロード',
    upload: 'ファイルをアップロード'
  },

  results: {
    title: '差分結果',
    changes: '変更',
    additions: '追加',
    deletions: '削除',
    unchanged: '未変更',
    noChanges: '差分が見つかりません - テキストは同一です',
    loading: '差分を生成中...'
  },

  upload: {
    originalFile: '元のファイル',
    modifiedFile: '変更後のファイル',
    dropOriginal: '元ファイルをドラッグまたはクリックして選択',
    dropModified: '変更後ファイルをドラッグまたはクリックして選択'
  },

  messages: {
    copied: 'クリップボードにコピーしました！',
    inputRequired: '両方の入力欄にテキストを入力してください',
    diffGenerated: '差分の生成に成功しました',
    error: '差分生成中にエラーが発生しました',
    fileError: 'ファイル読み込み中にエラーが発生しました'
  },

  tips: {
    title: '使用上のヒント',
    compareOptions: '比較オプションを調整してニーズに合わせてください - 空白無視はコード比較に役立ちます',
    diffModes: '異なる差分モードで詳細レベルを変更できます',
    largeFiles: '大きなファイルには行単位の比較が効率的です',
    jsonMode: 'JSONモードで構造化データを比較 - オブジェクト構造を標準化して比較します'
  }
};