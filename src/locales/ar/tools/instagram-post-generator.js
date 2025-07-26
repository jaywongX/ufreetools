export default {
  name: 'منشئ منشورات إنستغرام',
  description: 'إنشاء محاكاة واقعية لمنشورات إنستغرام مع دعم المحتوى المخصص والخلفيات وبيانات التفاعل',

  // خيارات التصميم
  designOptions: 'خيارات التصميم',

  // ملف تعريف المستخدم
  userProfile: {
    title: 'إعدادات ملف التعريف',
    username: 'اسم المستخدم',
    location: 'الموقع',
    postedTime: 'تاريخ ووقت النشر',
    postDate: 'التاريخ التفصيلي',
    avatar: 'صورة الملف الشخصي',
    uploadAvatar: 'رفع صورة الملف الشخصي',
    removeAvatar: 'إزالة',
    verifiedAccount: 'حالة الحساب',
    isVerified: 'حساب موثق'
  },

  // نوع المحتوى
  contentType: 'نوع المحتوى',

  contentTypes: {
    text: 'نص فقط',
    image: 'صورة فقط',
    mixed: 'نص وصورة'
  },

  // محتوى النص
  textContent: 'محتوى النص',

  postText: 'نص المنشور',
  addHashtag: 'إضافة هاشتاغ',
  mentionUser: 'الإشارة إلى مستخدم',
  insertEmoji: 'إيموجي',
  commonEmojis: 'إيموجيات شائعة',
  recommendedHashtags: 'هاشتاغات موصى بها',

  // تنسيق النص
  fontFamily: 'نوع الخط',

  fontSize: 'حجم الخط',
  textAlign: 'محاذاة النص',
  textColor: 'لون النص',

  // صورة الخلفية
  backgroundImage: 'صورة الخلفية',

  uploadImage: 'رفع صورة',
  dragAndDrop: 'أو اسحب وأسقط الملف',
  imageFormats: 'صيغ PNG، JPG، GIF بحد أقصى 2MB',

  // الخلفية
  background: 'الخلفية',

  backgroundColor: 'لون الخلفية',
  backgroundType: 'نوع الخلفية',

  backgroundTypes: {
    solid: 'لون خالص',
    gradient: 'تدرج لوني',
    pattern: 'نمط'
  },

  // خيارات التدرج اللوني
  gradientStartColor: 'لون البداية',

  gradientEndColor: 'لون النهاية',
  gradientDirection: 'الاتجاه',

  gradientDirections: {
    horizontal: 'أفقي',
    vertical: 'عمودي',
    diagonal: 'قطري',
    diagonalReverse: 'قطري معكوس'
  },

  // خيارات النمط
  patternType: 'نوع النمط',

  // تنسيق المنشور
  postFormat: 'تنسيق المنشور',

  formats: {
    square: 'مربع',
    portrait: 'عمودي',
    landscape: 'أفقي'
  },

  // التفاعل
  engagement: {
    title: 'محاكاة التفاعل',
    likeCount: 'عدد الإعجابات',
    commentCount: 'عدد التعليقات',
    viewCount: 'عدد المشاهدات',
    isLiked: 'تم الإعجاب به من قبل المشاهد',
    isSaved: 'تم حفظه من قبل المشاهد',
    hasStory: 'يوجد قصة',
    showComments: 'عرض التعليقات',
    isTagged: 'تم وضع علامة',
    isSponsored: 'محتوى مدعوم'
  },

  // التعليقات
  comments: {
    title: 'تعليقات محاكاة',
    addComment: 'إضافة تعليق',
    delete: 'حذف',
    addForRealism: 'إضافة تعليقات محاكاة لزيادة الواقعية',
    username: 'اسم المستخدم',
    text: 'نص التعليق'
  },

  // نصوص إرشادية
  prompts: {
    enterHashtag: 'أدخل الهاشتاغ (بدون #)',
    enterUsername: 'أدخل اسم المستخدم للإشارة إليه',
    enterComment: 'أدخل نص التعليق',
    defaultComment: 'تبدو رائعة!',
    enterCommentUsername: 'أدخل اسم مستخدم التعليق',
    justNow: 'الآن'
  },

  // أزرار الإجراءات
  resetDesign: 'إعادة تعيين التصميم',

  // المعاينة والتصدير
  preview: 'معاينة',

  export: 'تصدير',
  downloadAsPNG: 'تحميل كـ PNG',
  downloadAsJPG: 'تحميل كـ JPG',
  copyToClipboard: 'نسخ إلى الحافظة',
  copied: 'تم النسخ!',
  generating: 'جاري إنشاء الصورة...'
};