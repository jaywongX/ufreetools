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
    currentPoint: 'Resultado atual',
    article: {
      title: "Calculadora de Projeção Gauss: Conversão entre coordenadas geográficas e planas",
      introTitle: "O que é a projeção Gauss e por que você precisa desta ferramenta",
      introPara1: "A <strong>Calculadora de Projeção Gauss</strong> (também conhecida como projeção transversa de Mercator) é uma ferramenta essencial para engenheiros de agrimensura, cartógrafos, profissionais de GIS e qualquer pessoa que trabalhe com sistemas de informação geográfica. Esta poderosa ferramenta de conversão de coordenadas permite converter entre coordenadas geográficas (latitude e longitude) e coordenadas planas (X e Y) usando o método de projeção Gauss.",
      introPara2: "Nosso <strong>conversor de projeção Gauss</strong> realiza com alta precisão tanto a transformação direta (geográficas para planas) quanto a inversa (planas para geográficas). Ele suporta vários modelos de elipsoide, incluindo WGS84, CGCS2000, Krasovsky (Pequim 54) e outros. A ferramenta aplica automaticamente as fórmulas matemáticas apropriadas e termos de correção, garantindo conversões precisas para seus projetos de medição e mapeamento.",
      
      scenariosTitle: "Aplicações práticas da projeção Gauss",
      scenario1: "<strong>Agrimensura e gestão territorial:</strong> Agrimensores usam a projeção Gauss para converter coordenadas GPS em sistemas de coordenadas locais, para medições precisas de terrenos, demarcação de propriedades e planejamento de construções.",
      scenario2: "<strong>Cartografia topográfica:</strong> Cartógrafos e profissionais de mapeamento dependem da projeção Gauss para criar mapas topográficos precisos, mantendo relações angulares e minimizando distorções em áreas específicas.",
      scenario3: "<strong>Integração de dados GIS:</strong> Analistas de GIS usam cálculos de projeção Gauss para integrar dados de diferentes fontes e sistemas de coordenadas em um quadro de referência unificado para análise espacial.",
      scenario4: "<strong>Projetos de engenharia:</strong> Engenheiros civis e equipes de construção utilizam a projeção Gauss no design de infraestrutura, garantindo posicionamento preciso de estradas, pontes, túneis e serviços públicos em relação a características existentes.",
      scenario5: "<strong>Aplicações militares e de defesa:</strong> Operações militares utilizam coordenadas de projeção Gauss para planejamento tático, navegação e posicionamento de alvos, onde precisão é crítica.",
      scenariosConclusion: "A versatilidade dos <strong>cálculos de projeção Gauss</strong> os torna indispensáveis em muitos campos profissionais que requerem posicionamento espacial preciso. Nossa ferramenta simplifica este complexo processo matemático em uma interface intuitiva, adequada tanto para profissionais quanto para iniciantes.",
      
      faqTitle: "Perguntas frequentes sobre projeção Gauss",
      faq1q: "Qual a diferença entre projeção Gauss e UTM?",
      faq1a: "A projeção Gauss é a base matemática do sistema UTM (Universal Transversa de Mercator). As principais diferenças incluem:<ul><li>UTM usa um sistema padronizado de fusos, com fusos de 6° e parâmetros específicos</li><li>A projeção Gauss é mais flexível, permitindo meridianos centrais e larguras de fuso personalizados (3° ou 6°)</li><li>UTM inclui um falso leste padrão de 500.000m e fator de escala 0.9996</li><li>Nossa <strong>calculadora de projeção Gauss</strong> permite mais opções de personalização de parâmetros do elipsoide do que calculadoras UTM típicas</li></ul>",
      
      faq2q: "Qual modelo de elipsoide devo escolher para cálculos de projeção Gauss?",
      faq2a: "A escolha do elipsoide depende da sua região geográfica e do padrão do sistema de coordenadas utilizado:<ul><li><strong>WGS84:</strong> Padrão global usado com GPS e mapeamento internacional</li><li><strong>CGCS2000:</strong> Sistema oficial de coordenadas da China desde 2000</li><li><strong>Krasovsky/Pequim 54:</strong> Historicamente usado na China e partes da Europa Oriental</li><li><strong>Xi'an 80:</strong> Padrão nacional chinês antes do CGCS2000</li></ul>Para a maioria das aplicações modernas, recomenda-se WGS84 ou CGCS2000, a menos que você esteja especificamente trabalhando com dados legados que requerem um elipsoide diferente. Nosso <strong>conversor de projeção Gauss</strong> suporta todos esses modelos e mais.",
      
      faq3q: "Qual a precisão dos cálculos de projeção Gauss desta ferramenta?",
      faq3a: "Nossa <strong>calculadora de projeção Gauss</strong> implementa o modelo matemático completo e inclui termos de correção apropriados para garantir alta precisão. Para a maioria das aplicações práticas, a ferramenta alcança precisão submilimétrica, excedendo os requisitos de projetos típicos de agrimensura e cartografia. A precisão depende da entrada correta dos parâmetros do elipsoide e da especificação adequada do fuso. Para trabalhos geodésicos de altíssima precisão (requerendo precisão submilimétrica), pode ser necessário software especializado com termos de correção adicionais.",
      
      faq4q: "Posso usar esta ferramenta para processamento em lote de coordenadas?",
      faq4a: "Sim, nosso <strong>conversor de projeção Gauss</strong> inclui funcionalidade completa para processamento em lote. Você pode:<ul><li>Inserir múltiplos pares de coordenadas (latitude/longitude ou X/Y)</li><li>Carregar arquivos CSV, TXT ou Excel contendo dados de coordenadas</li><li>Processar centenas ou milhares de pontos simultaneamente</li><li>Exportar resultados em vários formatos, incluindo CSV, Excel, GeoJSON, KML e TXT</li></ul>Isso torna a ferramenta ideal para projetos com grandes conjuntos de dados que seriam demorados para processar individualmente.",
      
      faq5q: "O que são fusos de 3° e 6° na projeção Gauss?",
      faq5a: "A projeção Gauss divide a Terra em fusos de longitude para minimizar distorções:<ul><li><strong>Fusos de 3°:</strong> Mais estreitos, proporcionam maior precisão e menos distorção, normalmente usados para mapeamento em grande escala e medições detalhadas. Os números dos fusos variam de 1 a 120.</li><li><strong>Fusos de 6°:</strong> Mais largos, cobrem áreas maiores com distorção ligeiramente maior nas bordas, comumente usados para mapeamento regional e coordenadas UTM. Os números dos fusos variam de 1 a 60.</li></ul>Nossa <strong>ferramenta de cálculo de projeção Gauss</strong> suporta ambos os sistemas de fusos e calcula automaticamente o meridiano central com base na sua seleção de fuso.",
      
      tutorialTitle: "Guia passo a passo para usar a calculadora de projeção Gauss",
      forwardCalcTitle: "Transformação direta (geográficas → planas)",
      step1: "<strong>Selecione o tipo de cálculo:</strong> Escolha \"Transformação direta\" nas opções no topo da ferramenta.",
      step2: "<strong>Selecione os parâmetros do elipsoide:</strong> Escolha o tipo de elipsoide adequado (WGS84, CGCS2000, Pequim 54 etc.) de acordo com os requisitos do seu sistema de coordenadas.",
      step3: "<strong>Configure os parâmetros de projeção:</strong> Selecione fuso de 3° ou 6° e insira o número do fuso. O meridiano central será calculado automaticamente, ou você pode inseri-lo manualmente se necessário.",
      step4: "<strong>Insira as coordenadas geográficas:</strong> Insira valores de latitude e longitude em graus decimais. Você também pode usar o campo de entrada DMS (graus-minutos-segundos) para inserir notação tradicional.",
      
      inverseCalcTitle: "Transformação inversa (planas → geográficas)",
      step5: "<strong>Selecione o tipo de cálculo:</strong> Escolha \"Transformação inversa\".",
      step6: "<strong>Configure elipsoide e projeção:</strong> Selecione os mesmos parâmetros de elipsoide e configurações de projeção do sistema de coordenadas original.",
      step7: "<strong>Insira as coordenadas planas:</strong> Insira os valores X (norte) e Y (leste) em metros.",
      step8: "<strong>Visualize os resultados:</strong> As latitudes e longitudes calculadas serão exibidas em formato decimal e DMS para referência fácil.",
      
      batchTitle: "Processamento em lote de múltiplos conjuntos de coordenadas",
      step9: "<strong>Prepare os dados:</strong> Formate os pares de coordenadas, um por linha (latitude,longitude para transformação direta; X,Y para inversa). Você também pode usar o botão \"Carregar CSV\" para importar dados de arquivos.",
      step10: "<strong>Processe os dados em lote:</strong> Clique em \"Processar em lote\" para converter todas as coordenadas de uma vez.",
      step11: "<strong>Exporte os resultados:</strong> Use os botões \"Copiar tudo\" ou \"Baixar CSV\" para salvar os resultados convertidos para uso em outros aplicativos.",
      
      tutorialConclusion: "Com esta <strong>calculadora de projeção Gauss</strong>, você pode converter rapidamente coordenadas entre sistemas geográficos e planos sem cálculos manuais complexos. A interface intuitiva da ferramenta torna a conversão de coordenadas em nível profissional acessível para usuários de todos os níveis.",
      
      relatedToolsTitle: "Ferramentas relacionadas",
      relatedTool1: "Conversor de coordenadas",
      relatedTool1Desc: "Converta entre diferentes sistemas de coordenadas, incluindo UTM, MGRS e várias grades nacionais.",
      relatedTool2: "Reprodutor de trajetórias GPS",
      relatedTool2Desc: "Visualize e analise trajetórias GPS com dados de coordenadas em um mapa interativo.",
      
      referencesTitle: "Referências técnicas e recursos",
      reference1: "Sistema Geodésico Mundial 1984 (WGS84) - Agência Nacional de Inteligência Geoespacial",
      reference2: "Projeção transversa de Mercator - Wikipedia",
      reference3: "Sistema de Coordenadas Planas de 1983 - Serviço Nacional de Geodésia"
    },
}