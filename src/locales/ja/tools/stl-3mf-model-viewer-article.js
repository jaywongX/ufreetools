export default {
    title: 'STL/3MFモデルビューアツール：オンライン3Dモデルビューアガイド',
    functionTitle: 'STL/3MFモデルビューアツールとは？その用途は？',
    intro: '当社の<strong>STL/3MFモデルビューア</strong>は、STL（Stereo Lithography）および3MF（3D Manufacturing Format）形式の3Dモデルファイルをすばやく読み込みプレビューできるプロフェッショナルなオンライン3Dモデルビューアです。ソフトウェアのインストールは不要で、ブラウザで開くだけで3Dモデルをあらゆる角度から確認できます。',

    useCasesTitle: 'STL/3MFモデルプレビューの一般的な使用例',
    useCases: [
        '3Dプリント前にSTLモデルをプレビューして、モデルが完全でエラーがないか確認',
        '3MFモデルの色や素材情報を表示して、プリント結果を確認',
        '3Dモデルの寸法と比率をすばやく確認',
        'ワイヤーフレームモードでメッシュトポロジを検査',
        '製品プレゼン用に3Dモデルのスクリーンショットを撮影',
        '3Dモデリングソフトウェアなしでモデルファイルを表示',
        '複数の3Dモデルファイルをバッチプレビュー',
        'クライアントやチームメンバーに3Dモデルデザインを提示'
    ],

    tipTitle: 'プロのヒント：',
    tipContent: '左マウスボタンでモデルを回転、右ボタンでビューをパン、スクロールホイールでズーム。ダブルクリックでモデルを自動的に中央に配置します。',

    conclusion: '<strong>STL/3MFモデルビューア</strong>ツールは、3Dプリント愛好家、デザイナー、エンジニア、3Dモデルを確認する必要があるすべての人に特に役立ちます。',

    faqTitle: 'よくある質問',
    faqs: [
        { question: 'STL/3MFモデルビューアはどのファイル形式に対応していますか？', answer: 'STL（バイナリおよびASCII）と3MF形式に対応しています。' },
        { question: '3Dモデルを回転・ズームするには？', answer: '左ボタンで回転、スクロールでズーム、右ボタンでパン。ダブルクリックで中央配置。' },
        { question: 'モデル情報パネルには何が表示されますか？', answer: '頂点数、面数、ファイルサイズ、物理寸法（XYZ軸）。' },
        { question: 'ワイヤーフレームモードとは何ですか？', answer: 'メッシュ構造を表示し、トポロジの問題を確認するのに役立ちます。' },
        { question: 'スクリーンショットをエクスポートできますか？', answer: 'はい！PNGまたはJPG形式で高解像度スクリーンショットをエクスポートできます。' },
        { question: 'プレビューは安全ですか？', answer: '完全に安全です！すべての処理はブラウザ内でローカルに実行されます。' },
        { question: 'どのサイズの3Dモデルファイルに対応していますか？', answer: '通常、数十MBのSTLファイルとより大きな3MFファイルを処理できます。' }
    ],

    tutorialTitle: 'STL/3MFモデルビューアの使い方',
    steps: [
        { title: '3Dモデルファイルをアップロード', description: 'STLまたは3MFファイルをアップロードします。', note: '複数ファイルの同時アップロードに対応。' },
        { title: '3Dモデルを表示', description: 'アップロード後、3Dビューが自動的にモデルを読み込みます。', note: '大きなモデルの初回読み込みには数秒かかる場合があります。' },
        { title: 'モデル情報を確認', description: '右パネルに詳細情報が表示されます。', note: '3MFファイルには追加情報も表示されます。' },
        { title: '表示とレンダリング設定を調整', description: 'ワイヤーフレームモード、色、グリッド、軸を設定。', note: 'ワイヤーフレームモードはトポロジの確認に最適です。' },
        { title: 'スクリーンショットをエクスポート', description: '高解像度スクリーンショットを保存。', note: 'プレゼンやドキュメントに最適です。' }
    ],

    successTitle: 'おめでとうございます！',
    successContent: 'STL/3MFモデルビューアの使い方を正常に学習しました。',

    relatedToolsTitle: '関連ツール',
    relatedTools: [
        { name: 'STLから3MF', description: 'STLファイルを3MF形式に変換。', url: 'https://www.ufreetools.com/tool/stl-to-3mf-converter' },
        { name: 'STLからOBJ', description: 'STLファイルをOBJ形式に変換。', url: 'https://www.ufreetools.com/tool/stl-to-obj-converter' },
        { name: '画像からPNG', description: 'JPG、WebPをPNGに変換。', url: 'https://www.ufreetools.com/tool/image-to-png' },
        { name: '画像圧縮ツール', description: '画像ファイルサイズを削減。', url: 'https://www.ufreetools.com/tool/image-compressor' }
    ],

    referencesTitle: '参考資料',
    references: [
        { name: 'STLファイル形式', description: 'STL形式の歴史と構造', url: 'https://en.wikipedia.org/wiki/STL_%28file_format%29' },
        { name: '3MF仕様', description: '3MF形式の技術仕様', url: 'https://3mf.io/specification/' },
        { name: 'Three.jsドキュメント', description: '3Dレンダリングエンジンの技術詳細', url: 'https://threejs.org/docs/' }
    ]
}