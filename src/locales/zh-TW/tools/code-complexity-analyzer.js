export default {
  name: '代碼複雜度分析器',
  description: '分析代碼複雜度指標，如圈複雜度和可維護性',
  title: '代碼複雜度分析',
  subtitle: '分析JavaScript代碼的各項複雜度指標，包括圈複雜度、Halstead度量和維護指數',
  input: {
    title: '輸入JavaScript代碼',
    placeholder: '在此粘貼JavaScript代碼...',
    loadExample: '加載示例',
    clear: '清空'
  },
  options: {
    title: '分析選項',
    cyclomaticComplexity: '計算圈複雜度（McCabe複雜度）',
    halsteadMetrics: '計算Halstead度量（程序長度、詞彙量、體積等）',
    maintainabilityIndex: '計算維護指數（代碼可維護性指標）',
    functionDetails: '顯示函數級別的分析結果'
  },
  languages: {
    title: '語言',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    python: 'Python',
    java: 'Java',
    csharp: 'C#',
    php: 'PHP',
    go: 'Go',
    ruby: 'Ruby'
  },
  metrics: {
    title: '指標',
    cyclomaticComplexity: '圈複雜度',
    maintainabilityIndex: '可維護性指數',
    halsteadVolume: 'Halstead 體積',
    halsteadDifficulty: 'Halstead 難度',
    halsteadEffort: 'Halstead 工作量',
    halsteadTime: 'Halstead 時間',
    halsteadBugs: 'Halstead 缺陷',
    linesOfCode: '代碼行數',
    logicalLoc: '邏輯代碼行',
    commentLines: '註釋行數',
    commentRatio: '註釋比例',
    operatorCount: '運算符數量',
    operandCount: '操作數數量',
    functionCount: '函數數量',
    maxNestingDepth: '最大嵌套深度',
    averageDepth: '平均深度',
    halstead: {
      title: 'Halstead度量',
      length: '程序長度',
      vocabulary: '詞彙量',
      volume: '程序體積',
      difficulty: '難度'
    }
  },
  results: {
    title: '分析結果',
    file: '文件',
    method: '方法',
    score: '得分',
    complexity: '複雜度',
    rating: '評級',
    loc: '行數',
    issues: '問題',
    summary: '整體代碼摘要',
    details: '詳情',
    noResults: '暫無分析結果。輸入代碼並點擊"分析代碼"查看指標。',
    avgCyclomaticComplexity: '平均圈複雜度',
    maintainabilityIndex: '維護指數',
    linesOfCode: '代碼行數',
    functionDetails: '函數級別分析',
    functionName: '函數名稱',
    parameters: '參數個數',
    anonymousFunction: '(匿名函數)'
  },
  ratings: {
    excellent: '優秀',
    good: '良好',
    moderate: '中等',
    poor: '較差',
    veryPoor: '很差'
  },
  complexity: {
    title: '複雜度指標解釋：',
    low: '低複雜度 - 代碼簡單清晰，易於理解和維護',
    medium: '中等複雜度 - 代碼稍有複雜，但仍然可接受',
    high: '高複雜度 - 代碼過於複雜，應考慮重構'
  },
  actions: {
    analyze: '分析代碼',
    analyzing: '分析中...',
    clearCode: '清除代碼',
    uploadFile: '上傳文件',
    copy: '複製結果',
    download: '下載報告',
    export: '導出報告 (JSON)'
  },
  messages: {
    analyzing: '正在分析代碼...',
    analysisComplete: '分析完成',
    analysisError: '分析代碼出錯',
    analysisFailure: '無法分析代碼: {error}',
    copied: '已複製到剪貼板！',
    emptyCode: '請輸入要分析的代碼',
    fileTooBig: '文件過大（最大1MB）',
    invalidFile: '無效或不支持的文件類型',
    errorTitle: '分析錯誤'
  },
  tips: {
    title: '使用提示',
    cyclomaticComplexity: '圈複雜度是衡量源代碼中獨立路徑數量的指標。',
    maintainability: '可維護性指數表示代碼的可維護性，值越高越好。',
    recommendations: '為了更好的代碼質量，請盡量保持低複雜度和高可維護性得分。',
    refactoring: '考慮重構複雜度得分高於10的函數。'
  },
  article: {
    title: "深入理解代碼複雜度分析，提升軟件開發質量",
    overview: {
      title: "什麼是代碼複雜度分析？",
      content: "<strong>代碼複雜度分析</strong>是一種專業工具，用於檢查源代碼並度量其結構複雜性、可維護性和潛在風險因素。這個強大的開發工具幫助開發者識別過於複雜的代碼段，這些代碼可能容易產生bug、難以維護或難以擴展。<br><br>通過使用圈複雜度、Halstead度量和可維護性指數等成熟的軟件度量標準來量化複雜度，該工具提供關於代碼質量的客觀數據，使開發團隊能夠明智地決定重構工作應當集中在哪些地方。代碼複雜度分析是現代軟件開發中的基礎實踐，支持技術債務管理和代碼質量改進計劃。"
    },
    useCases: {
      title: "代碼複雜度分析的常見應用場景",
      items: [
        {
          title: "技術債務管理",
          description: "識別導致技術債務的複雜代碼區域，允許團隊通過專注於高風險、高複雜度的代碼部分來優先考慮債務減少工作。"
        },
        {
          title: "代碼審查增強",
          description: "用客觀的複雜度指標增強人工代碼審查，幫助審查者在審查過程中發現可能存在問題的區域，這些區域需要額外的檢查。"
        },
        {
          title: "重構優先級確定",
          description: "使用複雜度指標客觀地決定應該首先重構哪些代碼段，確保維護工作針對最有問題的區域。"
        },
        {
          title: "質量門控執行",
          description: "在持續集成管道中建立複雜度閾值，防止過於複雜的代碼合併到主代碼庫中，並保持高質量標準。"
        },
        {
          title: "測試資源分配",
          description: "為統計上更可能包含缺陷的高複雜度代碼段分配更多的測試資源，優化質量保證工作。"
        },
        {
          title: "新開發人員入職",
          description: "幫助新團隊成員識別代碼庫中簡單的部分以開始工作，隨著他們熟悉度的提高逐漸進入更複雜的部分。"
        },
        {
          title: "遺留代碼評估",
          description: "評估遺留系統的複雜度，以估計維護成本、重構工作量或更改舊代碼所涉及的風險。"
        }
      ]
    },
    guide: {
      title: "如何使用代碼複雜度分析器",
      intro: "按照以下步驟有效分析代碼複雜度並解釋結果：",
      steps: [
        {
          title: "準備代碼樣本",
          description: "首先確定您想要分析的JavaScript代碼。您可以使用完整的文件，或者專注於特定的感興趣的函數或模塊。乾淨、格式良好的代碼提供最準確的分析結果。"
        },
        {
          title: "輸入您的代碼",
          description: "將您的JavaScript代碼粘貼到輸入文本區域中。為方便起見，如果您是複雜度分析的新手，可以使用\"加載示例\"按鈕來查看分析器如何處理示例代碼。"
        },
        {
          title: "選擇分析選項",
          description: "通過選中相應的選項來選擇要計算的複雜度指標：圈複雜度測量代碼路徑複雜性，Halstead度量評估代碼量和難度，維護指數提供整體可維護性得分，函數詳情顯示單個函數的指標。"
        },
        {
          title: "分析您的代碼",
          description: "點擊\"分析代碼\"按鈕處理您的輸入。該工具將解析JavaScript代碼，計算所選的複雜度指標，並生成全面的報告。"
        },
        {
          title: "查看整體摘要",
          description: "檢查摘要部分，它提供了代碼複雜度的高級概述。關注平均圈複雜度、維護指數和代碼行指標，以了解代碼的總體健康狀況。"
        },
        {
          title: "檢查函數級詳情",
          description: "如果您選擇了\"顯示函數級別分析\"，請查看顯示每個函數指標的表格。尋找複雜度得分高的函數（用黃色或紅色突出顯示），這些是重構的主要候選者。"
        },
        {
          title: "需要時導出結果",
          description: "使用\"導出報告\"按鈕以JSON格式下載分析結果，以便進一步處理、記錄或與團隊共享。這對於隨時間跟踪複雜度指標特別有用。"
        }
      ]
    },
    metrics: {
      title: "理解代碼複雜度指標",
      intro: "代碼複雜度分析使用幾種成熟的指標來評估代碼質量和可維護性的不同方面：",
      items: [
        {
          name: "圈複雜度",
          description: "測量源代碼中獨立路徑的數量，本質上量化了代碼的決策複雜性。較高的值表示代碼具有更多的分支、條件和潛在執行路徑。圈複雜度高的代碼通常更難理解、測試和维护。大多數函數的目標值應低於10。"
        },
        {
          name: "Halstead度量",
          description: "基於代碼中運算符和操作數數量測量程序大小和工作量的一系列指標。這包括程序長度、詞彙量、體積、難度、工作量和估計錯誤。Halstead度量提供了理解代碼所需的認知負荷的見解。難度和體積的較低值通常表示更可維護的代碼。"
        },
        {
          name: "維護指數",
          description: "一種組合了圈複雜度、Halstead體積和代碼行的複合指標，給出代碼可維護性的整體指示。分數從0到100，較高的值表示更可維護的代碼。70以上的分數被認為是好的，而20以下的分數表示代碼可能極難維護。"
        },
        {
          name: "代碼行數（LOC）",
          description: "一種簡單但有效的代碼大小度量。雖然不直接是複雜度指標，但LOC通常與複雜性和維護工作量相關。行數過多的函數（通常超過100行）可能會受益於分解成更小、更專注的函數。"
        },
        {
          name: "參數計數",
          description: "函數接受的參數數量。參數眾多的函數（通常超過4個）可能難以理解和正確使用，這通常表明設計可以通過重構或使用參數對象來改進。"
        }
      ]
    },
    faq: {
      title: "關於代碼複雜度分析的常見問題",
      items: [
        {
          question: "為什麼代碼複雜度分析很重要？",
          answer: "代碼複雜度分析有助於在問題代碼導致bug、維護問題或開發瓶頸之前識別它們。研究表明，複雜代碼顯著更容易出錯且維護成本更高。通過識別和減少複雜性，團隊可以提高軟件質量，降低維護成本，加速開發，並提高開發人員的生產力和滿意度。"
        },
        {
          question: "什麼是好的圈複雜度分數？",
          answer: "通常，圈複雜度低於5的函數被認為是簡單且易於維護的。6-10之間的分數是中等複雜但仍然可接受的。超過10的任何分數都被認為是複雜的，可能需要重構，而超過15的分數表示高度複雜的代碼，應優先考慮簡化。不同的組織可能根據其質量標準設定自己的閾值。"
        },
        {
          question: "這個工具適用於JavaScript以外的語言嗎？",
          answer: "當前實現專門分析JavaScript代碼。然而，底層的複雜度指標和原則適用於大多數編程語言。要分析其他語言的代碼，您需要特定於這些語言的工具，因為語法解析是依賴於語言的。"
        },
        {
          question: "這些複雜度指標有多準確？",
          answer: "這些指標基於已建立的軟件工程原則提供客觀測量，但它們並不完美。它們擅長量化結構複雜性並識別潛在問題區域，但它們不能捕捉代碼質量的所有方面，如架構設計、領域適用性或命名約定等可讀性因素。對於全面的質量評估，將複雜度指標與其他實踐如代碼審查和靜態分析結合使用。"
        },
        {
          question: "我可以將這個分析器集成到我的CI/CD管道中嗎？",
          answer: "雖然這個基於網絡的工具是為交互式使用而設計的，但相同的複雜度指標可以使用如 'complexity-report'、'eslint-plugin-complexity' 或 'SonarQube' 等庫在CI/CD管道中實現，用於JavaScript項目。這些工具可以強制執行複雜度閾值，防止過於複雜的代碼被合併，並確保持續的代碼質量監控。"
        },
        {
          question: "如果我的代碼有高複雜度分數，我應該怎麼做？",
          answer: "高複雜度分數表明代碼可能需要重構。考慮以下技術：將大函數分解為較小的函數，減少嵌套級別，使用守衛條款或查找表簡化條件邏輯，將複雜計算提取到專用的輔助函數中，應用設計模式簡化結構，以及在適當的情況下用庫函數替換複雜代碼。首先關注經常修改的最高複雜度函數。"
        },
        {
          question: "較低的複雜度分數總是意味著更好的代碼嗎？",
          answer: "不一定。雖然較低的複雜度通常與更可維護的代碼相關，但可能有例外。有時稍微複雜一點的解決方案可能更高效，更符合領域需求，或者對領域專家實際上更易讀。複雜度指標應該為您的決策提供信息，而不是決定它。平衡複雜度考慮與性能、領域適用性和團隊熟悉度等其他因素。"
        }
      ]
    },
    optimization: {
      title: "基於複雜度分析的代碼優化策略",
      intro: "當您的複雜度分析揭示問題時，考慮這些有效的技術來降低複雜度並提高代碼質量：",
      tips: [
        "將大函數分解成更小、更專注的函數，每個函數執行單一邏輯操作",
        "通過使用提前返回、守衛條款或將深度嵌套代碼提取到單獨的函數中來減少嵌套級別",
        "通過將複雜的布爾條件分解為命名變量或解釋其目的的函數來簡化它們",
        "用策略模式或查找表替換複雜的switch語句和if-else鏈",
        "使用函數式編程技術如map、filter和reduce，而不是具有多個條件的複雜循環",
        "將重複的代碼模式提取到可重用的實用函數或方法中",
        "應用單一責任原則，確保類和函數只有一個變更的理由",
        "在適當的情況下，用經過良好測試的庫函數替換複雜的自定義算法",
        "通過使用參數對象而不是長參數列表來簡化接口複雜性",
        "徹底記錄必要但複雜的代碼，解釋為什麼它需要複雜",
        "為複雜代碼段添加全面測試，確保它們按預期工作並促進未來的重構",
        "為您的團隊建立複雜度閾值，並在合併之前審查超過這些閾值的代碼"
      ]
    }
  }
}