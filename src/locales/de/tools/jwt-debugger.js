export default {
  name: 'JWT Debugging-Tool',
  description: 'Online-Tool zum Dekodieren, Validieren und Debuggen von JWT-Tokens',

  sections: {
    encoded: 'Kodiertes JWT',
    decoded: 'Dekodiertes JWT',
    header: 'Header',
    payload: 'Payload',
    signature: 'Signatur',
    verification: 'Validierung'
  },

  actions: {
    decode: 'Dekodieren',
    verify: 'Signatur validieren',
    copy: 'Kopieren',
    share: 'Token teilen',
    generateToken: 'Token generieren',
    generateRandomToken: 'Zufälliges Token',
    clear: 'Leeren',
    generateRandomPayload: 'Zufälligen Payload generieren',
    generateRandomKey: 'Zufälligen Schlüssel generieren',
    generateKeyPair: 'Schlüsselpaar generieren'
  },

  messages: {
    invalidToken: 'Ungültiges JWT-Format',
    copied: 'In die Zwischenablage kopiert!',
    copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren',
    verificationSuccess: 'Signaturvalidierung erfolgreich',
    verificationFailed: 'Signaturvalidierung fehlgeschlagen',
    keyGenerated: 'Schlüsselpaar erfolgreich generiert',
    keyGenerationFailed: 'Generierung des Schlüsselpaars fehlgeschlagen',
    tokenGenerated: 'Token erfolgreich generiert',
    tokenGenerationFailed: 'Token-Generierung fehlgeschlagen',
    randomTokenGenerated: 'Zufälliges Token erfolgreich generiert und dekodiert',
    certUploadSuccess: 'Zertifikat erfolgreich hochgeladen',
    certFormatInvalid: 'Ungültiges Zertifikatsformat',
    certReadFailed: 'Zertifikatslesung fehlgeschlagen',
    tokenFormatError: 'Ungültiges Token-Format, JWT sollte drei durch Punkte getrennte Teile enthalten',
    tokenHeaderMissingAlg: 'Token-Header fehlt Algorithmusfeld (alg)',
    tokenHeaderInvalid: 'Ungültiger Token-Header',
    tokenVerificationFailed: 'Token-Formatvalidierung fehlgeschlagen',
    tokenExpired: 'Token abgelaufen. Ablaufzeit: {time}',
    tokenNotEffective: 'Token noch nicht gültig. Gültig ab: {time}',
    tokenIssuedInFuture: 'Token-Ausstellungszeit ungewöhnlich, liegt in der Zukunft. Ausstellungszeit: {time}',
    algorithmNotSupported: 'Algorithmus nicht unterstützt',
    randomSecretGenerated: 'Zufälliger Schlüssel erfolgreich generiert',
    randomSecretGenerationFailed: 'Generierung des zufälligen Schlüssels fehlgeschlagen',
    randomPayloadGenerated: 'Zufälliger Payload generiert',
    randomPayloadGenerationFailed: 'Generierung des zufälligen Payloads fehlgeschlagen',
    contentCleared: 'Alle Inhalte geleert',
    tokenDecodeSuccess: 'Token erfolgreich dekodiert',
    tokenDecodeFailed: 'Token-Dekodierung fehlgeschlagen',
    pleaseInputKey: 'Bitte Schlüssel eingeben',
    pleaseGenerateKeyPair: 'Bitte zuerst {type}-Schlüsselpaar generieren',
    pleaseInputVerificationKey: 'Bitte Validierungsschlüssel eingeben',
    pleaseInputPublicKey: 'Bitte Validierungs-Public-Key eingeben',
    pleaseInputToken: 'Bitte zu validierendes Token eingeben',
    payloadFormatError: 'Payload-Formatfehler, bitte JSON-Format prüfen',
    invalidTimestamp: 'Ungültiger Zeitstempel'
  },

  placeholders: {
    secretKey: 'Bitte Schlüssel eingeben',
    privateKey: 'Bitte Private-Key eingeben oder generieren',
    publicKey: 'Bitte Public-Key eingeben oder generieren',
    payload: 'Bitte Payload im JSON-Format eingeben',
    token: 'Bitte JWT-Token eingeben oder generieren',
    verificationSecretKey: 'Bitte Validierungsschlüssel eingeben',
    verificationPublicKey: 'Bitte Validierungs-Public-Key eingeben'
  },

  labels: {
    algorithm: 'Algorithmus',
    secretKey: 'Geheimer Schlüssel',
    privateKey: 'Privater Schlüssel',
    publicKey: 'Öffentlicher Schlüssel',
    certificate: 'Digitales Zertifikat (optional)',
    payload: 'Payload (Nutzlast)',
    token: 'Token',
    verificationPublicKey: 'Validierungs-Public-Key',
    tokenResult: 'Token-Dekodierungsergebnis',
    verifyToken: 'Token validieren',
    tokenDecoded: 'Token verwendet {alg}-Algorithmus für Signatur',
    timestamp: 'Zeitstempel-Dekodierung',
    issuedAt: 'Ausstellungszeit (iat)',
    expiration: 'Ablaufzeit (exp)',
    notBefore: 'Gültig ab (nbf)',
    tokenFormat: 'Kein Inhaltshinweis',
    tokenFormatDesc: 'Nach Eingabe oder Generierung eines JWT-Tokens wird hier das Dekodierungsergebnis angezeigt',
    uploadCert: 'Zertifikatsdatei ablegen oder klicken zum Auswählen',
    certName: 'Zertifikatsname',
    sm3Fingerprint: 'SM3-Fingerabdruck (x5t#sm3)',
    certUploadNote: 'Nach Hochladen des Zertifikats wird das JWT-Header-Feld "x5t#sm3" hinzugefügt',
    secondsTimestamp: 'Zeitstempel in Sekunden',
    millisecondsTimestamp: 'Zeitstempel in Millisekunden'
  },

  buttons: {
    cancel: 'Abbrechen',
    verify: 'Validieren',
    clearCert: 'Löschen',
    generateToken: 'Token generieren',
    decodeToken: 'Token dekodieren',
    verifyToken: 'Token validieren',
    close: 'Schließen'
  },

  verification: {
    success: 'Validierung erfolgreich',
    failure: 'Validierung fehlgeschlagen',
    validMessage: 'Token-Signatur validiert, Signatur ist gültig.',
    invalidMessage: 'Token-Signaturvalidierung fehlgeschlagen, Signatur ist ungültig.'
  },

  errors: {
    noToken: 'Bitte zu validierendes Token eingeben',
    invalidToken: 'Ungültiges Token-Format',
    noSecretKey: 'Bitte Validierungsschlüssel bereitstellen',
    noPublicKey: 'Bitte Validierungs-Public-Key bereitstellen',
    invalidSignature: 'Ungültige Signatur',
    verificationFailed: 'Token-Validierung fehlgeschlagen'
  }
};