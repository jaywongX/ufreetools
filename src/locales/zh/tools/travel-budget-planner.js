export default {
  name: '旅行预算规划器',
  description: '规划并计算您的旅行预算，轻松管理旅行花费',
  
  // 主要界面元素
  planYourTrip: '规划您的旅行',
  destination: '目的地',
  startDate: '开始日期',
  endDate: '结束日期',
  travelers: '旅行人数',
  currency: '显示货币',
  tripDuration: '旅行天数',
  totalBudget: '总预算',
  perPersonBudget: '每人预算',
  perDayBudget: '每日预算',
  
  // 按钮和操作
  calculate: '计算预算',
  reset: '重置',
  addExpense: '添加支出项',
  removeExpense: '移除',
  saveAsPDF: '保存为PDF',
  
  // 分类标题
  categories: {
    transport: '交通',
    accommodation: '住宿',
    food: '餐饮',
    activities: '活动和景点',
    shopping: '购物',
    misc: '其他费用',
    emergency: '紧急备用金'
  },
  
  // 交通选项
  transport: {
    title: '交通费用',
    flight: '机票',
    train: '火车',
    bus: '巴士',
    car: '汽车租赁/燃油',
    taxi: '出租车/网约车',
    publicTransport: '公共交通',
    other: '其他交通'
  },
  
  // 住宿选项
  accommodation: {
    title: '住宿费用',
    hotel: '酒店',
    hostel: '青年旅社',
    apartment: '民宿/公寓',
    camping: '露营',
    other: '其他住宿'
  },
  
  // 餐饮选项
  food: {
    title: '餐饮费用',
    restaurants: '餐厅用餐',
    streetFood: '街边小吃',
    groceries: '采购食材',
    drinks: '饮料/酒水',
    other: '其他餐饮'
  },
  
  // 活动选项
  activities: {
    title: '活动和景点',
    attractions: '景点门票',
    tours: '导游/团队活动',
    entertainment: '娱乐活动',
    other: '其他活动'
  },
  
  // 其他费用
  misc: {
    title: '其他费用',
    insurance: '旅行保险',
    visa: '签证费用',
    souvenirs: '纪念品',
    internet: '上网费用',
    tips: '小费',
    other: '其他杂费'
  },
  
  // 表格标题
  table: {
    category: '类别',
    description: '描述',
    amount: '金额',
    actions: '操作'
  },
  
  // 统计和分析
  analysis: {
    title: '预算分析',
    summary: '预算摘要',
    breakdown: '花费细分',
    distribution: '预算分布',
    dailyAverage: '每日平均',
    suggestions: '预算建议'
  },
  
  // 货币
  currencies: {
    CNY: '人民币 (¥)',
    USD: '美元 ($)',
    EUR: '欧元 (€)',
    JPY: '日元 (¥)',
    GBP: '英镑 (£)',
    KRW: '韩元 (₩)',
    AUD: '澳元 ($)',
    CAD: '加元 ($)',
    THB: '泰铢 (฿)',
    SGD: '新加坡元 ($)'
  },
  
  // 常见目的地
  destinations: {
    domestic: '国内目的地',
    international: '国际目的地',
    popularCities: '热门城市',
    beijing: '北京',
    shanghai: '上海',
    guangzhou: '广州',
    shenzhen: '深圳',
    hangzhou: '杭州',
    chengdu: '成都',
    xian: '西安',
    sanya: '三亚',
    tokyo: '东京',
    osaka: '大阪',
    seoul: '首尔',
    bangkok: '曼谷',
    singapore: '新加坡',
    paris: '巴黎',
    london: '伦敦',
    newyork: '纽约',
    sydney: '悉尼',
    custom: '自定义目的地'
  },
  
  // 提示和建议
  tips: {
    general: '一般建议',
    saveMoney: '节省预算建议',
    localCurrency: '当地货币提示',
    emergencyFund: '建议预留总预算的10-15%作为紧急备用金',
    transport: '提前预订机票通常可以节省费用',
    accommodation: '考虑选择带厨房的住宿可以减少餐饮开支',
    food: '尝试当地平价美食比国际连锁餐厅更经济',
    planning: '制定详细的每日行程有助于控制预算',
    extraCosts: '别忘了考虑小费、网络和交通卡等小额费用'
  },
  
  // 提示信息
  messages: {
    success: '预算已成功计算',
    error: '请填写所有必填项',
    dateError: '结束日期必须晚于开始日期',
    saved: '预算方案已保存',
    deleted: '预算方案已删除',
    highBudget: '您的预算看起来高于该目的地的平均水平',
    lowBudget: '您的预算可能偏低，请确保涵盖了所有必要开支'
  },
  
  // 页脚介绍信息
  about: {
    title: '关于旅行预算规划器',
    description: '旅行预算规划器是一个帮助您管理旅行花费的工具，让您的旅行既愉快又经济。通过详细规划各项开支，避免旅途中的资金压力，充分享受旅行体验。',
    
    featuresTitle: '主要功能',
    feature1: '根据旅行目的地、时长和人数制定合理预算',
    feature2: '细分交通、住宿、餐饮、活动等各类旅行支出',
    feature3: '提供预算分析和视觉化展示',
    feature4: '支持多种货币显示和转换',
    feature5: '提供节省旅行开支的实用建议',
    feature6: '可导出和保存预算方案',
    
    benefitsTitle: '使用优势',
    benefit1: '避免旅行中的预算超支',
    benefit2: '合理分配资金到不同旅行环节',
    benefit3: '减少旅行财务压力',
    benefit4: '提高旅行规划效率',
    benefit5: '适应不同旅行风格和预算需求',
    
    tipsTitle: '预算规划小贴士',
    tip1: '根据旅行目的地的消费水平调整预算',
    tip2: '预留10-15%的资金作为突发状况备用',
    tip3: '淡季出行可以显著节省住宿和交通费用',
    tip4: '使用信用卡时注意了解国外刷卡手续费',
    tip5: '考虑购买旅行保险以应对可能的紧急情况'
  }
}; 