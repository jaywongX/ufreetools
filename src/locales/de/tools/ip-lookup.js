export default {
  name: 'IP-Adressabfrage-Tool',
  description: 'Erhalten Sie detaillierte Informationen zu IP-Adressen, einschließlich Standort und Netzwerkdetails',

  input: {
    title: 'IP-Adressabfrage',
    ipAddress: 'IP-Adresse',
    ipPlaceholder: 'IP-Adresse eingeben (z.B.: 8.8.8.8)',
    hostname: 'Hostname',
    hostnamePlaceholder: 'Oder Hostname eingeben (z.B.: google.com)',
    options: 'Abfrageoptionen',
    includeGeolocation: 'Geolocation einschließen',
    includeASN: 'ASN-Informationen einschließen',
    includeDomains: 'Zugehörige Domains einschließen',
    includeAbuse: 'Missbrauchskontakt einschließen',
    myIP: 'Meine IP-Adresse verwenden'
  },

  actions: {
    lookup: 'IP abfragen',
    clear: 'Ergebnisse löschen',
    copyIP: 'IP kopieren',
    copyAll: 'Alle Informationen kopieren',
    export: 'Ergebnisse exportieren'
  },

  results: {
    title: 'IP-Informationen',
    noResults: 'Keine Informationen zum Anzeigen',
    error: 'Fehler: {message}',
    unknown: 'Unbekannt',
    queryTime: 'Abfragezeit',
    dataSource: 'Datenquelle',
    general: {
      title: 'Allgemeine Informationen',
      ipAddress: 'IP-Adresse',
      hostname: 'Hostname',
      type: 'Typ',
      ipv4: 'IPv4',
      ipv6: 'IPv6',
      isPublic: 'Öffentliche IP',
      yes: 'Ja',
      no: 'Nein',
      reverse: 'Reverse-DNS'
    },
    location: {
      title: 'Standort',
      country: 'Land',
      region: 'Region',
      city: 'Stadt',
      postalCode: 'Postleitzahl',
      timezone: 'Zeitzone',
      coordinates: 'Koordinaten',
      latitude: 'Breitengrad',
      longitude: 'Längengrad'
    },
    network: {
      title: 'Netzwerk',
      asn: 'ASN',
      organization: 'Organisation',
      isp: 'Internetdienstanbieter',
      usage: 'Nutzungstyp',
      domain: 'Domain',
      route: 'Route',
      subnet: 'Subnetz',
      netmask: 'Netzmaske',
      cidr: 'CIDR-Notation'
    },
    security: {
      title: 'Sicherheitsinformationen',
      threat: 'Bedrohungserkennung',
      isTor: 'Tor-Ausgangsknoten',
      isProxy: 'Proxy',
      isVpn: 'VPN',
      isAttacker: 'Bekannter Angreifer',
      isAbuser: 'Bekannter Missbraucher',
      threatLevel: 'Bedrohungsstufe',
      confidenceScore: 'Konfidenzscore',
      abuseReports: 'Missbrauchsmeldungen',
      lastReported: 'Letzte Meldung'
    },
    additional: {
      title: 'Zusätzliche Informationen',
      mobile: 'Mobilfunknetz',
      hosting: 'Hosting-Anbieter',
      associated: 'Zugehörige Domains',
      abuseContact: 'Missbrauchskontakt'
    }
  },

  map: {
    title: 'Standortkarte',
    noLocation: 'Keine Standortdaten verfügbar',
    viewLarger: 'Größere Karte anzeigen'
  },

  messages: {
    lookingUp: 'Suche nach Informationen für {query}...',
    copied: 'In die Zwischenablage kopiert',
    exported: 'Ergebnisse erfolgreich exportiert',
    invalidIP: 'Ungültige IP-Adresse',
    invalidHostname: 'Ungültiger Hostname',
    publicIPOnly: 'Dieses Tool funktioniert nur mit öffentlichen IP-Adressen',
    rateLimited: 'Rate-Limit überschritten. Bitte versuchen Sie es später erneut.',
    historyCleared: 'Verlauf gelöscht'
  },

  history: {
    title: 'Suchverlauf',
    clear: 'Verlauf löschen'
  }
};