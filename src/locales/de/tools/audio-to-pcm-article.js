export default {
    title: 'Audio-zu-PCM-Konvertierungstool: Online-Audioformat-Konverter Benutzerhandbuch',
    functionTitle: 'Was ist das Audio-zu-PCM-Tool und wofür wird es verwendet?',
    intro: 'Unser <strong>Audio-zu-PCM-Tool</strong> ist eine professionelle Online-Audioformat-Konvertierungsanwendung, die WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE und andere Audioformate in rohe PCM-Audiodaten konvertieren kann. PCM (Pulse Code Modulation) ist die reinste Form der digitalen Audiodarstellung, ohne jegliche Kompression, und bewahrt alle Audioinformationen. Mit unserem <strong>Online-Audio-zu-PCM-Konverter</strong> können Sie Abtastrate, Bittiefe und Kanaleinstellungen präzise steuern, um verschiedene Anforderungen wie Spracherkennung, Audioanalyse und professionelle Audioverarbeitung zu erfüllen.',
    
    useCasesTitle: 'Häufige Anwendungsszenarien für Audio-zu-PCM-Konvertierung',
    useCases: [
        'Vorbereitung von Standard-PCM-Audioeingabe für Spracherkennungssysteme (wie Baidu Speech, iFlytek)',
        'Konvertierung verschiedener Audioformate in rohe PCM-Daten zur Audiosignalverarbeitung und -analyse',
        'Vorbereitung roher Audiodaten für Embedded-Audiogeräte oder Spiel-Engines',
        'Analyse roher Wellenformen in Audioforschung und -lehre',
        'Zwischenformatkonvertierung für Audio-Bearbeitungssoftware',
        'Audio-Vorverarbeitung für Sprachkommunikationssysteme (wie VoIP)',
        'Audio-Feature-Extraktion und Machine-Learning-Modell-Training',
        'Audio-Testsignalerzeugung und Gerätekalibrierung'
    ],
    
    tipTitle: 'Professioneller Tipp:',
    tipContent: 'Empfehlungen für PCM-Formatparameter: Für Spracherkennung wird eine Abtastrate von 16000Hz, 16-Bit-Tiefe, Mono empfohlen; CD-Standardqualität ist 44100Hz, 16-Bit, Stereo; professionelle Audioproduktion empfiehlt 48000Hz oder höher, 24-Bit. PCM-Dateien sind groß, etwa 10-mal so groß wie eine MP3-Datei gleicher Dauer. Stellen Sie sicher, dass Sie über genügend Speicherplatz verfügen.',
    
    conclusion: 'Das <strong>Audio-zu-PCM-Formatkonvertierungstool</strong> ist besonders nützlich für Spracherkennungsentwickler, Audio-Algorithmusingenieure, Spieleentwickler und Audioforscher. Mit unserem Online-Audio-zu-PCM-Konverter können Sie Audiodateien verschiedener Formate in rohe PCM-Daten konvertieren und Abtastrate und Bittiefe präzise steuern, um den technischen Anforderungen verschiedener Anwendungsszenarien zu entsprechen. Unser Tool unterstützt Stapelverarbeitung, die gesamte Verarbeitung erfolgt lokal im Browser und gewährleistet die Privatsphäre und Sicherheit Ihrer Audiodaten.',
    
    faqTitle: 'Häufig Gestellte Fragen',
    faqs: [
        {
            question: 'Welche Eingabeformate unterstützt das Audio-zu-PCM-Tool?',
            answer: 'Unser <strong>Online-Audio-zu-PCM-Konverter</strong> unterstützt viele gängige Audioformate, einschließlich WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE und andere. Sie können gleichzeitig mehrere Audiodateien verschiedener Formate für eine Stapelkonvertierung hochladen. Das Tool erkennt automatisch das Eingabeformat und verarbeitet die Konvertierung.'
        },
        {
            question: 'Was ist der Unterschied zwischen dem PCM-Format und dem WAV-Format?',
            answer: 'WAV ist ein Containerformat, das normalerweise PCM-kodierte Audiodaten enthält, aber WAV-Dateien haben Header-Informationen (mit Metadaten wie Abtastrate, Bittiefe, Kanalanzahl). Reine PCM-Daten sind die rohen Audio-Sample-Werte ohne Datei-Header. Einige Anwendungen (wie Spracherkennungs-APIs) erfordern reine PCM-Daten als Eingabe, was bedeutet, dass der WAV-Datei-Header entfernt werden muss.'
        },
        {
            question: 'Wie bereite ich PCM-Audio für die Spracherkennung vor?',
            answer: 'Die meisten Spracherkennungssysteme (wie Baidu Spracherkennung, iFlytek Spracherkennung, Google Speech API) erfordern die folgenden PCM-Formatparameter: <strong>Abtastrate 16000Hz, 16-Bit-Tiefe, Mono</strong>. Durch Auswahl dieser Parameter während der Konvertierung erhalten Sie PCM-Audio, das den Anforderungen entspricht. Einige Systeme unterstützen auch eine Abtastrate von 8000Hz.'
        },
        {
            question: 'Was sind Abtastrate und Bittiefe?',
            answer: 'Die <strong>Abtastrate</strong> bezieht sich auf die Anzahl der pro Sekunde gesammelten Audio-Samples und bestimmt den Frequenzbereich des Audios. 8000Hz eignet sich für Telefonsprache, 16000Hz für Spracherkennung, 44100Hz ist der CD-Standard, 48000Hz ist der professionelle Audio-Standard. Die <strong>Bittiefe</strong> bestimmt die Genauigkeit jedes Sample-Punkts, 8-Bit hat niedrigere Genauigkeit, 16-Bit ist Standard, 24-Bit und 32-Bit werden für professionelle Audioproduktion verwendet.'
        },
        {
            question: 'Warum sind PCM-Dateien so groß?',
            answer: 'PCM ist unkomprimierte rohe Audiodaten ohne jegliche Kompressionsverarbeitung. Zum Beispiel repräsentiert 1 Minute 16-Bit-Stereo-PCM-Audio bei 44100Hz etwa 10MB. Das ist der Preis, den man für die Gewährleistung der Audio-Integrität im PCM-Format zahlt. Wenn Sie die Dateigröße reduzieren müssen, erwägen Sie die Konvertierung in verlustfreie Kompressionsformate wie FLAC oder verlustbehaftete Formate wie MP3.'
        },
        {
            question: 'Ist der Konvertierungsprozess sicher? Werden Audiodaten auf einen Server hochgeladen?',
            answer: 'Völlig sicher! Unser Tool verwendet reine Front-End-Technologie, die gesamte Audioverarbeitung erfolgt lokal in Ihrem Browser. Ihre Audiodateien werden auf keinen Server hochgeladen, was die Privatsphäre und Datensicherheit gewährleistet. Sie können mit Vertrauen Audiodateien mit sensiblen Inhalten verarbeiten.'
        },
        {
            question: 'Was ist der Unterschied zwischen vorzeichenbehaftetem und vorzeichenlosem PCM?',
            answer: 'Es handelt sich um das PCM-Datenspeicherformat. Das <strong>vorzeichenbehaftete Format</strong> (Signed) verwendet Zweierkomplement zur Darstellung positiver und negativer Werte und ist das Standardformat für die meisten Audioverarbeitungen mit besserer Kompatibilität. Das <strong>vorzeichenlose Format</strong> (Unsigned) repräsentiert nur positive Werte und wird hauptsächlich für bestimmte Hardware oder ältere Systeme verwendet. Im Allgemeinen wird empfohlen, das vorzeichenbehaftete Format zu wählen.'
        }
    ],
    
    tutorialTitle: 'Wie Man das Audio-zu-PCM-Tool Verwendet',
    steps: [
        {
            title: 'Laden Sie Ihre Audiodateien Hoch',
            description: 'Laden Sie zuerst die Audiodateien hoch, die Sie in das PCM-Format konvertieren möchten. Sie können auf zwei Arten hochladen: <strong>Dateien per Drag-and-Drop</strong> in den Upload-Bereich ziehen oder <strong>Klicken zum Durchsuchen</strong> und Dateien auswählen. Das Tool unterstützt WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE und andere Formate. Sie können mehrere Dateien gleichzeitig für die Stapelverarbeitung hochladen.',
            note: 'Unterstützt gleichzeitiges Hochladen mehrerer Audiodateien verschiedener Formate. Das Tool identifiziert und verarbeitet sie automatisch.'
        },
        {
            title: 'Vorschau der Audiodateien',
            description: 'Nach dem Upload sehen Sie die Liste aller hochgeladenen Audiodateien im linken Vorschaubereich. Jede Datei zeigt Dateiname, Originalformat, Dateigröße und Dauer an. Sie können auf die Wiedergabetaste klicken, um eine Audiovorschau zu erhalten und zu bestätigen, dass Sie die richtigen Dateien ausgewählt haben. Wenn Sie eine Datei löschen müssen, klicken Sie einfach auf das Löschsymbol.',
            note: 'Für die Stapelverarbeitung wird empfohlen, zuerst die Audioliste in der Vorschau anzuzeigen, um sicherzustellen, dass alle zu konvertierenden Dateien korrekt hochgeladen wurden.'
        },
        {
            title: 'PCM-Parameter Einstellen',
            description: 'Vor der Konvertierung müssen Sie die PCM-Ausgabeparameter einstellen. Wählen Sie die geeignete <strong>Abtastrate</strong> (8000Hz-48000Hz), stellen Sie die <strong>Bittiefe</strong> ein (8-Bit, 16-Bit, 24-Bit, 32-Bit), wählen Sie die <strong>Kanäle</strong> (Mono oder Stereo). Für Spracherkennungsanwendungen wird empfohlen, eine Abtastrate von 16000Hz, 16-Bit-Tiefe, Mono zu wählen.',
            note: 'Verschiedene Anwendungsszenarien haben unterschiedliche Anforderungen an PCM-Parameter. Bitte wählen Sie die entsprechende Parameterkombination entsprechend dem Verwendungszweck.'
        },
        {
            title: 'In PCM-Format Konvertieren',
            description: 'Nachdem die Parameter eingestellt sind, klicken Sie auf die Schaltfläche <strong>"In PCM konvertieren"</strong>, um die Verarbeitung zu starten. Das Tool verarbeitet nacheinander alle hochgeladenen Audiodateien und zeigt während der Stapelverarbeitung Fortschrittsinformationen an. Die Konvertierungszeit hängt von Dateigröße und Anzahl ab. Die meisten Audiodateien können in wenigen Sekunden bis einigen zehn Sekunden verarbeitet werden.',
            note: 'Während der Konvertierung bitte die Seite geöffnet lassen und den Browser-Tab nicht schließen.'
        },
        {
            title: 'Vorschau der Konvertierungsergebnisse',
            description: 'Nach Abschluss der Konvertierung zeigt der rechte Ausgabebereich alle konvertierten PCM-Dateien an. Jede Datei zeigt Informationen wie Originalgröße und Größe nach der Konvertierung an. Da PCM ein Rohdatenformat ist, können einige Browser sie möglicherweise nicht direkt wiedergeben. Sie können sie herunterladen und in professioneller Audiosoftware verwenden.',
            note: 'PCM-Dateien sind groß. Stellen Sie sicher, dass Sie über genügend Speicherplatz verfügen.'
        },
        {
            title: 'Konvertierungsergebnisse Herunterladen',
            description: 'Wenn Sie mit den Konvertierungsergebnissen zufrieden sind, können Sie auf die Schaltfläche <strong>"PCM herunterladen"</strong> unter jeder Datei klicken, um sie einzeln zu speichern, oder die Schaltfläche <strong>"Stapel-Download (ZIP)"</strong> oben im Ausgabebereich verwenden, um alle konvertierten PCM-Dateien in einer ZIP-Datei zum einmaligen Download zu verpacken. Die gesamte Verarbeitung erfolgt lokal im Browser und gewährleistet die Privatsphäre und Sicherheit Ihres Audios.',
            note: 'Die heruntergeladenen PCM-Dateien können direkt in Spracherkennungs-APIs, Audioanalyse-Software oder anderen Anwendungen verwendet werden, die das PCM-Format unterstützen.'
        }
    ],
    
    successTitle: 'Herzlichen Glückwunsch!',
    successContent: 'Sie haben erfolgreich gelernt, wie man unser Audio-zu-PCM-Tool verwendet. Sie können jetzt Audiodateien verschiedener Formate in rohe PCM-Daten für Spracherkennung, Audioanalyse, professionelle Audioverarbeitung und andere Anwendungsszenarien konvertieren.',
    
    relatedToolsTitle: 'Verwandte Tools, die Sie Interressieren Könnten',
    relatedTools: [
        {
            name: 'Audio zu MP3',
            description: 'Konvertieren Sie Audio in das MP3-Format mit der besten Kompatibilität, geeignet für Musikwiedergabe und -freigabe.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio zu WAV',
            description: 'Konvertieren Sie Audio in das verlustfreie WAV-Format, geeignet für professionelle Audiobearbeitung und Archivierung.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio zu M4A',
            description: 'Konvertieren Sie Audio in das für Apple-Geräte geeignete M4A-Format.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Bild zu ASCII-Kunst',
            description: 'Konvertieren Sie Bilder in ASCII-Zeichenkunst und erzeugen Sie einzigartige Textkunst-Effekte.',
            url: 'https://www.ufreetools.com/tool/image-to-ascii'
        }
    ],
    
    referencesTitle: 'Referenzressourcen',
    references: [
        {
            name: 'PCM-Audioformat Details',
            description: 'Verstehen Sie die Prinzipien und technischen Details der PCM-Pulscodemodulation',
            url: 'https://en.wikipedia.org/wiki/Pulse-code_modulation'
        },
        {
            name: 'Audioanforderungen für Spracherkennung',
            description: 'Audioformatanforderungen der wichtigsten Spracherkennungsplattformen',
            url: 'https://developer.mozilla.org/de/docs/Web/Media/Formats'
        },
        {
            name: 'Grundlagen der Digitalen Audios',
            description: 'Detaillierte Erklärungen von Konzepten wie Abtastrate, Bittiefe, Kanäle',
            url: 'https://en.wikipedia.org/wiki/Digital_audio'
        }
    ]
};
