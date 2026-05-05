export default {
    title: 'STL轉3MF工具：線上3D列印格式轉換器使用指南',
    functionTitle: '什麼是STL轉3MF工具及其用途？',
    intro: '我們的<strong>STL轉3MF工具</strong>是一款專業的線上3D列印格式轉換應用，可以快速將STL（Stereo Lithography）檔案轉換為3MF（3D Manufacturing Format）格式。3MF是由3MF聯盟開發的新一代3D列印檔案格式，相比傳統STL格式，它支援顏色、材質、紋理等豐富資訊，檔案體積更小，資料完整性更好。使用我們的<strong>線上STL轉3MF轉換器</strong>，您可以批次處理多個STL檔案，設定模型單位，甚至將多個模型合併為單一3MF檔案，無需安裝任何軟體即可完成格式轉換。',

    useCasesTitle: 'STL轉3MF的常見應用場景',
    useCases: [
        '將STL格式的3D列印模型轉換為3MF格式，獲得更好的列印相容性',
        '批次轉換多個STL檔案為3MF格式，提高3D列印工作流程效率',
        '將多個STL模型合併為單一3MF檔案，方便統一管理和列印',
        '為3D列印模型設定正確的單位（毫米、公分、英吋等），避免尺寸錯誤',
        '將STL檔案轉換為3MF格式，以便在支援3MF的切片軟體中使用',
        '優化3D列印檔案大小，3MF格式通常比STL更緊湊',
        '為3D列印服務提供商準備標準化的3MF格式檔案',
        '將舊的STL模型遷移到更現代的3MF格式，便於長期存檔和管理'
    ],

    tipTitle: '專業提示：',
    tipContent: '3MF格式使用ZIP壓縮，檔案體積通常比STL小30-50%。3MF支援多種單位系統，轉換時請確保選擇正確的單位以避免列印尺寸問題。對於需要顏色和材質資訊的模型，3MF是更好的選擇。',

    conclusion: '<strong>STL轉3MF格式轉換</strong>工具對3D列印愛好者、設計師、工程師以及需要處理大量3D模型的用戶特別有用。透過使用我們的線上STL轉3MF轉換器，您可以快速統一3D列印檔案格式，優化檔案大小，提高列印相容性，或滿足特定3D列印平台對檔案格式的要求。我們的工具支援批次處理，提供單位設定和檔案合併功能，所有處理都在瀏覽器本地完成，確保您的模型資料隱私和安全。',

    faqTitle: '常見問題解答',
    faqs: [
        {
            question: 'STL轉3MF工具支援哪些STL格式？',
            answer: '我們的<strong>線上STL轉3MF轉換器</strong>支援兩種主要的STL檔案格式：二進位STL和ASCII STL。工具會自動偵測檔案格式並進行相應處理。無論是從CAD軟體匯出的STL檔案，還是從3D模型庫下載的STL檔案，都可以順利轉換為3MF格式。'
        },
        {
            question: '3MF格式相比STL有什麼優勢？',
            answer: '3MF格式相比STL有多個優勢：(1) 支援顏色、材質和紋理資訊；(2) 使用ZIP壓縮，檔案更小；(3) 資料完整性更好，不會出現STL常見的網格錯誤；(4) 支援多種單位系統；(5) 可以包含多個物件和列印參數。對於現代3D列印工作流程，3MF是更推薦的格式。'
        },
        {
            question: '轉換時如何選擇正確的單位？',
            answer: '我們的<strong>STL轉3MF工具</strong>提供了四種常用單位：毫米、公分、公尺和英吋。STL檔案本身不包含單位資訊，因此需要您根據原始模型的設計單位來選擇。如果不確定，毫米是最常用的3D列印單位。選擇錯誤的單位可能導致列印尺寸偏差。'
        },
        {
            question: '可以將多個STL檔案合併為一個3MF檔案嗎？',
            answer: '可以！我們的工具支援將多個STL檔案合併為單一3MF檔案。勾選「合併所有STL為單一3MF檔案」選項後，工具會自動將所有上傳的STL模型合併到一個3MF檔案中。每個模型會自動偏移以避免重疊，方便您在切片軟體中統一處理。'
        },
        {
            question: '轉換後的3MF檔案可以在哪些軟體中使用？',
            answer: '3MF格式被主流3D列印切片軟體廣泛支援，包括Cura、PrusaSlicer、Simplify3D、3D Builder（Windows）等。轉換後的3MF檔案可以直接匯入這些軟體進行切片和列印準備。越來越多的3D列印服務提供商也開始支援3MF格式。'
        },
        {
            question: '轉換過程是否安全？檔案會上傳到伺服器嗎？',
            answer: '完全安全！我們的工具採用純前端技術，所有檔案處理都在您的瀏覽器本地完成。您的STL檔案不會上傳到任何伺服器，確保隱私和資料安全。您可以放心處理包含商業機密或個人設計的3D模型檔案。'
        },
        {
            question: '轉換後的3MF檔案大小會變化嗎？',
            answer: '通常會變化。3MF格式使用ZIP壓縮，檔案大小通常比STL小30-50%。對於二進位STL檔案，壓縮效果可能更明顯。對於ASCII STL檔案，由於其本身是文字格式，壓縮效果會更顯著。具體的檔案大小取決於模型的複雜度和三角面數量。'
        }
    ],

    tutorialTitle: '如何使用STL轉3MF工具',
    steps: [
        {
            title: '上傳STL檔案',
            description: '首先上傳您想要轉換為3MF格式的STL檔案。您可以透過<strong>拖拽檔案</strong>到上傳區域，或<strong>點擊瀏覽</strong>選擇檔案。我們的工具支援二進位和ASCII兩種STL格式，您可以一次上傳多個檔案進行批次處理。',
            note: '支援同時上傳多個STL檔案，工具會自動識別格式並處理。'
        },
        {
            title: '設定轉換參數',
            description: '在左側控制面板中，設定<strong>模型名稱</strong>（可選）和<strong>模型單位</strong>。如果需要將多個STL合併為一個3MF檔案，勾選「合併所有STL為單一3MF檔案」選項。選擇正確的單位非常重要，以確保列印尺寸準確。',
            note: '如果不確定單位，通常選擇毫米（mm）是最安全的選擇。'
        },
        {
            title: '轉換為3MF格式',
            description: '設定完成後，點擊<strong>「轉換為3MF」</strong>按鈕開始處理。工具會依序處理所有上傳的STL檔案，批次處理時會顯示進度資訊。轉換過程包括解析STL資料、優化頂點和生成3MF檔案結構。',
            note: '轉換過程中請保持頁面開啟，大檔案可能需要幾秒鐘時間。'
        },
        {
            title: '預覽轉換結果',
            description: '轉換完成後，右側輸出區域會顯示所有轉換後的3MF檔案資訊。您可以查看<strong>檔案大小對比</strong>、<strong>三角面數</strong>和<strong>頂點數</strong>等詳細資訊。這些資訊有助於確認轉換結果是否符合預期。',
            note: '3MF檔案通常比原始STL檔案更小，這是因為使用了ZIP壓縮。'
        },
        {
            title: '下載3MF檔案',
            description: '滿意轉換結果後，您可以點擊每張檔案下方的<strong>「下載3MF」</strong>按鈕單獨儲存，或使用輸出區域頂部的<strong>「批次下載 (ZIP)」</strong>按鈕將所有轉換後的3MF檔案打包成一個ZIP檔案一次下載。下載的檔案可以直接匯入支援3MF的切片軟體使用。',
            note: '所有處理都在瀏覽器本地完成，確保您的3D模型資料隱私和安全。'
        }
    ],

    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的STL轉3MF工具。現在您可以輕鬆將STL格式的3D列印模型轉換為更現代的3MF格式，享受更好的列印相容性和更小的檔案體積。',

    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: '圖片轉PNG工具',
            description: '將JPG、WebP等多種格式轉換為PNG格式，支援透明背景和批次處理。',
            url: 'https://www.ufreetools.com/tool/image-to-png'
        },
        {
            name: '圖片轉JPG工具',
            description: '將PNG、WebP等多種格式轉換為JPG格式，適合照片和複雜影像。',
            url: 'https://www.ufreetools.com/tool/image-to-jpg'
        },
        {
            name: '圖片壓縮器',
            description: '在不明顯損失品質的情況下縮小影像檔案大小，支援多種格式。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: '圖片調整器',
            description: '將影像調整為特定尺寸或按百分比縮放，支援批次處理。',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        }
    ],

    referencesTitle: '參考資源',
    references: [
        {
            name: '3MF格式官方規範',
            description: '了解3MF格式的技術規範和檔案結構',
            url: 'https://3mf.io/specification/'
        },
        {
            name: 'STL檔案格式說明',
            description: '了解STL格式的歷史和檔案結構',
            url: 'https://en.wikipedia.org/wiki/STL_%28file_format%29'
        },
        {
            name: '3D列印檔案格式對比',
            description: 'STL、3MF、OBJ等格式的特點和適用場景',
            url: 'https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/'
        }
    ]
}
