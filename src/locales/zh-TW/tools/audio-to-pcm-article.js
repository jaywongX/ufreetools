export default {
    title: '音訊轉PCM工具：線上音訊格式轉換器使用指南',
    functionTitle: '什麼是音訊轉PCM工具及其用途？',
    intro: '我們的<strong>音訊轉PCM工具</strong>是一款專業的線上音訊格式轉換應用，可以將WAV、MP3、FLAC、OGG、AAC、M4A、WMA、AMR、AIFF、APE等多種音訊格式轉換為PCM原始音訊資料。PCM（Pulse Code Modulation，脈衝編碼調製）是最原始的數位音訊表示方式，未經任何壓縮，保留了音訊的完整資訊。使用我們的<strong>線上音訊轉PCM轉換器</strong>，您可以精確控制取樣率、位元深度和聲道設定，滿足語音識別、音訊分析、專業音訊處理等多種需求。',
    
    useCasesTitle: '音訊轉PCM的常見應用場景',
    useCases: [
        '為語音識別系統（如百度語音、訊飛語音）準備標準PCM音訊輸入',
        '將各種格式音訊轉換為原始PCM資料用於音訊訊號處理和分析',
        '為嵌入式音訊裝置或遊戲引擎準備原始音訊資料',
        '音訊科研和教學中的原始波形資料分析',
        '音訊編輯軟體的中間格式轉換',
        '語音通訊系統（如VoIP）的音訊預處理',
        '音訊特徵提取和機器學習模型訓練',
        '音訊測試訊號生成和裝置校準'
    ],
    
    tipTitle: '專業提示：',
    tipContent: 'PCM格式參數選擇建議：語音識別推薦16000Hz取樣率、16位元深度、單聲道；CD音質標準為44100Hz、16位元、立體聲；專業音訊製作推薦48000Hz或更高、24位元。PCM檔案體積較大，約為同等時長MP3的10倍左右，請確保有足夠的儲存空間。',
    
    conclusion: '<strong>音訊轉PCM格式轉換</strong>工具對語音識別開發者、音訊演算法工程師、遊戲開發者以及音訊研究人員特別有用。通過使用我們的線上音訊轉PCM轉換器，您可以將各種格式的音訊轉換為原始PCM資料，精確控制取樣率和位元深度，滿足不同應用場景的技術要求。我們的工具支援批次處理，所有處理都在瀏覽器本地完成，確保您的音訊隱私和資料安全。',
    
    faqTitle: '常見問題解答',
    faqs: [
        {
            question: '音訊轉PCM工具支援哪些輸入格式？',
            answer: '我們的<strong>線上音訊轉PCM轉換器</strong>支援多種常見音訊格式，包括WAV、MP3、FLAC、OGG、AAC、M4A、WMA、AMR、AIFF、APE等格式。您可以同時上傳多個不同格式的音訊檔案進行批次轉換。工具會自動檢測輸入格式並處理轉換。'
        },
        {
            question: 'PCM格式和WAV格式有什麼區別？',
            answer: 'WAV是一種容器格式，通常包含PCM編碼的音訊資料，但WAV檔案帶有檔案頭資訊（包含取樣率、位元深度、聲道數等元資料）。純PCM資料則是原始的音訊取樣值，沒有檔案頭。某些應用（如語音識別API）需要純PCM資料輸入，此時需要去除WAV檔案頭。'
        },
        {
            question: '如何為語音識別準備PCM音訊？',
            answer: '大多數語音識別系統（如百度語音識別、訊飛語音識別、Google Speech API）要求PCM格式參數為：<strong>16000Hz取樣率、16位元深度、單聲道</strong>。在轉換時選擇這些參數，即可得到符合要求的PCM音訊。部分系統也支援8000Hz取樣率。'
        },
        {
            question: '什麼是取樣率和位元深度？',
            answer: '<strong>取樣率</strong>指每秒採集音訊樣本的次數，決定了音訊的頻率範圍。8000Hz適合電話語音，16000Hz適合語音識別，44100Hz是CD標準，48000Hz是專業音訊標準。<strong>位元深度</strong>決定每個取樣點的精度，8位元精度較低，16位元是標準，24位元和32位元用於專業音訊製作。'
        },
        {
            question: 'PCM檔案為什麼這麼大？',
            answer: 'PCM是未壓縮的原始音訊資料，不進行任何壓縮處理。例如，1分鐘的16位元、44100Hz立體聲PCM音訊約為10MB。這是PCM格式保證音訊完整性的代價。如果需要減小檔案大小，可以考慮轉換為FLAC等無損壓縮格式，或MP3等有損壓縮格式。'
        },
        {
            question: '轉換過程是否安全？音訊會上傳到伺服器嗎？',
            answer: '完全安全！我們的工具採用純前端技術，所有音訊處理都在您的瀏覽器本地完成。您的音訊檔案不會上傳到任何伺服器，確保隱私和資料安全。您可以放心處理包含敏感內容的音訊檔案。'
        },
        {
            question: '有符號和無符號PCM有什麼區別？',
            answer: '這是PCM資料的儲存格式。<strong>有符號格式</strong>（Signed）使用補碼表示正負值，是大多數音訊處理的標準格式，相容性更好。<strong>無符號格式</strong>（Unsigned）只表示正值，主要用於某些特定硬體或舊系統。一般建議選擇有符號格式。'
        }
    ],
    
    tutorialTitle: '如何使用音訊轉PCM工具',
    steps: [
        {
            title: '上傳您的音訊檔案',
            description: '首先上傳您想要轉換為PCM格式的音訊檔案。您可以通過兩種方式上傳：<strong>拖放檔案</strong>到上傳區域或<strong>點擊瀏覽</strong>選擇檔案。工具支援WAV、MP3、FLAC、OGG、AAC、M4A、WMA、AMR、AIFF、APE等多種格式，您可以一次上傳多個檔案進行批次處理。',
            note: '支援同時上傳多個不同格式的音訊檔案，工具會自動識別並處理。'
        },
        {
            title: '預覽音訊檔案',
            description: '上傳後，您會在左側預覽區域看到所有上傳的音訊檔案列表。每個檔案顯示檔案名稱、原始格式、檔案大小和時長等資訊。您可以點擊播放按鈕預覽音訊，確認選擇了正確的檔案。如果需要刪除某個檔案，點擊刪除圖標即可。',
            note: '批次處理時，建議先預覽音訊列表，確保所有需要轉換的檔案都已正確上傳。'
        },
        {
            title: '設定PCM參數',
            description: '在轉換前，您需要設定PCM輸出參數。選擇合適的<strong>取樣率</strong>（8000Hz-48000Hz），設定<strong>位元深度</strong>（8位元、16位元、24位元、32位元），選擇<strong>聲道</strong>（單聲道或立體聲）。對於語音識別應用，推薦選擇16000Hz取樣率、16位元深度、單聲道。',
            note: '不同的應用場景對PCM參數有不同要求，請根據目標用途選擇合適的參數組合。'
        },
        {
            title: '轉換為PCM格式',
            description: '設定完成後，點擊<strong>"轉換為PCM"</strong>按鈕開始處理。工具會依次處理所有上傳的音訊檔案，批次處理時會顯示進度資訊。轉換時間取決於檔案大小和數量，大多數音訊可以在幾秒到幾十秒內完成。',
            note: '轉換過程中請保持頁面開啟，不要關閉瀏覽器分頁。'
        },
        {
            title: '預覽轉換結果',
            description: '轉換完成後，右側輸出區域會顯示所有轉換後的PCM檔案。每個檔案顯示原始大小、轉換後大小等資訊。由於PCM是原始資料格式，部分瀏覽器可能無法直接播放，您可以下載後在專業音訊軟體中使用。',
            note: 'PCM檔案體積較大，請確保有足夠的儲存空間。'
        },
        {
            title: '下載轉換結果',
            description: '滿意轉換結果後，您可以點擊每個檔案下方的<strong>"下載PCM"</strong>按鈕單獨保存，或使用輸出區域頂部的<strong>"批次下載 (ZIP)"</strong>按鈕將所有轉換後的PCM檔案打包成一個ZIP檔案一次性下載。所有處理都在瀏覽器本地完成，確保您的音訊隱私和安全。',
            note: '下載的PCM檔案可以在語音識別API、音訊分析軟體或其他支援PCM格式的應用中直接使用。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的音訊轉PCM工具。現在您可以將各種格式的音訊轉換為原始PCM資料，用於語音識別、音訊分析、專業音訊處理等多種應用場景。',
    
    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: '音訊轉MP3',
            description: '將音訊轉換為相容性最好的MP3格式，適合音樂播放和分享。',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: '音訊轉WAV',
            description: '將音訊轉換為無損WAV格式，適合專業音訊編輯和存檔。',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: '音訊轉M4A',
            description: '將音訊轉換為適合蘋果裝置的M4A格式。',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: '圖片轉ASCII藝術',
            description: '將圖片轉換為ASCII字元畫，創造獨特的文字藝術效果。',
            url: 'https://www.ufreetools.com/tool/image-to-ascii'
        }
    ],
    
    referencesTitle: '參考資源',
    references: [
        {
            name: 'PCM音訊格式詳解',
            description: '了解PCM脈衝編碼調製的原理和技術細節',
            url: 'https://zh.wikipedia.org/wiki/PCM'
        },
        {
            name: '語音識別音訊要求',
            description: '主流語音識別平台對音訊格式的要求',
            url: 'https://developer.mozilla.org/zh-TW/docs/Web/Media/Formats'
        },
        {
            name: '數位音訊基礎知識',
            description: '取樣率、位元深度、聲道等概念的詳細解釋',
            url: 'https://zh.wikipedia.org/wiki/數位音訊'
        }
    ]
};
