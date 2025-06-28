export default {
    name: "SM2-Signatur und -Verifizierung",
    description: "Verwendung von SM2-Private Keys zur Datensignierung und Public Keys zur Signaturüberprüfung, unterstützt verschiedene Hash-Algorithmen",
    keyInput: "Schlüsseleingabe",
    privateKey: "Privater Schlüssel (für Signatur)",
    publicKey: "Öffentlicher Schlüssel (für Verifizierung)",
    privateKeyPlaceholder: "Bitte geben Sie den SM2-Private Key im Hexadezimalformat ein",
    publicKeyPlaceholder: "Bitte geben Sie den SM2-Public Key im Hexadezimalformat ein",
    generateKeyPair: "Schlüsselpaar generieren",
    clear: "Löschen",
    keyGenError: "Fehler bei der Schlüsselpaargenerierung",
    hashAlgorithm: "Hash-Algorithmus",
    processMode: "Verarbeitungsmodus",
    originalData: "Originaldaten",
    preHashed: "Pre-Hashed",
    sign: "Signieren",
    verify: "Verifizieren",
    dataToSign: "Zu signierende Daten",
    dataToSignPlaceholder: "Geben Sie den zu signierenden Text oder die Daten ein",
    preHashedDataToSign: "Zu signierender Hashwert",
    preHashedDataToSignPlaceholder: "Geben Sie den Hashwert im Hexadezimalformat ein",
    dataToVerify: "Zu verifizierende Daten",
    dataToVerifyPlaceholder: "Geben Sie den zu verifizierenden Text oder die Daten ein",
    preHashedDataToVerify: "Zu verifizierender Hashwert",
    preHashedDataToVerifyPlaceholder: "Geben Sie den Hashwert im Hexadezimalformat ein",
    signatureToVerify: "Zu verifizierende Signatur",
    signatureToVerifyPlaceholder: "Geben Sie die zu verifizierende Signatur ein",
    inputFormat: "Eingabeformat",
    outputFormat: "Ausgabeformat",
    signatureFormat: "Signaturformat",
    text: "Text",
    hex: "Hexadezimal",
    base64: "Base64",
    signature: "Signatur",
    copySignature: "Signatur kopieren",
    signatureCopied: "Signatur wurde in die Zwischenablage kopiert",
    copyError: "Fehler beim Kopieren in die Zwischenablage",
    signError: "Signaturerstellung fehlgeschlagen",
    verifyError: "Signaturverifizierung fehlgeschlagen",
    invalidInputData: "Ungültige Eingabedaten",
    unsupportedInputFormat: "Nicht unterstütztes Eingabeformat",
    unsupportedHashAlgorithm: "Nicht unterstützter Hash-Algorithmus",
    waitingForVerification: "Bitte geben Sie Daten und Signatur zur Verifizierung ein",
    verificationSuccess: "Verifizierung erfolgreich! Die Signatur ist gültig.",
    verificationFailed: "Verifizierung fehlgeschlagen! Die Signatur ist ungültig.",
    preHashedMustBeHex: "Pre-Hashed-Eingabe muss im Hexadezimalformat sein",
    idParameter: "ID-Parameter",
    idValue: "ID-Wert",
    idPlaceholder: "ID-Wert eingeben (Standard: 1234567812345678)",
    idDescription: "Der SM2-Algorithmus verwendet einen ID-Wert während der Signaturerstellung und -verifizierung. Der Standardwert ist 1234567812345678.",
    signatureComponents: "Signaturkomponenten (R- und S-Werte)",
    invalidKeyFormat: "Ungültiges Schlüsselformat",
    invalidSignatureFormat: "Ungültiges Signaturformat",
    formatError: "Formatfehler",
    signatureHashMismatch: "Signatur-Hash stimmt nicht überein - Stellen Sie sicher, dass Daten und Hash-Algorithmus mit denen bei der Signatur übereinstimmen",
    copy: "Kopieren",
    export: "Exportieren",
    signatureExported: "Signatur wurde in eine Datei exportiert",
    exportError: "Fehler beim Signatur-Export",
    privateKeyType: "Privater Schlüssel",
    publicKeyType: "Öffentlicher Schlüssel",
    signatureType: "Signatur",
    derEncodingFailed: "Signatur konnte nicht im DER-Format codiert werden",
    invalidIdFormat: "Ungültiges ID-Format",
    invalidDerFormat: "Ungültiges DER-Format",
    invalidSignatureLength: "Signaturlänge für DER-Codierung ungeeignet",
    zValue: "Pre-Hash-Wert",
    zValueFormula: "Z-Wert-Berechnungsformel",
    showDetails: "Details anzeigen",
    hideDetails: "Details ausblenden",
    zCalculationFailed: "Z-Wert-Berechnung fehlgeschlagen",
    invalidPublicKeyFormat: "Ungültiges Public-Key-Format",
    importPfx: "PFX/P12-Datei importieren",
    enterPin: "PIN/Passwort eingeben",
    pinPlaceholder: "Passwort für die PFX-Datei eingeben",
    cancel: "Abbrechen",
    confirm: "Bestätigen",
    fileReadError: "Dateilesefehler",
    pfxImportSuccess: "PFX-Datei erfolgreich importiert",
    pfxImportError: "Fehler beim Import der PFX-Datei",
    noPrivateKeyFound: "Kein Private Key in der PFX-Datei gefunden",
    invalidPrivateKeyFormat: "Ungültiges Private-Key-Format in der PFX-Datei",
    privateKeyExtractionFailed: "Extraktion des Private Keys fehlgeschlagen",
    pkcs8ParseError: "Fehler beim Parsen der PKCS#8-Struktur",
    rsaKeyNotSupported: "RSA-Schlüssel erkannt. Dieses Tool unterstützt nur SM2-Schlüssel.",
    rsaCertNotSupported: "RSA-Zertifikat erkannt. Dieses Tool unterstützt nur SM2-Zertifikate.",
    failedToDerivePublicKey: "Public Key konnte nicht vom Private Key abgeleitet werden",
    article: {
        title: "SM2-Signatur-Tool - Sichere Online-Signaturerstellung und -Verifizierung",
        introduction: {
            title: "Was ist eine SM2-Digitale Signatur?",
            p1: "SM2-Digitale Signaturen sind Teil der chinesischen kommerziellen Kryptografiestandards. Unser <strong>SM2-Signatur-Verifizierungstool</strong> bietet eine benutzerfreundliche Oberfläche zur Erstellung und Überprüfung digitaler Signaturen mit dem SM2-Elliptische-Kurven-Algorithmus, der eine mit 256-Bit-RSA vergleichbare Sicherheit bei kleineren Schlüsselgrößen bietet.",
            p2: "Dieses Online-SM2-Signatur-Tool wurde entwickelt, um die Herausforderung zu lösen, digitale Daten sicher zu signieren und zu verifizieren, ohne spezielle Software installieren zu müssen. Egal, ob Sie Entwickler sind, der SM2-Signaturverifizierung in Anwendungen implementiert, Sicherheitsexperte, der digitale Zertifikate überprüft, oder Unternehmen, das chinesische Kryptografiestandards einhalten muss - unser Tool bietet eine effiziente Lösung.",
            p3: "Mit der zunehmenden globalen Verbreitung der SM2-Verschlüsselungsstandards, insbesondere in Regionen, die chinesische Vorschriften einhalten müssen, ist ein zuverlässiger <strong>SM2-Signatur-Generator und -Verifizierer</strong> für internationale Unternehmen und Sicherheitsexperten unerlässlich."
        },
        applications: {
            title: "Praktische Anwendungsfälle für SM2-Signaturen",
            p1: "SM2-Signaturverifizierung hat zahlreiche praktische Anwendungen in verschiedenen Branchen, insbesondere dort, wo Datenintegrität und Authentifizierung entscheidend sind:",
            scenario1: {
                title: "Finanztechnologie und Bankwesen",
                description: "Im Finanzdienstleistungssektor hilft die <strong>SM2-Signaturverifizierung für Online-Banking</strong>, Transaktionen zu sichern und Compliance aufrechtzuerhalten. Banken, die in Regionen mit SM-Kryptografiestandards operieren, verwenden SM2-Signaturen zur Authentifizierung von Transaktionsanfragen, Kundenidentitätsverifizierung und sicheren Bankkommunikation. Die schnelle Verifizierung von SM2-Signaturen stellt sicher, dass Finanzdokumente nicht manipuliert wurden und aus legitimen Quellen stammen."
            },
            scenario2: {
                title: "Regierung und öffentlicher Sektor",
                description: "Regierungsbehörden, die <strong>sichere SM2-Verschlüsselung für offizielle Dokumente</strong> implementieren, verlassen sich auf digitale Signaturen, um die Authentizität elektronischer Aufzeichnungen zu überprüfen. Unser Tool unterstützt die Verifizierung von Signaturen auf digitalen Zertifikaten, offiziellen Kommunikationen und Rechtsdokumenten. Dies ist besonders wertvoll für internationale Organisationen, die mit chinesischen Regierungsstellen zusammenarbeiten, die nationale Kryptografiestandards einhalten müssen."
            },
            scenario3: {
                title: "Internationaler E-Commerce und Handel",
                description: "Unternehmen, die <strong>SM2-Signaturverifizierung für grenzüberschreitenden Handel</strong> nutzen, verwenden kryptografische Signaturen zum Schutz von Verträgen, Verifizierung von Versanddokumenten und Authentifizierung von Zolldokumenten. Unser Tool ermöglicht Unternehmen die einfache Implementierung von SM2-Signaturverifizierungsprozessen ohne spezielle Kryptografiekenntnisse, was einen reibungsloseren internationalen Geschäftsverkehr bei hohen Sicherheitsstandards fördert."
            }
        },
        tutorial: {
            title: "Wie man das SM2-Signatur-Tool verwendet",
            intro: "Folgen Sie dieser Schritt-für-Schritt-Anleitung, um mit unserem Online-Tool SM2-digitale Signaturen zu erstellen und zu verifizieren:",
            step1: {
                title: "Schritt 1: Schlüsselverwaltung",
                description: "Geben Sie zunächst Ihren SM2-Private Key (für Signaturen) und Public Key (für Verifizierung) ein. Sie können bestehende Schlüssel in verschiedenen Formaten (HEX, PEM, Base64 oder DER) einfügen oder durch Klicken auf den \"Schlüsselpaar generieren\"-Button direkt im Tool ein neues Schlüsselpaar generieren. Aus Sicherheitsgründen werden alle kryptografischen Operationen lokal in Ihrem Browser ausgeführt - Ihre Schlüssel werden niemals an unsere Server übertragen."
            },
            step2: {
                title: "Schritt 2: ID-Parameter konfigurieren",
                description: "Geben Sie den ID-Parameter ein, einen eindeutigen Identifikator, der im SM2-Signaturalgorithmus verwendet wird. Der Standardwert ist \"1234567812345678\", aber Sie können ihn nach Bedarf anpassen. Sie können die ID im Text-, HEX- oder Base64-Format eingeben, je nach Präferenz."
            },
            step3: {
                title: "Schritt 3: Signatur erstellen",
                description: "Geben Sie im Signaturabschnitt die zu signierenden Daten ein und wählen Sie das entsprechende Eingabeformat (Text, HEX oder Base64). Klicken Sie auf den \"Signieren\"-Button, um die Signatur zu generieren. Das Tool zeigt die vollständige Signatur und ihre Komponenten (R- und S-Werte) an. Sie können Ihr bevorzugtes Ausgabeformat (DER, HEX, Base64 oder PEM) wählen und die Signatur einfach kopieren oder exportieren."
            },
            step4: {
                title: "Schritt 4: Signatur verifizieren",
                description: "Um eine Signatur zu verifizieren, geben Sie im Verifizierungsabschnitt die Originaldaten und die zu verifizierende Signatur ein. Wählen Sie das entsprechende Format für Daten und Signatur und klicken Sie auf \"Verifizieren\". Das Tool überprüft sofort, ob die Signatur für die gegebenen Daten und den Public Key gültig ist, und zeigt eine klare Erfolgs- oder Fehlermeldung sowie gegebenenfalls detaillierte Fehlerinformationen an."
            }
        },
        specifications: {
            title: "Technische Spezifikationen",
            p1: "Unser SM2-Signatur-Tool implementiert den SM2-Elliptische-Kurven-Signaturalgorithmus, wie im GM/T 0003-2012-Standard der chinesischen Nationalen Kryptografieverwaltung definiert. Das Tool entspricht vollständig diesen Standards und bietet zusätzliche Funktionen für einfache Bedienung.",
            p2: "Zu den wichtigsten technischen Merkmalen gehören:",
            feature1: "Feste Verwendung des SM3-Hash-Algorithmus (256-Bit) gemäß Standardanforderungen",
            feature2: "Unterstützung für benutzerdefinierte ID-Parameter in verschiedenen Eingabeformaten (Text/HEX/Base64)",
            feature3: "Mehrere Signaturausgabeformate (DER/HEX/Base64/PEM) für Kompatibilität mit verschiedenen Systemen",
            feature4: "Vollständige Anzeige der Signaturkomponenten (R- und S-Werte) für technische Verifizierung",
            feature5: "Unterstützung verschiedener Schlüsselformate (PEM/HEX/Base64/DER) für flexible Schlüsselverwaltung",
            feature6: "Detaillierte Fehlermeldungen zur Fehlerbehebung bei Verifizierungsproblemen"
        },
        faq: {
            title: "Häufig gestellte Fragen",
            q1: "Was unterscheidet SM2-Signaturen von anderen digitalen Signaturalgorithmen?",
            a1: "SM2-digitale Signaturen basieren auf Elliptic Curve Cryptography (ECC) und sind Teil der chinesischen kommerziellen Kryptografiestandards. Im Vergleich zu RSA-Signaturen bietet die <strong>SM2-Signaturverschlüsselung</strong> bei kleineren Schlüsselgrößen vergleichbare Sicherheit, was sie effizienter macht. Im Gegensatz zu internationalen Standards wie ECDSA verwendet SM2 verschiedene Kurven und bezieht die Identität des Signierers (ID) in den Signaturerstellungsprozess ein, was eine zusätzliche Sicherheitsebene hinzufügt. SM2 ist besonders wichtig für Anwendungen, die chinesische Vorschriften einhalten oder im chinesischen Cybersicherheitsrahmen operieren müssen.",

            q2: "Ist das SM2-Signatur-Tool für sensible Daten sicher?",
            a2: "Ja, unser <strong>sicheres SM2-Signatur-Verifizierungstool</strong> verwendet clientseitiges JavaScript, das alle kryptografischen Operationen direkt in Ihrem Browser ausführt. Ihre privaten Schlüssel und sensiblen Daten verlassen niemals Ihr Gerät oder werden an unsere Server übertragen. Die Implementierung folgt dem SM2-Digital-Signature-Standard (GM/T 0003-2012) und verwendet SM3 für Hashing, wie in der Spezifikation gefordert. Für hochsensible Unternehmensanwendungen empfehlen wir zusätzliche Überprüfungen vor der Verwendung eines Online-Tools (einschließlich unseres) in Produktionsumgebungen.",

            q3: "Warum ist der ID-Parameter in SM2-Signaturen wichtig?",
            a3: "Der ID-Parameter ist ein einzigartiges Merkmal des <strong>SM2-Digital-Signature-Algorithmus mit benutzerdefinierter ID</strong>, der ihn von anderen ECC-basierten Signaturschemata unterscheidet. Er dient als zusätzliche Eingabe für den Signaturerstellungsprozess und bindet im Wesentlichen die Identität des Signierers an die Signatur. Dies verhindert bestimmte Angriffsarten und fügt eine Authentifizierungsebene hinzu. In den meisten Implementierungen, einschließlich unseres Tools, wird der Standardwert '1234567812345678' verwendet, wenn keine spezifische ID benötigt wird, aber Organisationen verwenden oft benutzerdefinierte IDs, die mit Benutzeridentitäten oder Systemkennungen verknüpft sind, um Sicherheit und Nachverfolgbarkeit zu erhöhen.",

            q4: "Kann ich SM2-Signaturen in internationalen Geschäften außerhalb Chinas verwenden?",
            a4: "Absolut. Während SM2 aus den chinesischen Kryptografiestandards stammt, wächst die <strong>internationale Akzeptanz von SM2-Signaturen</strong>, insbesondere bei Unternehmen mit Geschäften in China oder Partnerschaften mit chinesischen Unternehmen. Unser Tool erleichtert grenzüberschreitende kryptografische Operationen durch Unterstützung verschiedener Ein- und Ausgabeformate, die mit internationalen Systemen kompatibel sind. Für Unternehmen, die im internationalen Handel tätig sind, kann die Verwendung von SM2-Signaturen helfen, die Einhaltung chinesischer Vorschriften sicherzustellen und gleichzeitig eine robuste Kryptografiesicherheit nach globalen Standards zu gewährleisten.",

            q5: "Was soll ich tun, wenn die Signaturverifizierung fehlschlägt?",
            a5: "Wenn Sie auf <strong>SM2-Signaturverifizierungsfehler</strong> stoßen, überprüfen Sie diese häufigen Probleme: 1) Stellen Sie sicher, dass Sie den richtigen Public Key verwenden, der dem für die Signatur verwendeten Private Key entspricht; 2) Verifizieren Sie, dass der ID-Parameter mit dem bei der Signaturerstellung verwendeten übereinstimmt; 3) Bestätigen Sie, dass die verifizierten Daten genau mit den ursprünglich signierten Daten übereinstimmen, einschließlich des Formats (Text/HEX/Base64); 4) Prüfen Sie, ob das Signaturformat (DER/HEX/Base64/PEM) korrekt ausgewählt wurde. Unser Tool bietet detaillierte Fehlermeldungen zur Diagnose spezifischer Probleme. Bei anhaltenden Problemen müssen Sie möglicherweise die Signatur neu generieren oder überprüfen, ob das Schlüsselpaar gültig ist."
        },
        related: {
            title: "Verwandte Kryptografie-Tools",
            description: "Erweitern Sie Ihr Sicherheitstoolkit mit diesen ergänzenden Kryptografie-Hilfsmitteln:",
            tool1: "<a href='https://www.ufreetools.com/tool/rsa-signature-verifier' target='_blank'>RSA-Signaturverifizierer</a> - Erstellen und verifizieren Sie digitale Signaturen mit dem weit verbreiteten RSA-Algorithmus.",
            tool2: "<a href='https://www.ufreetools.com/tool/hash-calculator' target='_blank'>Hash-Rechner</a> - Generieren Sie sichere Hash-Werte mit verschiedenen Algorithmen, einschließlich SM3.",
            tool3: "<a href='https://www.ufreetools.com/tool/x509-certificate-decoder' target='_blank'>Zertifikats-Decoder</a> - Dekodieren und überprüfen Sie X.509-Zertifikate, einschließlich solcher, die SM2-Kryptografie verwenden."
        }
    },
}