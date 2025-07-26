export default {
  name: 'Calculateur d\'opération ET hexadécimal',
  description: 'Effectue des opérations ET au niveau des bits sur des nombres hexadécimaux et affiche le résultat dans plusieurs formats.',

  // Étiquettes d'entrée
  firstNumber: 'Premier nombre hexadécimal',

  secondNumber: 'Deuxième nombre hexadécimal',
  enterHex: 'Entrez une valeur hexadécimale (sans préfixe 0x)',
  invalidHex: 'Valeur hexadécimale invalide',

  // Actions
  calculate: 'Calculer',

  import: 'Importer',
  save:'Enregistrer',
  copy:'Copier',
  paste:'Coller',

  // Résultats
  result: 'Résultat',

  decimal: 'Décimal',
  binary: 'Binaire',
  copied: 'Copié !',
  noResult: 'Entrez des valeurs et cliquez sur Calculer pour voir le résultat',

  // Explications
  explanation: {
    title: 'Fonctionnement de l\'opération ET au niveau des bits',
    content: 'L\'opération ET au niveau des bits compare chaque bit du premier opérande avec le bit correspondant du deuxième opérande. Si les deux bits sont à 1, le bit résultant est défini à 1. Sinon, le bit résultant est défini à 0.',
    example: 'Exemple détaillé'
  },

  // Exemples
  examples: {
    title: 'Exemples',
    example1: {
      description: 'Opération ET de base',
      value1: 'FF',
      value2: '0F',
      result: '0F'
    },
    example2: {
      description: 'Application de masque',
      value1: 'ABCD',
      value2: 'FF00',
      result: 'AB00'
    },
    commonMask: 'Masques courants : 0xFF & 0x0F',
    permissionCheck: 'Vérification de permissions : 0xA5 & 0x80',
    bitClearing: 'Effacement de bits : 0xFFFF & 0xFF00',
    evenCheck: 'Vérification de parité : 0x42 & 0x01'
  },

  // Documentation
  documentation: {
    title: 'Calculateur d\'opération ET hexadécimal : Guide complet',
    introduction: 'Le calculateur d\'opération ET hexadécimal est un outil pour effectuer des opérations ET au niveau des bits sur des nombres hexadécimaux, couramment utilisé en programmation et conception électronique numérique.',
    
    whatIs: {
      title: 'Qu\'est-ce qu\'une opération ET au niveau des bits ?',
      paragraph1: 'L\'opération ET au niveau des bits est une opération binaire qui prend deux motifs de bits de même longueur et effectue une opération logique ET sur chaque paire de bits correspondants. Si les deux bits sont à 1, le bit résultant est à 1, sinon il est à 0.',
      paragraph2: 'Cette opération est fondamentale dans divers scénarios de calcul, y compris les opérations de masquage, manipulation de bits et vérification d\'état de bits spécifiques.'
    },
    
    useCases: {
      title: 'Cas d\'utilisation courants de l\'opération ET hexadécimale',
      masks: {
        title: 'Masquage de bits',
        description: 'Utiliser l\'opération ET pour extraire ou isoler des bits spécifiques dans une valeur en masquant les bits indésirables.'
      },
      permissions: {
        title: 'Vérification de permissions',
        description: 'Déterminer si des bits de permission spécifiques sont définis dans un champ de bits de permissions.'
      },
      flagsCheck: {
        title: 'Vérification d\'état de drapeaux',
        description: 'Vérifier si des drapeaux spécifiques sont définis dans un registre d\'état ou une variable de drapeaux.'
      },
      evenOdd: {
        title: 'Test de parité',
        description: 'Utiliser l\'opération ET avec 1 pour tester si un nombre est pair ou impair.'
      },
      bitClearing: {
        title: 'Effacement de bits',
        description: 'Effacer des bits spécifiques tout en conservant les autres bits inchangés en utilisant un masque ET.'
      }
    },
    
    howToUse: {
      title: 'Comment utiliser le calculateur d\'opération ET hexadécimal',
      step1: 'Entrez le premier nombre hexadécimal (sans préfixe "0x")',
      step2: 'Entrez le deuxième nombre hexadécimal (sans préfixe "0x")',
      step3: 'Cliquez sur le bouton "Calculer"',
      step4: 'Consultez le résultat aux formats hexadécimal, décimal et binaire',
      step5: 'Utilisez le bouton copier pour copier n\'importe quel format de résultat dans le presse-papiers'
    },
    
    tips: {
      title: 'Conseils pour utiliser l\'opération ET hexadécimale',
      tip1: 'Les zéros non significatifs dans l\'entrée sont ignorés lors du calcul, mais le résultat est complété en fonction de l\'entrée la plus longue',
      tip2: 'Pour les opérations de masquage, utilisez FF (ou une séquence de F) aux positions que vous souhaitez conserver et 00 aux positions que vous souhaitez effacer',
      tip3: 'Pour vérifier si un bit spécifique est défini, effectuez une opération ET avec une valeur où seul ce bit est défini (par exemple, 0x08 pour vérifier le 4ème bit)',
      tip4: 'N\'oubliez pas que chaque chiffre hexadécimal représente 4 bits (un nibble)',
      tip5: 'Lorsque vous travaillez avec des permissions ou des drapeaux, gardez une référence de ce que représente chaque bit'
    }
  },

  quickExamples: 'Exemples rapides',
  operation: 'Opération',

  operations: {
    and: 'ET(AND)',
    or: 'OU(OR)',
    xor: 'OU exclusif(XOR)',
    not: 'NON(NOT)',
    shiftLeft: 'Décalage à gauche(<<)',
    shiftRight: 'Décalage à droite(>>)'
  },

  input: 'Valeur d\'entrée',
  chainWith: 'Chaînage de calculs',
  importFromFile: 'Importer depuis un fichier',
  noResult: 'Entrez des valeurs et cliquez sur Calculer pour voir le résultat',
  bitVisualization: 'Visualisation',
  inputNumbers: 'Entrez des nombres hexadécimaux',
  addNumber: 'Ajouter un autre nombre',
  number: 'Nombre',

  // Étiquettes de boutons
  remove: 'Supprimer',

  removeButton: 'Supprimer cette entrée',
  importTitle: 'Importer depuis un fichier',
  saveTitle: 'Enregistrer dans un fichier',
  copyTitle: 'Copier toutes les entrées',
  pasteTitle: 'Coller depuis le presse-papiers',
  saveResult: 'Enregistrer le résultat',
  saveResultTitle: 'Enregistrer le résultat dans un fichier',
  copyResult: 'Copier le résultat',
  copyResultTitle: 'Copier tous les résultats',
  copyAction: 'Copier',

  // Messages et alertes
  importError: 'Erreur lors de l\'importation du fichier, assurez-vous que le format est correct',

  inputsCopied: 'Toutes les entrées ont été copiées dans le presse-papiers',
  resultsCopied: 'Tous les résultats ont été copiés dans le presse-papiers',
  inputs: 'Entrées'
};