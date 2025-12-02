export default {
    title: 'Convertisseur CSV vers Excel : Guide de conversion par lots haute fidélité et exportation multi-tableaux',
    functionTitle: 'Comment le convertisseur CSV vers Excel résout-il les défis d\'interaction des données inter-systèmes ?',
    intro: '<p>Le convertisseur CSV vers Excel est conçu pour les scénarios d\'analyse de données, d\'intégration de systèmes et d\'importation par lots, permettant une conversion directe de données texte telles que CSV, TSV et TXT en classeurs Excel dans le navigateur. L\'outil prend en charge la détection automatique d\'encodage, la détection intelligente de délimiteurs, le traitement par lots de fichiers multiples, la journalisation en temps réel et l\'aperçu des données, permettant aux équipes de générer rapidement des résultats .xlsx conformes sans installer de logiciel de bureau.</p>',
    useCasesTitle: 'Scénarios d\'application typiques',
    useCases: [
        'Convertir les données de commandes CSV exportées depuis les plateformes de commerce électronique en rapports Excel pour examen financier et archivage',
        'Convertir par lots les fichiers TSV générés par les systèmes de collecte de journaux en fichiers Excel multi-feuilles pour analyse par les outils BI',
        'Organiser les données historiques CSV en modèles Excel avant le lancement d\'un système CRM ou ERP pour importation par lots',
        'Préparer des fichiers Excel formatés pour la collaboration inter-départements, permettant aux membres non techniques de visualiser les données en toute sécurité',
        'Générer des pièces jointes Excel plus lisibles pour la livraison de données ou les appels d\'offres afin de répondre aux exigences de conformité d\'audit',
        'Convertir par lots les CSV renvoyés par les API en Excel, en les combinant avec des modèles de graphiques ou de macros pour une analyse rapide',
        'Organiser les journaux d\'appareils IoT CSV en documents Excel multi-feuilles selon le type d\'appareil',
        'Convertir les données CSV d\'exemple en fichiers de pratique Excel en un clic dans des scénarios de formation ou d\'enseignement'
    ],
    logoAlt: "Aperçu du produit Convertisseur CSV vers Excel",
    tipTitle: 'Conseil professionnel :',
    conclusion: '<p>Basé sur une implémentation frontale pure, le <strong>convertisseur CSV vers Excel</strong> permet aux ingénieurs de données et aux utilisateurs professionnels d\'effectuer une conversion par lots, un nommage standardisé et une sortie multi-feuilles sans télécharger de fichiers sensibles. Combiné avec la journalisation et la détection d\'encodage, il minimise les échecs d\'importation causés par les incohérences de format. Pour un nettoyage ou un fractionnement supplémentaire des données, vous pouvez utiliser le <a href="https://www.ufreetools.com/tool/excel-to-csv-converter" target="_blank">convertisseur Excel vers CSV</a> pour une conversion bidirectionnelle ; pour comprendre les normes CSV, consultez <a href="https://tools.ietf.org/html/rfc4180" target="_blank" rel="noopener noreferrer">RFC 4180</a> pour des spécifications autoritaires.</p>',
    faqTitle: 'Questions fréquemment posées',
    faqs: [
        {
            question: 'Quels délimiteurs et qualificatifs de texte le convertisseur CSV vers Excel prend-il en charge ?',
            answer: '<p>L\'outil dispose d\'options intégrées de virgule, point-virgule, tabulation, barre verticale et délimiteurs personnalisés, et prend en charge les CSV complexes avec guillemets doubles, simples ou sans qualificatifs. Si vous sélectionnez "Détection automatique", le système calculera la combinaison de délimiteurs la plus probable basée sur les premières lignes de données pour garantir un nombre de colonnes précis dans l\'Excel converti.</p>'
        },
        {
            question: 'Comment traiter les fichiers CSV avec différents encodages ?',
            answer: '<p>Nous fournissons une détection automatique d\'encodage et permettons de spécifier manuellement des encodages courants tels que UTF-8, UTF-8 BOM, UTF-16 LE et GBK. Si vous rencontrez des encodages spéciaux, vous pouvez d\'abord les convertir en UTF-8 dans des outils externes avant de télécharger pour garantir que les caractères chinois ou les symboles dans Excel n\'apparaissent pas déformés.</p>'
        },
        {
            question: 'Peut-on fusionner plusieurs fichiers CSV dans le même classeur Excel ?',
            answer: '<p>Oui. Cochez "Combiner en un seul fichier Excel" dans les "Paramètres du classeur Excel", et le système générera une feuille de calcul pour chaque CSV. Les noms de feuilles peuvent être basés sur les noms de fichiers ou des préfixes personnalisés, et des horodatages peuvent être ajoutés pour faciliter le suivi des sources.</p>'
        },
        {
            question: 'L\'Excel converti conservera-t-il les en-têtes et les lignes vides du CSV ?',
            answer: '<p>Par défaut, la première ligne est conservée comme en-tête, et les lignes vides, les cellules vides et l\'ordre des données originales sont entièrement préservés. Pour ignorer les en-têtes, vous pouvez désactiver l\'option "La première ligne contient l\'en-tête" dans les paramètres et réexécuter la conversion, et le système générera Excel en mode données pures.</p>'
        },
        {
            question: 'Comment visualiser le processus et résoudre les erreurs lors de la conversion par lots ?',
            answer: '<p>Chaque conversion génère un journal de processus enregistrant les fichiers analysés, les feuilles de calcul créées, les statistiques de lignes/colonnes et les erreurs possibles. Vous pouvez développer le panneau de journal ou cliquer sur "Copier le journal" pour le partager avec l\'équipe, facilitant le dépannage avant le déploiement du code ou la livraison des données.</p>'
        }
    ],
    tutorialTitle: 'Guide d\'utilisation',
    steps: [
        {
            title: 'Télécharger ou importer des fichiers CSV',
            description: 'Cliquez sur le bouton de téléchargement ou faites glisser les fichiers vers la zone désignée, prenant en charge le traitement par lots de fichiers multiples. Vous pouvez également coller des liens CSV publics dans "Importer depuis une URL", et le système les récupérera automatiquement et les ajoutera à la file d\'attente.',
            note: 'Il est recommandé de garder les fichiers individuels en dessous de 50 Mo. Les fichiers volumineux peuvent être divisés et convertis par lots.'
        },
        {
            title: 'Vérifier les résultats de détection automatique',
            description: 'Le système tentera de détecter l\'encodage et le délimiteur, et affichera les premières lignes de données brutes. Si les résultats de détection ne correspondent pas aux attentes, vous pouvez sélectionner manuellement l\'encodage ou le délimiteur pour garantir un nombre de colonnes correct et un affichage approprié des caractères chinois.',
            note: 'Si nécessaire, convertissez l\'encodage dans des outils tiers avant de télécharger à nouveau.'
        },
        {
            title: 'Configurer les options d\'analyse CSV',
            description: 'Ajustez le délimiteur, le qualificatif de texte, la fin de ligne et les options d\'en-tête dans les "Paramètres d\'analyse CSV". Les CSV générés par différentes langues ou systèmes varient considérablement, il est donc recommandé de configurer selon les règles d\'exportation du système source.',
            note: 'Garder "La première ligne contient l\'en-tête" générera des lignes d\'en-tête dans Excel.'
        },
        {
            title: 'Définir la politique du classeur Excel',
            description: 'Personnalisez le nom du classeur, les règles de nommage des feuilles et s\'il faut fusionner en un seul Excel. Pour les scénarios d\'agrégation de fichiers multiples, activez "Combiner en un seul fichier Excel" et ajoutez des horodatages pour un suivi facile par la suite.',
            note: 'Si la fusion est annulée, l\'outil produira un fichier .xlsx indépendant pour chaque CSV.'
        },
        {
            title: 'Exécuter la conversion et surveiller les journaux',
            description: 'Après avoir cliqué sur "Convertir en Excel", le système affichera une barre de progression en temps réel et enregistrera les étapes d\'analyse, de création de tableaux, de statistiques, etc. dans le journal. Les erreurs arrêteront le traitement du fichier actuel et afficheront les détails dans le journal.',
            note: 'Les journaux prennent en charge l\'expansion, le repli et la copie en un clic pour un dépannage collaboratif.'
        },
        {
            title: 'Télécharger Excel ou le paquet par lots',
            description: 'Une fois la conversion terminée, vous pouvez télécharger les fichiers Excel individuellement, ou cliquer sur "Téléchargement par lots (ZIP)" pour obtenir tous les résultats en une seule fois. La liste affichera les noms des feuilles de calcul, les tailles de fichiers et des extraits d\'aperçu pour chaque classeur afin de vérifier rapidement.',
            note: 'Toutes les opérations sont effectuées dans le navigateur local sans téléchargement vers le serveur, assurant la sécurité des données.'
        }
    ],
    successTitle: 'Conversion terminée',
    successContent: 'Félicitations ! Vous avez appris à utiliser le convertisseur CSV vers Excel pour organiser rapidement des données textuelles dispersées en résultats Excel structurés pour analyse, reporting ou intégration système.',
    relatedToolsTitle: 'Outils connexes recommandés',
    relatedTools: [
        {
            name: 'Convertisseur Excel vers CSV',
            description: 'Exportation par lots de classeurs Excel vers CSV, maintenant un encodage et des délimiteurs cohérents.',
            url: 'https://www.ufreetools.com/tool/excel-to-csv-converter'
        },
        {
            name: 'Redimensionneur d\'images',
            description: 'Redimensionne les images à des dimensions spécifiques ou les met à l\'échelle par pourcentage.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: 'Générateur de sceaux',
            description: 'Crée diverses images de sceaux en ligne, générant des cachets d\'entreprise, des cachets personnels et d\'autres sceaux numériques.',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        },
        {
            name: 'Générateur de codes QR',
            description: 'Crée des codes QR personnalisés pour les URL, les textes, les informations de contact, etc.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],
    referencesTitle: 'Ressources de référence',
    references: [
        {
            name: 'RFC 4180 - Norme CSV',
            description: 'Découvrez les spécifications formelles et les conventions de champ du format de fichier CSV.',
            url: 'https://tools.ietf.org/html/rfc4180'
        },
        {
            name: 'Spécification Microsoft Excel Open XML',
            description: 'Obtenez une compréhension approfondie de la structure des fichiers .xlsx et des exigences de compatibilité.',
            url: 'https://learn.microsoft.com/en-us/openspecs/office_standards/ms-xlsx/' 
        },
        {
            name: 'Norme d\'encodage WHATWG',
            description: 'Liste des encodages de texte pris en charge par les navigateurs et détails d\'implémentation.',
            url: 'https://encoding.spec.whatwg.org/'
        }
    ]
}