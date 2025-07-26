export default {
  name: 'Generador de Publicaciones de Instagram',
  description: 'Crear mockups realistas de publicaciones de Instagram con contenido personalizado, fondos y estadísticas de interacción',

  // Design Options
  designOptions: 'Opciones de Diseño',

  // User Profile
  userProfile: {
    title: 'Configuración del Perfil de Usuario',
    username: 'Nombre de Usuario',
    location: 'Ubicación',
    postedTime: 'Fecha y Hora de Publicación',
    postDate: 'Fecha de Publicación',
    avatar: 'Avatar',
    uploadAvatar: 'Subir Avatar',
    removeAvatar: 'Eliminar',
    verifiedAccount: 'Estado de la Cuenta',
    isVerified: 'Cuenta Verificada'
  },

  // Content Type
  contentType: 'Tipo de Contenido',

  contentTypes: {
    text: 'Solo Texto',
    image: 'Solo Imagen',
    mixed: 'Texto e Imagen'
  },

  // Text Content
  textContent: 'Contenido de Texto',

  postText: 'Texto de la Publicación',
  addHashtag: 'Agregar Hashtag',
  mentionUser: 'Mencionar Usuario',
  insertEmoji: 'Emoji',
  commonEmojis: 'Emojis Comunes',
  recommendedHashtags: 'Hashtags Recomendados',

  // Text Formatting
  fontFamily: 'Familia de Fuentes',

  fontSize: 'Tamaño de Fuente',
  textAlign: 'Alineación del Texto',
  textColor: 'Color del Texto',

  // Background Image
  backgroundImage: 'Imagen de Fondo',

  uploadImage: 'Subir una imagen',
  dragAndDrop: 'o arrastrar y soltar',
  imageFormats: 'PNG, JPG, GIF hasta 2MB',

  // Background
  background: 'Fondo',

  backgroundColor: 'Color de Fondo',
  backgroundType: 'Tipo de Fondo',

  backgroundTypes: {
    solid: 'Color Sólido',
    gradient: 'Degradado',
    pattern: 'Patrón'
  },

  // Gradient Options
  gradientStartColor: 'Color Inicial',

  gradientEndColor: 'Color Final',
  gradientDirection: 'Dirección',

  gradientDirections: {
    horizontal: 'Horizontal',
    vertical: 'Vertical',
    diagonal: 'Diagonal',
    diagonalReverse: 'Diagonal Inversa'
  },

  // Pattern Options
  patternType: 'Tipo de Patrón',

  // Post Format
  postFormat: 'Formato de Publicación',

  formats: {
    square: 'Cuadrado',
    portrait: 'Retrato',
    landscape: 'Paisaje'
  },

  // Engagement
  engagement: {
    title: 'Simulador de Interacciones',
    likeCount: 'Número de Me Gusta',
    commentCount: 'Número de Comentarios',
    viewCount: 'Número de Vistas',
    isLiked: 'Me gustó (por el espectador)',
    isSaved: 'Guardado (por el espectador)',
    hasStory: 'Tiene Historia de Instagram',
    showComments: 'Mostrar Comentarios',
    isTagged: 'Personas Etiquetadas',
    isSponsored: 'Contenido Patrocinado'
  },

  // Comments
  comments: {
    title: 'Comentarios Simulados',
    addComment: 'Agregar Comentario',
    delete: 'Eliminar',
    addForRealism: 'Agregar comentarios simulados para realismo',
    username: 'Nombre de Usuario',
    text: 'Comentario'
  },

  // Prompts
  prompts: {
    enterHashtag: 'Ingrese hashtag (sin #)',
    enterUsername: 'Ingrese nombre de usuario a mencionar',
    enterComment: 'Ingrese texto del comentario',
    defaultComment: '¡Se ve genial!',
    enterCommentUsername: 'Ingrese nombre de usuario del comentario',
    justNow: 'justo ahora'
  },

  // Action Buttons
  resetDesign: 'Restablecer Diseño',

  // Preview and Export
  preview: 'Vista Previa',

  export: 'Exportar',
  downloadAsPNG: 'Descargar como PNG',
  downloadAsJPG: 'Descargar como JPG',
  copyToClipboard: 'Copiar al Portapapeles',
  copied: '¡Copiado!',
  generating: 'Generando imagen...'
};