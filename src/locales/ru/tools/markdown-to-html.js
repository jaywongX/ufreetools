export default {
  name: 'Конвертер Markdown в HTML',
  description: 'Преобразование текста Markdown в HTML с настраиваемыми параметрами',

  input: {
    title: 'Ввод Markdown',
    placeholder: 'Введите или вставьте текст Markdown здесь...',
    loadSample: 'Загрузить пример',
    clearInput: 'Очистить',
    uploadFile: 'Загрузить файл Markdown',
    paste: 'Вставить из буфера',
    charCount: 'Количество символов',
    lineCount: 'Количество строк'
  },

  output: {
    title: 'HTML результат',
    copied: 'HTML скопирован в буфер',
    download: 'Скачать HTML',
    copyOutput: 'Копировать HTML',
    clearOutput: 'Очистить результат',
    previewTab: 'Предпросмотр',
    htmlTab: 'HTML код',
    previewMode: 'Режим предпросмотра',
    sourceMode: 'Исходный HTML'
  },

  options: {
    title: 'Настройки преобразования',
    headerIds: 'Автоматические ID заголовков',
    gfm: 'GitHub Flavored Markdown',
    tables: 'Таблицы',
    breaks: 'Разрывы строк',
    smartLists: 'Умные списки',
    smartypants: 'Умные кавычки',
    xhtml: 'XHTML',
    highlight: 'Подсветка синтаксиса',
    sanitize: 'Очистка HTML',
    footnotes: 'Сноски',
    taskLists: 'Списки задач',
    emoji: 'Поддержка эмодзи',
    includeStyle: 'Включить CSS по умолчанию',
    realtimePreview: 'Предпросмотр в реальном времени',
    scrollSync: 'Синхронная прокрутка',
    htmlOptions: 'Настройки HTML'
  },

  styles: {
    title: 'Настройки стилей',
    theme: 'Тема',
    codeTheme: 'Тема кода',
    customCSS: 'Пользовательский CSS',
    fontSize: 'Размер шрифта',
    lineHeight: 'Межстрочный интервал',
    enableCustom: 'Включить пользовательские стили'
  },

  themes: {
    default: 'По умолчанию',
    github: 'GitHub',
    bootstrap: 'Bootstrap',
    bulma: 'Bulma',
    medium: 'Medium',
    solarized: 'Solarized',
    dark: 'Темная тема',
    custom: 'Пользовательская'
  },

  codeThemes: {
    default: 'По умолчанию',
    github: 'GitHub',
    vscode: 'VS Code',
    atom: 'Atom',
    dracula: 'Dracula',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },

  actions: {
    convert: 'Конвертировать в HTML',
    clearAll: 'Очистить все',
    copyHtml: 'Копировать HTML',
    saveAsHtml: 'Сохранить как HTML',
    generateToc: 'Создать оглавление'
  },

  messages: {
    conversionSuccess: 'Markdown успешно преобразован',
    conversionFailed: 'Ошибка преобразования: {error}',
    emptyInput: 'Введите Markdown для преобразования',
    copied: 'HTML скопирован в буфер',
    tocGenerated: 'Оглавление создано'
  },

  alerts: {
    copied: 'Скопировано в буфер',
    copyFailed: 'Не удалось скопировать',
    pasteFailed: 'Не удалось вставить',
    confirmClear: 'Вы уверены, что хотите очистить ввод?'
  },

  status: {
    lastConversion: 'Последнее преобразование'
  },

  samples: {
    basic: 'Базовый пример',
    extended: 'Расширенный пример',
    article: 'Пример статьи'
  },

  download: {
    title: 'Экспорт Markdown в HTML'
  }
};