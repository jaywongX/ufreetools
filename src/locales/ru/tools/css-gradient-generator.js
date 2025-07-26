export default {
  name: 'Генератор CSS-градиентов',
  description: 'Создавайте и настраивайте красивые CSS-градиенты с предпросмотром в реальном времени и копированием кода для ваших проектов',

  gradientTypes: {
    title: 'Типы градиентов',
    linear: 'Линейный',
    radial: 'Радиальный',
    conic: 'Конический'
  },

  controls: {
    title: 'Управление цветами',
    addColor: 'Добавить цвет',
    color: 'Цвет',
    position: 'Позиция (%)',
    delete: 'Удалить цвет',
    angle: 'Угол',
    degrees: 'градусы',
    shape: 'Форма',
    circle: 'Круг',
    ellipse: 'Эллипс',
    positionX: 'Позиция X (%)',
    positionY: 'Позиция Y (%)',
    size: 'Размер',
    closestSide: 'Ближайшая сторона',
    closestCorner: 'Ближайший угол',
    farthestSide: 'Дальняя сторона',
    farthestCorner: 'Дальний угол',
    fromAngle: 'Начальный угол'
  },

  output: {
    title: 'CSS-код',
    copyCode: 'Копировать код',
    preview: 'Область предпросмотра',
    copied: 'CSS-код скопирован в буфер обмена!',
    download: 'Скачать PNG'
  },

  presets: {
    title: 'Готовые градиенты',
    apply: 'Применить шаблон',
    sunnyMorning: 'Солнечное утро',
    winterNeva: 'Зимняя Нева',
    rareWind: 'Редкий ветер',
    deepBlue: 'Глубокий синий',
    perfect: 'Идеальный белый',
    cloudyKnoxville: 'Облачный Ноксвилл',
    greenBeach: 'Зеленый пляж',
    plumBath: 'Сливковая ванна',
    everlasting: 'Вечное небо'
  },

  accessibility: {
    colorPicker: 'Выбор цвета',
    deleteSwatch: 'Удалить цветовую точку',
    dragToReposition: 'Перетащите для изменения позиции'
  },

  actions: {
    reset: 'Сбросить',
    generateCSS: 'Сгенерировать CSS',
    clickToCopy: 'Нажмите для копирования',
    completeEdit: 'Завершить редактирование'
  },

  messages: {
    copied: 'CSS-код скопирован в буфер обмена!',
    noColors: 'Добавьте минимум два цвета для создания градиента',
    maxColors: 'Достигнуто максимальное количество цветов (10)',
    useKeyboard: 'Используйте клавишу Delete для удаления выбранной точки',
    invalidHex: 'Введите корректный HEX-код цвета',
    downloadError: 'Ошибка загрузки PNG, попробуйте позже',
    preview: 'Предпросмотр'
  },

  anglePresets: {
    top: 'Вверх',
    topRight: 'Вверх-вправо',
    right: 'Вправо',
    bottomRight: 'Вниз-вправо',
    bottom: 'Вниз',
    bottomLeft: 'Вниз-влево',
    left: 'Влево',
    topLeft: 'Вверх-влево'
  },

  radialShapes: {
    circle: 'Круг',
    ellipse: 'Эллипс'
  },

  radialSizes: {
    farthestCorner: 'Дальний угол',
    closestCorner: 'Ближний угол',
    farthestSide: 'Дальняя сторона',
    closestSide: 'Ближняя сторона',
  }
};