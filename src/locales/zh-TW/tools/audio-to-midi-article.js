export default {
    title: '音訊轉MIDI工具：線上音訊轉MIDI轉換器使用指南',
    functionTitle: '什麼是音訊轉MIDI工具及其用途？',
    intro: '我們的<strong>音訊轉MIDI工具</strong>是一款專業的線上音訊轉MIDI轉換應用，可以將WAV、MP3、FLAC、OGG、AAC、M4A等多種音訊格式轉換為MIDI格式。MIDI（Musical Instrument Digital Interface）是一種音樂行業標準格式，記錄音符、力度、時長等音樂資訊而非音訊本身，特別適合音樂製作、編曲學習、音樂分析和數位音樂處理。使用我們的<strong>線上音訊轉MIDI轉換器</strong>，您可以快速將音訊中的旋律提取為MIDI音符，支援批量處理和精確參數調節，無需安裝任何軟體。',
    
    useCasesTitle: '音訊轉MIDI的常見應用場景',
    useCases: [
        '從錄音或音訊檔案中提取旋律用於音樂編曲和製作',
        '將哼唱或口哨旋律轉換為MIDI進行音樂創作',
        '分析現有音樂的音符結構用於學習和研究',
        '為影片或遊戲製作背景音樂的MIDI版本',
        '將真實樂器演奏轉換為數位音樂用於後期編輯',
        '提取歌曲主旋律用於卡拉OK或伴奏製作',
        '將老歌或黑膠唱片音樂數位化為MIDI格式',
        '為音樂教學準備可編輯的樂譜素材'
    ],
    
    tipTitle: '專業提示：',
    tipContent: 'MIDI轉換效果受音訊質量影響較大。單聲道、清晰、無雜訊的音訊轉換效果最佳。對於複雜的多聲部音樂，建議先進行音軌分離，再分別轉換。轉換後可以在DAW軟體中進一步編輯和最佳化MIDI資料。',
    
    conclusion: '<strong>音訊轉MIDI轉換</strong>工具對音樂製作人、作曲家、音樂教育工作者以及音樂愛好者特別有用。通過使用我們的線上音訊轉MIDI轉換器，您可以將任何音訊中的旋律提取為可編輯的MIDI音符資料，用於音樂創作、編曲、學習和分析。我們的工具支援批量處理，提供靈敏度、音符範圍、時間量化等參數控制，所有處理都在瀏覽器本地完成，確保您的音訊隱私和安全。',
    
    faqTitle: '常見問題解答',
    faqs: [
        {
            question: '音訊轉MIDI工具支援哪些輸入格式？',
            answer: '我們的<strong>線上音訊轉MIDI轉換器</strong>支援多種常見音訊格式，包括WAV、MP3、FLAC、OGG、AAC、M4A、WMA、AMR、AIFF、APE等格式。您可以同時上傳多個不同格式的音訊檔案進行批量轉換。工具會自動檢測輸入格式並處理轉換。'
        },
        {
            question: '什麼是MIDI格式？為什麼需要轉MIDI？',
            answer: 'MIDI（Musical Instrument Digital Interface）是一種記錄音樂演奏資訊的數位格式，不包含實際音訊，而是記錄音符、力度、時長等資訊。轉MIDI後可以：1）在DAW軟體中編輯音符；2）更換樂器音色；3）調整音樂速度和調性；4）用於音樂學習和分析。MIDI檔案體積小，易於編輯和分享。'
        },
        {
            question: '轉換靈敏度如何選擇？',
            answer: '靈敏度決定了音符檢測的精細程度。高靈敏度適合複雜音樂，能檢測更多細節，但可能產生多餘音符；中等靈敏度是推薦設定，平衡準確性和簡潔性；低靈敏度適合簡單旋律，只檢測主要音符。建議根據音訊複雜度選擇合適的靈敏度。'
        },
        {
            question: '可以批量轉換多個音訊檔案為MIDI嗎？',
            answer: '完全可以！我們的<strong>音訊轉MIDI工具</strong>支援批量處理功能。您可以一次性上傳多個音訊檔案（支援拖曳或檔案選擇），工具會依次處理所有檔案。處理完成後，您可以單獨下載每個轉換後的MIDI檔案，或使用批量下載功能將所有結果打包成ZIP檔案一次性下載。'
        },
        {
            question: '轉換效果受哪些因素影響？',
            answer: 'MIDI轉換效果主要受以下因素影響：1）音訊質量 - 清晰無雜訊的音訊效果最佳；2）音樂複雜度 - 單旋律比多聲部轉換效果更好；3）樂器類型 - 鋼琴、吉他等清晰樂器效果更好；4）音訊格式 - 無損格式（WAV、FLAC）比有損格式（MP3）效果更好。建議使用高品質的原始音訊。'
        },
        {
            question: '轉換過程是否安全？音訊會上傳到伺服器嗎？',
            answer: '完全安全！我們的工具採用純前端技術，所有音訊處理都在您的瀏覽器本地完成。您的音訊檔案不會上傳到任何伺服器，確保隱私和資料安全。您可以放心處理包含敏感內容的音訊檔案。'
        },
        {
            question: '轉換後的MIDI可以在哪些軟體中使用？',
            answer: '轉換後的MIDI檔案可以在幾乎所有音樂軟體中使用，包括：DAW軟體（Cubase、Logic Pro、FL Studio、Ableton Live等）、打譜軟體（Sibelius、Finale、MuseScore等）、虛擬樂器、音樂學習軟體等。MIDI是通用格式，相容性極強。'
        }
    ],
    
    tutorialTitle: '如何使用音訊轉MIDI工具',
    steps: [
        {
            title: '上傳您的音訊檔案',
            description: '首先上傳您想要轉換為MIDI格式的音訊檔案。您可以通過兩種方式上傳：<strong>拖曳檔案</strong>到上傳區域或<strong>點擊瀏覽</strong>選擇檔案。工具支援WAV、MP3、FLAC、OGG、AAC、M4A等多種格式，您可以一次上傳多個檔案進行批量處理。',
            note: '建議使用清晰、無雜訊的音訊檔案，單旋律音訊轉換效果最佳。'
        },
        {
            title: '預覽音訊檔案',
            description: '上傳後，您會在左側預覽區域看到所有上傳的音訊檔案列表。每個檔案顯示檔案名稱、格式和大小資訊。您可以點擊播放按鈕預覽音訊，確認選擇了正確的檔案。如果需要刪除某個檔案，點擊刪除圖示即可。',
            note: '批量處理時，建議先預覽音訊列表，確保所有需要轉換的檔案都已正確上傳。'
        },
        {
            title: '設定MIDI參數',
            description: '在轉換前，您可以調整輸出設定。選擇合適的<strong>轉換靈敏度</strong>（高/中/低），設定<strong>音符範圍</strong>（最低和最高音符），設定<strong>時間量化</strong>（音符時長的精確度）。這些參數可以幫助您獲得更好的轉換效果。',
            note: '中等靈敏度和自動音符範圍適合大多數音訊，如果效果不理想可以嘗試調整。'
        },
        {
            title: '轉換為MIDI格式',
            description: '設定完成後，點擊<strong>"轉換為MIDI"</strong>按鈕開始處理。工具會依次處理所有上傳的音訊檔案，批量處理時會顯示進度資訊。轉換時間取決於檔案大小和數量，大多數音訊可以在幾秒到幾十秒內完成。',
            note: '轉換過程中請保持頁面開啟，不要關閉瀏覽器標籤頁。'
        },
        {
            title: '預覽轉換結果',
            description: '轉換完成後，右側輸出區域會顯示所有轉換後的MIDI檔案。每個檔案提供<strong>預覽</strong>功能，顯示音符數量和時長資訊。您可以在DAW軟體中開啟MIDI檔案進行詳細編輯和最佳化。',
            note: 'MIDI檔案可在任何音樂軟體中開啟，建議使用專業DAW進行後期編輯。'
        },
        {
            title: '下載轉換結果',
            description: '滿意轉換結果後，您可以點擊每個檔案下方的<strong>"下載MIDI"</strong>按鈕單獨儲存，或使用輸出區域頂部的<strong>"批量下載 (ZIP)"</strong>按鈕將所有轉換後的MIDI檔案打包成一個ZIP檔案一次性下載。所有處理都在瀏覽器本地完成，確保您的音訊隱私和安全。',
            note: '批量下載時，ZIP檔案中的MIDI會保持原始檔案名稱，並自動添加.mid副檔名。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的音訊轉MIDI工具。現在您可以輕鬆將各種格式的音訊轉換為MIDI格式，用於音樂創作、編曲學習、音樂分析等多種用途。',
    
    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: '音訊轉MP3',
            description: '將音訊轉換為MP3格式，節省儲存空間便於分享。',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: '音訊轉WAV',
            description: '將音訊轉換為WAV無損格式，適合專業音訊處理。',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: '音訊轉M4A',
            description: '將音訊轉換為M4A格式，相容蘋果裝置，音質優良。',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: '音訊轉PCM',
            description: '將音訊轉換為PCM原始格式，適合專業音訊處理和分析。',
            url: 'https://www.ufreetools.com/tool/audio-to-pcm'
        }
    ],
    
    referencesTitle: '參考資源',
    references: [
        {
            name: 'MIDI格式標準',
            description: '了解MIDI格式的技術規範和應用場景',
            url: 'https://en.wikipedia.org/wiki/MIDI'
        },
        {
            name: '音訊轉MIDI技術原理',
            description: '深入了解音高檢測和MIDI轉換演算法',
            url: 'https://en.wikipedia.org/wiki/Audio_to_score'
        },
        {
            name: '音樂資訊檢索',
            description: '探索音樂資訊檢索和自動音樂轉錄技術',
            url: 'https://en.wikipedia.org/wiki/Music_information_retrieval'
        }
    ]
};
