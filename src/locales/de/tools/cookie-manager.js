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
  invalidFormat: 'Ungültiges Format'
};