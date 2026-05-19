export default {
    title: "OBJ轉3MF工具：線上3D列印格式轉換器使用指南",
    functionTitle: "什麼是OBJ轉3MF工具？",
    intro: "我們的<strong>OBJ轉3MF工具</strong>是一款專業的線上3D列印格式轉換應用，可以快速將OBJ（Wavefront Object）檔案轉換為3MF（3D Manufacturing Format）格式。3MF是由3MF聯盟開發的新一代3D列印檔案格式，相比傳統OBJ格式，它支援顏色、材質、紋理等豐富資訊，檔案體積更小，資料完整性更好。使用我們的<strong>線上OBJ轉3MF轉換器</strong>，您可以批次處理多個OBJ檔案，設定模型單位，甚至將多個模型合併為單個3MF檔案，無需安裝任何軟體即可完成格式轉換。",

    useCasesTitle: "OBJ轉3MF的常見應用場景",
    useCases: [
        "將OBJ格式的3D模型轉換為3MF格式，獲得更好的列印相容性",
        "批次轉換多個OBJ檔案為3MF格式，提高3D列印工作流程效率",
        "將多個OBJ模型合併為單個3MF檔案，方便統一管理和列印",
        "為3D列印模型設定正確的單位（毫米、公分、英吋等），避免尺寸錯誤",
        "將OBJ檔案轉換為3MF格式，以便在支援3MF的切片軟體中使用",
        "優化3D列印檔案大小，3MF格式通常比OBJ更緊湊",
        "為3D列印服務提供商準備標準化的3MF格式檔案",
        "將OBJ模型遷移到更現代的3MF格式"
    ],

    tipTitle: "專業提示：",
    tipContent: "3MF格式使用ZIP壓縮，檔案體積通常比OBJ小30-50%。3MF支援多種單位系統，轉換時請確保選擇正確的單位以避免列印尺寸問題。對於需要顏色和材質資訊的模型，3MF是更好的選擇。",

    conclusion: "<strong>OBJ轉3MF格式轉換</strong>工具對3D列印愛好者、設計師、工程師以及需要處理大量3D模型的使用者特別有用。通過使用我們的線上OBJ轉3MF轉換器，您可以快速統一3D列印檔案格式，優化檔案大小，提高列印相容性。",

    faqTitle: "常見問題解答",
    faqs: [
        {
            question: "OBJ轉3MF工具支援哪些OBJ格式？",
            answer: "我們的<strong>線上OBJ轉3MF轉換器</strong>支援標準的OBJ（Wavefront Object）檔案格式。"
        },
        {
            question: "3MF格式相比OBJ有什麼優勢？",
            answer: "3MF格式相比OBJ有多個優勢：(1) 支援顏色、材質和紋理資訊；(2) 使用ZIP壓縮，檔案更小；(3) 資料完整性更好；(4) 支援多種單位系統；(5) 可以包含多個物件和列印參數。"
        },
        {
            question: "轉換時如何選擇正確的單位？",
            answer: "我們的工具提供了四種常用單位：毫米、公分、公尺和英吋。建議您根據3D列印機的要求選擇單位，毫米是最常用的3D列印單位。"
        },
        {
            question: "可以將多個OBJ檔案合併為一個3MF檔案嗎？",
            answer: "可以！勾選「合併所有OBJ為單個3MF檔案」選項。"
        },
        {
            question: "轉換後的3MF檔案可以在哪些軟體中使用？",
            answer: "3MF格式被主流3D列印切片軟體廣泛支援，包括Cura、PrusaSlicer、Simplify3D、3D Builder（Windows）等。"
        },
        {
            question: "轉換過程是否安全？",
            answer: "完全安全！我們的工具採用純前端技術，所有檔案處理都在您的瀏覽器本地完成。"
        },
        {
            question: "轉換後的3MF檔案大小會變化嗎？",
            answer: "通常會變化。3MF格式使用ZIP壓縮，檔案大小通常比OBJ小30-50%。"
        }
    ],

    tutorialTitle: "如何使用OBJ轉3MF工具",
    steps: [
        {
            title: "上傳OBJ檔案",
            description: "首先上傳您想要轉換為3MF格式的OBJ檔案。您可以通過<strong>拖曳檔案</strong>到上傳區域，或<strong>點擊瀏覽</strong>選擇檔案。",
            note: "支援同時上傳多個OBJ檔案。"
        },
        {
            title: "設定轉換參數",
            description: "設定<strong>模型名稱</strong>（選填）和<strong>模型單位</strong>。如果需要將多個OBJ合併為一個3MF檔案，勾選「合併所有OBJ為單個3MF檔案」選項。",
            note: "如果不確定單位，通常選擇毫米（mm）是最安全的選擇。"
        },
        {
            title: "轉換為3MF格式",
            description: "點擊<strong>\"轉換為3MF\"</strong>按鈕開始處理。",
            note: "轉換過程中請保持頁面開啟。"
        },
        {
            title: "預覽轉換結果",
            description: "轉換完成後，右側輸出區域會顯示所有轉換後的3MF檔案資訊。",
            note: "3MF檔案通常比原始OBJ檔案更小。"
        },
        {
            title: "下載3MF檔案",
            description: "點擊每個檔案下方的<strong>\"下載3MF\"</strong>按鈕，或使用<strong>\"批次下載 (ZIP)\"</strong>按鈕。",
            note: "所有處理都在瀏覽器本地完成。"
        }
    ],

    successTitle: "恭喜！",
    successContent: "您已成功學習如何使用我們的OBJ轉3MF工具。現在您可以輕鬆將OBJ格式的3D模型轉換為更現代的3MF格式。",

    relatedToolsTitle: "您可能感興趣的相關工具",
    relatedTools: [
        {
            name: "STL轉3MF工具",
            description: "將STL檔案轉換為3MF格式。",
            url: "https://www.ufreetools.com/tool/stl-to-3mf-converter"
        },
        {
            name: "STL轉OBJ工具",
            description: "將STL檔案轉換為OBJ格式。",
            url: "https://www.ufreetools.com/tool/stl-to-obj-converter"
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
            name: "3MF格式官方規範",
            description: "了解3MF格式的技術規範",
            url: "https://3mf.io/specification/"
        },
        {
            name: "OBJ檔案格式規範",
            description: "了解OBJ格式的技術規範",
            url: "https://en.wikipedia.org/wiki/Wavefront_.obj_file"
        },
        {
            name: "3D列印檔案格式對比",
            description: "STL、OBJ、3MF的特點",
            url: "https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/"
        }
    ]
}
