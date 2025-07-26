export default {
  name: 'Git-Konfliktlösungs-Simulator',
  description: 'Simuliert Git-Merge-Konfliktszenarien zum Üben der Konfliktlösung',
  title: 'Git-Konfliktlösungs-Simulator',
  intro: 'Dieses Tool hilft Ihnen, Git-Merge-Konflikte zu verstehen und zu üben. Geben Sie Konfliktinhalte ein oder verwenden Sie Beispiele, um Konflikte manuell zu lösen.',

  buttons: {
    generateExample: 'Beispielkonflikt generieren',
    resolveOurs: 'Meine Änderungen verwenden (HEAD)',
    resolveTheirs: 'Ihre Änderungen verwenden',
    validate: 'Lösung validieren',
    reset: 'Zurücksetzen',
    useOurs: 'Meine verwenden',
    useTheirs: 'Ihre verwenden',
    useBoth: 'Beide kombinieren'
  },

  conflictArea: {
    label: 'Konfliktinhalt',
    hasConflict: '⚠️ Unbehandelter Konflikt vorhanden',
    noConflict: '✓ Keine Konflikte'
  },

  analysis: {
    title: 'Konfliktanalyse',
    conflict: 'Konflikt #{number}',
    ours: 'Meine Änderungen (HEAD)',
    theirs: 'Ihre Änderungen'
  },

  tutorial: {
    title: 'Git-Konflikte lösen',
    intro: 'Git-Konflikte treten typischerweise bei Merge- oder Rebase-Operationen auf, wenn zwei Zweige denselben Teil einer Datei ändern.',
    markerExplanation: 'Konfliktmarkierungen sehen normalerweise so aus:',
    markerExample: `<<<<<<< HEAD
Ihre Änderungen (aktueller Branch)
=======
Ihre Änderungen (eingebundener Branch)
>>>>>>> Branch-Name`,
    steps: {
      title: 'Grundlegende Schritte zur Konfliktlösung:',
      step1: 'Finden Sie alle Konfliktmarkierungen (<code><<<<<<< HEAD</code>, <code>=======</code>, <code>>>>>>> Branch-Name</code>)',
      step2: 'Entscheiden Sie, welchen Code Sie behalten möchten (Ihren, deren oder eine Kombination)',
      step3: 'Entfernen Sie die Konfliktmarkierungen und behalten Sie nur den gewünschten Code',
      step4: 'Wiederholen Sie den Vorgang für alle Konflikte'
    },
    commands: {
      title: 'Nützliche Git-Befehle:',
      status: '<code>git status</code> - Zeigt Dateien mit Konflikten an',
      diff: '<code>git diff</code> - Zeigt detaillierte Konfliktinformationen',
      abort: '<code>git merge --abort</code> - Bricht den Merge ab und stellt den vorherigen Zustand wieder her',
      add: '<code>git add &lt;Datei&gt;</code> - Markiert eine Datei als konfliktfrei',
      commit: '<code>git commit</code> - Schließt den Merge-Vorgang ab'
    }
  },

  messages: {
    generated: "Beispielkonflikt wurde generiert",
    resolvedOurs: "Alle Konflikte mit 'Meine Änderungen' gelöst",
    resolvedTheirs: "Alle Konflikte mit 'Ihre Änderungen' gelöst",
    resolvedSingle: "Konflikt #{number} wurde gelöst",
    allResolved: "✅ Alle Konflikte erfolgreich gelöst!",
    stillHasConflicts: "⚠️ Es gibt noch unbehandelte Konflikte"
  }
};