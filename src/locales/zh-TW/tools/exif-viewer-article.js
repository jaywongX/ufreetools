export default {
    title: '線上EXIF檢視器使用指南：圖片元資料資訊擷取工具',
    imageAlt: '線上EXIF檢視器 - 圖片元資料資訊擷取工具',
    functionTitle: '什麼是線上EXIF檢視器及其用途？',
    intro: '我們的<strong>線上EXIF檢視器</strong>是一款強大的圖片元資料擷取工具，可以快速讀取和分析圖片中嵌入的EXIF（Exchangeable Image File Format）資訊。EXIF資料包含了圖片的拍攝參數、相機資訊、GPS位置等豐富的元資料，這些資訊對於攝影師、設計師、研究人員以及一般使用者都非常有價值。使用我們的<strong>EXIF資訊檢視器</strong>，您可以無需安裝任何軟體，直接在瀏覽器中查看圖片的完整元資料資訊，所有處理都在本機完成，確保您的隱私安全。',
    
    useCasesTitle: 'EXIF檢視器的常見應用場景',
    useCases: [
        '攝影師查看和分析拍攝參數，學習優秀照片的拍攝技巧',
        '驗證圖片的真實性和來源，檢查拍攝時間和地點資訊',
        '整理和歸檔照片，根據EXIF資訊自動分類和組織',
        '地理標記和位置追蹤，查看照片的GPS座標和拍攝地點',
        '相機和鏡頭效能分析，比較不同設備的拍攝效果',
        '版權保護和證據收集，擷取圖片的原始拍攝資訊',
        '照片後期處理參考，了解原始拍攝參數進行精準調整',
        '旅行記錄和回憶整理，透過GPS資訊回顧拍攝地點'
    ],
    
    tipTitle: '專業提示：',
    tipContent: '大多數社群媒體平台（如微信、微博）在上傳圖片時會自動刪除EXIF資料以保護隱私。如果您需要查看完整的EXIF資訊，請使用原始未處理的圖片檔案。',
    
    conclusion: '<strong>EXIF元資料查看</strong>工具對攝影師、設計師、研究人員以及任何需要了解圖片詳細資訊的人特別有用。透過使用我們的EXIF檢視器，您可以深入了解圖片的拍攝背景，驗證圖片的真實性，或者簡單地滿足您對圖片資訊的好奇心。我們的工具支援多種圖片格式，包括JPEG、HEIC、WebP、PNG以及部分RAW和TIFF格式，使這一過程變得簡單高效，無需安裝任何軟體。',
    
    faqTitle: '常見問題解答',
    faqs: [
        {
            question: '什麼是EXIF資料？',
            answer: 'EXIF（Exchangeable Image File Format）是可交換影像檔案格式，是一種標準，用於儲存數位照片的元資料資訊。這些資訊包括拍攝時間、相機型號、鏡頭資訊、光圈、快門速度、ISO感光度、GPS位置等。當您在使用數位相機或手機拍攝照片時，這些資訊會自動嵌入到圖片檔案中。使用我們的<strong>線上EXIF資料檢視器</strong>，您可以輕鬆讀取和分析這些資訊。'
        },
        {
            question: '查看EXIF資訊會洩露我的隱私嗎？',
            answer: '不會。我們的工具完全在您的瀏覽器本機運行，所有圖片處理都在您的設備上進行，不會上傳到任何伺服器。這意味著您的圖片和EXIF資料永遠不會離開您的設備，確保了完全的隱私安全。'
        },
        {
            question: '為什麼有些圖片沒有EXIF資訊？',
            answer: '某些圖片可能沒有EXIF資料的原因包括：圖片經過編輯軟體處理後EXIF資訊被刪除、圖片來自社群媒體平台（這些平台通常會刪除EXIF資料）、圖片格式不支援EXIF（如某些PNG檔案）、或者圖片是從網頁截圖獲得的。使用我們的<strong>EXIF元資料擷取工具</strong>可以快速檢查圖片是否包含EXIF資訊。'
        },
        {
            question: '支援哪些圖片格式？',
            answer: '我們的工具支援多種圖片格式，包括JPEG（最完整的EXIF支援）、HEIC（iPhone照片格式）、WebP、PNG（有限支援）、TIFF以及部分RAW格式（如CR2、NEF、ARW等）。對於RAW格式，支援程度取決於檔案的具體格式和瀏覽器相容性。'
        },
        {
            question: 'GPS資訊如何顯示？',
            answer: '如果圖片包含GPS座標資訊，我們的工具會顯示經緯度座標（支援度分秒格式和十進位度格式），並在整合的地圖上顯示拍攝位置。您還可以使用反向地理編碼功能，將GPS座標轉換為實際的地理位置名稱（如城市、街道等）。'
        },
        {
            question: '可以批次處理多張圖片嗎？',
            answer: '是的，我們的工具支援批次處理。您可以一次上傳多張圖片，每張圖片的EXIF資訊會單獨顯示。您還可以使用批次匯出功能，將所有圖片的EXIF資訊匯出為JSON或CSV格式，方便後續分析和處理。'
        },
        {
            question: '匯出的資料格式有哪些？',
            answer: '我們支援多種匯出格式：JSON格式（完整的結構化資料，適合程式處理）、CSV格式（表格形式，適合Excel等軟體開啟）、摘要報告（簡潔的文字報告，適合閱讀）以及視覺化圖表（將關鍵參數以圖表形式展示，適合分析）。'
        }
    ],
    
    tutorialTitle: '如何使用線上EXIF檢視器',
    steps: [
        {
            title: '上傳您的圖片',
            description: '首先上傳您想要查看EXIF資訊的圖片。您可以直接將檔案<strong>拖放</strong>到上傳區域，或點擊瀏覽並從您的設備中選擇檔案。我們的工具支援JPEG、HEIC、WebP、PNG、RAW和TIFF等多種格式。',
            note: '您可以一次上傳多張圖片進行批次處理。'
        },
        {
            title: '查看EXIF資訊',
            description: '上傳後，工具會自動讀取圖片的EXIF資料。如果圖片包含EXIF資訊，您將看到詳細的元資料，包括基礎拍攝資訊（相機品牌型號、拍攝時間、檔案大小等）、拍攝參數（光圈、快門、ISO等）、GPS地理位置以及進階元資料。',
            note: '如果圖片不包含EXIF資料，工具會顯示相應的提示資訊。'
        },
        {
            title: '查看GPS位置',
            description: '如果圖片包含GPS座標資訊，您可以在GPS資訊部分看到經緯度座標（支援度分秒格式顯示），並在整合的地圖上查看拍攝位置。點擊「反向地理編碼」按鈕，可以將GPS座標轉換為實際的地理位置名稱。',
            note: '地圖顯示需要網路連接，首次載入可能需要一點時間。'
        },
        {
            title: '匯出EXIF資料',
            description: '您可以選擇多種方式匯出EXIF資訊：點擊「匯出JSON」按鈕下載完整的結構化資料；點擊「匯出CSV」按鈕下載表格格式資料；點擊「匯出摘要報告」獲取簡潔的文字報告；或點擊「匯出視覺化圖表」查看參數的視覺化展示。',
            note: '對於批次處理的圖片，可以使用「批次下載」功能一次性匯出所有資料。'
        },
        {
            title: '分析拍攝參數',
            description: '在拍攝參數部分，您可以查看光圈值、快門速度（人性化顯示，如1/125秒）、ISO感光度、焦距等資訊。這些參數對於學習攝影技巧、分析照片品質或驗證拍攝條件都非常有用。',
            note: '工具會自動將快門速度轉換為易讀的格式，如「1/125秒」而不是小數形式。'
        },
        {
            title: '儲存和管理結果',
            description: '處理完成後，您可以單獨下載每張圖片的EXIF資訊，或使用批次下載功能將所有資料打包下載。所有匯出的檔案都儲存在您的設備本機，確保資料安全。',
            note: '建議定期清理瀏覽器快取，以釋放儲存空間。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的線上EXIF檢視器。現在您可以輕鬆查看和分析圖片的元資料資訊，深入了解每張照片的拍攝背景和參數設定。',
    
    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: '圖片壓縮器',
            description: '在不明顯損失品質的情況下減小影像檔案大小。',
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
        },
        {
            name: 'QR碼產生器',
            description: '為URL、文字、聯絡資訊等建立自訂QR碼。',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
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
            name: '數位影像元資料',
            description: '關於影像元資料和EXIF資訊的詳細說明',
            url: 'https://zh.wikipedia.org/wiki/可交換影像檔案格式'
        },
        {
            name: 'GPS座標系統',
            description: '了解GPS座標系統和地理定位技術',
            url: 'https://zh.wikipedia.org/wiki/全球定位系統'
        }
    ]
}