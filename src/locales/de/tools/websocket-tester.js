export default {
    name: 'WebSocket-Tester',
    description: 'Verbinden Sie sich mit WebSocket-Servern, senden Sie Nachrichten und sehen Sie die Antworten',
    
    // Verbindungseinstellungen
    connection: {
      url: 'WebSocket-URL',
      urlPlaceholder: 'z.B.: ws://echo.websocket.org',
      protocol: 'Subprotokoll (optional)',
      protocolPlaceholder: 'Kommagetrennt',
      connect: 'Verbinden',
      disconnect: 'Trennen',
      status: 'Verbindungsstatus',
      connected: 'Verbunden',
      disconnected: 'Getrennt',
      waiting: 'Warte auf Verbindung',
      autoReconnect: 'Automatische Wiederverbindung',
      reconnectMessage: 'Versuche erneut in {0} Sekunden...'
    },
  
    // Optionen
    options: {
      title: 'Optionen',
      autoScroll: 'Log automatisch scrollen'
    },
  
    // Nachrichtenbereich
    messages: {
      send: 'Nachricht senden',
      logs: 'Nachrichtenprotokoll',
      emptyLogs: 'Nachrichten nach der Verbindung werden hier angezeigt',
      placeholder: 'Nachricht eingeben...',
      sendButton: 'Senden',
      clearButton: 'Leeren',
      copyButton: 'Kopieren',
      clearLogs: 'Protokoll leeren',
      copyLogs: 'Protokoll kopieren',
      format: {
        title: 'Format',
        text: 'Text',
        json: 'JSON',
        binary: 'Binär'
      },
      templates: {
        json: 'JSON',
        text: 'Text'
      },
      types: {
        sent: 'Gesendet →',
        received: 'Empfangen ←',
        error: 'Fehler !',
        info: 'Info'
      }
    },
  
    // Gespeicherte Verbindungen
    savedConnections: {
      title: 'Gespeicherte Verbindungen',
      empty: 'Keine gespeicherten Verbindungen',
      save: 'Aktuelle Verbindung speichern',
      saveConnection: 'Verbindung speichern',
      connectionName: 'Verbindungsname',
      load: 'Laden',
      delete: 'Löschen',
      cancel: 'Abbrechen'
    },
  
    // Testserver
    testServers: {
      title: 'Testserver',
      description: 'Öffentliche WebSocket-Server zum Testen:',
      useServer: 'Diesen Server verwenden',
      servers: {
        echo: {
          name: 'Echo-Test',
          description: 'Sicherer Echo-Testserver mit WSS-Unterstützung'
        },
        postman: {
          name: 'WebSocket.org',
          description: 'Echo-Service von Postman mit WSS'
        }
      }
    },
  
    // Logmeldungen
    logs: {
      connectingTo: 'Verbinde mit {0}...',
      connectionSuccess: 'Verbindung erfolgreich',
      connectionError: 'WebSocket-Fehler',
      connectionClosed: 'Verbindung geschlossen (Code: {0}{1})',
      invalidJson: 'Ungültiges JSON: {0}',
      sendFailed: 'Senden fehlgeschlagen: {0}',
      emptyMessage: 'Nachricht darf nicht leer sein',
      notConnected: 'Nicht verbunden',
      copied: 'Protokoll kopiert',
      copyFailed: 'Kopieren fehlgeschlagen: {0}',
      serverSelected: 'Server ausgewählt: {0}',
      binaryData: '[Binärdaten]'
    },
  
    // Artikelinhalt
    article: {
      title: "WebSocket-Tester: Echtzeit-Kommunikation testen",
      features: {
        title: "WebSocket-Technologie verstehen",
        description: "Der <strong>WebSocket-Tester</strong> ist ein umfassendes Tool zum Testen und Debuggen von Echtzeit-Kommunikation zwischen Clients und Servern über das WebSocket-Protokoll. Im Gegensatz zu traditionellen HTTP-Verbindungen, die für jede Interaktion eine neue Anfrage benötigen, bietet WebSocket einen persistenten, bidirektionalen Kommunikationskanal, der so lange bestehen bleibt, bis eine Seite die Verbindung explizit schließt.<br><br>Dieser <strong>WebSocket-Client</strong> ermöglicht Entwicklern, Verbindungen zu WebSocket-Servern herzustellen, Nachrichten in verschiedenen Formaten (Text, JSON oder Binär) zu senden und Antworten in Echtzeit zu analysieren. Mit Funktionen wie Verbindungsmanagement, Nachrichtenprotokollierung und Formatvalidierung bietet dieser <strong>Echtzeit-Kommunikationstester</strong> alles, was für die Entwicklung und Fehlersuche von WebSocket-Implementierungen benötigt wird.",
        useCases: {
          title: "Praktische Anwendungsfälle",
          items: [
            "<strong>API-Entwicklung</strong>: Beim Erstellen von WebSocket-basierten APIs erlaubt der <strong>WebSocket-Debugger</strong> das Verbinden mit Entwicklungsservern, Senden von Testnachrichten und Validieren der Serverantworten. Diese interaktive Testmethode hilft, Probleme früh im Entwicklungszyklus zu identifizieren.",
            
            "<strong>Echtzeit-Anwendungen</strong>: Für Anwendungen mit <strong>Echtzeit-Datenströmen</strong> wie Chat-Systeme, Live-Dashboards oder Kollaborationsplattformen kann dieses Tool Client-Verbindungen simulieren und Nachrichtenübermittlung, Event-Broadcasting und Status-Synchronisation testen.",
            
            "<strong>IoT-Kommunikation</strong>: IoT-Geräte nutzen oft WebSocket für <strong>persistente Verbindungen</strong> zu zentralen Servern. Der Tester kann IoT-Kommunikationsmuster simulieren, um Geräteregistrierung, Befehlsübertragung und Telemetrie zu testen.",
            
            "<strong>Multiplayer-Spiele</strong>: Online-Spiele verwenden WebSocket für <strong>Echtzeit-Spielerinteraktionen</strong>. Entwickler können Serverantworten auf Spieleraktionen testen und Spielstatussynchronisation validieren.",
            
            "<strong>Finanzdaten</strong>: Handelsplattformen nutzen WebSocket für <strong>Echtzeit-Marktdaten</strong>. Der Tester ermöglicht das Validieren von Datenstrom-Abonnements und Testen der Verarbeitung zeitkritischer Finanzinformationen.",
            
            "<strong>Produktionsprobleme</strong>: Bei Verbindungsproblemen in Produktionsumgebungen können Support-Techniker mit dem <strong>WebSocket-Verbindungstester</strong> Benutzerszenarien nachstellen und Serververfügbarkeit prüfen."
          ]
        }
      },
      faq: {
        title: "Häufige Fragen",
        items: [
          {
            question: "Was ist der Unterschied zwischen WebSocket und HTTP?",
            answer: "WebSocket und HTTP dienen unterschiedlichen Kommunikationsanforderungen. HTTP ist ein Anfrage-Antwort-Protokoll, das für jede Interaktion eine neue Verbindung benötigt. WebSocket hingegen etabliert eine <strong>persistente Verbindung</strong>, die nach dem initialen Handshake (über HTTP) auf das WebSocket-Protokoll upgegradet wird. Diese <strong>vollduplex Kommunikation</strong> ermöglicht echte Echtzeitanwendungen mit geringerer Latenz und Bandbreitennutzung im Vergleich zu HTTP-Polling-Methoden."
          },
          {
            question: "Warum trennt sich meine WebSocket-Verbindung nach Inaktivität?",
            answer: "WebSocket-Verbindungen können aus mehreren Gründen bei Inaktivität getrennt werden:<br><br>• <strong>Proxy-Timeout</strong>: Unternehmensproxys oder Netzwerk-Gateways schließen oft inaktive Verbindungen<br>• <strong>Firewall-Einstellungen</strong>: Netzwerkfirewalls können Sitzungstimeouts haben<br>• <strong>Server-Timeout</strong>: WebSocket-Server implementieren oft eigene Inaktivitäts-Timeouts<br><br>Um Verbindungen aufrechtzuerhalten, implementieren Sie einen <strong>Heartbeat-Mechanismus</strong>, der regelmäßig kleine Ping/Pong-Nachrichten austauscht. Unser Tester bietet automatische Wiederverbindung, um Verbindungsresilienz zu testen."
          },
          {
            question: "Kann ich sichere Verbindungen (WSS) testen?",
            answer: "Ja, der <strong>WebSocket-Tester</strong> unterstützt vollständig sichere WebSocket-Verbindungen (WSS), die über TLS/SSL laufen. Bei Verbindung zu WSS-Endpunkten (URLs beginnend mit 'wss://') behandelt das Tool automatisch den TLS-Handshake und Zertifikatsvalidierungsprozess.<br><br>Sichere WebSockets sind essentiell für:<br><br>• Schutz sensibler Daten<br>• Erfüllung von Compliance-Anforderungen<br>• Verbindung zu HTTPS-Domains (wegen Browser-Beschränkungen für gemischte Inhalte)<br>• Verhinderung von Man-in-the-Middle-Angriffen"
          },
          {
            question: "Wie formatiere ich JSON-Nachrichten korrekt?",
            answer: "Richtige JSON-Formatierung ist entscheidend für erfolgreiche WebSocket-Kommunikation:<br><br>1. <strong>Valide JSON-Syntax</strong>: Stellen Sie korrekte Formatierung sicher (Anführungszeichen für Schlüssel, korrekte Datentypen)<br>2. <strong>Nachrichtenstruktur</strong>: Typische Struktur enthält:<br>• Nachrichtentyp/Aktionsfeld (z.B. \"type\": \"subscribe\")<br>• Daten-Payload<br>• Optionale Metadaten wie Nachrichten-ID<br><br>Beispiel:<br><pre>&#123;<br>  \"type\": \"subscribe\",<br>  \"channel\": \"market_data\",<br>  \"symbols\": [\"BTC/USD\", \"ETH/USD\"],<br>  \"requestId\": \"12345\"<br>&#125;</pre><br><br>3. <strong>Sonderzeichen escapen</strong>: Anführungszeichen und Backslashes in Strings korrekt escapen<br>4. <strong>Datentypen</strong>: Zahlen ohne Anführungszeichen, Booleans als true/false, Arrays in eckigen Klammern"
          },
          {
            question: "Wie speichere ich Verbindungen für wiederholte Tests?",
            answer: "Der <strong>WebSocket-Tester</strong> bietet mehrere Funktionen zum Speichern und Wiederverwenden von Verbindungskonfigurationen:<br><br>1. <strong>Verbindungsmanagement</strong>: Speichern Sie WebSocket-Verbindungen mit benutzerdefinierten Namen<br>2. <strong>Schnellverbindung</strong>: Gespeicherte Verbindungen können mit einem Klick geladen werden<br>3. <strong>Persistenter Speicher</strong>: Verbindungen bleiben über Browser-Sitzungen hinweg verfügbar<br>4. <strong>Nachrichtenvorlagen</strong>: Verwenden Sie JSON- und Textvorlagen für häufige Nachrichtenmuster<br>5. <strong>Testserver</strong>: Integrierte öffentliche Echo-Server für schnelle Tests<br><br>Dieses <strong>Verbindungsverwaltungssystem</strong> ist besonders wertvoll für Entwickler, die mit mehreren WebSocket-Endpunkten in verschiedenen Umgebungen (Entwicklung, Staging, Produktion) arbeiten."
          }
        ]
      },
      guide: {
        title: "Schritt-für-Schritt-Anleitung",
        steps: [
          "<strong>WebSocket-URL eingeben</strong>: Geben Sie die Serveradresse im URL-Feld ein. WebSocket-URLs beginnen mit 'ws://' für Standard- oder 'wss://' für sichere Verbindungen. Für schnelle Tests können Sie einen der vordefinierten Testserver auswählen.",
          "<strong>Verbindungsoptionen konfigurieren</strong>: Falls Ihr Server spezifische Subprotokolle benötigt, geben Sie diese kommagetrennt ein. Aktivieren Sie 'Automatische Wiederverbindung' für automatische Reconnect-Versuche bei unerwarteten Trennungen.",
          "<strong>Verbindung herstellen</strong>: Klicken Sie auf 'Verbinden', um die WebSocket-Verbindung zu initiieren. Der Verbindungsstatus zeigt 'Verbinde...' während des Handshakes und wechselt zu 'Verbunden' bei Erfolg.",
          "<strong>Nachricht vorbereiten</strong>: Nach erfolgreicher Verbindung können Sie im 'Nachricht senden'-Bereich Ihre Nachricht eingeben. Wählen Sie das passende Format (Text, JSON oder Binär) aus dem Dropdown-Menü.",
          "<strong>Nachrichten senden und überwachen</strong>: Klicken Sie auf 'Senden', um Ihre Nachricht zu übertragen. Gesendete und empfangene Nachrichten werden im Nachrichtenprotokoll mit Zeitstempel und Richtungskennzeichnung angezeigt.",
          "<strong>Verbindung speichern</strong>: Für häufig genutzte Endpunkte klicken Sie auf 'Aktuelle Verbindung speichern', um die Konfiguration unter einem benutzerdefinierten Namen zu speichern.",
          "<strong>Kommunikationsmuster analysieren</strong>: Nutzen Sie das chronologische Nachrichtenprotokoll, um Nachrichtenreihenfolge und -timing zwischen Client und Server zu analysieren. Das gesamte Protokoll kann zur Fehleranalyse kopiert werden."
        ]
      },
      conclusion: "Der WebSocket-Tester ist ein unverzichtbares Werkzeug für Entwickler von Echtzeitanwendungen, das effizientes Testen und Debuggen von WebSocket-Verbindungen ohne benutzerdefinierte Client-Implementierung ermöglicht. Durch die Bereitstellung einer visuellen Oberfläche zum Herstellen von Verbindungen, Senden von Nachrichten in verschiedenen Formaten und Überwachen der bidirektionalen Kommunikation beschleunigt es den Entwicklungsprozess für WebSocket-basierte Anwendungen erheblich. Ob Sie Chat-Systeme, Live-Dashboards, IoT-Plattformen oder Multiplayer-Spiele entwickeln - dieser Tester bietet die Funktionalität, die benötigt wird, um zuverlässige Echtzeitkommunikation über verschiedene Netzwerkbedingungen und Client-Plattformen hinweg sicherzustellen."
    }
  }