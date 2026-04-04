export default {
    title: 'Audio-Schleife-Tool: Online Audio-Schleife-Ersteller-Anleitung',
    functionTitle: 'Was ist das Audio-Schleife-Tool und seine Verwendung?',
    intro: 'Unser <strong>Audio-Schleife-Tool</strong> ist eine professionelle Online-Anwendung zum Erstellen von Audio-Schleifen, die WAV, MP3, FLAC, OGG, AAC, M4A und andere Audioformate verarbeiten kann. Sie können Schleifenzahl, Intervallzeit festlegen und wählen, ob Sie einen Fade-Out-Effekt für sanftere Übergänge hinzufügen möchten. Mit unserem <strong>Online Audio-Schleife-Ersteller</strong> können Sie schnell Hintergrundmusik, Meditations-Audio, Klingeltöne, Spiel-Soundeffekte usw. erstellen. Stapelverarbeitung und präzise Parametersteuerung werden ohne Installation von Software unterstützt.',
    
    useCasesTitle: 'Häufige Anwendungsfälle für Audio-Schleifen',
    useCases: [
        'Loop-Hintergrundmusik für Videos, Spiele oder Apps erstellen',
        'Loop-Audio für Meditation oder Entspannung erstellen',
        'Klingeltöne oder Benachrichtigungstöne erstellen',
        'Loop-Hintergrundmusik für PPT-Präsentationen erstellen',
        'Loop-Begleitung für Musikübung erstellen',
        'Loop-Soundeffekte für ASMR oder Schlafhilfe erstellen',
        'Intro/Outro-Musik für Livestreams oder Podcasts erstellen',
        'Loop-Hintergrundmusik für Fitness- oder Yoga-Kurse erstellen'
    ],
    
    tipTitle: 'Profi-Tipp:',
    tipContent: 'Für beste Ergebnisse wählen Sie Audio-Clips mit guter Klangqualität und natürlichem Anfang und Ende. Das Festlegen einer angemessenen Intervallzeit (500-1000ms) macht Schleifenübergänge sanfter. Für nahtlose Schleifen stellen Sie das Intervall auf 0.',
    
    conclusion: '<strong>Der Audio-Schleife-Ersteller</strong> ist besonders nützlich für Video-Ersteller, Spiele-Entwickler, Musik-Ersteller und Meditations-Enthusiasten. Mit unserem Online Audio-Schleife-Tool können Sie jeden Audio-Clip in ein Schleifenformat für verschiedene kreative Projekte umwandeln. Unser Tool unterstützt Stapelverarbeitung mit Parametern wie Schleifenzahl, Intervallzeit und Fade-Out-Effekt. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser und gewährleistet Ihre Audio-Privatsphäre und -Sicherheit.',
    
    faqTitle: 'Häufig Gestellte Fragen',
    faqs: [
        {
            question: 'Welche Eingabeformate unterstützt das Audio-Schleife-Tool?',
            answer: 'Unser <strong>Online Audio-Schleife-Tool</strong> unterstützt mehrere gängige Audioformate einschließlich WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE usw. Sie können mehrere Audio-Dateien in verschiedenen Formaten für die Stapelverarbeitung hochladen. Das Tool erkennt automatisch das Eingabeformat und verarbeitet es.'
        },
        {
            question: 'Was ist die maximale Schleifenzahl?',
            answer: 'Unser Tool unterstützt die Einstellung von 2 bis 100 Schleifen. Sie können je nach Bedarf frei anpassen, ob es sich um eine einfache Doppelschleife oder stundenlange Schleifen-Audio handelt. Das System berechnet automatisch die endgültige Ausgabedauer als Referenz für Sie.'
        },
        {
            question: 'Was bewirkt die Schleifen-Intervallzeit?',
            answer: 'Die Schleifen-Intervallzeit ist die Stille zwischen jeder Audio-Schleife. Das Festlegen eines angemessenen Intervalls (500-1000ms) macht Schleifenübergänge natürlicher und vermeidet plötzliche Neustarts. Wenn Sie einen nahtlosen Schleifeneffekt benötigen, stellen Sie das Intervall auf 0.'
        },
        {
            question: 'Was ist der Fade-Out-Effekt?',
            answer: 'Der Fade-Out-Effekt reduziert die Lautstärke am Ende des Audios allmählich. Wenn aktiviert, fügt das Tool am Ende der letzten Schleife einen Fade-Out hinzu, wodurch das Audio-Ende sanfter wird, anstatt abrupt zu stoppen. Dies ist besonders nützlich für Meditations-Audio, Hintergrundmusik usw.'
        },
        {
            question: 'Kann ich mehrere Audio-Dateien stapelweise verarbeiten?',
            answer: 'Absolut! Unser <strong>Audio-Schleife-Tool</strong> unterstützt Stapelverarbeitung. Sie können mehrere Audio-Dateien gleichzeitig hochladen (Drag & Drop oder Dateiauswahl unterstützt), und das Tool verarbeitet alle Dateien nacheinander. Nach der Verarbeitung können Sie jedes Schleifen-Audio einzeln herunterladen oder die Stapel-Download-Funktion verwenden, um alle Ergebnisse in einer ZIP-Datei zu erhalten.'
        },
        {
            question: 'Ist die Verarbeitung sicher? Wird Audio auf Server hochgeladen?',
            answer: 'Völlig sicher! Unser Tool verwendet reine Frontend-Technologie, die gesamte Audio-Verarbeitung erfolgt lokal in Ihrem Browser. Ihre Audio-Dateien werden auf keinen Server hochgeladen, was Privatsphäre und Datensicherheit gewährleistet. Sie können vertraulich Audio-Dateien mit sensiblen Inhalten verarbeiten.'
        },
        {
            question: 'Was ist das Ausgabeformat?',
            answer: 'Die aktuelle Version gibt im WAV-Format aus, einem verlustfreien Audioformat, das die Originalqualität bewahrt. Der Name der ausgegebenen Schleifen-Audio-Datei erhält automatisch das Suffix "_loop" zur einfachen Identifizierung und Organisation.'
        }
    ],
    
    tutorialTitle: 'Wie man das Audio-Schleife-Tool verwendet',
    steps: [
        {
            title: 'Laden Sie Ihre Audio-Dateien Hoch',
            description: 'Laden Sie zuerst die Audio-Dateien hoch, die Sie in eine Schleife setzen möchten. Sie können auf zwei Arten hochladen: <strong>Dateien per Drag & Drop</strong> in den Upload-Bereich ziehen oder <strong>Klicken zum Durchsuchen</strong> und Dateien auswählen. Das Tool unterstützt WAV, MP3, FLAC, OGG, AAC, M4A und andere Formate. Sie können mehrere Dateien gleichzeitig für die Stapelverarbeitung hochladen.',
            note: 'Wir empfehlen, Audio-Clips mit natürlichem Anfang und Ende für bessere Schleifeneffekte zu wählen.'
        },
        {
            title: 'Audio-Dateien Vorschauen',
            description: 'Nach dem Hochladen sehen Sie alle hochgeladenen Audio-Dateien im linken Vorschau-Bereich. Jede Datei zeigt Dateinamen, Größe und Dauer an. Sie können auf die Wiedergabe-Schaltfläche klicken, um das Audio vorzuschauen und zu bestätigen, dass Sie die richtigen Dateien ausgewählt haben. Um eine Datei zu löschen, klicken Sie auf das Lösch-Symbol.',
            note: 'Für die Stapelverarbeitung empfehlen wir, zuerst die Audio-Liste vorzuschauen, um sicherzustellen, dass alle benötigten Dateien korrekt hochgeladen wurden.'
        },
        {
            title: 'Schleifen-Parameter Einstellen',
            description: 'Vor der Verarbeitung können Sie die Schleifeneinstellungen anpassen. Stellen Sie die <strong>Schleifenzahl</strong> (2-100 Mal) ein, passen Sie die <strong>Schleifen-Intervallzeit</strong> (0-5000 Millisekunden) an, wählen Sie, ob Sie den <strong>Fade-Out-Effekt</strong> aktivieren möchten. Diese Parameter helfen Ihnen, den idealen Schleifeneffekt zu erzielen.',
            note: 'Das Einstellen des Intervalls auf 0 erzielt eine nahtlose Schleife, 500-1000ms macht Übergänge natürlicher.'
        },
        {
            title: 'Schleifen-Audio Generieren',
            description: 'Klicken Sie nach dem Einstellen auf die Schaltfläche <strong>"Schleifen-Audio Erstellen"</strong>, um mit der Verarbeitung zu beginnen. Das Tool verarbeitet alle hochgeladenen Audio-Dateien nacheinander und zeigt den Fortschritt für die Stapelverarbeitung an. Die Verarbeitungszeit hängt von der Dateigröße und -menge ab, die meisten Audios können in wenigen Sekunden abgeschlossen werden.',
            note: 'Bitte halten Sie die Seite während der Verarbeitung geöffnet, schließen Sie nicht den Browser-Tab.'
        },
        {
            title: 'Verarbeitungsergebnisse Vorschauen',
            description: 'Nach der Verarbeitung zeigt der rechte Ausgabebereich alle Schleifen-Audio-Dateien an. Jede Datei bietet eine <strong>Wiedergabe-Vorschau</strong>-Funktion, die Originaldauer, Ausgabedauer und Schleifenzahl anzeigt. Sie können auf die Wiedergabe-Schaltfläche klicken, um eine Vorschau anzuzeigen und zu bestätigen, dass sie Ihren Anforderungen entspricht.',
            note: 'Wenn Sie mit dem Ergebnis nicht zufrieden sind, können Sie die Parameter anpassen und erneut verarbeiten.'
        },
        {
            title: 'Verarbeitungsergebnisse Herunterladen',
            description: 'Wenn Sie mit den Ergebnissen zufrieden sind, können Sie unter jeder Datei auf die Schaltfläche <strong>"Audio Herunterladen"</strong> klicken, um sie einzeln zu speichern, oder die Schaltfläche <strong>"Stapel-Download (ZIP)"</strong> oben im Ausgabebereich verwenden, um alle Schleifen-Audio-Dateien auf einmal in einer ZIP-Datei herunterzuladen. Die gesamte Verarbeitung erfolgt lokal im Browser und gewährleistet Ihre Audio-Privatsphäre und -Sicherheit.',
            note: 'Beim Stapel-Download behält das Audio in der ZIP-Datei den ursprünglichen Dateinamen mit automatisch hinzugefügtem _loop-Suffix.'
        }
    ],
    
    successTitle: 'Glückwunsch!',
    successContent: 'Sie haben erfolgreich gelernt, wie man unser Audio-Schleife-Tool verwendet. Jetzt können Sie einfach Schleifen-Audio für Hintergrundmusik, Meditations-Audio, Klingeltöne und verschiedene andere Zwecke erstellen.',
    
    relatedToolsTitle: 'Verwandte Tools, die Sie Interessieren Könnten',
    relatedTools: [
        {
            name: 'Audio-Geschwindigkeit',
            description: 'Passen Sie die Audio-Wiedergabegeschwindigkeit von 0,25x bis 4x an.',
            url: 'https://www.ufreetools.com/tool/audio-speed'
        },
        {
            name: 'Audio Zusammenfügen',
            description: 'Fügen Sie mehrere Audio-Dateien zu einer zusammen.',
            url: 'https://www.ufreetools.com/tool/audio-joiner'
        },
        {
            name: 'Audio Umkehren',
            description: 'Spielen Sie Audio rückwärts ab für einzigartige Soundeffekte.',
            url: 'https://www.ufreetools.com/tool/audio-reverse'
        },
        {
            name: 'Lautstärke-Editor',
            description: 'Passen Sie die Audio-Lautstärke mit Stapelverarbeitungsunterstützung an.',
            url: 'https://www.ufreetools.com/tool/audio-volume-editor'
        }
    ],
    
    referencesTitle: 'Referenzressourcen',
    references: [
        {
            name: 'Audio-Schleife-Technologie',
            description: 'Erfahren Sie mehr über technische Prinzipien und Best Practices der Audio-Schleifen-Verarbeitung',
            url: 'https://en.wikipedia.org/wiki/Loop_(music)'
        },
        {
            name: 'WAV-Format-Standard',
            description: 'Tauchen Sie tiefer in die technischen Spezifikationen des WAV-Audioformats ein',
            url: 'https://en.wikipedia.org/wiki/WAV'
        },
        {
            name: 'Digitale Audio-Verarbeitung',
            description: 'Erkunden Sie digitale Audio-Verarbeitungs- und Bearbeitungstechniken',
            url: 'https://en.wikipedia.org/wiki/Digital_audio'
        }
    ]
};
