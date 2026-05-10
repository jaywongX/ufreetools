export default {
    name: 'Gerador de endereços Finlândia - Gere endereços finlandeses reais, informações de identidade e dados de contato online',
    description: 'Gerador de endereços finlandês online gratuito que cria endereços finlandeses com formato real, números de identificação, números de telefone, números de cartão de crédito e perfis de identidade completos. Suporta filtragem por região, formatos de exportação JSON/CSV e é executado inteiramente no navegador para proteção de privacidade.',
    inputTitle: 'Configurações de geração',
    outputTitle: 'Resultados gerados',
    generateBtn: 'Gerar dados',
    loadSampleBtn: 'Carregar exemplo e gerar',
    clearAll: 'Limpar tudo',
    noOutput: 'Nenhum resultado gerado ainda',
    preview: 'Visualizar dados',
    
    // Filtragem geográfica
    locationTitle: 'Filtragem geográfica',
    selectRegion: 'Selecionar região',
    selectMunicipality: 'Selecionar município',
    allRegions: 'Todas as regiões',
    allMunicipalities: 'Todos os municípios',
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
    idCardTitle: 'Cartão de identidade finlandês',
    idCardNumber: 'Número do cartão de identidade',
    henkilötunnus: 'Número de identificação pessoal',
    serialNumber: 'Número de série',
    checkDigit: 'Dígito de verificação',
    
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
    exportIdCard: 'Gerar imagem do cartão de identidade',
    exportBusinessCard: 'Gerar cartão de visita',
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
    municipalityLabel: 'Município',
    regionLabel: 'Região',
    postalCode: 'Código postal',
    
    // Formato de endereço
    addressNumber: 'N°',
    addressFloor: 'Andar',
    addressUnit: 'Unidade',
    commercialUnit: '(Unidade comercial)',
    finland: 'Finlândia',
    postOfficeBox: 'Caixa postal',
    studentDormitory: 'Residência estudantil',
    teachingBuilding: 'Prédio de ensino',
    library: 'Biblioteca',
    buildingUnit: 'Unidade',
    apartment: 'Apartamento',
    
    // Mensagens de alerta
    idCardImageAlert: 'A geração de imagem do cartão de identidade requer implementação de canvas',
    businessCardAlert: 'A geração de cartão de visita requer implementação de canvas',
    
    // Nomes de regiões (regiões finlandesas)
    regions: {
        Uusimaa: 'Uusimaa',
        Pirkanmaa: 'Pirkanmaa',
        VarsinaisSuomi: 'Varsinais-Suomi',
        PohjoisPohjanmaa: 'Pohjois-Pohjanmaa',
        KeskiSuomi: 'Keski-Suomi',
        PäijätHäme: 'Päijät-Häme',
        KantaHäme: 'Kanta-Häme',
        EteläKarjala: 'Etelä-Karjala',
        PohjoisKarjala: 'Pohjois-Karjala',
        PohjoisSavo: 'Pohjois-Savo',
        EteläSavo: 'Etelä-Savo',
        Kainuu: 'Kainuu',
        KeskiPohjanmaa: 'Keski-Pohjanmaa',
        EteläPohjanmaa: 'Etelä-Pohjanmaa',
        Satakunta: 'Satakunta',
        Ahvenanmaa: 'Ahvenanmaa',
        Lapland: 'Lappi'
    },
    
    // Dados de municípios (exemplo da região Uusimaa)
    municipalitiesData: {
        Uusimaa: {
            helsinki: 'Helsinque',
            espoo: 'Espoo',
            vantaa: 'Vantaa',
            kauniainen: 'Kauniainen',
            järvenpää: 'Järvenpää',
            kerava: 'Kerava',
            tuusula: 'Tuusula',
            nurmijärvi: 'Nurmijärvi',
            lyly: 'Länsi-Uusimaa',
            sipoo: 'Sipoo'
        },
        Pirkanmaa: {
            tampere: 'Tampere',
            Nokia: 'Nokia',
            ylöjärvi: 'Ylöjärvi',
            kangasala: 'Kangasala',
            lempäälä: 'Lempäälä',
            pirkkala: 'Pirkkala',
            orivesi: 'Orivesi',
            hängenkyrö: 'Hämeenkyrö'
        },
        VarsinaisSuomi: {
            turku: 'Turku',
            rauma: 'Rauma',
            salo: 'Salo',
            pori: 'Pori',
            kaarina: 'Kaarina',
            littoinen: 'Littoinen',
            raisio: 'Raisio',
            naantali: 'Naantali'
        },
        KeskiSuomi: {
            jyväskylä: 'Jyväskylä',
            jyväskylänML: 'Jyväskylän mlk',
            lahti: 'Lahti',
            hollola: 'Hollola',
            hrmeentti: 'Hämeenlinna',
            asikkala: 'Asikkala'
        },
        PäijätHäme: {
            lahti: 'Lahti',
            hollola: 'Hollola',
            hrmeentti: 'Hämeenlinna',
            asikkala: 'Asikkala',
            pertunmaa: 'Pertunmaa',
            hartola: 'Hartola'
        }
    },
    
    // Nomes de universidades
    universities: {
        HY: 'Universidade de Helsinque',
        AALTO: 'Universidade Aalto',
        TUNI: 'Universidade de Tampere',
        UTA: 'Universidade de Oulu',
        UTU: 'Universidade de Turku',
        JYU: 'Universidade de Jyväskylä',
        UEF: 'Universidade da Finlândia Oriental',
        TAMK: 'Universidade de Ciências Aplicadas de Tampere',
        HAAGA: 'Universidade de Ciências Aplicadas Haaga-Helia',
        Laurea: 'Universidade de Ciências Aplicadas Laurea'
    },
    
    // Nomes de colunas CSV
    csv: {
        fullAddress: 'Endereço completo',
        street: 'Rua',
        houseNumber: 'Número da casa',
        building: 'Prédio',
        floor: 'Andar',
        unit: 'Unidade',
        municipality: 'Município',
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
        idCardNumber: 'Número do cartão de identidade'
    }
};