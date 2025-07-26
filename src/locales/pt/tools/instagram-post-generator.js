export default {
  name: 'Gerador de Postagens do Instagram',
  description: 'Crie simulações realistas de postagens do Instagram com conteúdo, fundo e dados de engajamento personalizáveis',

  // Opções de Design
  designOptions: 'Opções de Design',

  // Perfil do Usuário
  userProfile: {
    title: 'Configurações do Perfil',
    username: 'Nome de Usuário',
    location: 'Localização',
    postedTime: 'Data e Hora da Postagem',
    postDate: 'Data Detalhada',
    avatar: 'Foto de Perfil',
    uploadAvatar: 'Enviar Foto',
    removeAvatar: 'Remover',
    verifiedAccount: 'Status da Conta',
    isVerified: 'Conta Verificada'
  },

  // Tipo de Conteúdo
  contentType: 'Tipo de Conteúdo',

  contentTypes: {
    text: 'Apenas Texto',
    image: 'Apenas Imagem',
    mixed: 'Texto e Imagem'
  },

  // Conteúdo de Texto
  textContent: 'Conteúdo de Texto',

  postText: 'Texto da Postagem',
  addHashtag: 'Adicionar Hashtag',
  mentionUser: 'Mencionar Usuário',
  insertEmoji: 'Emoji',
  commonEmojis: 'Emojis Populares',
  recommendedHashtags: 'Hashtags Recomendadas',

  // Formatação de Texto
  fontFamily: 'Fonte',

  fontSize: 'Tamanho da Fonte',
  textAlign: 'Alinhamento',
  textColor: 'Cor do Texto',

  // Imagem de Fundo
  backgroundImage: 'Imagem de Fundo',

  uploadImage: 'Enviar Imagem',
  dragAndDrop: 'Ou arraste e solte',
  imageFormats: 'Formatos: PNG, JPG, GIF (até 2MB)',

  // Fundo
  background: 'Fundo',

  backgroundColor: 'Cor de Fundo',
  backgroundType: 'Tipo de Fundo',

  backgroundTypes: {
    solid: 'Sólido',
    gradient: 'Gradiente',
    pattern: 'Padrão'
  },

  // Opções de Gradiente
  gradientStartColor: 'Cor Inicial',

  gradientEndColor: 'Cor Final',
  gradientDirection: 'Direção',

  gradientDirections: {
    horizontal: 'Horizontal',
    vertical: 'Vertical',
    diagonal: 'Diagonal',
    diagonalReverse: 'Diagonal Invertida'
  },

  // Opções de Padrão
  patternType: 'Tipo de Padrão',

  // Formato da Postagem
  postFormat: 'Formato',

  formats: {
    square: 'Quadrado',
    portrait: 'Retrato',
    landscape: 'Paisagem'
  },

  // Engajamento
  engagement: {
    title: 'Simulação de Engajamento',
    likeCount: 'Curtidas',
    commentCount: 'Comentários',
    viewCount: 'Visualizações',
    isLiked: 'Curtido pelo Visualizador',
    isSaved: 'Salvo pelo Visualizador',
    hasStory: 'Tem Story',
    showComments: 'Mostrar Comentários',
    isTagged: 'Pessoas Marcadas',
    isSponsored: 'Patrocinado'
  },

  // Comentários
  comments: {
    title: 'Comentários Simulados',
    addComment: 'Adicionar Comentário',
    delete: 'Excluir',
    addForRealism: 'Adicione comentários para maior realismo',
    username: 'Nome de Usuário',
    text: 'Texto do Comentário'
  },

  // Prompts
  prompts: {
    enterHashtag: 'Digite a hashtag (sem #)',
    enterUsername: 'Digite o nome de usuário',
    enterComment: 'Digite o comentário',
    defaultComment: 'Ficou incrível!',
    enterCommentUsername: 'Nome para o comentário',
    justNow: 'Agora há pouco'
  },

  // Botões de Ação
  resetDesign: 'Redefinir',

  // Visualização e Exportação
  preview: 'Pré-visualizar',

  export: 'Exportar',
  downloadAsPNG: 'Baixar como PNG',
  downloadAsJPG: 'Baixar como JPG',
  copyToClipboard: 'Copiar',
  copied: 'Copiado!',
  generating: 'Gerando imagem...'
};