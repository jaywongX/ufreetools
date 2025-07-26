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
    }
};