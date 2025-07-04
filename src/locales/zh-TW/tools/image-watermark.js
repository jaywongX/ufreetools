export default {
  name: '圖像浮水印',
  description: '為您的照片添加文字或圖像浮水印，具有可自訂設定',
  upload: {
    title: '上傳圖像',
    dropzone: '將圖像拖放到此處或點擊瀏覽',
    addMore: '新增更多圖像',
    clearAll: '清除全部',
    maxFiles: '最多{count}張圖像',
    maxSize: '每張圖像最大大小：{size}MB',
    supportedFormats: '支援的格式：JPG、PNG、WEBP、GIF'
  },
  watermarkType: {
    title: '浮水印類型',
    text: '文字浮水印',
    image: '圖像浮水印',
    both: '文字和圖像'
  },
  textWatermark: {
    title: '文字浮水印',
    text: '浮水印文字',
    font: '字體',
    size: '大小',
    color: '顏色',
    opacity: '不透明度',
    rotation: '旋轉',
    shadow: '文字陰影',
    background: '文字背景',
    padding: '內邊距',
    border: '邊框',
    spacing: '字間距'
  },
  imageWatermark: {
    title: '圖像浮水印',
    upload: '上傳浮水印圖像',
    selectLogo: '選擇標誌',
    presetLogos: '預設標誌',
    size: '大小',
    opacity: '不透明度',
    rotation: '旋轉',
    offset: '偏移'
  },
  positioning: {
    title: '定位',
    position: '位置',
    custom: '自訂位置',
    xPosition: 'X位置',
    yPosition: 'Y位置',
    tiled: '平鋪模式',
    margin: '邊距',
    scale: '隨圖像縮放'
  },
  positions: {
    topLeft: '左上',
    topCenter: '頂部居中',
    topRight: '右上',
    middleLeft: '左中',
    middleCenter: '居中',
    middleRight: '右中',
    bottomLeft: '左下',
    bottomCenter: '底部居中',
    bottomRight: '右下',
    custom: '自訂位置'
  },
  output: {
    title: '輸出',
    quality: '輸出品質',
    format: '輸出格式',
    original: '與原始相同',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    preview: '預覽',
    downloadIndividual: '下載',
    downloadAll: '下載全部',
    downloadAsZip: '下載為ZIP'
  },
  presets: {
    title: '預設',
    save: '儲存當前設定',
    load: '載入預設',
    delete: '刪除預設',
    presetName: '預設名稱'
  },
  actions: {
    apply: '套用浮水印',
    applyToAll: '套用到全部',
    reset: '重置',
    preview: '預覽',
    undo: '撤銷',
    cancel: '取消處理'
  },
  messages: {
    processing: '處理中...',
    success: '浮水印套用成功',
    error: '錯誤：{error}',
    noImages: '請先新增圖像',
    noWatermark: '請新增文字或圖像浮水印',
    presetSaved: '預設儲存成功',
    presetLoaded: '預設載入成功',
    presetDeleted: '預設已刪除',
    watermarkApplied: '浮水印已套用',
    watermarkImageLoadError: '浮水印圖片載入失敗',
    imageLoadError: '圖片載入失敗',
    resetSuccess: '已重置',
    downloadStarted: '開始下載',
    downloadError: '下載圖片失敗',
    imageLoaded: '圖片載入成功',
    canvasInitError: '畫布初始化失敗',
    tiledWatermarkError: '建立平鋪浮水印失敗'
  },
  article: {
    title: "圖像浮水印工具：保護和品牌化您的視覺內容",
    features: {
      title: "了解圖像浮水印技術",
      description: "<strong>圖像浮水印</strong>工具是為您的<strong>數位圖像</strong>添加可見所有權標記的強大解決方案。這款線上<strong>浮水印工具</strong>使您能夠套用<strong>文字浮水印</strong>和<strong>圖像浮水印</strong>來保護您的知識產權並增強您的品牌存在感。<br><br>我們的<strong>照片浮水印</strong>工具提供廣泛的自訂選項，包括不透明度控制、定位、旋轉和比例調整，以建立完美的<strong>浮水印效果</strong>。無論您需要一個微妙的<strong>版權浮水印</strong>還是一個顯眼的<strong>標誌覆蓋</strong>，此工具都提供了靈活性，無需複雜的<strong>圖像編輯軟體</strong>即可實現專業效果。",
      useCases: {
        title: "圖像浮水印的常見應用場景",
        items: [
          "攝影師新增版權資訊，防止其作品集圖像被未經授權使用",
          "企業和行銷人員在產品照片上嵌入標誌，以增強品牌標識",
          "房地產專業人士為房產圖片新增浮水印，防止未經授權的房源列表",
          "平面設計師在批准過程中保護與客戶共享的草圖設計",
          "社交媒體創作者為其視覺內容新增品牌標識，在圖片分享時增加識別度",
          "電子商務賣家為產品照片新增浮水印，阻止競爭對手使用其圖片"
        ]
      }
    },
    faq: {
      title: "關於圖像浮水印的常見問題",
      items: [
        {
          question: "文字浮水印和圖像浮水印有什麼區別？",
          answer: "文字浮水印使用自訂文字，如版權聲明或網站URL，可以用不同的字體、顏色和效果進行樣式設置。它們是顯示所有權資訊的理想選擇。圖像浮水印使用圖形，如標誌或簽名，覆蓋在您的照片上，有助於品牌識別。我們的浮水印工具支援這兩種類型，讓您可以選擇最適合您特定需求的選項，或將它們結合起來，以獲得最大程度的保護和品牌化效果。"
        },
        {
          question: "如何建立既可見又不分散注意力的浮水印？",
          answer: "要建立有效但不引人注目的浮水印，請將不透明度設置調整為30-50%之間，使其半透明。將浮水印放置在角落或沿邊緣，而不是放在主題上。對於文字浮水印，選擇與圖像形成對比的顏色，並考慮啟用平鋪浮水印模式，增加間距以獲得微妙的重複效果。這些技術確保您的浮水印為保護目的而可見，同時保持原始圖像的視覺衝擊力。"
        },
        {
          question: "浮水印能被完全從圖像中移除嗎？",
          answer: "雖然沒有浮水印是100%防移除的，但精心設計的浮水印會顯著阻止未經授權的使用。使用我們工具套用的專業浮水印——特別是那些使用戰略性放置、適當不透明度和平鋪模式的浮水印——在不降低圖像品質或需要高級技術技能的情況下很難移除。為了最大限度的保護，考慮結合使用文字和圖像浮水印，並將它們放在圖像的重要區域上，使移除嘗試更容易被注意到。"
        },
        {
          question: "浮水印工具支援哪些圖像格式？",
          answer: "我們的圖像浮水印工具支援所有主要圖像格式，包括JPG、PNG、WEBP和GIF檔案。浮水印後的輸出可以按您選擇的格式下載，當您需要保留透明度或最高品質時推薦PNG格式，而JPG格式適用於大多數一般用途，檔案大小較小。該工具在新增您自訂的浮水印的同時保留原始圖像尺寸，確保您的視覺內容具有一致的效果。"
        },
        {
          question: "我能一次建立一批浮水印圖像嗎？",
          answer: "目前，我們的浮水印工具一次處理一張圖像，以確保精確的浮水印位置和自訂。這種方法允許您單獨預覽和調整每個圖像的浮水印設置，確保針對不同構圖和配色方案獲得最佳效果。該工具的直觀界面使過程快速高效，只需點擊幾下即可建立專業浮水印圖像。"
        }
      ]
    },
    guide: {
      title: "圖像浮水印工具使用指南",
      steps: [
        "點擊工具頂部的'上傳圖像'按鈕，從您的設備中選擇要新增浮水印的照片",
        "選擇您的浮水印類型：選擇'文字浮水印'新增自訂文字，或選擇'圖像浮水印'使用標誌或其他圖形",
        "對於文字浮水印，輸入您想要的文字，選擇字體樣式，在左側面板中調整大小、顏色和不透明度設置",
        "對於圖像浮水印，使用上傳按鈕上傳您的標誌或圖形，然後根據需要調整比例和不透明度",
        "使用定位網格（有9個位置可選）選擇浮水印位置，或啟用'平鋪模式'選項在整個圖像上建立重複浮水印",
        "使用滑塊調整旋轉角度，如果需要建立對角線浮水印效果",
        "在右側面板中即時預覽您的變更，並繼續進行調整，直到對外觀滿意為止",
        "點擊'下載'按鈕，以您首選的格式將浮水印圖像儲存到您的設備"
      ]
    },
    conclusion: "為您的圖像新增專業浮水印是在當今數位環境中保護您的視覺內容和增強品牌標識的重要做法。圖像浮水印工具使這個過程變得簡單易行，讓您無需高級設計技能或昂貴的軟體即可建立自訂浮水印。無論您是攝影師、企業主還是內容創作者，將浮水印納入您的工作流程有助於保護您的知識產權，同時增強您的作品在網上傳播時的識別度。"
  }
}