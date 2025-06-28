export default {
    name: 'Reisebudgetplaner',
    description: 'Planen und berechnen Sie Ihr Reisebudget, verwalten Sie einfach Ihre Reiseausgaben',
    
    // Hauptoberflächenelemente
    planYourTrip: 'Planen Sie Ihre Reise',
    destination: 'Zielort',
    startDate: 'Startdatum',
    endDate: 'Enddatum',
    travelers: 'Anzahl der Reisenden',
    currency: 'Anzeigewährung',
    tripDuration: 'Reisedauer (Tage)',
    totalBudget: 'Gesamtbudget',
    perPersonBudget: 'Budget pro Person',
    perDayBudget: 'Tagesbudget',
    
    // Buttons und Aktionen
    calculate: 'Budget berechnen',
    reset: 'Zurücksetzen',
    addExpense: 'Ausgabenposten hinzufügen',
    removeExpense: 'Entfernen',
    saveAsPDF: 'Als PDF speichern',
    
    // Kategorietitel
    categories: {
      transport: 'Transport',
      accommodation: 'Unterkunft',
      food: 'Verpflegung',
      activities: 'Aktivitäten und Sehenswürdigkeiten',
      shopping: 'Einkaufen',
      misc: 'Sonstige Kosten',
      emergency: 'Notfallreserve'
    },
    
    // Transportoptionen
    transport: {
      title: 'Transportkosten',
      flight: 'Flugtickets',
      train: 'Zug',
      bus: 'Bus',
      car: 'Mietwagen/Kraftstoff',
      taxi: 'Taxi/Ridesharing',
      publicTransport: 'Öffentliche Verkehrsmittel',
      other: 'Anderer Transport'
    },
    
    // Unterkunftsoptionen
    accommodation: {
      title: 'Unterkunftskosten',
      hotel: 'Hotel',
      hostel: 'Jugendherberge',
      apartment: 'Ferienwohnung/Apartment',
      camping: 'Camping',
      other: 'Andere Unterkunft'
    },
    
    // Verpflegungsoptionen
    food: {
      title: 'Verpflegungskosten',
      restaurants: 'Restaurantbesuche',
      streetFood: 'Straßenimbiss',
      groceries: 'Lebensmitteleinkauf',
      drinks: 'Getränke/Alkohol',
      other: 'Andere Verpflegung'
    },
    
    // Aktivitätenoptionen
    activities: {
      title: 'Aktivitäten und Sehenswürdigkeiten',
      attractions: 'Eintrittskarten',
      tours: 'Führungen/Gruppenaktivitäten',
      entertainment: 'Unterhaltungsaktivitäten',
      other: 'Andere Aktivitäten'
    },
    
    // Sonstige Kosten
    misc: {
      title: 'Sonstige Kosten',
      insurance: 'Reiseversicherung',
      visa: 'Visagebühren',
      souvenirs: 'Souvenirs',
      internet: 'Internetkosten',
      tips: 'Trinkgeld',
      other: 'Sonstige Nebenkosten'
    },
    
    // Tabellentitel
    table: {
      category: 'Kategorie',
      description: 'Beschreibung',
      amount: 'Betrag',
      actions: 'Aktionen'
    },
    
    // Statistik und Analyse
    analysis: {
      title: 'Budgetanalyse',
      summary: 'Budgetzusammenfassung',
      breakdown: 'Ausgabenaufschlüsselung',
      distribution: 'Budgetverteilung',
      dailyAverage: 'Tagesdurchschnitt',
      suggestions: 'Budgetvorschläge'
    },
    
    // Währungen
    currencies: {
      CNY: 'Chinesischer Yuan (¥)',
      USD: 'US-Dollar ($)',
      EUR: 'Euro (€)',
      JPY: 'Japanischer Yen (¥)',
      GBP: 'Britisches Pfund (£)',
      KRW: 'Südkoreanischer Won (₩)',
      AUD: 'Australischer Dollar ($)',
      CAD: 'Kanadischer Dollar ($)',
      THB: 'Thailändischer Baht (฿)',
      SGD: 'Singapur-Dollar ($)'
    },
    
    // Beliebte Ziele
    destinations: {
      domestic: 'Inländische Ziele',
      international: 'Internationale Ziele',
      popularCities: 'Beliebte Städte',
      beijing: 'Peking',
      shanghai: 'Shanghai',
      guangzhou: 'Guangzhou',
      shenzhen: 'Shenzhen',
      hangzhou: 'Hangzhou',
      chengdu: 'Chengdu',
      xian: 'Xi\'an',
      sanya: 'Sanya',
      tokyo: 'Tokio',
      osaka: 'Osaka',
      seoul: 'Seoul',
      bangkok: 'Bangkok',
      singapore: 'Singapur',
      paris: 'Paris',
      london: 'London',
      newyork: 'New York',
      sydney: 'Sydney',
      custom: 'Benutzerdefinierter Zielort'
    },
    
    // Tipps und Vorschläge
    tips: {
      general: 'Allgemeine Tipps',
      saveMoney: 'Geldspartipps',
      localCurrency: 'Tipps zur lokalen Währung',
      emergencyFund: 'Empfohlen: 10-15% des Gesamtbudgets als Notfallreserve einplanen',
      transport: 'Frühbucherrabatte für Flüge können Kosten sparen',
      accommodation: 'Unterkünfte mit Küche können Verpflegungskosten senken',
      food: 'Lokale preiswerte Küche ist oft günstiger als internationale Ketten',
      planning: 'Detaillierte Tagesplanung hilft bei der Budgetkontrolle',
      extraCosts: 'Vergessen Sie nicht kleine Ausgaben wie Trinkgeld, Internet und Verkehrskarten'
    },
    
    // Meldungen
    messages: {
      success: 'Budget erfolgreich berechnet',
      error: 'Bitte füllen Sie alle Pflichtfelder aus',
      dateError: 'Enddatum muss nach dem Startdatum liegen',
      saved: 'Budgetplan gespeichert',
      deleted: 'Budgetplan gelöscht',
      highBudget: 'Ihr Budget scheint über dem Durchschnitt für dieses Ziel zu liegen',
      lowBudget: 'Ihr Budget könnte zu niedrig sein - stellen Sie sicher, dass alle notwendigen Ausgaben abgedeckt sind'
    },
    
    // Fußzeileninformation
    about: {
      title: 'Über den Reisebudgetplaner',
      description: 'Der Reisebudgetplaner ist ein Tool, das Ihnen hilft, Ihre Reiseausgaben zu verwalten, damit Ihre Reise sowohl angenehm als auch wirtschaftlich ist. Durch detaillierte Planung aller Ausgaben vermeiden Sie finanzielle Belastungen während der Reise und können das Reiseerlebnis voll genießen.',
      
      featuresTitle: 'Hauptfunktionen',
      feature1: 'Erstellung eines angemessenen Budgets basierend auf Reiseziel, Dauer und Personenzahl',
      feature2: 'Aufschlüsselung verschiedener Reiseausgaben wie Transport, Unterkunft, Verpflegung und Aktivitäten',
      feature3: 'Budgetanalyse und visuelle Darstellung',
      feature4: 'Unterstützung mehrerer Anzeigewährungen und Umrechnung',
      feature5: 'Praktische Tipps zum Sparen von Reisekosten',
      feature6: 'Export- und Speichermöglichkeiten für Budgetpläne',
      
      benefitsTitle: 'Vorteile',
      benefit1: 'Vermeidung von Budgetüberschreitungen während der Reise',
      benefit2: 'Gerechte Verteilung der Mittel auf verschiedene Reiseaspekte',
      benefit3: 'Reduzierung des finanziellen Drucks während der Reise',
      benefit4: 'Steigerung der Effizienz bei der Reiseplanung',
      benefit5: 'Anpassung an verschiedene Reisestile und Budgetanforderungen',
      
      tipsTitle: 'Budgetplanungstipps',
      tip1: 'Passen Sie das Budget an die Lebenshaltungskosten am Zielort an',
      tip2: 'Planen Sie 10-15% des Budgets für unvorhergesehene Umstände ein',
      tip3: 'Reisen in der Nebensaison können Unterkunfts- und Transportkosten deutlich senken',
      tip4: 'Achten Sie bei Kreditkartennutzung auf Auslandseinsatzgebühren',
      tip5: 'Erwägen Sie den Abschluss einer Reiseversicherung für mögliche Notfälle'
    }
  };