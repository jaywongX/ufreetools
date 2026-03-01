export default {
    name: 'Gerador de Endereços Chineses - Geração online de endereços chineses reais e informações de identidade',
    description: 'Gerador gratuito de endereços chineses online, criando endereços postais chineses em formato real, números de identidade, números de telefone e números de cartões bancários. Suporta filtragem por província, exportação JSON/CSV, funciona no lado do cliente para proteger a privacidade.',
    inputTitle: 'Configurações de Geração',
    outputTitle: 'Resultados da Geração',
    generateBtn: 'Gerar Dados',
    loadSampleBtn: 'Carregar Exemplo e Gerar',
    clearAll: 'Limpar Tudo',
    noOutput: 'Nenhum resultado ainda',
    preview: 'Visualizar Dados',
    
    // Filtragem Geográfica
    locationTitle: 'Filtragem Geográfica',
    selectProvince: 'Selecionar Província',
    selectCity: 'Selecionar Cidade',
    selectDistrict: 'Selecionar Distrito',
    allProvinces: 'Todas as Províncias',
    allCities: 'Todas as Cidades',
    allDistricts: 'Todos os Distritos',
    postalCodeLabel: 'Código Postal',
    
    // Tipo de Endereço
    addressTypeTitle: 'Tipo de Endereço',
    addressTypeResidential: 'Endereço Residencial',
    addressTypeCommercial: 'Endereço Comercial',
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
    
    // Informações de Contato
    contactTitle: 'Informações de Contato',
    phoneNumber: 'Número de Telefone',
    email: 'Endereço de Email',
    
    // Cartão Bancário
    bankCardTitle: 'Informações do Cartão Bancário',
    bankName: 'Nome do Banco',
    cardNumber: 'Número do Cartão',
    
    // Cartão de Identidade
    idCardTitle: 'Cartão de Identidade',
    idCardNumber: 'Número do Cartão de Identidade',
    
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
    quantityPlaceholder: 'Digite um número (1-100)',
    
    // Mensagens
    generating: 'Gerando...',
    generated: 'Geração Concluída',
    copySuccess: 'Copiado para a área de transferência',
    downloadSuccess: 'Download concluído',
    invalidQuantity: 'Por favor, digite um número entre 1 e 100',
    
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
    provinceLabel: 'Província/Município',
    cityLabel: 'Cidade',
    districtLabel: 'Distrito/Condado',
    streetLabel: 'Rua',
    communityLabel: 'Condomínio/Edifício',
    
    // Províncias
    provinces: {
        beijing: 'Pequim',
        shanghai: 'Xangai',
        tianjin: 'Tianjin',
        chongqing: 'Chongqing',
        guangdong: 'Guangdong',
        jiangsu: 'Jiangsu',
        zhejiang: 'Zhejiang',
        shandong: 'Shandong',
        henan: 'Henan',
        sichuan: 'Sichuan',
        hubei: 'Hubei',
        hunan: 'Hunan',
        fujian: 'Fujian',
        anhui: 'Anhui',
        hebei: 'Hebei',
        shaanxi: 'Shaanxi',
        liaoning: 'Liaoning',
        jilin: 'Jilin',
        heilongjiang: 'Heilongjiang',
        yunnan: 'Yunnan',
        guizhou: 'Guizhou',
        guangxi: 'Guangxi',
        hainan: 'Hainan',
        shanxi: 'Shanxi',
        jiangxi: 'Jiangxi',
        gansu: 'Gansu',
        qinghai: 'Qinghai',
        neimenggu: 'Mongólia Interior',
        ningxia: 'Ningxia',
        xinjiang: 'Xinjiang',
        xizang: 'Tibete'
    },
    
    // Cidades Principais
    cities: {
        beijing: ['Distrito de Chaoyang', 'Distrito de Haidian', 'Distrito de Dongcheng', 'Distrito de Xicheng', 'Distrito de Fengtai', 'Distrito de Shijingshan', 'Distrito de Tongzhou', 'Distrito de Shunyi', 'Distrito de Daxing', 'Distrito de Changping'],
        shanghai: ['Distrito de Pudong', 'Distrito de Huangpu', 'Distrito de Xuhui', 'Distrito de Changning', 'Distrito de Jing\'an', 'Distrito de Putuo', 'Distrito de Hongkou', 'Distrito de Yangpu', 'Distrito de Minhang', 'Distrito de Baoshan'],
        tianjin: ['Distrito de Heping', 'Distrito de Hedong', 'Distrito de Hexi', 'Distrito de Nankai', 'Distrito de Hebei', 'Distrito de Hongqiao', 'Distrito de Binhai', 'Distrito de Dongli', 'Distrito de Xiqing', 'Distrito de Jinnan'],
        chongqing: ['Distrito de Yuzhong', 'Distrito de Dadukou', 'Distrito de Jiangbei', 'Distrito de Shapingba', 'Distrito de Jiulongpo', 'Distrito de Nan\'an', 'Distrito de Beibei', 'Distrito de Yubei', 'Distrito de Banan'],
        guangzhou: ['Distrito de Tianhe', 'Distrito de Yuexiu', 'Distrito de Haizhu', 'Distrito de Liwan', 'Distrito de Baiyun', 'Distrito de Huangpu', 'Distrito de Panyu', 'Distrito de Huadu', 'Distrito de Nansha', 'Distrito de Zengcheng'],
        shenzhen: ['Distrito de Futian', 'Distrito de Luohu', 'Distrito de Nanshan', 'Distrito de Yantian', 'Distrito de Bao\'an', 'Distrito de Longgang', 'Distrito de Longhua', 'Distrito de Pingshan', 'Distrito de Guangming'],
        hangzhou: ['Distrito de Shangcheng', 'Distrito de Xiacheng', 'Distrito de Jianggan', 'Distrito de Gongshu', 'Distrito de Xihu', 'Distrito de Binjiang', 'Distrito de Xiaoshan', 'Distrito de Yuhang', 'Distrito de Fuyang', 'Distrito de Lin\'an'],
        nanjing: ['Distrito de Xuanwu', 'Distrito de Qinhuai', 'Distrito de Jianye', 'Distrito de Gulou', 'Distrito de Pukou', 'Distrito de Qixia', 'Distrito de Yuhuatai', 'Distrito de Jiangning', 'Distrito de Liuhe', 'Distrito de Lishui'],
        chengdu: ['Distrito de Jinjiang', 'Distrito de Qingyang', 'Distrito de Jinniu', 'Distrito de Wuhou', 'Distrito de Chenghua', 'Distrito de Longquanyi', 'Distrito de Qingbaijiang', 'Distrito de Xindu', 'Distrito de Wenjiang', 'Distrito de Shuangliu'],
        wuhan: ['Distrito de Jiang\'an', 'Distrito de Jianghan', 'Distrito de Qiaokou', 'Distrito de Hanyang', 'Distrito de Wuchang', 'Distrito de Qingshan', 'Distrito de Hongshan', 'Distrito de Dongxihu', 'Distrito de Hannan', 'Distrito de Caidian'],
        xian: ['Distrito de Xincheng', 'Distrito de Beilin', 'Distrito de Lianhu', 'Distrito de Baqiao', 'Distrito de Weiyang', 'Distrito de Yanta', 'Distrito de Yanliang', 'Distrito de Lintong', 'Distrito de Chang\'an', 'Distrito de Gaoling'],
        suzhou: ['Distrito de Gusu', 'Distrito de Huqiu', 'Distrito de Wuzhong', 'Distrito de Xiangcheng', 'Distrito de Wujiang', 'Cidade de Kunshan', 'Cidade de Changshu', 'Cidade de Zhangjiagang', 'Cidade de Taicang']
    },
    
    // Prefixos de Nomes de Ruas
    streetPrefixes: ['Povo', 'Libertação', 'Construção', 'Paz', 'Zhongshan', 'Pequim', 'Xangai', 'Nanjing', 'Yangtzé', 'Amarelo', 'Dongfeng', 'Vitória', 'Luz', 'Felicidade', 'Unidade', 'Amizade', 'Cultura', 'Tecnologia', 'Inovação', 'Desenvolvimento'],
    streetSuffixes: ['rua', 'avenida', 'rua', 'beco', 'viela'],
    
    // Nomes de Condomínios
    communityPrefixes: ['Ensolarado', 'Jardim', 'Verde', 'Dourado', 'Harmonioso', 'Feliz', 'Saúde', 'Flor', 'Rosa', 'Peônia', 'Água Azul', 'Céu Azul', 'Brisa', 'Lua', 'Galáxia', 'Bambu', 'Álamo', 'Salgueiro', 'Lótus', 'Lírio'],
    communitySuffixes: ['condomínio', 'jardim', 'bairro', 'cidade', 'baía', 'palácio', 'pátio', 'parque', 'vila', 'aldeia', 'apartamentos', 'torre', 'praça', 'centro'],
    
    // Lista de Bancos
    banks: [
        'Banco Industrial e Comercial da China', 'Banco de Construção da China', 'Banco Agrícola da China', 'Banco da China', 'Banco de Comunicações',
        'Banco de Mercadores', 'Banco CITIC', 'Banco Pudong Development', 'Banco Minsheng', 'Banco Industrial',
        'Banco Ever Bright', 'Banco Hua Xia', 'Banco Ping An', 'Banco Guangfa', 'Banco Postal de Poupança'
    ],
    
    // Cabeçalhos de Colunas CSV
    csv: {
        fullAddress: 'Endereço Completo',
        province: 'Província',
        city: 'Cidade',
        district: 'Distrito',
        street: 'Rua',
        community: 'Condomínio',
        fullName: 'Nome',
        gender: 'Gênero',
        age: 'Idade',
        birthDate: 'Data de Nascimento',
        phone: 'Telefone',
        email: 'Email',
        idCardNumber: 'Número do Cartão de Identidade',
        bankName: 'Banco',
        cardNumber: 'Número do Cartão'
    }
};
