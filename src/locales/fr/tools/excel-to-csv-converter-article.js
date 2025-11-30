export default {
    title: 'Convertisseur Excel vers CSV : Guide d\'utilisation de l\'outil en ligne de conversion par lots de fichiers Excel',
    functionTitle: 'Qu\'est-ce qu\'un convertisseur Excel vers CSV et à quoi sert-il ?',
    intro: 'Notre <strong>convertisseur Excel vers CSV</strong> est un outil en ligne puissant capable de convertir rapidement des fichiers Excel (.xlsx et .xls) au format CSV. Cet outil prend en charge le traitement par lots de plusieurs fichiers, la reconnaissance multi-feuilles, des délimiteurs personnalisés et des formats d\'encodage, répondant aux besoins d\'importation de données de différents systèmes et logiciels. En utilisant notre <strong>outil en ligne Excel vers CSV</strong>, vous pouvez facilement gérer de grands volumes de fichiers de données sans avoir besoin d\'installer de logiciel, toutes les conversions sont effectuées localement dans le navigateur, garantissant la sécurité des données.',

    useCasesTitle: 'Scénarios d\'application courants de la conversion Excel vers CSV',
    useCases: [
        'Importer des données Excel dans des systèmes de base de données (MySQL, PostgreSQL, etc.)',
        'Préparer des données au format CSV pour des outils d\'analyse de données (Python pandas, langage R)',
        'Importer en masse des données utilisateur ou des informations produit dans des applications web',
        'Convertir des rapports Excel au format CSV pour être utilisés par d\'autres systèmes',
        'Traiter des fichiers Excel multi-feuilles et les exporter séparément au format CSV',
        'Convertir en masse des fichiers Excel historiques pour des projets de migration de données',
        'Convertir des données Excel au format CSV pour le contrôle de version',
        'Préparer des fichiers de données CSV standardisés pour des interfaces API'
    ],

    logoAlt: "Aperçu du produit du convertisseur Excel vers CSV",
    tipTitle: 'Conseil professionnel :',
    tipContent: 'Pour les données contenant des caractères spéciaux ou des sauts de ligne, il est recommandé d\'utiliser des guillemets doubles comme qualificateur de texte, cela permet de s\'assurer qu\'aucune erreur de format ne se produira lors de l\'importation de fichiers CSV dans d\'autres systèmes. Pour les données en chinois, il est recommandé d\'utiliser l\'encodage UTF-8 BOM, afin de garantir un affichage correct des caractères chinois lors de l\'ouverture dans Excel.',

    conclusion: 'L\'outil de <strong>conversion Excel vers CSV</strong> est particulièrement utile pour les analystes de données, les développeurs, les administrateurs de données et les utilisateurs qui doivent fréquemment traiter des fichiers Excel. En utilisant notre convertisseur, vous pouvez rapidement convertir des données Excel au format CSV, facilitant le partage de données entre différents systèmes et outils. Notre outil prend en charge le traitement par lots, la configuration de format personnalisée et l\'aperçu en temps réel, rendant le processus de conversion de données simple et efficace, sans nécessiter l\'installation de logiciel.',

    faqTitle: 'Questions fréquentes',
    faqs: [
        {
            question: 'Quels formats Excel le convertisseur Excel vers CSV prend-il en charge ?',
            answer: 'Notre <strong>outil en ligne Excel vers CSV</strong> prend en charge les deux principaux formats Excel : .xlsx (Office Open XML) et .xls (format binaire traditionnel). L\'outil peut automatiquement identifier le format du fichier et effectuer le traitement approprié, prenant en charge les fichiers Excel multi-feuilles, vous pouvez choisir de convertir toutes les feuilles ou une feuille spécifique.'
        },
        {
            question: 'Le fichier CSV converti conservera-t-il le format de données original ?',
            answer: 'Le format CSV lui-même ne contient pas d\'informations de formatage (telles que la police, la couleur, les formules, etc.), mais tout le contenu des données sera entièrement conservé. Les dates, les chiffres et les données textuelles seront correctement convertis. Si une cellule Excel contient des formules, le convertisseur extraira la valeur du résultat calculé des formules.'
        },
        {
            question: 'Comment traiter les données Excel contenant des caractères spéciaux ?',
            answer: 'Notre outil prend en charge des qualificateurs de texte personnalisés (guillemets doubles ou simples), pouvant correctement traiter les données contenant des virgules, des sauts de ligne, des guillemets et d\'autres caractères spéciaux. Il est recommandé de choisir des guillemets doubles comme qualificateur de texte lors de la conversion de données contenant des caractères spéciaux, cela permet de s\'assurer que le format du fichier CSV est correct.'
        },
        {
            question: 'Peut-on convertir plusieurs fichiers Excel par lots ?',
            answer: 'Oui, notre <strong>outil de conversion par lots Excel vers CSV</strong> prend entièrement en charge le traitement par lots. Vous pouvez télécharger plusieurs fichiers Excel simultanément, l\'outil traitera chaque fichier séquentiellement et fournira une fonction de téléchargement groupé une fois terminé, regroupant tous les fichiers CSV convertis dans un fichier ZIP à télécharger.'
        },
        {
            question: 'Quels formats d\'encodage le fichier CSV converti prend-il en charge ?',
            answer: 'Notre outil prend en charge plusieurs formats d\'encodage, notamment UTF-8, UTF-8 BOM, GBK et ANSI. Le format UTF-8 BOM est particulièrement adapté pour ouvrir des fichiers CSV contenant des caractères chinois dans Excel, tandis que le format UTF-8 est plus adapté pour une utilisation dans les programmes. Vous pouvez choisir le format d\'encodage approprié selon les besoins du système cible.'
        },
        {
            question: 'Peut-on traiter des fichiers Excel cryptés ou protégés ?',
            answer: 'En raison des limitations de l\'environnement du navigateur, notre outil ne peut pas traiter les fichiers Excel protégés par mot de passe. Si vos fichiers Excel sont cryptés, veuillez d\'abord les décrypter à l\'aide du logiciel Excel avant d\'effectuer la conversion. Pour les fichiers Excel non cryptés, notre outil peut parfaitement les gérer.'
        }
    ],

    tutorialTitle: 'Comment utiliser le convertisseur Excel vers CSV',
    steps: [
        {
            title: 'Télécharger des fichiers Excel',
            description: 'Commencez par télécharger les fichiers Excel que vous souhaitez convertir. Vous pouvez simplement <strong>glisser-déposer</strong> les fichiers dans la zone de téléchargement, ou cliquer sur parcourir et sélectionner les fichiers depuis votre appareil. Notre outil prend en charge les formats .xlsx et .xls, vous pouvez télécharger plusieurs fichiers simultanément pour une conversion par lots.',
            note: 'Vous pouvez également utiliser la fonction "Importer depuis une URL" pour saisir directement l\'adresse web d\'un fichier Excel et effectuer la conversion.'
        },
        {
            title: 'Sélectionner une feuille (facultatif)',
            description: 'Si vos fichiers Excel contiennent plusieurs feuilles, vous pouvez sélectionner la feuille à convertir pour chaque fichier dans la liste des fichiers. Par défaut, l\'outil convertira toutes les feuilles, chaque feuille générant un fichier CSV indépendant.',
            note: 'Pour les gros fichiers Excel, il est recommandé de d\'abord sélectionner une seule feuille pour tester, confirmant que les résultats de conversion correspondent aux attentes avant le traitement par lots.'
        },
        {
            title: 'Configurer les options de format CSV',
            description: 'Dans la zone "Paramètres du format CSV", vous pouvez personnaliser le délimiteur (virgule, point-virgule, tabulation, etc.), le qualificateur de texte (guillemets doubles, guillemets simples ou aucun), la fin de ligne (Windows/Unix/Mac) et le format d\'encodage (UTF-8, UTF-8 BOM, GBK, ANSI). Ces paramètres affecteront le format du fichier CSV converti.',
            note: 'Pour les données en chinois, il est recommandé d\'utiliser l\'encodage UTF-8 BOM ; pour les fichiers devant être ouverts dans Excel, il est recommandé d\'utiliser des guillemets doubles comme qualificateur de texte.'
        },
        {
            title: 'Aperçu des données (facultatif)',
            description: 'Avant la conversion, vous pouvez cliquer sur "Aperçu des données" pour voir le contenu du fichier Excel. La fonction d\'aperçu affichera les premières lignes de données, vous aidant à confirmer si le format et le contenu du fichier sont corrects.',
            note: 'La fonction d\'aperçu peut vous aider à découvrir des problèmes de format de données, évitant ainsi de trouver des erreurs après la conversion.'
        },
        {
            title: 'Exécuter la conversion',
            description: 'Cliquez sur le bouton <strong>"Démarrer la conversion"</strong> pour commencer le traitement des fichiers. L\'outil affichera la progression de la conversion, incluant le fichier en cours de traitement, la feuille et le nombre de lignes. Le processus de conversion s\'effectue entièrement localement dans le navigateur, sans télécharger les données vers le serveur.',
            note: 'Pour les gros fichiers, la conversion peut prendre un certain temps, veuillez patienter. Vous pouvez consulter le processus détaillé de conversion dans le journal de traitement.'
        },
        {
            title: 'Télécharger les résultats de conversion',
            description: 'Une fois la conversion terminée, vous pouvez cliquer sur le bouton <strong>"Télécharger"</strong> sous chaque fichier CSV pour le sauvegarder individuellement, ou utiliser le bouton <strong>"Téléchargement groupé"</strong> en haut de page pour regrouper tous les fichiers CSV dans un fichier ZIP et le télécharger. Les noms de fichiers seront générés automatiquement selon vos paramètres.',
            note: 'Tout le traitement s\'effectue dans votre navigateur, vos fichiers Excel ne sont donc jamais téléchargés vers un serveur, garantissant la confidentialité et la sécurité des données.'
        }
    ],

    successTitle: 'Félicitations !',
    successContent: 'Vous avez réussi à apprendre comment utiliser notre convertisseur Excel vers CSV. Vous pouvez maintenant facilement convertir des fichiers Excel au format CSV pour l\'analyse de données, l\'importation de bases de données ou d\'autres usages.',

    relatedToolsTitle: 'Outils connexes susceptibles de vous intéresser',
    relatedTools: [
        {
            name: 'Convertisseur de lecture bionique',
            description: 'Convertisseur de lecture bionique en ligne gratuit, convertit le texte en temps réel au style Bionic Reading.',
            url: 'https://www.ufreetools.com/tool/bionic-reading-converter'
        },
        {
            name: 'Redimensionneur d\'images',
            description: 'Ajuste les images à des dimensions spécifiques ou les redimensionne par pourcentage.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: 'Générateur de sceaux',
            description: 'Crée en ligne diverses images de sceaux, génère des cachets d\'entreprise, des cachets privés et autres sceaux numériques.',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        },
        {
            name: 'Générateur de codes QR',
            description: 'Crée des codes QR personnalisés pour les URL, les textes, les coordonnées, etc.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],

    referencesTitle: 'Ressources de référence',
    references: [
        {
            name: 'Spécifications du format de fichier CSV (RFC 4180)',
            description: 'Découvrez les spécifications de format standard et les meilleures pratiques des fichiers CSV',
            url: 'https://tools.ietf.org/html/rfc4180'
        },
        {
            name: 'Norme Office Open XML',
            description: 'Découvrez les spécifications techniques du format de fichier Excel .xlsx',
            url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-376/'
        },
        {
            name: 'Normes d\'encodage des caractères (Unicode)',
            description: 'Découvrez les normes d\'encodage des caractères telles que UTF-8, GBK, etc.',
            url: 'https://www.unicode.org/standard/standard.html'
        }
    ]
}