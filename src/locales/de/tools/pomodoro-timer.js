export default {
    name: 'Pomodoro-Timer',
    description: 'Steigern Sie Produktivität und Konzentration mit der Pomodoro-Technik',
    
    // Haupt-UI-Texte
    start: 'Starten',
    pause: 'Pause',
    reset: 'Zurücksetzen',
    skip: 'Überspringen',
    work: 'Arbeit',
    shortBreak: 'Kurze Pause',
    longBreak: 'Lange Pause',
    settings: 'Einstellungen',
    stats: 'Statistiken',
    
    // Einstellungen
    settingsTitle: 'Timer-Einstellungen',
    workDuration: 'Arbeitsdauer',
    shortBreakDuration: 'Dauer kurze Pause',
    longBreakDuration: 'Dauer lange Pause',
    cyclesBeforeLongBreak: 'Arbeitsintervalle vor langer Pause',
    enableSound: 'Audiomeldungen aktivieren',
    autoStartBreaks: 'Pausen automatisch starten',
    autoStartWork: 'Arbeit automatisch starten',
    minutes: 'Minuten',
    saveSettings: 'Einstellungen speichern',
    resetDefaults: 'Standardwerte wiederherstellen',
    
    // Statistiken
    statsTitle: 'Heutige Statistiken',
    completedPomodoros: 'Abgeschlossene Pomodoros',
    totalWorkTime: 'Gesamte Arbeitszeit',
    averageDailyPomodoros: 'Durchschnittliche Pomodoros pro Tag',
    currentStreak: 'Aktuelle Serie (Tage)',
    
    // Statusmeldungen
    workStarted: 'Arbeitsphase gestartet! Konzentrieren Sie sich auf die aktuelle Aufgabe.',
    shortBreakStarted: 'Kurze Pause gestartet. Entspannen Sie sich!',
    longBreakStarted: 'Lange Pause gestartet. Gönnen Sie sich eine ausgiebige Erholung!',
    pausedMessage: 'Timer pausiert',
    resetMessage: 'Timer zurückgesetzt',
    workCompleted: 'Arbeitsintervall abgeschlossen!',
    breakCompleted: 'Pausenzeit beendet!',
    
    // Anleitung
    aboutTitle: 'Über die Pomodoro-Technik',
    aboutDescription: 'Die Pomodoro-Technik ist eine Zeitmanagement-Methode, die von Francesco Cirillo in den späten 1980er Jahren entwickelt wurde. Die Technik unterteilt Arbeit in zeitlich begrenzte Intervalle (traditionell 25 Minuten), unterbrochen von kurzen Pausen. Diese Intervalle werden "Pomodoros" genannt, nach Cirillos ursprünglicher Küchenuhr in Tomatenform.',
    
    howToUseTitle: 'Anwendung',
    howToUseStep1: '1. Wählen Sie eine zu erledigende Aufgabe aus',
    howToUseStep2: '2. Stellen Sie den Pomodoro-Timer auf 25 Minuten ein (anpassbar in den Einstellungen)',
    howToUseStep3: '3. Arbeiten Sie konzentriert bis der Timer klingelt',
    howToUseStep4: '4. Machen Sie eine 5-minütige Pause',
    howToUseStep5: '5. Nach 4 Pomodoros gönnen Sie sich eine längere Pause (15-30 Minuten)',
    
    benefitsTitle: 'Vorteile der Pomodoro-Technik',
    benefit1: 'Steigert Aufmerksamkeit und Konzentration',
    benefit2: 'Reduziert Ablenkungen und Prokrastination',
    benefit3: 'Erhöht Motivation und Durchhaltevermögen',
    benefit4: 'Verbessert Work-Life-Balance',
    benefit5: 'Vermindert mentale Erschöpfung',
    
    tipsTitle: 'Anwendungstipps',
    tip1: 'Wählen Sie eine ruhige Umgebung mit minimalen Ablenkungen',
    tip2: 'Nutzen Sie Pausen vollständig zur Erholung - keine Arbeit!',
    tip3: 'Halten Sie konsistente Intervalllängen für bessere Gewöhnung',
    tip4: 'Nutzen Sie die Statistikfunktion zur Analyse Ihrer Arbeitsmuster',
    tip5: 'Kombinieren Sie mit Aufgabenlisten - ein Pomodoro pro Aufgabe',
    
    // Artikelinhalt
    article: {
      title: 'Pomodoro-Timer: Zeitmanagement für maximale Produktivität',
      features: {
        title: 'Funktionen und Anwendungsbereiche',
        description: 'Der <strong>Pomodoro-Timer</strong> ist ein leistungsstarkes Produktivitätstool basierend auf der berühmten Pomodoro-Technik von Francesco Cirillo. Diese Zeitmanagement-Methode unterteilt Arbeit in konzentrierte Intervalle (traditionell 25 Minuten, genannt "Pomodoros") mit kurzen Pausen dazwischen. Unser Timer erweitert diese Methode durch anpassbare Arbeits-/Pausenzeiten, Audiomeldungen, automatische Sitzungswechsel und detaillierte Produktivitätsstatistiken.',
        useCasesTitle: 'Praktische Anwendungsszenarien',
        useCases: {
          items: [
            '<strong>Lernfokus</strong>: Studierende nutzen den Timer für konzentrierte Lernblöcke mit regelmäßigen Pausen zur Vermeidung von Überlastung.',
            '<strong>Tiefenarbeit</strong>: Wissensarbeiter erreichen höhere Konzentration für komplexe Aufgaben wie Programmierung oder Datenanalyse.',
            '<strong>Prokrastinationsüberwindung</strong>: Der Timer hilft, überwältigende Aufgaben in handliche Portionen zu unterteilen.',
            '<strong>Remote-Arbeit</strong>: Heimarbeiter schaffen klare Grenzen zwischen Arbeits- und Erholungsphasen.',
            '<strong>Kreativarbeit</strong>: Künstler und Autoren balancieren kreative Flows mit notwendiger Erholung.',
            '<strong>Multitasking-Kontrolle</strong>: Professionelle verwalten verschiedene Projekte durch dedizierte Zeitblöcke.'
          ]
        }
      },
      faq: {
        title: 'Häufige Fragen',
        items: [
          {
            question: 'Welche Wissenschaft steckt hinter der Pomodoro-Technik?',
            answer: 'Die Pomodoro-Technik nutzt psychologische Prinzipien: Die begrenzte menschliche Aufmerksamkeitsspanne (25-45 Minuten), die Bedeutung regelmäßiger Pausen zur Vermeidung mentaler Erschöpfung und die motivierende Wirkung von Zeitlimits. Kognitionsstudien zeigen, dass Wechsel zwischen Fokus und Pause die mentale Leistung optimiert. Die Technik nutzt auch den Zeigarnik-Effekt - die Tendenz, unerledigte Aufgaben besser zu erinnern.'
          },
          {
            question: 'Wie passe ich Intervalle für verschiedene Aufgabentypen an?',
            answer: 'Verschiedene Aufgaben profitieren von unterschiedlichen <strong>Pomodoro-Längen</strong>:<br>- <strong>Komplexe Arbeit</strong> (Programmierung, Forschung): 30-45 Minuten<br>- <strong>Routineaufgaben</strong>: Standard 25 Minuten<br>- <strong>Kreativarbeit</strong>: Kürzere 15-20 Minuten oder längere 50 Minuten im Flow<br>- <strong>Lernen</strong>: Kürzere 15-20 Minuten für bessere Retention.<br>Experimentieren Sie mit den <strong>Timer-Einstellungen</strong> basierend auf Energielevel und Aufgabenschwierigkeit.'
          },
          {
            question: 'Hilft die Technik bei ADHS oder Konzentrationsschwierigkeiten?',
            answer: 'Ja, viele Menschen mit ADHS finden die <strong>Pomodoro-Technik</strong> besonders hilfreich. Die strukturierten Zeitblöcke schaffen externe Motivation und klare Grenzen, während häufige Pausen kürzeren Aufmerksamkeitsspannen entgegenkommen. Die Technik hilft, "Konzentrationsmuskeln" aufzubauen. Nützliche Anpassungen: Kürzere Arbeitsintervalle (15-20 Minuten), Bewegungspausen, visuelle Timer und Aufgabenlisten. Viele ADHS-Experten empfehlen <strong>Pomodoro-Timer</strong> als Teil produktiver Strategien.'
          },
          {
            question: 'Wie gehe ich mit Unterbrechungen um?',
            answer: 'Strategien für den Umgang mit Störungen:<br>1. <strong>Interne Unterbrechungen</strong> (eigene Gedanken): Kurz notieren und zurück zur Aufgabe.<br>2. <strong>Externe Unterbrechungen</strong> (Kollegen, Benachrichtigungen):<br>- <strong>Benachrichtigen-Verhandeln-Verschieben</strong>: Kurze Rückmeldung, Zeit vereinbaren.<br>- <strong>5-Minuten-Regel</strong>: Bei kurzen Unterbrechungen sofort reagieren, dann Timer neustarten.<br>3. <strong>Notfälle</strong>: Timer stoppen, Situation klären, neuen Pomodoro starten.<br>Merken Sie: Ein unterbrochener Pomodoro zählt nicht - besser neu starten als pausieren.'
          },
          {
            question: 'Wie tracke und verbessere ich meine Produktivität?',
            answer: 'Unser <strong>Pomodoro-Timer</strong> bietet integrierte Statistikfunktionen:<br>1. <strong>Tägliche Ziele setzen</strong>: Beginnen Sie realistisch (z.B. 6-8 Pomodoros), steigern Sie schrittweise.<br>2. <strong>Erfolgsrate tracken</strong>: Wie viele geplante Intervalle schaffen Sie?<br>3. <strong>Störungsmuster analysieren</strong>: Häufige Unterbrechungsquellen identifizieren.<br>4. <strong>Produktivitätstrends</strong>: Die Statistik zeigt Ihre produktivsten Zeiten.<br>5. <strong>Experimentieren</strong>: Verschiedene Arbeits-/Pausenlängen testen.<br>6. <strong>Serien feiern</strong>: Der Streak-Counter motiviert zur Konsistenz.<br>Dieser datenbasierte Ansatz hilft, Ihre Zeitmanagement-Methode zu verfeinern.'
          }
        ]
      },
      guide: {
        title: 'Pomodoro-Timer Anleitung',
        step1: {
          title: 'Timer einrichten',
          description: 'Passen Sie den <strong>Pomodoro-Timer</strong> an Ihre Präferenzen an. Im Einstellungsmenü können Sie Arbeitsdauer (standardmäßig 25 Minuten), Pausenlängen und Intervalle bis zur langen Pause (typisch 4) anpassen. Aktivieren Sie Audiomeldungen und automatische Sitzungswechsel. Klicken Sie "Einstellungen speichern" um Ihre Konfiguration zu übernehmen. Diese Anpassungen stellen sicher, dass der Timer zu Ihren persönlichen Konzentrationsmustern passt.'
        },
        step2: {
          title: 'Aufgaben planen',
          description: 'Bevor Sie den Timer starten, identifizieren und priorisieren Sie konkrete Aufgaben für die kommende Arbeitsphase. Für beste Ergebnisse brechen Sie große Projekte in kleinere, handhabbare Aufgaben herunter, die innerhalb eines Intervalls realistisch bearbeitet werden können. Eine klare Aufgabenliste verhindert Zeitverlust durch Entscheidungsfindung während der wertvollen Fokuszeit. Die <strong>Pomodoro-Technik</strong> funktioniert am besten in Kombination mit sorgfältiger Aufgabenplanung.'
        },
        step3: {
          title: 'Arbeitsphase starten',
          description: 'Wählen Sie den "Arbeit"-Modus und klicken Sie "Starten". Konzentrieren Sie sich ausschließlich auf die geplante Aufgabe bis der Timer klingelt. Das große Display zeigt die verbleibende Zeit an. Beseitigen Sie potenzielle Ablenkungen - stummschalten von Benachrichtigungen, schließen irrelevanter Tabs und informieren Sie Kollegen über Ihre Fokussitzung. Der <strong>Pomodoro-Timer</strong> schafft einen psychologischen Container für tiefe Arbeit - respektieren Sie diese Zeit mit voller Aufmerksamkeit.'
        },
        step4: {
          title: 'Pausen einhalten',
          description: 'Am Ende der Arbeitsphase signalisiert der Timer den Wechsel zur Pause (mit Sound, wenn aktiviert). Kurze Pausen (typisch 5 Minuten) folgen den meisten Arbeitsintervallen, längere Pausen (15-30 Minuten) nach mehreren Pomodoros. Nutzen Sie Pausen zur echten Erholung - dehnen, bewegen, Augen ausruhen, hydrieren oder kurze Achtsamkeitsübungen. Vermeiden Sie in kurzen Pausen E-Mails oder Social Media, da diese Aktivitäten leicht die Zeit überschreiten. Das <strong>Pomodoro-System</strong> benötigt echte Erholung zur Aufrechterhaltung kognitiver Frische.'
        },
        step5: {
          title: 'Fortschritt verfolgen',
          description: 'Der <strong>Pomodoro-Timer</strong> zeichnet automatisch abgeschlossene Sitzungen in der Statistik auf. Hier können Sie tägliche Pomodoros, Gesamtarbeitszeit, Durchschnittswerte und aktuelle Serie verfolgen. Nutzen Sie diese Metriken zum Verständnis Ihrer Produktivitätsmuster, Setzen von Verbesserungszielen und Aufrechterhaltung der Motivation durch sichtbaren Fortschritt. Mit der Zeit helfen diese Daten bei der Optimierung Ihrer Arbeitsgewohnheiten für maximale Effizienz und Output-Qualität.'
        }
      },
      conclusion: 'Der <strong>Pomodoro-Timer</strong> transformiert Ihre Arbeitsweise durch Strukturierung in optimale Fokus- und Erholungsphasen. Durch diese wissenschaftlich fundierte Zeitmanagement-Methode können Sie verbesserte Konzentration, weniger Prokrastination, höhere Arbeitsleistung und reduzierte mentale Erschöpfung erfahren. Die Technik ist flexibel anwendbar für Studierende, Fachleute, Kreative und alle, die Produktivität mit Wellness balancieren möchten. Durch kontinuierliche Anwendung entwickeln Sie ein besseres Bewusstsein für Ihren Umgang mit Zeit und stärken Ihre Fähigkeit zu fokussierter Arbeit - Fähigkeiten, die auf alle Lebensbereiche übertragbar sind.'
    }
  };