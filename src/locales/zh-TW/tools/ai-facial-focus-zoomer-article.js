export default {
    title: 'AI面部聚焦自動裁剪工具：智能頭像優化器使用指南',
    functionTitle: '什麼是AI面部聚焦自動裁剪工具及其工作原理？',
    intro: '我們的<strong>AI面部聚焦自動裁剪工具</strong>是一款基於人工智能的智能圖像處理工具，專門用於檢測照片中的面部位置並自動進行最佳裁剪。該工具使用先進的face-api.js技術，能夠精確識別面部特徵點，智能計算最佳裁剪區域，並為不同社交媒體平台生成優化的頭像尺寸。通過<strong>面部識別自動裁剪</strong>技術，用戶可以快速將普通照片轉換為專業的社交媒體頭像，大大提升個人形象展示效果。',
    
    useCasesTitle: 'AI面部聚焦裁剪的常見應用場景',
    useCases: [
        '社交媒體頭像優化 - 為Instagram、LinkedIn、TikTok、小紅書、微信等平台創建完美頭像',
        '職業形象管理 - 製作專業的商務頭像和個人資料照片',
        '批量頭像處理 - 快速處理多張照片，統一頭像風格',
        '電商產品圖片 - 優化客服頭像和店鋪形象展示',
        '團隊成員介紹 - 為公司網站製作統一規格的員工頭像',
        '線上教育平台 - 優化講師和學員的個人資料圖片',
        '約會應用優化 - 提升交友軟件中的個人形象吸引力',
        '遊戲頭像製作 - 為遊戲賬戶創建個性化頭像圖片'
    ],
    
    tipTitle: '專業提示：',
    tipContent: '為獲得最佳的面部檢測和裁剪效果，建議使用光線充足、面部清晰、正面角度的高質量照片。避免使用過度模糊、側臉或有遮擋物的圖片。',
    
    conclusion: '<strong>AI面部聚焦自動裁剪工具</strong>是現代數字生活中不可或缺的圖像處理助手。無論您是社交媒體達人、職場專業人士，還是內容創作者，這款工具都能幫助您快速創建符合各大平台要求的優質頭像。通過智能面部檢測和自動裁剪技術，您可以節省大量手動編輯時間，同時確保頭像的專業性和一致性。我們的工具完全在瀏覽器本地運行，保護您的隱私安全。',
    
    faqTitle: '常見問題解答',
    faqs: [
        {
            question: 'AI面部聚焦自動裁剪技術是如何工作的？',
            answer: '我們的<strong>AI面部聚焦自動裁剪工具</strong>使用face-api.js庫中的TinyFaceDetector模型來檢測圖像中的人臉。系統首先分析圖像，識別面部區域和68個關鍵特徵點，然後根據面部大小、位置和用戶設定的參數（如邊距、裁剪模式）計算最佳裁剪區域。最後，工具會自動裁剪圖像並生成適合不同社交媒體平台的多種尺寸版本。'
        },
        {
            question: '這個工具支持哪些社交媒體平台的頭像尺寸？',
            answer: '我們的工具支持主流社交媒體平台的標準頭像尺寸，包括Instagram（1080×1080）、LinkedIn（400×400）、YouTube（800×800）、Facebook（180×180）、Twitter（400×400）、TikTok（200×200）、小紅書（400×400）、微信（132×132）和Reddit（256×256）。您可以選擇預設尺寸，也可以自定義裁剪尺寸。工具還提供社交媒體包下載功能，一次性獲取所有平台所需的頭像尺寸。'
        },
        {
            question: '如果照片中有多個人臉，工具會如何處理？',
            answer: '當檢測到多個面部時，我們的<strong>智能頭像裁剪工具</strong>會自動選擇面積最大的面部作為主要裁剪對象。這通常對應於照片中最突出或最靠近鏡頭的人物。如果您需要裁剪其他人臉，建議先手動裁剪出目標人物的區域，然後再使用我們的工具進行精確處理。'
        },
        {
            question: '我可以調整裁剪參數來獲得不同的效果嗎？',
            answer: '是的，我們提供了豐富的參數調整選項。您可以設置面部邊距（10%-100%）來控制面部周圍的留白空間，調整檢測置信度（30%-90%）來優化面部識別準確性，選擇不同的裁剪模式（自動、正方形、自定義尺寸）。所有參數調整都會實時生效，您可以立即看到裁剪效果的變化。'
        },
        {
            question: '工具對圖片質量和格式有什麼要求？',
            answer: '我們的工具支持PNG、JPEG、BMP和WEBP格式的圖片。為了獲得最佳效果，建議使用分辨率在500×500像素以上的高質量圖片。圖片應該光線充足、面部清晰可見，避免過度模糊、強烈陰影或面部遮擋。工具會自動處理不同尺寸的輸入圖片，並生成高質量的裁剪結果。'
        }
    ],
    
    tutorialTitle: '如何使用AI面部聚焦自動裁剪工具',
    steps: [
        {
            title: '調整裁剪參數',
            description: '在左側參數設置面板中，選擇合適的<strong>裁剪模式</strong>（自動、正方形或自定義尺寸）。調整面部邊距滑塊來控制面部周圍的留白空間，設置檢測置信度以優化面部識別準確性。您也可以直接點擊社交媒體預設按鈕快速應用常用平台的尺寸設置。',
            note: '參數調整會實時影響裁剪效果，建議先設置好參數再上傳圖片。'
        },
        {
            title: '上傳待處理圖片',
            description: '將您的照片<strong>拖放</strong>到上傳區域，或點擊選擇文件從設備中選擇圖片。工具支持PNG、JPEG、BMP、WEBP格式，可以同時上傳多張圖片進行批量處理。上傳後會在預覽區域顯示縮略圖。',
            note: '建議使用光線充足、面部清晰的正面照片以獲得最佳效果。'
        },
        {
            title: '開始AI面部檢測和裁剪',
            description: '點擊<strong>"開始處理"</strong>按鈕，工具會自動加載面部識別模型（首次使用需要下載），然後對每張圖片進行面部檢測和智能裁剪。處理過程中會顯示進度狀態和檢測結果。',
            note: '首次使用時模型下載可能需要幾分鐘時間，請耐心等待。'
        },
        {
            title: '查看裁剪結果和社交媒體預覽',
            description: '處理完成後，右側會顯示裁剪結果和分析信息，包括檢測到的面部數量和置信度。每個結果都會顯示Instagram、LinkedIn、YouTube三個平台的預覽效果，幫助您直觀了解在不同平台上的顯示效果。',
            note: '您可以使用縮放、平移功能詳細查看裁剪結果的細節。'
        },
        {
            title: '選擇導出格式和質量',
            description: '為每張處理後的圖片選擇導出格式（PNG、JPG、WEBP）。如果選擇JPG格式，可以調整圖片質量滑塊來平衡文件大小和圖像質量。PNG格式適合需要透明背景的場景，JPG格式文件更小適合網絡傳輸。',
            note: '建議社交媒體頭像使用JPG格式，質量設置在80%-95%之間。'
        },
        {
            title: '下載優化後的頭像',
            description: '點擊<strong>"下載"</strong>按鈕下載單張裁剪後的圖片，或點擊<strong>"下載社交媒體包"</strong>獲取包含所有主流平台尺寸的ZIP壓縮包。批量處理時還可以使用"批量下載"功能一次性下載所有結果。',
            note: '社交媒體包包含Instagram、LinkedIn、YouTube、Facebook、Twitter、TikTok、小紅書、微信、Reddit九個平台的標準尺寸。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功掌握AI面部聚焦自動裁剪工具的使用方法。現在您可以快速為各種社交媒體平台創建專業的頭像，提升您的數字形象！',
    
    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: 'AI面部熱力圖可視化工具',
            description: '分析面部特徵分布，優化人像攝影構圖和光線效果。',
            url: 'https://www.ufreetools.com/tool/ai-facial-heatmap-visualizer'
        },
        {
            name: '圖片壓縮器',
            description: '在保持質量的同時減小圖片文件大小，適合網絡傳輸。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: '圖片批量調整器',
            description: '批量調整圖片尺寸，支持多種縮放模式和格式轉換。',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: '背景移除工具',
            description: '使用AI技術自動移除圖片背景，製作透明背景頭像。',
            url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
        }
    ],
    
    referencesTitle: '參考資源',
    references: [
        {
            name: 'Face-API.js 官方文檔',
            description: '本工具使用的JavaScript面部識別庫的完整技術文檔',
            url: 'https://github.com/vladmandic/face-api'
        },
        {
            name: '社交媒體頭像尺寸指南',
            description: '各大社交媒體平台頭像的標準尺寸和最佳實踐',
            url: 'https://blog.hootsuite.com/social-media-image-sizes-guide/'
        },
        {
            name: '人像攝影構圖技巧',
            description: '專業人像攝影的構圖原則和技巧分享',
            url: 'https://www.theschoolofphotography.com/tutorials/portrait-photography-tips'
        },
        {
            name: '面部識別技術原理',
            description: '深入了解計算機視覺中的面部檢測和識別算法',
            url: 'https://zh.wikipedia.org/wiki/人臉識別'
        }
    ]
}