export default {
    name: 'Gerador de Endereços México - Gere endereços mexicanos reais, informações de identidade e dados de contato online',
    description: 'Gerador de endereços mexicanos online gratuito que cria endereços no formato real, números de identificação RFC/CURP, números de telefone, números de cartão de crédito e perfis de identidade completos. Suporta filtragem por estado, formatos de exportação JSON/CSV e funciona inteiramente no navegador para proteção de privacidade.',
    inputTitle: 'Configurações de Geração',
    outputTitle: 'Resultados Gerados',
    generateBtn: 'Gerar Dados',
    loadSampleBtn: 'Carregar Exemplo e Gerar',
    clearAll: 'Limpar Tudo',
    noOutput: 'Nenhum resultado gerado ainda',
    preview: 'Pré-visualização dos Dados',
    
    // Filtragem Geográfica
    locationTitle: 'Filtragem Geográfica',
    selectState: 'Selecionar Estado',
    selectCity: 'Selecionar Cidade',
    allStates: 'Todos os Estados',
    allCities: 'Todas as Cidades',
    
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
    zodiac: 'Signo',
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
    cardType: 'Tipo do Cartão',
    cardNumber: 'Número do Cartão',
    expiryDate: 'Data de Validade',
    cvv: 'CVV',
    bankBin: 'BIN Bancário',
    
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
    
    // Carteira de Identidade
    idCardTitle: 'Carteira de Identidade Mexicana',
    rfcLabel: 'RFC (Registro Federal de Contribuintes)',
    curpLabel: 'CURP (Chave Única de Registro de População)',
    
    // Digital Impression
    fingerprintTitle: 'Impressão Digital',
    os: 'Sistema Operacional',
    osVersion: 'Versão do Sistema',
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
    quantityPlaceholder: 'Insira a quantidade (1-100)',
    
    // Mensagens de Notificação
    generating: 'Gerando...',
    generated: 'Geração Concluída',
    copySuccess: 'Copiado para a área de transferência',
    downloadSuccess: 'Download bem-sucedido',
    invalidQuantity: 'Por favor, insira um número entre 1 e 100',
    
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
    neighborhoodLabel: 'Bairro',
    postalCodeLabel: 'Código Postal',
    cityLabel: 'Cidade',
    stateLabel: 'Estado',
    
    // Formato de Endereço
    commercialAddress: '(Endereço Comercial)',
    postOfficeBox: 'Caixa Postal',
    studentDormitory: 'Residência Estudantil',
    teachingBuilding: 'Prédio de Ensino',
    library: 'Biblioteca',
    
    // Estados do México (32 estados)
    states: {
        AGS: 'Aguascalientes',
        BCN: 'Baixa Califórnia',
        BCS: 'Baixa Califórnia do Sul',
        CAMP: 'Campeche',
        COAH: 'Coahuila',
        COL: 'Colima',
        CHIS: 'Chiapas',
        CHIH: 'Chihuahua',
        CDMX: 'Cidade do México',
        DUR: 'Durango',
        GTO: 'Guanajuato',
        GRO: 'Guerrero',
        HGO: 'Hidalgo',
        JAL: 'Jalisco',
        MEX: 'Estado do México',
        MIC: 'Michoacán',
        MOR: 'Morelos',
        NAY: 'Nayarit',
        NLE: 'Nuevo León',
        OAX: 'Oaxaca',
        PUE: 'Puebla',
        QRO: 'Querétaro',
        QROO: 'Quintana Roo',
        SLP: 'San Luis Potosí',
        SIN: 'Sinaloa',
        SON: 'Sonora',
        TAB: 'Tabasco',
        TAM: 'Tamaulipas',
        TLAX: 'Tlaxcala',
        VER: 'Veracruz',
        YUC: 'Yucatán',
        ZAC: 'Zacatecas'
    },
    
    // Nomes das Universidades
    universities: {
        UNAM: 'Universidade Nacional Autônoma do México',
        IPN: 'Instituto Politécnico Nacional',
        UdeG: 'Universidade de Guadalajara',
        UANL: 'Universidade Autônoma de Nuevo León'
    },
    
    // Nomes das Colunas CSV
    csv: {
        fullAddress: 'Endereço Completo',
        street: 'Rua',
        houseNumber: 'Número da Casa',
        neighborhood: 'Bairro',
        postalCode: 'Código Postal',
        city: 'Cidade',
        state: 'Estado',
        fullName: 'Nome Completo',
        gender: 'Gênero',
        age: 'Idade',
        birthDate: 'Data de Nascimento',
        phone: 'Telefone',
        email: 'E-mail',
        cardType: 'Tipo do Cartão',
        cardNumber: 'Número do Cartão',
        rfc: 'RFC',
        curp: 'CURP'
    }
};