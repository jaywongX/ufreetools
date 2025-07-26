export default {
  name: 'Добавление водяных знаков',
  description: 'Добавляйте текстовые или графические водяные знаки на изображения с настраиваемыми параметрами',

  upload: {
    title: 'Загрузить изображение',
    dropzone: 'Перетащите изображение сюда или нажмите для выбора',
    addMore: 'Добавить ещё изображения',
    clearAll: 'Очистить все',
    maxFiles: 'Максимум {count} изображений',
    maxSize: 'Максимальный размер: {size} МБ',
    supportedFormats: 'Поддерживаемые форматы: JPG, PNG, WEBP, GIF'
  },

  watermarkType: {
    title: 'Тип водяного знака',
    text: 'Текстовый',
    image: 'Графический',
    both: 'Текст и изображение'
  },

  textWatermark: {
    title: 'Текстовый водяной знак',
    text: 'Текст',
    font: 'Шрифт',
    size: 'Размер',
    color: 'Цвет',
    opacity: 'Прозрачность',
    rotation: 'Поворот',
    shadow: 'Тень',
    background: 'Фон текста',
    padding: 'Отступы',
    border: 'Рамка',
    spacing: 'Межбуквенный интервал'
  },

  imageWatermark: {
    title: 'Графический водяной знак',
    upload: 'Загрузить изображение',
    selectLogo: 'Выбрать логотип',
    presetLogos: 'Готовые логотипы',
    size: 'Размер',
    opacity: 'Прозрачность',
    rotation: 'Поворот',
    offset: 'Смещение'
  },

  positioning: {
    title: 'Позиционирование',
    position: 'Положение',
    custom: 'Своё расположение',
    xPosition: 'По горизонтали',
    yPosition: 'По вертикали',
    tiled: 'Повторяющийся узор',
    margin: 'Отступ от края',
    scale: 'Масштабировать с изображением'
  },

  positions: {
    topLeft: 'Сверху слева',
    topCenter: 'Сверху по центру',
    topRight: 'Сверху справа',
    middleLeft: 'Посередине слева',
    middleCenter: 'По центру',
    middleRight: 'Посередине справа',
    bottomLeft: 'Снизу слева',
    bottomCenter: 'Снизу по центру',
    bottomRight: 'Снизу справа',
    custom: 'Своё расположение'
  },

  output: {
    title: 'Результат',
    quality: 'Качество',
    format: 'Формат',
    original: 'Как оригинал',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    preview: 'Предпросмотр',
    downloadIndividual: 'Скачать',
    downloadAll: 'Скачать все',
    downloadAsZip: 'Скачать ZIP-архивом'
  },

  presets: {
    title: 'Шаблоны',
    save: 'Сохранить настройки',
    load: 'Загрузить шаблон',
    delete: 'Удалить шаблон',
    presetName: 'Название шаблона'
  },

  actions: {
    apply: 'Добавить водяной знак',
    applyToAll: 'Применить ко всем',
    reset: 'Сбросить',
    preview: 'Предпросмотр',
    undo: 'Отменить',
    cancel: 'Отменить обработку'
  },

  messages: {
    processing: 'Обработка...',
    success: 'Водяной знак успешно добавлен',
    error: 'Ошибка: {error}',
    noImages: 'Сначала загрузите изображения',
    noWatermark: 'Добавьте текстовый или графический водяной знак',
    presetSaved: 'Шаблон сохранён',
    presetLoaded: 'Шаблон загружен',
    presetDeleted: 'Шаблон удалён',
    watermarkApplied: 'Водяной знак добавлен',
    watermarkImageLoadError: 'Не удалось загрузить водяной знак',
    imageLoadError: 'Ошибка загрузки изображения',
    resetSuccess: 'Настройки сброшены',
    downloadStarted: 'Начато скачивание',
    downloadError: 'Ошибка скачивания',
    imageLoaded: 'Изображение загружено',
    canvasInitError: 'Ошибка инициализации',
    tiledWatermarkError: 'Ошибка создания узора'
  }
};