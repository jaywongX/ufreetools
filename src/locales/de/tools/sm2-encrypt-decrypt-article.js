export default {
  title: 'SM2-Verschlüsselung: Kompletter Leitfaden',
  introduction: {
    title: 'Was ist SM2-Verschlüsselung und wie funktioniert sie?',
    p1: 'SM2-Verschlüsselung ist ein wesentlicher Bestandteil der chinesischen kommerziellen Kryptografiestandards und ein leistungsfähiger Public-Key-Kryptografiealgorithmus. Entwickelt von der chinesischen Commercial Cryptography Administration bietet SM2 eine mit RSA-2048 vergleichbare Sicherheit, jedoch mit kürzeren Schlüssellängen, besserer Leistung und ist somit ideal für sichere digitale Kommunikation und Datenschutz.',
    p2: 'Im Gegensatz zu symmetrischen Verschlüsselungsmethoden verwendet SM2 ein Schlüsselpaar: Einen öffentlichen Schlüssel, der frei geteilt werden kann, um Daten zu verschlüsseln, und einen privaten Schlüssel, der geheim gehalten werden muss, um Daten zu entschlüsseln. Diese asymmetrische Methode löst das Schlüsselverteilungsproblem traditioneller Verschlüsselungsmethoden und ermöglicht es Parteien, sicher zu kommunizieren, ohne vorher Schlüssel austauschen zu müssen.',
    p3: 'Unser SM2-Verschlüsselungstool bietet eine benutzerfreundliche Oberfläche zur Generierung von Schlüsselpaaren, Verschlüsselung sensibler Informationen und Entschlüsselung von SM2-verschlüsselten Nachrichten - ohne spezielles Kryptografiewissen. Dies macht fortschrittliche Verschlüsselungstechnologie für alle zugänglich, von Cybersicherheitsexperten bis zu Privatpersonen, die Wert auf Datenschutz legen.'
  },
  useCases: {
    title: 'Anwendungsfälle für SM2-Verschlüsselung',
    item1: 'Sichere Kommunikation in Banken- und Finanzsystemen, insbesondere in Regionen, wo SM2 regulatorischer Standard ist',
    item2: 'Schutz sensibler Regierungs- und Militärkommunikation',
    item3: 'Digitale Signatursysteme für Dokumentenauthentifizierung und Nichtabstreitbarkeit',
    item4: 'Schutz übertragener Daten für E-Commerce-Plattformen und Online-Dienste',
    item5: 'Implementierung in digitalen Zertifikatsystemen und PKI-Infrastrukturen zur Authentifizierung'
  },
  guide: {
    title: 'Anleitung zur Nutzung des SM2-Verschlüsselungstools',
    step1: {
      title: 'Schritt 1: Schlüsselverwaltung',
      description: 'Richten Sie zunächst die Verschlüsselungsschlüssel ein. Sie haben drei Möglichkeiten:',
      option1: 'Klicken Sie auf "Neuen Schlüssel generieren", um ein neues SM2-Schlüsselpaar zu erstellen',
      option2: 'Importieren Sie bestehende Schlüssel über die Schaltfläche "Schlüssel importieren"',
      option3: 'Klicken Sie auf "Beispiel laden", um vorgefertigte Schlüssel zum Testen des Tools zu verwenden'
    },
    step2: {
      title: 'Schritt 2: Daten vorbereiten',
      description: 'Für Verschlüsselung oder Entschlüsselung müssen Sie Daten eingeben:',
      option1: 'Wählen Sie das Eingabeformat (Text, Hexadezimal, Base64 oder Datei)',
      option2: 'Geben Sie für die Verschlüsselung Ihren Klartext in das Eingabefeld ein',
      option3: 'Für die Entschlüsselung geben Sie den zu entschlüsselnden Chiffretext ein',
      option4: 'Verwenden Sie den Dateimodus, indem Sie eine Datei ziehen und ablegen oder auswählen'
    },
    step3: {
      title: 'Schritt 3: Verschlüsselungseinstellungen konfigurieren',
      description: 'Vor der Datenverarbeitung konfigurieren Sie diese wichtigen Einstellungen:',
      option1: 'Wählen Sie das Chiffre-Format (C1C2C3 oder C1C3C2) - chinesische Anwendungen verwenden typischerweise C1C3C2',
      option2: 'Wählen Sie Ihr bevorzugtes Ausgabeformat (Text, Hexadezimal oder Base64)'
    },
    step4: {
      title: 'Schritt 4: Verarbeitung und Ergebnisse',
      description: 'Klicken Sie auf "Verschlüsseln" oder "Entschlüsseln", um Ihre Daten zu verarbeiten. Nach Abschluss können Sie das Ergebnis in die Zwischenablage kopieren, als Datei herunterladen oder (bei Verschlüsselung) die detaillierten Komponenten des Chiffretexts (C1, C2 und C3 Teile) anzeigen.'
    }
  },
  faq: {
    title: 'Häufige Fragen zur SM2-Verschlüsselung',
    q1: 'Welche Vorteile bietet SM2-Verschlüsselung gegenüber anderen Algorithmen?',
    a1: 'SM2 bietet mehrere Vorteile, darunter kürzere Schlüssellängen (256 Bit) bei vergleichbarer Sicherheit zu RSA-2048, schnellere Ver-/Entschlüsselungsoperationen und Compliance mit chinesischen Regulierungsstandards. Es wurde auch entwickelt, um resistent gegen Quantencomputerangriffe zu sein, was es zu einer zukunftssicheren Verschlüsselungslösung macht.',
    q2: 'Was ist der Unterschied zwischen C1C2C3 und C1C3C2 Chiffre-Formaten?',
    a2: 'Beide Formate enthalten die gleichen drei Komponenten, aber in unterschiedlicher Anordnung. C1 repräsentiert den elliptischen Kurvenpunkt, C2 sind die tatsächlich verschlüsselten Daten und C3 ist der Hashwert zur Integritätsprüfung. C1C2C3 ist das Originalstandardformat, während C1C3C2 in chinesischen Anwendungen und Systemen häufiger verwendet wird. Unser Tool unterstützt beide Formate für maximale Kompatibilität.',
    q3: 'Ist SM2-Verschlüsselung für sensible persönliche oder geschäftliche Daten geeignet?',
    a3: 'Ja, SM2 eignet sich zum Schutz sensibler Daten, da es starke kryptografische Sicherheit bietet. Für hochsensible Unternehmensanwendungen empfehlen wir jedoch die Implementierung von SM2 mit geeigneten Schlüsselverwaltungssystemen und Protokollen. Während unser Online-Tool praktisch ist, sollten Produktionsumgebungen lokal installierte Kryptografiebibliotheken und sichere Schlüsselspeicher verwenden.',
    q4: 'Wie überprüfe ich, ob meine SM2-Verschlüsselung korrekt funktioniert?',
    a4: 'Sie können Ihre SM2-Implementierung validieren, indem Sie eine Beispielnachricht verschlüsseln und dann entschlüsseln, um sicherzustellen, dass Sie den ursprünglichen Klartext zurückerhalten. Unser Tool bietet eine "Beispiel laden"-Option, die diesen Prozess automatisch demonstriert. Für Produktionssysteme sollten Sie die Testvektoren aus den SM2-Standarddokumenten zur Validierung verwenden.',
    q5: 'Kann man SM2-verschlüsselte Daten ohne privaten Schlüssel entschlüsseln?',
    a5: 'Nein, korrekt implementierte SM2-Verschlüsselung kann ohne den entsprechenden privaten Schlüssel nicht entschlüsselt werden. Die Sicherheit von SM2 basiert auf dem diskreten Logarithmusproblem elliptischer Kurven, das mit aktueller Technologie nicht praktisch lösbar ist. Daher ist es entscheidend, den privaten Schlüssel sicher aufzubewahren und niemals mit Unbefugten zu teilen.'
  },
  comparison: {
    title: 'Vergleich von SM2 mit anderen Verschlüsselungsalgorithmen',
    p1: 'SM2 gehört zur Familie der Elliptic Curve Cryptography (ECC)-Algorithmen, ähnlich wie ECDSA, aber mit spezifischen, im chinesischen Standard definierten Parametern. Im Vergleich zu RSA bietet SM2 bei deutlich kürzeren Schlüssellängen vergleichbare Sicherheit (ein 256-Bit SM2-Schlüssel bietet ähnliche Sicherheit wie ein 2048-Bit RSA-Schlüssel), was zu schnelleren Operationen und geringerem Ressourcenbedarf führt.',
    p2: 'Für Anwendungen, die chinesische Kryptografiestandards einhalten müssen, ist SM2 gegenüber internationalen Algorithmen wie RSA oder ECDSA vorzuziehen. Seine Leistungsvorteile machen es besonders geeignet für ressourcenbeschränkte Umgebungen wie Smartcards, IoT-Geräte und mobile Anwendungen, wo Rechenleistung und Speicher begrenzt sind.',
    p3: 'Während SM2 internationale Anerkennung gewinnt, wird RSA in globaler Software und Hardware noch breiter unterstützt. Für einen Vergleich mit einer anderen beliebten asymmetrischen Verschlüsselungsmethode besuchen Sie unser',
    linkText: 'RSA-Verschlüsselungstool'
  },
  references: {
    title: 'Referenzen und weiterführende Literatur',
    link1: 'Wikipedia-SM2',
    link2: 'SM2 Elliptic Curve Public Key Cryptography Algorithm',
    link3: 'SM2 Elliptic Curve Public Key Cryptography Algorithm Recommended Curve Parameters',
  },
  relatedTools: {
    title: 'Verwandte Kryptografie-Tools',
    tool1: 'RSA-Verschlüsselungstool',
    tool2: 'Hash-Rechner',
    tool3: 'Symmetrisches Verschlüsselungstool',
    tool4: 'Sicherer Passwortgenerator'
  }
}
