export default {
    title: '隨機IP產生器：線上產生IPv4/IPv6位址的免費工具',
    functionTitle: '隨機IP產生器如何幫助你快速產生測試用IP位址？',
    
    useCasesTitle: '隨機IP產生器的典型應用場景',
    useCase1: '<strong>網路應用測試：</strong>隨機IP產生器為開發者提供大量測試IP位址，用於測試IP限制功能、地理位置識別、存取控制等功能，無需收集真實使用者資料。',
    useCase2: '<strong>資料庫填充：</strong>隨機IP產生器可批次產生數千條IP位址資料，快速填充開發環境資料庫，用於測試IP相關的查詢、統計和分析功能。',
    useCase3: '<strong>API開發除錯：</strong>隨機IP產生器幫助開發者模擬不同地區的存取請求，測試API的地區分發、負載平衡和限流功能。',
    useCase4: '<strong>安全測試演練：</strong>隨機IP產生器產生虛擬IP位址，用於模擬攻擊流量、測試防火牆規則、驗證入侵檢測系統。',
    useCase5: '<strong>教育培訓演示：</strong>隨機IP產生器為網路課程提供範例IP位址，用於講解IP位址分類、子網劃分、路由原理等知識。',
    useCase6: '<strong>效能測試壓測：</strong>隨機IP產生器建立大量模擬客戶端IP，用於測試伺服器並發處理能力和IP過濾效能。',
    
    tipTitle: '專業使用建議',
    tipContent: '使用隨機IP產生器時，建議根據測試需求選擇合適的IP版本和類型。測試公網應用時選擇公網IP，測試內網系統時選擇私有IP。如需模擬特定地區使用者，可使用地區篩選功能。批次產生時建議先小批次測試，確認格式正確後再大批次產生。',
    
    conclusion: '<p>無論是網路開發、安全測試還是教育培訓，<strong>隨機IP產生器</strong>都能提供高品質、格式正確的IP位址資料。隨機IP產生器支援IPv4和IPv6兩種協議，可產生公網IP和私有IP，所有處理都在瀏覽器本地完成，無需擔心資料洩露風險。透過隨機IP產生器，你可以快速獲得所需的IP位址資料，支援多種匯出格式，滿足各種測試和開發需求。</p>',
    
    faqTitle: '隨機IP產生器常見問題解答',
    faq1Question: '隨機IP產生器產生的IP位址是真實存在的嗎？',
    faq1Answer: '隨機IP產生器產生的IP位址符合標準IP格式規範，但都是隨機產生的虛擬位址，不一定真實存在於網路中。隨機IP產生器主要用於測試、開發和教育目的，不建議用於實際網路存取。',
    
    faq2Question: '隨機IP產生器支援IPv6位址嗎？',
    faq2Answer: '支援。隨機IP產生器完全支援IPv6位址產生，可以選擇產生純IPv4、純IPv6或混合版本的IP位址。IPv6位址採用標準的128位元格式，符合RFC 4291規範。',
    
    faq3Question: '隨機IP產生器支援哪些匯出格式？',
    faq3Answer: '隨機IP產生器支援多種匯出格式：JSON格式便於程式處理，CSV格式適合Excel等表格軟體開啟，TXT純文字格式便於直接複製使用。還可以選擇包含連接埠號、子網路遮罩和地理資訊。',
    
    faq4Question: '使用隨機IP產生器會洩露隱私嗎？',
    faq4Answer: '不會。隨機IP產生器採用純前端技術，所有資料產生和處理都在你的瀏覽器本地完成，不會上傳任何資訊到伺服器。隨機IP產生器不會收集、儲存或傳輸任何使用者資料，確保完全隱私安全。',
    
    faq5Question: '隨機IP產生器可以產生特定地區的IP嗎？',
    faq5Answer: '可以。隨機IP產生器提供地區篩選功能，支援美國、歐洲、亞洲、中國、日本、韓國等主要地區的IP位址產生。選擇特定地區後，系統會根據該地區的IP位址段產生相應位址。',
    
    tutorialTitle: '隨機IP產生器使用指南',
    step1Title: '步驟一：選擇IP版本',
    step1Description: '在隨機IP產生器中，首先選擇要產生的IP版本。可以選擇IPv4（32位元位址）、IPv6（128位元位址）或混合版本。IPv4適用於傳統網路應用測試，IPv6適用於新一代網路協議測試。',
    step1Note: 'IPv4位址格式為4個十進位數，如192.168.1.1；IPv6位址格式為8組十六進位數，如2001:0db8:85a3:0000:0000:8a2e:0370:7334。',
    
    step2Title: '步驟二：選擇IP類型',
    step2Description: '根據需求在隨機IP產生器中選擇IP類型：公網IP適合模擬網際網路存取，私有IP適合測試內網環境，任意類型則隨機產生公網或私有IP。',
    step2Note: '私有IP範圍包括10.0.0.0/8、172.16.0.0/12、192.168.0.0/16和127.0.0.0/8（回環位址）。',
    
    step3Title: '步驟三：配置附加選項',
    step3Description: '在隨機IP產生器中設定附加選項，包括是否包含連接埠號（模擬特定服務）、子網路遮罩（用於網路規劃）和地理資訊（國家、城市、營運商等）。',
    step3Note: '包含連接埠號可以模擬HTTP(80/443)、SSH(22)、資料庫(3306/5432)等常見服務的存取。',
    
    step4Title: '步驟四：設定產生數量',
    step4Description: '在隨機IP產生器中輸入要產生的IP位址數量（1-1000個），然後點擊「產生IP位址」按鈕。系統會在瀏覽器本地快速產生所有資料，無需等待伺服器回應。',
    step4Note: '批次產生大量IP位址時，建議先測試少量資料確認格式是否符合需求。',
    
    step5Title: '步驟五：選擇輸出格式並匯出',
    step5Description: '產生完成後，在隨機IP產生器中選擇輸出格式：純文字適合直接複製使用，JSON格式適合程式呼叫，CSV格式適合資料分析。點擊匯出按鈕即可儲存到本地。',
    step5Note: '隨機IP產生器產生的所有IP位址都符合標準格式，可以直接用於測試和開發。',
    
    successTitle: '產生完成！',
    successContent: '恭喜，你已成功掌握隨機IP產生器的使用方法。現你可以快速產生符合格式要求的IPv4/IPv6位址，用於網路應用測試、API開發、安全測試等各種場景。',
    
    relatedToolsTitle: '你可能還想嘗試的相關工具',
    relatedTool1Name: 'UUID產生器',
    relatedTool1Description: '快速產生唯一識別碼(UUID)，用於資料庫主鍵等場景。',
    relatedTool1Url: 'https://www.ufreetools.com/tool/uuid-generator',
    
    relatedTool2Name: '隨機密碼產生器',
    relatedTool2Description: '產生安全可靠的隨機密碼，保護帳戶安全。',
    relatedTool2Url: 'https://www.ufreetools.com/tool/password-generator',
    
    relatedTool3Name: 'MAC位址產生器',
    relatedTool3Description: '產生隨機MAC位址，用於網路設備測試。',
    relatedTool3Url: 'https://www.ufreetools.com/tool/mac-address-generator',
    
    relatedTool4Name: 'JSON格式化工具',
    relatedTool4Description: '美化和驗證JSON資料，便於閱讀和除錯。',
    relatedTool4Url: 'https://www.ufreetools.com/tool/json-formatter',
    
    referencesTitle: '參考資料',
    reference1Name: 'IPv4 - 維基百科',
    reference1Description: '了解IPv4位址的結構、分類和分配規則。',
    reference1Url: 'https://zh.wikipedia.org/wiki/IPv4',
    
    reference2Name: 'IPv6 - 維基百科',
    reference2Description: '學習IPv6位址格式、特性和優勢。',
    reference2Url: 'https://zh.wikipedia.org/wiki/IPv6',
    
    reference3Name: 'RFC 791 - IP協定規範',
    reference3Description: '閱讀網際網路協定的官方技術規範文件。',
    reference3Url: 'https://www.rfc-editor.org/rfc/rfc791'
};
