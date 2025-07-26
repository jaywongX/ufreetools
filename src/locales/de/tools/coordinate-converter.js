export default {
  name: 'Koordinatensystem-Konverter',
  description: 'Konvertierung von geografischen Koordinaten zwischen verschiedenen Systemen wie WGS-84, GCJ-02, BD-09, Web Mercator und UTM',
  title: 'Koordinatensystem-Konverter - Umwandlung zwischen WGS84, GCJ02, BD09 und mehr',
  metaDescription: 'Kostenloser Online-Koordinatenkonverter für die Umrechnung zwischen WGS-84, GCJ-02 (Mars-Koordinaten), BD-09 (Baidu-Koordinaten), Web Mercator und UTM-Koordinatensystemen. Keine Installation erforderlich.',

  seo: {
    title: 'Koordinatensystem-Konverter | Werkzeug zur Koordinatenumrechnung',
    description: 'Kostenloses Online-Tool zur Konvertierung zwischen verschiedenen geografischen Koordinatensystemen wie WGS-84, GCJ-02 (China), BD-09, Web Mercator und UTM-Projektion.'
  },

  labels: {
    sourceSystem: 'Quell-Koordinatensystem',
    targetSystem: 'Ziel-Koordinatensystem',
    latitude: 'Breitengrad',
    longitude: 'Längengrad',
    x: 'X-Koordinate (Ostwert)',
    y: 'Y-Koordinate (Nordwert)',
    results: 'Konvertierungsergebnis',
    formatted: 'Formatierte Koordinaten',
    mapPreview: 'Kartenvorschau',
    batchConversion: 'Stapelkonvertierung',
    batchInput: 'Koordinaten eingeben (je Zeile ein Paar)',
    inputFormat: 'Eingabeformat',
    batchResults: 'Konvertierungsergebnisse'
  },

  placeholders: {
    latitude: 'Breitengrad eingeben (z.B. 39.909187)',
    longitude: 'Längengrad eingeben (z.B. 116.397451)',
    x: 'X-Koordinate eingeben (z.B. 12959167.71)',
    y: 'Y-Koordinate eingeben (z.B. 4825908.23)',
    batchInput: 'Koordinaten eingeben, je Zeile ein Paar\nBeispiel:\n39.909187, 116.397451\n31.230416, 121.473701'
  },

  buttons: {
    convert: 'Koordinaten konvertieren',
    converting: 'Konvertierung läuft...',
    swap: 'Systeme tauschen',
    reset: 'Zurücksetzen',
    batchConvert: 'Stapelkonvertierung',
    batchConverting: 'Stapelkonvertierung läuft...',
    copyResults: 'Ergebnisse kopieren',
    exportCsv: 'Als CSV exportieren',
    loadExample: 'Beispiel laden',
    loadBatchExample: 'Stapelbeispiel laden'
  },

  formats: {
    latlon: 'Breitengrad Längengrad (Leerzeichen getrennt)',
    lonlat: 'Längengrad Breitengrad (Leerzeichen getrennt)',
    latlon_comma: 'Breitengrad, Längengrad (Komma getrennt)',
    lonlat_comma: 'Längengrad, Breitengrad (Komma getrennt)',
    latLng: '{lat}, {lng}',
    xy: '{x}, {y}'
  },

  messages: {
    copied: 'In Zwischenablage kopiert',
    noCoordinates: 'Bitte Koordinaten zur Konvertierung eingeben',
    batchSuccess: 'Alle Koordinaten erfolgreich konvertiert'
  },

  errors: {
    invalidCoordinates: 'Ungültige Koordinatenwerte',
    conversionFailed: 'Konvertierung fehlgeschlagen',
    copyFailed: 'Kopieren in Zwischenablage fehlgeschlagen',
    invalidFormat: 'Ungültiges Koordinatenformat',
    batchFailed: 'Einige Koordinatenkonvertierungen fehlgeschlagen'
  },

  sections: {
    tips: {
      title: 'Konvertierungstipps',
      item1: 'WGS-84 ist der globale Standard für GPS und Google Maps außerhalb Chinas',
      item2: 'GCJ-02 ist das in China gesetzlich vorgeschriebene Koordinatensystem',
      item3: 'BD-09 wird speziell für Baidu-Kartendienste verwendet',
      item4: 'Web Mercator wird von den meisten Webkartenanwendungen genutzt'
    },
    about: {
      title: 'Über Koordinatensysteme',
      wgs84: 'WGS-84 (World Geodetic System 1984) ist das Referenzsystem für GPS und internationaler Standard für Karten und Positionierung.',
      gcj02: 'GCJ-02 ist das offizielle, in China gesetzlich vorgeschriebene Koordinatensystem. Es wendet auf WGS-84 einen Verschlüsselungsalgorithmus an, der Positionsverschiebungen verursacht.',
      bd09: 'BD-09 wird von Baidu Maps verwendet und wendet auf GCJ-02-Koordinaten zusätzliche Konvertierungen zur weiteren Verschlüsselung an.',
      webmercator: 'Web Mercator (EPSG:3857) ist eine zylindrische Projektion, die von vielen Webkartendiensten genutzt wird. Sie stellt die Erde als Ebene dar mit Koordinaten in Metern, ideal für Webvisualisierungen.',
      utm: 'UTM (Universal Transverse Mercator) teilt die Erde in 60 Zonen. Koordinaten werden als Ost- und Nordwert relativ zum Zonenursprung in Metern angegeben.',
      dms: 'Grad, Minuten, Sekunden (DMS) ist die traditionelle Darstellung geografischer Koordinaten statt Dezimalgrad.',
      epsg3857: 'EPSG:3857 ist die offizielle Bezeichnung für Web Mercator, verwendet von führenden Webkartenanwendungen zur Projektion der Erde auf eine Ebene.',
      amap: 'Amap-Koordinaten sind identisch mit GCJ-02, dem in China gesetzlich vorgeschriebenen System mit Verschlüsselungsalgorithmus für Positionsverschiebungen.',
      cgcs2000: 'CGCS2000 ist Chinas nationales Koordinatensystem, 2000 eingeführt. Es ähnelt WGS-84 mit minimalen Abweichungen.',
      lambert: 'Lambert-Kegelprojektion erhält Winkel und Form in kleinen Gebieten. Ideal für mittlere Breiten wie Länder oder Kontinente.',
      miller: 'Miller-Zylinderprojektion modifiziert Mercator, reduziert Verzerrungen in hohen Breiten und eignet sich für Weltkarten.',
      polar: 'Polarkoordinaten geben Positionen als Abstand und Winkel relativ zu einem Referenzpunkt an. Nützlich für polare Regionen.',
      dkk: 'DKK-Projektion (Delin-Kash-Kunming) ist eine spezifische chinesische Kegelprojektion für nationale Karten mit minimalen Verzerrungen.'
    },
  },

  export: {
    filename: 'Koordinatenkonvertierung',
    originalLat: 'Ursprünglicher Breitengrad',
    originalLng: 'Ursprünglicher Längengrad',
    convertedLat: 'Konvertierter Breitengrad',
    convertedLng: 'Konvertierter Längengrad'
  },

  systems: {
    wgs84: {
      name: 'WGS-84 (GPS-Koordinaten)',
      description: 'World Geodetic System 1984, verwendet von GPS und den meisten internationalen Kartenanwendungen'
    },
    gcj02: {
      name: 'GCJ-02 (Mars-Koordinaten)',
      description: 'In China gesetzlich vorgeschriebenes System. Wendet auf WGS-84 einen Verschlüsselungsalgorithmus an, der Positionsverschiebungen verursacht.'
    },
    bd09: {
      name: 'BD-09 (Baidu-Koordinaten)',
      description: 'Von Baidu Maps verwendetes System mit zusätzlicher Konvertierung von GCJ-02-Koordinaten zur weiteren Verschlüsselung.'
    },
    webmercator: {
      name: 'Web Mercator (EPSG:3857)',
      description: 'Zylindrische Projektung vieler Webkartendienste. Stellt Erde als Ebene mit Koordinaten in Metern dar, ideal für Webvisualisierungen.'
    },
    utm: {
      name: 'UTM (Universal Transverse Mercator)',
      description: 'Globales Zonensystem mit 60 Zonen. Koordinaten als Ost- und Nordwert in Metern relativ zum Zonenursprung.'
    },
    dms: {
      name: 'Grad Minuten Sekunden (DMS)',
    },
    epsg3857: {
      name: 'EPSG:3857',
    },
    amap: {
      name: 'Amap-Koordinaten',
    },
    cgcs2000: {
      name: 'CGCS2000 Nationales Koordinatensystem',
    },
    lambert: {
      name: 'Lambert-Projektion',
    },
    miller: {
      name: 'Miller-Projektion',
    },
    polar: {
      name: 'Polarkoordinaten',
    },
    dkk: {
      name: 'DKK-Projektion',
    }
  }
};