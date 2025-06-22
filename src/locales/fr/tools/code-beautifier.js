export default {
    name: 'Beautificateur de code',
    description: 'Formate et embellit le code avec coloration syntaxique et indentation',
    languages: {
      title: 'Langages',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      json: 'JSON',
      sql: 'SQL',
      xml: 'XML',
      markdown: 'Markdown',
      php: 'PHP',
      python: 'Python',
      ruby: 'Ruby',
      java: 'Java',
      csharp: 'C#',
      cpp: 'C++',
      typescript: 'TypeScript'
    },
    actions: {
      beautify: 'Beautifier',
      minify: 'Minifier',
      clear: 'Effacer',
      copy: 'Copier',
      download: 'Télécharger',
      upload: 'Téléverser un fichier'
    },
    options: {
      title: 'Options',
      indentSize: 'Taille de l\'indentation',
      indentWith: 'Type d\'indentation',
      spaces: 'Espaces',
      tabs: 'Tabulations',
      lineBreaks: 'Style de saut de ligne',
      quoteStyle: 'Style de guillemets',
      bracketStyle: 'Style de parenthèses',
      preserveNewlines: 'Conserver les sauts de ligne',
      endWithNewline: 'Terminer par un saut de ligne',
      removeComments: 'Supprimer les commentaires',
      wrapLineLength: 'Longueur de ligne',
      lineNumbers: 'Numéros de ligne',
      showLineNumbers: 'Afficher les numéros de ligne',
      wrapLines: 'Retour à la ligne automatique',
      theme: 'Thème',
      autoDetect: 'Détection automatique',
      tryAutoDetect: 'Essayer la détection automatique du langage'
    },
    input: {
      title: 'Entrée',
      placeholder: 'Collez votre code ici...'
    },
    output: {
      title: 'Sortie',
      placeholder: 'Le code beautifié apparaîtra ici...'
    },
    messages: {
      copied: 'Copié dans le presse-papiers !',
      beautifySuccess: 'Code beautifié avec succès',
      minifySuccess: 'Code minifié avec succès',
      beautifyError: 'Erreur lors de la beautification du code',
      minifyError: 'Erreur lors de la minification du code',
      emptyCode: 'Veuillez entrer le code à beautifier',
      fileTooBig: 'Fichier trop volumineux (2MB maximum)',
      invalidFile: 'Type de fichier invalide ou non supporté',
      preview: 'Aperçu',
      HTMLCode: 'Code HTML',
    },
    stats: {
      original: 'Original',
      beautified: 'Beautifié',
      minified: 'Minifié',
      size: 'Taille',
      characters: 'Caractères',
      lines: 'Lignes'
    },
    tips: {
      title: 'Conseils d\'utilisation',
      tip1: 'Sélectionnez le bon langage de programmation pour une meilleure coloration syntaxique',
      tip2: 'Différents thèmes sont disponibles pour s\'adapter au style de votre site',
      tip3: 'Copiez le code HTML généré pour le coller directement dans un éditeur ou site supportant le HTML',
      tip4: 'Le code généré supporte les modes sombre et adaptatif',
      tip5: 'Ajouter des numéros de ligne améliore la lisibilité et facilite les références'
    }
  }