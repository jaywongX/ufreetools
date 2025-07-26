export default {
  title: 'Encodage/Décodage URL : Guide complet',
  introduction: {
    title: 'Qu\'est-ce que l\'encodage/décodage URL ?',
    p1: 'L\'<strong>encodage/décodage URL</strong> est un processus essentiel en développement web qui convertit les caractères spéciaux en un format pouvant être transmis sans risque sur Internet. Lorsque vous saisissez des informations dans une URL, certains caractères (comme les espaces, les esperluettes et les barres obliques) ont une signification particulière dans la structure d\'une URL. L\'encodage URL remplace ces caractères spéciaux par un signe pourcentage (%) suivi de deux chiffres hexadécimaux.',
    p2: 'Notre outil d\'<strong>encodage/décodage URL</strong> fournit une interface intuitive gérant trois types d\'encodage : standard (encodeURI), composant (encodeURIComponent) et encodage complet de tous les caractères. Cette polyvalence permet aux développeurs utilisant les fonctions d\'<strong>encodage/décodage URL en JavaScript</strong>, les méthodes d\'<strong>encodage/décodage URL en PHP</strong> ou tout autre langage de programmation de tester et valider facilement leurs opérations d\'encodage et de décodage.',
    p3: 'Que vous traitiez des soumissions de formulaire, des requêtes API ou des paramètres d\'URL complexes, comprendre et implémenter correctement les techniques d\'<strong>encodage/décodage URL</strong> est crucial pour prévenir la corruption des données et les failles de sécurité. Ce guide complet explore les différents aspects de l\'encodage et du décodage URL dans divers langages et frameworks.'
  },
  
  applications: {
    title: 'Scénarios d\'application pratiques',
    scenario1: {
      title: 'Développement web et traitement de formulaires',
      content: 'Les développeurs web utilisent fréquemment les fonctions d\'<strong>encodage/décodage URL en JavaScript</strong> lors du traitement de formulaires pour s\'assurer que les données sont correctement formatées pour les requêtes HTTP. Lorsqu\'un utilisateur soumet un formulaire contenant des caractères spéciaux, des espaces ou des caractères non ASCII, ces caractères doivent être encodés avant d\'être envoyés au serveur. La fonction JavaScript <code>encodeURIComponent()</code> est couramment utilisée à cette fin, tandis que <code>decodeURIComponent()</code> décode les données côté réception.'
    },
    scenario2: {
      title: 'Développement et intégration d\'API',
      content: 'Lors du développement ou de l\'utilisation d\'API, les développeurs ont souvent besoin de fonctions d\'<strong>encodage/décodage URL</strong> dans divers langages comme <strong>Python</strong>, <strong>Java</strong> ou <strong>Golang</strong>. Les paramètres de requête et segments de chemin peuvent contenir des caractères spéciaux nécessitant un encodage pour former correctement la requête. Par exemple, les opérations d\'<strong>encodage/décodage URL en Python</strong> utilisent généralement le module <code>urllib.parse</code>, tandis que les développeurs Java utilisent les classes <code>URLEncoder</code> et <code>URLDecoder</code>.'
    },
    scenario3: {
      title: 'Interactions avec les bases de données',
      content: 'Les développeurs de bases de données doivent parfois effectuer des opérations d\'<strong>encodage/décodage URL dans SQL Server</strong> ou d\'autres systèmes. Les caractères spéciaux dans les URL peuvent interférer avec les requêtes SQL si mal encodés. De même, des frameworks comme <strong>Laravel</strong> fournissent des utilitaires pour gérer l\'encodage/décodage URL dans les opérations de base de données, assurant l\'intégrité des données tout au long du cycle de vie de l\'application.'
    },
    scenario4: {
      title: 'Sécurité et authentification',
      content: 'Les professionnels de la sécurité utilisent les techniques d\'<strong>encodage/décodage URL</strong> pour analyser et tester les vulnérabilités des applications web. Un encodage URL correct aide à prévenir les attaques par injection et les attaques XSS (Cross-Site Scripting). Lors de l\'implémentation de systèmes d\'authentification, les développeurs peuvent avoir besoin d\'encoder des jetons ou autres informations sensibles dans les URL. Des bibliothèques comme celles d\'<strong>encodage/décodage Base64 URL</strong> sont souvent utilisées pour ces tâches de codage liées à la sécurité, particulièrement dans les implémentations JWT (JSON Web Tokens).'
    },
    scenario5: {
      title: 'Environnements de développement multilingues',
      content: 'Dans des environnements multilingues, les développeurs doivent s\'assurer que l\'encodage URL est utilisé de manière cohérente à travers l\'écosystème de programmation. Tester les implémentations d\'<strong>encodage/décodage URL en C#</strong> par rapport à celles en <strong>TypeScript</strong> ou <strong>PHP</strong> peut être crucial pour maintenir l\'interopérabilité. Notre outil en ligne sert de point de référence neutre, permettant aux développeurs de vérifier le comportement d\'encodage dans différents langages sans écrire de code de test supplémentaire.'
    }
  },
  
  guide: {
    title: 'Comment utiliser l\'outil d\'encodage/décodage URL',
    step1: {
      title: 'Étape 1 : Choisissez votre type d\'opération',
      content: 'Commencez par sélectionner l\'opération souhaitée dans le menu déroulant. Choisissez "Encoder URL" pour convertir les caractères spéciaux en un format sûr pour les URL, ou "Décoder URL" pour reconvertir les caractères encodés à leur forme originale. Cette flexibilité vous permet de tester les fonctionnalités que vous pourriez implémenter avec l\'<strong>encodage/décodage URL en JavaScript</strong>, <strong>PHP</strong> ou <strong>Python</strong>.'
    },
    step2: {  
      title: 'Étape 2 : Sélectionnez le mode d\'encodage',
      content: 'Lorsque vous choisissez "Encoder URL", sélectionnez parmi trois modes différents pour répondre à vos besoins :<ul><li><strong>Encodage standard (encodeURI)</strong> : Encode une URL entière tout en conservant les caractères de structure comme les barres obliques, points d\'interrogation, etc. Cela équivaut à utiliser la fonction <code>encodeURI()</code> en <strong>JavaScript</strong>.</li><li><strong>Encodage composant (encodeURIComponent)</strong> : Encode tous les caractères spéciaux, y compris ceux ayant une signification particulière dans les URL comme les barres obliques et points d\'interrogation. Cela équivaut à utiliser <code>encodeURIComponent()</code> en <strong>JavaScript</strong>.</li><li><strong>Encodage complet</strong> : Encode tous les caractères non alphanumériques, fournissant la méthode d\'encodage la plus complète, similaire à une fonction personnalisée en <strong>Java</strong>.</li></ul>'
    },
    step3: {
      title: 'Étape 3 : Saisissez votre texte',
      content: 'Ensuite, entrez dans le champ de saisie le texte que vous souhaitez encoder ou décoder. Il peut s\'agir d\'une URL complète, d\'un composant d\'URL ou de toute chaîne contenant des caractères spéciaux. Si vous testez des fonctionnalités équivalentes comme l\'<strong>encodage/décodage URL en PHP</strong> ou <strong>Python</strong>, vous pouvez saisir ici la même chaîne pour comparaison.'
    },
    step4: {
      title: 'Étape 4 : Traitez et utilisez les résultats',
      content: 'Cliquez sur le bouton "Encoder URL" ou "Décoder URL" pour traiter votre saisie. Le résultat s\'affichera dans le champ de sortie ci-dessous. Vous pouvez utiliser le bouton de copie pour transférer le résultat dans votre application, que vous utilisiez l\'<strong>encodage/décodage URL en C#</strong>, <strong>TypeScript</strong> ou que vous implémentiez l\'<strong>encodage/décodage URL dans Laravel</strong>. La table de référence en bas de l\'outil affiche les caractères URL encodés courants pour votre information.'
    }
  },
  
  faq: {
    title: 'Questions fréquentes',
    q1: 'Quelle est la différence entre encodeURI et encodeURIComponent ?',
    a1: 'Dans les opérations d\'<strong>encodage/décodage URL en JavaScript</strong>, ces deux fonctions ont des usages différents. <code>encodeURI()</code> est conçue pour encoder une URL entière en conservant les caractères de structure (comme <code>/</code>, <code>?</code>, <code>:</code>, <code>=</code>). C\'est utile lorsque vous avez besoin d\'encoder une URL complète tout en préservant sa structure.<br><br><code>encodeURIComponent()</code>, quant à elle, encode tous les caractères spéciaux, y compris ceux ayant une signification particulière dans les URL comme les barres obliques et points d\'interrogation. Cela la rend idéale pour encoder des composants d\'URL comme les paramètres de requête. Par exemple, si vous construisez une URL de recherche contenant une saisie utilisateur, vous devriez utiliser <code>encodeURIComponent()</code> pour encoder le terme de recherche, afin que les caractères spéciaux ne perturbent pas la structure de l\'URL. La plupart des implémentations d\'<strong>encodage/décodage URL en JavaScript</strong> utilisent <code>encodeURIComponent()</code> pour les soumissions de formulaire et les appels API.',

    q2: 'Comment implémenter l\'encodage/décodage URL en PHP ?',
    a2: 'Pour les opérations d\'<strong>encodage/décodage URL en PHP</strong>, PHP fournit des fonctions intégrées : <code>urlencode()</code> et <code>urldecode()</code>. La fonction <code>urlencode()</code> fonctionne de manière similaire à <code>encodeURIComponent()</code> en JavaScript, encodant tous les caractères spéciaux, y compris les espaces (comme des signes +). Pour encoder une URL entière, PHP propose <code>rawurlencode()</code>, qui suit la norme RFC 3986 et encode les espaces en %20 plutôt qu\'en +.',

    q3: 'Comment implémenter l\'encodage/décodage URL en Python ?',
    a3: 'Pour l\'<strong>encodage/décodage URL en Python</strong>, vous pouvez utiliser les fonctions <code>quote()</code> et <code>unquote()</code> du module <code>urllib.parse</code>. La fonction <code>quote()</code> est similaire à <code>encodeURIComponent()</code> en JavaScript, encodant tous les caractères spéciaux, y compris les espaces (en %20). <code>unquote()</code> est utilisée pour décoder les chaînes encodées en URL.' ,

    q4: 'Puis-je utiliser l\'encodage Base64 à la place de l\'encodage URL ?',
    a4: 'Bien que les techniques d\'<strong>encodage/décodage Base64 URL</strong> soient parfois utilisées pour encoder des données dans les URL (particulièrement dans les implémentations JWT), l\'encodage Base64 n\'est pas un substitut à l\'encodage URL. L\'encodage Base64 convertit des données binaires en caractères ASCII, mais peut produire des caractères ayant une signification particulière dans les URL, comme +, / et =.',

    q5: 'Comment gérer l\'encodage URL dans les requêtes SQL ?',
    a5: 'Effectuer des opérations d\'<strong>encodage/décodage URL dans SQL Server</strong> implique généralement d\'utiliser des fonctions intégrées ou de créer des fonctions personnalisées. SQL Server ne possède pas de fonction d\'encodage URL intégrée, mais vous pouvez :<br><br>1. Effectuer les opérations d\'encodage/décodage dans le code de l\'application avant de construire la requête SQL.<br>2. Créer des fonctions définies par l\'utilisateur en SQL. Pour des raisons de sécurité, il est généralement préférable d\'utiliser les méthodes d\'<strong>encodage/décodage URL en C#</strong> (pour les applications .NET) ou d\'autres implémentations spécifiques au langage dans le code de l\'application, plutôt que de traiter directement l\'encodage/décodage URL en SQL.'
  },
  
  relatedTools: {
    title: 'Outils connexes',
    tool1: '<a href="https://meyerweb.com/eric/tools/dencoder/" target="_blank" rel="noopener noreferrer">URL Decoder/Encoder</a>',
    tool2: '<a href="https://www.urldecoder.org/" target="_blank" rel="noopener noreferrer">URL Decode and Encode - Online</a>',
    tool3: '<a href="https://www.url-encode-decode.com/" target="_blank" rel="noopener noreferrer">URL Encode Decode - URL Percent Encoding and Decoding.</a>'
  },
  
  resources: {
    title: 'Ressources externes',
    resource1: '<a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" target="_blank" rel="noopener noreferrer">MDN Web Docs : encodeURIComponent()</a> - Documentation détaillée sur la fonction d\'encodage URL en JavaScript',
    resource2: '<a href="https://www.php.net/manual/fr/function.urlencode.php" target="_blank" rel="noopener noreferrer">Manuel PHP : urlencode()</a> - Documentation officielle sur la fonction d\'encodage URL en PHP',
    resource3: '<a href="https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1" target="_blank" rel="noopener noreferrer">Spécification W3C sur la soumission de formulaires</a> - Norme officielle expliquant comment les navigateurs encodent les données de formulaire'
  },
  
  conclusion: {
    title: 'Conclusion',
    content: 'Notre outil d\'<strong>encodage/décodage URL</strong> fournit une solution polyvalente pour tous vos besoins d\'encodage et de décodage d\'URL. Que vous ayez besoin de tester l\'<strong>encodage/décodage URL en JavaScript</strong>, <strong>PHP</strong> ou <strong>Python</strong>, notre outil répond à vos besoins.'
  }
}
