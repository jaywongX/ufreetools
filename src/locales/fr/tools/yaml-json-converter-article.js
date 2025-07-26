export default {
  title: "Convertisseur YAML-JSON : Simplifiez la conversion de formats de données",
  features: {
    title: "Comprendre les formats YAML et JSON",
    description: "Le <strong>Convertisseur YAML-JSON</strong> est un outil spécialement conçu pour convertir des données entre deux <strong>formats de sérialisation populaires</strong> : <strong>YAML</strong> (YAML Ain't Markup Language) et <strong>JSON</strong> (JavaScript Object Notation). Ce <strong>convertisseur bidirectionnel</strong> permet une conversion transparente entre ces formats tout en préservant la structure et l'intégrité des données.<br><br>Notre <strong>convertisseur YAML vers JSON</strong> prend en charge des fonctionnalités avancées comme l'indentation personnalisée, le tri des clés et des options de style de flux pour la sortie YAML. Pour les utilisateurs effectuant des conversions <strong>JSON vers YAML</strong>, l'outil offre des options pour formater joliment la sortie ou maintenir une représentation compacte. Que vous travailliez avec des paires clé-valeur simples ou des structures imbriquées complexes, ce <strong>convertisseur de format de données</strong> gère efficacement la conversion tout en préservant les relations hiérarchiques dans les données.",
    useCases: {
      title: "Cas d'utilisation courants pour la conversion YAML-JSON",
      items: [
        "Les ingénieurs DevOps convertissant entre fichiers de configuration pour différents pipelines CI/CD nécessitant YAML (GitHub Actions, GitLab CI) ou JSON (CircleCI, AWS CodeBuild)",
        "Les développeurs back-end traitant des API acceptant des charges utiles JSON tout en maintenant des fichiers de configuration YAML plus lisibles",
        "Les architectes cloud convertissant des modèles AWS CloudFormation (JSON) en format YAML plus facile à maintenir, ou vice versa",
        "Les scientifiques des données convertissant entre des définitions de structures de données dans des environnements de notebook préférant JSON et des fichiers de configuration YAML",
        "Les rédacteurs techniques devant présenter les mêmes structures de données en formats YAML et JSON pour différents publics",
        "Les développeurs front-end utilisant des gestionnaires de paquets et outils de build avec différents formats de configuration (package.json vs docker-compose.yml)"
      ]
    }
  },
  faq: {
    title: "Questions fréquentes sur la conversion YAML-JSON",
    items: [
      {
        question: "Quelle est la principale différence entre YAML et JSON ?",
        answer: "YAML et JSON sont tous deux des formats de sérialisation de données, mais ils diffèrent significativement dans leur syntaxe et fonctionnalités. JSON utilise une syntaxe stricte avec des accolades, des guillemets autour des clés et des virgules explicites entre éléments. YAML est plus lisible pour les humains, utilise des espaces significatifs, ne nécessite pas de guillemets ou crochets et supporte les commentaires. JSON est plus compact et largement utilisé pour l'échange de données dans les applications web, tandis que YAML offre une meilleure lisibilité, supporte des structures de données complexes et est souvent utilisé pour les fichiers de configuration. Notre convertisseur YAML-JSON gère automatiquement ces différences syntaxiques pour assurer une conversion précise entre formats."
      },
      {
        question: "Le convertisseur peut-il gérer des structures imbriquées complexes ?",
        answer: "Oui, notre convertisseur YAML-JSON prend pleinement en charge les structures de données imbriquées complexes, y compris les objets profondément imbriqués, les tableaux et les hiérarchies mixtes. Quel que soit le sens de conversion, l'outil préserve les relations hiérarchiques, assurant que les mappings imbriqués, séquences et scalaires YAML correspondent correctement aux objets, tableaux et valeurs primitives JSON. Cela le rend adapté aux fichiers de configuration complexes, schémas API et modèles de données avec imbrications multiples et divers types de données."
      },
      {
        question: "Le convertisseur prend-il en charge les fonctionnalités avancées de YAML ?",
        answer: "Le convertisseur YAML-JSON supporte de nombreuses fonctionnalités avancées de YAML là où JSON a des limitations. Lors de la conversion de YAML vers JSON, des fonctionnalités comme les commentaires et ancres (références) sont traitées correctement - les commentaires sont supprimés (car JSON ne les supporte pas) et les références sont résolues en leurs valeurs réelles. Lors de la conversion de JSON vers YAML, vous pouvez choisir entre un style bloc (plus lisible) ou flux (plus compact) pour la sortie YAML. Le convertisseur préserve l'intégrité des données tout en s'adaptant aux capacités de chaque format."
      },
      {
        question: "Comment le convertisseur gère-t-il les différents types de données ?",
        answer: "Le convertisseur YAML-JSON préserve les types de données entre formats compatibles lors de la conversion. Nombres, chaînes, booléens, valeurs nulles, tableaux et objets sont convertis avec précision dans les deux directions. Les types de données supplémentaires de YAML comme les dates et données binaires sont traités spécialement - les dates sont généralement converties en format ISO string dans JSON, les données binaires en chaînes base64. La fonctionnalité de typage dynamique du convertisseur assure que les valeurs numériques sont correctement identifiées quand approprié et non traitées comme chaînes."
      },
      {
        question: "Y a-t-il une limite de taille pour les fichiers convertis ?",
        answer: "Comme le convertisseur YAML-JSON fonctionne entièrement dans votre navigateur, la limite pratique de taille dépend de la mémoire et capacité de traitement de votre appareil. Pour des performances optimales, nous recommandons des fichiers de moins de 5MB, bien que les navigateurs modernes puissent généralement gérer des fichiers plus grands. Pour des fichiers très volumineux, vous pourriez remarquer un délai de traitement. Si vous travaillez avec des jeux de données extrêmement larges, envisagez de les diviser en morceaux plus petits ou de les traiter progressivement pour de meilleures performances."
      }
    ]
  },
  guide: {
    title: "Guide étape par étape pour utiliser le convertisseur YAML-JSON",
    steps: [
      "Utilisez le bouton bascule en haut de l'outil pour choisir votre direction de conversion : 'YAML vers JSON' convertit la syntaxe YAML en format JSON, ou 'JSON vers YAML' pour le processus inverse",
      "Configurez vos préférences de format de sortie dans la section paramètres : pour une sortie JSON, vous pouvez choisir la taille d'indentation et options de formatage ; pour une sortie YAML, vous pouvez choisir entre style bloc ou flux, et activer le tri des clés",
      "Entrez vos données source dans le panneau d'entrée gauche, ou utilisez le bouton 'Coller' pour coller du contenu depuis votre presse-papiers (vous pouvez aussi utiliser les boutons d'exemple 'Simple', 'Imbriqué' ou 'Complexe' pour charger des données d'exemple et voir comment fonctionne le convertisseur)",
      "Le convertisseur traite automatiquement au fur et à mesure que vous tapez, affichant en temps réel la sortie convertie dans le panneau droit",
      "Examinez le résultat de conversion et ajustez si nécessaire votre entrée ou paramètres de formatage pour obtenir le format de sortie souhaité",
      "Cliquez sur le bouton 'Copier le résultat' pour copier la sortie convertie dans votre presse-papiers pour utilisation dans d'autres applications",
      "Ou utilisez le bouton 'Télécharger' pour sauvegarder la sortie convertie dans un fichier sur votre appareil pour utilisation ultérieure ou intégration dans vos projets"
    ]
  },
  conclusion: "Le convertisseur YAML-JSON offre un moyen transparent de convertir des données entre ces deux formats de sérialisation populaires sans perte d'intégrité structurelle ou de précision des données. Que vous soyez un développeur travaillant avec des fichiers de configuration, un ingénieur DevOps gérant de l'infrastructure-as-code, ou un professionnel des données manipulant différents formats d'échange, cet outil simplifie le processus de conversion grâce à son interface intuitive et ses fonctionnalités puissantes. En supportant les deux directions de conversion et offrant des options de sortie personnalisables, il s'adapte à divers cas d'utilisation tout en vous faisant gagner du temps et réduisant les risques d'erreurs de conversion manuelle."
}
