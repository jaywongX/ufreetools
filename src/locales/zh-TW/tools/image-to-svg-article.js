export default {
    title: '圖片轉SVG線上：點陣圖向量化與SVGZ壓縮全指南',
    logoAlt: '圖片轉SVG線上工具產品圖片',
    functionTitle: '什麼是圖片轉SVG工具？它如何幫助你快速向量化點陣圖',
    intro: '我們的<strong>圖片轉SVG線上工具</strong>採用開源演算法在瀏覽器本地執行，將PNG、JPG、GIF、BMP等點陣圖即時轉換為可縮放的<strong>SVG向量圖</strong>，同時支援匯出<strong>壓縮SVGZ</strong>。無需上傳伺服器、即時預覽、參數可調，幫助你在設計、開發與印刷場景中獲得乾淨、可編輯的向量路徑。憑藉高效的顏色量化和路徑優化，該<strong>圖片轉SVG線上</strong>解決方案為你的跨平台工作流程提供強大支援。',

    useCasesTitle: '圖片轉SVG線上工具的典型應用場景',
    useCases: [
        '將Logo、圖示、平面插畫快速向量化，便於縮放與編輯',
        '把掃描的手繪線稿轉換成SVG路徑，適合後續上色與排版',
        '為網頁與小程序生成體積更小的向量圖，優化載入與SEO',
        '將點陣圖匯出為SVGZ壓縮格式，進一步減少體積用於行動端',
        '把透明背景PNG向量化，保留邊緣與透明資訊的視覺效果',
        '將靜態GIF幀向量化（首幀），用於圖形再設計與動畫',
        '用於雷射雕刻、CNC、切割機等需要SVG路徑的製造場景'
    ],

    tipTitle: '專業提示：',
    tipContent: '在<strong>圖片轉SVG線上</strong>時，適當減少顏色數量與提高路徑忽略閾值（pathomit）能有效降低雜訊；同時開啟線條過濾（linefilter）更有利於線稿與圖示獲得平滑路徑。',

    conclusion: '選擇我們的<strong>圖片轉SVG線上工具</strong>，你可以在瀏覽器本地完成向量化、預覽、編輯與匯出，避免上傳隱私資料。透過標準<strong>SVG</strong>與<strong>SVGZ</strong>匯出，這一<strong>圖片轉SVG線上</strong>流程既適配設計與Web開發，也適合製造場景路徑處理。',

    faqTitle: '常見問題解答（FAQ）',
    faqs: [
        {
            question: '圖片轉SVG線上工具如何實現向量化？',
            answer: '本工具基於開源演算法在瀏覽器本地執行顏色量化、邊緣檢測與路徑擬合，將點陣圖轉換為可編輯的SVG路徑。整個過程無需上傳伺服器，真正實現<strong>圖片轉SVG線上</strong>與隱私保護。'
        },
        {
            question: '能否匯出壓縮的SVGZ？圖片轉SVG線上是否支援？',
            answer: '可以。你可以在匯出選項中選擇<strong>SVGZ</strong>，我們會在本地對SVG字串進行GZIP壓縮，輸出更小體積的檔案，適用於行動端與弱網場景的<strong>圖片轉SVG線上</strong>需求。'
        },
        {
            question: '透明背景PNG向量化效果如何？',
            answer: '工具會對透明像素進行合理近似並保持邊緣視覺，適用於Logo、圖示等<strong>圖片轉SVG線上</strong>場景。你也可以透過降低顏色數量與增加pathomit優化結果。'
        },
        {
            question: '支援哪些輸入格式進行圖片轉SVG線上？',
            answer: '我們支援PNG、JPG、GIF、BMP與WEBP等常見格式（GIF取首幀），可透過拖曳、點擊上傳或剪貼簿直接匯入，實現高效的<strong>圖片轉SVG線上</strong>工作流程。'
        }
    ],

    tutorialTitle: '如何使用圖片轉SVG線上工具（詳細步驟）',
    step1: {
        title: '上傳或貼上圖片',
        description: '點擊上傳區域或直接<strong>拖曳</strong>檔案進入；同時支援<strong>剪貼簿</strong>貼上圖片。推薦使用清晰的源圖，以便獲得更高品質的向量路徑。',
        note: '支援PNG/JPG/GIF/BMP/WEBP，多圖將進入批次佇列。'
    },
    step2: {
        title: '預覽輸入並檢查透明背景',
        description: '在左側預覽區確認匯入檔案是否正確；對於<strong>透明背景PNG</strong>，可先觀察邊緣與透明區域是否符合預期。',
        note: '你可以刪除誤選圖片，保持佇列乾淨。'
    },
    step3: {
        title: '調整向量化參數',
        description: '根據影像特徵調整<strong>顏色數量</strong>、<strong>ltres</strong>、<strong>qtres</strong>、<strong>pathomit</strong>與<strong>線條過濾</strong>，右側預覽會即時重新整理，幫助你在<strong>圖片轉SVG線上</strong>中獲得最佳平衡。',
        note: '線稿可增大pathomit，Logo可減少顏色獲得更乾淨的路徑。'
    },
    step4: {
        title: '執行轉換並查看對比',
        description: '點擊「開始轉換為SVG」，工具將在本地生成<strong>SVG</strong>並給出互動式預覽。透過原圖與向量圖的對比視圖，快速檢查路徑品質。',
        note: '在行動端亦可流暢查看與放大細節。'
    },
    step5: {
        title: '選擇匯出格式：SVG 或 SVGZ',
        description: '若追求最小檔案體積，選擇<strong>SVGZ</strong>；若需要進一步編輯與相容，選擇<strong>SVG</strong>。兩者均可⽤於Web與設計工具的<strong>圖片轉SVG線上</strong>成果應用。',
        note: 'SVGZ在弱網與行動端載入更友善。'
    },
    step6: {
        title: '下載或批次打包',
        description: '單獨下載每張向量圖，或使用「批次下載（ZIP）」一次性匯出佇列結果，在<strong>圖片轉SVG線上</strong>流程中節省時間。',
        note: '所有操作均在本地瀏覽器完成，保護圖片隱私。'
    },

    successTitle: '恭喜！',
    successContent: '你已掌握如何使用<strong>圖片轉SVG線上</strong>完成點陣圖向量化、參數優化與多格式匯出。',

    relatedToolsTitle: '你可能感興趣的相關工具',
    relatedTools: [
        {
            name: '圖片壓縮器',
            description: '在不明顯損失品質的情況下減小影像檔案大小。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: '圖片尺寸批次調整',
            description: '將影像調整為特定尺寸或按百分比縮放。',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: '黑白影像反轉',
            description: '一鍵反轉顏色，生成攝影負片與創意效果。',
            url: 'https://www.ufreetools.com/tool/invert-image-colors'
        },
        {
            name: 'QR碼產生器',
            description: '為URL、文字、聯絡資訊等建立自訂QR碼。',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],

    referencesTitle: '參考資源',
    references: [
        {
            name: 'SVG基礎與最佳實踐（MDN）',
            description: '瞭解SVG語法、渲染與可訪問性要點。',
            url: 'https://developer.mozilla.org/zh-TW/docs/Web/SVG'
        },
        {
            name: '色彩量化與影像向量化研究',
            description: '探索量化、邊緣檢測與路徑擬合方法的理論基礎。',
            url: 'https://zh.wikipedia.org/wiki/%E5%9C%96%E5%83%8F%E9%87%8F%E5%8C%96'
        },
        {
            name: 'Schema.org FAQPage 標記',
            description: '使用結構化資料幫助搜尋引擎理解FAQ內容。',
            url: 'https://schema.org/FAQPage'
        }
    ]
}