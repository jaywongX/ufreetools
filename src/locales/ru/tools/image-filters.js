export default {
  name: 'Фильтры для изображений',
  description: 'Применение различных фильтров и эффектов к изображениям с предпросмотром в реальном времени',

  upload: {
    title: 'Загрузить изображение',
    dropzone: 'Перетащите изображение сюда или нажмите для выбора',
    maxSize: 'Максимальный размер файла: 10 МБ',
    supportedFormats: 'Поддерживаемые форматы: JPG, PNG, WEBP, GIF'
  },

  editor: {
    title: 'Редактор фильтров',
    original: 'Оригинал',
    filtered: 'С фильтром',
    reset: 'Сбросить все',
    undo: 'Отменить',
    redo: 'Повторить',
    zoomIn: 'Увеличить',
    zoomOut: 'Уменьшить',
    fitToScreen: 'Подогнать по размеру',
    showOriginal: 'Показать оригинал'
  },

  filters: {
    title: 'Фильтры',
    basic: 'Базовые настройки',
    brightness: 'Яркость',
    contrast: 'Контраст',
    saturation: 'Насыщенность',
    hue: 'Оттенок',
    exposure: 'Экспозиция',
    vibrance: 'Сочность',
    temperature: 'Температура',
    gamma: 'Гамма',
    clarity: 'Четкость',
    effects: 'Эффекты',
    grayscale: 'Черно-белый',
    sepia: 'Сепия',
    vintage: 'Винтаж',
    polaroid: 'Полароид',
    duotone: 'Двухцветный',
    noise: 'Шум',
    pixelate: 'Пикселизация',
    blur: 'Размытие',
    sharpen: 'Резкость',
    vignette: 'Виньетка',
    color: 'Цвет',
    colorOverlay: 'Наложение цвета',
    colorize: 'Окрашивание',
    gradientMap: 'Градиентная карта',
    replaceColor: 'Замена цвета',
    advanced: 'Дополнительно',
    levels: 'Уровни',
    curves: 'Кривые',
    shadows: 'Тени',
    highlights: 'Света',
    blacks: 'Черные',
    whites: 'Белые',
    channels: 'RGB каналы'
  },

  presets: {
    title: 'Пресеты',
    custom: 'Пользовательский',
    blackAndWhite: 'Черно-белый',
    highContrast: 'Высокий контраст',
    normal: 'Нормальный',
    cinematic: 'Кино',
    warm: 'Теплый',
    cool: 'Холодный',
    sunset: 'Закат',
    vintage: 'Винтаж',
    invert: 'Инверсия',
    cross: 'Кросс-процесс',
    matte: 'Мат',
    flat: 'Плоский',
    portrait: 'Портрет',
    landscape: 'Пейзаж',
    vivid: 'Яркий',
    moody: 'Мрачный',
    savePreset: 'Сохранить текущие настройки как пресет',
    deletePreset: 'Удалить пресет',
    presetName: 'Название пресета'
  },

  output: {
    title: 'Результат',
    fileName: 'Имя файла',
    format: 'Формат',
    quality: 'Качество',
    width: 'Ширина',
    height: 'Высота',
    download: 'Скачать изображение',
    saveOnline: 'Сохранить онлайн',
    share: 'Поделиться',
    applyToNew: 'Применить к новому изображению'
  },

  history: {
    title: 'История',
    revert: 'Вернуться к этому шагу',
    clear: 'Очистить историю'
  },

  actions: {
    apply: 'Применить фильтр',
    download: 'Скачать',
    save: 'Сохранить',
    reset: 'Сбросить',
    cancel: 'Отмена'
  },

  messages: {
    imageLoaded: 'Изображение успешно загружено',
    filterApplied: 'Фильтр успешно применен',
    filtersReset: 'Фильтры сброшены к значениям по умолчанию',
    downloadStarted: 'Загрузка началась',
    presetSaved: 'Пресет успешно сохранен',
    presetDeleted: 'Пресет удален',
    invalidFile: 'Некорректный файл. Пожалуйста, загрузите изображение.',
    fileTooLarge: 'Файл слишком большой. Максимальный размер: 10 МБ.'
  }
}; 