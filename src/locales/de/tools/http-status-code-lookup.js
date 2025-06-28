export default {
    name: 'HTTP-Statuscode-Abfrage',
    description: 'HTTP-Antwortstatuscodes und -nachrichten suchen und verstehen',
    search: {
      title: 'Statuscode suchen',
      placeholder: 'Statuscode eingeben oder nach Beschreibung suchen',
      button: 'Suchen',
      recent: 'Letzte Suchanfragen',
      common: 'Häufige Statuscodes',
      filter: {
        all: 'Alle Kategorien',
        informational: '1xx - Informationelle Antworten',
        success: '2xx - Erfolgreiche Antworten',
        redirection: '3xx - Weiterleitungen',
        clientError: '4xx - Client-Fehler',
        serverError: '5xx - Server-Fehler'
      }
    },
    results: {
      title: 'Statuscode-Informationen',
      code: 'Statuscode',
      type: 'Typ',
      message: 'Standardnachricht',
      description: 'Beschreibung',
      spec: 'Spezifikation',
      references: 'Referenzen',
      examples: 'Beispiele',
      noResults: 'Keine Ergebnisse gefunden',
      searchError: 'Fehler bei der Suche nach Statuscodes',
      tryAgain: 'Versuchen Sie eine andere Suche',
      example: 'Beispiel',
      notes: 'Hinweise'
    },
    categories: {
      title: 'Kategorien',
      information: 'Informationelle Antworten (1xx)',
      success: 'Erfolgreiche Antworten (2xx)',
      redirection: 'Weiterleitungsnachrichten (3xx)',
      clientError: 'Client-Fehlerantworten (4xx)',
      serverError: 'Server-Fehlerantworten (5xx)',
      unofficial: 'Inoffizielle Codes',
      internet: 'Internet Information Services',
      nginx: 'Nginx',
      cloudflare: 'Cloudflare',
      aws: 'AWS'
    },
    statusInfo: {
      '100': {
        message: 'Weiter',
        description: 'Der Server hat die Anfrageheader erhalten und der Client soll den Anfragekörper senden.',
        shortDescription: 'Anfrage fortsetzen',
        fullDescription: 'Der Server hat den ersten Teil der Anfrage erhalten und der Client soll den Rest senden.',
        notes: 'Wird oft verwendet, wenn der Client vor dem Senden eines großen Anfragekörpers prüfen möchte, ob der Server die Anfrage akzeptiert.'
      },
      '101': {
        message: 'Protokollwechsel',
        description: 'Der Client hat einen Protokollwechsel angefordert und der Server hat zugestimmt.',
        shortDescription: 'Protokoll wechseln',
        fullDescription: 'Der Server hat die Client-Anfrage verstanden und teilt dem Client über den Upgrade-Header mit, dass ein anderes Protokoll verwendet wird.',
        notes: 'Wird häufig beim Aufbau von WebSocket-Verbindungen verwendet.'
      },
      '200': {
        message: 'OK',
        description: 'Die Anfrage war erfolgreich. Die Bedeutung des Erfolgs hängt von der HTTP-Methode ab.'
      },
      '201': {
        message: 'Erstellt',
        description: 'Die Anfrage war erfolgreich und hat eine neue Ressource erstellt.'
      },
      '204': {
        message: 'Kein Inhalt',
        description: 'Der Server hat die Anfrage erfolgreich verarbeitet, gibt aber keinen Inhalt zurück.'
      },
      '301': {
        message: 'Dauerhaft verschoben',
        description: 'Die angeforderte Ressource wurde dauerhaft verschoben. Die neue URL wird in der Antwort angegeben.'
      },
      '302': {
        message: 'Gefunden',
        description: 'Die angeforderte Ressource wurde vorübergehend verschoben. Die neue URL wird in der Antwort angegeben.'
      },
      '304': {
        message: 'Nicht verändert',
        description: 'Die Ressource wurde nicht verändert, daher kann die zwischengespeicherte Version verwendet werden.'
      },
      '400': {
        message: 'Ungültige Anfrage',
        description: 'Der Server konnte die Anfrage aufgrund ungültiger Syntax nicht verstehen.'
      },
      '401': {
        message: 'Nicht autorisiert',
        description: 'Der Client muss sich authentifizieren, um die angeforderte Antwort zu erhalten.'
      },
      '403': {
        message: 'Verboten',
        description: 'Der Client hat keine Berechtigung, auf die Inhalte zuzugreifen.'
      },
      '404': {
        message: 'Nicht gefunden',
        description: 'Der Server konnte die angeforderte Ressource nicht finden.'
      },
      '500': {
        message: 'Interner Serverfehler',
        description: 'Der Server ist auf eine Situation gestoßen, die er nicht verarbeiten kann.'
      },
      '502': {
        message: 'Ungültiges Gateway',
        description: 'Der Server, der als Gateway oder Proxy fungiert, hat eine ungültige Antwort vom Upstream-Server erhalten.'
      },
      '503': {
        message: 'Dienst nicht verfügbar',
        description: 'Der Server ist derzeit nicht in der Lage, die Anfrage zu bearbeiten. Häufige Ursachen sind Wartungsarbeiten oder Überlastung.'
      }
    },
    tools: {
      title: 'Werkzeuge',
      checkUrl: 'URL-Status prüfen',
      statusCodeFlow: 'Statuscode-Flussdiagramm',
      apiTest: 'API-Tester',
      debugger: 'Antwort-Debugger',
      statusInspector: 'URL-Statusprüfer'
    },
    features: {
      title: 'Funktionen',
      overview: 'Statuscode-Übersicht',
      comparison: 'Statuscode-Vergleich',
      troubleshooting: 'Fehlerbehebungsleitfaden',
      bestPractices: 'Beste Praktiken',
      codeExamples: 'Code-Beispiele'
    },
    details: {
      title: 'Details',
      history: 'Geschichte',
      browser: 'Browser-Verhalten',
      seo: 'SEO-Auswirkungen',
      security: 'Sicherheitsauswirkungen',
      bestPractices: 'Beste Praktiken',
      alternatives: 'Alternative Statuscodes',
      commonErrors: 'Häufige Fehler'
    },
    codeExamples: {
      title: 'Code-Beispiele',
      nodejs: 'Node.js',
      python: 'Python',
      php: 'PHP',
      java: 'Java',
      go: 'Go',
      copyCode: 'Code kopieren',
      response: 'Antwort-Beispiel',
      request: 'Anfrage-Beispiel'
    },
    category: {
      intro: 'HTTP-Statuscodes sind die Antworten des Servers auf Browser-Anfragen und werden in 5 Kategorien unterteilt:',
      informational: '1xx (Informationelle Statuscodes) - Die Anfrage wird bearbeitet',
      success: '2xx (Erfolgsstatuscodes) - Die Anfrage wurde erfolgreich bearbeitet',
      redirection: '3xx (Weiterleitungsstatuscodes) - Weitere Aktionen sind erforderlich',
      clientError: '4xx (Client-Fehlerstatuscodes) - Der Server kann die Anfrage nicht bearbeiten',
      serverError: '5xx (Server-Fehlerstatuscodes) - Der Server hat einen Fehler bei der Bearbeitung der Anfrage'
    },
    codes: {
      '100': {
        shortDescription: 'Anfrage fortsetzen',
        description: 'Der Server hat den ersten Teil der Anfrage erhalten und der Client soll den Rest senden.',
        notes: 'Wird oft verwendet, wenn der Client vor dem Senden eines großen Anfragekörpers prüfen möchte, ob der Server die Anfrage akzeptiert.'
      },
      '101': {
        shortDescription: 'Protokollwechsel',
        description: 'Der Server hat die Client-Anfrage verstanden und teilt dem Client über den Upgrade-Header mit, dass ein anderes Protokoll verwendet wird.',
        notes: 'Wird häufig beim Aufbau von WebSocket-Verbindungen verwendet.'
      },
      '200': {
        shortDescription: 'Erfolgreiche Anfrage',
        description: 'Die Anfrage war erfolgreich und der Server hat die angeforderte Antwort zurückgegeben. Dies ist der häufigste Statuscode.',
        notes: 'Alle erfolgreichen GET-Anfragen sollten diesen Statuscode zurückgeben.'
      },
      '201': {
        shortDescription: 'Erstellt',
        description: 'Die Anfrage war erfolgreich und der Server hat eine neue Ressource erstellt. Wird normalerweise nach POST-Anfragen zurückgegeben.',
        notes: 'Sollte die Position (URI) der neu erstellten Ressource zurückgeben.'
      },
      '204': {
        shortDescription: 'Kein Inhalt',
        description: 'Der Server hat die Anfrage erfolgreich bearbeitet, gibt aber keinen Inhalt zurück.',
        notes: 'Wird oft für erfolgreiche DELETE-Anfragen oder wenn der Client nur seine Ansicht zurücksetzen soll, verwendet.'
      },
      '301': {
        shortDescription: 'Dauerhafte Weiterleitung',
        description: 'Die angeforderte Ressource wurde dauerhaft verschoben. Zukünftige Anfragen sollten die neue URL verwenden.',
        notes: 'Suchmaschinen aktualisieren die URL der Ressource und Browser speichern diese Weiterleitung normalerweise im Cache.'
      },
      '302': {
        shortDescription: 'Temporäre Weiterleitung',
        description: 'Die angeforderte Ressource wurde vorübergehend verschoben, aber der Client sollte die ursprüngliche URL weiterhin verwenden.',
        notes: 'Im Gegensatz zu 301 aktualisieren Suchmaschinen die URL nicht und Browser speichern diese Weiterleitung möglicherweise nicht im Cache.'
      },
      '304': {
        shortDescription: 'Nicht verändert',
        description: 'Die Ressource wurde nicht verändert, daher kann die zwischengespeicherte Version verwendet werden. Wird oft für bedingte GET-Anfragen verwendet.',
        notes: 'Der Server sollte keinen Antwortkörper zurückgeben, was die Leistung verbessert und die Bandbreitennutzung reduziert.'
      },
      '400': {
        shortDescription: 'Ungültige Anfrage',
        description: 'Der Server konnte die Anfrage aufgrund ungültiger Syntax nicht verstehen. Der Client sollte die Anfrage nicht unverändert wiederholen.',
        notes: 'Tritt normalerweise auf, wenn Anfrageparameter falsch formatiert sind, erforderliche Parameter fehlen oder Parameterwerte ungültig sind.'
      },
      '401': {
        shortDescription: 'Nicht autorisiert',
        description: 'Die Anfrage erfordert eine Benutzerauthentifizierung. Der Client hat keine oder ungültige Anmeldeinformationen bereitgestellt.',
        notes: 'Der Client sollte die richtigen Authentifizierungsinformationen bereitstellen oder erneut bereitstellen.'
      },
      '403': {
        shortDescription: 'Zugriff verweigert',
        description: 'Der Server hat die Anfrage verstanden, verweigert jedoch die Ausführung. Im Gegensatz zu 401 hilft Authentifizierung nicht.',
        notes: 'Tritt normalerweise auf, wenn der Client nicht über ausreichende Berechtigungen verfügt, z.B. beim Zugriff auf Inhalte, die nur für Administratoren sichtbar sind.'
      },
      '404': {
        shortDescription: 'Nicht gefunden',
        description: 'Der Server konnte die angeforderte Ressource nicht finden. Mögliche Ursachen sind falsch geschriebene URLs oder gelöschte Inhalte.',
        notes: 'Einer der häufigsten Fehlercodes. Der Benutzer sollte klar informiert werden, dass die Ressource nicht existiert.'
      },
      '405': {
        shortDescription: 'Methode nicht erlaubt',
        description: 'Die in der Anfragezeile angegebene Methode ist für die angeforderte Ressource nicht zulässig.',
        notes: 'Die Antwort muss einen Allow-Header enthalten, der die für die Ressource zulässigen Methoden angibt.'
      },
      '409': {
        shortDescription: 'Konflikt',
        description: 'Die Anfrage steht im Konflikt mit dem aktuellen Zustand des Servers. Tritt oft bei PUT-Anfragen auf.',
        notes: 'Tritt häufig auf, wenn versucht wird, eine bereits existierende Ressource zu erstellen oder gleichzeitig dieselbe Ressource zu bearbeiten.'
      },
      '429': {
        shortDescription: 'Zu viele Anfragen',
        description: 'Der Client hat innerhalb eines bestimmten Zeitraums zu viele Anfragen gesendet ("Ratenbegrenzung").',
        notes: 'Sollte einen Retry-After-Header enthalten, der angibt, wann der Client die Anfrage wiederholen kann.'
      },
      '500': {
        shortDescription: 'Interner Serverfehler',
        description: 'Der Server ist auf eine Situation gestoßen, die er nicht verarbeiten kann. Normalerweise ein Codefehler oder temporäres Problem.',
        notes: 'Einer der häufigsten Server-Fehlercodes. Detaillierte Fehlermeldungen und Protokolle helfen bei der Fehlerbehebung.'
      },
      '502': {
        shortDescription: 'Ungültiges Gateway',
        description: 'Der Server, der als Gateway oder Proxy fungiert, hat eine ungültige Antwort vom Upstream-Server erhalten.',
        notes: 'Tritt normalerweise bei Verwendung eines Reverse-Proxys oder Load Balancers auf, wenn der Upstream-Dienst nicht verfügbar ist oder eine abnormale Antwort liefert.'
      },
      '503': {
        shortDescription: 'Dienst nicht verfügbar',
        description: 'Der Server ist vorübergehend nicht verfügbar, normalerweise aufgrund von Überlastung oder Wartungsarbeiten.',
        notes: 'Sollte einen Retry-After-Header enthalten, der angibt, wann der Client die Anfrage wiederholen kann. Dies hilft, die Serverlast zu verringern.'
      },
      '504': {
        shortDescription: 'Gateway-Timeout',
        description: 'Der Server, der als Gateway oder Proxy fungiert, hat nicht rechtzeitig eine Antwort vom Upstream-Server erhalten.',
        notes: 'Tritt häufig auf, wenn der nachgelagerte Dienst zu lange für die Bearbeitung benötigt oder Netzwerkprobleme vorliegen.'
      }
    },
    article: {
      title: "HTTP-Statuscode-Referenz - Web-Antwortcodes verstehen",
      intro: {
        title: "Was sind HTTP-Statuscodes und warum sind sie wichtig?",
        p1: "<b>HTTP-Statuscodes</b> sind standardisierte Antwortcodes, die von Webservern gesendet werden, um das Ergebnis einer Client-Anfrage anzuzeigen. Diese dreistelligen Codes sind in fünf Kategorien unterteilt, die jeweils einen bestimmten Zweck in der Webkommunikation erfüllen. Unser HTTP-Statuscode-Abfragetool bietet sofortigen Zugriff auf detaillierte Informationen zu diesen Codes und hilft Entwicklern, Website-Administratoren und IT-Profis, webbezogene Probleme effizient zu beheben.",
        p2: "Das Verständnis von <b>HTTP-Antwortcodes</b> ist für jeden, der mit Websites oder Webanwendungen arbeitet, unerlässlich. Diese Codes zeigen an, ob eine HTTP-Anfrage erfolgreich abgeschlossen wurde, zusätzliche Aktionen erforderlich sind oder ein Fehler aufgetreten ist. Durch die schnelle Identifizierung der Bedeutung hinter Statuscodes wie 404 Nicht gefunden oder 500 Interner Serverfehler können Sie Probleme schneller diagnostizieren und effektive Lösungen zur Verbesserung der Benutzererfahrung und Website-Funktionalität implementieren.",
        p3: "Unser umfassendes <b>Statuscode-Referenz</b>-Tool bietet nicht nur grundlegende Definitionen, sondern auch detaillierte Erklärungen jedes Codes, häufige Ursachen und empfohlene Maßnahmen. Egal, ob Sie eine Website debuggen, die SEO-Leistung optimieren oder eine API entwickeln - dieses Tool ist Ihr unverzichtbarer Helfer, um Serverantworten zu interpretieren und einen reibungslosen Web-Betrieb sicherzustellen."
      },
      useCases: {
        title: "Praktische Anwendungen von HTTP-Statuscode-Wissen",
        case1: "<b>Website-Fehlerbehebung</b>: Wenn Benutzer Probleme beim Zugriff auf bestimmte Seiten melden, können HTTP-Statuscodes schnell feststellen, ob das Problem fehlende Ressourcen (404), Serverfehler (5xx) oder Berechtigungsprobleme (403) sind. Unser Tool hilft Ihnen, diese Fehler zu verstehen und geeignete Lösungen zu implementieren.",
        case2: "<b>SEO-Optimierung</b>: Suchmaschinen verwenden Statuscodes, um den Gesundheitszustand Ihrer Website zu verstehen. Die korrekte Verwaltung von Weiterleitungen (301 vs. 302) und Fehlerseiten hat erhebliche Auswirkungen auf das Suchranking. Verwenden Sie unser Tool, um sicherzustellen, dass Ihre Website Statuscodes korrekt implementiert, um die beste SEO-Leistung zu erzielen.",
        case3: "<b>API-Entwicklung und -Tests</b>: REST-APIs sind stark auf HTTP-Statuscodes angewiesen, um Antwortstatus zu kommunizieren. Entwickler können unsere Referenz verwenden, um die am besten geeigneten Statuscodes für ihre API-Endpunkte zu implementieren und so eine klare Kommunikation zwischen Diensten zu gewährleisten.",
        case4: "<b>Server-Konfiguration</b>: Systemadministratoren verwenden Statuscodes, um Konfigurationsprobleme von Webservern, Load Balancern und Proxys zu diagnostizieren. Unsere detaillierten Erklärungen helfen festzustellen, ob Fehler auf Server-Einstellungen, Netzwerkprobleme oder Anwendungscode zurückzuführen sind.",
        case5: "<b>Webanwendungssicherheit</b>: Sicherheitsexperten analysieren abnormale Statuscode-Muster, um potenzielle Angriffe oder Schwachstellen zu erkennen. Das Verständnis der Sicherheitsauswirkungen verschiedener Statuscodes hilft bei der Implementierung geeigneter Zugriffskontrollen und Schutzmechanismen."
      },
      tutorial: {
        title: "So verwenden Sie das HTTP-Statuscode-Abfragetool",
        intro: "Unser HTTP-Statuscode-Referenztool ist intuitiv und effizient gestaltet. Befolgen Sie diese einfachen Schritte, um schnell die gewünschten Informationen zu jedem HTTP-Statuscode zu finden:",
        step1: {
          title: "Schritt 1: Suchkriterien eingeben",
          description: "Geben Sie zunächst in das Suchfeld oben im Tool eine bestimmte Statuscode-Nummer (wie 404 oder 500) oder ein beschreibendes Schlüsselwort (wie \"Nicht gefunden\" oder \"Serverfehler\") ein. Die Suchfunktion ist darauf ausgelegt, sowohl Code-Nummern als auch Beschreibungen zu berücksichtigen, was Ihnen Flexibilität bei der Suche bietet."
        },
        step2: {
          title: "Schritt 2: Nach Kategorie filtern (optional)",
          description: "Wenn Sie Codes innerhalb einer bestimmten Kategorie durchsuchen möchten, verwenden Sie das Dropdown-Menü, um die Ergebnisse zu filtern. Sie können zwischen informationellen Antworten (1xx), erfolgreichen Antworten (2xx), Weiterleitungen (3xx), Client-Fehlern (4xx) oder Server-Fehlern (5xx) wählen. Diese Filteroption ist besonders nützlich, wenn Sie verwandte Statuscodes erkunden möchten."
        },
        step3: {
          title: "Schritt 3: Statuscode-Liste anzeigen",
          description: "Nach der Suche oder Filterung sehen Sie eine Liste der passenden Statuscodes. Jeder Eintrag zeigt die Code-Nummer, den Namen und eine kurze Beschreibung. Farbcodierungen helfen Ihnen, schnell die Kategorie jedes Statuscodes zu identifizieren: Blau für informationelle Codes, Grün für erfolgreiche, Gelb für Weiterleitungen, Rot für Client-Fehler und Lila für Server-Fehler."
        },
        step4: {
          title: "Schritt 4: Details anzeigen",
          description: "Klicken Sie auf einen beliebigen Statuscode-Eintrag, um die vollständigen Details anzuzeigen. Die erweiterte Ansicht bietet eine vollständige Beschreibung des Code-Zwecks, HTTP-Antwortbeispiele und praktische Hinweise, wann dieser Code auftritt und wie damit umzugehen ist. Diese Details helfen Ihnen, die Bedeutung jedes Statuscodes in realen Szenarien vollständig zu verstehen."
        }
      },
      common: {
        title: "Die wichtigsten HTTP-Statuscodes erklärt",
        intro: "Obwohl in verschiedenen Spezifikationen Dutzende von HTTP-Statuscodes definiert sind, treten in der Webentwicklung und Fehlerbehebung nur einige wenige regelmäßig auf. Hier finden Sie eine detaillierte Erklärung der wichtigsten Codes, die Sie kennen sollten:",
        code1: {
          title: "200 OK - Die Basis für erfolgreiche Antworten",
          description: "Der <b>200 OK-Statuscode</b> zeigt an, dass der Server die Anfrage erfolgreich verarbeitet hat. Dies ist die Standardantwort für erfolgreiche HTTP-Anfragen, insbesondere für GET-Anfragen zum Abrufen von Daten. Eine ordnungsgemäß funktionierende Website sollte für die meisten Benutzerinteraktionen 200-Antworten liefern. Wenn eine Seite jedoch 200 zurückgibt, aber dennoch falsch angezeigt wird, liegt das Problem möglicherweise im Inhalt oder Client-Code, nicht in der Serverkommunikation."
        },
        code2: {
          title: "404 Nicht gefunden - Umgang mit fehlenden Ressourcen",
          description: "Der <b>404 Nicht gefunden-Statuscode</b> erscheint, wenn die angeforderte Ressource auf dem Server nicht existiert. Dies geschieht normalerweise bei defekten Links, falsch geschriebenen URLs oder entfernten Inhalten. Aus SEO-Sicht können zu viele 404-Fehler negative Auswirkungen auf das Ranking Ihrer Website haben. Best Practices umfassen die Implementierung benutzerfreundlicher 404-Seiten mit hilfreichen Navigationsoptionen, regelmäßige Überprüfung defekter Links und die Einrichtung geeigneter 301-Weiterleitungen für dauerhaft verschobene Inhalte."
        },
        code3: {
          title: "500 Interner Serverfehler - Behebung serverseitiger Probleme",
          description: "Der <b>500 Interner Serverfehler-Statuscode</b> zeigt an, dass der Server auf eine unerwartete Situation gestoßen ist, die ihn daran hindert, die Anfrage abzuschließen. Dies ist ein generischer serverseitiger Fehler, der durch Konfigurationsfehler, Skriptfehler oder Ressourcenbeschränkungen verursacht werden kann. Bei der Fehlerbehebung von 500-Fehlern sollten Sie Serverprotokolle auf spezifische Fehlermeldungen überprüfen, kürzliche Codeänderungen überprüfen und die Serverressourcenverfügbarkeit bestätigen. Für Entwickler sind detaillierte Fehlerprotokollierung und Überwachung entscheidend, um serverseitige Probleme schnell zu lösen."
        },
        code4: {
          title: "301 vs. 302 Weiterleitungen - Strategische SEO-Überlegungen",
          description: "Der Unterschied zwischen <b>301 (Dauerhafte Weiterleitung)</b> und <b>302 (Temporäre Weiterleitung)</b> Statuscodes ist für SEO-Strategien entscheidend. 301-Weiterleitungen signalisieren Suchmaschinen, dass Inhalte dauerhaft verschoben wurden, und übertragen den größten Teil der Ranking-Stärke der ursprünglichen Seite auf die neue URL. Im Gegensatz dazu zeigen 302-Weiterleitungen eine vorübergehende Verschiebung an und übertragen nicht den gleichen SEO-Wert. Die Verwendung des falschen Weiterleitungstyps kann Ihre Sichtbarkeit in Suchmaschinen erheblich beeinträchtigen, daher ist es wichtig, den richtigen Typ basierend darauf zu wählen, ob die Inhaltsverschiebung dauerhaft oder vorübergehend ist."
        }
      },
      faq: {
        title: "Häufig gestellte Fragen zu HTTP-Statuscodes",
        q1: "Was ist der Unterschied zwischen 4xx- und 5xx-Statuscodes?",
        a1: "Der Hauptunterschied zwischen <b>4xx- und 5xx-Statuscodes</b> liegt in der Fehlerquelle. 4xx-Codes zeigen Client-Fehler an, was bedeutet, dass das Problem in der Anfrage selbst liegt. Beispiele sind der Versuch, auf nicht vorhandene Ressourcen zuzugreifen (404), ungültige Authentifizierung (401) oder fehlende Berechtigungen (403). Der Client muss die Anfrage ändern, um diese Probleme zu beheben.<br><br>Im Gegensatz dazu zeigen 5xx-Codes serverseitige Fehler an, was bedeutet, dass der Server eine gültige Anfrage nicht erfüllen konnte. Dies kann auf Serverkonfigurationsfehler, Anwendungsfehler oder Ressourcenbeschränkungen zurückzuführen sein. Zum Beispiel interne Serverfehler (500), ungültige Gateways (502) oder nicht verfügbare Dienste (503). Normalerweise ist ein serverseitiges Eingreifen erforderlich, um diese Probleme zu beheben, während der Client sie normalerweise nicht durch Änderung seiner Anfrage lösen kann.",
        
        q2: "Wie beeinflussen HTTP-Statuscodes SEO und Suchrankings?",
        a2: "<b>HTTP-Statuscodes haben erhebliche Auswirkungen auf die SEO-Leistung</b> und darauf, wie Suchmaschinen Ihre Website indexieren. Suchmaschinen-Crawler verwenden diese Codes, um zu bestimmen, wie sie mit gefundenen Seiten umgehen sollen:<br><br>• 200 (OK) zeigt an, dass Inhalte indexiert werden können<br>• 301 (Dauerhafte Weiterleitung) überträgt Ranking-Signale an die neue URL<br>• 302 (Temporäre Weiterleitung) behält das Ranking der ursprünglichen URL bei, während der Crawler der Weiterleitung folgt<br>• 404 (Nicht gefunden) kann bei zu vielen Vorkommen negative Auswirkungen auf das Ranking haben<br>• 410 (Gelöscht) weist Suchmaschinen an, Inhalte aus dem Index zu entfernen<br>• 500er-Fehler können die Indexierung verhindern und bei anhaltenden Problemen das Ranking beeinträchtigen<br>• 503 (Dienst nicht verfügbar) mit Retry-After-Header teilt Suchmaschinen mit, später zurückzukehren<br><br>Die korrekte Implementierung von Statuscodes stellt sicher, dass Suchmaschinen Ihre Website-Struktur richtig verstehen, was sich direkt auf Ihre Sichtbarkeit in Suchergebnissen und Ihr Ranking-Potenzial auswirkt.",
        
        q3: "Welchen HTTP-Statuscode sollte ich für vorübergehend nicht verfügbare Seiten verwenden?",
        a3: "Für <b>vorübergehend nicht verfügbare Seiten</b> ist der am besten geeignete Statuscode <b>503 Dienst nicht verfügbar</b>. Dieser Code zeigt speziell an, dass der Server aufgrund von Wartungsarbeiten, Überlastung oder anderen vorübergehenden Bedingungen derzeit keine Anfragen bearbeiten kann. Was 503 besonders wertvoll für vorübergehende Ausfälle macht, ist die Möglichkeit, einen Retry-After-Header einzufügen, der Clients und Suchmaschinen mitteilt, wann sie den Zugriff auf die Ressource erneut versuchen sollen.<br><br>Die Verwendung von 503 während geplanter Wartungsarbeiten oder vorübergehender Ausfälle bietet mehrere Vorteile gegenüber anderen Fehlercodes:<br><br>• Suchmaschinen entfernen Ihre Inhalte nicht aus dem Index, wie es bei anhaltenden 404- oder 500-Fehlern der Fall wäre<br>• Klare Kommunikation an Benutzeragenten, dass das Problem vorübergehend ist<br>• Hilft, Ihren SEO-Wert während Wartungsfenstern zu erhalten<br>• Der Retry-After-Header hilft, den Crawler-Traffic während Ausfallzeiten zu verwalten<br><br>Für maximale Wirkung sollten Sie 503-Antworten mit einer benutzerfreundlichen Wartungsseite kombinieren, die die Situation und die voraussichtliche Behebungszeit erklärt.",
        
        q4: "Wie gehe ich mit SEO-freundlichen Website-Migrationen und Weiterleitungen um?",
        a4: "Für <b>SEO-freundliche Website-Migrationen</b> ist die korrekte Implementierung von Weiterleitungen entscheidend, um Suchrankings und Benutzererfahrung zu erhalten. Die empfohlene Vorgehensweise umfasst folgende wichtige Schritte:<br><br>1. <b>Verwenden Sie 301-Dauerhafte Weiterleitungen</b> für alle verschobenen Inhalte, die etwa 90-99% der Ranking-Stärke an die neue URL übertragen<br>2. Implementieren Sie <b>1:1-Weiterleitungen</b> von alten URLs zu ihren direkten neuen Entsprechungen, anstatt alles auf Ihre Homepage umzuleiten<br>3. Erstellen Sie eine <b>umfassende Weiterleitungszuordnung</b>, die alle alten URLs und ihre neuen Ziele dokumentiert<br>4. Richten Sie <b>serverseitige Weiterleitungen</b> ein (über .htaccess, web.config oder Server-Konfiguration), anstatt sich auf JavaScript oder Meta-Aktualisierungen zu verlassen<br>5. <b>Bewahren Sie die URL-Struktur nach Möglichkeit</b> auf, um den Bedarf an Weiterleitungen zu minimieren<br>6. <b>Testen Sie alle Weiterleitungen</b>, um sicherzustellen, dass sie vor dem Start korrekt funktionieren und keine Weiterleitungsketten oder -schleifen erzeugen<br><br>Darüber hinaus sollten Sie diese Weiterleitungen nach der Migration mindestens ein Jahr lang beibehalten, um sicherzustellen, dass Suchmaschinen und Lesezeichen Ihre Inhalte weiterhin korrekt finden.",
        
        q5: "Was bedeutet der 304 Nicht verändert-Statuscode?",
        a5: "Der <b>304 Nicht verändert-Statuscode</b> zeigt an, dass die Ressource seit der letzten Anfrage nicht verändert wurde, basierend auf den vom Client gesendeten bedingten Headern. Dies ist eigentlich ein positiver Statuscode, der durch effizientes Caching die Web-Performance optimiert.<br><br>Wenn ein Browser bereits eine zwischengespeicherte Version einer Ressource hat, kann er eine Anfrage mit bedingten Headern wie If-Modified-Since oder If-None-Match (mit ETags) senden. Wenn der Server feststellt, dass die Ressource unverändert ist, antwortet er mit dem 304-Status anstatt die gesamte Ressource erneut zu senden. Dieser Prozess:<br><br>• Reduziert die Bandbreitennutzung für Client und Server<br>• Verbessert die Seitenladezeiten durch Verwendung zwischengespeicherter Ressourcen<br>• Verringert die Serverlast durch Vermeidung unnötiger Datenübertragungen<br>• Verbessert die Benutzererfahrung durch schnellere nachfolgende Seitenzugriffe<br><br>Sie sehen 304-Antworten häufig bei statischen Inhalten wie Bildern, CSS-, JavaScript-Dateien und gelegentlich unveränderten HTML-Inhalten. Dieser Statuscode ist ein wesentlicher Bestandteil einer effektiven Web-Caching-Strategie.",
        
        q6: "Wie debugge ich ungewöhnliche oder benutzerdefinierte HTTP-Statuscodes?",
        a6: "Das Debuggen von <b>ungewöhnlichen oder benutzerdefinierten HTTP-Statuscodes</b> erfordert einen systematischen Ansatz und spezielle Tools. Beginnen Sie mit diesen Methoden, um detailliertere Informationen zu sammeln:<br><br>1. <b>Browser-Entwicklertools verwenden</b>: Überprüfen Sie den Netzwerk-Tab, um genaue Statuscodes und Antwortheader anzuzeigen<br>2. <b>HTTP-Inspektionstools einsetzen</b> wie Postman, cURL oder spezialisierte HTTP-Debugger, die detaillierte Anfrage- und Antwortanalysen bieten<br>3. <b>Serverprotokolle überprüfen</b>, um mehr Kontext über die Generierung ungewöhnlicher Statuscodes zu erhalten<br>4. <b>Anwendungscode überprüfen</b>, der Antworten verarbeitet, insbesondere bei Frameworks, die möglicherweise benutzerdefinierte Statuscodes implementieren<br>5. <b>API-Dokumentation konsultieren</b>, wenn der Statuscode von einem Drittanbieterdienst stammt<br><br>Für nicht standardmäßige Statuscodes sollten Sie beachten:<br>• 9xx-Codes sind vollständig nicht standardisiert und für bestimmte Anwendungen reserviert<br>• Codes im Standardbereich (1xx-5xx), die nicht im offiziellen Register aufgeführt sind, stammen möglicherweise aus neueren Spezifikationen oder Anbietererweiterungen<br>• Einige Dienste verwenden Standardcodes auf nicht standardisierte Weise und erfordern dienstspezifische Dokumentation<br><br>Unser HTTP-Statuscode-Abfragetool hilft bei Standardcodes, aber für wirklich benutzerdefinierte Codes müssen Sie die spezifische Dokumentation der Anwendung oder des Dienstes konsultieren, mit dem Sie interagieren."
      },
      relatedTools: {
        title: "Entdecken Sie weitere Webentwicklungstools",
        description: "Erweitern Sie Ihren Webentwicklungsworkflow mit diesen ergänzenden Tools:",
        tool1: {
          name: "HTTP-Header-Sicherheitsprüfer",
          url: "https://www.ufreetools.com/tool/http-header-security-checker",
          description: "Analysiert und bewertet die Sicherheit von HTTP-Antwortheadern."
        },
        tool2: {
          name: "HTTP-Proxy-Detektor",
          url: "https://www.ufreetools.com/tool/http-proxy-detector",
          description: "Erkennt, ob Ihre Verbindung einen HTTP-Proxy verwendet, und analysiert Proxy-bezogene Header zur Sicherheitsüberprüfung."
        },
        tool3: {
          name: "URL-Parameter-Parser",
          url: "https://www.ufreetools.com/tool/url-params-parser",
          description: "Analysiert, interpretiert und manipuliert URL-Parameter und Abfragezeichenfolgen."
        },
        tool4: {
          name: "JSON-Formatierer und Validierer",
          url: "https://www.ufreetools.com/tool/json-formatter",
          description: "Formatiert, validiert und verschönert JSON-Daten für API-Entwicklung und Debugging."
        }
      },
      resources: {
        title: "Autoritative Ressourcen zu HTTP-Statuscodes",
        resource1: {
          name: "Mozilla Developer Network (MDN) HTTP-Statuscode-Referenz",
          url: "https://developer.mozilla.org/de/docs/Web/HTTP/Status",
          description: "Die umfassendste und aktuellste HTTP-Statuscode-Referenz mit detaillierten Erklärungen und Webstandards-Compliance-Informationen."
        },
        resource2: {
          name: "IANA HTTP-Statuscode-Register",
          url: "https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml",
          description: "Das offizielle HTTP-Statuscode-Register der Internet Assigned Numbers Authority (IANA), die maßgebliche Quelle für standardisierte Codes."
        },
        resource3: {
          name: "RFC 7231 - HTTP/1.1 Semantik: Statuscodes",
          url: "https://tools.ietf.org/html/rfc7231#section-6",
          description: "Die offizielle HTTP/1.1-Spezifikation, die die Semantik und Verwendung standardmäßiger HTTP-Statuscodes definiert."
        }
      }
    }
  }