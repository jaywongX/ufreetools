export default {
  "name": "高斯投影正反算",
  "title": "高斯投影正反算",
  "description": "高斯投影座標與地理座標（經緯度）之間的互相轉換工具",
  "calculationType": "計算類型",
  "forward": "正算（經緯度→高斯座標）",
  "inverse": "反算（高斯座標→經緯度）",
  "ellipsoidParameters": "橢球參數",
  "ellipsoidType": "橢球體類型",
  "centralMeridian": "中央子午線（度）",
  "a": "長半軸",
  "f": "扁率",
  "projectionParameters": "投影帶參數",
  "projectionType": "投影帶類型",
  "3degree": "3度帶",
  "6degree": "6度帶",
  "zoneNumber": "帶號",
  "forwardInput": "輸入經緯度",
  "latitude": "緯度",
  "longitude": "經度",
  "inverseInput": "輸入高斯座標",
  "x": "X座標（北向）",
  "y": "Y座標（東向）",
  "calculate": "計算",
  "results": "計算結果",
  "dms": "度分秒格式",
  "batchProcessing": "批次處理",
  "inputFormat": "輸入格式",
  "batchForwardFormat": "每行一組經緯度，格式：緯度,經度",
  "batchInverseFormat": "每行一組座標，格式：X座標,Y座標",
  "processBatch": "批次計算",
  "batchResults": "批次結果",
  "copyAll": "複製全部",
  "downloadCSV": "下載CSV",
  "copySuccess": "複製成功",
  "copyFailed": "複製失敗",
  "clear": "清空",
  "formula": "公式說明",
  "mapView": "地圖視圖",
  "dmsInput": "度分秒輸入",
  "dmsInputPlaceholder": "40°26'46\"N 79°58'56\"W",
  "parse": "解析",
  "dmsParseError": "度分秒格式解析錯誤",
  "invalidLatitude": "無效的緯度",
  "invalidLongitude": "無效的經度",
  "invalidX": "無效的X座標",
  "invalidY": "無效的Y座標",
  "copyToClipboard": "複製到剪貼簿",
  "autoCalculate": "自動計算",
  "formulaExplanation": "高斯投影公式說明",
  "uploadCSV": "上傳CSV",
  "exportResults": "導出結果",
  "exportAsGeoJSON": "導出為GeoJSON",
  "exportAsKML": "導出為KML",
  "exportAsTXT": "導出為TXT",
  "mapLayers": "地圖圖層",
  "standard": "標準",
  "satellite": "衛星",
  "terrain": "地形",
  "pointsOnMap": "地圖上的點",
  "clearPoints": "清除所有點",
  "unitSystem": "單位制",
  "metric": "米 (m)",
  "imperial": "英尺 (ft)",
  "customEllipsoid": "自定義橢球體",
  "saveCustomEllipsoid": "保存自定義橢球體",
  "formulaContent": `
    <p>高斯投影使用以下主要公式：</p>
    <h4>正算（經緯度→高斯座標）</h4>
    <p>將地理座標轉換為平面直角座標：</p>
    <ul>
      <li>X = m + 修正項</li>
      <li>Y = ν·cos(B)·l + 修正項</li>
    </ul>
    <h4>反算（高斯座標→經緯度）</h4>
    <p>將平面直角座標轉換為地理座標：</p>
    <ul>
      <li>B = μ + 修正項</li>
      <li>L = L₀₀ + 修正項</li>
    </ul>
    <p>其中：</p>
    <ul>
      <li>B：緯度</li>
      <li>L：經度</li>
      <li>L₀₀：中央子午線</li>
      <li>m：子午線弧長</li>
      <li>ν：卯酉圈曲率半徑</li>
    </ul>
  `,
  "close": "關閉",
  
  "ellipsoids": {
    "WGS84": "WGS84橢球體",
    "Krasovsky": "克拉索夫斯基橢球體",
    "CGCS2000": "CGCS2000橢球體",
    "GRS80": "GRS80橢球體",
    "Beijing54": "北京54橢球體",
    "Xian80": "西安80橢球體",
    "Custom": "自定義橢球體"
  },
  
  "about": {
    "title": "關於高斯投影",
    "description": "高斯投影（Gauss Projection）是一種保角橫軸橢圓柱投影，廣泛應用於測量和地圖製作中。它將地球橢球面上的點投影到平面上，是大中比例尺地形圖的常用投影方式。",
    "forwardTitle": "正算（經緯度→高斯座標）",
    "forwardDescription": "正算是將地理座標（經度、緯度）轉換為平面直角座標（X、Y）的過程。X軸指向北，Y軸指向東，原點為中央子午線與赤道的交點。",
    "inverseTitle": "反算（高斯座標→經緯度）",
    "inverseDescription": "反算是將平面直角座標（X、Y）轉換回地理座標（經度、緯度）的過程，是正算的逆運算。",
    "parametersTitle": "參數說明",
    "ellipsoidParam": "橢球體參數",
    "ellipsoidDescription": "描述地球形狀的數學模型，不同的大地測量系統採用不同的橢球體參數。常用的有WGS84、北京54、西安80、CGCS2000等。",
    "projectionParam": "投影帶參數",
    "projectionDescription": "高斯投影通常分為3度帶和6度帶。3度帶適用於大比例尺地形圖，6度帶適用於中小比例尺地形圖。帶號決定了中央子午線的位置。"
  },
  
  "loadExample": "加載示例",
  "customEllipsoidSaved": "自定義橢球體保存成功",
  
  "guide": {
    "title": "操作指南",
    "forwardTitle": "正算（經緯度→高斯座標）",
    "step1": "在頂部選擇\"正算\"計算類型",
    "step2": "選擇合適的橢球參數和投影帶",
    "step3": "輸入十進制格式的緯度和經度值（如 39.9042, 116.4074）或使用度分秒輸入",
    "step4": "結果會自動更新，或點擊\"計算\"按鈕執行計算",
    
    "inverseTitle": "反算（高斯座標→經緯度）",
    "step5": "在頂部選擇\"反算\"計算類型",
    "step6": "輸入X和Y座標（單位：米）",
    "step7": "查看十進制度和度分秒格式的經緯度結果",
    
    "batchTitle": "批次處理",
    "step8": "在批次處理區域輸入多組座標（每行一組）",
    "step9": "點擊\"批次計算\"一次性計算所有座標",
    "step10": "將結果導出為CSV或複製到剪貼簿",
    
    "mapTitle": "地圖交互",
    "step11": "點擊地圖添加點位並自動填充輸入值",
    "step12": "使用下拉菜單切換不同的地圖圖層",
    "step13": "將點位導出為GeoJSON、KML或TXT格式，以便在其他應用中使用"
  },
  "gaussianProjectionPoints": "高斯投影點位",
  "point": "點",
  "gaussianProjection": "高斯投影",
  "supportedFormats": "支援：CSV、TXT、Excel",
  "excelExportNotice": "Excel導出已準備，可直接在Excel中打開此文件。",
  "excelProcessNotice": "暫不完全支援Excel處理，建議使用CSV格式獲得最佳效果。",
  "exportAsCSV": "導出為CSV",
  "exportAsExcel": "導出為Excel",
  "excelExportSuccess": "Excel文件導出成功",
  "excelExportFailed": "Excel導出失敗，已退回到CSV格式",
  "excelImportSuccess": "Excel文件導入成功",
  "excelImportFailed": "Excel導入失敗，請嘗試CSV格式",
  "units": {
    "metric": "米 (m)",
    "km": "千米 (km)",
    "imperial": "英尺 (ft)",
    "miles": "英里 (mi)"
  },
  "resetView": "重置地圖視角",
  "pointsTotal": "個點",
  "currentPoint": "當前結果",
  "article": {
    "title": "高斯投影計算器：地理座標與平面座標互轉工具",
    "introTitle": "什麼是高斯投影及為何需要此工具",
    "introPara1": "<strong>高斯投影計算器</strong>（又稱橫軸墨卡托投影）是測量工程師、製圖專家、GIS專業人員以及任何使用地理信息系統工作的人的必備工具。這款強大的座標轉換工具允許您使用高斯投影方法在地理座標（緯度和經度）與平面直角座標（X和Y）之間無縫轉換。",
    "introPara2": "我們的<strong>高斯投影轉換工具</strong>可以高精度處理正算（地理座標轉平面座標）和反算（平面座標轉地理座標）計算。它支援多種橢球模型，包括WGS84、CGCS2000、克拉索夫斯基（北京54）等。該工具自動應用適當的數學公式和校正項，確保您的測量和製圖項目獲得準確的座標轉換。",
    
    "scenariosTitle": "高斯投影計算的實際應用場景",
    "scenario1": "<strong>測量與土地管理：</strong>測量師使用高斯投影轉換將GPS座標轉換為當地平面座標系統，用於準確的土地測量、財產邊界確定和建設規劃。",
    "scenario2": "<strong>地形圖繪製：</strong>製圖師和地圖專業人員依靠高斯投影創建精確的地形圖，保持角度關係並最小化特定區域的變形。",
    "scenario3": "<strong>GIS數據整合：</strong>GIS分析師使用高斯投影計算將來自不同源且具有不同座標系統的數據整合到統一的參考框架中進行空間分析。",
    "scenario4": "<strong>工程項目：</strong>土木工程師和建設團隊採用高斯投影進行基礎設施設計，確保道路、橋樑、隧道和公用設施相對於現有特徵的精確定位。",
    "scenario5": "<strong>軍事與國防：</strong>軍事行動利用高斯投影座標進行戰術規劃、導航和目標定位，滿足精確定位需求。",
    "scenariosConclusion": "<strong>高斯投影計算</strong>的多功能性使其在眾多需要精確空間定位的專業領域中不可或缺。我們的工具將這一複雜的數學過程簡化為簡單、直觀的界面，既適合專業人士使用，也適合初學者。",
    
    "faqTitle": "關於高斯投影的常見問題",
    "faq1q": "高斯投影和UTM有什麼區別？",
    "faq1a": "高斯投影是通用橫軸墨卡托（UTM）系統建立的數學基礎。主要區別包括：<ul><li>UTM使用標準化分帶系統，全球採用6度帶和特定參數</li><li>高斯投影更靈活，允許自定義中央子午線和帶寬（3度帶或6度帶）</li><li>UTM包括標準的500,000米假東偏移和0.9996比例因子</li><li>我們的<strong>高斯投影計算器</strong>在橢球參數方面允許比典型UTM計算器更多的自定義選項</li></ul>",
    
    "faq2q": "我應該為高斯投影計算選擇哪種橢球模型？",
    "faq2a": "橢球體的選擇取決於您的地理區域和使用的座標系統標準：<ul><li><strong>WGS84：</strong>與GPS系統和國際測繪全球通用</li><li><strong>CGCS2000：</strong>中國自2000年以來的官方座標系統</li><li><strong>克拉索夫斯基/北京54：</strong>歷史上在中國和東歐部分地區使用</li><li><strong>西安80：</strong>CGCS2000之前使用的中國國家標準</li></ul>對於大多數現代應用，推薦使用WGS84或CGCS2000，除非您專門處理需要不同橢球體的遺留數據。我們的<strong>高斯投影轉換工具</strong>支援所有這些模型及更多。",
    
    "faq3q": "該工具提供的高斯投影計算精度如何？",
    "faq3a": "我們的<strong>高斯投影計算器</strong>實現了完整的數學模型並包含適當的校正項，以確保高精度。對於大多數實際應用，該工具達到亞毫米精度，超過了典型測量和製圖項目的要求。精度取決於橢球參數的正確輸入和正確的分帶指定。對於極高精度的大地測量工作（亞毫米要求），可能需要具有額外校正項的專業軟件。",
    
    "faq4q": "我可以使用這個高斯投影工具進行批次座標處理嗎？",
    "faq4a": "是的，我們的<strong>高斯投影轉換器</strong>包含完整的批次處理功能。您可以：<ul><li>輸入多組座標對（緯度/經度或X/Y）</li><li>上傳包含座標數據的CSV、TXT或Excel文件</li><li>同時處理數百或數千個點</li><li>以各種格式導出結果，包括CSV、Excel、GeoJSON、KML和TXT</li></ul>這使得該工具非常適合處理大型數據集的項目，單獨處理這些數據會非常耗時。",
    
    "faq5q": "高斯投影中的3度帶和6度帶是什麼？",
    "faq5a": "高斯投影將地球分成經度帶以最小化變形：<ul><li><strong>3度帶：</strong>較窄的分帶提供更高的精度和更少的變形，通常用於大比例尺地圖繪製和詳細測量。帶號範圍從1到120。</li><li><strong>6度帶：</strong>較寬的分帶覆蓋更大的區域，邊緣處的變形稍大，常用於區域地圖繪製和UTM座標。帶號範圍從1到60。</li></ul>我們的<strong>高斯投影計算工具</strong>支援這兩種分帶系統，並根據您的分帶選擇自動計算中央子午線。",
    
    "tutorialTitle": "使用高斯投影計算器的分步指南",
    "forwardCalcTitle": "正算（地理座標轉高斯座標）",
    "step1": "<strong>選擇計算類型：</strong>在工具頂部的計算類型選項中選擇\"正算\"。",
    "step2": "<strong>選擇橢球參數：</strong>根據您的座標系統要求，從下拉菜單中選擇適當的橢球體類型（WGS84、CGCS2000、北京54等）。",
    "step3": "<strong>設置投影參數：</strong>選擇3度帶或6度帶，並輸入帶號。中央子午線將自動計算，或者您可以根據需要手動輸入。",
    "step4": "<strong>輸入地理座標：</strong>以十進制度輸入緯度和經度值。您還可以使用DMS（度分秒）輸入字段輸入傳統表示法。",
    
    "inverseCalcTitle": "反算（高斯座標轉地理座標）",
    "step5": "<strong>選擇計算類型：</strong>選擇\"反算\"計算類型。",
    "step6": "<strong>配置橢球和投影：</strong>選擇與原始座標系統相同的橢球參數和投影設置。",
    "step7": "<strong>輸入平面座標：</strong>以米為單位輸入X（北向）和Y（東向）值。",
    "step8": "<strong>查看結果：</strong>計算出的緯度和經度將以十進制度和DMS格式顯示，便於參考。",
    
    "batchTitle": "批次處理多組座標",
    "step9": "<strong>準備數據：</strong>格式化座標對，每行一對（正算時為緯度,經度；反算時為X,Y）。您還可以使用\"上傳CSV\"按鈕從文件導入數據。",
    "step10": "<strong>處理批次數據：</strong>點擊\"批次計算\"按鈕一次性轉換所有座標。",
    "step11": "<strong>導出結果：</strong>使用\"複製全部\"或\"下載CSV\"按鈕保存轉換結果，以便在其他應用程序中使用。",
    
    "tutorialConclusion": "使用這款<strong>高斯投影計算器</strong>，您可以在地理座標和平面座標系統之間快速轉換座標，無需進行複雜的手動計算。該工具直觀的界面使專業級座標轉換對各層次的用戶都易於使用。",
    
    "relatedToolsTitle": "相關座標工具",
    "relatedTool1": "座標轉換器",
    "relatedTool1Desc": "在不同座標系統之間轉換座標，包括UTM、MGRS和各種國家網格。",
    "relatedTool2": "GPS軌跡回放",
    "relatedTool2Desc": "在交互式地圖上可視化和分析帶有座標數據的GPS軌跡。",
    
    "referencesTitle": "技術參考與資源",
    "reference1": "世界大地測量系統1984 (WGS84) - 國家地理空間情報局",
    "reference2": "橫軸墨卡托投影 - 維基百科",
    "reference3": "1983年平面座標系統 - 國家大地測量局"
  }
}