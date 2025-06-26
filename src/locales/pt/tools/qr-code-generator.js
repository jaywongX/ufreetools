export default {
    name: 'Gerador de QR Code',
    description: 'Crie QR Codes personalizáveis para URLs, textos e mais',
    
    // Opções de configuração
    options: {
      content: 'Conteúdo do QR Code',
      contentType: 'Tipo de conteúdo',
      errorCorrectionLevel: 'Nível de correção de erros',
      size: 'Tamanho',
      margin: 'Margem',
      foregroundColor: 'Cor principal',
      backgroundColor: 'Cor de fundo',
      logo: 'Adicionar Logo',
      logoSize: 'Tamanho do Logo',
      cornerRadius: 'Cantos arredondados'
    },
    
    // Tipos de conteúdo
    contentTypes: {
      url: 'URL',
      text: 'Texto simples',
      email: 'E-mail',
      phone: 'Telefone',
      sms: 'SMS',
      wifi: 'Rede Wi-Fi',
      vcard: 'Cartão de visita (vCard)',
      mecard: 'Cartão de visita (MeCard)'
    },
    
    // Níveis de correção
    errorLevels: {
      L: 'Baixo (7%)',
      M: 'Médio (15%)',
      Q: 'Alto (25%)',
      H: 'Máximo (30%)'
    },
    
    // Ações
    actions: {
      generate: 'Gerar QR Code',
      download: 'Baixar',
      downloadSVG: 'Baixar SVG',
      downloadPNG: 'Baixar PNG',
      copy: 'Copiar imagem',
      clear: 'Limpar',
      uploadLogo: 'Enviar Logo'
    },
    
    // Modelos pré-definidos
    templates: {
      title: 'Modelos rápidos',
      confirmReplace: 'Deseja substituir o conteúdo atual?',
      confirm: 'Confirmar',
      cancel: 'Cancelar',
      url: {
        name: 'Link de site'
      },
      email: {
        name: 'Endereço de e-mail'
      },
      phone: {
        name: 'Número de telefone'
      },
      sms: {
        name: 'Mensagem SMS'
      },
      wifi: {
        name: 'Configuração Wi-Fi',
        example: {
          ssid: 'Nome da rede',
          password: 'Senha'
        }
      },
      geo: {
        name: 'Localização geográfica'
      }
    },
    
    // Aparência
    appearance: {
      title: 'Personalização'
    },
    
    // Visualização
    preview: {
      title: 'Pré-visualização',
      generating: 'Gerando...',
      clickGenerateButton: 'Clique em "Gerar QR Code"',
      clickToDownload: 'Clique para baixar'
    },
    
    // Dicas
    tips: {
      title: 'Dicas úteis',
      saveToPrint: 'Você pode salvar o QR Code como imagem para impressão ou compartilhamento.',
      errorCorrection: 'Níveis mais altos de correção permitem que o código seja lido mesmo com danos parciais.'
    },
    
    // Configurações Wi-Fi
    wifi: {
      ssid: 'Nome da rede (SSID)',
      password: 'Senha',
      encryption: 'Tipo de criptografia',
      hidden: 'Rede oculta'
    },
    
    // Placeholders
    placeholders: {
      content: 'Digite texto, link ou outro conteúdo...'
    },
    
    // Contagem de caracteres
    characters: 'caracteres',
    maxChars: 'Recomendado até 300 caracteres',
    
    // Mensagens
    messages: {
      copied: 'Copiado para a área de transferência!',
      generated: 'QR Code gerado com sucesso',
      contentRequired: 'Por favor, insira o conteúdo',
      downloaded: 'QR Code baixado',
      confirmReplace: 'Clique para confirmar a substituição',
      contentUpdated: 'Conteúdo atualizado',
      changesCancelled: 'Alterações canceladas',
      invalidUrl: 'URL inválida',
      invalidEmail: 'E-mail inválido',
      invalidPhone: 'Telefone inválido',
      logoTooBig: 'Logo muito grande (máx. 1MB)'
    },
    
    // Erros
    errors: {
      canvasNotReady: 'Elemento canvas não está pronto',
      generationError: 'Erro ao gerar QR Code',
      generationErrorWithMessage: 'Erro ao gerar QR Code: {message}',
      downloadError: 'Erro ao baixar QR Code: {message}'
    },
    
    // Artigo informativo
    article: {
      title: "Gerador de QR Code: Crie códigos personalizados",
      features: {
        title: "Aplicações dos QR Codes",
        description: "Nosso <strong>gerador de QR Code</strong> permite criar códigos versáteis para diversos usos. Diferente dos códigos de barras tradicionais, os <strong>QR Codes</strong> armazenam muito mais informação em formato compacto, podendo ser lidos por smartphones.<br><br>Esta ferramenta avançada suporta múltiplos tipos de conteúdo como URLs, texto, contatos, credenciais Wi-Fi e localizações. Cada código pode ser totalmente personalizado em tamanho, cores e nível de correção, mantendo sempre sua legibilidade.",
        useCases: {
          title: "Casos de uso prático",
          items: [
            "<strong>Marketing</strong>: Use em materiais promocionais para direcionar clientes ao seu site ou ofertas especiais.",
            "<strong>Pagamentos</strong>: Crie códigos para transações rápidas e sem contato.",
            "<strong>Cardápios digitais</strong>: Restaurantes podem oferecer menus via QR Code.",
            "<strong>Eventos</strong>: Utilize para ingressos e credenciamento rápido.",
            "<strong>Produtos</strong>: Link para manuais ou informações adicionais.",
            "<strong>Educação</strong>: Conecte estudantes a materiais complementares."
          ]
        }
      },
      faq: {
        title: "Perguntas frequentes",
        items: [
          {
            question: "Qual nível de correção devo usar?",
            answer: "<strong>L (Baixo)</strong>: 7% de redundância - códigos menores<br><strong>M (Médio)</strong>: 15% - bom para uso geral<br><strong>Q (Alto)</strong>: 25% - ideal para códigos com logo<br><strong>H (Máximo)</strong>: 30% - melhor para ambientes desafiadores"
          },
          {
            question: "Posso adicionar um logo sem prejudicar a leitura?",
            answer: "Sim, siga estas diretrizes:<br>1. Use correção H<br>2. Logo não deve cobrir mais que 30%<br>3. Mantenha bom contraste<br>4. Evite os marcadores de posição"
          },
          {
            question: "Quais informações posso codificar?",
            answer: "• URLs<br>• Texto (até 4.000 caracteres)<br>• Contatos (vCard)<br>• Credenciais Wi-Fi<br>• Números de telefone<br>• SMS pré-configurados<br>• Localizações geográficas"
          },
          {
            question: "Qual tamanho ideal para impressão?",
            answer: "<strong>Uso próximo</strong>: 2×2cm<br><strong>Padrão</strong>: 3×3cm<br><strong>1-2m de distância</strong>: 10×10cm<br><strong>Cartazes</strong>: 30×30cm ou mais"
          },
          {
            question: "Como rastrear scans do meu QR Code?",
            answer: "1. Use encurtadores de URL com analytics<br>2. Direcione para páginas com Google Analytics<br>3. Utilize serviços de QR dinâmicos<br>4. Adicione parâmetros UTM"
          }
        ]
      },
      guide: {
        title: "Como criar seu QR Code",
        step1: "<strong>Selecione o tipo</strong>: Escolha entre URL, texto, contato ou Wi-Fi.",
        step2: "<strong>Insira os dados</strong>: Preencha as informações necessárias.",
        step3: "<strong>Personalize</strong>: Ajuste cores, tamanho e adicione logo.",
        step4: "<strong>Teste</strong>: Verifique se o código é legível.",
        step5: "<strong>Use</strong>: Baixe e implemente onde necessário."
      },
      conclusion: "QR Codes são ferramentas versáteis que conectam o mundo físico ao digital. Nosso gerador simplifica a criação de códigos personalizados e funcionais para diversos propósitos. À medida que a tecnologia avança, os QR Codes continuarão a ser ativos valiosos em nossa sociedade conectada."
    }
  }