export default {
  name: 'MQTT Тестер',
  description: 'Тестирование и отладка MQTT подключений, публикация сообщений и подписка на топики',

  connection: {
    title: 'Подключение',
    broker: 'Брокер',
    url: 'URL брокера',
    urlPlaceholder: 'Например: mqtt://broker.example.com:1883',
    clientId: 'ID клиента',
    clientIdPlaceholder: 'Введите ID клиента или оставьте пустым для генерации',
    username: 'Имя пользователя',
    password: 'Пароль',
    keepAlive: 'Поддержка соединения',
    cleanSession: 'Чистая сессия',
    autoReconnect: 'Автоподключение',
    ssl: 'Использовать SSL/TLS',
    sslOptions: 'Настройки SSL/TLS',
    protocol: 'Версия протокола',
    portInfo: 'Стандартные порты: MQTT(1883), WebSocket(8083)',
    connect: 'Подключиться',
    disconnect: 'Отключиться',
    status: 'Статус',
    connected: 'Подключено',
    disconnected: 'Отключено',
    connecting: 'Подключение...'
  },

  publish: {
    title: 'Публикация',
    topic: 'Топик',
    topicPlaceholder: 'Введите топик для публикации',
    message: 'Сообщение',
    messagePlaceholder: 'Введите содержимое сообщения',
    qos: 'Качество обслуживания (QoS)',
    retain: 'Сохранить',
    format: 'Формат содержимого',
    text: 'Текст',
    json: 'JSON',
    hex: 'HEX',
    binary: 'Бинарный',
    send: 'Опубликовать',
    clear: 'Очистить',
    history: 'История',
    addToFavorites: 'Добавить в избранное',
    validateJson: 'Проверить JSON'
  },

  subscribe: {
    title: 'Подписка',
    topic: 'Топик',
    topicPlaceholder: 'Введите топик для подписки (поддерживаются # и +)',
    qos: 'Качество обслуживания (QoS)',
    subscribe: 'Подписаться',
    unsubscribe: 'Отписаться',
    unsubscribeAll: 'Отписаться от всех',
    subscriptions: 'Активные подписки',
    noSubscriptions: 'Нет активных подписок',
    addSubscription: 'Добавить подписку',
    topicPatterns: 'Шаблоны топиков',
    systemTopics: 'Системные топики'
  },

  messages: {
    title: 'Сообщения',
    received: 'Полученные',
    sent: 'Отправленные',
    topic: 'Топик',
    payload: 'Данные',
    qos: 'QoS',
    retained: 'Сохраняемые',
    time: 'Время',
    clear: 'Очистить',
    export: 'Экспорт',
    filter: 'Фильтр',
    noMessages: 'Нет сообщений',
    view: 'Просмотр',
    copy: 'Копировать данные',
    duplicate: 'Дублировать для публикации'
  },

  tools: {
    title: 'Инструменты',
    topicGenerator: 'Генератор топиков',
    payloadFormatter: 'Форматировщик данных',
    qosExplainer: 'Объяснение QoS',
    wildcardTester: 'Тестер масок',
    packetInspector: 'Инспектор пакетов',
    loadTest: 'Тест нагрузки'
  },

  settings: {
    title: 'Настройки',
    maxMessages: 'Макс. сообщений',
    timeFormat: 'Формат времени',
    theme: 'Тема',
    autoExpand: 'Автораскрытие сообщений',
    saveHistory: 'Сохранять историю',
    clearOnDisconnect: 'Очищать при отключении',
    advanced: 'Дополнительно',
    lastWill: 'Завещание'
  },

  lastWill: {
    title: 'Завещание',
    enable: 'Включить',
    topic: 'Топик завещания',
    message: 'Сообщение завещания',
    qos: 'QoS завещания',
    retain: 'Сохранять завещание'
  },

  notifications: {
    connectSuccess: 'Подключено к {broker}',
    connectError: 'Ошибка подключения: {error}',
    disconnected: 'Отключено от брокера',
    subscribeSuccess: 'Подписано на {topic}',
    subscribeError: 'Ошибка подписки: {error}',
    unsubscribeSuccess: 'Отписано от {topic}',
    publishSuccess: 'Сообщение опубликовано в {topic}',
    publishError: 'Ошибка публикации: {error}',
    invalidJson: 'Некорректный JSON',
    packetReceived: 'Получено {packets} пакетов'
  }
};