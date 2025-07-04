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
    },
    
    article: {
      title: "JPG轉JFIF轉換器終極指南：線上轉換JPG檔案",
      
      introduction: {
        title: "瞭解JPG到JFIF的轉換",
        content: "我們的<strong>JPG轉JFIF轉換器</strong>是一款功能強大的線上工具，專為將JPG圖像檔案無縫轉換為JFIF格式而設計。雖然JPG被廣泛使用，但在某些特定場景中，JFIF格式可能更受歡迎或需要。我們的轉換器直接在您的瀏覽器中處理圖像，無需上傳，確保完全的隱私和安全。"
      },
      
      whatIsJfif: {
        title: "什麼是JFIF以及為什麼要從JPG轉換？",
        content: "JFIF（JPEG檔案交換格式）是一種定義JPEG圖像數據打包方式的檔案格式規範。雖然技術上與JPG相似，但許多系統和應用程式對它們的處理方式不同。<strong>將JPG轉換為JFIF</strong>對於與某些傳統系統、專業軟體相容，或在需要特定元數據處理時可能是必要的。"
      },
      
      whyConvert: {
        title: "將JPG轉換為JFIF的好處",
        content: "雖然今天JPG更常用，但您可能需要<strong>將JPG轉換為JFIF</strong>的原因有幾個。一些較舊的系統和專業應用程式專門需要JFIF格式。此外，JFIF可以對某些類型的元數據提供更一致的處理。通過使用我們的<strong>線上JPG到JFIF轉換器</strong>，您可以確保您的圖像在這些系統上工作，同時保持品質。"
      },
      
      useCases: {
        title: "JPG到JFIF轉換的常見用例",
        list: [
          "傳統系統：與特別需要JFIF格式的較舊軟體相容",
          "專業應用程式：某些專業成像軟體對JFIF處理更好",
          "檔案標準化：將圖像集合標準化為一致的格式",
          "發布工作流程：某些發布系統對JFIF有特定要求",
          "技術合規性：滿足需要JFIF的特定技術標準",
          "元數據保存：JFIF有時對某些元數據的處理方式不同",
          "軟體測試：創建JFIF檔案以測試應用程式相容性"
        ]
      },
      
      platforms: {
        title: "在不同平台上將JPG轉換為JFIF",
        content: "我們的工具適用於任何帶有網路瀏覽器的設備，無論您的操作系統如何，都是理想的解決方案。以下是我們的轉換器如何滿足各種系統的需求：",
        list: [
          {
            title: "Windows 10/11上的JPG到JFIF轉換",
            description: "Windows用戶可以<strong>在Windows 10中將JPG轉換為JFIF</strong>或Windows 11，無需安裝任何軟體。我們的線上轉換器在您PC上的任何瀏覽器中都能完美運行。"
          },
          {
            title: "Mac上的JPG到JFIF轉換",
            description: "想知道<strong>如何在Mac上將JPG轉換為JFIF</strong>的Mac用戶可以使用我們的工具，無需任何額外的軟體，保留寶貴的磁碟空間並避免不必要的下載。"
          },
          {
            title: "移動設備上的JPG到JFIF轉換",
            description: "我們的移動響應式設計確保您可以直接從智能手機或平板電腦<strong>將JPG檔案轉換為JFIF</strong>，界面針對觸控螢幕進行了優化。"
          },
          {
            title: "使用瀏覽器擴展的JPG到JFIF轉換",
            description: "雖然瀏覽器擴展存在，但它們通常需要訪問您的數據的權限。我們的基於網路的解決方案不需要安裝，並保護您的隱私。"
          }
        ]
      },
      
      tutorial: {
        title: "如何將JPG轉換為JFIF：逐步指南",
        introduction: "使用我們直觀的工具將JPG圖像轉換為JFIF非常簡單。按照以下簡單步驟轉換您的檔案：",
        steps: [
          {
            title: "選擇或拖放您的檔案",
            description: "點擊\"選擇檔案\"按鈕或直接將JPG圖像拖放到指定區域。您可以一次選擇多個檔案進行批次轉換。"
          },
          {
            title: "調整品質設定（可選）",
            description: "對於高級用戶，您可以自訂<strong>JPG到JFIF的設定</strong>，如輸出品質。更高的品質意味著更大的檔案大小，而更低的品質會導致更小的檔案。"
          },
          {
            title: "選擇檔案名稱選項",
            description: "決定是保留原始檔案名稱還是自訂它們。您可以通過我們靈活的選項添加前綴或使用自訂命名模板。"
          },
          {
            title: "配置元數據設定",
            description: "根據您的偏好和要求，選擇是保留、刪除還是只保留原始檔案中的基本圖像元數據。"
          },
          {
            title: "點擊\"轉換所有檔案\"",
            description: "配置完設定後，點擊\"轉換所有檔案\"按鈕開始轉換過程。進度指示器將顯示每個檔案的狀態。"
          },
          {
            title: "下載您轉換後的JFIF檔案",
            description: "轉換完成後，單獨下載您的JFIF檔案或作為包含所有轉換圖像的ZIP存檔下載。"
          }
        ],
        tips: {
          title: "JPG到JFIF轉換的專業提示",
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
        title: "關於JPG到JFIF轉換的常見問題",
        questions: [
          {
            question: "為什麼我需要將JPG轉換為JFIF？",
            answer: "雖然兩種格式相似，但一些傳統系統和專業應用程式專門需要JFIF格式。此外，某些工作流程可能受益於JFIF處理元數據的方式。我們的線上轉換器使這種轉換快速簡單，無論您的具體原因是什麼。"
          },
          {
            question: "我可以在不損失品質的情況下將JPG轉換為JFIF嗎？",
            answer: "是的，您可以通過使用我們的工具並選擇最高品質設定（100%）<strong>將JPG轉換為JFIF而不損失品質</strong>。由於兩種格式都使用JPEG壓縮，使用最高品質設定在它們之間轉換可以保留幾乎所有圖像細節。"
          },
          {
            question: "JPG和JFIF檔案之間有什麼區別？",
            answer: "是的，雖然微妙。JPG通常用作JPEG壓縮圖像的檔案副檔名，而JFIF是實現JPEG標準的特定檔案格式。主要區別在於元數據的存儲方式以及某些應用程式如何識別和處理檔案。我們的<strong>JPG到JFIF轉換器</strong>確保按照JFIF規範進行正確的格式化。"
          },
          {
            question: "轉換為JFIF會影響我的圖像外觀嗎？",
            answer: "使用高品質設定時，外觀應該沒有明顯差異。JPG和JFIF都使用相同的JPEG壓縮算法。但是，在較低的品質設定下，圖像格式之間的任何轉換都可能引入一些壓縮偽影。我們的工具允許您在下載前預覽轉換。"
          },
          {
            question: "我可以一次將多個JPG檔案轉換為JFIF嗎？",
            answer: "當然可以！我們的工具支援批次處理，允許您同時<strong>將多個JPG檔案轉換為JFIF</strong>。只需一次選擇或拖動多個檔案，我們的轉換器將處理所有檔案。然後，您可以單獨下載它們或作為組合的ZIP存檔下載。"
          },
          {
            question: "如何確保在轉換為JFIF時保留元數據？",
            answer: "默認情況下，我們的轉換器會保留元數據，如EXIF資訊（相機設定、拍攝日期等）。您可以在高級設定中明確選擇\"保留所有元數據\"選項，以確保在轉換過程中保留所有元數據。"
          },
          {
            question: "JPG到JFIF的轉換安全嗎？",
            answer: "是的，我們的轉換器直接在您的瀏覽器中處理所有檔案。您的圖像永遠不會上傳到任何伺服器，確保完全的隱私和安全。這種本地處理方法意味著您的敏感圖像及其元數據永遠不會離開您的設備。"
          },
          {
            question: "可以將JPG轉換為JFIF然後轉為PDF嗎？",
            answer: "是的，您可以先使用我們的<strong>免費線上JPG轉JFIF轉換器</strong>將JPG圖像轉換為JFIF，然後使用JFIF到PDF轉換器創建PDF檔案。對於文件創建，如果PDF是您的最終目標，您可能考慮直接從JPG轉換為PDF，這樣可以減少轉換步驟和潛在的品質損失。"
          },
          {
            question: "JFIF和JPEG檔案格式有什麼區別？",
            answer: "<strong>JFIF與JPEG</strong>的主要區別在於檔案結構而不是圖像數據本身。JFIF（JPEG檔案交換格式）實際上是JPEG標準的特定實現，它定義了壓縮圖像數據如何打包到檔案中。雖然JPG/JPEG通常用作檔案副檔名，但JFIF提供特定的元數據格式，確保在不同系統上一致顯示。大多數用戶不會注意到兩種格式之間的視覺差異。"
          },
          {
            question: "是否可以將JFIF轉換為PNG格式？",
            answer: "是的，從<strong>JFIF轉換為PNG</strong>是可能的，並且在某些情況下可能有益。PNG檔案使用無損壓縮並支援透明度，使其成為文字、徽標或需要保持完美清晰度的圖像的理想選擇。但是，PNG檔案通常比JFIF檔案大。雖然我們的工具專注於JPG到JFIF的轉換，但您可以使用專門的JFIF到PNG轉換器來實現這一目的。"
          }
        ]
      },
      
      relatedTools: {
        title: "相關圖像轉換工具",
        introduction: "除了我們的JPG到JFIF轉換器外，您可能還會對這些圖像工具感興趣：",
        list: [
          {
            name: "JFIF轉JPG轉換器",
            url: "https://www.ufreetools.com/tool/jfif-jpg-converter",
            description: "將JFIF檔案轉換回JPG格式以獲得最大相容性"
          },
          {
            name: "圖像壓縮器",
            url: "https://www.ufreetools.com/tool/image-compressor",
            description: "在保持視覺品質的同時減小檔案大小"
          },
          {
            name: "圖像批次調整器",
            url: "https://www.ufreetools.com/tool/image-batch-resizer",
            description: "使用可自訂設定一次調整多個圖像的大小"
          }
        ]
      },
      
      resources: {
        title: "官方資源",
        list: [
          {
            name: "JPEG檔案交換格式",
            url: "https://www.w3.org/Graphics/JPEG/jfif3.pdf",
            description: "官方JFIF格式規範文件"
          },
          {
            name: "圖像檔案格式指南",
            url: "https://docs.fileformat.com/image/",
            description: "不同圖像檔案格式及其應用的綜合指南"
          },
          {
            name: "JPEG壓縮概述",
            url: "https://en.wikipedia.org/wiki/JPEG",
            description: "瞭解JPEG壓縮的技術細節"
          },
          {
            name: "圖像檔案類型和格式指南",
            url: "https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types",
            description: "介紹web瀏覽器通常支援的圖像檔案類型"
          },
          {
            name: "圖像壓縮技術",
            url: "https://zh.wikipedia.org/wiki/圖像壓縮",
            description: "瞭解不同圖像壓縮技術及其應用"
          }
        ]
      },
      
      conclusion: {
        title: "為什麼選擇我們的JPG到JFIF轉換器",
        content: "我們的<strong>線上JPG到JFIF轉換器</strong>將簡單性與強大功能相結合，為任何需要將JPG檔案轉換為更專業的JFIF格式的人提供完美解決方案。無論您是在處理傳統系統、專業應用程式，還是只想標準化您的圖像集合，我們基於瀏覽器的工具都能無縫運行，無需任何下載或安裝。憑藉批次處理功能、可自訂設定和完整的隱私保護，將JPG轉換為JFIF從未如此簡單或安全。"
      },
      
      formatComparison: {
        title: "JFIF與JPEG和其他圖像格式的比較",
        content: "我們的<strong>JPG轉JFIF轉換器</strong>在密切相關的格式之間進行轉換，但瞭解JFIF與JPEG、PNG甚至PDF格式的比較很重要。這種比較可以幫助您確定哪種格式最適合您的特定需求。",
        table: {
          feature: "特性",
          rows: [
            {
              feature: "檔案副檔名",
              jfif: ".jfif",
              jpeg: ".jpg, .jpeg",
              png: ".png",
              pdf: ".pdf"
            },
            {
              feature: "壓縮方式",
              jfif: "有損",
              jpeg: "有損",
              png: "無損",
              pdf: "多種"
            },
            {
              feature: "透明度支援",
              jfif: "不支援",
              jpeg: "不支援",
              png: "支援",
              pdf: "支援"
            },
            {
              feature: "元數據處理",
              jfif: "標準化",
              jpeg: "可變",
              png: "有限",
              pdf: "廣泛"
            },
            {
              feature: "最佳用例",
              jfif: "傳統系統",
              jpeg: "攝影",
              png: "圖形/徽標",
              pdf: "文件"
            }
          ]
        }
      },
      
      otherConversions: {
        title: "除了JPG到JFIF：其他格式轉換",
        content: "雖然我們的<strong>線上JPG轉JFIF轉換器</strong>專門將JPG圖像轉換為JFIF檔案，但您可能也對其他相關轉換感興趣。以下是一些補充我們主要服務的常見格式轉換：",
        options: [
          {
            title: "JFIF轉JPG轉換",
            description: "使用我們的<a href='/tool/jfif-jpg-converter' class='text-blue-600 dark:text-blue-400 hover:underline'>JFIF轉JPG轉換器</a>將JFIF檔案轉換回更廣泛相容的JPG格式。當您需要與可能不熟悉JFIF格式的用戶共享圖像時，這很有用。"
          },
          {
            title: "JPG轉PDF轉換",
            description: "需要在文件中包含您的圖像？"
          },
          {
            title: "JFIF轉PNG轉換",
            description: "對於需要透明度或無損品質的情況，從JFIF轉換為PNG可能是有益的，尤其是對於圖形、徽標或需要保持完美清晰的文字圖像。"
          },
          {
            title: "批次轉換",
            description: "我們的免費<strong>線上JPG轉JFIF轉換器</strong>支援批次處理，允許您同時轉換多個檔案，從而節省時間，比單獨處理每個圖像。"
          }
        ]
      },
      
      specificPlatform: {
        title: "平台特定轉換說明",
        windows10: {
          title: "如何在Windows 10中將JFIF轉換為JPG",
          intro: "雖然我們的<strong>免費線上JPG轉JFIF轉換器</strong>適用於所有平台，包括Windows 10，一些用戶可能更喜歡使用內建的Windows工具。以下是如何直接在Windows 10中轉換這些格式：",
          steps: [
            "右鍵單擊您的JFIF圖像並選擇'打開方式' > '照片'（默認的Windows 10圖像查看器）",
            "一旦圖像打開，點擊右上角的三個點（...）並選擇'編輯並創建'",
            "從下拉菜單中選擇'編輯'以在編輯器中打開圖像",
            "對圖像進行任何所需的調整（可選）",
            "點擊右上角的'保存'按鈕",
            "在保存對話框中，將檔案類型從JFIF更改為JPG/JPEG",
            "選擇您想要保存的位置並點擊'保存'"
          ]
        }
      },
      
      conclusion: {
        title: "為什麼選擇我們的JPG到JFIF轉換器",
        content: "我們的<strong>線上JPG到JFIF轉換器</strong>將簡單性與強大功能相結合，為任何需要將JPG檔案轉換為更專業的JFIF格式的人提供完美解決方案。無論您是在處理傳統系統、專業應用程式，還是只想標準化您的圖像集合，我們基於瀏覽器的工具都能無縫運行，無需任何下載或安裝。憑藉批次處理功能、可自訂設定和完整的隱私保護，將JPG轉換為JFIF從未如此簡單或安全。",
        cta: "現在嘗試我們的JPG到JFIF轉換器"
      }
    }
}