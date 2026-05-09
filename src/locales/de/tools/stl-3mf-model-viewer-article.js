export default {
    title: 'STL/3MF-Modellbetrachter-Tool: Online-3D-Modellviewer-Anleitung',
    functionTitle: 'Was ist das STL/3MF-Modellbetrachter-Tool und seine Verwendungszwecke?',
    intro: 'Unser <strong>STL/3MF-Modellbetrachter</strong> ist ein professioneller Online-3D-Modellviewer, der STL- und 3MF-Dateien schnell laden und in der Vorschau anzeigen kann. Ohne Softwareinstallation einfach im Browser öffnen und 3D-Modelle aus jedem Winkel betrachten.',

    useCasesTitle: 'Häufige Anwendungsfälle',
    useCases: [
        'Vorschau von STL-Modellen vor dem 3D-Druck',
        'Anzeige von Farb- und Materialinformationen in 3MF-Modellen',
        'Schnelle Überprüfung von Modellabmessungen und -proportionen',
        'Verwendung des Drahtgittermodus zur Überprüfung der Mesh-Topologie',
        'Erstellung von Screenshots für Präsentationen',
        'Anzeige von Modelldateien ohne 3D-Modellierungssoftware',
        'Stapelvorschau mehrerer Modelldateien',
        'Präsentation von Modellentwürfen an Kunden oder Teammitglieder'
    ],

    tipTitle: 'Professioneller Tipp:',
    tipContent: 'Verwenden Sie die linke Maustaste zum Drehen, die rechte zum Schwenken und das Mausrad zum Zoomen. Doppelklick zum automatischen Zentrieren des Modells.',

    conclusion: 'Das <strong>STL/3MF-Modellbetrachter</strong>-Tool ist besonders nützlich für 3D-Druck-Enthusiasten, Designer und Ingenieure.',

    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
        { question: 'Welche Formate unterstützt der Betrachter?', answer: 'STL (Binär und ASCII) und 3MF.' },
        { question: 'Wie dreht und zoomt man das Modell?', answer: 'Linke Taste zum Drehen, Mausrad zum Zoomen, rechte Taste zum Schwenken.' },
        { question: 'Welche Informationen zeigt das Panel?', answer: 'Eckpunkte, Flächen, Dateigröße und physische Abmessungen.' },
        { question: 'Was ist der Drahtgittermodus?', answer: 'Zeigt die Mesh-Struktur zur Überprüfung der Topologie.' },
        { question: 'Kann ich Screenshots exportieren?', answer: 'Ja! PNG oder JPG mit optionalem transparentem Hintergrund.' },
        { question: 'Ist die Vorschau sicher?', answer: 'Völlig sicher! Alle Verarbeitung erfolgt lokal im Browser.' },
        { question: 'Welche Dateigröße wird unterstützt?', answer: 'In der Regel STL-Dateien mit einigen MB und größere 3MF-Dateien.' }
    ],

    tutorialTitle: 'Verwendung des STL/3MF-Modellbetrachters',
    steps: [
        { title: 'Modelldateien hochladen', description: 'Laden Sie STL- oder 3MF-Dateien hoch.', note: 'Unterstützt das Hochladen mehrerer Dateien.' },
        { title: '3D-Modell anzeigen', description: 'Die 3D-Ansicht lädt das Modell automatisch.', note: 'Erstes Laden großer Modelle kann einige Sekunden dauern.' },
        { title: 'Modellinformationen anzeigen', description: 'Das rechte Panel zeigt detaillierte Informationen.', note: '3MF-Dateien zeigen zusätzliche Informationen.' },
        { title: 'Einstellungen anpassen', description: 'Drahtgittermodus, Farben, Gitter und Achsen konfigurieren.', note: 'Drahtgittermodus ist nützlich zur Topologieüberprüfung.' },
        { title: 'Screenshot exportieren', description: 'Speichern Sie einen hochauflösenden Screenshot.', note: 'Ideal für Präsentationen und Dokumentation.' }
    ],

    successTitle: 'Herzlichen Glückwunsch!',
    successContent: 'Sie haben erfolgreich gelernt, unseren STL/3MF-Modellbetrachter zu verwenden.',

    relatedToolsTitle: 'Verwandte Tools',
    relatedTools: [
        { name: 'STL zu 3MF', description: 'STL-Dateien in 3MF-Format konvertieren.', url: 'https://www.ufreetools.com/tool/stl-to-3mf-converter' },
        { name: 'STL zu OBJ', description: 'STL-Dateien in OBJ-Format konvertieren.', url: 'https://www.ufreetools.com/tool/stl-to-obj-converter' },
        { name: 'Bild zu PNG', description: 'JPG, WebP in PNG konvertieren.', url: 'https://www.ufreetools.com/tool/image-to-png' },
        { name: 'Bildkompressor', description: 'Bildgröße reduzieren.', url: 'https://www.ufreetools.com/tool/image-compressor' }
    ],

    referencesTitle: 'Referenzressourcen',
    references: [
        { name: 'STL-Dateiformat', description: 'Geschichte und Struktur des STL-Formats', url: 'https://en.wikipedia.org/wiki/STL_%28file_format%29' },
        { name: '3MF-Spezifikation', description: 'Technische Spezifikation des 3MF-Formats', url: 'https://3mf.io/specification/' },
        { name: 'Three.js-Dokumentation', description: 'Technische Details der 3D-Rendering-Engine', url: 'https://threejs.org/docs/' }
    ]
}