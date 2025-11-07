export default {
    title: 'オンライン画像SVG変換：ビットマップベクター化とSVGZ圧縮の完全ガイド',
    logoAlt: 'オンライン画像SVG変換ツール製品画像',
    functionTitle: '画像SVG変換ツールとは何ですか？ビットマップを迅速にベクター化する方法',
    intro: '当社の<strong>オンライン画像SVG変換ツール</strong>は、ブラウザ内でローカルに実行されるオープンソースアルゴリズムを使用し、PNG、JPG、GIF、BMPなどのビットマップ画像を即座にスケーラブルな<strong>SVGベクターグラフィックス</strong>に変換し、<strong>圧縮SVGZ</strong>のエクスポートもサポートしています。サーバーへのアップロード不要、即時プレビュー、パラメータ調整可能で、デザイン、開発、印刷シーンでクリーンで編集可能なベクターパスを取得できます。効率的な色量子化とパス最適化により、この<strong>オンライン画像SVG変換</strong>ソリューションはクロスプラットフォームワークフローに強力なサポートを提供します。',

    useCasesTitle: 'オンライン画像SVG変換ツールの典型的な応用シーン',
    useCases: [
        'ロゴ、アイコン、フラットイラストを迅速にベクター化し、スケーリングと編集を容易にする',
        'スキャンした手書きスケッチをSVGパスに変換し、その後の着色とレイアウトに適した形式にする',
        'ウェブサイトとミニプログラム用により小さなベクターグラフィックスを生成し、ローディングとSEOを最適化する',
        'ビットマップをSVGZ圧縮フォーマットにエクスポートし、モバイル用途でさらにサイズを削減する',
        '透明背景PNGをベクター化し、エッジと透明情報の視覚効果を保持する',
        '静止GIFフレーム（最初のフレーム）をベクター化し、グラフィック再設計とアニメーションに使用する',
        'レーザー彫刻、CNC、カッティングマシンなどSVGパスを必要とする製造シーンに適する'
    ],

    tipTitle: 'プロのヒント：',
    tipContent: '<strong>オンライン画像SVG変換</strong>時に、色数を適切に減らし、パス無視閾値（pathomit）を上げることでノイズを効果的に低減できます。同時にラインフィルター（linefilter）を有効にすることで、線画とアイコンにより滑らかなパスを得ることができます。',

    conclusion: '当社の<strong>オンライン画像SVG変換ツール</strong>を選択すると、ブラウザ内でローカルにベクター化、プレビュー、編集、エクスポートを完了でき、プライベートデータのアップロードを回避できます。標準<strong>SVG</strong>と<strong>SVGZ</strong>のエクスポートを通じて、この<strong>オンライン画像SVG変換</strong>ワークフローはデザインとウェブ開発だけでなく、製造シーンのパス処理にも適しています。',

    faqTitle: 'よくある質問（FAQ）',
    faqs: [
        {
            question: '画像SVG変換オンラインツールはどのようにベクター化を実現しますか？',
            answer: 'このツールは、ブラウザ内でオープンソースアルゴリズムを使用してローカルに色量子化、エッジ検出、パスフィッティングを実行し、ビットマップを編集可能なSVGパスに変換します。プロセス全体でサーバーへのアップロードが不要で、真の<strong>オンライン画像SVG変換</strong>とプライバシー保護を実現します。'
        },
        {
            question: '圧縮SVGZをエクスポートできますか？オンライン画像SVG変換はこれをサポートしますか？',
            answer: 'はい。エクスポートオプションで<strong>SVGZ</strong>を選択できます。SVG文字列に対してローカルでGZIP圧縮を実行し、より小さなファイルを出力します。これはモバイルおよび弱いネットワーク環境での<strong>オンライン画像SVG変換</strong>要件に適しています。'
        },
        {
            question: '透明背景PNGのベクター化効果はいかがですか？',
            answer: 'ツールは透明ピクセルを合理的に近似し、エッジの視覚を維持するため、ロゴやアイコンなどの<strong>オンライン画像SVG変換</strong>シーンに適しています。色数を減らし、pathomitを増やすことで結果を最適化することもできます。'
        },
        {
            question: 'オンライン画像SVG変換でサポートされる入力フォーマットは？',
            answer: 'PNG、JPG、GIF、BMP、WEBPなどの一般的なフォーマットをサポートしています（GIFは最初のフレームを取得）。ドラッグ＆ドロップ、クリックアップロード、クリップボード貼り付けでインポートでき、効率的な<strong>オンライン画像SVG変換</strong>ワークフローを実現します。'
        }
    ],

    tutorialTitle: 'オンライン画像SVG変換ツールの使い方（詳細ステップ）',
    step1: {
        title: '画像のアップロードまたは貼り付け',
        description: 'アップロードエリアをクリックするか、ファイルを直接<strong>ドラッグ</strong>してください。また、<strong>クリップボード</strong>からの貼り付けもサポートしています。高品質なベクターパスを得るために、明確なソース画像の使用を推奨します。',
        note: 'PNG/JPG/GIF/BMP/WEBPをサポートし、複数の画像はバッチキューに入ります。'
    },
    step2: {
        title: '入力のプレビューと透明背景の確認',
        description: '左側のプレビューエリアでインポートされたファイルが正しいことを確認してください。<strong>透明背景PNG</strong>の場合、エッジと透明領域が期待通りかどうかをまず確認してください。',
        note: '誤って選択した画像を削除して、キューをクリーンに保つことができます。'
    },
    step3: {
        title: 'ベクター化パラメータの調整',
        description: '画像の特徴に応じて<strong>色数</strong>、<strong>ltres</strong>、<strong>qtres</strong>、<strong>pathomit</strong>、<strong>ラインフィルター</strong>を調整してください。右側のプレビューはリアルタイムで更新され、<strong>オンライン画像SVG変換</strong>で最適なバランスを得るのに役立ちます。',
        note: '線画にはpathomitを増やし、ロゴには色数を減らしてよりクリーンなパスを得ることができます。'
    },
    step4: {
        title: '変換の実行と比較表示',
        description: '"SVGへの変換を開始"をクリックすると、ツールはローカルで<strong>SVG</strong>を生成し、インタラクティブなプレビューを提供します。元の画像とベクター化された画像の比較表示を通じて、パス品質を迅速に確認できます。',
        note: 'モバイル端末でもスムーズに表示と詳細の拡大が可能です。'
    },
    step5: {
        title: 'エクスポート形式の選択：SVGまたはSVGZ',
        description: '最小のファイルサイズを追求する場合は<strong>SVGZ</strong>を選択し、さらに編集と互換性が必要な場合は<strong>SVG</strong>を選択してください。どちらもWebとデザインツールでの<strong>オンライン画像SVG変換</strong>成果物の応用に使用できます。',
        note: 'SVGZは弱いネットワークとモバイル端末でのロードに優しく対応しています。'
    },
    step6: {
        title: 'ダウンロードまたはバッチパッケージ',
        description: '各ベクターグラフィックを個別にダウンロードするか、「バッチダウンロード（ZIP）」を使用してキュー結果を一括エクスポートし、<strong>オンライン画像SVG変換</strong>プロセスで時間を節約できます。',
        note: 'すべての操作はブラウザ内でローカルに完了し、画像プライバシーを保護します。'
    },

    successTitle: 'おめでとうございます！',
    successContent: '<strong>オンライン画像SVG変換</strong>を使用してビットマップベクター化、パラメータ最適化、マルチフォーマットエクスポートを完了する方法を習得しました。',

    relatedToolsTitle: '関連する興味深いツール',
    relatedTools: [
        {
            name: '画像圧縮ツール',
            description: '品質を大幅に損なうことなく画像ファイルサイズを縮小します。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: '画像サイズバッチリサイザー',
            description: '画像を特定のサイズに変更、またはパーセンテージでスケーリングします。',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: '画像色反転',
            description: 'ワンクリックで色を反転させ、写真のネガとクリエイティブ効果を生成します。',
            url: 'https://www.ufreetools.com/tool/invert-image-colors'
        },
        {
            name: 'QRコードジェネレーター',
            description: 'URL、テキスト、連絡先情報等のカスタムQRコードを作成します。',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],

    referencesTitle: '参考リソース',
    references: [
        {
            name: 'SVG基礎とベストプラクティス（MDN）',
            description: 'SVG構文、レンダリング、アクセシビリティの要点を学びます。',
            url: 'https://developer.mozilla.org/ja/docs/Web/SVG'
        },
        {
            name: '色量子化と画像ベクター化研究',
            description: '量子化、エッジ検出、パスフィッティング手法の理論的基礎を探求します。',
            url: 'https://ja.wikipedia.org/wiki/%E9%87%8F%E5%AD%90%E5%8C%96_(%E6%83%85%E5%A0%B1)'
        },
        {
            name: 'Schema.org FAQPage マークアップ',
            description: '構造化データを使用して検索エンジンがFAQコンテンツを理解するのを助けます。',
            url: 'https://schema.org/FAQPage'
        }
    ]
}