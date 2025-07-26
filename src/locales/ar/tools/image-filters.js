export default {
    name: 'مرشحات الصور',
    description: 'معاينة فورية لتطبيق مختلف المرشحات والتأثيرات على الصور',

    upload: {
        title: 'رفع الصورة',
        dropzone: 'اسحب وأسقط الصورة هنا أو انقر للتصفح',
        maxSize: 'الحد الأقصى لحجم الملف: 10MB',
        supportedFormats: 'التنسيقات المدعومة: JPG، PNG، WEBP، GIF'
    },

    editor: {
        title: 'محرر المرشحات',
        original: 'الأصلية',
        filtered: 'بعد التصفية',
        reset: 'إعادة تعيين الكل',
        undo: 'تراجع',
        redo: 'إعادة',
        zoomIn: 'تكبير',
        zoomOut: 'تصغير',
        fitToScreen: 'ملء الشاشة',
        showOriginal: 'عرض الصورة الأصلية'
    },

    filters: {
        title: 'المرشحات',
        basic: 'التعديلات الأساسية',
        brightness: 'السطوع',
        contrast: 'التباين',
        saturation: 'التشبع',
        hue: 'درجة اللون',
        exposure: 'التعريض',
        vibrance: 'الحيوية',
        temperature: 'درجة الحرارة',
        gamma: 'غاما',
        clarity: 'الوضوح',
        effects: 'التأثيرات',
        grayscale: 'تدرج الرمادي',
        sepia: 'بني داكن',
        vintage: 'عتيق',
        polaroid: 'بولارويد',
        duotone: 'ثنائي اللون',
        noise: 'الضوضاء',
        pixelate: 'التكعيب',
        blur: 'طمس',
        sharpen: 'حدة',
        vignette: 'فيجنيت',
        color: 'اللون',
        colorOverlay: 'تراكب اللون',
        colorize: 'تلوين',
        gradientMap: 'خريطة التدرج',
        replaceColor: 'استبدال اللون',
        advanced: 'متقدم',
        levels: 'المستويات',
        curves: 'المنحنيات',
        shadows: 'الظلال',
        highlights: 'الإضاءات',
        blacks: 'الأسود',
        whites: 'الأبيض',
        channels: 'قنوات RGB'
    },

    presets: {
        title: 'المجموعات المسبقة',
        custom: 'مخصص',
        blackAndWhite: 'أبيض وأسود',
        highContrast: 'تباين عالي',
        normal: 'عادي',
        cinematic: 'سينمائي',
        warm: 'ألوان دافئة',
        cool: 'ألوان باردة',
        sunset: 'غروب الشمس',
        vintage: 'عتيق',
        invert: 'عكس الألوان',
        cross: 'عرضي',
        matte: 'مات',
        flat: 'مسطح',
        portrait: 'بورتريه',
        landscape: 'منظر طبيعي',
        vivid: 'حيوي',
        moody: 'مزاجي',
        savePreset: 'حفظ الإعدادات الحالية كمجموعة',
        deletePreset: 'حذف المجموعة',
        presetName: 'اسم المجموعة'
    },

    output: {
        title: 'المخرجات',
        fileName: 'اسم الملف',
        format: 'التنسيق',
        quality: 'الجودة',
        width: 'العرض',
        height: 'الارتفاع',
        download: 'تنزيل الصورة',
        saveOnline: 'حفظ عبر الإنترنت',
        share: 'مشاركة',
        applyToNew: 'تطبيق على صورة جديدة'
    },

    history: {
        title: 'السجل',
        revert: 'الرجوع إلى هذه الخطوة',
        clear: 'مسح السجل'
    },

    actions: {
        apply: 'تطبيق المرشح',
        download: 'تنزيل',
        save: 'حفظ',
        reset: 'إعادة تعيين',
        cancel: 'إلغاء'
    },

    messages: {
        imageLoaded: 'تم تحميل الصورة بنجاح',
        filterApplied: 'تم تطبيق المرشح بنجاح',
        filtersReset: 'تم إعادة تعيين المرشحات إلى القيم الافتراضية',
        downloadStarted: 'بدأ التنزيل',
        presetSaved: 'تم حفظ المجموعة بنجاح',
        presetDeleted: 'تم حذف المجموعة',
        invalidFile: 'ملف غير صالح. يرجى رفع صورة صالحة.',
        fileTooLarge: 'الملف كبير جدًا. الحد الأقصى للحجم هو 10MB.'
    }
};