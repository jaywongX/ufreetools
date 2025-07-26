export default {
  name: 'Генератор печатей',
  description: 'Онлайн создание различных изображений печатей, генерация корпоративных печатей, личных печатей и других цифровых печатей',

  // Основной интерфейс
  text: 'Текст печати',

  textPlaceholder: 'Введите текст по окружности',
  centerText: 'Центральный текст',
  centerTextPlaceholder: 'Введите текст или символ в центре',
  font: 'Выбор шрифта',
  shape: 'Форма печати',
  size: 'Размер печати',
  color: 'Цвет печати',
  generate: 'Создать печать',
  download: 'Скачать изображение',
  reset: 'Сбросить',
  preview: 'Предпросмотр печати',
  previewPlaceholder: 'Нажмите кнопку "Создать печать" для предпросмотра',
  bottomText: 'Нижний текст',
  bottomTextPlaceholder: 'Введите текст внизу',
  centerSymbol: 'Центральный символ',
  centerImage: 'Загрузить центральное изображение',
  template: 'Шаблон печати',
  centerSymbolSize: 'Размер центрального символа',
  exportFormat: 'Формат экспорта',
  lineWidth: 'Толщина линии',
  defaultSealText: 'ООО "Иванов и Ко"',
  defaultBottomText: 'Для договоров',
  width: 'Ширина',
  height: 'Высота',
  agingEffect: 'Эффект старения',
  colorHex: 'HEX-код цвета',
  customColor: 'Пользовательский цвет',

  // Опции шрифтов
  fonts: {
    simsun: 'SimSun',
    kaiti: 'KaiTi',
    simhei: 'SimHei',
    yahei: 'Microsoft YaHei',
    stxingkai: 'STXingkai',
    stzhongsong: 'STZhongsong',
    stfangsong: 'STFangsong',
    arial: 'Arial',
    times: 'Times New Roman',
    georgia: 'Georgia'
  },

  // Опции форм
  shapes: {
    circle: 'Круглая',
    ellipse: 'Овальная',
    square: 'Квадратная'
  },

  // Опции цветов
  colors: {
    red: 'Красный',
    darkRed: 'Темно-красный',
    blue: 'Синий',
    navy: 'Темно-синий',
    green: 'Зеленый',
    darkGreen: 'Темно-зеленый',
    purple: 'Фиолетовый',
    magenta: 'Пурпурный',
    brown: 'Коричневый',
    black: 'Черный',
    custom: 'Пользовательский цвет'
  },

  // Инструкция
  howToUse: 'Инструкция',

  instructions: {
    step1: 'Введите текст, который вы хотите отобразить вокруг печати, например название компании, имя человека и т.д.',
    step2: 'Выберите текст или изображение в центре печати, это может быть звездочка, логотип или другой символ',
    step3: 'Настройте форму, размер и цвет печати, просмотрите результат',
    step4: 'Когда результат вас устроит, нажмите кнопку "Скачать изображение" для сохранения вашей пользовательской печати'
  },

  templates: {
    custom: 'Пользовательская',
    company: 'Корпоративная печать',
    contract: 'Печать для договоров',
    finance: 'Финансовая печать',
    legal: 'Печать юридического лица',
    personal: 'Личная печать'
  }
};