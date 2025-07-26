export default {
    name: 'Convertisseur de casse hexadécimal',
    description: 'Convertit et formate des chaînes hexadécimales entre majuscules et minuscules, avec prise en charge de différents préfixes, séparateurs et options de regroupement',

    input: {
        title: 'Entrée hexadécimale',
        placeholder: 'Entrez une valeur hexadécimale...'
    },

    output: {
        title: 'Résultat converti',
        placeholder: 'Le résultat de conversion apparaîtra ici...'
    },

    prefix: {
        title: 'Préfixe',
        none: 'Aucun',
    },

    format: {
        title: 'Format de casse',
        uppercase: 'Majuscules',
        lowercase: 'Minuscules'
    },

    separator: {
        title: 'Séparateur',
        none: 'Aucun',
        space: 'Espace',
        comma: 'Virgule',
        colon: 'Deux-points',
        semicolon: 'Point-virgule'
    },

    grouping: {
        title: 'Regroupement (octets)',
        none: 'Aucun'
    },

    actions: {
        copy: 'Copier',
        clear: 'Effacer',
        convert: 'Convertir'
    },

    messages: {
        copied: 'Copié dans le presse-papiers',
        copyFailed: 'Échec de la copie',
        invalidHex: 'Valeur hexadécimale invalide'
    },

    examples: {
        title: 'Exemples',
        example1: {
            title: '"Hello World" en hexadécimal',
        },
        example2: {
            title: 'ASCII Hello avec préfixe 0x',
        },
        example3: {
            title: 'DEADBEEF (valeur de débogage courante)',
        },
        example4: {
            title: 'Format d\'adresse MAC',
        }
    },

    tips: {
        title: 'Conseils',
        tip1: 'Les valeurs hexadécimales utilisent les caractères 0-9 et A-F (ou a-f)',
        tip2: 'Différents préfixes sont utilisés dans différents contextes : 0x en programmation, # pour les couleurs, etc.',
        tip3: 'L\'utilisation de regroupements et séparateurs améliore la lisibilité des longues chaînes hexadécimales',
        tip4: 'Les adresses MAC utilisent généralement des séparateurs deux-points et un regroupement par octet'
    }
};
