export default {
    name: 'Convertisseur numérique',
    description: 'Convertir des nombres entre différentes bases et formats',
    input: {
      title: 'Nombre à convertir',
      placeholder: 'Entrez le nombre à convertir',
      fromBase: 'Base d\'origine',
      toBase: 'Base cible',
      customBase: 'Base personnalisée'
    },
    bases: {
      binary: 'Binaire (base 2)',
      octal: 'Octal (base 8)',
      decimal: 'Décimal (base 10)',
      hexadecimal: 'Hexadécimal (base 16)',
      base32: 'Base 32',
      base36: 'Base 36',
      base58: 'Base 58',
      base64: 'Base 64',
      custom: 'Base personnalisée'
    },
    options: {
      signed: 'Signé',
      bitLength: 'Longueur en bits',
      byteOrder: 'Ordre des octets',
      formatOutput: 'Formater la sortie',
      separator: 'Séparateur',
      prefix: 'Ajouter préfixe',
      uppercase: 'Majuscules'
    },
    byteOrders: {
      littleEndian: 'Petit-boutiste',
      bigEndian: 'Gros-boutiste'
    },
    bitLengths: {
      '8': '8 bits',
      '16': '16 bits',
      '32': '32 bits',
      '64': '64 bits',
      custom: 'Personnalisée'
    },
    output: {
      title: 'Résultats de conversion',
      binary: 'Binaire',
      octal: 'Octal',
      decimal: 'Décimal',
      hexadecimal: 'Hexadécimal',
      custom: 'Base personnalisée',
      all: 'Toutes les conversions'
    },
    actions: {
      convert: 'Convertir',
      clear: 'Effacer',
      copy: 'Copier résultat',
      swap: 'Échanger les bases'
    },
    bitConverters: {
      title: 'Convertisseurs binaires',
      ieee754: 'Virgule flottante IEEE 754',
      twosComplement: 'Complément à deux',
      bitMask: 'Masque binaire',
      bitField: 'Extracteur de champ de bits'
    },
    calculators: {
      title: 'Calculs',
      add: 'Addition',
      subtract: 'Soustraction',
      multiply: 'Multiplication',
      divide: 'Division',
      modulo: 'Modulo',
      power: 'Puissance'
    },
    messages: {
      invalidInput: 'Nombre invalide pour la base sélectionnée',
      outOfRange: 'Nombre hors plage pour la longueur de bits sélectionnée',
      copied: 'Résultat copié dans le presse-papiers',
      conversionComplete: 'Conversion terminée'
    },
    article: {
      title: "Convertisseur numérique : Conversion entre binaire, décimal, hexadécimal et autres systèmes numériques",
      overview: {
        title: "Qu'est-ce qu'un convertisseur numérique ?",
        content: "Le <strong>convertisseur numérique</strong> est un outil spécialisé pour convertir des valeurs entre différents systèmes numériques, incluant le binaire (base 2), l'octal (base 8), le décimal (base 10), l'hexadécimal (base 16) et d'autres bases personnalisées. Il permet une conversion fluide entre ces systèmes tout en préservant la valeur mathématique exacte.<br><br>Notre convertisseur numérique est un outil complet de conversion de valeurs capable de gérer divers formats numériques rencontrés en informatique, programmation, mathématiques et systèmes numériques. Il prend en charge des conversions précises adaptées aux bases numériques standard et spécialisées couramment utilisées dans différents contextes techniques.<br><br>Que vous travailliez dans le développement logiciel, l'électronique numérique, les devoirs d'informatique ou l'analyse de données, notre convertisseur numérique élimine les erreurs de conversion manuelle et simplifie les tâches impliquant différentes représentations numériques."
      },
      useCases: {
        title: "Cas d'utilisation pratiques des conversions numériques",
        items: [
          {
            title: "Développement logiciel",
            description: "Convertir entre codes couleur hexadécimaux et valeurs RGB décimales, manipuler des données binaires pour des opérations bit à bit, convertir des adresses mémoire entre formats hexadécimaux et décimaux, ou valider les représentations binaires des types de données de base."
          },
          {
            title: "Électronique numérique et architecture informatique",
            description: "Traiter les représentations binaires, hexadécimales et décimales des signaux numériques, convertir des formats d'adresse dans les systèmes mémoire, convertir des instructions machine entre hexadécimal et binaire, ou concevoir et déboguer des circuits numériques utilisant différents systèmes numériques."
          },
          {
            title: "Enseignement de l'informatique",
            description: "Valider des exercices de conversion manuelle de bases, comprendre les représentations numériques, explorer comment les ordinateurs représentent et traitent les données en interne, ou compléter des devoirs de programmation nécessitant différentes représentations numériques."
          },
          {
            title: "Cryptographie et sécurité",
            description: "Convertir entre représentations hexadécimales et binaires des clés de chiffrement, analyser des motifs de données binaires dans les protocoles de sécurité, convertir des valeurs de hachage entre différentes représentations, ou valider des sommes de contrôle et signatures cryptographiques à travers différents formats."
          },
          {
            title: "Administration réseau",
            description: "Convertir des adresses IP entre formats décimal, binaire et hexadécimal, traiter des adresses MAC et masques de sous-réseau binaires, dépanner des paquets réseau représentés dans différentes bases numériques, ou configurer des schémas d'adressage de sous-réseaux."
          },
          {
            title: "Science des données et analyse",
            description: "Convertir des données encodées entre différentes bases numériques, préparer des données binaires ou hexadécimales pour des algorithmes de traitement, convertir des valeurs de hachage pour valider l'intégrité des données, ou analyser des motifs au niveau des bits dans de grands ensembles de données."
          },
          {
            title: "Développement web",
            description: "Convertir entre codes couleur décimaux et hexadécimaux dans les styles CSS, encoder et décoder des paramètres d'URL dans différentes bases, optimiser le transfert de données binaires par conversion entre formats, ou dépanner des problèmes de données encodées dans les applications web."
          },
          {
            title: "IoT et systèmes embarqués",
            description: "Déboguer des micrologiciels utilisant différentes représentations numériques, analyser des données de capteurs encodées dans divers formats, convertir des valeurs de registre dans les microcontrôleurs, ou optimiser l'utilisation mémoire avec des conversions numériques spécifiques."
          }
        ]
      },
      guide: {
        title: "Comment utiliser l'outil de conversion numérique",
        intro: "Utiliser notre outil intuitif pour convertir des nombres entre différents systèmes numériques est très simple. Suivez ces étapes pour convertir avec précision des valeurs entre binaire, décimal, hexadécimal et autres bases :",
        steps: [
          {
            title: "Saisissez votre nombre",
            description: "Entrez le nombre à convertir dans le champ de saisie. L'outil accepte les entiers et vous pouvez inclure des préfixes standard comme '0b' pour le binaire, '0o' pour l'octal ou '0x' pour l'hexadécimal si nécessaire, bien que ces préfixes ne soient pas obligatoires pour le traitement."
          },
          {
            title: "Sélectionnez la base d'origine",
            description: "Choisissez la base numérique de votre nombre dans le menu déroulant. Les options incluent binaire (base 2), octal (base 8), décimal (base 10), hexadécimal (base 16) et d'autres bases spécialisées. L'outil validera votre saisie selon la base sélectionnée, garantissant que seuls les chiffres valides pour ce système numérique sont utilisés."
          },
          {
            title: "Sélectionnez les options d'affichage",
            description: "Choisissez les formats de sortie à afficher en cochant les cases correspondantes. Vous pouvez visualiser votre nombre simultanément dans plusieurs bases, incluant binaire, octal, décimal, hexadécimal, base 32 et base 36. Cette flexibilité vous permet de comparer côte à côte différentes représentations."
          },
          {
            title: "Configurez les préférences de formatage",
            description: "Personnalisez l'affichage des résultats avec les options de formatage. Vous pouvez ajouter des préfixes standards (comme '0x' pour l'hexadécimal), inclure des séparateurs numériques pour améliorer la lisibilité, ou afficher les lettres hexadécimales en majuscules. Ces options vous aident à adapter la sortie à vos besoins spécifiques ou aux standards de documentation."
          },
          {
            title: "Cliquez sur Convertir",
            description: "Appuyez sur le bouton \"Convertir\" pour traiter votre nombre. L'outil effectue instantanément les conversions mathématiques entre systèmes numériques, affichant le résultat dans tous les formats de sortie sélectionnés. Pour les grands nombres, les conversions utilisent des algorithmes adaptés à chaque base pour une haute précision."
          },
          {
            title: "Consultez les résultats",
            description: "Examinez les valeurs converties dans les formats choisis. Chaque section de résultat affiche le nombre dans sa base respective, correctement formaté selon vos préférences. Pour les sorties binaires, vous verrez également la longueur en bits, utile pour la programmation et les travaux sur les systèmes numériques."
          },
          {
            title: "Copiez les résultats si nécessaire",
            description: "Utilisez le bouton \"Copier\" à côté de n'importe quel résultat pour copier cette conversion spécifique dans le presse-papiers, pour vos projets, documents ou analyses ultérieures. Vous pouvez également utiliser le bouton \"Copier tous les résultats\" pour capturer d'un coup tous les conversions affichées dans un bloc de texte bien formaté."
          }
        ]
      },
      numberSystems: {
        title: "Comprendre les systèmes numériques",
        intro: "Les différents systèmes numériques utilisent différentes bases, qui déterminent les chiffres disponibles et comment fonctionnent les valeurs de position. Voici un aperçu des systèmes courants pris en charge par notre convertisseur :",
        items: [
          {
            name: "Binaire (base 2)",
            description: "N'utilise que les chiffres 0 et 1, représentant comment les ordinateurs stockent les données au niveau le plus fondamental. Chaque position représente une puissance de 2, ce qui en fait la base de l'électronique numérique, de l'architecture informatique et de la programmation bas niveau. Le binaire est utilisé pour les opérations bit à bit, la logique numérique et la compréhension de la mémoire informatique."
          },
          {
            name: "Octal (base 8)",
            description: "Utilise les chiffres de 0 à 7, chaque position représentant une puissance de 8. Historiquement important en informatique, l'octal offre une représentation plus compacte que le binaire tout en maintenant une conversion simple vers le binaire (chaque chiffre octal représente exactement 3 chiffres binaires). Utilisé pour certaines permissions de fichiers Unix, des systèmes hérités et des environnements de programmation spécifiques."
          },
          {
            name: "Décimal (base 10)",
            description: "Notre système de comptage standard, utilisant les chiffres de 0 à 9, chaque position représentant une puissance de 10. C'est le système le plus intuitif pour les humains, utilisé pour les calculs quotidiens, les valeurs littérales dans la plupart des langages de programmation, et comme représentation par défaut dans la plupart des interfaces utilisateur."
          },
          {
            name: "Hexadécimal (base 16)",
            description: "Utilise les chiffres 0-9 et les lettres A-F (représentant les valeurs 10-15), chaque position représentant une puissance de 16. L'hexadécimal offre une représentation compacte tout en maintenant une conversion simple vers le binaire (chaque chiffre hexadécimal représente exactement 4 chiffres binaires). Largement utilisé pour les adresses mémoire, les codes couleur et la représentation des octets en programmation."
          },
          {
            name: "Base 32",
            description: "Utilise les chiffres 0-9 et les lettres A-V, offrant un encodage efficace des données binaires tout en restant lisible par les humains. Souvent utilisée dans les applications cryptographiques, les clés produit et les scénarios préférant une représentation alphanumérique plutôt que purement binaire. Chaque chiffre en base 32 représente 5 bits d'information."
          },
          {
            name: "Base 36",
            description: "Utilise les chiffres 0-9 et les lettres A-Z, exploitant l'ensemble complet des caractères alphanumériques. Cela fournit la représentation la plus compacte utilisant des caractères de clavier standards. Utilisé pour créer des identifiants courts et lisibles, des raccourcisseurs d'URL et dans les cas nécessitant une densité d'information maximale avec des caractères lisibles."
          },
          {
            name: "Base 64",
            description: "Bien que ce ne soit pas une base numérique traditionnelle, l'encodage Base-64 convertit des données binaires en format texte utilisant 64 caractères ASCII imprimables. Souvent utilisé pour transférer des données binaires via des protocoles basés sur du texte, encoder des pièces jointes d'e-mail, intégrer des images en HTML/CSS et d'autres scénarios nécessitant un encodage binaire vers texte."
          }
        ]
      },
      faq: {
        title: "Questions fréquentes sur les conversions numériques",
        items: [
          {
            question: "Pourquoi ai-je besoin de convertir entre différents systèmes numériques ?",
            answer: "La conversion entre systèmes numériques est cruciale dans divers domaines techniques. En programmation, vous devez souvent travailler avec des adresses mémoire et codes couleur en hexadécimal, effectuer des opérations bit à bit en binaire, et produire des sorties lisibles en décimal. Les administrateurs réseau convertissent fréquemment entre adresses IP décimales et masques de sous-réseau binaires. Les ingénieurs en électronique numérique travaillent avec des représentations binaires et hexadécimales des signaux et contenus mémoire. Ces conversions comblent le fossé entre les formats lisibles par l'homme et les représentations efficaces pour les ordinateurs, rendant les tâches techniques complexes plus gérables."
          },
          {
            question: "Quelle est la précision des conversions effectuées par cet outil ?",
            answer: "Ce convertisseur numérique utilise des algorithmes de haute précision et des fonctions mathématiques natives, garantissant des conversions 100% précises entre tous les systèmes numériques. Il gère les grands entiers via une implémentation BigInt avec une précision parfaite, évitant les erreurs d'approximation en virgule flottante. L'outil effectue des conversions mathématiques directes entre bases plutôt que des manipulations de chaînes intermédiaires, assurant que les valeurs restent identiques dans toutes les représentations. Cette préservation mathématique garantit que la conversion d'un nombre vers une autre base et son retour donne toujours la valeur originale."
          },
          {
            question: "Quelles sont les différences entre les bases numériques et quand devrais-je utiliser chacune ?",
            answer: "Différentes bases numériques offrent des avantages spécifiques dans différents contextes. Le binaire (base 2) représente directement les états de l'électronique numérique et est essentiel pour les opérations bit à bit. L'hexadécimal (base 16) fournit un format compact et lisible pour les données binaires, idéal pour les adresses mémoire et la représentation des octets. Le décimal (base 10) est intuitif pour les calculs humains et les valeurs générales. L'octal (base 8) a une importance historique et est utilisé dans des opérations Unix spécifiques. Des bases spécialisées comme la base 32 et 36 offrent des représentations alphanumériques compactes pour les identifiants et données encodées. Votre choix dépend de l'application spécifique, des exigences de lisibilité et de la compatibilité avec les systèmes existants."
          },
          {
            question: "Comment interpréter les préfixes comme '0b', '0o' et '0x' dans la notation numérique ?",
            answer: "Ces préfixes sont des notations standard indiquant la base d'un nombre. '0b' indique un nombre binaire (base 2), donc 0b1010 représente le nombre binaire 1010. '0o' indique un nombre octal (base 8), donc 0o17 représente le nombre octal 17. '0x' indique un nombre hexadécimal (base 16), donc 0xA4 représente le nombre hexadécimal A4. Ces préfixes sont largement utilisés dans les langages de programmation et la documentation technique pour spécifier clairement le système numérique utilisé, évitant toute ambiguïté. Notre convertisseur prend en charge ces préfixes en entrée et peut optionnellement les inclure en sortie pour plus de clarté et de compatibilité avec les environnements de programmation."
          },
          {
            question: "Cet outil peut-il gérer les nombres négatifs ou les valeurs décimales ?",
            answer: "Le convertisseur numérique se concentre principalement sur la conversion d'entiers (nombres entiers) entre différentes bases. Pour les entiers négatifs, l'outil prend en charge la notation standard avec un signe moins. Concernant les valeurs décimales, bien que les principes mathématiques de conversion entre bases pour les parties fractionnaires soient bien définis, l'outil est optimisé pour les opérations sur entiers couramment utilisées en programmation et systèmes numériques. Pour les applications professionnelles nécessitant des conversions de nombres à virgule (comme la représentation binaire des flottants), d'autres outils avec support IEEE-754 sont plus adaptés pour gérer les complexités de la précision décimale entre différents systèmes numériques."
          },
          {
            question: "Pourquoi les programmeurs utilisent-ils généralement l'hexadécimal plutôt que le binaire lorsqu'ils travaillent avec des ordinateurs ?",
            answer: "Bien que les ordinateurs fonctionnent fondamentalement en binaire, les programmeurs préfèrent l'hexadécimal pour plusieurs raisons pratiques. L'hexadécimal offre une représentation plus compacte - chaque chiffre hexadécimal représente exactement 4 chiffres binaires (bits), transformant des séquences binaires longues comme 1101101010111100 en D6BC, beaucoup plus gérable. Cette compression rend les adresses mémoire, codes couleur et valeurs d'octets significativement plus lisibles tout en maintenant un mappage direct et prévisible vers le binaire. De plus, avec la pratique, reconnaître des motifs de bits devient plus facile en hexadécimal, permettant aux programmeurs d'identifier rapidement les limites d'octets et groupes de bits, rendant le débogage, l'inspection mémoire et la programmation bas niveau plus efficaces."
          },
          {
            question: "Comment les très grands nombres sont-ils gérés pendant la conversion ?",
            answer: "Notre convertisseur numérique utilise la technologie BigInt pour traiter des entiers de taille arbitraire avec une précision parfaite dans toutes les bases numériques. Cette implémentation évite les limitations des types numériques standards de JavaScript qui pourraient perdre en précision avec des valeurs très grandes. Les algorithmes de conversion effectuent des transformations mathématiques directes entre bases, garantissant que les représentations restent exactes quelle que soit la taille du nombre. Pour les très grands nombres produisant des sorties longues (particulièrement en binaire nécessitant le plus de chiffres), l'outil gère efficacement la mémoire tout en maintenant une exactitude complète dans toutes les représentations. Des optimisations de performance assurent que même les conversions de grandes valeurs sont rapides, tout en préservant la valeur mathématique exacte dans toutes les représentations."
          }
        ]
      },
      bestPractices: {
        title: "Bonnes pratiques pour utiliser les systèmes numériques",
        intro: "Appliquez ces lignes directrices professionnelles lorsque vous utilisez différentes bases numériques dans vos projets :",
        items: [
          "Incluez toujours les préfixes appropriés (0b, 0o, 0x) avec les nombres non décimaux dans le code ou la documentation pour éviter toute ambiguïté",
          "Utilisez des lettres majuscules pour les valeurs hexadécimales dans la documentation formelle (0xA1B2 au lieu de 0xa1b2) pour améliorer la lisibilité",
          "Ajoutez des séparateurs numériques (espaces, underscores ou virgules) aux longs nombres pour améliorer la lisibilité et prévenir les erreurs de transcription",
          "Validez les conversions critiques avec plusieurs outils pour les systèmes critiques ou applications financières",
          "Documentez explicitement les bases numériques dans les commentaires et spécifications lorsque les valeurs font partie d'une API ou interface",
          "Choisissez la base la plus appropriée pour chaque contexte - hexadécimal pour les adresses mémoire et octets, décimal pour les valeurs destinées aux humains",
          "N'oubliez pas que les zéros en tête ne changent pas la valeur d'un nombre mais peuvent parfois indiquer une représentation à largeur fixe",
          "Prenez en compte l'alignement des bits et limites d'octets lors de la conversion de nombres pour la programmation bas niveau et les interfaces matérielles",
          "Comprenez la représentation en complément à deux lorsque vous traitez des nombres binaires signés dans des contextes informatiques",
          "Testez les conditions limites (valeurs maximales, changements de signe) lors de l'implémentation d'algorithmes impliquant des conversions de bases numériques",
          "Utilisez une notation cohérente dans les projets pour éviter toute confusion entre membres d'équipe et dans la documentation",
          "Rappelez-vous que des outils de conversion en ligne comme celui-ci peuvent gagner du temps et prévenir les erreurs de conversion manuelle"
        ]
      }
    }
  }