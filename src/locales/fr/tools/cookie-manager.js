export default {
    name: 'Gestionnaire de Cookies',
    description: 'Afficher, créer, modifier et supprimer les cookies du site actuel',
    
    // Étiquettes des fonctionnalités principales
    currentCookies: 'Cookies actuels',
    createCookie: 'Créer un cookie',
    importExport: 'Importer/Exporter',
    
    // Liste des cookies
    noCookies: 'Aucun cookie pour ce site',
    cookieName: 'Nom',
    cookieValue: 'Valeur',
    cookieDomain: 'Domaine',
    cookiePath: 'Chemin',
    cookieExpires: 'Date d\'expiration',
    cookieSecure: 'Sécurisé (Secure)',
    cookieHttpOnly: 'HttpOnly',
    cookieSameSite: 'SameSite',
    actions: 'Actions',
    edit: 'Modifier',
    delete: 'Supprimer',
    save: 'Enregistrer',
    cancel: 'Annuler',
    refresh: 'Actualiser',
    
    // Formulaire de création/modification
    addCookie: 'Ajouter un cookie',
    editCookie: 'Modifier le cookie',
    required: 'Obligatoire',
    optional: 'Optionnel',
    days: 'jours',
    hours: 'heures',
    minutes: 'minutes',
    cookieCreated: 'Cookie créé',
    cookieUpdated: 'Cookie mis à jour',
    cookieDeleted: 'Cookie supprimé',
    createError: 'Erreur lors de la création',
    updateError: 'Erreur lors de la mise à jour',
    deleteError: 'Erreur lors de la suppression',
    
    // Import/Export
    export: 'Exporter les cookies',
    import: 'Importer des cookies',
    exportAs: 'Exporter en tant que',
    exportSuccess: 'Cookies exportés',
    importSuccess: '{count} cookies importés',
    importError: 'Erreur lors de l\'importation',
    
    // Options de sécurité
    none: 'Aucun',
    strict: 'Strict',
    lax: 'Laxiste',
    
    // Notes et explications
    domainNote: 'Laisser vide pour le domaine actuel',
    pathNote: 'Par défaut "/" (racine)',
    expiresNote: 'Non défini = cookie de session',
    secureNote: 'Uniquement via HTTPS',
    httpOnlyNote: 'Inaccessible en JavaScript',
    sameSiteNote: 'Contrôle des requêtes cross-site',
    
    // Format d'importation
    importFormat: 'Exemple de format :\nname=value; expires=date; path=/; domain=example.com; secure; httpOnly; sameSite=strict',
    jsonFormat: 'Format JSON',
    textFormat: 'Format texte',
    invalidFormat: 'Format invalide',
    
    // Contenu de l'article
    article: {
      title: 'Gestionnaire de Cookies : Comprendre et contrôler les cookies des sites',
      features: {
        title: 'Fonctionnalités et cas d\'utilisation',
        description: 'Notre outil <strong>Gestionnaire de Cookies</strong> offre un contrôle complet des cookies, vous permettant de visualiser, créer, modifier et supprimer les cookies du site actuel. Cet outil puissant vous donne une visibilité et un contrôle total sur les cookies stockés dans votre navigateur, vous aidant à gérer votre vie privée en ligne et à résoudre des problèmes fonctionnels des sites.',
        useCasesTitle: 'Cas d\'utilisation pratiques',
        useCases: {
          items: [
            '<strong>Tests de développement web</strong> : Tester le comportement d\'un site avec différentes configurations de cookies sans modifier manuellement le stockage du navigateur.',
            '<strong>Dépannage de sites</strong> : Diagnostiquer des problèmes de connexion, de session ou autres liés aux cookies en les inspectant et modifiant.',
            '<strong>Gestion de la vie privée</strong> : Visualiser les informations stockées par les sites et supprimer sélectivement les cookies de tracking indésirables.',
            '<strong>Gestion de session</strong> : Créer ou modifier des cookies de session pour tester différents états utilisateur sans reconnexion.',
            '<strong>Tests multi-navigateurs</strong> : Exporter des cookies d\'un navigateur vers un autre pour reproduire le même état de navigation.'
          ]
        }
      },
      faq: {
        title: 'Questions fréquentes',
        items: [
          {
            question: 'Que sont les cookies et pourquoi les sites les utilisent-ils ?',
            answer: 'Les cookies sont de petits fragments de données stockés par les sites dans votre navigateur. Ils servent à mémoriser des informations de connexion, suivre le comportement des utilisateurs, stocker des préférences, maintenir des paniers d\'achat et permettre des expériences personnalisées. Essentiels pour de nombreuses fonctionnalités web modernes, ils peuvent aussi soulever des préoccupations de vie privée lorsqu\'utilisés pour le tracking.'
          },
          {
            question: 'En quoi cet outil diffère-t-il des paramètres de cookies intégrés au navigateur ?',
            answer: 'Alors que les navigateurs offrent une gestion basique des cookies, notre <strong>Gestionnaire de Cookies</strong> fournit un contrôle plus précis. Vous pouvez non seulement voir et supprimer des cookies, mais aussi en créer de nouveaux, modifier les existants, les exporter pour sauvegarde et les importer. Idéal pour les développeurs, testeurs et utilisateurs soucieux de leur vie privée.'
          },
          {
            question: 'Est-il sûr de supprimer des cookies ? Cela affectera-t-il ma navigation ?',
            answer: 'Supprimer des cookies est généralement sûr mais peut affecter votre expérience : déconnexion des sites, perte de préférences ou nécessité de recréer des paniers. Le <strong>Gestionnaire de Cookies</strong> permet une suppression sélective pour un contrôle précis des données conservées ou supprimées.'
          },
          {
            question: 'Que signifient les attributs comme "SameSite" et "HttpOnly" ?',
            answer: 'Les attributs contrôlent le comportement des cookies :<br>- <strong>Secure</strong> : Envoyé uniquement via HTTPS<br>- <strong>HttpOnly</strong> : Inaccessible en JavaScript<br>- <strong>SameSite</strong> : Contrôle l\'envoi cross-site (None, Lax ou Strict)<br>- <strong>Domain</strong> : Spécifie les domaines destinataires<br>- <strong>Path</strong> : Restreint à un chemin spécifique<br>- <strong>Expires</strong> : Définit la date de suppression'
          },
          {
            question: 'Puis-je importer des cookies d\'un autre ordinateur ou navigateur ?',
            answer: 'Oui, la fonction d\'import/export permet de transférer des cookies entre appareils. Exportez vos cookies en JSON ou texte, transférez le fichier, puis importez-le avec l\'outil. Utile pour reproduire des états utilisateur ou transférer des sessions.'
          }
        ]
      },
      guide: {
        title: 'Comment utiliser le Gestionnaire de Cookies',
        step1: {
          title: 'Voir les cookies actuels',
          description: 'L\'onglet "Cookies actuels" affiche tous les cookies du site. La liste montre le nom, la valeur et la date d\'expiration de chaque cookie. Cliquez sur "Modifier" pour plus de détails ou sur "Actualiser" pour mettre à jour la liste.'
        },
        step2: {
          title: 'Créer un nouveau cookie',
          description: 'Cliquez sur "Créer un cookie", remplissez les champs obligatoires (nom et valeur) et les attributs optionnels comme le domaine ou le chemin. Configurez les options de sécurité, puis cliquez sur "Enregistrer" pour créer le cookie.'
        },
        step3: {
          title: 'Modifier un cookie existant',
          description: 'Trouvez le cookie dans la liste et cliquez sur "Modifier". Apportez les changements nécessaires puis cliquez sur "Enregistrer" pour mettre à jour. Notez que cela crée en fait un nouveau cookie avec les attributs mis à jour.'
        },
        step4: {
          title: 'Supprimer un cookie',
          description: 'Trouvez le cookie et cliquez sur "Supprimer". Une confirmation apparaît pour éviter les suppressions accidentelles. Après confirmation, le cookie est immédiatement supprimé et la liste actualisée.'
        },
        step5: {
          title: 'Importer et exporter des cookies',
          description: 'Allez dans "Importer/Exporter". Pour exporter, choisissez JSON (structure) ou texte (compatibilité). Pour importer, collez les données et cliquez sur "Importer". L\'outil confirme le succès et affiche le nombre de cookies importés.'
        }
      },
      conclusion: 'Le <strong>Gestionnaire de Cookies</strong> vous donne un contrôle total sur les cookies, que vous soyez développeur testant des sites, utilisateur soucieux de sa vie privée ou personne résolvant des problèmes de site. En comprenant et gérant activement les cookies, vous améliorez votre expérience de navigation tout en gardant le contrôle de votre vie privée en ligne.'
    }
  };