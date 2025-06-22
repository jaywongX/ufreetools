export default {
    name: 'Simulateur de résolution de conflits Git',
    description: 'Simule des scénarios de conflits de fusion Git pour s\'entraîner à résoudre les conflits de code',
    title: 'Simulateur de résolution de conflits Git',
    intro: 'Cet outil vous aide à comprendre et pratiquer la résolution de conflits de fusion Git. Saisissez du contenu conflictuel ou utilisez l\'exemple, puis résolvez manuellement les conflits.',
    buttons: {
      generateExample: 'Générer un exemple de conflit',
      resolveOurs: 'Utiliser mes modifications (HEAD)',
      resolveTheirs: 'Utiliser leurs modifications',
      validate: 'Valider la solution',
      reset: 'Réinitialiser',
      useOurs: 'Utiliser les miennes',
      useTheirs: 'Utiliser les leurs',
      useBoth: 'Fusionner les deux'
    },
    conflictArea: {
      label: 'Contenu conflictuel',
      hasConflict: '⚠️ Conflit non résolu',
      noConflict: '✓ Aucun conflit'
    },
    analysis: {
      title: 'Analyse des conflits',
      conflict: 'Conflit #{number}',
      ours: 'Mes modifications (HEAD)',
      theirs: 'Leurs modifications'
    },
    tutorial: {
      title: 'Comment résoudre les conflits Git',
      intro: 'Les conflits Git surviennent généralement lors d\'opérations de fusion ou de rebasage, lorsque deux branches modifient la même partie d\'un même fichier.',
      markerExplanation: 'Les marqueurs de conflit ressemblent généralement à ceci :',
      markerExample: `<<<<<<< HEAD
  Vos modifications (branche actuelle)
  =======
  Leurs modifications (branche fusionnée)
  >>>>>>> nom-de-branche`,
      steps: {
        title: 'Étapes de base pour résoudre les conflits :',
        step1: 'Localisez tous les marqueurs de conflit (<code><<<<<<< HEAD</code>, <code>=======</code>, <code>>>>>>> nom-de-branche</code>)',
        step2: 'Décidez quels codes conserver (les vôtres, les leurs ou une combinaison)',
        step3: 'Supprimez les marqueurs de conflit et conservez uniquement le code que vous souhaitez garder',
        step4: 'Passez au conflit suivant jusqu\'à ce que tous soient résolus'
      },
      commands: {
        title: 'Commandes Git courantes :',
        status: '<code>git status</code> - Voir quels fichiers ont des conflits',
        diff: '<code>git diff</code> - Voir le détail des conflits',
        abort: '<code>git merge --abort</code> - Annuler la fusion et revenir à l\'état précédent',
        add: '<code>git add &lt;fichier&gt;</code> - Marquer un fichier conflictuel comme résolu',
        commit: '<code>git commit</code> - Finaliser la fusion'
      }
    },
    messages: {
      generated: "Exemple de conflit généré",
      resolvedOurs: "Tous les conflits résolus en utilisant « mes modifications »",
      resolvedTheirs: "Tous les conflits résolus en utilisant « leurs modifications »",
      resolvedSingle: "Conflit #{number} résolu",
      allResolved: "✅ Tous les conflits résolus avec succès !",
      stillHasConflicts: "⚠️ Il reste des conflits non résolus, vérifiez et résolvez tous les marqueurs"
    },
    article: {
      title: "Comprendre les conflits Git et comment les résoudre",
      overview: {
        title: "Qu'est-ce que la résolution de conflits Git ?",
        content: "La résolution de conflits Git est le processus de gestion et de résolution des conflits qui surviennent lors de la fusion ou du rebasage de branches dans Git. Lorsque plusieurs développeurs modifient la même partie d'un même fichier, Git ne peut pas déterminer automatiquement quelles modifications conserver. C'est là qu'intervient le résolveur de conflits Git.<br><br>Ce simulateur de résolution de conflits Git vous aide à comprendre et pratiquer la résolution de conflits de fusion dans un environnement sécurisé. En simulant des scénarios de conflits courants, vous pouvez apprendre les mécanismes de résolution sans affecter le code de projets réels. Le simulateur met en évidence les conflits de fusion, affiche les modifications conflictuelles côte à côte et fournit des outils pour s'entraîner à les résoudre efficacement."
      },
      useCases: {
        title: "Scénarios courants nécessitant une résolution de conflits Git",
        items: [
          {
            title: "Collaboration d'équipe sur un dépôt partagé",
            description: "Lorsque plusieurs membres de l'équipe modifient simultanément le même fichier, des conflits sont probables lors de la fusion. Acquérir des compétences en résolution de conflits assure une collaboration harmonieuse."
          },
          {
            title: "Intégration de branches de fonctionnalités",
            description: "Lors de la fusion de branches de fonctionnalités dans la branche de développement principale, des conflits apparaissent souvent dans les zones développées en parallèle."
          },
          {
            title: "Gestion des demandes d'extraction",
            description: "Résoudre les conflits lors de l'intégration de demandes d'extraction dans le dépôt principal, pour garantir que les modifications peuvent être fusionnées en toute sécurité."
          },
          {
            title: "Gestion de branches à long terme",
            description: "Lorsqu'une branche reste séparée de la ligne de développement principale pendant longtemps, la résolution des conflits accumulés lors de la réintégration peut être complexe."
          },
          {
            title: "Contribution à des projets open source",
            description: "Les contributeurs à des projets open source rencontrent souvent des conflits lorsque leurs modifications chevauchent celles d'autres contributeurs ou mainteneurs."
          }
        ]
      },
      guide: {
        title: "Guide étape par étape pour résoudre les conflits Git",
        intro: "Résoudre les conflits Git peut sembler intimidant au début, mais suivre une méthode systématique rend le processus gérable. Voici comment résoudre efficacement les conflits Git :",
        steps: [
          {
            title: "Identifier les fichiers conflictuels",
            description: "Utilisez 'git status' pour identifier les fichiers marqués comme conflictuels. Ces fichiers contiennent des marqueurs de conflit à résoudre."
          },
          {
            title: "Ouvrir les fichiers conflictuels",
            description: "Ouvrez les fichiers conflictuels dans un éditeur. Recherchez les marqueurs de conflit (<<<<<<< HEAD, =======, et >>>>>>> nom-de-branche) indiquant où se situent les conflits."
          },
          {
            title: "Comprendre les deux ensembles de modifications",
            description: "Examinez les modifications des deux côtés. Le contenu entre <<<<<<< HEAD et ======= montre les modifications de votre branche actuelle, tandis que le contenu entre ======= et >>>>>>> montre les modifications entrantes."
          },
          {
            title: "Décider comment résoudre chaque conflit",
            description: "Décidez si vous souhaitez conserver vos modifications, accepter les modifications entrantes ou créer une combinaison des deux. Considérez l'intention derrière chaque modification plutôt que de simplement choisir l'une d'elles."
          },
          {
            title: "Modifier le fichier pour résoudre le conflit",
            description: "Éditez le fichier pour supprimer les marqueurs de conflit et ne conserver que le contenu final souhaité. Cela peut impliquer de choisir une version ou de combiner manuellement des éléments des deux."
          },
          {
            title: "Marquer comme résolu",
            description: "Après édition, utilisez 'git add <nom-du-fichier>' pour marquer le fichier comme résolu. Cela met en attente le fichier résolu pour validation."
          },
          {
            title: "Terminer le processus de fusion",
            description: "Une fois tous les conflits résolus et les fichiers mis en attente, utilisez 'git commit' pour terminer le processus de fusion. Git créera une validation de fusion pour enregistrer la solution."
          }
        ]
      },
      conflictTypes: {
        title: "Types courants de conflits Git",
        intro: "Les conflits Git peuvent se présenter sous diverses formes, chacune nécessitant une approche légèrement différente. Comprendre ces types vous aide à les identifier et les résoudre efficacement :",
        types: [
          {
            title: "Conflits de contenu",
            description: "Le type de conflit le plus courant, survenant lorsque deux branches modifient les mêmes lignes de code. Git ne peut pas déterminer automatiquement quelles modifications conserver."
          },
          {
            title: "Conflits de suppression de fichiers",
            description: "Conflit survenant lorsqu'une branche modifie un fichier et qu'une autre le supprime. Git doit savoir s'il faut conserver le fichier modifié ou confirmer sa suppression."
          },
          {
            title: "Conflits de renommage de fichiers",
            description: "Lorsqu'une branche renomme un fichier et qu'une autre modifie le fichier original, Git peut avoir du mal à suivre correctement ces modifications."
          },
          {
            title: "Conflits de fichiers binaires",
            description: "Conflits dans des fichiers non textuels (comme des images ou des fichiers compilés) qui ne peuvent pas être fusionnés ligne par ligne. Ces conflits nécessitent généralement de choisir complètement une version."
          },
          {
            title: "Conflits d'espaces blancs",
            description: "Parfois, les conflits sont causés par des modifications d'espaces blancs (comme l'indentation ou les fins de ligne), ce qui peut être particulièrement frustrant mais généralement facile à résoudre."
          }
        ]
      },
      faq: {
        title: "Questions fréquentes sur la résolution de conflits Git",
        items: [
          {
            question: "Comment éviter les conflits Git ?",
            answer: "Bien que vous ne puissiez pas complètement éviter les conflits, surtout dans des projets actifs, vous pouvez les minimiser en : communiquant avec votre équipe sur les fichiers que vous modifiez, récupérant fréquemment les modifications, gardant les branches de fonctionnalités courtes et utilisant des validations plus petites et plus ciblées qui sont plus faciles à fusionner."
          },
          {
            question: "Puis-je utiliser des outils pour aider à résoudre les conflits Git ?",
            answer: "Oui, de nombreux clients Git et IDE proposent des outils visuels de résolution de conflits qui facilitent le processus en affichant les conflits côte à côte. Parmi les options populaires : Visual Studio Code, IntelliJ IDEA, GitKraken et SourceTree. Ces outils mettent en évidence les conflits et fournissent des boutons pour choisir entre différentes versions."
          },
          {
            question: "Que faire si je résous mal un conflit ?",
            answer: "Si vous faites une erreur lors de la résolution d'un conflit, vous pouvez toujours utiliser 'git merge --abort' pour annuler la fusion en cours (si vous n'avez pas encore validé), ou annuler la validation après coup. C'est une bonne pratique de tester votre code après résolution des conflits pour s'assurer qu'il fonctionne comme prévu."
          },
          {
            question: "Comment résoudre les conflits lors d'un rebasage ?",
            answer: "Le processus est similaire à la résolution des conflits de fusion, mais se fait pour chaque validation en cours de rebasage. Vous devez résoudre les conflits, puis utiliser 'git add' pour marquer les fichiers comme résolus, puis 'git rebase --continue' pour passer à la validation suivante (ou au conflit suivant) dans le processus de rebasage."
          },
          {
            question: "Faut-il utiliser la fusion ou le rebasage pour minimiser les conflits ?",
            answer: "Les deux stratégies ont leurs usages. La fusion conserve un historique précis mais peut créer des graphiques complexes avec de nombreuses validations de fusion. Le rebasage crée un historique plus propre et linéaire mais réécrit l'historique des validations, ce qui peut poser problème pour les branches partagées. Les équipes doivent convenir du workflow qui correspond à leurs besoins."
          },
          {
            question: "Que sont les 'marqueurs de conflit de fusion' dans Git ?",
            answer: "Les marqueurs de conflit de fusion sont des séquences de texte spéciales que Git insère dans les fichiers pour indiquer les modifications conflictuelles. Ils incluent : <<<<<<< HEAD (marque le début de vos modifications), ======= (sépare vos modifications des modifications entrantes), et >>>>>>> nom-de-branche (marque la fin des modifications entrantes de la branche spécifiée)."
          },
          {
            question: "Comment pratiquer la résolution de conflits Git en toute sécurité ?",
            answer: "Ce simulateur de résolution de conflits Git est conçu spécifiquement pour la pratique. De plus, vous pouvez créer des dépôts de test locaux, faire des modifications conflictuelles dans différentes branches et vous entraîner à les fusionner. Cela vous fournit un environnement sécurisé pour acquérir de l'assurance dans la gestion des conflits."
          }
        ]
      },
      bestPractices: {
        title: "Bonnes pratiques pour une résolution efficace des conflits",
        items: [
          "Communiquez avec votre équipe avant de modifier des fichiers susceptibles de créer des conflits",
          "Récupérez et fusionnez fréquemment depuis la branche principale pour réduire l'ampleur et la complexité des conflits",
          "Utilisez des fonctionnalités flags pour permettre la fusion précoce de fonctionnalités incomplètes sans affecter les fonctionnalités",
          "Décomposez les grosses modifications en validations plus petites et plus ciblées, plus faciles à fusionner",
          "Comprenez le contexte du code et l'intention des modifications des deux côtés avant de résoudre les conflits",
          "Envisagez la programmation en binôme pour les conflits complexes, pour combiner différentes perspectives",
          "Testez toujours votre application après résolution des conflits pour vous assurer qu'elle fonctionne correctement",
          "Documentez votre stratégie de résolution des conflits pour maintenir une cohérence à l'échelle de l'équipe",
          "Utilisez des messages de validation significatifs lors de la résolution des conflits pour expliquer vos décisions",
          "Tirez parti des options de configuration de Git comme 'git config merge.conflictstyle diff3' pour voir le contenu original avec les modifications conflictuelles"
        ]
      }
    }
  }