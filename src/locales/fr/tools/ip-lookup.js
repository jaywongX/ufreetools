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
  }
};