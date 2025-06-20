export default {
  name: 'Форматирование кода',
  description: 'Форматирование и улучшение читаемости кода на различных языках',
  languages: {
    title: 'Язык',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown'
  },
  options: {
    title: 'Параметры',
    indent: 'Отступ',
    tabSize: 'Размер табуляции',
    insertSpaces: 'Вставлять пробелы',
    formatSelection: 'Форматировать выделение',
    formatOnType: 'Форматировать при вводе',
    removeComments: 'Удалить комментарии',
    mangle: 'Обфускация имен переменных',
    lineBreak: 'Стиль переноса строк'
  },
  actions: {
    beautify: 'Улучшить читаемость',
    minify: 'Сжать',
    format: 'Форматировать',
    copy: 'Копировать результат',
    clear: 'Очистить',
    download: 'Скачать',
    paste: 'Вставить из буфера обмена',
    loadSample: 'Загрузить пример кода'
  },
  messages: {
    formatSuccess: 'Код успешно отформатирован',
    formatError: 'Ошибка при форматировании кода',
    copied: 'Скопировано в буфер обмена!',
    languageChangeWarning: 'Изменение языка сбросит ваш код. Продолжить?'
  },
  errors: {
    emptyCode: 'Пожалуйста, введите код для форматирования',
    invalidJson: 'Некорректный JSON',
    jsCompressionError: 'Ошибка сжатия JavaScript'
  },
  input: 'Ввод',
  output: 'Вывод',
  placeholders: {
    input: 'Вставьте ваш код сюда...',
    output: 'Отформатированный код появится здесь...'
  },
  characters: 'символов',
  space: 'пробел',
  spaces: 'пробелов',
  auto: 'Авто',
  tips: {
    title: 'Советы по использованию',
    selectLanguage: 'Для наилучших результатов форматирования выберите язык, соответствующий вашему коду.',
    beautifyMinify: 'Используйте функцию "Улучшить читаемость" для повышения читаемости кода и "Сжать" для уменьшения размера файла.',
    customizeOptions: 'Используйте панель настроек ниже для настройки параметров форматирования.',
    keyboard: 'Нажмите Tab в редакторе для вставки отступа.'
  }
} 