export default {
    name: 'マレーシア住所生成器 - 実在するマレーシアの住所、身分情報、連絡先をオンラインで生成',
    description: '無料のオンラインマレーシア住所生成器。実在する形式のマレーシア住所、MyKad番号、電話番号、クレジットカード番号、完全な身分プロフィールを作成します。州別フィルタリング、JSON/CSVエクスポート形式をサポートし、プライバシー保護のためブラウザで完全に動作します。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: 'データを生成',
    loadSampleBtn: 'サンプルを読み込んで生成',
    clearAll: 'すべてクリア',
    noOutput: 'まだ結果が生成されていません',
    preview: 'データプレビュー',
    
    // 地理的フィルタリング
    locationTitle: '地理的フィルタリング',
    selectRegion: '州を選択',
    allRegions: 'すべての州',
    postalCodeLabel: '郵便番号',
    validatePostalCode: '郵便番号を検証',
    
    // 住所タイプ
    addressTypeTitle: '住所タイプ',
    addressTypeResidential: '住宅住所',
    addressTypeCommercial: '商業住所',
    addressTypeVirtual: 'バーチャルメールボックス',
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
    
    // 連絡先情報
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
    careerTitle: 'キャリアプロフィール',
    jobTitle: '職位',
    salary: '給与',
    companyName: '会社名',
    companySize: '会社規模',
    industry: '業界',
    employmentStatus: '雇用状態',
    employmentFullTime: '正社員',
    employmentPartTime: 'パートタイム',
    
    // 身分証明書
    idCardTitle: 'マレーシア身分証',
    idCardNumber: '身分証番号',
    mykadNumber: 'MyKad番号',
    
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
    exportJson: 'JSONエクスポート',
    exportCsv: 'CSVエクスポート',
    downloadBtn: 'ダウンロード',
    copyBtn: 'コピー',
    viewDetails: '詳細を表示',
    
    // バッチ生成
    batchTitle: 'バッチ生成',
    quantityLabel: '数量',
    quantityPlaceholder: '数量を入力（1-100）',
    
    // 通知メッセージ
    generating: '生成中...',
    generated: '生成完了',
    copySuccess: 'クリップボードにコピーしました',
    downloadSuccess: 'ダウンロード成功',
    invalidQuantity: '1〜100の数字を入力してください',
    
    // 結果表示
    resultCount: '{count}件のレコードを生成しました',
    resultSummary: '結果サマリー',
    showAll: 'すべて表示',
    collapse: '折りたたむ',
    
    // 生成オプション
    generateOptionsTitle: '生成オプション',
    
    // レコード表示
    recordLabel: 'レコード #{num}',
    addressLabel: '住所',
    streetLabel: '通り',
    houseNumberLabel: '家番号',
    buildingLabel: '建物',
    floorLabel: '階',
    unitLabel: '部屋',
    regionLabel: '州',
    postalCode: '郵便番号',
    
    // 住所形式
    addressNumber: '番',
    addressFloor: '階',
    addressUnit: '号室',
    commercialUnit: '（商業ユニット）',
    malaysia: 'マレーシア',
    postOfficeBox: '私書箱',
    studentDormitory: '学生寮',
    teachingBuilding: '教学棟',
    library: '図書館',
    buildingUnit: '棟',
    apartment: 'マンション',
    
    // 州名（マレーシア13州+3連邦直轄区）
    regions: {
        'Johor': 'ジョホール',
        'Kedah': 'ケダ',
        'Kelantan': 'クラランタン',
        'Malacca': 'マラッカ',
        'Negeri Sembilan': 'ネゲリ・センビラン',
        'Pahang': 'パハン',
        'Penang': 'ペナン',
        'Perak': 'ペラ',
        'Perlis': 'プルリス',
        'Sabah': 'サバ',
        'Sarawak': 'サラワク',
        'Selangor': 'セランゴール',
        'Terengganu': 'トレンガヌ',
        'Kuala Lumpur': 'クアラルンプール',
        'Putrajaya': 'プトラジャヤ',
        'Labuan': 'ラブアン'
    },
    
    // 大学名
    universities: {
        'UM': 'マラヤ大学',
        'UKM': 'マレーシア国民大学',
        'UPM': 'マレーシアプトラ大学',
        'USM': 'マレーシア理科大学',
        'UTM': 'マレーシア工科大学',
        'UUM': 'マレーシア北方大学',
        'UMS': 'マレーシアサバ大学',
        'UMK': 'マレーシアクラランタン大学',
        'UPSI': 'スルタン・イドリス教育大学'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完全な住所',
        street: '通り',
        houseNumber: '家番号',
        building: '建物',
        floor: '階',
        unit: '部屋',
        region: '州',
        postalCode: '郵便番号',
        fullName: '氏名',
        gender: '性別',
        age: '年齢',
        birthDate: '生年月日',
        phone: '電話',
        email: 'メール',
        cardType: 'カードタイプ',
        cardNumber: 'カード番号',
        idCardNumber: '身分証番号'
    }
};