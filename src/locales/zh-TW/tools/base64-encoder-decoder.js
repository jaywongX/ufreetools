export default {
  name: 'Base64 編碼解碼器',
  description: '在文本和Base64編碼之間快速轉換數據',
  mode: {
    title: '模式',
    encode: '編碼',
    decode: '解碼'
  },
  input: {
    title: '輸入',
    placeholder: '輸入要處理的文本...',
    clear: '清除',
    copy: '複製',
    paste: '粘貼',
    upload: '上傳文件',
    dragDrop: '拖放文件到此處或點擊上傳',
    textOption: '文本',
    fileOption: '文件',
    hexOption: 'Hex',
    selectFile: '選中文件',
  },
  output: {
    title: '輸出',
    placeholder: '結果將顯示在這裡...',
    copy: '複製',
    download: '下載',
    empty: '暫無輸出'
  },
  options: {
    title: '選項',
    encoding: '字符編碼',
    encodings: {
      utf8: 'UTF-8',
      ascii: 'ASCII',
      iso88591: 'ISO-8859-1',
      windows1252: 'Windows-1252'
    },
    urlSafe: '使用URL安全編碼',
    autoDecode: '自動檢測並解碼',
    includeDataURI: '包含Data URI前綴',
    trimWhitespace: '去除空白字符',
    preserveLineBreaks: '保留換行符',
    addImageHeader:'添加圖片 Base64 頭',
  },
  dataUri: {
    title: 'Data URI',
    mimeType: 'MIME類型',
    common: '常用類型',
    custom: '自定義'
  },
  messages: {
    copied: '已複製到剪貼板',
    copyFailed: '複製失敗',
    pasteFailed: '粘貼失敗',
    uploadSuccess: '文件上傳成功',
    uploadFailed: '文件上傳失敗',
    readFailed: '文件讀取失敗',
    invalidBase64: '無效的Base64編碼',
    invalidHex: '無效的Hex編碼',
    fileTooLarge: '文件過大，請直接下載查看',
    processError: '處理過程中發生錯誤',
    encodeSuccess: '編碼成功',
    decodeSuccess: '解碼成功',
    processing: '處理中...'
  },
  mimeTypes: {
    'text/plain': '文本',
    'application/json': 'JSON',
    'text/html': 'HTML',
    'text/css': 'CSS',
    'text/javascript': 'JavaScript',
    'application/xml': 'XML',
    'image/jpeg': 'JPEG圖像',
    'image/png': 'PNG圖像',
    'image/gif': 'GIF圖像',
    'image/svg+xml': 'SVG圖像',
    'application/pdf': 'PDF文檔'
  },
  tips: {
    title: '使用提示',
    tip1: 'Base64編碼可以將任何二進制數據轉換為純文本格式',
    tip2: '使用URL安全選項可去除標準Base64中的"+"和"/"字符',
    tip3: '使用Data URI前綴可直接在HTML的img和其他標籤中使用編碼後的數據',
    tip4: '大型文件編碼會消耗更多資源，建議限制在2MB以內',
    tip5: '某些特殊字符可能需要使用特定的字符編碼才能正確處理'
  },
  about: {
    title: '關於Base64編解碼',
    description: 'Base64是一種基於64個可打印字符來表示二進制數據的表示方法，常用於在處理文本的場合，表示、傳輸、存儲一些二進制數據。'
  },
  features: {
    title: '功能說明',
    multiInput: '支持文本、Hex、文件三種輸入方式',
    charsetSupport: '支持UTF-8和GBK字符集解碼',
    imagePreview: '支持圖片預覽（小於1MB的圖片文件）',
    fileDownload: '支持多種格式文件下載（默認PDF格式）',
    chunkProcessing: '大文件分塊處理，實時顯示處理進度',
    autoDetect: '自動識別和預覽圖片類型'
  },
  notes: {
    title: '注意事項',
    sizeIncrease: 'Base64編碼會使數據量增加約33%',
    chunkProcessing: '大文件處理採用分塊處理，進度條分兩階段顯示',
    largeFiles: '10MB以上文件僅支持下載查看，不顯示文本內容',
    fileInput: '建議大文件使用文件方式輸入，避免在文本框中粘貼'
  },
  fileTypeLabel: {
    pdf: 'PDF文檔',
    txt: '文本文件',
    jpg: 'JPG圖片', 
    png: 'PNG圖片', 
    zip: 'ZIP壓縮包',
    bin: '二進制文件',
  },
  article: {
    title: "Base64編碼解碼器：轉換和保護您的數據",
    features: {
      title: "了解Base64編碼和解碼",
      description: "<strong>Base64編碼解碼器</strong>是一種將二進制數據和ASCII文本格式相互轉換的必備工具。這款強大的<strong>數據編碼工具</strong>可以將任何類型的二進制信息轉換為僅使用64個可打印ASCII字符（A-Z、a-z、0-9、+、/）的安全文本表示形式，非常適合通過基於文本的系統傳輸數據。<br><br>我們的<strong>Base64轉換工具</strong>支持多種輸入方法，包括文本、文件和十六進制輸入，同時提供字符編碼（UTF-8和GBK）的高級選項。在<strong>Base64解碼</strong>過程中，該工具能自動檢測圖像、文檔和歸檔文件等文件類型，為圖像提供預覽功能，並支持多種格式的文件下載。對於大文件，我們的<strong>Base64編碼器</strong>實現了高效的分塊處理，並提供實時進度可視化。",
      useCases: {
        title: "Base64編碼的常見應用場景",
        items: [
          "通過數據URI直接將圖像等二進制文件嵌入到HTML、CSS或JavaScript代碼中，實現無需外部資源的獨立網頁",
          "通過電子郵件系統或純文本協議安全傳輸二進制數據，避免非文本字符可能導致的數據損壞",
          "在僅支持文本格式的cookies、localStorage或其他Web存儲機制中存儲複雜的數據結構",
          "編碼身份驗證憑證或API令牌，用於HTTP頭部的安全傳輸（基本認證）",
          "轉換二進制文件附件，以便包含在XML、JSON或其他基於文本的數據交換格式中",
          "創建URL安全的數據字符串用於URL參數，避免需要URL編碼的特殊字符"
        ]
      }
    },
    faq: {
      title: "關於Base64編碼的常見問題",
      items: [
        {
          question: "為什麼Base64編碼後的數據比原始數據大？",
          answer: "Base64編碼會使數據大小增加約33%，因為它使用4個字節的ASCII文本來表示每3個字節的二進制數據。這是Base64編碼的基本特性，因為它每個字符只使用6位（2^6 = 64個可能的值）而不是8位。這種大小增加是獲得跨系統文本兼容性的不可避免的折衷，尤其是在只支持ASCII字符的系統中。對於大文件，在規劃存儲或傳輸需求時應考慮這種大小增加。"
        },
        {
          question: "標準Base64和URL安全Base64編碼有什麼區別？",
          answer: "標準Base64編碼使用'+'和'/'字符，這些字符在URL中具有特殊含義，當編碼數據包含在URL參數中時可能會導致問題。URL安全Base64編碼將這些字符分別替換為'-'和'_'，使編碼字符串可以安全地用於URL而無需額外轉義。我們的Base64編碼器包括生成URL安全輸出的選項，允許您根據編碼數據的使用位置選擇適當的編碼格式。"
        },
        {
          question: "Base64編碼可以用於數據加密或安全嗎？",
          answer: "不能，Base64編碼不是加密，不提供數據安全性或機密性。它只是一種將二進制數據轉換為文本格式的數據編碼方案。Base64編碼可以被任何人使用廣泛可用的工具（包括我們的Base64解碼器）輕鬆解碼。如果需要數據機密性，您應該在Base64編碼之前使用適當的加密算法（如AES、RSA）。Base64主要用於兼容性，而非安全性。"
        },
        {
          question: "如何識別Base64編碼的文本？",
          answer: "Base64編碼的文本通常具有以下特徵：它僅由字母（A-Z、a-z）、數字（0-9）和通常是字符'+'和'/'（或URL安全變體的'-'和'_'）組成；長度始終是4個字符的倍數（有時在末尾用'='填充）；它通常看起來像一個沒有自然單詞模式的隨機字符串。我們的Base64解碼器包括驗證功能，可在嘗試解碼前驗證輸入是否為有效的Base64。"
        },
        {
          question: "如果我的Base64字符串缺少填充字符會發生什麼？",
          answer: "Base64編碼有時會在末尾添加填充字符('=')，以確保字符串長度是4的倍數。雖然標準Base64規範要求這種填充，但許多現代Base64解碼器（包括我們的）可以處理缺少填充的Base64字符串，方法是根據字符串長度自動計算正確的填充。但是，為了與所有Base64解碼器實現最大兼容性，在生成Base64編碼數據時最好包含適當的填充。"
        }
      ]
    },
    guide: {
      title: "使用Base64編碼解碼器的步驟指南",
      steps: [
        "通過點擊工具界面頂部的'編碼'或'解碼'按鈕選擇所需的操作模式",
        "對於編碼，選擇您的輸入方式：'文本'用於純文本輸入，'文件'用於上傳二進制文件，或'Hex'用於十六進制字符串表示",
        "如果編碼文件，您可以選擇勾選'添加圖片Base64頭'，以包含適當的數據URI前綴，方便在Web環境中直接使用",
        "對於解碼，選擇'文本'用於Base64字符串輸入或'文件'用於上傳包含Base64數據的文本文件",
        "解碼時，您可以從下拉菜單中選擇所需的字符編碼（UTF-8或GBK），以正確處理國際字符",
        "根據所選輸入方法輸入數據或上傳文件",
        "點擊'編碼'或'解碼'按鈕處理數據 - 結果將顯示在下方的輸出字段中",
        "對於解碼的圖像，使用'顯示圖片'切換預覽結果，或使用下載選項將解碼內容保存為您喜歡的格式的文件"
      ]
    },
    conclusion: "Base64編碼解碼器是一個多功能工具，適用於需要在僅支持文本的系統間傳輸數據的各種場景。無論您是將圖像嵌入CSS的Web開發人員，通過文本協議發送二進制數據的系統工程師，還是只需要解碼您遇到的Base64字符串，這個工具都能提供高效的解決方案，並具有滿足您特定需求的高級選項。通過支持多種輸入方法、字符編碼和文件格式，我們的Base64工具有助於在當今多樣化的計算環境中連接二進制和基於文本的系統。"
  }
}