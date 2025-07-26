export default {
  name: 'Форматирование JSON',
  description: 'Онлайн-инструмент для форматирования и проверки JSON с поддержкой сжатия и красивого отображения',

  options: {
    indent: 'Отступ',
    sort: 'Сортировка ключей',
    compress: 'Сжатие',
    beautify: 'Красивое отображение'
  },

  actions: {
    format: 'Форматировать JSON',
    compress: 'Сжать',
    clear: 'Очистить',
    copy: 'Копировать',
    download: 'Скачать',
    transferMeaning: 'Экранирование',
    contraposition: 'Удаление экранирования'
  },

  messages: {
    invalidJson: 'Неверный синтаксис JSON',
    copied: 'Скопировано в буфер обмена!',
    empty: 'Пожалуйста, введите JSON',
    formatTip: 'После форматирования или сжатия JSON отображается список свойств',
    formatSuccess: 'JSON успешно отформатирован',
    compressSuccess: 'JSON успешно сжат',
    escapeSuccess: 'JSON успешно экранирован',
    unescapeSuccess: 'Экранирование JSON успешно удалено',
    copyFailed: 'Не удалось скопировать, пожалуйста, скопируйте вручную'
  },

  labels: {
    jsonData: 'Данные JSON',
    propertyList: 'Список свойств',
    clickToCopy: '(нажмите на значение для копирования)'
  },

  placeholders: {
    jsonInput: 'Вставьте ваши данные JSON...'
  }
};