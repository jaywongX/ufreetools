export default {
    name: 'Passwort-Generator',
    description: 'Erzeugt sichere, zufällige Passwörter mit anpassbaren Optionen',
    options: {
      length: 'Passwortlänge',
      quantity: 'Anzahl der Passwörter',
      includeLowercase: 'Kleinbuchstaben (a-z)',
      includeUppercase: 'Großbuchstaben (A-Z)',
      includeNumbers: 'Zahlen (0-9)',
      includeSymbols: 'Sonderzeichen (!@#$%)',
      excludeSimilar: 'Ähnliche Zeichen ausschließen (i, l, 1, L, o, 0, O)',
      excludeAmbiguous: 'Mehrdeutige Zeichen ausschließen ({}<>[]()\'"`\\)',
      requireAll: 'Alle Zeichentypen erfordern',
      noConsecutive: 'Keine aufeinanderfolgenden ähnlichen Zeichen',
      advancedOptions: 'Erweiterte Optionen',
      characterTypes: 'Zeichentypen'
    },
    presets: {
      standard: 'Standard',
      strong: 'Stark',
      memorable: 'Einprägsam',
      pin: 'PIN-Code',
      pronounceable: 'Aussprechbar',
      custom: 'Benutzerdefiniert',
      easyToRemember: 'Leicht zu merken',
      balanced: 'Ausgewogen',
      secure: 'Sicher'
    },
    strength: {
      title: 'Passwortstärke',
      veryWeak: 'Sehr schwach',
      weak: 'Schwach', 
      medium: 'Mittel',
      strong: 'Stark',
      veryStrong: 'Sehr stark',
      unknown: 'Unbekannt'
    },
    actions: {
      generate: 'Passwort generieren',
      regenerate: 'Neu generieren',
      copy: 'Kopieren',
      copyAll: 'Alle kopieren',
      clear: 'Löschen',
      expand: 'Erweitern',
      collapse: 'Einklappen'
    },
    messages: {
      copied: 'In die Zwischenablage kopiert!',
      allCopied: 'Alle Passwörter wurden in die Zwischenablage kopiert!',
      generated: 'Passwörter erfolgreich generiert',
      invalidOptions: 'Bitte wählen Sie mindestens einen Zeichentyp aus',
      tooManyPasswords: 'Maximal 100 Passwörter können generiert werden',
      clickToGenerate: 'Klicken Sie auf die Schaltfläche oben, um Passwörter zu generieren'
    },
    errors: {
      copyFailed: 'Passwort konnte nicht kopiert werden: ',
      copyFailedManual: 'Kopieren fehlgeschlagen, bitte manuell kopieren'
    },
    results: {
      title: 'Generierte Passwörter'
    },
    units: {
      passwords: 'Passwörter'
    },
    tips: {
      title: 'Passwort-Sicherheitstipps',
      useLength: 'Verwenden Sie ausreichend lange Passwörter (mindestens 12 Zeichen) für mehr Sicherheit',
      useDifferent: 'Verwenden Sie für jede Website oder jeden Dienst unterschiedliche Passwörter',
      changeRegularly: 'Ändern Sie regelmäßig die Passwörter für wichtige Konten',
      useManager: 'Erwägen Sie die Verwendung eines Passwort-Managers zur sicheren Speicherung komplexer Passwörter',
      use2FA: 'Aktivieren Sie die Zwei-Faktor-Authentifizierung für eine zusätzliche Sicherheitsebene'
    },
    article: {
      title: "Leitfaden für Passwort-Generator-Tools: Erstellen Sie starke, sichere Passwörter",
      features: {
        title: "Passwort-Generator-Tools verstehen",
        description: "Unser <strong>Passwort-Generator</strong> ist ein leistungsstarkes Sicherheitstool, das zufällige, hochsichere <strong>Passwörter</strong> erstellt, um Ihre Konten vor unbefugtem Zugriff zu schützen. Im Gegensatz zu einfachen, leicht zu erratenden <strong>Passwörtern</strong> erstellt unser Tool komplexe Zeichenkombinationen, die durch Brute-Force-Angriffe oder Wörterbuch-basierte Hacking-Versuche extrem schwer zu knacken sind.<br><br>Dieser <strong>Passwort-Generator</strong> ermöglicht es Ihnen, die <strong>Passwort</strong>-Länge, Zeichentypen und Komplexitätsstufen anzupassen, um sicherzustellen, dass sie den spezifischen Sicherheitsanforderungen verschiedener Plattformen und Dienste entsprechen.",
        useCases: {
          title: "Häufige Anwendungsfälle für Passwort-Generatoren",
          items: [
            "Erstellen von starken Passwörtern für neue Online-Konten (E-Mail, soziale Medien, Banken)",
            "Generieren von sicheren Passwörtern für Wi-Fi-Netzwerke und Router",
            "Entwickeln von komplexen Passwörtern für Geschäftssysteme und Unternehmenskonten",
            "Erstellen von sicheren Passwörtern für verschlüsselte Dateien und Ordner",
            "Generieren unterschiedlicher Passwörter für mehrere Konten, um Wiederverwendung zu vermeiden",
            "Erstellen eines starken Master-Passworts für Passwort-Manager",
            "Generieren sicherer API-Schlüssel und Zugriffstoken für Entwickler"
          ]
        }
      },
      faq: {
        title: "Häufig gestellte Fragen zu Passwort-Generatoren",
        items: [
          {
            question: "Wie sicher sind die von diesem Generator erstellten Passwörter?",
            answer: "Bei Verwendung der empfohlenen Einstellungen sind die von unserem Generator erstellten Passwörter extrem sicher. Ein starkes Passwort (mehr als 16 Zeichen mit gemischten Zeichentypen) würde mit aktueller Technologie Millionen von Jahren zum Knacken benötigen. Unser Generator verwendet kryptografisch sichere Zufallsgenerierung, um Unvorhersehbarkeit zu gewährleisten."
          },
          {
            question: "Was macht ein Passwort stark?",
            answer: "Ein starkes Passwort hat mehrere Schlüsselmerkmale: ausreichende Länge (mindestens 12-16 Zeichen), Komplexität (Mix aus Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen), Zufälligkeit (keine vorhersehbaren Muster) und Einzigartigkeit (nicht anderweitig verwendet). Unsere Passwort-Generatoren erstellen Passwörter, die all diese Kriterien erfüllen."
          },
          {
            question: "Wie oft sollte ich mein Passwort ändern?",
            answer: "Sicherheitsexperten empfehlen jetzt, Passwörter nur zu ändern, wenn Grund zu der Annahme besteht, dass sie kompromittiert wurden, anstatt nach einem festen Zeitplan. Für wichtige Konten (Banken, E-Mail) ist es jedoch immer noch eine gute Praxis, Passwörter alle 3-6 Monate zu ändern und dabei jedes Mal den Passwort-Generator zu verwenden."
          },
          {
            question: "Kann ich mehrere Passwörter auf einmal generieren?",
            answer: "Ja, unser Passwort-Generator ermöglicht es Ihnen, mehrere sichere Passwörter gleichzeitig zu erstellen. Dies ist besonders nützlich, wenn Sie mehrere neue Konten einrichten oder während einer Sicherheitsüberprüfung mehrere bestehende Passwörter aktualisieren."
          },
          {
            question: "Wie kann ich mir komplexe Passwörter merken?",
            answer: "Die beste Methode ist die Verwendung eines Passwort-Managers zur sicheren Speicherung Ihrer generierten Passwörter. Alternativ können Sie für Passwörter, die Sie sich merken müssen, die 'Einprägsam'-Voreinstellung verwenden, die Passwörter erstellt, die Sicherheit und Merkbarkeit in Einklang bringen."
          }
        ]
      },
      guide: {
        title: "So verwenden Sie das Passwort-Generator-Tool",
        steps: [
          "Verwenden Sie den Schieberegler, um die gewünschte Passwortlänge auszuwählen (wir empfehlen mindestens 16 Zeichen für maximale Sicherheit)",
          "Wählen Sie eine Passwortstärke-Voreinstellung (Leicht zu merken, Standard oder Stark) oder wählen Sie 'Benutzerdefiniert', um Optionen manuell zu konfigurieren",
          "Für benutzerdefinierte Einstellungen wählen Sie die einzubeziehenden Zeichentypen (Großbuchstaben, Kleinbuchstaben, Zahlen, Sonderzeichen)",
          "Optional können Sie erweiterte Optionen einblenden, um ähnliche Zeichen oder mehrdeutige Symbole auszuschließen",
          "Wählen Sie die Anzahl der zu generierenden Passwörter (1, 5, 10, 20 oder 50)",
          "Klicken Sie auf die Schaltfläche 'Passwort generieren', um Ihre sicheren Passwörter zu erstellen",
          "Für jedes generierte Passwort können Sie eine Stärkebewertung sehen, von 'Sehr schwach' bis 'Sehr stark'",
          "Klicken Sie auf das Kopiersymbol neben einem Passwort, um es in die Zwischenablage zu kopieren, oder verwenden Sie 'Alle kopieren' für alle Passwörter",
          "Speichern Sie die generierten Passwörter sicher in einem Passwort-Manager oder an einem anderen sicheren Ort"
        ]
      },
      conclusion: "Die regelmäßige Verwendung dieses Passwort-Generator-Tools wird Ihre Online-Sicherheit erheblich verbessern. Durch das Erstellen einzigartiger, starker Passwörter für jedes Konto unternehmen Sie den wichtigsten Schritt zum Schutz Ihrer digitalen Identität und persönlichen Informationen vor Cyber-Bedrohungen. Denken Sie daran, dass selbst die stärksten Passwörter, wenn möglich, mit zusätzlichen Sicherheitsmaßnahmen wie Zwei-Faktor-Authentifizierung kombiniert werden sollten."
    }
  }