export default {
    name: 'HTTP-Proxy-Detektor',
    description: 'Erkennt und analysiert HTTP-Proxys und Zwischengeräte in Verbindungen',
    title: 'Frontend-Proxy-Detektor',
    intro: 'Prüft, ob Ihre Netzwerkverbindung einen Proxy verwendet, analysiert X-Forwarded-For und andere proxy-relevante HTTP-Header',
    
    detection: {
      title: 'Proxy-Erkennung',
      start: 'Erkennung starten',
      detecting: 'Erkennung läuft...',
      stop: 'Erkennung stoppen',
      completed: 'Erkennung abgeschlossen',
      noProxies: 'Keine Proxys erkannt',
      proxiesFound: 'Erkannte Proxys: {count}'
    },
    
    options: {
      title: 'Erkennungsoptionen',
      testUrl: 'Test-URL',
      urlPlaceholder: 'URL eingeben (Standard: automatisch)',
      testMethod: 'HTTP-Methode',
      get: 'GET',
      head: 'HEAD',
      options: 'OPTIONS',
      timeout: 'Timeout (Sekunden)',
      parallel: 'Parallele Tests',
      techniques: 'Erkennungstechniken',
      headerAnalysis: 'Header-Analyse',
      traceMethod: 'TRACE-Methode',
      viaHeader: 'Via-Header-Prüfung',
      maxForwards: 'Max-Forwards-Test',
      fingerprinting: 'Proxy-Fingerprinting',
      timing: 'Zeitanalyse',
      advanced: 'Erweiterte Optionen',
      apiSelection: 'API auswählen'
    },
    
    apis: {
      ipify: 'ipify API',
      ipapi: 'IP-API',
      httpbin: 'httpbin'
    },
    
    results: {
      title: 'Erkennungsergebnisse',
      summary: 'Proxy-Zusammenfassung',
      headers: 'Vollständige Anfrageheader',
      info: 'Proxy-Informationen erklärt',
      detected: 'Proxy erkannt',
      notDetected: 'Kein Proxy erkannt',
      detectedDescription: 'Ihre Anfrage könnte über einen oder mehrere Proxy-Server geleitet worden sein',
      notDetectedDescription: 'Ihre Anfrage scheint direkt auf den Zielserver zugegriffen zu haben',
      clientInfo: 'Client-IP-Informationen',
      remoteIp: 'Remote-IP-Adresse',
      location: 'Geolocation',
      isp: 'ISP-Anbieter',
      proxyHeaders: 'Proxy-relevante Header',
      details: 'Detaillierte Ergebnisse',
      proxy: 'Proxy',
      type: 'Typ',
      ip: 'IP-Adresse',
      software: 'Software',
      confidence: 'Zuverlässigkeit',
      latency: 'Latenz',
      headers: 'Modifizierte Header',
      fingerprint: 'Fingerabdruck',
      export: 'Ergebnisse exportieren',
      clear: 'Ergebnisse löschen',
      noData: 'Keine Daten verfügbar',
      originalRequest: 'Originalanfrage',
      modifiedRequest: 'Modifizierte Anfrage',
      proxyChain: 'Proxy-Kette',
      server: 'Server',
      notSet: 'Nicht gesetzt'
    },
    
    types: {
      forward: 'Forward-Proxy',
      reverse: 'Reverse-Proxy',
      transparent: 'Transparenter Proxy',
      anonymous: 'Anonymer Proxy',
      elite: 'Elite-Proxy',
      caching: 'Cache-Proxy',
      gateway: 'Gateway',
      loadBalancer: 'Load Balancer',
      cdn: 'CDN',
      corporate: 'Unternehmens-Proxy',
      unknown: 'Unbekannter Typ'
    },
    
    headers: {
      title: 'Header-Analyse',
      original: 'Originalheader',
      modified: 'Modifizierte Header',
      added: 'Hinzugefügte Header',
      removed: 'Entfernte Header',
      changed: 'Geänderte Header',
      suspicious: 'Verdächtige Header',
      select: 'Zu analysierende Header auswählen',
      name: 'Header-Name',
      value: 'Wert',
      all: 'Alle HTTP-Anfrageheader',
      notFound: 'Dieser Header wurde nicht gefunden'
    },
    
    details: {
      title: 'Proxy-Details',
      software: 'Software',
      version: 'Version',
      features: 'Funktionen',
      modifications: 'Modifikationen',
      behavior: 'Verhalten',
      security: 'Sicherheitsauswirkungen',
      recommendations: 'Empfehlungen'
    },
    
    map: {
      title: 'Verbindungsdiagramm',
      client: 'Ihr Client',
      target: 'Zielserver',
      hop: 'Hop {n}',
      direct: 'Direkte Verbindung',
      proxied: 'Proxy-Verbindung',
      unknown: 'Unbekannter Pfad'
    },
    
    actions: {
      copyHeaders: 'Anfrageheader kopieren',
      copyToClipboard: 'In Zwischenablage kopieren'
    },
    
    messages: {
      startDetection: 'Proxy-Erkennung wird gestartet...',
      detectionComplete: 'Proxy-Erkennung abgeschlossen',
      error: 'Erkennung fehlgeschlagen: {message}',
      timeout: 'Erkennungs-Timeout',
      exportComplete: 'Ergebnisse erfolgreich exportiert',
      noConnection: 'Verbindung konnte nicht hergestellt werden',
      limitedResults: 'Ergebnisse aufgrund von Einschränkungen begrenzt',
      privateNetwork: 'Privates Netzwerk erkannt',
      publicNetwork: 'Öffentliches Netzwerk erkannt',
      warning: 'Warnung: {message}',
      proxyRemoved: 'Möglicherweise entfernt ein Proxy Erkennungsheader',
      copied: 'Anfrageheader in Zwischenablage kopiert',
      copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren',
      unknown: 'Unbekannter Fehler'
    },
    
    info: {
      description: 'HTTP-Proxys sind Zwischenserver zwischen Client und Server, die HTTP-Anfragen aus verschiedenen Gründen verarbeiten können. Proxys können von Netzwerkanbietern, Organisationen, Unternehmen oder Einzelpersonen eingerichtet werden.'
    },
    
    xff: {
      title: 'Was ist X-Forwarded-For?',
      description: 'X-Forwarded-For (XFF) ist ein HTTP-Header-Feld, das die ursprüngliche IP-Adresse eines Clients identifiziert, der über einen HTTP-Proxy oder Load Balancer mit einem Webserver verbunden ist. Wenn eine Anfrage über einen Proxy geht, sieht der Server normalerweise nur die IP-Adresse des Proxy-Servers, während der XFF-Header eine Möglichkeit bietet, die ursprüngliche Client-IP zurückzuverfolgen.',
      notFound: 'X-Forwarded-For-Header nicht gefunden, was darauf hindeutet, dass die Anfrage möglicherweise nicht über einen Proxy geleitet wurde oder der Proxy diesen Header nicht hinzugefügt hat.',
      format: {
        title: 'Format des XFF-Headers',
        description: 'Das Standardformat des XFF-Headers ist eine durch Kommas getrennte Liste von IP-Adressen, wobei die linkeste IP der ursprüngliche Client ist und nachfolgende IPs die durchlaufenen Proxy-Server:'
      },
      related: {
        title: 'Andere proxy-relevante Header',
        forwardedProto: 'Identifiziert das Protokoll (HTTP oder HTTPS), das der Client für die Verbindung zum Proxy verwendet hat',
        forwardedHost: 'Identifiziert den ursprünglichen Hostnamen, den der Client angefordert hat',
        via: 'Zeigt die Proxy-Server an, die die Anfrage und Antwort durchlaufen haben',
        forwarded: 'Neuerer Standard-Header, der Client- und alle Proxy-Informationen enthält'
      },
      importance: {
        title: 'Warum Proxy-Informationen wichtig sind',
        security: 'Sicherheit und Zugriffskontrolle - Die genaue Identifizierung der Client-IP ist wichtig, um Missbrauch zu verhindern und IP-basierte Zugriffskontrollen durchzusetzen',
        logging: 'Protokollierung - Für Audits und Problemdiagnose ist die Protokollierung der echten Client-IP nützlicher als die Proxy-IP',
        geolocation: 'Geolokalisierungsdienste - IP-basierte Geolokalisierungsdienste benötigen die echte Client-IP für genaue Ergebnisse',
        content: 'Inhaltsanpassung - Einige Dienste bieten lokalisierte Inhalte basierend auf dem Benutzerstandort'
      },
      security: {
        title: 'Sicherheitsüberlegungen',
        description: 'Es ist wichtig zu beachten, dass der X-Forwarded-For-Header von Clients gefälscht werden kann. In Umgebungen mit hohen Sicherheitsanforderungen sollten nur XFF-Informationen vertraut werden, die von bekannten Proxy-Servern hinzugefügt wurden, oder andere Methoden zur Überprüfung der Client-IP verwendet werden.'
      }
    },
    
    privacy: {
      title: 'Datenschutzhinweis',
      description: 'Während der Erkennung werden Ihre IP-Adresse und HTTP-Header-Informationen zur Analyse an Drittanbieter-API-Dienste gesendet. Diese Dienste können diese Informationen sammeln und speichern, um den Dienst bereitzustellen.',
      suggestion: 'Bei Datenschutzbedenken wählen Sie einen anderen API-Anbieter oder erwägen Sie die Verwendung eines VPN-Dienstes.'
    },
    
    article: {
      title: "HTTP-Proxy-Detektor - Netzwerk-Proxys identifizieren und analysieren",
      intro: {
        title: "Was ist HTTP-Proxy-Erkennung?",
        p1: "<b>HTTP-Proxy-Erkennung</b> ist der Prozess der Bestimmung, ob Ihre Internetverbindung über einen oder mehrere Zwischenserver, sogenannte Proxys, geleitet wird. Unser HTTP-Proxy-Detektor analysiert Ihre Netzwerkanfragen durch Überprüfung von HTTP-Headern (wie X-Forwarded-For, Via und anderen Indikatoren), um die Anwesenheit von Proxys in Ihrem Verbindungspfad zu identifizieren.",
        p2: "Proxys sind Zwischenserver zwischen Ihrem Gerät und den Websites, die Sie besuchen. Sie können für verschiedene legitime Zwecke verwendet werden, wie z.B. zur Leistungssteigerung durch Caching, zur Durchsetzung von Zugriffskontrollen oder zur Bereitstellung von Anonymität. Die Verwendung von Proxys ohne Ihr Wissen oder Ihre Zustimmung kann jedoch auch Sicherheitsrisiken bergen. Unser <b>Proxy-Erkennungstool</b> hilft Ihnen, versteckte Proxys in Ihrem Netzwerk zu identifizieren, das Sicherheitsbewusstsein zu erhöhen und bei der Fehlerbehebung zu unterstützen.",
        p3: "Wenn Sie sich über einen <b>HTTP-Proxy-Server</b> verbinden, können bestimmte Informationen über Ihre Browseraktivitäten für den Proxy-Betreiber sichtbar sein. Dieses Online-Proxy-Erkennungstool gibt Ihnen Aufschluss darüber, ob Ihre Verbindung direkt ist oder über eine oder mehrere Proxy-Ebenen verläuft, und gibt Ihnen so mehr Kontrolle über Ihre Online-Privatsphäre und Sicherheit."
      },
      useCases: {
        title: "Praktische Anwendungen der Proxy-Erkennung",
        case1: "<b>Netzwerk-Fehlerbehebung</b>: Bei Verbindungsproblemen kann die Proxy-Erkennung helfen festzustellen, ob Zwischenserver die Ursache sind. IT-Profis müssen häufig Proxy-Konfigurationen überprüfen, um Netzwerkprobleme zu diagnostizieren.",
        case2: "<b>Sicherheitsüberprüfung</b>: Sicherstellen, dass Ihr privater Browserverkehr nicht über nicht autorisierte Proxy-Server geleitet wird, die Ihren Datenverkehr möglicherweise überwachen oder verändern. Organisationen können die Proxy-Erkennung nutzen, um zu überprüfen, ob die Unternehmenssicherheitsrichtlinien korrekt implementiert sind.",
        case3: "<b>Webentwickler</b>: Webentwickler müssen verstehen, wie ihre Inhalte an Benutzer geliefert werden, insbesondere wenn Content Delivery Networks (CDNs) oder Load Balancer als Proxys fungieren. Das Testen der korrekten Header-Verarbeitung ist für Sicherheit und Analysen entscheidend.",
        case4: "<b>Geobeschränkungsüberprüfung</b>: Überprüfen Sie, ob Ihr VPN- oder Proxy-Dienst Ihren Standort korrekt verschleiert, um auf regional eingeschränkte Inhalte zuzugreifen. Unser Tool hilft bei der Überprüfung, ob Geoumgehungsmaßnahmen ordnungsgemäß funktionieren.",
        case5: "<b>Unternehmensumgebungsprüfung</b>: Für Mitarbeiter in Unternehmensumgebungen: Überprüfen Sie das Vorhandensein und die Konfiguration von Unternehmensproxys, die Ihren Internetzugriff oder die Funktionalität von Anwendungen beeinflussen können. Dies ist besonders wichtig bei der Fehlerbehebung von Anwendungsverbindungsproblemen."
      },
      tutorial: {
        title: "So erkennen Sie HTTP-Proxys in Ihrer Verbindung",
        intro: "Befolgen Sie diese Schritt-für-Schritt-Anleitung, um unseren HTTP-Proxy-Detektor effektiv zu nutzen und Ihre Netzwerkkonfiguration zu verstehen:",
        step1: {
          title: "Schritt 1: Erkennungsprozess starten",
          description: "Klicken Sie auf die Schaltfläche <b>\"Erkennung starten\"</b> in der Tool-Oberfläche, um zu beginnen. Der Detektor beginnt sofort mit der Analyse Ihrer Verbindung, indem er Anfragen an spezielle API-Endpunkte sendet. Standardmäßig wählt das Tool automatisch die zuverlässigste Erkennungsmethode aus, aber Sie können über das Dropdown-Menü eine andere API für umfassendere Tests auswählen."
        },
        step2: {
          title: "Schritt 2: Zusammenfassungsergebnisse anzeigen",
          description: "Nach Abschluss der Erkennung zeigt die Registerkarte <b>\"Proxy-Zusammenfassung\"</b> an, ob in Ihrer Verbindung Proxys erkannt wurden. Suchen Sie nach dem grünen Häkchen für eine direkte Verbindung oder dem gelben Warnsymbol, das auf erkannte Proxys hinweist. Die Zusammenfassung zeigt auch Ihre erkannte IP-Adresse und Standortinformationen an, was helfen kann, zu überprüfen, ob Ihr tatsächlicher Standort verschleiert wird."
        },
        step3: {
          title: "Schritt 3: Proxy-Header detailliert prüfen",
          description: "Klicken Sie auf die Registerkarte <b>\"Vollständige Anfrageheader\"</b>, um alle HTTP-Header in Ihrer Anfrage anzuzeigen. Achten Sie besonders auf Header wie X-Forwarded-For, Via und Forwarded, die auf die Verwendung von Proxys hinweisen. Der X-Forwarded-For-Header ist besonders wichtig, da er eine Liste von IP-Adressen enthält, die den Pfad Ihrer Anfrage durch verschiedene Proxys zeigt. Sie können die Schaltfläche am unteren Rand dieses Abschnitts verwenden, um alle Header zur weiteren Analyse in die Zwischenablage zu kopieren."
        },
        step4: {
          title: "Schritt 4: Proxy-Informationen verstehen",
          description: "Für ein tieferes Verständnis der Bedeutung der erkannten Header besuchen Sie die Registerkarte <b>\"Proxy-Informationen erklärt\"</b>. Dieser Abschnitt erläutert den Zweck der verschiedenen proxy-relevanten Header und ihre Auswirkungen auf die Verbindungssicherheit. Nutzen Sie dieses Wissen, um festzustellen, ob die erkannten Proxys erwartet werden (wie Ihr Unternehmensnetzwerk-Proxy) oder potenziell unerwünschte Mittelsmänner sind."
        }
      },
      techniques: {
        title: "HTTP-Proxy-Erkennungstechniken verstehen",
        intro: "Unser Tool verwendet mehrere Methoden, um Proxys in Netzwerkverbindungen genau zu erkennen. Hier ist ein Überblick über die wichtigsten verwendeten Techniken:",
        method1: {
          title: "Header-Analyse",
          description: "Die häufigste Erkennungsmethode ist die Überprüfung von HTTP-Headern, die normalerweise von Proxy-Servern hinzugefügt werden, wie X-Forwarded-For, Via und Forwarded. Diese Header enthalten oft Informationen über die ursprüngliche Client-IP-Adresse und die Proxy-Kette."
        },
        method2: {
          title: "IP-Vergleich",
          description: "Unser Tool vergleicht die IP-Adresse, die der Server sieht, mit der erwarteten Client-IP. Unterschiede zwischen diesen IPs deuten oft auf einen Proxy hin. Diese Methode ist besonders nützlich für die Erkennung transparenter Proxys."
        },
        method3: {
          title: "Antwortzeitanalyse",
          description: "Durch Analyse der Antwortzeiten können wir manchmal Proxys erkennen, da sie normalerweise die Latenz von Netzwerkanfragen erhöhen. Cache-Proxys können inkonsistente Zeitmuster zeigen, je nachdem, ob Inhalte zwischengespeichert sind oder nicht."
        },
        method4: {
          title: "Serverseitige Erkennung",
          description: "Unsere API führt serverseitige Prüfungen durch, die bestimmte Proxy-Typen anhand von Port-Scans, bekannten Proxy-IP-Datenbanken und Verhaltensmustern in HTTP-Anfragen identifizieren können."
        }
      },
      faq: {
        title: "Häufig gestellte Fragen zur HTTP-Proxy-Erkennung",
        q1: "Warum sollte ich prüfen, ob meine Verbindung einen Proxy verwendet?",
        a1: "Die Überprüfung auf Proxys ist aus mehreren Gründen wichtig: <b>Sicherheitsbewusstsein</b> (zu wissen, ob Ihr Datenverkehr überwacht wird), <b>Datenschutzbedenken</b> (zu wissen, wer möglicherweise auf Ihre Browserdaten zugreifen kann), <b>Netzwerk-Fehlerbehebung</b> (Feststellen, ob Proxys Verbindungsprobleme verursachen) und <b>VPN-Funktionsüberprüfung</b> (Sicherstellen, dass Ihre Datenschutztools ordnungsgemäß funktionieren). Regelmäßige Proxy-Erkennung hilft, das Bewusstsein für Ihren Netzwerksicherheitsstatus zu erhalten.",
        
        q2: "Kann das HTTP-Proxy-Erkennungstool alle Proxy-Typen identifizieren?",
        a2: "Während unser HTTP-Proxy-Detektor durch Header-Analyse Standard-Proxys effektiv erkennt, können einige fortgeschrittene Proxy-Typen schwerer zu erkennen sein. <b>Transparente Proxys</b>, die Header nicht verändern, können manchmal durch IP-Unterschiede erkannt werden. <b>Anonyme Proxys</b>, die ihre Anwesenheit verbergen sollen, können durch Zeitanalyse oder serverseitige Techniken erkannt werden. Speziell entwickelte <b>Elite-Proxys</b>, die die Erkennung vermeiden sollen, können jedoch möglicherweise nicht durch Client-Tools erkannt werden. Für umfassendere Erkennung empfehlen wir die Verwendung mehrerer API-Optionen in unserem Tool.",
        
        q3: "Ist die Verwendung von Proxys illegal oder schädlich für meinen Computer?",
        a3: "In den meisten Ländern ist die Verwendung von Proxys generell legal und nicht schädlich für Ihren Computer. Proxys haben viele legitime Anwendungen, einschließlich der <b>Verbesserung der Internetleistung</b> durch Caching, <b>Erhöhung der Privatsphäre</b> durch Verschleierung Ihrer IP-Adresse, <b>Zugriff auf regional eingeschränkte Inhalte</b> und <b>Durchsetzung von Sicherheitsrichtlinien</b> in Unternehmensumgebungen. Die Legalität hängt jedoch davon ab, wie der Proxy verwendet wird - die Umgehung von Urheberrechtsbeschränkungen oder die Verletzung von Nutzungsbedingungen über einen Proxy könnte problematisch sein. Stellen Sie sicher, dass Sie Proxys in Übereinstimmung mit den lokalen Gesetzen und Nutzungsbedingungen verwenden.",
        
        q4: "Was ist der Unterschied zwischen einem Proxy und einem VPN?",
        a4: "Während sowohl Proxys als auch VPNs Ihren Datenverkehr über einen Zwischenserver leiten, unterscheiden sie sich in mehreren wichtigen Aspekten: <b>VPNs verschlüsseln den gesamten Datenverkehr</b> (zwischen Ihrem Gerät und dem VPN-Server), während die meisten Proxys keine Verschlüsselung bieten. VPNs leiten normalerweise <b>den gesamten Internetverkehr Ihres Geräts</b>, während Proxys typischerweise nur bestimmte Anwendungen oder Protokolle verarbeiten. Im Vergleich zu Standard-Proxys bieten VPNs normalerweise <b>besseren Datenschutz</b> und Sicherheitsfunktionen. Da beide Technologien Ihren Verbindungspfad ändern, könnte unser Proxy-Detektor Ihre VPN-Verbindung als Proxy erkennen.",
        
        q5: "Warum verwendet mein Unternehmen Proxy-Server und sollte ich besorgt sein?",
        a5: "Unternehmen setzen Proxy-Server aus mehreren legitimen Gründen ein: <b>Content-Filterung</b> (Einschränkung des Zugriffs auf bestimmte Websites), <b>Bandbreitenoptimierung</b> (Caching häufig aufgerufener Inhalte), <b>erhöhte Sicherheit</b> (Scannen auf Malware oder Schwachstellen), <b>Überwachung der Mitarbeiteraktivitäten</b> (Sicherstellen der Einhaltung der Nutzungsrichtlinien) und <b>Bereitstellung von Remote-Zugriff</b> auf interne Ressourcen. Während Unternehmensproxys normalerweise kein Datenschutzproblem darstellen, ist es wichtig zu bedenken, dass Ihre Online-Aktivitäten im Unternehmensnetzwerk möglicherweise überwacht werden. Wenn unser Proxy-Detektor einen Unternehmensproxy erkennt, ist dies in einer Unternehmensumgebung normalerweise ein normaler Zustand.",
        
        q6: "Wie verhalten sich Content Delivery Networks (CDNs) zu Proxys?",
        a6: "Content Delivery Networks (CDNs) funktionieren ähnlich wie <b>Reverse-Proxys</b> und können von unserem Tool erkannt werden. CDNs verteilen Website-Inhalte über ein globales Server-Netzwerk, um Ladezeiten und Zuverlässigkeit zu verbessern. Wenn Sie über ein CDN auf eine Website zugreifen, wird Ihre Anfrage normalerweise zum nächstgelegenen CDN-Server und nicht zum Ursprungsserver geroutet. Dies erscheint in Ihrer Verbindung als Proxy, da der CDN-Server als Vermittler fungiert. Im Gegensatz zu herkömmlichen Proxys, die aus Datenschutzgründen besorgniserregend sein können, werden CDNs von Website-Betreibern eingesetzt, um die Benutzererfahrung zu verbessern, und sind ein normaler Bestandteil der modernen Webinfrastruktur."
      },
      relatedTools: {
        title: "Verwandte Netzwerkanalyse-Tools",
        description: "Entdecken Sie diese zusätzlichen Tools für weitere Einblicke in Ihre Netzwerkkonfiguration und Sicherheit:",
        tool1: {
          name: "HTTP-Header-Sicherheitsprüfer",
          url: "https://www.ufreetools.com/tool/http-header-security-checker",
          description: "Analysiert die HTTP-Antwortheader einer Website, prüft Sicherheitskonfigurationen wie CSP und HSTS und gibt Verbesserungsvorschläge"
        },
        tool2: {
          name: "Anfrageheader-Editor",
          url: "https://www.ufreetools.com/tool/request-header-editor",
          description: "Erstellt, bearbeitet und testet HTTP-Anfrageheader"
        },
        tool3: {
          name: "HTTP-Statuscode-Nachschlagewerk",
          url: "https://www.ufreetools.com/tool/http-status-code-lookup",
          description: "Ermittelt und erklärt HTTP-Antwortstatuscodes und -meldungen"
        },
        tool4: {
          name: "URL-Parameter-Parser",
          url: "https://www.ufreetools.com/tool/url-params-parser",
          description: "Analysiert, interpretiert und manipuliert URL-Parameter und Abfragezeichenfolgen"
        }
      },
      resources: {
        title: "Mehr über Proxys und Netzwerksicherheit erfahren",
        resource1: {
          name: "OWASP-Testleitfaden",
          url: "https://owasp.org/www-project-web-security-testing-guide/assets/archive/OWASP_Testing_Guide_v4.pdf",
          description: "OWASP ist eine globale, freie und offene Community, die sich auf die Verbesserung der Sicherheit von Anwendungssoftware konzentriert."
        },
        resource2: {
          name: "HTTP-Header - MDN-Webdokumentation",
          url: "https://developer.mozilla.org/de/docs/Web/HTTP/Headers",
          description: "Ausführliche Mozilla-Entwicklerdokumentation über HTTP-Header, einschließlich proxy- und weiterleitungsrelevanter Inhalte."
        },
        resource3: {
          name: "Internet Engineering Task Force (IETF) - HTTP Forwarded-Header",
          url: "https://tools.ietf.org/html/rfc7239",
          description: "Offizielles RFC 7239-Dokument, das den Forwarded-HTTP-Header definiert, der Proxy-Informationen standardisiert."
        }
      }
    }
  }