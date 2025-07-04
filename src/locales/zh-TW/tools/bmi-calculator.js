export default {
  name: 'BMI計算器',
  description: '計算體質指數(BMI)並評估您的體重狀況',
  
  // 主要界面文本
  height: '身高',
  weight: '體重',
  calculate: '計算BMI',
  reset: '重置',
  yourBmi: '您的BMI值',
  bmiCategory: 'BMI分類',
  
  // 單位選擇
  unitSystem: '計量單位',
  metric: '公制 (厘米/公斤)',
  imperial: '英制 (英尺/磅)',
  cm: '厘米',
  ft: '英尺',
  in: '英寸',
  kg: '公斤',
  lbs: '磅',
  
  // BMI分類
  underweight: '體重不足',
  normalWeight: '正常體重',
  overweight: '超重',
  obesity: '肥胖',
  severeObesity: '重度肥胖',
  
  // 分類詳細信息
  underweightDesc: 'BMI低於18.5',
  normalWeightDesc: 'BMI在18.5到24.9之間',
  overweightDesc: 'BMI在25到29.9之間',
  obesityDesc: 'BMI在30到34.9之間',
  severeObesityDesc: 'BMI在35及以上',
  
  // 結果描述
  resultPrefix: '您的BMI值為',
  resultSuffix: '，表明您屬於',
  
  // 工具介紹部分
  aboutTitle: '關於BMI計算器',
  aboutDescription: 'BMI(體質指數)是評估一個人體重與身高比例是否健康的指標。本工具基於您的身高和體重計算BMI值，並提供相應的健康評估。',
  
  whatIsTitle: '什麼是BMI？',
  whatIsDescription: 'BMI(Body Mass Index)即體質指數，是通過體重(kg)除以身高(m)的平方來計算的。BMI值用於評估個體是否處於健康體重範圍內，是目前國際上常用的衡量人體胖瘦程度的標準。',
  
  howToCalculateTitle: 'BMI計算方法',
  metricFormula: '公制計算公式: BMI = 體重(kg) / 身高(m)²',
  imperialFormula: '英制計算公式: BMI = 體重(lbs) × 703 / 身高(in)²',
  
  interpretationTitle: 'BMI值解讀',
  interpretationDesc: 'BMI值對應的體重狀態分類如下:',
  
  limitationsTitle: 'BMI的局限性',
  limitation1: 'BMI不考慮體脂率、肌肉量和骨骼質量的差異',
  limitation2: '不適用於評估運動員、孕婦和兒童的體重狀態',
  limitation3: '不反映脂肪在體內的分佈情況',
  limitation4: '不考慮種族、年齡和性別差異',
  
  tipsTitle: '健康體重小貼士',
  tip1: '保持均衡的飲食結構，攝入充足的蛋白質、蔬果和全穀物',
  tip2: '每週進行至少150分鐘的中等強度有氧運動',
  tip3: '避免長時間久坐，增加日常身體活動',
  tip4: '保持充足的睡眠和水分攝入',
  tip5: '如果BMI值異常，建議諮詢醫生或營養師的專業建議',
  
  // 添加這一行
  emptyStateMessage: '輸入您的身高和體重，然後點擊"計算BMI"按鈕'
};
