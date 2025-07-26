export default {
  title: "Éditeur d'en-têtes HTTP : Guide complet",
  features: {
    title: "Comprendre les en-têtes HTTP et leur importance",
    description: "L'<strong>Éditeur d'en-têtes HTTP</strong> est un outil puissant conçu pour les développeurs, testeurs et passionnés d'API, permettant de créer, modifier et valider les en-têtes des requêtes web. Ces en-têtes sont des composants clés de la communication HTTP, transmettant des métadonnées essentielles entre client et serveur pour gérer l'authentification, la négociation de contenu, le comportement du cache et plus encore.<br><br>Notre <strong>outil d'édition d'en-têtes</strong> offre une interface intuitive pour construire des ensembles complexes d'en-têtes, tester différentes configurations et exporter les résultats dans divers formats pour une implémentation dans vos applications. Que vous déboguiez des problèmes d'API, développiez de nouvelles intégrations ou appreniez les protocoles web, cet outil simplifie la manipulation des en-têtes HTTP.",
    useCases: {
      title: "Applications pratiques de l'édition d'en-têtes",
      items: [
        "<strong>Test d'authentification API</strong> : Pour les API nécessitant des jetons d'authentification ou des clés dans les en-têtes (OAuth, JWT, clés API), notre <strong>constructeur d'en-têtes</strong> permet de rapidement configurer et tester différents scénarios sans modifier le code applicatif.",
        
        "<strong>Débogage CORS</strong> : Pour les applications web effectuant des requêtes cross-origin, configurer la bonne combinaison d'en-têtes Origin, Access-Control et preflight est crucial. Cet <strong>outil d'en-têtes HTTP</strong> aide à identifier et résoudre les problèmes CORS en testant différentes configurations.",
        
        "<strong>Négociation de contenu</strong> : Les services web modernes supportent multiples types de contenu, langues et encodages. Avec des en-têtes comme Accept, Accept-Language et Accept-Encoding, vous pouvez tester comment le serveur répond aux préférences client et vérifier que votre application implémente correctement la négociation.",
        
        "<strong>Optimisation du cache</strong> : Une configuration adéquate des en-têtes de cache peut significativement améliorer les performances. Notre <strong>gestionnaire d'en-têtes</strong> permet d'expérimenter avec diverses directives Cache-Control, configurations ETag et en-têtes de requêtes conditionnelles pour trouver la stratégie optimale.",
        
        "<strong>Configuration des en-têtes de sécurité</strong> : Implémenter des en-têtes comme Content-Security-Policy, Strict-Transport-Security et X-Content-Type-Options est essentiel pour les applications web modernes. Cet outil permet de construire et valider ces en-têtes complexes avant déploiement.",
        
        "<strong>Génération de clients API</strong> : Après avoir finalisé votre ensemble d'en-têtes, vous pouvez exporter des snippets de code prêts à l'emploi dans divers langages, facilitant l'implémentation des mêmes en-têtes dans votre code, commandes curl ou outils de test."
      ]
    }
  },
  faq: {
    title: "FAQ sur les en-têtes HTTP",
    items: [
      {
        question: "Que sont les en-têtes HTTP et pourquoi sont-ils importants ?",
        answer: "Les en-têtes HTTP sont des paires clé-valeur envoyées du client (navigateur, client API) au serveur dans une requête HTTP. Ils fournissent des métadonnées cruciales sur la requête, les capacités et préférences du client.<br><br>Leur importance vient de leur rôle dans :<br><br>• Le contrôle des mécanismes d'<strong>authentification et autorisation</strong><br>• La gestion du <strong>cache</strong> pour améliorer les performances<br>• L'activation de la <strong>négociation de contenu</strong> (format, langue, encodage)<br>• La configuration des requêtes <strong>cross-origin</strong> et politiques de sécurité<br>• La fourniture d'informations contextuelles comme l'<strong>user-agent</strong> ou le référent<br><br>Sans en-têtes appropriés, de nombreuses fonctionnalités web modernes ne fonctionneraient pas, les API manqueraient de contrôles de sécurité et les performances web en souffriraient."
      },
      {
        question: "Quelles sont les différences entre Content-Type, Authorization et Accept ?",
        answer: "Ces trois en-têtes servent des objectifs distincts :<br><br><strong>Content-Type</strong> : Spécifie le type média du corps de requête (envoi) ou les types que le client peut comprendre (réception). Valeurs courantes :<br>• <code>application/json</code> pour JSON<br>• <code>application/x-www-form-urlencoded</code> pour les formulaires<br>• <code>multipart/form-data</code> pour les fichiers<br><br><strong>Authorization</strong> : Contient les identifiants d'authentification. Formats courants :<br>• <code>Bearer eyJhbGc...</code> pour JWT/OAuth<br>• <code>Basic dXNlcm5hbWU6cGFzc3dvcmQ=</code> pour l'authentification basique<br>• <code>ApiKey 12345abcde...</code> pour les clés API<br><br><strong>Accept</strong> : Indique les types de contenu que le client peut traiter. Cela permet au serveur de fournir le format le plus approprié. Exemples :<br>• <code>application/json</code> pour JSON<br>• <code>text/html</code> pour HTML<br>• <code>*/*</code> pour tout type<br><br>Une utilisation correcte assure un échange de données approprié, une authentification sécurisée et une livraison optimale du contenu."
      },
      {
        question: "Comment tester si mes en-têtes fonctionnent correctement ?",
        answer: "Plusieurs méthodes permettent de tester efficacement les en-têtes HTTP :<br><br>1. <strong>Utiliser notre éditeur</strong> pour construire vos en-têtes et les exporter en commande cURL ou snippet de code exécutable.<br><br>2. <strong>Outils de développement navigateur</strong> : La plupart incluent des inspecteurs réseau affichant tous les en-têtes et réponses serveur.<br><br>3. <strong>Services de test API</strong> : Des outils comme Postman ou Insomnia permettent de configurer des en-têtes personnalisés et d'inspecter le cycle complet requête/réponse.<br><br>4. <strong>Services d'écho</strong> : Des endpoints comme httpbin.org renvoient les détails de votre requête, facilitant la vérification.<br><br>5. <strong>Journaux serveur</strong> : Si accessible, ils enregistrent généralement les en-têtes entrants.<br><br>Points de vigilance :<br>• Casse incorrecte (bien que non sensible normalement)<br>• Jetons d'authentification manquants ou mal formatés<br>• Inadéquation entre Content-Type déclaré et contenu effectif<br>• Mauvaise configuration CORS pour les requêtes cross-origin"
      },
      {
        question: "Puis-je sauvegarder et réutiliser des configurations d'en-têtes ?",
        answer: "Bien que notre outil en ligne n'implémente pas de stockage persistant pour des raisons de confidentialité, plusieurs approches existent :<br><br>1. <strong>Exporter en code</strong> : Générer des snippets dans votre langage préféré à sauvegarder dans vos dépôts ou documentation.<br><br>2. <strong>Copier en texte brut</strong> : Le format brut peut être conservé dans des fichiers texte ou systèmes de documentation.<br><br>3. <strong>Extensions navigateur</strong> : Certaines extensions permettent de gérer des ensembles d'en-têtes par domaine/projet.<br><br>4. <strong>Plateformes de gestion API</strong> : Postman et outils similaires offrent des fonctionnalités d'organisation et de sauvegarde.<br><br>5. <strong>Variables d'environnement</strong> : Définir les en-têtes dans des fichiers .env ou pipelines CI/CD.<br><br>Pour les équipes, nous recommandons de maintenir un référentiel central des configurations standard pour différents environnements (dev, test, prod)."
      },
      {
        question: "Quelles erreurs courantes éviter avec les en-têtes HTTP ?",
        answer: "Pièces à éviter :<br><br>1. <strong>Omission d'en-têtes de sécurité</strong> : Content-Security-Policy, X-Content-Type-Options et Strict-Transport-Security sont critiques pour la sécurité.<br><br>2. <strong>Content-Type incorrect</strong> : Un type média ne correspondant pas au contenu effectif cause des erreurs de parsing.<br><br>3. <strong>Fuites d'identifiants</strong> : Envoyer des jetons d'authentification à des tiers ou les logger présente des risques.<br><br>4. <strong>En-têtes CORS manquants</strong> : Les requêtes cross-origin échoueront sans une bonne configuration Access-Control-Allow-*.<br><br>5. <strong>En-têtes redondants ou contradictoires</strong> : Plusieurs en-têtes contrôlant le même comportement avec des valeurs différentes produisent des résultats imprévisibles.<br><br>6. <strong>Sensibilité à la casse</strong> : Bien que normalement insensible, certaines implémentations peuvent être strictes sur la casse des noms.<br><br>7. <strong>En-têtes trop permissifs</strong> : Access-Control-Allow-Origin: * ou des directives Content-Security-Policy trop larges peuvent créer des failles.<br><br>8. <strong>Dépassement de taille</strong> : Certains serveurs limitent la taille totale des en-têtes (souvent 8KB). Les cookies ou jetons très volumineux peuvent dépasser."
      }
    ]
  },
  guide: {
    title: "Comment utiliser l'éditeur d'en-têtes HTTP : Guide étape par étape",
    step1: "<strong>Ajoutez des en-têtes</strong> : Cliquez sur \"Ajouter un en-tête\" pour créer de nouvelles entrées. Chaque en-tête a un nom (comme \"Content-Type\" ou \"Authorization\") et une valeur. Ajoutez autant d'en-têtes que nécessaire. Utilisez les boutons de préréglages pour les en-têtes courants.",
    step2: "<strong>Saisissez noms et valeurs</strong> : Pour chaque en-tête, saisissez un nom conforme aux conventions HTTP et une valeur appropriée. L'outil valide automatiquement la syntaxe.",
    step3: "<strong>Utilisez l'édition en masse</strong> : Pour ajouter plusieurs en-têtes simultanément, utilisez la zone de texte d'édition en masse en bas de l'éditeur.",
    step4: "<strong>Consultez le guide des en-têtes</strong> : Si vous hésitez sur les valeurs à utiliser, référez-vous à la section guide à droite. Cliquez sur des noms comme \"Content-Type\" pour voir des valeurs courantes et les ajouter à votre ensemble.",
    step5: "<strong>Choisissez un format d'export</strong> : Après configuration, sélectionnez votre format d'export préféré dans le menu déroulant. Options disponibles : texte brut pour copie simple, cURL pour lignes de commande, ou divers langages de programmation.",
    step6: "<strong>Vérifiez la sortie formatée</strong> : L'outil génère du code ou texte formaté selon vos en-têtes et le format choisi. Ce résultat est prêt pour votre code, tests API ou documentation.",
    step7: "<strong>Copiez le résultat</strong> : Cliquez \"Copier\" pour placer la sortie dans le presse-papiers. Collez-la directement dans votre éditeur, terminal ou outil nécessitant ces en-têtes."
  },
  conclusion: "L'éditeur d'en-têtes HTTP simplifie la création, le test et l'implémentation d'en-têtes, offrant aux développeurs et intégrateurs d'API une interface intuitive supportant multiples formats d'export. Alors que les exigences de sécurité et performance web évoluent, une configuration correcte des en-têtes devient de plus en plus cruciale. Cet outil aide à garantir que vos applications suivent les meilleures pratiques de communication HTTP, sécurité et optimisation."
}
