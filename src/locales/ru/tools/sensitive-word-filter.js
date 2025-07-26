export default {
  name: 'Фильтр нежелательных слов',
  description: 'Обнаружение и фильтрация нежелательных слов в тексте, с поддержкой пользовательского словаря и правил фильтрации',

  input: {
    title: 'Входной текст',
    placeholder: 'Введите текст для проверки...',
    loadSample: 'Загрузить пример',
    clearInput: 'Очистить ввод',
    uploadFile: 'Загрузить текстовый файл'
  },

  output: {
    title: 'Отфильтрованный текст',
    original: 'Исходный текст',
    filtered: 'Отфильтрованный текст',
    statistics: 'Статистика',
    copyOutput: 'Копировать отфильтрованный текст',
    clearOutput: 'Очистить вывод',
    download: 'Скачать отфильтрованный текст'
  },

  options: {
    title: 'Настройки фильтрации',
    filterMode: 'Режим фильтрации',
    caseSensitive: 'Учитывать регистр',
    wholeWordOnly: 'Только целые слова',
    customReplacement: 'Пользовательская замена',
    replacementChar: 'Символ замены',
    highlightWords: 'Подсвечивать нежелательные слова',
    customDictionary: 'Пользовательский словарь',
    importDictionary: 'Импорт словаря',
    exportDictionary: 'Экспорт словаря'
  },

  filterModes: {
    replace: 'Замена нежелательных слов',
    highlight: 'Подсветка нежелательных слов',
    remove: 'Удаление нежелательных слов',
    detect: 'Только обнаружение'
  },

  dictionary: {
    title: 'Словарь',
    add: 'Добавить слово',
    remove: 'Удалить',
    clear: 'Очистить словарь',
    wordInput: 'Введите слово для добавления',
    categories: 'Категории',
    severity: 'Степень серьезности',
    bulkAdd: 'Массовое добавление',
    search: 'Поиск в словаре'
  },

  categories: {
    profanity: 'Ненормативная лексика',
    slurs: 'Оскорбления',
    adult: 'Контент для взрослых',
    offensive: 'Оскорбительный контент',
    violence: 'Насилие',
    discrimination: 'Дискриминация',
    personal: 'Персональные данные',
    custom: 'Пользовательская'
  },

  severityLevels: {
    low: 'Низкая',
    medium: 'Средняя',
    high: 'Высокая',
    critical: 'Критическая'
  },

  statistics: {
    totalWords: 'Всего слов',
    sensitiveWords: 'Нежелательных слов',
    uniqueSensitiveWords: 'Уникальных нежелательных слов',
    severityBreakdown: 'Распределение по степени серьезности',
    categoryBreakdown: 'Распределение по категориям',
    cleanlinessScore: 'Оценка чистоты текста'
  },

  filterOptions: {
    title: 'Режимы фильтрации',
    modes: {
      asterisk: 'Заменить на *',
      custom: 'Пользовательский символ замены',
      remove: 'Удалить нежелательные слова'
    },
    replaceChar: {
      title: 'Символ замены',
      placeholder: 'Введите символ замены'
    }
  },

  customWords: {
    title: 'Пользовательский словарь нежелательных слов',
    addWord: 'Добавить слово',
    addPrompt: 'Введите нежелательное слово для добавления:',
    removeWord: 'Удалить'
  },

  actions: {
    filter: 'Начать фильтрацию',
    reset: 'Сбросить',
    processing: 'Обработка...',
    clearAll: 'Очистить все',
    copyFiltered: 'Копировать отфильтрованный текст',
    downloadReport: 'Скачать отчет',
    resetSettings: 'Сбросить настройки'
  },

  results: {
    title: 'Результаты фильтрации',
    tabs: {
      filteredResult: 'Результат фильтрации',
      detectionReport: 'Отчет об обнаружении'
    },
    filteredText: {
      title: 'Отфильтрованный текст',
      copy: 'Копировать результат',
      empty: 'Нет результатов фильтрации'
    },
    statistics: {
      detectedCount: 'Количество обнаруженных нежелательных слов',
      retentionRate: 'Процент сохраненного текста',
      totalWords: 'Общее количество слов в тексте'
    },
    detectedWords: {
      title: 'Обнаруженные нежелательные слова',
      empty: 'Нежелательные слова не обнаружены'
    }
  },

  messages: {
    copied: 'Скопировано в буфер обмена',
    copyFailed: 'Не удалось скопировать, скопируйте вручную',
    noInput: 'Введите текст для фильтрации',
    inputTooLong: 'Текст слишком длинный',
    wordAdded: 'Слово добавлено в словарь нежелательных слов',
    wordExists: 'Это слово уже есть в словаре нежелательных слов',
    wordRemoved: 'Слово удалено из словаря нежелательных слов',
    filterSuccess: 'Текст успешно отфильтрован',
    noSensitiveWords: 'Нежелательные слова не обнаружены',
    dictionaryCleared: 'Словарь очищен',
    dictionaryImported: 'Словарь импортирован',
    dictionaryExported: 'Словарь экспортирован',
    emptyText: 'Введите текст для фильтрации'
  }
};