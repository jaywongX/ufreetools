export default {
   name: 'パキスタン住所ジェネレーター - 実在するパキスタン住所、身分情報、連絡先をオンラインで生成',
   description: '無料のオンラインパキスタン住所ジェネレーター。実在するフォーマットのパキスタン住所、ID番号、電話番号、クレジットカード番号、完全な身分プロファイルを作成します。県フィルタリング、JSON/CSVエクスポート形式をサポートし、プライバシー保護のためブラウザ内で完全に実行されます。',
   inputTitle: '生成設定',
   outputTitle: '生成結果',
   generateBtn: 'データを生成',
   loadSampleBtn: 'サンプルをロードして生成',
   clearAll: 'すべてクリア',
   noOutput: 'まだ結果が生成されていません',
   preview: 'データプレビュー',
   
   // 地理フィルタリング
   locationTitle: '地理フィルタリング',
   selectRegion: '県/地域を選択',
   allRegions: 'すべての県/地域',
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
   careerTitle: 'キャリアプロファイル',
   jobTitle: '職位',
   salary: '給与',
   companyName: '会社名',
   companySize: '会社規模',
   industry: '業種',
   employmentStatus: '雇用状態',
   employmentFullTime: '正社員',
   employmentPartTime: 'パートタイム',
   
   // IDカード
   idCardTitle: 'パキスタンIDカード',
   idCardNumber: 'IDカード番号',
   
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
   exportJson: 'JSONをエクスポート',
   exportCsv: 'CSVをエクスポート',
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
   invalidQuantity: '1-100の間の数値を入力してください',
   
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
   houseNumberLabel: '家番号',
   buildingLabel: '建物',
   floorLabel: '階',
   unitLabel: 'ユニット',
   regionLabel: '県/地域',
   postalCode: '郵便番号',
   
   // 住所フォーマット
   addressNumber: '番地',
   addressFloor: '階',
   addressUnit: 'ユニット',
   commercialUnit: '（商業ユニット）',
   pakistan: 'パキスタン',
   postOfficeBox: '私書箱',
   studentDormitory: '学生寮',
   teachingBuilding: '教育棟',
   library: '図書館',
   buildingUnit: '棟',
   apartment: 'アパート',
   
   // 県/地域名（パキスタン4県+地域）
   regions: {
       'Punjab': 'パンジャブ',
       'Sindh': 'シンド',
       'Khyber Pakhtunkhwa': 'ハイベル・パクトゥンクワ',
       'Balochistan': 'ビローシスターン',
       'Islamabad Capital Territory': 'イスラマバード首都圏'
   },
   
   // 大学名
   universities: {
       'LUMS': 'ラホール経営大学',
       'PU': 'パンジャブ大学',
       'KU': 'カラチ大学',
       'QAU': 'カイド・アザム大学',
       'COMSATS': 'コムサツ・イスラマバード大学',
       'NUST': '国立科学技術大学',
       'IBA': '経営学研究所',
       'PIDE': 'パキスタン開発経済研究所',
       'NCA': '国立芸術大学'
   },
   
   // CSVカラム名
   csv: {
       fullAddress: '完全な住所',
       street: '通り',
       houseNumber: '家番号',
       building: '建物',
       floor: '階',
       unit: 'ユニット',
       region: '県/地域',
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