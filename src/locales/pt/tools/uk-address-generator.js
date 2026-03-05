export default {
    name: 'Gerador de Endereços do Reino Unido - Gerar endereços reais do Reino Unido, informações de identidade e contatos online',
    description: 'Gerador gratuito de endereços do Reino Unido online. Gera endereços britânicos em formato real, números de seguro nacional (NINO), telefones, números de cartão de crédito e perfis de identidade completos. Filtrar por condado, exportar em JSON/CSV, processamento frontend puro para privacidade.',
    inputTitle: 'Configuração de Geração',
    outputTitle: 'Resultados',
    generateBtn: 'Gerar Dados',
    loadSampleBtn: 'Carregar Exemplo e Gerar',
    clearAll: 'Limpar Tudo',
    noOutput: 'Sem resultados',
    preview: 'Visualizar',
    
    locationTitle: 'Filtro Geográfico',
    selectCounty: 'Selecionar Condado',
    selectCity: 'Selecionar Cidade',
    allCounties: 'Todos os Condados',
    allCities: 'Todas as Cidades',
    postcodeLabel: 'Código Postal',
    validatePostcode: 'Validar Código Postal',
    
    addressTypeTitle: 'Tipo de Endereço',
    addressTypeResidential: 'Endereço Residencial',
    addressTypeCommercial: 'Endereço Comercial',
    addressTypePoBox: 'Caixa Postal',
    addressTypeCampus: 'Campus Universitário',
    
    identityTitle: 'Informações de Identidade',
    fullName: 'Nome Completo',
    gender: 'Gênero',
    genderMale: 'Masculino',
    genderFemale: 'Feminino',
    age: 'Idade',
    birthDate: 'Data de Nascimento',
    zodiac: 'Signo Zodiacal',
    height: 'Altura',
    weight: 'Peso',
    
    contactTitle: 'Informações de Contato',
    phoneNumber: 'Número de Telefone',
    phoneType: 'Tipo de Telefone',
    phoneTypeMobile: 'Celular',
    phoneTypeLandline: 'Fixo',
    areaCode: 'Código de Área',
    email: 'Endereço de Email',
    tempEmail: 'Email Temporário',
    
    creditCardTitle: 'Informações de Cartão de Crédito',
    cardType: 'Tipo de Cartão',
    cardNumber: 'Número do Cartão',
    expiryDate: 'Data de Validade',
    cvv: 'CVV',
    bankBin: 'Código BIN Bancário',
    
    careerTitle: 'Perfil Profissional',
    jobTitle: 'Cargo',
    salary: 'Salário',
    companyName: 'Nome da Empresa',
    companySize: 'Tamanho da Empresa',
    industry: 'Indústria',
    employmentStatus: 'Status de Emprego',
    employmentFullTime: 'Tempo Integral',
    employmentPartTime: 'Meio Período',
    
    idCardTitle: 'Número de Seguro Nacional (NINO)',
    idCardNumber: 'Número de Seguro Nacional',
    prefixLetter: 'Letra Prefixo',
    serialNumber: 'Número de Série',
    suffixLetter: 'Letra Sufixo',
    
    fingerprintTitle: 'Impressão Digital',
    os: 'Sistema Operacional',
    osVersion: 'Versão do Sistema',
    browser: 'Navegador',
    userAgent: 'User Agent',
    screenResolution: 'Resolução de Tela',
    timezone: 'Fuso Horário',
    guid: 'GUID',
    ipAddress: 'Endereço IP',
    macAddress: 'Endereço MAC',
    cookiePolicy: 'Política de Cookies',
    
    exportTitle: 'Formato de Exportação',
    exportJson: 'Exportar JSON',
    exportCsv: 'Exportar CSV',
    downloadBtn: 'Baixar',
    copyBtn: 'Copiar',
    viewDetails: 'Ver Detalhes',
    
    batchTitle: 'Geração em Lote',
    quantityLabel: 'Quantidade a Gerar',
    quantityPlaceholder: 'Digite a quantidade (1-100)',
    
    generating: 'Gerando...',
    generated: 'Geração Concluída',
    copySuccess: 'Copiado para a área de transferência',
    downloadSuccess: 'Download bem-sucedido',
    invalidQuantity: 'Digite um número entre 1-100',
    
    resultCount: 'Total de {count} registros gerados',
    resultSummary: 'Resumo dos Resultados',
    showAll: 'Mostrar Tudo',
    collapse: 'Recolher',
    
    generateOptionsTitle: 'Opções de Geração',
    
    recordLabel: 'Registro #{num}',
    addressLabel: 'Endereço',
    streetLabel: 'Rua',
    houseNumberLabel: 'Número',
    buildingLabel: 'Edifício',
    cityLabel: 'Cidade',
    countyLabel: 'Condado',
    
    counties: {
        LND: 'Grande Londres',
        GRM: 'Grande Manchester',
        MAN: 'Manchester',
        BIR: 'Midlands Ocidentais',
        LEE: 'Yorkshire Ocidental',
        SHE: 'Yorkshire do Sul',
        LIV: 'Merseyside',
        BRS: 'Bristol',
        NEW: 'Tyne e Wear',
        NOT: 'Nottinghamshire',
        EDB: 'Edimburgo',
        GLA: 'Glasgow',
        CDF: 'Cardiff',
        BEL: 'Belfast',
        SOU: 'Southampton',
        POR: 'Plymouth',
        BRI: 'Brighton',
        CAM: 'Cambridgeshire'
    },
    
    cities: {
        LND: {
            westminster: 'Westminster',
            kensington: 'Kensington',
            chelsea: 'Chelsea',
            camden: 'Camden',
            islington: 'Islington',
            hackney: 'Hackney',
            towerHamlets: 'Tower Hamlets',
            greenwich: 'Greenwich'
        },
        GRM: {
            manchester: 'Manchester',
            salford: 'Salford',
            bolton: 'Bolton',
            bury: 'Bury',
            oldham: 'Oldham',
            rochdale: 'Rochdale',
            stockport: 'Stockport',
            wigan: 'Wigan'
        },
        MAN: {
            manchesterCity: 'Cidade de Manchester',
            trafford: 'Trafford',
            tameside: 'Tameside',
            sale: 'Sale'
        },
        BIR: {
            birmingham: 'Birmingham',
            coventry: 'Coventry',
            wolverhampton: 'Wolverhampton',
            dudley: 'Dudley',
            walsall: 'Walsall',
            sandwell: 'Sandwell',
            solihull: 'Solihull'
        },
        LEE: {
            leeds: 'Leeds',
            bradford: 'Bradford',
            wakefield: 'Wakefield',
            kirklees: 'Kirklees',
            calderdale: 'Calderdale'
        },
        SHE: {
            sheffield: 'Sheffield',
            rotherham: 'Rotherham',
            doncaster: 'Doncaster',
            barnsley: 'Barnsley'
        },
        LIV: {
            liverpool: 'Liverpool',
            knowsley: 'Knowsley',
            sefton: 'Sefton',
            wirral: 'Wirral',
            stHelens: 'St Helens'
        },
        BRS: {
            bristol: 'Bristol',
            southGloucestershire: 'Gloucestershire do Sul',
            bath: 'Bath'
        },
        NEW: {
            newcastle: 'Newcastle',
            gateshead: 'Gateshead',
            sunderland: 'Sunderland',
            durham: 'Durham',
            northTyneside: 'Tyneside Norte',
            southTyneside: 'Tyneside Sul'
        },
        NOT: {
            nottingham: 'Nottingham',
            derby: 'Derby',
            leicester: 'Leicester',
            lincoln: 'Lincoln'
        },
        EDB: {
            edinburgh: 'Edimburgo',
            glasgow: 'Glasgow',
            aberdeen: 'Aberdeen',
            dundee: 'Dundee',
            inverness: 'Inverness'
        },
        GLA: {
            glasgowCity: 'Cidade de Glasgow',
            paisley: 'Paisley',
            motherwell: 'Motherwell',
            hamilton: 'Hamilton',
            eastKilbride: 'East Kilbride'
        },
        CDF: {
            cardiff: 'Cardiff',
            swansea: 'Swansea',
            newport: 'Newport',
            wrexham: 'Wrexham',
            barry: 'Barry'
        },
        BEL: {
            belfast: 'Belfast',
            derry: 'Derry',
            lisburn: 'Lisburn',
            newry: 'Newry',
            bangor: 'Bangor'
        },
        SOU: {
            southampton: 'Southampton',
            portsmouth: 'Portsmouth',
            bournemouth: 'Bournemouth',
            poole: 'Poole',
            winchester: 'Winchester'
        },
        POR: {
            plymouth: 'Plymouth',
            exeter: 'Exeter',
            truro: 'Truro',
            bath: 'Bath',
            taunton: 'Taunton'
        },
        BRI: {
            brighton: 'Brighton',
            hove: 'Hove',
            worthing: 'Worthing',
            eastbourne: 'Eastbourne',
            hastings: 'Hastings'
        },
        CAM: {
            cambridge: 'Cambridge',
            oxford: 'Oxford',
            peterborough: 'Peterborough',
            luton: 'Luton',
            miltonKeynes: 'Milton Keynes'
        }
    },
    
    universities: {
        OXF: 'Universidade de Oxford',
        CAM: 'Universidade de Cambridge',
        IMP: 'Imperial College London',
        UCL: 'University College London',
        EDB: 'Universidade de Edimburgo'
    },
    
    studentHall: 'Residência Estudantil',
    academicBuilding: 'Prédio Acadêmico',
    library: 'Biblioteca',
    
    csv: {
        fullAddress: 'Endereço Completo',
        street: 'Rua',
        houseNumber: 'Número',
        building: 'Edifício',
        postcode: 'Código Postal',
        city: 'Cidade',
        county: 'Condado',
        fullName: 'Nome',
        gender: 'Gênero',
        age: 'Idade',
        birthDate: 'Data de Nascimento',
        phone: 'Telefone',
        email: 'Email',
        cardType: 'Tipo de Cartão',
        cardNumber: 'Número do Cartão',
        idCardNumber: 'Número de Seguro Nacional'
    }
};
