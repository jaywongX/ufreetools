export default {
  name: 'Instagram 帖子生成器',
  description: '创建逼真的 Instagram 帖子模拟，支持自定义内容、背景和互动数据',

  // Design Options
  designOptions: '设计选项',

  // User Profile
  userProfile: {
    title: '用户资料设置',
    username: '用户名',
    location: '位置',
    postedTime: '发布日期与时间',
    postDate: '详细日期',
    avatar: '头像',
    uploadAvatar: '上传头像',
    removeAvatar: '移除',
    verifiedAccount: '账号状态',
    isVerified: '已验证账号'
  },

  // Content Type
  contentType: '内容类型',

  contentTypes: {
    text: '仅文字',
    image: '仅图片',
    mixed: '文字和图片'
  },

  // Text Content
  textContent: '文字内容',

  postText: '帖子文本',
  addHashtag: '添加话题',
  mentionUser: '提及用户',
  insertEmoji: '表情',
  commonEmojis: '常用表情符号',
  recommendedHashtags: '推荐话题标签',

  // Text Formatting
  fontFamily: '字体',

  fontSize: '字体大小',
  textAlign: '文本对齐',
  textColor: '文字颜色',

  // Background Image
  backgroundImage: '背景图片',

  uploadImage: '上传图片',
  dragAndDrop: '或拖放文件',
  imageFormats: 'PNG、JPG、GIF 格式，最大 2MB',

  // Background
  background: '背景',

  backgroundColor: '背景颜色',
  backgroundType: '背景类型',

  backgroundTypes: {
    solid: '纯色',
    gradient: '渐变',
    pattern: '图案'
  },

  // Gradient Options
  gradientStartColor: '起始颜色',

  gradientEndColor: '结束颜色',
  gradientDirection: '方向',

  gradientDirections: {
    horizontal: '水平',
    vertical: '垂直',
    diagonal: '对角线',
    diagonalReverse: '反向对角线'
  },

  // Pattern Options
  patternType: '图案类型',

  // Post Format
  postFormat: '帖子格式',

  formats: {
    square: '正方形',
    portrait: '竖屏',
    landscape: '横屏'
  },

  // Engagement
  engagement: {
    title: '互动模拟',
    likeCount: '点赞数',
    commentCount: '评论数',
    viewCount: '观看数',
    isLiked: '被浏览者点赞',
    isSaved: '被浏览者收藏',
    hasStory: '有Instagram故事',
    showComments: '显示评论',
    isTagged: '有人被标记',
    isSponsored: '赞助内容'
  },

  // Comments
  comments: {
    title: '模拟评论',
    addComment: '添加评论',
    delete: '删除',
    addForRealism: '添加模拟评论以增加真实性',
    username: '用户名',
    text: '评论内容'
  },

  // Prompts
  prompts: {
    enterHashtag: '输入话题标签(不含#)',
    enterUsername: '输入要提及的用户名',
    enterComment: '输入评论内容',
    defaultComment: '看起来很棒！',
    enterCommentUsername: '输入评论用户名',
    justNow: '刚刚'
  },

  // Action Buttons
  resetDesign: '重置设计',

  // Preview and Export
  preview: '预览',

  export: '导出',
  downloadAsPNG: '下载为PNG',
  downloadAsJPG: '下载为JPG',
  copyToClipboard: '复制到剪贴板',
  copied: '已复制！',
  generating: '正在生成图片...'
};