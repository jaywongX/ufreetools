export default {
    name: 'JFIF zu JPG Konverter',
    description: 'Konvertieren Sie JFIF-Bilder online in das JPG-Format, hohe Qualität, verschiedene Optionen',
    tags: ['Bilder', 'Konvertierung', 'jpg', 'jfif', 'jpeg', 'Format', 'Tool'],
    
    meta: {
      title: 'JFIF zu JPG Konverter - Kostenloses Online-Bildkonvertierungstool',
      description: 'Kostenlos JFIF zu JPG online konvertieren. Schnelle, sichere Browser-basierte Konvertierung mit Batch-Verarbeitung, Vorher-Nachher-Vergleich und erweiterten Qualitätseinstellungen. Kein Wasserzeichen, keine Anmeldung erforderlich.'
    },
    
    upload: {
      title: 'JFIF zu JPG Konverter',
      subtitle: 'Konvertieren Sie JFIF-Bilder in perfekter Qualität in das JPG-Format',
      dropzone: 'Ziehen Sie Ihre JFIF-Dateien hierher',
      dropzoneActive: 'Dateien loslassen zum Konvertieren',
      maxSize: 'Maximale Dateigröße: 50MB',
      supportedFormats: 'Unterstützte Formate: JFIF, JPEG, JPG'
    },
    
    settings: {
      title: 'Konvertierungseinstellungen',
      advanced: 'Erweiterte Einstellungen',
      quality: {
        label: 'Bildqualität',
        description: 'Höhere Qualität führt zu größeren Dateien',
        auto: 'Automatische Optimierung (empfohlen)'
      },
      qualityLabels: {
        maximum: 'Höchste Qualität',
        high: 'Hohe Qualität',
        good: 'Gute Qualität',
        medium: 'Mittlere Qualität',
        low: 'Niedrige Qualität',
        veryLow: 'Sehr niedrige Qualität'
      },
      metadata: {
        label: 'Bild-Metadaten',
        preserve: 'Alle Metadaten behalten (EXIF, GPS etc.)',
        strip: 'Alle Metadaten entfernen (kleinere Dateien)',
        keepBasic: 'Nur grundlegende Metadaten behalten'
      },
      filenameOption: 'Ausgabe-Dateiname',
      filenameOriginal: 'Original',
      filenameConverted: 'Präfix hinzufügen',
      filenameCustom: 'Benutzerdefiniert',
      filenameTemplatePlaceholder: 'Z.B.: converted-{name}',
      filenameTemplateHelp: 'Verwenden Sie {name} für den Originaldateinamen',
      preserveMetadata: 'Bild-Metadaten behalten'
    },
    
    preview: {
      title: 'Bildvorschau',
      before: 'Original JFIF',
      after: 'JPG Vorschau',
      noPreview: 'Keine Vorschau verfügbar',
      togglePreview: 'Vorschau ein-/ausblenden',
      imageDetails: 'Bilddetails'
    },
    
    fileTable: {
      fileName: 'Dateiname',
      type: 'Typ',
      size: 'Größe',
      status: 'Status',
      preview: 'Vorschau',
      pending: 'Wartend',
      converting: 'Wird konvertiert...',
      done: 'Fertig',
      error: 'Fehler',
      progress: 'Fortschritt'
    },
    
    results: {
      title: 'Konvertierte Dateien',
      summary: '{count} Dateien konvertiert, {saved} Speicherplatz gespart',
      originalName: 'Originalname',
      convertedName: 'Konvertierter Name',
      originalSize: 'Originalgröße',
      convertedSize: 'Neue Größe',
      compressionRate: 'Kompressionsrate',
      actions: 'Aktionen',
      noResults: 'Noch keine Konvertierungsergebnisse'
    },
    
    actions: {
      selectFile: 'Datei auswählen',
      addMore: 'Mehr hinzufügen',
      clear: 'Dateien löschen',
      convertAll: 'Alle konvertieren',
      converting: 'Wird konvertiert...',
      download: 'Herunterladen',
      downloadAll: 'Alle herunterladen',
      clearResults: 'Ergebnisse löschen',
      viewDetails: 'Details anzeigen',
      compare: 'Vergleichen',
      retry: 'Fehlgeschlagene wiederholen',
      cancelAll: 'Abbrechen',
      optimizeAll: 'Automatisch optimieren'
    },
    
    messages: {
      noValidFiles: 'Bitte wählen Sie gültige JFIF- oder JPEG-Dateien aus.',
      conversionError: 'Fehler beim Konvertieren der Datei. Bitte versuchen Sie es erneut.',
      conversionSuccess: 'Alle Dateien erfolgreich konvertiert!',
      partialSuccess: '{success} von {total} Dateien erfolgreich konvertiert.',
      downloadStarted: 'Download gestartet...',
      processingFiles: 'Ihre Dateien werden verarbeitet...',
      dragActive: 'Ziehen Sie Dateien zum Hochladen hierher',
      fileSizeExceeded: 'Dateigröße überschreitet das Limit von 50MB',
      unsupportedFormat: 'Nicht unterstütztes Dateiformat'
    },
    
    history: {
      title: 'Letzte Konvertierungen',
      empty: 'Keine letzten Konvertierungen',
      clear: 'Verlauf löschen',
      restore: 'Dateien wiederherstellen'
    },
    
    info: {
      title: 'Über JFIF zu JPG Konvertierung',
      description: 'Unser JFIF zu JPG Konverter ermöglicht Ihnen, JFIF-Bilddateien schnell und einfach in das besser kompatible JPG-Format zu konvertieren, wobei die gesamte Verarbeitung sicher in Ihrem Browser erfolgt.',
      
      whatIs: {
        title: 'Was ist JFIF?',
        content: 'JFIF (JPEG File Interchange Format) ist ein Dateiformatstandard für JPEG-Dateien. Es bietet zusätzliche Informationen wie Auflösung, Seitenverhältnis und andere Metadaten, die sicherstellen, dass JPEG-Bilder auf verschiedenen Geräten und Plattformen korrekt angezeigt werden. Obwohl JFIF und JPG technisch verwandte Formate sind, können bestimmte Software und Geräte mit einem der beiden besser umgehen.'
      },
      
      whyConvert: {
        title: 'Warum JFIF in JPG konvertieren?',
        reason1: 'Bessere Kompatibilität mit verschiedenen Anwendungen und Geräten',
        reason2: 'Einfacherer Upload auf Websites, die JFIF-Format möglicherweise ablehnen',
        reason3: 'Standardisierung Ihrer Bildersammlung mit konsistenter Dateiendung',
        reason4: 'Probleme beheben, wenn bestimmte Programme JFIF-Dateien nicht öffnen oder korrekt anzeigen können'
      },
      
      howItWorks: {
        title: 'So funktioniert es',
        content: 'Unser Konverter verarbeitet JFIF-Dateien vollständig in Ihrem Browser. Ihre Bilder werden niemals auf einen Server hochgeladen, was vollständige Privatsphäre und Sicherheit gewährleistet. Das Tool liest die JFIF-Bilddaten, rendert sie und speichert sie dann mit Ihren gewählten Qualitätseinstellungen als Standard-JPG-Format.'
      },
      
      tips: {
        title: 'Tipps für beste Ergebnisse',
        tip1: 'Nutzen Sie den Qualitätsregler für einen Ausgleich zwischen Dateigröße und Bildqualität',
        tip2: 'Für Bilder mit Text oder scharfen Details höhere Qualitätseinstellungen verwenden',
        tip3: 'Mehrere Dateien auf einmal konvertieren und als ZIP-Datei herunterladen',
        tip4: '"Automatisch optimieren" für den besten Kompromiss zwischen Qualität und Dateigröße nutzen',
        tip5: 'Metadaten entfernen für kleinere Dateien, wenn Privatsphäre wichtig ist'
      },
      
      privacy: {
        title: 'Privatsphäre & Sicherheit',
        content: 'Wir nehmen Ihre Privatsphäre ernst. Die gesamte Verarbeitung erfolgt direkt in Ihrem Browser - Ihre Dateien werden niemals auf einen Server hochgeladen. Dies gewährleistet vollständige Sicherheit und Privatsphäre für Ihre Bilder.'
      }
    },
    
    article: {
      title: "Ultimativer Leitfaden zum JFIF zu JPG Konverter: Online JFIF-Dateien konvertieren",
      
      introduction: {
        title: "JFIF zu JPG Konvertierung verstehen",
        content: "Unser <strong>JFIF zu JPG Konverter</strong> ist ein leistungsstarkes Online-Tool, das speziell für die nahtlose Konvertierung von JFIF-Bilddateien in das besser kompatible JPG-Format entwickelt wurde. Wenn Sie jemals Schwierigkeiten hatten, JFIF-Dateien zu öffnen oder zu teilen, bietet dieser Konverter die perfekte Lösung, indem er Bilder direkt in Ihrem Browser verarbeitet, ohne Upload, für vollständige Privatsphäre und Sicherheit."
      },
      
      whatIsJfif: {
        title: "Was ist JFIF und warum in JPG konvertieren?",
        content: "JFIF (JPEG File Interchange Format) ist eine Spezifikation, die definiert, wie JPEG-Bilddaten verpackt werden. Obwohl technisch ähnlich zu JPG, behandeln viele Systeme und Anwendungen sie unterschiedlich. Die <strong>Konvertierung von JFIF zu JPG</strong> stellt maximale Kompatibilität auf allen Geräten, Anwendungen und Plattformen sicher und beseitigt Ärgernisse wie 'Nicht unterstützter Dateityp'-Fehler beim Anzeigen oder Hochladen von Bildern."
      },
      
      whyConvert: {
        title: "Vorteile der JFIF zu JPG Konvertierung",
        content: "Der Hauptgrund für die <strong>Konvertierung von JFIF zu JPG</strong> in Windows 10 oder jedem anderen Betriebssystem ist Kompatibilität. JPG-Dateien werden universell unterstützt, während JFIF-Dateien in einigen Anwendungen oder Websites Probleme verursachen können. Mit unserem <strong>Online JFIF zu JPG Konverter</strong> stellen Sie sicher, dass Ihre Bilder überall zugänglich sind - von Social-Media-Plattformen über Bildbearbeitungssoftware bis hin zu E-Mail-Anhängen und Dokumenteneinbindungen."
      },
      
      useCases: {
        title: "Häufige Anwendungsfälle für JFIF zu JPG Konvertierung",
        list: [
          "Social-Media-Upload: Sicherstellen, dass Ihre Bilder auf Plattformen akzeptiert werden, die JFIF-Dateien ablehnen könnten",
          "Webentwicklung: JPG für bessere Kompatibilität mit allen Browsern und Geräten verwenden",
          "Digitale Publikation: JFIF-Bilder für die Einbindung in digitale Publikationen und Dokumente konvertieren",
          "Fotobearbeitung: JFIF-Dateien vor der Bearbeitung in Software mit begrenztem Format-Support konvertieren",
          "E-Mail-Anhänge: Für universelle Kompatibilität beim Teilen von Bildern per E-Mail in JPG konvertieren",
          "Fotodruck-Services: Viele Druckdienste verlangen speziell das JPG-Format",
          "Fotoarchive erstellen: Bildersammlungen mit konsistenter Dateiendung standardisieren"
        ]
      },
      
      platforms: {
        title: "JFIF zu JPG Konvertierung auf verschiedenen Plattformen",
        content: "Während unser Tool auf jedem Gerät mit Webbrowser funktioniert, suchen Benutzer oft nach plattformspezifischen Lösungen. Hier erfahren Sie, wie unser Konverter verschiedene Systemanforderungen erfüllt:",
        list: [
          {
            title: "JFIF zu JPG Konvertierung auf Windows 10/11",
            description: "Keine Softwareinstallation nötig, um <strong>JFIF in JPG auf Windows 10</strong> oder Windows 11 zu konvertieren. Unser Online-Konverter funktioniert perfekt in jedem Browser auf dem PC und bietet eine einfachere Alternative zu integrierten Tools."
          },
          {
            title: "JFIF zu JPG Konvertierung auf Mac",
            description: "Mac-Nutzer, die wissen möchten, <strong>wie man JFIF auf Mac in JPG konvertiert</strong>, können unser Tool ohne zusätzliche Software nutzen, wertvollen Speicherplatz sparen und unnötige Downloads vermeiden."
          },
          {
            title: "JFIF zu JPG Konvertierung auf Mobilgeräten",
            description: "Unser responsives Design stellt sicher, dass Sie <strong>JFIF-Dateien in JPG</strong> direkt von Smartphone oder Tablet konvertieren können, mit einer für Touchscreens optimierten Oberfläche."
          },
          {
            title: "JFIF zu JPG Konvertierung mit Browser-Erweiterungen",
            description: "Obwohl Browser-Erweiterungen existieren, benötigen diese oft Zugriffsrechte auf Ihre Daten. Unsere webbasierte Lösung erfordert keine Installation und schützt Ihre Privatsphäre."
          }
        ]
      },
      
      tutorial: {
        title: "Wie man JFIF in JPG konvertiert: Schritt-für-Schritt-Anleitung",
        introduction: "Die Konvertierung von JFIF-Bildern in JPG mit unserem intuitiven Tool ist einfach. Folgen Sie diesen einfachen Schritten, um Ihre Dateien zu konvertieren:",
        steps: [
          {
            title: "Dateien auswählen oder per Drag & Drop",
            description: "Klicken Sie auf 'Datei auswählen' oder ziehen Sie Ihre JFIF-Bilder direkt in den markierten Bereich. Sie können mehrere Dateien gleichzeitig für die Batch-Konvertierung auswählen."
          },
          {
            title: "Qualitätseinstellungen anpassen (optional)",
            description: "Für fortgeschrittene Benutzer können Sie die <strong>JFIF zu JPG Einstellungen</strong> wie Ausgabequalität anpassen. Höhere Qualität bedeutet größere Dateien, niedrigere Qualität kleinere Dateien."
          },
          {
            title: "Dateinamen-Option wählen",
            description: "Entscheiden Sie, ob Sie die Originaldateinamen behalten oder anpassen möchten. Mit unseren flexiblen Optionen können Sie Präfixe hinzufügen oder benutzerdefinierte Namensvorlagen verwenden."
          },
          {
            title: "Metadaten-Einstellungen konfigurieren",
            description: "Wählen Sie basierend auf Ihren Privatsphäre-Präferenzen und Dateigrößenanforderungen, ob Sie die Original-Metadaten behalten, löschen oder nur grundlegende Metadaten beibehalten möchten."
          },
          {
            title: "'Alle konvertieren' klicken",
            description: "Nach der Konfiguration klicken Sie auf 'Alle konvertieren', um den Prozess zu starten. Ein Fortschrittsbalken zeigt den Status jeder Datei an."
          },
          {
            title: "Konvertierte JPG-Dateien herunterladen",
            description: "Nach Abschluss der Konvertierung können Sie Ihre JPG-Dateien einzeln oder als ZIP-Archiv mit allen konvertierten Bildern herunterladen."
          }
        ],
        tips: {
          title: "Professionelle Tipps für JFIF zu JPG Konvertierung",
          list: [
            "Für Fotos mit vielen Details höhere Qualitätseinstellungen (85-100%) für optimale Schärfe verwenden",
            "Für Webgrafiken oder Screenshots bieten mittlere Qualitätseinstellungen (70-85%) meist den besten Kompromiss",
            "Bei Unsicherheit die 'Automatische Optimierung' nutzen",
            "Aus Datenschutzgründen 'Metadaten entfernen' wählen, um sensible Informationen zu löschen",
            "Bei mehreren Dateien ZIP-Download für Zeitersparnis nutzen"
          ]
        }
      },
      
      faq: {
        title: "Häufige Fragen zur JFIF zu JPG Konvertierung",
        questions: [
          {
            question: "Wie konvertiere ich JFIF zu JPG in Windows 10?",
            answer: "Obwohl Windows 10 integrierte Optionen wie Umbenennen der Dateiendung oder Nutzung von Paint bietet, ist unser Online-Konverter meist einfacher. Öffnen Sie einfach unsere Website in einem Browser, laden Sie Ihre JFIF-Dateien hoch und konvertieren Sie sie ohne Softwareinstallation zu JPG. Diese Methode funktioniert nicht nur unter <strong>Windows 10, sondern auch Windows 11, Mac und Mobilgeräten</strong>."
          },
          {
            question: "Kann ich JFIF ohne Qualitätsverlust zu JPG konvertieren?",
            answer: "Ja, Sie können <strong>JFIF ohne Qualitätsverlust zu JPG konvertieren</strong>, indem Sie unser Tool mit höchster Qualitätseinstellung (100%) nutzen. Da beide Formate JPEG-Kompression verwenden, bleibt bei höchster Qualität fast jedes Detail erhalten. Für absolut beste Ergebnisse nutzen Sie unsere 'Höchste Qualität'-Einstellung."
          },
          {
            question: "Wie ändere ich die Dateiendung von JFIF zu JPG?",
            answer: "Obwohl Sie technisch die Endung von .jfif zu .jpg ändern können, ist dies nicht immer zuverlässig. Unser <strong>JFIF zu JPG Konverter</strong> kodiert die Bilder korrekt um für richtige Kompatibilität, statt nur die Endung zu ändern. So funktionieren die Dateien auf allen Systemen und in allen Anwendungen."
          },
          {
            question: "Gibt es kostenlose JFIF zu JPG Konverter-Software zum Download?",
            answer: "Ja, es gibt herunterladbare Apps, aber unser <strong>kostenloser Online JFIF zu JPG Konverter</strong> macht Downloads überflüssig. Er ist von jedem Gerät aus nutzbar, verarbeitet Dateien lokal in Ihrem Browser (nicht auf unseren Servern) und benötigt keine Installation oder Registrierung."
          },
          {
            question: "Beeinflusst die JFIF zu JPG Konvertierung Bild-Metadaten?",
            answer: "Standardmäßig behält unser Konverter Metadaten wie EXIF-Informationen (Kameraeinstellungen, Aufnahmedatum etc.). Aus Datenschutzgründen oder zur Verkleinerung können Sie jedoch alle Metadaten während der Konvertierung löschen. Optional können Sie auch nur grundlegende, nicht-sensitive Metadaten behalten."
          },
          {
            question: "Was ist der Unterschied zwischen JFIF und JPG Dateien?",
            answer: "Der Unterschied ist hauptsächlich technisch. JFIF (JPEG File Interchange Format) ist eine spezifische Implementierung des JPEG-Standards, während JPG typischerweise als Dateiendung für JPEG-komprimierte Bilder verwendet wird. In der Praxis folgen die meisten JPG-Dateien eigentlich der JFIF-Spezifikation, aber einige Programme behandeln sie basierend auf der Dateiendung unterschiedlich."
          },
          {
            question: "Kann ich mehrere JFIF-Dateien gleichzeitig zu JPG konvertieren?",
            answer: "Absolut! Unser Tool unterstützt Batch-Verarbeitung, sodass Sie mehrere <strong>JFIF-Dateien gleichzeitig zu JPG konvertieren</strong> können. Wählen oder ziehen Sie einfach mehrere Dateien auf einmal und unser Konverter verarbeitet alle. Sie können sie dann einzeln oder als kombiniertes ZIP-Archiv herunterladen."
          }
        ]
      },
      
      conclusion: {
        title: "Warum unseren JFIF zu JPG Konverter wählen?",
        content: "Unser <strong>Online JFIF zu JPG Konverter</strong> vereint Einfachheit mit Leistungsfähigkeit und bietet die perfekte Lösung für alle, die JFIF-Dateien in das universeller kompatible JPG-Format konvertieren müssen. Egal ob Windows, Mac oder Mobilgerät - unser browserbasiertes Tool funktioniert nahtlos ohne Downloads oder Installationen. Mit Batch-Verarbeitung, anpassbaren Einstellungen und vollständigem Datenschutz war die Konvertierung von JFIF zu JPG noch nie so einfach oder sicher. Probieren Sie unseren Konverter aus und erleben Sie den Unterschied in Bildkompatibilität und Teilbarkeit."
      },
      
      relatedTools: {
        title: "Verwandte Bildkonvertierungstools",
        introduction: "Zusätzlich zu unserem JFIF zu JPG Konverter könnten diese Bild-Tools für Sie interessant sein:",
        list: [
          {
            name: "Bildkompressor",
            url: "http://www.ufreetools.com/tool/image-compressor",
            description: "Dateigröße reduzieren bei Beibehaltung der visuellen Qualität"
          },
          {
            name: "Bild-Batch-Konverter",
            url: "http://www.ufreetools.com/tool/image-batch-resizer",
            description: "Mehrere Bilder gleichzeitig anpassen, konvertieren und optimieren"
          },
          {
            name: "GIF-Frame-Extraktor",
            url: "http://www.ufreetools.com/tool/gif-frame-extractor",
            description: "Einzelne Frames aus GIF-Animationen extrahieren"
          }
        ]
      },
      
      resources: {
        title: "Offizielle Ressourcen",
        list: [
          {
            name: "JPEG Standarddokumentation",
            url: "https://docs.fileformat.com/image/jpeg/",
            description: "Mehr über die technischen Spezifikationen des JPEG-Formats erfahren"
          },
          {
            name: "JFIF File Interchange Format",
            url: "https://docs.fileformat.com/image/jfif/",
            description: "Mehr über die technischen Spezifikationen des JFIF-Formats erfahren"
          },
          {
            name: "JPEG File Interchange Format",
            url: "https://wikipedia.org/wiki/JPEG_File_Interchange_Format",
            description: "JPEG-Kompression wird in vielen Bilddateiformaten verwendet"
          }
        ]
      }
    }
}