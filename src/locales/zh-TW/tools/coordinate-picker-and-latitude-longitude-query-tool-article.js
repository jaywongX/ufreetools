export default {
  title: '座標拾取與經緯度查詢工具：線上經緯度查詢與EPSG投影座標轉換教學',
  functionTitle: '什麼是座標拾取與經緯度查詢工具？有哪些核心功能',
  intro: '我們的<strong>座標拾取與經緯度查詢工具</strong>整合了地圖點擊取點、<strong>經緯度查詢</strong>、<strong>EPSG投影座標轉換</strong>與地名搜尋定位等能力，旨在快速、準確地完成座標選取與座標格式匯出。透過此線上工具，您可以在瀏覽器中完成從地名到座標、從WGS84到多種EPSG投影座標的轉換，顯著提升測繪標註、選址分析與出圖製表效率。',
  useCasesTitle: '典型應用場景：座標拾取與經緯度查詢工具如何解決問題',
  useCases: [
    '新媒體選址與打卡點製作：快速拾取經緯度並匯出用於地圖視覺化',
    'GIS 製圖與外業採集：點擊取點後以 CSV/GeoJSON 匯出，便於ArcGIS/QGIS匯入',
    '政務與地產選址：地名搜尋→座標，一鍵採集候選地塊位置',
    '物流與運維定位：記錄多個設備/工單座標並集中匯出',
    '教育教學與科研：演示WGS84與EPSG投影座標差異及轉換',
    '旅遊與戶外導航：儲存景點、營地的經緯度與投影座標',
    '開發與測試：前端/後端聯調需要的精確經緯度樣本',
    '多地區內容標註：統一格式座標檔案，利於跨區域資料整合'
  ],
  tipTitle: '專業提示：',
  tipContent: '匯出為CSV時，建議包含欄位：name, lat, lon, epsg, x, y, time，便於後續在QGIS/Excel中批次處理與追溯。',
  conclusion: '這款<strong>座標拾取與經緯度查詢工具</strong>面向測繪、視覺化、開發與運維等多種場景，支援<strong>EPSG投影座標轉換</strong>、地名搜尋與批量匯出。透過線上方式完成經緯度查詢與座標轉換，可顯著降低軟體安裝成本並提升協作效率。',
  faqTitle: '常見問題解答（FAQ）',
  faqs: [
    {
      question: '座標拾取與經緯度查詢工具支援哪些EPSG投影座標轉換？',
      answer: '工具內建 WGS84（EPSG:4326）、Web墨卡托（EPSG:3857）與 CGCS2000（EPSG:4490）轉換，並支援輸入自訂 PROJ4 定義。點擊地圖後會同步顯示經緯度與所選 EPSG 投影座標。'
    },
    {
      question: '如何將地名快速轉換為經緯度座標並標註到地圖？',
      answer: '在搜尋框輸入地名後，使用地名搜尋→座標功能檢索 Nominatim 結果，選擇候選項即可定位並新增為標註，隨後匯出 CSV 或 GeoJSON。'
    },
    {
      question: '經緯度查詢結果如何複製或批量匯出座標檔案？',
      answer: '右側結果區域支援一鍵複製全部座標文字，並可選擇 CSV 或 GeoJSON 格式匯出檔案，適配大多數 GIS/視覺化平台。'
    },
    {
      question: '座標拾取工具是否支援行動端與平板設備？',
      answer: '是的，介面採用響應式網格佈局，<strong>經緯度查詢</strong>、標註與匯出操作在手機和平板上同樣流暢。'
    },
    {
      question: '使用EPSG投影座標轉換時需要注意什麼？',
      answer: '不同EPSG基準與投影有差異。若目標座標系未內建，請提供正確的 PROJ4 定義，轉換前核對單位（經緯度為度，投影常為公尺）。'
    }
  ],
  tutorialTitle: '如何使用座標拾取與經緯度查詢工具：詳細操作步驟',
  steps: [
    {
      title: '開啟工具並載入地圖',
      description: '進入工具頁面後地圖自動載入。若網路受限，請檢查外網存取或更換網路環境，以確保底圖與地名搜尋可用。',
      note: '地圖預設座標系為WGS84，經緯度單位為度。'
    },
    {
      title: '搜尋地名並定位',
      description: '在搜尋框輸入地名（支援多語言），點擊「搜尋」，從候選項中選擇目標位置並定位到地圖中心。',
      note: '候選項來自 OpenStreetMap Nominatim。'
    },
    {
      title: '點擊地圖拾取經緯度',
      description: '在地圖上點擊任意位置，即可自動記錄經緯度與所選EPSG投影座標，並在右側顯示到座標結果清單。',
      note: '支援多次點擊以標註多個點。'
    },
    {
      title: '切換或自訂EPSG投影',
      description: '在左側選擇常用座標系（4326/3857/4490），或填寫自訂PROJ4定義，工具會對後續取點即時轉換投影座標。',
      note: '切換座標系不會改變既有點的經緯度，只影響投影座標欄位。'
    },
    {
      title: '複製或匯出座標',
      description: '選擇匯出格式（CSV或GeoJSON），點擊「複製全部」或「匯出檔案」，即可將座標用於GIS/視覺化/開發等環節。',
      note: 'CSV適合Excel/QGIS批次處理，GeoJSON便於Web地圖與API使用。'
    },
    {
      title: '清理或繼續標註',
      description: '如需重新開始，可點擊「清除標註」。隨後繼續搜尋或取點，逐步完善座標清單。',
      note: '記得按需切換EPSG座標系以滿足不同專案要求。'
    }
  ],
  successTitle: '恭喜！',
  successContent: '你已學會使用座標拾取與經緯度查詢工具完成座標採集與EPSG投影座標轉換，接下來即可高效輸出用於GIS與視覺化的標準資料檔案。',
  relatedToolsTitle: '你可能感興趣的相關工具',
  relatedTools: [
    {
      name: '座標系統轉換器',
      description: '在不同座標系統之間轉換地理座標，包括WGS-84、GCJ-02、BD-09、Web墨卡托和UTM',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'GPS軌跡回放',
      description: '視覺化並回放來自各種檔案格式（GPX、KML、GeoJSON、CSV）的GPS軌跡。',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: '高斯投影正反算',
      description: '高斯投影座標與地理座標（經緯度）之間的互相轉換工具',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    },
    {
      name: 'LIDAR點雲檢視器',
      description: '免費線上LIDAR點雲檢視器，支援LAS、XYZ、PLY、PCD格式。提供三維視覺化、多種著色模式、互動式導航和資料分析功能',
      url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
    }
  ],
  referencesTitle: '參考資源',
  references: [
    {
      name: 'OpenStreetMap Nominatim',
      description: '地名搜尋與地理編碼服務',
      url: 'https://nominatim.org/'
    },
    {
      name: 'EPSG.io',
      description: '檢索EPSG座標參考系與PROJ4定義',
      url: 'https://epsg.io/'
    },
    {
      name: 'Leaflet 文件',
      description: '輕量級Web地圖庫',
      url: 'https://leafletjs.com/'
    },
    {
      name: 'Proj4 文件',
      description: '座標轉換庫說明',
      url: 'https://proj.org/apps/proj.html'
    }
  ]
}