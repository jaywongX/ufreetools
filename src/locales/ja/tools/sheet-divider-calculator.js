export default {
    name: '図幅分割計算機 - オンライン地図図幅番号照会ツール',
    description: '座標に基づいて図幅番号を計算し、複数の縮尺と投影方法をサポート',
    icon: 'map',
    tags: ['地図', '分割', '座標', '縮尺', '投影'],
    
    // ユーザーインターフェース
    ui: {
        title: '図幅分割計算機',
        subtitle: '座標に基づいて図幅番号を計算',
        inputTitle: '座標入力',
        outputTitle: '計算結果',
        
        // 座標入力
        latitudePlaceholder: '緯度（例：39.9042）',
        longitudePlaceholder: '経度（例：116.4074）',
        batchInputPlaceholder: 'バッチ入力：緯度,経度,説明（任意）\n例：39.9042,116.4074,北京\n40.7128,-74.0060,ニューヨーク',
        
        // ボタン
        calculateButton: '図幅を計算',
        clearButton: 'すべてクリア',
        loadSampleButton: 'サンプルデータを読み込む',
        exportExcelButton: 'Excelにエクスポート',
        exportPDFButton: 'PDFにエクスポート',
        
        // パラメータ設定
        parameterSettings: 'パラメータ設定',
        scaleLabel: '縮尺',
        zoneMethodLabel: 'ゾーン方式',
        threeDegreeZone: '3度ゾーン',
        sixDegreeZone: '6度ゾーン',
        
        // 結果表示
        resultColumns: {
            sheetNumber: '図幅番号',
            latitude: '緯度',
            longitude: '経度',
            scale: '縮尺',
            zone: 'ゾーン',
            centralMeridian: '中央子午線',
            description: '説明'
        },
        
        // 地図グリッド
        gridTitle: '地図グリッド',
        noResults: '表示する結果がありません',
        
        // メッセージ
        invalidCoordinates: '無効な座標です。入力を確認してください',
        calculationSuccess: '図幅が正常に計算されました',
        excelExportSuccess: 'データがExcelに正常にエクスポートされました',
        pdfExportSuccess: 'データがPDFに正常にエクスポートされました',
        exportFailed: 'エクスポートに失敗しました。もう一度お試しください',
        noDataToExport: 'エクスポートするデータがありません',
        
        // 説明
        singlePointDesc: '単一ポイント',
        batchPointDesc: 'バッチポイント',
        
        // エクスポートタイトル
        exportFileName: '図幅計算結果',
        exportTitle: '図幅計算結果'
    }
}