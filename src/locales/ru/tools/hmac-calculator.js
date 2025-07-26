export default {
  name: 'HMAC калькулятор',
  description: 'Вычисление HMAC (код аутентификации сообщений на основе хеша) для данных',
  title: 'Инструмент вычисления HMAC',
  intro: 'Генерация кода аутентификации сообщений с использованием ключа, поддержка различных хеш-алгоритмов и форматов вывода',

  input: {
    title: 'Ввод',
    message: 'Сообщение',
    messagePlaceholder: 'Введите сообщение для аутентификации',
    key: 'Ключ',
    keyLabel: 'Ключ (Secret Key)',
    keyPlaceholder: 'Введите HMAC-ключ',
    messageLabel: 'Сообщение (Message)',
    messageLongPlaceholder: 'Введите сообщение для вычисления HMAC',
    file: 'Файл',
    text: 'Текст',
    fileSelect: 'Выбрать файл',
    fileDrop: 'или перетащите файл сюда',
    fileSelected: 'Выбран файл: {name}',
    clearFile: 'Очистить файл',
    encoding: 'Кодировка ввода',
    keyEncoding: 'Кодировка ключа',
    outputFormat: 'Формат вывода',
    inputType: 'Тип ввода',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    base64: 'Base64',
    hex: 'Шестнадцатеричный',
    binary: 'Бинарный',
    calculate: 'Вычислить HMAC',
    calculating: 'Вычисление...',
    clear: 'Очистить все'
  },

  algorithms: {
    title: 'Алгоритмы',
    label: 'Хеш-алгоритм',
    hmacMd5: 'HMAC-MD5',
    hmacSha1: 'HMAC-SHA1',
    hmacSha224: 'HMAC-SHA224',
    hmacSha256: 'HMAC-SHA256',
    hmacSha384: 'HMAC-SHA384',
    hmacSha512: 'HMAC-SHA512',
    hmacRipemd160: 'HMAC-RIPEMD160',
    hmacSm3: 'HMAC-SM3'
  },

  result: {
    title: 'Результат HMAC',
    digest: 'HMAC-дайджест',
    outputLabel: 'Результат HMAC',
    copy: 'Копировать',
    copied: 'Скопировано!',
    noResult: 'Введите сообщение и ключ для вычисления HMAC',
    calculating: 'Вычисление...',
    placeholder: 'Результат HMAC появится здесь',
    useExample: 'Использовать пример',
    jsExample: 'Пример на JavaScript:'
  },

  validation: {
    title: 'Проверка HMAC',
    hmacToVerify: 'HMAC для проверки',
    verifyPlaceholder: 'Введите HMAC для проверки',
    verify: 'Проверить HMAC',
    valid: 'HMAC действителен',
    invalid: 'HMAC недействителен',
    verifying: 'Проверка...'
  },

  options: {
    title: 'Опции',
    uppercase: 'Верхний регистр вывода',
    showDetails: 'Показать технические детали',
    autoUpdate: 'Автоматическое обновление',
    truncate: 'Обрезать вывод',
    truncateLength: 'Длина обрезки'
  },

  details: {
    title: 'Технические детали',
    algorithm: 'Алгоритм',
    keyLength: 'Длина ключа',
    blockSize: 'Размер блока',
    outputLength: 'Длина вывода',
    execution: 'Время выполнения',
    ms: 'мс'
  },

  messages: {
    noMessage: 'Пожалуйста, введите сообщение',
    noKey: 'Пожалуйста, введите ключ',
    invalidEncoding: 'Неверный формат кодировки',
    processingError: 'Ошибка обработки: {error}',
    success: 'HMAC успешно вычислен',
    invalidKey: 'Неверный формат ключа для выбранной кодировки',
    fileTooBig: 'Файл слишком большой. Максимальный размер 5MB',
    copied: 'Скопировано в буфер обмена',
    copyFailed: 'Не удалось скопировать, пожалуйста, скопируйте вручную',
    invalidHex: 'Ключ не является допустимым шестнадцатеричным значением',
    invalidBase64: 'Ключ не является допустимым значением Base64',
  },

  security: {
    title: 'Рекомендации по безопасности',
    keyStorage: 'Никогда не делитесь своим ключом',
    keyStrength: 'Используйте сильный и уникальный ключ для каждого приложения',
    recommendation: 'Для критически важных приложений используйте как минимум HMAC-SHA256',
    warning: 'HMAC-MD5 и HMAC-SHA1 могут быть небезопасны для высокозащищённых приложений'
  }
}; 