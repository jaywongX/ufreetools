export default {
    title: '七參數轉換器：Bursa-Wolf大地坐標批次轉換教學',
    functionTitle: '七參數轉換器如何解決多坐標系對接難題？',
    intro: '<p>七參數轉換器圍繞Bursa-Wolf模型提供<strong>WGS84、CGCS2000、北京54、西安80</strong>之間的XYZ與BLH批次轉換，專注解決測量、工程、GIS平台在多源坐標融合時出現的偏移與精度無法追溯問題。工具內建開放演算法、誤差平差與過程日誌，確保每次轉換都可追蹤、可重現、可評估。</p><p>藉助自動平差與範本化參數管理，團隊可快速在專案間複用高可信度的七參數集合，並透過日誌驗證每一步旋轉與尺度改正，便於在公開招標投標、驗收階段提交完整技術說明。</p>',
    useCasesTitle: '實際應用場景',
    useCases: {
        first: '<strong>住建與市政測量</strong>：對接CGCS2000成果與地方獨立坐標系，保障地下管網、BIM模型與竣工圖無縫拼接。',
        second: '<strong>能源與交通工程</strong>：跨省份施工需要互通北京54、西安80和WGS84坐標，七參數轉換器提供全過程誤差評估。',
        third: '<strong>遙感與無人機</strong>：航攝成果往往以WGS84輸出，匯入地方高斯-克呂格投影前需要高精度七參數轉換。',
        fourth: '<strong>自然資源確權</strong>：歷史界樁坐標常使用舊大地基準，工具可將其可靠映射至CGCS2000便於登記與審查。'
    },
    tipTitle: '產品示意圖',
    logoAlt: '/seven-parameter-transformer-logo.png',
    tipContent: '該示意圖可被搜尋引擎抓取，用於在搜尋結果中展示七參數轉換器的富媒體摘要。',
    conclusion: '<p>從單點檢核到上萬筆批次處理，七參數轉換器都能輸出包含坐標殘差、RMSE、信心區間的報告。依託100%前端實現，敏感點坐標不會離開瀏覽器，滿足機密專案對資料落地的合規要求。</p>',
    faqTitle: '常見問題解答',
    faqs: {
        q1: {
            question: '七參數轉換器如何保證Bursa-Wolf七參數計算精度？',
            answer: '<p>工具採用最小平方共用點法解算七參數，並輸出殘差向量、Sigma0、95%信心區間。您可透過日誌對矩陣運算過程進行複核，確保Bursa-Wolf七參數精度滿足專案規範。</p>'
        },
        q2: {
            question: '批次CSV匯入時如何設定自訂分隔符？',
            answer: '<p>在「坐標資料輸入」區域調整分隔符欄位即可，七參數轉換器會依照新分隔符解析XYZ/BLH/ENH資料，同時保留點名或備註欄，便於後續匹配。</p>'
        },
        q3: {
            question: '能否透過七參數轉換器同時處理高斯-克呂格和UTM投影？',
            answer: '<p>可以，您只需在「投影/高程參數」中選擇對應模式並填寫中央經度、帶寬、尺度因子即可。轉換流程會先進行三維正算，再反算到目標投影坐標。</p>'
        },
        q4: {
            question: '共用點不足時如何取得七參數？',
            answer: '<p>若手頭共用點少於三個，可在「參數範本」中調用平台內建的範例參數，或輸入歷史專案的參考值，再透過現場採集的新點疊代更新。</p>'
        },
        q5: {
            question: '七參數轉換器是否支援地方獨立坐標系？',
            answer: '<p>支援。您可以在「自訂橢球參數」中輸入長半軸與扁率倒數，並結合自訂投影參數，實現對地方獨立坐標系的真實還原與互轉。</p>'
        }
    },
    tutorialTitle: '七參數轉換器操作指南',
    steps: {
        step1: {
            title: '選擇坐標系與投影模式',
            description: '首先選擇來源與目標坐標系統，並在投影參數區填寫中央經線、帶寬等資訊，確保與實測資料一致。'
        },
        step2: {
            title: '錄入或匯入坐標點',
            description: '可手動輸入單點XYZ/BLH/ENH，也可拖曳CSV/TXT批次匯入，必要時調整分隔符保持解析正確。'
        },
        step3: {
            title: '設定七參數',
            description: '若已知參數，直接填寫ΔX、ΔY、ΔZ、Rx、Ry、Rz與尺度；若未知，可在「共用點解算」中貼上點對並執行平差。'
        },
        step4: {
            title: '執行轉換並檢視日誌',
            description: '點擊「執行轉換」後，即時日誌會展示解析、正反算、旋轉、尺度改正等過程，便於追蹤問題。'
        },
        step5: {
            title: '評估精度',
            description: '結果面板展示RMSE、最大殘差與95%信心區間，若指標超限，可回到參數區調整或重新平差。'
        },
        step6: {
            title: '匯出成果與報告',
            description: '確認無誤後，將結果CSV與日誌一起匯出，用於資料歸檔或提交審查。'
        }
    },
    successTitle: '完成部署',
    successContent: '恭喜！您已掌握七參數轉換器的全部流程，現在可以在多源坐標融合專案中快速完成批次轉換並輸出專業級別的精度報告。',
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
    referencesTitle: '外部參考',
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