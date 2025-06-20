export default {
  name: 'Анализатор редиректов',
  description: 'Проверка и анализ HTTP-редиректов для любого URL, просмотр цепочки перенаправлений и кодов состояния',
  
  input: {
    title: 'Введите URL',
    url: 'URL-адрес',
    urlPlaceholder: 'Введите URL для проверки редиректов (например: http://example.com)',
    check: 'Проверить редиректы',
    options: 'Настройки',
    followSecure: 'Следовать HTTPS-редиректам',
    followInsecure: 'Следовать HTTP-редиректам',
    maxRedirects: 'Максимальное количество редиректов',
    timeout: 'Таймаут (секунды)',
    userAgent: 'User-Agent',
    userAgentPlaceholder: 'Введите пользовательский заголовок User-Agent',
    preserveCookies: 'Сохранять cookies между редиректами',
    validateSSL: 'Проверять SSL-сертификаты',
    advancedMode: 'Расширенный режим'
  },
  
  results: {
    title: 'Результаты проверки редиректов',
    summary: 'Сводка',
    totalRedirects: 'Всего редиректов',
    finalDestination: 'Конечный URL',
    totalTime: 'Общее время',
    checkingUrl: 'Проверка URL...',
    noRedirects: 'Редиректы не обнаружены - URL загружается напрямую',
    error: 'Ошибка проверки редиректов: {error}',
    chain: 'Цепочка редиректов',
    stepCount: 'Шаг {count}',
    statusCode: 'Код состояния',
    redirectType: 'Тип редиректа',
    url: 'URL',
    responseTime: 'Время ответа',
    headers: 'Заголовки ответа',
    cookies: 'Cookies',
    serverInfo: 'Информация о сервере',
    ip: 'IP-адрес',
    location: 'Локация',
    contentType: 'Тип контента',
    copyChain: 'Копировать цепочку',
    downloadReport: 'Скачать отчет'
  },
  
  types: {
    permanent: 'Постоянный редирект (301)',
    temporary: 'Временный редирект (302)',
    seeOther: 'Смотреть другое (303)',
    temporaryAlt: 'Временный редирект (307)',
    permanentAlt: 'Постоянный редирект (308)',
    refresh: 'Meta refresh редирект',
    javascript: 'JavaScript редирект',
    frame: 'Frame/iframe редирект',
    unknown: 'Неизвестный тип редиректа'
  },
  
  visualization: {
    title: 'Визуализация',
    domain: 'Домен',
    path: 'Путь',
    type: 'Тип',
    zoomIn: 'Увеличить',
    zoomOut: 'Уменьшить',
    resetView: 'Сбросить вид',
    showGraph: 'Показать график',
    hideGraph: 'Скрыть график'
  },
  
  analysis: {
    title: 'Анализ и проблемы',
    issues: 'Обнаружены потенциальные проблемы',
    noIssues: 'Проблем не обнаружено',
    redirectLoop: 'Обнаружен цикл редиректов',
    longChain: 'Длинная цепочка редиректов (влияет на производительность)',
    mixedContent: 'Смешанное содержимое (HTTP → HTTPS)',
    insecureDowngrade: 'Понижение безопасности (HTTPS → HTTP)',
    metaRefresh: 'Meta refresh редирект (медленная загрузка)',
    multipleRedirects: 'Множественные редиректы с одного домена',
    temporary301: 'Использование временного редиректа для постоянных изменений',
    permanent302: 'Использование постоянного кода для временных редиректов',
    nonCanonical: 'Неканоничная схема редиректов',
    seoImpact: 'Влияние на SEO',
    low: 'Низкое',
    medium: 'Среднее',
    high: 'Высокое',
    security: 'Безопасность',
    performance: 'Производительность'
  },
  
  tools: {
    title: 'Связанные инструменты',
    httpHeaders: 'Просмотр HTTP-заголовков',
    pingIp: 'Пинг IP-адреса',
    whois: 'WHOIS запрос',
    dnsLookup: 'DNS запрос',
    sslChecker: 'Проверка SSL',
    mobileCheck: 'Проверка мобильных редиректов',
    validationTool: 'Валидатор HTML'
  },
  
  messages: {
    invalidUrl: 'Пожалуйста, введите корректный URL',
    noResponse: 'Сервер не ответил',
    connectionFailed: 'Ошибка подключения',
    requestCancelled: 'Запрос отменен',
    certificateError: 'Ошибка проверки SSL-сертификата',
    timeoutError: 'Превышено время ожидания',
    maxRedirectsExceeded: 'Превышено максимальное количество редиректов',
    copied: 'Скопировано в буфер обмена'
  }
}