export default {
  name: 'Генератор формул LaTeX',
  description: 'Создание и экспорт математических формул LaTeX в реальном времени',

  // Тексты интерфейса
  input: 'Введите код LaTeX',

  output: 'Предварительный просмотр',
  renderButton: 'Отобразить формулу',
  exportButton: 'Экспорт в изображение',
  copyButton: 'Копировать код LaTeX',

  // Настройки
  settings: {
    title: 'Настройки',
    fontSize: 'Размер шрифта',
    textColor: 'Цвет текста',
    backgroundColor: 'Цвет фона',
    displayMode: 'Режим отображения',
    displayModeInline: 'Встроенный режим',
    displayModeBlock: 'Блочный режим'
  },

  // Примеры
  examples: {
    title: 'Примеры',
    basic: 'Базовые формулы',
    fraction: 'Дроби',
    superscript: 'Верхние/нижние индексы',
    integral: 'Интегралы',
    matrix: 'Матрицы',
    more: 'Другие примеры'
  },

  // Сообщения
  copied: 'Скопировано в буфер обмена',

  errorTitle: 'Ошибка отображения',
  errorMessage: 'Проверьте синтаксис LaTeX'
};