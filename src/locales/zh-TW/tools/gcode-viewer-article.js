export default {
    title: 'GCode檢視器工具：線上3D列印預覽指南',
    functionTitle: '什麼是GCode檢視器工具及其用途？',
    intro: '我們的<strong>GCode檢視器</strong>是一款專業的線上3D列印預覽工具，可以快速載入和預覽GCode格式的3D列印檔案。無需安裝任何軟體，只需在瀏覽器中打開即可查看3D列印路徑的各個角度。',
    useCasesTitle: 'GCode檢視器的常見應用場景',
    useCases: [
        '在3D列印前預覽GCode檔案，檢查列印路徑是否正確',
        '查看列印設定如層高、溫度等參數是否符合要求',
        '逐層查看列印過程，檢查每一層的路徑和填充情況',
        '使用路徑視覺化檢查空駛路徑和回抽設定是否合理',
        '為3D列印路徑截圖用於產品展示或文件說明',
        '在沒有安裝切片軟體的情況下快速查看GCode檔案',
        '批次預覽多個GCode檔案，快速篩選需要的列印檔案',
        '向客戶或團隊成員展示3D列印路徑設計'
    ],
    tipTitle: '專業提示：',
    tipContent: '使用滑鼠左鍵拖曳可旋轉視角，右鍵拖曳可平移視圖，滾輪可縮放。雙擊可自動將其居中顯示。使用層控制滑塊可以逐層查看列印過程。',
    conclusion: '<strong>GCode檢視器</strong>工具對3D列印愛好者、設計師、工程師以及需要查看3D列印檔案的用戶特別有用。所有處理都在瀏覽器本地完成，確保您的列印資料隱私和安全。',
    faqTitle: '常見問題解答',
    faqs: [
        { question: 'GCode檢視器支援哪些檔案格式？', answer: '我們的<strong>線上GCode檢視器</strong>支援GCode格式的3D列印檔案。' },
        { question: '如何旋轉和縮放3D列印路徑？', answer: '使用滑鼠左鍵拖曳可以旋轉視角，查看列印路徑的不同角度。' },
        { question: 'GCode資訊面板顯示哪些資訊？', answer: 'GCode資訊面板顯示總行數、總命令數、檔案大小、預計時間、列印尺寸和列印設定等。' },
        { question: '什麼是層控制功能？有什麼用途？', answer: '層控制功能允許您逐層查看3D列印的路徑，播放動畫功能可以自動展示每一層的列印過程。' },
        { question: '可以匯出3D列印路徑的截圖嗎？', answer: '可以！我們的工具支援一鍵匯出當前視角的高清截圖。' },
        { question: '預覽過程是否安全？檔案會上傳到伺服器嗎？', answer: '完全安全！我們的工具採用純前端技術，所有檔案處理都在您的瀏覽器本地完成。' },
        { question: '支援多大的GCode檔案？', answer: '我們的工具支援各種大小的GCode檔案。' }
    ],
    tutorialTitle: '使用教程',
    steps: [
        { title: '上傳GCode檔案', description: '點擊上傳區域或直接拖放GCode檔案到指定區域。支援批次上傳多個檔案。', note: '支援標準的GCode格式檔案。' },
        { title: '查看列印路徑', description: '上傳後自動顯示3D列印路徑。使用滑鼠左鍵拖曳旋轉視角。', note: '綠色線條表示正常列印路徑，紅色線條表示回抽路徑。' },
        { title: '查看列印資訊', description: '在左側面板查看GCode資訊，包括列印尺寸、層高、溫度等設定。', note: '這些資訊有助於確認列印參數是否符合要求。' },
        { title: '逐層查看', description: '使用層控制功能逐層查看列印過程。可以播放動畫自動展示每一層。', note: '逐層查看有助於發現每一層的潛在問題。' },
        { title: '調整設定並匯出', description: '根據需要調整顯示設定，然後點擊截圖按鈕匯出圖片。', note: '可以選擇PNG或JPG格式，支援透明背景匯出。' }
    ],
    successTitle: '成功！',
    successContent: '您已成功掌握GCode檢視器的使用方法。現在可以開始使用該工具來預覽和分析您的3D列印檔案了。',
    relatedToolsTitle: '相關工具',
    relatedTools: [
        { name: 'STL/3MF模型預覽', description: '線上預覽STL和3MF格式的3D模型檔案', url: '/tools/stl-3mf-model-viewer' },
        { name: 'STL轉3MF轉換器', description: '將STL檔案轉換為3MF格式', url: '/tools/stl-to-3mf-converter' },
        { name: 'STL轉OBJ轉換器', description: '將STL檔案轉換為OBJ格式', url: '/tools/stl-to-obj-converter' },
        { name: 'OBJ轉STL轉換器', description: '將OBJ檔案轉換為STL格式', url: '/tools/obj-to-stl-converter' }
    ],
    referencesTitle: '參考資源',
    references: [
        { name: 'GCode基礎教程', description: '了解GCode的基本語法和常用命令', url: 'https://en.wikipedia.org/wiki/G-code' },
        { name: '3D列印切片軟體比較', description: '了解不同切片軟體的特點和使用方法', url: 'https://all3dp.com/1/best-3d-slicer-software/' },
        { name: '3D列印故障排除指南', description: '解決常見的3D列印問題', url: 'https://www.simplify3d.com/resources/print-quality-troubleshooting/' }
    ]
};