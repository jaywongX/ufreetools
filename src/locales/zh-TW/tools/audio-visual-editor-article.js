export default {
    title: '音頻可視化編輯工具：在線音頻波形編輯器使用指南',
    functionTitle: '什麼是音頻可視化編輯工具及其用途？',
    intro: '我們的<strong>音頻可視化編輯工具</strong>是一款專業的在線音頻波形編輯應用，支持WAV、MP3、FLAC、OGG、AAC、M4A等多種音頻格式的可視化編輯。通過直觀的波形顯示界面，您可以精確選擇音頻片段，進行裁剪、刪除、淡入淡出、音量調節、靜音、標準化、反轉等專業編輯操作。使用我們的<strong>在線音頻編輯器</strong>，無需安裝任何軟件，所有處理都在瀏覽器本地完成，確保您的音頻隱私和安全。',
    
    useCasesTitle: '音頻可視化編輯的常見應用場景',
    useCases: [
        '剪輯和修剪音頻文件，去除不需要的部分',
        '製作播客和廣播節目，進行音頻後期處理',
        '為視頻製作背景音樂，調整音頻長度和效果',
        '製作手機鈴聲和提示音，裁剪音頻片段',
        '處理語音錄音，去除靜音和雜音部分',
        '製作音樂混音，組合多個音頻片段',
        '調整音頻音量，進行標準化處理',
        '為音頻添加淡入淡出效果，使過渡更自然'
    ],
    
    tipTitle: '專業提示：',
    tipContent: '編輯前建議先備份原始音頻文件。使用選區功能可以精確選擇需要編輯的音頻片段。淡入淡出效果可以讓音頻過渡更加自然。標準化功能可以優化音頻的整體音量水平。',
    
    conclusion: '<strong>音頻可視化編輯</strong>工具對播客製作者、音樂愛好者、視頻創作者以及音頻處理初學者特別有用。通過使用我們的在線音頻編輯器，您可以在直觀的波形界面中進行精確的音頻編輯，支持裁剪、刪除、淡入淡出、靜音、標準化、反轉等多種專業操作。所有處理都在瀏覽器本地完成，無需上傳到服務器，確保音頻內容的隱私和安全。',
    
    faqTitle: '常見問題解答',
    faqs: [
        {
            question: '音頻可視化編輯工具支持哪些輸入格式？',
            answer: '我們的<strong>在線音頻編輯器</strong>支持多種常見音頻格式，包括WAV、MP3、FLAC、OGG、AAC、M4A、WMA、AMR、AIFF、APE等格式。您可以上傳任何支持的格式進行編輯，編輯完成後可導出為WAV或MP3格式。'
        },
        {
            question: '如何選擇音頻片段進行編輯？',
            answer: '在波形顯示區域，按住鼠標左鍵拖動即可選擇音頻片段。選中的區域會以藍色高亮顯示，同時顯示選區的開始時間、結束時間和持續時間。選擇後可以使用裁剪、刪除、淡入淡出等編輯工具。'
        },
        {
            question: '淡入淡出效果有什麼作用？',
            answer: '淡入效果使音頻從靜音逐漸增加到正常音量，淡出效果使音頻從正常音量逐漸減小到靜音。這兩種效果可以讓音頻的開始和結束更加自然，避免突然的音量變化，特別適合用於背景音樂和音頻過渡。'
        },
        {
            question: '標準化功能是什麼？',
            answer: '標準化是將音頻的音量調整到最佳水平的過程。它會分析音頻中的最大音量，然後按比例調整整體音量，使最大音量達到接近但不超出允許的最大值（通常為-0.5dB）。這樣可以使音頻整體音量更加飽滿，同時避免削波失真。'
        },
        {
            question: '編輯過程是否安全？音頻會上傳到服務器嗎？',
            answer: '完全安全！我們的工具採用純前端技術，所有音頻處理都在您的瀏覽器本地完成。您的音頻文件不會上傳到任何服務器，確保隱私和數據安全。您可以放心編輯包含敏感內容的音頻文件。'
        },
        {
            question: '可以導出哪些格式？',
            answer: '編輯完成後，您可以導出為WAV（無損格式）或MP3（壓縮格式）。如果您只選擇了部分音頻，可以選擇導出完整音頻或僅導出選區。導出時會保持原始採樣率和聲道數。'
        }
    ],
    
    tutorialTitle: '如何使用音頻可視化編輯工具',
    steps: [
        {
            title: '上傳您的音頻文件',
            description: '首先上傳您想要編輯的音頻文件。您可以通過兩種方式上傳：<strong>拖拽文件</strong>到上傳區域或<strong>點擊瀏覽</strong>選擇文件。工具支持WAV、MP3、FLAC、OGG、AAC、M4A等多種格式。',
            note: '建議使用無損格式（如WAV、FLAC）進行編輯，以保持最佳音質。'
        },
        {
            title: '查看音頻波形',
            description: '上傳後，音頻波形會自動顯示在編輯區域。波形顯示了音頻的振幅變化，讓您直觀地看到音頻的結構。上方顯示文件信息，包括時長、採樣率和聲道數。',
            note: '波形中的高峰表示音量較大的部分，平緩部分表示音量較小或靜音。'
        },
        {
            title: '選擇編輯區域',
            description: '在波形上<strong>按住鼠標左鍵拖動</strong>即可選擇音頻片段。選中區域會以藍色高亮顯示，同時顯示選區的時間範圍。您可以播放選區來確認選擇是否正確。',
            note: '如果不選擇區域，某些編輯工具（如標準化）會作用於整個音頻。'
        },
        {
            title: '使用編輯工具',
            description: '選擇區域後，可以使用下方的編輯工具：<strong>裁剪</strong>保留選區並刪除其他部分、<strong>刪除</strong>移除選區、<strong>淡入/淡出</strong>添加漸變效果、<strong>靜音</strong>將選區設為靜音、<strong>標準化</strong>優化音量、<strong>反轉</strong>將音頻反向播放。',
            note: '編輯操作會立即生效，建議在導出前仔細檢查編輯結果。'
        },
        {
            title: '播放和預覽',
            description: '使用播放控制按鈕可以<strong>播放/暫停</strong>、<strong>快進/快退</strong>、<strong>停止</strong>音頻。播放時紅色指示線會顯示當前播放位置。您還可以調整音量滑塊來控制播放音量。',
            note: '播放音量調整不影響導出的音頻，導出時會保持原始音量水平。'
        },
        {
            title: '導出編輯結果',
            description: '滿意編輯結果後，選擇導出格式（WAV或MP3），然後點擊<strong>"導出完整音頻"</strong>或<strong>"導出選區"</strong>按鈕。文件會自動下載到您的設備。所有處理都在瀏覽器本地完成，確保音頻隱私和安全。',
            note: 'WAV格式保持無損音質，但文件較大；MP3格式文件較小，適合分享。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的音頻可視化編輯工具。現在您可以輕鬆編輯各種格式的音頻文件，進行裁剪、淡入淡出、音量調節等專業操作，滿足播客製作、音樂編輯、音頻處理等多種需求。',
    
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
            name: '音頻轉M4A',
            description: '將音頻轉換為M4A格式，高音質小體積。',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: '音頻轉文本',
            description: '將音頻中的語音轉換為文字，支持多種語言。',
            url: 'https://www.ufreetools.com/tool/audio-to-text'
        }
    ],
    
    referencesTitle: '參考資源',
    references: [
        {
            name: '音頻波形編輯原理',
            description: '了解音頻波形顯示和編輯的技術原理',
            url: 'https://en.wikipedia.org/wiki/Waveform'
        },
        {
            name: '數字音頻處理',
            description: '深入學習數字音頻處理和編輯技術',
            url: 'https://en.wikipedia.org/wiki/Digital_audio_editing'
        },
        {
            name: '音頻格式指南',
            description: '了解不同音頻格式的特點和應用場景',
            url: 'https://en.wikipedia.org/wiki/Audio_file_format'
        }
    ]
};
