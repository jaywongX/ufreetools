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
    },
    
    article: {
      title: "HTML-Entity-Kodierer: Unverzichtbares Tool für Webentwicklungssicherheit",
      features: {
        title: "HTML-Entity-Kodierung verstehen",
        description: `<p>Der <strong>HTML-Entity-Kodierer</strong> ist ein spezielles Tool zur Konvertierung von Sonderzeichen in entsprechende <strong>HTML-Entities</strong>. Dieser Prozess, genannt <strong>HTML-Kodierung</strong>, ist entscheidend für Websicherheit und korrekte Darstellung von Webinhalten.</p>
        <p>Die Kernfunktion dieses <strong>Entity-Kodierers</strong> ist die Umwandlung von Zeichen, die als HTML-Markup interpretiert werden könnten (wie &lt; und &gt;), in ihre jeweiligen <strong>Zeichen-Entities</strong> (wie &amp;lt; und &amp;gt;). Das Tool bietet mehrere Kodierungsmodi, darunter <strong>benannte Entities</strong>, <strong>dezimale Entities</strong>, <strong>hexadezimale Entities</strong> sowie <strong>vollständige Kodierung</strong> aller nicht-alphanumerischen Zeichen. Es bietet auch grundlegende Funktionen zur <strong>Dekodierung</strong> von HTML-Entities zurück in Originalzeichen.</p>`,
        useCases: {
          title: "Typische Anwendungsfälle für HTML-Entity-Kodierung",
          items: [
            "Webentwickler kodieren Benutzereingaben vor der Anzeige, um Cross-Site-Scripting-Angriffe (XSS) zu verhindern",
            "Autoren betten Code-Snippets in Dokumente oder Blogposts ein, wo HTML-Tags als Text angezeigt werden müssen",
            "CMS-Administratoren stellen sicher, dass Sonderzeichen in verschiedenen Browsern und Betriebssystemen korrekt dargestellt werden",
            "E-Mail-Template-Designer kodieren Sonderzeichen für konsistente Darstellung in verschiedenen E-Mail-Clients",
            "Datenbankadministratoren bereiten HTML-Daten für sichere Speicherung vor, um Injektionsrisiken zu vermeiden",
            "Websicherheitsexperten prüfen Seiten auf potenzielle Kodierungsprobleme, die Sicherheitslücken verursachen könnten"
          ]
        }
      },
      
      faq: {
        title: "Häufige Fragen zu HTML-Entity-Kodierung",
        items: [
          {
            question: "Was sind die Unterschiede zwischen den HTML-Entity-Kodierungsmodi?",
            answer: "Benannte Entities (wie &lt;) verwenden leicht merkbare Standardnamen für häufige Sonderzeichen und sind am lesbarsten, gelten aber nur für bestimmte Zeichen. Dezimale Entities (wie &#60;) verwenden Dezimalzahlen für Unicode-Codepoints. Hexadezimale Entities (wie &#x3C;) verwenden ebenfalls Codepoints, aber im Hexadezimalformat. Vollständige Kodierung wandelt alle nicht-alphanumerischen Zeichen um und bietet umfassenden Schutz, erzeugt aber längere Ausgaben."
          },
          {
            question: "Warum ist HTML-Entity-Kodierung für Websicherheit wichtig?",
            answer: "HTML-Entity-Kodierung ist entscheidend, um Cross-Site-Scripting-Angriffe (XSS) zu verhindern. Durch Kodierung von Sonderzeichen, besonders spitzen Klammern (< >), wird Benutzercontent im Browser als Text angezeigt, nicht als ausführbares HTML/JavaScript. Ohne Kodierung könnten Angreifer Skripte einschleusen, die Daten stehlen oder unerlaubte Aktionen ausführen. Kodierung stellt sicher, dass Eingaben als Text behandelt werden."
          },
          {
            question: "Wann sollte HTML-Entity-Kodierung statt anderer Kodierungsarten verwendet werden?",
            answer: "HTML-Entity-Kodierung sollte verwendet werden, wenn Benutzercontent in HTML-Kontexten (Seiteninhalt, Attribute, E-Mail-Templates) angezeigt wird. Für JavaScript-Kontexte verwenden Sie JavaScript-Escapes, für URL-Parameter URL-Kodierung und für CSS-Werte CSS-Escapes. Jede Kodierungsart dient unterschiedlichen Sicherheitsanforderungen."
          },
          {
            question: "Beeinflusst HTML-Entity-Kodierung das visuelle Erscheinungsbild?",
            answer: "Richtig implementiert sollte Kodierung die Darstellung nicht beeinflussen. Browser dekodieren Entities automatisch (z.B. wird &amp;copy; als © angezeigt). Kodierung ist nur im Quellcode sichtbar. Wenn Sie HTML-Tags kodieren, die formatiert werden sollten, werden diese als Text angezeigt, nicht gerendert."
          },
          {
            question: "Kann HTML-Entity-Kodierung alle internationalen Zeichen darstellen?",
            answer: "Ja, HTML-Entities können jedes Unicode-Zeichen darstellen, einschließlich internationaler Zeichen und Emojis. Häufige Zeichen haben benannte Entities (wie &amp;euro; für €), aber jedes Zeichen kann mit dezimalen (&#8364;) oder hexadezimalen (&#x20AC;) Entities kodiert werden. Für viel internationalen Text empfiehlt sich UTF-8-Kodierung mit selektiver Entity-Kodierung."
          }
        ]
      },
      
      guide: {
        title: "Anleitung zur Verwendung des HTML-Entity-Kodierers",
        steps: [
          "Wählen Sie den Operationstyp: 'HTML-Entity-Kodierung' konvertiert Sonderzeichen in Entities, 'Dekodierung' macht dies rückgängig",
          "Für Kodierung wählen Sie den bevorzugten Modus: benannte Entities für Lesbarkeit, dezimale/hexadezimale Entities für numerische Codes, oder vollständige Kodierung für maximalen Schutz",
          "Geben Sie Ihren Text in das entsprechende Feld ein - entweder zu kodierender Text oder zu dekodierende HTML-Entities",
          "Klicken Sie auf 'Kodieren' oder 'Dekodieren' entsprechend Ihrer Auswahl",
          "Prüfen Sie das Ergebnis. Für kodierten Content können Sie zwischen Quellcode-Ansicht und gerenderter Vorschau wechseln",
          "Kopieren Sie das Ergebnis über die 'Ergebnis kopieren'-Schaltfläche für die Verwendung in Ihrer Webseite oder Anwendung",
          "Konsultieren Sie die HTML-Entity-Referenztabelle für gängige Entities und ihre Darstellungen"
        ]
      },
      
      conclusion: "HTML-Entity-Kodierung ist eine unverzichtbare Praxis für Webentwickler und Content-Ersteller, die Wert auf Sicherheit und konsistente Darstellung legen. Mit diesem HTML-Entity-Kodierer können Sie sicherstellen, dass Ihre Webinhalte korrekt angezeigt werden, während potenziell gefährliche Code-Injektionen verhindert werden. Egal ob Sie Webanwendungen entwickeln, Dokumente erstellen oder Content-Systeme verwalten - korrekte HTML-Entity-Kodierung sollte ein Standardteil Ihres sicheren Webentwicklungsworkflows sein."
    }
  }