export default {
  name: 'Generatore Post Instagram',
  description: 'Crea simulazioni realistiche di post Instagram con contenuti personalizzabili, sfondi e dati di interazione',

  // Opzioni di design
  designOptions: 'Opzioni di design',

  // Profilo utente
  userProfile: {
    title: 'Impostazioni profilo',
    username: 'Nome utente',
    location: 'Posizione',
    postedTime: 'Data e ora pubblicazione',
    postDate: 'Data specifica',
    avatar: 'Immagine profilo',
    uploadAvatar: 'Carica immagine',
    removeAvatar: 'Rimuovi',
    verifiedAccount: 'Stato account',
    isVerified: 'Account verificato'
  },

  // Tipo contenuto
  contentType: 'Tipo contenuto',

  contentTypes: {
    text: 'Solo testo',
    image: 'Solo immagine',
    mixed: 'Testo e immagine'
  },

  // Contenuto testuale
  textContent: 'Contenuto testuale',

  postText: 'Testo del post',
  addHashtag: 'Aggiungi hashtag',
  mentionUser: 'Menziona utente',
  insertEmoji: 'Emoji',
  commonEmojis: 'Emoji comuni',
  recommendedHashtags: 'Hashtag consigliati',

  // Formattazione testo
  fontFamily: 'Font',

  fontSize: 'Dimensione font',
  textAlign: 'Allineamento testo',
  textColor: 'Colore testo',

  // Immagine di sfondo
  backgroundImage: 'Immagine di sfondo',

  uploadImage: 'Carica immagine',
  dragAndDrop: 'Trascina e rilascia',
  imageFormats: 'Formati PNG, JPG, GIF, max 2MB',

  // Sfondo
  background: 'Sfondo',

  backgroundColor: 'Colore sfondo',
  backgroundType: 'Tipo sfondo',

  backgroundTypes: {
    solid: 'Colore solido',
    gradient: 'Gradiente',
    pattern: 'Motivo'
  },

  // Opzioni gradiente
  gradientStartColor: 'Colore iniziale',

  gradientEndColor: 'Colore finale',
  gradientDirection: 'Direzione',

  gradientDirections: {
    horizontal: 'Orizzontale',
    vertical: 'Verticale',
    diagonal: 'Diagonale',
    diagonalReverse: 'Diagonale inversa'
  },

  // Opzioni motivo
  patternType: 'Tipo motivo',

  // Formato post
  postFormat: 'Formato post',

  formats: {
    square: 'Quadrato',
    portrait: 'Verticale',
    landscape: 'Orizzontale'
  },

  // Interazioni
  engagement: {
    title: 'Simulazione interazioni',
    likeCount: 'Numero like',
    commentCount: 'Numero commenti',
    viewCount: 'Visualizzazioni',
    isLiked: 'Mi piace dato',
    isSaved: 'Salvato',
    hasStory: 'Storia attiva',
    showComments: 'Mostra commenti',
    isTagged: 'Persone taggate',
    isSponsored: 'Contenuto sponsorizzato'
  },

  // Commenti
  comments: {
    title: 'Commenti simulati',
    addComment: 'Aggiungi commento',
    delete: 'Elimina',
    addForRealism: 'Aggiungi commenti per maggiore realismo',
    username: 'Nome utente',
    text: 'Testo commento'
  },

  // Prompt
  prompts: {
    enterHashtag: 'Inserisci hashtag (senza #)',
    enterUsername: 'Inserisci username da menzionare',
    enterComment: 'Inserisci testo commento',
    defaultComment: 'Bellissimo!',
    enterCommentUsername: 'Inserisci nome utente commento',
    justNow: 'Poco fa'
  },

  // Pulsanti azione
  resetDesign: 'Ripristina design',

  // Anteprima ed esportazione
  preview: 'Anteprima',

  export: 'Esporta',
  downloadAsPNG: 'Scarica come PNG',
  downloadAsJPG: 'Scarica come JPG',
  copyToClipboard: 'Copia negli appunti',
  copied: 'Copiato!',
  generating: 'Generazione immagine...'
};