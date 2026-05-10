export default {
    name: 'Генератор адресов Италии - Генерируйте реальные итальянские адреса, информацию о личности и контактные данные онлайн',
    description: 'Бесплатный онлайн-генератор адресов Италии, который создает реальные итальянские адреса, номера Codice Fiscale, номера телефонов, номера кредитных карт и полные профили личности. Поддерживает фильтрацию по регионам, форматы экспорта JSON/CSV и работает полностью в браузере для защиты конфиденциальности.',
    inputTitle: 'Настройки генерации',
    outputTitle: 'Сгенерированные результаты',
    generateBtn: 'Генерировать данные',
    loadSampleBtn: 'Загрузить пример и генерировать',
    clearAll: 'Очистить все',
    noOutput: 'Результаты еще не сгенерированы',
    preview: 'Предварительный просмотр данных',
    
    // Географическая фильтрация
    locationTitle: 'Географическая фильтрация',
    selectRegion: 'Выберите регион',
    allRegions: 'Все регионы',
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
    email: 'Электронная почта',
    tempEmail: 'Временная почта',
    
    // Кредитная карта
    creditCardTitle: 'Информация о кредитной карте',
    cardType: 'Тип карты',
    cardNumber: 'Номер карты',
    expiryDate: 'Срок действия',
    cvv: 'CVV',
    bankBin: 'БИН банка',
    
    // Карьера
    careerTitle: 'Профиль карьеры',
    jobTitle: 'Должность',
    salary: 'Зарплата',
    companyName: 'Название компании',
    companySize: 'Размер компании',
    industry: 'Отрасль',
    employmentStatus: 'Статус занятости',
    employmentFullTime: 'Полная занятость',
    employmentPartTime: 'Частичная занятость',
    
    // Удостоверение личности
    idCardTitle: 'Итальянское удостоверение личности',
    idCardNumber: 'Номер удостоверения личности',
    codiceFiscale: 'Codice Fiscale',
    
    // Цифровой отпечаток
    fingerprintTitle: 'Цифровой отпечаток',
    os: 'Операционная система',
    osVersion: 'Версия системы',
    browser: 'Браузер',
    userAgent: 'User Agent',
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
    viewDetails: 'Просмотреть детали',
    
    // Пакетная генерация
    batchTitle: 'Пакетная генерация',
    quantityLabel: 'Количество',
    quantityPlaceholder: 'Введите количество (1-100)',
    
    // Уведомления
    generating: 'Генерация...',
    generated: 'Генерация завершена',
    copySuccess: 'Скопировано в буфер обмена',
    downloadSuccess: 'Загрузка успешна',
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
    regionLabel: 'Регион',
    postalCode: 'Почтовый индекс',
    
    // Формат адреса
    addressNumber: 'д.',
    addressFloor: 'эт.',
    addressUnit: 'кв.',
    commercialUnit: '(Коммерческое помещение)',
    italy: 'Италия',
    postOfficeBox: 'Почтовый ящик',
    studentDormitory: 'Студенческое общежитие',
    teachingBuilding: 'Учебный корпус',
    library: 'Библиотека',
    buildingUnit: 'Корпус',
    apartment: 'Квартира',
    
    // Названия регионов (итальянские регионы)
    regions: {
        'Lombardia': 'Ломбардия',
        'Lazio': 'Лацио',
        'Campania': 'Кампания',
        'Sicilia': 'Сицилия',
        'Veneto': 'Венеция',
        'Emilia-Romagna': 'Эмилия-Романья',
        'Piemonte': 'Пьемонт',
        'Toscana': 'Тоскана',
        'Puglia': 'Апулия',
        'Calabria': 'Калабрия',
        'Sardegna': 'Сардиния',
        'Friuli Venezia Giulia': 'Фриули-Венеция-Джулия',
        'Liguria': 'Лигурия',
        'Marche': 'Марке',
        'Abruzzo': 'Абруццо',
        'Molise': 'Молизе',
        'Basilicata': 'Базиликата',
        'Umbria': 'Умбрия',
        "Valle d'Aosta": "Валле-д'Аоста",
        'Trentino-Alto Adige': 'Трентино-Альто-Адидже'
    },
    
    // Названия университетов
    universities: {
        'Politecnico di Milano': 'Политехнический университет Милана',
        'Sapienza': 'Римский университет Ла Сапиенца',
        'Bocconi': 'Университет Боккони',
        'Politecnico di Torino': 'Политехнический университет Турина',
        'UniMI': 'Миланский университет',
        'UniFI': 'Флорентийский университет',
        'UniBO': 'Болонский университет',
        'UniPd': 'Падуанский университет',
        'UniNa': 'Неаполитанский университет Федерико II',
        'UniTo': 'Туринский университет'
    },
    
    // Названия столбцов CSV
    csv: {
        fullAddress: 'Полный адрес',
        street: 'Улица',
        houseNumber: 'Номер дома',
        building: 'Здание',
        floor: 'Этаж',
        unit: 'Квартира',
        region: 'Регион',
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