export default {
    title: 'Audio Visual Editor: Online Audio-Wellenform-Editor Anleitung',
    functionTitle: 'Was ist der Audio Visual Editor und wozu dient er?',
    intro: 'Unser <strong>Audio Visual Editor</strong> ist eine professionelle Online-Audio-Wellenform-Bearbeitungsanwendung, die visuelle Bearbeitung von WAV, MP3, FLAC, OGG, AAC, M4A und anderen Audioformaten unterstützt. Mit einer intuitiven Wellenform-Anzeigeschnittstelle können Sie Audio-Segmente präzise auswählen und professionelle Bearbeitungsvorgänge wie Trimmen, Löschen, Ein-/Ausblenden, Lautstärkeregelung, Stummschalten, Normalisieren und Umkehren durchführen.',
    
    useCasesTitle: 'Häufige Anwendungsfälle für visuelle Audio-Bearbeitung',
    useCases: [
        'Audiodateien bearbeiten und trimmen, unerwünschte Teile entfernen',
        'Podcasts und Radiosendungen produzieren mit Audio-Nachbearbeitung',
        'Hintergrundmusik für Videos erstellen, Audiolänge und -effekte anpassen',
        'Klingeltöne und Benachrichtigungstöne erstellen, Audio-Clips zuschneiden',
        'Sprachaufnahmen verarbeiten, Stille und Rauschen entfernen',
        'Musik-Mixe erstellen, mehrere Audio-Clips kombinieren',
        'Audio-Lautstärke anpassen, Normalisierung durchführen',
        'Ein-/Ausblendeffekte für weichere Übergänge hinzufügen'
    ],
    
    tipTitle: 'Professioneller Tipp:',
    tipContent: 'Wir empfehlen, Ihre Original-Audiodateien vor der Bearbeitung zu sichern. Verwenden Sie die Auswahlfunktion, um die zu bearbeitenden Audio-Segmente präzise auszuwählen. Ein-/Ausblendeffekte machen Audio-Übergänge natürlicher. Die Normalisierungsfunktion optimiert das Gesamt-Lautstärkeniveau des Audios.',
    
    conclusion: '<strong>Audio Visual Editor</strong> ist besonders nützlich für Podcast-Produzenten, Musik-Enthusiasten, Video-Ersteller und Audio-Bearbeitungs-Anfänger. Mit unserem Online-Audio-Editor können Sie präzise Audio-Bearbeitung in einer intuitiven Wellenform-Schnittstelle durchführen, die verschiedene professionelle Operationen wie Trimmen, Löschen, Ein-/Ausblenden, Stummschalten, Normalisieren und Umkehren unterstützt.',
    
    faqTitle: 'Häufig Gestellte Fragen',
    faqs: [
        {
            question: 'Welche Eingabeformate unterstützt der Audio Visual Editor?',
            answer: 'Unser <strong>Online-Audio-Editor</strong> unterstützt viele gängige Audioformate einschließlich WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE und mehr. Sie können jedes unterstützte Format zur Bearbeitung hochladen und nach der Bearbeitung als WAV oder MP3 exportieren.'
        },
        {
            question: 'Wie wähle ich ein Audio-Segment zur Bearbeitung aus?',
            answer: 'Im Wellenform-Anzeigebereich halten Sie die linke Maustaste gedrückt und ziehen, um ein Audio-Segment auszuwählen. Der ausgewählte Bereich wird blau hervorgehoben und zeigt Startzeit, Endzeit und Dauer der Auswahl. Nach der Auswahl können Sie Bearbeitungswerkzeuge wie Trimmen, Löschen, Ein-/Ausblenden usw. verwenden.'
        },
        {
            question: 'Was bewirken Ein-/Ausblendeffekte?',
            answer: 'Der Einblendeffekt erhöht das Audio allmählich von Stille auf normale Lautstärke, während der Ausblendeffekt das Audio allmählich von normaler Lautstärke auf Stille verringert. Diese Effekte machen den Anfang und das Ende des Audios natürlicher, vermeiden plötzliche Lautstärkeänderungen und sind besonders geeignet für Hintergrundmusik und Audio-Übergänge.'
        },
        {
            question: 'Was ist die Normalisierungsfunktion?',
            answer: 'Normalisierung ist der Prozess der Anpassung der Audio-Lautstärke an ein optimales Niveau. Sie analysiert die maximale Lautstärke im Audio und passt dann die Gesamtlautstärke proportional an, sodass die maximale Lautstärke nahe am erlaubten Maximum (normalerweise -0,5 dB) liegt, es aber nicht überschreitet. Dies macht die Gesamt-Audiolautstärke voller und vermeidet Clipping-Verzerrung.'
        },
        {
            question: 'Ist der Bearbeitungsprozess sicher? Wird Audio auf Server hochgeladen?',
            answer: 'Vollständig sicher! Unser Tool verwendet reine Frontend-Technologie, alle Audio-Verarbeitung erfolgt lokal in Ihrem Browser. Ihre Audiodateien werden auf keinen Server hochgeladen, was Privatsphäre und Datensicherheit gewährleistet. Sie können vertraulich Audiodateien mit sensiblen Inhalten bearbeiten.'
        },
        {
            question: 'Welche Formate kann ich exportieren?',
            answer: 'Nach der Bearbeitung können Sie als WAV (verlustfreies Format) oder MP3 (komprimiertes Format) exportieren. Wenn Sie nur einen Teil des Audios ausgewählt haben, können Sie wählen, ob Sie das gesamte Audio oder nur die Auswahl exportieren möchten. Die ursprüngliche Abtastrate und Kanalanzahl bleiben beim Export erhalten.'
        }
    ],
    
    tutorialTitle: 'Wie man den Audio Visual Editor verwendet',
    steps: [
        {
            title: 'Ihre Audiodatei Hochladen',
            description: 'Laden Sie zuerst die Audiodatei hoch, die Sie bearbeiten möchten. Sie können auf zwei Arten hochladen: <strong>Die Datei ziehen</strong> in den Upload-Bereich oder <strong>Durchsuchen klicken</strong> um eine Datei auszuwählen. Das Tool unterstützt WAV, MP3, FLAC, OGG, AAC, M4A und viele andere Formate.',
            note: 'Wir empfehlen, verlustfreie Formate (wie WAV, FLAC) zur Bearbeitung zu verwenden, um die beste Audioqualität zu erhalten.'
        },
        {
            title: 'Audio-Wellenform Anzeigen',
            description: 'Nach dem Hochladen wird die Audio-Wellenform automatisch im Bearbeitungsbereich angezeigt. Die Wellenform zeigt die Amplitudenänderungen des Audios und ermöglicht es Ihnen, die Audiostruktur visuell zu sehen. Dateiinformationen werden oben angezeigt, einschließlich Dauer, Abtastrate und Kanalanzahl.',
            note: 'Spitzen in der Wellenform repräsentieren lautere Teile, während flache Bereiche leisere oder stille Teile darstellen.'
        },
        {
            title: 'Bearbeitungsbereich Auswählen',
            description: '<strong>Halten Sie die linke Maustaste gedrückt und ziehen Sie</strong> auf der Wellenform, um ein Audio-Segment auszuwählen. Der ausgewählte Bereich wird blau hervorgehoben und zeigt den Zeitbereich der Auswahl. Sie können die Auswahl abspielen, um zu bestätigen, dass sie korrekt ist.',
            note: 'Wenn kein Bereich ausgewählt ist, werden einige Bearbeitungswerkzeuge (wie Normalisieren) auf das gesamte Audio angewendet.'
        },
        {
            title: 'Bearbeitungswerkzeuge Verwenden',
            description: 'Nachdem Sie einen Bereich ausgewählt haben, verwenden Sie die Bearbeitungswerkzeuge unten: <strong>Trimmen</strong> behält die Auswahl bei und entfernt andere Teile, <strong>Löschen</strong> entfernt die Auswahl, <strong>Ein-/Ausblenden</strong> fügt Verlaufseffekte hinzu, <strong>Stumm</strong> schaltet die Auswahl stumm, <strong>Normalisieren</strong> optimiert die Lautstärke, <strong>Umkehren</strong> spielt das Audio rückwärts ab.',
            note: 'Bearbeitungsvorgänge treten sofort in Kraft, wir empfehlen, die Ergebnisse vor dem Export sorgfältig zu überprüfen.'
        },
        {
            title: 'Abspielen und Vorschau',
            description: 'Verwenden Sie die Wiedergabesteuerung zum <strong>Abspielen/Pausieren</strong>, <strong>Vorwärts-/Rückwärts springen</strong> und <strong>Stoppen</strong> des Audios. Eine rote Indikatorlinie zeigt die aktuelle Wiedergabeposition. Sie können auch den Lautstärkeregler anpassen, um die Wiedergabelautstärke zu steuern.',
            note: 'Die Wiedergabelautstärke-Anpassung beeinflusst nicht das exportierte Audio, das das ursprüngliche Lautstärkeniveau beibehält.'
        },
        {
            title: 'Bearbeitungsergebnisse Exportieren',
            description: 'Wenn Sie mit den Bearbeitungsergebnissen zufrieden sind, wählen Sie das Exportformat (WAV oder MP3) und klicken Sie dann auf die Schaltfläche <strong>„Gesamtes Audio Exportieren"</strong> oder <strong>„Auswahl Exportieren"</strong>. Die Datei wird automatisch auf Ihr Gerät heruntergeladen. Die gesamte Verarbeitung erfolgt lokal im Browser, was Audio-Privatsphäre und -Sicherheit gewährleistet.',
            note: 'Das WAV-Format behält verlustfreie Qualität bei, hat aber größere Dateigröße; das MP3-Format hat kleinere Dateigröße und eignet sich zum Teilen.'
        }
    ],
    
    successTitle: 'Herzlichen Glückwunsch!',
    successContent: 'Sie haben erfolgreich gelernt, wie man unseren Audio Visual Editor verwendet. Jetzt können Sie einfach Audiodateien in verschiedenen Formaten bearbeiten und professionelle Operationen wie Trimmen, Ein-/Ausblenden, Lautstärkeregelung und mehr durchführen, um verschiedene Anforderungen wie Podcast-Produktion, Musik-Bearbeitung und Audio-Verarbeitung zu erfüllen.',
    
    relatedToolsTitle: 'Verwandte Tools',
    relatedTools: [
        {
            name: 'Audio zu MP3',
            description: 'Audio in MP3-Format konvertieren, Speicherplatz sparen und leicht zu teilen.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio zu WAV',
            description: 'Audio in verlustfreies WAV-Format konvertieren, geeignet für professionelle Audio-Verarbeitung.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio zu M4A',
            description: 'Audio in M4A-Format konvertieren, hohe Qualität mit kleiner Dateigröße.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Audio zu Text',
            description: 'Sprache in Audio in Text umwandeln, unterstützt mehrere Sprachen.',
            url: 'https://www.ufreetools.com/tool/audio-to-text'
        }
    ],
    
    referencesTitle: 'Referenzen',
    references: [
        {
            name: 'Audio-Wellenform-Bearbeitungsprinzipien',
            description: 'Erfahren Sie mehr über die technischen Prinzipien der Audio-Wellenform-Anzeige und -Bearbeitung',
            url: 'https://en.wikipedia.org/wiki/Waveform'
        },
        {
            name: 'Digitale Audio-Verarbeitung',
            description: 'Eintauchen in Techniken der digitalen Audio-Verarbeitung und -Bearbeitung',
            url: 'https://en.wikipedia.org/wiki/Digital_audio_editing'
        },
        {
            name: 'Audio-Format-Leitfaden',
            description: 'Erfahren Sie über Eigenschaften und Anwendungsfälle verschiedener Audioformate',
            url: 'https://en.wikipedia.org/wiki/Audio_file_format'
        }
    ]
};
