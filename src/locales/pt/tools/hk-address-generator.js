export default {
    name: 'Gerador de Endereços HK - Gere endereços reais de Hong Kong, informações de identidade e detalhes de contato online',
    description: 'Gerador gratuito de endereços HK online que cria endereços de Hong Kong em formato real, números de identidade, telefones, números de cartão de crédito e perfis completos de identidade. Suporta filtragem por distrito, exportação em formatos JSON/CSV e executa inteiramente no navegador para proteção de privacidade.',
    inputTitle: 'Configurações de Geração',
    outputTitle: 'Resultados Gerados',
    generateBtn: 'Gerar Dados',
    loadSampleBtn: 'Carregar Exemplo e Gerar',
    clearAll: 'Limpar Tudo',
    noOutput: 'Nenhum resultado gerado ainda',
    preview: 'Pré-visualizar Dados',
    
    // Filtragem Geográfica
    locationTitle: 'Filtragem Geográfica',
    selectDistrict: 'Selecionar Distrito',
    selectArea: 'Selecionar Área',
    allDistricts: 'Todos os Distritos',
    allAreas: 'Todas as Áreas',
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
    phoneTypeLandline: 'Telefone Fixo',
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
    employmentPartTime: 'Tempo Parcial',
    
    // Cartão de Identidade
    idCardTitle: 'Cartão de Identidade de Hong Kong',
    idCardNumber: 'Número do Cartão de Identidade',
    prefixLetter: 'Letra de Prefixo',
    serialNumber: 'Número Serial',
    checkDigit: 'Dígito de Verificação',
    
    // Impressão Digital
    fingerprintTitle: 'Impressão Digital',
    os: 'Sistema Operacional',
    osVersion: 'Versão do SO',
    browser: 'Navegador',
    userAgent: 'Agente de Usuário',
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
    quantityPlaceholder: 'Digite a quantidade (1-100)',
    
    // Mensagens de Notificação
    generating: 'Gerando...',
    generated: 'Geração Concluída',
    copySuccess: 'Copiado para a área de transferência',
    downloadSuccess: 'Download bem-sucedido',
    invalidQuantity: 'Por favor, digite um número entre 1-100',
    
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
    districtLabel: 'Distrito',
    
    // Formato de Endereço
    addressNumber: 'Nº',
    addressFloor: 'Andar',
    addressUnit: 'Unidade',
    commercialUnit: '(Unidade Comercial)',
    hongKong: 'Hong Kong',
    postOfficeBox: 'Caixa Postal',
    studentDormitory: 'Dormitório Estudantil',
    teachingBuilding: 'Prédio de Ensino',
    library: 'Biblioteca',
    buildingUnit: 'Unidade',
    
    // Mensagens de Alerta
    idCardImageAlert: 'A geração de imagem do cartão de identidade requer implementação de canvas',
    businessCardAlert: 'A geração de cartão de visita requer implementação de canvas',
    
    // Nomes de Distritos
    districts: {
        CW: 'Central e Ocidental',
        WAN: 'Wan Chai',
        E: 'Leste',
        S: 'Sul',
        YTM: 'Yau Tsim Mong',
        SSP: 'Sham Shui Po',
        KC: 'Cidade de Kowloon',
        WTS: 'Wong Tai Sin',
        KT: 'Kwun Tong',
        TM: 'Tuen Mun',
        YL: 'Yuen Long',
        N: 'Norte',
        TP: 'Tai Po',
        ST: 'Sha Tin',
        SK: 'Sai Kung',
        TW: 'Tsuen Wan',
        KW: 'Kwai Tsing',
        IS: 'Ilhas'
    },
    
    // Nomes de Áreas
    areas: {
        CW: {
            central: 'Central',
            sheungWan: 'Sheung Wan',
            saiWan: 'Sai Wan',
            midLevels: 'Níveis Médios'
        },
        WAN: {
            wanChai: 'Wan Chai',
            causewayBay: 'Baía de Causeway',
            happyValley: 'Vale Feliz',
            taiHang: 'Tai Hang'
        },
        E: {
            northPoint: 'Ponto Norte',
            quarryBay: 'Baía Quarry',
            taiKooShing: 'Tai Koo Shing',
            shauKeiWan: 'Shau Kei Wan',
            chaiWan: 'Chai Wan'
        },
        S: {
            repulseBay: 'Baía Repulse',
            deepWaterBay: 'Baía Deep Water',
            stanley: 'Stanley',
            aberdeen: 'Aberdeen',
            apLeiChau: 'Ap Lei Chau'
        },
        YTM: {
            tsimShaTsui: 'Tsim Sha Tsui',
            yauMaTei: 'Yau Ma Tei',
            mongKok: 'Mong Kok',
            jordan: 'Jordan'
        },
        SSP: {
            shamShuiPo: 'Sham Shui Po',
            cheungShaWan: 'Cheung Sha Wan',
            laiChiKok: 'Lai Chi Kok',
            shekKipMei: 'Shek Kip Mei'
        },
        KC: {
            kowloonCity: 'Cidade de Kowloon',
            toKwaWan: 'To Kwa Wan',
            hungHom: 'Hung Hom',
            hoManTin: 'Ho Man Tin'
        },
        WTS: {
            wongTaiSin: 'Wong Tai Sin',
            diamondHill: 'Colina Diamante',
            sanPoKong: 'San Po Kong',
            lokFu: 'Lok Fu'
        },
        KT: {
            kwunTong: 'Kwun Tong',
            lamTin: 'Lam Tin',
            ngauTauKok: 'Ngau Tau Kok',
            kowloonBay: 'Baía de Kowloon'
        },
        TM: {
            tuenMun: 'Tuen Mun',
            yuenLong: 'Yuen Long',
            tinShuiWai: 'Tin Shui Wai',
            tsingShan: 'Tsing Shan'
        },
        YL: {
            yuenLong: 'Yuen Long',
            tinShuiWai: 'Tin Shui Wai',
            kamTin: 'Kam Tin',
            pingShan: 'Ping Shan'
        },
        N: {
            sheungShui: 'Sheung Shui',
            fanLing: 'Fan Ling',
            shaTauKok: 'Sha Tau Kok',
            taKuLing: 'Ta Ku Ling'
        },
        TP: {
            taiPo: 'Tai Po',
            taiPoMarket: 'Mercado Tai Po',
            taiWo: 'Tai Wo',
            lamTsuen: 'Lam Tsuen'
        },
        ST: {
            shaTin: 'Sha Tin',
            taiWai: 'Tai Wai',
            maOnShan: 'Ma On Shan',
            foTan: 'Fo Tan'
        },
        SK: {
            saiKung: 'Sai Kung',
            tseungKwanO: 'Tseung Kwan O',
            hangHau: 'Hang Hau',
            clearWaterBay: 'Baía Clear Water'
        },
        TW: {
            tsuenWan: 'Tsuen Wan',
            kwaiChung: 'Kwai Chung',
            tsingYi: 'Tsing Yi',
            shamTseng: 'Sham Tseng'
        }
    },
    
    // Nomes de Universidades
    universities: {
        HKU: 'Universidade de Hong Kong',
        CUHK: 'Universidade Chinesa de Hong Kong',
        HKUST: 'Universidade de Ciência e Tecnologia de Hong Kong',
        PolyU: 'Universidade Politécnica de Hong Kong',
        CityU: 'Universidade da Cidade de Hong Kong'
    },
    
    // Nomes de Colunas CSV
    csv: {
        fullAddress: 'Endereço Completo',
        street: 'Rua',
        houseNumber: 'Número da Casa',
        building: 'Prédio',
        floor: 'Andar',
        unit: 'Unidade',
        district: 'Distrito',
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