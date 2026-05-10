export default {
    name: 'Генератор адресов Малайзии - Онлайн генерация реальных малайзийских адресов, информации о личности и контактных данных',
    description: 'Бесплатный онлайн генератор адресов Малайзии, который создает малайзийские адреса реального формата, номера MyKad, номера телефонов, номера кредитных карт и полные профили личности. Поддерживает фильтрацию по штатам, форматы экспорта JSON/CSV и работает полностью в браузере для защиты конфиденциальности.',
    inputTitle: 'Настройки генерации',
    outputTitle: 'Результаты генерации',
    generateBtn: 'Генерировать данные',
    loadSampleBtn: 'Загрузить пример и генерировать',
    clearAll: 'Очистить все',
    noOutput: 'Результаты еще не сгенерированы',
    preview: 'Предпросмотр данных',
    
    // Географическая фильтрация
    locationTitle: 'Географическая фильтрация',
    selectRegion: 'Выбрать штат',
    allRegions: 'Все штаты',
    postalCodeLabel: 'Почтовый индекс',
    validatePostalCode: 'Проверить индекс',
    
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
    areaCode: 'Код региона',
    email: 'Адрес электронной почты',
    tempEmail: 'Временная почта',
    
    // Кредитная карта
    creditCardTitle: 'Информация о кредитной карте',
    cardType: 'Тип карты',
    cardNumber: 'Номер карты',
    expiryDate: 'Дата окончания',
    cvv: 'CVV',
    bankBin: 'BIN банка',
    
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
    idCardTitle: 'Удостоверение личности Малайзии',
    idCardNumber: 'Номер удостоверения',
    mykadNumber: 'Номер MyKad',
    
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
    cookiePolicy: 'Политика cookies',
    
    // Параметры экспорта
    exportTitle: 'Формат экспорта',
    exportJson: 'Экспорт JSON',
    exportCsv: 'Экспорт CSV',
    downloadBtn: 'Скачать',
    copyBtn: 'Копировать',
    viewDetails: 'Просмотреть детали',
    
    // Пакетная генерация
    batchTitle: 'Пакетная генерация',
    quantityLabel: 'Количество',
    quantityPlaceholder: 'Введите количество (1-100)',
    
    // Уведомления
    generating: 'Генерация...',
    generated: 'Генерация завершена',
    copySuccess: 'Скопировано в буфер обмена',
    downloadSuccess: 'Скачивание успешно',
    invalidQuantity: 'Пожалуйста, введите число от 1 до 100',
    
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
    regionLabel: 'Штат',
    postalCode: 'Почтовый индекс',
    
    // Формат адреса
    addressNumber: '№',
    addressFloor: 'эт.',
    addressUnit: 'кв.',
    commercialUnit: '(коммерческий объект)',
    malaysia: 'Малайзия',
    postOfficeBox: 'Почтовый ящик',
    studentDormitory: 'Студенческое общежитие',
    teachingBuilding: 'Учебный корпус',
    library: 'Библиотека',
    buildingUnit: 'Корпус',
    apartment: 'Квартира',
    
    // Названия штатов (13 штатов + 3 федеральные территории)
    regions: {
        'Johor': 'Джохор',
        'Kedah': 'Кедах',
        'Kelantan': 'Келантан',
        'Malacca': 'Малакка',
        'Negeri Sembilan': 'Негери-Сембелан',
        'Pahang': 'Паханг',
        'Penang': 'Пенанг',
        'Perak': 'Перак',
        'Perlis': 'Перлис',
        'Sabah': 'Сабах',
        'Sarawak': 'Саравак',
        'Selangor': 'Селангор',
        'Terengganu': 'Тренгану',
        'Kuala Lumpur': 'Куала-Лумпур',
        'Putrajaya': 'Путраджая',
        'Labuan': 'Лабуан'
    },
    
    // Названия университетов
    universities: {
        'UM': 'Университет Малайя',
        'UKM': 'Национальный университет Малайзии',
        'UPM': 'Университет Путра Малайзии',
        'USM': 'Научный университет Малайзии',
        'UTM': 'Технологический университет Малайзии',
        'UUM': 'Северный университет Малайзии',
        'UMS': 'Университет Малайзии Сабах',
        'UMK': 'Университет Малайзии Келантан',
        'UPSI': 'Педагогический университет Султана Идриса'
    },
    
    // Названия столбцов CSV
    csv: {
        fullAddress: 'Полный адрес',
        street: 'Улица',
        houseNumber: 'Номер дома',
        building: 'Здание',
        floor: 'Этаж',
        unit: 'Квартира',
        region: 'Штат',
        postalCode: 'Почтовый индекс',
        fullName: 'Полное имя',
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