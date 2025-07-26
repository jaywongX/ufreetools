export default {
  name: 'Transformação Gaussiana Direta e Inversa',
  title: 'Transformação Gaussiana Direta e Inversa',
  description: 'Ferramenta para conversão entre coordenadas de projeção Gauss e coordenadas geográficas (latitude/longitude)',
  calculationType: 'Tipo de cálculo',
  forward: 'Transformação direta (lat/long → Gauss)',
  inverse: 'Transformação inversa (Gauss → lat/long)',
  ellipsoidParameters: 'Parâmetros do elipsoide',
  ellipsoidType: 'Tipo de elipsoide',
  centralMeridian: 'Meridiano central (graus)',
  a: 'Semi-eixo maior',
  f: 'Achatamento',
  projectionParameters: 'Parâmetros do fuso',
  projectionType: 'Tipo de fuso',
  '3degree': 'Fuso de 3°',
  '6degree': 'Fuso de 6°',
  zoneNumber: 'Número do fuso',
  forwardInput: 'Entrada de latitude/longitude',
  latitude: 'Latitude',
  longitude: 'Longitude',
  inverseInput: 'Entrada de coordenadas Gauss',
  x: 'Coordenada X (norte)',
  y: 'Coordenada Y (leste)',
  calculate: 'Calcular',
  results: 'Resultados',
  dms: 'Formato graus-minutos-segundos',
  batchProcessing: 'Processamento em lote',
  inputFormat: 'Formato de entrada',
  batchForwardFormat: 'Uma linha por par de coordenadas, formato: latitude,longitude',
  batchInverseFormat: 'Uma linha por par de coordenadas, formato: X,Y',
  processBatch: 'Processar em lote',
  batchResults: 'Resultados em lote',
  copyAll: 'Copiar tudo',
  downloadCSV: 'Baixar CSV',
  copySuccess: 'Copiado com sucesso',
  copyFailed: 'Falha ao copiar',
  clear: 'Limpar',
  formula: 'Explicação da fórmula',
  mapView: 'Visualização do mapa',
  dmsInput: 'Entrada em graus-minutos-segundos',
  dmsInputPlaceholder: '40°26\'46"N 79°58\'56"W',
  parse: 'Analisar',
  dmsParseError: 'Erro ao analisar formato graus-minutos-segundos',
  invalidLatitude: 'Latitude inválida',
  invalidLongitude: 'Longitude inválida',
  invalidX: 'Coordenada X inválida',
  invalidY: 'Coordenada Y inválida',
  copyToClipboard: 'Copiar para área de transferência',
  autoCalculate: 'Cálculo automático',
  formulaExplanation: 'Explicação das fórmulas de projeção Gauss',
  uploadCSV: 'Carregar CSV',
  exportResults: 'Exportar resultados',
  exportAsGeoJSON: 'Exportar como GeoJSON',
  exportAsKML: 'Exportar como KML',
  exportAsTXT: 'Exportar como TXT',
  mapLayers: 'Camadas do mapa',
  standard: 'Padrão',
  satellite: 'Satélite',
  terrain: 'Terreno',
  pointsOnMap: 'Pontos no mapa',
  clearPoints: 'Limpar todos os pontos',
  unitSystem: 'Sistema de unidades',
  metric: 'Metros (m)',
  imperial: 'Pés (ft)',
  customEllipsoid: 'Elipsoide personalizado',
  saveCustomEllipsoid: 'Salvar elipsoide personalizado',

  formulaContent: `
    <p>A projeção Gauss utiliza as seguintes fórmulas principais:</p>
    <h4>Transformação direta (lat/long → Gauss)</h4>
    <p>Converte coordenadas geográficas para coordenadas planas:</p>
    <ul>
      <li>X = m + termos de correção</li>
      <li>Y = ν·cos(B)·l + termos de correção</li>
    </ul>
    <h4>Transformação inversa (Gauss → lat/long)</h4>
    <p>Converte coordenadas planas para coordenadas geográficas:</p>
    <ul>
      <li>B = μ + termos de correção</li>
      <li>L = L₀₀ + termos de correção</li>
    </ul>
    <p>Onde:</p>
    <ul>
      <li>B: Latitude</li>
      <li>L: Longitude</li>
      <li>L₀₀: Meridiano central</li>
      <li>m: Comprimento do arco meridiano</li>
      <li>ν: Raio de curvatura do primeiro vertical</li>
    </ul>
  `,

  close: 'Fechar',

  ellipsoids: {
    WGS84: 'Elipsoide WGS84',
    Krasovsky: 'Elipsoide Krasovsky',
    CGCS2000: 'Elipsoide CGCS2000',
    GRS80: 'Elipsoide GRS80',
    Beijing54: 'Elipsoide Pequim 54',
    Xian80: 'Elipsoide Xi\'an 80',
    Custom: 'Elipsoide personalizado'
  },

  about: {
    title: 'Sobre a projeção Gauss',
    description: 'A projeção Gauss (Projeção Gaussiana) é uma projeção conforme cilíndrica transversal, amplamente utilizada em medições e cartografia. Ela projeta pontos da superfície do elipsoide terrestre para um plano, sendo o método de projeção padrão para mapas topográficos de média e grande escala.',
    forwardTitle: 'Transformação direta (lat/long → Gauss)',
    forwardDescription: 'A transformação direta converte coordenadas geográficas (longitude, latitude) para coordenadas planas (X, Y). O eixo X aponta para o norte e o eixo Y para o leste, com origem na interseção do meridiano central com o equador.',
    inverseTitle: 'Transformação inversa (Gauss → lat/long)',
    inverseDescription: 'A transformação inversa converte coordenadas planas (X, Y) de volta para coordenadas geográficas (longitude, latitude), sendo o processo inverso da transformação direta.',
    parametersTitle: 'Explicação dos parâmetros',
    ellipsoidParam: 'Parâmetros do elipsoide',
    ellipsoidDescription: 'Modelo matemático que descreve a forma da Terra, com diferentes sistemas geodésicos utilizando diferentes parâmetros de elipsoide. Os mais comuns incluem WGS84, Pequim 54, Xi\'an 80, CGCS2000 etc.',
    projectionParam: 'Parâmetros do fuso',
    projectionDescription: 'A projeção Gauss é normalmente dividida em fusos de 3° e 6°. Fusos de 3° são usados para mapas topográficos de grande escala, enquanto fusos de 6° são usados para mapas de média e pequena escala. O número do fuso determina a posição do meridiano central.'
  },

  loadExample: 'Carregar exemplo',
  customEllipsoidSaved: 'Elipsoide personalizado salvo com sucesso',

  guide: {
    title: 'Guia de uso',
    forwardTitle: 'Transformação direta (lat/long → Gauss)',
    step1: 'Selecione "Transformação direta" no topo',
    step2: 'Escolha os parâmetros adequados de elipsoide e fuso',
    step3: 'Insira valores de latitude e longitude em formato decimal (ex: -23.5505, -46.6333) ou use a entrada em graus-minutos-segundos',
    step4: 'Os resultados serão atualizados automaticamente, ou clique em "Calcular" para executar o cálculo',
    
    inverseTitle: 'Transformação inversa (Gauss → lat/long)',
    step5: 'Selecione "Transformação inversa" no topo',
    step6: 'Insira as coordenadas X e Y (em metros)',
    step7: 'Veja os resultados de latitude/longitude em formato decimal e graus-minutos-segundos',
    
    batchTitle: 'Processamento em lote',
    step8: 'Insira múltiplos pares de coordenadas na área de processamento em lote (um par por linha)',
    step9: 'Clique em "Processar em lote" para calcular todas as coordenadas de uma vez',
    step10: 'Exporte os resultados para CSV ou copie para a área de transferência',
    
    mapTitle: 'Interação com mapa',
    step11: 'Clique no mapa para adicionar pontos e preencher automaticamente os valores',
    step12: 'Use o menu suspenso para alternar entre diferentes camadas de mapa',
    step13: 'Exporte os pontos para formatos GeoJSON, KML ou TXT para uso em outros aplicativos'
  },

  gaussianProjectionPoints: 'Pontos de projeção Gauss',
  point: 'Ponto',
  gaussianProjection: 'Projeção Gauss',
  supportedFormats: 'Formatos suportados: CSV, TXT, Excel',
  excelExportNotice: 'Exportação para Excel pronta, pode ser aberta diretamente no Excel.',
  excelProcessNotice: 'Suporte limitado para Excel, recomenda-se usar formato CSV para melhores resultados.',
  exportAsCSV: 'Exportar como CSV',
  exportAsExcel: 'Exportar como Excel',
  excelExportSuccess: 'Arquivo Excel exportado com sucesso',
  excelExportFailed: 'Falha na exportação para Excel, usando formato CSV como alternativa',
  excelImportSuccess: 'Arquivo Excel importado com sucesso',
  excelImportFailed: 'Falha na importação do Excel, tente usar formato CSV',

  units: {
    metric: 'Metros (m)',
    km: 'Quilômetros (km)',
    imperial: 'Pés (ft)',
    miles: 'Milhas (mi)'
  },

  resetView: 'Redefinir visualização do mapa',
  pointsTotal: 'pontos',
  currentPoint: 'Resultado atual'
};