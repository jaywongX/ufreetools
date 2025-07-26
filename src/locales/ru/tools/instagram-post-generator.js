export default {
  name: 'Генератор постов для Instagram',
  description: 'Создавайте реалистичные имитации постов Instagram с настраиваемым контентом, фоном и показателями вовлеченности',

  // Design Options
  designOptions: 'Параметры дизайна',

  // User Profile
  userProfile: {
    title: 'Настройки профиля',
    username: 'Имя пользователя',
    location: 'Местоположение',
    postedTime: 'Дата и время публикации',
    postDate: 'Точная дата',
    avatar: 'Аватар',
    uploadAvatar: 'Загрузить аватар',
    removeAvatar: 'Удалить',
    verifiedAccount: 'Статус аккаунта',
    isVerified: 'Подтвержденный аккаунт'
  },

  // Content Type
  contentType: 'Тип контента',

  contentTypes: {
    text: 'Только текст',
    image: 'Только изображение',
    mixed: 'Текст и изображение'
  },

  // Text Content
  textContent: 'Текстовый контент',

  postText: 'Текст поста',
  addHashtag: 'Добавить хэштег',
  mentionUser: 'Упомянуть пользователя',
  insertEmoji: 'Эмодзи',
  commonEmojis: 'Популярные эмодзи',
  recommendedHashtags: 'Рекомендуемые хэштеги',

  // Text Formatting
  fontFamily: 'Шрифт',

  fontSize: 'Размер шрифта',
  textAlign: 'Выравнивание текста',
  textColor: 'Цвет текста',

  // Background Image
  backgroundImage: 'Фоновое изображение',

  uploadImage: 'Загрузить изображение',
  dragAndDrop: 'Или перетащите файл',
  imageFormats: 'Форматы: PNG, JPG, GIF, до 2MB',

  // Background
  background: 'Фон',

  backgroundColor: 'Цвет фона',
  backgroundType: 'Тип фона',

  backgroundTypes: {
    solid: 'Однотонный',
    gradient: 'Градиент',
    pattern: 'Узор'
  },

  // Gradient Options
  gradientStartColor: 'Начальный цвет',

  gradientEndColor: 'Конечный цвет',
  gradientDirection: 'Направление',

  gradientDirections: {
    horizontal: 'Горизонтальное',
    vertical: 'Вертикальное',
    diagonal: 'Диагональное',
    diagonalReverse: 'Обратная диагональ'
  },

  // Pattern Options
  patternType: 'Тип узора',

  // Post Format
  postFormat: 'Формат поста',

  formats: {
    square: 'Квадрат',
    portrait: 'Портрет',
    landscape: 'Пейзаж'
  },

  // Engagement
  engagement: {
    title: 'Имитация вовлеченности',
    likeCount: 'Количество лайков',
    commentCount: 'Количество комментариев',
    viewCount: 'Количество просмотров',
    isLiked: 'Лайкнуто просматривающим',
    isSaved: 'Сохранено просматривающим',
    hasStory: 'Есть история',
    showComments: 'Показать комментарии',
    isTagged: 'Отмечены люди',
    isSponsored: 'Рекламный пост'
  },

  // Comments
  comments: {
    title: 'Имитация комментариев',
    addComment: 'Добавить комментарий',
    delete: 'Удалить',
    addForRealism: 'Добавьте имитацию комментариев для реалистичности',
    username: 'Имя пользователя',
    text: 'Текст комментария'
  },

  // Prompts
  prompts: {
    enterHashtag: 'Введите хэштег (без #)',
    enterUsername: 'Введите имя пользователя для упоминания',
    enterComment: 'Введите текст комментария',
    defaultComment: 'Выглядит отлично!',
    enterCommentUsername: 'Введите имя пользователя для комментария',
    justNow: 'Только что'
  },

  // Action Buttons
  resetDesign: 'Сбросить дизайн',

  // Preview and Export
  preview: 'Предпросмотр',

  export: 'Экспорт',
  downloadAsPNG: 'Скачать как PNG',
  downloadAsJPG: 'Скачать как JPG',
  copyToClipboard: 'Копировать в буфер',
  copied: 'Скопировано!',
  generating: 'Генерация изображения...'
};