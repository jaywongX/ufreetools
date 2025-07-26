export default {
  name: 'Zeitzonen-Umrechner',
  description: 'Weltweiter Zeitzonen-Vergleich und Umrechnungstool zur einfachen Anzeige der aktuellen Zeit in verschiedenen Ländern und Regionen',

  // Hauptfunktionen
  currentTime: 'Aktuelle Zeit',

  addTimezone: 'Zeitzone hinzufügen',
  removeTimezone: 'Zeitzone entfernen',
  convertTime: 'Zeit umrechnen',
  compareTimezones: 'Zeitzonen vergleichen',

  // Einstellungen und Optionen
  settings: {
    date: 'Datum',
    time: 'Uhrzeit',
    format: 'Format',
    select24Hour: '24-Stunden-Format',
    select12Hour: '12-Stunden-Format',
    showSeconds: 'Sekunden anzeigen',
    hideSeconds: 'Sekunden ausblenden',
    showDate: 'Datum anzeigen',
    hideDate: 'Datum ausblenden',
  },

  // Zeitzonen-bezogen
  timezone: {
    title: 'Zeitzone',
    search: 'Zeitzone oder Stadt suchen...',
    yourLocal: 'Ihre lokale Zeitzone',
    popular: 'Beliebte Zeitzonen',
    allTimezones: 'Alle Zeitzonen',
    utc: 'UTC (Koordinierte Weltzeit)',
    gmt: 'GMT (Greenwich Mean Time)',
    est: 'US-Ostküstenzeit',
    cst: 'Chinesische Standardzeit',
    jst: 'Japanische Standardzeit',
    ist: 'Indische Standardzeit',
    cet: 'Mitteleuropäische Zeit',
    bst: 'Britische Sommerzeit',
    aest: 'Australische Ostküstenzeit',
    nzst: 'Neuseeländische Standardzeit',
    custom: 'Benutzerdefinierte Zeitzone'
  },

  // Regionen und Kontinente
  regions: {
    africa: 'Afrika',
    america: 'Amerika',
    asia: 'Asien',
    atlantic: 'Atlantik',
    australia: 'Australien',
    europe: 'Europa',
    indian: 'Indischer Ozean',
    pacific: 'Pazifik'
  },

  // Umrechnungsbezogen
  conversion: {
    from: 'Von',
    to: 'Nach',
    convert: 'Umrechnen',
    result: 'Umrechnungsergebnis',
    timeIn: 'Zeit in'
  },

  // UI-Elemente
  ui: {
    now: 'Jetzt',
    refresh: 'Aktualisieren',
    copy: 'Kopieren',
    copied: 'Kopiert',
    share: 'Teilen',
    reset: 'Zurücksetzen',
    empty: 'Keine Ergebnisse',
    offset: 'Versatz',
    add: 'Hinzufügen'
  },

  // Meldungen
  messages: {
    invalid: 'Ungültige Zeitangabe',
    copied: 'In die Zwischenablage kopiert',
    removed: 'Zeitzone entfernt',
    added: 'Zeitzone hinzugefügt',
    maxTimezones: 'Maximal 10 Zeitzonen können hinzugefügt werden',
    selectTimezone: 'Bitte wählen Sie eine Zeitzone aus'
  },

  // Tool-Beschreibung
  aboutTitle: 'Über den Zeitzonen-Umrechner',

  aboutDescription: 'Der Zeitzonen-Umrechner ist ein praktisches Tool, das Ihnen hilft, einfach die Zeit in verschiedenen Regionen der Welt anzuzeigen und zu vergleichen. Ideal für internationale Kommunikation, Reiseplanung und die Organisation von globalen Meetings.',
  featuresTitle: 'Hauptfunktionen',
  feature1: 'Echtzeit-Anzeige der aktuellen Zeit in wichtigen Städten und Zeitzonen weltweit',
  feature2: 'Schneller Vergleich von Zeitunterschieden zwischen mehreren Zeitzonen',
  feature3: 'Umrechnung von Zeiten zwischen beliebigen Zeitzonen',
  feature4: 'Unterstützung für 24-Stunden- und 12-Stunden-Formate',
  feature5: 'Übersichtliche Darstellung von Arbeitszeitüberschneidungen',
  feature6: 'Suche nach Städten oder Ländern zur Ermittlung der entsprechenden Zeitzone',
  useCasesTitle: 'Anwendungsfälle',
  useCase1: 'Planung internationaler Geschäftstreffen oder Telefonkonferenzen',
  useCase2: 'Organisation von internationalen Reisen und Flugzeiten',
  useCase3: 'Kontakt mit Freunden oder Familie im Ausland',
  useCase4: 'Verfolgung der Ortszeit wichtiger internationaler Ereignisse',
  useCase5: 'Zeitplanung für Teams mit Remote-Mitarbeitern',
  howToUseTitle: 'Verwendungshinweise',
  howToUse1: 'Fügen Sie mehrere Zeitzonen hinzu, um gleichzeitig die aktuelle Zeit in verschiedenen Regionen anzuzeigen',
  howToUse2: 'Nutzen Sie die Umrechnungsfunktion, um eine bestimmte Zeit von einer Zeitzone in eine andere umzurechnen',
  howToUse3: 'Passen Sie Datums- und Zeitformate Ihren persönlichen Vorlieben an',
  howToUse4: 'Kopieren Sie Ergebnisse oder generieren Sie Links zum Teilen mit anderen'
};