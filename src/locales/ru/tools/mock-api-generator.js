export default {
  name: 'Генератор Mock API',
  description: 'Автоматическое создание Mock API на основе спецификации OpenAPI',

  options: {
    version: 'Версия OpenAPI',
    format: 'Формат вывода',
    includeExamples: 'Включить примеры ответов',
    responseDynamism: 'Динамичность ответов',
    responseType: 'Тип ответа',
    arrayLength: 'Длина массива',
    responseFormat: 'Формат ответа'
  },

  formats: {
    json: 'JSON Server',
    express: 'Express.js',
    mockjs: 'Mock.js',
    msw: 'Mock Service Worker'
  },

  actions: {
    generate: 'Сгенерировать Mock',
    preview: 'Предпросмотр API',
    clear: 'Очистить',
    copy: 'Копировать код',
    download: 'Скачать',
    uploadSpec: 'Загрузить спецификацию OpenAPI',
    uploadJava: 'Загрузить Java-класс',
    generateJson: 'Сгенерировать JSON',
    generateBuilder: 'Сгенерировать Builder',
    format: 'Форматировать'
  },

  messages: {
    copied: 'Скопировано в буфер обмена!',
    generationSuccess: 'Mock API успешно сгенерирован',
    generationError: 'Ошибка при генерации Mock API',
    specRequired: 'Пожалуйста, предоставьте спецификацию OpenAPI',
    fileUploaded: 'Файл загружен',
    parseError: 'Ошибка парсинга Java-класса, убедитесь в правильности формата файла'
  },

  help: {
    uploadHint: 'Поддерживается загрузка .java файлов для автоматического парсинга структуры класса и генерации Mock конфигурации. Многоуровневые свойства объектов пока не поддерживаются.'
  },

  fields: {
    title: 'Определение полей',
    addField: 'Добавить поле',
    addChildField: 'Добавить вложенное поле',
    fieldName: 'Имя поля'
  },

  fieldTypes: {
    string: 'Строка',
    number: 'Число',
    boolean: 'Логическое',
    date: 'Дата',
    name: 'Имя',
    email: 'Email',
    phone: 'Телефон',
    address: 'Адрес',
    id: 'ID',
    image: 'URL изображения',
    array: 'Массив',
    object: 'Объект'
  },

  array: {
    itemType: 'Тип элементов массива',
    arrayFields: 'Поля элементов массива'
  },

  object: {
    childFields: 'Вложенные поля'
  },

  responseTypes: {
    object: 'Отдельный объект',
    array: 'Массив объектов',
    custom: 'Пользовательская структура'
  },

  responseFormats: {
    dataOnly: 'Только данные',
    standard: 'Стандартный REST-ответ (code, data, message)'
  },

  placeholder: {
    output: '// Сгенерированные Mock-данные будут отображены здесь'
  }
};