export default {
    name: "SM2金鑰對生成器",
    description: "生成符合GB/T 32918-2016標準的SM2公私鑰對，支援多種輸出格式",
    settings: "生成設定",
    keyLength: "金鑰長度",
    bits: "位元",
    standardBits: "SM2標準使用256位元金鑰長度",
    outputFormat: "輸出格式",
    keyPairCount: "金鑰對數量",
    maxKeysWarning: "一次最多生成10個金鑰對",
    generating: "生成中",
    generate: "生成金鑰對",
    results: "生成結果",
    generatingKeys: "正在生成金鑰對...",
    copyAll: "複製全部",
    noKeysGenerated: "尚未生成金鑰。配置設定並點擊\"生成金鑰對\"。",
    keyPair: "金鑰對",
    copy: "複製",
    publicKey: "公鑰",
    privateKey: "私鑰",
    keyComponents: "金鑰元件",
    invalidCount: "請輸入1-10之間的數字",
    generateFailed: "生成金鑰對失敗",
    generateSuccess: "成功生成 {count} 個SM2金鑰對",
    copiedToClipboard: "已複製到剪貼簿",
    copyFailed: "複製失敗",
    downloadedAs: "已下載為 {filename}",
    exportPem: "匯出為PEM",
    exportAllJson: "匯出為JSON",
    exportAllTxt: "匯出為TXT",
    exportTxt: "匯出為TXT",
    singleKeyDownloaded: "{type} 已下載為Pem",
    allPemDownloaded: "全部金鑰已下載為Pem",
    keyPairCopied: "金鑰對已複製到剪貼簿",
    allKeysCopied: "全部金鑰對已複製到剪貼簿",
    componentsCopied: "金鑰元件已複製到剪貼簿",
    componentsDownloaded: "金鑰元件已下載為TXT檔案",

    // 文章內容
    article: {
        title: "SM2金鑰對生成器：中國密碼學標準完全指南",
        introTitle: "什麼是SM2金鑰對生成器及其用途？",
        introPara1: "<strong>SM2金鑰對生成器</strong>是一種專門的密碼工具，可根據中國國家標準密碼算法（GB/T 32918-2016）建立安全的公鑰和私鑰對。與RSA或ECC等國際標準不同，SM2是由中國監管機構專門設計和批准的，這使得它對在中國監管框架內運營的組織至關重要。",
        introPara2: "我們的<strong>SM2金鑰生成工具</strong>允許使用者輕鬆生成密碼安全的SM2金鑰對，而無需專門瞭解底層算法。該工具支援多種輸出格式，包括PEM、HEX和Base64，使其在不同的開發和安全環境中具有多功能性。",
        
        useCaseTitle: "主要應用場景",
        useCase1: "<strong>金融服務合規</strong>：在中國運營的銀行和金融科技公司在保護金融交易和客戶資料時需要使用SM2加密以符合監管要求。",
        useCase2: "<strong>政府和企業資訊系統</strong>：中國政府機構和大型企業必須實施SM2進行安全通訊、文件簽名和身份驗證。",
        useCase3: "<strong>跨境電子商務</strong>：與中國進行貿易的企業通常需要實施SM2密碼技術以進行安全資料交換和符合監管要求。",
        useCase4: "<strong>行動應用安全</strong>：為中國市場開發應用的開發者需要SM2金鑰對來實現安全認證和資料保護機制。",
        standardInfo: "SM2算法是商密（SM）密碼算法套件的一部分，該套件包括SM2（公鑰密碼學）、SM3（雜湊）和SM4（對稱加密）。隨著中國繼續獨立於國際標準開發自己的網路安全框架，這些標準變得越來越重要。",
        
        tutorialTitle: "如何使用SM2金鑰對生成器",
        tutorialIntro: "按照以下步驟指南將幫助您快速高效地生成安全的SM2金鑰對。每個生成的金鑰對都包括加密、解密、簽名和驗證操作所需的公鑰和私鑰元件。",
        
        step1Title: "步驟1：選擇金鑰參數",
        step1Desc: "SM2標準使用固定的256位元金鑰長度，在提供強大安全性的同時保持良好效能。這在我們的工具中是預先選擇的，不能更改，因為它遵循官方標準。",
        
        step2Title: "步驟2：選擇輸出格式",
        step2Desc: "選擇您喜歡的輸出格式：<ul><li><strong>PEM</strong>：密碼憑證和金鑰的標準格式，大多數系統和應用程式都能輕鬆識別。</li><li><strong>HEX</strong>：十六進制表示，適用於程式碼中的直接實現。</li><li><strong>Base64</strong>：緊湊的表示方式，常用於Web應用程式和API通訊。</li></ul>",
        
        step3Title: "步驟3：指定金鑰對數量",
        step3Desc: "決定您需要多少個金鑰對。這對於測試或設定多個安全通道特別有用。",
        
        step4Title: "步驟4：生成和管理金鑰",
        step4Desc: "點擊\"生成金鑰對\"按鈕並等待過程完成。生成後，您可以檢視、複製或匯出金鑰。確保安全儲存您的私鑰，切勿與未授權方共享。",
        
        relatedToolsTitle: "相關密碼學工具",
        relatedToolsDesc: "為了全面實施安全措施，您可能想要探索這些補充工具：",
        relatedTool1: "RSA金鑰對生成器 - 生成符合國際密碼標準的RSA金鑰",
        relatedTool2: "雜湊計算器 - 計算各種雜湊值，包括用於資料完整性驗證的SM3",
        
        faqTitle: "關於SM2密碼學的常見問題",
        faq1Question: "SM2與RSA等其他公鑰密碼算法有什麼區別？",
        faq1Answer: "SM2是由中國當局開發的基於橢圓曲線的公鑰密碼算法。與RSA相比，SM2提供了可比的安全性，但金鑰長度更短（SM2為256位元，而RSA為2048+位元），從而帶來更好的效能。主要區別在於，SM2專門用於在中國符合監管要求，而RSA在國際上使用更廣泛。數學基礎也不同：SM2基於橢圓曲線密碼學，而RSA依賴於大質數因子分解的難度。",
        
        faq2Question: "SM2加密對國際商業應用安全嗎？",
        faq2Answer: "是的，SM2提供符合國際標準的強大密碼安全性。憑藉其256位元金鑰長度，它提供了相當於RSA 3072位元金鑰的安全性。SM2已經過中國當局的廣泛密碼分析，被認為能抵抗已知攻擊。然而，對於國際互操作性，一些組織可能更喜歡廣泛採用的國際標準，如RSA或ECDSA。選擇通常取決於您的特定合規要求和應用程式部署的位置。",
        
        faq3Question: "如何驗證我的SM2金鑰對是否正常工作？",
        faq3Answer: "要測試您的SM2金鑰對，您可以執行簡單的加密和解密測試：使用公鑰加密測試訊息，然後使用相應的私鑰解密它。如果解密的訊息與原始訊息匹配，則您的金鑰對工作正常。或者，您可以使用私鑰簽署訊息，並使用公鑰驗證簽名。我們的工具確保所有生成的金鑰對根據SM2標準規範在數學上是有效的。",
        
        faq4Question: "SM2金鑰可以用於標準SSL/TLS實現嗎？",
        faq4Answer: "SSL/TLS中的SM2支援取決於具體實現。中國開發了一種稱為TLCP（傳輸層密碼協議）的變體，它使用SM2/SM3/SM4算法代替國際標準。中國境內的主要瀏覽器通常支援這些標準。對於國際系統，您可能需要專門的函式庫或配置來啟用SM2支援。OpenSSL 1.1.1及更高版本包含對SM2密碼學的支援，使許多系統的整合變得更加簡單。",
        
        faq5Question: "SM2金鑰對中的x、y和d元件代表什麼？",
        faq5Answer: "在SM2金鑰對中，這些元件代表重要的數學值：<ul><li><strong>x和y</strong>：這些是橢圓曲線上代表您公鑰的點的座標。它們共同形成可以公開共享的完整公鑰。</li><li><strong>d</strong>：這是您的私鑰，一個必須保密的大隨機數。它用於解密和簽名操作。</li></ul>與RSA不同，RSA有多個元件如p、q、d、e、n，SM2私鑰更簡單，只有標量值d，而公鑰由點座標(x,y)組成。",
        
        resourcesTitle: "更多資源",
        resourcesDesc: "要瞭解有關SM2密碼學和中國密碼標準的更多資訊，以下權威來源提供了有價值的資訊：",
        resource1: "GB/T 32918-2016 - 官方SM2標準出版物（中文）",
        resource2: "國家密碼管理局 - 官方監管文件",
        resource3: "ISO/IEC 14888-3:2018 - 引用SM2簽名算法的國際標準",
        
        conclusionTitle: "結論",
        conclusionPara: "<strong>SM2金鑰對生成器</strong>提供了一種使用者友好的方式來建立符合中國國家標準的密碼安全金鑰。無論您是為中國市場開發應用程式，實施安全通訊通道，還是滿足監管要求，我們的工具都簡化了SM2金鑰生成的複雜過程。通過支援多種輸出格式並提供全面的金鑰管理功能，這個<strong>SM2密碼工具</strong>幫助組織實施強大的安全措施，同時保持與中國密碼法規的合規性。"
    }
}