export default {
  title: "Entendendo conflitos no Git e como resolvê-los",
  overview: {
    title: "O que é resolução de conflitos no Git?",
    content: "Resolução de conflitos no Git é o processo de gerenciar e solucionar conflitos que surgem durante merges ou rebases. Quando múltiplos desenvolvedores modificam a mesma parte de um arquivo, o Git não pode determinar automaticamente quais alterações devem ser mantidas. É aqui que entra o resolvedor de conflitos do Git.<br><br>Este simulador de resolução de conflitos Git ajuda você a entender e praticar a resolução de conflitos de merge em um ambiente seguro. Ao simular cenários comuns de conflito, você pode aprender os mecanismos de resolução sem afetar código de projetos reais. O simulador destaca os conflitos de merge, mostra alterações conflitantes lado a lado e fornece ferramentas para praticar a resolução eficiente desses conflitos."
  },
  useCases: {
    title: "Cenários comuns que exigem resolução de conflitos Git",
    items: [
      {
        title: "Colaboração em equipe com repositório compartilhado",
        description: "Quando vários membros da equipe modificam o mesmo arquivo simultaneamente, conflitos provavelmente surgirão durante o merge. Aprender habilidades de resolução garante colaboração suave."
      },
      {
        title: "Integração de branches de feature",
        description: "Ao mesclar branches de feature no branch principal de desenvolvimento, conflitos frequentemente aparecem em áreas desenvolvidas em paralelo."
      },
      {
        title: "Gerenciamento de pull requests",
        description: "Resolver conflitos que surgem ao integrar pull requests no repositório principal, garantindo que alterações possam ser mescladas com segurança."
      },
      {
        title: "Gerenciamento de branches de longa duração",
        description: "Quando um branch fica muito tempo separado da linha principal de desenvolvimento, resolver conflitos acumulados durante a reintegração pode ser desafiador."
      },
      {
        title: "Contribuição para projetos open source",
        description: "Contribuidores de projetos open source frequentemente enfrentam conflitos quando suas alterações se sobrepõem a atualizações feitas por outros contribuidores ou mantenedores."
      }
    ]
  },
  guide: {
    title: "Guia passo a passo para resolver conflitos no Git",
    intro: "Resolver conflitos no Git pode parecer intimidante no início, mas seguir uma abordagem sistemática torna o processo gerenciável. Veja como resolver conflitos no Git efetivamente:",
    steps: [
      {
        title: "Identificar arquivos com conflitos",
        description: "Use 'git status' para identificar arquivos marcados como conflitantes. Esses arquivos contêm marcadores de conflito que precisam ser resolvidos."
      },
      {
        title: "Abrir arquivos com conflitos",
        description: "Abra os arquivos conflitantes em um editor. Procure por marcadores de conflito (<<<<<<< HEAD, =======, e >>>>>>> nome-do-branch), que indicam onde existem conflitos."
      },
      {
        title: "Entender ambas as alterações",
        description: "Analise as alterações de ambos os lados. O conteúdo entre <<<<<<< HEAD e ======= mostra as alterações do branch atual, enquanto o conteúdo entre ======= e >>>>>>> mostra as alterações do branch sendo mesclado."
      },
      {
        title: "Decidir como resolver cada conflito",
        description: "Decida se deve manter suas alterações, aceitar as alterações deles ou criar uma combinação de ambas. Considere a intenção por trás de cada alteração, em vez de simplesmente escolher uma versão."
      },
      {
        title: "Editar o arquivo para resolver conflitos",
        description: "Edite o arquivo para remover os marcadores de conflito, mantendo apenas o conteúdo final desejado. Isso pode envolver escolher uma versão ou combinar manualmente elementos de ambas."
      },
      {
        title: "Marcar como resolvido",
        description: "Após editar, use 'git add <arquivo>' para marcar o arquivo como resolvido. Isso prepara o arquivo resolvido para commit."
      },
      {
        title: "Completar o processo de merge",
        description: "Uma vez que todos os conflitos foram resolvidos e os arquivos preparados, use 'git commit' para completar o processo de merge. O Git criará um commit de merge para registrar a solução."
      }
    ]
  },
  conflictTypes: {
    title: "Tipos comuns de conflitos no Git",
    intro: "Conflitos no Git podem aparecer de várias formas, cada uma exigindo uma abordagem ligeiramente diferente. Entender esses tipos ajuda você a identificá-los e resolvê-los eficientemente:",
    types: [
      {
        title: "Conflitos de conteúdo",
        description: "O tipo mais comum de conflito, ocorre quando dois branches modificam a mesma linha de código. O Git não pode determinar automaticamente qual alteração deve ser mantida."
      },
      {
        title: "Conflitos de arquivo excluído",
        description: "Ocorre quando um branch modifica um arquivo enquanto outro branch exclui esse arquivo. O Git precisa saber se deve manter o arquivo modificado ou confirmar sua exclusão."
      },
      {
        title: "Conflitos de renomeação de arquivo",
        description: "Quando um branch renomeia um arquivo enquanto outro branch modifica o arquivo original, o Git pode ter dificuldade em rastrear essas alterações corretamente."
      },
      {
        title: "Conflitos em arquivos binários",
        description: "Conflitos em arquivos não-texto (como imagens ou arquivos compilados) que não podem ser mesclados linha por linha. Geralmente exigem escolher completamente uma versão."
      },
      {
        title: "Conflitos de espaços em branco",
        description: "Às vezes conflitos são causados por alterações em espaços em branco (como indentação ou fins de linha), o que pode ser particularmente frustrante, mas geralmente fácil de resolver."
      }
    ]
  },
  faq: {
    title: "Perguntas frequentes sobre resolução de conflitos no Git",
    items: [
      {
        question: "Como evitar conflitos no Git?",
        answer: "Embora você não possa evitar completamente conflitos, especialmente em projetos ativos, você pode minimizá-los: comunicando-se com a equipe sobre arquivos que está modificando, puxando alterações frequentemente, mantendo branches de feature curtos e usando commits menores e mais focados que são mais fáceis de mesclar."
      },
      {
        question: "Posso usar ferramentas para ajudar a resolver conflitos no Git?",
        answer: "Sim, muitos clientes Git e IDEs oferecem ferramentas visuais de resolução de conflitos que facilitam o processo mostrando conflitos lado a lado. Opções populares incluem Visual Studio Code, IntelliJ IDEA, GitKraken e SourceTree. Essas ferramentas destacam conflitos e fornecem botões para escolher entre diferentes versões."
      },
      {
        question: "E se eu resolver um conflito incorretamente?",
        answer: "Se você cometer um erro durante a resolução de conflitos, você pode sempre usar 'git merge --abort' para abortar o merge atual (se ainda não tiver feito commit), ou reverter o commit depois de concluído. É uma boa prática testar o código após resolver conflitos para garantir que funciona como esperado."
      },
      {
        question: "Como resolver conflitos durante um rebase?",
        answer: "O processo é similar a resolver conflitos de merge, mas é feito para cada commit sendo rebaseado. Você precisa resolver os conflitos, então usar 'git add' para marcar os arquivos como resolvidos, e então usar 'git rebase --continue' para continuar com o próximo commit (ou conflito) no processo de rebase."
      },
      {
        question: "Devo usar merge ou rebase para minimizar conflitos?",
        answer: "Ambas estratégias têm seus usos. Merge preserva histórico preciso, mas pode criar gráficos complexos com muitos commits de merge. Rebase cria histórico mais limpo e linear, mas reescreve o histórico de commits, o que pode ser problemático para branches compartilhados. Equipes devem concordar em um fluxo de trabalho que atenda suas necessidades."
      },
      {
        question: "O que são 'marcadores de conflito de merge' no Git?",
        answer: "Marcadores de conflito de merge são sequências especiais de texto que o Git insere em arquivos para indicar alterações conflitantes. Eles incluem: <<<<<<< HEAD (marca o início de suas alterações), ======= (separa suas alterações das alterações sendo mescladas), e >>>>>>> nome-do-branch (marca o fim das alterações do branch especificado)."
      },
      {
        question: "Como praticar resolução de conflitos no Git com segurança?",
        answer: "Este simulador de resolução de conflitos Git foi projetado especificamente para prática. Além disso, você pode criar repositórios de teste locais, fazer alterações conflitantes em branches diferentes e praticar mesclá-los. Isso fornece um ambiente seguro para desenvolver confiança em lidar com conflitos."
      }
    ]
  },
  bestPractices: {
    title: "Melhores práticas para resolução eficiente de conflitos",
    items: [
      "Comunique-se com a equipe antes de trabalhar em arquivos que podem gerar conflitos",
      "Puxe e mescle frequentemente do branch principal para reduzir tamanho e complexidade de conflitos",
      "Use feature flags para permitir que funcionalidades incompletas sejam mescladas antecipadamente sem afetar funcionalidade",
      "Divida grandes alterações em commits menores e mais focados que são mais fáceis de mesclar",
      "Entenda o contexto do código e a intenção por trás de ambas as alterações antes de resolver conflitos",
      "Considere programação em pares ao resolver conflitos complexos para combinar diferentes perspectivas",
      "Sempre teste sua aplicação após resolver conflitos para garantir que funciona corretamente",
      "Documente sua estratégia de resolução de conflitos para manter consistência na equipe",
      "Use mensagens de commit significativas ao resolver conflitos para explicar suas decisões",
      "Use opções de configuração do Git como 'git config merge.conflictstyle diff3' para ver conteúdo original junto com alterações conflitantes"
    ]
  }
}
