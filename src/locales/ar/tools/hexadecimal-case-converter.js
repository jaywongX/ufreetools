export default {
  name: 'محول حالة الأرقام السداسية',
  description: 'تحويل وتنسيق السلاسل السداسية بين الحالة الكبيرة والصغيرة، مع دعم البادئات والفواصل وخيارات التجميع المختلفة',

  input: {
    title: 'إدخال القيمة السداسية',
    placeholder: 'أدخل القيمة السداسية...'
  },

  output: {
    title: 'نتيجة التحويل',
    placeholder: 'ستظهر نتيجة التحويل هنا...'
  },

  prefix: {
    title: 'البادئة',
    none: 'بدون',
  },

  format: {
    title: 'تنسيق الحالة',
    uppercase: 'حالة كبيرة',
    lowercase: 'حالة صغيرة'
  },

  separator: {
    title: 'الفاصل',
    none: 'بدون',
    space: 'مسافة',
    comma: 'فاصلة',
    colon: 'نقطتان',
    semicolon: 'فاصلة منقوطة'
  },

  grouping: {
    title: 'التجميع (بايت)',
    none: 'بدون'
  },

  actions: {
    copy: 'نسخ',
    clear: 'مسح',
    convert: 'تحويل'
  },

  messages: {
    copied: 'تم النسخ إلى الحافظة',
    copyFailed: 'فشل النسخ',
    invalidHex: 'قيمة سداسية غير صالحة'
  },

  examples: {
    title: 'أمثلة',
    example1: {
      title: '"Hello World" بالشكل السداسي',
    },
    example2: {
      title: 'ASCII Hello مع بادئة 0x',
    },
    example3: {
      title: 'DEADBEEF (قيمة تصحيح شائعة)',
    },
    example4: {
      title: 'تنسيق عنوان MAC',
    }
  },

  tips: {
    title: 'نصائح',
    tip1: 'تستخدم القيم السداسية الأحرف 0-9 و A-F (أو a-f)',
    tip2: 'تستخدم البادئات المختلفة في سياقات مختلفة: 0x في البرمجة، # للألوان، إلخ',
    tip3: 'يمكن أن يحسن استخدام التجميع والفواصل من قابلية قراءة السلاسل السداسية الطويلة',
    tip4: 'عادة ما تستخدم عناوين MAC فاصل النقطتين وتجميع البايت الواحد'
  }
}; 