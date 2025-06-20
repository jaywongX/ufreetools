export default {
  name: 'Форматирование CSS',
  description: 'Форматирование и улучшение CSS-кода для повышения читаемости',
  options: {
    indentSize: 'Размер отступа',
    indentWithTabs: 'Использовать табуляцию',
    convertQuotes: 'Преобразовать кавычки',
    sortSelectors: 'Сортировать селекторы',
    sortProperties: 'Сортировать свойства',
    compressColors: 'Сжать значения цветов',
    expandShorthand: 'Раскрыть сокращенные свойства'
  },
  actions: {
    format: 'Форматировать CSS',
    minify: 'Сжать',
    clear: 'Очистить',
    copy: 'Копировать',
    download: 'Скачать',
    upload: 'Загрузить файл'
  },
  messages: {
    copied: 'Скопировано в буфер обмена!',
    formatSuccess: 'CSS успешно отформатирован',
    formatError: 'Ошибка при форматировании CSS',
    invalidCss: 'Неверный синтаксис CSS'
  }
} 