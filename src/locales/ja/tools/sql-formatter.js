export default {
    name: 'SQLフォーマッター',
    description: 'オンラインSQLフォーマット＆バリデーションツール、圧縮と整形をサポート',
    options: {
      language: 'SQL方言',
      indent: 'インデント方式',
      spaceCount: 'スペース数',
      keywordCase: 'キーワードの大文字小文字',
      uppercase: 'キーワードを大文字に',
      lineBreak: '改行スタイル',
      tabSize: 'タブサイズ'
    },
    languages: {
      standard: '標準SQL',
      mysql: 'MySQL',
      postgresql: 'PostgreSQL',
      sqlite: 'SQLite',
      tsql: 'T-SQL (SQL Server)',
      oracle: 'Oracle PL/SQL'
    },
    indentOptions: {
      spaces: 'スペース',
      tabs: 'タブインデント'
    },
    spaceOptions: {
      two: '2スペース',
      four: '4スペース'
    },
    caseOptions: {
      preserve: '元のまま',
      upper: '大文字',
      lower: '小文字'
    },
    actions: {
      format: 'SQLをフォーマット',
      minify: 'SQLを圧縮',
      clear: 'クリア',
      copy: 'コピー',
      download: 'ダウンロード',
    },
    messages: {
      copied: 'クリップボードにコピーしました！',
      formatSuccess: 'SQLフォーマット成功',
      formatError: 'SQLフォーマット中にエラーが発生しました'
    },
    placeholders: {
      input: 'ここにSQLクエリを入力...',
      output: 'フォーマットされたSQLがここに表示されます...'
    },
    output: 'フォーマット結果',
    tips: {
      title: '使用上のヒント',
      dialect: '正確なフォーマット効果を得るために適切なSQL方言を選択してください。',
      formatting: '好みのコーディングスタイルに合わせてインデントスタイルとスペース数をカスタマイズできます。',
      keywords: 'SQLキーワードをそのまま保持するか、大文字または小文字に変換するかを選択します。',
      copy: 'コピーボタンを使用してフォーマットされたSQLをクリップボードに素早くコピーできます。'
    }
  }