export default {
    title: '圖片轉JPG工具：線上圖片格式轉換器使用指南',
    functionTitle: '什麼是圖片轉JPG工具及其用途？',
    intro: '我們的<strong>圖片轉JPG工具</strong>是一款強大的線上圖片格式轉換應用程式，可以快速將PNG、WebP、GIF、BMP、TIFF、SVG、HEIC等多種圖片格式轉換為JPG格式。JPG（JPEG）是最廣泛使用的圖片格式之一，具有出色的壓縮比和相容性，特別適合照片、複雜圖像和網頁展示。使用我們的<strong>線上圖片轉JPG轉換器</strong>，您可以批次處理多張圖片，精確控制輸出品質和尺寸，無需安裝任何軟體即可完成格式轉換。',
    
    useCasesTitle: '圖片轉JPG的常見應用場景',
    useCases: [
        '將PNG透明圖片轉換為JPG用於網站展示，減少檔案體積提升載入速度',
        '將WebP格式圖片轉換為JPG以確保在舊版瀏覽器中的相容性',
        '將HEIC/HEIF格式（iPhone照片）轉換為JPG以便在Windows電腦上查看',
        '將SVG向量圖轉換為JPG點陣圖用於列印或社群媒體分享',
        '批次壓縮照片檔案，在保持可接受品質的同時減少儲存空間',
        '為網站優化圖片，將大尺寸PNG轉換為壓縮後的JPG提升頁面效能',
        '將GIF動圖轉換為JPG靜態圖片用於文件或簡報',
        '統一圖片格式，將各種來源的圖片轉換為標準JPG格式便於管理'
    ],
    
    tipTitle: '專業提示：',
    tipContent: 'JPG格式使用有損壓縮，適合照片和複雜圖像。對於需要透明背景或文字清晰的圖片，建議保留PNG格式。品質設定80%通常能在檔案大小和視覺品質之間取得良好平衡。',
    
    conclusion: '<strong>圖片轉JPG格式轉換</strong>工具對網站開發者、攝影師、設計師以及需要處理大量圖片的使用者特別有用。透過使用我們的線上圖片轉JPG轉換器，您可以快速統一圖片格式，優化檔案大小，提升網站載入速度，或滿足特定平台對圖片格式的要求。我們的工具支援批次處理，提供精確的品質和尺寸控制，所有處理都在瀏覽器本地完成，確保您的圖片隱私和安全。',
    
    faqTitle: '常見問題解答',
    faqs: [
        {
            question: '圖片轉JPG工具支援哪些輸入格式？',
            answer: '我們的<strong>線上圖片轉JPG轉換器</strong>支援多種常見圖片格式，包括PNG、WebP、GIF、BMP、TIFF、SVG以及HEIC/HEIF格式。對於HEIC格式（iPhone照片），工具會自動處理轉換。您也可以同時上傳多張不同格式的圖片進行批次轉換。'
        },
        {
            question: '轉換JPG時如何選擇合適的品質設定？',
            answer: 'JPG品質設定範圍從1%到100%，數值越高圖片品質越好但檔案也越大。對於網頁展示，建議使用60-80%的品質設定，既能保持良好的視覺效果又能控制檔案大小。對於列印用途，建議使用90-100%的高品質設定。工具會即時顯示預估的檔案大小，幫助您做出最佳選擇。'
        },
        {
            question: '轉換JPG會遺失圖片的透明背景嗎？',
            answer: '是的，JPG格式不支援透明通道。當您將帶有透明背景的PNG圖片轉換為JPG時，透明區域會被填充為白色背景。如果您需要保留透明效果，建議保持PNG格式或使用其他支援透明的格式。'
        },
        {
            question: '可以批次轉換多張圖片為JPG嗎？',
            answer: '完全沒問題！我們的<strong>圖片轉JPG工具</strong>支援批次處理功能。您可以一次性上傳多張圖片（支援拖拽或檔案選擇），工具會依次處理所有圖片。處理完成後，您可以單獨下載每張轉換後的JPG圖片，或使用批次下載功能將所有結果打包成ZIP檔案一次性下載。'
        },
        {
            question: '轉換後的JPG圖片可以調整尺寸嗎？',
            answer: '是的，我們的工具提供了彈性的尺寸調整選項。您可以選擇保持原始尺寸，或指定目標寬度和高度，也可以按百分比縮放，還可以設定最長邊限制。所有尺寸調整都支援保持寬高比，確保圖片不變形。'
        },
        {
            question: 'HEIC格式（iPhone照片）可以轉換為JPG嗎？',
            answer: '可以！我們的<strong>線上圖片轉JPG轉換器</strong>完全支援HEIC和HEIF格式轉換。這是iPhone和部分Android裝置預設的照片格式。您可以直接上傳HEIC檔案，工具會自動將其轉換為JPG格式，方便在Windows電腦或其他不支援HEIC的裝置上查看。'
        },
        {
            question: '轉換過程是否安全？圖片會上傳到伺服器嗎？',
            answer: '完全安全！我們的工具採用純前端技術，所有圖片處理都在您的瀏覽器本地完成。您的圖片不會上傳到任何伺服器，確保隱私和資料安全。您可以放心處理包含敏感資訊的圖片。'
        }
    ],
    
    tutorialTitle: '如何使用圖片轉JPG工具',
    steps: [
        {
            title: '上傳您的圖片',
            description: '首先上傳您想要轉換為JPG格式的圖片。您可以透過三種方式上傳：<strong>拖拽檔案</strong>到上傳區域、<strong>點擊瀏覽</strong>選擇檔案，或使用<strong>Ctrl+V（Mac為Cmd+V）</strong>貼上剪貼簿中的圖片。工具支援PNG、WebP、GIF、BMP、TIFF、SVG、HEIC等多種格式，您可以一次上傳多張圖片進行批次處理。',
            note: '支援同時上傳多張不同格式的圖片，工具會自動識別並處理。'
        },
        {
            title: '預覽和選擇圖片',
            description: '上傳後，您會在左側預覽區域看到所有上傳的圖片縮圖。每張圖片下方顯示原始格式和檔案大小。您可以檢查圖片清單，確認選擇了正確的檔案。如果需要刪除某張圖片，將鼠標懸停在縮圖上並點擊刪除圖示即可。',
            note: '批次處理時，建議先檢查圖片清單，確保所有需要轉換的圖片都已正確上傳。'
        },
        {
            title: '設定JPG品質和尺寸',
            description: '在轉換前，您可以調整輸出設定。使用<strong>品質滑塊</strong>設定JPG壓縮品質（1%-100%），滑塊右側會即時顯示預估的檔案大小。如果需要調整圖片尺寸，可以選擇"保持原始尺寸"、"指定目標尺寸"、"百分比縮放"或"最長邊限制"等選項。所有尺寸調整都支援保持寬高比。',
            note: '品質設定80%通常能在檔案大小和視覺品質之間取得良好平衡，適合大多數網頁展示場景。'
        },
        {
            title: '轉換為JPG格式',
            description: '設定完成後，點擊<strong>"轉換為JPG"</strong>按鈕開始處理。工具會依次處理所有上傳的圖片，批次處理時會顯示進度資訊。對於大多數圖片，轉換過程會立即完成，但大檔案或批次處理可能需要幾秒鐘時間。',
            note: '轉換過程中請保持頁面開啟，不要關閉瀏覽器標籤頁。'
        },
        {
            title: '預覽轉換結果',
            description: '轉換完成後，右側輸出區域會顯示所有轉換後的JPG圖片。每張圖片都提供<strong>轉換前後對比</strong>功能，您可以直觀地看到原始圖片和JPG預覽的差異。圖片下方顯示原始大小、轉換後大小和壓縮比等資訊，幫助您評估轉換效果。',
            note: '如果對品質不滿意，可以調整品質設定後重新轉換。'
        },
        {
            title: '下載轉換結果',
            description: '滿意轉換結果後，您可以點擊每張圖片下方的<strong>"下載JPG"</strong>按鈕單獨儲存，或使用輸出區域頂部的<strong>"批次下載 (ZIP)"</strong>按鈕將所有轉換後的JPG圖片打包成一個ZIP檔案一次性下載。所有處理都在瀏覽器本地完成，確保您的圖片隱私和安全。',
            note: '批次下載時，ZIP檔案中的圖片會保持原始檔名，並自動添加.jpg副檔名。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的圖片轉JPG工具。現在您可以輕鬆將各種格式的圖片轉換為JPG，優化檔案大小，提升網站效能，或滿足特定平台對圖片格式的要求。',
    
    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: '圖片壓縮器',
            description: '在不明顯損失品質的情況下減小影像檔案大小，支援多種格式。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: '圖片調整器',
            description: '將影像調整為特定尺寸或按百分比縮放，支援批次處理。',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: '印章生成器',
            description: '線上生成公司公章、個人印章等圖形，可與圖片轉ICO圖標工具搭配使用，製作個人化圖標。',
            url: 'https://www.ufreetools.com/tool/seal-generator'
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
            name: 'JPEG影像壓縮標準 (ISO/IEC 10918)',
            description: '了解JPG格式的壓縮原理和技術標準',
            url: 'https://zh.wikipedia.org/wiki/JPEG'
        },
        {
            name: 'Web影像格式對比指南',
            description: 'PNG、JPG、WebP等格式的特點和適用場景',
            url: 'https://developer.mozilla.org/zh-TW/docs/Web/Media/Formats/Image_types'
        },
        {
            name: '圖片優化最佳實踐',
            description: '網站圖片優化的專業建議和技巧',
            url: 'https://web.dev/fast/#optimize-your-images'
        }
    ]
};