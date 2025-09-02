export default {
  title: 'バイオニックリーディング変換ツール：オンライン Bionic Reading（Markdown/PDF/EPUB の変換・エクスポートガイド）',
  functionTitle: 'バイオニックリーディング変換ツールとは？どんな課題を解決できる？',
  intro: '当サイトの<strong>バイオニックリーディング変換ツール</strong>は、語の前半を太字で強調（Fixation）し、残りの部分のコントラストを下げる（Contrast）ことで、視線を要点へ素早く導く<strong>オンライン Bionic Reading ツール</strong>です。リアルタイムプレビュー、手動編集、フォント/文字サイズのカスタマイズに対応し、<strong>Markdown・PDF・EPUB</strong>をワンクリックで読み込み可能。最終的に<strong>Markdown・PDF・EPUB・PNG・JPG・HTML・Word</strong>など多彩な形式で書き出せます。学習・執筆・編集からモバイル読書まで、長文の理解や注意散漫の軽減に有効な高機能ソリューションです。',
  useCasesTitle: 'バイオニックリーディングの主な活用シーン',
  useCases: [
    '長文の精読：論文・ホワイトペーパー・技術文書から要点を効率的に抽出',
    'モバイル最適化：スマホ/タブレットの小さな画面でも要点にフォーカス',
    '学習・試験対策：段落の主旨やキーワードを視覚的に強調して記憶定着',
    '編集・公開：ブログやSNS向けに読みやすいテキストを生成',
    '集中力サポート：疲労時や注意散漫な状況でも読書リズムと理解を維持',
    '多言語読解：日中英韓などで語頭を強調し、スキップや読み飛ばしを軽減',
    'アクセシビリティ：フォント/サイズ/コントラストを好みに合わせて調整',
    'フォーマット変換ワークフロー：Markdown/PDF/EPUB を注釈後に PNG/JPG/HTML/Word で出力'
  ],
  tipTitle: 'プロのヒント：',
  tipContent: '自然な見た目を目指すなら Fixation は 25%〜40%、Contrast は 30%〜60% を目安に。モバイルでは文字サイズと行間を広めに。自動モードで生成後、手動編集モードで専門用語などのキーワードを微調整すると効果的です。',
  conclusion: '<strong>バイオニックリーディング変換ツール</strong>は、リアルタイムプレビュー、手動編集、パラメータ調整、ファイル読込から多形式エクスポートまで一連の流れをカバーする<strong>オンライン Bionic Reading ツール</strong>です。Fixation/Contrast・フォント/サイズ・書き出し形式を適切に組み合わせることで、あらゆるデバイスで快適な読書体験を実現します。',

  faqTitle: 'よくある質問（FAQ）',
  faqs: [
    {
      question: 'バイオニックリーディング変換ツールはどのように機能しますか？',
      answer: 'Bionic Reading の考え方に基づき、各語の前半（語頭側）を太字化（Fixation）し、残りを弱める（Contrast）ことで、視線を語幹や意味の核へ素早く誘導します。自動モードで全体を作った後、手動編集モードで領域ごとに強調度を調整できます。'
    },
    {
      question: 'PDF/EPUB/Markdown を Bionic Reading 形式へ変換して書き出す方法は？',
      answer: '「Markdown/テキストをインポート」「PDF をインポート」「EPUB をインポート」を使って読み込みます。解析はブラウザ内でローカルに行われ、すぐ右側にプレビューが表示されます。調整後は「Markdown・PDF・EPUB・PNG・JPG・HTML・Word」のいずれかでエクスポートできます。インストールや登録は不要です。'
    },
    {
      question: '日本語/英語/中国語/韓国語でも有効ですか？',
      answer: 'はい。英語など空白区切りの言語は単語単位、日本語/中国語/韓国語など CJK は連続する字面のまとまりとして処理します。語頭側の強調は多言語でも視線誘導に有効です。言語ごとに Fixation と Contrast を調整して最適化してください。'
    },
    {
      question: 'PNG をクリップボードにコピーしたり、複数形式へ書き出せますか？',
      answer: '可能です。「PNG をクリップボードにコピー」に対応し、SNS や資料向けに PNG/JPG でエクスポートできます。さらに HTML と Word（.doc）への書き出しに対応し、CMS やプレゼンでのレイアウト調整にも便利です。'
    },
    {
      question: 'Bionic Reading はアクセシビリティや SEO に影響しますか？',
      answer: '視覚的な強調であり、文意は変わりません。HTML で出力する場合は、H1/H2/H3 などの見出し階層や十分なコントラスト/文字サイズを維持してください。FAQPage などの構造化データを併用すると検索エンジン理解が進み、可視性向上に寄与します。'
    },
    {
      question: '入力テキストはサーバーへ送信されますか？プライバシーは？',
      answer: '送信されません。解析とレンダリングはすべてブラウザ内で完結します。エクスポートやクリップボードコピーもローカル処理のため、プライバシーリスクを源流で抑制できます。'
    }
  ],

  tutorialTitle: '使い方（ステップガイド）',
  steps: {
    step1: {
      title: 'テキストを入力/インポート',
      description: '左側にテキストを貼り付けるか、「Markdown/テキストをインポート」「PDF をインポート」「EPUB をインポート」で読み込みます。右側に<strong>バイオニックリーディング</strong>のプレビューが表示されます。',
      note: '大きな PDF/EPUB は解析に時間を要する場合があります。完了までお待ちください。'
    },
    step2: {
      title: 'Fixation と Contrast を調整',
      description: 'スライダーで Fixation（語頭太字割合）と Contrast（非太字の不透明度）を設定。プレビューを見ながら読みやすさと速度のバランスを探ります。',
      note: 'まずは Fixation 30%、Contrast 50% を目安にコンテンツ密度に合わせて微調整。'
    },
    step3: {
      title: 'フォントと文字サイズを選択',
      description: '閲覧環境に合わせてフォントやサイズ/行間を調整。特にモバイルや投影では大きめが効果的です。',
      note: 'スクリーン上ではサンセリフ体が見やすい傾向があります。'
    },
    step4: {
      title: '手動編集モードに切り替え',
      description: '細かくコントロールしたい箇所は「手動編集モード」で直接調整。「自動結果から同期」でいつでも初期案に戻せます。',
      note: '見出しや小見出し、専門用語の重点強調に最適です。'
    },
    step5: {
      title: '複数形式でエクスポート',
      description: 'Markdown・PDF・EPUB・PNG・JPG・HTML・Word（.doc）で書き出し可能。画像は共有に、HTML/Word はレイアウトや二次編集に適しています。',
      note: 'PDF/PNG/JPG では白背景と十分な余白を確保すると印刷/掲示に最適です。'
    },
    step6: {
      title: '共有とコピー',
      description: '「PNG をクリップボードにコピー」「HTML/Markdown をコピー」でナレッジベースやブログ、SNS へ素早く共有。強調表現を保ったまま配信できます。',
      note: '画像圧縮が強いプラットフォームでは、HTML/Markdown の共有が文字の鮮明さを保ちます。'
    }
  },

  successTitle: '完了！',
  successContent: 'これでバイオニックリーディング変換ツールの使い方は万全です。長文を集中しやすい形式に変換し、あらゆる場所で効率よく公開・共有しましょう。',

  relatedToolsTitle: '関連ツール',
  relatedTools: [
    { name: '画像圧縮ツール', description: '画質をなるべく落とさずに画像サイズを削減。', url: 'https://www.ufreetools.com/tool/image-compressor' },
    { name: '画像リサイズツール', description: '指定サイズや比率で画像を一括リサイズ。', url: 'https://www.ufreetools.com/tool/image-batch-resizer' },
    { name: '印章ジェネレーター', description: '会社印や個人印などデジタル印章をオンライン生成。', url: 'https://www.ufreetools.com/tool/seal-generator' },
    { name: 'QRコードジェネレーター', description: 'URL・テキスト・連絡先用のカスタム QR コードを作成。', url: 'https://www.ufreetools.com/tool/qr-code-generator' }
  ],

  referencesTitle: '参考資料',
  references: [
    { name: 'Bionic Reading 公式サイト', description: 'Bionic Reading の理念と実践例。', url: 'https://bionic-reading.com/' },
    { name: '可読性とタイポグラフィ', description: 'フォントやサイズ、レイアウトが読書効率に与える影響。', url: 'https://en.wikipedia.org/wiki/Typography' },
    { name: 'WCAG（ウェブアクセシビリティガイドライン）', description: 'コントラストやセマンティクス、アクセシビリティのベストプラクティス。', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/' }
  ]
}