export default {
    name: "RSA-Signatur und -Verifikation",
    description: "Daten mit RSA-Private Key signieren und Signaturen mit Public Key verifizieren - Unterstützung für verschiedene Formate und Algorithmen",
    keyInput: "Schlüsseleingabe",
    privateKey: "Privater Schlüssel (für Signatur)",
    publicKey: "Öffentlicher Schlüssel (für Verifikation)",
    privateKeyPlaceholder: "Bitte RSA-Private Key im gewählten Format eingeben",
    publicKeyPlaceholder: "Bitte RSA-Public Key oder Zertifikat eingeben",
    generateKeyPair: "Schlüsselpaar generieren",
    extractFromCert: "Aus Zertifikat extrahieren",
    clear: "Löschen",
    keySize: "Schlüssellänge",
    hashAlgorithm: "Hash-Algorithmus",
    paddingScheme: "Padding-Methode",
    keyFormat: "Schlüsselformat",
    inputFormat: "Eingabeformat",
    processMode: "Verarbeitungsmodus",
    originalData: "Originaldaten",
    preProcessed: "Pre-Hash",
    sign: "Signieren",
    verify: "Verifizieren",
    dataToSign: "Zu signierende Daten",
    dataToSignPlaceholder: "Text oder Daten eingeben, die signiert werden sollen",
    preProcessedDataToSign: "Zu signierender Hash-Wert",
    preProcessedDataToSignPlaceholder: "Hash-Wert im Hexadezimalformat eingeben",
    preprocessOnly: "Nur Vorverarbeitung (Hash berechnen)",
    preprocessedData: "Vorverarbeitete Daten",
    hashDigest: "Hash-Digest (Schritt 1)",
    paddedData: "Gepaddete Daten (Schritt 2)",
    showDetailed: "Detaillierte Ansicht",
    showSimple: "Einfache Ansicht",
    signButton: "Daten signieren",
    signature: "Signaturergebnis",
    dataToVerify: "Zu verifizierende Daten",
    dataToVerifyPlaceholder: "Originale signierte Daten eingeben",
    preProcessedDataToVerify: "Zu verifizierender Hash-Wert",
    preProcessedDataToVerifyPlaceholder: "Hash-Wert im Hexadezimalformat eingeben",
    signatureToVerify: "Zu verifizierende Signatur",
    signatureToVerifyPlaceholder: "Signatur im gewählten Format eingeben",
    verifyButton: "Signatur verifizieren",
    verificationResult: "Verifikationsergebnis",
    notVerifiedYet: "Noch nicht verifiziert",
    signatureValid: "Signatur gültig ✓",
    signatureInvalid: "Signatur ungültig ✗✗",
    copy: "Kopieren",
    copied: "In Zwischenablage kopiert",
    copyFailed: "Kopieren in Zwischenablage fehlgeschlagen",
    generatingKeys: "Schlüssel werden generiert...",
    keysGenerated: "{bits}-Bit RSA-Schlüsselpaar generiert, Dauer: {time} Sekunden",
    keyGenerationFailed: "Schlüsselpaar-Generierung fehlgeschlagen",
    notValidCertificate: "Eingabe ist kein gültiges X.509-Zertifikat",
    publicKeyExtracted: "Public Key aus Zertifikat extrahiert",
    extractionFailed: "Public Key-Extraktion fehlgeschlagen",
    preprocessingError: "Fehler bei der Vorverarbeitung",
    paddingError: "Fehler beim Anwenden des Paddings",
    invalidPrivateKey: "Ungültiges Format für Private Key",
    invalidPublicKey: "Ungültiges Format für Public Key",
    invalidInputData: "Ungültiges Eingabedatenformat",
    invalidSignature: "Ungültiges Signaturformat",
    invalidVerificationData: "Ungültiges Verifikationsdatenformat",
    signatureCreated: "Signatur erfolgreich erstellt",
    signingFailed: "Signaturerstellung fehlgeschlagen",
    verificationSuccess: "Signaturverifikation erfolgreich",
    verificationFailed: "Signaturverifikation fehlgeschlagen",
    verificationError: "Fehler während der Verifikation",
    noSignatureToExport: "Keine Signatur zum Exportieren vorhanden",
    signatureExported: "Signatur als {format}-Datei exportiert",
    signatureImported: "Signatur erfolgreich importiert",
    signatureImportFailed: "Signaturimport fehlgeschlagen",
    article: {
        title: "RSA-Signatur-Tool: Sichere digitale Signaturen für Datenintegrität",
        
        introduction: {
            title: "Was ist RSA-Signaturverifikation?",
            p1: "RSA-Signaturverifikation ist ein kryptografischer Prozess zur Sicherstellung von Datenintegrität, Authentizität und Nicht-Abstreitbarkeit in digitaler Kommunikation. Unser RSA-Signatur-Tool ermöglicht das Signieren von Daten mit RSA-Private Keys und die Verifikation mit entsprechenden Public Keys - eine sichere Methode zum Nachweis, dass Informationen während der Übertragung nicht manipuliert wurden.",
            p2: "In Zeiten, wo Datensicherheit entscheidend ist, sind RSA-Signaturen zum Industriestandard für den Schutz elektronischer Dokumente, Softwareverteilung und sicherer Kommunikation geworden. Das Tool implementiert PKCS#1 v1.5 und PSS Padding-Schemata und unterstützt verschiedene Hash-Algorithmen wie SHA-1, SHA-256, SHA-384 und SHA-512.",
            p3: "Ob Sie als Entwickler kryptografische Implementierungen testen, als Sicherheitsexperte Signaturen verifizieren oder als Student Public-Key-Kryptografie lernen - unser RSA-Signatur-Tool bietet eine benutzerfreundliche Oberfläche mit umfassenden Funktionen für alle digitalen Signaturanforderungen.",
            p4: "Der RSA-Signaturprozess funktioniert durch Erstellen eines kryptografischen Hash-Werts der Daten, der dann mit dem Private Key des Senders verschlüsselt wird. Jeder mit dem entsprechenden Public Key kann die Signatur verifizieren und gleichzeitig Datenintegrität und Absenderidentität bestätigen."
        },
        
        useCases: {
            title: "Typische Anwendungsfälle für RSA-Signaturen",
            case1: "Verifikation der Authentizität von Software-Downloads und Updates zur Verhinderung von Malware-Verbreitung",
            case2: "Verifikation digitaler Zertifikate in sicherer Netzwerkkommunikation (HTTPS)",
            case3: "Sicherstellung der Integrität elektronischer Dokumente und Verträge in rechtlichen und geschäftlichen Umgebungen",
            case4: "Implementierung sicherer Nachrichtenauthentifizierung in Kommunikationsprotokollen und Anwendungen"
        },
        
        tutorial: {
            title: "Anleitung zur Nutzung des RSA-Signatur-Tools",
            step1: {
            title: "Schritt 1: Schlüssel vorbereiten",
            description: "Vor dem Signieren oder Verifizieren benötigen Sie RSA-Schlüssel:",
            option1: "Generieren Sie direkt im Tool neue Schlüsselpaare durch Klicken auf \"Schlüsselpaar generieren\" und Auswahl der gewünschten Schlüssellänge (2048 Bit oder mehr für Sicherheit empfohlen)",
            option2: "Importieren Sie bestehende Schlüssel in verschiedenen Formaten (PEM, DER, HEX oder Base64)"
            },
            step2: {
            title: "Schritt 2: Signatureinstellungen konfigurieren",
            description: "Wählen Sie geeignete Einstellungen für Ihre Signatur-Operation:",
            option1: "Hash-Algorithmus: Wählen Sie zwischen SHA-1, SHA-256, SHA-384 oder SHA-512 (SHA-256 oder höher empfohlen)",
            option2: "Padding-Schema: Wählen Sie zwischen PKCS#1 v1.5 (am gebräuchlichsten) oder PSS (moderner und sicherer)",
            option3: "Eingabeformat: Spezifizieren Sie, ob Ihre Eingabe Klartext, Hexadezimal oder Base64-kodiert ist"
            },
            step3: {
            title: "Schritt 3: Daten signieren oder verifizieren",
            description: "Je nach Bedarf:",
            option1: "Signieren: Geben Sie im Signaturbereich Ihre Daten ein und klicken \"Daten signieren\" zur Signaturerzeugung",
            option2: "Verifizieren: Geben Sie im Verifikationsbereich Originaldaten und Signatur ein und klicken \"Signatur verifizieren\""
            },
            step4: {
            title: "Schritt 4: Ergebnisse anzeigen und ggf. exportieren",
            description: "Nach dem Signieren können Sie die Signatur kopieren oder in verschiedenen Formaten (Base64, HEX, DER, PEM) exportieren. Bei der Verifikation zeigt das Tool an, ob die Signatur gültig oder ungültig ist."
            },
            note: "Hinweis: Für fortgeschrittene Benutzer zeigt das Tool detaillierte Vorverarbeitungsinformationen inklusive Hash-Digest und gepaddeten Daten an, um jeden Schritt des RSA-Signaturprozesses nachvollziehbar zu machen."
        },
        
        faq: {
            title: "Häufige Fragen zu RSA-Signaturen",
            q1: "Was ist der Unterschied zwischen PKCS#1 v1.5 und PSS Padding?",
            a1: "PKCS#1 v1.5 ist das traditionelle Padding-Schema für RSA-Signaturen, weit verbreitet aber mit bekannten theoretischen Schwachstellen. PSS (Probabilistic Signature Scheme) ist eine modernere Methode mit beweisbaren Sicherheitseigenschaften und zufälligem Padding, das resistenter gegen bestimmte kryptografische Angriffe ist. Für die meisten Anwendungen bieten beide Schemata ausreichende Sicherheit, wenn starke Hash-Algorithmen und geeignete Schlüssellängen verwendet werden.",
            
            q2: "Welchen Hash-Algorithmus sollte ich für RSA-Signaturen verwenden?",
            a2: "Für moderne Anwendungen empfehlen wir mindestens SHA-256 für ausreichende Sicherheit. SHA-1 gilt als kryptografisch schwach und sollte nur für Legacy-Kompatibilität verwendet werden. Für hochsensible Anwendungen oder beim Signieren großer Datenmengen bieten SHA-384 oder SHA-512 zusätzliche Sicherheitsmargen.",
            
            q3: "Welche Schlüssellänge wird für sichere RSA-Signaturen empfohlen?",
            a3: "Stand 2023 wird für RSA-Schlüssel mindestens 2048 Bit empfohlen, für langfristige Sicherheit 3072 oder 4096 Bit. Schlüssel unter 2048 Bit gelten als anfällig für Faktorisierungsangriffe mit modernen Rechenressourcen. Beachten Sie, dass größere Schlüssel die Verarbeitungszeit für Signatur-Operationen erhöhen.",
            
            q4: "Kann ich mit diesem Tool bereits gehashte Daten verarbeiten?",
            a4: "Ja, unser Tool unterstützt das Signieren und Verifizieren vorberechneter Hash-Werte. Dies ist nützlich, wenn Sie Hash-Digests mit externen Tools berechnet haben oder große Dateien separat hashen möchten. Wählen Sie einfach die \"Pre-Hash\"-Option und geben Sie den Hash-Wert im Hexadezimalformat an.",
            
            q5: "Ist die Verwendung dieses Online-Tools für sensible Signaturen sicher?",
            a5: "Dieses Tool verarbeitet alle Daten vollständig in Ihrem Browser - keine Informationen werden an unsere Server gesendet. Für hochsensible oder produktive Krypto-Operationen empfehlen wir jedoch dedizierte Sicherheitshardware (wie HSMs) oder etablierte Krypto-Bibliotheken in kontrollierten Umgebungen.",
            a5_extra: "Für Schulungszwecke, Tests oder nicht-kritische Anwendungen bietet dieses Tool eine bequeme und sichere Möglichkeit, RSA-Signaturen zu handhaben."
        },
        
        resources: {
            title: "Verwandte Tools und Ressourcen",
            description: "Erweitern Sie Ihren kryptografischen Workflow mit diesen ergänzenden Tools:",
            tool1: "Hash-Generator - Hash-Digests mit verschiedenen Algorithmen erstellen",
            tool2: "Base64-Encoder/Decoder - Konvertierung zwischen Rohdaten und Base64",
            tool3: "JWT-Debugger - Online-Tool zum Parsen, Verifizieren und Debuggen von JWT-Tokens",
            
            external: {
            title: "Externe Ressourcen",
            resource1: "RFC 8017 - PKCS #1: RSA Cryptography Specifications Version 2.2",
            resource2: "NIST FIPS 186-4 - Digital Signature Standard (DSS)"
            }
        },
        
        conclusion: {
            title: "Fazit",
            p1: "RSA-Signaturverifikation bleibt ein Grundpfeiler moderner Kryptografie und bietet starke Mechanismen für Datenintegrität und Authentizität. Unser RSA-Signatur-Tool macht diese leistungsfähige Technologie für alle zugänglich - von Krypto-Neulingen bis zu Sicherheitsexperten.",
            p2: "Ob Sie Code signieren, Dokumentenauthentizität verifizieren oder Public-Key-Kryptografie lernen - dieses Tool bietet in einer sicheren Browser-Umgebung umfassende Funktionen zur Handhabung von RSA-Signaturen. Beginnen Sie jetzt mit dem RSA-Signatur-Tool, um Ihre digitalen Assets und Kommunikation zu schützen."
        }
    }
}