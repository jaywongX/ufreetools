export default {
  title: "RSA-Schlüsselpaar-Generator: Online-Tool zur Erstellung sicherer Verschlüsselungsschlüssel",
  intro: "Der <strong>RSA-Schlüsselpaar-Generator</strong> ist ein leistungsstarkes Online-Tool zur Generierung hochsicherer RSA-Schlüsselpaare mit anpassbarer Länge (von 256 bis 16384 Bit). RSA (Rivest-Shamir-Adleman) ist einer der weltweit am häufigsten verwendeten asymmetrischen Verschlüsselungsalgorithmen und bildet die Grundlage für sichere Internet- und Unternehmenskommunikation. Unser Tool macht die Erstellung dieser essentiellen kryptografischen Komponenten einfach, benutzerfreundlich und sicher.",
  
  featuresTitle: "Kernfunktionen des RSA-Schlüsselpaar-Generators",
  feature1: "<strong>Flexible Schlüssellängenoptionen</strong>: Generieren Sie RSA-Schlüssel von 256 bis 16384 Bit, um Ihren spezifischen Sicherheitsanforderungen gerecht zu werden.",
  feature2: "<strong>Mehrere Ausgabeformate</strong>: Exportieren Sie Schlüssel in Standardformaten wie PEM, PKCS#8, Hexadezimal und Base64.",
  feature3: "<strong>Massenproduktion</strong>: Erstellen Sie mehrere Schlüsselpaare gleichzeitig für Test- oder Bereitstellungszwecke.",
  feature4: "<strong>Komponentenvisualisierung</strong>: Untersuchen Sie die mathematischen Komponenten der Schlüssel, einschließlich Modulus, Exponenten, Primfaktoren und CRT-Parameter.",
  feature5: "<strong>Client-seitige Verarbeitung</strong>: Alle Schlüssel werden in Ihrem Browser generiert, sensible kryptografische Materialien verlassen niemals Ihr Gerät.",
  
  useCasesTitle: "Praktische Anwendungsfälle für RSA-Schlüsselpaare",
  
  useCase1Title: "Sichere Kommunikation und Datenverschlüsselung",
  useCase1Desc: "RSA-Schlüsselpaare bilden die Grundlage für sichere Kommunikationskanäle über unsichere Netzwerke. Öffentliche Schlüssel können frei geteilt werden, um Nachrichten zu verschlüsseln, während nur der Besitzer des privaten Schlüssels sie entschlüsseln kann. Dieses <strong>RSA-Verschlüsselungssystem</strong> unterstützt Technologien wie SSL/TLS für HTTPS-Websites, sichere E-Mail-Systeme und Virtual Private Networks (VPNs).",
  
  useCase2Title: "Digitale Signaturen und Dokumentenauthentifizierung",
  useCase2Desc: "RSA ermöglicht <strong>digitale Signaturen</strong>, bei denen Sie mit Ihrem privaten Schlüssel Dokumente signieren können, sodass jeder mit Ihrem öffentlichen Schlüssel die Authentizität und Unversehrtheit überprüfen kann. Dies wird häufig für Code-Signing-Zertifikate, Finanztransaktionen, Rechtsdokumente und Blockchain-Technologien verwendet.",
  
  useCase3Title: "Authentifizierung und Zugriffskontrolle",
  useCase3Desc: "RSA-Schlüsselpaare bieten robuste Mechanismen für <strong>sichere Authentifizierungssysteme</strong>. SSH (Secure Shell) verwendet RSA-Schlüssel für passwortlose Remote-Server-Anmeldungen. Client-Zertifikate in Umgebungen mit gegenseitiger TLS-Authentifizierung basieren ebenfalls auf RSA-Schlüsselpaaren zur sicheren Client-Identitätsüberprüfung.",
  
  useCase4Title: "Sichere API-Kommunikation und Token-Signierung",
  useCase4Desc: "Moderne Anwendungen und Microservices nutzen häufig RSA-Schlüssel zur <strong>Sicherung der API-Kommunikation</strong> und zur Signierung von Authentifizierungstokens wie JWT (JSON Web Tokens). Die asymmetrische Natur von RSA ermöglicht die sichere Überprüfung von Tokens in verteilten Systemen ohne gemeinsame Schlüssel.",
  
  relatedToolsText: "Diese verwandten kryptografischen Tools könnten ebenfalls nützlich sein:",
  relatedTool1: "Hash-Rechner - Generieren und überprüfen Sie Hash-Werte für Datenintegrität",
  relatedTool2: "Unified Social Credit Code Generator - Erstellen Sie gültige chinesische Unternehmensregistrierungscodes",
  
  tutorialTitle: "Anleitung zur Verwendung des RSA-Schlüsselpaar-Generators",
  
  step1Title: "Schritt 1: Schlüssellänge wählen",
  step1Desc: "Wählen Sie zunächst die gewünschte Schlüssellänge in Bit. Für allgemeine Sicherheitszwecke wird mindestens ein 2048-Bit-Schlüssel empfohlen. Für Anwendungen mit höheren Sicherheitsanforderungen wählen Sie 4096 Bit oder mehr. Beachten Sie, dass größere Schlüssel mehr Sicherheit bieten, aber auch mehr Rechenressourcen benötigen.",
  
  step2Title: "Schritt 2: Ausgabeformat auswählen",
  step2Desc: "Wählen Sie Ihr bevorzugtes Ausgabeformat aus dem Dropdown-Menü. PEM ist das am weitesten verbreitete Format und wird durch den Header '-----BEGIN RSA PRIVATE KEY-----' identifiziert. PKCS#8 ist ein moderneres Format, das von den meisten aktuellen Systemen unterstützt wird. Hexadezimal- und Base64-Kodierungen sind für spezielle Programmier- oder Systemintegrationsanforderungen nützlich.",
  
  step3Title: "Schritt 3: Anzahl der Schlüsselpaare festlegen",
  step3Desc: "Passen Sie die Anzahl der benötigten Schlüsselpaare mit dem Eingabefeld an. Dies ist besonders nützlich für Testumgebungen oder die gleichzeitige Bereitstellung mehrerer Sicherheitssysteme.",
  
  step4Title: "Schritt 4: Schlüssel generieren und schützen",
  step4Desc: "Klicken Sie auf \"Schlüsselpaare generieren\" und warten Sie den Abschluss des Prozesses ab. Für größere Schlüssellängen kann dies einige Zeit dauern. Nach der Generierung können Sie Ihre Schlüssel anzeigen, kopieren oder exportieren. Bewahren Sie Ihre privaten Schlüssel sicher auf und teilen Sie sie niemals mit Unbefugten.",
  
  faqTitle: "Häufig gestellte Fragen zu RSA-Schlüsselpaaren",
  
  faq1Question: "Was ist ein RSA-Schlüsselpaar und warum sollte ich es generieren?",
  faq1Answer: "Ein RSA-Schlüsselpaar besteht aus einem öffentlichen und einem privaten Schlüssel und bildet die Grundlage der asymmetrischen Verschlüsselung. Der öffentliche Schlüssel dient zur Datenverschlüsselung oder Signaturüberprüfung, während der private Schlüssel zur Entschlüsselung oder Signaturerstellung verwendet wird. RSA-Schlüsselpaare werden für sichere Kommunikation, Datenverschlüsselung, digitale Signaturen und Authentifizierung benötigt.",
  
  faq2Question: "Welche RSA-Schlüssellänge sollte ich wählen?",
  faq2Answer: "Für aktuelle Sicherheitsanforderungen wird mindestens ein 2048-Bit-RSA-Schlüssel empfohlen. Für allgemeine Zwecke bieten 2048-Bit-Schlüssel ausreichende Sicherheit; für sensible Daten oder hochsichere Systeme sollten 4096-Bit oder längere Schlüssel verwendet werden. Längere Schlüssel bieten mehr Sicherheit, benötigen aber auch mehr Rechenleistung.",
  
  faq3Question: "Was ist der Unterschied zwischen PEM- und PKCS#8-Format?",
  faq3Answer: "PEM und PKCS#8 sind gängige Formate zur Speicherung von RSA-Schlüsseln. PEM verwendet BASE64-Kodierung und beginnt mit '-----BEGIN RSA PRIVATE KEY-----', während PKCS#8 ein allgemeineres Format ist, das verschiedene Schlüsseltypen speichern kann und mit '-----BEGIN PRIVATE KEY-----' beginnt. Die meisten modernen Systeme unterstützen PKCS#8, ältere Systeme möglicherweise nur PEM.",
  
  faq4Question: "Wie speichere ich generierte RSA-Schlüssel sicher?",
  faq4Answer: "Private RSA-Schlüssel müssen besonders geschützt werden. Empfohlene Methoden sind Passwortmanager, verschlüsselte Speichergeräte, Hardware-Sicherheitsmodule (HSM) oder Schlüsselverwaltungssysteme. Schlüsseldateien sollten mit starken Passwörtern verschlüsselt und mit geeigneten Zugriffsrechten versehen werden. Erstellen Sie Backups, aber schützen Sie diese ebenfalls.",
  
  faq5Question: "Wofür können generierte RSA-Schlüsselpaare verwendet werden?",
  faq5Answer: "RSA-Schlüsselpaare finden vielfältige Anwendung: SSL/TLS-Zertifikate für HTTPS-Websites, SSH für sichere Remote-Anmeldungen, digitale Signaturen zur Authentifizierung von Dateien oder Code, sichere E-Mail-Kommunikation (S/MIME), Unternehmens-VPNs und Authentifizierungssysteme, Blockchain und Kryptowährungs-Wallets sowie API-Authentifizierung und sichere Token-Generierung.",
  
  referencesTitle: "Referenzen und weiterführende Literatur",
  reference1: "NIST Special Publication 800-57: Empfehlungen zur Schlüsselverwaltung",
  reference2: "RFC 8017: PKCS #1: RSA-Verschlüsselungsstandard Version 2.2",
  reference3: "FIPS 186-5: Digital Signature Standard (DSS)",
  
  conclusionTitle: "Zusammenfassung",
  conclusionText: "Der <strong>RSA-Schlüsselpaar-Generator</strong> bietet eine einfache und sichere Methode zur Erstellung der kryptografischen Schlüssel, die für moderne digitale Sicherheit unerlässlich sind. Ob Sie Netzwerkkommunikation schützen, Authentifizierungssysteme implementieren oder sensible Dokumente signieren möchten - richtig generierte RSA-Schlüsselpaare bilden die Grundlage dieser Sicherheitsmaßnahmen. Mit unserem Tool können Sie schnell Schlüssel mit geeigneter Stärke und im richtigen Format generieren, die Ihren spezifischen Anforderungen entsprechen, während Ihre kryptografischen Materialien privat und sicher bleiben."
}
