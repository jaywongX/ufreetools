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
  }
};