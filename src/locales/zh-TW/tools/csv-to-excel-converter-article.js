export default {
    title: 'CSV 轉 Excel 轉換器：高保真批次轉換與多表格匯出指南',
    functionTitle: 'CSV 轉 Excel 轉換器如何解決跨系統資料互動難題？',
    intro: '<p>CSV 轉 Excel 轉換器面向資料分析、系統整合和批次匯入場景，能在瀏覽器端直接完成 CSV、TSV、TXT 等文字資料到 Excel 活頁簿的轉換。工具支援自動編碼識別、分隔符智慧檢測、多檔案批次處理、即時日誌與資料預覽，讓團隊無需安裝桌面軟體，即可快速產生符合規範的 .xlsx 成果。</p>',
    useCasesTitle: '典型應用場景',
    useCases: [
        '將電子商務平台匯出的 CSV 訂單資料轉換為 Excel 報表，方便財務審核與歸檔',
        '把日誌採集系統產生的 TSV 檔案批次轉換為多工作表 Excel 檔案，供 BI 工具分析',
        '在 CRM 或 ERP 系統上線前，將歷史 CSV 資料整理為 Excel 範本，便於批次匯入',
        '為跨部門協作準備帶格式的 Excel 檔案，讓非技術成員可以安全檢視資料',
        '在資料交付或招標投標中產生可讀性更高的 Excel 附件，滿足審計合規要求',
        '把 API 返回的 CSV 批次轉換為 Excel，結合圖表或巨集範本進行快速分析',
        '整理物聯網裝置日誌 CSV，按照裝置類型拆分為多工作表的 Excel 文件',
        '在培訓或授課場景中，將範例 CSV 資料一鍵轉換為 Excel 練習檔案'
    ],
    logoAlt: "CSV 轉 Excel 轉換器產品預覽",
    tipTitle: '專業提示：',
    conclusion: '<p>依託純前端實現的 <strong>CSV 轉 Excel 轉換器</strong>，資料工程師與業務人員可以在不上傳敏感檔案的前提下完成批次轉換、標準化命名與多工作表輸出。結合日誌記錄和編碼檢測，可最大程度避免因格式不一致導致的匯入失敗。如果需要進一步清洗或拆分資料，可搭配 <a href="https://www.ufreetools.com/tool/excel-to-csv-converter" target="_blank">Excel 轉 CSV 轉換器</a> 進行雙向轉換；若想了解 CSV 標準，建議查閱 <a href="https://tools.ietf.org/html/rfc4180" target="_blank" rel="noopener noreferrer">RFC 4180</a> 以獲取權威規範。</p>',
    faqTitle: '常見問題解答',
    faqs: [
        {
            question: 'CSV 轉 Excel 轉換器支援哪些分隔符與文字限定符？',
            answer: '<p>工具內建逗號、分號、製表符、豎線以及自訂分隔符選項，同時支援雙引號、單引號或無限定符的複雜 CSV。若選擇「自動檢測」，系統會根據前幾行資料計算最可能的分隔符組合，確保轉換後的 Excel 列數準確。</p>'
        },
        {
            question: '如何處理不同編碼的 CSV 檔案？',
            answer: '<p>我們提供自動編碼識別，並允許手動指定 UTF-8、UTF-8 BOM、UTF-16 LE、GBK 等常見編碼。若遇到特殊編碼，可先在外部工具中轉換為 UTF-8 再上傳，以保證 Excel 中的中文或符號不會出現亂碼。</p>'
        },
        {
            question: '能否把多個 CSV 檔案合併到同一個 Excel 活頁簿？',
            answer: '<p>可以。在「Excel 活頁簿設定」中勾選「合併為單個 Excel 檔案」，系統會為每個 CSV 產生一個工作表，表名可基於檔名或自訂前綴，並可附加時間戳，方便追蹤來源。</p>'
        },
        {
            question: '轉換後的 Excel 會保留 CSV 中的表頭和空行嗎？',
            answer: '<p>預設保持第一行作為表頭，同時完整保留空行、空儲存格以及原始資料順序。如需忽略表頭，可在設定中關閉「第一行包含表頭」選項，再重新執行轉換，系統會按純資料模式產生 Excel。</p>'
        },
        {
            question: '批次轉換時如何檢視過程與排查錯誤？',
            answer: '<p>每次轉換都會產生處理日誌，記錄已解析檔案、建立的工作表、行列統計以及可能出現的錯誤。您可以展開日誌面板或點擊「一鍵複製」與團隊共享，方便在程式碼部署或資料交付前排查問題。</p>'
        }
    ],
    tutorialTitle: '操作指南',
    steps: [
        {
            title: '上傳或匯入 CSV 檔案',
            description: '點擊上傳按鈕或將檔案拖曳到指定區域，支援多檔案批次處理。也可在「從 URL 匯入」中貼上公開的 CSV 連結，系統會自動抓取並加入佇列。',
            note: '單個檔案建議控制在 50MB 以內，大檔案可拆分後分批轉換。'
        },
        {
            title: '檢查自動識別結果',
            description: '系統會嘗試檢測編碼與分隔符，並展示前幾行原始資料。若識別結果與預期不符，可手動選擇編碼或分隔符，確保列數與中文字符顯示正確。',
            note: '必要時，可先在第三方工具中轉換編碼後再次上傳。'
        },
        {
            title: '設定 CSV 解析選項',
            description: '在「CSV 解析設定」裡調整分隔符、文字限定符、行結束符及表頭選項。不同語言或系統產生的 CSV 差異較大，建議根據來源系統的匯出規則進行設定。',
            note: '保持「第一行包含表頭」可在 Excel 中產生表頭行。'
        },
        {
            title: '設定 Excel 活頁簿策略',
            description: '自訂活頁簿名稱、工作表命名規則以及是否合併成一個 Excel。對於多檔案匯總的場景，可啟用「合併為單個 Excel 檔案」並新增時間戳，方便後續追蹤。',
            note: '若取消合併，工具會為每個 CSV 輸出一個獨立的 .xlsx 檔案。'
        },
        {
            title: '執行轉換並監控日誌',
            description: '點擊「轉換為 Excel」後，系統會顯示即時進度條，並在日誌中記錄解析、建表、統計等步驟。遇到錯誤會停止目前檔案的處理並在日誌中展示詳情。',
            note: '日誌支援展開、摺疊與一鍵複製，便於協作排查。'
        },
        {
            title: '下載 Excel 或批次打包',
            description: '轉換完成後，可逐個下載 Excel 檔案，或點擊「批次下載 (ZIP)」一次性取得全部成果。清單會顯示每個活頁簿的工作表名稱、檔案大小與預覽片段，方便快速核對。',
            note: '所有操作均在本機瀏覽器完成，無需上傳到伺服器，確保資料安全。'
        }
    ],
    successTitle: '完成轉換',
    successContent: '恭喜！您已學會使用 CSV 轉 Excel 轉換器，將鬆散的文字資料快速整理為結構化的 Excel 成果，用於分析、匯報或系統對接。',
    relatedToolsTitle: '相關工具推薦',
    relatedTools: [
        {
            name: 'Excel 轉 CSV 轉換器',
            description: '將 Excel 活頁簿批次匯出為 CSV，保持編碼與分隔符一致。',
            url: 'https://www.ufreetools.com/tool/excel-to-csv-converter'
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
            name: 'QR Code 產生器',
            description: '為 URL、文字、聯絡資訊等建立自訂 QR Code。',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],
    referencesTitle: '參考資源',
    references: [
        {
            name: 'RFC 4180 - CSV 標準',
            description: '了解 CSV 檔案格式的正式規範與欄位約定。',
            url: 'https://tools.ietf.org/html/rfc4180'
        },
        {
            name: 'Microsoft Excel Open XML 規格',
            description: '深入了解 .xlsx 檔案結構與相容性要求。',
            url: 'https://learn.microsoft.com/en-us/openspecs/office_standards/ms-xlsx/' 
        },
        {
            name: 'WHATWG Encoding 標準',
            description: '瀏覽器支援的文字編碼清單與實作細節。',
            url: 'https://encoding.spec.whatwg.org/'
        }
    ]
}