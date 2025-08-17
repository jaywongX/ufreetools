export default {
  loading: 'Chargement...',
  error: 'Erreur',
  success: 'Succès',
  cancel: 'Annuler',
  save: 'Enregistrer',
  delete: 'Supprimer',
  confirm: 'Confirmer',
  navigation: 'Navigation',
  expand: 'Développer',
  collapse: 'Réduire',
  languageDetector: {
    detected: 'Nous avons détecté que la langue de votre navigateur est {lang}',
    switchQuestion: 'Souhaitez-vous passer à cette langue ?',
    switchNow: 'Changer maintenant',
    stayOn: 'Continuer en {lang}'
  },
  defaultDescription: 'Outils en ligne gratuits pour les développeurs, designers et utilisateurs quotidiens.',
  site: {
    name: 'Boîte à outils'
  },
  characters: 'Nombre de caractères',
  lines: 'Nombre de lignes',
  pasteFromClipboard: 'Coller depuis le presse-papiers',
  pasteError: 'Impossible de lire le presse-papiers',
  copyFailed: 'Échec de la copie',
  simple: 'Simple',
  nested: 'Imbriqué',
  complex: 'Complexe',
  example: 'Exemple',
  loadExample: 'Charger un exemple',
  spaces: 'Espaces',
  donate: 'Faire un don',
  buyMeACoffee: 'Offrez-moi un café',
  donateInternational: 'Utilisateurs internationaux',
  donateChina: 'Chine continentale',
  wechatPay: 'Code de donation WeChat',
  wechatDonation: 'Code de donation WeChat',
  scanToSupport: 'Scannez le QR code ci-dessous pour faire un don',
  thankYouForSupport: 'Merci pour votre soutien !',
  backToHome: "Retour à l'accueil",
  submit: 'Soumettre',
  submitting: 'Envoi en cours...',
  useTool: 'Utiliser l\'outil',
  favorites: {
    title: 'Mes favoris',
    description: 'Voir et gérer vos outils favoris',
    add: 'Ajouter aux favoris',
    remove: 'Retirer des favoris',
    empty: 'Votre liste de favoris est vide',
    browseTools: 'Parcourir tous les outils',
    article: {
      title: "Fonctionnalité Favoris : Gérer efficacement vos outils préférés",
      intro: {
        title: "Présentation et cas d'usage des Favoris",
        p1: "<b>La fonctionnalité Favoris</b> vous permet de sauvegarder et gérer facilement vos outils en ligne les plus utilisés. En ajoutant des outils à vos favoris, vous créez une collection personnalisée, évitant ainsi de devoir les rechercher à chaque utilisation. Pour les utilisateurs réguliers, cela améliore significativement la productivité en économisant du temps précieux. Les Favoris fonctionnent entièrement localement dans votre navigateur, sans nécessiter de compte ou connexion, préservant votre vie privée tout en offrant un service pratique.",
        p2: "Dans nos activités quotidiennes, <b>nous utilisons fréquemment divers outils en ligne</b> pour accomplir différentes tâches. Par exemple, les développeurs peuvent avoir besoin d'accéder régulièrement à des outils de formatage JSON, convertisseurs d'encodage ou compresseurs ; les designers peuvent utiliser souvent des sélecteurs de couleur, outils de traitement d'image ou optimiseurs SVG ; tandis que les utilisateurs standards peuvent dépendre de convertisseurs de documents, générateurs aléatoires ou outils de calcul. La fonctionnalité Favoris vous permet d'organiser ces outils dans une boîte à outils personnalisée adaptée à votre flux de travail.",
        p3: "<b>Les Favoris sont utiles dans de nombreux contextes</b> : développement pour accéder rapidement aux outils de codage ; apprentissage pour organiser ressources éducatives et outils de calcul ; environnement professionnel pour gérer outils de traitement de documents et conversion de formats ; ou usage personnel comme collection d'utilitaires quotidiens. Que vous soyez professionnel ou utilisateur occasionnel, les Favoris vous aident à utiliser les outils en ligne plus efficacement en créant votre collection personnelle."
      },
      tutorial: {
        title: "Comment utiliser la fonctionnalité Favoris",
        intro: "Guide étape par étape pour commencer à organiser et gérer vos outils préférés :",
        step1: {
          title: "Étape 1 : Ajouter un outil aux Favoris",
          description: "Lorsque vous naviguez parmi les outils, chaque carte ou page de détail présente une icône en forme d'étoile en haut à droite. Cliquez sur cette icône pour ajouter l'outil à vos Favoris. Une fois ajouté, l'étoile devient jaune, indiquant que l'outil est dans votre liste. Vous pouvez ajouter ou retirer des favoris à tout moment, le système sauvegardant automatiquement vos choix."
        },
        step2: {
          title: "Étape 2 : Accéder à vos Favoris",
          description: "Pour voir tous vos outils favoris, cliquez sur le lien 'Favoris' dans la barre de navigation ou le menu latéral. Cela ouvre la page de vos Favoris. Vous pouvez aussi accéder rapidement à vos derniers ajouts via la section 'Mes favoris' de la page d'accueil, avec un lien 'Voir tout' menant à la page complète."
        },
        step3: {
          title: "Étape 3 : Gérer vos outils favoris",
          description: "Sur la page Favoris, vous pouvez consulter, utiliser et gérer votre collection. Chaque entrée dispose d'un bouton de suppression (icône poubelle) en haut à droite. Cliquez sur le nom ou la description d'un outil pour l'utiliser directement. La liste se sauvegarde automatiquement et reste disponible lors de vos prochaines visites."
        },
        step4: {
          title: "Étape 4 : Comprendre les limites du stockage local",
          description: "La fonctionnalité Favoris utilise le localStorage de votre navigateur, avec quelques limitations : 1) Les données ne sont sauvegardées que sur le navigateur actuel, sans synchronisation multi-appareils ; 2) Si vous effacez les données du navigateur ou utilisez le mode navigation privée, vos favoris peuvent être perdus ; 3) Le localStorage a généralement une limite de 5-10MB, largement suffisante pour les favoris ; 4) Les listes de favoris sont indépendantes entre navigateurs et appareils."
        }
      },
      faq: {
        title: "Questions fréquentes",
        q1: "Où sont stockées les données des favoris ? Sont-elles synchronisées entre appareils ?",
        a1: "<b>Les données des favoris sont stockées localement dans votre navigateur</b>, via l'API localStorage. Cela signifie que votre liste n'est pas envoyée sur nos serveurs et ne se synchronise pas automatiquement entre appareils ou navigateurs. Cette approche présente deux avantages majeurs : protection de votre vie privée (les données restent sur votre appareil) et simplicité d'utilisation (pas besoin de compte). Cependant, cela implique que vous devrez recréer votre liste si vous changez d'appareil ou de navigateur. Comme la plupart des utilisateurs accèdent aux outils depuis un appareil fixe, ce compromis est raisonnable.",
        
        q2: "Combien d'outils puis-je ajouter à mes favoris ? Y a-t-il une limite ?",
        a2: "<b>Le nombre d'outils favoris est théoriquement limité par le localStorage</b>, mais cette limite est généralement de 5-10MB, bien suffisante. En estimant 1KB par outil, vous pouvez en stocker plusieurs milliers sans problème. En pratique, la plupart des utilisateurs n'ajoutent pas plus de 100 outils. Si vous êtes un utilisateur intensif, vous pouvez occasionnellement nettoyer votre liste pour garder seulement les outils utiles. Dans de très rares cas de saturation, le navigateur affichera un message d'erreur.",
        
        q3: "Si je supprime les données de mon navigateur, vais-je perdre mes favoris ?",
        a3: "<b>Oui, effacer les données du navigateur (notamment le stockage local ou les cookies) entraînera la perte de vos favoris</b>. De même, en mode navigation privée/incognito, les favoris ne persistent pas après fermeture du navigateur. Pour éviter cela : vous pouvez exclure les données du site lors du nettoyage ; noter vos outils importants avant de changer d'appareil ; éviter d'ajouter des outils cruciaux en mode privé. Si vous utilisez plusieurs appareils ou nettoyez souvent le navigateur, vous pouvez aussi utiliser les marque-pages classiques comme sauvegarde.",
        
        q4: "Pourquoi ne pas proposer un système de compte pour sauvegarder les favoris ?",
        a4: "<b>Nous avons choisi le stockage local plutôt qu'un système de compte pour plusieurs raisons</b> : protection de la vie privée (pas de données personnelles requises) ; simplicité d'utilisation (pas d'inscription, de connexion ou de mot de passe) ; réduction des risques de sécurité (pas de données sensibles à protéger) ; et rapidité du site (pas de synchronisation nécessaire). Bien que la synchronisation multi-appareils soit utile, nous avons privilégié la simplicité, la confidentialité et une expérience sans friction. Dans le futur, nous pourrions proposer un système de compte optionnel pour ceux qui souhaitent synchroniser leurs favoris, tout en conservant l'option locale pour les utilisateurs soucieux de leur vie privée."
      },
      relatedTools: {
        title: "Outils que vous pourriez aimer",
        description: "Découvrez ces outils populaires à ajouter à vos favoris :",
        tool1: {
          name: "Outil de formatage JSON",
          url: "https://www.ufreetools.com/tool/json-formatter",
          description: "Embellissez, compressez et validez des données JSON, avec coloration syntaxique et détection d'erreurs."
        },
        tool2: {
          name: "Générateur de mots de passe",
          url: "https://www.ufreetools.com/tool/password-generator",
          description: "Créez des mots de passe forts, avec personnalisation de la longueur, complexité et types de caractères."
        },
        tool3: {
          name: "Compresseur d'images",
          url: "https://www.ufreetools.com/tool/image-compressor",
          description: "Réduisez la taille des images tout en préservant leur qualité, idéal pour le web et les réseaux sociaux."
        }
      },
      resources: {
        title: "En savoir plus sur le stockage local",
        resource1: {
          name: "Documentation MDN : localStorage",
          url: "https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage",
          description: "Documentation technique détaillée sur l'API localStorage, avec guides d'utilisation."
        },
        resource2: {
          name: "Spécification W3C Web Storage",
          url: "https://www.w3.org/TR/webstorage/",
          description: "Spécification officielle de la technologie Web Storage, détaillant l'implémentation standard de localStorage."
        }
      }
    }
  },
  home: {
    favoritedToolsTitle: 'Mes favoris',
    viewAllFavorites: 'Voir tout',
  },
  featuredIn: "En vedette dans :",
  browserExtensionsDesc: "Obtenez tous les outils en un clic via l'extension",
  addToChrome: "Utiliser Chrome",
  addToFireFox: "Utiliser FireFox",
  addToEdge: "Utiliser Edge",

  share: 'Partager',
  shareTo: 'Partager avec',
  like: 'J\'aime',
  tweet: 'Tweet',
  copyLink: 'Copier le lien',
  copied: 'Copié',
  freeTools: 'Outils gratuits',
  telegram: 'Telegram',
  youtube: 'YouTube',
  line: 'Line',
  qq: 'QQ',
  weibo: 'Weibo',
  defaultTitle: 'UFreeTools - Collection d\'outils gratuits en ligne',
  defaultDescription: 'Découvrez une puissante collection d\'outils gratuits en ligne pour améliorer votre productivité professionnelle ! Inclut des outils de traitement d\'images, des outils de texte, des outils de développement et de nombreuses autres fonctionnalités pratiques.',
  toolShareDescription: 'Je utilise l\'outil {toolName}, qui est un outil gratuit en ligne qui aide à résoudre divers problèmes. Fonctionnalités puissantes, interface propre et entièrement gratuit à utiliser ! Essayez-le maintenant !',
  categoryShareDescription: 'Explorez des outils pratiques dans la catégorie {categoryName}, qui sont entièrement gratuits et faciles à utiliser. Inclut plusieurs outils professionnels pour améliorer votre productivité.',
  homeShareDescription: 'UFreeTools - Collection d\'outils gratuits en ligne, qui inclut des outils de traitement d\'images, des outils de texte, des outils de développement, des outils de design et de nombreuses autres fonctionnalités pratiques. Tous les outils sont entièrement gratuits et ne nécessitent pas de compte.',
  searchShareDescription: 'Résultats de recherche pour "{searchQuery}" dans UFreeTools, découvrez des outils pratiques gratuits en ligne !',
};