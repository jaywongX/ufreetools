export default {
    name: 'Генератор случайных IP - Генерация IPv4/IPv6 адресов онлайн',
    description: 'Бесплатный онлайн генератор случайных IP, поддерживающий адреса IPv4 и IPv6, публичные и частные IP, фильтрацию по регионам, пакетную генерацию и множество форматов экспорта. Работает полностью на фронтенде для защиты конфиденциальности.',
    inputTitle: 'Конфигурация генерации',
    outputTitle: 'Результаты генерации',
    generateBtn: 'Сгенерировать IP-адреса',
    loadSampleBtn: 'Загрузить образец и сгенерировать',
    clearAll: 'Очистить всё',
    noOutput: 'Нет результатов',
    preview: 'Предпросмотр данных',
    
    ipVersionTitle: 'Версия IP',
    ipv4: 'IPv4',
    ipv6: 'IPv6',
    bothVersions: 'Обе версии',
    
    ipTypeTitle: 'Тип IP',
    ipTypePublic: 'Публичный IP',
    ipTypePrivate: 'Частный IP',
    ipTypeAny: 'Любой тип',
    
    regionTitle: 'Регион IP',
    allRegions: 'Все регионы',
    
    formatTitle: 'Формат вывода',
    formatPlain: 'Простой текст',
    formatList: 'Формат списка',
    
    optionsTitle: 'Дополнительные опции',
    includePort: 'Включить номер порта',
    includeSubnet: 'Включить маску подсети',
    includeGeo: 'Включить географическую информацию',
    
    batchTitle: 'Пакетная генерация',
    quantityLabel: 'Количество',
    quantityPlaceholder: 'Введите количество (1-1000)',
    
    generating: 'Генерация...',
    generated: 'Генерация завершена',
    copySuccess: 'Скопировано в буфер обмена',
    downloadSuccess: 'Загрузка успешна',
    invalidQuantity: 'Введите число от 1 до 1000',
    
    resultCount: 'Сгенерировано {count} записей',
    resultSummary: 'Сводка результатов',
    showAll: 'Показать всё',
    collapse: 'Свернуть',
    
    exportTitle: 'Формат экспорта',
    exportJson: 'Экспорт JSON',
    exportCsv: 'Экспорт CSV',
    exportTxt: 'Экспорт TXT',
    copyBtn: 'Копировать',
    downloadBtn: 'Скачать',
    viewDetails: 'Показать детали',
    
    regions: {
        US: 'США',
        EU: 'Европа',
        AS: 'Азия',
        CN: 'Китай',
        JP: 'Япония',
        KR: 'Южная Корея',
        AU: 'Австралия',
        BR: 'Бразилия',
        IN: 'Индия',
        RU: 'Россия'
    },
    
    csv: {
        ip: 'IP-адрес',
        version: 'Версия',
        port: 'Порт',
        subnet: 'Маска подсети',
        country: 'Страна',
        city: 'Город',
        isp: 'Провайдер'
    }
};
