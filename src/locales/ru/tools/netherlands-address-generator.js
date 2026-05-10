export default {
    name: 'Генератор нидерландских адресов - Генерируйте реальные голландские адреса, информацию о личности и контактные данные онлайн',
    description: 'Бесплатный онлайн-генератор нидерландских адресов, который создает реальные голландские адреса, номера удостоверений личности, номера телефонов, номера кредитных карт и полные профили личности. Поддерживает фильтрацию по провинциям, форматы экспорта JSON/CSV и работает полностью в браузере для защиты конфиденциальности.',
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
    idCardTitle: 'Нидерландское удостоверение личности',
    idCardNumber: 'Номер удостоверения личности',
    bsnNumber: 'Номер BSN',
    
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
    netherlands: 'Нидерланды',
    postOfficeBox: 'Почтовый ящик',
    studentDormitory: 'Студенческое общежитие',
    teachingBuilding: 'Учебный корпус',
    library: 'Библиотека',
    buildingUnit: 'Корпус',
    apartment: 'Квартира',
    
    // Названия провинций (нидерландские провинции)
    regions: {
        'Noord-Holland': 'Северная Голландия',
        'Zuid-Holland': 'Южная Голландия',
        'Utrecht': 'Утрехт',
        'Gelderland': 'Гелдерланд',
        'Overijssel': 'Оверэйссел',
        'Flevoland': 'Флеволанд',
        'Friesland': 'Фрисландия',
        'Drenthе': 'Дренте',
        'Groningen': 'Гронинген',
        'Limburg': 'Лимбург',
        'Noord-Brabant': 'Северный Брабант',
        'Zeeland': 'Зеландия'
    },
    
    // Названия университетов
    universities: {
        'UvA': 'Амстердамский университет',
        'VU': 'Свободный университет Амстердама',
        'TU': 'Технологический университет Делфта',
        'UU': 'Утрехтский университет',
        'EUR': 'Университет Эразмуса Роттердама',
        'RUG': 'Гронингенский университет',
        'WUR': 'Вагенингенский университет',
        'UL': 'Лейденский университет',
        'RU': 'Университет Радбауда',
        'UM': 'Маастрихтский университет'
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