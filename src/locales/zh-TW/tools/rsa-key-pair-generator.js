export default {
    name: "RSA金鑰對生成器",
    description: "批量生成可自定義金鑰長度的RSA金鑰對，清晰展示公私鑰的結構信息，包括模數（m）、公鑰指數（e）、私鑰指數（d）、質因數（p、q）、私鑰指數的模逆（dp、dq、coef）等",
    settings: "生成設定",
    keySize: "金鑰長度",
    bits: "位元",
    keySizeHint: "金鑰長度必須在256到16384位元之間，且必須是8的倍數",
    outputFormat: "輸出格式",
    keyPairCount: "金鑰對數量",
    generate: "生成金鑰對",
    generating: "生成中",
    results: "生成的金鑰對",
    noResults: "尚未生成金鑰對。請配置設定並點擊\"生成金鑰對\"按鈕。",
    keyPair: "金鑰對",
    publicKey: "公鑰",
    privateKey: "私鑰",
    components: "金鑰組件",
    exportAllAsPem: "匯出全部為PEM格式",
    exportAllAsPkcs8: "匯出全部為PKCS#8格式",
    copyAll: "複製全部",
    copied: "已複製到剪貼簿！",
    generationError: "生成金鑰對時出錯。請重試。",
    aboutRsa: "關於RSA金鑰對",
    rsaDescription: "RSA（Rivest–Shamir–Adleman）是一種公鑰密碼算法，它使用一對金鑰：公鑰用於加密，私鑰用於解密。RSA廣泛用於安全數據傳輸、數字簽名和金鑰交換。",
    keySizeTitle: "金鑰長度建議",
    keySize1024: "1024位元：不建議用於敏感數據（被認為安全性較低）",
    keySize2048: "2048位元：一般用途的最低建議長度",
    keySize4096: "4096位元：建議用於最高安全性或敏感應用",
    keyComponentsTitle: "金鑰組件說明",
    modulusDesc: "兩個大質數p和q的乘積",
    publicExponentDesc: "公鑰指數（通常是一個小的質數，常用65537）",
    privateExponentDesc: "用於解密的私鑰指數",
    primesDesc: "用於生成金鑰的兩個大質數",
    crtParamsDesc: "中國剩餘定理參數，用於加速解密過程",
    article: {
      title: "RSA金鑰對生成器：線上創建安全加密金鑰",
      intro: "<strong>RSA金鑰對生成器</strong>是一款強大的線上工具，可以生成金鑰長度可自定義（從256位元到16384位元）的高安全性RSA公鑰和私鑰對。RSA（Rivest-Shamir-Adleman）是世界上使用最廣泛的非對稱加密算法之一，構成了互聯網和企業系統安全通信的基礎。我們的工具使創建這些必不可少的密碼學組件變得簡單、易用且安全。",
      
      featuresTitle: "RSA金鑰對生成器的核心功能",
      feature1: "<strong>靈活的金鑰長度選項</strong>：生成從256位元到16384位元的RSA金鑰，以滿足您特定的安全需求。",
      feature2: "<strong>多種輸出格式</strong>：以行業標準格式匯出金鑰，包括PEM、PKCS#8、十六進制和Base64編碼。",
      feature3: "<strong>批量生成</strong>：同時創建多個金鑰對，用於測試或部署目的。",
      feature4: "<strong>組件可視化</strong>：檢查金鑰的數學組件，包括模數、指數、質因數和CRT參數。",
      feature5: "<strong>客戶端處理</strong>：所有金鑰生成都在您的瀏覽器中進行，敏感的加密材料永遠不會離開您的設備。",
      
      useCasesTitle: "RSA金鑰對的實際應用場景",
      
      useCase1Title: "安全通信和數據加密",
      useCase1Desc: "RSA金鑰對是在不安全網絡上建立安全通信渠道的基礎。公鑰可以自由共享，允許他人加密消息，而只有擁有私鑰的您才能解密。這種<strong>RSA加密</strong>系統支撐著HTTPS網站的SSL/TLS、安全電子郵件系統和虛擬專用網絡（VPN）等技術。",
      
      useCase2Title: "數字簽名和文檔認證",
      useCase2Desc: "RSA實現了<strong>數字簽名</strong>功能，您可以使用私鑰對文檔進行簽名，使任何擁有您公鑰的人都能驗證該文檔確實由您簽名且未被篡改。這在代碼簽名證書、金融交易、法律文檔和區塊鏈技術中被廣泛使用。",
      
      useCase3Title: "身份驗證和訪問控制",
      useCase3Desc: "RSA金鑰對為<strong>安全認證</strong>系統提供了強大的機制。SSH（安全外殼）使用RSA金鑰進行無密碼遠程服務器登錄。像相互TLS認證這樣的環境中的客戶端證書也依賴RSA金鑰對來安全地驗證客戶端身份。",
      
      useCase4Title: "安全API通信和令牌簽名",
      useCase4Desc: "現代應用程序和微服務經常使用RSA金鑰來<strong>保護API通信</strong>和簽署認證令牌，如JWT（JSON Web令牌）。RSA的非對稱性質允許在分佈式系統中安全驗證令牌，而無需共享金鑰。",
      
      relatedToolsText: "您可能還會發現這些相關的密碼學工具很有用：",
      relatedTool1: "哈希計算器 - 生成和驗證數據完整性的哈希值",
      relatedTool2: "統一社會信用代碼生成器 - 創建有效的中國企業註冊代碼",
      
      tutorialTitle: "如何使用RSA金鑰對生成器",
      
      step1Title: "步驟1：選擇金鑰長度",
      step1Desc: "首先選擇所需的金鑰長度（以位元為單位）。對於一般安全目的，建議至少使用2048位元金鑰作為最低標準。對於要求更高安全性的應用，請選擇4096位元或更大的金鑰。請記住，更大的金鑰提供更好的安全性，但需要更多的計算資源來生成和使用。",
      
      step2Title: "步驟2：選擇輸出格式",
      step2Desc: "從下拉菜單中選擇您偏好的輸出格式。PEM是兼容性最廣的格式，可通過'-----BEGIN RSA PRIVATE KEY-----'頭部識別。PKCS#8是大多數當前系統支持的更現代的格式。十六進制和Base64編碼對於特定的編程或系統集成需求很有用。",
      
      step3Title: "步驟3：指定金鑰對數量",
      step3Desc: "如果您需要多個金鑰對，請使用輸入字段調整數量。這對於測試環境或同時部署多個安全系統特別有用。",
      
      step4Title: "步驟4：生成並保護您的金鑰",
      step4Desc: "點擊\"生成金鑰對\"按鈕並等待過程完成。對於較大的金鑰長度，這可能需要一些時間。生成後，您可以查看、複製或匯出您的金鑰。確保安全地存儲您的私鑰，切勿與未經授權的方共享。",
      
      faqTitle: "關於RSA金鑰對的常見問題",
      
      faq1Question: "什麼是RSA金鑰對？為什麼我需要生成它們？",
      faq1Answer: "RSA金鑰對由一個公鑰和一個私鑰組成，是非對稱加密的基礎。公鑰用於加密數據或驗證簽名，而私鑰用於解密數據或創建簽名。您需要生成RSA金鑰對來實現安全通信、數據加密、數字簽名和身份驗證等功能。",
      
      faq2Question: "我應該選擇多少位元的RSA金鑰長度？",
      faq2Answer: "為了保證安全性，當前推薦的RSA金鑰長度至少為2048位元。對於一般用途，2048位元金鑰提供足夠的安全性；對於需要長期保護的敏感數據或高安全性要求的系統，建議使用4096位元或更長的金鑰。金鑰越長，安全性越高，但計算資源消耗也越大。",
      
      faq3Question: "PEM格式和PKCS#8格式有什麼區別？",
      faq3Answer: "PEM格式和PKCS#8格式是存儲和傳輸RSA金鑰的兩種常見編碼方式。PEM格式使用BASE64編碼，金鑰文件以'-----BEGIN RSA PRIVATE KEY-----'開頭；而PKCS#8是一種更通用的格式，能夠存儲各種類型的私鑰，文件以'-----BEGIN PRIVATE KEY-----'開頭。大多數現代系統支持PKCS#8格式，但某些舊系統可能只支持傳統的PEM格式。",
      
      faq4Question: "如何安全地存儲生成的RSA私鑰？",
      faq4Answer: "RSA私鑰必須妥善保護，避免被未授權訪問。建議的安全存儲方法包括：使用密碼管理器、加密存儲設備、硬件安全模塊(HSM)或金鑰管理系統。私鑰文件應該使用強密碼加密保護，並設置適當的訪問權限。此外，創建備份也很重要，但要確保備份同樣受到保護。",
      
      faq5Question: "生成的RSA金鑰對可以用於哪些具體應用？",
      faq5Answer: "RSA金鑰對廣泛應用於多種安全場景：SSL/TLS證書和HTTPS網站安全；SSH安全遠程登錄；數字簽名驗證文件或代碼的真實性；安全電子郵件通信(S/MIME)；企業VPN和安全認證系統；區塊鏈和數字貨幣錢包；以及API身份驗證和安全令牌生成。",
      
      referencesTitle: "參考資料與延伸閱讀",
      reference1: "NIST特別出版物800-57：金鑰管理建議",
      reference2: "RFC 8017：PKCS #1：RSA加密規範版本2.2",
      reference3: "FIPS 186-5：數字簽名標準(DSS)",
      
      conclusionTitle: "結論",
      conclusionText: "<strong>RSA金鑰對生成器</strong>提供了一種便捷安全的方法，用於創建現代數字安全所必需的加密金鑰。無論您是保護網絡通信、實施身份驗證系統，還是簽署敏感文檔，正確生成的RSA金鑰對都是這些安全措施的基礎。通過使用我們的工具，您可以快速生成適當強度和正確格式的金鑰，以滿足您的特定應用需求，同時確保您的加密材料保持私密和安全。"
    }
  }