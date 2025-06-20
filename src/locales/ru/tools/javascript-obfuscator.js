export default {
  name: 'Обфускатор JavaScript',
  description: 'Защитите ваш JavaScript-код с помощью различных методов обфускации',
  input: {
    title: 'Ввод JavaScript',
    placeholder: 'Введите или вставьте ваш JavaScript-код здесь',
    loadSample: 'Загрузить пример',
    clearInput: 'Очистить ввод',
    uploadFile: 'Загрузить JS-файл'
  },
  output: {
    title: 'Обфусцированный код',
    copied: 'Код скопирован в буфер обмена',
    download: 'Скачать обфусцированный код',
    copyOutput: 'Копировать код',
    clearOutput: 'Очистить вывод'
  },
  options: {
    title: 'Опции обфускации',
    compact: 'Сжать код',
    selfDefending: 'Самозащита',
    controlFlowFlattening: 'Выравнивание потока управления',
    controlFlowFlatteningThreshold: 'Порог выравнивания потока управления',
    deadCodeInjection: 'Вставка мертвого кода',
    deadCodeInjectionThreshold: 'Порог вставки мертвого кода',
    debugProtection: 'Защита от отладки',
    debugProtectionInterval: 'Интервал защиты от отладки',
    disableConsoleOutput: 'Отключить вывод в консоль',
    domainLock: 'Блокировка по домену',
    domainLockRedirectUrl: 'URL перенаправления при блокировке домена',
    identifierNamesGenerator: 'Генератор имен идентификаторов',
    identifiersPrefix: 'Префикс идентификаторов',
    renameGlobals: 'Переименовать глобальные переменные',
    reservedNames: 'Зарезервированные имена',
    reservedStrings: 'Зарезервированные строки',
    rotateStringArray: 'Вращение массива строк',
    seed: 'Сид',
    shuffleStringArray: 'Перемешать массив строк',
    sourceMap: 'Карта кода',
    sourceMapBaseUrl: 'Базовый URL карты кода',
    sourceMapFileName: 'Имя файла карты кода',
    splitStrings: 'Разделение строк',
    splitStringsChunkLength: 'Длина фрагмента при разделении строк',
    stringArray: 'Массив строк',
    stringArrayEncoding: 'Кодировка массива строк',
    stringArrayThreshold: 'Порог массива строк',
    target: 'Цель',
    transformObjectKeys: 'Преобразование ключей объекта',
    unicodeEscapeSequence: 'Unicode-последовательность экранирования'
  },
  presets: {
    title: 'Предустановки',
    low: 'Низкий уровень обфускации',
    medium: 'Средний уровень обфускации',
    high: 'Высокий уровень обфускации',
    custom: 'Пользовательский'
  },
  actions: {
    obfuscate: 'Обфусцировать',
    reset: 'Сбросить настройки',
    savePreset: 'Сохранить предустановку',
    loadPreset: 'Загрузить предустановку'
  },
  messages: {
    obfuscationSuccess: 'Код успешно обфусцирован',
    obfuscationFailed: 'Ошибка обфускации: {error}',
    emptyCode: 'Пожалуйста, введите JavaScript-код для обфускации',
    uploadSuccess: 'Файл успешно загружен',
    presetSaved: 'Предустановка сохранена',
    presetLoaded: 'Предустановка загружена'
  },
  help: {
    title: 'Помощь по опциям',
    stringArrayDesc: 'Перемещает строковые литералы в специальный массив и заменяет их вызовами массива',
    controlFlowDesc: 'Включает выравнивание потока управления, делая логику менее понятной',
    deadCodeDesc: 'Вставляет случайный мертвый код для запутывания злоумышленников',
    selfDefendingDesc: 'Делает вывод устойчивым к модификациям форматирования'
  }
}