export default {
    name: 'HTTP-Header-Editor',
    description: 'Erstellen, bearbeiten und testen Sie HTTP-Anfrageheader',
    editor: {
      title: 'Header-Editor',
      headers: 'Anfrageheader',
      add: 'Header hinzufügen',
      bulk: 'Massenbearbeitung',
      import: 'Header importieren',
      export: 'Header exportieren',
      clear: 'Alle löschen',
      importError: 'Importfehler'
    },
    header: {
      name: 'Header-Name',
      value: 'Wert',
      description: 'Beschreibung',
      namePlaceholder: 'Header-Namen eingeben',
      valuePlaceholder: 'Header-Wert eingeben',
      actions: 'Aktionen',
      enabled: 'Aktiviert',
      duplicate: 'Duplizieren',
      delete: 'Löschen',
      noHeaders: 'Keine Header vorhanden. Klicken Sie auf "Hinzufügen" oder laden Sie eine Vorlage',
      bulkPlaceholder: 'Header einfügen (Format: \'Name: Wert\', ein Header pro Zeile) oder Rohheader-Text einfügen'
    },
    presets: {
      title: 'Vorlagen',
      save: 'Aktuelle speichern',
      load: 'Vorlage laden',
      delete: 'Vorlage löschen',
      presetName: 'Vorlagenname',
      namePlaceholder: 'Vorlagenname eingeben',
      confirmDelete: 'Diese Vorlage wirklich löschen?',
      common: 'Häufige Header',
      custom: 'Benutzerdefinierte Vorlagen'
    },
    common: {
      userAgent: 'User-Agent',
      contentType: 'Content-Type',
      authorization: 'Authorization',
      acceptLanguage: 'Accept-Language',
      acceptEncoding: 'Accept-Encoding',
      cacheControl: 'Cache-Control',
      cookie: 'Cookie',
      referer: 'Referer',
      origin: 'Origin'
    },
    test: {
      title: 'Header testen',
      url: 'URL',
      urlPlaceholder: 'URL zum Testen der Header eingeben',
      method: 'Methode',
      send: 'Anfrage senden',
      response: 'Antwort'
    },
    response: {
      title: 'Antwort',
      status: 'Status',
      headers: 'Antwortheader',
      body: 'Inhalt',
      time: 'Zeit',
      size: 'Größe',
      loading: 'Wird geladen...',
      noResponse: 'Fügen Sie Header hinzu, um eine Vorschau zu sehen',
      headerCount: 'Header'
    },
    options: {
      title: 'Optionen',
      followRedirects: 'Weiterleitungen folgen',
      timeout: 'Timeout (Sekunden)',
      validateSSL: 'SSL-Zertifikat validieren',
      sendCredentials: 'Anmeldedaten senden'
    },
    formats: {
      title: 'Exportformate',
      raw: 'Rohtext',
      json: 'JSON',
      curl: 'cURL-Befehl',
      javascript: 'JavaScript',
      python: 'Python',
      php: 'PHP',
      fetch: 'Fetch API',
      axios: 'Axios'
    },
    guides: {
      title: 'Header-Leitfaden',
      description: 'Erfahren Sie mehr über häufige HTTP-Header und ihre Verwendung',
      securityHeaders: 'Sicherheitsheader',
      cachingHeaders: 'Cache-Header',
      corsHeaders: 'CORS-Header',
      authenticationHeaders: 'Authentifizierungsheader',
      commonValues: 'Häufige Werte'
    },
    actions: {
      copy: 'Kopieren',
      format: 'Formatieren',
      validate: 'Validieren',
      clear: 'Leeren'
    },
    messages: {
      headerAdded: 'Header hinzugefügt',
      headerDeleted: 'Header gelöscht',
      headersCleared: 'Alle Header gelöscht',
      presetSaved: 'Vorlage gespeichert',
      presetLoaded: 'Vorlage geladen',
      presetDeleted: 'Vorlage gelöscht',
      requestSent: 'Anfrage gesendet',
      requestFailed: 'Anfrage fehlgeschlagen: {error}',
      copied: 'In die Zwischenablage kopiert',
      importSuccess: 'Header erfolgreich importiert',
      exportSuccess: 'Header erfolgreich exportiert',
      invalidUrl: 'Ungültige URL',
      pleaseEnterHeader: 'Bitte Header-Text eingeben',
      invalidHeader: 'Keine gültigen Header gefunden. Verwenden Sie das Format \'Name: Wert\'',
      invalidHeaderName: 'Ungültiger Header-Name: {error}',
      copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren'
    },
    article: {
      title: "HTTP-Header-Editor: Umfassende Anleitung",
      features: {
        title: "HTTP-Header und ihre Bedeutung",
        description: "Der <strong>HTTP-Header-Editor</strong> ist ein leistungsstarkes Tool für Entwickler, Tester und API-Enthusiasten zum Erstellen, Bearbeiten und Validieren von HTTP-Headern für Webanfragen. Diese Header sind entscheidende Komponenten der HTTP-Kommunikation, die zwischen Client und Server wichtige Metadaten übertragen und Authentifizierung, Inhaltsverhandlung, Cache-Verhalten und mehr steuern.<br><br>Unser <strong>Header-Editor-Tool</strong> bietet eine intuitive Oberfläche zum Erstellen komplexer Header-Sets, Testen verschiedener Konfigurationen und Exportieren der Ergebnisse in verschiedenen Formaten für die Implementierung in Anwendungen. Egal ob Sie API-Probleme debuggen, neue Integrationen entwickeln oder Webprotokolle lernen - dieses Tool vereinfacht den Umgang mit HTTP-Headern.",
        useCases: {
          title: "Praktische Anwendungsfälle",
          items: [
            "<strong>API-Authentifizierungstests</strong>: Bei APIs, die Authentifizierungstoken oder -schlüssel in Headern benötigen (wie OAuth, JWT oder API-Schlüssel), ermöglicht unser <strong>Header-Builder</strong> schnelles Erstellen und Testen verschiedener Authentifizierungsszenarien ohne Codeänderungen.",
            
            "<strong>CORS-Debugging</strong>: Für Webanwendungen mit Cross-Origin-Anfragen ist die korrekte Konfiguration von Origin-, Access-Control- und Preflight-Headern entscheidend. Dieses <strong>HTTP-Header-Tool</strong> hilft durch Testen verschiedener Header-Konfigurationen bei der Identifizierung und Lösung von CORS-Problemen.",
            
            "<strong>Inhaltsverhandlung</strong>: Moderne Webdienste unterstützen verschiedene Inhaltsarten, Sprachen und Kodierungen. Mit Headern wie Accept, Accept-Language und Accept-Encoding können Sie testen, wie Server auf unterschiedliche Client-Präferenzen reagieren.",
            
            "<strong>Cache-Optimierung</strong>: Richtig konfigurierte Cache-Header können die Anwendungsleistung deutlich verbessern. Unser <strong>Header-Management-Tool</strong> ermöglicht das Experimentieren mit verschiedenen Cache-Control-Direktiven, ETag-Konfigurationen und bedingten Anfrageheadern.",
            
            "<strong>Sicherheitsheader-Konfiguration</strong>: Die Implementierung von Sicherheitsheadern wie Content-Security-Policy, Strict-Transport-Security und X-Content-Type-Options ist für moderne Webanwendungen essenziell. Dieses Tool ermöglicht das Erstellen und Validieren dieser komplexen Header vor der Produktivumsetzung.",
            
            "<strong>API-Client-Generierung</strong>: Nach Abschluss Ihrer Header-Sammlung können Sie Code-Snippets in verschiedenen Programmiersprachen exportieren, um dieselben Header einfach in Anwendungscode, cURL-Befehlen oder API-Testtools zu implementieren."
          ]
        }
      },
      faq: {
        title: "Häufige Fragen zu HTTP-Headern",
        items: [
          {
            question: "Was sind HTTP-Anfrageheader und warum sind sie wichtig?",
            answer: "HTTP-Anfrageheader sind Schlüssel-Wert-Paare, die als Teil einer HTTP-Anfrage vom Client (z.B. Browser oder API-Client) an den Server gesendet werden. Sie liefern wichtige Metadaten über die Anfrage, Client-Fähigkeiten und Präferenzen.<br><br>Diese Header sind wichtig, weil sie:<br><br>• <strong>Authentifizierung und Autorisierung</strong> steuern<br>• <strong>Cache-Verhalten</strong> für bessere Performance verwalten<br>• <strong>Inhaltsverhandlung</strong> (Format, Sprache, Kodierung) ermöglichen<br>• <strong>Cross-Origin-Anfragen</strong> und Sicherheitsrichtlinien konfigurieren<br>• <strong>Client-Kontext</strong> wie User-Agent und Referrer bereitstellen<br><br>Ohne korrekte Header würden viele moderne Webfunktionen nicht richtig arbeiten, APIs würden Sicherheitskontrollen fehlen und die Webperformance würde deutlich sinken."
          },
          {
            question: "Was ist der Unterschied zwischen Content-Type, Authorization und Accept Headern?",
            answer: "Diese drei Header dienen unterschiedlichen Zwecken in der HTTP-Kommunikation:<br><br><strong>Content-Type</strong>: Gibt den Medientyp der Ressource im Anfragebody an (beim Senden von Daten) oder die vom Client verstandenen Inhaltstypen (beim Anfordern von Daten). Häufige Werte:<br>• <code>application/json</code> für JSON-Daten<br>• <code>application/x-www-form-urlencoded</code> für Formulardaten<br>• <code>multipart/form-data</code> für Dateiuploads<br><br><strong>Authorization</strong>: Enthält Anmeldeinformationen zur Authentifizierung des Clients beim Server. Häufige Formate:<br>• <code>Bearer eyJhbGc...</code> für JWT/OAuth-Token<br>• <code>Basic dXNlcm5hbWU6cGFzc3dvcmQ=</code> für Basic-Authentifizierung<br>• <code>ApiKey 12345abcde...</code> für API-Schlüssel<br><br><strong>Accept</strong>: Zeigt an, welche Inhaltstypen der Client in der Antwort verarbeiten kann. Dies ermöglicht dem Server, bei mehreren verfügbaren Optionen das passendste Format zu liefern. Beispiele:<br>• <code>application/json</code> für JSON-Daten<br>• <code>text/html</code> für HTML-Inhalte<br>• <code>*/*</code> für beliebige Inhaltstypen<br><br>Die korrekte Verwendung dieser Header stellt den richtigen Datenaustausch, sichere Authentifizierung und optimale Inhaltsauslieferung zwischen Client und Server sicher."
          },
          {
            question: "Wie teste ich, ob meine Header korrekt funktionieren?",
            answer: "Effektives Testen von HTTP-Headern umfasst mehrere Methoden:<br><br>1. <strong>Unser Header-Editor-Tool</strong>: Erstellen Sie Ihre Header-Sammlung und exportieren Sie sie als cURL-Befehl oder Code-Snippet zum direkten Ausführen.<br><br>2. <strong>Browser-Entwicklertools</strong>: Die meisten Browser enthalten Netzwerkanalyse-Tools, die alle Anfrageheader und Serverantworten anzeigen. Überprüfen Sie, ob Ihre Header wie erwartet gesendet werden.<br><br>3. <strong>Online-API-Testdienste</strong>: Tools wie Postman oder Insomnia erlauben das Setzen benutzerdefinierter Header und die vollständige Analyse des Anfrage-/Antwort-Zyklus.<br><br>4. <strong>Echo-Services</strong>: Endpunkte wie httpbin.org spiegeln Ihre Anfragedetails zurück, was die Header-Überprüfung vereinfacht.<br><br>5. <strong>Server-Logs</strong>: Wenn Sie Zugriff auf Server-Logs haben, protokollieren diese normalerweise eingehende Anfrageheader.<br><br>Beachten Sie beim Testen diese häufigen Probleme:<br>• Falsche Header-Groß-/Kleinschreibung (Header sind zwar case-insensitive, aber manche Implementierungen können streng sein)<br>• Fehlende oder falsch formatierte Authentifizierungstoken<br>• Nicht übereinstimmender Content-Type mit dem tatsächlich gesendeten Inhalt<br>• Falsch konfigurierte CORS-Header für Cross-Origin-Anfragen"
          },
          {
            question: "Kann ich Header-Konfigurationen für verschiedene Projekte speichern und wiederverwenden?",
            answer: "Unser aktuelles Online-Tool implementiert zwar aus Datenschutzgründen keinen persistenten Speicher, aber es gibt mehrere Möglichkeiten, Header-Konfigurationen zu speichern und wiederzuverwenden:<br><br>1. <strong>Als Code exportieren</strong>: Generieren Sie Code-Snippets in Ihrer bevorzugten Sprache (JavaScript, Python, cURL etc.) zur Speicherung in Projekt-Repositories oder Dokumentation.<br><br>2. <strong>Als Rohtext kopieren</strong>: Das Rohheader-Format kann in Textdateien, Dokumentationssystemen oder Team-Wikis für zukünftige Referenz gespeichert werden.<br><br>3. <strong>Browser-Erweiterungen</strong>: Mehrere Erweiterungen für Chrome, Firefox und andere Browser ermöglichen das Speichern und Verwalten von Header-Sets für verschiedene Domains und Projekte.<br><br>4. <strong>API-Management-Plattformen</strong>: Tools wie Postman oder Insomnia bieten Workspace-Funktionen zum Organisieren und Speichern verschiedener Anfragekonfigurationen inklusive Header.<br><br>5. <strong>Umgebungsvariablen</strong>: Für Entwicklungs-Workflows können Header als Umgebungsvariablen in .env-Dateien oder CI/CD-Pipelines definiert werden.<br><br>Für Teams, die mit APIs oder komplexen Webanwendungen arbeiten, empfehlen wir die Pflege eines zentralen Repositorys mit Standard-Header-Konfigurationen für verschiedene Umgebungen (Entwicklung, Test, Produktion), um Konsistenz im Entwicklungs-Workflow zu gewährleisten."
          },
          {
            question: "Welche häufigen Fehler sollte ich bei der Verwendung von HTTP-Headern vermeiden?",
            answer: "Achten Sie bei der Arbeit mit HTTP-Headern auf diese häufigen Fallstricke:<br><br>1. <strong>Fehlende Sicherheitsheader</strong>: Das Weglassen kritischer Sicherheitsheader wie Content-Security-Policy, X-Content-Type-Options und Strict-Transport-Security kann Anwendungen angreifbar machen.<br><br>2. <strong>Falscher Content-Type</strong>: Ein nicht zum tatsächlichen Inhaltsformat passender Content-Type-Header führt zu Parsing-Fehlern.<br><br>3. <strong>Authorization-Header-Leaks</strong>: Das Senden von Authentifizierungstoken an Drittanbieter oder deren Protokollierung kann Sicherheitsrisiken darstellen.<br><br>4. <strong>Fehlende CORS-Header</strong>: Für Anwendungen, die Ressourcen für verschiedene Origins bereitstellen, führt das Fehlen korrekt konfigurierter Access-Control-Allow-*-Header zu fehlgeschlagenen Cross-Origin-Anfragen.<br><br>5. <strong>Redundante oder widersprüchliche Header</strong>: Mehrere Header, die dasselbe Verhalten mit unterschiedlichen Werten steuern, können unvorhersehbare Ergebnisse produzieren.<br><br>6. <strong>Groß-/Kleinschreibung</strong>: Obwohl HTTP-Header-Namen technisch case-insensitive sind, können manche Implementierungen dies streng handhaben.<br><br>7. <strong>Zu tolerante Header</strong>: Header wie Access-Control-Allow-Origin: * oder weit gefasste Content-Security-Policy-Direktiven können bei falscher Anwendung Sicherheitslücken verursachen.<br><br>8. <strong>Header-Größenlimits ignorieren</strong>: Manche Server begrenzen die Gesamtgröße von HTTP-Headern (typisch 8KB). Sehr große Cookies oder Authentifizierungstoken können diese Limits überschreiten."
          }
        ]
      },
      guide: {
        title: "So verwenden Sie den HTTP-Header-Editor: Schritt-für-Schritt-Anleitung",
        step1: "<strong>Header zu Ihrer Sammlung hinzufügen</strong>: Klicken Sie auf \"Header hinzufügen\", um neue Header-Einträge zu erstellen. Jeder Header besteht aus einem Namen (wie \"Content-Type\" oder \"Authorization\") und einem Wert. Sie können beliebig viele Header für Ihre Anfrage hinzufügen. Für häufige Header können Sie auch die \"Häufige Header\"-Vorlagen verwenden.",
        step2: "<strong>Header-Namen und -Werte eingeben</strong>: Geben Sie für jeden Header den passenden Namen und Wert ein. Header-Namen sollten HTTP-Konventionen folgen, während Werte vom Verwendungszweck des Headers abhängen. Das Tool validiert automatisch Ihre Eingaben.",
        step3: "<strong>Mehrere Header per Massenbearbeitung hinzufügen</strong>: Wenn Sie mehrere Header gleichzeitig hinzufügen möchten, nutzen Sie den Massenbearbeitungsbereich am unteren Rand des Editor-Panels.",
        step4: "<strong>Header-Leitfaden als Referenz nutzen</strong>: Wenn Sie unsicher über passende Werte sind, konsultieren Sie den Header-Leitfaden auf der rechten Seite des Tools. Klicken Sie auf Header-Namen wie \"Content-Type\" oder \"Authorization\", um häufige Werte zu sehen und sie zu Ihrer Sammlung hinzuzufügen.",
        step5: "<strong>Bevorzugtes Exportformat wählen</strong>: Nach Konfiguration Ihrer Header wählen Sie im Dropdown-Menü Ihr gewünschtes Exportformat. Optionen umfassen Rohtext für einfaches Kopieren, cURL für Kommandozeilenanfragen und verschiedene Programmiersprachen.",
        step6: "<strong>Formatierte Ausgabe anzeigen</strong>: Das Tool generiert basierend auf Ihren Headern und dem gewählten Exportformat formatierten Code oder Text, bereit zur Verwendung in Anwendungscode, API-Testtools oder Dokumentation.",
        step7: "<strong>Ergebnisse in die Zwischenablage kopieren</strong>: Klicken Sie auf \"Kopieren\", um die formatierte Ausgabe in die Zwischenablage zu kopieren, zum direkten Einfügen in Code-Editoren, Terminals oder andere Tools."
      },
      conclusion: "Der HTTP-Header-Editor vereinfacht den komplexen Prozess der Erstellung, des Testens und der Implementierung von HTTP-Headern mit einer intuitiven Oberfläche und Unterstützung für verschiedene Exportformate. Da Web-Sicherheits- und Performance-Anforderungen ständig wachsen, wird die korrekte Header-Konfiguration immer wichtiger. Dieses Tool hilft sicherzustellen, dass Ihre Anwendungen Best Practices für HTTP-Kommunikation, Sicherheit und Performance-Optimierung befolgen."
    }
  }