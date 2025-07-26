export default {
  title: "Guia Completo do Visualizador EXIF - Analise Metadados Ocultos",
  intro: {
    title: "O que são Metadados EXIF e Por Que São Importantes",
    p1: "<b>Metadados EXIF</b> são informações ocultas em fotos digitais que revelam detalhes sobre como, quando e onde a imagem foi capturada. Nosso visualizador oferece análise completa desses dados, útil para fotógrafos, especialistas forenses e usuários preocupados com privacidade.",
    p2: "Em um mundo digital, <b>extrair metadados</b> tornou-se essencial tanto para fins profissionais quanto pessoais. Seja para verificar configurações técnicas, autenticar imagens ou simplesmente entender quais informações suas fotos compartilhadas podem revelar, nossa ferramenta fornece acesso imediato a esses dados críticos sem necessidade de software especializado.",
    p3: "Este <b>analisador EXIF online</b> revela modelo da câmera, configurações de exposição, coordenadas GPS, data de criação e dezenas de outros campos. A solução baseada em navegador funciona em todas as plataformas e dispositivos, processando imagens localmente sem enviar dados a servidores externos, garantindo total privacidade."
  },
  useCases: {
    title: "Aplicações Práticas da Análise EXIF",
    case1: "<b>Desenvolvimento Fotográfico</b>: Fotógrafos estudam configurações EXIF de imagens bem-sucedidas para replicar condições de captura. Analisar abertura, velocidade do obturador, ISO e lente ajuda a entender escolhas técnicas e melhorar próprios trabalhos.",
    case2: "<b>Forense Digital</b>: Investigadores usam EXIF para verificar autenticidade de imagens. Carimbos de data/hora, informações do dispositivo e detalhes de software ajudam a identificar manipulações e fornecer evidências em processos legais.",
    case3: "<b>Organização por Localização</b>: Viajantes usam coordenadas GPS no EXIF para organizar fotos geograficamente. Esses metadados permitem mapear jornadas fotográficas automaticamente e criar álbuns baseados em localização, mesmo anos depois.",
    case4: "<b>Auditoria de Privacidade</b>: Usuários verificam EXIF antes de compartilhar fotos online para evitar divulgação acidental de dados sensíveis. Remover seletivamente localização, identificadores de dispositivo e carimbos de tempo protege contra riscos de privacidade.",
    case5: "<b>Solução de Problemas Técnicos</b>: Técnicos analisam EXIF para diagnosticar problemas em câmeras. As informações técnicas abrangentes ajudam a identificar configurações incorretas, problemas de comunicação com lentes ou processamento que afetam qualidade da imagem."
  },
  tutorial: {
    title: "Como Usar Nosso Visualizador EXIF",
    intro: "Nossa ferramenta é intuitiva e poderosa para análise rápida de metadados ocultos. Siga estes passos simples:",
    step1: {
      title: "Passo 1: Carregue Sua Imagem",
      description: "Clique em <b>\"Carregar Imagem\"</b> ou arraste e solte o arquivo. Formatos suportados incluem JPG, TIFF, HEIC e RAW. O processamento ocorre localmente no navegador, garantindo privacidade."
    },
    step2: {
      title: "Passo 2: Veja Informações Básicas",
      description: "Após carregar, a ferramenta exibe automaticamente <b>informações da câmera</b>, <b>detalhes de exposição</b>, <b>propriedades da imagem</b> e data de criação. Esta visão geral mostra os metadados mais relevantes para avaliação técnica rápida."
    },
    step3: {
      title: "Passo 3: Explore Dados de Localização",
      description: "Se disponível, a ferramenta mostra coordenadas GPS e oferece visualização no mapa. Útil para <b>fotos geotagueadas</b>, mas tenha cuidado ao compartilhar imagens com localizações sensíveis como residências."
    },
    step4: {
      title: "Passo 4: Exporte ou Remova EXIF",
      description: "Você pode <b>exportar dados EXIF completos como JSON</b> para análise posterior ou arquivamento. Para preocupações de privacidade, use \"Copiar Todos\" para revisão detalhada ou considere remoção seletiva antes de compartilhar online."
    }
  },
  exifDetails: {
    title: "Principais Categorias de Dados EXIF",
    intro: "Metadados EXIF contêm informações valiosas organizadas em categorias:",
    camera: {
      title: "Informações da Câmera e Lente",
      description: "<b>Dados técnicos</b> incluem fabricante, modelo, versão de firmware e número de série. Especificações da lente mostram distância focal (incluindo equivalente em 35mm), abertura máxima e estabilização. Essas informações são cruciais para comparação de equipamentos e solução de problemas."
    },
    exposure: {
      title: "Parâmetros de Captura",
      description: "<b>Configurações de exposição</b> registram abertura, velocidade do obturador, ISO, modo de exposição, medição e compensação. Dados adicionais incluem balanço de branco, informações de flash e modo de foco. Esses detalhes ajudam fotógrafos a reproduzir condições de iluminação e entender resultados técnicos."
    },
    location: {
      title: "Coordenadas Geográficas",
      description: "<b>Dados GPS</b> registram latitude, longitude e altitude onde a foto foi tirada. Modernas câmeras e smartphones com GPS incorporado gravam essas informações automaticamente (a menos que desativado). Útil para organização, mas requer cuidado com privacidade ao compartilhar."
    },
    time: {
      title: "Carimbos de Tempo",
      description: "<b>Metadados temporais</b> registram precisamente quando a imagem foi capturada, modificada ou digitalizada. Esses carimbos são essenciais para organização de coleções, criação de cronogramas precisos e verificação de autenticidade para fins documentais ou legais."
    }
  },
  faq: {
    title: "Perguntas Frequentes Sobre EXIF",
    q1: "Por que não vejo dados EXIF em minhas imagens?",
    a1: "Vários fatores podem explicar: <b>Formatos como PNG e GIF geralmente não suportam EXIF</b>. Redes sociais e aplicativos de mensagem frequentemente removem metadados durante upload. Editores de imagem podem eliminar EXIF durante processamento. Screenshots normalmente não contêm dados EXIF. Para análise confiável, use arquivos originais diretamente da câmera.",
    
    q2: "EXIF é o mesmo que outros tipos de metadados?",
    a2: "<b>EXIF é específico para JPG e TIFF</b>, mas existem outros padrões como XMP (usado pela Adobe), IPTC (direitos autorais) e perfis ICC (gerenciamento de cores). Nosso visualizador foca em EXIF, mas também detecta alguns dados XMP e IPTC quando presentes.",
    
    q3: "Como remover dados de localização antes de compartilhar?",
    a3: "Para proteger privacidade, especialmente em locais sensíveis: 1) Use ferramentas especializadas em remoção de EXIF; 2) Muitos editores como Lightroom permitem remoção seletiva na exportação; 3) Desative geotagging nas configurações da câmera do smartphone; 4) Algumas redes sociais removem EXIF automaticamente, mas não confie nisso como única proteção. Estabeleça um fluxo de trabalho para revisar e limpar metadados antes de compartilhar.",
    
    q4: "Os carimbos de tempo EXIF são precisos?",
    a4: "<b>A precisão depende do relógio interno da câmera</b>. Se configurado corretamente, pode ser exato ao segundo. Porém, fatores como fuso horário, horário de verão não ajustado e bateria descarregada podem afetar a precisão. Câmeras avançadas com GPS ou sincronização via smartphone oferecem maior confiabilidade.",
    
    q5: "EXIF pode detectar edições em fotos?",
    a5: "<b>EXIF pode fornecer indícios de edição</b>, como software usado ou datas de modificação, mas tem limitações: 1) Metadados podem ser manipulados; 2) Edições básicas podem não deixar rastros; 3) Alguns editores preservam EXIF original enquanto adicionam próprias informações; 4) É possível remover completamente e substituir metadados. Para autenticação séria, são necessárias técnicas forenses digitais além da simples análise EXIF."
  },
  relatedTools: {
    title: "Ferramentas Relacionadas",
    description: "Complemente seu fluxo de trabalho com estas soluções:",
    tool1: {
      name: "Compressor de Imagens",
      url: "https://www.ufreetools.com/tool/image-compressor",
      description: "Reduza tamanho de arquivos mantendo qualidade para compartilhamento mais rápido."
    },
    tool2: {
      name: "Redimensionador em Lote",
      description: "Processe múltiplas imagens simultaneamente com ajustes consistentes.",
      url: "https://www.ufreetools.com/tool/image-batch-resizer"
    },
    tool3: {
      name: "Marca d'Água",
      description: "Adicione marcas visíveis ou discretas para proteção de direitos autorais.",
      url: "https://www.ufreetools.com/tool/image-watermark"
    },
    tool4: {
      name: "Pixelizador",
      url: "https://www.ufreetools.com/tool/image-pixelator",
      description: "Ofusque áreas sensíveis ou crie efeitos artísticos com pixelização."
    }
  },
  resources: {
    title: "Recursos Técnicos",
    resource1: {
      name: "Wikipedia EXIF",
      url: "https://pt.wikipedia.org/wiki/Exchangeable_image_file_format",
      description: "Especificações técnicas oficiais do padrão EXIF."
    },
    resource2: {
      name: "CIPA (Associação da Indústria)",
      url: "https://www.cipa.jp",
      description: "Organização responsável pelo desenvolvimento do padrão EXIF."
    },
    resource3: {
      name: "DPReview - Guia de Metadados",
      url: "https://www.dpreview.com",
      description: "Guia abrangente sobre metadados e seu impacto na fotografia digital."
    }
  }
}
