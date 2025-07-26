export default {
  name: 'ガウス投影変換',
  title: 'ガウス投影変換',
  description: 'ガウス投影座標と地理座標（経緯度）間の相互変換ツール',
  calculationType: '計算タイプ',
  forward: '正変換（経緯度→ガウス座標）',
  inverse: '逆変換（ガウス座標→経緯度）',
  ellipsoidParameters: '楕円体パラメータ',
  ellipsoidType: '楕円体タイプ',
  centralMeridian: '中央子午線（度）',
  a: '長半径',
  f: '扁平率',
  projectionParameters: '投影帯パラメータ',
  projectionType: '投影帯タイプ',
  '3degree': '3度帯',
  '6degree': '6度帯',
  zoneNumber: '帯番号',
  forwardInput: '経緯度入力',
  latitude: '緯度',
  longitude: '経度',
  inverseInput: 'ガウス座標入力',
  x: 'X座標（北向き）',
  y: 'Y座標（東向き）',
  calculate: '計算',
  results: '計算結果',
  dms: '度分秒形式',
  batchProcessing: 'バッチ処理',
  inputFormat: '入力形式',
  batchForwardFormat: '1行に1組の経緯度、形式：緯度,経度',
  batchInverseFormat: '1行に1組の座標、形式：X座標,Y座標',
  processBatch: 'バッチ計算',
  batchResults: 'バッチ結果',
  copyAll: 'すべてコピー',
  downloadCSV: 'CSVダウンロード',
  copySuccess: 'コピー成功',
  copyFailed: 'コピー失敗',
  clear: 'クリア',
  formula: '公式説明',
  mapView: 'マップビュー',
  dmsInput: '度分秒入力',
  dmsInputPlaceholder: '40°26\'46"N 79°58\'56"W',
  parse: '解析',
  dmsParseError: '度分秒形式の解析エラー',
  invalidLatitude: '無効な緯度',
  invalidLongitude: '無効な経度',
  invalidX: '無効なX座標',
  invalidY: '無効なY座標',
  copyToClipboard: 'クリップボードにコピー',
  autoCalculate: '自動計算',
  formulaExplanation: 'ガウス投影公式説明',
  uploadCSV: 'CSVアップロード',
  exportResults: '結果をエクスポート',
  exportAsGeoJSON: 'GeoJSONとしてエクスポート',
  exportAsKML: 'KMLとしてエクスポート',
  exportAsTXT: 'TXTとしてエクスポート',
  mapLayers: 'マップレイヤー',
  standard: '標準',
  satellite: '衛星',
  terrain: '地形',
  pointsOnMap: 'マップ上のポイント',
  clearPoints: 'すべてのポイントをクリア',
  unitSystem: '単位系',
  metric: 'メートル (m)',
  imperial: 'フィート (ft)',
  customEllipsoid: 'カスタム楕円体',
  saveCustomEllipsoid: 'カスタム楕円体を保存',

  formulaContent: `
    <p>ガウス投影は以下の主要な公式を使用します：</p>
    <h4>正変換（経緯度→ガウス座標）</h4>
    <p>地理座標を平面直角座標に変換：</p>
    <ul>
      <li>X = m + 補正項</li>
      <li>Y = ν·cos(B)·l + 補正項</li>
    </ul>
    <h4>逆変換（ガウス座標→経緯度）</h4>
    <p>平面直角座標を地理座標に変換：</p>
    <ul>
      <li>B = μ + 補正項</li>
      <li>L = L₀ + 補正項</li>
    </ul>
    <p>ここで：</p>
    <ul>
      <li>B：緯度</li>
      <li>L：経度</li>
      <li>L₀：中央子午線</li>
      <li>m：子午線弧長</li>
      <li>ν：卯酉圏曲率半径</li>
    </ul>
  `,

  close: '閉じる',

  ellipsoids: {
    WGS84: 'WGS84楕円体',
    Krasovsky: 'クラソフスキー楕円体',
    CGCS2000: 'CGCS2000楕円体',
    GRS80: 'GRS80楕円体',
    Beijing54: '北京54楕円体',
    Xian80: '西安80楕円体',
    Custom: 'カスタム楕円体'
  },

  about: {
    title: 'ガウス投影について',
    description: 'ガウス投影（Gauss Projection）は、保角横軸楕円柱投影の一種で、測量や地図作成に広く使用されています。地球の楕円体表面上の点を平面に投影するもので、大中縮尺の地形図によく使用される投影法です。',
    forwardTitle: '正変換（経緯度→ガウス座標）',
    forwardDescription: '正変換は、地理座標（経度、緯度）を平面直角座標（X、Y）に変換するプロセスです。X軸は北向き、Y軸は東向きで、原点は中央子午線と赤道の交点です。',
    inverseTitle: '逆変換（ガウス座標→経緯度）',
    inverseDescription: '逆変換は、平面直角座標（X、Y）を地理座標（経度、緯度）に戻すプロセスで、正変換の逆演算です。',
    parametersTitle: 'パラメータ説明',
    ellipsoidParam: '楕円体パラメータ',
    ellipsoidDescription: '地球の形状を表す数学モデルで、異なる測地系では異なる楕円体パラメータを採用しています。一般的なものにはWGS84、北京54、西安80、CGCS2000などがあります。',
    projectionParam: '投影帯パラメータ',
    projectionDescription: 'ガウス投影は通常、3度帯と6度帯に分けられます。3度帯は大縮尺の地形図に適し、6度帯は中小縮尺の地形図に適しています。帯番号は中央子午線の位置を決定します。'
  },

  loadExample: '例を読み込む',
  customEllipsoidSaved: 'カスタム楕円体が正常に保存されました',

  guide: {
    title: '操作ガイド',
    forwardTitle: '正変換（経緯度→ガウス座標）',
    step1: '上部で「正変換」計算タイプを選択',
    step2: '適切な楕円体パラメータと投影帯を選択',
    step3: '十進法形式の緯度と経度値を入力（例：39.9042, 116.4074）または度分秒入力を使用',
    step4: '結果は自動的に更新されるか、「計算」ボタンをクリックして計算を実行',
    
    inverseTitle: '逆変換（ガウス座標→経緯度）',
    step5: '上部で「逆変換」計算タイプを選択',
    step6: 'XとY座標を入力（単位：メートル）',
    step7: '十進法度と度分秒形式の経緯度結果を確認',
    
    batchTitle: 'バッチ処理',
    step8: 'バッチ処理エリアに複数組の座標を入力（1行に1組）',
    step9: '「バッチ計算」をクリックしてすべての座標を一度に計算',
    step10: '結果をCSVとしてエクスポートするか、クリップボードにコピー',
    
    mapTitle: 'マップ操作',
    step11: 'マップをクリックしてポイントを追加し、入力値を自動入力',
    step12: 'ドロップダウンメニューを使用して異なるマップレイヤーを切り替え',
    step13: 'ポイントをGeoJSON、KML、またはTXT形式でエクスポートして、他のアプリケーションで使用'
  },

  gaussianProjectionPoints: 'ガウス投影ポイント',
  point: 'ポイント',
  gaussianProjection: 'ガウス投影',
  supportedFormats: '対応：CSV、TXT、Excel',
  excelExportNotice: 'Excelエクスポートの準備ができました。このファイルをExcelで直接開くことができます。',
  excelProcessNotice: 'Excel処理は完全にはサポートされていません。最良の結果を得るにはCSV形式を使用することをお勧めします。',
  exportAsCSV: 'CSVとしてエクスポート',
  exportAsExcel: 'Excelとしてエクスポート',
  excelExportSuccess: 'Excelファイルのエクスポートに成功しました',
  excelExportFailed: 'Excelエクスポートに失敗しました。CSV形式に戻りました',
  excelImportSuccess: 'Excelファイルのインポートに成功しました',
  excelImportFailed: 'Excelインポートに失敗しました。CSV形式を試してください',

  units: {
    metric: 'メートル (m)',
    km: 'キロメートル (km)',
    imperial: 'フィート (ft)',
    miles: 'マイル (mi)'
  },

  resetView: 'マップビューをリセット',
  pointsTotal: 'ポイント',
  currentPoint: '現在の結果'
};