export default {
    title: "ASN.1-Strukturparser - Dekodieren und Visualisieren von ASN.1-kodierten Daten",

    // Introduction section
    introTitle: "Was ist ein ASN.1-Strukturparser?",
    introPara1: "Der ASN.1-Strukturparser ist ein leistungsfähiges Tool zum Dekodieren und Visualisieren von Abstract Syntax Notation One (ASN.1)-kodierten Datenstrukturen. ASN.1 ist eine standardisierte Beschreibungssprache zur Definition von Datenstrukturen, die plattformübergreifend serialisiert und deserialisiert werden können. Sie wird häufig in der Telekommunikation und Computernetzwerken, insbesondere in kryptografischen Protokollen, eingesetzt.",
    introPara2: "Unser ASN.1-Strukturparser bietet eine interaktive Methode zur Untersuchung komplexer ASN.1-Strukturen und unterstützt mehrere Eingabeformate inklusive PEM, HEX, Base64 und DER. Die baumbasierte Visualisierung ermöglicht eine einfache Erkundung verschachtelter ASN.1-Elemente - besonders wertvoll für Entwickler, Sicherheitsforscher und Netzwerktechniker.",

    applicationTitle: "Typische Anwendungen des ASN.1-Parsers",
    application1: "<strong>X.509-Zertifikatsanalyse</strong>: SSL/TLS-Zertifikatsstrukturen und -inhalte für Sicherheitsaudits und Fehlerbehebung untersuchen.",
    application2: "<strong>PKCS-Dateiprüfung</strong>: Detaillierte Analyse von privaten Schlüsseln, Zertifikatsanfragen und Speicherformaten.",
    application3: "<strong>Cryptographic Message Syntax (CMS)</strong>: Signierte und verschlüsselte Datenstrukturen für sichere Nachrichtenprotokolle untersuchen.",
    application4: "<strong>Netzwerkprotokollanalyse</strong>: ASN.1-Daten in Protokollen wie SNMP, LDAP und H.323 dekodieren.",
    introPara3: "Das Parsen von ASN.1-Strukturen ist entscheidend zum Verständnis komplexer Datenformate in modernen Sicherheitssystemen. Unser Parser macht diesen Prozess intuitiv durch farbcodierte Visualisierungen, aufklappbare Baumansichten und Hex-Dumps der kodierten Daten.",

    // FAQ section
    faqTitle: "Häufige Fragen zum ASN.1-Strukturparser",

    faq1Question: "Welche Formate akzeptiert der ASN.1-Strukturparser?",
    faq1Answer: "Unser ASN.1-Strukturparser unterstützt mehrere Eingabeformate inklusive PEM (Privacy Enhanced Mail), HEX (Hexadezimal), Base64 und DER (Distinguished Encoding Rules)-Binärdateien. Diese Flexibilität ermöglicht die Verarbeitung von ASN.1-Daten aus verschiedenen Quellen ohne Formatkonvertierung.",

    faq2Question: "Wie analysiere ich X.509-Zertifikate mit dem ASN.1-Parser?",
    faq2Answer: "Um X.509-Zertifikate zu analysieren, wählen Sie einfach 'PEM' als Eingabeformat und fügen Ihr Zertifikat (inklusive BEGIN/END CERTIFICATE-Markierungen) in das Eingabefeld ein. Der Parser dekodiert automatisch die Struktur und zeigt sie als interaktiven Baum, in dem Sie Knoten aufklappen und spezifische Zertifikatsfelder wie Betreff, Aussteller, Gültigkeit und Erweiterungen untersuchen können.",

    faq3Question: "Kann ich geparste ASN.1-Strukturen zur Dokumentation exportieren?",
    faq3Answer: "Ja, Sie können geparste ASN.1-Strukturen als JSON exportieren, indem Sie auf den \"Als JSON exportieren\"-Button im Einstellungsbereich klicken. Diese Funktion ist nützlich zur Strukturdokumentation, zum Teilen mit Kollegen oder zur weiteren Verarbeitung in eigenen Anwendungen.",

    faq4Question: "Was ist der Unterschied zwischen ASN.1, DER und BER-Kodierung?",
    faq4Answer: "ASN.1 (Abstract Syntax Notation One) ist die Sprache zur Definition von Datenstrukturen, während DER (Distinguished Encoding Rules) und BER (Basic Encoding Rules) spezifische Kodierungsregeln sind, die festlegen, wie ASN.1-Strukturen in Binärformate umgewandelt werden. DER ist eine Teilmenge von BER und stellt sicher, dass jeder ASN.1-Wert nur eine Kodierung hat, weshalb es in kryptografischen Anwendungen bevorzugt wird. Unser Parser verarbeitet hauptsächlich DER-kodierte ASN.1-Strukturen, die in Sicherheitsanwendungen am häufigsten vorkommen.",

    faq5Question: "Wie behandelt der ASN.1-Parser Objektkennungen (OIDs)?",
    faq5Answer: "Der ASN.1-Strukturparser erkennt automatisch bekannte Objektkennungen (OIDs) und zeigt neben dem numerischen OID-Wert auch einen lesbaren Namen an. Zum Beispiel wird '1.2.840.113549.1.1.11' als 'sha256WithRSAEncryption' angezeigt. Diese Funktion erleichtert das Verständnis der verschiedenen Elemente in komplexen Strukturen wie X.509-Zertifikaten und kryptografischen Nachrichten.",

    // Tutorial section
    tutorialTitle: "Wie verwendet man den ASN.1-Strukturparser",

    step1Title: "Schritt 1: Eingabeformat auswählen",
    step1Content: "Wählen Sie zunächst das passende Eingabeformat für Ihre ASN.1-Daten. Nutzen Sie die Radio-Buttons im Eingabebereich, um zwischen PEM, HEX, Base64 oder DER zu wählen. Das gewählte Format bestimmt, wie der Parser Ihre Eingabedaten interpretiert.",

    step2Title: "Schritt 2: ASN.1-Daten eingeben oder hochladen",
    step2Content: "Geben Sie Ihre ASN.1-kodierten Daten in das Textfeld ein oder laden Sie eine Datei über den Upload-Bereich hoch. Stellen Sie bei PEM-Format sicher, dass Ihre Daten die korrekten BEGIN/END-Markierungen enthalten. Bei Hexadezimal-Eingaben können Sie verschiedene Trennzeichen (Leerzeichen, Doppelpunkte etc.) verwenden, die im Einstellungsbereich konfiguriert werden können.",
    step2Example: "-----BEGIN CERTIFICATE-----\nMIIDazCCAlOgAwIBAgIUXF3AmOAMqvdXdFLJV8C5c9K6cI8wDQYJKoZIhvcNAQEL\n...\n-----END CERTIFICATE-----",

    step3Title: "Schritt 3: ASN.1-Baumstruktur erkunden",
    step3Content: "Sobald die Daten geparst wurden, erscheint die ASN.1-Baumstruktur im linken unteren Bereich. Sie können Knoten durch Klicken auf die Dreiecke auf- und zuklappen. Jeder Knoten zeigt seinen Typ (z.B. SEQUENCE, INTEGER, OBJECT IDENTIFIER) und Wert an. Farbcodierungen helfen bei der Unterscheidung verschiedener ASN.1-Typen.",

    step4Title: "Schritt 4: Hexadezimaldarstellung prüfen",
    step4Content: "Wenn die \"Hex-Dump anzeigen\"-Option aktiviert ist, zeigt der rechte Bereich einen Hex-Dump der ASN.1-Daten. Wenn Sie mit der Maus über Elemente im Baum fahren, werden die entsprechenden Bytes im Hex-Dump hervorgehoben, was das Verständnis der binären Kodierung erleichtert.",
    step4Example: "00000000 30 82 03 6a 30 82 02 52 a0 03 02 01 02 02 14 5c 0..j0..R........\\",

    step5Title: "Schritt 5: Anzeigeoptionen konfigurieren",
    step5Content: "Passen Sie die Anzeige im Einstellungsbereich an Ihre Bedürfnisse an. Optionen umfassen das Ein-/Ausblenden des Hex-Dumps, das Kürzen großer Datenwerte für bessere Lesbarkeit, die Auswahl von Hex-Trennzeichen und farbliche Hervorhebungen nach Typ. Sie können auch alle Knoten auf einmal aufklappen, um eine vollständige Ansicht der Struktur zu erhalten.",

    // Resources section
    resourcesTitle: "Weitere Ressourcen",

    relatedToolsTitle: "Verwandte Tools",
    relatedTool1: "Base64-Konverter - Kodieren und dekodieren von Base64-Daten",
    relatedTool2: "Base64-Hex-Konverter - Einfache Konvertierung zwischen Base64- und Hexadezimalformat mit benutzerdefinierten Trennzeichen und Groß-/Kleinschreibung",
    relatedTool3: "Zertifikatsdekoder - Detaillierte Analyse von X.509-Zertifikaten",

    externalResourcesTitle: "Externe Ressourcen",
    externalResource1: "ITU-T ASN.1-Einführung - Offizielle Dokumentation des ASN.1-Standards",
    externalResource2: "RFC 5280 - Internet X.509 Public Key Infrastructure Zertifikats- und CRL-Profil"
}
