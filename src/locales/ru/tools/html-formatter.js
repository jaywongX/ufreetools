export default {
  name: 'Форматирование HTML',
  description: 'Форматирование и улучшение HTML-кода для повышения читаемости',
  formatMode: 'Режим форматирования',
  beautify: 'Улучшить',
  minify: 'Сжать',
  formatOptions: 'Параметры форматирования',
  removeComments: 'Удалить комментарии',
  preserveComments: 'Сохранить комментарии',
  showLineNumbers: 'Показать номера строк',
  helpText: 'Инструмент улучшения/сжатия HTML помогает разработчикам быстро организовать или оптимизировать HTML-код, повышая читаемость или уменьшая размер файла.',
  input: 'Ввод HTML',
  inputPlaceholder: 'Вставьте или введите HTML-код здесь...',
  examples: 'Примеры',

  exampleNames: {
    simple: 'Простой HTML',
    complex: 'Сложная HTML-страница'
  },

  beautifiedResult: 'Улучшенный результат',
  minifiedResult: 'Сжатый результат',

  stats: {
    chars: 'Символов',
    lines: 'Строк',
    reduction: 'Уменьшено на {chars} символов ({percent}%)'
  },

  indentOptions: {
    spaces: '{count} пробелов',
    tab: 'Табуляция'
  },

  errorMessages: {
    emptyInput: 'Пожалуйста, введите HTML-код для обработки',
    processingFailed: 'Ошибка обработки HTML: {message}'
  },

  options: {
    indentSize: 'Размер отступа',
    wrapLength: 'Длина переноса',
    indentInnerHtml: 'Отступы внутреннего HTML',
    preserveNewlines: 'Сохранять переносы строк',
    maxPreserveNewlines: 'Максимальное количество последовательных переносов',
    wrapAttributes: 'Перенос атрибутов',
    sortAttributes: 'Сортировка атрибутов',
    sortClassNames: 'Сортировка имен классов'
  },

  actions: {
    format: 'Форматировать HTML',
    minify: 'Сжать',
    clear: 'Очистить',
    copy: 'Копировать',
    download: 'Скачать',
    upload: 'Загрузить файл'
  },

  messages: {
    copied: 'Скопировано в буфер обмена!',
    formatSuccess: 'HTML успешно отформатирован',
    formatError: 'Ошибка при форматировании HTML',
    invalidHtml: 'Недействительный синтаксис HTML'
  }
}; 