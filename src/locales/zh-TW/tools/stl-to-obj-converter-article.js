export default {
    title: 'STL轉OBJ工具：線上3D列印格式轉換器使用指南',
    functionTitle: '什麼是STL轉OBJ工具及其用途？',
    intro: '我們的<strong>STL轉OBJ工具</strong>是一款專業的線上3D列印格式轉換應用，可以快速將STL（Stereo Lithography）檔案轉換為OBJ（Wavefront Object）格式。OBJ是一種廣泛使用的3D模型檔案格式，支援頂點、法線、紋理座標等豐富資訊，被大多數3D建模軟體和遊戲引擎支援。使用我們的<strong>線上STL轉OBJ轉換器</strong>，您可以批次處理多個STL檔案，設定模型單位，計算法線向量，無需安裝任何軟體即可完成格式轉換。',

    useCasesTitle: 'STL轉OBJ的常見應用場景',
    useCases: [
        '將STL格式的3D列印模型轉換為OBJ格式，獲得更廣泛的軟體相容性',
        '批次轉換多個STL檔案為OBJ格式，提高3D建模工作流程效率',
        '為3D列印模型設定正確的單位（毫米、公分、英吋等），避免尺寸錯誤',
        '將STL檔案轉換為OBJ格式，以便在遊戲引擎（Unity、Unreal等）中使用',
        '計算法線向量，改善渲染效果和光照表現',
        '為3D建模軟體準備標準化的OBJ格式檔案',
        '將STL模型遷移到OBJ格式，便於在不同軟體間交換資料',
        '為VR/AR應用準備OBJ格式的3D模型資源'
    ],

    tipTitle: '專業提示：',
    tipContent: 'OBJ格式支援法線和紋理座標資訊，轉換時建議啟用法線計算以獲得更好的渲染效果。OBJ檔案通常比STL稍大，但相容性更廣。對於需要紋理映射的模型，OBJ是更好的選擇。',

    conclusion: '<strong>STL轉OBJ格式轉換</strong>工具對3D列印愛好者、遊戲開發者、設計師、工程師以及需要處理大量3D模型的使用者特別有用。透過使用我們的線上STL轉OBJ轉換器，您可以快速統一3D模型檔案格式，提高軟體相容性，或滿足特定平台對檔案格式的要求。我們的工具支援批次處理，提供單位設定和法線計算功能，所有處理都在瀏覽器本地完成，確保您的模型資料隱私和安全。',

    faqTitle: '常見問題解答',
    faqs: [
        {
            question: 'STL轉OBJ工具支援哪些STL格式？',
            answer: '我們的<strong>線上STL轉OBJ轉換器</strong>支援兩種主要的STL檔案格式：二進位STL和ASCII STL。工具會自動偵測檔案格式並進行相應處理。無論是從CAD軟體匯出的STL檔案，還是從3D模型庫下載的STL檔案，都可以順利轉換為OBJ格式。'
        },
        {
            question: 'OBJ格式相比STL有什麼優勢？',
            answer: 'OBJ格式相比STL有多個優勢：(1) 支援法線和紋理座標資訊；(2) 被幾乎所有3D軟體和遊戲引擎支援；(3) 支援多邊形面，不限於三角形；(4) 可以包含材質和紋理引用；(5) 文字格式，易於編輯和除錯。對於遊戲開發和複雜建模，OBJ是更推薦的格式。'
        },
        {
            question: '轉換時如何選擇正確的單位？',
            answer: '我們的<strong>STL轉OBJ工具</strong>提供了四種常用單位：毫米、公分、公尺和英吋。STL檔案本身不包含單位資訊，因此需要您根據原始模型的設計單位來選擇。如果不確定，毫米是最常用的3D列印單位。選擇錯誤的單位可能導致模型尺寸偏差。'
        },
        {
            question: '什麼是法線計算？為什麼需要它？',
            answer: '法線是垂直於模型表面的向量，用於計算光照和渲染效果。STL檔案通常不包含法線資訊，而OBJ格式支援法線資料。啟用法線計算後，工具會自動為每個頂點計算平滑法線，使模型在渲染時具有更好的光照表現和更自然的外觀。'
        },
        {
            question: '轉換後的OBJ檔案可以在哪些軟體中使用？',
            answer: 'OBJ格式被主流3D軟體廣泛支援，包括Blender、Maya、3ds Max、ZBrush、Unity、Unreal Engine等。轉換後的OBJ檔案可以直接匯入這些軟體進行進一步編輯、渲染或遊戲開發。OBJ是最通用的3D模型交換格式之一。'
        },
        {
            question: '轉換過程是否安全？檔案會上傳到伺服器嗎？',
            answer: '完全安全！我們的工具採用純前端技術，所有檔案處理都在您的瀏覽器本地完成。您的STL檔案不會上傳到任何伺服器，確保隱私和資料安全。您可以放心處理包含商業機密或個人設計的3D模型檔案。'
        },
        {
            question: '轉換後的OBJ檔案大小會變化嗎？',
            answer: '通常會略有變化。OBJ是文字格式，檔案大小取決於模型複雜度。對於簡單模型，OBJ檔案可能比二進位STL稍大；對於複雜模型，由於OBJ支援更高效的資料組織，檔案大小可能相近。啟用法線計算會增加檔案大小，但能顯著改善渲染效果。'
        }
    ],

    tutorialTitle: '如何使用STL轉OBJ工具',
    steps: [
        {
            title: '上傳STL檔案',
            description: '首先上傳您想要轉換為OBJ格式的STL檔案。您可以透過<strong>拖拽檔案</strong>到上傳區域，或<strong>點擊瀏覽</strong>選擇檔案。我們的工具支援二進位和ASCII兩種STL格式，您可以一次上傳多個檔案進行批次處理。',
            note: '支援同時上傳多個STL檔案，工具會自動識別格式並處理。'
        },
        {
            title: '設定轉換參數',
            description: '在左側控制面板中，設定<strong>模型名稱</strong>（選填）和<strong>模型單位</strong>。建議啟用<strong>"計算法線"</strong>選項以獲得更好的渲染效果。選擇正確的單位非常重要，以確保模型尺寸準確。',
            note: '如果不確定單位，通常選擇毫米（mm）是最安全的選擇。'
        },
        {
            title: '轉換為OBJ格式',
            description: '設定完成後，點擊<strong>"轉換為OBJ"</strong>按鈕開始處理。工具會依序處理所有上傳的STL檔案，批次處理時會顯示進度資訊。轉換過程包括解析STL資料、計算法線和生成OBJ檔案結構。',
            note: '轉換過程中請保持頁面開啟，大檔案可能需要幾秒鐘時間。'
        },
        {
            title: '預覽轉換結果',
            description: '轉換完成後，右側輸出區域會顯示所有轉換後的OBJ檔案資訊。您可以查看<strong>檔案大小對比</strong>、<strong>三角面數</strong>和<strong>頂點數</strong>等詳細資訊。這些資訊有助於確認轉換結果是否符合預期。',
            note: 'OBJ檔案包含詳細的幾何資訊，便於後續編輯和處理。'
        },
        {
            title: '下載OBJ檔案',
            description: '滿意轉換結果後，您可以點擊每張檔案下方的<strong>"下載OBJ"</strong>按鈕單獨儲存，或使用輸出區域頂部的<strong>"批次下載 (ZIP)"</strong>按鈕將所有轉換後的OBJ檔案打包成一個ZIP檔案一次下載。下載的檔案可以直接匯入支援OBJ的3D軟體使用。',
            note: '所有處理都在瀏覽器本地完成，確保您的3D模型資料隱私和安全。'
        }
    ],

    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的STL轉OBJ工具。現在您可以輕鬆將STL格式的3D列印模型轉換為通用的OBJ格式，享受更廣泛的軟體相容性和更好的渲染效果。',

    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: 'STL轉3MF工具',
            description: '將STL檔案轉換為3MF格式，支援顏色、材質等豐富資訊，適合現代3D列印。',
            url: 'https://www.ufreetools.com/tool/stl-to-3mf-converter'
        },
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
        }
    ],

    referencesTitle: '參考資源',
    references: [
        {
            name: 'OBJ檔案格式規範',
            description: '了解OBJ格式的技術規範和檔案結構',
            url: 'https://en.wikipedia.org/wiki/Wavefront_.obj_file'
        },
        {
            name: 'STL檔案格式說明',
            description: '了解STL格式的歷史和檔案結構',
            url: 'https://en.wikipedia.org/wiki/STL_%28file_format%29'
        },
        {
            name: '3D列印檔案格式對比',
            description: 'STL、OBJ、3MF等格式的特點和適用場景',
            url: 'https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/'
        }
    ]
}