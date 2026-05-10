export default {
    name: 'Gerador de endereços Tailândia - Gere endereços tailandeses reais, informações de identidade e detalhes de contato online',
    description: 'Gerador de endereços tailandês online gratuito que cria endereços tailandeses em formato real, números de identificação, números de telefone, números de cartão de crédito e perfis de identidade completos. Suporta filtragem por província, formatos de exportação JSON/CSV e é executado inteiramente no navegador para proteção de privacidade.',
    inputTitle: 'Configurações de geração',
    outputTitle: 'Resultados gerados',
    generateBtn: 'Gerar dados',
    loadSampleBtn: 'Carregar exemplo e gerar',
    clearAll: 'Limpar tudo',
    noOutput: 'Nenhum resultado gerado ainda',
    preview: 'Pré-visualização dos dados',
    
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
    zodiac: 'Signo do zodíaco',
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
    
    // Carteira de identidade
    idCardTitle: 'Carteira de identidade tailandesa',
    idCardNumber: 'Número da carteira de identidade',
    
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
    downloadSuccess: 'Download bem-sucedido',
    invalidQuantity: 'Por favor, digite um número entre 1 e 100',
    
    // Exibição de resultados
    resultCount: '{count} registros gerados',
    resultSummary: 'Resumo dos resultados',
    showAll: 'Mostrar tudo',
    collapse: 'Recolher',
    
    // Opções de geração
    generateOptionsTitle: 'Opções de geração',
    
    // Exibição de registros
    recordLabel: 'Registro #{num}',
    addressLabel: 'Endereço',
    streetLabel: 'Rua',
    houseNumberLabel: 'Número da casa',
    buildingLabel: 'Edifício',
    floorLabel: 'Andar',
    unitLabel: 'Unidade',
    regionLabel: 'Província',
    postalCode: 'Código postal',
    
    // Formato do endereço
    addressNumber: 'Nº',
    addressFloor: 'Andar',
    addressUnit: 'Unidade',
    commercialUnit: '(Unidade comercial)',
    thailand: 'Tailândia',
    postOfficeBox: 'Caixa postal',
    studentDormitory: 'Residência estudantil',
    teachingBuilding: 'Prédio de ensino',
    library: 'Biblioteca',
    buildingUnit: 'Prédio',
    apartment: 'Apartamento',
    
    // Nomes de províncias (províncias tailandesas)
    regions: {
        'Bangkok': 'Bangkok',
        'Chiang Mai': 'Chiang Mai',
        'Phuket': 'Phuket',
        'Pattaya': 'Pattaya',
        'Nonthaburi': 'Nonthaburi',
        'Pathum Thani': 'Pathum Thani',
        'Samut Prakan': 'Samut Prakan',
        'Nakhon Ratchasima': 'Nakhon Ratchasima',
        'Chiang Rai': 'Chiang Rai',
        'Khon Kaen': 'Khon Kaen',
        'Nakhon Si Thammarat': 'Nakhon Si Thammarat',
        'Surat Thani': 'Surat Thani',
        'Udon Thani': 'Udon Thani',
        'Rayong': 'Rayong',
        'Lampang': 'Lampang',
        'Nakhon Pathom': 'Nakhon Pathom',
        'Ayutthaya': 'Ayutthaya',
        'Chanthaburi': 'Chanthaburi',
        'Trat': 'Trat',
        'Kanchanaburi': 'Kanchanaburi'
    },
    
    // Nomes de universidades
    universities: {
        'CU': 'Universidade Chulalongkorn',
        'TU': 'Universidade Mahidol',
        'KU': 'Universidade Kasetsart',
        'TU': 'Universidade Thammasat',
        'KMUTT': 'Universidade de Tecnologia King Mongkut Thonburi',
        'KMUTNB': 'Universidade de Tecnologia King Mongkut do Norte de Bangkok',
        'SIIT': 'Instituto Internacional Sirindhorn de Tecnologia',
        'AIT': 'Instituto Asiático de Tecnologia',
        'ABAC': 'Universidade Assumption'
    },
    
    // Nomes de colunas CSV
    csv: {
        fullAddress: 'Endereço completo',
        street: 'Rua',
        houseNumber: 'Número da casa',
        building: 'Edifício',
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
        idCardNumber: 'Número da carteira de identidade'
    }
};