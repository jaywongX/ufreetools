export default {
    title: '音頻轉AC3工具：在線音頻轉AC3轉換器使用指南',
    functionTitle: '什麼是音頻轉AC3工具及其用途？',
    intro: '我們的<strong>音頻轉AC3工具</strong>是一款專業的在線音頻轉AC3轉換應用，可以將WAV、MP3、FLAC、OGG、AAC、M4A等多種音頻格式轉換為AC3格式。AC3（Audio Coding 3），又稱杜比數字（Dolby Digital），是一種廣泛使用的音頻編碼格式，特別適合DVD、藍光光盤、數字電視和家庭影院系統。使用我們的<strong>在線音頻轉AC3轉換器</strong>，您可以快速將音頻轉換為AC3格式，支援比特率調節、採樣率設置和批量處理，無需安裝任何軟體。',
    
    useCasesTitle: '音頻轉AC3的常見應用場景',
    useCases: [
        '為DVD和藍光光盤製作準備音頻軌道',
        '將音樂檔案轉換為家庭影院相容格式',
        '為數字電視廣播準備音頻內容',
        '製作支援5.1環繞聲的視頻配音',
        '優化音頻檔案用於串流媒體傳輸',
        '將多聲道音頻編碼為AC3格式',
        '為視頻編輯項目準備AC3音頻',
        '轉換音頻用於專業音頻後期製作'
    ],
    
    tipTitle: '專業提示：',
    tipContent: 'AC3格式在48kHz採樣率和256-384kbps比特率下表現最佳，這也是DVD的標準配置。對於立體聲內容，192-256kbps即可獲得優質音質；對於5.1聲道內容，建議使用384-640kbps比特率以確保各聲道音質。',
    
    conclusion: '<strong>音頻轉AC3轉換</strong>工具對視頻製作者、家庭影院愛好者、廣播工程師以及需要處理多聲道音頻的用戶特別有用。通過使用我們的在線音頻轉AC3轉換器，您可以將任何音頻轉換為廣泛相容的AC3格式，用於DVD製作、家庭影院、數字廣播等多種場景。我們的工具支援批量處理，提供比特率、採樣率、聲道等參數控制，所有處理都在瀏覽器本地完成，確保您的音頻隱私和安全。',
    
    faqTitle: '常見問題解答',
    faqs: [
        {
            question: '音頻轉AC3工具支援哪些輸入格式？',
            answer: '我們的<strong>在線音頻轉AC3轉換器</strong>支援多種常見音頻格式，包括WAV、MP3、FLAC、OGG、AAC、M4A、WMA、AMR、AIFF、APE等格式。您可以同時上傳多個不同格式的音頻檔案進行批量轉換。工具會自動檢測輸入格式並處理轉換。'
        },
        {
            question: '什麼是AC3格式？為什麼選擇AC3？',
            answer: 'AC3（Audio Coding 3）是杜比實驗室開發的音頻編碼格式，也稱為杜比數字（Dolby Digital）。它的優勢包括：1）廣泛相容DVD、藍光、數字電視；2）支援最多5.1聲道環繞聲；3）高效的壓縮算法；4）良好的音質表現；5）行業標準格式。AC3是家庭影院和視頻製作的首選音頻格式之一。'
        },
        {
            question: '如何選擇合適的比特率？',
            answer: '比特率選擇取決於音頻內容和聲道數量：128-192kbps適合單聲道或簡單立體聲；192-256kbps適合標準立體聲音樂；256-384kbps適合高品質立體聲和簡單多聲道；384-448kbps適合5.1聲道內容；448-640kbps適合高品質5.1聲道。建議根據實際需求在音質和檔案大小之間取得平衡。'
        },
        {
            question: '採樣率設置有什麼影響？',
            answer: '採樣率決定了音頻的頻率響應範圍。44100Hz是CD標準，適合音樂；48000Hz是DVD和數字電視標準，推薦用於視頻製作；96000Hz是高清音頻標準，適合專業音頻製作。建議使用48000Hz以獲得最佳的DVD和家庭影院相容性。'
        },
        {
            question: '可以批量轉換多個音頻檔案為AC3嗎？',
            answer: '完全可以！我們的<strong>音頻轉AC3工具</strong>支援批量處理功能。您可以一次性上傳多個音頻檔案（支援拖拽或檔案選擇），工具會依次處理所有檔案。處理完成後，您可以單獨下載每個轉換後的AC3檔案，或使用批量下載功能將所有結果打包成ZIP檔案一次性下載。'
        },
        {
            question: 'AC3格式支援哪些聲道配置？',
            answer: 'AC3格式支援多種聲道配置：單聲道（1.0）、立體聲（2.0）、以及最多5.1聲道（左、右、中置、左環繞、右環繞、低頻效果）。聲道選擇取決於源檔案的聲道數，如果源檔案是立體聲，轉換為5.1聲道不會增加額外聲道資訊。'
        },
        {
            question: '轉換過程是否安全？音頻會上傳到伺服器嗎？',
            answer: '完全安全！我們的工具採用純前端技術，所有音頻處理都在您的瀏覽器本地完成。您的音頻檔案不會上傳到任何伺服器，確保隱私和資料安全。您可以放心處理包含敏感內容的音頻檔案。'
        }
    ],
    
    tutorialTitle: '如何使用音頻轉AC3工具',
    steps: [
        {
            title: '上傳您的音頻檔案',
            description: '首先上傳您想要轉換為AC3格式的音頻檔案。您可以通過兩種方式上傳：<strong>拖拽檔案</strong>到上傳區域或<strong>點擊瀏覽</strong>選擇檔案。工具支援WAV、MP3、FLAC、OGG、AAC、M4A等多種格式，您可以一次上傳多個檔案進行批量處理。',
            note: '建議使用高品質的原始音頻檔案，轉換效果會更好。'
        },
        {
            title: '預覽音頻檔案',
            description: '上傳後，您會在左側預覽區域看到所有上傳的音頻檔案列表。每個檔案顯示檔案名、格式和大小資訊。您可以點擊播放按鈕預覽音頻，確認選擇了正確的檔案。如果需要刪除某個檔案，點擊刪除圖標即可。',
            note: '批量處理時，建議先預覽音頻列表，確保所有需要轉換的檔案都已正確上傳。'
        },
        {
            title: '設置AC3參數',
            description: '在轉換前，您可以調整輸出設置。選擇合適的<strong>比特率</strong>（128-640kbps），設置<strong>採樣率</strong>（44.1/48/96kHz），選擇<strong>聲道模式</strong>（單聲道/立體聲/5.1聲道）。這些參數可以幫助您在音質和檔案大小之間取得平衡。',
            note: '48kHz採樣率和256kbps比特率適合大多數DVD和家庭影院應用場景。'
        },
        {
            title: '轉換為AC3格式',
            description: '設置完成後，點擊<strong>"轉換為AC3"</strong>按鈕開始處理。工具會依次處理所有上傳的音頻檔案，批量處理時會顯示進度資訊。轉換時間取決於檔案大小和數量，大多數音頻可以在幾秒到幾十秒內完成。',
            note: '轉換過程中請保持頁面打開，不要關閉瀏覽器標籤頁。'
        },
        {
            title: '預覽轉換結果',
            description: '轉換完成後，右側輸出區域會顯示所有轉換後的AC3檔案。每個檔案提供<strong>播放預覽</strong>功能，顯示原始大小和轉換後大小對比。您可以點擊播放按鈕直接在瀏覽器中預覽音質效果。',
            note: '通過對比檔案大小，您可以了解AC3編碼的壓縮效率。'
        },
        {
            title: '下載轉換結果',
            description: '滿意轉換結果後，您可以點擊每個檔案下方的<strong>"下載AC3"</strong>按鈕單獨保存，或使用輸出區域頂部的<strong>"批量下載 (ZIP)"</strong>按鈕將所有轉換後的AC3檔案打包成一個ZIP檔案一次性下載。所有處理都在瀏覽器本地完成，確保您的音頻隱私和安全。',
            note: '批量下載時，ZIP檔案中的AC3會保持原始檔案名，並自動添加.ac3擴展名。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的音頻轉AC3工具。現在您可以輕鬆將各種格式的音頻轉換為廣泛相容的AC3格式，用於DVD製作、家庭影院、數字廣播等多種用途。',
    
    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: '音頻轉MP3',
            description: '將音頻轉換為MP3格式，相容性最好，適合通用場景。',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: '音頻轉AAC',
            description: '將音頻轉換為AAC格式，適合蘋果裝置和串流媒體應用。',
            url: 'https://www.ufreetools.com/tool/audio-to-aac'
        },
        {
            name: '音頻轉WAV',
            description: '將音頻轉換為WAV無損格式，適合專業音頻處理。',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: '音頻轉M4A',
            description: '將音頻轉換為M4A格式，適合蘋果生態和便攜設備。',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        }
    ],
    
    referencesTitle: '參考資源',
    references: [
        {
            name: '杜比數字技術介紹',
            description: '了解杜比數字AC3格式的技術規範和應用',
            url: 'https://www.dolby.com/technologies/dolby-digital/'
        },
        {
            name: 'AC3編碼標準',
            description: '深入了解AC3音頻編碼的技術細節',
            url: 'https://en.wikipedia.org/wiki/Dolby_Digital'
        },
        {
            name: 'DVD音頻規範',
            description: '探索DVD視頻和音頻的技術標準',
            url: 'https://en.wikipedia.org/wiki/DVD'
        }
    ]
};
