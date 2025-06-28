export default {
    name: 'Mock API Generator',
    description: 'Generiert Mock APIs basierend auf OpenAPI-Spezifikationen',
    
    // Optionen
    options: {
      version: 'OpenAPI Version',
      format: 'Ausgabeformat',
      includeExamples: 'Beispielantworten einbeziehen',
      responseDynamism: 'Antwortdynamik',
      responseType: 'Antworttyp',
      arrayLength: 'Array-Länge',
      responseFormat: 'Antwortformat'
    },
    
    // Ausgabeformate
    formats: {
      json: 'JSON Server',
      express: 'Express.js',
      mockjs: 'Mock.js',
      msw: 'Mock Service Worker'
    },
    
    // Aktionen
    actions: {
      generate: 'Mock generieren',
      preview: 'API Vorschau',
      clear: 'Zurücksetzen',
      copy: 'Code kopieren',
      download: 'Herunterladen',
      uploadSpec: 'OpenAPI-Spezifikation hochladen',
      uploadJava: 'Java-Klassendatei hochladen',
      generateJson: 'JSON generieren',
      generateBuilder: 'Builder generieren',
      format: 'Formatieren'
    },
    
    // Nachrichten
    messages: {
      copied: 'In die Zwischenablage kopiert!',
      generationSuccess: 'Mock API erfolgreich generiert',
      generationError: 'Fehler beim Generieren der Mock API',
      specRequired: 'Bitte OpenAPI-Spezifikation bereitstellen',
      fileUploaded: 'Datei hochgeladen',
      parseError: 'Java-Klasse konnte nicht geparst werden - bitte Dateiformat überprüfen'
    },
    
    // Hilfetext
    help: {
      uploadHint: 'Unterstützt .java Dateien - automatische Analyse der Klassenstruktur zur Mock-Konfiguration. Mehrstufige Objekteigenschaften werden derzeit nicht unterstützt.'
    },
    
    // Felder
    fields: {
      title: 'Felddefinitionen',
      addField: 'Feld hinzufügen',
      addChildField: 'Unterfeld hinzufügen',
      fieldName: 'Feldname'
    },
    
    // Feldtypen
    fieldTypes: {
      string: 'String',
      number: 'Zahl',
      boolean: 'Boolean',
      date: 'Datum',
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon',
      address: 'Adresse',
      id: 'ID',
      image: 'Bild-URL',
      array: 'Array',
      object: 'Objekt'
    },
    
    // Array
    array: {
      itemType: 'Array-Elementtyp',
      arrayFields: 'Array-Elementfelder'
    },
    
    // Objekt
    object: {
      childFields: 'Unterfelder'
    },
    
    // Antworttypen
    responseTypes: {
      object: 'Einzelnes Objekt',
      array: 'Objekt-Array',
      custom: 'Benutzerdefinierte Struktur'
    },
    
    // Antwortformate
    responseFormats: {
      dataOnly: 'Nur Daten',
      standard: 'Standard REST-Antwort (code, data, message)'
    },
    
    // Platzhalter
    placeholder: {
      output: '// Generierte Mock-Daten werden hier angezeigt'
    },
    
    // Artikel
    article: {
      title: "Mock API Generator: Anwendung in der Frontend-Entwicklung",
      overview: {
        title: "Was ist ein Mock API Generator?",
        content: "<strong>Mock API Generatoren</strong> sind spezialisierte Tools, die auf Basis von OpenAPI-Spezifikationen oder benutzerdefinierten Felddefinitionen simulierte API-Endpunkte und Antworten erstellen. Diese leistungsstarken Entwicklungswerkzeuge helfen Frontend-Entwicklern, unabhängig vom Backend-Team zu arbeiten, indem sie realistische Datenstrukturen bereitstellen, die das Verhalten echter APIs nachahmen.<br><br>Mock API Generatoren erstellen voll funktionsfähige Endpunkte, die konsistente, strukturierte Daten gemäß Ihrer Spezifikation zurückgeben. Dies ermöglicht Frontend-Entwicklung ohne Warten auf die tatsächliche Backend-Implementierung und beschleunigt den Entwicklungsprozess erheblich durch parallele Arbeitsabläufe."
      },
      useCases: {
        title: "Typische Anwendungsfälle für Mock APIs",
        items: [
          {
            title: "Frontend-Entwicklung vor Backend-Fertigstellung",
            description: "Wenn Backend-APIs noch in Entwicklung oder nicht implementiert sind, ermöglichen Mock APIs Frontend-Entwicklern den Aufbau von UI-Komponenten mit realen Datenstrukturen, ohne Entwicklungsengpässe."
          },
          {
            title: "UI-Prototyping und Testing",
            description: "Erstellen Sie schnelle Prototypen oder testen Sie UI-Komponenten mit kontrollierten Datensätzen, um Designs ohne echte Backend-Anbindung zu validieren."
          },
          {
            title: "Offline-Entwicklung",
            description: "Lokale Mock API-Server simulieren echte API-Antworten und ermöglichen Entwicklung in Offline-Umgebungen ohne Produktions- oder Staging-API-Zugriff."
          },
          {
            title: "Edge-Case-Testing",
            description: "Generieren Sie spezifische API-Antworten für Edge Cases oder Fehlerbedingungen, die in Produktionsumgebungen schwer auszulösen sind, um Fehlerbehandlung umfassend zu testen."
          },
          {
            title: "Performance-Tests",
            description: "Simulieren Sie verschiedene Antwortzeiten und Lastgrößen, um Frontend-Komponenten unter verschiedenen Performance-Szenarien zu testen."
          },
          {
            title: "Demo-Umgebungen",
            description: "Erstellen Sie voll funktionsfähige Demo-Umgebungen ohne echte Backend-Anbindung für Verkaufspräsentationen, Schulungen oder Ausstellungen."
          }
        ]
      },
      guide: {
        title: "Mock API Generator Anleitung",
        intro: "So erstellen und nutzen Sie effektiv Mock APIs für Ihren Entwicklungs-Workflow:",
        steps: [
          {
            title: "Eingabemethode wählen",
            description: "Wählen Sie, wie Sie die API-Struktur definieren möchten: OpenAPI-Spezifikation hochladen (empfohlen für API-Konsistenz), Java-Klassen hochladen zur automatischen Datenstrukturextraktion oder manuelle Felddefinition über die Oberfläche."
          },
          {
            title: "Datenstruktur definieren",
            description: "Definieren Sie ohne OpenAPI-Spezifikation die Mock-Datenstruktur durch Hinzufügen von Feldern mit Typen (String, Zahl, Boolean, Datum etc.). Für komplexe Strukturen erstellen Sie verschachtelte Objekte oder Objekt-Arrays entsprechend dem echten API-Datenmodell."
          },
          {
            title: "Ausgabeoptionen konfigurieren",
            description: "Wählen Sie Ihr bevorzugtes Ausgabeformat (JSON Server, Express.js, Mock.js oder Mock Service Worker). Passen Sie Einstellungen wie Antwortdynamik (Zufälligkeit generierter Daten), Array-Länge und Antwortformat an."
          },
          {
            title: "Mock API Code generieren",
            description: "Klicken Sie auf \"Mock generieren\", um basierend auf Ihrer Spezifikation Mock API Code zu erstellen. Das Tool verarbeitet Ihre Eingabe und generiert Code für simulierte API-Endpunkte und Antworten in Ihrem gewählten Format."
          },
          {
            title: "Generierten Code prüfen und kopieren",
            description: "Überprüfen Sie den generierten Mock API Code auf Eignung. Kopieren Sie den Code in die Zwischenablage oder laden Sie ihn als Datei für die Projektintegration herunter."
          },
          {
            title: "Mit Entwicklungsumgebung integrieren",
            description: "Integrieren Sie die generierte Mock API entsprechend Ihres gewählten Formats (JSON Server einrichten, Express.js Routen hinzufügen, Mock.js konfigurieren oder Mock Service Worker implementieren)."
          },
          {
            title: "Frontend-Anwendung verbinden",
            description: "Aktualisieren Sie Ihre Frontend-Anwendung zur Verbindung mit den Mock API Endpunkten statt echten Backend-Services, typischerweise durch Änderung der API-Basis-URL auf lokale Mock-Server oder Interceptoren."
          }
        ]
      },
      bestPractices: {
        title: "Best Practices für Mock API Entwicklung",
        intro: "Folgende Empfehlungen erstellen effektive und wartbare Mock APIs:",
        items: [
          "Nutzen Sie OpenAPI-Spezifikationen wo möglich, um Mock APIs exakt an echte APIs anzupassen",
          "Spiegeln Sie exakte Antwortstrukturen echter APIs inklusive Paginierung, Fehlerantworten und Metadaten",
          "Beziehen Sie realistische Edge Cases wie leere Arrays, Nullwerte und verschiedene Fehlerzustände ein",
          "Verwenden Sie für dynamische Daten wie Datum oder IDs Funktionen statt statischer Werte",
          "Versionieren Sie Mock APIs mit Frontend-Code für historische Kompatibilität während der Entwicklung",
          "Nutzen Sie Environment Variables für Wechsel zwischen Mock und echter API basierend auf Entwicklungskontext",
          "Dokumentieren Sie Abweichungen zwischen Mock und echter API zur Vermeidung von Integrationskonflikten",
          "Implementieren Sie konsistente Latenzsimulation zum Testen von UI-Ladezuständen",
          "Automatisieren Sie Mock-Service-Generierung in Build-Pipelines für Synchronisation mit API-Änderungen",
          "Integrieren Sie Validierungslogik in Mock APIs zur Simulation echter API-Constraints"
        ]
      },
      faq: {
        title: "Häufige Fragen zu Mock APIs",
        items: [
          {
            question: "Was sind die Unterschiede zwischen den Ausgabeformaten?",
            answer: "JSON Server bietet einfache REST APIs basierend auf JSON-Dateien für grundlegende Anforderungen. Express.js ermöglicht mehr Customization und Routing-Kontrolle für komplexe Szenarien. Mock.js integriert direkt mit JavaScript zum Abfangen von AJAX-Requests im Browser. Mock Service Worker (MSW) nutzt Service Worker für Request-Interception auf Netzwerkebene, ermöglicht nahtlosen Wechsel zwischen Mock und echter API ohne Codeänderungen."
          },
          {
            question: "Kann ich dynamische Mock-Antworten erstellen, die sich bei jedem Aufruf ändern?",
            answer: "Ja, die 'Antwortdynamik'-Option steuert die Variabilität Ihrer Mock-Daten. Geringe Dynamik erzeugt konsistente Antworten pro Request, hohe Dynamik generiert unterschiedliche Werte innerhalb definierter Datentypen. Für komplexere Dynamik können Sie in Express.js oder MSW benutzerdefinierte Logik implementieren."
          },
          {
            question: "Wie handhabe ich Authentifizierung in Mock APIs?",
            answer: "Für JSON Server können Sie das json-server-auth Plugin nutzen. Mit Express.js implementieren Sie Middleware zur Authentifizierungs-Token-Überprüfung. Mock.js und MSW können Authentifizierungs-Requests abfangen und entsprechende Tokens oder Fehler zurückgeben, um echte Authentifizierungsflows zu simulieren."
          },
          {
            question: "Kann ich Netzwerkfehler oder langsame Antworten simulieren?",
            answer: "Ja. In Express.js können Sie Middleware für zufällige Verzögerungen oder Fehler nutzen. MSW bietet die ctx.delay()-Funktion für Verzögerungen oder Fehlerantworten. JSON Server unterstützt den --delay-Parameter für feste Antwortverzögerungen."
          },
          {
            question: "Wie wechsle ich zwischen Mock und echter API in Produktion?",
            answer: "Für MSW nutzen Sie Environment Variables zur bedingten Service Worker-Aktivierung. Bei anderen Methoden ändern Sie API-Basis-URLs über Konfiguration oder implementieren Request-Routing-Proxys für einfachen Wechsel zwischen Mock und echten Endpunkten während Entwicklung und Tests."
          },
          {
            question: "Kann ich realistische Daten statt Lorem Ipsum generieren?",
            answer: "Ja, der Mock API Generator beinhaltet spezielle Feldtypen für Namen, E-Mails, Telefonnummern, Adressen und Bild-URLs zur Generierung realistischer Daten. Für erweiterte Szenarien können Sie Express.js oder MSW mit Bibliotheken wie Faker.js kombinieren."
          },
          {
            question: "Wie handhabe ich Datei-Uploads in Mock APIs?",
            description: "Für Express.js implementieren Sie Routen, die multipart/form-data Requests akzeptieren und passende Antworten zurückgeben. MSW kann Datei-Upload-Requests abfangen und Erfolgsantworten nach simulierter Verarbeitung zurückgeben, um UI-Komponenten ohne echte Dateiverarbeitung zu testen."
          }
        ]
      },
      advancedTips: {
        title: "Fortgeschrittene Mock API Integrationstechniken",
        intro: "Nutzen Sie diese erweiterten Techniken für hochwertige Mock API Implementierungen:",
        items: [
          "Implementieren Sie zustandsbehaftetes Verhalten in Mock APIs, um Persistenz zwischen Requests zu simulieren",
          "Kombinieren Sie OpenAPI-Validierung mit Mock-Servern zur Sicherstellung, dass Frontend-Requests API-Spezifikationen entsprechen",
          "Erstellen Sie Szenario-Manager zum Wechsel zwischen vordefinierten Datensätzen für verschiedene Geschäftsszenarien",
          "Implementieren Sie realistische Paginierung mit passenden Metadaten und Links zum effektiven Testen von UI-Paginierungssteuerelementen",
          "Nutzen Sie Mock Service Worker mit GraphQL zur Simulation komplexer Query-Antworten bei Beibehaltung von Typsicherheit",
          "Erstellen Sie hybride Ansätze, die bestimmte Requests an echte Backend-Services weiterleiten während andere Services gemockt werden",
          "Implementieren Sie WebSocket-Mocks zum Testen von Echtzeit-Funktionalität ohne Backend-Implementierung",
          "Richten Sie CI-Tests ein, die Frontend-Verhalten automatisch gegen Mock APIs validieren",
          "Erstellen Sie Mock API Katalogdienste zur Übersicht und Auswahl verfügbarer Mock-Endpunkte in Ihrer Organisation",
          "Implementieren Sie Antwort-Templates zur dynamischen Anpassung von Mock-Antworten basierend auf Request-Parametern oder Headern"
        ]
      }
    }
  }