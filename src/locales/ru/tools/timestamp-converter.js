export default {
  name: 'Конвертер временных меток',
  description: 'Преобразование между временными метками и читаемыми датами с поддержкой различных форматов и часовых поясов',

  options: {
    inputType: 'Тип ввода',
    outputFormat: 'Формат вывода',
    timezone: 'Часовой пояс',
    includeTime: 'Включать время',
    format: 'Строка формата'
  },

  inputTypes: {
    timestamp: 'Unix временная метка',
    milliseconds: 'Unix миллисекунды',
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    date: 'Строка даты'
  },

  formats: {
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    locale: 'Локализованный формат',
    relative: 'Относительное время',
    custom: 'Пользовательский формат'
  },

  actions: {
    convert: 'Конвертировать',
    nowTimestamp: 'Текущая метка',
    nowDate: 'Текущая дата',
    copy: 'Копировать',
    clear: 'Очистить',
    refresh: 'Обновить',
    switch: 'Переключить'
  },

  messages: {
    copied: 'Скопировано в буфер обмена!',
    convertSuccess: 'Успешное преобразование',
    convertError: 'Ошибка при конвертации временной метки',
    invalidInput: 'Неверный формат ввода',
    invalidFormat: 'Неверная строка формата'
  },

  timeUnits: {
    milliseconds: 'миллисекунды',
    seconds: 'секунды',
    minutes: 'минуты',
    hours: 'часы',
    days: 'дни'
  },

  labels: {
    unixTimestamp: 'Unix временная метка (секунды)',
    dateTime: 'Дата и время',
    inputValue: 'Входное значение',
    unitConversion: 'Преобразование единиц времени',
    timeUnitLabel: 'Единица времени'
  },

  placeholders: {
    enterTimestamp: 'Введите Unix временную метку',
    enterValue: 'Введите значение'
  },

  info: {
    aboutTimestamp: 'О Unix временных метках',
    timestampDescription: 'Unix временная метка представляет количество секунд, прошедших с 00:00:00 UTC 1 января 1970 года. Это широко используемый способ представления времени в компьютерных системах и приложениях.',
    commonUsage: 'Области применения:',
    usages: {
      database: 'Запись времени в базах данных',
      api: 'Представление времени в API',
      logging: 'Логирование',
      filesystem: 'Временные метки в файловых системах'
    }
  }
};