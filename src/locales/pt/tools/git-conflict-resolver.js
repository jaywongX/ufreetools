export default {
  name: 'Simulador de Resolução de Conflitos Git',
  description: 'Simula cenários de conflito de merge no Git para praticar resolução de conflitos de código',
  title: 'Simulador de Resolução de Conflitos Git',
  intro: 'Esta ferramenta ajuda você a entender e praticar a resolução de conflitos de merge no Git. Insira conteúdo com conflitos ou use exemplos, depois resolva manualmente os conflitos.',

  buttons: {
    generateExample: 'Gerar exemplo de conflito',
    resolveOurs: 'Usar minhas alterações (HEAD)',
    resolveTheirs: 'Usar alterações deles',
    validate: 'Validar solução',
    reset: 'Redefinir',
    useOurs: 'Usar meu',
    useTheirs: 'Usar deles',
    useBoth: 'Combinar ambos'
  },

  conflictArea: {
    label: 'Conteúdo com conflito',
    hasConflict: '⚠️ Existem conflitos não resolvidos',
    noConflict: '✓ Sem conflitos'
  },

  analysis: {
    title: 'Análise de Conflitos',
    conflict: 'Conflito #{number}',
    ours: 'Minhas alterações (HEAD)',
    theirs: 'Alterações deles'
  },

  tutorial: {
    title: 'Como resolver conflitos no Git',
    intro: 'Conflitos no Git geralmente ocorrem durante operações de merge ou rebase, quando dois branches modificam a mesma parte de um arquivo.',
    markerExplanation: 'Os marcadores de conflito geralmente aparecem assim:',
    markerExample: `<<<<<<< HEAD
Suas alterações (branch atual)
=======
Alterações deles (branch sendo mesclado)
>>>>>>> nome-do-branch`,
    steps: {
      title: 'Passos básicos para resolver conflitos:',
      step1: 'Localize todos os marcadores de conflito (<code><<<<<<< HEAD</code>, <code>=======</code>, <code>>>>>>> nome-do-branch</code>)',
      step2: 'Decida qual código manter (seu, deles, ou uma combinação de ambos)',
      step3: 'Remova os marcadores de conflito, mantendo apenas o código que decidiu preservar',
      step4: 'Continue para o próximo conflito até resolver todos'
    },
    commands: {
      title: 'Comandos Git úteis:',
      status: '<code>git status</code> - Mostra quais arquivos têm conflitos',
      diff: '<code>git diff</code> - Exibe detalhes dos conflitos',
      abort: '<code>git merge --abort</code> - Cancela o merge e volta ao estado anterior',
      add: '<code>git add &lt;arquivo&gt;</code> - Marca arquivo como resolvido',
      commit: '<code>git commit</code> - Finaliza o merge'
    }
  },

  messages: {
    generated: "Exemplo de conflito gerado",
    resolvedOurs: "Todos os conflitos resolvidos usando 'minhas alterações'",
    resolvedTheirs: "Todos os conflitos resolvidos usando 'alterações deles'",
    resolvedSingle: "Conflito #{number} resolvido",
    allResolved: "✅ Todos os conflitos resolvidos com sucesso!",
    stillHasConflicts: "⚠️ Ainda existem conflitos não resolvidos, verifique todos os marcadores"
  }
};