export default {
  title: "Git-Konflikte verstehen und lösen",
  overview: {
    title: "Was ist Git-Konfliktlösung?",
    content: "Git-Konfliktlösung ist der Prozess der Behebung von Konflikten, die beim Zusammenführen oder Rebasing von Branches auftreten. Wenn mehrere Entwickler dieselben Dateiteile ändern, kann Git nicht automatisch entscheiden, welche Änderungen beibehalten werden sollen.<br><br>Dieser Simulator hilft Ihnen, Merge-Konflikte in einer sicheren Umgebung zu verstehen und zu üben. Durch das Simulieren typischer Konfliktszenarien lernen Sie den Lösungsprozess, ohne echten Code zu gefährden."
  },
  useCases: {
    title: "Typische Anwendungsfälle",
    items: [
      {
        title: "Teamarbeit in gemeinsamen Codebasen",
        description: "Wenn Teammitglieder gleichzeitig dieselben Dateien ändern, entstehen beim Mergen oft Konflikte."
      },
      {
        title: "Feature-Branch-Integration",
        description: "Beim Mergen von Feature-Branches in den Hauptentwicklungsbranch kommt es häufig zu Konflikten."
      },
      {
        title: "Pull-Request-Management",
        description: "Konflikte müssen gelöst werden, bevor Pull Requests in das Hauptrepository integriert werden können."
      },
      {
        title: "Langfristige Branch-Verwaltung",
        description: "Branches, die lange vom Hauptentwicklungszweig getrennt waren, erzeugen beim Reintegrieren oft viele Konflikte."
      },
      {
        title: "Open-Source-Beiträge",
        description: "Contributors müssen häufig Konflikte lösen, wenn ihre Änderungen mit anderen Beiträgen kollidieren."
      }
    ]
  },
  guide: {
    title: "Schritt-für-Schritt-Anleitung",
    intro: "Git-Konflikte können zunächst einschüchternd wirken, aber mit einer systematischen Vorgehensweise lassen sie sich gut bewältigen:",
    steps: [
      {
        title: "Konflikte identifizieren",
        description: "Verwenden Sie 'git status', um Dateien mit Konflikten zu finden."
      },
      {
        title: "Konfliktdateien öffnen",
        description: "Suchen Sie nach Konfliktmarkierungen (<<<<<<<, =======, >>>>>>>)."
      },
      {
        title: "Änderungen verstehen",
        description: "Analysieren Sie beide Versionen der Änderungen."
      },
      {
        title: "Lösungsstrategie wählen",
        description: "Entscheiden Sie, welche Änderungen übernommen werden sollen."
      },
      {
        title: "Dateien bearbeiten",
        description: "Entfernen Sie Konfliktmarkierungen und behalten Sie den gewünschten Code."
      },
      {
        title: "Als gelöst markieren",
        description: "Verwenden Sie 'git add', um die Lösung zu bestätigen."
      },
      {
        title: "Merge abschließen",
        description: "Führen Sie 'git commit' aus, um den Merge zu beenden."
      }
    ]
  },
  conflictTypes: {
    title: "Häufige Konfliktarten",
    intro: "Git-Konflikte können verschiedene Formen annehmen:",
    types: [
      {
        title: "Inhaltskonflikte",
        description: "Treten auf, wenn zwei Branches dieselben Codezeilen ändern."
      },
      {
        title: "Dateilöschungskonflikte",
        description: "Entstehen, wenn ein Branch eine Datei löscht, während ein anderer sie ändert."
      },
      {
        title: "Dateiumbenennungskonflikte",
        description: "Wenn ein Branch eine Datei umbenennt und ein anderer die Originaldatei ändert."
      },
      {
        title: "Binärdateikonflikte",
        description: "Bei nicht-textuellen Dateien wie Bildern oder kompiliertem Code."
      },
      {
        title: "Leerzeichenkonflikte",
        description: "Werden durch Änderungen an Einrückungen oder Zeilenenden verursacht."
      }
    ]
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        question: "Wie vermeide ich Git-Konflikte?",
        answer: "Kommunizieren Sie mit Ihrem Team über bearbeitete Dateien, führen Sie häufig Updates durch und halten Sie Branches klein."
      },
      {
        question: "Gibt es Tools zur Konfliktlösung?",
        answer: "Ja, viele IDEs und Git-Clients bieten visuelle Tools für die Konfliktlösung an."
      },
      {
        question: "Was tun bei falscher Konfliktlösung?",
        answer: "Sie können den Merge mit 'git merge --abort' abbrechen oder den Commit rückgängig machen."
      },
      {
        question: "Wie löse ich Rebase-Konflikte?",
        answer: "Ähnlich wie Merge-Konflikte, aber Sie müssen 'git rebase --continue' nach jeder Lösung verwenden."
      },
      {
        question: "Merge oder Rebase?",
        answer: "Beide haben Vor- und Nachteile. Teams sollten sich auf einen gemeinsamen Workflow einigen."
      },
      {
        question: "Was sind Merge-Konfliktmarkierungen?",
        answer: "Spezielle Textmarkierungen, die Git einfügt, um Konfliktbereiche zu kennzeichnen."
      },
      {
        question: "Wie übe ich Konfliktlösung sicher?",
        answer: "Verwenden Sie diesen Simulator oder erstellen Sie Test-Repositories zum Experimentieren."
      }
    ]
  },
  bestPractices: {
    title: "Beste Praktiken",
    items: [
      "Kommunizieren Sie mit Ihrem Team über Änderungen",
      "Führen Sie häufig Updates aus dem Hauptbranch durch",
      "Verwenden Sie Feature-Flags für unfertige Funktionen",
      "Halten Sie Commits klein und fokussiert",
      "Verstehen Sie den Kontext beider Änderungen",
      "Ziehen Sie Pair Programming für komplexe Konflikte in Betracht",
      "Testen Sie Ihre Lösung immer gründlich",
      "Dokumentieren Sie Ihre Lösungsstrategien",
      "Verwenden Sie aussagekräftige Commit-Messages",
      "Konfigurieren Sie Git für bessere Konfliktdarstellung"
    ]
  }
}
