export default {
  name: 'Проверка безопасности HTTP-заголовков',
  description: 'Анализ и оценка безопасности HTTP-заголовков ответа',
  title: 'Инструмент проверки безопасности HTTP-заголовков',
  intro: 'Анализ HTTP-заголовков веб-сайта, проверка настроек безопасности, таких как CSP, HSTS, и предоставление рекомендаций по улучшению',

  input: {
    title: 'Введите URL или заголовки',
    url: 'URL',
    urlPlaceholder: 'Введите URL для проверки (например: https://example.com)',
    headers: 'Или вставьте HTTP-заголовки напрямую',
    headersPlaceholder: 'Вставьте необработанные HTTP-заголовки здесь...',
    options: 'Параметры сканирования',
    followRedirects: 'Следовать перенаправлениям',
    includeSubresources: 'Проверять подресурсы (CSS, JS и т.д.)',
    timeout: 'Тайм-аут (секунды)',
    checkButton: 'Проверить заголовки',
    analyzing: 'Анализ...'
  },

  results: {
    title: 'Анализ заголовков безопасности',
    overview: 'Обзор',
    score: 'Оценка безопасности',
    totalScore: 'Всего из 100',
    scanned: 'Просканированный URL',
    date: 'Дата сканирования',
    headers: {
      title: 'Найденные заголовки',
      name: 'Заголовок',
      value: 'Значение',
      status: 'Статус'
    },
    allHeaders: {
      title: 'Все заголовки ответа',
      name: 'Имя',
      value: 'Значение',
      noData: 'Нет данных заголовков ответа'
    },
    missing: {
      title: 'Отсутствующие заголовки безопасности',
      description: 'Эти рекомендуемые заголовки безопасности не найдены:'
    },
    issues: {
      title: 'Проблемы безопасности',
      critical: 'Критические',
      high: 'Высокие',
      medium: 'Средние',
      low: 'Низкие',
      info: 'Информационные'
    },
    recommendations: {
      title: 'Рекомендации',
      description: 'Рассмотрите возможность добавления следующих заголовков для повышения безопасности:',
      example: 'Пример конфигурации'
    },
    rating: {
      unknown: 'Неизвестно',
      excellent: 'Отлично',
      good: 'Хорошо',
      fair: 'Удовлетворительно',
      poor: 'Плохо',
      high_risk: 'Высокий риск',
      descriptions: {
        unknown: 'Невозможно получить информацию о заголовках безопасности сайта',
        excellent: 'Сайт реализовал все основные заголовки безопасности',
        good: 'Сайт реализовал большинство важных заголовков безопасности',
        fair: 'На сайте отсутствуют некоторые важные заголовки безопасности',
        poor: 'На сайте отсутствует несколько критических заголовков безопасности',
        high_risk: 'Сайт практически не реализовал меры защиты с помощью заголовков безопасности'
      }
    }
  },

  headers: {
    strictTransportSecurity: {
      name: 'Strict-Transport-Security',
      description: 'Принудительное использование HTTPS-соединений вместо HTTP',
      recommendation: 'Добавьте "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"',
      status: {
        good: 'Настроено правильно',
        bad: 'Не настроено',
        warning: 'Конфигурацию можно улучшить'
      },
      recommendationConfigured: 'Существующая конфигурация реализована, убедитесь, что включены достаточно длинный max-age и includeSubDomains',
      recommendationMissing: 'Рекомендуется включить HSTS для обеспечения всех коммуникаций через HTTPS'
    },
    xContentTypeOptions: {
      name: 'X-Content-Type-Options',
      description: 'Предотвращение определения MIME-типа',
      recommendation: 'Добавьте "X-Content-Type-Options: nosniff"',
      status: {
        good: 'Настроено правильно',
        bad: 'Не настроено или настроено неправильно'
      },
      recommendationConfigured: 'Конфигурация правильная, сохраните текущие настройки',
      recommendationMissing: 'Рекомендуется установить этот заголовок со значением "nosniff"'
    },
    xFrameOptions: {
      name: 'X-Frame-Options',
      description: 'Предотвращение встраивания сайта в iframe для защиты от атак кликджекинга',
      recommendation: 'Добавьте "X-Frame-Options: DENY" или "SAMEORIGIN"',
      status: {
        good: 'Настроено',
        bad: 'Не настроено'
      },
      recommendationConfigured: 'Существующая конфигурация реализована, рекомендуется использовать DENY или SAMEORIGIN',
      recommendationMissing: 'Рекомендуется настроить этот заголовок как DENY или SAMEORIGIN для предотвращения кликджекинга'
    },
    contentSecurityPolicy: {
      name: 'Content-Security-Policy',
      description: 'Контроль ресурсов, которые пользовательский агент может загружать',
      recommendation: 'Добавьте заголовок Content-Security-Policy с соответствующими директивами',
      status: {
        good: 'Настроено правильно',
        bad: 'Не настроено',
        warning: 'Конфигурацию можно улучшить'
      },
      recommendationConfigured: 'Существующая конфигурация реализована, обеспечьте регулярный аудит и обновление политики',
      recommendationMissing: 'Рекомендуется настроить CSP для ограничения источников загружаемых ресурсов, повышая защиту от XSS-атак'
    },
    xXssProtection: {
      name: 'X-XSS-Protection',
      description: 'Этот заголовок включает фильтрацию XSS в старых браузерах. В современных браузерах рекомендуется использовать CSP вместо него.',
      recommendation: 'Хотя этот заголовок заменен CSP в современных браузерах, рекомендуется установить его как "1; mode=block" для совместимости со старыми браузерами',
      status: {
        enabled: 'Включено',
        disabled: 'Отключено',
        notConfigured: 'Не настроено (для современных браузеров рекомендуется использовать CSP)'
      }
    },
    referrerPolicy: {
      name: 'Referrer-Policy',
      description: 'Контроль информации, включаемой в заголовок Referer',
      recommendation: 'Добавьте "Referrer-Policy: no-referrer-when-downgrade" или более строгую политику',
      status: {
        good: 'Настроено',
        bad: 'Не настроено'
      },
      recommendationConfigured: 'Существующая конфигурация реализована, рекомендуется использовать strict-origin или strict-origin-when-cross-origin',
      recommendationMissing: 'Рекомендуется настроить этот заголовок для контроля передачи информации об источнике'
    },
    permissionsPolicy: {
      name: 'Permissions-Policy',
      description: 'Контроль того, какие функции и API браузера могут быть использованы',
      recommendation: 'Добавьте заголовок Permissions-Policy с соответствующими ограничениями',
      status: {
        good: 'Настроено',
        bad: 'Не настроено'
      },
      recommendationConfigured: 'Существующая конфигурация реализована, убедитесь в ограничении ненужных функций',
      recommendationMissing: 'Рекомендуется настроить этот заголовок для ограничения функций браузера, которые может использовать сайт'
    }
  },

  status: {
    good: 'Хорошо',
    warning: 'Предупреждение',
    bad: 'Плохо',
    info: 'Информация',
    notApplicable: 'Не применимо'
  },

  actions: {
    export: 'Экспорт отчета',
    copyHeaders: 'Копировать заголовки',
    copyRecommendations: 'Копировать рекомендации',
    scan: 'Новое сканирование',
    share: 'Поделиться результатами',
    analyze: 'Анализировать заголовки'
  },

  emptyState: {
    line1: 'Введите URL веб-сайта для анализа настроек безопасности HTTP-заголовков',
    line2: 'Получите подробную оценку и рекомендации по заголовкам безопасности, таким как CSP, HSTS и другие'
  },

  messages: {
    scanning: 'Сканирование {url}...',
    completed: 'Сканирование завершено',
    error: 'Ошибка: {message}',
    timeout: 'Тайм-аут запроса',
    invalidUrl: 'Недействительный URL',
    invalidUrlFormat: 'Пожалуйста, введите действительный URL, начинающийся с http:// или https://',
    copied: 'Скопировано в буфер обмена',
    exportComplete: 'Отчет успешно экспортирован',
    httpWarning: 'Предупреждение: использование HTTP может быть небезопасным',
    noHeaders: 'Не найдено информации о заголовках',
    fetchError: 'Не удалось получить информацию о заголовках: {error}'
  }
}; 