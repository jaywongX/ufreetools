export default {
  title: '線上LIDAR點雲檢視器 - 免費3D點雲資料視覺化工具',
  functionTitle: '工具功能介紹與應用場景',
  intro:
    '我們的<strong>線上LIDAR點雲檢視器</strong>是一款專業的3D點雲資料視覺化工具，支援多種點雲格式的線上檢視與分析。這款<strong>免費點雲檢視器</strong>基於WebGL技術，無需安裝任何軟體，即可在瀏覽器中實現高品質的3D點雲渲染。無論您是測繪工程師、建築師，還是地理資訊系統專家，這款<strong>LIDAR資料檢視器</strong>都能滿足您的專業需求。',
  useCasesTitle: '主要應用場景',
  useCases: [
    '測繪工程：檢視與分析雷射雷達掃描資料，進行地形測量與建築物測繪',
    '建築設計：可視化建築物點雲資料，輔助建築資訊模型（BIM）工作流程',
    '城市規劃：分析城市3D模型資料，支援智慧城市建設與規劃決策',
    '林業調查：處理森林點雲資料，進行植被覆蓋度與生物量評估',
    '考古研究：檢視考古遺址的3D掃描資料，用於文物保護與研究',
    '地質勘探：分析地質構造點雲資料，支援礦產勘探與地質災害評估',
    '自動駕駛：檢視車載雷射雷達資料，進行路徑規劃與障礙物偵測',
    '工業檢測：分析工業設備的3D掃描資料，用於品質控制與缺陷檢測'
  ],
  tipTitle: '專業提示',
  tipContent:
    '我們的點雲檢視器支援LAS、XYZ、PLY、PCD等主流格式，提供多種著色模式與互動控制，協助您從不同角度深入分析點雲資料。',
  conclusion:
    '透過使用我們的<strong>線上點雲視覺化工具</strong>，您可以快速預覽與分析各類LIDAR資料，提高工作效率。這款<strong>3D點雲檢視器</strong>完全免費並重視隱私，所有處理皆在本地瀏覽器完成。',
  faqTitle: '常見問題解答',
  faqs: [
    {
      question: '這個LIDAR點雲檢視器支援哪些檔案格式？',
      answer:
        '我們的<strong>點雲檢視器</strong>支援多種主流格式，包括LAS（雷射雷達標準格式）、XYZ（ASCII點雲格式）、PLY（多邊形檔案格式）、PCD（點雲資料格式）以及TXT。這些格式涵蓋大多數<strong>LIDAR資料處理</strong>與3D掃描應用情境。'
    },
    {
      question: '點雲檔案大小有無限制？',
      answer:
        '為確保良好的瀏覽器效能，我們建議上傳的<strong>點雲檔案</strong>大小不超過100MB。對於大型資料集，建議先進行抽稀或分塊處理。我們的<strong>線上點雲檢視器</strong>會自動最佳化渲染效能，確保流暢的3D視覺化體驗。'
    },
    {
      question: '如何調整點雲的顯示效果？',
      answer:
        '我們的<strong>3D點雲視覺化工具</strong>提供多種顯示選項：您可以調整點大小、選擇不同的著色模式（高程、強度、分類、RGB）、控制點雲密度，並可啟用動畫效果。這些功能能幫助您更好地分析<strong>LIDAR掃描資料</strong>。'
    },
    {
      question: '我的點雲資料是否安全？',
      answer:
        '絕對安全！我們的<strong>線上LIDAR檢視器</strong>採用完全本地處理模式，您的<strong>點雲資料</strong>不會上傳至任何伺服器。所有檔案解析、渲染與分析皆在您的瀏覽器中完成，確保資料隱私與安全，特別適合敏感的測繪資料與商業專案。'
    },
    {
      question: '可以匯出處理後的點雲影像嗎？',
      answer:
        '可以！我們的<strong>點雲視覺化工具</strong>支援將目前視圖匯出為高品質PNG影像。您可以保存不同角度與著色模式的點雲截圖，用於報告、簡報或進一步的<strong>點雲資料分析</strong>。'
    }
  ],
  tutorialTitle: '使用教學',
  steps: [
    {
      title: '選擇點雲檔案',
      description:
        '點擊「選擇檔案」或將您的<strong>LIDAR點雲檔案</strong>直接拖曳到上傳區域。支援的<strong>3D點雲資料</strong>格式包含LAS、XYZ、PLY、PCD與TXT。',
      note: '建議檔案小於100MB以獲得最佳效能'
    },
    {
      title: '等待檔案解析',
      description:
        '系統會自動解析您的<strong>點雲檔案</strong>，顯示解析進度與檔案資訊。解析完成後，點雲資料會自動載入3D檢視器。',
      note: '解析時間取決於檔案大小與複雜度'
    },
    {
      title: '3D導覽控制',
      description:
        '使用滑鼠進行3D導覽：<strong>左鍵拖曳</strong>旋轉視角、<strong>右鍵拖曳</strong>平移視圖、<strong>滾輪</strong>縮放。這些直覺式操作可讓您從任意角度查看<strong>點雲資料</strong>。',
      note: '行動裝置支援觸控手勢'
    },
    {
      title: '調整顯示設定',
      description:
        '在右側控制面板調整顯示參數：選擇著色模式（高程、強度、分類、RGB）、調整點大小與密度、啟用或關閉動畫效果。這些設定有助於更有效地分析<strong>LIDAR資料</strong>。',
      note: '不同著色模式適用於不同的分析需求'
    },
    {
      title: '查看統計資訊',
      description:
        '在資訊面板查看詳細的<strong>點雲統計資訊</strong>，包括點的總數、座標範圍、檔案格式等。這些資訊對於<strong>點雲資料品質評估</strong>十分重要。',
      note: '統計資訊會即時更新'
    },
    {
      title: '匯出結果',
      description:
        '當您滿意目前視圖後，點擊「匯出影像」按鈕，將<strong>3D點雲視覺化</strong>結果保存為PNG影像，用於報告或後續分析。',
      note: '匯出的影像會保留目前的視角與顯示設定'
    }
  ],
  successTitle: '操作成功！',
  successContent:
    '恭喜！您已成功掌握LIDAR點雲檢視器的使用方法，現在即可高效率地進行3D點雲視覺化與分析工作。',
  relatedToolsTitle: '相關工具推薦',
  relatedTools: [
    {
      name: '座標系統轉換器',
      description:
        '使用ML5，在不同座標系統之間轉換地理座標，包括WGS-84、GCJ-02、BD-09、Web墨卡托與UTM',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'GPS軌跡回放',
      description: '可視化並回放多種檔案格式（GPX、KML、GeoJSON、CSV）的GPS軌跡。',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: '高斯投影正反算',
      description: '提供高斯投影座標與地理座標（經緯度）之間的相互轉換工具',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    }
  ],
  referencesTitle: '參考資源',
  references: [
    {
      name: 'ASPRS LAS格式規範',
      description: '美國攝影測量與遙感學會發布的LAS格式官方標準',
      url: 'https://www.asprs.org/divisions-committees/lidar-division/laser-las-file-format-exchange-activities'
    },
    {
      name: 'WebGL官方文件',
      description: 'Web圖形函式庫的官方技術文件與最佳實務',
      url: 'https://www.khronos.org/webgl/'
    },
    {
      name: 'Point Cloud Library (PCL)',
      description: '開源點雲處理函式庫的官方文件與教學',
      url: 'https://pointclouds.org/'
    }
  ]
};