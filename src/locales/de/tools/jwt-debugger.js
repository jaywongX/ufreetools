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
    },
    article: {
      title: "JWT Debugging-Tool: Dekodieren, Validieren und Debuggen von JSON Web Tokens",
      features: {
        title: "JWT-Debugging verstehen",
        description: "Dieses <strong>JWT Debugging-Tool</strong> ist ein speziell für Entwickler und Sicherheitsexperten entwickeltes <strong>Token-Analysewerkzeug</strong> zur Überprüfung, Validierung und Fehlerbehebung von JSON Web Tokens (JWT). Dieser <strong>Online JWT-Decoder</strong> ermöglicht es Ihnen, jedes JWT einzufügen und sofort die dekodierten Header-, Payload- und Signaturkomponenten in menschenlesbarem Format anzuzeigen.<br><br>Neben der einfachen <strong>Token-Dekodierung</strong> bietet das Tool umfassende Validierungsfunktionen, um mit den entsprechenden Schlüsseln oder Public Keys zu bestätigen, ob die Token-Signatur gültig ist. Dieses <strong>JWT-Validierungstool</strong> unterstützt alle Standard-JWT-Algorithmen, einschließlich HS256, RS256, ES256 usw., und gewährleistet so Kompatibilität mit modernen Authentifizierungssystemen. Für Entwickler, die tokenbasierte Authentifizierungssysteme erstellen oder warten, bietet dieses <strong>JWT-Debugging-Utility</strong> wichtige Einblicke in Token-Struktur, Ablaufstatus und Sicherheitsansprüche.",
        useCases: {
          title: "Praktische Anwendungsfälle für JWT-Debugging",
          items: [
            "<strong>API-Authentifizierungs-Fehlerbehebung</strong>: Wenn API-Aufrufe aufgrund von Authentifizierungsfehlern fehlschlagen, können Entwickler mit dem <strong>JWT-Validierungstool</strong> das Token überprüfen und Probleme wie Token-Ablauf, ungültige Signatur oder falsche Ansprüche identifizieren",
            "<strong>Identity Provider-Integration</strong>: Bei der Integration mit OAuth- oder OpenID Connect-Diensten hilft der <strong>Token-Inspektor</strong> zu überprüfen, ob Identitätstokens die erwarteten Ansprüche enthalten und korrekt signiert sind",
            "<strong>Sicherheitsaudits</strong>: Sicherheitsexperten können <strong>Authentifizierungstokens</strong> überprüfen, um sicherzustellen, dass sie angemessene Berechtigungen, vernünftige Ablaufzeiten enthalten und Sicherheitsbest Practices folgen",
            "<strong>Benutzerdefinierte JWT-Generierung</strong>: Bei der Implementierung benutzerdefinierter Authentifizierungssysteme können Entwickler mit diesem Tool <strong>kodierte JWT-Tokens</strong> mit spezifischen Ansprüchen und Signaturalgorithmen erstellen und testen",
            "<strong>Bearer-Token-Debugging</strong>: Frontend-Entwickler, die <strong>Bearer-Authentifizierung</strong> verwenden, können überprüfen, ob die in Anwendungsheadern verwendeten Tokens korrekt formatiert sind und die erforderlichen Daten enthalten",
            "<strong>Microservice-Authentifizierung</strong>: Teams, die Microservice-Architekturen aufbauen, können validieren, ob <strong>Service-Tokens</strong> zwischen Diensten korrekte Autorisierungsinformationen übermitteln und angemessene Sicherheitsgrenzen aufrechterhalten"
          ]
        }
      },
      faq: {
        title: "Häufige Fragen zu JWT-Debugging",
        items: [
          {
            question: "Ist es sicher, mein JWT in diesen Online-Debugger einzufügen?",
            answer: "Ja, unser JWT-Debugger wurde mit Sicherheit im Hinterkopf entwickelt. Die gesamte Token-Verarbeitung erfolgt vollständig in Ihrem Browser mit clientseitigem JavaScript, was bedeutet, dass Ihr Token niemals zur Dekodierung oder Validierung an einen Server gesendet wird. Der JWT-Decoder speichert Ihre Tokens, Schlüssel oder Payload-Daten in keiner Weise. Als Sicherheitsbest Practice empfehlen wir jedoch, nur Test-Tokens zu verwenden, keine Produktions-Tokens mit sensiblen Informationen. Wenn Sie mit hochsensiblen Authentifizierungssystemen arbeiten, sollten Sie einen lokalen JWT-Debugger in einer sicheren Entwicklungsumgebung verwenden, anstatt einen Online-Token-Validierungsdienst."
          },
          {
            question: "Was ist der Unterschied zwischen Header, Payload und Signatur in einem JWT?",
            answer: "JSON Web Tokens bestehen aus drei durch Punkte getrennten Teilen: Header, Payload und Signatur. Der Header enthält normalerweise den Tokentyp ('JWT') und den verwendeten Signaturalgorithmus (z.B. 'HS256' oder 'RS256'). Der Payload enthält Ansprüche oder Aussagen über die Entität (normalerweise den Benutzer) und zusätzliche Daten. Häufige Ansprüche sind Benutzer-ID, Ablaufzeit und Aussteller. Die Signatur wird erstellt, indem der kodierte Header und Payload mit einem Schlüssel unter Verwendung des im Header angegebenen Algorithmus kombiniert werden. Diese Signatur bestätigt, dass die Nachricht nicht verändert wurde und kann bei einigen Algorithmen die Identität des Absenders verifizieren. Unser Token-Decoder zeigt alle drei Teile klar an, um Ihnen zu helfen, Ihre Authentifizierungstokens zu verstehen und zu debuggen."
          },
          {
            question: "Wie validiere ich, ob meine JWT-Signatur gültig ist?",
            answer: "Um die JWT-Signatur mit unserem Token-Validierungstool zu überprüfen, geben Sie Ihr Token in das Eingabefeld ein und stellen Sie den entsprechenden Schlüssel oder Public Key bereit (abhängig vom verwendeten Algorithmus). Für HMAC-basierte Algorithmen wie HS256 benötigen Sie denselben Schlüssel, der zur Erstellung des Tokens verwendet wurde. Für RSA- oder ECDSA-Algorithmen wie RS256 oder ES256 benötigen Sie den Public Key, der dem zum Signieren verwendeten Private Key entspricht. Der JWT-Debugger berechnet dann mit Ihrem bereitgestellten Schlüssel eine Signatur basierend auf Header und Payload und vergleicht sie mit der Signatur im Token. Wenn sie übereinstimmen, ist die Signatur gültig, was bestätigt, dass das Token nicht manipuliert wurde und tatsächlich von einer vertrauenswürdigen Partei mit dem richtigen Private Key oder Schlüssel signiert wurde."
          },
          {
            question: "Warum könnte die JWT-Validierung selbst mit dem richtigen Schlüssel fehlschlagen?",
            answer: "Es gibt mehrere Gründe, warum die JWT-Validierung in unserem Token-Decoder selbst mit dem richtigen Schlüssel fehlschlagen könnte. Häufige Probleme sind: Token-Ablauf (überprüfen Sie den 'exp'-Anspruch im Payload), Token noch nicht gültig (überprüfen Sie 'nbf'-Anspruch), falscher Algorithmus (stellen Sie sicher, dass der im Header angegebene Algorithmus mit dem für die Validierung verwendeten übereinstimmt), Token-Manipulation (selbst kleine Änderungen an Header oder Payload führen zu fehlgeschlagener Signaturvalidierung), falsches Schlüsselformat (stellen Sie sicher, dass Ihr Schlüssel korrekt formatiert ist, besonders bei RSA- und ECDSA-Schlüsseln) oder Kodierungsprobleme (wenn Ihr Schlüssel Sonderzeichen enthält). Der JWT-Debugger bietet detaillierte Fehlermeldungen, um die spezifische Ursache der fehlgeschlagenen Validierung zu identifizieren, was die Fehlerbehebung bei Authentifizierungstokens erleichtert."
          },
          {
            question: "Kann ich mit diesem Tool neue JWTs generieren?",
            answer: "Ja, unser JWT-Debugger enthält Token-Generierungsfunktionen. Um ein neues JWT zu erstellen, können Sie den gewünschten Payload (die Ansprüche, die Sie einbeziehen möchten) angeben, den entsprechenden Signaturalgorithmus (z.B. HS256, RS256 usw.) auswählen und die notwendigen Signaturschlüssel bereitstellen. Für symmetrische Algorithmen wie HS256 benötigen Sie einen geheimen Schlüssel. Für asymmetrische Algorithmen wie RS256 benötigen Sie den Private Key zum Signieren. Bei Bedarf kann das Tool sogar zufällige Schlüssel generieren. Nach der Konfiguration dieser Optionen erstellt der Token-Encoder ein gültiges JWT, das Sie für Tests oder Implementierungen verwenden können. Diese Funktion ist besonders nützlich für Entwickler, die tokenbasierte Authentifizierung implementieren und Beispiel-Tokens mit spezifischen Ansprüchen für Testzwecke erstellen müssen."
          }
        ]
      },
      guide: {
        title: "Schritt-für-Schritt-Anleitung zur Verwendung des JWT-Debugging-Tools",
        steps: [
          "Geben Sie Ihr <strong>JSON Web Token</strong> in das Token-Eingabefeld oben im Debugger ein. Sie können ein vollständiges JWT (einschließlich aller drei durch Punkte getrennten Teile) einfügen, das möglicherweise von einem Authentifizierungssystem oder einer API stammt",
          "Klicken Sie auf die Schaltfläche <strong>Dekodieren</strong>, um sofort die dekodierten Komponenten des Tokens anzuzeigen. Der JWT-Decoder zeigt Header- und Payload-Teile in formatierter JSON-Ansicht an, was das Lesen erleichtert",
          "Überprüfen Sie den <strong>Header-Teil</strong>, der normalerweise den Tokentyp ('typ') und den Signaturalgorithmus ('alg') anzeigt. Diese Informationen geben an, wie das Token erstellt wurde und wie seine Signatur validiert werden sollte",
          "Prüfen Sie den <strong>Payload-Teil</strong>, der alle im Token gespeicherten Ansprüche oder Daten enthält. Achten Sie besonders auf die Ablaufzeit ('exp'), Ausstellungszeit ('iat') und Subjekt ('sub'), die die Gültigkeit bestimmen",
          "Um die Signatur des Tokens zu validieren, geben Sie den entsprechenden <strong>Validierungsschlüssel</strong> in das angegebene Feld ein. Symmetrische Algorithmen (HS256) verwenden einen geheimen Schlüssel, asymmetrische Algorithmen (RS256/ES256) einen Public Key",
          "Klicken Sie auf die Schaltfläche <strong>Signatur validieren</strong>, um zu überprüfen, ob die Token-Signatur gültig ist. Der JWT-Validator zeigt an, ob die Validierung erfolgreich war oder fehlgeschlagen ist, sowie relevante Details",
          "Um ein <strong>neues Token zu generieren</strong>, klicken Sie auf die Option 'Token generieren', geben Sie den gewünschten Payload im JSON-Format an, wählen Sie einen Algorithmus aus, stellen Sie einen Signaturschlüssel bereit (oder generieren Sie einen), und das Tool erstellt ein korrekt formatiertes JWT für Sie"
        ]
      },
      conclusion: "Das JWT-Debugging-Tool ist ein wesentliches Werkzeug für Entwickler, die mit modernen Authentifizierungssystemen arbeiten, und bietet umfassende Funktionen zur Token-Überprüfung, Validierung und Generierung. Durch die Bereitstellung klarer Einblicke in die Token-Struktur und den Validierungsstatus vereinfacht es den Debugging-Prozess und gewährleistet die Sicherheit von JWT-Implementierungen. Egal, ob Sie Authentifizierungsprobleme beheben, Identity Provider integrieren oder neue tokenbasierte Systeme entwerfen - dieses Tool vereinfacht den komplexen Umgang mit JWTs. Da Authentifizierungstokens weiterhin ein Grundpfeiler der Webanwendungssicherheit sind, wird ein zuverlässiges JWT-Debugging-Utility in Ihrem Entwickler-Toolkit für die Aufrechterhaltung sicherer, funktionierender Authentifizierungsabläufe immer wertvoller."
    }
  }