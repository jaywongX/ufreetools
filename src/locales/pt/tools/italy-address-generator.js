export default {
    name: 'Gerador de endereços Itália - Gere endereços italianos reais, informações de identidade e dados de contato online',
    description: 'Gerador de endereços Itália gratuito online que cria endereços italianos em formato real, números de Codice Fiscale, números de telefone, números de cartão de crédito e perfis de identidade completos. Suporta filtragem por região, formatos de exportação JSON/CSV e roda inteiramente no navegador para proteção de privacidade.',
    inputTitle: 'Configurações de geração',
    outputTitle: 'Resultados gerados',
    generateBtn: 'Gerar dados',
    loadSampleBtn: 'Carregar exemplo e gerar',
    clearAll: 'Limpar tudo',
    noOutput: 'Nenhum resultado gerado ainda',
    preview: 'Pré-visualização de dados',
    
    // Filtragem geográfica
    locationTitle: 'Filtragem geográfica',
    selectRegion: 'Selecionar região',
    allRegions: 'Todas as regiões',
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
    careerTitle: 'Perfil de carreira',
    jobTitle: 'Cargo',
    salary: 'Salário',
    companyName: 'Nome da empresa',
    companySize: 'Tamanho da empresa',
    industry: 'Setor',
    employmentStatus: 'Status de emprego',
    employmentFullTime: 'Tempo integral',
    employmentPartTime: 'Meio período',
    
    // Documento de identidade
    idCardTitle: 'Documento de identidade italiano',
    idCardNumber: 'Número do documento de identidade',
    codiceFiscale: 'Codice Fiscale',
    
    // Digital impressão digital
    fingerprintTitle: 'Impressão digital',
    os: 'Sistema operacional',
    osVersion: 'Versão do sistema',
    browser: 'Navegador',
    userAgent: 'User Agent',
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
    buildingLabel: 'Prédio',
    floorLabel: 'Andar',
    unitLabel: 'Unidade',
    regionLabel: 'Região',
    postalCode: 'Código postal',
    
    // Formato de endereço
    addressNumber: 'N°',
    addressFloor: 'Andar',
    addressUnit: 'Unidade',
    commercialUnit: '(Unidade comercial)',
    italy: 'Itália',
    postOfficeBox: 'Caixa postal',
    studentDormitory: 'Residência estudantil',
    teachingBuilding: 'Prédio de ensino',
    library: 'Biblioteca',
    buildingUnit: 'Prédio',
    apartment: 'Apartamento',
    
    // Nomes de regiões (regiões italianas)
    regions: {
        'Lombardia': 'Lombardia',
        'Lazio': 'Lácio',
        'Campania': 'Campânia',
        'Sicilia': 'Sicília',
        'Veneto': 'Vêneto',
        'Emilia-Romagna': 'Emília-Romanha',
        'Piemonte': 'Piemonte',
        'Toscana': 'Toscana',
        'Puglia': 'Apúlia',
        'Calabria': 'Calábria',
        'Sardegna': 'Sardenha',
        'Friuli Venezia Giulia': 'Friuli-Venezia Giulia',
        'Liguria': 'Ligúria',
        'Marche': 'Marcas',
        'Abruzzo': 'Abruzzo',
        'Molise': 'Molise',
        'Basilicata': 'Basilicata',
        'Umbria': 'Úmbria',
        "Valle d'Aosta": "Vale de Aosta",
        'Trentino-Alto Adige': 'Trentino-Alto Adige'
    },
    
    // Nomes de universidades
    universities: {
        'Politecnico di Milano': 'Politécnico de Milão',
        'Sapienza': 'Universidade de Roma La Sapienza',
        'Bocconi': 'Universidade Bocconi',
        'Politecnico di Torino': 'Politécnico de Turim',
        'UniMI': 'Universidade de Milão',
        'UniFI': 'Universidade de Florença',
        'UniBO': 'Universidade de Bolonha',
        'UniPd': 'Universidade de Pádua',
        'UniNa': 'Universidade de Nápoles Federico II',
        'UniTo': 'Universidade de Turim'
    },
    
    // Nomes de colunas CSV
    csv: {
        fullAddress: 'Endereço completo',
        street: 'Rua',
        houseNumber: 'Número da casa',
        building: 'Prédio',
        floor: 'Andar',
        unit: 'Unidade',
        region: 'Região',
        postalCode: 'Código postal',
        fullName: 'Nome completo',
        gender: 'Gênero',
        age: 'Idade',
        birthDate: 'Data de nascimento',
        phone: 'Telefone',
        email: 'E-mail',
        cardType: 'Tipo de cartão',
        cardNumber: 'Número do cartão',
        idCardNumber: 'Número do documento de identidade'
    }
};