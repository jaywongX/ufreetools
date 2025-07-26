export default {
    name: 'CORS-Konfigurationsgenerator',
    description: 'Schnelle Erstellung von Cross-Origin Resource Sharing (CORS)-Konfigurationen mit Unterstützung für verschiedene Serverumgebungen',

    options: {
        title: 'CORS-Optionen',
        allowedOrigins: {
            title: 'Erlaubte Ursprungsdomänen (Access-Control-Allow-Origin)',
            allowAll: 'Alle Ursprünge erlauben (*) <span class="text-yellow-500 text-xs ml-1">(unsicher, unterstützt keine Credentials)</span>',
            specific: 'Spezifische Domänen angeben (empfohlen)',
            addOrigin: 'Ursprung hinzufügen',
            placeholder: 'Ursprung eingeben (z.B. https://beispiel.de)',
            wildcard: 'Subdomains erlauben (Wildcard)',
            null: 'Null-Ursprung erlauben',
            remove: 'Domäne entfernen'
        },
        allowedMethods: {
            title: 'Erlaubte HTTP-Methoden (Access-Control-Allow-Methods)',
            selectMethods: 'HTTP-Methoden auswählen',
            get: 'GET',
            post: 'POST',
            put: 'PUT',
            delete: 'DELETE',
            patch: 'PATCH',
            head: 'HEAD',
            options: 'OPTIONS'
        },
        allowedHeaders: {
            title: 'Erlaubte Header (Access-Control-Allow-Headers)',
            all: 'Alle Header erlauben (*)',
            specific: 'Nur bestimmte Header',
            addHeader: 'Header hinzufügen',
            headerPlaceholder: 'Header-Name eingeben',
            common: 'Häufige Header',
            custom: 'Benutzerdefinierte Header',
            contentType: 'Content-Type',
            accept: 'Accept',
            authorization: 'Authorization',
            origin: 'Origin',
            xRequestedWith: 'X-Requested-With',
            contentDisposition: 'Content-Disposition',
            remove: 'Header entfernen'
        },
        exposedHeaders: {
            title: 'Freigegebene Response-Header (Access-Control-Expose-Headers)',
            description: 'Header, die für den Browser zugänglich sein sollen',
            addHeader: 'Header hinzufügen',
            headerPlaceholder: 'Header-Name eingeben'
        },
        credentials: {
            title: 'Credentials erlauben (Access-Control-Allow-Credentials)',
            description: 'Erlaubt die Verwendung von Cookies und Authentifizierungsheadern',
            allow: 'Credentials erlauben',
            warning: 'Kann nur mit spezifischen Ursprüngen verwendet werden, nicht mit Wildcard (*)'
        },
        maxAge: {
            title: 'Preflight-Cache-Dauer (Access-Control-Max-Age)',
            description: 'Cache-Dauer für Preflight-Requests in Sekunden',
            seconds: 'Sekunden',
            default: 'Standard: ',
            recommended: 'Empfohlen: 3600 (1 Stunde)'
        },
        serverType: {
            title: 'Server-Typ',
            apache: 'Apache (.htaccess)',
            nginx: 'Nginx',
            express: 'Express.js',
            springBoot: 'Spring Boot',
            php: 'PHP',
            flask: 'Flask (Python)',
            django: 'Django',
            rails: 'Ruby on Rails',
            aws: 'AWS S3/CloudFront',
            azure: 'Azure',
            iis: 'IIS (web.config)',
            jetty: 'Jetty',
            headers: 'HTTP-Header'
        }
    },

    output: {
        title: 'Generierte Header',
        instructions: 'Fügen Sie diese Header zu Ihren Server-Responses hinzu:',
        copy: 'Header kopieren',
        test: 'Header testen',
        downloadConfig: 'Konfiguration herunterladen'
    },

    configs: {
        title: 'Konfigurationsbeispiele',
        nginx: 'Nginx',
        apache: 'Apache (.htaccess)',
        express: 'Express.js',
        springBoot: 'Spring Boot',
        php: 'PHP',
        flask: 'Flask (Python)',
        django: 'Django',
        rails: 'Ruby on Rails',
        aws: 'AWS S3/CloudFront',
        azure: 'Azure',
        iis: 'IIS Web.config'
    },

    testing: {
        title: 'CORS-Test',
        description: 'Testen Sie, ob Ihre CORS-Konfiguration korrekt funktioniert',
        originUrl: 'Ursprungs-URL',
        targetUrl: 'Ziel-URL',
        method: 'Anfragemethode',
        credentials: 'Credentials einschließen',
        headers: 'Benutzerdefinierte Header',
        addHeader: 'Header hinzufügen',
        testButton: 'CORS testen',
        results: 'Testergebnisse',
        success: 'CORS-Test erfolgreich ✓',
        failure: 'CORS-Test fehlgeschlagen ✗✗',
        details: 'Response-Details',
        response: 'Response',
        logs: 'CORS-Protokolle',
        errorDetails: 'Fehlerdetails'
    },

    presets: {
        title: 'Voreinstellungen',
        api: 'API-Server',
        assets: 'Statische Ressourcen (CDN)',
        auth: 'Authentifizierungsdienst',
        publicAccess: 'Öffentlicher Zugriff',
        restrictive: 'Restriktiv',
        load: 'Voreinstellung laden',
        save: 'Aktuelle als Voreinstellung speichern'
    },

    tips: {
        title: 'CORS-Tipps',
        tip1: 'Cross-Origin Resource Sharing (CORS) ist ein HTTP-Header-basierter Mechanismus, der es einem Server erlaubt, andere Ursprünge (Domänen, Protokolle oder Ports) als seinen eigenen anzugeben, von denen ein Browser Ressourcen laden darf.',
        tip2: 'CORS-Schutz ist eine Sicherheitsfunktion moderner Browser, die verhindert, dass Webseiten Anfragen an Server stellen, die nicht dem gleichen Ursprung angehören, und so Nutzer vor Cross-Site-Request-Forgery-Angriffen schützt.',
        usage: {
            title: 'CORS-Anwendungsfälle:',
            tip1: 'Erlaubt JavaScript-Frontends den Zugriff auf APIs verschiedener Domänen',
            tip2: 'Unterstützt Cross-Origin-Ajax- oder Fetch-Anfragen',
            tip3: 'Ermöglicht Cross-Origin-Zugriff auf Schriftarten, CSS oder andere Ressourcen',
            tip4: 'Konfiguriert die Kommunikation zwischen Diensten in einer Microservice-Architektur',
        },
        safe: 'Sicherheitshinweis: Vermeiden Sie in der Regel die Verwendung des "*"-Wildcards für erlaubte Ursprünge und geben Sie stattdessen explizit die Domänen an, denen Sie vertrauen, um potenzielle Sicherheitsrisiken zu reduzieren.'
    },

    messages: {
        copied: 'Header in die Zwischenablage kopiert',
        configDownloaded: 'Konfiguration heruntergeladen',
        testStarted: 'CORS-Test gestartet',
        testSucceeded: 'CORS-Anfrage erfolgreich',
        testFailed: 'CORS-Anfrage fehlgeschlagen: {error}',
        presetSaved: 'Voreinstellung gespeichert',
        presetLoaded: 'Voreinstellung geladen'
    },

    config: {
        title: 'Konfiguration',
        empty: 'Konfigurieren Sie Optionen, um CORS-Einstellungen zu generieren',
        copied: 'Konfiguration in die Zwischenablage kopiert!',
        copy: 'Kopieren'
    },

    comments: {
        expressMiddleware: "// Express-Middleware verwenden",
        applyGlobalCors: "// CORS-Middleware anwenden",
        applySpecificRoute: "// Oder nur für bestimmte Routen anwenden",
        applyRequest: "// Anfrage verarbeiten",
        apacheAllowedOrigins: "# Erlaubte Domänen",
        apacheAllowedMethods: "# Erlaubte HTTP-Methoden",
        apacheAllowedHeaders: "# Erlaubte HTTP-Header",
        apacheAllowedCredentials: "# Erlaubte Credentials",
        preflightCacheDuration: "# Preflight-Cache-Dauer",
        apacheExposeHeaders: '# Freigegebene Response-Header',
        handlePreflightRequest: "# Preflight-Anfragen verarbeiten",
        nginxConfiguration: "# CORS-Konfiguration\n# Fügen Sie diese Konfiguration zu Ihrem Server- oder Location-Block hinzu",
        nginxAllowedOrigins: "# Erlaubte Domänen",
        nginxAllowedMethods: "# Erlaubte HTTP-Methoden",
        nginxAllowedHeaders: "# Erlaubte HTTP-Header",
        nginxAllowedCredentials: "# Erlaubte Credentials",
        nginxPreflightCacheDuration: "# Preflight-Cache-Dauer",
        nginxExposeHeaders: '# Freigegebene Response-Header',
        nginxHandlePreflight: "# Preflight-Anfragen verarbeiten",
        httpHeadersConfiguration: "# CORS-HTTP-Header-Konfiguration",
        httpAllowedOrigins: "# Erlaubte Domänen",
        httpAllowedMethods: "# Erlaubte HTTP-Methoden",
        httpAllowedHeaders: "# Erlaubte HTTP-Header",
        httpAllowedCredentials: "# Erlaubte Credentials",
        httpPreflightCacheDuration: "# Preflight-Cache-Dauer",
        httpExposeHeaders: '# Freigegebene Response-Header',
    }
};