export default {
  title: "Gauß-Krüger-Rechner: Umwandlung zwischen geografischen und ebenen Koordinaten",
  introTitle: "Grundlagen der Gauß-Krüger-Projektion",
  introPara1: "Der <strong>Gauß-Krüger-Rechner</strong> ist ein unverzichtbares Werkzeug für Vermessungsingenieure, Kartografen, GIS-Experten und alle, die mit geografischen Informationssystemen arbeiten. Dieses leistungsstarke Koordinatenumwandlungstool ermöglicht die präzise Transformation zwischen geografischen Koordinaten (Breiten-/Längengrad) und ebenen rechtwinkligen Koordinaten (X/Y) mittels der Gauß-Krüger-Projektion.",
  introPara2: "Unser <strong>Gauß-Krüger-Umwandlungstool</strong> führt hochpräzise Vorwärts- und Rückwärtstransformationen durch und unterstützt verschiedene Ellipsoidmodelle wie WGS84, CGCS2000, Krassowski (Beijing54) und mehr. Das Tool wendet automatisch die korrekten mathematischen Formeln und Korrekturterme an, um genaue Koordinatenumwandlungen für Ihre Vermessungs- und Kartierungsprojekte zu gewährleisten.",
  
  scenariosTitle: "Praktische Anwendungsfälle",
  scenario1: "<strong>Vermessung und Landmanagement:</strong> Vermessungsingenieure nutzen Gauß-Krüger-Transformationen, um GPS-Koordinaten in lokale ebene Koordinatensysteme umzuwandeln für präzise Landvermessung, Grundstücksgrenzen und Bauplanung.",
  scenario2: "<strong>Topografische Kartenerstellung:</strong> Kartografen verwenden die Gauß-Krüger-Projektion zur Erstellung präziser topografischer Karten mit winkeltreuen Eigenschaften und minimalen Verzerrungen.",
  scenario3: "<strong>GIS-Datenintegration:</strong> GIS-Analysten nutzen Gauß-Krüger-Berechnungen, um Daten aus verschiedenen Quellen mit unterschiedlichen Koordinatensystemen in ein einheitliches Bezugssystem zu integrieren.",
  scenario4: "<strong>Ingenieurprojekte:</strong> Bauingenieure und Bauleiter verwenden Gauß-Krüger-Koordinaten für Infrastrukturplanung, um Straßen, Brücken und Versorgungsleitungen präzise zu positionieren.",
  scenario5: "<strong>Militärische Anwendungen:</strong> Militäroperationen nutzen Gauß-Krüger-Koordinaten für taktische Planung, Navigation und Zielbestimmung.",
  scenariosConclusion: "Die Vielseitigkeit der <strong>Gauß-Krüger-Berechnung</strong> macht sie in vielen Fachgebieten unverzichtbar, die präzise räumliche Positionierung erfordern. Unser Tool vereinfacht diesen komplexen mathematischen Prozess zu einer intuitiven Benutzeroberfläche für Profis und Einsteiger.",
  
  faqTitle: "Häufige Fragen zur Gauß-Krüger-Projektion",
  faq1q: "Was ist der Unterschied zwischen Gauß-Krüger und UTM?",
  faq1a: "Die Gauß-Krüger-Projektion ist die mathematische Grundlage des UTM-Systems (Universal Transverse Mercator). Hauptunterschiede:<ul><li>UTM verwendet standardisierte 6°-Zonen mit festen Parametern</li><li>Gauß-Krüger ist flexibler mit anpassbaren Hauptmeridianen und Zonenbreiten (3° oder 6°)</li><li>UTM hat feste 500.000m Ostverschiebung und 0.9996 Maßstabsfaktor</li><li>Unser <strong>Gauß-Krüger-Rechner</strong> bietet mehr Anpassungsmöglichkeiten für Ellipsoidparameter</li></ul>",
  
  faq2q: "Welches Ellipsoid sollte ich für Gauß-Krüger-Berechnungen wählen?",
  faq2a: "Die Wahl des Ellipsoids hängt von Ihrer Region und dem verwendeten Koordinatensystem ab:<ul><li><strong>WGS84:</strong> Globaler Standard für GPS und internationale Kartierung</li><li><strong>CGCS2000:</strong> Offizielles chinesisches Koordinatensystem seit 2000</li><li><strong>Krassowski/Beijing54:</strong> Historisches System in China und Osteuropa</li><li><strong>Xian80:</strong> Chinesischer Nationalstandard vor CGCS2000</li></ul> Für moderne Anwendungen empfehlen wir WGS84 oder CGCS2000, außer für spezielle historische Daten.",
  
  faq3q: "Wie genau sind die Berechnungen dieses Tools?",
  faq3a: "Unser <strong>Gauß-Krüger-Rechner</strong> implementiert das vollständige mathematische Modell mit allen Korrekturtermen für höchste Genauigkeit. Für die meisten praktischen Anwendungen erreicht das Tool Submillimeter-Genauigkeit, die über den Anforderungen typischer Vermessungsprojekte liegt. Die Genauigkeit hängt von korrekten Ellipsoidparametern und richtiger Zonendefinition ab.",
  
  faq4q: "Kann ich dieses Tool für Stapelverarbeitung verwenden?",
  faq4a: "Ja, unser <strong>Gauß-Krüger-Umwandler</strong> bietet vollständige Stapelverarbeitung:<ul><li>Eingabe mehrerer Koordinatenpaare</li><li>Upload von CSV-, TXT- oder Excel-Dateien</li><li>Gleichzeitige Verarbeitung hunderter Punkte</li><li>Export in CSV, Excel, GeoJSON, KML und TXT</li></ul> Ideal für Projekte mit großen Datensätzen.",
  
  faq5q: "Was sind 3°- und 6°-Zonen in der Gauß-Krüger-Projektion?",
  faq5a: "Die Gauß-Krüger-Projektion unterteilt die Erde in Längenzonen zur Minimierung von Verzerrungen:<ul><li><strong>3°-Zonen:</strong> Schmalere Zonen für höhere Genauigkeit (Zonennummern 1-120)</li><li><strong>6°-Zonen:</strong> Breitere Zonen für größere Gebiete (Zonennummern 1-60)</li></ul> Unser <strong>Gauß-Krüger-Tool</strong> unterstützt beide Systeme und berechnet automatisch den Hauptmeridian basierend auf Ihrer Zonenwahl.",
  
  tutorialTitle: "Schritt-für-Schritt-Anleitung",
  forwardCalcTitle: "Vorwärtstransformation (geografisch → eben)",
  step1: "<strong>Berechnungstyp wählen:</strong> Oben 'Vorwärtstransformation' auswählen.",
  step2: "<strong>Ellipsoid wählen:</strong> Passendes Ellipsoid (WGS84, CGCS2000 etc.) aus Dropdown wählen.",
  step3: "<strong>Projektionsparameter:</strong> 3°- oder 6°-Zone wählen und Zonennummer eingeben.",
  step4: "<strong>Koordinaten eingeben:</strong> Breiten- und Längengrad im Dezimalgradformat oder DMS-Format eingeben.",
  
  inverseCalcTitle: "Rückwärtstransformation (eben → geografisch)",
  step5: "<strong>Berechnungstyp wählen:</strong> 'Rückwärtstransformation' auswählen.",
  step6: "<strong>Parameter konfigurieren:</strong> Ursprüngliche Ellipsoid- und Projektionseinstellungen verwenden.",
  step7: "<strong>Koordinaten eingeben:</strong> X (Nordwert) und Y (Ostwert) in Metern eingeben.",
  step8: "<strong>Ergebnisse anzeigen:</strong> Umgewandelte Koordinaten in Dezimalgrad und DMS anzeigen.",
  
  batchTitle: "Stapelverarbeitung",
  step9: "<strong>Daten vorbereiten:</strong> Koordinatenpaare formatieren (ein Paar pro Zeile).",
  step10: "<strong>Stapelberechnung:</strong> 'Stapelberechnung' klicken für Massenumwandlung.",
  step11: "<strong>Ergebnisse exportieren:</strong> Mit 'Alle kopieren' oder 'CSV herunterladen' speichern.",
  
  tutorialConclusion: "Mit diesem <strong>Gauß-Krüger-Rechner</strong> können Sie schnell zwischen geografischen und ebenen Koordinatensystemen wechseln, ohne komplexe manuelle Berechnungen durchführen zu müssen. Die intuitive Oberfläche macht professionelle Koordinatentransformationen für alle Nutzer zugänglich.",
  
  relatedToolsTitle: "Verwandte Tools",
  relatedTool1: "Koordinatenkonverter",
  relatedTool1Desc: "Umwandlung zwischen verschiedenen Koordinatensystemen wie UTM, MGRS und nationalen Gittern.",
  relatedTool2: "GPS-Track-Analyse",
  relatedTool2Desc: "Visualisierung und Analyse von GPS-Tracks mit Koordinatendaten.",
  
  referencesTitle: "Technische Referenzen",
  reference1: "World Geodetic System 1984 (WGS84) - NGA",
  reference2: "Transverse Mercator-Projektion - Wikipedia",
  reference3: "State Plane Coordinate System - NGS"
}
