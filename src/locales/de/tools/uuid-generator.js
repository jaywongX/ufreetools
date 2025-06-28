export default {
    name: 'UUID-Generator',
    description: 'Generiert zufällige UUIDs und GUIDs mit anpassbaren Optionen für Datenbank-Primärschlüssel, temporäre Dateinamen und mehr',
    options: {
      version: 'UUID-Version',
      quantity: 'Anzahl',
      format: 'Formatoptionen',
      includeDash: 'Bindestriche (-) einbeziehen',
      generateCount: 'Generierungsanzahl'
    },
    versions: {
      v1: 'Version 1 (zeitbasiert)',
      v4: 'Version 4 (zufällig)',
      v5: 'Version 5 (namensbasiert)',
      custom: 'Benutzerdefiniert'
    },
    quantities: {
      single: 'Einzelne',
      five: '5 Stück',
      ten: '10 Stück',
      twenty: '20 Stück'
    },
    formats: {
      default: 'Standard',
      base64: 'Base64',
      binary: 'Binär',
      hex: 'Hexadezimal',
      noDash: 'Ohne Bindestriche'
    },
    actions: {
      generate: 'UUID generieren',
      copy: 'Kopieren',
      copyAll: 'Alle kopieren',
      clear: 'Ergebnisse löschen',
      download: 'Als TXT herunterladen'
    },
    messages: {
      copied: 'In die Zwischenablage kopiert!',
      generated: 'UUID erfolgreich generiert',
      tooMany: 'Maximal 1000 erlaubt',
      invalidVersion: 'Ungültige UUID-Version',
      invalidNamespace: 'Ungültiger Namensraum-UUID',
      copyFailed: 'Kopieren fehlgeschlagen'
    },
    article: {
      title: "UUID-Generator: Erstellen Sie eindeutige Identifikatoren für Ihre Anwendungen",
      features: {
        title: "Was ist ein UUID-Generator?",
        description: "Ein <strong>UUID-Generator (Universally Unique Identifier)</strong> ist ein spezialisiertes Tool zur Erstellung standardisierter 128-Bit-Identifikatoren, die weltweite Eindeutigkeit garantieren. Unser <strong>Online-UUID-Generator</strong> erstellt diese zufälligen IDs gemäß RFC 4122 und bietet <strong>eindeutige ID-Werte</strong> für verschiedene Anwendungen.<br><br>Der Hauptvorteil von UUIDs liegt in ihrer extrem geringen Kollisionswahrscheinlichkeit. Jede <strong>generierte UUID</strong> besteht aus 32 hexadezimalen Zeichen, typischerweise in 5 Gruppen unterteilt (8-4-4-4-12 Format). Unser Tool konzentriert sich hauptsächlich auf Version-4-UUIDs, die mit Zufallszahlen erstellt werden und ideal für Anwendungen sind, die <strong>eindeutige Identifikatoren</strong> ohne Systemkoordination benötigen.",
        useCases: {
          title: "Praktische Anwendungsfälle für UUIDs",
          items: [
            "<strong>Datenbank-Primärschlüssel</strong>: UUIDs eignen sich hervorragend als Datenbank-IDs, besonders in verteilten Systemen, wo mehrere Server gleichzeitig Datensätze erstellen müssen",
            "<strong>Verteilte Systeme</strong>: Für Microservices und Cloud-Anwendungen bieten UUIDs eindeutige IDs, die von verschiedenen Diensten unabhängig generiert werden können",
            "<strong>Webentwicklung</strong>: Erstellung eindeutiger Sitzungs-IDs, Verfolgung von Benutzerinteraktionen oder Generierung von Einmal-Tokens für Passwortrücksetzungen",
            "<strong>Content-Management</strong>: Zuweisung eindeutiger IDs für digitale Assets, Dokumente und Inhalte in komplexen Publikationssystemen",
            "<strong>IoT-Geräteidentifikation</strong>: Bereitstellung eindeutiger IDs für IoT-Geräte, die im Netzwerk verfolgt werden müssen",
            "<strong>Spieleanwendungen</strong>: Generierung von IDs für Spielinstanzen, Spielersitzungen oder einzigartige Gegenstände in Multiplayer-Umgebungen"
          ]
        }
      },
      faq: {
        title: "Häufige Fragen zur UUID-Generierung",
        items: [
          {
            question: "Was unterscheidet die verschiedenen UUID-Versionen?",
            answer: "UUIDs gibt es in mehreren Versionen mit unterschiedlichen Generierungsmethoden: Version 1 verwendet Zeitstempel und MAC-Adresse, Version 3 Namensraum und MD5-Hash, Version 4 (am häufigsten) Zufallszahlen und Version 5 Namensraum und SHA-1-Hash. Unser Generator konzentriert sich auf Version 4, die beste Kombination aus Einzigartigkeit, Sicherheit und Generierungskomfort bietet. Version-4-UUIDs werden mit Zufallszahlen erstellt und eignen sich ideal für Anwendungen, die Einzigartigkeit ohne systemspezifische Informationen garantieren müssen."
          },
          {
            question: "Sind UUIDs für sensible Anwendungen sicher?",
            answer: "Aufgrund der Zufälligkeit und Unvorhersehbarkeit von Version-4-UUIDs bieten sie für die meisten Anwendungen gute Sicherheit. Mit 122 Zufallsbits ist die Wahrscheinlichkeit zweier gleicher UUIDs extrem gering (ca. 1 zu 5,3×10³⁸⁸). Sie erfüllen jedoch nicht alle kryptografischen Sicherheitsanforderungen. Für hochsensible Anwendungen sollten UUIDs mit zusätzlichen Sicherheitsmaßnahmen kombiniert werden. UUIDs sind für Einzigartigkeit, nicht für Verschlüsselung konzipiert und sollten nicht zum Verbergen sensibler Daten verwendet werden."
          },
          {
            question: "Können UUIDs als Datenbank-Primärschlüssel verwendet werden?",
            answer: "Ja, UUIDs eignen sich hervorragend als Datenbank-Primärschlüssel, besonders in verteilten Systemen. Hauptvorteile sind: Keine zentrale Koordination bei der Generierung nötig, keine Konflikte beim Zusammenführen von Datenbanken, erhöhte Privatsphäre da sequentielle IDs keine Datensatzanzahl verraten, und vereinfachte Entwicklung verteilter Systeme. Nachteile sind höherer Speicherbedarf (16 Byte vs. 4 Byte bei Integers), mögliche Auswirkungen auf Indexleistung und Fragmentierung in einigen Datenbanken. Viele moderne Datenbanken sind für UUID-Speicher optimiert, besonders in verteilten Anwendungen überwiegen meist die Vorteile."
          },
          {
            question: "Sind UUIDs garantiert weltweit eindeutig?",
            answer: "Obwohl UUIDs für praktische Zwecke eindeutig sind, garantieren sie mathematisch keine absolute Einzigartigkeit. Version-4-UUIDs haben 2¹²² mögliche Werte (ca. 5,3×10³⁶⁶), was Kollisionen praktisch unmöglich macht. Um dies zu veranschaulichen: Bei einer Milliarde UUIDs pro Sekunde würde es über 100 Milliarden Jahre dauern, bis eine 50%ige Kollisionswahrscheinlichkeit besteht. Für praktische Anwendungen können UUIDs als weltweit eindeutig betrachtet werden. RFC 4122 beschreibt UUIDs als 'praktisch eindeutig' statt 'garantiert eindeutig', um diese theoretische Möglichkeit anzuerkennen, die in der Praxis vernachlässigbar ist."
          },
          {
            question: "Wie wirkt sich das Entfernen von Bindestrichen auf UUIDs aus?",
            answer: "Das Entfernen von Bindestrichen beeinflusst weder Einzigartigkeit noch Gültigkeit einer UUID - es ist rein eine Formatfrage. Standard-UUIDs enthalten Bindestriche (z.B. 550e8400-e29b-41d4-a716-446655440000) für bessere Lesbarkeit, aber Versionen ohne Bindestriche (550e8400e29b41d4a716446655440000) enthalten dieselben Informationen. Manche Systeme bevorzugen bindestrichlose UUIDs um Speicherplatz zu sparen oder Formatvorgaben zu erfüllen. Unser Generator bietet beide Optionen. In Datenbanken entfernen viele Entwickler Bindestriche zur Effizienzsteigerung, während in Benutzeroberflächen die lesbarere Version mit Bindestrichen angezeigt wird."
          }
        ]
      },
      guide: {
        title: "So verwenden Sie unseren UUID-Generator",
        steps: [
          "Wählen Sie Ihre bevorzugte <strong>UUID-Version</strong> (für die meisten Anwendungen wird Version 4 empfohlen, da sie Zufallszahlen für Einzigartigkeit verwendet)",
          "Wählen Sie die gewünschte <strong>Anzahl an UUIDs</strong> (1, 5, 10 oder 20)",
          "Konfigurieren Sie <strong>Formatoptionen</strong> durch An- oder Abwählen der 'Bindestriche einbeziehen'-Option, je nachdem ob Sie das Standardformat (8-4-4-4-12) oder eine durchgehende Zeichenkette benötigen",
          "Klicken Sie auf <strong>'UUID generieren'</strong>, um eindeutige IDs gemäß Ihren Einstellungen zu erstellen",
          "<strong>Kopieren Sie einzelne UUIDs</strong> durch Klick auf das Kopiersymbol neben jeder UUID oder verwenden Sie 'Ergebnisse löschen' für einen Neustart"
        ]
      },
      conclusion: "Unser UUID-Generator bietet eine einfache, effiziente Methode zur Erstellung standardisierter eindeutiger Identifikatoren für verschiedene Anwendungen. Durch anpassbare Versionen und Formate erfüllt er unterschiedliche Systemanforderungen, während die grundlegende Einzigartigkeit erhalten bleibt, die UUIDs im modernen Computing so wertvoll macht. Egal ob Sie verteilte Anwendungen entwickeln, Datenbanken einrichten oder digitale Inhalte verwalten - dieses Tool stellt sicher, dass Sie schnell die benötigten eindeutigen IDs generieren können, ohne Konflikte zwischen Systemen befürchten zu müssen."
    }
  }