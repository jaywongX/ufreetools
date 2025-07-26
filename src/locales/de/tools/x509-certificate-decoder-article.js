export default {
  title: 'X.509-Zertifikats-Parser: SSL/TLS-Zertifikate analysieren und validieren',
  introduction: {
    title: 'Was ist ein X.509-Zertifikats-Parser?',
    p1: 'Der <strong>X.509-Zertifikats-Parser</strong> ist ein leistungsfähiges Tool für Sicherheitsexperten, Webentwickler und IT-Administratoren zur Analyse digitaler Zertifikate, die in SSL/TLS-Protokollen verwendet werden. Unser kostenloses Online-Tool bietet eine umfassende Analyse von Zertifikatskomponenten, Gültigkeitsstatus und Sicherheitsmerkmalen - ohne Softwareinstallation.',
    p2: 'Digitale Zertifikate sind entscheidend für sichere Netzwerkkommunikation und stellen vertrauenswürdige Verbindungen zwischen Browsern und Servern her. Die Fehlerbehebung bei Zertifikaten erfordert jedoch das Verständnis ihrer komplexen Struktur und kodierten Daten. Der X.509-Zertifikats-Parser vereinfacht diesen Prozess, indem er Rohzertifikatsdaten in menschenlesbare Informationen umwandelt, sodass Probleme schnell identifiziert und die Authentizität von Zertifikaten überprüft werden kann.'
  },
  useCases: {
    title: 'Typische Anwendungsfälle für die Zertifikatsanalyse',
    case1: '<strong>SSL/TLS-Zertifikatsvalidierung</strong>: Überprüfen Sie die Authentizität und Integrität von Website-Zertifikaten vor der Bereitstellung.',
    case2: '<strong>Überwachung des Zertifikatsablaufs</strong>: Prüfen Sie Gültigkeitsdauer und Ablaufdatum, um unerwartete Dienstunterbrechungen zu vermeiden.',
    case3: '<strong>Zertifikatspfadvalidierung</strong>: Überprüfen Sie die Zertifikatskette, um korrekte Vertrauensbeziehungen zwischen Zertifikaten sicherzustellen.',
    case4: '<strong>Fehlerbehebung bei Zertifikatskonfiguration</strong>: Identifizieren Sie Konfigurationsfehler in Zertifikaten, die zu Browserwarnungen oder Verbindungsproblemen führen.',
    case5: '<strong>Digitale Signaturvalidierung</strong>: Überprüfen Sie Zertifikatssignaturalgorithmen und öffentliche Schlüsselparameter für Sicherheitsbewertungen.'
  },
  faq: {
    title: 'Häufige Fragen zu X.509-Zertifikaten',
    q1: 'Welche Informationen kann ich aus einem X.509-Zertifikat extrahieren?',
    a1: 'Mit unserem <strong>X.509-Zertifikats-Parser</strong> können Sie umfassende Informationen extrahieren, einschließlich Ausstellerdetails, Subject-Informationen, Gültigkeitsdauer, öffentlicher Schlüsselparameter, Erweiterungen (wie Subject Alternative Names), digitaler Signaturalgorithmen und Zertifikats-Fingerabdrücken. Das Tool bietet auch visuelle Indikatoren für den Zertifikatszustand und Ablaufstatus, wodurch die Identifizierung von Zertifikaten, die aktualisiert werden müssen, erleichtert wird.',
    q2: 'Wie kann ich feststellen, ob mein Zertifikat von Browsern vertrauenswürdig ist?',
    a2: 'Browser vertrauen einem Zertifikat typischerweise, wenn es von einer anerkannten Zertifizierungsstelle (CA) ausgestellt wurde und eine gültige Vertrauenskette bildet. Unser Parsing-Tool hilft Ihnen, die Zertifikatskette zu visualisieren und die Gültigkeit jedes Zertifikats zu überprüfen. Wichtige Indikatoren sind der Zertifikatsaussteller (sollte eine vertrauenswürdige CA sein), Gültigkeitsdaten (nicht abgelaufen), korrekte Basic Constraints (für Zwischenzertifikate) und angemessene Key Usage-Erweiterungen. Das Browservertrauen hängt auch davon ab, dass das Zertifikat nicht widerrufen wurde, was über OCSP- oder CRL-Informationen im Zertifikat überprüft werden kann.',
    q3: 'Was ist der Unterschied zwischen PEM- und DER-Zertifikatsformaten?',
    a3: 'PEM (Privacy Enhanced Mail) und DER (Distinguished Encoding Rules) sind zwei gängige Formate für X.509-Zertifikate. Das <strong>PEM-Format</strong> ist Base64-kodiert, beginnt mit "-----BEGIN CERTIFICATE-----" und ist menschenlesbarer Text. Es wird häufig für Webserver und E-Mails verwendet. Das <strong>DER-Format</strong> ist binär kodiert, nicht menschenlesbar, aber kompakter. Unser Zertifikats-Parser unterstützt automatisch beide Formate und erkennt und parst das entsprechende Format ohne manuelle Auswahl.',
    q4: 'Wie überprüfe ich, ob mein Zertifikat bestimmte TLS-Funktionen unterstützt?',
    a4: 'Um die TLS-Funktionsunterstützung in einem Zertifikat zu überprüfen, nutzen Sie unseren Zertifikats-Parser zur Untersuchung der <strong>Extended Key Usage</strong>- und <strong>Key Usage</strong>-Erweiterungen. Für Server-Authentifizierung (Webserver) suchen Sie nach dem "Server Authentication"-Wert (1.3.6.1.5.5.7.3.1) in den Extended Key Usage-Erweiterungen. Die Key Usage-Erweiterung zeigt erlaubte Operationen wie digitale Signaturen oder Schlüsselverschlüsselung an. Überprüfen Sie außerdem den Signaturalgorithmus, um sicherzustellen, dass moderne, sichere Algorithmen (wie SHA-256 mit RSA oder ECDSA) verwendet werden, nicht veraltete Algorithmen (wie SHA-1 oder MD5).',
    q5: 'Was sollte ich tun, wenn mein Zertifikat bald abläuft?',
    a5: 'Wenn unser <strong>Zertifikats-Parser</strong> anzeigt, dass Ihr Zertifikat bald abläuft (typischerweise innerhalb von 30 Tagen), sollten Sie es umgehend über Ihren Zertifikatsanbieter oder Ihre Zertifizierungsstelle erneuern. Der Erneuerungsprozess umfasst normalerweise: 1) Generierung eines neuen Certificate Signing Request (CSR), 2) Einreichung bei Ihrer CA, 3) Abschluss der Verifizierungsanforderungen und 4) Installation des neuen Zertifikats auf Ihrem Server. Wir empfehlen, diesen Prozess mindestens 2-4 Wochen vor Ablauf zu starten, um Dienstunterbrechungen oder Sicherheitswarnungen für Benutzer zu vermeiden.'
  },
  tutorial: {
    title: 'So verwenden Sie den X.509-Zertifikats-Parser',
    step1: {
      title: 'Zertifikat hochladen oder einfügen',
      content: 'Laden Sie zunächst Ihre X.509-Zertifikatsdatei (.crt, .cer, .pem, .der) hoch oder fügen Sie PEM-kodierte Zertifikatstext direkt in das Eingabefeld ein. Unser Tool unterstützt Drag-and-Drop für einfachen Dateiupload. Wenn Sie kein Zertifikat zur Analyse haben, können Sie auf "Beispiel laden" klicken, um zu sehen, wie das Tool mit einem Demo-Zertifikat umgeht.'
    },
    step2: {
      title: 'Zertifikat parsen',
      content: 'Nach dem Laden des Zertifikats klicken Sie auf "Zertifikat dekodieren". Unser Tool erkennt automatisch das Format (PEM oder DER) und parst die Zertifikatsdaten. Die Verarbeitung erfolgt vollständig in Ihrem Browser, sodass Ihre Zertifikatsdaten Ihr Gerät nicht verlassen - dies macht es zu einer sicheren Wahl für die Analyse sensibler Zertifikate.'
    },
    step3: {
      title: 'Zertifikatsdetails analysieren',
      content: 'Nach dem Parsen zeigt das Tool umfassende Zertifikatsinformationen in leicht navigierbaren Registerkarten an. Die "Grundinformationen"-Registerkarte zeigt Kerndetails wie Gültigkeitsdauer, Seriennummer und Signaturalgorithmus. Visuelle Indikatoren zeigen klar an, ob das Zertifikat gültig ist, bald abläuft oder bereits abgelaufen ist. Sie können detailliertere Informationen in speziellen Registerkarten erkunden, einschließlich Subject und Issuer, Erweiterungen, öffentlichem Schlüssel und mehr.'
    },
    step4: {
      title: 'Berichte exportieren und herunterladen',
      content: 'Um Ihre Zertifikatsanalyse zu speichern oder zu teilen, nutzen Sie die Exportfunktionen am Ende der Ergebnisse. Sie können umfassende Berichte in verschiedenen Formaten (PDF, TXT, HTML oder JSON) herunterladen oder bestimmte Abschnitte in die Zwischenablage kopieren. Diese Berichte sind wertvoll für die Dokumentation, Compliance-Zwecke oder die gemeinsame Nutzung mit Teammitgliedern während der Fehlerbehebung.'
    }
  },
  resources: {
    title: 'Zusätzliche Ressourcen',
    intro: 'Erweitern Sie Ihr Wissen über X.509-Zertifikate und verwandte Sicherheitsthemen mit diesen wertvollen Ressourcen:',
    relatedTools: 'Verwandte Sicherheitstools',
    tool1: 'Hash-Generator - Erstellen Sie kryptografische Hashes für die Datenvalidierung',
    tool2: 'Base64-Encoder/Decoder - Konvertieren Sie zwischen Binär- und Base64-Formaten',
    tool3: 'JWT-Decoder - Analysieren Sie JSON Web Tokens für Authentifizierungszwecke',
    externalLinks: 'Externe Referenzen',
    external1: 'IETF RFC 5280 - Internet X.509 Public Key Infrastructure Certificate',
    external2: 'Wikipedia - Überblick über den X.509-Zertifikatsstandard',
    external3: 'SSL.com - Was ist ein X.509-Zertifikat?'
  },
  conclusion: {
    title: 'Fazit',
    content: 'Der <strong>X.509-Zertifikats-Parser</strong> ist ein unverzichtbares Tool für alle, die mit digitalen Zertifikaten und sicherer Kommunikation arbeiten. Durch die Bereitstellung klarer, detaillierter Informationen über Zertifikatsstruktur und -gültigkeit hilft unser Tool Ihnen, sichere und fehlerfreie SSL/TLS-Implementierungen zu gewährleisten. Egal, ob Sie Sicherheitsexperte für Audits, Webentwickler für HTTPS-Problembehebung oder IT-Administrator für Zertifikatsbereitstellung sind - dieser Parser vereinfacht die Zertifikatsanalyse und verbessert Ihre Sicherheitspraktiken.'
  }
}
