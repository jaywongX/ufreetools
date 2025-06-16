export default {
  name: 'BMI计算器',
  description: '计算体质指数(BMI)并评估您的体重状况',
  
  // 主要界面文本
  height: '身高',
  weight: '体重',
  calculate: '计算BMI',
  reset: '重置',
  yourBmi: '您的BMI值',
  bmiCategory: 'BMI分类',
  
  // 单位选择
  unitSystem: '计量单位',
  metric: '公制 (厘米/千克)',
  imperial: '英制 (英尺/磅)',
  cm: '厘米',
  ft: '英尺',
  in: '英寸',
  kg: '千克',
  lbs: '磅',
  
  // BMI分类
  underweight: '体重不足',
  normalWeight: '正常体重',
  overweight: '超重',
  obesity: '肥胖',
  severeObesity: '重度肥胖',
  
  // 分类详细信息
  underweightDesc: 'BMI低于18.5',
  normalWeightDesc: 'BMI在18.5到24.9之间',
  overweightDesc: 'BMI在25到29.9之间',
  obesityDesc: 'BMI在30到34.9之间',
  severeObesityDesc: 'BMI在35及以上',
  
  // 结果描述
  resultPrefix: '您的BMI值为',
  resultSuffix: '，表明您属于',
  
  // 工具介绍部分
  aboutTitle: '关于BMI计算器',
  aboutDescription: 'BMI(体质指数)是评估一个人体重与身高比例是否健康的指标。本工具基于您的身高和体重计算BMI值，并提供相应的健康评估。',
  
  whatIsTitle: '什么是BMI？',
  whatIsDescription: 'BMI(Body Mass Index)即体质指数，是通过体重(kg)除以身高(m)的平方来计算的。BMI值用于评估个体是否处于健康体重范围内，是目前国际上常用的衡量人体胖瘦程度的标准。',
  
  howToCalculateTitle: 'BMI计算方法',
  metricFormula: '公制计算公式: BMI = 体重(kg) / 身高(m)²',
  imperialFormula: '英制计算公式: BMI = 体重(lbs) × 703 / 身高(in)²',
  
  interpretationTitle: 'BMI值解读',
  interpretationDesc: 'BMI值对应的体重状态分类如下:',
  
  limitationsTitle: 'BMI的局限性',
  limitation1: 'BMI不考虑体脂率、肌肉量和骨骼质量的差异',
  limitation2: '不适用于评估运动员、孕妇和儿童的体重状态',
  limitation3: '不反映脂肪在体内的分布情况',
  limitation4: '不考虑种族、年龄和性别差异',
  
  tipsTitle: '健康体重小贴士',
  tip1: '保持均衡的饮食结构，摄入充足的蛋白质、蔬果和全谷物',
  tip2: '每周进行至少150分钟的中等强度有氧运动',
  tip3: '避免长时间久坐，增加日常身体活动',
  tip4: '保持充足的睡眠和水分摄入',
  tip5: '如果BMI值异常，建议咨询医生或营养师的专业建议',
  
  // 添加这一行
  emptyStateMessage: '输入您的身高和体重，然后点击"计算BMI"按钮'
}; 