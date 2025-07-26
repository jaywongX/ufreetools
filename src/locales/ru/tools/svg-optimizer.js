export default {
  name: 'Оптимизатор SVG',
  description: 'Оптимизация и очистка SVG файлов для повышения производительности и уменьшения размера',

  upload: {
    title: 'Загрузка SVG',
    dropzone: 'Перетащите SVG файлы сюда или нажмите для загрузки',
    or: 'или',
    pasteCode: 'Вставить SVG код',
    maxSize: 'Максимальный размер: 5MB',
    onlySvg: 'Только SVG файлы',
    selected: 'Выбрано',
    changeFile: 'Изменить файл'
  },

  input: {
    title: 'Исходный SVG',
    pasteHere: 'Вставьте SVG код здесь...',
    loadExample: 'Загрузить пример',
    clear: 'Очистить',
    validate: 'Проверить SVG'
  },

  output: {
    title: 'Результат оптимизации',
    copyToClipboard: 'Копировать в буфер',
    download: 'Скачать SVG',
    beforeSize: 'Исходный размер',
    afterSize: 'Оптимизированный размер',
    reduction: 'Сжатие',
    reductionBy: 'Уменьшено на',
    svgCode: 'SVG код'
  },

  options: {
    title: 'Настройки оптимизации',
    preset: 'Пресет',
    presets: {
      default: 'По умолчанию',
      light: 'Легкая',
      aggressive: 'Агрессивная',
      custom: 'Пользовательский'
    },
    removeComments: 'Удалить комментарии',
    removeCommentsDesc: 'Удалить комментарии и секции cdata',
    removeHiddenElements: 'Удалить скрытые элементы',
    removeEmptyContainers: 'Удалить пустые контейнеры',
    removeUnusedDefs: 'Удалить неиспользуемые определения',
    removeViewBox: 'Удалить viewBox',
    keepViewBox: 'Сохранить viewBox',
    keepViewBoxDesc: 'Сохранить атрибут viewBox для масштабируемости SVG',
    cleanupIDs: 'Очистить ID',
    cleanupIDsDesc: 'Удалить или сократить неиспользуемые ID',
    convertColors: 'Конвертировать цвета в HEX',
    removeMetadata: 'Удалить метаданные',
    removeMetadataDesc: 'Удалить элементы &lt;metadata&gt;',
    removeDoctype: 'Удалить doctype',
    removeXMLProcInst: 'Удалить XML инструкции',
    removeEditorsNS: 'Удалить пространства имен редакторов',
    collapseGroups: 'Свернуть группы',
    collapseGroupsDesc: 'Объединить группы без специальных атрибутов',
    convertPathData: 'Оптимизировать данные пути',
    convertPathDataDesc: 'Конвертировать данные пути в относительные координаты, уменьшить точность и т.д.',
    convertTransforms: 'Оптимизировать трансформации',
    convertShapeToPath: 'Конвертировать фигуры в пути',
    convertShapeToPathDesc: 'Преобразовать базовые фигуры в элементы &lt;path&gt;',
    removeUselessStrokeAndFill: 'Удалить ненужные обводки и заливки',
    moveElemsAttrsToGroup: 'Перенести атрибуты в группу',
    mergePaths: 'Объединить пути',
    minifyStyles: 'Минифицировать стили',
    inlineStyles: 'Инлайнить стили',
    inlineStylesDesc: 'Перенести стили из &lt;style&gt; в атрибуты элементов',
    cleanupNumericValues: 'Округлить числовые значения',
    precision: 'Точность чисел',
    decimalPlaces: 'знаков после запятой',
    lowPrecision: 'Низкая точность (меньший размер)',
    highPrecision: 'Высокая точность (лучшее качество)',
    removeDimensions: 'Удалить размеры',
    removeDimensionsDesc: 'Удалить атрибуты width/height, используя viewBox для контроля размера',
    sortAttrs: 'Сортировать атрибуты',
    sortAttrsDesc: 'Упорядочить атрибуты элементов по алфавиту'
  },

  view: {
    title: 'Превью',
    original: 'Оригинал',
    optimized: 'Оптимизировано',
    showBorder: 'Показать границу',
    backgroundColor: 'Цвет фона',
    grid: 'Показать сетку',
    zoom: 'Масштаб',
    toggleAnimation: 'Переключить анимацию'
  },

  actions: {
    optimize: 'Оптимизировать',
    optimizing: 'Оптимизация...',
    resetOptions: 'Сбросить настройки',
    download: 'Скачать SVG',
    copy: 'Копировать',
    copyCode: 'Копировать код',
    viewCode: 'Просмотр кода',
    viewPreview: 'Просмотр превью'
  },

  messages: {
    optimizationSuccess: 'SVG успешно оптимизирован',
    optimizationFailed: 'Ошибка оптимизации SVG: {error}',
    invalidSvg: 'Некорректный SVG файл или код',
    copied: 'Скопировано в буфер',
    copyFailed: 'Не удалось скопировать, скопируйте вручную',
    downloaded: 'Оптимизированный SVG скачан',
    emptyInput: 'Введите SVG код или загрузите файл',
    onlySvgAllowed: 'Пожалуйста, загружайте только SVG файлы!',
    failedToLoadLibrary: 'Не удалось загрузить библиотеку SVGO'
  }
};