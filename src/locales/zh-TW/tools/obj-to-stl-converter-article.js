export default {
    title: "OBJ轉STL工具：線上3D列印格式轉換器使用指南",
    functionTitle: "什麼是OBJ轉STL工具及其用途？",
    intro: "我們的<strong>OBJ轉STL工具</strong>是一款專業的線上3D列印格式轉換應用，可以快速將OBJ（Wavefront Object）檔案轉換為STL（Stereo Lithography）格式。STL是3D列印行業最廣泛使用的檔案格式，被幾乎所有3D列印機和切片軟體支援。使用我們的<strong>線上OBJ轉STL轉換器</strong>，您可以批次處理多個OBJ檔案，設定模型單位，選擇輸出格式（二進位或ASCII），無需安裝任何軟體即可完成格式轉換。",

    useCasesTitle: "OBJ轉STL的常見應用場景",
    useCases: [
        "將OBJ格式的3D模型轉換為STL格式，準備3D列印",
        "批次轉換多個OBJ檔案為STL格式，提高3D列印工作流程效率",
        "為3D列印模型設定正確的單位（毫米、公分、英吋等）",
        "將OBJ檔案轉換為STL格式，以便在支援STL的切片軟體中使用",
        "優化3D列印檔案格式，STL格式相容性最廣",
        "為3D列印服務提供商準備標準化的STL格式檔案",
        "將OBJ模型轉換為STL格式，便於在不同系統間交換資料",
        "為3D列印準備檔案，STL格式支援所有3D列印機"
    ],

    tipTitle: "專業提示：",
    tipContent: "STL格式有二進位和ASCII兩種。二進位STL檔案體積較小，建議大多數情況下使用。OBJ檔案包含頂點和法線資訊，轉換為STL時會保留。對於3D列印，建議使用毫米為單位。",

    conclusion: "<strong>OBJ轉STL格式轉換</strong>工具對3D列印愛好者、設計師、工程師以及需要處理大量3D模型的使用者特別有用。通過使用我們的線上OBJ轉STL轉換器，您可以快速將通用3D模型格式轉換為3D列印專用格式，優化檔案大小，提高列印相容性。",

    faqTitle: "常見問題解答",
    faqs: [
        {
            question: "OBJ轉STL工具支援哪些OBJ格式？",
            answer: "我們的<strong>線上OBJ轉STL轉換器</strong>支援標準的OBJ（Wavefront Object）檔案格式。工具會自動解析OBJ檔案中的頂點、法線和面資料，並將其轉換為STL格式。"
        },
        {
            question: "STL格式相比OBJ有什麼優勢？",
            answer: "STL格式在3D列印領域的優勢包括：(1) 相容性最廣；(2) 檔案結構簡單，處理速度快；(3) 二進位格式體積小；(4) 是3D列印行業的傳統標準。"
        },
        {
            question: "轉換時如何選擇正確的單位？",
            answer: "我們的工具提供了四種常用單位：毫米、公分、公尺和英吋。建議您根據3D列印機的要求選擇單位。"
        },
        {
            question: "二進位STL和ASCII STL有什麼區別？",
            answer: "二進位STL使用二進位編碼，檔案體積小，處理速度快。ASCII STL使用文字格式，檔案體積大但便於閱讀。"
        },
        {
            question: "轉換後的STL檔案可以在哪些軟體中使用？",
            answer: "STL格式被主流3D列印切片軟體廣泛支援，包括Cura、PrusaSlicer、Simplify3D、3D Builder（Windows）等。"
        },
        {
            question: "轉換過程是否安全？",
            answer: "完全安全！我們的工具採用純前端技術，所有檔案處理都在您的瀏覽器本地完成。"
        },
        {
            question: "轉換後的STL檔案大小會變化嗎？",
            answer: "通常會變化。二進位STL通常比ASCII STL小30-50%。"
        }
    ],

    tutorialTitle: "如何使用OBJ轉STL工具",
    steps: [
        {
            title: "上傳OBJ檔案",
            description: "首先上傳您想要轉換為STL格式的OBJ檔案。您可以通過<strong>拖曳檔案</strong>到上傳區域，或<strong>點擊瀏覽</strong>選擇檔案。",
            note: "支援同時上傳多個OBJ檔案。"
        },
        {
            title: "設定轉換參數",
            description: "設定<strong>模型名稱</strong>（選填）、<strong>模型單位</strong>和<strong>輸出格式</strong>（二進位STL或ASCII STL）。",
            note: "如果不確定單位，通常選擇毫米（mm）是最安全的選擇。"
        },
        {
            title: "轉換為STL格式",
            description: "點擊<strong>\"轉換為STL\"</strong>按鈕開始處理。",
            note: "轉換過程中請保持頁面開啟。"
        },
        {
            title: "預覽轉換結果",
            description: "轉換完成後，右側輸出區域會顯示所有轉換後的STL檔案資訊。",
            note: "STL適合3D列印。"
        },
        {
            title: "下載STL檔案",
            description: "點擊每個檔案下方的<strong>\"下載STL\"</strong>按鈕，或使用<strong>\"批次下載 (ZIP)\"</strong>按鈕。",
            note: "所有處理都在瀏覽器本地完成。"
        }
    ],

    successTitle: "恭喜！",
    successContent: "您已成功學習如何使用我們的OBJ轉STL工具。現在您可以輕鬆將OBJ格式的3D模型轉換為3D列印專用的STL格式。",

    relatedToolsTitle: "您可能感興趣的相關工具",
    relatedTools: [
        {
            name: "STL轉OBJ工具",
            description: "將STL檔案轉換為OBJ格式。",
            url: "https://www.ufreetools.com/tool/stl-to-obj-converter"
        },
        {
            name: "STL轉3MF工具",
            description: "將STL檔案轉換為3MF格式。",
            url: "https://www.ufreetools.com/tool/stl-to-3mf-converter"
        },
        {
            name: "圖片轉PNG工具",
            description: "將JPG、WebP轉換為PNG格式。",
            url: "https://www.ufreetools.com/tool/image-to-png"
        },
        {
            name: "圖片轉JPG工具",
            description: "將PNG、WebP轉換為JPG格式。",
            url: "https://www.ufreetools.com/tool/image-to-jpg"
        }
    ],

    referencesTitle: "參考資源",
    references: [
        {
            name: "OBJ檔案格式規範",
            description: "了解OBJ格式的技術規範",
            url: "https://en.wikipedia.org/wiki/Wavefront_.obj_file"
        },
        {
            name: "STL檔案格式說明",
            description: "了解STL格式的歷史和結構",
            url: "https://en.wikipedia.org/wiki/STL_%28file_format%29"
        },
        {
            name: "3D列印檔案格式對比",
            description: "STL、OBJ、3MF的特點",
            url: "https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/"
        }
    ]
}
