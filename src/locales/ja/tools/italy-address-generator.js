export default {
    name: 'イタリア住所生成器 - 実在するイタリアの住所、身分情報、連絡先情報をオンラインで生成',
    description: '無料のオンラインイタリア住所生成器。実在する形式のイタリア住所、Codice Fiscale税番号、電話番号、クレジットカード番号、完全な身分プロファイルを生成します。地域フィルタリング、JSON/CSVエクスポート形式をサポートし、ブラウザ内で完全に実行されるためプライバシーを保護します。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: 'データ生成',
    loadSampleBtn: 'サンプルを読み込んで生成',
    clearAll: 'すべてクリア',
    noOutput: 'まだ結果が生成されていません',
    preview: 'データプレビュー',
    
    // 地理フィルタリング
    locationTitle: '地理フィルタリング',
    selectRegion: '地域を選択',
    allRegions: 'すべての地域',
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
    careerTitle: 'キャリアプロファイル',
    jobTitle: '職位',
    salary: '給与',
    companyName: '会社名',
    companySize: '会社規模',
    industry: '業界',
    employmentStatus: '雇用状態',
    employmentFullTime: '正社員',
    employmentPartTime: 'パートタイム',
    
    // 身分証
    idCardTitle: 'イタリア身分証',
    idCardNumber: '身分証番号',
    codiceFiscale: 'Codice Fiscale',
    
    // デジタルフィンガープリント
    fingerprintTitle: 'デジタルフィンガープリント',
    os: 'オペレーティングシステム',
    osVersion: 'システムバージョン',
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
    invalidQuantity: '1から100の間の数値を入力してください',
    
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
    houseNumberLabel: '番地',
    buildingLabel: '建物',
    floorLabel: '階',
    unitLabel: '部屋',
    regionLabel: '地域',
    postalCode: '郵便番号',
    
    // 住所形式
    addressNumber: '番',
    addressFloor: '階',
    addressUnit: '室',
    commercialUnit: '（商業施設）',
    italy: 'イタリア',
    postOfficeBox: '私書箱',
    studentDormitory: '学生寮',
    teachingBuilding: '教育棟',
    library: '図書館',
    buildingUnit: '棟',
    apartment: 'アパート',
    
    // 地域名（イタリアの20の地域）
    regions: {
        'Lombardia': 'ロンバルディア',
        'Lazio': 'ラツィオ',
        'Campania': 'カンパニア',
        'Sicilia': 'シチリア',
        'Veneto': 'ヴェネト',
        'Emilia-Romagna': 'エミリア＝ロマーニャ',
        'Piemonte': 'ピエモンテ',
        'Toscana': 'トスカーナ',
        'Puglia': 'プーリア',
        'Calabria': 'カラブリア',
        'Sardegna': 'サルデーニャ',
        'Friuli Venezia Giulia': 'フリウリ＝ヴェネツィア・ジュリア',
        'Liguria': 'リグーリア',
        'Marche': 'マルケ',
        'Abruzzo': 'アブルッツォ',
        'Molise': 'モリーゼ',
        'Basilicata': 'バジリカータ',
        'Umbリア': 'ウンブリア',
        "Valle d'Aosta": "ヴァッレ・ダオスタ",
        'Trentino-Alto Adige': 'トレント＝アルト・アディジェ'
    },
    
    // 大学名
    universities: {
        'Politecnico di Milano': 'ミラノ工科大学',
        'Sapienza': 'ローマ・ラ・サピエンツァ大学',
        'Bocconi': 'ボッコーニ大学',
        'Politecnico di Torino': 'トリノ工科大学',
        'UniMI': 'ミラノ大学',
        'UniFI': 'フィレンツェ大学',
        'UniBO': 'ボローニャ大学',
        'UniPd': 'パドヴァ大学',
        'UniNa': 'ナポリ・フェデリコ2世大学',
        'UniTo': 'トリノ大学'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完全な住所',
        street: '通り',
        houseNumber: '番地',
        building: '建物',
        floor: '階',
        unit: '部屋',
        region: '地域',
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