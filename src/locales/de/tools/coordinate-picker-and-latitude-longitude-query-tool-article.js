export default {
  title: 'Koordinaten-Picker und Breiten-/Längengrad-Abfrage-Tool: Online-Breiten-/Längengrad-Abfrage-Leitfaden und EPSG-Projektionskoordinaten-Konvertierung',
  functionTitle: 'Was ist das Koordinaten-Picker und Breiten-/Längengrad-Abfrage-Tool? Was sind seine Hauptfunktionen?',
  intro: 'Unser <strong>Koordinaten-Picker und Breiten-/Längengrad-Abfrage-Tool</strong> integriert Kartenklick-Punktauswahl, <strong>Breiten-/Längengrad-Abfrage</strong>, <strong>EPSG-Projektionskoordinaten-Konvertierung</strong> und Ortsnamensuche, um schnell und präzise Koordinatenauswahl und Koordinatenformat-Export zu vervollständigen. Mit diesem Online-Tool können Sie Ortsnamen-zu-Koordinaten-Konvertierungen, WGS84-zu-verschiedene-EPSG-Projektionskoordinaten im Browser vervollständigen und die Effizienz von Vermessungsannotationen, Standortanalysen und Kartenerstellung erheblich verbessern.',
  useCasesTitle: 'Typische Anwendungsszenarien: Wie das Koordinaten-Picker und Breiten-/Längengrad-Abfrage-Tool Probleme löst',
  useCases: [
    'Neue Medien-Standortauswahl und Check-in-Punkt-Erstellung: schnelle Breiten-/Längengrad-Auswahl, Export für Kartenvisualisierung',
    'GIS-Kartenerstellung und Feldsammlung: Punkt-Klick-Auswahl, CSV/GeoJSON-Export, anwendbar für ArcGIS/QGIS-Import',
    'Regierungs- und Immobilien-Standortauswahl: Ortsnamensuche ← Koordinaten, Ein-Klick-Sammlung von Kandidatenstandorten',
    'Logistik- und Service-Standortbestimmung: Aufzeichnung von Koordinaten mehrerer Einrichtungen/Arbeitsaufträge, Batch-Export',
    'Bildung und Forschung: Demonstration der Unterschiede und Konvertierungen zwischen WGS84 und EPSG-Projektionskoordinaten',
    'Tourismus- und Outdoor-Navigation: Speicherung von Breiten-/Längengraden und Projektionskoordinaten von Sehenswürdigkeiten und Campingplätzen',
    'Entwicklung und Tests: präzise Breiten-/Längengrad-Proben für Frontend/Backend-Integration erforderlich',
    'Multi-regionale Inhaltsannotation: einheitliche Format-Koordinatendateien, nützlich für regionsübergreifende Datenintegration'
  ],
  tipTitle: 'Profi-Tipp:',
  tipContent: 'Beim CSV-Export wird empfohlen, die Felder name, lat, lon, epsg, x, y, time einzuschließen, geeignet für Batch-Verarbeitung und Verfolgung in QGIS/Excel.',
  conclusion: 'Dieses <strong>Koordinaten-Picker und Breiten-/Längengrad-Abfrage-Tool</strong> ist für mehrere Szenarien wie Vermessung, Visualisierung, Entwicklung und Dienstleistungen konzipiert und unterstützt <strong>EPSG-Projektionskoordinaten-Konvertierung</strong>, Ortsnamensuche und Batch-Export. Durch die Vervollständigung von Online-Breiten-/Längengrad-Abfragen und Koordinatenkonvertierungen kann es die Software-Installationskosten erheblich reduzieren und die Zusammenarbeitseffizienz verbessern.',
  faqTitle: 'Häufig gestellte Fragen (FAQ)',
  faqs: [
    {
      question: 'Welche EPSG-Projektionskoordinaten-Konvertierungen unterstützt das Koordinaten-Picker und Breiten-/Längengrad-Abfrage-Tool?',
      answer: 'Das Tool hat integrierte Konvertierungen für WGS84 (EPSG:4326), Web Mercator (EPSG:3857), CGCS2000 (EPSG:4490) und unterstützt auch die Eingabe benutzerdefinierter PROJ4-Definitionen. Nach dem Klicken auf die Karte werden die ausgewählten Breiten-/Längengrade und EPSG-Projektionskoordinaten gleichzeitig angezeigt.'
    },
    {
      question: 'Wie kann ich Ortsnamen schnell in Breiten-/Längengrad-Koordinaten konvertieren und auf der Karte markieren?',
      answer: 'Nach der Eingabe des Ortsnamens in das Suchfeld verwenden Sie die Ortsnamensuche ← Koordinaten-Funktion, um Nominatim-Ergebnisse zu erhalten, wählen Sie Kandidaten für Positionierung und Marker-Hinzufügung aus und exportieren Sie dann in CSV oder GeoJSON.'
    },
    {
      question: 'Wie kann ich Breiten-/Längengrad-Abfrageergebnisse kopieren oder Koordinatendateien in Batches exportieren?',
      answer: 'Der Ergebnisbereich rechts unterstützt Ein-Klick-Kopieren des gesamten Koordinatentexts und kann Dateien im CSV- oder GeoJSON-Format exportieren, kompatibel mit den meisten GIS/Visualisierungsplattformen.'
    },
    {
      question: 'Unterstützt das Koordinaten-Picker-Tool Mobilgeräte und Tablets?',
      answer: 'Ja, die Benutzeroberfläche verwendet responsives Raster, und <strong>Breiten-/Längengrad-Abfrage</strong>, Markierung und Export-Operationen sind auf Handys und Tablets reibungslos.'
    },
    {
      question: 'Was sind die Vorsichtsmaßnahmen bei der Verwendung von EPSG-Projektionskoordinaten-Konvertierung?',
      answer: 'Verschiedene EPSG-Systeme haben Datum- und Projektionsunterschiede. Wenn das Zielkoordinatensystem nicht integriert ist, geben Sie die korrekte PROJ4-Definition an und bestätigen Sie die Einheiten vor der Konvertierung (Breiten-/Längengrad in Grad, Projektion normalerweise in Metern).'
    }
  ],
  tutorialTitle: 'Wie man das Koordinaten-Picker und Breiten-/Längengrad-Abfrage-Tool verwendet: Detaillierte Bedienungsschritte',
  steps: [
    {
      title: 'Tool öffnen und Karte laden',
      description: 'Nach dem Betreten der Tool-Seite lädt die Karte automatisch. Wenn das Netzwerk eingeschränkt ist, überprüfen Sie den externen Netzwerkzugang oder wechseln Sie die Netzwerkumgebung, um die Verfügbarkeit der Basiskarte und Ortsnamensuche sicherzustellen.',
      note: 'Das Standard-Koordinatensystem der Karte ist WGS84, Breiten-/Längengrad-Einheiten in Grad.'
    },
    {
      title: 'Ortsnamensuche und Positionierung',
      description: 'Geben Sie den Ortsnamen in das Suchfeld ein (mehrsprachige Unterstützung), klicken Sie auf "Suchen", wählen Sie den Zielstandort aus den Kandidaten aus, um auf der Karte zu zentrieren.',
      note: 'Kandidaten werden von OpenStreetMap Nominatim bereitgestellt.'
    },
    {
      title: 'Auf Karte klicken, um Breiten-/Längengrad auszuwählen',
      description: 'Klicken Sie irgendwo auf die Karte, die ausgewählten Breiten-/Längengrade und EPSG-Projektionskoordinaten werden automatisch aufgezeichnet und in der Koordinatenergebnisliste rechts angezeigt.',
      note: 'Unterstützt mehrfaches Klicken, kann mehrere Punkte markieren.'
    },
    {
      title: 'EPSG-Projektion ändern oder anpassen',
      description: 'Wählen Sie gängige Koordinatensysteme (4326/3857/4490) links aus oder geben Sie benutzerdefinierte PROJ4-Definitionen ein, das Tool konvertiert sofort die Projektionskoordinaten und wendet sie auf nachfolgende Punktauswahlen an.',
      note: 'Das Ändern des Koordinatensystems modifiziert nicht die Breiten-/Längengrade bestehender Punkte, beeinflusst nur das Projektionskoordinatenfeld.'
    },
    {
      title: 'Koordinaten kopieren oder exportieren',
      description: 'Wählen Sie das Exportformat (CSV oder GeoJSON), klicken Sie auf "Alles kopieren" oder "Datei exportieren", um Koordinaten in GIS/Visualisierungs-/Entwicklungsoperationen zu verwenden.',
      note: 'CSV ist geeignet für Batch-Verarbeitung in Excel/QGIS, GeoJSON ist geeignet für Web-Karten und API-Verwendung.'
    },
    {
      title: 'Löschen oder Markierung fortsetzen',
      description: 'Wenn Sie neu starten müssen, klicken Sie auf "Marker löschen". Setzen Sie dann die Suche oder Punktauswahl fort, um die Koordinatenliste schrittweise zu verbessern.',
      note: 'Denken Sie daran, das EPSG-Koordinatensystem rechtzeitig entsprechend den Anforderungen verschiedener Projekte zu ändern.'
    }
  ],
  successTitle: 'Herzlichen Glückwunsch!',
  successContent: 'Sie haben gelernt, wie Sie das Koordinaten-Picker und Breiten-/Längengrad-Abfrage-Tool verwenden, um Koordinatensammlung und EPSG-Projektionskoordinaten-Konvertierung zu vervollständigen und können effizient Standard-Datendateien für GIS und Visualisierung generieren.',
  relatedToolsTitle: 'Verwandte Tools, die Sie interessieren könnten',
  relatedTools: [
    {
      name: 'Koordinatensystem-Konverter',
      description: 'Geografische Koordinatenkonvertierung zwischen verschiedenen Koordinatensystemen, einschließlich WGS-84, GCJ-02, BD-09, Web Mercator, UTM',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'GPS-Track-Wiedergabe',
      description: 'Visualisierung und Wiedergabe von GPS-Tracks aus verschiedenen Dateiformaten (GPX, KML, GeoJSON, CSV)',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: 'Gaußsche Projektion Direkt- und Umkehrkonvertierung',
      description: 'Wechselseitige Konvertierungstool zwischen Gaußschen Projektionskoordinaten und geografischen Koordinaten (Breiten-/Längengrad)',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    },
    {
      name: 'LIDAR-Punktwolken-Viewer',
      description: 'Kostenloser Online-LIDAR-Punktwolken-Viewer, unterstützt LAS-, XYZ-, PLY-, PCD-Formate. Bietet 3D-Visualisierung, mehrere Farbmodi, interaktive Navigation und Datenanalysefunktionen',
      url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
    }
  ],
  referencesTitle: 'Referenzen',
  references: [
    {
      name: 'OpenStreetMap Nominatim',
      description: 'Ortsnamensuche und Geocodierungsdienst',
      url: 'https://nominatim.org/'
    },
    {
      name: 'EPSG.io',
      description: 'EPSG-Koordinatenreferenzsystem-Suche und PROJ4-Definitionen',
      url: 'https://epsg.io/'
    },
    {
      name: 'Leaflet-Dokumentation',
      description: 'Leichtgewichtige Web-Kartenbibliothek',
      url: 'https://leafletjs.com/'
    },
    {
      name: 'Proj4-Dokumentation',
      description: 'Koordinatenkonvertierungsbibliothek-Dokumentation',
      url: 'https://proj.org/apps/proj.html'
    }
  ]
}