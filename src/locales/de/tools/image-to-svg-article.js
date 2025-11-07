export default {
    title: 'Online-Bild-zu-SVG: Vollständiger Leitfaden zur Bitmap-Vektorisierung und SVGZ-Komprimierung',
    logoAlt: 'Produktbild des Online-Bild-zu-SVG-Tools',
    functionTitle: 'Was ist ein Bild-zu-SVG-Tool? Wie vektorisiert es schnell Bitmaps',
    intro: 'Unser <strong>Online-Bild-zu-SVG-Tool</strong> verwendet Open-Source-Algorithmen, die lokal im Browser ausgeführt werden, um PNG-, JPG-, GIF-, BMP- und andere Bitmap-Bilder sofort in skalierbare <strong>SVG-Vektorgrafiken</strong> umzuwandeln und gleichzeitig den Export in <strong>komprimiertes SVGZ</strong> zu unterstützen. Kein Server-Upload erforderlich, sofortige Vorschau, einstellbare Parameter - es hilft Ihnen, saubere, editierbare Vektorpfade in Design-, Entwicklungs- und Druckszenarien zu erhalten. Mit effizienter Farbquantisierung und Pfadoptimierung bietet diese <strong>Online-Bild-zu-SVG</strong>-Lösung starke Unterstützung für Ihren plattformübergreifenden Workflow.',

    useCasesTitle: 'Typische Anwendungsszenarien für das Online-Bild-zu-SVG-Tool',
    useCases: [
        'Logos, Symbole und flache Illustrationen schnell vektorisieren für einfache Skalierung und Bearbeitung',
        'Gescannte handgezeichnete Skizzen in SVG-Pfade konvertieren, geeignet für nachfolgende Färbung und Layout',
        'Kleinere Vektorgrafiken für Websites und Mini-Programme generieren, um das Laden und SEO zu optimieren',
        'Bitmap-Bilder in das komprimierte SVGZ-Format exportieren, um die Größe für mobile Nutzung weiter zu reduzieren',
        'PNG mit transparentem Hintergrund vektorisieren und dabei Kanten- und Transparenzinformationen erhalten',
        'Statische GIF-Einzelbilder (erstes Bild) für Grafik-Redesign und Animation vektorisieren',
        'Geeignet für Fertigungsszenarien, die SVG-Pfade benötigen, wie Lasergravur, CNC und Schneidemaschinen'
    ],

    tipTitle: 'Professionelle Tipps:',
    tipContent: 'Beim <strong>Online-Bild-zu-SVG</strong> kann das gezielte Reduzieren der Farbanzahl und Erhöhen des Pfadignorierschwellenwerts (pathomit) effektiv Rauschen reduzieren; gleichzeitig das Aktivieren des Linienfilters (linefilter) ist vorteilhaft, um für Strichzeichnungen und Symbole glatte Pfade zu erhalten.',

    conclusion: 'Wählen Sie unser <strong>Online-Bild-zu-SVG-Tool</strong>, um Vektorisierung, Vorschau, Bearbeitung und Export lokal in Ihrem Browser abzuschließen, ohne private Daten hochzuladen. Durch den Standardexport von <strong>SVG</strong> und <strong>SVGZ</strong> ist dieser <strong>Online-Bild-zu-SVG</strong>-Workflow sowohl für Design und Webentwicklung als auch für Pfadverarbeitung in Fertigungsszenarien geeignet.',

    faqTitle: 'Häufig gestellte Fragen (FAQ)',
    faqs: [
        {
            question: 'Wie erreicht das Online-Bild-zu-SVG-Tool die Vektorisierung?',
            answer: 'Dieses Tool führt Farbquantisierung, Kantenerkennung und Pfadanpassung lokal im Browser mit Open-Source-Algorithmen durch, um Bitmap-Bilder in editierbare SVG-Pfade zu konvertieren. Der gesamte Prozess erfordert keinen Server-Upload und erreicht somit wirklich <strong>Bild-zu-SVG online</strong> und Datenschutz.'
        },
        {
            question: 'Kann komprimiertes SVGZ exportiert werden? Unterstützt Online-Bild-zu-SVG dies?',
            answer: 'Ja. Sie können <strong>SVGZ</strong> in den Exportoptionen auswählen. Wir führen lokal eine GZIP-Komprimierung der SVG-Zeichenfolge durch, um eine kleinere Datei auszugeben, die für <strong>Online-Bild-zu-SVG</strong>-Anforderungen in mobilen und schwachen Netzwerkszenarien geeignet ist.'
        },
        {
            question: 'Wie ist das Vektorisierungsergebnis von PNG mit transparentem Hintergrund?',
            answer: 'Das Tool approximiert transparente Pixel angemessen und behält die Kantendarstellung bei, was für <strong>Online-Bild-zu-SVG</strong>-Szenarien wie Logos und Symbole geeignet ist. Sie können auch die Ergebnisse optimieren, indem Sie die Farbanzahl reduzieren und pathomit erhöhen.'
        },
        {
            question: 'Welche Eingabeformate werden für Online-Bild-zu-SVG unterstützt?',
            answer: 'Wir unterstützen gängige Formate wie PNG, JPG, GIF, BMP und WEBP (GIF nimmt das erste Bild), die per Drag & Drop, Klick-Upload oder Zwischenablage-Einfügen importiert werden können, um einen effizienten <strong>Online-Bild-zu-SVG</strong>-Workflow zu erreichen.'
        }
    ],

    tutorialTitle: 'Wie verwendet man das Online-Bild-zu-SVG-Tool (detaillierte Schritte)',
    step1: {
        title: 'Bilder hochladen oder einfügen',
        description: 'Klicken Sie auf den Upload-Bereich oder ziehen Sie direkt <strong>Dateien</strong> herein; unterstützt auch das <strong>Einfügen</strong> aus der Zwischenablage. Es wird empfohlen, klare Quellbilder zu verwenden, um hochwertige Vektorpfade zu erhalten.',
        note: 'Unterstützt PNG/JPG/GIF/BMP/WEBP, mehrere Bilder gelangen in die Batch-Warteschlange.'
    },
    step2: {
        title: 'Eingabe-Vorschau und Prüfung des transparenten Hintergrunds',
        description: 'Bestätigen Sie im linken Vorschaubereich, dass die importierte Datei korrekt ist; bei <strong>PNG mit transparentem Hintergrund</strong> prüfen Sie zuerst, ob Kanten und transparente Bereiche den Erwartungen entsprechen.',
        note: 'Sie können falsch ausgewählte Bilder löschen, um die Warteschlange sauber zu halten.'
    },
    step3: {
        title: 'Vektorisierungsparameter anpassen',
        description: 'Passen Sie die <strong>Farbanzahl</strong>, <strong>ltres</strong>, <strong>qtres</strong>, <strong>pathomit</strong> und <strong>Linienfilterung</strong> entsprechend den Bildmerkmalen an. Die rechte Vorschau aktualisiert sich in Echtzeit und hilft Ihnen, das beste Gleichgewicht beim <strong>Online-Bild-zu-SVG</strong> zu erreichen.',
        note: 'Für Strichzeichnungen pathomit erhöhen, für Logos Farben reduzieren, um sauberere Pfade zu erhalten.'
    },
    step4: {
        title: 'Konvertierung durchführen und Vergleich anzeigen',
        description: 'Klicken Sie auf "Mit Konvertierung zu SVG beginnen", das Tool generiert lokal <strong>SVG</strong> und bietet eine interaktive Vorschau. Über die Vergleichsansicht von Original- und vektorisiertem Bild können Sie schnell die Pfadqualität prüfen.',
        note: 'Auf mobilen Geräten können Details problemlos angezeigt und vergrößert werden.'
    },
    step5: {
        title: 'Exportformat wählen: SVG oder SVGZ',
        description: 'Für minimale Dateigröße wählen Sie <strong>SVGZ</strong>; für weitere Bearbeitung und Kompatibilität wählen Sie <strong>SVG</strong>. Beide können für die Anwendung von <strong>Online-Bild-zu-SVG</strong>-Ergebnissen in Web- und Design-Tools verwendet werden.',
        note: 'SVGZ lädt freundlicher in schwachen Netzwerken und auf mobilen Geräten.'
    },
    step6: {
        title: 'Herunterladen oder stapelweise packen',
        description: 'Laden Sie jedes Vektorgrafik einzeln herunter oder verwenden Sie "Batch-Download (ZIP)", um Warteschlangenergebnisse auf einmal zu exportieren und Zeit im <strong>Online-Bild-zu-SVG</strong>-Prozess zu sparen.',
        note: 'Alle Operationen werden lokal im Browser abgeschlossen, um die Bildprivatsphäre zu schützen.'
    },

    successTitle: 'Glückwunsch!',
    successContent: 'Sie haben gelernt, wie man <strong>Online-Bild-zu-SVG</strong> verwendet, um Bitmap-Vektorisierung, Parameteroptimierung und Multi-Format-Export abzuschließen.',

    relatedToolsTitle: 'Verwandte Tools, die Sie interessieren könnten',
    relatedTools: [
        {
            name: 'Bildkompressor',
            description: 'Bilddateigröße ohne signifikanten Qualitätsverlust reduzieren.',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: 'Batch-Bildgrößenänderung',
            description: 'Bilder auf bestimmte Abmessungen skalieren oder prozentual verändern.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: 'Bildfarben umkehren',
            description: 'Farben mit einem Klick umkehren, um fotografische Negative und kreative Effekte zu erzeugen.',
            url: 'https://www.ufreetools.com/tool/invert-image-colors'
        },
        {
            name: 'QR-Code-Generator',
            description: 'Benutzerdefinierte QR-Codes für URLs, Texte, Kontaktinformationen usw. erstellen.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],

    referencesTitle: 'Referenzressourcen',
    references: [
        {
            name: 'SVG-Grundlagen und Best Practices (MDN)',
            description: 'Erfahren Sie mehr über SVG-Syntax, Rendering und Zugänglichkeit.',
            url: 'https://developer.mozilla.org/de/docs/Web/SVG'
        },
        {
            name: 'Forschung zur Farbquantisierung und Bildvektorisierung',
            description: 'Erforschen Sie die theoretischen Grundlagen der Quantisierungs-, Kantenerkennungs- und Pfadanpassungsmethoden.',
            url: 'https://de.wikipedia.org/wiki/Farbquantisierung'
        },
        {
            name: 'Schema.org FAQPage-Markup',
            description: 'Verwenden Sie strukturierte Daten, um Suchmaschinen beim Verstehen von FAQ-Inhalten zu helfen.',
            url: 'https://schema.org/FAQPage'
        }
    ]
}