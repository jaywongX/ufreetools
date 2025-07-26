export default {
  name: 'Конвертер изображений в ASCII',
  description: 'Преобразование изображений в ASCII-арт с настраиваемыми параметрами',

  upload: {
    title: 'Загрузить изображение',
    dropzone: 'Перетащите изображение сюда или нажмите для выбора',
    maxSize: 'Максимальный размер файла: 5 МБ',
    supportedFormats: 'Поддерживаемые форматы: JPG, PNG, WEBP, GIF',
    pasteImage: 'Или вставьте изображение из буфера обмена'
  },

  options: {
    title: 'Настройки преобразования',
    width: 'Ширина вывода',
    height: 'Высота вывода',
    preserveAspect: 'Сохранять пропорции',
    colored: 'Цветной вывод',
    charSet: 'Набор символов',
    charSets: {
      standard: 'Стандартный',
      simple: 'Простой',
      complex: 'Сложный',
      blocks: 'Блочные символы',
      custom: 'Пользовательский'
    },
    customChars: 'Пользовательские символы',
    invert: 'Инвертировать цвета',
    threshold: 'Порог яркости',
    brightness: 'Яркость',
    contrast: 'Контраст',
    fontFamily: 'Шрифт',
    fontSize: 'Размер шрифта',
    lineHeight: 'Высота строки',
    backgroundColor: 'Цвет фона',
    textColor: 'Цвет текста'
  },

  output: {
    title: 'ASCII вывод',
    preview: 'Превью',
    raw: 'Исходный ASCII',
    html: 'HTML',
    copyToClipboard: 'Копировать в буфер',
    downloadTxt: 'Скачать как TXT',
    downloadHtml: 'Скачать как HTML',
    downloadImage: 'Скачать как изображение',
    stats: {
      title: 'Статистика',
      characters: 'Количество символов',
      lines: 'Количество строк',
      colors: 'Количество цветов',
      size: 'Размер текста'
    }
  },

  presets: {
    title: 'Пресеты',
    save: 'Сохранить текущие настройки',
    load: 'Загрузить пресет',
    delete: 'Удалить пресет',
    presetName: 'Название пресета',
    default: 'По умолчанию',
    detailed: 'Детализированный',
    minimalist: 'Минималистичный',
    blocky: 'Блочный стиль',
    small: 'Малый',
    inverted: 'Инвертированный'
  },

  adjustment: {
    title: 'Коррекция изображения',
    grayscale: 'Оттенки серого',
    negative: 'Негатив',
    resize: 'Изменить размер перед конвертацией',
    crop: 'Обрезать изображение',
    rotate: 'Повернуть',
    flipH: 'Отразить по горизонтали',
    flipV: 'Отразить по вертикали'
  },

  animation: {
    title: 'Анимация',
    animated: 'Обрабатывать как анимацию',
    frameDelay: 'Задержка кадров',
    loop: 'Зациклить анимацию',
    loopCount: 'Количество циклов',
    extractFrame: 'Извлечь текущий кадр'
  },

  actions: {
    convert: 'Конвертировать в ASCII',
    resetOptions: 'Сбросить настройки',
    refreshPreview: 'Обновить превью',
    loadImage: 'Загрузить новое изображение',
    applyChanges: 'Применить изменения',
    selectImage: 'Выбрать изображение',
    reset: 'Сбросить',
    processing: 'Обработка...',
    generate: 'Сгенерировать ASCII',
    copy: 'Копировать',
    download: 'Скачать'
  },

  messages: {
    converting: 'Преобразование изображения в ASCII...',
    conversionComplete: 'Преобразование завершено',
    conversionFailed: 'Ошибка преобразования: {error}',
    copied: 'ASCII скопирован в буфер обмена',
    downloadStarted: 'Загрузка началась',
    downloadComplete: 'ASCII загружен',
    downloadFailed: 'Ошибка загрузки',
    copyFailed: 'Ошибка копирования',
    resetComplete: 'Сброс выполнен',
    asciiGenerated: 'ASCII-арт сгенерирован',
    generationFailed: 'Ошибка генерации ASCII',
    presetSaved: 'Пресет сохранён',
    presetLoaded: 'Пресет загружен',
    presetDeleted: 'Пресет удалён',
    invalidImage: 'Недопустимый формат изображения или повреждённый файл',
    imageTooBig: 'Изображение слишком большое для преобразования',
    selectOrLoad: 'Пожалуйста, выберите изображение или загрузите по URL',
    asciiWillDisplay: 'Здесь будет отображаться ASCII',
    customCharsPlaceholder: 'Введите символы, упорядоченные от тёмного к светлому...',
    tip: 'После изменения настроек нажмите "Сгенерировать ASCII" для просмотра результата',
    drapPlaceHolder: 'Выберите или перетащите изображение сюда',
    noImage: 'Пожалуйста, сначала выберите изображение',
    generateAscii: 'Нажмите "Сгенерировать ASCII" для преобразования',
    tip2: 'Совет: используйте кнопку копирования для сохранения ASCII-арта в буфер или кнопку загрузки для сохранения в текстовый файл.'
  },

  charSets: {
    standard: 'Стандартный',
    simple: 'Простой',
    blocks: 'Блоки',
    custom: 'Пользовательский'
  },

  settings: {
    title: 'Настройки ASCII',
    customCharsetLabel: 'Пользовательский набор символов (от тёмного к светлому)',
    asciiWidth: 'Ширина ASCII',
    invert: 'Инвертировать цвета',
    colored: 'Цветной вывод',
    fontSize: 'Размер шрифта'
  },

  preview: {
    originalImage: 'Оригинальное изображение',
    generatedAscii: 'Сгенерированный ASCII'
  }
};