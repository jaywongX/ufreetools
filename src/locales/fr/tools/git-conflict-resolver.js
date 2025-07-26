export default {
  name: 'Simulateur de résolution de conflits Git',
  description: 'Simule des scénarios de conflits de fusion Git pour s\'entraîner à résoudre les conflits de code',
  title: 'Simulateur de résolution de conflits Git',
  intro: 'Cet outil vous aide à comprendre et pratiquer la résolution de conflits de fusion Git. Saisissez du contenu conflictuel ou utilisez l\'exemple, puis résolvez manuellement les conflits.',

  buttons: {
    generateExample: 'Générer un exemple de conflit',
    resolveOurs: 'Utiliser mes modifications (HEAD)',
    resolveTheirs: 'Utiliser leurs modifications',
    validate: 'Valider la solution',
    reset: 'Réinitialiser',
    useOurs: 'Utiliser les miennes',
    useTheirs: 'Utiliser les leurs',
    useBoth: 'Fusionner les deux'
  },

  conflictArea: {
    label: 'Contenu conflictuel',
    hasConflict: '⚠️ Conflit non résolu',
    noConflict: '✓ Aucun conflit'
  },

  analysis: {
    title: 'Analyse des conflits',
    conflict: 'Conflit #{number}',
    ours: 'Mes modifications (HEAD)',
    theirs: 'Leurs modifications'
  },

  tutorial: {
    title: 'Comment résoudre les conflits Git',
    intro: 'Les conflits Git surviennent généralement lors d\'opérations de fusion ou de rebasage, lorsque deux branches modifient la même partie d\'un même fichier.',
    markerExplanation: 'Les marqueurs de conflit ressemblent généralement à ceci :',
    markerExample: `<<<<<<< HEAD
Vos modifications (branche actuelle)
=======
Leurs modifications (branche fusionnée)
>>>>>>> nom-de-branche`,
    steps: {
      title: 'Étapes de base pour résoudre les conflits :',
      step1: 'Localisez tous les marqueurs de conflit (<code><<<<<<< HEAD</code>, <code>=======</code>, <code>>>>>>> nom-de-branche</code>)',
      step2: 'Décidez quels codes conserver (les vôtres, les leurs ou une combinaison)',
      step3: 'Supprimez les marqueurs de conflit et conservez uniquement le code que vous souhaitez garder',
      step4: 'Passez au conflit suivant jusqu\'à ce que tous soient résolus'
    },
    commands: {
      title: 'Commandes Git courantes :',
      status: '<code>git status</code> - Voir quels fichiers ont des conflits',
      diff: '<code>git diff</code> - Voir le détail des conflits',
      abort: '<code>git merge --abort</code> - Annuler la fusion et revenir à l\'état précédent',
      add: '<code>git add &lt;fichier&gt;</code> - Marquer un fichier conflictuel comme résolu',
      commit: '<code>git commit</code> - Finaliser la fusion'
    }
  },

  messages: {
    generated: "Exemple de conflit généré",
    resolvedOurs: "Tous les conflits résolus en utilisant « mes modifications »",
    resolvedTheirs: "Tous les conflits résolus en utilisant « leurs modifications »",
    resolvedSingle: "Conflit #{number} résolu",
    allResolved: "✅ Tous les conflits résolus avec succès !",
    stillHasConflicts: "⚠️ Il reste des conflits non résolus, vérifiez et résolvez tous les marqueurs"
  }
};