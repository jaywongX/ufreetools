export default {
    name: 'カザフスタン住所ジェネレーター - 実在するカザフスタンの住所、身分情報、連絡先をオンラインで生成',
    description: '無料のオンラインカザフスタン住所ジェネレーター。実在するフォーマットのカザフスタン住所、身分証明書番号（ИИН）、電話番号、クレジットカード番号、完全な身分プロファイルを作成します。地域フィルタリング、JSON/CSVエクスポート形式をサポートし、プライバシー保護のためブラウザで完全に動作します。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: 'データを生成',
    loadSampleBtn: 'サンプルを読み込んで生成',
    clearAll: 'すべてクリア',
    noOutput: 'まだ結果が生成されていません',
    preview: 'データプレビュー',
    
    // 地理フィルタリング
    locationTitle: '地理フィルタリング',
    selectRegion: '地域/都市を選択',
    selectCity: '都市を選択',
    allRegions: 'すべての地域/都市',
    allCities: 'すべての都市',
    postalCodeLabel: '郵便番号',
    
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
    
    // 身分証明書
    idCardTitle: 'カザフスタン身分証明書（ИИН）',
    idCardNumber: '身分証明書番号（ИИН）',
    
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
    buildingLabel: '建物',
    floorLabel: '階',
    unitLabel: 'ユニット',
    regionLabel: '地域/都市',
    
    // 住所フォーマット
    addressFloor: '階',
    addressUnit: 'ユニット',
    commercialUnit: '（商業ユニット）',
    postOfficeBox: '私書箱',
    studentDormitory: '学生寮',
    teachingBuilding: '教学棟',
    library: '図書館',
    buildingUnit: '建物',
    
    // 地域名（カザフスタンの地域）
    regions: {
        NUR: 'ヌルスルタン（アスタナ）',
        ALA: 'アルマティ',
        SHY: 'シュムケント',
        AKM: 'アクモラ州',
        AKT: 'アクトベ州',
        ATY: 'アティラウ州',
        MAN: 'マンギスタウ州',
        PAV: 'パヴロダル州',
        SKZ: '南カザフスタン州',
        KUS: 'コスタナイ州',
        KAR: 'カラガンダ州',
        ZAP: '西カザフスタン州',
        MNG: 'ジャンビル州',
        TUR: 'アルマティ州',
        YUZ: 'クズロルダ州',
        VOS: '東カザフスタン州',
        ZHE: 'ジェズカ兹ガン州'
    },
    
    // 都市データ
    cities: {
        NUR: {
            nursultan: 'ヌルスルタン'
        },
        ALA: {
            almaty: 'アルマティ'
        },
        SHY: {
            shymkent: 'シュムケント'
        },
        AKM: {
            akmola: 'アクモラ',
            kokshetau: 'コクシェタウ'
        },
        AKT: {
            aktobe: 'アクトベ'
        },
        ATY: {
            atyrau: 'アティラウ'
        },
        MAN: {
            aktau: 'アクタウ'
        },
        PAV: {
            pavlodar: 'パヴロダル'
        },
        SKZ: {
            turkestan: 'トルケスタン'
        },
        KUS: {
            kostanay: 'コスタナイ'
        },
        KAR: {
            karaganda: 'カラガンダ'
        },
        ZAP: {
            uralsk: 'ウラルスク'
        },
        MNG: {
            taraz: 'タラズ'
        },
        TUR: {
            taldykorgan: 'タルドゥコルガン'
        },
        YUZ: {
            kyzylorda: 'クズロルダ'
        },
        VOS: {
            'ust-kamenogorsk': 'ウストカメノゴルスク'
        },
        ZHE: {
            temirtau: 'テミルタウ'
        }
    },
    
    // CSV列名
    csv: {
        fullAddress: '完全な住所',
        street: '通り',
        houseNumber: '家番号',
        building: '建物',
        floor: '階',
        unit: 'ユニット',
        region: '地域/都市',
        postalCode: '郵便番号',
        fullName: '氏名',
        gender: '性別',
        age: '年齢',
        birthDate: '生年月日',
        phone: '電話',
        email: 'メール',
        cardType: 'カードタイプ',
        cardNumber: 'カード番号',
        idCardNumber: '身分証明書番号'
    }
};