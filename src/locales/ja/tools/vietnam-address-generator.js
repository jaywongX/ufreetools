export default {
    name: 'ベトナム住所ジェネレーター - 実在のベトナム住所、身分情報、連絡先をオンラインで生成',
    description: '無料のオンラインベトナム住所ジェネレーターで、実在の形式のベトナム住所、ID番号、電話番号、クレジットカード番号、完全な身分プロファイルを生成します。都道府県フィルタリング、JSON/CSVエクスポート形式をサポートし、プライバシー保護のために完全にブラウザ内で実行されます。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: 'データを生成',
    loadSampleBtn: 'サンプルを読み込んで生成',
    clearAll: 'すべてクリア',
    noOutput: 'まだ結果が生成されていません',
    preview: 'データプレビュー',
    
    // 地理フィルタリング
    locationTitle: '地理フィルタリング',
    selectProvince: '都道府県/都市を選択',
    selectDistrict: '地区を選択',
    allProvinces: 'すべての都道府県/都市',
    allDistricts: 'すべての地区',
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
    jobTitle: '役職',
    salary: '給料',
    companyName: '会社名',
    companySize: '会社規模',
    industry: '業界',
    employmentStatus: '就業状態',
    employmentFullTime: '正社員',
    employmentPartTime: 'パートタイム',
    
    // IDカード
    idCardTitle: 'ベトナムIDカード',
    idCardNumber: 'IDカード番号',
    cmndNumber: 'CMND番号',
    cccdNumber: 'CCCD番号',
    serialNumber: 'シリアル番号',
    
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
    cookiePolicy: 'クッキーポリシー',
    
    // エクスポートオプション
    exportTitle: 'エクスポート形式',
    exportJson: 'JSONエクスポート',
    exportCsv: 'CSVエクスポート',
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
    invalidQuantity: '1から100の間の数値を入力してください',
    
    // 結果表示
    resultCount: '{count}件のレコードを生成しました',
    resultSummary: '結果概要',
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
    wardLabel: '区',
    districtLabel: '地区',
    provinceLabel: '都道府県/都市',
    postalCode: '郵便番号',
    
    // 住所形式
    addressNumber: '番',
    addressFloor: '階',
    addressUnit: 'ユニット',
    commercialUnit: '（商業ユニット）',
    vietnam: 'ベトナム',
    postOfficeBox: '私書箱',
    studentDormitory: '学生寮',
    teachingBuilding: '教学棟',
    library: '図書館',
    buildingUnit: '棟',
    apartment: 'マンション',
    
    // アラートメッセージ
    idCardImageAlert: 'IDカード画像の生成にはCanvasの実装が必要です',
    businessCardAlert: '名刺の生成にはCanvasの実装が必要です',
    
    // 都道府県名（ベトナムの都道府県）
    provinces: {
        HN: 'ハノイ',
        HCM: 'ホーチミン市',
        HP: 'ハイフォン',
        DN: 'ダナン',
        CT: 'カントー',
        BH: 'バリア・bungタウ',
        BD: 'ビンズオン',
        QN: 'クアンニン',
        QG: 'クアンナム',
        KG: 'カマウ',
        DT: 'ドンナイ',
        HB: 'ハナム',
        TH: 'タイビン',
        NB: 'ナムディン',
        VL: 'ヴィンロン',
        TG: 'ソックチャン',
        NT: 'ニントゥアン',
        PY: 'フーイエン',
        TV: 'タイニン',
        BD: 'ビンディン',
        HT: 'ホアビン',
        TB: 'トゥエンクアン',
        TN: 'タイグエン',
        LC: 'ライチャウ',
        YB: 'イエンバイ',
        DB: 'ディエンビエン',
        LA: 'ラオカイ',
        CB: 'カオバン',
        LD: 'ラムドン',
        DC: 'ダクラク',
        QN: 'クアンビン',
        QT: 'クアンチ',
        HT: 'ハティン',
        NA: 'ゲアン',
        TT: 'タインホア',
        NB: 'ニンビン',
        ST: 'アンザン',
        CT: 'トラビン',
        BP: 'ビントゥエ',
        BL: 'バクリエウ',
        KG: 'カマウ',
        CM: 'カマウ'
    },
    
    // 地区データ（ハノイとホーチミン市の例）
    districtsData: {
        HN: {
            hoanKiem: 'ホアンキエム',
            baDinh: 'バディン',
            dongDa: 'ドンダ',
            haiBaTrung: 'ハイバートゥン',
            thanhXuan: 'タンスアン',
            cauGiay: 'カウジャイ',
            hoangMai: 'ホアンマイ',
            longBien: 'ロンビエン',
            tayHo: 'タイホ',
            bacTuLiem: 'バクトゥリエム',
            namTuLiem: 'ナムトゥリエム',
            haDong: 'ハドン'
        },
        HCM: {
            quan1: '地区1',
            quan3: '地区3',
            quan4: '地区4',
            quan5: '地区5',
            quan6: '地区6',
            quan7: '地区7',
            quan10: '地区10',
            quan11: '地区11',
            binhThanh: 'ビンタン',
            phuNhuan: 'フウエン',
            tanBinh: 'タンビン',
            goVap: 'ゴヴァップ',
            binhChanh: 'ビンチャン',
            thuDuc: 'トゥドゥック'
        },
        DN: {
            haiChau: 'ハイチャウ',
            thanhKhe: 'タンケ',
            sonTra: 'ソントラ',
            NguHanhSon: 'Ngu Hanh Son',
            LienChieu: 'Lien Chieu',
            CamLe: 'Cam Le'
        },
        HP: {
            HongBang: 'ホンバン',
            LeChan: 'レチャン',
            NgoQuyen: 'Ngo Quyen',
            HaiAn: 'ハイアン',
            KiAn: 'キアン'
        }
    },
    
    // 大学名
    universities: {
        HUST: 'ハノイ科学技術大学',
        VNU: 'ベトナム国立大学',
        HANU: 'ハノイ国立大学',
        HCMUS: 'ホーチミン市国立大学',
        RMIT: 'RMIT大学ベトナム',
        FTU: '対外貿易大学',
        NEU: '国民経済大学',
        HPU: 'ハノイ薬科大学',
        PTIT: '郵電通信技術学院',
        FPT: 'FPT大学'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完全な住所',
        street: '通り',
        houseNumber: '家番号',
        building: '建物',
        floor: '階',
        unit: 'ユニット',
        ward: '区',
        district: '地区',
        province: '都道府県/都市',
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