export default {
    title: "STLからGLBへのツール：オンライン3Dモデル形式変換ツールの使い方ガイド",
    functionTitle: "STLからGLBへのツールとは何か、その用途は？",
    intro: "私たちの<strong>STLからGLBへのツール</strong>は、プロフェッショナルなオンライン3Dモデル形式変換アプリケーションで、STL（Stereo Lithography）ファイルをGLB（Binary glTF）形式に素早く変換できます。GLBはglTFのバイナリ版で、ゲーム開発、AR/VRアプリケーション、ウェブ3D表示などで広く使用される効率的な3Dファイル形式です。私たちの<strong>オンラインSTLからGLBへのコンバーター</strong>を使用すると、複数のSTLファイルをバッチ処理し、モデル単位を設定し、マテリアルカラーを調整し、ソフトウェアをインストールせずに変換を完了できます。",

    useCasesTitle: "STLからGLBへの一般的な使用例",
    useCases: [
        "STL形式の3DプリントモデルをゲームやAR/VR用のGLBに変換",
        "複数のSTLファイルをGLBにバッチ変換して3Dコンテンツ制作効率を向上",
        "ウェブ3D表示用のGLB形式モデルファイルを準備",
        "Unity、Unreal Engineなどのゲームエンジンで使用するためにSTLをGLBに変換",
        "AR/VRアプリケーション用に最適化された3Dモデルリソースを準備",
        "マテリアルとテクスチャをサポートするSTLモデルをGLBに変換",
        "モバイルアプリ用の軽量3Dモデル形式を準備",
        "異なるプラットフォーム間で簡単に共有するためにSTLをGLBに移行"
    ],

    tipTitle: "プロのヒント：",
    tipContent: "GLB形式は、マテリアル、テクスチャ、アニメーションを含む豊富な情報をサポートし、ファイルサイズが小さく、ロードが高速です。STLファイルにはジオメトリ情報のみが含まれているため、GLBに変換する際にマテリアルカラーを追加できます。Webアプリケーションには、GLBが推奨される形式です。",

    conclusion: "<strong>STLからGLBへの形式変換</strong>ツールは、ゲーム開発者、AR/VRデザイナー、Web開発者、および3Dモデルを処理するユーザーに特に役立ちます。私たちのオンラインコンバーターを使用すると、3DプリントモデルをゲームやAR/VRアプリケーションに適した形式に素早く変換できます。私たちのツールはバッチ処理をサポートし、すべての処理はブラウザでローカルに実行されます。",

    faqTitle: "よくある質問",
    faqs: [
        {
            question: "STLからGLBへのツールはどのSTL形式をサポートしていますか？",
            answer: "私たちの<strong>オンラインSTLからGLBへのコンバーター</strong>は、両方の主要なSTLファイル形式（バイナリSTLとASCII STL）をサポートしています。ツールは形式を自動的に検出します。"
        },
        {
            question: "STLと比較してGLB形式の利点は何ですか？",
            answer: "GLB形式にはいくつかの利点があります：(1) マテリアル、テクスチャ、アニメーション情報をサポート；(2) 小さなファイルサイズのバイナリ形式；(3) リアルタイムレンダリング用の高速ロード；(4) 主要なゲームエンジンとAR/VRプラットフォームでサポート；(5) PBRマテリアルをサポート。"
        },
        {
            question: "変換中にマテリアルカラーを設定する方法は？",
            answer: "私たちの<strong>STLからGLBへのツール</strong>はマテリアルカラー設定を提供します。プリセットカラーを選択するか、RGB値をカスタマイズできます。"
        },
        {
            question: "変換されたGLBファイルはどのソフトウェアで使用できますか？",
            answer: "GLB形式は、Unity、Unreal Engine、Blender、Three.js、Babylon.jsなど、主要なゲームエンジンと3Dプラットフォームで広くサポートされています。"
        },
        {
            question: "変換プロセスは安全ですか？",
            answer: "完全に安全です！私たちのツールは純粋なフロントエンドテクノロジーを使用しており、すべての処理はブラウザでローカルに実行されます。"
        },
        {
            question: "GLBファイルのサイズは変わりますか？",
            answer: "通常変わります。GLBはバイナリエンコーディングと圧縮を使用します。シンプルなモデルではバイナリSTLよりわずかに大きい場合があります；複雑なモデルでは通常小さくなります。"
        },
        {
            question: "GLB形式はどの3D機能をサポートしていますか？",
            answer: "GLB形式は多くの3D機能をサポートしています：幾何データ、PBRマテリアル、テクスチャマッピング、スケルトンアニメーション、モーフターゲット、シーン階層。"
        }
    ],

    tutorialTitle: "STLからGLBへのツールの使い方",
    steps: [
        {
            title: "STLファイルをアップロード",
            description: "まずSTLファイルをアップロードします。<strong>ファイルをドラッグ＆ドロップ</strong>するか、<strong>参照をクリック</strong>して選択できます。",
            note: "複数のSTLファイルを同時にアップロードできます。"
        },
        {
            title: "パラメータを設定",
            description: "<strong>モデル名</strong>（任意）と<strong>モデル単位</strong>を設定します。<strong>マテリアルカラー</strong>を選択します。",
            note: "ミリメートル（mm）が通常最も安全な選択です。"
        },
        {
            title: "GLBに変換",
            description: "<strong>「GLBに変換」</strong>ボタンをクリックします。ツールはすべてのSTLファイルを処理します。",
            note: "ページを開いたままにしてください。大きなファイルには数秒かかる場合があります。"
        },
        {
            title: "結果のプレビュー",
            description: "右の出力エリアに変換されたGLBファイル情報（<strong>ファイルサイズ比較</strong>、<strong>三角形数</strong>を含む）が表示されます。",
            note: "GLBファイルは通常元のSTLより小さくなります。"
        },
        {
            title: "GLBファイルをダウンロード",
            description: "各ファイルの下にある<strong>「GLBをダウンロード」</strong>をクリックするか、<strong>「バッチダウンロード（ZIP）」</strong>を使用します。",
            note: "すべての処理はブラウザでローカルに行われます。"
        }
    ],

    successTitle: "おめでとうございます！",
    successContent: "私たちのSTLからGLBへのツールの使い方を正常に学びました。これでSTL形式の3DプリントモデルをGLB形式に簡単に変換できます。",

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
            name: "glTF形式公式仕様",
            description: "glTF/GLBの技術仕様を理解",
            url: "https://www.khronos.org/gltf/"
        },
        {
            name: "STLファイル形式",
            description: "STLの歴史と構造",
            url: "https://en.wikipedia.org/wiki/STL_%28file_format%29"
        },
        {
            name: "3Dファイル形式比較",
            description: "STL、OBJ、glTFの特徴",
            url: "https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/"
        }
    ]
}
