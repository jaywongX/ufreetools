export default {
    name: 'シンガポール住所ジェネレーター - オンラインでリアルなシンガポール住所を生成',
    description: '無料のオンラインシンガポール住所ジェネレーター。リアルなシンガポール住所、NRIC番号、電話番号、クレジットカード番号、完全な身元プロファイルを作成。地域でフィルタ、JSON/CSVエクスポート、ローカル実行でプライバシー保護。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: 'データを生成',
    loadSampleBtn: 'サンプルを読み込んで生成',
    clearAll: 'すべてクリア',
    noOutput: '結果はまだありません',
    preview: 'データプレビュー',
    
    locationTitle: '地理的フィルタリング',
    selectRegion: '地域を選択',
    selectArea: 'エリアを選択',
    allRegions: 'すべての地域',
    allAreas: 'すべてのエリア',
    postalCodeLabel: '郵便番号',
    
    addressTypeTitle: '住所タイプ',
    addressTypeResidential: '住宅住所',
    addressTypeCommercial: '商業住所',
    addressTypeHDB: 'HDBフラット',
    addressTypeCondo: 'プライベートコンドミニアム',
    
    identityTitle: '本人確認情報',
    fullName: '氏名',
    gender: '性別',
    genderMale: '男性',
    genderFemale: '女性',
    age: '年齢',
    birthDate: '生年月日',
    race: '人種',
    raceChinese: '中国系',
    raceMalay: 'マレー系',
    raceIndian: 'インド系',
    raceOthers: 'その他',
    
    contactTitle: '連絡先情報',
    phoneNumber: '電話番号',
    areaCode: '市外局番',
    email: 'メールアドレス',
    tempEmail: '一時メール',
    
    creditCardTitle: 'クレジットカード情報',
    cardType: 'カードタイプ',
    cardNumber: 'カード番号',
    expiryDate: '有効期限',
    cvv: 'CVV',
    bankBin: '銀行BIN',
    
    careerTitle: 'キャリアプロフィール',
    jobTitle: '役職',
    salary: '給与',
    companyName: '会社名',
    companySize: '会社規模',
    industry: '業界',
    employmentStatus: '雇用状況',
    employmentFullTime: '正社員',
    employmentPartTime: 'パートタイム',
    
    idCardTitle: 'NRIC IDカード',
    idCardNumber: 'NRIC番号',
    prefixLetter: 'プレフィックス文字',
    serialNumber: 'シリアル番号',
    checkLetter: 'チェック文字',
    
    exportTitle: 'エクスポート形式',
    exportJson: 'JSONエクスポート',
    exportCsv: 'CSVエクスポート',
    downloadBtn: 'ダウンロード',
    copyBtn: 'コピー',
    viewDetails: '詳細を見る',
    
    batchTitle: '一括生成',
    quantityLabel: '生成数',
    quantityPlaceholder: '数値を入力（1-100）',
    
    generating: '生成中...',
    generated: '生成完了',
    copySuccess: 'クリップボードにコピーしました',
    downloadSuccess: 'ダウンロード完了',
    invalidQuantity: '1から100の間の数値を入力してください',
    
    resultCount: '{count}件のレコードを生成',
    resultSummary: '結果の要約',
    showAll: 'すべて表示',
    collapse: '折りたたむ',
    
    generateOptionsTitle: '生成オプション',
    
    recordLabel: 'レコード #{num}',
    addressLabel: '住所',
    streetLabel: '通り',
    houseNumberLabel: '番地',
    buildingLabel: '建物',
    unitLabel: 'ユニット',
    postalCodeLabel: '郵便番号',
    regionLabel: '地域',
    
    regions: {
        CR: '中央地域',
        ER: '東地域',
        NR: '北地域',
        NER: '北東地域',
        WR: '西地域'
    },
    
    areas: {
        CR: {
            orchard: 'オーチャード',
            riverValley: 'リバーバレー',
            newton: 'ニュートン',
            tanglin: 'トンリン',
            bukitTimah: 'ブキティマ',
            clementi: 'クレメンティ',
            queenstown: 'クイーンズタウン'
        },
        ER: {
            bedok: 'ベドック',
            changi: 'チャンギ',
            pasirRis: 'パシルリス',
            tampines: 'タンピネス',
            payaLebar: 'パヤレバー'
        },
        NR: {
            angMoKio: 'アンモーキオ',
            bishan: 'ビシャン',
            serangoon: 'セラングーン',
            hougang: 'ホウガン',
            sengkang: 'センカン',
            punggol: 'プンゴル'
        },
        NER: {
            hougang: 'ホウガン',
            punggol: 'プンゴル',
            seletar: 'セレタール',
            sengkang: 'センカン',
            serangoon: 'セラングーン'
        },
        WR: {
            jurongEast: 'ジュロンイースト',
            jurongWest: 'ジュロンウエスト',
            bukitBatok: 'ブキバトック',
            choaChuKang: 'チョアチューカン',
            woodlands: 'ウッドランズ',
            sembawang: 'センバワン',
            yishun: 'イーシュン'
        }
    },
    
    csv: {
        fullAddress: '完全住所',
        street: '通り',
        houseNumber: '番地',
        building: '建物',
        postalCode: '郵便番号',
        fullName: '氏名',
        gender: '性別',
        age: '年齢',
        birthDate: '生年月日',
        phone: '電話',
        email: 'メール',
        cardType: 'カードタイプ',
        cardNumber: 'カード番号',
        idCardNumber: 'NRIC番号'
    }
};
