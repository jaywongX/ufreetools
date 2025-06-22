export default {
    name: 'Obfuscateur de code',
    description: 'Obfusquez du code JavaScript et CSS pour améliorer la sécurité et protéger la propriété intellectuelle',
    languages: {
      title: 'Sélectionnez le langage',
      javascript: 'JavaScript',
      css: 'CSS'
    },
    options: {
      title: 'Options d\'obfuscation',
      javascript: {
        compact: 'Sortie compacte (supprime les espaces)',
        controlFlowFlattening: 'Aplatissement du flux de contrôle',
        deadCodeInjection: 'Injection de code inutile',
        debugProtection: 'Protection contre le débogage',
        selfDefending: 'Auto-défense (prévention du formatage)',
        stringArray: 'Conversion des chaînes en tableau',
        renameGlobals: 'Renommage des variables globales',
        renameProperties: 'Renommage des propriétés',
        mangle: 'Obfuscation des noms de variables',
        stringArrayEncoding: 'Encodage du tableau de chaînes',
        stringArrayThreshold: 'Seuil du tableau de chaînes',
        unicodeEscapeSequence: 'Séquence d\'échappement Unicode'
      },
      css: {
        compact: 'Sortie compacte',
        renameSelectors: 'Renommage des sélecteurs',
        preserveImportant: 'Conserver !important',
        restructure: 'Restructuration des règles',
        keepVendorPrefixes: 'Conserver les préfixes navigateurs',
        removeComments: 'Supprimer les commentaires'
      }
    },
    input: {
      title: 'Code source',
      placeholder: 'Entrez le code à obfusquer ici...',
      clear: 'Effacer',
      paste: 'Coller',
      upload: 'Téléverser un fichier',
      inputObfuscatorCode: 'Veuillez entrer le code à obfusquer',
    },
    output: {
      title: 'Résultat de l\'obfuscation',
      placeholder: 'Le code obfusqué apparaîtra ici...',
      copy: 'Copier',
      download: 'Télécharger',
      stats: {
        original: 'Taille originale',
        obfuscated: 'Taille après obfuscation',
        ratio: 'Taux de compression'
      },
      increase: 'Augmentation',
      decrease: 'Diminution',
    },
    actions: {
      obfuscate: 'Obfusquer',
      clear: 'Effacer'
    },
    messages: {
      copied: 'Copié dans le presse-papiers',
      copyFailed: 'Échec de la copie, veuillez copier manuellement',
      processing: 'Traitement en cours...',
      error: 'Erreur lors de l\'obfuscation',
      invalidInput: 'Code source invalide',
      uploadError: 'Échec du téléversement du fichier',
      fileTooLarge: 'Fichier trop volumineux (max 2MB)'
    },
    tips: {
      title: 'Conseils d\'utilisation',
      tip1: 'L\'obfuscation peut augmenter la difficulté de rétro-ingénierie mais ne peut pas empêcher complètement le décodage',
      tip2: 'Activer plus d\'options d\'obfuscation augmentera la taille du code et son surcoût d\'exécution',
      tip3: 'Certaines options d\'obfuscation peuvent affecter la capacité à déboguer le code',
      tip4: 'Il est recommandé de sauvegarder le code original avant obfuscation',
      tip5: 'Pour les grands projets, il est recommandé d\'utiliser des outils d\'obfuscation professionnels'
    },
    demo: {
      title: 'Exemples',
      function: 'Exemple de fonction',
      class: 'Exemple de classe',
      simple: 'Style simple',
      animation: 'Effet d\'animation',
    },
    article: {
      title: "Comprendre en profondeur les techniques d'obfuscation de code pour améliorer la sécurité des applications et la protection de la propriété intellectuelle",
      overview: {
        title: "Qu'est-ce que l'obfuscation de code ?",
        content: "L'<strong>obfuscation de code</strong> est une technique de sécurité qui transforme du code source lisible en une version complexe et difficile à comprendre tout en conservant sa fonctionnalité. Cette mesure de défense puissante aide à protéger la propriété intellectuelle, empêcher l'ingénierie inverse et protéger les algorithmes sensibles ou la logique métier contre les accès non autorisés.<br><br>L'outil d'obfuscateur de code prend en charge l'obfuscation JavaScript et CSS, utilisant diverses techniques comme le renommage de variables, l'aplatissement du flux de contrôle, l'injection de code inutile et le chiffrement des chaînes, créant des couches de protection pour le code contre le vol et la falsification. En rendant le code source plus difficile à analyser et comprendre, l'obfuscation fournit une couche de sécurité nécessaire pour les applications web déployées et les scripts clients."
      },
      useCases: {
        title: "Cas d'utilisation courants de l'obfuscation de code",
        items: [
          {
            title: "Protection de la propriété intellectuelle",
            description: "Protégez les algorithmes précieux, la logique métier propriétaire et les implémentations de code innovantes contre la compréhension et la copie par des concurrents ou des utilisateurs non autorisés."
          },
          {
            title: "Amélioration de la sécurité côté client",
            description: "Améliorez la sécurité du JavaScript exécuté dans les navigateurs en obfusquant les mécanismes d'authentification, les routines de validation et le code d'interaction API, empêchant les attaquants de facilement comprendre et exploiter ces fonctionnalités sensibles."
          },
          {
            title: "Protection des vérifications de licence",
            description: "Protégez les algorithmes de vérification de licence et les codes d'activation de produit contre le contournement ou le piratage, rendant plus difficile pour les utilisateurs non autorisés de supprimer ou modifier les restrictions de licence."
          },
          {
            title: "Prévention de l'analyse automatique",
            description: "Complexifiez l'analyse statique et rendez plus difficile l'identification automatique des vulnérabilités de sécurité ou des points d'extraction par des outils malveillants en introduisant des techniques d'obfuscation."
          },
          {
            title: "Protection des applications web mobiles",
            description: "Protégez le JavaScript et CSS dans les applications web progressives (PWAs) et applications web mobiles qui sont téléchargées sur les appareils des utilisateurs et autrement faciles à inspecter et réutiliser."
          },
          {
            title: "Protection de contenu premium",
            description: "Protégez les mécanismes d'accès au contenu payant ou réservé aux abonnés sur les sites web et applications web en obfusquant le code qui contrôle ces fonctionnalités."
          },
          {
            title: "Déploiement de code temporaire",
            description: "Protégez les codes promotionnels, fonctionnalités limitées dans le temps ou fonctionnalités saisonnières en utilisant l'obfuscation pour empêcher l'utilisation non autorisée prolongée ou la découverte anticipée de fonctionnalités à venir."
          }
        ]
      },
      guide: {
        title: "Comment utiliser l'outil d'obfuscation de code",
        intro: "Suivez ces étapes pour obfusquer efficacement votre code et améliorer sa sécurité :",
        steps: [
          {
            title: "Sélectionnez le langage du code",
            description: "Commencez par choisir le langage de programmation que vous souhaitez obfusquer. L'outil prend actuellement en charge JavaScript et CSS. Chaque langage dispose de techniques d'obfuscation spécifiques adaptées à ses particularités."
          },
          {
            title: "Configurez les options d'obfuscation",
            description: "Sélectionnez les options d'obfuscation correspondant à vos besoins. Pour JavaScript, les options incluent l'aplatissement du flux de contrôle, l'injection de code inutile, la conversion des chaînes en tableaux, etc. Pour CSS, vous pouvez renommer les sélecteurs, compacter la sortie et restructurer les règles. Plus vous activez d'options, plus l'obfuscation sera forte mais cela peut augmenter la taille du code."
          },
          {
            title: "Saisissez le code source",
            description: "Entrez dans la section d'entrée le code que vous souhaitez obfusquer. Pour votre commodité, vous pouvez utiliser les exemples fournis pour voir comment l'obfuscateur traite différents modèles de code. Si vous utilisez votre propre code, assurez-vous qu'il fonctionne correctement avant obfuscation."
          },
          {
            title: "Générez le code obfusqué",
            description: "Cliquez sur le bouton \"Obfusquer\" pour traiter votre code. L'outil appliquera les techniques d'obfuscation sélectionnées pour transformer votre code en une version plus sécurisée et difficile à lire tout en conservant sa fonctionnalité originale."
          },
          {
            title: "Vérifiez les résultats",
            description: "Examinez le code obfusqué généré pour vous assurer qu'il répond à vos exigences de sécurité. Notez les différences de taille et taux de compression affichés sous la sortie. Dans certains cas, le code obfusqué peut être plus volumineux que l'original en raison des mécanismes de sécurité ajoutés."
          },
          {
            title: "Copiez ou téléchargez le code obfusqué",
            description: "Une fois satisfait du résultat, utilisez le bouton copier pour dupliquer le code obfusqué ou téléchargez-le pour l'implémenter dans votre projet. Le code obfusqué peut être utilisé directement avec exactement les mêmes fonctionnalités que le code original, mais avec des caractéristiques de sécurité supplémentaires."
          },
          {
            title: "Testez le code obfusqué",
            description: "Avant le déploiement en production, testez minutieusement le code obfusqué dans votre application pour vérifier son bon fonctionnement. Bien que le processus d'obfuscation préserve la fonctionnalité, il est toujours recommandé de valider dans votre environnement d'implémentation spécifique."
          }
        ]
      },
      techniques: {
        title: "Comprendre les techniques d'obfuscation",
        intro: "L'obfuscation de code utilise diverses techniques pour protéger votre code. Comprendre ces méthodes peut vous aider à choisir les options adaptées à vos besoins de sécurité :",
        items: [
          {
            name: "Renommage des variables et fonctions",
            description: "Remplace les noms d'identifiants significatifs par des noms courts, chiffrés ou trompeurs, rendant le code plus difficile à comprendre. Cette technique réduit considérablement la lisibilité du code tout en conservant sa fonctionnalité complète. En JavaScript, cela peut s'appliquer aux variables, fonctions et même aux noms globaux."
          },
          {
            name: "Aplatissement du flux de contrôle",
            description: "Remplace les chemins de code directs par un modèle de machine à états, transformant le flux de contrôle du programme en une structure apparemment aléatoire. Cela rend extrêmement difficile le suivi de l'exécution logique du code, augmentant considérablement la complexité des tentatives de rétro-ingénierie."
          },
          {
            name: "Injection de code inutile",
            description: "Insère du code non fonctionnel qui ne s'exécute jamais mais semble important pour les analyseurs de code et les personnes essayant de comprendre le programme. Cette technique ajoute de la complexité et des distractions, masquant la véritable fonction du code."
          },
          {
            name: "Chiffrement des chaînes",
            description: "Convertit les chaînes littérales du code en formes chiffrées qui ne sont décryptées qu'à l'exécution. Cela empêche l'analyse directe des chaînes et rend difficile l'identification des composants clés du code en recherchant des modèles ou messages textuels spécifiques."
          },
          {
            name: "Code auto-défensif",
            description: "Ajoute des mécanismes détectant si le code a été modifié ou si quelqu'un tente de le déboguer ou le formater. Si une altération est détectée, cette technique peut faire échouer intentionnellement le code, fournissant une couche de protection supplémentaire contre la rétro-ingénierie."
          },
          {
            name: "Renommage des sélecteurs CSS",
            description: "Pour l'obfuscation CSS, cette technique remplace les noms de classes et ID significatifs par des noms générés aléatoirement. Cela protège la structure de vos styles, rendant plus difficile pour les autres de comprendre ou copier vos modèles de conception."
          }
        ]
      },
      faq: {
        title: "Questions fréquentes sur l'obfuscation de code",
        items: [
          {
            question: "L'obfuscation peut-elle empêcher complètement la rétro-ingénierie ?",
            answer: "Aucune méthode d'obfuscation ne peut empêcher à 100% la rétro-ingénierie par des personnes déterminées. L'obfuscation augmente considérablement le temps, l'effort et l'expertise nécessaires pour comprendre votre code, constituant une forte dissuasion contre les attaques occasionnelles et la plupart des outils automatisés. Elle doit être considérée comme une couche dans une stratégie de sécurité globale plutôt qu'une barrière infranchissable. Pour les opérations vraiment sensibles, l'exécution côté serveur reste l'option la plus sûre."
          },
          {
            question: "L'obfuscation affecte-t-elle les performances de mon code ?",
            answer: "Le code obfusqué a généralement un impact minime sur les performances d'exécution JavaScript. Les moteurs JavaScript modernes optimisent le code indépendamment des noms de variables ou de la structure. Cependant, certaines techniques d'obfuscation avancées comme l'aplatissement du flux de contrôle et la protection contre le débogage peuvent introduire une légère surcharge. Pour la plupart des applications, cette différence est négligeable, mais pour les parties critiques en termes de performances, un choix prudent des options d'obfuscation peut être nécessaire."
          },
          {
            question: "Comment déboguer le code obfusqué si un problème survient ?",
            answer: "Déboguer du code obfusqué est intrinsèquement difficile. Les meilleures pratiques incluent : (1) toujours conserver le code source original non obfusqué comme référence, (2) utiliser les source maps disponibles, (3) n'obfusquer qu'en production et pas pendant le développement, (4) tester minutieusement avant obfuscation pour réduire le besoin de débogage, (5) envisager d'implémenter des logs pour les parties critiques qui peuvent survivre à l'obfuscation. Pour les problèmes critiques dans le code déployé, vous devrez peut-être revenir à la version non obfusquée pour le dépannage."
          },
          {
            question: "Le JavaScript obfusqué fonctionne-t-il toujours sur tous les navigateurs ?",
            answer: "Un JavaScript correctement obfusqué est entièrement compatible avec tous les navigateurs modernes. Le processus d'obfuscation préserve la fonctionnalité tout en changeant l'apparence et la structure du code. Cependant, si votre code original utilise des fonctionnalités JavaScript très récentes (ES6+), assurez-vous que vos navigateurs cibles les supportent, car l'obfuscation ne change pas le niveau de langage ni n'ajoute automatiquement des polyfills. Il est toujours recommandé de tester après obfuscation sur plusieurs navigateurs."
          },
          {
            question: "L'obfuscation CSS peut-elle casser l'apparence de mon site ?",
            answer: "Si votre site dépend de noms de classes ou d'ID spécifiques en dehors des feuilles de style, l'obfuscation CSS peut affecter votre site. Par exemple, si du JavaScript sélectionne des éléments par des noms de classes qui sont renommés pendant l'obfuscation, ou si des composants tiers nécessitent des noms de classes CSS spécifiques, la fonctionnalité peut être interrompue. Lorsque vous utilisez l'obfuscation CSS, assurez-vous d'obfusquer également le HTML et JavaScript en conséquence, ou utilisez des options pour préserver certains sélecteurs critiques."
          },
          {
            question: "Quelle est l'augmentation typique de taille des fichiers après obfuscation ?",
            answer: "L'impact sur la taille varie selon les techniques d'obfuscation appliquées. Une obfuscation basique avec compression (sortie compacte) réduit généralement la taille des fichiers en supprimant les espaces, commentaires et en raccourcissant les noms de variables. Cependant, les techniques de sécurité avancées comme l'injection de code inutile, la conversion des chaînes en tableaux et l'aplatissement du flux de contrôle peuvent augmenter la taille des fichiers de 20-100% ou plus. L'outil affiche le pourcentage de changement de taille pour vous aider à équilibrer besoins de sécurité et considérations de taille de fichier."
          },
          {
            question: "Puis-je obfusquer seulement certaines parties de mon code ?",
            answer: "Cet outil en ligne traite l'intégralité du code saisi en une fois, mais vous pouvez implémenter une obfuscation partielle en : (1) obfusquant séparément les modules ou fonctions critiques puis les intégrant avec le code non obfusqué, (2) utilisant des techniques de limitation de portée comme des fonctions anonymes pour isoler des sections de code avant obfuscation, ou (3) pour les grands projets, utilisant des outils de build comme Webpack avec des plugins supportant l'obfuscation sélective basée sur des motifs de fichiers ou commentaires. Concentrez vos efforts d'obfuscation sur les parties les plus sensibles ou précieuses de votre base de code."
          }
        ]
      },
      bestPractices: {
        title: "Bonnes pratiques pour une obfuscation efficace",
        intro: "Pour maximiser la sécurité tout en conservant la fonctionnalité, considérez ces bonnes pratiques lorsque vous obfusquez du code :",
        items: [
          "Conservez toujours une copie du code source original non obfusqué dans un endroit sécurisé",
          "Testez minutieusement le code obfusqué avant déploiement pour vérifier que la fonctionnalité est entièrement préservée",
          "Équilibrez la force d'obfuscation avec les exigences de taille et performance du code selon les besoins spécifiques de votre application",
          "Combinez l'obfuscation avec d'autres mesures de sécurité comme HTTPS, une authentification appropriée et des validations côté serveur",
          "Pour JavaScript, évitez d'obfusquer du code qui dépend de noms de fonctions ou variables spécifiques pour des interactions externes",
          "Pour l'obfuscation CSS, faites attention aux noms de classes pouvant être référencés par JavaScript ou des composants tiers",
          "Envisagez de générer des source maps pour le débogage, mais gardez-les séparées du code de production et sécurisées",
          "Mettez régulièrement à jour vos méthodes d'obfuscation avec l'émergence de nouvelles technologies et outils",
          "Pour les applications hautement sensibles, implémentez une approche en couches combinant obfuscation, chiffrement et traitement côté serveur",
          "Comprenez la portée de la protection : l'obfuscation vise principalement à décourager la rétro-ingénierie plutôt qu'à l'empêcher complètement",
          "Pour les applications web, envisagez de combiner l'obfuscation avec des politiques de sécurité de contenu (CSP) pour renforcer la sécurité globale",
          "Documentez votre processus et configuration d'obfuscation pour faciliter le partage des connaissances dans l'équipe et les besoins futurs de maintenance"
        ]
      }
    }
  }
           