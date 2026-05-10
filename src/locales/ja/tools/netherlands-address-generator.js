export default {
    name: 'オランダ住所ジェネレーター - 実在のオランダ住所、身分情報、連絡先をオンラインで生成',
    description: '無料のオンラインオランダ住所ジェネレーターで、実在の形式のオランダ住所、ID番号、電話番号、クレジットカード番号、完全な身分プロファイルを生成します。県フィルタリング、JSON/CSVエクスポート形式をサポートし、プライバシー保護のために完全にブラウザ内で実行されます。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: 'データを生成',
    loadSampleBtn: 'サンプルを読み込んで生成',
    clearAll: 'すべてクリア',
    noOutput: 'まだ結果が生成されていません',
    preview: 'データプレビュー',
    
    // 地理フィルタリング
    locationTitle: '地理フィルタリング',
    selectRegion: '県を選択',
    allRegions: 'すべての県',
    postalCodeLabel: '郵便番号',
    validatePostalCode: '郵便番号を検証',
    
    // 住所タイプ
    addressTypeTitle: '住所タイプ',
    addressTypeResidential: '住宅住所',
    addressTypeCommercial: '商業住所',
    addressTypeVirtual: '仮想メールボックス',
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
    careerTitle: 'キャリアプロファイル',
    jobTitle: '職位',
    salary: '給与',
    companyName: '会社名',
    companySize: '会社規模',
    industry: '業界',
    employmentStatus: '雇用状況',
    employmentFullTime: '正社員',
    employmentPartTime: 'パートタイム',
    
    // IDカード
    idCardTitle: 'オランダIDカード',
    idCardNumber: 'IDカード番号',
    bsnNumber: 'BSN番号',
    
    // デジタル指紋
    fingerprintTitle: 'デジタル指紋',
    os: 'オペレーティングシステム',
    osVersion: 'OSバージョン',
    browser: 'ブラウザ',
    userAgent: 'ユーザーエージェント',
    screenResolution: '画面解像度',
    timezone: 'タイムゾーン',
    guid: 'GUID',
    ipAddress: 'IPアドレス',
    macAddress: 'MACアドレス',
    cookiePolicy: 'クッキー方針',
    
    // エクスポートオプション
    exportTitle: 'エクスポート形式',
    exportJson: 'JSONをエクスポート',
    exportCsv: 'CSVをエクスポート',
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
    invalidQuantity: '1-100の間の数字を入力してください',
    
    // 結果表示
    resultCount: '{count}件のレコードが生成されました',
    resultSummary: '結果サマリー',
    showAll: 'すべて表示',
    collapse: '折りたたむ',
    
    // 生成オプション
    generateOptionsTitle: '生成オプション',
    
    // レコード表示
    recordLabel: 'レコード #{num}',
    addressLabel: '住所',
    streetLabel: '通り',
    houseNumberLabel: '家屋番号',
    buildingLabel: '建物',
    floorLabel: '階',
    unitLabel: 'ユニット',
    regionLabel: '県',
    postalCode: '郵便番号',
    
    // 住所形式
    addressNumber: '番',
    addressFloor: '階',
    addressUnit: '号室',
    commercialUnit: '（商業ユニット）',
    netherlands: 'オランダ',
    postOfficeBox: '私書箱',
    studentDormitory: '学生寮',
    teachingBuilding: '教学棟',
    library: '図書館',
    buildingUnit: '棟',
    apartment: 'マンション',
    
    // 県名（オランダ12県）
    regions: {
        'Noord-Holland': '北ホラント県',
        'Zuid-Holland': '南ホラント県',
        'Utrecht': 'ユトレヒト県',
        'Gelderland': 'ヘルダーラント県',
        'Overijssel': 'オーファーアイセル県',
        'Flevoland': 'フレヴォラント県',
        'Friesland': 'フリースラント県',
        'Drenthе': 'ドレンテ県',
        'Groningen': 'フローニンゲン県',
        'Limburg': 'リンブルフ県',
        'Noord-Brabant': '北ブラバント県',
        'Zeeland': 'ゼーラント県'
    },
    
    // 大学名
    universities: {
        'UvA': 'アムステルダム大学',
        'VU': 'アムステルダム自由大学',
        'TU': 'デルフト工科大学',
        'UU': 'ユトレヒト大学',
        'EUR': 'ロッテルダム・エラスムス大学',
        'RUG': 'フローニンゲン大学',
        'WUR': 'ワーゲニンゲン大学',
        'UL': 'ライデン大学',
        'RU': 'ラドバウト大学',
        'UM': 'マーストリヒト大学'
    },
    
    // CSVカラム名
    csv: {
        fullAddress: '完全住所',
        street: '通り',
        houseNumber: '家屋番号',
        building: '建物',
        floor: '階',
        unit: 'ユニット',
        region: '県',
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