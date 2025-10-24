export default {
    name: 'Excel重複削除ツール - オンラインスプレッドシートデータ重複削除器',
    description: '無料のオンラインExcel重複削除ツールで、xlsx/xls/csvファイルの重複削除をサポート。重複データをスマートに識別し、複数の重複削除ルールを提供し、バッチ処理をサポートし、ワンクリックでExcel/CSV形式にエクスポート',
    inputTitle: 'Excelファイルをアップロード',
    outputTitle: '重複削除結果',
    dragTip: 'Excelファイルをここにドラッグ＆ドロップするか、クリックしてアップロード',
    supported: '対応形式: XLSX, XLS, CSV',
    removeDuplicatesBtn: '重複削除を開始',
    downloadBtn: '結果をダウンロード',
    noOutput: '重複削除結果がありません',
    loadSample: 'サンプルデータを読み込む',
    preview: 'データプレビュー',
    clearAll: 'すべてクリア',
    originalData: '元データ',
    deleteFile: 'ファイルを削除',
    batchDownload: 'バッチダウンロード (ZIP)',
    exportFormat: 'エクスポート形式',
    dataQuality: 'データ品質',
    zoomIn: '拡大',
    zoomOut: '縮小',
    resetView: 'ビューをリセット',
    fullscreen: '全画面プレビュー',
    
    // 重複削除ルール設定
    duplicateRulesTitle: '重複削除ルール設定',
    ruleType: '重複削除タイプ',
    ruleTypes: {
        fullRow: '行全体の重複削除',
        singleColumn: '単一列の重複削除',
        multiColumn: '複数列組み合わせの重複削除'
    },
    selectedColumns: '列を選択',
    selectColumns: '重複削除する列を選択してください',
    caseSensitive: '大文字小文字を区別',
    trimSpaces: '前後の空白を削除',
    ignoreEmpty: '空値を無視',
    fuzzyMatch: 'あいまい一致',
    similarityThreshold: '類似度閾値',
    
    // データ統計
    statisticsTitle: 'データ統計',
    originalRows: '元の行数',
    duplicateRows: '重複行数',
    uniqueRows: '重複削除後の行数',
    duplicateRate: '重複率',
    
    // プレビューテーブル
    previewTitle: 'データプレビュー',
    showDuplicates: '重複項目を表示',
    showUnique: '一意項目を表示',
    highlightDuplicates: '重複項目をハイライト',
    
    // エクスポートオプション
    exportOptions: 'エクスポートオプション',
    includeHeaders: 'ヘッダーを含む',
    encoding: 'ファイルエンコーディング',
    delimiter: '区切り文字',
    
    // アクションボタン
    processBtn: 'データ処理',
    resetBtn: 'リセット',
    saveTemplate: 'テンプレートを保存',
    loadTemplate: 'テンプレートを読み込む',
    
    // テンプレート管理
    savedTemplates: '保存されたテンプレート',
    deleteTemplate: '削除',
    templateNamePrompt: 'テンプレート名を入力してください:',
    templateSaved: 'テンプレートが正常に保存されました!',
    deleteTemplateConfirm: 'このテンプレートを削除してもよろしいですか?',
    templateLoadError: 'テンプレートの読み込みに失敗しました:',
    
    // サンプルデータ
    sampleHeaders: {
        name: '名前',
        email: 'メール',
        phone: '電話',
        department: '部署'
    },
    sampleData: {
        zhangsan: '田中太郎',
        lisi: '佐藤花子',
        wangwu: '鈴木一郎',
        zhaoliu: '高橋美咲',
        techDept: '技術部',
        salesDept: '営業部',
        hrDept: '人事部',
        financeDept: '財務部'
    },
    
    // エクスポート関連
    exportSheetName: '重複削除結果',
    exportFileName: '重複削除結果',
    jsonMetadataTitle: 'Excel重複削除結果',
    columnNumber: '列 {number}',
    
    // エラーメッセージ
    processError: 'ファイル処理中にエラーが発生しました。ファイル形式を確認してください'
};