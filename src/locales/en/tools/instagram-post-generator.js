export default {
  name: 'Instagram Post Generator',
  description: 'Create realistic Instagram post mockups with custom content, backgrounds, and engagement stats',

  // Design Options
  designOptions: 'Design Options',

  // User Profile
  userProfile: {
    title: 'User Profile Settings',
    username: 'Username',
    location: 'Location',
    postedTime: 'Posted Date & Time',
    postDate: 'Post Date',
    avatar: 'Avatar',
    uploadAvatar: 'Upload Avatar',
    removeAvatar: 'Remove',
    verifiedAccount: 'Account Status',
    isVerified: 'Verified Account'
  },

  // Content Type
  contentType: 'Content Type',

  contentTypes: {
    text: 'Text Only',
    image: 'Image Only',
    mixed: 'Text & Image'
  },

  // Text Content
  textContent: 'Text Content',

  postText: 'Post Text',
  addHashtag: 'Add Hashtag',
  mentionUser: 'Mention User',
  insertEmoji: 'Emoji',
  commonEmojis: 'Common Emojis',
  recommendedHashtags: 'Recommended Hashtags',

  // Text Formatting
  fontFamily: 'Font Family',

  fontSize: 'Font Size',
  textAlign: 'Text Alignment',
  textColor: 'Text Color',

  // Background Image
  backgroundImage: 'Background Image',

  uploadImage: 'Upload an image',
  dragAndDrop: 'or drag and drop',
  imageFormats: 'PNG, JPG, GIF up to 2MB',

  // Background
  background: 'Background',

  backgroundColor: 'Background Color',
  backgroundType: 'Background Type',

  backgroundTypes: {
    solid: 'Solid Color',
    gradient: 'Gradient',
    pattern: 'Pattern'
  },

  // Gradient Options
  gradientStartColor: 'Start Color',

  gradientEndColor: 'End Color',
  gradientDirection: 'Direction',

  gradientDirections: {
    horizontal: 'Horizontal',
    vertical: 'Vertical',
    diagonal: 'Diagonal',
    diagonalReverse: 'Reverse Diagonal'
  },

  // Pattern Options
  patternType: 'Pattern Type',

  // Post Format
  postFormat: 'Post Format',

  formats: {
    square: 'Square',
    portrait: 'Portrait',
    landscape: 'Landscape'
  },

  // Engagement
  engagement: {
    title: 'Engagement Simulator',
    likeCount: 'Like Count',
    commentCount: 'Comment Count',
    viewCount: 'View Count',
    isLiked: 'Liked by viewer',
    isSaved: 'Saved by viewer',
    hasStory: 'Has Instagram Story',
    showComments: 'Show Comments',
    isTagged: 'People Tagged',
    isSponsored: 'Sponsored Content'
  },

  // Comments
  comments: {
    title: 'Simulated Comments',
    addComment: 'Add Comment',
    delete: 'Delete',
    addForRealism: 'Add simulated comments for realism',
    username: 'Username',
    text: 'Comment'
  },

  // Prompts
  prompts: {
    enterHashtag: 'Enter hashtag (without #)',
    enterUsername: 'Enter username to mention',
    enterComment: 'Enter comment text',
    defaultComment: 'Looks great!',
    enterCommentUsername: 'Enter comment username',
    justNow: 'just now'
  },

  // Action Buttons
  resetDesign: 'Reset Design',

  // Preview and Export
  preview: 'Preview',

  export: 'Export',
  downloadAsPNG: 'Download as PNG',
  downloadAsJPG: 'Download as JPG',
  copyToClipboard: 'Copy to Clipboard',
  copied: 'Copied!',
  generating: 'Generating image...'
};