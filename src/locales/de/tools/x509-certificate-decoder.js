export default {
  name: 'X.509-Zertifikats-Parser',
  description: 'Kostenloses Online-Tool zur Analyse von X.509-Zertifikaten. SSL/TLS-Zertifikate dekodieren und untersuchen, Details anzeigen, Gültigkeit prüfen, öffentliche Schlüssel extrahieren und Berichte exportieren.',

  instructions: {
    title: 'Zertifikats-Parser',
    description: 'Laden Sie eine Zertifikatsdatei hoch oder fügen Sie PEM-kodierte Zertifikatsdaten ein, um die Details anzuzeigen.'
  },

  dropzone: {
    title: 'Zertifikatsdatei hier ablegen',
    formats: 'Unterstützte Formate: .crt, .cer, .pem, .der, .p12 und .pfx'
  },

  buttons: {
    browse: 'Datei auswählen',
    decode: 'Zertifikat dekodieren',
    loadSample: 'Beispiel laden',
    downloadPdf: 'PDF-Bericht herunterladen',
    downloadTxt: 'Textbericht herunterladen',
    downloadHtml: 'HTML-Bericht herunterladen',
    downloadJson: 'JSON-Bericht herunterladen',
    copyBasic: 'Grunddaten kopieren',
    copySubject: 'Subject/Issuer kopieren',
    copyAll: 'Alle Daten kopieren',
    copyValue: 'Wert kopieren',
    downloadKey: 'Schlüssel herunterladen',
    exportPem: 'Als PEM exportieren',
    downloadCert: 'Zertifikat herunterladen',
  },

  input: {
    paste: 'Oder Zertifikatsdaten einfügen:',
    placeholder: 'Fügen Sie Ihr PEM-kodiertes Zertifikat ein (-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----)'
  },

  loading: 'Zertifikat wird analysiert...',

  error: {
    title: 'Fehler bei der Zertifikatsanalyse',
    invalidFormat: 'Ungültiges Zertifikatsformat',
    invalidBase64: 'Keine gültige Base64-kodierte Zertifikatsdatei',
    invalidStructure: 'Ungültige Zertifikatsdatenstruktur',
    invalidDer: 'Ungültige DER-formatierte Zertifikatsdatei',
    invalidAsn1: 'Ungültiges Zertifikat: ASN.1-Daten konnten nicht geparst werden',
    unsupportedType: 'Nicht unterstützter Zertifikatstyp',
    failedParse: 'Zertifikatsdaten konnten nicht geparst werden',
    invalidP12: 'Ungültiges PKCS#12-Dateiformat',
    invalidP12Password: 'Ungültiges PKCS#12-Passwort',
    noCertificatesInP12: 'Keine Zertifikate in der PKCS#12-Datei gefunden',
    unableToProcessP12: 'PKCS#12-Datei konnte nicht verarbeitet werden'
  },

  guide: {
    title: 'Anleitung zur Nutzung',
    step1: 'Laden Sie Ihre X.509-Zertifikatsdatei (.crt, .cer, .pem, .der, .p12 oder .pfx) hoch oder fügen Sie die Zertifikatsdaten in das Textfeld unten ein.',
    step2: 'Das Tool erkennt automatisch das Format (PEM, DER oder PKCS#12) und dekodiert es.',
    step3: 'Sehen Sie sich die detaillierten Zertifikatsinformationen an, einschließlich Subject, Issuer, Gültigkeitsdauer, Erweiterungen und öffentlichem Schlüssel.',
    step4: 'Nutzen Sie die Buttons unten, um Berichte in verschiedenen Formaten herunterzuladen oder Informationen in die Zwischenablage zu kopieren.'
  },

  tabs: {
    basic: 'Grundinformationen',
    subject: 'Subject & Issuer',
    extensions: 'Erweiterungen',
    publicKey: 'Öffentlicher Schlüssel',
    fingerprints: 'Fingerabdrücke',
    raw: 'Rohzertifikat'
  },

  results: {
    title: 'Zertifikatsdetails',
    serialNumber: 'Seriennummer',
    version: 'Version',
    sigAlg: 'Signaturalgorithmus',
    validFrom: 'Gültig ab',
    validTo: 'Gültig bis',
    subject: 'Subject',
    issuer: 'Issuer',
    extensions: 'Erweiterungen',
    publicKey: 'Öffentlicher Schlüssel',
    algorithm: 'Algorithmus',
    keySize: 'Schlüsselgröße',
    keyValue: 'Schlüsselwert',
    fingerprints: 'Fingerabdrücke',
    rawCertificate: 'Rohzertifikat',
    field: 'Feld',
    value: 'Wert',
    critical: 'Kritisch',
    noExtensions: 'Keine Erweiterungen in diesem Zertifikat gefunden.',
    validity: 'Zertifikatsgültigkeit',
    expiresIn: 'Läuft in {days} Tagen ab',
    visualization: 'Zertifikatsvisualisierung',
    daysRemaining: 'Verbleibende Tage',
    valid: 'Gültig',
    expired: 'Abgelaufen',
    expiringSoon: 'Bald ablaufend',
    fieldDescriptions: 'Feldbeschreibungen',
    certificateUsage: 'Zertifikatsverwendung',
    certificateChain: 'Zertifikatskette',
    signatureValue: 'Signaturwert',
    notAvailable: 'Nicht verfügbar',
    noSpecificUsage: 'Keine spezifische Verwendung angegeben',
    signatureError: 'Fehler beim Parsen des Signaturwerts',
    keyDetails: 'Schlüsseldetails',
    enhancedView: 'Erweiterte Ansicht',
    endEntity: 'End-Entity',
    intermediate: 'Zwischenzertifikat',
    rootCA: 'Root-CA',
    endEntityCert: 'End-Entity-Zertifikat',
    intermediateCert: 'Zwischenzertifikat',
    rootCert: 'Root-Zertifizierungsstelle',
    issuedBy: 'Ausgestellt von',
    unknownIssuer: 'Unbekannter Aussteller',
    notYetValid: 'Noch nicht gültig'
  },

  report: {
    title: 'X.509-Zertifikatsbericht',
    generatedOn: 'Erstellt am'
  },

  extensions: {
    subjectKeyIdentifier: 'Subject Key Identifier',
    keyUsage: 'Key Usage',
    subjectAltName: 'Subject Alternative Name',
    basicConstraints: 'Basic Constraints',
    crlDistributionPoints: 'CRL-Verteilungspunkte',
    certificatePolicies: 'Zertifikatsrichtlinien',
    authorityKeyIdentifier: 'Authority Key Identifier',
    extKeyUsage: 'Erweiterte Schlüsselverwendung',
    authorityInfoAccess: 'Authority Information Access',
    ctPrecertificateScts: 'CT Precertificate SCTs'
  },

  usage: {
    serverAuth: 'Server-Authentifizierung',
    clientAuth: 'Client-Authentifizierung',
    codeSigning: 'Code-Signierung',
    emailProtection: 'E-Mail-Schutz',
    timeStamping: 'Zeitstempel',
    ocspSigning: 'OCSP-Signierung'
  },

  customOID: {
    title: 'Benutzerdefinierte OID-Abfrage',
    placeholder: 'OID eingeben, z.B. 2.5.29.15',
    lookup: 'Abfragen',
    result: 'Ergebnis',
    value: 'Wert',
    notFound: 'Keine Informationen zu dieser OID gefunden',
    foundButComplex: 'OID gefunden, aber Wert ist komplex',
    unknownName: 'OID mit unbekanntem Namen',
    complexValue: 'Komplexer Wert, kann nicht direkt angezeigt werden'
  },

  descriptions: {
    serialNumber: 'Eindeutige Seriennummer des Zertifikats, von der Zertifizierungsstelle zugewiesen',
    version: 'Versionsnummer des Zertifikatsformats, typischerweise V3',
    sigAlg: 'Algorithmus, der zur Generierung der Zertifikatssignatur verwendet wurde',
    validFrom: 'Startdatum und -zeit der Zertifikatsgültigkeit',
    validTo: 'Enddatum und -zeit der Zertifikatsgültigkeit',
    subject: 'Identitätsinformationen des Zertifikatsinhabers',
    issuer: 'Identitätsinformationen der ausstellenden Zertifizierungsstelle',
    publicKey: 'Informationen zum öffentlichen Schlüssel des Zertifikatsinhabers',
    extensions: 'Erweiterungsfelder mit zusätzlichen Informationen zur Zertifikatsverwendung'
  },

  messages: {
    copiedToClipboard: 'In die Zwischenablage kopiert',
    copyError: 'Kopieren in die Zwischenablage fehlgeschlagen'
  },

  pkcs12: {
    passwordPrompt: 'Bitte geben Sie das Passwort für die PKCS#12-Datei ein',
    noPassword: 'Kein Passwort'
  },

  keyUsages: {
    digitalSignature: 'Digitale Signatur',
    nonRepudiation: 'Nichtabstreitbarkeit',
    keyEncipherment: 'Schlüsselverschlüsselung',
    dataEncipherment: 'Datenverschlüsselung',
    keyAgreement: 'Schlüsselvereinbarung',
    keyCertSign: 'Zertifikatssignierung',
    crlSign: 'CRL-Signierung',
    encipherOnly: 'Nur verschlüsseln',
    decipherOnly: 'Nur entschlüsseln'
  }
};