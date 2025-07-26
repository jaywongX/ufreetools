export default {
  name: 'HTTP-Proxy-Detektor',
  description: 'Erkennt und analysiert HTTP-Proxys und Zwischengeräte in Verbindungen',
  title: 'Frontend-Proxy-Detektor',
  intro: 'Prüft, ob Ihre Netzwerkverbindung einen Proxy verwendet, analysiert X-Forwarded-For und andere proxy-relevante HTTP-Header',

  detection: {
    title: 'Proxy-Erkennung',
    start: 'Erkennung starten',
    detecting: 'Erkennung läuft...',
    stop: 'Erkennung stoppen',
    completed: 'Erkennung abgeschlossen',
    noProxies: 'Keine Proxys erkannt',
    proxiesFound: 'Erkannte Proxys: {count}'
  },

  options: {
    title: 'Erkennungsoptionen',
    testUrl: 'Test-URL',
    urlPlaceholder: 'URL eingeben (Standard: automatisch)',
    testMethod: 'HTTP-Methode',
    get: 'GET',
    head: 'HEAD',
    options: 'OPTIONS',
    timeout: 'Timeout (Sekunden)',
    parallel: 'Parallele Tests',
    techniques: 'Erkennungstechniken',
    headerAnalysis: 'Header-Analyse',
    traceMethod: 'TRACE-Methode',
    viaHeader: 'Via-Header-Prüfung',
    maxForwards: 'Max-Forwards-Test',
    fingerprinting: 'Proxy-Fingerprinting',
    timing: 'Zeitanalyse',
    advanced: 'Erweiterte Optionen',
    apiSelection: 'API auswählen'
  },

  apis: {
    ipify: 'ipify API',
    ipapi: 'IP-API',
    httpbin: 'httpbin'
  },

  results: {
    title: 'Erkennungsergebnisse',
    summary: 'Proxy-Zusammenfassung',
    headers: 'Vollständige Anfrageheader',
    info: 'Proxy-Informationen erklärt',
    detected: 'Proxy erkannt',
    notDetected: 'Kein Proxy erkannt',
    detectedDescription: 'Ihre Anfrage könnte über einen oder mehrere Proxy-Server geleitet worden sein',
    notDetectedDescription: 'Ihre Anfrage scheint direkt auf den Zielserver zugegriffen zu haben',
    clientInfo: 'Client-IP-Informationen',
    remoteIp: 'Remote-IP-Adresse',
    location: 'Geolocation',
    isp: 'ISP-Anbieter',
    proxyHeaders: 'Proxy-relevante Header',
    details: 'Detaillierte Ergebnisse',
    proxy: 'Proxy',
    type: 'Typ',
    ip: 'IP-Adresse',
    software: 'Software',
    confidence: 'Zuverlässigkeit',
    latency: 'Latenz',
    headers: 'Modifizierte Header',
    fingerprint: 'Fingerabdruck',
    export: 'Ergebnisse exportieren',
    clear: 'Ergebnisse löschen',
    noData: 'Keine Daten verfügbar',
    originalRequest: 'Originalanfrage',
    modifiedRequest: 'Modifizierte Anfrage',
    proxyChain: 'Proxy-Kette',
    server: 'Server',
    notSet: 'Nicht gesetzt'
  },

  types: {
    forward: 'Forward-Proxy',
    reverse: 'Reverse-Proxy',
    transparent: 'Transparenter Proxy',
    anonymous: 'Anonymer Proxy',
    elite: 'Elite-Proxy',
    caching: 'Cache-Proxy',
    gateway: 'Gateway',
    loadBalancer: 'Load Balancer',
    cdn: 'CDN',
    corporate: 'Unternehmens-Proxy',
    unknown: 'Unbekannter Typ'
  },

  headers: {
    title: 'Header-Analyse',
    original: 'Originalheader',
    modified: 'Modifizierte Header',
    added: 'Hinzugefügte Header',
    removed: 'Entfernte Header',
    changed: 'Geänderte Header',
    suspicious: 'Verdächtige Header',
    select: 'Zu analysierende Header auswählen',
    name: 'Header-Name',
    value: 'Wert',
    all: 'Alle HTTP-Anfrageheader',
    notFound: 'Dieser Header wurde nicht gefunden'
  },

  details: {
    title: 'Proxy-Details',
    software: 'Software',
    version: 'Version',
    features: 'Funktionen',
    modifications: 'Modifikationen',
    behavior: 'Verhalten',
    security: 'Sicherheitsauswirkungen',
    recommendations: 'Empfehlungen'
  },

  map: {
    title: 'Verbindungsdiagramm',
    client: 'Ihr Client',
    target: 'Zielserver',
    hop: 'Hop {n}',
    direct: 'Direkte Verbindung',
    proxied: 'Proxy-Verbindung',
    unknown: 'Unbekannter Pfad'
  },

  actions: {
    copyHeaders: 'Anfrageheader kopieren',
    copyToClipboard: 'In Zwischenablage kopieren'
  },

  messages: {
    startDetection: 'Proxy-Erkennung wird gestartet...',
    detectionComplete: 'Proxy-Erkennung abgeschlossen',
    error: 'Erkennung fehlgeschlagen: {message}',
    timeout: 'Erkennungs-Timeout',
    exportComplete: 'Ergebnisse erfolgreich exportiert',
    noConnection: 'Verbindung konnte nicht hergestellt werden',
    limitedResults: 'Ergebnisse aufgrund von Einschränkungen begrenzt',
    privateNetwork: 'Privates Netzwerk erkannt',
    publicNetwork: 'Öffentliches Netzwerk erkannt',
    warning: 'Warnung: {message}',
    proxyRemoved: 'Möglicherweise entfernt ein Proxy Erkennungsheader',
    copied: 'Anfrageheader in Zwischenablage kopiert',
    copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren',
    unknown: 'Unbekannter Fehler'
  },

  info: {
    description: 'HTTP-Proxys sind Zwischenserver zwischen Client und Server, die HTTP-Anfragen aus verschiedenen Gründen verarbeiten können. Proxys können von Netzwerkanbietern, Organisationen, Unternehmen oder Einzelpersonen eingerichtet werden.'
  },

  xff: {
    title: 'Was ist X-Forwarded-For?',
    description: 'X-Forwarded-For (XFF) ist ein HTTP-Header-Feld, das die ursprüngliche IP-Adresse eines Clients identifiziert, der über einen HTTP-Proxy oder Load Balancer mit einem Webserver verbunden ist. Wenn eine Anfrage über einen Proxy geht, sieht der Server normalerweise nur die IP-Adresse des Proxy-Servers, während der XFF-Header eine Möglichkeit bietet, die ursprüngliche Client-IP zurückzuverfolgen.',
    notFound: 'X-Forwarded-For-Header nicht gefunden, was darauf hindeutet, dass die Anfrage möglicherweise nicht über einen Proxy geleitet wurde oder der Proxy diesen Header nicht hinzugefügt hat.',
    format: {
      title: 'Format des XFF-Headers',
      description: 'Das Standardformat des XFF-Headers ist eine durch Kommas getrennte Liste von IP-Adressen, wobei die linkeste IP der ursprüngliche Client ist und nachfolgende IPs die durchlaufenen Proxy-Server:'
    },
    related: {
      title: 'Andere proxy-relevante Header',
      forwardedProto: 'Identifiziert das Protokoll (HTTP oder HTTPS), das der Client für die Verbindung zum Proxy verwendet hat',
      forwardedHost: 'Identifiziert den ursprünglichen Hostnamen, den der Client angefordert hat',
      via: 'Zeigt die Proxy-Server an, die die Anfrage und Antwort durchlaufen haben',
      forwarded: 'Neuerer Standard-Header, der Client- und alle Proxy-Informationen enthält'
    },
    importance: {
      title: 'Warum Proxy-Informationen wichtig sind',
      security: 'Sicherheit und Zugriffskontrolle - Die genaue Identifizierung der Client-IP ist wichtig, um Missbrauch zu verhindern und IP-basierte Zugriffskontrollen durchzusetzen',
      logging: 'Protokollierung - Für Audits und Problemdiagnose ist die Protokollierung der echten Client-IP nützlicher als die Proxy-IP',
      geolocation: 'Geolokalisierungsdienste - IP-basierte Geolokalisierungsdienste benötigen die echte Client-IP für genaue Ergebnisse',
      content: 'Inhaltsanpassung - Einige Dienste bieten lokalisierte Inhalte basierend auf dem Benutzerstandort'
    },
    security: {
      title: 'Sicherheitsüberlegungen',
      description: 'Es ist wichtig zu beachten, dass der X-Forwarded-For-Header von Clients gefälscht werden kann. In Umgebungen mit hohen Sicherheitsanforderungen sollten nur XFF-Informationen vertraut werden, die von bekannten Proxy-Servern hinzugefügt wurden, oder andere Methoden zur Überprüfung der Client-IP verwendet werden.'
    }
  },

  privacy: {
    title: 'Datenschutzhinweis',
    description: 'Während der Erkennung werden Ihre IP-Adresse und HTTP-Header-Informationen zur Analyse an Drittanbieter-API-Dienste gesendet. Diese Dienste können diese Informationen sammeln und speichern, um den Dienst bereitzustellen.',
    suggestion: 'Bei Datenschutzbedenken wählen Sie einen anderen API-Anbieter oder erwägen Sie die Verwendung eines VPN-Dienstes.'
  }
};