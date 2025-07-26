export default {
    name: 'Générateur de formules LaTeX',
    description: 'Génération et export en temps réel de formules mathématiques LaTeX',

    // Textes d'interface
    input: 'Saisir le code LaTeX',

    output: 'Aperçu du résultat',
    renderButton: 'Rendu de la formule',
    exportButton: 'Exporter en image',
    copyButton: 'Copier le code LaTeX',

    // Paramètres
    settings: {
        title: 'Paramètres',
        fontSize: 'Taille de police',
        textColor: 'Couleur du texte',
        backgroundColor: 'Couleur de fond',
        displayMode: 'Mode d\'affichage',
        displayModeInline: 'Mode en ligne',
        displayModeBlock: 'Mode bloc'
    },

    // Exemples
    examples: {
        title: 'Exemples',
        basic: 'Formule de base',
        fraction: 'Fraction',
        superscript: 'Exposant/Indice',
        integral: 'Intégrale',
        matrix: 'Matrice',
        more: 'Plus d\'exemples'
    },

    // Messages
    copied: 'Copié dans le presse-papiers',

    errorTitle: 'Erreur de rendu',
    errorMessage: 'Veuillez vérifier votre syntaxe LaTeX'
};