export default {
    name: 'Ferramenta de Consulta de IP',
    description: 'Obtenha informações detalhadas sobre endereços IP, incluindo localização e detalhes de rede',
    input: {
        title: 'Consulta de IP',
        ipAddress: 'Endereço IP',
        ipPlaceholder: 'Digite um endereço IP (ex: 8.8.8.8)',
        hostname: 'Nome do host',
        hostnamePlaceholder: 'Ou digite um nome de host (ex: google.com)',
        options: 'Opções de consulta',
        includeGeolocation: 'Incluir localização geográfica',
        includeASN: 'Incluir informações ASN',
        includeDomains: 'Incluir domínios associados',
        includeAbuse: 'Incluir contato de abuso',
        myIP: 'Usar meu endereço IP'
    },
    actions: {
        lookup: 'Consultar IP',
        clear: 'Limpar resultados',
        copyIP: 'Copiar IP',
        copyAll: 'Copiar todas as informações',
        export: 'Exportar resultados'
    },
    results: {
        title: 'Informações do IP',
        noResults: 'Nenhuma informação para exibir',
        error: 'Erro: {message}',
        unknown: 'Desconhecido',
        queryTime: 'Tempo de consulta',
        dataSource: 'Fonte de dados',
        general: {
            title: 'Informações gerais',
            ipAddress: 'Endereço IP',
            hostname: 'Nome do host',
            type: 'Tipo',
            ipv4: 'IPv4',
            ipv6: 'IPv6',
            isPublic: 'IP público',
            yes: 'Sim',
            no: 'Não',
            reverse: 'DNS reverso'
        },
        location: {
            title: 'Localização',
            country: 'País',
            region: 'Região',
            city: 'Cidade',
            postalCode: 'Código postal',
            timezone: 'Fuso horário',
            coordinates: 'Coordenadas',
            latitude: 'Latitude',
            longitude: 'Longitude'
        },
        network: {
            title: 'Rede',
            asn: 'ASN',
            organization: 'Organização',
            isp: 'Provedor de serviços de Internet',
            usage: 'Tipo de uso',
            domain: 'Domínio',
            route: 'Rota',
            subnet: 'Sub-rede',
            netmask: 'Máscara de rede',
            cidr: 'Notação CIDR'
        },
        security: {
            title: 'Informações de segurança',
            threat: 'Detecção de ameaças',
            isTor: 'Nó de saída Tor',
            isProxy: 'Proxy',
            isVpn: 'VPN',
            isAttacker: 'Atacante conhecido',
            isAbuser: 'Abusador conhecido',
            threatLevel: 'Nível de ameaça',
            confidenceScore: 'Pontuação de confiança',
            abuseReports: 'Relatórios de abuso',
            lastReported: 'Último relatório'
        },
        additional: {
            title: 'Informações adicionais',
            mobile: 'Rede móvel',
            hosting: 'Provedor de hospedagem',
            associated: 'Domínios associados',
            abuseContact: 'Contato de abuso'
        }
    },
    map: {
        title: 'Mapa de localização',
        noLocation: 'Nenhum dado de localização disponível',
        viewLarger: 'Ver mapa maior'
    },
    messages: {
        lookingUp: 'Buscando informações para {query}...',
        copied: 'Copiado para a área de transferência',
        exported: 'Resultados exportados com sucesso',
        invalidIP: 'Endereço IP inválido',
        invalidHostname: 'Nome de host inválido',
        publicIPOnly: 'Esta ferramenta funciona apenas com endereços IP públicos',
        rateLimited: 'Limite de taxa excedido. Por favor, tente novamente mais tarde.',
        historyCleared: 'Histórico limpo'
    },
    history: {
        title: 'Histórico de pesquisa',
        clear: 'Limpar histórico'
    },
    article: {
        title: "Guia Completo de Consulta de IP - Rastreamento Geográfico de Endereços IP",
        intro: {
            title: "O que é uma ferramenta de consulta de IP e por que você precisa dela?",
            p1: "<b>Ferramentas de consulta de IP</b> são utilitários essenciais que revelam detalhes sobre qualquer endereço IP na internet. Nossa ferramenta oferece análise abrangente, incluindo informações geográficas (país, região, cidade), detalhes de rede (ISP, organização) e dados de segurança. Para administradores de rede, profissionais de segurança e usuários comuns, a consulta de IP é crucial para identificar e resolver diversos problemas de rede.",
            p2: "<b>Localização geográfica precisa por IP</b> tem diversas aplicações práticas. Desde personalização de conteúdo até detecção de fraudes, as informações de IP alimentam muitos sistemas online críticos. Nossa ferramenta utiliza múltiplos bancos de dados confiáveis para fornecer resultados precisos para endereços IPv4 e IPv6, ajudando você a entender de onde vêm e para onde vão suas comunicações digitais.",
            p3: "Com o crescente interesse em <b>privacidade e segurança online</b>, ter acesso a um serviço confiável de consulta de IP tornou-se mais importante do que nunca. Seja para solucionar problemas de rede, verificar localizações de usuários ou investigar atividades suspeitas, nossa ferramenta oferece as informações necessárias em um formato intuitivo e fácil de entender."
        },
        useCases: {
            title: "Casos de uso prático para consulta de endereços IP",
            case1: "<b>Investigações de segurança cibernética</b>: Equipes de segurança usam consultas de IP para investigar tentativas suspeitas de login, identificar ameaças potenciais e rastrear origens de atividades maliciosas. Quando tráfego suspeito aparece nos logs do servidor, a consulta de IP pode rapidamente determinar se ele vem de regiões de alto risco ou redes associadas a atividades maliciosas.",
            case2: "<b>Localização de conteúdo e geolocalização</b>: Empresas online dependem de localização geográfica precisa por IP para fornecer conteúdo regional, implementar restrições baseadas em localização e personalizar a experiência do usuário. Isso garante que os clientes recebam o idioma, moeda e conteúdo apropriados para sua localização.",
            case3: "<b>Solução de problemas de rede</b>: Profissionais de TI frequentemente usam ferramentas de consulta de IP para diagnosticar problemas de conexão, verificar configurações de roteamento e identificar gargalos na rede. Quando usuários relatam problemas de conexão, verificar o caminho geográfico do tráfego pode ajudar a determinar onde ocorrem atrasos ou falhas.",
            case4: "<b>Medidas antifraude</b>: Instituições financeiras e plataformas de e-commerce usam dados de IP para detectar fraudes potenciais identificando discrepâncias entre a localização declarada pelo usuário e a localização real do IP. Isso ajuda a prevenir transações não autorizadas e roubo de contas.",
            case5: "<b>Conformidade e restrições geográficas</b>: Muitos serviços precisam restringir acesso baseado em localização devido a acordos de licenciamento ou requisitos legais. A consulta de IP fornece os dados necessários para implementar essas restrições efetivamente, minimizando falsos positivos."
        },
        tutorial: {
            title: "Como usar nossa ferramenta de consulta de endereços IP",
            intro: "Nossa ferramenta de consulta de IP foi projetada para ser intuitiva e poderosa. Siga estes passos simples para obter informações completas sobre qualquer endereço IP:",
            step1: {
                title: "Passo 1: Insira o endereço IP ou nome de host",
                description: "Comece digitando um endereço IP (como 8.8.8.8) ou nome de host (como google.com) no campo de entrada. Se quiser verificar seu próprio endereço IP, basta clicar no botão \"Usar meu endereço IP\" e nossa ferramenta detectará e inserirá automaticamente seu IP público atual."
            },
            step2: {
                title: "Passo 2: Configure as opções de consulta",
                description: "Personalize sua pesquisa selecionando as informações que deseja recuperar. Você pode optar por incluir dados de localização geográfica, informações ASN, domínios associados e contatos de abuso. Para a maioria dos usuários, recomendamos manter todas as opções ativadas para obter os resultados mais completos. Se estiver interessado apenas em informações específicas, você pode desmarcar outras opções para simplificar os resultados."
            },
            step3: {
                title: "Passo 3: Inicie a consulta",
                description: "Clique no botão \"Consultar IP\" para iniciar o processo. Nossa ferramenta entrará em contato com vários bancos de dados confiáveis de IP para coletar as informações mais precisas e atualizadas disponíveis. Isso normalmente leva apenas alguns segundos, mas pode variar dependendo da velocidade de sua conexão e da carga atual em nossos servidores."
            },
            step4: {
                title: "Passo 4: Analise os resultados",
                description: "Revise as informações detalhadas exibidas na seção de resultados. Os dados são organizados em categorias lógicas para fácil navegação: informações básicas (tipo de IP, nome do host), localização (país, cidade, coordenadas), rede (ISP, organização, ASN) e informações de segurança (detecção de ameaças, status de proxy/VPN). Você pode usar o botão \"Copiar todas as informações\" para salvar os resultados completos ou exportá-los para análise posterior."
            }
        },
        ipTypes: {
            title: "Entendendo os diferentes tipos de endereços IP",
            intro: "Endereços IP vêm em diferentes tipos e formatos, cada um com propósitos específicos na comunicação de rede. Aqui estão os principais tipos que você precisa conhecer:",
            public: {
                title: "Endereços IP públicos",
                description: "<b>Endereços IP públicos</b> são atribuídos globalmente por provedores de serviços de Internet (ISPs) para identificar sua rede na internet. Esses endereços são únicos em toda a internet, permitindo que sistemas externos se comuniquem com sua rede. Quando sites rastreiam visitantes ou serviços implementam restrições geográficas, eles usam endereços IP públicos. Nossa ferramenta fornece principalmente detalhes para IPs públicos, pois estes contêm informações geográficas e de rede significativas."
            },
            private: {
                title: "Endereços IP privados",
                description: "<b>Endereços IP privados</b> são usados em redes locais internas, seguindo intervalos específicos reservados (como 192.168.x.x, 10.x.x.x ou 172.16.x.x). Esses endereços não são roteáveis na internet e são usados para identificar dispositivos dentro de redes domésticas ou corporativas. Quando você tem vários dispositivos conectados ao Wi-Fi doméstico, cada um recebe um IP privado enquanto compartilha um único IP público fornecido pelo ISP. Nossa ferramenta indicará se um endereço é privado, mas a localização geográfica detalhada não se aplica a IPs privados."
            },
            ipv4: {
                title: "Endereços IPv4",
                description: "<b>Endereços IPv4</b> são o formato original de endereçamento IP, consistindo em quatro números separados por pontos (ex: 192.0.2.1), cada um variando de 0 a 255. Com cerca de 4,3 bilhões de endereços possíveis, o IPv4 ainda é o protocolo mais usado. No entanto, devido ao crescimento explosivo de dispositivos conectados à internet, os endereços IPv4 tornaram-se escassos, levando ao desenvolvimento do IPv6. Nossa ferramenta fornece informações completas para endereços IPv4, incluindo localização geográfica precisa e detalhes de rede."
            },
            ipv6: {
                title: "Endereços IPv6",
                description: "<b>Endereços IPv6</b> representam a próxima geração de endereçamento IP, usando um espaço de endereçamento muito maior, com oito grupos de números hexadecimais separados por dois pontos (ex: 2001:0db8:85a3:0000:0000:8a2e:0370:7334). Com 340 undecilhões de endereços únicos disponíveis, o IPv6 garante que não ficaremos sem endereços num futuro previsível. Nossa ferramenta suporta totalmente consultas IPv6, fornecendo os mesmos detalhes que para endereços IPv4, ajudando você a se preparar para essa transição contínua para o padrão mais novo."
            }
        },
        faq: {
            title: "Perguntas frequentes sobre consulta de IP",
            q1: "Quão precisa é a geolocalização baseada em IP?",
            a1: "A precisão da geolocalização baseada em IP depende de vários fatores. Para <b>detecção em nível de país</b>, a taxa de acerto é tipicamente muito alta (95-99%). No entanto, para precisão em nível de cidade, a taxa varia entre 50-80% dependendo da região e dos dados disponíveis. A geolocalização geralmente é mais precisa em áreas urbanas densamente povoadas e países com infraestrutura de internet bem desenvolvida.<br><br>Fatores que afetam a precisão:<br>• Realocação de IPs por ISPs<br>• Uso de proxies, VPNs ou redes Tor<br>• Redes corporativas com saída de internet centralizada<br>• Redes móveis onde um IP pode cobrir uma grande área geográfica<br><br>Nossa ferramenta combina múltiplos bancos de dados confiáveis para fornecer resultados tão precisos quanto possível, mas é importante entender que a geolocalização por IP deve ser considerada uma aproximação, não um posicionamento preciso como GPS. Para aplicações que exigem alta precisão, a geolocalização por IP deve ser combinada com outros métodos de verificação.",

            q2: "A consulta de IP pode detectar VPNs e proxies?",
            a2: "Nossa ferramenta pode detectar muitos <b>VPNs, proxies e serviços de anonimização</b> com razoável precisão. A detecção é feita comparando o endereço IP com bancos de dados de servidores VPN conhecidos, serviços de proxy e nós de saída Tor. Além disso, a ferramenta analisa vários indicadores técnicos que sugerem uso de proxy, como padrões de portas, impressões digitais de hospedagem e características de rede.<br><br>No entanto, é importante entender suas limitações:<br>• Novos ou pequenos serviços VPN podem não estar incluídos nos bancos de dados de detecção<br>• Proxies privados ou personalizados podem ser mais difíceis de detectar<br>• Alguns serviços VPN de alta qualidade se esforçam para parecer conexões comuns<br>• A precisão da detecção varia por região e provedor<br><br>Quando nossa ferramenta identifica que uma conexão pode estar usando VPN ou proxy, isso é indicado na seção de informações de segurança com uma pontuação de confiança. Isso é particularmente útil para aplicações de segurança, redes de distribuição de conteúdo e serviços que precisam impor restrições geográficas.",

            q3: "É legal consultar o IP de outra pessoa?",
            a3: "Na maioria das jurisdições, consultar informações publicamente disponíveis sobre um endereço IP é geralmente <b>legal</b>, semelhante a consultar o proprietário de um domínio ou um número de telefone em um diretório público. Nossa ferramenta acessa apenas informações disponíveis publicamente através de bancos de dados legítimos.<br><br>No entanto, existem considerações éticas e legais importantes:<br><br>• Essas informações devem ser usadas para fins legítimos, como solução de problemas de rede, análise de segurança ou prevenção de fraudes<br>• A consulta de IP sozinha não fornece informações pessoalmente identificáveis sobre o usuário desse endereço<br>• Usar dados de IP para assédio, perseguição ou outras atividades maliciosas é ilegal na maioria dos lugares<br>• Algumas jurisdições têm regulamentos específicos sobre dados de IP como parte de leis mais amplas de privacidade (como o GDPR na Europa)<br><br>Para aplicações comerciais, recomenda-se incluir informações sobre coleta de dados de IP em sua política de privacidade e garantir que você tenha base legal apropriada para processar essas informações. Nossa ferramenta foi projetada para cenários de uso legítimo e inclui limites de taxa para prevenir padrões de abuso.",

            q4: "Por que um endereço IP pode mostrar uma localização errada?",
            a4: "Há várias razões pelas quais um endereço IP pode mostrar uma localização <b>inesperada ou incorreta</b>:<br><br>1. <b>Arquitetura de rede do ISP</b>: Seu provedor de internet pode rotear tráfego através de pontos centrais que podem estar em uma cidade ou país diferente de sua localização real.<br><br>2. <b>Redes corporativas</b>: Empresas geralmente centralizam o tráfego de internet na sede ou em data centers específicos, fazendo todas as conexões de funcionários parecerem vir desse local, independentemente de onde estejam trabalhando.<br><br>3. <b>VPNs e proxies</b>: Ao usar esses serviços, sua localização aparente corresponderá à localização do servidor de saída, não à sua localização física.<br><br>4. <b>Redes móveis</b>: Endereços IP de celular geralmente mapeiam para gateways centrais que podem estar longe da localização real do usuário.<br><br>5. <b>Limitações dos bancos de dados</b>: Bancos de dados de geolocalização IP são atualizados regularmente, mas podem conter informações desatualizadas, especialmente quando ISPs realocam blocos de IP.<br><br>6. <b>Máquinas virtuais e serviços em nuvem</b>: Estes geralmente usam endereços IP registrados para a localização do provedor de nuvem, não do usuário.<br><br>Para obter os resultados mais precisos, nossa ferramenta cruza referências de múltiplos bancos de dados IP, mas devido às limitações inerentes da geolocalização por IP, algumas discrepâncias ainda podem ocorrer.",

            q5: "Com que frequência a localização de um endereço IP muda?",
            a5: "A <b>frequência de mudanças</b> na localização de um endereço IP depende de vários fatores:<br><br>1. <b>IPs dinâmicos vs. estáticos</b>: A maioria das conexões residenciais usa IPs dinâmicos que podem mudar periodicamente - de diariamente a mensalmente, ou quando o roteador reconecta. Conexões comerciais e de servidor geralmente usam IPs estáticos que mudam raramente.<br><br>2. <b>Políticas do ISP</b>: Diferentes provedores de internet têm políticas variadas para rotação e realocação de IPs. Alguns ISPs mudam os IPs dos clientes frequentemente, enquanto outros podem mantê-los relativamente estáveis por meses.<br><br>3. <b>Realocação de blocos de IP</b>: Ocasionalmente, grandes blocos de endereços IP são realocados entre organizações ou regiões, podendo causar mudanças mais significativas na localização.<br><br>4. <b>Conexões móveis</b>: Endereços IP de dispositivos móveis podem mudar frequentemente, especialmente ao alternar entre redes celulares e Wi-Fi, ou ao se mover entre diferentes torres de celular.<br><br>Devido a esses fatores, os dados de geolocalização por IP devem ser considerados um instantâneo potencialmente desatualizado. Para aplicações que exigem verificação contínua de localização, recomenda-se verificar periodicamente as informações de IP. Nossas fontes de dados são atualizadas frequentemente para acomodar essas mudanças, mas sempre há a possibilidade de encontrar um endereço recentemente realocado."
        },
        relatedTools: {
            title: "Explore ferramentas de rede relacionadas",
            description: "Aprimore sua análise de rede com estas ferramentas complementares:",
            tool1: {
                name: "Verificador de Segurança de Cabeçalhos HTTP",
                url: "https://www.ufreetools.com/tool/http-header-security-checker",
                description: "Analisa e avalia a segurança de cabeçalhos de resposta HTTP."
            },
            tool2: {
                name: "Editor de Cabeçalhos de Requisição",
                url: "https://www.ufreetools.com/tool/request-header-editor",
                description: "Cria, edita e testa cabeçalhos de requisição HTTP."
            },
            tool3: {
                name: "Detector de Proxy HTTP",
                url: "https://www.ufreetools.com/tool/http-proxy-detector",
                description: "Detecta se sua conexão está usando um proxy HTTP e analisa cabeçalhos relacionados a proxy para verificação de segurança."
            },
            tool4: {
                name: "Analisador de Parâmetros de URL",
                url: "https://www.ufreetools.com/tool/url-params-parser",
                description: "Analisa, interpreta e manipula parâmetros e strings de consulta em URLs."
            },
        },
        resources: {
            title: "Recursos oficiais sobre endereçamento IP",
            resource1: {
                name: "IANA (Internet Assigned Numbers Authority)",
                url: "https://www.iana.org/numbers",
                description: "Coordenador global oficial para sistemas de endereçamento IP e atribuição de ASN, fornecendo informações autoritativas sobre alocação de endereços."
            },
            resource2: {
                name: "Registros Regionais da Internet (RIRs)",
                url: "https://www.nro.net/about/rirs",
                description: "Organizações responsáveis pela alocação de blocos de endereços IP em regiões geográficas específicas, mantendo bancos de dados de registros oficiais."
            },
            resource3: {
                name: "RFC 8890 - A Internet é para usuários finais",
                url: "https://datatracker.ietf.org/doc/html/rfc8890",
                description: "Um importante documento do IETF discutindo princípios de endereçamento na Internet e sua relação com privacidade e direitos dos usuários finais."
            }
        }
    }
}