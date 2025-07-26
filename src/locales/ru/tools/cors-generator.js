export default {
  name: 'Генератор CORS-конфигураций',
  description: 'Быстрое создание конфигураций для кросс-доменных запросов (CORS) с поддержкой различных серверных окружений',

  options: {
    title: 'Параметры CORS',
    allowedOrigins: {
      title: 'Разрешенные домены (Access-Control-Allow-Origin)',
      allowAll: 'Разрешить все домены (*) <span class="text-yellow-500 text-xs ml-1">(небезопасно, не поддерживает учетные данные)</span>',
      specific: 'Указать разрешенные домены (рекомендуется)',
      addOrigin: 'Добавить домен',
      placeholder: 'Введите домен (например: https://example.com)',
      wildcard: 'Разрешить поддомены (с использованием *)',
      null: 'Разрешить null как источник',
      remove: 'Удалить домен'
    },
    allowedMethods: {
      title: 'Разрешенные HTTP-методы (Access-Control-Allow-Methods)',
      selectMethods: 'Выберите HTTP-методы',
      get: 'GET',
      post: 'POST',
      put: 'PUT',
      delete: 'DELETE',
      patch: 'PATCH',
      head: 'HEAD',
      options: 'OPTIONS'
    },
    allowedHeaders: {
      title: 'Разрешенные заголовки (Access-Control-Allow-Headers)',
      all: 'Разрешить все заголовки (*)',
      specific: 'Только указанные заголовки',
      addHeader: 'Добавить заголовок',
      headerPlaceholder: 'Введите название заголовка',
      common: 'Распространенные заголовки',
      custom: 'Пользовательские заголовки',
      contentType: 'Content-Type',
      accept: 'Accept',
      authorization: 'Authorization',
      origin: 'Origin',
      xRequestedWith: 'X-Requested-With',
      contentDisposition: 'Content-Disposition',
      remove: 'Удалить заголовок'
    },
    exposedHeaders: {
      title: 'Открытые заголовки (Access-Control-Expose-Headers)',
      description: 'Заголовки, доступные для чтения в браузере',
      addHeader: 'Добавить открытый заголовок',
      headerPlaceholder: 'Введите название заголовка'
    },
    credentials: {
      title: 'Разрешить учетные данные (Access-Control-Allow-Credentials)',
      description: 'Разрешить использование cookies и заголовков авторизации',
      allow: 'Разрешить учетные данные',
      warning: 'Можно использовать только с указанными доменами, нельзя использовать с *'
    },
    maxAge: {
      title: 'Время кэширования предварительных запросов (Access-Control-Max-Age)',
      description: 'Время кэширования результатов предварительных запросов (в секундах)',
      seconds: 'секунд',
      default: 'По умолчанию: ',
      recommended: 'Рекомендуется: 3600 (1 час)'
    },
    serverType: {
      title: 'Тип сервера',
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
      headers: 'HTTP-заголовки'
    }
  },

  output: {
    title: 'Сгенерированные заголовки',
    instructions: 'Добавьте эти заголовки в ответы вашего сервера:',
    copy: 'Копировать заголовки',
    test: 'Проверить заголовки',
    downloadConfig: 'Скачать конфигурацию'
  },

  configs: {
    title: 'Примеры конфигураций',
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
    title: 'Тестирование CORS',
    description: 'Проверьте, правильно ли работает ваша CORS-конфигурация',
    originUrl: 'URL источника',
    targetUrl: 'Целевой URL',
    method: 'Метод запроса',
    credentials: 'Включить учетные данные',
    headers: 'Пользовательские заголовки',
    addHeader: 'Добавить заголовок',
    testButton: 'Проверить CORS',
    results: 'Результаты теста',
    success: 'CORS-тест успешен ✓',
    failure: 'CORS-тест не пройден ✗✗',
    details: 'Детали ответа',
    response: 'Ответ',
    logs: 'CORS-логи',
    errorDetails: 'Детали ошибки'
  },

  presets: {
    title: 'Предустановки',
    api: 'API-сервер',
    assets: 'Статические ресурсы (CDN)',
    auth: 'Сервис аутентификации',
    publicAccess: 'Публичный доступ',
    restrictive: 'Ограничительный',
    load: 'Загрузить предустановку',
    save: 'Сохранить текущие настройки как предустановку'
  },

  tips: {
    title: 'Советы по CORS',
    tip1: 'Межсайтовый обмен ресурсами (CORS) — это механизм, основанный на HTTP-заголовках, который позволяет серверу указывать другие источники (домены, протоколы или порты), кроме своих собственных, из которых браузер может загружать ресурсы.',
    tip2: 'CORS — это функция безопасности современных браузеров, которая предотвращает отправку веб-страницами запросов к серверам с других доменов, защищая пользователей от межсайтовой подделки запросов.',
    usage: {
      title: 'Сценарии использования CORS:',
      tip1: 'Разрешить JavaScript на фронтенде доступ к API на другом домене',
      tip2: 'Поддержка кросс-доменных Ajax- или Fetch-запросов',
      tip3: 'Разрешить кросс-доменный доступ к шрифтам, CSS или другим ресурсам',
      tip4: 'Настройка межсервисного взаимодействия в микросервисной архитектуре',
    },
    safe: 'Совет по безопасности: обычно следует избегать использования "*" в качестве разрешенного источника, а вместо этого явно указывать доверенные домены, чтобы снизить потенциальные риски безопасности.'
  },

  messages: {
    copied: 'Заголовки скопированы в буфер обмена',
    configDownloaded: 'Конфигурация скачана',
    testStarted: 'Тестирование CORS начато',
    testSucceeded: 'CORS-запрос успешен',
    testFailed: 'CORS-запрос не удался: {error}',
    presetSaved: 'Предустановка сохранена',
    presetLoaded: 'Предустановка загружена'
  },

  config: {
    title: 'Конфигурация',
    empty: 'Настройте параметры для генерации CORS-конфигурации',
    copied: 'Конфигурация скопирована в буфер обмена!',
    copy: 'Копировать'
  },

  comments: {
    expressMiddleware: "// Использование промежуточного ПО Express",
    applyGlobalCors: "// Применение CORS-мидлвара",
    applySpecificRoute: "// Или применение только к определенному маршруту",
    applyRequest: "// Обработка запроса",
    apacheAllowedOrigins: "# Разрешенные домены",
    apacheAllowedMethods: "# Разрешенные HTTP-методы",
    apacheAllowedHeaders: "# Разрешенные HTTP-заголовки",
    apacheAllowedCredentials: "# Разрешенные учетные данные",
    preflightCacheDuration: "# Время кэширования предварительных запросов",
    apacheExposeHeaders: '# Открытые заголовки',
    handlePreflightRequest: "# Обработка предварительных запросов",
    nginxConfiguration: "# CORS-конфигурация\n# Добавьте эту конфигурацию в ваш server или location блок",
    nginxAllowedOrigins: "# Разрешенные домены",
    nginxAllowedMethods: "# Разрешенные HTTP-методы",
    nginxAllowedHeaders: "# Разрешенные HTTP-заголовки",
    nginxAllowedCredentials: "# Разрешенные учетные данные",
    nginxPreflightCacheDuration: "# Время кэширования предварительных запросов",
    nginxExposeHeaders: '# Открытые заголовки',
    nginxHandlePreflight: "# Обработка предварительных запросов",
    httpHeadersConfiguration: "# Конфигурация CORS HTTP-заголовков",
    httpAllowedOrigins: "# Разрешенные домены",
    httpAllowedMethods: "# Разрешенные HTTP-методы",
    httpAllowedHeaders: "# Разрешенные HTTP-заголовки",
    httpAllowedCredentials: "# Разрешенные учетные данные",
    httpPreflightCacheDuration: "# Время кэширования предварительных запросов",
    httpExposeHeaders: '# Открытые заголовки',
  }
};