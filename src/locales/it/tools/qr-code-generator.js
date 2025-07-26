export default {
  name: 'Generatore di Codici QR',
  description: 'Genera codici QR personalizzabili per URL, testo e altro',

  options: {
    content: 'Contenuto QR',
    contentType: 'Tipo di contenuto',
    errorCorrectionLevel: 'Livello correzione errori',
    size: 'Dimensioni',
    margin: 'Margine',
    foregroundColor: 'Colore primo piano',
    backgroundColor: 'Colore sfondo',
    logo: 'Aggiungi logo',
    logoSize: 'Dimensioni logo',
    cornerRadius: 'Raggio angoli'
  },

  contentTypes: {
    url: 'URL',
    text: 'Testo',
    email: 'Email',
    phone: 'Telefono',
    sms: 'SMS',
    wifi: 'Rete WiFi',
    vcard: 'vCard',
    mecard: 'MeCard'
  },

  errorLevels: {
    L: 'Basso (7%)',
    M: 'Medio (15%)',
    Q: 'Alto (25%)',
    H: 'Massimo (30%)'
  },

  actions: {
    generate: 'Genera QR',
    download: 'Scarica',
    downloadSVG: 'Scarica SVG',
    downloadPNG: 'Scarica PNG',
    copy: 'Copia immagine',
    clear: 'Ripristina',
    uploadLogo: 'Carica logo'
  },

  templates: {
    title: 'Modelli rapidi',
    confirmReplace: 'Confermi di sostituire il contenuto corrente?',
    confirm: 'Conferma',
    cancel: 'Annulla',
    url: {
      name: 'Collegamento URL'
    },
    email: {
      name: 'Indirizzo email'
    },
    phone: {
      name: 'Numero di telefono'
    },
    sms: {
      name: 'Messaggio SMS'
    },
    wifi: {
      name: 'Configurazione WiFi',
      example: {
        ssid: 'Nome rete',
        password: 'Password'
      }
    },
    geo: {
      name: 'Posizione geografica'
    }
  },

  appearance: {
    title: 'Aspetto'
  },

  preview: {
    title: 'Anteprima',
    generating: 'Generazione in corso...',
    clickGenerateButton: 'Clicca "Genera QR"',
    clickToDownload: 'Clicca per scaricare QR'
  },

  tips: {
    title: 'Suggerimenti',
    saveToPrint: 'Puoi salvare il QR generato come immagine per stampe o condivisioni.',
    errorCorrection: 'Il livello di correzione errori indica la leggibilità del QR se danneggiato. Livello L ha la tolleranza più bassa, H la più alta ma aumenta la complessità.'
  },

  wifi: {
    ssid: 'Nome rete (SSID)',
    password: 'Password',
    encryption: 'Crittografia',
    hidden: 'Rete nascosta'
  },

  placeholders: {
    content: 'Inserisci testo, URL o altro contenuto...'
  },

  characters: 'caratteri',
  maxChars: 'Consigliato max 300 caratteri',

  messages: {
    copied: 'Copiato negli appunti!',
    generated: 'QR generato con successo',
    contentRequired: 'Inserisci il contenuto del QR',
    downloaded: 'QR scaricato',
    confirmReplace: 'Conferma per sostituire il contenuto corrente',
    contentUpdated: 'Contenuto aggiornato',
    changesCancelled: 'Modifiche annullate',
    invalidUrl: 'Inserisci un URL valido',
    invalidEmail: 'Inserisci un\'email valida',
    invalidPhone: 'Inserisci un numero di telefono valido',
    logoTooBig: 'Logo troppo grande (max 1MB)'
  },

  errors: {
    canvasNotReady: 'Elemento canvas non pronto',
    generationError: 'Errore generazione QR',
    generationErrorWithMessage: 'Errore generazione QR: {message}',
    downloadError: 'Errore download QR: {message}'
  }
};