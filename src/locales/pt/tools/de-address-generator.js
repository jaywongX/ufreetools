export default {
    name: 'Gerador de Endereços da Alemanha - Gerar Endereços Alemães Reais e Informações de Identidade Online',
    description: 'Gerador gratuito de endereços da Alemanha online, gera endereços alemães em formato real, números de identificação, números de telefone, números de cartão de crédito e perfis de identidade completos. Suporta filtragem por estado, exportação JSON/CSV, funciona totalmente no frontend para proteger a privacidade.',
    inputTitle: 'Configuração de Geração',
    outputTitle: 'Resultados da Geração',
    generateBtn: 'Gerar Dados',
    loadSampleBtn: 'Carregar Amostra e Gerar',
    clearAll: 'Limpar Tudo',
    noOutput: 'Sem resultados de geração',
    preview: 'Pré-visualização de Dados',
    
    // Filtragem geográfica
    locationTitle: 'Filtro de Localização Geográfica',
    selectState: 'Selecionar Estado Federal',
    selectCity: 'Selecionar Cidade',
    allStates: 'Todos os Estados Federais',
    allCities: 'Todas as Cidades',
    
    // Tipos de endereço
    addressTypeTitle: 'Tipo de Endereço',
    addressTypeResidential: 'Endereço Residencial',
    addressTypeCommercial: 'Endereço Comercial',
    addressTypePoBox: 'Caixa Postal',
    addressTypeCampus: 'Campus Universitário',
    
    // Informações de identidade
    identityTitle: 'Informações de Identidade',
    fullName: 'Nome Completo',
    firstName: 'Primeiro Nome',
    lastName: 'Sobrenome',
    gender: 'Gênero',
    genderMale: 'Masculino',
    genderFemale: 'Feminino',
    age: 'Idade',
    birthDate: 'Data de Nascimento',
    height: 'Altura',
    weight: 'Peso',
    
    // Informações de contato
    contactTitle: 'Informações de Contato',
    phoneNumber: 'Número de Telefone',
    phoneType: 'Tipo de Telefone',
    phoneTypeMobile: 'Celular',
    phoneTypeLandline: 'Fixo',
    areaCode: 'Código de Área',
    email: 'Endereço de Email',
    tempEmail: 'Email Temporário',
    
    // Cartão de crédito
    creditCardTitle: 'Informações do Cartão de Crédito',
    cardType: 'Tipo de Cartão',
    cardNumber: 'Número do Cartão',
    expiryDate: 'Data de Validade',
    cvv: 'CVV',
    bankBin: 'Código BIN do Banco',
    
    // Carreira
    careerTitle: 'Perfil de Carreira',
    jobTitle: 'Cargo',
    salary: 'Salário',
    companyName: 'Nome da Empresa',
    companySize: 'Tamanho da Empresa',
    industry: 'Indústria',
    employmentStatus: 'Status de Emprego',
    
    // Cartão de identidade
    idCardTitle: 'Carteira de Identidade Alemã (Personalausweis)',
    idCardNumber: 'Número do Cartão de Identidade',
    
    // Impressão digital
    fingerprintTitle: 'Impressão Digital',
    os: 'Sistema Operacional',
    osVersion: 'Versão do SO',
    browser: 'Navegador',
    userAgent: 'User Agent',
    screenResolution: 'Resolução de Tela',
    timezone: 'Fuso Horário',
    guid: 'GUID',
    ipAddress: 'Endereço IP',
    macAddress: 'Endereço MAC',
    cookiePolicy: 'Política de Cookies',
    
    // Opções de exportação
    exportTitle: 'Formato de Exportação',
    exportJson: 'Exportar JSON',
    exportCsv: 'Exportar CSV',
    downloadBtn: 'Baixar',
    copyBtn: 'Copiar',
    viewDetails: 'Ver Detalhes',
    
    // Geração em lote
    batchTitle: 'Geração em Lote',
    quantityLabel: 'Quantidade',
    quantityPlaceholder: 'Digite a quantidade (1-100)',
    
    // Mensagens
    generating: 'Gerando...',
    generated: 'Geração Concluída',
    copySuccess: 'Copiado para a área de transferência',
    downloadSuccess: 'Download concluído',
    invalidQuantity: 'Digite um número entre 1-100',
    
    // Exibição de resultados
    resultCount: 'Gerados {count} registros',
    resultSummary: 'Resumo de Resultados',
    showAll: 'Mostrar Todos',
    collapse: 'Recolher',
    
    // Opções de geração
    generateOptionsTitle: 'Opções de Geração',
    
    // Exibição de registro
    recordLabel: 'Registro #{num}',
    addressLabel: 'Endereço',
    streetLabel: 'Rua',
    houseNumberLabel: 'Número da Casa',
    postalCodeLabel: 'Código Postal',
    cityLabel: 'Cidade',
    stateLabel: 'Estado Federal',
    
    // Formato de endereço
    commercialArea: 'Área Comercial',
    studentDormitory: 'Dormitório Estudantil',
    library: 'Biblioteca',
    
    // 16 estados federais alemães
    states: {
        BW: 'Baden-Württemberg',
        BY: 'Baviera',
        BE: 'Berlim',
        BB: 'Brandemburgo',
        HB: 'Bremen',
        HH: 'Hamburgo',
        HE: 'Hesse',
        MV: 'Mecklemburgo-Pomerânia Ocidental',
        NI: 'Baixa Saxônia',
        NW: 'Renânia do Norte-Vestfália',
        RP: 'Renânia-Palatinado',
        SL: 'Sarre',
        SN: 'Saxônia',
        ST: 'Saxônia-Anhalt',
        SH: 'Schleswig-Holstein',
        TH: 'Turíngia'
    },
    
    // Nomes de universidades
    universities: {
        TUM: 'Universidade Técnica de Munique',
        LMU: 'Universidade Ludwig Maximilian de Munique',
        HU: 'Universidade Humboldt de Berlim',
        TU: 'Universidade Técnica de Berlim',
        UniHeidelberg: 'Universidade de Heidelberg'
    },
    
    // Nomes de colunas CSV
    csv: {
        fullAddress: 'Endereço Completo',
        street: 'Rua',
        houseNumber: 'Número da Casa',
        postalCode: 'Código Postal',
        city: 'Cidade',
        state: 'Estado Federal',
        fullName: 'Nome',
        gender: 'Gênero',
        age: 'Idade',
        birthDate: 'Data de Nascimento',
        phone: 'Telefone',
        email: 'Email',
        cardType: 'Tipo de Cartão',
        cardNumber: 'Número do Cartão',
        idCardNumber: 'Número do Documento'
    }
};
