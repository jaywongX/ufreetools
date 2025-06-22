export default {
    name: 'Calculateur de hachage en ligne | Prend en charge SHA-256, MD5, SHA-3, BLAKE3, SM3 et bien plus',
    description: 'Calculateur de hachage en ligne gratuit prenant en charge SHA-256, MD5, SHA-3, BLAKE3, SM3 et autres algorithmes de chiffrement et de vérification, idéal pour la vérification d\'intégrité des fichiers et le traitement sécurisé des données.',
    input: {
        title: 'Entrée',
        text: 'Saisie de texte',
        file: 'Saisie de fichier',
        textPlaceholder: 'Entrez le texte à hacher ici...',
        fileSelect: 'Sélectionner un fichier',
        fileDrop: 'Glissez-déposez un fichier ici ou cliquez pour téléverser',
        fileSelected: 'Fichier sélectionné : {name}',
        fileSize: '{size}',
        removeFile: 'Supprimer le fichier',
        localProcessing: 'Le fichier sera traité localement et ne sera pas envoyé au serveur',
        encoding: 'Encodage',
        selectAlgorithm: 'Sélectionner un algorithme de hachage',
        utf8: 'UTF-8',
        ascii: 'ASCII',
        latin1: 'Latin1',
        calculate: 'Calculer le hachage',
        calculating: 'Calcul en cours...',
        clear: 'Effacer l\'entrée',
        hashValue: 'Valeur de hachage'
    },
    algorithms: {
        title: 'Algorithmes',
        selectAll: 'Tout sélectionner',
        deselectAll: 'Tout désélectionner',
        md5: 'MD5',
        sha1: 'SHA-1',
        sha224: 'SHA-224',
        sha256: 'SHA-256',
        sha384: 'SHA-384',
        sha512: 'SHA-512',
        sha3_224: 'SHA3-224',
        sha3_256: 'SHA3-256',
        sha3_384: 'SHA3-384',
        sha3_512: 'SHA3-512',
        ripemd160: 'RIPEMD-160',
        blake2b: 'BLAKE2b',
        blake2s: 'BLAKE2s',
        blake3: 'BLAKE3',
        keccak224: 'Keccak-224',
        keccak256: 'Keccak-256',
        keccak384: 'Keccak-384',
        keccak512: 'Keccak-512',
        whirlpool: 'Whirlpool',
        crc32: 'CRC32',
        hmac: 'Options HMAC',
        key: 'Clé HMAC',
        keyPlaceholder: 'Entrez une clé HMAC'
    },
    results: {
        title: 'Résultats de hachage',
        algorithm: 'Algorithme',
        digest: 'Empreinte',
        noInput: 'Entrez du texte ou sélectionnez un fichier pour calculer le hachage',
        calculating: 'Calcul en cours...',
        copy: 'Copier',
        copied: 'Copié dans le presse-papiers',
        copyFailed: 'Échec de la copie, veuillez copier manuellement',
        copyAll: 'Tout copier',
        download: 'Télécharger les résultats',
        fileInfo: 'Informations sur le fichier',
        fileName: 'Nom',
        fileSize: 'Taille',
        fileType: 'Type',
        lastModified: 'Dernière modification',
        hexFormat: 'Format hexadécimal',
        base64Format: 'Format Base64',
        upperHexFormat: 'Format hexadécimal majuscule',
        hashValue: 'Valeur de hachage',
        allHashesTitle: 'Résultats pour tous les algorithmes',
        hexFormat: 'Format hexadécimal',
        algorithm: 'Algorithme',
        digest: 'Valeur de hachage',
        export: 'Exporter en CSV',
        calculating: 'Calcul en cours...',
        copyToClipboard: 'Copier dans le presse-papiers',
        allHashesTitle: 'Valeurs de hachage pour tous les algorithmes',
    },
    verification: {
        title: 'Vérification de hachage',
        inputVerifyHash: 'Entrez la valeur de hachage à vérifier',
        placeholder: 'Entrez une valeur de hachage pour comparaison...',
        paste: 'Coller un hachage pour vérification',
        matches: 'Hachage correspondant !',
        doesNotMatch: 'Hachage non correspondant',
        notFound: 'Algorithme non trouvé',
        verify: 'Vérifier',
        autoDetect: 'Détection automatique de l\'algorithme',
        result: 'Résultat de vérification'
    },
    options: {
        title: 'Options',
        uppercase: 'Sortie en majuscules',
        showTiming: 'Afficher le temps de calcul',
        autoCalculate: 'Calcul automatique',
        formatOutput: 'Formater la sortie longue',
        binaryOutput: 'Vue binaire (pour fichiers non textuels)',
        compareHashes: 'Comparer des valeurs de hachage',
        hmacMode: 'Activer le mode HMAC',
        autoCalculate: 'Calcul automatique',
        showAllHashes: 'Afficher les hachages de tous les algorithmes'
    },
    tools: {
        title: 'Outils',
        batchProcessing: 'Traitement par lots',
        fileHashTool: 'Outil de hachage de fichiers',
        hashIdentifier: 'Identificateur de type de hachage',
        hmacGenerator: 'Générateur HMAC',
        checksumVerifier: 'Vérificateur de somme de contrôle',
        passwordHasher: 'Hacheur de mots de passe'
    },
    batchTool: {
        title: 'Traitement par lots',
        addFiles: 'Ajouter des fichiers',
        processFiles: 'Traiter les fichiers',
        clearAll: 'Tout effacer',
        fileName: 'Nom du fichier',
        algorithm: 'Algorithme',
        status: 'Statut',
        actions: 'Actions',
        waiting: 'En attente',
        processing: 'En traitement',
        complete: 'Terminé',
        failed: 'Échec',
        remove: 'Supprimer',
        filesSelected: '{count} fichier(s) sélectionné(s)',
        exportResults: 'Exporter les résultats',
        selectAlgorithm: 'Sélectionner un algorithme pour tous les fichiers'
    },
    messages: {
        fileTooBig: 'Fichier trop volumineux. La taille maximale autorisée est de 100 Mo.',
        hashCalculated: 'Hachage calculé avec succès',
        invalidInput: 'Entrée invalide',
        readError: 'Impossible de lire le fichier',
        processingError: 'Erreur lors du traitement du fichier : {error}',
        algorithmNotAvailable: 'Algorithme non disponible. Veuillez installer les bibliothèques requises.',
        algorithmFallback: '{algorithm} non disponible, utilisation de {fallback} comme alternative',
        moduleNotReady: 'Le module {name} n\'est pas prêt',
        algorithmError: 'Erreur {algorithm} : {error}'
    },
    security: {
        warning: 'L\'utilisation d\'outils de hachage sur des connexions HTTP non sécurisées présente des risques'
    },
    algorithmDetails: {
        title: 'À propos des algorithmes de hachage',
        usage: 'Utilisations courantes',
        safe: 'Sécurité',
        md2: {
            name: 'MD2 (128 bits)',
            description: 'MD2 est une fonction de hachage largement utilisée produisant une valeur de hachage de 128 bits (16 octets), généralement représentée par 32 caractères hexadécimaux.',
            usage: 'Vérification d\'intégrité des fichiers, stockage de mots de passe (non sécurisé)',
            security: 'Prouvé vulnérable aux collisions ; ne doit pas être utilisé dans des contextes sensibles.'
        },
        md4: {
            name: 'MD4 (128 bits)',
            description: 'MD4 est une fonction de hachage largement utilisée produisant une valeur de hachage de 128 bits (16 octets), généralement représentée par 32 caractères hexadécimaux.',
            usage: 'Vérification d\'intégrité des fichiers, stockage de mots de passe (non sécurisé)',
            security: 'Prouvé vulnérable aux collisions ; ne doit pas être utilisé dans des contextes sensibles.'
        },
        md5: {
            name: 'MD5 (128 bits)',
            description: 'MD5 est une fonction de hachage largement utilisée produisant une valeur de hachage de 128 bits (16 octets), généralement représentée par 32 caractères hexadécimaux.',
            usage: 'Vérification d\'intégrité des fichiers, stockage de mots de passe (non sécurisé)',
            security: 'Prouvé vulnérable aux collisions ; ne doit pas être utilisé dans des contextes sensibles.'
        },
        sha1: {
            name: 'SHA-1 (160 bits)',
            description: 'SHA-1 est une fonction de hachage cryptographique produisant une valeur de hachage de 160 bits (20 octets), généralement représentée par 40 caractères hexadécimaux.',
            usage: 'Systèmes de contrôle de version (comme Git), vérification d\'intégrité des fichiers',
            security: 'Vulnérabilités aux attaques par collision connues ; non recommandé pour les applications critiques.'
        },
        sha224: {
            name: 'SHA-224 (224 bits)',
            description: 'SHA-224 fait partie de la famille SHA-2 et génère une valeur de hachage de 224 bits (28 octets).',
            usage: 'Cas où l\'espace est limité mais une sécurité élevée est nécessaire',
            security: 'Offre une bonne sécurité, version tronquée de SHA-256'
        },
        sha256: {
            name: 'SHA-256 (256 bits)',
            description: 'SHA-256 appartient à la famille SHA-2 et produit une valeur de hachage de 256 bits (32 octets), généralement représentée par 64 caractères hexadécimaux.',
            usage: 'Signatures numériques, certificats numériques, stockage de mots de passe, blockchain',
            security: 'Actuellement considéré comme sécurisé, largement utilisé dans des contextes haute sécurité.'
        },
        dsha256: {
            name: 'Double SHA-256',
            description: 'Double SHA-256 est une fonction de hachage cryptographique appliquant SHA-256 deux fois de suite, c\'est-à-dire SHA-256(SHA-256(x)).',
            usage: 'Utilisé dans Bitcoin et d\'autres cryptomonnaies pour les hachages de blocs, les ID de transaction et la génération d\'adresses',
            security: 'Offre les mêmes garanties de sécurité que SHA-256 standard mais avec une couche de sécurité supplémentaire'
        },
        sha384: {
            name: 'SHA-384 (384 bits)',
            description: 'SHA-384 est une version tronquée de SHA-512 produisant une valeur de hachage de 384 bits (48 octets).',
            usage: 'Cas nécessitant une sécurité supérieure à SHA-256',
            security: 'Offre une sécurité supérieure à SHA-256, aucune méthode d\'attaque connue.'
        },
        sha512: {
            name: 'SHA-512 (512 bits)',
            description: 'SHA-512 est l\'algorithme standard le plus long de la famille SHA-2, produisant une valeur de hachage de 512 bits (64 octets).',
            usage: 'Applications nécessitant le plus haut niveau de sécurité',
            security: 'Niveau de sécurité maximal, aucune attaque efficace connue.'
        },
        sha512_224: {
            name: 'SHA-512/224 (224 bits)',
            description: 'SHA-512/224 est une variante de SHA-512 avec une sortie tronquée à 224 bits.',
            usage: 'Fournit une longueur identique à SHA-224 mais basée sur la structure interne de SHA-512',
            security: 'Meilleures performances pour les données longues tout en maintenant une sécurité élevée'
        },
        sha512_256: {
            name: 'SHA-512/256 (256 bits)',
            description: 'SHA-512/256 est une variante de SHA-512 avec une sortie tronquée à 256 bits.',
            usage: 'Meilleures performances que SHA-256 sur les systèmes 64 bits',
            security: 'Sécurité équivalente à SHA-256 mais plus efficace sur certains matériels'
        },
        sha3_224: {
            name: 'SHA3-224 (224 bits)',
            description: 'SHA3-224 fait partie de la norme SHA-3 et fournit une sortie de 224 bits.',
            usage: 'Cas nécessitant une résistance aux ordinateurs quantiques avec une sécurité moyenne',
            security: 'Algorithme de hachage sécurisé certifié NIST'
        },
        sha3_256: {
            name: 'SHA3-256 (256 bits)',
            description: 'SHA3-256 fait partie de la norme SHA-3 avec une structure interne complètement différente de la famille SHA-2.',
            usage: 'Applications à long terme résistant aux menaces quantiques',
            security: 'Conçu pour résister aux attaques futures potentielles, y compris les attaques quantiques.'
        },
        sha3_384: {
            name: 'SHA3-384 (384 bits)',
            description: 'SHA3-384 fait partie de la norme SHA-3 et fournit une sortie de 384 bits.',
            usage: 'Cas nécessitant une haute sécurité et une résistance aux ordinateurs quantiques',
            security: 'Sécurité supérieure à SHA3-256, idéal pour les données sensibles'
        },
        sha3_512: {
            name: 'SHA3-512 (512 bits)',
            description: 'SHA3-512 est l\'algorithme de la famille SHA-3 offrant le plus haut niveau de sécurité.',
            usage: 'Cas nécessitant une sécurité extrême et une résistance aux ordinateurs quantiques',
            security: 'Niveau de sécurité maximal, algorithme le plus sécurisé de la famille SHA-3.'
        },
        sm3: {
            name: 'SM3 (256 bits)',
            description: 'SM3 est un standard d\'algorithme de hachage cryptographique publié par l\'Administration chinoise du chiffrement, produisant une sortie de 256 bits.',
            usage: 'Applications cryptographiques commerciales chinoises, certificats numériques et systèmes gouvernementaux électroniques',
            security: 'Conception similaire à SHA-2 mais optimisée pour la résistance aux attaques, largement utilisé en Chine'
        },
        ripemd160: {
            name: 'RIPEMD-160 (160 bits)',
            description: 'RIPEMD-160 est une fonction de hachage développée par le projet européen RIPE, produisant une valeur de hachage de 160 bits.',
            usage: 'Génération d\'adresses Bitcoin, applications blockchain',
            security: 'Plus sécurisé que SHA-1 de même longueur mais moins utilisé.'
        },
        crc32: {
            name: 'CRC32 (32 bits)',
            description: 'CRC32 est une fonction de contrôle de redondance cyclique couramment utilisée pour la détection d\'erreurs.',
            usage: 'Vérification d\'intégrité des données, communications réseau, validation des transferts de données',
            security: 'Non adapté aux contextes cryptographiques, principalement pour la détection d\'erreurs'
        },
        murmur3_x86_32: {
            name: 'MurmurHash3 x86 (32 bits)',
            description: 'MurmurHash3 est une fonction de hachage non cryptographique réputée pour ses performances et son faible taux de collision, version 32 bits adaptée aux applications nécessitant vitesse et efficacité spatiale.',
            usage: 'Tables de hachage, filtres de Bloom, systèmes de cache, partitionnement de données',
            security: 'Algorithme non cryptographique, non adapté aux applications de sécurité mais excellent pour les cas critiques en performance'
        },
        murmur3_x86_128: {
            name: 'MurmurHash3 x86 (128 bits)',
            description: 'Variante 128 bits de MurmurHash3 offrant un espace de hachage plus grand et une probabilité de collision plus faible, adaptée aux grands ensembles de données.',
            usage: 'Grandes tables de hachage, déduplication de données, hachage cohérent dans les systèmes distribués, stockage adressable par contenu',
            security: 'Comme la version 32 bits, non cryptographique mais avec une probabilité de collision plus faible'
        },
        murmur3_x64_128: {
            name: 'MurmurHash3 x64 (128 bits)',
            description: 'Variante 128 bits de MurmurHash3 optimisée pour les architectures 64 bits, offrant un espace de hachage plus grand et une probabilité de collision plus faible.',
            usage: 'Grandes tables de hachage, déduplication de données, hachage cohérent dans les systèmes distribués, stockage adressable par contenu',
            security: 'Comme la version 32 bits, non cryptographique mais avec une probabilité de collision plus faible'
        },
        blake2b: {
            name: 'BLAKE2b (512 bits)',
            description: 'BLAKE2b est une fonction de hachage rapide et sécurisée optimisée pour les architectures CPU modernes.',
            usage: 'Traitement de données à grande échelle, tables de hachage, comparaison de chaînes',
            security: 'Conçu pour la vitesse et une bonne distribution de hachage mais ne garantit pas la sécurité cryptographique'
        },
        blake2s: {
            name: 'BLAKE2s (256 bits)',
            description: 'BLAKE2s est une fonction de hachage rapide et sécurisée optimisée pour les architectures CPU modernes.',
            usage: 'Traitement de données à grande échelle, tables de hachage, comparaison de chaînes',
            security: 'Conçu pour la vitesse et une bonne distribution de hachage mais ne garantit pas la sécurité cryptographique'
        },
        blake3: {
            name: 'BLAKE3 (256 bits)',
            description: 'BLAKE3 est une fonction de hachage rapide et sécurisée optimisée pour les architectures CPU modernes.',
            usage: 'Traitement de données à grande échelle, tables de hachage, comparaison de chaînes',
            security: 'Conçu pour la vitesse et une bonne distribution de hachage mais ne garantit pas la sécurité cryptographique'
        },
        keccak224: {
            name: 'Keccak-224 (224 bits)',
            description: 'Keccak-224 est l\'algorithme original de SHA-3 produisant une valeur de hachage de 224 bits.',
            usage: 'Ethereum et autres applications blockchain, systèmes cryptographiques',
            security: 'Offre une forte sécurité, plus couramment utilisé dans la technologie blockchain que les variantes standardisées SHA-3'
        },
        keccak256: {
            name: 'Keccak-256 (256 bits)',
            description: 'Keccak-256 est la variante la plus utilisée de la famille Keccak produisant une valeur de hachage de 256 bits.',
            usage: 'Contrats intelligents Ethereum, transactions blockchain, signatures numériques',
            security: 'Fiable dans les applications blockchain, légèrement différent de la variante standardisée SHA3-256'
        },
        keccak384: {
            name: 'Keccak-384 (384 bits)',
            description: 'Keccak-384 est une variante de la famille Keccak produisant une valeur de hachage de 384 bits.',
            usage: 'Applications nécessitant une sécurité supérieure à Keccak-256',
            security: 'Très forte sécurité mais moins utilisé que Keccak-256'
        },
        keccak512: {
            name: 'Keccak-512 (512 bits)',
            description: 'Keccak-512 est l\'algorithme standard le plus long de la famille Keccak produisant une valeur de hachage de 512 bits.',
            usage: 'Applications haute sécurité nécessitant une résistance maximale aux collisions',
            security: 'Niveau de sécurité maximal dans la famille Keccak, adapté aux données les plus sensibles'
        },
        shake128: {
            name: 'SHAKE128 (128 bits)',
            description: 'SHAKE128 fait partie de la famille SHA-3 et peut produire des sorties de longueur variable, générant par défaut une valeur de hachage de 256 bits.',
            usage: 'Applications cryptographiques nécessitant des sorties de longueur variable, fonctions de dérivation de clé',
            security: 'Bonne sécurité, algorithme de hachage sécurisé certifié NIST'
        },
        shake256: {
            name: 'SHAKE256 (256 bits)',
            description: 'SHAKE256 fait partie de la famille SHA-3 et peut produire des sorties de longueur variable, générant par défaut une valeur de hachage de 512 bits.',
            usage: 'Applications haute sécurité nécessitant des sorties de hachage longues',
            security: 'Garanties de sécurité supérieures à SHAKE128, adapté aux données sensibles'
        },
        cshake128: {
            name: 'cSHAKE128 (sortie à longueur variable personnalisable)',
            description: 'cSHAKE128 est une version personnalisable de SHAKE128 supportant des chaînes et noms de fonction personnalisés, capable de produire des sorties de longueur variable.',
            usage: 'Cas nécessitant des paramètres personnalisés, fonctions de dérivation de clé standard NIST, protocoles cryptographiques',
            security: 'Sécurité équivalente à SHAKE128 avec support de personnalisation au niveau application'
        },
        cshake256: {
            name: 'cSHAKE256 (sortie à longueur variable personnalisable)',
            description: 'cSHAKE256 est une version personnalisable de SHAKE256 supportant des chaînes et noms de fonction personnalisés, capable de produire des sorties de longueur variable.',
            usage: 'Cas haute sécurité nécessitant des paramètres personnalisés, fonctions de dérivation certifiées NIST, protocoles cryptographiques',
            security: 'Garanties de sécurité équivalentes à SHAKE256 avec possibilité de personnalisation'
        },
    },
    article: {
        title: "Calculateur de hachage : Générer et vérifier des empreintes cryptographiques",
        intro: "Notre <strong>calculateur de hachage en ligne</strong> offre un moyen simple de générer des valeurs de hachage cryptographiques pour n'importe quel texte ou fichier. Cet outil gratuit prend en charge de nombreux algorithmes incluant MD5, SHA-1, SHA-256, SHA-512, RIPEMD, BLAKE et bien d'autres.",
        features: {
            title: "Comprendre les fonctions de hachage et leurs applications",
            description: "Une <strong>fonction de hachage</strong> est un algorithme mathématique transformant des données d'entrée de toute taille en une chaîne de taille fixe. Le <strong>calculateur de hachage</strong> d'UFreeTools vous aide à calculer instantanément ces empreintes numériques pour la vérification sécurisée, le contrôle d'intégrité des données ou les applications blockchain.<br><br>Contrairement au chiffrement, les fonctions de hachage sont des opérations à sens unique - elles transforment les données en une <strong>empreinte de hachage</strong> unique impossible à inverser pour retrouver l'entrée originale. Une caractéristique clé du hachage cryptographique est qu'un changement minime de l'entrée produit une sortie complètement différente, rendant ces <strong>algorithmes de hachage</strong> idéaux pour vérifier l'intégrité des données et détecter des modifications non autorisées.",
            useCases: {
                title: "Applications pratiques des fonctions de hachage",
                items: [
                    "<strong>Vérification d'intégrité des fichiers</strong> : Avant d'installer un logiciel téléchargé, vous pouvez utiliser notre <strong>calculateur de somme de contrôle</strong> pour comparer son hachage avec celui fourni par le développeur. Cela garantit que vous installez exactement ce qui était prévu, empêchant l'injection de logiciels malveillants.",
                    "<strong>Déduplication de données</strong> : Les systèmes de stockage utilisent des <strong>valeurs de hachage</strong> pour identifier des fichiers dupliqués en comparant leurs signatures numériques, quel que soit leur nom. Notre outil vous aide à calculer rapidement ces identifiants pour vos propres besoins de déduplication.",
                    "<strong>Sécurité des mots de passe</strong> : Les systèmes d'authentification modernes stockent des <strong>hachages de mots de passe</strong> plutôt que les mots de passe eux-mêmes. Bien que notre outil aide à comprendre ce processus, notez que les environnements de production devraient utiliser des fonctions de hachage dédiées avec salage.",
                    "<strong>Investigations numériques</strong> : Les enquêteurs utilisent des <strong>calculateurs de hachage</strong> pour créer des empreintes de fichiers, établissant l'authenticité des preuves. Les valeurs de hachage prouvent que les preuves numériques n'ont pas été modifiées pendant l'enquête.",
                    "<strong>Applications blockchain</strong> : Les <strong>hachages cryptographiques</strong> constituent la base de la technologie blockchain, avec des algorithmes comme SHA-256 et Keccak-256 (utilisés respectivement par Bitcoin et Ethereum) protégeant les enregistrements de transactions dans des chaînes inviolables. Vous pouvez expérimenter avec ces mêmes algorithmes via notre outil.",
                    "<strong>Vérification de contenu</strong> : Les auteurs et créateurs peuvent publier les <strong>empreintes de hachage</strong> de leurs œuvres originales, offrant aux autres un moyen de vérifier qu'ils possèdent la version authentique et non modifiée."
                ]
            },
            toolAdvantages: {
                title: "Avantages de notre calculateur de hachage",
                items: [
                    "Prend en charge plus de 30 algorithmes de hachage, du MD5 aux options avancées comme BLAKE3",
                    "Traitement local garantissant que vos données sensibles ne quittent jamais votre appareil",
                    "Vérification des hachages par rapport à des valeurs attendues pour confirmer l'intégrité des données",
                    "Visualisation des résultats dans plusieurs formats (hexadécimal et Base64)",
                    "Calcul des hachages pour des entrées texte et des fichiers jusqu'à 100 Mo",
                    "Comparaison simultanée des résultats de plusieurs algorithmes"
                ]
            }
        },
        faq: {
            title: "Questions fréquentes sur les fonctions de hachage",
            items: [
                {
                    question: "Quelles sont les différences entre MD5, SHA-1 et SHA-256 ?",
                    answer: "Ce sont différents algorithmes de hachage cryptographique, variant en termes de sécurité et de longueur de sortie. <strong>MD5</strong> génère une valeur de hachage de 128 bits (16 octets), mais est considéré comme cassé cryptographiquement en raison de collisions trouvées. <strong>SHA-1</strong> produit un hachage de 160 bits (20 octets), plus robuste que MD5 mais également déconseillé pour les applications critiques en raison d'attaques théoriques. <strong>SHA-256</strong> appartient à la famille SHA-2, créant des hachages de 256 bits (32 octets) toujours considérés comme sûrs pour la plupart des applications. Pour des usages sensibles, nous recommandons SHA-256 ou des algorithmes plus forts comme SHA-512 ou SHA3, tandis que MD5 et SHA-1 peuvent encore servir pour des usages non sécurisés comme les sommes de contrôle ou la déduplication. Consultez le <a href='https://csrc.nist.gov/projects/hash-functions' target='_blank' rel='noopener noreferrer'>National Institute of Standards and Technology (NIST)</a> pour plus d'informations sur la sécurité des algorithmes de hachage."
                },
                {
                    question: "Quel est le niveau de sécurité des fonctions de hachage cryptographique ?",
                    answer: "La sécurité d'une fonction de hachage dépend de trois propriétés clés : la résistance aux collisions (difficulté à trouver deux entrées produisant le même hachage), la résistance à la préimage (impossibilité de déterminer l'entrée à partir du hachage) et la résistance à la seconde préimage (difficulté à trouver une autre entrée produisant le même hachage qu'une entrée donnée). Les algorithmes modernes comme <strong>SHA-256</strong>, <strong>SHA-512</strong> et <strong>SHA3</strong> sont considérés comme cryptographiquement sûrs, tandis que des algorithmes plus anciens comme MD5 et SHA-1 présentent des vulnérabilités connues. Les standards de sécurité évoluent avec l'augmentation de la puissance de calcul et la découverte de nouvelles méthodes d'attaque. Pour des applications nécessitant une haute sécurité, utilisez toujours les dernières fonctions de hachage recommandées (actuellement SHA-256 ou plus fort), et suivez les avancées cryptographiques via des ressources comme le <a href='https://www.schneier.com/blog/archives/2005/02/cryptanalysis_o.html' target='_blank' rel='noopener noreferrer'>blog cryptographique de Bruce Schneier</a>."
                },
                {
                    question: "Puis-je utiliser le calculateur de hachage pour vérifier l'intégrité des fichiers ?",
                    answer: "Oui, notre <strong>calculateur de hachage en ligne</strong> est parfaitement adapté à la vérification d'intégrité des fichiers. Lors du téléchargement de logiciels, de nombreux fournisseurs publient les sommes de hachage de leurs fichiers. Pour vérifier l'intégrité : 1) Sélectionnez le fichier téléchargé dans notre outil, 2) Choisissez le même algorithme de hachage que celui utilisé par le fournisseur (généralement SHA-256), 3) Calculez le hachage, 4) Comparez avec la valeur publiée. Si elles correspondent exactement, votre fichier est intact et non modifié. Ce processus de vérification protège à la fois contre les corruptions accidentelles lors du téléchargement et contre les éventuelles modifications malveillantes. L'outil traite les fichiers localement dans votre navigateur, ce qui est pratique même pour les gros fichiers tout en préservant la confidentialité et la sécurité. Vous pouvez vérifier les sommes de contrôle de sources comme <a href='https://ubuntu.com/download/desktop/thank-you' target='_blank' rel='noopener noreferrer'>Ubuntu</a> ou <a href='https://www.python.org/downloads/' target='_blank' rel='noopener noreferrer'>Python</a> qui fournissent des hachages pour leurs fichiers d'installation."
                },
                {
                    question: "Ce calculateur de hachage convient-il pour hacher des mots de passe ?",
                    answer: "Bien que notre <strong>générateur de hachage</strong> puisse démontrer le fonctionnement du hachage des mots de passe, pour des implémentations réelles de stockage de mots de passe, vous devriez utiliser des fonctions de hachage dédiées comme bcrypt, Argon2 ou PBKDF2 plutôt que des fonctions de hachage brutes. Ces algorithmes spécialisés intègrent des fonctionnalités de sécurité importantes comme le salage (ajout de données aléatoires à chaque mot de passe avant hachage) et l'étirement de clé (ralentissement intentionnel du processus de hachage) pour se protéger contre les attaques par table arc-en-ciel et les tentatives de force brute. Notre outil est idéal pour des fins éducatives ou pour tester le comportement général du hachage, mais les systèmes de production devraient implémenter des bibliothèques de hachage de mots de passe dédiées avec un salage approprié, un étirement et des bonnes pratiques de sécurité. Pour plus d'informations sur le stockage sécurisé des mots de passe, consultez le <a href='https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html' target='_blank' rel='noopener noreferrer'>OWASP Password Storage Cheat Sheet</a>."
                },
                {
                    question: "Comment comparer ou vérifier des hachages dans différents formats ?",
                    answer: "Notre <strong>outil de vérification de hachage</strong> facilite la comparaison des hachages malgré les différences de format. L'outil affiche les résultats dans plusieurs formats, incluant l'hexadécimal minuscule (le format le plus courant), l'hexadécimal majuscule et l'encodage Base64. Pour vérifier un hachage : 1) Calculez le hachage de vos données, 2) Entrez le hachage à comparer dans la section de vérification, 3) L'outil les comparera automatiquement en gérant correctement la sensibilité à la casse. Même si votre hachage de référence diffère en casse (majuscules vs minuscules) du hachage calculé, cette vérification fonctionnera. Pour des vérifications entre algorithmes, vous devrez recalculer le hachage avec le même algorithme que le hachage de référence, car différents algorithmes produisent des sorties radicalement différentes même pour les mêmes données d'entrée."
                },
                {
                    question: "Quel algorithme de hachage devrais-je utiliser pour un besoin spécifique ?",
                    answer: "Le meilleur algorithme dépend de vos besoins spécifiques :<br><strong>Usage général et haute sécurité</strong> : SHA-256 offre un bon équilibre entre sécurité et performance.<br><strong>Applications blockchain</strong> : SHA-256 (Bitcoin) ou Keccak-256 (Ethereum) sont des standards industriels.<br><strong>Données extrêmement sensibles</strong> : SHA-512 ou SHA3-512 offrent le plus haut niveau de sécurité.<br><strong>Applications critiques en performance</strong> : BLAKE2 ou BLAKE3 fournissent sécurité et vitesse exceptionnelle.<br><strong>Compatibilité avec des systèmes hérités</strong> : SHA-1 ou MD5 peuvent être nécessaires, mais comprenez leurs limites de sécurité.<br><strong>Sommes de contrôle de fichiers</strong> : CRC32 est rapide mais seulement pour la détection d'erreurs, sans sécurité ; SHA-256 est recommandé pour des sommes de contrôle sécurisées.<br>En cas de doute, SHA-256 est un choix fiable par défaut pour la plupart des applications modernes nécessitant de la sécurité. Essayez notre <a href='https://www.ufreetools.com/tools/hash-calculator' target='_blank'>calculateur de hachage</a> pour expérimenter avec différents algorithmes et comparer leurs sorties."
                }
            ]
        },
        guide: {
            title: "Guide étape par étape pour utiliser le calculateur de hachage",
            intro: "Suivez ces étapes simples pour générer et vérifier des valeurs de hachage pour du texte ou des fichiers :",
            step1: "<strong>Sélectionnez le type d'entrée</strong> : Selon le contenu à hacher, choisissez entre les options \"texte\" ou \"fichier\". La saisie texte convient aux chaînes de caractères, mots de passe ou petits blocs de données, tandis que l'entrée fichier permet de traiter des fichiers entiers de tout type.",
            step2: "<strong>Choisissez l'algorithme de hachage</strong> : Sélectionnez un <strong>algorithme de hachage</strong> approprié dans le menu déroulant. Pour un usage général et une haute sécurité, SHA-256 est recommandé. Pour la compatibilité avec des systèmes spécifiques, vous pourriez avoir besoin de choisir MD5, SHA-1 ou un autre algorithme.",
            step3: "<strong>Entrez vos données</strong> : Pour une entrée texte, tapez ou collez votre texte dans le champ de saisie. Pour une entrée fichier, cliquez sur la zone de téléversement ou glissez-déposez votre fichier. La <strong>fonction de hachage</strong> traitera ces entrées pour produire une empreinte unique.",
            step4: "<strong>Configurez les options d'encodage</strong> : Si vous utilisez une entrée texte, sélectionnez l'encodage de caractères approprié (UTF-8 est le plus courant et recommandé pour la plupart des textes). Cela garantit que le texte est correctement interprété avant hachage.",
            step5: "<strong>Générez le hachage</strong> : Cliquez sur le bouton \"Calculer le hachage\" pour traiter votre entrée et générer l'<strong>empreinte de hachage</strong>. L'outil calculera la valeur de hachage avec l'algorithme sélectionné et affichera le résultat.",
            step6: "<strong>Consultez et copiez les résultats</strong> : Le hachage calculé sera affiché dans plusieurs formats (hexadécimal et Base64). Utilisez les boutons de copie à côté de chaque format pour copier la valeur de hachage dans le presse-papiers, pour utilisation dans d'autres applications.",
            step7: "<strong>Vérifiez le hachage (optionnel)</strong> : Pour vérifier par rapport à un hachage existant, entrez le hachage de référence dans la section de vérification sous les résultats. Le système le comparera automatiquement avec votre hachage calculé et indiquera s'ils correspondent.",
            additionalTips: "Pour les gros fichiers, le traitement peut prendre un certain temps selon les performances de votre appareil. Rappelez-vous que le traitement s'effectue entièrement dans votre navigateur, donc vos données ne quittent jamais votre ordinateur."
        },
        relatedTools: {
            title: "Outils connexes que vous pourriez trouver utiles",
            tools: [
                {
                    name: "Générateur de mots de passe",
                    description: "Créez des mots de passe forts et sécurisés pour vos comptes",
                    url: "https://www.ufreetools.com/tools/password-generator"
                },
                {
                    name: "Encodeur/Décodeur de texte",
                    description: "Convertissez du texte entre différents encodages comme Base64, URL et HTML",
                    url: "https://www.ufreetools.com/tools/text-encoder-decoder"
                },
                {
                    name: "Convertisseur de fichiers",
                    description: "Convertissez des fichiers entre différents formats",
                    url: "https://www.ufreetools.com/tools/file-converter"
                }
            ]
        },
        conclusion: "Le calculateur de hachage offre un moyen puissant et facile d'utiliser des fonctions de hachage cryptographique pour diverses applications, de la vérification basique d'intégrité de fichiers à des implémentations de sécurité avancées. En fournissant plusieurs algorithmes standards du secteur et une interface conviviale, cet outil comble le fossé entre les concepts cryptographiques complexes et leurs applications pratiques quotidiennes. Que vous soyez un développeur implémentant des fonctionnalités de sécurité, un professionnel de l'informatique vérifiant l'intégrité de logiciels, ou simplement curieux de comprendre le fonctionnement des fonctions de hachage, ce calculateur vous donne un accès immédiat à des fonctionnalités cryptographiques puissantes directement dans votre navigateur. Dans un monde numérique où l'intégrité et la sécurité des données sont devenues des préoccupations majeures tant pour les particuliers que les professionnels, comprendre et utiliser les fonctions de hachage devient de plus en plus important."
    },
    listGroups: {
        common: 'Algorithmes courants',
        sha2: 'Famille SHA-2',
        sha3: 'Famille SHA-3',
        other: 'Autres algorithmes'
    },
    metaTitle: 'Calculateur de hachage en ligne - Générer et vérifier des valeurs de hachage cryptographiques',
    metaDescription: 'Outil gratuit de calcul de hachage en ligne pour générer et vérifier des valeurs de hachage cryptographiques pour du texte ou des fichiers. Prend en charge plusieurs algorithmes incluant {algorithms}.'
}