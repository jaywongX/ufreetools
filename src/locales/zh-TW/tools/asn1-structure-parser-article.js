export default {
    title: "ASN.1結構解析器 - 解碼和可視化ASN.1編碼數據",

    // 介紹部分
    introTitle: "什麼是ASN.1結構解析器？",
    introPara1: "ASN.1結構解析器是一個強大的工具，用於解碼和可視化抽象語法標記一（Abstract Syntax Notation One，ASN.1）編碼的數據結構。ASN.1是一種標準接口描述語言，用於定義可以跨平台序列化和反序列化的數據結構。它廣泛應用於電信和計算機網絡中，特別是在加密協議中。",
    introPara2: "我們的ASN.1結構解析器提供了一種互動式方法來檢查複雜的ASN.1結構，支援多種輸入格式，包括PEM、HEX、Base64和DER。它提供基於樹的可視化，使您能夠輕鬆探索嵌套的ASN.1元素，對開發人員、安全研究人員和網絡工程師非常有價值。",

    applicationTitle: "ASN.1解析器的常見應用",
    application1: "<strong>X.509證書分析</strong>：檢查SSL/TLS證書結構和內容，用於安全審計和故障排除。",
    application2: "<strong>PKCS文件檢查</strong>：詳細分析私鑰、證書請求和證書存儲格式。",
    application3: "<strong>加密消息語法（CMS）</strong>：檢查用於安全消息協議的簽名和加密數據結構。",
    application4: "<strong>網絡協議分析</strong>：解碼SNMP、LDAP和H.323等協議中使用的ASN.1數據。",
    introPara3: "ASN.1結構解析對於理解現代安全系統中使用的複雜數據格式至關重要。我們的解析器通過提供彩色編碼可視化、可展開的樹視圖和編碼數據的十六進制轉儲，使這一過程變得直觀。",

    // 常見問題部分
    faqTitle: "關於ASN.1結構解析器的常見問題",

    faq1Question: "ASN.1結構解析器可以接受哪些格式？",
    faq1Answer: "我們的ASN.1結構解析器支援多種輸入格式，包括PEM（Privacy Enhanced Mail）、HEX（十六進制）、Base64和DER（Distinguished Encoding Rules）二進制文件。這種靈活性使您能夠處理來自各種源的ASN.1數據，而無需格式轉換工具。",

    faq2Question: "如何使用ASN.1解析器分析X.509證書？",
    faq2Answer: "要分析X.509證書，只需選擇'PEM'作為輸入格式，並將您的證書（包括BEGIN/END CERTIFICATE標記）粘貼到輸入區域。解析器將自動解碼結構並將其顯示為互動式樹，允許您展開節點並檢查特定的證書字段，如主題、頒發者、有效期和擴展。",

    faq3Question: "我可以導出解析後的ASN.1結構用於文檔嗎？",
    faq3Answer: "是的，您可以通過點擊設置面板中的\"導出為JSON\"按鈕將解析後的ASN.1結構導出為JSON。此功能對於記錄結構、與同事共享或在自己的應用程序中進一步處理結構化數據非常有用。",

    faq4Question: "ASN.1、DER和BER編碼之間有什麼區別？",
    faq4Answer: "ASN.1（抽象語法標記一）是用於定義數據結構的語言，而DER（區分編碼規則）和BER（基本編碼規則）是確定ASN.1結構如何轉換為二進制格式的特定編碼規則。DER是BER的一個子集，確保每個ASN.1值只有一種編碼，因此在加密應用中更受青睞。我們的解析器主要處理DER編碼的ASN.1結構，這在安全應用中最為常見。",

    faq5Question: "ASN.1解析器如何處理對象標識符（OID）？",
    faq5Answer: "ASN.1結構解析器會自動識別常見的對象標識符（OID），並在數字OID值旁邊顯示其友好名稱。例如，'1.2.840.113549.1.1.11'將顯示為'sha256WithRSAEncryption'。此功能使理解X.509證書和加密消息等複雜結構中不同元素的用途變得更加容易。",

    // 教程部分
    tutorialTitle: "如何使用ASN.1結構解析器",

    step1Title: "步驟1：選擇輸入格式",
    step1Content: "首先，為您的ASN.1數據選擇適當的輸入格式。使用輸入面板中的單選按鈕從PEM、HEX、Base64或DER選項中進行選擇。您選擇的格式決定了解析器如何解釋您的輸入數據。",

    step2Title: "步驟2：輸入或上傳ASN.1數據",
    step2Content: "將您的ASN.1編碼數據輸入到文本區域，或通過點擊上傳區域上傳文件。對於PEM格式，確保您的數據包含正確的BEGIN/END標記。對於十六進制輸入，您可以使用各種分隔符（空格、冒號等），這些可以在設置面板中配置。",
    step2Example: "-----BEGIN CERTIFICATE-----\nMIIDazCCAlOgAwIBAgIUXF3AmOAMqvdXdFLJV8C5c9K6cI8wDQYJKoZIhvcNAQEL\n...\n-----END CERTIFICATE-----",

    step3Title: "步驟3：探索ASN.1樹結構",
    step3Content: "一旦數據被解析，ASN.1樹結構將顯示在左下方面板中。您可以通過點擊三角形來展開和折疊節點。每個節點顯示其標籤類型（如SEQUENCE、INTEGER、OBJECT IDENTIFIER）和值。顏色編碼有助於區分不同的ASN.1類型。",

    step4Title: "步驟4：檢查十六進制表示",
    step4Content: "如果啟用了\"顯示十六進制轉儲\"選項，右側面板將顯示ASN.1數據的十六進制轉儲。將鼠標懸停在樹中的元素上將突出顯示十六進制轉儲中的相應字節，幫助您理解編碼的二進制結構。",
    step4Example: "00000000 30 82 03 6a 30 82 02 52 a0 03 02 01 02 02 14 5c 0..j0..R........\\",

    step5Title: "步驟5：配置顯示選項",
    step5Content: "使用設置面板根據您的需求自定義顯示。選項包括顯示/隱藏十六進制轉儲、截斷大數據值以提高可讀性、選擇十六進制分隔符以及按類型啟用顏色突出顯示。您還可以一次性展開所有節點，以獲得結構的完整視圖。",

    // 資源部分
    resourcesTitle: "其他資源",

    relatedToolsTitle: "相關工具",
    relatedTool1: "Base64轉換器 - 編碼和解碼Base64數據",
    relatedTool2: "Base64 Hex 轉換器 - 在 Base64 和十六進制格式之間輕鬆轉換，支援自定義分隔符和大小寫",
    relatedTool3: "證書解碼器 - 詳細分析X.509證書",

    externalResourcesTitle: "外部資源",
    externalResource1: "ITU-T ASN.1介紹 - ASN.1標準的官方文檔",
    externalResource2: "RFC 5280 - 互聯網X.509公鑰基礎設施證書和CRL配置文件"
}
