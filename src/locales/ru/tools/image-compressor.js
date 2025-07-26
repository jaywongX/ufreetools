export default {
  name: 'Компрессор изображений',
  description: 'Сжатие и оптимизация изображений с сохранением качества',

  input: {
    dragDrop: 'Перетащите изображения сюда или нажмите для загрузки',
    supportedFormats: 'Поддерживаемые форматы: JPG, PNG, GIF, WEBP',
    selected: 'Выбрано файлов: {count}',
    changeFiles: 'Изменить файлы',
    width: 'Ширина',
    height: 'Высота',
    keepOriginal: 'Установите 0 для сохранения исходных размеров',
  },

  results: {
    originalImage: 'Исходное изображение',
    compressedImage: 'Сжатое изображение',
    filename: 'Имя файла:',
    dimensions: 'Размеры:',
    fileSize: 'Размер:',
    compressionRatio: 'Степень сжатия:',
    viewOriginal: 'Просмотреть оригинал',
  },

  about: {
    title: 'О сжатии изображений',
    description: 'Этот инструмент использует Canvas API браузера для сжатия изображений. Все обработки выполняются локально на вашем устройстве, изображения не загружаются на сервер.',
    principlesTitle: 'Принципы сжатия:',
    principles: {
      resize: 'Изменение размеров: меньшие размеры означают меньше данных',
      quality: 'Снижение качества: уменьшение параметра качества изображения',
      format: 'Конвертация формата: разные форматы имеют разные характеристики сжатия'
    },
    useCasesTitle: 'Применение:',
    useCases: {
      web: 'Оптимизация изображений для веба, ускорение загрузки',
      email: 'Уменьшение размера вложений в email',
      social: 'Сжатие перед загрузкой в соцсети',
      storage: 'Оптимизация хранилища'
    }
  },

  options: {
    quality: 'Качество',
    qualityValue: 'Качество ({value}%)',
    lowQuality: 'Низкое качество/малый размер',
    highQuality: 'Высокое качество/большой размер',
    format: 'Выходной формат',
    maxSize: 'Максимальный размер ({width} × {height} px)',
    keepExif: 'Сохранять EXIF данные',
    resizeImage: 'Изменение размеров',
    maxWidth: 'Максимальная ширина',
    maxHeight: 'Максимальная высота',
    compressionLevel: 'Уровень сжатия',
    maxFileSize: 'Целевой размер файла',
    optimizationLevel: 'Уровень оптимизации',
    convertTo: 'Конвертировать в'
  },

  presets: {
    web: 'Веб-оптимизация',
    highQuality: 'Высокое качество',
    balanced: 'Сбалансированно',
    smallSize: 'Малый размер',
    custom: 'Пользовательские'
  },

  formats: {
    original: 'Исходный формат',
    jpeg: 'JPEG',
    jpegDesc: 'JPEG подходит для фотографий, не поддерживает прозрачность',
    png: 'PNG',
    pngDesc: 'PNG поддерживает прозрачность, подходит для иконок и иллюстраций',
    webp: 'WebP',
    webpDesc: 'WebP обеспечивает высокую степень сжатия, идеален для веба',
    avif: 'AVIF',
    gif: 'GIF',
    bmp: 'BMP'
  },

  resizeOptions: {
    noResize: 'Не изменять размеры',
    maxDimension: 'Максимальный размер',
    exactDimensions: 'Точные размеры',
    percentage: 'Масштабирование в процентах'
  },

  actions: {
    upload: 'Загрузить изображения',
    compress: 'Сжать',
    processing: 'Обработка...',
    download: 'Скачать',
    downloadAll: 'Скачать все',
    batchDownload: 'Пакетное скачивание',
    clear: 'Очистить',
    addMore: 'Добавить ещё',
    removeAll: 'Удалить все',
    preview: 'Предпросмотр',
    delete: 'Удалить'
  },

  table: {
    filename: 'Имя файла',
    originalSize: 'Исходный размер',
    original: 'Исходный размер',
    compressedSize: 'Сжатый размер',
    compressed: 'Сжатый размер',
    savings: 'Экономия',
    ratio: 'Степень сжатия',
    quality: 'Качество',
    dimensions: 'Размеры',
    originalDimensions: 'Исходные размеры',
    newDimensions: 'Новые размеры',
    status: 'Статус'
  },

  messages: {
    dropped: 'Перетащено изображений: {count}',
    uploading: 'Загрузка изображений...',
    compressing: 'Сжатие изображений...',
    compressed: 'Изображения успешно сжаты',
    downloadPreparing: 'Подготовка к скачиванию...',
    downloadReady: 'Готово к скачиванию',
    cleared: 'Все изображения удалены',
    tooManyFiles: 'Слишком много файлов. Максимум: {max}',
    fileTooLarge: 'Файл слишком большой. Максимум: {max}MB',
    unsupportedFormat: 'Неподдерживаемый формат: {format}',
    imageError: 'Ошибка обработки: {error}',
    batchDownloadNotSupported: 'Для пакетного скачивания требуется библиотека JSZip. Скачивайте файлы по одному или добавьте поддержку zip.',
    batchDownloadError: 'Ошибка пакетного скачивания: {error}',
    invalidImage: 'Выберите корректные файлы изображений'
  }
};