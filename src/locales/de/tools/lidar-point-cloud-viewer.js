export default {
  name: 'LIDAR-Punktwolken-Viewer – Online-Tool zur 3D-Punktwolkenvisualisierung',
  description:
    'Kostenloser Online-LIDAR-Punktwolken-Viewer, unterstützt die Formate LAS, XYZ, PLY, PCD. Bietet 3D-Visualisierung, mehrere Färbemodi, interaktive Navigation und Datenanalysefunktionen',
  inputTitle: 'Eingabedatei der Punktwolke',
  outputTitle: '3D-Punktwolkenansicht',
  dragTip: 'Ziehen Sie eine Punktwolkendatei hierher oder klicken Sie zum Hochladen',
  supported: 'Unterstützte Formate: LAS, XYZ, PLY, PCD, TXT',
  loadFromUrl: 'Aus URL laden',
  load: 'Laden',
  loadSample: 'Beispieldaten laden',
  coloringMode: 'Färbemodus',
  elevation: 'Höhenfärbung',
  intensity: 'Intensitätsfärbung',
  classification: 'Klassifikationsfärbung',
  rgb: 'RGB-Färbung',
  pointSize: 'Punktgröße',
  pointDensity: 'Punktdichte',
  enableAnimation: 'Animation aktivieren',
  showTrajectory: 'Trajektorie anzeigen',
  showSensorData: 'Sensordaten anzeigen',
  fileInfo: 'Dateiinformationen',
  fileName: 'Dateiname',
  pointCount: 'Punktanzahl',
  fileSize: 'Dateigröße',
  bounds: 'Grenzen',
  resetView: 'Ansicht zurücksetzen',
  exportImage: 'Bild exportieren',
  loading: 'Wird geladen...',
  noData: 'Bitte laden Sie eine Punktwolkendatei hoch oder laden Sie Beispieldaten',
  controls: {
    rotate: 'Maus ziehen: Ansicht drehen',
    zoom: 'Mausrad: Ansicht zoomen',
    pan: 'Shift+Ziehen: Ansicht verschieben'
  },
  stats: {
    visible: 'Sichtbare Punkte',
    total: 'Gesamtpunkte',
    points: 'Punkte'
  },
  metadata: {
    title: 'LAS-Metadaten',
    systemId: 'Systemkennung',
    software: 'Erzeugende Software',
    version: 'LAS-Version',
    creationDate: 'Erstellungsdatum',
    pointFormat: 'Punktdatenformat',
    vlrCount: 'Anzahl VLR',
    returnStats: 'Rückgabestatistik',
    extent: 'Räumliche Ausdehnung'
  },
  error: {
    loadFailed: 'Punktwolkendatei konnte nicht geladen werden. Bitte prüfen Sie das Dateiformat',
    urlLoadFailed: 'Datei konnte nicht aus der URL geladen werden. Bitte prüfen Sie die URL'
  },
  disclaimer: {
    title: 'Technische Hinweise',
    content:
      'Dieses Tool verwendet WebGL zur 3D-Punktwolkenvisualisierung im Browser. Die gesamte Datenverarbeitung erfolgt lokal, um Datensicherheit zu gewährleisten.',
    formats:
      'Unterstützte Formate: LAS (LIDAR-Standardformat), XYZ (ASCII-Punktwolke), PLY (Polygon-Dateiformat), PCD (Point Cloud Data)',
    performance:
      'Leistungshinweis: Große Punktwolkendateien können längere Ladezeiten erfordern. Wir empfehlen einen modernen Browser für die beste Performance.'
  }
};