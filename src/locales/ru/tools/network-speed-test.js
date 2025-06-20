export default {
  name: 'Тест скорости интернета',
  description: 'Измерение скорости загрузки и выгрузки вашего интернет-соединения',
  
  test: {
    title: 'Тест скорости',
    start: 'Начать тест',
    stop: 'Остановить тест',
    runAgain: 'Повторить тест',
    selectServer: 'Выбрать сервер',
    automatic: 'Автоматически (рекомендуется)',
    connecting: 'Подключение...',
    preparing: 'Подготовка теста...',
    downloadTest: 'Тестирование скорости загрузки...',
    uploadTest: 'Тестирование скорости выгрузки...',
    ping: 'Измерение ping...',
    completed: 'Тест завершен',
    aborted: 'Тест прерван'
  },
  
  results: {
    title: 'Результаты теста',
    download: 'Загрузка',
    upload: 'Выгрузка',
    ping: 'Ping',
    jitter: 'Джиттер',
    latency: 'Задержка',
    mbps: 'Мбит/с',
    ms: 'мс',
    copied: 'Результаты скопированы',
    imageGenerated: 'Изображение сгенерировано',
    noResults: 'Нет результатов теста',
    share: 'Поделиться результатами',
    saveImage: 'Сохранить как изображение',
    history: 'История тестов',
    isp: 'Провайдер',
    server: 'Сервер',
    testTime: 'Время теста',
    packetLoss: 'Потеря пакетов'
  },
  
  servers: {
    title: 'Тестовые серверы',
    location: 'Расположение',
    distance: 'Расстояние',
    sponsor: 'Спонсор',
    availableServers: 'Доступные серверы',
    findBest: 'Найти лучший сервер',
    refreshList: 'Обновить список',
    loadMore: 'Загрузить больше серверов'
  },
  
  settings: {
    title: 'Настройки теста',
    preferredUnit: 'Предпочитаемые единицы',
    bits: 'Биты (Мбит/с)',
    bytes: 'Байты (МБ/с)',
    testDuration: 'Длительность теста',
    quick: 'Быстрый',
    standard: 'Стандартный',
    extended: 'Расширенный',
    testMode: 'Режим теста',
    multi: 'Многопоточный',
    single: 'Однопоточный',
    automaticServers: 'Автовыбор серверов',
    numberOfTests: 'Количество тестов для усреднения',
    enableMultithreading: 'Включить многопоточность',
    excludeFromHistory: 'Не сохранять в историю'
  },
  
  history: {
    title: 'История тестов',
    noHistory: 'Нет истории тестов',
    date: 'Дата',
    time: 'Время',
    downloadSpeed: 'Загрузка',
    uploadSpeed: 'Выгрузка',
    pingLatency: 'Ping',
    deleteHistory: 'Удалить историю',
    deleteSelected: 'Удалить выбранное',
    exportHistory: 'Экспортировать историю'
  },
  
  comparison: {
    title: 'Сравнение скорости',
    activity: 'Активность',
    loading: 'Загрузка веб-страниц',
    hdVideo: 'HD видео',
    k4Video: '4K видео',
    gaming: 'Онлайн-игры',
    acceptable: 'Приемлемо',
    good: 'Хорошо',
    excellent: 'Отлично',
    insufficient: 'Недостаточно'
  },
  
  messages: {
    error: 'Ошибка: {message}',
    noConnection: 'Интернет-соединение не обнаружено',
    lowSpeed: 'Низкая скорость соединения',
    testStarting: 'Начало теста скорости',
    preparingTest: 'Подготовка тестовой среды',
    findingServer: 'Поиск оптимального сервера',
    measurementError: 'Ошибка измерения, повторная попытка',
    testFinished: 'Тест скорости завершен',
    shareMessage: 'Моя скорость интернета: ⬇ {download} Мбит/с ⬆ {upload} Мбит/с 🔄 {ping} мс'
  }
}