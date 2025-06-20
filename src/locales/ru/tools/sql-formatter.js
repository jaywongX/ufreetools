export default {
  name: 'Форматер SQL',
  description: 'Онлайн-инструмент для форматирования и валидации SQL с поддержкой минификации и красивого отображения',
  options: {
    language: 'Диалект SQL',
    indent: 'Стиль отступа',
    spaceCount: 'Количество пробелов',
    keywordCase: 'Регистр ключевых слов',
    uppercase: 'Верхний регистр',
    lineBreak: 'Стиль переноса строк',
    tabSize: 'Размер табуляции'
  },
  languages: {
    standard: 'Стандартный SQL',
    mysql: 'MySQL',
    postgresql: 'PostgreSQL',
    sqlite: 'SQLite',
    tsql: 'T-SQL (SQL Server)',
    oracle: 'Oracle PL/SQL'
  },
  indentOptions: {
    spaces: 'Пробелы',
    tabs: 'Табуляция'
  },
  spaceOptions: {
    two: '2 пробела',
    four: '4 пробела'
  },
  caseOptions: {
    preserve: 'Оставить как есть',
    upper: 'Верхний регистр',
    lower: 'Нижний регистр'
  },
  actions: {
    format: 'Форматировать SQL',
    minify: 'Минифицировать SQL',
    clear: 'Очистить',
    copy: 'Копировать',
    download: 'Скачать',
  },
  messages: {
    copied: 'Скопировано в буфер обмена!',
    formatSuccess: 'SQL успешно отформатирован',
    formatError: 'Ошибка при форматировании SQL'
  },
  placeholders: {
    input: 'Введите SQL-запрос здесь...',
    output: 'Здесь появится отформатированный SQL...'
  },
  output: 'Результат форматирования',
  tips: {
    title: 'Советы по использованию',
    dialect: 'Выберите подходящий диалект SQL для точного форматирования.',
    formatting: 'Настройте стиль отступов и количество пробелов в соответствии с вашими предпочтениями.',
    keywords: 'Выберите, оставить ли ключевые слова как есть, перевести в верхний или нижний регистр.',
    copy: 'Используйте кнопку копирования для быстрого переноса отформатированного SQL в буфер обмена.'
  }
}