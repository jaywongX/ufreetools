export default {
   name: 'インドアドレスジェネレーター - 実在するインドのアドレス、身分情報、連絡先をオンラインで生成',
   description: '無料のオンラインインドアドレスジェネレーター。実在する形式のインドアドレス、身分証番号、電話番号、クレジットカード番号、完全な身分プロファイルを作成します。州によるフィルタリング、JSON/CSVエクスポート形式をサポートし、プライバシー保護のためブラウザ内で完全に実行されます。',
   inputTitle: '生成設定',
   outputTitle: '生成結果',
   generateBtn: 'データを生成',
   loadSampleBtn: 'サンプルを読み込んで生成',
   clearAll: 'すべてクリア',
   noOutput: 'まだ結果が生成されていません',
   preview: 'データプレビュー',
   
   // 地理フィルタリング
   locationTitle: '地理フィルタリング',
   selectRegion: '州を選択',
   allRegions: 'すべての州',
   postalCodeLabel: '郵便番号',
   validatePostalCode: '郵便番号を検証',
   
   // アドレスタイプ
   addressTypeTitle: 'アドレスタイプ',
   addressTypeResidential: '住宅アドレス',
   addressTypeCommercial: '商業アドレス',
   addressTypeVirtual: '仮想邮箱',
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
   industry: '業種',
   employmentStatus: '雇用状態',
   employmentFullTime: '正社員',
   employmentPartTime: 'パートタイム',
   
   // 身分証
   idCardTitle: 'インド身分証',
   idCardNumber: '身分証番号',
   aadhaarNumber: 'アーダール番号',
   
   // デジタルフィンガープリント
   fingerprintTitle: 'デジタルフィンガープリント',
   os: 'オペレーティングシステム',
   osVersion: 'システムバージョン',
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
   buildingLabel: '建物',
   floorLabel: '階',
   unitLabel: '部屋',
   regionLabel: '州',
   postalCode: '郵便番号',
   
   // 住所形式
   addressNumber: '番',
   addressFloor: '階',
   addressUnit: '号室',
   commercialUnit: '（商業ユニット）',
   india: 'インド',
   postOfficeBox: '私書箱',
   studentDormitory: '学生寮',
   teachingBuilding: '教学棟',
   library: '図書館',
   buildingUnit: '棟',
   apartment: 'マンション',
   
   // 地域名（インドの州）
   regions: {
       'Maharashtra': 'マハラシュトラ',
       'Karnataka': 'カルナータカ',
       'Tamil Nadu': 'タミル・ナードゥ',
       'Delhi': 'デリー',
       'Gujarat': 'グジャラート',
       'Rajasthan': 'ラージャスターン',
       'Uttar Pradesh': 'ウッタル・プラデーシュ',
       'West Bengal': '西ベンガル',
       'Kerala': 'ケララ',
       'Andhra Pradesh': 'アーンドラ・プラデーシュ',
       'Telangana': 'テランガーナ',
       'Madhya Pradesh': 'マディヤ・プラデーシュ',
       'Bihar': 'ビハール',
       'Punjab': 'パンジャブ',
       'Haryana': 'ハリヤーナ',
       'Odisha': 'オディシャ',
       'Chhattisgarh': 'チャッティースガル',
       'Jharkhand': 'ジャールカンド',
       'Assam': 'アッサム',
       'Jammu and Kashmir': 'ジャムammu・カシミール'
   },
   
   // 大学名
   universities: {
       'IIT': 'インド工科大学',
       'IISc': 'インド科学大学',
       'IIM': 'インド経営大学',
       'AIIMS': '全インド医学科学研究所',
       'JNU': 'ジャワハルラル・ネルー大学',
       'DU': 'デリー大学',
       'BHU': 'バララシ・ヒンドゥー大学',
       'Jadavpur': 'ジャダブプル大学',
       'Anna': 'アンナ大学',
       'Osmania': 'オスマニア大学'
   },
   
   // CSVカラム名
   csv: {
       fullAddress: '完全な住所',
       street: '通り',
       houseNumber: '番地',
       building: '建物',
       floor: '階',
       unit: '部屋',
       region: '州',
       postalCode: '郵便番号',
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