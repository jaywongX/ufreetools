export default {
  name: 'Audio in WAV',
  description: 'Konvertieren Sie verschiedene Audioformate in hochwertige WAV-Verlustfrei-Audiodateien',
  longDescription: 'Kostenloser Online-Audio-zu-WAV-Konverter. Unterstützt MP3, M4A, FLAC, OGG, AAC, WMA und andere Formate in WAV-Verlustfrei-Audio. Passen Sie Abtastrate und Kanäle an, um die beste Qualität zu erhalten.',
  
  selectFile: 'Audiodatei auswählen',
  dropFile: 'Oder ziehen Sie Audiodateien hierher',
  supportedFormats: 'Unterstützte Formate: MP3, M4A, FLAC, OGG, AAC, WMA, AMR, AIFF, APE usw.',
  
  converting: 'Konvertierung läuft...',
  convertComplete: 'Konvertierung abgeschlossen!',
  downloadAll: 'Alle herunterladen',
  clearAll: 'Alle löschen',
  
  settings: {
    title: 'Konvertierungseinstellungen',
    sampleRate: 'Abtastrate',
    sampleRates: {
      '22050': '22050 Hz (Sprachqualität)',
      '44100': '44100 Hz (CD-Qualität)',
      '48000': '48000 Hz (Professionelle Qualität)',
      '96000': '96000 Hz (Hochauflösung)',
      '192000': '192000 Hz (Studioqualität)'
    },
    channels: 'Kanäle',
    channelOptions: {
      stereo: 'Stereo',
      mono: 'Mono'
    },
    bitDepth: 'Bittiefe',
    bitDepths: {
      '16': '16 Bit (CD-Standard)',
      '24': '24 Bit (Professionell)',
      '32': '32 Bit (Studio)'
    },
    volume: 'Lautstärke',
    volumeLabel: 'Lautstärkeregelung'
  },
  
  errors: {
    selectFile: 'Bitte wählen Sie eine Audiodatei aus',
    unsupportedFormat: 'Nicht unterstütztes Dateiformat',
    conversionFailed: 'Konvertierung fehlgeschlagen, bitte versuchen Sie es erneut',
    fileTooLarge: 'Datei zu groß, bitte wählen Sie Dateien unter 100MB'
  },
  
  fileInfo: {
    name: 'Dateiname',
    size: 'Dateigröße',
    duration: 'Dauer',
    format: 'Originalformat',
    status: 'Status',
    actions: 'Aktionen'
  },
  
  status: {
    pending: 'Wartend',
    processing: 'Verarbeitung',
    completed: 'Abgeschlossen',
    failed: 'Fehlgeschlagen'
  },
  
  features: {
    title: 'Funktionen',
    list: [
      'Unterstützt mehrere Audioformate zu WAV',
      'Mehrere Abtastraten (22050Hz-192000Hz)',
      'Wählbare Bittiefe (16/24/32 Bit)',
      'Stereo- und Mono-Unterstützung',
      'Lautstärkeregelung',
      'Stapelverarbeitung',
      'Behält die ursprüngliche Qualität bei',
      'Vollständig kostenlos, ohne Registrierung'
    ]
  },
  
  article: {
    title: 'Anleitung zum Audio-zu-WAV-Konverter',
    subtitle: 'Was ist das WAV-Format?',
    description: 'WAV (Waveform Audio File Format) ist ein verlustfreies Audioformat, das von Microsoft entwickelt wurde und weit verbreitet in der professionellen Audioproduktion, Aufnahmestudios und im Rundfunk verwendet wird. Als eines der ursprünglichsten digitalen Audioformate bewahrt WAV alle Audiodaten und bietet ein optimales Qualitätserlebnis.',
    
    whyConvert: {
      title: 'Warum zu WAV konvertieren?',
      reasons: [
        {
          title: 'Verlustfreies Audio',
          description: 'WAV verwendet verlustfreie Kompression und bewahrt alle Details des Originals, die erste Wahl für Audiophile und Profis.'
        },
        {
          title: 'Professionelle Bearbeitung',
          description: 'Professionelle Audio-Bearbeitungssoftware wie Adobe Audition und Pro Tools unterstützen WAV vorrangig.'
        },
        {
          title: 'Breite Kompatibilität',
          description: 'Fast alle Audioplayer und Betriebssysteme unterstützen WAV.'
        },
        {
          title: 'Aufnahme-Archiv',
          description: 'WAV ist das ideale Format für Aufnahmedateien.'
        }
      ]
    },
    
    howToUse: {
      title: 'Wie man den Audio-zu-WAV-Konverter verwendet',
      steps: [
        {
          step: 'Schritt 1',
          description: 'Wählen Sie die zu konvertierenden Audiodateien aus oder ziehen Sie sie hierher.'
        },
        {
          step: 'Schritt 2',
          description: 'Passen Sie Abtastrate, Bittiefe und Kanäle nach Bedarf an.'
        },
        {
          step: 'Schritt 3',
          description: 'Klicken Sie auf "Konvertierung starten" und warten Sie auf den Abschluss.'
        },
        {
          step: 'Schritt 4',
          description: 'Laden Sie die konvertierte WAV-Datei herunter.'
        }
      ]
    },
    
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen WAV und MP3?',
        answer: 'WAV ist ein verlustfreies Format, das alle Audiodaten bewahrt, größere Dateien aber bessere Qualität; MP3 ist ein verlustbehaftetes Format, kleinere Dateien aber verliert an Qualität.'
      },
      {
        question: 'Welche Abtastrate sollte ich wählen?',
        answer: 'Für allgemeine Nutzung wird 44100Hz (CD-Qualität) empfohlen; für professionelle Aufnahme 48000Hz oder höher; für Sprachaufnahme reicht 22050Hz.'
      },
      {
        question: 'Warum sind WAV-Dateien so groß?',
        answer: 'WAV ist ein verlustfreies Format, das alle Original-Audiodaten ohne Kompression bewahrt, daher ist die Dateigröße größer.'
      },
      {
        question: 'Kann ich WAV in andere Formate konvertieren?',
        answer: 'Ja, unser Tool unterstützt auch die Konvertierung von WAV zu MP3, M4A und anderen Formaten.'
      }
    ],
    
    relatedTools: [
      {
        name: 'Audio in MP3',
        description: 'Konvertieren Sie Audio in das MP3-Format mit bester Kompatibilität.',
        url: 'https://www.ufreetools.com/tools/audio-to-mp3'
      },
      {
        name: 'Audio in M4A',
        description: 'Konvertieren Sie Audio in das M4A-Format ideal für Apple-Geräte.',
        url: 'https://www.ufreetools.com/tools/audio-to-m4a'
      },
      {
        name: 'Bild zu ASCII-Kunst',
        description: 'Konvertieren Sie Bilder in ASCII-Zeichenkunst für einzigartige Textkunst-Effekte.',
        url: 'https://www.ufreetools.com/tools/image-to-ascii'
      }
    ],
    
    references: [
      {
        title: 'Wikipedia WAV-Format',
        url: 'https://de.wikipedia.org/wiki/WAV'
      },
      {
        title: 'Grundlagen des Digitalen Audios',
        url: 'https://www.ufreetools.com/blog/digital-audio-basics'
      }
    ]
  }
}
