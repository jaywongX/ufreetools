export default {
    name: 'Генератор адресов Казахстана - Создание реальных казахстанских адресов, информации о личности и контактных данных онлайн',
    description: 'Бесплатный онлайн-генератор казахстанских адресов, создающий адреса реального формата, номера удостоверений личности (ИИН), номера телефонов, номера кредитных карт и полные профили личности. Поддерживает фильтрацию по региону, форматы экспорта JSON/CSV и работает полностью в браузере для защиты конфиденциальности.',
    inputTitle: 'Настройки генерации',
    outputTitle: 'Сгенерированные результаты',
    generateBtn: 'Сгенерировать данные',
    loadSampleBtn: 'Загрузить образец и сгенерировать',
    clearAll: 'Очистить все',
    noOutput: 'Результатов пока нет',
    preview: 'Предварительный просмотр данных',
    
    // Географическая фильтрация
    locationTitle: 'Географическая фильтрация',
    selectRegion: 'Выбрать регион/город',
    selectCity: 'Выбрать город',
    allRegions: 'Все регионы/города',
    allCities: 'Все города',
    postalCodeLabel: 'Почтовый индекс',
    
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
    tempEmail: 'Временная электронная почта',
    
    // Кредитная карта
    creditCardTitle: 'Информация о кредитной карте',
    cardType: 'Тип карты',
    cardNumber: 'Номер карты',
    expiryDate: 'Срок действия',
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
    
    // Удостоверение личности
    idCardTitle: 'Удостоверение личности Казахстана (ИИН)',
    idCardNumber: 'Номер удостоверения личности (ИИН)',
    
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
    cookiePolicy: 'Политика cookies',
    
    // Параметры экспорта
    exportTitle: 'Формат экспорта',
    exportJson: 'Экспорт JSON',
    exportCsv: 'Экспорт CSV',
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
    downloadSuccess: 'Скачивание успешно',
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
    regionLabel: 'Регион/город',
    
    // Формат адреса
    addressFloor: 'Этаж',
    addressUnit: 'Квартира',
    commercialUnit: '(Коммерческая единица)',
    postOfficeBox: 'Почтовый ящик',
    studentDormitory: 'Студенческое общежитие',
    teachingBuilding: 'Учебный корпус',
    library: 'Библиотека',
    buildingUnit: 'Здание',
    
    // Названия регионов (регионы Казахстана)
    regions: {
        NUR: 'Нур-Султан (Астана)',
        ALA: 'Алматы',
        SHY: 'Шымкент',
        AKM: 'Акмолинская область',
        AKT: 'Актюбинская область',
        ATY: 'Атырауская область',
        MAN: 'Мангистауская область',
        PAV: 'Павлодарская область',
        SKZ: 'Южно-Казахстанская область',
        KUS: 'Костанайская область',
        KAR: 'Карагандинская область',
        ZAP: 'Западно-Казахстанская область',
        MNG: 'Жамбылская область',
        TUR: 'Алматинская область',
        YUZ: 'Кызылординская область',
        VOS: 'Восточно-Казахстанская область',
        ZHE: 'Джезказганская область'
    },
    
    // Данные о городах
    cities: {
        NUR: {
            nursultan: 'Нур-Султан'
        },
        ALA: {
            almaty: 'Алматы'
        },
        SHY: {
            shymkent: 'Шымкент'
        },
        AKM: {
            akmola: 'Акмола',
            kokshetau: 'Кокшетау'
        },
        AKT: {
            aktobe: 'Актобе'
        },
        ATY: {
            atyrau: 'Атырау'
        },
        MAN: {
            aktau: 'Актау'
        },
        PAV: {
            pavlodar: 'Павлодар'
        },
        SKZ: {
            turkestan: 'Туркестан'
        },
        KUS: {
            kostanay: 'Костанай'
        },
        KAR: {
            karaganda: 'Караганда'
        },
        ZAP: {
            uralsk: 'Уральск'
        },
        MNG: {
            taraz: 'Тараз'
        },
        TUR: {
            taldykorgan: 'Талдыкорган'
        },
        YUZ: {
            kyzylorda: 'Кызылорда'
        },
        VOS: {
            'ust-kamenogorsk': 'Усть-Каменогорск'
        },
        ZHE: {
            temirtau: 'Темиртау'
        }
    },
    
    // Названия столбцов CSV
    csv: {
        fullAddress: 'Полный адрес',
        street: 'Улица',
        houseNumber: 'Номер дома',
        building: 'Здание',
        floor: 'Этаж',
        unit: 'Квартира',
        region: 'Регион/город',
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