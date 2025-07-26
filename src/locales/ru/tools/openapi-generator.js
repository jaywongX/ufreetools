export default {
  name: 'Генератор TypeScript-клиента из OpenAPI',
  description: 'Автоматическая генерация TypeScript-интерфейсов и клиентского кода на основе OpenAPI-спецификации для улучшения взаимодействия фронтенда и бэкенда',

  options: {
    exportSchemas: 'Экспортировать все модели',
    generateClient: 'Генерировать клиентский код',
    addComments: 'Добавлять комментарии и документацию',
    useEnums: 'Использовать TypeScript enum (вместо строковых объединений)',
    indentSize: 'Размер отступа',
    operationType: 'Тип операций',
    displayOptions: 'Параметры отображения'
  },

  inputMode: {
    toggleToFile: 'Переключиться на загрузку файла',
    toggleToText: 'Переключиться на текстовый ввод',
    loadExample: 'Загрузить пример'
  },

  fileUpload: {
    dragAndDrop: 'Перетащите OpenAPI-файл сюда или нажмите для загрузки',
    supportedFormats: 'Поддерживаются форматы .json, .yaml и .yml',
    fileSelected: 'Выбрано: {0} ({1})'
  },

  textInput: {
    placeholder: 'Вставьте OpenAPI-спецификацию (JSON или YAML) здесь...'
  },

  actions: {
    generate: 'Сгенерировать TypeScript-код',
    processing: 'Обработка...',
    clear: 'Очистить',
    copy: 'Копировать код',
    download: 'Скачать код'
  },

  results: {
    generatedCode: 'Сгенерированный TypeScript-код',
    copied: 'Скопировано в буфер обмена',
    error: 'Ошибка',
    characterCount: 'Символов: {0}'
  },

  errors: {
    parseError: 'Не удалось разобрать OpenAPI-спецификацию. Убедитесь, что предоставлен валидный JSON или YAML.',
    invalidSpec: 'Некорректная OpenAPI-спецификация. Не найдены идентификаторы версий openapi или swagger.',
    processingError: 'Ошибка при обработке OpenAPI-спецификации: {0}'
  }
};