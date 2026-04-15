export default {
    name: 'Gerador de IP Aleatório - Gerar Endereços IPv4/IPv6 Online',
    description: 'Gerador de IP aleatório gratuito online que suporta endereços IPv4 e IPv6, IPs públicos e privados, filtragem por região, geração em lote e múltiplos formatos de exportação. Funciona inteiramente no frontend para proteger a privacidade.',
    inputTitle: 'Configuração de Geração',
    outputTitle: 'Resultados da Geração',
    generateBtn: 'Gerar Endereços IP',
    loadSampleBtn: 'Carregar Amostra e Gerar',
    clearAll: 'Limpar Tudo',
    noOutput: 'Nenhum resultado gerado',
    preview: 'Visualização de Dados',
    
    ipVersionTitle: 'Versão do IP',
    ipv4: 'IPv4',
    ipv6: 'IPv6',
    bothVersions: 'Ambas as Versões',
    
    ipTypeTitle: 'Tipo de IP',
    ipTypePublic: 'IP Público',
    ipTypePrivate: 'IP Privado',
    ipTypeAny: 'Qualquer Tipo',
    
    regionTitle: 'Região do IP',
    allRegions: 'Todas as Regiões',
    
    formatTitle: 'Formato de Saída',
    formatPlain: 'Texto Simples',
    formatList: 'Formato de Lista',
    
    optionsTitle: 'Opções Adicionais',
    includePort: 'Incluir Número da Porta',
    includeSubnet: 'Incluir Máscara de Sub-rede',
    includeGeo: 'Incluir Informações Geográficas',
    
    batchTitle: 'Geração em Lote',
    quantityLabel: 'Quantidade',
    quantityPlaceholder: 'Digite a quantidade (1-1000)',
    
    generating: 'Gerando...',
    generated: 'Geração Concluída',
    copySuccess: 'Copiado para a área de transferência',
    downloadSuccess: 'Download concluído',
    invalidQuantity: 'Digite um número entre 1-1000',
    
    resultCount: 'Gerados {count} registros',
    resultSummary: 'Resumo dos Resultados',
    showAll: 'Mostrar Tudo',
    collapse: 'Recolher',
    
    exportTitle: 'Formato de Exportação',
    exportJson: 'Exportar JSON',
    exportCsv: 'Exportar CSV',
    exportTxt: 'Exportar TXT',
    copyBtn: 'Copiar',
    downloadBtn: 'Baixar',
    viewDetails: 'Ver Detalhes',
    
    regions: {
        US: 'Estados Unidos',
        EU: 'Europa',
        AS: 'Ásia',
        CN: 'China',
        JP: 'Japão',
        KR: 'Coreia do Sul',
        AU: 'Austrália',
        BR: 'Brasil',
        IN: 'Índia',
        RU: 'Rússia'
    },
    
    csv: {
        ip: 'Endereço IP',
        version: 'Versão',
        port: 'Porta',
        subnet: 'Máscara de Sub-rede',
        country: 'País',
        city: 'Cidade',
        isp: 'ISP'
    }
};
