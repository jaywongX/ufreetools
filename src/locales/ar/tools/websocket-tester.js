export default {
  name: "اختبار WebSocket",
  description: "الاتصال بخادم WebSocket، إرسال الرسائل وعرض الردود",

  connection: {
    url: "عنوان WebSocket",
    urlPlaceholder: "مثال: ws://echo.websocket.org",
    protocol: "بروتوكول فرعي (اختياري)",
    protocolPlaceholder: "مفصولة بفواصل",
    connect: "اتصال",
    disconnect: "قطع الاتصال",
    status: "حالة الاتصال",
    connected: "متصل",
    disconnected: "غير متصل",
    waiting: "في انتظار الاتصال",
    autoReconnect: "إعادة الاتصال التلقائي",
    reconnectMessage: "سيتم محاولة إعادة الاتصال بعد {0} ثانية..."
  },

  options: {
    title: "خيارات",
    autoScroll: "تمرير السجل تلقائيًا"
  },

  messages: {
    send: "إرسال رسالة",
    logs: "سجل الرسائل",
    emptyLogs: "ستظهر الرسائل بعد الاتصال هنا",
    placeholder: "أدخل الرسالة المراد إرسالها...",
    sendButton: "إرسال",
    clearButton: "مسح",
    copyButton: "نسخ",
    clearLogs: "مسح السجل",
    copyLogs: "نسخ السجل",
    format: {
      title: "التنسيق",
      text: "نص عادي",
      json: "JSON",
      binary: "ثنائي"
    },
    templates: {
      json: "JSON",
      text: "نص"
    },
    types: {
      sent: "تم الإرسال →",
      received: "تم الاستلام ←",
      error: "خطأ !",
      info: "معلومات"
    }
  },

  savedConnections: {
    title: "الاتصالات المحفوظة",
    empty: "لا توجد اتصالات محفوظة",
    save: "حفظ الاتصال الحالي",
    saveConnection: "حفظ الاتصال",
    connectionName: "اسم الاتصال",
    load: "تحميل",
    delete: "حذف",
    cancel: "إلغاء"
  },

  testServers: {
    title: "خوادم الاختبار",
    description: "فيما يلي بعض خوادم WebSocket العامة المتاحة للاختبار:",
    useServer: "استخدام هذا الخادم",
    servers: {
      echo: {
        name: "اختبار Echo",
        description: "خادم اختبار Echo آمن، يدعم اتصالات WSS"
      },
      postman: {
        name: "WebSocket.org",
        description: "خدمة Echo المقدمة من Postman، تدعم WSS"
      }
    }
  },

  logs: {
    connectingTo: "جارٍ الاتصال بـ {0}...",
    connectionSuccess: "تم الاتصال بنجاح",
    connectionError: "خطأ في WebSocket",
    connectionClosed: "تم إغلاق الاتصال (الكود: {0}{1})",
    invalidJson: "تنسيق JSON غير صالح: {0}",
    sendFailed: "فشل الإرسال: {0}",
    emptyMessage: "لا يمكن أن تكون الرسالة فارغة",
    notConnected: "غير متصل بـ WebSocket",
    copied: "تم نسخ السجل إلى الحافظة",
    copyFailed: "فشل النسخ: {0}",
    serverSelected: "تم اختيار الخادم: {0}",
    binaryData: "[بيانات ثنائية]"
  }
};