export default {
    name: '日本住所生成ツール - オンラインでリアルな日本住所、身分情報、連絡先を生成',
    description: '無料オンライン日本住所生成ツール。リアルな形式の日本住所、個人番号（マイナンバー）、電話番号、クレジットカード番号などの完全な身分プロファイルを生成。都道府県でフィルタリング、JSON/CSV形式でエクスポート、完全にブラウザ内で実行されプライバシーを保護。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: 'データを生成',
    loadSampleBtn: 'サンプルを読み込んで生成',
    clearAll: 'すべてクリア',
    noOutput: '生成結果はまだありません',
    preview: 'データをプレビュー',
    
    // 地理フィルタリング
    locationTitle: '地理位置フィルタ',
    selectPrefecture: '都道府県を選択',
    selectCity: '市区町村を選択',
    allPrefectures: 'すべての都道府県',
    allCities: 'すべての市区町村',
    postalCodeLabel: '郵便番号',
    validatePostalCode: '郵便番号を検証',
    
    // 住所タイプ
    addressTypeTitle: '住所タイプ',
    addressTypeResidential: '住宅住所',
    addressTypeCommercial: '商用住所',
    addressTypeVirtual: 'バーチャルメールボックス',
    addressTypeCampus: '大学キャンパス',
    
    // 身分情報
    identityTitle: '身分情報',
    fullName: '氏名',
    fullNameKana: 'カタカナ名',
    gender: '性別',
    genderMale: '男性',
    genderFemale: '女性',
    age: '年齢',
    birthDate: '生年月日',
    zodiac: '星座',
    bloodType: '血液型',
    height: '身長',
    weight: '体重',
    
    // 連絡先
    contactTitle: '連絡先情報',
    phoneNumber: '電話番号',
    phoneType: '電話タイプ',
    phoneTypeMobile: '携帯電話',
    phoneTypeLandline: '固定電話',
    areaCode: '市外局番',
    email: 'メールアドレス',
    tempEmail: '一時メール',
    
    // クレジットカード
    creditCardTitle: 'クレジットカード情報',
    cardType: 'カードタイプ',
    cardNumber: 'カード番号',
    expiryDate: '有効期限',
    cvv: 'CVV',
    bankBin: '銀行BINコード',
    
    // キャリア
    careerTitle: 'キャリアプロファイル',
    jobTitle: '役職',
    salary: '給与',
    companyName: '会社名',
    companySize: '会社規模',
    industry: '業界',
    employmentStatus: '雇用形態',
    employmentFullTime: '正社員',
    employmentPartTime: '契約社員',
    
    // 個人番号（マイナンバー）
    idCardTitle: '個人番号（マイナンバー）',
    idCardNumber: '個人番号',
    
    // デジタルフィンガープリント
    fingerprintTitle: 'デジタルフィンガープリント',
    os: 'オペレーティングシステム',
    osVersion: 'OSバージョン',
    browser: 'ブラウザ',
    userAgent: 'User Agent',
    screenResolution: '画面解像度',
    timezone: 'タイムゾーン',
    guid: 'GUID',
    ipAddress: 'IPアドレス',
    macAddress: 'MACアドレス',
    cookiePolicy: 'Cookieポリシー',
    
    // エクスポートオプション
    exportTitle: 'エクスポート形式',
    exportJson: 'JSONをエクスポート',
    exportCsv: 'CSVをエクスポート',
    exportIdCard: '住民票画像を生成',
    exportBusinessCard: '名刺を生成',
    downloadBtn: 'ダウンロード',
    copyBtn: 'コピー',
    viewDetails: '詳細を表示',
    
    // 一括生成
    batchTitle: '一括生成',
    quantityLabel: '生成数量',
    quantityPlaceholder: '数量を入力（1-100）',
    
    // ステータスメッセージ
    generating: '生成中...',
    generated: '生成完了',
    copySuccess: 'クリップボードにコピーしました',
    downloadSuccess: 'ダウンロード成功',
    invalidQuantity: '1〜100の数字を入力してください',
    
    // 結果表示
    resultCount: '{count}件のレコードを生成しました',
    resultSummary: '結果概要',
    showAll: 'すべて表示',
    collapse: '折りたたむ',
    
    // 生成オプション
    generateOptionsTitle: '生成オプション',
    
    // レコード表示
    recordLabel: 'レコード #{num}',
    addressLabel: '住所',
    postalCodeLabelDisplay: '郵便番号',
    prefectureLabel: '都道府県',
    cityLabel: '市区町村',
    townLabel: '町名',
    chomeLabel: '丁目',
    banLabel: '番地',
    goLabel: '号',
    buildingLabel: '建物名',
    floorLabel: '階',
    roomLabel: '室',
    
    // 住所形式
    addressNumber: '号',
    addressFloor: '階',
    addressRoom: '室',
    commercialUnit: '（商業用）',
    japan: '日本',
    postOfficeBox: '私書箱',
    studentDormitory: '学生寮',
    teachingBuilding: '講義棟',
    library: '図書館',
    buildingUnit: '棟',
    
    // アラートメッセージ
    idCardImageAlert: '住民票画像生成にはcanvas実装が必要です',
    businessCardAlert: '名刺生成にはcanvas実装が必要です',
    
    // 都道府県
    prefectures: {
        '01': '北海道',
        '02': '青森県',
        '03': '岩手県',
        '04': '宮城県',
        '05': '秋田県',
        '06': '山形県',
        '07': '福島県',
        '08': '茨城県',
        '09': '栃木県',
        '10': '群馬県',
        '11': '埼玉県',
        '12': '千葉県',
        '13': '東京都',
        '14': '神奈川県',
        '15': '新潟県',
        '16': '富山県',
        '17': '石川県',
        '18': '福井県',
        '19': '山梨県',
        '20': '長野県',
        '21': '岐阜県',
        '22': '静岡県',
        '23': '愛知県',
        '24': '三重県',
        '25': '滋賀県',
        '26': '京都府',
        '27': '大阪府',
        '28': '兵庫県',
        '29': '奈良県',
        '30': '和歌山県',
        '31': '鳥取県',
        '32': '島根県',
        '33': '岡山県',
        '34': '広島県',
        '35': '山口県',
        '36': '徳島県',
        '37': '香川県',
        '38': '愛媛県',
        '39': '高知県',
        '40': '福岡県',
        '41': '佐賀県',
        '42': '長崎県',
        '43': '熊本県',
        '44': '大分県',
        '45': '宮崎県',
        '46': '鹿児島県',
        '47': '沖縄県'
    },
    
    // 市区町村
    cities: {
        '01': {
            sapporo: '札幌市',
            asahikawa: '旭川市',
            hakodate: '函館市',
            obihiro: '帯広市'
        },
        '04': {
            sendai: '仙台市',
            shiogama: '塩竈市',
            ishinomaki: '石巻市'
        },
        '13': {
            chiyoda: '千代田区',
            chuo: '中央区',
            minato: '港区',
            shinjuku: '新宿区',
            shibuya: '渋谷区',
            shinagawa: '品川区',
            meguro: '目黒区',
            setagaya: '世田谷区',
            ota: '大田区',
            nerima: '練馬区'
        },
        '14': {
            yokohama: '横浜市',
            kawasaki: '川崎市',
            sagamihara: '相模原市',
            fujisawa: '藤沢市'
        },
        '23': {
            nagoya: '名古屋市',
            toyohashi: '豊橋市',
            okazaki: '岡崎市'
        },
        '26': {
            kyoto: '京都市',
            utsunomiya: '宇治市'
        },
        '27': {
            osaka: '大阪市',
            sakai: '堺市',
            hirakata: '枚方市',
            toyonaka: '豊中市'
        },
        '28': {
            kobe: '神戸市',
            himeji: '姫路市',
            amagasaki: '尼崎市'
        },
        '40': {
            fukuoka: '福岡市',
            kitakyushu: '北九州市',
            kurume: '久留米市'
        },
        '47': {
            naha: '那覇市',
            okinawa: '沖縄市'
        }
    },
    
    // 大学
    universities: {
        UTokyo: '東京大学',
        KyotoU: '京都大学',
        OsakaU: '大阪大学',
        TohokuU: '東北大学',
        NagoyaU: '名古屋大学',
        KyushuU: '九州大学',
        HokkaidoU: '北海道大学',
        Keio: '慶應義塾大学',
        Waseda: '早稲田大学'
    },
    
    // 血液型
    bloodTypes: {
        A: 'A型',
        B: 'B型',
        O: 'O型',
        AB: 'AB型'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完全住所',
        postalCode: '郵便番号',
        prefecture: '都道府県',
        city: '市区町村',
        town: '町名',
        building: '建物名',
        fullName: '氏名',
        fullNameKana: 'カタカナ名',
        gender: '性別',
        age: '年齢',
        birthDate: '生年月日',
        phone: '電話番号',
        email: 'メールアドレス',
        cardType: 'カードタイプ',
        cardNumber: 'カード番号',
        idCardNumber: '個人番号'
    }
};
