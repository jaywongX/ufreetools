export default {
    name: 'Générateur de Palettes de Couleurs',
    description: 'Crée des schémas de couleurs harmonieux basés sur la théorie des couleurs, aidant les designers à concevoir rapidement des nuanciers coordonnés',
    baseColor: {
        title: 'Couleur de base',
        picker: 'Sélecteur de couleur',
        hex: 'Hexadécimal',
        rgb: 'RGB',
        hsl: 'HSL',
        random: 'Couleur aléatoire',
        recent: 'Couleurs récentes',
        hint: 'Cliquez sur le bloc ou entrez une valeur hexadécimale',
    },
    schemeTypes: {
        title: 'Théorie des couleurs',
        monochromatic: 'Monochromatique',
        analogous: 'Analogues',
        complementary: 'Complémentaires',
        splitComplementary: 'Complémentaires scindées',
        triadic: 'Triadique',
        tetradic: 'Tétradique',
        square: 'Carré',
        compound: 'Composé',
        shades: 'Nuances',
        custom: 'Personnalisé',
    },
    options: {
        colorCount: 'Nombre de couleurs',
        saturationRange: 'Plage de saturation',
        brightnessRange: 'Plage de luminosité',
        includeBaseColor: 'Inclure la couleur de base',
        lockBaseColor: 'Verrouiller la couleur de base',
        colorSpace: 'Espace colorimétrique',
        sortBy: 'Trier par',
        colorBlindSafe: 'Sécurité daltonien',
        contrastRatio: 'Contraste minimum'
    },
    colorSpaces: {
        rgb: 'RGB',
        hsl: 'HSL',
        lab: 'LAB',
        hsv: 'HSV',
        cmyk: 'CMYK'
    },
    sortOptions: {
        hue: 'Teinte',
        saturation: 'Saturation',
        brightness: 'Luminosité',
        harmony: 'Harmonie',
        none: 'Aucun'
    },
    palettes: {
        title: 'Palettes générées',
        save: 'Sauvegarder la palette',
        copy: 'Copier la palette',
        export: 'Exporter en variables CSS',
        apply: 'Appliquer à l\'aperçu'
    },
    exportFormats: {
        title: 'Formats d\'export',
        css: 'Variables CSS',
        scss: 'Variables SCSS',
        less: 'Variables LESS',
        json: 'JSON',
        svg: 'Nuancier SVG',
        ase: 'Adobe ASE',
        tailwind: 'Configuration Tailwind',
        pdf: 'PDF'
    },
    preview: {
        title: 'Aperçu',
        website: 'Site web',
        mobilApp: 'Application mobile',
        dashboard: 'Tableau de bord',
        card: 'Carte',
        poster: 'Affiche',
        custom: 'Personnalisé',
        mainButton: 'Bouton principal',
        secondButton: 'Bouton secondaire',
        tag: 'Étiquette'
    },
    savedPalettes: {
        title: 'Palettes sauvegardées',
        load: 'Charger',
        delete: 'Supprimer',
        rename: 'Renommer',
        noSavedPalettes: 'Aucune palette sauvegardée',
        saved: 'Palette sauvegardée',
        schemeNameEmpty: 'Nom de palette vide',
    },
    actions: {
        generate: 'Générer le schéma',
        regenerate: 'Regénérer',
        reset: 'Réinitialiser',
        lockColor: 'Verrouiller la couleur',
        unlockColor: 'Déverrouiller la couleur',
        save: 'Sauvegarder la palette',
    },
    messages: {
        paletteSaved: 'Palette sauvegardée avec succès',
        paletteDeleted: 'Palette supprimée',
        copied: 'Copié dans le presse-papiers',
        exported: 'Exportation réussie',
        adjustmentParam: 'Paramètre d\'ajustement',
        schemeName: 'Nom du schéma',
        copyAllColors: 'Toutes les couleurs copiées',
    },
    article: {
        title: "Générateur de Palettes : Créez des combinaisons harmonieuses pour des designs visuellement frappants",
        overview: {
            title: "Qu'est-ce qu'un générateur de palette de couleurs ?",
            content: "Le <strong>Générateur de Palettes</strong> est un outil professionnel créant des combinaisons harmonieuses basées sur les principes de la théorie des couleurs. Notre générateur simplifie le processus complexe de sélection de couleurs complémentaires en produisant automatiquement des nuanciers équilibrés à partir d'une seule couleur de base.<br><br>L'outil utilise diverses règles d'harmonie comme les schémas monochromatiques, analogues, complémentaires ou triadiques pour créer des combinaisons visuellement plaisantes. Il intègre la psychologie des couleurs, l'accessibilité et les meilleures pratiques pour garantir que vos palettes soient à la fois esthétiques et fonctionnelles dans différentes applications.<br><br>Que vous conceviez un site web, une identité visuelle, une interface ou tout projet visuel, notre générateur élimine les conjectures en fournissant des relations colorimétriques scientifiquement fondées qui améliorent la communication visuelle et l'expérience utilisateur."
        },
        useCases: {
            title: "Applications pratiques du générateur",
            items: [
                {
                    title: "Conception de sites web",
                    description: "Créez des schémas cohérents, accessibles et visuellement attrayants pour les sites, assurant une identité uniforme sur toutes les pages tout en respectant les exigences de contraste WCAG pour une meilleure lisibilité."
                },
                {
                    title: "Développement d'identité visuelle",
                    description: "Établissez des combinaisons fortes évoquant des émotions spécifiques et distinguant votre marque, tout en garantissant leur polyvalence sur différents supports marketing."
                },
                {
                    title: "Projets UI/UX",
                    description: "Générez des systèmes colorés fonctionnels pour les interfaces, guidant l'attention des utilisateurs et créant une hiérarchie visuelle cohérente dans les applications mobiles, web et logicielles."
                },
                {
                    title: "Matériel marketing",
                    description: "Développez des schémas percutants pour les publicités, graphiques sociaux, campagnes email et autres assets marketing, conformes aux principes de psychologie marketing."
                },
                {
                    title: "Présentations et documents",
                    description: "Concevez des présentations professionnelles avec des combinaisons harmonieuses améliorant la hiérarchie de l'information, la lisibilité et l'attrait visuel pour mieux engager votre audience."
                },
                {
                    title: "Projets d'impression",
                    description: "Générez des palettes adaptées à l'impression pour brochures, cartes de visite ou emballages, en tenant compte des spécificités CMJN et des exigences de production."
                },
                {
                    title: "Design d'intérieur",
                    description: "Planifiez des schémas coordonnés pour espaces de bureau, commerces ou résidences, créant des ambiances et effets psychologiques souhaités."
                },
                {
                    title: "Matériel éducatif",
                    description: "Développez des combinaisons accessibles pour ressources pédagogiques et infographies, améliorant la compréhension tout en étant inclusives pour les utilisateurs daltoniens."
                }
            ]
        },
        guide: {
            title: "Comment utiliser le générateur de palettes",
            intro: "Créer la palette parfaite est simple avec notre outil intuitif. Suivez ces étapes pour générer des nuanciers harmonieux :",
            steps: [
                {
                    title: "Choisissez une couleur de base",
                    description: "Commencez par sélectionner une couleur principale représentant votre marque ou évoquant l'émotion désirée. Utilisez le sélecteur, entrez un code hexadécimal précis, ou cliquez sur \"Couleur aléatoire\" pour trouver l'inspiration. Cette couleur servira de fondement à toute votre palette."
                },
                {
                    title: "Sélectionnez une théorie d'harmonie",
                    description: "Choisissez un modèle dans le menu déroulant. Chaque théorie crée des relations différentes : monochromatique (variations d'une teinte), analogues (couleurs adjacentes), complémentaires (couleurs opposées), etc. Votre choix influencera significativement l'ambiance de la palette."
                },
                {
                    title: "Ajustez les paramètres",
                    description: "Affinez votre palette en réglant le nombre de couleurs, les plages de saturation et luminosité. Pour les sites accessibles, activez l'option \"Sécurité daltonien\" et définissez un contraste approprié."
                },
                {
                    title: "Générez votre palette",
                    description: "Cliquez sur \"Générer\" pour créer le nuancier. L'outil affichera une série de couleurs harmonieuses basées sur vos choix. Si le résultat ne vous convient pas, cliquez sur \"Regénérer\" pour des alternatives."
                },
                {
                    title: "Prévisualisez et testez",
                    description: "Utilisez la section d'aperçu pour voir comment vos couleurs interagissent dans des contextes réels. Passez entre différents modèles (site web, appli mobile, etc.) pour visualiser l'application pratique de votre palette."
                },
                {
                    title: "Sauvegardez et exportez",
                    description: "Une fois satisfait, sauvegardez votre palette avec un nom descriptif. Exportez-la en divers formats (CSS, SCSS, JSON...) pour une intégration facile dans vos projets."
                },
                {
                    title: "Appliquez et itérez",
                    description: "Implémentez la palette dans vos projets et évaluez son efficacité. Revenez au générateur pour des ajustements ou créez des variantes pour différentes sections. Chargez des palettes précédentes pour maintenir la cohérence entre projets."
                }
            ]
        },
        colorTheory: {
            title: "Comprendre les principes d'harmonie",
            intro: "La théorie des couleurs fournit un cadre scientifique pour créer des combinaisons harmonieuses. Voici comment fonctionnent les différents modèles dans notre générateur :",
            items: [
                {
                    name: "Schéma monochromatique",
                    description: "Utilise des variations de luminosité et saturation d'une seule teinte, créant une apparence unifiée et élégante. Idéal pour les designs minimalistes ou établir une identité visuelle sans submerger l'audience avec des couleurs multiples."
                },
                {
                    name: "Schéma analogue",
                    description: "Combine des couleurs adjacentes sur le cercle chromatique, produisant un effet harmonieux et apaisant avec suffisamment de variété pour rester intéressant. Adapté aux designs naturels et confortables cherchant à créer un flux visuel plutôt qu'un contraste marqué."
                },
                {
                    name: "Schéma complémentaire",
                    description: "Associe des couleurs opposées sur le cercle, offrant un contraste maximum et une énergie visuelle. Parfait pour mettre en valeur des éléments d'action, créer des séparations visuelles ou concevoir du matériel marketing impactant."
                },
                {
                    name: "Schéma complémentaire scindé",
                    description: "Utilise la couleur de base plus deux couleurs adjacentes à son complémentaire, offrant un fort contraste visuel tout en étant moins intense qu'un schéma complémentaire pur. Approche équilibrée conciliant intérêt visuel et facilité de coordination."
                },
                {
                    name: "Schéma triadique",
                    description: "Emploie trois couleurs équidistantes sur le cercle, offrant un riche contraste tout en maintenant l'harmonie. Schéma polyvalent produisant des palettes dynamiques et énergiques, idéal pour des designs nécessitant diversité visuelle."
                },
                {
                    name: "Schéma tétradique (double complémentaire)",
                    description: "Combine deux paires de couleurs complémentaires, créant des palettes riches et variées avec de multiples possibilités de contraste. Schéma sophistiqué adapté aux designs complexes nécessitant profondeur et diversité, bien qu'exigeant un équilibre minutieux."
                },
                {
                    name: "Schéma carré",
                    description: "Utilise quatre couleurs équidistantes (comme le triadique mais avec quatre couleurs). Approche équilibrée offrant une diversité maximale tout en maintenant des relations harmonieuses, idéale pour les designs complexes nécessitant plusieurs groupes de couleurs distincts."
                }
            ]
        },
        faq: {
            title: "Questions fréquentes sur les palettes",
            items: [
                {
                    question: "Qu'est-ce qui fait une bonne palette de couleurs ?",
                    answer: "Une bonne palette atteint plusieurs objectifs : créer une harmonie visuelle via des relations colorimétriques fondées, établir un contraste approprié pour lisibilité et accessibilité, transmettre l'émotion et personnalité de marque souhaitées, rester fonctionnelle dans différents contextes, et se distinguer des concurrents tout en restant adaptée au secteur. Les meilleures palettes équilibrent attrait esthétique et fonctionnalité pratique, utilisant 3-5 couleurs avec des rôles clairement définis (primaire, secondaire, accent...) et appliquées systématiquement dans un système de design."
                },
                {
                    question: "Combien de couleurs doit contenir ma palette ?",
                    answer: "La plupart des palettes efficaces contiennent 3-5 couleurs : une couleur primaire représentant l'identité, une secondaire complémentaire, 1-2 couleurs d'accentuation pour les éléments clés, et 2-3 neutres (blanc, noir, gris) pour texte et arrière-plans. Pour les systèmes complexes comme les grands sites, vous pourriez ajouter des variantes, mais chaque couleur doit avoir un usage spécifique. Limiter votre palette évite la confusion visuelle et assure la cohérence, bien que vous puissiez inclure différentes nuances de chaque couleur centrale pour plus de flexibilité."
                },
                {
                    question: "Comment garantir l'accessibilité de ma palette ?",
                    answer: "Pour une palette accessible, concentrez-vous sur le contraste entre texte et arrière-plan (WCAG recommande au moins 4.5:1 pour texte normal, 3:1 pour gros texte), évitez les combinaisons problématiques pour les daltoniens (surtout rouge/vert), et ne comptez pas uniquement sur la couleur pour transmettre l'information. Notre générateur inclut des fonctionnalités d'accessibilité comme des vérifications de contraste. Utiliser des outils d'accessibilité et ajouter des indicateurs visuels alternatifs (motifs, icônes) améliorera encore l'accessibilité."
                },
                {
                    question: "Comment appliquer ma palette de manière cohérente ?",
                    answer: "Une application systématique nécessite une approche méthodique : exportez d'abord votre palette dans un format compatible (variables CSS, SCSS...) avec une convention de nommage claire. Définissez ensuite des rôles spécifiques pour chaque couleur (ex: primaire pour titres), documentez le système coloré, utilisez des styles basés sur des composants plutôt que des valeurs codées en dur, et effectuez des revues régulières avec des outils de vérification pour maintenir la cohérence au fil de l'évolution du projet."
                },
                {
                    question: "Puis-je utiliser ce générateur pour l'impression ?",
                    answer: "Oui, mais avec des considérations supplémentaires. Pour l'impression, notez que les couleurs s'affichent différemment en CMJN (impression) et RVB (écran) - utilisez nos options d'export pour prévisualiser en CMJN. Ajustez prudemment la saturation (les couleurs très saturées impriment souvent mal). Générez des palettes légèrement plus larges pour anticiper les variations d'impression, et demandez toujours des échantillons physiques avant des impressions à grande échelle. Les harmonies créées par notre générateur restent valables pour tout média."
                },
                {
                    question: "Comment créer des palettes évoquant des émotions spécifiques ?",
                    answer: "La psychologie des couleurs joue un rôle clé. Pour des designs énergiques, utilisez des rouges, oranges ou jaunes vifs comme couleurs principales. Pour une impression calme ou digne de confiance, intégrez des bleus. Les verts conviennent aux messages liés à la nature ou la prospérité. Les violets suggèrent luxe ou créativité, les roses évoquent la féminité ou le ludique. Outre la teinte, considérez comment la saturation influence l'impact (haute saturation=énergie) et la luminosité affecte la perception (clair=optimisme). Notre générateur permet un contrôle précis de ces variables pour affiner la résonance émotionnelle."
                },
                {
                    question: "Comment créer des palettes à la fois uniques et respectant les principes du design ?",
                    answer: "Pour des palettes uniques tout en restant harmonieuses : commencez par des règles établies (complémentaires, analogues...) mais introduisez des variations contrôlées. Expérimentez en décalant légèrement les relations de couleurs standards, en combinant des éléments de différentes théories (ex: dégradé monochromatique avec complémentaires scindées), en ajoutant des couleurs d'accent inattendues ou en jouant avec des combinaisons inhabituelles de saturation/luminosité. Notre générateur permet de verrouiller certaines couleurs tout en régénérant les autres, introduisant progressivement de l'unicité tout en conservant les bases de l'harmonie colorimétrique."
                }
            ]
        },
        bestPractices: {
            title: "Bonnes pratiques pour des palettes efficaces",
            intro: "Appliquez ces principes professionnels de design coloré pour maximiser l'impact et la fonctionnalité de vos palettes générées :",
            items: [
                "Commencez par la couleur principale de votre marque ou des éléments existants pour assurer la cohérence visuelle",
                "Priorisez l'accessibilité en maintenant un contraste suffisant (minimum 4.5:1) entre texte et arrière-plans",
                "Limitez votre palette active à 3-5 couleurs principales avec des rôles clairs (primaire, secondaire, accent...) pour éviter la surcharge visuelle",
                "Testez votre palette sous différents appareils, éclairages et environnements pour garantir une apparence uniforme",
                "Tenez compte de la psychologie des couleurs et des associations culturelles pour les audiences internationales",
                "Appliquez la règle 60-30-10 comme point de départ : 60% de couleur dominante, 30% secondaire et 10% d'accent",
                "Créez une palette étendue avec des nuances variées pour chaque couleur principale, offrant flexibilité tout en conservant l'harmonie",
                "Appliquez les couleurs de manière fonctionnelle plutôt que purement esthétique (ex: même couleur pour toutes les actions principales)",
                "Testez votre palette en niveaux de gris pour vérifier que le design reste lisible sans dépendre des différences colorimétriques",
                "Documentez votre système coloré avec des conventions de nommage et des guidelines pour une implémentation cohérente",
                "Prenez en compte l'environnement de visualisation et le support (numérique vs print, mobile vs desktop, intérieur vs extérieur)",
                "Réévaluez et optimisez régulièrement votre palette basée sur les retours utilisateurs et indicateurs de performance"
            ]
        }
    }
}
