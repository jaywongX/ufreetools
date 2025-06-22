export default {
    name: "Signature et vérification SM2",
    description: "Utilise une clé privée SM2 pour signer des données et une clé publique pour vérifier les signatures, avec prise en charge de multiples algorithmes de hachage",
    keyInput: "Saisie des clés",
    privateKey: "Clé privée (pour signature)",
    publicKey: "Clé publique (pour vérification)",
    privateKeyPlaceholder: "Entrez une clé privée SM2 au format hexadécimal",
    publicKeyPlaceholder: "Entrez une clé publique SM2 au format hexadécimal",
    generateKeyPair: "Générer une paire de clés",
    clear: "Effacer",
    keyGenError: "Erreur lors de la génération de la paire de clés",
    hashAlgorithm: "Algorithme de hachage",
    processMode: "Mode de traitement",
    originalData: "Données originales",
    preHashed: "Pré-haché",
    sign: "Signer",
    verify: "Vérifier",
    dataToSign: "Données à signer",
    dataToSignPlaceholder: "Entrez le texte ou les données à signer",
    preHashedDataToSign: "Valeur de hachage à signer",
    preHashedDataToSignPlaceholder: "Entrez une valeur de hachage au format hexadécimal",
    dataToVerify: "Données à vérifier",
    dataToVerifyPlaceholder: "Entrez le texte ou les données à vérifier",
    preHashedDataToVerify: "Valeur de hachage à vérifier",
    preHashedDataToVerifyPlaceholder: "Entrez une valeur de hachage au format hexadécimal",
    signatureToVerify: "Signature à vérifier",
    signatureToVerifyPlaceholder: "Entrez la signature à vérifier",
    inputFormat: "Format d'entrée",
    outputFormat: "Format de sortie",
    signatureFormat: "Format de signature",
    text: "Texte",
    hex: "Hexadécimal",
    base64: "Base64",
    signature: "Signature",
    copySignature: "Copier la signature",
    signatureCopied: "Signature copiée dans le presse-papiers",
    copyError: "Erreur lors de la copie dans le presse-papiers",
    signError: "Échec de la création de signature",
    verifyError: "Échec de la vérification de signature",
    invalidInputData: "Données d'entrée invalides",
    unsupportedInputFormat: "Format d'entrée non pris en charge",
    unsupportedHashAlgorithm: "Algorithme de hachage non pris en charge",
    waitingForVerification: "Entrez des données et une signature pour vérification",
    verificationSuccess: "Vérification réussie ! La signature est valide.",
    verificationFailed: "Échec de la vérification ! Signature invalide.",
    preHashedMustBeHex: "L'entrée pré-hachée doit être au format hexadécimal",
    idParameter: "Paramètre ID",
    idValue: "Valeur ID",
    idPlaceholder: "Entrez la valeur ID (par défaut : 1234567812345678)",
    idDescription: "L'algorithme SM2 utilise une valeur ID dans le processus de génération et de vérification de signature. La valeur par défaut est 1234567812345678.",
    signatureComponents: "Composants de signature (valeurs R et S)",
    invalidKeyFormat: "Format de clé invalide",
    invalidSignatureFormat: "Format de signature invalide",
    formatError: "Erreur de format",
    signatureHashMismatch: "Incompatibilité de hachage de signature - Vérifiez que les données et l'algorithme de hachage correspondent à ceux utilisés lors de la signature",
    copy: "Copier",
    export: "Exporter",
    signatureExported: "Signature exportée vers un fichier",
    exportError: "Erreur lors de l'export de la signature",
    privateKeyType: "Clé privée",
    publicKeyType: "Clé publique",
    signatureType: "Signature",
    derEncodingFailed: "Impossible d'encoder la signature au format DER",
    invalidIdFormat: "Format ID invalide",
    invalidDerFormat: "Format DER invalide",
    invalidSignatureLength: "Longueur de signature inadaptée pour l'encodage DER",
    zValue: "Valeur de hachage prétraitée",
    zValueFormula: "Formule de calcul de la valeur Z",
    showDetails: "Afficher les détails",
    hideDetails: "Masquer les détails",
    zCalculationFailed: "Échec du calcul de la valeur Z",
    invalidPublicKeyFormat: "Format de clé publique invalide",
    importPfx: "Importer un fichier PFX/P12",
    enterPin: "Entrez le code PIN/mot de passe",
    pinPlaceholder: "Entrez le mot de passe du fichier PFX",
    cancel: "Annuler",
    confirm: "Confirmer",
    fileReadError: "Erreur de lecture du fichier",
    pfxImportSuccess: "Import du fichier PFX réussi",
    pfxImportError: "Erreur lors de l'import du fichier PFX",
    noPrivateKeyFound: "Aucune clé privée trouvée dans le fichier PFX",
    invalidPrivateKeyFormat: "Format de clé privée invalide dans le fichier PFX",
    privateKeyExtractionFailed: "Échec de l'extraction de la clé privée",
    pkcs8ParseError: "Erreur d'analyse de la structure PKCS#8",
    rsaKeyNotSupported: "Clé RSA détectée. Cet outil ne prend en charge que les clés SM2.",
    rsaCertNotSupported: "Certificat RSA détecté. Cet outil ne prend en charge que les certificats SM2.",
    failedToDerivePublicKey: "Impossible de dériver la clé publique à partir de la clé privée",
    article: {
        title: "Outil de signature numérique SM2 - Génération et vérification de signatures sécurisées en ligne",
        introduction: {
            title: "Qu'est-ce qu'une signature numérique SM2 ?",
            p1: "La signature numérique SM2 fait partie des standards cryptographiques commerciaux chinois, un algorithme cryptographique. Notre <strong>outil de vérification de signature SM2</strong> fournit une interface conviviale pour créer et vérifier des signatures numériques en utilisant l'algorithme de courbe elliptique SM2, qui offre une sécurité robuste équivalente à RSA 256 bits tout en utilisant des tailles de clé plus petites.",
            p2: "Cet outil de signature SM2 en ligne est conçu pour relever le défi de signer et vérifier des données numériques en toute sécurité sans installer de logiciel spécialisé. Que vous soyez un développeur implémentant la vérification de signature SM2 dans une application, un professionnel de la sécurité vérifiant des certificats numumériques, ou une entreprise devant se conformer aux standards cryptographiques chinois, notre outil fournit une solution efficace.",
            p3: "Alors que le standard de chiffrement SM2 gagne en adoption mondiale, particulièrement dans les régions nécessitant une conformité avec la réglementation chinoise, disposer d'un <strong>générateur et vérificateur de signatures SM2</strong> fiable devient crucial pour les entreprises internationales et les professionnels de la sécurité."
        },
        applications: {
            title: "Applications pratiques des signatures SM2",
            p1: "La vérification de signature SM2 a de nombreuses applications pratiques dans divers secteurs, particulièrement là où l'intégrité des données et l'authentification sont critiques :",
            scenario1: {
                title: "Fintech et banque",
                description: "Dans les services financiers, la <strong>vérification de signature SM2 pour les banques en ligne</strong> aide à sécuriser les transactions et maintenir la conformité. Les banques opérant dans des régions nécessitant la conformité aux standards SM utilisent les signatures SM2 pour authentifier les demandes de transaction, vérifier l'identité des clients et sécuriser les communications interbancaires. Pouvoir vérifier rapidement les signatures SM2 assure que les documents financiers n'ont pas été altérés et proviennent de sources légitimes."
            },
            scenario2: {
                title: "Gouvernement et secteur public",
                description: "Les agences gouvernementales implémentant des <strong>mots de passe SM2 sécurisés pour les documents officiels</strong> s'appuient sur les signatures numériques pour vérifier l'authenticité des enregistrements électroniques. Notre outil prend en charge la vérification des signatures sur les certificats numériques, communications officielles et documents légaux. Ceci est particulièrement précieux pour les organisations internationales traitant avec des entités gouvernementales chinoises requérant la conformité aux standards cryptographiques nationaux."
            },
            scenario3: {
                title: "Commerce transfrontalier et international",
                description: "Les entreprises engagées dans la <strong>vérification de signature SM2 pour le commerce transfrontalier</strong> utilisent les signatures cryptographiques pour protéger les contrats, vérifier les bordereaux d'expédition et authentifier les documents douaniers. Notre outil permet aux entreprises d'implémenter facilement des processus de vérification de signature SM2 sans connaissance experte des principes cryptographiques sous-jacents, facilitant des affaires internationales plus fluides tout en maintenant des standards de sécurité élevés."
            }
        },
        tutorial: {
            title: "Comment utiliser l'outil de signature SM2",
            intro: "Suivez ce guide étape par étape pour créer et vérifier des signatures numériques SM2 avec notre outil en ligne :",
            step1: {
                title: "Étape 1 : Gestion des clés",
                description: "Commencez par saisir votre clé privée SM2 (pour signer) et votre clé publique (pour vérifier). Vous pouvez coller des clés existantes dans divers formats (HEX, PEM, Base64 ou DER), ou générer directement une nouvelle paire de clés dans l'outil en cliquant sur \"Générer une paire de clés\". Pour la sécurité, toutes les opérations cryptographiques sont exécutées localement dans votre navigateur - vos clés ne sont jamais transmises à nos serveurs."
            },
            step2: {
                title: "Étape 2 : Configuration du paramètre ID",
                description: "Entrez le paramètre ID, un identifiant unique utilisé dans l'algorithme de signature SM2. La valeur par défaut est \"1234567812345678\", mais vous pouvez la personnaliser selon vos besoins spécifiques. Vous pouvez saisir l'ID au format texte, HEX ou Base64 selon votre préférence."
            },
            step3: {
                title: "Étape 3 : Créer une signature",
                description: "Dans la section signature, entrez les données à signer et sélectionnez le format d'entrée approprié (texte, HEX ou Base64). Cliquez sur \"Signer\" pour générer la signature. L'outil affichera la signature complète et ses composants (valeurs R et S). Vous pouvez choisir votre format de sortie préféré (DER, HEX, Base64 ou PEM) et copier ou exporter facilement la signature."
            },
            step4: {
                title: "Étape 4 : Vérifier une signature",
                description: "Pour vérifier une signature, entrez les données originales et la signature à vérifier dans la section vérification. Sélectionnez les formats appropriés pour les données et la signature, puis cliquez sur \"Vérifier\". L'outil vérifiera immédiatement si la signature est valide pour les données et la clé publique données, affichant un message clair de succès ou d'échec, ainsi que des informations d'erreur détaillées le cas échéant."
            }
        },
        specifications: {
            title: "Spécifications techniques",
            p1: "Notre outil de signature SM2 implémente l'algorithme de signature numérique sur courbe elliptique SM2 défini dans la norme GM/T 0003-2012 publiée par l'Administration nationale chinoise de cryptage. L'outil est entièrement conforme à ces normes tout en offrant des fonctionnalités supplémentaires pour faciliter son utilisation.",
            p2: "Les principales caractéristiques techniques incluent :",
            feature1: "Utilisation fixe de l'algorithme de hachage SM3 (256 bits) comme requis par la norme",
            feature2: "Prise en charge de paramètres ID personnalisés dans divers formats d'entrée (texte/HEX/Base64)",
            feature3: "Multiples formats de sortie de signature (DER/HEX/Base64/PEM) pour compatibilité avec divers systèmes",
            feature4: "Affichage complet des composants de signature (valeurs R et S) pour vérification technique",
            feature5: "Prise en charge de divers formats de clés (PEM/HEX/Base64/DER) pour une gestion flexible des clés",
            feature6: "Rapports d'erreur détaillés pour le dépannage des problèmes de vérification"
        },
        faq: {
            title: "Questions fréquemment posées",
            q1: "En quoi la signature SM2 diffère-t-elle des autres algorithmes de signature numérique ?",
            a1: "La signature numérique SM2 est basée sur la cryptographie sur courbe elliptique (ECC) et fait partie des standards cryptographiques commerciaux chinois. Comparée aux signatures RSA, la <strong>signature cryptographique SM2</strong> offre une sécurité équivalente avec des tailles de clé plus petites, la rendant plus efficace. Contrairement aux standards internationaux comme ECDSA, SM2 utilise des courbes différentes et intègre l'identité du signataire (ID) dans le processus de génération de signature, ajoutant une couche de sécurité supplémentaire. SM2 est particulièrement important pour les applications devant se conformer à la réglementation chinoise ou opérant dans le cadre de la cybersécurité chinoise.",

            q2: "L'outil de signature SM2 est-il sécurisé pour les données sensibles ?",
            a2: "Oui, notre <strong>outil sécurisé de vérification de signature SM2</strong> utilise du JavaScript côté client exécutant toutes les opérations cryptographiques directement dans votre navigateur. Vos clés privées et données sensibles ne quittent jamais votre appareil ni ne sont transmises à nos serveurs. L'implémentation suit le standard de signature numérique SM2 (GM/T 0003-2012) et utilise SM3 pour le hachage comme requis par la spécification. Pour les applications d'entreprise hautement sensibles, nous recommandons un examen supplémentaire avant d'utiliser tout outil en ligne (y compris le nôtre) en environnement de production.",

            q3: "Pourquoi le paramètre ID est-il important dans les signatures SM2 ?",
            a3: "Le paramètre ID est une caractéristique unique de <strong>l'algorithme de signature numérique SM2 avec ID personnalisé</strong>, le distinguant des autres schémas de signature basés sur ECC. Il sert d'entrée supplémentaire au processus de génération de signature, liant essentiellement l'identité du signataire à la signature. Ceci prévient certains types d'attaques et ajoute une couche d'authentification. Dans la plupart des implémentations, y compris notre outil, une valeur par défaut '1234567812345678' est utilisée lorsqu'aucun ID spécifique n'est requis, mais les organisations utilisent souvent des IDs personnalisés liés à l'identité de l'utilisateur ou à des identifiants système pour renforcer la sécurité et la traçabilité.",

            q4: "Puis-je utiliser les signatures SM2 pour des affaires internationales hors de Chine ?",
            a4: "Absolument. Bien que SM2 provienne des standards cryptographiques chinois, <strong>l'adoption internationale des signatures SM2</strong> croît, particulièrement parmi les entreprises ayant des activités en Chine ou des partenariats avec des entités chinoises. Notre outil facilite les opérations cryptographiques transfrontalières en prenant en charge divers formats d'entrée et de sortie compatibles avec différents systèmes internationaux. Pour les entreprises engagées dans le commerce international, utiliser les signatures SM2 peut aider à assurer la conformité avec les exigences réglementaires chinoises tout en maintenant une cryptographie robuste conforme aux standards globaux.",

            q5: "Que faire si la vérification de signature échoue ?",
            a5: "Si vous rencontrez une <strong>erreur de vérification de signature SM2</strong>, vérifiez ces problèmes courants : 1) Assurez-vous d'utiliser la bonne clé publique correspondant à la clé privée utilisée pour signer ; 2) Vérifiez que le paramètre ID correspond à celui utilisé lors de la génération de la signature ; 3) Confirmez que les données vérifiées sont exactement les mêmes que celles signées initialement, y compris le format (texte/HEX/Base64) ; 4) Vérifiez que le format de signature est correctement sélectionné (DER/HEX/Base64/PEM). Notre outil fournit des messages d'erreur détaillés pour aider à diagnostiquer le problème spécifique. Pour des problèmes persistants, vous devrez peut-être régénérer la signature ou vérifier que la paire de clés est valide."
        },
        related: {
            title: "Outils cryptographiques connexes",
            description: "Renforcez votre boîte à outils de sécurité avec ces utilitaires cryptographiques complémentaires :",
            tool1: "<a href='https://www.ufreetools.com/tool/rsa-signature-verifier' target='_blank'>Vérificateur de signature RSA</a> - Créez et vérifiez des signatures numériques en utilisant l'algorithme RSA largement adopté.",
            tool2: "<a href='https://www.ufreetools.com/tool/hash-calculator' target='_blank'>Calculateur de hachage</a> - Générez des valeurs de hachage sécurisées en utilisant divers algorithmes dont SM3.",
            tool3: "<a href='https://www.ufreetools.com/tool/x509-certificate-decoder' target='_blank'>Décodeur de certificats</a> - Décodez et inspectez les certificats X.509, y compris ceux utilisant la cryptographie SM2."
        }
    }
}