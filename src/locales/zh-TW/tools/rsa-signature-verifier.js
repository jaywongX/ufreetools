export default {
    name: "RSA簽名和驗簽",
    description: "使用RSA私鑰對數據進行簽名，並使用公鑰驗證簽名，支持多種格式和算法",
    keyInput: "密鑰輸入",
    privateKey: "私鑰（用於簽名）",
    publicKey: "公鑰（用於驗簽）",
    privateKeyPlaceholder: "請輸入選定格式的RSA私鑰",
    publicKeyPlaceholder: "請輸入選定格式的RSA公鑰或證書",
    generateKeyPair: "生成密鑰對",
    extractFromCert: "從證書提取",
    clear: "清除",
    keySize: "密鑰長度",
    hashAlgorithm: "哈希算法",
    paddingScheme: "填充方式",
    keyFormat: "密鑰格式",
    inputFormat: "輸入格式",
    processMode: "處理模式",
    originalData: "原始數據",
    preProcessed: "預哈希",
    sign: "簽名",
    verify: "驗簽",
    dataToSign: "待簽名數據",
    dataToSignPlaceholder: "輸入要簽名的文本或數據",
    preProcessedDataToSign: "待簽名哈希值",
    preProcessedDataToSignPlaceholder: "輸入十六進制格式的哈希值",
    preprocessOnly: "僅預處理（獲取哈希摘要）",
    preprocessedData: "預處理數據",
    hashDigest: "哈希摘要（步驟1）",
    paddedData: "填充數據（步驟2）",
    showDetailed: "顯示詳細信息",
    showSimple: "顯示簡潔信息",
    signButton: "簽名數據",
    signature: "簽名結果",
    dataToVerify: "待驗證數據",
    dataToVerifyPlaceholder: "輸入原始已簽名的文本或數據",
    preProcessedDataToVerify: "待驗證哈希值",
    preProcessedDataToVerifyPlaceholder: "輸入十六進制格式的哈希值",
    signatureToVerify: "待驗證簽名",
    signatureToVerifyPlaceholder: "輸入要驗證的簽名（選定格式）",
    verifyButton: "驗證簽名",
    verificationResult: "驗證結果",
    notVerifiedYet: "尚未驗證",
    signatureValid: "簽名有效 ✓",
    signatureInvalid: "簽名無效 ✗✗",
    copy: "複製",
    copied: "已複製到剪貼板",
    copyFailed: "複製到剪貼板失敗",
    generatingKeys: "正在生成密鑰...",
    keysGenerated: "已生成{bits}位RSA密鑰對，用時{time}秒",
    keyGenerationFailed: "生成密鑰對失敗",
    notValidCertificate: "輸入的不是有效的X.509證書",
    publicKeyExtracted: "已從證書中提取公鑰",
    extractionFailed: "從證書提取公鑰失敗",
    preprocessingError: "預處理過程中出錯",
    paddingError: "應用填充時出錯",
    invalidPrivateKey: "無效的私鑰格式",
    invalidPublicKey: "無效的公鑰格式",
    invalidInputData: "無效的輸入數據格式",
    invalidSignature: "無效的簽名格式",
    invalidVerificationData: "無效的驗證數據格式",
    signatureCreated: "簽名創建成功",
    signingFailed: "創建簽名失敗",
    verificationSuccess: "簽名驗證成功",
    verificationFailed: "簽名驗證失敗",
    verificationError: "驗證過程中出錯",
    noSignatureToExport: "沒有可導出的簽名",
    signatureExported: "簽名已導出為{format}文件",
    signatureImported: "簽名導入成功",
    signatureImportFailed: "簽名導入失敗",
    article:{
        title: "RSA簽名驗證工具：保障數據完整性的安全數位簽名",
        
        introduction: {
            title: "什麼是RSA簽名驗證？",
            p1: "RSA簽名驗證是一種密碼學過程，用於確保數位通信中的數據完整性、真實性和不可否認性。我們的RSA簽名驗證工具允許您使用RSA私鑰對數據進行簽名，並使用相應的公鑰驗證簽名，提供一種安全的方式來驗證信息在傳輸過程中沒有被篡改。",
            p2: "在數據安全至關重要的時代，RSA數位簽名已成為保護電子文檔、軟體分發和安全通信的行業標準。該工具實現了PKCS#1 v1.5和PSS填充方案，支持包括SHA-1、SHA-256、SHA-384和SHA-512在內的各種哈希算法。",
            p3: "無論您是測試密碼學實現的開發人員，還是驗證數位簽名的安全專業人士，或是學習公鑰密碼學的學生，我們的RSA簽名驗證工具都提供了用戶友好的界面和全面的功能，滿足您所有的數位簽名需求。",
            p4: "RSA簽名驗證過程通過創建數據的密碼學哈希值工作，該哈希值隨後使用發送者的私鑰加密。任何擁有相應公鑰的人都可以驗證簽名，同時確認數據的完整性和發送者的身份。"
        },
        
        useCases: {
            title: "RSA簽名驗證的常見應用",
            case1: "驗證軟體下載和更新的真實性，防止惡意軟體分發",
            case2: "在安全網絡通信(HTTPS)中驗證數位證書",
            case3: "確保法律和商業環境中電子文檔和合同的完整性",
            case4: "在通信協議和應用程式中實現安全的消息認證"
        },
        
        tutorial: {
            title: "如何使用RSA簽名驗證工具",
            step1: {
            title: "步驟1：準備密鑰",
            description: "在簽名或驗證之前，您需要RSA密鑰：",
            option1: "通過點擊\"生成密鑰對\"按鈕並選擇所需的密鑰大小（推薦2048位或更高以確保安全性），直接在工具中生成新的密鑰對",
            option2: "導入各種格式（PEM、DER、HEX或Base64）的現有密鑰"
            },
            step2: {
            title: "步驟2：配置簽名設置",
            description: "為您的簽名操作選擇適當的設置：",
            option1: "哈希算法：從SHA-1、SHA-256、SHA-384或SHA-512中選擇（推薦SHA-256或更高）",
            option2: "填充方案：在PKCS#1 v1.5（最常見）或PSS（更現代和安全）之間選擇",
            option3: "輸入格式：指定您的輸入是純文本、十六進制還是Base64編碼"
            },
            step3: {
            title: "步驟3：簽名或驗證數據",
            description: "根據您的需求：",
            option1: "簽名：在簽名部分輸入您的數據，然後點擊\"簽名數據\"生成簽名",
            option2: "驗證：在驗證部分輸入原始數據和簽名，然後點擊\"驗證簽名\""
            },
            step4: {
            title: "步驟4：查看結果並導出（如需要）",
            description: "簽名後，您可以複製簽名或以各種格式（Base64、HEX、DER、PEM）導出。對於驗證，工具將顯示簽名是有效還是無效。"
            },
            note: "注意：對於高級用戶，該工具還顯示詳細的預處理信息，包括哈希摘要和填充數據，幫助您了解RSA簽名過程的每個步驟。"
        },
        
        faq: {
            title: "關於RSA簽名的常見問題",
            q1: "PKCS#1 v1.5和PSS填充方案有什麼區別？",
            a1: "PKCS#1 v1.5是RSA簽名的傳統填充方案，在各系統中廣泛支持，但存在已知的理論漏洞。PSS（概率簽名方案）是一種更現代的方法，具有可證明安全性能和隨機填充，使其對某些密碼攻擊更具抵抗力。對於大多數應用，當使用強哈希算法和適當的密鑰長度時，兩種方案都提供足夠的安全性。",
            
            q2: "我應該使用哪種哈希算法進行RSA簽名？",
            a2: "對於現代應用，我們建議至少使用SHA-256以確保足夠的安全性。SHA-1被認為在密碼學上較弱，應僅用於遺留兼容性。對於高度敏感的應用或簽名大量數據時，SHA-384或SHA-512提供額外的安全邊際。",
            
            q3: "安全的RSA簽名推薦使用什麼密鑰大小？",
            a3: "截至2023年，RSA密鑰推薦最小使用2048位，長期安全性首選3072或4096位。小於2048位的密鑰被認為容易受到現代計算資源的因式分解攻擊。請注意，更大的密鑰大小將增加簽名操作的處理時間。",
            
            q4: "我可以使用此工具處理預哈希數據嗎？",
            a4: "是的，我們的工具支持簽名和驗證預哈希數據。當您已經使用外部工具計算了哈希摘要，或處理大文件並希望單獨計算哈希時，這非常有用。只需選擇\"預哈希\"選項並以十六進制格式提供哈希值即可。",
            
            q5: "使用這個線上工具處理敏感簽名安全嗎？",
            a5: "此工具完全在您的瀏覽器中處理所有數據 - 不會將任何信息發送到我們的服務器。但是，對於高度敏感或生產環境的密碼操作，我們建議使用專用安全硬件（如HSM）或在受控環境中使用成熟的密碼庫。",
            a5_extra: "對於教育目的、測試或非關鍵應用，此工具提供了一種便捷安全的方式來處理RSA簽名。"
        },
        
        resources: {
            title: "相關工具和資源",
            description: "使用這些補充工具增強您的密碼學工作流程：",
            tool1: "哈希生成器 - 使用各種算法創建哈希摘要",
            tool2: "Base64編碼器/解碼器 - 在原始數據和Base64格式之間轉換",
            tool3: "JWT調試工具 - 解析、驗證和調試JWT令牌的線上工具",
            
            external: {
            title: "外部資源",
            resource1: "RFC 8017 - PKCS #1：RSA密碼學規範版本2.2",
            resource2: "NIST FIPS 186-4 - 數位簽名標準(DSS)"
            }
        },
        
        conclusion: {
            title: "結論",
            p1: "RSA簽名驗證仍然是現代密碼安全的基石，為確保數據完整性和真實性提供了強大的機制。我們的RSA簽名驗證工具使這一強大技術對所有人都可訪問，從密碼學新手到安全專業人士。",
            p2: "無論您是簽名代碼、驗證文檔真實性，還是學習公鑰密碼學，這個工具都在安全的基於瀏覽器的環境中提供了一套全面的功能來處理RSA簽名。立即開始使用RSA簽名驗證工具，保護您的數位資產和通信。"
        }
    }
}