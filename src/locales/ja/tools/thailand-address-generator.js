export default {
    name: 'タイ住所ジェネレーター - 実際のタイの住所、身元情報、連絡先をオンラインで作成',
    description: '無料のオンラインタイ住所ジェネレーターは、実際のフォーマットのタイの住所、ID番号、電話番号、クレジットカード番号、完全な身元プロフィールを作成します。都道府県フィルタリング、JSON/CSVエクスポート形式をサポートし、プライバシー保護のためにブラウザで完全に動作します。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: 'データを生成',
    loadSampleBtn: 'サンプルを読み込んで生成',
    clearAll: 'すべてクリア',
    noOutput: 'まだ結果が生成されていません',
    preview: 'データプレビュー',
    
    // 地理フィルタリング
    locationTitle: '地理フィルタリング',
    selectRegion: '都道府県を選択',
    allRegions: 'すべての都道府県',
    postalCodeLabel: '郵便番号',
    validatePostalCode: '郵便番号を検証',
    
    // 住所タイプ
    addressTypeTitle: '住所タイプ',
    addressTypeResidential: '住宅住所',
    addressTypeCommercial: '商業住所',
    addressTypeVirtual: '仮想邮箱',
    addressTypeCampus: '大学キャンパス',
    
    // 身元情報
    identityTitle: '身元情報',
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
    phoneTypeMobile: '携帯',
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
    industry: '業種',
    employmentStatus: '雇用状態',
    employmentFullTime: '正社員',
    employmentPartTime: 'パート',
    
    // IDカード
    idCardTitle: 'タイIDカード',
    idCardNumber: 'IDカード番号',
    
    // デジタルフィンガープリント
    fingerprintTitle: 'デジタルフィンガープリント',
    os: 'オペレーティングシステム',
    osVersion: 'OSバージョン',
    browser: 'ブラウザ',
    userAgent: 'ユーザーエージェント',
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
    invalidQuantity: '1から100の数字を入力してください',
    
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
    streetLabel: '通り',
    houseNumberLabel: '家番号',
    buildingLabel: '建物',
    floorLabel: '階',
    unitLabel: 'ユニット',
    regionLabel: '都道府県',
    postalCode: '郵便番号',
    
    // 住所フォーマット
    addressNumber: '番',
    addressFloor: '階',
    addressUnit: 'ユニット',
    commercialUnit: '（商業ユニット）',
    thailand: 'タイ',
    postOfficeBox: '私書箱',
    studentDormitory: '学生寮',
    teachingBuilding: '教学棟',
    library: '図書館',
    buildingUnit: '棟',
    apartment: 'マンション',
    
    // 都道府県名（タイの主要都道府県）
    regions: {
        'Bangkok': 'バンコク',
        'Chiang Mai': 'チエンマイ',
        'Phuket': 'プーケット',
        'Pattaya': 'パタヤ',
        'Nonthaburi': 'ノンタブリー',
        'Pathum Thani': 'パトゥムターニー',
        'Samut Prakan': 'サムットプラカン',
        'Nakhon Ratchasima': 'ナコンラーチャシーマー',
        'Chiang Rai': 'チエンラーイ',
        'Khon Kaen': 'コンケン',
        'Nakhon Si Thammarat': 'ナコンシータンマラート',
        'Surat Thani': 'スラータニ',
        'Udon Thani': 'ウドンターニー',
        'Rayong': 'ラヨン',
        'Lampang': 'ランパン',
        'Nakhon Pathom': 'ナコンパトム',
        'Ayutthaya': 'アユタヤ',
        'Chanthaburi': 'チャンタブリー',
        'Trat': 'トラート',
        'Kanchanaburi': 'カンチャナブリー'
    },
    
    // 大学名
    universities: {
        'CU': 'チュラロンコン大学',
        'TU': 'マヒドン大学',
        'KU': 'カセサート大学',
        'TU': 'タマサート大学',
        'KMUTT': 'キングモンクット工科大学トンブリー校',
        'KMUTNB': 'キングモンクット工科大学バンコク北部校',
        'SIIT': 'シリントルン国際技術学院',
        'AIT': 'アジア工科大学',
        'ABAC': 'アサンプション大学'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完全な住所',
        street: '通り',
        houseNumber: '家番号',
        building: '建物',
        floor: '階',
        unit: 'ユニット',
        region: '都道府県',
        postalCode: '郵便番号',
        fullName: '氏名',
        gender: '性別',
        age: '年齢',
        birthDate: '生年月日',
        phone: '電話',
        email: 'メール',
        cardType: 'カードタイプ',
        cardNumber: 'カード番号',
        idCardNumber: 'IDカード番号'
    }
};