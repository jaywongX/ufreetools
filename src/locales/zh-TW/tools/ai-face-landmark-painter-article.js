export default {
    title: 'AI人臉關鍵點繪製器 - 智能人臉標記與編輯工具使用指南',

    functionTitle: '工具功能介紹與應用場景',
    intro: '<strong>AI人臉關鍵點繪製器</strong>是一款基於人工智能技術的<strong>線上人臉特徵點檢測與編輯工具</strong>。它能夠自動識別並標記出人臉的68個關鍵特徵點，包括眼部、鼻部、嘴部和面部輪廓等重要區域，為用戶提供精確的<strong>人臉結構分析</strong>和<strong>可視化編輯功能</strong>。',

    useCasesTitle: '主要應用場景',
    useCases: [
        '頭像設計與創作：為設計師提供精確的面部特徵參考',
        '人臉識別研究：用於學術研究和算法開發',
        '美妝應用開發：為AR美妝應用提供關鍵點數據',
        '動畫製作：為面部動畫提供控制點',
        '醫學美容分析：分析面部比例和對稱性',
        'VR/AR應用：為虛擬現實應用提供面部追蹤數據',
        '教育培訓：用於計算機視覺和AI教學',
        '藝術創作：為數字藝術創作提供技術支持'
    ],

    tipTitle: '專業提示',
    tipContent: '為獲得最佳檢測效果，請使用清晰、光線充足的正面人臉照片。工具支持拖拽編輯關鍵點位置，可根據實際需要進行微調。',

    conclusion: '無論您是專業設計師、研究人員還是開發者，這款<strong>AI人臉關鍵點繪製器</strong>都能為您的項目提供強大的技術支持。工具完全免費，支持批量處理和多種導出格式，讓您的創作更加高效便捷。',

    faqTitle: '常見問題解答',

    faq1: {
        question: '什麼是人臉關鍵點檢測？',
        answer: '<strong>人臉關鍵點檢測</strong>是計算機視覺領域的重要技術，通過AI算法自動識別人臉上的特徵點位置。我們的工具使用68點模型，能夠精確標記眼部、鼻部、嘴部和面部輪廓等關鍵區域，為後續的<strong>面部分析</strong>、<strong>表情識別</strong>和<strong>3D建模</strong>提供基礎數據。'
    },

    faq2: {
        question: '檢測出的關鍵點可以編輯嗎？',
        answer: '是的！我們的工具支持<strong>交互式編輯功能</strong>。檢測完成後，您可以通過滑鼠點擊並拖拽任意關鍵點來調整其位置。這對於<strong>精細化調整</strong>、<strong>藝術創作</strong>或<strong>特殊需求定制</strong>非常有用。所有修改都會實時更新在畫布上。'
    },

    faq3: {
        question: '支持哪些導出格式？',
        answer: '工具支持多種導出格式以滿足不同需求：<strong>PNG/JPG/WEBP</strong>格式適用於圖像處理，<strong>SVG格式</strong>適用於矢量圖形設計。SVG格式特別適合<strong>網頁設計</strong>、<strong>印刷品製作</strong>和<strong>可縮放圖形</strong>應用。'
    },

    faq4: {
        question: '檢測準確度如何？',
        answer: '我們使用業界先進的<strong>face-api.js庫</strong>和<strong>68點人臉模型</strong>，在理想條件下檢測準確度可達95%以上。檢測效果受光線條件、人臉角度、圖片清晰度等因素影響。建議使用<strong>正面清晰照片</strong>以獲得最佳效果。'
    },

    faq5: {
        question: '數據安全嗎？',
        answer: '絕對安全！所有圖片處理都在您的<strong>本地瀏覽器</strong>中完成，不會上傳到任何服務器。我們嚴格保護用戶隱私，確保您的圖片數據完全安全。工具支持<strong>離線使用</strong>，讓您的隱私得到最大保障。'
    },

    tutorialTitle: '詳細使用教程',

    step1: {
        title: '上傳人臉圖片',
        description: '點擊上傳區域或直接<strong>拖拽圖片文件</strong>到工具中。支持PNG、JPEG、BMP、WEBP等常見格式。也可以點擊"加載示例圖片"體驗工具功能。',
        note: '建議使用清晰的正面人臉照片，避免側臉或多人照片以確保檢測準確度。'
    },

    step2: {
        title: '配置繪製參數',
        description: '在左側設置面板中調整<strong>顯示選項</strong>和<strong>樣式參數</strong>。您可以選擇是否顯示關鍵點、連線和編號，並自定義顏色、大小等視覺效果。',
        note: '不同的參數設置適用於不同的應用場景，可根據實際需要進行調整。'
    },

    step3: {
        title: '執行關鍵點檢測',
        description: '點擊<strong>"檢測關鍵點"</strong>按鈕開始AI分析。工具會自動加載模型並檢測人臉特徵點，整個過程通常需要3-10秒鐘。',
        note: '首次使用需要下載AI模型文件，請確保網絡連接穩定。'
    },

    step4: {
        title: '編輯關鍵點位置',
        description: '檢測完成後，可以<strong>點擊並拖拽</strong>任意關鍵點來調整位置。支持實時預覽編輯效果，所有修改都會立即反映在畫布上。',
        note: '編輯功能特別適用於精細化調整和創意設計，可以根據具體需求自由調整。'
    },

    step5: {
        title: '預覽和調整效果',
        description: '使用右側的<strong>縮放和平移</strong>功能查看細節效果。可以放大查看具體關鍵點位置，確保編輯結果符合預期。',
        note: '充分利用預覽功能可以幫助您獲得更精確的編輯結果。'
    },

    step6: {
        title: '導出處理結果',
        description: '選擇合適的<strong>導出格式</strong>（PNG/JPG/WEBP/SVG），調整圖片質量參數，然後點擊下載按鈕。支持<strong>批量處理</strong>和<strong>ZIP打包下載</strong>。',
        note: 'SVG格式特別適合需要矢量圖形的應用場景，如網頁設計和印刷品製作。'
    },

    successTitle: '處理完成',
    successContent: '恭喜！您已成功完成人臉關鍵點檢測和編輯。您可以將結果用於各種創意項目、研究工作或商業應用。',

    relatedToolsTitle: '相關推薦工具',

    relatedTool1: {
        name: 'AI多人臉標記工具',
        description: '支持多人臉檢測和標記，適用於團隊照片處理',
        url: 'https://www.ufreetools.com/tool/ai-multi-face-tagger'
    },

    relatedTool2: {
        name: 'AI年齡性別估計器',
        description: '基於AI技術估算年齡和性別，支持批量分析',
        url: 'https://www.ufreetools.com/tool/ai-age-gender-estimator'
    },

    relatedTool3: {
        name: '圖像背景移除工具',
        description: '智能移除圖片背景，支持批量處理',
        url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
    },

    relatedTool4: {
        name: '圖像顏色反轉工具',
        description: '一鍵反轉圖片顏色，創造藝術效果',
        url: 'https://www.ufreetools.com/tool/invert-image-colors'
    },

    referencesTitle: '參考資料與技術文檔',

    reference1: {
        name: 'face-api.js官方文檔',
        description: '了解face-api.js庫的詳細技術文檔和API參考',
        url: 'https://github.com/justadudewhohacks/face-api.js'
    },

    reference2: {
        name: '人臉關鍵點檢測技術原理',
        description: '一種穩健高效的有效面部關鍵點檢測方法',
        url: 'https://www.mdpi.com/2076-3417/14/16/7153'
    },

    reference3: {
        name: 'SVG格式技術規範',
        description: 'SVG矢量圖形格式的技術標準和應用指南',
        url: 'https://www.w3.org/Graphics/SVG/'
    }
};