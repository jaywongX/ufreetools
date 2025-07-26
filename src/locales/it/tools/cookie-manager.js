export default {
  name: 'Gestore di Cookie',
  description: 'Visualizza, crea, modifica ed elimina i cookie del sito corrente',

  // Etichette principali
  currentCookies: 'Cookie attuali',

  createCookie: 'Crea Cookie',
  importExport: 'Importa/Esporta',

  // Lista cookie
  noCookies: 'Nessun cookie presente per questo sito',

  cookieName: 'Nome',
  cookieValue: 'Valore',
  cookieDomain: 'Dominio',
  cookiePath: 'Percorso',
  cookieExpires: 'Scadenza',
  cookieSecure: 'Sicuro (Secure)',
  cookieHttpOnly: 'HttpOnly',
  cookieSameSite: 'SameSite',
  actions: 'Azioni',
  edit: 'Modifica',
  delete: 'Elimina',
  save: 'Salva',
  cancel: 'Annulla',
  refresh: 'Aggiorna',

  // Form creazione/modifica
  addCookie: 'Aggiungi Cookie',

  editCookie: 'Modifica Cookie',
  required: 'Obbligatorio',
  optional: 'Opzionale',
  days: 'Giorni',
  hours: 'Ore',
  minutes: 'Minuti',
  cookieCreated: 'Cookie creato',
  cookieUpdated: 'Cookie aggiornato',
  cookieDeleted: 'Cookie eliminato',
  createError: 'Errore nella creazione del cookie',
  updateError: 'Errore nell\'aggiornamento del cookie',
  deleteError: 'Errore nell\'eliminazione del cookie',

  // Importa/Esporta
  export: 'Esporta Cookie',

  import: 'Importa Cookie',
  exportAs: 'Esporta come',
  exportSuccess: 'Cookie esportati',
  importSuccess: 'Importati {count} cookie',
  importError: 'Errore nell\'importazione dei cookie',

  // Opzioni sicurezza
  none: 'Nessuno',

  strict: 'Stretto',
  lax: 'Lax',

  // Note e spiegazioni
  domainNote: 'Lasciare vuoto per il dominio corrente',

  pathNote: 'Predefinito alla radice "/"',
  expiresNote: 'Se non impostato, sarà un cookie di sessione',
  secureNote: 'Inviato solo via HTTPS',
  httpOnlyNote: 'Non accessibile da JavaScript',
  sameSiteNote: 'Controllo richieste cross-site',

  // Formato importazione
  importFormat: 'Formato di esempio per l\'importazione:\nnome=valore; expires=data; path=/; domain=esempio.com; secure; httpOnly; sameSite=strict',

  jsonFormat: 'Formato JSON',
  textFormat: 'Formato testo',
  invalidFormat: 'Formato non valido'
};