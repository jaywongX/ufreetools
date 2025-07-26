export default {
  name: 'Редактор HTTP-заголовков',
  description: 'Создавайте, редактируйте и тестируйте HTTP-заголовки запросов',

  // Элементы интерфейса
  editor: {
    title: 'Редактор заголовков',
    headers: 'Заголовки запроса',
    add: 'Добавить заголовок',
    bulk: 'Массовое редактирование',
    import: 'Импорт заголовков',
    export: 'Экспорт заголовков',
    clear: 'Очистить все',
    importError: 'Ошибка импорта'
  },

  // Заголовки
  header: {
    name: 'Имя заголовка',
    value: 'Значение',
    description: 'Описание',
    namePlaceholder: 'Введите имя заголовка',
    valuePlaceholder: 'Введите значение заголовка',
    actions: 'Действия',
    enabled: 'Включено',
    duplicate: 'Дублировать',
    delete: 'Удалить',
    noHeaders: 'Нет заголовков, нажмите "Добавить" или загрузите шаблон',
    bulkPlaceholder: 'Вставьте заголовки в формате "Имя: Значение" (по одному на строку) или исходный текст заголовков'
  },

  // Шаблоны
  presets: {
    title: 'Шаблоны',
    save: 'Сохранить текущие',
    load: 'Загрузить шаблон',
    delete: 'Удалить шаблон',
    presetName: 'Название шаблона',
    namePlaceholder: 'Введите название шаблона',
    confirmDelete: 'Вы уверены, что хотите удалить этот шаблон?',
    common: 'Часто используемые заголовки',
    custom: 'Пользовательские шаблоны'
  },

  // Общие заголовки
  common: {
    userAgent: 'User-Agent',
    contentType: 'Content-Type',
    authorization: 'Authorization',
    acceptLanguage: 'Accept-Language',
    acceptEncoding: 'Accept-Encoding',
    cacheControl: 'Cache-Control',
    cookie: 'Cookie',
    referer: 'Referer',
    origin: 'Origin'
  },

  // Тестирование
  test: {
    title: 'Тестирование заголовков',
    url: 'URL',
    urlPlaceholder: 'Введите URL для тестирования заголовков',
    method: 'Метод',
    send: 'Отправить запрос',
    response: 'Ответ'
  },

  // Ответ
  response: {
    title: 'Ответ',
    status: 'Статус',
    headers: 'Заголовки ответа',
    body: 'Тело ответа',
    time: 'Время',
    size: 'Размер',
    loading: 'Загрузка...',
    noResponse: 'Добавьте заголовки для просмотра предпросмотра',
    headerCount: 'заголовков'
  },

  // Настройки
  options: {
    title: 'Настройки',
    followRedirects: 'Следовать перенаправлениям',
    timeout: 'Таймаут (секунды)',
    validateSSL: 'Проверять SSL-сертификат',
    sendCredentials: 'Отправлять учетные данные'
  },

  // Форматы экспорта
  formats: {
    title: 'Форматы экспорта',
    raw: 'Исходный текст',
    json: 'JSON',
    curl: 'cURL команда',
    javascript: 'JavaScript',
    python: 'Python',
    php: 'PHP',
    fetch: 'Fetch API',
    axios: 'Axios'
  },

  // Руководства
  guides: {
    title: 'Справочник по заголовкам',
    description: 'Узнайте о распространенных HTTP-заголовках и их использовании',
    securityHeaders: 'Заголовки безопасности',
    cachingHeaders: 'Заголовки кэширования',
    corsHeaders: 'CORS заголовки',
    authenticationHeaders: 'Заголовки аутентификации',
    commonValues: 'Часто используемые значения'
  },

  // Действия
  actions: {
    copy: 'Копировать',
    format: 'Форматировать',
    validate: 'Проверить',
    clear: 'Очистить'
  },

  // Сообщения
  messages: {
    headerAdded: 'Заголовок добавлен',
    headerDeleted: 'Заголовок удален',
    headersCleared: 'Все заголовки очищены',
    presetSaved: 'Шаблон сохранен',
    presetLoaded: 'Шаблон загружен',
    presetDeleted: 'Шаблон удален',
    requestSent: 'Запрос отправлен',
    requestFailed: 'Ошибка запроса: {error}',
    copied: 'Скопировано в буфер обмена',
    importSuccess: 'Заголовки успешно импортированы',
    exportSuccess: 'Заголовки успешно экспортированы',
    invalidUrl: 'Некорректный URL',
    pleaseEnterHeader: 'Введите текст заголовков',
    invalidHeader: 'Не удалось распознать корректные заголовки. Используйте формат "Имя: Значение"',
    invalidHeaderName: 'Некорректное имя заголовка: {error}',
    copyFailed: 'Не удалось скопировать, скопируйте вручную'
  }
};