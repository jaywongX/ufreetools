export default {
  name: 'JPGからJFIF変換ツール',
  description: 'オンラインでJPG画像をJFIF形式に変換、高品質、多様なオプション',
  tags: ['画像', '変換', 'jpg', 'jfif', 'jpeg', '形式', 'ツール'],

  meta: {
    title: 'JPGからJFIF変換ツール - 無料オンライン画像変換ツール',
    description: '無料オンラインでJPGをJFIFに変換。高速で安全なブラウザ内変換、バッチ処理、プレビュー比較、高度な品質設定をサポート。透かしなし、登録不要。'
  },

  upload: {
    title: 'JPGからJFIF変換ツール',
    subtitle: '完璧な品質でJPG画像をJFIF形式に変換',
    dropzone: 'JPGファイルをここにドラッグ＆ドロップ',
    dropzoneActive: 'ファイルを離して変換を開始',
    maxSize: '最大ファイルサイズ：50MB',
    supportedFormats: '対応フォーマット：JPG、JPEG'
  },

  settings: {
    title: '変換設定',
    advanced: '詳細設定',
    quality: {
      label: '画像品質',
      description: '高品質ほど大きなファイルになります',
      auto: '自動最適化（推奨）'
    },
    qualityLabels: {
      maximum: '最高品質',
      high: '高品質',
      good: '良好',
      medium: '中程度',
      low: '低品質',
      veryLow: '非常に低品質'
    },
    metadata: {
      label: '画像メタデータ',
      preserve: 'すべてのメタデータを保持（EXIF、GPSなど）',
      strip: 'すべてのメタデータを削除（ファイルサイズ縮小）',
      keepBasic: '基本メタデータのみ保持'
    },
    filenameOption: '出力ファイル名',
    filenameOriginal: '元のまま',
    filenameConverted: 'プレフィックスを追加',
    filenameCustom: 'カスタム',
    filenameTemplatePlaceholder: '例：converted-{name}',
    filenameTemplateHelp: '{name}を使用して元のファイル名を挿入',
    preserveMetadata: '画像メタデータを保持'
  },

  preview: {
    title: '画像プレビュー',
    before: 'JPG原画像',
    after: 'JFIFプレビュー',
    noPreview: 'プレビューなし',
    togglePreview: 'プレビュー表示/非表示',
    imageDetails: '画像詳細'
  },

  fileTable: {
    fileName: 'ファイル名',
    type: 'タイプ',
    size: 'サイズ',
    status: 'ステータス',
    preview: 'プレビュー',
    pending: '待機中',
    converting: '変換中...',
    done: '完了',
    error: 'エラー',
    progress: '進捗'
  },

  results: {
    title: '変換後のファイル',
    summary: '{count}個のファイルを変換し、合計{saved}の容量を節約しました',
    originalName: '元の名前',
    convertedName: '変換後の名前',
    originalSize: '元のサイズ',
    convertedSize: '新しいサイズ',
    compressionRate: '圧縮率',
    actions: 'アクション',
    noResults: '変換結果はまだありません'
  },

  actions: {
    selectFile: 'ファイルを選択',
    addMore: '追加',
    clear: 'ファイルをクリア',
    convertAll: 'すべて変換',
    converting: '変換中...',
    download: 'ダウンロード',
    downloadAll: 'すべてダウンロード',
    clearResults: '結果をクリア',
    viewDetails: '詳細を表示',
    compare: '比較',
    retry: '失敗を再試行',
    cancelAll: 'キャンセル',
    optimizeAll: '自動最適化'
  },

  messages: {
    noValidFiles: '有効なJPGまたはJPEGファイルを選択してください。',
    conversionError: 'ファイル変換中にエラーが発生しました。再試行してください。',
    conversionSuccess: 'すべてのファイルが正常に変換されました！',
    partialSuccess: '{total}個のファイルのうち{success}個が正常に変換されました。',
    downloadStarted: 'ダウンロードを開始しました...',
    processingFiles: 'ファイルを処理中...',
    dragActive: 'ファイルをここにドロップしてアップロード',
    fileSizeExceeded: 'ファイルサイズが50MB制限を超えています',
    unsupportedFormat: '対応していないファイル形式です'
  },

  history: {
    title: '最近の変換',
    empty: '最近の変換はありません',
    clear: '履歴をクリア',
    restore: 'ファイルを復元'
  },

  info: {
    title: 'JPGからJFIFへの変換について',
    description: '当社のJPGからJFIF変換ツールを使用すると、JPG画像ファイルをJFIF形式に素早く簡単に変換できます。すべての処理はお使いのブラウザ内で安全に行われます。',
    
    whatIs: {
      title: 'JFIFとは？',
      content: 'JFIF（JPEG File Interchange Format）はJPEGファイルのファイル形式標準です。解像度、アスペクト比、その他のメタデータなどの追加情報を提供し、JPEG画像が異なるデバイスやプラットフォームで正しく表示されるよう支援します。JFIFとJPGは技術的には関連フォーマットですが、一部のソフトウェアやデバイスでは、どちらか一方との互換性が高い場合があります。'
    },
    
    whyConvert: {
      title: 'なぜJPGをJFIFに変換するのか？',
      reason1: '一部の古いソフトウェアシステムは特にJFIF形式を必要とします',
      reason2: '一部の専門アプリケーションはJFIFとの互換性が高い場合があります',
      reason3: '一貫したファイル拡張子で画像コレクションを標準化',
      reason4: '特定の画像処理ワークフローでメタデータが正しく処理されるようにする'
    },
    
    howItWorks: {
      title: '仕組み',
      content: '当社の変換ツールはJPGファイルをブラウザ内で完全に処理します。画像がサーバーにアップロードされることはなく、完全なプライバシーとセキュリティを確保します。このツールはJPG画像データを読み取り、レンダリングし、選択した品質設定で標準JFIF形式として保存します。'
    },
    
    tips: {
      title: '最良の結果を得るためのヒント',
      tip1: '品質スライダーを使用してファイルサイズと画像品質のバランスを取る',
      tip2: 'テキストや鮮明な詳細を含む画像には、より高い品質設定を使用する',
      tip3: '複数のファイルを一度にバッチ変換し、ZIPファイルとしてダウンロードする',
      tip4: '「自動最適化」を使用して品質とファイルサイズの最適なバランスを得る',
      tip5: 'プライバシーが重要な場合は、メタデータを削除してファイルサイズを小さくする'
    },
    
    privacy: {
      title: 'プライバシーとセキュリティ',
      content: '私たちはあなたのプライバシーを真剣に考えています。すべての処理はブラウザ内で直接行われ、ファイルがサーバーにアップロードされることはありません。これにより、画像の完全なセキュリティとプライバシーが確保されます。'
    }
  }
};