export default {
    name: 'أداة إزالة التكرار في Excel - أداة إزالة البيانات المكررة في الجداول الإلكترونية عبر الإنترنت',
    description: 'أداة مجانية لإزالة التكرار في Excel عبر الإنترنت، تدعم ملفات xlsx/xls/csv. تحدد البيانات المكررة بذكاء، توفر قواعد متعددة لإزالة التكرار، تدعم المعالجة الدفعية، وتصدير بتنسيق Excel/CSV بنقرة واحدة',
    inputTitle: 'رفع ملف Excel',
    outputTitle: 'نتائج إزالة التكرار',
    dragTip: 'اسحب وأفلت ملفات Excel هنا أو انقر للرفع',
    supported: 'التنسيقات المدعومة: XLSX, XLS, CSV',
    removeDuplicatesBtn: 'بدء إزالة التكرار',
    downloadBtn: 'تحميل النتائج',
    noOutput: 'لا توجد نتائج لإزالة التكرار',
    loadSample: 'تحميل بيانات عينة',
    preview: 'معاينة البيانات',
    clearAll: 'مسح الكل',
    originalData: 'البيانات الأصلية',
    deleteFile: 'حذف الملف',
    batchDownload: 'تحميل دفعي (ZIP)',
    exportFormat: 'تنسيق التصدير',
    dataQuality: 'جودة البيانات',
    zoomIn: 'تكبير',
    zoomOut: 'تصغير',
    resetView: 'إعادة تعيين العرض',
    fullscreen: 'معاينة ملء الشاشة',
    
    // تكوين قواعد إزالة التكرار
    duplicateRulesTitle: 'تكوين قواعد إزالة التكرار',
    ruleType: 'نوع إزالة التكرار',
    ruleTypes: {
        fullRow: 'إزالة تكرار الصف الكامل',
        singleColumn: 'إزالة تكرار عمود واحد',
        multiColumn: 'إزالة تكرار مزيج من أعمدة متعددة'
    },
    selectedColumns: 'اختر الأعمدة',
    selectColumns: 'الرجاء اختيار الأعمدة لإزالة التكرار',
    caseSensitive: 'حساس لحالة الأحرف',
    trimSpaces: 'إزالة المسافات البادئة/اللاحقة',
    ignoreEmpty: 'تجاهل القيم الفارغة',
    fuzzyMatch: 'مطابقة تقريبية',
    similarityThreshold: 'عتبة التشابه',
    
    // إحصائيات البيانات
    statisticsTitle: 'إحصائيات البيانات',
    originalRows: 'الصفوف الأصلية',
    duplicateRows: 'الصفوف المكررة',
    uniqueRows: 'الصفوف بعد إزالة التكرار',
    duplicateRate: 'معدل التكرار',
    
    // جدول المعاينة
    previewTitle: 'معاينة البيانات',
    showDuplicates: 'عرض التكرارات',
    showUnique: 'عرض العناصر الفريدة',
    highlightDuplicates: 'تمييز التكرارات',
    
    // خيارات التصدير
    exportOptions: 'خيارات التصدير',
    includeHeaders: 'تضمين العناوين',
    encoding: 'ترميز الملف',
    delimiter: 'المحدد',
    
    // أزرار الإجراءات
    processBtn: 'معالجة البيانات',
    resetBtn: 'إعادة تعيين',
    saveTemplate: 'حفظ القالب',
    loadTemplate: 'تحميل القالب',
    
    // إدارة القوالب
    savedTemplates: 'القوالب المحفوظة',
    deleteTemplate: 'حذف',
    templateNamePrompt: 'الرجاء إدخال اسم القالب:',
    templateSaved: 'تم حفظ القالب بنجاح!',
    deleteTemplateConfirm: 'هل أنت متأكد أنك تريد حذف هذا القالب؟',
    templateLoadError: 'فشل في تحميل القالب:',
    
    // بيانات عينة
    sampleHeaders: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        department: 'القسم'
    },
    sampleData: {
        zhangsan: 'أحمد محمد',
        lisi: 'فاطمة علي',
        wangwu: 'محمد أحمد',
        zhaoliu: 'سارة حسن',
        techDept: 'قسم التكنولوجيا',
        salesDept: 'قسم المبيعات',
        hrDept: 'قسم الموارد البشرية',
        financeDept: 'قسم المالية'
    },
    
    // متعلق بالتصدير
    exportSheetName: 'نتائج إزالة التكرار',
    exportFileName: 'نتائج إزالة التكرار',
    jsonMetadataTitle: 'نتائج إزالة التكرار في Excel',
    columnNumber: 'العمود {number}',
    
    // رسائل الخطأ
    processError: 'خطأ في معالجة الملف، الرجاء التحقق من تنسيق الملف'
};