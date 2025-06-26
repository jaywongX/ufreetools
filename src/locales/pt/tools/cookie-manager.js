export default {
    name: 'Gerenciador de Cookies',
    description: 'Visualize, crie, edite e exclua cookies do site atual',
    
    // Abas principais
    currentCookies: 'Cookies Atuais',
    createCookie: 'Criar Cookie',
    importExport: 'Importar/Exportar',
    
    // Lista de cookies
    noCookies: 'Nenhum cookie encontrado para este site',
    cookieName: 'Nome',
    cookieValue: 'Valor',
    cookieDomain: 'Domínio',
    cookiePath: 'Caminho',
    cookieExpires: 'Expiração',
    cookieSecure: 'Seguro (Secure)',
    cookieHttpOnly: 'HttpOnly',
    cookieSameSite: 'SameSite',
    actions: 'Ações',
    edit: 'Editar',
    delete: 'Excluir',
    save: 'Salvar',
    cancel: 'Cancelar',
    refresh: 'Atualizar',
    
    // Formulário de criação/edição
    addCookie: 'Adicionar Cookie',
    editCookie: 'Editar Cookie',
    required: 'Obrigatório',
    optional: 'Opcional',
    days: 'dias',
    hours: 'horas',
    minutes: 'minutos',
    cookieCreated: 'Cookie criado com sucesso',
    cookieUpdated: 'Cookie atualizado',
    cookieDeleted: 'Cookie excluído',
    createError: 'Erro ao criar cookie',
    updateError: 'Erro ao atualizar cookie',
    deleteError: 'Erro ao excluir cookie',
    
    // Importar/Exportar
    export: 'Exportar Cookies',
    import: 'Importar Cookies',
    exportAs: 'Exportar como',
    exportSuccess: 'Cookies exportados',
    importSuccess: '{count} cookies importados',
    importError: 'Erro ao importar cookies',
    
    // Opções de segurança
    none: 'Nenhum',
    strict: 'Estrito',
    lax: 'Flexível',
    
    // Notas e explicações
    domainNote: 'Deixe em branco para usar o domínio atual',
    pathNote: 'Padrão: caminho raiz "/"',
    expiresNote: 'Deixe em branco para cookie de sessão',
    secureNote: 'Enviado apenas via HTTPS',
    httpOnlyNote: 'Inacessível via JavaScript',
    sameSiteNote: 'Controle de requisições entre sites',
    
    // Formatos de importação
    importFormat: 'Formato de importação:\nnome=valor; expires=data; path=/; domain=exemplo.com; secure; httpOnly; sameSite=strict',
    jsonFormat: 'Formato JSON',
    textFormat: 'Formato texto',
    invalidFormat: 'Formato inválido',
    
    // Conteúdo do artigo
    article: {
      title: 'Gerenciador de Cookies: Entenda e controle os cookies de sites',
      features: {
        title: 'Funcionalidades e Casos de Uso',
        description: 'Nosso <strong>Gerenciador de Cookies</strong> oferece controle completo sobre cookies de sites, permitindo visualizar, criar, editar e excluir cookies do site atual. Esta poderosa ferramenta proporciona visibilidade e controle total sobre cookies armazenados no navegador, ajudando no gerenciamento de privacidade online e solução de problemas em sites.',
        useCasesTitle: 'Casos de Uso Práticos',
        useCases: {
          items: [
            '<strong>Testes de desenvolvimento web</strong>: Teste o comportamento de sites com diferentes configurações de cookies sem editar manualmente o armazenamento do navegador.',
            '<strong>Solução de problemas</strong>: Diagnostique problemas de login, sessão ou outros relacionados a cookies através da inspeção e modificação de cookies.',
            '<strong>Gerenciamento de privacidade</strong>: Controle seus dados pessoais visualizando informações armazenadas em cookies e excluindo seletivamente cookies de rastreamento indesejados.',
            '<strong>Gerenciamento de sessão</strong>: Crie ou modifique cookies de sessão para testar diferentes estados de usuário ou cenários de autenticação sem precisar fazer login repetidamente.',
            '<strong>Testes entre navegadores</strong>: Exporte cookies de um navegador e importe em outro para replicar o mesmo estado de navegação em diferentes navegadores.'
          ]
        }
      },
      faq: {
        title: 'Perguntas Frequentes',
        items: [
          {
            question: 'O que são cookies e por que sites os utilizam?',
            answer: 'Cookies são pequenos fragmentos de dados que sites armazenam em seu navegador. Eles possuem diversas funções, incluindo lembrar informações de login, rastrear comportamento do usuário, armazenar preferências, manter carrinhos de compras e permitir experiências personalizadas. Cookies são essenciais para muitas funcionalidades web modernas, mas também podem levantar preocupações de privacidade quando usados para rastreamento.'
          },
          {
            question: 'Como o Gerenciador de Cookies difere das configurações de cookie padrão do navegador?',
            answer: 'Embora navegadores ofereçam gerenciamento básico de cookies em suas configurações, nosso <strong>Gerenciador de Cookies</strong> proporciona controle mais refinado e funcionalidades adicionais. Você pode não apenas visualizar e excluir cookies (como navegadores permitem), mas também criar novos cookies, editar existentes, exportar cookies para backup e importá-los. Isso o torna ideal para desenvolvedores, testadores e usuários preocupados com privacidade que precisam de gerenciamento detalhado de cookies.'
          },
          {
            question: 'É seguro excluir cookies? Isso afetará minha experiência de navegação?',
            answer: 'Excluir cookies geralmente é seguro, mas pode afetar sua experiência de navegação de várias formas. Você pode ser desconectado de sites, perder preferências salvas ou precisar recriar carrinhos de compras. O <strong>Gerenciador de Cookies</strong> permite excluir cookies seletivamente em vez de limpar todos, dando a você controle preciso sobre quais dados de navegação manter ou remover.'
          },
          {
            question: 'O que significam os diferentes atributos de cookie como "SameSite" e "HttpOnly"?',
            answer: 'Atributos de cookies controlam seu comportamento e acessibilidade:<br>- <strong>Secure</strong>: Cookie é enviado apenas em conexões HTTPS<br>- <strong>HttpOnly</strong>: Inacessível via JavaScript<br>- <strong>SameSite</strong>: Controla quando cookies são enviados com requisições entre sites (None, Lax ou Strict)<br>- <strong>Domain</strong>: Especifica quais domínios podem receber o cookie<br>- <strong>Path</strong>: Restringe o cookie a caminhos específicos no site<br>- <strong>Expires</strong>: Define quando o navegador deve remover o cookie'
          },
          {
            question: 'Posso usar esta ferramenta para importar cookies de outro computador ou navegador?',
            answer: 'Sim, a funcionalidade de importação/exportação do <strong>Gerenciador de Cookies</strong> permite transferir cookies entre navegadores ou dispositivos. Exporte seus cookies como arquivo JSON ou texto, transfira o arquivo para outro dispositivo e use a ferramenta nesse dispositivo para importá-los. Isso é especialmente útil para desenvolvedores que precisam replicar estados de usuário ou para transferir sessões de navegação entre computadores.'
          }
        ]
      },
      guide: {
        title: 'Como usar o Gerenciador de Cookies',
        step1: {
          title: 'Visualizar cookies atuais',
          description: 'Ao abrir o <strong>Gerenciador de Cookies</strong>, a aba "Cookies Atuais" mostra todos os cookies do site atual. Esta lista exibe o nome, valor e data de expiração de cada cookie. Para ver mais detalhes, clique no botão "Editar" ao lado do cookie. Para atualizar a lista e garantir que está vendo os cookies mais recentes, clique no botão "Atualizar" no topo da lista.'
        },
        step2: {
          title: 'Criar novo cookie',
          description: 'Para adicionar um novo cookie, clique na aba "Criar Cookie". Preencha os campos obrigatórios (nome e valor) e quaisquer atributos opcionais como domínio, caminho ou data de expiração. Configure opções de segurança como o flag Secure ou atributo SameSite conforme necessário. Após configurar o cookie, clique em "Salvar" para criá-lo. A ferramenta confirmará a criação bem-sucedida e retornará automaticamente à visualização da lista de cookies.'
        },
        step3: {
          title: 'Editar cookie existente',
          description: 'Para modificar um cookie, encontre-o na lista "Cookies Atuais" e clique em "Editar". Isso carregará os detalhes do cookie no formulário de edição. Faça as alterações desejadas em qualquer atributo do cookie. Ao terminar, clique em "Salvar" para atualizar o cookie. A ferramenta confirmará a atualização. Observe que editar um cookie na verdade cria um novo cookie com o mesmo nome mas atributos atualizados.'
        },
        step4: {
          title: 'Excluir cookie',
          description: 'Para remover um cookie, encontre-o na lista "Cookies Atuais" e clique em "Excluir". Uma caixa de confirmação aparecerá para prevenir exclusões acidentais. Após confirmar, o cookie será imediatamente removido do seu navegador e a lista será atualizada automaticamente. Isso lhe dá controle total sobre quais dados os sites podem armazenar em seu navegador.'
        },
        step5: {
          title: 'Importar e exportar cookies',
          description: 'Para transferir cookies, navegue até a aba "Importar/Exportar". Para exportar, escolha o formato JSON (melhor estrutura) ou texto (melhor compatibilidade). Clique no botão correspondente para baixar o arquivo. Para importar, cole os dados do cookie na área de texto e clique em "Importar". Você pode importar cookies no formato texto padrão ou JSON. A ferramenta confirmará a importação bem-sucedida e mostrará quantos cookies foram importados.'
        }
      },
      conclusion: 'O <strong>Gerenciador de Cookies</strong> lhe dá controle total sobre os cookies do navegador, seja você um desenvolvedor testando funcionalidades de sites, um usuário preocupado com privacidade gerenciando dados pessoais, ou alguém solucionando problemas em sites. Ao entender e gerenciar ativamente seus cookies, você pode melhorar sua experiência de navegação enquanto mantém controle sobre sua privacidade online.'
    }
  };