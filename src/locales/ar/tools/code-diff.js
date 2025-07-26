export default {
  name: 'مقارنة الاختلافات في الكود',
  description: 'مقارنة جزأين من الكود وإبراز الاختلافات',

  options: {
    title: 'الخيارات',
    ignoreCase: 'تجاهل حالة الأحرف',
    ignoreWhitespace: 'تجاهل المسافات البيضاء',
    trimWhitespace: 'قص المسافات البيضاء',
    diffMode: 'وضع المقارنة',
    diffModes: {
      chars: 'الأحرف',
      words: 'الكلمات',
      lines: 'الأسطر',
      sentences: 'الجمل',
      json: 'JSON'
    },
    diffStyle: 'نمط العرض',
    diffStyles: {
      split: 'عرض مقسم',
      inline: 'عرض مضمن'
    },
    context: 'عدد أسطر السياق',
    wrap: 'تفاف تلقائي'
  },

  inputs: {
    original: 'الكود الأصلي',
    modified: 'الكود المعدل',
    placeholderOriginal: 'أدخل الكود الأصلي هنا...',
    placeholderModified: 'أدخل الكود المعدل هنا...'
  },

  actions: {
    compare: 'مقارنة',
    clear: 'مسح',
    swap: 'تبديل',
    copy: 'نسخ الاختلافات',
    download: 'تنزيل الاختلافات',
    upload: 'رفع ملفات'
  },

  results: {
    title: 'نتائج المقارنة',
    changes: 'التغييرات',
    additions: 'الإضافات',
    deletions: 'الحذف',
    unchanged: 'غير متغير',
    noChanges: 'لم يتم العثور على اختلافات - النصان متطابقان',
    loading: 'جاري إنشاء المقارنة...'
  },

  upload: {
    originalFile: 'الملف الأصلي',
    modifiedFile: 'الملف المعدل',
    dropOriginal: 'اسحب الملف الأصلي إلى هنا أو انقر للتصفح',
    dropModified: 'اسحب الملف المعدل إلى هنا أو انقر للتصفح'
  },

  messages: {
    copied: 'تم النسخ إلى الحافظة!',
    inputRequired: 'يرجى إدخال نص في كلا الحقلين',
    diffGenerated: 'تم إنشاء المقارنة بنجاح',
    error: 'حدث خطأ أثناء إنشاء المقارنة',
    fileError: 'حدث خطأ أثناء قراءة الملف'
  },

  tips: {
    title: 'نصائح للاستخدام',
    compareOptions: 'اضبط خيارات المقارنة لتلبية احتياجاتك - تجاهل المسافات البيضاء مفيد لمقارنة الكود.',
    diffModes: 'أوضاع المقارنة المختلفة توفر مستويات مختلفة من التفاصيل.',
    largeFiles: 'للملفات الكبيرة، المقارنة على مستوى الأسطر أكثر كفاءة.',
    jsonMode: 'استخدم وضع JSON لمقارنة البيانات المنظمة - سيقوم بتوحيد ومقارنة هيكل الكائنات.'
  }
}; 