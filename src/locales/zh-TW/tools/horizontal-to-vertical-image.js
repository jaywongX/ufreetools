export default {
  name: '橫圖轉豎圖',
  description: '將橫向圖片轉換為豎向格式，適用於短視頻、手機壁紙和社交媒體發布',
  tags: ['圖片', '轉換', '手機', '社交', '故事', '豎直', '肖像'],

  upload: {
    title: '橫圖轉豎圖轉換器',
    dropzone: '拖放圖片到這裡',
    maxSize: '最大文件大小：10MB',
    supportedFormats: '支持格式：JPG、PNG、WEBP、GIF'
  },

  settings: {
    title: '轉換設置',
    presets: '預設',
    conversionMode: '轉換模式',
    modes: {
      crop: '裁剪',
      fill: '顏色填充',
      blur: '模糊背景',
      stretch: '邊緣拉伸',
      dualColor: '雙色背景'
    },
    cropPosition: '裁剪位置',
    positions: {
      left: '左側',
      center: '中心',
      right: '右側'
    },
    fillColor: '填充顏色',
    blurRadius: '模糊半徑',
    stretchFactor: '拉伸係數',
    topColor: '頂部顏色',
    bottomColor: '底部顏色',
    sizeOption: '輸出尺寸',
    sizeModes: {
      auto: '自動',
      preset: '預設',
      custom: '自定義'
    },
    sizePresets: '尺寸預設',
    outputSize: '自定義尺寸',
    width: '寬度',
    height: '高度',
    dimensionsHint: '以像素為單位輸入尺寸',
    outputFormat: '輸出格式',
    quality: '圖像質量',
    advancedOptions: '高級選項',
    preserveRatio: '保持寬高比',
    sharpen: '銳化',
    addWatermark: '添加水印',
    watermarkPlaceholder: '輸入水印文字',
    watermarkColor: '水印顏色'
  },

  output: {
    preview: '輸出預覽',
    before: '轉換前',
    after: '轉換後',
    dimensions: '尺寸'
  },

  actions: {
    selectImage: '選擇圖片',
    convert: '轉換為豎圖',
    download: '下載圖片',
    showSideBySide: '顯示對比',
    hideSideBySide: '隱藏對比',
    hideComparison: '隱藏對比'
  },

  messages: {
    convertPrompt: '上傳橫向圖片並轉換為豎向格式',
    processing: '正在處理您的圖片...',
    imageOnly: '請選擇圖片文件'
  },

  examples: {
    title: '應用示例',
    social: '為Instagram、抖音等平台創建豎向故事',
    socialTip: '完美將橫向照片轉換為吸引人的豎屏內容',
    mobile: '將橫向圖片製作成手機壁紙',
    mobileTip: '為各種屏幕比例的智能手機優化圖像'
  },

  article: {
    title: "橫圖轉豎圖工具：優化社交媒體照片",
    intro: {
      title: "什麼是橫圖轉豎圖工具？",
      content: `<p><strong>橫圖轉豎圖</strong>工具是一個強大的在線工具，可將橫向圖像轉換為豎向格式，專為移動設備和社交媒體平台優化。與基本裁剪工具不同，此轉換器提供多種複雜的轉換方法，在將圖像調整為豎向格式的同時保留圖像的關鍵內容。</p>
      <p>通過五種不同的轉換模式（裁剪、顏色填充、模糊背景、邊緣拉伸和雙色背景），這款<strong>橫圖轉豎圖</strong>工具讓您完全控制如何將橫向圖像轉換為豎向格式。無論您是在為Instagram故事、抖音短視頻、Pinterest準備內容，還是創建完美的手機壁紙，這款轉換器都能處理技術方面的問題，讓您專注於創意。</p>`
    },
    useCases: {
      title: "何時使用橫圖轉豎圖工具",
      case1: "將橫向照片轉換為<strong>Instagram故事</strong>和<strong>Reels</strong>，避免尷尬的裁剪",
      case2: "將橫向照片轉換為<strong>抖音</strong>視頻和內容的<strong>豎直格式</strong>",
      case3: "將橫向圖像轉變為比例完美的<strong>Pinterest圖釘</strong>",
      case4: "將橫向桌面壁紙轉換為<strong>手機壁紙</strong>",
      case5: "為<strong>豎直數字顯示屏</strong>和信息亭準備宣傳圖像"
    },
    faq: {
      title: "常見問題解答",
      q1: "橫圖轉豎圖工具如何保持圖像質量？",
      a1: "我們的橫圖轉豎圖轉換器通過使用先進的渲染技術來保持圖像質量。您可以選擇輸出格式（JPEG、PNG、WEBP）並調整質量設置。為獲得最高質量，請選擇PNG格式或將JPEG/WEBP質量設置為100%。",
      
      q2: "哪種轉換模式最適合社交媒體故事？",
      a2: "對於社交媒體故事（Instagram、微信、抖音），'模糊背景'模式通常效果最佳。這種橫圖轉豎圖轉換保留了您的整張照片，同時用模糊版本的自身填充豎直空間，營造出專業、精緻的外觀，非常適合故事展示。",
      
      q3: "我可以為特定平台自定義輸出尺寸嗎？",
      a3: "是的！橫圖轉豎圖轉換器包含流行平台的預設（Instagram故事：1080×1920，抖音：1080×1920，Pinterest：1000×1500）或者您可以設置自定義尺寸。該工具自動處理特定需求的橫縱比轉換。",
      
      q4: "我的原始圖像文件會存儲在你們的服務器上嗎？",
      a4: "不會。橫圖轉豎圖轉換完全在您的瀏覽器中進行。您的原始圖像永遠不會上傳到我們的服務器，確保您的隱私和數據安全。",
      
      q5: "在將橫圖轉換為豎圖時，如何獲得最佳效果？",
      a5: "要獲得最佳的橫圖轉豎圖轉換效果：1）為您的內容類型選擇適當的轉換模式，2）使用預覽來檢查圖像的顯示效果，3）嘗試不同的模式，看哪種模式能保留圖像的重要元素，4）調整銳化等高級設置進行微調。"
    },
    tutorial: {
      title: "如何將橫向圖像轉換為豎向格式",
      step1: "通過拖放到上傳區域或點擊\"選擇圖片\"按鈕來上傳您的橫向圖像。",
      step2: "從五個可用選項（裁剪、顏色填充、模糊背景、邊緣拉伸或雙色背景）中選擇一種轉換模式。",
      step3: "根據您的選擇調整顯示的特定模式設置。例如，如果您選擇\"模糊背景\"，則調整模糊半徑滑塊。",
      step4: "選擇您首選的輸出尺寸：自動（自動計算）、預設（平台如Instagram或抖音的預定義尺寸）或自定義（您自己的寬度和高度）。",
      step5: "選擇您首選的輸出格式（JPEG、PNG或WEBP）並根據需要調整質量設置。",
      step6: "對於高級選項，點擊\"高級選項\"下拉菜單訪問保持寬高比、銳化和添加水印等設置。",
      step7: "點擊\"轉換為豎圖\"按鈕將您的橫向圖像轉換為豎向格式。",
      step8: "預覽結果並使用\"下載圖片\"按鈕下載您的豎向圖像。"
    },
    conclusion: {
      title: "將您的橫向照片轉變為完美的豎向內容",
      content: "橫圖轉豎圖工具使適應當今豎向優先平台的橫向照片變得簡單。通過多種轉換模式和自定義選項，您可以確保您的圖像在任何豎向格式中看起來最佳。嘗試不同的設置，為您的特定圖像和平台要求找到完美的轉換。立即開始將橫圖轉為豎圖，優化您的移動設備和社交媒體視覺內容！"
    }
  }
};