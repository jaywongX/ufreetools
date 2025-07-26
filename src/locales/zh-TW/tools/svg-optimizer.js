export default {
  name: 'SVG優化器',
  description: '優化和清理SVG文件以提高性能並減小文件大小',

  upload: {
    title: '上傳SVG',
    dropzone: '拖放SVG文件到此處或點擊上傳',
    or: '或者',
    pasteCode: '粘貼SVG代碼',
    maxSize: '最大文件大小：5MB',
    onlySvg: '僅支持SVG格式文件',
    selected: '已選擇',
    changeFile: '更換文件'
  },

  input: {
    title: '輸入SVG',
    pasteHere: '在此粘貼SVG代碼...',
    loadExample: '載入示例',
    clear: '清除',
    validate: '驗證SVG'
  },

  output: {
    title: '優化結果',
    copyToClipboard: '複製到剪貼板',
    download: '下載SVG',
    beforeSize: '原始大小',
    afterSize: '優化後大小',
    reduction: '減少量',
    reductionBy: '減少了',
    svgCode: 'SVG代碼'
  },

  options: {
    title: '優化選項',
    preset: '預設',
    presets: {
      default: '默認',
      light: '輕度',
      aggressive: '激進',
      custom: '自定義'
    },
    removeComments: '移除註釋',
    removeCommentsDesc: '移除註釋和cdata部分',
    removeHiddenElements: '移除隱藏元素',
    removeEmptyContainers: '移除空容器',
    removeUnusedDefs: '移除未使用的定義',
    removeViewBox: '移除viewBox',
    keepViewBox: '保留viewBox',
    keepViewBoxDesc: '保留viewBox屬性以確保SVG可縮放性',
    cleanupIDs: '清理ID',
    cleanupIDsDesc: '移除或縮短未引用的ID',
    convertColors: '將顏色轉換為十六進制',
    removeMetadata: '移除元數據',
    removeMetadataDesc: '移除&lt;metadata&gt;元素',
    removeDoctype: '移除文檔類型',
    removeXMLProcInst: '移除XML指令',
    removeEditorsNS: '移除編輯器命名空間',
    collapseGroups: '合併組',
    collapseGroupsDesc: '合併沒有特殊屬性的組元素',
    convertPathData: '優化路徑數據',
    convertPathDataDesc: '轉換路徑數據為相對坐標，減少小數點位數等',
    convertTransforms: '優化變換',
    convertShapeToPath: '形狀轉路徑',
    convertShapeToPathDesc: '將基本形狀轉換為&lt;path&gt;元素',
    removeUselessStrokeAndFill: '移除無用的描邊和填充',
    moveElemsAttrsToGroup: '將元素屬性移至組',
    mergePaths: '合併路徑',
    minifyStyles: '壓縮樣式',
    inlineStyles: '內聯樣式',
    inlineStylesDesc: '將&lt;style&gt;元素中的樣式轉為內聯',
    cleanupNumericValues: '四捨五入數值',
    precision: '數值精度',
    decimalPlaces: '位小數',
    lowPrecision: '低精度 (更小體積)',
    highPrecision: '高精度 (更好質量)',
    removeDimensions: '移除寬高屬性',
    removeDimensionsDesc: '移除寬度/高度屬性，使用viewBox控制大小',
    sortAttrs: '屬性排序',
    sortAttrsDesc: '按字母順序排列元素屬性'
  },

  view: {
    title: '預覽',
    original: '原始',
    optimized: '優化後',
    showBorder: '顯示邊框',
    backgroundColor: '背景顏色',
    grid: '顯示網格',
    zoom: '縮放',
    toggleAnimation: '切換動畫'
  },

  actions: {
    optimize: '開始優化',
    optimizing: '優化中...',
    resetOptions: '重置選項',
    download: '下載優化後的SVG',
    copy: '複製代碼',
    copyCode: '複製代碼',
    viewCode: '查看代碼',
    viewPreview: '查看預覽'
  },

  messages: {
    optimizationSuccess: 'SVG優化成功',
    optimizationFailed: 'SVG優化失敗：{error}',
    invalidSvg: '無效的SVG文件或代碼',
    copied: '已複製到剪貼板',
    copyFailed: '複製失敗，請手動複製',
    downloaded: '優化後的SVG已下載',
    emptyInput: '請提供要優化的SVG代碼或文件',
    onlySvgAllowed: '請上傳SVG格式文件!',
    failedToLoadLibrary: '無法加載SVGO庫'
  }
};