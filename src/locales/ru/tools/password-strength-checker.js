export default {
  name: 'Анализатор надежности паролей',
  description: 'Проверка и анализ надежности паролей с детальными показателями безопасности',

  input: {
    title: 'Введите пароль для проверки',
    placeholder: 'Введите пароль здесь...',
    showPassword: 'Показать пароль',
    hidePassword: 'Скрыть пароль',
    clear: 'Очистить',
    generate: 'Сгенерировать пароль',
    check: 'Проверить надежность',
    empty: 'Введите пароль для оценки',
    disclaimer: 'Пароли не сохраняются и не отправляются на сервер'
  },

  results: {
    title: 'Оценка надежности пароля',
    strength: 'Надежность',
    score: 'Оценка',
    entropy: 'Энтропия',
    crackTime: 'Время взлома',
    very_weak: 'Очень слабый',
    weak: 'Слабый',
    fair: 'Средний',
    good: 'Хороший',
    strong: 'Надежный',
    very_strong: 'Очень надежный',
    feedback: 'Рекомендации',
    suggestions: 'Советы по улучшению',
    warnings: 'Обнаруженные проблемы',
    noWarnings: 'Проблем не обнаружено',
    noSuggestions: 'Нет рекомендаций'
  },

  details: {
    title: 'Детальный анализ',
    length: 'Длина пароля',
    charset: 'Разнообразие символов',
    patterns: 'Используемые шаблоны',
    uniqueChars: 'Уникальные символы',
    uppercase: 'Заглавные буквы',
    lowercase: 'Строчные буквы',
    numbers: 'Цифры',
    symbols: 'Спецсимволы',
    repetitions: 'Повторы',
    sequences: 'Последовательности',
    dictionary: 'Словарные слова',
    leaked: 'Утечка данных',
    reused: 'Повторное использование'
  },

  patterns: {
    dictionary: 'Словарное слово',
    sequence: 'Последовательность',
    repeat: 'Повтор символов',
    spatial: 'Клавиатурный шаблон',
    date: 'Дата',
    year: 'Год',
    common: 'Распространенный пароль',
    name: 'Имя',
    reversal: 'Обратное слово',
    leet: 'Leet-замена',
    predictable: 'Предсказуемый шаблон'
  },

  crackTimes: {
    instantly: 'Мгновенно',
    seconds: 'Секунды',
    minutes: 'Минуты',
    hours: 'Часы',
    days: 'Дни',
    months: 'Месяцы',
    years: 'Годы',
    centuries: 'Сотни лет',
    forever: 'Практически вечность'
  },

  suggestions: {
    addWords: 'Добавьте больше слов/символов',
    addSymbols: 'Добавьте спецсимволы',
    addNumbers: 'Добавьте цифры',
    upperLower: 'Смешивайте регистры',
    avoidPatterns: 'Избегайте клавиатурных последовательностей',
    avoidCommon: 'Избегайте распространенных паролей',
    avoidPersonal: 'Избегайте личной информации',
    avoidDictionary: 'Избегайте словарных слов',
    usePassphrase: 'Используйте словосочетания',
    increaseLonger: 'Увеличьте длину пароля',
    avoidSequence: 'Избегайте последовательностей',
    avoidRepeated: 'Избегайте повторов',
    avoidDates: 'Избегайте дат',
    addMoreChars: 'Минимум 12 символов',
    addTypes: 'Добавьте {types}',
    useManager: 'Используйте менеджер паролей'
  },

  generator: {
    title: 'Генератор паролей',
    length: 'Длина',
    options: 'Настройки',
    uppercase: 'Заглавные буквы',
    lowercase: 'Строчные буквы',
    numbers: 'Цифры',
    symbols: 'Спецсимволы',
    excludeSimilar: 'Исключить похожие символы',
    excludeAmbiguous: 'Исключить неоднозначные символы',
    generate: 'Сгенерировать',
    passphrase: 'Парольная фраза',
    wordCount: 'Количество слов',
    separator: 'Разделитель',
    capitalize: 'Заглавные буквы',
    includeNumber: 'Включить цифры',
    includeSymbol: 'Включить спецсимволы'
  },

  common: {
    copy: 'Копировать',
    save: 'Сохранить',
    clear: 'Очистить',
    refresh: 'Обновить',
    copied: 'Скопировано',
    saved: 'Сохранено',
    history: 'История',
    noHistory: 'История пуста',
    common: 'Распространенные'
  },

  breach: {
    title: 'Проверка утечек',
    description: 'Проверьте, не был ли ваш пароль скомпрометирован',
    disclaimer: 'Проверяется только хеш-часть пароля',
    checkButton: 'Проверить',
    safe: 'Не обнаружено в утечках',
    found: 'Обнаружен в {count} утечках!',
    warning: 'Этот пароль скомпрометирован!',
    checking: 'Проверка...'
  },

  settings: {
    title: 'Настройки',
    algorithm: 'Алгоритм оценки',
    history: 'Сохранять историю',
    clearHistory: 'Очистить историю',
    breachCheck: 'Проверка утечек',
    timeout: 'Таймаут очистки',
    timeoutDuration: 'Таймаут (сек)',
    clipboard: 'Очищать буфер',
    language: 'Язык'
  },

  score: {
    none: 'Нет оценки'
  },

  descriptions: {
    none: 'Не удалось оценить',
    veryWeak: 'Очень легко взломать',
    weak: 'Низкая безопасность',
    fair: 'Средняя безопасность',
    good: 'Высокая безопасность',
    veryStrong: 'Очень высокая безопасность'
  },

  length: {
    none: 'Нет',
    tooShort: 'Слишком короткий',
    acceptable: 'Приемлемый',
    good: 'Хороший',
    excellent: 'Отличный'
  },

  lengthMessage: {
    none: 'Введите пароль',
    needMore: 'Минимум {min} символов',
    better: 'Рекомендуется {min}+ символов',
    good: 'Хорошая длина',
    excellent: 'Отличная длина'
  },

  complexity: {
    none: 'Нет',
    veryLow: 'Очень низкая',
    fair: 'Средняя',
    good: 'Хорошая',
    excellent: 'Отличная'
  },

  issues: {
    tooShort: 'Слишком короткий (<8 символов)',
    noUppercase: 'Нет заглавных букв',
    noLowercase: 'Нет строчных букв',
    noNumbers: 'Нет цифр',
    noSymbols: 'Нет спецсимволов',
    hasSequence: 'Клавиатурные последовательности',
    hasRepeated: 'Повторяющиеся символы',
    commonPassword: 'Распространенный пароль'
  },

  characters: 'символов',

  tips: {
    title: 'Советы по безопасности',
    length: 'Минимум 12 символов',
    mix: 'Разные типы символов',
    avoid: 'Избегайте личной информации',
    unique: 'Уникальные пароли для каждого сайта',
    manager: 'Используйте менеджер паролей'
  }
};