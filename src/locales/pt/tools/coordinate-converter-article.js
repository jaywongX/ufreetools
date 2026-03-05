export default {
  title: "Ferramenta de Conversão de Coordenadas: Transforme precisamente entre sistemas",
  introduction: "O Conversor de Sistemas de Coordenadas é uma poderosa ferramenta online projetada para conversão precisa de coordenadas geográficas entre diferentes sistemas. Seja você um profissional de GIS, desenvolvedor ou analista de dados geoespaciais, esta ferramenta simplifica o complexo processo de conversão entre WGS-84 (padrão GPS), GCJ-02 (padrão chinês), BD-09 (mapas Baidu), Web Mercator e sistemas UTM.",
  
  whyNeeded: {
    title: "Por que converter entre sistemas de coordenadas?",
    p1: "A conversão de sistemas de coordenadas é essencial ao trabalhar com dados geoespaciais de diferentes fontes ou regiões. Diferentes países e serviços de mapas usam sistemas distintos por razões legais, históricas ou de segurança. Por exemplo, mapas na China continental são obrigados por lei a usar o sistema GCJ-02 em vez do padrão global WGS-84, enquanto o Baidu Maps usa seu próprio sistema BD-09.",
    p2: "Sem a conversão adequada, mapas e dados de localização podem exibir erros significativos de posicionamento - às vezes centenas de metros. Essas discrepâncias podem causar sérios problemas em aplicações como navegação, planejamento urbano e serviços de emergência. Nosso conversor resolve esta questão crítica, garantindo que dados de localização permaneçam precisos e consistentes entre diferentes sistemas de mapas."
  },
  
  systems: {
    title: "Entendendo os diferentes sistemas",
    
    wgs84: {
      title: "WGS-84 (Sistema Geodésico Mundial)",
      description: "WGS-84 é o sistema de referência usado por satélites GPS e o padrão para mapas internacionais. É utilizado pelo Google Maps fora da China, OpenStreetMap e maioria dos aplicativos de mapas globais. Coordenadas são tipicamente expressas como latitude e longitude em graus decimais. Como base do sistema de posicionamento global, WGS-84 tem papel central no intercâmbio internacional de dados geográficos."
    },
    
    gcj02: {
      title: "GCJ-02 (Sistema Oficial Chinês)",
      description: "GCJ-02, conhecido como 'sistema de coordenadas marciano', é o sistema obrigatório exigido por regulamentação governamental na China continental. Ele aplica um algoritmo proprietário de criptografia às coordenadas WGS-84, gerando deslocamentos variáveis. Este sistema é usado pelo AutoNavi Maps, Google Maps China, Apple Maps China e muitos aplicativos chineses. Devido a requisitos especiais de segurança nacional, qualquer serviço de mapas operando na China deve usar legalmente o sistema GCJ-02."
    },
    
    bd09: {
      title: "BD-09 (Sistema Baidu)",
      description: "BD-09 é o sistema proprietário usado exclusivamente pelo Baidu Maps e serviços relacionados. Ele aplica uma conversão adicional às coordenadas GCJ-02 para maior criptografia. Qualquer aplicativo que integre com serviços Baidu Maps deve usar este sistema para posicionamento preciso. Como um dos principais provedores de mapas na China, o Baidu Maps é amplamente utilizado em muitos aplicativos domésticos, tornando crucial entender e converter corretamente coordenadas BD-09."
    },
    
    webmercator: {
      title: "Web Mercator (EPSG:3857)",
      description: "Web Mercator, formalmente EPSG:3857, é uma projeção de mapa cilíndrica comumente usada por aplicativos de mapas web como Google Maps e OpenStreetMap. Ele representa a Terra como plana com coordenadas em metros ao invés de graus. Esta projeção é otimizada para visualização web, mas introduz distorções significativas em altas latitudes. Para desenvolvedores que precisam exibir mapas na web, entender a projeção Web Mercator e suas conversões é essencial."
    },
    
    utm: {
      title: "UTM (Universal Transversa de Mercator)",
      description: "UTM é um sistema baseado em grades que divide o mundo em 60 zonas de 6 graus de longitude cada. Coordenadas são expressas como distâncias 'leste' e 'norte' em metros em relação à origem de cada zona. É comumente usado em levantamentos, aplicações militares e sistemas GIS que preferem medidas métricas. Na China, o sistema UTM tem importante aplicação em mapeamento profissional e projetos de engenharia, especialmente onde cálculos precisos de distância são necessários."
    }
  },
  
  useCases: {
    title: "Aplicações comuns de conversão de coordenadas",
    
    case1: {
      title: "Desenvolvimento de aplicativos móveis",
      description: "Ao desenvolver aplicativos baseados em localização para uso em diferentes países, desenvolvedores devem considerar requisitos regionais de sistemas de coordenadas. Por exemplo, um aplicativo de navegação usado tanto na China quanto internacionalmente precisa converter entre WGS-84 e GCJ-02 para exibir posições precisas em seus respectivos mapas. Isso é particularmente importante para comércio eletrônico internacional, aplicativos de viagem e plataformas de logística global."
    },
    
    case2: {
      title: "Integração de dados GIS",
      description: "Projetos de Sistemas de Informação Geográfica (GIS) frequentemente combinam dados de múltiplas fontes que usam diferentes sistemas. Por exemplo, integrar imagens de satélite (tipicamente WGS-84) com dados de planejamento urbano chineses (usando GCJ-02) requer conversão para garantir alinhamento espacial correto. Em projetos chineses de cidades inteligentes, monitoramento ambiental e planejamento regional, esta conversão é etapa crucial na integração de dados."
    },
    
    case3: {
      title: "Navegação transfronteiriça",
      description: "Empresas de transporte e logística operando em regiões fronteiriças (especialmente ao redor da China) precisam converter coordenadas quando veículos ou ativos cruzam áreas com diferentes padrões de mapas. Isso garante rastreamento contínuo e preciso independentemente da localização. Com o avanço da Iniciativa Cinturão e Rota, a demanda por transição perfeita entre sistemas de coordenadas no transporte transfronteiriço está crescendo."
    },
    
    case4: {
      title: "Visualização de dados geoespaciais",
      description: "Pesquisadores e analistas trabalhando com conjuntos de dados globais frequentemente precisam converter coordenadas para visualização correta em várias plataformas. Por exemplo, plotar dados de pesquisa no Baidu Maps requer conversão de WGS-84 para BD-09, enquanto visualizar os mesmos dados no Google Maps requer as coordenadas WGS-84 originais. Esta capacidade de conversão é especialmente valiosa em projetos de pesquisa colaborativa internacional na China."
    }
  },
  
  howToUse: {
    title: "Como usar o Conversor de Coordenadas",
    introduction: "Nosso conversor torna simples a transformação entre sistemas. Siga este guia passo a passo para uso eficiente:",
    
    step1: {
      title: "Selecione seus sistemas",
      description: "Primeiro, escolha o sistema de origem (onde suas coordenadas estão atualmente) e sistema de destino (para o qual deseja converter) nos menus suspensos. Escolhas comuns incluem conversão de WGS-84 (de dispositivos GPS) para GCJ-02 (usado em mapas chineses), ou de GCJ-02 (AutoNavi) para BD-09 (Baidu)."
    },
    
    step2: {
      title: "Insira suas coordenadas",
      description: "Insira suas coordenadas nos campos apropriados. Para sistemas latitude/longitude (WGS-84, GCJ-02, BD-09), insira valores em graus decimais. Para sistemas projetados (Web Mercator, UTM), insira valores em metros. Certifique-se de seguir o formato indicado, por exemplo, as coordenadas WGS-84 da Praça Tiananmen em Beijing são: 39.909187, 116.397451."
    },
    
    step3: {
      title: "Converta suas coordenadas",
      description: 'Clique em "Converter coordenadas" para executar a conversão. Os resultados mostrarão abaixo os valores individuais e strings formatadas que você pode copiar com um clique. Resultados são precisos até 6 casas decimais, suficientes para maioria das aplicações.'
    },
    
    step4: {
      title: "Conversão em lote (opcional)",
      description: "Para múltiplos pares de coordenadas, use a seção de conversão em lote. Insira suas coordenadas (um par por linha), selecione o formato e clique em \"Converter em lote\" para processar simultaneamente. Você pode então exportar os resultados como arquivo CSV para uso em outros aplicativos ou análise adicional."
    },
    
    example: {
      title: "Exemplo de conversão",
      description: "Convertendo coordenadas da Cidade Proibida:\n\n• WGS-84: 39.916345, 116.397155\n• Para GCJ-02: 39.91748, 116.40382\n• Para BD-09: 39.92373, 116.41029\n\nNote os deslocamentos de centenas de metros entre sistemas, destacando a importância de usar o sistema correto para cada aplicação. Em software de navegação, esta diferença causaria erros significativos de posicionamento."
    }
  },
  
  tips: {
    title: "Melhores práticas para conversão",
    tip1: "Sempre verifique o sistema de origem dos dados antes da conversão para garantir precisão. Especialmente com dados de terceiros, conhecer seu sistema de coordenadas é crucial.",
    tip2: "Para aplicativos usados na China continental, lembre-se que usar coordenadas WGS-84 diretamente em mapas pode resultar em erros de 100-500m, particularmente problemáticos em navegação e aplicações de posicionamento preciso.",
    tip3: "Ao trabalhar com dados próximos a fronteiras (ex: Hong Kong/China continental), preste atenção extra ao sistema usado. Estas áreas são frequentemente zonas de transição entre sistemas.",
    tip4: "Para aplicações de alta precisão, considere usar bibliotecas de conversão mais sofisticadas que levam em conta variações locais e parâmetros geodésicos. Em mapeamento profissional e engenharia, conversões com precisão centimétrica podem ser necessárias."
  },
  
  faq: {
    title: "Perguntas Frequentes",
    q1: "Por que minhas coordenadas GPS não batem com mapas chineses?",
    a1: "Dispositivos GPS fornecem coordenadas no sistema WGS-84, enquanto mapas chineses são obrigados por lei a usar o sistema GCJ-02 com deslocamentos intencionais. Isso causa diferenças tipicamente de 100-500m. Nosso conversor ajuda a alinhar seus dados GPS com mapas chineses. Muitos usuários enfrentam este problema ao usar dispositivos GPS internacionais na China.",
    
    q2: "Esta conversão é reversível e sem perdas?",
    a2: "Devido à natureza dos algoritmos de criptografia, conversões entre WGS-84 e GCJ-02 ou BD-09 não são completamente reversíveis. No entanto, nossa ferramenta implementa os algoritmos mais precisos disponíveis para minimizar erros, tipicamente mantendo erros abaixo de 1-2m em operações reversas. Para maioria das aplicações comerciais e de consumo, esta precisão é suficiente.",
    
    q3: "Qual sistema meu aplicativo deve usar?",
    a3: "Depende do provedor de mapas e região: para aplicativos globais e serviços como Google Maps fora da China, use WGS-84; para AutoNavi Maps e Google Maps China, use GCJ-02; para Baidu Maps, use BD-09; para bibliotecas web como Leaflet ou OpenLayers, use Web Mercator; para aplicações que requerem medidas métricas em áreas específicas, use UTM. Isto é especialmente importante ao desenvolver serviços de localização para o mercado doméstico chinês.",
    
    q4: "Quão precisas são estas conversões?",
    a4: "As conversões em nossa ferramenta são baseadas nos melhores algoritmos públicos disponíveis, sendo precisas dentro de 1-2m na maioria dos casos. Entretanto, os algoritmos originais de GCJ-02 e BD-09 são proprietários, podendo haver pequenas diferenças em comparação com conversões oficiais. Para aplicações profissionais que requerem precisão centimétrica, soluções GIS comerciais podem ser necessárias."
  },
  
  conclusion: {
    title: "Simplifique seu trabalho geoespacial com nosso Conversor",
    text: "A conversão entre sistemas de coordenadas é um aspecto crítico mas frequentemente negligenciado do trabalho com dados geoespaciais. Nosso conversor online gratuito elimina a complexidade deste processo, permitindo que você transforme rapidamente e com precisão entre sistemas WGS-84, GCJ-02, BD-09, Web Mercator e UTM. Seja você um desenvolvedor de aplicativos de mapas, analista de dados geográficos ou apenas precise plotar pontos precisos em diferentes mapas, esta ferramenta oferece uma solução direta e eficaz para os desafios de conversão de sistemas de coordenadas. Trabalhe sem esforço no diversificado ambiente global de sistemas de informação geográfica."
  },
  
  relatedTools: {
    title: "Ferramentas geoespaciais relacionadas",
    tools: [
      {
        name: "Visualizador GeoJSON",
        description: "Visualize e edite arquivos GeoJSON com nossa ferramenta interativa de mapas.",
        url: "https://www.ufreetools.com/tool/geojson-viewer"
      },
      {
        name: "Localizador por IP",
        description: "Encontre a localização geográfica de endereços IP com nossa ferramenta de consulta.",
        url: "https://www.ufreetools.com/tool/ip-lookup"
      }
    ]
  },
  
  externalLinks: {
    intro: "Aprenda mais sobre sistemas de coordenadas nestas fontes autorizadas:",
    wikipedia: "Wikipedia: Sistemas de Coordenadas Geográficas",
    epsg: "Banco de dados EPSG.io de sistemas de coordenadas"
  }
}
