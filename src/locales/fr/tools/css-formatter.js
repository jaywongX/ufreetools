export default {
    name: 'Formateur CSS',
    description: 'Formater et embellir le code CSS pour améliorer la lisibilité',
    options: {
      indentSize: 'Taille de l\'indentation',
      indentWithTabs: 'Utiliser des tabulations pour l\'indentation',
      convertQuotes: 'Convertir les guillemets',
      sortSelectors: 'Trier les sélecteurs',
      sortProperties: 'Trier les propriétés',
      compressColors: 'Compresser les valeurs de couleur',
      expandShorthand: 'Développer les propriétés raccourcies'
    },
    actions: {
      format: 'Formater le CSS',
      minify: 'Minifier',
      clear: 'Effacer',
      copy: 'Copier',
      download: 'Télécharger',
      upload: 'Téléverser un fichier'
    },
    messages: {
      copied: 'Copié dans le presse-papiers !',
      formatSuccess: 'Formatage CSS réussi',
      formatError: 'Erreur lors du formatage du CSS',
      invalidCss: 'Syntaxe CSS invalide'
    }
  }