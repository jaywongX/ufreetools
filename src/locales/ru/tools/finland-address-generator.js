export default {
    name: 'Генератор финских адресов - Генерируйте реальные финские адреса, информацию о личности и контактные данные онлайн',
    description: 'Бесплатный онлайн-генератор финских адресов, который создает реальные финские адреса, номера удостоверений личности, номера телефонов, номера кредитных карт и полные профили личности. Поддерживает фильтрацию по региону, форматы экспорта JSON/CSV и работает полностью в браузере для защиты конфиденциальности.',
    inputTitle: 'Настройки генерации',
    outputTitle: 'Сгенерированные результаты',
    generateBtn: 'Сгенерировать данные',
    loadSampleBtn: 'Загрузить пример и сгенерировать',
    clearAll: 'Очистить все',
    noOutput: 'Результаты еще не сгенерированы',
    preview: 'Предпросмотр данных',
    
    // Географическая фильтрация
    locationTitle: 'Географическая фильтрация',
    selectRegion: 'Выберите регион',
    selectMunicipality: 'Выберите муниципалитет',
    allRegions: 'Все регионы',
    allMunicipalities: 'Все муниципалитеты',
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
    idCardTitle: 'Финское удостоверение личности',
    idCardNumber: 'Номер удостоверения личности',
    henkilötunnus: 'Личный идентификационный номер',
    serialNumber: 'Серийный номер',
    checkDigit: 'Проверочная цифра',
    
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
    exportIdCard: 'Сгенерировать изображение удостоверения',
    exportBusinessCard: 'Сгенерировать визитную карточку',
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
    municipalityLabel: 'Муниципалитет',
    regionLabel: 'Регион',
    postalCode: 'Почтовый индекс',
    
    // Формат адреса
    addressNumber: '№',
    addressFloor: 'Этаж',
    addressUnit: 'Кв.',
    commercialUnit: '(Коммерческое помещение)',
    finland: 'Финляндия',
    postOfficeBox: 'Почтовый ящик',
    studentDormitory: 'Студенческое общежитие',
    teachingBuilding: 'Учебный корпус',
    library: 'Библиотека',
    buildingUnit: 'Корпус',
    apartment: 'Квартира',
    
    // Предупреждения
    idCardImageAlert: 'Генерация изображения удостоверения требует реализации canvas',
    businessCardAlert: 'Генерация визитных карточек требует реализации canvas',
    
    // Названия регионов (финские регионы)
    regions: {
        Uusimaa: 'Уусимаа',
        Pirkanmaa: 'Пирканмаа',
        VarsinaisSuomi: 'Варсинайс-Суоми',
        PohjoisPohjanmaa: 'Пхойс-Пхойянмаа',
        KeskiSuomi: 'Кески-Суоми',
        PäijätHäme: 'Пяйят-Хяме',
        KantaHäme: 'Канта-Хяме',
        EteläKarjala: 'Этеля-Карьяла',
        PohjoisKarjala: 'Пхойс-Карьяла',
        PohjoisSavo: 'Пхойс-Саво',
        EteläSavo: 'Этеля-Саво',
        Kainuu: 'Кайнуу',
        KeskiPohjanmaa: 'Кески-Пхойянмаа',
        EteläPohjanmaa: 'Этеля-Пхойянмаа',
        Satakunta: 'Сатакунта',
        Ahvenanmaa: 'Ахвенанмаа',
        Lapland: 'Лаппи'
    },
    
    // Данные муниципалитетов (пример региона Уусимаа)
    municipalitiesData: {
        Uusimaa: {
            helsinki: 'Хельсинки',
            espoo: 'Эспоо',
            vantaa: 'Вантаа',
            kauniainen: 'Кауниайнен',
            järvenpää: 'Ярвенпяя',
            kerava: 'Керава',
            tuusula: 'Туусула',
            nurmijärvi: 'Нурмиярви',
            lyly: 'Лянси-Уусимаа',
            sipoo: 'Сиппоо'
        },
        Pirkanmaa: {
            tampere: 'Тампере',
            Nokia: 'Нокиа',
            ylöjärvi: 'Ылёярви',
            kangasala: 'Кангасала',
            lempäälä: 'Лемпяаля',
            pirkkala: 'Пирккала',
            orivesi: 'Оривеси',
            hängenkyrö: 'Хяменкюро'
        },
        VarsinaisSuomi: {
            turku: 'Турку',
            rauma: 'Раума',
            salo: 'Сало',
            pori: 'Пори',
            kaarina: 'Каарина',
            littoinen: 'Литтоинен',
            raisio: 'Райсио',
            naantali: 'Наантали'
        },
        KeskiSuomi: {
            jyväskylä: 'Ювяскюля',
            jyväskylänML: 'Ювяскюля млк',
            lahti: 'Лахти',
            hollola: 'Холлола',
            hrmeentti: 'Хямеенлинна',
            asikkala: 'Асиккала'
        },
        PäijätHäme: {
            lahti: 'Лахти',
            hollola: 'Холлола',
            hrmeentti: 'Хямеенлинна',
            asikkala: 'Асиккала',
            pertunmaa: 'Пертунмаа',
            hartola: 'Хартола'
        }
    },
    
    // Названия университетов
    universities: {
        HY: 'Хельсинкский университет',
        AALTO: 'Университет Аалто',
        TUNI: 'Университет Тампере',
        UTA: 'Университет Оулу',
        UTU: 'Университет Турку',
        JYU: 'Университет Ювяскюля',
        UEF: 'Университет Восточной Финляндии',
        TAMK: 'Тампере прикладной университет',
        HAAGA: 'Хаага-Хелиа прикладной университет',
        Laurea: 'Лауреа прикладной университет'
    },
    
    // Названия столбцов CSV
    csv: {
        fullAddress: 'Полный адрес',
        street: 'Улица',
        houseNumber: 'Номер дома',
        building: 'Здание',
        floor: 'Этаж',
        unit: 'Квартира',
        municipality: 'Муниципалитет',
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