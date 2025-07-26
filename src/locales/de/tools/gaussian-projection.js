export default {
  name: 'Gauß-Krüger-Transformation',
  title: 'Gauß-Krüger-Transformation',
  description: 'Werkzeug zur Umrechnung zwischen Gauß-Krüger-Koordinaten und geografischen Koordinaten (Längen-/Breitengrad)',
  calculationType: 'Berechnungstyp',
  forward: 'Vorwärtstransformation (Längen-/Breitengrad → GK-Koordinaten)',
  inverse: 'Rückwärtstransformation (GK-Koordinaten → Längen-/Breitengrad)',
  ellipsoidParameters: 'Ellipsoidparameter',
  ellipsoidType: 'Ellipsoidtyp',
  centralMeridian: 'Hauptmeridian (Grad)',
  a: 'Große Halbachse',
  f: 'Abplattung',
  projectionParameters: 'Projektionszonenparameter',
  projectionType: 'Projektionszonentyp',
  '3degree': '3°-Zone',
  '6degree': '6°-Zone',
  zoneNumber: 'Zonennummer',
  forwardInput: 'Längen-/Breitengrad eingeben',
  latitude: 'Breitengrad',
  longitude: 'Längengrad',
  inverseInput: 'GK-Koordinaten eingeben',
  x: 'X-Koordinate (Nordwert)',
  y: 'Y-Koordinate (Ostwert)',
  calculate: 'Berechnen',
  results: 'Ergebnisse',
  dms: 'Grad-Minuten-Sekunden-Format',
  batchProcessing: 'Stapelverarbeitung',
  inputFormat: 'Eingabeformat',
  batchForwardFormat: 'Pro Zeile ein Koordinatenpaar: Breitengrad,Längengrad',
  batchInverseFormat: 'Pro Zeile ein Koordinatenpaar: X-Koordinate,Y-Koordinate',
  processBatch: 'Stapelberechnung',
  batchResults: 'Stapelergebnisse',
  copyAll: 'Alle kopieren',
  downloadCSV: 'CSV herunterladen',
  copySuccess: 'Erfolgreich kopiert',
  copyFailed: 'Kopieren fehlgeschlagen',
  clear: 'Leeren',
  formula: 'Formelerklärung',
  mapView: 'Kartenansicht',
  dmsInput: 'Grad-Minuten-Sekunden-Eingabe',
  dmsInputPlaceholder: '40°26\'46"N 79°58\'56"W',
  parse: 'Parsen',
  dmsParseError: 'Fehler beim Parsen des Grad-Minuten-Sekunden-Formats',
  invalidLatitude: 'Ungültiger Breitengrad',
  invalidLongitude: 'Ungültiger Längengrad',
  invalidX: 'Ungültige X-Koordinate',
  invalidY: 'Ungültige Y-Koordinate',
  copyToClipboard: 'In Zwischenablage kopieren',
  autoCalculate: 'Automatische Berechnung',
  formulaExplanation: 'Erklärung der Gauß-Krüger-Formeln',
  uploadCSV: 'CSV hochladen',
  exportResults: 'Ergebnisse exportieren',
  exportAsGeoJSON: 'Als GeoJSON exportieren',
  exportAsKML: 'Als KML exportieren',
  exportAsTXT: 'Als TXT exportieren',
  mapLayers: 'Kartenebenen',
  standard: 'Standard',
  satellite: 'Satellit',
  terrain: 'Gelände',
  pointsOnMap: 'Punkte auf der Karte',
  clearPoints: 'Alle Punkte löschen',
  unitSystem: 'Einheitensystem',
  metric: 'Meter (m)',
  imperial: 'Fuß (ft)',
  customEllipsoid: 'Benutzerdefiniertes Ellipsoid',
  saveCustomEllipsoid: 'Benutzerdefiniertes Ellipsoid speichern',

  formulaContent: `
    <p>Die Gauß-Krüger-Projektion verwendet folgende Hauptformeln:</p>
    <h4>Vorwärtstransformation (Längen-/Breitengrad → GK-Koordinaten)</h4>
    <p>Umwandlung geografischer Koordinaten in ebene rechtwinklige Koordinaten:</p>
    <ul>
      <li>X = m + Korrekturterm</li>
      <li>Y = ν·cos(B)·l + Korrekturterm</li>
    </ul>
    <h4>Rückwärtstransformation (GK-Koordinaten → Längen-/Breitengrad)</h4>
    <p>Umwandlung ebener Koordinaten in geografische Koordinaten:</p>
    <ul>
      <li>B = μ + Korrekturterm</li>
      <li>L = L₀₀ + Korrekturterm</li>
    </ul>
    <p>Dabei gilt:</p>
    <ul>
      <li>B: Breitengrad</li>
      <li>L: Längengrad</li>
      <li>L₀₀: Hauptmeridian</li>
      <li>m: Meridianbogenlänge</li>
      <li>ν: Querkrümmungsradius</li>
    </ul>
  `,

  close: 'Schließen',

  ellipsoids: {
    WGS84: 'WGS84-Ellipsoid',
    Krasovsky: 'Krassowski-Ellipsoid',
    CGCS2000: 'CGCS2000-Ellipsoid',
    GRS80: 'GRS80-Ellipsoid',
    Beijing54: 'Beijing54-Ellipsoid',
    Xian80: 'Xian80-Ellipsoid',
    Custom: 'Benutzerdefiniertes Ellipsoid'
  },

  about: {
    title: 'Über Gauß-Krüger-Projektion',
    description: 'Die Gauß-Krüger-Projektion ist eine winkeltreue transversale Zylinderprojektion, die in der Vermessung und Kartografie weit verbreitet ist. Sie projiziert Punkte vom Erdellipsoid auf eine Ebene und wird häufig für topografische Karten mittlerer und großer Maßstäbe verwendet.',
    forwardTitle: 'Vorwärtstransformation (Längen-/Breitengrad → GK-Koordinaten)',
    forwardDescription: 'Die Vorwärtstransformation wandelt geografische Koordinaten (Längen-/Breitengrad) in ebene rechtwinklige Koordinaten (X, Y) um. Die X-Achse zeigt nach Norden, die Y-Achse nach Osten, der Ursprung liegt am Schnittpunkt von Hauptmeridian und Äquator.',
    inverseTitle: 'Rückwärtstransformation (GK-Koordinaten → Längen-/Breitengrad)',
    inverseDescription: 'Die Rückwärtstransformation ist die Umkehrung der Vorwärtstransformation und wandelt ebene Koordinaten (X, Y) zurück in geografische Koordinaten (Längen-/Breitengrad).',
    parametersTitle: 'Parametererklärung',
    ellipsoidParam: 'Ellipsoidparameter',
    ellipsoidDescription: 'Mathematisches Modell der Erdform, verschiedene geodätische Systeme verwenden unterschiedliche Ellipsoidparameter. Übliche Modelle sind WGS84, Beijing54, Xian80, CGCS2000 etc.',
    projectionParam: 'Projektionszonenparameter',
    projectionDescription: 'Die Gauß-Krüger-Projektion wird typischerweise in 3°- oder 6°-Zonen unterteilt. 3°-Zonen werden für großmaßstäbige Karten verwendet, 6°-Zonen für klein- und mittelmaßstäbige Karten. Die Zonennummer bestimmt die Lage des Hauptmeridians.'
  },

  loadExample: 'Beispiel laden',
  customEllipsoidSaved: 'Benutzerdefiniertes Ellipsoid erfolgreich gespeichert',

  guide: {
    title: 'Bedienungsanleitung',
    forwardTitle: 'Vorwärtstransformation (Längen-/Breitengrad → GK-Koordinaten)',
    step1: 'Oben "Vorwärtstransformation" als Berechnungstyp wählen',
    step2: 'Passende Ellipsoidparameter und Projektionszone auswählen',
    step3: 'Breiten- und Längengrad im Dezimalformat eingeben (z.B. 52.5200, 13.4050) oder Grad-Minuten-Sekunden-Format verwenden',
    step4: 'Ergebnisse werden automatisch aktualisiert oder mit "Berechnen"-Button berechnet',
    
    inverseTitle: 'Rückwärtstransformation (GK-Koordinaten → Längen-/Breitengrad)',
    step5: 'Oben "Rückwärtstransformation" als Berechnungstyp wählen',
    step6: 'X- und Y-Koordinaten in Metern eingeben',
    step7: 'Ergebnisse in Dezimalgrad und Grad-Minuten-Sekunden anzeigen',
    
    batchTitle: 'Stapelverarbeitung',
    step8: 'Im Stapelbereich mehrere Koordinatenpaare eingeben (ein Paar pro Zeile)',
    step9: '"Stapelberechnung" klicken für gleichzeitige Berechnung aller Koordinaten',
    step10: 'Ergebnisse als CSV exportieren oder in Zwischenablage kopieren',
    
    mapTitle: 'Karteninteraktion',
    step11: 'Auf Karte klicken um Punkte hinzuzufügen und Eingabewerte automatisch zu füllen',
    step12: 'Mit Dropdown-Menü verschiedene Kartenebenen wechseln',
    step13: 'Punkte als GeoJSON, KML oder TXT exportieren für andere Anwendungen'
  },

  gaussianProjectionPoints: 'Gauß-Krüger-Punkte',
  point: 'Punkt',
  gaussianProjection: 'Gauß-Krüger-Projektion',
  supportedFormats: 'Unterstützt: CSV, TXT, Excel',
  excelExportNotice: 'Excel-Export bereit, kann direkt in Excel geöffnet werden.',
  excelProcessNotice: 'Excel-Verarbeitung nicht vollständig unterstützt, für beste Ergebnisse CSV verwenden.',
  exportAsCSV: 'Als CSV exportieren',
  exportAsExcel: 'Als Excel exportieren',
  excelExportSuccess: 'Excel-Datei erfolgreich exportiert',
  excelExportFailed: 'Excel-Export fehlgeschlagen, auf CSV zurückgegriffen',
  excelImportSuccess: 'Excel-Datei erfolgreich importiert',
  excelImportFailed: 'Excel-Import fehlgeschlagen, bitte CSV versuchen',

  units: {
    metric: 'Meter (m)',
    km: 'Kilometer (km)',
    imperial: 'Fuß (ft)',
    miles: 'Meilen (mi)'
  },

  resetView: 'Kartenansicht zurücksetzen',
  pointsTotal: 'Punkte insgesamt',
  currentPoint: 'Aktuelles Ergebnis'
};