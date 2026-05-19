export default {
    title: "3MF轉STL工具：線上3D列印格式轉換器使用指南",
    functionTitle: "什麼是3MF轉STL工具及其用途？",
    intro: "我們的<strong>3MF轉STL工具</strong>是一款專業的線上3D列印格式轉換應用，可以快速將3MF（3D Manufacturing Format）檔案轉換為STL（Stereo Lithography）格式。雖然3MF是更現代的格式，但STL仍然是3D列印行業最廣泛使用的檔案格式，被幾乎所有3D列印機和切片軟體支援。使用我們的<strong>線上3MF轉STL轉換器</strong>，您可以批次處理多個3MF檔案，設定模型單位，選擇輸出格式（二進位或ASCII），無需安裝任何軟體即可完成格式轉換。",

    useCasesTitle: "3MF轉STL的常見應用場景",
    useCases: [
        "將3MF格式的3D列印模型轉換為STL格式，獲得更廣泛的裝置相容性",
        "批次轉換多個3MF檔案為STL格式，提高3D列印工作流程效率",
        "將3MF檔案轉換為STL格式，以便在舊款3D列印機或切片軟體中使用",
        "從3MF檔案中提取幾何資訊，轉換為簡單的STL格式",
        "為不支援3MF格式的3D列印裝置準備檔案",
        "將3MF模型轉換為STL格式，便於在不同系統間交換資料",
        "優化3D列印檔案格式，STL格式相容性最廣",
        "為3D列印服務提供商準備標準化的STL格式檔案"
    ],

    tipTitle: "專業提示：",
    tipContent: "3MF格式支援顏色、材質等豐富資訊，轉換為STL時這些資訊會丟失。如果需要保留顏色資訊，請考慮使用其他格式。對於3D列印，建議使用毫米為單位。",

    conclusion: "<strong>3MF轉STL格式轉換</strong>工具對3D列印愛好者、設計師、工程師以及需要處理大量3D模型的使用者特別有用。通過使用我們的線上3MF轉STL轉換器，您可以快速將現代3D列印格式轉換為通用格式，確保與各種3D列印裝置和軟體的相容性。我們的工具支援批次處理，提供格式選擇功能，所有處理都在瀏覽器本地完成，確保您的模型資料隱私和安全。",

    faqTitle: "常見問題解答",
    faqs: [
        {
            question: "3MF轉STL工具支援哪些3MF格式？",
            answer: "我們的<strong>線上3MF轉STL轉換器</strong>支援標準的3MF（3D Manufacturing Format）檔案格式。3MF是一種基於ZIP壓縮的XML格式，包含模型幾何、顏色、材質等資訊。我們的工具會解析3MF檔案，提取幾何資料並轉換為STL格式。"
        },
        {
            question: "STL格式相比3MF有什麼優勢？",
            answer: "STL格式在3D列印領域的優勢包括：(1) 相容性最廣，支援所有3D列印機和切片軟體；(2) 檔案結構簡單，處理速度快；(3) 是3D列印行業的傳統標準；(4) 二進位格式體積小。雖然3MF功能更豐富，但STL的相容性更好。"
        },
        {
            question: "轉換時會丟失哪些資訊？",
            answer: "3MF格式支援顏色、材質、紋理、列印參數等豐富資訊，而STL格式只包含幾何資訊（頂點和面）。轉換時，顏色、材質等資訊會丟失，只保留模型的幾何形狀。如果這些資訊很重要，請考慮使用其他轉換方式。"
        },
        {
            question: "二進位STL和ASCII STL有什麼區別？",
            answer: "二進位STL使用二進位編碼，檔案體積小，處理速度快，是3D列印的首選格式。ASCII STL使用文字格式，檔案體積大，但便於人工閱讀和編輯。我們的工具支援生成兩種格式，建議大多數情況下選擇二進位STL以獲得更好的效能。"
        },
        {
            question: "轉換後的STL檔案可以在哪些軟體中使用？",
            answer: "STL格式被主流3D列印切片軟體廣泛支援，包括Cura、PrusaSlicer、Simplify3D、3D Builder（Windows）等。轉換後的STL檔案可以直接匯入這些軟體進行切片和列印準備。STL是3D列印行業最通用的格式。"
        },
        {
            question: "轉換過程是否安全？檔案會上傳到伺服器嗎？",
            answer: "完全安全！我們的工具採用純前端技術，所有檔案處理都在您的瀏覽器本地完成。您的3MF檔案不會上傳到任何伺服器，確保隱私和資料安全。您可以放心處理包含商業機密或個人設計的3D模型檔案。"
        },
        {
            question: "轉換後的STL檔案大小會變化嗎？",
            answer: "通常會變化。3MF格式使用ZIP壓縮，檔案體積通常比STL小。轉換為STL後，檔案大小取決於模型複雜度和三角面數量。二進位STL通常比ASCII STL小30-50%。"
        }
    ],

    tutorialTitle: "如何使用3MF轉STL工具",
    steps: [
        {
            title: "上傳3MF檔案",
            description: "首先上傳您想要轉換為STL格式的3MF檔案。您可以通過<strong>拖曳檔案</strong>到上傳區域，或<strong>點擊瀏覽</strong>選擇檔案。我們的工具支援標準的3MF檔案格式，您可以一次上傳多個檔案進行批次處理。",
            note: "支援同時上傳多個3MF檔案，工具會自動解析並處理。"
        },
        {
            title: "設定轉換參數",
            description: "在左側控制面板中，設定<strong>模型名稱</strong>（選填）和<strong>輸出格式</strong>（二進位STL或ASCII STL）。建議選擇二進位格式以獲得更小的檔案體積。",
            note: "如果不確定格式，通常選擇二進位STL是最安全的選擇。"
        },
        {
            title: "轉換為STL格式",
            description: "設定完成後，點擊<strong>\"轉換為STL\"</strong>按鈕開始處理。工具會依次處理所有上傳的3MF檔案，批次處理時會顯示進度資訊。轉換過程包括解析3MF資料、提取幾何資訊、生成STL檔案結構。",
            note: "轉換過程中請保持頁面開啟，大檔案可能需要幾秒鐘時間。"
        },
        {
            title: "預覽轉換結果",
            description: "轉換完成後，右側輸出區域會顯示所有轉換後的STL檔案資訊。您可以查看<strong>檔案大小對比</strong>、<strong>三角面數</strong>和<strong>頂點數</strong>等詳細資訊。這些資訊有助於確認轉換結果是否符合預期。",
            note: "STL檔案使用三角面片表示模型，適合3D列印。"
        },
        {
            title: "下載STL檔案",
            description: "滿意轉換結果後，您可以點擊每個檔案下方的<strong>\"下載STL\"</strong>按鈕單獨儲存，或使用輸出區域頂部的<strong>\"批次下載 (ZIP)\"</strong>按鈕將所有轉換後的STL檔案打包成一個ZIP檔案一次性下載。下載的檔案可以直接匯入支援STL的切片軟體使用。",
            note: "所有處理都在瀏覽器本地完成，確保您的3D模型資料隱私和安全。"
        }
    ],

    successTitle: "恭喜！",
    successContent: "您已成功學習如何使用我們的3MF轉STL工具。現在您可以輕鬆將3MF格式的3D列印模型轉換為通用的STL格式，享受更廣泛的3D列印機相容性。",

    relatedToolsTitle: "您可能感興趣的相關工具",
    relatedTools: [
        {
            name: "STL轉3MF工具",
            description: "將STL檔案轉換為3MF格式，支援顏色、材質等豐富資訊，適合現代3D列印。",
            url: "https://www.ufreetools.com/tool/stl-to-3mf-converter"
        },
        {
            name: "STL轉OBJ工具",
            description: "將STL檔案轉換為OBJ格式，支援法線計算和紋理座標，適合遊戲開發和複雜建模。",
            url: "https://www.ufreetools.com/tool/stl-to-obj-converter"
        },
        {
            name: "圖片轉PNG工具",
            description: "將JPG、WebP等多種格式轉換為PNG格式，支援透明背景和批次處理。",
            url: "https://www.ufreetools.com/tool/image-to-png"
        },
        {
            name: "圖片轉JPG工具",
            description: "將PNG、WebP等多種格式轉換為JPG格式，適合照片和複雜影像。",
            url: "https://www.ufreetools.com/tool/image-to-jpg"
        }
    ],

    referencesTitle: "參考資源",
    references: [
        {
            name: "3MF格式官方規範",
            description: "了解3MF格式的技術規範和檔案結構",
            url: "https://3mf.io/specification/"
        },
        {
            name: "STL檔案格式說明",
            description: "了解STL格式的歷史和檔案結構",
            url: "https://en.wikipedia.org/wiki/STL_%28file_format%29"
        },
        {
            name: "3D列印檔案格式對比",
            description: "STL、OBJ、3MF等格式的特點和適用場景",
            url: "https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/"
        }
    ]
}
