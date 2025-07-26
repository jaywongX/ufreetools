export default {
  name: 'Генератор мозаики из изображений',
  description: 'Создавайте мозаичное искусство, комбинируя маленькие изображения в одно большое',

  upload: {
    title: 'Загрузить основное изображение',
    dropzone: 'Перетащите основное изображение сюда или нажмите для выбора',
    maxSize: 'Максимальный размер файла: 15 МБ',
    supportedFormats: 'Поддерживаемые форматы: JPG, PNG, WEBP'
  },

  tiles: {
    title: 'Изображения плиток',
    uploadTiles: 'Загрузить плитки',
    dropzoneTiles: 'Перетащите изображения плиток сюда или нажмите для выбора',
    maxTiles: 'Максимум {count} изображений',
    useFolder: 'Загрузить папку с изображениями',
    orUseSample: 'Или использовать примеры',
    sampleSets: 'Примеры наборов плиток',
    nature: 'Природа',
    people: 'Люди',
    art: 'Искусство',
    abstract: 'Абстракция',
    animals: 'Животные',
    clearAll: 'Очистить все плитки'
  },

  settings: {
    title: 'Настройки мозаики',
    tileSize: 'Размер плитки',
    small: 'Мелкий (детализированный)',
    medium: 'Средний',
    large: 'Крупный (грубый)',
    square: 'Квадрат',
    circle: 'Круг',
    applicationMode: 'Способ наложения мозаики',
    all: 'Вся картинка',
    selectRegion: 'Выбрать область',
    selectingRegion: 'Выбор области...',
    autoDetectFaces: 'Автоматически обнаруживать лица',
    detectFaces: 'Обнаружить лица',
    detectFacesDescription: 'Найти лица на изображении и автоматически применить мозаику',
    edgeSmoothing: 'Сглаживание краев',
    edgeSmoothingDescription: 'Сгладить края плиток для более естественного перехода',
    custom: 'Пользовательский',
    width: 'Ширина',
    height: 'Высота',
    tilesWide: 'Количество плиток по ширине',
    tilesHigh: 'Количество плиток по высоте',
    colorMatch: 'Сопоставление цветов',
    intensity: 'Интенсивность',
    low: 'Низкая',
    high: 'Высокая',
    reuseTiles: 'Повторное использование плиток',
    allowDuplicates: 'Разрешить дубликаты',
    maxUses: 'Максимум использований на плитку',
    colorAdjustment: 'Коррекция цвета',
    adjustTiles: 'Настроить цвета плиток для соответствия',
    blendOriginal: 'Смешать с оригиналом',
    blendAmount: 'Степень смешивания',
    random: 'Случайные вариации',
    shuffle: 'Перемешать плитки'
  },

  advanced: {
    title: 'Дополнительные настройки',
    algorithm: 'Алгоритм сопоставления',
    algorithms: {
      average: 'Средний цвет',
      dominant: 'Доминирующий цвет',
      histogram: 'Цветовая гистограмма',
      pattern: 'Сопоставление паттернов'
    },
    tileShape: 'Форма плитки',
    shapes: {
      square: 'Квадрат',
      circle: 'Круг',
      hexagon: 'Шестиугольник',
      triangle: 'Треугольник',
      random: 'Случайная'
    },
    tileGap: 'Промежуток между плитками',
    borderColor: 'Цвет границы',
    backgroundColor: 'Цвет фона'
  },

  output: {
    fileName: 'Имя файла',
    title: 'Результат',
    preview: 'Предпросмотр',
    original: 'Оригинал',
    mosaic: 'Мозаика',
    sideBySide: 'Сравнение',
    zoomIn: 'Увеличить',
    zoomOut: 'Уменьшить',
    download: 'Скачать мозаику',
    asJpg: 'Скачать как JPG',
    asPng: 'Скачать как PNG',
    highRes: 'Высокое разрешение',
    resolution: 'Разрешение вывода',
    format: 'Формат',
    quality: 'Качество',
    size: 'Размер',
    pixel: 'Пиксель',
    pleaseSelectImage: 'Пожалуйста, выберите изображение',
    pleaseSelectImageAndAdjustSettings: 'Выберите изображение и настройте параметры'
  },

  actions: {
    generate: 'Создать мозаику',
    regenerate: 'Пересоздать',
    cancel: 'Отменить создание',
    reset: 'Сбросить',
    detectFaces: 'Обнаружить лица',
    saveSettings: 'Сохранить настройки',
    loadSettings: 'Загрузить настройки'
  },

  messages: {
    generating: 'Создание мозаики... Это может занять некоторое время.',
    generationComplete: 'Мозаика успешно создана!',
    notEnoughTiles: 'Недостаточно изображений плиток. Пожалуйста, загрузите больше изображений.',
    tileProcessing: 'Обработка изображений плиток: {progress}%',
    downloadStarted: 'Загрузка началась',
    settingsSaved: 'Настройки сохранены',
    selecting: 'Выбор области...',
    preview: 'Здесь будет отображаться результат применения мозаики',
    faceDetected: 'Обнаружено лицо',
    facesDetected: 'Обнаружено лиц: {count}',
    noFacesDetected: 'Лица не обнаружены',
    loadingModels: 'Загрузка моделей обнаружения лиц...',
    faceDetectionFailed: 'Не удалось обнаружить лица',
    reset: 'Сброшено',
    error: 'Ошибка: {message}'
  }
};