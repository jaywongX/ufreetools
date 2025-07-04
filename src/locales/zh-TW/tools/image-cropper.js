export default {
  name: '圖片裁剪器',
  description: '精確裁剪、調整大小和旋轉圖片',
  upload: {
    title: '上傳圖片',
    dropzone: '將圖片拖放到此處或點擊瀏覽',
    maxSize: '最大檔案大小：10MB',
    supportedFormats: '支援的格式：JPG、PNG、WEBP、GIF',
    select: '請選擇一張圖片開始裁剪和編輯'
  },
  editor: {
    title: '圖片編輯器',
    zoom: '縮放',
    rotate: '旋轉',
    flipHorizontal: '水平翻轉',
    flipVertical: '垂直翻轉',
    reset: '重置圖片',
    undo: '撤銷',
    redo: '重做',
    dragMode: '拖動模式',
    scaleMode: '縮放模式'
  },
  crop: {
    title: '裁剪設定',
    aspectRatio: '寬高比',
    freeform: '自由形式',
    square: '正方形 (1:1)',
    portrait: '肖像 (3:4)',
    landscape: '風景 (4:3)',
    widescreen: '寬螢幕 (16:9)',
    panorama: '全景 (2:1)',
    custom: '自訂',
    width: '寬度',
    height: '高度',
    unit: '單位',
    pixels: '像素',
    percent: '百分比',
    lockAspectRatio: '鎖定寬高比'
  },
  presets: {
    title: '尺寸預設',
    original: '原始尺寸',
    social: '社交媒體',
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    print: '列印尺寸',
    fourBySix: '4×6英寸',
    fiveBySeven: '5×7英寸',
    eightByTen: '8×10英寸'
  },
  output: {
    title: '輸出',
    preview: '預覽',
    dimensions: '輸出尺寸',
    quality: '品質',
    format: '格式',
    fileName: '檔案名稱',
    download: '下載',
    saveAs: '另存為',
    copy: '複製到剪貼簿'
  },
  actions: {
    crop: '裁剪圖片',
    apply: '應用',
    cancel: '取消',
    save: '儲存圖片',
    download: '下載',
    newImage: '新圖片'
  },
  messages: {
    cropSuccess: '圖片裁剪成功',
    downloadReady: '您裁剪的圖片已準備好下載',
    processing: '處理圖片中...',
    copied: '圖片已複製到剪貼簿',
    invalidFile: '無效檔案。請上傳有效的圖片。',
    fileTooLarge: '檔案太大。最大大小為10MB。'
  },
  article: {
    title: "圖片裁剪器：精確圖片編輯的終極工具",
    introduction: {
      title: "什麼是圖片裁剪器？",
      p1: "<strong>圖片裁剪器</strong>是一種專門設計的工具，幫助使用者精確地選擇和提取圖片的部份內容。與基本的照片編輯器不同，我們的<strong>線上圖片裁剪和調整大小工具</strong>提供進階功能，非常適合休閒使用者和尋求完善視覺內容的專業人士。",
      p2: "無論您需要<strong>圓形圖片裁剪器</strong>用於個人資料圖片，<strong>方形圖片裁剪器</strong>用於社交媒體貼文，還是<strong>自由手繪圖片裁剪器</strong>用於自訂選擇，我們的工具都提供多種選項以滿足您的確切要求。我們<strong>圖片裁剪器</strong>背後的技術確保了像素級的精確度，允許<strong>按像素裁剪圖片</strong>，精確度極高。",
      p3: "現代Web開發框架如<strong>React</strong>、<strong>Angular</strong>和<strong>Flutter</strong>通過諸如<strong>React圖片裁剪器</strong>、<strong>NGX圖片裁剪器</strong>和<strong>Flutter圖片裁剪器</strong>元件等庫整合了<strong>圖片裁剪</strong>功能。我們的線上工具提供相同的專業品質，而無需任何程式設計知識。"
    },
    applications: {
      title: "應用場景",
      item1: "<strong>社交媒體優化</strong>：使用我們的<strong>圖片尺寸裁剪器</strong>預設尺寸，為不同平台建立完美大小的圖片。",
      item2: "<strong>頭像建立</strong>：使用我們的<strong>圓形圖片裁剪器</strong>或<strong>圓形圖片剪裁工具</strong>建立完美的圓形頭像。",
      item3: "<strong>電子商務產品攝影</strong>：使用我們的<strong>圖片形狀裁剪器</strong>清理產品圖片，以實現一致的展示效果。",
      item4: "<strong>文件處理</strong>：使用我們的<strong>PDF圖片線上裁剪器</strong>功能從PDF中提取圖片。",
      item5: "<strong>批次處理</strong>：使用我們的<strong>批次圖片裁剪器</strong>功能一次處理多張圖片，提高工作流程效率。"
    },
    tutorial: {
      title: "如何使用我們的圖片裁剪器",
      step1: {
        title: "第1步：上傳您的圖片",
        content: "點擊\"新圖片\"按鈕選擇並上傳您想要裁剪的照片。我們的工具支援常見的圖片格式，包括JPG、PNG和WEBP。對於進階使用者，我們的<strong>圖片自動裁剪器</strong>功能可以檢測並建議最佳裁剪區域。"
      },
      step2: {
        title: "第2步：選擇裁剪類型和比例",
        content: "從下拉選單中選擇您喜歡的裁剪類型。選項包括自由形式（用於<strong>自由手繪圖片裁剪器</strong>功能）、正方形（1:1）、橫向（4:3）、縱向（3:4）和寬螢幕（16:9）。為了尺寸精確，我們的工具在需要時可以作為<strong>厘米圖片裁剪器</strong>使用。"
      },
      step3: {
        title: "第3步：調整和微調",
        content: "使用裁剪手柄調整您的選擇區域。利用旋轉和翻轉功能完美對齊您的圖片。為了精確控制，我們的<strong>按像素圖片裁剪器</strong>功能允許您調整到單個像素。"
      },
      step4: {
        title: "第4步：裁剪和下載",
        content: "一旦您對選擇滿意，點擊\"裁剪圖片\"按鈕生成您的裁剪圖片。預覽結果並點擊\"下載\"儲存到您的裝置。我們的<strong>圖片裁剪和調整大小工具</strong>在整個過程中保持最高可能的品質。"
      }
    },
    faq: {
      title: "常見問題",
      q1: "裁剪器支援哪些圖片格式？",
      a1: "我們的圖片裁剪器支援所有常見的圖片格式，包括JPG、PNG、WEBP和GIF。只需使用\"新圖片\"按鈕上傳您的圖片即可開始。",
      
      q2: "如何為社交媒體建立完美的正方形裁剪？",
      a2: "從寬高比下拉選單中選擇\"正方形(1:1)\"選項。這將限制您的裁剪選擇為完美的正方形，非常適合個人資料圖片和許多需要統一尺寸的社交媒體貼文。",
      
      q3: "我可以在裁剪前旋轉或翻轉圖片嗎？",
      a3: "是的，我們的工具提供旋轉和翻轉功能。使用旋轉按鈕將圖片向任一方向旋轉90度，或使用水平和垂直翻轉按鈕在進行裁剪選擇前鏡像您的圖片。",
      
      q4: "如何儲存我裁剪的圖片？",
      a4: "在進行裁剪選擇後，點擊\"裁剪圖片\"按鈕生成您的裁剪圖片。結果將顯示在右側的預覽面板中。然後點擊\"下載\"按鈕將裁剪後的圖片儲存到您的裝置。",
      
      q5: "不同寬高比之間有什麼區別？",
      a5: "不同的寬高比服務於不同的目的：'正方形(1:1)'非常適合個人資料圖片，'橫向(4:3)'適合標準照片，'縱向(3:4)'適合垂直顯示，'寬螢幕(16:9)'匹配影片尺寸，而'自由'允許您不受限制地裁剪。"
    },
    relatedTools: {
      title: "相關工具",
      description: "使用這些補充工具增強您的圖片編輯工作流程：",
      tool1: {
        name: "圖片批次調整器",
        description: "一次性調整、轉換和優化多張圖片。",
        url: "https://www.ufreetools.com/tool/image-batch-resizer"
      },
      tool2: {
        name: "圖片壓縮器",
        description: "在保持品質的同時壓縮和優化圖片。",
        url: "https://www.ufreetools.com/tool/image-compressor"
      },
      tool3: {
        name: "圖片浮水印",
        description: "為您的照片添加文字或圖片浮水印，具有可自訂設定。",
        url: "https://www.ufreetools.com/tool/image-watermark"
      }
    },
    references: {
      title: "參考資源",
      ref1: {
        name: "Cropper.js",
        description: "一款非常強大且簡單的圖片裁剪工具，支援靈活配置，適用於手機端和現代瀏覽器。",
        url: "https://github.com/fengyuanchen/cropperjs"
      },
      ref2: {
        name: "ImageCut",
        description: "一款簡易實用的圖片剪裁工具，支援智慧剪裁、設定圖片大小、像素範圍以及批次處理功能。",
        url: "https://soft.3dmgame.com/down/206119.html"
      },
      ref3: {
        name: "Vue-Cropper",
        description: "基於 Vue.js 的圖片裁剪元件，使用了 Cropper.js 庫，支援裁剪預覽、縮放控制、圖片旋轉等功能，並且可以輕鬆整合到 Vue.js 專案中。",
        url: "https://hu-snail.github.io/vue3-resource/platform/mobile/img.html"
      }
    }
  }
}