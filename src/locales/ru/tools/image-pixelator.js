export default {
  name: 'Пикселизатор изображений',
  description: 'Преобразуйте изображения в пиксельное искусство с настраиваемым разрешением и эффектами',

  upload: {
    title: 'Загрузить изображение',
    dropzone: 'Перетащите изображение сюда или нажмите для выбора',
    maxSize: 'Максимальный размер файла: 10 МБ',
    supportedFormats: 'Поддерживаемые форматы: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Настройки пикселизации',
    pixelSize: 'Размер пикселя',
    pixelShape: 'Форма пикселя',
    shapes: {
      square: 'Квадрат',
      rounded: 'Скругленные',
      circle: 'Круг',
      diamond: 'Ромб',
      custom: 'Пользовательская'
    },
    resolution: 'Разрешение',
    width: 'Ширина',
    height: 'Высота',
    preserveAspect: 'Сохранять пропорции',
    colorReduction: 'Уменьшение цветов',
    colors: 'Количество цветов',
    dithering: 'Дизеринг',
    ditheringTypes: {
      none: 'Нет',
      floydSteinberg: 'Флойд-Стейнберг',
      atkinson: 'Аткинсон',
      ordered: 'Упорядоченный',
      bayer: 'Байер'
    },
    palette: 'Цветовая палитра',
    palettes: {
      auto: 'Авто',
      grayscale: 'Оттенки серого',
      gameboy: 'Game Boy',
      nes: 'NES',
      cpc: 'CPC',
      c64: 'C64',
      custom: 'Пользовательская',
      normal: 'Обычная',
      retro: 'Ретро',
      sepia: 'Сепия',
      bright: 'Яркая',
      cool: 'Холодная',
      warm: 'Теплая',
      bw: 'Черно-белая',
      invert: 'Инвертированная'
    },
    customPalette: 'Пользовательские цвета палитры',
    small: 'Мелкие (детализированные)',
    large: 'Крупные (грубые)',
    low: 'Низкое (ретро)',
    high: 'Высокое (реалистичные цвета)'
  },

  effects: {
    title: 'Эффекты',
    brightness: 'Яркость',
    contrast: 'Контраст',
    saturation: 'Насыщенность',
    hue: 'Оттенок',
    outline: 'Контур',
    outlineColor: 'Цвет контура',
    noise: 'Шум',
    posterize: 'Постеризация',
    invert: 'Инверсия цветов',
    grayscale: 'Оттенки серого',
    sepia: 'Сепия',
    vignette: 'Виньетирование'
  },

  animation: {
    title: 'Настройки анимации',
    animated: 'Обрабатывать как анимацию',
    frameRate: 'Частота кадров',
    optimizeFrames: 'Оптимизировать кадры',
    looping: 'Зацикливание',
    loopCount: 'Количество циклов'
  },

  output: {
    title: 'Результат',
    preview: 'Предпросмотр',
    original: 'Оригинал',
    pixelated: 'Пикселизированное',
    comparison: 'Сравнение',
    zoomIn: 'Увеличить',
    zoomOut: 'Уменьшить',
    gridOverlay: 'Наложение сетки',
    downloadAs: 'Скачать как',
    png: 'PNG',
    jpg: 'JPG',
    gif: 'GIF',
    webp: 'WebP',
    spritesheet: 'Спрайт-лист',
    quality: 'Качество',
    scale: 'Масштаб',
    loading: 'Загрузка...',
    noImage: 'Пожалуйста, выберите изображение',
    processing: 'Обработка...'
  },

  presets: {
    title: 'Пресеты',
    save: 'Сохранить текущие настройки',
    load: 'Загрузить пресет',
    delete: 'Удалить пресет',
    presetName: 'Название пресета',
    defaults: {
      lowRes: 'Низкое разрешение',
      highContrast: 'Высокий контраст',
      retro: 'Ретро',
      minimal: 'Минимализм',
      sketch: 'Эскиз',
      blueprint: 'Чертеж'
    }
  },

  actions: {
    pixelate: 'Пикселизировать изображение',
    reset: 'Сбросить настройки',
    applyChanges: 'Применить изменения',
    undoChanges: 'Отменить изменения',
    downloadImage: 'Скачать изображение',
    selectImage: 'Выбрать изображение'
  },

  messages: {
    processing: 'Обработка изображения...',
    success: 'Изображение успешно пикселизировано',
    downloading: 'Подготовка к скачиванию...',
    presetSaved: 'Пресет сохранен',
    presetLoaded: 'Пресет загружен',
    presetDeleted: 'Пресет удален',
    error: 'Ошибка: {error}',
    fileSize: 'Размер файла',
    pixels: 'Пиксели',
    imageSize: 'Размер изображения',
    downloadSuccess: 'Изображение скачано',
    downloadFailed: 'Ошибка скачивания',
    resetSuccess: 'Сброс выполнен',
    fileName: 'Имя файла'
  }
};