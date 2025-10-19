export default {
  title: 'PDF解密工具：線上移除開啟密碼與權限限制的瀏覽器端方案',
  functionTitle: '什麼是線上PDF解密工具，什麼時候需要解密？',
  intro: '我們的<strong>線上PDF解密工具</strong>基於純前端開源技術堆疊，支援為加密的PDF提供<strong>開啟密碼（使用者密碼）</strong>以執行解密，移除列印、編輯、複製與表單填寫等權限限制。支援拖曳上傳、傳統多選、URL批次匯入與分批次新增，提供<strong>即時預覽對比</strong>與基本分析，幫助您快速驗證解密效果。解密完成後可<span style="font-weight:bold">單項下載</span>或<span style="font-weight:bold">批次打包下載 ZIP</span>。所有操作均在瀏覽器本地完成，無需上傳伺服器，保護隱私且高效。',

  useCasesTitle: 'PDF解密的常見應用場景',
  useCases: [
    '移除企業共享文件的權限限制以便內部編輯',
    '針對遺忘擁有者權限配置的文件進行合規解密',
    '恢復列印與複製能力以便校對和內容再利用',
    '為培訓資料或報告去除低解析度限制以提升輸出品質',
    '批次解密多個PDF並統一處理',
    '在行動端快速解密並預覽解密效果',
    '瀏覽器本地解密，無需上傳，保護隱私'
  ],

  tipTitle: '專業提示：',
  tipContent: '建議僅對具有合法使用授權的PDF進行解密；如需更好搜尋表現，可在中繼資料中填寫標題與關鍵詞並保持一致的命名策略（目前工具不修改PDF中繼資料）。',

  conclusion: '<strong>PDF解密線上工具</strong>可在瀏覽器端快速完成權限解除與內容恢復，適用於企業、教育機構、個人使用者等多種場景。透過提供正確的開啟密碼並執行解密，您可以在合規範圍內提升文件可用性。',

  faqTitle: '常見問題解答（FAQ）',
  faqs: [
    {
      question: '線上PDF解密工具如何工作？',
      answer: '本工具基於QPDF的解密能力，在提供<strong>開啟密碼</strong>後執行<strong>--decrypt</strong>操作，移除文件的權限限制並產生新的可用PDF。'
    },
    {
      question: '是否支援批次解密與即時預覽對比？',
      answer: '支援批次匯入與分批次新增；執行解密後可進行<strong>即時預覽對比</strong>（原始與解密後首頁），並提供單項下載按鈕與<strong>ZIP批次下載</strong>。'
    },
    {
      question: '如果PDF沒有加密，是否可以使用該工具？',
      answer: '可以。對於未加密的PDF，工具會直接輸出與原始內容一致的檔案，用於統一流程處理。'
    }
  ],

  tutorialTitle: '如何使用線上PDF解密工具',
  steps: [
    {
      title: '新增PDF檔案',
      description: '透過<strong>拖曳上傳</strong>或點擊選擇檔案（支援<strong>多選</strong>與<strong>分批次新增</strong>）；也可在「網路PDF URL批次匯入」中一次性貼上多個URL進行新增。',
      note: '建議先用範例PDF熟悉流程。'
    },
    {
      title: '提供開啟密碼（如需）',
      description: '如果PDF被加密，請在「解密密碼」中輸入<strong>開啟密碼（使用者密碼）</strong>以進行解密；若未加密可直接執行。',
      note: '密碼錯誤會導致解密失敗或預覽失敗。'
    },
    {
      title: '執行解密並預覽',
      description: '點擊「執行解密」後產生新的PDF，並在右側預覽區域對比原始與解密後的首頁。',
      note: '如預覽失敗，可能是檔案損壞或不相容。'
    }
  ],

  successTitle: '已完成！',
  successContent: '您已掌握如何使用線上PDF解密工具移除文件權限限制並驗證解密效果。',

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
    { title: 'QPDF 官方', description: 'QPDF 提供了強大的PDF結構處理能力，包括加密與解密。' },
    { title: 'PDF.js 文件', description: 'PDF.js 是瀏覽器端渲染 PDF 的開源庫，適合預覽與基本資訊讀取。' },
    { title: 'Adobe PDF 參考規範', description: 'Adobe PDF 參考文件提供了 PDF 規範細節與安全相關定義。' }
  ],

  coverAlt: '線上PDF解密工具產品頁圖片'
}