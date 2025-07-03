export default {
  name: 'Strumento di crittografia RSA',
  description: 'Genera coppie di chiavi RSA, crittografa/decrittografa dati, crea/verifica firme digitali',
  tabs: {
    title: 'Selezione funzionalità',
    keyGeneration: 'Generazione chiavi',
    encryptDecrypt: 'Crittografia/Decrittografia',
    signVerify: 'Firma/Verifica'
  },
  keyGeneration: {
    title: 'Generazione coppia di chiavi RSA',
    keyLength: 'Lunghezza chiave',
    keySizes: {
      size512: '512 bit (sconsigliato per scenari sicuri)',
      size1024: '1024 bit (sicurezza base)',
      size2048: '2048 bit (consigliato)',
      size4096: '4096 bit (alta sicurezza)'
    },
    generateButton: 'Genera coppia di chiavi',
    generating: 'Generazione in corso...',
    publicKey: 'Chiave pubblica (Public Key)',
    privateKey: 'Chiave privata (Private Key)',
    exportPublicKey: 'Esporta chiave pubblica',
    exportPrivateKey: 'Esporta chiave privata',
    copy: 'Copia',
    info: {
      title: 'Informazioni sulle coppie di chiavi RSA',
      description: 'RSA è un algoritmo di crittografia asimmetrica che utilizza una coppia di chiavi:',
      points: {
        0: 'Chiave pubblica: può essere condivisa in sicurezza con chiunque, utilizzata per crittografare dati o verificare firme.',
        1: 'Chiave privata: deve essere conservata in modo sicuro, non deve essere divulgata, utilizzata per decrittografare dati o creare firme.'
      },
      keyLengthTitle: 'La lunghezza della chiave determina il livello di sicurezza:',
      keyLengthPoints: {
        0: '512 bit - Non più sicuro, utilizzato solo per test',
        1: '1024 bit - Debole, sconsigliato per dati sensibili',
        2: '2048 bit - Standard attualmente consigliato',
        3: '4096 bit - Offre maggiore sicurezza ma è più lento nell\'elaborazione'
      }
    }
  },
  encryptDecrypt: {
    title: 'Crittografia e decrittografia',
    encryptMode: 'Modalità crittografia',
    decryptMode: 'Modalità decrittografia',
    encryptDescription: 'Utilizza la chiave pubblica per crittografare dati, solo chi possiede la corrispondente chiave privata può decrittografarli.',
    decryptDescription: 'Utilizza la chiave privata per decrittografare dati precedentemente crittografati con la chiave pubblica.',
    keyLabel: {
      encrypt: 'Chiave pubblica (Public Key)',
      decrypt: 'Chiave privata (Private Key)'
    },
    dataLabel: {
      encrypt: 'Dati da crittografare',
      decrypt: 'Dati da decrittografare'
    },
    keyPlaceholder: 'Incolla la chiave RSA qui',
    dataPlaceholder: {
      encrypt: 'Inserisci il testo da crittografare',
      decrypt: 'Inserisci i dati da decrittografare (formato Base64)'
    },
    processButton: {
      encrypt: 'Crittografa dati',
      decrypt: 'Decrittografa dati'
    },
    processing: 'Elaborazione in corso...',
    resultLabel: {
      encrypt: 'Risultato crittografia',
      decrypt: 'Risultato decrittografia'
    },
    info: {
      title: 'Informazioni sulla crittografia e decrittografia RSA',
      description: 'RSA è un algoritmo di crittografia asimmetrica che funziona come segue:',
      points: {
        0: 'Crittografia: utilizza la chiave pubblica del destinatario per crittografare dati, garantendo che solo il destinatario con la corrispondente chiave privata possa decrittografarli.',
        1: 'Decrittografia: il destinatario utilizza la propria chiave privata per decrittografare i dati.',
        2: 'La crittografia RSA ha limitazioni sulla lunghezza dei dati, generalmente non è adatta per crittografare direttamente file di grandi dimensioni.',
        3: 'Per dati di grandi dimensioni, solitamente si utilizza prima una crittografia simmetrica (come AES) per crittografare i dati, poi RSA per crittografare la chiave simmetrica.'
      }
    },
    encrypt: 'Crittografa',
    decrypt: 'Decrittografa'
  },
  signVerify: {
    title: 'Firma e verifica',
    signMode: 'Modalità firma',
    verifyMode: 'Modalità verifica',
    signDescription: 'Utilizza la chiave privata per firmare dati, dimostrando l\'autenticità e l\'integrità della provenienza.',
    verifyDescription: 'Utilizza la chiave pubblica per verificare la firma, confermando che i dati non siano stati alterati e provengano dal mittente previsto.',
    keyLabel: {
      sign: 'Chiave privata (Private Key)',
      verify: 'Chiave pubblica (Public Key)'
    },
    dataLabel: 'Dati',
    hashAlgorithm: 'Algoritmo hash',
    hashOptions: {
      sha1: 'SHA-1 (sconsigliato per scenari sicuri)',
      sha256: 'SHA-256 (consigliato)',
      sha512: 'SHA-512 (alta sicurezza)',
      md5: 'MD5 (solo per test, non sicuro)'
    },
    signatureLabel: 'Firma (formato Base64)',
    signaturePlaceholder: 'Inserisci i dati della firma qui',
    processButton: {
      sign: 'Genera firma',
      verify: 'Verifica firma'
    },
    processing: 'Elaborazione in corso...',
    signatureResult: 'Risultato firma (formato Base64)',
    verificationSuccess: 'Verifica firma riuscita',
    verificationFailure: 'Verifica firma fallita',
    verificationSuccessMessage: 'I dati non sono stati alterati e provengono dal mittente previsto.',
    verificationFailureMessage: 'I dati potrebbero essere stati alterati o la firma non è stata creata con la corrispondente chiave privata.',
    info: {
      title: 'Informazioni sulla firma e verifica RSA',
      description: 'La firma RSA è una tecnologia di firma digitale utilizzata per verificare l\'autenticità e l\'integrità dei messaggi:',
      points: {
        0: 'Processo di firma: utilizza la chiave privata del mittente per crittografare il valore hash del messaggio, generando una firma digitale.',
        1: 'Processo di verifica: il destinatario utilizza la chiave pubblica del mittente per decrittografare la firma e confrontarla con il valore hash del messaggio.',
        2: 'Se la verifica ha successo, indica che il messaggio è stato effettivamente inviato dal mittente con la chiave privata e che il contenuto non è stato alterato.',
        3: 'La firma non crittografa il messaggio, serve solo per verificarne la provenienza e l\'integrità. Per proteggere il contenuto del messaggio, è necessaria anche la crittografia.'
      }
    },
    sign: 'Firma',
    verify: 'Verifica firma',
    signatureValue: 'Valore firma',
    verificationResult: {
      success: 'Verifica riuscita! La firma è valida, i dati sono integri e la provenienza è attendibile.',
      failed: 'Verifica fallita! La firma non è valida, i dati potrebbero essere stati alterati o la provenienza non è attendibile.'
    },
    dataPlaceholder: 'Inserisci i dati da firmare o verificare',
    keyPlaceholder: 'Incolla la chiave RSA qui'
  },
  messages: {
    copied: 'Copiato negli appunti',
    copyFailed: 'Copia fallita, copia manualmente',
    keygenError: 'Errore durante la generazione della coppia di chiavi: {error}',
    encryptError: 'Crittografia fallita, controlla la tua chiave pubblica e i dati di input. La crittografia RSA ha limitazioni sulla lunghezza dei dati.',
    decryptError: 'Decrittografia fallita, assicurati che la chiave privata sia corretta e che i dati di input siano un testo crittografato valido.',
    signError: 'Generazione firma fallita, controlla la tua chiave privata e i dati di input.',
    verifyError: 'Verifica fallita, controlla le tue chiavi e i dati di input.',
    processingError: 'Operazione fallita. Controlla le tue chiavi e i dati di input.'
  }
}