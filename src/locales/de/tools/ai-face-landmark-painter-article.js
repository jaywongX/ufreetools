export default {
    title: 'KI-Gesichtslandmarken-Zeichner - Leitfaden für intelligente Gesichtslandmarken-Erkennung und -Bearbeitung',

    functionTitle: 'Tool-Funktionen und Anwendungsszenarien',
    intro: 'Der <strong>KI-Gesichtslandmarken-Zeichner</strong> ist ein <strong>Online-Tool zur Erkennung und Bearbeitung von Gesichtsmerkmalen</strong>, das auf künstlicher Intelligenz basiert. Es kann automatisch 68 wichtige Merkmalspunkte im Gesicht identifizieren und markieren, einschließlich wichtiger Bereiche wie Augen, Nase, Mund und Gesichtskonturen, und bietet Benutzern eine <strong>präzise Analyse der Gesichtsstruktur</strong> und <strong>visuelle Bearbeitungsmöglichkeiten</strong>.',

    useCasesTitle: 'Hauptanwendungsszenarien',
    useCases: [
        'Avatar-Design und -Erstellung: Bietet präzise Referenzen für Gesichtsmerkmale für Designer',
        'Gesichtserkennungsforschung: Verwendet für akademische Forschung und Algorithmusentwicklung',
        'Entwicklung von Beauty-Apps: Liefert Landmarkendaten für AR-Beauty-Anwendungen',
        'Animationsproduktion: Bietet Kontrollpunkte für Gesichtsanimation',
        'Medizinische kosmetische Analyse: Analysiert Gesichtsproportionen und Symmetrie',
        'VR/AR-Anwendungen: Liefert Gesichtsverfolgungsdaten für Virtual-Reality-Anwendungen',
        'Bildung und Schulung: Verwendet für Computer Vision und KI-Lehre',
        'Künstlerische Gestaltung: Bietet technische Unterstützung für digitale Kunstschaffung'
    ],

    tipTitle: 'Profi-Tipps',
    tipContent: 'Für beste Erkennungsergebnisse verwenden Sie klare, gut beleuchtete frontale Gesichtsfotos. Das Tool unterstützt die Bearbeitung von Landmarkenpositionen per Drag-and-Drop, die je nach tatsächlichen Bedürfnissen angepasst werden können.',

    conclusion: 'Ob Sie ein professioneller Designer, Forscher oder Entwickler sind, dieser <strong>KI-Gesichtslandmarken-Zeichner</strong> kann leistungsstarke technische Unterstützung für Ihre Projekte bieten. Das Tool ist völlig kostenlos, unterstützt Batch-Verarbeitung und mehrere Exportformate, was Ihre Kreation effizienter und bequemer macht.',

    faqTitle: 'Häufig gestellte Fragen',

    faq1: {
        question: 'Was ist Gesichtslandmarken-Erkennung?',
        answer: '<strong>Gesichtslandmarken-Erkennung</strong> ist eine wichtige Technologie im Bereich der Computer Vision, die automatisch die Positionen von Merkmalspunkten im Gesicht mithilfe von KI-Algorithmen identifiziert. Unser Tool verwendet ein 68-Punkte-Modell, das Schlüsselbereiche wie Augen, Nase, Mund und Gesichtskonturen präzise markiert und grundlegende Daten für nachfolgende <strong>Gesichtsanalyse</strong>, <strong>Ausdruckserkennung</strong> und <strong>3D-Modellierung</strong> liefert.'
    },

    faq2: {
        question: 'Können die erkannten Landmarken bearbeitet werden?',
        answer: 'Ja! Unser Tool unterstützt <strong>interaktive Bearbeitungsfunktionen</strong>. Nach der Erkennung können Sie auf jeden Landmarkenpunkt klicken und ihn mit der Maus ziehen, um seine Position anzupassen. Dies ist sehr nützlich für <strong>Feinabstimmungen</strong>, <strong>künstlerische Gestaltung</strong> oder <strong>Anpassung für spezielle Bedürfnisse</strong>. Alle Änderungen werden in Echtzeit auf der Leinwand aktualisiert.'
    },

    faq3: {
        question: 'Welche Exportformate werden unterstützt?',
        answer: 'Das Tool unterstützt mehrere Exportformate, um verschiedene Bedürfnisse zu erfüllen: <strong>PNG/JPG/WEBP</strong>-Formate eignen sich für die Bildverarbeitung, während das <strong>SVG-Format</strong> für Vektorgrafik-Design geeignet ist. Das SVG-Format ist besonders geeignet für <strong>Webdesign</strong>, <strong>Druckproduktion</strong> und <strong>skalierbare Grafiken</strong>.'
    },

    faq4: {
        question: 'Wie genau ist die Erkennung?',
        answer: 'Wir verwenden die branchenführende <strong>face-api.js-Bibliothek</strong> und das <strong>68-Punkte-Gesichtsmodell</strong>, das unter idealen Bedingungen eine Genauigkeit von über 95% erreichen kann. Die Erkennungseffektivität wird von Lichtverhältnissen, Gesichtswinkeln, Bildklarheit und anderen Faktoren beeinflusst. Wir empfehlen die Verwendung von <strong>klaren frontalen Fotos</strong> für beste Ergebnisse.'
    },

    faq5: {
        question: 'Sind die Daten sicher?',
        answer: 'Absolut sicher! Die gesamte Bildverarbeitung erfolgt in Ihrem <strong>lokalen Browser</strong> und wird nicht auf einen Server hochgeladen. Wir schützen die Privatsphäre der Benutzer streng und stellen sicher, dass Ihre Bilddaten vollständig sicher sind. Das Tool unterstützt <strong>Offline-Nutzung</strong> und bietet maximalen Schutz für Ihre Privatsphäre.'
    },

    tutorialTitle: 'Detaillierte Gebrauchsanleitung',

    step1: {
        title: 'Laden Sie ein Gesichtsbild hoch',
        description: 'Klicken Sie auf den Upload-Bereich oder <strong>ziehen Sie Bilddateien direkt</strong> in das Tool. Unterstützt gängige Formate wie PNG, JPEG, BMP, WEBP. Sie können auch auf "Beispielbild laden" klicken, um die Funktionalität des Tools zu testen.',
        note: 'Es wird empfohlen, klare frontale Gesichtsfotos zu verwenden und Seitenprofile oder Gruppenfotos zu vermeiden, um die Erkennungsgenauigkeit zu gewährleisten.'
    },

    step2: {
        title: 'Konfigurieren Sie die Zeichenparameter',
        description: 'Passen Sie die <strong>Anzeigeoptionen</strong> und <strong>Stilparameter</strong> im linken Einstellungsbereich an. Sie können wählen, ob Landmarken, Verbindungen und Nummern angezeigt werden sollen, und Farben, Größen und andere visuelle Effekte anpassen.',
        note: 'Verschiedene Parametereinstellungen eignen sich für verschiedene Anwendungsszenarien und können je nach tatsächlichen Bedürfnissen angepasst werden.'
    },

    step3: {
        title: 'Führen Sie die Landmarkenerkennung durch',
        description: 'Klicken Sie auf die Schaltfläche <strong>"Landmarken erkennen"</strong>, um die KI-Analyse zu starten. Das Tool lädt automatisch das Modell und erkennt die Gesichtsmerkmale. Der gesamte Prozess dauert in der Regel 3-10 Sekunden.',
        note: 'Die erste Verwendung erfordert das Herunterladen von KI-Modelldateien, stellen Sie daher sicher, dass eine stabile Netzwerkverbindung besteht.'
    },

    step4: {
        title: 'Bearbeiten Sie die Landmarkenpositionen',
        description: 'Nach Abschluss der Erkennung können Sie <strong>auf jeden Punkt klicken und ihn ziehen</strong>, um seine Position anzupassen. Unterstützt Echtzeit-Vorschau der Bearbeitungseffekte, und alle Änderungen werden sofort auf der Leinwand angezeigt.',
        note: 'Die Bearbeitungsfunktion eignet sich besonders für Feinabstimmungen und kreatives Design und ermöglicht freie Anpassungen entsprechend spezifischer Anforderungen.'
    },

    step5: {
        title: 'Vorschau und Anpassung der Effekte',
        description: 'Verwenden Sie die <strong>Zoom- und Schwenkfunktionen</strong> rechts, um detaillierte Effekte zu betrachten. Sie können hineinzoomen, um bestimmte Landmarkenpositionen zu überprüfen und sicherzustellen, dass die Bearbeitungsergebnisse den Erwartungen entsprechen.',
        note: 'Die vollständige Nutzung der Vorschaufunktion kann Ihnen helfen, präzisere Bearbeitungsergebnisse zu erzielen.'
    },

    step6: {
        title: 'Exportieren Sie die Verarbeitungsergebnisse',
        description: 'Wählen Sie ein geeignetes <strong>Exportformat</strong> (PNG/JPG/WEBP/SVG), passen Sie die Bildqualitätsparameter an und klicken Sie dann auf die Download-Schaltfläche. Unterstützt <strong>Batch-Verarbeitung</strong> und <strong>ZIP-Paket-Downloads</strong>.',
        note: 'Das SVG-Format eignet sich besonders für Anwendungen, die Vektorgrafiken erfordern, wie Webdesign und Druckproduktion.'
    },

    successTitle: 'Verarbeitung abgeschlossen',
    successContent: 'Herzlichen Glückwunsch! Sie haben die Gesichtslandmarken-Erkennung und -Bearbeitung erfolgreich abgeschlossen. Sie können die Ergebnisse für verschiedene kreative Projekte, Forschungsarbeiten oder kommerzielle Anwendungen verwenden.',

    relatedToolsTitle: 'Verwandte empfohlene Tools',

    relatedTool1: {
        name: 'KI Multi-Face Tagger',
        description: 'Unterstützt die Erkennung und Markierung mehrerer Gesichter, geeignet für die Verarbeitung von Teamfotos',
        url: 'https://www.ufreetools.com/tool/ai-multi-face-tagger'
    },

    relatedTool2: {
        name: 'KI Alters- und Geschlechtsschätzer',
        description: 'Schätzt Alter und Geschlecht basierend auf KI-Technologie, unterstützt Batch-Analyse',
        url: 'https://www.ufreetools.com/tool/ai-age-gender-estimator'
    },

    relatedTool3: {
        name: 'Bildhintergrund-Entfernungstool',
        description: 'Entfernt intelligent Bildhintergründe, unterstützt Batch-Verarbeitung',
        url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
    },

    relatedTool4: {
        name: 'Bildfarben-Inversionstool',
        description: 'Bildfarben-Inversion mit einem Klick, erzeugt künstlerische Effekte',
        url: 'https://www.ufreetools.com/tool/invert-image-colors'
    },

    referencesTitle: 'Referenzen und technische Dokumentation',

    reference1: {
        name: 'Offizielle face-api.js-Dokumentation',
        description: 'Detaillierte technische Dokumentation und API-Referenz für die face-api.js-Bibliothek',
        url: 'https://github.com/justadudewhohacks/face-api.js'
    },

    reference2: {
        name: 'Technische Prinzipien der Gesichtslandmarken-Erkennung',
        description: 'Eine robuste und effiziente Methode zur effektiven Gesichtslandmarken-Erkennung',
        url: 'https://www.mdpi.com/2076-3417/14/16/7153'
    },

    reference3: {
        name: 'Technische Spezifikationen des SVG-Formats',
        description: 'Technische Standards und Anwendungsrichtlinien für das SVG-Vektorgrafik-Format',
        url: 'https://www.w3.org/Graphics/SVG/'
    }
};