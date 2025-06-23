export default {
  name: '不適切な単語フィルター',
  description: 'テキスト内の不適切な単語を検出・フィルタリングし、カスタム辞書とフィルタリングルールをサポート',
  input: {
    title: '入力テキスト',
    placeholder: '検出したいテキストを入力してください...',
    loadSample: 'サンプルを読み込む',
    clearInput: '入力をクリア',
    uploadFile: 'テキストファイルをアップロード'
  },
  output: {
    title: 'フィルタリング後のテキスト',
    original: '元のテキスト',
    filtered: 'フィルタリング後のテキスト',
    statistics: '統計データ',
    copyOutput: 'フィルタリング後のテキストをコピー',
    clearOutput: '出力をクリア',
    download: 'フィルタリング後のテキストをダウンロード'
  },
  options: {
    title: 'フィルタリングオプション',
    filterMode: 'フィルタリングモード',
    caseSensitive: '大文字と小文字を区別',
    wholeWordOnly: '完全一致のみ',
    customReplacement: 'カスタム置換',
    replacementChar: '置換文字',
    highlightWords: '不適切な単語をハイライト',
    customDictionary: 'カスタム辞書',
    importDictionary: '辞書をインポート',
    exportDictionary: '辞書をエクスポート'
  },
  filterModes: {
    replace: '不適切な単語を置換',
    highlight: '不適切な単語をハイライト',
    remove: '不適切な単語を削除',
    detect: '検出のみ'
  },
  dictionary: {
    title: '単語辞書',
    add: '単語を追加',
    remove: '削除',
    clear: '辞書をクリア',
    wordInput: '追加する単語を入力',
    categories: 'カテゴリー',
    severity: '重要度',
    bulkAdd: '一括追加',
    search: '辞書を検索'
  },
  categories: {
    profanity: '卑猥語',
    slurs: '中傷',
    adult: '成人向けコンテンツ',
    offensive: '攻撃的なコンテンツ',
    violence: '暴力',
    discrimination: '差別',
    personal: '個人情報',
    custom: 'カスタム'
  },
  severityLevels: {
    low: '低',
    medium: '中',
    high: '高',
    critical: '重大'
  },
  statistics: {
    totalWords: '総単語数',
    sensitiveWords: '不適切な単語数',
    uniqueSensitiveWords: 'ユニークな不適切な単語数',
    severityBreakdown: '重要度の内訳',
    categoryBreakdown: 'カテゴリー内訳',
    cleanlinessScore: '純度スコア'
  },
  filterOptions: {
    title: 'フィルターモード',
    modes: {
      asterisk: '* に置換',
      custom: 'カスタム置換文字',
      remove: '不適切な単語を削除'
    },
    replaceChar: {
      title: '置換文字',
      placeholder: '置換文字を入力'
    }
  },
  customWords: {
    title: 'カスタム不適切単語辞書',
    addWord: '単語を追加',
    addPrompt: '追加する不適切な単語を入力してください：',
    removeWord: '削除'
  },
  actions: {
    filter: 'フィルタリング開始',
    reset: 'リセット',
    processing: '処理中...',
    clearAll: 'すべてクリア',
    copyFiltered: 'フィルタリング後のテキストをコピー',
    downloadReport: 'レポートをダウンロード',
    resetSettings: '設定をリセット'
  },
  results: {
    title: 'フィルタリング結果',
    tabs: {
      filteredResult: 'フィルタリング結果',
      detectionReport: '検出レポート'
    },
    filteredText: {
      title: 'フィルタリング後のテキスト',
      copy: '結果をコピー',
      empty: 'フィルタリング結果がありません'
    },
    statistics: {
      detectedCount: '検出された不適切な単語の数',
      retentionRate: 'テキスト保持率',
      totalWords: 'テキスト総単語数'
    },
    detectedWords: {
      title: '検出された不適切な単語',
      empty: '不適切な単語は検出されませんでした'
    }
  },
  messages: {
    copied: 'クリップボードにコピーされました',
    copyFailed: 'コピーに失敗しました。手動でコピーしてください',
    noInput: 'フィルタリングするテキストを入力してください',
    inputTooLong: '入力テキストが長すぎます',
    wordAdded: '単語が不適切単語辞書に追加されました',
    wordExists: 'この単語は既に不適切単語辞書に存在します',
    wordRemoved: '単語が不適切単語辞書から削除されました',
    filterSuccess: 'テキストのフィルタリングが成功しました',
    noSensitiveWords: '不適切な単語は見つかりませんでした',
    dictionaryCleared: '辞書がクリアされました',
    dictionaryImported: '辞書がインポートされました',
    dictionaryExported: '辞書がエクスポートされました',
    emptyText: 'フィルタリングするテキストを入力してください'
  },
  article: {
    title: '不適切な単語フィルター：包括的なテキストコンテンツフィルタリングツール',
    functionality: {
      title: 'ツールの機能と特徴',
      description: '<strong>不適切な単語フィルター</strong>は、テキスト内の不適切、不適当、または攻撃的なコンテンツを識別してフィルタリングするために設計された強力なテキスト処理ツールです。高度なパターンマッチングアルゴリズムを使用して潜在的な問題のある単語やフレーズを検出し、お好みに応じて自動的に置換または削除します。このテキストフィルタリングツールはカスタム辞書、複数のフィルタリングモードをサポートし、検出された不適切なコンテンツの詳細な統計分析を提供します。'
    },
    useCases: {
      title: '実際の応用とユースケース',
      list: [
        '<strong>ウェブサイトコンテンツの審査</strong>：コメント、フォーラム投稿、レビューなどのユーザー生成コンテンツを自動的にスクリーニングし、安全で尊重されるオンライン環境を維持します。',
        '<strong>教育資料の審査</strong>：教材や学生の提出物に不適切な言葉が含まれていないことを確認し、教室や教育プラットフォームに適用します。',
        '<strong>カスタマーサービスコンテンツのスクリーニング</strong>：対外的なコミュニケーションをフィルタリングし、プロフェッショナルな基準を維持し、潜在的に攻撃的な言葉を避けるようにします。',
        '<strong>ソーシャルメディア管理</strong>：ソーシャルメディアプラットフォームに投稿する前にコンテンツを審査・クリーニングし、プラットフォームポリシー違反を防ぎます。',
        '<strong>テキストデータの準備</strong>：攻撃的または偏見のある言葉を削除することで、機械学習と分析用のテキストデータセットをクリーニングします。',
        '<strong>企業コミュニケーションのコンプライアンス</strong>：内部および外部のコミュニケーションが企業の言語ポリシーとプロフェッショナルな基準に準拠していることを確認します。'
      ]
    },
    faq: {
      title: '不適切な単語フィルタリングに関するよくある質問',
      items: [
        {
          question: '不適切な単語検出の精度はどの程度ですか？',
          answer: '<strong>不適切な単語検出</strong>システムは、精密なパターンマッチングアルゴリズムを採用しており、高い精度を持っています。ただし、文脈を理解したフィルタリング（単語の背後にある意味を理解すること）は依然として課題があります。このツールでは、検出された単語を確認し、特定のニーズに合わせて辞書をカスタマイズすることで、精度を向上させることができます。'
        },
        {
          question: '自分のカスタム辞書を作成して保存できますか？',
          answer: 'はい、<strong>カスタム不適切単語辞書</strong>機能を使用すると、コンテンツのニーズに特化した不適切な単語を追加できます。フィルターに単語を簡単に追加でき、フィルタリングプロセス中に適用されます。'
        },
        {
          question: 'どのようなフィルタリングモードが利用できますか？',
          answer: 'このツールは複数の<strong>テキストフィルタリングモード</strong>を提供しています：アスタリスク(*)による不適切な単語の置換、カスタム置換文字の使用、またはテキストからの不適切な単語の完全な削除。ニーズに最も適したモードを選択できます。'
        },
        {
          question: 'このツールは異なる言語を処理できますか？',
          answer: 'はい、<strong>多言語不適切単語フィルター</strong>は様々な言語に適用可能ですが、その効果は言語によって異なる場合があります。このツールは主に文字パターンマッチングに焦点を当てており、異なる書記体系に適用可能です。'
        },
        {
          question: '大量のテキストをどのように処理しますか？',
          answer: '<strong>バッチテキストフィルタリング</strong>の場合、コンテンツを入力エリアに貼り付けるだけです。このツールは大量のテキストを効率的に処理できるように最適化されていますが、非常に大きなテキストではより多くの処理時間が必要になる場合があります。非常に大きな文書の場合は、それらを部分的に処理することを検討してください。'
        }
      ]
    },
    tutorial: {
      title: '不適切な単語フィルターの使用手順ガイド',
      steps: [
        '<strong>テキストを入力</strong>：まず、フィルタリングしたいテキストを入力テキストエリアに入力または貼り付けます。',
        '<strong>フィルタリングオプションを設定</strong>：お好みのフィルタリングモード（アスタリスクへの置換、カスタム文字、または単語の削除）を選択します。',
        '<strong>カスタム不適切単語辞書</strong>（オプション）：「単語を追加」ボタンをクリックして、検出・フィルタリングしたい特定の単語を追加します。',
        '<strong>フィルタリング開始</strong>：「フィルタリング開始」ボタンをクリックしてテキストを処理し、不適切なコンテンツを検出します。',
        '<strong>結果を確認</strong>：「フィルタリング結果」タブでフィルタリング後のテキストを確認し、「検出レポート」タブで統計分析を確認します。',
        '<strong>結果をコピーまたは保存</strong>：フィルタリング後のテキストをクリップボードにコピーして、アプリケーションや文書で使用します。'
      ]
    }
  }
} 