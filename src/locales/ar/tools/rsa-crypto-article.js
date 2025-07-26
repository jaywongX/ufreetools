export default {
  title: 'دليل شامل لتشفير RSA',
  intro: {
    title: 'ما هو تشفير RSA ولماذا تحتاج إليه؟',
    p1: 'RSA هو خوارزمية تشفير غير متماثل تستخدم لتأمين البيانات.',
    p2: 'يستخدم في العديد من التطبيقات مثل البريد الإلكتروني الآمن وتوقيع المستندات.',
    p3: 'مع أداة تشفير RSA الخاصة بنا، يمكنك تشفير وفك تشفير وتوقيع والتحقق من البيانات بسهولة.'
  },
  features: {
    title: 'الميزات الرئيسية لتشفير RSA',
    feature1: {
      title: 'تشفير وفك تشفير',
      description: 'تشفير وفك تشفير البيانات باستخدام مفاتيح RSA.'
    },
    feature2: {
      title: 'توقيع وتحقيق',
      description: 'توقيع البيانات والتحقق من صحتها.'
    },
    feature3: {
      title: 'خيارات متعددة',
      description: 'خيارات متعددة للحشو وخوارزميات التجزئة.'
    },
    feature4: {
      title: 'دعم تنسيقات متعددة',
      description: 'دعم لتنسيقات مفاتيح متعددة مثل PEM وDER.'
    }
  },
  bestPractices: {
    title: 'أفضل الممارسات لتشفير RSA',
    practice1: {
      title: 'استخدم مفاتيح قوية',
      description: 'استخدم مفاتيح بطول كافٍ لضمان الأمان.'
    },
    practice2: {
      title: 'حافظ على سرية المفاتيح الخاصة',
      description: 'لا تشارك المفاتيح الخاصة مع أي شخص.'
    },
    practice3: {
      title: 'اختر الحشو المناسب',
      description: 'اختر نوع الحشو المناسب لتطبيقك.'
    },
    practice4: {
      title: 'تحقق من صحة البيانات',
      description: 'تحقق من صحة البيانات بعد فك التشفير أو التحقق.'
    }
  },
  faq: {
    title: 'الأسئلة الشائعة حول تشفير RSA',
    q1: {
      question: 'ما هو طول المفتاح الموصى به؟',
      answer: 'يوصى باستخدام مفاتيح بطول 2048 بت أو أكثر.'
    },
    q2: {
      question: 'هل يمكنني استخدام مفاتيح بتنسيقات مختلفة؟',
      answer: 'نعم، تدعم الأداة تنسيقات PEM وDER وBase64 وHex.'
    },
    q3: {
      question: 'ما هي خوارزميات الحشو المدعومة؟',
      answer: 'تدعم الأداة PKCS#1 وOAEP.'
    },
    q4: {
      question: 'هل يمكنني تصدير النتائج؟',
      answer: 'نعم، يمكنك تصدير النتائج بتنسيقات مختلفة.'
    }
  },
  relatedTools: {
    title: 'أدوات ذات صلة',
    tool1: {
      name: 'مولد مفاتيح RSA',
      url: 'https://www.ufreetools.com/tool/rsa-key-pair-generator',
      description: 'توليد أزواج مفاتيح RSA.'
    },
    tool2: {
      name: 'موقع التوقيع RSA',
      url: 'https://www.ufreetools.com/tool/rsa-signature-verifier',
      description: 'التحقق من توقيعات RSA.'
    },
    tool3: {
      name: 'تشفير متماثل',
      url: 'https://www.ufreetools.com/tool/symmetric-crypto',
      description: 'تشفير وفك تشفير متماثل.'
    }
  }
}
