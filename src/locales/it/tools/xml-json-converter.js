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
  },
  
  article: {
    title: "Convertitore XML/JSON: Trasforma facilmente le tue strutture dati",
    features: {
      title: "Comprendi la conversione tra XML e JSON",
      description: "<strong>Il convertitore XML/JSON</strong> è uno strumento avanzato progettato per facilitare la trasformazione tra i due più diffusi <strong>formati di scambio dati</strong> nello sviluppo web e nell'integrazione di sistemi. Questo <strong>convertitore bidirezionale</strong> permette di effettuare sia <strong>conversioni da XML a JSON</strong> che <strong>da JSON a XML</strong> preservando l'integrità strutturale dei dati.<br><br>Il nostro <strong>parser XML/JSON</strong> offre ampie opzioni di personalizzazione per gestire attributi, dichiarazioni e strutture dati annidate. Per le <strong>conversioni XML→JSON</strong> puoi configurare prefissi per gli attributi, controllare come analizzare i valori dei tag e gestire gli spazi bianchi. Nelle <strong>conversioni JSON→XML</strong> puoi specificare preferenze di formattazione, aggiungere dichiarazioni XML e definire nomi per gli elementi radice. Questo <strong>convertitore di formati dati</strong> garantisce una rappresentazione accurata di strutture gerarchiche complesse in entrambi i formati.",
      useCases: {
        title: "Scenari comuni per la conversione XML-JSON",
        items: [
          "Sviluppatori API che integrano servizi web SOAP (XML) con API REST (JSON)",
          "Sviluppatori frontend che convertono configurazioni XML in JSON per uso in JavaScript",
          "Ingegneri backend che lavorano con sistemi legacy XML e nuovi servizi JSON",
          "Specialisti integrazione dati che mappano formati diversi in processi ETL",
          "Applicazioni web scraping che estraggono dati XML (es. feed RSS) per convertirli in JSON",
          "Sviluppatori mobile che trasformano dati XML aziendali in JSON per app client"
        ]
      }
    },
    faq: {
      title: "Domande frequenti sulla conversione XML-JSON",
      items: [
        {
          question: "Il convertitore gestisce strutture annidate complesse?",
          answer: "Sì, il nostro parser XML/JSON supporta completamente strutture annidate complesse in entrambe le direzioni. Le relazioni gerarchiche vengono preservate accuratamente, gestendo array, oggetti e contenuti misti. Nella conversione XML→JSON, elementi annidati diventano oggetti annidati e elementi ripetuti diventano array automaticamente. Nella conversione JSON→XML, oggetti annidati generano elementi figlio e array producono elementi ripetuti con lo stesso nome. Questa preservazione strutturale è essenziale per lavorare con modelli dati complessi e file di configurazione."
        },
        {
          question: "Come vengono gestiti caratteri speciali e codifiche?",
          answer: "Il convertitore gestisce automaticamente caratteri speciali e problemi di codifica in entrambe le direzioni. Con XML, decodifica correttamente entità (es. &amp; per &, &lt; per <) e gestisce sezioni CDATA per preservare la formattazione. Nella conversione JSON→XML, codifica caratteri speciali nelle entità XML appropriate. Lo strumento mantiene compatibilità UTF-8, gestendo correttamente caratteri internazionali, simboli ed emoji in entrambi i formati, rendendolo adatto per contenuti multilingua e applicazioni globali."
        },
        {
          question: "Cosa succede ai commenti XML nella conversione a JSON?",
          answer: "Poiché JSON non supporta nativamente i commenti, quelli XML vengono normalmente rimossi durante la conversione. Tuttavia, il nostro convertitore offre un'opzione per conservare queste informazioni convertendo i commenti in attributi JSON speciali (es. \"__comment\"). Questa flessibilità è utile quando i commenti contengono documentazione importante o istruzioni di elaborazione che devono essere preservate tra le conversioni di formato."
        },
        {
          question: "Come vengono gestiti i namespace XML?",
          answer: "Il convertitore offre opzioni per gestire i namespace XML durante la conversione. Per default, nella conversione a JSON, namespace e relativi prefissi sono inclusi nei nomi degli elementi. Puoi personalizzare questo comportamento attraverso le opzioni dello strumento, scegliendo di ignorare completamente i namespace, conservarli in formati specifici o trattarli come attributi separati nel JSON risultante, in base alle tue esigenze di integrazione."
        }
      ]
    },
    guide: {
      title: "Guida passo-passo all'uso del convertitore",
      steps: [
        "Seleziona la direzione di conversione con i pulsanti in alto: 'XML a JSON' o 'JSON a XML'",
        "Clicca 'Mostra opzioni' per accedere alle impostazioni avanzate e personalizzare il processo",
        "Inserisci i dati di input nel campo a sinistra, oppure usa 'Carica esempio' per provare con dati predefiniti",
        "Clicca 'Converti' per elaborare i dati - il risultato apparirà nel campo di output a destra",
        "Esamina l'output e, se necessario, modifica le impostazioni per perfezionare il risultato",
        "Usa 'Copia' per copiare il risultato convertito negli appunti e utilizzarlo nelle tue applicazioni",
        "Puoi anche usare 'Scambia contenuto' per invertire input e output e convertire nella direzione opposta"
      ]
    },
    conclusion: "Il convertitore XML/JSON offre una soluzione robusta per trasformare dati tra questi due formati fondamentali nello sviluppo moderno. Che tu stia integrando sistemi diversi, modernizzando applicazioni legacy o ottimizzando dati per l'elaborazione client, questo strumento ti aiuta ad evitare le complessità e i potenziali errori delle conversioni manuali. Con le sue opzioni complete per gestire attributi, formattazione ed elementi strutturali, puoi assicurarti che i tuoi dati mantengano la loro integrità e significato attraversando i confini dei formati. Semplificando la conversione tra XML e JSON, questo strumento aiuta a colmare il divario tra tecnologie e standard diversi, abilitando sistemi software più flessibili e interoperabili."
  }
}