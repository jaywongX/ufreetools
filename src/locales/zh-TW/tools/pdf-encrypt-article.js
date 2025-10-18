export default {
  title: 'PDF加密工具：線上設定開啟密碼與權限的瀏覽器端解決方案',
  functionTitle: '什麼是線上PDF加密工具，如何保障文件安全？',
  intro: '我們的<strong>線上PDF加密工具</strong>採用純前端開源技術堆疊，支援<strong>AES-128/AES-256與RC4-40</strong>加密，能夠設定<strong>開啟密碼（使用者密碼）</strong>與<strong>權限密碼（擁有者密碼）</strong>，同時提供列印、編輯、複製與表單填寫等權限控制選項。支援拖曳上傳、傳統多選、URL批次匯入與分批次新增，提供<strong>即時預覽對比</strong>與基本分析，幫助您快速驗證加密效果與權限配置。加密完成後可<span style="font-weight:bold">單項下載</span>或<span style="font-weight:bold">批次打包下載 ZIP</span>。所有操作均在瀏覽器本地完成，無需上傳伺服器，兼顧隱私與高效。',

  useCasesTitle: 'PDF加密的常見應用場景',
  useCases: [
    '企業共享文件設定開啟密碼與權限控制',
    '為合約、發票等敏感PDF新增AES-256高安全加密',
    '限制列印與複製以防止未經授權傳播',
    '為線上培訓資料設定低解析度列印與有限編輯',
    '批次加密PDF並統一設定權限',
    '在行動端快速加密並預覽加密效果',
    '瀏覽器本地加密，無需上傳，保護隱私'
  ],

  tipTitle: '專業提示：',
  tipContent: '建議使用<strong>強密碼</strong>結合<strong>AES-256</strong>加密級別以獲得更高安全性；如需更好搜尋表現，可在中繼資料中填寫標題與關鍵詞並保持一致的命名策略（目前工具不修改PDF中繼資料）。',

  conclusion: '<strong>PDF加密線上工具</strong>可在瀏覽器端快速完成加密與權限配置，適用於企業、教育機構、個人使用者等多種場景。透過設定使用者密碼與擁有者密碼並選擇合適的加密演算法，您可以在確保安全的同時保持良好可用性。',

  faqTitle: '常見問題解答（FAQ）',
  faqs: [
    {
      question: '線上PDF加密工具支援哪些加密演算法？',
      answer: '本工具支援<strong>AES-128</strong>、<strong>AES-256</strong>以及相容舊版的<strong>RC4-40</strong>加密。對 128 位加密的具體演算法選擇（AES或RC4）取決於 QPDF 的配置與版本。'
    },
    {
      question: '如何設定開啟密碼（使用者密碼）與權限密碼（擁有者密碼）？',
      answer: '在「密碼保護」區域分別輸入<strong>使用者密碼</strong>與<strong>擁有者密碼</strong>；目前工具需同時提供兩者以執行加密（可在後續版本放寬為僅使用者密碼）。'
    },
    {
      question: '是否支援批次加密與即時預覽對比？',
      answer: '支援批次匯入與分批次新增；執行加密後可進行<strong>即時預覽對比</strong>（原始與加密後首頁），並提供單項下載按鈕（僅在該項加密完成後顯示）與<strong>ZIP批次下載</strong>。'
    }
  ],

  tutorialTitle: '如何使用線上PDF加密工具',
  steps: [
    {
      title: '新增PDF檔案',
      description: '透過<strong>拖曳上傳</strong>或點擊選擇檔案（支援<strong>多選</strong>與<strong>分批次新增</strong>）；也可在「網路PDF URL批次匯入」中一次性貼上多個URL進行新增。',
      note: '建議先用範例PDF熟悉流程。'
    },
    {
      title: '預覽與分析',
      description: '工具會自動渲染原始PDF首頁並在加密完成後渲染加密後的首頁用於對比；如需檢視權限效果，請在左側「權限控制」中調整並重新加密。',
      note: '如預覽失敗，可能是檔案損壞或不相容。'
    },
    {
      title: '設定密碼與權限',
      description: '在「密碼保護」中設定<strong>使用者密碼</strong>與<strong>擁有者密碼</strong>，同時檢視<strong>密碼強度</strong>提示；在「權限控制」中配置列印、編輯、複製、表單填寫權限。',
      note: '推薦選擇AES-256並使用高強度密碼。'
    }
  ],

  successTitle: '已完成！',
  successContent: '您已掌握如何使用線上PDF加密工具設定密碼與文件權限，並透過預覽對比驗證加密效果。',

  relatedToolsTitle: '您可能感興趣的相關工具',
  relatedTools: [
        {
            name: 'PDF合併器',
            description: '將多個PDF檔案合併為一個完整的PDF文件，支援跨檔案頁面重新排序。',
            url: 'https://www.ufreetools.com/tool/merge-pdf-online'
        },
        {
            name: 'PDF分割器',
            description: '將大型PDF文件分割為多個較小的PDF檔案，支援自訂分割頁面。',
            url: 'https://www.ufreetools.com/tool/pdf-splitter'
        },
        {
            name: 'PDF轉Word轉換器',
            description: '將PDF文件轉換為可編輯的Word格式，保留原始佈局和格式。',
            url: 'https://www.ufreetools.com/tool/pdf-to-word-converter'
        },
        {
            name: 'PDF轉圖片轉換器',
            description: '將PDF文件的每一頁轉換為高品質的影像檔案，支援多種輸出格式。',
            url: 'https://www.ufreetools.com/tool/pdf-to-image-converter'
        }
  ],

  referencesTitle: '參考資源',
  references: [
    { title: 'QPDF 官方', description: 'QPDF 是強大的 PDF 結構處理與加密工具，提供豐富的權限控制能力。' },
    { title: 'PDF.js 文件', description: 'PDF.js 是瀏覽器端渲染 PDF 的開源庫，適合預覽與基本資訊讀取。' },
    { title: 'Adobe PDF 參考規範', description: 'Adobe PDF 參考文件提供了 PDF 規範細節與安全相關定義。' }
  ],

  coverAlt: '線上PDF加密工具產品頁圖片'
}