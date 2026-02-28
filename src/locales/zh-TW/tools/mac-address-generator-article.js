export default {
    title: 'MAC位址產生器：線上產生隨機MAC位址與網路設備識別碼工具',
    functionTitle: 'MAC位址產生器如何幫助你快速產生有效的網路設備識別碼？',

    useCasesTitle: 'MAC位址產生器的典型應用場景',
    useCase1: '<strong>網路設備測試：</strong>MAC位址產生器為網路工程師和開發者提供大量符合IEEE標準的MAC位址，用於路由器、交換機、防火牆等網路設備的設定測試和功能驗證。',
    useCase2: '<strong>軟體開發除錯：</strong>MAC位址產生器可批量產生結構化MAC位址資料，用於網路應用開發、物聯網(IoT)專案、藍牙設備模擬等場景的測試和除錯。',
    useCase3: '<strong>物聯網設備模擬：</strong>MAC位址產生器幫助開發者建立虛擬設備識別碼，用於智慧家庭、工業物聯網、車聯網等專案的設備管理和通訊測試。',
    useCase4: '<strong>安全測試研究：</strong>MAC位址產生器為安全研究人員提供匿名化的MAC位址，用於網路安全測試、滲透測試、MAC過濾繞過研究等場景。',
    useCase5: '<strong>教育培訓演示：</strong>MAC位址產生器產生標準格式的MAC位址，幫助教師和學生理解網路層位址結構、OUI分配規則、單播多播區分等網路基礎知識。',
    useCase6: '<strong>資料庫填充：</strong>MAC位址產生器建立符合實際規律的MAC位址資料，用於網路管理系統、設備監控平台、資產管理系統的開發和測試資料庫。',

    tipTitle: '專業使用建議',
    tipContent: '使用MAC位址產生器時，建議根據實際需求選擇合適的格式和廠商前綴。對於需要模擬真實設備的場景，可以選擇特定廠商的OUI前綴；對於安全測試場景，建議使用本地管理位址(LAA)避免與真實設備衝突。',

    conclusion: '<p>無論是網路工程、軟體開發還是安全研究，<strong>MAC位址產生器</strong>都能提供高品質、符合IEEE標準的MAC位址。MAC位址產生器支援多種格式輸出，包括冒號分隔、連字號分隔、點分隔等常用格式，同時提供廠商OUI前綴選擇功能，讓產生的位址更加真實可信。所有處理都在瀏覽器本地完成，無需擔心資料外洩風險。</p>',

    faqTitle: 'MAC位址產生器常見問題解答',
    faq1Question: 'MAC位址產生器產生的位址是真實有效的嗎？',
    faq1Answer: 'MAC位址產生器產生的MAC位址完全符合IEEE 802標準格式，通過正確的校驗位設定確保位址有效性。但這些位址是隨機產生的虛擬位址，不與任何真實網路設備關聯。MAC位址產生器主要用於測試和開發目的，不應用於生產環境中的真實設備識別。',

    faq2Question: '什麼是OUI前綴？如何使用廠商前綴功能？',
    faq2Answer: 'OUI(Organizationally Unique Identifier)是MAC位址前3個位元組，由IEEE分配給各網路設備廠商。MAC位址產生器提供常見廠商的OUI前綴選擇，選擇特定廠商後，產生的MAC位址將使用該廠商的OUI，使位址看起來更像真實設備。你也可以輸入自訂OUI前綴。',

    faq3Question: 'MAC位址產生器支援哪些輸出格式？',
    faq3Answer: 'MAC位址產生器支援多種常用格式：冒號分隔格式(XX:XX:XX:XX:XX:XX)用於Linux/Unix系統，連字號分隔格式(XX-XX-XX-XX-XX-XX)用於Windows系統，點分隔格式(XXXX.XXXX.XXXX)用於Cisco設備，無分隔符格式(XXXXXXXXXXXX)用於部分嵌入式系統。',

    faq4Question: '單播位址和多播位址有什麼區別？',
    faq4Answer: 'MAC位址的第一個位元組的最低位(Least Significant Bit)決定位址類型。單播位址(Unicast)的該位為0，用於點對點通訊，識別特定網路設備；多播位址(Multicast)的該位為1，用於群播通訊，識別一組網路設備。MAC位址產生器支援產生這兩種類型。',

    faq5Question: '全域唯一位址(UAA)和本地管理位址(LAA)有什麼區別？',
    faq5Answer: '全域唯一位址(UAA, Universally Administered Address)由設備廠商分配，MAC位址第一個位元組的倒數第二位為0；本地管理位址(LAA, Locally Administered Address)由網路管理員分配，該位為1。MAC位址產生器支援產生兩種類型，LAA常用於虛擬機器和測試環境。',

    tutorialTitle: 'MAC位址產生器使用指南',
    step1Title: '步驟一：選擇MAC位址格式',
    step1Description: '在MAC位址產生器中，首先選擇輸出格式。冒號分隔格式適用於大多數Linux/Unix系統，連字號分隔格式適用於Windows系統，點分隔格式適用於Cisco網路設備。你也可以選擇大寫或小寫字母輸出。',
    step1Note: '不同系統和設備可能需要不同的格式，請根據實際使用場景選擇合適的格式。',

    step2Title: '步驟二：選擇位址類型',
    step2Description: '在MAC位址產生器中選擇位址類型：單播位址用於識別單個設備，多播位址用於識別設備組；全域唯一位址(UAA)模擬真實設備，本地管理位址(LAA)用於虛擬環境。根據測試需求選擇合適的組合。',
    step2Note: '大多數測試場景使用單播+全域唯一位址組合，虛擬機器環境常用單播+本地管理位址組合。',

    step3Title: '步驟三：選擇廠商前綴（可選）',
    step3Description: 'MAC位址產生器提供常見網路設備廠商的OUI前綴，如Apple、Cisco、Intel、華為等。選擇特定廠商後，產生的MAC位址將使用該廠商的真實OUI前綴，使測試資料更加真實。也可以輸入自訂OUI前綴。',
    step3Note: '如果不需要模擬特定廠商設備，可以選可以選擇「隨機廠商」產生完全隨機的MAC位址。',

    step4Title: '步驟四：設定產生數量',
    step4Description: '在MAC位址產生器中輸入要產生的MAC位址數量（1-1000條），然後點擊「產生位址」按鈕。系統會在瀏覽器本地快速產生所有位址，無需等待伺服器回應。',
    step4Note: '批量產生大量位址時，建議先測試少量資料確認格式和類型符合需求。',

    step5Title: '步驟五：檢視和驗證結果',
    step5Description: '產生完成後，MAC位址產生器會在輸出區域顯示所有產生的位址。你可以展開每條記錄檢視詳細資訊，包括廠商名稱、位址類型、格式等。驗證位址格式和類型是否符合要求。',
    step5Note: 'MAC位址產生器產生的所有位址都符合IEEE 802標準，可以直接用於測試和開發。',

    step6Title: '步驟六：匯出資料',
    step6Description: '確認資料無誤後，在MAC位址產生器中選擇匯出格式：JSON用於程式處理，CSV用於表格分析。你也可以複製單個位址或全部位址到剪貼簿，貼上到其他應用程式中使用。',
    step6Note: '匯出的檔案包含所有產生欄位，便於後續資料處理和批量匯入。',

    successTitle: '產生完成！',
    successContent: '恭喜，你已成功掌握MAC位址產生器的使用方法。現在你可以快速產生符合IEEE標準的MAC位址，用於網路設備測試、軟體開發、物聯網模擬等各種場景。',

    relatedToolsTitle: '你可能還想嘗試的相關工具',
    relatedTool1Name: 'UUID產生器',
    relatedTool1Description: '產生唯一識別碼(UUID)，用於資料庫主鍵和唯一識別。',
    relatedTool1Url: 'https://www.ufreetools.com/tool/uuid-generator',

    relatedTool2Name: '香港地址產生器',
    relatedTool2Description: '線上產生真實香港地址、身分資訊與聯絡方式。',
    relatedTool2Url: 'https://www.ufreetools.com/tool/hk-address-generator',

    relatedTool3Name: '隨機密碼產生器',
    relatedTool3Description: '產生安全可靠的隨機密碼，保護帳戶安全。',
    relatedTool3Url: 'https://www.ufreetools.com/tool/password-generator',

    relatedTool4Name: 'JSON格式化工具',
    relatedTool4Description: '美化和驗證JSON資料，便於閱讀和除錯。',
    relatedTool4Url: 'https://www.ufreetools.com/tool/json-formatter',

    reference1Name: 'IEEE OUI資料庫',
    reference1Description: '查詢官方OUI分配資訊和廠商列表。',
    reference1Url: 'https://standards-oui.ieee.org/',

    reference2Name: 'MAC位址 - 維基百科',
    reference2Description: '了解MAC位址的結構、類型和應用場景。',
    reference2Url: 'https://en.wikipedia.org/wiki/MAC_address',

    reference3Name: 'IEEE 802標準',
    reference3Description: '深入了解網路位址標準和規範。',
    reference3Url: 'https://standards.ieee.org/ieee/802/10328/'
};
