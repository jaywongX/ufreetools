export default {
  title: '仿生閱讀轉換器：Bionic Reading 線上工具（Markdown/PDF/EPUB 轉換與匯出指南）',
  functionTitle: '什麼是仿生閱讀轉換器（Bionic Reading）？能解決哪些閱讀痛點？',
  intro: '我們的<strong>仿生閱讀轉換器</strong>是一款專業的<strong>Bionic Reading 線上工具</strong>，透過對詞語前半段加粗（Fixation），並降低其餘文字的對比度（Contrast），引導視線快速聚焦關鍵資訊，減輕視覺負擔、提升專注力與閱讀速度。工具支援即時預覽、手動編輯、字體與字級自訂，並可一鍵匯入<strong>Markdown、PDF、EPUB</strong>，最終匯出為<strong>Markdown、PDF、EPUB、PNG、JPG、HTML、Word</strong>等格式，滿足學習、寫作、編輯與行動閱讀需求。透過本工具，你可以更有效率地處理長文內容，改善注意力分散與跳讀問題，成為提升工作與學習效率的高價值方案。',
  useCasesTitle: '仿生閱讀的常見應用情境',
  useCases: [
    '長篇內容精讀：論文、白皮書、技術文件的高效閱讀與重點提取',
    '行動端閱讀最佳化：在手機與平板小螢幕上更易聚焦關鍵資訊',
    '學習與備考：以 Bionic Reading 強化段落主旨與關鍵字記憶',
    '內容編輯與發布：為部落格與社群媒體生成更易讀的文本',
    '注意力支持：在疲勞或分心時維持閱讀節奏與理解力',
    '跨語言閱讀：於中英日韓等多語文本中突出詞首，減少跳詞與漏讀',
    '無障礙與可及性：依偏好調整字體/字級/對比度以提升可讀性',
    '格式工作流程：Markdown/PDF/EPUB 批註後匯出 PNG/JPG/HTML/Word'
  ],
  tipTitle: '專業提示：',
  tipContent: '為獲得更自然的仿生閱讀效果，建議將 Fixation 設於 25%–40%，Contrast 於 30%–60%；行動端可適度放大字級與行高以提升可讀性。可先用自動模式生成，再切換手動編輯微調關鍵詞。',
  conclusion: '作為功能完整的<strong>仿生閱讀轉換器</strong>與<strong>Bionic Reading 線上工具</strong>，本方案涵蓋從即時預覽、手動調整、檔案匯入到多格式匯出的全流程，適用於學習、創作、發布與知識管理。妥善設定 Fixation 與 Contrast，並搭配合適字體、字級與匯出格式，可在不同裝置與平台維持優質閱讀體驗。',

  faqTitle: '常見問題',
  faqs: [
    {
      question: '仿生閱讀轉換器（Bionic Reading 線上工具）如何運作？',
      answer: '工具遵循 Bionic Reading 核心理念：將每個詞語的前半部分加粗（Fixation），其餘文字降低對比度（Contrast），引導視線更快捕捉詞根與語義重點，減少回視與跳讀。你可先快速生成自動結果，再切換手動模式強化領域專有名詞，以獲得更清晰的重點呈現。'
    },
    {
      question: '如何把 PDF/EPUB/Markdown 轉為 Bionic Reading 並匯出？',
      answer: '點選「匯入 Markdown/文字」「匯入 PDF」「匯入 EPUB」上傳檔案，工具會在瀏覽器本地解析並即時產生仿生閱讀效果。完成調整後，選擇「匯出 Markdown、PDF、EPUB、PNG、JPG、HTML、Word」任一格式即可保存或分享。全流程本地執行，免安裝免註冊，便利且安全。'
    },
    {
      question: '仿生閱讀是否適用於中文、英文、日文與韓文？',
      answer: '是。以空白分詞的語言（如英文）會依詞處理；CJK（中/日/韓）則以連續字元片段處理，突出前段字形依然能有效引導視線。不同語言可調整 Fixation 與 Contrast，以取得最佳節奏與可讀性。'
    },
    {
      question: '是否支援複製 PNG 到剪貼簿與多格式匯出？',
      answer: '支援。可直接「將 PNG 複製到剪貼簿」，或匯出 PNG/JPG 便於社群分享與文件插圖；亦支援匯出 HTML 與 Word（.doc），方便於 CMS、簡報或辦公系統中排版編輯。'
    },
    {
      question: '仿生閱讀會影響可及性或 SEO 嗎？',
      answer: '仿生閱讀屬視覺強調，不改變原文語意。匯出 HTML 時建議保留語義化標題層級（H1/H2/H3），並維持合宜對比與字級以利可及性。網站發布時可搭配結構化資料（如 FAQPage）強化搜尋引擎理解，提升能見度與點擊率。'
    },
    {
      question: '我的文字會上傳到伺服器嗎？隱私如何保障？',
      answer: '不會。文字解析與仿生閱讀轉換皆在瀏覽器本地進行，檔案不會上傳至伺服器。匯出與剪貼簿操作同樣在本地完成，從源頭降低隱私風險。'
    }
  ],

  tutorialTitle: '如何使用仿生閱讀轉換器（步驟教學）',
  steps: {
    step1: {
      title: '輸入或匯入文件',
      description: '在左側輸入框貼上文字，或點選「匯入 Markdown/文字」「匯入 PDF」「匯入 EPUB」上傳檔案。工具會在右側即時顯示<strong>仿生閱讀</strong>預覽。',
      note: '較大的 PDF/EPUB 解析時間較長，請耐心等候處理完成。'
    },
    step2: {
      title: '調整 Fixation 與 Contrast',
      description: '拖曳滑桿設定 Fixation（詞首加粗比例）與 Contrast（非加粗部分不透明度），觀察預覽變化，尋找兼顧速度與舒適度的平衡。',
      note: '建議先以 Fixation 30%、Contrast 50% 起始，再依內容密度微調。'
    },
    step3: {
      title: '選擇字體與字級',
      description: '依閱讀情境切換字體，並適度放大字級與行高以提升可讀性；於行動或投影場景尤為明顯。',
      note: '無襯線字體通常在螢幕閱讀上更清晰。'
    },
    step4: {
      title: '切換手動編輯模式',
      description: '若需精準控制重點詞語，使用「手動編輯模式」直接在右側進行加粗或還原；亦可隨時以「從自動結果同步」回到基礎方案。',
      note: '手動編輯適合標題、副標題與專有名詞的定向強化。'
    },
    step5: {
      title: '匯出為多種格式',
      description: '完成調整後可匯出 Markdown、PDF、EPUB、PNG、JPG、HTML 或 Word（.doc）。圖片適合分享，HTML/Word 便於排版與後續編輯。',
      note: '匯出 PDF/PNG/JPG 時建議使用白底並保留留白，以確保列印與展示品質。'
    },
    step6: {
      title: '分享與複製',
      description: '使用「將 PNG 複製到剪貼簿」「複製 HTML/Markdown」快速分享至知識庫、部落格或社群平台，保留仿生閱讀的視覺強調效果。',
      note: '若平台壓縮圖片，優先分享 HTML/Markdown 以維持文字清晰度。'
    }
  },

  successTitle: '完成！',
  successContent: '你已掌握使用仿生閱讀轉換器（Bionic Reading 線上工具）的完整流程。現在即可將長文轉為更易專注的閱讀格式，並高效發布與分享。',

  relatedToolsTitle: '你可能感興趣的相關工具',
  relatedTools: [
    {
      name: '圖片壓縮器',
      description: '在不明顯降低品質的情況下減少圖片檔案大小。',
      url: 'https://www.ufreetools.com/tool/image-compressor'
    },
    {
      name: '圖片調整器',
      description: '將圖片調整為特定尺寸或按百分比縮放。',
      url: 'https://www.ufreetools.com/tool/image-batch-resizer'
    },
    {
      name: '印章產生器',
      description: '線上製作各類印章圖片，生成公司與個人數位印章。',
      url: 'https://www.ufreetools.com/tool/seal-generator'
    },
    {
      name: 'QR Code 產生器',
      description: '為網址、文字、聯絡資訊等建立自訂 QR Code。',
      url: 'https://www.ufreetools.com/tool/qr-code-generator'
    }
  ],

  referencesTitle: '參考資源',
  references: [
    {
      name: 'Bionic Reading 官方網站',
      description: '了解 Bionic Reading 的理念與實務案例',
      url: 'https://bionic-reading.com/'
    },
    {
      name: '可讀性與文字設計（Typography）',
      description: '字體、字級與版面如何影響閱讀效率的參考資料',
      url: 'https://en.wikipedia.org/wiki/Typography'
    },
    {
      name: '網站內容無障礙指引 (WCAG)',
      description: '關於對比度、語義與可及性的最佳實務',
      url: 'https://www.w3.org/WAI/standards-guidelines/wcag/'
    }
  ]
}