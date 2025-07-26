export default {
  name: 'Codificador/Decodificador Base64',
  description: 'Converta rapidamente dados entre texto e codificação Base64',

  mode: {
    title: 'Modo',
    encode: 'Codificar',
    decode: 'Decodificar'
  },

  input: {
    title: 'Entrada',
    placeholder: 'Insira o texto a ser processado...',
    clear: 'Limpar',
    copy: 'Copiar',
    paste: 'Colar',
    upload: 'Enviar arquivo',
    dragDrop: 'Arraste e solte um arquivo aqui ou clique para enviar',
    textOption: 'Texto',
    fileOption: 'Arquivo',
    hexOption: 'Hex',
    selectFile: 'Selecionar arquivo',
  },

  output: {
    title: 'Saída',
    placeholder: 'O resultado será exibido aqui...',
    copy: 'Copiar',
    download: 'Baixar',
    empty: 'Nenhuma saída ainda'
  },

  options: {
    title: 'Opções',
    encoding: 'Codificação de caracteres',
    encodings: {
      utf8: 'UTF-8',
      ascii: 'ASCII',
      iso88591: 'ISO-8859-1',
      windows1252: 'Windows-1252'
    },
    urlSafe: 'Usar codificação segura para URL',
    autoDecode: 'Detectar e decodificar automaticamente',
    includeDataURI: 'Incluir prefixo Data URI',
    trimWhitespace: 'Remover espaços em branco',
    preserveLineBreaks: 'Preservar quebras de linha',
    addImageHeader:'Adicionar cabeçalho Base64 para imagens',
  },

  dataUri: {
    title: 'Data URI',
    mimeType: 'Tipo MIME',
    common: 'Tipos comuns',
    custom: 'Personalizado'
  },

  messages: {
    copied: 'Copiado para a área de transferência',
    copyFailed: 'Falha ao copiar',
    pasteFailed: 'Falha ao colar',
    uploadSuccess: 'Arquivo enviado com sucesso',
    uploadFailed: 'Falha ao enviar arquivo',
    readFailed: 'Falha ao ler arquivo',
    invalidBase64: 'Codificação Base64 inválida',
    invalidHex: 'Codificação Hex inválida',
    fileTooLarge: 'Arquivo muito grande, faça o download para visualizar',
    processError: 'Ocorreu um erro durante o processamento',
    encodeSuccess: 'Codificação bem-sucedida',
    decodeSuccess: 'Decodificação bem-sucedida',
    processing: 'Processando...'
  },

  mimeTypes: {
    'text/plain': 'Texto',
    'application/json': 'JSON',
    'text/html': 'HTML',
    'text/css': 'CSS',
    'text/javascript': 'JavaScript',
    'application/xml': 'XML',
    'image/jpeg': 'Imagem JPEG',
    'image/png': 'Imagem PNG',
    'image/gif': 'Imagem GIF',
    'image/svg+xml': 'Imagem SVG',
    'application/pdf': 'Documento PDF'
  },

  tips: {
    title: 'Dicas de uso',
    tip1: 'A codificação Base64 pode converter qualquer dado binário em formato de texto puro',
    tip2: 'Use a opção segura para URL para remover os caracteres "+" e "/" do Base64 padrão',
    tip3: 'Use o prefixo Data URI para usar dados codificados diretamente em tags HTML como img',
    tip4: 'Arquivos grandes consomem mais recursos, recomenda-se limitar a 2MB',
    tip5: 'Alguns caracteres especiais podem exigir codificação específica para processamento correto'
  },

  about: {
    title: 'Sobre codificação/decodificação Base64',
    description: 'Base64 é um método de representação de dados binários usando 64 caracteres imprimíveis, comumente usado para transmitir, armazenar e representar dados binários em contextos de texto.'
  },

  features: {
    title: 'Funcionalidades',
    multiInput: 'Suporte a três métodos de entrada: texto, Hex e arquivo',
    charsetSupport: 'Suporte a decodificação UTF-8 e GBK',
    imagePreview: 'Visualização de imagens (arquivos menores que 1MB)',
    fileDownload: 'Download em vários formatos (PDF padrão)',
    chunkProcessing: 'Processamento em blocos para arquivos grandes com barra de progresso',
    autoDetect: 'Reconhecimento automático de tipos de imagem'
  },

  notes: {
    title: 'Observações importantes',
    sizeIncrease: 'A codificação Base64 aumenta o tamanho dos dados em cerca de 33%',
    chunkProcessing: 'Arquivos grandes usam processamento em blocos com barra de progresso em duas etapas',
    largeFiles: 'Arquivos acima de 10MB só podem ser visualizados via download',
    fileInput: 'Para arquivos grandes, recomenda-se usar a opção de envio por arquivo'
  },

  fileTypeLabel: {
    pdf: 'Documento PDF',
    txt: 'Arquivo de texto',
    jpg: 'Imagem JPG', 
    png: 'Imagem PNG', 
    zip: 'Arquivo ZIP',
    bin: 'Arquivo binário',
  }
};