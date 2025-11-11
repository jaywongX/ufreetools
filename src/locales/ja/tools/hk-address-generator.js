export default {
    name: 'HKアドレスジェネレーター - オンラインで実際の香港アドレス、身分情報、連絡先を生成',
    description: '無料のオンラインHKアドレスジェネレーターで、実際の形式の香港アドレス、ID番号、電話番号、クレジットカード番号、完全な身分プロファイルを生成します。地区フィルタリング、JSON/CSVエクスポート形式をサポートし、プライバシー保護のために完全にブラウザ内で実行されます。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: 'データを生成',
    loadSampleBtn: 'サンプルを読み込んで生成',
    clearAll: 'すべてクリア',
    noOutput: 'まだ結果が生成されていません',
    preview: 'データプレビュー',
    
    // 地理フィルタリング
    locationTitle: '地理フィルタリング',
    selectDistrict: '地区を選択',
    selectArea: 'エリアを選択',
    allDistricts: 'すべての地区',
    allAreas: 'すべてのエリア',
    postalCodeLabel: '郵便番号',
    validatePostalCode: '郵便番号を検証',
    
    // アドレスタイプ
    addressTypeTitle: 'アドレスタイプ',
    addressTypeResidential: '住宅アドレス',
    addressTypeCommercial: '商業アドレス',
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
    idCardTitle: '香港IDカード',
    idCardNumber: 'IDカード番号',
    prefixLetter: '接頭辞文字',
    serialNumber: 'シリアル番号',
    checkDigit: 'チェックデジット',
    
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
    exportIdCard: 'IDカード画像を生成',
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
    addressLabel: 'アドレス',
    streetLabel: '通り',
    houseNumberLabel: '家屋番号',
    buildingLabel: '建物',
    floorLabel: '階',
    unitLabel: 'ユニット',
    districtLabel: '地区',
    
    // アドレス形式
    addressNumber: '番',
    addressFloor: '階',
    addressUnit: '号室',
    commercialUnit: '（商業ユニット）',
    hongKong: '香港',
    postOfficeBox: '私書箱',
    studentDormitory: '学生寮',
    teachingBuilding: '教学棟',
    library: '図書館',
    buildingUnit: '棟',
    
    // アラートメッセージ
    idCardImageAlert: 'IDカード画像生成にはキャンバス実装が必要です',
    businessCardAlert: '名刺生成にはキャンバス実装が必要です',
    
    // 地区名
    districts: {
        CW: '中西区',
        WAN: '湾仔区',
        E: '東区',
        S: '南区',
        YTM: '油尖旺区',
        SSP: '深水埗区',
        KC: '九龍城区',
        WTS: '黄大仙区',
        KT: '観塘区',
        TM: '屯門区',
        YL: '元朗区',
        N: '北区',
        TP: '大埔区',
        ST: '沙田区',
        SK: '西貢区',
        TW: '荃湾区',
        KW: '葵青区',
        IS: '離島区'
    },
    
    // エリア名
    areas: {
        CW: {
            central: '中環',
            sheungWan: '上環',
            saiWan: '西環',
            midLevels: '半山'
        },
        WAN: {
            wanChai: '湾仔',
            causewayBay: '銅鑼湾',
            happyValley: '跑馬地',
            taiHang: '大坑'
        },
        E: {
            northPoint: '北角',
            quarryBay: '鲗魚涌',
            taiKooShing: '太古城',
            shauKeiWan: '筲箕湾',
            chaiWan: '柴湾'
        },
        S: {
            repulseBay: '浅水湾',
            deepWaterBay: '深水湾',
            stanley: '赤柱',
            aberdeen: '香港仔',
            apLeiChau: '鴨脷洲'
        },
        YTM: {
            tsimShaTsui: '尖沙咀',
            yauMaTei: '油麻地',
            mongKok: '旺角',
            jordan: '佐敦'
        },
        SSP: {
            shamShuiPo: '深水埗',
            cheungShaWan: '長沙湾',
            laiChiKok: '荔枝角',
            shekKipMei: '石硖尾'
        },
        KC: {
            kowloonCity: '九龍城',
            toKwaWan: '土瓜湾',
            hungHom: '紅磡',
            hoManTin: '何文田'
        },
        WTS: {
            wongTaiSin: '黄大仙',
            diamondHill: '鑽石山',
            sanPoKong: '新蒲崗',
            lokFu: '楽富'
        },
        KT: {
            kwunTong: '観塘',
            lamTin: '藍田',
            ngauTauKok: '牛頭角',
            kowloonBay: '九龍湾'
        },
        TM: {
            tuenMun: '屯門',
            yuenLong: '元朗',
            tinShuiWai: '天水囲',
            tsingShan: '青山'
        },
        YL: {
            yuenLong: '元朗',
            tinShuiWai: '天水囲',
            kamTin: '錦田',
            pingShan: '屏山'
        },
        N: {
            sheungShui: '上水',
            fanLing: '粉嶺',
            shaTauKok: '沙頭角',
            taKuLing: '打鼓嶺'
        },
        TP: {
            taiPo: '大埔',
            taiPoMarket: '大埔墟',
            taiWo: '太和',
            lamTsuen: '林村'
        },
        ST: {
            shaTin: '沙田',
            taiWai: '大囲',
            maOnShan: '馬鞍山',
            foTan: '火炭'
        },
        SK: {
            saiKung: '西貢',
            tseungKwanO: '将軍澳',
            hangHau: '坑口',
            clearWaterBay: '清水湾'
        },
        TW: {
            tsuenWan: '荃湾',
            kwaiChung: '葵涌',
            tsingYi: '青衣',
            shamTseng: '深井'
        }
    },
    
    // 大学名
    universities: {
        HKU: '香港大学',
        CUHK: '香港中文大学',
        HKUST: '香港科技大学',
        PolyU: '香港理工大学',
        CityU: '香港城市大学'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完全住所',
        street: '通り',
        houseNumber: '家屋番号',
        building: '建物',
        floor: '階',
        unit: 'ユニット',
        district: '地区',
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