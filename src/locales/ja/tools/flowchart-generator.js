export default {
  name: 'フローチャートジェネレーター',
  description: 'シンプルなテキストベースの構文でフローチャートや図表を作成',
  title: 'フローチャート・ダイアグラムジェネレーター',
  renderBtn: '図表をレンダリング',
  resetBtn: 'リセット',
  downloadSvgBtn: 'SVGをダウンロード',
  copySvgBtn: 'SVGをコピー',

  input: {
    title: 'フローチャート定義',
    placeholder: 'Mermaid構文コードを入力...',
    loadExample: 'サンプルを読み込む',
    clear: 'クリア',
    uploadFile: 'ファイルをアップロード'
  },

  output: {
    title: '生成されたフローチャート',
    downloadImage: '画像をダウンロード',
    downloadSVG: 'SVGをダウンロード',
    copyImage: '画像をコピー',
    copySVG: 'SVGをコピー',
    zoomIn: 'ズームイン',
    zoomOut: 'ズームアウト',
    fitView: 'ビューにフィット',
    resetView: 'ビューをリセット',
    preview: 'プレビュー',
    code: 'Mermaid コード'
  },

  options: {
    title: 'オプション',
    theme: 'テーマ',
    orientation: '方向',
    nodeShape: 'ノード形状',
    arrowStyle: '矢印スタイル',
    lineStyle: 'ラインスタイル',
    textPosition: 'テキスト位置',
    fontSize: 'フォントサイズ',
    fontFamily: 'フォントファミリー',
    showGrid: 'グリッドを表示',
    autoRender: '自動レンダリング'
  },

  themes: {
    default: 'デフォルト',
    simple: 'シンプル',
    forest: 'フォレスト',
    neutral: 'ニュートラル',
    dark: 'ダーク',
    business: 'ビジネス',
    base: 'ベース',
    custom: 'カスタム'
  },

  orientations: {
    topToBottom: '上から下',
    bottomToTop: '下から上',
    leftToRight: '左から右',
    rightToLeft: '右から左'
  },

  nodeShapes: {
    rectangle: '矩形',
    roundedRectangle: '角丸矩形',
    circle: '円形',
    diamond: '菱形',
    hexagon: '六角形',
    parallelogram: '平行四辺形'
  },

  arrowStyles: {
    arrow: '矢印',
    open: 'オープン',
    filled: '塗りつぶし',
    diamond: 'ダイヤモンド',
    circle: '円形'
  },

  lineStyles: {
    solid: '実線',
    dashed: '破線',
    dotted: '点線',
    curved: '曲線',
    straight: '直線',
    orthogonal: '直交'
  },

  syntax: {
    title: '構文ヘルプ',
    node: 'ノード',
    edge: 'エッジ',
    subgraph: 'サブグラフ',
    comment: 'コメント',
    styling: 'スタイリング',
    showMore: '詳細を表示'
  },

  actions: {
    render: 'フローチャートをレンダリング',
    save: '図表を保存',
    export: 'エクスポート',
    share: '共有'
  },

  messages: {
    renderSuccess: 'フローチャートのレンダリングに成功',
    renderError: 'フローチャートレンダリングエラー：{error}',
    syntaxError: '構文エラー：{error}',
    saved: '図表を保存しました',
    copied: 'SVGコードをクリップボードにコピーしました',
    copyFailed: 'コピーに失敗しました、手動でコピーしてください',
    exported: 'フローチャートをエクスポートしました',
    emptyCode: 'Mermaid構文コードを入力してください',
    rendering: 'レンダリング中...',
    errorTitle: 'レンダリングエラー'
  },

  examples: {
    flowchart: 'フローチャート',
    classDiagram: 'クラス図',
    sequenceDiagram: 'シーケンス図',
    entityRelationship: 'エンティティ関係図',
    gantt: 'ガントチャート',
    stateDiagram: '状態図',
    pieChart: '円グラフ',
    userJourney: 'ユーザージャーニー'
  },

  exampleCodes: {
    flowchart: `graph TD
    A[開始] --> B\{正しいですか?\}
    B -->|はい| C[正しい結果]
    B -->|いいえ| D[間違った結果]
    C --> E[終了]
    D --> E
`,
    sequenceDiagram: `sequenceDiagram
    participant クライアント
    participant サーバー
    クライアント->>サーバー: データをリクエスト
    サーバ-->>クライアント: データをレスポンス
    クライアント->>サーバー: フォームを送信
    サーバ-->>クライアント: 送信を確認
`,
    gantt: `gantt
    title プロジェクトスケジュール
    dateFormat  YYYY-MM-DD
    section 計画フェーズ
    要件収集           :a1, 2023-01-01, 30d
    システム設計       :after a1, 20d
    section 開発フェーズ
    バックエンド開発   :2023-02-20, 45d
    フロントエンド開発 :2023-02-25, 40d
    section テストフェーズ
    システムテスト     :2023-04-05, 20d
    ユーザーテスト     :2023-04-20, 15d
    section リリースフェーズ
    デプロイ          :2023-05-05, 10d
`,
    stateDiagram: `stateDiagram-v2
    [*] --> 編集中
    編集中 --> 審査中: 審査を提出
    審査中 --> 拒否: 拒否
    審査中 --> 公開済み: 承認
    拒否 --> 編集中: 修正して再提出
    公開済み --> [*]
`,
    pieChart: `pie
    title ウェブサイトトラフィックソース
    "検索エンジン" : 42.7
    "直接アクセス" : 28.9
    "ソーシャルメディア" : 18.5
    "その他" : 9.9
`,
    classDiagram: `classDiagram
    class Animal {
        +String 名前
        +int 年齢
        +鳴く() void
    }
    class Dog {
        +String 犬種
        +取ってくる() void
    }
    class Cat {
        +String 色
        +登る() void
    }
    Animal <|-- Dog
    Animal <|-- Cat
`
  }
};