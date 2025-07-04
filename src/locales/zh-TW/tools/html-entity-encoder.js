export default {
  name: 'HTML實體編碼器',
  description: '在HTML文本和實體編碼之間進行轉換',
  title: 'HTML實體編碼器/解碼器',
  intro: 'HTML實體編碼用於將特殊字符轉換為HTML安全的格式，常用於防止XSS攻擊或顯示HTML源代碼。',
  operation: {
    title: '操作類型',
    encode: 'HTML實體編碼',
    decode: 'HTML實體解碼'
  },
  mode: {
    title: '編碼模式',
    named: '命名實體 (&amp;lt;)',
    decimal: '十進制實體 (&amp;#60;)',
    hex: '十六進制實體 (&amp;#x3C;)',
    full: '完全編碼 (所有字符)'
  },
  input: {
    encodeTitle: '需要編碼的文本',
    decodeTitle: '需要解碼的文本',
    encodePlaceholder: '輸入要編碼的HTML或文本...',
    decodePlaceholder: '輸入要解碼的HTML實體文本...',
    clear: '清空'
  },
  output: {
    encodeTitle: '編碼結果',
    decodeTitle: '解碼結果',
    copy: '複製結果',
    copied: '(已複製',
    preview: '預覽效果',
    showSource: '顯示源碼'
  },
  reference: {
    title: '實體參考',
    commonReferenceTables: '常見HTML實體參考表',
    show: '顯示表格',
    hide: '隱藏表格',
    description: {
      named: '使用命名格式如 &amp;lt; 表示 &lt; (僅適用於常見HTML實體)',
      decimal: '使用十進制格式如 &amp;#60; 表示 &lt;',
      hex: '使用十六進制格式如 &amp;#x3C; 表示 &lt;',
      full: '編碼所有非字母數字字符，包括空格、換行等'
    },
    table: {
      char: '字符',
      named: '命名實體',
      decimal: '十進制實體',
      description: '說明'
    },
    entities: {
      lt: '小於號',
      gt: '大於號',
      amp: '和號',
      quot: '雙引號',
      apos: '單引號',
      copy: '版權符號',
      reg: '註冊商標',
      trade: '商標符號',
      nbsp: '不換行空格',
      cent: '分符號',
      pound: '英鎊符號',
      euro: '歐元符號',
      yen: '日元/人民幣符號',
      sect: '章節符號',
      minus: '減號',
      times: '乘號',
      divide: '除號',
      deg: '度數符號',
      plusmn: '正負號',
      frac14: '四分之一'
    }
  },
  messages: {
    copySuccess: '已複製到剪貼板',
    copyError: '複製失敗，請手動複製',
    encodeSuccess: '編碼完成',
    decodeSuccess: '解碼完成',
    invalidInput: '無效的輸入文本'
  },
  article: {
    title: "HTML實體編碼器：Web開發安全的必備工具",
    features: {
      title: "理解HTML實體編碼",
      description: "<strong>HTML實體編碼器</strong>是一種專門設計用於將特殊字符轉換為相應<strong>HTML實體</strong>的工具。這個過程，被稱為<strong>HTML編碼</strong>，對於網絡安全和網頁內容的正確呈現至關重要。<br><br>該<strong>實體編碼器</strong>的核心功能是將可能被解釋為HTML標記的字符（如&lt;和&gt;）轉換為它們各自的<strong>字符實體</strong>（如&amp;lt;和&amp;gt;）。該工具提供多種編碼模式，包括<strong>命名實體</strong>、<strong>十進制實體</strong>、<strong>十六進制實體</strong>以及所有非字母數字字符的<strong>完全編碼</strong>。它還提供了將<strong>HTML實體解碼</strong>回原始字符的基本功能。",
      useCases: {
        title: "HTML實體編碼的常見應用場景",
        items: [
          "Web開發人員在顯示用戶輸入之前對其進行編碼，以防止跨站腳本攻擊(XSS)",
          "內容作者在文檔或博客文章中嵌入代碼片段，其中需要將實際的HTML標籤顯示為文本",
          "CMS管理員確保特殊字符和符號在不同的瀏覽器和操作系統中正確顯示",
          "電子郵件模板設計師編碼特殊字符，以確保在各種電子郵件客戶端中一致地呈現",
          "數據庫管理員準備HTML數據以安全存儲和檢索，避免注入漏洞風險",
          "Web安全專業人員審核頁面潛在的編碼問題，這些問題可能導致安全漏洞"
        ]
      }
    },
    faq: {
      title: "關於HTML實體編碼的常見問題",
      items: [
        {
          question: "各種HTML實體編碼模式有什麼區別？",
          answer: "命名實體（如&lt;）使用易記的標準化名稱表示常見特殊字符，是最易讀的，但僅適用於某些字符。十進制實體（如&#60;）使用十進制數字表示字符的Unicode代碼點。十六進制實體（如&#x3C;）也使用代碼點，但格式為十六進制。完全編碼將所有非字母數字字符轉換為它們的實體形式，提供最全面的保護，但會產生更長的輸出。"
        },
        {
          question: "為什麼HTML實體編碼對Web安全很重要？",
          answer: "HTML實體編碼對Web安全至關重要，因為它可以防止跨站腳本(XSS)攻擊。通過編碼特殊字符，特別是尖括號（< >），用戶提供的內容在瀏覽器中顯示時不會被解釋為可執行的HTML或JavaScript。沒有適當的編碼，惡意用戶可能注入竊取數據、重定向用戶或執行未授權操作的腳本。編碼確保用戶輸入被視為文字文本而非可執行代碼。"
        },
        {
          question: "什麼時候應該使用HTML實體編碼而不是其他類型的編碼？",
          answer: "在HTML上下文中顯示用戶生成的內容時，如網頁正文內容、屬性或HTML電子郵件模板，應使用HTML實體編碼。對於JavaScript上下文，使用JavaScript轉義。對於URL參數，使用URL編碼。對於CSS值，使用CSS轉義。HTML實體編碼專為在HTML文檔中安全地表示特殊字符而設計，而其他編碼方案為具有自身安全考慮的不同上下文服務。"
        },
        {
          question: "HTML實體編碼會影響我的內容的視覺外觀嗎？",
          answer: "正確實現時，HTML實體編碼不應影響最終用戶看到的內容視覺外觀。瀏覽器會自動解碼並渲染實體以顯示原始字符。例如，&amp;copy;對查看者將顯示為©。編碼僅在源代碼中可見。但是，如果您編碼應被解釋為實際HTML的內容（如格式標籤），這些元素將按字面顯示而不是被渲染。"
        },
        {
          question: "我可以使用HTML實體編碼表示所有國際字符和符號嗎？",
          answer: "是的，HTML實體編碼可以表示任何Unicode字符，使其適用於國際字符、符號和表情符號。雖然常見特殊字符有命名實體（如&amp;euro;表示€），但任何字符都可以使用基於其Unicode代碼點的十進制(&#8364;)或十六進制(&#x20AC;)實體格式進行編碼。但是，對於大量國際文本，考慮為您的HTML文檔使用UTF-8字符編碼，同時對特殊字符進行選擇性實體編碼。"
        }
      ]
    },
    guide: {
      title: "HTML實體編碼器使用指南",
      steps: [
        "選擇操作類型：選擇'HTML實體編碼'將特殊字符轉換為HTML實體，或選擇'HTML實體解碼'將實體轉換回字符",
        "如果是編碼，選擇您偏好的編碼模式：命名實體用於可讀的命名代碼，十進制實體用於數字代碼，十六進制實體用於基於十六進制的代碼，或完全編碼用於最大字符轉換",
        "在適當的字段中輸入您的文本 - 要么是要編碼的文本，要么是要解碼的HTML實體文本",
        "根據您選擇的操作點擊'編碼'或'解碼'按鈕",
        "查看下方顯示的輸出結果。對於編碼內容，您可以在查看源代碼和渲染預覽之間切換",
        "通過點擊'複製結果'按鈕將結果複製到剪貼板，以便在您的網頁或應用程序中使用",
        "作為參考，請查閱頁面底部的常見HTML實體參考表，以查看常用的HTML實體及其表示形式"
      ]
    },
    conclusion: "HTML實體編碼對重視安全性和跨不同平台正確呈現的Web開發人員和內容創建者來說是一項必不可少的實踐。通過使用這個HTML實體編碼器工具，您可以確保您的Web內容正確顯示，同時防止潛在危險的代碼注入攻擊。無論您是開發Web應用程序，創建文檔還是管理內容系統，適當的HTML實體編碼都應該是您安全一致的Web開發工作流程的標準部分。"
  }
}