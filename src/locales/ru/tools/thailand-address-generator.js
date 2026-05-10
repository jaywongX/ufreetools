export default {
    name: 'Генератор тайских адресов - Генерируйте реальные тайские адреса, информацию о личности и контактные данные онлайн',
    description: 'Бесплатный онлайн-генератор тайских адресов, который создает реальные тайские адреса, номера удостоверений личности, номера телефонов, номера кредитных карт и полные профили личности. Поддерживает фильтрацию по провинции, форматы экспорта JSON/CSV и работает полностью в браузере для защиты конфиденциальности.',
    inputTitle: 'Настройки генерации',
    outputTitle: 'Сгенерированные результаты',
    generateBtn: 'Сгенерировать данные',
    loadSampleBtn: 'Загрузить пример и сгенерировать',
    clearAll: 'Очистить все',
    noOutput: 'Результаты еще не сгенерированы',
    preview: 'Предпросмотр данных',
    
    // Географическая фильтрация
    locationTitle: 'Географическая фильтрация',
    selectRegion: 'Выберите провинцию',
    allRegions: 'Все провинции',
    postalCodeLabel: 'Почтовый индекс',
    validatePostalCode: 'Проверить почтовый индекс',
    
    // Типы адресов
    addressTypeTitle: 'Тип адреса',
    addressTypeResidential: 'Жилой адрес',
    addressTypeCommercial: 'Коммерческий адрес',
    addressTypeVirtual: 'Виртуальный почтовый ящик',
    addressTypeCampus: 'Университетский кампус',
    
    // Информация о личности
    identityTitle: 'Информация о личности',
    fullName: 'Полное имя',
    gender: 'Пол',
    genderMale: 'Мужской',
    genderFemale: 'Женский',
    age: 'Возраст',
    birthDate: 'Дата рождения',
    zodiac: 'Знак зодиака',
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
    bankBin: 'Банковский BIN',
    
    // Карьера
    careerTitle: 'Профессиональный профиль',
    jobTitle: 'Должность',
    salary: 'Зарплата',
    companyName: 'Название компании',
    companySize: 'Размер компании',
    industry: 'Отрасль',
    employmentStatus: 'Статус занятости',
    employmentFullTime: 'Полная занятость',
    employmentPartTime: 'Частичная занятость',
    
    // Удостоверение личности
    idCardTitle: 'Тайское удостоверение личности',
    idCardNumber: 'Номер удостоверения личности',
    
    // Цифровой отпечаток
    fingerprintTitle: 'Цифровой отпечаток',
    os: 'Операционная система',
    osVersion: 'Версия ОС',
    browser: 'Браузер',
    userAgent: 'Пользовательский агент',
    screenResolution: 'Разрешение экрана',
    timezone: 'Часовой пояс',
    guid: 'GUID',
    ipAddress: 'IP-адрес',
    macAddress: 'MAC-адрес',
    cookiePolicy: 'Политика файлов cookie',
    
    // Параметры экспорта
    exportTitle: 'Формат экспорта',
    exportJson: 'Экспорт в JSON',
    exportCsv: 'Экспорт в CSV',
    downloadBtn: 'Скачать',
    copyBtn: 'Копировать',
    viewDetails: 'Посмотреть детали',
    
    // Пакетная генерация
    batchTitle: 'Пакетная генерация',
    quantityLabel: 'Количество',
    quantityPlaceholder: 'Введите количество (1-100)',
    
    // Уведомления
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
    
    // Отображение записей
    recordLabel: 'Запись #{num}',
    addressLabel: 'Адрес',
    streetLabel: 'Улица',
    houseNumberLabel: 'Номер дома',
    buildingLabel: 'Здание',
    floorLabel: 'Этаж',
    unitLabel: 'Квартира',
    regionLabel: 'Провинция',
    postalCode: 'Почтовый индекс',
    
    // Формат адреса
    addressNumber: '№',
    addressFloor: 'Этаж',
    addressUnit: 'Кв.',
    commercialUnit: '(Коммерческое помещение)',
    thailand: 'Таиланд',
    postOfficeBox: 'Почтовый ящик',
    studentDormitory: 'Студенческое общежитие',
    teachingBuilding: 'Учебный корпус',
    library: 'Библиотека',
    buildingUnit: 'Корпус',
    apartment: 'Квартира',
    
    // Названия регионов (тайские провинции)
    regions: {
        'Bangkok': 'Бангкок',
        'Chiang Mai': 'Чиангмай',
        'Phuket': 'Пхукет',
        'Pattaya': 'Паттайя',
        'Nonthaburi': 'Нонтхабури',
        'Pathum Thani': 'Патхумтхани',
        'Samut Prakan': 'Самутпракан',
        'Nakhon Ratchasima': 'Накхонратчасима',
        'Chiang Rai': 'Чианграй',
        'Khon Kaen': 'Кхонкэн',
        'Nakhon Si Thammarat': 'Накхонситхаммарат',
        'Surat Thani': 'Сураттхани',
        'Udon Thani': 'Удонхани',
        'Rayong': 'Районг',
        'Lampang': 'Лампанг',
        'Nakhon Pathom': 'Накхонпатхом',
        'Ayutthaya': 'Аютхайя',
        'Chanthaburi': 'Чантарабури',
        'Trat': 'Трат',
        'Kanchanaburi': 'Канчанабури'
    },
    
    // Названия университетов
    universities: {
        'CU': 'Чулалонгкорнский университет',
        'TU': 'Университет Махидол',
        'KU': 'Университет Касетсарт',
        'TU': 'Университет Таммасат',
        'KMUTT': 'Университет короля Монгкута технологий Тонбури',
        'KMUTNB': 'Университет короля Монгкута технологий Северного Бангкока',
        'SIIT': 'Институт Сириндхорн международных технологий',
        'AIT': 'Азиатский технологический институт',
        'ABAC': 'Университет Ассампшн'
    },
    
    // Названия столбцов CSV
    csv: {
        fullAddress: 'Полный адрес',
        street: 'Улица',
        houseNumber: 'Номер дома',
        building: 'Здание',
        floor: 'Этаж',
        unit: 'Квартира',
        region: 'Провинция',
        postalCode: 'Почтовый индекс',
        fullName: 'Полное имя',
        gender: 'Пол',
        age: 'Возраст',
        birthDate: 'Дата рождения',
        phone: 'Телефон',
        email: 'Электронная почта',
        cardType: 'Тип карты',
        cardNumber: 'Номер карты',
        idCardNumber: 'Номер удостоверения личности'
    }
};