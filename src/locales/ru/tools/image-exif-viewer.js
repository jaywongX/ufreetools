export default {
  name: 'Просмотрщик EXIF данных изображений',
  description: 'Просмотр и анализ метаданных EXIF в фотографиях',

  upload: {
    title: 'Загрузить изображение',
    dropzone: 'Перетащите изображение сюда или нажмите для выбора',
    maxSize: 'Максимальный размер файла: 15 МБ',
    supportedFormats: 'Поддерживаемые форматы: JPG, TIFF, HEIC, PNG',
    anyImageFile: 'Любой файл изображения с данными EXIF'
  },

  display: {
    title: 'Информация об изображении',
    noExif: 'В этом изображении не найдено данных EXIF',
    basicInfo: 'Основная информация',
    camera: 'Информация о камере',
    exposure: 'Настройки экспозиции',
    location: 'Геоданные',
    dates: 'Дата и время',
    advanced: 'Расширенные данные EXIF',
    thumbnail: 'Миниатюра EXIF'
  },

  exif: {
    fileName: 'Имя файла',
    fileSize: 'Размер файла',
    fileType: 'Тип файла',
    dimensions: 'Размеры',
    make: 'Производитель камеры',
    model: 'Модель камеры',
    lens: 'Объектив',
    focalLength: 'Фокусное расстояние',
    focalLength35: 'Фокусное расстояние (эквивалент 35мм)',
    aperture: 'Диафрагма',
    fNumber: 'Значение диафрагма',
    exposureTime: 'Выдержка',
    shutterSpeed: 'Скорость затвора',
    iso: 'ISO',
    exposureMode: 'Режим экспозиции',
    exposureProgram: 'Программа экспозиции',
    meteringMode: 'Режим замера',
    flash: 'Вспышка',
    flashMode: 'Режим вспышки',
    whiteBalance: 'Баланс белого',
    exposureBias: 'Коррекция экспозиции',
    latitude: 'Широта',
    longitude: 'Долгота',
    altitude: 'Высота',
    locationName: 'Название места',
    dateOriginal: 'Дата съемки',
    dateDigitized: 'Дата оцифровки',
    dateModified: 'Дата изменения',
    software: 'Программное обеспечение',
    artist: 'Автор',
    copyright: 'Авторские права',
    resolution: 'Разрешение',
    colorSpace: 'Цветовое пространство',
    orientation: 'Ориентация',
    compression: 'Сжатие',
    bitsPerSample: 'Бит на сэмпл',
    maxAperture: 'Максимальная диафрагма',
    contrast: 'Контраст',
    saturation: 'Насыщенность',
    sharpness: 'Резкость',
    brightness: 'Яркость',
    sceneCaptureType: 'Тип сцены',
    gainControl: 'Усиление',
    serialNumber: 'Серийный номер',
    width: 'Ширина',
    height: 'Высота',
  },

  map: {
    title: 'Местоположение фото',
    show: 'Показать на карте',
    noLocation: 'Геоданные отсутствуют',
    directions: 'Проложить маршрут',
    copy: 'Копировать координаты',
    warning: 'Внимание: это изображение содержит геоданные. Будьте осторожны при публикации.'
  },

  actions: {
    showAll: 'Показать все метаданные',
    hideAll: 'Скрыть все метаданные',
    copyAll: 'Копировать все метаданные',
    save: 'Сохранить метаданные как JSON',
    removeMeta: 'Удалить метаданные',
    download: 'Скачать изображение без метаданных',
    viewFullSize: 'Просмотр в полном размере',
    refresh: 'Обновить данные'
  },

  settings: {
    title: 'Настройки отображения',
    showGroups: 'Группировать метаданные',
    showRaw: 'Показывать исходные значения',
    showTechnical: 'Показывать технические данные',
    showFiltered: 'Скрывать пустые поля',
    darkMode: 'Темный режим',
    mapProvider: 'Провайдер карт'
  },

  tips: {
    privacy: 'Совет по конфиденциальности: фотографии могут содержать личные данные, такие как местоположение и информация об устройстве.',
    noExif: 'Не видите данные EXIF? Некоторые социальные сети и редакторы изображений удаляют метаданные.',
    rawView: 'Переключитесь в "Исходный вид" для просмотра всех доступных метаданных.'
  },

  messages: {
    copied: 'Метаданные скопированы в буфер обмена',
    saved: 'Метаданные сохранены в JSON файл',
    noExif: 'В этом изображении не найдено данных EXIF',
    metadataRemoved: 'Метаданные успешно удалены',
    imageLoaded: 'Изображение успешно загружено',
    notUse: 'Не используется',
    use: 'Используется',
    auto: 'Автоматически',
    manual: 'Вручную',
    reset: 'Сброшено',
    exifExtracted: 'Данные EXIF извлечены',
  },

  error: {
    copyFailed: 'Ошибка копирования',
    exportFailed: 'Ошибка экспорта',
    exifExtractionFailed: 'Ошибка извлечения EXIF',
    imageLoadFailed: 'Ошибка загрузки изображения',
  },

  orientation: {
    normal: 'Нормальная',
    horizontalFlip: 'Горизонтальное отражение',
    rotate180: 'Поворот на 180°',
    verticalFlip: 'Вертикальное отражение',
    rotate90VerticalFlip: 'Поворот на 90° по часовой + вертикальное отражение',
    rotate90: 'Поворот на 90° по часовой',
    rotate90HorizontalFlip: 'Поворот на 90° по часовой + горизонтальное отражение',
    rotate270: 'Поворот на 270° по часовой'
  }
}; 