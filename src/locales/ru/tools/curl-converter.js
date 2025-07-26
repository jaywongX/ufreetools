export default {
  name: 'Конвертер cURL',
  description: 'Преобразование cURL-команд в фрагменты кода на различных языках программирования',
  title: 'cURL в код',
  subtitle: 'Конвертируйте cURL-команды в код на разных языках для быстрой интеграции HTTP-запросов в ваш проект',

  input: {
    title: 'cURL-команда',
    placeholder: 'Введите cURL-команду здесь',
    parse: 'Разобрать cURL',
    clear: 'Очистить',
    examples: 'Примеры команд:',
    options: 'Опции парсера',
    validateCommand: 'Проверить команду',
    formatCurl: 'Форматировать cURL'
  },

  options: {
    detectAuth: 'Автоопределение авторизации',
    resolveVariables: 'Разрешать переменные окружения',
    processContinuations: 'Обрабатывать символ продолжения строки (\\)',
    followRedirects: 'Следовать редиректам',
    preserveHeaders: 'Сохранять все заголовки',
    ignoreErrors: 'Игнорировать ошибки парсинга',
    noDuplicateHeaders: 'Без дублирования заголовков (использовать последний)'
  },

  output: {
    title: 'Результат',
    language: 'Целевой язык',
    copy: 'Копировать',
    copyTooltip: 'Скопировать в буфер обмена',
    download: 'Скачать',
    beautify: 'Форматировать',
    codeTitle: 'Код на {language}',
    errorTitle: 'Ошибка преобразования',
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
      browser: 'Браузер (fetch)',
      curl: 'cURL (отформатированный)',
      json: 'JSON (объект запроса)',
      har: 'HAR (HTTP архив)',
      javascript: 'JavaScript (Fetch)'
    }
  },

  request: {
    title: 'Детали запроса',
    method: 'Метод',
    url: 'URL',
    headers: 'Заголовки',
    body: 'Тело',
    auth: 'Аутентификация',
    options: 'Опции',
    cookie: 'Cookie',
    queryParams: 'Параметры запроса',
    formData: 'Данные формы',
    visualize: 'Визуализировать'
  },

  visualization: {
    title: 'Визуализация запроса',
    request: 'Запрос',
    response: 'Ответ',
    headers: 'Заголовки',
    body: 'Тело',
    timing: 'Временные характеристики',
    raw: 'Исходный вид'
  },

  analysis: {
    title: 'Анализ команды',
    insecureWarning: 'Предупреждение: команда использует --insecure/-k (проверка SSL отключена)',
    verboseIgnored: 'Примечание: режим подробного вывода (-v) игнорируется при преобразовании',
    unsupportedOptions: 'Неподдерживаемые опции',
    warnings: 'Предупреждения',
    info: 'Информация'
  },

  messages: {
    parsing: 'Разбор cURL-команды...',
    parseFailed: 'Не удалось разобрать cURL-команду: {error}',
    parseSuccess: 'cURL-команда успешно разобрана',
    copied: 'Код скопирован в буфер обмена',
    downloaded: 'Код скачан',
    invalidCurl: 'Некорректная cURL-команда',
    emptyCurl: 'Введите cURL-команду',
    validCurl: 'Корректная cURL-команда',
    unknownOption: 'Неизвестная опция: {option}',
    unsupportedMethod: 'Предупреждение: не все языки поддерживают HTTP-метод {method}',
    curlRequired: 'Команда должна начинаться с "curl "',
    copyFailed: 'Не удалось скопировать, скопируйте вручную'
  },

  examples: {
    title: 'Примеры cURL-команд',
    basic: 'Простой GET-запрос',
    headers: 'Пользовательские заголовки',
    post: 'POST с JSON',
    formData: 'Отправка данных формы',
    auth: 'Базовая аутентификация',
    complex: 'Сложный пример',
    exampleCommands: {
      getRequest: 'GET-запрос',
      postJson: 'POST JSON',
      postForm: 'POST формы',
      withAuth: 'С аутентификацией',
      uploadFile: 'Загрузка файла'
    }
  },

  actions: {
    convert: 'Конвертировать',
    converting: 'Конвертация...'
  }
};