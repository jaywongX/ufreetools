export default {
  name: 'HMAC-Rechner',
  description: 'Berechnet HMAC (Hash-basierter Nachrichtenauthentifizierungscode) für Daten',
  title: 'HMAC-Nachrichtenauthentifizierungstool',
  intro: 'Generiert Nachrichtenauthentifizierungscodes mit Schlüssel, unterstützt verschiedene Hash-Algorithmen und Ausgabeformate',

  input: {
    title: 'Eingabe',
    message: 'Nachricht',
    messagePlaceholder: 'Zu authentifizierende Nachricht eingeben',
    key: 'Schlüssel',
    keyLabel: 'Schlüssel (Secret Key)',
    keyPlaceholder: 'HMAC-Schlüssel eingeben',
    messageLabel: 'Nachricht (Message)',
    messageLongPlaceholder: 'Nachricht zur HMAC-Berechnung eingeben',
    file: 'Datei',
    text: 'Text',
    fileSelect: 'Datei auswählen',
    fileDrop: 'Oder Datei hier ablegen',
    fileSelected: 'Ausgewählte Datei: {name}',
    clearFile: 'Datei löschen',
    encoding: 'Eingabe-Kodierung',
    keyEncoding: 'Schlüssel-Kodierung',
    outputFormat: 'Ausgabeformat',
    inputType: 'Eingabetyp',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    base64: 'Base64',
    hex: 'Hexadezimal',
    binary: 'Binär',
    calculate: 'HMAC berechnen',
    calculating: 'Berechnung läuft...',
    clear: 'Alles löschen'
  },

  algorithms: {
    title: 'Algorithmen',
    label: 'Hash-Algorithmus',
    hmacMd5: 'HMAC-MD5',
    hmacSha1: 'HMAC-SHA1',
    hmacSha224: 'HMAC-SHA224',
    hmacSha256: 'HMAC-SHA256',
    hmacSha384: 'HMAC-SHA384',
    hmacSha512: 'HMAC-SHA512',
    hmacRipemd160: 'HMAC-RIPEMD160',
    hmacSm3: 'HMAC-SM3'
  },

  result: {
    title: 'HMAC-Ergebnis',
    digest: 'HMAC-Digest',
    outputLabel: 'HMAC-Ergebnis',
    copy: 'Kopieren',
    copied: 'Kopiert!',
    noResult: 'Nachricht und Schlüssel eingeben, um HMAC zu berechnen',
    calculating: 'Berechnung läuft...',
    placeholder: 'HMAC-Ergebnis wird hier angezeigt',
    useExample: 'Beispiel verwenden',
    jsExample: 'JavaScript-Beispiel:'
  },

  validation: {
    title: 'HMAC-Validierung',
    hmacToVerify: 'Zu prüfender HMAC',
    verifyPlaceholder: 'HMAC zur Prüfung eingeben',
    verify: 'HMAC prüfen',
    valid: 'HMAC gültig',
    invalid: 'HMAC ungültig',
    verifying: 'Prüfung läuft...'
  },

  options: {
    title: 'Optionen',
    uppercase: 'Großbuchstaben',
    showDetails: 'Technische Details anzeigen',
    autoUpdate: 'Automatisch aktualisieren',
    truncate: 'Ausgabe kürzen',
    truncateLength: 'Kürzungslänge'
  },

  details: {
    title: 'Technische Details',
    algorithm: 'Algorithmus',
    keyLength: 'Schlüssellänge',
    blockSize: 'Blockgröße',
    outputLength: 'Ausgabelänge',
    execution: 'Ausführungszeit',
    ms: 'Millisekunden'
  },

  messages: {
    noMessage: 'Bitte Nachricht eingeben',
    noKey: 'Bitte Schlüssel eingeben',
    invalidEncoding: 'Ungültiges Kodierungsformat',
    processingError: 'Verarbeitungsfehler: {error}',
    success: 'HMAC erfolgreich berechnet',
    invalidKey: 'Ungültiges Schlüsselformat für gewählte Kodierung',
    fileTooBig: 'Datei zu groß. Maximale Größe: 5MB',
    copied: 'In Zwischenablage kopiert',
    copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren',
    invalidHex: 'Schlüssel ist kein gültiges Hexadezimalformat',
    invalidBase64: 'Schlüssel ist kein gültiges Base64-Format'
  },

  security: {
    title: 'Sicherheitshinweise',
    keyStorage: 'Schlüssel niemals teilen',
    keyStrength: 'Starke, einzigartige Schlüssel pro Anwendung verwenden',
    recommendation: 'Für sicherheitskritische Anwendungen mindestens HMAC-SHA256 verwenden',
    warning: 'HMAC-MD5 und HMAC-SHA1 für Hochsicherheitsanwendungen möglicherweise ungeeignet'
  }
};