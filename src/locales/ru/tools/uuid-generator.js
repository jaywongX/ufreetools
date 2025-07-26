export default {
  name: 'Генератор UUID',
  description: 'Генерация случайных UUID и GUID для первичных ключей БД, временных имен файлов и других сценариев',

  options: {
    version: 'Версия UUID',
    quantity: 'Количество',
    format: 'Форматы вывода',
    includeDash: 'Включать дефисы',
    generateCount: 'Количество для генерации'
  },

  versions: {
    v1: 'Версия 1 (на основе времени)',
    v4: 'Версия 4 (случайная)',
    v5: 'Версия 5 (на основе имен)',
    custom: 'Пользовательский'
  },

  quantities: {
    single: 'Один',
    five: '5',
    ten: '10',
    twenty: '20'
  },

  formats: {
    default: 'Стандартный',
    base64: 'Base64',
    binary: 'Бинарный',
    hex: 'Шестнадцатеричный',
    noDash: 'Без дефисов'
  },

  actions: {
    generate: 'Сгенерировать UUID',
    copy: 'Копировать',
    copyAll: 'Копировать все',
    clear: 'Очистить',
    download: 'Скачать как TXT'
  },

  messages: {
    copied: 'Скопировано в буфер обмена!',
    generated: 'UUID успешно сгенерирован',
    tooMany: 'Максимальное количество - 1000',
    invalidVersion: 'Некорректная версия UUID',
    invalidNamespace: 'Некорректный UUID пространства имен',
    copyFailed: 'Ошибка копирования'
  }
};