export default {
    name: 'Schwarz-Weiß-Bildkonverter - Online-Farbinversionstool',
    description: 'Kostenloses Online-Tool zum Umwandeln von Schwarz in Weiß und Invertieren von Bildfarben. Erstellen Sie mit unserem Schwarz-Weiß-Konverter Negativ-Effekte. Unterstützt PNG, JPG, WEBP Formate',
    inputTitle: 'Eingabebild',
    outputTitle: 'Invertiertes Bild',
    dragTip: 'Bild hierher ziehen und ablegen oder zum Hochladen klicken',
    supported: 'Unterstützte Formate: PNG, JPEG, BMP, WEBP',
    invertBtn: 'Farben invertieren',
    downloadBtn: 'Herunterladen',
    noOutput: 'Noch kein Ausgabebild',
    loadSample: 'Beispielbild laden',
    preview: 'Bildvorschau',
    clearAll: 'Alles löschen',
    originalImage: 'Originalbild',
    deleteImage: 'Bild löschen',
    batchDownload: 'Stapeldownload (ZIP)',
    exportFormat: 'Exportformat',
    imageQuality: 'Bildqualität',
    zoomIn: 'Vergrößern',
    zoomOut: 'Verkleinern',
    resetView: 'Ansicht zurücksetzen',
    fullscreen: 'Vollbildansicht',
    
    // Artikelinhalt
    article: {
        title: 'Bildfarbinversionstool: Anleitung zum Online-Schwarz-Weiß-Konverter',
        functionTitle: 'Was ist ein Bildfarbinversionstool und wofür wird es verwendet?',
        intro: 'Unser <strong>Bildfarbinversionstool</strong> ist eine leistungsstarke Online-Anwendung, die sofortige Farbinversion von Bildern ermöglicht. Dieser Prozess erzeugt einen Negativfilm-Effekt, bei dem dunkle Bereiche des Bildes hell und helle Bereiche dunkel werden. Das Tool erreicht dies durch Berechnung der entgegengesetzten Werte für jeden RGB-Farbkanal (255 minus Originalwert), wodurch effektiv ein fotografischer Negativfilm des Originalbildes erstellt wird. Mit unserem <strong>Online-Bildfarbinversionstool</strong> können Sie mehrere Bilder gleichzeitig verarbeiten und in verschiedenen Formaten wie PNG, JPG, WEBP und BMP herunterladen.',
        
        useCasesTitle: 'Häufige Anwendungsfälle für Bildfarbinversion',
        useCases: [
            'Erstellung künstlerischer Negativfilm-Effekte für Fotoprojekte',
            'Verbesserung der Lesbarkeit von gescannten Dokumenten mit dunklem Hintergrund',
            'Vorbereitung von Drucknegativen in der traditionellen Fotografie',
            'Erstellung von Nachtsicht-Stilbildern für kreative oder Designzwecke',
            'Verbesserung der Detailerkennbarkeit in Röntgen- oder medizinischen Aufnahmen',
            'Umwandlung von Dark-Mode-Designs in Light-Mode (und umgekehrt)',
            'Erstellung visueller Effekte für Social-Media-Inhalte',
            'Erhöhung des Kontrasts für sehbehinderte Nutzer'
        ],
        
        tipTitle: 'Profitipp:',
        tipContent: 'Bei der Farbinversion von Dokumenten oder Texten liefert das PNG-Format normalerweise die besten Ergebnisse, da seine verlustfreie Komprimierung die Klarheit der Textkanten erhält.',
        
        conclusion: 'Das <strong>Bildfarbinversionstool</strong> ist besonders nützlich für Designer, Fotografen, medizinisches Fachpersonal und alle, die mit digitalen Bildern arbeiten. Durch die Verwendung unseres Farbinvertierers zur Bildkonvertierung können Sie Details entdecken, die im Originalbild möglicherweise nicht sichtbar waren, beeindruckende künstlerische Effekte erzeugen oder einfach dunkle Bilder in bestimmten Umgebungen besser sichtbar machen. Unser Tool macht diesen Prozess einfach und effizient, ohne dass Software installiert werden muss.',
        
        faqTitle: 'Häufig gestellte Fragen',
        faqs: [
            {
                question: 'Was passiert, wenn ich die Farben eines Bildes invertiere?',
                answer: 'Wenn Sie unseren <strong>Web-basierten Bildinvertierer</strong> verwenden, wird jeder Pixelwert durch Subtraktion des Originalwerts von 255 (dem Maximalwert in RGB) invertiert. Schwarz wird zu Weiß, Weiß zu Schwarz, Rot zu Cyan, Grün zu Magenta und Blau zu Gelb. Dadurch entsteht ein fotografischer Negativfilm-Effekt, bei dem alle Farben durch ihre Komplementärfarben ersetzt werden.'
            },
            {
                question: 'Beeinträchtigt die Farbinversion meine Bildqualität?',
                answer: 'Nein, der Inversionsprozess selbst verringert nicht die Bildqualität. Unser Tool behält die ursprüngliche Auflösung und die Details des Bildes bei. Die endgültige Qualität hängt jedoch vom gewählten Exportformat ab. Für detaillierte Bilder oder Texte empfehlen wir das PNG-Format, das verlustfreie Komprimierung bietet.'
            },
            {
                question: 'Kann ich speziell Schwarz-Weiß-PNG-Bilder konvertieren?',
                answer: 'Ja, unsere <strong>Schwarz-Weiß-Bildkonvertierung</strong> unterstützt vollständig das PNG-Format. Sie können PNG-Bilder hochladen, ihre Farben invertieren und sie dann wieder als PNG-Dateien herunterladen. Dies ist besonders nützlich für Grafiken mit Transparenz, da unser Tool den Alpha-Kanal während des Konvertierungsprozesses beibehält.'
            },
            {
                question: 'Wie kann ich mehrere Bilder gleichzeitig stapelverarbeiten?',
                answer: 'Unser Tool unterstützt die Stapelverarbeitung. Ziehen Sie einfach mehrere Bilder in den Upload-Bereich oder wählen Sie mehrere Dateien über den Dateibrowser aus. Nach dem Hochladen klicken Sie auf den "Farben invertieren"-Button, um alle Bilder gleichzeitig zu verarbeiten. Anschließend können Sie jedes Bild einzeln herunterladen oder die "Stapeldownload"-Option verwenden, um alle invertierten Bilder in einer ZIP-Datei zu packen.'
            },
            {
                question: 'Gibt es Einschränkungen bei der Größe oder Anzahl der Bilder, die ich verarbeiten kann?',
                answer: 'Das Tool ist für die effiziente Verarbeitung der meisten gängigen Bildgrößen ausgelegt. Sehr große Bilder (über 20MB) können jedoch in einigen Browsern zu Leistungsproblemen führen. Für die Anzahl der Bilder können Sie mehrere Dateien gleichzeitig verarbeiten, aber wir empfehlen, die Stapelgröße in einem angemessenen Rahmen (nicht mehr als 20 Bilder) zu halten, um eine optimale Leistung zu gewährleisten.'
            }
        ],
        
        tutorialTitle: 'So verwenden Sie das Bildfarbinversionstool',
        steps: [
            {
                title: 'Laden Sie Ihr Bild hoch',
                description: 'Laden Sie zunächst das Bild hoch, dessen Farben Sie invertieren möchten. Sie können die Datei direkt in den Upload-Bereich <strong>ziehen und ablegen</strong> oder durch Klicken durchsuchen und von Ihrem Gerät auswählen. Unser Tool unterstützt JPG-, PNG-, BMP- und WEBP-Formate.',
                note: 'Sie können mehrere Bilder gleichzeitig für die Stapelverarbeitung hochladen.'
            },
            {
                title: 'Vorschau und Anpassung',
                description: 'Nach dem Hochladen sehen Sie eine Miniaturansicht des Originalbildes im Vorschaubereich. Überprüfen Sie diese vor dem Fortfahren, um sicherzustellen, dass Sie die richtigen Dateien ausgewählt haben.',
                note: 'Wenn Sie Bilder löschen möchten, fahren Sie mit der Maus über die Miniaturansicht und klicken Sie auf das Löschsymbol.'
            },
            {
                title: 'Farben invertieren',
                description: 'Klicken Sie auf den <strong>"Farben invertieren"</strong>-Button, um Ihr Bild zu verarbeiten. Das Tool wandelt Schwarz in Weiß um und invertiert alle anderen Farben im Bild, wodurch ein Negativfilm-Effekt entsteht.',
                note: 'Für die meisten Bilder ist dieser Prozess sofort abgeschlossen, aber sehr große Dateien können etwas länger zur Verarbeitung benötigen.'
            },
            {
                title: 'Erkunden und interagieren',
                description: 'Nach der Verarbeitung erscheint Ihr invertiertes Bild im Ausgabebereich. Sie können mit Zoom- und Verschiebefunktionen mit jedem Bild interagieren, um Details zu betrachten. Das Tool ermöglicht Ihnen das Vergrößern/Verkleinern und Bewegen innerhalb des Bildes, um bestimmte Bereiche zu untersuchen.',
                note: 'Klicken Sie auf die Vollbildschaltfläche, um das Bild in einem größeren Fenster zu betrachten.'
            },
            {
                title: 'Exportoptionen wählen',
                description: 'Wählen Sie für jedes invertierte Bild Ihr bevorzugtes Exportformat (PNG, JPG, WEBP oder BMP). Wenn Sie JPG wählen, können Sie mit dem Schieberegler auch die Qualität anpassen, um einen Ausgleich zwischen Dateigröße und Bildqualität zu finden.',
                note: 'Für Bilder mit Text oder scharfen Kanten wird PNG empfohlen; für Fotos eignet sich JPG besser.'
            },
            {
                title: 'Ihre Ergebnisse herunterladen',
                description: 'Klicken Sie auf den <strong>"Herunterladen"</strong>-Button unter jedem Bild, um es einzeln zu speichern, oder verwenden Sie den <strong>"Stapeldownload"</strong>-Button oben im Ausgabebereich, um alle invertierten Bilder als ZIP-Datei herunterzuladen.',
                note: 'Die gesamte Verarbeitung erfolgt in Ihrem Browser, sodass Ihre Bilder niemals auf einen Server hochgeladen werden, was Privatsphäre und Sicherheit gewährleistet.'
            }
        ],
        
        successTitle: 'Glückwunsch!',
        successContent: 'Sie haben erfolgreich gelernt, wie Sie unser Bildfarbinversionstool verwenden. Jetzt können Sie einfach Negativfilm-Versionen von Bildern für verschiedene kreative und praktische Zwecke erstellen.',
        
        relatedToolsTitle: 'Verwandte Tools, die Sie interessieren könnten',
        relatedTools: [
            {
                name: 'Bildkomprimierer',
                description: 'Reduzieren Sie die Bilddateigröße ohne merklichen Qualitätsverlust.',
                url: 'https://www.ufreetools.com/tool/image-compressor'
            },
            {
                name: 'Bildgrößenänderer',
                description: 'Passen Sie Bilder an bestimmte Abmessungen an oder skalieren Sie sie prozentual.',
                url: 'https://www.ufreetools.com/tool/image-batch-resizer'
            },
            {
                name: 'Stempelgenerator',
                description: 'Erstellen Sie online verschiedene Stempelbilder, wie Firmenstempel, persönliche Stempel usw.',
                url: 'https://www.ufreetools.com/tool/seal-generator'
            },
            {
                name: 'QR-Code-Generator',
                description: 'Erstellen Sie benutzerdefinierte QR-Codes für URLs, Texte, Kontaktinformationen und mehr.',
                url: 'https://www.ufreetools.com/tool/qr-code-generator'
            }
        ],
        
        referencesTitle: 'Referenzmaterialien',
        references: [
            {
                name: 'Grundlagen der Farbtheorie',
                description: 'Lernen Sie Komplementärfarben und Farbinversionsprinzipien kennen',
                url: 'https://www.colormatters.com/color-and-design/basic-color-theory'
            },
            {
                name: 'Digitale Bildverarbeitungstechniken',
                description: 'Akademische Ressourcen zu Bildverarbeitungsalgorithmen',
                url: 'https://de.wikipedia.org/wiki/Digitale_Bildverarbeitung'
            },
            {
                name: 'Web Content Accessibility Guidelines (WCAG)',
                description: 'Leitfaden für barrierefreie Farbkontraste',
                url: 'https://www.w3.org/Translations/WCAG20-de/'
            }
        ]
    }
}