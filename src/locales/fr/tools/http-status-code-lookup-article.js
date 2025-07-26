export default {
    title: "Guide de référence des codes d'état HTTP - Comprendre les réponses réseau",
    intro: {
        title: "Que sont les codes d'état HTTP et pourquoi sont-ils importants ?",
        p1: "Les <b>codes d'état HTTP</b> sont des réponses standard envoyées par les serveurs web pour indiquer le résultat des requêtes client. Ces codes à trois chiffres sont classés en cinq catégories, chacune ayant un usage spécifique dans la communication web. Notre outil de référence des codes d'état HTTP fournit un accès instantané à ces informations détaillées, aidant les développeurs, administrateurs et professionnels IT à diagnostiquer efficacement les problèmes liés au web.",
        p2: "Comprendre les <b>codes de réponse HTTP</b> est essentiel pour toute personne travaillant sur des sites ou applications web. Ces codes indiquent si une requête HTTP a réussi, nécessite une action supplémentaire ou a rencontré une erreur. En identifiant rapidement la signification de codes comme 404 Non trouvé ou 500 Erreur interne, vous pouvez diagnostiquer plus rapidement les problèmes et améliorer l'expérience utilisateur.",
        p3: "Notre <b>outil de référence</b> complet fournit non seulement des définitions de base, mais aussi des explications détaillées, causes courantes et actions recommandées pour chaque code. Que vous déboguiez un site, optimisiez le SEO ou développiez une API, cet outil est votre allié pour interpréter les réponses serveur et maintenir un web fluide."
    },
    useCases: {
        title: "Applications pratiques des codes d'état HTTP",
        case1: "<b>Débogage de sites</b> : Quand des utilisateurs signalent des problèmes d'accès, les codes d'état identifient rapidement si c'est une ressource manquante (404), une erreur serveur (5xx) ou un problème de permissions (403). Notre outil aide à comprendre ces erreurs et à implémenter les corrections appropriées.",
        case2: "<b>Optimisation SEO</b> : Les moteurs de recherche utilisent les codes d'état pour évaluer la santé de votre site. Une gestion correcte des redirections (301 vs 302) et des pages d'erreur impacte significativement le classement. Utilisez notre outil pour implémenter correctement les codes d'état et optimiser votre SEO.",
        case3: "<b>Développement d'API</b> : Les API REST s'appuient fortement sur les codes d'état HTTP. Les développeurs peuvent utiliser notre référence pour choisir les codes les plus appropriés, assurant une communication claire entre services.",
        case4: "<b>Configuration serveur</b> : Les administrateurs utilisent les codes d'état pour diagnostiquer les problèmes de configuration des serveurs web, équilibreurs de charge et proxies. Nos explications détaillées aident à identifier l'origine des erreurs.",
        case5: "<b>Sécurité web</b> : Les professionnels de la sécurité analysent les modèles de codes d'état pour détecter des attaques potentielles. Comprendre l'impact sécurité des différents codes aide à implémenter des contrôles d'accès appropriés."
    },
    tutorial: {
        title: "Comment utiliser l'outil de référence des codes d'état HTTP",
        intro: "Notre outil est conçu pour être intuitif et efficace. Suivez ces étapes simples pour trouver rapidement les informations dont vous avez besoin :",
        step1: {
            title: "Étape 1 : Entrez vos critères",
            description: "Dans la barre de recherche, entrez un code spécifique (comme 404 ou 500) ou des mots-clés descriptifs (comme \"Non trouvé\" ou \"Erreur serveur\"). La recherche fonctionne avec les codes et les descriptions."
        },
        step2: {
            title: "Étape 2 : Filtrez par catégorie (optionnel)",
            description: "Utilisez le menu déroulant pour filtrer les résultats par catégorie : informatifs (1xx), succès (2xx), redirections (3xx), erreurs client (4xx) ou erreurs serveur (5xx). Utile pour explorer des codes similaires."
        },
        step3: {
            title: "Étape 3 : Consultez la liste",
            description: "Après recherche ou filtrage, consultez la liste des codes correspondants. Chaque entrée montre le code, son nom et une brève description. Les couleurs aident à identifier rapidement la catégorie."
        },
        step4: {
            title: "Étape 4 : Voir les détails",
            description: "Cliquez sur un code pour voir une description complète, des exemples de réponses et des notes pratiques sur quand et comment ce code est utilisé. Ces détails aident à comprendre chaque code dans des scénarios réels."
        }
    },
    common: {
        title: "Analyse des codes d'état HTTP les plus importants",
        intro: "Bien que des dizaines de codes d'état HTTP existent, seuls quelques-uns sont fréquemment rencontrés. Voici une analyse approfondie des codes les plus critiques à connaître :",
        code1: {
            title: "200 OK - La réponse de succès de base",
            description: "Le <b>code 200 OK</b> indique que la requête a réussi. C'est la réponse standard pour les requêtes HTTP réussies, particulièrement les requêtes GET. Un site fonctionnant normalement devrait générer principalement des réponses 200."
        },
        code2: {
            title: "404 Not Found - Gérer les ressources manquantes",
            description: "Le <b>code 404 Not Found</b> apparaît quand une ressource demandée n'existe pas sur le serveur. Cela arrive souvent avec des liens brisés, des URL mal orthographiées ou du contenu supprimé. Trop d'erreurs 404 peut nuire au classement SEO."
        },
        code3: {
            title: "500 Internal Server Error - Gérer les problèmes serveur",
            description: "Le <b>code 500 Internal Server Error</b> indique que le serveur a rencontré une situation inattendue l'empêchant de satisfaire la requête. C'est une erreur générique côté serveur, souvent due à des bugs ou des problèmes de configuration."
        },
        code4: {
            title: "301 vs 302 Redirections - Considérations SEO stratégiques",
            description: "La différence entre les <b>redirections 301 (permanentes)</b> et <b>302 (temporaires)</b> est cruciale pour le SEO. Les 301 indiquent aux moteurs de recherche de mettre à jour l'URL dans leur index, transférant le \"jus\" SEO. Les 302 ne mettent pas à jour l'index."
        }
    },
    faq: {
        title: "Questions fréquentes sur les codes d'état HTTP",
        q1: "Quelle est la différence entre les codes 4xx et 5xx ?",
        a1: "La principale différence entre les <b>codes 4xx et 5xx</b> est l'origine de l'erreur. Les 4xx indiquent des erreurs client (requête incorrecte, permissions insuffisantes). Les 5xx indiquent des erreurs serveur (problèmes de configuration, bugs).",

        q2: "Comment les codes d'état affectent-ils le SEO ?",
        a2: "Les <b>codes d'état influencent significativement le SEO</b>. Les moteurs de recherche les utilisent pour comprendre la structure de votre site :<br><br>• 200 (OK) - Contenu prêt pour l'indexation<br>• 301 - Transfère le classement à la nouvelle URL<br>• 302 - Conserve le classement sur l'URL originale<br>• 404 - Peut nuire au classement si trop fréquent<br>• 500 - Peut empêcher l'indexation si persistant<br><br>Une implémentation correcte des codes assure que les moteurs comprennent correctement votre site.",

        q3: "Quel code utiliser pour une page temporairement indisponible ?",
        a3: "Pour une <b>indisponibilité temporaire</b>, utilisez le <b>code 503 Service Unavailable</b>. Ce code indique clairement que l'indisponibilité est temporaire. Incluez l'en-tête Retry-After pour indiquer quand réessayer.",

        q4: "Comment gérer les redirections pour une migration SEO-friendly ?",
        a4: "Pour une <b>migration SEO-friendly</b>, implémentez des <b>redirections 301</b> de toutes les anciennes URL vers leurs équivalents nouveaux. Créez une cartographie complète, testez toutes les redirections et conservez-les au moins un an.",

        q5: "Que signifie le code 304 Not Modified ?",
        a5: "Le <b>code 304 Not Modified</b> indique que la ressource n'a pas changé depuis la dernière requête, permettant au client d'utiliser sa version en cache. Cela améliore les performances en évitant des transferts inutiles.",

        q6: "Comment déboguer des codes d'état personnalisés ou inhabituels ?",
        a6: "Pour déboguer des <b>codes personnalisés</b>, utilisez les outils développeurs du navigateur, inspectez les journaux serveur et consultez la documentation de l'application ou de l'API concernée."
    },
    relatedTools: {
        title: "Explorez plus d'outils pour développeurs web",
        description: "Améliorez votre workflow de développement avec ces outils complémentaires :",
        tool1: {
            name: "Vérificateur d'en-têtes HTTP",
            url: "https://www.ufreetools.com/tool/http-header-security-checker",
            description: "Analyse la sécurité des en-têtes de réponse HTTP."
        },
        tool2: {
            name: "Détecteur de proxy HTTP",
            url: "https://www.ufreetools.com/tool/http-proxy-detector",
            description: "Détecte si votre connexion utilise un proxy HTTP."
        },
        tool3: {
            name: "Analyseur de paramètres URL",
            url: "https://www.ufreetools.com/tool/url-params-parser",
            description: "Analyse et manipule les paramètres d'URL."
        },
        tool4: {
            name: "Formateur et validateur JSON",
            url: "https://www.ufreetools.com/tool/json-formatter",
            description: "Formate et valide des données JSON pour le développement d'API."
        }
    },
    resources: {
        title: "Ressources officielles sur les codes d'état HTTP",
        resource1: {
            name: "Référence MDN des codes d'état HTTP",
            url: "https://developer.mozilla.org/fr/docs/Web/HTTP/Status",
            description: "La référence la plus complète et à jour, avec des explications détaillées."
        },
        resource2: {
            name: "Registre officiel IANA des codes d'état HTTP",
            url: "https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml",
            description: "Source officielle des codes d'état HTTP standardisés."
        },
        resource3: {
            name: "RFC 7231 - Sémantique HTTP/1.1 : Codes d'état",
            url: "https://tools.ietf.org/html/rfc7231#section-6",
            description: "Spécification officielle définissant la sémantique des codes d'état HTTP."
        }
    }
}
