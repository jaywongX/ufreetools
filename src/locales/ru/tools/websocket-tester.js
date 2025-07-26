export default {
  name: 'Тестер WebSocket',
  description: 'Подключение к серверу WebSocket, отправка сообщений и просмотр ответов',

  connection: {
    url: 'URL WebSocket',
    urlPlaceholder: 'Например: ws://echo.websocket.org',
    protocol: 'Подпротокол (опционально)',
    protocolPlaceholder: 'Через запятую',
    connect: 'Подключиться',
    disconnect: 'Отключиться',
    status: 'Статус подключения',
    connected: 'Подключено',
    disconnected: 'Не подключено',
    waiting: 'Ожидание подключения',
    autoReconnect: 'Автоподключение',
    reconnectMessage: 'Попытка переподключения через {0} сек...'
  },

  options: {
    title: 'Настройки',
    autoScroll: 'Автопрокрутка логов'
  },

  messages: {
    send: 'Отправить сообщение',
    logs: 'Журнал сообщений',
    emptyLogs: 'Сообщения появятся здесь после подключения',
    placeholder: 'Введите сообщение для отправки...',
    sendButton: 'Отправить',
    clearButton: 'Очистить',
    copyButton: 'Копировать',
    clearLogs: 'Очистить журнал',
    copyLogs: 'Копировать журнал',
    format: {
      title: 'Формат',
      text: 'Текст',
      json: 'JSON',
      binary: 'Бинарный'
    },
    templates: {
      json: 'JSON',
      text: 'Текст'
    },
    types: {
      sent: 'Отправлено →',
      received: 'Получено ←',
      error: 'Ошибка !',
      info: 'Информация'
    }
  },

  savedConnections: {
    title: 'Сохраненные подключения',
    empty: 'Нет сохраненных подключений',
    save: 'Сохранить текущее',
    saveConnection: 'Сохранить подключение',
    connectionName: 'Имя подключения',
    load: 'Загрузить',
    delete: 'Удалить',
    cancel: 'Отмена'
  },

  testServers: {
    title: 'Тестовые серверы',
    description: 'Публичные WebSocket-серверы для тестирования:',
    useServer: 'Использовать этот сервер',
    servers: {
      echo: {
        name: 'Эхо-тест',
        description: 'Безопасный эхо-сервер с поддержкой WSS'
      },
      postman: {
        name: 'WebSocket.org',
        description: 'Эхо-сервис от Postman с поддержкой WSS'
      }
    }
  },

  logs: {
    connectingTo: 'Подключение к {0}...',
    connectionSuccess: 'Подключение установлено',
    connectionError: 'Ошибка WebSocket',
    connectionClosed: 'Соединение закрыто (код: {0}{1})',
    invalidJson: 'Неверный JSON: {0}',
    sendFailed: 'Ошибка отправки: {0}',
    emptyMessage: 'Сообщение не может быть пустым',
    notConnected: 'Не подключено к WebSocket',
    copied: 'Лог скопирован в буфер',
    copyFailed: 'Ошибка копирования: {0}',
    serverSelected: 'Выбран сервер: {0}',
    binaryData: '[Бинарные данные]'
  }
};