export default {
    name: "Générateur de paires de clés RSA",
    description: "Génère en masse des paires de clés RSA avec des longueurs personnalisables, affichant clairement les informations structurelles des clés publiques et privées, incluant le module (m), l'exposant public (e), l'exposant privé (d), les facteurs premiers (p, q), et les inverses modulaires de l'exposant privé (dp, dq, coef)",
    settings: "Paramètres de génération",
    keySize: "Longueur de clé",
    bits: "bits",
    keySizeHint: "La longueur de clé doit être comprise entre 256 et 16384 bits, et doit être un multiple de 8",
    outputFormat: "Format de sortie",
    keyPairCount: "Nombre de paires de clés",
    generate: "Générer des paires de clés",
    generating: "Génération en cours",
    results: "Paires de clés générées",
    noResults: "Aucune paire de clés générée. Veuillez configurer les paramètres et cliquer sur \"Générer des paires de clés\".",
    keyPair: "Paire de clés",
    publicKey: "Clé publique",
    privateKey: "Clé privée",
    components: "Composants de clé",
    exportAllAsPem: "Tout exporter au format PEM",
    exportAllAsPkcs8: "Tout exporter au format PKCS#8",
    copyAll: "Tout copier",
    copied: "Copié dans le presse-papiers !",
    generationError: "Erreur lors de la génération des paires de clés. Veuillez réessayer.",
    aboutRsa: "À propos des paires de clés RSA",
    rsaDescription: "RSA (Rivest–Shamir–Adleman) est un algorithme de cryptographie à clé publique qui utilise une paire de clés : une clé publique pour chiffrer et une clé privée pour déchiffrer. RSA est largement utilisé pour la transmission sécurisée de données, les signatures numériques et l'échange de clés.",
    keySizeTitle: "Recommandations de longueur de clé",
    keySize1024: "1024 bits : non recommandé pour les données sensibles (considéré comme peu sécurisé)",
    keySize2048: "2048 bits : longueur minimale recommandée pour un usage général",
    keySize4096: "4096 bits : recommandé pour une sécurité maximale ou des applications sensibles",
    keyComponentsTitle: "Explication des composants de clé",
    modulusDesc: "Produit de deux grands nombres premiers p et q",
    publicExponentDesc: "Exposant public (généralement un petit nombre premier, souvent 65537)",
    privateExponentDesc: "Exposant privé utilisé pour le déchiffrement",
    primesDesc: "Deux grands nombres premiers utilisés pour générer les clés",
    crtParamsDesc: "Paramètres du théorème des restes chinois, utilisés pour accélérer le processus de déchiffrement",
    article: {
      title: "Générateur de paires de clés RSA : Créez des clés de chiffrement sécurisées en ligne",
      intro: "<strong>Le générateur de paires de clés RSA</strong> est un outil en ligne puissant qui génère des paires de clés publiques et privées RSA hautement sécurisées avec des longueurs personnalisables (de 256 à 16384 bits). RSA (Rivest-Shamir-Adleman) est l'un des algorithmes de chiffrement asymétrique les plus utilisés au monde, formant la base des communications sécurisées sur Internet et dans les systèmes d'entreprise. Notre outil rend la création de ces composants cryptographiques essentiels simple, facile à utiliser et sécurisée.",
      
      featuresTitle: "Fonctionnalités clés du générateur de paires de clés RSA",
      feature1: "<strong>Options flexibles de longueur de clé</strong> : Générez des clés RSA de 256 à 16384 bits pour répondre à vos besoins de sécurité spécifiques.",
      feature2: "<strong>Plusieurs formats de sortie</strong> : Exportez les clés dans des formats standards, incluant PEM, PKCS#8, hexadécimal et encodage Base64.",
      feature3: "<strong>Génération en masse</strong> : Créez simultanément plusieurs paires de clés à des fins de test ou de déploiement.",
      feature4: "<strong>Visualisation des composants</strong> : Examinez les composants mathématiques des clés, incluant le module, les exposants, les facteurs premiers et les paramètres CRT.",
      feature5: "<strong>Traitement côté client</strong> : Toute la génération de clés se fait dans votre navigateur, les données cryptographiques sensibles ne quittent jamais votre appareil.",
      
      useCasesTitle: "Cas d'utilisation pratiques des paires de clés RSA",
      
      useCase1Title: "Communication sécurisée et chiffrement de données",
      useCase1Desc: "Les paires de clés RSA sont la base de l'établissement de canaux de communication sécurisés sur des réseaux non sécurisés. La clé publique peut être librement partagée, permettant à d'autres de chiffrer des messages que seul le détenteur de la clé privée peut déchiffrer. Ce système de <strong>chiffrement RSA</strong> sous-tend les technologies comme SSL/TLS pour les sites HTTPS, les systèmes de messagerie sécurisée et les réseaux privés virtuels (VPN).",
      
      useCase2Title: "Signature numérique et authentification de documents",
      useCase2Desc: "RSA permet des <strong>signatures numériques</strong> où vous pouvez utiliser votre clé privée pour signer un document, permettant à toute personne disposant de votre clé publique de vérifier que le document a bien été signé par vous et n'a pas été altéré. Ceci est largement utilisé dans les certificats de signature de code, les transactions financières, les documents juridiques et la technologie blockchain.",
      
      useCase3Title: "Authentification et contrôle d'accès",
      useCase3Desc: "Les paires de clés RSA fournissent un mécanisme robuste pour les systèmes d'<strong>authentification sécurisée</strong>. SSH (Secure Shell) utilise des clés RSA pour les connexions distantes sans mot de passe aux serveurs. Les certificats clients dans des environnements comme l'authentification TLS mutuelle s'appuient également sur des paires de clés RSA pour vérifier de manière sécurisée l'identité des clients.",
      
      useCase4Title: "Communication API sécurisée et signature de jetons",
      useCase4Desc: "Les applications modernes et les microservices utilisent fréquemment des clés RSA pour <strong>sécuriser les communications API</strong> et signer des jetons d'authentification comme les JWT (JSON Web Tokens). La nature asymétrique de RSA permet de vérifier de manière sécurisée les jetons dans des systèmes distribués sans avoir à partager de clés.",
      
      relatedToolsText: "Vous pourriez également trouver utiles ces outils cryptographiques associés :",
      relatedTool1: "Calculateur de hachage - Génère et vérifie des valeurs de hachage pour l'intégrité des données",
      relatedTool2: "Générateur de code de crédit social unifié - Crée des codes d'enregistrement d'entreprise chinois valides",
      
      tutorialTitle: "Comment utiliser le générateur de paires de clés RSA",
      
      step1Title: "Étape 1 : Choisir la longueur de clé",
      step1Desc: "Commencez par sélectionner la longueur de clé souhaitée (en bits). Pour des besoins de sécurité généraux, il est recommandé d'utiliser au moins une clé de 2048 bits comme standard minimal. Pour des applications nécessitant une sécurité plus élevée, choisissez des clés de 4096 bits ou plus. Gardez à l'esprit que des clés plus grandes offrent une meilleure sécurité mais nécessitent plus de ressources de calcul pour la génération et l'utilisation.",
      
      step2Title: "Étape 2 : Choisir le format de sortie",
      step2Desc: "Sélectionnez votre format de sortie préféré dans le menu déroulant. PEM est le format le plus largement compatible, reconnaissable par l'en-tête '-----BEGIN RSA PRIVATE KEY-----'. PKCS#8 est un format plus moderne supporté par la plupart des systèmes actuels. Les encodages hexadécimal et Base64 sont utiles pour des besoins spécifiques de programmation ou d'intégration système.",
      
      step3Title: "Étape 3 : Spécifier le nombre de paires de clés",
      step3Desc: "Si vous avez besoin de plusieurs paires de clés, ajustez la quantité à l'aide du champ de saisie. Ceci est particulièrement utile pour des environnements de test ou le déploiement simultané de plusieurs systèmes de sécurité.",
      
      step4Title: "Étape 4 : Générer et protéger vos clés",
      step4Desc: "Cliquez sur le bouton \"Générer des paires de clés\" et attendez que le processus se termine. Pour des longueurs de clé plus importantes, cela peut prendre un certain temps. Une fois générées, vous pouvez visualiser, copier ou exporter vos clés. Assurez-vous de stocker votre clé privée de manière sécurisée et ne la partagez jamais avec des parties non autorisées.",
      
      faqTitle: "Questions fréquentes sur les paires de clés RSA",
      
      faq1Question: "Qu'est-ce qu'une paire de clés RSA ? Pourquoi dois-je en générer ?",
      faq1Answer: "Une paire de clés RSA est composée d'une clé publique et d'une clé privée, formant la base du chiffrement asymétrique. La clé publique sert à chiffrer des données ou vérifier des signatures, tandis que la clé privée sert à déchiffrer des données ou créer des signatures. Vous avez besoin de générer des paires de clés RSA pour implémenter des fonctionnalités comme la communication sécurisée, le chiffrement de données, les signatures numériques et l'authentification.",
      
      faq2Question: "Quelle longueur de clé RSA dois-je choisir pour une sécurité optimale ?",
      faq2Answer: "Pour garantir la sécurité, il est actuellement recommandé d'utiliser des clés RSA d'au moins 2048 bits. Pour un usage général, les clés de 2048 bits offrent une sécurité suffisante ; pour des données sensibles nécessitant une protection à long terme ou des systèmes à exigences de sécurité élevées, il est recommandé d'utiliser des clés de 4096 bits ou plus. Plus la clé est longue, plus la sécurité est élevée, mais la consommation de ressources de calcul est également plus importante.",
      
      faq3Question: "Quelle est la différence entre les formats PEM et PKCS#8 ?",
      faq3Answer: "Les formats PEM et PKCS#8 sont deux méthodes courantes de stockage et de transmission des clés RSA. Le format PEM utilise un encodage BASE64, les fichiers de clé commençant par '-----BEGIN RSA PRIVATE KEY-----' ; tandis que PKCS#8 est un format plus générique capable de stocker divers types de clés privées, les fichiers commençant par '-----BEGIN PRIVATE KEY-----'. La plupart des systèmes modernes supportent le format PKCS#8, mais certains systèmes plus anciens peuvent ne supporter que le format PEM traditionnel.",
      
      faq4Question: "Comment stocker de manière sécurisée une clé privée RSA générée ?",
      faq4Answer: "Les clés privées RSA doivent être protégées de manière adéquate contre tout accès non autorisé. Les méthodes de stockage sécurisé recommandées incluent : l'utilisation d'un gestionnaire de mots de passe, de dispositifs de stockage chiffrés, de modules de sécurité matériels (HSM) ou de systèmes de gestion de clés. Les fichiers de clés privées doivent être protégés par un mot de passe fort et des permissions d'accès appropriées. De plus, il est important de créer des sauvegardes, mais en veillant à ce qu'elles soient également protégées.",
      
      faq5Question: "Pour quelles applications concrètes les paires de clés RSA générées peuvent-elles être utilisées ?",
      faq5Answer: "Les paires de clés RSA sont largement utilisées dans divers scénarios de sécurité : certificats SSL/TLS et sécurité des sites HTTPS ; connexion SSH sécurisée à distance ; vérification par signature numérique de l'authenticité des fichiers ou du code ; communication par messagerie sécurisée (S/MIME) ; VPN d'entreprise et systèmes d'authentification sécurisés ; blockchain et portefeuilles de cryptomonnaies ; ainsi que l'authentification API et la génération de jetons sécurisés.",
      
      referencesTitle: "Références et lectures complémentaires",
      reference1: "Publication spéciale NIST 800-57 : Recommandations pour la gestion des clés",
      reference2: "RFC 8017 : PKCS #1 : Spécifications du chiffrement RSA version 2.2",
      reference3: "FIPS 186-5 : Standard de signature numérique (DSS)",
      
      conclusionTitle: "Conclusion",
      conclusionText: "<strong>Le générateur de paires de clés RSA</strong> offre une méthode pratique et sécurisée pour créer les clés de chiffrement nécessaires à la sécurité numérique moderne. Que vous protégiez des communications réseau, implémentiez des systèmes d'authentification ou signiez des documents sensibles, des paires de clés RSA correctement générées constituent la base de ces mesures de sécurité. En utilisant notre outil, vous pouvez générer rapidement des clés avec une force et un format appropriés pour répondre à vos besoins d'application spécifiques, tout en garantissant que vos matériels cryptographiques restent privés et sécurisés."
    }
  }