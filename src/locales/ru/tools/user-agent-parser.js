export default {
  name: 'Анализатор User Agent',
  description: 'Анализирует строки User Agent браузеров, определяя информацию о браузере, операционной системе и устройстве',

  input: {
    label: 'Строка User Agent',
    placeholder: 'Введите или вставьте строку User Agent...'
  },

  actions: {
    parse: 'Анализировать',
    detect: 'Определить текущий браузер',
    clear: 'Очистить'
  },

  results: {
    title: 'Результаты анализа',
    summary: 'Сводка',
    details: 'Подробности',
    originalUA: 'Исходная строка User Agent'
  },

  sections: {
    browser: 'Браузер',
    os: 'Операционная система',
    device: 'Устройство',
    other: 'Другая информация'
  },

  deviceTypes: {
    mobile: 'Мобильное устройство',
    tablet: 'Планшет',
    desktop: 'Настольный компьютер'
  },

  fields: {
    name: 'Название',
    version: 'Версия',
    engine: 'Движок',
    platform: 'Платформа',
    type: 'Тип',
    vendor: 'Производитель',
    model: 'Модель',
    isMobile: 'Мобильное устройство',
    isTablet: 'Планшет',
    isDesktop: 'Настольный компьютер'
  },

  messages: {
    parsingError: 'Ошибка при анализе строки User Agent',
    emptyInput: 'Пожалуйста, введите строку User Agent',
    unknown: 'Неизвестно',
    yes: 'Да',
    no: 'Нет'
  },

  tips: {
    description: 'User Agent (User-Agent) - это строка идентификации, которую браузер отправляет серверу, содержащая информацию о браузере, операционной системе и устройстве.',
    useCases: 'Часто используется для веб-аналитики, обработки совместимости браузеров и адаптации под устройства.'
  }
};