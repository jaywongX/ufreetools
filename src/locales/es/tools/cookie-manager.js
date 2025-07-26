export default {
  name: 'Administrador de Cookies',
  description: 'Ver, crear, editar y eliminar cookies del sitio web actual',

  // Etiquetas principales de pestañas
  currentCookies: 'Cookies Actuales',

  createCookie: 'Crear Cookie',
  importExport: 'Importar/Exportar',

  // Lista de cookies
  noCookies: 'No hay cookies para este sitio',

  cookieName: 'Nombre',
  cookieValue: 'Valor',
  cookieDomain: 'Dominio',
  cookiePath: 'Ruta',
  cookieExpires: 'Expira',
  cookieSecure: 'Seguro',
  cookieHttpOnly: 'Solo HTTP',
  cookieSameSite: 'Mismo Sitio',
  actions: 'Acciones',
  edit: 'Editar',
  delete: 'Eliminar',
  save: 'Guardar',
  cancel: 'Cancelar',
  refresh: 'Actualizar',

  // Formulario de creación/edición
  addCookie: 'Agregar Cookie',

  editCookie: 'Editar Cookie',
  required: 'Requerido',
  optional: 'Opcional',
  days: 'Días',
  hours: 'Horas',
  minutes: 'Minutos',
  cookieCreated: 'Cookie creada',
  cookieUpdated: 'Cookie actualizada',
  cookieDeleted: 'Cookie eliminada',
  createError: 'Error al crear la cookie',
  updateError: 'Error al actualizar la cookie',
  deleteError: 'Error al eliminar la cookie',

  // Importar/Exportar
  export: 'Exportar Cookies',

  import: 'Importar Cookies',
  exportAs: 'Exportar como',
  exportSuccess: 'Cookies exportadas',
  importSuccess: '{count} cookies importadas',
  importError: 'Error al importar las cookies',

  // Opciones de seguridad
  none: 'Ninguno',

  strict: 'Estricto',
  lax: 'Flexible',

  // Notas y sugerencias
  domainNote: 'Déjalo vacío para usar el dominio actual',

  pathNote: 'Por defecto es la ruta raíz "/"',
  expiresNote: 'Deja sin definir para una cookie de sesión',
  secureNote: 'Enviar solo mediante HTTPS',
  httpOnlyNote: 'Evita el acceso desde JavaScript',
  sameSiteNote: 'Controla las solicitudes entre sitios',

  // Formato de importación
  importFormat: 'Ejemplo de formato de importación:\nnombre=valor; expira=fecha; ruta=/; dominio=ejemplo.com; seguro; httpOnly; mismoSitio=estricto',

  jsonFormat: 'Formato JSON',
  textFormat: 'Formato de Texto',
  invalidFormat: 'Formato inválido'
};