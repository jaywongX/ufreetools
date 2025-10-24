export default {
    title: 'Excel去重工具：線上表格資料去重器使用指南',
    functionTitle: '什麼是Excel去重工具及其用途？',
    intro: '我們的<strong>Excel去重工具</strong>是一款專業的線上資料處理應用，能夠智慧識別和刪除Excel表格中的重複資料。該工具支援多種檔案格式（XLSX、XLS、CSV），提供靈活的去重規則配置，包括整行去重、單列去重和多列組合去重。通過使用我們的<strong>線上Excel去重器</strong>，您可以快速清理資料，提高資料品質，支援批次處理多個檔案，並以多種格式匯出結果。',
    
    useCasesTitle: 'Excel去重工具的常見應用場景',
    useCases: [
        '清理客戶資料庫中的重複聯絡資訊',
        '合併多個Excel檔案時去除重複記錄',
        '處理調查問卷資料，刪除重複提交',
        '整理產品目錄，去除重複商品資訊',
        '清理財務資料，確保交易記錄唯一性',
        '處理員工資訊表，刪除重複員工記錄',
        '整理銷售資料，去除重複訂單',
        '清理郵件列表，刪除重複郵箱地址'
    ],
    
    tipTitle: '專業提示：',
    tipContent: '在使用Excel去重工具時，建議先備份原始資料。對於重要資料，可以先使用「預覽」功能查看去重效果，確認無誤後再進行實際去重操作。',
    
    conclusion: '<strong>Excel資料去重</strong>工具對資料分析師、業務人員、研究人員以及任何需要處理大量表格資料的人特別有用。通過使用我們的智慧去重器處理Excel資料，您可以快速識別和刪除重複記錄，提高資料品質，為後續的資料分析工作奠定堅實基礎。我們的工具使這一過程變得簡單高效，無需安裝任何軟體。',
    
    faqTitle: '常見問題解答',
    faqs: [
        {
            question: 'Excel去重工具支援哪些檔案格式？',
            answer: '我們的<strong>線上Excel去重器</strong>支援多種主流表格格式，包括XLSX（Excel 2007及以上版本）、XLS（Excel 97-2003版本）和CSV（逗號分隔值）檔案。工具會自動識別檔案格式並進行相應的解析處理。'
        },
        {
            question: '去重操作會影響原始資料嗎？',
            answer: '不會，我們的工具採用客戶端處理方式，所有資料都在您的瀏覽器中處理，不會上傳到伺服器。原始檔案保持不變，去重結果會產生新的檔案供您下載。'
        },
        {
            question: '如何設定自定義的去重規則？',
            answer: '我們的<strong>Excel資料去重</strong>工具提供三種去重模式：整行去重（完全匹配所有列）、單列去重（指定關鍵列）和多列組合去重（自定義列組合）。您還可以設定大小寫敏感、空格處理、模糊匹配等高級選項。'
        },
        {
            question: '可以同時處理多個Excel檔案嗎？',
            answer: '是的，我們的工具支援批次處理。您可以同時上傳多個Excel檔案，工具會為每個檔案單獨進行去重處理，並提供批次下載功能，將所有去重結果打包成ZIP檔案。'
        },
        {
            question: '去重後的資料可以匯出為哪些格式？',
            answer: '去重後的資料可以匯出為Excel格式（XLSX）、CSV格式和JSON格式。Excel格式會保留原始格式和樣式，CSV格式適合資料交換，JSON格式便於程式處理。'
        },
        {
            question: '工具如何處理包含公式的Excel檔案？',
            answer: '我們的工具會讀取Excel檔案中的實際值，包括公式的計算結果。如果公式引用了其他儲存格，工具會顯示公式的最終計算結果，而不是公式本身。'
        }
    ],
    
    tutorialTitle: '如何使用Excel去重工具',
    steps: [
        {
            title: '上傳Excel檔案',
            description: '首先上傳您需要去重的Excel檔案。您可以直接將檔案<strong>拖放</strong>到上傳區域，或點擊瀏覽並從您的裝置中選擇檔案。我們的工具支援XLSX、XLS和CSV格式。',
            note: '您可以一次上傳多個檔案進行批次處理。'
        },
        {
            title: '預覽和檢查資料',
            description: '上傳後，您將在預覽區域看到原始資料的表格視圖。檢查資料結構和內容，確認這是您要處理的資料。工具會自動識別表頭和資料類型。',
            note: '如果資料包含特殊字元或編碼問題，工具會自動處理。'
        },
        {
            title: '配置去重規則',
            description: '在去重規則配置區域，選擇適合的去重方式：<strong>整行去重</strong>（完全匹配所有列）、<strong>單列去重</strong>（指定關鍵列）或<strong>多列組合去重</strong>（自定義列組合）。設定大小寫敏感、空格處理等選項。',
            note: '建議先使用預覽功能查看去重效果，確認規則設定正確。'
        },
        {
            title: '執行去重操作',
            description: '點擊<strong>「開始去重」</strong>按鈕處理您的資料。工具會顯示處理進度，並在完成後展示去重統計資訊，包括原始行數、重複行數和去重後行數。',
            note: '對於大檔案，處理可能需要幾秒鐘時間，請耐心等待。'
        },
        {
            title: '查看和驗證結果',
            description: '去重完成後，您可以查看結果預覽。工具會高亮顯示重複項和保留項，幫助您驗證去重效果。您可以切換顯示模式，查看重複項或唯一項。',
            note: '使用縮放和滾動功能可以更好地查看資料細節。'
        },
        {
            title: '匯出去重結果',
            description: '選擇匯出格式（Excel、CSV或JSON），設定匯出選項（如是否包含表頭、檔案編碼等），然後點擊<strong>「下載結果」</strong>按鈕儲存去重後的資料。',
            note: 'Excel格式會保留原始格式，CSV格式適合資料交換，JSON格式便於程式處理。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的Excel去重工具。現在您可以輕鬆處理各種表格資料，快速識別和刪除重複記錄，提高資料品質。',
    
    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: 'PDF合併器',
            description: '將多個PDF檔案合併為一個完整的PDF文件，支援跨檔案頁面重新排序。',
            url: 'https://www.ufreetools.com/tool/merge-pdf-online'
        },
        {
            name: 'PDF分割器',
            description: '將大型PDF文件分割為多個較小的PDF檔案，支援自定義分割頁面。',
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
        {
            name: 'Excel資料處理最佳實踐',
            description: '瞭解Excel資料處理的專業技巧和方法',
            url: 'https://support.microsoft.com/zh-tw/excel'
        },
        {
            name: '資料品質管理指南',
            description: '關於資料品質管理和重複資料處理的專業資源',
            url: 'https://www.ibm.com/topics/data-quality'
        },
        {
            name: 'Excel函數參考',
            description: 'Microsoft Excel官方函數參考文件',
            url: 'https://support.microsoft.com/en-us/office/excel-functions-by-category-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb'
        }
    ]
}