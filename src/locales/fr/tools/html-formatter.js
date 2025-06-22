export default {
    name: 'Outil de formatage HTML',
    description: 'Formate et embellit le code HTML pour améliorer la lisibilité',
    formatMode: 'Mode de formatage',
    beautify: 'Embellir',
    minify: 'Minifier',
    formatOptions: 'Options de formatage',
    removeComments: 'Supprimer les commentaires',
    preserveComments: 'Conserver les commentaires',
    showLineNumbers: 'Afficher les numéros de ligne',
    helpText: "L'outil d'embellissement/minification HTML aide les développeurs à organiser ou optimiser rapidement le code HTML, améliorant la lisibilité ou réduisant la taille des fichiers.",
    input: 'Entrée HTML',
    inputPlaceholder: 'Collez ou saisissez du code HTML ici...',
    examples: 'Exemples',
    exampleNames: {
      simple: 'HTML simple',
      complex: 'Page HTML complexe'
    },
    beautifiedResult: 'Résultat embelli',
    minifiedResult: 'Résultat minifié',
    stats: {
      chars: 'Caractères',
      lines: 'Lignes',
      reduction: 'Réduction de {chars} caractères ({percent}%)'
    },
    indentOptions: {
      spaces: '{count} espaces',
      tab: 'Indentation par tabulation'
    },
    errorMessages: {
      emptyInput: 'Veuillez entrer le code HTML à traiter',
      processingFailed: 'Échec du traitement HTML : {message}'
    },
    options: {
      indentSize: 'Taille de l\'indentation',
      wrapLength: 'Longueur de ligne',
      indentInnerHtml: 'Indenter le HTML interne',
      preserveNewlines: 'Conserver les sauts de ligne',
      maxPreserveNewlines: 'Nombre maximum de sauts de ligne consécutifs',
      wrapAttributes: 'Retour à la ligne des attributs',
      sortAttributes: 'Trier les attributs',
      sortClassNames: 'Trier les noms de classe'
    },
    actions: {
      format: 'Formatter HTML',
      minify: 'Minifier',
      clear: 'Effacer',
      copy: 'Copier',
      download: 'Télécharger',
      upload: 'Téléverser un fichier'
    },
    messages: {
      copied: 'Copié dans le presse-papiers !',
      formatSuccess: 'Formatage HTML réussi',
      formatError: 'Erreur lors du formatage HTML',
      invalidHtml: 'Syntaxe HTML invalide'
    },
    article: {
      title: "Outil de formatage HTML : Un outil essentiel pour le développement web et l'optimisation de code",
      overview: {
        title: "Qu'est-ce qu'un formateur HTML ?",
        content: "Le <strong>formatage HTML</strong> est le processus d'organisation de la structure du code HTML pour améliorer la lisibilité et la maintenabilité. L'outil de formatage HTML offre deux fonctionnalités principales : l'<strong>embellissement</strong> et la <strong>minification</strong> du code HTML.<br><br>Le mode <strong>embellissement</strong> réorganise le code HTML avec une indentation appropriée, un espacement cohérent et des sauts de ligne logiques, le rendant plus facile à lire et à éditer. Ceci est particulièrement utile pour le développement, le débogage et la collaboration sur le code.<br><br>Le mode <strong>minification</strong> supprime les espaces inutiles, les commentaires et les caractères redondants sans changer la fonctionnalité, réduisant ainsi la taille du fichier. Le HTML minifié se charge plus rapidement, améliorant les performances du site et l'expérience utilisateur tout en réduisant l'utilisation de bande passante."
      },
      useCases: {
        title: "Cas d'utilisation courants du formatage HTML",
        items: [
          {
            title: "Amélioration du flux de travail de développement web",
            description: "Embellir le code HTML désorganisé reçu des clients, des membres de l'équipe ou des éditeurs visuels pour le rendre lisible et maintenable, améliorant considérablement l'efficacité du développement et réduisant le temps nécessaire pour comprendre des structures HTML complexes."
          },
          {
            title: "Débogage et dépannage du code",
            description: "Formater du HTML mal structuré pour identifier les balises manquantes, l'imbrication incorrecte ou les erreurs de syntaxe qui pourraient causer des problèmes de mise en page ou de fonctionnalité du site web, rendant le processus de débogage plus direct et moins chronophage."
          },
          {
            title: "Optimisation des performances du site",
            description: "Minifier les fichiers HTML avant le déploiement pour réduire leur taille, améliorer la vitesse de chargement des pages, renforcer l'expérience utilisateur et potentiellement améliorer le référencement, car la vitesse de la page est un facteur dans les algorithmes des moteurs de recherche."
          },
          {
            title: "Apprentissage et enseignement du HTML",
            description: "Formater des exemples HTML complexes pour mieux comprendre leur structure, ou préparer des exemples de code bien formatés pour des tutoriels, de la documentation ou du matériel éducatif, montrant clairement les meilleures pratiques HTML."
          },
          {
            title: "Nettoyage de la sortie des systèmes de gestion de contenu (CMS)",
            description: "Nettoyer et formater le code HTML généré par les éditeurs WYSIWYG dans les CMS, qui produisent souvent un balisage incohérent ou excessivement verbeux nécessitant une optimisation."
          },
          {
            title: "Maintenance du code legacy",
            description: "Standardiser le format du vieux code HTML pour le rendre plus compatible avec les pratiques de développement modernes et plus facile à maintenir pour les nouveaux membres de l'équipe non familiers avec le style de codage original."
          },
          {
            title: "Développement de modèles d'e-mail",
            description: "Formater les modèles HTML d'e-mails avec une indentation et une structure appropriées, tout en conservant la capacité de les minifier pour la production, équilibrant le besoin de code maintenable avec les limites de taille pour la livraison des e-mails."
          }
        ]
      },
      guide: {
        title: "Comment utiliser l'outil de formatage HTML",
        intro: "Suivez ces étapes simples pour formater efficacement votre code HTML et obtenir des résultats optimaux :",
        steps: [
          {
            title: "Sélectionnez le mode de formatage",
            description: "Choisissez \"Embellir\" pour rendre votre HTML plus lisible avec une indentation et un espacement appropriés, ou \"Minifier\" pour réduire la taille du fichier en supprimant les espaces et caractères inutiles. Sélectionnez le mode correspondant à vos besoins actuels - utilisez l'embellissement pour le développement et l'édition, et la minification pour la production et le déploiement."
          },
          {
            title: "Configurez les options de formatage",
            description: "Définissez vos options de formatage préférées comme la taille de l'indentation (2 espaces, 4 espaces ou tabulation), si vous souhaitez conserver les commentaires, maintenir les sauts de ligne et d'autres préférences spécifiques au formatage HTML. Pour un formatage avancé, développez la section \"Options avancées\" pour configurer la longueur des lignes et le nombre maximum de sauts de ligne consécutifs."
          },
          {
            title: "Saisissez votre code HTML",
            description: "Collez ou saisissez le code HTML dans la zone de saisie. Vous pouvez également charger des exemples HTML en cliquant sur le menu déroulant \"Exemples\" pour voir comment le formateur traite différents types de structures HTML. Pour les grands projets, envisagez de formater séparément les sections si elles ont des exigences de formatage différentes."
          },
          {
            title: "Formatez le HTML",
            description: "Cliquez sur le bouton \"Formatter HTML\" ou \"Minifier\" (selon le mode sélectionné) pour traiter votre code. L'outil appliquera immédiatement les règles de formatage choisies et affichera le résultat dans la zone de sortie ci-dessous. Les statistiques en bas montreront les changements dans le nombre de caractères et de lignes."
          },
          {
            title: "Vérifiez le résultat formaté",
            description: "Examinez le HTML formaté dans la zone de résultats pour vous assurer qu'il correspond à vos attentes. Les statistiques sur le nombre de caractères et de lignes vous aideront à comprendre comment le formatage affecte votre code. Pour le code minifié, vous verrez également de combien la taille du fichier a été réduite, en pourcentage."
          },
          {
            title: "Copiez ou téléchargez le résultat",
            description: "Utilisez le bouton \"Copier\" pour copier le HTML formaté dans le presse-papiers, que vous pourrez coller dans votre environnement de développement, système de gestion de contenu ou toute autre application nécessitant du code formaté."
          },
          {
            title: "Ajustez les paramètres si nécessaire",
            description: "Si le résultat ne correspond pas tout à fait à vos attentes, ajustez les options de formatage et réessayez. Différentes structures HTML peuvent bénéficier de différents paramètres de formatage, surtout lorsqu'il s'agit d'éléments imbriqués complexes ou de composants HTML spéciaux."
          }
        ]
      },
      tips: {
        title: "Astuces avancées pour le formatage HTML",
        intro: "Tirez le meilleur parti de l'outil de formatage HTML avec ces techniques professionnelles :",
        items: [
          "Utilisez du HTML embelli pendant le développement et du HTML minifié en production pour un équilibre optimal entre lisibilité et performance",
          "Pour le HTML contenant du JavaScript ou CSS intégré, envisagez d'extraire d'abord ces éléments dans des fichiers séparés pour de meilleurs résultats",
          "Pour les grands documents HTML, augmentez l'option 'Longueur de ligne' pour éviter un excès de sauts de ligne dans la sortie formatée",
          "Utilisez l'option 'Conserver les sauts de ligne' pour maintenir un espacement intentionnel entre les sections logiques du HTML",
          "Soyez prudent lors de la minification de HTML généré par des frameworks (React, Vue ou Angular) car cela pourrait affecter les attributs de données et la syntaxe de liaison",
          "Formatez régulièrement votre HTML pendant le développement plutôt qu'à la fin du projet pour identifier rapidement les problèmes structurels",
          "Si vous devez préserver un formatage spécifique pour certaines sections, envisagez d'ajouter des commentaires que vous pourrez restaurer après le formatage",
          "Pour les modèles d'e-mails HTML, testez le code formaté dans différents clients de messagerie car ils ont des capacités de rendu HTML différentes",
          "Utilisez des sauts de ligne pour les attributs des éléments HTML complexes pour améliorer la lisibilité tout en maintenant une structure HTML valide",
          "Avec les langages de template (Handlebars ou EJS), formatez d'abord le HTML puis réintégrez soigneusement les balises de template"
        ]
      },
      faq: {
        title: "FAQ sur le formatage HTML",
        items: [
          {
            question: "Quelle est la différence entre l'embellissement et la minification HTML ?",
            answer: "L'embellissement HTML restructure le code avec une indentation, un espacement et des sauts de ligne appropriés pour améliorer la lisibilité et la maintenabilité humaine. Il rend le HTML complexe plus facile à comprendre, éditer et déboguer. La minification fait l'inverse - elle supprime tous les caractères inutiles (espaces, commentaires, etc.) pour réduire la taille du fichier sans changer la fonctionnalité, optimisant le HTML pour le traitement machine et un chargement plus rapide. L'embellissement est utilisé en développement, la minification en production."
          },
          {
            question: "Le formatage HTML peut-il casser les fonctionnalités de mon site ?",
            answer: "Dans la plupart des cas, un formatage HTML correct préserve la fonctionnalité car il ne change que les espaces et l'indentation, pas les éléments ou attributs HTML réels. Cependant, il y a des exceptions : le formatage peut affecter les éléments sensibles aux espaces (comme <pre> ou <code>), le JavaScript inline sans point-virgule ou certains attributs complexes. Testez toujours le HTML formaté, surtout en minification, pour vous assurer que tout fonctionne comme prévu."
          },
          {
            question: "Comment le formatage HTML améliore-t-il le SEO et les performances du site ?",
            answer: "Le formatage HTML influence le SEO et les performances de plusieurs manières : le HTML minifié réduit la taille des fichiers, ce qui accélère le chargement des pages - un facteur clé dans le classement des moteurs de recherche. Un code HTML propre et bien structuré permet aux robots d'exploration de mieux analyser et comprendre la hiérarchie de votre contenu. Le code correctement formaté est aussi plus facile à maintenir et à mettre à jour pour le SEO. Cependant, le formatage seul ne suffit pas ; vous avez besoin d'une stratégie SEO complète et d'optimisations techniques."
          },
          {
            question: "Le formateur HTML peut-il gérer des frameworks complexes ou des langages de template ?",
            answer: "Les formateurs HTML fonctionnent mieux avec du HTML standard. Lors du formatage de HTML contenant une syntaxe spécifique à un framework (comme les directives Angular, le JSX React ou les balises de template comme {{ handlebars }}), vous pourriez rencontrer des problèmes car le formateur peut ne pas les reconnaître comme des constructions HTML valides. Pour les frameworks complexes, envisagez d'utiliser des formateurs spécifiques au framework ou de ne formater que les parties HTML pures. Alternativement, remplacez temporairement la syntaxe spéciale par des espaces réservés avant le formatage, puis restaurez-la."
          },
          {
            question: "Le formatage HTML affecte-t-il le CSS et JavaScript inline ?",
            answer: "Oui, le formatage HTML peut affecter le CSS et JavaScript inline. Lors de l'embellissement, le formateur peut ajouter une indentation à ces sections, potentiellement changer leur structure. Lors de la minification, les commentaires et espaces inutiles dans les balises <style> et <script> peuvent être supprimés. Pour les meilleurs résultats avec des scripts ou styles inline complexes : placez les scripts JavaScript critiques dans des fichiers externes, utilisez des sections CDATA pour le contenu des scripts qui ne doit pas être modifié, ou formatez manuellement ces sections avant de les insérer dans le HTML."
          },
          {
            question: "Combien la minification peut-elle réduire la taille d'un fichier HTML ?",
            answer: "La minification HTML réduit généralement la taille des fichiers de 10 à 25%, selon le formatage original, la quantité de commentaires et la complexité du HTML. Le code avec beaucoup de commentaires et un espacement généreux verra une réduction plus importante. Par exemple, un fichier HTML de 100KB peut être réduit à 75-90KB après minification. Bien que cela semble modeste comparé à la minification CSS ou JavaScript (qui peut atteindre 50-70% de réduction), chaque kilo-octet compte pour les performances, surtout pour les utilisateurs mobiles ou avec des connexions lentes."
          },
          {
            question: "Comment conserver les commentaires lors du formatage HTML ?",
            description: "Pour conserver les commentaires lors du formatage HTML, décochez l'option 'Supprimer les commentaires' (ou assurez-vous que 'Conserver les commentaires' est coché, selon l'interface). L'embellisseur gardera vos commentaires HTML tout en formatant le code environnant. Pour la minification, les commentaires sont généralement supprimés par défaut pour minimiser la taille, car ils ne sont pas nécessaires au fonctionnement. Si vous devez conserver des commentaires spécifiques (comme des informations de licence ou des notes importantes) pendant la minification, envisagez d'utiliser le mode embellissement ou de traiter ces sections séparément."
          }
        ]
      },
      bestPractices: {
        title: "Meilleures pratiques pour le formatage du code HTML",
        intro: "Suivez ces recommandations professionnelles pour maintenir un code HTML de haute qualité et bien formaté :",
        items: [
          "Établissez des standards de formatage HTML cohérents pour votre équipe ou projet, garantissant une uniformité du code",
          "Utilisez des éléments HTML sémantiques pour améliorer la lisibilité du code et le référencement",
          "Maintenez une imbrication appropriée des éléments HTML, créant une structure logique et évitant les problèmes de rendu",
          "Appliquez une indentation cohérente dans tout le document HTML, montrant clairement la hiérarchie des éléments",
          "Maintenez une longueur de ligne raisonnable (80-120 caractères) pour améliorer la lisibilité dans les éditeurs de code et les différences de versionnage",
          "Groupez les éléments HTML liés avec un espacement approprié, créant des sections de contenu logiques",
          "Formatez les attributs HTML de manière cohérente, mettant plusieurs attributs sur des lignes séparées pour les éléments complexes ou en ligne pour les éléments simples",
          "Incluez des commentaires significatifs pour les sections complexes, mais évitez les commentaires excessifs sur le code évident",
          "Utilisez des minuscules pour tous les noms d'éléments, attributs et valeurs HTML pour la cohérence et la conformité HTML5",
          "Supprimez le code redondant, les éléments vides et les attributs inutiles avant le formatage pour réduire l'encombrement",
          "Validez votre HTML selon les standards W3C avant et après le formatage pour assurer la conformité",
          "Formatez régulièrement votre code HTML tout au long du développement, pas seulement à la fin du projet"
        ]
      }
    }
  }