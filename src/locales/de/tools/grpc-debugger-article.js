export default {
    title: "gRPC-Debugger: Interaktives Testwerkzeug für Remote Procedure Calls",
    features: {
        title: "gRPC-Debugging und API-Tests verstehen",
        description: "Der <strong>gRPC-Debugger</strong> ist ein umfassendes webbasiertes Tool zum Testen, Debuggen und Erkunden von gRPC-Services direkt im Browser. Im Gegensatz zu traditionellen REST-API-Clients bietet dieses <strong>Protobuf-Testwerkzeug</strong> spezielle Funktionen für das gRPC-Binärprotokoll und Protocol Buffers (protobuf), die es Entwicklern ermöglichen, mit gRPC-Services zu interagieren, ohne benutzerdefinierte Client-Codes schreiben zu müssen.<br><br>Unser <strong>gRPC-Client-Tester</strong> unterstützt Kernfunktionen wie Proto-Datei-Parsing, Service-Erkennung, dynamische Formulargenerierung für Anfragen, Metadatenverwaltung und vollständige Antwortvisualisierung. Dies macht es zu einem unverzichtbaren Werkzeug für API-Entwickler, die mit modernen Microservice-Architekturen arbeiten, die gRPC für effiziente, stark typisierte und hochperformante Kommunikation nutzen.",
        useCases: {
            title: "Praktische Anwendungsfälle für gRPC-Tests",
            items: [
                "<strong>Microservice-API-Entwicklung</strong>: Beim Aufbau verteilter Systeme mit Microservice-Architekturen ermöglicht der <strong>gRPC-Tester</strong> die Validierung von Service-Endpunkten, Nachrichtenformaten und Service-Verträgen aus Proto-Dateien.",
                "<strong>API-Integrationstests</strong>: Für Anwendungen mit Drittanbieter- oder internen gRPC-Services bietet unser Debugger eine Möglichkeit, verfügbare Methoden zu erkunden, ohne Test-Clients schreiben zu müssen.",
                "<strong>Produktionsproblemlösung</strong>: Bei unerwartetem Verhalten in Produktionssystemen ermöglicht der Debugger die Replikation spezifischer Anfragen in kontrollierter Umgebung.",
                "<strong>Protobuf-Schemaentwicklung</strong>: Während der API-Designphase hilft die <strong>Protobuf-Inspektion</strong> bei der Validierung von Nachrichtendefinitionen.",
                "<strong>Leistungsanalyse</strong>: Der Debugger bietet Zeitinformationen für Anfragen, was Benchmark-Tests unter verschiedenen Bedingungen ermöglicht.",
                "<strong>Dokumentation und Wissenstransfer</strong>: Die visuelle Schnittstelle des <strong>gRPC-Service-Browsers</strong> erleichtert die Darstellung von API-Funktionen für nicht-technische Stakeholder."
            ]
        }
    },
    faq: {
        title: "Häufige Fragen zum gRPC-Debugging",
        items: [
            {
                question: "Was ist der Unterschied zwischen gRPC und REST-APIs?",
                answer: "gRPC und REST repräsentieren unterschiedliche API-Designansätze mit verschiedenen Eigenschaften:<br><br><strong>gRPC</strong> ist ein hochperformantes RPC-Framework mit:<br>• Vertragsbasierter Methode (.proto-Dateien)<br>• Effizienter Binärserialisierung<br>• Eingebautem Streaming<br>• HTTP/2-Unterstützung<br><br><strong>REST</strong> ist ein Architekturstil mit:<br>• Einfachheit und Bekanntheit<br>• Menschenlesbaren Formaten (JSON/XML)<br>• Browserunterstützung ohne zusätzliche Bibliotheken<br><br>Der <strong>gRPC-Debugger</strong> schließt die Tooling-Lücke für gRPC mit explorativen Funktionen ähnlich REST."
            },
            {
                question: "Wie erstelle ich .proto-Dateien für Tests?",
                answer: "Erstellung von <strong>Protocol Buffer-Definitionen</strong>:<br><br>1. Syntaxversion definieren: `syntax = \"proto3\";`<br>2. Paketorganisation: `package ecommerce;`<br>3. Nachrichtentypen definieren:<br><pre>message Product &#123;<br>  string id = 1;<br>  string name = 2;<br>  double price = 3;<br>&#125;</pre><br>4. Services definieren:<br><pre>service ProductService &#123;<br>  rpc GetProduct(GetProductRequest) returns (Product);<br>&#125;</pre><br>5. Andere Proto-Dateien importieren<br><br>Der Debugger kann diese Dateien direkt verarbeiten."
            },
            {
                question: "Kann das Tool mit sicheren gRPC-Services (SSL/TLS) verbinden?",
                answer: "Ja, der <strong>gRPC-Debugger</strong> unterstützt SSL/TLS:<br><br>• <strong>HTTPS</strong>-Präfix oder TLS-Option aktivieren<br>• Gültige Zertifikate erforderlich (meist keine selbstsignierten)<br>• Authentifizierung über:<br> - API-Schlüssel in Metadaten<br> - Basis-Authentifizierung<br> - OAuth-Token<br><br>Für interne Services ggf. gRPC-Web-Proxy (z.B. Envoy) verwenden."
            },
            {
                question: "Warum muss Proto-Dateien vor Anfragen geparst werden?",
                answer: "Proto-Parsing ist entscheidend für:<br><br>1. <strong>Typentdeckung</strong>: Definiert Services, Methoden und Nachrichtenstrukturen<br>2. <strong>Dynamische Interface-Generierung</strong>: Erzeugt passende Anfrageformulare<br>3. <strong>Binäre Serialisierung</strong>: Konvertiert zwischen JSON und Protobuf-Binärformat<br>4. <strong>Fehlervermeidung</strong>: Stellt sicher, dass Anfragen korrekt formatiert sind"
            },
            {
                question: "Welche gRPC-Methodentypen kann ich testen?",
                answer: "Alle vier gRPC-Kommunikationsmodi werden unterstützt:<br><br>1. <strong>Unär</strong>: Einfache Anfrage-Antwort (z.B. `GetUser`)<br>2. <strong>Server-Streaming</strong>: Ein Anfrage, mehrere Antworten (z.B. `ListProducts`)<br>3. <strong>Client-Streaming</strong>: Mehrere Anfragen, eine Antwort (z.B. `UploadData`)<br>4. <strong>Bidirektional</strong>: Vollständig asynchron (z.B. `Chat`)<br><br>Der Debugger bietet für jeden Typ passende Schnittstellen."
            }
        ]
    },
    guide: {
        title: "Schritt-für-Schritt-Anleitung",
        step1: "<strong>gRPC-Service-URL definieren</strong>: Adresse des gRPC-Services eingeben (z.B. https://ihr-service.com). Für Browser-basiertes Testen muss gRPC-Web und CORS unterstützt werden.",
        step2: "<strong>Timeout und Verbindungsoptionen</strong>: Anfrage-Timeout anpassen (Standard: 30000ms). Für langlaufende Operationen oder langsame Netzwerke erhöhen.",
        step3: "<strong>Protocol Buffer-Definition bereitstellen</strong>: .proto-Datei hochladen oder Inhalt einfügen. \"Beispiel-Proto laden\" bietet eine Vorlage für Anfänger.",
        step4: "<strong>Proto-Definition parsen</strong>: \"Proto-Definition parsen\" klicken, um Services, Methoden und Nachrichtentypen zu analysieren. Syntaxfehler werden angezeigt.",
        step5: "<strong>Service und Methode auswählen</strong>: Nach erfolgreichem Parsing den gewünschten Service und Methode auswählen. Methodentyp wird angezeigt (unär, streaming).",
        step6: "<strong>Anfrage erstellen</strong>: Debugger generiert JSON-Vorlage für die Nachricht. Werte anpassen und Format validieren lassen.",
        step7: "<strong>Anfrage senden und Antwort analysieren</strong>: \"Anfrage senden\" klicken. Antwortdaten werden angezeigt, inklusive Timing-Informationen. Bei Streams kommen Nachrichten sukzessive an."
    },
    conclusion: "Der gRPC-Debugger bietet eine intuitive Browser-Schnittstelle für die komplexe Welt der gRPC-Services. Durch die Überbrückung der Lücke zwischen menschlichen Bedienern und dem gRPC-Binärprotokoll vereinfacht dieses Tool die Entwicklung, Tests und Fehlerbehebung moderner API-Services erheblich. Mit der zunehmenden Verbreitung von gRPC für performante, stark typisierte APIs wird zugängliches Test-Tooling immer wertvoller für die Sicherstellung von Qualität und Zuverlässigkeit."
}
