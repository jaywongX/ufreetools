export default {
    name: 'Calculateur HMAC',
    description: 'Calcule le HMAC (code d\'authentification de message basé sur le hachage) des données',
    title: 'Outil de calcul HMAC',
    intro: 'Générez des codes d\'authentification de message avec une clé secrète, prenant en charge plusieurs algorithmes de hachage et formats de sortie',
    input: {
      title: 'Entrée',
      message: 'Message',
      messagePlaceholder: 'Entrez le message à authentifier',
      key: 'Clé',
      keyLabel: 'Clé secrète',
      keyPlaceholder: 'Entrez la clé HMAC',
      messageLabel: 'Message',
      messageLongPlaceholder: 'Entrez le message pour calculer le HMAC',
      file: 'Fichier',
      text: 'Texte',
      fileSelect: 'Sélectionner un fichier',
      fileDrop: 'Ou glissez-déposez un fichier ici',
      fileSelected: 'Fichier sélectionné : {name}',
      clearFile: 'Effacer le fichier',
      encoding: 'Encodage d\'entrée',
      keyEncoding: 'Encodage de la clé',
      outputFormat: 'Format de sortie',
      inputType: 'Type d\'entrée',
      utf8: 'UTF-8',
      ascii: 'ASCII',
      base64: 'Base64',
      hex: 'Hexadécimal',
      binary: 'Binaire',
      calculate: 'Calculer HMAC',
      calculating: 'Calcul en cours...',
      clear: 'Tout effacer'
    },
    algorithms: {
      title: 'Algorithmes',
      label: 'Algorithme de hachage',
      hmacMd5: 'HMAC-MD5',
      hmacSha1: 'HMAC-SHA1',
      hmacSha224: 'HMAC-SHA224',
      hmacSha256: 'HMAC-SHA256',
      hmacSha384: 'HMAC-SHA384',
      hmacSha512: 'HMAC-SHA512',
      hmacRipemd160: 'HMAC-RIPEMD160',
      hmacSm3: 'HMAC-SM3'
    },
    result: {
      title: 'Résultat HMAC',
      digest: 'Empreinte HMAC',
      outputLabel: 'Résultat HMAC',
      copy: 'Copier',
      copied: 'Copié !',
      noResult: 'Entrez un message et une clé pour calculer le HMAC',
      calculating: 'Calcul en cours...',
      placeholder: 'Le résultat HMAC s\'affichera ici',
      useExample: 'Utiliser un exemple',
      jsExample: 'Exemple JavaScript :',
    },
    validation: {
      title: 'Validation HMAC',
      hmacToVerify: 'HMAC à vérifier',
      verifyPlaceholder: 'Entrez le HMAC à vérifier',
      verify: 'Vérifier HMAC',
      valid: 'HMAC valide',
      invalid: 'HMAC invalide',
      verifying: 'Vérification en cours...'
    },
    options: {
      title: 'Options',
      uppercase: 'Sortie en majuscules',
      showDetails: 'Afficher les détails techniques',
      autoUpdate: 'Mise à jour automatique',
      truncate: 'Tronquer la sortie',
      truncateLength: 'Longueur de troncature'
    },
    details: {
      title: 'Détails techniques',
      algorithm: 'Algorithme',
      keyLength: 'Longueur de clé',
      blockSize: 'Taille de bloc',
      outputLength: 'Longueur de sortie',
      execution: 'Temps d\'exécution',
      ms: 'ms'
    },
    messages: {
      noMessage: 'Veuillez entrer un message',
      noKey: 'Veuillez entrer une clé',
      invalidEncoding: 'Format d\'encodage invalide',
      processingError: 'Erreur de traitement : {error}',
      success: 'Calcul HMAC réussi',
      invalidKey: 'Format de clé invalide pour l\'encodage sélectionné',
      fileTooBig: 'Fichier trop volumineux. Taille maximale : 5 Mo',
      copied: 'Copié dans le presse-papiers',
      copyFailed: 'Échec de la copie, veuillez copier manuellement',
      invalidHex: 'La clé n\'est pas au format hexadécimal valide',
      invalidBase64: 'La clé n\'est pas au format Base64 valide',
    },
    security: {
      title: 'Notes de sécurité',
      keyStorage: 'Ne partagez jamais votre clé secrète',
      keyStrength: 'Utilisez des clés fortes et uniques pour chaque application',
      recommendation: 'Pour les applications critiques, utilisez au moins HMAC-SHA256',
      warning: 'HMAC-MD5 et HMAC-SHA1 peuvent ne pas convenir aux applications haute sécurité'
    },
    article: {
      title: "Calculateur HMAC : outil de génération de codes d'authentification de message basés sur le hachage",
      features: {
        title: "Comprendre HMAC et son importance",
        description: "Le <strong>calculateur HMAC</strong> est un <strong>outil cryptographique</strong> spécialisé conçu pour générer des codes d'authentification de message basés sur le hachage (HMAC), fournissant une méthode pour vérifier l'intégrité et l'authenticité des messages. Contrairement aux simples fonctions de hachage, HMAC intègre une <strong>clé secrète</strong> dans le processus de hachage, créant ainsi une <strong>valeur de hachage clé</strong> que seul celui qui possède la même clé peut reproduire.<br><br>Ce <strong>générateur HMAC</strong> prend en charge plusieurs algorithmes standards, notamment SHA-256, SHA-512, MD5 et SM3, permettant aux utilisateurs de choisir le niveau de sécurité adapté à leurs besoins spécifiques. L'outil traite divers formats d'entrée (texte clair, hexadécimal ou Base64) et génère une sortie dans le format d'encodage de votre choix. Notre <strong>calculateur de code d'authentification</strong> offre une interface simple et intuitive pour mettre en œuvre ce mécanisme de sécurité fondamental, que vous soyez un développeur testant l'authentification d'API ou un professionnel de la sécurité vérifiant l'intégrité des messages.",
        useCases: {
          title: "Applications pratiques de HMAC",
          items: [
            "<strong>Authentification d'API</strong> : Protégez vos points de terminaison d'API en mettant en œuvre une authentification basée sur HMAC. Le <strong>processus de signature HMAC</strong> permet au serveur de vérifier que les requêtes entrantes sont légitimes et n'ont pas été altérées pendant la transmission.",
            "<strong>Vérification de l'intégrité des données</strong> : Assurez l'intégrité des données stockées ou des fichiers transmis en calculant un <strong>somme de contrôle HMAC</strong>. Cela vous permet de détecter toute modification non autorisée des données, offrant une couche de sécurité supplémentaire par rapport à une simple vérification de hachage.",
            "<strong>Validation sécurisée des cookies</strong> : Protégez les cookies des applications web contre la falsification en incorporant une <strong>signature HMAC</strong>. Cela empêche les utilisateurs de modifier les valeurs des cookies et d'obtenir potentiellement un accès ou des privilèges non autorisés.",
            "<strong>Stockage des mots de passe</strong> : Créez un système de vérification de mot de passe plus sécurisé en utilisant HMAC avec une clé unique pour chaque utilisateur, générant des <strong>empreintes de mot de passe clés</strong> offrant une meilleure protection que les fonctions de hachage standard.",
            "<strong>Vérification de signature numérique</strong> : Implémentez un schéma de signature numérique simplifié pour l'authentification et la non-répudiation. Le <strong>processus d'authentification HMAC</strong> fournit une preuve cryptographique qu'un message a été créé par une personne ayant accès à la clé partagée.",
            "<strong>Validation des transactions blockchain</strong> : Utilisez la <strong>vérification cryptographique HMAC</strong> pour valider l'authenticité des transactions et messages blockchain, garantissant que seules les parties autorisées peuvent créer des signatures de transaction valides."
          ]
        }
      },
      faq: {
        title: "Questions fréquentes sur HMAC",
        items: [
          {
            question: "Quelle est la différence entre HMAC et une fonction de hachage classique ?",
            answer: "Les fonctions de hachage classiques (comme SHA-256 ou MD5) ne fournissent qu'une vérification de l'intégrité des données - confirmant que les données n'ont pas été modifiées. Cependant, HMAC (code d'authentification de message basé sur le hachage) combine une fonction de hachage cryptographique avec une clé, fournissant à la fois l'intégrité des données et l'authentification. Cela signifie que HMAC vérifie non seulement que le message n'a pas été modifié, mais aussi qu'il a été créé par une personne possédant la bonne clé. Cette couche de sécurité supplémentaire rend HMAC significativement plus résistant à diverses attaques cryptographiques, y compris les attaques par collision et par extension de longueur qui pourraient compromettre les fonctions de hachage classiques. Notre outil de génération HMAC implémente cette approche de sécurité renforcée, le rendant adapté aux applications nécessitant une vérification de l'authenticité des messages."
          },
          {
            question: "Quel algorithme HMAC devrais-je choisir pour mon application ?",
            answer: "Pour la plupart des applications de sécurité modernes, HMAC-SHA256 est le choix standard recommandé, car il offre un bon équilibre entre sécurité et performance. Pour les applications ayant des exigences de sécurité plus strictes ou des besoins de sécurité à long terme, envisagez HMAC-SHA384 ou HMAC-SHA512, ces algorithmes offrant une résistance accrue aux attaques futures au prix d'une légère réduction des performances. Évitez d'utiliser HMAC-MD5 et HMAC-SHA1 dans les nouvelles applications, car ces algorithmes de hachage sous-jacents présentent des vulnérabilités connues. Pour les applications destinées au marché chinois nécessitant une conformité aux normes locales, HMAC-SM3 peut être utilisé. Le facteur le plus important est de choisir un algorithme répondant à vos exigences de sécurité spécifiques, tout en tenant compte de la compatibilité avec d'autres systèmes et des contraintes de performance."
          },
          {
            question: "Est-il sécuritaire d'utiliser ce calculateur HMAC en ligne pour traiter des données sensibles ?",
            answer: "Notre calculateur HMAC utilise JavaScript pour exécuter toutes les opérations cryptographiques directement dans votre navigateur, ce qui signifie que vos données sensibles et vos clés ne quittent jamais votre appareil et ne sont pas transmises à nos serveurs. Bien que cela fournisse un niveau de sécurité de base, nous recommandons tout de même d'utiliser principalement ce générateur HMAC en ligne pour des tests, l'apprentissage et des applications non critiques. Pour les environnements de production ou les données hautement sensibles, nous recommandons d'utiliser des bibliothèques cryptographiques établies pour implémenter directement la fonctionnalité HMAC dans le code de votre application, où vous avez un contrôle total sur la gestion des clés et le traitement des données. Si vous devez absolument utiliser cet outil pour traiter des informations sensibles, envisagez de vous déconnecter d'Internet pendant son utilisation et d'effacer l'historique du navigateur par la suite."
          },
          {
            question: "Comment gérer les clés utilisées pour HMAC ?",
            answer: "Une gestion appropriée des clés est essentielle pour la sécurité HMAC. Tout d'abord, générez des clés cryptographiquement fortes et aléatoires avec une longueur suffisante (au moins 32 octets/256 bits pour HMAC-SHA256). Stockez ces clés en sécurité, en utilisant un système de gestion des clés dédié ou un coffre-fort sécurisé pour les clés dans les environnements de production. Ne codez jamais les clés en dur dans le code source ou les fichiers de configuration. Mettez en œuvre une stratégie de rotation des clés pour les changer régulièrement et établissez des clés distinctes pour différentes applications ou environnements. Lors du transfert des clés, utilisez toujours des canaux sécurisés avec un chiffrement approprié. N'oubliez pas que la sécurité de votre implémentation HMAC dépend de vos pratiques de gestion des clés - même l'algorithme le plus sécurisé peut être compromis si les clés sont mal gérées."
          },
          {
            question: "Comment utiliser les résultats HMAC dans mon projet de programmation ?",
            answer: "La plupart des langages de programmation et frameworks offrent un support intégré pour le calcul HMAC. Après avoir vérifié les résultats attendus avec notre calculateur HMAC, vous pouvez implémenter la même fonctionnalité dans votre code. Pour JavaScript/Node.js, utilisez la fonction createHmac du module crypto. En Python, utilisez le module hmac. Les développeurs Java peuvent utiliser la classe Mac de javax.crypto. PHP fournit la fonction hash_hmac. Notre outil fournit des exemples de code montrant comment reproduire le même résultat HMAC en JavaScript. Lors de l'implémentation de l'authentification HMAC, vous calculerez généralement le HMAC d'un message à la fois sur l'expéditeur et le destinataire en utilisant une clé partagée, puis comparerez les résultats pour vérifier l'authenticité. Les détails spécifiques de l'implémentation dépendront des besoins spécifiques de votre application et du langage de programmation utilisé."
          }
        ]
      },
      guide: {
        title: "Guide étape par étape pour utiliser le calculateur HMAC",
        steps: [
          "<strong>Sélectionnez l'algorithme de hachage</strong> : Choisissez l'<strong>algorithme HMAC</strong> approprié à vos besoins de sécurité. Cliquez sur l'une des options disponibles (SHA-256, SHA-1, SHA-384, SHA-512, MD5 ou SM3). Pour la plupart des applications, SHA-256 est recommandé car il offre un bon équilibre entre sécurité et performance.",
          "<strong>Entrez votre clé</strong> : Dans le champ désigné, entrez votre <strong>clé secrète</strong>. Selon le format de votre clé, sélectionnez le format d'encodage d'entrée approprié (texte, hexadécimal ou Base64) dans le menu déroulant. Pour les applications sécurisées, utilisez une clé forte et aléatoire avec une longueur suffisante.",
          "<strong>Fournissez le message</strong> : Dans la zone de saisie des messages, entrez le message que vous souhaitez authentifier. Comme pour la clé, choisissez le format d'encodage d'entrée correspondant à votre message (texte, hexadécimal ou Base64). Le message peut être n'importe quelle donnée que vous souhaitez vérifier ultérieurement.",
          "<strong>Sélectionnez le format de sortie</strong> : Choisissez votre format de sortie préféré pour l'<strong>empreinte HMAC</strong>. Les options incluent hexadécimal (le plus courant), Base64 (plus compact), Base64URL (pour le web) ou binaire. Cela détermine comment la valeur de hachage finale sera représentée.",
          "<strong>Générez le HMAC</strong> : Cliquez sur le bouton 'Calculer HMAC' pour traiter vos entrées et générer le <strong>code d'authentification de message</strong>. Le système utilisera l'algorithme sélectionné avec votre clé et votre message pour créer une valeur de hachage unique.",
          "<strong>Copiez votre résultat</strong> : Une fois le calcul terminé, la zone de résultats affichera l'<strong>empreinte HMAC</strong>. Utilisez le bouton de copie pour copier cette valeur dans le presse-papiers afin de l'utiliser dans votre application.",
          "<strong>Implémentez dans le code</strong> : Référez-vous à l'exemple JavaScript fourni sous les résultats pour voir comment implémenter le même <strong>calcul HMAC</strong> dans votre propre code. Cet exemple montre le code exact nécessaire pour reproduire le même résultat par programmation."
        ]
      },
      conclusion: "Le calculateur HMAC est un outil essentiel pour les développeurs et les professionnels de la sécurité cherchant à mettre en œuvre une authentification robuste et une vérification de l'intégrité des données dans leurs systèmes. En fournissant une interface intuitive pour générer ces codes cryptographiques, il simplifie le processus de test et d'implémentation des mesures de sécurité basées sur HMAC. Que vous protégiez des communications API, vérifiiez l'intégrité des données ou implémentiez des systèmes d'authentification, comprendre et appliquer correctement HMAC est essentiel pour maintenir des pratiques de sécurité solides. Alors que les menaces numériques continuent d'évoluer, l'utilisation de techniques appropriées d'authentification de message comme HMAC reste un élément fondamental des architectures de sécurité modernes, contribuant à garantir que les communications sont à la fois privées et vérifiables comme authentiques."
    }
  }