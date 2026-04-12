export default {
    name: 'Генератор адресов Германии - Генерация реальных немецких адресов и идентификационной информации онлайн',
    description: 'Бесплатный онлайн генератор немецких адресов, создает адреса в реальном формате, номера удостоверений личности, телефонные номера, номера кредитных карт и полные идентификационные профили. Поддерживает фильтрацию по землям, экспорт в JSON/CSV, работает полностью во фронтенде для защиты конфиденциальности.',
    inputTitle: 'Конфигурация генерации',
    outputTitle: 'Результаты генерации',
    generateBtn: 'Сгенерировать данные',
    loadSampleBtn: 'Загрузить пример и сгенерировать',
    clearAll: 'Очистить все',
    noOutput: 'Результаты генерации отсутствуют',
    preview: 'Предпросмотр данных',
    
    // Географическая фильтрация
    locationTitle: 'Фильтр географического положения',
    selectState: 'Выбрать федеральную землю',
    selectCity: 'Выбрать город',
    allStates: 'Все федеральные земли',
    allCities: 'Все города',
    
    // Типы адресов
    addressTypeTitle: 'Тип адреса',
    addressTypeResidential: 'Жилой адрес',
    addressTypeCommercial: 'Коммерческий адрес',
    addressTypePoBox: 'Абонементный ящик',
    addressTypeCampus: 'Университетский кампус',
    
    // Идентификационная информация
    identityTitle: 'Идентификационная информация',
    fullName: 'Полное имя',
    firstName: 'Имя',
    lastName: 'Фамилия',
    gender: 'Пол',
    genderMale: 'Мужчина',
    genderFemale: 'Женщина',
    age: 'Возраст',
    birthDate: 'Дата рождения',
    height: 'Рост',
    weight: 'Вес',
    
    // Контактная информация
    contactTitle: 'Контактная информация',
    phoneNumber: 'Номер телефона',
    phoneType: 'Тип телефона',
    phoneTypeMobile: 'Мобильный',
    phoneTypeLandline: 'Стационарный',
    areaCode: 'Код города',
    email: 'Адрес электронной почты',
    tempEmail: 'Временная почта',
    
    // Кредитная карта
    creditCardTitle: 'Информация о кредитной карте',
    cardType: 'Тип карты',
    cardNumber: 'Номер карты',
    expiryDate: 'Срок действия',
    cvv: 'CVV',
    bankBin: 'Банковский BIN-код',
    
    // Карьера
    careerTitle: 'Карьерный профиль',
    jobTitle: 'Должность',
    salary: 'Зарплата',
    companyName: 'Название компании',
    companySize: 'Размер компании',
    industry: 'Отрасль',
    employmentStatus: 'Статус занятости',
    
    // Удостоверение личности
    idCardTitle: 'Немецкое удостоверение личности (Personalausweis)',
    idCardNumber: 'Номер удостоверения',
    
    // Цифровой отпечаток
    fingerprintTitle: 'Цифровой отпечаток',
    os: 'Операционная система',
    osVersion: 'Версия ОС',
    browser: 'Браузер',
    userAgent: 'User Agent',
    screenResolution: 'Разрешение экрана',
    timezone: 'Часовой пояс',
    guid: 'GUID',
    ipAddress: 'IP-адрес',
    macAddress: 'MAC-адрес',
    cookiePolicy: 'Политика Cookies',
    
    // Параметры экспорта
    exportTitle: 'Формат экспорта',
    exportJson: 'Экспорт JSON',
    exportCsv: 'Экспорт CSV',
    downloadBtn: 'Скачать',
    copyBtn: 'Копировать',
    viewDetails: 'Просмотр деталей',
    
    // Пакетная генерация
    batchTitle: 'Пакетная генерация',
    quantityLabel: 'Количество',
    quantityPlaceholder: 'Введите количество (1-100)',
    
    // Сообщения
    generating: 'Генерация...',
    generated: 'Генерация завершена',
    copySuccess: 'Скопировано в буфер обмена',
    downloadSuccess: 'Загрузка успешна',
    invalidQuantity: 'Введите число от 1 до 100',
    
    // Отображение результатов
    resultCount: 'Сгенерировано {count} записей',
    resultSummary: 'Сводка результатов',
    showAll: 'Показать все',
    collapse: 'Свернуть',
    
    // Параметры генерации
    generateOptionsTitle: 'Параметры генерации',
    
    // Отображение записи
    recordLabel: 'Запись #{num}',
    addressLabel: 'Адрес',
    streetLabel: 'Улица',
    houseNumberLabel: 'Номер дома',
    postalCodeLabel: 'Почтовый индекс',
    cityLabel: 'Город',
    stateLabel: 'Федеральная земля',
    
    // Формат адреса
    commercialArea: 'Коммерческая зона',
    studentDormitory: 'Студенческое общежитие',
    library: 'Библиотека',
    
    // 16 федеральных земель Германии
    states: {
        BW: 'Баден-Вюртемберг',
        BY: 'Бавария',
        BE: 'Берлин',
        BB: 'Бранденбург',
        HB: 'Бремен',
        HH: 'Гамбург',
        HE: 'Гессен',
        MV: 'Мекленбург-Передняя Померания',
        NI: 'Нижняя Саксония',
        NW: 'Северный Рейн-Вестфалия',
        RP: 'Рейнланд-Пфальц',
        SL: 'Саар',
        SN: 'Саксония',
        ST: 'Саксония-Анхальт',
        SH: 'Шлезвиг-Гольштейн',
        TH: 'Тюрингия'
    },
    
    // Названия университетов
    universities: {
        TUM: 'Технический университет Мюнхена',
        LMU: 'Мюнхенский университет Людвига-Максимилиана',
        HU: 'Берлинский университет имени Гумбольдта',
        TU: 'Берлинский технический университет',
        UniHeidelberg: 'Гейдельбергский университет'
    },
    
    // Имена столбцов CSV
    csv: {
        fullAddress: 'Полный адрес',
        street: 'Улица',
        houseNumber: 'Номер дома',
        postalCode: 'Почтовый индекс',
        city: 'Город',
        state: 'Федеральная земля',
        fullName: 'Имя',
        gender: 'Пол',
        age: 'Возраст',
        birthDate: 'Дата рождения',
        phone: 'Телефон',
        email: 'Email',
        cardType: 'Тип карты',
        cardNumber: 'Номер карты',
        idCardNumber: 'Номер удостоверения'
    }
};
