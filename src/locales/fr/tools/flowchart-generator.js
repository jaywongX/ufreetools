export default {
    name: 'Générateur de diagrammes',
    description: 'Créez des diagrammes et des organigrammes avec une syntaxe textuelle simple',
    title: 'Générateur de diagrammes et organigrammes',
    renderBtn: 'Rendu du diagramme',
    resetBtn: 'Réinitialiser',
    downloadSvgBtn: 'Télécharger SVG',
    copySvgBtn: 'Copier SVG',
    input: {
      title: 'Définition du diagramme',
      placeholder: 'Saisissez le code Mermaid...',
      loadExample: 'Charger un exemple',
      clear: 'Effacer',
      uploadFile: 'Importer un fichier'
    },
    output: {
      title: 'Diagramme généré',
      downloadImage: 'Télécharger l\'image',
      downloadSVG: 'Télécharger SVG',
      copyImage: 'Copier l\'image',
      copySVG: 'Copier SVG',
      zoomIn: 'Zoom avant',
      zoomOut: 'Zoom arrière',
      fitView: 'Ajuster la vue',
      resetView: 'Réinitialiser la vue',
      preview: 'Aperçu',
      code: 'Code Mermaid'
    },
    options: {
      title: 'Options',
      theme: 'Thème',
      orientation: 'Orientation',
      nodeShape: 'Forme des nœuds',
      arrowStyle: 'Style des flèches',
      lineStyle: 'Style des lignes',
      textPosition: 'Position du texte',
      fontSize: 'Taille de police',
      fontFamily: 'Police de caractères',
      showGrid: 'Afficher la grille',
      autoRender: 'Rendu automatique'
    },
    themes: {
      default: 'Défaut',
      simple: 'Simple',
      forest: 'Forêt',
      neutral: 'Neutre',
      dark: 'Sombre',
      business: 'Professionnel',
      base: 'Base',
      custom: 'Personnalisé'
    },
    orientations: {
      topToBottom: 'De haut en bas',
      bottomToTop: 'De bas en haut',
      leftToRight: 'De gauche à droite',
      rightToLeft: 'De droite à gauche'
    },
    nodeShapes: {
      rectangle: 'Rectangle',
      roundedRectangle: 'Rectangle arrondi',
      circle: 'Cercle',
      diamond: 'Losange',
      hexagon: 'Hexagone',
      parallelogram: 'Parallélogramme'
    },
    arrowStyles: {
      arrow: 'Flèche',
      open: 'Ouverte',
      filled: 'Pleine',
      diamond: 'Losange',
      circle: 'Cercle'
    },
    lineStyles: {
      solid: 'Continue',
      dashed: 'Pointillée',
      dotted: 'Pointillée fine',
      curved: 'Courbée',
      straight: 'Droite',
      orthogonal: 'Orthogonale'
    },
    syntax: {
      title: 'Aide syntaxique',
      node: 'Nœud',
      edge: 'Lien',
      subgraph: 'Sous-graphe',
      comment: 'Commentaire',
      styling: 'Style',
      showMore: 'Voir plus'
    },
    actions: {
      render: 'Générer le diagramme',
      save: 'Enregistrer',
      export: 'Exporter',
      share: 'Partager'
    },
    messages: {
      renderSuccess: 'Diagramme généré avec succès',
      renderError: 'Erreur de génération : {error}',
      syntaxError: 'Erreur de syntaxe : {error}',
      saved: 'Diagramme enregistré',
      copied: 'Code SVG copié',
      copyFailed: 'Échec de la copie',
      exported: 'Diagramme exporté',
      emptyCode: 'Saisissez du code Mermaid',
      rendering: 'Génération en cours...',
      errorTitle: 'Erreur de rendu'
    },
    examples: {
      flowchart: 'Organigramme',
      classDiagram: 'Diagramme de classes',
      sequenceDiagram: 'Diagramme de séquence',
      entityRelationship: 'Diagramme entité-relation',
      gantt: 'Diagramme de Gantt',
      stateDiagram: 'Diagramme d\'état',
      pieChart: 'Diagramme circulaire',
      userJourney: 'Parcours utilisateur'
    },
    exampleCodes: {
      flowchart: `graph TD
      A[Start] --> B{Condition?}
      B -->|Oui| C[Résultat positif]
      B -->|Non| D[Résultat négatif]
      C --> E[Fin]
      D --> E
  `,
      sequenceDiagram: `sequenceDiagram
      participant Client
      participant Serveur
      Client->>Serveur: Requête
      Serveur-->>Client: Réponse
      Client->>Serveur: Soumission
      Serveur-->>Client: Confirmation
  `,
      gantt: `gantt
      title Planning de projet
      dateFormat  YYYY-MM-DD
      section Phase 1
      Tâche 1           :a1, 2023-01-01, 30d
      Tâche 2           :after a1, 20d
      section Phase 2
      Tâche 3           :2023-02-20, 45d
      Tâche 4           :2023-02-25, 40d
  `,
      stateDiagram: `stateDiagram-v2
      [*] --> État1
      État1 --> État2: Transition
      État2 --> État3: Succès
      État2 --> État1: Échec
      État3 --> [*]
  `,
      pieChart: `pie
      title Répartition
      "Catégorie 1" : 42.7
      "Catégorie 2" : 28.9
      "Catégorie 3" : 18.5
      "Autres" : 9.9
  `,
      classDiagram: `classDiagram
      class Animal {
          +String nom
          +int âge
          +son() void
      }
      class Chien {
          +String race
          +rapporter() void
      }
      class Chat {
          +String couleur
          +grimper() void
      }
      Animal <|-- Chien
      Animal <|-- Chat
  `
    },
    article: {
      title: "Générateur de diagrammes : visualisez des processus complexes avec une syntaxe simple",
      features: {
        title: "La puissance de la conversion texte-vers-diagramme",
        description: "Ce <strong>générateur de diagrammes</strong> est un outil polyvalent qui transforme une syntaxe textuelle simple en représentations visuelles professionnelles. Utilisant la syntaxe <strong>Mermaid</strong>, il permet de créer divers types de diagrammes sans compétences en design graphique.<br><br>L'approche textuelle permet de créer, éditer et versionner facilement vos diagrammes. Que vous ayez besoin d'<strong>organigrammes</strong>, de <strong>diagrammes de séquence</strong>, de <strong>diagrammes de classes</strong>, de <strong>Gantt</strong>, de <strong>diagrammes d'état</strong> ou de <strong>camemberts</strong>, cet outil simplifie la création de visualisations professionnelles.",
        useCases: {
          title: "Cas d'utilisation",
          items: [
            "<strong>Documentation logicielle</strong> : Visualisez l'architecture, les schémas de base de données et les workflows.",
            "<strong>Gestion de projet</strong> : Créez des Gantt et organigrammes pour planifier les projets.",
            "<strong>Modélisation métier</strong> : Documentez les processus opérationnels et les flux de travail.",
            "<strong>Éducation</strong> : Créez des supports pédagogiques visuels pour expliquer des concepts complexes.",
            "<strong>Documentation technique</strong> : Améliorez les manuels avec des diagrammes explicatifs.",
            "<strong>Arbres de décision</strong> : Visualisez des processus décisionnels complexes."
          ]
        }
      },
      faq: {
        title: "FAQ",
        items: [
          {
            question: "Qu'est-ce que la syntaxe Mermaid et est-elle difficile à apprendre ?",
            answer: "Mermaid est un langage simple, similaire à Markdown, conçu pour être intuitif. La plupart des utilisateurs maîtrisent les bases en 15-30 minutes."
          },
          {
            question: "Puis-je exporter les diagrammes pour d'autres applications ?",
            answer: "Oui, l'outil exporte en SVG (vectoriel) pour une utilisation dans des logiciels graphiques. Les diagrammes peuvent aussi être convertis en PNG/JPEG."
          },
          {
            question: "Quels types de diagrammes puis-je créer ?",
            answer: "Organigrammes, diagrammes de classes, de séquence, entité-relation, Gantt, états, camemberts et parcours utilisateur."
          },
          {
            question: "Comment personnaliser l'apparence ?",
            answer: "Choisissez parmi plusieurs thèmes et personnalisez formes, couleurs, styles de flèches et positionnement du texte."
          },
          {
            question: "Puis-je créer des structures imbriquées complexes ?",
            answer: "Oui, avec des sous-graphes pour regrouper des éléments et représenter des hiérarchies complexes."
          }
        ]
      },
      guide: {
        title: "Guide étape par étape",
        steps: [
          "<strong>Sélectionnez le type</strong> : Choisissez le diagramme adapté à vos besoins.",
          "<strong>Éditez le code</strong> : Saisissez la syntaxe Mermaid dans le panneau de gauche.",
          "<strong>Prévisualisez</strong> : Visualisez et validez votre diagramme.",
          "<strong>Affinez</strong> : Ajoutez des détails et personnalisez l'apparence.",
          "<strong>Utilisez des fonctions avancées</strong> : Sous-graphes, styles, etc.",
          "<strong>Exportez</strong> : Téléchargez en SVG ou copiez le code.",
          "<strong>Sauvegardez</strong> : Enregistrez le code Mermaid pour des modifications ultérieures."
        ]
      },
      conclusion: "Ce générateur transforme la création de diagrammes en un processus accessible à tous. L'approche textuelle élimine les frustrations des outils graphiques traditionnels et s'intègre parfaitement aux workflows modernes. Indispensable pour la communication visuelle efficace."
    }
  }