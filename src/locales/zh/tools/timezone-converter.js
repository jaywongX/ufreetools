export default {
  name: '时区转换器',
  description: '全球各地时区时间对比和转换工具，方便查看不同国家和地区的当前时间',
  
  // 主要功能标签
  currentTime: '当前时间',
  addTimezone: '添加时区',
  removeTimezone: '移除时区',
  convertTime: '转换时间',
  compareTimezones: '比较时区',
  
  // 设置和选项
  settings: {
    date: '日期',
    time: '时间',
    format: '格式',
    select24Hour: '24小时制',
    select12Hour: '12小时制',
    showSeconds: '显示秒数',
    hideSeconds: '隐藏秒数',
    showDate: '显示日期',
    hideDate: '隐藏日期',
  },
  
  // 时区相关
  timezone: {
    title: '时区',
    search: '搜索时区或城市...',
    yourLocal: '您的本地时区',
    popular: '常用时区',
    allTimezones: '所有时区',
    utc: 'UTC(协调世界时)',
    gmt: 'GMT(格林威治标准时间)',
    est: '美国东部时间',
    cst: '中国标准时间',
    jst: '日本标准时间',
    ist: '印度标准时间',
    cet: '中欧时间',
    bst: '英国夏令时间',
    aest: '澳大利亚东部标准时间',
    nzst: '新西兰标准时间',
    custom: '自定义时区'
  },
  
  // 区域和洲分组
  regions: {
    africa: '非洲',
    america: '美洲',
    asia: '亚洲',
    atlantic: '大西洋',
    australia: '澳大利亚',
    europe: '欧洲',
    indian: '印度洋',
    pacific: '太平洋'
  },
  
  // 转换相关
  conversion: {
    from: '从',
    to: '到',
    convert: '转换',
    result: '转换结果',
    timeIn: '时间在'
  },
  
  // 界面元素
  ui: {
    now: '现在',
    refresh: '刷新',
    copy: '复制',
    copied: '已复制',
    share: '分享',
    reset: '重置',
    empty: '无结果',
    offset: '偏移',
    add: '添加'
  },
  
  // 消息提示
  messages: {
    invalid: '无效的时间',
    copied: '已复制到剪贴板',
    removed: '已移除时区',
    added: '已添加时区',
    maxTimezones: '最多只能添加10个时区',
    selectTimezone: '请选择时区'
  },
  
  // 工具介绍
  aboutTitle: '关于时区转换器',
  aboutDescription: '时区转换器是一个便捷的工具，帮助您轻松查看和比较全球不同地区的时间，对于跨国沟通、旅行规划、国际会议安排等场景非常实用。',
  
  featuresTitle: '主要功能',
  feature1: '实时显示世界各主要城市和时区的当前时间',
  feature2: '快速比较多个时区之间的时间差异',
  feature3: '转换任意时区的时间到另一个时区',
  feature4: '支持24小时制和12小时制时间格式',
  feature5: '一目了然地查看工作时间重叠情况',
  feature6: '支持搜索城市或国家来找到对应时区',
  
  useCasesTitle: '使用场景',
  useCase1: '安排跨国商务会议或电话会议',
  useCase2: '规划国际旅行和航班时间',
  useCase3: '与海外朋友或家人保持联系',
  useCase4: '跟踪重要国际事件的当地时间',
  useCase5: '远程工作团队的协作时间安排',
  
  howToUseTitle: '如何使用',
  howToUse1: '添加多个时区来同时查看不同地区的当前时间',
  howToUse2: '使用转换功能将特定时间从一个时区转换到另一个时区',
  howToUse3: '调整日期和时间格式满足您的个性化需求',
  howToUse4: '复制结果或生成链接与他人分享'
}; 