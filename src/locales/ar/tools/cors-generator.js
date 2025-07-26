export default {
  name: "منشئ تكوين CORS",
  description: "إنشاء تكوينات مشاركة الموارد عبر المصادر (CORS) بسرعة، مع دعم بيئات خوادم متعددة",

  options: {
    title: "خيارات CORS",
    allowedOrigins: {
      title: "النطاقات المسموح بها (Access-Control-Allow-Origin)",
      allowAll: "السماح لجميع المصادر (*) <span class=\"text-yellow-500 text-xs ml-1\">(غير آمن، لا يدعم البيانات الاعتمادية)</span>\
",
      specific: "تحديد النطاقات المسموح بها (مُوصى به)",
      addOrigin: "إضافة مصدر",
      placeholder: "أدخل المصدر (مثال: https://example.com)",
      wildcard: "السماح بالنطاقات الفرعية (حرف بدل)",
      null: "السماح بمصدر فارغ (null)",
      remove: "إزالة النطاق"
    },
    allowedMethods: {
      title: "طرق HTTP المسموح بها (Access-Control-Allow-Methods)",
      selectMethods: "اختر طرق HTTP",
      get: "GET",
      post: "POST",
      put: "PUT",
      delete: "DELETE",
      patch: "PATCH",
      head: "HEAD",
      options: "OPTIONS"
    },
    allowedHeaders: {
      title: "رؤوس الطلبات المسموح بها (Access-Control-Allow-Headers)",
      all: "السماح لجميع الرؤوس (*)",
      specific: "رؤوس محددة فقط",
      addHeader: "إضافة رأس",
      headerPlaceholder: "أدخل اسم الرأس",
      common: "رؤوس طلبات شائعة",
      custom: "رؤوس مخصصة",
      contentType: "Content-Type",
      accept: "Accept",
      authorization: "Authorization",
      origin: "Origin",
      xRequestedWith: "X-Requested-With",
      contentDisposition: "Content-Disposition",
      remove: "إزالة الرأس"
    },
    exposedHeaders: {
      title: "رؤوس الاستجابة المكشوفة (Access-Control-Expose-Headers)",
      description: "رؤوس الاستجابة التي يمكن للمتصفح الوصول إليها",
      addHeader: "إضافة رأس مكشوف",
      headerPlaceholder: "أدخل اسم الرأس"
    },
    credentials: {
      title: "السماح بالبيانات الاعتمادية (Access-Control-Allow-Credentials)",
      description: "السماح باستخدام ملفات تعريف الارتباط ورؤوس المصادقة",
      allow: "السماح بالبيانات الاعتمادية",
      warning: "يجب استخدامها مع مصادر محددة فقط، ولا يمكن استخدامها مع حرف البدل (*)"
    },
    maxAge: {
      title: "مدة التخزين المؤقت لطلبات ما قبل الفحص (Access-Control-Max-Age)",
      description: "مدة التخزين المؤقت لنتائج طلب ما قبل الفحص (بالثواني)",
      seconds: "ثانية",
      default: "افتراضي: ",
      recommended: "مُوصى به: 3600 (ساعة واحدة)"
    },
    serverType: {
      title: "نوع الخادم",
      apache: "Apache (.htaccess)",
      nginx: "Nginx",
      express: "Express.js",
      springBoot: "Spring Boot",
      php: "PHP",
      flask: "Flask (Python)",
      django: "Django",
      rails: "Ruby on Rails",
      aws: "AWS S3/CloudFront",
      azure: "Azure",
      iis: "IIS (web.config)",
      jetty: "Jetty",
      headers: "رؤوس HTTP"
    }
  },

  output: {
    title: "رؤوس مُنشأة",
    instructions: "أضف هذه الرؤوس إلى استجابة خادمك:",
    copy: "نسخ الرؤوس",
    test: "اختبار الرؤوس",
    downloadConfig: "تنزيل التكوين"
  },

  configs: {
    title: "أمثلة التكوين",
    nginx: "Nginx",
    apache: "Apache (.htaccess)",
    express: "Express.js",
    springBoot: "Spring Boot",
    php: "PHP",
    flask: "Flask (Python)",
    django: "Django",
    rails: "Ruby on Rails",
    aws: "AWS S3/CloudFront",
    azure: "Azure",
    iis: "IIS Web.config"
  },

  testing: {
    title: "اختبار CORS",
    description: "اختبر ما إذا كان تكوين CORS الخاص بك يعمل بشكل صحيح",
    originUrl: "عنوان URL المصدر",
    targetUrl: "عنوان URL الهدف",
    method: "طريقة الطلب",
    credentials: "تضمين بيانات الاعتماد",
    headers: "رؤوس مخصصة",
    addHeader: "إضافة رأس",
    testButton: "اختبار CORS",
    results: "نتائج الاختبار",
    success: "نجاح اختبار CORS ✓",
    failure: "فشل اختبار CORS ✗✗",
    details: "تفاصيل الاستجابة",
    response: "الاستجابة",
    logs: "سجلات CORS",
    errorDetails: "تفاصيل الخطأ"
  },

  presets: {
    title: "إعدادات مسبقة",
    api: "خادم API",
    assets: "موارد ثابتة (CDN)",
    auth: "خدمة المصادقة",
    publicAccess: "وصول عام",
    restrictive: "تقييدية",
    load: "تحميل إعداد مسبق",
    save: "حفظ الإعداد الحالي كإعداد مسبق"
  },

  tips: {
    title: "نصائح حول CORS",
    tip1: "مشاركة الموارد عبر المصادر (CORS) هي آلية تعتمد على رؤوس HTTP تسمح للخادم بالإشارة إلى مصادر أخرى (نطاق، بروتوكول أو منفذ) غير نفسه، يمكن للمتصفح تحميل الموارد منها.",
    tip2: "حماية CORS هي ميزة أمان في المتصفحات الحديثة تمنع صفحات الويب من إرسال طلبات إلى خوادم خارج النطاق، مما يحمي المستخدمين من هجمات تزوير الطلبات عبر المواقع.",
    usage: {
      title: "حالات استخدام CORS:",
      tip1: "السماح لـ JavaScript في الواجهة الأمامية بالوصول إلى واجهات برمجة التطبيقات (APIs) في نطاقات مختلفة",
      tip2: "دعم طلبات Ajax أو Fetch عبر النطاقات",
      tip3: "السماح بالوصول عبر النطاقات إلى الخطوط أو CSS أو موارد أخرى",
      tip4: "إعداد الاتصال بين الخدمات في بنية الخدمات المصغرة",
    },
    safe: "نصيحة أمان: يجب تجنب استخدام حرف البدل (*) كمصدر مسموح به بشكل عام، ويجب تحديد النطاقات التي تثق بها بشكل صريح لتقليل المخاطر الأمنية المحتملة."
  },

  messages: {
    copied: "تم نسخ الرؤوس إلى الحافظة",
    configDownloaded: "تم تنزيل التكوين",
    testStarted: "بدأ اختبار CORS",
    testSucceeded: "نجاح طلب CORS",
    testFailed: "فشل طلب CORS: {error}",
    presetSaved: "تم حفظ الإعداد المسبق",
    presetLoaded: "تم تحميل الإعداد المسبق"
  },

  config: {
    title: "التكوين",
    empty: "قم بتكوين الخيارات لإنشاء إعدادات CORS",
    copied: "تم نسخ التكوين إلى الحافظة!",
    copy: "نسخ"
  },

  comments: {
    expressMiddleware: "// استخدام وسيط Express",
    applyGlobalCors: "// تطبيق وسيط CORS",
    applySpecificRoute: "// أو التطبيق على مسار معين فقط",
    applyRequest: "// معالجة الطلب",
    apacheAllowedOrigins: "# النطاقات المسموح بها",
    apacheAllowedMethods: "# طرق HTTP المسموح بها",
    apacheAllowedHeaders: "# رؤوس HTTP المسموح بها",
    apacheAllowedCredentials: "# البيانات الاعتمادية المسموح بها",
    preflightCacheDuration: "# مدة التخزين المؤقت لطلبات ما قبل الفحص",
    apacheExposeHeaders: "# رؤوس الاستجابة المكشوفة",
    handlePreflightRequest: "# معالجة طلب ما قبل الفحص",
    nginxConfiguration: "# تكوين CORS\n# أضف هذا التكوين إلى كتلة server أو location الخاصة بك",
    nginxAllowedOrigins: "# النطاقات المسموح بها",
    nginxAllowedMethods: "# طرق HTTP المسموح بها",
    nginxAllowedHeaders: "# رؤوس HTTP المسموح بها",
    nginxAllowedCredentials: "# البيانات الاعتمادية المسموح بها",
    nginxPreflightCacheDuration: "# مدة التخزين المؤقت لطلبات ما قبل الفحص",
    nginxExposeHeaders: "# رؤوس الاستجابة المكشوفة",
    nginxHandlePreflight: "# معالجة طلب ما قبل الفحص",
    httpHeadersConfiguration: "# تكوين رؤوس HTTP لـ CORS",
    httpAllowedOrigins: "# النطاقات المسموح بها",
    httpAllowedMethods: "# طرق HTTP المسموح بها",
    httpAllowedHeaders: "# رؤوس HTTP المسموح بها",
    httpAllowedCredentials: "# البيانات الاعتمادية المسموح بها",
    httpPreflightCacheDuration: "# مدة التخزين المؤقت لطلبات ما قبل الفحص",
    httpExposeHeaders: "# رؤوس الاستجابة المكشوفة",
  }
};