export default {
    name: 'SM2-Verschlüsselungstool',
    description: 'Generieren Sie Schlüsselpaare, verschlüsseln/entschlüsseln Sie Daten und erstellen/überprüfen Sie digitale Signaturen mit dem SM2-Kryptografiealgorithmus',
    tabs: {
      title: 'Funktionsauswahl',
      keyGeneration: 'Schlüsselgenerierung',
      encryptDecrypt: 'Verschlüsselung/Entschlüsselung',
      signVerify: 'Signatur/Verifikation'
    },
    keyGeneration: {
      title: 'SM2-Schlüsselpaargenerierung',
      generateButton: 'Schlüsselpaar generieren',
      generating: 'Wird generiert...',
      publicKey: 'Öffentlicher Schlüssel',
      privateKey: 'Privater Schlüssel',
      exportPublicKey: 'Öffentlichen Schlüssel exportieren',
      exportPrivateKey: 'Privaten Schlüssel exportieren',
      copy: 'Kopieren',
      info: {
        title: 'Informationen zu SM2-Schlüsselpaaren',
        description: 'SM2 ist ein elliptischer Kurven-Kryptografiealgorithmus, der von der chinesischen Nationalen Verwaltung für Kryptografie veröffentlicht wurde. Es handelt sich um einen asymmetrischen Verschlüsselungsalgorithmus:',
        points: [
          'Öffentlicher Schlüssel: Kann mit anderen geteilt werden, um Daten zu verschlüsseln oder Signaturen zu überprüfen',
          'Privater Schlüssel: Muss sicher aufbewahrt werden und darf nicht weitergegeben werden. Wird zum Entschlüsseln von Daten oder zum Erstellen von Signaturen verwendet'
        ],
        features: 'Merkmale des SM2-Algorithmus:',
        featuresList: [
          'Basierend auf 256-Bit-Elliptischen-Kurven, Sicherheit entspricht RSA 3072-Bit',
          'Schnelle Ausführung, kurze Schlüssel',
          'Nationaler Kryptografiestandard (GB/T 32918 Serie), geeignet für kommerzielle Kryptografieanwendungen in China',
          'Integriert Verschlüsselung, Signatur und Schlüsselaustausch'
        ],
        securityTip: 'Sicherheitshinweis: Der private Schlüssel darf niemals an Dritte weitergegeben werden. Bewahren Sie Ihr Schlüsselpaar sicher auf.'
      }
    },
    encryptDecrypt: {
      title: 'Operationstyp',
      encrypt: 'Verschlüsseln',
      decrypt: 'Entschlüsseln',
      keyLabel: {
        encrypt: 'Öffentlicher Schlüssel',
        decrypt: 'Privater Schlüssel'
      },
      dataLabel: {
        encrypt: 'Zu verschlüsselnde Daten',
        decrypt: 'Zu entschlüsselnde Daten'
      },
      keyPlaceholder: 'Bitte SM2-Schlüssel einfügen',
      dataPlaceholder: {
        encrypt: 'Text eingeben, der verschlüsselt werden soll',
        decrypt: 'Verschlüsselten Text eingeben'
      },
      processButton: {
        encrypt: 'Verschlüsseln',
        decrypt: 'Entschlüsseln'
      },
      processing: 'Wird verarbeitet...',
      resultLabel: {
        encrypt: 'Verschlüsselungsergebnis',
        decrypt: 'Entschlüsselungsergebnis'
      },
      info: {
        title: 'SM2-Verschlüsselungs-/Entschlüsselungshinweise',
        usage: 'Verwendung der SM2-Verschlüsselung/Entschlüsselung:',
        points: [
          'Verschlüsselung: Verwenden Sie den öffentlichen Schlüssel des Empfängers. Nur der Besitzer des entsprechenden privaten Schlüssels kann die Daten entschlüsseln',
          'Entschlüsselung: Verwenden Sie Ihren privaten Schlüssel, um mit Ihrem öffentlichen Schlüssel verschlüsselte Daten zu entschlüsseln'
        ],
        limitations: 'Nutzungseinschränkungen:',
        limitationsList: [
          'Der SM2-Algorithmus hat eine Längenbeschränkung für Klartext und eignet sich besser für kurze Nachrichten, Schlüssel oder sensible Daten',
          'Für lange Texte wird empfohlen, zuerst eine symmetrische Verschlüsselung (z.B. SM4) zu verwenden und dann den symmetrischen Schlüssel mit SM2 zu verschlüsseln'
        ],
        note: 'Hinweis: Das Datenformat der SM2-Verschlüsselung ist nicht mit RSA kompatibel. Stellen Sie sicher, dass der Empfänger den SM2-Algorithmus unterstützt.'
      }
    },
    signVerify: {
      title: 'Operationstyp',
      sign: 'Signieren',
      verify: 'Verifizieren',
      keyLabel: {
        sign: 'Privater Schlüssel',
        verify: 'Öffentlicher Schlüssel'
      },
      dataLabel: 'Zu {operation} Daten',
      signatureLabel: 'Signaturwert',
      signatureValue: 'Generierte Signatur',
      keyPlaceholder: 'Bitte SM2-Schlüssel einfügen',
      dataPlaceholder: 'Originalen Datentext eingeben',
      signaturePlaceholder: 'Zu überprüfenden Signaturwert eingeben',
      processButton: {
        sign: 'Signatur generieren',
        verify: 'Signatur überprüfen'
      },
      processing: 'Wird verarbeitet...',
      verificationSuccess: 'Signaturverifikation erfolgreich! Die Daten sind intakt und wurden nicht manipuliert.',
      verificationFailed: 'Signaturverifikation fehlgeschlagen! Die Daten wurden möglicherweise manipuliert oder die Signatur ist nicht korrekt.',
      info: {
        title: 'SM2-Signatur-/Verifikationshinweise',
        mainUses: 'Hauptanwendungen von SM2-Digitalen Signaturen:',
        usesList: [
          'Datenintegrität: Sicherstellen, dass Daten während der Übertragung nicht manipuliert wurden',
          'Authentifizierung: Beweisen, dass die Daten tatsächlich vom angegebenen Absender stammen',
          'Nichtabstreitbarkeit: Der Absender kann nicht bestreiten, die Nachricht gesendet zu haben'
        ],
        usage: 'Verwendung:',
        usageList: [
          'Signatur: Verwenden Sie Ihren privaten Schlüssel, um eine Signatur für die Daten zu generieren',
          'Verifikation: Verwenden Sie den öffentlichen Schlüssel des Absenders, um die Authentizität der Signatur zu überprüfen'
        ],
        note: 'Hinweis: SM2-Signaturen verwenden nationale Kryptografiestandards und sind nicht mit international gebräuchlichen Signaturalgorithmen kompatibel. Der Empfänger muss den SM2-Algorithmus unterstützen.'
      }
    },
    messages: {
      copied: 'In die Zwischenablage kopiert',
      copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren',
      keygenError: 'Fehler bei der Generierung des Schlüsselpaars: {error}',
      processError: 'Operation fehlgeschlagen. Bitte überprüfen Sie Ihren Schlüssel und die Eingabedaten.',
      emptyKey: 'Bitte geben Sie einen Schlüssel ein',
      emptyData: 'Bitte geben Sie die zu verarbeitenden Daten ein'
    }
  }