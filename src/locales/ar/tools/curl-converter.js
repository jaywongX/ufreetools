export default {
  name: 'محول cURL',
  description: 'تحويل أوامر cURL إلى مقتطفات برمجية بلغات مختلفة',
  title: 'تحويل cURL إلى كود',
  subtitle: 'تحويل أوامر cURL إلى كود بلغات برمجة متعددة، مما يسهل دمج طلبات HTTP في مشروعك بسرعة',

  input: {
    title: 'أمر cURL',
    placeholder: 'أدخل أمر cURL هنا، مثال: curl -X POST https://api.example.com -H "Content-Type: application/json" -d "{key:"value"}"',
    parse: 'تحليل cURL',
    clear: 'مسح',
    examples: 'أوامر مثال:',
    options: 'خيارات المحلل',
    validateCommand: 'التحقق من الأمر',
    formatCurl: 'تنسيق cURL'
  },

  options: {
    detectAuth: 'اكتشاف المصادقة تلقائياً',
    resolveVariables: 'حل المتغيرات البيئية',
    processContinuations: 'معالجة استمرار الأسطر (\\)',
    followRedirects: 'اتباع إعادة التوجيه',
    preserveHeaders: 'الحفاظ على جميع الرؤوس',
    ignoreErrors: 'تجاهل أخطاء التحليل',
    noDuplicateHeaders: 'لا رؤوس مكررة (استخدام آخر رأس)'
  },

  output: {
    title: 'إخراج الكود',
    language: 'اللغة المستهدفة',
    copy: 'نسخ',
    copyTooltip: 'نسخ إلى الحافظة',
    download: 'تنزيل',
    beautify: 'تجميل',
    codeTitle: 'كود {language}',
    errorTitle: 'خطأ في التحويل',
    languages: {
      python: 'Python (requests)',
      pythonHttp: 'Python (http.client)',
      node: 'Node.js (axios)',
      nodeRequest: 'Node.js (request)',
      nodeFetch: 'Node.js (fetch)',
      java: 'Java (HttpClient)',
      javaOkHttp: 'Java (OkHttp)',
      php: 'PHP (cURL)',
      phpGuzzle: 'PHP (Guzzle)',
      go: 'Go',
      rust: 'Rust',
      swift: 'Swift',
      csharp: 'C# (HttpClient)',
      ruby: 'Ruby',
      dart: 'Dart',
      powershell: 'PowerShell',
      browser: 'المتصفح (fetch)',
      curl: 'cURL (مُنسق)',
      json: 'JSON (كائن الطلب)',
      har: 'HAR (أرشيف HTTP)',
      javascript: 'JavaScript (Fetch)'
    }
  },

  request: {
    title: 'تفاصيل الطلب',
    method: 'الطريقة',
    url: 'URL',
    headers: 'الرؤوس',
    body: 'المحتوى',
    auth: 'المصادقة',
    options: 'الخيارات',
    cookie: 'Cookie',
    queryParams: 'معلمات الاستعلام',
    formData: 'بيانات النموذج',
    visualize: 'تصور'
  },

  visualization: {
    title: 'تصور الطلب',
    request: 'الطلب',
    response: 'الاستجابة',
    headers: 'الرؤوس',
    body: 'المحتوى',
    timing: 'التوقيت',
    raw: 'الخام'
  },

  analysis: {
    title: 'تحليل الأمر',
    insecureWarning: 'تحذير: هذا الأمر يستخدم --insecure/-k (تم تعطيل التحقق من SSL)',
    verboseIgnored: 'ملاحظة: تم تجاهل الوضع التفصيلي (-v) في التحويل',
    unsupportedOptions: 'خيارات غير مدعومة',
    warnings: 'تحذيرات',
    info: 'معلومات'
  },

  messages: {
    parsing: 'جاري تحليل أمر cURL...',
    parseFailed: 'فشل تحليل أمر cURL: {error}',
    parseSuccess: 'تم تحليل أمر cURL بنجاح',
    copied: 'تم نسخ الكود إلى الحافظة',
    downloaded: 'تم تنزيل الكود',
    invalidCurl: 'أمر cURL غير صالح',
    emptyCurl: 'يرجى إدخال أمر cURL',
    validCurl: 'أمر cURL صالح',
    unknownOption: 'خيار غير معروف: {option}',
    unsupportedMethod: 'تحذير: ليست جميع اللغات تدعم طريقة HTTP {method}',
    curlRequired: 'يجب أن يبدأ الأمر بـ "curl "',
    copyFailed: 'فشل النسخ، يرجى النسخ يدوياً'
  },

  examples: {
    title: 'أوامر cURL مثال',
    basic: 'طلب GET أساسي',
    headers: 'رؤوس مخصصة',
    post: 'POST مع JSON',
    formData: 'إرسال بيانات النموذج',
    auth: 'مصادقة أساسية',
    complex: 'مثال معقد',
    exampleCommands: {
      getRequest: 'طلب GET',
      postJson: 'POST JSON',
      postForm: 'POST نموذج',
      withAuth: 'مع مصادقة',
      uploadFile: 'رفع ملف'
    }
  },

  actions: {
    convert: 'تحويل',
    converting: 'جاري التحويل...'
  }
}; 