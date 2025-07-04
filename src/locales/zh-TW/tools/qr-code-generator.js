export default {
  name: 'QR碼生成器',
  description: '為URL、文字等生成可自訂的QR碼',
  options: {
    content: 'QR碼內容',
    contentType: '內容類型',
    errorCorrectionLevel: '錯誤校正級別',
    size: '尺寸',
    margin: '邊距',
    foregroundColor: '前景色',
    backgroundColor: '背景色',
    logo: '添加Logo',
    logoSize: 'Logo尺寸',
    cornerRadius: '圓角'
  },
  contentTypes: {
    url: '網址',
    text: '純文字',
    email: '電子郵件',
    phone: '電話號碼',
    sms: '簡訊',
    wifi: 'WiFi網路',
    vcard: '電子名片(vCard)',
    mecard: '電子名片(MeCard)'
  },
  errorLevels: {
    L: '低 (7%)',
    M: '中 (15%)',
    Q: '高 (25%)',
    H: '最高 (30%)'
  },
  actions: {
    generate: '生成QR碼',
    download: '下載',
    downloadSVG: '下載SVG',
    downloadPNG: '下載PNG',
    copy: '複製圖像',
    clear: '重置',
    uploadLogo: '上傳Logo'
  },
  templates: {
    title: '快速模板',
    confirmReplace: '確定要替換當前內容嗎？',
    confirm: '確認',
    cancel: '取消',
    url: {
      name: '網址連結'
    },
    email: {
      name: '電子郵件地址'
    },
    phone: {
      name: '電話號碼'
    },
    sms: {
      name: '簡訊'
    },
    wifi: {
      name: 'Wi-Fi設定',
      example: {
        ssid: '網路名稱',
        password: '密碼'
      }
    },
    geo: {
      name: '地理位置'
    }
  },
  appearance: {
    title: '外觀設定'
  },
  preview: {
    title: '預覽',
    generating: '生成中...',
    clickGenerateButton: '點擊"生成QR碼"按鈕',
    clickToDownload: '點擊下載QR碼'
  },
  tips: {
    title: '提示',
    saveToPrint: '生成的QR碼可以保存為圖片，用於列印或分享。',
    errorCorrection: '錯誤校正級別表示QR碼被部分遮擋或損壞時的可讀性。L級別容錯率最低，H級別最高但會使QR碼更複雜。'
  },
  wifi: {
    ssid: '網路名稱(SSID)',
    password: '密碼',
    encryption: '加密方式',
    hidden: '隱藏網路'
  },
  placeholders: {
    content: '輸入文字、連結或其他內容...'
  },
  characters: '個字元',
  maxChars: '建議不超過300字元',
  messages: {
    copied: '已複製到剪貼簿！',
    generated: 'QR碼生成成功',
    contentRequired: '請輸入QR碼內容',
    downloaded: 'QR碼已下載',
    confirmReplace: '點擊確認替換當前內容',
    contentUpdated: '內容已更新',
    changesCancelled: '已取消變更',
    invalidUrl: '請輸入有效的URL',
    invalidEmail: '請輸入有效的電子郵件地址',
    invalidPhone: '請輸入有效的電話號碼',
    logoTooBig: 'Logo檔案太大，最大檔案大小為1MB'
  },
  errors: {
    canvasNotReady: 'Canvas元素尚未準備好',
    generationError: '生成QR碼出錯',
    generationErrorWithMessage: '生成QR碼時出錯: {message}',
    downloadError: '下載QR碼時出錯: {message}'
  },
  article: {
    title: "QR碼生成器：建立和自訂快速響應碼",
    features: {
      title: "了解QR碼及其應用",
      description: "我們的<strong>QR碼生成器</strong>是一款多功能線上工具，可為各種類型的資訊建立可自訂的QR碼。與傳統條碼不同，<strong>QR碼</strong>能夠在緊湊、機器可讀的格式中儲存大量數據，可以使用智慧型手機和專用掃描器快速掃描。<br><br>這款進階<strong>QR碼製作工具</strong>支援多種內容類型，包括網址、純文字、聯絡資訊、WiFi憑證和地理座標。每個生成的碼都可以完全自訂，提供大小、顏色、糾錯級別選項，甚至可以添加徽標或修改碼的外觀，同時保持可掃描性。<br><br><strong>QR碼建立器</strong>生成的高解析度碼可以PNG或SVG格式下載，使其既適用於數位使用，也適用於在行銷材料、產品包裝或標牌上進行實體列印。",
      useCases: {
        title: "QR碼的實際應用",
        items: [
          "<strong>商業行銷</strong>：為名片、宣傳冊和促銷材料建立<strong>自訂QR碼</strong>，將潛在客戶與您的網站、特別優惠或聯絡資訊連接起來。公司可以使用融入品牌顏色和徽標的獨特風格QR碼，在提供便捷方式讓客戶存取數位內容的同時，增強品牌識別度。",
          
          "<strong>非接觸式支付</strong>：生成直接連結到支付平台或包含加密貨幣錢包資訊的<strong>支付QR碼</strong>，實現快速和非接觸式交易。這對於小型企業和街頭小販變得越來越重要，他們可以在不需要昂貴的銷售點終端的情況下接受數位支付。",
          
          "<strong>餐廳菜單</strong>：開發<strong>可掃描QR碼</strong>用於無接觸菜單存取，讓用餐者無需觸碰實體菜單即可在手機上查看菜品。餐廳可以即時更新數位菜單而無需重新列印，甚至可以包含傳統菜單上不適合的照片、詳細描述或飲食資訊。",
          
          "<strong>活動管理</strong>：為會議、音樂會或展覽建立<strong>QR碼門票</strong>和登記證，可以快速掃描進行驗證。活動組織者可以即時追蹤出席情況，減少偽造，簡化登記流程，同時最大限度地減少身體接觸。",
          
          "<strong>產品包裝</strong>：在產品上加入<strong>QR碼標籤</strong>，連結到使用手冊、設定說明、保固註冊或認證驗證。製造商可以提供廣泛的產品資訊、教學影片和支援資源，而不增加包裝尺寸或印刷成本。",
          
          "<strong>教育資源</strong>：生成連接學生到補充學習材料、互動測驗或影片演示的<strong>教育QR碼</strong>。教師可以將這些代碼放在講義或簡報中，在實體和數位學習環境之間建立橋樑，同時追蹤與特定資源的互動。"
        ]
      }
    },
    faq: {
      title: "關於QR碼的常見問題",
      items: [
        {
          question: "各種QR碼糾錯級別有什麼區別？",
          answer: "<strong>QR碼</strong>中的糾錯級別決定了碼在仍然可掃描的情況下能承受多少損壞：<br><br>• <strong>L級（低）</strong>：恢復高達7%的損壞，建立最緊湊的碼，適合受控環境<br>• <strong>M級（中）</strong>：處理高達15%的損壞，為大多數標準應用提供良好平衡<br>• <strong>Q級（四分位）</strong>：承受高達25%的損壞，推薦用於工業用途或室外展示<br>• <strong>H級（高）</strong>：容忍高達30%的損壞，最適合惡劣環境或添加徽標時使用<br><br>更高的糾錯級別會建立具有額外冗餘的更複雜<strong>QR碼圖案</strong>，這使得碼略大但在具挑戰性的條件下或自訂顏色或徽標時顯著更可靠。"
        },
        {
          question: "我可以在不破壞QR碼功能的情況下添加徽標嗎？",
          answer: "是的，您可以在保持可掃描性的同時向<strong>QR碼</strong>添加徽標，方法是遵循以下指南：<br><br>1. 建立<strong>帶徽標的自訂QR碼</strong>時使用更高的糾錯級別（最好是H級）<br>2. 保持徽標相對較小，理想情況下覆蓋中央區域不超過30%<br>3. 確保徽標與QR碼顏色有足夠對比度<br>4. 避免將徽標放在三個定位檢測圖案（角落的方塊）上<br><br>我們的<strong>QR碼生成器</strong>在您添加徽標時自動調整碼的數據密度，確保生成的碼保持完全功能。添加徽標後，務必使用多個設備測試您的QR碼，以驗證它在各種條件下是否正確掃描。"
        },
        {
          question: "我可以在QR碼中編碼哪些資訊？",
          answer: "QR碼可以編碼各種類型的資訊，使其極為多功能：<br><br>• <strong>網站URL</strong>：引導掃描者到特定網頁、登陸頁面或線上資源<br>• <strong>純文字</strong>：儲存訊息、識別碼或任何字母數字資訊（最多約4,000個字元）<br>• <strong>聯絡資訊（vCard/meCard）</strong>：分享可直接保存到手機聯絡人的完整聯絡詳情<br>• <strong>WiFi網路憑證</strong>：無需輸入密碼即可即時連接到WiFi網路<br>• <strong>電話號碼</strong>：掃描時發起呼叫<br>• <strong>簡訊</strong>：打開預填充的文字訊息<br>• <strong>電子郵件地址</strong>：向指定收件人開始新郵件<br>• <strong>地理位置</strong>：打開地圖應用到特定座標<br><br>我們的<strong>QR碼製作工具</strong>為每種內容類型提供專門模板，自動正確格式化數據，確保與大多數掃描應用程式相容。"
        },
        {
          question: "我應該列印多大的QR碼才能獲得最佳掃描效果？",
          answer: "列印<strong>QR碼</strong>的最佳尺寸取決於掃描距離：<br><br>• <strong>最小尺寸</strong>：2 × 2公分（0.8 × 0.8英寸），用於近距離掃描<br>• <strong>標準建議</strong>：3 × 3公分（1.2 × 1.2英寸），適用於典型使用場景<br>• <strong>從1-2公尺遠處掃描</strong>：10 × 10公分（4 × 4英寸）或更大<br>• <strong>廣告牌或遠距離掃描</strong>：至少30 × 30公分（12 × 12英寸）<br><br>一般經驗法則是，<strong>列印的QR碼</strong>應該至少是掃描距離的1/10。此外，始終在代碼周圍包含安靜區（空白邊距），其測量至少為單個模組（碼中最小的正方形）寬度的四倍。<br><br>我們的<strong>QR碼生成器</strong>生成高解析度SVG檔案，可以縮放到任何尺寸而不失去品質，確保您的碼無論列印尺寸如何，都保持清晰且可掃描。"
        },
        {
          question: "如何追蹤我的QR碼的掃描次數？",
          answer: "要追蹤<strong>QR碼</strong>的掃描次數並收集分析數據，您可以：<br><br>1. 使用帶追蹤功能的<strong>URL縮短器</strong>（如Bit.ly、TinyURL或Rebrandly）作為QR碼目的地，它提供掃描指標<br>2. 將QR碼指向您網站上特定的登陸頁面，透過Google Analytics或類似工具監控<br>3. 使用提供內建分析功能的專業<strong>動態QR碼</strong>服務，讓您無需建立新碼即可變更目標URL<br>4. 為每個QR碼建立唯一的UTM參數，以在分析中區分流量來源<br><br>雖然我們的<strong>QR碼生成器</strong>建立靜態碼，但您可以輕鬆實現這些追蹤策略，方法是編碼適當的追蹤URL。對於需要全面掃描分析（包括位置數據、設備資訊和掃描時間）的企業級應用，請考慮使用專用QR碼行銷平台。"
        }
      ]
    },
    guide: {
      title: "如何建立QR碼：分步指南",
      step1: "<strong>選擇內容類型</strong>：首先決定您想在QR碼中編碼的資訊。從網站URL、純文字、聯絡資訊或WiFi憑證等選項中選擇。為了更方便，您可以使用我們<strong>QR碼生成器</strong>提供的模板之一，它將根據內容類型自動正確格式化您的數據。",
      step2: "<strong>輸入您的資訊</strong>：在內容欄位中填寫必要的詳細資訊。對於URL，確保包含完整的網址，以'http://'或'https://'開頭。對於WiFi網路，提供網路名稱(SSID)、密碼和加密類型。<strong>QR碼製作工具</strong>將驗證您的輸入，確保它能被正確編碼和後續掃描。",
      step3: "<strong>自訂外觀</strong>：透過調整大小、顏色和糾錯級別等設定來個人化您的QR碼。您可以選擇不同的前景和背景顏色以匹配您的品牌，調整圓角以獲得更柔和的外觀，甚至可以在您的碼中心添加徽標。我們的<strong>QR碼建立器</strong>透過根據需要調整糾錯級別，自動確保這些自訂保持可掃描性。",
      step4: "<strong>生成並測試您的QR碼</strong>：點擊\"生成QR碼\"按鈕，基於您提供的資訊和選擇的設計選項建立您的碼。生成後，使用您的智慧型手機相機或專用QR碼掃描應用測試您的QR碼，驗證它是否正確顯示或執行預期操作。如果您已自訂外觀或添加徽標，測試特別重要。",
      step5: "<strong>下載並部署您的QR碼</strong>：在驗證您的QR碼正常工作後，以您喜歡的格式下載它（用於數位使用的PNG或可縮放列印材料的SVG）。然後，您可以將<strong>QR碼圖像</strong>整合到您的行銷材料、網站、產品包裝或任何需要提供快速存取您資訊的地方。請記住，對於列印材料，SVG格式是首選的，因為它在任何大小下都能保持品質。"
    },
    conclusion: "QR碼已經改變了我們連接實體和數位世界的方式，提供了一種無縫共享資訊和吸引用戶的方法。隨著它們在各行業的日益採用，建立有效且可掃描的QR碼已成為行銷人員、企業、教育工作者和個人的一項基本技能。我們的QR碼生成器簡化了這一過程，提供了建立自訂碼的工具，這些碼在保持完美功能的同時反映您的品牌標識。無論您是連結到進階網頁內容，簡化支付流程，還是增強教育材料，QR碼都提供了一種多功能解決方案，將便利性與技術效率相結合。隨著行動技術的不斷發展，這些QR碼的重要性和應用將只會擴大，使它們在我們相互連接的世界中成為越來越有價值的資產。"
  }
}