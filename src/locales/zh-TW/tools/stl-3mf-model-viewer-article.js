export default {
    title: 'STL/3MF模型預覽工具：線上3D模型檢視器使用指南',
    functionTitle: '什麼是STL/3MF模型預覽工具及其用途？',
    intro: '我們的<strong>STL/3MF模型預覽工具</strong>是一款專業的線上3D模型檢視器，可以快速載入和預覽STL（Stereo Lithography）和3MF（3D Manufacturing Format）格式的3D模型檔案。無需安裝任何軟體，只需在瀏覽器中開啟即可檢視3D模型的各個角度。使用我們的<strong>線上3D模型檢視器</strong>，您可以旋轉、縮放、平移模型，檢視模型的頂點數、面數、尺寸等詳細資訊，還可以切換線框模式、調整材質顏色、匯出高畫質截圖，是3D列印愛好者和設計師的必備工具。',

    useCasesTitle: 'STL/3MF模型預覽的常見應用場景',
    useCases: [
        '在3D列印前預覽STL模型，檢查模型是否完整、有無破面或錯誤',
        '檢視3MF模型的顏色、材質等豐富資訊，確認列印效果',
        '快速檢查3D模型的尺寸和比例，確保符合列印要求',
        '使用線框模式檢查模型的網格拓撲結構，發現潛在問題',
        '為3D模型截圖用於產品展示、社群媒體分享或文件說明',
        '在沒有安裝3D建模軟體的情況下快速檢視模型檔案',
        '批次預覽多個3D模型檔案，快速篩選需要的模型',
        '向客戶或團隊成員展示3D模型設計，無需安裝專業軟體'
    ],

    tipTitle: '專業提示：',
    tipContent: '使用滑鼠左鍵拖動可旋轉模型，右鍵拖動可平移視圖，滾輪可縮放。雙擊模型可自動將其居中顯示。對於大型模型檔案，首次載入可能需要幾秒鐘時間。',

    conclusion: '<strong>STL/3MF模型預覽</strong>工具對3D列印愛好者、設計師、工程師以及需要檢視3D模型的使用者特別有用。通過使用我們的線上3D模型檢視器，您可以隨時隨地檢視STL和3MF格式的3D模型，無需安裝任何專業軟體。我們的工具支援多種視圖控制、渲染設定和匯出功能，所有處理都在瀏覽器本地完成，確保您的模型資料隱私和安全。',

    faqTitle: '常見問題解答',
    faqs: [
        {
            question: 'STL/3MF模型預覽工具支援哪些檔案格式？',
            answer: '我們的<strong>線上3D模型檢視器</strong>支援兩種主要的3D列印檔案格式：STL（包括二進位和ASCII格式）和3MF格式。STL是最常用的3D列印格式，而3MF是新一代格式，支援顏色、材質等豐富資訊。工具會自動偵測檔案格式並進行相應處理。'
        },
        {
            question: '如何旋轉和縮放3D模型？',
            answer: '使用滑鼠左鍵拖動可以旋轉模型，檢視不同角度。使用滑鼠滾輪可以縮放模型，放大檢視細節或縮小檢視整體。使用滑鼠右鍵拖動可以平移視圖。雙擊模型可以自動將其居中並重設視角。這些操作讓您能夠全方位檢視3D模型。'
        },
        {
            question: '模型資訊面板顯示哪些資訊？',
            answer: '模型資訊面板顯示以下關鍵資料：(1) 頂點數（Vertices）- 模型的頂點總數；(2) 面數（Faces/Triangles）- 模型的三角面數；(3) 檔案大小 - 原始檔案的大小；(4) 物理尺寸 - 模型的長寬高尺寸（XYZ三軸）。這些資訊有助於您了解模型的複雜度和尺寸。'
        },
        {
            question: '什麼是線框模式？有什麼用途？',
            answer: '線框模式會顯示模型的網格線框結構，而不顯示實體表面。這對於檢查模型的拓撲結構非常有用，可以幫助您發現破面、重面、孔洞等潛在問題。在3D列印前使用線框模式檢查模型，可以避免列印失敗或品質問題。'
        },
        {
            question: '可以匯出3D模型的截圖嗎？',
            answer: '可以！我們的工具支援一鍵匯出當前視角的高畫質截圖。您可以選擇PNG或JPG格式，還可以選擇是否匯出透明背景的截圖（方便放入PPT或文件）。截圖功能會擷取當前3D視圖的內容，不包含UI介面，非常適合用於產品展示或社群媒體分享。'
        },
        {
            question: '預覽過程是否安全？檔案會上傳到伺服器嗎？',
            answer: '完全安全！我們的工具採用純前端技術，所有檔案處理都在您的瀏覽器本地完成。您的STL和3MF檔案不會上傳到任何伺服器，確保隱私和資料安全。您可以放心預覽包含商業機密或個人設計的3D模型檔案。'
        },
        {
            question: '支援多大的3D模型檔案？',
            answer: '檔案大小限制主要取決於您的裝置效能和瀏覽器記憶體。一般來說，我們的工具可以處理幾十MB的STL檔案和更大的3MF檔案。對於非常大的模型檔案（超過100MB），載入時間可能會較長，建議使用效能較好的裝置。如果遇到載入問題，請嘗試重新整理頁面或使用較小的檔案。'
        }
    ],

    tutorialTitle: '如何使用STL/3MF模型預覽工具',
    steps: [
        {
            title: '上傳3D模型檔案',
            description: '首先上傳您想要預覽的STL或3MF檔案。您可以通過<strong>拖曳檔案</strong>到上傳區域，或<strong>點擊瀏覽</strong>選擇檔案。我們的工具支援二進位和ASCII兩種STL格式，以及3MF格式。您可以一次上傳多個檔案進行批次預覽。',
            note: '支援同時上傳多個檔案，工具會自動識別格式並載入。'
        },
        {
            title: '檢視3D模型',
            description: '檔案上傳後，3D視圖會自動載入並顯示模型。使用<strong>滑鼠左鍵拖動</strong>旋轉模型，<strong>滑鼠滾輪</strong>縮放，<strong>滑鼠右鍵拖動</strong>平移視圖。<strong>雙擊模型</strong>可自動將其居中顯示。模型會自動計算包圍盒並居中顯示。',
            note: '首次載入大型模型可能需要幾秒鐘，請耐心等待。'
        },
        {
            title: '檢視模型資訊',
            description: '右側面板會顯示模型的詳細資訊，包括<strong>頂點數</strong>、<strong>面數</strong>、<strong>檔案大小</strong>和<strong>物理尺寸</strong>。這些資訊有助於您了解模型的複雜度和尺寸，確認是否符合3D列印要求。',
            note: '對於3MF檔案，還會顯示顏色、材質等額外資訊。'
        },
        {
            title: '調整視圖和渲染設定',
            description: '使用右側面板的控制選項調整視圖效果。您可以開啟<strong>線框模式</strong>檢查網格結構，啟用<strong>自動旋轉</strong>展示模型，調整<strong>背景顏色</strong>和<strong>材質顏色</strong>，顯示<strong>網格</strong>和<strong>座標軸</strong>輔助參考。',
            note: '線框模式特別適合檢查模型是否有破面或拓撲問題。'
        },
        {
            title: '匯出截圖',
            description: '調整好視角後，點擊<strong>"截圖匯出"</strong>按鈕儲存當前視角的高畫質截圖。您可以選擇PNG或JPG格式，還可以選擇<strong>透明背景</strong>匯出（方便放入PPT或文件）。截圖只包含3D視圖內容，不包含UI介面。',
            note: '截圖功能非常適合用於產品展示、社群媒體分享或文件說明。'
        }
    ],

    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的STL/3MF模型預覽工具。現在您可以隨時隨地在線檢視3D模型，無需安裝任何專業軟體。',

    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: 'STL轉3MF工具',
            description: '將STL檔案轉換為3MF格式，支援顏色、材質等豐富資訊，適合現代3D列印。',
            url: 'https://www.ufreetools.com/tool/stl-to-3mf-converter'
        },
        {
            name: 'STL轉OBJ工具',
            description: '將STL檔案轉換為OBJ格式，支援法線計算，適合遊戲開發和3D建模。',
            url: 'https://www.ufreetools.com/tool/stl-to-obj-converter'
        },
        {
            name: '圖片轉PNG工具',
            description: '將JPG、WebP等多種格式轉換為PNG格式，支援透明背景和批次處理。',
            url: 'https://www.ufreetools.com/tool/image-to-png'
        },
        {
            name: '圖片壓縮器',
            description: '在不明顯損失品質的情況下縮小圖像檔案大小，支援多種格式。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        }
    ],

    referencesTitle: '參考資源',
    references: [
        {
            name: 'STL檔案格式說明',
            description: '了解STL格式的歷史和檔案結構',
            url: 'https://en.wikipedia.org/wiki/STL_%28file_format%29'
        },
        {
            name: '3MF格式官方規範',
            description: '了解3MF格式的技術規範和檔案結構',
            url: 'https://3mf.io/specification/'
        },
        {
            name: 'Three.js官方文件',
            description: '了解3D渲染引擎的技術細節',
            url: 'https://threejs.org/docs/'
        }
    ]
}