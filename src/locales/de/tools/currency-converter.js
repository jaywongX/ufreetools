export default {
    name: 'Währungsrechner',
    description: 'Schnelle und präzise Umrechnung und Wechselkursabfrage zwischen verschiedenen Währungen',
    
    // Hauptoberflächentexte
    amount: 'Betrag',
    from: 'Von',
    to: 'Zu',
    convert: 'Umrechnen',
    result: 'Umrechnungsergebnis',
    swap: 'Währungen tauschen',
    rate: 'Aktueller Wechselkurs',
    lastUpdated: 'Letzte Aktualisierung',
    addCurrency: 'Währung hinzufügen',
    
    // Verlauf
    history: 'Verlauf',
    clearHistory: 'Verlauf löschen',
    noHistory: 'Keine Verlaufseinträge',
    
    // Währungen
    currencies: {
      USD: 'US-Dollar',
      EUR: 'Euro',
      JPY: 'Japanischer Yen',
      GBP: 'Britisches Pfund',
      AUD: 'Australischer Dollar',
      CAD: 'Kanadischer Dollar',
      CHF: 'Schweizer Franken',
      CNY: 'Chinesischer Yuan',
      HKD: 'Hongkong-Dollar',
      NZD: 'Neuseeland-Dollar',
      SEK: 'Schwedische Krone',
      KRW: 'Südkoreanischer Won',
      SGD: 'Singapur-Dollar',
      NOK: 'Norwegische Krone',
      MXN: 'Mexikanischer Peso',
      INR: 'Indische Rupie',
      RUB: 'Russischer Rubel',
      ZAR: 'Südafrikanischer Rand',
      TRY: 'Türkische Lira',
      BRL: 'Brasilianischer Real',
      TWD: 'Neuer Taiwan-Dollar',
      DKK: 'Dänische Krone',
      PLN: 'Polnischer Złoty',
      THB: 'Thailändischer Baht',
      IDR: 'Indonesische Rupiah',
      MYR: 'Malaysischer Ringgit',
      PHP: 'Philippinischer Peso'
    },
    
    // Fehlermeldungen
    errors: {
      invalidAmount: 'Bitte geben Sie einen gültigen Betrag ein',
      apiError: 'Fehler beim Abrufen der Wechselkursdaten',
      samecurrencies: 'Bitte wählen Sie unterschiedliche Währungen für die Umrechnung'
    },
    
    // Hinweise und Informationen
    tips: {
      offline: 'Offline-Modus: Es werden die zuletzt zwischengespeicherten Wechselkursdaten angezeigt',
      refreshing: 'Wechselkursdaten werden aktualisiert...'
    },
    
    // Historische Kurse
    historicalRates: 'Historische Kurse',
    dateRange: 'Zeitraum',
    from7days: 'Letzte 7 Tage',
    from30days: 'Letzte 30 Tage',
    from90days: 'Letzte 90 Tage',
    customRange: 'Benutzerdefinierter Zeitraum',
    startDate: 'Startdatum',
    endDate: 'Enddatum',
    viewChart: 'Diagramm anzeigen',
    
    // Einstellungen
    settings: 'Einstellungen',
    decimalPlaces: 'Nachkommastellen',
    autoUpdate: 'Wechselkurse automatisch aktualisieren',
    defaultCurrency: 'Standardwährung',
    
    // Tool-Beschreibung
    aboutTitle: 'Über den Währungsrechner',
    aboutDescription: 'Der Währungsrechner ist eine einfache und effiziente Anwendung zur Währungsumrechnung, die Ihnen hilft, schnell und präzise zwischen verschiedenen Währungen zu konvertieren. Egal ob für Reiseplanung, internationalen Handel oder Investitionsforschung - dieses Tool erfüllt Ihre Anforderungen.',
    
    featuresTitle: 'Hauptfunktionen',
    feature1: 'Unterstützung für Umrechnungen zwischen über 30 Hauptwährungen',
    feature2: 'Echtzeit-Abruf der aktuellen Marktwechselkurse',
    feature3: 'Schnelle und intuitive Währungsumrechnungen',
    feature4: 'Abfrage historischer Wechselkursdaten und Diagrammdarstellung',
    feature5: 'Speicherung des Umrechnungsverlaufs zur Wiederverwendung',
    feature6: 'Anpassbare Anzeigeeinstellungen und Standardwährung',
    
    howToUseTitle: 'Bedienungsanleitung',
    howToUseStep1: '1. Geben Sie den umzurechnenden Betrag ein',
    howToUseStep2: '2. Wählen Sie die Ausgangswährung (von welcher Währung)',
    howToUseStep3: '3. Wählen Sie die Zielwährung (in welche Währung)',
    howToUseStep4: '4. Klicken Sie auf "Umrechnen" für das Ergebnis',
    howToUseStep5: '5. Nutzen Sie die "Währungen tauschen"-Funktion für schnelle Richtungswechsel',
    
    tipsTitle: 'Anwendungstipps',
    tip1: 'Wechselkursdaten werden stündlich aktualisiert für präzise Ergebnisse',
    tip2: 'Fügen Sie häufig genutzte Währungen zu Ihrer Favoritenliste hinzu',
    tip3: 'Nutzen Sie die historische Diagrammfunktion zur Trendanalyse',
    tip4: 'Umrechnungsergebnisse werden automatisch im Verlauf gespeichert',
    tip5: 'Im Offline-Modus werden zuletzt zwischengespeicherte Kurse verwendet'
  };