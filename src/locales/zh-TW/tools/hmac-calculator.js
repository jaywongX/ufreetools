export default {
  name: 'HMAC計算器',
  description: '計算數據的HMAC（基於哈希的消息認證碼）',
  title: 'HMAC 消息認證碼計算工具',
  intro: '使用密鑰生成消息認證碼，支持多種哈希算法和輸出格式',
  input: {
    title: '輸入',
    message: '消息',
    messagePlaceholder: '輸入要認證的消息',
    key: '密鑰',
    keyLabel: '密鑰 (Secret Key)',
    keyPlaceholder: '輸入HMAC密鑰',
    messageLabel: '消息 (Message)',
    messageLongPlaceholder: '輸入要計算HMAC的消息',
    file: '文件',
    text: '文本',
    fileSelect: '選擇文件',
    fileDrop: '或將文件拖放至此',
    fileSelected: '已選擇文件：{name}',
    clearFile: '清除文件',
    encoding: '輸入編碼',
    keyEncoding: '密鑰編碼',
    outputFormat: '輸出格式',
    inputType: '輸入類型',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    base64: 'Base64',
    hex: '十六進制',
    binary: '二進制',
    calculate: '計算HMAC',
    calculating: '計算中...',
    clear: '清除全部'
  },
  algorithms: {
    title: '算法',
    label: '哈希算法',
    hmacMd5: 'HMAC-MD5',
    hmacSha1: 'HMAC-SHA1',
    hmacSha224: 'HMAC-SHA224',
    hmacSha256: 'HMAC-SHA256',
    hmacSha384: 'HMAC-SHA384',
    hmacSha512: 'HMAC-SHA512',
    hmacRipemd160: 'HMAC-RIPEMD160',
    hmacSm3: 'HMAC-SM3'
  },
  result: {
    title: 'HMAC結果',
    digest: 'HMAC摘要',
    outputLabel: 'HMAC 結果',
    copy: '複製',
    copied: '已複製！',
    noResult: '輸入消息和密鑰以計算HMAC',
    calculating: '計算中...',
    placeholder: 'HMAC 結果將顯示在這裡',
    useExample: '使用實例',
    jsExample: 'JavaScript 示例：',
  },
  validation: {
    title: 'HMAC驗證',
    hmacToVerify: '要驗證的HMAC',
    verifyPlaceholder: '輸入要驗證的HMAC',
    verify: '驗證HMAC',
    valid: 'HMAC有效',
    invalid: 'HMAC無效',
    verifying: '驗證中...'
  },
  options: {
    title: '選項',
    uppercase: '大寫輸出',
    showDetails: '顯示技術細節',
    autoUpdate: '自動更新',
    truncate: '截斷輸出',
    truncateLength: '截斷長度'
  },
  details: {
    title: '技術細節',
    algorithm: '算法',
    keyLength: '密鑰長度',
    blockSize: '塊大小',
    outputLength: '輸出長度',
    execution: '執行時間',
    ms: '毫秒'
  },
  messages: {
    noMessage: '請輸入消息',
    noKey: '請輸入密鑰',
    invalidEncoding: '無效的編碼格式',
    processingError: '處理錯誤：{error}',
    success: 'HMAC計算成功',
    invalidKey: '所選編碼的密鑰格式無效',
    fileTooBig: '文件太大。最大大小為5MB',
    copied: '已複製到剪貼板',
    copyFailed: '複製失敗，請手動複製',
    invalidHex: '密鑰不是有效的十六進制格式',
    invalidBase64: '密鑰不是有效的Base64格式',
  },
  security: {
    title: '安全說明',
    keyStorage: '切勿共享您的密鑰',
    keyStrength: '為每個應用程序使用強大且唯一的密鑰',
    recommendation: '對於安全關鍵型應用，請至少使用HMAC-SHA256',
    warning: 'HMAC-MD5和HMAC-SHA1可能不適合高安全性應用'
  },
  article: {
    title: "HMAC計算器：基於哈希的消息認證碼生成工具",
    features: {
      title: "了解HMAC及其重要性",
      description: "<strong>HMAC計算器</strong>是一種專門的<strong>密碼學工具</strong>，設計用於生成基於哈希的消息認證碼（HMACs），提供一種驗證消息完整性和真實性的方法。與簡單的哈希函數不同，HMAC將<strong>密鑰</strong>融入哈希過程，創建一個<strong>帶密鑰的哈希值</strong>，只有擁有相同密鑰的人才能重現。<br><br>這個<strong>HMAC生成器</strong>支持多種行業標準算法，包括SHA-256、SHA-512、MD5和SM3，允許用戶根據特定需求選擇適當的安全級別。該工具處理各種輸入格式（明文、十六進制或Base64）並以您首選的編碼格式生成輸出。我們的<strong>消息認證碼計算器</strong>為實施這一基本安全機制提供了簡單直觀的界面，無論您是測試API認證的開發人員還是驗證消息完整性的安全專業人員。",
      useCases: {
        title: "HMAC的實際應用",
        items: [
          "<strong>API認證</strong>：通過實施基於HMAC的認證來保護您的API端點。<strong>HMAC簽名過程</strong>允許服務器驗證傳入請求是合法的，且在傳輸過程中未被篡改。",
          "<strong>數據完整性驗證</strong>：通過計算<strong>HMAC校驗和</strong>確保存儲數據或傳輸文件的完整性。這允許您檢測數據的任何未授權修改，提供超越簡單哈希驗證的額外安全層。",
          "<strong>安全Cookie驗證</strong>：通過合併<strong>HMAC簽名</strong>保護Web應用程序Cookie不被篡改。這防止用戶修改Cookie值並可能獲得未授權的訪問或權限。",
          "<strong>密碼存儲</strong>：通過為每個用戶使用帶有唯一密鑰的HMAC創建更安全的密碼驗證系統，創建比標準哈希函數提供更好保護的<strong>帶密鑰的密碼摘要</strong>。",
          "<strong>數字簽名驗證</strong>：實現簡化的數字簽名方案用於認證和不可否認性。<strong>HMAC認證</strong>過程提供了密碼學證明，證明消息是由有權訪問共享密鑰的人創建的。",
          "<strong>區塊鏈交易驗證</strong>：使用<strong>HMAC密碼驗證</strong>驗證區塊鏈交易和消息的真實性，確保只有授權方才能創建有效的交易簽名。"
        ]
      }
    },
    faq: {
      title: "關於HMAC的常見問題",
      items: [
        {
          question: "HMAC與常規哈希函數有什麼區別？",
          answer: "常規哈希函數（如SHA-256或MD5）只提供數據完整性驗證 - 確認數據沒有改變。然而，HMAC（基於哈希的消息認證碼）將密碼哈希函數與密鑰結合，提供數據完整性和身份驗證。這意味著HMAC不僅驗證消息沒有被更改，還驗證它是由擁有正確密鑰的人創建的。這一額外的安全層使HMAC對各種密碼攻擊顯著更具抵抗力，包括可能破壞常規哈希函數的碰撞和長度擴展攻擊。我們的HMAC生成器工具實現了這種增強的安全方法，使其適用於需要驗證消息真實性的應用。"
        },
        {
          question: "我應該為我的應用選擇哪種HMAC算法？",
          answer: "對於大多數現代安全應用，HMAC-SHA256是推薦的標準選擇，因為它提供了安全性和性能的良好平衡。對於具有更嚴格安全要求或長期安全需求的應用，考慮HMAC-SHA384或HMAC-SHA512，這些算法以略微降低性能為代價提供對未來攻擊的增強抵抗力。避免在新應用中使用HMAC-MD5和HMAC-SHA1，因為這些底層哈希算法有已知漏洞。對於需要符合當地標準的中國市場應用，可以使用HMAC-SM3。最重要的因素是選擇滿足您特定安全要求的算法，同時考慮與其他系統的兼容性和性能約束。"
        },
        {
          question: "使用這個在線HMAC計算器處理敏感數據安全嗎？",
          answer: "我們的HMAC計算器使用JavaScript直接在您的瀏覽器中執行所有密碼操作，這意味著您的敏感數據和密鑰永遠不會離開您的設備或傳輸到我們的服務器。雖然這提供了基本的安全級別，但我們仍然建議主要將這個在線HMAC生成器用於測試、學習和非關鍵應用。對於生產環境或高度敏感的數據，我們建議使用已建立的密碼庫直接在應用程序代碼中實現HMAC功能，在那裡您可以完全控制密鑰管理和數據處理。如果您必須使用此計算器處理敏感信息，請考慮在使用工具時斷開互聯網連接，並在之後清除瀏覽器歷史記錄。"
        },
        {
          question: "如何管理用於HMAC的密鑰？",
          answer: "正確的密鑰管理對HMAC安全至關重要。首先，生成具有足夠長度的密碼學強隨機密鑰（HMAC-SHA256至少32字節/256位）。安全存儲這些密鑰，在生產環境中使用專用密鑰管理系統或安全密鑰庫。切勿在源代碼或配置文件中硬編碼密鑰。實施密鑰輪換策略定期更換密鑰，並為不同的應用或環境建立單獨的密鑰。傳輸密鑰時，始終使用具有適當加密的安全通道。記住，HMAC實施的安全性與您的密鑰管理實踐一樣強大 - 即使是最安全的算法，如果密鑰處理不當，也可能被破壞。"
        },
        {
          question: "如何在我的編程項目中使用HMAC結果？",
          answer: "大多數編程語言和框架都提供對HMAC計算的內置支持。使用我們的HMAC計算器驗證預期結果後，您可以在代碼中實現相同的功能。對於JavaScript/Node.js，使用crypto模塊的createHmac函數。在Python中，利用hmac模塊。Java開發人員可以使用javax.crypto中的Mac類。PHP提供hash_hmac函數。我們的工具提供代碼示例，顯示如何在JavaScript中重現相同的HMAC結果。實現HMAC認證時，通常您會在發送方和接收方使用共享密鑰計算消息的HMAC，然後比較結果以驗證真實性。具體實現細節將取決於您的特定應用需求和使用的編程語言。"
        }
      ]
    },
    guide: {
      title: "使用HMAC計算器的分步指南",
      steps: [
        "<strong>選擇哈希算法</strong>：為您的安全需求選擇適當的<strong>HMAC算法</strong>。點擊可用選項之一（SHA-256、SHA-1、SHA-384、SHA-512、MD5或SM3），對於大多數應用推薦使用SHA-256，因為它提供了安全性和性能的良好平衡。",
        "<strong>輸入您的密鑰</strong>：在指定字段中輸入<strong>密鑰</strong>。根據密鑰的格式，從下拉菜單中選擇適當的輸入編碼格式（文本、十六進制或Base64）。對於安全應用，使用具有足夠長度的強隨機密鑰。",
        "<strong>提供消息</strong>：在消息輸入區域輸入您想要認證的消息。與密鑰一樣，選擇與您的消息格式匹配的適當輸入編碼格式（文本、十六進制或Base64）。消息可以是您稍後想要驗證的任何數據。",
        "<strong>選擇輸出格式</strong>：為<strong>HMAC摘要</strong>選擇您首選的輸出格式。選項包括十六進制（最常見）、Base64（更緊湊）、Base64URL（網絡安全）或二進制。這決定了最終哈希值的表示方式。",
        "<strong>生成HMAC</strong>：點擊'計算HMAC'按鈕處理您的輸入並生成<strong>消息認證碼</strong>。系統將使用所選算法結合您的密鑰和消息創建唯一的哈希值。",
        "<strong>複製您的結果</strong>：計算完成後，結果區域將顯示<strong>HMAC摘要</strong>。使用複製按鈕將此值複製到剪貼板，以便在您的應用中使用。",
        "<strong>在代碼中實現</strong>：參考結果下方提供的JavaScript示例，了解如何在您自己的代碼中實現相同的<strong>HMAC計算</strong>。此示例顯示了以編程方式重現相同結果所需的确切代碼。"
      ]
    },
    conclusion: "HMAC計算器是尋求在系統中實施強大認證和數據完整性驗證的開發人員和安全專業人員的重要工具。通過提供生成這些密碼學代碼的直觀界面，它簡化了測試和實施基於HMAC的安全措施的過程。無論您是保護API通信、驗證數據完整性還是實施認證系統，理解和正確應用HMAC對於維護強大的安全實踐至關重要。隨著數字威脅的不斷演變，使用如HMAC等適當的消息認證技術仍是現代安全架構的基本組成部分，有助於確保通信既私密又可驗證真實。"
  }
}