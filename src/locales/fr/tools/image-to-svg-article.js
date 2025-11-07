export default {
    title: 'Image vers SVG en ligne : Guide complet sur la vectorisation de bitmap et la compression SVGZ',
    logoAlt: 'Image du produit de l\'outil de conversion d\'image en SVG en ligne',
    functionTitle: 'Qu\'est-ce qu\'un outil de conversion d\'image en SVG ? Comment vectorise-t-il rapidement les images bitmap',
    intro: 'Notre <strong>outil de conversion d\'image en SVG en ligne</strong> utilise des algorithmes open-source exécutés localement dans le navigateur pour convertir instantanément les images bitmap PNG, JPG, GIF, BMP et autres en <strong>graphismes vectoriels SVG</strong> évolutifs, tout en prenant en charge l\'export vers <strong>SVGZ compressé</strong>. Aucun téléchargement sur le serveur requis, aperçu instantané, paramètres ajustables, vous aidant à obtenir des chemins vectoriels propres et modifiables dans les scénarios de conception, de développement et d\'impression. Grâce à une quantification de couleur efficace et à une optimisation de chemin, cette solution <strong>d\'image vers SVG en ligne</strong> offre un soutien puissant pour votre flux de travail multiplateforme.',

    useCasesTitle: 'Scénarios d\'application typiques de l\'outil de conversion d\'image en SVG en ligne',
    useCases: [
        'Vectoriser rapidement les logos, icônes et illustrations plates pour faciliter la mise à l\'échelle et l\'édition',
        'Convertir les croquis dessinés à la main scannés en chemins SVG, adaptés pour une coloration et une mise en page ultérieures',
        'Générer des graphismes vectoriels plus petits pour les sites Web et les mini-programmes afin d\'optimiser le chargement et le SEO',
        'Exporter les images bitmap au format compressé SVGZ pour réduire davantage la taille pour une utilisation mobile',
        'Vectoriser les PNG à fond transparent tout en préservant les effets visuels des bords et des informations de transparence',
        'Vectoriser les images GIF statiques (première image) pour la refonte graphique et l\'animation',
        'Adapté aux scénarios de fabrication nécessitant des chemins SVG comme la gravure laser, la CNC et les machines de découpe'
    ],

    tipTitle: 'Conseils professionnels :',
    tipContent: 'Lors de la <strong>conversion d\'image en SVG en ligne</strong>, réduire de manière appropriée le nombre de couleurs et augmenter le seuil d\'omission de chemin (pathomit) peut efficacement réduire le bruit ; activer simultanément le filtrage de ligne (linefilter) est plus propice à l\'obtention de chemins lisses pour les dessins au trait et les icônes.',

    conclusion: 'Choisissez notre <strong>outil de conversion d\'image en SVG en ligne</strong> pour effectuer la vectorisation, l\'aperçu, l\'édition et l\'export localement dans votre navigateur, évitant ainsi le téléchargement de données privées. Grâce à l\'export standard <strong>SVG</strong> et <strong>SVGZ</strong>, ce flux de travail <strong>d\'image vers SVG en ligne</strong> convient aussi bien à la conception et au développement web qu\'au traitement de chemins dans les scénarios de fabrication.',

    faqTitle: 'Foire aux questions (FAQ)',
    faqs: [
        {
            question: 'Comment l\'outil de conversion d\'image en SVG en ligne réalise-t-il la vectorisation ?',
            answer: 'Cet outil effectue la quantification des couleurs, la détection de contours et l\'ajustement de chemins localement dans le navigateur en utilisant des algorithmes open-source pour convertir les images bitmap en chemins SVG modifiables. L\'ensemble du processus ne nécessite aucun téléchargement sur le serveur, réalisant véritablement la <strong>conversion d\'image en SVG en ligne</strong> et la protection de la confidentialité.'
        },
        {
            question: 'Peut-on exporter du SVGZ compressé ? La conversion d\'image en SVG en ligne le prend-elle en charge ?',
            answer: 'Oui. Vous pouvez sélectionner <strong>SVGZ</strong> dans les options d\'export. Nous effectuerons une compression GZIP sur la chaîne SVG localement pour produire un fichier plus petit, adapté aux besoins de <strong>conversion d\'image en SVG en ligne</strong> dans les scénarios mobiles et de réseau faible.'
        },
        {
            question: 'Quel est l\'effet de vectorisation des PNG à fond transparent ?',
            answer: 'L\'outil effectuera une approximation raisonnable des pixels transparents tout en maintenant la visualisation des bords, adaptée aux scénarios de <strong>conversion d\'image en SVG en ligne</strong> tels que les logos et les icônes. Vous pouvez également optimiser les résultats en réduisant le nombre de couleurs et en augmentant pathomit.'
        },
        {
            question: 'Quels formats d\'entrée sont pris en charge pour la conversion d\'image en SVG en ligne ?',
            answer: 'Nous prenons en charge les formats courants tels que PNG, JPG, GIF, BMP et WEBP (GIF prend la première image), qui peuvent être importés par glisser-déposer, téléchargement par clic ou collage depuis le presse-papiers pour réaliser un flux de travail <strong>d\'image vers SVG en ligne</strong> efficace.'
        }
    ],

    tutorialTitle: 'Comment utiliser l\'outil de conversion d\'image en SVG en ligne (étapes détaillées)',
    step1: {
        title: 'Télécharger ou coller des images',
        description: 'Cliquez sur la zone de téléchargement ou <strong>glissez</strong> directement les fichiers ; prend également en charge le <strong>collage</strong> depuis le presse-papiers. Il est recommandé d\'utiliser des images sources claires pour obtenir des chemins vectoriels de haute qualité.',
        note: 'Prend en charge PNG/JPG/GIF/BMP/WEBP, plusieurs images entreront dans la file d\'attente par lots.'
    },
    step2: {
        title: 'Aperçu de l\'entrée et vérification du fond transparent',
        description: 'Confirmez dans la zone d\'aperçu de gauche que le fichier importé est correct ; pour les <strong>PNG à fond transparent</strong>, observez d\'abord si les bords et les zones transparentes correspondent aux attentes.',
        note: 'Vous pouvez supprimer les images sélectionnées par erreur pour garder la file d\'attente propre.'
    },
    step3: {
        title: 'Ajuster les paramètres de vectorisation',
        description: 'Ajustez le <strong>nombre de couleurs</strong>, <strong>ltres</strong>, <strong>qtres</strong>, <strong>pathomit</strong> et le <strong>filtrage de ligne</strong> selon les caractéristiques de l\'image. L\'aperçu de droite se rafraîchira en temps réel, vous aidant à obtenir le meilleur équilibre lors de la <strong>conversion d\'image en SVG en ligne</strong>.',
        note: 'Augmentez pathomit pour les dessins au trait, réduisez les couleurs pour les logos afin d\'obtenir des chemins plus propres.'
    },
    step4: {
        title: 'Exécuter la conversion et voir la comparaison',
        description: 'Cliquez sur "Commencer la conversion en SVG", l\'outil générera <strong>SVG</strong> localement et fournira un aperçu interactif. Grâce à la vue comparative de l\'image originale et vectorisée, vérifiez rapidement la qualité des chemins.',
        note: 'Il est possible de visualiser et d\'agrandir les détails de manière fluide sur les appareils mobiles.'
    },
    step5: {
        title: 'Sélectionner le format d\'export : SVG ou SVGZ',
        description: 'Pour une taille de fichier minimale, choisissez <strong>SVGZ</strong> ; pour une édition supplémentaire et la compatibilité, choisissez <strong>SVG</strong>. Les deux peuvent être utilisés pour l\'application des résultats de <strong>conversion d\'image en SVG en ligne</strong> dans les outils web et de conception.',
        note: 'SVGZ se charge de manière plus conviviale sur les réseaux faibles et les appareils mobiles.'
    },
    step6: {
        title: 'Télécharger ou empaqueter par lots',
        description: 'Téléchargez chaque graphique vectoriel individuellement, ou utilisez "Téléchargement par lots (ZIP)" pour exporter les résultats de la file d\'attente en une seule fois, économisant du temps dans le processus de <strong>conversion d\'image en SVG en ligne</strong>.',
        note: 'Toutes les opérations sont effectuées localement dans le navigateur, protégeant la confidentialité des images.'
    },

    successTitle: 'Félicitations !',
    successContent: 'Vous avez maîtrisé l\'utilisation de la <strong>conversion d\'image en SVG en ligne</strong> pour effectuer la vectorisation de bitmap, l\'optimisation des paramètres et l\'export dans plusieurs formats.',

    relatedToolsTitle: 'Outils connexes qui pourraient vous intéresser',
    relatedTools: [
        {
            name: 'Compresseur d\'images',
            description: 'Réduire la taille du fichier image sans perte de qualité significative.',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: 'Redimensionneur d\'images par lots',
            description: 'Redimensionner les images à des dimensions spécifiques ou les mettre à l\'échelle par pourcentage.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: 'Inverser les couleurs d\'image',
            description: 'Inversion des couleurs en un clic pour générer des négatifs photographiques et des effets créatifs.',
            url: 'https://www.ufreetools.com/tool/invert-image-colors'
        },
        {
            name: 'Générateur de codes QR',
            description: 'Créer des codes QR personnalisés pour les URL, textes, informations de contact, etc.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],

    referencesTitle: 'Ressources de référence',
    references: [
        {
            name: 'Bases SVG et meilleures pratiques (MDN)',
            description: 'Découvrez la syntaxe SVG, le rendu et les principes fondamentaux d\'accessibilité.',
            url: 'https://developer.mozilla.org/fr/docs/Web/SVG'
        },
        {
            name: 'Recherche sur la quantification des couleurs et la vectorisation d\'images',
            description: 'Explorer les bases théoriques des méthodes de quantification, de détection de contours et d\'ajustement de chemins.',
            url: 'https://fr.wikipedia.org/wiki/Quantification_(signal)'
        },
        {
            name: 'Balisage Schema.org FAQPage',
            description: 'Utiliser des données structurées pour aider les moteurs de recherche à comprendre le contenu des FAQ.',
            url: 'https://schema.org/FAQPage'
        }
    ]
}