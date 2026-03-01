export default {
    name: 'Генератор адресов Сингапура - Онлайн генерация реалистичных адресов Сингапура',
    description: 'Бесплатный онлайн генератор адресов Сингапура, создающий реалистичные адреса Сингапура, номера NRIC, номера телефонов, номера кредитных карт и полные профили идентичности. Фильтрация по регионам, экспорт JSON/CSV, работает локально для конфиденциальности.',
    inputTitle: 'Настройки генерации',
    outputTitle: 'Результаты генерации',
    generateBtn: 'Сгенерировать данные',
    loadSampleBtn: 'Загрузить пример и сгенерировать',
    clearAll: 'Очистить всё',
    noOutput: 'Нет результатов',
    preview: 'Предпросмотр данных',
    
    locationTitle: 'Фильтр местоположения',
    selectRegion: 'Выбрать регион',
    selectArea: 'Выбрать район',
    allRegions: 'Все регионы',
    allAreas: 'Все районы',
    postalCodeLabel: 'Почтовый индекс',
    
    addressTypeTitle: 'Тип адреса',
    addressTypeResidential: 'Жилой',
    addressTypeCommercial: 'Коммерческий',
    addressTypeHDB: 'Квартира HDB',
    addressTypeCondo: 'Частный кондоминиум',
    
    identityTitle: 'Идентификационная информация',
    fullName: 'Полное имя',
    gender: 'Пол',
    genderMale: 'Мужской',
    genderFemale: 'Женский',
    age: 'Возраст',
    birthDate: 'Дата рождения',
    race: 'Раса',
    raceChinese: 'Китаец',
    raceMalay: 'Малаец',
    raceIndian: 'Индиец',
    raceOthers: 'Другие',
    
    contactTitle: 'Контактная информация',
    phoneNumber: 'Номер телефона',
    areaCode: 'Код региона',
    email: 'Адрес электронной почты',
    tempEmail: 'Временная почта',
    
    creditCardTitle: 'Информация о кредитной карте',
    cardType: 'Тип карты',
    cardNumber: 'Номер карты',
    expiryDate: 'Срок действия',
    cvv: 'CVV',
    bankBin: 'Банковский BIN',
    
    careerTitle: 'Профиль карьеры',
    jobTitle: 'Должность',
    salary: 'Зарплата',
    companyName: 'Название компании',
    companySize: 'Размер компании',
    industry: 'Отрасль',
    employmentStatus: 'Статус занятости',
    employmentFullTime: 'Полная занятость',
    employmentPartTime: 'Частичная занятость',
    
    idCardTitle: 'Карта NRIC',
    idCardNumber: 'Номер NRIC',
    prefixLetter: 'Буква префикса',
    serialNumber: 'Серийный номер',
    checkLetter: 'Контрольная буква',
    
    exportTitle: 'Формат экспорта',
    exportJson: 'Экспорт JSON',
    exportCsv: 'Экспорт CSV',
    downloadBtn: 'Скачать',
    copyBtn: 'Копировать',
    viewDetails: 'Просмотр деталей',
    
    batchTitle: 'Пакетная генерация',
    quantityLabel: 'Количество',
    quantityPlaceholder: 'Введите количество (1-100)',
    
    generating: 'Генерация...',
    generated: 'Генерация завершена',
    copySuccess: 'Скопировано в буфер обмена',
    downloadSuccess: 'Загрузка завершена',
    invalidQuantity: 'Пожалуйста, введите число от 1 до 100',
    
    resultCount: 'Сгенерировано {count} записей',
    resultSummary: 'Сводка результатов',
    showAll: 'Показать все',
    collapse: 'Свернуть',
    
    generateOptionsTitle: 'Параметры генерации',
    
    recordLabel: 'Запись #{num}',
    addressLabel: 'Адрес',
    streetLabel: 'Улица',
    houseNumberLabel: 'Номер дома',
    buildingLabel: 'Здание',
    unitLabel: 'Единица',
    postalCodeLabel: 'Почтовый индекс',
    regionLabel: 'Регион',
    
    regions: {
        CR: 'Центральный регион',
        ER: 'Восточный регион',
        NR: 'Северный регион',
        NER: 'Северо-восточный регион',
        WR: 'Западный регион'
    },
    
    areas: {
        CR: {
            orchard: 'Орчард',
            riverValley: 'Ривер Вэлли',
            newton: 'Ньютон',
            tanglin: 'Танглин',
            bukitTimah: 'Букит Тимах',
            clementi: 'Клементи',
            queenstown: 'Квинстаун'
        },
        ER: {
            bedok: 'Бедок',
            changi: 'Чанги',
            pasirRis: 'Пасир Рис',
            tampines: 'Тампинес',
            payaLebar: 'Пайя Лебар'
        },
        NR: {
            angMoKio: 'Анг Мо Кио',
            bishan: 'Бишан',
            serangoon: 'Серангун',
            hougang: 'Хуганг',
            sengkang: 'Сенгканг',
            punggol: 'Пунггол'
        },
        NER: {
            hougang: 'Хуганг',
            punggol: 'Пунггол',
            seletar: 'Селетар',
            sengkang: 'Сенгканг',
            serangoon: 'Серангун'
        },
        WR: {
            jurongEast: 'Джуронг Восток',
            jurongWest: 'Джуронг Запад',
            bukitBatok: 'Букит Баток',
            choaChuKang: 'Чоа Чу Канг',
            woodlands: 'Вудлендс',
            sembawang: 'Сембаванг',
            yishun: 'Ишун'
        }
    },
    
    csv: {
        fullAddress: 'Полный адрес',
        street: 'Улица',
        houseNumber: 'Номер дома',
        building: 'Здание',
        postalCode: 'Почтовый индекс',
        fullName: 'Имя',
        gender: 'Пол',
        age: 'Возраст',
        birthDate: 'Дата рождения',
        phone: 'Телефон',
        email: 'Email',
        cardType: 'Тип карты',
        cardNumber: 'Номер карты',
        idCardNumber: 'Номер NRIC'
    }
};
