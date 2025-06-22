export default {
    name: 'Formateur SQL',
    description: 'Outil en ligne de formatage et validation SQL, supportant la compression et la mise en forme',
    options: {
      language: 'Dialecte SQL',
      indent: 'Type d\'indentation',
      spaceCount: 'Nombre d\'espaces',
      keywordCase: 'Casse des mots-clés',
      uppercase: 'Mots-clés en majuscules',
      lineBreak: 'Style de saut de ligne',
      tabSize: 'Taille des tabulations'
    },
    languages: {
      standard: 'SQL standard',
      mysql: 'MySQL',
      postgresql: 'PostgreSQL',
      sqlite: 'SQLite',
      tsql: 'T-SQL (SQL Server)',
      oracle: 'Oracle PL/SQL'
    },
    indentOptions: {
      spaces: 'Espaces',
      tabs: 'Tabulations'
    },
    spaceOptions: {
      two: '2 espaces',
      four: '4 espaces'
    },
    caseOptions: {
      preserve: 'Conserver la casse originale',
      upper: 'Majuscules',
      lower: 'Minuscules'
    },
    actions: {
      format: 'Formatter SQL',
      minify: 'Compresser SQL',
      clear: 'Effacer',
      copy: 'Copier',
      download: 'Télécharger',
    },
    messages: {
      copied: 'Copié dans le presse-papiers !',
      formatSuccess: 'Formatage SQL réussi',
      formatError: 'Erreur lors du formatage SQL'
    },
    placeholders: {
      input: 'Entrez votre requête SQL ici...',
      output: 'Le SQL formaté apparaîtra ici...'
    },
    output: 'Résultat formaté',
    tips: {
      title: 'Conseils d\'utilisation',
      dialect: 'Sélectionnez le dialecte SQL approprié pour un formatage précis.',
      formatting: 'Personnalisez le style d\'indentation et le nombre d\'espaces pour correspondre à votre style de codage préféré.',
      keywords: 'Choisissez de conserver, mettre en majuscules ou minuscules les mots-clés SQL.',
      copy: 'Utilisez le bouton copier pour dupliquer rapidement le SQL formaté dans le presse-papiers.'
    }
  }