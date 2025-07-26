export default {
    name: 'Référence des codes d\'état HTTP',
    description: 'Rechercher et comprendre les codes d\'état et messages de réponse HTTP',

    search: {
        title: 'Rechercher un code',
        placeholder: 'Entrez un code ou recherchez par description',
        button: 'Rechercher',
        recent: 'Recherches récentes',
        common: 'Codes courants',
        filter: {
            all: 'Toutes catégories',
            informational: '1xx - Réponses informatives',
            success: '2xx - Réponses de succès',
            redirection: '3xx - Redirections',
            clientError: '4xx - Erreurs client',
            serverError: '5xx - Erreurs serveur'
        }
    },

    results: {
        title: 'Informations sur le code',
        code: 'Code',
        type: 'Type',
        message: 'Message standard',
        description: 'Description',
        spec: 'Spécification',
        references: 'Références',
        examples: 'Exemples',
        noResults: 'Aucun résultat trouvé',
        searchError: 'Erreur lors de la recherche',
        tryAgain: 'Essayez une autre recherche',
        example: 'Exemple',
        notes: 'Notes importantes'
    },

    categories: {
        title: 'Catégories',
        information: 'Réponses informatives (1xx)',
        success: 'Réponses de succès (2xx)',
        redirection: 'Messages de redirection (3xx)',
        clientError: 'Erreurs client (4xx)',
        serverError: 'Erreurs serveur (5xx)',
        unofficial: 'Codes non officiels',
        internet: 'Internet Information Services',
        nginx: 'Nginx',
        cloudflare: 'Cloudflare',
        aws: 'AWS'
    },

    statusInfo: {
        '100': {
            message: 'Continuer',
            description: 'Le serveur a reçu les en-têtes de requête, le client doit envoyer le corps.',
            shortDescription: 'Continuer la requête',
            fullDescription: 'Le serveur a reçu la partie initiale de la requête et attend le reste.',
            notes: 'Utilisé souvent pour vérifier si le serveur acceptera une requête volumineuse.'
        },
        '101': {
            message: 'Changement de protocole',
            description: 'Le serveur accepte de changer de protocole comme demandé par le client.',
            shortDescription: 'Changement de protocole',
            fullDescription: 'Le serveur comprend la requête et notifie le client d\'un changement de protocole via l\'en-tête Upgrade.',
            notes: 'Couramment utilisé pour établir des connexions WebSocket.'
        },
        '200': {
            message: 'OK',
            description: 'La requête a réussi. La signification dépend de la méthode HTTP.'
        },
        '201': {
            message: 'Créé',
            description: 'La requête a réussi et une nouvelle ressource a été créée.'
        },
        '204': {
            message: 'Pas de contenu',
            description: 'La requête a réussi mais aucun contenu n\'est retourné.'
        },
        '301': {
            message: 'Déplacé de façon permanente',
            description: 'La ressource a été déplacée définitivement vers une nouvelle URL.'
        },
        '302': {
            message: 'Trouvé',
            description: 'La ressource est temporairement disponible à une autre URL.'
        },
        '304': {
            message: 'Non modifié',
            description: 'La ressource n\'a pas changé depuis la dernière requête.'
        },
        '400': {
            message: 'Requête incorrecte',
            description: 'Le serveur ne comprend pas la requête à cause d\'une syntaxe invalide.'
        },
        '401': {
            message: 'Non autorisé',
            description: 'Une authentification est nécessaire pour accéder à la ressource.'
        },
        '403': {
            message: 'Interdit',
            description: 'Le client n\'a pas les droits nécessaires pour ce contenu.'
        },
        '404': {
            message: 'Non trouvé',
            description: 'Le serveur ne trouve pas la ressource demandée.'
        },
        '500': {
            message: 'Erreur interne du serveur',
            description: 'Le serveur a rencontré une situation qu\'il ne sait pas traiter.'
        },
        '502': {
            message: 'Mauvaise passerelle',
            description: 'Le serveur, agissant comme passerelle, a reçu une réponse invalide.'
        },
        '503': {
            message: 'Service indisponible',
            description: 'Le serveur n\'est pas prêt à traiter la requête (maintenance ou surcharge).'
        }
    },

    tools: {
        title: 'Outils',
        checkUrl: 'Vérifier l\'état d\'une URL',
        statusCodeFlow: 'Flux des codes d\'état',
        apiTest: 'Testeur d\'API',
        debugger: 'Débogueur de réponse',
        statusInspector: 'Inspecteur d\'état URL'
    },

    features: {
        title: 'Fonctionnalités',
        overview: 'Vue d\'ensemble des codes',
        comparison: 'Comparaison des codes',
        troubleshooting: 'Guide de dépannage',
        bestPractices: 'Bonnes pratiques',
        codeExamples: 'Exemples de code'
    },

    details: {
        title: 'Détails',
        history: 'Historique',
        browser: 'Comportement navigateur',
        seo: 'Impact SEO',
        security: 'Impact sécurité',
        bestPractices: 'Bonnes pratiques',
        alternatives: 'Codes alternatifs',
        commonErrors: 'Erreurs courantes'
    },

    codeExamples: {
        title: 'Exemples de code',
        nodejs: 'Node.js',
        python: 'Python',
        php: 'PHP',
        java: 'Java',
        go: 'Go',
        copyCode: 'Copier le code',
        response: 'Exemple de réponse',
        request: 'Exemple de requête'
    },

    category: {
        intro: 'Les codes d\'état HTTP sont la réponse du serveur aux requêtes du navigateur, classés en 5 catégories :',
        informational: '1xx (Informatifs) - La requête est en cours de traitement',
        success: '2xx (Succès) - La requête a été traitée avec succès',
        redirection: '3xx (Redirection) - Action supplémentaire nécessaire',
        clientError: '4xx (Erreur client) - Le serveur ne peut traiter la requête',
        serverError: '5xx (Erreur serveur) - Échec du traitement côté serveur'
    },

    codes: {
        '100': {
            shortDescription: 'Continuer la requête',
            description: 'Le serveur a reçu la partie initiale et attend le reste de la requête.',
            notes: 'Utilisé souvent pour vérifier l\'acceptation du serveur avant envoi complet.'
        },
        '101': {
            shortDescription: 'Changement de protocole',
            description: 'Le serveur accepte de changer de protocole comme demandé par le client.',
            notes: 'Fréquent lors de l\'établissement de connexions WebSocket.'
        },
        '200': {
            shortDescription: 'Requête réussie',
            description: 'La requête a réussi et le serveur a retourné le contenu demandé.',
            notes: 'Toutes les requêtes GET réussies doivent retourner ce code.'
        },
        '201': {
            shortDescription: 'Ressource créée',
            description: 'La requête a réussi et une nouvelle ressource a été créée.',
            notes: 'Doit retourner l\'URI de la nouvelle ressource.'
        },
        '204': {
            shortDescription: 'Pas de contenu',
            description: 'La requête a réussi mais aucun contenu n\'est retourné.',
            notes: 'Utilisé pour les requêtes DELETE réussies ou pour réinitialiser la vue.'
        },
        '301': {
            shortDescription: 'Redirection permanente',
            description: 'La ressource a été déplacée définitivement vers une nouvelle URL.',
            notes: 'Les moteurs de recherche mettent à jour l\'URL de la ressource.'
        },
        '302': {
            shortDescription: 'Redirection temporaire',
            description: 'La ressource est temporairement disponible à une autre URL.',
            notes: 'Contrairement au 301, les moteurs ne mettent pas à jour le lien.'
        },
        '304': {
            shortDescription: 'Non modifié',
            description: 'La ressource n\'a pas changé depuis la dernière requête.',
            notes: 'Améliore les performances en évitant la retransmission.'
        },
        '400': {
            shortDescription: 'Requête incorrecte',
            description: 'Le serveur ne comprend pas la requête à cause d\'une syntaxe invalide.',
            notes: 'Généralement dû à des paramètres manquants ou invalides.'
        },
        '401': {
            shortDescription: 'Non autorisé',
            description: 'Authentification requise pour accéder à la ressource.',
            notes: 'Le client doit fournir des informations d\'authentification valides.'
        },
        '403': {
            shortDescription: 'Accès interdit',
            description: 'Le serveur refuse d\'exécuter la requête.',
            notes: 'Généralement dû à des permissions insuffisantes.'
        },
        '404': {
            shortDescription: 'Non trouvé',
            description: 'Le serveur ne trouve pas la ressource demandée.',
            notes: 'Le code d\'erreur le plus courant.'
        },
        '405': {
            shortDescription: 'Méthode non autorisée',
            description: 'La méthode HTTP n\'est pas supportée pour cette ressource.',
            notes: 'La réponse doit inclure l\'en-tête Allow listant les méthodes valides.'
        },
        '409': {
            shortDescription: 'Conflit',
            description: 'La requête entre en conflit avec l\'état actuel du serveur.',
            notes: 'Fréquent lors de la création de ressources existantes.'
        },
        '429': {
            shortDescription: 'Trop de requêtes',
            description: 'Le client a envoyé trop de requêtes en peu de temps.',
            notes: 'Doit inclure l\'en-tête Retry-After indiquant quand réessayer.'
        },
        '500': {
            shortDescription: 'Erreur interne',
            description: 'Le serveur a rencontré une erreur inattendue.',
            notes: 'Généralement dû à des bugs dans le code serveur.'
        },
        '502': {
            shortDescription: 'Mauvaise passerelle',
            description: 'Le serveur, agissant comme passerelle, a reçu une réponse invalide.',
            notes: 'Fréquent avec les serveurs proxy ou les équilibreurs de charge.'
        },
        '503': {
            shortDescription: 'Service indisponible',
            description: 'Le serveur n\'est pas prêt à traiter la requête.',
            notes: 'Doit inclure Retry-After pour gérer la surcharge.'
        },
        '504': {
            shortDescription: 'Délai de réponse dépassé',
            description: 'Le serveur, agissant comme passerelle, n\'a pas reçu de réponse à temps.',
            notes: 'Fréquent avec les services en aval trop lents.'
        }
    }
};