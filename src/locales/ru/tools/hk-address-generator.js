export default {
    name: 'Генератор адресов Гонконга - Создание реальных адресов Гонконга, информации об удостоверении личности и контактных данных онлайн',
    description: 'Бесплатный онлайн-генератор адресов Гонконга, который создает адреса Гонконга в реальном формате, номера удостоверений личности, телефоны, номера кредитных карт и полные профили удостоверений личности. Поддерживает фильтрацию по районам, экспорт в форматах JSON/CSV и полностью работает в браузере для защиты конфиденциальности.',
    inputTitle: 'Настройки генерации',
    outputTitle: 'Сгенерированные результаты',
    generateBtn: 'Сгенерировать данные',
    loadSampleBtn: 'Загрузить пример и сгенерировать',
    clearAll: 'Очистить все',
    noOutput: 'Результаты еще не сгенерированы',
    preview: 'Предварительный просмотр данных',
    
    // Географическая фильтрация
    locationTitle: 'Географическая фильтрация',
    selectDistrict: 'Выбрать район',
    selectArea: 'Выбрать область',
    allDistricts: 'Все районы',
    allAreas: 'Все области',
    postalCodeLabel: 'Почтовый индекс',
    validatePostalCode: 'Проверить почтовый индекс',
    
    // Типы адресов
    addressTypeTitle: 'Тип адреса',
    addressTypeResidential: 'Жилой адрес',
    addressTypeCommercial: 'Коммерческий адрес',
    addressTypeVirtual: 'Виртуальный почтовый ящик',
    addressTypeCampus: 'Университетский кампус',
    
    // Информация об удостоверении личности
    identityTitle: 'Информация об удостоверении личности',
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
    bankBin: 'Банковский BIN',
    
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
    idCardTitle: 'Удостоверение личности Гонконга',
    idCardNumber: 'Номер удостоверения личности',
    prefixLetter: 'Буква префикса',
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
    cookiePolicy: 'Политика cookie',
    
    // Параметры экспорта
    exportTitle: 'Формат экспорта',
    exportJson: 'Экспорт JSON',
    exportCsv: 'Экспорт CSV',
    exportIdCard: 'Создать изображение удостоверения личности',
    exportBusinessCard: 'Создать визитную карточку',
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
    unitLabel: 'Единица',
    districtLabel: 'Район',
    
    // Формат адреса
    addressNumber: '№',
    addressFloor: 'Этаж',
    addressUnit: 'Единица',
    commercialUnit: '(Коммерческая единица)',
    hongKong: 'Гонконг',
    postOfficeBox: 'Абонентский ящик',
    studentDormitory: 'Студенческое общежитие',
    teachingBuilding: 'Учебное здание',
    library: 'Библиотека',
    buildingUnit: 'Единица',
    
    // Предупреждающие сообщения
    idCardImageAlert: 'Для создания изображения удостоверения личности требуется реализация canvas',
    businessCardAlert: 'Для создания визитной карточки требуется реализация canvas',
    
    // Названия районов
    districts: {
        CW: 'Центральный и Западный',
        WAN: 'Ванчай',
        E: 'Восточный',
        S: 'Южный',
        YTM: 'Юа Тсим Монг',
        SSP: 'Шам Шуй По',
        KC: 'Город Ковлун',
        WTS: 'Вонг Тай Син',
        KT: 'Квун Тонг',
        TM: 'Туэн Мун',
        YL: 'Юэн Лонг',
        N: 'Северный',
        TP: 'Тай По',
        ST: 'Ша Тин',
        SK: 'Сай Кунг',
        TW: 'Цзюнь Ван',
        KW: 'Квай Цинг',
        IS: 'Острова'
    },
    
    // Названия областей
    areas: {
        CW: {
            central: 'Центральный',
            sheungWan: 'Шеунг Ван',
            saiWan: 'Сай Ван',
            midLevels: 'Средние уровни'
        },
        WAN: {
            wanChai: 'Ванчай',
            causewayBay: 'Каузвей Бей',
            happyValley: 'Хэппи Вэлли',
            taiHang: 'Тай Хан'
        },
        E: {
            northPoint: 'Норт Пойнт',
            quarryBay: 'Кво́рри Бэй',
            taiKooShing: 'Тай Ку Шинг',
            shauKeiWan: 'Шау Кей Ван',
            chaiWan: 'Чай Ван'
        },
        S: {
            repulseBay: 'Рипалс Бей',
            deepWaterBay: 'Дип Вотер Бей',
            stanley: 'Стэнли',
            aberdeen: 'Абердин',
            apLeiChau: 'Ап Лей Чау'
        },
        YTM: {
            tsimShaTsui: 'Цзы́мь Ша Цу́й',
            yauMaTei: 'Йау Ма Тэй',
            mongKok: 'Монг Кок',
            jordan: 'Джордан'
        },
        SSP: {
            shamShuiPo: 'Шам Шуй По',
            cheungShaWan: 'Чеунг Ша Ван',
            laiChiKok: 'Лай Чи Кок',
            shekKipMei: 'Шек Кип Мэй'
        },
        KC: {
            kowloonCity: 'Город Ковлун',
            toKwaWan: 'То Ква Ван',
            hungHom: 'Хунг Хом',
            hoManTin: 'Хо Ман Тин'
        },
        WTS: {
            wongTaiSin: 'Вонг Тай Син',
            diamondHill: 'Даймонд Хилл',
            sanPoKong: 'Сан По Конг',
            lokFu: 'Лок Фу'
        },
        KT: {
            kwunTong: 'Квун Тонг',
            lamTin: 'Лам Тин',
            ngauTauKok: 'Нау Тау Кок',
            kowloonBay: 'Ковлун Бей'
        },
        TM: {
            tuenMun: 'Туэн Мун',
            yuenLong: 'Юэн Лонг',
            tinShuiWai: 'Тин Шуй Вай',
            tsingShan: 'Цин Шань'
        },
        YL: {
            yuenLong: 'Юэн Лонг',
            tinShuiWai: 'Тин Шуй Вай',
            kamTin: 'Кам Тин',
            pingShan: 'Пин Шань'
        },
        N: {
            sheungShui: 'Шеунг Шуй',
            fanLing: 'Фан Лин',
            shaTauKok: 'Ша Тау Кок',
            taKuLing: 'Та Ку Лин'
        },
        TP: {
            taiPo: 'Тай По',
            taiPoMarket: 'Рынок Тай По',
            taiWo: 'Тай Во',
            lamTsuen: 'Лам Цзюнь'
        },
        ST: {
            shaTin: 'Ша Тин',
            taiWai: 'Тай Вай',
            maOnShan: 'Ма Он Шань',
            foTan: 'Фо Тан'
        },
        SK: {
            saiKung: 'Сай Кунг',
            tseungKwanO: 'Цзюн Кван О',
            hangHau: 'Ханг Хау',
            clearWaterBay: 'Клир Уотер Бей'
        },
        TW: {
            tsuenWan: 'Цзюнь Ван',
            kwaiChung: 'Квай Чунг',
            tsingYi: 'Цин И',
            shamTseng: 'Шам Цзэн'
        }
    },
    
    // Названия университетов
    universities: {
        HKU: 'Гонконгский университет',
        CUHK: 'Китайский университет Гонконга',
        HKUST: 'Гонконгский университет науки и технологий',
        PolyU: 'Гонконгский политехнический университет',
        CityU: 'Городской университет Гонконга'
    },
    
    // Названия столбцов CSV
    csv: {
        fullAddress: 'Полный адрес',
        street: 'Улица',
        houseNumber: 'Номер дома',
        building: 'Здание',
        floor: 'Этаж',
        unit: 'Единица',
        district: 'Район',
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