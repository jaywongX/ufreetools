export default {
   name: '巴基斯坦地址生成器 - 線上生成真實巴基斯坦地址、身份資訊與聯絡方式',
   description: '免費線上巴基斯坦地址生成器，生成真實格式的巴基斯坦地址、身分證號碼、電話號碼、信用卡號碼等完整身份檔案。支援按省份篩選，匯出JSON/CSV格式，純前端運行保護隱私。',
   inputTitle: '生成配置',
   outputTitle: '生成結果',
   generateBtn: '生成資料',
   loadSampleBtn: '載入範例並生成',
   clearAll: '清除全部',
   noOutput: '暫無生成結果',
   preview: '預覽資料',
   
   // 地理篩選
   locationTitle: '地理位置篩選',
   selectRegion: '選擇省份/地區',
   allRegions: '全部省份/地區',
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
   idCardTitle: '巴基斯坦身分證',
   idCardNumber: '身分證號碼',
   
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
   viewDetails: '檢視詳情',
   
   // 批次生成
   batchTitle: '批次生成',
   quantityLabel: '生成數量',
   quantityPlaceholder: '輸入數量（1-100）',
   
   // 提示資訊
   generating: '正在生成...',
   generated: '生成完成',
   copySuccess: '已複製到剪貼簿',
   downloadSuccess: '下載成功',
   invalidQuantity: '請輸入1-100之間的數字',
   
   // 結果展示
   resultCount: '共生成 {count} 筆記錄',
   resultSummary: '生成結果摘要',
   showAll: '顯示全部',
   collapse: '收合',
   
   // 生成選項
   generateOptionsTitle: '生成選項',
   
   // 記錄顯示
   recordLabel: '記錄 #{num}',
   addressLabel: '地址',
   streetLabel: '街道',
   houseNumberLabel: '門牌號',
   buildingLabel: '建築',
   floorLabel: '樓層',
   unitLabel: '單位',
   regionLabel: '省份/地區',
   postalCode: '郵遞區號',
   
   // 地址格式
   addressNumber: '號',
   addressFloor: '樓',
   addressUnit: '室',
   commercialUnit: '（商業單位）',
   pakistan: '巴基斯坦',
   postOfficeBox: '郵政信箱',
   studentDormitory: '學生宿舍',
   teachingBuilding: '教學樓',
   library: '圖書館',
   buildingUnit: '座',
   apartment: '公寓',
   
   // 省份/地區名（巴基斯坦4個省+地區）
   regions: {
       'Punjab': '旁遮普省',
       'Sindh': '信德省',
       'Khyber Pakhtunkhwa': '開伯爾-普什圖省',
       'Balochistan': '俾路支省',
       'Islamabad Capital Territory': '伊斯蘭堡首都區'
   },
   
   // 大學名
   universities: {
       'LUMS': '拉合爾管理科學大學',
       'PU': '旁遮普大學',
       'KU': '卡拉奇大學',
       'QAU': '伊斯蘭堡國立大學',
       'COMSATS': 'COMSATS資訊科技大學',
       'NUST': '國家科技大學',
       'IBA': '工商管理學院',
       'PIDE': '巴基斯坦發展經濟研究所',
       'NCA': '國家藝術學院'
   },
   
   // CSV欄位名稱
   csv: {
       fullAddress: '完整地址',
       street: '街道',
       houseNumber: '門牌號',
       building: '建築',
       floor: '樓層',
       unit: '單位',
       region: '省份/地區',
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