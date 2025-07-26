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

    listGroups: {
        common: 'Algorithmes courants',
        sha2: 'Famille SHA-2',
        sha3: 'Famille SHA-3',
        other: 'Autres algorithmes'
    },

    metaTitle: 'Calculateur de hachage en ligne - Générer et vérifier des valeurs de hachage cryptographiques',
    metaDescription: 'Outil gratuit de calcul de hachage en ligne pour générer et vérifier des valeurs de hachage cryptographiques pour du texte ou des fichiers. Prend en charge plusieurs algorithmes incluant {algorithms}.'
};