export default {
  name: 'Инструмент преобразования CSV в JSON',
  description: 'Преобразуйте данные CSV в формат JSON с настраиваемыми опциями',

  options: {
    delimiter: 'Разделитель',
    quote: 'Символ кавычек',
    header: 'Первая строка — заголовки',
    dynamicTyping: 'Динамическое определение типа',
    dynamicTypingDescription: 'Преобразует строки-числа в числа, "true/false" в булевы значения и т.д.',
    skipEmptyLines: 'Пропускать пустые строки',
    comments: 'Символ комментария',
    outputFormat: 'Формат вывода',
    indentation: 'Отступ',
    encoding: 'Кодировка',
    newline: 'Символ новой строки',
    title: 'Параметры преобразования'
  },

  delimiters: {
    comma: 'Запятая (,)',
    semicolon: 'Точка с запятой (;)',
    tab: 'Табуляция (\t)',
    pipe: 'Вертикальная черта (|)',
    custom: 'Пользовательский'
  },

  formats: {
    array: 'Массив объектов',
    arrayOfArrays: 'Массив массивов',
    keyed: 'Объект с ключами',
    nested: 'Вложенный объект'
  },

  preview: {
    input: 'Ввод...',
    output: 'Вывод...',
    rawCsv: 'Исходный CSV',
    parsedCsv: 'Разобранный CSV',
    jsonOutput: 'JSON-вывод',
    firstRows: 'Первые {count} строк',
    showAll: 'Показать все'
  },

  actions: {
    convert: 'Преобразовать',
    copy: 'Копировать JSON',
    download: 'Скачать JSON',
    clear: 'Очистить',
    uploadCsv: 'Загрузить CSV',
    swap: 'Поменять ввод/вывод',
    loadExample: 'Загрузить пример',
    clearInput: 'Очистить ввод',
    formatOutput: 'Форматировать вывод',
    copyResult: 'Копировать результат',
    downloadResult: 'Скачать результат',
    paste: 'Вставить',
    showOptions: 'Показать параметры',
    hideOptions: 'Скрыть параметры',
    uploadJson: 'Загрузить JSON'
  },

  results: {
    rowsProcessed: 'Обработано строк: {count}',
    conversionComplete: 'Преобразование завершено',
    copied: 'Скопировано в буфер обмена',
    downloaded: 'Скачано',
    error: 'Ошибка'
  },

  errors: {
    noData: 'Нет данных для преобразования',
    invalidCsv: 'Недопустимый формат CSV',
    parsingFailed: 'Ошибка разбора: {error}',
    missingHeader: 'Отсутствует строка заголовков',
    invalidJson: 'Недопустимый формат JSON',
    formatFailed: 'Ошибка форматирования: {error}',
    copyFailed: 'Не удалось скопировать, скопируйте вручную',
    downloadFailed: 'Ошибка скачивания',
    pasteError: 'Не удалось вставить из буфера обмена',
    conversionFailed: 'Ошибка преобразования'
  },

  conversion: {
    title: 'Направление преобразования',
    csvToJson: {
      title: 'CSV в JSON',
      delimiterLabel: 'Разделитель',
      headerLabel: 'Первая строка — заголовки',
      dynamicTypingLabel: 'Автоматически определять тип данных',
      skipEmptyLinesLabel: 'Пропускать пустые строки',
      convertButton: 'Преобразовать CSV в JSON'
    },
    jsonToCsv: {
      title: 'JSON в CSV',
      delimiterLabel: 'Разделитель',
      headerLabel: 'Включить строку заголовков',
      quotesLabel: 'Добавлять кавычки ко всем полям',
      nestedModeLabel: 'Обработка вложенных данных',
      flat: 'Развернуть',
      stringify: 'Преобразовать в строку',
      ignore: 'Игнорировать',
      convertButton: 'Преобразовать JSON в CSV'
    }
  },

  stats: {
    processed: 'Количество обработанных строк',
    fields: 'Количество полей/столбцов',
    inputSize: 'Размер до преобразования',
    outputSize: 'Размер после преобразования',
    title: 'Статистика'
  },

  messages: {
    copied: 'Скопировано в буфер обмена',
    download: 'Скачано',
    error: 'Ошибка'
  },

  formatBytes: {
    bytes: 'байт',
    kb: 'КБ',
    mb: 'МБ',
    gb: 'ГБ',
    tb: 'ТБ'
  }
}; 