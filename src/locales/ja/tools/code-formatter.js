export default {
    name: 'コードフォーマッター',
    description: '様々な言語のコードをフォーマットして美化',
    languages: {
      title: '言語',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      typescript: 'TypeScript',
      json: 'JSON',
      sql: 'SQL',
      xml: 'XML',
      markdown: 'Markdown'
    },
    options: {
      title: 'オプション',
      indent: 'インデント',
      tabSize: 'タブサイズ',
      insertSpaces: 'スペースを挿入',
      formatSelection: '選択部分をフォーマット',
      formatOnType: '入力時にフォーマット',
      removeComments: 'コメントを削除',
      mangle: '変数名の難読化',
      lineBreak: '改行スタイル'
    },
    actions: {
      beautify: '美化',
      minify: '圧縮',
      format: 'フォーマット',
      copy: '結果をコピー',
      clear: 'クリア',
      download: 'ダウンロード',
      paste: 'クリップボードから貼り付け',
      loadSample: 'サンプルコードを読み込む'
    },
    messages: {
      formatSuccess: 'コードのフォーマットに成功しました',
      formatError: 'コードのフォーマット中にエラーが発生しました',
      copied: 'クリップボードにコピーしました！',
      languageChangeWarning: '言語を変更するとコードがリセットされます。続行しますか？'
    },
    errors: {
      emptyCode: 'フォーマットするコードを入力してください',
      invalidJson: '無効なJSON',
      jsCompressionError: 'JavaScript圧縮エラー'
    },
    input: '入力',
    output: '出力',
    placeholders: {
      input: 'ここにコードを貼り付け...',
      output: 'フォーマットされたコードがここに表示されます...'
    },
    characters: '文字数',
    space: 'スペース',
    spaces: 'スペース',
    auto: '自動',
    tips: {
      title: '使用ヒント',
      selectLanguage: '最適なフォーマット結果を得るには、コードに適した言語を選択してください。',
      beautifyMinify: '読みやすさを向上させるには「美化」機能を、ファイルサイズを小さくするには「圧縮」機能を使用してください。',
      customizeOptions: '下部の設定パネルでフォーマットオプションをカスタマイズできます。',
      keyboard: 'エディタでTabキーを押すとインデントが挿入されます。'
    }
  }