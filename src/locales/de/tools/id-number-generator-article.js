export default {
  introduction: {
    title: "Personalausweisnummern-Generator: Funktionen und Funktionsweise",
    p1: "Der Personalausweisnummern-Generator ist ein Tool, das speziell für Test- und Entwicklungszwecke entwickelt wurde, um gültige chinesische Personalausweisnummern zu erstellen. Diese generierten Nummern entsprechen dem offiziellen Format und den Validierungsregeln der chinesischen Regierung, sind jedoch vollständig fiktiv.",
    p2: "Dieses Tool ist besonders wertvoll für Softwareentwickler, QA-Tester und UI/UX-Designer, die in ihren Anwendungen chinesische Personalausweisnummern verwenden müssen, ohne dabei echte persönliche Daten zu verwenden. Die generierten Nummern enthalten eingebettete Informationen wie Regionalcodes, Geburtsdaten und Geschlecht, die alle dem offiziellen Format entsprechen.",
    p3: "Durch die Bereitstellung von Anpassungsoptionen für Region, Geburtsdatumbereich, Geschlecht und Menge bietet unser Generator Flexibilität bei gleichzeitiger Einhaltung der erforderlichen Formate und Validierungsalgorithmen.",
    structureTitle: "Aufbau der Personalausweisnummer verstehen",
    structureDesc: "Jede chinesische Personalausweisnummer besteht aus 18 Ziffern und folgt einem bestimmten Muster:"
  },
  useCases: {
    title: "Praktische Anwendungsfälle für den Personalausweisnummern-Generator",
    case1: {
      title: "Softwaretests und Entwicklung",
      description: "Für Entwickler von Systemen, die chinesische Personalausweisnummern validieren müssen, generiert dieses Tool Testdaten, die Validierungsprüfungen bestehen, ohne echte persönliche Informationen zu verwenden. Geeignet für Formularvalidierungstests, Datenbankauffüllung und API-Tests."
    },
    case2: {
      title: "UI/UX-Design und Prototyping",
      description: "Designer können diese generierten Nummern bei der Erstellung von Anwendungsmodellen und Prototypen verwenden, die die Identifizierung chinesischer Benutzer erfordern, um eine realistische Darstellung zu gewährleisten, ohne Datenschutzprobleme zu verursachen."
    },
    case3: {
      title: "Bildungszwecke",
      description: "Studenten und Pädagogen, die Datenstrukturen, Validierungsalgorithmen oder das chinesische Verwaltungssystem lernen, können dieses Tool nutzen, um zu verstehen, wie Personalausweisnummern Informationen kodieren und wie Validierungsmechanismen funktionieren."
    },
    case4: {
      title: "Einhaltung des Datenschutzes",
      description: "Organisationen können die Verwendung echter Personalausweisnummern in Nicht-Produktionsumgebungen vermeiden und so die Einhaltung von Datenschutzbestimmungen unterstützen, während sie gleichzeitig realistische Testdaten für ihre Systeme bereitstellen."
    }
  },
  guide: {
    title: "Anleitung zur Verwendung des Personalausweisnummern-Generators",
    step1: {
      title: "Regionaleinstellungen auswählen",
      description: "Wählen Sie zwischen zufälligen Regionen oder spezifischen Provinzen und Städten. Sie können die Mehrfachauswahl aktivieren, um Nummern aus verschiedenen Regionen zu generieren, oder die Suchfunktion nutzen, um bestimmte Orte zu finden."
    },
    step2: {
      title: "Geburtsdatumbereich festlegen",
      description: "Definieren Sie den Geburtsdatumbereich, der in den generierten Nummern enthalten sein soll. Dies ermöglicht die Erstellung von Nummern für bestimmte Altersgruppen oder Zeiträume, von historischen Daten bis hin zu aktuelleren Daten."
    },
    step3: {
      title: "Geschlechtsoptionen auswählen",
      description: "Wählen Sie, ob Sie Nummern mit zufälligem Geschlecht oder speziell für Männer oder Frauen generieren möchten. In chinesischen Personalausweisnummern wird das Geschlecht im Sequenzcode kodiert (ungerade für Männer, gerade für Frauen)."
    },
    step4: {
      title: "Generieren und exportieren",
      description: "Geben Sie die gewünschte Anzahl von Nummern an und klicken Sie auf die Generierungsschaltfläche. Nach der Generierung können Sie einzelne Nummern kopieren, alle Nummern auf einmal kopieren oder die Ergebnisse im TXT-, CSV- oder Excel-Format exportieren."
    },
    tip: "Für optimale Ergebnisse sollten Sie die spezifischen Anforderungen Ihres Testszenarios berücksichtigen. Wenn Sie ein System mit Altersbeschränkungen testen, passen Sie den Geburtsdatumbereich entsprechend an. Für regionale Tests wählen Sie spezifische Provinzen aus, die für Ihre Anwendung relevant sind.",
    additionalTip: "Um die Korrektheit der generierten Nummern zu überprüfen, können Sie unser",
    hashCalculatorLink: "Hash-Rechner-Tool"
  },
  faq: {
    title: "Häufig gestellte Fragen zu chinesischen Personalausweisnummern",
    q1: "Sind die generierten chinesischen Personalausweisnummern rechtlich gültig?",
    a1: "Nein, die generierten Nummern sind strukturell gültig (sie bestehen Format- und Prüfsummenvalidierungen), aber vollständig fiktiv. Sie dienen ausschließlich Test-, Bildungs- und Demonstrationszwecken. Die Verwendung dieser Nummern für offizielle Identifikation oder falsche Identitätsdarstellung ist illegal.",
    q2: "Wie wird Geschlechtsinformation in chinesischen Personalausweisnummern kodiert?",
    a2: "Die Geschlechtsinformation in chinesischen Personalausweisnummern ist in der vorletzten Ziffer der 18-stelligen Nummer (17. Stelle) kodiert. Wenn diese Ziffer ungerade ist (1, 3, 5, 7, 9), gehört die Nummer einem Mann. Wenn sie gerade ist (2, 4, 6, 8, 0), gehört sie einer Frau.",
    q3: "Kann ich Nummern für bestimmte Regionen Chinas generieren?",
    a3: "Ja, unser Tool unterstützt die Auswahl spezifischer Provinzen und Städte Chinas. Sie können eine einzelne Region auswählen oder die Mehrfachauswahl aktivieren, um gleichzeitig Nummern aus mehreren Regionen zu generieren. Wir berücksichtigen alle Präfekturstädte und Provinzverwaltungsbezirke.",
    q4: "Was bedeutet die letzte Ziffer einer chinesischen Personalausweisnummer?",
    a4: "Die letzte Ziffer (18. Stelle) ist eine Prüfziffer, die basierend auf den ersten 17 Ziffern mit einem speziellen Algorithmus berechnet wird. Diese Prüfsumme hilft bei der Validierung der Nummer und kann 0-9 oder X (für 10) sein.",
    q5: "Wie oft wird das Format chinesischer Personalausweisnummern aktualisiert?",
    a5: "Das 18-stellige Format ist seit Oktober 1999 Standard. Während das Format selbst selten geändert wird, können sich die regionalen Codes aufgrund von Verwaltungsreformen ändern. Unser Generator verwendet die aktuellsten regionalen Codes.",
    officialSource: "Ministerium für öffentliche Sicherheit der Volksrepublik China (offizielle Website)"
  },
  resources: {
    title: "Verwandte Tools und Ressourcen",
    passwordGenerator: "Passwort-Generator - Erzeugt sichere, zufällige Passwörter mit anpassbaren Optionen",
    wordShuffler: "Wort-Mischer - Mischt zufällig Wörter, Sätze oder Zeilen in Texten unter Beibehaltung der Formatierung",
    hashCalculator: "Hash-Rechner - Überprüft die Datenintegrität mit verschiedenen Hash-Algorithmen",
    wikipediaLink: "Wikipedia: Chinesischer Personalausweis - Detaillierte Informationen zum chinesischen Ausweissystem"
  },
  conclusion: {
    title: "Zusammenfassung",
    p1: "Der Personalausweisnummern-Generator ist eine wertvolle Ressource für Entwickler, Tester und Designer, die mit chinesischer Identifikation arbeiten müssen. Durch die Generierung von formatgültigen, aber nicht echten Nummern hilft er, den Bedarf an realistischen Testdaten mit Datenschutz- und Ethiküberlegungen in Einklang zu bringen.",
    p2: "Egal, ob Sie eine neue Anwendung entwickeln, bestehende Systeme testen oder Schulungsmaterial erstellen - dieses Tool bietet die Flexibilität und Genauigkeit, die benötigt wird, um chinesische Personalausweisnummern sicher zu handhaben, während Datenschutzprinzipien respektiert werden.",
    disclaimer: "Haftungsausschluss: Dieses Tool dient ausschließlich legitimen Test-, Bildungs- und Entwicklungszwecken. Die generierten Nummern dürfen nicht für Identitätsbetrug, falsche Darstellung oder illegale Aktivitäten verwendet werden."
  }
}
