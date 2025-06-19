export default {
  name: 'مؤقت بومودورو',
  description: 'إدارة الوقت وتحسين الإنتاجية باستخدام تقنية بومودورو',
  input: {
    title: 'إعدادات المؤقت',
    workDuration: 'مدة العمل',
    shortBreak: 'استراحة قصيرة',
    longBreak: 'استراحة طويلة',
    sessions: 'عدد الجلسات',
    autoStart: 'بدء تلقائي',
    autoBreak: 'استراحة تلقائية',
    notifications: 'الإشعارات',
    sound: 'الصوت',
    volume: 'مستوى الصوت',
    theme: 'المظهر',
    light: 'فاتح',
    dark: 'داكن',
    system: 'نظام'
  },
  output: {
    title: 'المؤقت',
    time: 'الوقت',
    status: 'الحالة',
    working: 'جاري العمل',
    shortBreak: 'استراحة قصيرة',
    longBreak: 'استراحة طويلة',
    completed: 'مكتمل',
    sessions: 'الجلسات',
    current: 'الحالية',
    total: 'الإجمالي',
    next: 'التالي',
    pause: 'إيقاف مؤقت',
    resume: 'استئناف',
    reset: 'إعادة تعيين',
    skip: 'تخطي'
  },
  settings: {
    title: 'الإعدادات',
    workDuration: 'مدة العمل',
    shortBreak: 'استراحة قصيرة',
    longBreak: 'استراحة طويلة',
    sessions: 'عدد الجلسات',
    autoStart: 'بدء تلقائي',
    autoBreak: 'استراحة تلقائية',
    notifications: 'الإشعارات',
    sound: 'الصوت',
    volume: 'مستوى الصوت',
    theme: 'المظهر'
  },
  actions: {
    start: 'بدء',
    pause: 'إيقاف مؤقت',
    resume: 'استئناف',
    reset: 'إعادة تعيين',
    skip: 'تخطي',
    settings: 'الإعدادات',
    statistics: 'الإحصائيات',
    export: 'تصدير'
  },
  messages: {
    starting: 'جاري البدء...',
    pausing: 'جاري الإيقاف المؤقت...',
    resuming: 'جاري الاستئناف...',
    resetting: 'جاري إعادة التعيين...',
    skipping: 'جاري التخطي...',
    completed: 'تم إكمال الجلسة',
    breakTime: 'حان وقت الاستراحة',
    workTime: 'حان وقت العمل',
    error: 'خطأ: {message}',
    empty: 'الرجاء إدخال إعدادات المؤقت',
    invalid: 'إعدادات غير صالحة',
    processing: 'جاري المعالجة...'
  },
  errors: {
    invalidDuration: 'مدة غير صالحة',
    invalidSessions: 'عدد جلسات غير صالح',
    invalidVolume: 'مستوى صوت غير صالح',
    startError: 'خطأ في البدء',
    pauseError: 'خطأ في الإيقاف المؤقت',
    resumeError: 'خطأ في الاستئناف',
    resetError: 'خطأ في إعادة التعيين',
    skipError: 'خطأ في التخطي'
  },
  article: {
    title: 'دليل شامل لتقنية بومودورو',
    intro: {
      title: 'ما هي تقنية بومودورو ولماذا تحتاجها؟',
      p1: 'تقنية بومودورو هي طريقة لإدارة الوقت وتحسين الإنتاجية. يمكن أن تساعدك في التركيز وإنجاز المهام بكفاءة.',
      p2: 'التقنية تعتمد على تقسيم العمل إلى فترات زمنية محددة مع فترات راحة منتظمة. المؤقت يجعل تطبيق هذه التقنية سهلاً وفعالاً.',
      p3: 'مع مؤقت بومودورو الخاص بنا، يمكنك تطبيق التقنية بسهولة مع خيارات تخصيص متعددة.'
    },
    features: {
      title: 'الميزات الرئيسية لمؤقت بومودورو',
      feature1: {
        title: 'توقيت دقيق',
        description: 'توقيت دقيق لفترات العمل والراحة.'
      },
      feature2: {
        title: 'تخصيص متقدم',
        description: 'خيارات متقدمة لتخصيص المدة والإعدادات.'
      },
      feature3: {
        title: 'إشعارات ذكية',
        description: 'إشعارات ذكية للبدء والانتهاء.'
      },
      feature4: {
        title: 'تتبع التقدم',
        description: 'تتبع تقدم الجلسات والإنجازات.'
      }
    },
    bestPractices: {
      title: 'أفضل الممارسات لتقنية بومودورو',
      practice1: {
        title: 'خطط مسبقاً',
        description: 'خطط مهامك قبل بدء الجلسة.'
      },
      practice2: {
        title: 'التزم بالوقت',
        description: 'التزم بالمدة المحددة للعمل والراحة.'
      },
      practice3: {
        title: 'خذ استراحات',
        description: 'خذ استراحات منتظمة لتحسين التركيز.'
      },
      practice4: {
        title: 'تتبع التقدم',
        description: 'تتبع تقدمك وتحسين إنتاجيتك.'
      }
    },
    faq: {
      title: 'الأسئلة الشائعة حول تقنية بومودورو',
      q1: {
        question: 'ما هي المدة المثالية للعمل؟',
        answer: 'المدة المثالية هي 25 دقيقة للعمل، تليها استراحة قصيرة.'
      },
      q2: {
        question: 'هل يمكنني تخصيص المدة؟',
        answer: 'نعم، يمكنك تخصيص مدة العمل والراحة حسب احتياجاتك.'
      },
      q3: {
        question: 'هل يمكنني تخطي الجلسة؟',
        answer: 'نعم، يمكنك تخطي الجلسة الحالية والانتقال إلى التالية.'
      },
      q4: {
        question: 'هل يمكنني تتبع الإحصائيات؟',
        answer: 'نعم، يمكنك تتبع إحصائيات الجلسات والإنجازات.'
      }
    },
    relatedTools: {
      title: 'أدوات ذات صلة',
      tool1: {
        name: 'مدير المهام',
        url: 'https://www.ufreetools.com/tool/task-manager',
        description: 'إدارة وتنظيم المهام.'
      },
      tool2: {
        name: 'مخطط الوقت',
        url: 'https://www.ufreetools.com/tool/time-planner',
        description: 'تخطيط وإدارة الوقت.'
      },
      tool3: {
        name: 'محلل الإنتاجية',
        url: 'https://www.ufreetools.com/tool/productivity-analyzer',
        description: 'تحليل وتحسين الإنتاجية.'
      }
    }
  }
}; 