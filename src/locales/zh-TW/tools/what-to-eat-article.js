export default {
    title: '「今天吃什麼」在線決策工具：智能美食推薦與用餐選擇指南',
    functionTitle: '什麼是「今天吃什麼」在線決策工具？',
    intro: '我們的<strong>今天吃什麼在線決策工具</strong>是一款純前端開源應用，通過時間、預算、辣度、飲食限制、天氣和場景等維度綜合打分，實時生成可執行的美食推薦方案。整個決策過程在瀏覽器本地完成，不上傳任何個人偏好，既高效又保護隱私。',
    useCasesTitle: '真實可用的應用場景',
    useCases: [
        '加班或熬夜時快速確定宵夜吃什麼，減少決策時間',
        '午餐時間結合預算與辣度偏好，找到高性價比菜單',
        '約會或家庭聚餐時，挑選不踩雷的場景化菜餚組合',
        '炎熱、降溫或陰雨天氣，匹配清涼/暖胃的菜餚與飲品',
        '素食、純素或清真友好場景下的安全可選菜單',
        '健身增肌或控糖階段，優先高蛋白、低碳的餐食靈感',
        '出差或旅行時，快速列出當地常見且易獲得的美食',
        '雨天懶得出門時，推薦可外賣或易做的家常菜'
    ],
    tipTitle: '專業提示：',
    tipContent: '先鎖定「用餐時間」和「預算偏好」，再微調辣度、天氣和飲食限制，可以讓「今天吃什麼在線決策工具」更快給出高匹配度結果。',
    conclusion: '<strong>今天吃什麼在線決策工具</strong>讓選擇菜單不再糾結。憑藉多維度打分和本地計算，你可以在幾秒內拿到符合口味、預算與場景的美食推薦，適合上班族、學生、健身人群或家庭用戶隨時使用。',
    faqTitle: '常見問題（FAQ）',
    faqs: [
        {
            question: '「今天吃什麼在線決策工具」如何保證結果真實可靠？',
            answer: '工具基於公開可得的常見菜品數據集，並按時間、預算、辣度、天氣、場景和飲食限制打標。篩選和隨機都在本地運行，推薦的是可以實際執行的菜單。'
        },
        {
            question: '使用「今天吃什麼在線決策工具」會上傳我的個人偏好嗎？',
            answer: '不會。所有計算在瀏覽器本地完成，不會把你的任何篩選信息上傳到服務器，隱私安全。'
        },
        {
            question: '素食或清真用戶能否在「今天吃什麼在線決策工具」中得到合適推薦？',
            answer: '可以。選擇素食、純素或清真友好後，系統會過濾不符合要求的菜品，只展示符合飲食限制的選項。'
        },
        {
            question: '天氣或場景如何影響「今天吃什麼在線決策工具」的推薦？',
            answer: '炎熱/陰雨、約會/加班等選項會調整菜品得分，例如炎熱時更傾向涼菜、陰雨時更傾向熱湯、約會時提升體面易分享的選項。'
        },
        {
            question: '高蛋白或低碳飲食能在「今天吃什麼在線決策工具」中實現嗎？',
            answer: '能。選擇高蛋白或低碳偏好後，算法會優先推送高蛋白主食與低碳搭配，適合健身或控糖場景。'
        },
        {
            question: '如果對結果不滿意，「今天吃什麼在線決策工具」能換一批嗎？',
            answer: '可以。點擊「換一批推薦」即可在同樣的條件下重新隨機，直到找到滿意的選項。'
        },
        {
            question: '為什麼有時推薦數量較少？',
            answer: '當篩選條件過於嚴格（例如純素 + 清真 + 高蛋白 + 宵夜 + 炎熱）時匹配項會減少。可放寬部分條件後再試，或點擊「重置篩選」。'
        },
        {
            question: '「今天吃什麼在線決策工具」是否開源？',
            answer: '是的，工具採用純前端開源實現，邏輯與數據可審閱，方便自定義與二次開發。'
        }
    ],
    tutorialTitle: '如何使用「今天吃什麼在線決策工具」',
    steps: [
        {
            title: '鎖定時間與預算',
            description: '選擇「用餐時間」和「預算偏好」，今天吃什麼在線決策工具會先縮小候選範圍。'
        },
        {
            title: '設定辣度和飲食限制',
            description: '根據辣度、素食/清真等限制過濾不合適的菜品，確保結果可實際執行。'
        },
        {
            title: '按天氣與場景微調',
            description: '炎熱、陰雨或約會、加班等選項會調節得分，突出更貼合的菜單。'
        },
        {
            title: '點擊開始決策',
            description: '點擊「開始決策」生成結果，如需更多靈感可繼續點擊「換一批推薦」。'
        },
        {
            title: '查看理由與能量提示',
            description: '每個推薦都帶有理由和能量提示，幫助你快速拍板。'
        },
        {
            title: '重置或再次優化',
            description: '想重新開始可「重置篩選」，也可微調單項偏好繼續生成新結果。'
        }
    ],
    successTitle: '恭喜！',
    successContent: '你已學會使用今天吃什麼在線決策工具，隨時獲取個性化菜單靈感，輕鬆告別選擇困難。',
    relatedToolsTitle: '你可能感興趣的相關工具',
    relatedTools: [
        {
            name: '圖片壓縮器',
            description: '壓縮美食照片或菜單圖片，便於分享與存檔。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: '二維碼生成器',
            description: '把菜單或團購連結生成二維碼，方便掃碼點餐。',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        },
        {
            name: 'EXIF查看器',
            description: '查看美食照片的EXIF信息，管理拍攝數據和位置。',
            url: 'https://www.ufreetools.com/tool/exif-viewer'
        },
        {
            name: '印章生成器',
            description: '為社群或餐廳活動製作數字印章，用於宣傳物料。',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        }
    ],
    referencesTitle: '參考資源',
    references: [
        {
            name: '中國居民膳食指南',
            description: '官方發布的均衡飲食與營養搭配指南',
            url: 'http://dg.cnsoc.org/'
        },
        {
            name: 'Dietary Patterns and Health',
            description: '飲食模式與健康影響的研究綜述',
            url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7071241/'
        },
        {
            name: 'FoodData Central',
            description: '美國農業部公開食品營養數據庫',
            url: 'https://fdc.nal.usda.gov/'
        }
    ]
};