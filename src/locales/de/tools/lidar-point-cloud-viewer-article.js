export default {
  title: 'Online LIDAR-Punktwolken-Viewer – Kostenloses 3D-Visualisierungstool',
  functionTitle: 'Tool-Funktionen und Anwendungsfälle',
  intro:
    'Unser <strong>Online LIDAR-Punktwolken-Viewer</strong> ist ein professionelles 3D-Visualisierungstool für Punktwolkendaten und unterstützt die Online-Ansicht und -Analyse mehrerer Formate. Dieser <strong>kostenlose Punktwolken-Viewer</strong> basiert auf WebGL, benötigt keine Installation und liefert hochwertiges 3D-Rendering direkt im Browser. Ob Vermessungsingenieur, Architekt oder GIS-Spezialist – dieser <strong>LIDAR-Daten-Viewer</strong> erfüllt Ihre professionellen Anforderungen.',
  useCasesTitle: 'Wichtigste Anwendungsfälle',
  useCases: [
    'Vermessung: LiDAR-Scandaten ansehen und analysieren für Geländeaufnahme und Gebäudevermessung',
    'Architektur: Punktwolken von Gebäuden visualisieren zur Unterstützung von BIM-Workflows',
    'Stadtplanung: 3D-Stadtmodelle analysieren zur Unterstützung von Smart-City-Planung und Entscheidungen',
    'Forstwirtschaft: Forstliche Punktwolken verarbeiten zur Bewertung von Vegetationsbedeckung und Biomasse',
    'Archäologie: 3D-Scans von Fundstätten betrachten für Denkmalschutz und Forschung',
    'Geologische Exploration: Punktwolken geologischer Strukturen analysieren für Prospektion und Risikobewertung',
    'Autonomes Fahren: Fahrzeug-LiDAR-Daten ansehen für Routenplanung und Objekterkennung',
    'Industrielle Inspektion: 3D-Scans von Anlagen analysieren für Qualitätskontrolle und Fehlererkennung'
  ],
  tipTitle: 'Profi-Tipp',
  tipContent:
    'Unser Viewer unterstützt gängige Formate wie LAS, XYZ, PLY und PCD und bietet mehrere Färbemodi sowie interaktive Steuerungen, um Punktwolkendaten aus verschiedenen Perspektiven zu analysieren.',
  conclusion:
    'Mit unserem <strong>Online-Visualisierungstool für Punktwolken</strong> können Sie unterschiedliche LIDAR-Datensätze schnell vorbetrachten und analysieren – für höhere Produktivität. Dieser <strong>3D-Punktwolken-Viewer</strong> ist vollständig kostenlos und datenschutzfreundlich; die Verarbeitung erfolgt lokal im Browser.',
  faqTitle: 'Häufig gestellte Fragen (FAQ)',
  faqs: [
    {
      question: 'Welche Dateiformate unterstützt dieser LIDAR-Punktwolken-Viewer?',
      answer:
        'Unser <strong>Punktwolken-Viewer</strong> unterstützt mehrere gängige Formate, darunter LAS (LIDAR-Standardformat), XYZ (ASCII-Punktwolke), PLY (Polygon-Dateiformat), PCD (Point Cloud Data) und TXT. Diese decken die meisten Szenarien der <strong>LIDAR-Datenverarbeitung</strong> und 3D-Erfassung ab.'
    },
    {
      question: 'Gibt es eine Größenbeschränkung für Punktwolkendateien?',
      answer:
        'Für gute Browserleistung empfehlen wir <strong>Punktwolkendateien</strong> bis maximal 100 MB. Bei großen Datensätzen sind Downsampling oder Kachelung sinnvoll. Unser <strong>Online-Punktwolken-Viewer</strong> optimiert das Rendering automatisch für eine flüssige 3D-Ansicht.'
    },
    {
      question: 'Wie passe ich die Anzeige der Punktwolke an?',
      answer:
        'Unser <strong>3D-Visualisierungstool</strong> bietet mehrere Optionen: Punktgröße anpassen, Färbemodi wählen (Höhe, Intensität, Klassifikation, RGB), Punktdichte steuern und Animation aktivieren. So analysieren Sie <strong>LiDAR-Scandaten</strong> noch effektiver.'
    },
    {
      question: 'Sind meine Punktwolkendaten sicher?',
      answer:
        'Ja. Unser <strong>Online-LIDAR-Viewer</strong> verarbeitet alles lokal – Ihre <strong>Punktwolkendaten</strong> werden nicht auf Server hochgeladen. Parsing, Rendering und Analyse erfolgen im Browser, was Datenschutz und Sicherheit gewährleistet – wichtig für sensible Vermessungs- und Geschäftsprojekte.'
    },
    {
      question: 'Kann ich Bilder der Ergebnisse exportieren?',
      answer:
        'Ja. Unser <strong>Visualisierungstool</strong> exportiert die aktuelle Ansicht als hochwertige PNG-Grafik. Speichern Sie Screenshots in verschiedenen Blickwinkeln und Färbemodi für Berichte, Präsentationen oder weitere <strong>Datenanalysen</strong>.'
    }
  ],
  tutorialTitle: 'Anleitung',
  steps: [
    {
      title: 'Punktwolkendatei auswählen',
      description:
        'Klicken Sie auf „Datei auswählen“ oder ziehen Sie Ihre <strong>LIDAR-Punktwolkendatei</strong> in den Uploadbereich. Unterstützte <strong>3D-Punktwolkendaten</strong>-Formate: LAS, XYZ, PLY, PCD, TXT.',
      note: 'Für beste Performance empfehlen wir Dateien unter 100 MB'
    },
    {
      title: 'Auf Parsing warten',
      description:
        'Das System parst Ihre <strong>Punktwolkendatei</strong> und zeigt Fortschritt und Dateiinformationen an. Nach Abschluss wird die Punktwolke automatisch im 3D-Viewer geladen.',
      note: 'Die Dauer hängt von Größe und Komplexität der Datei ab'
    },
    {
      title: '3D-Navigation',
      description:
        'Nutzen Sie die Maus zur 3D-Navigation: <strong>Linksklick + Ziehen</strong> dreht, <strong>Rechtsklick + Ziehen</strong> verschiebt, das <strong>Mausrad</strong> zoomt. Diese intuitiven Steuerungen erlauben Ansichten aus jedem Winkel auf die <strong>Punktwolkendaten</strong>.',
      note: 'Touch-Gesten werden auf Mobilgeräten unterstützt'
    },
    {
      title: 'Anzeigeeinstellungen anpassen',
      description:
        'Nutzen Sie das rechte Bedienfeld: Färbemodus (Höhe, Intensität, Klassifikation, RGB), Punktgröße und -dichte, Animation. Diese Einstellungen unterstützen die effiziente Analyse von <strong>LIDAR-Daten</strong>.',
      note: 'Unterschiedliche Färbemodi eignen sich für verschiedene Analysezwecke'
    },
    {
      title: 'Statistiken ansehen',
      description:
        'Im Infopanel finden Sie <strong>Punktwolkenstatistiken</strong>: Gesamtpunkte, Koordinatenbereich und Dateiformat. Diese helfen bei der <strong>Qualitätsbewertung der Daten</strong>.',
      note: 'Statistiken werden in Echtzeit aktualisiert'
    },
    {
      title: 'Ergebnisse exportieren',
      description:
        'Wenn alles passt, klicken Sie auf „Bild exportieren“, um die <strong>3D-Visualisierung</strong> als PNG für Berichte oder weitere Analysen zu speichern.',
      note: 'Das exportierte Bild übernimmt die aktuelle Ansicht und Einstellungen'
    }
  ],
  successTitle: 'Geschafft!',
  successContent:
    'Super! Sie können den LIDAR-Punktwolken-Viewer jetzt effektiv für 3D-Visualisierung und -Analyse verwenden.',
  relatedToolsTitle: 'Verwandte Tools',
  relatedTools: [
    {
      name: 'Koordinatenkonverter',
      description:
        'Geografische Koordinaten zwischen WGS-84, GCJ-02, BD-09, Web Mercator und UTM umrechnen',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'GPS-Track-Replay',
      description:
        'GPS-Spuren aus verschiedenen Formaten (GPX, KML, GeoJSON, CSV) visualisieren und abspielen.',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: 'Gauß-Projektion',
      description:
        'Umrechnung zwischen Gauß-Projektionskoordinaten und geografischen Koordinaten (Breite/Länge)',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    }
  ],
  referencesTitle: 'Referenzen',
  references: [
    {
      name: 'ASPRS LAS-Formatspezifikation',
      description:
        'Offizieller LAS-Standard der American Society for Photogrammetry and Remote Sensing',
      url: 'https://www.asprs.org/divisions-committees/lidar-division/laser-las-file-format-exchange-activities'
    },
    {
      name: 'WebGL – Offizielle Dokumentation',
      description: 'Offizielle Dokumentation und Best Practices für die Web Graphics Library',
      url: 'https://www.khronos.org/webgl/'
    },
    {
      name: 'Point Cloud Library (PCL)',
      description:
        'Offizielle Dokumentation und Tutorials der Open-Source-Bibliothek zur Punktwolkenverarbeitung',
      url: 'https://pointclouds.org/'
    }
  ]
};