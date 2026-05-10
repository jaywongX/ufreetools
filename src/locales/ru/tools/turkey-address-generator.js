export default {
    name: 'Генератор адресов Турции - Генерация реальных турецких адресов, данных идентификации и контактной информации онлайн',
    description: 'Бесплатный онлайн-генератор адресов Турции, который создает реальные турецкие адреса, номера удостоверений личности, номера телефонов, номера кредитных карт и полные профили идентификации. Поддерживает фильтрацию по провинциям, форматы экспорта JSON/CSV и работает полностью в браузере для защиты конфиденциальности.',
    inputTitle: 'Настройки генерации',
    outputTitle: 'Сгенерированные результаты',
    generateBtn: 'Генерировать данные',
    loadSampleBtn: 'Загрузить пример и генерировать',
    clearAll: 'Очистить все',
    noOutput: 'Результаты еще не сгенерированы',
    preview: 'Предварительный просмотр данных',
    
    // Географическая фильтрация
    locationTitle: 'Географическая фильтрация',
    selectProvince: 'Выберите провинцию',
    selectDistrict: 'Выберите район',
    allProvinces: 'Все провинции',
    allDistricts: 'Все районы',
    postalCodeLabel: 'Почтовый индекс',
    validatePostalCode: 'Проверить почтовый индекс',
    
    // Типы адресов
    addressTypeTitle: 'Тип адреса',
    addressTypeResidential: 'Жилой адрес',
    addressTypeCommercial: 'Коммерческий адрес',
    addressTypeVirtual: 'Виртуальный почтовый ящик',
    addressTypeCampus: 'Университетский кампус',
    
    // Информация об идентификации
    identityTitle: 'Информация об идентификации',
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
    areaCode: 'Код района',
    email: 'Электронная почта',
    tempEmail: 'Временная электронная почта',
    
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
    idCardTitle: 'Турецкое удостоверение личности',
    idCardNumber: 'Номер удостоверения личности',
    nationalId: 'Национальный идентификационный номер',
    serialNumber: 'Серийный номер',
    checkDigit: 'Контрольная цифра',
    
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
    exportJson: 'Экспорт JSON',
    exportCsv: 'Экспорт CSV',
    exportIdCard: 'Генерировать изображение удостоверения',
    exportBusinessCard: 'Генерировать визитку',
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
    districtLabel: 'Район',
    provinceLabel: 'Провинция',
    postalCode: 'Почтовый индекс',
    
    // Формат адреса
    addressNumber: '№',
    addressFloor: 'эт.',
    addressUnit: 'кв.',
    commercialUnit: '(коммерческое помещение)',
    turkey: 'Турция',
    postOfficeBox: 'Почтовый ящик',
    studentDormitory: 'Студенческое общежитие',
    teachingBuilding: 'Учебный корпус',
    library: 'Библиотека',
    buildingUnit: 'Корпус',
    apartment: 'Квартира',
    
    // Предупреждения
    idCardImageAlert: 'Генерация изображения удостоверения личности требует реализации canvas',
    businessCardAlert: 'Генерация визитки требует реализации canvas',
    
    // Названия провинций (основные турецкие провинции)
    provinces: {
        IST: 'Стамбул',
        ANK: 'Анкара',
        IZM: 'Измир',
        BUR: 'Бурса',
        ANT: 'Анталья',
        ADN: 'Адана',
        GAZ: 'Газиантеп',
        KON: 'Конья',
        MRA: 'Мерсин',
        KAY: 'Кайсери',
        ESK: 'Эскишехир',
        TRA: 'Трабзон',
        SAM: 'Самсун',
        MAL: 'Малатья',
        DIA: 'Диярбакыр',
        ERZ: 'Эрзурум',
        VAN: 'Ван',
        SIV: 'Сивас',
        TOK: 'Токат',
        COR: 'Чорум'
    },
    
    // Названия районов (пример Стамбула)
    districtsData: {
        IST: {
            beyoglu: 'Бейоглу',
            fatih: 'Фатих',
            kadikoy: 'Кадикёй',
            besiktas: 'Бешикташ',
            sisli: 'Шишли',
            uskudar: 'Ускюдар',
            bakirkoy: 'Бакыркёй',
            zeytinburnu: 'Зейтинбурну',
            beylikduzu: 'Бейликдюзу',
            pendik: 'Пендик',
            maltepe: 'Малтепе',
            kartal: 'Картал',
            tuzla: 'Тузла',
            catalca: 'Чаталджа'
        },
        ANK: {
            cankaya: 'Чанкая',
            yenimahalle: 'Йенимахалле',
            altindag: 'Алтынадаг',
            pursaklar: 'Пурсаклар',
            eryaman: 'Эрьяман',
            etimesgut: 'Этимесгут',
            sincan: 'Синджан'
        },
        IZM: {
            konak: 'Конак',
            karsiyaka: 'Каршыяка',
            bornova: 'Борнова',
            cigli: 'Чигли',
            bayrakli: 'Байраклы',
            balcova: 'Балчова',
            guzelbahce: 'Гюзельбахче'
        },
        BUR: {
            nilufer: 'Нилуфер',
            osmangazi: 'Османгази',
            yildirim: 'Ылдырым',
            mudanya: 'Муданья',
            gemlik: 'Гемлик'
        },
        ANT: {
            muratpasa: 'Муратпаша',
            kepez: 'Кепез',
            konyaalti: 'Коньяалты',
            aksu: 'Аксу',
            dosenmeadi: 'Дёшенмеади'
        }
    },
    
    // Названия университетов
    universities: {
        ITU: 'Стамбульский технический университет',
        ITU: 'Стамбульский университет',
        BOUN: 'Университет Богазичи',
        METU: 'Ближневосточный технический университет',
        HU: 'Университет Хаджеттепе',
        ANU: 'Анкарский университет',
        DEU: 'Университет Докуз Эюль'
    },
    
    // Названия столбцов CSV
    csv: {
        fullAddress: 'Полный адрес',
        street: 'Улица',
        houseNumber: 'Номер дома',
        building: 'Здание',
        floor: 'Этаж',
        unit: 'Квартира',
        district: 'Район',
        province: 'Провинция',
        postalCode: 'Почтовый индекс',
        fullName: 'Полное имя',
        gender: 'Пол',
        age: 'Возраст',
        birthDate: 'Дата рождения',
        phone: 'Телефон',
        email: 'Электронная почта',
        cardType: 'Тип карты',
        cardNumber: 'Номер карты',
        idCardNumber: 'Номер удостоверения'
    }
};