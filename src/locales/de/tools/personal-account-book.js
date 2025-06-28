export default {
    name: 'Persönliches Haushaltsbuch',
    description: 'Verfolgen Sie Ihre Einnahmen und Ausgaben mit diesem benutzerfreundlichen Finanz-Tool',
    tags: ['Finanzen', 'Buchhaltung', 'Budget', 'Geld', 'Ausgaben-Tracking', 'Persönliche Finanzen'],
    category: 'Praktische Tools',
    
    // UI-Elemente
    ui: {
      addTransaction: 'Transaktion hinzufügen',
      editTransaction: 'Transaktion bearbeiten',
      deleteTransaction: 'Transaktion löschen',
      income: 'Einnahme',
      expense: 'Ausgabe',
      transfer: 'Überweisung',
      date: 'Datum',
      amount: 'Betrag',
      category: 'Kategorie',
      account: 'Konto',
      description: 'Beschreibung',
      tags: 'Tags',
      save: 'Speichern',
      cancel: 'Abbrechen',
      confirm: 'Bestätigen',
      filter: 'Filtern',
      search: 'Suchen',
      clear: 'Zurücksetzen',
      overview: 'Übersicht',
      transactions: 'Transaktionen',
      statistics: 'Statistiken',
      budget: 'Budget',
      settings: 'Einstellungen',
      exportData: 'Daten exportieren',
      importData: 'Daten importieren',
      backup: 'Backup',
      restore: 'Wiederherstellen',
      currency: 'Währung',
      language: 'Sprache',
      theme: 'Design',
      darkMode: 'Dunkler Modus',
      lightMode: 'Heller Modus',
      resetData: 'Daten zurücksetzen',
      resetConfirmation: 'Sind Sie sicher, dass Sie alle Daten zurücksetzen möchten? Diese Aktion kann nicht rückgängig gemacht werden.',
      from: 'Von',
      to: 'Bis',
      filterByDate: 'Nach Datum filtern',
      noTransactions: 'Keine Transaktionen zum Anzeigen',
      allCategories: 'Alle Kategorien',
      addCategory: 'Kategorie hinzufügen',
      editCategory: 'Kategorie bearbeiten',
      deleteCategory: 'Kategorie löschen',
      categoryName: 'Kategoriename',
      categoryIcon: 'Kategorie-Icon',
      categoryColor: 'Kategoriefarbe',
      addAccount: 'Konto hinzufügen',
      editAccount: 'Konto bearbeiten',
      deleteAccount: 'Konto löschen',
      accountName: 'Kontoname',
      accountType: 'Kontotyp',
      accountBalance: 'Kontostand',
      totalIncome: 'Gesamteinnahmen',
      totalExpense: 'Gesamtausgaben',
      balance: 'Saldo',
      netWorth: 'Nettovermögen',
      daily: 'Täglich',
      weekly: 'Wöchentlich',
      monthly: 'Monatlich',
      yearly: 'Jährlich',
      today: 'Heute',
      thisWeek: 'Diese Woche',
      thisMonth: 'Dieser Monat',
      thisYear: 'Dieses Jahr',
      lastWeek: 'Letzte Woche',
      lastMonth: 'Letzter Monat',
      lastYear: 'Letztes Jahr',
      custom: 'Benutzerdefiniert',
      setBudget: 'Budget festlegen',
      budgetLimit: 'Budgetlimit',
      budgetPeriod: 'Budgetzeitraum',
      budgetCategory: 'Budgetkategorie',
      budgetAlert: 'Budgetwarnung',
      budgetUsage: 'Budgetnutzung',
      remaining: 'Verbleibend',
      spent: 'Ausgegeben',
      over: 'Überschritten',
      exportFormat: 'Exportformat',
      importFormat: 'Importformat',
      csv: 'CSV',
      json: 'JSON',
      selectFile: 'Datei auswählen',
      successfullyImported: 'Daten erfolgreich importiert',
      errorImporting: 'Fehler beim Importieren der Daten',
      successfullyExported: 'Daten erfolgreich exportiert',
      errorExporting: 'Fehler beim Exportieren der Daten',
      confirmDelete: 'Sind Sie sicher, dass Sie dieses Element löschen möchten?',
      recurringTransaction: 'Wiederkehrende Transaktion',
      frequency: 'Häufigkeit',
      startDate: 'Startdatum',
      endDate: 'Enddatum',
      never: 'Nie',
      daily: 'Täglich',
      weekly: 'Wöchentlich',
      monthly: 'Monatlich',
      yearly: 'Jährlich',
      note: 'Notiz',
      attachment: 'Anhang',
      dataSecurity: 'Datensicherheit',
      type: 'Typ',
      clearTransactions: 'Transaktionen löschen',
      confirmClearTransactions: 'Sind Sie sicher, dass Sie alle Transaktionen löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.',
      transactionsCleared: 'Alle Transaktionen wurden gelöscht',
      enterValidAmount: 'Bitte geben Sie einen gültigen Betrag ein',
      selectDate: 'Bitte wählen Sie ein Datum aus',
      selectCategory: 'Bitte wählen Sie eine Kategorie aus'
    },
    
    // Vordefinierte Kategorien
    categories: {
      income: {
        salary: 'Gehalt',
        freelance: 'Freiberuflich',
        investments: 'Investitionen',
        gifts: 'Geschenke',
        refunds: 'Rückerstattungen',
        other: 'Sonstige Einnahmen'
      },
      expense: {
        food: 'Essen',
        groceries: 'Lebensmittel',
        rent: 'Miete/Hypothek',
        utilities: 'Strom/Wasser/Gas',
        transportation: 'Transport',
        entertainment: 'Unterhaltung',
        shopping: 'Einkaufen',
        health: 'Gesundheit',
        education: 'Bildung',
        personal: 'Persönliche Pflege',
        travel: 'Reisen',
        insurance: 'Versicherung',
        taxes: 'Steuern',
        debt: 'Schuldentilgung',
        subscription: 'Abonnements',
        charity: 'Spenden',
        business: 'Geschäftliche Ausgaben',
        other: 'Sonstige Ausgaben'
      },
      transfer: {
        bank_transfer: 'Banküberweisung',
        savings: 'Ersparnisse',
        investment: 'Investition',
        debt_payment: 'Schuldenzahlung',
        other: 'Sonstige Überweisungen'
      }
    },
    
    // Kontotypen
    accountTypes: {
      cash: 'Bargeld',
      checking: 'Girokonto',
      savings: 'Sparkonto',
      creditCard: 'Kreditkarte',
      investment: 'Anlagekonto',
      loan: 'Darlehen',
      asset: 'Vermögenswert',
      other: 'Andere'
    },
    
    // Diagrammbeschriftungen
    charts: {
      incomeVsExpense: 'Einnahmen vs. Ausgaben',
      expenseByCategory: 'Ausgaben nach Kategorie',
      monthlyTrend: 'Monatlicher Trend',
      savingsRate: 'Sparquote',
      netWorthTrend: 'Nettovermögen Trend',
      budgetPerformance: 'Budgetperformance',
      topExpenseCategories: 'Top Ausgabenkategorien',
      cashFlow: 'Cashflow'
    },
    
    // Dokumentation
    documentation: {
      title: 'Über das persönliche Haushaltsbuch',
      introduction: 'Das persönliche Haushaltsbuch ist ein Tool zur Verwaltung Ihrer persönlichen Finanzen. Alle Daten werden in Ihrem Browser gespeichert, was Ihre finanziellen Informationen vollständig privat hält.',
      whyUse: {
        title: 'Warum das persönliche Haushaltsbuch verwenden?',
        points1: 'Vollständig privat - Alle Daten werden lokal gespeichert und nicht an Server gesendet',
        points2: 'Einfache Oberfläche - Übersichtliches Design für einfache Transaktionserfassung',
        points3: 'Datenvisualisierung - Verstehen Sie Ihre Ausgabengewohnheiten durch Diagramme',
        points4: 'Anpassbare Kategorien - Erstellen Sie benutzerdefinierte Einnahmen- und Ausgabenkategorien',
        points5: 'Datenexport - Exportieren Sie Daten im CSV-Format für Backups oder Analysen'
      },
      tips: {
        title: 'Anwendungstipps',
        points1: 'Erfassen Sie Transaktionen regelmäßig für aktuelle Daten',
        points2: 'Nutzen Sie Tags für detailliertere Ausgabenkategorisierung',
        points3: 'Setzen Sie monatliche Budgets zur Ausgabenkontrolle',
        points4: 'Exportieren Sie regelmäßig Daten als Backup',
        points5: 'Nutzen Sie Statistiken zur Identifikation von Ausgabenmustern'
      },
      dataStorage: {
        title: 'Datenspeicherung',
        content: 'Alle Ihre Finanzdaten werden ausschließlich im lokalen Speicher Ihres Browsers gespeichert. Das bedeutet, dass Ihre Daten Ihr Gerät nie verlassen. Beachten Sie jedoch, dass das Löschen von Browserdaten auch Ihre Haushaltsbuchdaten löscht - exportieren Sie daher regelmäßig.'
      }
    },
    
    // Artikel
    article: {
      title: "Persönliches Haushaltsbuch: Verwalten Sie Ihre finanzielle Gesundheit",
      features: {
        title: "Persönliche Finanzverwaltung verstehen",
        description: "Das persönliche Haushaltsbuch ist ein umfassendes Finanzmanagement-Tool, das Ihnen hilft, Ihre finanzielle Situation zu kontrollieren. Dieser leistungsstarke Ausgaben-Tracker bietet eine sichere, private Plattform zur Erfassung von Einnahmen und Ausgaben, Überwachung Ihrer Cashflows und Analyse Ihrer Finanzmuster - ohne dass Daten mit externen Servern geteilt werden.<br><br>Unser persönliches Finanzmanagement-Tool bietet Funktionen wie Transaktionskategorisierung, Budgetplanung, statistische Visualisierungen und Datenexport. Die intuitive Oberfläche macht die tägliche Finanzverfolgung einfach, während erweiterte Berichtsfunktionen tiefere Einblicke in Ihre Ausgabengewohnheiten und Sparmuster bieten. Egal ob Sie Schulden abbauen, für größere Anschaffungen sparen oder einfach besser verstehen möchten, wohin Ihr Geld fließt - dieses Budgetplanungstool bietet alle notwendigen Funktionen für effektives Finanzmanagement.",
        useCases: {
          title: "Praktische Anwendungsfälle für persönliche Budgets",
          items: [
            "Studenten verfolgen Semesterausgaben und Taschengeld, um übermäßige Ausgaben für Nicht-Essentielles zu vermeiden",
            "Freiberufler überwachen projektbasierte Einnahmen gegenüber regelmäßigen Ausgaben für stabilen Cashflow",
            "Junge Berufstätige erstellen Sparpläne für große Ziele wie Eigenheim, analysieren Ausgabenmuster",
            "Familien verwalten Haushaltsbudgets, verfolgen gemeinsame Ausgaben und planen zukünftige Kosten",
            "Kleinunternehmer trennen private und geschäftliche Ausgaben bei vollständigem Finanzüberblick",
            "Rentner überwachen feste Einkommensquellen und monatliche Ausgaben für nachhaltige Ersparnisse"
          ]
        }
      },
      faq: {
        title: "Häufige Fragen zur persönlichen Finanzverwaltung",
        items: [
          {
            question: "Sind meine Finanzdaten sicher mit diesem Haushaltsbuch?",
            answer: "Absolut sicher. Ihre Finanzdaten sind unsere Priorität. Das Haushaltsbuch speichert alle Informationen ausschließlich lokal in Ihrem Browser - Ihre sensiblen Daten verlassen nie Ihr Gerät und werden nicht an Server übertragen. Keine Konten oder Logins erforderlich, was den Datenschutz weiter erhöht. Beachten Sie jedoch, dass lokale Speicherung regelmäßige Datenexporte als Backup erfordert, da Browserdatenlöschungen Ihre Aufzeichnungen entfernen. Diese Balance aus Privatsphäre und lokaler Verantwortung gibt Ihnen volle Kontrolle."
          },
          {
            question: "Wie hilft die Budgetverfolgung beim Sparen?",
            answer: "Unsere Budgetverfolgung ist ein mächtiges Werkzeug zur Erhöhung Ihrer Ersparnisse durch Schaffung finanzieller Bewusstheit. Sie können für verschiedene Ausgabenkategorien (Lebensmittel, Unterhaltung, Nebenkosten etc.) spezifische Limits setzen und Ausgaben in Echtzeit vergleichen. Visuelle Warnungen bei Annäherung an Limits helfen, übermäßige Ausgaben zu verhindern. Monatliche und kategoriebasierte Berichte zeigen Ausgabenmuster und mögliche Einsparbereiche auf. Dieser umfassende Budgetüberblick schafft einen Feedbackkreislauf, der bewusste Ausgabenentscheidungen und bessere Finanzgewohnheiten fördert."
          },
          {
            question: "Kann ich mehrere Konten oder Währungen verfolgen?",
            answer: "Ja, unser Ausgaben-Tracker unterstützt vollständig die Verwaltung mehrerer Konten und Währungen. Sie können verschiedene Kontotypen anlegen und überwachen - Bargeld, Girokonten, Sparkonten, Kreditkarten und Anlagekonten - alles in einem Dashboard. Für Nutzer mit mehreren Währungen ermöglicht das Tool die Definition verschiedener Währungstypen und Umrechnungsberechnungen. Überweisungsfunktionen erfassen Kontobewegungen und erhalten genaue Salden. Diese Multikonto-Funktionalität bietet einen vollständigen Überblick über Ihre Finanzen statt fragmentierter Ansichten auf verschiedenen Plattformen."
          },
          {
            question: "Wie detailliert sind Finanzberichte und Visualisierungen?",
            answer: "Die Finanzberichte und Visualisierungen bieten außergewöhnliche Tiefe bei benutzerfreundlicher Darstellung. Das Analyse-Dashboard enthält verschiedene Diagrammtypen: Einnahmen-Ausgaben-Vergleiche, kategoriebasierte Ausgabenaufschlüsselungen, monatliche Trendanalysen und Sparquoten-Tracking. Berichte können nach Datumsbereichen, Kategorien, Tags oder Konten gefiltert werden. Interaktive Diagramme ermöglichen Drill-downs zu Transaktionsdetails. Diese umfassenden Analysen verwandeln Rohdaten in handlungsrelevante Erkenntnisse, helfen Ausgabenmuster zu identifizieren, Budgetperformance zu verfolgen und fundierte Finanzentscheidungen zu treffen."
          },
          {
            question: "Wie unterscheidet sich dieses Tool von Banking-Apps?",
            answer: "Im Gegensatz zu Banking-Apps, die sich auf Kontostände und Transaktionen einzelner Institute konzentrieren, bietet unser Finanzmanager umfassende übergreifende Übersicht mit vollständiger Privatsphäre. Banking-Apps zeigen Vergangenes, unser Tool betont Planung, Budgetierung und Analyse mit anpassbaren Kategorien für Ihre spezifische Situation. Banking-Apps bieten oft nur grundlegende Auswertungen, während unser Tool tiefgehende Berichte bereitstellt. Entscheidend ist, dass unsere Lösung Daten lokal speichert - Sie behalten volle Kontrolle und Datenschutz, anders als Banking-Apps, die Daten auf ihren Servern speichern."
          }
        ]
      },
      guide: {
        title: "Schritt-für-Schritt-Anleitung zur Finanzverwaltung",
        steps: [
          "Beginnen Sie mit dem Übersichts-Dashboard für einen vollständigen Finanzüberblick inklusive Gesamteinnahmen, -ausgaben und Kontoständen",
          "Richten Sie Konten ein via 'Konto hinzufügen', erfassen Sie Name, Typ (Girokonto, Sparkonto etc.) und aktuellen Stand",
          "Erfassen Sie Transaktionen durch 'Transaktion hinzufügen', wählen Sie Typ (Einnahme, Ausgabe, Überweisung) und erfassen Sie Datum, Betrag, Kategorie und Konto",
          "Erstellen Sie Budgets im Budget-Bereich durch Setzen monatlicher Limits für Ausgabenkategorien zur Ausgabenkontrolle",
          "Analysieren Sie Ausgabenmuster im Statistikbereich mittels Diagrammen zur Identifikation möglicher übermäßiger Ausgaben",
          "Überprüfen Sie regelmäßig den Transaktionsverlauf auf Richtigkeit und korrekte Kategorisierung",
          "Exportieren Sie regelmäßig Daten via 'Daten exportieren' als CSV- oder JSON-Backup gegen versehentlichen Datenverlust"
        ]
      },
      conclusion: "Das persönliche Haushaltsbuch verwandelt die oft entmutigende Aufgabe der Finanzverwaltung in einen einfachen, sogar anregenden Prozess. Durch sichere Erfassung von Ausgaben, Überwachung von Einnahmen und Visualisierung von Ausgabenmustern gibt dieses Tool beispiellose Einblicke in Ihre Finanzgewohnheiten. Durch fortlaufende Nutzung gewinnen Sie tiefes Verständnis Ihrer finanziellen Situation und identifizieren Optimierungsmöglichkeiten. Egal ob Schuldenabbau, Vermögensaufbau oder einfach bessere finanzielle Übersicht - kontinuierliche Nutzung dieses Finanzmanagers führt zu verbesserter finanzieller Gesundheit und größerer wirtschaftlicher Zufriedenheit."
    }
  }