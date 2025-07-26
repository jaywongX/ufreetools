export default {
  name: 'Gerenciador de Cookies',
  description: 'Visualize, crie, edite e exclua cookies do site atual',

  // Abas principais
  currentCookies: 'Cookies Atuais',

  createCookie: 'Criar Cookie',
  importExport: 'Importar/Exportar',

  // Lista de cookies
  noCookies: 'Nenhum cookie encontrado para este site',

  cookieName: 'Nome',
  cookieValue: 'Valor',
  cookieDomain: 'Domínio',
  cookiePath: 'Caminho',
  cookieExpires: 'Expiração',
  cookieSecure: 'Seguro (Secure)',
  cookieHttpOnly: 'HttpOnly',
  cookieSameSite: 'SameSite',
  actions: 'Ações',
  edit: 'Editar',
  delete: 'Excluir',
  save: 'Salvar',
  cancel: 'Cancelar',
  refresh: 'Atualizar',

  // Formulário de criação/edição
  addCookie: 'Adicionar Cookie',

  editCookie: 'Editar Cookie',
  required: 'Obrigatório',
  optional: 'Opcional',
  days: 'dias',
  hours: 'horas',
  minutes: 'minutos',
  cookieCreated: 'Cookie criado com sucesso',
  cookieUpdated: 'Cookie atualizado',
  cookieDeleted: 'Cookie excluído',
  createError: 'Erro ao criar cookie',
  updateError: 'Erro ao atualizar cookie',
  deleteError: 'Erro ao excluir cookie',

  // Importar/Exportar
  export: 'Exportar Cookies',

  import: 'Importar Cookies',
  exportAs: 'Exportar como',
  exportSuccess: 'Cookies exportados',
  importSuccess: '{count} cookies importados',
  importError: 'Erro ao importar cookies',

  // Opções de segurança
  none: 'Nenhum',

  strict: 'Estrito',
  lax: 'Flexível',

  // Notas e explicações
  domainNote: 'Deixe em branco para usar o domínio atual',

  pathNote: 'Padrão: caminho raiz "/"',
  expiresNote: 'Deixe em branco para cookie de sessão',
  secureNote: 'Enviado apenas via HTTPS',
  httpOnlyNote: 'Inacessível via JavaScript',
  sameSiteNote: 'Controle de requisições entre sites',

  // Formatos de importação
  importFormat: 'Formato de importação:\nnome=valor; expires=data; path=/; domain=exemplo.com; secure; httpOnly; sameSite=strict',

  jsonFormat: 'Formato JSON',
  textFormat: 'Formato texto',
  invalidFormat: 'Formato inválido'
};