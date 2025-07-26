export default {
  title: "Code-Komplexitätsanalyse verstehen - Softwarequalität verbessern",
  overview: {
    title: "Was ist Code-Komplexitätsanalyse?",
    content: "<strong>Code-Komplexitätsanalyse</strong> ist ein professionelles Tool zur Bewertung von Quellcode hinsichtlich Strukturkomplexität, Wartbarkeit und Risikofaktoren. Dieses leistungsstarke Entwicklungswerkzeug hilft Entwicklern, übermäßig komplexe Codeteile zu identifizieren, die fehleranfällig, schwer wartbar oder schwer erweiterbar sein können.<br><br>Durch die Verwendung etablierter Metriken wie zyklomatischer Komplexität, Halstead-Metriken und Wartbarkeitsindex quantifiziert das Tool die Codequalität objektiv und hilft Teams, Refactoring-Maßnahmen gezielt zu priorisieren. Code-Komplexitätsanalyse ist eine grundlegende Praxis moderner Softwareentwicklung und unterstützt Technische-Schulden-Management und Codequalitätsverbesserung."
  },
  useCases: {
    title: "Anwendungsfälle der Code-Komplexitätsanalyse",
    items: [
      {
        title: "Technische Schulden verwalten",
        description: "Identifiziert komplexe Codebereiche, die technische Schulden verursachen, und hilft Teams, Schuldenreduktion zu priorisieren."
      },
      {
        title: "Code-Reviews verbessern",
        description: "Ergänzt manuelle Code-Reviews mit objektiven Komplexitätsmetriken zur Problemidentifikation."
      },
      {
        title: "Refactoring-Priorisierung",
        description: "Hilft bei der objektiven Entscheidung, welche Codeteile zuerst refaktorisiert werden sollten."
      },
      {
        title: "Qualitätssicherung",
        description: "Ermöglicht die Einrichtung von Komplexitätsgrenzwerten in CI/CD-Pipelines zur Aufrechterhaltung hoher Qualitätsstandards."
      },
      {
        title: "Test-Ressourcenverteilung",
        description: "Weist komplexem Code mehr Testressourcen zu, da dieser statistisch fehleranfälliger ist."
      },
      {
        title: "Onboarding neuer Entwickler",
        description: "Hilft neuen Teammitgliedern, sich schrittweise in komplexe Codebasen einzuarbeiten."
      },
      {
        title: "Legacy-Code-Bewertung",
        description: "Ermittelt Wartungskosten und Änderungsrisiken von Alt-Systemen."
      }
    ]
  },
  guide: {
    title: "Anleitung zur Nutzung des Code-Komplexitätsanalysators",
    intro: "So analysieren Sie Code-Komplexität effektiv:",
    steps: [
      {
        title: "Code vorbereiten",
        description: "Bestimmen Sie den zu analysierenden JavaScript-Code (komplette Datei oder spezifische Funktionen)."
      },
      {
        title: "Code eingeben",
        description: "Fügen Sie JavaScript-Code in das Eingabefeld ein oder laden Sie ein Beispiel."
      },
      {
        title: "Optionen wählen",
        description: "Wählen Sie die gewünschten Komplexitätsmetriken: zyklomatische Komplexität, Halstead-Metriken, Wartbarkeitsindex und/oder Funktionsdetails."
      },
      {
        title: "Analyse starten",
        description: 'Klicken Sie auf "Code analysieren" zur Berechnung der Metriken.'
      },
      {
        title: "Zusammenfassung prüfen",
        description: "Überprüfen Sie die Übersicht mit durchschnittlicher Komplexität, Wartbarkeitsindex und Codezeilen."
      },
      {
        title: "Funktionsdetails analysieren",
        description: "Identifizieren Sie hochkomplexe Funktionen (hervorgehoben) als Refactoring-Kandidaten."
      },
      {
        title: "Ergebnisse exportieren",
        description: "Nutzen Sie den JSON-Export zur Dokumentation oder Teamkommunikation."
      }
    ]
  },
  metrics: {
    title: "Code-Komplexitätsmetriken erklärt",
    intro: "Die Analyse verwendet mehrere etablierte Metriken zur Codebewertung:",
    items: [
      {
        name: "Zyklomatische Komplexität",
        description: "Misst die Anzahl unabhängiger Code-Pfade (Verzweigungen, Bedingungen). Höhere Werte bedeuten mehr Entscheidungspunkte und höhere Komplexität. Idealerweise unter 10 pro Funktion."
      },
      {
        name: "Halstead-Metriken",
        description: "Bewertet Codeumfang und kognitive Belastung anhand von Operatoren/Operanden. Enthält Volumen, Schwierigkeit, Aufwand und geschätzte Fehleranzahl. Niedrigere Werte zeigen besser wartbaren Code."
      },
      {
        name: "Wartbarkeitsindex",
        description: "Kombinierte Metrik (0-100) aus Komplexität, Volumen und Codezeilen. >70 = gut, <20 = schwer wartbar."
      },
      {
        name: "Codezeilen (LOC)",
        description: "Einfaches Maß für Codeumfang. Lange Funktionen (>100 Zeilen) sollten in kleinere Einheiten aufgeteilt werden."
      },
      {
        name: "Parameteranzahl",
        description: "Anzahl Funktionsparameter. Viele Parameter (>4) erschweren die Nutzung und deuten auf Refactoring-Bedarf hin."
      }
    ]
  },
  faq: {
    title: "Häufige Fragen zur Code-Komplexitätsanalyse",
    items: [
      {
        question: "Warum ist Code-Komplexitätsanalyse wichtig?",
        answer: "Komplexer Code ist fehleranfälliger und teurer in der Wartung. Die Analyse hilft, Probleme früh zu erkennen, Qualität zu steigern, Kosten zu senken und Produktivität zu erhöhen."
      },
      {
        question: "Was ist ein guter zyklomatischer Komplexitätswert?",
        answer: "<5 = einfach/exzellent, 6-10 = mittel/akzeptabel, >10 = komplex/refactoring-würdig, >15 = hochkomplex/hohe Priorität. Organisationsspezifische Thresholds sind möglich."
      },
      {
        question: "Funktioniert das Tool mit anderen Sprachen als JavaScript?",
        answer: "Aktuell nur für JavaScript. Die Metriken sind allgemeingültig, aber die Syntaxanalyse ist sprachspezifisch. Für andere Sprachen benötigen Sie entsprechende Tools."
      },
      {
        question: "Wie genau sind diese Metriken?",
        answer: "Die Metriken bieten objektive strukturelle Bewertungen, erfassen aber nicht alle Qualitätsaspekte (z.B. Architektur, Namenskonventionen). Kombinieren Sie sie mit Code-Reviews und statischer Analyse für umfassende Bewertungen."
      },
      {
        question: "Kann ich den Analysator in meine CI/CD-Pipeline integrieren?",
        answer: "Dieses Web-Tool ist interaktiv, aber Bibliotheken wie 'complexity-report', 'eslint-plugin-complexity' oder 'SonarQube' ermöglichen CI/CD-Integration mit Komplexitätsgrenzwerten für JavaScript."
      },
      {
        question: "Was tun bei hoher Komplexität?",
        answer: "Refactoring-Techniken anwenden: große Funktionen aufteilen, Verschachtelung reduzieren, Bedingungen vereinfachen, komplexe Logik extrahieren, Design-Patterns nutzen, Bibliotheken verwenden, Dokumentation ergänzen und Tests hinzufügen."
      },
      {
        question: "Bedeutet niedrigere Komplexität immer besseren Code?",
        answer: "Nicht zwangsläufig. Manchmal ist etwas komplexerer Code performanter oder domänengerechter. Metriken sollten Entscheidungen informieren, nicht determinieren. Balance zwischen Komplexität, Performance und Domänenanforderungen finden."
      }
    ]
  },
  optimization: {
    title: "Code-Optimierungsstrategien basierend auf Komplexitätsanalyse",
    intro: "Bei hoher Komplexität helfen diese Techniken:",
    tips: [
      "Große Funktionen in kleinere Einheiten mit klarer Verantwortung aufteilen",
      "Verschachtelung durch frühe Returns, Guard Clauses oder Extraktion reduzieren",
      "Komplexe Bedingungen in benannte Funktionen/Variablen auslagern",
      "Switch-Cases und If-Else-Ketten durch Strategie-Pattern oder Lookup-Tabellen ersetzen",
      "Funktionale Programmierung (map/filter/reduce) statt komplexer Schleifen nutzen",
      "Wiederholungen in wiederverwendbare Hilfsfunktionen auslagern",
      "Single-Responsibility-Prinzip (eine Änderung pro Funktion/Klasse) anwenden",
      "Bewährte Bibliotheken statt komplexer Eigenimplementierungen verwenden",
      "Parameter-Objekte statt langer Parameterlisten nutzen",
      "Notwendig komplexen Code ausführlich dokumentieren",
      "Umfassende Tests für komplexe Codeteile schreiben",
      "Teamweite Komplexitätsgrenzwerte definieren und einhalten"
    ]
  }
}
