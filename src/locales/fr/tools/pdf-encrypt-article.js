export default {
  title: 'Outil de chiffrement PDF : Solution basée sur le navigateur pour définir les mots de passe d\'ouverture et les permissions',
  functionTitle: 'Qu\'est-ce qu\'un outil de chiffrement PDF en ligne et comment sécurise-t-il les documents ?',
  intro: 'Notre <strong>outil de chiffrement PDF en ligne</strong> utilise une pile technologique entièrement frontale open-source, prenant en charge le chiffrement <strong>AES-128/AES-256 et RC4-40</strong>. Il peut définir des <strong>mots de passe d\'ouverture (mots de passe utilisateur)</strong> et des <strong>mots de passe de permissions (mots de passe propriétaire)</strong>, tout en fournissant des options de contrôle des permissions pour l\'impression, l\'édition, la copie et le remplissage de formulaires. Il prend en charge le téléversement par glisser-déposer, la sélection multiple traditionnelle, l\'importation par lots d\'URL et l\'ajout par lots, offrant un <strong>aperçu comparatif en temps réel</strong> et une analyse de base pour vous aider à vérifier rapidement les effets de chiffrement et les configurations de permissions. Après le chiffrement, vous pouvez <span style="font-weight:bold">télécharger individuellement</span> ou <span style="font-weight:bold">télécharger par lots au format ZIP</span>. Toutes les opérations sont effectuées localement dans le navigateur sans téléversement vers un serveur, assurant à la fois confidentialité et efficacité.',

  useCasesTitle: 'Scénarios d\'application courants du chiffrement PDF',
  useCases: [
    'Définir des mots de passe d\'ouverture et des contrôles de permissions pour les documents partagés en entreprise',
    'Ajouter un chiffrement sécurisé AES-256 aux PDF sensibles comme les contrats et les factures',
    'Restreindre l\'impression et la copie pour prévenir la diffusion non autorisée',
    'Définir l\'impression basse résolution et l\'édition limitée pour les documents de formation en ligne',
    'Chiffrer les PDF par lots et définir uniformément les permissions',
    'Chiffrer rapidement et prévisualiser les effets de chiffrement sur les appareils mobiles',
    'Chiffrement local dans le navigateur sans téléversement pour protéger la confidentialité'
  ],

  tipTitle: 'Conseils professionnels :',
  tipContent: 'Il est recommandé d\'utiliser des <strong>mots de passe forts</strong> combinés au niveau de chiffrement <strong>AES-256</strong> pour une sécurité plus élevée ; pour de meilleures performances de recherche, vous pouvez remplir les titres et mots-clés dans les métadonnées et maintenir une stratégie de nommage cohérente (l\'outil actuel ne modifie pas les métadonnées PDF).',

  conclusion: 'L\'<strong>outil de chiffrement PDF en ligne</strong> peut rapidement accomplir le chiffrement et la configuration des permissions dans le navigateur, adapté à divers scénarios tels que les entreprises, les institutions éducatives et les utilisateurs individuels. En définissant des mots de passe utilisateur et des mots de passe propriétaire et en sélectionnant des algorithmes de chiffrement appropriés, vous pouvez assurer la sécurité tout en maintenant une bonne convivialité.',

  faqTitle: 'Foire aux questions (FAQ)',
  faqs: [
    {
      question: 'Quels algorithmes de chiffrement l\'outil de chiffrement PDF en ligne prend-il en charge ?',
      answer: 'Cet outil prend en charge le chiffrement <strong>AES-128</strong>, <strong>AES-256</strong> ainsi que le chiffrement <strong>RC4-40</strong> compatible avec les anciennes versions. Le choix spécifique de l\'algorithme pour le chiffrement 128 bits (AES ou RC4) dépend de la configuration et de la version de QPDF.'
    },
    {
      question: 'Comment définir les mots de passe d\'ouverture (mots de passe utilisateur) et les mots de passe de permissions (mots de passe propriétaire) ?',
      answer: 'Saisissez respectivement le <strong>mot de passe utilisateur</strong> et le <strong>mot de passe propriétaire</strong> dans la section "Protection par mot de passe" ; l\'outil actuel nécessite les deux pour effectuer le chiffrement (cela pourrait être assoupli pour n\'exiger que le mot de passe utilisateur dans les versions futures).'
    },
    {
      question: 'Prend-il en charge le chiffrement par lots et l\'aperçu comparatif en temps réel ?',
      answer: 'Prend en charge l\'importation par lots et l\'ajout par lots ; après avoir effectué le chiffrement, vous pouvez réaliser un <strong>aperçu comparatif en temps réel</strong> (premières pages de l\'original et du chiffré), et fournit des boutons de téléchargement individuel (affichés uniquement après achèvement du chiffrement de cet élément) et un <strong>téléchargement par lots ZIP</strong>.'
    }
  ],

  tutorialTitle: 'Comment utiliser l\'outil de chiffrement PDF en ligne',
  steps: [
    {
      title: 'Ajouter des fichiers PDF',
      description: 'Téléversez via <strong>glisser-déposer</strong> ou cliquez pour sélectionner des fichiers (prend en charge la <strong>sélection multiple</strong> et l\'<strong>ajout par lots</strong>) ; vous pouvez également coller plusieurs URL à la fois dans la section "Importation par lots d\'URL de PDF en ligne".',
      note: 'Il est recommandé de se familiariser d\'abord avec le processus en utilisant des PDF d\'exemple.'
    },
    {
      title: 'Aperçu et analyse',
      description: 'L\'outil affichera automatiquement la première page du PDF original et la première page du PDF chiffré pour comparaison après achèvement du chiffrement ; pour voir les effets des permissions, ajustez dans la section "Contrôle des permissions" à gauche et chiffrez à nouveau.',
      note: 'Si l\'aperçu échoue, le fichier peut être corrompu ou incompatible.'
    },
    {
      title: 'Définir les mots de passe et les permissions',
      description: 'Définissez le <strong>mot de passe utilisateur</strong> et le <strong>mot de passe propriétaire</strong> dans "Protection par mot de passe" tout en consultant les indications de <strong>force du mot de passe</strong> ; configurez les permissions d\'impression, d\'édition, de copie et de remplissage de formulaires dans "Contrôle des permissions".',
      note: 'Il est recommandé de choisir AES-256 et d\'utiliser des mots de passe forts.'
    }
  ],

  successTitle: 'Terminé !',
  successContent: 'Vous avez maîtrisé l\'utilisation de l\'outil de chiffrement PDF en ligne pour définir les mots de passe et les permissions des documents, et vérifié l\'effet de chiffrement via l\'aperçu comparatif.',

  relatedToolsTitle: 'Outils connexes qui pourraient vous intéresser',
  relatedTools: [
        {
            name: 'Fusionneur PDF',
            description: 'Fusionne plusieurs fichiers PDF en un document PDF complet, prenant en charge le réordonnancement des pages entre fichiers.',
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
    { title: 'QPDF Officiel', description: 'QPDF est un outil puissant de traitement structurel et de chiffrement PDF, fournissant des capacités de contrôle des permissions riches.' },
    { title: 'Documentation PDF.js', description: 'PDF.js est une bibliothèque open-source pour le rendu PDF dans les navigateurs, adaptée à l\'aperçu et à la récupération d\'informations de base.' },
    { title: 'Spécification de référence PDF d\'Adobe', description: 'La documentation de référence PDF d\'Adobe fournit des détails sur les spécifications PDF et des définitions liées à la sécurité.' }
  ],

  coverAlt: 'Image de la page produit de l\'outil de chiffrement PDF en ligne'
}