export default {
    title: '線上EXIF移除器使用指南：圖片中繼資料刪除工具',
    imageAlt: '線上EXIF移除器 - 圖片中繼資料刪除工具',
    functionTitle: '什麼是線上EXIF移除器及其用途？',
    intro: '我們的<strong>線上EXIF移除器</strong>是一款強大的圖片隱私保護工具，可以快速刪除圖片中嵌入的EXIF（Exchangeable Image File Format）中繼資料。EXIF資料包含了圖片的拍攝參數、相機資訊、GPS位置等敏感資訊，這些資訊在分享圖片時可能會泄露您的隱私。使用我們的<strong>EXIF資料移除工具</strong>，您可以直接在瀏覽器中刪除圖片的所有中繼資料資訊，無需安裝任何軟體，所有處理都在本地完成，確保您的隱私安全。',
    
    useCasesTitle: 'EXIF移除器的常見應用場景',
    useCases: [
        '保護隱私安全，刪除圖片中的GPS位置資訊',
        '在社群媒體分享前移除敏感中繼資料',
        '減少圖片檔案大小，移除不必要的中繼資料',
        '保護版權資訊，刪除相機和軟體資訊',
        '準備用於網頁展示的圖片，移除所有中繼資料',
        '保護個人隱私，防止透過EXIF資料追蹤位置',
        '在發布照片前清理所有拍攝參數資訊',
        '確保圖片不包含任何可追蹤的中繼資料'
    ],
    
    tipTitle: '專業提示：',
    tipContent: '移除EXIF資料後，圖片的視覺品質不會受到任何影響。只有中繼資料被刪除，圖片的像素資料完全保持不變。',
    
    conclusion: '<strong>EXIF中繼資料移除</strong>工具對注重隱私保護的使用者、社群媒體使用者、網站管理員以及任何需要分享圖片但不想泄露中繼資料資訊的人特別有用。透過使用我們的EXIF移除器，您可以安全地分享圖片，而不用擔心泄露拍攝位置、相機型號或其他敏感資訊。我們的工具支援多種圖片格式，包括JPEG、HEIC、WebP、PNG以及部分RAW和TIFF格式，使這個過程變得簡單高效，無需安裝任何軟體。',
    
    faqTitle: '常見問題解答',
    faqs: [
        {
            question: '為什麼需要移除EXIF資料？',
            answer: 'EXIF資料可能包含敏感資訊，如GPS位置、拍攝時間、相機型號等。在社群媒體或網站上分享圖片時，這些資訊可能會被他人取得，從而泄露您的隱私。使用我們的<strong>線上EXIF刪除工具</strong>，您可以快速移除這些資訊，保護您的隱私安全。'
        },
        {
            question: '移除EXIF資料會影響圖片品質嗎？',
            answer: '不會。移除EXIF資料只刪除圖片的中繼資料，不會影響圖片的視覺品質。圖片的像素資料、顏色、清晰度等都不會改變。您移除EXIF後的圖片看起來與原始圖片完全相同。'
        },
        {
            question: '移除EXIF資料會減少檔案大小嗎？',
            answer: '是的，移除EXIF資料通常會略微減少檔案大小，因為中繼資料會佔用一定的儲存空間。對於包含大量EXIF資料的圖片（如包含GPS資訊的照片），檔案大小的減少可能更明顯。'
        },
        {
            question: '支援哪些圖片格式？',
            answer: '我們的工具支援多種圖片格式，包括JPEG（最完整的EXIF支援）、HEIC（iPhone照片格式）、WebP、PNG（有限支援）、TIFF以及部分RAW格式。對於RAW格式，支援程度取決於檔案的具體格式和瀏覽器相容性。'
        },
        {
            question: '移除EXIF資料後可以恢復嗎？',
            answer: '不可以。一旦EXIF資料被移除，就無法恢復。這是因為我們的工具會建立一個新的、不包含EXIF資料的圖片檔案。如果您需要保留原始檔案，建議在處理前先備份原始圖片。'
        },
        {
            question: '可以批量處理多張圖片嗎？',
            answer: '是的，我們的工具支援批量處理。您可以一次上傳多張圖片，每張圖片的EXIF資料會被單獨移除。您還可以使用批量下載功能，將所有處理後的圖片打包下載。'
        },
        {
            question: '處理後的圖片格式有哪些？',
            answer: '我們支援多種匯出格式：PNG格式（無損壓縮，適合需要透明度的圖片）、JPEG格式（可調整品質，適合照片）、WebP格式（現代格式，壓縮率高）以及BMP格式（無壓縮，檔案較大）。'
        },
        {
            question: '我的圖片會被上傳到伺服器嗎？',
            answer: '不會。我們的工具完全在您的瀏覽器本地運行，所有圖片處理都在您的裝置上進行，不會上傳到任何伺服器。這意味著您的圖片永遠不會離開您的裝置，確保了完全的隱私安全。'
        }
    ],
    
    tutorialTitle: '如何使用線上EXIF移除器',
    steps: [
        {
            title: '上傳您的圖片',
            description: '首先上傳您想要移除EXIF資料的圖片。您可以直接將檔案<strong>拖放</strong>到上傳區域，或點擊瀏覽並從您的裝置中選擇檔案。我們的工具支援JPEG、HEIC、WebP、PNG、RAW和TIFF等多種格式。',
            note: '您可以一次上傳多張圖片進行批量處理。'
        },
        {
            title: '檢視原始EXIF資訊（可選）',
            description: '上傳後，工具會顯示圖片是否包含EXIF資料。如果圖片包含EXIF資訊，您可以看到一些基本資訊，如檔案大小等。這有助於您了解需要移除的資料量。',
            note: '如果圖片不包含EXIF資料，工具會顯示相應的提示資訊。'
        },
        {
            title: '移除EXIF資料',
            description: '點擊<strong>"移除EXIF資料"</strong>按鈕開始處理。工具會將圖片繪製到畫布上，這個過程會自動移除所有EXIF中繼資料，包括拍攝參數、GPS位置、相機資訊等。',
            note: '處理過程通常在幾秒鐘內完成，具體時間取決於圖片大小和數量。'
        },
        {
            title: '檢視處理結果',
            description: '處理完成後，您可以在輸出區域看到處理後的圖片。工具會顯示處理前後的檔案大小對比，以及EXIF資料是否已成功移除的確認資訊。',
            note: '處理後的圖片在視覺上與原始圖片完全相同，只是移除了中繼資料。'
        },
        {
            title: '選擇匯出格式和品質',
            description: '對於每張處理後的圖片，您可以選擇匯出格式（PNG、JPG、WEBP或BMP）。如果選擇JPG格式，您還可以使用滑桿調整品質，在檔案大小和圖片品質之間取得平衡。',
            note: 'PNG格式適合需要透明度的圖片，JPG格式適合照片，檔案大小更小。'
        },
        {
            title: '下載處理後的圖片',
            description: '點擊每張圖片下方的<strong>"下載"</strong>按鈕單獨儲存，或使用輸出部分頂部的<strong>"批次下載"</strong>按鈕將所有處理後的圖片作為ZIP檔案下載。',
            note: '所有處理都在您的瀏覽器中進行，因此您的圖片永遠不會上傳到任何伺服器，確保隱私和安全。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的線上EXIF移除器。現在您可以安全地分享圖片，而不用擔心泄露任何中繼資料資訊，保護您的隱私安全。',
    
    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: 'EXIF檢視器',
            description: '檢視和分析圖片中的EXIF中繼資料資訊。',
            url: 'https://www.ufreetools.com/tool/exif-viewer'
        },
        {
            name: '圖片壓縮器',
            description: '在不明顯損失品質的情況下減小圖像檔案大小。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: '圖片調整器',
            description: '將影像調整為特定尺寸或按百分比縮放。',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: '圖片顏色反轉工具',
            description: '線上將圖片顏色進行反轉處理，建立負片效果。',
            url: 'https://www.ufreetools.com/tool/invert-image-colors'
        }
    ],
    
    referencesTitle: '參考資源',
    references: [
        {
            name: 'EXIF標準規範',
            description: '了解EXIF資料格式的官方標準和技術規範',
            url: 'https://en.wikipedia.org/wiki/Exif'
        },
        {
            name: '數位影像中繼資料',
            description: '關於影像中繼資料和EXIF資訊的詳細說明',
            url: 'https://zh.wikipedia.org/wiki/可交換圖像文件格式'
        },
        {
            name: '線上隱私保護指南',
            description: '了解如何在分享圖片時保護個人隱私',
            url: 'https://zh.wikipedia.org/wiki/隱私'
        }
    ]
}