export default {
    title: '音頻調速工具：在線音頻變速變調使用指南',
    functionTitle: '什麼是音頻調速工具及其用途？',
    intro: '我們的<strong>音頻調速工具</strong>是一款專業的在線音頻變速變調應用，可以調整音頻的播放速度和音調。支持<strong>變速不變調</strong>（改變速度同時保持原音調）、<strong>變調不變速</strong>（改變音調同時保持原速度）以及同時變速變調等多種模式。使用我們的<strong>在線音頻調速器</strong>，您可以輕鬆調整音頻播放速度從0.25倍到4倍，音調可升降12個半音，支持批量處理，無需安裝任何軟件。',
    
    useCasesTitle: '音頻調速的常見應用場景',
    useCases: [
        '加速或減速音頻以適應特定時長需求',
        '學習音樂或語言時放慢速度便於理解',
        '調整音頻音調以匹配其他音軌或樂器',
        '製作DJ混音或音樂改編',
        '快速瀏覽長音頻內容',
        '調整語音錄音的語速',
        '為視頻製作變速音頻效果',
        '音樂製作中的時間拉伸和音調轉換'
    ],
    
    tipTitle: '專業提示：',
    tipContent: '開啟"變速不變調"選項可以在改變播放速度時保持原有音調，這對於語音學習和音樂分析特別有用。如果需要更高質量的處理，建議選擇高質量輸出選項，但處理時間會相應增加。',
    
    conclusion: '<strong>音頻調速工具</strong>對音樂製作人、DJ、語言學習者、播客製作者以及音頻編輯愛好者特別有用。通過使用我們的在線音頻調速器，您可以靈活調整音頻的速度和音調，滿足各種創作和學習需求。我們的工具支持批量處理，提供多種質量控制選項，所有處理都在瀏覽器本地完成，確保您的音頻隱私和安全。',
    
    faqTitle: '常見問題解答',
    faqs: [
        {
            question: '音頻調速工具支持哪些輸入格式？',
            answer: '我們的<strong>在線音頻調速器</strong>支持多種常見音頻格式，包括WAV、MP3、FLAC、OGG、AAC、M4A、WMA、AMR、AIFF、APE等格式。您可以同時上傳多個不同格式的音頻文件進行批量處理。'
        },
        {
            question: '什麼是變速不變調？',
            answer: '變速不變調是一種音頻處理技術，可以在改變音頻播放速度的同時保持原有的音調（音高）。例如，將音頻加速到1.5倍播放，但聲音的音調不會變高。這對於語音學習、快速瀏覽內容等場景非常有用。'
        },
        {
            question: '可以只改變音調不改變速度嗎？',
            answer: '可以！通過調整音調選項並保持速度為1.0倍，您可以實現變調不變速的效果。音調可升降最多12個半音（一個八度），適合音樂製作和卡拉OK等場景。'
        },
        {
            question: '音頻調速會影響音質嗎？',
            answer: '音頻調速會通過時間拉伸算法處理音頻，可能會對音質產生一定影響。選擇高質量輸出選項可以獲得更好的音質。通常情況下，小幅度的速度調整（0.8x-1.5x）對音質影響較小，大幅調整可能會有一定的音質損失。'
        },
        {
            question: '可以批量處理多個音頻文件嗎？',
            answer: '完全可以！我們的<strong>音頻調速工具</strong>支持批量處理功能。您可以一次性上傳多個音頻文件，設置相同的參數後統一處理。處理完成後，可以單獨下載每個文件或打包成ZIP下載。'
        },
        {
            question: '處理後的音頻可以保存為什麼格式？',
            answer: '您可以選擇保持原格式輸出，或轉換為WAV（無損）或MP3（通用）格式。WAV格式適合專業音頻編輯，MP3格式兼容性最好，適合分享和存儲。'
        },
        {
            question: '調速範圍是多少？',
            answer: '速度調節範圍為0.25倍到4倍，即最慢可降至原速的1/4，最快可加速至原速的4倍。音調調節範圍為-12到+12個半音，即可升降一個八度。'
        }
    ],
    
    tutorialTitle: '如何使用音頻調速工具',
    steps: [
        {
            title: '上傳您的音頻文件',
            description: '首先上傳您想要調速的音頻文件。您可以通過兩種方式上傳：<strong>拖拽文件</strong>到上傳區域或<strong>點擊瀏覽</strong>選擇文件。工具支持WAV、MP3、FLAC、OGG等多種格式，您可以一次上傳多個文件進行批量處理。',
            note: '建議使用高質量的原始音頻文件，調速後的音質會更好。'
        },
        {
            title: '預覽音頻文件',
            description: '上傳後，您會在左側預覽區域看到所有上傳的音頻文件列表。每個文件顯示文件名、格式和大小信息。您可以點擊播放按鈕預覽音頻，確認選擇了正確的文件。',
            note: '批量處理時，建議先預覽音頻列表，確保所有需要處理的文件都已正確上傳。'
        },
        {
            title: '設置調速參數',
            description: '在設置區域調整參數：<strong>播放速度</strong>（0.25x-4x）、<strong>音調調整</strong>（-12到+12半音）、<strong>變速不變調</strong>開關、<strong>輸出質量</strong>和<strong>輸出格式</strong>。根據您的需求選擇合適的組合。',
            note: '如果只想改變速度不想改變音調，請開啟"變速不變調"選項。'
        },
        {
            title: '處理音頻',
            description: '設置完成後，點擊<strong>"調整音頻"</strong>按鈕開始處理。工具會依次處理所有上傳的音頻文件，批量處理時會顯示進度信息。處理時間取決於文件大小、數量和選擇的質量選項。',
            note: '處理過程中請保持頁面打開，不要關閉瀏覽器標籤頁。'
        },
        {
            title: '預覽處理結果',
            description: '處理完成後，右側輸出區域會顯示所有調整後的音頻文件。每個文件提供<strong>預覽</strong>功能，您可以試聽調整後的效果。如果不滿意，可以重新調整參數再次處理。',
            note: '預覽功能可以幫助您確認調速效果是否符合預期。'
        },
        {
            title: '下載處理結果',
            description: '滿意處理結果後，您可以點擊每個文件下方的<strong>"下載音頻"</strong>按鈕單獨保存，或使用輸出區域頂部的<strong>"批量下載 (ZIP)"</strong>按鈕將所有文件打包下載。所有處理都在瀏覽器本地完成，確保您的音頻隱私和安全。',
            note: '批量下載時，ZIP文件會保持原始文件名，並根據設置添加相應的擴展名。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的音頻調速工具。現在您可以輕鬆調整音頻的速度和音調，用於音樂製作、語言學習、音頻編輯等多種用途。',
    
    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: '音頻轉MP3',
            description: '將音頻轉換為MP3格式，節省存儲空間便於分享。',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: '音頻轉WAV',
            description: '將音頻轉換為WAV無損格式，適合專業音頻處理。',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: '音頻倒放',
            description: '將音頻倒放播放，製作特殊音效。',
            url: 'https://www.ufreetools.com/tool/audio-reverse'
        },
        {
            name: '音頻合併',
            description: '將多個音頻文件合併為一個文件。',
            url: 'https://www.ufreetools.com/tool/audio-joiner'
        }
    ],
    
    referencesTitle: '參考資源',
    references: [
        {
            name: '時間拉伸算法',
            description: '了解音頻時間拉伸的技術原理',
            url: 'https://en.wikipedia.org/wiki/Audio_time_stretching'
        },
        {
            name: '音調變換技術',
            description: '探索音調變換和移調的技術實現',
            url: 'https://en.wikipedia.org/wiki/Pitch_shift'
        },
        {
            name: '音頻信號處理',
            description: '深入學習數字音頻信號處理技術',
            url: 'https://en.wikipedia.org/wiki/Audio_signal_processing'
        }
    ]
};
