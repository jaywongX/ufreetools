export default {
    name: 'Outil de débogage JWT',
    description: 'Outil en ligne pour analyser, valider et déboguer les jetons JWT',
    sections: {
      encoded: 'JWT encodé',
      decoded: 'JWT décodé',
      header: 'En-tête',
      payload: 'Charge utile',
      signature: 'Signature',
      verification: 'Vérification'
    },
    actions: {
      decode: 'Décoder',
      verify: 'Vérifier la signature',
      copy: 'Copier',
      share: 'Partager le jeton',
      generateToken: 'Générer un jeton',
      generateRandomToken: 'Jeton aléatoire',
      clear: 'Effacer',
      generateRandomPayload: 'Générer une charge utile aléatoire',
      generateRandomKey: 'Générer une clé aléatoire',
      generateKeyPair: 'Générer une paire de clés'
    },
    messages: {
      invalidToken: 'Format JWT invalide',
      copied: 'Copié dans le presse-papiers !',
      copyFailed: 'Échec de la copie, veuillez copier manuellement',
      verificationSuccess: 'Vérification de signature réussie',
      verificationFailed: 'Échec de la vérification de signature',
      keyGenerated: 'Paire de clés générée avec succès',
      keyGenerationFailed: 'Échec de la génération de la paire de clés',
      tokenGenerated: 'Jeton généré avec succès',
      tokenGenerationFailed: 'Échec de la génération du jeton',
      randomTokenGenerated: 'Jeton aléatoire généré et analysé avec succès',
      certUploadSuccess: 'Certificat téléchargé avec succès',
      certFormatInvalid: 'Format de certificat invalide',
      certReadFailed: 'Échec de la lecture du certificat',
      tokenFormatError: 'Format de jeton invalide, le JWT doit contenir trois parties séparées par des points',
      tokenHeaderMissingAlg: "L'en-tête du jeton manque le champ algorithme (alg)",
      tokenHeaderInvalid: "Format d'en-tête de jeton invalide",
      tokenVerificationFailed: 'Échec de la vérification du format du jeton',
      tokenExpired: 'Jeton expiré. Date d\'expiration : {time}',
      tokenNotEffective: 'Jeton non encore valide. Date de validité : {time}',
      tokenIssuedInFuture: 'Date d\'émission anormale, dans le futur. Date d\'émission : {time}',
      algorithmNotSupported: 'Algorithme non pris en charge',
      randomSecretGenerated: 'Clé secrète aléatoire générée avec succès',
      randomSecretGenerationFailed: 'Échec de la génération de la clé secrète aléatoire',
      randomPayloadGenerated: 'Charge utile aléatoire générée',
      randomPayloadGenerationFailed: 'Échec de la génération de la charge utile aléatoire',
      contentCleared: 'Tout le contenu a été effacé',
      tokenDecodeSuccess: 'Décodage du jeton réussi',
      tokenDecodeFailed: 'Échec du décodage du jeton',
      pleaseInputKey: 'Veuillez saisir une clé',
      pleaseGenerateKeyPair: 'Veuillez d\'abord générer une paire de clés {type}',
      pleaseInputVerificationKey: 'Veuillez saisir une clé de vérification',
      pleaseInputPublicKey: 'Veuillez saisir une clé publique de vérification',
      pleaseInputToken: 'Veuillez saisir le jeton à vérifier',
      payloadFormatError: 'Erreur de format de charge utile, veuillez vérifier le format JSON',
      invalidTimestamp: 'Horodatage invalide'
    },
    placeholders: {
      secretKey: 'Veuillez saisir une clé secrète',
      privateKey: 'Veuillez saisir ou générer une clé privée',
      publicKey: 'Veuillez saisir ou générer une clé publique',
      payload: 'Veuillez saisir une charge utile au format JSON',
      token: 'Veuillez saisir ou générer un jeton JWT',
      verificationSecretKey: 'Veuillez saisir une clé secrète de vérification',
      verificationPublicKey: 'Veuillez saisir une clé publique de vérification'
    },
    labels: {
      algorithm: 'Algorithme',
      secretKey: 'Clé secrète',
      privateKey: 'Clé privée',
      publicKey: 'Clé publique',
      certificate: 'Certificat numérique (optionnel)',
      payload: 'Charge utile (Payload)',
      token: 'Jeton',
      verificationPublicKey: 'Clé publique de vérification',
      tokenResult: 'Résultat de l\'analyse du jeton',
      verifyToken: 'Vérifier le jeton',
      tokenDecoded: 'Jeton détecté utilisant la signature avec l\'algorithme {alg}',
      timestamp: 'Analyse de l\'horodatage',
      issuedAt: 'Date d\'émission (iat)',
      expiration: 'Date d\'expiration (exp)',
      notBefore: 'Date de validité (nbf)',
      tokenFormat: 'Aucun contenu',
      tokenFormatDesc: 'Le résultat de l\'analyse s\'affichera ici après avoir saisi ou généré un jeton JWT',
      uploadCert: 'Glissez-déposez un fichier de certificat ou cliquez pour sélectionner',
      certName: 'Nom du certificat',
      sm3Fingerprint: 'Empreinte SM3 (x5t#sm3)',
      certUploadNote: 'Après téléchargement du certificat, le champ "x5t#sm3" sera ajouté à l\'en-tête JWT',
      secondsTimestamp: 'Horodatage en secondes',
      millisecondsTimestamp: 'Horodatage en millisecondes'
    },
    buttons: {
      cancel: 'Annuler',
      verify: 'Vérifier',
      clearCert: 'Effacer',
      generateToken: 'Générer un jeton',
      decodeToken: 'Analyser le jeton',
      verifyToken: 'Vérifier le jeton',
      close: 'Fermer'
    },
    verification: {
      success: 'Vérification réussie',
      failure: 'Échec de la vérification',
      validMessage: 'La vérification de signature du jeton est réussie, la signature est valide.',
      invalidMessage: 'La vérification de signature du jeton a échoué, la signature est invalide.'
    },
    errors: {
      noToken: 'Veuillez saisir un jeton à vérifier',
      invalidToken: 'Format de jeton invalide',
      noSecretKey: 'Veuillez fournir une clé de vérification',
      noPublicKey: 'Veuillez fournir une clé publique de vérification',
      invalidSignature: 'Signature invalide',
      verificationFailed: 'Échec de la vérification du jeton'
    },
    article: {
      title: "Outil de débogage JWT : décoder, valider et déboguer les jetons JSON Web",
      features: {
        title: "Comprendre le débogage JWT",
        description: "Cet <strong>outil de débogage JWT</strong> est conçu pour les développeurs et professionnels de la sécurité comme un <strong>outil d'analyse de jetons</strong> permettant d'inspecter, valider et dépanner les jetons JSON Web (JWT). Ce <strong>décodeur JWT en ligne</strong> vous permet de coller n'importe quel JWT et d'en voir immédiatement les composants décodés - en-tête, charge utile et signature - dans un format lisible par l'homme.<br><br>Au-delà du simple <strong>décodage de jetons</strong>, l'outil offre des fonctionnalités complètes de validation, confirmant si la signature du jeton est valide en utilisant la clé ou clé publique appropriée. Ce <strong>outil de validation JWT</strong> prend en charge tous les algorithmes JWT standard, y compris HS256, RS256, ES256, etc., garantissant la compatibilité avec les systèmes d'authentification modernes. Pour les développeurs construisant ou maintenant des applications utilisant l'authentification par jeton, cet <strong>utilitaire de débogage JWT</strong> fournit des informations cruciales sur la structure des jetons, leur état d'expiration et les déclarations de sécurité.",
        useCases: {
          title: "Cas d'utilisation pratiques du débogage JWT",
          items: [
            "<strong>Dépannage de l'authentification API</strong> : Lorsque les appels API échouent en raison d'erreurs d'authentification, les développeurs peuvent utiliser l'<strong>outil de validation JWT</strong> pour examiner les jetons et identifier les problèmes comme l'expiration du jeton, une signature invalide ou des déclarations incorrectes.",
            "<strong>Intégration de fournisseur d'identité</strong> : Lors de l'intégration avec des services OAuth ou OpenID Connect, l'<strong>inspecteur de jetons</strong> aide à vérifier que les jetons d'identité contiennent les déclarations attendues et sont correctement signés.",
            "<strong>Audit de sécurité</strong> : Les professionnels de la sécurité peuvent examiner les <strong>jetons d'authentification</strong> pour s'assurer qu'ils contiennent les autorisations appropriées, des délais d'expiration raisonnables et suivent les meilleures pratiques de sécurité.",
            "<strong>Génération de JWT personnalisés</strong> : Lors de l'implémentation de systèmes d'authentification personnalisés, les développeurs peuvent utiliser cet outil pour créer et tester des <strong>jetons JWT encodés</strong> avec des déclarations spécifiques et des algorithmes de signature.",
            "<strong>Débogage de jetons porteurs</strong> : Les développeurs frontaux utilisant l'<strong>authentification par jeton porteur</strong> peuvent vérifier que les jetons utilisés dans les en-têtes d'application sont correctement formatés et contiennent les données nécessaires.",
            "<strong>Authentification de microservices</strong> : Les équipes construisant des architectures de microservices peuvent valider que les <strong>jetons de service</strong> transmettent correctement les informations d'autorisation entre les services et maintiennent des limites de sécurité appropriées."
          ]
        }
      },
      faq: {
        title: "Questions fréquentes sur le débogage JWT",
        items: [
          {
            question: "Est-il sécuritaire de coller mon JWT dans ce débogueur en ligne ?",
            answer: "Oui, notre outil de débogage JWT est conçu avec la sécurité à l'esprit. Tout le traitement des jetons se fait entièrement dans votre navigateur en utilisant JavaScript côté client, ce qui signifie que votre jeton n'est jamais envoyé à un serveur pour décodage ou validation. Le décodeur JWT ne stocke pas vos jetons, clés ou données de charge utile de quelque manière que ce soit. Cependant, comme meilleure pratique de sécurité, nous recommandons d'utiliser uniquement des jetons de test, pas des jetons de production contenant des informations sensibles. Si vous travaillez avec des systèmes d'authentification hautement sensibles, envisagez d'utiliser un outil de débogage JWT local dans un environnement de développement sécurisé plutôt qu'un service de validation de jetons en ligne."
          },
          {
            question: "Quelle est la différence entre l'en-tête, la charge utile et la signature dans un JWT ?",
            answer: "Un jeton JSON Web se compose de trois parties distinctes séparées par des points : l'en-tête, la charge utile et la signature. L'en-tête contient généralement le type de jeton ('JWT') et l'algorithme de signature utilisé (comme 'HS256' ou 'RS256'). La charge utile contient les déclarations ou assertions, qui sont des affirmations sur une entité (généralement un utilisateur) et des données supplémentaires. Les déclarations courantes incluent l'ID utilisateur, la date d'expiration et l'émetteur. La signature est créée en utilisant l'algorithme spécifié dans l'en-tête pour combiner l'en-tête et la charge utile encodés avec une clé. Cette signature vérifie que le message n'a pas été altéré et, avec certains algorithmes, peut vérifier l'identité de l'expéditeur. Notre décodeur de jetons affiche clairement les trois parties, vous aidant à comprendre et déboguer vos jetons d'authentification."
          },
          {
            question: "Comment vérifier si ma signature JWT est valide ?",
            answer: "Pour vérifier une signature JWT avec notre outil de validation de jetons, entrez votre jeton dans le champ de saisie et fournissez la clé ou clé publique appropriée (selon l'algorithme utilisé). Pour les algorithmes basés sur HMAC comme HS256, vous aurez besoin de la même clé secrète utilisée pour créer le jeton. Pour les algorithmes RSA ou ECDSA comme RS256 ou ES256, vous aurez besoin de la clé publique correspondant à la clé privée utilisée pour la signature. Ensuite, l'outil de débogage JWT calculera une signature en utilisant la clé que vous avez fournie basée sur l'en-tête et la charge utile, et la comparera à la signature dans le jeton. Si elles correspondent, la signature est valide, confirmant que le jeton n'a pas été altéré et a bien été signé par une partie de confiance possédant la bonne clé privée ou secrète."
          },
          {
            question: "Pourquoi la validation JWT peut-elle échouer même avec la bonne clé ?",
            answer: "Même avec la bonne clé, la validation JWT dans notre décodeur de jetons peut échouer pour plusieurs raisons. Les problèmes courants incluent : le jeton a expiré (vérifiez la déclaration 'exp' dans la charge utile), le jeton n'est pas encore valide (vérifiez 'nbf'), l'utilisation du mauvais algorithme (assurez-vous que l'algorithme spécifié dans l'en-tête correspond à celui que vous utilisez pour la validation), l'altération du jeton (même de petits changements dans l'en-tête ou la charge utile entraîneront l'échec de la validation de signature), un format de clé incorrect (assurez-vous que votre clé est correctement formatée, surtout pour les clés RSA et ECDSA), ou des problèmes d'encodage (si votre clé contient des caractères spéciaux). L'outil de débogage JWT fournit des messages d'erreur détaillés pour aider à identifier la raison spécifique de l'échec de validation, rendant le dépannage des jetons d'authentification plus facile."
          },
          {
            question: "Puis-je utiliser cet outil pour générer de nouveaux JWT ?",
            answer: "Oui, notre outil de débogage JWT inclut des fonctionnalités de génération de jetons. Pour créer un nouveau JWT, vous pouvez spécifier la charge utile souhaitée (les déclarations que vous souhaitez inclure), choisir l'algorithme de signature approprié (comme HS256, RS256, etc.), et fournir la clé de signature nécessaire. Pour les algorithmes symétriques comme HS256, vous devrez fournir une clé secrète. Pour les algorithmes asymétriques comme RS256, vous devrez fournir la clé privée utilisée pour la signature. Si nécessaire, l'outil peut même aider à générer des clés aléatoires. Après avoir configuré ces options, le codeur de jetons générera un JWT valide que vous pourrez utiliser pour des tests ou implémentations. Cette fonctionnalité est particulièrement utile pour les développeurs implémentant l'authentification basée sur JWT et ayant besoin de créer des jetons d'exemple avec des déclarations spécifiques à des fins de test."
          }
        ]
      },
      guide: {
        title: "Guide étape par étape pour utiliser l'outil de débogage JWT",
        steps: [
          "Entrez votre <strong>jeton JSON Web</strong> dans le champ de saisie de jeton en haut du débogueur. Vous pouvez coller un JWT complet (incluant les trois parties séparées par des points), qui pourrait provenir d'un système d'authentification ou d'une API.",
          "Cliquez sur le bouton <strong>Décoder</strong> pour voir immédiatement les composants décodés du jeton. Le décodeur JWT affichera les parties d'en-tête et de charge utile dans une vue JSON formatée pour une lecture facile.",
          "Examinez la <strong>partie en-tête</strong>, qui montre généralement le type de jeton ('typ') et l'algorithme de signature ('alg'). Ces informations indiquent comment le jeton a été créé et comment sa signature devrait être validée.",
          "Vérifiez la <strong>partie charge utile</strong>, qui contient toutes les déclarations ou données stockées dans le jeton. Portez une attention particulière aux déclarations de date d'expiration ('exp'), de date d'émission ('iat') et de sujet ('sub') qui déterminent la validité.",
          "Pour valider la signature du jeton, entrez la <strong>clé de vérification</strong> appropriée dans le champ désigné. Les algorithmes symétriques (HS256) utilisent une clé secrète, tandis que les algorithmes asymétriques (RS256/ES256) utilisent une clé publique.",
          "Cliquez sur le bouton <strong>Vérifier la signature</strong> pour vérifier si la signature du jeton est valide. Le validateur JWT indiquera si la validation a réussi ou échoué, ainsi que des détails pertinents.",
          "Pour <strong>générer un nouveau jeton</strong>, cliquez sur l'option 'Générer un jeton', spécifiez la charge utile souhaitée au format JSON, choisissez un algorithme, fournissez une clé de signature (ou générez-en une), et l'outil créera un JWT correctement formaté pour vous."
        ]
      },
      conclusion: "L'outil de débogage JWT est un instrument essentiel pour les développeurs travaillant avec des systèmes d'authentification modernes, offrant des fonctionnalités complètes d'inspection, de validation et de génération de jetons. En fournissant une visibilité claire sur la structure des jetons et leur état de validation, il aide à simplifier le processus de débogage et à assurer la sécurité des implémentations JWT. Que vous dépanniez des problèmes d'authentification, intégriez des fournisseurs d'identité ou conceviez de nouveaux systèmes basés sur des jetons, cet outil simplifie la complexité de l'utilisation des JWT. Alors que les jetons d'authentification continuent d'être une pierre angulaire de la sécurité des applications Web, disposer d'un utilitaire de débogage JWT fiable dans votre boîte à outils de développement devient de plus en plus précieux pour maintenir des flux d'authentification sécurisés et fonctionnels."
    }
  }