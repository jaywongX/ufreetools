export default 
{
    name: 'تشفير وفك تشفير URL',
    description: 'يستخدم تشفير URL لتحويل الأحرف الخاصة إلى صيغة مقبولة في الروابط، ويُستخدم عادةً في معالجة معلمات URL وإرسال النماذج.',
    options: {
      operationType: 'نوع العملية',
      encodeMode: 'وضع التشفير'
    },
    encodeOptions: {
      standard: 'تشفير قياسي (encodeURI)',
      component: 'تشفير المكونات (encodeURIComponent)',
      full: 'تشفير كامل (جميع الأحرف)',
      standardDescription: 'يشفر الرابط بالكامل مع الحفاظ على أحرف هيكل URL',
      componentDescription: 'مناسب لمعلمات URL، يشمل جميع الأحرف الخاصة',
      fullDescription: 'يشفر جميع الأحرف غير الأبجدية الرقمية، بما في ذلك المسافات (تتحول إلى %20 بدلاً من +)'
    },
    actions: {
      encode: 'تشفير URL',
      decode: 'فك تشفير URL',
      clear: 'مسح',
      copyResult: 'نسخ النتيجة'
    },
    input: {
      textToEncode: 'النص المراد تشفيره',
      textToDecode: 'النص المراد فك تشفيره',
      encodePlaceholder: 'أدخل الرابط أو النص المراد تشفيره...',
      decodePlaceholder: 'أدخل الرابط أو النص المراد فك تشفيره...'
    },
    output: {
      encodeResult: 'نتيجة التشفير',
      decodeResult: 'نتيجة فك التشفير'
    },
    messages: {
      copied: '(تم النسخ',
      error: 'خطأ: {message}',
      decodeError: 'تعذر فك التشفير: "{text}"',
      copyFailed: 'فشل النسخ، يرجى النسخ يدويًا'
    },
    referenceTable: {
      title: 'جدول مرجعي لأحرف URL المشفرة الشائعة',
      showTable: 'عرض الجدول',
      hideTable: 'إخفاء الجدول',
      character: 'الحرف',
      encoded: 'تشفير URL',
      description: 'الوصف',
      descriptions: {
        space: 'مسافة',
        exclamation: 'علامة تعجب',
        doubleQuote: 'علامة تنصيص مزدوجة',
        hash: 'علامة هاشت',
        dollar: 'علامة دولار',
        percent: 'علامة نسبة مئوية',
        ampersand: 'علامة و',
        singleQuote: 'علامة تنصيص مفردة',
        leftParenthesis: 'قوس فتح',
        rightParenthesis: 'قوس إغلاق',
        asterisk: 'علامة نجم',
        plus: 'علامة جمع',
        comma: 'فاصلة',
        slash: 'شرطة مائلة',
        colon: 'نقطتان',
        semicolon: 'فاصلة منقوطة',
        lessThan: 'علامة أصغر من',
        equals: 'علامة يساوي',
        greaterThan: 'علامة أكبر من',
        questionMark: 'علامة استفهام',
        at: 'علامة at',
        leftBracket: 'قوس مربع فتح',
        backslash: 'شرطة مائلة عكسية',
        rightBracket: 'قوس مربع إغلاق',
        caret: 'علامة إقحام',
        backtick: 'علامة تنصيص عكسية',
        leftBrace: 'قوس مجعد فتح',
        pipe: 'علامة أنبوب',
        rightBrace: 'قوس مجعد إغلاق',
        tilde: 'علامة تيلدا',
        chinese: 'نص صيني مشفر بترميز UTF-8'
      }
    },
    article: {
      title: 'تشفير وفك تشفير URL: دليل شامل للتشفير وفك التشفير',
      introduction: {
        title: 'ما هو تشفير وفك تشفير URL؟',
        p1: '<strong>تشفير وفك تشفير URL</strong> هي عملية مهمة في تطوير الويب، حيث يتم تحويل الأحرف الخاصة إلى صيغة آمنة للنقل عبر الإنترنت. عند إدخال معلومات في رابط، فإن بعض الأحرف (مثل المسافات وعلامة & والشرطة المائلة) لها معانٍ خاصة في هيكل URL. يقوم تشفير URL باستبدال هذه الأحرف الخاصة بعلامة النسبة المئوية (%) متبوعة برقمين ستة عشري.',
        p2: 'توفر أداة <strong>تشفير وفك تشفير URL</strong> الخاصة بنا واجهة سهلة الاستخدام يمكنها التعامل مع ثلاثة أنواع من التشفير: التشفير القياسي (encodeURI)، وتشفير المكونات (encodeURIComponent)، والتشفير الكامل لجميع الأحرف. هذه المرونة تتيح للمطورين الذين يستخدمون دوال <strong>تشفير وفك تشفير URL في JavaScript</strong> أو طرق <strong>تشفير وفك تشفير URL في PHP</strong> أو أي لغة برمجة أخرى اختبار وتأكيد عمليات التشفير وفك التشفير الخاصة بهم بسهولة.',
        p3: 'سواء كنت تتعامل مع إرسال النماذج أو طلبات API أو معلمات URL معقدة، فإن فهم وتنفيذ تقنيات <strong>تشفير وفك تشفير URL</strong> بشكل صحيح أمر بالغ الأهمية لمنع تلف البيانات وثغرات الأمان. يستكشف هذا الدليل الشامل جميع جوانب تشفير وفك تشفير URL عبر لغات وأطر العمل البرمجية المختلفة.'
      },
      
      applications: {
        title: 'حالات الاستخدام العملية',
        scenario1: {
          title: 'تطوير الويب ومعالجة النماذج',
          content: 'غالبًا ما يستخدم مطورو الويب دوال <strong>تشفير وفك تشفير URL في JavaScript</strong> أو <strong>تشفير وفك URL في JS</strong> لضمان تنسيق البيانات بشكل صحيح لطلبات HTTP. عندما يقدم المستخدم نموذجًا يحتوي على أحرف خاصة أو مسافات أو أحرف غير ASCII، يجب تشفير هذه الأحرف قبل إرسالها إلى الخادم. تُستخدم دالة <code>encodeURIComponent()</code> في JavaScript عادةً لهذا الغرض، بينما تُستخدم <code>decodeURIComponent()</code> لفك تشفير البيانات على جانب الاستقبال.'
        },
        scenario2: {
          title: 'تطوير APIs والتكامل',
          content: 'عند تطوير أو استخدام APIs، يحتاج المطورون غالبًا إلى استخدام دوال <strong>تشفير وفك تشفير URL</strong> بلغات مختلفة مثل <strong>تشفير وفك URL في Python</strong> أو <strong>تشفير وفك URL في Java</strong> أو <strong>تشفير وفك URL في Golang</strong>. قد تحتوي معلمات الاستعلام وقطع المسار على أحرف خاصة تحتاج إلى تشفير لضمان تكوين الطلب بشكل صحيح. على سبيل المثال، تستخدم عمليات <strong>تشفير وفك URL في Python</strong> عادةً وحدة <code>urllib.parse</code>، بينما قد يستخدم مطورو Java فئات <code>URLEncoder</code> و<code>URLDecoder</code>.'
        },
        scenario3: {
          title: 'التفاعل مع قواعد البيانات',
          content: 'يحتاج مطورو قواعد البيانات أحيانًا إلى تنفيذ عمليات <strong>تشفير وفك URL في SQL Server</strong> أو أنظمة قواعد بيانات أخرى. إذا لم يتم تشفيرها بشكل صحيح، فقد تتعارض الأحرف الخاصة في URL مع استعلامات SQL. وبالمثل، توفر أطر العمل مثل <strong>تشفير وفك URL في Laravel</strong> أدوات مساعدة للتعامل مع تشفير وفك تشفير URL في عمليات قواعد البيانات، مما يضمن سلامة البيانات طوال دورة حياة التطبيق.'
        },
        scenario4: {
          title: 'الأمان والمصادقة',
          content: 'يستخدم متخصصو الأمان تقنيات <strong>تشفير وفك تشفير URL</strong> لتحليل واختبار نقاط الضعف في تطبيقات الويب. يساعد تشفير URL الصحيح في منع هجمات الحقن وهجمات XSS. عند تنفيذ أنظمة المصادقة، قد يحتاج المطورون إلى تشفير الرموز المميزة أو المعلومات الحساسة الأخرى في URL. غالبًا ما تُستخدم مكتبات مثل <strong>تشفير وفك Base64 URL</strong> في هذه المهام المتعلقة بالأمان، خاصة في تنفيذات JWT (رموز الويب JSON).'
        },
        scenario5: {
          title: 'بيئات التطوير متعددة اللغات',
          content: 'في البيئات متعددة اللغات، قد يحتاج المطورون إلى التأكد من استخدام تشفير URL بشكل متسق عبر النظام البيئي للبرمجة. قد يكون اختبار تنفيذات <strong>تشفير وفك URL في C#</strong> مقابل <strong>تشفير وفك URL في TypeScript</strong> أو <strong>تشفير وفك URL في PHP</strong> أمرًا بالغ الأهمية للحفاظ على قابلية التشغيل البيني. تعمل أداتنا عبر الإنترنت كنقطة مرجعية محايدة، مما يسمح للمطورين بالتحقق من سلوك التشفير في تنفيذات لغات مختلفة دون الحاجة إلى كتابة أكواد اختبار إضافية.'
        }
      },
      
      guide: {
        title: 'كيفية استخدام أداة تشفير وفك تشفير URL',
        step1: {
          title: 'الخطوة الأولى: اختر نوع العملية',
          content: 'ابدأ باختيار العملية المطلوبة من القائمة المنسدلة. اختر "تشفير URL" لتحويل الأحرف الخاصة إلى صيغة آمنة للروابط، أو اختر "فك تشفير URL" لتحويل الأحرف المشفرة إلى شكلها الأصلي. توفر هذه المرونة اختبار الوظائف التي قد تنفذها في <strong>تشفير وفك URL في JavaScript</strong> أو <strong>تشفير وفك URL في PHP</strong> أو <strong>تشفير وفك URL في Python</strong>.'
        },
        step2: {  
          title: 'الخطوة الثانية: اختر وضع التشفير',
          content: 'عند اختيار "تشفير URL"، اختر من بين ثلاثة أوضاع تشفير مختلفة لتلبية احتياجاتك: <ul><li><strong>تشفير قياسي (encodeURI)</strong>: يشفر الرابط بالكامل مع الحفاظ على أحرف هيكل URL مثل الشرطة المائلة وعلامات الاستفهام. هذا يعادل استخدام دالة <code>encodeURI()</code> في <strong>تشفير وفك URL في JavaScript</strong>.</li><li><strong>تشفير المكونات (encodeURIComponent)</strong>: يشفر جميع الأحرف الخاصة، بما في ذلك تلك التي لها معانٍ خاصة في URL مثل الشرطة المائلة وعلامات الاستفهام. هذا يعادل استخدام دالة <code>encodeURIComponent()</code> في <strong>تشفير وفك URL في JS</strong>.</li><li><strong>تشفير كامل</strong>: يشفر جميع الأحرف غير الأبجدية الرقمية، ويوفر نهجًا شاملاً للتشفير، يشبه الدوال المخصصة في <strong>تشفير وفك URL في Java</strong>.</li></ul>'
        },
        step3: {
          title: 'الخطوة الثالثة: أدخل النص الخاص بك',
          content: 'بعد ذلك، أدخل النص الذي تريد تشفيره أو فك تشفيره في حقل الإدخال. يمكن أن يكون هذا رابطًا كاملاً أو مكونًا من مكونات URL أو أي سلسلة تحتوي على أحرف خاصة. إذا كنت تختبر وظائف مكافئة مثل <strong>تشفير وفك URL في PHP</strong> أو <strong>تشفير وفك URL في Python</strong>، يمكنك إدخال نفس السلسلة هنا للمقارنة.'
        },
        step4: {
          title: 'الخطوة الرابعة: معالجة واستخدام النتائج',
          content: 'انقر على زر "تشفير URL" أو "فك تشفير URL" لمعالجة إدخالك. ستظهر النتيجة في حقل الإخراج أدناه. يمكنك استخدام زر النسخ لنسخ النتيجة إلى تطبيقك، سواء كنت تستخدم <strong>تشفير وفك URL في C#</strong> أو <strong>تشفير وفك URL في TypeScript</strong> أو تنفيذ <strong>تشفير وفك URL في Laravel</strong>. يعرض الجدول المرجعي في أسفل الأداة أحرف URL المشفرة الشائعة للرجوع إليها.'
        }
      },
      
      faq: {
        title: 'أسئلة شائعة',
        q1: 'ما الفرق بين encodeURI و encodeURIComponent؟',
        a1: 'في عمليات <strong>تشفير وفك URL في JavaScript</strong>، لهذه الدوال استخدامات مختلفة. تم تصميم <code>encodeURI()</code> لتشفير رابط كامل مع الحفاظ على أحرف هيكل URL (مثل <code>/</code>، <code>?</code>، <code>:</code>، <code>=</code>). هذا مفيد عندما تحتاج إلى تشفير رابط كامل مع الحفاظ على هيكله.<br><br>من ناحية أخرى، يقوم <code>encodeURIComponent()</code> بتشفير جميع الأحرف الخاصة، بما في ذلك تلك التي لها معانٍ خاصة في URL مثل الشرطة المائلة وعلامات الاستفهام. هذا يجعله مثاليًا لتشفير مكونات URL مثل معلمات الاستعلام. على سبيل المثال، إذا كنت تبني رابط بحث يتضمن إدخال المستخدم، يجب عليك استخدام <code>encodeURIComponent()</code> لتشفير مصطلح البحث، لضمان عدم تدمير الأحرف الخاصة لهيكل URL. تستخدم معظم تنفيذات <strong>تشفير وفك URL في JS</strong> دالة <code>encodeURIComponent()</code> لإرسال النماذج واستدعاءات API.',
  
        q2: 'كيف يمكن تنفيذ تشفير وفك URL في PHP؟',
        a2: 'لعمليات <strong>تشفير وفك URL في PHP</strong>، يوفر PHP دوال مدمجة: <code>urlencode()</code> و<code>urldecode()</code>. تعمل دالة <code>urlencode()</code> بشكل مشابه لدالة <code>encodeURIComponent()</code> في JavaScript، حيث تقوم بتشفير جميع الأحرف الخاصة، بما في ذلك المسافات (كعلامة +). لتشفير رابط كامل، يوفر PHP دالة <code>rawurlencode()</code>، التي تتبع معيار RFC 3986 وتشفر المسافات كـ %20 بدلاً من +.',
  
        q3: 'كيف يمكن تنفيذ تشفير وفك URL في Python؟',
        a3: 'في <strong>تشفير وفك URL في Python</strong>، يمكنك استخدام دوال <code>quote()</code> و<code>unquote()</code> في وحدة <code>urllib.parse</code>. تشبه دالة <code>quote()</code> دالة <code>encodeURIComponent()</code> في JavaScript، حيث تقوم بتشفير جميع الأحرف الخاصة، بما في ذلك المسافات (كـ %20). تُستخدم دالة <code>unquote()</code> لفك تشفير السلاسل المشفرة في URL.' ,
  
        q4: 'هل يمكن استخدام تشفير Base64 بدلاً من تشفير URL؟',
        a4: 'على الرغم من استخدام تقنيات <strong>تشفير وفك Base64 URL</strong> أحيانًا لتشفير البيانات في الروابط (خاصة في تنفيذات JWT)، إلا أن تشفير Base64 ليس بديلاً عن تشفير URL. يحول تشفير Base64 البيانات الثنائية إلى أحرف ASCII، ولكنه قد ينتج أحرفًا لها معانٍ خاصة في URL مثل + و/ و=.',
  
        q5: 'كيف يتم التعامل مع تشفير URL في استعلامات SQL؟',
        a5: 'يتضمن تنفيذ عمليات <strong>تشفير وفك URL في SQL Server</strong> عادةً استخدام دوال مدمجة أو إنشاء دوال مخصصة. لا يحتوي SQL Server على دالة مدمجة لتشفير URL، ولكن يمكنك:<br><br>1. تنفيذ عمليات التشفير/فك التشفير في كود التطبيق قبل بناء استعلام SQL.<br>2. إنشاء دوال معرفة من قبل المستخدم في SQL. من أجل الأمان، من الأفضل عادةً استخدام طرق <strong>تشفير وفك URL في C#</strong> (للتطبيقات .NET) أو تنفيذات أخرى خاصة باللغة في كود التطبيق بدلاً من التعامل مع تشفير/فك تشفير URL مباشرة في SQL.'
      },
      
      relatedTools: {
        title: 'أدوات ذات صلة',
        tool1: '<a href="https://meyerweb.com/eric/tools/dencoder/" target="_blank" rel="noopener noreferrer">URL Decoder/Encoder</a>',
        tool2: '<a href="https://www.urldecoder.org/" target="_blank" rel="noopener noreferrer">URL Decode and Encode - Online</a>',
        tool3: '<a href="https://www.url-encode-decode.com/" target="_blank" rel="noopener noreferrer">URL Encode Decode - URL Percent Encoding and Decoding.</a>'
      },
      
      resources: {
        title: 'موارد خارجية',
        resource1: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" target="_blank" rel="noopener noreferrer">MDN Web Docs: encodeURIComponent()</a> - وثائق مفصلة عن دالة تشفير URL في JavaScript',
        resource2: '<a href="https://www.php.net/manual/en/function.urlencode.php" target="_blank" rel="noopener noreferrer">PHP Manual: urlencode()</a> - وثائق رسمية عن دالة تشفير URL في PHP',
        resource3: '<a href="https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1" target="_blank" rel="noopener noreferrer">W3C Form Submission Specification</a> - مواصفات رسمية توضح كيفية تشفير متصفحات الويب لبيانات النماذج'
      },
      
      conclusion: {
        title: 'الخلاصة',
        content: 'توفر أداة <strong>تشفير وفك تشفير URL</strong> الخاصة بنا حلاً متعدد الاستخدامات لجميع احتياجات تشفير وفك تشفير URL. سواء كنت بحاجة إلى اختبار <strong>تشفير وفك URL في JavaScript</strong> أو <strong>تشفير وفك URL في PHP</strong> أو <strong>تشفير وفك URL في Python</strong>، فإن أداتنا تلبي احتياجاتك.'
      }
    }
}