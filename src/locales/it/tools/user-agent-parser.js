export default {
  name: 'Analizzatore User Agent',
  description: 'Analizza e interpreta le stringhe User-Agent dei browser, identificando informazioni su browser, sistema operativo e dispositivo',

  input: {
    label: 'Stringa User-Agent',
    placeholder: 'Inserisci o incolla una stringa User-Agent...'
  },

  actions: {
    parse: 'Analizza',
    detect: 'Rileva browser corrente',
    clear: 'Pulisci'
  },

  results: {
    title: 'Risultati analisi',
    summary: 'Riepilogo',
    details: 'Dettagli',
    originalUA: 'Stringa User-Agent originale'
  },

  sections: {
    browser: 'Browser',
    os: 'Sistema operativo',
    device: 'Dispositivo',
    other: 'Altre informazioni'
  },

  deviceTypes: {
    mobile: 'Dispositivo mobile',
    tablet: 'Tablet',
    desktop: 'Computer desktop'
  },

  fields: {
    name: 'Nome',
    version: 'Versione',
    engine: 'Motore',
    platform: 'Piattaforma',
    type: 'Tipo',
    vendor: 'Produttore',
    model: 'Modello',
    isMobile: 'Dispositivo mobile',
    isTablet: 'Tablet',
    isDesktop: 'Computer desktop'
  },

  messages: {
    parsingError: 'Errore durante l\'analisi della stringa User-Agent',
    emptyInput: 'Inserisci una stringa User-Agent',
    unknown: 'Sconosciuto',
    yes: 'Sì',
    no: 'No'
  },

  tips: {
    description: 'La stringa User-Agent è l\'identificativo che il browser invia ai server, contenente informazioni su browser, sistema operativo e dispositivo.',
    useCases: 'Utilizzata comunemente per analisi siti web, gestione compatibilità browser e adattamento ai dispositivi.'
  }
};