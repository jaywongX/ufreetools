export default {
    name: 'Outil de chiffrement RSA',
    description: 'Générer des paires de clés RSA, chiffrer/déchiffrer des données, créer/vérifier des signatures numériques',
    tabs: {
      title: 'Sélection de fonctionnalité',
      keyGeneration: 'Génération de clés',
      encryptDecrypt: 'Chiffrement/Déchiffrement',
      signVerify: 'Signature/Vérification'
    },
    keyGeneration: {
      title: 'Génération de paire de clés RSA',
      keyLength: 'Longueur de clé',
      keySizes: {
        size512: '512 bits (non recommandé pour des scénarios sécurisés)',
        size1024: '1024 bits (sécurité basique)',
        size2048: '2048 bits (recommandé)',
        size4096: '4096 bits (haute sécurité)'
      },
      generateButton: 'Générer une paire de clés',
      generating: 'Génération en cours...',
      publicKey: 'Clé publique (Public Key)',
      privateKey: 'Clé privée (Private Key)',
      exportPublicKey: 'Exporter la clé publique',
      exportPrivateKey: 'Exporter la clé privée',
      copy: 'Copier',
      info: {
        title: 'Comprendre les paires de clés RSA',
        description: 'RSA est un algorithme de chiffrement asymétrique utilisant une paire de clés :',
        points: {
          0: 'Clé publique : Peut être partagée en toute sécurité avec quiconque, utilisée pour chiffrer des données ou vérifier des signatures.',
          1: 'Clé privée : Doit être conservée en sécurité, ne doit pas être divulguée, utilisée pour déchiffrer des données ou créer des signatures.'
        },
        keyLengthTitle: 'La longueur de clé détermine le niveau de sécurité :',
        keyLengthPoints: {
          0: '512 bits - N\'est plus sécurisé, uniquement pour les tests',
          1: '1024 bits - Faible, non recommandé pour des données sensibles',
          2: '2048 bits - Standard actuellement recommandé',
          3: '4096 bits - Offre une sécurité supérieure mais un traitement plus lent'
        }
      }
    },
    encryptDecrypt: {
      title: 'Chiffrement et Déchiffrement',
      encryptMode: 'Mode chiffrement',
      decryptMode: 'Mode déchiffrement',
      encryptDescription: 'Utilisez une clé publique pour chiffrer des données, seul le détenteur de la clé privée correspondante pourra les déchiffrer.',
      decryptDescription: 'Utilisez une clé privée pour déchiffrer des données précédemment chiffrées avec une clé publique.',
      keyLabel: {
        encrypt: 'Clé publique (Public Key)',
        decrypt: 'Clé privée (Private Key)'
      },
      dataLabel: {
        encrypt: 'Données à chiffrer',
        decrypt: 'Données à déchiffrer'
      },
      keyPlaceholder: 'Collez la clé RSA ici',
      dataPlaceholder: {
        encrypt: 'Entrez le texte à chiffrer ici',
        decrypt: 'Entrez les données à déchiffrer ici (format Base64)'
      },
      processButton: {
        encrypt: 'Chiffrer les données',
        decrypt: 'Déchiffrer les données'
      },
      processing: 'Traitement en cours...',
      resultLabel: {
        encrypt: 'Résultat du chiffrement',
        decrypt: 'Résultat du déchiffrement'
      },
      info: {
        title: 'À propos du chiffrement/déchiffrement RSA',
        description: 'RSA est un algorithme de chiffrement asymétrique fonctionnant comme suit :',
        points: {
          0: 'Chiffrement : Utilisez la clé publique du destinataire pour chiffrer des données, assurant que seul le détenteur de la clé privée correspondante pourra les déchiffrer.',
          1: 'Déchiffrement : Le destinataire utilise sa clé privée pour déchiffrer les données.',
          2: 'Le chiffrement RSA a des limites de longueur de données et n\'est généralement pas adapté au chiffrement direct de gros fichiers.',
          3: 'Pour les grandes quantités de données, on utilise généralement un chiffrement symétrique (comme AES) pour chiffrer les données, puis RSA pour chiffrer la clé symétrique.'
        }
      },
      encrypt: 'Chiffrer',
      decrypt: 'Déchiffrer'
    },
    signVerify: {
      title: 'Signature et Vérification',
      signMode: 'Mode signature',
      verifyMode: 'Mode vérification',
      signDescription: 'Utilisez une clé privée pour signer des données, prouvant leur authenticité et intégrité.',
      verifyDescription: 'Utilisez une clé publique pour vérifier une signature, confirmant que les données n\'ont pas été altérées et proviennent bien de l\'expéditeur attendu.',
      keyLabel: {
        sign: 'Clé privée (Private Key)',
        verify: 'Clé publique (Public Key)'
      },
      dataLabel: 'Données',
      hashAlgorithm: 'Algorithme de hachage',
      hashOptions: {
        sha1: 'SHA-1 (non recommandé pour des scénarios sécurisés)',
        sha256: 'SHA-256 (recommandé)',
        sha512: 'SHA-512 (haute sécurité)',
        md5: 'MD5 (uniquement pour les tests, non sécurisé)'
      },
      signatureLabel: 'Signature (format Base64)',
      signaturePlaceholder: 'Entrez les données de signature ici',
      processButton: {
        sign: 'Générer une signature',
        verify: 'Vérifier la signature'
      },
      processing: 'Traitement en cours...',
      signatureResult: 'Résultat de signature (format Base64)',
      verificationSuccess: 'Vérification de signature réussie',
      verificationFailure: 'Échec de la vérification de signature',
      verificationSuccessMessage: 'Les données n\'ont pas été altérées et proviennent bien de l\'expéditeur attendu.',
      verificationFailureMessage: 'Les données ont peut-être été altérées ou la signature n\'a pas été créée avec la clé privée correspondante.',
      info: {
        title: 'À propos des signatures RSA',
        description: 'La signature RSA est une technique de signature numérique utilisée pour vérifier l\'authenticité et l\'intégrité des messages :',
        points: {
          0: 'Processus de signature : Utilisez la clé privée de l\'expéditeur pour chiffrer le hachage du message, générant ainsi une signature numérique.',
          1: 'Processus de vérification : Le destinataire utilise la clé publique de l\'expéditeur pour déchiffrer la signature et la comparer avec le hachage du message.',
          2: 'Si la vérification réussit, cela prouve que le message a bien été envoyé par le détenteur de la clé privée et que son contenu n\'a pas été altéré.',
          3: 'La signature ne chiffre pas le message, elle sert uniquement à vérifier son origine et son intégrité. Pour protéger le contenu du message, un chiffrement supplémentaire est nécessaire.'
        }
      },
      sign: 'Signer',
      verify: 'Vérifier la signature',
      signatureValue: 'Valeur de signature',
      verificationResult: {
        success: 'Vérification réussie ! La signature est valide, les données sont intactes et la source est fiable.',
        failed: 'Échec de la vérification ! La signature est invalide, les données ont peut-être été altérées ou la source n\'est pas fiable.'
      },
      dataPlaceholder: 'Entrez les données à signer ou vérifier ici',
      keyPlaceholder: 'Collez la clé RSA ici'
    },
    messages: {
      copied: 'Copié dans le presse-papiers',
      copyFailed: 'Échec de la copie, veuillez copier manuellement',
      keygenError: 'Erreur lors de la génération de la paire de clés : {error}',
      encryptError: 'Échec du chiffrement, veuillez vérifier votre clé publique et les données d\'entrée. Le chiffrement RSA a des limites de longueur de données.',
      decryptError: 'Échec du déchiffrement, assurez-vous que la clé privée est correcte et que les données d\'entrée sont un texte chiffré valide.',
      signError: 'Échec de la génération de signature, veuillez vérifier votre clé privée et les données d\'entrée.',
      verifyError: 'Échec de la vérification, veuillez vérifier vos clés et les données d\'entrée.',
      processingError: 'Opération échouée. Veuillez vérifier vos clés et les données d\'entrée.'
    }
  }