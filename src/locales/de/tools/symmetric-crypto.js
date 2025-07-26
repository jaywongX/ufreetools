export default {
  name: 'Symmetrische Verschlüsselungsalgorithmen',
  description: 'Sichere Verschlüsselung und Entschlüsselung von Texten und Dateien mit verschiedenen symmetrischen Algorithmen wie AES, DES und dem chinesischen Standard SM4',

  encryption: {
    title: 'Verschlüsselung/Entschlüsselung',
    plaintext: 'Klartext',
    plaintextPlaceholder: 'Text eingeben, der verschlüsselt werden soll',
    ciphertext: 'Chiffretext',
    ciphertextPlaceholder: 'Verschlüsselter Text wird hier angezeigt',
    encrypt: 'Verschlüsseln',
    decrypt: 'Entschlüsseln',
    decrypted: 'Entschlüsselter Text',
    decryptedPlaceholder: 'Entschlüsselter Text wird hier angezeigt',
    encryptSuccess: 'Verschlüsselung erfolgreich',
    decryptSuccess: 'Entschlüsselung erfolgreich',
    encryptError: 'Verschlüsselung fehlgeschlagen: {error}',
    decryptError: 'Entschlüsselung fehlgeschlagen: {error}'
  },

  algorithm: {
    title: 'Algorithmus auswählen',
    aes: 'AES',
    des: 'DES',
    tripledes: '3DES (Triple DES)',
    sm4: 'SM4 (Chinesischer Standard)',
    "3des": '3DES (Triple DES)'
  },

  mode: {
    title: 'Betriebsmodus',
    ecb: 'ECB - Electronic Codebook Mode',
    cbc: 'CBC - Cipher Block Chaining Mode',
    cfb: 'CFB - Cipher Feedback Mode',
    ofb: 'OFB - Output Feedback Mode',
    ctr: 'CTR - Counter Mode'
  },

  padding: {
    title: 'Padding-Methode',
    pkcs7: 'PKCS7',
    zeroPadding: 'Null-Padding',
    zeropadding: 'Null-Padding'
  },

  operation: {
    title: 'Operationstyp',
    encrypt: 'Verschlüsseln',
    decrypt: 'Entschlüsseln'
  },

  key: {
    title: 'Schlüssel',
    label: 'Schlüssel',
    placeholder: '{keySize}-Schlüssel eingeben',
    placeholderString: '{keySize}-Schlüssel als Zeichenkette eingeben (automatische Auffüllung bei zu kurz)',
    placeholderHex: '{keySize}-Schlüssel in Hex eingeben (automatische Auffüllung bei zu kurz)',
    placeholderBase64: '{keySize}-Schlüssel in Base64 eingeben (automatische Auffüllung bei zu kurz)',
    generateRandom: 'Zufällig generieren',
    sizeHint: '{keySize}',
    autoFillHint: 'Zu kurze Schlüssel werden mit Nullen aufgefüllt, zu lange werden abgeschnitten'
  },

  iv: {
    title: 'Initialisierungsvektor (IV)',
    label: 'Initialisierungsvektor (IV)',
    placeholder: '{blockSize}-IV eingeben',
    placeholderString: '{blockSize}-IV als Zeichenkette eingeben (automatische Auffüllung bei zu kurz)',
    placeholderHex: '{blockSize}-IV in Hex eingeben (automatische Auffüllung bei zu kurz)',
    placeholderBase64: '{blockSize}-IV in Base64 eingeben (automatische Auffüllung bei zu kurz)',
    generateRandom: 'Zufällig generieren',
    sizeHint: '{blockSize}',
    autoFillHint: 'Zu kurze IVs werden mit Nullen aufgefüllt, zu lange werden abgeschnitten'
  },

  input: {
    title: 'Zu verschlüsselnder Inhalt',
    titleDecrypt: 'Zu entschlüsselnder Inhalt',
    clear: 'Leeren',
    placeholder: 'Text eingeben, der verschlüsselt werden soll',
    placeholderDecrypt: 'Chiffretext im {format}-Format eingeben'
  },

  inputFormat: {
    title: 'Eingabeformat',
    string: 'Zeichenkette',
    hex: 'HEX',
    base64: 'Base64'
  },

  output: {
    title: 'Verschlüsselungsergebnis',
    titleDecrypt: 'Entschlüsselungsergebnis',
    copyResult: 'Ergebnis kopieren',
    copied: 'Kopiert'
  },

  outputFormat: {
    title: 'Ausgabeformat',
    string: 'Zeichenkette',
    hex: 'HEX',
    base64: 'Base64'
  },

  error: {
    title: 'Fehler',
    invalidHex: 'Schlüssel muss im HEX-Format sein',
    invalidIvHex: 'IV muss im HEX-Format sein',
    invalidHexInput: 'Ungültige HEX-Eingabe',
    invalidBase64: 'Ungültige Base64-Eingabe',
    unsupportedAlgorithm: 'Algorithmus nicht unterstützt',
    decryptionFailed: 'Entschlüsselung fehlgeschlagen: {message}',
    copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren',
    unknownError: 'Ein Fehler ist aufgetreten',
    invalidHexFormat: 'Ungültiges HEX-Format',
    invalidBase64Format: 'Ungültiges Base64-Format',
    emptyBase64: 'Ungültige Base64-Kodierung',
    decryptFailed: 'Entschlüsselung fehlgeschlagen:'
  },

  info: {
    title: 'Algorithmus-Informationen',
    algorithms: {
      aes: 'AES: Advanced Encryption Standard mit 128-, 192- oder 256-Bit-Schlüsseln',
      des: 'DES: Data Encryption Standard mit 56-Bit-Schlüssel, geringe Sicherheit',
      tripledes: '3DES: Triple DES mit drei 56-Bit-Schlüsseln für höhere Sicherheit',
      sm4: 'SM4: Chinesischer Standard mit 128-Bit-Schlüsseln',
      "3des": '3DES: Triple DES mit drei 56-Bit-Schlüsseln für höhere Sicherheit'
    },
    modes: {
      title: 'Betriebsmodi erklärt',
      ecb: 'ECB: Jeder Block wird unabhängig verschlüsselt, nicht für sensible Daten empfohlen',
      cbc: 'CBC: Jeder Block hängt vom vorherigen ab, sicherer',
      cfb: 'CFB: Wandelt Blockchiffre in Stromchiffre um',
      ofb: 'OFB: Stromchiffre-Modus, gleiche Operation für Ver- und Entschlüsselung',
      ctr: 'CTR: Zählermodus, ermöglicht parallele Verarbeitung'
    }
  },

  buttons: {
    process: 'Verschlüsseln',
    processDecrypt: 'Entschlüsseln'
  },

  file: {
    title: 'Dateiverschlüsselung',
    select: 'Datei auswählen',
    drop: 'Oder Datei hier ablegen',
    encrypt: 'Datei verschlüsseln',
    decrypt: 'Datei entschlüsseln',
    download: 'Ergebnis herunterladen',
    selected: 'Ausgewählt: {name}',
    size: 'Größe: {size}',
    maxSize: 'Maximale Größe: 100MB',
    encryptingFile: 'Datei wird verschlüsselt...',
    decryptingFile: 'Datei wird entschlüsselt...',
    downloadReady: 'Bereit zum Herunterladen',
    fileTooBig: 'Datei zu groß. Maximal 100MB erlaubt.'
  },

  options: {
    title: 'Optionen',
    autoDecrypt: 'Nach Verschlüsselung automatisch entschlüsseln',
    includeMeta: 'Algorithmus-Metadaten in Ausgabe einbeziehen',
    kdf: 'Schlüsselableitungsfunktion',
    pbkdf2: 'PBKDF2',
    scrypt: 'scrypt',
    argon2: 'Argon2id',
    salt: 'Salt (für Schlüsselableitung)',
    saltPlaceholder: 'Salt in Hex eingeben oder leer lassen für zufällige Generierung',
    autoClear: 'Sensible Daten automatisch löschen',
    saveSettings: 'Einstellungen speichern'
  },

  security: {
    title: 'Sicherheitsinformationen',
    description: 'Über Verschlüsselungssicherheit',
    warning: 'Warnung',
    ecbInsecure: 'ECB-Modus wird für sichere Anwendungen nicht empfohlen, da er Datenmuster nicht gut verbirgt.',
    useModern: 'Für sensible Daten AES-256 mit GCM oder CBC-Modus verwenden.',
    keyWarning: 'Schützen Sie Ihre Verschlüsselungsschlüssel. Bei Verlust sind die Daten nicht wiederherstellbar.',
    browserWarning: 'Browser-basierte Verschlüsselung ist praktisch, aber für hochsensible Daten möglicherweise nicht geeignet.',
    learnMore: 'Mehr über Verschlüsselung erfahren'
  },

  messages: {
    noAlgorithm: 'Bitte Verschlüsselungsalgorithmus auswählen',
    noKey: 'Bitte Verschlüsselungsschlüssel oder Passwort eingeben',
    invalidKeyLength: 'Ungültige Schlüssellänge für gewählten Algorithmus',
    invalidIv: 'Ungültige IV-Länge für gewählten Algorithmus und Modus',
    noData: 'Bitte zu verschlüsselnde/entschlüsselnde Daten eingeben',
    padError: 'Padding-Fehler - Schlüssel oder Daten möglicherweise falsch',
    fileSuccess: 'Datei erfolgreich verarbeitet',
    fileError: 'Fehler bei Dateiverarbeitung: {error}',
    clipboardError: 'Fehler beim Kopieren in Zwischenablage: {error}',
    invalidFormat: 'Ungültiges Eingabeformat'
  }
};