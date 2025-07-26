export default {
  name: 'UUID-Generator',
  description: 'Generiert zufällige UUIDs und GUIDs mit anpassbaren Optionen für Datenbank-Primärschlüssel, temporäre Dateinamen und mehr',

  options: {
    version: 'UUID-Version',
    quantity: 'Anzahl',
    format: 'Formatoptionen',
    includeDash: 'Bindestriche (-) einbeziehen',
    generateCount: 'Generierungsanzahl'
  },

  versions: {
    v1: 'Version 1 (zeitbasiert)',
    v4: 'Version 4 (zufällig)',
    v5: 'Version 5 (namensbasiert)',
    custom: 'Benutzerdefiniert'
  },

  quantities: {
    single: 'Einzelne',
    five: '5 Stück',
    ten: '10 Stück',
    twenty: '20 Stück'
  },

  formats: {
    default: 'Standard',
    base64: 'Base64',
    binary: 'Binär',
    hex: 'Hexadezimal',
    noDash: 'Ohne Bindestriche'
  },

  actions: {
    generate: 'UUID generieren',
    copy: 'Kopieren',
    copyAll: 'Alle kopieren',
    clear: 'Ergebnisse löschen',
    download: 'Als TXT herunterladen'
  },

  messages: {
    copied: 'In die Zwischenablage kopiert!',
    generated: 'UUID erfolgreich generiert',
    tooMany: 'Maximal 1000 erlaubt',
    invalidVersion: 'Ungültige UUID-Version',
    invalidNamespace: 'Ungültiger Namensraum-UUID',
    copyFailed: 'Kopieren fehlgeschlagen'
  }
};