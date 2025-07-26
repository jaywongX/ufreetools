export default {
  name: 'منشئ المخططات الانسيابية',
  description: 'إنشاء مخططات انسيابية ومخططات باستخدام بناء جملة نصي بسيط',
  title: 'منشئ المخططات الانسيابية والمخططات',
  renderBtn: 'عرض المخطط',
  resetBtn: 'إعادة تعيين',
  downloadSvgBtn: 'تحميل SVG',
  copySvgBtn: 'نسخ SVG',

  input: {
    title: 'تعريف المخطط الانسيابي',
    placeholder: 'أدخل كود Mermaid...',
    loadExample: 'تحميل مثال',
    clear: 'مسح',
    uploadFile: 'رفع ملف'
  },

  output: {
    title: 'المخطط الانسيابي الناتج',
    downloadImage: 'تحميل الصورة',
    downloadSVG: 'تحميل SVG',
    copyImage: 'نسخ الصورة',
    copySVG: 'نسخ SVG',
    zoomIn: 'تكبير',
    zoomOut: 'تصغير',
    fitView: 'ملاءمة العرض',
    resetView: 'إعادة تعيين العرض',
    preview: 'معاينة',
    code: 'كود Mermaid'
  },

  options: {
    title: 'خيارات',
    theme: 'السمة',
    orientation: 'الاتجاه',
    nodeShape: 'شكل العقدة',
    arrowStyle: 'نمط السهم',
    lineStyle: 'نمط الخط',
    textPosition: 'موضع النص',
    fontSize: 'حجم الخط',
    fontFamily: 'نوع الخط',
    showGrid: 'إظهار الشبكة',
    autoRender: 'عرض تلقائي'
  },

  themes: {
    default: 'افتراضي',
    simple: 'بسيط',
    forest: 'غابة',
    neutral: 'محايد',
    dark: 'داكن',
    business: 'أعمال',
    base: 'أساسي',
    custom: 'مخصص'
  },

  orientations: {
    topToBottom: 'من الأعلى للأسفل',
    bottomToTop: 'من الأسفل للأعلى',
    leftToRight: 'من اليسار لليمين',
    rightToLeft: 'من اليمين لليسار'
  },

  nodeShapes: {
    rectangle: 'مستطيل',
    roundedRectangle: 'مستطيل دائري',
    circle: 'دائرة',
    diamond: 'معين',
    hexagon: 'سداسي',
    parallelogram: 'متوازي أضلاع'
  },

  arrowStyles: {
    arrow: 'سهم',
    open: 'مفتوح',
    filled: 'مملوء',
    diamond: 'معين',
    circle: 'دائرة'
  },

  lineStyles: {
    solid: 'متصل',
    dashed: 'متقطع',
    dotted: 'منقط',
    curved: 'منحني',
    straight: 'مستقيم',
    orthogonal: 'عمودي'
  },

  syntax: {
    title: 'مساعدة في بناء الجملة',
    node: 'عقدة',
    edge: 'حافة',
    subgraph: 'رسم بياني فرعي',
    comment: 'تعليق',
    styling: 'التنسيق',
    showMore: 'عرض المزيد'
  },

  actions: {
    render: 'عرض المخطط الانسيابي',
    save: 'حفظ المخطط',
    export: 'تصدير',
    share: 'مشاركة'
  },

  messages: {
    renderSuccess: 'تم عرض المخطط الانسيابي بنجاح',
    renderError: 'خطأ في عرض المخطط الانسيابي: {error}',
    syntaxError: 'خطأ في بناء الجملة: {error}',
    saved: 'تم حفظ المخطط',
    copied: 'تم نسخ كود SVG إلى الحافظة',
    copyFailed: 'فشل النسخ، يرجى النسخ يدويًا',
    exported: 'تم تصدير المخطط الانسيابي',
    emptyCode: 'الرجاء إدخال كود Mermaid',
    rendering: 'جاري العرض...',
    errorTitle: 'خطأ في العرض'
  },

  examples: {
    flowchart: 'مخطط انسيابي',
    classDiagram: 'مخطط الفئات',
    sequenceDiagram: 'مخطط التسلسل',
    entityRelationship: 'مخطط علاقات الكيانات',
    gantt: 'مخطط جانت',
    stateDiagram: 'مخطط الحالة',
    pieChart: 'مخطط دائري',
    userJourney: 'رحلة المستخدم'
  },

  exampleCodes: {
    flowchart: `graph TD
    A[بداية] --> B{هل هذا صحيح؟}
    B -->|نعم| C[النتيجة صحيحة]
    B -->|لا| D[النتيجة خاطئة]
    C --> E[نهاية]
    D --> E
`,
    sequenceDiagram: `sequenceDiagram
    participant العميل
    participant الخادم
    العميل->>الخادم: طلب البيانات
    الخادم-->>العميل: استجابة البيانات
    العميل->>الخادم: إرسال النموذج
    الخادم-->>العميل: تأكيد الإرسال
`,
    gantt: `gantt
    title خطة جدولة المشروع
    dateFormat  YYYY-MM-DD
    section مرحلة التخطيط
    جمع المتطلبات       :a1, 2023-01-01, 30d
    تصميم النظام        :after a1, 20d
    section مرحلة التطوير
    تطوير الواجهة الخلفية :2023-02-20, 45d
    تطوير الواجهة الأمامية :2023-02-25, 40d
    section مرحلة الاختبار
    اختبار النظام        :2023-04-05, 20d
    اختبار المستخدم      :2023-04-20, 15d
    section مرحلة النشر
    النشر               :2023-05-05, 10d
`,
    stateDiagram: `stateDiagram-v2
    [*] --> قيد التحرير
    قيد التحرير --> قيد المراجعة: تقديم للمراجعة
    قيد المراجعة --> مرفوض: رفض
    قيد المراجعة --> منشور: موافقة
    مرفوض --> قيد التحرير: تعديل وإعادة تقديم
    منشور --> [*]
`,
    pieChart: `pie
    title توزيع مصادر زيارات الموقع
    "محركات البحث" : 42.7
    "زيارات مباشرة" : 28.9
    "وسائل التواصل الاجتماعي" : 18.5
    "قنوات أخرى" : 9.9
`,
    classDiagram: `classDiagram
    class حيوان {
        +String الاسم
        +int العمر
        +اصدار صوت() void
    }
    class كلب {
        +String السلالة
        +جلب() void
    }
    class قطة {
        +String اللون
        +تسلق() void
    }
    حيوان <|-- كلب
    حيوان <|-- قطة
`
  }
};