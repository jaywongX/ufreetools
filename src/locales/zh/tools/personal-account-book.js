export default {
  name: '个人记账本',
  description: '使用这个简单易用的个人财务工具跟踪您的收入和支出',
  tags: ['财务', '会计', '预算', '金钱', '支出追踪', '个人财务'],
  category: 'practical-tools',
  
  // UI元素
  ui: {
    addTransaction: '添加交易',
    editTransaction: '编辑交易',
    deleteTransaction: '删除交易',
    income: '收入',
    expense: '支出',
    transfer: '转账',
    date: '日期',
    amount: '金额',
    category: '分类',
    account: '账户',
    description: '描述',
    tags: '标签',
    save: '保存',
    cancel: '取消',
    confirm: '确认',
    filter: '筛选',
    search: '搜索',
    clear: '清除',
    overview: '概览',
    transactions: '交易记录',
    statistics: '统计分析',
    budget: '预算',
    settings: '设置',
    exportData: '导出数据',
    importData: '导入数据',
    backup: '备份',
    restore: '恢复',
    currency: '货币',
    language: '语言',
    theme: '主题',
    darkMode: '深色模式',
    lightMode: '浅色模式',
    resetData: '重置数据',
    resetConfirmation: '您确定要重置所有数据吗？此操作无法撤销。',
    from: '从',
    to: '至',
    filterByDate: '按日期筛选',
    noTransactions: '没有交易记录可显示',
    allCategories: '所有分类',
    addCategory: '添加分类',
    editCategory: '编辑分类',
    deleteCategory: '删除分类',
    categoryName: '分类名称',
    categoryIcon: '分类图标',
    categoryColor: '分类颜色',
    addAccount: '添加账户',
    editAccount: '编辑账户',
    deleteAccount: '删除账户',
    accountName: '账户名称',
    accountType: '账户类型',
    accountBalance: '账户余额',
    totalIncome: '总收入',
    totalExpense: '总支出',
    balance: '余额',
    netWorth: '净资产',
    daily: '每日',
    weekly: '每周',
    monthly: '每月',
    yearly: '每年',
    today: '今天',
    thisWeek: '本周',
    thisMonth: '本月',
    thisYear: '今年',
    lastWeek: '上周',
    lastMonth: '上月',
    lastYear: '去年',
    custom: '自定义',
    setBudget: '设置预算',
    budgetLimit: '预算限额',
    budgetPeriod: '预算周期',
    budgetCategory: '预算分类',
    budgetAlert: '预算提醒',
    budgetUsage: '预算使用情况',
    remaining: '剩余',
    spent: '已花费',
    over: '超出',
    exportFormat: '导出格式',
    importFormat: '导入格式',
    csv: 'CSV',
    json: 'JSON',
    selectFile: '选择文件',
    successfullyImported: '数据导入成功',
    errorImporting: '导入数据时出错',
    successfullyExported: '数据导出成功',
    errorExporting: '导出数据时出错',
    confirmDelete: '您确定要删除此项目吗？',
    recurringTransaction: '定期交易',
    frequency: '频率',
    startDate: '开始日期',
    endDate: '结束日期',
    never: '从不',
    daily: '每天',
    weekly: '每周',
    monthly: '每月',
    yearly: '每年',
    note: '备注',
    attachment: '附件',
    dataSecurity: '数据安全',
    type: '类型',
    clearTransactions: '清空交易记录',
    confirmClearTransactions: '您确定要清空所有交易记录吗？此操作无法撤销。',
    transactionsCleared: '所有交易记录已清空',
    enterValidAmount: '请输入有效金额',
    selectDate: '请选择日期',
    selectCategory: '请选择分类'
  },
  
  // 预定义分类
  categories: {
    income: {
      salary: '工资',
      freelance: '自由职业',
      investments: '投资收益',
      gifts: '礼金',
      refunds: '退款',
      other: '其他收入'
    },
    expense: {
      food: '餐饮',
      groceries: '日用品',
      rent: '房租/房贷',
      utilities: '水电煤气',
      transportation: '交通',
      entertainment: '娱乐',
      shopping: '购物',
      health: '医疗健康',
      education: '教育',
      personal: '个人护理',
      travel: '旅行',
      insurance: '保险',
      taxes: '税费',
      debt: '债务还款',
      subscription: '订阅服务',
      charity: '捐赠与慈善',
      business: '商务支出',
      other: '其他支出'
    },
    transfer: {
      bank_transfer: '银行转账',
      savings: '储蓄',
      investment: '投资',
      debt_payment: '债务还款',
      other: '其他转账'
    }
  },
  
  // 账户类型
  accountTypes: {
    cash: '现金',
    checking: '活期账户',
    savings: '储蓄账户',
    creditCard: '信用卡',
    investment: '投资账户',
    loan: '贷款',
    asset: '资产',
    other: '其他'
  },
  
  // 图表标签
  charts: {
    incomeVsExpense: '收入与支出对比',
    expenseByCategory: '支出分类明细',
    monthlyTrend: '月度趋势',
    savingsRate: '储蓄率',
    netWorthTrend: '净资产趋势',
    budgetPerformance: '预算执行情况',
    topExpenseCategories: '主要支出分类',
    cashFlow: '现金流'
  },
  
  // 工具文档部分
  documentation: {
    title: '关于个人记账本',
    introduction: '个人记账本是为个人财务管理设计的工具。所有数据都存储在您的浏览器中，确保您的财务信息完全私密。',
    whyUse: {
      title: '为什么使用个人记账本？',
      points1: '完全私密 - 所有数据都存储在本地，不会上传到任何服务器',
      points2: '简单界面 - 简洁直观的设计，便于记录日常交易',
      points3: '数据可视化 - 通过可视化图表了解您的消费习惯',
      points4: '自定义分类 - 根据个人需求创建自定义收支分类',
      points5: '数据导出 - 支持导出数据到CSV格式，方便备份或进一步分析'
    },
    tips: {
      title: '使用技巧',
      points1: '定期记录交易以保持账本更新',
      points2: '使用标签功能对支出进行更细致的分类',
      points3: '设置月度预算来控制支出',
      points4: '定期导出数据作为备份',
      points5: '使用统计功能识别消费模式和改进领域'
    },
    dataStorage: {
      title: '数据存储',
      content: '您的所有财务数据完全存储在浏览器的本地存储中。这意味着您的数据不会离开您的设备，任何人都无法访问。但是，清除浏览器数据也会清除您的账本数据，因此请记得定期导出。'
    }
  },
  
  // 添加文章部分
  article: {
    title: "个人记账本：掌控您的财务健康",
    features: {
      title: "了解个人财务管理",
      description: "个人记账本是一款全面的资金管理工具，旨在帮助您掌控自己的财务生活。这款强大的支出追踪器提供了一个安全、私密的平台，用于记录收入和支出、监控您的现金流，并分析您的财务模式，同时不会与任何外部服务器共享您的数据。<br><br>我们的个人财务管理器提供多种功能，包括交易分类、预算规划、统计可视化和数据导出。直观的界面使日常财务跟踪变得简单，而先进的报告工具让您更深入地了解自己的消费习惯和储蓄模式。无论您是想消除债务、为重大购买储蓄，还是只想更好地了解钱花在哪里，这个预算规划工具都能提供您进行有效财务管理所需的完整工具集。",
      useCases: {
        title: "个人预算的实际应用场景",
        items: [
          "学生跟踪他们的学期支出和津贴，避免在非必需品上过度消费，同时管理有限的财务资源",
          "自由职业者监控基于项目的收入与常规支出，帮助在合同期间保持稳定的现金流",
          "年轻专业人士为重大目标如房屋首付创建储蓄计划，分析消费模式以找出减少支出的机会",
          "家庭管理家庭预算，跟踪共同支出，并规划未来费用如教育基金或家庭装修",
          "小企业主分离个人和业务支出，同时保持对其整体财务状况的全面了解",
          "退休人员监控固定收入来源与月度支出，确保他们的退休储蓄在非工作年限中持续有效"
        ]
      }
    },
    faq: {
      title: "关于个人财务管理的常见问题",
      items: [
        {
          question: "使用这个个人记账本时，我的财务数据安全吗？",
          answer: "绝对安全。您的财务数据安全是我们的首要任务。个人记账本将所有信息专门存储在您浏览器的本地存储中，这意味着您的敏感财务数据永远不会离开您的设备，也不会传输到任何外部服务器。无需创建账户或登录，进一步增强了隐私保护。但是，这种本地存储方法意味着您应该定期导出数据作为备份，因为清除浏览器缓存将删除您的财务记录。这种完全隐私与本地责任的平衡让您完全控制个人财务信息。"
        },
        {
          question: "预算跟踪功能如何帮助我节省资金？",
          answer: "我们个人记账本中的预算跟踪功能是增加储蓄的强大工具，它通过创建财务意识和责任感来实现这一目标。您可以为不同的支出类别（如杂货、娱乐、水电费等）设置特定的预算限额，并实时监控您的支出与这些目标的对比情况。当您接近或超过预算阈值时，系统会提供视觉指示，帮助防止过度消费。月度和基于类别的报告揭示了您支出的模式，突出显示可能的减少区域。这种综合预算监控创建了一个反馈循环，自然鼓励更有意识的消费决策和更好的财务习惯。"
        },
        {
          question: "我可以在这个支出追踪器中跟踪多个账户或货币吗？",
          answer: "是的，我们的支出追踪器完全支持管理多个财务账户和货币。您可以创建和监控各种账户类型，包括现金、活期账户、储蓄账户、信用卡和投资账户，全部在单一仪表板内。对于处理多种货币的用户，该工具允许您定义不同的货币类型并处理转换计算。转账功能使您能够记录账户之间的资金流动，同时在整个财务组合中保持准确的余额。这种多账户功能提供了完整财务状况的全面视图，而不是在不同平台上的片段化视图。"
        },
        {
          question: "财务报告和可视化有多详细？",
          answer: "个人记账本中的财务报告和可视化提供了非凡的深度，同时保持用户友好性。分析仪表板提供多种可视化类型，包括收入与支出比较、基于类别的支出细分、月度趋势分析和储蓄率跟踪。报告可以通过自定义日期范围、类别、标签或账户进行筛选，以检查您财务行为的特定方面。交互式图表允许您直接从可视化中深入到交易详情。这些全面的分析将原始财务数据转化为可行的见解，帮助您识别消费模式、跟踪预算表现，并对个人财务管理做出明智决策。"
        },
        {
          question: "这个个人财务管理器与银行应用有什么不同？",
          answer: "与主要关注单一机构账户余额和交易的银行应用不同，我们的个人财务管理器提供了跨所有账户的全面财务监督，并具有完全的隐私保护。银行应用显示已经发生的事情，而我们的工具强调规划、预算和分析，具有可定制的类别，匹配您特定的财务状况。银行应用通常缺乏详细的支出分析或仅提供基本分类，而我们的个人财务管理器提供有关您财务模式的深入报告和可视化。最重要的是，我们的解决方案将数据本地存储在您的设备上，让您完全控制和保护您的财务信息隐私，不像银行应用将您的数据存储在他们的服务器上。"
        }
      ]
    },
    guide: {
      title: "管理您财务的步骤指南",
      steps: [
        "首先访问概览仪表板，获取您的财务状况的完整图景，包括所有账户的总收入、支出和当前余额",
        "通过点击'添加账户'按钮设置您的账户，并输入账户详细信息，如名称、类型（活期账户、储蓄账户、信用卡等）和当前余额",
        "点击'添加交易'记录您的财务交易，选择类型（收入、支出或转账），并填写日期、金额、类别和账户等详细信息",
        "通过导航到预算部分并为不同的支出类别创建月度限额来建立预算限制，帮助控制您的支出",
        "使用统计部分通过可视化图表分析您的支出模式，让您识别可能过度消费的领域",
        "定期审查您的交易历史，确保所有条目准确且正确分类，根据需要进行更正以维护数据完整性",
        "使用'导出数据'功能定期导出您的财务数据，创建CSV或JSON格式的备份，保护您的记录免受因浏览器数据清除而意外丢失"
      ]
    },
    conclusion: "个人记账本将通常令人望而生畏的财务管理任务转变为一个简单甚至引人入胜的过程。通过提供一个安全的环境来跟踪支出、监控收入和可视化消费模式，这个工具让您对财务习惯有前所未有的清晰了解。随着您继续记录交易并审查生成的见解，您将对自己与金钱的关系有更深入的理解，并找出优化财务的具体机会。无论您的目标是减少债务、积累储蓄，还是仅仅获得更好的财务意识，持续使用这个个人财务管理器将引导您走向改善的财务健康和对经济未来更大的心灵平静。"
  }
} 