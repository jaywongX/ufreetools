export default {
    name: 'Cookie-Manager',
    description: 'Anzeigen, Erstellen, Bearbeiten und Löschen von Cookies der aktuellen Website',
    
    // Hauptfunktionen
    currentCookies: 'Aktuelle Cookies',
    createCookie: 'Cookie erstellen',
    importExport: 'Import/Export',
    
    // Cookie-Liste
    noCookies: 'Diese Website hat keine Cookies',
    cookieName: 'Name',
    cookieValue: 'Wert',
    cookieDomain: 'Domain',
    cookiePath: 'Pfad',
    cookieExpires: 'Ablaufdatum',
    cookieSecure: 'Sicher (Secure)',
    cookieHttpOnly: 'HttpOnly',
    cookieSameSite: 'SameSite',
    actions: 'Aktionen',
    edit: 'Bearbeiten',
    delete: 'Löschen',
    save: 'Speichern',
    cancel: 'Abbrechen',
    refresh: 'Aktualisieren',
    
    // Erstellungs-/Bearbeitungsformular
    addCookie: 'Cookie hinzufügen',
    editCookie: 'Cookie bearbeiten',
    required: 'Erforderlich',
    optional: 'Optional',
    days: 'Tage',
    hours: 'Stunden',
    minutes: 'Minuten',
    cookieCreated: 'Cookie erstellt',
    cookieUpdated: 'Cookie aktualisiert',
    cookieDeleted: 'Cookie gelöscht',
    createError: 'Fehler beim Erstellen des Cookies',
    updateError: 'Fehler beim Aktualisieren des Cookies',
    deleteError: 'Fehler beim Löschen des Cookies',
    
    // Import/Export
    export: 'Cookies exportieren',
    import: 'Cookies importieren',
    exportAs: 'Exportieren als',
    exportSuccess: 'Cookies exportiert',
    importSuccess: '{count} Cookies importiert',
    importError: 'Fehler beim Importieren der Cookies',
    
    // Sicherheitsoptionen
    none: 'Keine',
    strict: 'Strict',
    lax: 'Lax',
    
    // Hinweise und Erklärungen
    domainNote: 'Leer lassen für aktuelle Domain',
    pathNote: 'Standard ist Root-Pfad "/"',
    expiresNote: 'Keine Angabe = Sitzungs-Cookie',
    secureNote: 'Nur über HTTPS senden',
    httpOnlyNote: 'JavaScript-Zugriff verhindern',
    sameSiteNote: 'Cross-Site-Request-Kontrolle',
    
    // Importformate
    importFormat: 'Importformat Beispiel:\nname=wert; expires=Datum; path=/; domain=beispiel.de; secure; httpOnly; sameSite=strict',
    jsonFormat: 'JSON-Format',
    textFormat: 'Textformat',
    invalidFormat: 'Ungültiges Format',
    
    // Artikelinhalt
    article: {
      title: 'Cookie-Manager: Verstehen und Kontrollieren von Website-Cookies',
      features: {
        title: 'Funktionen & Anwendungsfälle',
        description: 'Unser <strong>Cookie-Manager</strong> bietet umfassende Kontrolle über Website-Cookies. Dieses leistungsstarke Tool gibt Ihnen volle Transparenz und Kontrolle über in Ihrem Browser gespeicherte Cookies und hilft bei der Verwaltung Ihrer Online-Privatsphäre sowie der Fehlerbehebung bei Website-Funktionen.',
        useCasesTitle: 'Praktische Anwendungsfälle',
        useCases: {
          items: [
            '<strong>Webentwicklungstests</strong>: Testen Sie das Verhalten Ihrer Website mit verschiedenen Cookie-Konfigurationen, ohne den Browser-Speicher manuell bearbeiten zu müssen.',
            '<strong>Website-Fehlerbehebung</strong>: Diagnostizieren Sie Login-Probleme, Sitzungsprobleme oder andere cookie-bezogene Website-Fehler durch Überprüfung und Modifikation von Cookies.',
            '<strong>Privatsphärenmanagement</strong>: Behalten Sie die Kontrolle über Ihre persönlichen Daten, indem Sie unerwünschte Tracking-Cookies gezielt löschen.',
            '<strong>Sitzungsverwaltung</strong>: Erstellen oder ändern Sie Sitzungs-Cookies, um verschiedene Benutzerzustände oder Authentifizierungsszenarien zu testen, ohne sich wiederholt an- und abmelden zu müssen.',
            '<strong>Cross-Browser-Tests</strong>: Exportieren Sie Cookies aus einem Browser und importieren Sie sie in einen anderen, um identische Browserzustände zwischen verschiedenen Browsern zu replizieren.'
          ]
        }
      },
      faq: {
        title: 'Häufig gestellte Fragen',
        items: [
          {
            question: 'Was sind Cookies und warum verwendet sie Websites?',
            answer: 'Cookies sind kleine Datenstücke, die Websites in Ihrem Browser speichern. Sie haben verschiedene Funktionen, darunter das Speichern von Login-Informationen, das Verfolgen von Benutzerverhalten, das Speichern von Präferenzen, das Verwalten von Warenkörben und das Ermöglichen personalisierter Erfahrungen. Cookies sind für viele moderne Webfunktionen essenziell, können aber auch Datenschutzbedenken aufwerfen, wenn sie für Tracking verwendet werden.'
          },
          {
            question: 'Wie unterscheidet sich dieser Cookie-Manager von den integrierten Browser-Einstellungen?',
            answer: 'Während Browser grundlegende Cookie-Verwaltung über ihre Einstellungen bieten, ermöglicht unser <strong>Cookie-Manager</strong> detailliertere Kontrolle und Funktionen. Sie können nicht nur Cookies anzeigen und löschen (wie Browser es erlauben), sondern auch neue Cookies erstellen, bestehende bearbeiten, Cookies exportieren und importieren. Dies macht es ideal für Entwickler, Tester und datenschutzbewusste Nutzer, die detaillierte Cookie-Verwaltung benötigen.'
          },
          {
            question: 'Ist das Löschen von Cookies sicher? Beeinflusst es mein Surf-Erlebnis?',
            answer: 'Das Löschen von Cookies ist generell sicher, kann aber Ihr Surf-Erlebnis auf verschiedene Weise beeinflussen. Sie könnten von Websites abgemeldet werden, gespeicherte Einstellungen verlieren oder Warenkörbe neu erstellen müssen. Der <strong>Cookie-Manager</strong> erlaubt Ihnen, gezielt bestimmte Cookies zu löschen statt alle zu entfernen, sodass Sie genau kontrollieren können, welche Daten behalten oder gelöscht werden.'
          },
          {
            question: 'Was bedeuten verschiedene Cookie-Attribute wie "SameSite" und "HttpOnly"?',
            answer: 'Cookie-Attribute kontrollieren das Verhalten und den Zugriff auf Cookies:<br>- <strong>Secure</strong>: Cookie wird nur über HTTPS-Verbindungen gesendet<br>- <strong>HttpOnly</strong>: JavaScript kann nicht auf den Cookie zugreifen<br>- <strong>SameSite</strong>: Steuert, wann Cookies mit Cross-Site-Requests gesendet werden (None, Lax oder Strict)<br>- <strong>Domain</strong>: Gibt an, welche Domains den Cookie erhalten können<br>- <strong>Path</strong>: Beschränkt den Cookie auf bestimmte Pfade der Website<br>- <strong>Expires</strong>: Legt fest, wann der Browser den Cookie löschen soll'
          },
          {
            question: 'Kann ich mit diesem Tool Cookies von einem anderen Computer oder Browser importieren?',
            answer: 'Ja, die Import/Export-Funktion des <strong>Cookie-Managers</strong> ermöglicht Ihnen, Cookies zwischen Browsern oder Geräten zu übertragen. Exportieren Sie Ihre Cookies als JSON- oder Textdatei, übertragen Sie die Datei auf ein anderes Gerät und importieren Sie sie dort mit dem Cookie-Manager. Dies ist besonders nützlich für Entwickler, die Benutzerzustände replizieren müssen, oder für Nutzer, die Browsersitzungen zwischen Computern übertragen möchten.'
          }
        ]
      },
      guide: {
        title: 'Anleitung zur Verwendung des Cookie-Managers',
        step1: {
          title: 'Aktuelle Cookies anzeigen',
          description: 'Wenn Sie den <strong>Cookie-Manager</strong> öffnen, zeigt der Tab "Aktuelle Cookies" alle Cookies der aktuellen Website an. Diese Liste zeigt Name, Wert und Ablaufdatum jedes Cookies. Für detailliertere Informationen klicken Sie auf den "Bearbeiten"-Button neben einem Cookie. Klicken Sie auf "Aktualisieren", um sicherzustellen, dass Sie die aktuellsten Cookies sehen.'
        },
        step2: {
          title: 'Neuen Cookie erstellen',
          description: 'Um einen neuen Cookie hinzuzufügen, klicken Sie auf den "Cookie erstellen"-Tab. Füllen Sie die erforderlichen Felder (Name und Wert) sowie optionale Attribute wie Domain, Pfad oder Ablaufdatum aus. Konfigurieren Sie Sicherheitsoptionen wie Secure-Flag oder SameSite-Attribut nach Bedarf. Klicken Sie auf "Speichern", um den Cookie zu erstellen. Das Tool bestätigt den Erfolg und zeigt automatisch die aktualisierte Cookie-Liste.'
        },
        step3: {
          title: 'Bestehenden Cookie bearbeiten',
          description: 'Um einen Cookie zu ändern, finden Sie ihn in der Liste "Aktuelle Cookies" und klicken auf "Bearbeiten". Dies lädt die Cookie-Details in das Bearbeitungsformular. Nehmen Sie die gewünschten Änderungen an den Attributen vor und klicken Sie auf "Speichern", um den Cookie zu aktualisieren. Beachten Sie, dass das Bearbeiten eines Cookies technisch gesehen das Erstellen eines neuen Cookies mit aktualisierten Attributen ist.'
        },
        step4: {
          title: 'Cookie löschen',
          description: 'Um einen Cookie zu löschen, finden Sie ihn in der Liste und klicken auf "Löschen". Ein Bestätigungsdialog verhindert versehentliches Löschen. Nach Bestätigung wird der Cookie sofort aus Ihrem Browser entfernt und die Liste aktualisiert. Dies gibt Ihnen vollständige Kontrolle darüber, welche Daten Websites in Ihrem Browser speichern können.'
        },
        step5: {
          title: 'Cookies importieren und exportieren',
          description: 'Für den Cookie-Transfer navigieren Sie zum "Import/Export"-Tab. Beim Export wählen Sie zwischen JSON-Format (bessere Struktur) oder Textformat (bessere Kompatibilität) und klicken den entsprechenden Button zum Download. Beim Import fügen Sie die Cookie-Daten in das Textfeld ein und klicken auf "Importieren". Das Tool bestätigt den erfolgreichen Import und zeigt die Anzahl importierter Cookies an.'
        }
      },
      conclusion: 'Der <strong>Cookie-Manager</strong> gibt Ihnen vollständige Kontrolle über Browser-Cookies - egal ob Sie als Entwickler Website-Funktionen testen, als datenschutzbewusster Nutzer persönliche Daten verwalten oder einfach Website-Probleme beheben. Durch das Verstehen und aktive Verwalten von Cookies können Sie Ihr Surf-Erlebnis verbessern und gleichzeitig die Kontrolle über Ihre Online-Privatsphäre behalten.'
    }
  };