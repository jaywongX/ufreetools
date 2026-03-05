export default {
    name: 'Генератор адресов Великобритании - Онлайн генерация реальных адресов Великобритании, информации об идентичности и контактов',
    description: 'Бесплатный онлайн генератор адресов Великобритании. Генерирует адреса Великобритании в реальном формате, номера национального страхования (NINO), телефоны, номера кредитных карт и полные профили идентичности. Фильтрация по графству, экспорт в JSON/CSV, чистая фронтенд обработка для конфиденциальности.',
    inputTitle: 'Настройки генерации',
    outputTitle: 'Результаты',
    generateBtn: 'Сгенерировать данные',
    loadSampleBtn: 'Загрузить пример и сгенерировать',
    clearAll: 'Очистить все',
    noOutput: 'Нет результатов',
    preview: 'Предпросмотр',
    
    locationTitle: 'Географический фильтр',
    selectCounty: 'Выбрать графство',
    selectCity: 'Выбрать город',
    allCounties: 'Все графства',
    allCities: 'Все города',
    postcodeLabel: 'Почтовый индекс',
    validatePostcode: 'Проверить почтовый индекс',
    
    addressTypeTitle: 'Тип адреса',
    addressTypeResidential: 'Жилой адрес',
    addressTypeCommercial: 'Коммерческий адрес',
    addressTypePoBox: 'Абонентский ящик',
    addressTypeCampus: 'Университетский кампус',
    
    identityTitle: 'Информация об идентичности',
    fullName: 'Полное имя',
    gender: 'Пол',
    genderMale: 'Мужской',
    genderFemale: 'Женский',
    age: 'Возраст',
    birthDate: 'Дата рождения',
    zodiac: 'Знак зодиака',
    height: 'Рост',
    weight: 'Вес',
    
    contactTitle: 'Контактная информация',
    phoneNumber: 'Номер телефона',
    phoneType: 'Тип телефона',
    phoneTypeMobile: 'Мобильный',
    phoneTypeLandline: 'Стационарный',
    areaCode: 'Код региона',
    email: 'Email адрес',
    tempEmail: 'Временный email',
    
    creditCardTitle: 'Информация о кредитной карте',
    cardType: 'Тип карты',
    cardNumber: 'Номер карты',
    expiryDate: 'Срок действия',
    cvv: 'CVV',
    bankBin: 'Банковский BIN код',
    
    careerTitle: 'Профессиональный профиль',
    jobTitle: 'Должность',
    salary: 'Зарплата',
    companyName: 'Название компании',
    companySize: 'Размер компании',
    industry: 'Отрасль',
    employmentStatus: 'Статус занятости',
    employmentFullTime: 'Полная занятость',
    employmentPartTime: 'Частичная занятость',
    
    idCardTitle: 'Номер национального страхования (NINO)',
    idCardNumber: 'Номер национального страхования',
    prefixLetter: 'Буква префикса',
    serialNumber: 'Серийный номер',
    suffixLetter: 'Буква суффикса',
    
    fingerprintTitle: 'Цифровой отпечаток',
    os: 'Операционная система',
    osVersion: 'Версия системы',
    browser: 'Браузер',
    userAgent: 'User Agent',
    screenResolution: 'Разрешение экрана',
    timezone: 'Часовой пояс',
    guid: 'GUID',
    ipAddress: 'IP адрес',
    macAddress: 'MAC адрес',
    cookiePolicy: 'Политика cookies',
    
    exportTitle: 'Формат экспорта',
    exportJson: 'Экспорт в JSON',
    exportCsv: 'Экспорт в CSV',
    downloadBtn: 'Скачать',
    copyBtn: 'Копировать',
    viewDetails: 'Подробнее',
    
    batchTitle: 'Пакетная генерация',
    quantityLabel: 'Количество для генерации',
    quantityPlaceholder: 'Введите количество (1-100)',
    
    generating: 'Генерация...',
    generated: 'Генерация завершена',
    copySuccess: 'Скопировано в буфер обмена',
    downloadSuccess: 'Загрузка успешна',
    invalidQuantity: 'Введите число от 1 до 100',
    
    resultCount: 'Всего сгенерировано {count} записей',
    resultSummary: 'Сводка результатов',
    showAll: 'Показать все',
    collapse: 'Свернуть',
    
    generateOptionsTitle: 'Параметры генерации',
    
    recordLabel: 'Запись #{num}',
    addressLabel: 'Адрес',
    streetLabel: 'Улица',
    houseNumberLabel: 'Номер дома',
    buildingLabel: 'Здание',
    cityLabel: 'Город',
    countyLabel: 'Графство',
    
    counties: {
        LND: 'Большой Лондон',
        GRM: 'Большой Манчестер',
        MAN: 'Манчестер',
        BIR: 'Уэст-Мидлендс',
        LEE: 'Уэст-Йоркшир',
        SHE: 'Южный Йоркшир',
        LIV: 'Мерсисайд',
        BRS: 'Бристоль',
        NEW: 'Тайн и Уир',
        NOT: 'Ноттингемшир',
        EDB: 'Эдинбург',
        GLA: 'Глазго',
        CDF: 'Кардифф',
        BEL: 'Белфаст',
        SOU: 'Саутгемптон',
        POR: 'Плимут',
        BRI: 'Брайтон',
        CAM: 'Кембриджшир'
    },
    
    cities: {
        LND: {
            westminster: 'Вестминстер',
            kensington: 'Кенсингтон',
            chelsea: 'Челси',
            camden: 'Кэмден',
            islington: 'Ислингтон',
            hackney: 'Хакни',
            towerHamlets: 'Тауэр-Хамлетс',
            greenwich: 'Гринвич'
        },
        GRM: {
            manchester: 'Манчестер',
            salford: 'Солфорд',
            bolton: 'Болтон',
            bury: 'Бери',
            oldham: 'Олдем',
            rochdale: 'Рочдейл',
            stockport: 'Стокпорт',
            wigan: 'Уиган'
        },
        MAN: {
            manchesterCity: 'Манчестер Сити',
            trafford: 'Траффорд',
            tameside: 'Теймсайд',
            sale: 'Сейл'
        },
        BIR: {
            birmingham: 'Бирмингем',
            coventry: 'Ковентри',
            wolverhampton: 'Вулвергемптон',
            dudley: 'Дадли',
            walsall: 'Уолсолл',
            sandwell: 'Сандуэлл',
            solihull: 'Солихалл'
        },
        LEE: {
            leeds: 'Лидс',
            bradford: 'Брэдфорд',
            wakefield: 'Уэйкфилд',
            kirklees: 'Керклиз',
            calderdale: 'Калдердейл'
        },
        SHE: {
            sheffield: 'Шеффилд',
            rotherham: 'Ротерем',
            doncaster: 'Донкастер',
            barnsley: 'Барнсли'
        },
        LIV: {
            liverpool: 'Ливерпуль',
            knowsley: 'Ноусли',
            sefton: 'Сефтон',
            wirral: 'Уиррал',
            stHelens: 'Сент-Хеленс'
        },
        BRS: {
            bristol: 'Бристоль',
            southGloucestershire: 'Южный Глостершир',
            bath: 'Бат'
        },
        NEW: {
            newcastle: 'Ньюкасл',
            gateshead: 'Гейтсхед',
            sunderland: 'Сандерленд',
            durham: 'Дарем',
            northTyneside: 'Северный Тайнсайд',
            southTyneside: 'Южный Тайнсайд'
        },
        NOT: {
            nottingham: 'Ноттингем',
            derby: 'Дерби',
            leicester: 'Лестер',
            lincoln: 'Линкольн'
        },
        EDB: {
            edinburgh: 'Эдинбург',
            glasgow: 'Глазго',
            aberdeen: 'Абердин',
            dundee: 'Данди',
            inverness: 'Инвернесс'
        },
        GLA: {
            glasgowCity: 'Глазго Сити',
            paisley: 'Пейсли',
            motherwell: 'Мотеруэлл',
            hamilton: 'Гамильтон',
            eastKilbride: 'Ист-Килбрайд'
        },
        CDF: {
            cardiff: 'Кардифф',
            swansea: 'Суонси',
            newport: 'Ньюпорт',
            wrexham: 'Рексем',
            barry: 'Барри'
        },
        BEL: {
            belfast: 'Белфаст',
            derry: 'Дерри',
            lisburn: 'Лисберн',
            newry: 'Ньюри',
            bangor: 'Бангор'
        },
        SOU: {
            southampton: 'Саутгемптон',
            portsmouth: 'Портсмут',
            bournemouth: 'Борнмут',
            poole: 'Пул',
            winchester: 'Винчестер'
        },
        POR: {
            plymouth: 'Плимут',
            exeter: 'Эксетер',
            truro: 'Труро',
            bath: 'Бат',
            taunton: 'Тонтон'
        },
        BRI: {
            brighton: 'Брайтон',
            hove: 'Хоув',
            worthing: 'Уортинг',
            eastbourne: 'Истборн',
            hastings: 'Гастингс'
        },
        CAM: {
            cambridge: 'Кембридж',
            oxford: 'Оксфорд',
            peterborough: 'Питерборо',
            luton: 'Лутон',
            miltonKeynes: 'Милтон-Кинс'
        }
    },
    
    universities: {
        OXF: 'Оксфордский университет',
        CAM: 'Кембриджский университет',
        IMP: 'Имперский колледж Лондона',
        UCL: 'Университетский колледж Лондона',
        EDB: 'Эдинбургский университет'
    },
    
    studentHall: 'Студенческое общежитие',
    academicBuilding: 'Учебный корпус',
    library: 'Библиотека',
    
    csv: {
        fullAddress: 'Полный адрес',
        street: 'Улица',
        houseNumber: 'Номер дома',
        building: 'Здание',
        postcode: 'Почтовый индекс',
        city: 'Город',
        county: 'Графство',
        fullName: 'Имя',
        gender: 'Пол',
        age: 'Возраст',
        birthDate: 'Дата рождения',
        phone: 'Телефон',
        email: 'Email',
        cardType: 'Тип карты',
        cardNumber: 'Номер карты',
        idCardNumber: 'Номер национального страхования'
    }
};
