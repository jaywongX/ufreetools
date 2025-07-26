export default {
  name: 'XML/JSON-Konverter',
  title: 'XML ↔ JSON Konvertierung',
  description: 'Bidirektionale Konvertierung zwischen XML- und JSON-Formaten mit erweiterten Optionen und benutzerdefinierten Einstellungen',

  conversion: {
    direction: 'Konvertierungsrichtung',
    xmlToJson: 'XML zu JSON',
    jsonToXml: 'JSON zu XML'
  },

  options: {
    title: 'Konvertierungsoptionen',
    show: 'Optionen anzeigen',
    hide: 'Optionen ausblenden',
    
    xmlToJson: {
      ignoreAttributes: 'Attribute ignorieren',
      ignoreAttributesHint: 'Deaktivieren Sie diese Option, um XML-Attribute in JSON zu erhalten',
      parseAttributeValue: 'Attributwerte parsen',
      parseAttributeValueHint: 'Konvertiert Zahlen, Booleans etc. in Attributen zu ihren tatsächlichen Typen statt Strings',
      ignoreDeclaration: 'XML-Deklaration ignorieren',
      ignoreDeclarationHint: 'Ignoriert Deklarationen wie <?xml version="1.0"?>',
      parseTagValue: 'Tag-Werte parsen',
      parseTagValueHint: 'Konvertiert Zahlen, Booleans etc. in Tag-Inhalten zu ihren tatsächlichen Typen statt Strings',
      trimValues: 'Werte trimmen',
      attributePrefix: 'Attribut-Präfix',
      attributePrefixPlaceholder: 'z.B. @, _, attr_',
      attributePrefixHint: 'Präfix für XML-Attribute in JSON (Standard: @)'
    },
    
    jsonToXml: {
      format: 'XML formatieren',
      formatHint: 'Aktiviert Einrückungen und Zeilenumbrüche für besser lesbares XML',
      indentBy: 'Einrücken (2 Leerzeichen)',
      addDeclaration: 'XML-Deklaration hinzufügen',
      addDeclarationHint: 'Fügt <?xml version="1.0" encoding="UTF-8"?> am Anfang hinzu',
      rootName: 'Wurzelelement-Name (optional)',
      rootNamePlaceholder: 'z.B. root, data, xml',
      rootNameHint: 'Name des Wurzelements bei mehreren Top-Level-Keys im JSON',
      attributePrefix: 'Attribut-Präfix erkennen',
      attributePrefixPlaceholder: 'z.B. @, _, attr_',
      attributePrefixHint: 'Präfix zur Erkennung von XML-Attributen in JSON (Standard: @)'
    }
  },

  buttons: {
    convert: 'Konvertieren',
    swap: 'Inhalte tauschen',
    clear: 'Leeren',
    loadExample: 'Beispiel laden'
  },

  input: {
    xmlInput: 'XML-Eingabe',
    jsonInput: 'JSON-Eingabe',
    placeholder: {
      xml: 'XML eingeben...',
      json: 'JSON eingeben...'
    }
  },

  output: {
    xmlResult: 'XML-Ergebnis',
    jsonResult: 'JSON-Ergebnis',
    copy: 'Kopieren'
  },

  stats: {
    title: 'Konvertierungsstatistik',
    inputSize: 'Eingabegröße',
    outputSize: 'Ausgabegröße',
    sizeChange: 'Größenänderung',
    conversionTime: 'Konvertierungsdauer'
  },

  help: {
    title: 'Hilfe',
    show: 'Hilfe anzeigen',
    hide: 'Hilfe ausblenden',
    about: {
      title: 'Informationen zu XML und JSON',
      content: 'XML (Extensible Markup Language) ist eine erweiterbare Auszeichnungssprache, die häufig für Konfigurationsdateien, Datenaustausch und Web-Services verwendet wird. JSON (JavaScript Object Notation) ist ein leichtgewichtiges Datenaustauschformat, das sowohl für Menschen lesbar als auch für Maschinen einfach zu parsen und zu generieren ist.'
    },
    xmlToJson: {
      title: 'Hinweise zu XML-zu-JSON',
      items: [
        'XML-Attribute werden standardmäßig als @-präfixierte Keys in JSON konvertiert',
        'XML-Textinhalte werden standardmäßig als #text-Key dargestellt',
        'Aktivieren Sie "Tag-Werte parsen" zur Konvertierung von Zahlen, Booleans etc.',
        'Mehrere gleichnamige XML-Tags werden automatisch in JSON-Arrays konvertiert'
      ]
    },
    jsonToXml: {
      title: 'Hinweise zu JSON-zu-XML',
      items: [
        '@-präfixierte JSON-Keys werden standardmäßig als XML-Attribute behandelt',
        'JSON-Arrays erzeugen mehrere gleichnamige XML-Tags',
        'Komplexe verschachtelte JSON-Objekte erzeugen hierarchische XML-Strukturen',
        'Mehrere Top-Level-Keys ohne Wurzelelement-Name erzeugen mehrere XML-Wurzelelemente'
      ]
    }
  },

  errors: {
    xmlParse: 'XML-Parsingfehler: {0}',
    jsonParse: 'JSON-Parsingfehler: {0}',
    xmlGeneration: 'XML-Generierungsfehler: {0}',
    emptyObject: 'JSON-Objekt ist leer oder ungültig',
    conversion: 'Konvertierungsfehler: {0}'
  },

  alerts: {
    copied: 'In die Zwischenablage kopiert'
  }
};