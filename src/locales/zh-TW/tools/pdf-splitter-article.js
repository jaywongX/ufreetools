export default {
    title: 'PDF分割工具：線上PDF拆分器完整使用指南',
    functionTitle: '什麼是PDF分割工具及其核心功能？',
    intro: '我們的<strong>PDF分割工具</strong>是一款功能強大的線上應用，專門用於將大型PDF文件拆分成多個較小的檔案。這個<strong>線上PDF拆分器</strong>支援多種分割模式，包括按頁面範圍、書籤結構、頁面大小和空白頁自動檢測等智慧分割方式。使用者可以精確控制每個分割片段的內容，實現高效的文件管理和分發。我們的工具完全基於瀏覽器運行，無需安裝任何軟體，確保您的文件安全性和隱私保護。',
    
    useCasesTitle: 'PDF分割工具的實際應用場景',
    useCases: [
        '將大型報告按章節分割，便於團隊協作和分發',
        '從合約文件中提取特定頁面，如簽名頁或條款頁',
        '將電子書按章節拆分，方便閱讀和管理',
        '從掃描文件中分離不同的表單或證件',
        '將簡報文件按主題分割，用於不同場合展示',
        '從學術論文中提取圖表和參考文獻部分',
        '將發票批次文件拆分成單獨的發票檔案',
        '從產品手冊中提取特定產品的說明頁面'
    ],
    
    tipTitle: '專業提示：',
    tipContent: '使用頁面範圍分割時，建議先預覽PDF文件確定準確的頁碼。對於包含書籤的PDF，選擇按書籤分割可以自動識別章節結構，大大提高分割效率。',
    
    conclusion: '<strong>PDF文件分割</strong>是現代辦公和學術工作中的重要需求。我們的線上PDF分割工具通過提供多種智慧分割模式，幫助使用者高效管理大型文件。無論是按精確頁面範圍分割，還是利用書籤結構自動分割，都能滿足不同場景的需求。工具支援批次處理和高品質輸出，確保分割後的文件保持原有的格式和清晰度。',
    
    faqTitle: '常見問題解答',
    faqs: [
        {
            question: '如何使用頁面範圍功能精確分割PDF？',
            answer: '我們的<strong>PDF頁面分割工具</strong>支援靈活的頁面範圍語法。您可以輸入單個頁面（如"5"）、連續範圍（如"1-10"）或多個不連續範圍（如"1-5,8,10-15"）。系統會自動解析您的輸入並建立相應的分割檔案。建議在分割前先查看PDF的總頁數，確保輸入的頁碼在有效範圍內。'
        },
        {
            question: '按書籤分割功能是如何工作的？',
            answer: '按書籤分割功能會自動識別PDF文件中的書籤結構，並根據書籤層級建立分割點。這種方式特別適合處理有明確章節結構的文件，如技術手冊、學術論文或電子書。如果PDF沒有書籤，系統會提示您選擇其他分割模式。'
        },
        {
            question: '什麼是按頁面大小分割，適用於哪些場景？',
            answer: '按頁面大小分割會檢測PDF中不同尺寸的頁面，並將相同尺寸的頁面歸為一組。這種方式適合處理混合格式的文件，比如包含A4正文頁面和A3圖表頁面的報告。<strong>智慧PDF分割器</strong>會自動識別頁面尺寸差異並建立相應的分組。'
        },
        {
            question: '空白頁檢測分割如何提高文件處理效率？',
            answer: '空白頁檢測功能會自動識別PDF中的空白或近似空白頁面，並以這些頁面作為自然分割點。這對於處理掃描文件特別有用，因為掃描過程中經常會產生空白頁。系統會智慧跳過這些空白頁，確保每個分割檔案都包含有意義的內容。'
        },
        {
            question: '分割後的PDF檔案品質會受到影響嗎？',
            answer: '我們的工具採用無損分割技術，直接複製原始PDF頁面而不進行重新渲染，因此分割後的檔案品質與原文檔完全相同。您可以透過輸出設定調整預覽解析度和影像品質參數，但這些設定只影響預覽顯示，不會改變最終輸出檔案的品質。所有文字、影像和向量圖形都會完整保留。'
        }
    ],
    
    tutorialTitle: '如何使用PDF分割工具',
    steps: [
        {
            title: '上傳PDF檔案',
            description: '首先上傳您需要分割的PDF檔案。您可以透過<strong>拖放</strong>方式直接將檔案拖到上傳區域，或點擊上傳按鈕選擇檔案。工具還支援從URL直接匯入PDF檔案，方便處理網路上的文件。',
            note: '支援同時上傳多個PDF檔案進行批次處理。每個檔案都會顯示詳細的資訊包括檔案大小和頁數。'
        },
        {
            title: '選擇分割模式',
            description: '根據您的需求選擇合適的分割模式。<strong>按頁面範圍分割</strong>適合精確控制；按書籤分割適合有結構的文件；按頁面大小分割適合混合格式文件；按空白頁分割適合掃描文件。',
            note: '不同的分割模式適用於不同類型的文件，選擇正確的模式可以大大提高分割效率。'
        },
        {
            title: '設定分割參數',
            description: '如果選擇按頁面範圍分割，請在頁面範圍輸入框中指定要提取的頁面。支援多種格式：單頁（5）、範圍（1-10）、多個範圍（1-5,8,10-15）。系統會即時驗證輸入的有效性。',
            note: '頁面編號從1開始計算。您可以參考檔案資訊中顯示的總頁數來確定範圍。'
        },
        {
            title: '預覽文件內容',
            description: '上傳後系統會自動產生PDF的縮圖預覽，幫助您確認文件內容和頁面順序。預覽功能讓您可以直觀地看到每一頁的內容，確保分割設定的準確性。',
            note: '縮圖預覽有助於您更好地理解文件結構，特別是在設定頁面範圍時非常有用。'
        },
        {
            title: '調整輸出設定',
            description: '在輸出設定區域，您可以調整解析度（72-300 DPI）和影像品質參數。這些設定主要影響預覽顯示效果，實際分割的PDF檔案會保持原始品質。',
            note: '較高的解析度設定會提供更清晰的預覽效果，但可能會增加處理時間。'
        },
        {
            title: '執行分割並下載',
            description: '點擊<strong>"開始分割"</strong>按鈕執行分割操作。處理完成後，分割結果會顯示在右側輸出區域，每個分割檔案都包含預覽和下載選項。您可以單獨下載每個檔案，或使用批次下載功能將所有檔案打包成ZIP。',
            note: '所有處理都在您的瀏覽器中完成，確保文件安全性。分割後的檔案會保持原始PDF的所有格式和屬性。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功掌握PDF分割工具的使用方法。現在您可以高效地將大型PDF文件分割成所需的片段，提高文件管理和分發效率。',
    
    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: 'PDF合併工具',
            description: '將多個PDF檔案合併成一個文件，支援頁面排序和品質控制。',
            url: 'https://www.ufreetools.com/tool/merge-pdf-online'
        },
        {
            name: 'PDF轉Excel轉換器',
            description: '免費線上PDF轉Excel轉換器，將PDF檔案中的表格資料提取並轉換為可編輯的Excel試算表。',
            url: 'https://www.ufreetools.com/tool/pdf-to-excel-converter'
        },
        {
            name: 'PDF轉圖片轉換器',
            description: '將PDF文件的每一頁轉換為高品質的影像檔案，支援多種輸出格式。',
            url: 'https://www.ufreetools.com/tool/pdf-to-image-converter'
        },
        {
            name: 'PDF轉Word轉換器',
            description: '將PDF文件轉換為可編輯的Word格式，保留原始版面配置和格式。',
            url: 'https://www.ufreetools.com/tool/pdf-to-word-converter'
        },
    ],
    
    referencesTitle: '參考資源',
    references: [
        {
            name: 'PDF技術概述',
            description: '了解PDF檔案格式的技術細節',
            url: 'https://opensource.adobe.com/dc-acrobat-sdk-docs/standards/pdfstandards/pdf/PDF32000_2008.pdf'
        },
        {
            name: 'Office Open XML標準',
            description: '關於Excel試算表格式的技術規範',
            url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-376/'
        },
        {
            name: 'Web內容無障礙指南(WCAG)',
            description: '關於文件可訪問性的指南',
            url: 'https://www.w3.org/WAI/standards-guidelines/wcag/'
        }
    ]
}