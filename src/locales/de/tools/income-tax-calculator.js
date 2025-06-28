export default {
    name: 'Einkommensteuerrechner',
    description: 'Berechnet die zu zahlende Einkommensteuer und das Nettogehalt',
    
    // Hauptoberflächentexte
    taxSystem: 'Steuersystem',
    china: 'China',
    usa: 'USA',
    uk: 'Großbritannien',
    
    monthlyIncome: 'Monatseinkommen',
    annualIncome: 'Jahreseinkommen',
    socialSecurity: 'Sozialversicherung',
    socialSecurityAmount: 'Sozialversicherungsbetrag',
    socialSecurityPercent: 'Sozialversicherungssatz',
    socialSecurityBase: 'Sozialversicherungsgrundlage',
    
    deductions: 'Sonderabzüge',
    childrenEducation: 'Kindererziehung',
    continuingEducation: 'Weiterbildung',
    housingLoanInterest: 'Wohnungsbaukreditzinsen',
    housingRent: 'Mietkosten',
    elderlySupport: 'Unterhalt für Eltern',
    medicalTreatment: 'Schwere Krankheiten',
    otherDeductions: 'Andere Abzüge',
    
    calculate: 'Berechnen',
    reset: 'Zurücksetzen',
    
    // Ergebnisbereich
    results: 'Berechnungsergebnisse',
    taxableIncome: 'Zu versteuerndes Einkommen',
    taxRate: 'Steuersatz',
    quickDeduction: 'Schnellabzug',
    taxPayable: 'Zu zahlende Steuer',
    afterTaxIncome: 'Nettogehalt',
    effectiveTaxRate: 'Effektiver Steuersatz',
    monthlyBreakdown: 'Monatliche Aufschlüsselung',
    
    // Diagrammbereich
    taxAnalysis: 'Steueranalyse',
    incomeDistribution: 'Einkommensverteilung',
    income: 'Einkommen',
    tax: 'Steuer',
    takeHome: 'Netto',
    
    // Steuertabelle
    taxBrackets: 'Steuertabelle',
    bracketRange: 'Einkommensspanne',
    rate: 'Satz',
    
    // Monatliche Details
    month: 'Monat',
    cumulativeIncome: 'Kumuliertes Einkommen',
    cumulativeDeduction: 'Kumulierte Abzüge',
    cumulativeTaxable: 'Kumuliertes zu versteuerndes Einkommen',
    cumulativeTax: 'Kumulierte Steuer',
    previousTax: 'Vorherige Monatssteuer',
    currentMonthTax: 'Aktuelle Monatssteuer',
    
    // Stadtauswahl
    city: 'Stadt',
    firstTier: 'Großstadt',
    secondTier: 'Mittelgroße Stadt',
    otherCity: 'Andere Stadt',
    
    // Tool-Beschreibung
    aboutTitle: 'Über die Einkommensteuer',
    aboutDescription: 'Die Einkommensteuer ist eine Steuer auf das Einkommen natürlicher Personen und in den meisten Ländern eine der Haupteinnahmequellen. In China wird ein progressiver Steuersatz von 3% bis 45% angewendet, wobei höhere Einkommen höheren Steuersätzen unterliegen.',
    
    howToUseTitle: 'So verwenden Sie diesen Rechner',
    howToUseStep1: '1. Wählen Sie das Steuersystem (derzeit chinesisches System unterstützt)',
    howToUseStep2: '2. Geben Sie Ihr Monats- oder Jahreseinkommen ein (automatische Umrechnung)',
    howToUseStep3: '3. Sozialversicherungsbetrag eingeben oder prozentuale Berechnung wählen',
    howToUseStep4: '4. Sonderabzüge eintragen',
    howToUseStep5: '5. Auf "Berechnen" klicken für Ergebnisse',
    
    chinaTaxRulesTitle: 'Chinesische Einkommensteuer-Berechnung',
    chinaTaxRule1: 'Grundfreibetrag: 5.000 Yuan/Monat',
    chinaTaxRule2: 'Zu versteuerndes Einkommen = Einkommen - Sozialversicherung - Sonderabzüge - Grundfreibetrag',
    chinaTaxRule3: 'Steuer = Zu versteuerndes Einkommen × Steuersatz - Schnellabzug',
    
    deductionExplainTitle: 'Erklärung der Sonderabzüge',
    childrenEducationExplain: 'Kindererziehung: 1.000 Yuan/Monat pro Kind',
    continuingEducationExplain: 'Weiterbildung: 400 Yuan/Monat für akademische Bildung oder 3.600 Yuan/Jahr für Berufsqualifikationen',
    housingLoanExplain: 'Wohnungsbaukreditzinsen: 1.000 Yuan/Monat',
    housingRentExplain: 'Mietkosten: 1.500 Yuan/Monat in Großstädten, 1.100 Yuan in mittelgroßen Städten, 800 Yuan in anderen Städten',
    elderlyExplain: 'Unterhalt für Eltern: 2.000 Yuan/Monat für Einzelkinder, Aufteilung für mehrere Kinder',
    medicalExplain: 'Schwere Krankheiten: Medizinische Kosten über 15.000 Yuan/Jahr, maximal 60.000 Yuan/Jahr abziehbar',
    
    taxTipsTitle: 'Steuertipps',
    taxTip1: 'Sonderabzüge können die Steuerlast effektiv reduzieren',
    taxTip2: 'Jahresboni können separat oder mit Jahreseinkommen versteuert werden',
    taxTip3: 'Mehrere Einkommensquellen müssen zusammengerechnet werden',
    taxTip4: 'Betriebsrenten und private Krankenversicherungen sind teilweise abziehbar',
    taxTip5: 'Sonderabzüge korrekt angeben, um Steuerrisiken zu vermeiden',
    
    // Artikelinhalt
    article: {
      title: "Einkommensteuerrechner: Umfassendes Werkzeug für persönliche Steuerplanung",
      features: {
        title: "Funktionen und Vorteile des Einkommensteuerrechners",
        description: "Der <strong>Einkommensteuerrechner</strong> ist ein leistungsstarkes Finanzplanungstool, das Ihnen hilft, Ihre <strong>Einkommensteuer</strong> und Ihr Nettogehalt genau zu berechnen. Mit aktuellen <strong>Steuersätzen</strong> und Abzugsregeln liefert der Rechner detaillierte Informationen zu Ihrer Steuerlast basierend auf Ihrem Einkommen und den anwendbaren Abzügen.<br><br>Unser Rechner unterstützt derzeit das chinesische <strong>progressive Steuersystem</strong> mit sieben Steuerstufen von 3% bis 45% und wird zukünftig weitere Länder abdecken. Das Tool zeigt nicht nur Endergebnisse, sondern auch transparent, wie Ihr <strong>zu versteuerndes Einkommen</strong> berechnet wird, welche <strong>Steuerstufe</strong> für Sie gilt, und bietet eine monatliche Aufschlüsselung Ihrer Steuerpflichten über das Jahr.",
        useCases: {
          title: "Praktische Anwendungsfälle",
          items: [
            "<strong>Gehaltsverhandlungen</strong>: Berechnen Sie vor Stellenantritt oder Gehaltsverhandlungen den Unterschied im Nettogehalt. So können Sie fundierte Entscheidungen basierend auf Ihrem <strong>Nettoeinkommen</strong> treffen.",
            "<strong>Jahresplanung</strong>: Integrieren Sie genaue <strong>Steuerschätzungen</strong> in Ihre Jahresbudgetplanung. Monatliche <strong>Steuervorauszahlungen</strong> zu kennen ermöglicht präzisere Liquiditätsplanung.",
            "<strong>Steueroptimierung</strong>: Testen Sie verschiedene <strong>Sonderabzug</strong>-Szenarien, um zu sehen, wie sich Wohnungsbaukreditzinsen, Kindererziehung oder Weiterbildung auf Ihre Steuerlast auswirken.",
            "<strong>Freiberufliche Einkünfte</strong>: Schätzen Sie die <strong>Steuerauswirkungen</strong> zusätzlicher freiberuflicher Einkünfte und planen Sie entsprechende Rücklagen ein.",
            "<strong>Rentenplanung</strong>: Prognostizieren Sie Ihre <strong>Steuerlast im Ruhestand</strong> basierend auf erwarteten Renten und anderen Einkommensquellen.",
            "<strong>Umzugsentscheidungen</strong>: Vergleichen Sie die <strong>Steuerauswirkungen</strong> eines Umzugs in verschiedene Städte, insbesondere hinsichtlich der unterschiedlichen Mietkostenabzüge."
          ]
        }
      },
      faq: {
        title: "Häufige Fragen zur Einkommensteuerberechnung",
        items: [
          {
            question: "Wie wird die chinesische Einkommensteuer berechnet?",
            answer: "Die chinesische <strong>Einkommensteuer</strong> wird mit einem siebenstufigen progressiven System berechnet. Zuerst wird Ihr <strong>zu versteuerndes Einkommen</strong> ermittelt, indem vom Bruttoeinkommen der Grundfreibetrag (5.000 Yuan/Monat), Sozialversicherungsbeiträge und berechtigte Sonderabzüge abgezogen werden. Dann wird dieser Betrag je nach Einkommensstufe mit dem entsprechenden Satz (3% bis 45%) besteuert, wobei der Schnellabzug angewendet wird. Die Formel lautet: Steuer = (Einkommen - Sozialversicherung - Sonderabzüge - 5.000 Yuan) × Steuersatz - Schnellabzug. Der Rechner führt diese komplexe Berechnung automatisch durch."
          },
          {
            question: "Welche Sonderabzüge gibt es im chinesischen Steuersystem?",
            answer: "Das chinesische System bietet mehrere <strong>Sonderabzüge</strong>: 1) <strong>Kindererziehung</strong>: 1.000 Yuan/Monat pro Kind. 2) <strong>Weiterbildung</strong>: 400 Yuan/Monat für akademische Bildung oder 3.600 Yuan/Jahr für Berufsqualifikationen. 3) <strong>Wohnungsbaukreditzinsen</strong>: 1.000 Yuan/Monat für Erstwohnsitz. 4) <strong>Mietkosten</strong>: 1.500 Yuan in Großstädten, 1.100 Yuan in mittelgroßen Städten, sonst 800 Yuan. 5) <strong>Unterhalt für Eltern</strong>: Bis zu 2.000 Yuan/Monat. 6) <strong>Schwere Krankheiten</strong>: Medizinische Kosten über 15.000 Yuan/Jahr, maximal 60.000 Yuan abziehbar. Unser Rechner berücksichtigt alle diese Abzüge."
          },
          {
            question: "Warum ändern sich meine monatlichen Steuern im Jahresverlauf?",
            answer: "Ihre monatlichen <strong>Steuervorauszahlungen</strong> variieren wegen der chinesischen <strong>kumulativen Berechnungsmethode</strong>. Anders als bei monatlich isolierter Betrachtung wird die Einkommensteuer auf Basis des kumulierten Jahreseinkommens berechnet. Zu Jahresbeginn fallen Sie möglicherweise in eine niedrigere Steuerstufe, während höhere kumulierte Einkommen später im Jahr zu höheren Steuerabzügen führen. Diese Methode stellt sicher, dass Ihre Jahressteuerlast korrekt berechnet wird. Unser Rechner zeigt diesen Prozess in der monatlichen Aufschlüsselung transparent an."
          },
          {
            question: "Wie kann ich meine Steuerlast legal optimieren?",
            answer: "Um Ihre <strong>Steuerlast</strong> in China legal zu minimieren: 1) Nutzen Sie alle berechtigten <strong>Sonderabzüge</strong> voll aus. 2) Zahlen Sie den Höchstbetrag in die <strong>Sozialversicherung</strong> ein, da diese Beiträge Ihr zu versteuerndes Einkommen reduzieren. 3) Nutzen Sie steuerbegünstigte <strong>Betriebsrenten</strong> oder Krankenversicherungen. 4) Für hohe Einkommen: Planen Sie Bonuszahlungen strategisch, da Jahresboni manchmal separat versteuert werden können. 5) Dokumentieren Sie alle abzugsfähigen Ausgaben sorgfältig. Unser Rechner hilft Ihnen, verschiedene Szenarien zu simulieren und die beste Strategie für Ihre Finanzen zu finden."
          },
          {
            question: "Wie genau ist dieser Steuerrechner?",
            answer: "Unser <strong>Einkommensteuerrechner</strong> liefert auf Basis aktueller chinesischer Steuergesetze sehr genaue Schätzungen, inklusive der Reformen von 2019 und späteren Aktualisierungen. Der Rechner berücksichtigt das siebenstufige <strong>Steuersystem</strong>, aktuelle Schnellabzüge, Sonderabzugspolitiken und die kumulative Berechnungsmethode. Während wir größtmögliche Genauigkeit anstreben, können Steuergesetze sich ändern und individuelle Umstände komplex sein. Das Tool dient der Planung und allgemeinen Orientierung, ersetzt aber keinen <strong>Steuerberater</strong>. Bei komplexen Steuersituationen (mehrere Einkommensquellen, Auslandseinkünfte, Aktienoptionen etc.) empfehlen wir die Konsultation eines Steuerexperten."
          }
        ]
      },
      guide: {
        title: "Schritt-für-Schritt-Anleitung zur Nutzung des Einkommensteuerrechners",
        steps: [
          "<strong>Wählen Sie Ihr Steuersystem</strong>: Wählen Sie zunächst das für Ihre Berechnung relevante Steuersystem. Der Rechner unterstützt derzeit das chinesische System, weitere Länder folgen.",
          "<strong>Einkommensdaten eingeben</strong>: Geben Sie Ihr Monats- oder Jahreseinkommen in die entsprechenden Felder ein. Der Rechner rechnet automatisch zwischen monatlichen und jährlichen Beträgen um.",
          "<strong>Sozialversicherung konfigurieren</strong>: Sie können entweder einen festen Betrag eingeben oder eine prozentuale Berechnung wählen. Bei Prozentrechnung geben Sie die Bemessungsgrundlage und den Satz ein.",
          "<strong>Stadtkategorie wählen</strong>: Wählen Sie zwischen Großstadt, mittelgroßer Stadt oder anderer Stadt. Diese Wahl beeinflusst den automatischen Mietkostenabzug.",
          "<strong>Sonderabzüge eintragen</strong>: Tragen Sie alle für Sie relevanten Sonderabzüge ein, inklusive Kindererziehung, Weiterbildung, Wohnungsbaukreditzinsen, Mietkosten, Elternunterhalt und medizinische Kosten.",
          "<strong>'Berechnen' klicken</strong>: Nach Eingabe aller Daten klicken Sie auf 'Berechnen', um Ihre Steuerberechnung durchzuführen.",
          "<strong>Ergebnisse prüfen</strong>: Überprüfen Sie die Zusammenfassung mit Ihrer gesamten Steuerlast, Nettogehalt und effektivem Steuersatz. Die monatliche Aufschlüsselung zeigt, wie sich Ihre Steuerpflichten im Jahresverlauf verteilen."
        ]
      },
      conclusion: "Der Einkommensteuerrechner bietet eine leistungsstarke und benutzerfreundliche Lösung für Ihre persönliche Steuerplanung. Indem er klare Einblicke in Ihre Steuerpflichten, Nettogehalt und die Auswirkungen verschiedener Abzüge gibt, ermöglicht er fundiertere Finanzentscheidungen. Ob bei Gehaltsverhandlungen, Jahresplanung oder Steueroptimierung - dieses Tool liefert die präzisen Informationen, die Sie benötigen. Denken Sie daran, Abzugsbelege sorgfältig zu dokumentieren und über Steuergesetzesänderungen informiert zu bleiben. Nutzen Sie den Rechner regelmäßig, besonders bei Einkommens- oder Lebenssituationänderungen, um stets aktuelle Finanzprognosen zu haben."
    }
  };