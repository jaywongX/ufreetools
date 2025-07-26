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
  }
};