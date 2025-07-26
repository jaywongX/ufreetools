export default {
  name: 'Passwort-Generator',
  description: 'Erzeugt sichere, zufällige Passwörter mit anpassbaren Optionen',

  options: {
    length: 'Passwortlänge',
    quantity: 'Anzahl der Passwörter',
    includeLowercase: 'Kleinbuchstaben (a-z)',
    includeUppercase: 'Großbuchstaben (A-Z)',
    includeNumbers: 'Zahlen (0-9)',
    includeSymbols: 'Sonderzeichen (!@#$%)',
    excludeSimilar: 'Ähnliche Zeichen ausschließen (i, l, 1, L, o, 0, O)',
    excludeAmbiguous: 'Mehrdeutige Zeichen ausschließen ({}<>[]()\'"`\\)',
    requireAll: 'Alle Zeichentypen erfordern',
    noConsecutive: 'Keine aufeinanderfolgenden ähnlichen Zeichen',
    advancedOptions: 'Erweiterte Optionen',
    characterTypes: 'Zeichentypen'
  },

  presets: {
    standard: 'Standard',
    strong: 'Stark',
    memorable: 'Einprägsam',
    pin: 'PIN-Code',
    pronounceable: 'Aussprechbar',
    custom: 'Benutzerdefiniert',
    easyToRemember: 'Leicht zu merken',
    balanced: 'Ausgewogen',
    secure: 'Sicher'
  },

  strength: {
    title: 'Passwortstärke',
    veryWeak: 'Sehr schwach',
    weak: 'Schwach', 
    medium: 'Mittel',
    strong: 'Stark',
    veryStrong: 'Sehr stark',
    unknown: 'Unbekannt'
  },

  actions: {
    generate: 'Passwort generieren',
    regenerate: 'Neu generieren',
    copy: 'Kopieren',
    copyAll: 'Alle kopieren',
    clear: 'Löschen',
    expand: 'Erweitern',
    collapse: 'Einklappen'
  },

  messages: {
    copied: 'In die Zwischenablage kopiert!',
    allCopied: 'Alle Passwörter wurden in die Zwischenablage kopiert!',
    generated: 'Passwörter erfolgreich generiert',
    invalidOptions: 'Bitte wählen Sie mindestens einen Zeichentyp aus',
    tooManyPasswords: 'Maximal 100 Passwörter können generiert werden',
    clickToGenerate: 'Klicken Sie auf die Schaltfläche oben, um Passwörter zu generieren'
  },

  errors: {
    copyFailed: 'Passwort konnte nicht kopiert werden: ',
    copyFailedManual: 'Kopieren fehlgeschlagen, bitte manuell kopieren'
  },

  results: {
    title: 'Generierte Passwörter'
  },

  units: {
    passwords: 'Passwörter'
  },

  tips: {
    title: 'Passwort-Sicherheitstipps',
    useLength: 'Verwenden Sie ausreichend lange Passwörter (mindestens 12 Zeichen) für mehr Sicherheit',
    useDifferent: 'Verwenden Sie für jede Website oder jeden Dienst unterschiedliche Passwörter',
    changeRegularly: 'Ändern Sie regelmäßig die Passwörter für wichtige Konten',
    useManager: 'Erwägen Sie die Verwendung eines Passwort-Managers zur sicheren Speicherung komplexer Passwörter',
    use2FA: 'Aktivieren Sie die Zwei-Faktor-Authentifizierung für eine zusätzliche Sicherheitsebene'
  }
};