export default {
    name: 'Генератор адресов Мексики - Создание реальных мексиканских адресов, информации о личности и контактных данных онлайн',
    description: 'Бесплатный онлайн-генератор мексиканских адресов, создающий адреса реального формата, номера удостоверений личности RFC/CURP, номера телефонов, номера кредитных карт и полные профили личности. Поддерживает фильтрацию по штату, форматы экспорта JSON/CSV и работает полностью в браузере для защиты конфиденциальности.',
    inputTitle: 'Настройки генерации',
    outputTitle: 'Сгенерированные результаты',
    generateBtn: 'Сгенерировать данные',
    loadSampleBtn: 'Загрузить образец и сгенерировать',
    clearAll: 'Очистить все',
    noOutput: 'Результатов пока нет',
    preview: 'Предварительный просмотр данных',
    
    // Географическая фильтрация
    locationTitle: 'Географическая фильтрация',
    selectState: 'Выбрать штат',
    selectCity: 'Выбрать город',
    allStates: 'Все штаты',
    allCities: 'Все города',
    
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
    employmentFullTime: 'Полный рабочий день',
    employmentPartTime: 'Неполный рабочий день',
    
    // Удостоверение личности
    idCardTitle: 'Удостоверение личности Мексики',
    rfcLabel: 'RFC (Федеральный реестр налогоплательщиков)',
    curpLabel: 'CURP (Уникальный код реестра населения)',
    
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
    neighborhoodLabel: 'Район',
    postalCodeLabel: 'Почтовый индекс',
    cityLabel: 'Город',
    stateLabel: 'Штат',
    
    // Формат адреса
    commercialAddress: '(Коммерческий адрес)',
    postOfficeBox: 'Почтовый ящик',
    studentDormitory: 'Студенческое общежитие',
    teachingBuilding: 'Учебный корпус',
    library: 'Библиотека',
    
    // Штаты Мексики (32 штата)
    states: {
        AGS: 'Агваскальентес',
        BCN: 'Нижняя Калифорния',
        BCS: 'Южная Нижняя Калифорния',
        CAMP: 'Кампече',
        COAH: 'Коауила',
        COL: 'Колима',
        CHIS: 'Чьяпас',
        CHIH: 'Чиуауа',
        CDMX: 'Мехико',
        DUR: 'Дуранго',
        GTO: 'Гуанахуато',
        GRO: 'Герреро',
        HGO: 'Идальго',
        JAL: 'Халиско',
        MEX: 'Штат Мехико',
        MIC: 'Мичоакан',
        MOR: 'Морелос',
        NAY: 'Наярит',
        NLE: 'Нuevo-Леон',
        OAX: 'Оахака',
        PUE: 'Пуэбло',
        QRO: 'Керетаро',
        QROO: 'Кинтана-Роо',
        SLP: 'Сан-Луис-Потоси',
        SIN: 'Синалоа',
        SON: 'Сонора',
        TAB: 'Табаско',
        TAM: 'Тамаулипас',
        TLAX: 'Тласкала',
        VER: 'Веракрус',
        YUC: 'Юкатан',
        ZAC: 'Сакатекас'
    },
    
    // Названия университетов
    universities: {
        UNAM: 'Национальный автономный университет Мексики',
        IPN: 'Национальный политехнический институт',
        UdeG: 'Университет Гуадалахары',
        UANL: 'Автономный университет Нuevo-Леона'
    },
    
    // Названия столбцов CSV
    csv: {
        fullAddress: 'Полный адрес',
        street: 'Улица',
        houseNumber: 'Номер дома',
        neighborhood: 'Район',
        postalCode: 'Почтовый индекс',
        city: 'Город',
        state: 'Штат',
        fullName: 'Полное имя',
        gender: 'Пол',
        age: 'Возраст',
        birthDate: 'Дата рождения',
        phone: 'Телефон',
        email: 'Электронная почта',
        cardType: 'Тип карты',
        cardNumber: 'Номер карты',
        rfc: 'RFC',
        curp: 'CURP'
    }
};