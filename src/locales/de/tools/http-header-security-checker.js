export default {
    name: 'HTTP-Sicherheitsheader-Prüfer',
    description: 'Analysiert und bewertet die Sicherheit von HTTP-Antwortheadern',
    title: 'HTTP-Sicherheitsheader-Prüftool',
    intro: 'Analysiert die HTTP-Antwortheader einer Website, prüft Sicherheitskonfigurationen wie CSP und HSTS und gibt Verbesserungsvorschläge',
    
    input: {
      title: 'URL oder Header eingeben',
      url: 'URL',
      urlPlaceholder: 'Zu prüfende URL eingeben (z.B. https://example.com)',
      headers: 'Oder HTTP-Header direkt einfügen',
      headersPlaceholder: 'Hier HTTP-Header einfügen...',
      options: 'Scan-Optionen',
      followRedirects: 'Weiterleitungen folgen',
      includeSubresources: 'Unterressourcen prüfen (CSS, JS etc.)',
      timeout: 'Timeout (Sekunden)',
      checkButton: 'Header prüfen',
      analyzing: 'Analyse läuft...'
    },
    
    results: {
      title: 'Sicherheitsheader-Analyse',
      overview: 'Übersicht',
      score: 'Sicherheits-Score',
      totalScore: 'von 100 Punkten',
      scanned: 'Geprüfte URL',
      date: 'Prüfdatum',
      headers: {
        title: 'Gefundene Header',
        name: 'Header',
        value: 'Wert',
        status: 'Status'
      },
      allHeaders: {
        title: 'Alle Antwortheader',
        name: 'Name',
        value: 'Wert',
        noData: 'Keine Header-Daten gefunden'
      },
      missing: {
        title: 'Fehlende Sicherheitsheader',
        description: 'Diese empfohlenen Sicherheitsheader wurden nicht gefunden:'
      },
      issues: {
        title: 'Sicherheitsprobleme',
        critical: 'Kritisch',
        high: 'Hoch',
        medium: 'Mittel',
        low: 'Niedrig',
        info: 'Information'
      },
      recommendations: {
        title: 'Empfehlungen',
        description: 'Zum Erhöhen der Sicherheit folgende Header hinzufügen:',
        example: 'Beispielkonfiguration'
      },
      rating: {
        unknown: 'Unbekannt',
        excellent: 'Ausgezeichnet',
        good: 'Gut',
        fair: 'Durchschnittlich',
        poor: 'Schwach',
        high_risk: 'Hohes Risiko',
        descriptions: {
          unknown: 'Keine Sicherheitsheader-Informationen verfügbar',
          excellent: 'Website implementiert alle wichtigen Sicherheitsheader',
          good: 'Website implementiert die meisten wichtigen Sicherheitsheader',
          fair: 'Website fehlen einige wichtige Sicherheitsheader',
          poor: 'Website fehlen mehrere kritische Sicherheitsheader',
          high_risk: 'Website hat kaum Sicherheitsheader-Schutzmaßnahmen implementiert'
        }
      }
    },
    
    headers: {
      strictTransportSecurity: {
        name: 'Strict-Transport-Security',
        description: 'Erzwingt HTTPS-Verbindungen statt HTTP',
        recommendation: '"Strict-Transport-Security: max-age=31536000; includeSubDomains; preload" hinzufügen',
        status: {
          good: 'Korrekt konfiguriert',
          bad: 'Nicht konfiguriert',
          warning: 'Konfiguration könnte verbessert werden'
        },
        recommendationConfigured: 'Bestehende Konfiguration ist implementiert, stellen Sie sicher, dass max-age lang genug ist und includeSubDomains enthalten ist',
        recommendationMissing: 'HSTS aktivieren, um sicherzustellen, dass alle Kommunikation über HTTPS erfolgt'
      },
      xContentTypeOptions: {
        name: 'X-Content-Type-Options',
        description: 'Verhindert MIME-Type-Sniffing',
        recommendation: '"X-Content-Type-Options: nosniff" hinzufügen',
        status: {
          good: 'Korrekt konfiguriert',
          bad: 'Nicht konfiguriert oder falsch konfiguriert'
        },
        recommendationConfigured: 'Konfiguration ist korrekt, beibehalten',
        recommendationMissing: 'Diesen Header auf "nosniff" setzen'
      },
      xFrameOptions: {
        name: 'X-Frame-Options',
        description: 'Verhindert das Einbetten der Website in iframes und schützt vor Clickjacking-Angriffen',
        recommendation: '"X-Frame-Options: DENY" oder "SAMEORIGIN" hinzufügen',
        status: {
          good: 'Konfiguriert',
          bad: 'Nicht konfiguriert'
        },
        recommendationConfigured: 'Bestehende Konfiguration ist implementiert, DENY oder SAMEORIGIN empfohlen',
        recommendationMissing: 'Diesen Header konfigurieren, um Clickjacking zu verhindern'
      },
      contentSecurityPolicy: {
        name: 'Content-Security-Policy',
        description: 'Steuert, welche Ressourcen der User Agent laden darf',
        recommendation: 'Content-Security-Policy-Header mit passenden Direktiven hinzufügen',
        status: {
          good: 'Korrekt konfiguriert',
          bad: 'Nicht konfiguriert',
          warning: 'Konfiguration könnte verbessert werden'
        },
        recommendationConfigured: 'Bestehende Konfiguration ist implementiert, regelmäßig überprüfen und aktualisieren',
        recommendationMissing: 'CSP konfigurieren, um XSS-Angriffe zu verhindern'
      },
      xXssProtection: {
        name: 'X-XSS-Protection',
        description: 'Aktiviert XSS-Filterung in älteren Browsern. Moderne Browser verwenden stattdessen CSP.',
        recommendation: 'Für Kompatibilität mit älteren Browsern auf "1; mode=block" setzen',
        status: {
          enabled: 'Aktiviert',
          disabled: 'Deaktiviert',
          notConfigured: 'Nicht konfiguriert (moderne Browser verwenden CSP)'
        }
      },
      referrerPolicy: {
        name: 'Referrer-Policy',
        description: 'Steuert die im Referer-Header enthaltenen Informationen',
        recommendation: '"Referrer-Policy: no-referrer-when-downgrade" oder strengere Policy hinzufügen',
        status: {
          good: 'Konfiguriert',
          bad: 'Nicht konfiguriert'
        },
        recommendationConfigured: 'Bestehende Konfiguration ist implementiert, strict-origin oder strict-origin-when-cross-origin empfohlen',
        recommendationMissing: 'Diesen Header konfigurieren, um Referrer-Informationen zu kontrollieren'
      },
      permissionsPolicy: {
        name: 'Permissions-Policy',
        description: 'Steuert, welche Browser-Funktionen und APIs verwendet werden können',
        recommendation: 'Permissions-Policy-Header mit passenden Einschränkungen hinzufügen',
        status: {
          good: 'Konfiguriert',
          bad: 'Nicht konfiguriert'
        },
        recommendationConfigured: 'Bestehende Konfiguration ist implementiert, unnötige Funktionen einschränken',
        recommendationMissing: 'Diesen Header konfigurieren, um Browser-Funktionen einzuschränken'
      }
    },
    
    status: {
      good: 'Gut',
      warning: 'Warnung',
      bad: 'Schlecht',
      info: 'Information',
      notApplicable: 'Nicht zutreffend'
    },
    
    actions: {
      export: 'Bericht exportieren',
      copyHeaders: 'Header kopieren',
      copyRecommendations: 'Empfehlungen kopieren',
      scan: 'Neuer Scan',
      share: 'Ergebnisse teilen',
      analyze: 'Header analysieren'
    },
    
    emptyState: {
      line1: 'Website-URL eingeben, um Sicherheitskonfiguration der HTTP-Antwortheader zu analysieren',
      line2: 'Detaillierte Bewertung und Empfehlungen für Sicherheitsheader wie CSP und HSTS erhalten'
    },
    
    messages: {
      scanning: 'Scanne {url}...',
      completed: 'Scan abgeschlossen',
      error: 'Fehler: {message}',
      timeout: 'Timeout aufgetreten',
      invalidUrl: 'Ungültige URL',
      invalidUrlFormat: 'Bitte gültige URL mit http:// oder https:// eingeben',
      copied: 'In Zwischenablage kopiert',
      exportComplete: 'Bericht erfolgreich exportiert',
      httpWarning: 'Warnung: HTTP-Verwendung möglicherweise unsicher',
      noHeaders: 'Keine Header-Informationen gefunden',
      fetchError: 'Header konnten nicht abgerufen werden: {error}'
    },
    
    article: {
      title: "HTTP-Sicherheitsheader-Prüfer: Verbessern Sie den Sicherheitsstatus Ihrer Website",
      features: {
        title: "HTTP-Sicherheitsheader verstehen",
        description: `<p>Der <strong>HTTP-Sicherheitsheader-Prüfer</strong> ist ein spezielles Tool zur Analyse und Bewertung der <strong>Sicherheitsheader</strong> jeder Website. <strong>Sicherheitsheader</strong> sind spezielle HTTP-Antwortheader, die Server setzen können, um eine zusätzliche <strong>Sicherheitsebene</strong> bereitzustellen, indem sie helfen, häufige Web-Schwachstellen wie Cross-Site-Scripting (XSS), Clickjacking und andere Code-Injection-Angriffe zu verhindern.</p>
        <p>Unser Tool scannt wichtige <strong>Sicherheitsheader</strong> einschließlich Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), X-Content-Type-Options, X-Frame-Options und mehr. Es bewertet bestehende <strong>Header-Konfigurationen</strong>, identifiziert fehlende <strong>Sicherheitsheader</strong> und bietet einen umfassenden <strong>Sicherheits-Score</strong> mit umsetzbaren Empfehlungen zur Verbesserung des <strong>Sicherheitsstatus</strong> Ihrer Website.</p>`,
        useCases: {
          title: "Typische Anwendungsfälle für den HTTP-Sicherheitsheader-Prüfer",
          items: [
            "Webentwickler führen Sicherheitsaudits für neu entwickelte Websites vor der Bereitstellung durch",
            "Sicherheitsexperten führen Penetrationstests und Schwachstellenbewertungen durch",
            "Systemadministratoren validieren Server-Sicherheitskonfigurationen über mehrere Domains hinweg",
            "DevOps-Teams implementieren kontinuierliche Sicherheitsüberwachung in CI/CD-Pipelines",
            "Website-Betreiber validieren ihren Sicherheitsstatus nach Implementierung empfohlener Header",
            "Sicherheitsberater demonstrieren Kunden die Notwendigkeit verbesserter Sicherheitsmaßnahmen",
            "Compliance-Beauftragte stellen sicher, dass Websites Branchensicherheitsstandards und -vorschriften entsprechen"
          ]
        }
      },
      faq: {
        title: "Häufige Fragen zu HTTP-Sicherheitsheadern",
        items: [
          {
            question: "Was sind HTTP-Sicherheitsheader und warum sind sie wichtig?",
            answer: "HTTP-Sicherheitsheader sind spezielle Anweisungen, die vom Server an den Browser gesendet werden, um zu steuern, wie der Browser mit den Inhalten Ihrer Website umgehen soll. Sie sind wichtig, weil sie eine zusätzliche Sicherheitsebene bieten, die vor häufigen Web-Schwachstellen wie XSS, CSRF, Clickjacking und Code-Injection-Angriffen schützt. Richtig konfigurierte Sicherheitsheader können den Sicherheitsstatus Ihrer Website mit minimalem Aufwand erheblich verbessern."
          },
          {
            question: "Welche Sicherheitsheader sollte jede Website implementieren?",
            answer: "Mindestens sollte jede moderne Website implementieren: Content Security Policy (CSP) zur Verhinderung von XSS-Angriffen, HTTP Strict Transport Security (HSTS) zur Erzwingung von HTTPS, X-Content-Type-Options zur Verhinderung von MIME-Type-Sniffing, X-Frame-Options zur Verhinderung von Clickjacking und Referrer-Policy zur Kontrolle der Referrer-Informationen. Unser Sicherheitsheader-Prüfer bewertet automatisch diese und weitere wichtige Header."
          },
          {
            question: "Wie wird der Sicherheits-Score berechnet?",
            answer: "Der Sicherheits-Score basiert auf dem Vorhandensein und der korrekten Konfiguration wichtiger Sicherheitsheader. Wichtige Header wie Content Security Policy und HSTS tragen jeweils bis zu 20 Punkte bei, während andere Header wie X-Content-Type-Options und X-Frame-Options jeweils 10-15 Punkte beitragen. Wir bewerten auch die Qualität der Implementierung, nicht nur das Vorhandensein der Header, mit einer maximalen Punktzahl von 100."
          },
          {
            question: "Kann ich dieses Tool verwenden, um Websites zu prüfen, die mir nicht gehören?",
            answer: "Ja, Sie können den HTTP-Sicherheitsheader-Prüfer verwenden, um jede öffentlich zugängliche Website zu analysieren. Das Tool prüft nur HTTP-Antwortheader, die öffentlich verfügbare Informationen sind, die vom Webserver gesendet werden. Wir empfehlen jedoch, es hauptsächlich für Websites zu verwenden, die Sie besitzen oder für die Sie Testberechtigungen haben."
          },
          {
            question: "Wie implementiere ich die vom Tool empfohlenen Sicherheitsheader?",
            answer: "Die Implementierung hängt von Ihrem Webserver oder Ihrer Plattform ab. Für Apache können Sie Header in der .htaccess-Datei hinzufügen. Für Nginx können Sie sie in der Server-Konfiguration hinzufügen. Viele Content-Management-Systeme haben Plugins für Sicherheitsheader. Der HTTP-Sicherheitsheader-Prüfer bietet Beispielkonfigurationen, die Sie an Ihre spezifische Umgebung anpassen können."
          }
        ]
      },
      guide: {
        title: "Anleitung zur Verwendung des HTTP-Sicherheitsheader-Prüfers",
        steps: [
          "Geben Sie die vollständige URL der zu prüfenden Website in das URL-Eingabefeld ein (muss http:// oder https:// enthalten)",
          "Für erweiterte Prüfungen Optionen wie 'Weiterleitungen folgen' aktivieren, falls die Website Weiterleitungen verwendet",
          "Klicken Sie auf 'Header prüfen', um die Sicherheitsanalyse zu starten",
          "Prüfen Sie den Sicherheits-Score und die Gesamtbewertung oben im Ergebnisbereich",
          "Überprüfen Sie die detaillierte Analyse der erkannten Sicherheitsheader, jeweils mit Statusindikator (Gut, Warnung oder Schlecht)",
          "Klicken Sie auf einen Sicherheitsheader, um Details anzuzeigen, einschließlich aktueller Wert, Zweck und spezifische Empfehlungen",
          "Im Bereich 'Alle Antwortheader' können Sie die vollständige Liste aller vom Server zurückgegebenen HTTP-Antwortheader einsehen",
          "Implementieren Sie die empfohlenen Sicherheitsheader auf Ihrem Webserver und führen Sie den Prüfer erneut aus, um die Verbesserungen zu validieren"
        ]
      },
      conclusion: "Regelmäßige Überprüfung und Aktualisierung Ihrer Website-Sicherheitsheader ist eine grundlegende Praxis in der Web-Sicherheitswartung. Mit dem HTTP-Sicherheitsheader-Prüfer können Sie leicht Schwachstellen in Ihrer aktuellen Konfiguration identifizieren und die notwendigen Verbesserungen implementieren, um den Schutz gegen häufige Web-Angriffe zu erhöhen. Denken Sie daran, dass Sicherheitsheader nur ein Aspekt einer umfassenden Sicherheitsstrategie sind, aber sie bieten signifikanten Schutz mit relativ geringem Implementierungsaufwand."
    }
  }