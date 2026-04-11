export default {
    name: 'オーストラリア住所生成器 - オンラインでリアルなオーストラリア住所、身分情報、連絡先を生成',
    description: '無料オンラインオーストラリア住所生成器。リアルな形式のオーストラリア住所、電話番号、クレジットカード番号、完全な身分プロファイルを生成。州でフィルタリング、JSON/CSVエクスポート、フロントエンド完結でプライバシー保護。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: 'データを生成',
    loadSampleBtn: 'サンプルを読み込んで生成',
    clearAll: 'すべてクリア',
    noOutput: '生成結果がありません',
    preview: 'データをプレビュー',
    
    // 地理フィルター
    locationTitle: '地域フィルター',
    selectState: '州/準州を選択',
    selectCity: '都市を選択',
    allStates: 'すべての州/準州',
    allCities: 'すべての都市',
    postalCodeLabel: '郵便番号',
    validatePostalCode: '郵便番号を検証',
    
    // 住所タイプ
    addressTypeTitle: '住所タイプ',
    addressTypeResidential: '住宅住所',
    addressTypeCommercial: '商業住所',
    addressTypePoBox: '私書箱',
    addressTypeCampus: '大学キャンパス',
    
    // 身分情報
    identityTitle: '身分情報',
    fullName: '氏名',
    gender: '性別',
    genderMale: '男性',
    genderFemale: '女性',
    age: '年齢',
    birthDate: '生年月日',
    zodiac: '星座',
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
    bankBin: '銀行BIN',
    
    // キャリア
    careerTitle: 'キャリアプロファイル',
    jobTitle: '職位',
    salary: '給与',
    companyName: '会社名',
    companySize: '会社規模',
    industry: '業界',
    employmentStatus: '雇用状態',
    employmentFullTime: '正社員',
    employmentPartTime: 'パートタイム',
    
    // 税番号
    taxFileTitle: 'オーストラリア税番号',
    taxFileNumber: '税番号(TFN)',
    
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
    
    // エクスポート
    exportTitle: 'エクスポート形式',
    exportJson: 'JSONエクスポート',
    exportCsv: 'CSVエクスポート',
    downloadBtn: 'ダウンロード',
    copyBtn: 'コピー',
    viewDetails: '詳細を見る',
    
    // バッチ生成
    batchTitle: '一括生成',
    quantityLabel: '数量',
    quantityPlaceholder: '数量を入力（1-100）',
    
    // メッセージ
    generating: '生成中...',
    generated: '生成完了',
    copySuccess: 'クリップボードにコピーしました',
    downloadSuccess: 'ダウンロード成功',
    invalidQuantity: '1-100の数字を入力してください',
    
    // 結果
    resultCount: '{count}件のレコードを生成しました',
    resultSummary: '結果サマリー',
    showAll: 'すべて表示',
    collapse: '折りたたむ',
    
    // オプション
    generateOptionsTitle: '生成オプション',
    
    // レコード表示
    recordLabel: 'レコード #{num}',
    addressLabel: '住所',
    streetLabel: '通り',
    streetNumberLabel: '番地',
    suburbLabel: '郊外',
    stateLabel: '州',
    postcodeLabel: '郵便番号',
    unitLabel: 'ユニット',
    
    // 住所形式
    addressNumber: '番',
    addressFloor: '階',
    addressUnit: '号室',
    commercialUnit: '（商業）',
    australia: 'オーストラリア',
    postOfficeBox: '私書箱',
    studentDormitory: '学生寮',
    academicBuilding: '講義棟',
    library: '図書館',
    buildingUnit: '棟',
    
    // 州名
    states: {
        NSW: 'ニューサウスウェールズ州',
        VIC: 'ビクトリア州',
        QLD: 'クイーンズランド州',
        WA: '西オーストラリア州',
        SA: '南オーストラリア州',
        TAS: 'タスマニア州',
        ACT: 'オーストラリア首都特別地域',
        NT: 'ノーザンテリトリー'
    },
    
    // 都市名
    cities: {
        NSW: {
            sydney: 'シドニー',
            newcastle: 'ニューカッスル',
            wollongong: 'ウーロンゴン',
            centralCoast: 'セントラルコースト',
            canberra: 'キャンベラ'
        },
        VIC: {
            melbourne: 'メルボルン',
            geelong: 'ジーロング',
            ballarat: 'バララット',
            bendigo: 'ベンディゴ'
        },
        QLD: {
            brisbane: 'ブリスベン',
            goldCoast: 'ゴールドコースト',
            sunshineCoast: 'サンシャインコースト',
            townsville: 'タウンズビル',
            cairns: 'ケアンズ'
        },
        WA: {
            perth: 'パース',
            fremantle: 'フリーマントル',
            mandurah: 'マンドゥーラ'
        },
        SA: {
            adelaide: 'アデレード',
            mountGambier: 'マウントガンビア',
            whyalla: 'ワイアラ'
        },
        TAS: {
            hobart: 'ホバート',
            launceston: 'ローンセストン',
            devonport: 'デボンポート'
        },
        ACT: {
            canberra: 'キャンベラ',
            queanbeyan: 'クインビーヤン'
        },
        NT: {
            darwin: 'ダーウィン',
            aliceSprings: 'アリススプリングス',
            palmerston: 'パーマストン'
        }
    },
    
    // 大学
    universities: {
        USYD: 'シドニー大学',
        UNSW: 'ニューサウスウェールズ大学',
        UMELB: 'メルボルン大学',
        UQ: 'クイーンズランド大学',
        ANU: 'オーストラリア国立大学'
    },
    
    // CSVヘッダー
    csv: {
        fullAddress: '完全な住所',
        street: '通り',
        streetNumber: '番地',
        suburb: '郊外',
        state: '州',
        postcode: '郵便番号',
        fullName: '氏名',
        gender: '性別',
        age: '年齢',
        birthDate: '生年月日',
        phone: '電話',
        email: 'メール',
        cardType: 'カードタイプ',
        cardNumber: 'カード番号',
        taxFileNumber: '税番号'
    }
};
