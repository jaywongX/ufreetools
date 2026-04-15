export default {
    name: 'ランダムIPジェネレーター - IPv4/IPv6アドレスをオンラインで生成',
    description: '無料のオンラインランダムIPジェネレーター。IPv4とIPv6アドレス、パブリックIPとプライベートIP、地域フィルタリング、バッチ生成、複数のエクスポート形式をサポート。プライバシー保護のため完全にフロントエンドで動作。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: 'IPアドレスを生成',
    loadSampleBtn: 'サンプルを読み込んで生成',
    clearAll: 'すべてクリア',
    noOutput: '生成結果がありません',
    preview: 'データプレビュー',
    
    ipVersionTitle: 'IPバージョン',
    ipv4: 'IPv4',
    ipv6: 'IPv6',
    bothVersions: '両方のバージョン',
    
    ipTypeTitle: 'IPタイプ',
    ipTypePublic: 'パブリックIP',
    ipTypePrivate: 'プライベートIP',
    ipTypeAny: '任意のタイプ',
    
    regionTitle: 'IP地域',
    allRegions: 'すべての地域',
    
    formatTitle: '出力形式',
    formatPlain: 'プレーンテキスト',
    formatList: 'リスト形式',
    
    optionsTitle: '追加オプション',
    includePort: 'ポート番号を含める',
    includeSubnet: 'サブネットマスクを含める',
    includeGeo: '地理情報を含める',
    
    batchTitle: 'バッチ生成',
    quantityLabel: '数量',
    quantityPlaceholder: '数量を入力（1-1000）',
    
    generating: '生成中...',
    generated: '生成完了',
    copySuccess: 'クリップボードにコピーしました',
    downloadSuccess: 'ダウンロード成功',
    invalidQuantity: '1-1000の間の数字を入力してください',
    
    resultCount: '{count}件のレコードを生成',
    resultSummary: '結果サマリー',
    showAll: 'すべて表示',
    collapse: '折りたたむ',
    
    exportTitle: 'エクスポート形式',
    exportJson: 'JSONエクスポート',
    exportCsv: 'CSVエクスポート',
    exportTxt: 'TXTエクスポート',
    copyBtn: 'コピー',
    downloadBtn: 'ダウンロード',
    viewDetails: '詳細を表示',
    
    regions: {
        US: 'アメリカ',
        EU: 'ヨーロッパ',
        AS: 'アジア',
        CN: '中国',
        JP: '日本',
        KR: '韓国',
        AU: 'オーストラリア',
        BR: 'ブラジル',
        IN: 'インド',
        RU: 'ロシア'
    },
    
    csv: {
        ip: 'IPアドレス',
        version: 'バージョン',
        port: 'ポート',
        subnet: 'サブネットマスク',
        country: '国',
        city: '都市',
        isp: 'ISP'
    }
};
