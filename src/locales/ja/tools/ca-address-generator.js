export default {
    name: 'カナダ住所生成器 - オンラインでリアルなカナダ住所・個人情報を生成',
    description: '無料オンラインカナダ住所生成器。リアルなフォーマットのカナダ住所、郵便番号、電話番号、クレジットカード番号など完全な個人情報プロファイルを生成。州別フィルタ、JSON/CSVエクスポート対応、ローカル実行でプライバシー保護。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: 'データ生成',
    loadSampleBtn: 'サンプルを読み込んで生成',
    clearAll: 'すべてクリア',
    noOutput: '生成結果なし',
    preview: 'プレビュー',
    
    locationTitle: '場所フィルター',
    selectProvince: '州を選択',
    selectCity: '都市を選択',
    allProvinces: 'すべての州',
    allCities: 'すべての都市',
    postalCodeLabel: '郵便番号',
    validatePostalCode: '郵便番号を検証',
    
    addressTypeTitle: '住所タイプ',
    addressTypeResidential: '住宅住所',
    addressTypeCommercial: 'ビジネス住所',
    addressTypeVirtual: '私書箱',
    addressTypeCampus: '大学キャンパス',
    
    identityTitle: '個人情報',
    fullName: '氏名',
    gender: '性別',
    genderMale: '男性',
    genderFemale: '女性',
    age: '年齢',
    birthDate: '生年月日',
    zodiac: '星座',
    height: '身長',
    weight: '体重',
    
    contactTitle: '連絡先情報',
    phoneNumber: '電話番号',
    phoneType: '電話タイプ',
    phoneTypeMobile: '携帯電話',
    phoneTypeLandline: '固定電話',
    areaCode: '市外局番',
    email: 'メールアドレス',
    tempEmail: '一時メール',
    
    creditCardTitle: 'クレジットカード情報',
    cardType: 'カード種類',
    cardNumber: 'カード番号',
    expiryDate: '有効期限',
    cvv: 'CVV',
    bankBin: '銀行BIN',
    
    careerTitle: '職業プロファイル',
    jobTitle: '職位',
    salary: '給与',
    companyName: '会社名',
    companySize: '会社規模',
    industry: '業界',
    employmentStatus: '雇用形態',
    employmentFullTime: '正社員',
    employmentPartTime: 'パートタイム',
    
    sinTitle: '社会保障番号(SIN)',
    sinNumber: 'SIN番号',
    
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
    
    exportTitle: 'エクスポート形式',
    exportJson: 'JSONエクスポート',
    exportCsv: 'CSVエクスポート',
    exportIdCard: 'IDカード生成',
    exportBusinessCard: '名刺生成',
    downloadBtn: 'ダウンロード',
    copyBtn: 'コピー',
    viewDetails: '詳細を見る',
    
    batchTitle: '一括生成',
    quantityLabel: '生成数',
    quantityPlaceholder: '数を入力（1-100）',
    
    generating: '生成中...',
    generated: '生成完了',
    copySuccess: 'クリップボードにコピーしました',
    downloadSuccess: 'ダウンロード成功',
    invalidQuantity: '1-100の数字を入力してください',
    
    resultCount: '{count}件のレコードを生成',
    resultSummary: '結果サマリー',
    showAll: 'すべて表示',
    collapse: '折りたたむ',
    
    generateOptionsTitle: '生成オプション',
    
    recordLabel: 'レコード #{num}',
    addressLabel: '住所',
    streetLabel: 'ストリート',
    houseNumberLabel: '番地',
    buildingLabel: '建物',
    unitLabel: 'ユニット',
    cityLabel: '都市',
    provinceLabel: '州',
    postalCodeDisplay: '郵便番号',
    
    addressUnit: 'ユニット',
    aptNumber: 'アパート',
    suiteNumber: 'スイート',
    pobox: '私書箱',
    
    idCardImageAlert: 'IDカード生成にはcanvasが必要です',
    businessCardAlert: '名刺生成にはcanvasが必要です',
    
    provinces: {
        ON: 'オンタリオ州',
        QC: 'ケベック州',
        BC: 'ブリティッシュコロンビア州',
        AB: 'アルバータ州',
        MB: 'マニトバ州',
        SK: 'サスカチュワン州',
        NS: 'ノバスコシア州',
        NB: 'ニューブランズウィック州',
        NL: 'ニューファンドランド・ラブラドル州',
        PE: 'プリンスエドワードアイランド州',
        NT: 'ノースウエスト準州',
        YT: 'ユーコン準州',
        NU: 'ヌナブト準州'
    },
    
    cities: {
        ON: {
            toronto: 'トロント',
            ottawa: 'オタワ',
            mississauga: 'ミシサガ',
            hamilton: 'ハミルトン',
            london: 'ロンドン',
            markham: 'マーカム',
            vaughan: 'ボーン',
            kitchener: 'キッチナー',
            waterloo: 'ウォータールー',
            brampton: 'ブランプトン'
        },
        QC: {
            montreal: 'モントリオール',
            quebec: 'ケベック・シティ',
            laval: 'ラバル',
            gatineau: 'ガティノー',
            sherbrooke: 'シャーブルック'
        },
        BC: {
            vancouver: 'バンクーバー',
            victoria: 'ビクトリア',
            burnaby: 'バーナビー',
            richmond: 'リッチモンド',
            surrey: 'サレー',
            kelowna: 'ケロウナ'
        },
        AB: {
            calgary: 'カルガリー',
            edmonton: 'エドモントン',
            redDeer: 'レッドディア',
            lethbridge: 'レスブリッジ'
        },
        MB: {
            winnipeg: 'ウィニペグ',
            brandon: 'ブランドン'
        },
        SK: {
            saskatoon: 'サスカトゥーン',
            regina: 'レジャイナ'
        },
        NS: {
            halifax: 'ハリファックス'
        },
        NB: {
            fredericton: 'フレデリクトン',
            moncton: 'モンクトン',
            saintJohn: 'セントジョン'
        },
        NL: {
            stJohns: 'セントジョンズ'
        },
        PE: {
            charlottetown: 'シャーロットタウン'
        },
        NT: {
            yellowknife: 'イエローナイフ'
        },
        YT: {
            whitehorse: 'ホワイトホース'
        },
        NU: {
            iqaluit: 'イカルイト'
        }
    },
    
    universities: {
        UofT: 'トロント大学',
        UBC: 'ブリティッシュコロンビア大学',
        McGill: 'マギル大学',
        McMaster: 'マクマスター大学',
        Waterloo: 'ウォータールー大学',
        Alberta: 'アルバータ大学',
        Ottawa: 'オタワ大学',
        Montreal: 'モントリオール大学'
    },
    
    csv: {
        fullAddress: '完全な住所',
        street: 'ストリート',
        houseNumber: '番地',
        building: '建物',
        unit: 'ユニット',
        city: '都市',
        province: '州',
        postalCode: '郵便番号',
        fullName: '氏名',
        gender: '性別',
        age: '年齢',
        birthDate: '生年月日',
        phone: '電話',
        email: 'メール',
        cardType: 'カード種類',
        cardNumber: 'カード番号',
        sinNumber: 'SIN番号'
    }
};
