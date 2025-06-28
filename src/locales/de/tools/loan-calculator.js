export default {
    name: 'Kreditrechner',
    description: 'Berechnet monatliche Raten, Gesamtzinsen und Tilgungspläne für Hypotheken, Autokredite und Privatdarlehen',
    
    // Hauptoberflächentexte
    loanType: 'Kreditart',
    housingLoan: 'Hypothekendarlehen',
    carLoan: 'Autokredit',
    personalLoan: 'Privatkredit',
    
    loanAmount: 'Kreditsumme',
    loanTerm: 'Laufzeit',
    interestRate: 'Jahreszins',
    paymentMethod: 'Tilgungsart',
    equalPrincipalAndInterest: 'Annuitätentilgung',
    equalPrincipal: 'Ratentilgung',
    
    calculate: 'Berechnen',
    reset: 'Zurücksetzen',
    tip: 'Bitte zuerst Tilgungsplan berechnen',
    
    years: 'Jahre',
    months: 'Monate',
    amount: 'Betrag',
    currency: 'Währung',
    CNY: 'Chinesischer Yuan (¥)',
    USD: 'US-Dollar ($)',
    EUR: 'Euro (€)',
    JPY: 'Japanischer Yen (¥)',
    GBP: 'Britisches Pfund (£)',
    
    // Ergebnisbereich
    results: 'Ergebnisse',
    monthlyPayment: 'Monatliche Rate',
    firstMonthPayment: 'Erste Rate',
    lastMonthPayment: 'Letzte Rate',
    totalInterest: 'Gesamtzinsen',
    totalPayment: 'Gesamtrückzahlung',
    interestRatio: 'Zinsanteil',
    
    // Tilgungsplan
    paymentSchedule: 'Tilgungsplan',
    downloadExcel: 'Excel exportieren',
    paymentNo: 'Nr.',
    paymentDate: 'Zahlungsdatum',
    principal: 'Tilgung',
    interest: 'Zinsen',
    payment: 'Rate',
    remainingPrincipal: 'Restschuld',
    
    // Diagramme
    paymentChart: 'Rückzahlungsanalyse',
    principalAndInterest: 'Tilgung vs. Zinsen',
    monthlyPaymentTrend: 'Ratenentwicklung',
    
    // Tool-Informationen
    aboutTitle: 'Über den Kreditrechner',
    aboutDescription: 'Der Kreditrechner hilft Ihnen, verschiedene Kreditoptionen zu analysieren - für Hypotheken, Autokredite oder Privatdarlehen - damit Sie die Gesamtkosten klar verstehen.',
    
    featuresTitle: 'Hauptfunktionen',
    feature1: 'Unterstützt Annuitätentilgung und Ratentilgung',
    feature2: 'Berechnet monatliche Raten, Gesamtzinsen und Gesamtrückzahlung',
    feature3: 'Erstellt detaillierte Tilgungspläne',
    feature4: 'Visuelle Darstellung von Tilgung und Zinsen',
    feature5: 'Unterstützung für verschiedene Währungen',
    
    usageTitle: 'Bedienungsanleitung',
    usageStep1: 'Kreditart auswählen (Hypothek, Autokredit oder Privatkredit)',
    usageStep2: 'Kreditsumme, Laufzeit und Zinssatz eingeben',
    usageStep3: 'Tilgungsart wählen (Annuität oder Raten)',
    usageStep4: '"Berechnen" klicken für detaillierte Ergebnisse',
    usageStep5: 'Tilgungsplan und Diagramme analysieren',
    
    explanationTitle: 'Erklärung der Tilgungsarten',
    explanationEqualPayment: 'Annuitätentilgung: Gleichbleibende monatliche Raten, wobei der Zinsanteil sinkt und der Tilgungsanteil steigt.',
    explanationEqualPrincipal: 'Ratentilgung: Gleichbleibende Tilgungsbeträge mit sinkenden Zinsen, daher fallende monatliche Raten.',
    
    tipsTitle: 'Tipps zur Kreditberechnung',
    tip1: 'Längere Laufzeiten reduzieren die monatliche Belastung, erhöhen aber die Gesamtzinsen',
    tip2: 'Ratentilgung spart Zinsen, hat aber höhere Anfangsraten',
    tip3: 'Sondertilgungen reduzieren die Zinskosten, besonders zu Kreditbeginn',
    tip4: 'Vergleichen Sie verschiedene Kreditoptionen für Ihre finanzielle Situation',
    
    article: {
      title: "Umfassender Leitfaden zum Kreditrechner: Verstehen Sie Ihre Hypotheken-, Auto- und Privatkreditoptionen",
      intro: {
        title: "Moderne Kreditberechnung verstehen",
        p1: "<b>Kreditrechner</b> sind in der heutigen komplexen Finanzwelt unverzichtbare Planungstools. Unser umfassender Kreditrechner vereinfacht das Verständnis der wahren Kreditkosten - egal ob für Immobilienkäufe, Autofinanzierungen oder Privatdarlehen. Durch detaillierte Tilgungspläne, Zinsaufschlüsselungen und Gesamtkostenanalysen hilft das Tool Kreditnehmern, fundierte Entscheidungen zu treffen, bevor sie langfristige finanzielle Verpflichtungen eingehen.",
        p2: "<b>Finanztransparenz</b> ist entscheidend bei der Kreditbewertung. Unser Rechner zeigt nicht nur monatliche Raten, sondern komplette Rückzahlungspläne, Gesamtzinskosten und das Verhältnis von Zinsen zu Tilgung. Dies hilft zu verstehen, wie unterschiedliche Laufzeiten, Zinssätze und Tilgungsmethoden Ihre langfristigen Verpflichtungen beeinflussen. Ob Sie Kreditangebote vergleichen, Umschuldungen prüfen oder einfach budgetieren - präzise Kreditberechnungen können Tausende an Zinskosten sparen und finanzielle Überlastung vermeiden.",
        p3: "<b>Hypotheken, Autokredite und Privatdarlehen</b> haben jeweils spezifische Bedingungen. Unser vielseitiger Rechner behandelt alle drei Kreditarten und passt Parameter automatisch an, während vollständige Anpassungen möglich sind. Durch Visualisierung der langfristigen Auswirkungen können Sie strategisch die für Ihre finanziellen Ziele besten Konditionen wählen - ob Minimierung der Gesamtzinsen, Reduzierung der monatlichen Belastung oder ein optimaler Kompromiss."
      },
      useCases: {
        title: "Praktische Anwendungen des Kreditrechners",
        case1: "<h3>Hypothekenplanung und -vergleich</h3><p><b>Hypothekenberechnungen</b> sind die wichtigste Anwendung, da Immobilien die größten Anschaffungen darstellen. Der Rechner vergleicht unterschiedliche Anzahlungen und deren Einfluss auf Beleihungsauslauf und monatliche Raten. Die Gegenüberstellung von 15- und 30-jährigen Hypotheken zeigt nicht nur Ratenunterschiede, sondern auch die erheblichen Unterschiede in den Gesamtzinskosten. Für bestehende Kreditnehmer ist der Rechner wertvoll für Umschuldungsentscheidungen und die Bewertung von Sondertilgungen.</p>",
        case2: "<h3>Optimierung von Autofinanzierungen</h3><p><b>Autokreditberechnungen</b> bringen Transparenz in oft undurchsichtige Finanzierungsangebote. Der Rechner zeigt, wie längere Laufzeiten (immer häufiger bei Autokrediten) die Gesamtzinsen erhöhen, trotz niedrigerer Monatsraten. Nutzer können Sonderfinanzierungen mit günstigeren externen Angeboten vergleichen und optimale Anzahlungen bestimmen, die Barzahlung und langfristige Zinskosten ausbalancieren.</p>",
        case3: "<h3>Privatkreditbudgetierung</h3><p><b>Privatkreditplanung</b> erfordert sorgfältige Prüfung, wie neue Schulden in bestehende Budgets passen. Der Rechner hilft bei der Bestimmung erschwinglicher Kreditsummen basierend auf der gewünschten Monatsrate, nicht einfach der maximal möglichen Kredithöhe. Für Schuldenkonsolidierungen ermöglicht das Tool genaue Vergleiche zwischen aktuellen und potenziellen neuen Kreditbedingungen, um echte Einsparungen zu verifizieren.</p>",
        case4: "<h3>Finanzbildung</h3><p><b>Finanzielle Bildung</b> wird durch unseren Rechner gefördert, der Zinseszins und Tilgungsmechanismen veranschaulicht. Bildungsanbieter nutzen solche Tools, um die Auswirkungen früherer Tilgungen oder kleiner Zinsunterschiede auf die Gesamtkosten zu demonstrieren. Für junge Menschen machen visuelle Tilgungspläne abstrakte Finanzkonzepte greifbar und betonen, dass Kredite nicht nur kurzfristige Zahlungsfähigkeit, sondern langfristige Kosten betreffen.</p>",
        case5: "<h3>Geschäftliche Investitionsanalysen</h3><p><b>Unternehmenskreditbewertungen</b> helfen Geschäftsinhabern, Finanzierungskosten gegen erwartete Erträge abzuwägen. Der Rechner ermöglicht schnelle Analysen von Ausrüstungsfinanzierungen, Expansionen oder Bestandskäufen. Immobilieninvestoren bewerten Cashflow-Auswirkungen verschiedener Finanzierungsoptionen. Unternehmen verstehen durch verschiedene Rückzahlungsstrategien ihre Liquiditätssituation besser und treffen nachhaltige Wachstumsentscheidungen.</p>"
      },
      loanMethods: {
        title: "Unterschiedliche Rückzahlungsmethoden verstehen",
        method1: {
          title: "Annuitätentilgung (gleichbleibende Raten)",
          description: "<p><b>Annuitätentilgung</b> strukturiert Kreditrückzahlungen mit konstanten monatlichen Raten über die gesamte Laufzeit. Diese Konsistenz vereinfacht die Budgetplanung, obwohl sich das Verhältnis von Tilgung zu Zinsen ändert.</p><p>In den ersten Jahren fließt der Großteil jeder Rate in Zinszahlungen, nur ein kleiner Teil reduziert die Restschuld. Mit fortschreitender Laufzeit verschiebt sich dieses Verhältnis zugunsten der Tilgung, da Zinsen auf die sinkende Restschuld berechnet werden.</p><p>Diese Methode ist besonders bei Hypotheken und langfristigen Krediten üblich, da sie Rückzahlungssicherheit bietet. Die Berechnungsformel lautet:</p><p class='text-center my-3'><code>Monatsrate = Kreditsumme × [r(1+r)ⁿ] ÷ [(1+r)ⁿ-1]</code></p><p>wobei r der Monatszins (Jahreszins ÷ 12) und n die Gesamtzahl der Raten (Jahre × 12) ist.</p>"
        },
        method2: {
          title: "Ratentilgung (fallende Raten)",
          description: "<p><b>Ratentilgung</b> verteilt die Kreditsumme gleichmäßig auf alle Raten. Jede Zahlung enthält denselben Tilgungsbetrag, während der Zinsanteil variiert und sinkt, was zu abnehmenden Gesamtraten führt.</p><p>Diese Methode beginnt mit höheren Zahlungen, die schneller die Restschuld reduzieren, was insgesamt weniger Zinskosten verursacht als Annuitätentilgung.</p><p>Oft bei Geschäftskrediten und einigen Hypotheken verwendet, bietet sie Zinseinsparungen, erfordert aber höhere anfängliche Zahlungsfähigkeit. Die Berechnung ist einfacher:</p><p class='text-center my-3'><code>Monatstilgung = Kreditsumme ÷ Ratenanzahl</code><br><code>Monatszinsen = Restschuld × Monatszins</code><br><code>Gesamtrate = Monatstilgung + Monatszinsen</code></p><p>Da die Restschuld monatlich sinkt, reduzieren sich auch die Zinsanteile und damit die Gesamtraten.</p>"
        }
      },
      tutorial: {
        title: "Schritt-für-Schritt-Anleitung zur Nutzung des Kreditrechners",
        intro: "Folgen Sie dieser Anleitung, um Ihre Kreditoptionen mit unserem Rechner optimal zu analysieren:",
        step1: {
          title: "Schritt 1: Kreditart und Währung wählen",
          description: "Wählen Sie zunächst den passenden Kredittyp: Hypothekendarlehen, Autokredit oder Privatkredit. Obwohl die Berechnungen für alle Typen gleich sind, hilft diese Auswahl bei der Kontextualisierung Ihrer Ergebnisse. Wählen Sie dann Ihre bevorzugte Währung aus den unterstützten Optionen (CNY, USD, EUR, JPY, GBP). Die Währung beeinflusst nur die Anzeige, nicht die Berechnungen."
        },
        step2: {
          title: "Schritt 2: Kreditdetails eingeben",
          description: "Geben Sie die spezifischen Kreditparameter ein: Kreditsumme (ohne Trennzeichen oder Währungssymbole), Laufzeit (in Jahren oder Monaten) und effektiven Jahreszins (z.B. 4.5 für 4,5%). Hypotheken laufen typischerweise 15-30 Jahre, Autokredite 3-7 Jahre und Privatkredite 1-5 Jahre. Verwenden Sie den tatsächlichen effektiven Jahreszins (Effektivzins) für genaue Berechnungen."
        },
        step3: {
          title: "Schritt 3: Tilgungsart auswählen",
          description: "Entscheiden Sie zwischen Annuitätentilgung (gleichbleibende Raten, höhere Gesamtzinsen) oder Ratentilgung (fallende Raten, geringere Gesamtzinsen, aber höhere Anfangsbelastung). Diese Wahl beeinflusst Ihre monatliche Belastung und die Gesamtkosten erheblich."
        },
        step4: {
          title: "Schritt 4: Ergebnisse und Tilgungsplan analysieren",
          description: "Nach Klick auf \"Berechnen\" erscheinen detaillierte Ergebnisse: Für Annuitätendarlehen die konstante Monatsrate, für Ratentilgung erste (höchste) und letzte (niedrigste) Rate. Alle Berechnungen zeigen Gesamtzinsen, Gesamtrückzahlung und Zinsanteil. Der Tilgungsplan listet jede Rate mit Tilgungs- und Zinsanteil sowie Restschuld auf und kann nach Excel exportiert werden. Diagramme visualisieren die Verteilung von Tilgung und Zinsen über die Zeit."
        }
      },
      faq: {
        title: "Häufige Fragen zur Kreditberechnung",
        q1: "Wie beeinflusst die Laufzeit meine Gesamtzinskosten?",
        a1: "<b>Die Laufzeit wirkt sich erheblich auf die Gesamtzinsen aus</b>. Längere Laufzeiten (z.B. 30 statt 15 Jahre bei Hypotheken) reduzieren die Monatsrate, erhöhen aber die Gesamtzinskosten deutlich, da Sie länger Zinsen zahlen. Beispiel: Bei 300.000€, 4% Zinsen kostet ein 30-jähriger Kredit insgesamt etwa 215.609€ Zinsen, während 15 Jahre nur 99.431€ Zinsen verursachen - über 116.000€ Ersparnis. Dies gilt für alle Kreditarten - kürzere Laufzeiten sind finanziell vorteilhaft, wenn höhere Raten tragbar sind.",
        
        q2: "Welche Tilgungsart spart mehr Geld?",
        a2: "<b>Ratentilgung verursacht meist geringere Gesamtzinskosten</b> als Annuitätentilgung, da sie die Restschuld schneller reduziert. Bei 200.000€, 4,5% Zinsen über 20 Jahre spart Ratentilgung etwa 9.000-15.000€ Zinsen. Allerdings beginnen die Raten höher (z.B. 1.542€ statt 1.266€) und sinken dann. Die beste Wahl hängt von Ihrer finanziellen Flexibilität ab - Annuität bietet planbare Raten, Ratentilgung Zinseinsparungen für Zahlungsfähige.",
        
        q3: "Wie viel spare ich durch Sondertilgungen?",
        a3: "<b>Sondertilgungen reduzieren Zinskosten und Laufzeit erheblich</b>, besonders in frühen Kreditjahren. Beispiel: Bei 300.000€, 4%, 30 Jahren spart eine zusätzliche monatliche Rate von 200€ etwa 62.000€ Zinsen und verkürzt die Laufzeit um 8 Jahre. Selbst einmalige 1.000€ im 2. Jahr sparen 2.700€ Zinsen und 3 Monate Laufzeit. Höhere Zinskredite (z.B. Privatkredite) bieten proportional größere Einsparungen. Beachten Sie mögliche Vorfälligkeitsentschädigungen.",
        
        q4: "Wie lese ich den Tilgungsplan?",
        a4: "<b>Der Tilgungsplan zeigt detailliert jede Rate</b> mit Nummer, Datum, Tilgungsbetrag, Zinsbetrag, Gesamtrate und Restschuld. Sie sehen, wie sich das Tilgungs-Zins-Verhältnis verschiebt - anfangs dominieren Zinsen, später die Tilgung. Der Plan hilft bei der Planung von Sondertilgungen, Umschuldungen oder wichtigen finanziellen Meilensteinen.",
        
        q5: "Worauf sollte ich bei Kreditvergleichen achten?",
        a5: "<b>Vergleichen Sie nicht nur Zinssätze</b>, sondern auch Laufzeiten (länger = niedrigere Raten, aber mehr Zinsen), Zinstypen (fest/variabel), Gebühren (Bearbeitung, Punkte), besondere Versicherungen (z.B. Restkreditversicherung), Vorfälligkeitsentschädigungen und eventuelle Ballonzahlungen. Unser Rechner hilft, diese Faktoren zu standardisieren und Optionen in Monatsbelastung und Gesamtkosten fair zu vergleichen. Der \"günstigste\" Kredit ist nicht unbedingt der mit der niedrigsten Rate, sondern der, der Ihre Liquiditätsbedürfnisse bei minimalen Gesamtkosten erfüllt."
      },
      relatedTools: {
        title: "Verwandte Finanztools",
        description: "Ergänzen Sie Ihre Finanzplanung mit diesen Tools:",
        tool1: {
          name: "Zinseszinsrechner",
          url: "https://www.ufreetools.com/tool/zinseszins-rechner",
          description: "Berechnet das Wachstum Ihrer Investitionen durch Zinseszins."
        },
        tool2: {
          name: "Währungsrechner",
          url: "https://www.ufreetools.com/tool/waehrungsumrechner",
          description: "Rechnet Beträge mit aktuellen Wechselkursen um."
        },
        tool3: {
          name: "Prozentrechner",
          url: "https://www.ufreetools.com/tool/prozent-rechner",
          description: "Berechnet Prozentwerte, Steigerungen, Reduzierungen und Differenzen."
        },
        tool4: {
          name: "Rentenrechner",
          url: "https://www.ufreetools.com/tool/rentenrechner",
          description: "Plant Ihre Altersvorsorge durch Schätzung von Ersparnissen und Bedarf."
        }
      },
      resources: {
        title: "Autoritative Kreditplanungsressourcen",
        resource1: {
          name: "Bundesanstalt für Finanzdienstleistungsaufsicht",
          url: "https://www.bafin.de/",
          description: "Offizielle Aufsichtsressourcen mit Kreditrichtlinien und Verbraucherschutz."
        },
        resource2: {
          name: "Deutsche Bundesbank - Verbraucherschutz",
          url: "https://www.bundesbank.de/",
          description: "Zuverlässige Anleitungen zu Kreditoptionen und Verbraucherrechten."
        },
        resource3: {
          name: "Verbraucherzentrale",
          url: "https://www.verbraucherzentrale.de/",
          description: "Bildungsressourcen zu Kreditberechnungen und Finanzplanung."
        }
      }
    }
  };