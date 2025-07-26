export default {
  name: 'Générateur de publications Instagram',
  description: 'Créez des simulations réalistes de publications Instagram avec contenu personnalisable, arrière-plans et données d\'engagement',

  // Options de conception
  designOptions: 'Options de conception',

  // Profil utilisateur
  userProfile: {
    title: 'Paramètres du profil utilisateur',
    username: 'Nom d\'utilisateur',
    location: 'Localisation',
    postedTime: 'Date et heure de publication',
    postDate: 'Date détaillée',
    avatar: 'Photo de profil',
    uploadAvatar: 'Télécharger une photo',
    removeAvatar: 'Supprimer',
    verifiedAccount: 'Statut du compte',
    isVerified: 'Compte vérifié'
  },

  // Type de contenu
  contentType: 'Type de contenu',

  contentTypes: {
    text: 'Texte uniquement',
    image: 'Image uniquement',
    mixed: 'Texte et image'
  },

  // Contenu texte
  textContent: 'Contenu texte',

  postText: 'Texte de la publication',
  addHashtag: 'Ajouter un hashtag',
  mentionUser: 'Mentionner un utilisateur',
  insertEmoji: 'Emoji',
  commonEmojis: 'Emojis couramment utilisés',
  recommendedHashtags: 'Hashtags recommandés',

  // Formatage du texte
  fontFamily: 'Police',

  fontSize: 'Taille de police',
  textAlign: 'Alignement du texte',
  textColor: 'Couleur du texte',

  // Image de fond
  backgroundImage: 'Image de fond',

  uploadImage: 'Télécharger une image',
  dragAndDrop: 'Ou glisser-déposer un fichier',
  imageFormats: 'Formats PNG, JPG, GIF, max 2MB',

  // Arrière-plan
  background: 'Arrière-plan',

  backgroundColor: 'Couleur d\'arrière-plan',
  backgroundType: 'Type d\'arrière-plan',

  backgroundTypes: {
    solid: 'Uni',
    gradient: 'Dégradé',
    pattern: 'Motif'
  },

  // Options de dégradé
  gradientStartColor: 'Couleur de départ',

  gradientEndColor: 'Couleur de fin',
  gradientDirection: 'Direction',

  gradientDirections: {
    horizontal: 'Horizontal',
    vertical: 'Vertical',
    diagonal: 'Diagonale',
    diagonalReverse: 'Diagonale inverse'
  },

  // Options de motif
  patternType: 'Type de motif',

  // Format de publication
  postFormat: 'Format de publication',

  formats: {
    square: 'Carré',
    portrait: 'Portrait',
    landscape: 'Paysage'
  },

  // Engagement
  engagement: {
    title: 'Simulation d\'engagement',
    likeCount: 'Nombre de likes',
    commentCount: 'Nombre de commentaires',
    viewCount: 'Nombre de vues',
    isLiked: 'Aimé par le spectateur',
    isSaved: 'Enregistré par le spectateur',
    hasStory: 'A une story Instagram',
    showComments: 'Afficher les commentaires',
    isTagged: 'Personnes taguées',
    isSponsored: 'Contenu sponsorisé'
  },

  // Commentaires
  comments: {
    title: 'Commentaires simulés',
    addComment: 'Ajouter un commentaire',
    delete: 'Supprimer',
    addForRealism: 'Ajoutez des commentaires simulés pour plus de réalisme',
    username: 'Nom d\'utilisateur',
    text: 'Texte du commentaire'
  },

  // Invites
  prompts: {
    enterHashtag: 'Entrez un hashtag (sans #)',
    enterUsername: 'Entrez le nom d\'utilisateur à mentionner',
    enterComment: 'Entrez le texte du commentaire',
    defaultComment: 'Superbe publication !',
    enterCommentUsername: 'Entrez le nom d\'utilisateur du commentaire',
    justNow: 'À l\'instant'
  },

  // Boutons d'action
  resetDesign: 'Réinitialiser la conception',

  // Prévisualisation et export
  preview: 'Aperçu',

  export: 'Exporter',
  downloadAsPNG: 'Télécharger en PNG',
  downloadAsJPG: 'Télécharger en JPG',
  copyToClipboard: 'Copier dans le presse-papiers',
  copied: 'Copié !',
  generating: 'Génération de l\'image en cours...'
};
