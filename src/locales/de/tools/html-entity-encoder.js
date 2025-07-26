export default {
  name: 'HTML-Entity-Kodierer',
  description: 'Konvertierung zwischen HTML-Text und Entity-Kodierung',
  title: 'HTML-Entity-Kodierer/Dekodierer',
  intro: 'HTML-Entity-Kodierung wird verwendet, um Sonderzeichen in HTML-sichere Formate umzuwandeln, häufig zum Schutz vor XSS-Angriffen oder zur Anzeige von HTML-Quellcode.',

  operation: {
    title: 'Operationstyp',
    encode: 'HTML-Entity-Kodierung',
    decode: 'HTML-Entity-Dekodierung'
  },

  mode: {
    title: 'Kodierungsmodus',
    named: 'Benannte Entities (&amp;lt;)',
    decimal: 'Dezimale Entities (&amp;#60;)',
    hex: 'Hexadezimale Entities (&amp;#x3C;)',
    full: 'Vollständige Kodierung (alle Zeichen)'
  },

  input: {
    encodeTitle: 'Zu kodierender Text',
    decodeTitle: 'Zu dekodierender Text',
    encodePlaceholder: 'HTML oder Text zur Kodierung eingeben...',
    decodePlaceholder: 'HTML-Entity-Text zur Dekodierung eingeben...',
    clear: 'Leeren'
  },

  output: {
    encodeTitle: 'Kodierungsergebnis',
    decodeTitle: 'Dekodierungsergebnis',
    copy: 'Ergebnis kopieren',
    copied: '(kopiert',
    preview: 'Vorschau',
    showSource: 'Quellcode anzeigen'
  },

  reference: {
    title: 'Entity-Referenz',
    commonReferenceTables: 'Häufige HTML-Entity-Referenztabellen',
    show: 'Tabelle anzeigen',
    hide: 'Tabelle ausblenden',
    description: {
      named: 'Verwendet benannte Formate wie &amp;lt; für &lt; (nur für häufige HTML-Entities)',
      decimal: 'Verwendet dezimale Formate wie &amp;#60; für &lt;',
      hex: 'Verwendet hexadezimale Formate wie &amp;#x3C; für &lt;',
      full: 'Kodiert alle nicht-alphanumerischen Zeichen inkl. Leerzeichen, Zeilenumbrüche etc.'
    },
    table: {
      char: 'Zeichen',
      named: 'Benanntes Entity',
      decimal: 'Dezimale Entity',
      description: 'Beschreibung'
    },
    entities: {
      lt: 'Kleiner-als-Zeichen',
      gt: 'Größer-als-Zeichen',
      amp: 'Und-Zeichen',
      quot: 'Anführungszeichen',
      apos: 'Hochkomma',
      copy: 'Copyright-Symbol',
      reg: 'Eingetragenes Warenzeichen',
      trade: 'Handelszeichen',
      nbsp: 'Geschütztes Leerzeichen',
      cent: 'Cent-Zeichen',
      pound: 'Pfund-Symbol',
      euro: 'Euro-Zeichen',
      yen: 'Yen/Yuan-Symbol',
      sect: 'Paragraphenzeichen',
      minus: 'Minuszeichen',
      times: 'Multiplikationszeichen',
      divide: 'Divisionszeichen',
      deg: 'Gradzeichen',
      plusmn: 'Plus-Minus-Zeichen',
      frac14: 'Ein Viertel'
    }
  },

  messages: {
    copySuccess: 'In die Zwischenablage kopiert',
    copyError: 'Kopieren fehlgeschlagen, bitte manuell kopieren',
    encodeSuccess: 'Kodierung abgeschlossen',
    decodeSuccess: 'Dekodierung abgeschlossen',
    invalidInput: 'Ungültiger Eingabetext'
  }
};