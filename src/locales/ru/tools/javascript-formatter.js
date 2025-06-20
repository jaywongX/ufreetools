export default {
  name: 'Форматер JavaScript',
  description: 'Онлайн-инструмент для форматирования и проверки JavaScript с поддержкой минификации и украшения кода',
  options: {
    indent: 'Отступ',
    quotes: 'Стиль кавычек',
    semicolons: 'Точки с запятой',
    trailingComma: 'Завершающая запятая'
  },
  actions: {
    format: 'Форматировать JavaScript',
    minify: 'Минифицировать',
    beautify: 'Украсить',
    clear: 'Очистить',
    copy: 'Копировать',
    download: 'Скачать'
  },
  messages: {
    copied: 'Скопировано в буфер обмена!',
    formatSuccess: 'JavaScript успешно отформатирован',
    formatError: 'Ошибка при форматировании JavaScript'
  }
}