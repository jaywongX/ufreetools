export default {
  name: 'URLエンコード/デコード',
  description: 'URLエンコードは特殊文字をURL対応形式に変換するために使用され、URLパラメータやフォーム送信によく使われます。',
  options: {
    operationType: '操作タイプ',
    encodeMode: 'エンコードモード'
  },
  encodeOptions: {
    standard: '標準エンコード (encodeURI)',
    component: 'コンポーネントエンコード (encodeURIComponent)',
    full: '完全エンコード (すべての文字)',
    standardDescription: 'URL全体をエンコードし、URL構造文字を保持',
    componentDescription: 'URLパラメータに適用、すべての特殊文字をエンコード',
    fullDescription: 'すべての英数字以外の文字をエンコード、スペースを+ではなく%20に変換'
  },
  actions: {
    encode: 'URLエンコード',
    decode: 'URLデコード',
    clear: 'クリア',
    copyResult: '結果をコピー'
  },
  input: {
    textToEncode: 'エンコードするテキスト',
    textToDecode: 'デコードするテキスト',
    encodePlaceholder: 'エンコードするURLまたはテキストを入力...',
    decodePlaceholder: 'デコードするURLまたはテキストを入力...'
  },
  output: {
    encodeResult: 'エンコード結果',
    decodeResult: 'デコード結果'
  },
  messages: {
    copied: '(コピーしました!)',
    error: 'エラー: {message}',
    decodeError: 'デコードできません: "{text}"',
    copyFailed: 'コピーに失敗しました。手動でコピーしてください'
  },
  referenceTable: {
    title: '一般的なURL文字エンコード参照表',
    showTable: '表を表示',
    hideTable: '表を非表示',
    character: '文字',
    encoded: 'URLエンコード',
    description: '説明',
    descriptions: {
      space: 'スペース',
      exclamation: '感嘆符',
      doubleQuote: '二重引用符',
      hash: 'ハッシュ記号',
      dollar: 'ドル記号',
      percent: 'パーセント記号',
      ampersand: 'アンパサンド',
      singleQuote: '一重引用符',
      leftParenthesis: '左括弧',
      rightParenthesis: '右括弧',
      asterisk: 'アスタリスク',
      plus: 'プラス記号',
      comma: 'カンマ',
      slash: 'スラッシュ',
      colon: 'コロン',
      semicolon: 'セミコロン',
      lessThan: '小なり記号',
      equals: '等号',
      greaterThan: '大なり記号',
      questionMark: '疑問符',
      at: 'アットマーク',
      leftBracket: '左角括弧',
      backslash: 'バックスラッシュ',
      rightBracket: '右角括弧',
      caret: 'キャレット',
      backtick: 'バッククォート',
      leftBrace: '左中括弧',
      pipe: '縦線',
      rightBrace: '右中括弧',
      tilde: 'チルダ',
      chinese: 'UTF-8エンコードされた中国語'
    }
  },
  article: {
    title: 'URLエンコード/デコード：完全なURLエンコードとデコードガイド',
    introduction: {
      title: 'URLエンコードとデコードとは？',
      p1: '<strong>URLエンコード/デコード</strong>はWeb開発における重要なプロセスで、特殊文字をインターネットで安全に送信できる形式に変換します。URLに情報を入力する際、スペースや&記号、スラッシュなどの特定の文字はURL構造内で特別な意味を持ちます。URLエンコードはこれらの特殊文字をパーセント記号(%)と2桁の16進数に置き換えます。',
      p2: '当社の<strong>URLエンコード/デコード</strong>ツールは、3種類のエンコードを処理できる直感的なインターフェースを提供します：標準エンコード(encodeURI)、コンポーネントエンコード(encodeURIComponent)、およびすべての文字の完全エンコードです。この多機能性により、<strong>JavaScript URLエンコード/デコード</strong>関数、<strong>PHP URLエンコード/デコード</strong>メソッド、または他のプログラミング言語を使用する開発者が、エンコードおよびデコード操作を簡単にテストおよび検証できます。',
      p3: 'フォーム送信、APIリクエスト、または複雑なURLパラメータを処理する場合でも、<strong>URLエンコード/デコード</strong>技術を理解し正しく実装することは、データ破損やセキュリティの脆弱性を防ぐために不可欠です。この包括的なガイドでは、さまざまなプログラミング言語やフレームワークにおけるURLエンコードとデコードのさまざまな側面を探ります。'
    },
    
    applications: {
      title: '実際の応用シナリオ',
      scenario1: {
        title: 'Web開発とフォーム処理',
        content: 'Web開発者は、フォームを処理する際に<strong>JavaScript URLエンコード/デコード</strong>または<strong>JS URLエンコード/デコード</strong>関数を頻繁に使用して、HTTPリクエスト用にデータが正しくフォーマットされていることを確認します。ユーザーが特殊文字、スペース、または非ASCII文字を含むフォームを送信すると、これらの文字はサーバーに送信される前にエンコードされる必要があります。JavaScriptの<code>encodeURIComponent()</code>関数は通常この目的で使用され、<code>decodeURIComponent()</code>は受信側でデータをデコードします。'
      },
      scenario2: {
        title: 'API開発と統合',
        content: 'APIを開発または使用する際、開発者は<strong>Python URLエンコード/デコード</strong>、<strong>Java URLエンコード/デコード</strong>、または<strong>Golang URLエンコード/デコード</strong>などのさまざまな言語で<strong>URLエンコード/デコード</strong>関数を頻繁に使用する必要があります。クエリパラメータとパスセグメントには、リクエストが正しく形成されるようにエンコードする必要がある特殊文字が含まれている場合があります。例えば、<strong>Python URLエンコード/デコード</strong>操作では通常<code>urllib.parse</code>モジュールを使用し、Java開発者は<code>URLEncoder</code>と<code>URLDecoder</code>クラスを使用することがあります。'
      },
      scenario3: {
        title: 'データベース操作',
        content: 'データベース開発者は、URLを保存または取得する際に<strong>SQL ServerでのURLエンコード/デコード</strong>または他のデータベースシステムでの同様の操作を実行する必要がある場合があります。正しくエンコードされていないと、URL内の特殊文字がSQLクエリに干渉する可能性があります。同様に、<strong>LaravelでのURLエンコード/デコード</strong>などのフレームワークは、データベース操作におけるURLエンコードとデコードを処理するためのユーティリティを提供し、アプリケーションのライフサイクル全体でデータの整合性を確保します。'
      },
      scenario4: {
        title: 'セキュリティと認証',
        content: 'セキュリティ専門家は<strong>URLエンコード/デコード</strong>技術を使用して、Webアプリケーションの脆弱性を分析およびテストします。適切なURLエンコードは、インジェクション攻撃やクロスサイトスクリプティング(XSS)を防ぐのに役立ちます。認証システムを実装する際、開発者はURLにトークンやその他の機密情報をエンコードする必要がある場合があります。<strong>Base64 URLエンコード/デコード</strong>などのライブラリは、特にJWT(JSON Web Tokens)の実装において、これらのセキュリティ関連のエンコードタスクによく使用されます。'
      },
      scenario5: {
        title: 'クロス言語開発環境',
        content: '複数言語環境では、開発者はプログラミングエコシステム全体でURLエンコードが一貫して使用されていることを確認する必要がある場合があります。<strong>C# URLエンコード/デコード</strong>と<strong>TypeScript URLエンコード/デコード</strong>または<strong>PHP URLエンコード/デコード</strong>実装の動作をテストすることは、相互運用性を維持するために重要かもしれません。当社のオンラインツールは中立的な参照点として機能し、開発者が追加のテストコードを作成することなく、異なる言語実装間のエンコード動作を検証できるようにします。'
      }
    },
    
    guide: {
      title: 'URLエンコード/デコードツールの使用方法',
      step1: {
        title: 'ステップ1：操作タイプを選択する',
        content: 'まず、ドロップダウンメニューから希望する操作を選択します。「URLエンコード」を選択すると特殊文字がURL安全な形式に変換され、「URLデコード」を選択するとエンコードされた文字が元の形式に戻ります。この柔軟性により、<strong>JavaScript URLエンコード/デコード</strong>、<strong>PHP URLエンコード/デコード</strong>、または<strong>Python URLエンコード/デコード</strong>で実装する可能性のある機能をテストできます。'
      },
      step2: {  
        title: 'ステップ2：エンコードモードを選択する',
        content: '「URLエンコード」を選択すると、ニーズに合わせて3つの異なるエンコードモードから選択できます：<ul><li><strong>標準エンコード(encodeURI)</strong>：スラッシュ、疑問符などのURL構造文字を保持しながら、URL全体をエンコードします。これは<strong>JavaScript URLエンコード/デコード</strong>での<code>encodeURI()</code>関数の使用に相当します。</li><li><strong>コンポーネントエンコード(encodeURIComponent)</strong>：スラッシュ、疑問符などURLで特別な意味を持つ文字を含むすべての特殊文字をエンコードします。これは<strong>JS URLエンコード/デコード</strong>での<code>encodeURIComponent()</code>関数の使用に相当します。</li><li><strong>完全エンコード</strong>：すべての英数字以外の文字をエンコードし、最も包括的なエンコード方法を提供します。これは<strong>Java URLエンコード/デコード</strong>で実装されるカスタム関数に似ています。</li></ul>'
      },
      step3: {
        title: 'ステップ3：テキストを入力する',
        content: '次に、入力フィールドにエンコードまたはデコードしたいテキストを入力します。これは完全なURL、URLコンポーネント、または特殊文字を含む任意の文字列です。<strong>PHP URLエンコード/デコード</strong>や<strong>Python URLエンコード/デコード</strong>などの同等の機能をテストしている場合は、比較のために同じ文字列をここに入力できます。'
      },
      step4: {
        title: 'ステップ4：結果を処理して使用する',
        content: '「URLエンコード」または「URLデコード」ボタンをクリックして入力を処理します。結果は下の出力フィールドに表示されます。コピーボタンを使用して、<strong>C# URLエンコード/デコード</strong>、<strong>TypeScript URLエンコード/デコード</strong>、または<strong>LaravelでのURLエンコード/デコード</strong>を実装する場合でも、結果をアプリケーションにコピーできます。ツールの下部にある参照表には、一般的なURLエンコード文字が表示されており、参考にすることができます。'
      }
    },
    
    faq: {
      title: 'よくある質問',
      q1: 'encodeURIとencodeURIComponentの違いは何ですか？',
      a1: '<strong>JavaScript URLエンコード/デコード</strong>操作では、これら2つの関数は異なる目的を持っています。<code>encodeURI()</code>はURL全体をエンコードし、URL構造文字（<code>/</code>、<code>?</code>、<code>:</code>、<code>=</code>など）を保持するように設計されています。これは、URL全体をエンコードしながらその構造を維持する必要がある場合に役立ちます。<br><br><code>encodeURIComponent()</code>は、一方で、スラッシュ、疑問符などURLで特別な意味を持つ文字を含むすべての特殊文字をエンコードします。これにより、クエリパラメータなどのURLコンポーネントをエンコードするのに非常に適しています。例えば、ユーザー入力を含む検索URLを構築している場合、特殊文字がURL構造を壊さないようにするために<code>encodeURIComponent()</code>を使用して検索語をエンコードする必要があります。ほとんどの<strong>JS URLエンコード/デコード</strong>実装では、フォーム送信やAPIコールに<code>encodeURIComponent()</code>を使用します。',

      q2: 'PHPでURLエンコード/デコードを実装するにはどうすればよいですか？',
      a2: '<strong>PHP URLエンコード/デコード</strong>操作では、PHPは組み込み関数を提供しています：<code>urlencode()</code>と<code>urldecode()</code>です。<code>urlencode()</code>関数はJavaScriptの<code>encodeURIComponent()</code>と同様に機能し、スペース（+記号として）を含むすべての特殊文字をエンコードします。URL全体をエンコードするために、PHPは<code>rawurlencode()</code>を提供しており、これはRFC 3986標準に従い、スペースを+ではなく%20としてエンコードします。',

      q3: 'PythonでURLエンコード/デコードを実装するにはどうすればよいですか？',
      a3: '<strong>Python URLエンコード/デコード</strong>では、<code>urllib.parse</code>モジュールの<code>quote()</code>と<code>unquote()</code>関数を使用できます。<code>quote()</code>関数はJavaScriptの<code>encodeURIComponent()</code>と同様に機能し、スペース（%20として）を含むすべての特殊文字をエンコードします。<code>unquote()</code>関数はURLエンコードされた文字列をデコードするために使用されます。' ,

      q4: 'URLエンコードの代わりにBase64エンコードを使用できますか？',
      a4: '<strong>Base64 URLエンコード/デコード</strong>技術は時々URL内のデータをエンコードするために使用されますが（特にJWT実装において）、Base64エンコードはURLエンコードの代替ではありません。Base64エンコードはバイナリデータをASCII文字に変換しますが、+、/、=などのURLで特別な意味を持つ文字を生成する可能性があります。',

      q5: 'SQLクエリでURLエンコードをどのように処理しますか？',
      a5: 'SQL ServerでURLエンコード/デコード操作を実行するには、通常、組み込み関数を使用するか、カスタム関数を作成します。SQL Serverには組み込みのURLエンコード関数はありませんが、次のことができます：<br><br>1. SQLクエリを構築する前に、アプリケーションコードでエンコード/デコード操作を実行する。<br>2. SQLでユーザー定義関数を作成する。安全のために、通常はSQL内で直接URLエンコード/デコードを処理するよりも、アプリケーションコードで適切な<strong>C# URLエンコード/デコード</strong>メソッド（.NETアプリケーションの場合）または他の言語固有の実装を使用する方が良いでしょう。'
    },
    
    relatedTools: {
      title: '関連ツール',
      tool1: '<a href="https://meyerweb.com/eric/tools/dencoder/" target="_blank" rel="noopener noreferrer">URL Decoder/Encoder</a>',
      tool2: '<a href="https://www.urldecoder.org/" target="_blank" rel="noopener noreferrer">URL Decode and Encode - Online</a>',
      tool3: '<a href="https://www.url-encode-decode.com/" target="_blank" rel="noopener noreferrer">URL Encode Decode - URL Percent Encoding and Decoding.</a>'
    },
    
    resources: {
      title: '外部リソース',
      resource1: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" target="_blank" rel="noopener noreferrer">MDN Web Docs: encodeURIComponent()</a> - JavaScriptのURLエンコード関数に関する詳細なドキュメント',
      resource2: '<a href="https://www.php.net/manual/en/function.urlencode.php" target="_blank" rel="noopener noreferrer">PHP Manual: urlencode()</a> - PHPのURLエンコード関数に関する公式ドキュメント',
      resource3: '<a href="https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1" target="_blank" rel="noopener noreferrer">W3C Form Submission Specification</a> - ブラウザがフォームデータをどのようにエンコードするかに関する公式仕様'
    },
    
    conclusion: {
      title: '結論',
      content: '当社の<strong>URLエンコード/デコード</strong>ツールは、すべてのURLエンコードおよびデコードニーズに対する多機能なソリューションを提供します。<strong>JavaScript URLエンコード/デコード</strong>、<strong>PHP URLエンコード/デコード</strong>、または<strong>Python URLエンコード/デコード</strong>をテストする必要がある場合でも、当社のツールはあなたのニーズを満たします。'
    }
  }
} 