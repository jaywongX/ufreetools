export default {
    title: '音頻轉FLAC工具：在線音頻轉FLAC無損轉換器使用指南',
    functionTitle: '什麼是音頻轉FLAC工具及其用途？',
    intro: '我們的<strong>音頻轉FLAC工具</strong>是一款專業的在線音頻轉FLAC無損格式轉換應用，可以將WAV、MP3、OGG、AAC、M4A、WMA、AMR、AIFF、APE等多種音頻格式轉換為FLAC格式。FLAC（Free Lossless Audio Codec）是一種開源無損音頻壓縮格式，能夠在保持原始音質完全不變的情況下，將文件體積壓縮30-60%。使用我們的<strong>在線音頻轉FLAC轉換器</strong>，您可以批量處理多個音頻文件，精確控制壓縮級別和采樣率，無需安裝任何軟件即可完成格式轉換。',
    
    useCasesTitle: '音頻轉FLAC的常見應用場景',
    useCases: [
        '將WAV等未壓縮音頻轉換為FLAC以節省存儲空間，同時保持無損音質',
        '將高分辨率音頻歸檔為FLAC格式，便於長期保存和管理',
        '將MP3等有損格式轉回FLAC用於專業音頻處理',
        '為音樂收藏創建無損備份，確保音質永不損失',
        '將各種格式的音頻統一轉換為FLAC，便於音樂庫管理',
        '為發燒友級音頻設備准備高質量音源文件',
        '將錄音室原始錄音轉換為FLAC進行無損分發',
        '為音頻編輯和處理准備無損源文件'
    ],
    
    tipTitle: '專業提示：',
    tipContent: 'FLAC是無損壓縮格式，從無損源（如WAV、AIFF）轉換為FLAC不會損失任何音質。但從有損格式（如MP3、AAC）轉換為FLAC無法恢復已損失的音質，只會增加文件大小。建議只在原始音頻是無損格式時轉換為FLAC，以獲得最佳效果。',
    
    conclusion: '<strong>音頻轉FLAC格式轉換</strong>工具對音樂發燒友、音頻工程師、音樂收藏家以及需要高質量音頻存儲的用戶特別有用。通過使用我們的在線音頻轉FLAC轉換器，您可以在保持原始音質完全不變的情況下，大幅減小文件體積，便於存儲和分享。我們的工具支持批量處理，提供壓縮級別、采樣率、位深度等參數控制，所有處理都在瀏覽器本地完成，確保您的音頻隱私和安全。',
    
    faqTitle: '常見問題解答',
    faqs: [
        {
            question: '音頻轉FLAC工具支持哪些輸入格式？',
            answer: '我們的<strong>在線音頻轉FLAC轉換器</strong>支持多種常見音頻格式，包括WAV、MP3、OGG、AAC、M4A、WMA、AMR、AIFF、APE等格式。您可以同時上傳多個不同格式的音頻文件進行批量轉換。工具會自動檢測輸入格式並處理轉換。'
        },
        {
            question: '什麼是FLAC格式？為什麼選擇FLAC？',
            answer: 'FLAC（Free Lossless Audio Codec）是一種開源無損音頻壓縮格式。與MP3等有損格式不同，FLAC可以在壓縮文件大小的同時完全保留原始音頻數據，沒有任何音質損失。FLAC文件通常比原始WAV文件小30-60%，但音質完全相同。FLAC是音樂歸檔和高保真音頻存儲的理想選擇。'
        },
        {
            question: 'FLAC壓縮級別如何選擇？',
            answer: 'FLAC提供0-8共9個壓縮級別。級別越高，壓縮率越大，文件越小，但壓縮時間也越長。所有級別的音質完全相同。級別0壓縮最快但文件較大；級別8壓縮最慢但文件最小。級別5是推薦設置，在壓縮率和速度之間取得良好平衡，適合大多數使用場景。'
        },
        {
            question: '可以批量轉換多個音頻文件為FLAC嗎？',
            answer: '完全可以！我們的<strong>音頻轉FLAC工具</strong>支持批量處理功能。您可以一次性上傳多個音頻文件（支持拖拽或文件選擇），工具會依次處理所有文件。處理完成后，您可以單獨下載每個轉換后的FLAC文件，或使用批量下載功能將所有結果打包成ZIP文件一次性下載。'
        },
        {
            question: '從MP3轉換為FLAC能提高音質嗎？',
            answer: '不能。MP3是有損壓縮格式，部分音頻數據已經永久丟失。將MP3轉換為FLAC只是將有損音頻存儲在更大的文件中，無法恢復原始音質。只有在原始音頻是無損格式（如WAV、AIFF、原始錄音）時，轉換為FLAC才能保持無損音質並獲得壓縮效果。'
        },
        {
            question: '轉換過程是否安全？音頻會上傳到服務器嗎？',
            answer: '完全安全！我們的工具采用純前端技術，所有音頻處理都在您的瀏覽器本地完成。您的音頻文件不會上傳到任何服務器，確保隱私和數據安全。您可以放心處理包含敏感內容的音頻文件。'
        },
        {
            question: 'FLAC與WAV有什麼區別？',
            answer: '兩者都是無損格式，音質完全相同。主要區別在於：1）文件大小 - FLAC比WAV小30-60%；2）兼容性 - WAV兼容性更廣，FLAC需要支持該格式的播放器；3）元數據 - FLAC支持更豐富的標簽信息；4）處理需求 - FLAC需要解碼，WAV可直接播放。對於存儲和分享，推薦FLAC；對於專業音頻處理，推薦WAV。'
        }
    ],
    
    tutorialTitle: '如何使用音頻轉FLAC工具',
    steps: [
        {
            title: '上傳您的音頻文件',
            description: '首先上傳您想要轉換為FLAC格式的音頻文件。您可以通過兩種方式上傳：<strong>拖拽文件</strong>到上傳區域或<strong>點擊瀏覽</strong>選擇文件。工具支持WAV、MP3、OGG、AAC、M4A、WMA、AMR、AIFF、APE等多種格式，您可以一次上傳多個文件進行批量處理。',
            note: '建議使用無損格式（WAV、AIFF）作為源文件，以獲得最佳的無損轉換效果。'
        },
        {
            title: '預覽音頻文件',
            description: '上傳后，您會在左側預覽區域看到所有上傳的音頻文件列表。每個文件顯示文件名、原始格式、文件大小等信息。您可以點擊播放按鈕預覽音頻，確認選擇了正確的文件。如果需要刪除某個文件，點擊刪除圖標即可。',
            note: '批量處理時，建議先預覽音頻列表，確保所有需要轉換的文件都已正確上傳。'
        },
        {
            title: '設置FLAC參數',
            description: '在轉換前，您可以調整輸出設置。選擇合適的<strong>壓縮級別</strong>（0-8，推薦5），設置<strong>采樣率</strong>（自動、44100Hz、48000Hz、96000Hz、192000Hz），設置<strong>位深度</strong>（16/24/32 bit）和<strong>聲道</strong>（立體聲、單聲道、自動）。',
            note: '壓縮級別5和自動采樣率是推薦設置，適合大多數音頻轉換場景。'
        },
        {
            title: '轉換為FLAC格式',
            description: '設置完成后，點擊<strong>"轉換為FLAC"</strong>按鈕開始處理。工具會依次處理所有上傳的音頻文件，批量處理時會顯示進度信息。轉換時間取決於文件大小和數量，以及選擇的壓縮級別。',
            note: '轉換過程中請保持頁面打開，不要關閉瀏覽器標簽頁。'
        },
        {
            title: '預覽轉換結果',
            description: '轉換完成后，右側輸出區域會顯示所有轉換后的FLAC文件。每個文件提供<strong>在線播放</strong>功能，您可以點擊播放按鈕預覽轉換效果。文件下方顯示原始大小、轉換后大小和壓縮比等信息。',
            note: 'FLAC無損轉換保証音質與原始完全一致，只是文件大小有所不同。'
        },
        {
            title: '下載轉換結果',
            description: '滿意轉換結果后，您可以點擊每個文件下方的<strong>"下載FLAC"</strong>按鈕單獨保存，或使用輸出區域頂部的<strong>"批量下載 (ZIP)"</strong>按鈕將所有轉換后的FLAC文件打包成一個ZIP文件一次性下載。所有處理都在瀏覽器本地完成，確保您的音頻隱私和安全。',
            note: '批量下載時，ZIP文件中的音頻會保持原始文件名，並自動添加.flac擴展名。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的音頻轉FLAC工具。現在您可以輕松將各種格式的音頻轉換為FLAC無損格式，在保持原始音質不變的情況下減小文件體積，便於存儲和分享。',
    
    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: '音頻轉WAV',
            description: '將音頻轉換為WAV無損格式，適合專業音頻處理。',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: '音頻轉MP3',
            description: '將音頻轉換為MP3格式，節省存儲空間便於分享。',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: '音頻轉M4A',
            description: '將音頻轉換為M4A格式，兼容蘋果設備，音質優良。',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: '音頻轉PCM',
            description: '將音頻轉換為PCM原始格式，適合專業音頻處理和分析。',
            url: 'https://www.ufreetools.com/tool/audio-to-pcm'
        }
    ],
    
    referencesTitle: '參考資源',
    references: [
        {
            name: 'FLAC音頻編碼標准',
            description: '了解FLAC格式的壓縮原理和技術規范',
            url: 'https://xiph.org/flac/'
        },
        {
            name: '無損音頻格式對比',
            description: 'FLAC、ALAC、WAV等無損格式的特點和適用場景',
            url: 'https://en.wikipedia.org/wiki/FLAC'
        },
        {
            name: '音頻采樣率與位深度',
            description: '深入了解采樣率和位深度對音質的影響',
            url: 'https://en.wikipedia.org/wiki/Audio_bit_depth'
        }
    ]
};
