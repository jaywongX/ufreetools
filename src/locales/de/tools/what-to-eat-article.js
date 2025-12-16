export default {
    title: 'Online-Entscheidungstool "Was heute essen": Leitfaden für intelligente Essensempfehlungen und Essensentscheidungen',
    functionTitle: 'Was ist das Online-Entscheidungstool "Was heute essen"?',
    intro: 'Unser <strong>Online-Entscheidungstool "Was heute essen"</strong> ist eine Open-Source-Anwendung mit reinem Frontend, die durch die Bewertung mehrerer Dimensionen wie Zeit, Budget, Schärfelevel, Ernährungsbeschränkungen, Wetter und Anlass in Echtzeit ausführbare Essensempfehlungen generiert. Der gesamte Entscheidungsprozess wird lokal in Ihrem Browser abgeschlossen, ohne persönliche Präferenzen hochzuladen, was ihn sowohl effizient als auch schützend für die Privatsphäre macht.',
    useCasesTitle: 'Praktische Anwendungsszenarien',
    useCases: [
        'Schnell entscheiden, was als später Snack während Überstunden oder durchwachten Nächten gegessen wird, die Entscheidungszeit verkürzen',
        'Mehrwertige Menükombinationen basierend auf Budget und Schärfepräferenzen während der Mittagszeit finden',
        'Anlassgerechte Gerichtekombinationen auswählen, die bei Dates oder Familientreffs nicht enttäuschen',
        'Erfrischende/wärmende Gerichte und Getränke für heiße, kühle oder regnerische Wetterbedingungen zusammenstellen',
        'Sichere Menüoptionen für vegetarische, vegane oder Halal-kompatible Ernährungsbedürfnisse',
        'Ideen für eiweißreiche, kohlenhydratarme Mahlzeiten während Fitness-Aufbau- oder Zuckerkontrollphasen priorisieren',
        'Schnell lokale, gängige und leicht erhältliche Lebensmittel auflisten, wenn man unterwegs oder auf Geschäftsreise ist',
        'Lieferfähige oder einfach zubereitbare Hausmannskost empfehlen, wenn es regnet und man nicht rausgehen möchte'
    ],
    tipTitle: 'Professioneller Tipp:',
    tipContent: 'Sperren Sie zuerst "Essenszeit" und "Budget-Präferenz", justieren Sie dann fein Schärfelevel, Wetter und Ernährungsbeschränkungen, um dem Online-Entscheidungstool "Was heute essen" zu helfen, schneller hochpassende Ergebnisse zu liefern.',
    conclusion: 'Das <strong>Online-Entscheidungstool "Was heute essen"</strong> beseitigt den Kampf bei der Menüauswahl. Mit mehrdimensionaler Bewertung und lokalen Berechnungen können Sie in Sekunden Essensempfehlungen erhalten, die Ihrem Geschmack, Budget und Anlass entsprechen, geeignet für Büromitarbeiter, Studenten, Fitness-Enthusiasten oder Familien für den jederzeitigen Gebrauch.',
    faqTitle: 'Häufig gestellte Fragen (FAQ)',
    faqs: [
        {
            question: 'Wie stellt das Online-Entscheidungstool "Was heute essen" sicher, dass Ergebnisse authentisch und zuverlässig sind?',
            answer: 'Das Tool basiert auf öffentlich zugänglichen gängigen Gericht-Datensätzen und bewertet nach Zeit, Budget, Schärfelevel, Wetter, Anlass und Ernährungsbeschränkungen. Filterung und Randomisierung laufen lokal ab, es werden Menüs empfohlen, die tatsächlich ausgeführt werden können.'
        },
        {
            question: 'Wird die Verwendung des Online-Entscheidungstools "Was heute essen" meine persönlichen Präferenzen hochladen?',
            answer: 'Nein. Alle Berechnungen werden lokal in Ihrem Browser abgeschlossen und laden keine Filterinformationen auf Server hoch, gewährleistet Privatsphäre-Sicherheit.'
        },
        {
            question: 'Können Vegetarier oder Halal-Benutzer geeignete Empfehlungen vom Online-Entscheidungstool "Was heute essen" erhalten?',
            answer: 'Ja. Bei der Auswahl vegetarischer, veganer oder Halal-kompatibler Optionen filtert das System nicht konforme Gerichte heraus, zeigt nur Optionen, die den Ernährungsbeschränkungen entsprechen.'
        },
        {
            question: 'Wie beeinflussen Wetter oder Anlässe die Empfehlungen des Online-Entscheidungstools "Was heute essen"?',
            answer: 'Optionen wie heiß/regnerisch, Date/Überstunden passen die Gerichtebewertungen an, neigen beispielsweise zu kalten Gerichten bei heißem Wetter, warmen Suppen bei regnerischem Wetter und beeindruckenden, teilbaren Optionen bei Dates.'
        },
        {
            question: 'Kann eiweißreiche oder kohlenhydratarme Ernährung im Online-Entscheidungstool "Was heute essen" erreicht werden?',
            answer: 'Ja. Bei der Auswahl eiweißreicher oder kohlenhydratarmer Präferenzen priorisiert der Algorithmus eiweißreiche Grundnahrungsmittel und kohlenhydratarme Kombinationen, geeignet für Fitness- oder Zuckerkontroll-Szenarien.'
        },
        {
            question: 'Wenn ich mit den Ergebnissen nicht zufrieden bin, kann das Online-Entscheidungstool "Was heute essen" einen neuen Stapel bereitstellen?',
            answer: 'Ja. Klicken Sie auf "Weitere Empfehlungen", um unter den gleichen Bedingungen erneut zu randomisieren, bis zufriedenstellende Optionen gefunden werden.'
        },
        {
            question: 'Warum gibt es manchmal weniger Empfehlungen?',
            answer: 'Wenn Filterbedingungen zu streng sind (z.B. vegan + Halal + hoher Proteingehalt + später Snack + heißes Wetter), verringern sich übereinstimmende Elemente. Sie können einige Bedingungen lockern und erneut versuchen, oder auf "Filter zurücksetzen" klicken.'
        },
        {
            question: 'Ist das Online-Entscheidungstool "Was heute essen" Open Source?',
            answer: 'Ja, das Tool verwendet Open-Source-Implementierung mit reinem Frontend mit überprüfbarer Logik und Daten, erleichtert Anpassung und sekundäre Entwicklung.'
        }
    ],
    tutorialTitle: 'Wie man das Online-Entscheidungstool "Was heute essen" verwendet',
    steps: [
        {
            title: 'Zeit und Budget sperren',
            description: 'Wählen Sie "Essenszeit" und "Budget-Präferenz", um dem Online-Entscheidungstool "Was heute essen" zu helfen, zuerst die Kandidatenoptionen einzugrenzen.'
        },
        {
            title: 'Schärfelevel und Ernährungsbeschränkungen festlegen',
            description: 'Unpassende Gerichte nach Schärfelevel, vegetarischen/Halal-Beschränkungen filtern, um sicherzustellen, dass Ergebnisse tatsächlich ausführbar sind.'
        },
        {
            title: 'Feinjustierung nach Wetter und Anlass',
            description: 'Optionen wie heiß, regnerisch oder Date, Überstunden passen Bewertungen an, heben passendere Menüs hervor.'
        },
        {
            title: 'Auf Entscheidung starten klicken',
            description: 'Klicken Sie auf "Entscheidung starten", um Ergebnisse zu generieren. Für mehr Inspiration, klicken Sie weiterhin auf "Weitere Empfehlungen".'
        },
        {
            title: 'Gründe und Energiehinweise anzeigen',
            description: 'Jede Empfehlung kommt mit Gründen und Energiehinweisen, um schnelle Entscheidungen zu unterstützen.'
        },
        {
            title: 'Zurücksetzen oder erneut optimieren',
            description: 'Um neu zu beginnen, verwenden Sie "Filter zurücksetzen", oder justieren Sie fein individuelle Präferenzen, um neue Ergebnisse weiter zu generieren.'
        }
    ],
    successTitle: 'Herzlichen Glückwunsch!',
    successContent: 'Sie haben die Verwendung des Online-Entscheidungstools "Was heute essen" gemeistert, erhalten jederzeit personalisierte Menüinspiration, verabschieden sich leicht von Entscheidungsparalyse.',
    relatedToolsTitle: 'Verwandte Tools, die Sie interessieren könnten',
    relatedTools: [
        {
            name: 'Bildkomprimierer',
            description: 'Komprimieren Sie Essensfotos oder Menübilder für einfaches Teilen und Archivieren.',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: 'QR-Code-Generator',
            description: 'Generieren Sie QR-Codes für Menüs oder Gruppenkauf-Links für bequemes Scannen und Bestellen.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        },
        {
            name: 'EXIF-Betrachter',
            description: 'Zeigen Sie EXIF-Informationen von Essensfotos an, um Aufnahmedaten und Standorte zu verwalten.',
            url: 'https://www.ufreetools.com/tool/exif-viewer'
        },
        {
            name: 'Siegel-Generator',
            description: 'Erstellen Sie digitale Siegel für Community- oder Restaurant-Events für Werbematerialien.',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        }
    ],
    referencesTitle: 'Referenzressourcen',
    references: [
        {
            name: 'Dietary Guidelines for Americans',
            description: 'Offiziell veröffentlichte Richtlinien für ausgewogene Ernährung und Ernährung',
            url: 'https://www.dietaryguidelines.gov/'
        },
        {
            name: 'Dietary Patterns and Health',
            description: 'Forschungsüberblick über Ernährungsmuster und Gesundheitseinflüsse',
            url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7071241/'
        },
        {
            name: 'FoodData Central',
            description: 'Öffentliche US-Landwirtschaftsministerium-Ernährungsdatenbank',
            url: 'https://fdc.nal.usda.gov/'
        }
    ]
};