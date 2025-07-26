export default {
    name: 'CORS कॉन्फ़िगरेशन जनरेटर',
    description: 'त्वरित रूप से क्रॉस-ओरिजन रिसोर्स शेयरिंग (CORS) कॉन्फ़िगरेशन बनाएँ, विभिन्न सर्वर वातावरणों का समर्थन करता है',

    options: {
        title: 'CORS विकल्प',
        allowedOrigins: {
            title: 'अनुमत स्रोत डोमेन (Access-Control-Allow-Origin)',
            allowAll: 'सभी स्रोतों को अनुमति दें (*) <span class="text-yellow-500 text-xs ml-1">(असुरक्षित, प्रमाणपत्र का समर्थन नहीं करता)</span>',
            specific: 'विशिष्ट डोमेन निर्दिष्ट करें (अनुशंसित)',
            addOrigin: 'स्रोत जोड़ें',
            placeholder: 'स्रोत दर्ज करें (उदाहरण: https://example.com)',
            wildcard: 'उपडोमेन की अनुमति (वाइल्डकार्ड)',
            null: 'null स्रोत की अनुमति दें',
            remove: 'डोमेन हटाएँ'
        },
        allowedMethods: {
            title: 'अनुमत HTTP विधियाँ (Access-Control-Allow-Methods)',
            selectMethods: 'HTTP विधि चुनें',
            get: 'GET',
            post: 'POST',
            put: 'PUT',
            delete: 'DELETE',
            patch: 'PATCH',
            head: 'HEAD',
            options: 'OPTIONS'
        },
        allowedHeaders: {
            title: 'अनुमत अनुरोध हेडर (Access-Control-Allow-Headers)',
            all: 'सभी अनुरोध हेडर की अनुमति दें (*)',
            specific: 'केवल विशिष्ट हेडर',
            addHeader: 'हेडर जोड़ें',
            headerPlaceholder: 'हेडर नाम दर्ज करें',
            common: 'सामान्य अनुरोध हेडर',
            custom: 'कस्टम अनुरोध हेडर',
            contentType: 'Content-Type',
            accept: 'Accept',
            authorization: 'Authorization',
            origin: 'Origin',
            xRequestedWith: 'X-Requested-With',
            contentDisposition: 'Content-Disposition',
            remove: 'हेडर हटाएँ'
        },
        exposedHeaders: {
            title: 'एक्सपोज़्ड रिस्पॉन्स हेडर (Access-Control-Expose-Headers)',
            description: 'ब्राउज़र द्वारा एक्सेस किए जा सकने वाले रिस्पॉन्स हेडर',
            addHeader: 'एक्सपोज़्ड हेडर जोड़ें',
            headerPlaceholder: 'हेडर नाम दर्ज करें'
        },
        credentials: {
            title: 'प्रमाणपत्र की अनुमति (Access-Control-Allow-Credentials)',
            description: 'कुकीज़ और प्रमाणीकरण हेडर का उपयोग करने की अनुमति दें',
            allow: 'प्रमाणपत्र की अनुमति दें',
            warning: 'इसे केवल विशिष्ट स्रोत के साथ उपयोग किया जा सकता है, वाइल्डकार्ड (*) के साथ नहीं'
        },
        maxAge: {
            title: 'प्रीफ्लाइट अनुरोध कैश समय (Access-Control-Max-Age)',
            description: 'प्रीफ्लाइट अनुरोध परिणामों का कैश समय (सेकंड में)',
            seconds: 'सेकंड',
            default: 'डिफ़ॉल्ट:',
            recommended: 'अनुशंसित: 3600 (1 घंटा)'
        },
        serverType: {
            title: 'सर्वर प्रकार',
            apache: 'Apache (.htaccess)',
            nginx: 'Nginx',
            express: 'Express.js',
            springBoot: 'Spring Boot',
            php: 'PHP',
            flask: 'Flask (Python)',
            django: 'Django',
            rails: 'Ruby on Rails',
            aws: 'AWS S3/CloudFront',
            azure: 'Azure',
            iis: 'IIS (web.config)',
            jetty: 'Jetty',
            headers: 'HTTP हेडर'
        }
    },

    output: {
        title: 'उत्पन्न हेडर',
        instructions: 'इन हेडर्स को अपने सर्वर रिस्पॉन्स में जोड़ें:',
        copy: 'हेडर्स कॉपी करें',
        test: 'हेडर्स परीक्षण करें',
        downloadConfig: 'कॉन्फ़िगरेशन डाउनलोड करें'
    },

    configs: {
        title: 'कॉन्फ़िगरेशन उदाहरण',
        nginx: 'Nginx',
        apache: 'Apache (.htaccess)',
        express: 'Express.js',
        springBoot: 'Spring Boot',
        php: 'PHP',
        flask: 'Flask (Python)',
        django: 'Django',
        rails: 'Ruby on Rails',
        aws: 'AWS S3/CloudFront',
        azure: 'Azure',
        iis: 'IIS Web.config'
    },

    testing: {
        title: 'CORS परीक्षण',
        description: 'अपने CORS कॉन्फ़िगरेशन की जांच करें कि क्या यह सही काम कर रहा है',
        originUrl: 'स्रोत URL',
        targetUrl: 'लक्ष्य URL',
        method: 'अनुरोध विधि',
        credentials: 'प्रमाणपत्र शामिल करें',
        headers: 'कस्टम हेडर',
        addHeader: 'हेडर जोड़ें',
        testButton: 'CORS परीक्षण करें',
        results: 'परीक्षण परिणाम',
        success: 'CORS परीक्षण सफल ✓',
        failure: 'CORS परीक्षण असफल ✗',
        details: 'रिस्पॉन्स विवरण',
        response: 'रिस्पॉन्स',
        logs: 'CORS लॉग',
        errorDetails: 'त्रुटि विवरण'
    },

    presets: {
        title: 'प्रीसेट',
        api: 'API सर्वर',
        assets: 'स्थैतिक संसाधन (CDN)',
        auth: 'प्रमाणीकरण सेवा',
        publicAccess: 'सार्वजनिक पहुँच',
        restrictive: 'प्रतिबंधात्मक',
        load: 'प्रीसेट लोड करें',
        save: 'वर्तमान कॉन्फ़िगरेशन को प्रीसेट के रूप में सहेजें'
    },

    tips: {
        title: 'CORS सुझाव',
        tip1: 'क्रॉस-ओरिजन रिसोर्स शेयरिंग (CORS) HTTP हेडर पर आधारित एक तंत्र है जो सर्वर को यह निर्दिष्ट करने की अनुमति देता है कि कौन से स्रोत (डोमेन, प्रोटोकॉल या पोर्ट) ब्राउज़र के माध्यम से उसके संसाधनों को लोड कर सकते हैं।',
        tip2: 'CORS सुरक्षा आधुनिक ब्राउज़र में एक सुरक्षा सुविधा है जो वेब पेज को गैर-समान स्रोत से संसाधनों के लिए अनुरोध भेजने से रोकती है, जिससे उपयोगकर्ता को क्रॉस-साइट अनुरोध फोर्जरी हमलों से सुरक्षित रखा जा सके।',
        usage: {
            title: 'CORS उपयोग के दृष्टांत:',
            tip1: 'फ्रंट-एंड जावास्क्रिप्ट को एक अलग डोमेन पर API के लिए एक्सेस देना',
            tip2: 'एजैक्स अनुरोध या Fetch अनुरोध समर्थन करना',
            tip3: 'फ़ॉन्ट्स, CSS या अन्य संसाधनों की क्रॉस-डोमेन एक्सेस की अनुमति देना',
            tip4: 'माइक्रोसर्विस आर्किटेक्चर में सेवा-से-सेवा संचार सेट करना',
        },
        safe: 'सुरक्षा सुझाव: आमतौर पर "*" वाइल्डकार्ड को अनुमत स्रोत के रूप में उपयोग करने से बचें और अपने द्वारा विश्वसनीय डोमेन निर्दिष्ट करें ताकि संभावित सुरक्षा जोखिम कम हो सकें।'
    },

    messages: {
        copied: 'हेडर्स क्लिपबोर्ड पर कॉपी कर दिए गए हैं',
        configDownloaded: 'कॉन्फ़िगरेशन डाउनलोड कर दिया गया है',
        testStarted: 'CORS परीक्षण शुरू हो गया है',
        testSucceeded: 'CORS अनुरोध सफल हुआ',
        testFailed: 'CORS अनुरोध असफल: {error}',
        presetSaved: 'प्रीसेट सहेज लिया गया है',
        presetLoaded: 'प्रीसेट लोड कर दिया गया है'
    },

    config: {
        title: 'कॉन्फ़िगरेशन',
        empty: 'CORS सेटिंग्स उत्पन्न करने के लिए विकल्प चुनें',
        copied: 'कॉन्फ़िगरेशन क्लिपबोर्ड पर कॉपी कर दिया गया है!',
        copy: 'कॉपी करें'
    },

    comments: {
        expressMiddleware: "// Express ऐप्लिकेशन मिडलवेयर का उपयोग करें",
        applyGlobalCors: "// CORS मिडलवेयर लागू करें",
        applySpecificRoute: "// या केवल विशिष्ट मार्गों पर लागू करें",
        applyRequest: "// अनुरोध संसाधित करें",
        apacheAllowedOrigins: "# अनुमत स्रोत डोमेन",
        apacheAllowedMethods: "# अनुमत HTTP विधियाँ",
        apacheAllowedHeaders: "# अनुमत HTTP हेडर",
        apacheAllowedCredentials: "# अनुमत प्रमाणपत्र",
        preflightCacheDuration: "# प्रीफ्लाइट अनुरोध कैश समय",
        apacheExposeHeaders: '# एक्सपोज़्ड रिस्पॉन्स हेडर',
        handlePreflightRequest: "# प्रीफ्लाइट अनुरोध संसाधित करें",
        nginxConfiguration: "# CORS कॉन्फ़िगरेशन\n# अपने सर्वर या स्थान ब्लॉक में यह कॉन्फ़िगरेशन जोड़ें",
        nginxAllowedOrigins: "# अनुमत स्रोत डोमेन",
        nginxAllowedMethods: "# अनुमत HTTP विधियाँ",
        nginxAllowedHeaders: "# अनुमत HTTP हेडर",
        nginxAllowedCredentials: "# अनुमत प्रमाणपत्र",
        nginxPreflightCacheDuration: "# प्रीफ्लाइट अनुरोध कैश समय",
        nginxExposeHeaders: '# एक्सपोज़्ड रिस्पॉन्स हेडर',
        httpHeadersConfiguration: "# CORS HTTP हेडर कॉन्फ़िगरेशन",
        httpAllowedOrigins: "# अनुमत स्रोत डोमेन",
        httpAllowedMethods: "# अनुमत HTTP विधियाँ",
        httpAllowedHeaders: "# अनुमत HTTP हेडर",
        httpAllowedCredentials: "# अनुमत प्रमाणपत्र",
        httpPreflightCacheDuration: "# प्रीफ्लाइट अनुरोध कैश समय",
        httpExposeHeaders: '# एक्सपोज़्ड रिस्पॉन्स हेडर',
    }
};