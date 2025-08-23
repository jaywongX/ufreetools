export default {
    title: 'JSON差異對比工具',
    functionTitle: '什麼是JSON差異對比工具及其核心功能？',
    intro: '我們的<strong>JSON差異對比工具</strong>是一款專業的線上JSON檔案比較檢查器，能夠快速識別和高亮顯示兩個JSON檔案之間的差異。這款<strong>線上JSON比較工具</strong>通過智能演算法分析JSON資料結構，準確檢測新增、刪除、修改的欄位和值，為開發者提供直觀的差異可視化介面。使用我們的<strong>JSON檔案差異檢查器</strong>，您可以輕鬆進行API回應對比、配置檔案變更檢測、資料遷移驗證等工作，大幅提升開發效率和程式碼品質。',
    
    useCasesTitle: 'JSON差異對比的實際應用場景',
    useCases: [
        'API介面開發中對比不同版本的回應資料結構變化',
        '配置檔案管理中檢測環境配置的差異和變更',
        '資料庫遷移過程中驗證資料結構的一致性',
        '前端開發中對比Mock資料與真實API資料的差異',
        '微服務架構中檢查服務間資料格式的相容性',
        '版本控制中追蹤JSON配置檔案的歷史變更',
        '測試環境與生產環境資料結構的對比驗證',
        '第三方API整合時對比文檔示例與實際返回資料',
        'JSON Schema驗證和資料格式標準化檢查',
        '團隊協作中審查JSON資料結構的修改內容'
    ],
    
    tipTitle: '專業提示：',
    tipContent: '使用JSON差異對比工具時，建議先格式化JSON資料以獲得更清晰的比較結果。對於大型JSON檔案，可以啟用"僅顯示差異"選項來聚焦關鍵變更內容。',
    
    conclusion: '<strong>JSON差異檢測工具</strong>是現代軟體開發中不可或缺的實用工具。通過使用我們的線上JSON比較器，開發者可以快速定位資料結構變化，減少因資料不一致導致的bug，提高程式碼審查效率。我們的工具支援深度比較、忽略順序、自定義比較選項等高級功能，滿足各種複雜的JSON資料對比需求。',
    
    faqTitle: '常見問題解答',
    faqs: [
        {
            question: 'JSON差異對比工具如何檢測資料結構的變化？',
            answer: '我們的<strong>JSON比較檢查器</strong>採用深度遍歷演算法，逐層分析JSON物件的鍵值對結構。工具會識別四種類型的變化：新增欄位（綠色高亮）、刪除欄位（紅色高亮）、修改值（黃色高亮）和未變化欄位（灰色顯示）。對於嵌套物件和陣列，工具會遞迴比較每個層級的資料，確保不遺漏任何細微差異。'
        },
        {
            question: '這個線上JSON差異工具支援哪些比較選項？',
            answer: '我們的<strong>JSON檔案對比工具</strong>提供多種靈活的比較選項：忽略陣列元素順序、忽略字串大小寫差異、忽略空白字元、僅顯示差異內容等。這些選項幫助您根據具體需求定制比較規則，例如在API測試中忽略陣列順序，或在配置檔案比較中忽略格式差異。'
        },
        {
            question: '如何使用JSON差異檢查器進行大檔案比較？',
            answer: '對於大型JSON檔案，我們的<strong>線上JSON比較器</strong>採用了優化的演算法和渲染策略。建議啟用"僅顯示差異"選項來減少顯示內容，使用格式化功能確保資料結構清晰，並可以匯出差異報告進行離線分析。工具支援處理複雜的嵌套結構和大量資料欄位。'
        },
        {
            question: 'JSON比較工具的資料安全性如何保障？',
            answer: '我們的<strong>JSON差異對比工具</strong>完全在瀏覽器本地運行，您的JSON資料不會上傳到任何伺服器。所有的比較計算、差異分析和結果展示都在客戶端完成，確保敏感資料的安全性。這對於處理包含商業機密或個人資訊的JSON檔案尤為重要。'
        },
        {
            question: '如何匯出和分享JSON差異比較結果？',
            answer: '我們的工具提供多種結果匯出選項。您可以匯出包含差異統計和詳細變更內容的文字報告，複製比較結果到剪貼簿，或保存差異高亮的HTML格式檔案。這些功能便於在團隊中分享比較結果，或將差異報告整合到開發文檔中。'
        }
    ],
    
    tutorialTitle: '如何使用JSON差異對比工具',
    steps: [
        {
            title: '準備JSON資料',
            description: '首先準備需要比較的兩個JSON檔案或資料。您可以直接<strong>複製貼上JSON內容</strong>到左側的輸入框中，或者點擊"載入範例"按鈕查看工具的演示效果。確保JSON資料格式正確，工具會即時顯示JSON的有效性狀態。',
            note: '支援從檔案、API回應、剪貼簿等多種來源獲取JSON資料。'
        },
        {
            title: '輸入對比資料',
            description: '在左側面板的兩個文字框中分別輸入<strong>原始JSON</strong>和<strong>修改後的JSON</strong>資料。工具會自動驗證JSON語法的正確性，並顯示行數統計。如果JSON格式有誤，會顯示紅色的"無效JSON"提示。',
            note: '可以使用"格式化JSON"按鈕自動整理JSON資料的縮排和格式。'
        },
        {
            title: '配置比較選項',
            description: '根據您的比較需求，在"比較選項"區域選擇合適的設置。例如，如果您關心資料內容而不關心陣列順序，可以勾選<strong>"忽略陣列順序"</strong>選項。對於大型JSON檔案，建議啟用"僅顯示差異"來聚焦變更內容。',
            note: '不同的選項組合適用於不同的使用場景，可以根據需要靈活調整。'
        },
        {
            title: '執行差異比較',
            description: '點擊<strong>"開始比較"</strong>按鈕執行JSON差異分析。工具會快速處理資料並在右側面板顯示詳細的比較結果，包括差異統計和高亮顯示的變更內容。綠色表示新增，紅色表示刪除，黃色表示修改。',
            note: '比較過程完全在本地進行，確保資料安全和處理速度。'
        },
        {
            title: '分析差異結果',
            description: '在右側的結果面板中查看詳細的差異分析。頂部的統計資訊顯示新增、刪除、修改和未變化的欄位數量。下方的詳細差異列表展示每個變更的具體位置和內容，幫助您快速定位關鍵變化。',
            note: '可以通過滾動查看完整的差異列表，每個差異項都有清晰的路徑標識。'
        },
        {
            title: '匯出比較報告',
            description: '完成差異分析後，點擊<strong>"匯出報告"</strong>按鈕將比較結果保存為文字檔案。報告包含完整的差異統計、變更詳情和時間戳，便於存檔或與團隊成員分享。',
            note: '匯出的報告格式清晰，適合整合到開發文檔或變更記錄中。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已經掌握了JSON差異對比工具的使用方法。現在可以高效地進行JSON資料比較，快速識別資料結構變化，提升開發和測試工作的效率。',
    
    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: 'JSON格式化工具',
            description: '線上JSON格式化和壓縮工具，美化JSON資料結構。',
            url: 'https://www.ufreetools.com/tool/json-formatter'
        },
        {
            name: 'Base64編解碼',
            description: '線上Base64編碼解碼工具，支援文字和檔案格式轉換。',
            url: 'https://www.ufreetools.com/tool/base64-encoder-decoder'
        },
        {
            name: 'URL編解碼工具',
            description: '線上URL編碼解碼工具，處理特殊字元和中文URL。',
            url: 'https://www.ufreetools.com/tool/url-encode-decode'
        },
        {
            name: '線上雜湊計算器',
            description: '免費線上雜湊計算器，支援SHA-256、MD5、SHA-3、BLAKE3、SM3等多種加密與校驗演算法，適用於檔案完整性驗證、資料安全處理等場景。',
            url: 'https://www.ufreetools.com/tool/hash-calculator'
        }
    ],
    
    referencesTitle: '參考資源',
    references: [
        {
            name: 'JSON官方規範文檔',
            description: 'JSON資料交換格式的官方標準規範和語法說明',
            url: 'https://www.json.org/json-zh.html'
        },
        {
            name: 'MDN JSON文檔',
            description: 'Mozilla開發者網路提供的JSON使用指南和最佳實踐',
            url: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/JSON'
        },
        {
            name: 'RFC 7159 JSON標準',
            description: 'JSON資料交換格式的網際網路工程任務組標準文檔',
            url: 'https://tools.ietf.org/html/rfc7159'
        },
        {
            name: 'JSON Schema規範',
            description: 'JSON資料驗證和文檔化的標準規範',
            url: 'https://json-schema.org/'
        }
    ]
}