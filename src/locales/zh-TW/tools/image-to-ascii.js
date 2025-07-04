export default {
  name: '圖像轉ASCII',
  description: '將圖像轉換為可自訂選項的ASCII藝術文字',
  upload: {
    title: '上傳圖像',
    dropzone: '將圖像拖放到此處或點擊瀏覽',
    maxSize: '最大檔案大小：5MB',
    supportedFormats: '支援的格式：JPG、PNG、WEBP、GIF',
    pasteImage: '或從剪貼簿貼上圖像'
  },
  options: {
    title: '轉換選項',
    width: '輸出寬度',
    height: '輸出高度',
    preserveAspect: '保持寬高比',
    colored: '彩色輸出',
    charSet: '字元集',
    charSets: {
      standard: '標準',
      simple: '簡單',
      complex: '複雜',
      blocks: '方塊字元',
      custom: '自訂'
    },
    customChars: '自訂字元',
    invert: '反轉顏色',
    threshold: '亮度閾值',
    brightness: '亮度',
    contrast: '對比度',
    fontFamily: '字型系列',
    fontSize: '字型大小',
    lineHeight: '行高',
    backgroundColor: '背景顏色',
    textColor: '文字顏色'
  },
  output: {
    title: 'ASCII輸出',
    preview: '預覽',
    raw: '原始ASCII',
    html: 'HTML',
    copyToClipboard: '複製到剪貼簿',
    downloadTxt: '下載為TXT',
    downloadHtml: '下載為HTML',
    downloadImage: '下載為圖像',
    stats: {
      title: '統計',
      characters: '字元數',
      lines: '行數',
      colors: '顏色數',
      size: '文字大小'
    }
  },
  presets: {
    title: '預設',
    save: '儲存當前設置',
    load: '載入預設',
    delete: '刪除預設',
    presetName: '預設名稱',
    default: '預設',
    detailed: '詳細',
    minimalist: '極簡',
    blocky: '方塊風格',
    small: '小型',
    inverted: '反轉'
  },
  adjustment: {
    title: '圖像調整',
    grayscale: '灰階',
    negative: '負片',
    resize: '轉換前調整大小',
    crop: '裁剪圖像',
    rotate: '旋轉',
    flipH: '水平翻轉',
    flipV: '垂直翻轉'
  },
  animation: {
    title: '動畫',
    animated: '處理為動畫',
    frameDelay: '幀延遲',
    loop: '循環動畫',
    loopCount: '循環次數',
    extractFrame: '提取當前幀'
  },
  actions: {
    convert: '轉換為ASCII',
    resetOptions: '重設選項',
    refreshPreview: '重新整理預覽',
    loadImage: '載入新圖像',
    applyChanges: '套用變更',
    selectImage: '選擇圖片',
    reset: '重設',
    processing: '處理中...',
    generate: '產生ASCII',
    copy: '複製',
    download: '下載'
  },
  messages: {
    converting: '正在將圖像轉換為ASCII...',
    conversionComplete: '轉換完成',
    conversionFailed: '圖像轉換失敗：{error}',
    copied: 'ASCII已複製到剪貼簿',
    downloadStarted: '下載已開始',
    downloadComplete: 'ASCII已下載',
    downloadFailed: '下載失敗',
    copyFailed: '複製失敗',
    resetComplete: '已重設',
    asciiGenerated: 'ASCII藝術已產生',
    generationFailed: '產生ASCII失敗',
    presetSaved: '預設已儲存',
    presetLoaded: '預設已載入',
    presetDeleted: '預設已刪除',
    invalidImage: '無效的圖像格式或損壞的檔案',
    imageTooBig: '圖像尺寸太大，無法轉換',
    selectOrLoad: '請選擇圖像或從URL載入',
    asciiWillDisplay: 'ASCII將在這裡顯示',
    customCharsPlaceholder: '輸入字元，從暗到亮排序...',
    tip: '調整設置後點擊"產生ASCII"按鈕來查看效果',
    drapPlaceHolder: '選擇或拖放圖片到這裡',
    noImage: '請先選擇一張圖片',
    generateAscii: '點擊"產生ASCII"按鈕轉換圖片',
    tip2: '提示：使用複製按鈕可以將ASCII藝術複製到剪貼簿，或使用下載按鈕儲存為文字檔案。'
  },
  charSets: {
    standard: '標準',
    simple: '簡單',
    blocks: '方塊',
    custom: '自訂'
  },
  settings: {
    title: 'ASCII設置',
    customCharsetLabel: '自訂字元集（從暗到亮）',
    asciiWidth: 'ASCII寬度',
    invert: '反轉顏色',
    colored: '彩色輸出',
    fontSize: '字型大小'
  },
  preview: {
    originalImage: '原始圖像',
    generatedAscii: '產生的ASCII'
  },
  article: {
    title: "圖像轉ASCII藝術：將圖片轉換為文字藝術",
    features: {
      title: "了解圖像到ASCII的轉換",
      description: "這款<strong>圖像轉ASCII轉換器</strong>是一種專門的<strong>文字藝術產生器</strong>，它利用各種ASCII字元將普通圖像轉換為藝術文字作品。這個<strong>ASCII藝術製作工具</strong>通過分析圖像中每個像素的亮度值，並根據ASCII字元的視覺密度將它們映射到相應的字元上。<br><br>與基礎的<strong>文字藝術創建器</strong>不同，我們的工具提供全面的自訂選項，包括可調整的寬度、多種字元集、色彩保留和反轉控制。這個<strong>ASCII圖像轉換器</strong>支援各種圖像格式，如JPG、PNG和GIF，確保與大多數圖像來源相容。對於數位藝術家、程式設計師和創意內容創作者，這個<strong>圖片轉文字轉換器</strong>提供了一種獨特的方式，可以用基於文字的格式表示視覺內容，這些格式可以輕鬆共享、嵌入文件或在無法顯示圖像的環境中使用。",
      useCases: {
        title: "ASCII藝術的實際應用場景",
        items: [
          "<strong>創意訊息傳遞</strong>：用獨特的<strong>ASCII圖片</strong>增強電子郵件簽名、社交媒體貼文或訊息應用程式通信，讓它們從普通文字或圖像中脫穎而出",
          "<strong>程式設計專案</strong>：將ASCII藝術整合到命令列介面、終端應用程式或基於文字的遊戲中，添加視覺元素而無需實際的圖像渲染能力",
          "<strong>教育材料</strong>：為教育內容創建可存取的視覺表示，特別適用於在可能不支援標準圖像的環境中教授概念",
          "<strong>數位藝術專案</strong>：通過將照片轉換為<strong>基於文字的藝術作品</strong>，開發獨特的藝術表達，探索視覺藝術與排版之間的交叉點",
          "<strong>傳統系統內容</strong>：為老舊電腦系統、純文字顯示或圖形能力有限的環境產生視覺內容，這些環境無法渲染標準圖像",
          "<strong>ASCII動畫創建</strong>：將視頻幀或連續圖像轉換為ASCII幀，為創意專案、網站或終端應用程式創建基於文字的動畫"
        ]
      }
    },
    faq: {
      title: "關於ASCII藝術轉換的常見問題",
      items: [
        {
          question: "什麼類型的圖像最適合轉換為ASCII藝術？",
          answer: "高對比度、主體清晰和相對簡單構圖的圖像往往能產生最有效的ASCII藝術。光線良好的人像照片、剪影和輪廓分明的圖像在通過我們的ASCII藝術產生器處理時通常會產生最佳效果。雖然該工具可以處理任何圖像格式（JPG、PNG、GIF、WebP），但內容特性比檔案格式更重要。避免使用背景非常繁忙、對比度低或在轉換過程中可能丟失的精細細節的圖像。為了獲得最佳的文字藝術轉換效果，考慮在將圖像上傳到ASCII轉換器之前對其進行預處理，以增強對比度並簡化複雜區域。"
        },
        {
          question: "如何控制ASCII藝術中的細節級別？",
          answer: "在我們的圖像轉ASCII轉換器中，可以通過幾個設置來調整ASCII文字藝術中的細節級別。寬度參數是最重要的——更高的寬度值（最多200個字元）會創建更詳細的ASCII圖像，具有更精細的精度，而較低的值會產生更寬泛、細節更少的表示。字元集選擇也會影響細節——'標準'和'方塊'集提供更多的漸變，可能比'簡單'集提供更好的細節。為了最大程度的控制，使用自訂字元集選項基於字元的視覺密度定義自己的字元序列。此外，反轉選項有時可以通過反轉亮度映射來改善某些類型圖像的細節，而字型大小設置會影響最終ASCII圖片在螢幕上的顯示方式。"
        },
        {
          question: "為什麼我的ASCII藝術看起來變形或拉伸？",
          answer: "ASCII藝術可能看起來拉伸，因為標準文字字元的高度大於寬度，從正方形像素轉換時會創建一個寬高比不平衡。我們的ASCII轉換器自動應用校正因子來補償這種字元寬高比差異，但根據用於顯示結果的字型，仍可能看到一些失真。如果您的ASCII圖像看起來垂直壓縮過多或水平拉伸，請嘗試調整寬度設置或使用等寬字型（如Courier New、Consolas或Monaco）查看結果，這些字型的字元具有更一致的尺寸。使用'方塊'字元集也可以幫助創建更協調的輸出，因為這些Unicode字元比標準ASCII字元更好地保留空間關係。"
        },
        {
          question: "我可以用這個工具創建彩色ASCII藝術嗎？",
          answer: "是的，我們的圖像轉ASCII轉換器提供了一個色彩輸出選項，可以保留原始圖像中的顏色。當您啟用'彩色輸出'設置時，ASCII文字產生器將分析每個像素的亮度和顏色信息，將它們映射到ASCII字元的同時保留相應的顏色值。這會創建一個生動的彩色ASCII圖片，而不是單色文字藝術。彩色輸出是作為帶有內聯樣式的HTML產生的，以保留顏色信息，這意味著您可以複製並在HTML文件中使用它，但對於純文字應用程式，您需要使用標準的非彩色輸出。請注意，顏色保留在具有明顯色彩區域的圖像上效果最佳，而不是細微的漸變。"
        },
        {
          question: "如何分享或使用我產生的ASCII藝術？",
          answer: "使用我們的文字藝術製作器產生ASCII藝術後，您有幾種方式分享或使用您的創作。對於純文字ASCII藝術，只需使用複製按鈕將整個輸出複製到剪貼簿，然後貼上到電子郵件、文件、社交媒體貼文或任何文字欄位中。對於彩色ASCII藝術，您需要使用下載選項將結果儲存為HTML檔案，可以在任何網路瀏覽器中查看或嵌入網站。您也可以對產生的結果進行截圖，以圖像形式分享。對於程式設計專案，複製純文字輸出並將其作為字串常量整合到代碼中。請記住，等寬字型將正確顯示您的ASCII圖片，而比例字型可能會扭曲字元的對齊，破壞視覺效果。"
        }
      ]
    },
    guide: {
      title: "從圖像創建ASCII藝術的分步指南",
      steps: [
        "<strong>選擇圖像</strong>：點擊<strong>ASCII藝術產生器</strong>介面頂部的'選擇圖片'按鈕。從您的設備中選擇您想要轉換的照片或圖形。為獲得最佳效果，選擇對比度良好且主體清晰的圖像。",
        "<strong>調整寬度設置</strong>：使用設置面板中的滑塊設置所需的ASCII寬度。請記住，較高的值（接近200）將創建更詳細但更大的<strong>文字圖片</strong>，而較低的值會產生更簡單、更緊湊的結果。",
        "<strong>選擇字元集</strong>：從可用的字元集選項（標準、簡單、方塊或自訂）中選擇。每個集合都會產生不同風格的<strong>ASCII圖像</strong>。如果選擇'自訂'，您可以輸入自己的字元，按從暗到亮的順序排列。",
        "<strong>配置其他選項</strong>：決定是否反轉顏色（這有時可以提高在白色背景上的可讀性）、啟用彩色輸出（以保留原始圖像顏色）並調整字型大小以滿足顯示需求。",
        "<strong>產生ASCII藝術</strong>：點擊'產生ASCII'按鈕，通過<strong>文字藝術轉換器</strong>處理您的圖像。算法將分析您的圖像，並根據您的設置創建相應的ASCII表示。",
        "<strong>預覽和完善</strong>：在結果面板中查看產生的<strong>ASCII藝術作品</strong>。如果您對結果不滿意，請調整設置並再次產生。嘗試不同的字元集或寬度值，以達到所需的細節級別。",
        "<strong>儲存或分享您的創作</strong>：一旦您對<strong>ASCII圖片</strong>滿意，使用複製按鈕將其複製到剪貼簿，或使用下載按鈕將其儲存為文字檔案。對於彩色ASCII藝術，將其下載為HTML檔案以保留顏色信息。"
      ]
    },
    conclusion: "圖像轉ASCII轉換器將普通圖片轉變為非凡的文字藝術，架起了視覺與文字媒體之間的橋樑。這個強大的ASCII藝術製作工具不僅提供了創意渠道，還在數位通信、程式設計、教育和藝術領域有著廣泛的實際應用。通過將標準圖像轉換為ASCII格式，用戶可以在不支援傳統圖像的環境中表達視覺概念，或創建照片內容的獨特藝術詮釋。無論您是希望給數位通信增添個性、解決相容性挑戰，還是探索基於文字的圖像藝術可能性，這個ASCII圖片產生器都提供了您所需的自訂工具和輸出選項。隨著數位通信的不斷發展，將圖像轉換為文字藝術的能力在實際問題解決和創意表達方面仍然具有重要價值。"
  }
}