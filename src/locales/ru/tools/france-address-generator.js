export default {
    name: 'Генератор французских адресов - Генерируйте реальные французские адреса, информацию о личности и контактные данные онлайн',
    description: 'Бесплатный онлайн-генератор французских адресов, который создает реальные французские адреса, номера удостоверений личности, номера телефонов, номера кредитных карт и полные профили личности. Поддерживает фильтрацию по департаменту, форматы экспорта JSON/CSV и работает полностью в браузере для защиты конфиденциальности.',
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
    selectDepartment: 'Выберите департамент',
    allRegions: 'Все регионы',
    allDepartments: 'Все департаменты',
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
    idCardTitle: 'Французское удостоверение личности',
    idCardNumber: 'Номер удостоверения личности',
    nirNumber: 'Номер NIR',
    serialNumber: 'Серийный номер',
    checkKey: 'Проверочный ключ',
    
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
    departmentLabel: 'Департамент',
    regionLabel: 'Регион',
    postalCode: 'Почтовый индекс',
    
    // Формат адреса
    addressNumber: '№',
    addressFloor: 'Этаж',
    addressUnit: 'Кв.',
    commercialUnit: '(Коммерческое помещение)',
    france: 'Франция',
    postOfficeBox: 'Почтовый ящик',
    studentDormitory: 'Студенческое общежитие',
    teachingBuilding: 'Учебный корпус',
    library: 'Библиотека',
    buildingUnit: 'Корпус',
    apartment: 'Квартира',
    
    // Предупреждения
    idCardImageAlert: 'Генерация изображения удостоверения требует реализации canvas',
    businessCardAlert: 'Генерация визитных карточек требует реализации canvas',
    
    // Названия регионов (французские регионы)
    regions: {
        IDF: 'Иль-де-Франс',
        ARA: 'Овернь-Рона-Альпы',
        OCC: 'Окситания',
        NAQ: 'Новая Аквитания',
        PAC: 'Прованс-Альпы-Лазурный берег',
        HDF: 'О-де-Франс',
        BFC: 'Бургундия-Франш-Конте',
        NAC: 'Луара',
        PDL: 'Луара',
        BRE: 'Бретань',
        NOR: 'Нормандия',
        GUA: 'Гваделупа',
        MQ: 'Мартиника',
        GUY: 'Французская Гвиана',
        REU: 'Реюньон',
        COR: 'Корсика',
        ALO: 'Эльзас-Лотарингия',
        MP: 'Мец-Померания'
    },
    
    // Данные департаментов (пример региона Иль-де-Франс)
    departmentsData: {
        IDF: {
            paris: 'Париж',
            hautsDeSeine: 'О-де-Сен',
            seineSaintDenis: 'Сена-Сен-Дени',
            valDeMarne: 'Валь-де-Марн',
            yvelines: 'Ивелин',
            essonne: 'Эссонна',
            valDOise: 'Валь-д\'Уаз',
            seineEtMarne: 'Сена и Марна'
        },
        ARA: {
            rhone: 'Рона',
            loire: 'Луара',
            isere: 'Изер',
            ain: 'Эн',
            savoie: 'Савойя',
            hauteSavoie: 'Верхняя Савойя',
            allier: 'Алье',
            puyDeDome: 'Пюи-де-Дом'
        },
        OCC: {
            herault: 'Эро',
            gard: 'Гар',
            aude: 'Од',
            pyreneesOrientales: 'Восточные Пиренеи',
            tarn: 'Тарн',
            hauteGaronne: 'Верхняя Гаронна',
            gers: 'Жер',
            lotEtGaronne: 'Лот и Гаронна'
        },
        NAQ: {
            gironde: 'Жиронда',
            charenteMaritime: 'Приморская Шаранта',
            dordogne: 'Дордонь',
            landes: 'Ланды',
            vienne: 'Вьенна',
            hauteVienne: 'Верхняя Вьенна',
            charente: 'Шаранта',
            correze: 'Коррез'
        },
        PAC: {
            bouchesDuRhone: 'Буш-дю-Рон',
            alpesMaritimes: 'Приморские Альпы',
            var: 'Вар',
            vaucluse: 'Воклюз',
            alpesDeHauteProvence: 'Альпы Верхней Прованса',
            hautesAlpes: 'Верхние Альпы'
        },
        HDF: {
            nord: 'Нор',
            pasDeCalais: 'Па-де-Кале',
            somme: 'Сомма',
            aisne: 'Эна',
            oise: 'Уаза',
            aisne: 'Эна'
        }
    },
    
    // Названия университетов
    universities: {
        UP1: 'Париж 1 Пантеон-Сорбонна',
        UP2: 'Париж 2 Пантеон-Ассас',
        UP3: 'Париж 3 Новая Сорбонна',
        UP4: 'Париж 1 Пантеон-Сорбонна',
        UP5: 'Париж Декарт',
        UP6: 'Пьер и Мария Кюри',
        UP7: 'Париж Дидро',
        UP8: 'Париж 8 Венсен-Сен-Дени',
        UP9: 'Париж Дофин',
        UP10: 'Париж Нантерр',
        UP11: 'Париж-Сакле',
        UP12: 'Париж Восточный Кретей',
        UP13: 'Сорбонна Париж Север',
        ENS: 'Высшая нормальная школа',
        X: 'Политехническая школа'
    },
    
    // Названия столбцов CSV
    csv: {
        fullAddress: 'Полный адрес',
        street: 'Улица',
        houseNumber: 'Номер дома',
        building: 'Здание',
        floor: 'Этаж',
        unit: 'Квартира',
        department: 'Департамент',
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