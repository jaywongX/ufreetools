export default {
    name: 'Gerador de endereços França - Gere endereços franceses reais, informações de identidade e dados de contato online',
    description: 'Gerador de endereços francês online gratuito que cria endereços franceses com formato real, números de identificação, números de telefone, números de cartão de crédito e perfis de identidade completos. Suporta filtragem por departamento, formatos de exportação JSON/CSV e é executado inteiramente no navegador para proteção de privacidade.',
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
    selectDepartment: 'Selecionar departamento',
    allRegions: 'Todas as regiões',
    allDepartments: 'Todos os departamentos',
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
    idCardTitle: 'Cartão de identidade francês',
    idCardNumber: 'Número do cartão de identidade',
    nirNumber: 'Número NIR',
    serialNumber: 'Número de série',
    checkKey: 'Chave de verificação',
    
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
    departmentLabel: 'Departamento',
    regionLabel: 'Região',
    postalCode: 'Código postal',
    
    // Formato de endereço
    addressNumber: 'N°',
    addressFloor: 'Andar',
    addressUnit: 'Unidade',
    commercialUnit: '(Unidade comercial)',
    france: 'França',
    postOfficeBox: 'Caixa postal',
    studentDormitory: 'Residência estudantil',
    teachingBuilding: 'Prédio de ensino',
    library: 'Biblioteca',
    buildingUnit: 'Unidade',
    apartment: 'Apartamento',
    
    // Mensagens de alerta
    idCardImageAlert: 'A geração de imagem do cartão de identidade requer implementação de canvas',
    businessCardAlert: 'A geração de cartão de visita requer implementação de canvas',
    
    // Nomes de regiões (regiões francesas)
    regions: {
        IDF: 'Ilha de França',
        ARA: 'Auvérnia-Ródano-Alpes',
        OCC: 'Occitânia',
        NAQ: 'Nova Aquitânia',
        PAC: 'Provença-Alpes-Costa Azul',
        HDF: 'Alta França',
        BFC: 'Borgonha-Franco Condado',
        NAC: 'Países do Loira',
        PDL: 'Países do Loira',
        BRE: 'Bretanha',
        NOR: 'Normandia',
        GUA: 'Guadalupe',
        MQ: 'Martinica',
        GUY: 'Guiana Francesa',
        REU: 'Reunião',
        COR: 'Córsega',
        ALO: 'Alsácia-Lorena',
        MP: 'Metz-Pomerânia'
    },
    
    // Dados de departamentos (exemplo da região Ilha de França)
    departmentsData: {
        IDF: {
            paris: 'Paris',
            hautsDeSeine: 'Altos do Sena',
            seineSaintDenis: 'Sena-São Denis',
            valDeMarne: 'Vale do Marne',
            yvelines: 'Yvelines',
            essonne: 'Essonne',
            valDOise: 'Vale do Oise',
            seineEtMarne: 'Sena e Marne'
        },
        ARA: {
            rhone: 'Ródano',
            loire: 'Loira',
            isere: 'Isère',
            ain: 'Ain',
            savoie: 'Sabóia',
            hauteSavoie: 'Alta Sabóia',
            allier: 'Allier',
            puyDeDome: 'Puy-de-Dôme'
        },
        OCC: {
            herault: 'Hérault',
            gard: 'Gard',
            aude: 'Aude',
            pyreneesOrientales: 'Pirineus Orientais',
            tarn: 'Tarn',
            hauteGaronne: 'Alto Garona',
            gers: 'Gers',
            lotEtGaronne: 'Lot e Garona'
        },
        NAQ: {
            gironde: 'Gironda',
            charenteMaritime: 'Charente Marítima',
            dordogne: 'Dordonha',
            landes: 'Landes',
            vienne: 'Vienne',
            hauteVienne: 'Alto Vienne',
            charente: 'Charente',
            correze: 'Corrèze'
        },
        PAC: {
            bouchesDuRhone: 'Bocas do Ródano',
            alpesMaritimes: 'Alpes Marítimos',
            var: 'Var',
            vaucluse: 'Vaucluse',
            alpesDeHauteProvence: 'Alpes de Alta Provença',
            hautesAlpes: 'Altos Alpes'
        },
        HDF: {
            nord: 'Norte',
            pasDeCalais: 'Pas-de-Calais',
            somme: 'Somme',
            aisne: 'Aisne',
            oise: 'Oise',
            aisne: 'Aisne'
        }
    },
    
    // Nomes de universidades
    universities: {
        UP1: 'Universidade de Paris 1 Panthéon-Sorbonne',
        UP2: 'Universidade de Paris 2 Panthéon-Assas',
        UP3: 'Universidade de Paris 3 Sorbonne Nouvelle',
        UP4: 'Universidade de Paris 1 Panthéon-Sorbonne',
        UP5: 'Universidade de Paris Descartes',
        UP6: 'Universidade Pierre e Marie Curie',
        UP7: 'Universidade de Paris Diderot',
        UP8: 'Universidade de Paris 8 Vincennes-Saint-Denis',
        UP9: 'Universidade de Paris Dauphine',
        UP10: 'Universidade de Paris Nanterre',
        UP11: 'Universidade de Paris-Saclay',
        UP12: 'Universidade de Paris-Est Créteil',
        UP13: 'Universidade Sorbonne Paris Nord',
        ENS: 'École normale supérieure',
        X: 'École polytechnique'
    },
    
    // Nomes de colunas CSV
    csv: {
        fullAddress: 'Endereço completo',
        street: 'Rua',
        houseNumber: 'Número da casa',
        building: 'Prédio',
        floor: 'Andar',
        unit: 'Unidade',
        department: 'Departamento',
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