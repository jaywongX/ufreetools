export default {
  name: 'Analyseur de User-Agent',
  description: 'Analyse et interprète les chaînes User-Agent des navigateurs pour identifier le navigateur, le système d\'exploitation et les informations sur l\'appareil',

  input: {
    label: 'Chaîne User-Agent',
    placeholder: 'Saisissez ou collez une chaîne User-Agent...'
  },

  actions: {
    parse: 'Analyser',
    detect: 'Détecter le navigateur actuel',
    clear: 'Effacer'
  },

  results: {
    title: 'Résultats d\'analyse',
    summary: 'Résumé',
    details: 'Détails',
    originalUA: 'Chaîne User-Agent originale'
  },

  sections: {
    browser: 'Navigateur',
    os: 'Système d\'exploitation',
    device: 'Appareil',
    other: 'Autres informations'
  },

  deviceTypes: {
    mobile: 'Mobile',
    tablet: 'Tablette',
    desktop: 'Ordinateur'
  },

  fields: {
    name: 'Nom',
    version: 'Version',
    engine: 'Moteur',
    platform: 'Plateforme',
    type: 'Type',
    vendor: 'Marque',
    model: 'Modèle',
    isMobile: 'Appareil mobile',
    isTablet: 'Tablette',
    isDesktop: 'Ordinateur'
  },

  messages: {
    parsingError: 'Erreur lors de l\'analyse de la chaîne User-Agent',
    emptyInput: 'Veuillez saisir une chaîne User-Agent',
    unknown: 'Inconnu',
    yes: 'Oui',
    no: 'Non'
  },

  tips: {
    description: 'Le User-Agent est une chaîne d\'identification envoyée par le navigateur aux serveurs, contenant des informations sur le navigateur, le système d\'exploitation et l\'appareil.',
    useCases: 'Communément utilisé pour l\'analyse de sites web, la gestion de la compatibilité des navigateurs et l\'adaptation aux appareils.'
  }
};