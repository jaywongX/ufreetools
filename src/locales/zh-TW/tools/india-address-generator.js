export default {
   name: '印度地址生成器 - 線上生成真實印度地址、身份資訊與聯絡資訊',
   description: '免費線上印度地址生成器，生成真實格式的印度地址、身分證號碼、電話號碼、信用卡號碼等完整身份檔案。支援按州篩選，匯出JSON/CSV格式，純前端運行保護隱私。',
   inputTitle: '生成設定',
   outputTitle: '生成結果',
   generateBtn: '生成資料',
   loadSampleBtn: '載入範例並生成',
   clearAll: '清除全部',
   noOutput: '暫無生成結果',
   preview: '預覽資料',
   
   // 地理篩選
   locationTitle: '地理位置篩選',
   selectRegion: '選擇州',
   allRegions: '全部州',
   postalCodeLabel: '郵遞區號',
   validatePostalCode: '驗證郵遞區號',
   
   // 地址類型
   addressTypeTitle: '地址類型',
   addressTypeResidential: '住宅地址',
   addressTypeCommercial: '商業地址',
   addressTypeVirtual: '虛擬信箱',
   addressTypeCampus: '大學校園',
   
   // 身份資訊
   identityTitle: '身份資訊',
   fullName: '全名',
   gender: '性別',
   genderMale: '男性',
   genderFemale: '女性',
   age: '年齡',
   birthDate: '出生日期',
   zodiac: '星座',
   height: '身高',
   weight: '體重',
   
   // 聯絡方式
   contactTitle: '聯絡方式',
   phoneNumber: '電話號碼',
   phoneType: '電話類型',
   phoneTypeMobile: '手機',
   phoneTypeLandline: '市話',
   areaCode: '區號',
   email: '電子郵件地址',
   tempEmail: '臨時電子郵件',
   
   // 信用卡
   creditCardTitle: '信用卡資訊',
   cardType: '卡片類型',
   cardNumber: '卡號',
   expiryDate: '有效期限',
   cvv: 'CVV',
   bankBin: '銀行BIN碼',
   
   // 職業
   careerTitle: '職業檔案',
   jobTitle: '職位',
   salary: '薪資',
   companyName: '公司名稱',
   companySize: '公司規模',
   industry: '行業',
   employmentStatus: '就業狀態',
   employmentFullTime: '全職',
   employmentPartTime: '兼職',
   
   // 身分證
   idCardTitle: '印度身分證',
   idCardNumber: '身分證號碼',
   aadhaarNumber: 'Aadhaar號碼',
   
   // 數位指紋
   fingerprintTitle: '數位指紋',
   os: '作業系統',
   osVersion: '系統版本',
   browser: '瀏覽器',
   userAgent: 'User Agent',
   screenResolution: '螢幕解析度',
   timezone: '時區',
   guid: 'GUID',
   ipAddress: 'IP位址',
   macAddress: 'MAC位址',
   cookiePolicy: 'Cookie政策',
   
   // 匯出選項
   exportTitle: '匯出格式',
   exportJson: '匯出JSON',
   exportCsv: '匯出CSV',
   downloadBtn: '下載',
   copyBtn: '複製',
   viewDetails: '查看詳情',
   
   // 批次生成
   batchTitle: '批次生成',
   quantityLabel: '生成數量',
   quantityPlaceholder: '輸入數量（1-100）',
   
   // 提示訊息
   generating: '正在生成...',
   generated: '生成完成',
   copySuccess: '已複製到剪貼簿',
   downloadSuccess: '下載成功',
   invalidQuantity: '請輸入1-100之間的數字',
   
   // 結果展示
   resultCount: '共生成 {count} 筆記錄',
   resultSummary: '生成結果摘要',
   showAll: '顯示全部',
   collapse: '收起',
   
   // 生成選項
   generateOptionsTitle: '生成選項',
   
   // 記錄顯示
   recordLabel: '記錄 #{num}',
   addressLabel: '地址',
   streetLabel: '街道',
   houseNumberLabel: '門牌號碼',
   buildingLabel: '建築物',
   floorLabel: '樓層',
   unitLabel: '單位',
   regionLabel: '州',
   postalCode: '郵遞區號',
   
   // 地址格式
   addressNumber: '號',
   addressFloor: '樓',
   addressUnit: '室',
   commercialUnit: '（商業單位）',
   india: '印度',
   postOfficeBox: '郵政信箱',
   studentDormitory: '學生宿舍',
   teachingBuilding: '教學樓',
   library: '圖書館',
   buildingUnit: '座',
   apartment: '公寓',
   
   // 州名（印度28個州+聯邦屬地，列出主要州）
   regions: {
       'Maharashtra': '馬哈拉施特拉邦',
       'Karnataka': '卡納塔克邦',
       'Tamil Nadu': '泰米爾納德邦',
       'Delhi': '德里',
       'Gujarat': '古吉拉特邦',
       'Rajasthan': '拉賈斯坦邦',
       'Uttar Pradesh': '北方邦',
       'West Bengal': '西孟加拉邦',
       'Kerala': '喀拉拉邦',
       'Andhra Pradesh': '安得拉邦',
       'Telangana': '特倫甘納邦',
       'Madhya Pradesh': '中央邦',
       'Bihar': '比哈爾邦',
       'Punjab': '旁遮普邦',
       'Haryana': '哈里亞納邦',
       'Odisha': '奧里薩邦',
       'Chhattisgarh': '恰蒂斯加爾邦',
       'Jharkhand': '賈坎德邦',
       'Assam': '阿薩姆邦',
       'Jammu and Kashmir': '查謨和克什米爾'
   },
   
   // 大學名
   universities: {
       'IIT': '印度理工學院',
       'IISc': '印度科學研究所',
       'IIM': '印度管理學院',
       'AIIMS': '全印度醫學科學研究所',
       'JNU': '尼赫魯大學',
       'DU': '德里大學',
       'BHU': '貝拿勒斯印度教大學',
       'Jadavpur': '賈達夫普爾大學',
       'Anna': '安娜大學',
       'Osmania': '奧斯馬尼亞大學'
   },
   
   // CSV欄位名
   csv: {
       fullAddress: '完整地址',
       street: '街道',
       houseNumber: '門牌號碼',
       building: '建築物',
       floor: '樓層',
       unit: '單位',
       region: '州',
       postalCode: '郵遞區號',
       fullName: '姓名',
       gender: '性別',
       age: '年齡',
       birthDate: '出生日期',
       phone: '電話',
       email: '電子郵件',
       cardType: '卡片類型',
       cardNumber: '卡號',
       idCardNumber: '身分證號碼'
   }
};