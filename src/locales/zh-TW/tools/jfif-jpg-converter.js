export default {
    name: 'JFIF轉JPG轉換器',
    description: '線上將JFIF圖像轉換為JPG格式，高品質，多種選項',
    tags: ['圖片', '轉換', 'jpg', 'jfif', 'jpeg', '格式', '工具'],
    
    meta: {
      title: 'JFIF轉JPG轉換器 - 免費線上圖像轉換工具',
      description: '免費線上將JFIF轉換為JPG。快速、安全的瀏覽器內轉換，支援批次處理、預覽對比和高級品質設定。無浮水印，無需註冊。'
    },
    
    upload: {
      title: 'JFIF轉JPG轉換器',
      subtitle: '以完美品質將JFIF圖像轉換為JPG格式',
      dropzone: '將您的JFIF檔案拖放到這裡',
      dropzoneActive: '鬆開檔案開始轉換',
      maxSize: '最大檔案大小：50MB',
      supportedFormats: '支援的格式：JFIF、JPEG、JPG'
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
      before: 'JFIF原圖',
      after: 'JPG預覽',
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
      noValidFiles: '請選擇有效的JFIF或JPEG檔案。',
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
      title: '關於JFIF到JPG轉換',
      description: '我們的JFIF轉JPG轉換器允許您快速輕鬆地將JFIF圖像檔案轉換為更廣泛相容的JPG格式，所有處理都安全地在您的瀏覽器中完成。',
      
      whatIs: {
        title: '什麼是JFIF？',
        content: 'JFIF（JPEG檔案交換格式）是JPEG檔案的一種檔案格式標準。它提供額外資訊如解析度、寬高比和其他元數據，幫助確保JPEG圖像在不同設備和平台上正確顯示。雖然JFIF和JPG技術上是相關格式，但某些軟體和設備可能對其中一種有更好的相容性。'
      },
      
      whyConvert: {
        title: '為什麼將JFIF轉換為JPG？',
        reason1: '與各種應用程式和設備有更好的相容性',
        reason2: '更容易上傳到可能拒絕JFIF格式的網站',
        reason3: '使用一致的檔案副檔名標準化您的圖像集合',
        reason4: '解決某些程式無法打開或正確顯示JFIF檔案的問題'
      },
      
      howItWorks: {
        title: '工作原理',
        content: '我們的轉換器完全在您的瀏覽器中處理JFIF檔案。您的圖像永遠不會上傳到任何伺服器，確保完全的隱私和安全。該工具讀取JFIF圖像數據，渲染它，然後以您選擇的品質設定將其保存為標準JPG格式。'
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
    },
    
    article: {
      title: "JFIF轉JPG轉換器終極指南：線上轉換JFIF檔案",
      
      introduction: {
        title: "瞭解JFIF到JPG的轉換",
        content: "我們的<strong>JFIF轉JPG轉換器</strong>是一款功能強大的線上工具，專為將JFIF圖像檔案無縫轉換為更廣泛相容的JPG格式而設計。如果您曾經在打開或分享JFIF檔案時遇到困難，這個轉換器提供了完美的解決方案，直接在您的瀏覽器中處理圖像，無需上傳，確保完全的隱私和安全。"
      },
      
      whatIsJfif: {
        title: "什麼是JFIF以及為什麼要轉換為JPG？",
        content: "JFIF（JPEG檔案交換格式）是一種定義JPEG圖像數據打包方式的檔案格式規範。雖然技術上與JPG相似，但許多系統和應用程式對它們的處理方式不同。<strong>將JFIF轉換為JPG</strong>可確保在所有設備、應用程式和平台上的最大相容性，消除在嘗試查看或上傳圖像時出現\"不支援的檔案類型\"錯誤的煩惱。"
      },
      
      whyConvert: {
        title: "將JFIF轉換為JPG的好處",
        content: "在Windows 10或任何其他操作系統中<strong>將JFIF轉換為JPG</strong>的主要原因是相容性。JPG檔案獲得普遍支援，而JFIF檔案可能在某些應用程式或網站上引起問題。通過使用我們的<strong>線上JFIF到JPG轉換器</strong>，您可以確保您的圖像在任何地方都可以訪問，從社交媒體平台到圖像編輯軟體、電子郵件附件和文件插入。"
      },
      
      useCases: {
        title: "JFIF到JPG轉換的常見用例",
        list: [
          "社交媒體上傳：確保您的圖像在可能拒絕JFIF檔案的平台上被接受",
          "網站開發：使用JPG以獲得與所有瀏覽器和設備的更好相容性",
          "數字出版：轉換JFIF圖像以包含在數字出版物和文件中",
          "照片編輯：在支援格式有限的軟體中編輯前，將JFIF檔案轉換為JPG",
          "電子郵件附件：通過電子郵件分享圖像時，轉換為JPG以獲得普遍相容性",
          "照片列印服務：許多列印服務專門要求JPG格式",
          "創建照片檔案：使用一致的檔案副檔名標準化圖像集合"
        ]
      },
      
      platforms: {
        title: "在不同平台上將JFIF轉換為JPG",
        content: "雖然我們的工具適用於任何帶有網路瀏覽器的設備，但用戶經常尋找特定平台的解決方案。以下是我們的轉換器如何滿足各種系統的需求：",
        list: [
          {
            title: "Windows 10/11上的JFIF到JPG轉換",
            description: "無需安裝任何軟體即可<strong>在Windows 10中將JFIF轉換為JPG</strong>或Windows 11。我們的線上轉換器在PC上的任何瀏覽器中都能完美運行，提供比內建工具更簡單的替代方案。"
          },
          {
            title: "Mac上的JFIF到JPG轉換",
            description: "想知道<strong>如何在Mac上將JFIF轉換為JPG</strong>的Mac用戶可以使用我們的工具，無需任何額外的軟體，保留寶貴的磁碟空間並避免不必要的下載。"
          },
          {
            title: "移動設備上的JFIF到JPG轉換",
            description: "我們的移動響應式設計確保您可以直接從智能手機或平板電腦<strong>將JFIF檔案轉換為JPG</strong>，界面針對觸控螢幕進行了優化。"
          },
          {
            title: "使用瀏覽器擴展的JFIF到JPG轉換",
            description: "雖然瀏覽器擴展存在，但它們通常需要訪問您的數據的權限。我們的基於網路的解決方案不需要安裝，並保護您的隱私。"
          }
        ]
      },
      
      tutorial: {
        title: "如何將JFIF轉換為JPG：逐步指南",
        introduction: "使用我們直觀的工具將JFIF圖像轉換為JPG非常簡單。按照以下簡單步驟轉換您的檔案：",
        steps: [
          {
            title: "選擇或拖放您的檔案",
            description: "點擊\"選擇檔案\"按鈕或直接將JFIF圖像拖放到指定區域。您可以一次選擇多個檔案進行批次轉換。"
          },
          {
            title: "調整品質設定（可選）",
            description: "對於高級用戶，您可以自訂<strong>JFIF到JPG的設定</strong>，如輸出品質。更高的品質意味著更大的檔案大小，而更低的品質會導致更小的檔案。"
          },
          {
            title: "選擇檔案名稱選項",
            description: "決定是保留原始檔案名稱還是自訂它們。您可以通過我們靈活的選項添加前綴或使用自訂命名模板。"
          },
          {
            title: "配置元數據設定",
            description: "根據您的隱私偏好和檔案大小要求，選擇是保留、刪除還是只保留原始檔案中的基本圖像元數據。"
          },
          {
            title: "點擊\"轉換所有檔案\"",
            description: "配置完設定後，點擊\"轉換所有檔案\"按鈕開始轉換過程。進度指示器將顯示每個檔案的狀態。"
          },
          {
            title: "下載您轉換後的JPG檔案",
            description: "轉換完成後，單獨下載您的JPG檔案或作為包含所有轉換圖像的ZIP存檔下載。"
          }
        ],
        tips: {
          title: "JFIF到JPG轉換的專業提示",
          list: [
            "對於有大量細節的照片，使用更高的品質設定（85-100%）以保持圖像清晰度",
            "對於網路圖形或截圖，中等品質設定（70-85%）通常在品質和檔案大小之間提供最佳平衡",
            "如果您不確定圖像的最佳設定，請使用\"自動優化\"選項",
            "出於隱私考慮，考慮使用\"刪除元數據\"選項以刪除照片中潛在的敏感資訊",
            "轉換多個檔案時，使用ZIP下載選項比單獨下載每個檔案節省時間"
          ]
        }
      },
      
      faq: {
        title: "關於JFIF到JPG轉換的常見問題",
        questions: [
          {
            question: "如何在Windows 10中將JFIF轉換為JPG？",
            answer: "雖然Windows 10有內建選項，如重命名檔案副檔名或使用畫圖，但我們的線上轉換器通常更容易。只需在任何瀏覽器中打開我們的網站，上傳您的JFIF檔案，然後將它們轉換為JPG，無需安裝任何軟體。這種方法不僅適用於Windows 10，還適用於<strong>Windows 11、Mac和移動設備</strong>。"
          },
          {
            question: "我可以在不損失品質的情況下將JFIF轉換為JPG嗎？",
            answer: "是的，您可以通過使用我們的工具並選擇最高品質設定（100%）<strong>將JFIF轉換為JPG而不損失品質</strong>。由於兩種格式都使用JPEG壓縮，使用最高品質設定在它們之間轉換可以保留幾乎所有圖像細節。為了獲得絕對最佳效果，請使用我們的\"最高品質\"設定。"
          },
          {
            question: "如何更改JFIF為JPG檔案副檔名？",
            answer: "雖然您可以技術上將檔案副檔名從.jfif重命名為.jpg，但這並不總是可靠的。我們的<strong>JFIF到JPG轉換器</strong>正確地重新編碼圖像以確保適當的相容性，而不僅僅是更改副檔名。這確保檔案在所有系統和應用程式上正常工作。"
          },
          {
            question: "有免費的JFIF到JPG轉換器軟體可以下載嗎？",
            answer: "是的，有可下載的應用程式，但我們的<strong>免費線上JFIF到JPG轉換器</strong>消除了下載任何軟體的需要。它可以從任何設備訪問，在您的瀏覽器中本地處理檔案（而不是在我們的伺服器上），並且不需要安裝或註冊。"
          },
          {
            question: "JFIF到JPG的轉換會影響圖像元數據嗎？",
            answer: "默認情況下，我們的轉換器會保留元數據，如EXIF資訊（相機設定、拍攝日期等）。但是，為了隱私或減小檔案大小，您可以選擇在轉換過程中刪除所有元數據。如果您願意，我們還提供了一個選項，只保留基本的、非敏感的元數據。"
          },
          {
            question: "JFIF和JPG檔案之間有什麼區別？",
            answer: "區別主要是技術性的。JFIF（JPEG檔案交換格式）是實現JPEG標準的特定檔案格式，而JPG通常用作JPEG壓縮圖像的檔案名擴展名。在實際應用中，大多數JPG檔案實際上遵循JFIF規範，但一些軟體根據檔案副檔名對它們進行不同的處理。"
          },
          {
            question: "我可以批次將多個JFIF檔案轉換為JPG嗎？",
            answer: "當然可以！我們的工具支援批次處理，允許您同時<strong>將多個JFIF檔案轉換為JPG</strong>。只需一次選擇或拖動多個檔案，我們的轉換器將處理所有檔案。然後，您可以單獨下載它們或作為組合的ZIP存檔下載。"
          }
        ]
      },
      
      conclusion: {
        title: "為什麼選擇我們的JFIF到JPG轉換器",
        content: "我們的<strong>線上JFIF到JPG轉換器</strong>將簡單性與強大功能相結合，為任何需要將JFIF檔案轉換為更通用相容的JPG格式的人提供完美解決方案。無論您使用的是Windows、Mac還是移動設備，我們基於瀏覽器的工具都能無縫運行，無需任何下載或安裝。憑藉批次處理功能、可自訂設定和完整的隱私保護，將JFIF轉換為JPG從未如此簡單或安全。立即嘗試我們的轉換器，體驗圖像相容性和分享便利性的差異。"
      },
      
      relatedTools: {
        title: "相關圖像轉換工具",
        introduction: "除了我們的JFIF到JPG轉換器外，您可能還會對這些圖像工具感興趣：",
        list: [
          {
            name: "圖像壓縮器",
            url: "http://www.ufreetools.com/tool/image-compressor",
            description: "在保持視覺品質的同時減小檔案大小"
          },
          {
            name: "圖像批次調整器",
            url: "http://www.ufreetools.com/tool/image-batch-resizer",
            description: "一次性調整、轉換和優化多張圖像"
          },
          {
            name: "GIF幀提取器",
            url: "http://www.ufreetools.com/tool/gif-frame-extractor",
            description: "從GIF動畫中提取單個幀"
          }
        ]
      },
      
      resources: {
        title: "官方資源",
        list: [
          {
            name: "JPEG標準文件",
            url: "https://docs.fileformat.com/image/jpeg/",
            description: "了解更多關於JPEG格式背後的技術規範"
          },
          {
            name: "JFIF 檔案交換格式",
            url: "https://docs.fileformat.com/image/jfif/",
            description: "了解更多關於JFIF格式背後的技術規範"
          },
          {
            name: "JPEG 檔案交換格式",
            url: "https://wikipedia.org/wiki/JPEG_File_Interchange_Format",
            description: "JPEG壓縮在許多圖像檔案格式中使用"
          }
        ]
      }
    }
  }