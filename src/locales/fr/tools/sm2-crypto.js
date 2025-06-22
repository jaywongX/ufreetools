export default {
    name: 'Outil de chiffrement SM2',
    description: 'Utilise l\'algorithme cryptographique SM2 pour générer des paires de clés, chiffrer/déchiffrer des données et créer/vérifier des signatures numériques',
    tabs: {
      title: 'Choix de fonctionnalité',
      keyGeneration: 'Génération de clés',
      encryptDecrypt: 'Chiffrement/Déchiffrement',
      signVerify: 'Signature/Vérification'
    },
    keyGeneration: {
      title: 'Génération de paire de clés SM2',
      generateButton: 'Générer une paire de clés',
      generating: 'Génération en cours...',
      publicKey: 'Clé publique',
      privateKey: 'Clé privée',
      exportPublicKey: 'Exporter la clé publique',
      exportPrivateKey: 'Exporter la clé privée',
      copy: 'Copier',
      info: {
        title: 'Comprendre les paires de clés SM2',
        description: 'SM2 est un algorithme cryptographique à courbe elliptique publié par l\'Administration nationale chinoise des mots de passe, un algorithme de chiffrement asymétrique :',
        points: [
          'Clé publique : Peut être partagée pour chiffrer des données ou vérifier des signatures',
          'Clé privée : Doit être conservée en sécurité, utilisée pour déchiffrer des données ou créer des signatures'
        ],
        features: 'Caractéristiques de l\'algorithme SM2 :',
        featuresList: [
          'Basé sur une courbe elliptique de 256 bits, sécurité équivalente à RSA 3072 bits',
          'Exécution rapide, clés courtes',
          'Standard national chinois (GB/T 32918), adapté aux scénarios commerciaux chinois',
          'Intègre chiffrement, signature et échange de clés'
        ],
        securityTip: 'Conseil de sécurité : Ne divulguez jamais votre clé privée, conservez votre paire de clés en sécurité.'
      }
    },
    encryptDecrypt: {
      title: 'Type d\'opération',
      encrypt: 'Chiffrer',
      decrypt: 'Déchiffrer',
      keyLabel: {
        encrypt: 'Clé publique',
        decrypt: 'Clé privée'
      },
      dataLabel: {
        encrypt: 'Données à chiffrer',
        decrypt: 'Données à déchiffrer'
      },
      keyPlaceholder: 'Collez la clé SM2 ici',
      dataPlaceholder: {
        encrypt: 'Entrez le texte à chiffrer',
        decrypt: 'Entrez le texte chiffré à déchiffrer'
      },
      processButton: {
        encrypt: 'Chiffrer',
        decrypt: 'Déchiffrer'
      },
      processing: 'Traitement en cours...',
      resultLabel: {
        encrypt: 'Résultat du chiffrement',
        decrypt: 'Résultat du déchiffrement'
      },
      info: {
        title: 'Instructions SM2 Chiffrement/Déchiffrement',
        usage: 'Mode d\'emploi :',
        points: [
          'Chiffrement : Utilisez la clé publique du destinataire, seul le détenteur de la clé privée pourra déchiffrer',
          'Déchiffrement : Utilisez votre clé privée pour déchiffrer les données chiffrées avec votre clé publique'
        ],
        limitations: 'Limitations :',
        limitationsList: [
          'SM2 a des limites de longueur de texte clair, adapté aux messages courts ou clés sensibles',
          'Pour les longs textes, utilisez d\'abord un chiffrement symétrique (comme SM4) puis SM2 pour la clé symétrique'
        ],
        note: 'Note : Le format des données chiffrées SM2 n\'est pas compatible avec RSA, assurez-vous que le destinataire supporte SM2.'
      }
    },
    signVerify: {
      title: 'Type d\'opération',
      sign: 'Signer',
      verify: 'Vérifier',
      keyLabel: {
        sign: 'Clé privée',
        verify: 'Clé publique'
      },
      dataLabel: 'Données à {operation}',
      signatureLabel: 'Valeur de signature',
      signatureValue: 'Signature générée',
      keyPlaceholder: 'Collez la clé SM2 ici',
      dataPlaceholder: 'Entrez le texte original',
      signaturePlaceholder: 'Entrez la signature à vérifier',
      processButton: {
        sign: 'Générer signature',
        verify: 'Vérifier signature'
      },
      processing: 'Traitement en cours...',
      verificationSuccess: 'Vérification réussie ! Les données sont intactes et non altérées.',
      verificationFailed: 'Échec de vérification ! Les données peuvent avoir été modifiées ou la signature est incorrecte.',
      info: {
        title: 'Instructions SM2 Signature/Vérification',
        mainUses: 'Principales utilisations :',
        usesList: [
          'Intégrité des données : Garantit que les données n\'ont pas été altérées',
          'Authentification : Prouve l\'origine des données',
          'Non-répudiation : L\'expéditeur ne peut nier avoir envoyé le message'
        ],
        usage: 'Mode d\'emploi :',
        usageList: [
          'Signature : Utilisez votre clé privée pour signer',
          'Vérification : Utilisez la clé publique de l\'expéditeur pour vérifier'
        ],
        note: 'Note : Les signatures SM2 utilisent un standard chinois et ne sont pas compatibles avec les algorithmes internationaux.'
      }
    },
    messages: {
      copied: 'Copié dans le presse-papiers',
      copyFailed: 'Échec de la copie, veuillez copier manuellement',
      keygenError: 'Erreur lors de la génération des clés : {error}',
      processError: 'Échec de l\'opération. Vérifiez vos clés et données.',
      emptyKey: 'Veuillez entrer une clé',
      emptyData: 'Veuillez entrer des données à traiter'
    }
  }