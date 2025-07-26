export default {
  name: 'Generatore UUID',
  description: 'Genera UUID e GUID casuali con opzioni personalizzabili per chiavi primarie, nomi file temporanei e altri casi d\'uso',

  options: {
    version: 'Versione UUID',
    quantity: 'Quantità',
    format: 'Opzioni formato',
    includeDash: 'Includi trattini (-)',
    generateCount: 'Numero da generare'
  },

  versions: {
    v1: 'Versione 1 (basata su tempo)',
    v4: 'Versione 4 (casuale)',
    v5: 'Versione 5 (namespace)',
    custom: 'Personalizzato'
  },

  quantities: {
    single: 'Singolo',
    five: '5',
    ten: '10',
    twenty: '20'
  },

  formats: {
    default: 'Predefinito',
    base64: 'Base64',
    binary: 'Binario',
    hex: 'Esadecimale',
    noDash: 'Senza trattini'
  },

  actions: {
    generate: 'Genera UUID',
    copy: 'Copia',
    copyAll: 'Copia tutti',
    clear: 'Pulisci risultati',
    download: 'Scarica come TXT'
  },

  messages: {
    copied: 'Copiato negli appunti!',
    generated: 'UUID generati con successo',
    tooMany: 'Numero massimo consentito: 1000',
    invalidVersion: 'Versione UUID non valida',
    invalidNamespace: 'Namespace UUID non valido',
    copyFailed: 'Copia fallita'
  }
};