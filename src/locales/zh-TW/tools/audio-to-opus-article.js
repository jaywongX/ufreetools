export default {
    title: '音頻轉Opus工具：線上音頻轉Opus轉換器使用指南',
    functionTitle: '什麼是音頻轉Opus工具及其用途？',
    intro: '我們的<strong>音頻轉Opus工具</strong>是一款專業的線上音頻轉Opus轉換應用，可以將WAV、MP3、FLAC、OGG、AAC、M4A等多種音頻格式轉換為Opus格式。Opus是一種現代的、高度靈活的音頻編碼格式，特別適合網路傳輸、即時通訊和串流媒體應用。使用我們的<strong>線上音頻轉Opus轉換器</strong>，您可以快速將音頻轉換為Opus格式，支援位元率調節、取樣率設定和批次處理，無需安裝任何軟體。',
    
    useCasesTitle: '音頻轉Opus的常見應用場景',
    useCases: [
        '為網路語音通話準備高品質低延遲的音頻',
        '將音樂檔案轉換為Opus格式用於串流媒體播放',
        '優化播客和有聲讀物的音頻體積',
        '為遊戲和應用程式準備音頻資源',
        '將高清音頻轉換為適合行動裝置的格式',
        '準備適合WebRTC通訊的音頻檔案',
        '壓縮音頻檔案以便於網路傳輸和分享',
        '為影片配音準備高效的音頻編碼'
    ],
    
    tipTitle: '專業提示：',
    tipContent: 'Opus編碼器在不同位元率下表現優異。對於純語音內容，16-32kbps即可獲得清晰效果；對於音樂內容，建議使用64kbps以上的位元率。48kHz取樣率是Opus的最佳工作頻率，建議優先選擇。',
    
    conclusion: '<strong>音頻轉Opus轉換</strong>工具對開發者、內容創作者、播客主播以及需要處理網路音頻的使用者特別有用。透過使用我們的線上音頻轉Opus轉換器，您可以將任何音頻轉換為高效的Opus格式，用於網路傳輸、即時通訊、串流媒體等多種場景。我們的工具支援批次處理，提供位元率、取樣率、聲道等參數控制，所有處理都在瀏覽器本地完成，確保您的音頻隱私和安全。',
    
    faqTitle: '常見問題解答',
    faqs: [
        {
            question: '音頻轉Opus工具支援哪些輸入格式？',
            answer: '我們的<strong>線上音頻轉Opus轉換器</strong>支援多種常見音頻格式，包括WAV、MP3、FLAC、OGG、AAC、M4A、WMA、AMR、AIFF、APE等格式。您可以同時上傳多個不同格式的音頻檔案進行批次轉換。工具會自動檢測輸入格式並處理轉換。'
        },
        {
            question: '什麼是Opus格式？為什麼選擇Opus？',
            answer: 'Opus是一種開源、免版稅的音頻編碼格式，由Xiph.Org基金會開發。它的優勢包括：1）極低的延遲，適合即時通訊；2）寬位元率範圍（6-510kbps）；3）出色的音質表現；4）支援語音和音樂編碼；5）廣泛的應用相容性。Opus已被WebRTC、WhatsApp、Discord等平台採用。'
        },
        {
            question: '如何選擇合適的位元率？',
            answer: '位元率選擇取決於用途：16-32kbps適合純語音，檔案體積小；48-64kbps適合語音通話和播客；96-128kbps適合普通音樂，音質優良；192-256kbps適合高傳真音樂，接近無損品質。建議根據實際需求在音質和檔案大小之間取得平衡。'
        },
        {
            question: '取樣率設定有什麼影響？',
            answer: '取樣率決定了音頻的頻率響應範圍。8000Hz適合電話品質語音；16000Hz適合寬頻語音；24000Hz適合高品質語音；48000Hz是Opus的最佳工作頻率，能提供完整的音頻頻譜。建議使用48000Hz以獲得最佳音質，工具會自動處理必要的重取樣。'
        },
        {
            question: '可以批次轉換多個音頻檔案為Opus嗎？',
            answer: '完全可以！我們的<strong>音頻轉Opus工具</strong>支援批次處理功能。您可以一次性上傳多個音頻檔案（支援拖曳或檔案選擇），工具會依次處理所有檔案。處理完成後，您可以單獨下載每個轉換後的Opus檔案，或使用批次下載功能將所有結果打包成ZIP檔案一次性下載。'
        },
        {
            question: '轉換後的Opus檔案相容性如何？',
            answer: 'Opus格式已被廣泛支援：網頁瀏覽器（Chrome、Firefox、Edge、Safari等）、媒體播放器（VLC、foobar2000等）、行動裝置（Android 5.0+、iOS 11+）、串流媒體平台、即時通訊應用（Discord、Telegram等）。轉換後的Opus檔案可以在絕大多數現代裝置和應用中播放。'
        },
        {
            question: '轉換過程是否安全？音頻會上傳到伺服器嗎？',
            answer: '完全安全！我們的工具採用純前端技術，所有音頻處理都在您的瀏覽器本地完成。您的音頻檔案不會上傳到任何伺服器，確保隱私和資料安全。您可以放心處理包含敏感內容的音頻檔案。'
        }
    ],
    
    tutorialTitle: '如何使用音頻轉Opus工具',
    steps: [
        {
            title: '上傳您的音頻檔案',
            description: '首先上傳您想要轉換為Opus格式的音頻檔案。您可以透過兩種方式上傳：<strong>拖曳檔案</strong>到上傳區域或<strong>點擊瀏覽</strong>選擇檔案。工具支援WAV、MP3、FLAC、OGG、AAC、M4A等多種格式，您可以一次上傳多個檔案進行批次處理。',
            note: '建議使用高品質的原始音頻檔案，轉換效果會更好。'
        },
        {
            title: '預覽音頻檔案',
            description: '上傳後，您會在左側預覽區域看到所有上傳的音頻檔案列表。每個檔案顯示檔名、格式和大小資訊。您可以點擊播放按鈕預覽音頻，確認選擇了正確的檔案。如果需要刪除某個檔案，點擊刪除圖示即可。',
            note: '批次處理時，建議先預覽音頻列表，確保所有需要轉換的檔案都已正確上傳。'
        },
        {
            title: '設定Opus參數',
            description: '在轉換前，您可以調整輸出設定。選擇合適的<strong>位元率</strong>（16-256kbps），設定<strong>取樣率</strong>（8-48kHz），選擇<strong>聲道模式</strong>（單聲道/立體聲）。這些參數可以幫助您在音質和檔案大小之間取得平衡。',
            note: '48000Hz取樣率和64-128kbps位元率適合大多數應用場景。'
        },
        {
            title: '轉換為Opus格式',
            description: '設定完成後，點擊<strong>「轉換為Opus」</strong>按鈕開始處理。工具會依次處理所有上傳的音頻檔案，批次處理時會顯示進度資訊。轉換時間取決於檔案大小和數量，大多數音頻可以在幾秒到幾十秒內完成。',
            note: '轉換過程中請保持頁面開啟，不要關閉瀏覽器分頁。'
        },
        {
            title: '預覽轉換結果',
            description: '轉換完成後，右側輸出區域會顯示所有轉換後的Opus檔案。每個檔案提供<strong>播放預覽</strong>功能，顯示原始大小和轉換後大小對比。您可以點擊播放按鈕直接在瀏覽器中預覽音質效果。',
            note: '透過對比檔案大小，您可以了解Opus編碼的壓縮效率。'
        },
        {
            title: '下載轉換結果',
            description: '滿意轉換結果後，您可以點擊每個檔案下方的<strong>「下載Opus」</strong>按鈕單獨儲存，或使用輸出區域頂部的<strong>「批次下載 (ZIP)」</strong>按鈕將所有轉換後的Opus檔案打包成一個ZIP檔案一次性下載。所有處理都在瀏覽器本地完成，確保您的音頻隱私和安全。',
            note: '批次下載時，ZIP檔案中的Opus會保持原始檔名，並自動新增.opus副檔名。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的音頻轉Opus工具。現在您可以輕鬆將各種格式的音頻轉換為高效的Opus格式，用於網路傳輸、即時通訊、串流媒體播放等多種用途。',
    
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
            name: '音頻轉FLAC',
            description: '將音頻轉換為FLAC無損格式，保留完整音質。',
            url: 'https://www.ufreetools.com/tool/audio-to-flac'
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
            name: 'Opus編碼器官網',
            description: '了解Opus編碼器的技術規範和最新發展',
            url: 'https://opus-codec.org/'
        },
        {
            name: 'WebRTC音頻編碼',
            description: '了解Opus在WebRTC中的應用和最佳實踐',
            url: 'https://webrtc.org/'
        },
        {
            name: 'Xiph.Org基金會',
            description: '探索開源多媒體格式和編碼技術',
            url: 'https://xiph.org/'
        }
    ]
};
