export default {
    name: 'Gerador de Carimbos',
    description: 'Crie carimbos digitais online, incluindo carimbos corporativos e pessoais',
    
    // Interface principal
    text: 'Texto do carimbo',
    textPlaceholder: 'Digite o texto circular',
    centerText: 'Texto central',
    centerTextPlaceholder: 'Digite texto ou símbolo central',
    font: 'Fonte',
    shape: 'Formato do carimbo',
    size: 'Tamanho do carimbo',
    color: 'Cor do carimbo',
    generate: 'Gerar carimbo',
    download: 'Baixar imagem',
    reset: 'Redefinir',
    preview: 'Pré-visualização',
    previewPlaceholder: 'Clique em "Gerar carimbo" para visualizar',
    bottomText: 'Texto inferior',
    bottomTextPlaceholder: 'Digite texto inferior',
    centerSymbol: 'Símbolo central',
    centerImage: 'Enviar imagem central',
    template: 'Modelos de carimbo',
    centerSymbolSize: 'Tamanho do símbolo central',
    exportFormat: 'Formato de exportação',
    lineWidth: 'Espessura da linha',
    defaultSealText: 'Empresa Limitada XXX',
    defaultBottomText: 'Carimbo para contratos',
    width: 'Largura',
    height: 'Altura',
    agingEffect: 'Efeito envelhecido',
    colorHex: 'Valor hexadecimal da cor',
    customColor: 'Cor personalizada',
  
    // Opções de fonte
    fonts: {
      simsun: 'SimSun',
      kaiti: 'KaiTi',
      simhei: 'SimHei',
      yahei: 'Microsoft YaHei',
      stxingkai: 'STXingkai',
      stzhongsong: 'STZhongsong',
      stfangsong: 'STFangsong',
      arial: 'Arial',
      times: 'Times New Roman',
      georgia: 'Georgia'
    },
    
    // Opções de formato
    shapes: {
      circle: 'Circular',
      ellipse: 'Elíptico',
      square: 'Quadrado'
    },
    
    // Opções de cor
    colors: {
      red: 'Vermelho',
      darkRed: 'Vermelho escuro',
      blue: 'Azul',
      navy: 'Azul marinho',
      green: 'Verde',
      darkGreen: 'Verde escuro',
      purple: 'Roxo',
      magenta: 'Magenta',
      brown: 'Marrom',
      black: 'Preto',
      custom: 'Cor personalizada'
    },
    
    // Guia de uso
    howToUse: 'Instruções',
    instructions: {
      step1: 'Digite o texto que deseja exibir ao redor do carimbo, como nome da empresa ou pessoal',
      step2: 'Selecione texto ou símbolo central, como asterisco, logotipo ou outros símbolos',
      step3: 'Ajuste formato, tamanho e cor do carimbo, visualize o resultado',
      step4: 'Clique em "Baixar imagem" para salvar seu carimbo personalizado'
    },
    
    // Seção de artigo
    article: {
      title: "Gerador de Carimbos: Crie facilmente carimbos digitais",
      intro: {
        title: "Funcionalidades e aplicações do Gerador de Carimbos",
        p1: "<b>O Gerador de Carimbos</b> é uma ferramenta online para criar imagens de carimbos digitais sem instalação, diretamente no navegador. Ideal para carimbos corporativos, pessoais ou decorativos, com personalização simples. Perfeito para documentos eletrônicos, logotipos ou projetos criativos.",
        p2: "<b>Carimbos digitais têm diversas aplicações</b>. Empresas criam carimbos oficiais para contratos e documentos; designers usam em identidades visuais; professores fazem carimbos personalizados para alunos; usuários criam assinaturas digitais. O gerador simplifica esse processo sem necessidade de habilidades avançadas.",
        p3: "<b>Comparado a carimbos físicos</b>, o gerador online oferece vantagens: é gratuito, instantâneo, flexível para ajustes e ideal para documentos digitais. Essas características o tornam a escolha perfeita para necessidades modernas de carimbos."
      },
      tutorial: {
        title: "Como usar o Gerador de Carimbos",
        intro: "Siga este guia passo a passo para criar carimbos personalizados:",
        step1: {
          title: "Passo 1: Configurar texto",
          description: "No campo 'Texto do carimbo', insira o conteúdo circular (nome da empresa/pessoa). No 'Texto central', adicione símbolos como ★ ou 'Carimbo'. Mantenha textos curtos para melhor legibilidade."
        },
        step2: {
          title: "Passo 2: Escolher fonte e formato",
          description: "Selecione fontes - tradicionais (SimSun, KaiTi) ou modernas (SimHei, YaHei). Escolha formato circular (tradicional), elíptico ou quadrado conforme necessidade."
        },
        step3: {
          title: "Passo 3: Ajustar tamanho e cor",
          description: "Ajuste o tamanho (200-300px para uso padrão). Selecione cores - vermelho tradicional ou outras para diferentes estilos corporativos/pessoais."
        },
        step4: {
          title: "Passo 4: Gerar e baixar",
          description: "Clique em 'Gerar carimbo' para visualizar. Ajuste conforme necessário e baixe em PNG com fundo transparente para documentos/designs. Use 'Redefinir' para começar novamente."
        }
      },
      faq: {
        title: "Perguntas frequentes",
        q1: "Qual a qualidade da imagem gerada? Pode ser impressa?",
        a1: "<b>As imagens são geradas em PNG</b> com fundo transparente e bordas nítidas. Tamanhos de 300px são ideais para telas e impressão básica. Para alta qualidade, use 400-500px. Como são vetoriais, mantêm qualidade quando ampliadas, perfeitas para documentos e designs profissionais.",
        
        q2: "Os carimbos gerados têm validade legal?",
        a2: "<b>Estes carimbos são apenas para fins decorativos/informais</b>, sem validade legal. Carimbos eletrônicos oficiais requerem certificação por autoridades competentes, conforme leis locais. Consulte profissionais para carimbos com validade jurídica.",
        
        q3: "Como adicionar símbolos ou imagens especiais?",
        a3: "<b>Use caracteres Unicode</b> no campo central (★, ✓, ❤). Para designs complexos, edite a imagem básica em softwares como Photoshop. Futuras versões incluirão mais opções de personalização.",
        
        q4: "O texto não cabe ou sobrepõe?",
        a4: "<b>Problemas de texto geralmente relacionam-se ao tamanho</b>. Soluções: reduza caracteres, aumente o carimbo, experimente fontes diferentes ou use abreviações. Esses ajustes garantem carimbos legíveis e visualmente atraentes."
      },
      relatedTools: {
        title: "Ferramentas relacionadas",
        description: "Outras ferramentas úteis para complementar seu trabalho com carimbos e design:",
        tool1: {
          name: "Gerador de QR Code",
          url: "https://www.ufreetools.com/tool/qr-code-generator",
          description: "Crie QR Codes personalizáveis para marketing, cartões de visita e embalagens."
        },
        tool2: {
          name: "Recortador de Imagens",
          url: "https://www.ufreetools.com/tool/image-cropper",
          description: "Recorte e redimensione imagens para diversos usos."
        },
        tool3: {
          name: "Otimizador SVG",
          url: "https://www.ufreetools.com/tool/svg-optimizer",
          description: "Otimize arquivos SVG para melhor desempenho na web."
        }
      },
      resources: {
        title: "Recursos adicionais",
        resource1: {
          name: "Regulamento eIDAS (UE)",
          url: "https://eur-lex.europa.eu/eli/reg/2014/910/oj",
          description: "Quadro legal da UE para assinaturas e carimbos eletrônicos, definindo requisitos técnicos e validade jurídica."
        },
        resource2: {
          name: "Lei de Assinatura Eletrônica dos EUA (ESIGN)",
          url: "https://www.ecfr.gov/cgi-bin/text-idx?SID=8e7f4f5d9b7f4f5d9b7f4f5d9b7f4f5d&mc=true&node=pt15.1.11&rgn=div5",
          description: "Legislação americana sobre assinaturas eletrônicas, aplicável também a carimbos digitais como evidência legal."
        }
      }
    },
    templates: {
      custom: 'Personalizado',
      company: 'Carimbo corporativo',
      contract: 'Carimbo para contratos',
      finance: 'Carimbo financeiro',
      legal: 'Carimbo legal',
      personal: 'Carimbo pessoal'
    }
  };