export default {
  "name": "線上雜湊計算器 | 支援 SHA-256、MD5、SHA-3、BLAKE3、SM3 等多種演算法",
  "description": "免費線上雜湊計算器，支援 SHA-256、MD5、SHA-3、BLAKE3、SM3 等多種加密與校驗演算法，適用於檔案完整性驗證、資料安全處理等場景。",
  "input": {
    "title": "輸入",
    "text": "文字輸入",
    "file": "檔案輸入",
    "textPlaceholder": "在此輸入要計算雜湊的文字...",
    "fileSelect": "選擇檔案",
    "fileDrop": "拖放檔案到此處或點擊上傳",
    "fileSelected": "已選擇檔案: {name}",
    "fileSize": "{size}",
    "removeFile": "移除檔案",
    "localProcessing": "檔案將在本地處理，不會上傳到伺服器",
    "encoding": "編碼",
    "selectAlgorithm": "選擇雜湊演算法",
    "utf8": "UTF-8",
    "ascii": "ASCII",
    "latin1": "Latin1",
    "calculate": "計算雜湊",
    "calculating": "計算中...",
    "clear": "清除輸入",
    "hashValue": "雜湊值"
  },
  "algorithms": {
    "title": "演算法",
    "selectAll": "全選",
    "deselectAll": "取消全選",
    "md5": "MD5",
    "sha1": "SHA-1",
    "sha224": "SHA-224",
    "sha256": "SHA-256",
    "sha384": "SHA-384",
    "sha512": "SHA-512",
    "sha3_224": "SHA3-224",
    "sha3_256": "SHA3-256",
    "sha3_384": "SHA3-384",
    "sha3_512": "SHA3-512",
    "ripemd160": "RIPEMD-160",
    "blake2b": "BLAKE2b",
    "blake2s": "BLAKE2s",
    "blake3": "BLAKE3",
    "keccak224": "Keccak-224",
    "keccak256": "Keccak-256",
    "keccak384": "Keccak-384",
    "keccak512": "Keccak-512",
    "whirlpool": "Whirlpool",
    "crc32": "CRC32",
    "hmac": "HMAC選項",
    "key": "HMAC密鑰",
    "keyPlaceholder": "輸入HMAC密鑰"
  },
  "results": {
    "title": "雜湊結果",
    "algorithm": "演算法",
    "digest": "摘要",
    "noInput": "輸入文字或選擇檔案以計算雜湊",
    "calculating": "計算中...",
    "copy": "複製",
    "copied": "已複製到剪貼簿",
    "copyFailed": "複製失敗，請手動複製",
    "copyAll": "複製全部",
    "download": "下載結果",
    "fileInfo": "檔案資訊",
    "fileName": "名稱",
    "fileSize": "大小",
    "fileType": "類型",
    "lastModified": "最後修改時間",
    "hexFormat": "十六進位格式",
    "base64Format": "Base64格式",
    "upperHexFormat": "大寫十六進位格式",
    "hashValue": "雜湊值",
    "allHashesTitle": "所有雜湊演算法結果",
    "export": "匯出CSV",
    "copyToClipboard": "複製到剪貼簿",
    "allHashesTitle": "所有演算法的雜湊值"
  },
  "verification": {
    "title": "雜湊驗證",
    "inputVerifyHash": "輸入要驗證的雜湊值",
    "placeholder": "輸入用於比較的雜湊值...",
    "paste": "貼上雜湊進行驗證",
    "matches": "雜湊匹配！",
    "doesNotMatch": "雜湊不匹配",
    "notFound": "未找到演算法",
    "verify": "驗證",
    "autoDetect": "自動檢測演算法",
    "result": "驗證結果"
  },
  "options": {
    "title": "選項",
    "uppercase": "大寫輸出",
    "showTiming": "顯示計算時間",
    "autoCalculate": "自動計算",
    "formatOutput": "格式化長輸出",
    "binaryOutput": "二進位檢視（用於非文字檔案）",
    "compareHashes": "比較雜湊值",
    "hmacMode": "啟用HMAC模式",
    "showAllHashes": "顯示所有演算法的雜湊值"
  },
  "tools": {
    "title": "工具",
    "batchProcessing": "批次處理",
    "fileHashTool": "檔案雜湊目錄",
    "hashIdentifier": "雜湊類型識別器",
    "hmacGenerator": "HMAC生成器",
    "checksumVerifier": "校驗和驗證器",
    "passwordHasher": "密碼雜湊器"
  },
  "batchTool": {
    "title": "批次處理",
    "addFiles": "新增檔案",
    "processFiles": "處理檔案",
    "clearAll": "清除全部",
    "fileName": "檔案名稱",
    "algorithm": "演算法",
    "status": "狀態",
    "actions": "操作",
    "waiting": "等待中",
    "processing": "處理中",
    "complete": "完成",
    "failed": "失敗",
    "remove": "移除",
    "filesSelected": "已選擇{count}個檔案",
    "exportResults": "匯出結果",
    "selectAlgorithm": "為所有檔案選擇演算法"
  },
  "messages": {
    "fileTooBig": "檔案太大。最大允許大小為100MB。",
    "hashCalculated": "雜湊計算成功",
    "invalidInput": "無效輸入",
    "readError": "無法讀取檔案",
    "processingError": "處理檔案時出錯: {error}",
    "algorithmNotAvailable": "演算法不可用。請安裝所需函式庫。",
    "algorithmFallback": "{algorithm} 不可用，使用 {fallback} 作為備選",
    "moduleNotReady": "{name} 模組尚未準備好",
    "algorithmError": "{algorithm} 錯誤: {error}"
  },
  "security": {
    "warning": "在不安全的HTTP連線上使用雜湊工具存在安全風險"
  },
  "algorithmDetails": {
    "title": "關於雜湊演算法",
    "usage": "常見用途",
    "safe": "安全性",
    "md2": {
      "name": "MD2 (128位元)",
      "description": "MD2是一種廣泛使用的雜湊函數，產生128位元（16位元組）雜湊值，通常表示為32個十六進位字元。",
      "usage": "檔案完整性檢查、儲存密碼（不安全）",
      "security": "已被證明缺乏碰撞抵抗性；不應在安全敏感場合使用。"
    },
    "md4": {
      "name": "MD4 (128位元)",
      "description": "MD4是一種廣泛使用的雜湊函數，產生128位元（16位元組）雜湊值，通常表示為32個十六進位字元。",
      "usage": "檔案完整性檢查、儲存密碼（不安全）",
      "security": "已被證明缺乏碰撞抵抗性；不應在安全敏感場合使用。"
    },
    "md5": {
      "name": "MD5 (128位元)",
      "description": "MD5是一種廣泛使用的雜湊函數，產生128位元（16位元組）雜湊值，通常表示為32個十六進位字元。",
      "usage": "檔案完整性檢查、儲存密碼（不安全）",
      "security": "已被證明缺乏碰撞抵抗性；不應在安全敏感場合使用。"
    },
    "sha1": {
      "name": "SHA-1 (160位元)",
      "description": "SHA-1是一種加密雜湊函數，產生160位元（20位元組）雜湊值，通常表示為40個十六進位字元。",
      "usage": "版本控制系統（如Git）、檔案完整性驗證",
      "security": "已被證明存在碰撞攻擊漏洞；不推薦用於安全關鍵應用。"
    },
    "sha224": {
      "name": "SHA-224 (224位元)",
      "description": "SHA-224是SHA-2家族中的一員，生成224位元(28位元組)雜湊值。",
      "usage": "適用於空間受限但仍需較強安全性的場景",
      "security": "提供良好的安全性，是SHA-256的截斷版本"
    },
    "sha256": {
      "name": "SHA-256 (256位元)",
      "description": "SHA-256屬於SHA-2系列，產生256位元（32位元組）雜湊值，通常表示為64個十六進位字元。",
      "usage": "數位簽章、數位憑證、密碼儲存、區塊鏈",
      "security": "目前被認為是安全的，廣泛用於高安全性場景。"
    },
    "dsha256": {
      "name": "Double SHA-256",
      "description": "Double SHA-256是連續兩次執行SHA-256的加密雜湊函數，即SHA-256(SHA-256(x))。",
      "usage": "比特幣和許多其他加密貨幣中用於區塊雜湊、交易ID和地址生成",
      "security": "提供與標準SHA-256相同的安全保證，但增加了額外的安全層，使其更難通過碰撞反向計算原始輸入。"
    },
    "sha384": {
      "name": "SHA-384 (384位元)",
      "description": "SHA-384是SHA-512的截斷版本，產生384位元（48位元組）雜湊值。",
      "usage": "需要比SHA-256更高安全性的場景",
      "security": "提供比SHA-256更強的安全性，無已知攻擊方法。"
    },
    "sha512": {
      "name": "SHA-512 (512位元)",
      "description": "SHA-512是SHA-2系列中最長的標準演算法，產生512位元（64位元組）雜湊值。",
      "usage": "需要最高級別安全性的應用",
      "security": "提供最高級別的安全性，無已知有效攻擊。"
    },
    "sha512_224": {
      "name": "SHA-512/224 (224位元)",
      "description": "SHA-512/224是SHA-512的變種，輸出被截斷為224位元。",
      "usage": "提供與SHA-224相同長度但基於SHA-512內部結構的雜湊",
      "security": "對較長資料有更好的性能，同時保持強安全性"
    },
    "sha512_256": {
      "name": "SHA-512/256 (256位元)",
      "description": "SHA-512/256是SHA-512的變種，輸出被截斷為256位元。",
      "usage": "在64位元系統上提供比SHA-256更好的性能",
      "security": "與SHA-256安全性相當，但在某些硬體上更高效"
    },
    "sha3_224": {
      "name": "SHA3-224 (224位元)",
      "description": "SHA3-224是SHA-3標準的一部分，提供224位元輸出。",
      "usage": "適用於需要抵抗量子計算的中等安全性場景",
      "security": "是NIST認證的安全雜湊演算法，提供良好的安全保障"
    },
    "sha3_256": {
      "name": "SHA3-256 (256位元)",
      "description": "SHA3-256是SHA-3標準的一部分，具有與SHA-2系列完全不同的內部結構。",
      "usage": "抵抗量子計算威脅的長期安全應用",
      "security": "設計用於抵抗未來潛在攻擊，包括量子計算攻擊。"
    },
    "sha3_384": {
      "name": "SHA3-384 (384位元)",
      "description": "SHA3-384是SHA-3標準的一部分，提供384位元輸出。",
      "usage": "適用於需要高安全性且抵抗量子計算的場景",
      "security": "提供比SHA3-256更強的安全性，適合敏感資料應用"
    },
    "sha3_512": {
      "name": "SHA3-512 (512位元)",
      "description": "SHA3-512是SHA-3標準中提供最高級別安全性的演算法。",
      "usage": "需要極高安全性和抵抗量子計算的場景",
      "security": "提供最高級別的安全保證，是SHA-3系列中最安全的演算法。"
    },
    "sm3": {
      "name": "SM3 (256位元)",
      "description": "SM3是中國國家密碼管理局發佈的密碼雜湊演算法標準，產生256位元輸出。",
      "usage": "中國商用密碼應用、數位憑證和電子政務系統",
      "security": "設計類似SHA-2但優化了抗攻擊性能，在中國廣泛應用"
    },
    "ripemd160": {
      "name": "RIPEMD-160 (160位元)",
      "description": "RIPEMD-160是由歐洲RIPE項目開發的雜湊函數，產生160位元雜湊值。",
      "usage": "比特幣地址生成、區塊鏈應用",
      "security": "比同長度的SHA-1更安全，但使用較少。"
    },
    "crc32": {
      "name": "CRC32 (32位元)",
      "description": "CRC32是一種循環冗餘校驗函數，常用於錯誤檢測。",
      "usage": "資料完整性校驗、網路通訊、資料傳輸驗證",
      "security": "不適用於密碼學安全場景，主要用於錯誤檢測而非安全防護"
    },
    "murmur3_x86_32": {
      "name": "MurmurHash3 x86 (32位元)",
      "description": "MurmurHash3是一種非加密雜湊函數，以高性能和低碰撞率著稱，32位元版本適用於需要速度和空間效率的應用。",
      "usage": "雜湊表、布隆過濾器、快取系統、資料分片",
      "security": "非加密演算法，不適合安全應用，但在性能關鍵場景表現優異"
    },
    "murmur3_x86_128": {
      "name": "MurmurHash3 x86 (128位元)",
      "description": "MurmurHash3的128位元變體，提供更大的雜湊空間和更低的碰撞概率，適用於大規模資料集。",
      "usage": "大型雜湊表、資料去重、分散式系統中的一致性雜湊、內容尋址儲存",
      "security": "與32位元版本一樣是非加密演算法，但碰撞概率更低，適合需要高唯一性的應用場景"
    },
    "murmur3_x64_128": {
      "name": "MurmurHash3 x64 (128位元)",
      "description": "MurmurHash3的128位元變體，提供更大的雜湊空間和更低的碰撞概率，適用於大規模資料集。",
      "usage": "大型雜湊表、資料去重、分散式系統中的一致性雜湊、內容尋址儲存",
      "security": "與32位元版本一樣是非加密演算法，但碰撞概率更低，適合需要高唯一性的應用場景"
    },
    "blake2b": {
      "name": "BLAKE2b (512位元)",
      "description": "BLAKE2b是一種快速且安全的雜湊函數，針對現代CPU架構優化。",
      "usage": "大規模資料處理、雜湊表、字串比較",
      "security": "設計目標是速度和良好的雜湊分佈，但不保證加密安全性"
    },
    "blake2s": {
      "name": "BLAKE2s (256位元)",
      "description": "BLAKE2s是一種快速且安全的雜湊函數，針對現代CPU架構優化。",
      "usage": "大規模資料處理、雜湊表、字串比較",
      "security": "設計目標是速度和良好的雜湊分佈，但不保證加密安全性"
    },
    "blake3": {
      "name": "BLAKE3 (256位元)",
      "description": "BLAKE3是一種快速且安全的雜湊函數，針對現代CPU架構優化。",
      "usage": "大規模資料處理、雜湊表、字串比較",
      "security": "設計目標是速度和良好的雜湊分佈，但不保證加密安全性"
    },
    "keccak224": {
      "name": "Keccak-224 (224位元)",
      "description": "Keccak-224是SHA-3原始演算法，產生224位元雜湊值。",
      "usage": "以太坊和其他區塊鏈應用、密碼系統",
      "security": "提供強大的安全性，在區塊鏈技術中比標準化的SHA-3變體更常用"
    },
    "keccak256": {
      "name": "Keccak-256 (256位元)",
      "description": "Keccak-256是Keccak系列中使用最廣泛的變體，產生256位元雜湊值。",
      "usage": "以太坊智能合約、區塊鏈交易、數位簽章",
      "security": "在區塊鏈應用中廣受信任，與標準化的SHA3-256略有不同"
    },
    "keccak384": {
      "name": "Keccak-384 (384位元)",
      "description": "Keccak-384是Keccak系列的一個變體，產生384位元雜湊值。",
      "usage": "需要比Keccak-256更高安全性的應用",
      "security": "提供非常強的安全保證，但使用頻率低於Keccak-256"
    },
    "keccak512": {
      "name": "Keccak-512 (512位元)",
      "description": "Keccak-512是Keccak系列中最長的標準演算法，產生512位元雜湊值。",
      "usage": "需要最大碰撞抵抗力的高安全性應用",
      "security": "在Keccak系列中提供最高安全級別，適用於最敏感的資料"
    },
    "shake128": {
      "name": "SHAKE128 (128位元)",
      "description": "SHAKE128是SHA-3家族的一部分，能夠產生可變長度的輸出，預設生成256位元雜湊值。",
      "usage": "需要可變長度輸出的加密應用，金鑰派生函數",
      "security": "提供良好的安全性，是NIST認可的安全雜湊演算法"
    },
    "shake256": {
      "name": "SHAKE256 (256位元)",
      "description": "SHAKE256是SHA-3家族的一部分，能夠產生可變長度的輸出，預設生成512位元雜湊值。",
      "usage": "需要較長雜湊輸出的高安全性應用",
      "security": "提供比SHAKE128更強的安全保證，適合敏感資料應用"
    },
    "cshake128": {
      "name": "cSHAKE128 (可定制變長輸出)",
      "description": "cSHAKE128 是 SHAKE128 的可定制版本，支援自定義字串和函數名稱，能夠產生可變長度的輸出。",
      "usage": "需要定制參數的雜湊演算法場景，NIST標準的金鑰衍生函數，加密協議",
      "security": "提供與 SHAKE128 相當的安全性，同時支援應用程式級別的定制"
    },
    "cshake256": {
      "name": "cSHAKE256 (可定制變長輸出)",
      "description": "cSHAKE256 是 SHAKE256 的可定制版本，支援自定義字串和函數名稱，能夠產生可變長度的輸出。",
      "usage": "高安全性要求的定制雜湊場景，NIST認證的衍生函數，密碼學協議",
      "security": "提供與 SHAKE256 相當的強安全保證，同時允許應用程式級別的參數化定制"
    }
  },
  "article": {
    "title": "雜湊計算器：生成和驗證加密雜湊摘要",
    "intro": "我們的<strong>線上雜湊計算器</strong>提供了一種簡便的方式，為任何文字或檔案生成加密雜湊值。這款免費雜湊生成工具支援多種演算法，包括MD5、SHA-1、SHA-256、SHA-512、RIPEMD、BLAKE等多種演算法。",
    "features": {
      "title": "了解雜湊函數及其應用",
      "description": "<strong>雜湊函數</strong>是一種數學演算法，可將任何大小的輸入資料轉換為固定大小的字串。UFreeTools上的<strong>雜湊計算器</strong>幫助您即時計算這些數位指紋，用於安全驗證、資料完整性檢查或區塊鏈應用。<br><br>與加密不同，雜湊函數是單向操作——它們將資料轉換為唯一的<strong>雜湊摘要</strong>，無法逆向恢復原始輸入。加密雜湊的一個關鍵特性是，即使輸入有微小的變化，也會產生完全不同的輸出，使這些<strong>雜湊演算法</strong>非常適合驗證資料完整性和檢測未授權的修改。",
      "useCases": {
        "title": "雜湊函數的實際應用",
        "items": [
          "<strong>檔案完整性驗證</strong>：安裝軟體下載前，您可以使用我們的<strong>校驗和計算器</strong>通過比較其雜湊值與開發者提供的雜湊值，驗證檔案是否被篡改。這確保您安裝的正是預期的內容，防止惡意軟體注入。",
          "<strong>資料去重</strong>：儲存系統通過比較數位簽名，使用<strong>雜湊值</strong>識別重複檔案，無論檔案名如何。我們的工具幫助您快速計算這些標識符，滿足您自己的去重需求。",
          "<strong>密碼安全</strong>：現代認證系統儲存<strong>密碼雜湊</strong>而非實際密碼。雖然我們的工具有助於理解這一過程，但請記住，生產環境中應使用帶鹽值的專用密碼雜湊函數。",
          "<strong>數位取證</strong>：調查人員使用<strong>雜湊計算器</strong>建立檔案指紋，確保證據真實性。雜湊值證明數位證據在調查過程中未被修改。",
          "<strong>區塊鏈應用</strong>：<strong>加密雜湊</strong>構成了區塊鏈技術的基礎，SHA-256和Keccak-256等演算法(分別用於比特幣和以太坊)在防篡改鏈中保護交易記錄。您可以使用我們的工具嘗試這些相同的演算法。",
          "<strong>內容驗證</strong>：作者和內容創作者可以發佈其原創作品的<strong>雜湊摘要</strong>，為他人提供一種方式，驗證他們擁有的是真實、未修改的版本。"
        ]
      },
      "toolAdvantages": {
        "title": "我們雜湊計算器的優勢",
        "items": [
          "支援30多種雜湊演算法，從MD5到前沿選項如BLAKE3",
          "本地處理確保您的敏感資料永不離開您的設備",
          "針對預期值驗證雜湊，確認資料完整性",
          "以多種格式查看結果(十六進位和Base64)",
          "為文字輸入和最大100MB的檔案計算雜湊值",
          "同時比較多種演算法的結果"
        ]
      }
    },
    "faq": {
      "title": "關於雜湊函數的常見問題",
      "items": [
        {
          "question": "MD5、SHA-1和SHA-256之間有什麼區別？",
          "answer": "這些是不同的加密雜湊演算法，在安全性和輸出長度方面有所不同。<strong>MD5</strong>生成128位元(16位元組)雜湊值，但由於已發現存在碰撞，在加密上被認為已被破解。<strong>SHA-1</strong>生成160位元(20位元組)雜湊，雖然比MD5更強，但由於理論攻擊，也不再推薦用於安全關鍵應用。<strong>SHA-256</strong>屬於SHA-2家族，建立256位元(32位元組)雜湊，目前仍被認為對大多數應用是安全的。對於安全敏感目的，我們建議使用SHA-256或更強演算法如SHA-512或SHA3，而MD5和SHA-1仍可用於非安全應用，如校驗和和去重。從<a href='https://csrc.nist.gov/projects/hash-functions' target='_blank' rel='noopener noreferrer'>美國國家標準與技術研究院(NIST)</a>了解更多關於雜湊演算法安全性的資訊。"
        },
        {
          "question": "加密雜湊函數有多安全？",
          "answer": "雜湊函數的安全性取決於三個關鍵特性：抗碰撞性(難以找到具有相同雜湊的兩個輸入)、抗原像性(無法從雜湊確定輸入)和抗第二原像性(難以找到與給定輸入具有相同雜湊的另一個輸入)。現代演算法如<strong>SHA-256</strong>、<strong>SHA-512</strong>和<strong>SHA3</strong>被認為是加密安全的，但MD5和SHA-1等較舊演算法存在已知漏洞。隨著計算能力的增加和新攻擊方法的發現，安全標準會隨時間演變。對於需要高安全性的應用，始終使用最新推薦的雜湊函數(目前是SHA-256或更強)，並通過<a href='https://www.schneier.com/blog/archives/2005/02/cryptanalysis_o.html' target='_blank' rel='noopener noreferrer'>Bruce Schneier的加密部落格</a>等資源關注加密技術的進展。"
        },
        {
          "question": "我可以使用雜湊計算器驗證檔案完整性嗎？",
          "answer": "是的，我們的<strong>線上雜湊計算器</strong>非常適合檔案完整性驗證。下載軟體時，許多提供者會發佈其檔案的雜湊校驗和。要驗證完整性：1)在我們的工具中選擇已下載的檔案，2)選擇提供者使用的相同雜湊演算法(通常是SHA-256)，3)計算雜湊，4)與發佈的值進行比較。如果完全匹配，則您的檔案完好無損且未被修改。這個驗證過程既可防止下載過程中的意外損壞，也可防止潛在的惡意篡改。該工具在瀏覽器中本地處理檔案，即使對於大檔案也很方便，同時保持隱私和安全。您可以驗證來自<a href='https://ubuntu.com/download/desktop/thank-you' target='_blank' rel='noopener noreferrer'>Ubuntu</a>或<a href='https://www.python.org/downloads/' target='_blank' rel='noopener noreferrer'>Python</a>等提供安裝檔案雜湊值的來源的校驗和。"
        },
        {
          "question": "這個雜湊計算器適合密碼雜湊嗎？",
          "answer": "雖然我們的<strong>雜湊生成器</strong>可以演示密碼雜湊的工作原理，但對於實際的密碼儲存實現，應使用專用的密碼雜湊函數，如bcrypt、Argon2或PBKDF2，而不是原始雜湊函數。這些專用演算法包含重要的安全功能，如加鹽(在雜湊前為每個密碼添加隨機資料)和金鑰拉伸(故意減慢雜湊過程)，以防禦彩虹表攻擊和暴力嘗試。我們的工具非常適合教育目的或測試一般雜湊行為，但生產系統應實現專用的密碼雜湊函式庫，具有適當的加鹽、拉伸和安全最佳實踐。有關安全密碼儲存的更多資訊，請訪問<a href='https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html' target='_blank' rel='noopener noreferrer'>OWASP密碼儲存速查表</a>。"
        },
        {
          "question": "如何比較或驗證不同格式的雜湊？",
          "answer": "我們的<strong>雜湊驗證工具</strong>使比較雜湊變得簡單，無論格式差異如何。該工具以多種格式顯示結果，包括小寫十六進位(最常見的格式)、大寫十六進位和Base64編碼。要驗證雜湊：1)計算資料的雜湊，2)在驗證部分輸入要比較的雜湊，3)工具將自動比較它們，適當處理大小寫敏感性。即使您的參考雜湊與計算出的雜湊大小寫不同(大寫vs小寫)，此驗證也有效。對於跨演算法驗證，您需要使用與參考雜湊相同的演算法重新計算雜湊，因為不同演算法即使對相同的輸入資料也會產生根本不同的輸出。"
        },
        {
          "question": "我應該為特定需求使用哪種雜湊演算法？",
          "answer": "最佳演算法取決於您的具體要求：<br><strong>一般用途和高安全性</strong>：SHA-256提供了安全性和性能的良好平衡。<br><strong>區塊鏈應用</strong>：SHA-256(比特幣)或Keccak-256(以太坊)是行業標準。<br><strong>極其敏感的資料</strong>：SHA-512或SHA3-512提供最高安全性。<br><strong>性能關鍵應用</strong>：BLAKE2或BLAKE3提供安全性和卓越的速度。<br><strong>與遺留系統相容</strong>：可能需要SHA-1或MD5，但請了解其安全限制。<br><strong>檔案校驗和</strong>：CRC32快速但僅用於錯誤檢測，不提供安全性；推薦SHA-256用於安全校驗和。<br>如有疑問，SHA-256是大多數需要安全性的現代應用的可靠預設選擇。嘗試我們的<a href='https://www.ufreetools.com/tools/hash-calculator' target='_blank'>雜湊計算器</a>，實驗不同演算法並比較它們的輸出。"
        }
      ]
    },
    "guide": {
      "title": "使用雜湊計算器的分步指南",
      "intro": "按照以下簡單步驟為文字或檔案生成和驗證雜湊值：",
      "step1": "<strong>選擇輸入類型</strong>：根據要雜湊的內容，在\"文字\"或\"檔案\"輸入選項之間選擇。文字輸入適合字串、密碼或小塊資料，而檔案輸入允許處理任何類型的整個檔案。",
      "step2": "<strong>選擇雜湊演算法</strong>：從下拉菜單中選擇合適的<strong>雜湊演算法</strong>。對於一般用途和高安全性，推薦SHA-256。為了與特定系統相容，您可能需要選擇MD5、SHA-1或其他演算法。",
      "step3": "<strong>輸入您的資料</strong>：對於文字輸入，在輸入欄位中鍵入或貼上您的文字。對於檔案輸入，點擊上傳區域或拖放您的檔案。<strong>雜湊函數</strong>將處理這些輸入，生成唯一的摘要。",
      "step4": "<strong>設置編碼選項</strong>：如果使用文字輸入，選擇適當的字元編碼(UTF-8是最常見且推薦用於大多數文字的編碼)。這確保文字在雜湊前被正確解釋。",
      "step5": "<strong>生成雜湊</strong>：點擊\"計算雜湊\"按鈕處理您的輸入並生成<strong>雜湊摘要</strong>。工具將使用所選演算法計算雜湊值並顯示結果。",
      "step6": "<strong>查看和複製結果</strong>：計算的雜湊將以多種格式(十六進位和Base64)顯示。使用每種格式旁邊的複製按鈕將雜湊值複製到剪貼簿，以供在其他應用程式中使用。",
      "step7": "<strong>驗證雜湊(可選)</strong>：要與現有雜湊進行驗證，在結果下方的驗證部分輸入參考雜湊。系統將自動將其與您計算的雜湊進行比較，並指示它們是否匹配。",
      "additionalTips": "對於大檔案，處理可能需要一些時間，取決於您設備的性能。請記住，處理完全在您的瀏覽器中進行，因此您的資料永遠不會離開您的電腦。"
    },
    "relatedTools": {
      "title": "您可能會發現有用的相關工具",
      "tools": [
        {
          "name": "密碼生成器",
          "description": "為您的帳戶建立強大、安全的密碼",
          "url": "https://www.ufreetools.com/tools/password-generator"
        },
        {
          "name": "文字編碼器/解碼器",
          "description": "在Base64、URL和HTML等不同編碼之間轉換文字",
          "url": "https://www.ufreetools.com/tools/text-encoder-decoder"
        },
        {
          "name": "檔案轉換器",
          "description": "在不同格式之間轉換檔案",
          "url": "https://www.ufreetools.com/tools/file-converter"
        }
      ]
    },
    "conclusion": "雜湊計算器提供了一種強大且易於使用的方式，可以為各種應用利用加密雜湊函數，從基本的檔案完整性驗證到高級安全實現。通過提供多種行業標準演算法和用戶友好的界面，這個工具彌合了複雜的加密概念與實際日常應用之間的差距。無論您是實現安全功能的開發人員，驗證軟體完整性的IT專業人員，還是僅僅對雜湊函數如何工作感到好奇，這個計算器都可以讓您直接在瀏覽器中立即訪問強大的加密功能。在資料完整性和安全性成為個人和專業領域的重要關注點的數位世界中，理解和利用雜湊函數變得越來越重要。"
  },
  "listGroups": {
    "common": "常用演算法",
    "sha2": "SHA-2系列",
    "sha3": "SHA-3系列",
    "other": "其他演算法"
  },
  "metaTitle": "線上雜湊計算器 - 生成和驗證加密雜湊值",
  "metaDescription": "免費線上雜湊計算工具，可為文字或檔案生成和驗證加密雜湊值。支援多種演算法，包括{algorithms}。"
}