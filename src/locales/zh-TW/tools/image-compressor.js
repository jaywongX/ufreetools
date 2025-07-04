export default {
  name: '圖片壓縮器',
  description: '在保持品質的同時壓縮和優化圖片',
  input: {
    dragDrop: '拖放圖片到此處或點擊上傳',
    supportedFormats: '支援 JPG, PNG, GIF, WEBP 格式',
    selected: '已選擇 {count} 個檔案',
    changeFiles: '更換檔案',
    width: '寬度',
    height: '高度',
    keepOriginal: '設為0表示保持原始尺寸',
  },
  results: {
    originalImage: '原始圖片',
    compressedImage: '壓縮後',
    filename: '檔案名稱:',
    dimensions: '尺寸:',
    fileSize: '大小:',
    compressionRatio: '壓縮率:',
    viewOriginal: '查看原圖',
  },
  about: {
    title: '關於圖片壓縮',
    description: '本工具透過瀏覽器的Canvas API實現圖片壓縮，所有處理均在您的裝置上完成，圖片不會上傳到伺服器。',
    principlesTitle: '壓縮原理:',
    principles: {
      resize: '調整圖片尺寸：較小的尺寸意味著更少的像素數據',
      quality: '降低品質：降低圖片的品質參數，減少檔案大小',
      format: '轉換格式：不同的圖片格式有不同的壓縮特性'
    },
    useCasesTitle: '適用場景:',
    useCases: {
      web: '網站圖片優化，提升載入速度',
      email: '減小郵件附件大小',
      social: '社交媒體上傳前壓縮',
      storage: '儲存空間優化'
    }
  },
  options: {
    quality: '品質',
    qualityValue: '品質 ({value}%)',
    lowQuality: '低品質/小檔案',
    highQuality: '高品質/大檔案',
    format: '輸出格式',
    maxSize: '最大尺寸 ({width} × {height} px)',
    keepExif: '保留EXIF數據',
    resizeImage: '調整圖片大小',
    maxWidth: '最大寬度',
    maxHeight: '最大高度',
    compressionLevel: '壓縮級別',
    maxFileSize: '目標檔案大小',
    optimizationLevel: '優化級別',
    convertTo: '轉換為'
  },
  presets: {
    web: '網頁優化',
    highQuality: '高品質',
    balanced: '平衡',
    smallSize: '小體積',
    custom: '自訂'
  },
  formats: {
    original: '原始格式',
    jpeg: 'JPEG',
    jpegDesc: 'JPEG格式適合照片，不支援透明背景',
    png: 'PNG',
    pngDesc: 'PNG格式支援透明背景，適合圖示和插圖',
    webp: 'WebP',
    webpDesc: 'WebP格式提供高壓縮率，適合在網路上使用',
    avif: 'AVIF',
    gif: 'GIF',
    bmp: 'BMP'
  },
  resizeOptions: {
    noResize: '不調整大小',
    maxDimension: '最大尺寸',
    exactDimensions: '精確尺寸',
    percentage: '百分比縮放'
  },
  actions: {
    upload: '上傳圖片',
    compress: '壓縮',
    processing: '正在處理...',
    download: '下載',
    downloadAll: '下載全部',
    batchDownload: '批次下載',
    clear: '清除',
    addMore: '添加更多圖片',
    removeAll: '移除全部',
    preview: '預覽',
    delete: '刪除'
  },
  table: {
    filename: '檔案名稱',
    originalSize: '原始大小',
    original: '原始檔案大小',
    compressedSize: '壓縮後大小',
    compressed: '壓縮後大小',
    savings: '節省',
    ratio: '壓縮率',
    quality: '品質',
    dimensions: '尺寸',
    originalDimensions: '原始尺寸',
    newDimensions: '新尺寸',
    status: '狀態'
  },
  messages: {
    dropped: '已拖入{count}張圖片',
    uploading: '正在上傳圖片...',
    compressing: '正在壓縮圖片...',
    compressed: '圖片壓縮成功',
    downloadPreparing: '正在準備下載...',
    downloadReady: '下載已就緒',
    cleared: '所有圖片已清除',
    tooManyFiles: '檔案過多。最多允許：{max}',
    fileTooLarge: '檔案過大。最大允許：{max}MB',
    unsupportedFormat: '不支援的檔案格式：{format}',
    imageError: '處理圖片時出錯：{error}',
    batchDownloadNotSupported: '批次下載功能需要另行添加JSZip庫。請逐個下載圖片，或添加zip庫支援。',
    batchDownloadError: '批次下載圖片時出錯: {error}',
    invalidImage: '請選擇有效的圖片檔案'
  },
  article: {
    title: '圖像壓縮器：線上優化和減小圖像大小的終極指南',
    
    introduction: {
      title: '什麼是圖像壓縮器？',
      p1: '我們的<strong>圖像壓縮器</strong>是一款功能強大的工具，專為在保持可接受的視覺品質的同時減小圖像檔案大小而設計。無論您需要<strong>將圖像壓縮至50kb</strong>、<strong>將圖像壓縮至20kb</strong>，甚至<strong>將圖像壓縮至100kb</strong>，我們的多功能解決方案都能處理各種目標大小，滿足您的特定需求。',
      p2: '在數位世界中，圖像大小非常重要。大尺寸圖像會減慢網站速度，佔用過多儲存空間，並在共享過程中造成阻力。我們的<strong>線上圖像壓縮器</strong>工具智能地分析您的圖像並應用先進的壓縮演算法，消除不必要的數據，同時保留最重要的視覺細節。結果是顯著減小的檔案大小，載入更快，使用更少的頻寬。',
      p3: '與許多僅僅統一降低品質的基本<strong>圖像檔案壓縮器</strong>不同，我們的工具採用智能壓縮技術，分析圖像內容以確定在哪裡可以最有效地應用壓縮。這種方法確保重要的視覺元素保持清晰度，而背景區域和不太明顯的部分可以更積極地壓縮。'
    },
    
    applications: {
      title: '實際應用場景',
      scenario1: {
        title: '網站優化',
        content: '網站速度顯著影響用戶體驗和搜索引擎排名。使用我們的<strong>線上圖像壓縮器</strong>工具，網頁開發人員可以減小網站圖像的大小，從而實現更快的載入時間和提高用戶滿意度。例如，使用我們的<strong>圖像壓縮至30kb</strong>選項壓縮到約30KB的部落格縮圖仍然保持視覺吸引力，同時大幅提高頁面載入速度。電子商務網站特別受益於我們的<strong>批次圖像壓縮器</strong>功能，使他們能夠高效地優化整個產品目錄。'
      },
      scenario2: {
        title: '電子郵件附件',
        content: '電子郵件伺服器通常有嚴格的檔案大小限制。當您需要通過電子郵件發送圖像但面臨大小限制時，我們的<strong>圖像壓縮器</strong>可以將您的檔案減小到可接受的大小。使用<strong>圖像壓縮至500kb</strong>設置，確保您的照片在符合典型電子郵件限制的同時保持足夠的細節。這對於分享項目照片的專業人士、發送物業圖像的房地產經紀人或任何需要通過電子郵件共享視覺內容而不遇到大小限制錯誤的人特別有用。'
      },
      scenario3: {
        title: '社交媒體發布',
        content: '不同的社交平台有各種圖像大小要求。我們的<strong>圖像大小壓縮器</strong>幫助專門為社交媒體共享優化您的照片。在準備Instagram圖像時，使用我們的工具作為<strong>圖像壓縮至200kb</strong>，獲得品質和大小之間的理想平衡。許多需要一致發布解決方案的用戶發現我們的工具與專門解決方案（如<strong>11zon圖像壓縮器</strong>）相當，但欣賞精確大小定位的額外靈活性。'
      },
      scenario4: {
        title: '文件和應用提交',
        content: '許多線上應用程式、政府入口網站和文件提交系統都有嚴格的檔案大小限制。使用我們的<strong>JPG圖像壓縮器</strong>或<strong>JPEG圖像壓縮器</strong>功能來減小您的身份照片、掃描文件或支援材料，以滿足這些要求。例如，求職者經常使用我們的<strong>圖像壓縮至50kb</strong>設置準備申請系統的個人照片，學生使用我們的<strong>線上圖像壓縮至20kb</strong>功能準備各種教育平台提交的材料。'
      },
      scenario5: {
        title: '移動應用開發和儲存優化',
        content: '移動應用開發人員使用我們的<strong>圖像壓縮器</strong>來減小應用資產的大小，從而減小安裝包大小和降低儲存要求。同樣，普通用戶利用我們的工具作為<strong>圖像轉JPEG壓縮器</strong>來優化個人照片集，釋放寶貴的裝置儲存空間。管理大型圖像庫的人特別欣賞我們的<strong>批次圖像壓縮器</strong>功能，它允許他們使用一致的壓縮設置同時處理多個檔案。'
      }
    },
    
    guide: {
      title: '如何使用圖像壓縮器',
      step1: {
        title: '第1步：上傳您的圖像',
        content: '首先點擊上傳按鈕或將圖像拖放到指定區域。我們的<strong>圖像壓縮器</strong>支援各種檔案格式，包括JPG、PNG和WebP。如果您需要<strong>批次圖像壓縮器</strong>功能，可以一次上傳多張圖像。'
      },
      step2: {
        title: '第2步：選擇壓縮級別或目標大小',
        content: '上傳後，選擇您所需的壓縮級別或指定目標檔案大小。如果您需要<strong>圖像壓縮至20kb</strong>或<strong>圖像壓縮至50kb</strong>，只需輸入您的目標大小。或者，您可以使用品質滑塊手動控制壓縮級別。對於熟悉其他工具（如<strong>Caesium圖像壓縮器</strong>）的專業用戶，我們的高級選項提供類似的壓縮配置精度。'
      },
      step3: {
        title: '第3步：預覽和比較',
        content: '在完成壓縮之前，您可以預覽壓縮後的圖像效果並與原始圖像進行比較。這一步確保我們的<strong>線上圖像壓縮器</strong>工具在大小減小和視覺品質之間達到正確的平衡。特別注意圖像中的重要細節，確保它們在壓縮後仍然清晰。'
      },
      step4: {
        title: '第4步：應用壓縮',
        content: '對預覽滿意後，點擊"壓縮"按鈕應用壓縮設置。我們的<strong>圖像檔案壓縮器</strong>將使用先進的演算法處理您的圖像，減小小大的同時保留品質。對於批次處理，工具將顯示進度指示器，顯示已壓縮的圖像數量。'
      },
      step5: {
        title: '第5步：下載壓縮後的圖像',
        content: '壓縮完成後，單獨下載您的優化圖像，或者如果您使用了<strong>批次圖像壓縮器</strong>功能，則作為zip檔案下載。我們的<strong>圖像壓縮kb顯示</strong>會準確顯示您的檔案變小了多少，讓您可以驗證它們是否滿足您的大小要求，無論您需要的是<strong>圖像壓縮至100kb</strong>、<strong>圖像壓縮至500kb</strong>還是任何其他特定目標。'
      }
    },
    
    faq: {
      title: '常見問題解答',
      q1: '圖像壓縮器如何在保持品質的同時減小檔案大小？',
      a1: '我們的<strong>圖像壓縮器</strong>使用先進的壓縮演算法，分析圖像內容並在不易察覺的地方選擇性地減少數據。與基本工具不同，我們的<strong>線上圖像壓縮器</strong>採用感知壓縮技術，考慮人類視覺的工作原理。可感知細節較少的區域會被更積極地壓縮，而重要的視覺元素保持較高的品質。我們還優化色彩調色板、元數據，並採用高效編碼，以實現類似於專業工具（如<strong>PI7圖像壓縮器</strong>或<strong>Caesium圖像壓縮器</strong>）的結果。',
      
      q2: '我可以將圖像壓縮到特定的檔案大小，如50kb或20kb嗎？',
      a2: '是的，我們的工具可以充當<strong>圖像壓縮至50kb</strong>、<strong>圖像壓縮至20kb</strong>、<strong>圖像壓縮至100kb</strong>或您指定的任何其他目標大小。只需在目標大小欄位中輸入您所需的檔案大小，我們的演算法將自動確定最佳壓縮參數，在達到該大小的同時保留最大品質。這種有針對性的方法對於有嚴格檔案大小要求的平台特別有用，如某些政府入口網站、社交媒體平台或應用系統，比如<strong>TNPSC圖像壓縮器</strong>用戶使用的系統。',
      
      q3: '有損壓縮和無損壓縮有什麼區別？',
      a3: '我們的<strong>圖像壓縮器</strong>提供有損和無損壓縮選項：<br><br><strong>無損壓縮</strong>在不丟棄任何圖像數據的情況下減小檔案大小，保持100%的原始品質。這種方法在品質至上的情況下是理想的，但通常只能實現較為適度的大小減小（20-30%）。<br><br><strong>有損壓縮</strong>通過選擇性地丟棄一些圖像數據來實現更大的大小減小。我們的智能演算法確保丟棄的數據對感知品質的影響最小。這種方法用於我們的<strong>圖像壓縮至30kb</strong>或<strong>圖像壓縮至200kb</strong>選項，這些選項需要顯著減小大小。許多流行工具，如<strong>11zon圖像壓縮器</strong>和<strong>I love圖像壓縮器</strong>，主要使用有損壓縮來獲得令人印象深刻的結果。',
      
      q4: '哪些圖像格式與壓縮最相容？',
      a4: '不同格式對壓縮的響應不同：<br><br><strong>JPG/JPEG</strong>：我們的<strong>JPG圖像壓縮器</strong>和<strong>JPEG圖像壓縮器</strong>功能與這種已經為有損壓縮設計的格式特別相容。照片和具有多種顏色的複雜圖像非常適合JPEG壓縮。<br><br><strong>PNG</strong>：最適合包含文字、線條藝術或透明度的圖像。我們的壓縮器優化PNG時保留透明度和銳利邊緣。<br><br><strong>WebP</strong>：一種現代格式，支援有損和無損壓縮。我們的工具可以將您的圖像轉換為WebP以獲得額外的大小節省。<br><br>在特定場景中獲得最佳結果，您可能想使用我們的<strong>圖像轉JPEG壓縮器</strong>功能，在壓縮前將圖像轉換為最高效的格式。',
      
      q5: '壓縮後的圖像會看起來像素化或模糊嗎？',
      a5: '當適當使用時，我們的<strong>圖像壓縮器</strong>在減小檔案大小的同時保持視覺品質。可見品質損失的程度取決於：<br><br>1. <strong>壓縮級別</strong>：極端壓縮（如對之前很大的圖像使用<strong>圖像壓縮至20kb</strong>）可能會引入一些偽影。<br><br>2. <strong>圖像內容</strong>：具有漸變和細微細節的圖像可能比具有鮮明對比度的圖像更早顯示壓縮偽影。<br><br>3. <strong>原始圖像品質</strong>：較高品質的源圖像比已經壓縮或低品質的圖像壓縮效果更好。<br><br>我們的預覽功能允許您在下載前檢查壓縮結果。如果您注意到不可接受的品質損失，請嘗試調整壓縮設置或使用<strong>圖像壓縮至500kb</strong>或<strong>圖像壓縮至200kb</strong>設置，而不是更激進的選項。'
    },
    
    relatedTools: {
      title: '相關工具',
      tool1: '<a href="https://imagecompressor.com/" target="_blank" rel="noopener noreferrer">線上圖像壓縮器</a>',
      tool2: '<a href="https://imageresizer.com/image-compressor" target="_blank" rel="noopener noreferrer">圖像壓縮器 - 線上壓縮圖像</a>',
      tool3: '<a href="https://www.freeconvert.com/image-compressor" target="_blank" rel="noopener noreferrer">圖像壓縮器 - FreeConvert.com</a>'
    },
    
    resources: {
      title: '外部資源',
      resource1: '<a href="https://developer.mozilla.org/zh-CN/docs/Web/Media/Formats/Image_types" target="_blank" rel="noopener noreferrer">MDN Web文件：圖像檔案類型和格式指南</a> - 關於圖像格式及其特性的綜合參考',
      resource2: '<a href="https://web.dev/fast/#optimize-your-images" target="_blank" rel="noopener noreferrer">Google Web.dev：快速載入時間 - 優化您的圖像</a> - 來自Google的圖像優化最佳實踐',
      resource3: '<a href="https://www.w3.org/Graphics/JPEG/" target="_blank" rel="noopener noreferrer">W3C：JPEG圖像格式規範</a> - 詳細了解JPEG壓縮和優化技術'
    },
    
    conclusion: {
      title: '結論',
      content: '在當今的數位環境中，高效的<strong>圖像壓縮器</strong>工具對於線上處理視覺內容的任何人來說都是必不可少的。無論您需要<strong>圖像壓縮至100kb</strong>用於網站優化，<strong>圖像壓縮至20kb</strong>用於文件提交，還是<strong>批次圖像壓縮器</strong>用於管理大型集合，我們的工具都提供了滿足這些多樣化需求的多功能性和性能。<br><br>通過智能壓縮您的圖像，您可以改善載入時間，減少儲存成本，並提升各平台的整體用戶體驗。我們的<strong>線上圖像壓縮器</strong>服務提供對所有人可訪問的專業級壓縮，從個人內容創建者到企業級網站開發人員。<br><br>今天開始優化您的圖像，體驗正確壓縮的視覺內容所帶來的性能優勢。無論您是處理<strong>JPG圖像壓縮器</strong>需求還是需要更專業的<strong>圖像大小壓縮器</strong>功能，我們的工具都旨在提供卓越的結果，同時保持簡單易用。'
    }
  }
}