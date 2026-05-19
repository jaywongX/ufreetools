export default {
    title: "GLB轉STL工具：線上3D模型格式轉換器使用指南",
    functionTitle: "什麼是GLB轉STL工具及其用途？",
    intro: "我們的<strong>GLB轉STL工具</strong>是一款專業的線上3D模型格式轉換應用，可以快速將GLB（Binary glTF）檔案轉換為STL（Stereo Lithography）格式。STL是3D列印行業最廣泛使用的檔案格式。使用我們的線上轉換器，您可以批次處理多個GLB檔案，無需安裝任何軟體即可完成轉換。",

    useCasesTitle: "GLB轉STL的常見應用場景",
    useCases: [
        "將GLB格式的遊戲模型轉換為STL格式，準備3D列印",
        "批次轉換多個GLB檔案為STL格式",
        "將GLB檔案轉換為STL格式，以便在3D列印機上製作實體模型",
        "從GLB檔案中提取幾何資訊，轉換為簡單的STL格式",
        "為3D列印服務提供商準備標準化的STL格式檔案",
        "將GLB模型轉換為STL格式，便於在不同系統間交換資料",
        "優化3D列印檔案格式，STL格式相容性最廣",
        "為3D列印準備檔案，STL格式支援所有3D列印機"
    ],

    tipTitle: "專業提示：",
    tipContent: "GLB格式支援材質、紋理、動畫等豐富資訊，轉換為STL時這些資訊會丟失，只保留幾何形狀。對於3D列印，建議使用毫米為單位。",

    conclusion: "<strong>GLB轉STL格式轉換</strong>工具對3D列印愛好者、遊戲開發者、設計師以及需要將數位模型實體化的使用者特別有用。通過使用我們的線上GLB轉STL轉換器，您可以快速將遊戲和AR/VR應用中的3D模型轉換為3D列印專用格式。",

    faqTitle: "常見問題解答",
    faqs: [
        {
            question: "GLB轉STL工具支援哪些GLB格式？",
            answer: "我們的<strong>線上GLB轉STL轉換器</strong>支援標準的GLB（Binary glTF）檔案格式，包括glTF 1.0和glTF 2.0版本。"
        },
        {
            question: "STL格式相比GLB有什麼優勢？",
            answer: "STL格式在3D列印領域的優勢包括：(1) 相容性最廣，支援所有3D列印機和切片軟體；(2) 檔案結構簡單，處理速度快；(3) 是3D列印行業的傳統標準；(4) 專注於幾何資訊。"
        },
        {
            question: "轉換時會丟失哪些資訊？",
            answer: "GLB格式支援材質、紋理、動畫等豐富資訊，而STL格式只包含幾何資訊（頂點和面）。轉換時，材質、紋理、動畫等資訊會丟失。"
        },
        {
            question: "二進位STL和ASCII STL有什麼區別？",
            answer: "二進位STL使用二進位編碼，檔案體積小，處理速度快。ASCII STL使用文字格式，檔案體積大但便於閱讀。"
        },
        {
            question: "轉換後的STL檔案可以在哪些軟體中使用？",
            answer: "STL格式被主流3D列印切片軟體廣泛支援，包括Cura、PrusaSlicer、Simplify3D、3D Builder等。"
        },
        {
            question: "轉換過程是否安全？",
            answer: "完全安全！我們的工具採用純前端技術，所有檔案處理都在您的瀏覽器本地完成。"
        },
        {
            question: "轉換後的STL檔案大小會變化嗎？",
            answer: "通常會變化。GLB格式使用二進位編碼和壓縮技術。轉換為STL後，檔案大小取決於模型複雜度和三角面數量。"
        }
    ],

    tutorialTitle: "如何使用GLB轉STL工具",
    steps: [
        {
            title: "上傳GLB檔案",
            description: "首先上傳您想要轉換為STL格式的GLB檔案。您可以通過<strong>拖曳檔案</strong>到上傳區域，或<strong>點擊瀏覽</strong>選擇檔案。",
            note: "支援同時上傳多個GLB檔案。"
        },
        {
            title: "設定轉換參數",
            description: "設定<strong>模型名稱</strong>（選填）和<strong>輸出格式</strong>（二進位STL或ASCII STL）。",
            note: "建議選擇二進位格式以獲得更小的檔案體積。"
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
    successContent: "您已成功學習如何使用我們的GLB轉STL工具。現在您可以輕鬆將GLB格式的3D遊戲模型轉換為3D列印專用的STL格式。",

    relatedToolsTitle: "您可能感興趣的相關工具",
    relatedTools: [
        {
            name: "STL轉GLB工具",
            description: "將STL檔案轉換為GLB格式。",
            url: "https://www.ufreetools.com/tool/stl-to-glb-converter"
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
            name: "glTF格式官方規範",
            description: "了解glTF/GLB格式的技術規範",
            url: "https://www.khronos.org/gltf/"
        },
        {
            name: "STL檔案格式說明",
            description: "了解STL格式的歷史",
            url: "https://en.wikipedia.org/wiki/STL_%28file_format%29"
        },
        {
            name: "3D檔案格式對比",
            description: "STL、OBJ、glTF的特點",
            url: "https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/"
        }
    ]
}
