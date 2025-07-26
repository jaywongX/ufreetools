export default {
  name: 'محلل تعقيد الكود',
  description: 'تحليل مقاييس تعقيد الكود مثل تعقيد السيكلوماتيك وقابلية الصيانة',
  title: 'تحليل تعقيد الكود',
  subtitle: 'تحليل مقاييس تعقيد كود JavaScript المختلفة بما في ذلك تعقيد السيكلوماتيك، مقاييس هالستيد ومؤشر الصيانة',

  input: {
    title: 'إدخال كود JavaScript',
    placeholder: 'الصق كود JavaScript هنا...',
    loadExample: 'تحميل مثال',
    clear: 'مسح'
  },

  options: {
    title: 'خيارات التحليل',
    cyclomaticComplexity: 'حساب تعقيد السيكلوماتيك (تعقيد مكابي)',
    halsteadMetrics: 'حساب مقاييس هالستيد (طول البرنامج، المفردات، الحجم وغيرها)',
    maintainabilityIndex: 'حساب مؤشر الصيانة (مقياس قابلية صيانة الكود)',
    functionDetails: 'عرض نتائج التحليل على مستوى الدوال'
  },

  languages: {
    title: 'اللغات',
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
    title: 'المقاييس',
    cyclomaticComplexity: 'تعقيد السيكلوماتيك',
    maintainabilityIndex: 'مؤشر الصيانة',
    halsteadVolume: 'حجم هالستيد',
    halsteadDifficulty: 'صعوبة هالستيد',
    halsteadEffort: 'جهد هالستيد',
    halsteadTime: 'وقت هالستيد',
    halsteadBugs: 'أخطاء هالستيد',
    linesOfCode: 'عدد أسطر الكود',
    logicalLoc: 'أسطر الكود المنطقية',
    commentLines: 'عدد أسطر التعليقات',
    commentRatio: 'نسبة التعليقات',
    operatorCount: 'عدد العوامل',
    operandCount: 'عدد المعاملات',
    functionCount: 'عدد الدوال',
    maxNestingDepth: 'أقصى عمق تداخل',
    averageDepth: 'متوسط العمق',
    halstead: {
      title: 'مقاييس هالستيد',
      length: 'طول البرنامج',
      vocabulary: 'المفردات',
      volume: 'حجم البرنامج',
      difficulty: 'الصعوبة'
    }
  },

  results: {
    title: 'نتائج التحليل',
    file: 'الملف',
    method: 'الطريقة',
    score: 'النتيجة',
    complexity: 'التعقيد',
    rating: 'التقييم',
    loc: 'عدد الأسطر',
    issues: 'المشكلات',
    summary: 'ملخص الكود العام',
    details: 'التفاصيل',
    noResults: 'لا توجد نتائج تحليل بعد. أدخل الكود وانقر على "تحليل الكود" لعرض المقاييس.',
    avgCyclomaticComplexity: 'متوسط تعقيد السيكلوماتيك',
    maintainabilityIndex: 'مؤشر الصيانة',
    linesOfCode: 'عدد أسطر الكود',
    functionDetails: 'تحليل مستوى الدوال',
    functionName: 'اسم الدالة',
    parameters: 'عدد المعاملات',
    anonymousFunction: '(دالة مجهولة)'
  },

  ratings: {
    excellent: 'ممتاز',
    good: 'جيد',
    moderate: 'متوسط',
    poor: 'ضعيف',
    veryPoor: 'ضعيف جدًا'
  },

  complexity: {
    title: 'شرح مقاييس التعقيد:',
    low: 'تعقيد منخفض - الكود بسيط وواضح وسهل الفهم والصيانة',
    medium: 'تعقيد متوسط - الكود معقد قليلاً ولكن لا يزال مقبولاً',
    high: 'تعقيد مرتفع - الكود معقد جدًا، يجب التفكير في إعادة الهيكلة'
  },

  actions: {
    analyze: 'تحليل الكود',
    analyzing: 'جارٍ التحليل...',
    clearCode: 'مسح الكود',
    uploadFile: 'رفع ملف',
    copy: 'نسخ النتائج',
    download: 'تنزيل التقرير',
    export: 'تصدير التقرير (JSON)'
  },

  messages: {
    analyzing: 'جارٍ تحليل الكود...',
    analysisComplete: 'اكتمل التحليل',
    analysisError: 'حدث خطأ في تحليل الكود',
    analysisFailure: 'تعذر تحليل الكود: {error}',
    copied: 'تم النسخ إلى الحافظة!',
    emptyCode: 'الرجاء إدخال الكود لتحليله',
    fileTooBig: 'الملف كبير جدًا (الحد الأقصى 1MB)',
    invalidFile: 'نوع ملف غير صالح أو غير مدعوم',
    errorTitle: 'خطأ في التحليل'
  },

  tips: {
    title: 'نصائح الاستخدام',
    cyclomaticComplexity: 'تعقيد السيكلوماتيك هو مقياس لعدد المسارات المستقلة في الكود المصدري.',
    maintainability: 'مؤشر الصيانة يشير إلى قابلية صيانة الكود، كلما ارتفعت القيمة كان ذلك أفضل.',
    recommendations: 'لتحسين جودة الكود، حاول الحفاظ على تعقيد منخفض ومؤشر صيانة مرتفع.',
    refactoring: 'فكر في إعادة هيكلة الدوال التي يزيد تعقيدها عن 10.'
  }
};