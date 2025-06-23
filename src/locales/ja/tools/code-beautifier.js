export default {
    name: 'コードビューティファイア',
    description: 'シンタックスハイライトとインデントでコードをフォーマットして美化',
    languages: {
      title: '言語',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      json: 'JSON',
      sql: 'SQL',
      xml: 'XML',
      markdown: 'Markdown',
      php: 'PHP',
      python: 'Python',
      ruby: 'Ruby',
      java: 'Java',
      csharp: 'C#',
      cpp: 'C++',
      typescript: 'TypeScript'
    },
    actions: {
      beautify: '美化',
      minify: '圧縮',
      clear: 'クリア',
      copy: 'コピー',
      download: 'ダウンロード',
      upload: 'ファイルをアップロード'
    },
    options: {
      title: 'オプション',
      indentSize: 'インデントサイズ',
      indentWith: 'インデント方法',
      spaces: 'スペース',
      tabs: 'タブ',
      lineBreaks: '改行スタイル',
      quoteStyle: '引用符スタイル',
      bracketStyle: '括弧スタイル',
      preserveNewlines: '改行を保持',
      endWithNewline: '改行で終了',
      removeComments: 'コメントを削除',
      wrapLineLength: '折り返し長さ',
      lineNumbers: '行番号',
      showLineNumbers: '行番号を表示',
      wrapLines: '自動折り返し',
      theme: 'テーマ',
      autoDetect: '自動検出',
      tryAutoDetect: '言語を自動検出'
    },
    input: {
      title: '入力',
      placeholder: 'ここにコードを貼り付け...'
    },
    output: {
      title: '出力',
      placeholder: '美化されたコードがここに表示されます...'
    },
    messages: {
      copied: 'クリップボードにコピーしました！',
      beautifySuccess: 'コードの美化に成功しました',
      minifySuccess: 'コードの圧縮に成功しました',
      beautifyError: 'コードの美化中にエラーが発生しました',
      minifyError: 'コードの圧縮中にエラーが発生しました',
      emptyCode: '美化するコードを入力してください',
      fileTooBig: 'ファイルが大きすぎます（最大2MB）',
      invalidFile: '無効またはサポートされていないファイルタイプ',
      preview: 'プレビュー',
      HTMLCode: 'HTML コード'
    },
    stats: {
      original: '元のコード',
      beautified: '美化後',
      minified: '圧縮後',
      size: 'サイズ',
      characters: '文字数',
      lines: '行数'
    },
    tips: {
      title: '使用ヒント',
      tip1: '最適なシンタックスハイライトのために適切なプログラミング言語を選択してください',
      tip2: 'ウェブサイトのスタイルに合わせて異なるテーマスタイルを選択できます',
      tip3: '生成されたHTMLコードをコピーして、HTMLをサポートするエディタやウェブサイトに直接貼り付けることができます',
      tip4: '生成されたハイライトコードはレスポンシブとダークモードをサポートしています',
      tip5: 'コード表示時に行番号を追加すると、読みやすさと参照のしやすさが向上します'
    }
  }