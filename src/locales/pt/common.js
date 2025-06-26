export default {
  loading: 'Carregando...',
  error: 'Erro',
  success: 'Sucesso',
  cancel: 'Cancelar',
  save: 'Salvar',
  delete: 'Excluir',
  confirm: 'Confirmar',
  navigation: 'Navegação',
  expand: 'Expandir',
  collapse: 'Recolher',
  languageDetector: {
    detected: 'Detectamos que o idioma do seu navegador é {lang}',
    switchQuestion: 'Deseja mudar para este idioma?',
    switchNow: 'Mudar agora',
    stayOn: 'Continuar usando {lang}'
  },
  defaultDescription: 'Ferramentas online gratuitas para desenvolvedores, designers e usuários cotidianos.',
  site: {
    name: 'Conjunto de Ferramentas'
  },
  characters: 'Caracteres',
  lines: 'Linhas',
  pasteFromClipboard: 'Colar da área de transferência',
  pasteError: 'Não foi possível ler da área de transferência',
  copyFailed: 'Falha ao copiar',
  simple: 'Simples',
  nested: 'Aninhado',
  complex: 'Complexo',
  example: 'Exemplo',
  loadExample: 'Carregar exemplo',
  spaces: 'Espaços',
  donate: 'Doar',
  buyMeACoffee: 'Compre-me um café',
  donateInternational: 'Usuários internacionais',
  donateChina: 'China continental',
  wechatPay: 'Código de doação WeChat',
  wechatDonation: 'Código de doação WeChat',
  scanToSupport: 'Escaneie o código QR abaixo para doar',
  thankYouForSupport: 'Agradecemos seu apoio!',
  backToHome: "Voltar à página inicial",
  submit: 'Enviar',
  submitting: 'Enviando...',
  useTool: 'Usar ferramenta',
  favorites: {
    title: 'Meus favoritos',
    description: 'Visualize e gerencie suas ferramentas favoritas',
    add: 'Adicionar aos favoritos',
    remove: 'Remover dos favoritos',
    empty: 'Você ainda não tem ferramentas nos favoritos',
    browseTools: 'Explorar todas as ferramentas',
    article: {
      title: "Funcionalidade de Favoritos: Gerenciando eficientemente suas ferramentas preferidas",
      intro: {
        title: "Introdução à funcionalidade de Favoritos e cenários de aplicação",
        p1: "<b>A funcionalidade de Favoritos</b> permite que você salve e gerencie facilmente suas ferramentas online mais usadas. Ao adicionar ferramentas aos favoritos, você pode criar uma coleção personalizada de ferramentas, sem precisar procurá-las entre muitas opções a cada uso. Para usuários que utilizam ferramentas específicas com frequência, isso pode melhorar significativamente a produtividade e economizar tempo valioso. A funcionalidade de Favoritos opera totalmente no navegador localmente, sem necessidade de criar conta ou fazer login, protegendo sua privacidade enquanto oferece um serviço conveniente.",
        p2: "No trabalho e estudo diários, <b>frequentemente usamos várias ferramentas online</b> para auxiliar na conclusão de diversas tarefas. Por exemplo, desenvolvedores podem precisar acessar frequentemente ferramentas de formatação JSON, conversores de codificação e ferramentas de compressão; designers podem precisar usar regularmente seletores de cores, processamento de imagem e ferramentas de otimização SVG; enquanto usuários comuns podem depender de conversores de documentos, geradores aleatórios ou ferramentas de cálculo. Com a funcionalidade de Favoritos, você pode organizar essas ferramentas em um só lugar, criando uma caixa de ferramentas personalizada para seu fluxo de trabalho.",
        p3: "<b>A funcionalidade de Favoritos é útil em vários cenários</b>, incluindo mas não limitado a: acesso rápido a ferramentas de codificação comuns no desenvolvimento de software; organização de recursos educacionais e ferramentas de cálculo durante o aprendizado; organização de ferramentas de processamento de documentos e conversão de formatos no ambiente de trabalho; e uso pessoal como coleção de pequenas ferramentas úteis do dia a dia. Seja você um profissional ou usuário comum, a funcionalidade de Favoritos pode ajudá-lo a usar ferramentas online com mais eficiência, criando uma coleção personalizada para suas necessidades."
      },
      tutorial: {
        title: "Como usar a funcionalidade de Favoritos",
        intro: "Aqui está um guia passo a passo simples para começar a organizar e gerenciar suas ferramentas favoritas:",
        step1: {
          title: "Passo 1: Adicionar ferramentas aos Favoritos",
          description: "Ao navegar pelas ferramentas, cada cartão de ferramenta ou página de detalhes tem um ícone de estrela no canto superior direito. Clicar neste ícone adiciona a ferramenta aos seus Favoritos. Quando a ferramenta é adicionada com sucesso, o ícone de estrela fica amarelo, indicando que a ferramenta está agora em sua lista de favoritos. Você pode adicionar ou remover ferramentas dos favoritos a qualquer momento, e o sistema salvará automaticamente suas escolhas."
        },
        step2: {
          title: "Passo 2: Acessar seus Favoritos",
          description: "Para ver todas as ferramentas que você favoritou, clique no link 'Favoritos' na barra de navegação ou menu lateral. Isso levará você à página de Favoritos, mostrando todas as ferramentas que você adicionou. Você também pode acessar rapidamente ferramentas favoritas recentes através da seção 'Meus Favoritos' na página inicial, e usar o link 'Ver tudo' para acessar a página completa de Favoritos."
        },
        step3: {
          title: "Passo 3: Gerenciar suas ferramentas favoritas",
          description: "Na página de Favoritos, você pode visualizar, usar e gerenciar suas ferramentas favoritas. Cada entrada de ferramenta tem um botão de exclusão (ícone de lixeira) no canto superior direito - clique nele para remover a ferramenta dos Favoritos. Você também pode clicar no nome ou descrição da ferramenta para ir diretamente para a página de uso. A lista de favoritos é salva automaticamente e permanecerá visível em sua próxima visita ao site."
        },
        step4: {
          title: "Passo 4: Entender as limitações de armazenamento local",
          description: "Como a funcionalidade de Favoritos usa o localStorage do navegador para armazenar dados, há algumas limitações importantes: 1) Os dados são salvos apenas no navegador atual e não são sincronizados entre dispositivos; 2) Se você limpar os dados do navegador ou usar o modo privado, seus favoritos podem ser perdidos; 3) O localStorage geralmente tem um limite de 5-10MB, que é mais que suficiente para a funcionalidade de Favoritos, mas teoricamente existe um limite superior; 4) Listas de favoritos em diferentes navegadores e dispositivos são independentes."
        }
      },
      faq: {
        title: "Perguntas frequentes",
        q1: "Onde os dados das ferramentas favoritas são salvos? Eles são sincronizados entre dispositivos?",
        a1: "<b>Os dados dos Favoritos são salvos inteiramente no seu navegador local</b>, usando a API localStorage fornecida pelo navegador. Isso significa que sua lista de favoritos não é enviada a nenhum servidor, nem sincronizada automaticamente entre diferentes dispositivos ou navegadores. Este design tem duas vantagens principais: primeiro, protege sua privacidade, pois os dados ficam inteiramente no seu dispositivo; segundo, não requer registro de conta ou login para uso. No entanto, isso também significa que se você usar dispositivos, navegadores diferentes ou limpar os dados do navegador, precisará recriar sua lista de favoritos. Considerando que a maioria dos usuários geralmente acessa as ferramentas usando dispositivos e navegadores fixos, essa compensação é razoável.",
        
        q2: "Quantas ferramentas posso favoritar? Existe um limite?",
        a2: "<b>O número de ferramentas que você pode favoritar é teoricamente limitado pelo armazenamento do localStorage do navegador</b>, mas esse limite geralmente está entre 5-10MB, o que é mais que suficiente para a funcionalidade de Favoritos. Considerando que cada ferramenta ocupa em média 1KB de dados, você pode facilmente favoritar milhares de ferramentas sem problemas de armazenamento. Na prática, a maioria dos usuários não favorita mais de 100 ferramentas, então não há com o que se preocupar. Se você é um usuário avançado e favoritou muitas ferramentas, considere organizar periodicamente sua lista, removendo ferramentas não utilizadas para manter seus favoritos limpos e práticos. Em casos extremamente raros, se você realmente encontrar problemas de limite de armazenamento, o navegador normalmente exibirá mensagens de erro relevantes.",
        
        q3: "Se eu limpar os dados do navegador, meus favoritos serão perdidos?",
        a3: "<b>Sim, se você limpar os dados do navegador (especialmente dados de armazenamento local ou cookies), seus favoritos serão perdidos</b>. Isso ocorre porque a funcionalidade de Favoritos depende do localStorage do navegador para salvar suas preferências. Da mesma forma, se você usar o modo privado/anonimizado do navegador, seus favoritos não serão mantidos após fechar a janela. Para evitar a perda acidental de favoritos, considere estas sugestões: ao limpar dados do navegador, você pode optar por manter seletivamente dados de sites específicos; antes de atualizar o navegador ou trocar de dispositivo, você pode anotar suas ferramentas favoritas importantes; evite adicionar ferramentas importantes aos favoritos no modo privado. Se você usa vários dispositivos com frequência ou limpa regularmente os dados do navegador, considere usar os favoritos do navegador como método de backup, adicionando páginas de ferramentas importantes aos favoritos do navegador.",
        
        q4: "Por que não há um sistema de contas para salvar meus favoritos?",
        a4: "<b>Optamos por usar armazenamento local em vez de um sistema de contas principalmente pelas seguintes razões</b>: primeiro, protege a privacidade do usuário, pois você não precisa fornecer informações pessoais para usar a funcionalidade; segundo, simplifica a experiência do usuário, eliminando a necessidade de registro, login ou lembrar senhas; terceiro, reduz riscos de segurança, já que não há informações de conta que possam ser vazadas; por fim, torna o carregamento do site mais rápido, pois não requer verificação de conta ou sincronização de dados. Entendemos que a sincronização entre dispositivos é uma funcionalidade útil, mas priorizamos simplicidade, privacidade e uma experiência de usuário sem atritos. Em atualizações futuras, podemos considerar oferecer um sistema de contas opcional, permitindo que usuários escolham se desejam usar uma conta para sincronizar favoritos, mas a opção de armazenamento local sempre permanecerá disponível, respeitando usuários que priorizam privacidade e simplicidade."
      },
      relatedTools: {
        title: "Ferramentas que você também pode gostar",
        description: "Explore estas ferramentas populares e adicione-as aos seus Favoritos:",
        tool1: {
          name: "Formatador JSON",
          url: "https://www.ufreetools.com/tool/json-formatter",
          description: "Embeleza, compacta e valida dados JSON, com destaque de sintaxe e detecção de erros."
        },
        tool2: {
          name: "Gerador de senhas",
          url: "https://www.ufreetools.com/tool/password-generator",
          description: "Crie senhas fortes, com personalização de comprimento, complexidade e tipos de caracteres."
        },
        tool3: {
          name: "Compressor de imagens",
          url: "https://www.ufreetools.com/tool/image-compressor",
          description: "Reduza o tamanho de imagens mantendo a qualidade, ideal para web e redes sociais."
        }
      },
      resources: {
        title: "Saiba mais sobre tecnologias de armazenamento local",
        resource1: {
          name: "MDN Web Docs: localStorage",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
          description: "Documentação técnica detalhada e guia de uso da API localStorage na Mozilla Developer Network."
        },
        resource2: {
          name: "Especificação de Web Storage do W3C",
          url: "https://www.w3.org/TR/webstorage/",
          description: "Documento de especificação oficial da tecnologia Web Storage, detalhando a implementação padrão do localStorage."
        }
      }
    }
  },
  home: {
    favoritedToolsTitle: 'Meus favoritos',
    viewAllFavorites: 'Ver todos',
  }
};