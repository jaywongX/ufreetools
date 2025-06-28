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
    },
    article: {
      title: "IP-Adressabfrage erklärt - Kompletter Leitfaden zur IP-Geolokalisierung",
      intro: {
        title: "Was ist ein IP-Abfrage-Tool und warum braucht man es?",
        p1: "<b>IP-Adressabfrage-Tools</b> sind wichtige Hilfsmittel, mit denen Sie detaillierte Informationen zu jeder IP-Adresse im Internet ermitteln können. Unser IP-Abfrage-Tool bietet eine umfassende Analyse, einschließlich Geolokalisierungsdaten (Land, Region, Stadt), Netzwerkdetails (ISP, Organisation) und Sicherheitsinformationen. Für Netzwerkadministratoren, Cybersicherheitsexperten und normale Internetnutzer ist die IP-Abfragefunktion entscheidend, um verschiedene Netzwerkprobleme zu identifizieren und zu beheben.",
        p2: "<b>Präzise IP-Geolokalisierung</b> hat zahlreiche praktische Anwendungen in verschiedenen Bereichen. Von der Inhaltsanpassung bis zur Betrugserkennung treiben IP-Informationen viele wichtige Online-Systeme an. Unser Tool nutzt mehrere zuverlässige Datenbanken, um genaue Ergebnisse für IPv4- und IPv6-Adressen zu liefern, und hilft Ihnen so, die Herkunft und den Weg digitaler Kommunikation genau zu verstehen.",
        p3: "Da die Besorgnis über <b>Online-Privatsphäre und Sicherheit</b> zunimmt, ist der Zugang zu zuverlässigen IP-Abfragediensten wichtiger denn je. Egal, ob Sie Netzwerkprobleme untersuchen, Benutzerstandorte verifizieren oder verdächtige Aktivitäten untersuchen - unser umfassendes IP-Abfrage-Tool liefert die benötigten Informationen in einem intuitiven, leicht verständlichen Format."
      },
      useCases: {
        title: "Praktische Anwendungsfälle für IP-Adressabfragen",
        case1: "<b>Cybersicherheitsuntersuchungen</b>: Sicherheitsteams nutzen IP-Abfragen, um verdächtige Login-Versuche zu untersuchen, potenzielle Bedrohungen zu identifizieren und die Quelle bösartiger Aktivitäten nachzuverfolgen. Wenn Serverlogs verdächtigen Datenverkehr zeigen, kann eine IP-Abfrage schnell bestimmen, ob dieser aus bekannten Hochrisikoregionen oder mit bösartigen Aktivitäten verbundenen Netzwerken stammt.",
        case2: "<b>Inhaltslokalisierung und Geotargeting</b>: Online-Unternehmen verlassen sich auf genaue IP-Geolokalisierung, um regionsspezifische Inhalte bereitzustellen, standortbasierte Beschränkungen durchzusetzen und das Nutzererlebnis anzupassen. So erhalten Kunden basierend auf ihrem geografischen Standort die passende Sprache, Währung und Inhalte.",
        case3: "<b>Netzwerkfehlerbehebung</b>: IT-Experten verwenden häufig IP-Abfrage-Tools, um Verbindungsprobleme zu diagnostizieren, Routing-Konfigurationen zu überprüfen und Netzwerkengpässe zu identifizieren. Wenn Benutzer über Verbindungsprobleme berichten, kann die Überprüfung des geografischen Pfads des Netzwerkverkehrs helfen, Verzögerungen oder Ausfallstellen zu lokalisieren.",
        case4: "<b>Betrugspräventionsmaßnahmen</b>: Finanzinstitute und E-Commerce-Plattformen nutzen IP-Daten, um potenziellen Betrug zu erkennen, indem sie Diskrepanzen zwischen dem angegebenen und dem tatsächlichen IP-Standort eines Nutzers identifizieren. Dies hilft, unbefugte Transaktionen und Kontodiebstahl zu verhindern.",
        case5: "<b>Compliance und geografische Beschränkungen</b>: Viele Dienste müssen aufgrund von Lizenzvereinbarungen oder gesetzlichen Anforderungen den Zugriff basierend auf dem Standort beschränken. IP-Abfragen liefern die notwendigen Daten, um diese Beschränkungen effektiv umzusetzen und dabei Fehlklassifizierungen zu minimieren."
      },
      tutorial: {
        title: "So verwenden Sie unser IP-Adressabfrage-Tool",
        intro: "Unser IP-Abfrage-Tool ist intuitiv und leistungsstark. Folgen Sie diesen einfachen Schritten, um umfassende Informationen zu jeder IP-Adresse zu erhalten:",
        step1: {
          title: "Schritt 1: IP-Adresse oder Hostname eingeben",
          description: "Geben Sie zunächst eine IP-Adresse (z.B. 8.8.8.8) oder einen Hostnamen (z.B. google.com) in das Eingabefeld ein. Wenn Sie Ihre eigene IP-Adresse überprüfen möchten, klicken Sie einfach auf den Button \"Meine IP-Adresse verwenden\" - unser Tool erkennt und verwendet automatisch Ihre aktuelle öffentliche IP-Adresse."
        },
        step2: {
          title: "Schritt 2: Abfrageoptionen konfigurieren",
          description: "Passen Sie die Suche an, indem Sie auswählen, welche Informationen Sie abrufen möchten. Sie können Geolokalisierungsdaten, ASN-Informationen, zugehörige Domains und Missbrauchskontakte einschließen. Für die meisten Nutzer empfehlen wir, alle Optionen aktiviert zu lassen, um die umfassendsten Ergebnisse zu erhalten. Wenn Sie nur an bestimmten Informationen interessiert sind, können Sie andere Optionen deaktivieren, um die Ergebnisse zu vereinfachen."
        },
        step3: {
          title: "Schritt 3: Abfrage starten",
          description: "Klicken Sie auf den Button \"IP abfragen\", um den Abfrageprozess zu starten. Unser Tool kontaktiert dann mehrere zuverlässige IP-Datenbanken, um die aktuellsten und genauesten verfügbaren Informationen zu sammeln. Dies dauert normalerweise nur Sekunden, kann aber je nach Ihrer Verbindungsgeschwindigkeit und der aktuellen Serverauslastung variieren."
        },
        step4: {
          title: "Schritt 4: Ergebnisse analysieren",
          description: "Überprüfen Sie die im Ergebnisbereich angezeigten detaillierten Informationen. Die Daten sind in logische Kategorien organisiert, um die Navigation zu erleichtern: Allgemeine Informationen (IP-Typ, Hostname), Standort (Land, Stadt, Koordinaten), Netzwerk (ISP, Organisation, ASN) und Sicherheitsinformationen (Bedrohungserkennung, Proxy/VPN-Status). Sie können die vollständigen Ergebnisse mit dem Button \"Alle Informationen kopieren\" speichern oder exportieren, um sie weiter zu analysieren."
        }
      },
      ipTypes: {
        title: "Verschiedene Arten von IP-Adressen verstehen",
        intro: "IP-Adressen gibt es in verschiedenen Typen und Formaten, die jeweils spezifische Zwecke in der Netzwerkkommunikation erfüllen. Hier sind die wichtigsten IP-Adresstypen, die Sie kennen sollten:",
        public: {
          title: "Öffentliche IP-Adressen",
          description: "<b>Öffentliche IP-Adressen</b> sind global routbare Adressen, die von Internetdienstanbietern (ISPs) zugewiesen werden, um Ihr Netzwerk im Internet zu identifizieren. Diese Adressen sind im gesamten Internet eindeutig und ermöglichen es externen Systemen, mit Ihrem Netzwerk zu kommunizieren. Wenn Websites Besucher verfolgen oder Dienste geografische Beschränkungen durchsetzen, verwenden sie öffentliche IP-Adressen. Unser IP-Abfrage-Tool liefert hauptsächlich detaillierte Informationen zu öffentlichen IPs, da diese sinnvolle geografische und Netzwerkinformationen enthalten."
        },
        private: {
          title: "Private IP-Adressen",
          description: "<b>Private IP-Adressen</b> werden in lokalen Netzwerken verwendet und folgen bestimmten reservierten Bereichen (wie 192.168.x.x, 10.x.x.x oder 172.16.x.x). Diese Adressen sind im Internet nicht routbar und dienen zur Identifizierung von Geräten innerhalb von Heim- oder Unternehmensnetzwerken. Wenn mehrere Geräte mit Ihrem Heim-Wi-Fi verbunden sind, erhält jedes eine private IP-Adresse, während sie sich eine einzige öffentliche IP-Adresse Ihres ISPs teilen. Unser Tool zeigt an, ob eine Adresse privat ist, aber detaillierte Geolokalisierung ist für private IPs nicht verfügbar."
        },
        ipv4: {
          title: "IPv4-Adressen",
          description: "<b>IPv4-Adressen</b> sind das ursprüngliche IP-Adressformat, bestehend aus vier durch Punkte getrennten Zahlen (z.B. 192.0.2.1), wobei jede Zahl zwischen 0 und 255 liegt. Mit etwa 4,3 Milliarden möglichen Adressen ist IPv4 immer noch das am häufigsten verwendete Protokoll. Aufgrund der explosionsartigen Zunahme internetfähiger Geräte wurden IPv4-Adressen jedoch knapp, was zur Entwicklung von IPv6 führte. Unser Tool bietet umfassende Informationen zu IPv4-Adressen, einschließlich präziser Geolokalisierung und Netzwerkdetails."
        },
        ipv6: {
          title: "IPv6-Adressen",
          description: "<b>IPv6-Adressen</b> repräsentieren die nächste Generation der IP-Adressierung und verwenden einen größeren Adressraum im Format von acht durch Doppelpunkte getrennten Hexadezimalgruppen (z.B. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). Mit 340 Sextillionen möglichen Adressen stellt IPv6 sicher, dass wir in absehbarer Zukunft keine Adressknappheit erleben werden. Unser Tool unterstützt IPv6-Abfragen vollständig und bietet die gleichen detaillierten Informationen wie für IPv4-Adressen, um Sie auf den anhaltenden Übergang zu diesem neueren Standard vorzubereiten."
        }
      },
      faq: {
        title: "Häufig gestellte Fragen zu IP-Abfragen",
        q1: "Wie genau ist die IP-basierte Geolokalisierung?",
        a1: "Die Genauigkeit der <b>IP-basierten Geolokalisierung</b> hängt von mehreren Faktoren ab. Für die <b>Ländererkennung</b> ist die Genauigkeit typischerweise sehr hoch (95-99%). Für die Genauigkeit auf Stadtebene variiert sie je nach Region und verfügbaren Daten zwischen 50-80%. Die Geolokalisierung ist in dicht besiedelten städtischen Gebieten und Ländern mit gut entwickelter Internetinfrastruktur in der Regel genauer.<br><br>Einige Faktoren, die die Genauigkeit beeinflussen:<br>• Neuverteilung von IP-Adressen durch ISPs<br>• Verwendung von Proxys, VPNs oder Tor-Netzwerken<br>• Unternehmensnetzwerke mit zentralisierten Internetausgängen<br>• Mobilfunk-IP-Adressen, die möglicherweise große geografische Gebiete abdecken<br><br>Unser IP-Abfrage-Tool kombiniert mehrere zuverlässige Datenbanken, um so genaue Ergebnisse wie möglich zu liefern. Es ist jedoch wichtig zu verstehen, dass IP-Geolokalisierung als Näherungswert und nicht als präzise GPS-gestützte Ortung betrachtet werden sollte. Für Anwendungen, die hohe Genauigkeit erfordern, sollte die IP-Geolokalisierung mit anderen Verifizierungsmethoden kombiniert werden.",
        
        q2: "Kann die IP-Abfrage VPNs und Proxys erkennen?",
        a2: "Unser IP-Abfrage-Tool kann viele <b>VPNs, Proxys und Anonymisierungsdienste</b> mit angemessener Genauigkeit erkennen. Die Erkennung erfolgt durch den Abgleich der IP-Adresse mit Datenbanken bekannter VPN-Server, Proxy-Dienste und Tor-Ausgangsknoten. Zusätzlich analysiert das Tool verschiedene technische Indikatoren, die auf Proxy-Nutzung hinweisen, wie Port-Muster, Hosting-Fingerabdrücke und Netzwerkmerkmale.<br><br>Es ist jedoch wichtig, die Grenzen zu verstehen:<br>• Neue oder kleinere VPN-Dienste sind möglicherweise noch nicht in den Erkennungsdatenbanken enthalten<br>• Private oder maßgeschneiderte Proxys sind möglicherweise schwerer zu erkennen<br>• Einige hochwertige VPN-Dienste geben sich bewusst als normale Verbindungen aus<br>• Die Erkennungsgenauigkeit variiert je nach Region und Anbieter<br><br>Wenn unser Tool erkennt, dass eine Verbindung möglicherweise über ein VPN oder einen Proxy erfolgt, wird dies im Sicherheitsinformationsbereich mit einem Konfidenzscore angezeigt. Dies ist besonders nützlich für Sicherheitsanwendungen, Content Delivery Networks und Dienste, die geografische Beschränkungen durchsetzen müssen.",
        
        q3: "Ist es legal, die IP-Adresse einer anderen Person abzufragen?",
        a3: "In den meisten Rechtsordnungen ist das Abfragen öffentlich verfügbarer Informationen zu einer IP-Adresse generell <b>legal</b>, ähnlich wie das Nachschlagen eines Domain-Inhabers oder einer Telefonnummer in einem öffentlichen Verzeichnis. Unser IP-Abfrage-Tool greift nur auf Informationen zu, die über legale Datenbanken öffentlich verfügbar sind.<br><br>Es gibt jedoch wichtige ethische und rechtliche Überlegungen:<br><br>• Diese Informationen sollten für legitime Zwecke wie Netzwerkfehlerbehebung, Sicherheitsanalysen oder Betrugsprävention verwendet werden<br>• IP-Abfragen allein liefern keine personenbezogenen Daten des Nutzers dieser Adresse<br>• Die Verwendung von IP-Daten für Belästigung, Stalking oder andere bösartige Aktivitäten ist in den meisten Ländern illegal<br>• Einige Rechtsordnungen haben spezifische Regelungen für IP-Adressdaten als Teil umfassenderer Datenschutzgesetze (wie die DSGVO in Europa)<br><br>Für kommerzielle Anwendungen wird empfohlen, Informationen zur IP-Datenerfassung in Ihre Datenschutzrichtlinie aufzunehmen und sicherzustellen, dass Sie eine geeignete Rechtsgrundlage für die Verarbeitung dieser Daten haben. Unser Tool ist für legale Anwendungsfälle konzipiert und enthält Rate-Limiting, um Missbrauchsmuster zu verhindern.",
        
        q4: "Warum zeigt eine IP-Adresse möglicherweise einen falschen Standort an?",
        a4: "Es gibt mehrere Gründe, warum eine IP-Adresse einen unerwarteten oder <b>falschen Standort</b> anzeigen könnte:<br><br>1. <b>ISP-Netzwerkarchitektur</b>: Ihr Internetdienstanbieter leitet den Datenverkehr möglicherweise über zentrale Punkte, die sich in einer anderen Stadt oder sogar einem anderen Land als Ihr tatsächlicher Standort befinden können.<br><br>2. <b>Unternehmensnetzwerke</b>: Firmen leiten ihren Internetverkehr oft über den Hauptsitz oder bestimmte Rechenzentren, wodurch alle Mitarbeiterverbindungen von diesem Standort aus erscheinen, unabhängig von ihrem tatsächlichen Arbeitsort.<br><br>3. <b>VPNs und Proxys</b>: Bei Verwendung dieser Dienste erscheint Ihr scheinbarer Standort am Ausgangsserver, nicht an Ihrem physischen Standort.<br><br>4. <b>Mobilfunknetze</b>: Mobilfunk-IP-Adressen werden oft zentralen Gateways zugeordnet, die weit vom tatsächlichen Nutzerstandort entfernt sein können.<br><br>5. <b>Datenbankbeschränkungen</b>: IP-Geolokalisierungsdatenbanken werden regelmäßig aktualisiert, können aber veraltete Informationen enthalten, insbesondere wenn ISPs IP-Blöcke neu zuweisen.<br><br>6. <b>Virtuelle Maschinen und Cloud-Dienste</b>: Diese verwenden häufig IP-Adressen, die auf den Standort des Cloud-Anbieters und nicht des Nutzers registriert sind.<br><br>Um die genauesten Ergebnisse zu erhalten, verknüpft unser Tool mehrere IP-Datenbanken, aber aufgrund der inhärenten Grenzen der IP-Geolokalisierung können dennoch gewisse Abweichungen auftreten.",
        
        q5: "Wie oft ändert sich der Standort einer IP-Adresse?",
        a5: "Die <b>Häufigkeit von Standortänderungen</b> bei IP-Adressen hängt von mehreren Faktoren ab:<br><br>1. <b>Dynamische vs. statische IPs</b>: Die meisten privaten Internetverbindungen verwenden dynamische IP-Adressen, die regelmäßig wechseln können - von täglich bis monatlich oder bei Router-Neustarts. Geschäfts- und Serververbindungen verwenden normalerweise statische IPs, die sich selten ändern.<br><br>2. <b>ISP-Richtlinien</b>: Verschiedene Internetdienstanbieter haben unterschiedliche Richtlinien für IP-Rotation und -Neuverteilung. Einige ISPs ändern Kunden-IPs häufig, während andere sie relativ stabil über Monate halten.<br><br>3. <b>IP-Block-Neuverteilung</b>: Gelegentlich werden große IP-Blöcke zwischen Organisationen oder Regionen neu zugewiesen, was zu signifikanteren Standortänderungen führen kann.<br><br>4. <b>Mobilfunkverbindungen</b>: Die IP-Adressen mobiler Geräte können sich häufig ändern, insbesondere beim Wechsel zwischen Mobilfunknetzen und Wi-Fi oder beim Bewegen zwischen verschiedenen Mobilfunkmasten.<br><br>Aufgrund dieser Faktoren sollten IP-Geolokalisierungsdaten als möglicherweise veraltete Momentaufnahmen betrachtet werden. Für Anwendungen, die kontinuierliche Standortverifizierung erfordern, wird empfohlen, die IP-Informationen regelmäßig neu zu überprüfen. Unsere Datenbankquellen werden häufig aktualisiert, um diese Änderungen zu berücksichtigen, aber es ist möglich, auf kürzlich neu zugewiesene Adressen zu stoßen."
      },
      relatedTools: {
        title: "Entdecken Sie verwandte Netzwerktools",
        description: "Erweitern Sie Ihre Netzwerkanalyse mit diesen ergänzenden Tools:",
        tool1: {
          name: "HTTP-Header-Sicherheitsprüfer",
          url: "https://www.ufreetools.com/tool/http-header-security-checker",
          description: "Analysieren und bewerten Sie die Sicherheit von HTTP-Antwortheadern."
        },
        tool2: {
          name: "Request-Header-Editor",
          url: "https://www.ufreetools.com/tool/request-header-editor",
          description: "Erstellen, bearbeiten und testen Sie HTTP-Request-Header."
        },
        tool3: {
          name: "HTTP-Proxy-Detektor",
          url: "https://www.ufreetools.com/tool/http-proxy-detector",
          description: "Erkennen Sie, ob Ihre Verbindung einen HTTP-Proxy verwendet, und analysieren Sie Proxy-bezogene Header zur Sicherheitsüberprüfung."
        },
        tool4: {
          name: "URL-Parameter-Parser",
          url: "https://www.ufreetools.com/tool/url-params-parser",
          description: "Analysieren, untersuchen und bearbeiten Sie URL-Parameter und Query-Strings."
        },
      },
      resources: {
        title: "Autoritative Ressourcen zur IP-Adressierung",
        resource1: {
          name: "IANA (Internet Assigned Numbers Authority)",
          url: "https://www.iana.org/numbers",
          description: "Offizieller globaler Koordinator für IP-Adressierungssysteme und ASN-Zuweisungen, bietet maßgebliche Informationen zu Adresszuweisungen."
        },
        resource2: {
          name: "Regionale Internet-Registries (RIRs)",
          url: "https://www.nro.net/about/rirs",
          description: "Organisationen, die für die Zuweisung von IP-Adressblöcken in bestimmten geografischen Regionen verantwortlich sind und offizielle Registrierungsdatenbanken pflegen."
        },
        resource3: {
          name: "RFC 8890 - Das Internet ist für Endnutzer",
          url: "https://datatracker.ietf.org/doc/html/rfc8890",
          description: "Ein wichtiges IETF-Dokument, das die Prinzipien der Internet-Adressierung und ihre Beziehung zu Privatsphäre und Rechten der Endnutzer diskutiert."
        }
      }
    }
  }