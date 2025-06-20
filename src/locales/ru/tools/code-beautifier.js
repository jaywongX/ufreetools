export default {
  name: 'Форматер кода',
  description: 'Форматируйте и улучшайте код с подсветкой синтаксиса и отступами',
  languages: {
    title: 'Язык',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown',
    php: 'PHP',
    python: 'Python',
    ruby: 'Ruby',
    java: 'Java',
    csharp: 'C#',
    cpp: 'C++',
    typescript: 'TypeScript'
  },
  actions: {
    beautify: 'Форматировать',
    minify: 'Минифицировать',
    clear: 'Очистить',
    copy: 'Копировать',
    download: 'Скачать',
    upload: 'Загрузить файл'
  },
  options: {
    title: 'Параметры',
    indentSize: 'Размер отступа',
    indentWith: 'Тип отступа',
    spaces: 'Пробелы',
    tabs: 'Табуляция',
    lineBreaks: 'Стиль переноса строк',
    quoteStyle: 'Стиль кавычек',
    bracketStyle: 'Стиль скобок',
    preserveNewlines: 'Сохранять переносы строк',
    endWithNewline: 'Заканчивать переносом строки',
    removeComments: 'Удалять комментарии',
    wrapLineLength: 'Длина строки для переноса',
    lineNumbers: 'Номера строк',
    showLineNumbers: 'Показывать номера строк',
    wrapLines: 'Автоматический перенос строк',
    theme: 'Тема',
    autoDetect: 'Автоопределение',
    tryAutoDetect: 'Попробовать определить язык автоматически'
  },
  input: {
    title: 'Ввод',
    placeholder: 'Вставьте ваш код сюда...'
  },
  output: {
    title: 'Вывод',
    placeholder: 'Отформатированный код появится здесь...'
  },
  messages: {
    copied: 'Скопировано в буфер обмена!',
    beautifySuccess: 'Код успешно отформатирован',
    minifySuccess: 'Код успешно минифицирован',
    beautifyError: 'Ошибка при форматировании кода',
    minifyError: 'Ошибка при минификации кода',
    emptyCode: 'Пожалуйста, введите код для форматирования',
    fileTooBig: 'Файл слишком большой (максимум 2MB)',
    invalidFile: 'Недопустимый или неподдерживаемый тип файла',
    preview: 'Предпросмотр',
    HTMLCode: 'HTML-код',
  },
  stats: {
    original: 'Исходный',
    beautified: 'Отформатированный',
    minified: 'Минифицированный',
    size: 'Размер',
    characters: 'Символы',
    lines: 'Строки'
  },
  tips: {
    title: 'Советы по использованию',
    tip1: 'Выберите подходящий язык программирования для лучшей подсветки синтаксиса',
    tip2: 'Можно выбрать разные темы для соответствия стилю вашего сайта',
    tip3: 'Скопируйте сгенерированный HTML-код и вставьте его в редактор или на сайт с поддержкой HTML',
    tip4: 'Сгенерированный код с подсветкой поддерживает адаптивность и тёмный режим',
    tip5: 'Добавление номеров строк при отображении кода повышает читаемость и удобство ссылок'
  }
} 