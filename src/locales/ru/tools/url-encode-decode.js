export default {
  name: 'URL кодирование/декодирование',
  description: 'URL кодирование используется для преобразования специальных символов в формат, приемлемый для URL, часто применяется при обработке параметров URL и отправке форм.',

  options: {
    operationType: 'Тип операции',
    encodeMode: 'Режим кодирования'
  },

  encodeOptions: {
    standard: 'Стандартное кодирование (encodeURI)',
    component: 'Кодирование компонентов (encodeURIComponent)',
    full: 'Полное кодирование (все символы)',
    standardDescription: 'Кодирование всего URL с сохранением структуры URL',
    componentDescription: 'Подходит для параметров URL, кодирует все специальные символы',
    fullDescription: 'Кодирует все не буквенно-цифровые символы, включая пробелы (преобразует в %20 вместо +)'
  },

  actions: {
    encode: 'Кодировать URL',
    decode: 'Декодировать URL',
    clear: 'Очистить',
    copyResult: 'Копировать результат'
  },

  input: {
    textToEncode: 'Текст для кодирования',
    textToDecode: 'Текст для декодирования',
    encodePlaceholder: 'Введите URL или текст для кодирования...',
    decodePlaceholder: 'Введите URL или текст для декодирования...'
  },

  output: {
    encodeResult: 'Результат кодирования',
    decodeResult: 'Результат декодирования'
  },

  messages: {
    copied: '(Скопировано',
    error: 'Ошибка: {message}',
    decodeError: 'Не удалось декодировать: "{text}"',
    copyFailed: 'Не удалось скопировать, скопируйте вручную'
  },

  referenceTable: {
    title: 'Таблица кодирования распространенных URL символов',
    showTable: 'Показать таблицу',
    hideTable: 'Скрыть таблицу',
    character: 'Символ',
    encoded: 'URL кодировка',
    description: 'Описание',
    descriptions: {
      space: 'Пробел',
      exclamation: 'Восклицательный знак',
      doubleQuote: 'Двойная кавычка',
      hash: 'Решетка',
      dollar: 'Знак доллара',
      percent: 'Процент',
      ampersand: 'Амперсанд',
      singleQuote: 'Одинарная кавычка',
      leftParenthesis: 'Левая скобка',
      rightParenthesis: 'Правая скобка',
      asterisk: 'Звездочка',
      plus: 'Знак плюс',
      comma: 'Запятая',
      slash: 'Слеш',
      colon: 'Двоеточие',
      semicolon: 'Точка с запятой',
      lessThan: 'Знак меньше',
      equals: 'Знак равенства',
      greaterThan: 'Знак больше',
      questionMark: 'Вопросительный знак',
      at: 'Этт-символ',
      leftBracket: 'Левая квадратная скобка',
      backslash: 'Обратный слеш',
      rightBracket: 'Правая квадратная скобка',
      caret: 'Циркумфлекс',
      backtick: 'Обратный апостроф',
      leftBrace: 'Левая фигурная скобка',
      pipe: 'Вертикальная черта',
      rightBrace: 'Правая фигурная скобка',
      tilde: 'Тильда',
      chinese: 'Китайские символы в UTF-8'
    }
  }
};