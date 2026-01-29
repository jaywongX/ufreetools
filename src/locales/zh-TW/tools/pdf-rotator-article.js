export default {
    title: 'PDF旋轉器使用指南：線上PDF頁面旋轉工具',
    functionTitle: '什麼是PDF旋轉器及其用途？',
    intro: '我們的<strong>PDF旋轉器</strong>是一款強大的線上工具，可以輕鬆旋轉PDF檔案的頁面方向。無論您需要將橫向頁面轉為縱向，還是需要批次調整多個PDF檔案的頁面方向，我們的<strong>線上PDF旋轉工具</strong>都能快速高效地完成。該工具支援90°、180°、270°三種旋轉角度，可以針對單頁、多頁或整個文件進行旋轉操作，並且完全在瀏覽器中處理，保護您的檔案隱私。',
    
    useCasesTitle: 'PDF旋轉的常見應用場景',
    useCases: [
        '掃描文件時頁面方向錯誤，需要批次修正',
        '將橫向PDF頁面調整為縱向，便於閱讀和列印',
        '批次處理多個PDF檔案，統一頁面方向',
        '處理掃描的合約、發票等文件，修正頁面方向',
        '調整電子書PDF的頁面方向，提升閱讀體驗',
        '處理從手機或掃描器匯出的PDF，自動修正方向',
        '為列印準備PDF檔案，確保頁面方向正確',
        '整理PDF文件庫，統一所有檔案的頁面方向'
    ],
    
    tipTitle: '專業提示：',
    tipContent: '當處理大量PDF檔案時，建議先使用單頁預覽功能檢查旋轉效果，確認無誤後再進行批次處理。這樣可以避免重複操作，提高工作效率。',
    
    conclusion: '<strong>PDF頁面旋轉</strong>工具對辦公人員、學生、圖書管理員以及任何需要處理PDF文件的使用者特別有用。透過使用我們的PDF旋轉器，您可以快速修正掃描文件的方向問題，批次處理多個檔案，並且所有操作都在本地瀏覽器中完成，無需上傳檔案到伺服器，確保文件安全。我們的工具使PDF旋轉變得簡單高效，無需安裝任何軟體。',
    
    faqTitle: '常見問題解答',
    faqs: [
        {
            question: 'PDF旋轉會影響檔案品質嗎？',
            answer: '不會，我們的<strong>線上PDF旋轉工具</strong>使用PDF.js庫進行旋轉處理，保持原始檔案的品質和格式。旋轉操作只是改變頁面的顯示方向，不會壓縮或降低PDF的品質。所有文字、圖像和向量圖形都會保持原始清晰度。'
        },
        {
            question: '我可以同時旋轉多個PDF檔案嗎？',
            answer: '是的，我們的工具支援批次處理多個PDF檔案。您可以一次上傳多個PDF檔案，然後為每個檔案設定不同的旋轉角度和頁面範圍。處理完成後，可以單獨下載每個檔案，或使用批次下載功能將所有旋轉後的PDF打包成一個ZIP檔案。'
        },
        {
            question: '如何只旋轉PDF的某些頁面？',
            answer: '我們的工具提供了靈活的頁面選擇功能。您可以選擇「全部頁面」來旋轉整個文件，或者選擇「選擇頁面」並指定頁面範圍（例如從第3頁到第10頁）。這樣您可以只旋轉需要調整的頁面，而保持其他頁面不變。'
        },
        {
            question: '支援哪些旋轉角度？',
            answer: '我們的<strong>PDF旋轉器</strong>支援三種旋轉角度：順時針90°、180°和逆時針90°（相當於順時針270°）。這些角度足以處理大多數常見的頁面方向問題。如果需要多次旋轉，您可以連續應用旋轉操作。'
        },
        {
            question: '旋轉後的PDF檔案大小會改變嗎？',
            answer: '檔案大小可能會有輕微變化，這取決於PDF的內部結構。但通常變化很小，不會顯著影響檔案大小。我們的工具會盡量保持原始檔案的壓縮設定和結構，確保檔案大小接近原始檔案。'
        },
        {
            question: '我的PDF檔案會被上傳到伺服器嗎？',
            answer: '不會，所有處理都在您的瀏覽器本地完成。您的PDF檔案不會上傳到任何伺服器，確保文件的隱私和安全。這是純前端工具，完全在您的裝置上運行。'
        },
        {
            question: '可以處理加密的PDF檔案嗎？',
            answer: '如果PDF檔案有密碼保護，您需要先輸入密碼解鎖檔案，然後才能進行旋轉操作。對於沒有密碼保護的PDF檔案，可以直接上傳處理。'
        },
        {
            question: '處理大型PDF檔案需要多長時間？',
            answer: '處理時間取決於PDF檔案的大小和頁數。對於大多數常見的PDF檔案（小於50MB，少於100頁），處理通常在幾秒內完成。對於非常大的檔案，可能需要稍長的時間，但所有處理都在本地進行，不會受到網路速度的影響。'
        }
    ],
    
    tutorialTitle: '如何使用PDF旋轉器',
    steps: [
        {
            title: '上傳PDF檔案',
            description: '首先上傳您想要旋轉的PDF檔案。您可以將檔案<strong>拖放</strong>到上傳區域，或點擊瀏覽並從您的裝置中選擇檔案。我們的工具支援標準的PDF格式，您可以一次上傳多個檔案進行批次處理。',
            note: '支援的檔案大小取決於您的瀏覽器和裝置效能，建議單個檔案不超過100MB。'
        },
        {
            title: '預覽PDF頁面',
            description: '上傳後，您可以在預覽區域查看PDF的第一頁。使用頁面導航按鈕可以瀏覽所有頁面，了解文件內容。預覽功能幫助您確定需要旋轉的頁面和角度。',
            note: '點擊預覽區域可以放大查看頁面細節，使用滑鼠滾輪可以縮放。'
        },
        {
            title: '選擇旋轉角度',
            description: '在旋轉選項中選擇您需要的角度：<strong>順時針90°</strong>、<strong>180°</strong>或<strong>逆時針90°</strong>。您可以為每個PDF檔案設定不同的旋轉角度。',
            note: '如果需要旋轉360°（回到原方向），可以選擇180°旋轉兩次，或者選擇逆時針90°四次。'
        },
        {
            title: '選擇頁面範圍',
            description: '選擇要旋轉的頁面範圍。如果選擇「全部頁面」，整個PDF文件的所有頁面都會被旋轉。如果選擇「選擇頁面」，您可以指定起始頁和結束頁，只旋轉指定範圍內的頁面。',
            note: '頁面編號從1開始，例如「從第1頁到第5頁」表示旋轉前5頁。'
        },
        {
            title: '執行旋轉操作',
            description: '點擊<strong>「旋轉PDF」</strong>按鈕開始處理。工具會在瀏覽器中處理您的PDF檔案，旋轉指定的頁面。處理過程中會顯示進度提示，處理完成後旋轉後的PDF會出現在輸出區域。',
            note: '處理時間取決於檔案大小和頁數，請耐心等待處理完成。'
        },
        {
            title: '預覽和下載結果',
            description: '處理完成後，您可以在輸出區域預覽旋轉後的PDF。使用頁面導航查看所有頁面，確認旋轉效果符合預期。確認無誤後，點擊<strong>「下載」</strong>按鈕儲存單個檔案，或使用<strong>「批次下載」</strong>按鈕將所有處理後的PDF打包成ZIP檔案下載。',
            note: '所有處理都在您的瀏覽器中進行，因此您的PDF檔案永遠不會上傳到任何伺服器，確保隱私和安全。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的PDF旋轉器工具。現在您可以輕鬆旋轉PDF檔案的頁面方向，批次處理多個檔案，並且所有操作都在本地完成，保護您的文件安全。',
    
    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: 'PDF合併器',
            description: '將多個PDF檔案合併成一個文件，方便管理和分享。',
            url: 'https://www.ufreetools.com/tool/pdf-merger'
        },
        {
            name: 'PDF拆分器',
            description: '將一個PDF檔案拆分成多個獨立的PDF文件。',
            url: 'https://www.ufreetools.com/tool/pdf-splitter'
        },
        {
            name: 'PDF壓縮器',
            description: '減小PDF檔案大小，便於儲存和傳輸。',
            url: 'https://www.ufreetools.com/tool/pdf-compressor'
        },
        {
            name: 'PDF轉圖片',
            description: '將PDF頁面轉換為圖片格式，支援PNG、JPG等格式。',
            url: 'https://www.ufreetools.com/tool/pdf-to-image'
        }
    ],
    
    referencesTitle: '參考資源',
    references: [
        {
            name: 'PDF格式規範',
            description: '了解PDF檔案格式的技術規範和標準',
            url: 'https://www.iso.org/standard/51502.html'
        },
        {
            name: 'PDF.js官方文件',
            description: 'Mozilla開發的PDF.js庫，用於在瀏覽器中渲染PDF',
            url: 'https://mozilla.github.io/pdf.js/'
        },
        {
            name: '數位文件管理最佳實踐',
            description: '關於如何有效管理和處理數位文件的指南',
            url: 'https://zh.wikipedia.org/wiki/文檔管理系統'
        }
    ]
}
