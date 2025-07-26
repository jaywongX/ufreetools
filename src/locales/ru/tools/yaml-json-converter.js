export default {
  name: 'Конвертер YAML-JSON',
  description: 'Преобразование между форматами YAML и JSON с настраиваемыми опциями',

  input: {
    title: 'Ввод',
    yamlPlaceholder: 'Введите YAML здесь...',
    jsonPlaceholder: 'Введите JSON здесь...',
    loadSample: 'Загрузить пример',
    clearInput: 'Очистить ввод',
    uploadFile: 'Загрузить файл'
  },

  output: {
    title: 'Вывод',
    copyOutput: 'Копировать вывод',
    downloadOutput: 'Скачать вывод',
    clearOutput: 'Очистить вывод'
  },

  options: {
    conversionMode: 'Режим преобразования',
    jsonToYaml: 'JSON в YAML',
    yamlToJson: 'YAML в JSON',
    formatOutput: 'Форматировать вывод',
    indentSize: 'Размер отступа',
    quoteKeys: 'Заключать ключи в кавычки',
    sortKeys: 'Сортировать ключи по алфавиту',
    flowStyle: 'Стиль потока YAML',
    jsonCompatible: 'Совместимость с JSON',
    singleQuotes: 'Использовать одинарные кавычки',
    includeSchema: 'Включать схему',
    preserveKeyOrder: 'Сохранять порядок ключей'
  },

  flowStyles: {
    block: 'Блочный стиль',
    flow: 'Потоковый стиль',
    auto: 'Авто'
  },

  validation: {
    validate: 'Проверять перед преобразованием',
    validInput: 'Валидный {format}',
    invalidInput: 'Невалидный {format}: {error}',
    checkSyntax: 'Проверить синтаксис'
  },

  actions: {
    convert: 'Преобразовать',
    swap: 'Поменять форматы местами',
    beautify: 'Форматировать',
    minify: 'Минифицировать'
  },

  messages: {
    conversionSuccess: 'Преобразование успешно',
    conversionFailed: 'Ошибка преобразования: {error}',
    copySuccess: 'Скопировано в буфер обмена',
    downloadSuccess: 'Файл успешно скачан',
    emptyInput: 'Пожалуйста, введите данные для преобразования',
    invalidYaml: 'Неверный синтаксис YAML',
    invalidJson: 'Неверный синтаксис JSON'
  }
};