export default {
  name: 'ワードシャッフラー',
  description: 'テキスト内の単語、文章、行をランダムに並べ替えながら書式を保持',
  inputLabel: 'テキスト入力',
  inputPlaceholder: 'シャッフルするテキストを入力または貼り付け...',
  outputLabel: 'シャッフル結果',
  shuffleMode: 'シャッフルモード',

  modes: {
    word: '単語',
    sentence: '文章',
    line: '行',
    character: '文字',
    paragraph: '段落'
  },

  preserveOptions: '保持オプション',
  preserveCapitalization: '大文字小文字を保持',
  preservePunctuation: '句読点を保持',
  shuffleButton: 'テキストをシャッフル',
  copyButton: '結果をコピー',
  clearButton: 'すべてクリア',
  copiedMessage: 'クリップボードにコピーしました！',
  tagline: '世界で最も先進的なテキストランダマイザー',
  wordCount: '単語数',
  importButton: 'ファイルをインポート',
  clearInputButton: '入力をクリア',
  clearOutputButton: '出力をクリア',
  downloadButton: 'ダウンロード',
  useExampleButton: '例を使用',
  advancedOptions: '詳細オプション',
  delimiterOptions: '区切り文字オプション',
  wordDelimiters: '単語区切り文字',
  wordDelimitersHint: '単語を区切る文字',
  sentenceDelimiters: '文章区切り文字',
  sentenceDelimitersHint: '文章を終了する文字',
  additionalOptions: '追加オプション',
  repeatCount: '繰り返し回数',
  repeatCountHint: '複数のシャッフルバージョンを生成',
  shuffleGroup: 'シャッフルグループサイズ',
  shuffleGroupHint: 'このサイズのグループで単語をシャッフル',
  removeRepeatedWords: '重複単語を削除',
  preserveSpacing: 'スペースを保持',
  examplesTitle: '使用例',
  useThisExample: 'この例を使用',
  helpTitle: 'ヘルプと情報',
  whatIsTitle: 'ワードシャッフラーとは？',
  whatIsDescription: 'ワードシャッフラーは、テキスト内の単語、文章、行、文字、または段落の順序をランダム化するツールです。洗練されたアルゴリズムを使用して真にランダムな結果を保証しつつ、大文字小文字や句読点などの選択した書式オプションを保持します。',
  howToUseTitle: 'このツールの使用方法',
  tipsTitle: '最適な結果を得るためのヒント',
  stepLabel: 'ステップ',

  examples: {
    basic: {
      title: "基本的な単語シャッフル",
      description: "句読点と大文字小文字を保持した単純な単語ランダム化",
      input: "The quick brown fox jumps over the lazy dog. All five boxing wizards jump quickly.",
      output: "The brown quick dog jumps fox lazy the over. Boxing wizards jump five quickly all."
    },
    sentence: {
      title: "文章シャッフリング",
      description: "完全な文章の順序をランダム化",
      input: "最初の文章はここにあります。これは2番目の文章です。そしてここに3番目が来ます。最後に、4番目の文章があります。",
      output: "そしてここに3番目が来ます。最初の文章はここにあります。最後に、4番目の文章があります。これは2番目の文章です。"
    },
    creative: {
      title: "創造的リミックス",
      description: "書式制約なしで単語をシャッフルして新しい創造的テキストを生成",
      input: "詩とは言葉における美のリズミカルな創造です。それは詩人が内面的で個人的だと信じる感情の啓示ですが、読者はそれを自分自身のものとして認識します。",
      output: "美リズミカルは言葉詩人啓示しかし読者個人的で内面的信じるそれ自分自身として認識感情のそれはのもの創造です詩とはにおけるがを。"
    }
  },

  howToUseSteps: [
    "左側の入力フィールドにテキストを入力または貼り付けます。",
    "必要なシャッフルモードとオプションを選択します。",
    "「テキストをシャッフル」ボタンをクリックしてランダム化テキストを生成します。",
    "結果は右側の出力フィールドに表示されます。",
    "コピーまたはダウンロードボタンを使用して結果を保存します。"
  ],

  tips: [
    "創造的執筆練習には、句読点を削除して大文字小文字を保持した単語モードを試してください。",
    "レイアウトテストには、すべての保持オプションを有効にした文章モードを使用して、読みやすいがランダムなテキストを維持します。",
    "安全なパスワードやコードを作成するには、テキスト入力に対して文字モードを使用します。",
    "グループシャッフル機能を使用すると、関連する単語をまとめて保持しながら全体のテキストをランダム化できます。",
    "複数のバリエーションが必要ですか？繰り返し回数を設定して、一度に複数のシャッフルバージョンを生成します。"
  ],

  downloadFileName: 'shuffled_text.txt',

  errorMessages: {
    shuffleError: 'シャッフル処理エラー：',
    sentenceError: '文章シャッフルエラー：',
    copyError: 'テキストコピーエラー：'
  }
};