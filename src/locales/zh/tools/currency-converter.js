export default {
  name: '汇率换算',
  description: '快速准确地在不同货币之间进行转换和汇率查询',
  
  // 主界面文本
  amount: '金额',
  from: '从',
  to: '至',
  convert: '转换',
  result: '转换结果',
  swap: '交换货币',
  rate: '当前汇率',
  lastUpdated: '最后更新',
  addCurrency: '添加货币',
  
  // 历史记录
  history: '历史记录',
  clearHistory: '清除记录',
  noHistory: '暂无历史记录',
  
  // 货币
  currencies: {
    USD: '美元',
    EUR: '欧元',
    JPY: '日元',
    GBP: '英镑',
    AUD: '澳元',
    CAD: '加元',
    CHF: '瑞士法郎',
    CNY: '人民币',
    HKD: '港币',
    NZD: '新西兰元',
    SEK: '瑞典克朗',
    KRW: '韩元',
    SGD: '新加坡元',
    NOK: '挪威克朗',
    MXN: '墨西哥比索',
    INR: '印度卢比',
    RUB: '俄罗斯卢布',
    ZAR: '南非兰特',
    TRY: '土耳其里拉',
    BRL: '巴西雷亚尔',
    TWD: '新台币',
    DKK: '丹麦克朗',
    PLN: '波兰兹罗提',
    THB: '泰铢',
    IDR: '印尼盾',
    MYR: '马来西亚林吉特',
    PHP: '菲律宾比索'
  },
  
  // 错误消息
  errors: {
    invalidAmount: '请输入有效的金额',
    apiError: '获取汇率数据时出错',
    samecurrencies: '请选择不同的货币进行转换'
  },
  
  // 提示和信息
  tips: {
    offline: '离线模式：显示的是最近缓存的汇率数据',
    refreshing: '正在更新汇率数据...'
  },
  
  // 查看历史汇率
  historicalRates: '历史汇率',
  dateRange: '日期范围',
  from7days: '过去7天',
  from30days: '过去30天',
  from90days: '过去90天',
  customRange: '自定义范围',
  startDate: '开始日期',
  endDate: '结束日期',
  viewChart: '查看图表',
  
  // 设置
  settings: '设置',
  decimalPlaces: '小数位数',
  autoUpdate: '自动更新汇率',
  defaultCurrency: '默认货币',
  
  // 工具介绍
  aboutTitle: '关于汇率换算工具',
  aboutDescription: '汇率换算工具是一个简单高效的货币转换应用，帮助您快速准确地在不同货币之间进行转换。无论是旅行计划、国际贸易，还是投资研究，这个工具都能满足您的需求。',
  
  featuresTitle: '主要功能',
  feature1: '支持30多种主要货币的汇率转换',
  feature2: '实时获取最新的市场汇率数据',
  feature3: '快速直观的货币转换计算',
  feature4: '历史汇率数据查询和图表展示',
  feature5: '保存转换历史记录，方便重复使用',
  feature6: '可自定义显示设置和默认货币',
  
  howToUseTitle: '如何使用',
  howToUseStep1: '1. 输入您想要转换的金额',
  howToUseStep2: '2. 选择原始货币（从哪种货币转换）',
  howToUseStep3: '3. 选择目标货币（转换成哪种货币）',
  howToUseStep4: '4. 点击"转换"按钮获取结果',
  howToUseStep5: '5. 可以使用"交换货币"按钮快速切换货币方向',
  
  tipsTitle: '使用小贴士',
  tip1: '汇率数据每小时更新一次，确保您获得较为准确的换算结果',
  tip2: '添加常用货币到您的收藏列表，以便快速访问',
  tip3: '使用历史图表功能分析货币汇率趋势',
  tip4: '转换结果会自动保存在历史记录中，方便您稍后查看',
  tip5: '在离线状态下，工具会使用最近缓存的汇率数据进行计算'
}; 