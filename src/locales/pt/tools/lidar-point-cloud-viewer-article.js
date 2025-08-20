export default {
  title: 'Visualizador de Nuvem de Pontos LIDAR Online - Ferramenta gratuita de visualização 3D',
  functionTitle: 'Recursos da ferramenta e casos de uso',
  intro:
    'Nosso <strong>visualizador de nuvem de pontos LIDAR online</strong> é uma ferramenta profissional para visualização 3D que suporta visualização e análise online de vários formatos. Este <strong>visualizador gratuito</strong> é baseado em WebGL, não requer instalação e oferece renderização 3D de alta qualidade diretamente no navegador. Seja você engenheiro de topografia, arquiteto ou especialista em SIG, este <strong>visualizador de dados LIDAR</strong> atende às suas necessidades profissionais.',
  useCasesTitle: 'Principais casos de uso',
  useCases: [
    'Topografia e mapeamento: visualizar e analisar dados de varredura LiDAR para medição de terreno e levantamento de edifícios',
    'Projeto arquitetônico: visualizar nuvens de pontos de edificações para apoiar fluxos de trabalho BIM',
    'Planejamento urbano: analisar modelos 3D de cidades para apoiar cidades inteligentes e a tomada de decisão',
    'Silvicultura: processar nuvens de pontos florestais para avaliar cobertura vegetal e biomassa',
    'Arqueologia: visualizar varreduras 3D de sítios arqueológicos para conservação e pesquisa',
    'Exploração geológica: analisar nuvens de pontos de estruturas geológicas para prospecção e avaliação de riscos',
    'Condução autônoma: visualizar dados LiDAR embarcados para planejamento de rotas e detecção de obstáculos',
    'Inspeção industrial: analisar varreduras 3D de equipamentos para controle de qualidade e detecção de defeitos'
  ],
  tipTitle: 'Dica profissional',
  tipContent:
    'Nosso visualizador suporta formatos como LAS, XYZ, PLY e PCD, e oferece múltiplos modos de coloração e controles interativos para analisar os dados sob diferentes perspectivas.',
  conclusion:
    'Com o <strong>visualizador de nuvem de pontos online</strong>, você pode pré-visualizar e analisar rapidamente diversos conjuntos de dados LIDAR, aumentando a produtividade. Este <strong>visualizador 3D</strong> é totalmente gratuito e preserva sua privacidade — todo o processamento ocorre localmente no navegador.',
  faqTitle: 'Perguntas frequentes (FAQ)',
  faqs: [
    {
      question: 'Quais formatos de arquivo este visualizador LIDAR suporta?',
      answer:
        'O <strong>visualizador de nuvem de pontos</strong> suporta vários formatos principais, incluindo LAS (padrão LIDAR), XYZ (nuvem de pontos ASCII), PLY (Polygon File Format), PCD (Point Cloud Data) e TXT. Esses formatos cobrem a maioria dos cenários de <strong>processamento de dados LIDAR</strong> e digitalização 3D.'
    },
    {
      question: 'Existe limite de tamanho para o arquivo de nuvem de pontos?',
      answer:
        'Para garantir bom desempenho, recomendamos <strong>arquivos de nuvem de pontos</strong> de até 100 MB. Para grandes conjuntos de dados, considere amostragem (downsampling) ou divisão em blocos. O <strong>visualizador online</strong> otimiza automaticamente o render para manter a visualização 3D fluida.'
    },
    {
      question: 'Como ajustar a exibição da nuvem de pontos?',
      answer:
        'A <strong>ferramenta de visualização 3D</strong> oferece várias opções: ajuste do tamanho dos pontos, escolha do modo de coloração (elevação, intensidade, classificação, RGB), controle de densidade e ativação de animação. Isso ajuda a analisar melhor os <strong>dados de varredura LiDAR</strong>.'
    },
    {
      question: 'Meus dados de nuvem de pontos estão seguros?',
      answer:
        'Sim. O <strong>visualizador LIDAR online</strong> processa tudo localmente — seus <strong>dados de nuvem de pontos</strong> não são enviados para servidores. Leitura, renderização e análise são feitos no navegador para garantir privacidade e segurança, importante em projetos sensíveis e comerciais.'
    },
    {
      question: 'Posso exportar imagens do resultado?',
      answer:
        'Sim. A <strong>ferramenta de visualização</strong> permite exportar a visão atual como uma imagem PNG de alta qualidade. Salve capturas em diferentes ângulos e modos de coloração para relatórios, apresentações ou mais <strong>análises de dados</strong>.'
    }
  ],
  tutorialTitle: 'Guia de uso',
  steps: [
    {
      title: 'Escolher o arquivo de nuvem de pontos',
      description:
        'Clique em “Selecionar arquivo” ou arraste e solte seu <strong>arquivo de nuvem de pontos LIDAR</strong> na área de upload. Formatos <strong>3D</strong> suportados: LAS, XYZ, PLY, PCD e TXT.',
      note: 'Arquivos menores que 100 MB oferecem melhor desempenho'
    },
    {
      title: 'Aguardar a leitura',
      description:
        'O sistema fará a leitura do seu <strong>arquivo de nuvem de pontos</strong>, exibindo o progresso e as informações do arquivo. Ao concluir, os dados serão carregados automaticamente no visualizador 3D.',
      note: 'O tempo depende do tamanho e da complexidade do arquivo'
    },
    {
      title: 'Controles de navegação 3D',
      description:
        'Use o mouse para navegar em 3D: <strong>arraste com o botão esquerdo</strong> para girar, <strong>arraste com o botão direito</strong> para mover e <strong>use a roda</strong> para aplicar zoom. Esses controles intuitivos permitem visualizar os <strong>dados</strong> de qualquer ângulo.',
      note: 'Gestos touch são suportados em dispositivos móveis'
    },
    {
      title: 'Ajustar configurações de exibição',
      description:
        'No painel direito, ajuste: modo de coloração (elevação, intensidade, classificação, RGB), tamanho e densidade dos pontos e animação. Essas configurações ajudam na análise eficiente dos <strong>dados LIDAR</strong>.',
      note: 'Modos de coloração diferentes atendem a necessidades distintas de análise'
    },
    {
      title: 'Ver estatísticas',
      description:
        'No painel de informações, consulte <strong>estatísticas da nuvem de pontos</strong>: total de pontos, faixa de coordenadas e formato do arquivo. Esses dados são importantes para a <strong>avaliação da qualidade</strong>.',
      note: 'As estatísticas são atualizadas em tempo real'
    },
    {
      title: 'Exportar resultados',
      description:
        'Quando estiver satisfeito, clique em “Exportar imagem” para salvar a <strong>visualização 3D</strong> em PNG para relatórios ou análises posteriores.',
      note: 'A imagem exportada preserva a visão e as configurações atuais'
    }
  ],
  successTitle: 'Tudo certo!',
  successContent:
    'Ótimo! Agora você sabe usar o Visualizador de Nuvem de Pontos LIDAR para visualização e análise 3D eficientes.',
  relatedToolsTitle: 'Ferramentas relacionadas',
  relatedTools: [
    {
      name: 'Conversor de Coordenadas',
      description:
        'Converta coordenadas geográficas entre WGS-84, GCJ-02, BD-09, Web Mercator e UTM',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'Reprodução de Trilhas GPS',
      description:
        'Visualize e reproduza trilhas GPS a partir de vários formatos (GPX, KML, GeoJSON, CSV).',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: 'Projeção de Gauss',
      description:
        'Converta entre coordenadas da projeção de Gauss e coordenadas geográficas (latitude/longitude)',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    }
  ],
  referencesTitle: 'Referências',
  references: [
    {
      name: 'Especificação do Formato ASPRS LAS',
      description:
        'Padrão oficial LAS da American Society for Photogrammetry and Remote Sensing',
      url: 'https://www.asprs.org/divisions-committees/lidar-division/laser-las-file-format-exchange-activities'
    },
    {
      name: 'Documentação oficial do WebGL',
      description: 'Documentação e boas práticas da Web Graphics Library',
      url: 'https://www.khronos.org/webgl/'
    },
    {
      name: 'Point Cloud Library (PCL)',
      description:
        'Documentação e tutoriais oficiais da biblioteca open source de processamento de nuvem de pontos',
      url: 'https://pointclouds.org/'
    }
  ]
};