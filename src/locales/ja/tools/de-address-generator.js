export default {
    name: 'ドイツ住所生成器 - オンラインで本物のドイツ住所・身分情報・連絡先を生成',
    description: '無料オンラインドイツ住所生成器、本物の形式のドイツ住所、身分証番号、電話番号、クレジットカード番号など完全な身分プロファイルを生成。州別フィルタリング、JSON/CSVエクスポート対応、完全フロントエンド実行でプライバシーを保護。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: 'データを生成',
    loadSampleBtn: 'サンプルを読み込んで生成',
    clearAll: 'すべてクリア',
    noOutput: '生成結果がありません',
    preview: 'データプレビュー',
    
    // 地理フィルタ
    locationTitle: '地理的位置フィルタ',
    selectState: '州を選択',
    selectCity: '都市を選択',
    allStates: 'すべての州',
    allCities: 'すべての都市',
    
    // 住所タイプ
    addressTypeTitle: '住所タイプ',
    addressTypeResidential: '住宅住所',
    addressTypeCommercial: '商業住所',
    addressTypePoBox: '私書箱',
    addressTypeCampus: '大学キャンパス',
    
    // 身分情報
    identityTitle: '身分情報',
    fullName: '氏名',
    firstName: '名',
    lastName: '姓',
    gender: '性別',
    genderMale: '男性',
    genderFemale: '女性',
    age: '年齢',
    birthDate: '生年月日',
    height: '身長',
    weight: '体重',
    
    // 連絡先
    contactTitle: '連絡先',
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
    jobTitle: '職位',
    salary: '給与',
    companyName: '会社名',
    companySize: '会社規模',
    industry: '業界',
    employmentStatus: '雇用状況',
    
    // 身分証
    idCardTitle: 'ドイツ身分証明書(Personalausweis)',
    idCardNumber: '身分証番号',
    
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
    
    // 一括生成
    batchTitle: '一括生成',
    quantityLabel: '生成数',
    quantityPlaceholder: '数量を入力（1-100）',
    
    // メッセージ
    generating: '生成中...',
    generated: '生成完了',
    copySuccess: 'クリップボードにコピーしました',
    downloadSuccess: 'ダウンロード成功',
    invalidQuantity: '1-100の間の数字を入力してください',
    
    // 結果表示
    resultCount: '{count}件のレコードを生成',
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
    postalCodeLabel: '郵便番号',
    cityLabel: '都市',
    stateLabel: '州',
    
    // 住所形式
    commercialArea: '商業地区',
    studentDormitory: '学生寮',
    library: '図書館',
    
    // ドイツ16州
    states: {
        BW: 'バーデン＝ヴュルテンベルク州',
        BY: 'バイエルン州',
        BE: 'ベルリン',
        BB: 'ブランデンブルク州',
        HB: 'ブレーメン',
        HH: 'ハンブルク',
        HE: 'ヘッセン州',
        MV: 'メクレンブルク＝フォアポンメルン州',
        NI: 'ニーダーザクセン州',
        NW: 'ノルトライン＝ヴェストファーレン州',
        RP: 'ラインラント＝プファルツ州',
        SL: 'ザールラント州',
        SN: 'ザクセン州',
        ST: 'ザクセン＝アンハルト州',
        SH: 'シュレースヴィヒ＝ホルシュタイン州',
        TH: 'テューリンゲン州'
    },
    
    // 大学名
    universities: {
        TUM: 'ミュンヘン工科大学',
        LMU: 'ミュンヘン大学',
        HU: 'ベルリン洪堡大学',
        TU: 'ベルリン工科大学',
        UniHeidelberg: 'ハイデルベルク大学'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完全な住所',
        street: '通り',
        houseNumber: '番地',
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
        idCardNumber: '身分証番号'
    }
};
