export default {
    name: 'Générateur de dégradés de couleurs',
    description: 'Créez et personnalisez de magnifiques dégradés CSS, prévisualisez en temps réel et copiez le code dans votre projet',
    
    gradientTypes: {
      title: 'Types de dégradé',
      linear: 'Dégradé linéaire',
      radial: 'Dégradé radial',
      conic: 'Dégradé conique'
    },
    
    controls: {
      title: 'Contrôles de couleur',
      addColor: 'Ajouter une couleur',
      color: 'Couleur',
      position: 'Position (%)',
      delete: 'Supprimer couleur',
      angle: 'Angle',
      degrees: 'degrés',
      shape: 'Forme',
      circle: 'Cercle',
      ellipse: 'Ellipse',
      positionX: 'Position X (%)',
      positionY: 'Position Y (%)',
      size: 'Taille',
      closestSide: 'Côté le plus proche',
      closestCorner: 'Coin le plus proche',
      farthestSide: 'Côté le plus éloigné',
      farthestCorner: 'Coin le plus éloigné',
      fromAngle: 'Angle de départ'
    },
    
    output: {
      title: 'Code CSS',
      copyCode: 'Copier le code',
      preview: 'Zone de prévisualisation',
      copied: 'Le code CSS a été copié dans le presse-papier !',
      download: 'Télécharger PNG'
    },
    
    presets: {
      title: 'Préréglages de dégradés',
      apply: 'Appliquer préréglage',
      sunnyMorning: 'Matin ensoleillé',
      winterNeva: 'Neva hivernale',
      rareWind: 'Vent rare',
      deepBlue: 'Bleu profond',
      perfect: 'Blanc parfait',
      cloudyKnoxville: 'Knoxville nuageux',
      greenBeach: 'Plage verte',
      plumBath: 'Bain de prune',
      everlasting: 'Ciel éternel'
    },
  
    accessibility: {
      colorPicker: 'Sélecteur de couleur',
      deleteSwatch: 'Supprimer le point d\'arrêt de couleur',
      dragToReposition: 'Glisser pour repositionner le point d\'arrêt de couleur'
    },
    
    actions: {
      reset: 'Réinitialiser',
      generateCSS: 'Générer CSS',
      clickToCopy: 'Cliquer pour copier le code',
      completeEdit: 'Terminer l\'édition'
    },
    
    messages: {
      copied: 'Le code CSS a été copié dans le presse-papier !',
      noColors: 'Ajoutez au moins deux couleurs pour créer un dégradé',
      maxColors: 'Nombre maximum de points d\'arrêt de couleur atteint (10)',
      useKeyboard: 'Utilisez la touche Suppr pour supprimer le point d\'arrêt sélectionné',
      invalidHex: 'Veuillez entrer un code couleur hexadécimal valide',
      downloadError: 'Échec du téléchargement PNG, veuillez réessayer plus tard',
      preview: 'Aperçu'
    },
    
    anglePresets: {
      top: 'Haut',
      topRight: 'Haut droite',
      right: 'Droite',
      bottomRight: 'Bas droite',
      bottom: 'Bas',
      bottomLeft: 'Bas gauche',
      left: 'Gauche',
      topLeft: 'Haut gauche'
    },
  
    radialShapes: {
      circle: 'Cercle',
      ellipse: 'Ellipse'
    },
  
    radialSizes: {
      farthestCorner: 'Coin le plus éloigné',
      closestCorner: 'Coin le plus proche',
      farthestSide: 'Côté le plus éloigné',
      closestSide: 'Côté le plus proche',
    },
  
    article: {
      title: "Générateur de dégradés CSS : Le guide ultime pour de magnifiques transitions de couleurs",
      features: {
        title: "Découvrez les dégradés CSS et leur puissance",
        description: "Le <strong>générateur de dégradés CSS</strong> est un outil visuel puissant qui vous permet de créer des transitions de couleurs fluides (appelées <strong>effets de dégradé</strong>) sans avoir à écrire manuellement du code CSS complexe. Cet outil supporte trois types principaux de dégradés : <strong>linéaires</strong> (les couleurs suivent une ligne droite), <strong>radiaux</strong> (les couleurs rayonnent depuis un point central) et <strong>coniques</strong> (les couleurs tournent autour d'un point central).<br><br>Grâce à une interface intuitive, vous pouvez facilement ajouter plusieurs <strong>points d'arrêt de couleur</strong>, ajuster leur position, modifier l'angle ou la forme du dégradé, et voir immédiatement le résultat de votre création. L'outil génère automatiquement le code CSS correspondant que vous pouvez directement copier dans vos projets web. De plus, vous pouvez exporter le dégradé en image PNG pour l'utiliser dans des applications de conception graphique ou le partager avec d'autres. Que vous soyez un développeur professionnel ou un amateur de design, cet <strong>outil de création de dégradés</strong> simplifie le processus de création de transitions de couleurs visuellement attrayantes pour vos projets numériques.",
        useCases: {
          title: "Cas d'utilisation pratiques des dégradés CSS",
          items: [
            "<strong>Arrière-plans de site web</strong> : Créez des arrière-plans pleine page attrayants avec des transitions entre couleurs complémentaires, ajoutant profondeur et dimension à votre site sans utiliser d'images gourmandes en ressources. Ces <strong>arrière-plans en dégradé</strong> se chargent plus vite que les images tout en offrant un aspect moderne et fluide.",
            "<strong>Styles de boutons et éléments d'interface</strong> : Concevez des boutons d'action percutants utilisant des <strong>effets de dégradé</strong> pour guider subtilement l'attention des utilisateurs et améliorer les taux de conversion. Le relief des dégradés peut donner aux éléments d'interface un aspect plus tactile et interactif.",
            "<strong>Séparateurs de contenu et en-têtes</strong> : Utilisez des <strong>dégradés linéaires</strong> pour créer des séparateurs visuels marquants entre sections de contenu, aidant à organiser l'information et guider le regard à travers votre mise en page tout en maintenant une cohérence visuelle.",
            "<strong>Éléments de design graphique</strong> : Exportez vos dégradés en images PNG pour les utiliser dans du matériel de marketing numérique, des publications sur les réseaux sociaux ou des diapositives de présentation, créant une identité visuelle cohérente à travers différentes plateformes grâce à des <strong>mélanges de couleurs</strong> personnalisés.",
            "<strong>Visualisation de données</strong> : Appliquez des <strong>transitions de couleur</strong> à des graphiques, diagrammes et cartes pour représenter visuellement des plages de données, aidant les spectateurs à comprendre immédiatement la distribution des valeurs à travers l'intensité ou la progression des couleurs.",
            "<strong>Animations de chargement modernes</strong> : Conçoivez des dégradés animés qui changent de couleur pendant que l'utilisateur attend, créant une expérience plus engageante pendant les temps de chargement nécessaires grâce à des <strong>animations de dégradé</strong>."
          ]
        }
      },
      faq: {
        title: "FAQ sur les dégradés CSS",
        items: [
          {
            question: "Quelle est la différence entre les dégradés linéaires, radiaux et coniques ?",
            answer: "Ces trois types de dégradés créent des effets visuels très différents. Les dégradés linéaires font transiter les couleurs le long d'une ligne droite dans une direction spécifiée (par degrés ou avec des mots-clés comme 'vers le haut' ou 'vers le bas à droite'). Ils sont parfaits pour des arrière-plans simples, des boutons et des transitions de couleurs horizontales ou verticales. Les dégradés radiaux commencent depuis un point central et rayonnent vers l'extérieur en motif circulaire ou elliptique, créant des effets de spot ou d'estompage, idéaux pour mettre en valeur du contenu ou créer un sentiment de profondeur. Les dégradés coniques font tourner les couleurs autour d'un point central (comme une roue chromatique), les rendant parfaits pour des diagrammes circulaires, des sélecteurs de couleur ou la création d'effets de soleil levant. Notre outil supporte les trois types et offre des contrôles visuels pour vous aider à obtenir l'apparence exacte souhaitée pour votre projet."
          },
          {
            question: "Comment rendre mon dégradé lisse sans bandes de couleur visibles ?",
            answer: "Pour créer un dégradé lisse sans bandes (transitions abruptes visibles entre couleurs), essayez ces techniques : 1) Ajoutez plus de points d'arrêt entre vos couleurs principales pour créer des transitions plus progressives. Notre outil permet jusqu'à 10 points d'arrêt précisément dans ce but. 2) Maintenez des couleurs adjacentes dans le dégradé relativement proches en teinte et luminosité, car les changements brusques montrent plus facilement des bandes. 3) Ajoutez un léger bruit texturé avec une faible opacité (pas directement dans cet outil mais dans votre CSS) pour briser d'éventuelles bandes. 4) Envisagez d'utiliser une légère transparence dans les couleurs du dégradé avec des valeurs rgba(). 5) Pour de très grandes zones de dégradé, essayez d'augmenter la longueur du dégradé par rapport à sa taille d'affichage. Ces techniques aident à créer des transitions de couleur d'apparence professionnelle, évitant les effets de bandes distrayants qui peuvent donner un aspect amateur aux dégradés."
          },
          {
            question: "Ces dégradés CSS fonctionnent-ils sur tous les navigateurs ?",
            answer: "Les dégradés linéaires et radiaux de base générés par notre outil ont une excellente compatibilité navigateur, fonctionnant de manière fiable sur tous les navigateurs modernes (Chrome, Firefox, Safari, Edge) sans besoin de préfixes. Le support des dégradés coniques est légèrement plus limité mais fonctionne sur toutes les versions actuelles des principaux navigateurs. Pour les anciens navigateurs (particulièrement les versions plus anciennes d'Internet Explorer), vous pourriez avoir besoin d'ajouter des préfixes fournisseurs ou des solutions de repli, bien que ces navigateurs ne représentent aujourd'hui qu'une petite proportion des utilisateurs. Notre outil génère du CSS standard conforme aux spécifications W3C, assurant la compatibilité la plus large. Pour des applications critiques ciblant des navigateurs anciens, vous pouvez facilement modifier le code généré pour ajouter des préfixes ou créer des arrière-plans de repli simples pour les navigateurs ne supportant pas certains types de dégradés."
          },
          {
            question: "Comment utiliser le code de dégradé généré dans mon projet ?",
            answer: "Utiliser le code de dégradé généré par notre outil est très simple : 1) Utilisez les contrôles visuels pour créer et personnaliser votre dégradé. 2) Cliquez sur le bouton 'Copier le code' pour copier le CSS généré dans votre presse-papier. 3) Collez le code dans votre fichier CSS ou dans la section style de votre document HTML. Ce code peut être appliqué à toute propriété CSS acceptant des valeurs d'image, le plus couramment la propriété 'background'. Vous pouvez aussi modifier le code copié pour ajouter d'autres propriétés, changer les sélecteurs ou le combiner avec d'autres règles CSS. Si vous avez besoin du dégradé comme image, utilisez notre fonction 'Télécharger PNG' pour l'enregistrer comme fichier pouvant être importé dans toute application acceptant les images PNG."
          },
          {
            question: "Puis-je créer des dégradés transparents avec cet outil ?",
            answer: "Oui, vous pouvez créer des dégradés transparents en entrant manuellement des couleurs avec transparence dans le champ de saisie hexadécimale. Bien que notre sélecteur de couleur ne supporte pas directement le canal alpha, vous pouvez entrer des valeurs rgba() (comme rgba(255,0,0,0.5) pour un rouge semi-transparent) ou des codes hexadécimaux à 8 chiffres (comme #FF000080) après avoir sélectionné un point d'arrêt. Cela permet de créer des effets de dégradé vers la transparence, particulièrement utiles pour des superpositions, ombres portées ou éléments devant partiellement montrer le contenu en dessous. Lorsque vous utilisez des dégradés transparents superposés à du contenu, pensez à considérer le contraste et la lisibilité de tout texte pouvant apparaître dans la zone du dégradé ou en dessous."
          }
        ]
      },
      guide: {
        title: "Guide étape par étape pour utiliser le générateur de dégradés CSS",
        steps: [
          "<strong>Choisissez le type de dégradé</strong> : Commencez par sélectionner un dégradé linéaire, radial ou conique dans la partie supérieure de l'outil. Chaque type crée un effet différent, adapté à différents besoins de design. Les dégradés linéaires sont le choix le plus courant pour les arrière-plans, tandis que les radiaux et coniques offrent des effets plus spécialisés.",
          "<strong>Personnalisez les points d'arrêt de couleur</strong> : Les dégradés sont créés en utilisant des points d'arrêt qui définissent les transitions. Cliquez sur les marqueurs de points d'arrêt existants dans la barre de couleur pour les sélectionner, puis utilisez le sélecteur de couleur pour modifier leur couleur. Vous pouvez aussi ajuster leur position en les glissant ou avec le curseur de position sous le sélecteur de couleur.",
          "<strong>Ajoutez plus de points d'arrêt</strong> : Cliquez sur le bouton 'Ajouter une couleur' pour créer des transitions supplémentaires dans votre dégradé. Jusqu'à 10 points d'arrêt sont supportés, permettant des effets multicolores complexes. Pour supprimer un point d'arrêt, sélectionnez-le et cliquez sur 'Supprimer' (mais rappelez-vous qu'il faut au moins deux couleurs pour former un dégradé).",
          "<strong>Ajustez la direction ou la forme du dégradé</strong> : Pour les dégradés linéaires, utilisez le contrôle d'angle pour définir la direction du flux des couleurs (0-360 degrés). Pour les radiaux, choisissez la forme (cercle ou ellipse) et ajustez la position centrale avec les contrôles X et Y. Pour les coniques, définissez l'angle de départ et la position centrale pour contrôler précisément l'effet.",
          "<strong>Affinez avec les options prédéfinies</strong> : Essayez les boutons de préréglages pour chaque type de dégradé. Pour les linéaires, testez les directions communes comme haut, droite ou bas gauche. Pour les radiaux, essayez différents paramètres de taille comme 'coin le plus éloigné' ou 'côté le plus proche' pour voir comment ils affectent la diffusion du dégradé.",
          "<strong>Prévisualisez votre dégradé</strong> : Votre création s'affiche en temps réel dans la grande zone de prévisualisation. Cliquez sur cette zone pour copier immédiatement le code CSS dans votre presse-papiers pour l'utiliser dans votre projet. Vous pouvez continuer à ajuster jusqu'à obtenir l'apparence souhaitée.",
          "<strong>Exportez ou partagez votre œuvre</strong> : Une fois votre dégradé parfait, utilisez 'Copier le code' pour copier le CSS généré, ou 'Télécharger PNG' pour le sauvegarder comme image. Vous pouvez aussi parcourir les préréglages en bas de l'outil pour une inspiration rapide ou un point de départ."
        ]
      },
      conclusion: "Les dégradés CSS offrent un moyen puissant d'améliorer visuellement vos designs web avec des transitions de couleurs fluides, tout en gardant vos projets légers et performants. Contrairement aux images, les dégradés s'adaptent parfaitement à n'importe quelle taille, se chargent instantanément et peuvent être modifiés facilement en quelques lignes de code. Avec notre générateur de dégradés CSS, vous n'avez pas besoin de mémoriser une syntaxe complexe ou de passer du temps à coder manuellement - créez intuitivement, ajustez avec précision et implémentez en un seul copier-coller. Que vous construisiez un site professionnel, conceviez des composants d'interface ou créiez de l'art numérique, maîtriser les dégradés élèvera considérablement l'attrait visuel de vos créations. Essayez dès maintenant différentes combinaisons de couleurs et types de dégradés pour explorer les possibilités créatives infinies offertes par cet outil."
    }
  }