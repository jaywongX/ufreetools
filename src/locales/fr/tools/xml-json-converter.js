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
  }
};