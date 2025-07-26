export default {
  name: "線上雜湊計算器 | 支援 SHA-256、MD5、SHA-3、BLAKE3、SM3 等多種演算法",
  description: "免費線上雜湊計算器，支援 SHA-256、MD5、SHA-3、BLAKE3、SM3 等多種加密與校驗演算法，適用於檔案完整性驗證、資料安全處理等場景。",

  input: {
    title: "輸入",
    text: "文字輸入",
    file: "檔案輸入",
    textPlaceholder: "在此輸入要計算雜湊的文字...",
    fileSelect: "選擇檔案",
    fileDrop: "拖放檔案到此處或點擊上傳",
    fileSelected: "已選擇檔案: {name}",
    fileSize: "{size}",
    removeFile: "移除檔案",
    localProcessing: "檔案將在本地處理，不會上傳到伺服器",
    encoding: "編碼",
    selectAlgorithm: "選擇雜湊演算法",
    utf8: "UTF-8",
    ascii: "ASCII",
    latin1: "Latin1",
    calculate: "計算雜湊",
    calculating: "計算中...",
    clear: "清除輸入",
    hashValue: "雜湊值"
  },

  algorithms: {
    title: "演算法",
    selectAll: "全選",
    deselectAll: "取消全選",
    md5: "MD5",
    sha1: "SHA-1",
    sha224: "SHA-224",
    sha256: "SHA-256",
    sha384: "SHA-384",
    sha512: "SHA-512",
    sha3_224: "SHA3-224",
    sha3_256: "SHA3-256",
    sha3_384: "SHA3-384",
    sha3_512: "SHA3-512",
    ripemd160: "RIPEMD-160",
    blake2b: "BLAKE2b",
    blake2s: "BLAKE2s",
    blake3: "BLAKE3",
    keccak224: "Keccak-224",
    keccak256: "Keccak-256",
    keccak384: "Keccak-384",
    keccak512: "Keccak-512",
    whirlpool: "Whirlpool",
    crc32: "CRC32",
    hmac: "HMAC選項",
    key: "HMAC密鑰",
    keyPlaceholder: "輸入HMAC密鑰"
  },

  results: {
    title: "雜湊結果",
    algorithm: "演算法",
    digest: "摘要",
    noInput: "輸入文字或選擇檔案以計算雜湊",
    calculating: "計算中...",
    copy: "複製",
    copied: "已複製到剪貼簿",
    copyFailed: "複製失敗，請手動複製",
    copyAll: "複製全部",
    download: "下載結果",
    fileInfo: "檔案資訊",
    fileName: "名稱",
    fileSize: "大小",
    fileType: "類型",
    lastModified: "最後修改時間",
    hexFormat: "十六進位格式",
    base64Format: "Base64格式",
    upperHexFormat: "大寫十六進位格式",
    hashValue: "雜湊值",
    allHashesTitle: "所有雜湊演算法結果",
    export: "匯出CSV",
    copyToClipboard: "複製到剪貼簿",
    allHashesTitle: "所有演算法的雜湊值"
  },

  verification: {
    title: "雜湊驗證",
    inputVerifyHash: "輸入要驗證的雜湊值",
    placeholder: "輸入用於比較的雜湊值...",
    paste: "貼上雜湊進行驗證",
    matches: "雜湊匹配！",
    doesNotMatch: "雜湊不匹配",
    notFound: "未找到演算法",
    verify: "驗證",
    autoDetect: "自動檢測演算法",
    result: "驗證結果"
  },

  options: {
    title: "選項",
    uppercase: "大寫輸出",
    showTiming: "顯示計算時間",
    autoCalculate: "自動計算",
    formatOutput: "格式化長輸出",
    binaryOutput: "二進位檢視（用於非文字檔案）",
    compareHashes: "比較雜湊值",
    hmacMode: "啟用HMAC模式",
    showAllHashes: "顯示所有演算法的雜湊值"
  },

  tools: {
    title: "工具",
    batchProcessing: "批次處理",
    fileHashTool: "檔案雜湊目錄",
    hashIdentifier: "雜湊類型識別器",
    hmacGenerator: "HMAC生成器",
    checksumVerifier: "校驗和驗證器",
    passwordHasher: "密碼雜湊器"
  },

  batchTool: {
    title: "批次處理",
    addFiles: "新增檔案",
    processFiles: "處理檔案",
    clearAll: "清除全部",
    fileName: "檔案名稱",
    algorithm: "演算法",
    status: "狀態",
    actions: "操作",
    waiting: "等待中",
    processing: "處理中",
    complete: "完成",
    failed: "失敗",
    remove: "移除",
    filesSelected: "已選擇{count}個檔案",
    exportResults: "匯出結果",
    selectAlgorithm: "為所有檔案選擇演算法"
  },

  messages: {
    fileTooBig: "檔案太大。最大允許大小為100MB。",
    hashCalculated: "雜湊計算成功",
    invalidInput: "無效輸入",
    readError: "無法讀取檔案",
    processingError: "處理檔案時出錯: {error}",
    algorithmNotAvailable: "演算法不可用。請安裝所需函式庫。",
    algorithmFallback: "{algorithm} 不可用，使用 {fallback} 作為備選",
    moduleNotReady: "{name} 模組尚未準備好",
    algorithmError: "{algorithm} 錯誤: {error}"
  },

  security: {
    warning: "在不安全的HTTP連線上使用雜湊工具存在安全風險"
  },

  algorithmDetails: {
    title: "關於雜湊演算法",
    usage: "常見用途",
    safe: "安全性",
    md2: {
      name: "MD2 (128位元)",
      description: "MD2是一種廣泛使用的雜湊函數，產生128位元（16位元組）雜湊值，通常表示為32個十六進位字元。",
      usage: "檔案完整性檢查、儲存密碼（不安全）",
      security: "已被證明缺乏碰撞抵抗性；不應在安全敏感場合使用。"
    },
    md4: {
      name: "MD4 (128位元)",
      description: "MD4是一種廣泛使用的雜湊函數，產生128位元（16位元組）雜湊值，通常表示為32個十六進位字元。",
      usage: "檔案完整性檢查、儲存密碼（不安全）",
      security: "已被證明缺乏碰撞抵抗性；不應在安全敏感場合使用。"
    },
    md5: {
      name: "MD5 (128位元)",
      description: "MD5是一種廣泛使用的雜湊函數，產生128位元（16位元組）雜湊值，通常表示為32個十六進位字元。",
      usage: "檔案完整性檢查、儲存密碼（不安全）",
      security: "已被證明缺乏碰撞抵抗性；不應在安全敏感場合使用。"
    },
    sha1: {
      name: "SHA-1 (160位元)",
      description: "SHA-1是一種加密雜湊函數，產生160位元（20位元組）雜湊值，通常表示為40個十六進位字元。",
      usage: "版本控制系統（如Git）、檔案完整性驗證",
      security: "已被證明存在碰撞攻擊漏洞；不推薦用於安全關鍵應用。"
    },
    sha224: {
      name: "SHA-224 (224位元)",
      description: "SHA-224是SHA-2家族中的一員，生成224位元(28位元組)雜湊值。",
      usage: "適用於空間受限但仍需較強安全性的場景",
      security: "提供良好的安全性，是SHA-256的截斷版本"
    },
    sha256: {
      name: "SHA-256 (256位元)",
      description: "SHA-256屬於SHA-2系列，產生256位元（32位元組）雜湊值，通常表示為64個十六進位字元。",
      usage: "數位簽章、數位憑證、密碼儲存、區塊鏈",
      security: "目前被認為是安全的，廣泛用於高安全性場景。"
    },
    dsha256: {
      name: "Double SHA-256",
      description: "Double SHA-256是連續兩次執行SHA-256的加密雜湊函數，即SHA-256(SHA-256(x))。",
      usage: "比特幣和許多其他加密貨幣中用於區塊雜湊、交易ID和地址生成",
      security: "提供與標準SHA-256相同的安全保證，但增加了額外的安全層，使其更難通過碰撞反向計算原始輸入。"
    },
    sha384: {
      name: "SHA-384 (384位元)",
      description: "SHA-384是SHA-512的截斷版本，產生384位元（48位元組）雜湊值。",
      usage: "需要比SHA-256更高安全性的場景",
      security: "提供比SHA-256更強的安全性，無已知攻擊方法。"
    },
    sha512: {
      name: "SHA-512 (512位元)",
      description: "SHA-512是SHA-2系列中最長的標準演算法，產生512位元（64位元組）雜湊值。",
      usage: "需要最高級別安全性的應用",
      security: "提供最高級別的安全性，無已知有效攻擊。"
    },
    sha512_224: {
      name: "SHA-512/224 (224位元)",
      description: "SHA-512/224是SHA-512的變種，輸出被截斷為224位元。",
      usage: "提供與SHA-224相同長度但基於SHA-512內部結構的雜湊",
      security: "對較長資料有更好的性能，同時保持強安全性"
    },
    sha512_256: {
      name: "SHA-512/256 (256位元)",
      description: "SHA-512/256是SHA-512的變種，輸出被截斷為256位元。",
      usage: "在64位元系統上提供比SHA-256更好的性能",
      security: "與SHA-256安全性相當，但在某些硬體上更高效"
    },
    sha3_224: {
      name: "SHA3-224 (224位元)",
      description: "SHA3-224是SHA-3標準的一部分，提供224位元輸出。",
      usage: "適用於需要抵抗量子計算的中等安全性場景",
      security: "是NIST認證的安全雜湊演算法，提供良好的安全保障"
    },
    sha3_256: {
      name: "SHA3-256 (256位元)",
      description: "SHA3-256是SHA-3標準的一部分，具有與SHA-2系列完全不同的內部結構。",
      usage: "抵抗量子計算威脅的長期安全應用",
      security: "設計用於抵抗未來潛在攻擊，包括量子計算攻擊。"
    },
    sha3_384: {
      name: "SHA3-384 (384位元)",
      description: "SHA3-384是SHA-3標準的一部分，提供384位元輸出。",
      usage: "適用於需要高安全性且抵抗量子計算的場景",
      security: "提供比SHA3-256更強的安全性，適合敏感資料應用"
    },
    sha3_512: {
      name: "SHA3-512 (512位元)",
      description: "SHA3-512是SHA-3標準中提供最高級別安全性的演算法。",
      usage: "需要極高安全性和抵抗量子計算的場景",
      security: "提供最高級別的安全保證，是SHA-3系列中最安全的演算法。"
    },
    sm3: {
      name: "SM3 (256位元)",
      description: "SM3是中國國家密碼管理局發佈的密碼雜湊演算法標準，產生256位元輸出。",
      usage: "中國商用密碼應用、數位憑證和電子政務系統",
      security: "設計類似SHA-2但優化了抗攻擊性能，在中國廣泛應用"
    },
    ripemd160: {
      name: "RIPEMD-160 (160位元)",
      description: "RIPEMD-160是由歐洲RIPE項目開發的雜湊函數，產生160位元雜湊值。",
      usage: "比特幣地址生成、區塊鏈應用",
      security: "比同長度的SHA-1更安全，但使用較少。"
    },
    crc32: {
      name: "CRC32 (32位元)",
      description: "CRC32是一種循環冗餘校驗函數，常用於錯誤檢測。",
      usage: "資料完整性校驗、網路通訊、資料傳輸驗證",
      security: "不適用於密碼學安全場景，主要用於錯誤檢測而非安全防護"
    },
    murmur3_x86_32: {
      name: "MurmurHash3 x86 (32位元)",
      description: "MurmurHash3是一種非加密雜湊函數，以高性能和低碰撞率著稱，32位元版本適用於需要速度和空間效率的應用。",
      usage: "雜湊表、布隆過濾器、快取系統、資料分片",
      security: "非加密演算法，不適合安全應用，但在性能關鍵場景表現優異"
    },
    murmur3_x86_128: {
      name: "MurmurHash3 x86 (128位元)",
      description: "MurmurHash3的128位元變體，提供更大的雜湊空間和更低的碰撞概率，適用於大規模資料集。",
      usage: "大型雜湊表、資料去重、分散式系統中的一致性雜湊、內容尋址儲存",
      security: "與32位元版本一樣是非加密演算法，但碰撞概率更低，適合需要高唯一性的應用場景"
    },
    murmur3_x64_128: {
      name: "MurmurHash3 x64 (128位元)",
      description: "MurmurHash3的128位元變體，提供更大的雜湊空間和更低的碰撞概率，適用於大規模資料集。",
      usage: "大型雜湊表、資料去重、分散式系統中的一致性雜湊、內容尋址儲存",
      security: "與32位元版本一樣是非加密演算法，但碰撞概率更低，適合需要高唯一性的應用場景"
    },
    blake2b: {
      name: "BLAKE2b (512位元)",
      description: "BLAKE2b是一種快速且安全的雜湊函數，針對現代CPU架構優化。",
      usage: "大規模資料處理、雜湊表、字串比較",
      security: "設計目標是速度和良好的雜湊分佈，但不保證加密安全性"
    },
    blake2s: {
      name: "BLAKE2s (256位元)",
      description: "BLAKE2s是一種快速且安全的雜湊函數，針對現代CPU架構優化。",
      usage: "大規模資料處理、雜湊表、字串比較",
      security: "設計目標是速度和良好的雜湊分佈，但不保證加密安全性"
    },
    blake3: {
      name: "BLAKE3 (256位元)",
      description: "BLAKE3是一種快速且安全的雜湊函數，針對現代CPU架構優化。",
      usage: "大規模資料處理、雜湊表、字串比較",
      security: "設計目標是速度和良好的雜湊分佈，但不保證加密安全性"
    },
    keccak224: {
      name: "Keccak-224 (224位元)",
      description: "Keccak-224是SHA-3原始演算法，產生224位元雜湊值。",
      usage: "以太坊和其他區塊鏈應用、密碼系統",
      security: "提供強大的安全性，在區塊鏈技術中比標準化的SHA-3變體更常用"
    },
    keccak256: {
      name: "Keccak-256 (256位元)",
      description: "Keccak-256是Keccak系列中使用最廣泛的變體，產生256位元雜湊值。",
      usage: "以太坊智能合約、區塊鏈交易、數位簽章",
      security: "在區塊鏈應用中廣受信任，與標準化的SHA3-256略有不同"
    },
    keccak384: {
      name: "Keccak-384 (384位元)",
      description: "Keccak-384是Keccak系列的一個變體，產生384位元雜湊值。",
      usage: "需要比Keccak-256更高安全性的應用",
      security: "提供非常強的安全保證，但使用頻率低於Keccak-256"
    },
    keccak512: {
      name: "Keccak-512 (512位元)",
      description: "Keccak-512是Keccak系列中最長的標準演算法，產生512位元雜湊值。",
      usage: "需要最大碰撞抵抗力的高安全性應用",
      security: "在Keccak系列中提供最高安全級別，適用於最敏感的資料"
    },
    shake128: {
      name: "SHAKE128 (128位元)",
      description: "SHAKE128是SHA-3家族的一部分，能夠產生可變長度的輸出，預設生成256位元雜湊值。",
      usage: "需要可變長度輸出的加密應用，金鑰派生函數",
      security: "提供良好的安全性，是NIST認可的安全雜湊演算法"
    },
    shake256: {
      name: "SHAKE256 (256位元)",
      description: "SHAKE256是SHA-3家族的一部分，能夠產生可變長度的輸出，預設生成512位元雜湊值。",
      usage: "需要較長雜湊輸出的高安全性應用",
      security: "提供比SHAKE128更強的安全保證，適合敏感資料應用"
    },
    cshake128: {
      name: "cSHAKE128 (可定制變長輸出)",
      description: "cSHAKE128 是 SHAKE128 的可定制版本，支援自定義字串和函數名稱，能夠產生可變長度的輸出。",
      usage: "需要定制參數的雜湊演算法場景，NIST標準的金鑰衍生函數，加密協議",
      security: "提供與 SHAKE128 相當的安全性，同時支援應用程式級別的定制"
    },
    cshake256: {
      name: "cSHAKE256 (可定制變長輸出)",
      description: "cSHAKE256 是 SHAKE256 的可定制版本，支援自定義字串和函數名稱，能夠產生可變長度的輸出。",
      usage: "高安全性要求的定制雜湊場景，NIST認證的衍生函數，密碼學協議",
      security: "提供與 SHAKE256 相當的強安全保證，同時允許應用程式級別的參數化定制"
    }
  },

  listGroups: {
    common: "常用演算法",
    sha2: "SHA-2系列",
    sha3: "SHA-3系列",
    other: "其他演算法"
  },

  metaTitle: "線上雜湊計算器 - 生成和驗證加密雜湊值",
  metaDescription: "免費線上雜湊計算工具，可為文字或檔案生成和驗證加密雜湊值。支援多種演算法，包括{algorithms}。"
};