export default {
    name: 'Gerador de Endereços Cazaquistão - Gere endereços cazaques reais, informações de identidade e dados de contato online',
    description: 'Gerador de endereços cazaques online gratuito que cria endereços no formato real, números de identificação (ИИН), números de telefone, números de cartão de crédito e perfis de identidade completos. Suporta filtragem por região, formatos de exportação JSON/CSV e funciona inteiramente no navegador para proteção de privacidade.',
    inputTitle: 'Configurações de Geração',
    outputTitle: 'Resultados Gerados',
    generateBtn: 'Gerar Dados',
    loadSampleBtn: 'Carregar Exemplo e Gerar',
    clearAll: 'Limpar Tudo',
    noOutput: 'Nenhum resultado gerado ainda',
    preview: 'Pré-visualização dos Dados',
    
    // Filtragem Geográfica
    locationTitle: 'Filtragem Geográfica',
    selectRegion: 'Selecionar Região/Cidade',
    selectCity: 'Selecionar Cidade',
    allRegions: 'Todas as Regiões/Cidades',
    allCities: 'Todas as Cidades',
    postalCodeLabel: 'Código Postal',
    
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
    
    // Carteira de Identidade
    idCardTitle: 'Carteira de Identidade Cazaque (ИИН)',
    idCardNumber: 'Número da Carteira de Identidade (ИИН)',
    
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
    buildingLabel: 'Edifício',
    floorLabel: 'Andar',
    unitLabel: 'Unidade',
    regionLabel: 'Região/Cidade',
    
    // Formato de Endereço
    addressFloor: 'Andar',
    addressUnit: 'Unidade',
    commercialUnit: '(Unidade Comercial)',
    postOfficeBox: 'Caixa Postal',
    studentDormitory: 'Residência Estudantil',
    teachingBuilding: 'Prédio de Ensino',
    library: 'Biblioteca',
    buildingUnit: 'Edifício',
    
    // Nomes das Regiões (Regiões do Cazaquistão)
    regions: {
        NUR: 'Nursultan (Astana)',
        ALA: 'Almaty',
        SHY: 'Shymkent',
        AKM: 'Região de Akmola',
        AKT: 'Região de Aktobe',
        ATY: 'Região de Atyrau',
        MAN: 'Região de Mangystau',
        PAV: 'Região de Pavlodar',
        SKZ: 'Região do Sul do Cazaquistão',
        KUS: 'Região de Kostanay',
        KAR: 'Região de Karaganda',
        ZAP: 'Região do Oeste do Cazaquistão',
        MNG: 'Região de Zhambyl',
        TUR: 'Região de Almaty',
        YUZ: 'Região de Kyzylorda',
        VOS: 'Região do Leste do Cazaquistão',
        ZHE: 'Região de Zhezkazgan'
    },
    
    // Dados das Cidades
    cities: {
        NUR: {
            nursultan: 'Nursultan'
        },
        ALA: {
            almaty: 'Almaty'
        },
        SHY: {
            shymkent: 'Shymkent'
        },
        AKM: {
            akmola: 'Akmola',
            kokshetau: 'Kokshetau'
        },
        AKT: {
            aktobe: 'Aktobe'
        },
        ATY: {
            atyrau: 'Atyrau'
        },
        MAN: {
            aktau: 'Aktau'
        },
        PAV: {
            pavlodar: 'Pavlodar'
        },
        SKZ: {
            turkestan: 'Turkestan'
        },
        KUS: {
            kostanay: 'Kostanay'
        },
        KAR: {
            karaganda: 'Karaganda'
        },
        ZAP: {
            uralsk: 'Uralsk'
        },
        MNG: {
            taraz: 'Taraz'
        },
        TUR: {
            taldykorgan: 'Taldykorgan'
        },
        YUZ: {
            kyzylorda: 'Kyzylorda'
        },
        VOS: {
            'ust-kamenogorsk': 'Ust-Kamenogorsk'
        },
        ZHE: {
            temirtau: 'Temirtau'
        }
    },
    
    // Nomes das Colunas CSV
    csv: {
        fullAddress: 'Endereço Completo',
        street: 'Rua',
        houseNumber: 'Número da Casa',
        building: 'Edifício',
        floor: 'Andar',
        unit: 'Unidade',
        region: 'Região/Cidade',
        postalCode: 'Código Postal',
        fullName: 'Nome Completo',
        gender: 'Gênero',
        age: 'Idade',
        birthDate: 'Data de Nascimento',
        phone: 'Telefone',
        email: 'E-mail',
        cardType: 'Tipo do Cartão',
        cardNumber: 'Número do Cartão',
        idCardNumber: 'Número da Carteira de Identidade'
    }
};