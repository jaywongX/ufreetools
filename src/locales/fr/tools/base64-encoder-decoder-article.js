export default {
    title: "Encodeur/Décodeur Base64 : Convertir et protéger vos données",
    features: {
        title: "Comprendre l'encodage et le décodage Base64",
        description: "L'<strong>encodeur/décodeur Base64</strong> est un outil essentiel pour convertir entre données binaires et format texte ASCII. Ce puissant <strong>outil d'encodage de données</strong> peut transformer tout type d'information binaire en une représentation texte sûre utilisant seulement 64 caractères ASCII imprimables (A-Z, a-z, 0-9, +, /), idéale pour transmettre des données via des systèmes basés sur du texte.<br><br>Notre <strong>outil de conversion Base64</strong> prend en charge plusieurs méthodes d'entrée, y compris texte, fichiers et entrée hexadécimale, avec des options avancées d'encodage des caractères (UTF-8 et GBK). Pendant le <strong>décodage Base64</strong>, l'outil détecte automatiquement les types de fichiers comme les images, documents et archives, offre une prévisualisation pour les images et prend en charge le téléchargement dans plusieurs formats. Pour les gros fichiers, notre <strong>encodeur Base64</strong> implémente un traitement par blocs efficace avec visualisation en temps réel de la progression.",
        useCases: {
            title: "Cas d'utilisation courants de l'encodage Base64",
            items: [
                "Intégrer directement des fichiers binaires comme des images dans du code HTML, CSS ou JavaScript via des URI de données, créant des pages web autonomes sans ressources externes",
                "Transmettre en toute sécurité des données binaires via des systèmes de courriel ou des protocoles texte purs, évitant la corruption potentielle due à des caractères non-textes",
                "Stocker des structures de données complexes dans des cookies, localStorage ou autres mécanismes de stockage Web ne supportant que le format texte",
                "Encoder des identifiants d'authentification ou jetons API pour transmission sécurisée dans des en-têtes HTTP (authentification basique)",
                "Convertir des pièces jointes binaires pour inclusion dans des formats d'échange de données basés sur du texte comme XML ou JSON",
                "Créer des chaînes de données sûres pour les URL utilisables dans des paramètres d'URL, évitant les caractères spéciaux nécessitant un encodage URL"
            ]
        }
    },
    faq: {
        title: "Questions fréquentes sur l'encodage Base64",
        items: [
            {
                question: "Pourquoi les données encodées en Base64 sont-elles plus volumineuses que les originales ?",
                answer: "L'encodage Base64 augmente la taille des données d'environ 33% car il utilise 4 octets de texte ASCII pour représenter chaque bloc de 3 octets de données binaires. C'est une caractéristique fondamentale de Base64, chaque caractère n'utilisant que 6 bits (2^6 = 64 valeurs possibles) au lieu de 8. Cette augmentation de taille est un compromis inévitable pour obtenir une compatibilité textuelle entre systèmes, particulièrement ceux ne supportant que les caractères ASCII. Pour les gros fichiers, cette augmentation doit être prise en compte lors de la planification du stockage ou des besoins de transmission."
            },
            {
                question: "Quelle est la différence entre Base64 standard et Base64 sûr pour les URL ?",
                answer: "L'encodage Base64 standard utilise les caractères '+' et '/' qui ont une signification spéciale dans les URL et peuvent causer des problèmes lorsque les données encodées sont incluses dans des paramètres d'URL. Le Base64 sûr pour les URL remplace ces caractères respectivement par '-' et '_', rendant la chaîne encodée utilisable sans risque dans les URL sans nécessiter d'échappement supplémentaire. Notre encodeur Base64 inclut une option pour générer une sortie sûre pour les URL, vous permettant de choisir le format approprié selon l'utilisation prévue des données encodées."
            },
            {
                question: "L'encodage Base64 peut-il servir à chiffrer ou sécuriser des données ?",
                answer: "Non, l'encodage Base64 n'est pas un chiffrement et n'offre aucune sécurité ou confidentialité des données. C'est simplement un schéma d'encodage pour convertir des données binaires en format texte. Les données Base64 peuvent être facilement décodées par quiconque utilisant des outils largement disponibles (comme notre décodeur Base64). Si vous avez besoin de confidentialité des données, vous devriez utiliser un algorithme de chiffrement approprié (comme AES ou RSA) avant l'encodage Base64. Base64 sert principalement à la compatibilité, pas à la sécurité."
            },
            {
                question: "Comment reconnaître du texte encodé en Base64 ?",
                answer: "Le texte encodé en Base64 présente généralement ces caractéristiques : il ne contient que des lettres (A-Z, a-z), chiffres (0-9) et typiquement les caractères '+' et '/' (ou '-' et '_' pour la variante sûre pour les URL) ; sa longueur est toujours un multiple de 4 caractères (parfois complété par '=' à la fin) ; il ressemble généralement à une chaîne aléatoire sans motif de mots naturels. Notre décodeur Base64 inclut une fonction de validation pour vérifier si l'entrée est un Base64 valide avant tentative de décodage."
            },
            {
                question: "Que se passe-t-il si ma chaîne Base64 manque de caractères de remplissage ?",
                answer: "L'encodage Base64 ajoute parfois des caractères de remplissage ('=') à la fin pour s'assurer que la longueur de la chaîne est un multiple de 4. Bien que la spécification Base64 standard requière ce remplissage, de nombreux décodeurs modernes (dont le nôtre) peuvent gérer les chaînes Base64 incomplètes en calculant automatiquement le remplissage approprié selon la longueur de la chaîne. Cependant, pour une compatibilité maximale avec tous les décodeurs Base64, il est préférable d'inclure le remplissage approprié lors de la génération de données encodées en Base64."
            }
        ]
    },
    guide: {
        title: "Guide étape par étape pour utiliser l'encodeur/décodeur Base64",
        steps: [
            "Sélectionnez le mode opératoire souhaité en cliquant sur 'Encoder' ou 'Décoder' en haut de l'interface",
            "Pour l'encodage, choisissez votre méthode d'entrée : 'Texte' pour une entrée texte, 'Fichier' pour téléverser un fichier binaire, ou 'Hex' pour une représentation hexadécimale",
            "Si vous encodez un fichier image, vous pouvez cocher 'Ajouter un en-tête Base64 pour les images' pour inclure le préfixe Data URI approprié, facilitant son utilisation directe dans des environnements web",
            "Pour le décodage, sélectionnez 'Texte' pour une entrée chaîne Base64 ou 'Fichier' pour téléverser un fichier texte contenant des données Base64",
            "Lors du décodage, choisissez l'encodage de caractères souhaité (UTF-8 ou GBK) dans le menu déroulant pour traiter correctement les caractères internationaux",
            "Saisissez vos données ou téléversez un fichier selon la méthode d'entrée sélectionnée",
            "Cliquez sur 'Encoder' ou 'Décoder' pour traiter les données - le résultat s'affichera dans le champ de sortie inférieur",
            "Pour les images décodées, utilisez le bouton 'Afficher l'image' pour prévisualiser le résultat, ou l'option de téléchargement pour sauvegarder le contenu décodé dans votre format préféré"
        ]
    },
    conclusion: "L'encodeur/décodeur Base64 est un outil polyvalent adapté à divers scénarios nécessitant la transmission de données entre systèmes ne supportant que le texte. Que vous soyez un développeur web intégrant des images dans du CSS, un ingénieur système envoyant des données binaires via des protocoles texte, ou simplement quelqu'un ayant besoin de décoder une chaîne Base64 rencontrée, cet outil fournit une solution efficace avec des options avancées pour vos besoins spécifiques. En supportant plusieurs méthodes d'entrée, encodages de caractères et formats de fichiers, notre outil Base64 aide à connecter les systèmes binaires et textuels dans les environnements informatiques diversifiés d'aujourd'hui."
}
