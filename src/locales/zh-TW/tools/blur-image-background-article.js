export default {
  title: '背景虛化模糊工具：在線 Blur Image Background 一鍵專業景深效果',
  functionTitle: '什麼是背景虛化模糊工具及其用途？',
  intro: '本工具是一款純前端的<strong>在線背景虛化模糊工具</strong>（Blur Image Background）。它結合 WebGL 濾鏡與人體分割算法，實現高斯模糊、鏡頭景深、運動模糊、徑向模糊與<b>專業相機級背景虛化</b>。支持批量處理與多格式導出，讓你在瀏覽器中快速獲得乾淨背景與突出主體的照片，適合電商主圖、證件照、社交媒體封面等場景。',
  useCasesTitle: '背景虛化的常見應用場景',
  useCases: [
    '電商主圖去干擾背景，突出產品主體',
    '人像照片背景虛化，獲得專業景深效果',
    '證件照或職場頭像，替換為純色或漸變背景',
    '社交媒體封面與短視頻封面圖快速美化',
    '演示文稿與海報設計的背景統一處理',
    '旅遊照片背景模糊以保護隱私與提升審美',
    '活動合影背景模糊並批量導出',
    'UGC 內容快速生成柔焦與徑向聚焦效果'
  ],
  tipTitle: '專業提示：',
  tipContent: '若用於人像主體，請開啟「啟用前景分割」並適當增加「邊緣羽化」，可顯著減少頭髮邊緣鋸齒。對於畫質要求高的圖片，優先導出 PNG 或 WebP 格式。',
  conclusion: '<strong>背景虛化模糊工具</strong>通過智能分割與多種模糊算法，有效解決「背景雜亂」「主體不突出」的痛點。無論是產品攝影、人像寫真還是社交內容製作，在線完成背景虛化都能顯著提升視覺聚焦與專業感。',
  faqTitle: '常見問題解答',
  faqs: [
    {
      question: '在線背景虛化模糊工具如何實現專業相機景深效果？',
      answer: '本在線背景虛化工具結合 MediaPipe 前景分割與 WebGL 濾鏡，通過對背景區域施加高斯/鏡頭/徑向/運動模糊，實現與專業相機類似的景深過渡與柔焦表現。'
    },
    {
      question: '背景替換支持哪些方式（純色/漸變/圖片）？',
      answer: '工具支持純色背景、線性漸變背景與圖片背景三種模式，並可調節背景透明度與混合模式，滿足電商主圖、證件照與品牌統一風格等需求。'
    },
    {
      question: '如何保證導出畫質並控制文件大小？',
      answer: '可選擇 PNG/JPG/WebP 等格式，並通過質量滑塊與尺寸預設控制導出大小。PNG 與 WebP 更適合對畫質要求高的背景虛化場景。'
    },
    {
      question: '批量處理與頁面排序如何使用？',
      answer: '可一次導入多圖，使用範圍選擇與勾選控制需要處理的「頁面」，支持上移/下移排序，並能跳過空白頁自動過濾無效圖片。'
    },
    {
      question: '是否需要上傳到伺服器，隱私如何保障？',
      answer: '所有背景虛化模糊處理均在瀏覽器端本地完成，不會上傳到伺服器，確保圖片隱私安全。'
    }
  ],
  tutorialTitle: '如何使用背景虛化模糊工具',
  steps: [
    {
      title: '上傳或導入圖片',
      description: '拖放或點擊上傳本地圖片，亦可粘貼剪貼板圖片、開啟攝像頭拍攝，或通過 URL 導入網路圖片。支持 PNG、JPG、WEBP、BMP 等格式。',
      note: '可一次導入多張圖片進行批量背景虛化。'
    },
    {
      title: '選擇模糊類型與參數',
      description: '在「模糊類型」中選擇高斯、鏡頭、運動或徑向等，並通過半徑、角度、中心點、焦點帶寬等滑塊微調效果。',
      note: '勾選「顯示前後對比」可以即時比較背景虛化前後。'
    },
    {
      title: '啟用前景分割與背景設置',
      description: '開啟「啟用前景分割」提升主體邊緣質量，調高「邊緣羽化」可獲得更自然的過渡。在「背景設置」選擇純色、漸變或圖片背景，必要時調整透明度與混合模式。',
      note: '當選擇「保留原始背景」時，僅對背景區域施加模糊，主體保持清晰。'
    },
    {
      title: '尺寸與質量',
      description: '在「輸出尺寸與質量」中選擇社交媒體預設或自定義尺寸，設置 JPG/WebP 質量與縮放百分比。如需打印，可提高 DPI 並按比例導出更高像素。',
      note: 'PNG 與 WebP 更適合保留細節的背景虛化場景。'
    },
    {
      title: '導出與批量下載',
      description: '為每張圖片選擇導出格式，點擊「下載」保存；多圖可使用「批量下載 (ZIP)」一次性導出全部背景虛化結果。',
      note: '處理全部在本地瀏覽器完成，圖片不會上傳伺服器。'
    },
    {
      title: '頁面控制',
      description: '通過勾選、範圍輸入和上移/下移對「頁面」排序，開啟「跳過空白頁」自動過濾亮度方差過低的無效圖片。',
      note: '範圍示例：1-3,5,7-9。'
    }
  ],
  successTitle: '恭喜！',
  successContent: '你已經學會使用我們的背景虛化模糊工具，實現專業相機級別的景深與柔焦效果，適用於多種創作與商務場景。',
  relatedToolsTitle: '您可能感興趣的相關工具',
  relatedTools: [
    {
      name: '圖片壓縮器',
      description: '在不明顯損失質量的情況下減小圖像文件大小。',
      url: 'https://www.ufreetools.com/tool/image-compressor'
    },
    {
      name: '圖片調整器',
      description: '將圖像調整為特定尺寸或按百分比縮放。',
      url: 'https://www.ufreetools.com/tool/image-batch-resizer'
    },
    {
      name: '印章生成器',
      description: '在線製作各類印章圖片，生成公司公章、私章等數字印章。',
      url: 'https://www.ufreetools.com/tool/seal-generator'
    },
    {
      name: '二維碼生成器',
      description: '為URL、文本、聯繫信息等創建自定義二維碼。',
      url: 'https://www.ufreetools.com/tool/qr-code-generator'
    }
  ],
  referencesTitle: '參考資源',
  references: [
    {
      name: 'MediaPipe Selfie Segmentation',
      description: 'Google 提供的人像前景分割模型與用法',
      url: 'https://github.com/google/mediapipe/blob/master/docs/solutions/selfie_segmentation.md'
    },
    {
      name: 'glfx.js',
      description: '基於 WebGL 的即時圖像特效庫',
      url: 'https://github.com/evanw/glfx.js'
    },
    {
      name: 'StackBlur',
      description: '快速可控的畫布模糊算法，適合作為降級方案與羽化處理',
      url: 'https://github.com/flozz/StackBlur'
    }
  ]
}