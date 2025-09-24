export default {
  title: 'Hintergrundunschärfewerkzeug: Online Blur Image Background für professionelle Tiefenschärfeeffekte',
  functionTitle: 'Was ist ein Hintergrundunschärfewerkzeug und wofür wird es verwendet?',
  intro: 'Dieses Werkzeug ist ein rein Frontend-basiertes <strong>Online-Hintergrundunschärfewerkzeug</strong> (Blur Image Background). Es kombiniert WebGL-Filter mit menschlichen Segmentierungsalgorithmen, um Gaußsche Unschärfe, Objektivtiefenschärfe, Bewegungsunschärfe, radiale Unschärfe und <b>professionelle Kamerahintergrundunschärfe</b> zu erreichen. Es unterstützt Stapelverarbeitung und Multi-Format-Export, sodass Sie schnell Fotos mit sauberen Hintergründen und hervorgehobenen Motiven in Ihrem Browser erhalten, geeignet für E-Commerce-Hauptbilder, Ausweisfotos, Social-Media-Cover und andere Szenarien.',
  useCasesTitle: 'Häufige Anwendungsszenarien für Hintergrundunschärfe',
  useCases: [
    'E-Commerce-Hauptbilder, die störende Hintergründe entfernen, um Produkte hervorzuheben',
    'Porträtfotos mit Hintergrundunschärfe für professionelle Tiefenschärfeeffekte',
    'Ausweisfotos oder Berufsbilder, ersetzt durch Vollfarben- oder Verlaufshintergründe',
    'Schnelle Verschönerung von Social-Media-Covern und Kurzvideo-Coverbildern',
    'Einheitliche Hintergrundverarbeitung für Präsentationsfolien und Plakatdesigns',
    'Hintergrundunschärfe von Reisefotos zum Schutz der Privatsphäre und zur Verbesserung der Ästhetik',
    'Hintergrundunschärfe von Gruppenfotos mit Stapel-Export',
    'Schnelle Erstellung von Weichzeichnungs- und Radialfokuseffekten für UGC-Inhalte'
  ],
  tipTitle: 'Professioneller Tipp:',
  tipContent: 'Bei Verwendung für Porträtmotive aktivieren Sie bitte "Vordergrundsegmentierung aktivieren" und erhöhen "Kanten weichzeichnen" angemessen, um das Sägen an Haarkanten deutlich zu reduzieren. Für Bilder mit hohen Qualitätsanforderungen bevorzugen Sie den Export in PNG- oder WebP-Formaten.',
  conclusion: 'Das <strong>Hintergrundunschärfewerkzeug</strong> löst effektiv die Schmerzpunkte "unordentliche Hintergründe" und "unauffällige Motive" durch intelligente Segmentierung und mehrere Unschärfealgorithmen. Ob Produktfotografie, Porträtaufnahmen oder Social-Content-Erstellung - die Online-Hintergrundunschärfe kann die visuelle Fokussierung und Professionalität erheblich verbessern.',
  faqTitle: 'Häufig gestellte Fragen',
  faqs: [
    {
      question: 'Wie erreicht das Online-Hintergrundunschärfewerkzeug professionelle Kameratiefenschärfeeffekte?',
      answer: 'Dieses Online-Hintergrundunschärfewerkzeug kombiniert MediaPipe-Vordergrundsegmentierung mit WebGL-Filtern und wendet Gaußsche/Objektiv-/Radial-/Bewegungsunschärfe auf Hintergrundbereiche an, um Tiefenschärfenübergänge und Weichfokuseffekte zu erzielen, die professionellen Kameras ähneln.'
    },
    {
      question: 'Welche Hintergrundersetzungsverfahren werden unterstützt (Vollfarbe/Verlauf/Bild)?',
      answer: 'Das Werkzeug unterstützt drei Modi: Vollfarben-Hintergrund, linearer Verlaufshintergrund und Bildhintergrund, mit einstellbarer Hintergrundtransparenz und Mischmodi, um die Anforderungen für E-Commerce-Hauptbilder, Ausweisfotos und Markenstil-Konsistenz zu erfüllen.'
    },
    {
      question: 'Wie wird die Exportqualität sichergestellt und die Dateigröße kontrolliert?',
      answer: 'Sie können PNG/JPG/WebP-Formate wählen und die Exportgröße über Qualitätsregler und Größenvoreinstellungen steuern. PNG und WebP eignen sich besser für Hintergrundunschärfeszenarien mit hohen Qualitätsanforderungen.'
    },
    {
      question: 'Wie wird die Stapelverarbeitung und Seitensortierung verwendet?',
      answer: 'Mehrere Bilder können gleichzeitig importiert werden, mit Bereichsauswahl und Kontrollkästchen zur Steuerung der Verarbeitung bestimmter "Seiten", unterstützt Auf-/Abwärts-Sortierung und automatische Filterung ungültiger Bilder mit "Leere Seiten überspringen".'
    },
    {
      question: 'Müssen Bilder auf den Server hochgeladen werden, wie wird die Privatsphäre geschützt?',
      answer: 'Die gesamte Hintergrundunschärfeverarbeitung erfolgt lokal im Browser und wird nicht auf einen Server hochgeladen, was die Bildprivatsphäre und -sicherheit gewährleistet.'
    }
  ],
  tutorialTitle: 'Wie verwendet man das Hintergrundunschärfewerkzeug',
  steps: [
    {
      title: 'Bilder hochladen oder importieren',
      description: 'Ziehen Sie lokale Bilder per Drag & Drop oder klicken Sie zum Hochladen, fügen Sie Bilder aus der Zwischenablage ein, aktivieren Sie die Kameraaufnahme oder importieren Sie Netzwerkbilder über URL. Unterstützt PNG-, JPG-, WEBP-, BMP-Formate.',
      note: 'Mehrere Bilder können gleichzeitig für Stapel-Hintergrundunschärfe importiert werden.'
    },
    {
      title: 'Unschärfetyp und Parameter auswählen',
      description: 'Wählen Sie Gaußsche, Objektiv-, Bewegungs- oder radiale Unschärfe unter "Unschärfetyp" und feinjustieren Sie die Effekte über Regler für Radius, Winkel, Mittelpunkt und Fokus-Bandbreite.',
      note: 'Das Aktivieren von "Vorher/Nachher-Vergleich anzeigen" ermöglicht einen Echtzeit-Vergleich der Hintergrundunschärfe vor und nach der Anwendung.'
    },
    {
      title: 'Vordergrundsegmentierung und Hintergrundeinstellungen aktivieren',
      description: 'Aktivieren Sie "Vordergrundsegmentierung aktivieren", um die Kantengüte des Motivs zu verbessern, erhöhen Sie "Kanten weichzeichnen" für natürlichere Übergänge. Wählen Sie unter "Hintergrundeinstellungen" Vollfarbe, Verlauf oder Bildhintergrund und passen Sie Transparenz und Mischmodi bei Bedarf an.',
      note: 'Bei Auswahl von "Originalhintergrund beibehalten" wird nur der Hintergrundbereich unscharf, während das Motiv klar bleibt.'
    },
    {
      title: 'Abmessungen und Qualität',
      description: 'Wählen Sie unter "Ausgabegröße und Qualität" Social-Media-Voreinstellungen oder benutzerdefinierte Abmessungen, stellen Sie JPG/WebP-Qualität und Skalierungsprozentsatz ein. Für den Druck erhöhen Sie die DPI und exportieren proportional höhere Pixelwerte.',
      note: 'PNG und WebP eignen sich besser für Hintergrundunschärfeszenarien, bei denen Details erhalten bleiben müssen.'
    },
    {
      title: 'Export und Stapel-Download',
      description: 'Wählen Sie das Exportformat für jedes Bild und klicken Sie auf "Herunterladen" zum Speichern; mehrere Bilder können "Stapel-Download (ZIP)" verwenden, um alle Hintergrundunschärfe-Ergebnisse auf einmal zu exportieren.',
      note: 'Die gesamte Verarbeitung erfolgt lokal im Browser, Bilder werden nicht auf den Server hochgeladen.'
    },
    {
      title: 'Seitensteuerung',
      description: 'Sortieren Sie "Seiten" über Kontrollkästchen, Bereichseingabe und Auf-/Abwärtsbewegung, aktivieren Sie "Leere Seiten überspringen" zur automatischen Filterung ungültiger Bilder mit geringer Helligkeitsvarianz.',
      note: 'Bereichsbeispiel: 1-3,5,7-9.'
    }
  ],
  successTitle: 'Glückwunsch!',
  successContent: 'Sie haben gelernt, unser Hintergrundunschärfewerkzeug zu verwenden, um professionelle Kameratiefenschärfe- und Weichfokuseffekte zu erzielen, die für verschiedene kreative und geschäftliche Szenarien geeignet sind.',
  relatedToolsTitle: 'Verwandte Werkzeuge, die Sie interessieren könnten',
  relatedTools: [
    {
      name: 'Bildkomprimierer',
      description: 'Bilddateigröße ohne signifikanten Qualitätsverlust reduzieren.',
      url: 'https://www.ufreetools.com/tool/image-compressor'
    },
    {
      name: 'Bildgrößenänderer',
      description: 'Bilder auf bestimmte Abmessungen skalieren oder prozentual anpassen.',
      url: 'https://www.ufreetools.com/tool/image-batch-resizer'
    },
    {
      name: 'Siegelgenerator',
      description: 'Online-Erstellung verschiedener Siegelbilder, Erzeugung von Firmenstempeln, persönlichen Siegeln und anderen digitalen Stempeln.',
      url: 'https://www.ufreetools.com/tool/seal-generator'
    },
    {
      name: 'QR-Code-Generator',
      description: 'Benutzerdefinierte QR-Codes für URLs, Texte, Kontaktinformationen und mehr erstellen.',
      url: 'https://www.ufreetools.com/tool/qr-code-generator'
    }
  ],
  referencesTitle: 'Referenzressourcen',
  references: [
    {
      name: 'MediaPipe Selfie Segmentierung',
      description: 'Googles Modell zur menschlichen Vordergrundsegmentierung und Verwendung',
      url: 'https://github.com/google/mediapipe/blob/master/docs/solutions/selfie_segmentation.md'
    },
    {
      name: 'glfx.js',
      description: 'WebGL-basierte Echtzeit-Bildeffekt-Bibliothek',
      url: 'https://github.com/evanw/glfx.js'
    },
    {
      name: 'StackBlur',
      description: 'Schneller und steuerbarer Canvas-Unschärfe-Algorithmus, geeignet als Fallback-Lösung und Weichzeichnungsverarbeitung',
      url: 'https://github.com/flozz/StackBlur'
    }
  ]
}