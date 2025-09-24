export default {
  title: 'Outil de Flou d\'Arrière-plan : Flou d\'Image d\'Arrière-plan en Ligne pour Effets de Profondeur de Champ Professionnels',
  functionTitle: 'Qu\'est-ce qu\'un Outil de Flou d\'Arrière-plan et à quoi sert-il ?',
  intro: 'Cet outil est un <strong>outil de flou d\'arrière-plan en ligne</strong> purement frontal (Flou d\'Image d\'Arrière-plan). Il combine des filtres WebGL avec des algorithmes de segmentation humaine pour réaliser un flou gaussien, une profondeur de champ d\'objectif, un flou de mouvement, un flou radial et un <b>flou d\'arrière-plan de niveau appareil photo professionnel</b>. Il prend en charge le traitement par lots et l\'exportation multi-format, vous permettant d\'obtenir rapidement des photos avec des arrière-plans propres et des sujets mis en évidence dans votre navigateur, adapté aux images principales de commerce électronique, aux photos d\'identité, aux couvertures de réseaux sociaux et autres scénarios.',
  useCasesTitle: 'Scénarios d\'Application Courants pour le Flou d\'Arrière-plan',
  useCases: [
    'Images principales de commerce électronique supprimant les arrière-plans distrayants pour mettre en évidence les produits',
    'Photos de portrait avec flou d\'arrière-plan pour des effets de profondeur de champ professionnels',
    'Photos d\'identité ou portraits professionnels, remplacés par des arrière-plans de couleur unie ou dégradés',
    'Embellissement rapide des couvertures de réseaux sociaux et des images de couverture de courtes vidéos',
    'Traitement unifié d\'arrière-plan pour les diapositives de présentation et les conceptions d\'affiches',
    'Flou d\'arrière-plan des photos touristiques pour protéger la vie privée et améliorer l\'esthétique',
    'Flou d\'arrière-plan des photos de groupe avec exportation par lots',
    'Génération rapide d\'effets de mise au point douce et de mise au point radiale pour le contenu UGC'
  ],
  tipTitle: 'Conseil Professionnel :',
  tipContent: 'Lorsqu\'il est utilisé pour des sujets de portrait, veuillez activer "Activer la Segmentation de Premier Plan" et augmenter appropriément "Adoucissement des Bords" pour réduire significativement les dents de scie des bords des cheveux. Pour les images avec des exigences de haute qualité, privilégiez l\'exportation aux formats PNG ou WebP.',
  conclusion: 'L\'<strong>outil de flou d\'arrière-plan</strong> résout efficacement les points de douleur "arrière-plans en désordre" et "sujets non mis en évidence" grâce à une segmentation intelligente et à plusieurs algorithmes de flou. Que ce soit pour la photographie de produits, les portraits ou la création de contenu social, terminer le flou d\'arrière-plan en ligne peut considérablement améliorer la mise au point visuelle et le professionnalisme.',
  faqTitle: 'Questions Fréquemment Posées',
  faqs: [
    {
      question: 'Comment l\'outil de flou d\'arrière-plan en ligne réalise-t-il des effets de profondeur de champ d\'appareil photo professionnels ?',
      answer: 'Cet outil de flou d\'arrière-plan en ligne combine la segmentation de premier plan MediaPipe avec des filtres WebGL, appliquant un flou gaussien/objectif/radial/mouvement aux zones d\'arrière-plan pour réaliser des transitions de profondeur de champ et des effets de mise au point douce similaires aux appareils photos professionnels.'
    },
    {
      question: 'Quelles méthodes de remplacement d\'arrière-plan sont prises en charge (couleur unie/dégradé/image) ?',
      answer: 'L\'outil prend en charge trois modes : arrière-plan de couleur unie, arrière-plan de dégradé linéaire et arrière-plan d\'image, avec une transparence d\'arrière-plan et des modes de fusion ajustables pour répondre aux exigences des images principales de commerce électronique, des photos d\'identité et des styles de marque cohérents.'
    },
    {
      question: 'Comment garantir la qualité d\'exportation et contrôler la taille du fichier ?',
      answer: 'Vous pouvez choisir les formats PNG/JPG/WebP et contrôler la taille d\'exportation via des curseurs de qualité et des préréglages de dimensions. PNG et WebP sont plus adaptés aux scénarios de flou d\'arrière-plan avec des exigences de haute qualité.'
    },
    {
      question: 'Comment utiliser le traitement par lots et le tri des pages ?',
      answer: 'Plusieurs images peuvent être importées à la fois, avec sélection de plage et contrôles par cases à cocher pour traiter des "pages" spécifiques, prenant en charge le tri par déplacement haut/bas, et filtrage automatique des images invalides avec "Passer les Pages Vides".'
    },
    {
      question: 'Est-il nécessaire de télécharger les images sur le serveur, comment la confidentialité est-elle protégée ?',
      answer: 'Tout le traitement de flou d\'arrière-plan est terminé localement dans le navigateur et n\'est pas téléchargé sur un serveur, assurant la confidentialité et la sécurité des images.'
    }
  ],
  tutorialTitle: 'Comment Utiliser l\'Outil de Flou d\'Arrière-plan',
  steps: [
    {
      title: 'Télécharger ou Importer des Images',
      description: 'Glissez-déposez ou cliquez pour télécharger des images locales, ou collez des images du presse-papiers, activez la capture de caméra, ou importez des images réseau via URL. Prend en charge les formats PNG, JPG, WEBP, BMP.',
      note: 'Plusieurs images peuvent être importées à la fois pour un flou d\'arrière-plan par lots.'
    },
    {
      title: 'Sélectionner le Type de Flou et les Paramètres',
      description: 'Choisissez le flou gaussien, d\'objectif, de mouvement ou radial dans "Type de Flou", et affinez précisément les effets via des curseurs pour le rayon, l\'angle, le point central et la bande passante de focus.',
      note: 'Cocher "Afficher la Comparaison Avant/Après" permet une comparaison en temps réel du flou d\'arrière-plan avant et après.'
    },
    {
      title: 'Activer la Segmentation de Premier Plan et les Paramètres d\'Arrière-plan',
      description: 'Activez "Activer la Segmentation de Premier Plan" pour améliorer la qualité des bords du sujet, augmentez "Adoucissement des Bords" pour des transitions plus naturelles. Dans "Paramètres d\'Arrière-plan", choisissez un arrière-plan de couleur unie, dégradé ou image, et ajustez la transparence et les modes de fusion si nécessaire.',
      note: 'Lorsque "Préserver l\'Arrière-plan Original" est sélectionné, seule la zone d\'arrière-plan est floutée tandis que le sujet reste clair.'
    },
    {
      title: 'Dimensions et Qualité',
      description: 'Dans "Taille de Sortie et Qualité", choisissez des préréglages de réseaux sociaux ou des dimensions personnalisées, définissez la qualité JPG/WebP et le pourcentage d\'échelle. Pour l\'impression, augmentez le DPI et exportez des pixels plus élevés proportionnellement.',
      note: 'PNG et WebP sont plus adaptés aux scénarios de flou d\'arrière-plan nécessitant la préservation des détails.'
    },
    {
      title: 'Exporter et Téléchargement par Lots',
      description: 'Sélectionnez le format d\'exportation pour chaque image et cliquez sur "Télécharger" pour sauvegarder ; plusieurs images peuvent utiliser "Téléchargement par Lots (ZIP)" pour exporter tous les résultats de flou d\'arrière-plan à la fois.',
      note: 'Tout le traitement est terminé localement dans le navigateur, les images ne sont pas téléchargées sur le serveur.'
    },
    {
      title: 'Contrôle de Page',
      description: 'Triez les "pages" via des cases à cocher, saisie de plage et déplacement haut/bas, activez "Passer les Pages Vides" pour filtrer automatiquement les images invalides avec une faible variance de luminosité.',
      note: 'Exemple de plage : 1-3,5,7-9.'
    }
  ],
  successTitle: 'Félicitations !',
  successContent: 'Vous avez appris à utiliser notre outil de flou d\'arrière-plan pour réaliser des effets de profondeur de champ et de mise au point douce de niveau appareil photo professionnel, adaptés à divers scénarios créatifs et commerciaux.',
  relatedToolsTitle: 'Outils Connexes qui Pourraient Vous Intéresser',
  relatedTools: [
    {
      name: 'Compresseur d\'Images',
      description: 'Réduire la taille du fichier image sans perte de qualité significative.',
      url: 'https://www.ufreetools.com/tool/image-compressor'
    },
    {
      name: 'Redimensionneur d\'Images',
      description: 'Redimensionner les images à des dimensions spécifiques ou mettre à l\'échelle par pourcentage.',
      url: 'https://www.ufreetools.com/tool/image-batch-resizer'
    },
    {
      name: 'Générateur de Sceaux',
      description: 'Création en ligne de diverses images de sceaux, générant des tampons d\'entreprise, des cachets personnels et autres tampons numériques.',
      url: 'https://www.ufreetools.com/tool/seal-generator'
    },
    {
      name: 'Générateur de Codes QR',
      description: 'Créer des codes QR personnalisés pour les URL, les textes, les informations de contact et plus encore.',
      url: 'https://www.ufreetools.com/tool/qr-code-generator'
    }
  ],
  referencesTitle: 'Ressources de Référence',
  references: [
    {
      name: 'Segmentation de Selfie MediaPipe',
      description: 'Modèle de segmentation de premier plan humain et utilisation par Google',
      url: 'https://github.com/google/mediapipe/blob/master/docs/solutions/selfie_segmentation.md'
    },
    {
      name: 'glfx.js',
      description: 'Bibliothèque d\'effets d\'image en temps réel basée sur WebGL',
      url: 'https://github.com/evanw/glfx.js'
    },
    {
      name: 'StackBlur',
      description: 'Algorithme de flou de canevas rapide et contrôlable, adapté comme solution de secours et traitement d\'adoucissement',
      url: 'https://github.com/flozz/StackBlur'
    }
  ]
}