export default {
  title: "Ferramenta JWT: Analise e Valide Tokens de Autenticação",
  features: {
    title: "Funcionalidades da Ferramenta JWT",
    description: "Esta <strong>ferramenta de depuração JWT</strong> permite decodificar e validar tokens JSON Web Token (JWT) usados em sistemas de autenticação modernos. Com este <strong>decodificador JWT online</strong>, você pode visualizar o conteúdo do token, verificar sua assinatura e identificar problemas comuns.<br><br>O <strong>validador de tokens</strong> suporta todos os algoritmos padrão como HS256, RS256 e ES256, sendo essencial para desenvolvedores que trabalham com APIs RESTful, autenticação single sign-on (SSO) e sistemas de microserviços.",
    useCases: {
      title: "Aplicações Práticas",
      items: [
        "<strong>Depuração de APIs</strong>: Identifique problemas em tokens de autenticação que causam erros 401/403",
        "<strong>Integração com OAuth</strong>: Verifique tokens emitidos por provedores de identidade como Google, Auth0 e Azure AD",
        "<strong>Testes de Segurança</strong>: Analise tokens para garantir que seguem as melhores práticas de segurança",
        "<strong>Desenvolvimento</strong>: Gere tokens de teste para simular diferentes cenários de autenticação",
        "<strong>Educação</strong>: Aprenda sobre a estrutura e funcionamento dos tokens JWT",
        "<strong> autenticação de microserviços </strong> : a equipe que constroem a arquitetura de microserviços pode verificar se <strong> token de serviço </strong> se as informações de autorização corretas são transmitidas entre serviços e se os limites de segurança adequados são mantidos"
      ]
    }
  },
  faq: {
    title: "Perguntas Frequentes",
    items: [
      {
        question: "É seguro usar esta ferramenta com tokens reais?",
        answer: "Sim - todo o processamento ocorre no seu navegador. Seus tokens nunca são enviados para nossos servidores. Para máxima segurança, recomendamos usar tokens de teste em ambientes de produção."
      },
      {
        question: "Quais informações um token JWT contém?",
        answer: "Um JWT possui três partes: <strong>Cabeçalho</strong> (metadados e algoritmo), <strong>Conteúdo</strong> (dados do usuário e permissões) e <strong>Assinatura</strong> (garante autenticidade). Nosso <strong>analisador JWT</strong> exibe todas essas informações de forma organizada."
      },
      {
        question: "Como verificar se um token foi adulterado?",
        answer: "Use a função <strong>Validar Assinatura</strong> com a chave correta. Se a validação falhar, o token pode ter sido modificado ou está usando uma chave diferente."
      },
      {
        question: "Por que meu token válido está sendo rejeitado?",
        answer: "Verifique: <strong>Data de expiração</strong> (exp), <strong>Período de validade</strong> (nbf), <strong>Emissor</strong> (iss) e <strong>Audiência</strong> (aud). Nosso <strong>validador JWT</strong> destaca esses problemas comuns."
      },
      {
        question: "Posso gerar tokens para testes?",
        answer: "Sim - use <strong>Gerar Token</strong> para criar JWTs com conteúdo personalizado. Ideal para testar diferentes cenários de autenticação e autorização."
      }
    ]
  },
  guide: {
    title: "Como Usar a Ferramenta JWT",
    steps: [
      "<strong>Cole seu token JWT</strong> no campo superior",
      "<strong>Clique em Decodificar</strong> para visualizar cabeçalho e conteúdo",
      "<strong>Verifique datas</strong> de expiração (exp) e validade (nbf)",
      "<strong>Insira a chave</strong> apropriada para validar a assinatura",
      "<strong>Analise os resultados</strong> para identificar problemas",
      "<strong>Gere novos tokens</strong> para testes quando necessário",
      "Para <strong> gerar novo token </strong> clique na opção 'gerar token ', especifique a carga necessária no formato JSON, selecione o algoritmo, forneça a chave de assinatura (ou gere uma) e a ferramenta criará o JWT com o formato correto para você"
    ]
  },
  conclusion: "Esta ferramenta JWT é indispensável para desenvolvedores que trabalham com sistemas de autenticação modernos. Ao fornecer insights detalhados sobre tokens JWT, ela simplifica a depuração de problemas de autenticação e ajuda a garantir a segurança de suas aplicações."
}
