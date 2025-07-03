export default {
  name: 'Calcolatore Operazioni AND Esadecimali',
  description: 'Esegue operazioni AND bitwise su numeri esadecimali e mostra i risultati in diversi formati.',
  
  // Etichette input
  firstNumber: 'Primo numero esadecimale',
  secondNumber: 'Secondo numero esadecimale',
  enterHex: 'Inserisci valore esadecimale (senza prefisso 0x)',
  invalidHex: 'Valore esadecimale non valido',
  
  // Operazioni
  calculate: 'Calcola',
  import: 'Importa',
  save:'Salva',
  copy:'Copia',
  paste:'Incolla',
  
  // Risultati
  result: 'Risultato',
  decimal: 'Decimale',
  binary: 'Binario',
  copied: 'Copiato!',
  noResult: 'Inserisci i valori e clicca Calcola per vedere i risultati',
  
  // Spiegazione
  explanation: {
    title: 'Come funziona l\'operazione AND bitwise',
    content: 'L\'operazione AND bitwise confronta ogni bit del primo operando con il bit corrispondente del secondo operando. Se entrambi i bit sono 1, il bit corrispondente nel risultato è impostato a 1. Altrimenti, è impostato a 0.',
    example: 'Esempio dettagliato'
  },
  
  // Esempi
  examples: {
    title: 'Esempi',
    example1: {
      description: 'Operazione AND di base',
      value1: 'FF',
      value2: '0F',
      result: '0F'
    },
    example2: {
      description: 'Applicazione maschera bit',
      value1: 'ABCD',
      value2: 'FF00',
      result: 'AB00'
    },
    commonMask: 'Maschere comuni: 0xFF & 0x0F',
    permissionCheck: 'Controllo permessi: 0xA5 & 0x80',
    bitClearing: 'Cancellazione bit: 0xFFFF & 0xFF00',
    evenCheck: 'Controllo pari/dispari: 0x42 & 0x01'
  },
  
  // Documentazione
  documentation: {
    title: 'Calcolatore Operazioni AND Esadecimali: Guida Completa',
    introduction: 'Il calcolatore di operazioni AND esadecimali è uno strumento per eseguire operazioni AND bitwise su numeri esadecimali, comunemente usato in programmazione e progettazione elettronica digitale.',
    
    whatIs: {
      title: 'Cos\'è un\'operazione AND bitwise?',
      paragraph1: 'L\'AND bitwise è un\'operazione binaria che prende due pattern di bit di uguale lunghezza ed esegue un\'operazione logica AND su ogni coppia di bit corrispondenti. Se entrambi i bit sono 1, il bit risultante è 1, altrimenti è 0.',
      paragraph2: 'Questa operazione è fondamentale in vari scenari computazionali, incluse operazioni di mascheramento, manipolazione di bit e verifica dello stato di bit specifici.'
    },
    
    useCases: {
      title: 'Casi d\'uso comuni per operazioni AND esadecimali',
      masks: {
        title: 'Mascheramento bit',
        description: 'Usa l\'operazione AND per estrarre o isolare bit specifici in un valore mascherando i bit non desiderati.'
      },
      permissions: {
        title: 'Controllo permessi',
        description: 'Determina se specifici bit di permesso sono impostati in un campo di bit di autorizzazione.'
      },
      flagsCheck: {
        title: 'Verifica stato flag',
        description: 'Controlla se specifici flag sono impostati in registri di stato o variabili flag.'
      },
      evenOdd: {
        title: 'Test parità',
        description: 'Usa l\'AND con 1 per verificare se un numero è pari o dispari.'
      },
      bitClearing: {
        title: 'Cancellazione bit',
        description: 'Cancella bit specifici usando l\'AND con una maschera, mantenendo inalterati gli altri bit.'
      }
    },
    
    howToUse: {
      title: 'Come usare il calcolatore AND esadecimale',
      step1: 'Inserisci il primo numero esadecimale (senza prefisso "0x")',
      step2: 'Inserisci il secondo numero esadecimale (senza prefisso "0x")',
      step3: 'Clicca il pulsante "Calcola"',
      step4: 'Visualizza i risultati in formato esadecimale, decimale e binario',
      step5: 'Usa i pulsanti copia per copiare qualsiasi formato del risultato negli appunti'
    },
    
    tips: {
      title: 'Suggerimenti per operazioni AND esadecimali',
      tip1: 'Gli zeri iniziali negli input vengono ignorati durante il calcolo, ma il risultato viene riempito in base all\'input più lungo',
      tip2: 'Per operazioni di mascheramento, usa FF (o sequenze di F) nelle posizioni che vuoi mantenere e 00 nelle posizioni che vuoi cancellare',
      tip3: 'Per verificare se un bit specifico è impostato, esegui l\'AND con un valore che ha solo quel bit impostato (es. AND con 0x08 per verificare il 4° bit)',
      tip4: 'Ricorda che ogni cifra esadecimale rappresenta 4 bit (un nibble)',
      tip5: 'Quando lavori con permessi o flag, mantieni un riferimento su cosa rappresenta ogni bit'
    }
  },
  quickExamples: 'Esempi rapidi',
  operation: 'Operazione',
  operations: {
    and: 'AND',
    or: 'OR',
    xor: 'XOR',
    not: 'NOT',
    shiftLeft: 'Shift sinistro (<<)',
    shiftRight: 'Shift destro (>>)'
  },
  input: 'Valori input',
  chainWith: 'Calcolo concatenato',
  importFromFile: 'Importa da file',
  noResult: 'Inserisci i valori e clicca Calcola per vedere i risultati',
  bitVisualization: 'Visualizzazione bit',
  inputNumbers: 'Inserisci numeri esadecimali',
  addNumber: 'Aggiungi altro numero',
  number: 'Numero',
  
  // Articolo
  article: {
    title: 'Calcolatore Operazioni AND Esadecimali: Guida Completa',
    introduction: {
      title: 'Comprendere le operazioni AND esadecimali',
      content: [
        'Il calcolatore di operazioni AND esadecimali è uno strumento specializzato per eseguire operazioni AND bitwise su numeri esadecimali. Questa operazione confronta ogni posizione di bit tra due o più valori esadecimali e produce un risultato dove un bit è 1 solo se tutti i bit corrispondenti negli operandi sono 1.',
        'Le operazioni AND bitwise sono fondamentali in informatica, specialmente quando si lavora con dati binari, interfacce hardware, flag di permesso e altre attività di programmazione di basso livello. La rappresentazione esadecimale rende queste operazioni più leggibili e gestibili per sviluppatori e ingegneri hardware.',
        'Il nostro calcolatore supporta più valori di input, fornendo un modo conveniente per eseguire operazioni AND su più numeri esadecimali contemporaneamente. I risultati sono mostrati in formato esadecimale, decimale e binario, con una rappresentazione visiva bit-a-bit che aiuta a capire come l\'operazione influisce su ogni posizione di bit.'
      ]
    },
    useCases: {
      title: 'Scenari comuni per operazioni AND esadecimali',
      cases: [
        {
          title: 'Controllo permessi',
          description: 'Gli sviluppatori usano l\'AND per verificare se specifici bit di permesso sono impostati nei sistemi di controllo accessi. Ad esempio, facendo AND tra il valore dei permessi utente (0xA5) e una maschera di permesso (0x80) si può determinare se un permesso specifico è concesso.'
        },
        {
          title: 'Manipolazione registri hardware',
          description: 'Gli ingegneri che lavorano con l\'hardware usano spesso l\'AND per cancellare bit specifici nei registri di controllo, mantenendo inalterati gli altri bit. Ad esempio, 0xFFFF & 0xFF00 cancella selettivamente bit specifici.'
        },
        {
          title: 'Mascheramento bit nei protocolli di rete',
          description: 'I protocolli di rete usano frequentemente l\'AND per estrarre campi specifici dagli header dei pacchetti. Ad esempio, facendo AND tra un indirizzo IP e una subnet mask si può isolare la parte di rete dell\'indirizzo.'
        },
        {
          title: 'Estrazione canali colore',
          description: 'I programmatori grafici usano l\'AND per separare canali colore specifici da valori di colore esadecimali. Ad esempio, 0x00FF00 & 0xFFFFFF estrae il canale verde da un colore RGB.'
        },
        {
          title: 'Test flag nella programmazione di sistema',
          description: 'I programmatori di sistema usano l\'AND per testare flag specifici nei registri di stato. Questo è cruciale per determinare lo stato hardware o le configurazioni.'
        }
      ]
    },
    faq: {
      title: 'Domande frequenti sulle operazioni AND esadecimali',
      questions: [
        {
          question: 'Cos\'è un\'operazione AND bitwise?',
          answer: 'L\'AND bitwise confronta ogni posizione di bit tra due numeri binari e produce un nuovo numero binario dove ogni bit è 1 solo se entrambi i bit corrispondenti negli operandi sono 1. Con i numeri esadecimali, ogni cifra rappresenta 4 bit binari, rendendo la rappresentazione più compatta.'
        },
        {
          question: 'Perché usare l\'esadecimale invece del binario per operazioni bitwise?',
          answer: 'La notazione esadecimale è più compatta del binario (una cifra esadecimale rappresenta 4 bit binari) mantenendo una chiara relazione con il binario. Questo rende i valori esadecimali più facili da leggere, scrivere e comunicare, specialmente per numeri grandi comuni nei calcoli e nella programmazione.'
        },
        {
          question: 'Il calcolatore può gestire più di due input?',
          answer: 'Sì, il nostro calcolatore supporta più input. Quando vengono forniti più di due valori, l\'operazione AND viene applicata in sequenza dal primo valore a tutti i valori successivi. Questo è utile per operazioni complesse di mascheramento che richiedono più condizioni.'
        },
        {
          question: 'Qual è la differenza tra AND logico e AND bitwise?',
          answer: 'L\'AND logico (&&) valuta le espressioni come vero o falso, trattando gli operandi come singoli valori booleani. L\'AND bitwise (&) opera su ogni singola posizione di bit, confrontando bit corrispondenti tra gli operandi. Il nostro calcolatore esegue operazioni AND bitwise.'
        },
        {
          question: 'Ci sono limiti alla dimensione dei numeri esadecimali che posso usare?',
          answer: 'Il calcolatore supporta la precisione standard dei numeri JavaScript, tipicamente consentendo interi fino a 53 bit. Per la maggior parte delle applicazioni pratiche che coinvolgono operazioni su registri o flag, questo è più che sufficiente.'
        },
        {
          question: 'Come interpretare la visualizzazione binaria dei risultati?',
          answer: 'La visualizzazione binaria mostra la scomposizione bit-a-bit di ogni valore di input e del risultato dell\'operazione AND. I bit mostrati come "1" (evidenziati) sono impostati, mentre i bit "0" sono azzerati. Questa rappresentazione visiva ti aiuta a capire esattamente quali posizioni di bit sono state influenzate dall\'operazione AND.'
        }
      ]
    },
    tutorial: {
      title: 'Guida passo-passo all\'uso del calcolatore AND esadecimale',
      steps: [
        {
          title: 'Inserisci il primo valore esadecimale',
          description: 'Inserisci un numero esadecimale nel primo campo di input. Non è necessario includere il prefisso "0x". Ad esempio, inserisci "FF" per il valore esadecimale FF (decimale 255).'
        },
        {
          title: 'Inserisci il secondo valore esadecimale',
          description: 'Inserisci un altro numero esadecimale nel secondo campo. Ad esempio, inserisci "0F" per il valore esadecimale 0F (decimale 15).'
        },
        {
          title: 'Aggiungi altri valori (opzionale)',
          description: 'Se la tua operazione richiede più di due valori, clicca il pulsante "+ Aggiungi altro numero" per aggiungere ulteriori campi di input. Inserisci valori esadecimali in ogni nuovo campo.'
        },
        {
          title: 'Clicca Calcola',
          description: 'Premi il pulsante "Calcola" per eseguire l\'operazione AND bitwise su tutti i valori inseriti. Il calcolatore elaborerà i valori in sequenza, applicando l\'operazione AND tra ogni valore.'
        },
        {
          title: 'Visualizza i risultati',
          description: 'Esamina i risultati mostrati in diversi formati: esadecimale, decimale e binario. Ad esempio, il risultato di FF & 0F sarà 0F (decimale 15). La sezione di visualizzazione mostra esattamente quali bit sono stati mantenuti nel risultato.'
        },
        {
          title: 'Copia o usa i risultati',
          description: 'Clicca i pulsanti copia accanto a qualsiasi formato del risultato per copiare quel valore negli appunti. Puoi poi incollarlo nel codice, documentazione o usarlo per ulteriori calcoli.'
        }
      ],
      advancedTips: {
        title: 'Suggerimenti avanzati per operazioni AND esadecimali',
        tips: [
          'Usa gli esempi rapidi per testare pattern comuni di mascheramento bit, come 0xFF & 0x0F o 0xA5 & 0x80.',
          'Per operazioni complesse, puoi concatenare più valori esadecimali aggiungendo ulteriori campi di input invece di eseguire calcoli separati.',
          'Presta attenzione alla visualizzazione binaria per capire esattamente quali posizioni di bit sono influenzate dalla tua operazione AND.',
          'Quando lavori con registri di stato o flag, usa i risultati binari per confermare che specifiche posizioni di bit siano correttamente isolate.',
          'Ricorda che l\'operazione AND può solo produrre un bit 1 nelle posizioni dove tutti gli input hanno bit 1; è utile per cancellare bit ma non per impostarli.',
          'Puoi usare la rappresentazione esadecimale per una notazione più compatta, mentre la visualizzazione binaria aiuta a comprendere le operazioni a livello di bit.'
        ]
      }
    }
  },
  
  // Etichette pulsanti
  remove: 'Rimuovi',
  removeButton: 'Rimuovi questo input',
  importTitle: 'Importa da file',
  saveTitle: 'Salva su file',
  copyTitle: 'Copia tutti gli input',
  pasteTitle: 'Incolla dagli appunti',
  saveResult: 'Salva risultato',
  saveResultTitle: 'Salva risultato su file',
  copyResult: 'Copia risultato',
  copyResultTitle: 'Copia tutti i risultati',
  copyAction: 'Copia',
  
  // Suggerimenti e messaggi
  importError: 'Errore importazione file, assicurati che il formato sia corretto',
  inputsCopied: 'Tutti gli input copiati negli appunti',
  resultsCopied: 'Tutti i risultati copiati negli appunti',
  inputs: 'Input'
}