export default {
  title: "Koordinatensystem-Konverter: Präzise Umwandlung zwischen verschiedenen Systemen",
  introduction: "Der Koordinatensystem-Konverter ist ein leistungsfähiges Online-Tool für die Konvertierung geografischer Koordinaten zwischen verschiedenen Systemen. Ob Sie GIS-Experte, Entwickler oder Geodatenanalyst sind - dieses Tool vereinfacht die komplexe Umrechnung zwischen WGS-84 (GPS-Standard), GCJ-02 (chinesischer Standard), BD-09 (Baidu Maps), Web Mercator und UTM-Koordinatensystemen.",
  
  whyNeeded: {
    title: "Warum sind Koordinatenkonvertierungen notwendig?",
    p1: "Bei der Verarbeitung geospatialer Daten aus verschiedenen Quellen oder Regionen sind Koordinatensystem-Konvertierungen unerlässlich. Unterschiedliche Länder und Kartendienste nutzen aus rechtlichen, historischen oder Sicherheitsgründen verschiedene Systeme. Beispielsweise ist in China gesetzlich GCJ-02 statt des globalen WGS-84-Standards vorgeschrieben, während Baidu Maps ein eigenes BD-09-System verwendet.",
    p2: "Ohne korrekte Konvertierung können Karten und Positionsdaten erhebliche Abweichungen zeigen - bis zu mehreren hundert Metern. Solche Diskrepanzen können bei Navigation, Stadtplanung oder Rettungsdiensten schwerwiegende Probleme verursachen. Unser Konverter löst dieses Problem, indem er Positionsdaten zwischen verschiedenen Kartenystemen präzise synchronisiert."
  },
  
  systems: {
    title: "Verschiedene Koordinatensysteme verstehen",
    
    wgs84: {
      title: "WGS-84 (World Geodetic System)",
      description: "WGS-84 ist das Referenzsystem für GPS-Satelliten und internationaler Standard für Karten und Positionierung. Es wird von Google Maps (außerhalb Chinas), OpenStreetMap und den meisten internationalen Kartenanwendungen genutzt. Koordinaten werden typischerweise als Dezimalgrad für Breiten- und Längengrad angegeben. Als Grundlage des globalen Positionierungssystems spielt WGS-84 eine zentrale Rolle im internationalen Geodatenaustausch."
    },
    
    gcj02: {
      title: "GCJ-02 (Chinesisches Standardsystem)",
      description: "GCJ-02, bekannt als 'Mars-Koordinaten', ist das in China gesetzlich vorgeschriebene System. Es wendet auf WGS-84 einen proprietären Verschlüsselungsalgorithmus an, der positionsabhängige Verschiebungen erzeugt. Dieses System wird von Amap, Google Maps China, Apple Maps China und vielen chinesischen Apps verwendet. Aufgrund nationaler Sicherheitsanforderungen müssen alle Kartendienste in China GCJ-02 gesetzeskonform nutzen."
    },
    
    bd09: {
      title: "BD-09 (Baidu-Koordinaten)",
      description: "BD-09 ist das proprietäre System von Baidu, speziell für Baidu Maps entwickelt. Es wendet zusätzliche Konvertierungen auf GCJ-02-Koordinaten an. Apps, die Baidu Maps integrieren, müssen dieses System für genaue Positionierungen nutzen. Als einer der größten chinesischen Kartendienste ist Baidu Maps weit verbreitet, was das Verständnis korrekter BD-09-Konvertierungen essenziell macht."
    },
    
    webmercator: {
      title: "Web Mercator (EPSG:3857)",
      description: "Web Mercator (EPSG:3857) ist eine zylindrische Kartenprojektion, die von Google Maps und OpenStreetMap genutzt wird. Sie stellt die Erde als Ebene mit Koordinaten in Metern (statt Grad) dar. Diese Projektion optimiert Webvisualisierungen, führt aber in hohen Breiten zu Verzerrungen. Für Webentwickler, die Karten anzeigen, ist das Verständnis dieser Projektion und ihrer Konvertierungen entscheidend."
    },
    
    utm: {
      title: "UTM (Universal Transverse Mercator)",
      description: "UTM teilt die Welt in 60 sechs Grad breite Zonen. Koordinaten werden als Ost- und Nordwert in Metern relativ zum Zonenursprung angegeben. Häufig genutzt in Vermessung, Militär und GIS-Systemen mit metrischen Einheiten. In China findet UTM in professionellen Vermessungs- und Ingenieursprojekten Anwendung, besonders bei präzisen Entfernungsberechnungen."
    }
  },
  
  useCases: {
    title: "Typische Anwendungsfälle für Koordinatenkonvertierungen",
    
    case1: {
      title: "Mobile App-Entwicklung",
      description: "Bei standortbasierten Apps für verschiedene Länder müssen Entwickler regionale Koordinatensystem-Anforderungen berücksichtigen. Eine Navigationsapp für China und internationale Märkte muss beispielsweise zwischen WGS-84 und GCJ-02 konvertieren, um auf jeweiligen Karten korrekte Positionen anzuzeigen. Dies ist besonders wichtig für internationalen E-Commerce, Reise-Apps und globale Logistikplattformen."
    },
    
    case2: {
      title: "GIS-Datenintegration",
      description: "GIS-Projekte kombinieren oft Daten aus Quellen mit unterschiedlichen Koordinatensystemen. Die Integration von Satellitenbildern (typisch WGS-84) mit chinesischen Stadtplanungsdaten (GCJ-02) erfordert Konvertierungen für korrekte räumliche Ausrichtung. In chinesischen Smart-City-, Umweltmonitoring- und Regionalplanungsprojekten sind solche Konvertierungen Schlüsselschritte."
    },
    
    case3: {
      title: "Grenzüberschreitende Navigation",
      description: "Transport- und Logistikfirmen in Grenzregionen (besonders um China) müssen Koordinaten konvertieren, wenn Fahrzeuge oder Assets Regionen mit unterschiedlichen Kartenstandards durchqueren. Mit der 'Belt and Road'-Initiative wächst der Bedarf an nahtlosen Koordinatenwechseln in der grenzüberschreitenden Logistik."
    },
    
    case4: {
      title: "Kartendatenvisualisierung",
      description: "Forscher und Analysten mit globalen Datensätzen müssen oft Koordinaten konvertieren, um korrekte Visualisierungen auf verschiedenen Kartenplattformen zu gewährleisten. Die Darstellung von Forschungsdaten auf Baidu Maps erfordert WGS-84-zu-BD-09-Konvertierungen, während dieselben Daten auf Google Maps WGS-84-Koordinaten benötigen. In internationalen Kooperationsprojekten in China ist diese Konvertierungsfähigkeit besonders wichtig."
    }
  },
  
  howToUse: {
    title: "So verwenden Sie den Koordinatensystem-Konverter",
    introduction: "Unser Tool macht Koordinatenkonvertierungen zwischen Systemen einfach. Folgen Sie dieser Schritt-für-Schritt-Anleitung:",
    
    step1: {
      title: "Koordinatensystem wählen",
      description: "Wählen Sie zunächst das Quellsystem (in dem Ihre aktuellen Koordinaten vorliegen) und das Zielsystem (in das Sie konvertieren möchten). Typische Auswahlen umfassen die Konvertierung von WGS-84 (GPS-Geräte) zu GCJ-02 (chinesische Karten) oder von Amap (GCJ-02) zu Baidu Maps (BD-09)."
    },
    
    step2: {
      title: "Koordinaten eingeben",
      description: "Geben Sie Ihre Koordinaten in die entsprechenden Felder ein. Für Breiten-/Längengrad-Systeme (WGS-84, GCJ-02, BD-09) verwenden Sie Dezimalgrad. Für projizierte Systeme (Web Mercator, UTM) geben Sie Werte in Metern ein. Achten Sie auf das korrekte Format - z.B. WGS-84-Koordinaten der Verbotenen Stadt in Peking: 39.916345, 116.397155."
    },
    
    step3: {
      title: "Koordinaten konvertieren",
      description: "Klicken Sie 'Koordinaten konvertieren' für die Umrechnung. Ergebnisse werden unten angezeigt - einzelne Koordinatenwerte und formatierte Zeichenketten zum einfachen Kopieren. Konvertierungen sind auf sechs Dezimalstellen genau, ausreichend für die meisten Anwendungen."
    },
    
    step4: {
      title: "Stapelkonvertierung (optional)",
      description: "Für mehrere Koordinatenpaare nutzen Sie die Stapelkonvertierung. Geben Sie Koordinaten ein (ein Paar pro Zeile), wählen Sie das Eingabeformat und klicken 'Stapelkonvertierung' für die gleichzeitige Verarbeitung. Ergebnisse können als CSV exportiert werden, ideal für weitere Analysen oder Anwendungen."
    },
    
    example: {
      title: "Konvertierungsbeispiel",
      description: "Konvertierung der Verbotenen Stadt in Peking:\n\n• WGS-84: 39.916345, 116.397155\n• Zu GCJ-02: 39.91748, 116.40382\n• Zu BD-09: 39.92373, 116.41029\n\nBeachten Sie die Verschiebungen von mehreren hundert Metern zwischen Systemen - ein deutlicher Hinweis auf die Bedeutung korrekter Konvertierungen für präzise Standortangaben in Navigationssoftware."
    }
  },
  
  tips: {
    title: "Beste Praktiken für Koordinatenkonvertierungen",
    tip1: "Stets das Quellsystem der Daten vor der Konvertierung verifizieren, besonders bei Drittanbieterdaten. Systeminkonsistenzen führen zu erheblichen Ungenauigkeiten.",
    tip2: "Für Apps in China beachten: Unkonvertierte WGS-84-Koordinaten auf Karten können zu 100-500 Meter Abweichungen führen - kritisch bei Navigation und präziser Positionierung.",
    tip3: "Bei Grenzregionendaten (z.B. Hongkong/China) besonders auf verwendete Koordinatensysteme achten. Diese Gebiete markieren oft Übergänge zwischen Systemen.",
    tip4: "Für hochpräzise Anwendungen spezialisierte Konvertierungsbibliotheken mit lokalen Parametern erwägen. Professionelle Vermessung und Ingenieurwesen erfordern oft Zentimetergenauigkeit."
  },
  
  faq: {
    title: "Häufig gestellte Fragen",
    q1: "Warum stimmen meine GPS-Koordinaten nicht mit chinesischen Karten überein?",
    a1: "GPS-Geräte liefern WGS-84-Koordinaten, während chinesische Karten gesetzlich GCJ-02 mit intentionalen Verschiebungen nutzen. Dies verursacht typische 100-500 Meter Differenzen. Unser Konverter hilft, GPS-Daten mit chinesischen Karten abzugleichen - ein häufiges Problem internationaler GPS-Nutzer in China.",
    
    q2: "Sind diese Konvertierungen verlustfrei umkehrbar?",
    a2: "Aufgrund der Verschlüsselungsalgorithmen sind WGS-84-zu-GCJ-02- oder BD-09-Konvertierungen nicht vollständig umkehrbar. Unser Tool nutzt jedoch präziseste verfügbare Algorithmen, die Abweichungen bei Rückkonvertierungen auf 1-2 Meter begrenzen - für die meisten kommerziellen Anwendungen ausreichend.",
    
    q3: "Welches Koordinatensystem sollte meine App verwenden?",
    a3: "Abhängig von Kartenanbieter und Region: Globale Apps/Google Maps außerhalb Chinas nutzen WGS-84; Amap/Google Maps China benötigen GCJ-02; Baidu Maps erfordert BD-09; Webkartenbibliotheken wie Leaflet/OpenLayers verwenden Web Mercator; UTM eignet sich für metrische Messungen in spezifischen Regionen. Besonders relevant für Lokalisierungs-Apps im chinesischen Markt.",
    
    q4: "Wie genau sind diese Konvertierungen?",
    a4: "Die implementierten Algorithmen bieten in den meisten Fällen 1-2 Meter Genauigkeit. Da GCJ-02- und BD-09-Verschlüsselungsalgorithmen proprietär sind, können minimale Abweichungen zu offiziellen Konvertierungen auftreten. Zentimetergenaue professionelle Anwendungen benötigen möglicherweise kommerzielle GIS-Lösungen."
  },
  
  conclusion: {
    title: "Vereinfachen Sie Ihre Geodatenarbeit mit unserem Konvertierungstool",
    text: "Koordinatensystem-Konvertierungen sind ein kritisches, aber oft übersehenes Element der Geodatenverarbeitung. Unser kostenloser Online-Konverter entfernt diese Komplexität, ermöglicht schnelle, präzise Umwandlungen zwischen WGS-84, GCJ-02, BD-09, Web Mercator und UTM. Egal ob Sie Kartenapps entwickeln, Geodaten analysieren oder einfach präzise Standorte auf verschiedenen Karten anzeigen möchten - dieses Tool bietet eine effektive Lösung für Koordinatensystem-Herausforderungen. Der Koordinatensystem-Konverter ermöglicht nahtloses Arbeiten in Chinas vielfältiger GIS-Landschaft."
  },
  
  relatedTools: {
    title: "Verwandte Geodaten-Tools",
    tools: [
      {
        name: "GeoJSON-Viewer",
        description: "Visualisieren und bearbeiten Sie GeoJSON-Dateien mit unserem interaktiven Kartentool.",
        url: "https://www.ufreetools.com/tool/geojson-viewer"
      },
      {
        name: "IP-Geolokalisierung",
        description: "Ermitteln Sie den geografischen Standort von IP-Adressen mit unserem Abfragetool.",
        url: "https://www.ufreetools.com/tool/ip-lookup"
      }
    ]
  },
  
  externalLinks: {
    intro: "Erfahren Sie mehr über Koordinatensysteme von diesen autoritativen Quellen:",
    wikipedia: "Wikipedia: Geodätisches Koordinatensystem",
    epsg: "EPSG.io Koordinatensystem-Datenbank"
  }
}
