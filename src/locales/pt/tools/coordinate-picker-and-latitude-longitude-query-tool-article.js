export default {
  title: 'Seletor de Coordenadas e Ferramenta de Consulta de Latitude e Longitude: Guia de Consulta Online de Latitude e Longitude e Conversão de Coordenadas de Projeção EPSG',
  functionTitle: 'O que é o Seletor de Coordenadas e Ferramenta de Consulta de Latitude e Longitude? Quais são suas principais funcionalidades?',
  intro: 'Nossa <strong>Ferramenta de Seletor de Coordenadas e Consulta de Latitude e Longitude</strong> integra seleção de pontos por clique no mapa, <strong>consulta de latitude e longitude</strong>, <strong>conversão de coordenadas de projeção EPSG</strong> e busca por nome de local, visando completar rapidamente e com precisão a seleção de coordenadas e exportação de formatos de coordenadas. Usando esta ferramenta online, você pode completar conversões de nome de local para coordenadas, WGS84 para várias coordenadas de projeção EPSG dentro do navegador, melhorando significativamente a eficiência de anotação de levantamento, análise de localização e criação de mapas.',
  useCasesTitle: 'Cenários de Aplicação Típicos: Como o Seletor de Coordenadas e Ferramenta de Consulta de Latitude e Longitude Resolve Problemas',
  useCases: [
    'Seleção de locais de nova mídia e criação de pontos de check-in: seleção rápida de latitude e longitude, exportação para visualização de mapas',
    'Criação de mapas GIS e coleta de campo: seleção de pontos por clique, exportação CSV/GeoJSON, aplicável para importação ArcGIS/QGIS',
    'Seleção de locais governamentais e imobiliários: busca por nome de local ← coordenadas, coleta de locais candidatos com um clique',
    'Determinação de localização logística e de serviços: registro de coordenadas de múltiplas instalações/ordens de trabalho, exportação em lote',
    'Educação e pesquisa: demonstração das diferenças e conversões entre WGS84 e coordenadas de projeção EPSG',
    'Navegação turística e outdoor: salvamento de latitude e longitude e coordenadas de projeção de atrações turísticas e acampamentos',
    'Desenvolvimento e teste: amostras precisas de latitude e longitude necessárias para integração frontend/backend',
    'Anotação de conteúdo multi-regional: arquivos de coordenadas em formato unificado, úteis para integração de dados inter-regionais'
  ],
  tipTitle: 'Dica Profissional:',
  tipContent: 'Ao exportar CSV, recomenda-se incluir os campos name, lat, lon, epsg, x, y, time, adequados para processamento em lote e rastreamento no QGIS/Excel.',
  conclusion: 'Esta <strong>Ferramenta de Seletor de Coordenadas e Consulta de Latitude e Longitude</strong> é projetada para múltiplos cenários como levantamento, visualização, desenvolvimento e serviços, suportando <strong>conversão de coordenadas de projeção EPSG</strong>, busca por nome de local e exportação em lote. Completando consultas online de latitude e longitude e conversões de coordenadas, pode reduzir significativamente os custos de instalação de software e melhorar a eficiência de colaboração.',
  faqTitle: 'Perguntas Frequentes (FAQ)',
  faqs: [
    {
      question: 'Quais conversões de coordenadas de projeção EPSG o Seletor de Coordenadas e Ferramenta de Consulta de Latitude e Longitude suporta?',
      answer: 'A ferramenta tem conversões integradas para WGS84 (EPSG:4326), Web Mercator (EPSG:3857), CGCS2000 (EPSG:4490), e também suporta entrada de definições PROJ4 personalizadas. Após clicar no mapa, a latitude e longitude selecionadas e as coordenadas de projeção EPSG são exibidas simultaneamente.'
    },
    {
      question: 'Como converter rapidamente nomes de locais em coordenadas de latitude e longitude e marcá-los no mapa?',
      answer: 'Após inserir o nome do local no campo de busca, use a função de busca por nome de local ← coordenadas para obter resultados do Nominatim, selecione candidatos para posicionamento e adição de marcadores, depois exporte em CSV ou GeoJSON.'
    },
    {
      question: 'Como copiar resultados de consulta de latitude e longitude ou exportar arquivos de coordenadas em lote?',
      answer: 'A área de resultados à direita suporta cópia com um clique de todo o texto de coordenadas, e pode exportar arquivos em formato CSV ou GeoJSON, compatível com a maioria das plataformas GIS/visualização.'
    },
    {
      question: 'A ferramenta de seletor de coordenadas suporta dispositivos móveis e tablets?',
      answer: 'Sim, a interface usa grade responsiva, e as operações de <strong>consulta de latitude e longitude</strong>, marcação e exportação são suaves em telefones celulares e tablets.'
    },
    {
      question: 'Quais são as precauções ao usar conversão de coordenadas de projeção EPSG?',
      answer: 'Diferentes sistemas EPSG têm diferenças de datum e projeção. Se o sistema de coordenadas alvo não estiver integrado, forneça a definição PROJ4 correta e confirme as unidades antes da conversão (latitude e longitude em graus, projeção geralmente em metros).'
    }
  ],
  tutorialTitle: 'Como Usar o Seletor de Coordenadas e Ferramenta de Consulta de Latitude e Longitude: Passos Detalhados de Operação',
  steps: [
    {
      title: 'Abrir a ferramenta e carregar o mapa',
      description: 'Após entrar na página da ferramenta, o mapa carregará automaticamente. Se a rede estiver restrita, verifique o acesso à rede externa ou mude o ambiente de rede para garantir a disponibilidade do mapa base e busca por nome de local.',
      note: 'O sistema de coordenadas padrão do mapa é WGS84, unidades de latitude e longitude em graus.'
    },
    {
      title: 'Busca por nome de local e posicionamento',
      description: 'Digite o nome do local no campo de busca (suporte multilíngue), clique em "Buscar", selecione a localização alvo dos candidatos para centralizar no mapa.',
      note: 'Os candidatos são fornecidos pelo OpenStreetMap Nominatim.'
    },
    {
      title: 'Clicar no mapa para selecionar latitude e longitude',
      description: 'Clique em qualquer lugar no mapa, a latitude e longitude selecionadas e coordenadas de projeção EPSG serão automaticamente registradas e exibidas na lista de resultados de coordenadas à direita.',
      note: 'Suporta múltiplos cliques, pode marcar múltiplos pontos.'
    },
    {
      title: 'Alterar ou personalizar projeção EPSG',
      description: 'Selecione sistemas de coordenadas comuns (4326/3857/4490) à esquerda ou digite definições PROJ4 personalizadas, a ferramenta converterá instantaneamente as coordenadas de projeção e aplicará às seleções de pontos subsequentes.',
      note: 'Alterar o sistema de coordenadas não modifica a latitude e longitude dos pontos existentes, afeta apenas o campo de coordenadas de projeção.'
    },
    {
      title: 'Copiar ou exportar coordenadas',
      description: 'Selecione o formato de exportação (CSV ou GeoJSON), clique em "Copiar Tudo" ou "Exportar Arquivo" para usar coordenadas em operações GIS/visualização/desenvolvimento.',
      note: 'CSV é adequado para processamento em lote no Excel/QGIS, GeoJSON é adequado para mapas web e uso de API.'
    },
    {
      title: 'Limpar ou continuar marcação',
      description: 'Se precisar reiniciar, clique em "Limpar Marcadores". Depois continue buscando ou selecionando pontos para melhorar gradualmente a lista de coordenadas.',
      note: 'Lembre-se de alterar o sistema de coordenadas EPSG oportunamente de acordo com os requisitos de diferentes projetos.'
    }
  ],
  successTitle: 'Parabéns!',
  successContent: 'Você aprendeu como usar o Seletor de Coordenadas e Ferramenta de Consulta de Latitude e Longitude para completar coleta de coordenadas e conversão de coordenadas de projeção EPSG, e pode gerar eficientemente arquivos de dados padrão para GIS e visualização.',
  relatedToolsTitle: 'Ferramentas Relacionadas que Podem Interessar Você',
  relatedTools: [
    {
      name: 'Conversor de Sistema de Coordenadas',
      description: 'Conversão de coordenadas geográficas entre diferentes sistemas de coordenadas, incluindo WGS-84, GCJ-02, BD-09, Web Mercator, UTM',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'Reprodução de Trilha GPS',
      description: 'Visualização e reprodução de trilhas GPS de vários formatos de arquivo (GPX, KML, GeoJSON, CSV)',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: 'Conversão Direta e Inversa de Projeção Gaussiana',
      description: 'Ferramenta de conversão mútua entre coordenadas de projeção gaussiana e coordenadas geográficas (latitude e longitude)',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    },
    {
      name: 'Visualizador de Nuvem de Pontos LIDAR',
      description: 'Visualizador gratuito online de nuvem de pontos LIDAR, suporta formatos LAS, XYZ, PLY, PCD. Fornece visualização 3D, múltiplos modos de cor, navegação interativa e funcionalidades de análise de dados',
      url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
    }
  ],
  referencesTitle: 'Referências',
  references: [
    {
      name: 'OpenStreetMap Nominatim',
      description: 'Serviço de busca por nome de local e geocodificação',
      url: 'https://nominatim.org/'
    },
    {
      name: 'EPSG.io',
      description: 'Busca de sistema de referência de coordenadas EPSG e definições PROJ4',
      url: 'https://epsg.io/'
    },
    {
      name: 'Documentação Leaflet',
      description: 'Biblioteca de mapas web leve',
      url: 'https://leafletjs.com/'
    },
    {
      name: 'Documentação Proj4',
      description: 'Documentação da biblioteca de conversão de coordenadas',
      url: 'https://proj.org/apps/proj.html'
    }
  ]
}