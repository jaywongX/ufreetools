export default {
    name: '数字から文字変換ツール - オンライン通貨金額テキストコンバーター',
    description: 'USD、EUR、GBP、INR、CNYを含む複数通貨をサポートする無料オンライン数字から文字変換ツール。小切手記入、契約金額、その他のシナリオのために数値金額を標準テキスト形式に変換',
    inputTitle: '数字入力',
    outputTitle: 'テキスト出力',
    numberInput: '数字を入力',
    numberPlaceholder: '数字を入力してください、例：1234.56',
    currencyType: '通貨タイプ',
    currencies: {
        USD: '米ドル (USD)',
        EUR: 'ユーロ (EUR)', 
        GBP: '英ポンド (GBP)',
        INR: 'インドルピー (INR)',
        CNY: '中国元 (CNY)'
    },
    convertBtn: '文字に変換',
    copyBtn: '結果をコピー',
    result: '変換結果',
    details: '詳細',
    originalNumber: '元の数字',
    currency: '通貨タイプ',
    integerPart: '整数部分',
    decimalPart: '小数部分',
    noOutput: '変換する数字を入力してください',
    invalidNumber: '有効な数字を入力してください',
    numberTooLarge: '数字が大きすぎます。1アンデシリオン未満の数字を入力してください',
    copySuccess: 'クリップボードにコピーしました',
    copyError: 'コピーに失敗しました。再試行してください'
};