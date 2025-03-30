export default {
  name: '名字生成器',
  description: '随机生成各种类型的名字，包括不同文化背景和风格的姓名',
  
  // 主要功能
  generateNames: '生成名字',
  regenerate: '重新生成',
  copy: '复制',
  copyAll: '复制全部',
  reset: '重置',
  copied: '已复制',
  
  // 设置和选项
  settings: {
    title: '设置',
    quantity: '数量',
    type: '类型',
    gender: '性别',
    culture: '文化背景',
    style: '风格',
    startsWith: '首字母',
    endsWith: '尾字母',
    minLength: '最小长度',
    maxLength: '最大长度',
    includeMiddleName: '包含中间名',
    includeSurname: '包含姓氏',
    advancedOptions: '高级选项'
  },
  
  // 名字类型
  types: {
    fullName: '完整姓名',
    firstName: '名字',
    lastName: '姓氏',
    nickname: '昵称',
    fantasy: '奇幻名字',
    scifi: '科幻名字',
    ancient: '古代名字',
    modern: '现代名字',
    custom: '自定义'
  },
  
  // 性别选项
  genders: {
    any: '不限',
    male: '男性',
    female: '女性',
    neutral: '中性'
  },
  
  // 文化背景
  cultures: {
    any: '随机',
    chinese: '中国',
    japanese: '日本',
    korean: '韩国',
    english: '英语国家',
    spanish: '西班牙语国家',
    french: '法语国家',
    german: '德语国家',
    nordic: '北欧',
    arabic: '阿拉伯',
    indian: '印度',
    russian: '俄罗斯',
    italian: '意大利',
    greek: '希腊',
    fantasy: '奇幻',
    scifi: '科幻'
  },
  
  // 风格选项
  styles: {
    classic: '经典',
    modern: '现代',
    unique: '独特',
    popular: '流行',
    traditional: '传统',
    literary: '文学风格',
    historical: '历史人物风格'
  },
  
  // 结果区域
  results: {
    title: '生成结果',
    empty: '设置参数并点击"生成名字"按钮',
    count: '已生成 {count} 个名字'
  },
  
  // 工具介绍信息
  aboutTitle: '关于名字生成器',
  aboutDescription: '名字生成器是一个实用的工具，能够根据您的需求和偏好随机生成各种类型的名字。无论是为小说角色、游戏人物、创意项目，还是寻找灵感为新生儿命名，这个工具都能提供多样化的选择。',
  
  featuresTitle: '主要功能',
  feature1: '支持生成来自不同文化背景的名字',
  feature2: '可根据性别、风格和其他参数定制生成结果',
  feature3: '提供完整姓名、单独名字或姓氏、昵称等多种类型',
  feature4: '可设置名字的长度范围和首尾字母',
  feature5: '支持生成独特的奇幻和科幻名字',
  feature6: '可一次性生成多个名字供您选择',
  
  useCasesTitle: '使用场景',
  useCase1: '作家为小说、剧本中的角色命名',
  useCase2: '游戏开发者为游戏角色创建名字',
  useCase3: '父母寻找婴儿名字的灵感',
  useCase4: '创作者为艺术作品、品牌或产品命名',
  useCase5: '角色扮演游戏玩家为角色取名',
  
  tipsTitle: '使用提示',
  tip1: '尝试不同的文化背景组合获取更加多样化的名字',
  tip2: '调整名字长度和首尾字母可以得到更符合需求的名字',
  tip3: '保存您喜欢的名字结果，以便日后参考',
  tip4: '使用"重新生成"按钮可以基于当前设置快速获取新的名字',
  tip5: '奇幻和科幻名字类型特别适合为虚构角色或未来世界的人物命名'
}; 