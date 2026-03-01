export default {
    name: '中国住所ジェネレーター - オンラインでリアルな中国住所と本人確認情報を生成',
    description: '無料のオンライン中国住所ジェネレーター。リアルな形式の中国郵便住所、ID番号、電話番号、銀行カード番号を生成。省によるフィルタリング、JSON/CSVエクスポートに対応。プライバシー保護のためクライアントサイドで動作。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: 'データを生成',
    loadSampleBtn: 'サンプルを読み込んで生成',
    clearAll: 'すべてクリア',
    noOutput: '結果はまだありません',
    preview: 'データプレビュー',
    
    // 地理フィルタリング
    locationTitle: '地理的フィルタリング',
    selectProvince: '省を選択',
    selectCity: '市を選択',
    selectDistrict: '区を選択',
    allProvinces: 'すべての省',
    allCities: 'すべての市',
    allDistricts: 'すべての区',
    postalCodeLabel: '郵便番号',
    
    // 住所タイプ
    addressTypeTitle: '住所タイプ',
    addressTypeResidential: '居住用住所',
    addressTypeCommercial: '商業用住所',
    addressTypeCampus: '大学キャンパス',
    
    // 本人確認情報
    identityTitle: '本人確認情報',
    fullName: '氏名',
    gender: '性別',
    genderMale: '男性',
    genderFemale: '女性',
    age: '年齢',
    birthDate: '生年月日',
    zodiac: '干支',
    
    // 連絡先情報
    contactTitle: '連絡先情報',
    phoneNumber: '電話番号',
    email: 'メールアドレス',
    
    // 銀行カード
    bankCardTitle: '銀行カード情報',
    bankName: '銀行名',
    cardNumber: 'カード番号',
    
    // IDカード
    idCardTitle: 'IDカード',
    idCardNumber: 'IDカード番号',
    
    // エクスポートオプション
    exportTitle: 'エクスポート形式',
    exportJson: 'JSONでエクスポート',
    exportCsv: 'CSVでエクスポート',
    downloadBtn: 'ダウンロード',
    copyBtn: 'コピー',
    viewDetails: '詳細を見る',
    
    // 一括生成
    batchTitle: '一括生成',
    quantityLabel: '生成数',
    quantityPlaceholder: '数値を入力（1-100）',
    
    // メッセージ
    generating: '生成中...',
    generated: '生成完了',
    copySuccess: 'クリップボードにコピーしました',
    downloadSuccess: 'ダウンロード完了',
    invalidQuantity: '1から100の間の数値を入力してください',
    
    // 結果表示
    resultCount: '{count}件のレコードを生成',
    resultSummary: '結果の要約',
    showAll: 'すべて表示',
    collapse: '折りたたむ',
    
    // 生成オプション
    generateOptionsTitle: '生成オプション',
    
    // レコード表示
    recordLabel: 'レコード #{num}',
    addressLabel: '住所',
    provinceLabel: '省/直轄市',
    cityLabel: '市',
    districtLabel: '区/県',
    streetLabel: '通り',
    communityLabel: '住宅地/ビル',
    
    // 省份
    provinces: {
        beijing: '北京市',
        shanghai: '上海市',
        tianjin: '天津市',
        chongqing: '重慶市',
        guangdong: '広東省',
        jiangsu: '江蘇省',
        zhejiang: '浙江省',
        shandong: '山東省',
        henan: '河南省',
        sichuan: '四川省',
        hubei: '湖北省',
        hunan: '湖南省',
        fujian: '福建省',
        anhui: '安徽省',
        hebei: '河北省',
        shaanxi: '陝西省',
        liaoning: '遼寧省',
        jilin: '吉林省',
        heilongjiang: '黒竜江省',
        yunnan: '雲南省',
        guizhou: '貴州省',
        guangxi: '広西チワン族自治区',
        hainan: '海南省',
        shanxi: '山西省',
        jiangxi: '江西省',
        gansu: '甘粛省',
        qinghai: '青海省',
        neimenggu: '内モンゴル自治区',
        ningxia: '寧夏回族自治区',
        xinjiang: '新疆ウイグル自治区',
        xizang: 'チベット自治区'
    },
    
    // 主要都市
    cities: {
        beijing: ['朝陽区', '海氈区', '東城区', '西城区', '豊台区', '石景山区', '通州区', '順義区', '大興区', '昌平区'],
        shanghai: ['浦東新区', '黄浦区', '徐匯区', '長寧区', '静安区', '普陀区', '虹口区', '楊浦区', '閔行区', '宝山区'],
        tianjin: ['和平区', '河東区', '河西区', '南開区', '河北区', '紅橋区', '海新区', '東麗区', '西青区', '津南区'],
        chongqing: ['渝中区', '大渡口区', '江北区', '沙坪堰区', '九龍坡区', '南岸区', '北碚区', '渝北区', '巴南区'],
        guangzhou: ['天河区', '越秀区', '海珠区', '茘湾区', '白雲区', '黄浦区', '番禺区', '花都区', '南沙区', '増城区'],
        shenzhen: ['福田区', '羅湖区', '南山区', '塩田区', '宝安区', '竜崗区', '竜華区', '坪山区', '光明区'],
        hangzhou: ['上城区', '下城区', '江干区', '拱墅区', '西湖区', '浜江区', '蕭山区', '余杭区', '富阳区', '臨安区'],
        nanjing: ['玄武区', '秦淮区', '建鄴区', '鼓楼区', '浦口区', '栖霞区', '雨花台区', '江寧区', '六合区', '溧水区'],
        chengdu: ['錦江区', '青羊区', '金北区', '武侯区', '成華区', '竜泉駅区', '青白江区', '新都区', '温江区', '双流区'],
        wuhan: ['江岸区', '江漢区', '硚口区', '漢陽区', '武漢区', '青山区', '洪山区', '東西湖区', '漢南区', '蔡甸区'],
        xian: ['新城区', '碑林区', '蓮湖区', '灞橋区', '未央区', '雁塔区', '閻良区', '臨潼区', '長安区', '高陵区'],
        suzhou: ['姑蘇区', '虎丘区', '呉中区', '相城区', '呉江区', '崑山市', '常熟市', '張家港市', '太倉市']
    },
    
    // 通り名の接頭辞
    streetPrefixes: ['人民', '解放', '建設', '平和', '中山', '北京', '上海', '南京', '長江', '黄河', '東風', '勝利', '光明', '幸福', '団結', '友誼', '文化', '科学技術', '革新', '発展'],
    streetSuffixes: ['路', '大道', '街', '巷', '胡同'],
    
    // 住宅地名
    communityPrefixes: ['陽光', '花園', '緑地', '金色', '調和', '幸福', '康楽', '紫荊', '薔薇', '牡丹', '碧水', '青空', '清風', '明月', '星河', '翠竹', '梧桐', '楊柳', '芙蓉', '百合'],
    communitySuffixes: ['住宅地', '庭園', '苑', '城', '湾', '府', '庭', '園', '居', '荘', 'アパート', 'ビル', '広場', 'センター'],
    
    // 銀行リスト
    banks: [
        '中国工商銀行', '中国建設銀行', '中国農業銀行', '中国銀行', '交通銀行',
        '招商銀行', '中信銀行', '浦東発展銀行', '民生銀行', '興業銀行',
        '光大銀行', '華夏銀行', '平安銀行', '広発銀行', '郵貯銀行'
    ],
    
    // CSV列名
    csv: {
        fullAddress: '完全住所',
        province: '省',
        city: '市',
        district: '区',
        street: '通り',
        community: '住宅地',
        fullName: '氏名',
        gender: '性別',
        age: '年齢',
        birthDate: '生年月日',
        phone: '電話番号',
        email: 'メール',
        idCardNumber: 'IDカード番号',
        bankName: '銀行',
        cardNumber: 'カード番号'
    }
};
