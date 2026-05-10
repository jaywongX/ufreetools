export default {
    name: 'トルコ住所ジェネレーター - 実在のトルコ住所、身分情報、連絡先をオンラインで生成',
    description: '無料のオンライントルコ住所ジェネレーター。実在の形式のトルコ住所、身分証明書番号、電話番号、クレジットカード番号、完全な身分プロフィールを作成します。都道府県フィルタリング、JSON/CSVエクスポート形式をサポートし、プライバシー保護のためにブラウザ内で完全に実行されます。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: 'データを生成',
    loadSampleBtn: 'サンプルをロードして生成',
    clearAll: 'すべてクリア',
    noOutput: 'まだ結果が生成されていません',
    preview: 'データをプレビュー',
    
    // 地理フィルタリング
    locationTitle: '地理フィルタリング',
    selectProvince: '都道府県を選択',
    selectDistrict: '地区を選択',
    allProvinces: 'すべての都道府県',
    allDistricts: 'すべての地区',
    postalCodeLabel: '郵便番号',
    validatePostalCode: '郵便番号を検証',
    
    // 住所タイプ
    addressTypeTitle: '住所タイプ',
    addressTypeResidential: '住宅住所',
    addressTypeCommercial: '商業住所',
    addressTypeVirtual: 'バーチャル邮箱',
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
    employmentPartTime: '契約社員',
    
    // 身分証明書
    idCardTitle: 'トルコ身分証明書',
    idCardNumber: '身分証明書番号',
    nationalId: '国民身分番号',
    serialNumber: 'シリアル番号',
    checkDigit: 'チェックディジット',
    
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
    exportIdCard: '身分証明書画像を生成',
    exportBusinessCard: '名刺を生成',
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
    districtLabel: '地区',
    provinceLabel: '都道府県',
    postalCode: '郵便番号',
    
    // 住所形式
    addressNumber: '番',
    addressFloor: 'F',
    addressUnit: 'ユニット',
    commercialUnit: '（商業ユニット）',
    turkey: 'トルコ',
    postOfficeBox: '私書箱',
    studentDormitory: '学生寮',
    teachingBuilding: '教学楼',
    library: '図書館',
    buildingUnit: '棟',
    apartment: 'マンション',
    
    // アラートメッセージ
    idCardImageAlert: '身分証明書画像の生成にはcanvas実装が必要です',
    businessCardAlert: '名刺の生成にはcanvas実装が必要です',
    
    // 都道府県名（主要トルコ都道府県）
    provinces: {
        IST: 'イスタンブール',
        ANK: 'アンカラ',
        IZM: 'イズミル',
        BUR: 'ブルサ',
        ANT: 'アンタルヤ',
        ADN: 'アダナ',
        GAZ: 'ガジアンテップ',
        KON: 'コニャ',
        MRA: 'メルシン',
        KAY: 'カイセリ',
        ESK: 'エスキシェヒル',
        TRA: 'トラブゾン',
        SAM: 'サムスン',
        MAL: 'マラティア',
        DIA: 'ディヤルバキル',
        ERZ: 'エルズルム',
        VAN: 'ヴァン',
        SIV: 'シヴァス',
        TOK: 'トカト',
        COR: 'チョルム'
    },
    
    // 地区名（イスタンブール例）
    districtsData: {
        IST: {
            beyoglu: 'ベヨグル',
            fatih: 'ファティフ',
            kadikoy: 'カドゥキョイ',
            besiktas: 'ベシクタシュ',
            sisli: 'シリ',
            uskudar: 'ウスクダル',
            bakirkoy: 'バキルキョイ',
            zeytinburnu: 'ゼイティンブルヌ',
            beylikduzu: 'ベイリクドゥズ',
            pendik: 'ペンドゥク',
            maltepe: 'マルテペ',
            kartal: 'カルタル',
            tuzla: 'トゥズラ',
            catalca: 'チャタルジャ'
        },
        ANK: {
            cankaya: 'チャンカヤ',
            yenimahalle: 'イェニマハレ',
            altindag: 'アルティンダグ',
            pursaklar: 'プルサクラル',
            eryaman: 'エリヤマン',
            etimesgut: 'エティメスグト',
            sincan: 'スンジャン'
        },
        IZM: {
            konak: 'コナク',
            karsiyaka: 'カルシュヤカ',
            bornova: 'ボルノヴァ',
            cigli: 'チグリ',
            bayrakli: 'バイラクル',
            balcova: 'バルジョヴァ',
            guzelbahce: 'グゼルバフチェ'
        },
        BUR: {
            nilufer: 'ニルフェル',
            osmangazi: 'オスマンガズ',
            yildirim: 'イルドゥルム',
            mudanya: 'ムダニャ',
            gemlik: 'ゲムリク'
        },
        ANT: {
            muratpasa: 'ムラトパシャ',
            kepez: 'ケペズ',
            konyaalti: 'コニヤアルトゥ',
            aksu: 'アクス',
            dosenmeadi: 'ドシェンメアドゥ'
        }
    },
    
    // 大学名
    universities: {
        ITU: 'イスタンブール工科大学',
        ITU: 'イスタンブール大学',
        BOUN: 'ボアジチ大学',
        METU: '中東工科大学',
        HU: 'ハジェッテペ大学',
        ANU: 'アンカラ大学',
        DEU: 'ドクズ・エイルル大学'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完全な住所',
        street: '通り',
        houseNumber: '家番号',
        building: '建物',
        floor: '階',
        unit: 'ユニット',
        district: '地区',
        province: '都道府県',
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