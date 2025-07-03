export default {
  name: 'Strumento di cifratura SM2',
  description: 'Utilizza l\'algoritmo SM2 per generare coppie di chiavi, cifrare/decifrare dati e creare/verificare firme digitali',
  tabs: {
    title: 'Selezione funzionalità',
    keyGeneration: 'Generazione chiavi',
    encryptDecrypt: 'Cifratura/Decifratura',
    signVerify: 'Firma/Verifica'
  },
  keyGeneration: {
    title: 'Generazione coppia di chiavi SM2',
    generateButton: 'Genera coppia di chiavi',
    generating: 'Generazione in corso...',
    publicKey: 'Chiave pubblica',
    privateKey: 'Chiave privata',
    exportPublicKey: 'Esporta chiave pubblica',
    exportPrivateKey: 'Esporta chiave privata',
    copy: 'Copia',
    info: {
      title: 'Informazioni sulle coppie di chiavi SM2',
      description: 'SM2 è un algoritmo a chiave pubblica su curve ellittiche pubblicato dall\'Amministrazione cinese per la crittografia statale, un algoritmo di cifratura asimmetrica:',
      points: [
        'Chiave pubblica: può essere condivisa con altri per cifrare dati o verificare firme',
        'Chiave privata: deve essere conservata in sicurezza, non divulgata, usata per decifrare dati o creare firme'
      ],
      features: 'Caratteristiche dell\'algoritmo SM2:',
      featuresList: [
        'Basato su curve ellittiche a 256 bit, sicurezza equivalente a RSA 3072 bit',
        'Esecuzione veloce, chiavi corte',
        'Standard crittografico nazionale (GB/T 32918 series), adatto per scenari crittografici commerciali in Cina',
        'Integra funzioni di cifratura, firma, scambio chiavi'
      ],
      securityTip: 'Suggerimento di sicurezza: la chiave privata non deve mai essere divulgata ad altri, conserva con cura la tua coppia di chiavi.'
    }
  },
  encryptDecrypt: {
    title: 'Tipo di operazione',
    encrypt: 'Cifratura',
    decrypt: 'Decifratura',
    keyLabel: {
      encrypt: 'Chiave pubblica',
      decrypt: 'Chiave privata'
    },
    dataLabel: {
      encrypt: 'Dati da cifrare',
      decrypt: 'Dati da decifrare'
    },
    keyPlaceholder: 'Incolla la chiave SM2',
    dataPlaceholder: {
      encrypt: 'Inserisci testo da cifrare',
      decrypt: 'Inserisci testo cifrato da decifrare'
    },
    processButton: {
      encrypt: 'Cifra',
      decrypt: 'Decifra'
    },
    processing: 'Elaborazione in corso...',
    resultLabel: {
      encrypt: 'Risultato cifratura',
      decrypt: 'Risultato decifratura'
    },
    info: {
      title: 'Istruzioni per cifratura/decifratura SM2',
      usage: 'Come usare SM2 per cifrare/decifrare:',
      points: [
        'Cifratura: usa la chiave pubblica del destinatario, solo chi possiede la corrispondente chiave privata può decifrare',
        'Decifratura: usa la tua chiave privata per decifrare dati cifrati con la tua chiave pubblica'
      ],
      limitations: 'Limitazioni d\'uso:',
      limitationsList: [
        'SM2 ha limitazioni sulla lunghezza del testo in chiaro, è adatto per cifrare messaggi brevi, chiavi o dati sensibili',
        'Per testi lunghi si consiglia prima una cifratura simmetrica (es. SM4), poi cifrare la chiave simmetrica con SM2'
      ],
      note: 'Nota: i dati cifrati con SM2 hanno un formato incompatibile con RSA, assicurati che il destinatario supporti l\'algoritmo SM2.'
    }
  },
  signVerify: {
    title: 'Tipo di operazione',
    sign: 'Firma',
    verify: 'Verifica',
    keyLabel: {
      sign: 'Chiave privata',
      verify: 'Chiave pubblica'
    },
    dataLabel: 'Dati da {operation}',
    signatureLabel: 'Valore firma',
    signatureValue: 'Firma generata',
    keyPlaceholder: 'Incolla la chiave SM2',
    dataPlaceholder: 'Inserisci testo dati originali',
    signaturePlaceholder: 'Inserisci valore firma da verificare',
    processButton: {
      sign: 'Genera firma',
      verify: 'Verifica firma'
    },
    processing: 'Elaborazione in corso...',
    verificationSuccess: 'Verifica firma riuscita! Dati integri e non alterati.',
    verificationFailed: 'Verifica firma fallita! Dati potenzialmente alterati o firma non corretta.',
    info: {
      title: 'Istruzioni per firma/verifica SM2',
      mainUses: 'Principali usi delle firme digitali SM2:',
      usesList: [
        'Integrità dati: assicura che i dati non siano stati alterati durante la trasmissione',
        'Autenticazione: prova che i dati provengono effettivamente dal mittente dichiarato',
        'Non ripudio: il mittente non può negare di aver inviato il messaggio'
      ],
      usage: 'Come usare:',
      usageList: [
        'Firma: usa la tua chiave privata per generare una firma per i dati',
        'Verifica: usa la chiave pubblica del mittente per verificare l\'autenticità della firma'
      ],
      note: 'Nota: le firme SM2 usano l\'algoritmo standard nazionale cinese, incompatibile con algoritmi di firma internazionali, richiede che il destinatario supporti SM2.'
    }
  },
  messages: {
    copied: 'Copiato negli appunti',
    copyFailed: 'Copia fallita, copia manualmente',
    keygenError: 'Errore generazione coppia di chiavi: {error}',
    processError: 'Operazione fallita. Verifica la tua chiave e i dati di input.',
    emptyKey: 'Inserisci una chiave',
    emptyData: 'Inserisci dati da elaborare'
  }
}