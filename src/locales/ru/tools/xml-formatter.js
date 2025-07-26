export default {
  name: 'Форматер XML',
  description: 'Форматирование, очистка и проверка XML-документов',

  options: {
    indentSize: 'Размер отступа',
    useTabs: 'Использовать табуляцию',
    collapseContent: 'Сворачивать содержимое',
    maxLineWidth: 'Максимальная ширина строки',
    indentAttributes: 'Отступы для атрибутов',
    sortAttributes: 'Сортировать атрибуты',
    newlineAfterPI: 'Новая строка после инструкции',
    operationType: 'Тип операции',
    indentSettings: 'Настройки отступов',
    displayOptions: 'Параметры отображения',
    showLineNumbers: 'Показывать номера строк'
  },

  indentOptions: {
    twoSpaces: '2 пробела',
    fourSpaces: '4 пробела',
    tabIndent: 'Табуляция'
  },

  actions: {
    format: 'Форматировать XML',
    minify: 'Минифицировать XML',
    validate: 'Проверить',
    toJSON: 'Конвертировать в JSON',
    copy: 'Копировать',
    clear: 'Очистить',
    download: 'Скачать',
    upload: 'Загрузить XML',
    beautify: 'Очистить',
    copyCode: 'Копировать код'
  },

  messages: {
    copied: 'Скопировано в буфер обмена!',
    formatSuccess: 'XML успешно отформатирован',
    formatError: 'Ошибка при форматировании XML',
    validXml: 'XML корректен',
    invalidXml: 'Неверный XML: {0}',
    lineCol: 'Строка {line}, столбец {col}',
    minifySuccess: 'XML успешно минифицирован',
    conversionSuccess: 'Конвертация успешна',
    conversionError: 'Ошибка при конвертации',
    pleaseEnterXml: 'Пожалуйста, введите XML-содержимое',
    processingError: 'Ошибка обработки XML: {0}',
    formatResult: 'Результат форматирования',
    characterCount: 'Символов: {0}',
    lineCount: 'Строк: {0}',
    characterAndLineCount: 'Символов: {0} | Строк: {1}'
  },

  input: {
    xmlInput: 'Ввод XML',
    placeholder: 'Вставьте или введите XML здесь...'
  },

  examples: {
    title: 'Примеры XML',
    description: 'Нажмите, чтобы загрузить пример:',
    simpleXml: 'Простой XML',
    bookstore: 'Каталог книг',
    complexXml: 'Сложный XML'
  }
};