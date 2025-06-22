export default {
    name: "Analyseur de structure ASN.1",
    description: "Un outil complet pour décoder, visualiser et analyser les structures de données encodées en ASN.1 utilisées dans le chiffrement, les télécommunications et les protocoles réseau. Prend en charge les formats PEM, HEX, Base64 et DER avec visualisation interactive en arborescence et plusieurs options d'export.",
    input: "Données d'entrée",
    output: "Structure analysée",
    inputFormat: "Format d'entrée",
    inputPlaceholder: "Saisissez des données ASN.1 dans le format sélectionné...",
    loadExample: "Charger un exemple",
    clickToUpload: "Cliquer pour téléverser un fichier",
    orDragDrop: "ou glisser-déposer un fichier",
    supportedFormats: "Formats pris en charge : PEM, DER, HEX, Base64",
    showHexDump: "Afficher le dump hexadécimal",
    trimLargeData: "Tronquer les grandes valeurs",
    useDefinitionFile: "Utiliser un fichier de définition ASN.1 pour l'analyse",
    error: "Erreur",
    noData: "Aucune donnée ASN.1 à afficher. Veuillez saisir des données dans la zone d'entrée ou téléverser un fichier.",
    treeStructure: "Structure arborescente ASN.1",
    hexDump: "Dump hexadécimal",
    parseError: "Échec de l'analyse des données ASN.1. Veuillez vérifier le format et les données saisis.",
    invalidPEM: "Format PEM invalide. Assurez-vous d'avoir les marqueurs BEGIN/END corrects.",
    invalidHex: "Données hexadécimales invalides. Seuls les caractères hexadécimaux (0-9, A-F) sont autorisés.",
    invalidBase64: "Données Base64 invalides.",
    derTextNotSupported: "Le format DER ne peut pas être saisi sous forme de texte. Veuillez téléverser un fichier DER.",
    unsupportedFormat: "Format d'entrée non pris en charge sélectionné.",
    unexpectedEOF: "Fin de données inattendue lors de l'analyse de la structure ASN.1.",
    lengthTooLong: "Le champ de longueur ASN.1 est trop grand pour être traité.",
    fileReadError: "Erreur lors de la lecture du fichier téléversé.",
    fileTooLarge: "Fichier trop volumineux. Taille maximale : 10 Mo.",

    // Descriptions des fonctionnalités
    featureHeading: "Fonctionnalités principales",
    feature1: "Prise en charge multi-format : Analyse des données ASN.1 aux formats PEM, HEX, Base64 ou DER",
    feature2: "Vue arborescente interactive : Visualisation de la structure ASN.1 via des nœuds dépliables",
    feature3: "Visualisation hexadécimale : Affiche les octets bruts avec surbrillance au survol",
    feature4: "Analyse OID : Affiche les noms des identifiants d'objets courants",
    feature5: "Gestion des grandes données : Option pour tronquer les grandes valeurs et améliorer la lisibilité",

    // Applications courantes ASN.1
    applicationsHeading: "Applications courantes",
    application1: "Certificats X.509 : Visualiser et analyser la structure des certificats SSL/TLS",
    application2: "Fichiers PKCS : Inspecter les formats de clés privées, demandes de certificats et stockage",
    application3: "CMS/PKCS#7 : Examiner les structures de données signées et chiffrées",
    application4: "SNMP MIB : Décoder les données du protocole SNMP",

    // Instructions
    instructionsHeading: "Mode d'emploi",
    step1: "Sélectionnez le format des données d'entrée (PEM, HEX, Base64, DER)",
    step2: "Saisissez les données dans la zone de texte ou téléversez un fichier",
    step3: "L'analyseur traitera automatiquement les données et affichera la structure",
    step4: "Explorez l'arborescence ASN.1 en dépliant/repliant les nœuds",
    step5: "Survolez les nœuds pour mettre en évidence les octets correspondants dans le dump hexadécimal",

    // Export
    exportAsJson: "Exporter en JSON",
    exportFormat: "Format d'export",
    exportSuccess: "Structure exportée avec succès",
    exportFailed: "Échec de l'export de la structure",
    noDataToExport: "Aucune donnée à exporter",
    copiedToClipboard: "Copié dans le presse-papiers",
    copyFailed: "Échec de la copie",
    hexSeparator: "Séparateur hexadécimal",
    none: "Aucun",
    space: "Espace",
    colon: "Deux-points",
    dash: "Tiret",
    dot: "Point",
    colorHighlight: "Coloration par type",
    settings: "Paramètres",
    displayOptions: "Options d'affichage",
    advancedOptions: "Options avancées",
    expandAllNodes: "Déplier tous les nœuds",
    hexDumpDisabled: "L'affichage hexadécimal est désactivé. Activez-le dans les paramètres pour voir les octets bruts.",
    copyValue: "Copier la valeur",
    expandAll: "Tout déplier",
    collapseAll: "Tout replier",
    autoScroll: "Défilement automatique",
    article: {
        title: "Analyseur de structure ASN.1 - Décodage et visualisation des données encodées ASN.1",

        // Section d'introduction
        introTitle: "Qu'est-ce qu'un analyseur de structure ASN.1 ?",
        introPara1: "L'analyseur de structure ASN.1 est un outil puissant pour décoder et visualiser les structures de données encodées en ASN.1 (Abstract Syntax Notation One). L'ASN.1 est un langage standard de description d'interface utilisé pour définir des structures de données pouvant être sérialisées et désérialisées multiplateforme. Il est largement utilisé dans les télécommunications et les réseaux informatiques, en particulier dans les protocoles cryptographiques.",
        introPara2: "Notre analyseur de structure ASN.1 offre une méthode interactive pour inspecter des structures ASN.1 complexes, prenant en charge plusieurs formats d'entrée incluant PEM, HEX, Base64 et DER. Il fournit une visualisation arborescente permettant d'explorer facilement les éléments ASN.1 imbriqués, ce qui le rend précieux pour les développeurs, chercheurs en sécurité et ingénieurs réseau.",

        applicationTitle: "Applications courantes de l'analyseur ASN.1",
        application1: "<strong>Analyse de certificats X.509</strong> : Inspecter la structure et le contenu des certificats SSL/TLS pour l'audit de sécurité et le dépannage.",
        application2: "<strong>Inspection de fichiers PKCS</strong> : Analyser en détail les formats de clés privées, demandes de certificats et stockage de certificats.",
        application3: "<strong>Syntaxe de message cryptographique (CMS)</strong> : Examiner les structures de données signées et chiffrées utilisées dans les protocoles de messagerie sécurisée.",
        application4: "<strong>Analyse de protocoles réseau</strong> : Décoder les données ASN.1 utilisées dans des protocoles comme SNMP, LDAP et H.323.",
        introPara3: "L'analyse de structure ASN.1 est essentielle pour comprendre les formats de données complexes utilisés dans les systèmes de sécurité modernes. Notre analyseur rend ce processus intuitif grâce à une visualisation colorée, une vue arborescente dépliable et un dump hexadécimal des données encodées.",

        // Section FAQ
        faqTitle: "Foire aux questions sur l'analyseur de structure ASN.1",

        faq1Question: "Quels formats l'analyseur de structure ASN.1 accepte-t-il ?",
        faq1Answer: "Notre analyseur prend en charge plusieurs formats d'entrée incluant PEM (Privacy Enhanced Mail), HEX (hexadécimal), Base64 et les fichiers binaires DER (Distinguished Encoding Rules). Cette flexibilité vous permet de traiter des données ASN.1 provenant de diverses sources sans outil de conversion.",

        faq2Question: "Comment utiliser l'analyseur ASN.1 pour analyser un certificat X.509 ?",
        faq2Answer: "Pour analyser un certificat X.509, sélectionnez simplement 'PEM' comme format d'entrée et collez votre certificat (incluant les marqueurs BEGIN/END CERTIFICATE) dans la zone de saisie. L'analyseur décodera automatiquement la structure et l'affichera sous forme d'arbre interactif, vous permettant de déplier les nœuds et d'inspecter des champs spécifiques comme le sujet, l'émetteur, la validité et les extensions.",

        faq3Question: "Puis-je exporter la structure ASN.1 analysée pour documentation ?",
        faq3Answer: "Oui, vous pouvez exporter la structure ASN.1 analysée au format JSON en cliquant sur le bouton \"Exporter en JSON\" dans le panneau des paramètres. Cette fonctionnalité est utile pour documenter des structures, les partager avec des collègues ou les traiter ultérieurement dans vos propres applications.",

        faq4Question: "Quelle est la différence entre ASN.1, DER et BER ?",
        faq4Answer: "ASN.1 (Abstract Syntax Notation One) est le langage pour définir des structures de données, tandis que DER (Distinguished Encoding Rules) et BER (Basic Encoding Rules) sont des règles spécifiques déterminant comment les structures ASN.1 sont converties en format binaire. DER est un sous-ensemble de BER garantissant qu'une valeur ASN.1 n'a qu'un seul encodage, ce qui le rend préférable pour les applications cryptographiques. Notre analyseur traite principalement les structures ASN.1 encodées en DER, les plus courantes en sécurité.",

        faq5Question: "Comment l'analyseur ASN.1 traite-t-il les identifiants d'objets (OID) ?",
        faq5Answer: "L'analyseur reconnaît automatiquement les identifiants d'objets (OID) courants et affiche leur nom lisible à côté de la valeur numérique. Par exemple, '1.2.840.113549.1.1.11' s'affichera comme 'sha256WithRSAEncryption'. Cette fonctionnalité facilite la compréhension des éléments dans des structures complexes comme les certificats X.509.",

        // Section tutoriel
        tutorialTitle: "Comment utiliser l'analyseur de structure ASN.1",

        step1Title: "Étape 1 : Sélectionnez le format d'entrée",
        step1Content: "Commencez par sélectionner le format approprié pour vos données ASN.1. Utilisez les boutons radio du panneau d'entrée pour choisir parmi PEM, HEX, Base64 ou DER. Le format sélectionné détermine comment l'analyseur interprétera vos données.",

        step2Title: "Étape 2 : Saisissez ou téléversez des données ASN.1",
        step2Content: "Saisissez vos données encodées ASN.1 dans la zone de texte, ou téléversez un fichier en cliquant sur la zone de téléversement. Pour le format PEM, assurez-vous que vos données contiennent les marqueurs BEGIN/END corrects. Pour l'entrée hexadécimale, vous pouvez utiliser divers séparateurs (espaces, deux-points, etc.), configurables dans les paramètres.",
        step2Example: "-----BEGIN CERTIFICATE-----\nMIIDazCCAlOgAwIBAgIUXF3AmOAMqvdXdFLJV8C5c9K6cI8wDQYJKoZIhvcNAQEL\n...\n-----END CERTIFICATE-----",

        step3Title: "Étape 3 : Explorez l'arborescence ASN.1",
        step3Content: "Une fois les données analysées, la structure arborescente ASN.1 s'affichera dans le panneau inférieur gauche. Vous pouvez déplier/replier les nœuds en cliquant sur les triangles. Chaque nœud affiche son type (SEQUENCE, INTEGER, OBJECT IDENTIFIER) et sa valeur. Le code couleur aide à distinguer les différents types ASN.1.",

        step4Title: "Étape 4 : Examinez la représentation hexadécimale",
        step4Content: "Si l'option \"Afficher le dump hexadécimal\" est activée, le panneau de droite affichera le dump hexadécimal des données ASN.1. Survolez un élément dans l'arbre pour mettre en évidence les octets correspondants dans le dump, vous aidant à comprendre la structure binaire encodée.",
        step4Example: "00000000 30 82 03 6a 30 82 02 52 a0 03 02 01 02 02 14 5c 0..j0..R........\\",

        step5Title: "Étape 5 : Configurez les options d'affichage",
        step5Content: "Utilisez le panneau des paramètres pour personnaliser l'affichage selon vos besoins. Les options incluent l'affichage/masquage du dump hexadécimal, la troncature des grandes valeurs pour améliorer la lisibilité, le choix du séparateur hexadécimal et l'activation de la coloration par type. Vous pouvez aussi déplier tous les nœuds pour une vue complète de la structure.",

        // Section ressources
        resourcesTitle: "Ressources supplémentaires",

        relatedToolsTitle: "Outils connexes",
        relatedTool1: "Convertisseur Base64 - Encoder et décoder des données Base64",
        relatedTool2: "Convertisseur Base64 Hex - Conversion facile entre Base64 et hexadécimal",
        relatedTool3: "Décodeur de certificats - Analyse détaillée des certificats X.509",

        externalResourcesTitle: "Ressources externes",
        externalResource1: "Introduction ITU-T à ASN.1 - Documentation officielle du standard ASN.1",
        externalResource2: "RFC 5280 - Profil de certificat et CRL pour l'infrastructure à clé publique X.509"
    },
};