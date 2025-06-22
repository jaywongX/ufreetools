export default {
    name: 'Formatage JSON',
    description: 'Outil en ligne de formatage et validation JSON, supportant la compression et la mise en forme',
    options: {
        indent: 'Indentation',
        sort: 'Trier les clés',
        compress: 'Compresser',
        beautify: 'Mettre en forme'
    },
    actions: {
        format: 'Formatter JSON',
        compress: 'Compresser',
        clear: 'Effacer',
        copy: 'Copier',
        download: 'Télécharger',
        transferMeaning: 'Échapper',
        contraposition: 'Déséchapper'
    },
    messages: {
        invalidJson: 'Syntaxe JSON invalide',
        copied: 'Copié dans le presse-papiers !',
        empty: 'Veuillez saisir du contenu JSON',
        formatTip: 'La liste des propriétés s\'affiche après le formatage ou la compression JSON',
        formatSuccess: 'Formatage JSON réussi',
        compressSuccess: 'Compression JSON réussie',
        escapeSuccess: 'Échappement JSON réussi',
        unescapeSuccess: 'Déséchappement JSON réussi',
        copyFailed: 'Échec de la copie, veuillez copier manuellement'
    },
    labels: {
        jsonData: 'Données JSON',
        propertyList: 'Liste des propriétés',
        clickToCopy: '(cliquez sur une valeur pour copier)'
    },
    placeholders: {
        jsonInput: 'Collez vos données JSON ici...'
    },
    article: {
        title: "Outil de formatage JSON : guide ultime du traitement des données structurées",
        features: {
            title: "Comprendre le formatage JSON et ses avantages",
            description: "Cet <strong>outil de formatage JSON</strong> est un instrument en ligne soigneusement conçu pour transformer des chaînes JSON brutes en structures organisées et lisibles, tout en validant leur syntaxe. Il offre des fonctionnalités complètes incluant la <strong>mise en forme JSON</strong>, la compression de données, la visualisation des propriétés, ainsi que des opérations spécialisées comme l'échappement et le déséchappement de séquences de caractères.<br><br>Dans ses fonctions de base, l'outil permet aux utilisateurs de convertir instantanément du texte JSON dense et non formaté en un format correctement indenté et navigable visuellement, mettant en évidence les relations hiérarchiques entre les éléments de données. Le composant <strong>validateur JSON</strong> vérifie automatiquement les erreurs de syntaxe comme les crochets manquants, les virgules mal placées ou les valeurs mal formatées, fournissant des messages d'erreur clairs en cas de problème. Le navigateur de propriétés affiche une vue arborescente navigable de la structure de données, permettant de parcourir facilement des objets et tableaux imbriqués complexes, avec une distinction visuelle des types de données. Que vous travailliez avec des réponses API, des fichiers de configuration ou des formats d'échange de données, cet <strong>outil de mise en forme JSON</strong> simplifie le processus de gestion et de compréhension des données structurées.",
            useCases: {
                title: "Cas d'utilisation pratiques du formatage JSON",
                items: [
                    "<strong>Analyse de réponses API</strong> : Lors du traitement d'API externes, les réponses sont souvent renvoyées sous forme JSON compressée pour réduire la taille des données transférées. Utiliser un <strong>formateur JSON</strong> permet aux développeurs de convertir immédiatement ces réponses compactes en un format lisible, facilitant la localisation de champs de données spécifiques, la compréhension de la structure de réponse et l'identification de problèmes potentiels dans les données renvoyées.",
                    "<strong>Débogage de données d'application</strong> : Durant le développement, l'inspection des structures de données JSON est cruciale pour le dépannage. Le <strong>validateur de structure JSON</strong> aide à localiser précisément les erreurs de syntaxe dans les objets JSON, en mettant immédiatement en évidence les données mal formatées qui pourraient causer des erreurs d'application, économisant un temps précieux de débogage. La représentation visuelle facilite le suivi du chemin vers des valeurs imbriquées pouvant causer des problèmes.",
                    "<strong>Gestion de fichiers de configuration</strong> : Les applications modernes utilisent souvent des fichiers JSON pour les paramètres de configuration. Le <strong>vérificateur de format JSON</strong> assure que ces fichiers critiques maintiennent une syntaxe valide, tandis que la fonction de mise en forme rend les structures de configuration complexes plus compréhensibles lorsqu'une édition manuelle est nécessaire. Cela prévient les erreurs d'exécution potentielles causées par des données de configuration mal formatées.",
                    "<strong>Préparation et conversion de données</strong> : Avant d'importer des données JSON dans des bases de données ou outils d'analyse, il est souvent nécessaire de nettoyer et valider leur structure. L'<strong>analyseur JSON en ligne</strong> permet aux analystes de données de valider rapidement l'intégrité des données, comprendre le schéma et préparer des ensembles de données JSON pour un traitement ultérieur, assurant des opérations fluides dans les pipelines de données.",
                    "<strong>Documentation et partage de connaissances</strong> : Lors de la création de documentation API ou du partage de modèles de données avec des membres d'équipe, inclure des exemples JSON correctement formatés améliore la compréhension. La fonctionnalité de <strong>mise en forme JSON</strong> permet de créer des exemples clairs et cohérents montrant clairement la structure des données, rendant les spécifications techniques plus compréhensibles pour les autres développeurs.",
                    "<strong>Préparation pour la génération de code</strong> : De nombreux outils de génération de code acceptent des définitions de schéma JSON comme entrée. Le <strong>validateur de syntaxe JSON</strong> assure que ces définitions de schéma sont exemptes d'erreurs avant d'être traitées par le générateur de code, prévenant les échecs de construction et assurant que le code généré reflète avec précision le modèle de données souhaité."
                ]
            }
        },
        faq: {
            title: "Questions fréquentes sur le formatage JSON",
            items: [
                {
                    question: "Quelle est la différence entre formater et compresser du JSON ?",
                    answer: "Formatter du JSON (aussi appelé mise en forme ou pretty printing) ajoute une indentation appropriée, des sauts de ligne et des espaces pour rendre la structure facile à lire par un humain, étendant essentiellement le JSON pour une meilleure visualisation. Chaque élément a sa propre ligne avec une indentation appropriée",
                },
                {
                    question: "Pourquoi ma validation JSON échoue-t-elle même si elle semble correcte ?",
                    answer: "La validation JSON échoue souvent à cause de problèmes de syntaxe subtils difficiles à repérer à l'œil nu. Les erreurs courantes incluent : les virgules finales après la dernière propriété dans des objets ou tableaux (non autorisées en JSON standard) ; l'utilisation de guillemets simples au lieu de doubles guillemets requis pour les chaînes ; des caractères spéciaux non échappés dans les chaînes (sauts de ligne, tabulations, guillemets) ; des virgules manquantes entre propriétés ; des commentaires de style JavaScript (le JSON ne supporte pas les commentaires) ; et des valeurs non définies ou NaN (invalides en JSON). L'outil de formatage JSON mettra en évidence ces erreurs et indiquera leur position, vous aidant à les identifier et corriger rapidement. Si vos données contiennent des valeurs spéciales ou structures non supportées par le standard JSON, envisagez d'utiliser nos fonctions d'échappement/déséchappement pour encoder correctement ces éléments, assurant un JSON valide pouvant être analysé avec succès sur toutes les plateformes et langages."
                },
                {
                    question: "Comment fonctionnent l'échappement et le déséchappement JSON ?",
                    answer: "L'échappement JSON convertit les caractères spéciaux en leurs séquences échappées pour s'assurer qu'ils sont correctement encodés dans les chaînes JSON. Par exemple, les guillemets deviennent \", les sauts de ligne \n, et les barres obliques inverses \\. Ce processus est crucial lorsque vos données JSON contiennent des caractères qui pourraient briser la syntaxe JSON, comme des guillemets dans des valeurs de chaîne ou des caractères de contrôle. Le déséchappement fait l'inverse, convertissant les séquences échappées en leurs caractères littéraux. C'est particulièrement utile pour analyser du JSON qui a été échappé plusieurs fois ou lorsque vous avez besoin de voir le contenu réel avec tous les caractères spéciaux. Notre outil de formatage JSON fournit ces deux fonctionnalités, vous permettant de préparer du JSON correctement échappé pour le transfert ou stockage, et de convertir du JSON échappé en une forme plus lisible pour l'analyse ou le débogage."
                },
                {
                    question: "Puis-je utiliser l'outil de formatage JSON pour des fichiers de données volumineux ?",
                    answer: "Oui, notre outil de formatage JSON est conçu pour gérer des fichiers JSON assez grands, mais avec des limites pratiques basées sur les capacités du navigateur. Pour des performances optimales, nous recommandons de traiter des fichiers ne dépassant pas quelques mégaoctets. Avec des ensembles de données JSON très volumineux (dizaines ou centaines de mégaoctets), vous pourriez rencontrer des ralentissements car les navigateurs ont des limites mémoire pour le traitement JavaScript de gros textes. Pour les très gros fichiers, envisagez d'utiliser des outils JSON basés sur le bureau avec une gestion mémoire dédiée, ou traitez les données par morceaux. De plus, notre fonction de compression est utile pour les gros fichiers car elle supprime les espaces sans changer la structure des données, pouvant rendre les gros fichiers plus gérables. Si vous travaillez fréquemment avec des structures JSON très grandes, explorez des outils de traitement côté serveur ou des bases de données JSON professionnelles conçues pour la gestion de données haute capacité."
                },
                {
                    question: "Comment trouver une valeur spécifique dans une structure JSON complexe ?",
                    answer: "Utiliser la vue de liste de propriétés de notre outil de formatage JSON simplifie la recherche de valeurs spécifiques dans des structures JSON complexes. Après avoir formaté le JSON, le panneau de droite affiche un arbre hiérarchique de toutes les propriétés, vous permettant de développer des objets et tableaux imbriqués pour naviguer dans la structure. Cette représentation visuelle rend plus facile de suivre le chemin vers des valeurs profondément imbriquées que de scanner du texte brut. Chaque propriété et valeur a un indicateur de type, et les valeurs peuvent être copiées individuellement en cliquant dessus. Pour des recherches plus spécifiques dans de grands documents JSON, vous pouvez utiliser la fonction de recherche du navigateur (Ctrl+F/Cmd+F) après le formatage, car la structure mise en forme avec une indentation appropriée rend les motifs plus faciles à identifier. La liste de propriétés excelle particulièrement pour vous aider à comprendre la structure globale de données JSON complexes, révélant les relations entre différentes parties du document qui pourraient ne pas être immédiatement apparentes dans une vue texte plate."
                }
            ]
        },
        guide: {
            title: "Guide étape par étape pour utiliser l'outil de formatage JSON",
            steps: [
                "<strong>Collez vos données JSON</strong> : Commencez par copier les données JSON brutes depuis leur source (réponse API, fichier, etc.) et collez-les dans la zone de saisie à gauche de l'outil. L'outil accepte toute chaîne JSON valide, qu'elle soit déjà formatée ou compressée.",
                "<strong>Formatez le JSON</strong> : Cliquez sur le bouton 'Formater JSON' dans la barre d'outils pour mettre en forme les données collées. Ce processus ajoutera une indentation et des sauts de ligne appropriés pour rendre la structure lisible, tout en validant la syntaxe. Si votre JSON contient des erreurs de syntaxe, vous verrez un message d'erreur rouge indiquant où se trouve le problème.",
                "<strong>Parcourez la liste des propriétés</strong> : Après le formatage, examinez la liste des propriétés qui apparaît dans le panneau de droite. Cette vue hiérarchique montre tous les objets, tableaux et valeurs dans votre structure JSON. Vous pouvez développer et réduire des éléments imbriqués en cliquant sur les flèches à côté des objets et tableaux, facilitant la navigation dans des structures de données complexes.",
                "<strong>Copiez des valeurs spécifiques</strong> : Si vous avez besoin d'extraire des parties spécifiques des données JSON, cliquez sur n'importe quelle valeur dans la liste des propriétés pour la copier dans le presse-papiers. C'est particulièrement utile lorsque vous devez référencer une valeur ou sous-structure individuelle depuis un document JSON plus large.",
                "<strong>Effectuez d'autres opérations</strong> : Selon vos besoins, utilisez les boutons de fonctionnalités supplémentaires dans la barre d'outils : 'Compresser' pour minimiser le JSON en supprimant tous les espaces (pour réduire la taille des fichiers) ; 'Effacer' pour tout supprimer et recommencer ; 'Échapper' pour convertir des caractères spéciaux en leurs représentations échappées ; ou 'Déséchapper' pour inverser le processus d'échappement.",
                "<strong>Copiez les résultats traités</strong> : Une fois que vous avez formaté ou manipulé le JSON selon vos besoins, cliquez sur le bouton 'Copier' en haut à droite pour copier toute la chaîne JSON traitée dans le presse-papiers. Cela facilite le collage du JSON formaté ou modifié dans votre éditeur de code, documentation ou toute autre destination.",
                "<strong>Validez les modifications</strong> : Si vous effectuez des modifications manuelles au JSON après le formatage, cliquez à nouveau sur 'Formater JSON' pour vous assurer que vos changements maintiennent une syntaxe JSON valide. Cette étape de validation est cruciale avant d'utiliser le JSON dans des applications, car même de petites erreurs de syntaxe peuvent faire échouer complètement l'analyse JSON."
            ]
        },
        conclusion: "JSON est devenu le langage universel d'échange de données dans le développement web et d'applications modernes, faisant des outils de formatage JSON comme celui-ci un élément essentiel pour les développeurs, analystes de données et professionnels de l'informatique. En convertissant des chaînes JSON denses et orientées machine en un format lisible par l'homme, cet outil comble le fossé entre l'efficacité informatique et la compréhension humaine. La capacité à valider, formater et explorer rapidement des structures JSON permet d'économiser d'innombrables heures de débogage et de formatage manuel, tout en assurant l'intégrité des données à travers les systèmes. Que vous intégriez des API, configuriez des applications, dépanniez des problèmes de données ou partagiez des exemples de code, l'outil de formatage JSON fournit les capacités de visualisation et validation nécessaires pour travailler avec des structures de données complexes. Alors que les services web et applications basées sur les données continuent de dominer le paysage technologique, disposer d'un outil fiable de traitement JSON reste une exigence fondamentale pour des flux de développement et maintenance efficaces."
    }
}