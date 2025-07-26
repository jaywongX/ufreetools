export default {
  name: 'Инструмент отладки JWT',
  description: 'Онлайн-инструмент для анализа, проверки и отладки JWT токенов',

  sections: {
    encoded: 'Закодированный JWT',
    decoded: 'Декодированный JWT',
    header: 'Заголовок',
    payload: 'Полезная нагрузка',
    signature: 'Подпись',
    verification: 'Проверка'
  },

  actions: {
    decode: 'Декодировать',
    verify: 'Проверить подпись',
    copy: 'Копировать',
    share: 'Поделиться токеном',
    generateToken: 'Сгенерировать токен',
    generateRandomToken: 'Случайный токен',
    clear: 'Очистить',
    generateRandomPayload: 'Сгенерировать случайную нагрузку',
    generateRandomKey: 'Сгенерировать случайный ключ',
    generateKeyPair: 'Сгенерировать пару ключей'
  },

  messages: {
    invalidToken: 'Неверный формат JWT',
    copied: 'Скопировано в буфер обмена!',
    copyFailed: 'Не удалось скопировать, пожалуйста, скопируйте вручную',
    verificationSuccess: 'Подпись успешно проверена',
    verificationFailed: 'Проверка подписи не удалась',
    keyGenerated: 'Пара ключей успешно сгенерирована',
    keyGenerationFailed: 'Не удалось сгенерировать пару ключей',
    tokenGenerated: 'Токен успешно сгенерирован',
    tokenGenerationFailed: 'Не удалось сгенерировать токен',
    randomTokenGenerated: 'Случайный токен сгенерирован и успешно проанализирован',
    certUploadSuccess: 'Сертификат успешно загружен',
    certFormatInvalid: 'Неверный формат сертификата',
    certReadFailed: 'Не удалось прочитать сертификат',
    tokenFormatError: 'Неверный формат токена, JWT должен содержать три части, разделенные точками',
    tokenHeaderMissingAlg: 'В заголовке токена отсутствует поле алгоритма (alg)',
    tokenHeaderInvalid: 'Неверный формат заголовка токена',
    tokenVerificationFailed: 'Проверка формата токена не удалась',
    tokenExpired: 'Токен истек. Время истечения: {time}',
    tokenNotEffective: 'Токен еще не действителен. Время активации: {time}',
    tokenIssuedInFuture: 'Аномальное время выдачи токена, время выдачи в будущем. Время выдачи: {time}',
    algorithmNotSupported: 'Неподдерживаемый алгоритм',
    randomSecretGenerated: 'Случайный ключ успешно сгенерирован',
    randomSecretGenerationFailed: 'Не удалось сгенерировать случайный ключ',
    randomPayloadGenerated: 'Случайная полезная нагрузка сгенерирована',
    randomPayloadGenerationFailed: 'Не удалось сгенерировать случайную нагрузку',
    contentCleared: 'Все содержимое очищено',
    tokenDecodeSuccess: 'Токен успешно декодирован',
    tokenDecodeFailed: 'Не удалось декодировать токен',
    pleaseInputKey: 'Пожалуйста, введите ключ',
    pleaseGenerateKeyPair: 'Пожалуйста, сначала сгенерируйте пару {type} ключей',
    pleaseInputVerificationKey: 'Пожалуйста, введите ключ проверки',
    pleaseInputPublicKey: 'Пожалуйста, введите открытый ключ проверки',
    pleaseInputToken: 'Пожалуйста, введите токен для проверки',
    payloadFormatError: 'Ошибка формата полезной нагрузки, проверьте формат JSON',
    invalidTimestamp: 'Неверная временная метка'
  },

  placeholders: {
    secretKey: 'Пожалуйста, введите ключ',
    privateKey: 'Пожалуйста, введите или сгенерируйте закрытый ключ',
    publicKey: 'Пожалуйста, введите или сгенерируйте открытый ключ',
    payload: 'Пожалуйста, введите полезную нагрузку в формате JSON',
    token: 'Пожалуйста, введите или сгенерируйте JWT токен',
    verificationSecretKey: 'Пожалуйста, введите ключ проверки',
    verificationPublicKey: 'Пожалуйста, введите открытый ключ проверки'
  },

  labels: {
    algorithm: 'Алгоритм',
    secretKey: 'Ключ',
    privateKey: 'Закрытый ключ',
    publicKey: 'Открытый ключ',
    certificate: 'Цифровой сертификат (опционально)',
    payload: 'Полезная нагрузка (Payload)',
    token: 'Токен',
    verificationPublicKey: 'Открытый ключ проверки',
    tokenResult: 'Результат анализа токена',
    verifyToken: 'Проверить токен',
    tokenDecoded: 'Обнаружено, что токен подписан с использованием алгоритма {alg}',
    timestamp: 'Анализ временной метки',
    issuedAt: 'Время выдачи (iat)',
    expiration: 'Время истечения (exp)',
    notBefore: 'Время активации (nbf)',
    tokenFormat: 'Подсказка при отсутствии содержимого',
    tokenFormatDesc: 'После ввода или генерации JWT токена здесь будет отображаться результат анализа',
    uploadCert: 'Перетащите файл сертификата или нажмите для выбора',
    certName: 'Имя сертификата',
    sm3Fingerprint: 'SM3 отпечаток (x5t#sm3)',
    certUploadNote: 'После загрузки сертификата в заголовок JWT будет добавлено поле "x5t#sm3"',
    secondsTimestamp: 'Временная метка в секундах',
    millisecondsTimestamp: 'Временная метка в миллисекундах'
  },

  buttons: {
    cancel: 'Отмена',
    verify: 'Проверить',
    clearCert: 'Очистить',
    generateToken: 'Сгенерировать токен',
    decodeToken: 'Декодировать токен',
    verifyToken: 'Проверить токен',
    close: 'Закрыть'
  },

  verification: {
    success: 'Проверка успешна',
    failure: 'Проверка не удалась',
    validMessage: 'Проверка подписи токена пройдена, подпись действительна.',
    invalidMessage: 'Проверка подписи токена не удалась, подпись недействительна.'
  },

  errors: {
    noToken: 'Пожалуйста, введите токен для проверки',
    invalidToken: 'Неверный формат токена',
    noSecretKey: 'Пожалуйста, предоставьте ключ проверки',
    noPublicKey: 'Пожалуйста, предоставьте открытый ключ проверки',
    invalidSignature: 'Недействительная подпись',
    verificationFailed: 'Не удалось проверить токен'
  }
};