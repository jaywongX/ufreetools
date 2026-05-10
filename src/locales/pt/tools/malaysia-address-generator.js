export default {
    name: 'Gerador de Endereços da Malásia - Gere Endereços Malaios Reais, Informações de Identidade e Dados de Contato Online',
    description: 'Gerador de endereços da Malásia gratuito online que cria endereços malaios em formato real, números MyKad, números de telefone, números de cartão de crédito e perfis de identidade completos. Suporta filtragem por estados, formatos de exportação JSON/CSV e é executado inteiramente no navegador para proteção de privacidade.',
    inputTitle: 'Configurações de Geração',
    outputTitle: 'Resultados Gerados',
    generateBtn: 'Gerar Dados',
    loadSampleBtn: 'Carregar Exemplo e Gerar',
    clearAll: 'Limpar Tudo',
    noOutput: 'Nenhum resultado gerado ainda',
    preview: 'Pré-visualização dos Dados',
    
    // Filtragem Geográfica
    locationTitle: 'Filtragem Geográfica',
    selectRegion: 'Selecionar Estado',
    allRegions: 'Todos os Estados',
    postalCodeLabel: 'Código Postal',
    validatePostalCode: 'Validar Código Postal',
    
    // Tipos de Endereço
    addressTypeTitle: 'Tipo de Endereço',
    addressTypeResidential: 'Endereço Residencial',
    addressTypeCommercial: 'Endereço Comercial',
    addressTypeVirtual: 'Caixa Postal Virtual',
    addressTypeCampus: 'Campus Universitário',
    
    // Informações de Identidade
    identityTitle: 'Informações de Identidade',
    fullName: 'Nome Completo',
    gender: 'Gênero',
    genderMale: 'Masculino',
    genderFemale: 'Feminino',
    age: 'Idade',
    birthDate: 'Data de Nascimento',
    zodiac: 'Signo do Zodíaco',
    height: 'Altura',
    weight: 'Peso',
    
    // Informações de Contato
    contactTitle: 'Informações de Contato',
    phoneNumber: 'Número de Telefone',
    phoneType: 'Tipo de Telefone',
    phoneTypeMobile: 'Celular',
    phoneTypeLandline: 'Fixo',
    areaCode: 'Código de Área',
    email: 'Endereço de E-mail',
    tempEmail: 'E-mail Temporário',
    
    // Cartão de Crédito
    creditCardTitle: 'Informações do Cartão de Crédito',
    cardType: 'Tipo de Cartão',
    cardNumber: 'Número do Cartão',
    expiryDate: 'Data de Validade',
    cvv: 'CVV',
    bankBin: 'BIN do Banco',
    
    // Carreira
    careerTitle: 'Perfil Profissional',
    jobTitle: 'Cargo',
    salary: 'Salário',
    companyName: 'Nome da Empresa',
    companySize: 'Tamanho da Empresa',
    industry: 'Setor',
    employmentStatus: 'Status de Emprego',
    employmentFullTime: 'Tempo Integral',
    employmentPartTime: 'Meio Período',
    
    // Cartão de Identidade
    idCardTitle: 'Cartão de Identidade da Malásia',
    idCardNumber: 'Número do Cartão de Identidade',
    mykadNumber: 'Número MyKad',
    
    // Impressão Digital
    fingerprintTitle: 'Impressão Digital',
    os: 'Sistema Operacional',
    osVersion: 'Versão do SO',
    browser: 'Navegador',
    userAgent: 'User Agent',
    screenResolution: 'Resolução da Tela',
    timezone: 'Fuso Horário',
    guid: 'GUID',
    ipAddress: 'Endereço IP',
    macAddress: 'Endereço MAC',
    cookiePolicy: 'Política de Cookies',
    
    // Opções de Exportação
    exportTitle: 'Formato de Exportação',
    exportJson: 'Exportar JSON',
    exportCsv: 'Exportar CSV',
    downloadBtn: 'Baixar',
    copyBtn: 'Copiar',
    viewDetails: 'Ver Detalhes',
    
    // Geração em Lote
    batchTitle: 'Geração em Lote',
    quantityLabel: 'Quantidade',
    quantityPlaceholder: 'Digite a quantidade (1-100)',
    
    // Mensagens de Notificação
    generating: 'Gerando...',
    generated: 'Geração Concluída',
    copySuccess: 'Copiado para a área de transferência',
    downloadSuccess: 'Download bem-sucedido',
    invalidQuantity: 'Por favor, digite um número entre 1 e 100',
    
    // Exibição de Resultados
    resultCount: '{count} registros gerados',
    resultSummary: 'Resumo dos Resultados',
    showAll: 'Mostrar Tudo',
    collapse: 'Recolher',
    
    // Opções de Geração
    generateOptionsTitle: 'Opções de Geração',
    
    // Exibição de Registros
    recordLabel: 'Registro #{num}',
    addressLabel: 'Endereço',
    streetLabel: 'Rua',
    houseNumberLabel: 'Número da Casa',
    buildingLabel: 'Prédio',
    floorLabel: 'Andar',
    unitLabel: 'Unidade',
    regionLabel: 'Estado',
    postalCode: 'Código Postal',
    
    // Formato de Endereço
    addressNumber: 'Nº',
    addressFloor: 'Andar',
    addressUnit: 'Unidade',
    commercialUnit: '(Unidade Comercial)',
    malaysia: 'Malásia',
    postOfficeBox: 'Caixa Postal',
    studentDormitory: 'Residência Estudantil',
    teachingBuilding: 'Prédio de Ensino',
    library: 'Biblioteca',
    buildingUnit: 'Bloco',
    apartment: 'Apartamento',
    
    // Nomes dos Estados (13 estados + 3 territórios federais)
    regions: {
        'Johor': 'Johor',
        'Kedah': 'Kedah',
        'Kelantan': 'Kelantan',
        'Malacca': 'Malacca',
        'Negeri Sembilan': 'Negeri Sembilan',
        'Pahang': 'Pahang',
        'Penang': 'Penang',
        'Perak': 'Perak',
        'Perlis': 'Perlis',
        'Sabah': 'Sabah',
        'Sarawak': 'Sarawak',
        'Selangor': 'Selangor',
        'Terengganu': 'Terengganu',
        'Kuala Lumpur': 'Kuala Lumpur',
        'Putrajaya': 'Putrajaya',
        'Labuan': 'Labuan'
    },
    
    // Nomes das Universidades
    universities: {
        'UM': 'Universidade de Malaya',
        'UKM': 'Universiti Kebangsaan Malaysia',
        'UPM': 'Universiti Putra Malaysia',
        'USM': 'Universiti Sains Malaysia',
        'UTM': 'Universiti Teknologi Malaysia',
        'UUM': 'Universiti Utara Malaysia',
        'UMS': 'Universiti Malaysia Sabah',
        'UMK': 'Universiti Malaysia Kelantan',
        'UPSI': 'Universiti Pendidikan Sultan Idris'
    },
    
    // Nomes das Colunas CSV
    csv: {
        fullAddress: 'Endereço Completo',
        street: 'Rua',
        houseNumber: 'Número da Casa',
        building: 'Prédio',
        floor: 'Andar',
        unit: 'Unidade',
        region: 'Estado',
        postalCode: 'Código Postal',
        fullName: 'Nome Completo',
        gender: 'Gênero',
        age: 'Idade',
        birthDate: 'Data de Nascimento',
        phone: 'Telefone',
        email: 'E-mail',
        cardType: 'Tipo de Cartão',
        cardNumber: 'Número do Cartão',
        idCardNumber: 'Número do Cartão de Identidade'
    }
};