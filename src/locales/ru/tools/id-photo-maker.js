export default {
    name: 'Генератор документных фотографий',
    description: 'Создание профессиональных документных фото с настраиваемым фоном и размерами',
    
    upload: {
      title: 'Загрузка изображения',
      dropzone: 'Перетащите изображение сюда или нажмите для выбора',
      or: 'или',
      camera: 'Сделать фото с камеры',
      constraints: 'Максимальный размер: 10MB. Форматы: JPG, PNG, WEBP',
      takePicture: 'Сделать фото',
      retake: 'Переснять'
    },
    
    editing: {
      title: 'Редактирование фото',
      faceDetection: 'Обнаружение лица',
      autoDetect: 'Автоматическое обнаружение',
      manualMode: 'Ручная настройка',
      zoom: 'Масштаб',
      rotate: 'Поворот',
      brightness: 'Яркость',
      contrast: 'Контраст',
      saturation: 'Насыщенность',
      filters: 'Фильтры'
    },
    
    background: {
      title: 'Фон',
      original: 'Оригинальный',
      white: 'Белый',
      blue: 'Синий',
      red: 'Красный',
      custom: 'Пользовательский цвет',
      transparent: 'Прозрачный'
    },
    
    size: {
      title: 'Размер фото',
      presets: 'Стандартные размеры',
      custom: 'Пользовательский размер',
      width: 'Ширина',
      height: 'Высота',
      unit: 'Единицы измерения',
      mm: 'Миллиметры',
      inches: 'Дюймы',
      pixels: 'Пиксели'
    },
    
    presets: {
      passport: 'Паспорт (35×45 мм)',
      visa: 'Виза (2×2 дюйма)',
      drivingLicense: 'Водительские права (2.5×3 дюйма)',
      idCard: 'ID карта (25×35 мм)',
      linkedin: 'LinkedIn (400×400 пикселей)',
      schengen: 'Шенгенская виза (35×45 мм)',
      chinese: 'Китайская виза (33×48 мм)',
      indian: 'Индийская виза (2×2 дюйма)'
    },
    
    output: {
      title: 'Результат',
      preview: 'Предпросмотр',
      grid: 'Несколько фото',
      columns: 'Колонки',
      rows: 'Ряды',
      spacing: 'Отступы',
      background: 'Фон страницы',
      paperSize: 'Размер бумаги',
      download: 'Скачать',
      print: 'Печать',
      downloadAs: 'Скачать как',
      jpg: 'JPG изображение',
      png: 'PNG изображение',
      pdf: 'PDF документ'
    },
    
    actions: {
      apply: 'Применить',
      reset: 'Сбросить',
      undo: 'Отменить',
      redo: 'Повторить',
      save: 'Сохранить фото',
      share: 'Поделиться'
    },
    
    messages: {
      noFaceDetected: 'Лицо не обнаружено. Попробуйте ручную настройку или другое фото.',
      multipleFacesDetected: 'Обнаружено несколько лиц. Используется самое крупное лицо.',
      processing: 'Обработка вашего фото...',
      downloadReady: 'Ваше фото готово к скачиванию',
      photoSaved: 'Фото успешно сохранено'
    }
  }