export default {
    title: '音頻轉SRT字幕工具：線上音頻轉字幕轉換器使用指南',
    functionTitle: '什麼是音頻轉SRT字幕工具及其用途？',
    intro: '我們的<strong>音頻轉SRT字幕工具</strong>是一款專業的線上音頻轉字幕應用，可以將WAV、MP3、FLAC、OGG、AAC、M4A等多種音頻格式轉換為SRT字幕格式。SRT（SubRip Text）是最廣泛使用的字幕格式之一，幾乎所有影片播放器和編輯軟體都支援該格式。使用我們的<strong>線上音頻轉字幕轉換器</strong>，您可以透過分析音頻能量來自動檢測語音段落，生成精確的字幕時間碼。工具支援靈敏度調節、字幕時長設定和批次處理，所有處理都在瀏覽器本地完成，無需安裝任何軟體。',
    
    useCasesTitle: '音頻轉SRT字幕的常見應用場景',
    useCases: [
        '為影片製作SRT字幕檔案，上傳到YouTube、Bilibili等影片平台',
        '將Podcast錄音自動分段，方便後續添加文字內容',
        '為線上課程影片生成字幕時間軸',
        '將會議錄音轉換為帶時間碼的字幕檔案',
        '為短影片（抖音、快手）添加字幕做準備',
        '將有聲書錄音分段，配合文字內容製作字幕',
        '為音樂歌詞影片生成字幕時間碼',
        '為訪談或紀錄片原始素材創建字幕骨架'
    ],
    
    tipTitle: '專業提示：',
    tipContent: '本工具透過音頻能量檢測來識別語音段落，不會自動識別語音內容。生成的SRT檔案包含時間碼和佔位文字，您可以導入到字幕編輯軟體（如Aegisub、Subtitle Edit等）中替換為實際文字。對於背景噪音較大的音頻，建議先進行降噪處理以獲得更準確的時間碼。',
    
    conclusion: '<strong>音頻轉SRT字幕</strong>工具對影片創作者、Podcast製作者、內容創作者以及任何需要為音頻/影片添加字幕的使用者特別有用。透過使用我們的線上音頻轉字幕轉換器，您可以快速為音頻生成精確的字幕時間軸，大大節省手動打軸的時間。我們的工具支援批次處理，提供靈敏度、字幕時長、靜音間隔等參數控制，所有處理都在瀏覽器本地完成，確保您的音頻隱私和安全。',
    
    faqTitle: '常見問題解答',
    faqs: [
        {
            question: '音頻轉SRT字幕工具支援哪些輸入格式？',
            answer: '我們的<strong>線上音頻轉字幕轉換器</strong>支援多種常見音頻格式，包括WAV、MP3、FLAC、OGG、AAC、M4A、WMA、AMR、AIFF、APE等格式。您可以同時上傳多個不同格式的音頻檔案進行批次轉換。'
        },
        {
            question: '什麼是SRT字幕格式？',
            answer: 'SRT（SubRip Text）是最流行的字幕檔案格式之一，由SubRip軟體創建。它使用純文字格式，包含序號、時間碼和字幕文字。幾乎所有影片播放器（VLC、PotPlayer等）和影片編輯軟體（Premiere、Final Cut等）都支援SRT格式。'
        },
        {
            question: '工具會自動識別語音內容嗎？',
            answer: '目前本工具透過分析音頻能量來自動檢測語音和靜音段落，生成字幕時間碼，但不會自動將語音轉換為文字。生成的字幕檔案包含時間碼和佔位文字，您需要在字幕編輯軟體中手動輸入或使用語音識別工具添加實際文字內容。'
        },
        {
            question: '如何獲得更準確的時間碼？',
            answer: '要獲得更準確的時間碼，建議：1）使用高品質、低噪音的音頻檔案；2）選擇適合音頻特徵的靈敏度設定；3）根據語速調整最小靜音間隔；4）對於背景噪音較大的音頻，先進行降噪處理。'
        },
        {
            question: '可以批次轉換多個音頻檔案為SRT嗎？',
            answer: '完全可以！我們的<strong>音頻轉SRT字幕工具</strong>支援批次處理功能。您可以一次上傳多個音頻檔案，工具會依次處理所有檔案。處理完成後，可以單獨下載每個SRT檔案，或使用批次下載功能將所有結果打包成ZIP檔案。'
        },
        {
            question: '轉換後的SRT檔案可以在哪些軟體中使用？',
            answer: '轉換後的SRT檔案可以在幾乎所有字幕編輯軟體和影片編輯軟體中使用，包括：Aegisub、Subtitle Edit、PotPlayer、VLC播放器、Adobe Premiere、Final Cut Pro、DaVinci Resolve等。'
        },
        {
            question: '轉換過程是否安全？音頻會上傳到伺服器嗎？',
            answer: '完全安全！我們的工具採用純前端技術，所有音頻處理都在您的瀏覽器本地完成。您的音頻檔案不會上傳到任何伺服器，確保隱私和資料安全。'
        }
    ],
    
    tutorialTitle: '如何使用音頻轉SRT字幕工具',
    steps: [
        {
            title: '上傳您的音頻檔案',
            description: '首先上傳您想要轉換為SRT字幕的音頻檔案。您可以透過兩種方式上傳：<strong>拖放檔案</strong>到上傳區域或<strong>點擊瀏覽</strong>選擇檔案。工具支援WAV、MP3、FLAC、OGG、AAC、M4A等多種格式。',
            note: '建議使用清晰、背景噪音小的音頻檔案，以獲得更準確的時間碼。'
        },
        {
            title: '預覽音頻檔案',
            description: '上傳後，您會在左側預覽區域看到所有上傳的音頻檔案列表。每個檔案顯示檔案名稱、格式和大小資訊。您可以點擊播放按鈕預覽音頻，確認選擇了正確的檔案。',
            note: '批次處理時，建議先預覽音頻列表，確保所有需要轉換的檔案都已正確上傳。'
        },
        {
            title: '設定轉換參數',
            description: '在轉換前，您可以調整輸出設定。選擇合適的<strong>檢測靈敏度</strong>（高/中/低），設定<strong>最大字幕時長</strong>，設定<strong>最小靜音間隔</strong>，以及選擇<strong>檔案編碼</strong>格式。',
            note: '中等靈敏度、5秒最大時長和0.5秒靜音間隔適合大多數音頻。'
        },
        {
            title: '轉換為SRT字幕',
            description: '設定完成後，點擊<strong>"轉換為SRT"</strong>按鈕開始處理。工具會分析每個音頻檔案的能量變化，檢測語音段落並生成對應的時間碼。',
            note: '轉換過程中請保持頁面開啟，不要關閉瀏覽器標籤頁。'
        },
        {
            title: '預覽轉換結果',
            description: '轉換完成後，右側輸出區域會顯示所有轉換後的SRT字幕檔案。每個檔案提供<strong>字幕預覽</strong>功能，顯示前幾條字幕內容。',
            note: '生成的字幕為佔位文字，您可以在字幕編輯軟體中替換為實際文字內容。'
        },
        {
            title: '下載轉換結果',
            description: '滿意轉換結果後，您可以點擊每個檔案下方的<strong>"下載SRT"</strong>按鈕單獨儲存，或使用<strong>"批次下載 (ZIP)"</strong>按鈕將所有SRT檔案打包下載。',
            note: '批次下載時，ZIP檔案中的SRT會保持原始檔案名稱，並自動添加.srt副檔名。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的音頻轉SRT字幕工具。現在您可以輕鬆為各種音頻生成精確的字幕時間碼，用於影片字幕製作、Podcast分段等多種用途。',
    
    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: '音頻轉MP3',
            description: '將音頻轉換為MP3格式，節省儲存空間便於分享。',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: '音頻轉WAV',
            description: '將音頻轉換為WAV無損格式，適合專業音頻處理。',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: '音頻轉MIDI',
            description: '將音頻轉換為MIDI格式，適合音樂製作和分析。',
            url: 'https://www.ufreetools.com/tool/audio-to-midi'
        },
        {
            name: '音頻轉M4A',
            description: '將音頻轉換為M4A格式，相容蘋果裝置，音質優良。',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        }
    ],
    
    referencesTitle: '參考資源',
    references: [
        {
            name: 'SRT字幕格式規範',
            description: '了解SRT字幕格式的技術規範和應用場景',
            url: 'https://en.wikipedia.org/wiki/SubRip'
        },
        {
            name: '音頻能量檢測技術',
            description: '深入了解基於能量的語音活動檢測演算法',
            url: 'https://en.wikipedia.org/wiki/Voice_activity_detection'
        },
        {
            name: '字幕製作最佳實踐',
            description: '學習專業的字幕製作流程和規範',
            url: 'https://en.wikipedia.org/wiki/Subtitle'
        }
    ]
};
