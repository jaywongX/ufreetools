export default {
    name: 'Bildausschnitt-Tool',
    description: 'Präzises Zuschneiden, Größenanpassen und Drehen von Bildern',
    upload: {
      title: 'Bild hochladen',
      dropzone: 'Bild hierher ziehen und ablegen oder zum Durchsuchen klicken',
      maxSize: 'Maximale Dateigröße: 10MB',
      supportedFormats: 'Unterstützte Formate: JPG, PNG, WEBP, GIF',
      select: 'Bitte wählen Sie ein Bild zum Zuschneiden und Bearbeiten aus'
    },
    editor: {
      title: 'Bildeditor',
      zoom: 'Zoom',
      rotate: 'Drehen',
      flipHorizontal: 'Horizontal spiegeln',
      flipVertical: 'Vertikal spiegeln',
      reset: 'Bild zurücksetzen',
      undo: 'Rückgängig',
      redo: 'Wiederherstellen',
      dragMode: 'Verschiebungsmodus',
      scaleMode: 'Skalierungsmodus'
    },
    crop: {
      title: 'Zuschnitt-Einstellungen',
      aspectRatio: 'Seitenverhältnis',
      freeform: 'Freiform',
      square: 'Quadratisch (1:1)',
      portrait: 'Porträt (3:4)',
      landscape: 'Landschaft (4:3)',
      widescreen: 'Breitbild (16:9)',
      panorama: 'Panorama (2:1)',
      custom: 'Benutzerdefiniert',
      width: 'Breite',
      height: 'Höhe',
      unit: 'Einheit',
      pixels: 'Pixel',
      percent: 'Prozent',
      lockAspectRatio: 'Seitenverhältnis sperren'
    },
    presets: {
      title: 'Größen-Voreinstellungen',
      original: 'Originalgröße',
      social: 'Social Media',
      facebook: 'Facebook',
      instagram: 'Instagram',
      twitter: 'Twitter',
      linkedin: 'LinkedIn',
      youtube: 'YouTube',
      print: 'Druckgrößen',
      fourBySix: '4×6 Zoll',
      fiveBySeven: '5×7 Zoll',
      eightByTen: '8×10 Zoll'
    },
    output: {
      title: 'Ausgabe',
      preview: 'Vorschau',
      dimensions: 'Ausgabegröße',
      quality: 'Qualität',
      format: 'Format',
      fileName: 'Dateiname',
      download: 'Herunterladen',
      saveAs: 'Speichern unter',
      copy: 'In Zwischenablage kopieren'
    },
    actions: {
      crop: 'Bild zuschneiden',
      apply: 'Anwenden',
      cancel: 'Abbrechen',
      save: 'Bild speichern',
      download: 'Herunterladen',
      newImage: 'Neues Bild'
    },
    messages: {
      cropSuccess: 'Bild erfolgreich zugeschnitten',
      downloadReady: 'Ihr zugeschnittenes Bild ist zum Download bereit',
      processing: 'Bild wird verarbeitet...',
      copied: 'Bild in Zwischenablage kopiert',
      invalidFile: 'Ungültige Datei. Bitte laden Sie ein gültiges Bild hoch.',
      fileTooLarge: 'Datei zu groß. Maximale Größe: 10MB.'
    },
    article: {
      title: "Bildausschnitt-Tool: Das ultimative Werkzeug für präzise Bildbearbeitung",
      introduction: {
        title: "Was ist ein Bildausschnitt-Tool?",
        p1: "Unser <strong>Bildausschnitt-Tool</strong> ist speziell dafür entwickelt, Nutzern zu helfen, präzise Teile eines Bildes auszuwählen und zu extrahieren. Anders als einfache Fotoeditoren bietet unser <strong>Online-Bildzuschneide- und Größenanpassungstool</strong> erweiterte Funktionen, die sowohl für Gelegenheitsnutzer als auch für Profis, die ihre visuellen Inhalte perfektionieren möchten, ideal sind.",
        p2: "Egal, ob Sie einen <strong>runden Bildausschnitt</strong> für Profilbilder, einen <strong>quadratischen Bildausschnitt</strong> für Social-Media-Posts oder einen <strong>Freihand-Bildausschnitt</strong> für benutzerdefinierte Auswahlen benötigen - unser Tool bietet vielfältige Optionen für Ihre genauen Anforderungen. Die Technologie hinter unserem <strong>Bildausschnitt-Tool</strong> gewährleistet pixelgenaue Präzision und ermöglicht <strong>pixelgenaues Zuschneiden</strong> mit höchster Genauigkeit.",
        p3: "Moderne Webentwicklungs-Frameworks wie <strong>React</strong>, <strong>Angular</strong> und <strong>Flutter</strong> integrieren <strong>Bildzuschneidefunktionen</strong> durch Bibliotheken wie <strong>React-Bildausschnitt</strong>, <strong>NGX-Bildausschnitt</strong> und <strong>Flutter-Bildausschnitt</strong>. Unser Online-Tool bietet dieselbe professionelle Qualität, ohne dass Programmierkenntnisse erforderlich sind."
      },
      applications: {
        title: "Anwendungsbereiche",
        item1: "<strong>Social-Media-Optimierung</strong>: Nutzen Sie unsere <strong>Bildgrößen-Zuschnitt-Voreinstellungen</strong>, um perfekt dimensionierte Bilder für verschiedene Plattformen zu erstellen.",
        item2: "<strong>Profilbilderstellung</strong>: Erstellen Sie perfekte runde Profilbilder mit unserem <strong>runden Bildausschnitt-Tool</strong> oder <strong>Kreis-Zuschnitt-Werkzeug</strong>.",
        item3: "<strong>E-Commerce-Produktfotografie</strong>: Bereinigen Sie Produktbilder mit unserem <strong>Bildform-Zuschnitt-Tool</strong> für einheitliche Darstellungen.",
        item4: "<strong>Dokumentenverarbeitung</strong>: Nutzen Sie unsere <strong>PDF-Bild-Online-Zuschnitt-Funktion</strong>, um Bilder aus PDFs zu extrahieren.",
        item5: "<strong>Stapelverarbeitung</strong>: Verbessern Sie Ihren Workflow mit unserer <strong>Stapel-Bildzuschneide-Funktion</strong>, um mehrere Bilder gleichzeitig zu bearbeiten."
      },
      tutorial: {
        title: "So verwenden Sie unser Bildausschnitt-Tool",
        step1: {
          title: "Schritt 1: Laden Sie Ihr Bild hoch",
          content: "Klicken Sie auf den \"Neues Bild\"-Button, um das Foto auszuwählen und hochzuladen, das Sie zuschneiden möchten. Unser Tool unterstützt gängige Bildformate wie JPG, PNG und WEBP. Für fortgeschrittene Nutzer kann unsere <strong>automatische Bildzuschneide-Funktion</strong> den optimalen Zuschnittbereich erkennen und vorschlagen."
        },
        step2: {
          title: "Schritt 2: Wählen Sie Zuschnitttyp und -verhältnis",
          content: "Wählen Sie Ihren bevorzugten Zuschnitttyp aus dem Dropdown-Menü. Optionen umfassen Freiform (für <strong>Freihand-Bildzuschneide-Funktion</strong>), Quadratisch (1:1), Querformat (4:3), Hochformat (3:4) und Breitbild (16:9). Für präzise Größenanpassung kann unser Tool bei Bedarf als <strong>Zentimeter-Bildzuschneider</strong> verwendet werden."
        },
        step3: {
          title: "Schritt 3: Anpassen und Feinabstimmung",
          content: "Nutzen Sie die Zuschnitt-Griffe, um Ihren Auswahlbereich anzupassen. Verwenden Sie Dreh- und Spiegelungsfunktionen, um Ihr Bild perfekt auszurichten. Für präzise Kontrolle ermöglicht unsere <strong>Pixel-genaue Bildzuschneide-Funktion</strong> Anpassungen bis auf einzelne Pixel."
        },
        step4: {
          title: "Schritt 4: Zuschneiden und Herunterladen",
          content: "Wenn Sie mit Ihrer Auswahl zufrieden sind, klicken Sie auf \"Bild zuschneiden\", um Ihr zugeschnittenes Bild zu generieren. Überprüfen Sie das Ergebnis in der Vorschau und klicken Sie auf \"Herunterladen\", um es auf Ihrem Gerät zu speichern. Unser <strong>Bildzuschneide- und Größenanpassungstool</strong> behält während des gesamten Prozesses die bestmögliche Qualität bei."
        }
      },
      faq: {
        title: "Häufig gestellte Fragen",
        q1: "Welche Bildformate unterstützt der Zuschneider?",
        a1: "Unser Bildausschnitt-Tool unterstützt alle gängigen Bildformate, einschließlich JPG, PNG, WEBP und GIF. Laden Sie einfach Ihr Bild über den \"Neues Bild\"-Button hoch, um zu beginnen.",
        
        q2: "Wie erstelle ich einen perfekten quadratischen Zuschnitt für Social Media?",
        a2: "Wählen Sie im Dropdown-Menü für das Seitenverhältnis die Option \"Quadratisch (1:1)\". Dies beschränkt Ihre Zuschnittauswahl auf ein perfektes Quadrat, ideal für Profilbilder und viele Social-Media-Posts, die einheitliche Abmessungen erfordern.",
        
        q3: "Kann ich mein Bild vor dem Zuschneiden drehen oder spiegeln?",
        a3: "Ja, unser Tool bietet Dreh- und Spiegelungsfunktionen. Nutzen Sie die Dreh-Buttons, um Ihr Bild in beide Richtungen um 90 Grad zu drehen, oder die horizontalen und vertikalen Spiegelungs-Buttons, um Ihr Bild vor der Zuschnittauswahl zu spiegeln.",
        
        q4: "Wie speichere ich mein zugeschnittenes Bild?",
        a4: "Nachdem Sie Ihren Zuschnittbereich ausgewählt haben, klicken Sie auf \"Bild zuschneiden\", um Ihr zugeschnittenes Bild zu generieren. Das Ergebnis wird im Vorschaubereich rechts angezeigt. Klicken Sie dann auf \"Herunterladen\", um das zugeschnittene Bild auf Ihrem Gerät zu speichern.",
        
        q5: "Was ist der Unterschied zwischen den verschiedenen Seitenverhältnissen?",
        a5: "Verschiedene Seitenverhältnisse dienen unterschiedlichen Zwecken: 'Quadratisch (1:1)' ist ideal für Profilbilder, 'Querformat (4:3)' für Standardfotos, 'Hochformat (3:4)' für vertikale Darstellungen, 'Breitbild (16:9)' passt zu Videogrößen, während 'Freiform' Ihnen uneingeschränkte Zuschnittmöglichkeiten bietet."
      },
      relatedTools: {
        title: "Verwandte Tools",
        description: "Verbessern Sie Ihren Bildbearbeitungs-Workflow mit diesen ergänzenden Tools:",
        tool1: {
          name: "Bild-Stapelgrößenänderung",
          description: "Mehrere Bilder gleichzeitig anpassen, konvertieren und optimieren.",
          url: "https://www.ufreetools.com/tool/image-batch-resizer"
        },
        tool2: {
          name: "Bildkompressor",
          description: "Komprimieren und optimieren Sie Bilder bei Beibehaltung der Qualität.",
          url: "https://www.ufreetools.com/tool/image-compressor"
        },
        tool3: {
          name: "Bildwasserzeichen",
          description: "Fügen Sie Ihren Fotos Text- oder Bildwasserzeichen mit anpassbaren Einstellungen hinzu.",
          url: "https://www.ufreetools.com/tool/image-watermark"
        }
      },
      references: {
        title: "Referenzmaterial",
        ref1: {
          name: "Cropper.js",
          description: "Ein äußerst leistungsfähiges und einfaches Bildzuschneide-Tool mit flexibler Konfiguration, geeignet für Mobilgeräte und moderne Browser.",
          url: "https://github.com/fengyuanchen/cropperjs"
        },
        ref2: {
          name: "ImageCut",
          description: "Ein einfaches und praktisches Bildzuschneide-Tool mit intelligentem Zuschnitt, Größenanpassung, Pixelbereichseinstellungen und Stapelverarbeitung.",
          url: "https://soft.3dmgame.com/down/206119.html"
        },
        ref3: {
          name: "Vue-Cropper",
          description: "Eine Vue.js-basierte Bildzuschneide-Komponente, die die Cropper.js-Bibliothek nutzt und Zuschneidevorschau, Skalierungskontrolle, Bildrotation und mehr bietet, einfach integrierbar in Vue.js-Projekte.",
          url: "https://hu-snail.github.io/vue3-resource/platform/mobile/img.html"
        }
      }
    }
  }