export default {
    name: 'Éditeur Markdown',
    description: 'Éditez et prévisualisez en temps réel des documents Markdown',
    options: {
      mode: 'Mode',
      syntaxHighlighting: 'Coloration syntaxique',
      autoSave: 'Sauvegarde automatique',
      lineNumbers: 'Numéros de ligne',
      spellCheck: 'Vérification orthographique',
      wordWrap: 'Retour à la ligne automatique'
    },
    modes: {
      split: 'Vue fractionnée',
      edit: 'Édition seule',
      preview: 'Prévisualisation seule'
    },
    actions: {
      bold: 'Gras',
      italic: 'Italique',
      strikethrough: 'Barré',
      heading: 'Titre',
      link: 'Lien',
      image: 'Image',
      list: 'Liste',
      quote: 'Citation',
      code: 'Code',
      table: 'Tableau',
      hr: 'Ligne horizontale',
      preview: 'Prévisualiser',
      copy: 'Copier',
      clear: 'Effacer',
      download: 'Télécharger Markdown',
      downloadHTML: 'Télécharger HTML',
      upload: 'Importer Markdown'
    },
    messages: {
      copied: 'Contenu Markdown copié dans le presse-papiers !',
      copyError: 'Échec de la copie, veuillez copier manuellement',
      clearConfirm: 'Voulez-vous vraiment vider le contenu de l\'éditeur ?',
      templateConfirm: 'Appliquer un modèle remplacera le contenu actuel, continuer ?',
      templateApplied: 'Modèle "{name}" appliqué',
      saved: 'Document sauvegardé',
      uploadSuccess: 'Document importé avec succès',
      uploadError: 'Erreur lors de l\'import du document',
      wordCount: '{count} mots',
      charCount: '{count} caractères'
    },
    placeholder: 'Saisissez votre contenu Markdown ici...',
    placeholders: {
      linkText: 'Texte du lien',
      imageAlt: 'Description de l\'image'
    },
    templates: {
      title: 'Modèles rapides',
      apply: 'Appliquer le modèle',
      confirm: 'Confirmer l\'application',
      simple: {
        name: 'Document simple',
        description: 'Inclut titres, listes, citations etc.',
        content: `# Titre du document
  
  ## Introduction
  Ceci est un exemple simple de document Markdown.
  
  ## Fonctionnalités
  - Prise en charge des titres et paragraphes
  - Prise en charge du **gras** et de l'*italique*
  - Prise en charge des listes ordonnées et non ordonnées
  
  > Ceci est un bloc de citation, utilisé pour citer les opinions d'autrui.
  
  ## Conclusion
  Markdown est un langage de balisage simple et facile à utiliser.`
      },
      readme: {
        name: 'README de projet',
        description: 'Structure standard pour la documentation de projet',
        content: `# Nom du projet
  
  ## Description du projet
  Brève description des fonctionnalités principales et de l'utilité du projet.
  
  ## Fonctionnalités
  - Fonctionnalité principale 1
  - Fonctionnalité principale 2
  - Fonctionnalité principale 3
  
  ## Instructions d'installation
  \`\`\`
  # Installer les dépendances
  npm install
  
  # Démarrer le serveur de développement
  npm run dev
  \`\`\`
  
  ## Exemple d'utilisation
  \`\`\`
  // Exemple de code
  const exemple = new Exemple();
  exemple.init();
  \`\`\`
  
  ## Documentation
  Pour une documentation plus détaillée, veuillez consulter le lien.
  
  ## Guide de contribution
  Les contributions sont les bienvenues, veuillez consulter le guide.
  
  ## Licence
  Ce projet est publié sous licence MIT, voir le fichier LICENSE pour plus de détails.`
      },
      resume: {
        name: 'CV personnel',
        description: 'Modèle de curriculum vitae',
        content: `# Curriculum Vitae
  
  ## Informations personnelles
  - Nom : Jean Dupont
  - Téléphone : 06xxxx1234
  - Email : jeandupont123@exemple.com
  - Objectif : Développeur Front-end
  
  ## Formation
  Nom de l'université, Informatique, Septembre 2016 à Juin 2020
  
  ## Expérience professionnelle
  ### Entreprise Tech, Développeur Front-end, Juillet 2020 à aujourd'hui
  - Développement et maintenance des produits principaux
  - Développement d'un système de gestion d'entreprise avec Vue.js
  - Optimisation des performances, réduction du temps de chargement de 30%
  
  ### Entreprise Tech, Stagiaire Front-end, Juillet 2019 à Juin 2020
  - Participation au projet de refonte du site web
  - Assistance à l'équipe pour la refactorisation du code
  
  ## Compétences techniques
  - Front-end : HTML, CSS, JavaScript, Vue.js, React
  - Back-end : Node.js, Express
  - Outils : Git, Webpack, Docker
  
  ## Projets
  ### Système de gestion d'entreprise
  - Développé avec Vue.js
  - Implémentation de visualisation de données, gestion des permissions
  - Optimisation de la vitesse de réponse
  
  ## Langues
  - Anglais (courant)
  - Japonais (notions)`
      },
      meeting: {
        name: 'Compte-rendu de réunion',
        description: 'Modèle pour les comptes-rendus',
        content: `# Compte-rendu de réunion
  
  ## Informations
  - Sujet : Discussion sur l'avancement du projet
  - Date : 15 Mai 2023
  - Heure : 14:00 à 16:00
  - Lieu : Salle de réunion A
  - Président : M. Martin
  - Secrétaire : Mme Léa
  
  ## Participants
  - M. Martin (Produit)
  - M. Pierre (Développement)
  - Mme Sophie (Design)
  - M. Jacques (Tests)
  
  ## Ordre du jour
  1. Bilan de la semaine précédente
  2. Planification de la semaine
  3. Résolution des problèmes
  4. Définition des prochaines étapes
  
  ## Discussions
  ### 1. Bilan hebdomadaire
  - Documentation des besoins terminée
  - Maquettes achevées à 60%
  - Développement du framework front-end terminé
  
  ### 2. Planification
  - Finalisation des maquettes
  - Début du développement des fonctionnalités principales
  - Préparation des cas de test
  
  ### 3. Problèmes et solutions
  - Problème : Conception des interfaces de données inadéquate
  - Solution : Redesign par M. Pierre pour mercredi
  
  ## Prochaine réunion
  - Date : 22 Mai 2023
  - Heure : 14:00 à 15:00`
      }
    },
    dialogs: {
      clear: {
        title: 'Vider l\'éditeur',
        message: 'Confirmez-vous vouloir effacer le contenu ?'
      },
      template: {
        title: 'Appliquer un modèle',
        message: 'Ceci remplacera le contenu actuel, continuer ?'
      }
    },
    article: {
      title: "Éditeur Markdown : Créez facilement des documents formatés",
      features: {
        title: "Découvrez l'édition Markdown",
        description: "Cet <strong>éditeur Markdown</strong> est un <strong>outil de formatage de texte</strong> polyvalent conçu pour créer des documents structurés en utilisant la syntaxe simple du Markdown. Ce <strong>éditeur de documents</strong> puissant combine un environnement d'écriture intuitif avec une prévisualisation en temps réel, en faisant un choix idéal pour la création de contenu sur diverses plateformes.<br><br>Notre <strong>éditeur de texte enrichi</strong> prend en charge tous les éléments standards du Markdown : titres, listes, liens, images, blocs de code et tableaux. L'éditeur inclut des fonctionnalités comme la coloration syntaxique, la prévisualisation fractionnée et des raccourcis de formatage pratiques. Que vous rédigiez des documents, prépariez un article de blog ou preniez des notes structurées, cet <strong>outil d'écriture Markdown</strong> offre le parfait équilibre entre simplicité et fonctionnalité, simplifiant votre flux de travail de création de contenu.",
        useCases: {
          title: "Cas d'utilisation pratiques de l'éditeur Markdown",
          items: [
            "Les développeurs rédigent la <strong>documentation technique</strong> et les fichiers README pour les dépôts GitHub, utilisant le formatage de code et la structure hiérarchique du Markdown pour une organisation claire",
            "Les créateurs de contenu préparent des <strong>articles de blog</strong> avec images intégrées, liens et texte formaté, pouvant être facilement exportés vers des systèmes comme WordPress ou Medium",
            "Les rédacteurs techniques créent une <strong>documentation produit</strong> cohérente, utilisant des tableaux pour présenter des données et des titres pour une organisation hiérarchique",
            "Les étudiants prennent des <strong>notes structurées</strong> pendant les cours ou recherches, utilisant la syntaxe simple du Markdown pour un formatage rapide sans interrompre leur flux de pensée",
            "Les chefs de projet développent des <strong>pages wiki organisées</strong> avec sections liées, listes de tâches et contenu formaté pour les bases de connaissances d'équipe",
            "Les chercheurs académiques rédigent des <strong>articles de recherche</strong> ou notes avec citations, formules intégrées et titres structurés avant le formatage final dans des logiciels spécialisés"
          ]
        }
      },
      faq: {
        title: "Questions fréquentes sur l'édition Markdown",
        items: [
          {
            question: "Quelle est la différence entre Markdown et les traitements de texte traditionnels ?",
            answer: "Markdown est un langage de balisage léger utilisant une syntaxe texte pour indiquer le formatage, contrairement aux traitements de texte traditionnels avec interface WYSIWYG (What You See Is What You Get) et boutons/menus de formatage. Les avantages principaux de Markdown incluent : simplicité et rapidité pour les tâches de base, excellente portabilité multiplateforme, taille de fichier réduite, compatibilité avec le contrôle de version, concentration sur le contenu plutôt que le style, et sortie cohérente. Les traitements de texte offrent plus d'options de formatage complexes mais créent souvent des formats propriétaires avec problèmes de compatibilité. Markdown est idéal pour le contenu devant être converti en multiples formats (HTML, PDF) ou partagé sur différentes plateformes."
          },
          {
            question: "Puis-je exporter des documents Markdown vers d'autres formats ?",
            answer: "Oui, notre éditeur Markdown permet d'exporter le contenu dans plusieurs formats. Vous pouvez télécharger directement le contenu en fichier Markdown (.md) pour édition ultérieure, ou en HTML pour publication web. Pour d'autres conversions comme PDF, DOCX (Word) ou formats professionnels, vous pouvez utiliser l'export HTML combiné à des convertisseurs tiers ou des outils comme Pandoc. La nature propre et structurée de Markdown en fait un excellent format source pour conversion vers presque tout type de document. Cette flexibilité explique pourquoi Markdown est le format préféré pour le contenu devant exister sous plusieurs formats ou plateformes."
          },
          {
            question: "Cet éditeur prend-il en charge le Markdown style GitHub ?",
            answer: "Oui, notre éditeur Markdown prend pleinement en charge le Markdown style GitHub (GFM), qui inclut toutes les fonctionnalités standard de Markdown plus plusieurs extensions le rendant particulièrement adapté à la documentation technique et de code. Ces extensions incluent : blocs de code avec coloration syntaxique, tableaux, texte barré, listes de tâches avec cases à cocher, et liens URL automatiques. L'éditeur affiche correctement en mode prévisualisation les éléments spécifiques à GFM comme les mentions d'utilisateur, références d'issues et codes courts d'émoticônes. Cette compatibilité garantit que les documents créés dans notre éditeur s'afficheront correctement sur les dépôts, issues, pull requests et pages wiki de GitHub."
          },
          {
            question: "Puis-je utiliser cet éditeur Markdown pour collaborer avec d'autres ?",
            answer: "Bien que notre éditeur Markdown n'inclut pas de fonctionnalités intégrées de collaboration en temps réel (comme Google Docs), vous pouvez toujours collaborer efficacement en utilisant un flux de travail centré sur l'éditeur. Vous pouvez exporter les documents Markdown et les partager par email ou messagerie, ou utiliser l'éditeur avec des systèmes de contrôle de version comme Git pour une collaboration plus structurée. Pour les équipes, vous pouvez combiner l'éditeur avec des plateformes comme GitHub où plusieurs contributeurs peuvent travailler sur des fichiers Markdown, avec historique des versions, pull requests et commentaires. La nature texte brut de Markdown le rend particulièrement adapté au suivi des modifications et fusion des contributions comparé aux formats binaires."
          },
          {
            question: "Comment apprendre la syntaxe Markdown si je suis débutant ?",
            answer: "Apprendre la syntaxe Markdown est simple, même pour les débutants complets. Notre éditeur inclut une barre d'outils de formatage permettant d'appliquer les éléments Markdown courants par simple clic, vous aidant à apprendre la syntaxe visuellement. Lorsque vous utilisez ces boutons, vous voyez le Markdown correspondant apparaître dans le texte, créant un processus d'apprentissage naturel. De plus, la prévisualisation en temps réel montre comment votre Markdown sera rendu, fournissant un retour immédiat. Pour une approche plus structurée, nous recommandons de commencer par les éléments de base (titres, gras, italique, liens et listes) avant de passer aux fonctionnalités avancées comme tableaux et blocs de code. Grâce à la conception intuitive de Markdown, de nombreux utilisateurs constatent qu'ils maîtrisent les bases en moins de 30 minutes."
          }
        ]
      },
      guide: {
        title: "Guide étape par étape pour utiliser l'éditeur Markdown",
        steps: [
          "Commencez par sélectionner votre <strong>mode d'édition</strong> préféré dans la barre supérieure - choisissez la vue fractionnée (édition et prévisualisation côte à côte), édition seule (espace d'écriture maximal) ou prévisualisation seule (affichage du format final)",
          "Commencez à saisir du contenu dans le panneau d'édition, utilisant la <strong>syntaxe Markdown</strong> pour le formatage, ou utilisez les boutons de la barre d'outils pour insérer automatiquement la syntaxe appropriée",
          "Créez la structure du document avec des dièses pour les <strong>titres</strong> (# pour titre principal, ## pour sous-titre, etc.), organisant le contenu en sections logiques",
          "Utilisez les <strong>styles en ligne</strong> pour formater le texte : astérisques pour *italique* ou **gras**, accents graves pour `code`, ou tildes pour texte ~~barré~~, afin de mettre en valeur les points importants",
          "Insérez des <strong>liens et images</strong> avec la syntaxe [texte du lien](URL) pour les liens et  pour les images, créant un contenu riche et interactif",
          "Organisez les informations avec des <strong>listes et tableaux</strong> - utilisez des tirets ou nombres pour les listes, et des barres verticales et tirets pour créer des tableaux structurés avec lignes et colonnes",
          "Prévisualisez votre travail en temps réel pour voir comment votre <strong>document formaté</strong> apparaîtra, effectuant les ajustements nécessaires avant de télécharger ou copier le contenu final"
        ]
      },
      conclusion: "L'éditeur Markdown simplifie la création de documents bien formatés, évitant la complexité des traitements de texte traditionnels et la courbe d'apprentissage du HTML. En fournissant un environnement d'écriture propre et sans distraction avec des fonctionnalités de formatage puissantes, il vous permet de vous concentrer sur le contenu tout en maintenant une présentation cohérente et professionnelle. Que vous soyez un développeur documentant du code, un écrivain rédigeant un article de blog, ou un étudiant organisant des notes, la syntaxe intuitive de Markdown combinée à la prévisualisation en temps réel de notre éditeur rend la création de documents plus rapide et plus intuitive. Alors que de plus en plus de plateformes adoptent le Markdown, maîtriser ce format polyvalent avec notre éditeur vous donne une compétence précieuse pouvant être transférée à de nombreuses applications et flux de travail, vous faisant gagner du temps et augmentant votre productivité pour tous vos besoins documentaires."
    },
    defaultContent: `# Bienvenue dans l'éditeur Markdown
  
  Ceci est un éditeur Markdown simple avec prévisualisation en temps réel et coloration syntaxique.
  
  ## Syntaxe de base
  
  ### Titres
  Utilisez le symbole # pour les titres, par exemple :
  # Titre niveau 1
  ## Titre niveau 2
  ### Titre niveau 3
  
  ### Mise en forme
  **Gras** ou __Gras__
  *Italique* ou _Italique_
  ~~Barré~~
  
  ### Listes
  Liste non ordonnée :
  - Élément 1
  - Élément 2
  - Élément 3
  
  Liste ordonnée :
  1. Premier élément
  2. Deuxième élément
  3. Troisième élément
  
  ### Liens et images
  [Texte du lien](https://exemple.com)
  
  
  ### Code
  Code en ligne : \`var exemple = "bonjour";\`
  
  ### Citation
  > Ceci est un paragraphe de citation.
  
  ### Tableaux
  | En-tête 1 | En-tête 2 | En-tête 3 |
  |-----------|-----------|-----------|
  | Cellule 1 | Cellule 2 | Cellule 3 |
  | Cellule 4 | Cellule 5 | Cellule 6 |
  
  ### Ligne horizontale
  ---
  
  Commencez à éditer ! Vous pouvez utiliser la barre d'outils ci-dessus pour insérer rapidement divers éléments Markdown.`
  }