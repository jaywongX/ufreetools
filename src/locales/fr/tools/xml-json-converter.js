export default {
    name: 'Convertisseur XML/JSON',
    title: 'Conversion XML ↔ JSON',
    description: 'Conversion bidirectionnelle entre les formats XML et JSON avec options avancées et paramètres personnalisés',
    
    conversion: {
      direction: 'Direction de conversion',
      xmlToJson: 'XML vers JSON',
      jsonToXml: 'JSON vers XML'
    },
    
    options: {
      title: 'Options de conversion',
      show: 'Afficher options',
      hide: 'Masquer options',
      
      xmlToJson: {
        ignoreAttributes: 'Ignorer attributs',
        ignoreAttributesHint: 'Désactiver cette option pour conserver les informations d\'attribut XML dans le JSON',
        parseAttributeValue: 'Parser les valeurs d\'attribut',
        parseAttributeValueHint: 'Convertir les nombres, booléens etc. dans les attributs en leurs types réels plutôt qu\'en chaînes',
        ignoreDeclaration: 'Ignorer déclaration XML',
        ignoreDeclarationHint: 'Ignorer les informations de déclaration comme <?xml version="1.0"?>',
        parseTagValue: 'Parser les valeurs de balise',
        parseTagValueHint: 'Convertir les nombres, booléens etc. dans le contenu des balises en leurs types réels plutôt qu\'en chaînes',
        trimValues: 'Supprimer les espaces autour des valeurs',
        attributePrefix: 'Préfixe d\'attribut',
        attributePrefixPlaceholder: 'Ex: @, _, attr_',
        attributePrefixHint: 'Préfixe pour représenter les attributs XML dans JSON, par défaut @'
      },
      
      jsonToXml: {
        format: 'Formater XML',
        formatHint: 'Activer l\'indentation et sauts de ligne pour un XML plus lisible',
        indentBy: 'Ajouter indentation (2 espaces)',
        addDeclaration: 'Ajouter déclaration XML',
        addDeclarationHint: 'Ajouter <?xml version="1.0" encoding="UTF-8"?> au début du XML',
        rootName: 'Nom élément racine (optionnel)',
        rootNamePlaceholder: 'Ex: root, data, xml',
        rootNameHint: 'Nom d\'élément racine à utiliser quand le JSON a plusieurs clés au niveau supérieur',
        attributePrefix: 'Reconnaissance préfixe attribut',
        attributePrefixPlaceholder: 'Ex: @, _, attr_',
        attributePrefixHint: 'Préfixe utilisé pour identifier les attributs XML dans JSON, par défaut @'
      }
    },
    
    buttons: {
      convert: 'Convertir',
      swap: 'Échanger contenu',
      clear: 'Effacer',
      loadExample: 'Charger exemple'
    },
    
    input: {
      xmlInput: 'Entrée XML',
      jsonInput: 'Entrée JSON',
      placeholder: {
        xml: 'Entrez XML...',
        json: 'Entrez JSON...'
      }
    },
    
    output: {
      xmlResult: 'Résultat XML',
      jsonResult: 'Résultat JSON',
      copy: 'Copier'
    },
    
    stats: {
      title: 'Statistiques conversion',
      inputSize: 'Taille entrée',
      outputSize: 'Taille sortie',
      sizeChange: 'Changement taille',
      conversionTime: 'Temps conversion'
    },
    
    help: {
      title: 'Aide',
      show: 'Afficher aide',
      hide: 'Masquer aide',
      about: {
        title: 'Explication formats XML et JSON',
        content: 'XML (eXtensible Markup Language) est un langage de balisage extensible largement utilisé pour les fichiers de configuration, échange de données et services web. JSON (JavaScript Object Notation) est un format d\'échange de données léger, facile à lire et écrire pour les humains, et facile à analyser et générer pour les machines.'
      },
      xmlToJson: {
        title: 'Remarques conversion XML vers JSON',
        items: [
          'Les attributs XML sont convertis par défaut en clés commençant par @ dans JSON',
          'Le contenu texte XML est représenté par la clé #text par défaut dans JSON',
          'Activer "Parser les valeurs de balise" convertit nombres, booléens etc. en leurs types JSON réels',
          'XML peut avoir plusieurs balises du même nom, converties automatiquement en tableau dans JSON'
        ]
      },
      jsonToXml: {
        title: 'Remarques conversion JSON vers XML',
        items: [
          'Les clés JSON commençant par @ sont considérées comme attributs XML par défaut',
          'Les tableaux JSON créent plusieurs balises du même nom dans XML',
          'Les objets JSON imbriqués complexes génèrent des structures XML hiérarchisées',
          'JSON avec plusieurs clés au niveau supérieur sans nom racine spécifié génère plusieurs éléments racine XML'
        ]
      }
    },
    
    errors: {
      xmlParse: 'Erreur analyse XML : {0}',
      jsonParse: 'Erreur analyse JSON : {0}',
      xmlGeneration: 'Erreur génération XML : {0}',
      emptyObject: 'Objet JSON vide ou invalide',
      conversion: 'Erreur conversion : {0}'
    },
    
    alerts: {
      copied: 'Copié dans presse-papiers'
    },
    
    article: {
      title: "Convertisseur XML/JSON : Convertissez vos structures de données sans effort",
      features: {
        title: "Comprendre la conversion de données XML et JSON",
        description: "Le <strong>Convertisseur XML/JSON</strong> est un outil puissant conçu pour faciliter la conversion entre les deux <strong>formats d'échange de données</strong> les plus utilisés dans le développement web et l'intégration de systèmes. Ce <strong>convertisseur bidirectionnel</strong> vous permet d'effectuer des conversions <strong>XML vers JSON</strong> et <strong>JSON vers XML</strong> tout en préservant l'intégrité des structures de données.<br><br>Notre <strong>parseur XML/JSON</strong> offre des options étendues de personnalisation pour gérer les attributs, déclarations et structures de données imbriquées. Pour la <strong>conversion XML vers JSON</strong>, vous pouvez configurer le préfixe des attributs, contrôler comment les valeurs des balises sont parsées et déterminer le traitement des espaces. Pour la <strong>conversion JSON vers XML</strong>, vous pouvez spécifier des préférences de formatage, ajouter des déclarations XML et définir un nom d'élément racine pour une sortie bien formée. Ce <strong>convertisseur de format de données</strong> assure une représentation précise de données hiérarchiques complexes entre les deux formats.",
        useCases: {
          title: "Cas d'utilisation courants pour la conversion XML-JSON",
          items: [
            "Développeurs d'API convertissant entre services web SOAP basés sur XML et API REST basées sur JSON pour assurer la compatibilité entre différents points d'intégration",
            "Développeurs front-end convertissant des fichiers de configuration XML en JSON pour une utilisation plus aisée dans les applications JavaScript et frameworks modernes",
            "Ingénieurs back-end travaillant avec des systèmes legacy utilisant XML tout en implémentant de nouveaux services nécessitant le format JSON",
            "Experts en intégration de données mappant différents formats système dans des processus ETL (Extract, Transform, Load)",
            "Applications de web scraping extrayant des données XML (comme des flux RSS) et devant les convertir en JSON pour stockage ou analyse",
            "Développeurs d'applications mobiles consommant des données XML depuis des systèmes d'entreprise et les convertissant en JSON pour un traitement client plus efficace"
          ]
        }
      },
      faq: {
        title: "Questions fréquentes sur la conversion XML-JSON",
        items: [
          {
            question: "Le convertisseur peut-il gérer des structures imbriquées complexes dans les deux formats ?",
            answer: "Oui, notre parseur XML/JSON prend pleinement en charge les structures imbriquées complexes dans les deux directions. Le convertisseur maintient avec précision les relations hiérarchiques, gérant les tableaux, objets et contenus mixtes. Lors de la conversion XML vers JSON, les éléments imbriqués deviennent des objets imbriqués et les éléments répétés sont automatiquement convertis en tableaux. Lors de la conversion JSON vers XML, les objets imbriqués sont préservés comme éléments enfants et les tableaux sont représentés comme éléments répétés avec le même nom de balise. Cette préservation structurelle est cruciale pour travailler avec des modèles de données complexes et fichiers de configuration dans les deux formats."
          },
          {
            question: "Comment l'outil gère-t-il les caractères spéciaux et l'encodage ?",
            answer: "Le convertisseur XML/JSON gère automatiquement les problèmes de caractères spéciaux et d'encodage dans les deux directions. Pour le XML, il décode correctement les entités XML (comme &amp; pour &, &lt; pour <) et traite les sections CDATA pour préserver la mise en forme. Lors de la conversion JSON vers XML, l'outil encode les caractères spéciaux en entités XML appropriées pour garantir une sortie XML valide. Le convertisseur maintient la compatibilité UTF-8 tout au long du processus, gérant correctement les caractères internationaux, symboles et emojis dans les deux formats, le rendant adapté aux contenus multilingues et applications globales."
          },
          {
            question: "Que deviennent les commentaires XML lors de la conversion en JSON ?",
            answer: "Comme JSON ne supporte pas nativement les commentaires, les commentaires XML sont généralement supprimés lors de la conversion XML vers JSON. Cependant, si vous devez conserver ces informations, notre convertisseur XML/JSON offre un paramètre optionnel pour préserver les commentaires en les convertissant en attributs JSON spéciaux (comme des champs \"__comment\"). Cela offre une flexibilité pour les scénarios nécessitant de conserver des commentaires contenant une documentation importante ou des instructions de traitement, même lors de la conversion entre formats. Vous pouvez personnaliser ce comportement via le panneau d'options avancées de l'interface du convertisseur."
          },
          {
            question: "Comment les namespaces XML sont-ils gérés pendant la conversion ?",
            answer: "Le convertisseur XML/JSON propose des options pour gérer les namespaces XML pendant la conversion. Par défaut, lors de la conversion en JSON, les namespaces et leurs préfixes sont inclus dans les noms d'éléments. Par exemple, '<ns:element xmlns:ns=\"namespace\">value</ns:element>' sera converti en JSON en conservant le préfixe de namespace. Vous pouvez personnaliser ce comportement via les options du convertisseur, choisissant d'ignorer complètement les namespaces, de les conserver dans un format spécifique ou de les garder comme attributs séparés dans la structure JSON générée, selon vos besoins d'intégration spécifiques."
          }
        ]
      },
      guide: {
        title: "Guide étape par étape pour utiliser le convertisseur XML/JSON",
        steps: [
          "Utilisez les boutons radio en haut de l'outil pour sélectionner la direction de conversion souhaitée : choisissez 'XML vers JSON' pour convertir du balisage XML en format JSON, ou 'JSON vers XML' pour le processus inverse",
          "Cliquez sur 'Afficher options' pour accéder aux paramètres avancés et personnaliser le processus de conversion : pour XML vers JSON, configurez le traitement des attributs et options d'analyse ; pour JSON vers XML, définissez les préférences de formatage et options de déclaration XML",
          "Entrez vos données source dans le champ d'entrée gauche du convertisseur, ou utilisez le bouton 'Charger exemple' pour voir comment l'outil traite des données prédéfinies",
          "Cliquez sur le bouton 'Convertir' pour traiter vos données - le convertisseur transformera votre entrée et affichera le résultat dans le champ de sortie droit",
          "Examinez la sortie convertie et ajustez si nécessaire vos paramètres de conversion pour affiner le résultat selon vos besoins spécifiques",
          "Cliquez sur le bouton 'Copier' à côté du champ de sortie pour copier le résultat converti dans votre presse-papiers pour utilisation dans vos applications ou documents",
          "Vous pouvez aussi utiliser le bouton 'Échanger contenu' pour inverser le processus, définissant la sortie actuelle comme entrée pour effectuer une conversion dans la direction opposée"
        ]
      },
      conclusion: "Le convertisseur XML/JSON fournit une solution robuste pour convertir des données entre ces deux formats fondamentaux de l'informatique moderne. Que vous intégriez différents systèmes, modernisiez des applications legacy ou optimisiez des données pour un traitement client, cet outil vous évite les complexités et erreurs potentielles des conversions manuelles. Grâce à ses options complètes pour gérer attributs, formatage et éléments structurels, vous pouvez garantir que vos données conservent leur intégrité et signification lorsqu'elles franchissent les frontières entre formats. En simplifiant la conversion entre XML et JSON, ce convertisseur aide à combler les écarts entre différentes technologies et standards, permettant des systèmes logiciels plus flexibles et interopérables."
    }
  }