export default {
  name: 'JavaScript混淆器',
  description: '透過各種混淆技術保護您的JavaScript代碼',
  input: {
    title: '輸入JavaScript',
    placeholder: '在此輸入或貼上您的JavaScript代碼',
    loadSample: '載入範例',
    clearInput: '清除輸入',
    uploadFile: '上傳JS文件'
  },
  output: {
    title: '混淆後的代碼',
    copied: '代碼已複製到剪貼簿',
    download: '下載混淆後的代碼',
    copyOutput: '複製代碼',
    clearOutput: '清除輸出'
  },
  options: {
    title: '混淆選項',
    compact: '壓縮代碼',
    selfDefending: '自我保護',
    controlFlowFlattening: '控制流扁平化',
    controlFlowFlatteningThreshold: '控制流扁平化閾值',
    deadCodeInjection: '死代碼注入',
    deadCodeInjectionThreshold: '死代碼注入閾值',
    debugProtection: '調試保護',
    debugProtectionInterval: '調試保護間隔',
    disableConsoleOutput: '禁用控制台輸出',
    domainLock: '域名鎖定',
    domainLockRedirectUrl: '域名鎖定重定向URL',
    identifierNamesGenerator: '標識符名稱生成器',
    identifiersPrefix: '標識符前綴',
    renameGlobals: '重命名全局變量',
    reservedNames: '保留名稱',
    reservedStrings: '保留字符串',
    rotateStringArray: '旋轉字符串數組',
    seed: '種子',
    shuffleStringArray: '打亂字符串數組',
    sourceMap: '源映射',
    sourceMapBaseUrl: '源映射基礎URL',
    sourceMapFileName: '源映射文件名',
    splitStrings: '分割字符串',
    splitStringsChunkLength: '分割字符串塊長度',
    stringArray: '字符串數組',
    stringArrayEncoding: '字符串數組編碼',
    stringArrayThreshold: '字符串數組閾值',
    target: '目標',
    transformObjectKeys: '轉換對象鍵',
    unicodeEscapeSequence: 'Unicode轉義序列'
  },
  presets: {
    title: '預設',
    low: '低度混淆',
    medium: '中度混淆',
    high: '高度混淆',
    custom: '自定義'
  },
  actions: {
    obfuscate: '混淆',
    reset: '重置選項',
    savePreset: '保存預設',
    loadPreset: '載入預設'
  },
  messages: {
    obfuscationSuccess: '代碼混淆成功',
    obfuscationFailed: '混淆失敗：{error}',
    emptyCode: '請輸入要混淆的JavaScript代碼',
    uploadSuccess: '文件上傳成功',
    presetSaved: '預設已保存',
    presetLoaded: '預設已載入'
  },
  help: {
    title: '選項幫助',
    stringArrayDesc: '將字符串字面量移動到特殊數組並用數組調用替換它們',
    controlFlowDesc: '啟用代碼控制流扁平化，使邏輯更難理解',
    deadCodeDesc: '注入隨機死代碼以混淆攻擊者',
    selfDefendingDesc: '使輸出能夠抵抗格式修改'
  }
}