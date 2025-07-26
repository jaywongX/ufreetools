export default {
  name: 'Convertitore XML/JSON',
  title: 'Conversione XML ↔ JSON',
  description: 'Converti bidirezionalmente tra formati XML e JSON con opzioni avanzate e impostazioni personalizzate',

  conversion: {
    direction: 'Direzione conversione',
    xmlToJson: 'XML a JSON',
    jsonToXml: 'JSON a XML'
  },

  options: {
    title: 'Opzioni conversione',
    show: 'Mostra opzioni',
    hide: 'Nascondi opzioni',
    
    xmlToJson: {
      ignoreAttributes: 'Ignora attributi',
      ignoreAttributesHint: 'Disabilita per conservare gli attributi XML nel JSON risultante',
      parseAttributeValue: 'Analizza valori attributi',
      parseAttributeValueHint: 'Converte numeri, booleani ecc. negli attributi nei loro tipi reali anziché stringhe',
      ignoreDeclaration: 'Ignora dichiarazione XML',
      ignoreDeclarationHint: 'Esclude informazioni come <?xml version="1.0"?>',
      parseTagValue: 'Analizza valori tag',
      parseTagValueHint: 'Converte numeri, booleani ecc. nei contenuti dei tag nei loro tipi reali',
      trimValues: 'Elimina spazi dai valori',
      attributePrefix: 'Prefisso attributi',
      attributePrefixPlaceholder: 'Es: @, _, attr_',
      attributePrefixHint: 'Prefisso per identificare attributi XML in JSON (default @)'
    },
    
    jsonToXml: {
      format: 'Formatta XML',
      formatHint: 'Abilita indentazione e a capo per migliorare leggibilità',
      indentBy: 'Indenta (2 spazi)',
      addDeclaration: 'Aggiungi dichiarazione XML',
      addDeclarationHint: 'Inserisce <?xml version="1.0" encoding="UTF-8"?> all\'inizio',
      rootName: 'Nome elemento radice (opzionale)',
      rootNamePlaceholder: 'Es: root, data, xml',
      rootNameHint: 'Nome radice quando JSON ha più chiavi al livello superiore',
      attributePrefix: 'Riconoscimento prefisso attributi',
      attributePrefixPlaceholder: 'Es: @, _, attr_',
      attributePrefixHint: 'Prefisso usato per identificare attributi XML in JSON (default @)'
    }
  },

  buttons: {
    convert: 'Converti',
    swap: 'Scambia contenuto',
    clear: 'Svuota',
    loadExample: 'Carica esempio'
  },

  input: {
    xmlInput: 'Input XML',
    jsonInput: 'Input JSON',
    placeholder: {
      xml: 'Inserisci XML...',
      json: 'Inserisci JSON...'
    }
  },

  output: {
    xmlResult: 'Risultato XML',
    jsonResult: 'Risultato JSON',
    copy: 'Copia'
  },

  stats: {
    title: 'Statistiche conversione',
    inputSize: 'Dimensione input',
    outputSize: 'Dimensione output',
    sizeChange: 'Variazione dimensione',
    conversionTime: 'Tempo conversione'
  },

  help: {
    title: 'Guida all\'uso',
    show: 'Mostra guida',
    hide: 'Nascondi guida',
    about: {
      title: 'Informazioni su XML e JSON',
      content: 'XML (eXtensible Markup Language) è un linguaggio di markup estensibile usato per file di configurazione, scambio dati e servizi web. JSON (JavaScript Object Notation) è un formato leggero per lo scambio dati, facile da leggere/scrivere per gli umani e da analizzare/generare per le macchine.'
    },
    xmlToJson: {
      title: 'Note sulla conversione XML→JSON',
      items: [
        'Gli attributi XML diventano chiavi JSON con prefisso @',
        'I contenuti testuali XML usano la chiave #text in JSON',
        'Abilita "Analizza valori tag" per convertire numeri/booleani ai loro tipi reali',
        'Tag XML con stesso nome diventano array JSON automaticamente'
      ]
    },
    jsonToXml: {
      title: 'Note sulla conversione JSON→XML',
      items: [
        'Chiavi JSON con prefisso @ diventano attributi XML',
        'Array JSON generano tag XML ripetuti con stesso nome',
        'Oggetti JSON annidati producono strutture XML gerarchiche',
        'JSON con più chiavi root senza nome radice generano multipli elementi XML radice'
      ]
    }
  },

  errors: {
    xmlParse: 'Errore analisi XML: {0}',
    jsonParse: 'Errore analisi JSON: {0}',
    xmlGeneration: 'Errore generazione XML: {0}',
    emptyObject: 'Oggetto JSON vuoto o non valido',
    conversion: 'Errore conversione: {0}'
  },

  alerts: {
    copied: 'Copiato negli appunti'
  }
};