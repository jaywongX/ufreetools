export default {
  name: 'Пакетный редактор изображений',
  description: 'Редактирование, конвертация и оптимизация нескольких изображений одновременно',

  input: {
    title: 'Исходные изображения',
    dropzone: 'Перетащите изображения сюда или нажмите для выбора',
    addMore: 'Добавить еще',
    selectImages: 'Выбрать изображения',
    clearAll: 'Очистить все',
    maxFiles: 'Максимум {count} изображений',
    maxSize: 'Максимальный размер: {size}MB',
    supportedFormats: 'Поддерживаемые форматы: {formats}'
  },

  options: {
    title: 'Настройки редактирования',
    settingsTitle: 'Параметры',
    resizeMode: 'Режим изменения размера',
    resizeMethod: 'Метод масштабирования',
    pixelMode: 'Пиксели',
    percentageMode: 'Проценты',
    maxDimensionMode: 'Максимальные размеры',
    outputFormat: 'Формат сохранения',
    quality: 'Качество',
    width: 'Ширина',
    height: 'Высота',
    maintainAspectRatio: 'Сохранять пропорции',
    maxWidth: 'Макс. ширина',
    maxHeight: 'Макс. высота',
    percentage: 'Процент',
    backgroundColor: 'Цвет фона',
    naming: 'Именование файлов',
    filenamePrefix: 'Префикс',
    filenameSuffix: 'Суффикс',
    applyToAllImages: 'Применить ко всем',
    applyToAll: 'Применить ко всем'
  },

  resizeModes: {
    exact: 'Точные размеры',
    maxDimensions: 'Ограничение размеров',
    percentage: 'Процентное масштабирование',
    fit: 'Вписать',
    cover: 'Заполнить',
    crop: 'Обрезать'
  },

  formats: {
    original: 'Как оригинал',
    jpg: 'JPG/JPEG',
    png: 'PNG',
    webp: 'WebP',
    gif: 'GIF',
    bmp: 'BMP',
    tiff: 'TIFF',
    svg: 'SVG',
    ico: 'ICO'
  },

  namingOptions: {
    original: 'Оригинальное имя',
    dimensions: 'Имя + размеры',
    format: 'Имя + формат',
    custom: 'Пользовательский',
    random: 'Случайное имя'
  },

  output: {
    title: 'Результаты обработки',
    downloadAll: 'Скачать все',
    downloadAsZip: 'Скачать ZIP',
    processingStatus: 'Обработано: {processed}/{total}',
    originalSize: 'Исходный размер',
    newSize: 'Новый размер',
    reduction: 'Сжатие',
    individualDownload: 'Скачать'
  },

  batch: {
    title: 'Пакетная обработка',
    process: 'Обработать все',
    cancel: 'Отменить',
    selectPreset: 'Выбрать пресет',
    savePreset: 'Сохранить настройки',
    progress: 'Прогресс'
  },

  watermark: {
    title: 'Водяной знак',
    enable: 'Добавить водяной знак',
    text: 'Текст',
    image: 'Изображение',
    position: 'Позиция',
    opacity: 'Прозрачность',
    rotation: 'Поворот',
    size: 'Размер',
    padding: 'Отступы'
  },

  positions: {
    topLeft: 'Сверху слева',
    topCenter: 'Сверху по центру',
    topRight: 'Сверху справа',
    middleLeft: 'Слева',
    middleCenter: 'По центру',
    middleRight: 'Справа',
    bottomLeft: 'Снизу слева',
    bottomCenter: 'Снизу по центру',
    bottomRight: 'Снизу справа'
  },

  actions: {
    resize: 'Изменить размер',
    preview: 'Предпросмотр',
    processing: 'Обработка...',
    reset: 'Сбросить',
    applySettings: 'Применить',
    resetSettings: 'Сбросить настройки',
    cancel: 'Отмена'
  },

  messages: {
    resizeSuccess: 'Изображения успешно обработаны',
    resizeFailed: 'Ошибка: {error}',
    invalidDimensions: 'Некорректные размеры',
    invalidWidthHeight: 'Укажите корректные размеры',
    noImages: 'Добавьте изображения',
    noImagesToDownload: 'Нет изображений для скачивания',
    processing: 'Обработка...',
    processingComplete: 'Готово',
    processingError: 'Ошибка обработки',
    waitingForProcess: 'Ожидание',
    downloadStarted: 'Скачивание начато',
    allDownloaded: 'Все изображения скачаны',
    presetSaved: 'Пресет сохранен',
    presetLoaded: 'Пресет загружен',
    zipCreated: 'ZIP-архив создан ({count} файлов)',
    zipError: 'Ошибка создания архива'
  },

  preview: {
    title: 'Предпросмотр ({count})',
    selectImage: 'Выберите изображение',
    batchSupport: 'Поддержка пакетного редактирования',
    download: 'Скачать',
    delete: 'Удалить'
  },

  qualityOptions: {
    fast: 'Быстрая обработка',
    medium: 'Среднее качество',
    high: 'Высокое качество (рекомендуется)',
    best: 'Лучшее качество (медленнее)'
  }
};