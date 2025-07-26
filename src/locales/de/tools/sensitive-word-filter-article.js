export default {
  title: 'Sensitivwortfilter: Umfassendes Werkzeug zur Textfilterung',
  functionality: {
    title: 'Funktionen und Eigenschaften',
    description: '<strong>Sensitivwortfilter</strong> ist ein leistungsstarkes Textverarbeitungswerkzeug, das speziell für die Erkennung und Filterung von sensiblen, unangemessenen oder beleidigenden Inhalten in Texten entwickelt wurde. Es verwendet fortschrittliche Mustererkennungsalgorithmen, um potenziell problematische Wörter und Phrasen zu identifizieren und ersetzt oder entfernt diese automatisch entsprechend Ihren Präferenzen. Dieses Textfilterwerkzeug unterstützt benutzerdefinierte Wörterbücher, verschiedene Filtermodi und bietet detaillierte statistische Analysen der erkannten sensiblen Inhalte.'
  },
  useCases: {
    title: 'Praktische Anwendungen und Szenarien',
    list: [
      '<strong>Website-Inhaltsmoderation</strong>: Automatische Filterung von nutzergenerierten Inhalten wie Kommentaren, Forenbeiträgen und Bewertungen, um eine sichere und respektvolle Online-Umgebung zu erhalten.',
      '<strong>Überprüfung von Bildungsmaterialien</strong>: Sicherstellen, dass Unterrichtsmaterialien und von Schülern eingereichte Arbeiten keine unangemessene Sprache enthalten, geeignet für Klassenzimmer oder Bildungsplattformen.',
      '<strong>Filterung von Kundenservice-Inhalten</strong>: Filterung externer Kommunikation, um deren Einhaltung professioneller Standards und Vermeidung potenziell beleidigender Sprache zu gewährleisten.',
      '<strong>Social-Media-Management</strong>: Überprüfung und Bereinigung von Inhalten vor der Veröffentlichung auf Social-Media-Plattformen, um Verstöße gegen Plattformrichtlinien zu verhindern.',
      '<strong>Vorbereitung von Textdaten</strong>: Bereinigung von Textdatensätzen für maschinelles Lernen und Analysen durch Entfernen beleidigender oder voreingenommener Sprache.',
      '<strong>Unternehmenskommunikations-Compliance</strong>: Überprüfung interner und externer Kommunikation auf Einhaltung der Unternehmenssprachrichtlinien und professionellen Standards.'
    ]
  },
  faq: {
    title: 'Häufig gestellte Fragen zur Sensitivwortfilterung',
    items: [
      {
        question: 'Wie genau ist die Erkennung sensitiver Wörter?',
        answer: 'Das <strong>Erkennungssystem für sensitive Wörter</strong> verwendet präzise Mustererkennungsalgorithmen und ist sehr genau. Die kontextabhängige Filterung (Verständnis der Bedeutung hinter den Wörtern) bleibt jedoch eine Herausforderung. Das Werkzeug ermöglicht es Ihnen, die erkannten Wörter zu überprüfen und das Wörterbuch für spezifische Anforderungen anzupassen, um die Genauigkeit zu erhöhen.'
      },
      {
        question: 'Kann ich meine eigene benutzerdefinierte Wortliste erstellen und speichern?',
        answer: 'Ja, die <strong>benutzerdefinierte Sensitivwortliste</strong> ermöglicht es Ihnen, Wörter hinzuzufügen, die für Ihre Inhaltsanforderungen spezifisch sind. Sie können problemlos Wörter zum Filter hinzufügen, die dann während des Filterprozesses angewendet werden.'
      },
      {
        question: 'Welche Filtermodi sind verfügbar?',
        answer: 'Das Werkzeug bietet verschiedene <strong>Textfiltermodi</strong>: Ersetzung sensitiver Wörter durch Sternchen (*), Verwendung benutzerdefinierter Ersatzzeichen oder vollständiges Entfernen sensitiver Wörter aus dem Text. Sie können den Modus wählen, der Ihren Anforderungen am besten entspricht.'
      },
      {
        question: 'Funktioniert dieses Werkzeug mit verschiedenen Sprachen?',
        answer: 'Ja, der <strong>mehrsprachige Sensitivwortfilter</strong> funktioniert mit verschiedenen Sprachen, obwohl die Effektivität je nach Sprache variieren kann. Das Werkzeug konzentriert sich hauptsächlich auf Zeichenmustererkennung und ist für verschiedene Schriftsysteme geeignet.'
      },
      {
        question: 'Wie werden große Textmengen verarbeitet?',
        answer: 'Für die <strong>Massenfilterung von Texten</strong> fügen Sie den Inhalt einfach in den Eingabebereich ein. Das Werkzeug ist für die effiziente Verarbeitung großer Textmengen optimiert, obwohl sehr große Texte möglicherweise mehr Verarbeitungszeit benötigen. Für sehr große Dokumente sollten Sie eine segmentierte Verarbeitung in Betracht ziehen.'
      }
    ]
  },
  tutorial: {
    title: 'Schritt-für-Schritt-Anleitung zur Verwendung des Sensitivwortfilters',
    steps: [
      '<strong>Text eingeben</strong>: Geben Sie zuerst den zu filternden Text in den Eingabebereich ein oder fügen Sie ihn ein.',
      '<strong>Filteroptionen konfigurieren</strong>: Wählen Sie Ihren bevorzugten Filtermodus (Ersetzung durch Sternchen, benutzerdefiniertes Zeichen oder Entfernen von Wörtern).',
      '<strong>Benutzerdefinierte Sensitivwortliste</strong> (optional): Fügen Sie spezifische Wörter hinzu, die Sie erkennen und filtern möchten, indem Sie auf die Schaltfläche "Wort hinzufügen" klicken.',
      '<strong>Filter starten</strong>: Klicken Sie auf die Schaltfläche "Filter starten", um Ihren Text zu verarbeiten und sensitive Inhalte zu erkennen.',
      '<strong>Ergebnisse überprüfen</strong>: Überprüfen Sie den gefilterten Text im Tab "Filterergebnis" und sehen Sie sich die statistische Analyse im Tab "Erkennungsbericht" an.',
      '<strong>Ergebnisse kopieren oder speichern</strong>: Kopieren Sie den gefilterten Text in die Zwischenablage, um ihn in Ihren Anwendungen oder Dokumenten zu verwenden.'
    ]
  }
}
