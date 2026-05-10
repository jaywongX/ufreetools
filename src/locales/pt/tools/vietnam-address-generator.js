export default {
    name: 'Gerador de endereços Vietnã - Gere endereços vietnamitas reais, informações de identidade e dados de contato online',
    description: 'Gerador de endereços vietnamita online gratuito que cria endereços vietnamitas com formato real, números de identificação, números de telefone, números de cartão de crédito e perfis de identidade completos. Suporta filtragem por província, formatos de exportação JSON/CSV e é executado inteiramente no navegador para proteção de privacidade.',
    inputTitle: 'Configurações de geração',
    outputTitle: 'Resultados gerados',
    generateBtn: 'Gerar dados',
    loadSampleBtn: 'Carregar exemplo e gerar',
    clearAll: 'Limpar tudo',
    noOutput: 'Nenhum resultado gerado ainda',
    preview: 'Visualizar dados',
    
    // Filtragem geográfica
    locationTitle: 'Filtragem geográfica',
    selectProvince: 'Selecionar província/cidade',
    selectDistrict: 'Selecionar distrito',
    allProvinces: 'Todas as províncias/cidades',
    allDistricts: 'Todos os distritos',
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
    bankBin: 'BIN do banco',
    
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
    idCardTitle: 'Cartão de identidade vietnamita',
    idCardNumber: 'Número do cartão de identidade',
    cmndNumber: 'Número CMND',
    cccdNumber: 'Número CCCD',
    serialNumber: 'Número de série',
    
    // Impressão digital
    fingerprintTitle: 'Impressão digital',
    os: 'Sistema operacional',
    osVersion: 'Versão do sistema',
    browser: 'Navegador',
    userAgent: 'User Agent',
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
    exportBusinessCard: 'Gerar cartão de visitas',
    downloadBtn: 'Baixar',
    copyBtn: 'Copiar',
    viewDetails: 'Ver detalhes',
    
    // Geração em lote
    batchTitle: 'Geração em lote',
    quantityLabel: 'Quantidade',
    quantityPlaceholder: 'Insira a quantidade (1-100)',
    
    // Mensagens de notificação
    generating: 'Gerando...',
    generated: 'Geração concluída',
    copySuccess: 'Copiado para a área de transferência',
    downloadSuccess: 'Download bem-sucedido',
    invalidQuantity: 'Por favor, insira um número entre 1 e 100',
    
    // Exibição de resultados
    resultCount: '{count} registros gerados',
    resultSummary: 'Resumo dos resultados',
    showAll: 'Mostrar tudo',
    collapse: 'Recolher',
    
    // Opções de geração
    generateOptionsTitle: 'Opções de geração',
    
    // Exibição de registros
    recordLabel: 'Registro #{num}',
    addressLabel: 'Endereço',
    streetLabel: 'Rua',
    houseNumberLabel: 'Número da casa',
    buildingLabel: 'Edifício',
    floorLabel: 'Andar',
    unitLabel: 'Unidade',
    wardLabel: 'Bairro',
    districtLabel: 'Distrito',
    provinceLabel: 'Província/Cidade',
    postalCode: 'Código postal',
    
    // Formato de endereço
    addressNumber: 'Nº',
    addressFloor: 'Andar',
    addressUnit: 'Unidade',
    commercialUnit: '(Unidade comercial)',
    vietnam: 'Vietnã',
    postOfficeBox: 'Caixa postal',
    studentDormitory: 'Residência estudantil',
    teachingBuilding: 'Prédio de ensino',
    library: 'Biblioteca',
    buildingUnit: 'Unidade',
    apartment: 'Apartamento',
    
    // Mensagens de alerta
    idCardImageAlert: 'A geração de imagens de cartão de identidade requer implementação de canvas',
    businessCardAlert: 'A geração de cartões de visitas requer implementação de canvas',
    
    // Nomes das províncias (províncias vietnamitas)
    provinces: {
        HN: 'Hanói',
        HCM: 'Cidade de Ho Chi Minh',
        HP: 'Haiphong',
        DN: 'Da Nang',
        CT: 'Can Tho',
        BH: 'Ba Ria-Vung Tau',
        BD: 'Binh Duong',
        QN: 'Quang Ninh',
        QG: 'Quang Nam',
        KG: 'Ca Mau',
        DT: 'Dong Nai',
        HB: 'Ha Nam',
        TH: 'Thai Binh',
        NB: 'Nam Dinh',
        VL: 'Vinh Long',
        TG: 'Soc Trang',
        NT: 'Ninh Thuan',
        PY: 'Phu Yen',
        TV: 'Tay Ninh',
        BD: 'Binh Dinh',
        HT: 'Hoa Binh',
        TB: 'Tuyen Quang',
        TN: 'Thai Nguyen',
        LC: 'Lai Chau',
        YB: 'Yen Bai',
        DB: 'Dien Bien',
        LA: 'Lao Cai',
        CB: 'Cao Bang',
        LD: 'Lam Dong',
        DC: 'Dak Lak',
        QN: 'Quang Binh',
        QT: 'Quang Tri',
        HT: 'Ha Tinh',
        NA: 'Nghe An',
        TT: 'Thanh Hoa',
        NB: 'Ninh Binh',
        ST: 'An Giang',
        CT: 'Tra Vinh',
        BP: 'Ben Tre',
        BL: 'Bac Lieu',
        KG: 'Ca Mau',
        CM: 'Ca Mau'
    },
    
    // Dados dos distritos (exemplos para Hanói e Cidade de Ho Chi Minh)
    districtsData: {
        HN: {
            hoanKiem: 'Hoan Kiem',
            baDinh: 'Ba Dinh',
            dongDa: 'Dong Da',
            haiBaTrung: 'Hai Ba Trung',
            thanhXuan: 'Thanh Xuan',
            cauGiay: 'Cau Giay',
            hoangMai: 'Hoang Mai',
            longBien: 'Long Bien',
            tayHo: 'Tay Ho',
            bacTuLiem: 'Bac Tu Liem',
            namTuLiem: 'Nam Tu Liem',
            haDong: 'Ha Dong'
        },
        HCM: {
            quan1: 'Distrito 1',
            quan3: 'Distrito 3',
            quan4: 'Distrito 4',
            quan5: 'Distrito 5',
            quan6: 'Distrito 6',
            quan7: 'Distrito 7',
            quan10: 'Distrito 10',
            quan11: 'Distrito 11',
            binhThanh: 'Binh Thanh',
            phuNhuan: 'Phu Nhuan',
            tanBinh: 'Tan Binh',
            goVap: 'Go Vap',
            binhChanh: 'Binh Chanh',
            thuDuc: 'Thu Duc'
        },
        DN: {
            haiChau: 'Hai Chau',
            thanhKhe: 'Thanh Khe',
            sonTra: 'Son Tra',
            NguHanhSon: 'Ngu Hanh Son',
            LienChieu: 'Lien Chieu',
            CamLe: 'Cam Le'
        },
        HP: {
            HongBang: 'Hong Bang',
            LeChan: 'Le Chan',
            NgoQuyen: 'Ngo Quyen',
            HaiAn: 'Hai An',
            KiAn: 'Ki An'
        }
    },
    
    // Nomes das universidades
    universities: {
        HUST: 'Universidade de Ciência e Tecnologia de Hanói',
        VNU: 'Universidade Nacional do Vietnã',
        HANU: 'Universidade Nacional de Hanói',
        HCMUS: 'Universidade Nacional da Cidade de Ho Chi Minh',
        RMIT: 'Universidade RMIT Vietnã',
        FTU: 'Universidade de Comércio Exterior',
        NEU: 'Universidade Nacional de Economia',
        HPU: 'Universidade de Farmácia de Hanói',
        PTIT: 'Instituto de Tecnologia de Correios e Telecomunicações',
        FPT: 'Universidade FPT'
    },
    
    // Nomes das colunas CSV
    csv: {
        fullAddress: 'Endereço completo',
        street: 'Rua',
        houseNumber: 'Número da casa',
        building: 'Edifício',
        floor: 'Andar',
        unit: 'Unidade',
        ward: 'Bairro',
        district: 'Distrito',
        province: 'Província/Cidade',
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