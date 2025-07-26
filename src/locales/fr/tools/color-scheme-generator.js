export default {
    name: 'Générateur de Palettes de Couleurs',
    description: 'Crée des schémas de couleurs harmonieux basés sur la théorie des couleurs, aidant les designers à concevoir rapidement des nuanciers coordonnés',

    baseColor: {
        title: 'Couleur de base',
        picker: 'Sélecteur de couleur',
        hex: 'Hexadécimal',
        rgb: 'RGB',
        hsl: 'HSL',
        random: 'Couleur aléatoire',
        recent: 'Couleurs récentes',
        hint: 'Cliquez sur le bloc ou entrez une valeur hexadécimale',
    },

    schemeTypes: {
        title: 'Théorie des couleurs',
        monochromatic: 'Monochromatique',
        analogous: 'Analogues',
        complementary: 'Complémentaires',
        splitComplementary: 'Complémentaires scindées',
        triadic: 'Triadique',
        tetradic: 'Tétradique',
        square: 'Carré',
        compound: 'Composé',
        shades: 'Nuances',
        custom: 'Personnalisé',
    },

    options: {
        colorCount: 'Nombre de couleurs',
        saturationRange: 'Plage de saturation',
        brightnessRange: 'Plage de luminosité',
        includeBaseColor: 'Inclure la couleur de base',
        lockBaseColor: 'Verrouiller la couleur de base',
        colorSpace: 'Espace colorimétrique',
        sortBy: 'Trier par',
        colorBlindSafe: 'Sécurité daltonien',
        contrastRatio: 'Contraste minimum'
    },

    colorSpaces: {
        rgb: 'RGB',
        hsl: 'HSL',
        lab: 'LAB',
        hsv: 'HSV',
        cmyk: 'CMYK'
    },

    sortOptions: {
        hue: 'Teinte',
        saturation: 'Saturation',
        brightness: 'Luminosité',
        harmony: 'Harmonie',
        none: 'Aucun'
    },

    palettes: {
        title: 'Palettes générées',
        save: 'Sauvegarder la palette',
        copy: 'Copier la palette',
        export: 'Exporter en variables CSS',
        apply: 'Appliquer à l\'aperçu'
    },

    exportFormats: {
        title: 'Formats d\'export',
        css: 'Variables CSS',
        scss: 'Variables SCSS',
        less: 'Variables LESS',
        json: 'JSON',
        svg: 'Nuancier SVG',
        ase: 'Adobe ASE',
        tailwind: 'Configuration Tailwind',
        pdf: 'PDF'
    },

    preview: {
        title: 'Aperçu',
        website: 'Site web',
        mobilApp: 'Application mobile',
        dashboard: 'Tableau de bord',
        card: 'Carte',
        poster: 'Affiche',
        custom: 'Personnalisé',
        mainButton: 'Bouton principal',
        secondButton: 'Bouton secondaire',
        tag: 'Étiquette'
    },

    savedPalettes: {
        title: 'Palettes sauvegardées',
        load: 'Charger',
        delete: 'Supprimer',
        rename: 'Renommer',
        noSavedPalettes: 'Aucune palette sauvegardée',
        saved: 'Palette sauvegardée',
        schemeNameEmpty: 'Nom de palette vide',
    },

    actions: {
        generate: 'Générer le schéma',
        regenerate: 'Regénérer',
        reset: 'Réinitialiser',
        lockColor: 'Verrouiller la couleur',
        unlockColor: 'Déverrouiller la couleur',
        save: 'Sauvegarder la palette',
    },

    messages: {
        paletteSaved: 'Palette sauvegardée avec succès',
        paletteDeleted: 'Palette supprimée',
        copied: 'Copié dans le presse-papiers',
        exported: 'Exportation réussie',
        adjustmentParam: 'Paramètre d\'ajustement',
        schemeName: 'Nom du schéma',
        copyAllColors: 'Toutes les couleurs copiées',
    }
};
