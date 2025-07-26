export default {
  name: 'Генератор QR-кодов',
  description: 'Создавайте настраиваемые QR-коды для URL, текста и других данных',

  options: {
    content: 'Содержимое QR-кода',
    contentType: 'Тип содержимого',
    errorCorrectionLevel: 'Уровень коррекции ошибок',
    size: 'Размер',
    margin: 'Отступ',
    foregroundColor: 'Цвет элементов',
    backgroundColor: 'Фоновый цвет',
    logo: 'Добавить логотип',
    logoSize: 'Размер логотипа',
    cornerRadius: 'Скругление углов'
  },

  contentTypes: {
    url: 'URL-адрес',
    text: 'Текст',
    email: 'Электронная почта',
    phone: 'Телефон',
    sms: 'SMS',
    wifi: 'Wi-Fi сеть',
    vcard: 'Визитка (vCard)',
    mecard: 'Визитка (MeCard)'
  },

  errorLevels: {
    L: 'Низкий (7%)',
    M: 'Средний (15%)',
    Q: 'Высокий (25%)',
    H: 'Максимальный (30%)'
  },

  actions: {
    generate: 'Сгенерировать QR-код',
    download: 'Скачать',
    downloadSVG: 'Скачать SVG',
    downloadPNG: 'Скачать PNG',
    copy: 'Копировать изображение',
    clear: 'Сбросить',
    uploadLogo: 'Загрузить логотип'
  },

  templates: {
    title: 'Быстрые шаблоны',
    confirmReplace: 'Заменить текущее содержимое?',
    confirm: 'Подтвердить',
    cancel: 'Отмена',
    url: {
      name: 'Ссылка на сайт'
    },
    email: {
      name: 'Email адрес'
    },
    phone: {
      name: 'Телефонный номер'
    },
    sms: {
      name: 'SMS сообщение'
    },
    wifi: {
      name: 'Настройки Wi-Fi',
      example: {
        ssid: 'Имя сети',
        password: 'Пароль'
      }
    },
    geo: {
      name: 'Геолокация'
    }
  },

  appearance: {
    title: 'Настройки внешнего вида'
  },

  preview: {
    title: 'Предпросмотр',
    generating: 'Генерация...',
    clickGenerateButton: 'Нажмите кнопку "Сгенерировать QR-код"',
    clickToDownload: 'Нажмите для скачивания QR-кода'
  },

  tips: {
    title: 'Советы',
    saveToPrint: 'Сгенерированные QR-коды можно сохранить как изображения для печати или обмена.',
    errorCorrection: 'Уровень коррекции ошибок определяет, насколько QR-код будет читаем при повреждении. Уровень L имеет минимальную устойчивость, H - максимальную, но делает код сложнее.'
  },

  wifi: {
    ssid: 'Имя сети (SSID)',
    password: 'Пароль',
    encryption: 'Тип шифрования',
    hidden: 'Скрытая сеть'
  },

  placeholders: {
    content: 'Введите текст, ссылку или другие данные...'
  },

  characters: 'символов',
  maxChars: 'Рекомендуется не более 300 символов',

  messages: {
    copied: 'Скопировано в буфер обмена!',
    generated: 'QR-код успешно создан',
    contentRequired: 'Введите содержимое QR-кода',
    downloaded: 'QR-код скачан',
    confirmReplace: 'Подтвердите замену текущего содержимого',
    contentUpdated: 'Содержимое обновлено',
    changesCancelled: 'Изменения отменены',
    invalidUrl: 'Введите корректный URL',
    invalidEmail: 'Введите корректный email адрес',
    invalidPhone: 'Введите корректный номер телефона',
    logoTooBig: 'Файл логотипа слишком большой (макс. 1MB)'
  },

  errors: {
    canvasNotReady: 'Элемент Canvas не готов',
    generationError: 'Ошибка генерации QR-кода',
    generationErrorWithMessage: 'Ошибка генерации QR-кода: {message}',
    downloadError: 'Ошибка скачивания QR-кода: {message}'
  }
};