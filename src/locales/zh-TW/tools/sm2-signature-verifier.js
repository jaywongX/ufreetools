export default {
    name: "SM2簽名和驗簽",
    description: "使用SM2私鑰對數據進行簽名，並使用公鑰驗證簽名，支援多種哈希算法",
    keyInput: "密鑰輸入",
    privateKey: "私鑰（用於簽名）",
    publicKey: "公鑰（用於驗簽）",
    privateKeyPlaceholder: "請輸入十六進制格式的SM2私鑰",
    publicKeyPlaceholder: "請輸入十六進制格式的SM2公鑰",
    generateKeyPair: "生成密鑰對",
    clear: "清除",
    keyGenError: "生成密鑰對出錯",
    hashAlgorithm: "哈希算法",
    processMode: "處理模式",
    originalData: "原始數據",
    preHashed: "預哈希",
    sign: "簽名",
    verify: "驗簽",
    dataToSign: "待簽名數據",
    dataToSignPlaceholder: "輸入要簽名的文本或數據",
    preHashedDataToSign: "待簽名哈希值",
    preHashedDataToSignPlaceholder: "輸入十六進制格式的哈希值",
    dataToVerify: "待驗證數據",
    dataToVerifyPlaceholder: "輸入要驗證的文本或數據",
    preHashedDataToVerify: "待驗證哈希值",
    preHashedDataToVerifyPlaceholder: "輸入十六進制格式的哈希值",
    signatureToVerify: "待驗證簽名",
    signatureToVerifyPlaceholder: "輸入要驗證的簽名",
    inputFormat: "輸入格式",
    outputFormat: "輸出格式",
    signatureFormat: "簽名格式",
    text: "文本",
    hex: "十六進制",
    base64: "Base64",
    signature: "簽名",
    copySignature: "複製簽名",
    signatureCopied: "簽名已複製到剪貼簿",
    copyError: "複製到剪貼簿時出錯",
    signError: "創建簽名失敗",
    verifyError: "驗證簽名失敗",
    invalidInputData: "無效的輸入數據",
    unsupportedInputFormat: "不支援的輸入格式",
    unsupportedHashAlgorithm: "不支援的哈希算法",
    waitingForVerification: "請輸入數據和簽名進行驗證",
    verificationSuccess: "驗證成功！簽名有效。",
    verificationFailed: "驗證失敗！簽名無效。",
    preHashedMustBeHex: "預哈希輸入必須為十六進制格式",
    idParameter: "ID參數",
    idValue: "ID值",
    idPlaceholder: "輸入ID值（默認：1234567812345678）",
    idDescription: "SM2算法在簽名生成和驗證過程中使用ID值。默認值為1234567812345678。",
    signatureComponents: "簽名組件（R和S值）",
    invalidKeyFormat: "無效的密鑰格式",
    invalidSignatureFormat: "無效的簽名格式",
    formatError: "格式錯誤",
    signatureHashMismatch: "簽名哈希不匹配 - 請確認數據和哈希算法與簽名時使用的一致",
    copy: "複製",
    export: "導出",
    signatureExported: "簽名已導出到文件",
    exportError: "導出簽名時出錯",
    privateKeyType: "私鑰",
    publicKeyType: "公鑰",
    signatureType: "簽名",
    derEncodingFailed: "無法將簽名編碼為DER格式",
    invalidIdFormat: "無效的ID格式",
    invalidDerFormat: "無效的DER格式",
    invalidSignatureLength: "簽名長度不適合DER編碼",
    zValue: "預處理哈希值",
    zValueFormula: "Z值計算公式",
    showDetails: "顯示詳情",
    hideDetails: "隱藏詳情",
    zCalculationFailed: "Z值計算失敗",
    invalidPublicKeyFormat: "無效的公鑰格式",
    importPfx: "導入PFX/P12文件",
    enterPin: "輸入PIN碼/密碼",
    pinPlaceholder: "輸入PFX文件的密碼",
    cancel: "取消",
    confirm: "確認",
    fileReadError: "讀取文件錯誤",
    pfxImportSuccess: "PFX文件導入成功",
    pfxImportError: "導入PFX文件錯誤",
    noPrivateKeyFound: "PFX文件中未找到私鑰",
    invalidPrivateKeyFormat: "PFX文件中私鑰格式無效",
    privateKeyExtractionFailed: "提取私鑰失敗",
    pkcs8ParseError: "解析PKCS#8結構錯誤",
    rsaKeyNotSupported: "檢測到RSA密鑰。此工具僅支援SM2密鑰。",
    rsaCertNotSupported: "檢測到RSA證書。此工具僅支援SM2證書。",
    failedToDerivePublicKey: "無法從私鑰派生公鑰",
    article: {
        title: "SM2數字簽名工具 - 安全在線簽名生成與驗證",
        introduction: {
            title: "什麼是SM2數字簽名？",
            p1: "SM2數字簽名是中國商用密碼標準的一部分，是一種密碼算法。我們的<strong>SM2數字簽名驗證工具</strong>提供了一個用戶友好的界面，使用SM2橢圓曲線算法創建和驗證數字簽名，該算法提供與256位RSA相當的強大安全性，同時使用更小的密鑰大小。",
            p2: "這款在線SM2簽名工具專為解決無需安裝專業軟件即可安全簽名和驗證數字數據的挑戰而設計。無論您是在應用程序中實現SM2簽名驗證的開發人員，驗證數字證書的安全專業人員，還是需要符合中國密碼標準的企業，我們的工具都能提供高效的解決方案。",
            p3: "隨著SM2加密標準在全球範圍內的應用不斷增加，特別是在需要遵守中國法規的地區，擁有可靠的<strong>SM2數字簽名生成器和驗證器</strong>對國際企業和安全專業人員至關重要。"
        },
        applications: {
            title: "SM2簽名的實際應用場景",
            p1: "SM2簽名驗證在各行各業有眾多實際應用，尤其是在數據完整性和身份驗證至關重要的領域：",
            scenario1: {
                title: "金融科技與銀行業",
                description: "在金融服務領域，<strong>網上銀行SM2簽名驗證</strong>有助於保障交易安全並維持合規性。在需要符合SM密碼標準的地區運營的銀行使用SM2簽名來認證交易請求，驗證客戶身份，並確保銀行間通信安全。能夠快速驗證SM2簽名確保金融文件未被篡改且來自合法來源。"
            },
            scenario2: {
                title: "政府和公共部門",
                description: "為<strong>官方文件實施安全SM2密碼</strong>的政府機構依靠數字簽名來驗證電子記錄的真實性。我們的工具支援驗證數字證書、官方通信和法律文件上的簽名。這對於與要求遵守國家密碼標準的中國政府實體打交道的國際組織特別有價值。"
            },
            scenario3: {
                title: "跨境電商和國際貿易",
                description: "從事<strong>跨境貿易SM2數字簽名驗證</strong>的企業使用密碼簽名來保護合同、驗證裝運清單和認證海關文件。我們的工具使企業能夠輕鬆實施SM2簽名驗證流程，無需專業的底層密碼學原理知識，在保持高安全標準的同時促進更順暢的國際業務。"
            }
        },
        tutorial: {
            title: "如何使用SM2簽名工具",
            intro: "按照以下步驟指南使用我們的在線工具創建和驗證SM2數字簽名：",
            step1: {
                title: "步驟1：密鑰管理",
                description: "首先輸入您的SM2私鑰（用於簽名）和公鑰（用於驗證）。您可以粘貼各種格式（HEX、PEM、Base64或DER）的現有密鑰，或通過點擊\"生成密鑰對\"按鈕直接在工具中生成新的密鑰對。為了安全起見，所有密碼操作都在您的瀏覽器本地執行 - 您的密鑰永遠不會傳輸到我們的服務器。"
            },
            step2: {
                title: "步驟2：配置ID參數",
                description: "輸入ID參數，這是SM2簽名算法中使用的唯一標識符。默認值為\"1234567812345678\"，但您可以根據特定需求自定義它。您可以根據偏好以文本、HEX或Base64格式輸入ID。"
            },
            step3: {
                title: "步驟3：創建簽名",
                description: "在簽名部分，輸入要簽名的數據並選擇適當的輸入格式（文本、HEX或Base64）。點擊\"簽名\"按鈕生成簽名。工具將顯示完整簽名及其組件（R和S值）。您可以選擇首選的輸出格式（DER、HEX、Base64或PEM），並輕鬆複製或導出簽名。"
            },
            step4: {
                title: "步驟4：驗證簽名",
                description: "要驗證簽名，在驗證部分輸入原始數據和要驗證的簽名。為數據和簽名選擇適當的格式，然後點擊\"驗證\"。工具將立即檢查簽名對於給定數據和公鑰是否有效，顯示清晰的成功或失敗消息，以及適用的詳細錯誤信息。"
            }
        },
        specifications: {
            title: "技術規格",
            p1: "我們的SM2簽名工具實現了中國國家密碼管理局發布的GM/T 0003-2012標準中定義的SM2橢圓曲線數字簽名算法。該工具完全符合這些標準，同時提供額外功能以便於使用。",
            p2: "主要技術特點包括：",
            feature1: "按標準要求固定使用SM3哈希算法（256位）",
            feature2: "支援多種輸入格式的自定義ID參數（文本/HEX/Base64）",
            feature3: "多種簽名輸出格式（DER/HEX/Base64/PEM）以兼容各種系統",
            feature4: "完整的簽名組件顯示（R和S值）用於技術驗證",
            feature5: "支援各種密鑰格式（PEM/HEX/Base64/DER）實現靈活的密鑰管理",
            feature6: "詳細的錯誤報告用於故障排除驗證問題"
        },
        faq: {
            title: "常見問題解答",
            q1: "SM2簽名與其他數字簽名算法有什麼區別？",
            a1: "SM2數字簽名基於橢圓曲線密碼學（ECC），是中國商用密碼標準的一部分。與RSA簽名相比，<strong>SM2簽名加密</strong>在更小的密鑰大小下提供同等的安全性，使其更加高效。與ECDSA等國際標準不同，SM2使用不同的曲線，並將簽名者的身份（ID）納入簽名生成過程，增加了額外的安全層。SM2對於必須遵守中國法規或在中國網絡安全框架內運營的應用尤為重要。",

            q2: "SM2簽名工具對敏感數據安全嗎？",
            a2: "是的，我們的<strong>安全SM2簽名驗證工具</strong>使用客戶端JavaScript直接在您的瀏覽器中執行所有密碼操作。您的私鑰和敏感數據永遠不會離開您的設備或傳輸到我們的服務器。該實現遵循SM2數字簽名標準（GM/T 0003-2012），並按規範要求使用SM3進行哈希處理。對於高度敏感的企業應用，我們建議在生產環境中使用任何在線工具（包括我們的工具）之前進行額外審查。",

            q3: "為什麼ID參數在SM2簽名中很重要？",
            a3: "ID參數是<strong>帶自定義ID的SM2數字簽名算法</strong>的獨特特性，將其與其他基於ECC的簽名方案區分開來。它作為簽名生成過程的額外輸入，本質上將簽名者的身份綁定到簽名上。這可以防止某些類型的攻擊並增加一層認證。在大多數實現中，包括我們的工具，當不需要特定ID時，使用默認值'1234567812345678'，但組織通常使用與用戶身份或系統標識符相關的自定義ID來增強安全性和可追溯性。",

            q4: "我可以在中國以外的國際業務中使用SM2簽名嗎？",
            a4: "絕對可以。雖然SM2源於中國密碼標準的一部分，但<strong>SM2簽名的國際採用</strong>正在增長，特別是對於在中國有業務或與中國實體有合作關係的企業。我們的工具通過支援與各種國際系統兼容的多種輸入和輸出格式，促進跨境密碼操作。對於從事國際貿易的企業，使用SM2簽名可以幫助確保符合中國監管要求，同時保持符合全球標準的強大密碼安全性。",

            q5: "如果簽名驗證失敗，我應該怎麼做？",
            a5: "如果您遇到<strong>SM2簽名驗證錯誤</strong>，請檢查以下常見問題：1）確保您使用的是與用於簽名的私鑰相對應的正確公鑰；2）驗證ID參數與簽名生成期間使用的參數匹配；3）確認被驗證的數據與最初簽名的數據完全相同，包括格式（文本/HEX/Base64）；4）檢查是否正確選擇了簽名格式（DER/HEX/Base64/PEM）。我們的工具提供詳細的錯誤消息，幫助診斷特定問題。對於持續存在的問題，您可能需要重新生成簽名或檢查密鑰對是否有效。"
        },
        related: {
            title: "相關密碼學工具",
            description: "使用這些補充密碼學實用工具增強您的安全工具包：",
            tool1: "<a href='https://www.ufreetools.com/tool/rsa-signature-verifier' target='_blank'>RSA簽名驗證器</a> - 使用廣泛採用的RSA算法創建和驗證數字簽名。",
            tool2: "<a href='https://www.ufreetools.com/tool/hash-calculator' target='_blank'>哈希計算器</a> - 使用包括SM3在內的各種算法生成安全哈希值。",
            tool3: "<a href='https://www.ufreetools.com/tool/x509-certificate-decoder' target='_blank'>證書解碼器</a> - 解碼和檢查X.509證書，包括使用SM2密碼學的證書。"
        }
    },
}