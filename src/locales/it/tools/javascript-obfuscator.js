export default {
  name: 'Obfuscatore JavaScript',
  description: 'Proteggi il tuo codice JavaScript con varie tecniche di offuscamento',
  input: {
    title: 'Inserisci JavaScript',
    placeholder: 'Inserisci o incolla qui il tuo codice JavaScript',
    loadSample: 'Carica esempio',
    clearInput: 'Pulisci input',
    uploadFile: 'Carica file JS'
  },
  output: {
    title: 'Codice offuscato',
    copied: 'Codice copiato negli appunti',
    download: 'Scarica codice offuscato',
    copyOutput: 'Copia codice',
    clearOutput: 'Pulisci output'
  },
  options: {
    title: 'Opzioni di offuscamento',
    compact: 'Compatta codice',
    selfDefending: 'Autodifesa',
    controlFlowFlattening: 'Appiattimento del flusso di controllo',
    controlFlowFlatteningThreshold: 'Soglia di appiattimento del flusso di controllo',
    deadCodeInjection: 'Iniezione di codice morto',
    deadCodeInjectionThreshold: 'Soglia di iniezione di codice morto',
    debugProtection: 'Protezione dal debug',
    debugProtectionInterval: 'Intervallo di protezione dal debug',
    disableConsoleOutput: 'Disabilita output console',
    domainLock: 'Blocco dominio',
    domainLockRedirectUrl: 'URL di reindirizzamento per blocco dominio',
    identifierNamesGenerator: 'Generatore di nomi identificatori',
    identifiersPrefix: 'Prefisso identificatori',
    renameGlobals: 'Rinomina variabili globali',
    reservedNames: 'Nomi riservati',
    reservedStrings: 'Stringhe riservate',
    rotateStringArray: 'Ruota array di stringhe',
    seed: 'Seme',
    shuffleStringArray: 'Mescola array di stringhe',
    sourceMap: 'Mappa sorgente',
    sourceMapBaseUrl: 'URL base mappa sorgente',
    sourceMapFileName: 'Nome file mappa sorgente',
    splitStrings: 'Dividi stringhe',
    splitStringsChunkLength: 'Lunghezza frammento stringhe divise',
    stringArray: 'Array di stringhe',
    stringArrayEncoding: 'Codifica array di stringhe',
    stringArrayThreshold: 'Soglia array di stringhe',
    target: 'Target',
    transformObjectKeys: 'Trasforma chiavi oggetto',
    unicodeEscapeSequence: 'Sequenza di escape Unicode'
  },
  presets: {
    title: 'Preimpostazioni',
    low: 'Offuscamento basso',
    medium: 'Offuscamento medio',
    high: 'Offuscamento alto',
    custom: 'Personalizzato'
  },
  actions: {
    obfuscate: 'Offusca',
    reset: 'Ripristina opzioni',
    savePreset: 'Salva preimpostazione',
    loadPreset: 'Carica preimpostazione'
  },
  messages: {
    obfuscationSuccess: 'Codice offuscato con successo',
    obfuscationFailed: 'Offuscamento fallito: {error}',
    emptyCode: 'Inserisci il codice JavaScript da offuscare',
    uploadSuccess: 'File caricato con successo',
    presetSaved: 'Preimpostazione salvata',
    presetLoaded: 'Preimpostazione caricata'
  },
  help: {
    title: 'Guida alle opzioni',
    stringArrayDesc: 'Sposta i valori letterali stringa in un array speciale e sostituisce i riferimenti con chiamate all\'array',
    controlFlowDesc: 'Abilita l\'appiattimento del flusso di controllo per rendere la logica più difficile da comprendere',
    deadCodeDesc: 'Inietta codice morto casuale per confondere gli attaccanti',
    selfDefendingDesc: 'Rende l\'output resistente alle modifiche di formattazione'
  }
}