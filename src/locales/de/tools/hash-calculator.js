export default {
    name: 'Online Hash-Rechner | Unterstützt SHA-256, MD5, SHA-3, BLAKE3, SM3 und mehr',
    description: 'Kostenloser Online-Hash-Rechner mit Unterstützung für verschiedene Verschlüsselungs- und Prüfalgorithmen wie SHA-256, MD5, SHA-3, BLAKE3 und SM3. Ideal für Dateiintegritätsprüfungen und Datensicherheitsverarbeitung.',
    
    input: {
      title: 'Eingabe',
      text: 'Texteingabe',
      file: 'Dateieingabe',
      textPlaceholder: 'Text eingeben, für den Hash berechnet werden soll...',
      fileSelect: 'Datei auswählen',
      fileDrop: 'Datei hier ablegen oder zum Hochladen klicken',
      fileSelected: 'Ausgewählte Datei: {name}',
      fileSize: '{size}',
      removeFile: 'Datei entfernen',
      localProcessing: 'Dateien werden lokal verarbeitet und nicht auf Server hochgeladen',
      encoding: 'Kodierung',
      selectAlgorithm: 'Hash-Algorithmus auswählen',
      utf8: 'UTF-8',
      ascii: 'ASCII',
      latin1: 'Latin1',
      calculate: 'Hash berechnen',
      calculating: 'Berechnung läuft...',
      clear: 'Eingabe löschen',
      hashValue: 'Hash-Wert'
    },
    
    algorithms: {
      title: 'Algorithmen',
      selectAll: 'Alle auswählen',
      deselectAll: 'Alle abwählen',
      md5: 'MD5',
      sha1: 'SHA-1',
      sha224: 'SHA-224',
      sha256: 'SHA-256',
      sha384: 'SHA-384',
      sha512: 'SHA-512',
      sha3_224: 'SHA3-224',
      sha3_256: 'SHA3-256',
      sha3_384: 'SHA3-384',
      sha3_512: 'SHA3-512',
      ripemd160: 'RIPEMD-160',
      blake2b: 'BLAKE2b',
      blake2s: 'BLAKE2s',
      blake3: 'BLAKE3',
      keccak224: 'Keccak-224',
      keccak256: 'Keccak-256',
      keccak384: 'Keccak-384',
      keccak512: 'Keccak-512',
      whirlpool: 'Whirlpool',
      crc32: 'CRC32',
      hmac: 'HMAC-Optionen',
      key: 'HMAC-Schlüssel',
      keyPlaceholder: 'HMAC-Schlüssel eingeben'
    },
    
    results: {
      title: 'Hash-Ergebnisse',
      algorithm: 'Algorithmus',
      digest: 'Digest',
      noInput: 'Text eingeben oder Datei auswählen, um Hash zu berechnen',
      calculating: 'Berechnung läuft...',
      copy: 'Kopieren',
      copied: 'In Zwischenablage kopiert',
      copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren',
      copyAll: 'Alle kopieren',
      download: 'Ergebnisse herunterladen',
      fileInfo: 'Dateiinformationen',
      fileName: 'Name',
      fileSize: 'Größe',
      fileType: 'Typ',
      lastModified: 'Letzte Änderung',
      hexFormat: 'Hexadezimalformat',
      base64Format: 'Base64-Format',
      upperHexFormat: 'Hexadezimalformat (Großbuchstaben)',
      hashValue: 'Hash-Wert',
      allHashesTitle: 'Ergebnisse aller Hash-Algorithmen',
      export: 'Als CSV exportieren',
      copyToClipboard: 'In Zwischenablage kopieren'
    },
    
    verification: {
      title: 'Hash-Überprüfung',
      inputVerifyHash: 'Zu prüfenden Hash-Wert eingeben',
      placeholder: 'Hash-Wert zum Vergleich eingeben...',
      paste: 'Hash zum Prüfen einfügen',
      matches: 'Hash stimmt überein!',
      doesNotMatch: 'Hash stimmt nicht überein',
      notFound: 'Algorithmus nicht gefunden',
      verify: 'Überprüfen',
      autoDetect: 'Algorithmus automatisch erkennen',
      result: 'Überprüfungsergebnis'
    },
    
    options: {
      title: 'Optionen',
      uppercase: 'Ausgabe in Großbuchstaben',
      showTiming: 'Berechnungszeit anzeigen',
      autoCalculate: 'Automatische Berechnung',
      formatOutput: 'Lange Ausgabe formatieren',
      binaryOutput: 'Binäransicht (für Nicht-Textdateien)',
      compareHashes: 'Hash-Werte vergleichen',
      hmacMode: 'HMAC-Modus aktivieren',
      showAllHashes: 'Hash-Werte aller Algorithmen anzeigen'
    },
    
    tools: {
      title: 'Werkzeuge',
      batchProcessing: 'Stapelverarbeitung',
      fileHashTool: 'Datei-Hash-Verzeichnis',
      hashIdentifier: 'Hash-Typ-Identifikator',
      hmacGenerator: 'HMAC-Generator',
      checksumVerifier: 'Prüfsummenprüfer',
      passwordHasher: 'Passwort-Hasher'
    },
    
    batchTool: {
      title: 'Stapelverarbeitung',
      addFiles: 'Dateien hinzufügen',
      processFiles: 'Dateien verarbeiten',
      clearAll: 'Alles löschen',
      fileName: 'Dateiname',
      algorithm: 'Algorithmus',
      status: 'Status',
      actions: 'Aktionen',
      waiting: 'Wartend',
      processing: 'In Bearbeitung',
      complete: 'Abgeschlossen',
      failed: 'Fehlgeschlagen',
      remove: 'Entfernen',
      filesSelected: '{count} Dateien ausgewählt',
      exportResults: 'Ergebnisse exportieren',
      selectAlgorithm: 'Algorithmus für alle Dateien auswählen'
    },
    
    messages: {
      fileTooBig: 'Datei zu groß. Maximale Größe: 100MB.',
      hashCalculated: 'Hash erfolgreich berechnet',
      invalidInput: 'Ungültige Eingabe',
      readError: 'Datei konnte nicht gelesen werden',
      processingError: 'Fehler bei der Dateiverarbeitung: {error}',
      algorithmNotAvailable: 'Algorithmus nicht verfügbar. Bitte benötigte Bibliotheken installieren.',
      algorithmFallback: '{algorithm} nicht verfügbar, verwende {fallback} als Alternative',
      moduleNotReady: '{name} Modul nicht bereit',
      algorithmError: '{algorithm} Fehler: {error}'
    },
    
    security: {
      warning: 'Verwendung von Hash-Tools über unsichere HTTP-Verbindungen birgt Sicherheitsrisiken'
    },
    
    algorithmDetails: {
      title: 'Über Hash-Algorithmen',
      usage: 'Häufige Verwendungen',
      safe: 'Sicherheit',
      md2: {
        name: 'MD2 (128 Bit)',
        description: 'MD2 ist eine weit verbreitete Hash-Funktion, die einen 128-Bit (16 Byte) Hash-Wert erzeugt, typischerweise als 32 hexadezimale Zeichen dargestellt.',
        usage: 'Dateiintegritätsprüfungen, Passwortspeicherung (unsicher)',
        security: 'Nachweislich kollisionsanfällig; nicht für sicherheitskritische Anwendungen geeignet.'
      },
      md4: {
        name: 'MD4 (128 Bit)',
        description: 'MD4 ist eine weit verbreitete Hash-Funktion, die einen 128-Bit (16 Byte) Hash-Wert erzeugt, typischerweise als 32 hexadezimale Zeichen dargestellt.',
        usage: 'Dateiintegritätsprüfungen, Passwortspeicherung (unsicher)',
        security: 'Nachweislich kollisionsanfällig; nicht für sicherheitskritische Anwendungen geeignet.'
      },
      md5: {
        name: 'MD5 (128 Bit)',
        description: 'MD5 ist eine weit verbreitete Hash-Funktion, die einen 128-Bit (16 Byte) Hash-Wert erzeugt, typischerweise als 32 hexadezimale Zeichen dargestellt.',
        usage: 'Dateiintegritätsprüfungen, Passwortspeicherung (unsicher)',
        security: 'Nachweislich kollisionsanfällig; nicht für sicherheitskritische Anwendungen geeignet.'
      },
      sha1: {
        name: 'SHA-1 (160 Bit)',
        description: 'SHA-1 ist eine kryptografische Hash-Funktion, die einen 160-Bit (20 Byte) Hash-Wert erzeugt, typischerweise als 40 hexadezimale Zeichen dargestellt.',
        usage: 'Versionskontrollsysteme (wie Git), Dateiintegritätsprüfungen',
        security: 'Anfällig für Kollisionsangriffe; nicht für sicherheitskritische Anwendungen empfohlen.'
      },
      sha224: {
        name: 'SHA-224 (224 Bit)',
        description: 'SHA-224 ist Teil der SHA-2-Familie und erzeugt 224-Bit (28 Byte) Hash-Werte.',
        usage: 'Für Anwendungen mit begrenztem Platz, aber hohen Sicherheitsanforderungen',
        security: 'Gute Sicherheit, abgeschnittene Version von SHA-256'
      },
      sha256: {
        name: 'SHA-256 (256 Bit)',
        description: 'SHA-256 gehört zur SHA-2-Familie und erzeugt 256-Bit (32 Byte) Hash-Werte, typischerweise als 64 hexadezimale Zeichen dargestellt.',
        usage: 'Digitale Signaturen, Zertifikate, Passwortspeicherung, Blockchain',
        security: 'Aktuell als sicher angesehen, weit verbreitet in hochsicheren Anwendungen.'
      },
      dsha256: {
        name: 'Double SHA-256',
        description: 'Double SHA-256 ist eine kryptografische Hash-Funktion, die SHA-256 zweimal hintereinander anwendet, also SHA-256(SHA-256(x)).',
        usage: 'Wird in Bitcoin und anderen Kryptowährungen für Block-Hashes, Transaktions-IDs und Adressgenerierung verwendet',
        security: 'Bietet gleiche Sicherheitsgarantien wie SHA-256, aber mit zusätzlicher Sicherheitsebene gegen Kollisionsangriffe'
      },
      sha384: {
        name: 'SHA-384 (384 Bit)',
        description: 'SHA-384 ist eine abgeschnittene Version von SHA-512 und erzeugt 384-Bit (48 Byte) Hash-Werte.',
        usage: 'Für Anwendungen mit höheren Sicherheitsanforderungen als SHA-256',
        security: 'Bietet bessere Sicherheit als SHA-256, keine bekannten Angriffsmethoden.'
      },
      sha512: {
        name: 'SHA-512 (512 Bit)',
        description: 'SHA-512 ist der längste Standardalgorithmus der SHA-2-Familie und erzeugt 512-Bit (64 Byte) Hash-Werte.',
        usage: 'Für Anwendungen mit höchsten Sicherheitsanforderungen',
        security: 'Bietet höchste Sicherheit, keine bekannten effektiven Angriffe.'
      },
      sha512_224: {
        name: 'SHA-512/224 (224 Bit)',
        description: 'SHA-512/224 ist eine Variante von SHA-512 mit auf 224 Bit gekürzter Ausgabe.',
        usage: 'Bietet gleiche Länge wie SHA-224, aber mit SHA-512-Interna',
        security: 'Bessere Performance für lange Daten bei gleichbleibender Sicherheit'
      },
      sha512_256: {
        name: 'SHA-512/256 (256 Bit)',
        description: 'SHA-512/256 ist eine Variante von SHA-512 mit auf 256 Bit gekürzter Ausgabe.',
        usage: 'Bessere Performance als SHA-256 auf 64-Bit-Systemen',
        security: 'Gleichwertige Sicherheit wie SHA-256, aber effizienter auf bestimmter Hardware'
      },
      sha3_224: {
        name: 'SHA3-224 (224 Bit)',
        description: 'SHA3-224 ist Teil des SHA-3-Standards und erzeugt 224-Bit Hash-Werte.',
        usage: 'Für mittlere Sicherheitsanforderungen mit Resistenz gegen Quantencomputer',
        security: 'Von NIST zertifiziert, bietet gute Sicherheitsgarantien'
      },
      sha3_256: {
        name: 'SHA3-256 (256 Bit)',
        description: 'SHA3-256 ist Teil des SHA-3-Standards mit komplett anderer interner Struktur als SHA-2.',
        usage: 'Für langfristige Sicherheit mit Resistenz gegen zukünftige Angriffe inkl. Quantencomputer',
        security: 'Entwickelt um zukünftigen Angriffen zu widerstehen, inkl. Quantencomputern.'
      },
      sha3_384: {
        name: 'SHA3-384 (384 Bit)',
        description: 'SHA3-384 ist Teil des SHA-3-Standards und erzeugt 384-Bit Hash-Werte.',
        usage: 'Für hohe Sicherheitsanforderungen mit Resistenz gegen Quantencomputer',
        security: 'Bietet bessere Sicherheit als SHA3-256, ideal für sensible Daten'
      },
      sha3_512: {
        name: 'SHA3-512 (512 Bit)',
        description: 'SHA3-512 ist der sicherste Algorithmus der SHA-3-Familie.',
        usage: 'Für höchste Sicherheitsanforderungen mit Resistenz gegen Quantencomputer',
        security: 'Bietet höchste Sicherheitsgarantien, sicherster SHA-3-Algorithmus.'
      },
      sm3: {
        name: 'SM3 (256 Bit)',
        description: 'SM3 ist ein kryptografischer Hash-Standard der chinesischen Regierung mit 256-Bit Ausgabe.',
        usage: 'Chinesische kommerzielle Kryptografie, Zertifikate und E-Government-Systeme',
        security: 'Ähnlich SHA-2 aber mit optimierter Angriffsresistenz, in China weit verbreitet'
      },
      ripemd160: {
        name: 'RIPEMD-160 (160 Bit)',
        description: 'RIPEMD-160 ist eine Hash-Funktion des europäischen RIPE-Projekts mit 160-Bit Ausgabe.',
        usage: 'Bitcoin-Adressgenerierung, Blockchain-Anwendungen',
        security: 'Sicherer als gleichlanges SHA-1, aber weniger verbreitet.'
      },
      crc32: {
        name: 'CRC32 (32 Bit)',
        description: 'CRC32 ist eine zyklische Redundanzprüfung, hauptsächlich für Fehlererkennung.',
        usage: 'Datenintegritätsprüfungen, Netzwerkkommunikation, Datenübertragungsvalidierung',
        security: 'Nicht für kryptografische Sicherheit geeignet, nur für Fehlererkennung'
      },
      murmur3_x86_32: {
        name: 'MurmurHash3 x86 (32 Bit)',
        description: 'MurmurHash3 ist eine nicht-kryptografische Hash-Funktion mit hoher Performance und geringer Kollisionsrate, 32-Bit Version für platzsparende Anwendungen.',
        usage: 'Hash-Tabellen, Bloom-Filter, Cache-Systeme, Datenpartitionierung',
        security: 'Nicht für Sicherheitsanwendungen, aber exzellent für Performance-kritische Szenarien'
      },
      murmur3_x86_128: {
        name: 'MurmurHash3 x86 (128 Bit)',
        description: '128-Bit Variante von MurmurHash3 mit größerem Hash-Raum und geringerer Kollisionswahrscheinlichkeit, ideal für große Datensätze.',
        usage: 'Große Hash-Tabellen, Deduplizierung, konsistentes Hashing in verteilten Systemen, inhaltsadressierbarer Speicher',
        security: 'Wie 32-Bit Version nicht kryptografisch, aber geringere Kollisionswahrscheinlichkeit für hohe Eindeutigkeit'
      },
      murmur3_x64_128: {
        name: 'MurmurHash3 x64 (128 Bit)',
        description: '128-Bit Variante von MurmurHash3 mit größerem Hash-Raum und geringerer Kollisionswahrscheinlichkeit, ideal für große Datensätze.',
        usage: 'Große Hash-Tabellen, Deduplizierung, konsistentes Hashing in verteilten Systemen, inhaltsadressierbarer Speicher',
        security: 'Wie 32-Bit Version nicht kryptografisch, aber geringere Kollisionswahrscheinlichkeit für hohe Eindeutigkeit'
      },
      blake2b: {
        name: 'BLAKE2b (512 Bit)',
        description: 'BLAKE2b ist eine schnelle und sichere Hash-Funktion, optimiert für moderne CPU-Architekturen.',
        usage: 'Großskalige Datenverarbeitung, Hash-Tabellen, String-Vergleiche',
        security: 'Entwickelt für Geschwindigkeit und gute Hash-Verteilung, aber keine kryptografischen Garantien'
      },
      blake2s: {
        name: 'BLAKE2s (256 Bit)',
        description: 'BLAKE2s ist eine schnelle und sichere Hash-Funktion, optimiert für moderne CPU-Architekturen.',
        usage: 'Großskalige Datenverarbeitung, Hash-Tabellen, String-Vergleiche',
        security: 'Entwickelt für Geschwindigkeit und gute Hash-Verteilung, aber keine kryptografischen Garantien'
      },
      blake3: {
        name: 'BLAKE3 (256 Bit)',
        description: 'BLAKE3 ist eine schnelle und sichere Hash-Funktion, optimiert für moderne CPU-Architekturen.',
        usage: 'Großskalige Datenverarbeitung, Hash-Tabellen, String-Vergleiche',
        security: 'Entwickelt für Geschwindigkeit und gute Hash-Verteilung, aber keine kryptografischen Garantien'
      },
      keccak224: {
        name: 'Keccak-224 (224 Bit)',
        description: 'Keccak-224 ist der ursprüngliche SHA-3-Algorithmus mit 224-Bit Ausgabe.',
        usage: 'Ethereum und andere Blockchain-Anwendungen, Kryptosysteme',
        security: 'Starke Sicherheit, in Blockchain-Technologien verbreiteter als standardisierte SHA-3-Varianten'
      },
      keccak256: {
        name: 'Keccak-256 (256 Bit)',
        description: 'Keccak-256 ist die am weitesten verbreitete Keccak-Variante mit 256-Bit Ausgabe.',
        usage: 'Ethereum Smart Contracts, Blockchain-Transaktionen, digitale Signaturen',
        security: 'In Blockchain-Anwendungen vertrauenswürdig, leicht unterschiedlich zu standardisiertem SHA3-256'
      },
      keccak384: {
        name: 'Keccak-384 (384 Bit)',
        description: 'Keccak-384 ist eine Variante der Keccak-Familie mit 384-Bit Ausgabe.',
        usage: 'Für höhere Sicherheitsanforderungen als Keccak-256',
        security: 'Sehr starke Sicherheitsgarantien, aber weniger verbreitet als Keccak-256'
      },
      keccak512: {
        name: 'Keccak-512 (512 Bit)',
        description: 'Keccak-512 ist der längste Standardalgorithmus der Keccak-Familie mit 512-Bit Ausgabe.',
        usage: 'Für höchste Sicherheitsanforderungen mit maximaler Kollisionsresistenz',
        security: 'Höchste Sicherheitsstufe der Keccak-Familie, für sensibelste Daten'
      },
      shake128: {
        name: 'SHAKE128 (128 Bit)',
        description: 'SHAKE128 ist Teil der SHA-3-Familie mit variabler Ausgabelänge, standardmäßig 256-Bit Hash-Werte.',
        usage: 'Kryptografische Anwendungen mit variabler Ausgabe, Schlüsselableitungsfunktionen',
        security: 'Gute Sicherheit, von NIST anerkannt'
      },
      shake256: {
        name: 'SHAKE256 (256 Bit)',
        description: 'SHAKE256 ist Teil der SHA-3-Familie mit variabler Ausgabelänge, standardmäßig 512-Bit Hash-Werte.',
        usage: 'Für höhere Sicherheitsanforderungen mit längerer Hash-Ausgabe',
        security: 'Bessere Sicherheit als SHAKE128, ideal für sensible Daten'
      },
      cshake128: {
        name: 'cSHAKE128 (anpassbare variable Ausgabe)',
        description: 'cSHAKE128 ist eine anpassbare Version von SHAKE128 mit Unterstützung für benutzerdefinierte Strings und Funktionsnamen.',
        usage: 'Für maßgeschneiderte Hash-Anforderungen, NIST-konforme Schlüsselableitung, Kryptoprotokolle',
        security: 'Gleichwertige Sicherheit wie SHAKE128 mit Anpassungsmöglichkeiten'
      },
      cshake256: {
        name: 'cSHAKE256 (anpassbare variable Ausgabe)',
        description: 'cSHAKE256 ist eine anpassbare Version von SHAKE256 mit Unterstützung für benutzerdefinierte Strings und Funktionsnamen.',
        usage: 'Für hochsichere maßgeschneiderte Hash-Anforderungen, NIST-zertifizierte Ableitungsfunktionen, Kryptoprotokolle',
        security: 'Starke Sicherheitsgarantien wie SHAKE256 mit Anpassungsmöglichkeiten'
      }
    },
    
    article: {
      title: "Hash-Rechner: Generieren und Prüfen kryptografischer Hash-Werte",
      intro: "Unser <strong>Online-Hash-Rechner</strong> bietet eine einfache Möglichkeit, kryptografische Hash-Werte für beliebige Texte oder Dateien zu generieren. Dieses kostenlose Hash-Generierungstool unterstützt verschiedene Algorithmen inklusive MD5, SHA-1, SHA-256, SHA-512, RIPEMD, BLAKE und mehr.",
      features: {
        title: "Hash-Funktionen und ihre Anwendungen",
        description: "<strong>Hash-Funktionen</strong> sind mathematische Algorithmen, die Eingabedaten beliebiger Größe in einen festen Ausgabestring umwandeln. Der <strong>Hash-Rechner</strong> von UFreeTools hilft Ihnen, diese digitalen Fingerabdrücke für Sicherheitsüberprüfungen, Datenintegritätsprüfungen oder Blockchain-Anwendungen zu berechnen.<br><br>Im Gegensatz zu Verschlüsselung sind Hash-Funktionen Einwegoperationen - sie wandeln Daten in einen eindeutigen <strong>Hash-Wert</strong> um, der nicht rückgängig gemacht werden kann. Eine Schlüsseleigenschaft ist, dass selbst kleine Änderungen der Eingabe zu komplett unterschiedlichen Ausgaben führen, was diese <strong>Hash-Algorithmen</strong> ideal für Datenintegritätsprüfungen und Manipulationserkennung macht.",
        useCases: {
          title: "Praktische Anwendungen von Hash-Funktionen",
          items: [
            "<strong>Dateiintegritätsprüfung</strong>: Vor der Installation können Sie mit unserem <strong>Prüfsummen-Rechner</strong> durch Vergleich mit dem vom Entwickler bereitgestellten Hash-Wert prüfen, ob Dateien manipuliert wurden.",
            "<strong>Daten-Deduplizierung</strong>: Speichersysteme nutzen <strong>Hash-Werte</strong> zur Identifikation doppelter Dateien unabhängig vom Dateinamen.",
            "<strong>Passwortsicherheit</strong>: Moderne Authentifizierungssysteme speichern <strong>Passwort-Hashes</strong> statt Klartext-Passwörtern.",
            "<strong>Digitale Forensik</strong>: Ermittler nutzen <strong>Hash-Rechner</strong> zur Erstellung digitaler Fingerabdrücke als Beweismittel.",
            "<strong>Blockchain-Anwendungen</strong>: <strong>Kryptografische Hashes</strong> bilden die Grundlage der Blockchain-Technologie.",
            "<strong>Inhaltsvalidierung</strong>: Autoren können <strong>Hash-Werte</strong> ihrer Werke veröffentlichen zur Authentizitätsprüfung."
          ]
        },
        toolAdvantages: {
          title: "Vorteile unseres Hash-Rechners",
          items: [
            "Unterstützt über 30 Hash-Algorithmen von MD5 bis BLAKE3",
            "Lokale Verarbeitung für maximalen Datenschutz",
            "Hash-Werte gegen Referenzwerte prüfen",
            "Mehrere Ausgabeformate (Hex und Base64)",
            "Verarbeitet Texte und Dateien bis 100MB",
            "Vergleich mehrerer Algorithmen gleichzeitig"
          ]
        }
      },
      faq: {
        title: "Häufige Fragen zu Hash-Funktionen",
        items: [
          {
            question: "Was ist der Unterschied zwischen MD5, SHA-1 und SHA-256?",
            answer: "Dies sind verschiedene kryptografische Hash-Algorithmen mit unterschiedlicher Sicherheit und Ausgabelänge. <strong>MD5</strong> erzeugt 128-Bit (16 Byte) Hashes, gilt aber aufgrund von Kollisionsangriffen als gebrochen. <strong>SHA-1</strong> erzeugt 160-Bit (20 Byte) Hashes, ist aber ebenfalls nicht mehr für sicherheitskritische Anwendungen empfohlen. <strong>SHA-256</strong> aus der SHA-2-Familie erzeugt 256-Bit (32 Byte) Hashes und gilt aktuell als sicher. Für hochsensible Daten empfehlen wir SHA-512 oder SHA3, während MD5 und SHA-1 noch für nicht-sicherheitskritische Anwendungen wie Prüfsummen geeignet sind. Mehr Informationen zur Hash-Sicherheit finden Sie beim <a href='https://csrc.nist.gov/projects/hash-functions' target='_blank' rel='noopener noreferrer'>US National Institute of Standards and Technology (NIST)</a>."
          },
          {
            question: "Wie sicher sind kryptografische Hash-Funktionen?",
            answer: "Die Sicherheit von Hash-Funktionen hängt von drei Schlüsseleigenschaften ab: Kollisionsresistenz (Schwierigkeit, zwei Eingaben mit gleichem Hash zu finden), Einwegfunktion (Unmöglichkeit, die Eingabe aus dem Hash zu rekonstruieren) und Zweitbildresistenz (Schwierigkeit, eine zweite Eingabe mit gleichem Hash wie eine gegebene Eingabe zu finden). Moderne Algorithmen wie <strong>SHA-256</strong>, <strong>SHA-512</strong> und <strong>SHA3</strong> gelten als kryptografisch sicher, während ältere Algorithmen wie MD5 und SHA-1 bekannte Schwachstellen haben. Sicherheitsstandards entwickeln sich mit zunehmender Rechenleistung weiter. Für hochsichere Anwendungen sollten stets die neuesten empfohlenen Hash-Funktionen verwendet werden. Aktuelle Entwicklungen können Sie auf Ressourcen wie <a href='https://www.schneier.com/blog/archives/2005/02/cryptanalysis_o.html' target='_blank' rel='noopener noreferrer'>Bruce Schneiers Kryptografie-Blog</a> verfolgen."
          },
          {
            question: "Kann ich den Hash-Rechner zur Dateiintegritätsprüfung nutzen?",
            answer: "Ja, unser <strong>Online-Hash-Rechner</strong> ist ideal für Dateiintegritätsprüfungen. Viele Softwareanbieter veröffentlichen Hash-Werte ihrer Dateien. Zur Überprüfung: 1) Wählen Sie die heruntergeladene Datei in unserem Tool aus, 2) Wählen Sie den gleichen Hash-Algorithmus wie der Anbieter (meist SHA-256), 3) Berechnen Sie den Hash, 4) Vergleichen Sie mit dem veröffentlichten Wert. Bei Übereinstimmung ist die Datei unverändert. Dieser Prozess schützt sowohl vor versehentlichen Download-Fehlern als auch vor böswilligen Manipulationen. Da die Verarbeitung lokal im Browser erfolgt, bleibt Ihre Privatsphäre gewahrt. Sie können Hash-Werte von Anbietern wie <a href='https://ubuntu.com/download/desktop/thank-you' target='_blank' rel='noopener noreferrer'>Ubuntu</a> oder <a href='https://www.python.org/downloads/' target='_blank' rel='noopener noreferrer'>Python</a> überprüfen, die Hash-Werte ihrer Installationsdateien veröffentlichen."
          },
          {
            question: "Ist dieser Hash-Rechner für Passwort-Hashing geeignet?",
            answer: "Während unser <strong>Hash-Generator</strong> die Funktionsweise von Passwort-Hashing demonstrieren kann, sollten für echte Passwortspeicherung spezielle Passwort-Hashing-Funktionen wie bcrypt, Argon2 oder PBKDF2 verwendet werden. Diese enthalten wichtige Sicherheitsfeatures wie Salting (Hinzufügen zufälliger Daten vor dem Hashing) und Key Stretching (absichtliche Verlangsamung des Hash-Prozesses) zum Schutz gegen Rainbow Tables und Brute-Force-Angriffe. Unser Tool ist ideal für Bildungszwecke oder zum Testen allgemeiner Hash-Funktionen, aber Produktionssysteme sollten spezialisierte Passwort-Hashing-Bibliotheken mit entsprechenden Sicherheitsmaßnahmen verwenden. Mehr Informationen zur sicheren Passwortspeicherung finden Sie im <a href='https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html' target='_blank' rel='noopener noreferrer'>OWASP Password Storage Cheat Sheet</a>."
          },
          {
            question: "Wie vergleiche/überprüfe ich Hash-Werte in verschiedenen Formaten?",
            answer: "Unser <strong>Hash-Überprüfungstool</strong> macht den Vergleich von Hash-Werten einfach, unabhängig von Formatunterschieden. Das Tool zeigt Ergebnisse in mehreren Formaten an, inklusive Kleinbuchstaben-Hex (häufigstes Format), Großbuchstaben-Hex und Base64-Kodierung. Zur Überprüfung: 1) Berechnen Sie den Hash Ihrer Daten, 2) Geben Sie den zu vergleichenden Hash im Überprüfungsbereich ein, 3) Das Tool vergleicht sie automatisch unter Berücksichtigung der Groß-/Kleinschreibung. Für algorithmenübergreifende Vergleiche müssen Sie den Hash mit dem gleichen Algorithmus wie der Referenzhash neu berechnen, da verschiedene Algorithmen selbst bei gleichen Eingabedaten komplett unterschiedliche Ausgaben erzeugen."
          },
          {
            question: "Welchen Hash-Algorithmus sollte ich für meine Anforderungen verwenden?",
            answer: "Die Wahl des besten Algorithmus hängt von Ihren spezifischen Anforderungen ab:<br><strong>Allgemeiner Einsatz & hohe Sicherheit</strong>: SHA-256 bietet gute Balance zwischen Sicherheit und Performance.<br><strong>Blockchain-Anwendungen</strong>: SHA-256 (Bitcoin) oder Keccak-256 (Ethereum) sind Industriestandards.<br><strong>Extrem sensible Daten</strong>: SHA-512 oder SHA3-512 bieten höchste Sicherheit.<br><strong>Performance-kritische Anwendungen</strong>: BLAKE2 oder BLAKE3 bieten Sicherheit mit hervorragender Geschwindigkeit.<br><strong>Kompatibilität mit Alt-Systemen</strong>: SHA-1 oder MD5 können erforderlich sein, beachten Sie aber deren Sicherheitseinschränkungen.<br><strong>Dateiprüfsummen</strong>: CRC32 ist schnell aber nur für Fehlererkennung; für sichere Prüfsummen empfehlen wir SHA-256.<br>Im Zweifelsfall ist SHA-256 eine zuverlässige Standardwahl für die meisten modernen Sicherheitsanwendungen. Experimentieren Sie mit verschiedenen Algorithmen in unserem <a href='https://www.ufreetools.com/tools/hash-calculator' target='_blank'>Hash-Rechner</a> und vergleichen Sie deren Ausgaben."
          }
        ]
      },
      guide: {
        title: "Schritt-für-Schritt-Anleitung zur Verwendung des Hash-Rechners",
        intro: "Folgen Sie diesen einfachen Schritten, um Hash-Werte für Texte oder Dateien zu generieren und zu überprüfen:",
        step1: "<strong>Eingabetyp wählen</strong>: Wählen Sie zwischen \"Text\" oder \"Datei\" je nachdem, was Sie hashen möchten. Texteingabe eignet sich für Strings, Passwörter oder kleine Datenmengen, während die Dateieingabe ganze Dateien beliebigen Typs verarbeitet.",
        step2: "<strong>Hash-Algorithmus auswählen</strong>: Wählen Sie einen geeigneten <strong>Hash-Algorithmus</strong> aus dem Dropdown-Menü. Für allgemeine Zwecke und hohe Sicherheit empfehlen wir SHA-256. Für bestimmte Systeme können MD5, SHA-1 oder andere Algorithmen erforderlich sein.",
        step3: "<strong>Daten eingeben</strong>: Für Texteingabe geben oder fügen Sie Ihren Text ins Eingabefeld ein. Für Dateieingabe klicken Sie auf den Upload-Bereich oder ziehen Ihre Datei per Drag & Drop hinein. Die <strong>Hash-Funktion</strong> verarbeitet diese Eingabe und erzeugt einen eindeutigen Digest.",
        step4: "<strong>Kodierungsoptionen einstellen</strong>: Bei Texteingabe wählen Sie die passende Zeichenkodierung (UTF-8 ist die häufigste und für die meisten Texte empfohlene Option). Dies stellt sicher, dass der Text vor dem Hashing korrekt interpretiert wird.",
        step5: "<strong>Hash generieren</strong>: Klicken Sie auf \"Hash berechnen\", um Ihre Eingabe zu verarbeiten und einen <strong>Hash-Wert</strong> zu erzeugen. Das Tool berechnet den Hash mit dem gewählten Algorithmus und zeigt das Ergebnis an.",
        step6: "<strong>Ergebnisse ansehen und kopieren</strong>: Der berechnete Hash wird in mehreren Formaten (Hex und Base64) angezeigt. Nutzen Sie die Kopier-Buttons neben jedem Format, um den Hash-Wert in andere Anwendungen zu übernehmen.",
        step7: "<strong>Hash überprüfen (optional)</strong>: Zum Vergleich mit einem existierenden Hash geben Sie den Referenzhash im Überprüfungsbereich unter den Ergebnissen ein. Das System vergleicht ihn automatisch mit Ihrem berechneten Hash und zeigt an, ob sie übereinstimmen.",
        additionalTips: "Für große Dateien kann die Verarbeitung je nach Geräteleistung etwas dauern. Beachten Sie, dass die Verarbeitung komplett in Ihrem Browser erfolgt, sodass Ihre Daten niemals Ihren Computer verlassen."
      },
      relatedTools: {
        title: "Verwandte Tools, die Sie interessieren könnten",
        tools: [
          {
            name: "Passwort-Generator",
            description: "Erstellen Sie starke, sichere Passwörter für Ihre Konten",
            url: "https://www.ufreetools.com/tools/password-generator"
          },
          {
            name: "Text-Kodierer/Dekodierer",
            description: "Konvertieren Sie Text zwischen verschiedenen Kodierungen wie Base64, URL und HTML",
            url: "https://www.ufreetools.com/tools/text-encoder-decoder"
          },
          {
            name: "Datei-Konverter",
            description: "Konvertieren Sie Dateien zwischen verschiedenen Formaten",
            url: "https://www.ufreetools.com/tools/file-converter"
          }
        ]
      },
      conclusion: "Der Hash-Rechner bietet eine leistungsstarke und benutzerfreundliche Möglichkeit, kryptografische Hash-Funktionen für verschiedene Anwendungen zu nutzen, von einfachen Dateiintegritätsprüfungen bis zu komplexen Sicherheitsimplementierungen. Durch die Unterstützung zahlreicher Industriestandard-Algorithmen und eine intuitive Benutzeroberfläche überbrückt dieses Tool die Lücke zwischen komplexen kryptografischen Konzepten und praktischen Alltagsanwendungen. Ob Sie als Entwickler Sicherheitsfunktionen implementieren, als IT-Profi Softwareintegrität prüfen oder einfach nur neugierig auf die Funktionsweise von Hash-Funktionen sind - dieser Rechner gibt Ihnen sofortigen Zugang zu leistungsstarken kryptografischen Funktionen direkt in Ihrem Browser. In einer digitalen Welt, in der Datenintegrität und Sicherheit sowohl im privaten als auch beruflichen Bereich immer wichtiger werden, ist das Verständnis und die Nutzung von Hash-Funktionen essentiell."
    },
    
    listGroups: {
      common: 'Häufige Algorithmen',
      sha2: 'SHA-2 Familie',
      sha3: 'SHA-3 Familie',
      other: 'Andere Algorithmen'
    },
    
    metaTitle: 'Online Hash-Rechner - Generieren und Prüfen kryptografischer Hash-Werte',
    metaDescription: 'Kostenloses Online-Tool zur Generierung und Prüfung kryptografischer Hash-Werte für Texte oder Dateien. Unterstützt verschiedene Algorithmen inklusive {algorithms}.'
  }