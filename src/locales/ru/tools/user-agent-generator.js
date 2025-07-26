export default {
  name: 'Генератор User-Agent',
  description: 'Генерация строк User-Agent для различных браузеров и устройств',

  filters: {
    title: 'Фильтры',
    browser: 'Браузер',
    os: 'Операционная система',
    deviceType: 'Тип устройства'
  },

  browsers: {
    all: 'Все браузеры',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    opera: 'Opera',
    edge: 'Edge',
    ie: 'Internet Explorer',
    unknown: 'Неизвестный браузер'
  },

  operatingSystems: {
    all: 'Все системы',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    unknown: 'Неизвестная система'
  },

  deviceTypes: {
    all: 'Все устройства',
    desktop: 'Компьютер',
    mobile: 'Мобильное',
    tablet: 'Планшет',
    unknown: 'Неизвестное устройство'
  },

  generation: {
    quantity: 'Количество',
    generateRandom: 'Сгенерировать случайные User-Agent',
    clearResults: 'Очистить результаты'
  },

  results: {
    title: 'Результаты',
    copyAll: 'Копировать все',
    empty: 'Нажмите "Сгенерировать случайные User-Agent" для создания результатов'
  },

  messages: {
    copied: 'Скопировано в буфер обмена',
    allCopied: 'Все User-Agent скопированы',
    copyFailed: 'Ошибка копирования'
  },

  info: {
    formatTitle: 'Формат User-Agent',
    formatDescription: 'Строки User-Agent обычно содержат информацию о браузере, версии, ОС и устройстве в формате:',
    formatExample: 'Mozilla/5.0 (платформа) движок браузер',
    examplesTitle: 'Примеры User-Agent:',
    chromeWindows: 'Chrome (Windows):',
    firefoxMac: 'Firefox (macOS):',
    safariIOS: 'Safari (iOS):',
    useCasesTitle: 'Сценарии использования:',
    useCases: [
      'Тестирование совместимости сайтов',
      'Веб-скрапинг',
      'Разработка API',
      'Обход проверки браузера',
      'Эмуляция разных устройств'
    ]
  }
};