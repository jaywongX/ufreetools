export default {
  title: "Formatador HTML: Ferramenta essencial para desenvolvimento web",
  overview: {
    title: "O que é um Formatador HTML?",
    content: "<strong>Formatação HTML</strong> é o processo de organizar a estrutura do código para melhorar legibilidade e manutenção. Esta ferramenta oferece duas funções principais: <strong>formatação</strong> e <strong>minificação</strong> de código HTML.<br><br>O modo <strong>formatar</strong> reorganiza o código com indentação adequada, espaçamento consistente e quebras lógicas de linha, tornando-o mais fácil de ler e editar. Já o modo <strong>minificar</strong> remove espaços desnecessários, comentários e caracteres redundantes para reduzir o tamanho do arquivo sem alterar sua funcionalidade."
  },
  useCases: {
    title: "Aplicações Práticas",
    items: [
      {
        title: "Melhoria no fluxo de desenvolvimento",
        description: "Organize códigos HTML desorganizados recebidos de clientes ou editores visuais, aumentando significativamente a produtividade."
      },
      {
        title: "Depuração e solução de problemas",
        description: "Identifique tags faltantes, aninhamento incorreto ou erros de sintaxe que podem causar problemas de layout."
      },
      {
        title: "Otimização de desempenho",
        description: "Reduza o tamanho dos arquivos HTML para melhorar velocidade de carregamento e experiência do usuário."
      },
      {
        title: "Ensino e aprendizagem",
        description: "Prepare exemplos de código bem formatados para materiais educacionais."
      },
      {
        title: "Limpeza de saída de CMS",
        description: "Organize códigos HTML gerados por editores WYSIWYG em sistemas de gerenciamento de conteúdo."
      },
      {
        title: "Manutenção de código legado",
        description: "Padronize códigos antigos para facilitar a manutenção por novos membros da equipe."
      },
      {
        title: "Desenvolvimento de templates de email",
        description: "Formate templates HTML para emails mantendo compatibilidade com clientes de email."
      }
    ]
  },
  guide: {
    title: "Como usar o Formatador HTML",
    intro: "Siga estas etapas simples para formatar seu código HTML:",
    steps: [
      {
        title: "Selecione o modo",
        description: "Escolha entre 'Formatar' para melhorar legibilidade ou 'Minificar' para otimização."
      },
      {
        title: "Configure as opções",
        description: "Defina preferências como tamanho de indentação e tratamento de comentários."
      },
      {
        title: "Insira seu código",
        description: "Cole seu HTML ou use exemplos pré-definidos para testar a ferramenta."
      },
      {
        title: "Processe o código",
        description: "Clique no botão correspondente para formatar ou minificar seu HTML."
      },
      {
        title: "Analise os resultados",
        description: "Verifique o código processado e as estatísticas de redução."
      },
      {
        title: "Salve ou copie",
        description: "Exporte o resultado para seu ambiente de desenvolvimento."
      },
      {
        title: "Ajuste configurações",
        description: "Refine as opções conforme necessário para obter resultados ideais."
      }
    ]
  },
  tips: {
    title: "Dicas Profissionais",
    intro: "Melhores práticas para formatação HTML:",
    items: [
      "Use HTML formatado durante desenvolvimento e minificado em produção",
      "Para documentos grandes, aumente o comprimento máximo de linha",
      "Mantenha quebras de linha intencionais entre seções lógicas",
      "Formate regularmente durante o desenvolvimento, não apenas no final",
      "Para templates complexos, adicione marcadores de comentários para orientação",
      "Teste templates de email em vários clientes após formatação",
      "Use indentação consistente para elementos aninhados",
      "Remova código redundante antes de formatar",
      "Valide seu HTML contra padrões W3C",
      "Documente estruturas complexas com comentários estratégicos"
    ]
  },
  faq: {
    title: "Perguntas Frequentes",
    items: [
      {
        question: "Qual a diferença entre formatar e minificar?",
        answer: "Formatação melhora legibilidade para humanos, enquanto minificação otimiza para máquinas reduzindo tamanho de arquivo."
      },
      {
        question: "A formatação pode quebrar meu site?",
        answer: "Geralmente não, mas teste sempre, especialmente com elementos sensíveis a espaços em branco."
      },
      {
        question: "Como isso afeta SEO?",
        answer: "HTML minificado melhora velocidade de carregamento, fator importante para SEO."
      },
      {
        question: "Funciona com frameworks como React?",
        answer: "Melhor para HTML puro. Para frameworks, considere ferramentas específicas."
      },
      {
        question: "E CSS/JavaScript inline?",
        answer: "Serão formatados/minificados junto com o HTML. Para códigos complexos, considere arquivos externos."
      },
      {
        question: "Quanto posso reduzir com minificação?",
        answer: "Tipicamente 10-25%, dependendo da quantidade de comentários e espaços no original."
      },
      {
        question: "Como preservar comentários importantes?",
        answer: "Use a opção 'Preservar comentários' ou marque comentários críticos de forma especial."
      }
    ]
  },
  bestPractices: {
    title: "Melhores Práticas",
    intro: "Recomendações para código HTML de qualidade:",
    items: [
      "Estabeleça padrões consistentes para sua equipe",
      "Use elementos HTML semânticos",
      "Mantenha aninhamento lógico de elementos",
      "Aplique indentação consistente",
      "Controle comprimento de linhas (80-120 caracteres)",
      "Agrupe elementos relacionados visualmente",
      "Formate atributos de forma consistente",
      "Comente seções complexas estrategicamente",
      "Use letras minúsculas para elementos e atributos",
      "Remova código redundante antes de formatar",
      "Valide contra padrões W3C",
      "Formate regularmente durante o desenvolvimento"
    ]
  }
}
