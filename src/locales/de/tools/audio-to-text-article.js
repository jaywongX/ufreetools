export default {
    title: 'Audio-zu-Text-Tool: Anleitung für den Online-Konverter',
    functionTitle: 'Was ist das Audio-zu-Text-Tool und seine Verwendung?',
    intro: 'Unser <strong>Audio-zu-Text-Tool</strong> ist eine professionelle Online-Spracherkennungsanwendung, die WAV, MP3, FLAC, OGG, AAC, M4A und andere Audioformate in bearbeitbaren Text umwandeln kann. Mit fortschrittlicher Spracherkennungstechnologie unterstützt es die Erkennung mehrerer Sprachen.',
    
    useCasesTitle: 'Häufige Anwendungsfälle für Audio-zu-Text',
    useCases: [
        'Umwandlung von Meeting-Aufnahmen in Text zur schnellen Erstellung von Protokollen',
        'Transkription von Interviews zur einfacheren Bearbeitung und Analyse',
        'Erstellung von Video-Untertiteln, schnelles Generieren von SRT-Dateien',
        'Umwandlung von Sprachnotizen in durchsuchbaren Text',
        'Transkription von Podcasts zur Verbesserung der Zugänglichkeit',
        'Aufzeichnung von Online-Kursen zur einfacheren Wiederholung für Studenten',
        'Umwandlung von Telefonaufnahmen in Text für Kundendienstprotokolle',
        'Hilfe beim Sprachenlernen, Vergleich von Audioinhalt und Text'
    ],
    
    tipTitle: 'Professioneller Tipp:',
    tipContent: 'Die Wirkung der Audio-zu-Text-Konvertierung wird stark von der Audioqualität beeinflusst. Klares, geräuschfreies Audio mit moderater Sprechgeschwindigkeit liefert die besten Erkennungsergebnisse. Empfohlen wird die Aufnahme mit einem hochwertigen Mikrofon und die Vermeidung von Hintergrundgeräuschen.',
    
    conclusion: 'Das <strong>Audio-zu-Text-Konvertierungstool</strong> ist besonders nützlich für Journalisten, Studenten, Content-Ersteller, Kundendienstmitarbeiter und Benutzer, die Audio-zu-Text-Konvertierung verarbeiten müssen.',
    
    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
        {
            question: 'Welche Eingabeformate unterstützt das Audio-zu-Text-Tool?',
            answer: 'Unser <strong>Online-Audio-zu-Text-Konverter</strong> unterstützt viele gängige Audioformate, einschließlich WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE. Sie können mehrere Audiodateien verschiedener Formate gleichzeitig für die Stapelkonvertierung hochladen.'
        },
        {
            question: 'Welche Sprachen werden für die Spracherkennung unterstützt?',
            answer: 'Unser Tool unterstützt die Erkennung mehrerer Sprachen, einschließlich Chinesisch, Englisch, Japanisch, Koreanisch, Französisch, Deutsch, Spanisch, Russisch, Portugiesisch, Italienisch, Arabisch, Hindi und andere Hauptsprachen. Sie können "Automatische Erkennung" wählen, um das System die Sprache automatisch erkennen zu lassen.'
        },
        {
            question: 'Welchen Ausgabeformat-Optionen sind verfügbar?',
            answer: 'Wir bieten drei Ausgabeformate: <strong>Nur Text (TXT)</strong> - geeignet für allgemeine Textverarbeitung; <strong>Untertiteldatei (SRT)</strong> - mit Zeitstempeln, kann direkt für Video-Untertitel verwendet werden; <strong>JSON-Format</strong> - enthält detaillierte Informationen, geeignet für Entwickler.'
        },
        {
            question: 'Können mehrere Audiodateien gleichzeitig in Text umgewandelt werden?',
            answer: 'Natürlich! Unser <strong>Audio-zu-Text-Tool</strong> unterstützt die Stapelverarbeitungsfunktion. Sie können mehrere Audiodateien gleichzeitig hochladen (Drag & Drop oder Dateiauswahl unterstützt), und das Tool verarbeitet alle Dateien nacheinander. Nach Abschluss können Sie jede konvertierte Textdatei einzeln herunterladen oder die Stapel-Download-Funktion verwenden.'
        },
        {
            question: 'Welche Faktoren beeinflussen die Konvertierungsqualität?',
            answer: 'Die Spracherkennungsqualität wird durch folgende Faktoren beeinflusst: 1) Audioqualität - klares Audio ohne Geräusch liefert die besten Ergebnisse; 2) Sprechgeschwindigkeit - moderate Geschwindigkeit ist besser als zu schnelle; 3) Hintergrundgeräusche - Aufnahme in ruhiger Umgebung ist besser; 4) Akzent und Aussprache - Standardaussprache wird präziser erkannt.'
        },
        {
            question: 'Ist der Konvertierungsprozess sicher? Wird das Audio auf einen Server hochgeladen?',
            answer: 'Vollständig sicher! Unser Tool verwendet reine Frontend-Technologie, die gesamte Audioverarbeitung erfolgt lokal in Ihrem Browser. Ihre Audiodateien werden nicht auf einen Server hochgeladen, was Privatsphäre und Datensicherheit garantiert. Sie können Audiodateien mit sensiblen Inhalten vertrauensvoll verarbeiten.'
        },
        {
            question: 'Wie wird eine SRT-Untertiteldatei verwendet?',
            answer: 'SRT ist ein universelles Untertitelformat, das in fast allen Videoplayern und Bearbeitungsprogrammen verwendet werden kann: 1) Videoplayer - VLC, PotPlayer und andere unterstützen direktes Laden; 2) Videobearbeitungsprogramme - Premiere, Final Cut und andere können importiert werden; 3) Videoplattformen - YouTube, Bilibili und andere unterstützen das Hochladen von Untertiteldateien.'
        }
    ],
    
    tutorialTitle: 'Wie man das Audio-zu-Text-Tool verwendet',
    steps: [
        {
            title: 'Laden Sie Ihre Audiodatei hoch',
            description: 'Laden Sie zunächst die Audiodatei hoch, die Sie in Text umwandeln möchten. Sie können auf zwei Arten hochladen: <strong>Datei ziehen</strong> in den Upload-Bereich oder <strong>klicken zum Durchsuchen</strong> und Datei auswählen. Das Tool unterstützt WAV, MP3, FLAC, OGG, AAC, M4A und andere Formate, Sie können mehrere Dateien gleichzeitig für die Stapelverarbeitung hochladen.',
            note: 'Empfohlen wird die Verwendung klarer, geräuschfreier Audiodateien, Audio mit moderater Sprechgeschwindigkeit liefert die besten Erkennungsergebnisse.'
        },
        {
            title: 'Audiodatei vorschauen',
            description: 'Nach dem Hochladen sehen Sie die Liste aller hochgeladenen Audiodateien im linken Vorschaubereich. Jede Datei zeigt Dateiname, Format und Größeninformationen. Sie können auf die Wiedergabetaste klicken, um das Audio vorzuhören und zu bestätigen, dass Sie die richtigen Dateien ausgewählt haben.',
            note: 'Bei der Stapelverarbeitung wird empfohlen, zuerst die Audioliste vorzuhören, um sicherzustellen, dass alle zu konvertierenden Dateien korrekt hochgeladen wurden.'
        },
        {
            title: 'Konvertierungsparameter einstellen',
            description: 'Vor der Konvertierung können Sie die Ausgabeeinstellungen anpassen. Wählen Sie die passende <strong>Erkennungssprache</strong> (automatische Erkennung oder manuelle Auswahl), wählen Sie das <strong>Ausgabeformat</strong> (TXT Nur-Text, SRT Untertiteldatei oder JSON-Format), und Sie können auch wählen, ob <strong>Zeitstempel angezeigt</strong> werden sollen.',
            note: 'Die manuelle Sprachauswahl ist normalerweise genauer als die automatische Erkennung, empfohlen wird manuelle Auswahl, wenn die Sprache bekannt ist.'
        },
        {
            title: 'In Text umwandeln',
            description: 'Nach Abschluss der Einstellungen klicken Sie auf die Schaltfläche <strong>"In Text umwandeln"</strong> um die Verarbeitung zu starten. Das Tool verarbeitet nacheinander alle hochgeladenen Audiodateien und zeigt Fortschrittsinformationen während der Stapelverarbeitung an. Die Konvertierungszeit hängt von Dateigröße und -anzahl ab.',
            note: 'Bitte halten Sie die Seite während der Konvertierung geöffnet, schließen Sie nicht den Browser-Tab.'
        },
        {
            title: 'Konvertierungsergebnisse vorschauen und bearbeiten',
            description: 'Nach Abschluss der Konvertierung zeigt der rechte Ausgabebereich den gesamten konvertierten Text. Sie können den erkannten Textinhalt ansehen, jede Datei zeigt <strong>Wortanzahl</strong> und <strong>Dauer</strong>-Informationen. Bei Bedarf können Sie auf die Schaltfläche <strong>"Text kopieren"</strong> klicken, um den Inhalt in die Zwischenablage zur Bearbeitung zu kopieren.',
            note: 'Empfohlen wird die manuelle Überprüfung der Konvertierungsergebnisse, insbesondere für Fachbegriffe und Eigennamen.'
        },
        {
            title: 'Konvertierungsergebnisse herunterladen',
            description: 'Wenn Sie mit den Konvertierungsergebnissen zufrieden sind, können Sie auf die Schaltfläche <strong>"TXT herunterladen"</strong> oder <strong>"SRT herunterladen"</strong> unter jeder Datei klicken, um einzeln zu speichern, oder die Schaltfläche <strong>"Stapel-Download (ZIP)"</strong> oben im Ausgabebereich verwenden, um alle konvertierten Textdateien in einer einzigen ZIP-Datei zu verpacken.',
            note: 'Das SRT-Format enthält Zeitstempel und kann direkt für Video-Untertitel verwendet werden; das TXT-Format eignet sich für allgemeine Textverarbeitung.'
        }
    ],
    
    successTitle: 'Herzlichen Glückwunsch!',
    successContent: 'Sie haben erfolgreich gelernt, wie man unser Audio-zu-Text-Tool verwendet. Sie können jetzt einfach verschiedene Audioformate in bearbeitbaren Text umwandeln, zur Verwendung in Meeting-Protokollen, Untertitelerstellung, Sprachnotizen und anderen Zwecken.',
    
    relatedToolsTitle: 'Verwandte Tools, die Sie interessieren könnten',
    relatedTools: [
        {
            name: 'Audio zu MP3',
            description: 'Audio in MP3-Format umwandeln, um Speicherplatz zu sparen und Weitergabe zu erleichtern.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio zu WAV',
            description: 'Audio in verlustfreies WAV-Format umwandeln, geeignet für professionelle Audioverarbeitung.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio zu M4A',
            description: 'Audio in M4A-Format umwandeln, kompatibel mit Apple-Geräten, ausgezeichnete Tonqualität.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Audio zu MIDI',
            description: 'Audio in MIDI-Format umwandeln für Verwendung in Musikproduktion und -bearbeitung.',
            url: 'https://www.ufreetools.com/tool/audio-to-midi'
        }
    ],
    
    referencesTitle: 'Referenzressourcen',
    references: [
        {
            name: 'Spracherkennungstechnologie',
            description: 'Erfahren Sie mehr über die Grundprinzipien und Entwicklungsgeschichte der Spracherkennung',
            url: 'https://en.wikipedia.org/wiki/Speech_recognition'
        },
        {
            name: 'SRT-Untertitelformat',
            description: 'Erfahren Sie mehr über die Spezifikationen des SRT-Untertiteldateiformats',
            url: 'https://en.wikipedia.org/wiki/SubRip'
        },
        {
            name: 'Natürliche Sprachverarbeitung',
            description: 'Erkunden Sie natürliche Sprachverarbeitung und Sprach-zu-Text-Technologie',
            url: 'https://en.wikipedia.org/wiki/Natural_language_processing'
        }
    ]
};
