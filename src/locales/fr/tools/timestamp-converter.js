export default {
  name: 'Convertisseur d\'horodatage',
  description: 'Convertit entre les horodatages et les dates lisibles par l\'homme, avec prise en charge de multiples formats et fuseaux horaires',

  options: {
    inputType: 'Type d\'entrée',
    outputFormat: 'Format de sortie',
    timezone: 'Fuseau horaire',
    includeTime: 'Inclure l\'heure',
    format: 'Chaîne de formatage'
  },

  inputTypes: {
    timestamp: 'Horodatage Unix',
    milliseconds: 'Millisecondes Unix',
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    date: 'Chaîne de date'
  },

  formats: {
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    locale: 'Format localisé',
    relative: 'Temps relatif',
    custom: 'Format personnalisé'
  },

  actions: {
    convert: 'Convertir',
    nowTimestamp: 'Horodatage actuel',
    nowDate: 'Date actuelle',
    copy: 'Copier',
    clear: 'Effacer',
    refresh: 'Actualiser',
    switch: 'Inverser'
  },

  messages: {
    copied: 'Copié dans le presse-papiers !',
    convertSuccess: 'Conversion réussie',
    convertError: 'Erreur lors de la conversion de l\'horodatage',
    invalidInput: 'Format d\'entrée invalide',
    invalidFormat: 'Chaîne de formatage invalide'
  },

  timeUnits: {
    milliseconds: 'Millisecondes',
    seconds: 'Secondes',
    minutes: 'Minutes',
    hours: 'Heures',
    days: 'Jours'
  },

  labels: {
    unixTimestamp: 'Horodatage Unix (secondes)',
    dateTime: 'Date et heure',
    inputValue: 'Valeur d\'entrée',
    unitConversion: 'Conversion d\'unités de temps',
    timeUnitLabel: 'Unité de temps'
  },

  placeholders: {
    enterTimestamp: 'Entrez un horodatage Unix',
    enterValue: 'Entrez une valeur numérique'
  },

  info: {
    aboutTimestamp: 'À propos des horodatages Unix',
    timestampDescription: 'Un horodatage Unix représente le nombre de secondes écoulées depuis le 1er janvier 1970 à 00:00:00 UTC. C\'est une méthode largement utilisée dans les systèmes informatiques et applications pour représenter le temps.',
    commonUsage: 'Utilisations courantes :',
    usages: {
      database: 'Enregistrement temporel dans les bases de données',
      api: 'Représentation du temps dans les communications API',
      logging: 'Journalisation des événements',
      filesystem: 'Horodatages dans les systèmes de fichiers'
    }
  }
};