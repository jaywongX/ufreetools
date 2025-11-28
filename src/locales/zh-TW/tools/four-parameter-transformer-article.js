export default {
    title: '四參數轉換器：平面相似與赫爾默特變換批次指南',
    functionTitle: '四參數轉換器如何保障區域坐標一鍵對接？',
    intro: '<p>四參數轉換器基於平面相似、布爾莎簡化與赫爾默特模型構建，可覆蓋 ΔX、ΔY 平移、旋轉 θ 與尺度 m 在內的全部參數。透過純前端演算法，系統可在瀏覽器本地完成單點與批次正反算，並即時給出殘差向量、RMSE、95% 信心區間以及精度熱力圖，保障每一次坐標對接可追蹤、可驗證、可評估。</p>',
    useCasesTitle: '工具功能與應用場景',
    useCases: {
        first: '<strong>工程坐標一體化</strong>：在城市更新或軌道交通項目中，快速將地方獨立坐標系映射到統一工程坐標系，提高設計與施工協同效率。',
        second: '<strong>區域投影拼圖</strong>：遙感、無人機成果往往來自不同投影帶，四參數轉換器可批次更新平面控制點，實現無縫拼接。',
        third: '<strong>自訂平面系融合</strong>：對接廠礦、園區內自建坐標系，藉助四參數模型消除尺度與旋轉差，實現圖紙與現場一致。',
        fourth: '<strong>成果複核與驗收</strong>：輸出殘差分佈直方圖和信心區間，向甲方或監管部門提交量化評估報告。'
    },
    tipTitle: '產品頁圖片',
    logoAlt: '四參數轉換器產品預覽',
    tipContent: '該示意圖可被搜尋引擎抓取，用於在搜尋結果中展示四參數轉換器的富媒體摘要。',
    conclusion: '<p>依靠四參數轉換器，測繪、設計、監理團隊可以在不洩露原始坐標的前提下完成本地化轉換、殘差審查與報告輸出，滿足項目全生命週期對資料可追溯、可驗證的要求。若需進一步進行投影換帶，可配合 <a href="https://www.ufreetools.com/tool/coordinate-zone-switcher" target="_blank">坐標批次換帶工具</a> 使用；如需查閱國際標準，可造訪 <a href="https://www.ogc.org/" target="_blank" rel="noopener noreferrer">OGC Coordinate Transformation</a> 獲得更多指導。</p>',
    faqTitle: '常見問題解答',
    faqs: {
        q1: {
            question: '四參數轉換器如何保證平面相似變換的精度和穩定性？',
            answer: '<p>工具採用最小二乘平差求解 ΔX、ΔY、θ、m，並輸出 RMSE、最大殘差及 95% 信心區間，使用者可透過日誌審查矩陣運算，驗證平面相似變換的精度。</p>'
        },
        q2: {
            question: '批次匯入時能否自動跳過錯誤坐標？',
            answer: '<p>可以。解析階段若發現欄位數不符或資料異常，系統會在日誌中記錄並跳過該條，繼續處理剩餘坐標，保證批次轉換不中斷。</p>'
        },
        q3: {
            question: '四參數轉換器是否支援正算與反算？',
            answer: '<p>支援。工具提供正算（源 → 目標）與反算（目標 → 源）按鈕，便於比對轉換前後坐標並生成疊加可視化。</p>'
        },
        q4: {
            question: '如何在四參數轉換器中查看殘差分佈？',
            answer: '<p>完成轉換後，系統自動繪製控制點分佈圖、殘差直方圖與精度熱力網格，幫助您判斷點群是否均勻、誤差是否集中。</p>'
        },
        q5: {
            question: '可否引用四參數轉換器產生的報告？',
            answer: '<p>可以。結果區支援匯出 CSV，日誌可一鍵複製，圖表可截圖嵌入技術報告，滿足工程驗收或備案需求。</p>'
        }
    },
    tutorialTitle: '四參數轉換器操作指南',
    steps: {
        step1: {
            title: '準備源坐標與控制點',
            description: '首先整理源坐標與對應目標坐標，並確認分隔符格式，確保每行資料包含 X、Y 及可選的目標值與點名。'
        },
        step2: {
            title: '選擇模型並輸入參數',
            description: '在「模型設定」中選擇平面相似、布爾莎簡化或赫爾默特模型，錄入 ΔX、ΔY、θ、m，或保持空白等待平差結果。'
        },
        step3: {
            title: '載入範例或匯入檔案',
            description: '可使用「載入範例」快速體驗，也可以拖曳 CSV/TXT 檔案，實現大批量坐標匯入並自動解析。'
        },
        step4: {
            title: '執行平差與轉換',
            description: '在共用點解算區貼上成對坐標，點擊「平面相似平差」獲得最佳參數，再執行正算或反算完成批次轉換。'
        },
        step5: {
            title: '查看日誌與可視化',
            description: '即時日誌將展示解析、平差、轉換、統計等流程，同時繪製控制點分佈、殘差直方圖與熱力概覽。'
        },
        step6: {
            title: '匯出成果並分享',
            description: '確認結果後，匯出 CSV 與日誌，並截圖可視化圖表，用於成果提交、複核或資料歸檔。'
        }
    },
    successTitle: '完成部署',
    successContent: '恭喜！您已掌握四參數轉換器的全部流程，可以自信地處理各類平面坐標對接任務並產生精度評估報告。',
    relatedToolsTitle: '相關工具推薦',
    relatedTools: {
        first: {
            name: '圖幅分幅計算器',
            description: '根據經緯度坐標計算所在圖幅編號，支援多種比例尺。',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        second: {
            name: 'GNSS時間轉換器',
            description: 'GPS時間、北斗時間與UTC時間相互轉換工具。',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        third: {
            name: '面積與周長計算器',
            description: '支援繪製多邊形自動計算面積和周長，提供多種單位切換。',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        fourth: {
            name: '基線計算器',
            description: '輸入起點、終點坐標計算基線長度和方位角，支援誤差傳播分析。',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    },
    referencesTitle: '參考資料',
    references: {
        first: {
            name: '中國地理資訊產業協會 - 標準規範',
            description: '中國地理資訊行業標準與技術規範',
            url: 'http://www.cagis.org.cn/'
        },
        second: {
            name: 'ISO 19111 參考坐標系標準',
            description: '國際坐標基準與投影轉換的權威標準。',
            url: 'https://www.iso.org/standard/74039.html'
        },
        third: {
            name: '開放地理空間聯盟 (OGC) 標準',
            description: '地理空間資料轉換的國際標準',
            url: 'https://www.ogc.org/'
        }
    }
}