export default {
  name: 'BMI計算機',
  description: '体格指数(BMI)を計算し、体重状態を評価',

  // 主要界面文本
  height: '身長',
  weight: '体重',
  calculate: 'BMIを計算',
  reset: 'リセット',
  yourBmi: 'あなたのBMI値',
  bmiCategory: 'BMI分類',

  // 单位选择
  unitSystem: '測定単位',
  metric: 'メートル法 (cm/kg)',
  imperial: 'ヤード・ポンド法 (ft/lbs)',
  cm: 'センチメートル',
  ft: 'フィート',
  in: 'インチ',
  kg: 'キログラム',
  lbs: 'ポンド',

  // BMI分类
  underweight: '低体重',
  normalWeight: '普通体重',
  overweight: '過体重',
  obesity: '肥満',
  severeObesity: '重度肥満',

  // 分类详细信息
  underweightDesc: 'BMI 18.5未満',
  normalWeightDesc: 'BMI 18.5～24.9',
  overweightDesc: 'BMI 25～29.9',
  obesityDesc: 'BMI 30～34.9',
  severeObesityDesc: 'BMI 35以上',

  // 结果描述
  resultPrefix: 'あなたのBMI値は',
  resultSuffix: 'で、分類は',

  // 工具介绍部分
  aboutTitle: 'BMI計算機について',
  aboutDescription: 'BMI（体格指数）は、身長に対する体重の比率が健康的かどうかを評価する指標です。このツールはあなたの身長と体重に基づいてBMI値を計算し、健康評価を提供します。',

  whatIsTitle: 'BMIとは？',
  whatIsDescription: 'BMI（Body Mass Index）は体格指数とも呼ばれ、体重(kg)を身長(m)の二乗で割って計算されます。BMI値は個人が健康的な体重範囲内にあるかどうかを評価するために使用され、現在、国際的に人体の肥満度を測定する標準的な指標となっています。',

  howToCalculateTitle: 'BMIの計算方法',
  metricFormula: 'メートル法計算式: BMI = 体重(kg) / 身長(m)²',
  imperialFormula: 'ヤード・ポンド法計算式: BMI = 体重(lbs) × 703 / 身長(in)²',

  interpretationTitle: 'BMI値の解釈',
  interpretationDesc: 'BMI値に対応する体重状態の分類は以下の通りです:',

  limitationsTitle: 'BMIの限界',
  limitation1: 'BMIは体脂肪率、筋肉量、骨量の違いを考慮していません',
  limitation2: 'アスリート、妊婦、子供の体重状態の評価には適していません',
  limitation3: '体内の脂肪分布状況を反映していません',
  limitation4: '人種、年齢、性別の違いを考慮していません',

  tipsTitle: '健康的な体重のためのヒント',
  tip1: 'バランスの取れた食事を心がけ、十分なタンパク質、野菜、果物、全粒穀物を摂取する',
  tip2: '週に少なくとも150分の中程度の有酸素運動を行う',
  tip3: '長時間の座りっぱなしを避け、日常的な身体活動を増やす',
  tip4: '十分な睡眠と水分摂取を確保する',
  tip5: 'BMI値に異常がある場合は、医師や栄養士に専門的なアドバイスを求めることをお勧めします',

  emptyStateMessage: '身長と体重を入力し、"BMIを計算"ボタンをクリックしてください'
};