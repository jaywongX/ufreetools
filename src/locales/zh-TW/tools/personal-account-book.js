export default {
  name: '個人記帳本',
  description: '使用這個簡單易用的個人財務工具追蹤您的收入和支出',
  tags: ['財務', '會計', '預算', '金錢', '支出追蹤', '個人財務'],
  category: 'practical-tools',
  
  // UI元素
  ui: {
    addTransaction: '新增交易',
    editTransaction: '編輯交易',
    deleteTransaction: '刪除交易',
    income: '收入',
    expense: '支出',
    transfer: '轉帳',
    date: '日期',
    amount: '金額',
    category: '分類',
    account: '帳戶',
    description: '描述',
    tags: '標籤',
    save: '儲存',
    cancel: '取消',
    confirm: '確認',
    filter: '篩選',
    search: '搜尋',
    clear: '清除',
    overview: '總覽',
    transactions: '交易記錄',
    statistics: '統計分析',
    budget: '預算',
    settings: '設定',
    exportData: '匯出資料',
    importData: '匯入資料',
    backup: '備份',
    restore: '還原',
    currency: '貨幣',
    language: '語言',
    theme: '主題',
    darkMode: '深色模式',
    lightMode: '淺色模式',
    resetData: '重設資料',
    resetConfirmation: '您確定要重設所有資料嗎？此操作無法復原。',
    from: '從',
    to: '至',
    filterByDate: '按日期篩選',
    noTransactions: '沒有交易記錄可顯示',
    allCategories: '所有分類',
    addCategory: '新增分類',
    editCategory: '編輯分類',
    deleteCategory: '刪除分類',
    categoryName: '分類名稱',
    categoryIcon: '分類圖示',
    categoryColor: '分類顏色',
    addAccount: '新增帳戶',
    editAccount: '編輯帳戶',
    deleteAccount: '刪除帳戶',
    accountName: '帳戶名稱',
    accountType: '帳戶類型',
    accountBalance: '帳戶餘額',
    totalIncome: '總收入',
    totalExpense: '總支出',
    balance: '餘額',
    netWorth: '淨資產',
    daily: '每日',
    weekly: '每週',
    monthly: '每月',
    yearly: '每年',
    today: '今天',
    thisWeek: '本週',
    thisMonth: '本月',
    thisYear: '今年',
    lastWeek: '上週',
    lastMonth: '上月',
    lastYear: '去年',
    custom: '自訂',
    setBudget: '設定預算',
    budgetLimit: '預算限額',
    budgetPeriod: '預算週期',
    budgetCategory: '預算分類',
    budgetAlert: '預算提醒',
    budgetUsage: '預算使用情況',
    remaining: '剩餘',
    spent: '已花費',
    over: '超出',
    exportFormat: '匯出格式',
    importFormat: '匯入格式',
    csv: 'CSV',
    json: 'JSON',
    selectFile: '選擇檔案',
    successfullyImported: '資料匯入成功',
    errorImporting: '匯入資料時出錯',
    successfullyExported: '資料匯出成功',
    errorExporting: '匯出資料時出錯',
    confirmDelete: '您確定要刪除此項目嗎？',
    recurringTransaction: '定期交易',
    frequency: '頻率',
    startDate: '開始日期',
    endDate: '結束日期',
    never: '從不',
    daily: '每天',
    weekly: '每週',
    monthly: '每月',
    yearly: '每年',
    note: '備註',
    attachment: '附件',
    dataSecurity: '資料安全',
    type: '類型',
    clearTransactions: '清空交易記錄',
    confirmClearTransactions: '您確定要清空所有交易記錄嗎？此操作無法復原。',
    transactionsCleared: '所有交易記錄已清空',
    enterValidAmount: '請輸入有效金額',
    selectDate: '請選擇日期',
    selectCategory: '請選擇分類'
  },
  
  // 預定義分類
  categories: {
    income: {
      salary: '薪資',
      freelance: '自由職業',
      investments: '投資收益',
      gifts: '禮金',
      refunds: '退款',
      other: '其他收入'
    },
    expense: {
      food: '餐飲',
      groceries: '日用品',
      rent: '房租/房貸',
      utilities: '水電瓦斯',
      transportation: '交通',
      entertainment: '娛樂',
      shopping: '購物',
      health: '醫療健康',
      education: '教育',
      personal: '個人護理',
      travel: '旅行',
      insurance: '保險',
      taxes: '稅費',
      debt: '債務還款',
      subscription: '訂閱服務',
      charity: '捐贈與慈善',
      business: '商務支出',
      other: '其他支出'
    },
    transfer: {
      bank_transfer: '銀行轉帳',
      savings: '儲蓄',
      investment: '投資',
      debt_payment: '債務還款',
      other: '其他轉帳'
    }
  },
  
  // 帳戶類型
  accountTypes: {
    cash: '現金',
    checking: '活期帳戶',
    savings: '儲蓄帳戶',
    creditCard: '信用卡',
    investment: '投資帳戶',
    loan: '貸款',
    asset: '資產',
    other: '其他'
  },
  
  // 圖表標籤
  charts: {
    incomeVsExpense: '收入與支出對比',
    expenseByCategory: '支出分類明細',
    monthlyTrend: '月度趨勢',
    savingsRate: '儲蓄率',
    netWorthTrend: '淨資產趨勢',
    budgetPerformance: '預算執行情況',
    topExpenseCategories: '主要支出分類',
    cashFlow: '現金流'
  },
  
  // 工具文件部分
  documentation: {
    title: '關於個人記帳本',
    introduction: '個人記帳本是為個人財務管理設計的工具。所有資料都儲存在您的瀏覽器中，確保您的財務資訊完全私密。',
    whyUse: {
      title: '為什麼使用個人記帳本？',
      points1: '完全私密 - 所有資料都儲存在本地，不會上傳到任何伺服器',
      points2: '簡單介面 - 簡潔直觀的設計，便於記錄日常交易',
      points3: '資料視覺化 - 透過視覺化圖表了解您的消費習慣',
      points4: '自訂分類 - 根據個人需求建立自訂收支分類',
      points5: '資料匯出 - 支援匯出資料到CSV格式，方便備份或進一步分析'
    },
    tips: {
      title: '使用技巧',
      points1: '定期記錄交易以保持帳本更新',
      points2: '使用標籤功能對支出進行更細緻的分類',
      points3: '設定月度預算來控制支出',
      points4: '定期匯出資料作為備份',
      points5: '使用統計功能識別消費模式和改進領域'
    },
    dataStorage: {
      title: '資料儲存',
      content: '您的所有財務資料完全儲存在瀏覽器的本地儲存中。這意味著您的資料不會離開您的裝置，任何人都無法存取。但是，清除瀏覽器資料也會清除您的帳本資料，因此請記得定期匯出。'
    }
  },
  
  // 新增文章部分
  article: {
    title: "個人記帳本：掌控您的財務健康",
    features: {
      title: "了解個人財務管理",
      description: "個人記帳本是一款全面的資金管理工具，旨在幫助您掌控自己的財務生活。這款強大的支出追蹤器提供了一個安全、私密的平台，用於記錄收入和支出、監控您的現金流，並分析您的財務模式，同時不會與任何外部伺服器共享您的資料。<br><br>我們的個人財務管理器提供多種功能，包括交易分類、預算規劃、統計視覺化和資料匯出。直觀的介面使日常財務追蹤變得簡單，而先進的報告工具讓您更深入地了解自己的消費習慣和儲蓄模式。無論您是想消除債務、為重大購買儲蓄，還是只想更好地了解錢花在哪裡，這個預算規劃工具都能提供您進行有效財務管理所需的完整工具集。",
      useCases: {
        title: "個人預算的實際應用場景",
        items: [
          "學生追蹤他們的學期支出和津貼，避免在非必需品上過度消費，同時管理有限的財務資源",
          "自由職業者監控基於專案的收入與常規支出，幫助在合約期間保持穩定的現金流",
          "年輕專業人士為重大目標如房屋首付建立儲蓄計劃，分析消費模式以找出減少支出的機會",
          "家庭管理家庭預算，追蹤共同支出，並規劃未來費用如教育基金或家庭裝修",
          "小企業主分離個人和業務支出，同時保持對其整體財務狀況的全面了解",
          "退休人員監控固定收入來源與月度支出，確保他們的退休儲蓄在非工作年限中持續有效"
        ]
      }
    },
    faq: {
      title: "關於個人財務管理的常見問題",
      items: [
        {
          question: "使用這個個人記帳本時，我的財務資料安全嗎？",
          answer: "絕對安全。您的財務資料安全是我們的首要任務。個人記帳本將所有資訊專門儲存在您瀏覽器的本地儲存中，這意味著您的敏感財務資料永遠不會離開您的裝置，也不會傳輸到任何外部伺服器。無需建立帳戶或登入，進一步增強了隱私保護。但是，這種本地儲存方法意味著您應該定期匯出資料作為備份，因為清除瀏覽器快取將刪除您的財務記錄。這種完全隱私與本地責任的平衡讓您完全控制個人財務資訊。"
        },
        {
          question: "預算追蹤功能如何幫助我省下資金？",
          answer: "我們個人記帳本中的預算追蹤功能是增加儲蓄的強大工具，它透過建立財務意識和責任感來實現這一目標。您可以為不同的支出類別（如雜貨、娛樂、水電費等）設定特定的預算限額，並即時監控您的支出與這些目標的對比情況。當您接近或超過預算閾值時，系統會提供視覺指示，幫助防止過度消費。月度和基於類別的報告揭示了您支出的模式，突出顯示可能的減少區域。這種綜合預算監控建立了一個回饋循環，自然鼓勵更有意識的消費決策和更好的財務習慣。"
        },
        {
          question: "我可以在這個支出追蹤器中追蹤多個帳戶或貨幣嗎？",
          answer: "是的，我們的支出追蹤器完全支援管理多個財務帳戶和貨幣。您可以建立和監控各種帳戶類型，包括現金、活期帳戶、儲蓄帳戶、信用卡和投資帳戶，全部在單一儀表板內。對於處理多種貨幣的使用者，該工具允許您定義不同的貨幣類型並處理轉換計算。轉帳功能使您能夠記錄帳戶之間的資金流動，同時在整個財務組合中保持準確的餘額。這種多帳戶功能提供了完整財務狀況的全面視圖，而不是在不同平台上的片段化視圖。"
        },
        {
          question: "財務報告和視覺化有多詳細？",
          answer: "個人記帳本中的財務報告和視覺化提供了非凡的深度，同時保持使用者友好性。分析儀表板提供多種視覺化類型，包括收入與支出比較、基於類別的支出細分、月度趨勢分析和儲蓄率追蹤。報告可以透過自訂日期範圍、類別、標籤或帳戶進行篩選，以檢查您財務行為的特定方面。互動式圖表允許您直接從視覺化中深入到交易詳情。這些全面的分析將原始財務資料轉化為可行的見解，幫助您識別消費模式、追蹤預算表現，並對個人財務管理做出明智決策。"
        },
        {
          question: "這個個人財務管理器與銀行應用有什麼不同？",
          answer: "與主要關注單一機構帳戶餘額和交易的銀行應用不同，我們的個人財務管理器提供了跨所有帳戶的全面財務監督，並具有完全的隱私保護。銀行應用顯示已經發生的事情，而我們的工具強調規劃、預算和分析，具有可訂製的類別，匹配您特定的財務狀況。銀行應用通常缺乏詳細的支出分析或僅提供基本分類，而我們的個人財務管理器提供有關您財務模式的深入報告和視覺化。最重要的是，我們的解決方案將資料本地儲存在您的裝置上，讓您完全控制和保護您的財務資訊隱私，不像銀行應用將您的資料儲存在他們的伺服器上。"
        }
      ]
    },
    guide: {
      title: "管理您財務的步驟指南",
      steps: [
        "首先存取總覽儀表板，獲取您的財務狀況的完整圖景，包括所有帳戶的總收入、支出和當前餘額",
        "透過點擊'新增帳戶'按鈕設定您的帳戶，並輸入帳戶詳細資訊，如名稱、類型（活期帳戶、儲蓄帳戶、信用卡等）和當前餘額",
        "點擊'新增交易'記錄您的財務交易，選擇類型（收入、支出或轉帳），並填寫日期、金額、類別和帳戶等詳細資訊",
        "透過導航到預算部分並為不同的支出類別建立月度限額來建立預算限制，幫助控制您的支出",
        "使用統計部分透過視覺化圖表分析您的支出模式，讓您識別可能過度消費的領域",
        "定期審查您的交易歷史，確保所有條目準確且正確分類，根據需要進行更正以維護資料完整性",
        "使用'匯出資料'功能定期匯出您的財務資料，建立CSV或JSON格式的備份，保護您的記錄免受因瀏覽器資料清除而意外丟失"
      ]
    },
    conclusion: "個人記帳本將通常令人望而生畏的財務管理任務轉變為一個簡單甚至引人入勝的過程。透過提供一個安全的環境來追蹤支出、監控收入和視覺化消費模式，這個工具讓您對財務習慣有前所未有的清晰了解。隨著您繼續記錄交易並審查產生的見解，您將對自己與金錢的關係有更深入的理解，並找出優化財務的具體機會。無論您的目標是減少債務、累積儲蓄，還是僅僅獲得更好的財務意識，持續使用這個個人財務管理器將引導您走向改善的財務健康和對經濟未來更大的心靈平靜。"
  }
}