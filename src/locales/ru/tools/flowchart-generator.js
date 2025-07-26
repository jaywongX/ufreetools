export default {
  name: 'Генератор диаграмм',
  description: 'Создание диаграмм и схем с помощью простого текстового синтаксиса',
  title: 'Генератор диаграмм и схем',
  renderBtn: 'Сгенерировать',
  resetBtn: 'Сбросить',
  downloadSvgBtn: 'Скачать SVG',
  copySvgBtn: 'Копировать SVG',

  input: {
    title: 'Определение диаграммы',
    placeholder: 'Введите код на Mermaid...',
    loadExample: 'Загрузить пример',
    clear: 'Очистить',
    uploadFile: 'Загрузить файл'
  },

  output: {
    title: 'Результат',
    downloadImage: 'Скачать изображение',
    downloadSVG: 'Скачать SVG',
    copyImage: 'Копировать изображение',
    copySVG: 'Копировать SVG',
    zoomIn: 'Увеличить',
    zoomOut: 'Уменьшить',
    fitView: 'Подогнать',
    resetView: 'Сбросить вид',
    preview: 'Предпросмотр',
    code: 'Код Mermaid'
  },

  options: {
    title: 'Настройки',
    theme: 'Тема',
    orientation: 'Ориентация',
    nodeShape: 'Форма узлов',
    arrowStyle: 'Стиль стрелок',
    lineStyle: 'Стиль линий',
    textPosition: 'Позиция текста',
    fontSize: 'Размер шрифта',
    fontFamily: 'Шрифт',
    showGrid: 'Показывать сетку',
    autoRender: 'Авто-генерация'
  },

  themes: {
    default: 'По умолчанию',
    simple: 'Минимализм',
    forest: 'Лес',
    neutral: 'Нейтральная',
    dark: 'Темная',
    business: 'Бизнес',
    base: 'Базовая',
    custom: 'Пользовательская'
  },

  orientations: {
    topToBottom: 'Сверху вниз',
    bottomToTop: 'Снизу вверх',
    leftToRight: 'Слева направо',
    rightToLeft: 'Справа налево'
  },

  nodeShapes: {
    rectangle: 'Прямоугольник',
    roundedRectangle: 'Скругленный прямоугольник',
    circle: 'Круг',
    diamond: 'Ромб',
    hexagon: 'Шестиугольник',
    parallelogram: 'Параллелограмм'
  },

  arrowStyles: {
    arrow: 'Стрелка',
    open: 'Открытая',
    filled: 'Закрашенная',
    diamond: 'Ромб',
    circle: 'Круг'
  },

  lineStyles: {
    solid: 'Сплошная',
    dashed: 'Пунктирная',
    dotted: 'Точечная',
    curved: 'Кривая',
    straight: 'Прямая',
    orthogonal: 'Ортогональная'
  },

  syntax: {
    title: 'Справка по синтаксису',
    node: 'Узел',
    edge: 'Связь',
    subgraph: 'Подграф',
    comment: 'Комментарий',
    styling: 'Стилизация',
    showMore: 'Показать больше'
  },

  actions: {
    render: 'Сгенерировать',
    save: 'Сохранить',
    export: 'Экспорт',
    share: 'Поделиться'
  },

  messages: {
    renderSuccess: 'Диаграмма успешно сгенерирована',
    renderError: 'Ошибка генерации: {error}',
    syntaxError: 'Синтаксическая ошибка: {error}',
    saved: 'Сохранено',
    copied: 'SVG скопирован',
    copyFailed: 'Ошибка копирования',
    exported: 'Экспортировано',
    emptyCode: 'Введите код',
    rendering: 'Генерация...',
    errorTitle: 'Ошибка'
  },

  examples: {
    flowchart: 'Блок-схема',
    classDiagram: 'Диаграмма классов',
    sequenceDiagram: 'Диаграмма последовательностей',
    entityRelationship: 'ER-диаграмма',
    gantt: 'Диаграмма Ганта',
    stateDiagram: 'Диаграмма состояний',
    pieChart: 'Круговая диаграмма',
    userJourney: 'Карта пользователя'
  },

  exampleCodes: {
    flowchart: `graph TD
    A[Начало] --> B{Правильно?}
    B -->|Да| C[Правильно]
    B -->|Нет| D[Ошибка]
    C --> E[Конец]
    D --> E
`,
    sequenceDiagram: `sequenceDiagram
    participant Клиент
    participant Сервер
    Клиент->>Сервер: Запрос
    Сервер-->>Клиент: Ответ
    Клиент->>Сервер: Данные
    Сервер-->>Клиент: Подтверждение
`,
    gantt: `gantt
    title Проект
    dateFormat  YYYY-MM-DD
    section Планирование
    Сбор требований :a1, 2023-01-01, 30d
    Дизайн :after a1, 20d
    section Разработка
    Бэкенд :2023-02-20, 45d
    Фронтенд :2023-02-25, 40d
    section Тестирование
    Тесты :2023-04-05, 20d
    Пользовательские тесты :2023-04-20, 15d
    section Запуск
    Деплой :2023-05-05, 10d
`,
    stateDiagram: `stateDiagram-v2
    [*] --> Редактирование
    Редактирование --> Проверка: Отправить
    Проверка --> Отклонено: Отклонить
    Проверка --> Опубликовано: Принять
    Отклонено --> Редактирование: Исправить
    Опубликовано --> [*]
`,
    pieChart: `pie
    title Трафик
    "Поиск" : 42.7
    "Прямые" : 28.9
    "Соцсети" : 18.5
    "Другие" : 9.9
`,
    classDiagram: `classDiagram
    class Животное {
        +String имя
        +int возраст
        +звук() void
    }
    class Собака {
        +String порода
        +принести() void
    }
    class Кошка {
        +String цвет
        +лазать() void
    }
    Животное <|-- Собака
    Животное <|-- Кошка
`
  }
};