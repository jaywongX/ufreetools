export default {
    name: 'Algorithmes de chiffrement symétrique',
    description: 'Implémente le chiffrement et déchiffrement sécurisé de texte et fichiers, supportant plusieurs algorithmes symétriques incluant AES, DES et SM4 (standard chinois)',
    encryption: {
      title: 'Chiffrement/Déchiffrement',
      plaintext: 'Texte clair',
      plaintextPlaceholder: 'Entrez le texte à chiffrer',
      ciphertext: 'Texte chiffré',
      ciphertextPlaceholder: 'Les données chiffrées apparaîtront ici',
      encrypt: 'Chiffrer',
      decrypt: 'Déchiffrer',
      decrypted: 'Texte déchiffré',
      decryptedPlaceholder: 'Les données déchiffrées apparaîtront ici',
      encryptSuccess: 'Chiffrement réussi',
      decryptSuccess: 'Déchiffrement réussi',
      encryptError: 'Échec du chiffrement : {error}',
      decryptError: 'Échec du déchiffrement : {error}'
    },
    algorithm: {
      title: 'Sélectionnez un algorithme',
      aes: 'AES',
      des: 'DES',
      tripledes: '3DES (Triple DES)',
      sm4: 'SM4 (Standard chinois)',
      "3des": '3DES (Triple DES)'
    },
    mode: {
      title: 'Mode opératoire',
      ecb: 'ECB - Mode livre de code électronique',
      cbc: 'CBC - Mode chaînage des blocs',
      cfb: 'CFB - Mode rétroaction du texte chiffré',
      ofb: 'OFB - Mode rétroaction de sortie',
      ctr: 'CTR - Mode compteur'
    },
    padding: {
      title: 'Méthode de remplissage',
      pkcs7: 'PKCS7',
      zeroPadding: 'Remplissage par zéros',
      zeropadding: 'Remplissage par zéros'
    },
    operation: {
      title: 'Type d\'opération',
      encrypt: 'Chiffrement',
      decrypt: 'Déchiffrement'
    },
    key: {
      title: 'Clé',
      label: 'Clé',
      placeholder: 'Entrez une clé de {keySize}',
      placeholderString: 'Entrez une clé chaîne de {keySize} (remplissage automatique si trop courte)',
      placeholderHex: 'Entrez une clé hexadécimale de {keySize} (remplissage automatique si trop courte)',
      placeholderBase64: 'Entrez une clé Base64 de {keySize} (remplissage automatique si trop courte)',
      generateRandom: 'Générer aléatoirement',
      sizeHint: '{keySize}',
      autoFillHint: 'Les clés trop courtes seront complétées par des zéros, les clés trop longues seront tronquées'
    },
    iv: {
      title: 'Vecteur d\'initialisation (IV)',
      label: 'Vecteur d\'initialisation (IV)',
      placeholder: 'Entrez un IV de {blockSize}',
      placeholderString: 'Entrez un IV chaîne de {blockSize} (remplissage automatique si trop court)',
      placeholderHex: 'Entrez un IV hexadécimal de {blockSize} (remplissage automatique si trop court)',
      placeholderBase64: 'Entrez un IV Base64 de {blockSize} (remplissage automatique si trop court)',
      generateRandom: 'Générer aléatoirement',
      sizeHint: '{blockSize}',
      autoFillHint: 'Les IV trop courts seront complétés par des zéros, les IV trop longs seront tronqués'
    },
    input: {
      title: 'Contenu à chiffrer',
      titleDecrypt: 'Contenu à déchiffrer',
      clear: 'Effacer',
      placeholder: 'Entrez le texte à chiffrer',
      placeholderDecrypt: 'Entrez le texte chiffré au format {format} à déchiffrer'
    },
    inputFormat: {
      title: 'Format d\'entrée',
      string: 'Chaîne',
      hex: 'HEX',
      base64: 'Base64'
    },
    output: {
      title: 'Résultat du chiffrement',
      titleDecrypt: 'Résultat du déchiffrement',
      copyResult: 'Copier le résultat',
      copied: 'Copié'
    },
    outputFormat: {
      title: 'Format de sortie',
      string: 'Chaîne',
      hex: 'HEX',
      base64: 'Base64'
    },
    error: {
      title: 'Erreur',
      invalidHex: 'La clé doit être au format HEX',
      invalidIvHex: 'L\'IV doit être au format HEX',
      invalidHexInput: 'Entrée HEX invalide',
      invalidBase64: 'Entrée Base64 invalide',
      unsupportedAlgorithm: 'Algorithme non supporté',
      decryptionFailed: 'Échec du déchiffrement : {message}',
      copyFailed: 'Échec de la copie, veuillez copier manuellement',
      unknownError: 'Une erreur est survenue lors du traitement',
      invalidHexFormat: 'Format HEX invalide',
      invalidBase64Format: 'Format Base64 invalide',
      emptyBase64: 'Encodage Base64 vide',
      decryptFailed: 'Échec du déchiffrement :'
    },
    info: {
      title: 'Description des algorithmes',
      algorithms: {
        aes: 'AES : Standard de chiffrement avancé, peut utiliser des clés de 128, 192 ou 256 bits',
        des: 'DES : Standard de chiffrement de données, utilise une clé de 56 bits, sécurité faible',
        tripledes: '3DES : Triple DES, utilise trois clés DES de 56 bits pour une meilleure sécurité',
        sm4: 'SM4 : Standard chinois, algorithme de chiffrement par bloc utilisant une clé de 128 bits',
        "3des": '3DES : Triple DES, utilise trois clés DES de 56 bits pour une meilleure sécurité'
      },
      modes: {
        title: 'Description des modes opératoires',
        ecb: 'ECB : Mode livre de code électronique, chaque bloc est chiffré indépendamment, non recommandé pour données sensibles',
        cbc: 'CBC : Mode chaînage des blocs, chaque bloc dépend du précédent, plus sécurisé',
        cfb: 'CFB : Mode rétroaction du texte chiffré, transforme un chiffrement par bloc en chiffrement par flux',
        ofb: 'OFB : Mode rétroaction de sortie, autre chiffrement par flux, mêmes opérations pour chiffrement/déchiffrement',
        ctr: 'CTR : Mode compteur, chaque bloc utilise un compteur incrémental, permet un traitement parallèle'
      }
    },
    buttons: {
      process: 'Chiffrer',
      processDecrypt: 'Déchiffrer'
    },
    file: {
      title: 'Chiffrement de fichiers',
      select: 'Sélectionner un fichier',
      drop: 'Ou glisser-déposer un fichier ici',
      encrypt: 'Chiffrer le fichier',
      decrypt: 'Déchiffrer le fichier',
      download: 'Télécharger le résultat',
      selected: 'Sélectionné : {name}',
      size: 'Taille : {size}',
      maxSize: 'Taille maximale : 100 Mo',
      encryptingFile: 'Chiffrement du fichier en cours...',
      decryptingFile: 'Déchiffrement du fichier en cours...',
      downloadReady: 'Prêt à télécharger',
      fileTooBig: 'Fichier trop volumineux. La taille maximale autorisée est de 100 Mo.'
    },
    options: {
      title: 'Options',
      autoDecrypt: 'Déchiffrer automatiquement après chiffrement',
      includeMeta: 'Inclure les métadonnées d\'algorithme dans la sortie',
      kdf: 'Fonction de dérivation de clé',
      pbkdf2: 'PBKDF2',
      scrypt: 'scrypt',
      argon2: 'Argon2id',
      salt: 'Sel (pour dérivation de clé)',
      saltPlaceholder: 'Entrez un sel en hexadécimal ou laissez vide pour génération aléatoire',
      autoClear: 'Effacer automatiquement les données sensibles',
      saveSettings: 'Enregistrer les paramètres'
    },
    security: {
      title: 'Informations de sécurité',
      description: 'À propos de la sécurité du chiffrement',
      warning: 'Avertissement',
      ecbInsecure: 'Le mode ECB n\'est pas recommandé pour les applications sécurisées car il ne masque pas bien les motifs des données.',
      useModern: 'Pour les données sensibles, utilisez AES-256 avec les modes GCM ou CBC.',
      keyWarning: 'Protégez vos clés de chiffrement. Si elles sont perdues, les données seront irrécupérables.',
      browserWarning: 'Le chiffrement basé sur navigateur est pratique mais peut ne pas convenir aux données hautement sensibles.',
      learnMore: 'En savoir plus sur le chiffrement'
    },
    messages: {
      noAlgorithm: 'Veuillez sélectionner un algorithme de chiffrement',
      noKey: 'Veuillez entrer une clé ou un mot de passe',
      invalidKeyLength: 'Longueur de clé invalide pour l\'algorithme sélectionné',
      invalidIv: 'Longueur d\'IV invalide pour l\'algorithme et le mode sélectionnés',
      noData: 'Veuillez entrer des données à chiffrer/déchiffrer',
      padError: 'Erreur de remplissage - la clé ou les données peuvent être incorrectes',
      fileSuccess: 'Traitement du fichier réussi',
      fileError: 'Erreur de traitement du fichier : {error}',
      clipboardError: 'Erreur lors de la copie dans le presse-papiers : {error}',
      invalidFormat: 'Format d\'entrée invalide'
    },
    article: {
      title: "Algorithmes de chiffrement symétrique : Outil complet de sécurité des données",
      features: {
        title: "Fonctionnalités du chiffrement symétrique",
        description: "L'<strong>outil de chiffrement symétrique</strong> est une <strong>solution cryptographique puissante</strong> qui protège les données sensibles via divers algorithmes standard. Contrairement au chiffrement asymétrique utilisant des paires de clés, le chiffrement symétrique utilise une seule <strong>clé</strong> pour les processus de chiffrement et déchiffrement. Notre outil supporte plusieurs algorithmes incluant <strong>AES (Standard de Chiffrement Avancé)</strong>, <strong>DES (Standard de Chiffrement de Données)</strong>, <strong>3DES (Triple DES)</strong> et <strong>SM4 (Standard chinois)</strong>.<br><br>Les fonctionnalités principales incluent le chiffrement de texte et fichiers, avec des options configurables comme les <strong>modes de chiffrement</strong> (CBC, ECB, CFB, OFB, CTR), les <strong>méthodes de remplissage</strong> et des formats d'entrée/sortie flexibles. Cet <strong>outil de chiffrement de données</strong> offre une interface conviviale permettant d'implémenter des mesures de sécurité robustes sans connaissances cryptographiques approfondies, rendant le chiffrement avancé accessible à tous tout en maintenant des standards de sécurité élevés.",
        useCases: {
          title: "Cas d'utilisation concrets du chiffrement symétrique",
          items: [
            "<strong>Partage sécurisé de fichiers</strong> : Chiffrez des documents sensibles, feuilles de calcul ou fichiers multimédias avant partage via des canaux potentiellement non sécurisés. Les destinataires possédant la bonne clé peuvent facilement déchiffrer et accéder au contenu original, garantissant la confidentialité pendant le transfert.",
            "<strong>Stockage et gestion de mots de passe</strong> : Créez un stockage chiffré pour vos mots de passe et identifiants. En chiffrant ces informations sensibles avec un mot de passe principal, vous pouvez maintenir une collection sécurisée de données de connexion tout en ne mémorisant qu'un seul mot de passe fort.",
            "<strong>Authentification API</strong> : Générez et validez des jetons chiffrés pour les systèmes d'authentification API. Le chiffrement symétrique offre un bon équilibre entre sécurité et performance, idéal pour gérer les jetons d'authentification dans les applications web et services.",
            "<strong>Chiffrement de champs de base de données</strong> : Protégez des champs sensibles spécifiques dans les bases de données sans restructurer l'ensemble du système. Les <strong>algorithmes symétriques</strong> permettent de chiffrer sélectivement des informations critiques comme les identifiants personnels, données financières ou informations privées utilisateurs.",
            "<strong>Sécurité des configurations</strong> : Chiffrez les fichiers de configuration contenant des identifiants sensibles comme les mots de passe de base de données, clés API et jetons de service. Cela empêche l'exposition accidentelle d'informations d'accès critiques même si les configurations sont compromises.",
            "<strong>Canaux de communication sécurisés</strong> : Implémentez des communications chiffrées de bout en bout en générant des clés symétriques par session. Cette approche permet une messagerie sécurisée en temps réel tout en maintenant les performances pour les applications sensibles à la bande passante."
          ]
        }
      },
      faq: {
        title: "FAQ sur le chiffrement symétrique",
        items: [
          {
            question: "Quelles sont les différences entre les algorithmes AES, DES, 3DES et SM4 ?",
            answer: "Ce sont différents <strong>algorithmes de chiffrement symétrique</strong> avec différents niveaux de sécurité et caractéristiques de performance. <strong>AES (Standard de Chiffrement Avancé)</strong> est le standard mondial actuel, offrant une excellente sécurité et performance avec des tailles de clé de 128, 192 ou 256 bits. <strong>DES (Standard de Chiffrement de Données)</strong> est un algorithme plus ancien utilisant une clé de 56 bits, maintenant considéré comme peu sûr pour les applications critiques en raison de sa vulnérabilité aux attaques par force brute. <strong>3DES</strong> améliore la sécurité de DES en appliquant trois fois l'algorithme avec des clés différentes, offrant une meilleure protection mais avec une performance plus lente. <strong>SM4</strong> est un algorithme de chiffrement par bloc standard chinois avec une clé de 128 bits, conçu comme équivalent à AES avec une sécurité comparable. Pour la plupart des applications modernes nécessitant de la sécurité, AES est recommandé car il offre le meilleur équilibre entre sécurité forte et efficacité."
          },
          {
            question: "Quel mode de chiffrement choisir pour mon application ?",
            answer: "Le <strong>mode de chiffrement</strong> détermine comment l'algorithme traite les blocs de données. <strong>ECB (Livre de Code Électronique)</strong> est le plus simple mais le moins sécurisé, car des blocs de texte clair identiques produisent des blocs de texte chiffré identiques, pouvant révéler des motifs. <strong>CBC (Chaînage des Blocs)</strong> améliore la sécurité en faisant dépendre chaque bloc chiffré du précédent, nécessitant un vecteur d'initialisation (IV). <strong>CFB (Rétroaction du Texte Chiffré)</strong>, <strong>OFB (Rétroaction de Sortie)</strong> et <strong>CTR (Compteur)</strong> transforment les chiffrements par blocs en chiffrements par flux avec différentes propriétés. Pour un chiffrement générique de données sensibles, CBC avec des IV aléatoires offre une bonne sécurité et performance raisonnable. CTR est idéal pour les implémentations parallélisables, évitant les besoins de remplissage. Les systèmes cryptographiques modernes préfèrent souvent des modes authentifiés comme GCM (non directement fourni par cet outil) combinant confidentialité et intégrité des données."
          },
          {
            question: "Cet outil de chiffrement en ligne est-il sûr pour les données sensibles ?",
            answer: "Cet <strong>outil de chiffrement basé navigateur</strong> traite toutes les données localement dans votre navigateur sans les envoyer à des serveurs externes, offrant un niveau de confidentialité de base. Cependant, pour des informations vraiment sensibles, considérez : 1) L'outil utilise des implémentations JavaScript standards qui peuvent ne pas offrir les mêmes garanties de sécurité que des implémentations natives auditées. 2) L'environnement navigateur présente des risques potentiels comme des extensions, logiciels malveillants ou inspections mémoire. 3) La gestion des clés reste cruciale - si vous perdez la clé de chiffrement, les données seront irrécupérables. Pour les données hautement sensibles ou systèmes de production, nous recommandons d'utiliser des logiciels dédiés ou bibliothèques cryptographiques dans des environnements contrôlés avec des pratiques appropriées de gestion des clés. Cet outil convient mieux à des fins éducatives, un usage occasionnel ou le chiffrement d'informations moyennement sensibles."
          },
          {
            question: "Comment gérer et partager les clés de chiffrement de manière sécurisée ?",
            answer: "Une <strong>gestion sécurisée des clés</strong> est essentielle pour maintenir la sécurité cryptographique. Ne partagez jamais la clé via le même canal que les données chiffrées - cela annulerait le but du chiffrement, permettant à quiconque interceptant les deux de déchiffrer vos informations. À la place : 1) Utilisez des canaux de communication séparés pour l'échange de clés. 2) Considérez le fractionnement de clé, envoyant différentes parties de la clé via différents canaux. 3) Utilisez des protocoles sécurisés d'échange de clés lorsque possible. 4) Pour les communications continues, envisagez d'utiliser le chiffrement asymétrique pour échanger des clés symétriques de manière sécurisée. 5) Implémentez des pratiques de rotation des clés pour améliorer la sécurité à long terme. 6) Stockez les clés de manière sécurisée, jamais en clair, idéalement avec des systèmes dédiés de gestion de clés. 7) Pour une sécurité maximale des clés critiques, envisagez des modules matériels de sécurité (HSM) ou services dédiés de gestion de clés. Rappelez-vous que la sécurité des données chiffrées dépend entièrement de vos pratiques de gestion des clés."
          },
          {
            question: "Comment garantir l'intégrité de mes données chiffrées contre les altérations ?",
            answer: "Le <strong>chiffrement symétrique</strong> standard assure la confidentialité mais ne garantit pas intrinsèquement l'intégrité des données. Pour vérifier que vos données chiffrées n'ont pas été modifiées : 1) Utilisez des modes authentifiés lorsque possible. Bien que cet outil propose principalement des modes traditionnels (CBC, ECB...), les systèmes modernes préfèrent des modes comme AES-GCM combinant confidentialité et vérification d'intégrité. 2) Implémentez des vérifications d'intégrité séparées en calculant des hachages cryptographiques (comme SHA-256) ou HMAC des données chiffrées, stockés sécuritairement. Recalculez et comparez avant déchiffrement pour détecter les altérations. 3) Pour les applications critiques, envisagez des signatures numériques en complément du chiffrement. 4) Vérifiez toujours la longueur et structure du texte chiffré avant déchiffrement pour s'assurer de sa complétude. 5) Si possible, incluez des métadonnées de version dans le schéma de chiffrement pour prévenir les attaques par rétrogradation. Ces mesures aident à assurer à la fois confidentialité et intégrité de vos informations sensibles transitant par des canaux potentiellement non fiables."
          }
        ]
      },
      guide: {
        title: "Guide étape par étape pour utiliser l'outil de chiffrement",
        steps: [
          "<strong>Sélectionnez un algorithme</strong> : Selon vos besoins de sécurité et compatibilité, choisissez entre AES (recommandé pour la plupart des applications), DES, 3DES ou SM4 (standard chinois). AES offre le meilleur équilibre sécurité/performance pour les applications modernes.",
          "<strong>Choisissez un mode opératoire</strong> : Sélectionnez un <strong>mode de chiffrement</strong> parmi les options disponibles (CBC, ECB, CFB, OFB, CTR). Pour une sécurité générale, CBC est recommandé car il offre une bonne sécurité avec des vecteurs d'initialisation (IV) aléatoires.",
          "<strong>Configurez la méthode de remplissage</strong> : Si votre mode sélectionné nécessite du remplissage (comme CBC ou ECB), choisissez entre PKCS7 (standard) ou remplissage par zéros. Ce paramètre détermine comment le dernier bloc est complété lorsque la longueur des données n'est pas un multiple de la taille de bloc.",
          "<strong>Générez ou entrez une clé</strong> : Entrez une clé personnalisée ou utilisez le bouton 'Générer aléatoirement' pour créer une clé cryptographiquement forte. Pour AES, la longueur de clé sera de 16, 24 ou 32 octets selon la force désirée. Choisissez le format d'entrée approprié pour votre clé (chaîne, hexadécimal ou Base64).",
          "<strong>Fournissez un IV si nécessaire</strong> : Pour les modes autres qu'ECB, vous aurez besoin d'un IV. Cliquez sur 'Générer aléatoirement' pour créer un IV sécurisé, ou entrez le vôtre. L'IV n'a pas besoin d'être secret mais doit être unique pour chaque opération de chiffrement.",
          "<strong>Entrez les données à chiffrer</strong> : Saisissez ou collez le texte à chiffrer dans le champ d'entrée. Sélectionnez le format d'entrée approprié (chaîne pour texte normal, ou hexadécimal/Base64 pour données déjà encodées). Pour le déchiffrement, fournissez le texte chiffré dans son format original (généralement hexadécimal ou Base64).",
          "<strong>Traitez et utilisez les résultats</strong> : Cliquez sur 'Chiffrer' ou 'Déchiffrer' pour traiter vos données. Le résultat s'affichera dans le format de sortie spécifié. Utilisez le bouton copie pour transférer facilement le résultat vers une autre application ou document. Pour le chiffrement, assurez-vous de stocker de manière sécurisée la clé et l'IV (si utilisé), car ils seront nécessaires pour le déchiffrement."
        ]
      },
      conclusion: "L'outil de chiffrement symétrique offre un moyen puissant et facile d'utiliser pour protéger vos informations sensibles avec des algorithmes de chiffrement standard. En suivant les bonnes pratiques de sécurité et en comprenant les options disponibles, vous pouvez implémenter efficacement un chiffrement fort pour un large éventail d'applications, depuis la protection de fichiers personnels jusqu'à la mise en œuvre de systèmes de sécurité plus complexes. Bien que cet outil basé navigateur offre commodité et flexibilité pour de nombreux besoins de chiffrement, rappelez-vous que les applications critiques en matière de sécurité peuvent nécessiter des solutions cryptographiques dédiées avec une infrastructure appropriée de gestion des clés. Que vous cherchiez à ajouter une couche de confidentialité à vos données personnelles ou à explorer les concepts cryptographiques, cet outil fournit une introduction pratique à cette technologie fondamentale de sécurité qu'est le chiffrement symétrique."
    }
  }