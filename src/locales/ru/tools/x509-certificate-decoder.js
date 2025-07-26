export default {
  name: 'Анализатор X.509 сертификатов',
  description: 'Бесплатный онлайн-инструмент для анализа SSL/TLS сертификатов. Просмотр деталей сертификата, проверка срока действия, извлечение открытого ключа, экспорт отчетов.',

  instructions: {
    title: 'Анализатор сертификатов',
    description: 'Загрузите файл сертификата или вставьте PEM-кодированный сертификат для просмотра его деталей.'
  },

  dropzone: {
    title: 'Перетащите файл сертификата сюда',
    formats: 'Поддерживаемые форматы: .crt, .cer, .pem, .der, .p12 и .pfx'
  },

  buttons: {
    browse: 'Выбрать файл',
    decode: 'Анализировать сертификат',
    loadSample: 'Загрузить образец',
    downloadPdf: 'Скачать PDF отчет',
    downloadTxt: 'Скачать текстовый отчет',
    downloadHtml: 'Скачать HTML отчет',
    downloadJson: 'Скачать JSON отчет',
    copyBasic: 'Копировать основную информацию',
    copySubject: 'Копировать субъект/издателя',
    copyAll: 'Копировать всю информацию',
    copyValue: 'Копировать значение',
    downloadKey: 'Скачать ключ',
    exportPem: 'Экспорт PEM',
    downloadCert: 'Скачать сертификат',
  },

  input: {
    paste: 'Или вставьте данные сертификата:',
    placeholder: 'Вставьте ваш PEM-кодированный сертификат (-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----)'
  },

  loading: 'Анализ сертификата...',

  error: {
    title: 'Ошибка анализа сертификата',
    invalidFormat: 'Неверный формат сертификата',
    invalidBase64: 'Неверная base64 кодировка сертификата',
    invalidStructure: 'Неверная структура данных сертификата',
    invalidDer: 'Неверный DER формат сертификата',
    invalidAsn1: 'Неверный сертификат: не удалось разобрать ASN.1 данные',
    unsupportedType: 'Неподдерживаемый тип данных сертификата',
    failedParse: 'Не удалось разобрать данные сертификата',
    invalidP12: 'Неверный формат PKCS#12 файла',
    invalidP12Password: 'Неверный пароль PKCS#12',
    noCertificatesInP12: 'В PKCS#12 файле не найдены сертификаты',
    unableToProcessP12: 'Не удалось обработать PKCS#12 файл'
  },

  guide: {
    title: 'Как использовать этот инструмент',
    step1: 'Загрузите ваш сертификат X.509 (.crt, .cer, .pem, .der, .p12 или .pfx) или вставьте данные сертификата в текстовое поле ниже.',
    step2: 'Инструмент автоматически определит формат (PEM, DER или PKCS#12) и декодирует его.',
    step3: 'Просмотрите детальную информацию о сертификате, включая субъект, издатель, срок действия, расширения и данные открытого ключа.',
    step4: 'Используйте кнопки внизу для скачивания отчета в различных форматах или копирования информации в буфер обмена.'
  },

  tabs: {
    basic: 'Основная информация',
    subject: 'Субъект и издатель',
    extensions: 'Расширения',
    publicKey: 'Открытый ключ',
    fingerprints: 'Отпечатки',
    raw: 'Исходный сертификат'
  },

  results: {
    title: 'Детали сертификата',
    serialNumber: 'Серийный номер',
    version: 'Версия',
    sigAlg: 'Алгоритм подписи',
    validFrom: 'Действителен с',
    validTo: 'Действителен до',
    subject: 'Субъект',
    issuer: 'Издатель',
    extensions: 'Расширения',
    publicKey: 'Открытый ключ',
    algorithm: 'Алгоритм',
    keySize: 'Размер ключа',
    keyValue: 'Значение ключа',
    fingerprints: 'Отпечатки',
    rawCertificate: 'Исходный сертификат',
    field: 'Поле',
    value: 'Значение',
    critical: 'Критическое',
    noExtensions: 'В этом сертификате не найдены расширения.',
    validity: 'Срок действия сертификата',
    expiresIn: 'Истекает через {days} дней',
    visualization: 'Визуализация сертификата',
    daysRemaining: 'Осталось дней',
    valid: 'Действителен',
    expired: 'Истек',
    expiringSoon: 'Скоро истекает',
    fieldDescriptions: 'Описание полей',
    certificateUsage: 'Использование сертификата',
    certificateChain: 'Цепочка сертификатов',
    signatureValue: 'Значение подписи',
    notAvailable: 'Недоступно',
    noSpecificUsage: 'Не указано конкретное использование',
    signatureError: 'Ошибка при разборе значения подписи',
    keyDetails: 'Детали ключа',
    enhancedView: 'Расширенный вид',
    endEntity: 'Конечный объект',
    intermediate: 'Промежуточный сертификат',
    rootCA: 'Корневой CA',
    endEntityCert: 'Сертификат конечного объекта',
    intermediateCert: 'Промежуточный сертификат',
    rootCert: 'Корневой сертификат',
    issuedBy: 'Выдан',
    unknownIssuer: 'Неизвестный издатель',
    notYetValid: 'Еще не действителен'
  },

  report: {
    title: 'Отчет по сертификату X.509',
    generatedOn: 'Сгенерирован'
  },

  extensions: {
    subjectKeyIdentifier: 'Идентификатор ключа субъекта',
    keyUsage: 'Использование ключа',
    subjectAltName: 'Альтернативное имя субъекта',
    basicConstraints: 'Основные ограничения',
    crlDistributionPoints: 'Точки распространения CRL',
    certificatePolicies: 'Политики сертификата',
    authorityKeyIdentifier: 'Идентификатор ключа издателя',
    extKeyUsage: 'Расширенное использование ключа',
    authorityInfoAccess: 'Доступ к информации об издателе',
    ctPrecertificateScts: 'CT SCTs предварительного сертификата'
  },

  usage: {
    serverAuth: 'Аутентификация сервера',
    clientAuth: 'Аутентификация клиента',
    codeSigning: 'Подпись кода',
    emailProtection: 'Защита email',
    timeStamping: 'Временные метки',
    ocspSigning: 'Подпись OCSP'
  },

  customOID: {
    title: 'Запрос пользовательского OID',
    placeholder: 'Введите OID, например 2.5.29.15',
    lookup: 'Поиск',
    result: 'Результат',
    value: 'Значение',
    notFound: 'Информация по этому OID не найдена',
    foundButComplex: 'OID найден, но значение сложное',
    unknownName: 'OID с неизвестным именем',
    complexValue: 'Сложное значение, не может быть отображено напрямую'
  },

  descriptions: {
    serialNumber: 'Уникальный серийный номер, назначенный центром сертификации',
    version: 'Номер версии формата сертификата, обычно V3',
    sigAlg: 'Алгоритм, используемый для создания подписи сертификата',
    validFrom: 'Дата и время начала действия сертификата',
    validTo: 'Дата и время окончания действия сертификата',
    subject: 'Информация о владельце сертификата',
    issuer: 'Информация о центре сертификации, выпустившем сертификат',
    publicKey: 'Информация об открытом ключе владельца сертификата',
    extensions: 'Дополнительные поля, содержащие информацию о назначении сертификата'
  },

  messages: {
    copiedToClipboard: 'Скопировано в буфер обмена',
    copyError: 'Ошибка копирования в буфер обмена'
  },

  pkcs12: {
    passwordPrompt: 'Введите пароль для PKCS#12 файла',
    noPassword: 'Без пароля'
  },

  keyUsages: {
    digitalSignature: 'Цифровая подпись',
    nonRepudiation: 'Неотказуемость',
    keyEncipherment: 'Шифрование ключа',
    dataEncipherment: 'Шифрование данных',
    keyAgreement: 'Соглашение о ключе',
    keyCertSign: 'Подпись сертификата',
    crlSign: 'Подпись CRL',
    encipherOnly: 'Только шифрование',
    decipherOnly: 'Только дешифрование'
  }
};