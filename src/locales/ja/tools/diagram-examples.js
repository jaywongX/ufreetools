export default {
  name: 'ダイアグラムサンプル',
  description: '様々なダイアグラムサンプルを閲覧し、異なるモデリングニーズに対応',
  title: '高度なフローチャートサンプル',

  categories: {
    title: 'カテゴリー',
    flowcharts: 'フローチャート',
    uml: 'UMLダイアグラム',
    network: 'ネットワーク図',
    architecture: 'アーキテクチャ図',
    entity: 'エンティティ関係図',
    sequence: 'シーケンス図',
    mindmaps: 'マインドマップ',
    gantt: 'ガントチャート',
    other: 'その他ダイアグラム'
  },

  actions: {
    search: 'サンプルを検索',
    filter: 'カテゴリーでフィルタ',
    sortBy: '並び替え',
    useExample: 'このサンプルを使用',
    viewFull: 'フルサイズで表示',
    copyCode: 'コードをコピー',
    addToFavorites: 'お気に入りに追加',
    removeFavorite: 'お気に入りから削除'
  },

  sortOptions: {
    popularity: '人気順',
    newest: '新着順',
    alphabetical: 'アルファベット順',
    complexity: '複雑さ順'
  },

  exampleDetail: {
    title: 'サンプル詳細',
    description: '説明',
    syntax: '構文',
    codeView: 'コードビュー',
    diagramView: 'ダイアグラムビュー',
    complexity: '複雑さ',
    tags: 'タグ',
    relatedExamples: '関連サンプル'
  },

  complexityLevels: {
    beginner: '初心者向け',
    intermediate: '中級者向け',
    advanced: '上級者向け'
  },

  messages: {
    copied: 'コードをクリップボードにコピーしました',
    copyFailed: 'コピーに失敗しました、手動でコピーしてください',
    added: 'お気に入りに追加しました',
    removed: 'お気に入りから削除しました',
    noResults: '検索条件に一致するサンプルが見つかりませんでした',
    loading: 'サンプルを読み込んでいます...'
  },

  filters: {
    all: 'すべてのカテゴリー',
    favorites: 'お気に入りのみ',
    recently: '最近閲覧した'
  },

  examples: {
    softwareDevelopment: 'ソフトウェア開発フローチャート',
    projectManagement: 'プロジェクト管理ガントチャート',
    userRegistration: 'ユーザー登録フロー'
  },

  exampleCodes: {
    softwareDevelopment: `graph TD
    A[要件分析] --> B[システム設計]
    B --> C[コーディング実装]
    C --> D[単体テスト]
    D --> E(テスト合格?)
    E -- いいえ --> C
    E -- はい --> F[システム統合]
    F --> G[システムテスト]
    G --> H(テスト合格?)
    H -- いいえ --> F
    H -- はい --> I[デプロイ]
    I --> J[メンテナンス]
    
    style A fill:#f9d5e5,stroke:#333,stroke-width:2px
    style E fill:#e3f0f7,stroke:#333,stroke-width:2px
    style H fill:#e3f0f7,stroke:#333,stroke-width:2px
    style I fill:#d5f5e3,stroke:#333,stroke-width:2px
    style J fill:#d5f5e3,stroke:#333,stroke-width:2px`,
    
    projectManagement: `gantt
    title 製品開発プロジェクト計画
    dateFormat  YYYY-MM-DD
    axisFormat  %m-%d
    
    section 計画
    市場調査           :a1, 2023-01-01, 15d
    要件分析           :a2, after a1, 10d
    製品計画           :a3, after a2, 5d
    
    section 設計
    プロトタイプ設計    :b1, after a3, 15d
    UI設計             :b2, after b1, 10d
    ユーザーテスト      :b3, after b2, 5d
    
    section 開発
    バックエンド構築    :c1, after b1, 20d
    フロントエンド開発  :c2, after b2, 15d
    API統合           :c3, after c1, 10d
    
    section テスト
    単体テスト         :d1, after c2, 8d
    統合テスト         :d2, after c3, 7d
    パフォーマンステスト :d3, after d2, 5d
    
    section リリース
    内部レビュー       :e1, after d3, 5d
    デプロイ準備       :e2, after e1, 2d
    正式リリース       :milestone, after e2, 0d`,
    
    userRegistration: `sequenceDiagram
    participant ユーザー
    participant フロントエンド
    participant バックエンド
    participant データベース
    participant メールサービス
    
    ユーザー->>フロントエンド: 登録フォーム入力
    フロントエンド->>フロントエンド: フォーム検証
    フロントエンド->>バックエンド: 登録情報送信
    バックエンド->>バックエンド: ユーザーデータ検証
    バックエンド->>データベース: ユーザー存在確認
    データベース-->>バックエンド: 確認結果返却
    
    alt ユーザーが既に存在
        バックエンド-->>フロントエンド: ユーザー存在エラー返却
        フロントエンド-->>ユーザー: エラーメッセージ表示
    else ユーザーが存在しない
        バックエンド->>データベース: 新規ユーザー作成
        バックエンド->>メールサービス: 認証メール送信
        メールサービス-->>ユーザー: 認証リンク付きメール送信
        バックエンド-->>フロントエンド: 登録成功通知
        フロントエンド-->>ユーザー: 登録成功メッセージ表示
    end
    
    ユーザー->>メールサービス: 認証リンククリック
    メールサービス->>バックエンド: 認証リクエスト
    バックエンド->>データベース: ユーザーステータス更新
    バックエンド-->>ユーザー: ログインページへリダイレクト`
  }
};