export default {
  name: 'Simulatore Risoluzione Conflitti Git',
  description: 'Simula scenari di conflitto in Git per esercitarsi a risolvere conflitti di codice',
  title: 'Simulatore Risoluzione Conflitti Git',
  intro: 'Questo strumento ti aiuta a comprendere e praticare la risoluzione dei conflitti di merge in Git. Inserisci contenuti in conflitto o usa un esempio, poi risolvi manualmente i conflitti.',

  buttons: {
    generateExample: 'Genera conflitto di esempio',
    resolveOurs: 'Usa le mie modifiche (HEAD)',
    resolveTheirs: 'Usa le loro modifiche',
    validate: 'Verifica soluzione',
    reset: 'Ripristina',
    useOurs: 'Usa mio',
    useTheirs: 'Usa loro',
    useBoth: 'Combina entrambi'
  },

  conflictArea: {
    label: 'Contenuto conflitto',
    hasConflict: '⚠️ Conflitti non risolti presenti',
    noConflict: '✓ Nessun conflitto'
  },

  analysis: {
    title: 'Analisi conflitto',
    conflict: 'Conflitto #{number}',
    ours: 'Le mie modifiche (HEAD)',
    theirs: 'Le loro modifiche'
  },

  tutorial: {
    title: 'Come risolvere i conflitti Git',
    intro: 'I conflitti Git si verificano tipicamente durante operazioni di merge o rebase, quando due branch modificano la stessa parte dello stesso file.',
    markerExplanation: 'I marcatori di conflitto appaiono così:',
    markerExample: `<<<<<<< HEAD
Le tue modifiche (branch corrente)
=======
Le loro modifiche (branch da unire)
>>>>>>> nome-branch`,
    steps: {
      title: 'Passi base per risolvere i conflitti:',
      step1: 'Trova tutti i marcatori di conflitto (<code><<<<<<< HEAD</code>, <code>=======</code>, <code>>>>>>> nome-branch</code>)',
      step2: 'Decidi quale codice mantenere (tuo, loro o una combinazione)',
      step3: 'Rimuovi i marcatori di conflitto, mantenendo solo il codice scelto',
      step4: 'Procedi con il conflitto successivo fino a risoluzione completa'
    },
    commands: {
      title: 'Comandi Git utili:',
      status: '<code>git status</code> - Mostra file con conflitti',
      diff: '<code>git diff</code> - Visualizza dettagli conflitti',
      abort: '<code>git merge --abort</code> - Annulla merge, torna allo stato precedente',
      add: '<code>git add &lt;file&gt;</code> - Segna file come risolto',
      commit: '<code>git commit</code> - Completa il merge'
    }
  },

  messages: {
    generated: "Generato esempio di conflitto",
    resolvedOurs: "Tutti i conflitti risolti usando 'Le mie modifiche'",
    resolvedTheirs: "Tutti i conflitti risolti usando 'Le loro modifiche'",
    resolvedSingle: "Conflitto #{number} risolto",
    allResolved: "✅ Tutti i conflitti risolti con successo!",
    stillHasConflicts: "⚠️ Sono ancora presenti conflitti non risolti"
  }
};