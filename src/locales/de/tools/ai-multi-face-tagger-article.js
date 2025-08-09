export default {
    title: 'KI Multi-Gesichts-Tagger: Personen in Fotos identifizieren und beschriften',
    whatIsTitle: 'Was ist der KI Multi-Gesichts-Tagger?',
    intro: 'Unser <strong>KI Multi-Gesichts-Tagger</strong> ist ein leistungsstarkes Online-Tool, das fortschrittliche Gesichtserkennungstechnologie verwendet, um mehrere Gesichter in Fotos zu erkennen und Ihnen ermöglicht, für jede Person Labels hinzuzufügen. Ob Sie Fotosammlungen organisieren, Sitzpläne für Klassenzimmer erstellen oder einfach nur jeden auf einem Gruppenfoto identifizieren möchten, dieses Tool bietet eine schnelle und effiziente Möglichkeit, Gesichter zu markieren, ohne dass technisches Fachwissen erforderlich ist.',
    
    howItWorksTitle: 'Wie funktioniert es?',
    howItWorksContent: 'Der KI Multi-Gesichts-Tagger verwendet face-api.js, eine JavaScript-API, die Convolutional Neural Networks implementiert, um Gesichter zu erkennen und Gesichtsmerkmale zu analysieren. Das Tool identifiziert zunächst alle Gesichter in Ihrem hochgeladenen Bild und ermöglicht es Ihnen dann, benutzerdefinierte Labels oder Namen für jedes erkannte Gesicht hinzuzufügen. Die gesamte Verarbeitung erfolgt direkt in Ihrem Browser, wodurch sichergestellt wird, dass Ihre Fotos privat bleiben und niemals auf einen Server hochgeladen werden.',
    
    tipTitle: 'Profi-Tipp:',
    tipContent: 'Für beste Ergebnisse laden Sie Fotos mit klaren, gut beleuchteten Gesichtern hoch, die zur Kamera gerichtet sind. Das Tool funktioniert am besten mit frontal ausgerichteten Porträts mit minimalen Hindernissen oder extremen Winkeln.',
    
    featuresTitle: 'Hauptfunktionen',
    features: [
        'Genaue Erkennung mehrerer Gesichter in einem einzelnen Bild',
        'Benutzerdefiniertes Labeling-System zum Markieren jedes erkannten Gesichts',
        'Unterstützung für die Batch-Verarbeitung mehrerer Fotos',
        'Option zum Exportieren von Bildern mit sichtbaren Gesichts-Label-Overlays',
        'JSON-Exportoption für die Integration mit Fotoverwaltungssystemen',
        'Datenschutzzentriertes Design mit lokaler Verarbeitung in Ihrem Browser'
    ],
    
    useCasesTitle: 'Wann dieses Tool verwenden',
    useCase1Title: 'Fotoorganisation',
    useCase1Content: 'Identifizieren und markieren Sie schnell Personen in Fotosammlungen, um sie durchsuchbar und besser organisiert zu machen.',
    
    useCase2Title: 'Klassenzimmermanagement',
    useCase2Content: 'Lehrer können dieses Tool verwenden, um beschriftete Klassenfotos zu erstellen, die helfen, sich an Schülernamen zu erinnern oder Sitzpläne zu erstellen.',
    
    useCase3Title: 'Event-Fotografie',
    useCase3Content: 'Event-Fotografen können Teilnehmer in Gruppenfotos markieren, um die Verteilung und Identifikation zu erleichtern.',
    
    useCase4Title: 'Social-Media-Inhalte',
    useCase4Content: 'Content-Ersteller können Mitarbeiter oder Teammitglieder in Werbefotos für eine korrekte Zuordnung beschriften.',
    
    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
        {
            question: 'Wie genau ist die Gesichtserkennung?',
            answer: 'Die KI bietet in den meisten Fällen eine allgemein genaue Gesichtserkennung. Die Ergebnisse können jedoch je nach Faktoren wie Beleuchtung, Bildqualität, Gesichtswinkeln und Verdeckungen variieren. Das Tool erreicht in der Regel eine bessere Genauigkeit bei klaren, frontal ausgerichteten Porträts unter guten Lichtbedingungen.'
        },
        {
            question: 'Sind meine Daten bei der Verwendung dieses Tools sicher?',
            answer: 'Ja, die gesamte Verarbeitung erfolgt lokal in Ihrem Browser. Ihre Fotos werden niemals auf einen Server hochgeladen, was vollständige Privatsphäre gewährleistet. Das Tool verwendet clientseitiges JavaScript zur Analyse von Bildern und speichert oder überträgt keine Daten.'
        },
        {
            question: 'Was passiert, wenn einige Gesichter nicht erkannt werden?',
            answer: 'Die Gesichtserkennung hängt von verschiedenen Faktoren ab, darunter Beleuchtung, Winkel und Bildqualität. Wenn einige Gesichter nicht erkannt werden, versuchen Sie, ein anderes Foto mit besserer Beleuchtung und direkteren Gesichtswinkeln hochzuladen. Sehr kleine oder teilweise verdeckte Gesichter können für die KI schwer zu erkennen sein.'
        },
        {
            question: 'Kann ich die Gesichts-Tagging-Daten für die Verwendung in anderen Anwendungen exportieren?',
            answer: 'Ja, unser Tool bietet eine JSON-Exportoption, die Koordinaten für jedes erkannte Gesicht zusammen mit Ihren benutzerdefinierten Labels enthält. Diese Daten können in verschiedene Fotoverwaltungssysteme importiert oder für benutzerdefinierte Anwendungen verwendet werden. Sie können auch Bilder mit sichtbaren Gesichts-Label-Overlays herunterladen.'
        }
    ],
    
    tutorialTitle: 'Wie man den KI Multi-Gesichts-Tagger verwendet',
    steps: [
        {
            title: 'Laden Sie Ihr Foto hoch',
            description: 'Beginnen Sie mit dem Hochladen des Fotos, das Sie analysieren möchten. Sie können Dateien direkt in den Upload-Bereich ziehen oder klicken, um Ihr Gerät zu durchsuchen. Das Tool unterstützt gängige Bildformate wie JPG, PNG, WEBP und BMP.',
            note: 'Sie können mehrere Fotos gleichzeitig für die Batch-Verarbeitung hochladen.'
        },
        {
            title: 'Gesichter erkennen',
            description: 'Klicken Sie auf die Schaltfläche "Gesichter erkennen" und warten Sie einige Sekunden, bis unsere KI alle Gesichter im Foto identifiziert hat. Jedes erkannte Gesicht wird mit einem Rahmen hervorgehoben und zur einfachen Referenz mit einer Nummer versehen.',
            note: 'Die Verarbeitungszeit hängt von der Anzahl und Größe der Fotos sowie von der Leistung Ihres Geräts ab.'
        },
        {
            title: 'Labels hinzufügen',
            description: 'Geben Sie für jedes erkannte Gesicht einen Namen oder ein Label in das entsprechende Eingabefeld ein. Während Sie tippen, werden die Labels automatisch in der Bildvorschau aktualisiert, sodass Sie sehen können, wie das Endergebnis aussehen wird.',
            note: 'Sie können einige Gesichter unmarkiert lassen, wenn Sie möchten, oder Labels durch Klicken auf die X-Schaltfläche löschen.'
        },
        {
            title: 'Exportieren Sie Ihre Ergebnisse',
            description: 'Wählen Sie Ihr bevorzugtes Exportformat und Ihre Optionen. Sie können Gesichts-Label-Overlays direkt auf dem Bild einschließen und/oder eine JSON-Datei exportieren, die alle Gesichtskoordinaten und Labels enthält. Wählen Sie Ihr bevorzugtes Bildformat und passen Sie für JPG-Dateien die Qualität nach Bedarf an. Laden Sie schließlich einzelne Bilder herunter oder verwenden Sie die Batch-Download-Option, um alle verarbeiteten Fotos als ZIP-Datei zu erhalten.',
            note: 'Der JSON-Export ist besonders nützlich, wenn Sie planen, die Gesichtsdaten in andere Anwendungen oder Fotoverwaltungssysteme zu importieren.'
        }
    ],
    
    successTitle: 'Bereit zum Ausprobieren?',
    successContent: 'Laden Sie jetzt Ihre Fotos hoch und sehen Sie, wie unser KI Multi-Gesichts-Tagger Ihnen helfen kann, Personen in Ihren Bildern zu identifizieren und zu beschriften!',
    
    relatedToolsTitle: 'Verwandte Tools, die Ihnen gefallen könnten',
    relatedTools: [
        {
            name: 'Imgly KI Hintergrundentfernung',
            description: 'Entfernen Sie intelligent Bildhintergründe mit dem Imgly KI-Großmodell, mit Unterstützung für Batch-Verarbeitung und mehrere Ausgabeformate.',
            url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
        },
        {
            name: 'KI Profilfoto-Analysator',
            description: 'Erhalten Sie KI-gestützte Rückmeldungen zu Ihren persönlichen und professionellen Fotos, um Ihr professionelles Image zu verbessern.',
            url: 'https://www.ufreetools.com/tool/ai-profile-photo-analyzer'
        },
        {
            name: 'KI Alters- und Geschlechtsschätzer',
            description: 'Verwenden Sie KI-Technologie, um Gesichter in Fotos zu analysieren und Alter und Geschlecht zu schätzen.',
            url: 'https://www.ufreetools.com/tool/ai-age-gender-estimator'
        }
    ],
    
    techDetailsTitle: 'Technische Details',
    techDetailsContent: 'Der KI Multi-Gesichts-Tagger verwendet face-api.js, das TinyFaceDetector und FaceLandmark68 Modelle implementiert, um Gesichtsmerkmale zu analysieren. Diese leichtgewichtigen neuronalen Netzwerke sind darauf ausgelegt, effizient in Webbrowsern zu laufen und gleichzeitig eine angemessene Genauigkeit zu bieten.',
    privacyNote: 'Wir priorisieren Ihre Privatsphäre, indem wir alle Bilder lokal in Ihrem Browser verarbeiten. Ihre Fotos werden niemals zur Analyse an einen Server gesendet, wodurch sichergestellt wird, dass Ihre persönlichen Daten und Bilder vollständig privat bleiben. Das Tool läuft vollständig clientseitig, was es sicher und reaktionsschnell macht, selbst ohne Internetverbindung, nachdem die Seite geladen wurde.'
};