export default {
    name: 'Formateur JavaScript',
    description: 'Outil en ligne de formatage et validation JavaScript, supportant la minification et le beautification',
    options: {
      indent: 'Indentation',
      quotes: 'Style de guillemets',
      semicolons: 'Points-virgules',
      trailingComma: 'Virgule finale'
    },
    actions: {
      format: 'Formater le JavaScript',
      minify: 'Minifier',
      beautify: 'Beautifier',
      clear: 'Effacer',
      copy: 'Copier',
      download: 'Télécharger'
    },
    messages: {
      copied: 'Copié dans le presse-papiers !',
      formatSuccess: 'Formatage JavaScript réussi',
      formatError: 'Erreur lors du formatage du JavaScript'
    }
  }