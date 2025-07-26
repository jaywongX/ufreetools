export default {
  name: 'Генератор цветовых схем',
  description: 'Создание гармоничных цветовых палитр на основе теории цвета для быстрого подбора согласованных оттенков',

  baseColor: {
    title: 'Базовый цвет',
    picker: 'Палитра цветов',
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL',
    random: 'Случайный цвет',
    recent: 'Недавние цвета',
    hint: 'Нажмите на цвет или введите HEX-значение',
  },

  schemeTypes: {
    title: 'Теория цвета',
    monochromatic: 'Монохромная',
    analogous: 'Аналоговая',
    complementary: 'Комплементарная',
    splitComplementary: 'Раздельно-комплементарная',
    triadic: 'Триада',
    tetradic: 'Тетрада',
    square: 'Квадратная',
    compound: 'Составная',
    shades: 'Оттенки',
    custom: 'Пользовательская',
  },

  options: {
    colorCount: 'Количество цветов',
    saturationRange: 'Диапазон насыщенности',
    brightnessRange: 'Диапазон яркости',
    includeBaseColor: 'Включить базовый цвет',
    lockBaseColor: 'Зафиксировать базовый цвет',
    colorSpace: 'Цветовое пространство',
    sortBy: 'Сортировка',
    colorBlindSafe: 'Для дальтоников',
    contrastRatio: 'Минимальный контраст'
  },

  colorSpaces: {
    rgb: 'RGB',
    hsl: 'HSL',
    lab: 'LAB',
    hsv: 'HSV',
    cmyk: 'CMYK'
  },

  sortOptions: {
    hue: 'Оттенок',
    saturation: 'Насыщенность',
    brightness: 'Яркость',
    harmony: 'Гармония',
    none: 'Без сортировки'
  },

  palettes: {
    title: 'Сгенерированные палитры',
    save: 'Сохранить палитру',
    copy: 'Копировать палитру',
    export: 'Экспорт CSS-переменных',
    apply: 'Применить к превью'
  },

  exportFormats: {
    title: 'Форматы экспорта',
    css: 'CSS-переменные',
    scss: 'SCSS-переменные',
    less: 'LESS-переменные',
    json: 'JSON',
    svg: 'SVG-палитра',
    ase: 'Adobe ASE',
    tailwind: 'Конфиг Tailwind',
    pdf: 'PDF'
  },

  preview: {
    title: 'Предпросмотр',
    website: 'Веб-сайт',
    mobilApp: 'Мобильное приложение',
    dashboard: 'Дашборд',
    card: 'Карточка',
    poster: 'Постер',
    custom: 'Пользовательский',
    mainButton: 'Основная кнопка',
    secondButton: 'Вторичная кнопка',
    tag: 'Метка'
  },

  savedPalettes: {
    title: 'Сохраненные палитры',
    load: 'Загрузить',
    delete: 'Удалить',
    rename: 'Переименовать',
    noSavedPalettes: 'Нет сохраненных палитр',
    saved: 'Палитра сохранена',
    schemeNameEmpty: 'Название палитры не указано',
  },

  actions: {
    generate: 'Сгенерировать',
    regenerate: 'Перегенерировать',
    reset: 'Сбросить',
    lockColor: 'Заблокировать цвет',
    unlockColor: 'Разблокировать цвет',
    save: 'Сохранить палитру',
  },

  messages: {
    paletteSaved: 'Палитра успешно сохранена',
    paletteDeleted: 'Палитра удалена',
    copied: 'Скопировано в буфер обмена',
    exported: 'Экспорт завершен',
    adjustmentParam: 'Параметры настройки',
    schemeName: 'Название схемы',
    copyAllColors: 'Все цвета скопированы',
  }
};