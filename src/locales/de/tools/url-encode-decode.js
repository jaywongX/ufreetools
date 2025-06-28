export default {
    name: 'URL-Kodierung/Dekodierung',
    description: 'URL-Kodierung wandelt Sonderzeichen in URL-kompatible Formate um, häufig verwendet für URL-Parameter und Formularübermittlungen.',
    options: {
      operationType: 'Operationstyp',
      encodeMode: 'Kodierungsmodus'
    },
    encodeOptions: {
      standard: 'Standardkodierung (encodeURI)',
      component: 'Komponentenkodierung (encodeURIComponent)',
      full: 'Vollständige Kodierung (alle Zeichen)',
      standardDescription: 'Kodiert die gesamte URL und behält URL-Strukturzeichen bei',
      componentDescription: 'Geeignet für URL-Parameter, kodiert alle Sonderzeichen',
      fullDescription: 'Kodiert alle nicht-alphanumerischen Zeichen, einschließlich Leerzeichen (als %20 statt +)'
    },
    actions: {
      encode: 'URL-kodieren',
      decode: 'URL-dekodieren',
      clear: 'Leeren',
      copyResult: 'Ergebnis kopieren'
    },
    input: {
      textToEncode: 'Zu kodierender Text',
      textToDecode: 'Zu dekodierender Text',
      encodePlaceholder: 'URL oder Text zur Kodierung eingeben...',
      decodePlaceholder: 'URL oder Text zur Dekodierung eingeben...'
    },
    output: {
      encodeResult: 'Kodierungsergebnis',
      decodeResult: 'Dekodierungsergebnis'
    },
    messages: {
      copied: '(Kopiert',
      error: 'Fehler: {message}',
      decodeError: 'Dekodierung fehlgeschlagen: "{text}"',
      copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren'
    },
    referenceTable: {
      title: 'Referenztabelle für häufige URL-Zeichenkodierungen',
      showTable: 'Tabelle anzeigen',
      hideTable: 'Tabelle ausblenden',
      character: 'Zeichen',
      encoded: 'URL-kodiert',
      description: 'Beschreibung',
      descriptions: {
        space: 'Leerzeichen',
        exclamation: 'Ausrufezeichen',
        doubleQuote: 'Anführungszeichen',
        hash: 'Doppelkreuz',
        dollar: 'Dollarzeichen',
        percent: 'Prozentzeichen',
        ampersand: 'Und-Zeichen',
        singleQuote: 'Hochkomma',
        leftParenthesis: 'Linke Klammer',
        rightParenthesis: 'Rechte Klammer',
        asterisk: 'Sternchen',
        plus: 'Pluszeichen',
        comma: 'Komma',
        slash: 'Schrägstrich',
        colon: 'Doppelpunkt',
        semicolon: 'Semikolon',
        lessThan: 'Kleiner-als-Zeichen',
        equals: 'Gleichheitszeichen',
        greaterThan: 'Größer-als-Zeichen',
        questionMark: 'Fragezeichen',
        at: 'At-Zeichen',
        leftBracket: 'Linke eckige Klammer',
        backslash: 'Backslash',
        rightBracket: 'Rechte eckige Klammer',
        caret: 'Dachzeichen',
        backtick: 'Gravis',
        leftBrace: 'Linke geschweifte Klammer',
        pipe: 'Senkrechter Strich',
        rightBrace: 'Rechte geschweifte Klammer',
        tilde: 'Tilde',
        chinese: 'UTF-8-kodiertes Chinesisch'
      }
    },
    article: {
      title: 'URL-Kodierung/Dekodierung: Umfassender Leitfaden',
      introduction: {
        title: 'Was ist URL-Kodierung und -Dekodierung?',
        p1: '<strong>URL-Kodierung/Dekodierung</strong> ist ein wesentlicher Prozess in der Webentwicklung, der Sonderzeichen in ein sicheres Format für die Internetübertragung umwandelt. Wenn Sie Informationen in URLs eingeben, haben bestimmte Zeichen (wie Leerzeichen, &-Zeichen oder Schrägstriche) besondere Bedeutungen in der URL-Struktur. Die URL-Kodierung ersetzt diese Sonderzeichen durch ein Prozentzeichen (%) gefolgt von zwei hexadezimalen Ziffern.',
        p2: 'Unser <strong>URL-Kodierung/Dekodierung</strong>-Tool bietet eine intuitive Oberfläche für drei Kodierungstypen: Standardkodierung (encodeURI), Komponentenkodierung (encodeURIComponent) und vollständige Kodierung aller Zeichen. Diese Vielseitigkeit ermöglicht Entwicklern, die mit <strong>JavaScript URL-Kodierung/Dekodierung</strong>-Funktionen, <strong>PHP URL-Kodierung/Dekodierung</strong>-Methoden oder anderen Programmiersprachen arbeiten, mühelos ihre Kodierungs- und Dekodierungsoperationen zu testen und zu validieren.',
        p3: 'Egal, ob Sie mit Formularübermittlungen, API-Anfragen oder komplexen URL-Parametern arbeiten - das Verständnis und die korrekte Implementierung von <strong>URL-Kodierung/Dekodierung</strong>-Techniken ist entscheidend, um Datenbeschädigungen und Sicherheitslücken zu vermeiden. Dieser umfassende Leitfaden untersucht alle Aspekte der URL-Kodierung und -Dekodierung in verschiedenen Programmiersprachen und Frameworks.'
      },
      
      applications: {
        title: 'Praktische Anwendungsfälle',
        scenario1: {
          title: 'Webentwicklung und Formularverarbeitung',
          content: 'Webentwickler verwenden häufig <strong>JavaScript URL-Kodierung/Dekodierung</strong> oder <strong>JS URL-Kodierung/Dekodierung</strong>-Funktionen bei der Formularverarbeitung, um Daten für HTTP-Anfragen korrekt zu formatieren. Wenn Benutzer Formulare mit Sonderzeichen, Leerzeichen oder Nicht-ASCII-Zeichen übermitteln, müssen diese Zeichen vor dem Senden an den Server kodiert werden. In JavaScript wird dafür typischerweise die Funktion <code>encodeURIComponent()</code> verwendet, während <code>decodeURIComponent()</code> auf der Empfängerseite die Daten dekodiert.'
        },
        scenario2: {
          title: 'API-Entwicklung und Integration',
          content: 'Bei der Entwicklung oder Nutzung von APIs müssen Entwickler häufig <strong>URL-Kodierung/Dekodierung</strong>-Funktionen in verschiedenen Sprachen verwenden, wie <strong>Python URL-Kodierung/Dekodierung</strong>, <strong>Java URL-Kodierung/Dekodierung</strong> oder <strong>Golang URL-Kodierung/Dekodierung</strong>. Abfrageparameter und Pfadsegmente können Sonderzeichen enthalten, die kodiert werden müssen, um Anfragen korrekt zu formulieren. Beispielsweise wird für <strong>Python URL-Kodierung/Dekodierung</strong>-Operationen normalerweise das <code>urllib.parse</code>-Modul verwendet, während Java-Entwickler die Klassen <code>URLEncoder</code> und <code>URLDecoder</code> nutzen.'
        },
        scenario3: {
          title: 'Datenbankinteraktion',
          content: 'Datenbankentwickler müssen manchmal <strong>URL-Kodierung/Dekodierung in SQL Server</strong> oder ähnliche Operationen in anderen Datenbanksystemen durchführen, wenn sie URLs speichern oder abrufen. Nicht korrekt kodierte Sonderzeichen in URLs können SQL-Abfragen beeinträchtigen. Ähnlich bieten Frameworks wie <strong>URL-Kodierung/Dekodierung in Laravel</strong> Hilfsmittel für den Umgang mit URL-Kodierung und -Dekodierung in Datenbankoperationen, um die Datenintegrität über den gesamten Anwendungslebenszyklus sicherzustellen.'
        },
        scenario4: {
          title: 'Sicherheit und Authentifizierung',
          content: 'Sicherheitsexperten verwenden <strong>URL-Kodierung/Dekodierung</strong>-Techniken, um Schwachstellen in Webanwendungen zu analysieren und zu testen. Korrekte URL-Kodierung hilft, Injektionsangriffe und Cross-Site-Scripting (XSS) zu verhindern. Bei der Implementierung von Authentifizierungssystemen müssen Entwickler möglicherweise Token oder andere sensible Informationen in URLs kodieren. Bibliotheken wie <strong>Base64 URL-Kodierung/Dekodierung</strong> werden häufig für diese sicherheitsrelevanten Kodierungsaufgaben verwendet, insbesondere bei JWT (JSON Web Tokens)-Implementierungen.'
        },
        scenario5: {
          title: 'Sprachübergreifende Entwicklungsumgebungen',
          content: 'In multilingualen Umgebungen müssen Entwickler möglicherweise sicherstellen, dass URL-Kodierung konsistent über das gesamte Programmierökosystem hinweg verwendet wird. Das Testen von <strong>C# URL-Kodierung/Dekodierung</strong> im Vergleich zu <strong>TypeScript URL-Kodierung/Dekodierung</strong> oder <strong>PHP URL-Kodierung/Dekodierung</strong>-Implementierungen kann für die Aufrechterhaltung der Interoperabilität entscheidend sein. Unser Online-Tool dient als neutraler Referenzpunkt, der Entwicklern ermöglicht, das Kodierungsverhalten in verschiedenen Sprachimplementierungen zu überprüfen, ohne zusätzlichen Testcode schreiben zu müssen.'
        }
      },
      
      guide: {
        title: 'Anleitung zur Verwendung des URL-Kodierung/Dekodierung-Tools',
        step1: {
          title: 'Schritt 1: Wählen Sie Ihren Operationstyp',
          content: 'Wählen Sie zunächst die gewünschte Operation aus dem Dropdown-Menü. Wählen Sie "URL-kodieren", um Sonderzeichen in URL-sichere Formate umzuwandeln, oder "URL-dekodieren", um kodierte Zeichen in ihre ursprüngliche Form zurückzuwandeln. Diese Flexibilität ermöglicht es Ihnen, Funktionen zu testen, die Sie möglicherweise in <strong>JavaScript URL-Kodierung/Dekodierung</strong>, <strong>PHP URL-Kodierung/Dekodierung</strong> oder <strong>Python URL-Kodierung/Dekodierung</strong> implementieren.'
        },
        step2: {  
          title: 'Schritt 2: Wählen Sie den Kodierungsmodus',
          content: 'Wenn Sie "URL-kodieren" auswählen, wählen Sie aus drei verschiedenen Kodierungsmodi, die Ihren Anforderungen entsprechen: <ul><li><strong>Standardkodierung (encodeURI)</strong>: Kodiert die gesamte URL und behält URL-Strukturzeichen wie Schrägstriche, Fragezeichen etc. bei. Dies entspricht der Verwendung der <code>encodeURI()</code>-Funktion in der <strong>JavaScript URL-Kodierung/Dekodierung</strong>.</li><li><strong>Komponentenkodierung (encodeURIComponent)</strong>: Kodiert alle Sonderzeichen, einschließlich derjenigen mit besonderer Bedeutung in URLs wie Schrägstriche oder Fragezeichen. Dies entspricht der Verwendung von <code>encodeURIComponent()</code> in der <strong>JS URL-Kodierung/Dekodierung</strong>.</li><li><strong>Vollständige Kodierung</strong>: Kodiert alle nicht-alphanumerischen Zeichen und bietet die umfassendste Kodierungsmethode, ähnlich einer benutzerdefinierten Funktion in der <strong>Java URL-Kodierung/Dekodierung</strong>.</li></ul>'
        },
        step3: {
          title: 'Schritt 3: Geben Sie Ihren Text ein',
          content: 'Geben Sie als Nächstes den Text, den Sie kodieren oder dekodieren möchten, in das Eingabefeld ein. Dies kann eine vollständige URL, eine URL-Komponente oder eine beliebige Zeichenkette mit Sonderzeichen sein. Wenn Sie äquivalente Funktionen wie <strong>PHP URL-Kodierung/Dekodierung</strong> oder <strong>Python URL-Kodierung/Dekodierung</strong> testen, können Sie hier dieselbe Zeichenkette eingeben, um Vergleiche anzustellen.'
        },
        step4: {
          title: 'Schritt 4: Verarbeiten und nutzen Sie die Ergebnisse',
          content: 'Klicken Sie auf die Schaltfläche "URL-kodieren" oder "URL-dekodieren", um Ihre Eingabe zu verarbeiten. Das Ergebnis wird im unteren Ausgabefeld angezeigt. Sie können die Kopieren-Schaltfläche verwenden, um das Ergebnis in Ihre Anwendung zu kopieren, unabhängig davon, ob Sie <strong>C# URL-Kodierung/Dekodierung</strong>, <strong>TypeScript URL-Kodierung/Dekodierung</strong> implementieren oder <strong>URL-Kodierung/Dekodierung in Laravel</strong> durchführen. Die Referenztabelle am unteren Ende des Tools zeigt häufige URL-kodierte Zeichen zur Information.'
        }
      },
      
      faq: {
        title: 'Häufig gestellte Fragen',
        q1: 'Was ist der Unterschied zwischen encodeURI und encodeURIComponent?',
        a1: 'In <strong>JavaScript URL-Kodierung/Dekodierung</strong>-Operationen haben diese beiden Funktionen unterschiedliche Zwecke. <code>encodeURI()</code> ist für die Kodierung ganzer URLs konzipiert und behält URL-Strukturzeichen (wie <code>/</code>, <code>?</code>, <code>:</code>, <code>=</code>) bei. Dies ist nützlich, wenn Sie eine gesamte URL kodieren und ihre Struktur beibehalten müssen.<br><br><code>encodeURIComponent()</code> hingegen kodiert alle Sonderzeichen, einschließlich derjenigen mit besonderer Bedeutung in URLs wie Schrägstriche oder Fragezeichen. Dies macht es ideal für die Kodierung von URL-Komponenten wie Abfrageparametern. Wenn Sie beispielsweise eine Such-URL mit Benutzereingaben erstellen, sollten Sie <code>encodeURIComponent()</code> für den Suchbegriff verwenden, um sicherzustellen, dass Sonderzeichen die URL-Struktur nicht beeinträchtigen. Die meisten <strong>JS URL-Kodierung/Dekodierung</strong>-Implementierungen verwenden <code>encodeURIComponent()</code> für Formularübermittlungen und API-Aufrufe.',
  
        q2: 'Wie implementiere ich URL-Kodierung/Dekodierung in PHP?',
        a2: 'Für <strong>PHP URL-Kodierung/Dekodierung</strong>-Operationen bietet PHP eingebaute Funktionen: <code>urlencode()</code> und <code>urldecode()</code>. Die <code>urlencode()</code>-Funktion verhält sich ähnlich wie <code>encodeURIComponent()</code> in JavaScript und kodiert alle Sonderzeichen, einschließlich Leerzeichen (als +-Zeichen). Für die Kodierung ganzer URLs bietet PHP <code>rawurlencode()</code>, das dem RFC 3986-Standard folgt und Leerzeichen als %20 statt als + kodiert.',
  
        q3: 'Wie implementiere ich URL-Kodierung/Dekodierung in Python?',
        a3: 'In der <strong>Python URL-Kodierung/Dekodierung</strong> können Sie die Funktionen <code>quote()</code> und <code>unquote()</code> aus dem <code>urllib.parse</code>-Modul verwenden. Die <code>quote()</code>-Funktion ähnelt <code>encodeURIComponent()</code> in JavaScript und kodiert alle Sonderzeichen, einschließlich Leerzeichen (als %20). <code>unquote()</code> wird verwendet, um URL-kodierte Zeichenketten zu dekodieren.' ,
  
        q4: 'Kann ich Base64-Kodierung anstelle von URL-Kodierung verwenden?',
        a4: 'Obwohl <strong>Base64 URL-Kodierung/Dekodierung</strong>-Techniken manchmal zum Kodieren von Daten in URLs verwendet werden (insbesondere bei JWT-Implementierungen), ist Base64-Kodierung kein Ersatz für URL-Kodierung. Base64-Kodierung wandelt Binärdaten in ASCII-Zeichen um, kann aber Zeichen mit besonderer Bedeutung in URLs erzeugen, wie +, / und =.',
  
        q5: 'Wie gehe ich mit URL-Kodierung in SQL-Abfragen um?',
        a5: 'Die Durchführung von URL-Kodierung/Dekodierung-Operationen in SQL Server beinhaltet typischerweise die Verwendung eingebauter Funktionen oder das Erstellen benutzerdefinierter Funktionen. SQL Server hat keine eingebaute URL-Kodierungsfunktion, aber Sie können:<br><br>1. Kodierungs-/Dekodierungsoperationen im Anwendungscode durchführen, bevor Sie SQL-Abfragen konstruieren.<br>2. In SQL benutzerdefinierte Funktionen erstellen, obwohl es aus Sicherheitsgründen generell besser ist, geeignete <strong>C# URL-Kodierung/Dekodierung</strong>-Methoden (für .NET-Anwendungen) oder andere sprachspezifische Implementierungen im Anwendungscode zu verwenden, anstatt URL-Kodierung/Dekodierung direkt in SQL durchzuführen.'
      },
      
      relatedTools: {
        title: 'Verwandte Tools',
        tool1: '<a href="https://meyerweb.com/eric/tools/dencoder/" target="_blank" rel="noopener noreferrer">URL Decoder/Encoder</a>',
        tool2: '<a href="https://www.urldecoder.org/" target="_blank" rel="noopener noreferrer">URL Decode and Encode - Online</a>',
        tool3: '<a href="https://www.url-encode-decode.com/" target="_blank" rel="noopener noreferrer">URL Encode Decode - URL Percent Encoding and Decoding.</a>'
      },
      
      resources: {
        title: 'Externe Ressourcen',
        resource1: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" target="_blank" rel="noopener noreferrer">MDN Web Docs: encodeURIComponent()</a> - Detaillierte Dokumentation der JavaScript-URL-Kodierungsfunktion',
        resource2: '<a href="https://www.php.net/manual/en/function.urlencode.php" target="_blank" rel="noopener noreferrer">PHP Manual: urlencode()</a> - Offizielle Dokumentation der PHP-URL-Kodierungsfunktion',
        resource3: '<a href="https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1" target="_blank" rel="noopener noreferrer">W3C Form Submission Specification</a> - Offizielle Spezifikation, wie Browser Formulardaten kodieren'
      },
      
      conclusion: {
        title: 'Zusammenfassung',
        content: 'Unser <strong>URL-Kodierung/Dekodierung</strong>-Tool bietet eine vielseitige Lösung für alle URL-Kodierungs- und -Dekodierungsanforderungen. Egal, ob Sie <strong>JavaScript URL-Kodierung/Dekodierung</strong>, <strong>PHP URL-Kodierung/Dekodierung</strong> oder <strong>Python URL-Kodierung/Dekodierung</strong> testen müssen - unser Tool erfüllt Ihre Anforderungen.'
      }
    }
  }