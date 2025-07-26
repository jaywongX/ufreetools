export default {
  name: 'Экстрактор цветов из изображений',
  description: 'Извлечение цветовой палитры и основных цветов из изображений',

  input: {
    title: 'Загрузка изображения',
    dropzone: 'Перетащите изображение сюда или нажмите для загрузки',
    formats: 'Поддерживаемые форматы: JPG, PNG, GIF, WebP, SVG',
    browse: 'Выбрать файл',
    selectImage: 'Выбрать изображение',
    orText: 'или',
    pasteUrl: 'Вставьте URL изображения:',
    loadUrl: 'Загрузить по URL',
    urlPlaceholder: 'https://example.com/image.jpg',
    unnamed: 'Безымянное изображение'
  },

  options: {
    title: 'Настройки извлечения',
    extractSettings: 'Параметры извлечения',
    colorCount: 'Количество цветов',
    paletteSize: 'Размер палитры',
    paletteMin: 'Минимум (3)',
    paletteMax: 'Максимум (20)',
    colorSimilarity: 'Схожесть цветов',
    similiarityToggle: 'Разрешить похожие цвета',
    quality: 'Качество извлечения',
    colorModel: 'Цветовая модель',
    colorSpace: 'Цветовое пространство',
    colorFormat: 'Формат цвета',
    sortBy: 'Сортировка цветов',
    sortByPopularity: 'По частоте встречаемости',
    sortByLuminance: 'По яркости',
    sortByHue: 'По цветовому тону',
    sortBySaturation: 'По насыщенности',
    ignoreWhite: 'Игнорировать белый',
    ignoreBlack: 'Игнорировать черный',
    threshold: 'Порог схожести'
  },

  colorModels: {
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB'
  },

  colorFormats: {
    hex: 'HEX (#RRGGBB)',
    rgb: 'RGB (0-255)',
    rgba: 'RGBA с прозрачностью',
    hsl: 'HSL',
    hsla: 'HSLA с прозрачностью',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },

  sortOptions: {
    prevalence: 'Частота',
    luminance: 'Яркость',
    hue: 'Цветовой тон',
    saturation: 'Насыщенность',
    original: 'Исходный порядок'
  },

  colorSpaces: {
    srgb: 'sRGB',
    p3: 'Display P3',
    rec2020: 'Rec. 2020',
    prophoto: 'ProPhoto RGB'
  },

  results: {
    title: 'Извлеченные цвета',
    colorsFound: 'Найдено {count} цветов',
    dominantColor: 'Доминирующий цвет',
    mainColor: 'Основной цвет',
    complementary: 'Дополнительный цвет',
    palette: 'Цветовая палитра',
    colorPalette: 'Цветовая палитра',
    palettePreview: 'Предпросмотр палитры',
    usage: 'Использование цвета (%)',
    percentage: 'Доля: {value}%',
    copyAll: 'Копировать все цвета',
    clickToCopy: 'Нажмите, чтобы скопировать: {color}',
    downloading: 'Скачивание палитры...'
  },

  display: {
    originalImage: 'Исходное изображение',
    colorPalette: 'Цветовая палитра',
    uploadFirst: 'Пожалуйста, сначала загрузите изображение',
    clickExtract: 'Нажмите "Извлечь цвета" для получения палитры',
  },

  actions: {
    extract: 'Извлечь цвета',
    extracting: 'Обработка...',
    download: 'Скачать палитру',
    copy: 'Копировать',
    copyValue: 'Копировать значение',
    reset: 'Сбросить',
    copyPalette: 'Копировать палитру',
    exportJson: 'Экспорт в JSON',
    exportCss: 'Экспорт в CSS-переменные',
    exportSass: 'Экспорт в SASS-переменные',
    exportSwatch: 'Экспорт в ASE-палитру'
  },

  palette: {
    title: 'Названия палитр',
    vibrant: 'Яркая',
    muted: 'Приглушенная',
    dark: 'Темная',
    light: 'Светлая',
    custom: 'Пользовательская'
  },

  messages: {
    imageLoaded: 'Изображение загружено',
    processingImage: 'Обработка изображения...',
    extractionComplete: 'Извлечение цветов завершено',
    extractionFailed: 'Ошибка извлечения: {error}',
    copied: 'Скопировано в буфер',
    copiedColor: 'Скопирован: {color}',
    copiedAll: 'Все цвета скопированы',
    copyFailed: 'Ошибка копирования',
    resetDone: 'Сброс выполнен',
    invalidImage: 'Некорректный файл изображения',
    noImageSelected: 'Изображение не выбрано'
  }
};