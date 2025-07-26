export default {
  name: 'JPG轉JFIF轉換器',
  description: '線上將JPG圖像轉換為JFIF格式，高品質，多種選項',
  tags: ['圖片', '轉換', 'jpg', 'jfif', 'jpeg', '格式', '工具'],

  meta: {
    title: 'JPG轉JFIF轉換器 - 免費線上圖像轉換工具',
    description: '免費線上將JPG轉換為JFIF。快速、安全的瀏覽器內轉換，支援批次處理、預覽對比和高級品質設定。無浮水印，無需註冊。'
  },

  upload: {
    title: 'JPG轉JFIF轉換器',
    subtitle: '以完美品質將JPG圖像轉換為JFIF格式',
    dropzone: '將您的JPG檔案拖放到這裡',
    dropzoneActive: '鬆開檔案開始轉換',
    maxSize: '最大檔案大小：50MB',
    supportedFormats: '支援的格式：JPG、JPEG'
  },

  settings: {
    title: '轉換設定',
    advanced: '高級設定',
    quality: {
      label: '圖像品質',
      description: '更高的品質會產生更大的檔案',
      auto: '自動優化（推薦）'
    },
    qualityLabels: {
      maximum: '最高品質',
      high: '高品質',
      good: '良好品質',
      medium: '中等品質',
      low: '低品質',
      veryLow: '非常低品質'
    },
    metadata: {
      label: '圖像元數據',
      preserve: '保留所有元數據（EXIF、GPS等）',
      strip: '移除所有元數據（檔案更小）',
      keepBasic: '僅保留基本元數據'
    },
    filenameOption: '輸出檔案名稱',
    filenameOriginal: '原始',
    filenameConverted: '添加前綴',
    filenameCustom: '自訂',
    filenameTemplatePlaceholder: '例如：converted-{name}',
    filenameTemplateHelp: '使用{name}插入原始檔案名稱',
    preserveMetadata: '保留圖像元數據'
  },

  preview: {
    title: '圖像預覽',
    before: 'JPG原圖',
    after: 'JFIF預覽',
    noPreview: '無可用預覽',
    togglePreview: '顯示/隱藏預覽',
    imageDetails: '圖像詳情'
  },

  fileTable: {
    fileName: '檔案名稱',
    type: '類型',
    size: '大小',
    status: '狀態',
    preview: '預覽',
    pending: '等待中',
    converting: '轉換中...',
    done: '已完成',
    error: '錯誤',
    progress: '進度'
  },

  results: {
    title: '轉換後的檔案',
    summary: '已轉換{count}個檔案，共節省{saved}空間',
    originalName: '原始名稱',
    convertedName: '轉換後名稱',
    originalSize: '原始大小',
    convertedSize: '新大小',
    compressionRate: '壓縮率',
    actions: '操作',
    noResults: '尚無轉換結果'
  },

  actions: {
    selectFile: '選擇檔案',
    addMore: '添加更多',
    clear: '清除檔案',
    convertAll: '轉換所有檔案',
    converting: '轉換中...',
    download: '下載',
    downloadAll: '下載全部',
    clearResults: '清除結果',
    viewDetails: '查看詳情',
    compare: '對比',
    retry: '重試失敗',
    cancelAll: '取消',
    optimizeAll: '自動優化'
  },

  messages: {
    noValidFiles: '請選擇有效的JPG或JPEG檔案。',
    conversionError: '轉換檔案時出錯。請重試。',
    conversionSuccess: '所有檔案轉換成功！',
    partialSuccess: '{total}個檔案中的{success}個成功轉換。',
    downloadStarted: '下載已開始...',
    processingFiles: '正在處理您的檔案...',
    dragActive: '拖放檔案到此處上傳',
    fileSizeExceeded: '檔案大小超過50MB限制',
    unsupportedFormat: '不支援的檔案格式'
  },

  history: {
    title: '最近轉換',
    empty: '無最近轉換',
    clear: '清除歷史',
    restore: '恢復檔案'
  },

  info: {
    title: '關於JPG到JFIF轉換',
    description: '我們的JPG轉JFIF轉換器允許您快速輕鬆地將JPG圖像檔案轉換為JFIF格式，所有處理都安全地在您的瀏覽器中完成。',
    
    whatIs: {
      title: '什麼是JFIF？',
      content: 'JFIF（JPEG檔案交換格式）是JPEG檔案的一種檔案格式標準。它提供額外資訊如解析度、寬高比和其他元數據，幫助確保JPEG圖像在不同設備和平台上正確顯示。雖然JFIF和JPG技術上是相關格式，但某些軟體和設備可能對其中一種有更好的相容性。'
    },
    
    whyConvert: {
      title: '為什麼將JPG轉換為JFIF？',
      reason1: '某些較舊的軟體系統專門需要JFIF格式',
      reason2: '某些專業應用程式可能與JFIF有更好的相容性',
      reason3: '使用一致的檔案副檔名標準化您的圖像集合',
      reason4: '確保在特定成像工作流程中正確處理元數據'
    },
    
    howItWorks: {
      title: '工作原理',
      content: '我們的轉換器完全在您的瀏覽器中處理JPG檔案。您的圖像永遠不會上傳到任何伺服器，確保完全的隱私和安全。該工具讀取JPG圖像數據，渲染它，然後以您選擇的品質設定將其保存為標準JFIF格式。'
    },
    
    tips: {
      title: '獲得最佳效果的提示',
      tip1: '使用品質滑塊平衡檔案大小和圖像品質',
      tip2: '對於包含文字或銳利細節的圖像，使用較高的品質設定',
      tip3: '一次批次轉換多個檔案並將它們下載為ZIP檔案',
      tip4: '使用"自動優化"以獲得品質和檔案大小的最佳平衡',
      tip5: '當隱私很重要時，移除元數據以獲得更小的檔案大小'
    },
    
    privacy: {
      title: '隱私與安全',
      content: '我們嚴肅對待您的隱私。所有處理都直接在您的瀏覽器中進行 - 您的檔案永遠不會上傳到任何伺服器。這確保了您的圖像的完全安全和隱私。'
    }
  }
};