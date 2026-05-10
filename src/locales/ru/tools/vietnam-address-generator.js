export default {
    name: 'Генератор вьетнамских адресов - Генерируйте реальные вьетнамские адреса, информацию о личности и контактные данные онлайн',
    description: 'Бесплатный онлайн-генератор вьетнамских адресов, который создает реальные вьетнамские адреса, номера удостоверений личности, номера телефонов, номера кредитных карт и полные профили личности. Поддерживает фильтрацию по провинции, форматы экспорта JSON/CSV и работает полностью в браузере для защиты конфиденциальности.',
    inputTitle: 'Настройки генерации',
    outputTitle: 'Сгенерированные результаты',
    generateBtn: 'Сгенерировать данные',
    loadSampleBtn: 'Загрузить пример и сгенерировать',
    clearAll: 'Очистить все',
    noOutput: 'Результаты еще не сгенерированы',
    preview: 'Предпросмотр данных',
    
    // Географическая фильтрация
    locationTitle: 'Географическая фильтрация',
    selectProvince: 'Выберите провинцию/город',
    selectDistrict: 'Выберите район',
    allProvinces: 'Все провинции/города',
    allDistricts: 'Все районы',
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
    bankBin: 'БИН банка',
    
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
    idCardTitle: 'Вьетнамское удостоверение личности',
    idCardNumber: 'Номер удостоверения личности',
    cmndNumber: 'Номер CMND',
    cccdNumber: 'Номер CCCD',
    serialNumber: 'Серийный номер',
    
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
    exportJson: 'Экспорт JSON',
    exportCsv: 'Экспорт CSV',
    exportIdCard: 'Сгенерировать изображение удостоверения',
    exportBusinessCard: 'Сгенерировать визитку',
    downloadBtn: 'Скачать',
    copyBtn: 'Копировать',
    viewDetails: 'Подробнее',
    
    // Пакетная генерация
    batchTitle: 'Пакетная генерация',
    quantityLabel: 'Количество',
    quantityPlaceholder: 'Введите количество (1-100)',
    
    // Уведомления
    generating: 'Генерация...',
    generated: 'Генерация завершена',
    copySuccess: 'Скопировано в буфер обмена',
    downloadSuccess: 'Скачивание выполнено успешно',
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
    wardLabel: 'Район',
    districtLabel: 'Район',
    provinceLabel: 'Провинция/Город',
    postalCode: 'Почтовый индекс',
    
    // Формат адреса
    addressNumber: '№',
    addressFloor: 'Эт.',
    addressUnit: 'Кв.',
    commercialUnit: '(Коммерческое помещение)',
    vietnam: 'Вьетнам',
    postOfficeBox: 'Почтовый ящик',
    studentDormitory: 'Студенческое общежитие',
    teachingBuilding: 'Учебный корпус',
    library: 'Библиотека',
    buildingUnit: 'Корпус',
    apartment: 'Квартира',
    
    // Предупреждения
    idCardImageAlert: 'Для генерации изображения удостоверения требуется реализация canvas',
    businessCardAlert: 'Для генерации визитки требуется реализация canvas',
    
    // Названия провинций (провинции Вьетнама)
    provinces: {
        HN: 'Ханой',
        HCM: 'Хошимин',
        HP: 'Хайфон',
        DN: 'Дананг',
        CT: 'Кантхо',
        BH: 'Бария-Вунгтау',
        BD: 'Биньзянг',
        QN: 'Куангнинь',
        QG: 'Куангнам',
        KG: 'Камау',
        DT: 'Донгнай',
        HB: 'Ханам',
        TH: 'Тхайбинь',
        NB: 'Намдинь',
        VL: 'Виньлонг',
        TG: 'Шокчанг',
        NT: 'Ниньтхуан',
        PY: 'Фуйен',
        TV: 'Тэйнинь',
        BD: 'Биньдинь',
        HT: 'Хоабинь',
        TB: 'Туйенкуанг',
        TN: 'Тхайнгуен',
        LC: 'Лайтяу',
        YB: 'Йенбай',
        DB: 'Дьенбьен',
        LA: 'Лаокай',
        CB: 'Каобанг',
        LD: 'Ламдонг',
        DC: 'Даклак',
        QN: 'Куангбинь',
        QT: 'Куангчи',
        HT: 'Хатинь',
        NA: 'Нгеан',
        TT: 'Тханьхоа',
        NB: 'Ниньбинь',
        ST: 'Аньзянг',
        CT: 'Тьензянг',
        BP: 'Бентре',
        BL: 'Бакльеу',
        KG: 'Камау',
        CM: 'Камау'
    },
    
    // Данные районов (примеры для Ханоя и Хошимина)
    districtsData: {
        HN: {
            hoanKiem: 'Хойанкем',
            baDinh: 'Бадинь',
            dongDa: 'Донгда',
            haiBaTrung: 'Хайбатрунг',
            thanhXuan: 'Тханьшуан',
            cauGiay: 'Каузяй',
            hoangMai: 'Хоангмай',
            longBien: 'Лонгбьен',
            tayHo: 'Тайхо',
            bacTuLiem: 'Бактулием',
            namTuLiem: 'Намтулием',
            haDong: 'Хадонг'
        },
        HCM: {
            quan1: 'Район 1',
            quan3: 'Район 3',
            quan4: 'Район 4',
            quan5: 'Район 5',
            quan6: 'Район 6',
            quan7: 'Район 7',
            quan10: 'Район 10',
            quan11: 'Район 11',
            binhThanh: 'Биньтань',
            phuNhuan: 'Фунюан',
            tanBinh: 'Танбинь',
            goVap: 'Говаップ',
            binhChanh: 'Биньчань',
            thuDuc: 'Тhuduc'
        },
        DN: {
            haiChau: 'Хайтяу',
            thanhKhe: 'Тханькхе',
            sonTra: 'Сондра',
            NguHanhSon: 'Ngu Hanh Son',
            LienChieu: 'Lien Chieu',
            CamLe: 'Cam Le'
        },
        HP: {
            HongBang: 'Хонгбанг',
            LeChan: 'Летянь',
            NgoQuyen: 'Ngo Quyen',
            HaiAn: 'Хайан',
            KiAn: 'Киан'
        }
    },
    
    // Названия университетов
    universities: {
        HUST: 'Ханойский университет науки и технологий',
        VNU: 'Вьетнамский национальный университет',
        HANU: 'Ханойский национальный университет',
        HCMUS: 'Хошиминский национальный университет',
        RMIT: 'Университет РМУТ во Вьетнаме',
        FTU: 'Университет внешней торговли',
        NEU: 'Национальный университет экономики',
        HPU: 'Ханойский фармацевтический университет',
        PTIT: 'Институт почты, телекоммуникаций и технологий',
        FPT: 'Университет FPT'
    },
    
    // Названия столбцов CSV
    csv: {
        fullAddress: 'Полный адрес',
        street: 'Улица',
        houseNumber: 'Номер дома',
        building: 'Здание',
        floor: 'Этаж',
        unit: 'Квартира',
        ward: 'Район',
        district: 'Район',
        province: 'Провинция/Город',
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