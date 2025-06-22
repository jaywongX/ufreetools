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
    article: {
      title: 'Calculateur d\'opération ET hexadécimal : Guide complet',
      introduction: {
        title: 'Comprendre l\'opération ET hexadécimale',
        content: [
          'Le calculateur d\'opération ET hexadécimal est un outil spécialement conçu pour effectuer des opérations ET au niveau des bits sur des nombres hexadécimaux. Cette opération compare chaque position de bit entre deux ou plusieurs valeurs hexadécimales et produit un résultat où un bit n\'est à 1 que si tous les bits correspondants des opérandes sont à 1.',
          'L\'opération ET au niveau des bits est fondamentale en informatique, particulièrement lors de la manipulation de données binaires, d\'interfaces matérielles, de drapeaux de permissions et d\'autres tâches de programmation bas niveau. La représentation hexadécimale rend ces opérations plus lisibles et plus faciles à gérer pour les développeurs et ingénieurs matériel.',
          'Notre calculateur d\'opération ET hexadécimal prend en charge plusieurs valeurs d\'entrée, offrant un moyen pratique d\'effectuer des opérations ET sur plusieurs nombres hexadécimaux simultanément. Les résultats sont affichés aux formats hexadécimal, décimal et binaire, avec une représentation visuelle bit à bit pour aider à comprendre comment l\'opération affecte chaque position de bit.'
        ]
      },
      useCases: {
        title: 'Cas d\'utilisation courants de l\'opération ET hexadécimale',
        cases: [
          {
            title: 'Vérification de permissions',
            description: 'Les développeurs utilisent l\'opération ET pour vérifier si des bits de permission spécifiques sont définis dans les systèmes de contrôle d\'accès. Par exemple, effectuer une opération ET entre la valeur de permission d\'un utilisateur (0xA5) et un masque de permission (0x80) permet de déterminer si une permission spécifique est accordée.'
          },
          {
            title: 'Manipulation de registres matériels',
            description: 'Les ingénieurs travaillant avec du matériel utilisent fréquemment l\'opération ET pour effacer des bits spécifiques dans des registres de contrôle tout en conservant les autres bits inchangés. En effectuant une opération ET avec un masque (par exemple, 0xFFFF & 0xFF00), on peut effacer sélectivement des bits spécifiques.'
          },
          {
            title: 'Masquage de bits dans les protocoles réseau',
            description: 'Les protocoles réseau utilisent souvent l\'opération ET pour extraire des champs spécifiques des en-têtes de paquets. Par exemple, effectuer une opération ET entre une adresse IP et un masque de sous-réseau permet d\'isoler la partie réseau de l\'adresse.'
          },
          {
            title: 'Extraction de canaux de couleur',
            description: 'Les programmeurs graphiques utilisent l\'opération ET pour isoler des canaux de couleur spécifiques à partir de valeurs de couleur hexadécimales. Par exemple, 0x00FF00 & 0xFFFFFF permet d\'extraire le canal vert d\'une couleur RGB.'
          },
          {
            title: 'Test de drapeaux en programmation système',
            description: 'Les programmeurs système utilisent l\'opération ET pour tester des drapeaux spécifiques dans des registres d\'état. Ceci est crucial pour déterminer l\'état matériel ou les paramètres de configuration.'
          }
        ]
      },
      faq: {
        title: 'Questions fréquentes sur l\'opération ET hexadécimale',
        questions: [
          {
            question: 'Qu\'est-ce qu\'une opération ET au niveau des bits ?',
            answer: 'L\'opération ET au niveau des bits compare chaque position de bit entre deux nombres binaires et produit un nouveau nombre binaire où chaque bit est à 1 uniquement si les bits correspondants des deux opérandes sont à 1, sinon le bit résultant est à 0. Lorsqu\'on travaille avec des nombres hexadécimaux, chaque chiffre hexadécimal représente 4 bits binaires, ce qui permet une représentation plus compacte.'
          },
          {
            question: 'Pourquoi utiliser l\'hexadécimal plutôt que le binaire pour les opérations bit à bit ?',
            answer: 'La notation hexadécimale est plus compacte que la notation binaire (un chiffre hexadécimal représente 4 bits binaires) tout en conservant une relation claire avec le binaire. Cela rend les valeurs hexadécimales plus faciles à lire, écrire et communiquer, particulièrement pour les grands nombres couramment utilisés en calcul et programmation.'
          },
          {
            question: 'Le calculateur peut-il traiter plus de deux entrées ?',
            answer: 'Oui, notre calculateur prend en charge plusieurs entrées. Lorsqu\'on fournit plus de deux valeurs, l\'opération ET est appliquée séquentiellement à toutes les valeurs suivantes à partir de la première. Ceci est utile pour les opérations de masquage complexes nécessitant plusieurs conditions.'
          },
          {
            question: 'Quelle est la différence entre ET logique et ET au niveau des bits ?',
            answer: 'L\'opérateur ET logique (&&) évalue des expressions comme vraies ou fausses, traitant les opérandes comme des valeurs booléennes uniques. L\'opérateur ET au niveau des bits (&) agit sur chaque position de bit individuelle, comparant les bits correspondants entre les opérandes. Notre calculateur effectue des opérations ET au niveau des bits.'
          },
          {
            question: 'Y a-t-il une limite de taille pour les nombres hexadécimaux utilisables ?',
            answer: 'Le calculateur supporte la précision standard des nombres JavaScript, permettant généralement des entiers jusqu\'à 53 bits de précision. Ceci est suffisant pour la plupart des applications pratiques impliquant des opérations sur des registres ou des drapeaux.'
          },
          {
            question: 'Comment interpréter la visualisation binaire des résultats ?',
            answer: 'La visualisation binaire montre la décomposition bit à bit de chaque valeur d\'entrée et du résultat de l\'opération ET. Les bits affichés comme "1" (en surbrillance) sont activés, tandis que les bits "0" sont désactivés. Cette représentation visuelle vous aide à comprendre exactement quelles positions de bits sont affectées par l\'opération ET.'
          }
        ]
      },
      tutorial: {
        title: 'Guide étape par étape pour utiliser le calculateur d\'opération ET hexadécimal',
        steps: [
          {
            title: 'Étape 1 : Entrez votre première valeur hexadécimale',
            description: 'Entrez un nombre hexadécimal dans le premier champ de saisie. Vous n\'avez pas besoin d\'inclure le préfixe "0x" car il est déjà fourni. Par exemple, entrez "FF" pour la valeur hexadécimale FF (255 en décimal).'
          },
          {
            title: 'Étape 2 : Entrez votre deuxième valeur hexadécimale',
            description: 'Entrez un autre nombre hexadécimal dans le deuxième champ. Par exemple, entrez "0F" pour la valeur hexadécimale 0F (15 en décimal).'
          },
          {
            title: 'Étape 3 : Ajoutez d\'autres valeurs (optionnel)',
            description: 'Si votre opération nécessite plus de deux valeurs, cliquez sur le bouton "+ Ajouter un autre nombre" pour ajouter des champs de saisie supplémentaires. Entrez une valeur hexadécimale dans chaque nouveau champ.'
          },
          {
            title: 'Étape 4 : Cliquez sur Calculer',
            description: 'Appuyez sur le bouton "Calculer" pour effectuer l\'opération ET au niveau des bits sur toutes les valeurs d\'entrée. Le calculateur traitera ces valeurs dans l\'ordre, en appliquant l\'opération ET entre chaque valeur.'
          },
          {
            title: 'Étape 5 : Consultez le résultat',
            description: 'Consultez le résultat affiché dans plusieurs formats : hexadécimal, décimal et binaire. Par exemple, le résultat de FF & 0F sera 0F (15 en décimal). La section de visualisation montre exactement quels bits sont conservés dans le résultat.'
          },
          {
            title: 'Étape 6 : Copiez ou utilisez votre résultat',
            description: 'Cliquez sur le bouton copier à côté de n\'importe quel format de résultat pour copier cette valeur dans le presse-papiers. Vous pouvez ensuite la coller dans votre code, documentation ou l\'utiliser pour d\'autres calculs.'
          }
        ],
        advancedTips: {
          title: 'Conseils avancés pour l\'opération ET hexadécimale',
          tips: [
            'Utilisez les exemples rapides pour tester des motifs de masquage courants comme 0xFF & 0x0F ou 0xA5 & 0x80.',
            'Pour des opérations complexes, vous pouvez chaîner plusieurs valeurs hexadécimales en ajoutant plus de champs de saisie plutôt que d\'effectuer des calculs séparés.',
            'Faites attention à la visualisation binaire pour comprendre exactement quels bits sont affectés par votre opération ET.',
            'Lorsque vous travaillez avec des registres d\'état ou des drapeaux, utilisez le résultat binaire pour confirmer que des positions de bits spécifiques sont correctement isolées.',
            'N\'oubliez pas que l\'opération ET ne peut produire un bit à 1 que si tous les bits d\'entrée correspondants sont à 1 ; elle est utile pour effacer des bits mais pas pour les définir.',
            'Vous pouvez utiliser la représentation hexadécimale pour une notation plus compacte, tandis que la visualisation binaire aide à comprendre les opérations au niveau des bits.'
          ]
        }
      }
    },
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
  }