export default {
    name: "Signature et Vérification RSA",
    description: "Utilisez une clé privée RSA pour signer des données et une clé publique pour vérifier les signatures, prenant en charge plusieurs formats et algorithmes",
    keyInput: "Saisie des clés",
    privateKey: "Clé privée (pour signature)",
    publicKey: "Clé publique (pour vérification)",
    privateKeyPlaceholder: "Entrez une clé privée RSA dans le format sélectionné",
    publicKeyPlaceholder: "Entrez une clé publique RSA ou un certificat dans le format sélectionné",
    generateKeyPair: "Générer une paire de clés",
    extractFromCert: "Extraire d'un certificat",
    clear: "Effacer",
    keySize: "Longueur de clé",
    hashAlgorithm: "Algorithme de hachage",
    paddingScheme: "Schéma de remplissage",
    keyFormat: "Format de clé",
    inputFormat: "Format d'entrée",
    processMode: "Mode de traitement",
    originalData: "Données originales",
    preProcessed: "Pré-hachage",
    sign: "Signer",
    verify: "Vérifier",
    dataToSign: "Données à signer",
    dataToSignPlaceholder: "Entrez le texte ou les données à signer",
    preProcessedDataToSign: "Valeur de hachage à signer",
    preProcessedDataToSignPlaceholder: "Entrez une valeur de hachage en format hexadécimal",
    preprocessOnly: "Prétraitement uniquement (obtenir le hachage)",
    preprocessedData: "Données prétraitées",
    hashDigest: "Hachage digest (Étape 1)",
    paddedData: "Données remplies (Étape 2)",
    showDetailed: "Afficher les détails",
    showSimple: "Afficher simplement",
    signButton: "Signer les données",
    signature: "Résultat de la signature",
    dataToVerify: "Données à vérifier",
    dataToVerifyPlaceholder: "Entrez le texte ou les données signés originaux",
    preProcessedDataToVerify: "Valeur de hachage à vérifier",
    preProcessedDataToVerifyPlaceholder: "Entrez une valeur de hachage en format hexadécimal",
    signatureToVerify: "Signature à vérifier",
    signatureToVerifyPlaceholder: "Entrez la signature à vérifier (format sélectionné)",
    verifyButton: "Vérifier la signature",
    verificationResult: "Résultat de vérification",
    notVerifiedYet: "Pas encore vérifié",
    signatureValid: "Signature valide ✓",
    signatureInvalid: "Signature invalide ✗✗",
    copy: "Copier",
    copied: "Copié dans le presse-papiers",
    copyFailed: "Échec de la copie dans le presse-papiers",
    generatingKeys: "Génération des clés en cours...",
    keysGenerated: "Paire de clés RSA de {bits} bits générée en {time} secondes",
    keyGenerationFailed: "Échec de la génération de la paire de clés",
    notValidCertificate: "L'entrée n'est pas un certificat X.509 valide",
    publicKeyExtracted: "Clé publique extraite du certificat",
    extractionFailed: "Échec de l'extraction de la clé publique du certificat",
    preprocessingError: "Erreur lors du prétraitement",
    paddingError: "Erreur lors de l'application du remplissage",
    invalidPrivateKey: "Format de clé privée invalide",
    invalidPublicKey: "Format de clé publique invalide",
    invalidInputData: "Format de données d'entrée invalide",
    invalidSignature: "Format de signature invalide",
    invalidVerificationData: "Format de données de vérification invalide",
    signatureCreated: "Signature créée avec succès",
    signingFailed: "Échec de la création de la signature",
    verificationSuccess: "Vérification de signature réussie",
    verificationFailed: "Échec de la vérification de signature",
    verificationError: "Erreur lors de la vérification",
    noSignatureToExport: "Aucune signature à exporter",
    signatureExported: "Signature exportée au format {format}",
    signatureImported: "Signature importée avec succès",
    signatureImportFailed: "Échec de l'importation de la signature",
    article: {
        title: "Outil de signature et vérification RSA : Signatures numériques sécurisées pour l'intégrité des données",
        
        introduction: {
            title: "Qu'est-ce que la signature et vérification RSA ?",
            p1: "La signature et vérification RSA est un processus cryptographique utilisé pour garantir l'intégrité, l'authenticité et la non-répudiation des données dans les communications numériques. Notre outil de signature RSA vous permet de signer des données avec une clé privée RSA et de vérifier les signatures avec la clé publique correspondante, offrant un moyen sécurisé de vérifier que les informations n'ont pas été altérées pendant la transmission.",
            p2: "À une époque où la sécurité des données est cruciale, les signatures numériques RSA sont devenues la norme industrielle pour protéger les documents électroniques, la distribution de logiciels et les communications sécurisées. Cet outil implémente les schémas de remplissage PKCS#1 v1.5 et PSS, et prend en charge divers algorithmes de hachage dont SHA-1, SHA-256, SHA-384 et SHA-512.",
            p3: "Que vous soyez un développeur testant des implémentations cryptographiques, un professionnel de la sécurité vérifiant des signatures numériques ou un étudiant apprenant la cryptographie à clé publique, notre outil de signature RSA fournit une interface conviviale et des fonctionnalités complètes pour répondre à tous vos besoins en signatures numériques.",
            p4: "Le processus de signature RSA fonctionne en créant une valeur de hachage cryptographique des données, qui est ensuite chiffrée avec la clé privée de l'expéditeur. Toute personne disposant de la clé publique correspondante peut vérifier la signature tout en confirmant l'intégrité des données et l'identité de l'expéditeur."
        },
        
        useCases: {
            title: "Applications courantes des signatures RSA",
            case1: "Vérifier l'authenticité des téléchargements et mises à jour de logiciels pour prévenir la distribution de logiciels malveillants",
            case2: "Valider les certificats numériques dans les communications réseau sécurisées (HTTPS)",
            case3: "Garantir l'intégrité des documents et contrats électroniques dans les contextes juridiques et commerciaux",
            case4: "Implémenter l'authentification sécurisée des messages dans les protocoles de communication et applications"
        },
        
        tutorial: {
            title: "Comment utiliser l'outil de signature RSA",
            step1: {
                title: "Étape 1 : Préparer les clés",
                description: "Avant de signer ou vérifier, vous avez besoin de clés RSA :",
                option1: "Générez directement une nouvelle paire de clés dans l'outil en cliquant sur \"Générer une paire de clés\" et en choisissant la taille de clé souhaitée (2048 bits ou plus recommandé pour la sécurité)",
                option2: "Importez des clés existantes dans divers formats (PEM, DER, HEX ou Base64)"
            },
            step2: {
                title: "Étape 2 : Configurer les paramètres de signature",
                description: "Sélectionnez les paramètres appropriés pour votre opération de signature :",
                option1: "Algorithme de hachage : Choisissez parmi SHA-1, SHA-256, SHA-384 ou SHA-512 (SHA-256 ou supérieur recommandé)",
                option2: "Schéma de remplissage : Choisissez entre PKCS#1 v1.5 (le plus courant) ou PSS (plus moderne et sécurisé)",
                option3: "Format d'entrée : Spécifiez si votre entrée est en texte brut, hexadécimal ou encodé en Base64"
            },
            step3: {
                title: "Étape 3 : Signer ou vérifier des données",
                description: "Selon vos besoins :",
                option1: "Signature : Dans la section signature, entrez vos données puis cliquez sur \"Signer les données\" pour générer une signature",
                option2: "Vérification : Dans la section vérification, entrez les données originales et la signature puis cliquez sur \"Vérifier la signature\""
            },
            step4: {
                title: "Étape 4 : Voir les résultats et exporter (si nécessaire)",
                description: "Après signature, vous pouvez copier la signature ou l'exporter dans divers formats (Base64, HEX, DER, PEM). Pour la vérification, l'outil indiquera si la signature est valide ou non."
            },
            note: "Remarque : Pour les utilisateurs avancés, l'outil affiche également des informations détaillées sur le prétraitement, y compris le hachage digest et les données remplies, vous aidant à comprendre chaque étape du processus de signature RSA."
        },
        
        faq: {
            title: "Questions fréquentes sur les signatures RSA",
            q1: "Quelle est la différence entre les schémas de remplissage PKCS#1 v1.5 et PSS ?",
            a1: "PKCS#1 v1.5 est le schéma de remplissage traditionnel pour les signatures RSA, largement supporté mais avec des vulnérabilités théoriques connues. PSS (Probabilistic Signature Scheme) est une méthode plus moderne avec une sécurité prouvée et un remplissage aléatoire, le rendant plus résistant à certaines attaques cryptographiques. Pour la plupart des applications, les deux schémas offrent une sécurité suffisante lorsqu'ils sont utilisés avec un algorithme de hachage fort et une longueur de clé appropriée.",
            
            q2: "Quel algorithme de hachage dois-je utiliser pour les signatures RSA ?",
            a2: "Pour les applications modernes, nous recommandons au moins SHA-256 pour une sécurité adéquate. SHA-1 est considéré comme cryptographiquement faible et ne devrait être utilisé que pour la compatibilité avec les anciens systèmes. Pour les applications hautement sensibles ou lors de la signature de grandes quantités de données, SHA-384 ou SHA-512 offrent une marge de sécurité supplémentaire.",
            
            q3: "Quelle taille de clé RSA est recommandée pour des signatures sécurisées ?",
            a3: "En 2023, la taille minimale recommandée pour les clés RSA est de 2048 bits, avec 3072 ou 4096 bits préférés pour une sécurité à long terme. Les clés de moins de 2048 bits sont considérées comme vulnérables aux attaques par factorisation avec les ressources de calcul modernes. Notez que des tailles de clé plus grandes augmenteront le temps de traitement des opérations de signature.",
            
            q4: "Puis-je utiliser cet outil pour traiter des données pré-hachées ?",
            a4: "Oui, notre outil prend en charge la signature et la vérification de données pré-hachées. Ceci est particulièrement utile lorsque vous avez déjà calculé le hachage avec un outil externe, ou lorsque vous traitez des fichiers volumineux et souhaitez calculer le hachage séparément. Sélectionnez simplement l'option \"Pré-hachage\" et fournissez la valeur de hachage en format hexadécimal.",
            
            q5: "Est-il sécurisé d'utiliser cet outil en ligne pour des signatures sensibles ?",
            a5: "Cet outil traite toutes les données directement dans votre navigateur - aucune information n'est envoyée à nos serveurs. Cependant, pour des opérations cryptographiques hautement sensibles ou en production, nous recommandons d'utiliser du matériel de sécurité dédié (comme un HSM) ou des bibliothèques cryptographiques établies dans un environnement contrôlé.",
            a5_extra: "Pour des fins éducatives, de test ou des applications non critiques, cet outil offre un moyen pratique et sécurisé de gérer les signatures RSA."
        },
        
        resources: {
            title: "Outils et ressources connexes",
            description: "Améliorez votre flux de travail cryptographique avec ces outils complémentaires :",
            tool1: "Générateur de hachage - Créez des hachages digest avec divers algorithmes",
            tool2: "Encodeur/Décodeur Base64 - Convertissez entre données brutes et format Base64",
            tool3: "Outil de débogage JWT - Analysez, validez et déboguez des jetons JWT en ligne",
            
            external: {
                title: "Ressources externes",
                resource1: "RFC 8017 - PKCS #1 : Spécifications de cryptographie RSA version 2.2",
                resource2: "NIST FIPS 186-4 - Standard de signature numérique (DSS)"
            }
        },
        
        conclusion: {
            title: "Conclusion",
            p1: "La signature RSA reste une pierre angulaire de la sécurité cryptographique moderne, fournissant un mécanisme robuste pour garantir l'intégrité et l'authenticité des données. Notre outil de signature RSA rend cette technologie puissante accessible à tous, des novices en cryptographie aux professionnels de la sécurité.",
            p2: "Que vous signiez du code, vérifiiez l'authenticité de documents ou appreniez la cryptographie à clé publique, cet outil offre un ensemble complet de fonctionnalités pour gérer les signatures RSA dans un environnement sécurisé basé sur navigateur. Commencez dès maintenant avec l'outil de signature RSA pour protéger vos actifs numériques et communications."
        }
    }
}