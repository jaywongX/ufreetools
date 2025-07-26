export default {
  name: 'Менеджер Cookie',
  description: 'Просмотр, создание, редактирование и удаление Cookie текущего сайта',

  // Основные вкладки
  currentCookies: 'Текущие Cookie',

  createCookie: 'Создать Cookie',
  importExport: 'Импорт/Экспорт',

  // Список Cookie
  noCookies: 'На этом сайте нет Cookie',

  cookieName: 'Имя',
  cookieValue: 'Значение',
  cookieDomain: 'Домен',
  cookiePath: 'Путь',
  cookieExpires: 'Срок действия',
  cookieSecure: 'Безопасный (Secure)',
  cookieHttpOnly: 'HttpOnly',
  cookieSameSite: 'SameSite',
  actions: 'Действия',
  edit: 'Редактировать',
  delete: 'Удалить',
  save: 'Сохранить',
  cancel: 'Отмена',
  refresh: 'Обновить',

  // Форма создания/редактирования
  addCookie: 'Добавить Cookie',

  editCookie: 'Редактировать Cookie',
  required: 'Обязательное поле',
  optional: 'Необязательно',
  days: 'дней',
  hours: 'часов',
  minutes: 'минут',
  cookieCreated: 'Cookie создан',
  cookieUpdated: 'Cookie обновлён',
  cookieDeleted: 'Cookie удалён',
  createError: 'Ошибка при создании Cookie',
  updateError: 'Ошибка при обновлении Cookie',
  deleteError: 'Ошибка при удалении Cookie',

  // Импорт/Экспорт
  export: 'Экспорт Cookie',

  import: 'Импорт Cookie',
  exportAs: 'Экспортировать как',
  exportSuccess: 'Cookie экспортированы',
  importSuccess: 'Импортировано Cookie: {count}',
  importError: 'Ошибка при импорте Cookie',

  // Опции безопасности
  none: 'Нет',

  strict: 'Строгий',
  lax: 'Мягкий',

  // Подсказки и пояснения
  domainNote: 'Пусто — текущий домен',

  pathNote: 'По умолчанию корневой путь "/"',
  expiresNote: 'Без значения — сессионный Cookie',
  secureNote: 'Отправлять только по HTTPS',
  httpOnlyNote: 'JavaScript не имеет доступа',
  sameSiteNote: 'Контроль межсайтовых запросов',

  // Формат импорта
  importFormat: 'Пример формата импорта:\nname=value; expires=date; path=/; domain=example.com; secure; httpOnly; sameSite=strict',

  jsonFormat: 'Формат JSON',
  textFormat: 'Текстовый формат',
  invalidFormat: 'Недопустимый формат'
}; 