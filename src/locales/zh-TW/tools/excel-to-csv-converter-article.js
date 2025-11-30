export default {
    title: 'Excel 轉 CSV 轉換器：線上批次 Excel 檔案轉換使用指南',
    functionTitle: '什麼是 Excel 轉 CSV 轉換器及其用途？',
    intro: '我們的<strong>Excel 轉 CSV 轉換器</strong>是一款強大的線上工具，可以快速將 Excel 檔案（.xlsx 和 .xls 格式）轉換為 CSV 格式。該工具支援批次處理多個檔案、多工作表識別、自訂分隔符和編碼格式，滿足不同系統和軟體的資料匯入需求。使用我們的<strong>線上 Excel 轉 CSV 工具</strong>，您可以輕鬆處理大量資料檔案，無需安裝任何軟體，所有轉換都在瀏覽器本地完成，確保資料安全。',

    useCasesTitle: 'Excel 轉 CSV 的常見應用場景',
    useCases: [
        '將 Excel 資料匯入資料庫系統（MySQL、PostgreSQL 等）',
        '為資料分析工具（Python pandas、R 語言）準備 CSV 格式資料',
        '在網頁應用中批次匯入使用者資料或產品資訊',
        '將 Excel 報表轉換為 CSV 格式供其他系統使用',
        '處理多工作表 Excel 檔案並分別匯出為 CSV',
        '為資料遷移專案批次轉換歷史 Excel 檔案',
        '將 Excel 資料轉換為 CSV 格式進行版本控制',
        '為 API 介面準備標準化的 CSV 資料檔案'
    ],

    logoAlt: "Excel 轉 CSV 轉換器產品預覽",
    tipTitle: '專業提示：',
    tipContent: '對於包含特殊字元或換行符的資料，建議使用雙引號作為文字限定符，這樣可以確保 CSV 檔案在匯入其他系統時不會出現格式錯誤。對於中文資料，推薦使用 UTF-8 BOM 編碼，以確保在 Excel 中開啟時能正確顯示中文。',

    conclusion: '<strong>Excel 轉 CSV 轉換</strong>工具對資料分析師、開發人員、資料管理員以及需要頻繁處理 Excel 檔案的使用者特別有用。透過使用我們的轉換器，您可以快速將 Excel 資料轉換為 CSV 格式，方便在不同系統和工具之間共享資料。我們的工具支援批次處理、自訂格式設定和即時預覽，使資料轉換過程變得簡單高效，無需安裝任何軟體。',

    faqTitle: '常見問題解答',
    faqs: [
        {
            question: 'Excel 轉 CSV 轉換器支援哪些 Excel 格式？',
            answer: '我們的<strong>線上 Excel 轉 CSV 工具</strong>支援.xlsx（Office Open XML）和.xls（傳統二進位格式）兩種主要 Excel 格式。工具可以自動識別檔案格式並進行相應處理，支援多工作表 Excel 檔案，您可以選擇轉換所有工作表或指定工作表。'
        },
        {
            question: '轉換後的 CSV 檔案會保留原始資料格式嗎？',
            answer: 'CSV 格式本身不包含格式資訊（如字型、顏色、公式等），但所有資料內容都會完整保留。日期、數字和文字資料都會正確轉換。如果 Excel 儲存格包含公式，轉換器會擷取公式的計算結果值。'
        },
        {
            question: '如何處理包含特殊字元的 Excel 資料？',
            answer: '我們的工具支援自訂文字限定符（雙引號或單引號），可以正確處理包含逗號、換行符、引號等特殊字元的資料。建議在轉換包含特殊字元的資料時，選擇雙引號作為文字限定符，這樣可以確保 CSV 檔案格式正確。'
        },
        {
            question: '可以批次轉換多個 Excel 檔案嗎？',
            answer: '是的，我們的<strong>Excel 轉 CSV 批次轉換工具</strong>完全支援批次處理。您可以同時上傳多個 Excel 檔案，工具會依序處理每個檔案，並在完成後提供批次下載功能，將所有轉換後的 CSV 檔案打包成 ZIP 檔案下載。'
        },
        {
            question: '轉換後的 CSV 檔案支援哪些編碼格式？',
            answer: '我們的工具支援多種編碼格式，包括 UTF-8、UTF-8 BOM、GBK 和 ANSI。UTF-8 BOM 格式特別適合在 Excel 中開啟包含中文的 CSV 檔案，而 UTF-8 格式更適合在程式中使用。您可以根據目標系統的需求選擇合適的編碼格式。'
        },
        {
            question: '可以處理加密或受保護的 Excel 檔案嗎？',
            answer: '由於瀏覽器環境的限制，我們的工具無法處理受密碼保護的 Excel 檔案。如果您的 Excel 檔案被加密，請先使用 Excel 軟體解密後再進行轉換。對於未加密的 Excel 檔案，我們的工具可以完美處理。'
        }
    ],

    tutorialTitle: '如何使用 Excel 轉 CSV 轉換器',
    steps: [
        {
            title: '上傳 Excel 檔案',
            description: '首先上傳您想要轉換的 Excel 檔案。您可以直接將檔案<strong>拖放</strong>到上傳區域，或點擊瀏覽並從您的裝置中選擇檔案。我們的工具支援.xlsx 和 .xls 格式，可以同時上傳多個檔案進行批次轉換。',
            note: '您也可以使用「從 URL 匯入」功能，直接輸入 Excel 檔案的網路位址進行轉換。'
        },
        {
            title: '選擇工作表（可選）',
            description: '如果您的 Excel 檔案包含多個工作表，您可以在檔案列表中為每個檔案選擇要轉換的工作表。預設情況下，工具會轉換所有工作表，每個工作表會產生一個獨立的 CSV 檔案。',
            note: '對於大型 Excel 檔案，建議先選擇單一個工作表進行測試，確認轉換結果符合預期後再批次處理。'
        },
        {
            title: '設定 CSV 格式選項',
            description: '在「CSV 格式設定」區域，您可以自訂分隔符（逗號、分號、定位字元等）、文字限定符（雙引號、單引號或無）、行結束符（Windows/Unix/Mac）和編碼格式（UTF-8、UTF-8 BOM、GBK、ANSI）。這些設定會影響轉換後的 CSV 檔案格式。',
            note: '對於中文資料，建議使用 UTF-8 BOM 編碼；對於需要在 Excel 中開啟的檔案，建議使用雙引號作為文字限定符。'
        },
        {
            title: '預覽資料（可選）',
            description: '在轉換前，您可以點擊「資料預覽」查看 Excel 檔案的內容。預覽功能會顯示前幾行資料，幫助您確認檔案格式和內容是否正確。',
            note: '預覽功能可以幫助您發現資料格式問題，避免轉換後才發現錯誤。'
        },
        {
            title: '執行轉換',
            description: '點擊<strong>「開始轉換」</strong>按鈕開始處理檔案。工具會顯示轉換進度，包括當前處理的檔案、工作表和行數。轉換過程完全在瀏覽器本地進行，不會上傳資料到伺服器。',
            note: '對於大型檔案，轉換可能需要一些時間，請耐心等待。您可以在處理日誌中查看詳細的轉換過程。'
        },
        {
            title: '下載轉換結果',
            description: '轉換完成後，您可以點擊每個 CSV 檔案下方的<strong>「下載」</strong>按鈕單獨儲存，或使用頂部的<strong>「批次下載」</strong>按鈕將所有 CSV 檔案打包成 ZIP 檔案下載。檔名會根據您的設定自動產生。',
            note: '所有處理都在您的瀏覽器中進行，因此您的 Excel 檔案永遠不會上傳到任何伺服器，確保資料隱私和安全。'
        }
    ],

    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的 Excel 轉 CSV 轉換器。現在您可以輕鬆將 Excel 檔案轉換為 CSV 格式，用於資料分析、資料庫匯入或其他用途。',

    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: '仿生閱讀轉換器',
            description: '免費線上仿生閱讀轉換器，即時將文字轉換為 Bionic Reading 風格。',
            url: 'https://www.ufreetools.com/tool/bionic-reading-converter'
        },
        {
            name: '圖片調整器',
            description: '將影像調整為特定尺寸或按百分比縮放。',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: '印章產生器',
            description: '線上製作各類印章圖片，產生公司公章、私章等數位印章。',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        },
        {
            name: 'QR 碼產生器',
            description: '為 URL、文字、聯絡資訊等建立自訂 QR 碼。',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],

    referencesTitle: '參考資源',
    references: [
        {
            name: 'CSV 檔案格式規範 (RFC 4180)',
            description: '瞭解 CSV 檔案的標準格式規範和最佳實務',
            url: 'https://tools.ietf.org/html/rfc4180'
        },
        {
            name: 'Office Open XML 標準',
            description: '瞭解 Excel .xlsx 檔案格式的技術規範',
            url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-376/'
        },
        {
            name: '字元編碼標準 (Unicode)',
            description: '瞭解 UTF-8、GBK 等字元編碼標準',
            url: 'https://www.unicode.org/standard/standard.html'
        }
    ]
}