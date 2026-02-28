export default {
    title: 'MAC-Adressen-Generator: Zufällige MAC-Adressen und Netzwerkgeräte-Identifikatoren online generieren',
    functionTitle: 'Wie kann der MAC-Adressen-Generator Ihnen helfen, schnell gültige Netzwerkgeräte-Identifikatoren zu generieren?',

    useCasesTitle: 'Typische Anwendungsfälle des MAC-Adressen-Generators',
    useCase1: '<strong>Netzwerkgeräte-Tests:</strong> Der MAC-Adressen-Generator stellt Netzwerkingenieuren und Entwicklern eine große Anzahl IEEE-konformer MAC-Adressen für Konfigurationstests und funktionale Überprüfung von Netzwerkgeräten wie Routern, Switches und Firewalls zur Verfügung.',
    useCase2: '<strong>Softwareentwicklung und Debugging:</strong> Der MAC-Adressen-Generator kann strukturierte MAC-Adressdaten stapelweise generieren für Tests und Debugging bei der Netzwerkanwendungsentwicklung, IoT-Projekten und Bluetooth-Gerätesimulation.',
    useCase3: '<strong>IoT-Gerätesimulation:</strong> Der MAC-Adressen-Generator hilft Entwicklern, virtuelle Geräte-Identifikatoren für Geräteverwaltung und Kommunikationstests in Smart-Home-, Industrie-IoT- und vernetzten Fahrzeugprojekten zu erstellen.',
    useCase4: '<strong>Sicherheitstests und Forschung:</strong> Der MAC-Adressen-Generator stellt anonymisierte MAC-Adressen für Sicherheitsforscher zur Verfügung für Netzwerksicherheitstests, Penetrationstests und MAC-Filter-Umgehungs-Forschung.',
    useCase5: '<strong>Bildung und Training:</strong> Der MAC-Adressen-Generator generiert MAC-Adressen im Standardformat, um Lehrern und Schülern zu helfen, Netzwerkschicht-Adressstruktur, OUI-Zuweisungsregeln und Unicast-vs-Multicast-Unterscheidung zu verstehen.',
    useCase6: '<strong>Datenbank-Befüllung:</strong> Der MAC-Adressen-Generator erstellt realen Mustern entsprechende MAC-Adressdaten für Entwicklungs- und Testdatenbanken von Netzwerkverwaltungssystemen, Geräteüberwachungsplattformen und Asset-Management-Systemen.',

    tipTitle: 'Professionelle Nutzungstipps',
    tipContent: 'Bei der Verwendung des MAC-Adressen-Generators wird empfohlen, basierend auf den tatsächlichen Anforderungen geeignete Formate und Hersteller-Präfixe zu wählen. Für Szenarien, die die Simulation echter Geräte erfordern, wählen Sie spezifische Hersteller-OUI-Präfixe. Für Sicherheitstest-Szenarien verwenden Sie lokal verwaltete Adressen (LAA), um Konflikte mit echten Geräten zu vermeiden.',

    conclusion: '<p>Egal ob Netzwerktechnik, Softwareentwicklung oder Sicherheitsforschung, der <strong>MAC-Adressen-Generator</strong> liefert hochwertige IEEE-konforme MAC-Adressen. Der MAC-Adressen-Generator unterstützt mehrere Ausgabeformate einschließlich doppelpunkt-, bindestrich- und punktgetrennte Formate, während er Hersteller-OUI-Präfix-Auswahl bietet, um generierte Adressen realistischer zu machen. Die gesamte Verarbeitung erfolgt lokal im Browser, was gewährleistet, dass kein Datenleck-Risiko besteht.</p>',

    faqTitle: 'Häufig gestellte Fragen zum MAC-Adressen-Generator',
    faq1Question: 'Sind die vom MAC-Adressen-Generator generierten Adressen real und gültig?',
    faq1Answer: 'Die vom MAC-Adressen-Generator generierten MAC-Adressen entsprechen vollständig dem IEEE 802-Standardformat und stellen die Adressgültigkeit durch korrekte Bit-Einstellungen sicher. Es handelt sich jedoch um zufällig generierte virtuelle Adressen, die keinem echten Netzwerkgerät zugeordnet sind. Der MAC-Adressen-Generator ist nur für Test- und Entwicklungszwecke gedacht, nicht für die Verwendung als echte Geräte-Identifikatoren in Produktionsumgebungen.',

    faq2Question: 'Was ist ein OUI-Präfix? Wie verwende ich die Hersteller-Präfix-Funktion?',
    faq2Answer: 'OUI (Organizationally Unique Identifier) sind die ersten 3 Bytes einer MAC-Adresse, die von IEEE an Netzwerkgerätehersteller vergeben werden. Der MAC-Adressen-Generator bietet OUI-Präfixe für gängige Hersteller. Bei Auswahl eines bestimmten Herstellers verwenden die generierten MAC-Adressen dessen OUI, wodurch Adressen eher wie echte Geräte aussehen. Sie können auch ein benutzerdefiniertes OUI-Präfix eingeben.',

    faq3Question: 'Welche Ausgabeformate unterstützt der MAC-Adressen-Generator?',
    faq3Answer: 'Der MAC-Adressen-Generator unterstützt mehrere gängige Formate: doppelpunkt-getrenntes Format (XX:XX:XX:XX:XX:XX) für Linux/Unix-Systeme, bindestrich-getrenntes Format (XX-XX-XX-XX-XX-XX) für Windows-Systeme, punkt-getrenntes Format (XXXX.XXXX.XXXX) für Cisco-Geräte und Format ohne Trennzeichen (XXXXXXXXXXXX) für einige Embedded-Systeme.',

    faq4Question: 'Was ist der Unterschied zwischen Unicast- und Multicast-Adressen?',
    faq4Answer: 'Das niederwertigste Bit des ersten Bytes einer MAC-Adresse bestimmt den Adresstyp. Eine Unicast-Adresse hat dieses Bit auf 0 gesetzt und wird für Punkt-zu-Punkt-Kommunikation zur Identifizierung eines bestimmten Netzwerkgeräts verwendet. Eine Multicast-Adresse hat dieses Bit auf 1 gesetzt und wird für Gruppenkommunikation zur Identifizierung einer Gruppe von Netzwerkgeräten verwendet. Der MAC-Adressen-Generator unterstützt die Generierung beider Typen.',

    faq5Question: 'Was ist der Unterschied zwischen global eindeutigen Adressen (UAA) und lokal verwalteten Adressen (LAA)?',
    faq5Answer: 'Global eindeutige Adressen (UAA, Universally Administered Address) werden von Geräteherstellern zugewiesen, wobei das zweit-niederwertigste Bit des ersten Bytes auf 0 gesetzt ist. Lokal verwaltete Adressen (LAA, Locally Administered Address) werden von Netzwerkadministratoren zugewiesen, wobei dieses Bit auf 1 gesetzt ist. Der MAC-Adressen-Generator unterstützt beide Typen, wobei LAA üblicherweise in virtuellen Maschinen und Testumgebungen verwendet werden.',

    tutorialTitle: 'Benutzerhandbuch für den MAC-Adressen-Generator',
    step1Title: 'Schritt 1: MAC-Adressen-Format auswählen',
    step1Description: 'Wählen Sie im MAC-Adressen-Generator zuerst das Ausgabeformat. Das doppelpunkt-getrennte Format eignet sich für die meisten Linux/Unix-Systeme, das bindestrich-getrennte Format für Windows-Systeme und das punkt-getrennte Format für Cisco-Netzwerkgeräte. Sie können auch Groß- oder Kleinschreibung für die Ausgabe wählen.',
    step1Note: 'Verschiedene Systeme und Geräte erfordern möglicherweise unterschiedliche Formate; bitte wählen Sie das passende Format basierend auf Ihrem Anwendungsfall.',

    step2Title: 'Schritt 2: Adresstyp auswählen',
    step2Description: 'Wählen Sie im MAC-Adressen-Generator den Adresstyp: Unicast-Adressen zur Identifizierung einzelner Geräte, Multicast-Adressen zur Identifizierung von Gerätegruppen; global eindeutige Adressen (UAA) simulieren echte Geräte, lokal verwaltete Adressen (LAA) für virtuelle Umgebungen. Wählen Sie die passende Kombination basierend auf den Testanforderungen.',
    step2Note: 'Die meisten Test-Szenarien verwenden die Kombination Unicast + global eindeutige Adresse; VM-Umgebungen verwenden üblicherweise die Kombination Unicast + lokal verwaltete Adresse.',

    step3Title: 'Schritt 3: Hersteller-Präfix auswählen (optional)',
    step3Description: 'Der MAC-Adressen-Generator bietet OUI-Präfixe für gängige Netzwerkgerätehersteller wie Apple, Cisco, Intel, Huawei usw. Bei Auswahl eines bestimmten Herstellers verwenden die generierten MAC-Adressen das echte OUI-Präfix dieses Herstellers, wodurch Testdaten realistischer werden. Sie können auch ein benutzerdefiniertes OUI-Präfix eingeben.',
    step3Note: 'Wenn Sie keine spezifischen Herstellergeräte simulieren müssen, wählen Sie "Zufälliger Hersteller", um vollständig zufällige MAC-Adressen zu generieren.',

    step4Title: 'Schritt 4: Generierungsanzahl festlegen',
    step4Description: 'Geben Sie im MAC-Adressen-Generator die Anzahl der zu generierenden MAC-Adressen ein (1-1000) und klicken Sie auf die Schaltfläche "Adresse generieren". Das System generiert alle Adressen schnell lokal im Browser ohne auf Server-Antwort zu warten.',
    step4Note: 'Bei der Stapelgenerierung großer Mengen testen Sie zuerst eine kleine Menge, um zu bestätigen, dass Format und Typ Ihren Anforderungen entsprechen.',

    step5Title: 'Schritt 5: Ergebnisse anzeigen und überprüfen',
    step5Description: 'Nach Abschluss der Generierung zeigt der MAC-Adressen-Generator alle generierten Adressen im Ausgabebereich an. Sie können jeden Datensatz erweitern, um detaillierte Informationen einschließlich Herstellername, Adresstyp, Format usw. anzuzeigen. Überprüfen Sie, ob Adressformat und -typ Ihren Anforderungen entsprechen.',
    step5Note: 'Alle vom MAC-Adressen-Generator generierten Adressen entsprechen den IEEE 802-Standards und können direkt für Tests und Entwicklung verwendet werden.',

    step6Title: 'Schritt 6: Daten exportieren',
    step6Description: 'Nachdem Sie bestätigt haben, dass die Daten korrekt sind, wählen Sie das Exportformat im MAC-Adressen-Generator: JSON für Programmverarbeitung, CSV für Tabellenanalyse. Sie können auch einzelne Adressen oder alle Adressen in die Zwischenablage kopieren, um sie in andere Anwendungen einzufügen.',
    step6Note: 'Die exportierten Dateien enthalten alle generierten Felder, um die nachfolgende Datenverarbeitung und den Stapelimport zu erleichtern.',

    successTitle: 'Generierung abgeschlossen!',
    successContent: 'Herzlichen Glückwunsch, Sie haben den MAC-Adressen-Generator erfolgreich gemeistert! Sie können nun schnell IEEE-konforme MAC-Adressen für Netzwerkgerätetests, Softwareentwicklung, IoT-Simulation und verschiedene andere Szenarien generieren.',

    relatedToolsTitle: 'Verwandte Tools, die Sie ausprobieren möchten',
    relatedTool1Name: 'UUID-Generator',
    relatedTool1Description: 'Eindeutige Identifikatoren (UUID) für Datenbank-Primärschlüssel und eindeutige Identifikation generieren.',
    relatedTool1Url: 'https://www.ufreetools.com/tool/uuid-generator',

    relatedTool2Name: 'Hongkong-Adressgenerator',
    relatedTool2Description: 'Realistische Hongkong-Adressen, Identitätsinformationen und Kontaktdaten online generieren.',
    relatedTool2Url: 'https://www.ufreetools.com/tool/hk-address-generator',

    relatedTool3Name: 'Zufalls-Passwort-Generator',
    relatedTool3Description: 'Sichere und zuverlässige zufällige Passwörter zum Schutz der Kontosicherheit generieren.',
    relatedTool3Url: 'https://www.ufreetools.com/tool/password-generator',

    relatedTool4Name: 'JSON-Formatierer',
    relatedTool4Description: 'JSON-Daten verschönern und validieren für einfaches Lesen und Debugging.',
    relatedTool4Url: 'https://www.ufreetools.com/tool/json-formatter',

    reference1Name: 'IEEE OUI-Datenbank',
    reference1Description: 'Offizielle OUI-Zuweisungsinformationen und Herstellerlisten abfragen.',
    reference1Url: 'https://standards-oui.ieee.org/',

    reference2Name: 'MAC-Adresse - Wikipedia',
    reference2Description: 'Erfahren Sie mehr über MAC-Adressstruktur, Typen und Anwendungsszenarien.',
    reference2Url: 'https://en.wikipedia.org/wiki/MAC_address',

    reference3Name: 'IEEE 802-Standards',
    reference3Description: 'Vertiefen Sie sich in Netzwerkadress-Standards und Spezifikationen.',
    reference3Url: 'https://standards.ieee.org/ieee/802/10328/'
};
