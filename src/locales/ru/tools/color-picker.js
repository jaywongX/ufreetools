export default {
  name: 'Палитра цветов',
  description: 'Используйте расширенные инструменты для выбора, преобразования и генерации цветовых схем',

  options: {
    colorSpace: 'Цветовое пространство',
    paletteType: 'Тип палитры',
    includeAlpha: 'Включить прозрачность',
    colorNaming: 'Именование цвета'
  },

  colorSpaces: {
    rgb: 'RGB',
    hex: 'HEX',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB',
    named: 'Именованный цвет'
  },

  palettes: {
    monochromatic: 'Монохроматическая',
    complementary: 'Комплементарная',
    analogous: 'Аналогичная',
    triadic: 'Триада',
    tetradic: 'Тетрада',
    split: 'Разделённая комплементарная'
  },

  actions: {
    pickColor: 'Выбрать цвет',
    randomColor: 'Случайный цвет',
    generatePalette: 'Создать палитру',
    convert: 'Преобразовать',
    copyColor: 'Копировать текущий цвет',
    copyAll: 'Копировать всё',
    save: 'Сохранить цвет',
    reset: 'Сбросить',
    clear: 'Очистить'
  },

  formats: {
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL'
  },

  colorSchemes: {
    title: 'Цветовые схемы',
    complementary: 'Комплементарная',
    triadic: 'Триада',
    analogous: 'Аналогичная',
    monochromatic: 'Монохроматическая',
    split: 'Разделённая комплементарная',
    double: 'Двойная комплементарная',
    square: 'Квадратная',
    compound: 'Составная'
  },

  colorAdjust: {
    title: 'Коррекция цвета',
    hue: 'Оттенок',
    saturation: 'Насыщенность',
    lightness: 'Яркость',
    alpha: 'Прозрачность'
  },

  colorInfo: {
    title: 'Информация о цвете',
    name: 'Название цвета',
    format: 'Формат',
    contrast: 'Контраст',
    accessibility: {
      title: 'Доступность',
      pass: 'Соответствует стандарту WCAG',
      fail: 'Не соответствует стандарту WCAG',
      normal: 'Обычный текст',
      large: 'Крупный текст'
    }
  },

  messages: {
    copied: 'Цвет скопирован в буфер обмена',
    copyFailed: 'Не удалось скопировать цвет',
    invalidColor: 'Недопустимый формат цвета',
    contrastWarning: 'Низкий контраст',
    saved: 'Цвет сохранён',
    contrast: 'Контраст: {ratio}',
    accessibility: {
      AAA: 'Отличный контраст (AAA)',
      AA: 'Хороший контраст (AA)',
      fail: 'Недостаточный контраст — не соответствует стандарту доступности'
    },
    preview: 'Предпросмотр',
    colorValue: 'Значение цвета',
  },

  history: {
    title: 'История цветов',
    empty: 'История пуста',
    clear: 'Очистить историю'
  },

  colorPalette: {
    title: 'Палитра',
    addToPalette: 'Добавить в палитру',
    removeFromPalette: 'Удалить из палитры',
    exportPalette: 'Экспорт палитры',
    importPalette: 'Импорт палитры',
    clearPalette: 'Очистить палитру'
  }
};