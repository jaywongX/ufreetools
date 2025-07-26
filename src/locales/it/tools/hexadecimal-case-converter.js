export default {
  name: 'Convertitore Maiuscole/Minuscole Esadecimale',
  description: 'Converte e formatta stringhe esadecimali tra maiuscolo e minuscolo, con supporto per prefissi, separatori e opzioni di raggruppamento',

  input: {
    title: 'Input esadecimale',
    placeholder: 'Inserisci valore esadecimale...'
  },

  output: {
    title: 'Risultato conversione',
    placeholder: 'Il risultato della conversione apparirà qui...'
  },

  prefix: {
    title: 'Prefisso',
    none: 'Nessuno',
  },

  format: {
    title: 'Formato maiuscole/minuscole',
    uppercase: 'Maiuscolo',
    lowercase: 'Minuscolo'
  },

  separator: {
    title: 'Separatore',
    none: 'Nessuno',
    space: 'Spazio',
    comma: 'Virgola',
    colon: 'Due punti',
    semicolon: 'Punto e virgola'
  },

  grouping: {
    title: 'Raggruppamento (byte)',
    none: 'Nessuno'
  },

  actions: {
    copy: 'Copia',
    clear: 'Pulisci',
    convert: 'Converti'
  },

  messages: {
    copied: 'Copiato negli appunti',
    copyFailed: 'Copia fallita',
    invalidHex: 'Valore esadecimale non valido'
  },

  examples: {
    title: 'Esempi',
    example1: {
      title: '"Hello World" in esadecimale',
    },
    example2: {
      title: 'ASCII Hello con prefisso 0x',
    },
    example3: {
      title: 'DEADBEEF (valore comune per debug)',
    },
    example4: {
      title: 'Formato indirizzo MAC',
    }
  },

  tips: {
    title: 'Suggerimenti',
    tip1: 'I valori esadecimali usano caratteri 0-9 e A-F (o a-f)',
    tip2: 'Prefissi diversi sono usati in contesti diversi: 0x in programmazione, # per i colori, ecc.',
    tip3: 'Usare raggruppamenti e separatori migliora la leggibilità di lunghe stringhe esadecimali',
    tip4: 'Gli indirizzi MAC usano tipicamente separatori a due punti e raggruppamenti da 1 byte'
  }
};