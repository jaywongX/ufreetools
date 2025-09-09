export default {
    name: 'حاسبة تقسيم خرائط - أداة استعلام عن أرقام الخرائط عبر الإنترنت',
    description: 'حساب أرقام الخرائط بناءً على الإحداثيات، دعم مقاييس متعددة وطرق إسقاط مختلفة',
    icon: 'map',
    tags: ['خرائط', 'تقسيم', 'إحداثيات', 'مقياس', 'إسقاط'],
    
    // واجهة المستخدم
    ui: {
        title: 'حاسبة تقسيم خرائط',
        subtitle: 'حساب أرقام الخرائط بناءً على الإحداثيات',
        inputTitle: 'إدخال الإحداثيات',
        outputTitle: 'نتائج الحساب',
        
        // إدخال الإحداثيات
        latitudePlaceholder: 'خط العرض (مثال: 39.9042)',
        longitudePlaceholder: 'خط الطول (مثال: 116.4074)',
        batchInputPlaceholder: 'إدخال دفعة: خط العرض,خط الطول,الوصف (اختياري)\nمثال: 39.9042,116.4074,بكين\n40.7128,-74.0060,نيويورك',
        
        // أزرار
        calculateButton: 'حساب الخريطة',
        clearButton: 'مسح الكل',
        loadSampleButton: 'تحميل بيانات نموذجية',
        exportExcelButton: 'تصدير إلى Excel',
        exportPDFButton: 'تصدير إلى PDF',
        
        // إعدادات المعلمات
        parameterSettings: 'إعدادات المعلمات',
        scaleLabel: 'المقياس',
        zoneMethodLabel: 'طريقة المنطقة',
        threeDegreeZone: 'منطقة 3 درجات',
        sixDegreeZone: 'منطقة 6 درجات',
        
        // عرض النتائج
        resultColumns: {
            sheetNumber: 'رقم الخريطة',
            latitude: 'خط العرض',
            longitude: 'خط الطول',
            scale: 'المقياس',
            zone: 'المنطقة',
            centralMeridian: 'خط الطول المركزي',
            description: 'الوصف'
        },
        
        // شبكة الخريطة
        gridTitle: 'شبكة الخريطة',
        noResults: 'لا توجد نتائج للعرض',
        
        // رسائل
        invalidCoordinates: 'إحداثيات غير صالحة، يرجى التحقق من المدخلات',
        calculationSuccess: 'تم حساب الخريطة بنجاح',
        excelExportSuccess: 'تم تصدير البيانات إلى Excel بنجاح',
        pdfExportSuccess: 'تم تصدير البيانات إلى PDF بنجاح',
        exportFailed: 'فشل التصدير، يرجى المحاولة مرة أخرى',
        noDataToExport: 'لا توجد بيانات للتصدير',
        
        // أوصاف
        singlePointDesc: 'نقطة واحدة',
        batchPointDesc: 'نقطة دفعة',
        
        // عناوين التصدير
        exportFileName: 'نتائج_حساب_الخريطة',
        exportTitle: 'نتائج حساب الخريطة'
    }
}