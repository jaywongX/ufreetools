export default {
    name: 'Gerador de Endereços de Singapura - Geração online de endereços realistas de Singapura',
    description: 'Gerador gratuito de endereços de Singapura online, criando endereços realistas de Singapura, números NRIC, números de telefone, números de cartões de crédito e perfis de identidade completos. Filtragem por região, exportação JSON/CSV, funciona localmente para privacidade.',
    inputTitle: 'Configurações de Geração',
    outputTitle: 'Resultados da Geração',
    generateBtn: 'Gerar Dados',
    loadSampleBtn: 'Carregar Amostra e Gerar',
    clearAll: 'Limpar Tudo',
    noOutput: 'Nenhum resultado ainda',
    preview: 'Visualizar Dados',
    
    locationTitle: 'Filtragem Geográfica',
    selectRegion: 'Selecionar Região',
    selectArea: 'Selecionar Área',
    allRegions: 'Todas as Regiões',
    allAreas: 'Todas as Áreas',
    postalCodeLabel: 'Código Postal',
    
    addressTypeTitle: 'Tipo de Endereço',
    addressTypeResidential: 'Residencial',
    addressTypeCommercial: 'Comercial',
    addressTypeHDB: 'Apartamento HDB',
    addressTypeCondo: 'Condomínio Privado',
    
    identityTitle: 'Informações de Identidade',
    fullName: 'Nome Completo',
    gender: 'Gênero',
    genderMale: 'Masculino',
    genderFemale: 'Feminino',
    age: 'Idade',
    birthDate: 'Data de Nascimento',
    race: 'Raça',
    raceChinese: 'Chinês',
    raceMalay: 'Malaio',
    raceIndian: 'Indiano',
    raceOthers: 'Outros',
    
    contactTitle: 'Informações de Contato',
    phoneNumber: 'Número de Telefone',
    areaCode: 'Código de Área',
    email: 'Endereço de Email',
    tempEmail: 'Email Temporário',
    
    creditCardTitle: 'Informações do Cartão de Crédito',
    cardType: 'Tipo de Cartão',
    cardNumber: 'Número do Cartão',
    expiryDate: 'Data de Validade',
    cvv: 'CVV',
    bankBin: 'BIN Bancário',
    
    careerTitle: 'Perfil Profissional',
    jobTitle: 'Cargo',
    salary: 'Salário',
    companyName: 'Nome da Empresa',
    companySize: 'Tamanho da Empresa',
    industry: 'Indústria',
    employmentStatus: 'Status de Emprego',
    employmentFullTime: 'Tempo Integral',
    employmentPartTime: 'Meio Período',
    
    idCardTitle: 'Cartão NRIC',
    idCardNumber: 'Número NRIC',
    prefixLetter: 'Letra Prefixo',
    serialNumber: 'Número de Série',
    checkLetter: 'Letra de Verificação',
    
    exportTitle: 'Formato de Exportação',
    exportJson: 'Exportar JSON',
    exportCsv: 'Exportar CSV',
    downloadBtn: 'Baixar',
    copyBtn: 'Copiar',
    viewDetails: 'Ver Detalhes',
    
    batchTitle: 'Geração em Lote',
    quantityLabel: 'Quantidade',
    quantityPlaceholder: 'Digite um número (1-100)',
    
    generating: 'Gerando...',
    generated: 'Geração Concluída',
    copySuccess: 'Copiado para a área de transferência',
    downloadSuccess: 'Download concluído',
    invalidQuantity: 'Por favor, digite um número entre 1 e 100',
    
    resultCount: '{count} registros gerados',
    resultSummary: 'Resumo dos Resultados',
    showAll: 'Mostrar Tudo',
    collapse: 'Recolher',
    
    generateOptionsTitle: 'Opções de Geração',
    
    recordLabel: 'Registro #{num}',
    addressLabel: 'Endereço',
    streetLabel: 'Rua',
    houseNumberLabel: 'Número',
    buildingLabel: 'Edifício',
    unitLabel: 'Unidade',
    postalCodeLabel: 'Código Postal',
    regionLabel: 'Região',
    
    regions: {
        CR: 'Região Central',
        ER: 'Região Leste',
        NR: 'Região Norte',
        NER: 'Região Nordeste',
        WR: 'Região Oeste'
    },
    
    areas: {
        CR: {
            orchard: 'Orchard',
            riverValley: 'River Valley',
            newton: 'Newton',
            tanglin: 'Tanglin',
            bukitTimah: 'Bukit Timah',
            clementi: 'Clementi',
            queenstown: 'Queenstown'
        },
        ER: {
            bedok: 'Bedok',
            changi: 'Changi',
            pasirRis: 'Pasir Ris',
            tampines: 'Tampines',
            payaLebar: 'Paya Lebar'
        },
        NR: {
            angMoKio: 'Ang Mo Kio',
            bishan: 'Bishan',
            serangoon: 'Serangoon',
            hougang: 'Hougang',
            sengkang: 'Sengkang',
            punggol: 'Punggol'
        },
        NER: {
            hougang: 'Hougang',
            punggol: 'Punggol',
            seletar: 'Seletar',
            sengkang: 'Sengkang',
            serangoon: 'Serangoon'
        },
        WR: {
            jurongEast: 'Jurong Leste',
            jurongWest: 'Jurong Oeste',
            bukitBatok: 'Bukit Batok',
            choaChuKang: 'Choa Chu Kang',
            woodlands: 'Woodlands',
            sembawang: 'Sembawang',
            yishun: 'Yishun'
        }
    },
    
    csv: {
        fullAddress: 'Endereço Completo',
        street: 'Rua',
        houseNumber: 'Número',
        building: 'Edifício',
        postalCode: 'Código Postal',
        fullName: 'Nome',
        gender: 'Gênero',
        age: 'Idade',
        birthDate: 'Data de Nascimento',
        phone: 'Telefone',
        email: 'Email',
        cardType: 'Tipo de Cartão',
        cardNumber: 'Número do Cartão',
        idCardNumber: 'Número NRIC'
    }
};
