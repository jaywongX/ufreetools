export default {
  name: 'Instagram 貼文生成器',
  description: '創建逼真的 Instagram 貼文模擬，支援自訂內容、背景和互動數據',

  // 設計選項
  designOptions: '設計選項',

  // 用戶資料
  userProfile: {
    title: '用戶資料設定',
    username: '用戶名',
    location: '位置',
    postedTime: '發布日期與時間',
    postDate: '詳細日期',
    avatar: '頭像',
    uploadAvatar: '上傳頭像',
    removeAvatar: '移除',
    verifiedAccount: '帳號狀態',
    isVerified: '已驗證帳號'
  },

  // 內容類型
  contentType: '內容類型',

  contentTypes: {
    text: '僅文字',
    image: '僅圖片',
    mixed: '文字和圖片'
  },

  // 文字內容
  textContent: '文字內容',

  postText: '貼文文本',
  addHashtag: '添加話題標籤',
  mentionUser: '提及用戶',
  insertEmoji: '表情符號',
  commonEmojis: '常用表情符號',
  recommendedHashtags: '推薦話題標籤',

  // 文字格式
  fontFamily: '字體',

  fontSize: '字體大小',
  textAlign: '文本對齊',
  textColor: '文字顏色',

  // 背景圖片
  backgroundImage: '背景圖片',

  uploadImage: '上傳圖片',
  dragAndDrop: '或拖放檔案',
  imageFormats: 'PNG、JPG、GIF 格式，最大 2MB',

  // 背景
  background: '背景',

  backgroundColor: '背景顏色',
  backgroundType: '背景類型',

  backgroundTypes: {
    solid: '純色',
    gradient: '漸變',
    pattern: '圖案'
  },

  // 漸變選項
  gradientStartColor: '起始顏色',

  gradientEndColor: '結束顏色',
  gradientDirection: '方向',

  gradientDirections: {
    horizontal: '水平',
    vertical: '垂直',
    diagonal: '對角線',
    diagonalReverse: '反向對角線'
  },

  // 圖案選項
  patternType: '圖案類型',

  // 貼文格式
  postFormat: '貼文格式',

  formats: {
    square: '正方形',
    portrait: '豎屏',
    landscape: '橫屏'
  },

  // 互動
  engagement: {
    title: '互動模擬',
    likeCount: '點讚數',
    commentCount: '評論數',
    viewCount: '觀看數',
    isLiked: '被瀏覽者點讚',
    isSaved: '被瀏覽者收藏',
    hasStory: '有Instagram故事',
    showComments: '顯示評論',
    isTagged: '有人被標記',
    isSponsored: '贊助內容'
  },

  // 評論
  comments: {
    title: '模擬評論',
    addComment: '添加評論',
    delete: '刪除',
    addForRealism: '添加模擬評論以增加真實性',
    username: '用戶名',
    text: '評論內容'
  },

  // 提示
  prompts: {
    enterHashtag: '輸入話題標籤(不含#)',
    enterUsername: '輸入要提及的用戶名',
    enterComment: '輸入評論內容',
    defaultComment: '看起來很棒！',
    enterCommentUsername: '輸入評論用戶名',
    justNow: '剛剛'
  },

  // 操作按鈕
  resetDesign: '重置設計',

  // 預覽和導出
  preview: '預覽',

  export: '導出',
  downloadAsPNG: '下載為PNG',
  downloadAsJPG: '下載為JPG',
  copyToClipboard: '複製到剪貼簿',
  copied: '已複製！',
  generating: '正在生成圖片...'
};