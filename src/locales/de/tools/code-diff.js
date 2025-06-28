export default {
    name: 'Code-Differenz-Vergleich',
    description: 'Vergleichen Sie zwei Codeabschnitte und heben Sie Unterschiede hervor',

    options: {
        title: 'Optionen',
        ignoreCase: 'Groß-/Kleinschreibung ignorieren',
        ignoreWhitespace: 'Leerzeichen ignorieren',
        trimWhitespace: 'Leerzeichen trimmen',
        diffMode: 'Differenzmodus',
        diffModes: {
            chars: 'Zeichen',
            words: 'Wörter',
            lines: 'Zeilen',
            sentences: 'Sätze',
            json: 'JSON'
        },
        diffStyle: 'Anzeigestil',
        diffStyles: {
            split: 'Geteilte Ansicht',
            inline: 'Inline-Ansicht'
        },
        context: 'Kontextzeilen',
        wrap: 'Zeilenumbruch',
        languages: {
            plaintext: 'Klartext',
            html: 'HTML',
            css: 'CSS',
            javascript: 'JavaScript',
            json: 'JSON'
        }
    },

    inputs: {
        original: 'Originalcode',
        modified: 'Modifizierter Code',
        placeholderOriginal: 'Originalcode hier eingeben...',
        placeholderModified: 'Modifizierten Code hier eingeben...'
    },

    actions: {
        compare: 'Vergleichen',
        clear: 'Zurücksetzen',
        swap: 'Tauschen',
        copy: 'Differenz kopieren',
        download: 'Differenz herunterladen',
        upload: 'Datei hochladen'
    },

    results: {
        title: 'Vergleichsergebnisse',
        changes: 'Änderungen',
        additions: 'Hinzugefügt',
        deletions: 'Gelöscht',
        unchanged: 'Unverändert',
        noChanges: 'Keine Unterschiede gefunden - Die Texte sind identisch',
        loading: 'Differenz wird generiert...'
    },

    upload: {
        originalFile: 'Originaldatei',
        modifiedFile: 'Modifizierte Datei',
        dropOriginal: 'Originaldatei hier ablegen oder zum Durchsuchen klicken',
        dropModified: 'Modifizierte Datei hier ablegen oder zum Durchsuchen klicken'
    },

    messages: {
        copied: 'In die Zwischenablage kopiert!',
        inputRequired: 'Bitte geben Sie Text in beide Eingabefelder ein',
        diffGenerated: 'Differenz erfolgreich generiert',
        error: 'Fehler bei der Generierung der Differenz',
        fileError: 'Fehler beim Lesen der Datei'
    },

    tips: {
        title: 'Verwendungstipps',
        compareOptions: 'Passen Sie die Vergleichsoptionen an Ihre Bedürfnisse an - Leerzeichen ignorieren ist besonders nützlich für Code-Vergleiche.',
        diffModes: 'Verschiedene Differenzmodi bieten unterschiedliche Detailgrade für den Vergleich.',
        largeFiles: 'Für große Dateien ist zeilenbasierter Vergleich effizienter.',
        jsonMode: 'Verwenden Sie den JSON-Modus für strukturierte Daten - er normalisiert und vergleicht Objektstrukturen.'
    },

    article: {
        title: "Code-Differenz-Tool: Effizientes Verständnis von Codeänderungen",
        features: {
            title: "Code-Differenz-Vergleiche verstehen",
            description: "Dieses <strong>Code-Differenz-Tool</strong> ist ein fortschrittliches <strong>Code-Vergleichs-Tool</strong>, das speziell für Entwickler und Programmierer entwickelt wurde, um Unterschiede zwischen Codeabschnitten zu identifizieren. Dieser leistungsstarke <strong>Differenz-Prüfer</strong> hebt Hinzufügungen, Löschungen und Änderungen zwischen Textdateien hervor und ist für Code-Reviews, Versionskontrolle und Debugging-Prozesse von unschätzbarem Wert.<br><br>Unser <strong>Text-Vergleichs-Tool</strong> bietet mehrere Vergleichsmodi, einschließlich Zeichen-, Wort-, Zeilen-, Satz- und spezieller JSON-Analyse. Das Tool bietet sowohl geteilte als auch Inline-Ansichten als Visualisierungsoptionen, um verschiedenen Vorlieben und Anwendungsfällen gerecht zu werden. Egal, ob Sie mit Quellcode, Konfigurationsdateien oder textbasierten Inhalten arbeiten, dieses <strong>Code-Vergleichs-Tool</strong> bietet Ihnen präzise Einblicke in Änderungen zwischen Versionen.",
            useCases: {
                title: "Praktische Anwendungsfälle für Code-Vergleiche",
                items: [
                    "Softwareentwickler verfolgen <strong>Codeänderungen</strong> zwischen verschiedenen Versionen einer Anwendung, um die Quelle von Fehlern oder unerwartetem Verhalten zu identifizieren",
                    "Teamleiter führen <strong>Code-Reviews</strong> durch, um visuell zu sehen, was Teammitglieder in Pull-Requests geändert haben, bevor sie Änderungen genehmigen",
                    "DevOps-Ingenieure vergleichen <strong>Konfigurationsdateien</strong> in verschiedenen Umgebungen, um Konsistenz sicherzustellen oder umgebungsspezifische Anpassungen zu identifizieren",
                    "Technische Autoren vergleichen <strong>Dokumentationsentwürfe</strong>, um zu sehen, wie sich Inhalte entwickelt haben oder welche Teile basierend auf Produktänderungen aktualisiert werden müssen",
                    "Datenanalysten überprüfen Unterschiede in <strong>JSON-Strukturen</strong> oder Datenexporten, um zu verstehen, wie sich Datenmodelle über die Zeit verändert haben",
                    "Programmierstudenten vergleichen ihre <strong>Code-Lösungen</strong> mit Referenzimplementierungen, um verschiedene Ansätze zur Problemlösung zu verstehen"
                ]
            }
        },
        faq: {
            title: "Häufige Fragen zur Code-Differenzanalyse",
            items: [
                {
                    question: "Was ist der Unterschied zwischen zeichenbasiertem und zeilenbasiertem Vergleich?",
                    answer: "Zeichenbasierter Vergleich identifiziert Änderungen auf Einzelzeichen-Ebene und hebt präzise Änderungen innerhalb von Wörtern oder Codeabschnitten hervor. Dies ist ideal, um kleine, subtile Änderungen wie Variablenumbenennungen zu erkennen. Zeilenbasierter Vergleich behandelt jede Zeile als Einheit und hebt ganze Zeilen hervor, die hinzugefügt, gelöscht oder geändert wurden. Dieser Modus ist effizienter für große Dateien und bietet einen klareren Überblick, wenn große Codeabschnitte geändert wurden - dies ist die Standardeinstellung der meisten Code-Review-Systeme und Versionskontroll-Tools."
                },
                {
                    question: "Kann das Code-Differenz-Tool mit großen Dateien oder Codebasen umgehen?",
                    answer: "Ja, unser Code-Differenz-Tool ist für den Vergleich großer Dateien optimiert. Für große Codebasen empfehlen wir den zeilenbasierten Vergleichsmodus, der im Vergleich zu zeichen- oder wortbasierten Modi effizienter mit Differenzen umgeht. Das Tool implementiert intelligente Drosselungs- und Verarbeitungstechniken, um auch bei umfangreichen Eingaben reaktionsfähig zu bleiben. Bei sehr großen Dateien (Text mit mehreren MB) kann es jedoch sinnvoll sein, sich auf bestimmte Codeabschnitte zu konzentrieren, anstatt die gesamte Datei auf einmal zu vergleichen."
                },
                {
                    question: "Wie funktioniert der JSON-Vergleichsmodus?",
                    answer: "Der JSON-Vergleichsmodus ist speziell für den Vergleich strukturierter Daten konzipiert. Im Gegensatz zum Standardtextvergleich analysiert dieser Modus zunächst beide Eingaben als JSON-Objekte, normalisiert ihre Struktur (behandelt unterschiedliche Leerzeichen, Einrückungen und Attributreihenfolgen) und identifiziert dann tatsächliche Datenunterschiede. Dies bedeutet, dass zwei JSON-Objekte mit denselben Daten, aber unterschiedlicher Formatierung oder Attributreihenfolge als identisch erkannt werden. Dieser Modus ist besonders wertvoll für den Vergleich von API-Antwortstrukturen, Konfigurationsmanagement und Datenanalyse, wo semantischer Inhalt wichtiger ist als exakte Textdarstellung."
                },
                {
                    question: "Kann ich mit diesem Tool Code in verschiedenen Programmiersprachen vergleichen?",
                    answer: "Absolut. Das Code-Differenz-Tool funktioniert mit jedem textbasierten Format und ist somit sprachunabhängig. Egal, ob Sie JavaScript, Python, Java, C++, HTML, CSS oder anderen Code vergleichen - es hebt Syntaxunterschiede effektiv hervor. Zur besseren Lesbarkeit bietet das Tool Syntax-Highlighting für gängige Programmiersprachen, was hilft, Änderungen im sprachspezifischen Kontext zu visualisieren. Dies macht es ebenso wertvoll für Full-Stack-Entwickler, die mit mehreren Technologien arbeiten, wie für Experten, die sich auf eine einzelne Sprache konzentrieren."
                },
                {
                    question: "Wie kann ich Vergleichsergebnisse teilen oder speichern?",
                    answer: "Unser Code-Differenz-Tool bietet mehrere Optionen zum Teilen und Speichern von Vergleichsergebnissen. Sie können den 'Differenz kopieren'-Button verwenden, um formatierte Unterschiede in die Zwischenablage zu kopieren und in Dokumente, E-Mails oder Chat-Anwendungen einzufügen. Die 'Differenz herunterladen'-Funktion ermöglicht es Ihnen, den vollständigen Vergleich als HTML-Datei mit allen Hervorhebungen und Formatierungen zu speichern. Für Workflow-Integrationen können Sie auch permanente Links zu bestimmten Vergleichen generieren und mit Teammitgliedern teilen. Diese Optionen machen es einfach, Differenzergebnisse in Ihre Dokumentation, Code-Review-Prozesse oder Fehlerbehebungsdiskussionen einzubinden."
                }
            ]
        },
        guide: {
            title: "Schritt-für-Schritt-Anleitung zum Code-Vergleich",
            steps: [
                "Wählen Sie zunächst den <strong>Vergleichsmodus</strong>, der am besten zu Ihren Anforderungen passt - zeilenbasierter Vergleich eignet sich für die meisten Code-Vergleiche, während Wort- oder Zeichenmodi besser für detaillierte Textunterschiede geeignet sind",
                "Wählen Sie je nach Präferenz und Bildschirmgröße zwischen <strong>geteilter Ansicht</strong> (nebeneinander) oder <strong>Inline-Ansicht</strong>",
                "Fügen Sie Ihren <strong>Originalcode</strong> im linken Eingabebereich ein oder geben Sie ihn ein, wobei Sie auf korrekte Formatierung für bessere Lesbarkeit achten",
                "Fügen Sie Ihren <strong>modifizierten Code</strong> im rechten Eingabebereich hinzu - bei Bedarf können Sie die Vergleichsrichtung mit der Tauschfunktion umkehren",
                "Klicken Sie auf die <strong>Vergleichen</strong>-Schaltfläche, um eine visuelle Differenz zwischen den beiden Codeabschnitten zu generieren",
                "Überprüfen Sie die Ergebnisse, wobei <strong>Hinzufügungen</strong> grün hervorgehoben werden, <strong>Löschungen</strong> rot und unveränderte Teile neutral bleiben",
                "Nutzen Sie die <strong>Zusammenfassungsstatistiken</strong> am unteren Rand, um schnell den Umfang der Änderungen zu verstehen (Anzahl der Hinzufügungen, Löschungen und insgesamt geänderte Zeilen)",
                "Verwenden Sie für komplexe Dateien die Suchfunktion, um bestimmte Abschnitte oder Änderungen im verglichenen Code zu finden"
            ]
        },
        conclusion: "Das Code-Differenz-Tool vereinfacht die oft komplexe Aufgabe, Codeänderungen zu identifizieren und zu verstehen. Durch die klare, visuelle Darstellung von Unterschieden zwischen Textdateien spart es Entwicklern und technischen Fachleuten wertvolle Zeit bei Debugging, Code-Reviews und Versionsverwaltung. Egal, ob Sie Änderungen in großen Codebasen verfolgen, die Arbeit von Kollegen überprüfen oder herausfinden möchten, wann und wo ein Fehler eingeführt wurde - dieses Vergleichstool bietet die Präzision und Flexibilität, die Sie benötigen, um sich entwickelnden Code zu verstehen. Regelmäßige Nutzung dieses Tools kann Ihren Entwicklungs-Workflow verbessern, durch bessere Reviews die Codequalität steigern und helfen, Konsistenz zwischen Projektversionen zu erhalten."
    }
}