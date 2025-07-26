export default {
  name: 'Обрезка изображений',
  description: 'Точная обрезка, изменение размера и поворот изображений',

  upload: {
    title: 'Загрузить изображение',
    dropzone: 'Перетащите изображение сюда или нажмите для выбора',
    maxSize: 'Максимальный размер файла: 10 МБ',
    supportedFormats: 'Поддерживаемые форматы: JPG, PNG, WEBP, GIF',
    select: 'Выберите изображение для начала обрезки и редактирования'
  },

  editor: {
    title: 'Редактор изображений',
    zoom: 'Масштаб',
    rotate: 'Поворот',
    flipHorizontal: 'Отразить по горизонтали',
    flipVertical: 'Отразить по вертикали',
    reset: 'Сбросить изображение',
    undo: 'Отменить',
    redo: 'Повторить',
    dragMode: 'Режим перемещения',
    scaleMode: 'Режим масштабирования'
  },

  crop: {
    title: 'Настройки обрезки',
    aspectRatio: 'Соотношение сторон',
    freeform: 'Произвольная форма',
    square: 'Квадрат (1:1)',
    portrait: 'Портрет (3:4)',
    landscape: 'Пейзаж (4:3)',
    widescreen: 'Широкоэкранный (16:9)',
    panorama: 'Панорама (2:1)',
    custom: 'Пользовательский',
    width: 'Ширина',
    height: 'Высота',
    unit: 'Единица измерения',
    pixels: 'Пиксели',
    percent: 'Проценты',
    lockAspectRatio: 'Фиксировать соотношение сторон'
  },

  presets: {
    title: 'Предустановки размеров',
    original: 'Оригинальный размер',
    social: 'Социальные сети',
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    print: 'Печатные размеры',
    fourBySix: '4×6 дюймов',
    fiveBySeven: '5×7 дюймов',
    eightByTen: '8×10 дюймов'
  },

  output: {
    title: 'Результат',
    preview: 'Предпросмотр',
    dimensions: 'Размеры результата',
    quality: 'Качество',
    format: 'Формат',
    fileName: 'Имя файла',
    download: 'Скачать',
    saveAs: 'Сохранить как',
    copy: 'Копировать в буфер обмена'
  },

  actions: {
    crop: 'Обрезать изображение',
    apply: 'Применить',
    cancel: 'Отмена',
    save: 'Сохранить изображение',
    download: 'Скачать',
    newImage: 'Новое изображение'
  },

  messages: {
    cropSuccess: 'Изображение успешно обрезано',
    downloadReady: 'Ваше обрезанное изображение готово к скачиванию',
    processing: 'Обработка изображения...',
    copied: 'Изображение скопировано в буфер обмена',
    invalidFile: 'Неверный файл. Пожалуйста, загрузите корректное изображение.',
    fileTooLarge: 'Файл слишком большой. Максимальный размер: 10 МБ.'
  }
};