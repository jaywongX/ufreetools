export default {
  title: 'オンラインLIDAR点群ビューア - 無料の3D点群可視化ツール',
  functionTitle: '機能紹介とユースケース',
  intro:
    '本<strong>オンラインLIDAR点群ビューア</strong>は、複数フォーマットの点群データをオンラインで閲覧・分析できるプロフェッショナルな3D可視化ツールです。<strong>無料の点群ビューア</strong>としてWebGLを採用し、インストール不要でブラウザ上で高品質な3Dレンダリングを実現します。測量エンジニア、建築家、GISスペシャリストなど、あらゆる専門用途に対応する<strong>LIDARデータビューア</strong>です。',
  useCasesTitle: '主なユースケース',
  useCases: [
    '測量・マッピング：LiDARスキャンデータの閲覧と分析（地形測量・建物測量）',
    '建築設計：建物点群の可視化によるBIMワークフローの支援',
    '都市計画：スマートシティの意思決定を支える3D都市モデルの分析',
    '林業：森林点群の処理（植生被覆・バイオマス評価）',
    '考古学：遺跡の3Dスキャンの閲覧（保存・研究用途）',
    '地質探査：地質構造点群の分析（鉱物探査・リスク評価）',
    '自動運転：車載LiDARデータの閲覧（経路計画・障害物検出）',
    '産業検査：設備3Dスキャンの分析（品質管理・欠陥検出）'
  ],
  tipTitle: 'プロのヒント',
  tipContent:
    '本ビューアはLAS・XYZ・PLY・PCDなど主要フォーマットに対応。複数の着色モードとインタラクティブ操作により、様々な視点から点群データを深く分析できます。',
  conclusion:
    '本<strong>オンライン点群可視化ツール</strong>を使えば、多様なLIDARデータセットを素早くプレビュー・分析でき、生産性が向上します。<strong>3D点群ビューア</strong>は完全無料でプライバシーにも配慮。処理はすべてローカル（ブラウザ内）で行われます。',
  faqTitle: 'よくある質問（FAQ）',
  faqs: [
    {
      question: 'このLIDAR点群ビューアがサポートするファイル形式は？',
      answer:
        '本<strong>点群ビューア</strong>は、LAS（LIDAR標準）、XYZ（ASCII点群）、PLY（Polygon File Format）、PCD（Point Cloud Data）、TXTなど主要形式に対応。多くの<strong>LIDARデータ処理</strong>や3Dスキャン用途をカバーします。'
    },
    {
      question: '点群ファイルのサイズ制限はありますか？',
      answer:
        'ブラウザ性能のため、<strong>点群ファイル</strong>は100MB以下を推奨します。大規模データはダウンサンプリングや分割をご検討ください。<strong>オンライン点群ビューア</strong>は3D表示の滑らかさを保つため自動的にレンダリングを最適化します。'
    },
    {
      question: '点群の表示設定はどのように調整できますか？',
      answer:
        '<strong>3D可視化ツール</strong>では、ポイントサイズの調整、着色モード（標高・強度・分類・RGB）の選択、点密度の制御、アニメーションの有効化などが可能です。これにより<strong>LiDARスキャンデータ</strong>を効果的に分析できます。'
    },
    {
      question: '自分の点群データは安全ですか？',
      answer:
        'はい。<strong>オンラインLIDARビューア</strong>はすべてローカル処理で、<strong>点群データ</strong>はサーバーへアップロードされません。パース・レンダリング・分析はブラウザ内で完結し、機密データや商用プロジェクトでも安心です。'
    },
    {
      question: '結果の画像をエクスポートできますか？',
      answer:
        '可能です。<strong>可視化ツール</strong>は現在のビューを高品質PNGとしてエクスポートできます。さまざまな角度・着色モードのキャプチャを保存し、レポートやプレゼン、さらに<strong>データ分析</strong>に活用できます。'
    }
  ],
  tutorialTitle: '操作ガイド',
  steps: [
    {
      title: '点群ファイルを選択',
      description:
        '「ファイルを選択」をクリック、または<strong>LIDAR点群ファイル</strong>をアップロード領域へドラッグ＆ドロップ。対応する<strong>3D点群データ</strong>形式：LAS／XYZ／PLY／PCD／TXT。',
      note: '最適な性能のため100MB未満を推奨'
    },
    {
      title: '解析を待機',
      description:
        'システムが<strong>点群ファイル</strong>を解析し、進捗とファイル情報を表示します。完了後、自動的に3Dビューアへ読み込まれます。',
      note: '所要時間はファイルサイズと複雑さに依存'
    },
    {
      title: '3Dナビゲーション操作',
      description:
        'マウス操作：<strong>左ドラッグ</strong>で回転、<strong>右ドラッグ</strong>でパン、<strong>ホイール</strong>でズーム。直感的な操作で<strong>点群データ</strong>を任意の角度から確認できます。',
      note: 'モバイル端末ではタッチジェスチャー対応'
    },
    {
      title: '表示設定を調整',
      description:
        '右側パネルで着色モード（標高／強度／分類／RGB）、ポイントサイズ・密度、アニメーションなどを調整。これらの設定により<strong>LIDARデータ</strong>を効率的に分析できます。',
      note: '分析ニーズに応じて着色モードを使い分け'
    },
    {
      title: '統計情報を確認',
      description:
        '情報パネルで<strong>点群統計</strong>（総ポイント数、座標範囲、ファイル形式など）を確認。<strong>データ品質評価</strong>に有用です。',
      note: '統計はリアルタイム更新'
    },
    {
      title: '結果をエクスポート',
      description:
        'ビューに満足したら「画像をエクスポート」をクリックし、<strong>3D可視化</strong>をPNGで保存。レポートや追加分析に利用できます。',
      note: 'エクスポート画像は現在のビューと設定を保持'
    }
  ],
  successTitle: '完了しました！',
  successContent:
    'おめでとうございます！LIDAR点群ビューアの使い方を習得し、高効率な3D可視化・分析が可能になりました。',
  relatedToolsTitle: '関連ツール',
  relatedTools: [
    {
      name: '座標変換ツール',
      description:
        'WGS-84／GCJ-02／BD-09／Webメルカトル／UTM などの座標系間で相互変換',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'GPSトラック再生',
      description: 'GPX／KML／GeoJSON／CSV などからGPSトラックを可視化・再生',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: 'ガウス投影（正反算）',
      description: 'ガウス投影座標と地理座標（緯度経度）の相互変換ツール',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    }
  ],
  referencesTitle: '参考資料',
  references: [
    {
      name: 'ASPRS LAS 形式仕様',
      description: '米国写真測量・リモートセンシング学会によるLAS公式標準',
      url: 'https://www.asprs.org/divisions-committees/lidar-division/laser-las-file-format-exchange-activities'
    },
    {
      name: 'WebGL 公式ドキュメント',
      description: 'Web Graphics Library の公式技術文書とベストプラクティス',
      url: 'https://www.khronos.org/webgl/'
    },
    {
      name: 'Point Cloud Library (PCL)',
      description: 'オープンソース点群処理ライブラリの公式ドキュメントとチュートリアル',
      url: 'https://pointclouds.org/'
    }
  ]
};