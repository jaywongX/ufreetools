export default {
    name: 'Gerador de endereços Países Baixos - Gere endereços holandeses reais, informações de identidade e dados de contato online',
    description: 'Gerador de endereços holandês online gratuito que cria endereços holandeses com formato real, números de identificação, números de telefone, números de cartão de crédito e perfis de identidade completos. Suporta filtragem por província, formatos de exportação JSON/CSV e é executado inteiramente no navegador para proteção de privacidade.',
    inputTitle: 'Configurações de geração',
    outputTitle: 'Resultados gerados',
    generateBtn: 'Gerar dados',
    loadSampleBtn: 'Carregar exemplo e gerar',
    clearAll: 'Limpar tudo',
    noOutput: 'Nenhum resultado gerado ainda',
    preview: 'Visualizar dados',
    
    // Filtragem geográfica
    locationTitle: 'Filtragem geográfica',
    selectRegion: 'Selecionar província',
    allRegions: 'Todas as províncias',
    postalCodeLabel: 'Código postal',
    validatePostalCode: 'Validar código postal',
    
    // Tipos de endereço
    addressTypeTitle: 'Tipo de endereço',
    addressTypeResidential: 'Endereço residencial',
    addressTypeCommercial: 'Endereço comercial',
    addressTypeVirtual: 'Caixa postal virtual',
    addressTypeCampus: 'Campus universitário',
    
    // Informações de identidade
    identityTitle: 'Informações de identidade',
    fullName: 'Nome completo',
    gender: 'Gênero',
    genderMale: 'Masculino',
    genderFemale: 'Feminino',
    age: 'Idade',
    birthDate: 'Data de nascimento',
    zodiac: 'Signo zodiacal',
    height: 'Altura',
    weight: 'Peso',
    
    // Informações de contato
    contactTitle: 'Informações de contato',
    phoneNumber: 'Número de telefone',
    phoneType: 'Tipo de telefone',
    phoneTypeMobile: 'Celular',
    phoneTypeLandline: 'Fixo',
    areaCode: 'Código de área',
    email: 'Endereço de e-mail',
    tempEmail: 'E-mail temporário',
    
    // Cartão de crédito
    creditCardTitle: 'Informações do cartão de crédito',
    cardType: 'Tipo de cartão',
    cardNumber: 'Número do cartão',
    expiryDate: 'Data de validade',
    cvv: 'CVV',
    bankBin: 'BIN bancário',
    
    // Carreira
    careerTitle: 'Perfil profissional',
    jobTitle: 'Cargo',
    salary: 'Salário',
    companyName: 'Nome da empresa',
    companySize: 'Tamanho da empresa',
    industry: 'Indústria',
    employmentStatus: 'Status de emprego',
    employmentFullTime: 'Tempo integral',
    employmentPartTime: 'Meio período',
    
    // Cartão de identidade
    idCardTitle: 'Cartão de identidade holandês',
    idCardNumber: 'Número do cartão de identidade',
    bsnNumber: 'Número BSN',
    
    // Impressão digital
    fingerprintTitle: 'Impressão digital',
    os: 'Sistema operacional',
    osVersion: 'Versão do sistema operacional',
    browser: 'Navegador',
    userAgent: 'Agente do usuário',
    screenResolution: 'Resolução da tela',
    timezone: 'Fuso horário',
    guid: 'GUID',
    ipAddress: 'Endereço IP',
    macAddress: 'Endereço MAC',
    cookiePolicy: 'Política de cookies',
    
    // Opções de exportação
    exportTitle: 'Formato de exportação',
    exportJson: 'Exportar JSON',
    exportCsv: 'Exportar CSV',
    downloadBtn: 'Baixar',
    copyBtn: 'Copiar',
    viewDetails: 'Ver detalhes',
    
    // Geração em lote
    batchTitle: 'Geração em lote',
    quantityLabel: 'Quantidade',
    quantityPlaceholder: 'Digite a quantidade (1-100)',
    
    // Mensagens de notificação
    generating: 'Gerando...',
    generated: 'Geração concluída',
    copySuccess: 'Copiado para a área de transferência',
    downloadSuccess: 'Download concluído',
    invalidQuantity: 'Digite um número entre 1 e 100',
    
    // Exibição de resultados
    resultCount: '{count} registros gerados',
    resultSummary: 'Resumo dos resultados',
    showAll: 'Mostrar todos',
    collapse: 'Recolher',
    
    // Opções de geração
    generateOptionsTitle: 'Opções de geração',
    
    // Exibição de registros
    recordLabel: 'Registro #{num}',
    addressLabel: 'Endereço',
    streetLabel: 'Rua',
    houseNumberLabel: 'Número da casa',
    buildingLabel: 'Prédio',
    floorLabel: 'Andar',
    unitLabel: 'Unidade',
    regionLabel: 'Província',
    postalCode: 'Código postal',
    
    // Formato de endereço
    addressNumber: 'N°',
    addressFloor: 'Andar',
    addressUnit: 'Unidade',
    commercialUnit: '(Unidade comercial)',
    netherlands: 'Países Baixos',
    postOfficeBox: 'Caixa postal',
    studentDormitory: 'Residência estudantil',
    teachingBuilding: 'Prédio de ensino',
    library: 'Biblioteca',
    buildingUnit: 'Unidade',
    apartment: 'Apartamento',
    
    // Nomes de províncias (províncias holandesas)
    regions: {
        'Noord-Holland': 'Holanda do Norte',
        'Zuid-Holland': 'Holanda do Sul',
        'Utrecht': 'Utrecht',
        'Gelderland': 'Gelre',
        'Overijssel': 'Overijssel',
        'Flevoland': 'Flevolândia',
        'Friesland': 'Frísia',
        'Drenthе': 'Drente',
        'Groningen': 'Groninga',
        'Limburg': 'Limburgo',
        'Noord-Brabant': 'Brabante do Norte',
        'Zeeland': 'Zelândia'
    },
    
    // Nomes de universidades
    universities: {
        'UvA': 'Universidade de Amsterdã',
        'VU': 'Universidade Livre de Amsterdã',
        'TU': 'Universidade de Tecnologia de Delft',
        'UU': 'Universidade de Utrecht',
        'EUR': 'Universidade Erasmus de Rotterdã',
        'RUG': 'Universidade de Groninga',
        'WUR': 'Universidade de Wageningen',
        'UL': 'Universidade de Leiden',
        'RU': 'Universidade Radboud',
        'UM': 'Universidade de Maastricht'
    },
    
    // Nomes de colunas CSV
    csv: {
        fullAddress: 'Endereço completo',
        street: 'Rua',
        houseNumber: 'Número da casa',
        building: 'Prédio',
        floor: 'Andar',
        unit: 'Unidade',
        region: 'Província',
        postalCode: 'Código postal',
        fullName: 'Nome completo',
        gender: 'Gênero',
        age: 'Idade',
        birthDate: 'Data de nascimento',
        phone: 'Telefone',
        email: 'E-mail',
        cardType: 'Tipo de cartão',
        cardNumber: 'Número do cartão',
        idCardNumber: 'Número do cartão de identidade'
    }
};