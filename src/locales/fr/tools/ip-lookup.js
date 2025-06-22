export default {
    name: 'Outil de recherche d\'adresse IP',
    description: 'Obtenez des informations détaillées sur une adresse IP, y compris sa localisation et les détails du réseau',
    input: {
      title: 'Recherche d\'adresse IP',
      ipAddress: 'Adresse IP',
      ipPlaceholder: 'Entrez une adresse IP (ex : 8.8.8.8)',
      hostname: 'Nom d\'hôte',
      hostnamePlaceholder: 'Ou entrez un nom d\'hôte (ex : google.com)',
      options: 'Options de recherche',
      includeGeolocation: 'Inclure la géolocalisation',
      includeASN: 'Inclure les informations ASN',
      includeDomains: 'Inclure les domaines associés',
      includeAbuse: 'Inclure les contacts pour abus',
      myIP: 'Utiliser mon adresse IP'
    },
    actions: {
      lookup: 'Rechercher IP',
      clear: 'Effacer les résultats',
      copyIP: 'Copier l\'IP',
      copyAll: 'Copier toutes les informations',
      export: 'Exporter les résultats'
    },
    results: {
      title: 'Informations IP',
      noResults: 'Aucune information à afficher',
      error: 'Erreur : {message}',
      unknown: 'Inconnu',
      queryTime: 'Heure de la requête',
      dataSource: 'Source des données',
      general: {
        title: 'Informations générales',
        ipAddress: 'Adresse IP',
        hostname: 'Nom d\'hôte',
        type: 'Type',
        ipv4: 'IPv4',
        ipv6: 'IPv6',
        isPublic: 'IP publique',
        yes: 'Oui',
        no: 'Non',
        reverse: 'DNS inverse'
      },
      location: {
        title: 'Localisation',
        country: 'Pays',
        region: 'Région',
        city: 'Ville',
        postalCode: 'Code postal',
        timezone: 'Fuseau horaire',
        coordinates: 'Coordonnées',
        latitude: 'Latitude',
        longitude: 'Longitude'
      },
      network: {
        title: 'Réseau',
        asn: 'ASN',
        organization: 'Organisation',
        isp: 'Fournisseur d\'accès Internet',
        usage: 'Type d\'utilisation',
        domain: 'Domaine',
        route: 'Route',
        subnet: 'Sous-réseau',
        netmask: 'Masque de réseau',
        cidr: 'Notation CIDR'
      },
      security: {
        title: 'Informations de sécurité',
        threat: 'Détection de menace',
        isTor: 'Nœud de sortie Tor',
        isProxy: 'Proxy',
        isVpn: 'VPN',
        isAttacker: 'Attaquant connu',
        isAbuser: 'Auteur d\'abus connu',
        threatLevel: 'Niveau de menace',
        confidenceScore: 'Score de confiance',
        abuseReports: 'Signalements d\'abus',
        lastReported: 'Dernier signalement'
      },
      additional: {
        title: 'Informations supplémentaires',
        mobile: 'Réseau mobile',
        hosting: 'Fournisseur d\'hébergement',
        associated: 'Domaines associés',
        abuseContact: 'Contact pour abus'
      }
    },
    map: {
      title: 'Carte de localisation',
      noLocation: 'Aucune donnée de localisation disponible',
      viewLarger: 'Voir une carte plus grande'
    },
    messages: {
      lookingUp: 'Recherche d\'informations pour {query}...',
      copied: 'Copié dans le presse-papiers',
      exported: 'Résultats exportés avec succès',
      invalidIP: 'Adresse IP invalide',
      invalidHostname: 'Nom d\'hôte invalide',
      publicIPOnly: 'Cet outil fonctionne uniquement avec les adresses IP publiques',
      rateLimited: 'Limite de requêtes dépassée. Veuillez réessayer plus tard.',
      historyCleared: 'Historique effacé'
    },
    history: {
      title: 'Historique de recherche',
      clear: 'Effacer l\'historique'
    },
    article: {
      title: "Guide complet de recherche d'adresse IP - Traçage géographique des IP",
      intro: {
        title: "Qu'est-ce qu'un outil de recherche IP et pourquoi en avez-vous besoin ?",
        p1: "L'<b>outil de recherche d'adresse IP</b> est un utilitaire important qui vous permet de découvrir des informations détaillées sur n'importe quelle adresse IP sur Internet. Notre outil fournit une analyse complète incluant des informations de géolocalisation (pays, région, ville), des détails réseau (FAI, organisation) et des informations de sécurité. Pour les administrateurs réseau, les professionnels de la cybersécurité et les utilisateurs Internet ordinaires, la fonction de recherche IP est essentielle pour identifier et résoudre divers problèmes réseau.",
        p2: "La <b>géolocalisation précise par IP</b> a de nombreuses applications pratiques dans différents domaines. De la personnalisation de contenu à la détection de fraude, les informations IP alimentent de nombreux systèmes en ligne critiques. Notre outil utilise plusieurs bases de données fiables pour fournir des résultats précis pour les adresses IPv4 et IPv6, vous aidant à comprendre exactement l'origine et la destination des communications numériques.",
        p3: "Alors que les préoccupations concernant la <b>vie privée et la sécurité en ligne</b> n'ont jamais été aussi fortes, l'accès à un service de recherche IP fiable est plus important que jamais. Que vous résolviez des problèmes réseau, vérifiiez l'emplacement d'un utilisateur ou enquêtiez sur des activités suspectes, notre outil complet de recherche IP fournit les informations dont vous avez besoin dans un format intuitif et facile à comprendre."
      },
      useCases: {
        title: "Cas d'utilisation pratiques de la recherche d'adresse IP",
        case1: "<b>Enquêtes de cybersécurité</b> : Les équipes de sécurité utilisent la recherche IP pour enquêter sur les tentatives de connexion suspectes, identifier les menaces potentielles et tracer l'origine des activités malveillantes. Lorsqu'un trafic suspect apparaît dans les journaux du serveur, la recherche IP peut rapidement déterminer s'il provient d'une zone à risque connu ou d'un réseau associé à des activités malveillantes.",
        case2: "<b>Localisation de contenu et géociblage</b> : Les entreprises en ligne s'appuient sur une géolocalisation IP précise pour fournir du contenu régional, appliquer des restrictions basées sur la localisation et personnaliser l'expérience utilisateur. Cela garantit que les clients reçoivent la langue, la devise et le contenu appropriés en fonction de leur emplacement géographique.",
        case3: "<b>Dépannage réseau</b> : Les professionnels de l'informatique utilisent souvent des outils de recherche IP pour diagnostiquer les problèmes de connexion, vérifier les configurations de routage et identifier les goulots d'étranglement réseau. Lorsqu'un utilisateur signale un problème de connexion, vérifier le chemin géographique du trafic réseau peut aider à déterminer où se produit la latence ou la panne.",
        case4: "<b>Mesures antifraude</b> : Les institutions financières et les plateformes de commerce électronique utilisent les données IP pour détecter les fraudes potentielles en identifiant les écarts entre l'emplacement déclaré par l'utilisateur et son emplacement IP réel. Cela aide à prévenir les transactions non autorisées et le piratage de compte.",
        case5: "<b>Conformité et restrictions géographiques</b> : De nombreux services nécessitent des restrictions d'accès basées sur la localisation en raison d'accords de licence ou d'exigences légales. La recherche IP fournit les données nécessaires pour appliquer efficacement ces restrictions tout en minimisant les faux positifs."
      },
      tutorial: {
        title: "Comment utiliser notre outil de recherche d'adresse IP",
        intro: "Notre outil de recherche IP est conçu pour être intuitif et puissant. Suivez ces étapes simples pour obtenir des informations complètes sur n'importe quelle adresse IP :",
        step1: {
          title: "Étape 1 : Entrez une adresse IP ou un nom d'hôte",
          description: "Commencez par entrer une adresse IP (par exemple 8.8.8.8) ou un nom d'hôte (par exemple google.com) dans le champ de saisie. Si vous souhaitez vérifier votre propre adresse IP, cliquez simplement sur le bouton \"Utiliser mon adresse IP\" et notre outil détectera et entrera automatiquement votre adresse IP publique actuelle."
        },
        step2: {
          title: "Étape 2 : Configurez les options de recherche",
          description: "Personnalisez votre recherche en sélectionnant les informations que vous souhaitez récupérer. Vous pouvez choisir d'inclure des données de géolocalisation, des informations ASN, des domaines associés et des contacts pour abus. Pour la plupart des utilisateurs, nous recommandons de garder toutes les options activées pour obtenir les résultats les plus complets. Si vous n'êtes intéressé que par des informations spécifiques, vous pouvez désélectionner les autres options pour simplifier les résultats."
        },
        step3: {
          title: "Étape 3 : Lancez la recherche",
          description: "Cliquez sur le bouton \"Rechercher IP\" pour lancer le processus de recherche. Ensuite, notre outil contactera plusieurs bases de données IP fiables pour recueillir les informations les plus précises et les plus récentes disponibles. Cela ne prend généralement que quelques secondes, mais peut varier en fonction de la vitesse de votre connexion et de la charge actuelle de nos serveurs."
        },
        step4: {
          title: "Étape 4 : Analysez les résultats",
          description: "Consultez les informations détaillées affichées dans la section des résultats. Les données sont organisées en catégories logiques pour une navigation facile : informations de base (type IP, nom d'hôte), localisation (pays, ville, coordonnées), réseau (FAI, organisation, ASN) et informations de sécurité (détection de menace, état proxy/VPN). Vous pouvez utiliser le bouton \"Copier toutes les informations\" pour enregistrer les résultats complets ou les exporter pour une analyse plus approfondie."
        }
      },
      ipTypes: {
        title: "Comprendre les différents types d'adresses IP",
        intro: "Les adresses IP se présentent sous différents types et formats, chacun ayant un usage spécifique dans les communications réseau. Voici les principaux types d'adresses IP que vous devez connaître :",
        public: {
          title: "Adresses IP publiques",
          description: "Les <b>adresses IP publiques</b> sont attribuées par les fournisseurs d'accès Internet (FAI) et sont routables globalement sur Internet. Ces adresses sont uniques sur l'ensemble d'Internet et permettent aux systèmes externes de communiquer avec votre réseau. Lorsque les sites Web suivent les visiteurs ou que les services appliquent des restrictions géographiques, ils utilisent des adresses IP publiques. Notre outil de recherche IP fournit principalement des détails pour les IP publiques, car elles contiennent des informations géographiques et réseau significatives."
        },
        private: {
          title: "Adresses IP privées",
          description: "Les <b>adresses IP privées</b> sont utilisées dans les réseaux locaux et suivent des plages réservées spécifiques (comme 192.168.x.x, 10.x.x.x ou 172.16.x.x). Ces adresses ne sont pas routables sur Internet et servent à identifier les appareils au sein d'un réseau domestique ou d'entreprise. Lorsque vous avez plusieurs appareils connectés à un Wi-Fi domestique, chaque appareil obtient une adresse IP privée tout en partageant une seule adresse IP publique fournie par le FAI. Notre outil indiquera si une adresse est privée, mais la géolocalisation détaillée ne s'applique pas aux IP privées."
        },
        ipv4: {
          title: "Adresses IPv4",
          description: "Les <b>adresses IPv4</b> sont le format original d'adresse IP, composé de quatre nombres séparés par des points (par exemple 192.0.2.1), chaque nombre allant de 0 à 255. Avec environ 4,3 milliards d'adresses possibles, IPv4 reste le protocole le plus utilisé. Cependant, en raison de l'explosion des appareils connectés à Internet, les adresses IPv4 sont devenues rares, conduisant au développement d'IPv6. Notre outil fournit des informations complètes pour les adresses IPv4, y compris une géolocalisation précise et des détails réseau."
        },
        ipv6: {
          title: "Adresses IPv6",
          description: "Les <b>adresses IPv6</b> représentent la nouvelle génération d'adressage IP, utilisant un espace d'adressage beaucoup plus grand, avec un format de huit groupes de chiffres hexadécimaux séparés par des deux-points (par exemple 2001:0db8:85a3:0000:0000:8a2e:0370:7334). Avec 340 undécillions d'adresses uniques disponibles, IPv6 garantit que nous ne manquerons pas d'adresses dans un avenir prévisible. Notre outil prend entièrement en charge la recherche IPv6, fournissant les mêmes informations détaillées que pour les adresses IPv4, vous aidant à vous préparer à cette transition continue vers cette norme plus récente."
        }
      },
      faq: {
        title: "Foire aux questions sur la recherche IP",
        q1: "Quelle est la précision de la géolocalisation par IP ?",
        a1: "La précision de la géolocalisation par IP dépend de plusieurs facteurs. Pour la <b>détection au niveau du pays</b>, le taux de précision est généralement très élevé (95-99%). Cependant, pour une précision au niveau de la ville, le taux varie entre 50% et 80% selon la région et les données disponibles. La géolocalisation est généralement plus précise dans les zones urbaines densément peuplées et dans les pays avec une infrastructure Internet bien développée.<br><br>Plusieurs facteurs influencent la précision :<br>• La réaffectation d'adresses IP par les FAI<br>• L'utilisation de proxy, VPN ou du réseau Tor<br>• Les réseaux d'entreprise avec des sorties Internet centralisées<br>• Les réseaux mobiles où une adresse IP peut couvrir une grande zone géographique<br><br>Notre outil de recherche IP combine plusieurs bases de données fiables pour fournir les résultats les plus précis possibles, mais il est important de comprendre que la géolocalisation IP doit être considérée comme une approximation plutôt que comme un positionnement précis de type GPS. Pour les applications nécessitant une grande précision, la géolocalisation IP doit être combinée avec d'autres méthodes de vérification.",
        
        q2: "La recherche IP peut-elle détecter les VPN et les proxy ?",
        a2: "Notre outil de recherche IP peut détecter de nombreux <b>VPN, proxy et services d'anonymisation</b> avec une précision raisonnable. La détection s'effectue en comparant l'adresse IP avec des bases de données de serveurs VPN, de services proxy et de nœuds de sortie Tor connus. De plus, l'outil analyse divers indicateurs techniques suggérant l'utilisation d'un proxy, comme les modèles de ports, les empreintes d'hébergement et les caractéristiques réseau.<br><br>Cependant, il est important de comprendre ses limites :<br>• Les nouveaux VPN ou les petits services peuvent ne pas encore être inclus dans les bases de données de détection<br>• Les proxy privés ou personnalisés peuvent être plus difficiles à détecter<br>• Certains services VPN de haute qualité s'efforcent activement de ressembler à des connexions ordinaires<br>• La précision de la détection varie selon les régions et les fournisseurs<br><br>Lorsque notre outil identifie qu'une connexion passe probablement par un VPN ou un proxy, il l'indique dans la section des informations de sécurité avec un score de confiance. Ceci est particulièrement utile pour les applications de sécurité, les réseaux de diffusion de contenu et les services nécessitant l'application de restrictions géographiques.",
        
        q3: "Est-il légal de rechercher l'adresse IP de quelqu'un d'autre ?",
        a3: "Dans la plupart des juridictions, la recherche d'informations publiquement disponibles sur une adresse IP est généralement <b>légale</b>, similaire à la recherche du propriétaire d'un nom de domaine ou d'un numéro de téléphone dans un annuaire public. Notre outil de recherche IP n'accède qu'aux informations disponibles publiquement via des bases de données légitimes.<br><br>Cependant, il existe des considérations éthiques et juridiques importantes :<br><br>• Ces informations doivent être utilisées à des fins légitimes, comme le dépannage réseau, l'analyse de sécurité ou la prévention de la fraude<br>• La recherche IP seule ne fournit pas d'informations personnelles identifiables sur la personne utilisant cette adresse<br>• L'utilisation des données IP pour harcèlement, suivi ou autres activités malveillantes est illégale dans la plupart des pays<br>• Certaines juridictions ont des réglementations spécifiques concernant les données d'adresse IP dans le cadre de lois plus larges sur la vie privée (comme le GDPR en Europe)<br><br>Pour les applications commerciales, il est recommandé d'inclure des informations sur la collecte de données IP dans votre politique de confidentialité et de vous assurer que vous avez une base juridique appropriée pour traiter ces informations. Notre outil est conçu pour des cas d'utilisation légaux et inclut des limites de taux pour prévenir les schémas d'abus.",
        
        q4: "Pourquoi une adresse IP peut-elle afficher un mauvais emplacement ?",
        a4: "Plusieurs raisons peuvent expliquer pourquoi une adresse IP affiche un emplacement <b>inattendu ou incorrect</b> :<br><br>1. <b>Architecture réseau du FAI</b> : Votre fournisseur d'accès Internet peut router le trafic via des points centraux qui peuvent être situés dans une ville ou un pays différent de votre emplacement réel.<br><br>2. <b>Réseaux d'entreprise</b> : Les entreprises acheminent souvent leur trafic Internet via leur siège social ou des centres de données spécifiques, faisant apparaître toutes les connexions des employés comme provenant de cet emplacement, quel que soit leur lieu de travail réel.<br><br>3. <b>VPN et proxy</b> : Lorsque vous utilisez ces services, votre emplacement apparent correspondra à celui du serveur de sortie, et non à votre emplacement physique.<br><br>4. <b>Réseaux mobiles</b> : Les adresses IP cellulaires sont généralement mappées sur des passerelles centrales qui peuvent être éloignées de l'emplacement réel de l'utilisateur.<br><br>5. <b>Limites des bases de données</b> : Les bases de données de géolocalisation IP sont mises à jour régulièrement mais peuvent contenir des informations obsolètes, surtout lorsque les FAI réaffectent des blocs d'IP.<br><br>6. <b>Machines virtuelles et services cloud</b> : Celles-ci utilisent généralement des adresses IP enregistrées auprès de l'emplacement du fournisseur cloud plutôt que de l'utilisateur.<br><br>Pour obtenir les résultats les plus précis, notre outil croise les références de plusieurs bases de données IP, mais certaines divergences peuvent encore se produire en raison des limites inhérentes à la géolocalisation par IP.",
        
        q5: "À quelle fréquence l'emplacement d'une adresse IP change-t-il ?",
        a5: "La <b>fréquence de changement d'emplacement d'une adresse IP</b> dépend de plusieurs facteurs :<br><br>1. <b>IP dynamique vs statique</b> : La plupart des connexions résidentielles utilisent des adresses IP dynamiques qui peuvent changer régulièrement - de quotidiennement à mensuellement, ou lorsque le routeur se reconnecte. Les connexions commerciales et serveurs utilisent généralement des IP statiques qui changent rarement.<br><br>2. <b>Politique du FAI</b> : Différents fournisseurs d'accès Internet ont différentes politiques concernant la rotation et la réaffectation des IP. Certains FAI changent fréquemment les IP des clients, tandis que d'autres peuvent les maintenir relativement stables pendant des mois.<br><br>3. <b>Réaffectation de blocs IP</b> : Occasionnellement, de grands blocs d'adresses IP sont réaffectés entre organisations ou régions, ce qui peut entraîner des changements d'emplacement plus significatifs.<br><br>4. <b>Connexions mobiles</b> : Les adresses IP des appareils mobiles peuvent changer fréquemment, surtout lors du passage entre réseaux cellulaires et Wi-Fi, ou en se déplaçant entre différentes tours de réseau mobile.<br><br>En raison de ces facteurs, les données de géolocalisation IP doivent être considérées comme un instantané potentiellement obsolète. Pour les applications nécessitant une vérification continue de l'emplacement, il est recommandé de vérifier régulièrement les informations IP. Nos sources de bases de données sont fréquemment mises à jour pour s'adapter à ces changements, mais il est toujours possible de rencontrer une adresse récemment réaffectée."
      },
      relatedTools: {
        title: "Explorez nos autres outils réseau",
        description: "Améliorez votre analyse réseau avec ces outils complémentaires :",
        tool1: {
          name: "Vérificateur de sécurité des en-têtes HTTP",
          url: "https://www.ufreetools.com/tool/http-header-security-checker",
          description: "Analyse et évalue la sécurité des en-têtes de réponse HTTP."
        },
        tool2: {
          name: "Éditeur d'en-têtes de requête",
          url: "https://www.ufreetools.com/tool/request-header-editor",
          description: "Crée, modifie et teste les en-têtes de requête HTTP."
        },
        tool3: {
          name: "Détecteur de proxy HTTP",
          url: "https://www.ufreetools.com/tool/http-proxy-detector",
          description: "Détecte si votre connexion utilise un proxy HTTP et analyse les en-têtes liés au proxy pour la vérification de sécurité."
        },
        tool4: {
          name: "Analyseur de paramètres URL",
          url: "https://www.ufreetools.com/tool/url-params-parser",
          description: "Analyse, examine et manipule les paramètres URL et les chaînes de requête."
        },
      },
      resources: {
        title: "Ressources officielles sur l'adressage IP",
        resource1: {
          name: "IANA (Internet Assigned Numbers Authority)",
          url: "https://www.iana.org/numbers",
          description: "L'organisme officiel de coordination mondiale des systèmes d'adressage IP, fournissant des informations faisant autorité sur les allocations d'adresses."
        },
        resource2: {
          name: "Registres Internet régionaux (RIR)",
          url: "https://www.nro.net/about/rirs",
          description: "Organisations responsables de l'allocation de blocs d'adresses IP dans des régions géographiques spécifiques, maintenant des bases de données d'enregistrement officielles."
        },
        resource3: {
          name: "RFC 8890 - Internet est pour les utilisateurs finaux",
          url: "https://datatracker.ietf.org/doc/html/rfc8890",
          description: "Un document important de l'IETF discutant des principes d'adressage Internet et de leur relation avec la vie privée et les droits des utilisateurs finaux."
        }
      }
    }
  }