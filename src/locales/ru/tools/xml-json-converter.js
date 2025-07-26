export default {
  name: 'Конвертер XML/JSON',
  title: 'Преобразование XML ↔ JSON',
  description: 'Двунаправленное преобразование между форматами XML и JSON с поддержкой расширенных настроек',

  conversion: {
    direction: 'Направление преобразования',
    xmlToJson: 'XML в JSON',
    jsonToXml: 'JSON в XML'
  },

  options: {
    title: 'Настройки преобразования',
    show: 'Показать настройки',
    hide: 'Скрыть настройки',
    
    xmlToJson: {
      ignoreAttributes: 'Игнорировать атрибуты',
      ignoreAttributesHint: 'Отключите, чтобы сохранить XML-атрибуты в JSON',
      parseAttributeValue: 'Парсить значения атрибутов',
      parseAttributeValueHint: 'Преобразовывать числа, булевы значения в атрибутах в соответствующие типы',
      ignoreDeclaration: 'Игнорировать XML-декларацию',
      ignoreDeclarationHint: 'Пропускать <?xml version="1.0"?> и подобные',
      parseTagValue: 'Парсить значения тегов',
      parseTagValueHint: 'Преобразовывать содержимое тегов в числа, булевы значения и т.д.',
      trimValues: 'Обрезать пробелы',
      attributePrefix: 'Префикс атрибутов',
      attributePrefixPlaceholder: 'Например: @, _, attr_',
      attributePrefixHint: 'Префикс для обозначения XML-атрибутов в JSON (по умолчанию @)'
    },
    
    jsonToXml: {
      format: 'Форматировать XML',
      formatHint: 'Добавлять отступы и переносы для читаемости',
      indentBy: 'Добавить отступы (2 пробела)',
      addDeclaration: 'Добавить XML-декларацию',
      addDeclarationHint: 'Добавлять <?xml version="1.0" encoding="UTF-8"?> в начало',
      rootName: 'Имя корневого элемента (опционально)',
      rootNamePlaceholder: 'Например: root, data, xml',
      rootNameHint: 'Используется, если JSON содержит несколько ключей верхнего уровня',
      attributePrefix: 'Распознавание префикса атрибутов',
      attributePrefixPlaceholder: 'Например: @, _, attr_',
      attributePrefixHint: 'Префикс для распознавания XML-атрибутов в JSON (по умолчанию @)'
    }
  },

  buttons: {
    convert: 'Конвертировать',
    swap: 'Поменять местами',
    clear: 'Очистить',
    loadExample: 'Загрузить пример'
  },

  input: {
    xmlInput: 'Ввод XML',
    jsonInput: 'Ввод JSON',
    placeholder: {
      xml: 'Введите XML...',
      json: 'Введите JSON...'
    }
  },

  output: {
    xmlResult: 'Результат XML',
    jsonResult: 'Результат JSON',
    copy: 'Копировать'
  },

  stats: {
    title: 'Статистика преобразования',
    inputSize: 'Размер ввода',
    outputSize: 'Размер вывода',
    sizeChange: 'Изменение размера',
    conversionTime: 'Время преобразования'
  },

  help: {
    title: 'Справка',
    show: 'Показать справку',
    hide: 'Скрыть справку',
    about: {
      title: 'Описание форматов XML и JSON',
      content: 'XML (eXtensible Markup Language) - расширяемый язык разметки, широко используемый для конфигураций, обмена данными и веб-сервисов. JSON (JavaScript Object Notation) - легковесный формат обмена данными, удобный для чтения и записи как человеком, так и машиной.'
    },
    xmlToJson: {
      title: 'Особенности преобразования XML в JSON',
      items: [
        'XML-атрибуты в JSON по умолчанию становятся ключами с префиксом @',
        'Текстовое содержимое XML в JSON сохраняется под ключом #text',
        'Опция "Парсить значения тегов" преобразует числа, булевы значения в соответствующие JSON-типы',
        'Повторяющиеся XML-теги автоматически становятся массивами в JSON'
      ]
    },
    jsonToXml: {
      title: 'Особенности преобразования JSON в XML',
      items: [
        'Ключи JSON с префиксом @ рассматриваются как XML-атрибуты',
        'JSON-массивы создают повторяющиеся XML-теги',
        'Сложные вложенные JSON-объекты формируют иерархическую XML-структуру',
        'JSON с несколькими ключами верхнего уровня без указания корневого элемента создаст несколько XML-корней'
      ]
    }
  },

  errors: {
    xmlParse: 'Ошибка парсинга XML: {0}',
    jsonParse: 'Ошибка парсинга JSON: {0}',
    xmlGeneration: 'Ошибка генерации XML: {0}',
    emptyObject: 'JSON-объект пуст или невалиден',
    conversion: 'Ошибка преобразования: {0}'
  },

  alerts: {
    copied: 'Скопировано в буфер обмена'
  }
};