export default {
    title: "STL轉GLB工具：線上3D模型格式轉換器使用指南",
    functionTitle: "什麼是STL轉GLB工具及其用途？",
    intro: "我們的<strong>STL轉GLB工具</strong>是一款專業的線上3D模型格式轉換應用，可以快速將STL（Stereo Lithography）檔案轉換為GLB（Binary glTF）格式。GLB是glTF的二進位版本，是一種高效的3D檔案格式，廣泛用於遊戲開發、AR/VR應用、網頁3D展示等場景。使用我們的<strong>線上STL轉GLB轉換器</strong>，您可以批次處理多個STL檔案，設定模型單位，調整材質顏色，無需安裝任何軟體即可完成格式轉換。",

    useCasesTitle: "STL轉GLB的常見應用場景",
    useCases: [
        "將STL格式的3D列印模型轉換為GLB格式，用於遊戲開發或AR/VR應用",
        "批次轉換多個STL檔案為GLB格式，提高3D內容製作效率",
        "為網頁3D展示準備GLB格式的模型檔案",
        "將STL檔案轉換為GLB格式，以便在Unity、Unreal Engine等遊戲引擎中使用",
        "為AR/VR應用準備優化的3D模型資源",
        "將STL模型轉換為GLB格式，支援材質和紋理資訊",
        "為行動端應用準備輕量級的3D模型格式",
        "將STL模型遷移到GLB格式，便於在不同平台間共享3D內容"
    ],

    tipTitle: "專業提示：",
    tipContent: "GLB格式支援材質、紋理、動畫等豐富資訊，檔案體積小，載入速度快。STL檔案只包含幾何資訊，轉換為GLB時可以添加材質顏色。對於Web應用，GLB是首選格式。",

    conclusion: "<strong>STL轉GLB格式轉換</strong>工具對遊戲開發者、AR/VR設計師、網頁開發者以及需要處理3D模型的使用者特別有用。通過使用我們的線上STL轉GLB轉換器，您可以快速將3D列印模型轉換為適合遊戲和AR/VR應用的格式。我們的工具支援批次處理，所有處理都在瀏覽器本地完成。",

    faqTitle: "常見問題解答",
    faqs: [
        {
            question: "STL轉GLB工具支援哪些STL格式？",
            answer: "我們的<strong>線上STL轉GLB轉換器</strong>支援兩種主要的STL檔案格式：二進位STL和ASCII STL。工具會自動檢測檔案格式並進行相應處理。"
        },
        {
            question: "GLB格式相比STL有什麼優勢？",
            answer: "GLB格式相比STL有多個優勢：(1) 支援材質、紋理和動畫資訊；(2) 使用二進位格式，檔案體積小；(3) 載入速度快，適合即時渲染；(4) 被主流遊戲引擎和AR/VR平台支援；(5) 支援PBR（基於物理的渲染）材質。"
        },
        {
            question: "轉換時如何設定材質顏色？",
            answer: "我們的<strong>STL轉GLB工具</strong>提供了材質顏色設定功能。您可以選擇預設顏色或自訂RGB顏色值。"
        },
        {
            question: "轉換後的GLB檔案可以在哪些軟體中使用？",
            answer: "GLB格式被主流遊戲引擎和3D平台廣泛支援，包括Unity、Unreal Engine、Blender、Three.js、Babylon.js等。"
        },
        {
            question: "轉換過程是否安全？檔案會上傳到伺服器嗎？",
            answer: "完全安全！我們的工具採用純前端技術，所有檔案處理都在您的瀏覽器本地完成。"
        },
        {
            question: "轉換後的GLB檔案大小會變化嗎？",
            answer: "通常會變化。GLB格式使用二進位編碼和壓縮技術，檔案大小通常比STL小。對於簡單模型，GLB檔案可能比二進位STL稍大；對於複雜模型，GLB檔案通常更小。"
        },
        {
            question: "GLB格式支援哪些3D特性？",
            answer: "GLB格式支援多種3D特性：幾何資料、PBR材質、紋理貼圖、骨骼動畫、變形目標、場景層次結構等。"
        }
    ],

    tutorialTitle: "如何使用STL轉GLB工具",
    steps: [
        {
            title: "上傳STL檔案",
            description: "首先上傳您想要轉換為GLB格式的STL檔案。您可以通過<strong>拖曳檔案</strong>到上傳區域，或<strong>點擊瀏覽</strong>選擇檔案。",
            note: "支援同時上傳多個STL檔案。"
        },
        {
            title: "設定轉換參數",
            description: "設定<strong>模型名稱</strong>（選填）和<strong>模型單位</strong>。選擇<strong>材質顏色</strong>。",
            note: "如果不確定單位，通常選擇毫米（mm）是最安全的選擇。"
        },
        {
            title: "轉換為GLB格式",
            description: "點擊<strong>\"轉換為GLB\"</strong>按鈕開始處理。工具會依次處理所有上傳的STL檔案。",
            note: "轉換過程中請保持頁面開啟，大檔案可能需要幾秒鐘時間。"
        },
        {
            title: "預覽轉換結果",
            description: "轉換完成後，右側輸出區域會顯示所有轉換後的GLB檔案資訊，包括<strong>檔案大小對比</strong>、<strong>三角面數</strong>。",
            note: "GLB檔案通常比原始STL檔案更小。"
        },
        {
            title: "下載GLB檔案",
            description: "點擊每個檔案下方的<strong>\"下載GLB\"</strong>按鈕單獨儲存，或使用<strong>\"批次下載 (ZIP)\"</strong>按鈕。",
            note: "所有處理都在瀏覽器本地完成。"
        }
    ],

    successTitle: "恭喜！",
    successContent: "您已成功學習如何使用我們的STL轉GLB工具。現在您可以輕鬆將STL格式的3D列印模型轉換為適合遊戲開發和AR/VR應用的GLB格式。",

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
            name: "glTF格式官方規範",
            description: "了解glTF/GLB格式的技術規範和檔案結構",
            url: "https://www.khronos.org/gltf/"
        },
        {
            name: "STL檔案格式說明",
            description: "了解STL格式的歷史和檔案結構",
            url: "https://en.wikipedia.org/wiki/STL_%28file_format%29"
        },
        {
            name: "3D檔案格式對比",
            description: "STL、OBJ、glTF等格式的特點和適用場景",
            url: "https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/"
        }
    ]
}
