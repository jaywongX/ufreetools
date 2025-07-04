export default {
  name: '對稱加密算法',
  description: '實現文本和文件的安全加密與解密，支援多種對稱加密算法，包括AES、DES和國密SM4',
  encryption: {
    title: '加密/解密',
    plaintext: '明文',
    plaintextPlaceholder: '輸入要加密的文本',
    ciphertext: '密文',
    ciphertextPlaceholder: '加密後的數據將顯示在這裡',
    encrypt: '加密',
    decrypt: '解密',
    decrypted: '解密文本',
    decryptedPlaceholder: '解密後的數據將顯示在這裡',
    encryptSuccess: '加密成功',
    decryptSuccess: '解密成功',
    encryptError: '加密失敗：{error}',
    decryptError: '解密失敗：{error}'
  },
  algorithm: {
    title: '選擇算法',
    aes: 'AES',
    des: 'DES',
    tripledes: '3DES（三重DES）',
    sm4: 'SM4 (國密)',
    "3des": '3DES（三重DES）'
  },
  mode: {
    title: '工作模式',
    ecb: 'ECB - 電子密碼本模式',
    cbc: 'CBC - 密碼分組鏈接模式',
    cfb: 'CFB - 密文反饋模式',
    ofb: 'OFB - 輸出反饋模式',
    ctr: 'CTR - 計數器模式'
  },
  padding: {
    title: '填充方式',
    pkcs7: 'PKCS7',
    zeroPadding: '零填充',
    zeropadding: '零填充'
  },
  operation: {
    title: '操作類型',
    encrypt: '加密',
    decrypt: '解密'
  },
  key: {
    title: '密鑰',
    label: '密鑰',
    placeholder: '輸入{keySize}密鑰',
    placeholderString: '輸入{keySize}字符串密鑰 (不足自動填充)',
    placeholderHex: '輸入{keySize}十六進制密鑰 (不足自動填充)',
    placeholderBase64: '輸入{keySize}Base64密鑰 (不足自動填充)',
    generateRandom: '隨機生成',
    sizeHint: '{keySize}',
    autoFillHint: '密鑰長度不足時將自動補零填充，超出部分將被截斷'
  },
  iv: {
    title: '初始向量 (IV)',
    label: '初始向量 (IV)',
    placeholder: '輸入{blockSize}初始向量',
    placeholderString: '輸入{blockSize}字符串IV (不足自動填充)',
    placeholderHex: '輸入{blockSize}十六進制IV (不足自動填充)',
    placeholderBase64: '輸入{blockSize}Base64 IV (不足自動填充)',
    generateRandom: '隨機生成',
    sizeHint: '{blockSize}',
    autoFillHint: 'IV長度不足時將自動補零填充，超出部分將被截斷'
  },
  input: {
    title: '待加密內容',
    titleDecrypt: '待解密內容',
    clear: '清空',
    placeholder: '輸入要加密的文本',
    placeholderDecrypt: '輸入要解密的{format}格式密文'
  },
  inputFormat: {
    title: '輸入格式',
    string: '字符串',
    hex: 'HEX',
    base64: 'Base64'
  },
  output: {
    title: '加密結果',
    titleDecrypt: '解密結果',
    copyResult: '複製結果',
    copied: '已複製'
  },
  outputFormat: {
    title: '輸出格式',
    string: '字符串',
    hex: 'HEX',
    base64: 'Base64'
  },
  error: {
    title: '錯誤',
    invalidHex: '密鑰必須是HEX格式',
    invalidIvHex: 'IV必須是HEX格式',
    invalidHexInput: '無效的HEX格式輸入',
    invalidBase64: '無效的Base64格式輸入',
    unsupportedAlgorithm: '不支援的算法',
    decryptionFailed: '解密失敗：{message}',
    copyFailed: '複製失敗，請手動複製',
    unknownError: '處理過程中發生錯誤',
    invalidHexFormat: '無效的HEX格式',
    invalidBase64Format: '無效的Base64格式',
    emptyBase64: '無效的Base64編碼',
    decryptFailed: '解密失敗：'
  },
  info: {
    title: '算法說明',
    algorithms: {
      aes: 'AES：高級加密標準，可以使用128位、192位或256位密鑰',
      des: 'DES：數據加密標準，使用56位密鑰，安全性較低',
      tripledes: '3DES：三重DES，使用三個56位DES密鑰，提供更高安全性',
      sm4: 'SM4：中國國密標準，分組密碼算法，使用128位密鑰',
      "3des": '3DES：三重DES，使用三個56位DES密鑰，提供更高安全性'
    },
    modes: {
      title: '工作模式說明',
      ecb: 'ECB：電子密碼本模式，各個分組獨立加密，不推薦用於敏感數據',
      cbc: 'CBC：密碼分組鏈接模式，每個分組依賴前一個分組，更加安全',
      cfb: 'CFB：密文反饋模式，將分組密碼轉換為流密碼',
      ofb: 'OFB：輸出反饋模式，也是一種流密碼模式，加解密使用相同操作',
      ctr: 'CTR：計數器模式，每個分組使用遞增計數器進行加密，可並行處理'
    }
  },
  buttons: {
    process: '加密',
    processDecrypt: '解密'
  },
  file: {
    title: '文件加密',
    select: '選擇文件',
    drop: '或將文件拖放至此',
    encrypt: '加密文件',
    decrypt: '解密文件',
    download: '下載結果',
    selected: '已選擇：{name}',
    size: '大小：{size}',
    maxSize: '最大大小：100MB',
    encryptingFile: '正在加密文件...',
    decryptingFile: '正在解密文件...',
    downloadReady: '可以下載',
    fileTooBig: '文件太大。允許的最大大小為100MB。'
  },
  options: {
    title: '選項',
    autoDecrypt: '加密後自動解密',
    includeMeta: '在輸出中包含算法元數據',
    kdf: '密鑰派生函數',
    pbkdf2: 'PBKDF2',
    scrypt: 'scrypt',
    argon2: 'Argon2id',
    salt: '鹽（用於密鑰派生）',
    saltPlaceholder: '以十六進制輸入鹽或留空隨機生成',
    autoClear: '自動清除敏感數據',
    saveSettings: '保存設置'
  },
  security: {
    title: '安全信息',
    description: '關於加密安全性',
    warning: '警告',
    ecbInsecure: 'ECB模式不推薦用於安全應用，因為它不能很好地隱藏數據模式。',
    useModern: '對於敏感數據，請使用帶有GCM或CBC模式的AES-256。',
    keyWarning: '保護您的加密密鑰。如果丟失，數據將無法恢復。',
    browserWarning: '基於瀏覽器的加密方便，但可能不適合高度敏感的數據。',
    learnMore: '了解更多關於加密的信息'
  },
  messages: {
    noAlgorithm: '請選擇加密算法',
    noKey: '請輸入加密密鑰或密碼',
    invalidKeyLength: '所選算法的密鑰長度無效',
    invalidIv: '所選算法和模式的IV長度無效',
    noData: '請輸入要加密/解密的數據',
    padError: '填充錯誤 - 密鑰或數據可能不正確',
    fileSuccess: '文件處理成功',
    fileError: '處理文件錯誤：{error}',
    clipboardError: '複製到剪貼板錯誤：{error}',
    invalidFormat: '無效的輸入格式'
  },
  article: {
    title: "對稱加密算法：全面的數據安全工具",
    features: {
      title: "對稱加密及其功能介紹",
      description: "<strong>對稱加密</strong>工具是一種強大的<strong>密碼學實用程序</strong>，可通過各種行業標準加密算法保護敏感數據。與使用密鑰對的非對稱加密不同，對稱加密使用單個<strong>密鑰</strong>進行加密和解密過程。我們的工具支援多種算法，包括<strong>AES（高級加密標準）</strong>、<strong>DES（數據加密標準）</strong>、<strong>3DES（三重DES）</strong>和<strong>SM4（中國國家標準）</strong>。<br><br>核心功能包括文本和文件加密，提供可配置選項，如<strong>加密模式</strong>（CBC、ECB、CFB、OFB、CTR）、<strong>填充方法</strong>以及靈活的輸入/輸出格式。這個<strong>數據加密工具</strong>提供了用戶友好的界面，無需廣泛的密碼學知識即可實現強大的安全措施，使高級加密對所有人都可以訪問，同時保持高安全標準。",
      useCases: {
        title: "對稱加密的實際應用場景",
        items: [
          "<strong>安全文件共享</strong>：在通過潛在不安全渠道共享敏感文檔、電子表格或媒體文件前對其進行加密。擁有正確密鑰的接收者可以輕鬆解密並訪問原始內容，確保傳輸過程中的機密性。",
          "<strong>密碼存儲和管理</strong>：為您的密碼和認證憑證創建加密存儲。通過使用主密碼對這些敏感信息進行加密，您可以維護安全的登錄詳情集合，同時只需記住一個強密碼。",
          "<strong>API認證</strong>：為API認證系統生成和驗證加密令牌。對稱加密在安全性和性能之間提供了平衡，非常適合處理Web應用程序和服務中的身份驗證令牌。",
          "<strong>數據庫字段加密</strong>：在不重構整個系統的情況下保護數據庫中特定的敏感字段。<strong>對稱密碼</strong>允許選擇性地加密關鍵信息，如個人標識符、財務詳情或私人用戶數據。",
          "<strong>配置安全</strong>：加密包含敏感憑證的應用程序配置文件，如數據庫密碼、API密鑰和服務令牌。這可以防止關鍵訪問信息被意外暴露，即使配置文件被泄露。",
          "<strong>安全通信渠道</strong>：通過為每個會話生成對稱密鑰實現端到端加密通信。這種方法實現了安全的實時消息傳遞，同時為帶寬受限的應用程序保持性能。"
        ]
      }
    },
    faq: {
      title: "關於對稱加密的常見問題解答",
      items: [
        {
          question: "AES、DES、3DES和SM4算法有什麼區別？",
          answer: "這些是不同的<strong>對稱加密算法</strong>，具有不同的安全級別和性能特性。<strong>AES（高級加密標準）</strong>是當前的全球標準，提供出色的安全性和性能，密鑰大小為128、192或256位。<strong>DES（數據加密標準）</strong>是一種較舊的算法，使用56位密鑰，由於其容易受到暴力攻擊的脆弱性，現在被認為對關鍵應用程序不安全。<strong>3DES</strong>通過使用不同密鑰應用三次算法來增強DES安全性，提供更強的保護，但性能較慢。<strong>SM4</strong>是中國國家標準分組密碼算法，密鑰大小為128位，設計為AES的對應物，具有可比的安全性。對於大多數需要安全性的現代應用，推薦使用AES，因為它在強安全性和效率之間取得了最佳平衡。"
        },
        {
          question: "我應該為我的應用選擇什麼加密模式？",
          answer: "<strong>加密模式</strong>決定了分組密碼算法如何處理數據塊。<strong>ECB（電子密碼本）</strong>最簡單但安全性最低，因為相同的明文塊會加密為相同的密文塊，可能會泄露模式。<strong>CBC（密碼塊鏈接）</strong>通過使每個加密塊依賴於前一個塊來增加安全性，需要初始化向量（IV）。<strong>CFB（密碼反饋）</strong>、<strong>OFB（輸出反饋）</strong>和<strong>CTR（計數器）</strong>模式將分組密碼轉換為具有不同特性的流密碼。對於敏感數據的通用加密，CBC在正確實施隨機IV的情況下提供了良好的安全性和合理的性能。CTR模式非常適合可並行化實現，避免了填充要求。現代密碼系統通常更喜歡使用GCM等認證加密模式（本工具不直接提供），同時提供機密性和數據完整性。"
        },
        {
          question: "這個在線加密工具對敏感數據安全嗎？",
          answer: "這個<strong>基於瀏覽器的加密工具</strong>在不向外部服務器發送任何信息的情況下，在瀏覽器中本地處理所有數據，提供基本級別的機密性。然而，對於真正敏感的信息，請考慮幾個因素：1）該工具使用JavaScript實現的標準<strong>加密庫</strong>，可能沒有審計過的本機實現那樣的安全保證。2）瀏覽器環境面臨潛在威脅，如瀏覽器擴展、惡意軟件或內存檢查。3）密鑰管理仍然至關重要 - 如果您丟失加密密鑰，數據恢復將變得不可能。對於高度敏感的數據或生產系統，我們建議在受控環境中使用專用加密軟件或加密庫，並採用適當的密鑰管理實踐。這個工具最適合教育目的、偶爾使用或加密中等敏感信息。"
        },
        {
          question: "如何安全處理和共享加密密鑰？",
          answer: "安全的<strong>加密密鑰管理</strong>對於維護加密安全至關重要。永遠不要通過與加密數據相同的渠道共享密鑰 - 這違背了加密的目的，因為任何攔截兩者的人都可以解密您的信息。相反：1）使用單獨的安全通信渠道進行密鑰交換。2）考慮密鑰拆分，將密鑰的不同部分通過不同渠道發送。3）盡可能使用安全密鑰交換協議。4）對於持續通信，考慮使用非對稱加密安全交換對稱密鑰。5）實施密鑰輪換實踐以提高長期安全性。6）安全存儲密鑰，絕不以明文形式存儲，最好使用專門的密鑰管理系統。7）對於關鍵密鑰的最大安全性，考慮使用硬件安全模塊（HSM）或專用密鑰管理服務。請記住，加密數據的安全性僅與您的密鑰管理實踐一樣強。"
        },
        {
          question: "如何確保我的加密數據保持完整性且未被篡改？",
          answer: "標準<strong>對稱加密</strong>提供機密性，但本身不能保證數據完整性。要驗證您的加密數據是否未被修改：1）盡可能使用認證加密模式。雖然此工具主要提供傳統模式（CBC、ECB等），但現代加密系統更喜歡使用AES-GCM等認證加密，同時提供機密性和完整性驗證。2）通過計算加密數據的密碼學哈希（如SHA-256）或HMAC並安全存儲來實現單獨的完整性檢查。解密前重新計算並比較此值以檢測篡改。3）對於關鍵應用，考慮在加密之外使用數字簽名。4）始終在解密前檢查密文的長度和結構，確保接收到完整的密文。5）如果可能，在加密方案中包含版本信息和其他元數據，以防止降級攻擊。這些措施有助於確保您的敏感信息在可能不受信任的渠道中的機密性和完整性。"
        }
      ]
    },
    guide: {
      title: "對稱加密工具使用步驟指南",
      steps: [
        "<strong>選擇加密算法</strong>：根據您的安全需求和兼容性需要，從AES（推薦用於大多數應用）、DES、3DES或SM4（中國標準）中選擇。AES為現代應用提供了安全性和性能的最佳平衡。",
        "<strong>選擇操作模式</strong>：從可用選項（CBC、ECB、CFB、OFB、CTR）中選擇一種<strong>加密模式</strong>。出於一般安全目的，推薦使用CBC模式，因為它在使用隨機初始化向量（IV）時提供良好的安全性。",
        "<strong>配置填充方法</strong>：如果您選擇的模式需要填充（如CBC或ECB），在PKCS7（標準）或零填充之間選擇。此設置決定了當數據長度不是塊大小的倍數時，最後一個塊如何填充。",
        "<strong>生成或輸入加密密鑰</strong>：輸入自定義密鑰或使用'隨機生成'按鈕創建密碼學強度的密鑰。對於AES，密鑰長度將根據所需強度為16、24或32字節。為您的密鑰選擇適當的輸入格式（字符串、十六進制或Base64）。",
        "<strong>如果需要，提供初始化向量（IV）</strong>：對於ECB以外的模式，您需要IV。點擊'隨機生成'創建安全的隨機IV，或輸入您自己的IV。IV不需要保密，但每次加密操作都應該是隨機和唯一的。",
        "<strong>輸入要加密的數據</strong>：在輸入字段中輸入或粘貼要加密的文本。選擇適當的輸入格式（普通文本使用字符串，或已編碼數據使用十六進制/Base64）。解密時，以原始輸出格式（通常是十六進制或Base64）提供密文。",
        "<strong>處理和使用結果</strong>：點擊'加密'或'解密'按鈕處理您的數據。結果將以指定的輸出格式顯示。使用複製按鈕輕鬆將結果傳輸到另一個應用程序或文檔。對於加密，確保安全存儲密鑰和IV（如果使用），因為解密時需要它們。"
      ]
    },
    conclusion: "對稱加密工具提供了一種強大而易於使用的方式，使用行業標準加密算法保護您的敏感信息。通過遵循適當的安全實踐並了解可用選項，您可以有效地為廣泛的應用實施強加密，從保護個人文件到實現更複雜的安全系統。雖然這個基於瀏覽器的工具為許多加密需求提供了便利和靈活性，但請記住，安全關鍵型應用可能需要具有適當密鑰管理基礎設施的專用加密解決方案。無論您是希望為個人數據添加隱私層，還是探索加密概念，這個工具為對稱加密這一基本安全技術提供了實用的介紹。"
  }
}