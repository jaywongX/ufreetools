export default {
  name: 'シンプルお絵描きボード',
  description: 'オンライン描画ツール、自由な描画、色や筆のサイズ変更をサポート',

  // ツールバー
  tools: {
    brush: '筆',
    eraser: '消しゴム',
    clear: 'キャンバスをクリア',
    save: '画像を保存',
    undo: '元に戻す',
    redo: 'やり直す',
    apply: '適用'
  },

  // 設定
  settings: {
    brushSize: '筆のサイズ',
    color: '色',
    opacity: '不透明度',
    backgroundColor: '背景色'
  },

  // カラーピッカー
  colors: {
    black: '黒',
    white: '白',
    red: '赤',
    green: '緑',
    blue: '青',
    yellow: '黄',
    orange: 'オレンジ',
    purple: '紫',
    pink: 'ピンク',
    brown: '茶色',
    gray: 'グレー',
    custom: 'カスタムカラー'
  },

  // キャンバス設定
  canvas: {
    width: '幅',
    height: '高さ',
    resize: 'キャンバスサイズを調整',
    orientation: '向き',
    portrait: '縦向き',
    landscape: '横向き',
    square: '正方形'
  },

  // ヒントとメッセージ
  messages: {
    saveSuccess: '画像が保存されました',
    confirmClear: 'キャンバスをクリアしますか？保存されていない内容はすべて失われます。',
    unsupportedBrowser: 'お使いのブラウザはCanvasをサポートしていません。最新のブラウザをご使用ください。',
    fileNamePrompt: 'ファイル名を入力してください',
    defaultFileName: '私の作品'
  },

  // ツール紹介
  aboutTitle: 'シンプルお絵描きボードについて',

  aboutDescription: 'シンプルお絵描きボードは、直感的で使いやすいオンライン描画ツールで、自由に創造性を発揮して絵を描いたり創作したりすることができます。ちょっとした落書き、簡単なイラスト作成、アイデアの記録など、どのようなニーズにも対応します。',
  featuresTitle: '主な機能',
  feature1: '自由に描画でき、様々な色や筆のサイズをサポート',
  feature2: '消しゴム機能で、描画内容を簡単に修正',
  feature3: '元に戻す・やり直し機能で、ミスを簡単に修正',
  feature4: '筆の透明度を調整して、豊かな描画効果を作成',
  feature5: 'ワンクリックでキャンバスをクリアし、新たに創作を始める',
  feature6: '作品を画像形式で保存可能',
  howToUseTitle: '使い方',
  howToUseStep1: '1. 筆ツールと色を選択して描画を開始',
  howToUseStep2: '2. スライダーを使用して筆のサイズと不透明度を調整',
  howToUseStep3: '3. 修正が必要な場合は、消しゴムツールで内容を消去',
  howToUseStep4: '4. いつでも操作を元に戻したり、やり直したりできます',
  howToUseStep5: '5. 完了したら、保存ボタンをクリックして作品をダウンロード',
  tipsTitle: '使用のヒント',
  tip1: '細い筆で精密に描き、太い筆で大きな面積を塗りつぶす',
  tip2: '不透明度を下げると、水彩効果や半透明効果を作成できる',
  tip3: '元に戻す機能を活用して、描き間違いを気にしない',
  tip4: 'まず大まかな輪郭を描き、その後細部を埋める',
  tip5: '異なる色の組み合わせを試して、豊かで多彩な作品を作成'
};