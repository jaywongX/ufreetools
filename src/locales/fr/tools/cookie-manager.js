export default {
  name: 'Gestionnaire de Cookies',
  description: 'Afficher, créer, modifier et supprimer les cookies du site actuel',

  // Étiquettes des fonctionnalités principales
  currentCookies: 'Cookies actuels',

  createCookie: 'Créer un cookie',
  importExport: 'Importer/Exporter',

  // Liste des cookies
  noCookies: 'Aucun cookie pour ce site',

  cookieName: 'Nom',
  cookieValue: 'Valeur',
  cookieDomain: 'Domaine',
  cookiePath: 'Chemin',
  cookieExpires: 'Date d\'expiration',
  cookieSecure: 'Sécurisé (Secure)',
  cookieHttpOnly: 'HttpOnly',
  cookieSameSite: 'SameSite',
  actions: 'Actions',
  edit: 'Modifier',
  delete: 'Supprimer',
  save: 'Enregistrer',
  cancel: 'Annuler',
  refresh: 'Actualiser',

  // Formulaire de création/modification
  addCookie: 'Ajouter un cookie',

  editCookie: 'Modifier le cookie',
  required: 'Obligatoire',
  optional: 'Optionnel',
  days: 'jours',
  hours: 'heures',
  minutes: 'minutes',
  cookieCreated: 'Cookie créé',
  cookieUpdated: 'Cookie mis à jour',
  cookieDeleted: 'Cookie supprimé',
  createError: 'Erreur lors de la création',
  updateError: 'Erreur lors de la mise à jour',
  deleteError: 'Erreur lors de la suppression',

  // Import/Export
  export: 'Exporter les cookies',

  import: 'Importer des cookies',
  exportAs: 'Exporter en tant que',
  exportSuccess: 'Cookies exportés',
  importSuccess: '{count} cookies importés',
  importError: 'Erreur lors de l\'importation',

  // Options de sécurité
  none: 'Aucun',

  strict: 'Strict',
  lax: 'Laxiste',

  // Notes et explications
  domainNote: 'Laisser vide pour le domaine actuel',

  pathNote: 'Par défaut "/" (racine)',
  expiresNote: 'Non défini = cookie de session',
  secureNote: 'Uniquement via HTTPS',
  httpOnlyNote: 'Inaccessible en JavaScript',
  sameSiteNote: 'Contrôle des requêtes cross-site',

  // Format d'importation
  importFormat: 'Exemple de format :\nname=value; expires=date; path=/; domain=example.com; secure; httpOnly; sameSite=strict',

  jsonFormat: 'Format JSON',
  textFormat: 'Format texte',
  invalidFormat: 'Format invalide'
};