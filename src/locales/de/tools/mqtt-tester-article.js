export default {
  title: "MQTT Test Tool - Umfassender Leitfaden zum Testen des IoT-Nachrichtenprotokolls",
  intro: {
    title: "Was ist ein MQTT Test Tool und warum wird es benötigt?",
    p1: "<b>MQTT (Message Queuing Telemetry Transport)</b> ist ein leichtgewichtiges Nachrichtenprotokoll, das für eingeschränkte Geräte und Netzwerke mit geringer Bandbreite und hoher Latenz entwickelt wurde, was es ideal für IoT-Anwendungen macht. Unser MQTT Test Tool bietet eine umfassende Umgebung zum Testen, Debuggen und Optimieren von MQTT-Verbindungen, mit der Entwickler ihre IoT-Kommunikationsinfrastruktur effizient und zuverlässig validieren können.",
    p2: "<b>MQTT-Protokoll-Testtools</b> bilden eine wichtige Brücke zwischen der IoT-Geräteentwicklung und der Bereitstellung, indem sie es ermöglichen, gleichzeitig Publisher und Subscriber im MQTT-Ökosystem zu simulieren. Durch die Implementierung von Echtzeit-Nachrichtenpublikation, Topic-Abonnements und Verbindungsdiagnosen hilft unser Tool, potenzielle Probleme zu identifizieren, bevor sie die Produktionsumgebung beeinflussen. Dieser proaktive Ansatz reduziert die Debugging-Zeit erheblich und erhöht die Zuverlässigkeit von IoT-Anwendungen.",
    p3: "Mit unserem <b>Online-MQTT-Client</b> können Sie eine Verbindung zu jedem MQTT-Broker herstellen, verschiedene QoS-Level (Quality of Service) testen, Last-Will-Nachrichten (LWT) implementieren und Retained Messages validieren. Egal, ob Sie ein Smart-Home-System, eine industrielle Überwachungslösung oder eine beliebige IoT-Anwendung entwickeln - unser MQTT Test Tool bietet alle Funktionen, die Sie benötigen, um sicherzustellen, dass Ihre Nachrichteninfrastruktur unter verschiedenen Netzwerkbedingungen und Nutzungsszenarien einwandfrei funktioniert."
  },
  useCases: {
    title: "Praktische Anwendungsfälle für MQTT-Tests",
    case1: "<b>IoT-Geräteentwicklung und Debugging</b>: Hardware-Ingenieure und Firmware-Entwickler verwenden MQTT-Testtools, um die Gerätekommunikation zu validieren, bevor Designs fertiggestellt werden. Bei der Entwicklung neuer IoT-Produkte hilft die Fähigkeit, Nachrichtenpublikationsmuster, Payload-Formate und Abonnementantworten zu überprüfen, Kommunikationsprobleme früh im Entwicklungszyklus zu identifizieren und zu beheben, was die Time-to-Market erheblich verkürzt.",
    case2: "<b>Smart-Home-Automatisierungsintegration</b>: Entwickler, die Smart-Home-Systeme erstellen, verlassen sich auf MQTT-Tests, um eine zuverlässige Kommunikation zwischen verschiedenen Geräten wie Thermostaten, Beleuchtungssystemen und Sicherheitssensoren sicherzustellen. Unser MQTT Test Tool validiert Automatisierungsregeln, indem es Trigger simuliert und Geräteantworten analysiert, um sicherzustellen, dass Ihr Smart-Home-Ökosystem nahtlos funktioniert.",
    case3: "<b>Industrielle Überwachungssysteme</b>: In industriellen IoT-Umgebungen helfen MQTT-Tests zu validieren, ob Sensordaten korrekt übertragen, verarbeitet und beantwortet werden. Systemintegratoren verwenden unser Tool, um Sensorwerte zu simulieren, Alarmschwellen zu testen und die angemessenen Reaktionen der Steuerungssysteme auf verschiedene Betriebsszenarien zu überprüfen, was die Zuverlässigkeit in der Fabrikhalle erhöht.",
    case4: "<b>MQTT-Broker-Konfiguration und -Optimierung</b>: Systemadministratoren verwenden MQTT-Testtools, um die Broker-Leistung unter verschiedenen Lasten zu benchmarken, Authentifizierungsmechanismen zu testen und QoS-Einstellungen zu optimieren. Unser Testtool ermöglicht die gleichzeitige Simulation mehrerer Clients und hilft dabei, potenzielle Engpässe und Konfigurationsprobleme zu identifizieren, die Produktionssysteme beeinträchtigen könnten.",
    case5: "<b>Cross-Platform-Anwendungsentwicklung</b>: Entwickler, die plattformübergreifende IoT-Anwendungen erstellen, müssen sicherstellen, dass Nachrichten über Web-, Mobile- und Desktop-Schnittstellen hinweg konsistent verarbeitet werden. Das MQTT Test Tool bietet eine Standardreferenzimplementierung, um zu validieren, dass alle Client-Anwendungen Nachrichten konsistent interpretieren, was plattformspezifische Fehler reduziert."
  },
  tutorial: {
    title: "So verwenden Sie unser MQTT Test Tool",
    intro: "Unser MQTT Test Tool ist intuitiv und leistungsstark zugleich. Folgen Sie diesen einfachen Schritten, um Ihre MQTT-Implementierung effektiv zu testen:",
    step1: {
      title: "Schritt 1: Verbindungseinstellungen konfigurieren",
      description: "Geben Sie zunächst Ihre <b>MQTT-Broker-Details</b> im Verbindungsbereich ein. Geben Sie die Broker-URL ein (z.B. mqtt://broker.example.com:1883 oder ws://broker.example.com:8083 für WebSocket-Verbindungen). Sie können optional eine Client-ID angeben oder diese leer lassen für eine automatisch generierte ID. Wenn Ihr Broker eine Authentifizierung erfordert, geben Sie Benutzername und Passwort ein. Für sichere Verbindungen aktivieren Sie die SSL/TLS-Optionen. Klicken Sie nach der Konfiguration auf den \"Verbinden\"-Button, um eine Verbindung zum MQTT-Broker herzustellen."
    },
    step2: {
      title: "Schritt 2: Topics abonnieren",
      description: "Nach erfolgreicher Verbindung zum Broker navigieren Sie zum <b>Abonnement-Bereich</b>, um Nachrichten zu empfangen. Geben Sie im Topic-Feld das Topic ein, das Sie abonnieren möchten. MQTT-Topics unterstützen Wildcards - verwenden Sie #, um mehrere Topic-Ebenen zu matchen, und +, um eine einzelne Ebene zu matchen (z.B. home/+/temperature abonniert Temperaturwerte für jeden Raum). Wählen Sie das gewünschte QoS-Level und klicken Sie auf \"Abonnieren\". Das Tool lauscht nun auf alle Nachrichten, die an passende Topics gesendet werden."
    },
    step3: {
      title: "Schritt 3: Nachrichten publizieren",
      description: "Um Nachrichten an den Broker zu senden, verwenden Sie den <b>Publikationsbereich</b> des Tools. Geben Sie das Ziel-Topic ein und verfassen Sie Ihre Nachricht. Sie können die Payload als einfachen Text, JSON (mit Validierung), Hexadezimal oder Binärdaten formatieren. Setzen Sie das entsprechende QoS-Level und entscheiden Sie, ob das \"Retain\"-Flag gesetzt werden soll, das den Broker anweist, die Nachricht für zukünftige Abonnenten zu speichern. Klicken Sie auf \"Publizieren\", um Ihre Nachricht an den Broker zu senden."
    },
    step4: {
      title: "Schritt 4: Nachrichten überwachen und analysieren",
      description: "Der <b>Nachrichtenbereich</b> zeigt alle empfangenen und gesendeten Kommunikationen an. Jede Nachricht zeigt das Topic, die Payload, das QoS-Level, den Retain-Status und einen Zeitstempel an. Sie können Nachrichten nach Topic oder Inhalt filtern, um sich auf bestimmte Datenströme zu konzentrieren. Für eine detaillierte Untersuchung klicken Sie auf eine Nachricht, um ihren vollständigen Inhalt anzuzeigen. Verwenden Sie den \"Payload kopieren\"-Button, um Nachrichtendaten für weitere Analysen zu extrahieren, oder die \"Als Publikation kopieren\"-Option, um schnell auf empfangene Nachrichten zu antworten."
    }
  },
  mqttBasics: {
    title: "Grundlagen des MQTT-Protokolls verstehen",
    intro: "Um das MQTT Test Tool effektiv nutzen zu können, ist es hilfreich, diese Schlüsselkonzepte des MQTT-Protokolls zu verstehen:",
    pubsub: {
      title: "Publish-Subscribe-Modell",
      description: "<b>MQTT verwendet ein Publish-Subscribe-Architekturmodell</b>, das Nachrichtensender (Publisher) von Empfängern (Subscriber) entkoppelt. Dieses Modell unterscheidet sich von der traditionellen Client-Server-Kommunikation durch die Einführung eines Brokers, der die Nachrichtenverteilung verwaltet. Publisher senden Nachrichten an Topics, ohne zu wissen, wer (falls überhaupt jemand) sie empfangen wird, während Subscriber Interesse an Topics ausdrücken, ohne zu wissen, wer an diese Topics publiziert. Diese Entkopplung bietet Skalierbarkeit und Flexibilität, indem sie 1-zu-n, n-zu-1 und n-zu-n-Kommunikationsmuster ermöglicht."
    },
    qos: {
      title: "Quality of Service (QoS) Level",
      description: "<b>MQTT bietet drei QoS-Level</b>, die Zuverlässigkeit und Effizienz ausbalancieren: QoS 0 (höchstens einmal) bietet keine Zustellgarantie, hat aber den geringsten Overhead und eignet sich ideal für häufige, nicht-kritische Daten wie Temperaturwerte. QoS 1 (mindestens einmal) stellt sicher, dass Nachrichten den Empfänger erreichen, kann aber Duplikate liefern und eignet sich für wichtige Nachrichten, bei denen die Verarbeitung von Duplikaten akzeptabel ist. QoS 2 (genau einmal) garantiert durch einen Vier-Wege-Handshake eine einmalige Zustellung und eignet sich ideal für kritische Befehle oder Finanztransaktionen, bei denen Duplikate Probleme verursachen könnten."
    },
    retain: {
      title: "Retained Messages",
      description: "<b>Retained Messages</b> sind spezielle MQTT-Nachrichten, die der Broker für zukünftige Subscriber speichert. Wenn eine Nachricht mit dem Retain-Flag auf true gesetzt publiziert wird, speichert der Broker sie als aktuellsten Wert für dieses Topic. Jeder neue Subscriber, der dieses Topic abonniert, erhält sofort die letzte Retained Message, selbst wenn er lange nach der ursprünglichen Publikation abonniert. Diese Funktion ist besonders nützlich für Gerätestatusinformationen, Konfigurationswerte oder andere \"letzte bekannte gute\" Daten, die neue Subscriber bei der Verbindung erhalten sollten."
    },
    lastwill: {
      title: "Last Will & Testament (LWT)",
      description: "Die <b>Last-Will-Funktionalität</b> bietet Clients einen Mechanismus, um eine \"Testament\"-Nachricht beim Broker während der Verbindung zu registrieren. Wenn der Client unerwartet die Verbindung verliert (ohne eine ordnungsgemäße DISCONNECT-Nachricht zu senden), publiziert der Broker automatisch diese Testament-Nachricht an das spezifizierte Topic. Dieses Benachrichtigungssystem ermöglicht es anderen Teilen des IoT-Systems, über unerwartete Verbindungsabbrüche informiert zu werden und entsprechende Maßnahmen zu ergreifen, wie z.B. das Markieren des Geräts als offline oder das Auslösen von Failover-Mechanismen."
    }
  },
  faq: {
    title: "Häufig gestellte Fragen zu MQTT-Tests",
    q1: "Was sind die Unterschiede zwischen MQTT und HTTP für IoT-Anwendungen?",
    a1: "<b>MQTT und HTTP repräsentieren unterschiedliche Ansätze für IoT-Kommunikation</b>, jeder mit einzigartigen Stärken für bestimmte Szenarien. MQTT ist für eingeschränkte Umgebungen konzipiert, verwendet ein Publish-Subscribe-Modell, minimale Paketgrößen (ab 2 Bytes) und persistente Verbindungen, um Overhead zu reduzieren. Es glänzt in Umgebungen mit begrenzter Bandbreite, unzuverlässigen Netzwerken oder batteriebetriebenen Geräten.<br><br>Im Gegensatz dazu folgt HTTP einem Request-Response-Modell, bei dem der Client alle Kommunikation initiiert. Aufgrund des für jede Transaktion erforderlichen Verbindungsaufbaus und typischerweise größeren Nachrichten hat es höheren Overhead. HTTP profitiert jedoch von universeller Unterstützung, einem reichen Tool-Ökosystem und direkter Integration mit Webanwendungen.<br><br>Für Echtzeitanwendungen, die bidirektionale Kommunikation erfordern, bietet MQTT typischerweise bessere Performance mit Features wie QoS-Leveln, Retained Messages und Last-Will-Funktionalität. Unser MQTT Test Tool ermöglicht Ihnen, diese Features zu validieren und zu bestimmen, ob MQTT für Ihren spezifischen IoT-Anwendungsfall geeignet ist.",
    
    q2: "Wie sichere ich MQTT-Kommunikation?",
    a2: "<b>Die Sicherung von MQTT-Kommunikation</b> erfordert mehrschichtigen Schutz, den Sie alle mit unserem Tool testen können:<br><br>1. <b>Transportsicherheit</b>: Aktivieren Sie TLS/SSL-Verschlüsselung durch Verbindung mit sicheren Endpunkten (mqtts:// oder wss://) und korrekter Zertifikatskonfiguration. Unser Testtool unterstützt verschlüsselte und unverschlüsselte Verbindungen, um korrekte TLS-Implementierungen zu validieren.<br><br>2. <b>Authentifizierung</b>: Implementieren Sie Benutzername/Passwort-Authentifizierung oder Client-Zertifikate. Sie können diese Credentials mit den Verbindungseinstellungen unseres Tools testen, um sicherzustellen, dass Ihr Broker Authentifizierungsrichtlinien korrekt durchsetzt.<br><br>3. <b>Autorisierung</b>: Richten Sie Topic-Level-Berechtigungen ein, um zu kontrollieren, welche Clients bestimmte Topics publizieren oder abonnieren dürfen. Verwenden Sie unser Tool, um zu validieren, dass nicht autorisierte Publikations- oder Abonnementversuche korrekt abgelehnt werden.<br><br>4. <b>Payload-Verschlüsselung</b>: Für zusätzliche Sicherheit können Sie Nachrichten-Payloads vor der Publikation verschlüsseln. Unser Tool ermöglicht Tests von End-to-End-Verschlüsselung durch das Publizieren verschlüsselter Nachrichten und die Validierung, dass autorisierte Subscriber sie korrekt entschlüsseln können.<br><br>Denken Sie daran, dass Sicherheit tiefgreifend implementiert werden sollte, indem mehrere Methoden kombiniert werden, anstatt sich auf einen einzigen Mechanismus zu verlassen.",
    
    q3: "Was sind Best Practices für MQTT-Topic-Design?",
    a3: "<b>Effektives MQTT-Topic-Design</b> ist entscheidend für skalierbare und wartbare IoT-Systeme. Folgen Sie diesen Schlüsselprinzipien:<br><br>1. <b>Verwenden Sie Hierarchien</b> mit Schrägstrichen als Trennzeichen (z.B. building/floor/room/device/measurement). Diese Organisation ermöglicht effiziente Filterung mit Wildcards und spiegelt die logische Struktur Ihres Systems wider.<br><br>2. <b>Vermeiden Sie führende Schrägstriche</b> in Topics, da dies unnötige leere Ebenen erzeugt und zu inkonsistentem Topic-Matching zwischen verschiedenen Broker-Implementierungen führen kann.<br><br>3. <b>Fügen Sie Geräte-IDs in Topics ein</b> (z.B. sensors/deviceID/temperature), um sicherzustellen, dass jedes Gerät ein eindeutiges Topic hat und Nachrichtenrouting vereinfacht wird.<br><br>4. <b>Verwenden Sie standardisierte Topic-Namensräume</b> für gemeinsame Funktionen wie Gerätestatus (status/deviceID), Befehle (commands/deviceID) und Konfiguration (config/deviceID).<br><br>5. <b>Beachten Sie Topic-Längenlimits</b> - während MQTT lange Topics erlaubt, verbessert Kürze die Effizienz, besonders bei eingeschränkten Geräten.<br><br>Unser MQTT Test Tool kann Ihr Topic-Design validieren, indem es Ihnen ermöglicht, Abonnementmuster mit Wildcards zu testen und zu überprüfen, ob Nachrichten die beabsichtigten Empfänger erreichen.",
    
    q4: "Wie behebe ich MQTT-Verbindungsprobleme?",
    a4: "Bei <b>MQTT-Verbindungsproblemen</b> gehen Sie systematisch vor:<br><br>1. <b>Netzwerkverbindung validieren</b>: Stellen Sie sicher, dass das Gerät die IP-Adresse und den Port des Brokers erreichen kann. Nutzen Sie die Verbindungsstatus-Anzeige unseres Tools, um grundlegenden Netzwerkzugriff zu bestätigen.<br><br>2. <b>Broker-Adresse und Port prüfen</b>: Bestätigen Sie, dass Sie die korrekte Broker-URL, Portnummer und das richtige Protokoll verwenden (mqtt:// für TCP-Verbindungen, ws:// für WebSocket-Verbindungen). Übliche Ports sind 1883 (MQTT), 8883 (MQTT über TLS), 8083 (WebSockets) und 8084 (sichere WebSockets).<br><br>3. <b>Credentials validieren</b>: Wenn Authentifizierung aktiviert ist, stellen Sie sicher, dass Benutzername und Passwort korrekt sind. Verbindungsfehler werden oft durch Authentifizierungsfehler verursacht.<br><br>4. <b>SSL/TLS-Einstellungen prüfen</b>: Für sichere Verbindungen validieren Sie die Zertifikatskonfiguration, einschließlich CA-Zertifikaten, Client-Zertifikaten und unterstützten TLS-Versionen.<br><br>5. <b>Client-ID-Konflikte prüfen</b>: MQTT-Broker erlauben typischerweise nicht mehrere Verbindungen mit derselben Client-ID. Unser Testtool kann helfen zu identifizieren, ob Ihre Verbindung aufgrund eines ID-Konflikts abgelehnt wird.<br><br>6. <b>Broker-Logs einsehen</b>: Die meisten MQTT-Broker bieten detaillierte Verbindungslogs, die den genauen Grund für Verbindungsfehler offenbaren.<br><br>Unser MQTT Test Tool bietet Echtzeit-Verbindungsstatus und detaillierte Fehlermeldungen, um die genaue Ursache von Verbindungsproblemen zu identifizieren.",
    
    q5: "Wie handle ich MQTT-Verbindungsabbrüche und -Wiederherstellungen am besten?",
    a5: "Die Implementierung robuster <b>MQTT-Verbindungsabbruchbehandlung</b> ist entscheidend für zuverlässige IoT-Anwendungen:<br><br>1. <b>Aktivieren Sie Auto-Reconnect</b>: Konfigurieren Sie Ihren MQTT-Client, automatisch Wiederherstellungsversuche zu starten, wenn die Verbindung verloren geht. Unser MQTT Test Tool hat diese Funktion eingebaut und kann helfen, das Verhalten Ihrer Anwendung in Reconnect-Szenarien zu testen.<br><br>2. <b>Implementieren Sie exponentiellen Backoff</b>: Versuchen Sie nicht, in festen Intervallen erneut zu verbinden, sondern verwenden Sie progressiv längere Verzögerungen zwischen Wiederherstellungsversuchen, um den Broker während Ausfällen nicht zu überlasten.<br><br>3. <b>Konfigurieren Sie Last-Will-Nachrichten</b>: Richten Sie LWT-Nachrichten ein, um andere Teile des Systems über unerwartete Verbindungsabbrüche zu informieren. Sie können diese Funktion in den erweiterten Verbindungseinstellungen unseres Tools testen.<br><br>4. <b>Verwalten Sie Nachrichtenwarteschlangen</b>: Implementieren Sie für kritische Daten clientseitige Nachrichtenwarteschlangen während Verbindungsabbrüchen und senden Sie sie bei Wiederherstellung.<br><br>5. <b>Verwenden Sie persistente Sessions</b>: Aktivieren Sie das \"Clean Session\"-Flag bei Bedarf, um Abonnementinformationen und Warteschlangennachrichten zwischen Verbindungen zu erhalten.<br><br>6. <b>Überwachen Sie den Verbindungsstatus</b>: Implementieren Sie in Produktionsumgebungen Verbindungsstatusüberwachung und Alarme für längere Ausfälle.<br><br>Unser MQTT Test Tool kann verschiedene Verbindungsabbruchszenarien simulieren, um zu helfen, zu validieren, dass Ihre Anwendung Verbindungsprobleme angemessen behandelt."
  },
  relatedTools: {
    title: "Verwandte IoT- und Netzwerktools erkunden",
    description: "Erweitern Sie Ihren IoT-Entwicklungsworkflow mit diesen ergänzenden Tools:",
    tool1: {
      name: "WebSocket Test Tool",
      url: "https://www.ufreetools.com/tool/websocket-tester",
      description: "Testen Sie WebSocket-Verbindungen mit Echtzeit-Nachrichtenversand und -empfang."
    },
    tool2: {
      name: "JSON Formatierer und Validierer",
      url: "https://www.ufreetools.com/tool/json-formatter",
      description: "Formatieren, validieren und verschönern Sie JSON-Daten, die häufig in MQTT-Payloads verwendet werden."
    },
    tool3: {
      name: "HTTP Proxy Detektor",
      url: "https://www.ufreetools.com/tool/http-proxy-detector",
      description: "Erkennen Sie, ob Ihre Verbindung einen HTTP-Proxy verwendet, und analysieren Sie Proxy-bezogene Header zur Sicherheitsvalidierung."
    },
    tool4: {
      name: "Base64 Encoder/Decoder",
      url: "https://www.ufreetools.com/tool/base64-encoder-decoder",
      description: "Kodieren und dekodieren Sie Base64-binäre Payload-Daten, die häufig in MQTT-Nachrichten verwendet werden."
    }
  },
  resources: {
    title: "Autoritative MQTT-Protokollressourcen",
    resource1: {
      name: "MQTT.org - Offizielle MQTT-Dokumentation",
      url: "https://mqtt.org/",
      description: "Offizielle MQTT-Protokoll-Dokumentation, Spezifikationen und Best Practices, gepflegt vom OASIS-Konsortium."
    },
    resource2: {
      name: "HiveMQ - MQTT-Grundlagenführer",
      url: "https://www.hivemq.com/mqtt-essentials/",
      description: "Eine umfassende Artikelserie, die alle grundlegenden Aspekte des MQTT-Protokolls praktisch abdeckt."
    },
    resource3: {
      name: "Eclipse Mosquitto - Open-Source-MQTT-Broker",
      url: "https://mosquitto.org/",
      description: "Dokumentation des beliebten Open-Source-MQTT-Brokers, einschließlich Konfigurationsoptionen und Sicherheits-Best-Practices."
    }
  }
}
