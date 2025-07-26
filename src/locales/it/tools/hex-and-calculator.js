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
};