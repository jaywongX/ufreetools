export default {
    name: 'Minuteur Pomodoro',
    description: 'Améliorez votre productivité et concentration avec la technique Pomodoro',
    
    // Textes principaux de l'interface
    start: 'Démarrer',
    pause: 'Pause',
    reset: 'Réinitialiser',
    skip: 'Passer',
    work: 'Travail',
    shortBreak: 'Courte pause',
    longBreak: 'Longue pause',
    settings: 'Paramètres',
    stats: 'Statistiques',
    
    // Paramètres
    settingsTitle: 'Paramètres du minuteur',
    workDuration: 'Durée de travail',
    shortBreakDuration: 'Durée courte pause',
    longBreakDuration: 'Durée longue pause',
    cyclesBeforeLongBreak: 'Cycles avant longue pause',
    enableSound: 'Activer les sons',
    autoStartBreaks: 'Démarrer automatiquement les pauses',
    autoStartWork: 'Démarrer automatiquement le travail',
    minutes: 'minutes',
    saveSettings: 'Enregistrer',
    resetDefaults: 'Réinitialiser les paramètres',
    
    // Statistiques
    statsTitle: 'Statistiques du jour',
    completedPomodoros: 'Pomodoros terminés',
    totalWorkTime: 'Temps total de travail',
    averageDailyPomodoros: 'Pomodoros journaliers moyens',
    currentStreak: 'Série actuelle (jours)',
    
    // Messages d'état
    workStarted: 'Au travail ! Concentrez-vous sur votre tâche.',
    shortBreakStarted: 'Courte pause. Détendez-vous !',
    longBreakStarted: 'Longue pause. Reposez-vous bien !',
    pausedMessage: 'Minuteur en pause',
    resetMessage: 'Minuteur réinitialisé',
    workCompleted: 'Session de travail terminée !',
    breakCompleted: 'Pause terminée !',
    
    // Description de l'outil
    aboutTitle: 'À propos de la technique Pomodoro',
    aboutDescription: 'La technique Pomodoro est une méthode de gestion du temps développée par Francesco Cirillo à la fin des années 1980. Cette méthode utilise un minuteur pour diviser le travail en intervalles, traditionnellement de 25 minutes, séparés par de courtes pauses. Ces intervalles sont appelés "pomodoros", d\'après le minuteur de cuisine en forme de tomate que Cirillo utilisait initialement.',
    
    howToUseTitle: 'Mode d\'emploi',
    howToUseStep1: '1. Définissez la tâche à accomplir',
    howToUseStep2: '2. Réglez le Pomodoro sur 25 minutes (ajustable dans les paramètres)',
    howToUseStep3: '3. Travaillez jusqu\'à ce que le minuteur sonne',
    howToUseStep4: '4. Prenez une courte pause de 5 minutes',
    howToUseStep5: '5. Après 4 Pomodoros, prenez une longue pause de 15-30 minutes',
    
    benefitsTitle: 'Avantages de la technique Pomodoro',
    benefit1: 'Améliore la concentration et l\'attention',
    benefit2: 'Réduit les distractions et la procrastination',
    benefit3: 'Augmente la motivation et l\'endurance',
    benefit4: 'Améliore l\'équilibre travail/repos',
    benefit5: 'Diminue la fatigue mentale',
    
    tipsTitle: 'Conseils d\'utilisation',
    tip1: 'Choisissez un environnement calme pour limiter les distractions',
    tip2: 'Pendant les pauses, éloignez-vous complètement du travail',
    tip3: 'Maintenez des durées constantes pour créer une routine',
    tip4: 'Utilisez cet outil pour analyser vos habitudes de travail',
    tip5: 'Combinez avec une liste de tâches - un Pomodoro = une tâche',
    
    // Contenu de l'article
    article: {
      title: 'Minuteur Pomodoro : Maximiser sa productivité par la gestion du temps',
      features: {
        title: 'Fonctionnalités et applications',
        description: 'Le <strong>Minuteur Pomodoro</strong> est un puissant outil de productivité basé sur la célèbre technique Pomodoro, une méthode de gestion du temps développée par Francesco Cirillo. Cette approche divise le travail en intervalles de concentration (traditionnellement 25 minutes, appelés "pomodoros"), entrecoupés de courtes pauses. Notre application améliore cette méthode avec des durées personnalisables, des notifications sonores, des transitions automatiques et des statistiques détaillées.',
        useCasesTitle: 'Cas d\'utilisation pratiques',
        useCases: {
          items: [
            '<strong>Étude concentrée</strong> : Les étudiants peuvent utiliser le minuteur pour maintenir leur attention tout en évitant l\'épuisement et en optimisant la rétention d\'information.',
            '<strong>Travail en profondeur</strong> : Les professionnels utilisent des intervalles chronométrés pour des tâches complexes comme le codage, l\'écriture ou l\'analyse de données, améliorant qualité et quantité de production.',
            '<strong>Surmonter la procrastination</strong> : Le minuteur aide à diviser les tâches intimidantes en segments gérables, facilitant le démarrage et le maintien de la motivation.',
            '<strong>Télétravail</strong> : Les travailleurs à domicile établissent des limites claires entre périodes de concentration et pauses dans un environnement propice aux distractions.',
            '<strong>Création de contenu</strong> : Artistes et écrivains utilisent des sessions chronométrées pour équilibrer production créative et repos, prévenant l\'épuisement créatif.',
            '<strong>Gestion des tâches multiples</strong> : Les professionnels polyvalents attribuent des Pomodoros spécifiques à différents projets pour un progrès équilibré.'
          ]
        }
      },
      faq: {
        title: 'Questions fréquentes',
        items: [
          {
            question: 'Quelle est la science derrière la technique Pomodoro ?',
            answer: 'La technique Pomodoro s\'appuie sur plusieurs principes psychologiques : la capacité du cerveau à se concentrer sur des périodes limitées (généralement 25-45 minutes), l\'importance des pauses régulières pour prévenir la fatigue, et l\'effet motivationnel des limites temporelles. Des recherches en psychologie cognitive confirment qu\'alterner concentration et brèves pauses optimise les performances mentales. La technique exploite aussi l\'effet Zeigarnik - notre tendance à mieux nous souvenir des tâches inachevées - en offrant une méthode structurée pour les compléter.'
          },
          {
            question: 'Comment adapter les durées pour différents types de travail ?',
            answer: 'Différentes tâches bénéficient d\'<strong>intervalles Pomodoro</strong> personnalisés :<br>- <strong>Travail analytique complexe</strong> (programmation, rédaction) : des Pomodoros plus longs (30-45 minutes) pour une réflexion approfondie.<br>- <strong>Tâches administratives</strong> : l\'intervalle standard de 25 minutes convient généralement.<br>- <strong>Travail créatif</strong> : des sessions plus courtes (15-20 minutes) maintiennent la fraîcheur créative, ou plus longues (jusqu\'à 50 minutes) en état de flux.<br>- <strong>Apprentissage</strong> : des sessions courtes (15-20 minutes) aident à la rétention.<br>L\'expérimentation est clé - ajustez les paramètres de votre <strong>Minuteur Pomodoro</strong> selon votre énergie, la complexité des tâches et vos observations.'
          },
          {
            question: 'La technique aide-t-elle les personnes avec TDAH ou difficultés de concentration ?',
            answer: 'Oui, beaucoup de personnes avec TDAH trouvent la <strong>technique Pomodoro</strong> particulièrement bénéfique. Les blocs de temps structurés créent une motivation externe et des limites claires, tandis que les pauses fréquentes s\'adaptent aux durées d\'attention plus courtes. La technique aide à développer progressivement les "muscles" de la concentration. Certains ajustements utiles incluent : des intervalles de travail initiaux plus courts (15-20 minutes), des activités physiques pendant les pauses, et l\'utilisation de listes de tâches. De nombreux experts recommandent des outils comme le <strong>Minuteur Pomodoro</strong> dans les stratégies de productivité.'
          },
          {
            question: 'Comment gérer les interruptions pendant un Pomodoro ?',
            answer: 'Les interruptions sont inévitables mais peuvent être gérées avec ces stratégies :<br>1. <strong>Interruptions internes</strong> (vos propres pensées) : Notez-les rapidement puis revenez à la tâche.<br>2. <strong>Interruptions externes</strong> (collègues, notifications) : Options :<br>- <strong>Informer-Négocier-Programmer</strong> : Signalez que vous êtes en session concentrée, négociez un moment pour traiter leur demande, et programmez-le.<br>- <strong>Règle des 5 minutes</strong> : Si l\'interruption prend moins de 5 minutes, traitez-la puis recommencez le Pomodoro.<br>3. <strong>Urgences</strong> : Arrêtez le minuteur, traitez la situation, puis recommencez un nouveau Pomodoro.<br>Un Pomodoro est indivisible - en cas d\'interruption majeure, mieux vaut abandonner la session et en commencer une nouvelle.'
          },
          {
            question: 'Comment suivre et améliorer ma productivité avec la technique ?',
            answer: 'Notre <strong>Minuteur Pomodoro</strong> inclut des fonctions de suivi statistique pour mesurer vos progrès. Pour maximiser les bénéfices :<br>1. <strong>Fixez des objectifs quotidiens</strong> : Commencez modestement (ex: 6-8 Pomodoros) et augmentez progressivement.<br>2. <strong>Suivez votre taux d\'achèvement</strong> : Comparez Pomodoros planifiés vs réalisés.<br>3. <strong>Analysez les interruptions</strong> : Identifiez les sources de distraction récurrentes.<br>4. <strong>Examinez les tendances</strong> : Les statistiques révèlent vos moments les plus productifs.<br>5. <strong>Testez différentes durées</strong> : Trouvez vos cycles de concentration optimaux.<br>6. <strong>Célébrez vos séries</strong> : Le compteur de jours consécutifs encourage la régularité.<br>Cette approche basée sur les données aide à affiner votre gestion du temps pour une productivité maximale.'
          }
        ]
      },
      guide: {
        title: 'Comment utiliser le Minuteur Pomodoro',
        step1: {
          title: 'Configurer votre minuteur',
          description: 'Commencez par personnaliser votre <strong>Minuteur Pomodoro</strong>. Dans les paramètres, ajustez la durée de travail (traditionnellement 25 minutes), des pauses courtes (5 minutes), longues (15-30 minutes), et le nombre de cycles avant une longue pause (généralement 4). Activez les notifications sonores et transitions automatiques si souhaité. Cliquez "Enregistrer" pour appliquer vos préférences. Cette personnalisation adapte l\'outil à vos besoins spécifiques.'
        },
        step2: {
          title: 'Planifier vos tâches',
          description: 'Avant de démarrer le minuteur, identifiez et priorisez les tâches spécifiques à accomplir pendant la session. Pour de meilleurs résultats, décomposez les grands projets en éléments actionnables pouvant être traités en un seul Pomodoro. Une liste de tâches claire évite de perdre du temps à décider quoi faire pendant les précieuses minutes de concentration. La <strong>technique Pomodoro</strong> fonctionne mieux combinée à une planification minutieuse.'
        },
        step3: {
          title: 'Démarrer une session de travail',
          description: 'Sélectionnez le mode "Travail" et cliquez "Démarrer" pour lancer la session. Engagez-vous à vous concentrer sur la tâche choisie jusqu\'à la fin du minuteur. L\'affichage numérique montre le temps restant. Pendant cette période, éliminez toutes distractions potentielles - notifications silencieuses, onglets fermés, et si possible, informez vos collègues que vous êtes en session concentrée. Le <strong>Minuteur Pomodoro</strong> crée un espace mental pour un travail en profondeur - respectez ce temps avec une attention totale.'
        },
        step4: {
          title: 'Prendre des pauses entre les sessions',
          description: 'À la fin de l\'intervalle de travail, le minuteur alerte (si activé) et passe automatiquement en mode pause. Des pauses courtes (5 minutes) suivent la plupart des sessions, avec des pauses longues (15-30 minutes) après plusieurs Pomodoros. Pendant les pauses, éloignez-vous du travail - étirez-vous, marchez, reposez vos yeux, hydratez-vous ou pratiquez une brève méditation. Évitez les emails ou réseaux sociaux pendant les courtes pauses, car ces activités peuvent facilement déborder. Le <strong>système Pomodoro</strong> repose sur des pauses appropriées pour maintenir la fraîcheur cognitive et prévenir l\'épuisement.'
        },
        step5: {
          title: 'Suivre vos progrès',
          description: 'Le <strong>Minuteur Pomodoro</strong> enregistre automatiquement vos sessions complétées dans le panneau de statistiques. Ici, vous pouvez surveiller votre nombre quotidien de Pomodoros, temps total de travail, moyennes et séries consécutives. Utilisez ces métriques pour comprendre vos habitudes, fixer des objectifs d\'amélioration et maintenir la motivation grâce à des progrès visibles. Avec le temps, ces données vous aideront à optimiser vos habitudes de travail et affiner votre gestion du temps pour une efficacité et qualité de production maximales.'
        }
      },
      conclusion: 'Le <strong>Minuteur Pomodoro</strong> transforme votre façon de travailler en structurant votre temps en intervalles optimaux de concentration et de repos. En mettant en œuvre cette méthode scientifiquement soutenue, vous pourriez expérimenter une meilleure concentration, moins de procrastination, une productivité accrue et une fatigue mentale réduite. Cette technique flexible profite aux étudiants, professionnels, créateurs et toute personne cherchant à améliorer sa productivité tout en préservant son bien-être. En utilisant régulièrement la technique Pomodoro, vous développerez une meilleure conscience de votre utilisation du temps et renforcerez vos capacités de concentration, compétences transférables à tous les domaines de la vie.'
    }
  };