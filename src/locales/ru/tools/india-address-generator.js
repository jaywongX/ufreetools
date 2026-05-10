export default {
   name: 'Генератор адресов Индии - Генерация реальных индийских адресов, информации о личности и контактных данных онлайн',
   description: 'Бесплатный онлайн-генератор адресов Индии, который создает индийские адреса реального формата, номера удостоверений личности, номера телефонов, номера кредитных карт и полные профили личности. Поддерживает фильтрацию по штатам, форматы экспорта JSON/CSV и работает полностью в браузере для защиты конфиденциальности.',
   inputTitle: 'Настройки генерации',
   outputTitle: 'Сгенерированные результаты',
   generateBtn: 'Сгенерировать данные',
   loadSampleBtn: 'Загрузить образец и сгенерировать',
   clearAll: 'Очистить все',
   noOutput: 'Результаты еще не сгенерированы',
   preview: 'Предварительный просмотр данных',
   
   // Географическая фильтрация
   locationTitle: 'Географическая фильтрация',
   selectRegion: 'Выбрать штат',
   allRegions: 'Все штаты',
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
   areaCode: 'Код области',
   email: 'Электронная почта',
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
   employmentFullTime: 'Полный день',
   employmentPartTime: 'Неполный день',
   
   // Удостоверение личности
   idCardTitle: 'Индийское удостоверение личности',
   idCardNumber: 'Номер удостоверения личности',
   aadhaarNumber: 'Номер Aadhaar',
   
   // Цифровой отпечаток
   fingerprintTitle: 'Цифровой отпечаток',
   os: 'Операционная система',
   osVersion: 'Версия системы',
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
   downloadSuccess: 'Успешно скачано',
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
   regionLabel: 'Штат',
   postalCode: 'Почтовый индекс',
   
   // Формат адреса
   addressNumber: 'Д.',
   addressFloor: 'Эт.',
   addressUnit: 'Кв.',
   commercialUnit: '(Коммерческая единица)',
   india: 'Индия',
   postOfficeBox: 'Почтовый ящик',
   studentDormitory: 'Студенческое общежитие',
   teachingBuilding: 'Учебный корпус',
   library: 'Библиотека',
   buildingUnit: 'Корпус',
   apartment: 'Квартира',
   
   // Названия регионов (штаты Индии)
   regions: {
       'Maharashtra': 'Махараштра',
       'Karnataka': 'Карнатака',
       'Tamil Nadu': 'Тамилнад',
       'Delhi': 'Дели',
       'Gujarat': 'Гуджарат',
       'Rajasthan': 'Раджастхан',
       'Uttar Pradesh': 'Уттар-Прадеш',
       'West Bengal': 'Западная Бенгалия',
       'Kerala': 'Керала',
       'Andhra Pradesh': 'Андхра-Прадеш',
       'Telangana': 'Телангана',
       'Madhya Pradesh': 'Мадхья-Прадеш',
       'Bihar': 'Бихар',
       'Punjab': 'Пенджаб',
       'Haryana': 'Харьяна',
       'Odisha': 'Одиша',
       'Chhattisgarh': 'Чхаттисгарх',
       'Jharkhand': 'Джаркханд',
       'Assam': 'Ассам',
       'Jammu and Kashmir': 'Джамму и Кашмир'
   },
   
   // Названия университетов
   universities: {
       'IIT': 'Индийский технологический институт',
       'IISc': 'Индийский институт науки',
       'IIM': 'Индийский институт менеджмента',
       'AIIMS': 'Всеиндийский институт медицинских наук',
       'JNU': 'Университет Джавахарлала Неру',
       'DU': 'Делийский университет',
       'BHU': 'Бенарасский индуистский университет',
       'Jadavpur': 'Университет Джадавпур',
       'Anna': 'Университет Анна',
       'Osmania': 'Университет Османия'
   },
   
   // Названия столбцов CSV
   csv: {
       fullAddress: 'Полный адрес',
       street: 'Улица',
       houseNumber: 'Номер дома',
       building: 'Здание',
       floor: 'Этаж',
       unit: 'Квартира',
       region: 'Штат',
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