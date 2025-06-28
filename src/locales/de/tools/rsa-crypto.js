export default {
    name: 'RSA-Verschlüsselungstool',
    description: 'Generieren Sie RSA-Schlüsselpaare, verschlüsseln/entschlüsseln Sie Daten, erstellen/überprüfen Sie digitale Signaturen',
    tabs: {
      title: 'Funktionsauswahl',
      keyGeneration: 'Schlüsselgenerierung',
      encryptDecrypt: 'Verschlüsselung/Entschlüsselung',
      signVerify: 'Signatur/Verifikation'
    },
    keyGeneration: {
      title: 'RSA-Schlüsselpaar-Generierung',
      keyLength: 'Schlüssellänge',
      keySizes: {
        size512: '512 Bit (für Sicherheitszwecke nicht empfohlen)',
        size1024: '1024 Bit (grundlegende Sicherheit)',
        size2048: '2048 Bit (empfohlen)',
        size4096: '4096 Bit (hohe Sicherheit)'
      },
      generateButton: 'Schlüsselpaar generieren',
      generating: 'Wird generiert...',
      publicKey: 'Öffentlicher Schlüssel (Public Key)',
      privateKey: 'Privater Schlüssel (Private Key)',
      exportPublicKey: 'Öffentlichen Schlüssel exportieren',
      exportPrivateKey: 'Privaten Schlüssel exportieren',
      copy: 'Kopieren',
      info: {
        title: 'Informationen zu RSA-Schlüsselpaaren',
        description: 'RSA ist ein asymmetrischer Verschlüsselungsalgorithmus, der ein Schlüsselpaar verwendet:',
        points: {
          0: 'Öffentlicher Schlüssel: Kann sicher mit jedem geteilt werden und wird zur Datenverschlüsselung oder Signaturverifikation verwendet.',
          1: 'Privater Schlüssel: Muss sicher aufbewahrt werden, darf nicht weitergegeben werden und wird zur Datenentschlüsselung oder Signaturerstellung verwendet.'
        },
        keyLengthTitle: 'Die Schlüssellänge bestimmt das Sicherheitsniveau:',
        keyLengthPoints: {
          0: '512 Bit - Nicht mehr sicher, nur für Tests geeignet',
          1: '1024 Bit - Schwach, für sensible Daten nicht empfohlen',
          2: '2048 Bit - Aktueller Standard',
          3: '4096 Bit - Bietet höhere Sicherheit, aber langsamere Verarbeitung'
        }
      }
    },
    encryptDecrypt: {
      title: 'Verschlüsselung und Entschlüsselung',
      encryptMode: 'Verschlüsselungsmodus',
      decryptMode: 'Entschlüsselungsmodus',
      encryptDescription: 'Verwenden Sie den öffentlichen Schlüssel, um Daten zu verschlüsseln, die nur der Besitzer des entsprechenden privaten Schlüssels entschlüsseln kann.',
      decryptDescription: 'Verwenden Sie den privaten Schlüssel, um zuvor mit dem öffentlichen Schlüssel verschlüsselte Daten zu entschlüsseln.',
      keyLabel: {
        encrypt: 'Öffentlicher Schlüssel (Public Key)',
        decrypt: 'Privater Schlüssel (Private Key)'
      },
      dataLabel: {
        encrypt: 'Zu verschlüsselnde Daten',
        decrypt: 'Zu entschlüsselnde Daten'
      },
      keyPlaceholder: 'Fügen Sie hier den RSA-Schlüssel ein',
      dataPlaceholder: {
        encrypt: 'Geben Sie hier den zu verschlüsselnden Text ein',
        decrypt: 'Geben Sie hier die zu entschlüsselnden Daten ein (Base64-Format)'
      },
      processButton: {
        encrypt: 'Daten verschlüsseln',
        decrypt: 'Daten entschlüsseln'
      },
      processing: 'Wird verarbeitet...',
      resultLabel: {
        encrypt: 'Verschlüsselungsergebnis',
        decrypt: 'Entschlüsselungsergebnis'
      },
      info: {
        title: 'Informationen zur RSA-Verschlüsselung und -Entschlüsselung',
        description: 'RSA ist ein asymmetrischer Verschlüsselungsalgorithmus, der wie folgt funktioniert:',
        points: {
          0: 'Verschlüsselung: Verwenden Sie den öffentlichen Schlüssel des Empfängers, um Daten zu verschlüsseln, sodass nur der Empfänger mit dem entsprechenden privaten Schlüssel sie entschlüsseln kann.',
          1: 'Entschlüsselung: Der Empfänger verwendet seinen privaten Schlüssel, um die Daten zu entschlüsseln.',
          2: 'RSA-Verschlüsselung hat eine Datenlängenbeschränkung und ist normalerweise nicht für die direkte Verschlüsselung großer Dateien geeignet.',
          3: 'Für große Datenmengen wird normalerweise zuerst eine symmetrische Verschlüsselung (z.B. AES) verwendet, um die Daten zu verschlüsseln, und dann RSA, um den symmetrischen Schlüssel zu verschlüsseln.'
        }
      },
      encrypt: 'Verschlüsseln',
      decrypt: 'Entschlüsseln'
    },
    signVerify: {
      title: 'Signatur und Verifikation',
      signMode: 'Signaturmodus',
      verifyMode: 'Verifikationsmodus',
      signDescription: 'Verwenden Sie den privaten Schlüssel, um Daten zu signieren und die Authentizität und Integrität der Datenquelle zu beweisen.',
      verifyDescription: 'Verwenden Sie den öffentlichen Schlüssel, um die Signatur zu überprüfen und zu bestätigen, dass die Daten nicht manipuliert wurden und vom erwarteten Absender stammen.',
      keyLabel: {
        sign: 'Privater Schlüssel (Private Key)',
        verify: 'Öffentlicher Schlüssel (Public Key)'
      },
      dataLabel: 'Daten',
      hashAlgorithm: 'Hash-Algorithmus',
      hashOptions: {
        sha1: 'SHA-1 (für Sicherheitszwecke nicht empfohlen)',
        sha256: 'SHA-256 (empfohlen)',
        sha512: 'SHA-512 (hohe Sicherheit)',
        md5: 'MD5 (nur für Tests, unsicher)'
      },
      signatureLabel: 'Signatur (Base64-Format)',
      signaturePlaceholder: 'Geben Sie hier die Signaturdaten ein',
      processButton: {
        sign: 'Signatur erstellen',
        verify: 'Signatur überprüfen'
      },
      processing: 'Wird verarbeitet...',
      signatureResult: 'Signaturergebnis (Base64-Format)',
      verificationSuccess: 'Signaturverifikation erfolgreich',
      verificationFailure: 'Signaturverifikation fehlgeschlagen',
      verificationSuccessMessage: 'Die Daten wurden nicht manipuliert und stammen vom erwarteten Absender.',
      verificationFailureMessage: 'Die Daten wurden möglicherweise manipuliert oder die Signatur wurde nicht mit dem entsprechenden privaten Schlüssel erstellt.',
      info: {
        title: 'Informationen zur RSA-Signatur und -Verifikation',
        description: 'RSA-Signatur ist eine digitale Signaturtechnik, die zur Überprüfung der Authentizität und Integrität von Nachrichten dient:',
        points: {
          0: 'Signaturprozess: Der Absender verwendet seinen privaten Schlüssel, um den Hash-Wert der Nachricht zu verschlüsseln und eine digitale Signatur zu erstellen.',
          1: 'Verifikationsprozess: Der Empfänger verwendet den öffentlichen Schlüssel des Absenders, um die Signatur zu entschlüsseln und mit dem Hash-Wert der Nachricht zu vergleichen.',
          2: 'Wenn die Verifikation erfolgreich ist, zeigt dies, dass die Nachricht tatsächlich vom Besitzer des privaten Schlüssels gesendet wurde und der Inhalt nicht manipuliert wurde.',
          3: 'Die Signatur verschlüsselt die Nachricht nicht, sondern dient nur zur Überprüfung ihrer Quelle und Integrität. Zum Schutz des Nachrichteninhalts ist zusätzlich eine Verschlüsselung erforderlich.'
        }
      },
      sign: 'Signieren',
      verify: 'Signatur überprüfen',
      signatureValue: 'Signaturwert',
      verificationResult: {
        success: 'Verifikation erfolgreich! Die Signatur ist gültig, die Daten sind intakt und die Quelle ist vertrauenswürdig.',
        failed: 'Verifikation fehlgeschlagen! Die Signatur ist ungültig, die Daten wurden möglicherweise manipuliert oder die Quelle ist nicht vertrauenswürdig.'
      },
      dataPlaceholder: 'Geben Sie hier die zu signierenden oder zu überprüfenden Daten ein',
      keyPlaceholder: 'Fügen Sie hier den RSA-Schlüssel ein'
    },
    messages: {
      copied: 'In die Zwischenablage kopiert',
      copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren',
      keygenError: 'Fehler bei der Generierung des Schlüsselpaars: {error}',
      encryptError: 'Verschlüsselung fehlgeschlagen. Bitte überprüfen Sie Ihren öffentlichen Schlüssel und die Eingabedaten. RSA-Verschlüsselung hat eine Beschränkung der Datenlänge.',
      decryptError: 'Entschlüsselung fehlgeschlagen. Stellen Sie sicher, dass der private Schlüssel korrekt ist und die Eingabedaten ein gültiger verschlüsselter Text sind.',
      signError: 'Signaturerstellung fehlgeschlagen. Bitte überprüfen Sie Ihren privaten Schlüssel und die Eingabedaten.',
      verifyError: 'Verifikation fehlgeschlagen. Bitte überprüfen Sie Ihre Schlüssel und die Eingabedaten.',
      processingError: 'Operation fehlgeschlagen. Bitte überprüfen Sie Ihre Schlüssel und die Eingabedaten.'
    }
  }