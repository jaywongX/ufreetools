export default {
  name: 'コード複雑度アナライザー',
  description: 'コード複雑度指標（例：循環複雑度、ハルステッド指標、可維持性指数）を分析',
  title: 'コード複雑度分析',
  subtitle: 'JavaScriptコードの複雑度指標を分析します。循環複雑度、Halstead指標、保守性指数が含まれます。',

  input: {
    title: 'JavaScriptコード入力',
    placeholder: 'ここにJavaScriptコードを貼り付けてください...',
    loadExample: 'サンプルを読み込む',
    clear: 'クリア'
  },

  options: {
    title: '分析オプション',
    cyclomaticComplexity: '循環複雑度（McCabe複雑度）を計算',
    halsteadMetrics: 'Halstead指標（プログラム長さ、語彙量、体積等）を計算',
    maintainabilityIndex: '可維持性指数（コード保守性指標）を計算',
    functionDetails: '関数レベルの分析結果を表示'
  },

  languages: {
    title: '言語',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    python: 'Python',
    java: 'Java',
    csharp: 'C#',
    php: 'PHP',
    go: 'Go',
    ruby: 'Ruby'
  },

  metrics: {
    title: '指標',
    cyclomaticComplexity: '循環複雑度',
    maintainabilityIndex: '可維持性指数',
    halsteadVolume: 'Halstead 体積',
    halsteadDifficulty: 'Halstead 難易度',
    halsteadEffort: 'Halstead 労力',
    halsteadTime: 'Halstead 時間',
    halsteadBugs: 'Halstead バグ',
    linesOfCode: 'コード行数',
    logicalLoc: '論理コード行数',
    commentLines: 'コメント行数',
    commentRatio: 'コメント比率',
    operatorCount: '演算子数',
    operandCount: 'オペランド数',
    functionCount: '関数数',
    maxNestingDepth: '最大ネスティング深度',
    averageDepth: '平均深度',
    halstead: {
      title: 'Halstead指標',
      length: 'プログラム長さ',
      vocabulary: '語彙量',
      volume: 'プログラム体積',
      difficulty: '難易度'
    }
  },

  results: {
    title: '分析結果',
    file: 'ファイル',
    method: 'メソッド',
    score: 'スコア',
    complexity: '複雑度',
    rating: '評価',
    loc: '行数',
    issues: '問題',
    summary: '全体概要',
    details: '詳細',
    noResults: '分析結果がありません。コードを入力して「コード分析」をクリックして指標を確認してください。',
    avgCyclomaticComplexity: '平均循環複雑度',
    maintainabilityIndex: '可維持性指数',
    linesOfCode: 'コード行数',
    functionDetails: '関数レベル分析',
    functionName: '関数名',
    parameters: 'パラメータ数',
    anonymousFunction: '(匿名関数)'
  },

  ratings: {
    excellent: '優秀',
    good: '良好',
    moderate: '中程度',
    poor: '低い',
    veryPoor: '非常に低い'
  },

  complexity: {
    title: '複雑度指標説明:',
    low: '低複雑度 - コードは単純で明確であり、理解・保守が容易です。',
    medium: '中複雑度 - 少し複雑ですが、まだ許容範囲内です。',
    high: '高複雑度 - コードが過度に複雑であり、再構築を検討する必要があります。'
  },

  actions: {
    analyze: 'コード分析',
    analyzing: '分析中...',
    clearCode: 'コードクリア',
    uploadFile: 'ファイルアップロード',
    copy: '結果をコピー',
    download: 'レポートダウンロード',
    export: 'レポートをエクスポート (JSON)'
  },

  messages: {
    analyzing: 'コードを分析しています...',
    analysisComplete: '分析完了しました',
    analysisError: 'コード分析中にエラーが発生しました',
    analysisFailure: 'コードを分析できません: {error}',
    copied: 'クリップボードにコピーされました！',
    emptyCode: '分析するコードを入力してください',
    fileTooBig: 'ファイルが大きすぎます（最大1MB）',
    invalidFile: '無効またはサポートされていないファイル形式です',
    errorTitle: '分析エラー'
  },

  tips: {
    title: '使用ヒント',
    cyclomaticComplexity: '循環複雑度はソースコード内の独立したパス数を測定する指標です。',
    maintainability: '可維持性指数はコードの保守性を示す指標で、値が高いほど良いです。',
    recommendations: 'より良いコード品質のために、低複雑度と高い可維持性スコアを維持してください。',
    refactoring: '複雑度スコアが10を超える関数は再構築を検討してください。'
  }
};