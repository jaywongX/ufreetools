export default {
    name: 'Bild-zu-ASCII-Konverter',
    description: 'Wandeln Sie Bilder in anpassbare ASCII-Kunsttexte um',
    upload: {
      title: 'Bild hochladen',
      dropzone: 'Bild hierher ziehen oder zum Durchsuchen klicken',
      maxSize: 'Maximale Dateigröße: 5MB',
      supportedFormats: 'Unterstützte Formate: JPG, PNG, WEBP, GIF',
      pasteImage: 'Oder Bild aus der Zwischenablage einfügen'
    },
    options: {
      title: 'Konvertierungsoptionen',
      width: 'Ausgabebreite',
      height: 'Ausgabehöhe',
      preserveAspect: 'Seitenverhältnis beibehalten',
      colored: 'Farbige Ausgabe',
      charSet: 'Zeichensatz',
      charSets: {
        standard: 'Standard',
        simple: 'Einfach',
        complex: 'Komplex',
        blocks: 'Blockzeichen',
        custom: 'Benutzerdefiniert'
      },
      customChars: 'Benutzerdefinierte Zeichen',
      invert: 'Farben umkehren',
      threshold: 'Helligkeitsschwelle',
      brightness: 'Helligkeit',
      contrast: 'Kontrast',
      fontFamily: 'Schriftart',
      fontSize: 'Schriftgröße',
      lineHeight: 'Zeilenhöhe',
      backgroundColor: 'Hintergrundfarbe',
      textColor: 'Textfarbe'
    },
    output: {
      title: 'ASCII-Ausgabe',
      preview: 'Vorschau',
      raw: 'Rohes ASCII',
      html: 'HTML',
      copyToClipboard: 'In Zwischenablage kopieren',
      downloadTxt: 'Als TXT herunterladen',
      downloadHtml: 'Als HTML herunterladen',
      downloadImage: 'Als Bild herunterladen',
      stats: {
        title: 'Statistiken',
        characters: 'Zeichenanzahl',
        lines: 'Zeilenanzahl',
        colors: 'Farbanzahl',
        size: 'Textgröße'
      }
    },
    presets: {
      title: 'Voreinstellungen',
      save: 'Aktuelle Einstellungen speichern',
      load: 'Voreinstellung laden',
      delete: 'Voreinstellung löschen',
      presetName: 'Voreinstellungsname',
      default: 'Standard',
      detailed: 'Detailliert',
      minimalist: 'Minimalistisch',
      blocky: 'Blockstil',
      small: 'Klein',
      inverted: 'Invertiert'
    },
    adjustment: {
      title: 'Bildanpassung',
      grayscale: 'Graustufen',
      negative: 'Negativ',
      resize: 'Größe vor Konvertierung anpassen',
      crop: 'Bild zuschneiden',
      rotate: 'Drehen',
      flipH: 'Horizontal spiegeln',
      flipV: 'Vertikal spiegeln'
    },
    animation: {
      title: 'Animation',
      animated: 'Als Animation verarbeiten',
      frameDelay: 'Frameverzögerung',
      loop: 'Animation wiederholen',
      loopCount: 'Wiederholungsanzahl',
      extractFrame: 'Aktuellen Frame extrahieren'
    },
    actions: {
      convert: 'In ASCII konvertieren',
      resetOptions: 'Optionen zurücksetzen',
      refreshPreview: 'Vorschau aktualisieren',
      loadImage: 'Neues Bild laden',
      applyChanges: 'Änderungen anwenden',
      selectImage: 'Bild auswählen',
      reset: 'Zurücksetzen',
      processing: 'Wird verarbeitet...',
      generate: 'ASCII generieren',
      copy: 'Kopieren',
      download: 'Herunterladen'
    },
    messages: {
      converting: 'Bild wird in ASCII konvertiert...',
      conversionComplete: 'Konvertierung abgeschlossen',
      conversionFailed: 'Bildkonvertierung fehlgeschlagen: {error}',
      copied: 'ASCII wurde in die Zwischenablage kopiert',
      downloadStarted: 'Download gestartet',
      downloadComplete: 'ASCII wurde heruntergeladen',
      downloadFailed: 'Download fehlgeschlagen',
      copyFailed: 'Kopieren fehlgeschlagen',
      resetComplete: 'Zurückgesetzt',
      asciiGenerated: 'ASCII-Kunst wurde generiert',
      generationFailed: 'ASCII-Generierung fehlgeschlagen',
      presetSaved: 'Voreinstellung gespeichert',
      presetLoaded: 'Voreinstellung geladen',
      presetDeleted: 'Voreinstellung gelöscht',
      invalidImage: 'Ungültiges Bildformat oder beschädigte Datei',
      imageTooBig: 'Bild ist zu groß für die Konvertierung',
      selectOrLoad: 'Bitte wählen Sie ein Bild aus oder laden Sie es von einer URL',
      asciiWillDisplay: 'ASCII wird hier angezeigt',
      customCharsPlaceholder: 'Zeichen eingeben, von dunkel nach hell sortiert...',
      tip: 'Klicken Sie nach dem Anpassen der Einstellungen auf "ASCII generieren", um das Ergebnis zu sehen',
      drapPlaceHolder: 'Bild auswählen oder hierher ziehen',
      noImage: 'Bitte wählen Sie zuerst ein Bild aus',
      generateAscii: 'Klicken Sie auf "ASCII generieren", um das Bild zu konvertieren',
      tip2: 'Tipp: Verwenden Sie die Kopieren-Schaltfläche, um die ASCII-Kunst in die Zwischenablage zu kopieren, oder die Download-Schaltfläche, um sie als Textdatei zu speichern.'
    },
    charSets: {
      standard: 'Standard',
      simple: 'Einfach',
      blocks: 'Blöcke',
      custom: 'Benutzerdefiniert'
    },
    settings: {
      title: 'ASCII-Einstellungen',
      customCharsetLabel: 'Benutzerdefinierter Zeichensatz (von dunkel nach hell)',
      asciiWidth: 'ASCII-Breite',
      invert: 'Farben umkehren',
      colored: 'Farbige Ausgabe',
      fontSize: 'Schriftgröße'
    },
    preview: {
      originalImage: 'Originalbild',
      generatedAscii: 'Generiertes ASCII'
    },
    article: {
      title: "Bild-zu-ASCII-Kunst: Bilder in Textkunst verwandeln",
      features: {
        title: "Grundlagen der Bild-zu-ASCII-Konvertierung",
        description: "Dieser <strong>Bild-zu-ASCII-Konverter</strong> ist ein spezialisierter <strong>Textkunst-Generator</strong>, der normale Bilder mithilfe verschiedener ASCII-Zeichen in künstlerische Textwerke umwandelt. Dieses <strong>ASCII-Kunst-Tool</strong> analysiert die Helligkeitswerte jedes Pixels im Bild und ordnet sie entsprechend der visuellen Dichte von ASCII-Zeichen zu.<br><br>Im Gegensatz zu einfachen <strong>Textkunst-Erstellern</strong> bietet unser Tool umfassende Anpassungsoptionen, darunter einstellbare Breite, verschiedene Zeichensätze, Farbbeibehaltung und Invertierungskontrolle. Dieser <strong>ASCII-Bild-Konverter</strong> unterstützt verschiedene Bildformate wie JPG, PNG und GIF und ist somit mit den meisten Bildquellen kompatibel. Für digitale Künstler, Programmierer und kreative Inhaltsersteller bietet dieser <strong>Bild-zu-Text-Konverter</strong> eine einzigartige Möglichkeit, visuelle Inhalte in einem textbasierten Format darzustellen, das einfach geteilt, in Dokumente eingebettet oder in Umgebungen verwendet werden kann, in denen Bilder nicht angezeigt werden können.",
        useCases: {
          title: "Praktische Anwendungen von ASCII-Kunst",
          items: [
            "<strong>Kreative Kommunikation</strong>: Verwenden Sie einzigartige <strong>ASCII-Bilder</strong>, um E-Mail-Signaturen, Social-Media-Beiträge oder Nachrichten in Messaging-Apps aufzuwerten und sie von normalem Text oder Bildern abzuheben",
            "<strong>Programmierprojekte</strong>: Integrieren Sie ASCII-Kunst in Befehlszeilenoberflächen, Terminalanwendungen oder textbasierte Spiele, um visuelle Elemente hinzuzufügen, ohne tatsächliche Bildrendering-Fähigkeiten zu benötigen",
            "<strong>Lehrmaterialien</strong>: Erstellen Sie zugängliche visuelle Darstellungen für Schulungsinhalte, insbesondere für den Unterricht in Umgebungen, die möglicherweise keine Standardbilder unterstützen",
            "<strong>Digitale Kunstprojekte</strong>: Entwickeln Sie einzigartige künstlerische Ausdrucksformen, indem Sie Fotos in <strong>textbasierte Kunstwerke</strong> umwandeln und die Schnittstelle zwischen visueller Kunst und Typografie erkunden",
            "<strong>Inhalte für ältere Systeme</strong>: Generieren Sie visuelle Inhalte für veraltete Computersysteme, Nur-Text-Anzeigen oder Umgebungen mit begrenzten Grafikfähigkeiten, die keine Standardbilder rendern können",
            "<strong>ASCII-Animationen erstellen</strong>: Konvertieren Sie Videoframes oder aufeinanderfolgende Bilder in ASCII-Frames, um textbasierte Animationen für kreative Projekte, Websites oder Terminalanwendungen zu erstellen"
          ]
        }
      },
      faq: {
        title: "Häufig gestellte Fragen zur ASCII-Kunst-Konvertierung",
        items: [
          {
            question: "Welche Arten von Bildern eignen sich am besten für die Umwandlung in ASCII-Kunst?",
            answer: "Bilder mit hohem Kontrast, klarem Hauptmotiv und relativ einfacher Komposition ergeben in der Regel die effektivste ASCII-Kunst. Gut beleuchtete Porträtfotos, Silhouetten und Bilder mit klaren Umrissen erzielen bei der Verarbeitung durch unseren ASCII-Kunst-Generator meist die besten Ergebnisse. Obwohl das Tool jedes Bildformat (JPG, PNG, GIF, WebP) verarbeiten kann, sind die Inhalteigenschaften wichtiger als das Dateiformat. Vermeiden Sie Bilder mit sehr unruhigem Hintergrund, geringem Kontrast oder feinen Details, die bei der Konvertierung verloren gehen könnten. Für optimale Textkunst-Konvertierungsergebnisse sollten Sie das Bild vor dem Hochladen in den ASCII-Konverter vorverarbeiten, um den Kontrast zu erhöhen und komplexe Bereiche zu vereinfachen."
          },
          {
            question: "Wie kann ich den Detaillierungsgrad in der ASCII-Kunst steuern?",
            answer: "In unserem Bild-zu-ASCII-Konverter können Sie den Detaillierungsgrad der ASCII-Textkunst über mehrere Einstellungen anpassen. Der Breitenparameter ist der wichtigste - höhere Breitenwerte (bis zu 200 Zeichen) erzeugen detailliertere ASCII-Bilder mit feinerer Präzision, während niedrigere Werte eine breitere, weniger detaillierte Darstellung ergeben. Die Zeichensatzauswahl beeinflusst ebenfalls die Details - die 'Standard'- und 'Block'-Sätze bieten mehr Abstufungen und können bessere Details liefern als der 'Einfach'-Satz. Für maximale Kontrolle verwenden Sie die Option für benutzerdefinierte Zeichensätze, um Ihre eigene Zeichenfolge basierend auf der visuellen Dichte der Zeichen zu definieren. Darüber hinaus kann die Invertierungsoption manchmal die Details bestimmter Bildtypen verbessern, indem die Helligkeitszuordnung umgekehrt wird, während die Schriftgrößeneinstellung beeinflusst, wie das endgültige ASCII-Bild auf dem Bildschirm angezeigt wird."
          },
          {
            question: "Warum sieht meine ASCII-Kunst verzerrt oder gestreckt aus?",
            answer: "ASCII-Kunst kann gestreckt aussehen, weil Standardtextzeichen höher als breit sind, was bei der Konvertierung von quadratischen Pixeln zu einem unausgewogenen Seitenverhältnis führt. Unser ASCII-Konverter wendet automatisch einen Korrekturfaktor an, um diese Zeichenseitenverhältnisunterschiede auszugleichen, aber je nach Schriftart, die für die Anzeige des Ergebnisses verwendet wird, können dennoch einige Verzerrungen auftreten. Wenn Ihr ASCII-Bild zu stark vertikal komprimiert oder horizontal gestreckt aussieht, versuchen Sie, die Breiteneinstellung anzupassen oder das Ergebnis mit einer nichtproportionalen Schriftart (wie Courier New, Consolas oder Monaco) anzuzeigen, deren Zeichen einheitlichere Abmessungen haben. Die Verwendung des 'Block'-Zeichensatzes kann ebenfalls helfen, eine ausgewogenere Ausgabe zu erstellen, da diese Unicode-Zeichen die räumlichen Beziehungen besser bewahren als Standard-ASCII-Zeichen."
          },
          {
            question: "Kann ich mit diesem Tool farbige ASCII-Kunst erstellen?",
            answer: "Ja, unser Bild-zu-ASCII-Konverter bietet eine Farbausgabeoption, die die Farben des Originalbilds beibehält. Wenn Sie die Einstellung 'Farbige Ausgabe' aktivieren, analysiert der ASCII-Text-Generator die Helligkeits- und Farbinformationen jedes Pixels und ordnet sie ASCII-Zeichen zu, während die entsprechenden Farbwerte beibehalten werden. Dadurch entsteht ein lebendiges farbiges ASCII-Bild anstelle einer monochromen Textkunst. Die farbige Ausgabe wird als HTML mit Inline-Stilen generiert, um die Farbinformationen zu erhalten, was bedeutet, dass Sie es kopieren und in HTML-Dokumenten verwenden können, aber für reine Textanwendungen müssen Sie die standardmäßige nicht-farbige Ausgabe verwenden. Beachten Sie, dass die Farbbeibehaltung bei Bildern mit deutlichen Farbbereichen am besten funktioniert, nicht bei subtilen Farbverläufen."
          },
          {
            question: "Wie kann ich meine generierte ASCII-Kunst teilen oder verwenden?",
            answer: "Nachdem Sie mit unserem Textkunst-Ersteller ASCII-Kunst generiert haben, haben Sie mehrere Möglichkeiten, Ihr Werk zu teilen oder zu verwenden. Für reine Text-ASCII-Kunst verwenden Sie einfach die Kopieren-Schaltfläche, um die gesamte Ausgabe in die Zwischenablage zu kopieren, und fügen Sie sie dann in E-Mails, Dokumente, Social-Media-Beiträge oder beliebige Textfelder ein. Für farbige ASCII-Kunst müssen Sie die Download-Option verwenden, um das Ergebnis als HTML-Datei zu speichern, die in jedem Webbrowser angezeigt oder in Websites eingebettet werden kann. Sie können auch einen Screenshot der generierten Ergebnisse machen, um sie als Bild zu teilen. Für Programmierprojekte kopieren Sie die reine Textausgabe und integrieren sie als String-Konstante in Ihren Code. Denken Sie daran, dass nichtproportionale Schriftarten Ihr ASCII-Bild korrekt anzeigen, während proportionale Schriftarten die Zeichenausrichtung verzerren und den visuellen Effekt zerstören können."
          }
        ]
      },
      guide: {
        title: "Schritt-für-Schritt-Anleitung zur Erstellung von ASCII-Kunst aus Bildern",
        steps: [
          "<strong>Bild auswählen</strong>: Klicken Sie auf die Schaltfläche 'Bild auswählen' oben in der Benutzeroberfläche des <strong>ASCII-Kunst-Generators</strong>. Wählen Sie das Foto oder die Grafik aus, das/die Sie konvertieren möchten. Wählen Sie für beste Ergebnisse ein Bild mit gutem Kontrast und klarem Hauptmotiv.",
          "<strong>Breiteneinstellungen anpassen</strong>: Verwenden Sie den Schieberegler im Einstellungsbereich, um die gewünschte ASCII-Breite festzulegen. Denken Sie daran, dass höhere Werte (nahe 200) detailliertere, aber größere <strong>Textbilder</strong> erzeugen, während niedrigere Werte einfachere, kompaktere Ergebnisse liefern.",
          "<strong>Zeichensatz auswählen</strong>: Wählen Sie aus den verfügbaren Zeichensatzoptionen (Standard, Einfach, Blöcke oder Benutzerdefiniert). Jeder Satz erzeugt einen anderen Stil von <strong>ASCII-Bildern</strong>. Wenn Sie 'Benutzerdefiniert' wählen, können Sie Ihre eigenen Zeichen eingeben, sortiert von dunkel nach hell.",
          "<strong>Weitere Optionen konfigurieren</strong>: Entscheiden Sie, ob Sie die Farben umkehren möchten (was manchmal die Lesbarkeit auf weißem Hintergrund verbessert), die farbige Ausgabe aktivieren (um die Originalbildfarben zu erhalten) und die Schriftgröße an die Anzeigeanforderungen anpassen.",
          "<strong>ASCII-Kunst generieren</strong>: Klicken Sie auf die Schaltfläche 'ASCII generieren', um Ihr Bild mit dem <strong>Textkunst-Konverter</strong> zu verarbeiten. Der Algorithmus analysiert Ihr Bild und erstellt eine entsprechende ASCII-Darstellung basierend auf Ihren Einstellungen.",
          "<strong>Vorschau und Verfeinerung</strong>: Betrachten Sie die generierte <strong>ASCII-Kunst</strong> im Ergebnisbereich. Wenn Sie mit dem Ergebnis nicht zufrieden sind, passen Sie die Einstellungen an und generieren Sie sie erneut. Experimentieren Sie mit verschiedenen Zeichensätzen oder Breitenwerten, um den gewünschten Detaillierungsgrad zu erreichen.",
          "<strong>Ihr Werk speichern oder teilen</strong>: Sobald Sie mit Ihrem <strong>ASCII-Bild</strong> zufrieden sind, verwenden Sie die Kopieren-Schaltfläche, um es in die Zwischenablage zu kopieren, oder die Download-Schaltfläche, um es als Textdatei zu speichern. Für farbige ASCII-Kunst laden Sie es als HTML-Datei herunter, um die Farbinformationen zu erhalten."
        ]
      },
      conclusion: "Der Bild-zu-ASCII-Konverter verwandelt normale Bilder in außergewöhnliche Textkunst und schlägt eine Brücke zwischen visuellen und textbasierten Medien. Dieses leistungsstarke ASCII-Kunst-Tool bietet nicht nur einen kreativen Kanal, sondern hat auch breite praktische Anwendungen in der digitalen Kommunikation, Programmierung, Bildung und Kunst. Durch die Konvertierung von Standardbildern in ASCII-Format können Benutzer visuelle Konzepte in Umgebungen ausdrücken, die keine herkömmlichen Bilder unterstützen, oder einzigartige künstlerische Interpretationen von Fotoinhalten erstellen. Egal, ob Sie Ihrer digitalen Kommunikation Persönlichkeit verleihen, Kompatibilitätsprobleme lösen oder die Möglichkeiten textbasierter Bildkunst erkunden möchten - dieser ASCII-Bild-Generator bietet die erforderlichen Anpassungstools und Ausgabeoptionen. Da sich die digitale Kommunikation weiterentwickelt, bleibt die Fähigkeit, Bilder in Textkunst umzuwandeln, für die Lösung praktischer Probleme und den kreativen Ausdruck von großem Wert."
    }
  }