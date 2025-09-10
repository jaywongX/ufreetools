export default {
    title: 'GNSS時間轉換器使用指南 - GPS週秒與UTC時間線上轉換工具',
    functionTitle: '什麼是GNSS時間轉換器及其用途？',
    intro: '我們的<strong>GNSS時間轉換器</strong>是一款專業的線上工具，可以實現UTC時間與GPS週秒、北斗時間之間的相互轉換。該工具支援儒略日計算、批量處理和時間軸視覺化功能，適用於衛星導航定位、測繪工程、科學研究等領域。使用我們的<strong>GPS週秒轉換工具</strong>，您可以快速準確地完成各種GNSS時間系統的轉換需求。',

    useCasesTitle: 'GNSS時間轉換器的常見應用場景',
    useCases: [
        '衛星導航定位數據處理中的時間同步',
        'GNSS接收機數據解析和後處理',
        '測繪工程中的精密時間轉換',
        '航空航天領域的時間基準統一',
        '科研項目中的多系統時間數據融合',
        '北斗導航系統與GPS系統數據對比分析'
    ],

    tipTitle: '專業提示：',
    tipContent: '在進行高精度時間轉換時，請注意不同GNSS系統之間的閏秒差異。GPS時間與UTC時間存在固定閏秒差，北斗時間與UTC時間也存在不同的閏秒差，這些差異會隨時間推移而變化。',

    conclusion: '<strong>GNSS時間轉換器</strong>對衛星導航工程師、測繪專業人員、科研工作者以及任何需要處理GNSS時間數據的人員都非常有用。通過使用我們的工具，您可以節省大量手動計算時間，避免轉換錯誤，並提高工作效率。我們的工具使GNSS時間轉換過程變得簡單高效，無需安裝任何專業軟體。',

    faqTitle: '常見問題解答',
    faqs: [
        {
            question: '什麼是GPS週和週內秒？',
            answer: 'GPS週是從1980年1月6日0時0分0秒開始計算的連續週數，週內秒（TOW）是一週內從週日0時開始的秒數。GPS時間系統採用原子時秒長作為時間基準，啟動後不跳秒，保持時間的連續性。這種表示方法在衛星導航中廣泛使用，因為它可以避免因閏秒調整帶來的複雜性。'
        },
        {
            question: 'UTC時間與GPS時間有什麼區別？',
            answer: 'UTC（協調世界時）是國際通用的時間標準，會不定期增加閏秒以適應地球自轉速度變化。GPS時間基於原子時，從1980年1月6日起與UTC時間對齊，但不進行閏秒調整。因此，GPS時間與UTC時間之間存在整秒差，這個差值會隨著閏秒的增加而增大。截至當前，GPS時間比UTC時間快約18秒。'
        },
        {
            question: '如何批量轉換多個時間數據？',
            answer: '使用我們的<strong>批量時間轉換功能</strong>，您可以在批量輸入框中按行輸入多個時間數據。根據選擇的輸入模式（日期時間、GPS時間或北斗時間），按相應格式輸入數據，每行一個記錄。例如，GPS時間格式為"週,週內秒"，如"2234,172800"。輸入完成後點擊"轉換時間"按鈕，系統將自動轉換所有數據。'
        },
        {
            question: '什麼是儒略日？為什麼需要計算它？',
            answer: '儒略日是一種連續計日法，從公元前4713年1月1日12時開始計算的天數，廣泛用於天文學和航天領域。儒略日提供了一種統一的時間表示方法，便於跨系統時間轉換和長時間跨度計算。在GNSS應用中，儒略日常用於軌道計算和時間同步等場景。'
        },
        {
            question: '時間軸視覺化功能有什麼作用？',
            answer: '時間軸視覺化功能可以在圖形界面上直觀顯示所有轉換時間點的相對位置關係。通過查看時間軸，您可以快速了解不同時間點之間的間隔和分佈情況，有助於發現數據中的異常值或規律性。這個功能特別適用於分析長時間序列的GNSS數據。'
        }
    ],

    tutorialTitle: '如何使用GNSS時間轉換器',
    steps: [
        {
            title: '選擇輸入模式',
            description: '在左側輸入區域頂部選擇合適的輸入模式：日期時間、GPS時間或北斗時間。根據您的數據類型選擇對應的模式，以便正確解析輸入數據。',
            note: '日期時間模式支援標準的ISO格式，如2023-01-01T00:00:00。'
        },
        {
            title: '輸入時間數據',
            description: '在對應輸入框中輸入時間數據。您可以輸入單個時間點，也可以在批量輸入框中輸入多個時間點，每行一個記錄。系統支援多種輸入格式以適應不同需求。',
            note: '批量輸入時，請確保每行數據格式一致，避免轉換錯誤。'
        },
        {
            title: '設置輸出格式',
            description: '在參數設置區域選擇輸出時間格式。您可以選擇ISO標準格式（YYYY-MM-DD HH:mm:ss）或自定義格式。根據後續使用需求選擇合適的格式。',
            note: 'ISO格式便於程序處理，自定義格式便於人工閱讀。'
        },
        {
            title: '執行轉換',
            description: '點擊<strong>"轉換時間"</strong>按鈕開始轉換。系統將根據您選擇的輸入模式和輸入的數據，自動計算並顯示UTC時間、GPS時間、北斗時間以及儒略日等信息。',
            note: '轉換過程通常在幾秒內完成，即使是大量數據也能快速處理。'
        },
        {
            title: '查看和導出結果',
            description: '轉換完成後，結果將顯示在右側輸出區域。您可以查看每個時間點的詳細轉換信息，使用時間軸視覺化功能查看時間分佈，或點擊"導出CSV"按鈕將結果保存為文件。',
            note: '點擊每個結果項的"複製"按鈕可以快速複製該條記錄的轉換結果。'
        }
    ],

    successTitle: '恭喜！',
    successContent: '您已成功學習如何使用我們的GNSS時間轉換器。現在您可以輕鬆完成UTC時間、GPS時間、北斗時間之間的相互轉換，用於衛星導航、測繪工程、科學研究等各種應用場景。',

    relatedToolsTitle: '您可能感興趣的相關工具',
    relatedTools: [
        {
            name: '坐標轉換器',
            description: '在不同坐標系之間轉換經緯度坐標，支援多種投影系統。',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'GPS軌跡回放',
            description: '上傳並視覺化GPS軌跡數據，支援多種文件格式。',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: '高斯投影計算',
            description: '進行高斯-克呂格投影正反算，支援3度帶和6度帶。',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: '圖幅分幅計算器',
            description: '根據經緯度坐標計算所在圖幅編號，支援多種比例尺。',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        }
    ],

    referencesTitle: '參考資源',
    references: [
        {
            name: '全球導航衛星系統時間基礎',
            description: '關於GNSS時間系統的詳細介紹',
            url: 'https://www.ngs.noaa.gov/CORS/GNSS-Time.shtml'
        },
        {
            name: 'GPS時間系統詳解',
            description: 'GPS時間系統的詳細介紹',
            url: 'https://zh.wikipedia.org/wiki/GPS%E6%97%B6%E9%97%B4'
        },
        {
            name: '北斗時間系統',
            description: '北斗導航系統時間基準說明',
            url: 'https://zh.wikipedia.org/wiki/%E5%8C%97%E6%96%97%E5%8D%AB%E6%98%9F%E5%AF%BC%E8%88%AA%E7%B3%BB%E7%BB%9F'
        }
    ]
}