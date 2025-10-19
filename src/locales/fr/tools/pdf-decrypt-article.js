export default {
  title: 'Outil de déchiffrement PDF : Solution basée sur le navigateur pour supprimer les mots de passe d\'ouverture et les restrictions de permissions',
  functionTitle: 'Qu\'est-ce qu\'un outil de déchiffrement PDF en ligne et quand a-t-on besoin de déchiffrer ?',
  intro: 'Notre <strong>outil de déchiffrement PDF en ligne</strong> est basé sur une pile technologique open-source entièrement frontale. Il prend en charge la fourniture d\'un <strong>mot de passe d\'ouverture (mot de passe utilisateur)</strong> pour les PDF chiffrés afin d\'effectuer le déchiffrement, supprimant les restrictions de permissions telles que l\'impression, l\'édition, la copie et le remplissage de formulaires. Il prend en charge le téléversement par glisser-déposer, la sélection multiple traditionnelle, l\'importation par lots d\'URL et l\'ajout par lots, offrant un <strong>aperçu comparatif en temps réel</strong> et une analyse de base pour vous aider à vérifier rapidement l\'effet du déchiffrement. Une fois le déchiffrement terminé, vous pouvez <span style="font-weight:bold">télécharger individuellement</span> ou <span style="font-weight:bold">télécharger par lots au format ZIP</span>. Toutes les opérations sont effectuées localement dans le navigateur sans téléversement vers un serveur, protégeant la confidentialité et assurant l\'efficacité.',

  useCasesTitle: 'Scénarios d\'application courants du déchiffrement PDF',
  useCases: [
    'Supprimer les restrictions de permissions des documents partagés en entreprise pour l\'édition interne',
    'Effectuer un déchiffrement conforme pour les documents avec des configurations de permissions du propriétaire oubliées',
    'Restaurer les capacités d\'impression et de copie pour la relecture et la réutilisation du contenu',
    'Supprimer les restrictions de faible résolution des supports de formation ou des rapports pour améliorer la qualité de sortie',
    'Déchiffrer par lots plusieurs PDF et les traiter uniformément',
    'Déchiffrer rapidement et prévisualiser les effets du déchiffrement sur les appareils mobiles',
    'Déchiffrement local dans le navigateur sans téléversement pour protéger la confidentialité'
  ],

  tipTitle: 'Conseils professionnels :',
  tipContent: 'Il est recommandé de déchiffrer uniquement les PDF pour lesquels vous disposez d\'une autorisation d\'utilisation légitime ; pour de meilleures performances de recherche, vous pouvez remplir les titres et mots-clés dans les métadonnées et maintenir des stratégies de nommage cohérentes (l\'outil actuel ne modifie pas les métadonnées PDF).',

  conclusion: 'L\'<strong>outil de déchiffrement PDF en ligne</strong> peut rapidement supprimer les restrictions de permissions et restaurer le contenu dans le navigateur, adapté à divers scénarios tels que les entreprises, les institutions éducatives et les utilisateurs individuels. En fournissant le bon mot de passe d\'ouverture et en effectuant le déchiffrement, vous pouvez améliorer l\'utilisabilité du document dans les limites de conformité.',

  faqTitle: 'Foire aux questions (FAQ)',
  faqs: [
    {
      question: 'Comment fonctionne l\'outil de déchiffrement PDF en ligne ?',
      answer: 'Cet outil est basé sur les capacités de déchiffrement de QPDF. Après avoir fourni le <strong>mot de passe d\'ouverture</strong>, il exécute l\'opération <strong>--decrypt</strong> pour supprimer les restrictions de permissions du document et générer un nouveau PDF utilisable.'
    },
    {
      question: 'Prend-il en charge le déchiffrement par lots et l\'aperçu comparatif en temps réel ?',
      answer: 'Prend en charge l\'importation par lots et l\'ajout par lots ; après avoir effectué le déchiffrement, vous pouvez réaliser un <strong>aperçu comparatif en temps réel</strong> (premières pages de l\'original et du déchiffré), et fournit des boutons de téléchargement individuel et un <strong>téléchargement par lots ZIP</strong>.'
    },
    {
      question: 'Peut-on utiliser cet outil si le PDF n\'est pas chiffré ?',
      answer: 'Oui. Pour les PDF non chiffrés, l\'outil produira directement un fichier cohérent avec le contenu original pour un traitement uniforme.'
    }
  ],

  tutorialTitle: 'Comment utiliser l\'outil de déchiffrement PDF en ligne',
  steps: [
    {
      title: 'Ajouter des fichiers PDF',
      description: 'Téléversez via <strong>glisser-déposer</strong> ou cliquez pour sélectionner des fichiers (prend en charge la <strong>sélection multiple</strong> et l\'<strong>ajout par lots</strong>) ; vous pouvez également coller plusieurs URL à la fois dans la section "Importation par lots d\'URL de PDF en ligne".',
      note: 'Il est recommandé de se familiariser d\'abord avec le processus en utilisant des PDF d\'exemple.'
    },
    {
      title: 'Fournir le mot de passe d\'ouverture (si nécessaire)',
      description: 'Si le PDF est chiffré, veuillez saisir le <strong>mot de passe d\'ouverture (mot de passe utilisateur)</strong> dans "Mot de passe de déchiffrement" pour effectuer le déchiffrement ; s\'il n\'est pas chiffré, vous pouvez exécuter directement.',
      note: 'Des mots de passe incorrects entraîneront un échec du déchiffrement ou de l\'aperçu.'
    },
    {
      title: 'Effectuer le déchiffrement et l\'aperçu',
      description: 'Après avoir cliqué sur "Exécuter le déchiffrement", un nouveau PDF est généré, et les premières pages de l\'original et du déchiffré sont comparées dans la zone d\'aperçu droite.',
      note: 'Si l\'aperçu échoue, le fichier peut être corrompu ou incompatible.'
    }
  ],

  successTitle: 'Terminé !',
  successContent: 'Vous avez maîtrisé l\'utilisation de l\'outil de déchiffrement PDF en ligne pour supprimer les restrictions de permissions des documents et vérifier les effets du déchiffrement.',

  relatedToolsTitle: 'Outils connexes qui pourraient vous intéresser',
  relatedTools: [
        {
            name: 'Fusionneur PDF',
            description: 'Combine plusieurs fichiers PDF en un document PDF complet, prenant en charge le réordonnancement des pages entre fichiers.',
            url: 'https://www.ufreetools.com/tool/merge-pdf-online'
        },
        {
            name: 'Séparateur PDF',
            description: 'Divise de grands documents PDF en plusieurs fichiers PDF plus petits, prenant en charge les pages de séparation personnalisées.',
            url: 'https://www.ufreetools.com/tool/pdf-splitter'
        },
        {
            name: 'Convertisseur PDF vers Word',
            description: 'Convertit des documents PDF au format Word modifiable, préservant la mise en page et le formatage originaux.',
            url: 'https://www.ufreetools.com/tool/pdf-to-word-converter'
        },
        {
            name: 'Convertisseur PDF vers image',
            description: 'Convertit chaque page d\'un document PDF en fichiers image de haute qualité, prenant en charge plusieurs formats de sortie.',
            url: 'https://www.ufreetools.com/tool/pdf-to-image-converter'
        }
  ],

  referencesTitle: 'Ressources de référence',
  references: [
    { title: 'QPDF Officiel', description: 'QPDF fournit des capacités puissantes de traitement structurel de PDF, incluant le chiffrement et le déchiffrement.' },
    { title: 'Documentation PDF.js', description: 'PDF.js est une bibliothèque open-source pour le rendu de PDF dans les navigateurs, adaptée à l\'aperçu et à la récupération d\'informations de base.' },
    { title: 'Spécification de référence PDF d\'Adobe', description: 'Les documents de référence PDF d\'Adobe fournissent des détails sur les spécifications PDF et des définitions liées à la sécurité.' }
  ],

  coverAlt: 'Image de la page produit de l\'outil de déchiffrement PDF en ligne'
}