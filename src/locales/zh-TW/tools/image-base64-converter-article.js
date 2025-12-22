export default {
    title: '圖片Base64轉換器：線上圖片編碼解碼工具使用指南',
    functionTitle: '什麼是圖片Base64轉換器及其用途？',
    intro: '我們的<strong>圖片Base64轉換器</strong>是一款強大的純前端線上工具，可以輕鬆實現圖片與Base64編碼之間的雙向轉換。該工具支援PNG、JPEG、WebP、GIF、SVG等多種圖片格式，提供品質控制和批次處理功能。使用我們的<strong>線上圖片轉Base64工具</strong>，您可以快速將圖片轉換為Base64編碼用於網頁嵌入、API傳輸或資料儲存，也可以將Base64編碼還原為圖片檔案。所有處理都在瀏覽器本地完成，無需上傳到伺服器，確保您的隱私和資料安全。',
    
    useCasesTitle: '圖片Base64轉換的常見應用場景',
    useCases: [
        '在網頁開發中將小圖示和圖片直接嵌入HTML或CSS，減少HTTP請求',
        '在行動應用程式開發中使用Base64編碼儲存和傳輸圖片資料',
        '在API介面中傳遞圖片資料，避免檔案上傳的複雜性',
        '在郵件範本中嵌入圖片，確保圖片能夠正常顯示',
        '在資料儲存系統中將圖片轉換為文字格式儲存',
        '在前端快取策略中使用Base64編碼的圖片資料',
        '在Web Worker中處理圖片資料，提高效能',
        '在離線應用程式中預載和儲存圖片資源'
    ],
    
    tipTitle: '專業提示：',
    tipContent: '對於需要透明背景的圖片，建議使用PNG格式並保持原始品質。對於照片類圖片，可以使用JPEG格式並適當調整品質以減小檔案大小。Base64編碼後的資料大小約為原檔案的133%，請注意控制檔案大小以避免效能問題。',
    
    conclusion: '<strong>圖片Base64轉換</strong>工具對前端開發者、行動應用程式開發者、API開發者以及任何需要處理圖片資料的使用者特別有用。透過使用我們的Base64轉換器，您可以快速實現圖片與文字編碼之間的轉換，簡化開發流程，提高工作效率。我們的工具使這個過程變得簡單高效，無需安裝任何軟體，完全在瀏覽器中運行。',
    
    faqTitle: '常見問題解答',
    faqs: [
        {
            question: '什麼是Base64編碼？為什麼需要將圖片轉換為Base64？',
            answer: 'Base64是一種將二進位資料編碼為ASCII字元的編碼方式。將圖片轉換為Base64編碼後，可以將其作為文字字串嵌入到HTML、CSS、JSON等文字格式中，無需單獨的檔案請求。這對於小圖示、內嵌圖片、API資料傳輸等場景非常有用。我們的<strong>圖片轉Base64工具</strong>可以快速完成這個轉換過程。'
        },
        {
            question: 'Base64編碼會影響圖片品質嗎？',
            answer: 'Base64編碼本身不會影響圖片品質，它只是改變了資料的表示方式。但是，在轉換過程中如果選擇了較低的品質設定（僅適用於JPEG格式），可能會影響圖片品質。我們的工具允許您調整品質參數，在檔案大小和圖片品質之間找到平衡。對於PNG、WebP等格式，轉換過程是無損的。'
        },
        {
            question: '我可以處理哪些圖片格式？',
            answer: '我們的<strong>Base64圖片轉換器</strong>支援多種常見圖片格式，包括PNG（支援透明背景）、JPEG/JPG（可調整品質）、WebP（現代格式優化）、GIF（包括動畫）和SVG（向量圖）。您可以將這些格式的圖片轉換為Base64編碼，也可以將Base64編碼還原為這些格式的圖片。'
        },
        {
            question: '如何一次批次處理多張圖片？',
            answer: '我們的工具支援批次處理功能。在圖片轉Base64模式下，您可以同時拖放多張圖片或使用檔案選擇器選擇多個檔案。上傳後，點擊"開始轉換"按鈕即可同時處理所有圖片。轉換完成後，您可以使用"批次下載"功能將所有Base64編碼打包成ZIP檔案下載。'
        },
        {
            question: 'Base64編碼後的資料大小會增加多少？',
            answer: 'Base64編碼會將原始二進位資料轉換為文字格式，編碼後的資料大小約為原檔案的133%（即增加約33%）。這是因為Base64使用4個ASCII字元表示3個位元組的原始資料。我們的工具會顯示原始大小和壓縮率資訊，幫助您了解轉換效果。'
        },
        {
            question: '我可以將Base64編碼轉換回圖片嗎？',
            answer: '是的，我們的工具支援雙向轉換。在Base64轉圖片模式下，您可以貼上Base64編碼字串（可以包含或不包含data:image前綴），工具會自動識別格式並生成圖片。您還可以選擇輸出格式（PNG、JPEG或WebP），即使原始格式不同也可以轉換。'
        },
        {
            question: '處理大檔案時會有效能問題嗎？',
            answer: '我們的工具在瀏覽器本地處理所有資料，對於大多數常見大小的圖片（幾MB以內）都能快速處理。對於非常大的圖片，我們提供了最大檔案大小限制和品質調整功能，可以幫助控制處理時間和記憶體使用。如果遇到效能問題，建議適當降低圖片品質或使用圖片壓縮工具預先處理。'
        },
        {
            question: '我的圖片資料會被上傳到伺服器嗎？',
            answer: '不會。我們的<strong>純前端Base64轉換工具</strong>完全在您的瀏覽器中運行，所有圖片處理和轉換都在本地完成，不會上傳任何資料到伺服器。這確保了您的隱私和資料安全，特別適合處理敏感或私密的圖片。'
        }
    ],
    
    tutorialTitle: '如何使用圖片Base64轉換器',
    steps: [
        {
            title: '選擇轉換方向',
            description: '首先選擇您需要的轉換方向：<strong>圖片轉Base64</strong>或<strong>Base64轉圖片</strong>。根據您的需求點擊相應的單選按鈕。',
            note: '圖片轉Base64適用於將圖片檔案轉換為編碼字串，Base64轉圖片適用於將編碼字串還原為圖片檔案。'
        },
        {
            title: '上傳圖片或輸入Base64編碼',
            description: '如果選擇圖片轉Base64，您可以<strong>拖放圖片</strong>到上傳區域，或點擊區域從設備中選擇檔案。支援同時選擇多個檔案進行批次處理。如果選擇Base64轉圖片，請在文字框中貼上Base64編碼字串。',
            note: 'Base64編碼可以包含data:image前綴，工具會自動識別和處理。'
        },
        {
            title: '調整轉換參數（可選）',
            description: '在圖片轉Base64模式下，您可以調整<strong>圖片品質</strong>滑塊（1%-100%）來控制輸出品質，也可以設定<strong>最大檔案大小</strong>限制。工具會自動優化以確保結果符合您的要求。',
            note: '品質設定主要影響JPEG格式，PNG和WebP格式通常保持原始品質。'
        },
        {
            title: '執行轉換',
            description: '點擊<strong>"開始轉換"</strong>按鈕開始處理。對於圖片轉Base64，工具會將每張圖片轉換為Base64編碼字串。對於Base64轉圖片，工具會解碼字串並生成圖片預覽。',
            note: '處理時間取決於圖片數量和大小，大多數情況下轉換會立即完成。'
        },
        {
            title: '檢視轉換結果',
            description: '轉換完成後，您可以在輸出區域檢視結果。對於圖片轉Base64，會顯示圖片預覽、Base64編碼文字、編碼長度、原始大小和壓縮率等資訊。對於Base64轉圖片，會顯示生成的圖片預覽、圖片尺寸和偵測到的格式。',
            note: '您可以點擊"複製Base64"按鈕快速複製編碼字串，或點擊"下載"按鈕儲存圖片檔案。'
        },
        {
            title: '下載或使用結果',
            description: '對於圖片轉Base64的結果，點擊<strong>"複製Base64"</strong>按鈕將編碼複製到剪貼簿，然後可以直接在程式碼中使用。如果有多個結果，可以使用<strong>"批次下載"</strong>功能將所有Base64文字打包下載。對於Base64轉圖片的結果，點擊"下載"按鈕儲存圖片檔案。',
            note: '所有處理都在您的瀏覽器中進行，確保資料安全和隱私保護。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的圖片Base64轉換器。現在您可以輕鬆實現圖片與Base64編碼之間的轉換，提高開發效率，簡化工作流程。',
    
    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: '圖片壓縮器',
            description: '在不明顯損失品質的情況下減小圖像檔案大小。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: '圖片調整器',
            description: '將圖像調整為特定尺寸或按百分比縮放。',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: '圖片顏色反轉工具',
            description: '線上將圖片顏色進行反轉處理，建立負片效果。',
            url: 'https://www.ufreetools.com/tool/invert-image-colors'
        },
        {
            name: '二維碼生成器',
            description: '為URL、文字、聯絡資訊等建立自訂二維碼。',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],
    
    referencesTitle: '參考資源',
    references: [
        {
            name: 'Base64編碼標準 (RFC 4648)',
            description: '了解Base64編碼的官方規範和實現細節',
            url: 'https://datatracker.ietf.org/doc/html/rfc4648'
        },
        {
            name: 'Web圖片格式指南',
            description: '關於PNG、JPEG、WebP等圖片格式的技術文件',
            url: 'https://developer.mozilla.org/zh-TW/docs/Web/Media/Formats/Image_types'
        },
        {
            name: 'Data URL規範',
            description: '關於data: URL格式和Base64內嵌圖片的標準',
            url: 'https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Basics_of_HTTP/Data_URIs'
        }
    ]
}