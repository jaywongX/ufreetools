export default {
    name: 'Analyseur de certificats X.509',
    description: 'Outil en ligne gratuit pour analyser les certificats X.509. Analysez les certificats SSL/TLS, vérifiez leur validité, extrayez les clés publiques et générez des rapports détaillés.',
    
    instructions: {
      title: 'Analyseur de certificats',
      description: 'Téléchargez un fichier de certificat ou collez un certificat encodé en PEM pour voir ses détails.'
    },
    
    dropzone: {
      title: 'Déposez votre fichier de certificat ici',
      formats: 'Formats supportés : .crt, .cer, .pem, .der, .p12 et .pfx'
    },
    
    buttons: {
      browse: 'Parcourir',
      decode: 'Analyser le certificat',
      loadSample: 'Charger un exemple',
      downloadPdf: 'Télécharger PDF',
      downloadTxt: 'Télécharger texte',
      downloadHtml: 'Télécharger HTML',
      downloadJson: 'Télécharger JSON',
      copyBasic: 'Copier les infos de base',
      copySubject: 'Copier sujet/émetteur',
      copyAll: 'Copier toutes les infos',
      copyValue: 'Copier la valeur',
      downloadKey: 'Télécharger la clé',
      exportPem: 'Exporter en PEM',
      downloadCert: 'Télécharger certificat',
    },
    
    input: {
      paste: 'Ou collez les données du certificat :',
      placeholder: 'Collez votre certificat encodé en PEM (-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----)'
    },
    
    loading: 'Analyse du certificat en cours...',
    
    error: {
      title: 'Erreur d\'analyse du certificat',
      invalidFormat: 'Format de certificat invalide',
      invalidBase64: 'Certificat encodé en base64 invalide',
      invalidStructure: 'Structure de certificat invalide',
      invalidDer: 'Format DER invalide',
      invalidAsn1: 'Certificat invalide : impossible de parser les données ASN.1',
      unsupportedType: 'Type de certificat non supporté',
      failedParse: 'Impossible d\'analyser les données du certificat',
      invalidP12: 'Format de fichier PKCS#12 invalide',
      invalidP12Password: 'Mot de passe PKCS#12 incorrect',
      noCertificatesInP12: 'Aucun certificat trouvé dans le fichier PKCS#12',
      unableToProcessP12: 'Impossible de traiter le fichier PKCS#12'
    },
    
    guide: {
      title: 'Comment utiliser cet outil',
      step1: 'Téléchargez votre fichier de certificat X.509 (.crt, .cer, .pem, .der, .p12 ou .pfx) ou collez les données du certificat dans la zone de texte ci-dessous.',
      step2: 'L\'outil détectera automatiquement le format (PEM, DER ou PKCS#12) et le décodera.',
      step3: 'Consultez les informations détaillées du certificat, y compris le sujet, l\'émetteur, la période de validité, les extensions et les données de clé publique.',
      step4: 'Utilisez les boutons en bas pour télécharger un rapport dans différents formats ou copier les informations dans votre presse-papiers.'
    },
    
    tabs: {
      basic: 'Informations de base',
      subject: 'Sujet et émetteur',
      extensions: 'Extensions',
      publicKey: 'Clé publique',
      fingerprints: 'Empreintes',
      raw: 'Certificat brut'
    },
    
    results: {
      title: 'Détails du certificat',
      serialNumber: 'Numéro de série',
      version: 'Version',
      sigAlg: 'Algorithme de signature',
      validFrom: 'Valide à partir du',
      validTo: 'Expire le',
      subject: 'Sujet',
      issuer: 'Émetteur',
      extensions: 'Extensions',
      publicKey: 'Clé publique',
      algorithm: 'Algorithme',
      keySize: 'Taille de clé',
      keyValue: 'Valeur de clé',
      fingerprints: 'Empreintes',
      rawCertificate: 'Certificat brut',
      field: 'Champ',
      value: 'Valeur',
      critical: 'Critique',
      noExtensions: 'Aucune extension trouvée dans ce certificat.',
      validity: 'Validité du certificat',
      expiresIn: 'Expire dans {days} jours',
      visualization: 'Visualisation du certificat',
      daysRemaining: 'Jours restants',
      valid: 'Valide',
      expired: 'Expiré',
      expiringSoon: 'Expire bientôt',
      fieldDescriptions: 'Descriptions des champs',
      certificateUsage: 'Usage du certificat',
      certificateChain: 'Chaîne de certificats',
      signatureValue: 'Valeur de signature',
      notAvailable: 'Non disponible',
      noSpecificUsage: 'Aucun usage spécifique',
      signatureError: 'Erreur d\'analyse de la signature',
      keyDetails: 'Détails de la clé',
      enhancedView: 'Vue améliorée',
      endEntity: 'Entité finale',
      intermediate: 'Certificat intermédiaire',
      rootCA: 'Autorité racine',
      endEntityCert: 'Certificat d\'entité finale',
      intermediateCert: 'Certificat intermédiaire',
      rootCert: 'Autorité de certification racine',
      issuedBy: 'Émis par',
      unknownIssuer: 'Émetteur inconnu',
      notYetValid: 'Pas encore valide'
    },
    
    report: {
      title: 'Rapport de certificat X.509',
      generatedOn: 'Généré le'
    },
    
    extensions: {
      subjectKeyIdentifier: 'Identifiant de clé du sujet',
      keyUsage: 'Usage de la clé',
      subjectAltName: 'Nom alternatif du sujet',
      basicConstraints: 'Contraintes de base',
      crlDistributionPoints: 'Points de distribution CRL',
      certificatePolicies: 'Politiques de certificat',
      authorityKeyIdentifier: 'Identifiant de clé de l\'autorité',
      extKeyUsage: 'Usage étendu de la clé',
      authorityInfoAccess: 'Accès aux informations de l\'autorité',
      ctPrecertificateScts: 'SCTs de pré-certificat CT'
    },
    
    usage: {
      serverAuth: 'Authentification serveur',
      clientAuth: 'Authentification client',
      codeSigning: 'Signature de code',
      emailProtection: 'Protection d\'email',
      timeStamping: 'Horodatage',
      ocspSigning: 'Signature OCSP'
    },
    
    customOID: {
      title: 'Recherche d\'OID personnalisé',
      placeholder: 'Entrez un OID, par exemple 2.5.29.15',
      lookup: 'Rechercher',
      result: 'Résultat',
      value: 'Valeur',
      notFound: 'Information non trouvée pour cet OID',
      foundButComplex: 'OID trouvé mais valeur complexe',
      unknownName: 'OID avec nom inconnu',
      complexValue: 'Valeur complexe, impossible à afficher directement'
    },
    
    descriptions: {
      serialNumber: 'Numéro de série unique du certificat, attribué par l\'autorité de certification',
      version: 'Numéro de version du format du certificat, généralement V3',
      sigAlg: 'Algorithme utilisé pour générer la signature du certificat',
      validFrom: 'Date et heure de début de validité du certificat',
      validTo: 'Date et heure de fin de validité du certificat',
      subject: 'Informations d\'identité du titulaire du certificat',
      issuer: 'Informations d\'identité de l\'autorité ayant émis le certificat',
      publicKey: 'Informations sur la clé publique du titulaire du certificat',
      extensions: 'Champs d\'extension contenant des informations supplémentaires sur l\'usage du certificat'
    },
    
    messages: {
      copiedToClipboard: 'Copié dans le presse-papiers',
      copyError: 'Échec de la copie dans le presse-papiers'
    },
    
    pkcs12: {
      passwordPrompt: 'Veuillez entrer le mot de passe du fichier PKCS#12',
      noPassword: 'Aucun mot de passe'
    },
    
    keyUsages: {
      digitalSignature: 'Signature numérique',
      nonRepudiation: 'Non-répudiation',
      keyEncipherment: 'Chiffrement de clé',
      dataEncipherment: 'Chiffrement de données',
      keyAgreement: 'Accord de clé',
      keyCertSign: 'Signature de certificat',
      crlSign: 'Signature CRL',
      encipherOnly: 'Chiffrement uniquement',
      decipherOnly: 'Déchiffrement uniquement'
    },
    
    article: {
      title: 'Analyseur de certificats X.509 : Inspection et validation des certificats SSL/TLS',
      introduction: {
        title: 'Qu\'est-ce qu\'un analyseur de certificats X.509 ?',
        p1: 'L\'<strong>analyseur de certificats X.509</strong> est un outil puissant qui aide les professionnels de la sécurité, développeurs web et administrateurs IT à analyser les certificats numériques utilisés dans les protocoles SSL/TLS. Notre outil en ligne gratuit fournit une analyse complète des composants du certificat, de son état de validité et de ses caractéristiques de sécurité, sans nécessiter d\'installation de logiciel.',
        p2: 'Les certificats numériques sont essentiels pour les communications réseau sécurisées, établissant une connexion de confiance entre navigateurs et serveurs. Cependant, résoudre les problèmes liés aux certificats nécessite de comprendre leur structure complexe et leurs données encodées. L\'analyseur de certificats X.509 simplifie ce processus en décomposant les données brutes du certificat en informations lisibles, permettant d\'identifier rapidement les problèmes et de vérifier l\'authenticité du certificat.'
      },
      useCases: {
        title: 'Cas d\'utilisation courants',
        case1: '<strong>Validation de certificats SSL/TLS</strong> : Vérifier l\'authenticité et l\'intégrité des certificats de site web avant déploiement.',
        case2: '<strong>Surveillance d\'expiration</strong> : Vérifier les dates de validité pour prévenir les interruptions de service.',
        case3: '<strong>Validation de chaîne de certificats</strong> : Vérifier les relations de confiance entre les certificats.',
        case4: '<strong>Dépannage de configuration</strong> : Identifier les erreurs de configuration causant des avertissements ou problèmes de connexion.',
        case5: '<strong>Vérification de signatures</strong> : Examiner les algorithmes de signature et paramètres de clé publique pour l\'évaluation de sécurité.'
      },
      faq: {
        title: 'FAQ sur les certificats X.509',
        q1: 'Quelles informations puis-je extraire d\'un certificat X.509 ?',
        a1: 'Notre <strong>analyseur de certificats</strong> permet d\'extraire des informations complètes incluant les détails de l\'émetteur, du sujet, de la période de validité, des paramètres de clé publique, des extensions (comme les noms alternatifs du sujet), des algorithmes de signature et des empreintes du certificat. L\'outil fournit également des indicateurs visuels de l\'état du certificat et de sa date d\'expiration, facilitant l\'identification des certificats nécessitant un renouvellement.',
        q2: 'Comment savoir si mon certificat est approuvé par les navigateurs ?',
        a2: 'Les navigateurs font généralement confiance aux certificats émis par une autorité de certification (CA) reconnue formant une chaîne de confiance valide. Notre outil aide à visualiser la chaîne de certificats et à vérifier la validité de chaque certificat. Les indicateurs clés incluent l\'émetteur (doit être une CA de confiance), les dates de validité (non expirées), les contraintes de base correctes (pour les certificats intermédiaires) et les extensions d\'usage de clé appropriées. La confiance des navigateurs dépend également du fait que le certificat n\'a pas été révoqué, vérifiable via les informations OCSP ou CRL dans le certificat.',
        q3: 'Quelle est la différence entre les formats PEM et DER ?',
        a3: 'PEM (Privacy-Enhanced Mail) et DER (Distinguished Encoding Rules) sont deux formats courants pour les certificats X.509. Le <strong>format PEM</strong> est encodé en Base64, commence par "-----BEGIN CERTIFICATE-----" et est lisible par l\'homme. Il est couramment utilisé pour les serveurs web et emails. Le <strong>format DER</strong> est un encodage binaire, non lisible par l\'homme mais plus compact. Notre outil supporte automatiquement ces deux formats, détectant et analysant le format approprié sans sélection manuelle.',
        q4: 'Comment vérifier si mon certificat supporte des fonctionnalités TLS spécifiques ?',
        a4: 'Pour vérifier le support des fonctionnalités TLS dans un certificat, utilisez notre analyseur pour examiner les extensions <strong>d\'usage étendu de la clé</strong> et <strong>d\'usage de la clé</strong>. Pour l\'authentification serveur (serveurs web), cherchez la valeur "Authentification serveur" (1.3.6.1.5.5.7.3.1) dans les usages étendus. L\'extension d\'usage de la clé indique les opérations permises comme les signatures numériques ou le chiffrement de clé. Vérifiez également l\'algorithme de signature pour vous assurer qu\'il utilise des algorithmes modernes et sécurisés (comme SHA-256 avec RSA ou ECDSA) plutôt que des algorithmes obsolètes (comme SHA-1 ou MD5).',
        q5: 'Que faire si mon certificat est sur le point d\'expirer ?',
        a5: 'Si notre <strong>analyseur de certificats</strong> indique que votre certificat est sur le point d\'expirer (généralement dans les 30 jours), vous devriez immédiatement le renouveler auprès de votre fournisseur ou autorité de certification. Le processus de renouvellement inclut généralement : 1) générer une nouvelle demande de signature de certificat (CSR), 2) la soumettre à votre CA, 3) compléter les exigences de validation, et 4) installer le nouveau certificat sur votre serveur. Nous recommandons de commencer ce processus au moins 2-4 semaines avant l\'expiration pour éviter des interruptions de service ou des avertissements de sécurité pour les utilisateurs.'
      },
      tutorial: {
        title: 'Guide d\'utilisation de l\'analyseur de certificats X.509',
        step1: {
          title: 'Télécharger ou coller votre certificat',
          content: 'Commencez par télécharger un fichier de certificat (.crt, .cer, .pem ou .der) via l\'interface de téléchargement, ou collez directement le texte du certificat encodé en PEM dans la zone de saisie. Notre outil supporte le glisser-déposer pour faciliter le téléchargement. Si vous n\'avez pas de certificat à analyser, vous pouvez cliquer sur le bouton "Charger un exemple" pour voir comment l\'outil traite un certificat de démonstration.'
        },
        step2: {
          title: 'Analyser le certificat',
          content: 'Après avoir chargé le certificat, cliquez sur le bouton "Analyser le certificat". Notre outil détectera automatiquement le format (PEM ou DER) et analysera les données du certificat. Le traitement s\'effectue entièrement dans votre navigateur, garantissant que vos données de certificat ne quittent pas votre appareil - ce qui en fait un choix sûr pour analyser des certificats sensibles.'
        },
        step3: {
          title: 'Examiner les détails du certificat',
          content: 'Après analyse, l\'outil affichera des informations complètes sur le certificat sous forme d\'onglets faciles à naviguer. L\'onglet "Informations de base" montre les détails principaux comme la période de validité, le numéro de série et l\'algorithme de signature. Des indicateurs visuels montrent clairement si le certificat est valide, sur le point d\'expirer ou déjà expiré. Vous pouvez explorer des informations plus détaillées dans des onglets dédiés, incluant le sujet et l\'émetteur, les extensions, la clé publique, etc.'
        },
        step4: {
          title: 'Exporter et télécharger des rapports',
          content: 'Pour sauvegarder ou partager votre analyse de certificat, utilisez les fonctions d\'exportation en bas des résultats. Vous pouvez télécharger un rapport complet dans différents formats (PDF, TXT, HTML ou JSON), ou copier des sections spécifiques dans votre presse-papiers. Ces rapports sont précieux pour la documentation, la conformité ou le partage avec des membres de l\'équipe pendant le dépannage.'
        }
      },
      resources: {
        title: 'Ressources supplémentaires',
        intro: 'Étendez vos connaissances sur les certificats X.509 et les sujets de sécurité associés avec ces ressources utiles :',
        relatedTools: 'Outils de sécurité associés',
        tool1: 'Générateur de hash - Crée des hashs cryptographiques pour la vérification de données',
        tool2: 'Encodeur/décodeur Base64 - Convertit entre formats binaire et Base64',
        tool3: 'Décodeur JWT - Analyse les jetons Web JSON utilisés pour l\'authentification',
        externalLinks: 'Références externes',
        external1: 'RFC 5280 de l\'IETF - Certificats d\'infrastructure à clé publique X.509',
        external2: 'Wikipedia - Aperçu du standard X.509',
        external3: 'SSL.com - Qu\'est-ce qu\'un certificat X.509 ?'
      },
      conclusion: {
        title: 'Conclusion',
        content: 'L\'<strong>analyseur de certificats X.509</strong> est un outil indispensable pour quiconque travaille avec des certificats numériques et des communications sécurisées. En fournissant des informations claires et détaillées sur la structure et la validité des certificats, notre outil vous aide à garantir que vos implémentations SSL/TLS sont sécurisées et sans erreur. Que vous soyez un professionnel de la sécurité effectuant un audit, un développeur web résolvant des problèmes HTTPS, ou un administrateur IT gérant des déploiements de certificats, cet analyseur simplifie l\'analyse des certificats et améliore vos pratiques de sécurité.'
      }
    }
  }