export default {
    name: 'メキシコ住所ジェネレーター - 実在するメキシコの住所、身分情報、連絡先をオンラインで生成',
    description: '無料のオンラインメキシコ住所ジェネレーター。実在するフォーマットのメキシコ住所、RFC/CURP身分証明書番号、電話番号、クレジットカード番号、完全な身分プロファイルを作成します。州フィルタリング、JSON/CSVエクスポート形式をサポートし、プライバシー保護のためブラウザで完全に動作します。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: 'データを生成',
    loadSampleBtn: 'サンプルを読み込んで生成',
    clearAll: 'すべてクリア',
    noOutput: 'まだ結果が生成されていません',
    preview: 'データプレビュー',
    
    // 地理フィルタリング
    locationTitle: '地理フィルタリング',
    selectState: '州を選択',
    selectCity: '都市を選択',
    allStates: 'すべての州',
    allCities: 'すべての都市',
    
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
    salary: '給料',
    companyName: '会社名',
    companySize: '会社規模',
    industry: '業種',
    employmentStatus: '雇用状態',
    employmentFullTime: '正社員',
    employmentPartTime: 'パートタイム',
    
    // 身分証明書
    idCardTitle: 'メキシコ身分証明書',
    rfcLabel: 'RFC（連邦納税者登録）',
    curpLabel: 'CURP（人口登録唯一コード）',
    
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
    invalidQuantity: '1から100の数字を入力してください',
    
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
    neighborhoodLabel: '地区',
    postalCodeLabel: '郵便番号',
    cityLabel: '都市',
    stateLabel: '州',
    
    // 住所フォーマット
    commercialAddress: '（商業住所）',
    postOfficeBox: '私書箱',
    studentDormitory: '学生寮',
    teachingBuilding: '教学棟',
    library: '図書館',
    
    // メキシコの32州
    states: {
        AGS: 'アグアスカリエンテス',
        BCN: 'バハカリフォルニア',
        BCS: '南バハカリフォルニア',
        CAMP: 'カンペチェ',
        COAH: 'コアウイラ',
        COL: 'コリマ',
        CHIS: 'チアパス',
        CHIH: 'チワワ',
        CDMX: 'メキシコシティ',
        DUR: 'ドゥランゴ',
        GTO: 'グアナフアト',
        GRO: 'ゲレーロ',
        HGO: 'イダルゴ',
        JAL: 'ハリスコ',
        MEX: 'メキシコ州',
        MIC: 'ミチョアカン',
        MOR: 'モレロス',
        NAY: 'ナヤリット',
        NLE: 'ヌエボレオン',
        OAX: 'オアハカ',
        PUE: 'プエブラ',
        QRO: 'ケレタロ',
        QROO: 'キンタナ・ロー',
        SLP: 'サンルイスポトシ',
        SIN: 'シナロア',
        SON: 'ソノラ',
        TAB: 'タバスコ',
        TAM: 'タマウリパス',
        TLAX: 'トラスカラ',
        VER: 'ベラクルス',
        YUC: 'ユカタン',
        ZAC: 'サカテカス'
    },
    
    // 大学名
    universities: {
        UNAM: 'メキシコ国立自治大学',
        IPN: '国立理工学院',
        UdeG: 'グアナフアト大学',
        UANL: 'ヌエボレオン自治大学'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完全な住所',
        street: '通り',
        houseNumber: '家番号',
        neighborhood: '地区',
        postalCode: '郵便番号',
        city: '都市',
        state: '州',
        fullName: '氏名',
        gender: '性別',
        age: '年齢',
        birthDate: '生年月日',
        phone: '電話',
        email: 'メール',
        cardType: 'カードタイプ',
        cardNumber: 'カード番号',
        rfc: 'RFC',
        curp: 'CURP'
    }
};