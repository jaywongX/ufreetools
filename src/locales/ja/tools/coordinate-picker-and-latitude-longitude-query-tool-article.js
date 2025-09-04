export default {
  title: '座標ピッカーと緯度経度クエリツール：オンライン緯度経度クエリガイドとEPSG投影座標変換',
  functionTitle: '座標ピッカーと緯度経度クエリツールとは？主な機能は何ですか？',
  intro: '私たちの<strong>座標ピッカーと緯度経度クエリツール</strong>は、地図クリック点選択、<strong>緯度経度クエリ</strong>、<strong>EPSG投影座標変換</strong>、地名検索機能を統合し、座標選択と座標フォーマットエクスポートを迅速かつ正確に完了することを目的としています。このオンラインツールを使用することで、ブラウザ内で地名から座標への変換、WGS84から各種EPSG投影座標への変換を完了でき、測量アノテーション、位置分析、地図作成の効率を大幅に向上させます。',
  useCasesTitle: '典型的な応用シナリオ：座標ピッカーと緯度経度クエリツールが問題を解決する方法',
  useCases: [
    'ニューメディア地点選択とチェックインポイント作成：緯度経度を迅速に選択し、地図可視化用にエクスポート',
    'GIS地図作成とフィールド収集：クリックで点を選択し、CSV/GeoJSONでエクスポート、ArcGIS/QGISインポートに適用',
    '政府・不動産地点選択：地名検索←座標、候補地点をワンクリックで収集',
    '物流・サービス位置決定：複数の設備/作業指示の座標を記録し、一括エクスポート',
    '教育・研究：WGS84とEPSG投影座標の違いと変換を実演',
    '観光・アウトドアナビゲーション：観光地やキャンプ場の緯度経度と投影座標を保存',
    '開発・テスト：フロントエンド/バックエンド統合に必要な正確な緯度経度サンプル',
    '多地域コンテンツアノテーション：統一フォーマットの座標ファイル、地域間データ統合に有用'
  ],
  tipTitle: 'プロのヒント：',
  tipContent: 'CSVエクスポート時は、name、lat、lon、epsg、x、y、timeフィールドを含めることを推奨します。QGIS/Excelでのバッチ処理と追跡に適しています。',
  conclusion: 'この<strong>座標ピッカーと緯度経度クエリツール</strong>は、測量、可視化、開発、サービスなどの複数シナリオ向けに設計され、<strong>EPSG投影座標変換</strong>、地名検索、バッチエクスポートをサポートします。オンライン緯度経度クエリと座標変換の完了により、ソフトウェアインストールコストを大幅に削減し、協力効率を向上させることができます。',
  faqTitle: 'よくある質問（FAQ）',
  faqs: [
    {
      question: '座標ピッカーと緯度経度クエリツールはどのEPSG投影座標変換をサポートしていますか？',
      answer: 'ツールにはWGS84（EPSG:4326）、Web Mercator（EPSG:3857）、CGCS2000（EPSG:4490）変換が組み込まれており、カスタムPROJ4定義の入力もサポートしています。地図をクリックした後、選択した緯度経度とEPSG投影座標が同時に表示されます。'
    },
    {
      question: '地名を緯度経度座標に迅速に変換し、地図上にマークする方法は？',
      answer: '検索フィールドに地名を入力した後、地名検索←座標機能を使用してNominatim結果を取得し、候補を選択して位置決めとマーカー追加を行い、その後CSV或いはGeoJSONでエクスポートします。'
    },
    {
      question: '緯度経度クエリ結果をコピーしたり、座標ファイルをバッチエクスポートする方法は？',
      answer: '右側の結果エリアは座標テキスト全体のワンクリックコピーをサポートし、CSV或いはGeoJSONフォーマットでファイルエクスポートが可能で、ほとんどのGIS/可視化プラットフォームと互換性があります。'
    },
    {
      question: '座標ピッカーツールはモバイルデバイスやタブレットをサポートしていますか？',
      answer: 'はい、インターフェースはレスポンシブグリッドを使用しており、<strong>緯度経度クエリ</strong>、マーキング、エクスポート操作は携帯電話やタブレットでもスムーズです。'
    },
    {
      question: 'EPSG投影座標変換を使用する際の注意点は？',
      answer: '異なるEPSGシステムには基準と投影の違いがあります。ターゲット座標系が組み込まれていない場合は、正しいPROJ4定義を提供し、変換前に単位を確認してください（緯度経度は度、投影は通常メートル）。'
    }
  ],
  tutorialTitle: '座標ピッカーと緯度経度クエリツールの使用方法：詳細な操作手順',
  steps: [
    {
      title: 'ツールを開いて地図を読み込む',
      description: 'ツールページに入った後、地図が自動的に読み込まれます。ネットワークが制限されている場合は、外部ネットワークアクセスを確認するか、ネットワーク環境を変更して、ベースマップと地名検索の可用性を確保してください。',
      note: '地図のデフォルト座標系はWGS84、緯度経度単位は度です。'
    },
    {
      title: '地名検索と位置決め',
      description: '検索フィールドに地名を入力し（多言語サポート）、「検索」をクリックし、候補から目標位置を選択して地図中央に位置決めします。',
      note: '候補はOpenStreetMap Nominatimから提供されます。'
    },
    {
      title: '地図をクリックして緯度経度を選択',
      description: '地図上の任意の場所をクリックすると、選択した緯度経度とEPSG投影座標が自動的に記録され、右側の座標結果リストに表示されます。',
      note: '複数クリックをサポートし、複数ポイントをマークできます。'
    },
    {
      title: 'EPSG投影を変更またはカスタマイズ',
      description: '左側で一般的な座標系（4326/3857/4490）を選択するか、カスタムPROJ4定義を入力すると、ツールが投影座標を即座に変換し、後続の点選択に適用されます。',
      note: '座標系の変更は既存ポイントの緯度経度を変更せず、投影座標フィールドのみに影響します。'
    },
    {
      title: '座標をコピーまたはエクスポート',
      description: 'エクスポートフォーマット（CSV或いはGeoJSON）を選択し、「全てコピー」或いは「ファイルエクスポート」をクリックして、GIS/可視化/開発操作で座標を使用します。',
      note: 'CSVはExcel/QGISでのバッチ処理に適し、GeoJSONはWebマップとAPI使用に適しています。'
    },
    {
      title: 'クリアまたはマーキング継続',
      description: '再開始が必要な場合は「マーカークリア」をクリックします。その後、検索や点選択を継続して座標リストを段階的に改善します。',
      note: '異なるプロジェクトの要求に応じてEPSG座標系を適時変更することを忘れないでください。'
    }
  ],
  successTitle: 'おめでとうございます！',
  successContent: '座標ピッカーと緯度経度クエリツールを使用して座標収集とEPSG投影座標変換を完了する方法を学び、GISと可視化用の標準データファイルを効率的に生成できるようになりました。',
  relatedToolsTitle: '興味を持たれるかもしれない関連ツール',
  relatedTools: [
    {
      name: '座標系変換器',
      description: 'WGS-84、GCJ-02、BD-09、Web Mercator、UTMを含む異なる座標系間での地理座標変換',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'GPS軌跡再生',
      description: '様々なファイル形式（GPX、KML、GeoJSON、CSV）からGPS軌跡を可視化・再生',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: 'ガウス投影正逆変換',
      description: 'ガウス投影座標と地理座標（緯度経度）間の相互変換ツール',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    },
    {
      name: 'LIDAR点群ビューア',
      description: '無料オンラインLIDAR点群ビューア、LAS、XYZ、PLY、PCDフォーマットをサポート。3D可視化、複数カラーモード、インタラクティブナビゲーション、データ分析機能を提供',
      url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
    }
  ],
  referencesTitle: '参考資料',
  references: [
    {
      name: 'OpenStreetMap Nominatim',
      description: '地名検索とジオコーディングサービス',
      url: 'https://nominatim.org/'
    },
    {
      name: 'EPSG.io',
      description: 'EPSG座標参照系検索とPROJ4定義',
      url: 'https://epsg.io/'
    },
    {
      name: 'Leaflet Documentation',
      description: '軽量Webマップライブラリ',
      url: 'https://leafletjs.com/'
    },
    {
      name: 'Proj4 Documentation',
      description: '座標変換ライブラリドキュメント',
      url: 'https://proj.org/apps/proj.html'
    }
  ]
}