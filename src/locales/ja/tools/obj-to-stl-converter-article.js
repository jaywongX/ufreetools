export default {
    title: "OBJからSTLへのツール：オンライン3Dプリンティング形式変換ツールの使い方ガイド",
    functionTitle: "OBJからSTLへのツールとは何か、その用途は？",
    intro: "私たちの<strong>OBJからSTLへのツール</strong>は、プロフェッショナルなオンライン3Dプリンティング形式変換アプリケーションで、OBJ（Wavefront Object）ファイルをSTL（Stereo Lithography）形式に素早く変換できます。STLは3Dプリンティング業界で最も広く使用されているファイル形式で、ほぼすべての3Dプリンターとスライシングソフトウェアでサポートされています。",

    useCasesTitle: "OBJからSTLへの一般的な使用例",
    useCases: [
        "OBJ形式の3Dモデルを3DプリンティングのためにSTLに変換",
        "複数のOBJファイルをSTLにバッチ変換",
        "3Dプリンティングモデルに正しい単位を設定",
        "OBJファイルをスライシングソフトウェアで使用するためにSTLに変換",
        "3Dプリントファイル形式を最適化、STLは最も広い互換性を持つ",
        "3Dプリンティングサービスプロバイダーのために標準化されたSTLを準備",
        "OBJモデルをSTLに変換して簡単なデータ交換を実現",
        "3DプリンティングのためにSTL形式でファイルを準備"
    ],

    tipTitle: "プロのヒント：",
    tipContent: "STL形式にはバイナリとASCIIの2種類があります。バイナリSTLファイルはファイルサイズが小さく、ほとんどのケースで推奨されます。OBJファイルには頂点と法線情報が含まれており、STLに変換するときに保持されます。3Dプリンティングには、ミリメートルが推奨される単位です。",

    conclusion: "<strong>OBJからSTLへの形式変換</strong>ツールは、3Dプリンティング愛好家、デザイナー、エンジニア、および大量の3Dモデルを処理する必要があるユーザーに特に役立ちます。",

    faqTitle: "よくある質問",
    faqs: [
        {
            question: "OBJからSTLへのツールはどのOBJ形式をサポートしていますか？",
            answer: "私たちのコンバーターは標準的なOBJ（Wavefront Object）ファイル形式をサポートしています。ツールは頂点、法線、面のデータを自動的に解析します。"
        },
        {
            question: "OBJと比較してSTL形式の利点は何ですか？",
            answer: "3DプリンティングにおけるSTL形式の利点：(1) 最も広い互換性；(2) シンプルなファイル構造；(3) 小さなバイナリファイルサイズ；(4) 業界の伝統的標準。"
        },
        {
            question: "正しい単位の選び方は？",
            answer: "私たちのツールは4つの一般的な単位を提供します：ミリメートル、センチメートル、メートル、インチ。3Dプリンターの要件に基づいて選択することをお勧めします。"
        },
        {
            question: "バイナリSTLとASCII STLの違いは何ですか？",
            answer: "バイナリSTLは小さいファイルサイズのバイナリエンコーディングを使用します。ASCII STLはより大きいテキスト形式を使用しますが、読みやすいです。"
        },
        {
            question: "変換されたSTLファイルはどのソフトウェアで使用できますか？",
            answer: "STLはCura、PrusaSlicer、Simplify3D、3D Builderなどの主要なスライシングソフトウェアで広くサポートされています。"
        },
        {
            question: "変換プロセスは安全ですか？",
            answer: "完全に安全です！すべての処理はブラウザでローカルに実行されます。"
        },
        {
            question: "STLファイルのサイズは変わりますか？",
            answer: "通常変わります。バイナリSTLは通常ASCII STLより30-50%小さくなります。"
        }
    ],

    tutorialTitle: "OBJからSTLへのツールの使い方",
    steps: [
        {
            title: "OBJファイルをアップロード",
            description: "OBJファイルをアップロードします。<strong>ドラッグ＆ドロップ</strong>または<strong>参照クリック</strong>できます。",
            note: "複数のOBJファイルを同時にアップロードできます。"
        },
        {
            title: "パラメータを設定",
            description: "<strong>モデル名</strong>（任意）、<strong>モデル単位</strong>、<strong>出力形式</strong>（バイナリSTLまたはASCII）を設定します。",
            note: "単位がわからない場合は、通常ミリメートル（mm）が最も安全な選択です。"
        },
        {
            title: "STLに変換",
            description: "<strong>「STLに変換」</strong>ボタンをクリックします。",
            note: "ページを開いたままにしてください。"
        },
        {
            title: "結果のプレビュー",
            description: "出力エリアにすべての変換されたSTLファイルの情報が表示されます。",
            note: "STLは3Dプリンティングに適しています。"
        },
        {
            title: "STLファイルをダウンロード",
            description: "<strong>「STLをダウンロード」</strong>をクリックするか、<strong>「バッチダウンロード（ZIP）」</strong>を使用します。",
            note: "すべての処理はローカルです。"
        }
    ],

    successTitle: "おめでとうございます！",
    successContent: "私たちのOBJからSTLへのツールの使い方を正常に学びました。",

    relatedToolsTitle: "関連するツール",
    relatedTools: [
        {
            name: "STLからOBJへのツール",
            description: "STLをOBJに変換。",
            url: "https://www.ufreetools.com/tool/stl-to-obj-converter"
        },
        {
            name: "STLから3MFへのツール",
            description: "STLを3MFに変換。",
            url: "https://www.ufreetools.com/tool/stl-to-3mf-converter"
        },
        {
            name: "画像をPNGに変換",
            description: "JPG/WebPをPNGに変換。",
            url: "https://www.ufreetools.com/tool/image-to-png"
        },
        {
            name: "画像をJPGに変換",
            description: "PNG/WebPをJPGに変換。",
            url: "https://www.ufreetools.com/tool/image-to-jpg"
        }
    ],

    referencesTitle: "参考リソース",
    references: [
        {
            name: "OBJファイル形式仕様",
            description: "OBJの技術仕様を理解",
            url: "https://en.wikipedia.org/wiki/Wavefront_.obj_file"
        },
        {
            name: "STLファイル形式の説明",
            description: "STL形式の歴史と構造",
            url: "https://en.wikipedia.org/wiki/STL_%28file_format%29"
        },
        {
            name: "3Dプリンティングファイル形式比較",
            description: "STL、OBJ、3MFの特徴",
            url: "https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/"
        }
    ]
}
