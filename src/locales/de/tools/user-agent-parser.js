export default {
    name: 'User-Agent-Parser',
    description: 'Analysieren Sie Browser-User-Agent-Strings zur Identifikation von Browser, Betriebssystem und Geräteinformationen',
    
    // Eingabefelder
    input: {
      label: 'User-Agent-String',
      placeholder: 'User-Agent-String eingeben oder einfügen...'
    },
  
    // Aktionen
    actions: {
      parse: 'Analysieren',
      detect: 'Aktuellen Browser erkennen',
      clear: 'Zurücksetzen'
    },
  
    // Ergebnisse
    results: {
      title: 'Analyseergebnisse',
      summary: 'Zusammenfassung',
      details: 'Detaillierte Informationen',
      originalUA: 'Originaler User-Agent-String'
    },
  
    // Abschnitte
    sections: {
      browser: 'Browser',
      os: 'Betriebssystem',
      device: 'Gerät',
      other: 'Weitere Informationen'
    },
  
    // Gerätetypen
    deviceTypes: {
      mobile: 'Mobilgerät',
      tablet: 'Tablet',
      desktop: 'Desktop'
    },
  
    // Felder
    fields: {
      name: 'Name',
      version: 'Version',
      engine: 'Engine',
      platform: 'Plattform',
      type: 'Typ',
      vendor: 'Hersteller',
      model: 'Modell',
      isMobile: 'Mobilgerät',
      isTablet: 'Tablet',
      isDesktop: 'Desktop'
    },
  
    // Nachrichten
    messages: {
      parsingError: 'Fehler beim Parsen des User-Agent-Strings',
      emptyInput: 'Bitte User-Agent-String eingeben',
      unknown: 'Unbekannt',
      yes: 'Ja',
      no: 'Nein'
    },
  
    // Tipps
    tips: {
      description: 'Der User-Agent ist ein Identifikationsstring, den Browser an Server senden. Er enthält Informationen über Browser, Betriebssystem und Gerät.',
      useCases: 'Häufig verwendet für Webanalysen, Browserkompatibilität und Geräteanpassung.'
    },
  
    // Artikelinhalt
    article: {
      title: "User-Agent-Parser: Browser-Identifikationsstrings verstehen",
      features: {
        title: "Was ist ein User-Agent-String und warum ist er wichtig?",
        description: "Unser <strong>User-Agent-Parser</strong> ist ein spezielles Online-Tool zum Dekodieren und Analysieren von Browser-Identifikationsstrings. Wenn Sie eine Website besuchen, sendet Ihr Browser einen sogenannten <strong>User-Agent-String</strong>, der detaillierte Informationen über Ihren Browser, Ihr Betriebssystem, Ihren Gerätetyp und mehr enthält.<br><br>Dieser leistungsstarke <strong>UA-String-Analysator</strong> zerlegt komplexe User-Agent-Informationen in leicht verständliche Komponenten und zeigt Ihnen, welchen Browser Sie verwenden, dessen Version, Betriebssystemdetails und Geräteeigenschaften. Das Tool unterstützt alle gängigen Browser einschließlich Chrome, Firefox, Safari, Edge und Mobile Browser und bietet plattformübergreifend genaue Identifikation.",
        useCases: {
          title: "Praktische Anwendungen für User-Agent-Analysen",
          items: [
            "<strong>Webentwicklung und -tests</strong>: Entwickler verwenden <strong>UA-String-Analysen</strong> zur Identifikation browserspezifischer Fehler und Kompatibilitätsprobleme. Wenn Nutzer Probleme melden, hilft die Überprüfung ihres User-Agents, die exakte Umgebung nachzustellen, in der das Problem auftritt.",
            
            "<strong>Inhaltsanpassung</strong>: Websites können <strong>Browsererkennung</strong> nutzen, um optimierte Inhalte basierend auf den Fähigkeiten des Besuchers bereitzustellen. Beispielsweise können WebP-Bilder für unterstützende Browser bereitgestellt werden, während ältere Browser JPGs erhalten.",
            
            "<strong>Sicherheitsanalysen</strong>: Sicherheitsexperten analysieren <strong>User-Agent-Muster</strong> zur Erkennung verdächtiger Aktivitäten. Ungewöhnliche oder inkonsistente User-Agent-Strings deuten oft auf Scraping-Aktivitäten, Bots oder potenzielle Sicherheitsbedrohungen hin.",
            
            "<strong>Analysen und Nutzererkenntnisse</strong>: Marketingteams nutzen <strong>User-Agent-Daten</strong>, um Besucherdemografien zu verstehen. Das Wissen darüber, welche Browser und Geräte Ihre Zielgruppe verwendet, hilft bei der Priorisierung von Tests und Optimierungen.",
            
            "<strong>Mobilerkennung</strong>: Entwickler verwenden <strong>Geräteerkennung</strong> aus User-Agents für responsives Design. Während CSS-Medienabfragen den Großteil des responsiven Verhaltens handhaben, können User-Agents zusätzlichen Kontext für mobile Geräte liefern.",
            
            "<strong>Browserfunktionserkennung</strong>: Technikteams nutzen <strong>UA-String-Interpretation</strong> zur Bewertung von Browserfunktionen. Obwohl moderne Feature-Erkennung bevorzugt wird, dient die User-Agent-Analyse als ergänzende Methode."
          ]
        }
      },
      faq: {
        title: "Häufige Fragen zur User-Agent-Analyse",
        items: [
          {
            question: "Welche Informationen enthält ein typischer User-Agent-String?",
            answer: "<strong>User-Agent-Strings</strong> enthalten normalerweise mehrere Informationen in einem spezifischen Format:<br><br>• <strong>Browser-Name und Version</strong>: Identifiziert den verwendeten Webbrowser (Chrome, Firefox, Safari etc.) und dessen Version<br>• <strong>Rendering-Engine</strong>: Zeigt an, welche Engine Webinhalte verarbeitet (Gecko, WebKit, Blink etc.)<br>• <strong>Betriebssystem</strong>: Gibt das Betriebssystem an, auf dem der Browser läuft (Windows, macOS, Android, iOS etc.)<br>• <strong>Geräteinformationen</strong>: Kann Hardware-Details enthalten, besonders bei Mobilgeräten<br><br>Unser <strong>User-Agent-Analysator</strong> dekodiert all diese Elemente in ein lesbares Format."
          },
          {
            question: "Wie zuverlässig ist die Browsererkennung via User-Agent?",
            answer: "Die Zuverlässigkeit der <strong>Browsererkennung</strong> via User-Agent variiert:<br><br>• <strong>Standard-Browser</strong>: Hauptbrowser wie Chrome, Firefox und Safari können meist hochpräzise identifiziert werden<br>• <strong>Browser-Spoofing</strong>: Einige Nutzer oder Anwendungen modifizieren ihre User-Agent-Strings absichtlich<br>• <strong>Proxy-Server</strong>: Netzwerk-Proxys können User-Agent-Informationen ändern<br><br>Unser <strong>UA-String-Decoder</strong> verwendet ausgeklügelte Mustererkennungstechniken für maximale Genauigkeit."
          },
          {
            question: "Warum referenzieren manche User-Agents mehrere Browser?",
            answer: "Aufgrund historischer <strong>Browserkompatibilitäts</strong>-Praktiken referenzieren User-Agent-Strings oft mehrere Browser:<br><br>• <strong>Mozilla-Referenz</strong>: Die meisten Browser enthalten 'Mozilla', ein Relikt aus den frühen Tagen des Webs<br>• <strong>WebKit-Referenz</strong>: Chrome-basierte Browser enthalten WebKit-Referenzen, obwohl sie Blink verwenden<br><br>Unser <strong>User-Agent-Parsing-Tool</strong> durchdringt diese Komplexität und fokussiert sich auf den tatsächlichen Browser und die Engine."
          },
          {
            question: "Hilft User-Agent-Parsing bei responsivem Design?",
            answer: "Während <strong>responsives Design</strong> hauptsächlich auf CSS-Medienabfragen statt User-Agent-Erkennung basiert, kann <strong>UA-Parsing</strong> in mehrfacher Hinsicht ergänzen:<br><br>• <strong>Legacy-Browser-Support</strong>: Erkennung älterer Browser, die alternative Stile benötigen<br>• <strong>Gerätespezifische Optimierungen</strong>: Gezielte Anpassungen für bestimmte Gerätemodelle<br><br>Moderne Webentwicklungs-Best-Practices betonen zwar Feature-Erkennung und responsive Techniken, aber <strong>User-Agent-Analysen</strong> bleiben wertvoll."
          },
          {
            question: "Wie kann ich geparste User-Agent-Daten nutzen, um meine Website zu verbessern?",
            answer: "<strong>User-Agent-Daten</strong> können Ihre Website auf mehrere praktische Weisen verbessern:<br><br>1. <strong>Browserspezifische Fehlerbehebungen</strong>: Probleme identifizieren und beheben, die nur bestimmte Browser betreffen<br>2. <strong>Performance-Optimierungen</strong>: Leichtere Ressourcen für mobile Geräte oder ältere Browser bereitstellen<br>3. <strong>Feature-Einführungen</strong>: Progressive Verbesserung durch Bereitstellung erweiterter Funktionen nur für unterstützende Browser<br><br>Durch das Analysieren Ihrer Besucherlogs mit unserem <strong>User-Agent-String-Analysator</strong> gewinnen Sie wertvolle Einblicke in das technische Profil Ihrer Nutzer."
          }
        ]
      },
      guide: {
        title: "So verwenden Sie den User-Agent-Parser: Schritt-für-Schritt-Anleitung",
        step1: "<strong>User-Agent-String eingeben</strong>: Wenn Sie User-Agent-Strings aus Logs, Analysetools oder anderen Quellen haben, können Sie diese manuell in das Textfeld eingeben. Der <strong>UA-Parser</strong> akzeptiert jedes Standard-User-Agent-Format.",
        step2: "<strong>\"Aktuellen Browser erkennen\" verwenden</strong>: Wenn Sie den User-Agent Ihres eigenen Browsers analysieren möchten, klicken Sie einfach auf den \"Aktuellen Browser erkennen\"-Button.",
        step3: "<strong>Klicken Sie \"Analysieren\"</strong>: Sobald ein User-Agent-String im Eingabefeld steht, klicken Sie auf \"Analysieren\", um den <strong>Browsererkennungs</strong>-Prozess zu starten.",
        step4: "<strong>Zusammenfassung anzeigen</strong>: Der obere Teil der Ergebnisse zeigt eine schnelle Übersicht der wichtigsten Details: Browser-Name und Version, Betriebssystem und Gerätetyp.",
        step5: "<strong>Detaillierte Analyse prüfen</strong>: Unter der Zusammenfassung finden Sie eine detaillierte Tabelle mit spezifischen Informationen zu jeder Komponente."
      },
      conclusion: "Das Verstehen von User-Agent-Strings bietet wertvolle Einblicke in die verschiedenen Browserumgebungen, die auf Ihre Webinhalte zugreifen. Durch effektives Parsen und Analysieren dieser technischen Fingerabdrücke können Entwickler und Unternehmen fundierte Entscheidungen über Kompatibilität, Optimierung und Funktionsunterstützung treffen. Mit der kontinuierlichen Entwicklung des Webs und dem Auftauchen neuer Browser, Geräte und Plattformen bleibt ein zuverlässiges Tool zur Interpretation von User-Agent-Daten ein wesentlicher Aspekt für die Bereitstellung herausragender Web-Erlebnisse, die nahtlos über das gesamte Spektrum der Nutzerumgebungen hinweg funktionieren."
    }
  }