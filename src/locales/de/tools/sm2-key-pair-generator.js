export default {
    name: "SM2-Schlüsselpaar-Generator",
    description: "Generiert SM2-Schlüsselpaare gemäß GB/T 32918-2016 Standard mit Unterstützung für verschiedene Ausgabeformate",
    settings: "Generierungseinstellungen",
    keyLength: "Schlüssellänge",
    bits: "Bit",
    standardBits: "SM2-Standard verwendet 256-Bit-Schlüssellänge",
    outputFormat: "Ausgabeformat",
    keyPairCount: "Anzahl der Schlüsselpaare",
    maxKeysWarning: "Maximal 10 Schlüsselpaare auf einmal generierbar",
    generating: "Wird generiert",
    generate: "Schlüsselpaare generieren",
    results: "Generierungsergebnisse",
    generatingKeys: "Schlüsselpaare werden generiert...",
    copyAll: "Alle kopieren",
    noKeysGenerated: "Noch keine Schlüssel generiert. Konfigurieren Sie die Einstellungen und klicken Sie auf \"Schlüsselpaare generieren\".",
    keyPair: "Schlüsselpaar",
    copy: "Kopieren",
    publicKey: "Öffentlicher Schlüssel",
    privateKey: "Privater Schlüssel",
    keyComponents: "Schlüsselkomponenten",
    invalidCount: "Bitte eine Zahl zwischen 1 und 10 eingeben",
    generateFailed: "Generierung der Schlüsselpaare fehlgeschlagen",
    generateSuccess: "Erfolgreich {count} SM2-Schlüsselpaare generiert",
    copiedToClipboard: "In die Zwischenablage kopiert",
    copyFailed: "Kopieren fehlgeschlagen",
    downloadedAs: "Heruntergeladen als {filename}",
    exportPem: "Als PEM exportieren",
    exportAllJson: "Als JSON exportieren",
    exportAllTxt: "Als TXT exportieren",
    exportTxt: "Als TXT exportieren",
    singleKeyDownloaded: "{type} als PEM heruntergeladen",
    allPemDownloaded: "Alle Schlüssel als PEM heruntergeladen",
    keyPairCopied: "Schlüsselpaar in Zwischenablage kopiert",
    allKeysCopied: "Alle Schlüsselpaare in Zwischenablage kopiert",
    componentsCopied: "Schlüsselkomponenten in Zwischenablage kopiert",
    componentsDownloaded: "Schlüsselkomponenten als TXT-Datei heruntergeladen",

    // Artikelinhalt
    article: {
        title: "SM2-Schlüsselpaar-Generator: Vollständiger Leitfaden zu Chinas Kryptografiestandard",
        introTitle: "Was ist der SM2-Schlüsselpaar-Generator und wofür wird er verwendet?",
        introPara1: "Der <strong>SM2-Schlüsselpaar-Generator</strong> ist ein spezialisiertes Kryptografie-Tool zur Erstellung sicherer öffentlicher und privater Schlüsselpaare gemäß dem chinesischen Nationalstandard für Kryptografiealgorithmen (GB/T 32918-2016). Im Gegensatz zu internationalen Standards wie RSA oder ECC wurde SM2 speziell von chinesischen Regulierungsbehörden entworfen und genehmigt, was es für Organisationen, die im chinesischen Regulierungsrahmen tätig sind, unverzichtbar macht.",
        introPara2: "Unser <strong>SM2-Schlüsselgenerierungstool</strong> ermöglicht Benutzern die einfache Generierung kryptografisch sicherer SM2-Schlüsselpaare ohne spezielles Wissen über den zugrunde liegenden Algorithmus. Das Tool unterstützt verschiedene Ausgabeformate einschließlich PEM, HEX und Base64, was es in verschiedenen Entwicklungs- und Sicherheitsumgebungen vielseitig einsetzbar macht.",
        
        useCaseTitle: "Hauptanwendungsfälle",
        useCase1: "<strong>Compliance im Finanzdienstleistungssektor</strong>: Banken und FinTech-Unternehmen, die in China tätig sind, müssen SM2-Verschlüsselung zum Schutz von Finanztransaktionen und Kundendaten verwenden, um regulatorische Anforderungen zu erfüllen.",
        useCase2: "<strong>Regierungs- und Unternehmensinformationssysteme</strong>: Chinesische Regierungsbehörden und große Unternehmen müssen SM2 für sichere Kommunikation, Dokumentensignierung und Authentifizierung implementieren.",
        useCase3: "<strong>Grenzüberschreitender E-Commerce</strong>: Unternehmen, die mit China Handel treiben, benötigen häufig SM2-Kryptografie für sicheren Datenaustausch und regulatorische Compliance.",
        useCase4: "<strong>Mobile App-Sicherheit</strong>: Entwickler, die Apps für den chinesischen Markt erstellen, benötigen SM2-Schlüsselpaare für sichere Authentifizierungs- und Datenschutzmechanismen.",
        standardInfo: "Der SM2-Algorithmus ist Teil der Commercial Cryptography (SM) Algorithmus-Suite, die SM2 (Public-Key-Kryptografie), SM3 (Hash) und SM4 (symmetrische Verschlüsselung) umfasst. Da China weiterhin sein eigenes Cybersicherheitsframework unabhängig von internationalen Standards entwickelt, gewinnen diese Standards zunehmend an Bedeutung.",
        
        tutorialTitle: "Anleitung zur Verwendung des SM2-Schlüsselpaar-Generators",
        tutorialIntro: "Die Befolgung dieser Schritt-für-Schritt-Anleitung hilft Ihnen, schnell und effizient sichere SM2-Schlüsselpaare zu generieren. Jedes generierte Schlüsselpaar enthält die für Verschlüsselungs-, Entschlüsselungs-, Signatur- und Verifizierungsoperationen erforderlichen öffentlichen und privaten Schlüsselkomponenten.",
        
        step1Title: "Schritt 1: Schlüsselparameter auswählen",
        step1Desc: "Der SM2-Standard verwendet eine feste 256-Bit-Schlüssellänge, die starke Sicherheit bei guter Leistung bietet. Dies ist in unserem Tool vorausgewählt und kann nicht geändert werden, da es den offiziellen Standards entspricht.",
        
        step2Title: "Schritt 2: Ausgabeformat wählen",
        step2Desc: "Wählen Sie Ihr bevorzugtes Ausgabeformat: <ul><li><strong>PEM</strong>: Standardformat für kryptografische Zertifikate und Schlüssel, das von den meisten Systemen und Anwendungen leicht erkannt wird.</li><li><strong>HEX</strong>: Hexadezimale Darstellung, ideal für die direkte Implementierung in Code.</li><li><strong>Base64</strong>: Kompakte Darstellung, häufig in Webanwendungen und API-Kommunikation verwendet.</li></ul>",
        
        step3Title: "Schritt 3: Anzahl der Schlüsselpaare festlegen",
        step3Desc: "Bestimmen Sie, wie viele Schlüsselpaare Sie benötigen. Dies ist besonders nützlich für Tests oder die Einrichtung mehrerer sicherer Kanäle.",
        
        step4Title: "Schritt 4: Schlüssel generieren und verwalten",
        step4Desc: "Klicken Sie auf die Schaltfläche \"Schlüsselpaare generieren\" und warten Sie den Abschluss des Vorgangs ab. Nach der Generierung können Sie die Schlüssel anzeigen, kopieren oder exportieren. Stellen Sie sicher, dass Sie Ihre privaten Schlüssel sicher speichern und niemals mit Unbefugten teilen.",
        
        relatedToolsTitle: "Verwandte Kryptografie-Tools",
        relatedToolsDesc: "Für eine umfassende Implementierung von Sicherheitsmaßnahmen möchten Sie möglicherweise diese ergänzenden Tools erkunden:",
        relatedTool1: "RSA-Schlüsselpaar-Generator - Generiert RSA-Schlüssel gemäß internationalen Kryptografiestandards",
        relatedTool2: "Hash-Rechner - Berechnet verschiedene Hash-Werte, einschließlich SM3 für Datenintegritätsprüfungen",
        
        faqTitle: "Häufig gestellte Fragen zu SM2-Kryptografie",
        faq1Question: "Wie unterscheidet sich SM2 von anderen Public-Key-Kryptografiealgorithmen wie RSA?",
        faq1Answer: "SM2 ist ein von chinesischen Behörden entwickelter Public-Key-Kryptografiealgorithmus auf Basis elliptischer Kurven. Im Vergleich zu RSA bietet SM2 vergleichbare Sicherheit bei kürzeren Schlüssellängen (256 Bit für SM2 gegenüber 2048+ Bit für RSA), was zu besserer Leistung führt. Der Hauptunterschied besteht darin, dass SM2 speziell für die Einhaltung regulatorischer Anforderungen in China gedacht ist, während RSA international weiter verbreitet ist. Die mathematischen Grundlagen unterscheiden sich ebenfalls: SM2 basiert auf elliptischer Kurvenkryptografie, während RSA auf der Schwierigkeit der Faktorisierung großer Primzahlen beruht.",
        
        faq2Question: "Ist SM2-Verschlüsselung für internationale Geschäftsanwendungen sicher?",
        faq2Answer: "Ja, SM2 bietet starke kryptografische Sicherheit, die internationalen Standards entspricht. Mit seiner 256-Bit-Schlüssellänge bietet es Sicherheit, die 3072-Bit-RSA-Schlüsseln entspricht. SM2 wurde von chinesischen Behörden umfassend kryptanalysiert und gilt als resistent gegen bekannte Angriffe. Für internationale Interoperabilität bevorzugen einige Organisationen jedoch möglicherweise weit verbreitete internationale Standards wie RSA oder ECDSA. Die Wahl hängt normalerweise von Ihren spezifischen Compliance-Anforderungen und dem Einsatzort der Anwendung ab.",
        
        faq3Question: "Wie überprüfe ich, ob mein SM2-Schlüsselpaar korrekt funktioniert?",
        faq3Answer: "Um Ihr SM2-Schlüsselpaar zu testen, können Sie einen einfachen Verschlüsselungs- und Entschlüsselungstest durchführen: Verschlüsseln Sie eine Testnachricht mit dem öffentlichen Schlüssel und entschlüsseln Sie sie dann mit dem entsprechenden privaten Schlüssel. Wenn die entschlüsselte Nachricht mit der Originalnachricht übereinstimmt, funktioniert Ihr Schlüsselpaar korrekt. Alternativ können Sie eine Nachricht mit dem privaten Schlüssel signieren und die Signatur mit dem öffentlichen Schlüssel verifizieren. Unser Tool stellt sicher, dass alle generierten Schlüsselpaare gemäß den SM2-Standardspezifikationen mathematisch gültig sind.",
        
        faq4Question: "Können SM2-Schlüssel für Standard-SSL/TLS-Implementierungen verwendet werden?",
        faq4Answer: "Die Unterstützung für SM2 in SSL/TLS hängt von der jeweiligen Implementierung ab. China hat eine Variante namens TLCP (Transport Layer Cryptography Protocol) entwickelt, das SM2/SM3/SM4-Algorithmen anstelle internationaler Standards verwendet. Hauptbrowser in China unterstützen diese Standards typischerweise. Für internationale Systeme benötigen Sie möglicherweise spezielle Bibliotheken oder Konfigurationen, um SM2-Unterstützung zu aktivieren. OpenSSL 1.1.1 und höher enthält Unterstützung für SM2-Kryptografie, was die Integration in viele Systeme vereinfacht.",
        
        faq5Question: "Was bedeuten die x-, y- und d-Komponenten in einem SM2-Schlüsselpaar?",
        faq5Answer: "In einem SM2-Schlüsselpaar repräsentieren diese Komponenten wichtige mathematische Werte: <ul><li><strong>x und y</strong>: Dies sind die Koordinaten des Punkts auf der elliptischen Kurve, der Ihren öffentlichen Schlüssel darstellt. Zusammen bilden sie den vollständigen öffentlichen Schlüssel, der öffentlich geteilt werden kann.</li><li><strong>d</strong>: Dies ist Ihr privater Schlüssel, eine große Zufallszahl, die geheim gehalten werden muss. Sie wird für Entschlüsselungs- und Signaturvorgänge verwendet.</li></ul>Im Gegensatz zu RSA, das mehrere Komponenten wie p, q, d, e, n hat, ist der SM2-private Schlüssel einfacher - nur der skalare Wert d, während der öffentliche Schlüssel aus den Punktkoordinaten (x,y) besteht.",
        
        resourcesTitle: "Weitere Ressourcen",
        resourcesDesc: "Um mehr über SM2-Kryptografie und chinesische Kryptografiestandards zu erfahren, bieten diese autoritativen Quellen wertvolle Informationen:",
        resource1: "GB/T 32918-2016 - Offizielle SM2-Standardpublikation (Chinesisch)",
        resource2: "Nationale Verwaltung für Kryptografie - Offizielle Regulierungsdokumente",
        resource3: "ISO/IEC 14888-3:2018 - Internationaler Standard, der den SM2-Signaturalgorithmus zitiert",
        
        conclusionTitle: "Fazit",
        conclusionPara: "Der <strong>SM2-Schlüsselpaar-Generator</strong> bietet eine benutzerfreundliche Möglichkeit, kryptografisch sichere Schlüssel gemäß chinesischen Nationalstandards zu erstellen. Egal, ob Sie Anwendungen für den chinesischen Markt entwickeln, sichere Kommunikationskanäle einrichten oder regulatorische Anforderungen erfüllen möchten - unser Tool vereinfacht den komplexen Prozess der SM2-Schlüsselgenerierung. Durch die Unterstützung verschiedener Ausgabeformate und umfassender Schlüsselverwaltungsfunktionen hilft dieses <strong>SM2-Kryptografie-Tool</strong> Organisationen, starke Sicherheitsmaßnahmen zu implementieren und gleichzeitig die Compliance mit chinesischen Kryptografievorschriften zu gewährleisten."
    }
}