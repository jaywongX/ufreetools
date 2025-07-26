export default {
  name: 'Инструмент проверки IP-адресов',
  description: 'Получите подробную информацию об IP-адресе, включая местоположение и сетевые данные',

  input: {
    title: 'Поиск IP-адреса',
    ipAddress: 'IP-адрес',
    ipPlaceholder: 'Введите IP-адрес (например: 8.8.8.8)',
    hostname: 'Имя хоста',
    hostnamePlaceholder: 'Или введите имя хоста (например: google.com)',
    options: 'Параметры поиска',
    includeGeolocation: 'Включить геолокацию',
    includeASN: 'Включить ASN информацию',
    includeDomains: 'Включить связанные домены',
    includeAbuse: 'Включить контакты для жалоб',
    myIP: 'Использовать мой IP-адрес'
  },

  actions: {
    lookup: 'Проверить IP',
    clear: 'Очистить результаты',
    copyIP: 'Копировать IP',
    copyAll: 'Копировать всю информацию',
    export: 'Экспорт результатов'
  },

  results: {
    title: 'Информация об IP',
    noResults: 'Нет данных для отображения',
    error: 'Ошибка: {message}',
    unknown: 'Неизвестно',
    queryTime: 'Время запроса',
    dataSource: 'Источник данных',
    general: {
      title: 'Основная информация',
      ipAddress: 'IP-адрес',
      hostname: 'Имя хоста',
      type: 'Тип',
      ipv4: 'IPv4',
      ipv6: 'IPv6',
      isPublic: 'Публичный IP',
      yes: 'Да',
      no: 'Нет',
      reverse: 'Обратный DNS'
    },
    location: {
      title: 'Местоположение',
      country: 'Страна',
      region: 'Регион',
      city: 'Город',
      postalCode: 'Почтовый индекс',
      timezone: 'Часовой пояс',
      coordinates: 'Координаты',
      latitude: 'Широта',
      longitude: 'Долгота'
    },
    network: {
      title: 'Сеть',
      asn: 'ASN',
      organization: 'Организация',
      isp: 'Интернет-провайдер',
      usage: 'Тип использования',
      domain: 'Домен',
      route: 'Маршрут',
      subnet: 'Подсеть',
      netmask: 'Маска сети',
      cidr: 'CIDR обозначение'
    },
    security: {
      title: 'Безопасность',
      threat: 'Угрозы',
      isTor: 'Tor выходной узел',
      isProxy: 'Прокси',
      isVpn: 'VPN',
      isAttacker: 'Известный атакующий',
      isAbuser: 'Известный нарушитель',
      threatLevel: 'Уровень угрозы',
      confidenceScore: 'Уверенность',
      abuseReports: 'Жалобы',
      lastReported: 'Последняя жалоба'
    },
    additional: {
      title: 'Дополнительно',
      mobile: 'Мобильная сеть',
      hosting: 'Хостинг-провайдер',
      associated: 'Связанные домены',
      abuseContact: 'Контакт для жалоб'
    }
  },

  map: {
    title: 'Карта местоположения',
    noLocation: 'Нет данных о местоположении',
    viewLarger: 'Открыть большую карту'
  },

  messages: {
    lookingUp: 'Поиск информации о {query}...',
    copied: 'Скопировано в буфер',
    exported: 'Экспорт успешен',
    invalidIP: 'Неверный IP-адрес',
    invalidHostname: 'Неверное имя хоста',
    publicIPOnly: 'Инструмент работает только с публичными IP-адресами',
    rateLimited: 'Превышен лимит запросов. Попробуйте позже.',
    historyCleared: 'История очищена'
  },

  history: {
    title: 'История поиска',
    clear: 'Очистить историю'
  }
};