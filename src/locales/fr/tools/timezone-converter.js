export default {
  name: 'Convertisseur de fuseaux horaires',
  description: 'Outil de comparaison et conversion des heures dans le monde entier pour visualiser facilement l\'heure actuelle dans différents pays et régions',

  // Étiquettes des fonctionnalités principales
  currentTime: 'Heure actuelle',

  addTimezone: 'Ajouter un fuseau horaire',
  removeTimezone: 'Supprimer un fuseau horaire',
  convertTime: 'Convertir l\'heure',
  compareTimezones: 'Comparer les fuseaux horaires',

  // Paramètres et options
  settings: {
    date: 'Date',
    time: 'Heure',
    format: 'Format',
    select24Hour: 'Format 24 heures',
    select12Hour: 'Format 12 heures',
    showSeconds: 'Afficher les secondes',
    hideSeconds: 'Masquer les secondes',
    showDate: 'Afficher la date',
    hideDate: 'Masquer la date',
  },

  // Fuseaux horaires
  timezone: {
    title: 'Fuseau horaire',
    search: 'Rechercher un fuseau horaire ou une ville...',
    yourLocal: 'Votre fuseau horaire local',
    popular: 'Fuseaux horaires populaires',
    allTimezones: 'Tous les fuseaux horaires',
    utc: 'UTC (Temps universel coordonné)',
    gmt: 'GMT (Heure moyenne de Greenwich)',
    est: 'Heure normale de l\'Est (États-Unis)',
    cst: 'Heure normale de Chine',
    jst: 'Heure normale du Japon',
    ist: 'Heure normale de l\'Inde',
    cet: 'Heure d\'Europe centrale',
    bst: 'Heure d\'été britannique',
    aest: 'Heure normale de l\'Est australien',
    nzst: 'Heure normale de Nouvelle-Zélande',
    custom: 'Fuseau horaire personnalisé'
  },

  // Groupes régionaux
  regions: {
    africa: 'Afrique',
    america: 'Amérique',
    asia: 'Asie',
    atlantic: 'Atlantique',
    australia: 'Australie',
    europe: 'Europe',
    indian: 'Océan Indien',
    pacific: 'Pacifique'
  },

  // Conversion
  conversion: {
    from: 'De',
    to: 'À',
    convert: 'Convertir',
    result: 'Résultat de conversion',
    timeIn: 'Heure à'
  },

  // Éléments d'interface
  ui: {
    now: 'Maintenant',
    refresh: 'Actualiser',
    copy: 'Copier',
    copied: 'Copié',
    share: 'Partager',
    reset: 'Réinitialiser',
    empty: 'Aucun résultat',
    offset: 'Décalage',
    add: 'Ajouter'
  },

  // Messages
  messages: {
    invalid: 'Heure invalide',
    copied: 'Copié dans le presse-papiers',
    removed: 'Fuseau horaire supprimé',
    added: 'Fuseau horaire ajouté',
    maxTimezones: 'Vous ne pouvez ajouter que 10 fuseaux horaires maximum',
    selectTimezone: 'Veuillez sélectionner un fuseau horaire'
  },

  // Description de l'outil
  aboutTitle: 'À propos du convertisseur de fuseaux horaires',

  aboutDescription: 'Le convertisseur de fuseaux horaires est un outil pratique qui vous permet de visualiser et comparer facilement l\'heure dans différentes régions du monde. Il est particulièrement utile pour les communications internationales, la planification de voyages et l\'organisation de réunions internationales.',
  featuresTitle: 'Fonctionnalités principales',
  feature1: 'Affichage en temps réel de l\'heure actuelle dans les principales villes et fuseaux horaires du monde',
  feature2: 'Comparaison rapide des différences horaires entre plusieurs fuseaux',
  feature3: 'Conversion de l\'heure d\'un fuseau horaire vers un autre',
  feature4: 'Prise en charge des formats 24 heures et 12 heures',
  feature5: 'Visualisation claire des plages horaires de travail qui se chevauchent',
  feature6: 'Recherche par ville ou pays pour trouver le fuseau horaire correspondant',
  useCasesTitle: 'Cas d\'utilisation',
  useCase1: 'Organiser des réunions d\'affaires ou des conférences téléphoniques internationales',
  useCase2: 'Planifier des voyages internationaux et des horaires de vol',
  useCase3: 'Rester en contact avec des amis ou de la famille à l\'étranger',
  useCase4: 'Suivre l\'heure locale d\'événements internationaux importants',
  useCase5: 'Organisation des horaires pour les équipes de travail à distance',
  howToUseTitle: 'Comment utiliser',
  howToUse1: 'Ajoutez plusieurs fuseaux horaires pour voir simultanément l\'heure actuelle dans différentes régions',
  howToUse2: 'Utilisez la fonction de conversion pour transformer une heure spécifique d\'un fuseau à un autre',
  howToUse3: 'Ajustez les formats de date et d\'heure selon vos préférences personnelles',
  howToUse4: 'Copiez les résultats ou générez un lien à partager avec d\'autres'
};