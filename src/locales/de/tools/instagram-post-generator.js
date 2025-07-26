export default {
  name: 'Instagram-Beitragsgenerator',
  description: 'Erstellen Sie realistische Instagram-Beitragssimulationen mit anpassbaren Inhalten, Hintergründen und Interaktionsdaten',

  // Designoptionen
  designOptions: 'Designoptionen',

  // Benutzerprofil
  userProfile: {
    title: 'Benutzerprofileinstellungen',
    username: 'Benutzername',
    location: 'Standort',
    postedTime: 'Veröffentlichungsdatum und -zeit',
    postDate: 'Detailliertes Datum',
    avatar: 'Profilbild',
    uploadAvatar: 'Profilbild hochladen',
    removeAvatar: 'Entfernen',
    verifiedAccount: 'Kontostatus',
    isVerified: 'Verifiziertes Konto'
  },

  // Inhaltstyp
  contentType: 'Inhaltstyp',

  contentTypes: {
    text: 'Nur Text',
    image: 'Nur Bild',
    mixed: 'Text und Bild'
  },

  // Textinhalt
  textContent: 'Textinhalt',

  postText: 'Beitragstext',
  addHashtag: 'Hashtag hinzufügen',
  mentionUser: 'Benutzer erwähnen',
  insertEmoji: 'Emoji',
  commonEmojis: 'Häufig verwendete Emojis',
  recommendedHashtags: 'Empfohlene Hashtags',

  // Textformatierung
  fontFamily: 'Schriftart',

  fontSize: 'Schriftgröße',
  textAlign: 'Textausrichtung',
  textColor: 'Textfarbe',

  // Hintergrundbild
  backgroundImage: 'Hintergrundbild',

  uploadImage: 'Bild hochladen',
  dragAndDrop: 'Oder Datei hierher ziehen',
  imageFormats: 'PNG, JPG, GIF Format, max. 2MB',

  // Hintergrund
  background: 'Hintergrund',

  backgroundColor: 'Hintergrundfarbe',
  backgroundType: 'Hintergrundtyp',

  backgroundTypes: {
    solid: 'Einfarbig',
    gradient: 'Verlauf',
    pattern: 'Muster'
  },

  // Verlaufsoptionen
  gradientStartColor: 'Startfarbe',

  gradientEndColor: 'Endfarbe',
  gradientDirection: 'Richtung',

  gradientDirections: {
    horizontal: 'Horizontal',
    vertical: 'Vertikal',
    diagonal: 'Diagonal',
    diagonalReverse: 'Umgekehrte Diagonal'
  },

  // Musteroptionen
  patternType: 'Musterart',

  // Beitragsformat
  postFormat: 'Beitragsformat',

  formats: {
    square: 'Quadratisch',
    portrait: 'Hochformat',
    landscape: 'Querformat'
  },

  // Interaktion
  engagement: {
    title: 'Interaktionssimulation',
    likeCount: 'Likes',
    commentCount: 'Kommentare',
    viewCount: 'Aufrufe',
    isLiked: 'Vom Betrachter geliked',
    isSaved: 'Vom Betrachter gespeichert',
    hasStory: 'Hat Instagram-Story',
    showComments: 'Kommentare anzeigen',
    isTagged: 'Personen markiert',
    isSponsored: 'Gesponserter Inhalt'
  },

  // Kommentare
  comments: {
    title: 'Kommentarsimulation',
    addComment: 'Kommentar hinzufügen',
    delete: 'Löschen',
    addForRealism: 'Fügen Sie simulierte Kommentare für mehr Realismus hinzu',
    username: 'Benutzername',
    text: 'Kommentartext'
  },

  // Eingabeaufforderungen
  prompts: {
    enterHashtag: 'Hashtag eingeben (ohne #)',
    enterUsername: 'Zu erwähnenden Benutzernamen eingeben',
    enterComment: 'Kommentartext eingeben',
    defaultComment: 'Sieht toll aus!',
    enterCommentUsername: 'Kommentar-Benutzernamen eingeben',
    justNow: 'Gerade eben'
  },

  // Aktionsschaltflächen
  resetDesign: 'Design zurücksetzen',

  // Vorschau und Export
  preview: 'Vorschau',

  export: 'Exportieren',
  downloadAsPNG: 'Als PNG herunterladen',
  downloadAsJPG: 'Als JPG herunterladen',
  copyToClipboard: 'In Zwischenablage kopieren',
  copied: 'Kopiert!',
  generating: 'Bild wird generiert...'
};