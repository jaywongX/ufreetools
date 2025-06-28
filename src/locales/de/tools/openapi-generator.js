export default {
    name: 'OpenAPI → TypeScript Client Generator',
    description: 'Generiert automatisch TypeScript Interfaces und Client-Code basierend auf OpenAPI-Spezifikationen, verbessert die Frontend-Backend-Zusammenarbeit',
    
    // Optionen
    options: {
      exportSchemas: 'Alle Modelldefinitionen exportieren',
      generateClient: 'API-Client-Code generieren',
      addComments: 'Kommentare und Dokumentation hinzufügen',
      useEnums: 'TypeScript Enums verwenden (statt String-Literal-Typen)',
      indentSize: 'Einrückungsgröße',
      operationType: 'Operationstyp',
      displayOptions: 'Anzeigeoptionen'
    },
    
    // Eingabemodi
    inputMode: {
      toggleToFile: 'Zu Dateiupload wechseln',
      toggleToText: 'Zu Texteingabe wechseln',
      loadExample: 'Beispiel laden'
    },
    
    // Dateiupload
    fileUpload: {
      dragAndDrop: 'OpenAPI-Datei hierher ziehen oder klicken zum Hochladen',
      supportedFormats: 'Unterstützte Formate: .json, .yaml und .yml',
      fileSelected: 'Ausgewählt: {0} ({1})'
    },
    
    // Texteingabe
    textInput: {
      placeholder: 'OpenAPI-Spezifikation (JSON oder YAML) hier einfügen...'
    },
    
    // Aktionen
    actions: {
      generate: 'TypeScript-Code generieren',
      processing: 'Wird verarbeitet...',
      clear: 'Zurücksetzen',
      copy: 'Code kopieren',
      download: 'Code herunterladen'
    },
    
    // Ergebnisse
    results: {
      generatedCode: 'Generierter TypeScript-Code',
      copied: 'In die Zwischenablage kopiert',
      error: 'Fehler',
      characterCount: 'Zeichenanzahl: {0}'
    },
    
    // Fehlermeldungen
    errors: {
      parseError: 'OpenAPI-Spezifikation konnte nicht geparst werden. Bitte stellen Sie ein gültiges JSON- oder YAML-Format bereit.',
      invalidSpec: 'Ungültige OpenAPI-Spezifikation. Keine openapi- oder swagger-Versionskennung gefunden.',
      processingError: 'Fehler bei der Verarbeitung der OpenAPI-Spezifikation: {0}'
    },
    
    // Artikel
    article: {
      title: "OpenAPI zu TypeScript: Automatisierte API-Client-Generierung",
      overview: {
        title: "Der OpenAPI-zu-TypeScript-Generator",
        content: "<strong>Der OpenAPI-zu-TypeScript-Client-Generator</strong> ist ein spezialisiertes Tool, das automatisch OpenAPI-Spezifikationen (früher bekannt als Swagger) in TypeScript-Interfaces und voll funktionsfähigen API-Client-Code umwandelt. Diese Transformation vereinfacht den Frontend-Entwicklungsprozess, indem sie Typsicherheit gewährleistet und den manuellen Aufwand für die API-Integration eliminiert.<br><br>Die OpenAPI-Spezifikation dient als standardisierter Vertrag zwischen Frontend- und Backend-Services und beschreibt verfügbare Endpunkte, Request-Parameter, Response-Strukturen und Datenmodelle. Durch die Nutzung dieses Generators können Entwickler sich auf das Erstellen von Funktionen konzentrieren, anstatt API-Integrationscode zu pflegen, und gleichzeitig von TypeScripts starkem Typsystem profitieren, das potenzielle Fehler zur Kompilierzeit statt zur Laufzeit erkennt."
      },
      useCases: {
        title: "Typische Anwendungsfälle für OpenAPI-zu-TypeScript-Generierung",
        items: [
          {
            title: "Frontend-Entwicklung für komplexe APIs",
            description: "Bei der Arbeit mit großen oder komplexen Backend-APIs wird das manuelle Codieren von Client-Interfaces zeitaufwändig und fehleranfällig. Dieser Generator erstellt präzise TypeScript-Interfaces und Client-Code, die exakt mit der API-Spezifikation übereinstimmen, um Konsistenz zwischen Frontend und Backend sicherzustellen."
          },
          {
            title: "Microservice-Architekturen",
            description: "In Microservice-Umgebungen mit mehreren API-Services erleichtert der Generator die schnelle Integration mit jedem Service. Wenn Services weiterentwickelt werden, kann man einfach den TypeScript-Client aus der aktualisierten OpenAPI-Spezifikation neu generieren, um synchron zu bleiben."
          },
          {
            title: "API-Versionsmigration",
            description: "Beim Upgrade auf eine neue API-Version können TypeScript-Clients für beide Versionen generiert werden, um Breaking Changes zu identifizieren und sanfte Migrationsstrategien im Frontend-Code zu implementieren."
          },
          {
            title: "Onboarding von Entwicklern",
            description: "Neue Teammitglieder können API-Funktionalitäten schnell verstehen, indem sie die generierten TypeScript-Interfaces untersuchen, die als umfassende Dokumentation mit vollständigen Typinformationen dienen."
          },
          {
            title: "Prototyping",
            description: "Während des schnellen Prototypings kann man TypeScript-Clients aus Entwurfs-OpenAPI-Spezifikationen generieren, um sofort mit dem Bau von UI-Komponenten mit echten Datenstrukturen zu beginnen, noch bevor die Backend-Implementierung abgeschlossen ist."
          }
        ]
      },
      guide: {
        title: "Schritt-für-Schritt-Anleitung zur Verwendung des OpenAPI-zu-TypeScript-Generators",
        intro: "Folgen Sie diesen Schritten, um OpenAPI-Spezifikationen effektiv in TypeScript-Interfaces und Client-Code umzuwandeln:",
        steps: [
          {
            title: "Bereiten Sie Ihre OpenAPI-Spezifikation vor",
            description: "Stellen Sie sicher, dass Sie eine gültige OpenAPI-Spezifikation im JSON- oder YAML-Format haben. Die Spezifikation sollte Ihre API-Endpunkte, Request-Parameter, Response-Strukturen und Datenmodelle definieren. Sie können eine Datei hochladen oder den Inhalt direkt in das Textfeld einfügen."
          },
          {
            title: "Generierungsoptionen auswählen",
            description: "Konfigurieren Sie die Generierungsoptionen entsprechend Ihren Anforderungen: 'Alle Modelldefinitionen exportieren' erstellt TypeScript-Interfaces für alle Datenmodelle, 'API-Client-Code generieren' erzeugt API-Client-Methoden, 'Kommentare und Dokumentation hinzufügen' fügt Dokumentation in den generierten Code ein, und 'TypeScript Enums verwenden' erstellt TypeScript-Enums für String-Literal-Typen."
          },
          {
            title: "TypeScript-Code generieren",
            description: "Klicken Sie auf den 'TypeScript-Code generieren'-Button, um Ihre OpenAPI-Spezifikation zu verarbeiten. Das Tool analysiert die Spezifikation und generiert TypeScript-Interfaces und Client-Code basierend auf Ihren ausgewählten Optionen."
          },
          {
            title: "Generierten Code überprüfen",
            description: "Überprüfen Sie die Ausgabe, um sicherzustellen, dass sie Ihren Erwartungen entspricht. Der generierte Code enthält Interfaces für Request/Response-Typen sowie eine Client-Klasse mit Methoden für jeden API-Endpunkt."
          },
          {
            title: "Ergebnisse kopieren oder herunterladen",
            description: "Verwenden Sie den 'Code kopieren'-Button, um den generierten TypeScript-Code in die Zwischenablage zu kopieren, oder 'Code herunterladen', um ihn als .ts-Datei zu speichern. Anschließend können Sie diesen Code in Ihr TypeScript-Projekt integrieren."
          },
          {
            title: "Mit Ihrem Projekt integrieren",
            description: "Importieren Sie den generierten Client in Ihren Anwendungscode. Initialisieren Sie den Client mit Ihrer API-Basis-URL und allen erforderlichen Headern, und verwenden Sie dann die stark typisierten Methoden für API-Aufrufe."
          },
          {
            title: "Bei API-Änderungen aktualisieren",
            description: "Wenn sich Ihre API-Spezifikation ändert, generieren Sie den TypeScript-Code neu und aktualisieren Sie Ihre Codebasis, um sicherzustellen, dass Ihr Frontend mit der Backend-API synchron bleibt."
          }
        ]
      },
      bestPractices: {
        title: "Best Practices für OpenAPI-Spezifikationen",
        intro: "Befolgen Sie diese Best Practices, um hochwertige OpenAPI-Spezifikationen zu erstellen, die optimalen TypeScript-Code generieren:",
        items: [
          "Verwenden Sie für jeden Endpunkt beschreibende Operation-IDs, um aussagekräftige Methodennamen im generierten Client zu erstellen",
          "Geben Sie detaillierte Beschreibungen für Schemata, Eigenschaften, Parameter und Responses an, um nützliche TypeScript-Kommentare zu generieren",
          "Verwenden Sie konsistente Namenskonventionen für Schemata und Eigenschaften, um vorhersehbare TypeScript-Interfaces zu erstellen",
          "Definieren Sie wiederverwendbare Komponenten im 'components'-Abschnitt, um Duplizierung zu vermeiden und Code-Wiederverwendung zu fördern",
          "Spezifizieren Sie genaue Datentypen für alle Eigenschaften, um präzise TypeScript-Typen zu generieren",
          "Fügen Sie Beispiele in Ihre OpenAPI-Spezifikation ein, um Entwicklern zu helfen, die erwarteten Datenstrukturen zu verstehen",
          "Verwenden Sie Enum-Werte für Eigenschaften mit festen möglichen Wertesätzen, um TypeScript-Enums oder Union-Typen zu erstellen",
          "Organisieren Sie Endpunkte logisch, indem Sie verwandte Operationen mit geeigneten Tags gruppieren",
          "Versionieren Sie Ihre API und zeigen Sie Breaking Changes deutlich an, um Frontend-Migrationsstrategien zu erleichtern",
          "Validieren Sie Ihre OpenAPI-Spezifikation mit Linting-Tools oder Validatoren, bevor Sie TypeScript-Code generieren"
        ]
      },
      faq: {
        title: "Häufige Fragen zur OpenAPI-zu-TypeScript-Generierung",
        items: [
          {
            question: "Was ist der Unterschied zwischen OpenAPI und Swagger?",
            answer: "OpenAPI ist der aktuelle Name der Spezifikation, während Swagger der ursprüngliche Name war. OpenAPI 3.0+ ist die moderne Weiterentwicklung dessen, was früher als Swagger 2.0 bekannt war. Dieser Generator unterstützt OpenAPI 3.x- und Swagger 2.0-Spezifikationen, obwohl OpenAPI 3.x aufgrund erweiterter Funktionen und besserer TypeScript-Code-Generierung empfohlen wird."
          },
          {
            question: "Kann ich den generierten TypeScript-Code anpassen?",
            answer: "Ja, der Generator bietet mehrere Anpassungsoptionen: Sie können wählen, ob nur Modelldefinitionen exportiert werden sollen, Client-Code generiert wird, Dokumentationskommentare hinzugefügt werden und TypeScript-Enums statt String-Literal-Typen verwendet werden. Für umfangreichere Anpassungen können Sie den generierten Code manuell modifizieren, aber beachten Sie, dass Neugenerierungen diese Änderungen überschreiben."
          },
          {
            question: "Wie wird Authentifizierung im generierten Client gehandhabt?",
            answer: "Der generierte Client akzeptiert benutzerdefinierte Header in seinem Konstruktor, wo Sie Authentifizierungstokens bereitstellen können. Für komplexere Authentifizierungsflows (wie OAuth) müssen Sie möglicherweise den generierten Client mit zusätzlicher Logik erweitern oder einen Wrapper erstellen, der Token-Refresh und andere Authentifizierungsaspekte handhabt."
          },
          {
            question: "Kann ich dies mit React, Vue, Angular oder anderen Frameworks verwenden?",
            answer: "Ja, der generierte TypeScript-Client ist Framework-unabhängig und kann mit jedem JavaScript- oder TypeScript-Framework verwendet werden. In React könnten Sie den Client in einen Custom Hook wrappen; in Vue könnten Sie eine Composable Function erstellen; in Angular könnten Sie den Client als injizierbaren Service erweitern."
          },
          {
            question: "Wie handhabe ich Dateiuploads mit dem generierten Client?",
            answer: "Für in der OpenAPI-Spezifikation definierte Dateiuploads (mit Content-Type 'multipart/form-data') erstellt der Generator entsprechende Methodensignaturen. Beim Aufruf dieser Methoden müssen Sie ein FormData-Objekt für den Request-Body konstruieren. Stellen Sie sicher, dass Ihre OpenAPI-Spezifikation Dateiupload-Operationen korrekt definiert."
          },
          {
            question: "Was passiert, wenn meine OpenAPI-Spezifikation Fehler enthält?",
            answer: "Der Generator wird versuchen, häufige Probleme in der Spezifikation zu identifizieren und entsprechende Fehlermeldungen bereitzustellen. Es wird empfohlen, Ihre OpenAPI-Dokumentation vor der Generierung mit einem dedizierten Validator zu überprüfen. Fehler in der Spezifikation können zu inkorrektem oder unvollständigem TypeScript-Code führen."
          },
          {
            question: "Wie halte ich den TypeScript-Client mit API-Änderungen synchron?",
            answer: "Wenn sich Ihre API ändert und die OpenAPI-Spezifikation aktualisiert wird, generieren Sie den TypeScript-Client neu und aktualisieren Sie ihn in Ihrem Projekt. Erwägen Sie, diesen Prozess in Ihrem Build-Workflow zu automatisieren, um sicherzustellen, dass Ihr Frontend immer den aktuellsten API-Client-Code verwendet."
          }
        ]
      },
      integrationTips: {
        title: "Tipps zur Integration des generierten TypeScript-Clients",
        intro: "Sobald Sie den TypeScript-Client generiert haben, beachten Sie diese Empfehlungen für eine reibungslose Integration in Ihr Projekt:",
        items: [
          "Erstellen Sie ein dediziertes API-Client-Modul in Ihrem Projekt, das den generierten Client mit allen benutzerdefinierten Konfigurationen re-exportiert",
          "Verwenden Sie Dependency Injection, um den API-Client durch die Anwendung bereitzustellen, was das Mocking für Tests erleichtert",
          "Erwägen Sie die Implementierung von Request/Response-Interceptoren für häufige Anforderungen wie Fehlerbehandlung, Logging und Authentifizierung",
          "Wrappen Sie die generierten Client-Methoden in benutzerdefinierte Funktionen, die spezifische Fehlerszenarien behandeln oder Daten für Anwendungsanforderungen transformieren",
          "Richten Sie die automatische Generierung des TypeScript-Clients als Teil Ihrer CI/CD-Pipeline ein, um Frontend und Backend synchron zu halten",
          "Verwenden Sie Environment-Variablen oder Konfigurationsdateien, um API-Basis-URLs für verschiedene Umgebungen (Entwicklung, Staging, Produktion) anzugeben",
          "Fügen Sie Wiederholungslogik für vorübergehende Fehler hinzu, indem Sie generierte Client-Methoden mit Retry-Funktionalität wrappen",
          "Implementieren Sie Request-Caching für häufig abgerufene Daten, um die Performance zu verbessern und API-Aufrufe zu reduzieren",
          "Kombinieren Sie generierte Typen mit State-Management-Bibliotheken wie Redux, MobX oder Vuex für typsicheren Anwendungszustand",
          "Wenn Sie viele kleine Requests durchführen, erwägen Sie Request-Batching oder GraphQL zur Optimierung von API-Aufrufen"
        ]
      }
    }
  }