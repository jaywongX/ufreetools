export default {
  name: 'Instagram投稿ジェネレーター',
  description: 'リアルなInstagram投稿のシミュレーションを作成。カスタムコンテンツ、背景、エンゲージメントデータに対応',

  // デザインオプション
  designOptions: 'デザインオプション',

  // ユーザープロフィール
  userProfile: {
    title: 'ユーザープロフィール設定',
    username: 'ユーザー名',
    location: '場所',
    postedTime: '投稿日時',
    postDate: '詳細な日付',
    avatar: 'プロフィール画像',
    uploadAvatar: '画像をアップロード',
    removeAvatar: '削除',
    verifiedAccount: 'アカウントステータス',
    isVerified: '認証済みアカウント'
  },

  // コンテンツタイプ
  contentType: 'コンテンツタイプ',

  contentTypes: {
    text: 'テキストのみ',
    image: '画像のみ',
    mixed: 'テキストと画像'
  },

  // テキストコンテンツ
  textContent: 'テキストコンテンツ',

  postText: '投稿テキスト',
  addHashtag: 'ハッシュタグを追加',
  mentionUser: 'ユーザーをメンション',
  insertEmoji: '絵文字',
  commonEmojis: 'よく使われる絵文字',
  recommendedHashtags: 'おすすめハッシュタグ',

  // テキストフォーマット
  fontFamily: 'フォント',

  fontSize: 'フォントサイズ',
  textAlign: 'テキストの配置',
  textColor: 'テキストの色',

  // 背景画像
  backgroundImage: '背景画像',

  uploadImage: '画像をアップロード',
  dragAndDrop: 'またはファイルをドラッグ＆ドロップ',
  imageFormats: 'PNG、JPG、GIF形式、最大2MB',

  // 背景
  background: '背景',

  backgroundColor: '背景色',
  backgroundType: '背景タイプ',

  backgroundTypes: {
    solid: '単色',
    gradient: 'グラデーション',
    pattern: 'パターン'
  },

  // グラデーションオプション
  gradientStartColor: '開始色',

  gradientEndColor: '終了色',
  gradientDirection: '方向',

  gradientDirections: {
    horizontal: '水平',
    vertical: '垂直',
    diagonal: '斜め',
    diagonalReverse: '逆斜め'
  },

  // パターンオプション
  patternType: 'パターンタイプ',

  // 投稿フォーマット
  postFormat: '投稿フォーマット',

  formats: {
    square: '正方形',
    portrait: '縦長',
    landscape: '横長'
  },

  // エンゲージメント
  engagement: {
    title: 'エンゲージメントシミュレーション',
    likeCount: 'いいね数',
    commentCount: 'コメント数',
    viewCount: '視聴回数',
    isLiked: '閲覧者にいいねされる',
    isSaved: '閲覧者に保存される',
    hasStory: 'ストーリーあり',
    showComments: 'コメントを表示',
    isTagged: 'タグ付けされている',
    isSponsored: 'スポンサー付きコンテンツ'
  },

  // コメント
  comments: {
    title: 'シミュレーションコメント',
    addComment: 'コメントを追加',
    delete: '削除',
    addForRealism: 'リアリティを高めるためにシミュレーションコメントを追加',
    username: 'ユーザー名',
    text: 'コメント内容'
  },

  // プロンプト
  prompts: {
    enterHashtag: 'ハッシュタグを入力（#なし）',
    enterUsername: 'メンションするユーザー名を入力',
    enterComment: 'コメント内容を入力',
    defaultComment: '素晴らしいですね！',
    enterCommentUsername: 'コメントユーザー名を入力',
    justNow: 'たった今'
  },

  // アクションボタン
  resetDesign: 'デザインをリセット',

  // プレビューとエクスポート
  preview: 'プレビュー',

  export: 'エクスポート',
  downloadAsPNG: 'PNGとしてダウンロード',
  downloadAsJPG: 'JPGとしてダウンロード',
  copyToClipboard: 'クリップボードにコピー',
  copied: 'コピーしました！',
  generating: '画像を生成中...'
};