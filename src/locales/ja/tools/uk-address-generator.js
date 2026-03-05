export default {
    name: 'イギリス住所生成器 - オンラインでリアルなイギリス住所、身分情報、連絡先を生成',
    description: '無料オンラインイギリス住所生成器。リアルな形式のイギリス住所、国民保険番号（NINO）、電話番号、クレジットカード番号などの完全な身分プロファイルを生成。州によるフィルタリング、JSON/CSV形式でエクスポート、プライバシー保護のためのフロントエンド処理。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: 'データを生成',
    loadSampleBtn: 'サンプルを読み込んで生成',
    clearAll: 'すべてクリア',
    noOutput: '生成結果がありません',
    preview: 'データプレビュー',
    
    locationTitle: '地理的フィルター',
    selectCounty: '州を選択',
    selectCity: '都市を選択',
    allCounties: 'すべての州',
    allCities: 'すべての都市',
    postcodeLabel: '郵便番号',
    validatePostcode: '郵便番号を検証',
    
    addressTypeTitle: '住所タイプ',
    addressTypeResidential: '住宅住所',
    addressTypeCommercial: '商業住所',
    addressTypePoBox: '私書箱',
    addressTypeCampus: '大学キャンパス',
    
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
    
    contactTitle: '連絡先情報',
    phoneNumber: '電話番号',
    phoneType: '電話タイプ',
    phoneTypeMobile: '携帯電話',
    phoneTypeLandline: '固定電話',
    areaCode: '市外局番',
    email: 'メールアドレス',
    tempEmail: '一時メール',
    
    creditCardTitle: 'クレジットカード情報',
    cardType: 'カードタイプ',
    cardNumber: 'カード番号',
    expiryDate: '有効期限',
    cvv: 'CVV',
    bankBin: '銀行BINコード',
    
    careerTitle: '職業プロファイル',
    jobTitle: '役職',
    salary: '給与',
    companyName: '会社名',
    companySize: '会社規模',
    industry: '業界',
    employmentStatus: '雇用状況',
    employmentFullTime: '正社員',
    employmentPartTime: 'パートタイム',
    
    idCardTitle: '国民保険番号（NINO）',
    idCardNumber: '国民保険番号',
    prefixLetter: 'プレフィックス文字',
    serialNumber: 'シリアル番号',
    suffixLetter: 'サフィックス文字',
    
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
    
    exportTitle: 'エクスポート形式',
    exportJson: 'JSONでエクスポート',
    exportCsv: 'CSVでエクスポート',
    downloadBtn: 'ダウンロード',
    copyBtn: 'コピー',
    viewDetails: '詳細を見る',
    
    batchTitle: '一括生成',
    quantityLabel: '生成数量',
    quantityPlaceholder: '数量を入力（1-100）',
    
    generating: '生成中...',
    generated: '生成完了',
    copySuccess: 'クリップボードにコピーしました',
    downloadSuccess: 'ダウンロード成功',
    invalidQuantity: '1-100の間の数字を入力してください',
    
    resultCount: '合計{count}件のレコードを生成',
    resultSummary: '生成結果サマリー',
    showAll: 'すべて表示',
    collapse: '折りたたむ',
    
    generateOptionsTitle: '生成オプション',
    
    recordLabel: 'レコード #{num}',
    addressLabel: '住所',
    streetLabel: '通り',
    houseNumberLabel: '番地',
    buildingLabel: '建物',
    cityLabel: '都市',
    countyLabel: '州',
    
    counties: {
        LND: 'グレーターロンドン',
        GRM: 'グレーターマンチェスター',
        MAN: 'マンチェスター',
        BIR: 'ウェストミッドランズ',
        LEE: 'ウェストヨークシャー',
        SHE: 'サウスヨークシャー',
        LIV: 'マージーサイド',
        BRS: 'ブリストル',
        NEW: 'タイン・アンド・ウィア',
        NOT: 'ノッティンガムシャー',
        EDB: 'エディンバラ',
        GLA: 'グラスゴー',
        CDF: 'カーディフ',
        BEL: 'ベルファスト',
        SOU: 'サウサンプトン',
        POR: 'プリマス',
        BRI: 'ブライトン',
        CAM: 'ケンブリッジシャー'
    },
    
    cities: {
        LND: {
            westminster: 'ウェストミンスター',
            kensington: 'ケンジントン',
            chelsea: 'チェルシー',
            camden: 'カムデン',
            islington: 'イズリントン',
            hackney: 'ハックニー',
            towerHamlets: 'タワーハムレッツ',
            greenwich: 'グリニッジ'
        },
        GRM: {
            manchester: 'マンチェスター',
            salford: 'ソルフォード',
            bolton: 'ボルトン',
            bury: 'ベリー',
            oldham: 'オールダム',
            rochdale: 'ロッチデール',
            stockport: 'ストックポート',
            wigan: 'ウィガン'
        },
        MAN: {
            manchesterCity: 'マンチェスター市',
            trafford: 'トラフォード',
            tameside: 'テイムサイド',
            sale: 'セイル'
        },
        BIR: {
            birmingham: 'バーミンガム',
            coventry: 'コベントリー',
            wolverhampton: 'ウルバーハンプトン',
            dudley: 'ダドリー',
            walsall: 'ウォルソール',
            sandwell: 'サンドウェル',
            solihull: 'ソリフル'
        },
        LEE: {
            leeds: 'リーズ',
            bradford: 'ブラッドフォード',
            wakefield: 'ウェイクフィールド',
            kirklees: 'カークリーズ',
            calderdale: 'カルダーデール'
        },
        SHE: {
            sheffield: 'シェフィールド',
            rotherham: 'ロザラム',
            doncaster: 'ドンカスター',
            barnsley: 'バーンズリー'
        },
        LIV: {
            liverpool: 'リバプール',
            knowsley: 'ノウズリー',
            sefton: 'セフトン',
            wirral: 'ウィラル',
            stHelens: 'セントヘレンズ'
        },
        BRS: {
            bristol: 'ブリストル',
            southGloucestershire: 'サウスグロスターシャー',
            bath: 'バース'
        },
        NEW: {
            newcastle: 'ニューカッスル',
            gateshead: 'ゲーツヘッド',
            sunderland: 'サンダーランド',
            durham: 'ダラム',
            northTyneside: 'ノースタインサイド',
            southTyneside: 'サウスタインサイド'
        },
        NOT: {
            nottingham: 'ノッティンガム',
            derby: 'ダービー',
            leicester: 'レスター',
            lincoln: 'リンカーン'
        },
        EDB: {
            edinburgh: 'エディンバラ',
            glasgow: 'グラスゴー',
            aberdeen: 'アバディーン',
            dundee: 'ダンディー',
            inverness: 'インバネス'
        },
        GLA: {
            glasgowCity: 'グラスゴー市',
            paisley: 'ペイズリー',
            motherwell: 'マザーウェル',
            hamilton: 'ハミルトン',
            eastKilbride: 'イーストキルブライド'
        },
        CDF: {
            cardiff: 'カーディフ',
            swansea: 'スウォンジー',
            newport: 'ニューポート',
            wrexham: 'レクサム',
            barry: 'バリー'
        },
        BEL: {
            belfast: 'ベルファスト',
            derry: 'デリー',
            lisburn: 'リズバーン',
            newry: 'ニューリー',
            bangor: 'バンガー'
        },
        SOU: {
            southampton: 'サウサンプトン',
            portsmouth: 'ポーツマス',
            bournemouth: 'ボーンマス',
            poole: 'プール',
            winchester: 'ウィンチェスター'
        },
        POR: {
            plymouth: 'プリマス',
            exeter: 'エクセター',
            truro: 'トルロ',
            bath: 'バース',
            taunton: 'トーントン'
        },
        BRI: {
            brighton: 'ブライトン',
            hove: 'ホーブ',
            worthing: 'ワージング',
            eastbourne: 'イーストボーン',
            hastings: 'ヘイスティングス'
        },
        CAM: {
            cambridge: 'ケンブリッジ',
            oxford: 'オックスフォード',
            peterborough: 'ピーターバラ',
            luton: 'ルートン',
            miltonKeynes: 'ミルトンキーンズ'
        }
    },
    
    universities: {
        OXF: 'オックスフォード大学',
        CAM: 'ケンブリッジ大学',
        IMP: 'インペリアル・カレッジ・ロンドン',
        UCL: 'ユニバーシティ・カレッジ・ロンドン',
        EDB: 'エディンバラ大学'
    },
    
    studentHall: '学生寮',
    academicBuilding: '学術棟',
    library: '図書館',
    
    csv: {
        fullAddress: '完全な住所',
        street: '通り',
        houseNumber: '番地',
        building: '建物',
        postcode: '郵便番号',
        city: '都市',
        county: '州',
        fullName: '氏名',
        gender: '性別',
        age: '年齢',
        birthDate: '生年月日',
        phone: '電話',
        email: 'メール',
        cardType: 'カードタイプ',
        cardNumber: 'カード番号',
        idCardNumber: '国民保険番号'
    }
};
