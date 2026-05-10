export default {
    name: 'Gerador de Endereços da Turquia - Gere endereços turcos reais, informações de identidade e dados de contato online',
    description: 'Gerador gratuito online de endereços da Turquia que cria endereços turcos em formato real, números de identificação, números de telefone, números de cartão de crédito e perfis de identidade completos. Suporta filtragem por província, formatos de exportação JSON/CSV e é executado inteiramente no navegador para proteção de privacidade.',
    inputTitle: 'Configurações de Geração',
    outputTitle: 'Resultados Gerados',
    generateBtn: 'Gerar Dados',
    loadSampleBtn: 'Carregar Exemplo e Gerar',
    clearAll: 'Limpar Tudo',
    noOutput: 'Nenhum resultado gerado ainda',
    preview: 'Visualizar Dados',
    
    // Filtragem Geográfica
    locationTitle: 'Filtragem Geográfica',
    selectProvince: 'Selecionar Província',
    selectDistrict: 'Selecionar Distrito',
    allProvinces: 'Todas as Províncias',
    allDistricts: 'Todos os Distritos',
    postalCodeLabel: 'Código Postal',
    validatePostalCode: 'Validar Código Postal',
    
    // Tipos de Endereço
    addressTypeTitle: 'Tipo de Endereço',
    addressTypeResidential: 'Endereço Residencial',
    addressTypeCommercial: 'Endereço Comercial',
    addressTypeVirtual: 'Caixa de Correio Virtual',
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
    industry: 'Indústria',
    employmentStatus: 'Status de Emprego',
    employmentFullTime: 'Tempo Integral',
    employmentPartTime: 'Meio Período',
    
    // Cartão de Identidade
    idCardTitle: 'Cartão de Identidade Turco',
    idCardNumber: 'Número do Cartão de Identidade',
    nationalId: 'Número de Identificação Nacional',
    serialNumber: 'Número de Série',
    checkDigit: 'Dígito Verificador',
    
    // Impressão Digital
    fingerprintTitle: 'Impressão Digital',
    os: 'Sistema Operacional',
    osVersion: 'Versão do SO',
    browser: 'Navegador',
    userAgent: 'Agente do Usuário',
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
    exportIdCard: 'Gerar Imagem do Cartão de Identidade',
    exportBusinessCard: 'Gerar Cartão de Visita',
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
    invalidQuantity: 'Por favor, insira um número entre 1-100',
    
    // Exibição de Resultados
    resultCount: '{count} registros gerados',
    resultSummary: 'Resumo dos Resultados',
    showAll: 'Mostrar Todos',
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
    districtLabel: 'Distrito',
    provinceLabel: 'Província',
    postalCode: 'Código Postal',
    
    // Formato de Endereço
    addressNumber: 'Nº',
    addressFloor: 'Andar',
    addressUnit: 'Unidade',
    commercialUnit: '(Unidade Comercial)',
    turkey: 'Turquia',
    postOfficeBox: 'Caixa Postal',
    studentDormitory: 'Residência Estudantil',
    teachingBuilding: 'Prédio de Ensino',
    library: 'Biblioteca',
    buildingUnit: 'Unidade',
    apartment: 'Apartamento',
    
    // Mensagens de Alerta
    idCardImageAlert: 'A geração de imagem do cartão de identidade requer implementação de canvas',
    businessCardAlert: 'A geração de cartão de visita requer implementação de canvas',
    
    // Nomes das Províncias (Principais províncias turcas)
    provinces: {
        IST: 'Istambul',
        ANK: 'Ancara',
        IZM: 'Esmirna',
        BUR: 'Bursa',
        ANT: 'Antália',
        ADN: 'Adana',
        GAZ: 'Gaziantep',
        KON: 'Konya',
        MRA: 'Mersin',
        KAY: 'Kayseri',
        ESK: 'Eskisehir',
        TRA: 'Trabzon',
        SAM: 'Samsun',
        MAL: 'Malatya',
        DIA: 'Diyarbakir',
        ERZ: 'Erzurum',
        VAN: 'Van',
        SIV: 'Sivas',
        TOK: 'Tokat',
        COR: 'Corum'
    },
    
    // Nomes dos Distritos (Exemplo de Istambul)
    districtsData: {
        IST: {
            beyoglu: 'Beyoglu',
            fatih: 'Fatih',
            kadikoy: 'Kadikoy',
            besiktas: 'Besiktas',
            sisli: 'Sisli',
            uskudar: 'Uskudar',
            bakirkoy: 'Bakirkoy',
            zeytinburnu: 'Zeytinburnu',
            beylikduzu: 'Beylikduzu',
            pendik: 'Pendik',
            maltepe: 'Maltepe',
            kartal: 'Kartal',
            tuzla: 'Tuzla',
            catalca: 'Catalca'
        },
        ANK: {
            cankaya: 'Cankaya',
            yenimahalle: 'Yenimahalle',
            altindag: 'Altindag',
            pursaklar: 'Pursaklar',
            eryaman: 'Eryaman',
            etimesgut: 'Etimesgut',
            sincan: 'Sincan'
        },
        IZM: {
            konak: 'Konak',
            karsiyaka: 'Karsiyaka',
            bornova: 'Bornova',
            cigli: 'Cigli',
            bayrakli: 'Bayrakli',
            balcova: 'Balcova',
            guzelbahce: 'Guzelbahce'
        },
        BUR: {
            nilufer: 'Nilufer',
            osmangazi: 'Osmangazi',
            yildirim: 'Yildirim',
            mudanya: 'Mudanya',
            gemlik: 'Gemlik'
        },
        ANT: {
            muratpasa: 'Muratpasa',
            kepez: 'Kepez',
            konyaalti: 'Konyaalti',
            aksu: 'Aksu',
            dosenmeadi: 'Dosenmeadi'
        }
    },
    
    // Nomes das Universidades
    universities: {
        ITU: 'Universidade Técnica de Istambul',
        ITU: 'Universidade de Istambul',
        BOUN: 'Universidade do Bósforo',
        METU: 'Universidade Técnica do Oriente Médio',
        HU: 'Universidade Hacettepe',
        ANU: 'Universidade de Ancara',
        DEU: 'Universidade Dokuz Eylul'
    },
    
    // Nomes das Colunas CSV
    csv: {
        fullAddress: 'Endereço Completo',
        street: 'Rua',
        houseNumber: 'Número da Casa',
        building: 'Prédio',
        floor: 'Andar',
        unit: 'Unidade',
        district: 'Distrito',
        province: 'Província',
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