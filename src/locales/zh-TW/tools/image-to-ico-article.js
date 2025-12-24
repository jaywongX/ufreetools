export default {
    title: '圖片轉ICO圖示工具：線上多尺寸ICO圖示生成器使用全指南',
    functionTitle: '什麼是圖片轉ICO圖示工具，它能幫你解決什麼問題？',
    intro: '我們的<strong>圖片轉ICO圖示工具</strong>是一款純前端、開源的線上ICO圖示生成器，可以將PNG、JPG、WEBP等常見圖片一鍵轉換為多尺寸ICO圖示包。工具會基於HTML5 Canvas對圖片進行高品質縮放與優化，然後生成同時包含16×16、32×32、48×48、64×64、128×128、256×256等尺寸的標準ICO檔案，非常適合作為<strong>網站favicon圖示</strong>、<strong>Windows程式圖示</strong>與<strong>資料夾ICO圖示</strong>使用。',

    useCasesTitle: '圖片轉ICO圖示工具的典型應用場景',
    useCases: [
        '為網站生成favicon.ico圖示，使網站在瀏覽器標籤和收藏夾中清晰展示品牌標識',
        '為Windows桌面程式和安裝包生成多尺寸ICO圖示，適配不同DPI和顯示縮放',
        '為檔案總管中的資料夾自訂ICO圖示，快速區分專案與文件類型',
        '將品牌Logo批次轉換為標準ICO圖示，用於內部系統、運維工具或測試環境',
        '為Electron、Tauri等桌面應用程式建置流程生成所需ICO圖示資源',
        '為開發者提供統一的圖示輸出，避免手動處理多尺寸PNG和ICO打包',
        '將設計師提供的高解析度PNG圖示轉換為網站favicon和桌面ICO圖示',
        '在不依賴後端服務的前提下，本機安全地完成圖片轉ICO圖示的整個流程'
    ],

    tipTitle: '專業小貼士：',
    tipContent: '在使用圖片轉ICO圖示工具時，建議上傳方形、高解析度的PNG透明圖示（如512×512或1024×1024），這樣生成出來的多尺寸ICO圖示在16×16和32×32等小尺寸下也能保持清晰銳利。',

    conclusion: '<strong>圖片轉ICO圖示工具</strong>非常適合前端開發者、獨立開發者、網站站長和設計師快速生成圖示資源。透過線上圖片轉ICO圖示工具，你可以在瀏覽器本機完成多尺寸圖示生成，避免安裝複雜的桌面軟體，同時保證網站favicon圖示和Windows ICO圖示在各類設備上都能清晰呈現。',

    faqTitle: '圖片轉ICO圖示工具常見問題解答',
    faqs: [
        {
            question: '圖片轉ICO圖示工具支援哪些輸入格式？',
            answer: '我們的<strong>圖片轉ICO圖示工具</strong>支援PNG、JPG、JPEG和WEBP等常見圖片格式，其中推薦使用帶透明通道的PNG圖片進行線上圖片轉ICO圖示操作，這樣生成的ICO圖示邊緣更平滑、背景更自然。'
        },
        {
            question: '線上圖片轉ICO圖示工具能生成哪些尺寸的ICO？',
            answer: '預設情況下，<strong>線上圖片轉ICO圖示工具</strong>會生成包含16×16、32×32、48×48、64×64、128×128、256×256多種尺寸的ICO圖示，你也可以根據需求勾選或關閉部分尺寸，靈活訂製網站favicon圖示和Windows多尺寸ICO圖示包。'
        },
        {
            question: '使用圖片轉ICO圖示工具生成的ICO檔案可以直接作為網站favicon嗎？',
            answer: '是的，使用<strong>圖片轉ICO圖示工具</strong>生成的ICO檔案可以直接命名為favicon.ico並放置在網站根目錄，或透過HTML &lt;link rel="icon"&gt; 標籤引用，瀏覽器會自動從多尺寸ICO圖示包中選擇合適的尺寸展示網站favicon圖示。'
        },
        {
            question: '線上圖片轉ICO圖示工具是否完全在瀏覽器本機運行？',
            answer: '我們的<strong>線上圖片轉ICO圖示工具</strong>是純前端實現，所有圖片轉ICO圖示的處理過程均在瀏覽器本機完成，不會上傳到伺服器，因此適合對隱私與安全要求較高的圖示製作場景。'
        },
        {
            question: '圖片轉ICO圖示工具生成的ICO是否適配高解析度和高DPI螢幕？',
            answer: '當你在<strong>圖片轉ICO圖示工具</strong>中勾選64×64、128×128、256×256等尺寸時，生成的多尺寸ICO圖示會同時包含適配高DPI和4K螢幕的圖示資源，從而讓網站favicon和Windows ICO圖示在高分屏上保持清晰細膩。'
        }
    ],

    tutorialTitle: '如何使用線上圖片轉ICO圖示工具（圖文教學）',
    steps: [
        {
            title: '步驟一：上傳準備轉換的圖片',
            description: '首先開啟<strong>圖片轉ICO圖示工具</strong>頁面，在輸入區域點擊上傳按鈕或將圖片直接拖放到指定區域。工具支援PNG、JPG、JPEG和WEBP等格式，建議優先使用方形高解析度PNG圖示，以便後續線上圖片轉ICO圖示時獲得最佳清晰度。',
            note: '如果你暫時沒有合適圖片，可以使用工具內建的範例圖片快速體驗圖片轉ICO圖示工具的完整流程。'
        },
        {
            title: '步驟二：確認預覽並檢查圖片比例',
            description: '上傳完成後，工具會在預覽區域展示原始圖片縮圖。此時請檢查圖片是否為正方形、主體是否居中，如果不是，你可以返回設計工具進行裁剪後重新上傳，以保證圖片轉ICO圖示工具生成的各尺寸ICO圖示在小圖示下依然清晰可辨。',
            note: '如果發現上傳錯誤的圖片，可以點擊清除按鈕重新選擇合適的圖示圖片。'
        },
        {
            title: '步驟三：選擇ICO圖示尺寸與平台預設',
            description: '接下來，在「圖示尺寸配置」區域選擇你希望生成的尺寸。線上圖片轉ICO圖示工具預設勾選16×16、32×32、48×48、64×64、128×128、256×256全套尺寸，你也可以根據需求勾選「Windows圖示套件」或「網站Favicon套件」等預設，讓工具自動為對應平台生成最合適的多尺寸ICO圖示組合。',
            note: '如果你只為網站生成favicon.ico，一般勾選16×16與32×32即可；若為桌面程式或高分屏設備，建議保留全部預設尺寸。'
        },
        {
            title: '步驟四：一鍵生成多尺寸ICO圖示',
            description: '確認圖片和尺寸配置無誤後，點擊<strong>「生成ICO圖示」</strong>按鈕，線上圖片轉ICO圖示工具會在瀏覽器本機自動完成圖片縮放、透明背景處理以及多尺寸ICO圖示打包過程。整個圖片轉ICO圖示過程無需任何伺服器參與，速度快且安全可靠。',
            note: '在生成過程中請稍候片刻，具體時間取決於圖片解析度和瀏覽器效能。'
        },
        {
            title: '步驟五：預覽ICO圖示效果並下載',
            description: '生成完成後，你會在輸出區域看到ICO圖示的即時預覽。此時你可以直觀地查看多尺寸ICO圖示在不同解析度下的整體效果，確認無誤後點擊<strong>「下載ICO圖示」</strong>按鈕，將生成的icon-multi-size.ico檔案儲存到本機，用於網站favicon或Windows圖示設定。',
            note: '如果預覽效果不理想，可以返回上方重新上傳圖片或調整圖示尺寸配置，再次使用圖片轉ICO圖示工具生成新的ICO圖示。'
        },
        {
            title: '步驟六：在網站或系統中應用ICO圖示',
            description: '最後，你可以透過<strong>圖片轉ICO圖示工具</strong>生成的ICO檔案應用到實際專案中：例如將檔案命名為favicon.ico放在網站根目錄，或在Windows快捷方式屬性中選擇ICO檔案作為自訂圖示。這樣，你就完成了從普通圖片到多尺寸ICO圖示的線上轉換與實際部署全過程。',
            note: '有關favicon配置的更多細節，可參考主流瀏覽器對網站圖示的支援規範，確保圖片轉ICO圖示工具生成的圖示在各平台均能被正確識別。'
        }
    ],

    successTitle: '恭喜，你已經學會高效使用圖片轉ICO圖示工具！',
    successContent: '透過上述步驟，你已經掌握了如何使用我們的線上圖片轉ICO圖示工具，從上傳圖片、配置尺寸到生成並下載多尺寸ICO圖示包的完整流程。現在就將它應用到你的網站favicon、Windows程式圖示或桌面捷徑中，讓統一而專業的ICO圖示為你的產品提升辨識度。',

    relatedToolsTitle: '你可能感興趣的相關圖片和圖示工具',
    relatedTools: [
        {
            name: '圖片壓縮器',
            description: '在不明顯損失畫質的前提下壓縮PNG、JPG等圖片體積，便於與圖片轉ICO圖示工具配合使用。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: '圖片批次調整尺寸工具',
            description: '將多張圖片批次縮放到統一尺寸，為後續線上圖片轉ICO圖示或其他格式轉換打好基礎。',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: '印章生成器',
            description: '線上生成公司公章、個人印章等圖形，可與圖片轉ICO圖示工具搭配使用，製作個性化圖示。',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        },
        {
            name: '二維碼生成器',
            description: '為網址、文字或應用下載頁生成二維碼，可與網站favicon及ICO圖示統一品牌視覺形象。',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],

    referencesTitle: '更多關於ICO圖示與網站favicon的參考資源',
    references: [
        {
            name: 'ICO（圖示檔案格式）介紹 - 維基百科',
            description: '了解ICO圖示檔案格式的結構、歷史以及在Windows和瀏覽器中的應用場景。',
            url: 'https://zh.wikipedia.org/wiki/ICO'
        },
        {
            name: 'Favicon 教學與最佳實踐 - MDN Web Docs',
            description: '學習如何在網站中正確配置favicon.ico和多尺寸圖示，搭配圖片轉ICO圖示工具獲得更佳效果。',
            url: 'https://developer.mozilla.org/zh-TW/docs/Glossary/Favicon'
        },
        {
            name: '高解析度圖示與多尺寸資源設計指南',
            description: '了解在高DPI和4K螢幕環境下設計多尺寸圖示的原則，與線上圖片轉ICO圖示工具生成的多尺寸ICO圖示相結合。',
            url: 'https://learn.microsoft.com/zh-tw/windows/win32/uxguide/vis-icons'
        }
    ]
};