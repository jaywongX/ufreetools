export default {
    name: 'フランス住所ジェネレーター - 実在のフランス住所、身分情報、連絡先をオンラインで生成',
    description: '無料のオンラインフランス住所ジェネレーターで、実在の形式のフランス住所、ID番号、電話番号、クレジットカード番号、完全な身分プロファイルを生成します。部門フィルタリング、JSON/CSVエクスポート形式をサポートし、プライバシー保護のために完全にブラウザ内で実行されます。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: 'データを生成',
    loadSampleBtn: 'サンプルを読み込んで生成',
    clearAll: 'すべてクリア',
    noOutput: 'まだ結果が生成されていません',
    preview: 'データプレビュー',
    
    // 地理フィルタリング
    locationTitle: '地理フィルタリング',
    selectRegion: '地域を選択',
    selectDepartment: '部門を選択',
    allRegions: 'すべての地域',
    allDepartments: 'すべての部門',
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
    idCardTitle: 'フランスIDカード',
    idCardNumber: 'IDカード番号',
    nirNumber: 'NIR番号',
    serialNumber: 'シリアル番号',
    checkKey: 'チェックキー',
    
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
    addressLabel: '住所',
    streetLabel: '通り',
    houseNumberLabel: '家屋番号',
    buildingLabel: '建物',
    floorLabel: '階',
    unitLabel: 'ユニット',
    departmentLabel: '部門',
    regionLabel: '地域',
    postalCode: '郵便番号',
    
    // 住所形式
    addressNumber: '番',
    addressFloor: '階',
    addressUnit: '号室',
    commercialUnit: '（商業ユニット）',
    france: 'フランス',
    postOfficeBox: '私書箱',
    studentDormitory: '学生寮',
    teachingBuilding: '教学棟',
    library: '図書館',
    buildingUnit: '棟',
    apartment: 'マンション',
    
    // アラートメッセージ
    idCardImageAlert: 'IDカード画像生成にはキャンバス実装が必要です',
    businessCardAlert: '名刺生成にはキャンバス実装が必要です',
    
    // 地域名（フランスの地域）
    regions: {
        IDF: 'イル＝ド＝フランス',
        ARA: 'オーヴェルニュ＝ローヌ＝アルプ',
        OCC: 'オクシタニー',
        NAQ: 'ヌーヴェル＝アキテーヌ',
        PAC: 'プロヴァンス＝アルプ＝コート・ダジュール',
        HDF: 'オー・ド・フランス',
        BFC: 'ブルゴーヌ＝フランシュ＝コンテ',
        NAC: 'ロワール地方',
        PDL: 'ロワール地方',
        BRE: 'ブルターニュ',
        NOR: 'ノルマンディー',
        GUA: 'グアドループ',
        MQ: 'マルティニーク',
        GUY: 'ギアナ',
        REU: 'レユニオン',
        COR: 'コルス',
        ALO: 'アルザス＝ロレーヌ',
        MP: 'メス＝ポメラニー'
    },
    
    // 部門データ（イル＝ド＝フランス地方の例）
    departmentsData: {
        IDF: {
            paris: 'パリ',
            hautsDeSeine: 'オー＝ド＝セーヌ',
            seineSaintDenis: 'セーヌ＝サン＝ドニ',
            valDeMarne: 'ヴァル＝ド＝マルヌ',
            yvelines: 'イヴリン',
            essonne: 'エソンヌ',
            valDOise: 'ヴァル＝ドワーズ',
            seineEtMarne: 'セーヌ＝エ＝マルヌ'
        },
        ARA: {
            rhone: 'ローヌ',
            loire: 'ロワール',
            isere: 'イゼール',
            ain: 'アン',
            savoie: 'サヴォワ',
            hauteSavoie: 'オート＝サヴォワ',
            allier: 'アリエ',
            puyDeDome: 'ピュイ＝ド＝ドーム'
        },
        OCC: {
            herault: 'エロー',
            gard: 'ガール',
            aude: 'オード',
            pyreneesOrientales: 'ピレネー＝ゾリアンタル',
            tarn: 'タルヌ',
            hauteGaronne: 'オート＝ガロンヌ',
            gers: 'ジェール',
            lotEtGaronne: 'ロット＝エ＝ガロンヌ'
        },
        NAQ: {
            gironde: 'ジロンド',
            charenteMaritime: 'シャレント＝マリティーム',
            dordogne: 'ドルドーニュ',
            landes: 'ランド',
            vienne: 'ヴィエンヌ',
            hauteVienne: 'オート＝ヴィエンヌ',
            charente: 'シャレント',
            correze: 'コレーズ'
        },
        PAC: {
            bouchesDuRhone: 'ブーシュ＝デュ＝ローヌ',
            alpesMaritimes: 'アルプ＝マリティーム',
            var: 'ヴァール',
            vaucluse: 'ヴォクリーズ',
            alpesDeHauteProvence: 'アルプ＝ド＝オート＝プロヴァンス',
            hautesAlpes: 'オート＝アルプ'
        },
        HDF: {
            nord: 'ノール',
            pasDeCalais: 'パ＝ド＝カレー',
            somme: 'ソンム',
            aisne: 'アンヌ',
            oise: 'ワーズ',
            aisne: 'アンヌ'
        }
    },
    
    // 大学名
    universities: {
        UP1: 'パリ第1大学パンテオン＝ソルボンヌ',
        UP2: 'パリ第2大学パンテオン・アッサース',
        UP3: 'パリ第3大学ソルボンヌ・ヌーヴェル',
        UP4: 'パリ第1大学パンテオン＝ソルボンヌ',
        UP5: 'パリ大学デカルト',
        UP6: 'ピエール・エ・マリー・キュリー大学',
        UP7: 'パリ大学ディドロ',
        UP8: 'パリ第8大学ヴァンセンヌ＝サン＝ドニ',
        UP9: 'パリ大学ドフィーヌ',
        UP10: 'パリ大学ナンテール',
        UP11: 'パリ大学サクレー',
        UP12: 'パリ大学＝エスト・クレテイユ',
        UP13: 'ソルボンヌ・パリ・ノール',
        ENS: '高等師範学校',
        X: '高等理工学校'
    },
    
    // CSVカラム名
    csv: {
        fullAddress: '完全住所',
        street: '通り',
        houseNumber: '家屋番号',
        building: '建物',
        floor: '階',
        unit: 'ユニット',
        department: '部門',
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
        idCardNumber: 'IDカード番号'
    }
};