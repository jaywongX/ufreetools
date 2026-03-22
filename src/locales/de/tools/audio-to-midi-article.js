export default {
    title: 'Audio zu MIDI Konverter - kostenloses Online-Tool',
    functionTitle: 'Funktionen des Konverters',
    intro: 'Unser kostenloser Online-Audio-zu-MIDI-Konverter ermöglicht es Ihnen, Audioaufnahmen einfach in MIDI-Dateien umzuwandeln. Es ist ein leistungsstarkes Werkzeug für Musiker, Komponisten und Produzenten, das vollständig im Browser funktioniert, ohne Software-Installation.',
    useCasesTitle: 'Anwendungsfälle',
    useCases: [
        'Transkribieren von Melodien aus Audioaufnahmen zur Bearbeitung in MIDI-Editoren',
        'Erstellen von MIDI-Dateien aus Gesangsparts für die Verwendung mit virtuellen Instrumenten',
        'Extrahieren von Noten aus Audio-Samples für musikalische Arrangements',
        'Konvertieren von Audio-Parts in MIDI zur Änderung von Tempo und Tonart',
        'Umwandeln aufgezeichneter musikalischer Ideen in bearbeitbares MIDI-Format'
    ],
    tipTitle: 'Tipps für beste Ergebnisse',
    tipContent: 'Für optimale Erkennung verwenden Sie Audio mit einer klaren Melodielinie und minimalem Hintergrundgeräusch. Monophone Aufnahmen (ein Instrument oder eine Stimme) werden deutlich besser erkannt als polyphone. Wenn möglich, verwenden Sie unkomprimierte Audioformate wie WAV.',
    
    conclusion: '<strong>Audio-zu-MIDI-Konvertierung</strong> ist besonders nützlich für Musikproduzenten, Komponisten, Musiklehrer und Musikliebhaber. Mit unserem Online-Audio-zu-MIDI-Konverter können Sie Melodien aus jedem Audio in bearbeitbare MIDI-Notendaten extrahieren, für Verwendung in Musikkomposition, Arrangement, Lernen und Analyse. Unser Tool unterstützt Stapelverarbeitung, bietet Kontrolle über Empfindlichkeit, Notenbereich, Zeitquantisierung und andere Parameter, die gesamte Verarbeitung erfolgt lokal im Browser und gewährleistet Ihre Audio-Privatsphäre und Sicherheit.',
    
    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
        {
            question: 'Wie funktioniert die Audio-zu-MIDI-Konvertierung?',
            answer: 'Der Konverter analysiert das Frequenzspektrum des Audiosignals und bestimmt die Noten, ihre Dauer und Lautstärke. Diese Informationen werden dann im Standard-MIDI-Format kodiert.'
        },
        {
            question: 'Welche Audio-Typen eignen sich am besten zur Konvertierung?',
            answer: 'Die besten Ergebnisse werden mit monophonen Aufnahmen erzielt, bei denen ein einzelnes Instrument oder eine Stimme vorhanden ist. Saubere Aufnahmen ohne Hall, Echo oder Hintergrundgeräusche werden präziser erkannt.'
        },
        {
            question: 'Können komplexe musikalische Kompositionen konvertiert werden?',
            answer: 'Ja, aber die Ergebnisse können variieren. Die polyphone Erkennung (mehrere Instrumente gleichzeitig) ist eine anspruchsvolle Aufgabe und kann eine manuelle Korrektur des Ergebnisses erfordern.'
        },
        {
            question: 'Welche Parameter können angepasst werden?',
            answer: 'Sie können den erkannten Notenbereich, die Erkennungsempfindlichkeit, die Mindestdauer der Noten und andere Parameter anpassen, um das Ergebnis für Ihr Audiomaterial zu optimieren.'
        },
        {
            question: 'Wird die Erkennung von Percussion unterstützt?',
            answer: 'Die Erkennung von Perkussionsinstrumenten hat ihre Besonderheiten. Das Programm kann die Zeitpunkte der Schläge bestimmen, aber die genaue Erkennung der Arten von Perkussionsinstrumenten ist begrenzt.'
        },
        {
            question: 'Gibt es Einschränkungen bei der Dateigröße?',
            answer: 'Die maximale Dateigröße hängt von den Fähigkeiten Ihres Browsers ab. Dateien bis zu 50-100 MB werden normalerweise unterstützt. Für große Dateien wird empfohlen, das Audio vorher zu schneiden oder zu komprimieren.'
        }
    ],
    tutorialTitle: 'Schritt-für-Schritt-Anleitung',
    steps: [
        'Wählen Sie die Audiodatei durch Klicken auf "Datei auswählen" oder Ziehen der Datei in den Upload-Bereich',
        'Passen Sie bei Bedarf die Erkennungsparameter an: Notenbereich, Empfindlichkeit, Mindestdauer der Noten',
        'Klicken Sie auf die Schaltfläche "Konvertierung starten", um den Prozess zu starten',
        'Warten Sie auf den Abschluss der Verarbeitung - die Zeit hängt von der Dauer und Komplexität des Audios ab',
        'Hören Sie sich das Ergebnis an und laden Sie bei Bedarf die MIDI-Datei auf Ihr Gerät herunter'
    ],
    successTitle: 'Konvertierung erfolgreich abgeschlossen',
    successContent: 'Ihre MIDI-Datei ist zum Download bereit. Sie können sie in jedem MIDI-Editor oder DAW öffnen, um weiterzuarbeiten.',
    relatedToolsTitle: 'Verwandte Tools',
    relatedTools: [
        {
            name: 'Audio zu MP3',
            description: 'Audio in MP3-Format konvertieren, Speicherplatz für einfaches Teilen sparen.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio zu WAV',
            description: 'Audio in verlustfreies WAV-Format konvertieren, geeignet für professionelle Audioverarbeitung.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio zu M4A',
            description: 'Audio in M4A-Format konvertieren, kompatibel mit Apple-Geräten, hervorragende Klangqualität.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Audio zu PCM',
            description: 'Audio in rohes PCM-Format konvertieren, geeignet für professionelle Audioverarbeitung und Analyse.',
            url: 'https://www.ufreetools.com/tool/audio-to-pcm'
        }
    ],
    
    referencesTitle: 'Referenzmaterialien',
    references: [
        {
            name: 'MIDI-Format-Standard',
            description: 'Erfahren Sie mehr über technische Spezifikationen und Anwendungsfälle des MIDI-Formats',
            url: 'https://en.wikipedia.org/wiki/MIDI'
        },
        {
            name: 'Audio-zu-MIDI-Technologie',
            description: 'Vertiefen Sie sich in Tonhöhenerkennung und MIDI-Konvertierungsalgorithmen',
            url: 'https://en.wikipedia.org/wiki/Audio_to_score'
        },
        {
            name: 'Musikinformationsabruf',
            description: 'Erkunden Sie Musikinformationsabruf und automatische Musiktranskriptionstechnologie',
            url: 'https://en.wikipedia.org/wiki/Music_information_retrieval'
        }
    ]
};
