export default {
    name: 'Formatage de code',
    description: 'Formate et embellit du code dans plusieurs langages',
    languages: {
      title: 'Langages',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      typescript: 'TypeScript',
      json: 'JSON',
      sql: 'SQL',
      xml: 'XML',
      markdown: 'Markdown'
    },
    options: {
      title: 'Options',
      indent: 'Indentation',
      tabSize: 'Taille des tabulations',
      insertSpaces: 'Insérer des espaces',
      formatSelection: 'Formater la sélection',
      formatOnType: 'Formater pendant la saisie',
      removeComments: 'Supprimer les commentaires',
      mangle: 'Obfuscation des noms de variables',
      lineBreak: 'Style de saut de ligne'
    },
    actions: {
      beautify: 'Embellir',
      minify: 'Minifier',
      format: 'Formater',
      copy: 'Copier le résultat',
      clear: 'Effacer',
      download: 'Télécharger',
      paste: 'Coller depuis le presse-papiers',
      loadSample: 'Charger un exemple de code'
    },
    messages: {
      formatSuccess: 'Formatage du code réussi',
      formatError: 'Erreur lors du formatage du code',
      copied: 'Copié dans le presse-papiers !',
      languageChangeWarning: 'Changer de langage réinitialisera votre code. Continuer ?'
    },
    errors: {
      emptyCode: 'Veuillez saisir du code à formater',
      invalidJson: 'JSON invalide',
      jsCompressionError: 'Erreur de compression JavaScript'
    },
    input: 'Entrée',
    output: 'Sortie',
    placeholders: {
      input: 'Collez votre code ici...',
      output: 'Le code formaté apparaîtra ici...'
    },
    characters: 'Caractères',
    space: 'Espace',
    spaces: 'Espaces',
    auto: 'Automatique',
    tips: {
      title: 'Conseils d\'utilisation',
      selectLanguage: 'Pour des résultats optimaux, sélectionnez le langage correspondant à votre code.',
      beautifyMinify: 'Utilisez "Embellir" pour améliorer la lisibilité et "Minifier" pour réduire la taille du fichier.',
      customizeOptions: 'Personnalisez les options de formatage avec le panneau de réglages ci-dessous.',
      keyboard: 'Appuyez sur Tab dans l\'éditeur pour insérer une indentation.'
    }
  }