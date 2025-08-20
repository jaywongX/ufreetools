export default {
  name: 'Visualizador de Nuvem de Pontos LIDAR - Ferramenta online de visualização 3D',
  description:
    'Visualizador LIDAR online gratuito, compatível com os formatos LAS, XYZ, PLY e PCD. Oferece visualização 3D, múltiplos modos de coloração, navegação interativa e recursos de análise de dados',
  inputTitle: 'Arquivo de nuvem de pontos (entrada)',
  outputTitle: 'Visualização 3D da nuvem de pontos',
  dragTip: 'Arraste e solte um arquivo de nuvem de pontos aqui ou clique para enviar',
  supported: 'Formatos suportados: LAS, XYZ, PLY, PCD, TXT',
  loadFromUrl: 'Carregar de URL',
  load: 'Carregar',
  loadSample: 'Carregar dados de exemplo',
  coloringMode: 'Modo de coloração',
  elevation: 'Coloração por elevação',
  intensity: 'Coloração por intensidade',
  classification: 'Coloração por classificação',
  rgb: 'Coloração RGB',
  pointSize: 'Tamanho dos pontos',
  pointDensity: 'Densidade de pontos',
  enableAnimation: 'Ativar animação',
  showTrajectory: 'Mostrar trajetória',
  showSensorData: 'Mostrar dados do sensor',
  fileInfo: 'Informações do arquivo',
  fileName: 'Nome do arquivo',
  pointCount: 'Quantidade de pontos',
  fileSize: 'Tamanho do arquivo',
  bounds: 'Limites',
  resetView: 'Redefinir visão',
  exportImage: 'Exportar imagem',
  loading: 'Carregando...',
  noData: 'Envie um arquivo de nuvem de pontos ou carregue dados de exemplo',
  controls: {
    rotate: 'Arrastar com o mouse: girar visão',
    zoom: 'Roda do mouse: zoom',
    pan: 'Shift+arrastar: mover visão'
  },
  stats: {
    visible: 'Pontos visíveis',
    total: 'Total de pontos',
    points: 'pontos'
  },
  metadata: {
    title: 'Metadados LAS',
    systemId: 'Identificador do sistema',
    software: 'Software gerador',
    version: 'Versão LAS',
    creationDate: 'Data de criação',
    pointFormat: 'Formato de dados dos pontos',
    vlrCount: 'Quantidade de VLR',
    returnStats: 'Estatísticas de retornos',
    extent: 'Extensão espacial'
  },
  error: {
    loadFailed: 'Falha ao carregar o arquivo de nuvem de pontos. Verifique o formato do arquivo',
    urlLoadFailed: 'Falha ao carregar a partir da URL. Verifique o endereço'
  },
  disclaimer: {
    title: 'Notas técnicas',
    content:
      'Esta ferramenta usa WebGL para visualização 3D no navegador. Todo o processamento de dados é feito localmente para garantir a segurança dos dados.',
    formats:
      'Formatos suportados: LAS (padrão LIDAR), XYZ (nuvem de pontos ASCII), PLY (formato de arquivo poligonal), PCD (Point Cloud Data)',
    performance:
      'Dica de desempenho: arquivos grandes podem exigir mais tempo de carregamento. Use um navegador moderno para melhor desempenho.'
  }
};